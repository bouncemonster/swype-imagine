(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))u(v);new MutationObserver(v=>{for(const S of v)if(S.type==="childList")for(const x of S.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function f(v){const S={};return v.integrity&&(S.integrity=v.integrity),v.referrerPolicy&&(S.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?S.credentials="include":v.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function u(v){if(v.ep)return;v.ep=!0;const S=f(v);fetch(v.href,S)}})();function Em(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Gs={exports:{}},sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vp;function qm(){if(Vp)return sl;Vp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function f(u,v,S){var x=null;if(S!==void 0&&(x=""+S),v.key!==void 0&&(x=""+v.key),"key"in v){S={};for(var j in v)j!=="key"&&(S[j]=v[j])}else S=v;return v=S.ref,{$$typeof:p,type:u,key:x,ref:v!==void 0?v:null,props:S}}return sl.Fragment=s,sl.jsx=f,sl.jsxs=f,sl}var Zp;function Um(){return Zp||(Zp=1,Gs.exports=qm()),Gs.exports}var l=Um(),Hs={exports:{}},cl={},Ys={exports:{}},Ps={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Fm(){return Qp||(Qp=1,(function(p){function s(N,E){var L=N.length;N.push(E);e:for(;0<L;){var V=L-1>>>1,ae=N[V];if(0<v(ae,E))N[V]=E,N[L]=ae,L=V;else break e}}function f(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var E=N[0],L=N.pop();if(L!==E){N[0]=L;e:for(var V=0,ae=N.length,m=ae>>>1;V<m;){var M=2*(V+1)-1,G=N[M],X=M+1,ne=N[X];if(0>v(G,L))X<ae&&0>v(ne,G)?(N[V]=ne,N[X]=L,V=X):(N[V]=G,N[M]=L,V=M);else if(X<ae&&0>v(ne,L))N[V]=ne,N[X]=L,V=X;else break e}}return E}function v(N,E){var L=N.sortIndex-E.sortIndex;return L!==0?L:N.id-E.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;p.unstable_now=function(){return S.now()}}else{var x=Date,j=x.now();p.unstable_now=function(){return x.now()-j}}var A=[],y=[],U=1,O=null,B=3,q=!1,P=!1,J=!1,W=!1,F=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function H(N){for(var E=f(y);E!==null;){if(E.callback===null)u(y);else if(E.startTime<=N)u(y),E.sortIndex=E.expirationTime,s(A,E);else break;E=f(y)}}function ve(N){if(J=!1,H(N),!P)if(f(A)!==null)P=!0,ye||(ye=!0,Le());else{var E=f(y);E!==null&&K(ve,E.startTime-N)}}var ye=!1,te=-1,we=5,Se=-1;function et(){return W?!0:!(p.unstable_now()-Se<we)}function Be(){if(W=!1,ye){var N=p.unstable_now();Se=N;var E=!0;try{e:{P=!1,J&&(J=!1,re(te),te=-1),q=!0;var L=B;try{t:{for(H(N),O=f(A);O!==null&&!(O.expirationTime>N&&et());){var V=O.callback;if(typeof V=="function"){O.callback=null,B=O.priorityLevel;var ae=V(O.expirationTime<=N);if(N=p.unstable_now(),typeof ae=="function"){O.callback=ae,H(N),E=!0;break t}O===f(A)&&u(A),H(N)}else u(A);O=f(A)}if(O!==null)E=!0;else{var m=f(y);m!==null&&K(ve,m.startTime-N),E=!1}}break e}finally{O=null,B=L,q=!1}E=void 0}}finally{E?Le():ye=!1}}}var Le;if(typeof z=="function")Le=function(){z(Be)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Qe=tt.port2;tt.port1.onmessage=Be,Le=function(){Qe.postMessage(null)}}else Le=function(){F(Be,0)};function K(N,E){te=F(function(){N(p.unstable_now())},E)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(N){N.callback=null},p.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<N?Math.floor(1e3/N):5},p.unstable_getCurrentPriorityLevel=function(){return B},p.unstable_next=function(N){switch(B){case 1:case 2:case 3:var E=3;break;default:E=B}var L=B;B=E;try{return N()}finally{B=L}},p.unstable_requestPaint=function(){W=!0},p.unstable_runWithPriority=function(N,E){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=B;B=N;try{return E()}finally{B=L}},p.unstable_scheduleCallback=function(N,E,L){var V=p.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?V+L:V):L=V,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=L+ae,N={id:U++,callback:E,priorityLevel:N,startTime:L,expirationTime:ae,sortIndex:-1},L>V?(N.sortIndex=L,s(y,N),f(A)===null&&N===f(y)&&(J?(re(te),te=-1):J=!0,K(ve,L-V))):(N.sortIndex=ae,s(A,N),P||q||(P=!0,ye||(ye=!0,Le()))),N},p.unstable_shouldYield=et,p.unstable_wrapCallback=function(N){var E=B;return function(){var L=B;B=E;try{return N.apply(this,arguments)}finally{B=L}}}})(Ps)),Ps}var Kp;function Bm(){return Kp||(Kp=1,Ys.exports=Fm()),Ys.exports}var Xs={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Lm(){if(Jp)return ie;Jp=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),x=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),B=Symbol.iterator;function q(m){return m===null||typeof m!="object"?null:(m=B&&m[B]||m["@@iterator"],typeof m=="function"?m:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,W={};function F(m,M,G){this.props=m,this.context=M,this.refs=W,this.updater=G||P}F.prototype.isReactComponent={},F.prototype.setState=function(m,M){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,M,"setState")},F.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function re(){}re.prototype=F.prototype;function z(m,M,G){this.props=m,this.context=M,this.refs=W,this.updater=G||P}var H=z.prototype=new re;H.constructor=z,J(H,F.prototype),H.isPureReactComponent=!0;var ve=Array.isArray;function ye(){}var te={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function Se(m,M,G){var X=G.ref;return{$$typeof:p,type:m,key:M,ref:X!==void 0?X:null,props:G}}function et(m,M){return Se(m.type,M,m.props)}function Be(m){return typeof m=="object"&&m!==null&&m.$$typeof===p}function Le(m){var M={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(G){return M[G]})}var tt=/\/+/g;function Qe(m,M){return typeof m=="object"&&m!==null&&m.key!=null?Le(""+m.key):M.toString(36)}function K(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(ye,ye):(m.status="pending",m.then(function(M){m.status==="pending"&&(m.status="fulfilled",m.value=M)},function(M){m.status==="pending"&&(m.status="rejected",m.reason=M)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function N(m,M,G,X,ne){var le=typeof m;(le==="undefined"||le==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(le){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case p:case s:ue=!0;break;case U:return ue=m._init,N(ue(m._payload),M,G,X,ne)}}if(ue)return ne=ne(m),ue=X===""?"."+Qe(m,0):X,ve(ne)?(G="",ue!=null&&(G=ue.replace(tt,"$&/")+"/"),N(ne,M,G,"",function(Kt){return Kt})):ne!=null&&(Be(ne)&&(ne=et(ne,G+(ne.key==null||m&&m.key===ne.key?"":(""+ne.key).replace(tt,"$&/")+"/")+ue)),M.push(ne)),1;ue=0;var ke=X===""?".":X+":";if(ve(m))for(var Ce=0;Ce<m.length;Ce++)X=m[Ce],le=ke+Qe(X,Ce),ue+=N(X,M,G,le,ne);else if(Ce=q(m),typeof Ce=="function")for(m=Ce.call(m),Ce=0;!(X=m.next()).done;)X=X.value,le=ke+Qe(X,Ce++),ue+=N(X,M,G,le,ne);else if(le==="object"){if(typeof m.then=="function")return N(K(m),M,G,X,ne);throw M=String(m),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return ue}function E(m,M,G){if(m==null)return m;var X=[],ne=0;return N(m,X,"","",function(le){return M.call(G,le,ne++)}),X}function L(m){if(m._status===-1){var M=m._result;M=M(),M.then(function(G){(m._status===0||m._status===-1)&&(m._status=1,m._result=G)},function(G){(m._status===0||m._status===-1)&&(m._status=2,m._result=G)}),m._status===-1&&(m._status=0,m._result=M)}if(m._status===1)return m._result.default;throw m._result}var V=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ae={map:E,forEach:function(m,M,G){E(m,function(){M.apply(this,arguments)},G)},count:function(m){var M=0;return E(m,function(){M++}),M},toArray:function(m){return E(m,function(M){return M})||[]},only:function(m){if(!Be(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return ie.Activity=O,ie.Children=ae,ie.Component=F,ie.Fragment=f,ie.Profiler=v,ie.PureComponent=z,ie.StrictMode=u,ie.Suspense=A,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=te,ie.__COMPILER_RUNTIME={__proto__:null,c:function(m){return te.H.useMemoCache(m)}},ie.cache=function(m){return function(){return m.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(m,M,G){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var X=J({},m.props),ne=m.key;if(M!=null)for(le in M.key!==void 0&&(ne=""+M.key),M)!we.call(M,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&M.ref===void 0||(X[le]=M[le]);var le=arguments.length-2;if(le===1)X.children=G;else if(1<le){for(var ue=Array(le),ke=0;ke<le;ke++)ue[ke]=arguments[ke+2];X.children=ue}return Se(m.type,ne,X)},ie.createContext=function(m){return m={$$typeof:x,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:S,_context:m},m},ie.createElement=function(m,M,G){var X,ne={},le=null;if(M!=null)for(X in M.key!==void 0&&(le=""+M.key),M)we.call(M,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ne[X]=M[X]);var ue=arguments.length-2;if(ue===1)ne.children=G;else if(1<ue){for(var ke=Array(ue),Ce=0;Ce<ue;Ce++)ke[Ce]=arguments[Ce+2];ne.children=ke}if(m&&m.defaultProps)for(X in ue=m.defaultProps,ue)ne[X]===void 0&&(ne[X]=ue[X]);return Se(m,le,ne)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(m){return{$$typeof:j,render:m}},ie.isValidElement=Be,ie.lazy=function(m){return{$$typeof:U,_payload:{_status:-1,_result:m},_init:L}},ie.memo=function(m,M){return{$$typeof:y,type:m,compare:M===void 0?null:M}},ie.startTransition=function(m){var M=te.T,G={};te.T=G;try{var X=m(),ne=te.S;ne!==null&&ne(G,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ye,V)}catch(le){V(le)}finally{M!==null&&G.types!==null&&(M.types=G.types),te.T=M}},ie.unstable_useCacheRefresh=function(){return te.H.useCacheRefresh()},ie.use=function(m){return te.H.use(m)},ie.useActionState=function(m,M,G){return te.H.useActionState(m,M,G)},ie.useCallback=function(m,M){return te.H.useCallback(m,M)},ie.useContext=function(m){return te.H.useContext(m)},ie.useDebugValue=function(){},ie.useDeferredValue=function(m,M){return te.H.useDeferredValue(m,M)},ie.useEffect=function(m,M){return te.H.useEffect(m,M)},ie.useEffectEvent=function(m){return te.H.useEffectEvent(m)},ie.useId=function(){return te.H.useId()},ie.useImperativeHandle=function(m,M,G){return te.H.useImperativeHandle(m,M,G)},ie.useInsertionEffect=function(m,M){return te.H.useInsertionEffect(m,M)},ie.useLayoutEffect=function(m,M){return te.H.useLayoutEffect(m,M)},ie.useMemo=function(m,M){return te.H.useMemo(m,M)},ie.useOptimistic=function(m,M){return te.H.useOptimistic(m,M)},ie.useReducer=function(m,M,G){return te.H.useReducer(m,M,G)},ie.useRef=function(m){return te.H.useRef(m)},ie.useState=function(m){return te.H.useState(m)},ie.useSyncExternalStore=function(m,M,G){return te.H.useSyncExternalStore(m,M,G)},ie.useTransition=function(){return te.H.useTransition()},ie.version="19.2.8",ie}var Wp;function $s(){return Wp||(Wp=1,Xs.exports=Lm()),Xs.exports}var Vs={exports:{}},gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Gm(){if($p)return gt;$p=1;var p=$s();function s(A){var y="https://react.dev/errors/"+A;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var U=2;U<arguments.length;U++)y+="&args[]="+encodeURIComponent(arguments[U])}return"Minified React error #"+A+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var u={d:{f,r:function(){throw Error(s(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},v=Symbol.for("react.portal");function S(A,y,U){var O=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:v,key:O==null?null:""+O,children:A,containerInfo:y,implementation:U}}var x=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(A,y){if(A==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,gt.createPortal=function(A,y){var U=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(s(299));return S(A,y,null,U)},gt.flushSync=function(A){var y=x.T,U=u.p;try{if(x.T=null,u.p=2,A)return A()}finally{x.T=y,u.p=U,u.d.f()}},gt.preconnect=function(A,y){typeof A=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,u.d.C(A,y))},gt.prefetchDNS=function(A){typeof A=="string"&&u.d.D(A)},gt.preinit=function(A,y){if(typeof A=="string"&&y&&typeof y.as=="string"){var U=y.as,O=j(U,y.crossOrigin),B=typeof y.integrity=="string"?y.integrity:void 0,q=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;U==="style"?u.d.S(A,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:O,integrity:B,fetchPriority:q}):U==="script"&&u.d.X(A,{crossOrigin:O,integrity:B,fetchPriority:q,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},gt.preinitModule=function(A,y){if(typeof A=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var U=j(y.as,y.crossOrigin);u.d.M(A,{crossOrigin:U,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&u.d.M(A)},gt.preload=function(A,y){if(typeof A=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var U=y.as,O=j(U,y.crossOrigin);u.d.L(A,U,{crossOrigin:O,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},gt.preloadModule=function(A,y){if(typeof A=="string")if(y){var U=j(y.as,y.crossOrigin);u.d.m(A,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:U,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else u.d.m(A)},gt.requestFormReset=function(A){u.d.r(A)},gt.unstable_batchedUpdates=function(A,y){return A(y)},gt.useFormState=function(A,y,U){return x.H.useFormState(A,y,U)},gt.useFormStatus=function(){return x.H.useHostTransitionStatus()},gt.version="19.2.8",gt}var Ip;function Hm(){if(Ip)return Vs.exports;Ip=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Vs.exports=Gm(),Vs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function Ym(){if(ef)return cl;ef=1;var p=Bm(),s=$s(),f=Hm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function v(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function S(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function A(e){if(S(e)!==e)throw Error(u(188))}function y(e){var t=e.alternate;if(!t){if(t=S(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var r=i.alternate;if(r===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===a)return A(i),e;if(r===n)return A(i),t;r=r.sibling}throw Error(u(188))}if(a.return!==n.return)a=i,n=r;else{for(var o=!1,c=i.child;c;){if(c===a){o=!0,a=i,n=r;break}if(c===n){o=!0,n=i,a=r;break}c=c.sibling}if(!o){for(c=r.child;c;){if(c===a){o=!0,a=r,n=i;break}if(c===n){o=!0,n=r,a=i;break}c=c.sibling}if(!o)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function U(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=U(e),t!==null)return t;e=e.sibling}return null}var O=Object.assign,B=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),re=Symbol.for("react.consumer"),z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),Se=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),Be=Symbol.iterator;function Le(e){return e===null||typeof e!="object"?null:(e=Be&&e[Be]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function Qe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case F:return"Profiler";case W:return"StrictMode";case ve:return"Suspense";case ye:return"SuspenseList";case Se:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case z:return e.displayName||"Context";case re:return(e._context.displayName||"Context")+".Consumer";case H:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return t=e.displayName||null,t!==null?t:Qe(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return Qe(e(t))}catch{}}return null}var K=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},V=[],ae=-1;function m(e){return{current:e}}function M(e){0>ae||(e.current=V[ae],V[ae]=null,ae--)}function G(e,t){ae++,V[ae]=e.current,e.current=t}var X=m(null),ne=m(null),le=m(null),ue=m(null);function ke(e,t){switch(G(le,t),G(ne,e),G(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?hp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=hp(t),e=xp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(X),G(X,e)}function Ce(){M(X),M(ne),M(le)}function Kt(e){e.memoizedState!==null&&G(ue,e);var t=X.current,a=xp(t,e.type);t!==a&&(G(ne,e),G(X,a))}function qe(e){ne.current===e&&(M(X),M(ne)),ue.current===e&&(M(ue),il._currentValue=L)}var ca,Ra;function yt(e){if(ca===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ca=t&&t[1]||"",Ra=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ca+e+Ra}var ka=!1;function Y(e,t){if(!e||ka)return"";ka=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var R=function(){throw Error()};if(Object.defineProperty(R.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(R,[])}catch(w){var D=w}Reflect.construct(e,[],R)}else{try{R.call()}catch(w){D=w}e.call(R.prototype)}}else{try{throw Error()}catch(w){D=w}(R=e())&&typeof R.catch=="function"&&R.catch(function(){})}}catch(w){if(w&&D&&typeof w.stack=="string")return[w.stack,D.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=n.DetermineComponentFrameRoot(),o=r[0],c=r[1];if(o&&c){var d=o.split(`
`),_=c.split(`
`);for(i=n=0;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(n===d.length||i===_.length)for(n=d.length-1,i=_.length-1;1<=n&&0<=i&&d[n]!==_[i];)i--;for(;1<=n&&0<=i;n--,i--)if(d[n]!==_[i]){if(n!==1||i!==1)do if(n--,i--,0>i||d[n]!==_[i]){var T=`
`+d[n].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=n&&0<=i);break}}}finally{ka=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?yt(a):""}function pe(e,t){switch(e.tag){case 26:case 27:case 5:return yt(e.type);case 16:return yt("Lazy");case 13:return e.child!==t&&t!==null?yt("Suspense Fallback"):yt("Suspense");case 19:return yt("SuspenseList");case 0:case 15:return Y(e.type,!1);case 11:return Y(e.type.render,!1);case 1:return Y(e.type,!0);case 31:return yt("Activity");default:return""}}function I(e){try{var t="",a=null;do t+=pe(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ct=Object.prototype.hasOwnProperty,lt=p.unstable_scheduleCallback,Oa=p.unstable_cancelCallback,Ea=p.unstable_shouldYield,un=p.unstable_requestPaint,fe=p.unstable_now,Ge=p.unstable_getCurrentPriorityLevel,Ue=p.unstable_ImmediatePriority,xt=p.unstable_UserBlockingPriority,ut=p.unstable_NormalPriority,Re=p.unstable_LowPriority,Jt=p.unstable_IdlePriority,ta=p.log,ua=p.unstable_setDisableYieldValue,at=null,Ke=null;function He(e){if(typeof ta=="function"&&ua(e),Ke&&typeof Ke.setStrictMode=="function")try{Ke.setStrictMode(at,e)}catch{}}var nt=Math.clz32?Math.clz32:dl,Tr=Math.log,Mr=Math.LN2;function dl(e){return e>>>=0,e===0?32:31-(Tr(e)/Mr|0)|0}var pn=256,fn=262144,Ye=4194304;function _t(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,r=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=n&134217727;return c!==0?(n=c&~r,n!==0?i=_t(n):(o&=c,o!==0?i=_t(o):a||(a=c&~e,a!==0&&(i=_t(a))))):(c=n&~r,c!==0?i=_t(c):o!==0?i=_t(o):a||(a=n&~e,a!==0&&(i=_t(a)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,a=t&-t,r>=a||r===32&&(a&4194048)!==0)?t:i}function zt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function aa(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qa(){var e=Ye;return Ye<<=1,(Ye&62914560)===0&&(Ye=4194304),e}function Ua(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wt(e,t,a,n,i,r){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var c=e.entanglements,d=e.expirationTimes,_=e.hiddenUpdates;for(a=o&~a;0<a;){var T=31-nt(a),R=1<<T;c[T]=0,d[T]=-1;var D=_[T];if(D!==null)for(_[T]=null,T=0;T<D.length;T++){var w=D[T];w!==null&&(w.lane&=-536870913)}a&=~R}n!==0&&pa(e,n,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(o&~t))}function pa(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-nt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function dn(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-nt(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function rt(e,t){var a=t&-t;return a=(a&42)!==0?1:St(a),(a&(e.suspendedLanes|t))!==0?0:a}function St(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Nt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fa(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:Bp(e.type))}function tc(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var Fa=Math.random().toString(36).slice(2),pt="__reactFiber$"+Fa,Dt="__reactProps$"+Fa,Cn="__reactContainer$"+Fa,Cr="__reactEvents$"+Fa,Nf="__reactListeners$"+Fa,Df="__reactHandles$"+Fa,ac="__reactResources$"+Fa,yi="__reactMarker$"+Fa;function Rr(e){delete e[pt],delete e[Dt],delete e[Cr],delete e[Nf],delete e[Df]}function Rn(e){var t=e[pt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Cn]||a[pt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Sp(e);e!==null;){if(a=e[pt])return a;e=Sp(e)}return t}e=a,a=e.parentNode}return null}function kn(e){if(e=e[pt]||e[Cn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function bi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function On(e){var t=e[ac];return t||(t=e[ac]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ot(e){e[yi]=!0}var nc=new Set,ic={};function mn(e,t){En(e,t),En(e+"Capture",t)}function En(e,t){for(ic[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var wf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lc={},rc={};function jf(e){return ct.call(rc,e)?!0:ct.call(lc,e)?!1:wf.test(e)?rc[e]=!0:(lc[e]=!0,!1)}function ml(e,t,a){if(jf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function hl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function da(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Af(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kr(e){if(!e._valueTracker){var t=oc(e)?"checked":"value";e._valueTracker=Af(e,t,""+e[t])}}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=oc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function xl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Tf=/[\n"\\]/g;function Lt(e){return e.replace(Tf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Or(e,t,a,n,i,r,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Bt(t)):e.value!==""+Bt(t)&&(e.value=""+Bt(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Er(e,o,Bt(t)):a!=null?Er(e,o,Bt(a)):n!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Bt(c):e.removeAttribute("name")}function cc(e,t,a,n,i,r,o,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||a!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){kr(e);return}a=a!=null?""+Bt(a):"",t=t!=null?""+Bt(t):a,c||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=c?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),kr(e)}function Er(e,t,a){t==="number"&&xl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qn(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function uc(e,t,a){if(t!=null&&(t=""+Bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Bt(a):""}function pc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(K(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=Bt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),kr(e)}function Un(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Mf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Mf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function dc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&fc(e,i,n)}else for(var r in t)t.hasOwnProperty(r)&&fc(e,r,t[r])}function qr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return Rf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ma(){}var Ur=null;function Fr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fn=null,Bn=null;function mc(e){var t=kn(e);if(t&&(e=t.stateNode)){var a=e[Dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Or(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Lt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Dt]||null;if(!i)throw Error(u(90));Or(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&sc(n)}break e;case"textarea":uc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&qn(e,!!a.multiple,t,!1)}}}var Br=!1;function hc(e,t,a){if(Br)return e(t,a);Br=!0;try{var n=e(t);return n}finally{if(Br=!1,(Fn!==null||Bn!==null)&&(ir(),Fn&&(t=Fn,e=Bn,Bn=Fn=null,mc(t),e)))for(t=0;t<e.length;t++)mc(e[t])}}function _i(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Dt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lr=!1;if(ha)try{var zi={};Object.defineProperty(zi,"passive",{get:function(){Lr=!0}}),window.addEventListener("test",zi,zi),window.removeEventListener("test",zi,zi)}catch{Lr=!1}var Ba=null,Gr=null,gl=null;function xc(){if(gl)return gl;var e,t=Gr,a=t.length,n,i="value"in Ba?Ba.value:Ba.textContent,r=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[r-n];n++);return gl=i.slice(e,1<n?1-n:void 0)}function yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function vc(){return!1}function wt(e){function t(a,n,i,r,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(a=e[c],this[c]=a?a(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bl:vc,this.isPropagationStopped=vc,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),t}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=wt(hn),Si=O({},hn,{view:0,detail:0}),kf=wt(Si),Hr,Yr,Ni,zl=O({},Si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(Hr=e.screenX-Ni.screenX,Yr=e.screenY-Ni.screenY):Yr=Hr=0,Ni=e),Hr)},movementY:function(e){return"movementY"in e?e.movementY:Yr}}),gc=wt(zl),Of=O({},zl,{dataTransfer:0}),Ef=wt(Of),qf=O({},Si,{relatedTarget:0}),Pr=wt(qf),Uf=O({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=wt(Uf),Bf=O({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lf=wt(Bf),Gf=O({},hn,{data:0}),yc=wt(Gf),Hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pf[e])?!!t[e]:!1}function Xr(){return Xf}var Vf=O({},Si,{key:function(e){if(e.key){var t=Hf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xr,charCode:function(e){return e.type==="keypress"?yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zf=wt(Vf),Qf=O({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=wt(Qf),Kf=O({},Si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xr}),Jf=wt(Kf),Wf=O({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$f=wt(Wf),If=O({},zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ed=wt(If),td=O({},hn,{newState:0,oldState:0}),ad=wt(td),nd=[9,13,27,32],Vr=ha&&"CompositionEvent"in window,Di=null;ha&&"documentMode"in document&&(Di=document.documentMode);var id=ha&&"TextEvent"in window&&!Di,_c=ha&&(!Vr||Di&&8<Di&&11>=Di),zc=" ",Sc=!1;function Nc(e,t){switch(e){case"keyup":return nd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function ld(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Sc=!0,zc);case"textInput":return e=t.data,e===zc&&Sc?null:e;default:return null}}function rd(e,t){if(Ln)return e==="compositionend"||!Vr&&Nc(e,t)?(e=xc(),gl=Gr=Ba=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _c&&t.locale!=="ko"?null:t.data;default:return null}}var od={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!od[e.type]:t==="textarea"}function jc(e,t,a,n){Fn?Bn?Bn.push(n):Bn=[n]:Fn=n,t=pr(t,"onChange"),0<t.length&&(a=new _l("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var wi=null,ji=null;function sd(e){cp(e,0)}function Sl(e){var t=bi(e);if(sc(t))return e}function Ac(e,t){if(e==="change")return t}var Tc=!1;if(ha){var Zr;if(ha){var Qr="oninput"in document;if(!Qr){var Mc=document.createElement("div");Mc.setAttribute("oninput","return;"),Qr=typeof Mc.oninput=="function"}Zr=Qr}else Zr=!1;Tc=Zr&&(!document.documentMode||9<document.documentMode)}function Cc(){wi&&(wi.detachEvent("onpropertychange",Rc),ji=wi=null)}function Rc(e){if(e.propertyName==="value"&&Sl(ji)){var t=[];jc(t,ji,e,Fr(e)),hc(sd,t)}}function cd(e,t,a){e==="focusin"?(Cc(),wi=t,ji=a,wi.attachEvent("onpropertychange",Rc)):e==="focusout"&&Cc()}function ud(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(ji)}function pd(e,t){if(e==="click")return Sl(t)}function fd(e,t){if(e==="input"||e==="change")return Sl(t)}function dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:dd;function Ai(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!ct.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Oc(e,t){var a=kc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=kc(a)}}function Ec(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ec(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=xl(e.document)}return t}function Kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var md=ha&&"documentMode"in document&&11>=document.documentMode,Gn=null,Jr=null,Ti=null,Wr=!1;function Uc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wr||Gn==null||Gn!==xl(n)||(n=Gn,"selectionStart"in n&&Kr(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ti&&Ai(Ti,n)||(Ti=n,n=pr(Jr,"onSelect"),0<n.length&&(t=new _l("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Gn)))}function xn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Hn={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},$r={},Fc={};ha&&(Fc=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function vn(e){if($r[e])return $r[e];if(!Hn[e])return e;var t=Hn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Fc)return $r[e]=t[a];return e}var Bc=vn("animationend"),Lc=vn("animationiteration"),Gc=vn("animationstart"),hd=vn("transitionrun"),xd=vn("transitionstart"),vd=vn("transitioncancel"),Hc=vn("transitionend"),Yc=new Map,Ir="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ir.push("scrollEnd");function $t(e,t){Yc.set(e,t),mn(t,[e])}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gt=[],Yn=0,eo=0;function Dl(){for(var e=Yn,t=eo=Yn=0;t<e;){var a=Gt[t];Gt[t++]=null;var n=Gt[t];Gt[t++]=null;var i=Gt[t];Gt[t++]=null;var r=Gt[t];if(Gt[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}r!==0&&Pc(a,i,r)}}function wl(e,t,a,n){Gt[Yn++]=e,Gt[Yn++]=t,Gt[Yn++]=a,Gt[Yn++]=n,eo|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function to(e,t,a,n){return wl(e,t,a,n),jl(e)}function gn(e,t){return wl(e,null,null,t),jl(e)}function Pc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,r=e.return;r!==null;)r.childLanes|=a,n=r.alternate,n!==null&&(n.childLanes|=a),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-nt(a),e=r.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),r):null}function jl(e){if(50<Wi)throw Wi=0,ps=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Pn={};function gd(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,n){return new gd(e,t,a,n)}function ao(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Al(e,t,a,n,i,r){var o=0;if(n=e,typeof e=="function")ao(e)&&(o=1);else if(typeof e=="string")o=Sm(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Se:return e=kt(31,a,t,i),e.elementType=Se,e.lanes=r,e;case J:return yn(a.children,i,r,t);case W:o=8,i|=24;break;case F:return e=kt(12,a,t,i|2),e.elementType=F,e.lanes=r,e;case ve:return e=kt(13,a,t,i),e.elementType=ve,e.lanes=r,e;case ye:return e=kt(19,a,t,i),e.elementType=ye,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:o=10;break e;case re:o=9;break e;case H:o=11;break e;case te:o=14;break e;case we:o=16,n=null;break e}o=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=kt(o,a,t,i),t.elementType=e,t.type=n,t.lanes=r,t}function yn(e,t,a,n){return e=kt(7,e,n,t),e.lanes=a,e}function no(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function Vc(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function io(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zc=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var a=Zc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:I(t)},Zc.set(e,t),t)}return{value:e,source:t,stack:I(t)}}var Xn=[],Vn=0,Tl=null,Mi=0,Yt=[],Pt=0,La=null,ia=1,la="";function va(e,t){Xn[Vn++]=Mi,Xn[Vn++]=Tl,Tl=e,Mi=t}function Qc(e,t,a){Yt[Pt++]=ia,Yt[Pt++]=la,Yt[Pt++]=La,La=e;var n=ia;e=la;var i=32-nt(n)-1;n&=~(1<<i),a+=1;var r=32-nt(t)+i;if(30<r){var o=i-i%5;r=(n&(1<<o)-1).toString(32),n>>=o,i-=o,ia=1<<32-nt(t)+i|a<<i|n,la=r+e}else ia=1<<r|a<<i|n,la=e}function lo(e){e.return!==null&&(va(e,1),Qc(e,1,0))}function ro(e){for(;e===Tl;)Tl=Xn[--Vn],Xn[Vn]=null,Mi=Xn[--Vn],Xn[Vn]=null;for(;e===La;)La=Yt[--Pt],Yt[Pt]=null,la=Yt[--Pt],Yt[Pt]=null,ia=Yt[--Pt],Yt[Pt]=null}function Kc(e,t){Yt[Pt++]=ia,Yt[Pt++]=la,Yt[Pt++]=La,ia=t.id,la=t.overflow,La=e}var ft=null,Oe=null,ge=!1,Ga=null,Xt=!1,oo=Error(u(519));function Ha(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ci(Ht(t,e)),oo}function Jc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[pt]=e,t[Dt]=n,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<Ii.length;a++)me(Ii[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),cc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),pc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||dp(t.textContent,a)?(n.popover!=null&&(me("beforetoggle",t),me("toggle",t)),n.onScroll!=null&&me("scroll",t),n.onScrollEnd!=null&&me("scrollend",t),n.onClick!=null&&(t.onclick=ma),t=!0):t=!1,t||Ha(e,!0)}function Wc(e){for(ft=e.return;ft;)switch(ft.tag){case 5:case 31:case 13:Xt=!1;return;case 27:case 3:Xt=!0;return;default:ft=ft.return}}function Zn(e){if(e!==ft)return!1;if(!ge)return Wc(e),ge=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ws(e.type,e.memoizedProps)),a=!a),a&&Oe&&Ha(e),Wc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Oe=zp(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Oe=zp(e)}else t===27?(t=Oe,an(e.type)?(e=Cs,Cs=null,Oe=e):Oe=t):Oe=ft?Zt(e.stateNode.nextSibling):null;return!0}function bn(){Oe=ft=null,ge=!1}function so(){var e=Ga;return e!==null&&(Mt===null?Mt=e:Mt.push.apply(Mt,e),Ga=null),e}function Ci(e){Ga===null?Ga=[e]:Ga.push(e)}var co=m(null),_n=null,ga=null;function Ya(e,t,a){G(co,t._currentValue),t._currentValue=a}function ya(e){e._currentValue=co.current,M(co)}function uo(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function po(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var o=i.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=i;for(var d=0;d<t.length;d++)if(c.context===t[d]){r.lanes|=a,c=r.alternate,c!==null&&(c.lanes|=a),uo(r.return,a,e),n||(o=null);break e}r=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=a,r=o.alternate,r!==null&&(r.lanes|=a),uo(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Qn(e,t,a,n){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=i.type;Rt(i.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(i===ue.current){if(o=i.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}i=i.return}e!==null&&po(t,e,a,n),t.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Rt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zn(e){_n=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function dt(e){return $c(_n,e)}function Cl(e,t){return _n===null&&zn(e),$c(e,t)}function $c(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ga===null){if(e===null)throw Error(u(308));ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ga=ga.next=t;return a}var yd=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bd=p.unstable_scheduleCallback,_d=p.unstable_NormalPriority,Je={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fo(){return{controller:new yd,data:new Map,refCount:0}}function Ri(e){e.refCount--,e.refCount===0&&bd(_d,function(){e.controller.abort()})}var ki=null,mo=0,Kn=0,Jn=null;function zd(e,t){if(ki===null){var a=ki=[];mo=0,Kn=vs(),Jn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return mo++,t.then(Ic,Ic),t}function Ic(){if(--mo===0&&ki!==null){Jn!==null&&(Jn.status="fulfilled");var e=ki;ki=null,Kn=0,Jn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sd(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var e0=N.S;N.S=function(e,t){Uu=fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&zd(e,t),e0!==null&&e0(e,t)};var Sn=m(null);function ho(){var e=Sn.current;return e!==null?e:Me.pooledCache}function Rl(e,t){t===null?G(Sn,Sn.current):G(Sn,t.pool)}function t0(){var e=ho();return e===null?null:{parent:Je._currentValue,pool:e}}var Wn=Error(u(460)),xo=Error(u(474)),kl=Error(u(542)),Ol={then:function(){}};function a0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n0(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ma,ma),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l0(e),e;default:if(typeof t.status=="string")t.then(ma,ma);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,l0(e),e}throw Dn=t,Wn}}function Nn(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dn=a,Wn):a}}var Dn=null;function i0(){if(Dn===null)throw Error(u(459));var e=Dn;return Dn=null,e}function l0(e){if(e===Wn||e===kl)throw Error(u(483))}var $n=null,Oi=0;function El(e){var t=Oi;return Oi+=1,$n===null&&($n=[]),n0($n,e,t)}function Ei(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ql(e,t){throw t.$$typeof===B?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function r0(e){function t(g,h){if(e){var b=g.deletions;b===null?(g.deletions=[h],g.flags|=16):b.push(h)}}function a(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g){for(var h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function i(g,h){return g=xa(g,h),g.index=0,g.sibling=null,g}function r(g,h,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<h?(g.flags|=67108866,h):b):(g.flags|=67108866,h)):(g.flags|=1048576,h)}function o(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function c(g,h,b,C){return h===null||h.tag!==6?(h=no(b,g.mode,C),h.return=g,h):(h=i(h,b),h.return=g,h)}function d(g,h,b,C){var $=b.type;return $===J?T(g,h,b.props.children,C,b.key):h!==null&&(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Nn($)===h.type)?(h=i(h,b.props),Ei(h,b),h.return=g,h):(h=Al(b.type,b.key,b.props,null,g.mode,C),Ei(h,b),h.return=g,h)}function _(g,h,b,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=io(b,g.mode,C),h.return=g,h):(h=i(h,b.children||[]),h.return=g,h)}function T(g,h,b,C,$){return h===null||h.tag!==7?(h=yn(b,g.mode,C,$),h.return=g,h):(h=i(h,b),h.return=g,h)}function R(g,h,b){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=no(""+h,g.mode,b),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case q:return b=Al(h.type,h.key,h.props,null,g.mode,b),Ei(b,h),b.return=g,b;case P:return h=io(h,g.mode,b),h.return=g,h;case we:return h=Nn(h),R(g,h,b)}if(K(h)||Le(h))return h=yn(h,g.mode,b,null),h.return=g,h;if(typeof h.then=="function")return R(g,El(h),b);if(h.$$typeof===z)return R(g,Cl(g,h),b);ql(g,h)}return null}function D(g,h,b,C){var $=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return $!==null?null:c(g,h,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case q:return b.key===$?d(g,h,b,C):null;case P:return b.key===$?_(g,h,b,C):null;case we:return b=Nn(b),D(g,h,b,C)}if(K(b)||Le(b))return $!==null?null:T(g,h,b,C,null);if(typeof b.then=="function")return D(g,h,El(b),C);if(b.$$typeof===z)return D(g,h,Cl(g,b),C);ql(g,b)}return null}function w(g,h,b,C,$){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return g=g.get(b)||null,c(h,g,""+C,$);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return g=g.get(C.key===null?b:C.key)||null,d(h,g,C,$);case P:return g=g.get(C.key===null?b:C.key)||null,_(h,g,C,$);case we:return C=Nn(C),w(g,h,b,C,$)}if(K(C)||Le(C))return g=g.get(b)||null,T(h,g,C,$,null);if(typeof C.then=="function")return w(g,h,b,El(C),$);if(C.$$typeof===z)return w(g,h,b,Cl(h,C),$);ql(h,C)}return null}function Z(g,h,b,C){for(var $=null,be=null,Q=h,ce=h=0,xe=null;Q!==null&&ce<b.length;ce++){Q.index>ce?(xe=Q,Q=null):xe=Q.sibling;var _e=D(g,Q,b[ce],C);if(_e===null){Q===null&&(Q=xe);break}e&&Q&&_e.alternate===null&&t(g,Q),h=r(_e,h,ce),be===null?$=_e:be.sibling=_e,be=_e,Q=xe}if(ce===b.length)return a(g,Q),ge&&va(g,ce),$;if(Q===null){for(;ce<b.length;ce++)Q=R(g,b[ce],C),Q!==null&&(h=r(Q,h,ce),be===null?$=Q:be.sibling=Q,be=Q);return ge&&va(g,ce),$}for(Q=n(Q);ce<b.length;ce++)xe=w(Q,g,ce,b[ce],C),xe!==null&&(e&&xe.alternate!==null&&Q.delete(xe.key===null?ce:xe.key),h=r(xe,h,ce),be===null?$=xe:be.sibling=xe,be=xe);return e&&Q.forEach(function(sn){return t(g,sn)}),ge&&va(g,ce),$}function ee(g,h,b,C){if(b==null)throw Error(u(151));for(var $=null,be=null,Q=h,ce=h=0,xe=null,_e=b.next();Q!==null&&!_e.done;ce++,_e=b.next()){Q.index>ce?(xe=Q,Q=null):xe=Q.sibling;var sn=D(g,Q,_e.value,C);if(sn===null){Q===null&&(Q=xe);break}e&&Q&&sn.alternate===null&&t(g,Q),h=r(sn,h,ce),be===null?$=sn:be.sibling=sn,be=sn,Q=xe}if(_e.done)return a(g,Q),ge&&va(g,ce),$;if(Q===null){for(;!_e.done;ce++,_e=b.next())_e=R(g,_e.value,C),_e!==null&&(h=r(_e,h,ce),be===null?$=_e:be.sibling=_e,be=_e);return ge&&va(g,ce),$}for(Q=n(Q);!_e.done;ce++,_e=b.next())_e=w(Q,g,ce,_e.value,C),_e!==null&&(e&&_e.alternate!==null&&Q.delete(_e.key===null?ce:_e.key),h=r(_e,h,ce),be===null?$=_e:be.sibling=_e,be=_e);return e&&Q.forEach(function(Om){return t(g,Om)}),ge&&va(g,ce),$}function Te(g,h,b,C){if(typeof b=="object"&&b!==null&&b.type===J&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case q:e:{for(var $=b.key;h!==null;){if(h.key===$){if($=b.type,$===J){if(h.tag===7){a(g,h.sibling),C=i(h,b.props.children),C.return=g,g=C;break e}}else if(h.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===we&&Nn($)===h.type){a(g,h.sibling),C=i(h,b.props),Ei(C,b),C.return=g,g=C;break e}a(g,h);break}else t(g,h);h=h.sibling}b.type===J?(C=yn(b.props.children,g.mode,C,b.key),C.return=g,g=C):(C=Al(b.type,b.key,b.props,null,g.mode,C),Ei(C,b),C.return=g,g=C)}return o(g);case P:e:{for($=b.key;h!==null;){if(h.key===$)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){a(g,h.sibling),C=i(h,b.children||[]),C.return=g,g=C;break e}else{a(g,h);break}else t(g,h);h=h.sibling}C=io(b,g.mode,C),C.return=g,g=C}return o(g);case we:return b=Nn(b),Te(g,h,b,C)}if(K(b))return Z(g,h,b,C);if(Le(b)){if($=Le(b),typeof $!="function")throw Error(u(150));return b=$.call(b),ee(g,h,b,C)}if(typeof b.then=="function")return Te(g,h,El(b),C);if(b.$$typeof===z)return Te(g,h,Cl(g,b),C);ql(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,h!==null&&h.tag===6?(a(g,h.sibling),C=i(h,b),C.return=g,g=C):(a(g,h),C=no(b,g.mode,C),C.return=g,g=C),o(g)):a(g,h)}return function(g,h,b,C){try{Oi=0;var $=Te(g,h,b,C);return $n=null,$}catch(Q){if(Q===Wn||Q===kl)throw Q;var be=kt(29,Q,null,g.mode);return be.lanes=C,be.return=g,be}finally{}}}var wn=r0(!0),o0=r0(!1),Pa=!1;function vo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function go(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ze&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=jl(e),Pc(e,null,a),t}return wl(e,n,t,a),jl(e)}function qi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,dn(e,a)}}function yo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,r=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};r===null?i=r=o:r=r.next=o,a=a.next}while(a!==null);r===null?i=r=t:r=r.next=t}else i=r=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var bo=!1;function Ui(){if(bo){var e=Jn;if(e!==null)throw e}}function Fi(e,t,a,n){bo=!1;var i=e.updateQueue;Pa=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var d=c,_=d.next;d.next=null,o===null?r=_:o.next=_,o=d;var T=e.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==o&&(c===null?T.firstBaseUpdate=_:c.next=_,T.lastBaseUpdate=d))}if(r!==null){var R=i.baseState;o=0,T=_=d=null,c=r;do{var D=c.lane&-536870913,w=D!==c.lane;if(w?(he&D)===D:(n&D)===D){D!==0&&D===Kn&&(bo=!0),T!==null&&(T=T.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Z=e,ee=c;D=t;var Te=a;switch(ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){R=Z.call(Te,R,D);break e}R=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,D=typeof Z=="function"?Z.call(Te,R,D):Z,D==null)break e;R=O({},R,D);break e;case 2:Pa=!0}}D=c.callback,D!==null&&(e.flags|=64,w&&(e.flags|=8192),w=i.callbacks,w===null?i.callbacks=[D]:w.push(D))}else w={lane:D,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(_=T=w,d=R):T=T.next=w,o|=D;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;w=c,c=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);T===null&&(d=R),i.baseState=d,i.firstBaseUpdate=_,i.lastBaseUpdate=T,r===null&&(i.shared.lanes=0),Wa|=o,e.lanes=o,e.memoizedState=R}}function s0(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function c0(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)s0(a[e],t)}var In=m(null),Ul=m(0);function u0(e,t){e=Aa,G(Ul,e),G(In,t),Aa=e|t.baseLanes}function _o(){G(Ul,Aa),G(In,In.current)}function zo(){Aa=Ul.current,M(In),M(Ul)}var Ot=m(null),Vt=null;function Za(e){var t=e.alternate;G(Ve,Ve.current&1),G(Ot,e),Vt===null&&(t===null||In.current!==null||t.memoizedState!==null)&&(Vt=e)}function So(e){G(Ve,Ve.current),G(Ot,e),Vt===null&&(Vt=e)}function p0(e){e.tag===22?(G(Ve,Ve.current),G(Ot,e),Vt===null&&(Vt=e)):Qa()}function Qa(){G(Ve,Ve.current),G(Ot,Ot.current)}function Et(e){M(Ot),Vt===e&&(Vt=null),M(Ve)}var Ve=m(0);function Fl(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ts(a)||Ms(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=0,oe=null,je=null,We=null,Bl=!1,ei=!1,jn=!1,Ll=0,Bi=0,ti=null,Nd=0;function Pe(){throw Error(u(321))}function No(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Rt(e[a],t[a]))return!1;return!0}function Do(e,t,a,n,i,r){return ba=r,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Q0:Lo,jn=!1,r=a(n,i),jn=!1,ei&&(r=d0(t,a,n,i)),f0(e),r}function f0(e){N.H=Hi;var t=je!==null&&je.next!==null;if(ba=0,We=je=oe=null,Bl=!1,Bi=0,ti=null,t)throw Error(u(300));e===null||$e||(e=e.dependencies,e!==null&&Ml(e)&&($e=!0))}function d0(e,t,a,n){oe=e;var i=0;do{if(ei&&(ti=null),Bi=0,ei=!1,25<=i)throw Error(u(301));if(i+=1,We=je=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}N.H=K0,r=t(a,n)}while(ei);return r}function Dd(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Li(t):t,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(oe.flags|=1024),t}function wo(){var e=Ll!==0;return Ll=0,e}function jo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Ao(e){if(Bl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bl=!1}ba=0,We=je=oe=null,ei=!1,Bi=Ll=0,ti=null}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?oe.memoizedState=We=e:We=We.next=e,We}function Ze(){if(je===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=We===null?oe.memoizedState:We.next;if(t!==null)We=t,je=e;else{if(e===null)throw oe.alternate===null?Error(u(467)):Error(u(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},We===null?oe.memoizedState=We=e:We=We.next=e}return We}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Li(e){var t=Bi;return Bi+=1,ti===null&&(ti=[]),e=n0(ti,e,t),t=oe,(We===null?t.memoizedState:We.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Q0:Lo),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Li(e);if(e.$$typeof===z)return dt(e)}throw Error(u(438,String(e)))}function To(e){var t=null,a=oe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=oe.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Gl(),oe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=et;return t.index++,a}function _a(e,t){return typeof t=="function"?t(e):t}function Yl(e){var t=Ze();return Mo(t,je,e)}function Mo(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var i=e.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}t.baseQueue=i=r,n.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var c=o=null,d=null,_=t,T=!1;do{var R=_.lane&-536870913;if(R!==_.lane?(he&R)===R:(ba&R)===R){var D=_.revertLane;if(D===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),R===Kn&&(T=!0);else if((ba&D)===D){_=_.next,D===Kn&&(T=!0);continue}else R={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(c=d=R,o=r):d=d.next=R,oe.lanes|=D,Wa|=D;R=_.action,jn&&a(r,R),r=_.hasEagerState?_.eagerState:a(r,R)}else D={lane:R,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},d===null?(c=d=D,o=r):d=d.next=D,oe.lanes|=R,Wa|=R;_=_.next}while(_!==null&&_!==t);if(d===null?o=r:d.next=c,!Rt(r,e.memoizedState)&&($e=!0,T&&(a=Jn,a!==null)))throw a;e.memoizedState=r,e.baseState=o,e.baseQueue=d,n.lastRenderedState=r}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Co(e){var t=Ze(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,r=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);Rt(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),a.lastRenderedState=r}return[r,n]}function m0(e,t,a){var n=oe,i=Ze(),r=ge;if(r){if(a===void 0)throw Error(u(407));a=a()}else a=t();var o=!Rt((je||i).memoizedState,a);if(o&&(i.memoizedState=a,$e=!0),i=i.queue,Oo(v0.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||We!==null&&We.memoizedState.tag&1){if(n.flags|=2048,ai(9,{destroy:void 0},x0.bind(null,n,i,a,t),null),Me===null)throw Error(u(349));r||(ba&127)!==0||h0(n,t,a)}return a}function h0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=oe.updateQueue,t===null?(t=Gl(),oe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function x0(e,t,a,n){t.value=a,t.getSnapshot=n,g0(t)&&y0(e)}function v0(e,t,a){return a(function(){g0(t)&&y0(e)})}function g0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Rt(e,a)}catch{return!0}}function y0(e){var t=gn(e,2);t!==null&&Ct(t,e,2)}function Ro(e){var t=bt();if(typeof e=="function"){var a=e;if(e=a(),jn){He(!0);try{a()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},t}function b0(e,t,a,n){return e.baseState=a,Mo(e,je,typeof n=="function"?n:_a)}function wd(e,t,a,n,i){if(Vl(e))throw Error(u(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){r.listeners.push(o)}};N.T!==null?a(!0):r.isTransition=!1,n(r),a=t.pending,a===null?(r.next=t.pending=r,_0(t,r)):(r.next=a.next,t.pending=a.next=r)}}function _0(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var r=N.T,o={};N.T=o;try{var c=a(i,n),d=N.S;d!==null&&d(o,c),z0(e,t,c)}catch(_){ko(e,t,_)}finally{r!==null&&o.types!==null&&(r.types=o.types),N.T=r}}else try{r=a(i,n),z0(e,t,r)}catch(_){ko(e,t,_)}}function z0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){S0(e,t,n)},function(n){return ko(e,t,n)}):S0(e,t,a)}function S0(e,t,a){t.status="fulfilled",t.value=a,N0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,_0(e,a)))}function ko(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,N0(t),t=t.next;while(t!==n)}e.action=null}function N0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function D0(e,t){return t}function w0(e,t){if(ge){var a=Me.formState;if(a!==null){e:{var n=oe;if(ge){if(Oe){t:{for(var i=Oe,r=Xt;i.nodeType!==8;){if(!r){i=null;break t}if(i=Zt(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){Oe=Zt(i.nextSibling),n=i.data==="F!";break e}}Ha(n)}n=!1}n&&(t=a[0])}}return a=bt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:D0,lastRenderedState:t},a.queue=n,a=X0.bind(null,oe,n),n.dispatch=a,n=Ro(!1),r=Bo.bind(null,oe,!1,n.queue),n=bt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=wd.bind(null,oe,i,r,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function j0(e){var t=Ze();return A0(t,je,e)}function A0(e,t,a){if(t=Mo(e,t,D0)[0],e=Yl(_a)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Li(t)}catch(o){throw o===Wn?kl:o}else n=t;t=Ze();var i=t.queue,r=i.dispatch;return a!==t.memoizedState&&(oe.flags|=2048,ai(9,{destroy:void 0},jd.bind(null,i,a),null)),[n,r,e]}function jd(e,t){e.action=t}function T0(e){var t=Ze(),a=je;if(a!==null)return A0(t,a,e);Ze(),t=t.memoizedState,a=Ze();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function ai(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=oe.updateQueue,t===null&&(t=Gl(),oe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function M0(){return Ze().memoizedState}function Pl(e,t,a,n){var i=bt();oe.flags|=e,i.memoizedState=ai(1|t,{destroy:void 0},a,n===void 0?null:n)}function Xl(e,t,a,n){var i=Ze();n=n===void 0?null:n;var r=i.memoizedState.inst;je!==null&&n!==null&&No(n,je.memoizedState.deps)?i.memoizedState=ai(t,r,a,n):(oe.flags|=e,i.memoizedState=ai(1|t,r,a,n))}function C0(e,t){Pl(8390656,8,e,t)}function Oo(e,t){Xl(2048,8,e,t)}function Ad(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=Gl(),oe.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function R0(e){var t=Ze().memoizedState;return Ad({ref:t,nextImpl:e}),function(){if((ze&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function k0(e,t){return Xl(4,2,e,t)}function O0(e,t){return Xl(4,4,e,t)}function E0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,a){a=a!=null?a.concat([e]):null,Xl(4,4,E0.bind(null,t,e),a)}function Eo(){}function U0(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&No(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function F0(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&No(t,n[1]))return n[0];if(n=e(),jn){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[n,t],n}function qo(e,t,a){return a===void 0||(ba&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Bu(),oe.lanes|=e,Wa|=e,a)}function B0(e,t,a,n){return Rt(a,t)?a:In.current!==null?(e=qo(e,a,n),Rt(e,t)||($e=!0),e):(ba&42)===0||(ba&1073741824)!==0&&(he&261930)===0?($e=!0,e.memoizedState=a):(e=Bu(),oe.lanes|=e,Wa|=e,t)}function L0(e,t,a,n,i){var r=E.p;E.p=r!==0&&8>r?r:8;var o=N.T,c={};N.T=c,Bo(e,!1,t,a);try{var d=i(),_=N.S;if(_!==null&&_(c,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var T=Sd(d,n);Gi(e,t,T,Ft(e))}else Gi(e,t,n,Ft(e))}catch(R){Gi(e,t,{then:function(){},status:"rejected",reason:R},Ft())}finally{E.p=r,o!==null&&c.types!==null&&(o.types=c.types),N.T=o}}function Td(){}function Uo(e,t,a,n){if(e.tag!==5)throw Error(u(476));var i=G0(e).queue;L0(e,i,t,L,a===null?Td:function(){return H0(e),a(n)})}function G0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:L},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function H0(e){var t=G0(e);t.next===null&&(t=e.alternate.memoizedState),Gi(e,t.next.queue,{},Ft())}function Fo(){return dt(il)}function Y0(){return Ze().memoizedState}function P0(){return Ze().memoizedState}function Md(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ft();e=Xa(a);var n=Va(t,e,a);n!==null&&(Ct(n,t,a),qi(n,t,a)),t={cache:fo()},e.payload=t;return}t=t.return}}function Cd(e,t,a){var n=Ft();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(e)?V0(t,a):(a=to(e,t,a,n),a!==null&&(Ct(a,e,n),Z0(a,t,n)))}function X0(e,t,a){var n=Ft();Gi(e,t,a,n)}function Gi(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))V0(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,c=r(o,a);if(i.hasEagerState=!0,i.eagerState=c,Rt(c,o))return wl(e,t,i,0),Me===null&&Dl(),!1}catch{}finally{}if(a=to(e,t,i,n),a!==null)return Ct(a,e,n),Z0(a,t,n),!0}return!1}function Bo(e,t,a,n){if(n={lane:2,revertLane:vs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(t)throw Error(u(479))}else t=to(e,a,n,2),t!==null&&Ct(t,e,2)}function Vl(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function V0(e,t){ei=Bl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Z0(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,dn(e,a)}}var Hi={readContext:dt,use:Hl,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useLayoutEffect:Pe,useInsertionEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useSyncExternalStore:Pe,useId:Pe,useHostTransitionStatus:Pe,useFormState:Pe,useActionState:Pe,useOptimistic:Pe,useMemoCache:Pe,useCacheRefresh:Pe};Hi.useEffectEvent=Pe;var Q0={readContext:dt,use:Hl,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:C0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Pl(4194308,4,E0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Pl(4194308,4,e,t)},useInsertionEffect:function(e,t){Pl(4,2,e,t)},useMemo:function(e,t){var a=bt();t=t===void 0?null:t;var n=e();if(jn){He(!0);try{e()}finally{He(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=bt();if(a!==void 0){var i=a(t);if(jn){He(!0);try{a(t)}finally{He(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Cd.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:function(e){e=Ro(e);var t=e.queue,a=X0.bind(null,oe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Eo,useDeferredValue:function(e,t){var a=bt();return qo(a,e,t)},useTransition:function(){var e=Ro(!1);return e=L0.bind(null,oe,e.queue,!0,!1),bt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=oe,i=bt();if(ge){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),Me===null)throw Error(u(349));(he&127)!==0||h0(n,t,a)}i.memoizedState=a;var r={value:a,getSnapshot:t};return i.queue=r,C0(v0.bind(null,n,r,e),[e]),n.flags|=2048,ai(9,{destroy:void 0},x0.bind(null,n,r,a,t),null),a},useId:function(){var e=bt(),t=Me.identifierPrefix;if(ge){var a=la,n=ia;a=(n&~(1<<32-nt(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ll++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Nd++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Fo,useFormState:w0,useActionState:w0,useOptimistic:function(e){var t=bt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Bo.bind(null,oe,!0,a),a.dispatch=t,[e,t]},useMemoCache:To,useCacheRefresh:function(){return bt().memoizedState=Md.bind(null,oe)},useEffectEvent:function(e){var t=bt(),a={impl:e};return t.memoizedState=a,function(){if((ze&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},Lo={readContext:dt,use:Hl,useCallback:U0,useContext:dt,useEffect:Oo,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:F0,useReducer:Yl,useRef:M0,useState:function(){return Yl(_a)},useDebugValue:Eo,useDeferredValue:function(e,t){var a=Ze();return B0(a,je.memoizedState,e,t)},useTransition:function(){var e=Yl(_a)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Li(e),t]},useSyncExternalStore:m0,useId:Y0,useHostTransitionStatus:Fo,useFormState:j0,useActionState:j0,useOptimistic:function(e,t){var a=Ze();return b0(a,je,e,t)},useMemoCache:To,useCacheRefresh:P0};Lo.useEffectEvent=R0;var K0={readContext:dt,use:Hl,useCallback:U0,useContext:dt,useEffect:Oo,useImperativeHandle:q0,useInsertionEffect:k0,useLayoutEffect:O0,useMemo:F0,useReducer:Co,useRef:M0,useState:function(){return Co(_a)},useDebugValue:Eo,useDeferredValue:function(e,t){var a=Ze();return je===null?qo(a,e,t):B0(a,je.memoizedState,e,t)},useTransition:function(){var e=Co(_a)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:Li(e),t]},useSyncExternalStore:m0,useId:Y0,useHostTransitionStatus:Fo,useFormState:T0,useActionState:T0,useOptimistic:function(e,t){var a=Ze();return je!==null?b0(a,je,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:To,useCacheRefresh:P0};K0.useEffectEvent=R0;function Go(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:O({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ho={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Ft(),i=Xa(n);i.payload=t,a!=null&&(i.callback=a),t=Va(e,i,n),t!==null&&(Ct(t,e,n),qi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Ft(),i=Xa(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Va(e,i,n),t!==null&&(Ct(t,e,n),qi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Ft(),n=Xa(a);n.tag=2,t!=null&&(n.callback=t),t=Va(e,n,a),t!==null&&(Ct(t,e,a),qi(t,e,a))}};function J0(e,t,a,n,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,r,o):t.prototype&&t.prototype.isPureReactComponent?!Ai(a,n)||!Ai(i,r):!0}function W0(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&Ho.enqueueReplaceState(t,t.state,null)}function An(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=O({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function $0(e){Nl(e)}function I0(e){console.error(e)}function eu(e){Nl(e)}function Zl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function tu(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Yo(e,t,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){Zl(e,t)},a}function au(e){return e=Xa(e),e.tag=3,e}function nu(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;e.payload=function(){return i(r)},e.callback=function(){tu(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){tu(t,a,n),typeof i!="function"&&($a===null?$a=new Set([this]):$a.add(this));var c=n.stack;this.componentDidCatch(n.value,{componentStack:c!==null?c:""})})}function Rd(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&Qn(t,a,i,!0),a=Ot.current,a!==null){switch(a.tag){case 31:case 13:return Vt===null?lr():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ol?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),ms(e,n,i)),!1;case 22:return a.flags|=65536,n===Ol?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),ms(e,n,i)),!1}throw Error(u(435,a.tag))}return ms(e,n,i),lr(),!1}if(ge)return t=Ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==oo&&(e=Error(u(422),{cause:n}),Ci(Ht(e,a)))):(n!==oo&&(t=Error(u(423),{cause:n}),Ci(Ht(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=Ht(n,a),i=Yo(e.stateNode,n,i),yo(e,i),Xe!==4&&(Xe=2)),!1;var r=Error(u(520),{cause:n});if(r=Ht(r,a),Ji===null?Ji=[r]:Ji.push(r),Xe!==4&&(Xe=2),t===null)return!0;n=Ht(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=Yo(a.stateNode,n,e),yo(a,e),!1;case 1:if(t=a.type,r=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&($a===null||!$a.has(r))))return a.flags|=65536,i&=-i,a.lanes|=i,i=au(i),nu(i,e,a,n),yo(a,i),!1}a=a.return}while(a!==null);return!1}var Po=Error(u(461)),$e=!1;function mt(e,t,a,n){t.child=e===null?o0(t,null,a,n):wn(t,e.child,a,n)}function iu(e,t,a,n,i){a=a.render;var r=t.ref;if("ref"in n){var o={};for(var c in n)c!=="ref"&&(o[c]=n[c])}else o=n;return zn(t),n=Do(e,t,a,o,r,i),c=wo(),e!==null&&!$e?(jo(e,t,i),za(e,t,i)):(ge&&c&&lo(t),t.flags|=1,mt(e,t,n,i),t.child)}function lu(e,t,a,n,i){if(e===null){var r=a.type;return typeof r=="function"&&!ao(r)&&r.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=r,ru(e,t,r,n,i)):(e=Al(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!$o(e,i)){var o=r.memoizedProps;if(a=a.compare,a=a!==null?a:Ai,a(o,n)&&e.ref===t.ref)return za(e,t,i)}return t.flags|=1,e=xa(r,n),e.ref=t.ref,e.return=t,t.child=e}function ru(e,t,a,n,i){if(e!==null){var r=e.memoizedProps;if(Ai(r,n)&&e.ref===t.ref)if($e=!1,t.pendingProps=n=r,$o(e,i))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,za(e,t,i)}return Xo(e,t,a,n,i)}function ou(e,t,a,n){var i=n.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~r}else n=0,t.child=null;return su(e,t,r,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(t,r!==null?r.cachePool:null),r!==null?u0(t,r):_o(),p0(t);else return n=t.lanes=536870912,su(e,t,r!==null?r.baseLanes|a:a,a,n)}else r!==null?(Rl(t,r.cachePool),u0(t,r),Qa(),t.memoizedState=null):(e!==null&&Rl(t,null),_o(),Qa());return mt(e,t,i,a),t.child}function Yi(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function su(e,t,a,n,i){var r=ho();return r=r===null?null:{parent:Je._currentValue,pool:r},t.memoizedState={baseLanes:a,cachePool:r},e!==null&&Rl(t,null),_o(),p0(t),e!==null&&Qn(e,t,n,!0),t.childLanes=i,null}function Ql(e,t){return t=Jl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cu(e,t,a){return wn(t,e.child,null,a),e=Ql(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function kd(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ge){if(n.mode==="hidden")return e=Ql(t,n),t.lanes=536870912,Yi(null,e);if(So(t),(e=Oe)?(e=_p(e,Xt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:La!==null?{id:ia,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,ft=t,Oe=null)):e=null,e===null)throw Ha(t);return t.lanes=536870912,null}return Ql(t,n)}var r=e.memoizedState;if(r!==null){var o=r.dehydrated;if(So(t),i)if(t.flags&256)t.flags&=-257,t=cu(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if($e||Qn(e,t,a,!1),i=(a&e.childLanes)!==0,$e||i){if(n=Me,n!==null&&(o=rt(n,a),o!==0&&o!==r.retryLane))throw r.retryLane=o,gn(e,o),Ct(n,e,o),Po;lr(),t=cu(e,t,a)}else e=r.treeContext,Oe=Zt(o.nextSibling),ft=t,ge=!0,Ga=null,Xt=!1,e!==null&&Kc(t,e),t=Ql(t,n),t.flags|=4096;return t}return e=xa(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Kl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Xo(e,t,a,n,i){return zn(t),a=Do(e,t,a,n,void 0,i),n=wo(),e!==null&&!$e?(jo(e,t,i),za(e,t,i)):(ge&&n&&lo(t),t.flags|=1,mt(e,t,a,i),t.child)}function uu(e,t,a,n,i,r){return zn(t),t.updateQueue=null,a=d0(t,n,a,i),f0(e),n=wo(),e!==null&&!$e?(jo(e,t,r),za(e,t,r)):(ge&&n&&lo(t),t.flags|=1,mt(e,t,a,r),t.child)}function pu(e,t,a,n,i){if(zn(t),t.stateNode===null){var r=Pn,o=a.contextType;typeof o=="object"&&o!==null&&(r=dt(o)),r=new a(n,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ho,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=n,r.state=t.memoizedState,r.refs={},vo(t),o=a.contextType,r.context=typeof o=="object"&&o!==null?dt(o):Pn,r.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(Go(t,a,o,n),r.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(o=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),o!==r.state&&Ho.enqueueReplaceState(r,r.state,null),Fi(t,n,r,i),Ui(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,d=An(a,c);r.props=d;var _=r.context,T=a.contextType;o=Pn,typeof T=="object"&&T!==null&&(o=dt(T));var R=a.getDerivedStateFromProps;T=typeof R=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,T||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||_!==o)&&W0(t,r,n,o),Pa=!1;var D=t.memoizedState;r.state=D,Fi(t,n,r,i),Ui(),_=t.memoizedState,c||D!==_||Pa?(typeof R=="function"&&(Go(t,a,R,n),_=t.memoizedState),(d=Pa||J0(t,a,d,n,D,_,o))?(T||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=_),r.props=n,r.state=_,r.context=o,n=d):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{r=t.stateNode,go(e,t),o=t.memoizedProps,T=An(a,o),r.props=T,R=t.pendingProps,D=r.context,_=a.contextType,d=Pn,typeof _=="object"&&_!==null&&(d=dt(_)),c=a.getDerivedStateFromProps,(_=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==R||D!==d)&&W0(t,r,n,d),Pa=!1,D=t.memoizedState,r.state=D,Fi(t,n,r,i),Ui();var w=t.memoizedState;o!==R||D!==w||Pa||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof c=="function"&&(Go(t,a,c,n),w=t.memoizedState),(T=Pa||J0(t,a,T,n,D,w,d)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(_||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(n,w,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(n,w,d)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),r.props=n,r.state=w,r.context=d,n=T):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),n=!1)}return r=n,Kl(e,t),n=(t.flags&128)!==0,r||n?(r=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&n?(t.child=wn(t,e.child,null,i),t.child=wn(t,null,a,i)):mt(e,t,a,i),t.memoizedState=r.state,e=t.child):e=za(e,t,i),e}function fu(e,t,a,n){return bn(),t.flags|=256,mt(e,t,a,n),t.child}var Vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zo(e){return{baseLanes:e,cachePool:t0()}}function Qo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ut),e}function du(e,t,a){var n=t.pendingProps,i=!1,r=(t.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(ge){if(i?Za(t):Qa(),(e=Oe)?(e=_p(e,Xt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:La!==null?{id:ia,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Vc(e),a.return=t,t.child=a,ft=t,Oe=null)):e=null,e===null)throw Ha(t);return Ms(e)?t.lanes=32:t.lanes=536870912,null}var c=n.children;return n=n.fallback,i?(Qa(),i=t.mode,c=Jl({mode:"hidden",children:c},i),n=yn(n,i,a,null),c.return=t,n.return=t,c.sibling=n,t.child=c,n=t.child,n.memoizedState=Zo(a),n.childLanes=Qo(e,o,a),t.memoizedState=Vo,Yi(null,n)):(Za(t),Ko(t,c))}var d=e.memoizedState;if(d!==null&&(c=d.dehydrated,c!==null)){if(r)t.flags&256?(Za(t),t.flags&=-257,t=Jo(e,t,a)):t.memoizedState!==null?(Qa(),t.child=e.child,t.flags|=128,t=null):(Qa(),c=n.fallback,i=t.mode,n=Jl({mode:"visible",children:n.children},i),c=yn(c,i,a,null),c.flags|=2,n.return=t,c.return=t,n.sibling=c,t.child=n,wn(t,e.child,null,a),n=t.child,n.memoizedState=Zo(a),n.childLanes=Qo(e,o,a),t.memoizedState=Vo,t=Yi(null,n));else if(Za(t),Ms(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var _=o.dgst;o=_,n=Error(u(419)),n.stack="",n.digest=o,Ci({value:n,source:null,stack:null}),t=Jo(e,t,a)}else if($e||Qn(e,t,a,!1),o=(a&e.childLanes)!==0,$e||o){if(o=Me,o!==null&&(n=rt(o,a),n!==0&&n!==d.retryLane))throw d.retryLane=n,gn(e,n),Ct(o,e,n),Po;Ts(c)||lr(),t=Jo(e,t,a)}else Ts(c)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,Oe=Zt(c.nextSibling),ft=t,ge=!0,Ga=null,Xt=!1,e!==null&&Kc(t,e),t=Ko(t,n.children),t.flags|=4096);return t}return i?(Qa(),c=n.fallback,i=t.mode,d=e.child,_=d.sibling,n=xa(d,{mode:"hidden",children:n.children}),n.subtreeFlags=d.subtreeFlags&65011712,_!==null?c=xa(_,c):(c=yn(c,i,a,null),c.flags|=2),c.return=t,n.return=t,n.sibling=c,t.child=n,Yi(null,n),n=t.child,c=e.child.memoizedState,c===null?c=Zo(a):(i=c.cachePool,i!==null?(d=Je._currentValue,i=i.parent!==d?{parent:d,pool:d}:i):i=t0(),c={baseLanes:c.baseLanes|a,cachePool:i}),n.memoizedState=c,n.childLanes=Qo(e,o,a),t.memoizedState=Vo,Yi(e.child,n)):(Za(t),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function Ko(e,t){return t=Jl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Jl(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function Jo(e,t,a){return wn(t,e.child,null,a),e=Ko(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mu(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),uo(e.return,t,a)}function Wo(e,t,a,n,i,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=r)}function hu(e,t,a){var n=t.pendingProps,i=n.revealOrder,r=n.tail;n=n.children;var o=Ve.current,c=(o&2)!==0;if(c?(o=o&1|2,t.flags|=128):o&=1,G(Ve,o),mt(e,t,n,a),n=ge?Mi:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mu(e,a,t);else if(e.tag===19)mu(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Fl(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),Wo(t,!1,i,a,r,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fl(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Wo(t,!0,a,null,r,n);break;case"together":Wo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function za(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Wa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Qn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=xa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function $o(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function Od(e,t,a){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),Ya(t,Je,e.memoizedState.cache),bn();break;case 27:case 5:Kt(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:Ya(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,So(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Za(t),t.flags|=128,null):(a&t.child.childLanes)!==0?du(e,t,a):(Za(t),e=za(e,t,a),e!==null?e.sibling:null);Za(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(Qn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return hu(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Ve,Ve.current),n)break;return null;case 22:return t.lanes=0,ou(e,t,a,t.pendingProps);case 24:Ya(t,Je,e.memoizedState.cache)}return za(e,t,a)}function xu(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!$o(e,a)&&(t.flags&128)===0)return $e=!1,Od(e,t,a);$e=(e.flags&131072)!==0}else $e=!1,ge&&(t.flags&1048576)!==0&&Qc(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Nn(t.elementType),t.type=e,typeof e=="function")ao(e)?(n=An(e,n),t.tag=1,t=pu(null,t,e,n,a)):(t.tag=0,t=Xo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===H){t.tag=11,t=iu(null,t,e,n,a);break e}else if(i===te){t.tag=14,t=lu(null,t,e,n,a);break e}}throw t=Qe(e)||e,Error(u(306,t,""))}}return t;case 0:return Xo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=An(n,t.pendingProps),pu(e,t,n,i,a);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var r=t.memoizedState;i=r.element,go(e,t),Fi(t,n,null,a);var o=t.memoizedState;if(n=o.cache,Ya(t,Je,n),n!==r.cache&&po(t,[Je],a,!0),Ui(),n=o.element,r.isDehydrated)if(r={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=fu(e,t,n,a);break e}else if(n!==i){i=Ht(Error(u(424)),t),Ci(i),t=fu(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Zt(e.firstChild),ft=t,ge=!0,Ga=null,Xt=!0,a=o0(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(bn(),n===i){t=za(e,t,a);break e}mt(e,t,n,a)}t=t.child}return t;case 26:return Kl(e,t),e===null?(a=jp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ge||(a=t.type,e=t.pendingProps,n=fr(le.current).createElement(a),n[pt]=t,n[Dt]=e,ht(n,a,e),ot(n),t.stateNode=n):t.memoizedState=jp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Kt(t),e===null&&ge&&(n=t.stateNode=Np(t.type,t.pendingProps,le.current),ft=t,Xt=!0,i=Oe,an(t.type)?(Cs=i,Oe=Zt(n.firstChild)):Oe=i),mt(e,t,t.pendingProps.children,a),Kl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ge&&((i=n=Oe)&&(n=um(n,t.type,t.pendingProps,Xt),n!==null?(t.stateNode=n,ft=t,Oe=Zt(n.firstChild),Xt=!1,i=!0):i=!1),i||Ha(t)),Kt(t),i=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,n=r.children,ws(i,r)?n=null:o!==null&&ws(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Do(e,t,Dd,null,null,a),il._currentValue=i),Kl(e,t),mt(e,t,n,a),t.child;case 6:return e===null&&ge&&((e=a=Oe)&&(a=pm(a,t.pendingProps,Xt),a!==null?(t.stateNode=a,ft=t,Oe=null,e=!0):e=!1),e||Ha(t)),null;case 13:return du(e,t,a);case 4:return ke(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=wn(t,null,n,a):mt(e,t,n,a),t.child;case 11:return iu(e,t,t.type,t.pendingProps,a);case 7:return mt(e,t,t.pendingProps,a),t.child;case 8:return mt(e,t,t.pendingProps.children,a),t.child;case 12:return mt(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,Ya(t,t.type,n.value),mt(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,zn(t),i=dt(i),n=n(i),t.flags|=1,mt(e,t,n,a),t.child;case 14:return lu(e,t,t.type,t.pendingProps,a);case 15:return ru(e,t,t.type,t.pendingProps,a);case 19:return hu(e,t,a);case 31:return kd(e,t,a);case 22:return ou(e,t,a,t.pendingProps);case 24:return zn(t),n=dt(Je),e===null?(i=ho(),i===null&&(i=Me,r=fo(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=a),i=r),t.memoizedState={parent:n,cache:i},vo(t),Ya(t,Je,i)):((e.lanes&a)!==0&&(go(e,t),Fi(t,null,null,a),Ui()),i=e.memoizedState,r=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ya(t,Je,n)):(n=r.cache,Ya(t,Je,n),n!==i.cache&&po(t,[Je],a,!0))),mt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Sa(e){e.flags|=4}function Io(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Yu())e.flags|=8192;else throw Dn=Ol,xo}else e.flags&=-16777217}function vu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rp(t))if(Yu())e.flags|=8192;else throw Dn=Ol,xo}function Wl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qa():536870912,e.lanes|=t,ri|=t)}function Pi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ed(e,t,a){var n=t.pendingProps;switch(ro(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ya(Je),Ce(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?Sa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,so())),Ee(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(Sa(t),r!==null?(Ee(t),vu(t,r)):(Ee(t),Io(t,i,null,n,a))):r?r!==e.memoizedState?(Sa(t),Ee(t),vu(t,r)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Sa(t),Ee(t),Io(t,i,e,n,a)),null;case 27:if(qe(t),a=le.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Sa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Ee(t),null}e=X.current,Zn(t)?Jc(t):(e=Np(i,n,a),t.stateNode=e,Sa(t))}return Ee(t),null;case 5:if(qe(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Sa(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return Ee(t),null}if(r=X.current,Zn(t))Jc(t);else{var o=fr(le.current);switch(r){case 1:r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=o.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?r.multiple=!0:n.size&&(r.size=n.size);break;default:r=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}r[pt]=t,r[Dt]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)r.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=r;e:switch(ht(r,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sa(t)}}return Ee(t),Io(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Sa(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=le.current,Zn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=ft,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[pt]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||dp(e.nodeValue,a)),e||Ha(t,!0)}else e=fr(e).createTextNode(n),e[pt]=t,t.stateNode=e}return Ee(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=Zn(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[pt]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else a=so(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Ee(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[pt]=t}else bn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else i=so(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),Wl(t,t.updateQueue),Ee(t),null);case 4:return Ce(),e===null&&_s(t.stateNode.containerInfo),Ee(t),null;case 10:return ya(t.type),Ee(t),null;case 19:if(M(Ve),n=t.memoizedState,n===null)return Ee(t),null;if(i=(t.flags&128)!==0,r=n.rendering,r===null)if(i)Pi(n,!1);else{if(Xe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Fl(e),r!==null){for(t.flags|=128,Pi(n,!1),e=r.updateQueue,t.updateQueue=e,Wl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Xc(a,e),a=a.sibling;return G(Ve,Ve.current&1|2),ge&&va(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&fe()>ar&&(t.flags|=128,i=!0,Pi(n,!1),t.lanes=4194304)}else{if(!i)if(e=Fl(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Wl(t,e),Pi(n,!0),n.tail===null&&n.tailMode==="hidden"&&!r.alternate&&!ge)return Ee(t),null}else 2*fe()-n.renderingStartTime>ar&&a!==536870912&&(t.flags|=128,i=!0,Pi(n,!1),t.lanes=4194304);n.isBackwards?(r.sibling=t.child,t.child=r):(e=n.last,e!==null?e.sibling=r:t.child=r,n.last=r)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=fe(),e.sibling=null,a=Ve.current,G(Ve,i?a&1|2:a&1),ge&&va(t,n.treeForkCount),e):(Ee(t),null);case 22:case 23:return Et(t),zo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),a=t.updateQueue,a!==null&&Wl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&M(Sn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ya(Je),Ee(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function qd(e,t){switch(ro(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ya(Je),Ce(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return qe(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(u(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return M(Ve),null;case 4:return Ce(),null;case 10:return ya(t.type),null;case 22:case 23:return Et(t),zo(),e!==null&&M(Sn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ya(Je),null;case 25:return null;default:return null}}function gu(e,t){switch(ro(t),t.tag){case 3:ya(Je),Ce();break;case 26:case 27:case 5:qe(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:M(Ve);break;case 10:ya(t.type);break;case 22:case 23:Et(t),zo(),e!==null&&M(Sn);break;case 24:ya(Je)}}function Xi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var r=a.create,o=a.inst;n=r(),o.destroy=n}a=a.next}while(a!==i)}}catch(c){De(t,t.return,c)}}function Ka(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&e)===e){var o=n.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,i=t;var d=a,_=c;try{_()}catch(T){De(i,d,T)}}}n=n.next}while(n!==r)}}catch(T){De(t,t.return,T)}}function yu(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{c0(t,a)}catch(n){De(e,e.return,n)}}}function bu(e,t,a){a.props=An(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){De(e,t,n)}}function Vi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){De(e,t,i)}}function ra(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){De(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){De(e,t,i)}else a.current=null}function _u(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){De(e,e.return,i)}}function es(e,t,a){try{var n=e.stateNode;im(n,e.type,a,t),n[Dt]=t}catch(i){De(e,e.return,i)}}function zu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&an(e.type)||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&an(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function as(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=ma));else if(n!==4&&(n===27&&an(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(as(e,t,a),e=e.sibling;e!==null;)as(e,t,a),e=e.sibling}function $l(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&an(e.type)&&(a=e.stateNode),e=e.child,e!==null))for($l(e,t,a),e=e.sibling;e!==null;)$l(e,t,a),e=e.sibling}function Su(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ht(t,n,a),t[pt]=e,t[Dt]=a}catch(r){De(e,e.return,r)}}var Na=!1,Ie=!1,ns=!1,Nu=typeof WeakSet=="function"?WeakSet:Set,st=null;function Ud(e,t){if(e=e.containerInfo,Ns=yr,e=qc(e),Kr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,r=n.focusNode;n=n.focusOffset;try{a.nodeType,r.nodeType}catch{a=null;break e}var o=0,c=-1,d=-1,_=0,T=0,R=e,D=null;t:for(;;){for(var w;R!==a||i!==0&&R.nodeType!==3||(c=o+i),R!==r||n!==0&&R.nodeType!==3||(d=o+n),R.nodeType===3&&(o+=R.nodeValue.length),(w=R.firstChild)!==null;)D=R,R=w;for(;;){if(R===e)break t;if(D===a&&++_===i&&(c=o),D===r&&++T===n&&(d=o),(w=R.nextSibling)!==null)break;R=D,D=R.parentNode}R=w}a=c===-1||d===-1?null:{start:c,end:d}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ds={focusedElem:e,selectionRange:a},yr=!1,st=t;st!==null;)if(t=st,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,st=e;else for(;st!==null;){switch(t=st,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,a=t,i=r.memoizedProps,r=r.memoizedState,n=a.stateNode;try{var Z=An(a.type,i);e=n.getSnapshotBeforeUpdate(Z,r),n.__reactInternalSnapshotBeforeUpdate=e}catch(ee){De(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)As(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":As(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,st=e;break}st=t.return}}function Du(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),n&4&&Xi(5,a);break;case 1:if(wa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){De(a,a.return,o)}else{var i=An(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){De(a,a.return,o)}}n&64&&yu(a),n&512&&Vi(a,a.return);break;case 3:if(wa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{c0(e,t)}catch(o){De(a,a.return,o)}}break;case 27:t===null&&n&4&&Su(a);case 26:case 5:wa(e,a),t===null&&n&4&&_u(a),n&512&&Vi(a,a.return);break;case 12:wa(e,a);break;case 31:wa(e,a),n&4&&Au(e,a);break;case 13:wa(e,a),n&4&&Tu(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vd.bind(null,a),fm(e,a))));break;case 22:if(n=a.memoizedState!==null||Na,!n){t=t!==null&&t.memoizedState!==null||Ie,i=Na;var r=Ie;Na=n,(Ie=t)&&!r?ja(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),Na=i,Ie=r}break;case 30:break;default:wa(e,a)}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Rr(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Fe=null,jt=!1;function Da(e,t,a){for(a=a.child;a!==null;)ju(e,t,a),a=a.sibling}function ju(e,t,a){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(at,a)}catch{}switch(a.tag){case 26:Ie||ra(a,t),Da(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||ra(a,t);var n=Fe,i=jt;an(a.type)&&(Fe=a.stateNode,jt=!1),Da(e,t,a),tl(a.stateNode),Fe=n,jt=i;break;case 5:Ie||ra(a,t);case 6:if(n=Fe,i=jt,Fe=null,Da(e,t,a),Fe=n,jt=i,Fe!==null)if(jt)try{(Fe.nodeType===9?Fe.body:Fe.nodeName==="HTML"?Fe.ownerDocument.body:Fe).removeChild(a.stateNode)}catch(r){De(a,t,r)}else try{Fe.removeChild(a.stateNode)}catch(r){De(a,t,r)}break;case 18:Fe!==null&&(jt?(e=Fe,yp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),mi(e)):yp(Fe,a.stateNode));break;case 4:n=Fe,i=jt,Fe=a.stateNode.containerInfo,jt=!0,Da(e,t,a),Fe=n,jt=i;break;case 0:case 11:case 14:case 15:Ka(2,a,t),Ie||Ka(4,a,t),Da(e,t,a);break;case 1:Ie||(ra(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&bu(a,t,n)),Da(e,t,a);break;case 21:Da(e,t,a);break;case 22:Ie=(n=Ie)||a.memoizedState!==null,Da(e,t,a),Ie=n;break;default:Da(e,t,a)}}function Au(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{mi(e)}catch(a){De(t,t.return,a)}}}function Tu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{mi(e)}catch(a){De(t,t.return,a)}}function Fd(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Nu),t;default:throw Error(u(435,e.tag))}}function Il(e,t){var a=Fd(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=Zd.bind(null,e,n);n.then(i,i)}})}function At(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],r=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(an(c.type)){Fe=c.stateNode,jt=!1;break e}break;case 5:Fe=c.stateNode,jt=!1;break e;case 3:case 4:Fe=c.stateNode.containerInfo,jt=!0;break e}c=c.return}if(Fe===null)throw Error(u(160));ju(r,o,i),Fe=null,jt=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling}var It=null;function Mu(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:At(t,e),Tt(e),n&4&&(Ka(3,e,e.return),Xi(3,e),Ka(5,e,e.return));break;case 1:At(t,e),Tt(e),n&512&&(Ie||a===null||ra(a,a.return)),n&64&&Na&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=It;if(At(t,e),Tt(e),n&512&&(Ie||a===null||ra(a,a.return)),n&4){var r=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":r=i.getElementsByTagName("title")[0],(!r||r[yi]||r[pt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(n),i.head.insertBefore(r,i.querySelector("head > title"))),ht(r,n,a),r[pt]=e,ot(r),n=r;break e;case"link":var o=Mp("link","href",i).get(n+(a.href||""));if(o){for(var c=0;c<o.length;c++)if(r=o[c],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(c,1);break t}}r=i.createElement(n),ht(r,n,a),i.head.appendChild(r);break;case"meta":if(o=Mp("meta","content",i).get(n+(a.content||""))){for(c=0;c<o.length;c++)if(r=o[c],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(c,1);break t}}r=i.createElement(n),ht(r,n,a),i.head.appendChild(r);break;default:throw Error(u(468,n))}r[pt]=e,ot(r),n=r}e.stateNode=n}else Cp(i,e.type,e.stateNode);else e.stateNode=Tp(i,n,e.memoizedProps);else r!==n?(r===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):r.count--,n===null?Cp(i,e.type,e.stateNode):Tp(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&es(e,e.memoizedProps,a.memoizedProps)}break;case 27:At(t,e),Tt(e),n&512&&(Ie||a===null||ra(a,a.return)),a!==null&&n&4&&es(e,e.memoizedProps,a.memoizedProps);break;case 5:if(At(t,e),Tt(e),n&512&&(Ie||a===null||ra(a,a.return)),e.flags&32){i=e.stateNode;try{Un(i,"")}catch(Z){De(e,e.return,Z)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,es(e,i,a!==null?a.memoizedProps:i)),n&1024&&(ns=!0);break;case 6:if(At(t,e),Tt(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(Z){De(e,e.return,Z)}}break;case 3:if(hr=null,i=It,It=dr(t.containerInfo),At(t,e),It=i,Tt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{mi(t.containerInfo)}catch(Z){De(e,e.return,Z)}ns&&(ns=!1,Cu(e));break;case 4:n=It,It=dr(e.stateNode.containerInfo),At(t,e),Tt(e),It=n;break;case 12:At(t,e),Tt(e);break;case 31:At(t,e),Tt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Il(e,n)));break;case 13:At(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tr=fe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Il(e,n)));break;case 22:i=e.memoizedState!==null;var d=a!==null&&a.memoizedState!==null,_=Na,T=Ie;if(Na=_||i,Ie=T||d,At(t,e),Ie=T,Na=_,Tt(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||d||Na||Ie||Tn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){d=a=t;try{if(r=d.stateNode,i)o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=d.stateNode;var R=d.memoizedProps.style,D=R!=null&&R.hasOwnProperty("display")?R.display:null;c.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(Z){De(d,d.return,Z)}}}else if(t.tag===6){if(a===null){d=t;try{d.stateNode.nodeValue=i?"":d.memoizedProps}catch(Z){De(d,d.return,Z)}}}else if(t.tag===18){if(a===null){d=t;try{var w=d.stateNode;i?bp(w,!0):bp(d.stateNode,!1)}catch(Z){De(d,d.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Il(e,a))));break;case 19:At(t,e),Tt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Il(e,n)));break;case 30:break;case 21:break;default:At(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(zu(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var i=a.stateNode,r=ts(e);$l(e,r,i);break;case 5:var o=a.stateNode;a.flags&32&&(Un(o,""),a.flags&=-33);var c=ts(e);$l(e,c,o);break;case 3:case 4:var d=a.stateNode.containerInfo,_=ts(e);as(e,_,d);break;default:throw Error(u(161))}}catch(T){De(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cu(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function wa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Du(e,t.alternate,t),t=t.sibling}function Tn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ka(4,t,t.return),Tn(t);break;case 1:ra(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&bu(t,t.return,a),Tn(t);break;case 27:tl(t.stateNode);case 26:case 5:ra(t,t.return),Tn(t);break;case 22:t.memoizedState===null&&Tn(t);break;case 30:Tn(t);break;default:Tn(t)}e=e.sibling}}function ja(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,r=t,o=r.flags;switch(r.tag){case 0:case 11:case 15:ja(i,r,a),Xi(4,r);break;case 1:if(ja(i,r,a),n=r,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){De(n,n.return,_)}if(n=r,i=n.updateQueue,i!==null){var c=n.stateNode;try{var d=i.shared.hiddenCallbacks;if(d!==null)for(i.shared.hiddenCallbacks=null,i=0;i<d.length;i++)s0(d[i],c)}catch(_){De(n,n.return,_)}}a&&o&64&&yu(r),Vi(r,r.return);break;case 27:Su(r);case 26:case 5:ja(i,r,a),a&&n===null&&o&4&&_u(r),Vi(r,r.return);break;case 12:ja(i,r,a);break;case 31:ja(i,r,a),a&&o&4&&Au(i,r);break;case 13:ja(i,r,a),a&&o&4&&Tu(i,r);break;case 22:r.memoizedState===null&&ja(i,r,a),Vi(r,r.return);break;case 30:break;default:ja(i,r,a)}t=t.sibling}}function is(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ri(a))}function ls(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ri(e))}function ea(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ru(e,t,a,n),t=t.sibling}function Ru(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:ea(e,t,a,n),i&2048&&Xi(9,t);break;case 1:ea(e,t,a,n);break;case 3:ea(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ri(e)));break;case 12:if(i&2048){ea(e,t,a,n),e=t.stateNode;try{var r=t.memoizedProps,o=r.id,c=r.onPostCommit;typeof c=="function"&&c(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){De(t,t.return,d)}}else ea(e,t,a,n);break;case 31:ea(e,t,a,n);break;case 13:ea(e,t,a,n);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?r._visibility&2?ea(e,t,a,n):Zi(e,t):r._visibility&2?ea(e,t,a,n):(r._visibility|=2,ni(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&is(o,t);break;case 24:ea(e,t,a,n),i&2048&&ls(t.alternate,t);break;default:ea(e,t,a,n)}}function ni(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,o=t,c=a,d=n,_=o.flags;switch(o.tag){case 0:case 11:case 15:ni(r,o,c,d,i),Xi(8,o);break;case 23:break;case 22:var T=o.stateNode;o.memoizedState!==null?T._visibility&2?ni(r,o,c,d,i):Zi(r,o):(T._visibility|=2,ni(r,o,c,d,i)),i&&_&2048&&is(o.alternate,o);break;case 24:ni(r,o,c,d,i),i&&_&2048&&ls(o.alternate,o);break;default:ni(r,o,c,d,i)}t=t.sibling}}function Zi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Zi(a,n),i&2048&&is(n.alternate,n);break;case 24:Zi(a,n),i&2048&&ls(n.alternate,n);break;default:Zi(a,n)}t=t.sibling}}var Qi=8192;function ii(e,t,a){if(e.subtreeFlags&Qi)for(e=e.child;e!==null;)ku(e,t,a),e=e.sibling}function ku(e,t,a){switch(e.tag){case 26:ii(e,t,a),e.flags&Qi&&e.memoizedState!==null&&Nm(a,It,e.memoizedState,e.memoizedProps);break;case 5:ii(e,t,a);break;case 3:case 4:var n=It;It=dr(e.stateNode.containerInfo),ii(e,t,a),It=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Qi,Qi=16777216,ii(e,t,a),Qi=n):ii(e,t,a));break;default:ii(e,t,a)}}function Ou(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ki(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];st=n,qu(n,e)}Ou(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Eu(e),e=e.sibling}function Eu(e){switch(e.tag){case 0:case 11:case 15:Ki(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:Ki(e);break;case 12:Ki(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,er(e)):Ki(e);break;default:Ki(e)}}function er(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];st=n,qu(n,e)}Ou(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ka(8,t,t.return),er(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,er(t));break;default:er(t)}e=e.sibling}}function qu(e,t){for(;st!==null;){var a=st;switch(a.tag){case 0:case 11:case 15:Ka(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ri(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,st=n;else e:for(a=e;st!==null;){n=st;var i=n.sibling,r=n.return;if(wu(n),n===a){st=null;break e}if(i!==null){i.return=r,st=i;break e}st=r}}}var Bd={getCacheForType:function(e){var t=dt(Je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return dt(Je).controller.signal}},Ld=typeof WeakMap=="function"?WeakMap:Map,ze=0,Me=null,de=null,he=0,Ne=0,qt=null,Ja=!1,li=!1,rs=!1,Aa=0,Xe=0,Wa=0,Mn=0,os=0,Ut=0,ri=0,Ji=null,Mt=null,ss=!1,tr=0,Uu=0,ar=1/0,nr=null,$a=null,it=0,Ia=null,oi=null,Ta=0,cs=0,us=null,Fu=null,Wi=0,ps=null;function Ft(){return(ze&2)!==0&&he!==0?he&-he:N.T!==null?vs():fa()}function Bu(){if(Ut===0)if((he&536870912)===0||ge){var e=fn;fn<<=1,(fn&3932160)===0&&(fn=262144),Ut=e}else Ut=536870912;return e=Ot.current,e!==null&&(e.flags|=32),Ut}function Ct(e,t,a){(e===Me&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(si(e,0),en(e,he,Ut,!1)),na(e,a),((ze&2)===0||e!==Me)&&(e===Me&&((ze&2)===0&&(Mn|=a),Xe===4&&en(e,he,Ut,!1)),oa(e))}function Lu(e,t,a){if((ze&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||zt(e,t),i=n?Yd(e,t):ds(e,t,!0),r=n;do{if(i===0){li&&!n&&en(e,t,0,!1);break}else{if(a=e.current.alternate,r&&!Gd(a)){i=ds(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var c=e;i=Ji;var d=c.current.memoizedState.isDehydrated;if(d&&(si(c,o).flags|=256),o=ds(c,o,!1),o!==2){if(rs&&!d){c.errorRecoveryDisabledLanes|=r,Mn|=r,i=4;break e}r=Mt,Mt=i,r!==null&&(Mt===null?Mt=r:Mt.push.apply(Mt,r))}i=o}if(r=!1,i!==2)continue}}if(i===1){si(e,0),en(e,t,0,!0);break}e:{switch(n=e,r=i,r){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:en(n,t,Ut,!Ja);break e;case 2:Mt=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(i=tr+300-fe(),10<i)){if(en(n,t,Ut,!Ja),vt(n,0,!0)!==0)break e;Ta=t,n.timeoutHandle=vp(Gu.bind(null,n,a,Mt,nr,ss,t,Ut,Mn,ri,Ja,r,"Throttled",-0,0),i);break e}Gu(n,a,Mt,nr,ss,t,Ut,Mn,ri,Ja,r,null,-0,0)}}break}while(!0);oa(e)}function Gu(e,t,a,n,i,r,o,c,d,_,T,R,D,w){if(e.timeoutHandle=-1,R=t.subtreeFlags,R&8192||(R&16785408)===16785408){R={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ma},ku(t,r,R);var Z=(r&62914560)===r?tr-fe():(r&4194048)===r?Uu-fe():0;if(Z=Dm(R,Z),Z!==null){Ta=r,e.cancelPendingCommit=Z(Ku.bind(null,e,t,r,a,n,i,o,c,d,T,R,null,D,w)),en(e,r,o,!_);return}}Ku(e,t,r,a,n,i,o,c,d)}function Gd(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],r=i.getSnapshot;i=i.value;try{if(!Rt(r(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t,a,n){t&=~os,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var r=31-nt(i),o=1<<r;n[r]=-1,i&=~o}a!==0&&pa(e,a,t)}function ir(){return(ze&6)===0?($i(0),!1):!0}function fs(){if(de!==null){if(Ne===0)var e=de.return;else e=de,ga=_n=null,Ao(e),$n=null,Oi=0,e=de;for(;e!==null;)gu(e.alternate,e),e=e.return;de=null}}function si(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,om(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ta=0,fs(),Me=e,de=a=xa(e.current,null),he=t,Ne=0,qt=null,Ja=!1,li=zt(e,t),rs=!1,ri=Ut=os=Mn=Wa=Xe=0,Mt=Ji=null,ss=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-nt(n),r=1<<i;t|=e[i],n&=~r}return Aa=t,Dl(),a}function Hu(e,t){oe=null,N.H=Hi,t===Wn||t===kl?(t=i0(),Ne=3):t===xo?(t=i0(),Ne=4):Ne=t===Po?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qt=t,de===null&&(Xe=1,Zl(e,Ht(t,e.current)))}function Yu(){var e=Ot.current;return e===null?!0:(he&4194048)===he?Vt===null:(he&62914560)===he||(he&536870912)!==0?e===Vt:!1}function Pu(){var e=N.H;return N.H=Hi,e===null?Hi:e}function Xu(){var e=N.A;return N.A=Bd,e}function lr(){Xe=4,Ja||(he&4194048)!==he&&Ot.current!==null||(li=!0),(Wa&134217727)===0&&(Mn&134217727)===0||Me===null||en(Me,he,Ut,!1)}function ds(e,t,a){var n=ze;ze|=2;var i=Pu(),r=Xu();(Me!==e||he!==t)&&(nr=null,si(e,t)),t=!1;var o=Xe;e:do try{if(Ne!==0&&de!==null){var c=de,d=qt;switch(Ne){case 8:fs(),o=6;break e;case 3:case 2:case 9:case 6:Ot.current===null&&(t=!0);var _=Ne;if(Ne=0,qt=null,ci(e,c,d,_),a&&li){o=0;break e}break;default:_=Ne,Ne=0,qt=null,ci(e,c,d,_)}}Hd(),o=Xe;break}catch(T){Hu(e,T)}while(!0);return t&&e.shellSuspendCounter++,ga=_n=null,ze=n,N.H=i,N.A=r,de===null&&(Me=null,he=0,Dl()),o}function Hd(){for(;de!==null;)Vu(de)}function Yd(e,t){var a=ze;ze|=2;var n=Pu(),i=Xu();Me!==e||he!==t?(nr=null,ar=fe()+500,si(e,t)):li=zt(e,t);e:do try{if(Ne!==0&&de!==null){t=de;var r=qt;t:switch(Ne){case 1:Ne=0,qt=null,ci(e,t,r,1);break;case 2:case 9:if(a0(r)){Ne=0,qt=null,Zu(t);break}t=function(){Ne!==2&&Ne!==9||Me!==e||(Ne=7),oa(e)},r.then(t,t);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:a0(r)?(Ne=0,qt=null,Zu(t)):(Ne=0,qt=null,ci(e,t,r,7));break;case 5:var o=null;switch(de.tag){case 26:o=de.memoizedState;case 5:case 27:var c=de;if(o?Rp(o):c.stateNode.complete){Ne=0,qt=null;var d=c.sibling;if(d!==null)de=d;else{var _=c.return;_!==null?(de=_,rr(_)):de=null}break t}}Ne=0,qt=null,ci(e,t,r,5);break;case 6:Ne=0,qt=null,ci(e,t,r,6);break;case 8:fs(),Xe=6;break e;default:throw Error(u(462))}}Pd();break}catch(T){Hu(e,T)}while(!0);return ga=_n=null,N.H=n,N.A=i,ze=a,de!==null?0:(Me=null,he=0,Dl(),Xe)}function Pd(){for(;de!==null&&!Ea();)Vu(de)}function Vu(e){var t=xu(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,t===null?rr(e):de=t}function Zu(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=uu(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=uu(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Ao(t);default:gu(a,t),t=de=Xc(t,Aa),t=xu(a,t,Aa)}e.memoizedProps=e.pendingProps,t===null?rr(e):de=t}function ci(e,t,a,n){ga=_n=null,Ao(t),$n=null,Oi=0;var i=t.return;try{if(Rd(e,i,t,a,he)){Xe=1,Zl(e,Ht(a,e.current)),de=null;return}}catch(r){if(i!==null)throw de=i,r;Xe=1,Zl(e,Ht(a,e.current)),de=null;return}t.flags&32768?(ge||n===1?e=!0:li||(he&536870912)!==0?e=!1:(Ja=e=!0,(n===2||n===9||n===3||n===6)&&(n=Ot.current,n!==null&&n.tag===13&&(n.flags|=16384))),Qu(t,e)):rr(t)}function rr(e){var t=e;do{if((t.flags&32768)!==0){Qu(t,Ja);return}e=t.return;var a=Ed(t.alternate,t,Aa);if(a!==null){de=a;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);Xe===0&&(Xe=5)}function Qu(e,t){do{var a=qd(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);Xe=6,de=null}function Ku(e,t,a,n,i,r,o,c,d){e.cancelPendingCommit=null;do or();while(it!==0);if((ze&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(r=t.lanes|t.childLanes,r|=eo,Wt(e,a,r,o,c,d),e===Me&&(de=Me=null,he=0),oi=t,Ia=e,Ta=a,cs=r,us=i,Fu=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Qd(ut,function(){return ep(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=N.T,N.T=null,i=E.p,E.p=2,o=ze,ze|=4;try{Ud(e,t,a)}finally{ze=o,E.p=i,N.T=n}}it=1,Ju(),Wu(),$u()}}function Ju(){if(it===1){it=0;var e=Ia,t=oi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var n=E.p;E.p=2;var i=ze;ze|=4;try{Mu(t,e);var r=Ds,o=qc(e.containerInfo),c=r.focusedElem,d=r.selectionRange;if(o!==c&&c&&c.ownerDocument&&Ec(c.ownerDocument.documentElement,c)){if(d!==null&&Kr(c)){var _=d.start,T=d.end;if(T===void 0&&(T=_),"selectionStart"in c)c.selectionStart=_,c.selectionEnd=Math.min(T,c.value.length);else{var R=c.ownerDocument||document,D=R&&R.defaultView||window;if(D.getSelection){var w=D.getSelection(),Z=c.textContent.length,ee=Math.min(d.start,Z),Te=d.end===void 0?ee:Math.min(d.end,Z);!w.extend&&ee>Te&&(o=Te,Te=ee,ee=o);var g=Oc(c,ee),h=Oc(c,Te);if(g&&h&&(w.rangeCount!==1||w.anchorNode!==g.node||w.anchorOffset!==g.offset||w.focusNode!==h.node||w.focusOffset!==h.offset)){var b=R.createRange();b.setStart(g.node,g.offset),w.removeAllRanges(),ee>Te?(w.addRange(b),w.extend(h.node,h.offset)):(b.setEnd(h.node,h.offset),w.addRange(b))}}}}for(R=[],w=c;w=w.parentNode;)w.nodeType===1&&R.push({element:w,left:w.scrollLeft,top:w.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<R.length;c++){var C=R[c];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}yr=!!Ns,Ds=Ns=null}finally{ze=i,E.p=n,N.T=a}}e.current=t,it=2}}function Wu(){if(it===2){it=0;var e=Ia,t=oi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var n=E.p;E.p=2;var i=ze;ze|=4;try{Du(e,t.alternate,t)}finally{ze=i,E.p=n,N.T=a}}it=3}}function $u(){if(it===4||it===3){it=0,un();var e=Ia,t=oi,a=Ta,n=Fu;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?it=5:(it=0,oi=Ia=null,Iu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&($a=null),Nt(a),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(at,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=N.T,i=E.p,E.p=2,N.T=null;try{for(var r=e.onRecoverableError,o=0;o<n.length;o++){var c=n[o];r(c.value,{componentStack:c.stack})}}finally{N.T=t,E.p=i}}(Ta&3)!==0&&or(),oa(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===ps?Wi++:(Wi=0,ps=e):Wi=0,$i(0)}}function Iu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ri(t)))}function or(){return Ju(),Wu(),$u(),ep()}function ep(){if(it!==5)return!1;var e=Ia,t=cs;cs=0;var a=Nt(Ta),n=N.T,i=E.p;try{E.p=32>a?32:a,N.T=null,a=us,us=null;var r=Ia,o=Ta;if(it=0,oi=Ia=null,Ta=0,(ze&6)!==0)throw Error(u(331));var c=ze;if(ze|=4,Eu(r.current),Ru(r,r.current,o,a),ze=c,$i(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(at,r)}catch{}return!0}finally{E.p=i,N.T=n,Iu(e,t)}}function tp(e,t,a){t=Ht(a,t),t=Yo(e.stateNode,t,2),e=Va(e,t,2),e!==null&&(na(e,2),oa(e))}function De(e,t,a){if(e.tag===3)tp(e,e,a);else for(;t!==null;){if(t.tag===3){tp(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&($a===null||!$a.has(n))){e=Ht(a,e),a=au(2),n=Va(t,a,2),n!==null&&(nu(a,n,t,e),na(n,2),oa(n));break}}t=t.return}}function ms(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Ld;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(rs=!0,i.add(a),e=Xd.bind(null,e,t,a),t.then(e,e))}function Xd(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Me===e&&(he&a)===a&&(Xe===4||Xe===3&&(he&62914560)===he&&300>fe()-tr?(ze&2)===0&&si(e,0):os|=a,ri===he&&(ri=0)),oa(e)}function ap(e,t){t===0&&(t=qa()),e=gn(e,t),e!==null&&(na(e,t),oa(e))}function Vd(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),ap(e,a)}function Zd(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),ap(e,a)}function Qd(e,t){return lt(e,t)}var sr=null,ui=null,hs=!1,cr=!1,xs=!1,tn=0;function oa(e){e!==ui&&e.next===null&&(ui===null?sr=ui=e:ui=ui.next=e),cr=!0,hs||(hs=!0,Jd())}function $i(e,t){if(!xs&&cr){xs=!0;do for(var a=!1,n=sr;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var r=0;else{var o=n.suspendedLanes,c=n.pingedLanes;r=(1<<31-nt(42|e)+1)-1,r&=i&~(o&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(a=!0,rp(n,r))}else r=he,r=vt(n,n===Me?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(r&3)===0||zt(n,r)||(a=!0,rp(n,r));n=n.next}while(a);xs=!1}}function Kd(){np()}function np(){cr=hs=!1;var e=0;tn!==0&&rm()&&(e=tn);for(var t=fe(),a=null,n=sr;n!==null;){var i=n.next,r=ip(n,t);r===0?(n.next=null,a===null?sr=i:a.next=i,i===null&&(ui=a)):(a=n,(e!==0||(r&3)!==0)&&(cr=!0)),n=i}it!==0&&it!==5||$i(e),tn!==0&&(tn=0)}function ip(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var o=31-nt(r),c=1<<o,d=i[o];d===-1?((c&a)===0||(c&n)!==0)&&(i[o]=aa(c,t)):d<=t&&(e.expiredLanes|=c),r&=~c}if(t=Me,a=he,a=vt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Oa(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||zt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Oa(n),Nt(a)){case 2:case 8:a=xt;break;case 32:a=ut;break;case 268435456:a=Jt;break;default:a=ut}return n=lp.bind(null,e),a=lt(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Oa(n),e.callbackPriority=2,e.callbackNode=null,2}function lp(e,t){if(it!==0&&it!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(or()&&e.callbackNode!==a)return null;var n=he;return n=vt(e,e===Me?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Lu(e,n,t),ip(e,fe()),e.callbackNode!=null&&e.callbackNode===a?lp.bind(null,e):null)}function rp(e,t){if(or())return null;Lu(e,t,!0)}function Jd(){sm(function(){(ze&6)!==0?lt(Ue,Kd):np()})}function vs(){if(tn===0){var e=Kn;e===0&&(e=pn,pn<<=1,(pn&261888)===0&&(pn=256)),tn=e}return tn}function op(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function sp(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Wd(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var r=op((i[Dt]||null).action),o=n.submitter;o&&(t=(t=o[Dt]||null)?op(t.formAction):o.getAttribute("formAction"),t!==null&&(r=t,o=null));var c=new _l("action","action",null,n,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(tn!==0){var d=o?sp(i,o):new FormData(i);Uo(a,{pending:!0,data:d,method:i.method,action:r},null,d)}}else typeof r=="function"&&(c.preventDefault(),d=o?sp(i,o):new FormData(i),Uo(a,{pending:!0,data:d,method:i.method,action:r},r,d))},currentTarget:i}]})}}for(var gs=0;gs<Ir.length;gs++){var ys=Ir[gs],$d=ys.toLowerCase(),Id=ys[0].toUpperCase()+ys.slice(1);$t($d,"on"+Id)}$t(Bc,"onAnimationEnd"),$t(Lc,"onAnimationIteration"),$t(Gc,"onAnimationStart"),$t("dblclick","onDoubleClick"),$t("focusin","onFocus"),$t("focusout","onBlur"),$t(hd,"onTransitionRun"),$t(xd,"onTransitionStart"),$t(vd,"onTransitionCancel"),$t(Hc,"onTransitionEnd"),En("onMouseEnter",["mouseout","mouseover"]),En("onMouseLeave",["mouseout","mouseover"]),En("onPointerEnter",["pointerout","pointerover"]),En("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii));function cp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var r=void 0;if(t)for(var o=n.length-1;0<=o;o--){var c=n[o],d=c.instance,_=c.currentTarget;if(c=c.listener,d!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=_;try{r(i)}catch(T){Nl(T)}i.currentTarget=null,r=d}else for(o=0;o<n.length;o++){if(c=n[o],d=c.instance,_=c.currentTarget,c=c.listener,d!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=_;try{r(i)}catch(T){Nl(T)}i.currentTarget=null,r=d}}}}function me(e,t){var a=t[Cr];a===void 0&&(a=t[Cr]=new Set);var n=e+"__bubble";a.has(n)||(up(t,e,2,!1),a.add(n))}function bs(e,t,a){var n=0;t&&(n|=4),up(a,e,n,t)}var ur="_reactListening"+Math.random().toString(36).slice(2);function _s(e){if(!e[ur]){e[ur]=!0,nc.forEach(function(a){a!=="selectionchange"&&(em.has(a)||bs(a,!1,e),bs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ur]||(t[ur]=!0,bs("selectionchange",!1,t))}}function up(e,t,a,n){switch(Bp(t)){case 2:var i=Am;break;case 8:i=Tm;break;default:i=qs}a=i.bind(null,t,a,e),i=void 0,!Lr||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function zs(e,t,a,n,i){var r=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var c=n.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=n.return;o!==null;){var d=o.tag;if((d===3||d===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=Rn(c),o===null)return;if(d=o.tag,d===5||d===6||d===26||d===27){n=r=o;continue e}c=c.parentNode}}n=n.return}hc(function(){var _=r,T=Fr(a),R=[];e:{var D=Yc.get(e);if(D!==void 0){var w=_l,Z=e;switch(e){case"keypress":if(yl(a)===0)break e;case"keydown":case"keyup":w=Zf;break;case"focusin":Z="focus",w=Pr;break;case"focusout":Z="blur",w=Pr;break;case"beforeblur":case"afterblur":w=Pr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Jf;break;case Bc:case Lc:case Gc:w=Ff;break;case Hc:w=$f;break;case"scroll":case"scrollend":w=kf;break;case"wheel":w=ed;break;case"copy":case"cut":case"paste":w=Lf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=bc;break;case"toggle":case"beforetoggle":w=ad}var ee=(t&4)!==0,Te=!ee&&(e==="scroll"||e==="scrollend"),g=ee?D!==null?D+"Capture":null:D;ee=[];for(var h=_,b;h!==null;){var C=h;if(b=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||b===null||g===null||(C=_i(h,g),C!=null&&ee.push(el(h,C,b))),Te)break;h=h.return}0<ee.length&&(D=new w(D,Z,null,a,T),R.push({event:D,listeners:ee}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",D&&a!==Ur&&(Z=a.relatedTarget||a.fromElement)&&(Rn(Z)||Z[Cn]))break e;if((w||D)&&(D=T.window===T?T:(D=T.ownerDocument)?D.defaultView||D.parentWindow:window,w?(Z=a.relatedTarget||a.toElement,w=_,Z=Z?Rn(Z):null,Z!==null&&(Te=S(Z),ee=Z.tag,Z!==Te||ee!==5&&ee!==27&&ee!==6)&&(Z=null)):(w=null,Z=_),w!==Z)){if(ee=gc,C="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(ee=bc,C="onPointerLeave",g="onPointerEnter",h="pointer"),Te=w==null?D:bi(w),b=Z==null?D:bi(Z),D=new ee(C,h+"leave",w,a,T),D.target=Te,D.relatedTarget=b,C=null,Rn(T)===_&&(ee=new ee(g,h+"enter",Z,a,T),ee.target=b,ee.relatedTarget=Te,C=ee),Te=C,w&&Z)t:{for(ee=tm,g=w,h=Z,b=0,C=g;C;C=ee(C))b++;C=0;for(var $=h;$;$=ee($))C++;for(;0<b-C;)g=ee(g),b--;for(;0<C-b;)h=ee(h),C--;for(;b--;){if(g===h||h!==null&&g===h.alternate){ee=g;break t}g=ee(g),h=ee(h)}ee=null}else ee=null;w!==null&&pp(R,D,w,ee,!1),Z!==null&&Te!==null&&pp(R,Te,Z,ee,!0)}}e:{if(D=_?bi(_):window,w=D.nodeName&&D.nodeName.toLowerCase(),w==="select"||w==="input"&&D.type==="file")var be=Ac;else if(wc(D))if(Tc)be=fd;else{be=ud;var Q=cd}else w=D.nodeName,!w||w.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?_&&qr(_.elementType)&&(be=Ac):be=pd;if(be&&(be=be(e,_))){jc(R,be,a,T);break e}Q&&Q(e,D,_),e==="focusout"&&_&&D.type==="number"&&_.memoizedProps.value!=null&&Er(D,"number",D.value)}switch(Q=_?bi(_):window,e){case"focusin":(wc(Q)||Q.contentEditable==="true")&&(Gn=Q,Jr=_,Ti=null);break;case"focusout":Ti=Jr=Gn=null;break;case"mousedown":Wr=!0;break;case"contextmenu":case"mouseup":case"dragend":Wr=!1,Uc(R,a,T);break;case"selectionchange":if(md)break;case"keydown":case"keyup":Uc(R,a,T)}var ce;if(Vr)e:{switch(e){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Ln?Nc(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(_c&&a.locale!=="ko"&&(Ln||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ln&&(ce=xc()):(Ba=T,Gr="value"in Ba?Ba.value:Ba.textContent,Ln=!0)),Q=pr(_,xe),0<Q.length&&(xe=new yc(xe,e,null,a,T),R.push({event:xe,listeners:Q}),ce?xe.data=ce:(ce=Dc(a),ce!==null&&(xe.data=ce)))),(ce=id?ld(e,a):rd(e,a))&&(xe=pr(_,"onBeforeInput"),0<xe.length&&(Q=new yc("onBeforeInput","beforeinput",null,a,T),R.push({event:Q,listeners:xe}),Q.data=ce)),Wd(R,e,_,a,T)}cp(R,t)})}function el(e,t,a){return{instance:e,listener:t,currentTarget:a}}function pr(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=_i(e,a),i!=null&&n.unshift(el(e,i,r)),i=_i(e,t),i!=null&&n.push(el(e,i,r))),e.tag===3)return n;e=e.return}return[]}function tm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function pp(e,t,a,n,i){for(var r=t._reactName,o=[];a!==null&&a!==n;){var c=a,d=c.alternate,_=c.stateNode;if(c=c.tag,d!==null&&d===n)break;c!==5&&c!==26&&c!==27||_===null||(d=_,i?(_=_i(a,r),_!=null&&o.unshift(el(a,_,d))):i||(_=_i(a,r),_!=null&&o.push(el(a,_,d)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var am=/\r\n?/g,nm=/\u0000|\uFFFD/g;function fp(e){return(typeof e=="string"?e:""+e).replace(am,`
`).replace(nm,"")}function dp(e,t){return t=fp(t),fp(e)===t}function Ae(e,t,a,n,i,r){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Un(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Un(e,""+n);break;case"className":hl(e,"class",n);break;case"tabIndex":hl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":hl(e,a,n);break;case"style":dc(e,n,r);break;case"data":if(t!=="object"){hl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=vl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(a==="formAction"?(t!=="input"&&Ae(e,t,"name",i.name,i,null),Ae(e,t,"formEncType",i.formEncType,i,null),Ae(e,t,"formMethod",i.formMethod,i,null),Ae(e,t,"formTarget",i.formTarget,i,null)):(Ae(e,t,"encType",i.encType,i,null),Ae(e,t,"method",i.method,i,null),Ae(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=vl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=ma);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=vl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":me("beforetoggle",e),me("toggle",e),ml(e,"popover",n);break;case"xlinkActuate":da(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":da(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":da(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":da(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":da(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":da(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":da(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":ml(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cf.get(a)||a,ml(e,a,n))}}function Ss(e,t,a,n,i,r){switch(a){case"style":dc(e,n,r);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Un(e,n):(typeof n=="number"||typeof n=="bigint")&&Un(e,""+n);break;case"onScroll":n!=null&&me("scroll",e);break;case"onScrollEnd":n!=null&&me("scrollend",e);break;case"onClick":n!=null&&(e.onclick=ma);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ic.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),r=e[Dt]||null,r=r!=null?r[a]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof n=="function")){typeof r!="function"&&r!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):ml(e,a,n)}}}function ht(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var n=!1,i=!1,r;for(r in a)if(a.hasOwnProperty(r)){var o=a[r];if(o!=null)switch(r){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,r,o,a,null)}}i&&Ae(e,t,"srcSet",a.srcSet,a,null),n&&Ae(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var c=r=o=i=null,d=null,_=null;for(n in a)if(a.hasOwnProperty(n)){var T=a[n];if(T!=null)switch(n){case"name":i=T;break;case"type":o=T;break;case"checked":d=T;break;case"defaultChecked":_=T;break;case"value":r=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(u(137,t));break;default:Ae(e,t,n,T,a,null)}}cc(e,r,c,d,_,o,i,!1);return;case"select":me("invalid",e),n=o=r=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":r=c;break;case"defaultValue":o=c;break;case"multiple":n=c;default:Ae(e,t,i,c,a,null)}t=r,a=o,e.multiple=!!n,t!=null?qn(e,!!n,t,!1):a!=null&&qn(e,!!n,a,!0);return;case"textarea":me("invalid",e),r=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(c=a[o],c!=null))switch(o){case"value":n=c;break;case"defaultValue":i=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:Ae(e,t,o,c,a,null)}pc(e,n,i,r);return;case"option":for(d in a)if(a.hasOwnProperty(d)&&(n=a[d],n!=null))switch(d){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Ae(e,t,d,n,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(n=0;n<Ii.length;n++)me(Ii[n],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(n=a[_],n!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Ae(e,t,_,n,a,null)}return;default:if(qr(t)){for(T in a)a.hasOwnProperty(T)&&(n=a[T],n!==void 0&&Ss(e,t,T,n,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(n=a[c],n!=null&&Ae(e,t,c,n,a,null))}function im(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,o=null,c=null,d=null,_=null,T=null;for(w in a){var R=a[w];if(a.hasOwnProperty(w)&&R!=null)switch(w){case"checked":break;case"value":break;case"defaultValue":d=R;default:n.hasOwnProperty(w)||Ae(e,t,w,null,n,R)}}for(var D in n){var w=n[D];if(R=a[D],n.hasOwnProperty(D)&&(w!=null||R!=null))switch(D){case"type":r=w;break;case"name":i=w;break;case"checked":_=w;break;case"defaultChecked":T=w;break;case"value":o=w;break;case"defaultValue":c=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:w!==R&&Ae(e,t,D,w,n,R)}}Or(e,o,c,d,_,T,r,i);return;case"select":w=o=c=D=null;for(r in a)if(d=a[r],a.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":w=d;default:n.hasOwnProperty(r)||Ae(e,t,r,null,n,d)}for(i in n)if(r=n[i],d=a[i],n.hasOwnProperty(i)&&(r!=null||d!=null))switch(i){case"value":D=r;break;case"defaultValue":c=r;break;case"multiple":o=r;default:r!==d&&Ae(e,t,i,r,n,d)}t=c,a=o,n=w,D!=null?qn(e,!!a,D,!1):!!n!=!!a&&(t!=null?qn(e,!!a,t,!0):qn(e,!!a,a?[]:"",!1));return;case"textarea":w=D=null;for(c in a)if(i=a[c],a.hasOwnProperty(c)&&i!=null&&!n.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Ae(e,t,c,null,n,i)}for(o in n)if(i=n[o],r=a[o],n.hasOwnProperty(o)&&(i!=null||r!=null))switch(o){case"value":D=i;break;case"defaultValue":w=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==r&&Ae(e,t,o,i,n,r)}uc(e,D,w);return;case"option":for(var Z in a)if(D=a[Z],a.hasOwnProperty(Z)&&D!=null&&!n.hasOwnProperty(Z))switch(Z){case"selected":e.selected=!1;break;default:Ae(e,t,Z,null,n,D)}for(d in n)if(D=n[d],w=a[d],n.hasOwnProperty(d)&&D!==w&&(D!=null||w!=null))switch(d){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:Ae(e,t,d,D,n,w)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)D=a[ee],a.hasOwnProperty(ee)&&D!=null&&!n.hasOwnProperty(ee)&&Ae(e,t,ee,null,n,D);for(_ in n)if(D=n[_],w=a[_],n.hasOwnProperty(_)&&D!==w&&(D!=null||w!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,t));break;default:Ae(e,t,_,D,n,w)}return;default:if(qr(t)){for(var Te in a)D=a[Te],a.hasOwnProperty(Te)&&D!==void 0&&!n.hasOwnProperty(Te)&&Ss(e,t,Te,void 0,n,D);for(T in n)D=n[T],w=a[T],!n.hasOwnProperty(T)||D===w||D===void 0&&w===void 0||Ss(e,t,T,D,n,w);return}}for(var g in a)D=a[g],a.hasOwnProperty(g)&&D!=null&&!n.hasOwnProperty(g)&&Ae(e,t,g,null,n,D);for(R in n)D=n[R],w=a[R],!n.hasOwnProperty(R)||D===w||D==null&&w==null||Ae(e,t,R,D,n,w)}function mp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function lm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],r=i.transferSize,o=i.initiatorType,c=i.duration;if(r&&c&&mp(o)){for(o=0,c=i.responseEnd,n+=1;n<a.length;n++){var d=a[n],_=d.startTime;if(_>c)break;var T=d.transferSize,R=d.initiatorType;T&&mp(R)&&(d=d.responseEnd,o+=T*(d<c?1:(c-_)/(d-_)))}if(--n,t+=8*(r+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ns=null,Ds=null;function fr(e){return e.nodeType===9?e:e.ownerDocument}function hp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ws(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=null;function rm(){var e=window.event;return e&&e.type==="popstate"?e===js?!1:(js=e,!0):(js=null,!1)}var vp=typeof setTimeout=="function"?setTimeout:void 0,om=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(cm)}:vp;function cm(e){setTimeout(function(){throw e})}function an(e){return e==="head"}function yp(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),mi(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")tl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,tl(a);for(var r=a.firstChild;r;){var o=r.nextSibling,c=r.nodeName;r[yi]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&r.rel.toLowerCase()==="stylesheet"||a.removeChild(r),r=o}}else a==="body"&&tl(e.ownerDocument.body);a=i}while(a);mi(t)}function bp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function As(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":As(a),Rr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function um(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[yi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function pm(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zt(e.nextSibling),e===null))return null;return e}function _p(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function Ts(e){return e.data==="$?"||e.data==="$~"}function Ms(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function fm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cs=null;function zp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Np(e,t,a){switch(t=fr(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function tl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Rr(e)}var Qt=new Map,Dp=new Set;function dr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ma=E.d;E.d={f:dm,r:mm,D:hm,C:xm,L:vm,m:gm,X:bm,S:ym,M:_m};function dm(){var e=Ma.f(),t=ir();return e||t}function mm(e){var t=kn(e);t!==null&&t.tag===5&&t.type==="form"?H0(t):Ma.r(e)}var pi=typeof document>"u"?null:document;function wp(e,t,a){var n=pi;if(n&&typeof t=="string"&&t){var i=Lt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Dp.has(i)||(Dp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),ht(t,"link",e),ot(t),n.head.appendChild(t)))}}function hm(e){Ma.D(e),wp("dns-prefetch",e,null)}function xm(e,t){Ma.C(e,t),wp("preconnect",e,t)}function vm(e,t,a){Ma.L(e,t,a);var n=pi;if(n&&e&&t){var i='link[rel="preload"][as="'+Lt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Lt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Lt(a.imageSizes)+'"]')):i+='[href="'+Lt(e)+'"]';var r=i;switch(t){case"style":r=fi(e);break;case"script":r=di(e)}Qt.has(r)||(e=O({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Qt.set(r,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(al(r))||t==="script"&&n.querySelector(nl(r))||(t=n.createElement("link"),ht(t,"link",e),ot(t),n.head.appendChild(t)))}}function gm(e,t){Ma.m(e,t);var a=pi;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Lt(n)+'"][href="'+Lt(e)+'"]',r=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=di(e)}if(!Qt.has(r)&&(e=O({rel:"modulepreload",href:e},t),Qt.set(r,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nl(r)))return}n=a.createElement("link"),ht(n,"link",e),ot(n),a.head.appendChild(n)}}}function ym(e,t,a){Ma.S(e,t,a);var n=pi;if(n&&e){var i=On(n).hoistableStyles,r=fi(e);t=t||"default";var o=i.get(r);if(!o){var c={loading:0,preload:null};if(o=n.querySelector(al(r)))c.loading=5;else{e=O({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Qt.get(r))&&Rs(e,a);var d=o=n.createElement("link");ot(d),ht(d,"link",e),d._p=new Promise(function(_,T){d.onload=_,d.onerror=T}),d.addEventListener("load",function(){c.loading|=1}),d.addEventListener("error",function(){c.loading|=2}),c.loading|=4,mr(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:c},i.set(r,o)}}}function bm(e,t){Ma.X(e,t);var a=pi;if(a&&e){var n=On(a).hoistableScripts,i=di(e),r=n.get(i);r||(r=a.querySelector(nl(i)),r||(e=O({src:e,async:!0},t),(t=Qt.get(i))&&ks(e,t),r=a.createElement("script"),ot(r),ht(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function _m(e,t){Ma.M(e,t);var a=pi;if(a&&e){var n=On(a).hoistableScripts,i=di(e),r=n.get(i);r||(r=a.querySelector(nl(i)),r||(e=O({src:e,async:!0,type:"module"},t),(t=Qt.get(i))&&ks(e,t),r=a.createElement("script"),ot(r),ht(r,"link",e),a.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},n.set(i,r))}}function jp(e,t,a,n){var i=(i=le.current)?dr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=fi(a.href),a=On(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fi(a.href);var r=On(i).hoistableStyles,o=r.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,o),(r=i.querySelector(al(e)))&&!r._p&&(o.instance=r,o.state.loading=5),Qt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qt.set(e,a),r||zm(i,e,a,o.state))),t&&n===null)throw Error(u(528,""));return o}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=di(a),a=On(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function fi(e){return'href="'+Lt(e)+'"'}function al(e){return'link[rel="stylesheet"]['+e+"]"}function Ap(e){return O({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),ht(t,"link",a),ot(t),e.head.appendChild(t))}function di(e){return'[src="'+Lt(e)+'"]'}function nl(e){return"script[async]"+e}function Tp(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Lt(a.href)+'"]');if(n)return t.instance=n,ot(n),n;var i=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),ot(n),ht(n,"style",i),mr(n,a.precedence,e),t.instance=n;case"stylesheet":i=fi(a.href);var r=e.querySelector(al(i));if(r)return t.state.loading|=4,t.instance=r,ot(r),r;n=Ap(a),(i=Qt.get(i))&&Rs(n,i),r=(e.ownerDocument||e).createElement("link"),ot(r);var o=r;return o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),ht(r,"link",n),t.state.loading|=4,mr(r,a.precedence,e),t.instance=r;case"script":return r=di(a.src),(i=e.querySelector(nl(r)))?(t.instance=i,ot(i),i):(n=a,(i=Qt.get(r))&&(n=O({},a),ks(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),ot(i),ht(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,mr(n,a.precedence,e));return t.instance}function mr(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,r=i,o=0;o<n.length;o++){var c=n[o];if(c.dataset.precedence===t)r=c;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Rs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ks(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var hr=null;function Mp(e,t,a){if(hr===null){var n=new Map,i=hr=new Map;i.set(a,n)}else i=hr,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var r=a[i];if(!(r[yi]||r[pt]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var o=r.getAttribute(t)||"";o=e+o;var c=n.get(o);c?c.push(r):n.set(o,[r])}}return n}function Cp(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Sm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Rp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Nm(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=fi(n.href),r=t.querySelector(al(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xr.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=r,ot(r);return}r=t.ownerDocument||t,n=Ap(n),(i=Qt.get(i))&&Rs(n,i),r=r.createElement("link"),ot(r);var o=r;o._p=new Promise(function(c,d){o.onload=c,o.onerror=d}),ht(r,"link",n),a.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xr.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Os=0;function Dm(e,t){return e.stylesheets&&e.count===0&&gr(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Os===0&&(Os=62500*lm());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gr(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Os?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function xr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vr=null;function gr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vr=new Map,t.forEach(wm,e),vr=null,xr.call(e))}function wm(e,t){if(!(t.state.loading&4)){var a=vr.get(e);if(a)var n=a.get(null);else{a=new Map,vr.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var o=i[r];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),r=a.get(o)||n,r===n&&a.set(null,i),a.set(o,i),this.count++,n=xr.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var il={$$typeof:z,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function jm(e,t,a,n,i,r,o,c,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ua(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ua(0),this.hiddenUpdates=Ua(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function kp(e,t,a,n,i,r,o,c,d,_,T,R){return e=new jm(e,t,a,o,d,_,T,R,c),t=1,r===!0&&(t|=24),r=kt(3,null,null,t),e.current=r,r.stateNode=e,t=fo(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:n,isDehydrated:a,cache:t},vo(r),e}function Op(e){return e?(e=Pn,e):Pn}function Ep(e,t,a,n,i,r){i=Op(i),n.context===null?n.context=i:n.pendingContext=i,n=Xa(t),n.payload={element:a},r=r===void 0?null:r,r!==null&&(n.callback=r),a=Va(e,n,t),a!==null&&(Ct(a,e,t),qi(a,e,t))}function qp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Es(e,t){qp(e,t),(e=e.alternate)&&qp(e,t)}function Up(e){if(e.tag===13||e.tag===31){var t=gn(e,67108864);t!==null&&Ct(t,e,67108864),Es(e,67108864)}}function Fp(e){if(e.tag===13||e.tag===31){var t=Ft();t=St(t);var a=gn(e,t);a!==null&&Ct(a,e,t),Es(e,t)}}var yr=!0;function Am(e,t,a,n){var i=N.T;N.T=null;var r=E.p;try{E.p=2,qs(e,t,a,n)}finally{E.p=r,N.T=i}}function Tm(e,t,a,n){var i=N.T;N.T=null;var r=E.p;try{E.p=8,qs(e,t,a,n)}finally{E.p=r,N.T=i}}function qs(e,t,a,n){if(yr){var i=Us(n);if(i===null)zs(e,t,n,br,a),Lp(e,n);else if(Cm(i,e,t,a,n))n.stopPropagation();else if(Lp(e,n),t&4&&-1<Mm.indexOf(e)){for(;i!==null;){var r=kn(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var o=_t(r.pendingLanes);if(o!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var d=1<<31-nt(o);c.entanglements[1]|=d,o&=~d}oa(r),(ze&6)===0&&(ar=fe()+500,$i(0))}}break;case 31:case 13:c=gn(r,2),c!==null&&Ct(c,r,2),ir(),Es(r,2)}if(r=Us(n),r===null&&zs(e,t,n,br,a),r===i)break;i=r}i!==null&&n.stopPropagation()}else zs(e,t,n,null,a)}}function Us(e){return e=Fr(e),Fs(e)}var br=null;function Fs(e){if(br=null,e=Rn(e),e!==null){var t=S(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=x(t),e!==null)return e;e=null}else if(a===31){if(e=j(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return br=e,null}function Bp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ge()){case Ue:return 2;case xt:return 8;case ut:case Re:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var Bs=!1,nn=null,ln=null,rn=null,ll=new Map,rl=new Map,on=[],Mm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lp(e,t){switch(e){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(t.pointerId)}}function ol(e,t,a,n,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:r,targetContainers:[i]},t!==null&&(t=kn(t),t!==null&&Up(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Cm(e,t,a,n,i){switch(t){case"focusin":return nn=ol(nn,e,t,a,n,i),!0;case"dragenter":return ln=ol(ln,e,t,a,n,i),!0;case"mouseover":return rn=ol(rn,e,t,a,n,i),!0;case"pointerover":var r=i.pointerId;return ll.set(r,ol(ll.get(r)||null,e,t,a,n,i)),!0;case"gotpointercapture":return r=i.pointerId,rl.set(r,ol(rl.get(r)||null,e,t,a,n,i)),!0}return!1}function Gp(e){var t=Rn(e.target);if(t!==null){var a=S(t);if(a!==null){if(t=a.tag,t===13){if(t=x(a),t!==null){e.blockedOn=t,tc(e.priority,function(){Fp(a)});return}}else if(t===31){if(t=j(a),t!==null){e.blockedOn=t,tc(e.priority,function(){Fp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Us(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ur=n,a.target.dispatchEvent(n),Ur=null}else return t=kn(a),t!==null&&Up(t),e.blockedOn=a,!1;t.shift()}return!0}function Hp(e,t,a){_r(e)&&a.delete(t)}function Rm(){Bs=!1,nn!==null&&_r(nn)&&(nn=null),ln!==null&&_r(ln)&&(ln=null),rn!==null&&_r(rn)&&(rn=null),ll.forEach(Hp),rl.forEach(Hp)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Bs||(Bs=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Rm)))}var Sr=null;function Yp(e){Sr!==e&&(Sr=e,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){Sr===e&&(Sr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Fs(n||a)===null)continue;break}var r=kn(a);r!==null&&(e.splice(t,3),t-=3,Uo(r,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function mi(e){function t(d){return zr(d,e)}nn!==null&&zr(nn,e),ln!==null&&zr(ln,e),rn!==null&&zr(rn,e),ll.forEach(t),rl.forEach(t);for(var a=0;a<on.length;a++){var n=on[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<on.length&&(a=on[0],a.blockedOn===null);)Gp(a),a.blockedOn===null&&on.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],r=a[n+1],o=i[Dt]||null;if(typeof r=="function")o||Yp(a);else if(o){var c=null;if(r&&r.hasAttribute("formAction")){if(i=r,o=r[Dt]||null)c=o.formAction;else if(Fs(i)!==null)continue}else c=o.action;typeof c=="function"?a[n+1]=c:(a.splice(n,3),n-=3),Yp(a)}}}function Pp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Ls(e){this._internalRoot=e}Nr.prototype.render=Ls.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=Ft();Ep(a,n,e,t,null,null)},Nr.prototype.unmount=Ls.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ep(e.current,2,null,e,null,null),ir(),t[Cn]=null}};function Nr(e){this._internalRoot=e}Nr.prototype.unstable_scheduleHydration=function(e){if(e){var t=fa();e={blockedOn:null,target:e,priority:t};for(var a=0;a<on.length&&t!==0&&t<on[a].priority;a++);on.splice(a,0,e),a===0&&Gp(e)}};var Xp=s.version;if(Xp!=="19.2.8")throw Error(u(527,Xp,"19.2.8"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=y(t),e=e!==null?U(e):null,e=e===null?null:e.stateNode,e};var km={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dr.isDisabled&&Dr.supportsFiber)try{at=Dr.inject(km),Ke=Dr}catch{}}return cl.createRoot=function(e,t){if(!v(e))throw Error(u(299));var a=!1,n="",i=$0,r=I0,o=eu;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=kp(e,1,!1,null,null,a,n,null,i,r,o,Pp),e[Cn]=t.current,_s(e),new Ls(t)},cl.hydrateRoot=function(e,t,a){if(!v(e))throw Error(u(299));var n=!1,i="",r=$0,o=I0,c=eu,d=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(d=a.formState)),t=kp(e,1,!0,t,a??null,n,i,d,r,o,c,Pp),t.context=Op(null),a=t.current,n=Ft(),n=St(n),i=Xa(n),i.callback=null,Va(a,i,n),a=n,t.current.lanes=a,na(t,a),oa(t),e[Cn]=t.current,_s(e),new Nr(t)},cl.version="19.2.8",cl}var tf;function Pm(){if(tf)return Hs.exports;tf=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(s){console.error(s)}}return p(),Hs.exports=Ym(),Hs.exports}var Xm=Pm();const Vm=Em(Xm);var k=$s();const af="golden_ratio_user_prefs",Zm=500;class Qm{constructor(){this.samples=[],this.lastSampleTime=0,this.currentFractal="",this.currentStyle="",this.currentPalette="",this.currentCamera="",this.sessionStart=0,this.prefs=this.loadFromStorage(),this.sessionStart=performance.now()}getDefaultPrefs(){return{preferredZoomRange:{min:.5,max:8,avg:2},zoomSensitivity:1,rotationSpeed:.005,rotationStyle:"moderate",fractalWeights:{},renderStyleWeights:{},paletteWeights:{},cameraModeWeights:{},prefersTouch:!1,prefersScroll:!0,totalInteractionTime:0,sampleCount:0}}loadFromStorage(){try{const s=localStorage.getItem(af);if(s)return{...this.getDefaultPrefs(),...JSON.parse(s)}}catch{}return this.getDefaultPrefs()}saveToStorage(){try{localStorage.setItem(af,JSON.stringify(this.prefs))}catch{}}recordInteraction(s,f){const u=performance.now(),v=u-this.lastSampleTime;this.lastSampleTime=u;const S={timestamp:u,type:s,value:f,duration:v};this.samples.push(S),this.samples.length>Zm&&this.samples.shift(),this.analyzeSample(S),this.prefs.sampleCount++,this.prefs.sampleCount%20===0&&this.saveToStorage()}analyzeSample(s){switch(s.type){case"zoom":this.analyzeZoom(s);break;case"rotate":this.analyzeRotation(s);break;case"fractal_change":this.analyzeFractalChange(s);break;case"style_change":this.analyzeStyleChange(s);break;case"palette_change":this.analyzePaletteChange(s);break;case"camera_change":this.analyzeCameraChange(s);break}}analyzeZoom(s){const f=s.value;this.prefs.preferredZoomRange.avg=this.prefs.preferredZoomRange.avg*.9+f*.1,this.prefs.preferredZoomRange.min=Math.min(this.prefs.preferredZoomRange.min,f),this.prefs.preferredZoomRange.max=Math.max(this.prefs.preferredZoomRange.max,f),this.prefs.zoomSensitivity=this.prefs.zoomSensitivity*.95+Math.abs(s.value)*.05}analyzeRotation(s){const f=Math.abs(s.value);this.prefs.rotationSpeed=this.prefs.rotationSpeed*.9+f*.1,f<.003?this.prefs.rotationStyle="careful":f<.01?this.prefs.rotationStyle="moderate":this.prefs.rotationStyle="fast"}analyzeFractalChange(s){const f=String(Math.round(s.value));this.prefs.fractalWeights[f]=(this.prefs.fractalWeights[f]||0)+1,this.currentFractal=f}analyzeStyleChange(s){const f=String(Math.round(s.value));this.prefs.renderStyleWeights[f]=(this.prefs.renderStyleWeights[f]||0)+1,this.currentStyle=f}analyzePaletteChange(s){const f=String(Math.round(s.value));this.prefs.paletteWeights[f]=(this.prefs.paletteWeights[f]||0)+1,this.currentPalette=f}analyzeCameraChange(s){const f=String(Math.round(s.value));this.prefs.cameraModeWeights[f]=(this.prefs.cameraModeWeights[f]||0)+1,this.currentCamera=f}getPreferred(s){let f=0,u=null;for(const[v,S]of Object.entries(s))S>f&&(f=S,u=v);return u}getAdaptedDefaults(){const s={};if(this.prefs.sampleCount>10){s.zoom=this.prefs.preferredZoomRange.avg,s.rotationSensitivity=this.prefs.rotationSpeed;const f=this.getPreferred(this.prefs.fractalWeights);f!==null&&(s.preferredFractal=Number(f));const u=this.getPreferred(this.prefs.renderStyleWeights);u!==null&&(s.preferredStyle=Number(u));const v=this.getPreferred(this.prefs.paletteWeights);v!==null&&(s.preferredPalette=Number(v));const S=this.getPreferred(this.prefs.cameraModeWeights);S!==null&&(s.preferredCamera=S)}return s}getPreferences(){return this.prefs}reset(){this.prefs=this.getDefaultPrefs(),this.samples=[],this.saveToStorage()}flush(){this.saveToStorage()}}const nf=new Qm,Km=`
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
    if (h < 0.001) { return 0.0; }
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
    let phase = fract(effectiveTrap * 2.0 + curvNorm * 1.5 + length(p - ro) * 0.3 + u.time * 0.04 + u.palette_seed * 0.01);
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
`,Ca=[{id:"gold-obsidian",name:"24K Pure Gold & Obsidian",primary:[1,.82,.28],secondary:[.72,.48,.12],accent:[1,.95,.65],ambient:[.08,.05,.02]},{id:"lapis-lazuli",name:"Lapis Lazuli & Pharaoh Gold",primary:[.08,.32,.82],secondary:[.95,.76,.22],accent:[.25,.85,.92],ambient:[.02,.04,.09]},{id:"bioluminescent-abyss",name:"Bioluminescent Deep Abyss",primary:[.05,.88,.82],secondary:[.08,.22,.65],accent:[.45,1,.65],ambient:[.01,.03,.06]},{id:"celestial-aurora",name:"Celestial Aurora & Emerald",primary:[.15,.85,.65],secondary:[.12,.45,.9],accent:[.95,.88,.35],ambient:[.02,.04,.08]},{id:"solar-plasma",name:"Solar Corona & Plasma",primary:[1,.52,.1],secondary:[.85,.15,.12],accent:[1,.92,.45],ambient:[.06,.02,.01]},{id:"cosmic-amethyst",name:"Cosmic Amethyst & Violet",primary:[.72,.35,.95],secondary:[.35,.15,.75],accent:[1,.82,.35],ambient:[.04,.02,.06]},{id:"cyber-lotus",name:"Cybernetic Sakura & Lotus",primary:[.98,.32,.68],secondary:[.45,.18,.78],accent:[.85,.35,.75],ambient:[.05,.02,.05]},{id:"pure-platinum",name:"Pure Platinum & Pearl",primary:[.88,.92,.98],secondary:[.45,.55,.68],accent:[1,.88,.55],ambient:[.03,.04,.05]},{id:"antique-patina",name:"Antique Bronze & Verdigris",primary:[.22,.75,.62],secondary:[.65,.42,.22],accent:[.95,.82,.45],ambient:[.03,.04,.03]},{id:"hyperborean-ice",name:"Hyperborean Crystal Ice",primary:[.55,.82,.98],secondary:[.18,.35,.72],accent:[.55,.82,.95],ambient:[.02,.04,.07]},{id:"ruby-singularity",name:"Ruby Singularity & Rose Gold",primary:[.92,.18,.32],secondary:[.58,.12,.22],accent:[1,.78,.62],ambient:[.05,.01,.02]},{id:"crystalline-emerald",name:"Crystalline Emerald Matrix",primary:[.12,.82,.42],secondary:[.05,.45,.28],accent:[.98,.85,.32],ambient:[.01,.04,.02]},{id:"nebula-spectrum",name:"Deep Space Nebula Spectrum",primary:[.85,.25,.75],secondary:[.22,.32,.95],accent:[.98,.92,.45],ambient:[.03,.02,.05]},{id:"monochrome-divine",name:"Cinematic Silver & Charcoal",primary:[.82,.84,.86],secondary:[.28,.3,.33],accent:[.95,.95,.98],ambient:[.03,.03,.03]},{id:"volcanic-obsidian",name:"Volcanic Obsidian & Magma",primary:[.12,.06,.04],secondary:[.95,.35,.08],accent:[1,.72,.22],ambient:[.04,.01,.01]},{id:"bioluminescent-jellyfish",name:"Deep-Sea Jellyfish Bioluminescence",primary:[.15,.42,.95],secondary:[.85,.18,.62],accent:[.45,1,.92],ambient:[.01,.02,.05]},{id:"saharan-dusk",name:"Saharan Dune & Desert Sunset",primary:[.92,.62,.28],secondary:[.78,.22,.15],accent:[1,.88,.55],ambient:[.06,.03,.02]},{id:"aurora-borealis",name:"Aurora Borealis & Arctic Night",primary:[.18,.92,.55],secondary:[.35,.22,.85],accent:[.55,1,.82],ambient:[.02,.03,.06]},{id:"coral-reef",name:"Coral Reef & Tropical Abyss",primary:[.95,.42,.52],secondary:[.08,.55,.72],accent:[1,.82,.35],ambient:[.02,.04,.06]},{id:"steampunk-brass",name:"Steampunk Brass & Copper Patina",primary:[.78,.58,.22],secondary:[.52,.28,.12],accent:[1,.88,.42],ambient:[.04,.03,.02]},{id:"quantum-foam",name:"Quantum Foam & Vacuum Fluctuation",primary:[.62,.35,.95],secondary:[.15,.72,.88],accent:[1,.95,.72],ambient:[.03,.02,.05]},{id:"blood-moon",name:"Blood Moon & Eclipse Shadow",primary:[.72,.12,.15],secondary:[.18,.08,.12],accent:[.95,.42,.28],ambient:[.04,.01,.02]},{id:"arctic-fox",name:"Arctic Winter & Polar Ice",primary:[.88,.92,.98],secondary:[.42,.58,.78],accent:[.72,.85,.95],ambient:[.04,.05,.07]},{id:"neon-tokyo",name:"Neon Tokyo & Rain-Slicked Streets",primary:[.95,.12,.52],secondary:[.08,.42,.95],accent:[.22,1,.62],ambient:[.03,.02,.04]},{id:"ancient-egypt",name:"Ancient Egypt & Temple Gold",primary:[.92,.78,.32],secondary:[.12,.35,.62],accent:[.82,.42,.18],ambient:[.04,.03,.02]},{id:"deep-forest",name:"Primeval Forest & Moss Cathedral",primary:[.12,.52,.22],secondary:[.28,.18,.08],accent:[.72,.88,.32],ambient:[.02,.04,.02]}];function Zs(p){switch(p){case"phyllotaxis":return 0;case"mandelbulb":return 1;case"quaternionJulia":return 2;case"apollonian":return 3;case"spiralTunnel":return 4;case"mandelbox":return 5;case"icosahedral":return 6;case"menger":return 7;case"gyroid":return 8;case"primeSpiral":return 9;case"quasicrystal":return 10;case"hopfFibration":return 11;case"calabiYau":return 12;case"riemannZeta":return 13;case"sierpinskiOcta":return 14;case"cliffordKlein":return 15;case"poincareSphere":return 16;case"gaussianPrimes":return 17;case"neoviusMinimal":return 18;case"eulerTotientSpiral":return 19;case"cliffordTorus4D":return 20;case"kleinianLimit":return 21;case"fibonacciSnowflake":return 22;case"quaternionMandelbrot":return 23;case"hilbertCurve3D":return 24;case"dragonCurveIFS":return 25;case"pythagorasTree3D":return 26;case"burningShip3D":return 27;case"newtonBasins":return 28;case"jerusalemCube":return 29;case"lorenzAttractor":return 30;case"hofstadterButterfly":return 31;case"antoineNecklace":return 32;case"dlaCluster":return 33;case"rosslerHyperchaos":return 34;case"cliffordAttractor":return 35;case"abrikosovLattice":return 36;case"beltramiPseudosphere":return 37;case"spinFoamNetwork":return 38;case"ramanujanTau":return 39;case"belousovWaves":return 40;case"henonAttractor":return 41;case"aizawaAttractor":return 42;case"thomasAttractor":return 43;case"halvorsenAttractor":return 44;case"juliaSet3D":return 45;case"multibrot3":return 46;case"tetrix":return 47;case"gosperCurve":return 48;case"lSystemPlant":return 49;case"schwarzP":return 50;case"schwarzD":return 51;case"apollonianGasket":return 52;case"barnsleyFern3D":return 53;case"kleinQuartic":return 54;case"spherePacking":return 55;case"novaFractal":return 56;case"goldenKnot":return 57;case"sphericalHarmonics":return 58;case"fractalCross":return 59;case"reactionDiffusion":return 60;case"sierpinskiCarpet":return 61;case"tricorn":return 62;case"chuaCircuit":return 63;case"standardMap":return 64;case"ikedaMap":return 65;case"kochSnowflake3D":return 66;case"cantorDust":return 67;case"phoenixFractal":return 68;case"fatouSet":return 69;case"e8Lattice":return 70;case"chladniFigures":return 71;case"fitzHugh":return 72;case"rosslerAttractor":return 73;case"duffingAttractor":return 74;case"logisticBifurcation":return 75;case"fractalSpire":return 76;case"deJongAttractor":return 77;case"pickoverAttractor":return 78;case"vicsekFractal":return 79;case"mandelbar":return 80;case"weierstrass3D":return 81;case"popcornFunction":return 82;case"bedheadAttractor":return 83;case"fourSpotAttractor":return 84;case"svenssonAttractor":return 85;default:return 0}}function Jm(p){switch(p){case"smoothMorph":return 0;case"smoothUnion":return 1;case"smoothIntersection":return 2;case"smoothCarve":return 3;case"domainWarp":return 4;case"quantumResonance":return 5;case"fractalLattice":return 6;case"goldenSpiralFold":return 7;default:return 1}}function Wm(p){switch(p){case"orbit":return 0;case"flyThrough":return 1;case"goldenSpiral":return 2;case"kelvinInvert":return 3;default:return 0}}function $m(p){switch(p){case"golden":return 0;case"x":return 1;case"y":return 2;case"z":return 3;default:return 0}}function Im(p){switch(p){case"solid":return 0;case"xray":return 1;case"topo":case"sonar":case"lidar":return 2;case"hologram":return 3;case"iridescent":return 4;case"quantum":return 5;case"gemstone":return 6;default:return 0}}class ff{constructor(s){this.rendererInfo="Unknown",this.canvas=s}resolvePalette(s){return s.customPalette||Ca.find(f=>f.id===s.paletteId)||Ca[0]}computeIndices(s){return{fractalIdx:Zs(s.type),hybridIdx:Zs(s.hybridType||s.type),tertiaryIdx:Zs(s.tertiaryType||"riemannZeta"),compositeOpIdx:Jm(s.compositeOp),cameraModeIdx:Wm(s.cameraMode),sliceAxisIdx:$m(s.sliceAxis),renderStyleIdx:Im(s.renderStyle)}}packUniforms(s,f,u,v,S){const x=this.canvas.width,j=this.canvas.height;return s[0]=x,s[1]=j,s[2]=f,s[3]=u.phiMultiplier,s[4]=u.rotX,s[5]=u.rotY,s[6]=u.zoom,s[7]=S.fractalIdx,s[8]=u.iterations,s[9]=u.glowIntensity,s[10]=u.morphSpeed,s[11]=S.hybridIdx,s[12]=u.hybridBlend??0,s[13]=u.boxFold??1.2,s[14]=u.sphereFold??.65,s[15]=u.interiorCut??.35,s[16]=v.primary[0],s[17]=v.primary[1],s[18]=v.primary[2],s[19]=S.tertiaryIdx,s[20]=v.secondary[0],s[21]=v.secondary[1],s[22]=v.secondary[2],s[23]=u.tertiaryBlend??0,s[24]=v.accent[0],s[25]=v.accent[1],s[26]=v.accent[2],s[27]=S.compositeOpIdx,s[28]=u.smoothK??.35,s[29]=u.warpStrength??.3,s[30]=u.octaveLayers??2,s[31]=S.cameraModeIdx,s[32]=u.camPosX??0,s[33]=u.camPosY??0,s[34]=u.camPosZ??0,s[35]=u.slicePlane??0,s[36]=u.headlampPower??.3,s[37]=u.volumetricFog??.15,s[38]=S.sliceAxisIdx,s[39]=S.renderStyleIdx,s[40]=v.ambient?v.ambient[0]:.02,s[41]=v.ambient?v.ambient[1]:.02,s[42]=v.ambient?v.ambient[2]:.02,s[43]=u.paletteSeed??0,s[44]=0,s[45]=0,s[46]=0,s[47]=0,s}}class Is extends ff{constructor(s){super(s),this.adapter=null,this.device=null,this.context=null,this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.uniformValues=new Float32Array(48),this.isDestroyed=!1,this.adapterInfo="Unknown GPU",this.rendererInfo="WebGPU Engine"}static isSupported(){return typeof navigator<"u"&&"gpu"in navigator&&!!navigator.gpu}async init(){if(!Is.isSupported())return console.info("[WebGPU] navigator.gpu not available"),!1;try{const s=navigator.gpu.requestAdapter({powerPreference:"high-performance"}),f=new Promise(S=>setTimeout(()=>S(null),5e3));if(this.adapter=await Promise.race([s,f]),!this.adapter)return console.warn("[WebGPU] Adapter request failed or timed out — GPU unavailable"),!1;console.info("[WebGPU] Adapter acquired, requesting device...");try{const S=this.adapter.info;S&&(S.vendor||S.description)?this.adapterInfo=`${S.vendor||""} ${S.description||S.architecture||""}`.trim():this.adapterInfo="WebGPU Hardware Accelerated"}catch{this.adapterInfo="WebGPU Generic Adapter"}if(this.device=await this.adapter.requestDevice(),this.device.lost.then(S=>{console.warn(`WebGPU device lost: ${S.message}`,S),this.isDestroyed=!0}),this.context=this.canvas.getContext("webgpu"),!this.context)return!1;const u=navigator.gpu.getPreferredCanvasFormat();this.context.configure({device:this.device,format:u,alphaMode:"premultiplied"});try{const S=this.device.createCommandEncoder();S.beginRenderPass({colorAttachments:[{view:this.context.getCurrentTexture().createView(),clearValue:{r:.02,g:.015,b:.025,a:1},loadOp:"clear",storeOp:"store"}]}).end(),this.device.queue.submit([S.finish()])}catch(S){console.debug("Initial clear pass handled:",S)}const v=this.device.createShaderModule({label:"Golden Ratio WGSL Fractal Shader",code:Km});if("getCompilationInfo"in v)try{const x=(await v.getCompilationInfo()).messages.filter(j=>j.type==="error");if(x.length>0){for(const j of x)console.error(`[WGSL Compile Error] Line ${j.lineNum}:${j.linePos}: ${j.message}`);return!1}}catch(S){console.debug("Compilation info inspection skipped:",S)}return this.pipeline=await this.device.createRenderPipelineAsync({label:"Golden Ratio Pipeline",layout:"auto",vertex:{module:v,entryPoint:"vs_main"},fragment:{module:v,entryPoint:"fs_main",targets:[{format:u}]},primitive:{topology:"triangle-list"}}),this.uniformBuffer=this.device.createBuffer({size:192,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.bindGroup=this.device.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}}]}),!0}catch(s){return console.warn("WebGPU init failed, will use fallback:",s),!1}}render(s,f){if(this.isDestroyed||!this.device||!this.context||!this.pipeline||!this.uniformBuffer||!this.bindGroup)return;const u=this.canvas.width,v=this.canvas.height;if(u===0||v===0)return;const S=this.resolvePalette(f),x=this.computeIndices(f);this.packUniforms(this.uniformValues,s,f,S,x),this.device.queue.writeBuffer(this.uniformBuffer,0,this.uniformValues);try{const j=this.device.createCommandEncoder(),A=this.context.getCurrentTexture().createView(),y=j.beginRenderPass({colorAttachments:[{view:A,clearValue:{r:.01,g:.01,b:.02,a:1},loadOp:"clear",storeOp:"store"}]});y.setPipeline(this.pipeline),y.setBindGroup(0,this.bindGroup),y.draw(3,1,0,0),y.end(),this.device.queue.submit([j.finish()])}catch(j){console.debug("WebGPU render frame skipped:",j.message)}}destroy(){var s,f;this.isDestroyed=!0;try{(s=this.uniformBuffer)==null||s.destroy()}catch{}try{(f=this.device)==null||f.destroy()}catch{}this.pipeline=null,this.uniformBuffer=null,this.bindGroup=null,this.context=null,this.device=null,this.adapter=null}}const eh=`#version 300 es
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
    if (h < 0.001) return 0.0;
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
    float phase = fract(effectiveTrap * 2.0 + curvNorm * 1.5 + length(p - ro) * 0.3 + u_time * 0.04 + u_palette_seed * 0.01);
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
`,nh=ah;class ih extends ff{constructor(s){super(s),this.gl=null,this.program=null,this.vao=null,this.vbo=null,this.uniformLocs={},this.rendererInfo="WebGL2 Shader Pipeline"}init(){console.group("[WebGL2] === INITIALIZATION START ==="),console.info("[WebGL2] Canvas element:",this.canvas),console.info("[WebGL2] Canvas size (CSS):",this.canvas.clientWidth,"x",this.canvas.clientHeight),console.info("[WebGL2] Canvas size (buffer):",this.canvas.width,"x",this.canvas.height),console.info("[WebGL2] User Agent:",navigator.userAgent),console.info("[WebGL2] Device Pixel Ratio:",window.devicePixelRatio);const s=this.canvas.getBoundingClientRect();(s.width===0||s.height===0)&&(console.warn("[WebGL2] Canvas has zero dimensions, setting fallback size..."),this.canvas.width=Math.max(1,this.canvas.clientWidth||800),this.canvas.height=Math.max(1,this.canvas.clientHeight||600)),console.info('[WebGL2] Attempt 1: getContext("webgl2") with no options...');let f=this.canvas.getContext("webgl2");if(console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED"),f||(console.info("[WebGL2] Attempt 2: webgl2 with preserveDrawingBuffer..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),f||(console.info("[WebGL2] Attempt 3: webgl2 with high-performance..."),f=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"}),console.info("[WebGL2] Result:",f?"SUCCESS":"FAILED")),!f){console.warn("[WebGL2] All webgl2 attempts failed, trying webgl (WebGL1)...");const U=this.canvas.getContext("webgl")||this.canvas.getContext("experimental-webgl");return U&&(console.error("[WebGL2] WebGL1 obtained but WebGL2 is required. Check chrome://gpu"),console.error("[WebGL2] WebGL1 renderer:",U.getParameter(U.RENDERER))),console.error("[WebGL2] === INITIALIZATION FAILED ==="),console.groupEnd(),!1}this.gl=f,console.info("[WebGL2] Context acquired!"),console.info("[WebGL2] GL_VERSION:",f.getParameter(f.VERSION)),console.info("[WebGL2] GL_RENDERER:",f.getParameter(f.RENDERER)),console.info("[WebGL2] GL_VENDOR:",f.getParameter(f.VENDOR)),console.info("[WebGL2] GL_SHADING_LANGUAGE_VERSION:",f.getParameter(f.SHADING_LANGUAGE_VERSION));const u=f.getSupportedExtensions();console.info("[WebGL2] Supported extensions count:",(u==null?void 0:u.length)||0),console.info("[WebGL2] KHR_parallel_shader_compile:",u==null?void 0:u.includes("KHR_parallel_shader_compile")),console.info("[WebGL2] WEBGL_debug_renderer_info:",u==null?void 0:u.includes("WEBGL_debug_renderer_info"));try{const U=f.getExtension("WEBGL_debug_renderer_info");if(U){const O=f.getParameter(U.UNMASKED_RENDERER_WEBGL);O&&(this.rendererInfo=O)}}catch{this.rendererInfo="WebGL2 Hardware Engine"}const v=this.compileShader(f.VERTEX_SHADER,th),S=this.compileShader(f.FRAGMENT_SHADER,nh);if(!v||!S)return!1;const x=f.createProgram();if(!x)return!1;if(f.attachShader(x,v),f.attachShader(x,S),f.linkProgram(x),f.deleteShader(v),f.deleteShader(S),!f.getProgramParameter(x,f.LINK_STATUS))return console.error("WebGL Program Link Error:",f.getProgramInfoLog(x)),!1;this.program=x;const j=new Float32Array([-1,-1,3,-1,-1,3]);this.vao=f.createVertexArray(),f.bindVertexArray(this.vao),this.vbo=f.createBuffer(),f.bindBuffer(f.ARRAY_BUFFER,this.vbo),f.bufferData(f.ARRAY_BUFFER,j,f.STATIC_DRAW);const A=f.getAttribLocation(x,"a_position");return f.enableVertexAttribArray(A),f.vertexAttribPointer(A,2,f.FLOAT,!1,0,0),["u_resolution","u_time","u_phi_val","u_cam_rot","u_zoom","u_fractal_type","u_hybrid_type","u_tertiary_type","u_iterations","u_glow_intensity","u_morph_speed","u_hybrid_blend","u_tertiary_blend","u_compose_op","u_smooth_k","u_warp_strength","u_octave_layers","u_box_fold","u_sphere_fold","u_interior_cut","u_primary_color","u_secondary_color","u_accent_color","u_cam_mode","u_cam_pos","u_slice_plane","u_slice_axis","u_render_style","u_headlamp_power","u_volumetric_fog","u_palette_seed"].forEach(U=>{this.uniformLocs[U]=f.getUniformLocation(x,U)}),!0}compileShader(s,f){if(!this.gl)return null;const u=this.gl,v=u.createShader(s);if(!v)return null;const S=u.getExtension("KHR_parallel_shader_compile");if(u.shaderSource(v,f),u.compileShader(v),S){const x=performance.now(),j=15e3;for(;!u.getShaderParameter(v,u.COMPILE_STATUS);){const A=S.COMPLETION_STATUS_KHR;if(u.getShaderParameter(v,A))break;if(performance.now()-x>j)return console.error("[WebGL2] Shader compilation timeout after 15s"),console.error("Shader info:",u.getShaderInfoLog(v)),u.deleteShader(v),null}}return u.getShaderParameter(v,u.COMPILE_STATUS)?(console.info("[WebGL2] Shader compiled successfully ("+(s===u.VERTEX_SHADER?"vertex":"fragment")+")"),v):(console.error("Shader compilation error:",u.getShaderInfoLog(v)),u.deleteShader(v),null)}render(s,f){const u=this.gl;if(!u||!this.program||!this.vao)return;u.viewport(0,0,this.canvas.width,this.canvas.height),u.useProgram(this.program),u.bindVertexArray(this.vao);const v=this.resolvePalette(f),S=this.computeIndices(f),x=new Float32Array(48);this.packUniforms(x,s,f,v,S);const j=(U,O)=>{const B=this.uniformLocs[U];B&&u.uniform1f(B,O)},A=(U,O,B)=>{const q=this.uniformLocs[U];q&&u.uniform2f(q,O,B)},y=(U,O,B,q)=>{const P=this.uniformLocs[U];P&&u.uniform3f(P,O,B,q)};A("u_resolution",x[0],x[1]),j("u_time",x[2]),j("u_phi_val",x[3]),A("u_cam_rot",x[4],x[5]),j("u_zoom",x[6]),j("u_fractal_type",x[7]),j("u_iterations",x[8]),j("u_glow_intensity",x[9]),j("u_morph_speed",x[10]),j("u_hybrid_type",x[11]),j("u_hybrid_blend",x[12]),j("u_box_fold",x[13]),j("u_sphere_fold",x[14]),j("u_interior_cut",x[15]),y("u_primary_color",x[16],x[17],x[18]),j("u_tertiary_type",x[19]),y("u_secondary_color",x[20],x[21],x[22]),j("u_tertiary_blend",x[23]),y("u_accent_color",x[24],x[25],x[26]),j("u_compose_op",x[27]),j("u_smooth_k",x[28]),j("u_warp_strength",x[29]),j("u_octave_layers",x[30]),j("u_cam_mode",x[31]),y("u_cam_pos",x[32],x[33],x[34]),j("u_slice_plane",x[35]),j("u_headlamp_power",x[36]),j("u_volumetric_fog",x[37]),j("u_slice_axis",x[38]),j("u_render_style",x[39]),j("u_palette_seed",x[43]),u.drawArrays(u.TRIANGLES,0,3)}destroy(){if(this.gl){this.vao&&(this.gl.deleteVertexArray(this.vao),this.vao=null),this.vbo&&(this.gl.deleteBuffer(this.vbo),this.vbo=null),this.program&&(this.gl.deleteProgram(this.program),this.program=null);const s=this.gl.getExtension("WEBGL_lose_context");s&&s.loseContext(),this.gl=null}}}function lh(p,s){const{forcedBackend:f,isEmbeddedBrowser:u,isMobileDevice:v,paramsRef:S,onTelemetryUpdate:x,onEngineReady:j,onNextSpecimen:A,onPrevSpecimen:y,onInteraction:U,screenshotRequested:O,onScreenshotCaptured:B}=s,q=k.useRef(null),[P,J]=k.useState(()=>f==="webgl2"?"webgl2":f==="webgpu"?u?"webgl2":"webgpu":"webgl2"),[W,F]=k.useState(!0),[re,z]=k.useState(!1),[H,ve]=k.useState("Initializing..."),[ye,te]=k.useState(""),[we,Se]=k.useState(0),[et,Be]=k.useState(0),[Le,tt]=k.useState(0),[Qe,K]=k.useState(0),[N,E]=k.useState([0,0]),L=k.useRef(null),V=k.useRef(null),ae=k.useRef("Initializing..."),m=k.useRef(x);m.current=x;const M=k.useRef(B);M.current=B;const G=k.useRef(A);G.current=A;const X=k.useRef(y);X.current=y;const ne=k.useRef(U);ne.current=U;const le=k.useRef([]),ue=k.useRef(0),ke=k.useRef(null),Ce=k.useRef(0),Kt=k.useRef(!1),qe=k.useRef(new Set),ca=k.useRef(!1),Ra=k.useRef(!0),yt=k.useRef(!1),ka=k.useRef(!1),Y=k.useRef(!1),pe=k.useRef({x:0,y:0}),I=k.useRef({x:0,y:0}),ct=k.useRef(0),lt=k.useRef(0),Oa=.92,Ea=1e-4;k.useEffect(()=>{ka.current=O},[O]),k.useEffect(()=>{if(f==="webgl2")J("webgl2");else if(f==="webgpu"){if(u){console.warn("[useRenderEngine] WebGPU blocked in embedded browser — using WebGL2"),Kt.current=!0,J("webgl2");return}Kt.current=!1,J("webgpu")}else f==="auto"&&J("webgl2")},[f]);const un=k.useCallback(()=>{const fe=q.current,Ge=p.current;if(!fe||!Ge)return;const Ue=u||v?1.5:2,xt=Math.min(window.devicePixelRatio||1,Ue),ut=Ge.clientWidth||window.innerWidth||800,Re=Ge.clientHeight||window.innerHeight||600,Jt=Math.floor(ut*xt),ta=Math.floor(Re*xt);(fe.width!==Jt||fe.height!==ta)&&(fe.width=Math.max(Jt,320),fe.height=Math.max(ta,240))},[u,v]);return k.useEffect(()=>{const fe=q.current;if(!fe)return;un();let Ge=!1;const Ue=setTimeout(()=>{Ge||(console.warn("[useRenderEngine] Force-hiding loading overlay after 12s"),F(!1))},12e3),xt=setTimeout(()=>{!yt.current&&!Ge&&console.error("[useRenderEngine] Engine setup timed out after 8s — GPU unavailable")},8e3);async function ut(){if(!fe)return;if(console.info("[useRenderEngine] Setup starting, activeEngineType=",P),F(!0),yt.current=!1,z(!1),L.current&&(L.current.destroy(),L.current=null),V.current&&(V.current.destroy(),V.current=null),P==="webgpu"){console.info("[useRenderEngine] Attempting WebGPU init...");const He=new Is(fe);if(await He.init()&&!Ge){L.current=He,yt.current=!0,z(!0),ae.current="WebGPU (WGSL)",ve("WebGPU (WGSL)"),te(He.adapterInfo),F(!1),j==null||j();return}else{Kt.current=!0,Ge?F(!1):J("webgl2");return}}console.info("[useRenderEngine] Attempting WebGL2 init...");const at=new ih(fe);at.init()&&!Ge?(V.current=at,yt.current=!0,z(!0),ae.current="WebGL2 (GLSL)",ve("WebGL2 (GLSL)"),te(at.rendererInfo),F(!1),j==null||j()):(F(!1),j==null||j())}ut().catch(at=>{console.error("[useRenderEngine] Engine setup crashed:",at),F(!1),j==null||j()});const Re=at=>{at.preventDefault(),ca.current=!0},Jt=()=>{ca.current=!1,ut()};fe.addEventListener("webglcontextlost",Re,!1),fe.addEventListener("webglcontextrestored",Jt,!1);const ta=p.current;let ua=null;return ta&&(ua=new ResizeObserver(()=>{Ge||un()}),ua.observe(ta)),()=>{var at,Ke;Ge=!0,clearTimeout(xt),clearTimeout(Ue),fe.removeEventListener("webglcontextlost",Re),fe.removeEventListener("webglcontextrestored",Jt),ua&&ua.disconnect(),(at=L.current)==null||at.destroy(),(Ke=V.current)==null||Ke.destroy()}},[P,un]),k.useEffect(()=>{let fe=!0,Ge=performance.now();const Ue=()=>{Ra.current=!document.hidden,Ra.current&&(Ge=performance.now())};document.addEventListener("visibilitychange",Ue);const xt=ut=>{var at,Ke;if(!fe)return;if(ca.current){ke.current=requestAnimationFrame(xt);return}if(!Ra.current){ke.current=requestAnimationFrame(xt);return}if(!yt.current){setTimeout(()=>{fe&&(ke.current=requestAnimationFrame(xt))},1e3);return}const Re=S.current,Jt=ut-Ge,ta=Re.targetFps||60,ua=ta>=240?0:1e3/ta;if(ua<=0||Jt>=ua-.75){const He=Math.min(Jt,100);Ge=ut,Ce.current+=He/1e3;const nt=Ce.current;if(Re.cameraMode==="flyThrough"){const vt=Re.rotX,zt=Re.rotY,aa=Math.cos(vt),qa=Math.sin(vt),Ua=Math.cos(zt),na=Math.sin(zt),Wt=[qa*Ua,na,-aa*Ua],pa=[aa,0,qa],dn=[0,1,0];let rt=1.4*(He/1e3);(qe.current.has("ShiftLeft")||qe.current.has("ShiftRight"))&&(rt*=2.8);let St=0,Nt=0,fa=0;(qe.current.has("KeyW")||qe.current.has("ArrowUp"))&&(St+=Wt[0]*rt,Nt+=Wt[1]*rt,fa+=Wt[2]*rt),(qe.current.has("KeyS")||qe.current.has("ArrowDown"))&&(St-=Wt[0]*rt,Nt-=Wt[1]*rt,fa-=Wt[2]*rt),(qe.current.has("KeyA")||qe.current.has("ArrowLeft"))&&(St-=pa[0]*rt,fa-=pa[2]*rt),(qe.current.has("KeyD")||qe.current.has("ArrowRight"))&&(St+=pa[0]*rt,fa+=pa[2]*rt),(qe.current.has("KeyE")||qe.current.has("Space"))&&(Nt+=dn[1]*rt),(qe.current.has("KeyQ")||qe.current.has("KeyC"))&&(Nt-=dn[1]*rt),(St!==0||Nt!==0||fa!==0)&&(S.current={...Re,camPosX:(Re.camPosX??0)+St,camPosY:(Re.camPosY??0)+Nt,camPosZ:(Re.camPosZ??0)+fa})}const Tr=Re.autoRotate?nt*Re.autoRotateSpeed*.12:0,Mr=Re.autoRotate?Math.sin(nt*.18)*.06:0;let dl=0,pn=0;if(!Y.current&&(Math.abs(I.current.x)>Ea||Math.abs(I.current.y)>Ea)){const vt=Re.zoom,zt=.0045*Math.max(.12,Math.min(1,vt/2.8)),aa=He;dl=I.current.x*aa*zt*.5,pn=I.current.y*aa*zt*.5,I.current.x*=Oa,I.current.y*=Oa,Math.abs(I.current.x)<Ea&&(I.current.x=0),Math.abs(I.current.y)<Ea&&(I.current.y=0)}const fn={...Re,rotX:Re.rotX+Tr+dl,rotY:Math.max(-1.52,Math.min(1.52,Re.rotY+Mr+pn))},Ye=q.current;if(Ye&&Ye.width>0&&Ye.height>0&&(L.current?L.current.render(nt,fn):V.current&&V.current.render(nt,fn)),ka.current&&Ye)try{const vt=Ye.toDataURL("image/png");(at=M.current)==null||at.call(M,vt)}catch(vt){console.error("Screenshot capture failed",vt)}const _t=le.current;if(_t.push(He),_t.length>72&&_t.shift(),ut-ue.current>250){ue.current=ut;const vt=_t.reduce((St,Nt)=>St+Nt,0)/_t.length,zt=He>0?Math.round(1e3/He):0,aa=vt>0?Math.round(1e3/vt):0,qa=[..._t].sort((St,Nt)=>Nt-St),Ua=Math.floor(qa.length*.05),na=qa[Ua]||He,Wt=na>0?Math.round(1e3/na):0,pa=L.current?L.current.adapterInfo:V.current?V.current.rendererInfo:"GPU Engine",dn=P==="webgpu"?"WebGPU (WGSL)":"WebGL2 (GLSL)",rt={fps:zt,avgFps:aa,frameTimeMs:parseFloat(He.toFixed(2)),onePercentLow:Wt,backend:dn,adapterName:pa,resolution:[(Ye==null?void 0:Ye.width)||0,(Ye==null?void 0:Ye.height)||0],drsScale:1,targetFps:Re.targetFps,interiorDistance:0};(Ke=m.current)==null||Ke.call(m,rt),Se(zt),Be(aa),tt(parseFloat(He.toFixed(2))),K(Wt),E([(Ye==null?void 0:Ye.width)||0,(Ye==null?void 0:Ye.height)||0])}}ke.current=requestAnimationFrame(xt)};return ke.current=requestAnimationFrame(xt),()=>{fe=!1,document.removeEventListener("visibilitychange",Ue),ke.current&&cancelAnimationFrame(ke.current)}},[P]),k.useEffect(()=>{const fe=Ue=>{var xt,ut,Re;((xt=Ue.target)==null?void 0:xt.tagName)!=="INPUT"&&(Ue.repeat||(qe.current.add(Ue.code),S.current.cameraMode!=="flyThrough"&&(Ue.key===" "||Ue.key==="ArrowRight"||Ue.key==="ArrowDown"||Ue.key==="PageDown"?(Ue.preventDefault(),(ut=G.current)==null||ut.call(G)):(Ue.key==="ArrowLeft"||Ue.key==="ArrowUp"||Ue.key==="PageUp")&&(Ue.preventDefault(),(Re=X.current)==null||Re.call(X)))))},Ge=Ue=>{qe.current.delete(Ue.code)};return window.addEventListener("keydown",fe),window.addEventListener("keyup",Ge),()=>{window.removeEventListener("keydown",fe),window.removeEventListener("keyup",Ge)}},[]),{activeEngineType:P,isCompiling:W,isEngineReady:re,backendLabel:H,adapterInfo:ye,fps:we,avgFps:et,frameTimeMs:Le,onePercentLow:Qe,resolution:N,canvasRef:q,keysPressedRef:qe,isDraggingRef:Y,velocityRef:I,lastMousePosRef:pe,lastInteractionReportTimeRef:lt,lastMoveTimeRef:ct,params:S.current}}const rh=({params:p,onParamsChange:s,onTelemetryUpdate:f,screenshotRequested:u,onScreenshotCaptured:v,forcedBackend:S="auto",onInteraction:x,onNextSpecimen:j,onPrevSpecimen:A,onEngineReady:y,scrollMode:U="feed"})=>{const O=k.useRef(null),B=typeof window<"u"&&(window!==window.top||/\bqoder\b/i.test(navigator.userAgent)||/\belectron\b/i.test(navigator.userAgent)),q=typeof window<"u"&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&window.innerWidth<1024),P=k.useRef(p);P.current=p;const J=k.useRef(null);k.useRef(0);const W=lh(O,{forcedBackend:S,isEmbeddedBrowser:B,isMobileDevice:q,paramsRef:P,onTelemetryUpdate:f,onEngineReady:y,onNextSpecimen:j,onPrevSpecimen:A,onInteraction:x,screenshotRequested:u,onScreenshotCaptured:v}),{canvasRef:F,isDraggingRef:re,velocityRef:z,lastMousePosRef:H,lastInteractionReportTimeRef:ve,lastMoveTimeRef:ye,activeEngineType:te,isCompiling:we}=W,Se=K=>{re.current=!0,H.current={x:K.clientX,y:K.clientY},z.current={x:0,y:0},K.target.setPointerCapture(K.pointerId)},et=K=>{if(!re.current)return;const N=K.clientX-H.current.x,E=K.clientY-H.current.y,L=performance.now(),V=Math.max(1,L-ye.current);ye.current=L,H.current={x:K.clientX,y:K.clientY};const ae=Math.hypot(N,E);L-ve.current>300&&(ve.current=L,x==null||x(0,ae));const m=P.current.zoom,M=.0045*Math.max(.12,Math.min(1,m/2.8));z.current={x:N/V,y:E/V},s(G=>({...G,rotX:G.rotX+N*M,rotY:Math.max(-1.52,Math.min(1.52,G.rotY+E*M))})),nf.recordInteraction("rotate",Math.hypot(N,E)/V)},Be=K=>{re.current=!1;try{K.target.releasePointerCapture(K.pointerId)}catch{}},Le=K=>{K.preventDefault();const N=Math.exp(Math.sign(K.deltaY)*Math.min(Math.abs(K.deltaY)*.0018,.28));x==null||x(Math.abs(K.deltaY)*.02,0),s(E=>({...E,zoom:Math.max(.02,Math.min(64,E.zoom*N))})),nf.recordInteraction("zoom",Math.log(N)*10)},tt=K=>{if(K.preventDefault(),K.touches.length===2){const N=K.touches[0],E=K.touches[1],L=Math.hypot(N.clientX-E.clientX,N.clientY-E.clientY);if(J.current!==null&&J.current>5){const V=J.current/Math.max(L,1),ae=Math.pow(V,.95);x==null||x(Math.abs(J.current-L)*.04,0),s(m=>({...m,zoom:Math.max(.02,Math.min(64,m.zoom*ae))}))}J.current=L}},Qe=K=>{K.preventDefault(),J.current=null};return l.jsxs("div",{ref:O,id:"fractal-canvas-container",className:"absolute inset-0 w-full h-full overflow-hidden bg-black select-none touch-none cursor-grab active:cursor-grabbing",children:[we&&l.jsx("div",{id:"gpu-pipeline-loading-overlay",className:"absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950/60 backdrop-blur-xs pointer-events-none transition-opacity duration-300",children:l.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-2xl animate-pulse",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),l.jsxs("span",{children:["Initializing GPU (",te==="webgpu"?"WebGPU WGSL":"WebGL2 GLSL",")..."]})]})}),l.jsx("canvas",{ref:F,id:"fractal-canvas",className:"w-full h-full block touch-none",onPointerDown:Se,onPointerMove:et,onPointerUp:Be,onPointerCancel:Be,onWheel:Le,onTouchStart:K=>K.preventDefault(),onTouchMove:tt,onTouchEnd:Qe},te)]})};/**
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
 */const ph=k.forwardRef(({color:p="currentColor",size:s=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:v="",children:S,iconNode:x,...j},A)=>k.createElement("svg",{ref:A,...uh,width:s,height:s,stroke:p,strokeWidth:u?Number(f)*24/Number(s):f,className:df("lucide",v),...!S&&!ch(j)&&{"aria-hidden":"true"},...j},[...x.map(([y,U])=>k.createElement(y,U)),...Array.isArray(S)?S:[S]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=(p,s)=>{const f=k.forwardRef(({className:u,...v},S)=>k.createElement(ph,{ref:S,iconNode:s,className:df(`lucide-${oh(lf(p))}`,`lucide-${p}`,u),...v}));return f.displayName=lf(p),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],pl=se("activity",fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],mf=se("atom",dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],xi=se("book-open",mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]],xh=se("bookmark-plus",hh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],gh=se("box",vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],bh=se("brain",yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],zh=se("camera",_h);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Nh=se("chart-column",Sh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hf=se("check",Dh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],jh=se("chevron-down",wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Th=se("chevron-left",Ah);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xf=se("chevron-right",Mh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],Rh=se("chevron-up",Ch);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ar=se("compass",kh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Qs=se("cpu",Oh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],vf=se("crosshair",Eh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]],Uh=se("droplet",qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],Bh=se("ellipsis",Fh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gf=se("eye",Lh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Hh=se("flame",Gh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Ph=se("grid-3x3",Yh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],jr=se("heart",Xh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]],Zh=se("infinity",Vh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Kh=se("info",Qh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],vi=se("layers",Jh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],$h=se("maximize",Wh);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=[["path",{d:"M12.586 12.586 19 19",key:"ea5xo7"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",key:"277e5u"}]],yf=se("mouse-pointer",Ih);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],t2=se("music",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bf=se("play",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],i2=se("radio",n2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]],r2=se("scan",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],s2=se("search",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],u2=se("share-2",c2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ks=se("shield-check",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],gi=se("sparkles",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],m2=se("trash-2",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],_f=se("user",h2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ec=se("volume-2",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],zf=se("volume-x",v2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],y2=se("wrench",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],fl=se("x",b2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],z2=se("zoom-in",_2),S2=({telemetry:p,targetFps:s,phiMultiplier:f})=>{const[u,v]=k.useState([]),[S,x]=k.useState(!1);k.useEffect(()=>{p.frameTimeMs>0&&v(y=>[...y,p.frameTimeMs].slice(-40))},[p.frameTimeMs]);const j=s>0?1e3/s:6.94;s===144||s===0&&p.fps>=140;const A=p.frameTimeMs<=j*1.05;return l.jsx("div",{id:"telemetry-hud",className:"absolute top-4 left-4 z-20 pointer-events-auto select-none hidden sm:block",children:l.jsxs("div",{className:"bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 rounded-xl p-3.5 shadow-2xl text-xs text-neutral-300 w-56 md:w-72 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2.5 pb-2 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"relative flex h-2.5 w-2.5",children:[l.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${p.fps>=120?"bg-emerald-400":"bg-amber-400"}`}),l.jsx("span",{className:`relative inline-flex rounded-full h-2.5 w-2.5 ${p.fps>=120?"bg-emerald-500":"bg-amber-500"}`})]}),l.jsx("div",{className:"flex items-center gap-1.5 font-semibold text-neutral-100 tracking-wide",children:l.jsx("span",{children:p.backend})})]}),l.jsx("button",{id:"toggle-telemetry-btn",onClick:()=>x(!S),className:"text-[10px] text-neutral-400 hover:text-neutral-200 px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 transition",children:S?"Expand":"Compact"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 mb-2.5",children:[l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"RATE"}),l.jsx("span",{className:`px-1 rounded text-[9px] font-mono font-medium ${p.fps>=135?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-neutral-800 text-neutral-400"}`,children:s>0?`${s}Hz`:"Uncapped"})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:"text-xl font-bold font-mono tracking-tight text-white",children:p.fps}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"FPS"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"1% Low:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[p.onePercentLow," FPS"]})]})]}),l.jsxs("div",{className:"bg-neutral-900/90 rounded-lg p-2 border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between text-[10px] text-neutral-400 mb-0.5",children:[l.jsx("span",{children:"FRAME TIME"}),l.jsx("span",{className:"font-mono text-[9px] text-neutral-400",children:s>=240?"Max 250 FPS":`${s}Hz = ${(1e3/s).toFixed(2)}ms`})]}),l.jsxs("div",{className:"flex items-baseline gap-1",children:[l.jsx("span",{className:`text-xl font-bold font-mono tracking-tight ${A?"text-emerald-400":"text-amber-400"}`,children:p.frameTimeMs}),l.jsx("span",{className:"text-[10px] text-neutral-400",children:"ms"})]}),l.jsxs("div",{className:"text-[10px] text-neutral-400 mt-0.5 flex justify-between",children:[l.jsx("span",{children:"Avg:"}),l.jsxs("span",{className:"font-mono text-neutral-300",children:[(1e3/(p.avgFps||1)).toFixed(1)," ms"]})]})]})]}),!S&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"mb-2.5",children:[l.jsxs("div",{className:"flex justify-between text-[10px] text-neutral-400 mb-1",children:[l.jsxs("span",{children:[s," FPS Frame Pacing"]}),l.jsxs("span",{className:"font-mono text-[9px] text-amber-400/90",children:["Target: ",j.toFixed(2)," ms"]})]}),l.jsx("div",{className:"h-8 bg-neutral-900/90 rounded border border-neutral-800/80 flex items-end gap-[2px] p-1 overflow-hidden",children:u.map((y,U)=>{const O=Math.min(Math.max(y/20*100,8),100),B=y<=j*1.1;return l.jsx("div",{className:`flex-1 rounded-xs transition-all duration-75 ${B?"bg-amber-400/80":"bg-red-400/80"}`,style:{height:`${O}%`},title:`${y} ms`},U)})})]}),l.jsxs("div",{className:"bg-neutral-900/60 rounded-lg p-2 border border-neutral-800 space-y-1 text-[11px]",children:[l.jsxs("div",{className:"flex items-center justify-between text-neutral-300",children:[l.jsxs("span",{className:"flex items-center gap-1 text-amber-300/90",children:[l.jsx(gi,{className:"w-3 h-3 text-amber-400"}),"Золотое сечение (φ):"]}),l.jsx("span",{className:"font-mono font-medium text-amber-200",children:f.toFixed(6)})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400",children:[l.jsx("span",{children:"Golden Angle (ψ):"}),l.jsx("span",{className:"font-mono text-neutral-300",children:"137.507764° (2.3999 rad)"})]}),l.jsxs("div",{className:"flex items-center justify-between text-neutral-400 pt-1 border-t border-neutral-800/60",children:[l.jsx("span",{className:"truncate max-w-[140px]",title:p.adapterName,children:p.adapterName}),l.jsxs("span",{className:"font-mono text-[10px] text-neutral-400",children:[p.resolution[0],"×",p.resolution[1]]})]})]})]})]})})},N2={smoothMorph:"Топологический морфинг (Continuous Morph)",smoothUnion:"Гладкое геометрическое объединение (smin)",smoothIntersection:"Гладкое взаимное проникновение (smax)",smoothCarve:"Кавернозное вырезание объемов (ssub)",domainWarp:"Искривление координат (Domain Warp)",quantumResonance:"Спектральная микро-модуляция (Resonance)",fractalLattice:"Клеточная решетка ТПМС (Lattice)",goldenSpiralFold:"Конформное спиральное скручивание (Spiral Fold)"},Sf={smoothMorph:"⇌_φ",smoothUnion:"⊕_φ",smoothIntersection:"∩_φ",smoothCarve:"⊖_φ",domainWarp:"⮁_φ",quantumResonance:"⊗_φ",fractalLattice:"⊞_φ",goldenSpiralFold:"🌀_φ"},D2=["smoothMorph","smoothUnion","smoothIntersection","smoothCarve","domainWarp","quantumResonance","fractalLattice","goldenSpiralFold"],rf={phyllotaxis:{partners:["apollonian","fibonacciSnowflake","pythagorasTree3D","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},mandelbulb:{partners:["mandelbox","quaternionJulia","menger","apollonian","gyroid"],ops:["smoothUnion","smoothMorph","fractalLattice","domainWarp"]},quaternionJulia:{partners:["mandelbulb","quaternionMandelbrot","burningShip3D","apollonian"],ops:["smoothMorph","smoothUnion","domainWarp"]},apollonian:{partners:["phyllotaxis","mandelbulb","kleinianLimit","antoineNecklace"],ops:["smoothUnion","smoothMorph","domainWarp"]},spiralTunnel:{partners:["eulerTotientSpiral","cliffordKlein","mandelbulb","gyroid"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},mandelbox:{partners:["mandelbulb","jerusalemCube","icosahedral","sierpinskiOcta","gyroid"],ops:["smoothMorph","smoothUnion","smoothCarve","domainWarp"]},icosahedral:{partners:["poincareSphere","sierpinskiOcta","quasicrystal","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},menger:{partners:["jerusalemCube","mandelbulb","mandelbox","sierpinskiOcta","gyroid"],ops:["smoothUnion","smoothMorph","smoothCarve"]},gyroid:{partners:["neoviusMinimal","quasicrystal","mandelbox","calabiYau","hopfFibration"],ops:["smoothMorph","smoothUnion","fractalLattice","smoothCarve"]},primeSpiral:{partners:["eulerTotientSpiral","riemannZeta","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","quantumResonance"]},quasicrystal:{partners:["icosahedral","gyroid","poincareSphere","hofstadterButterfly"],ops:["smoothUnion","smoothMorph","fractalLattice"]},hopfFibration:{partners:["cliffordTorus4D","cliffordKlein","poincareSphere","antoineNecklace"],ops:["smoothMorph","smoothUnion","domainWarp"]},calabiYau:{partners:["cliffordTorus4D","riemannZeta","hopfFibration","cliffordKlein","gyroid"],ops:["smoothMorph","smoothUnion","domainWarp"]},riemannZeta:{partners:["calabiYau","newtonBasins","primeSpiral","hofstadterButterfly"],ops:["smoothMorph","smoothUnion","quantumResonance"]},sierpinskiOcta:{partners:["icosahedral","fibonacciSnowflake","menger","jerusalemCube"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordKlein:{partners:["cliffordTorus4D","hopfFibration","spiralTunnel","antoineNecklace"],ops:["smoothMorph","smoothUnion","goldenSpiralFold"]},poincareSphere:{partners:["hopfFibration","icosahedral","cliffordTorus4D","calabiYau"],ops:["smoothMorph","smoothUnion","domainWarp"]},gaussianPrimes:{partners:["primeSpiral","neoviusMinimal","eulerTotientSpiral","quasicrystal"],ops:["smoothUnion","smoothMorph","fractalLattice"]},neoviusMinimal:{partners:["gyroid","gaussianPrimes","quasicrystal","jerusalemCube"],ops:["smoothMorph","smoothUnion","fractalLattice"]},eulerTotientSpiral:{partners:["primeSpiral","spiralTunnel","gaussianPrimes","phyllotaxis"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},cliffordTorus4D:{partners:["hopfFibration","calabiYau","cliffordKlein","poincareSphere"],ops:["smoothMorph","smoothUnion","domainWarp"]},kleinianLimit:{partners:["apollonian","poincareSphere","quasicrystal","primeSpiral"],ops:["smoothUnion","smoothMorph","domainWarp"]},fibonacciSnowflake:{partners:["phyllotaxis","icosahedral","apollonian","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},quaternionMandelbrot:{partners:["quaternionJulia","mandelbulb","burningShip3D","newtonBasins"],ops:["smoothMorph","smoothUnion","domainWarp"]},hilbertCurve3D:{partners:["menger","dragonCurveIFS","jerusalemCube","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},dragonCurveIFS:{partners:["pythagorasTree3D","hilbertCurve3D","fibonacciSnowflake","dlaCluster"],ops:["smoothUnion","smoothMorph","domainWarp"]},pythagorasTree3D:{partners:["dragonCurveIFS","phyllotaxis","dlaCluster","fibonacciSnowflake"],ops:["smoothUnion","smoothMorph","domainWarp"]},burningShip3D:{partners:["mandelbulb","quaternionMandelbrot","menger","newtonBasins"],ops:["smoothUnion","smoothMorph","domainWarp"]},newtonBasins:{partners:["quaternionJulia","riemannZeta","mandelbulb","apollonian"],ops:["smoothMorph","smoothUnion","quantumResonance"]},jerusalemCube:{partners:["menger","mandelbox","sierpinskiOcta","neoviusMinimal"],ops:["smoothUnion","smoothMorph","smoothCarve"]},lorenzAttractor:{partners:["hofstadterButterfly","dlaCluster","cliffordKlein","primeSpiral"],ops:["smoothMorph","smoothUnion","domainWarp"]},hofstadterButterfly:{partners:["lorenzAttractor","riemannZeta","quasicrystal","newtonBasins"],ops:["smoothMorph","smoothUnion","quantumResonance"]},antoineNecklace:{partners:["hopfFibration","cliffordTorus4D","apollonian","kleinianLimit"],ops:["smoothUnion","smoothMorph","domainWarp"]},dlaCluster:{partners:["lorenzAttractor","pythagorasTree3D","primeSpiral","dragonCurveIFS"],ops:["smoothUnion","smoothMorph","domainWarp"]},rosslerHyperchaos:{partners:["cliffordAttractor","lorenzAttractor","mandelbulb","belousovWaves"],ops:["smoothUnion","smoothMorph","domainWarp"]},cliffordAttractor:{partners:["rosslerHyperchaos","cliffordKlein","hopfFibration","quasicrystal"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},abrikosovLattice:{partners:["gyroid","neoviusMinimal","calabiYau","spinFoamNetwork"],ops:["smoothUnion","smoothMorph","fractalLattice"]},beltramiPseudosphere:{partners:["poincareSphere","apollonian","mandelbulb","spiralTunnel"],ops:["smoothUnion","smoothMorph","goldenSpiralFold"]},spinFoamNetwork:{partners:["abrikosovLattice","calabiYau","quasicrystal","dlaCluster"],ops:["smoothUnion","smoothMorph","quantumResonance"]},ramanujanTau:{partners:["riemannZeta","primeSpiral","eulerTotientSpiral","gaussianPrimes"],ops:["smoothUnion","smoothMorph","quantumResonance"]},belousovWaves:{partners:["rosslerHyperchaos","phyllotaxis","spiralTunnel","abrikosovLattice"],ops:["smoothUnion","smoothMorph","domainWarp"]},henonAttractor:{partners:["lorenzAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},aizawaAttractor:{partners:["henonAttractor","thomasAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},thomasAttractor:{partners:["halvorsenAttractor","aizawaAttractor","cliffordAttractor"],ops:["smoothUnion","smoothMorph"]},halvorsenAttractor:{partners:["thomasAttractor","lorenzAttractor","henonAttractor"],ops:["smoothUnion","domainWarp"]},juliaSet3D:{partners:["mandelbulb","quaternionJulia","novaFractal","multibrot3"],ops:["smoothUnion","smoothMorph","smoothCarve"]},multibrot3:{partners:["juliaSet3D","mandelbulb","quaternionMandelbrot"],ops:["smoothUnion","smoothMorph"]},tetrix:{partners:["sierpinskiOcta","menger","jerusalemCube"],ops:["smoothUnion","fractalLattice"]},gosperCurve:{partners:["hilbertCurve3D","dragonCurveIFS","phyllotaxis"],ops:["smoothUnion","domainWarp"]},lSystemPlant:{partners:["phyllotaxis","pythagorasTree3D","fibonacciSnowflake"],ops:["smoothUnion","goldenSpiralFold"]},schwarzP:{partners:["gyroid","neoviusMinimal","schwarzD"],ops:["smoothUnion","fractalLattice","domainWarp"]},schwarzD:{partners:["schwarzP","gyroid","neoviusMinimal"],ops:["smoothUnion","fractalLattice"]},apollonianGasket:{partners:["apollonian","spherePacking","fibonacciSnowflake"],ops:["smoothUnion","smoothCarve"]},barnsleyFern3D:{partners:["lSystemPlant","tetrix","phyllotaxis"],ops:["smoothUnion","domainWarp"]},kleinQuartic:{partners:["kleinianLimit","poincareSphere","cliffordKlein"],ops:["smoothUnion","quantumResonance"]},spherePacking:{partners:["apollonianGasket","apollonian","dlaCluster"],ops:["smoothUnion","fractalLattice"]},novaFractal:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","smoothMorph"]},goldenKnot:{partners:["hopfFibration","cliffordTorus4D","cliffordKlein"],ops:["smoothUnion","goldenSpiralFold"]},sphericalHarmonics:{partners:["hopfFibration","poincareSphere","riemannZeta"],ops:["smoothUnion","quantumResonance"]},reactionDiffusion:{partners:["belousovWaves","dlaCluster","gyroid"],ops:["smoothUnion","domainWarp","fractalLattice"]},fractalCross:{partners:["menger","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},sierpinskiCarpet:{partners:["menger","fractalCross","cantorDust"],ops:["smoothUnion","fractalLattice"]},tricorn:{partners:["mandelbulb","juliaSet3D","novaFractal"],ops:["smoothUnion","domainWarp"]},chuaCircuit:{partners:["lorenzAttractor","rosslerAttractor","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},standardMap:{partners:["henonAttractor","ikedaMap","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},ikedaMap:{partners:["standardMap","henonAttractor","cliffordAttractor"],ops:["smoothUnion","domainWarp"]},kochSnowflake3D:{partners:["gosperCurve","sierpinskiCarpet","tetrix"],ops:["smoothUnion","fractalLattice"]},cantorDust:{partners:["sierpinskiCarpet","apollonianGasket","spherePacking"],ops:["smoothUnion","fractalLattice"]},phoenixFractal:{partners:["juliaSet3D","mandelbulb","novaFractal"],ops:["smoothUnion","domainWarp"]},fatouSet:{partners:["juliaSet3D","newtonBasins","mandelbulb"],ops:["smoothUnion","domainWarp"]},e8Lattice:{partners:["quasicrystal","apollonian","poincareSphere"],ops:["smoothUnion","fractalLattice"]},chladniFigures:{partners:["sphericalHarmonics","gyroid","schwarzP"],ops:["smoothUnion","domainWarp"]},fitzHugh:{partners:["lorenzAttractor","rosslerAttractor","belousovWaves"],ops:["smoothUnion","domainWarp"]},rosslerAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerHyperchaos"],ops:["smoothUnion","domainWarp"]},duffingAttractor:{partners:["lorenzAttractor","chuaCircuit","rosslerAttractor"],ops:["smoothUnion","domainWarp"]},logisticBifurcation:{partners:["henonAttractor","mandelbulb","hofstadterButterfly"],ops:["smoothUnion","domainWarp"]},fractalSpire:{partners:["mandelbulb","spiralTunnel","quaternionJulia"],ops:["smoothUnion","domainWarp","goldenSpiralFold"]},deJongAttractor:{partners:["pickoverAttractor","svenssonAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]},pickoverAttractor:{partners:["deJongAttractor","bedheadAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},vicsekFractal:{partners:["sierpinskiCarpet","cantorDust","menger"],ops:["smoothUnion","smoothCarve","fractalLattice"]},mandelbar:{partners:["mandelbulb","tricorn","burningShip3D"],ops:["smoothUnion","smoothMorph","domainWarp"]},weierstrass3D:{partners:["gyroid","neoviusMinimal","schwarzP"],ops:["smoothMorph","smoothUnion","fractalLattice"]},popcornFunction:{partners:["hopfFibration","cliffordTorus4D","spiralTunnel"],ops:["domainWarp","smoothMorph"]},bedheadAttractor:{partners:["lorenzAttractor","rosslerAttractor","fourSpotAttractor"],ops:["smoothMorph","smoothUnion"]},fourSpotAttractor:{partners:["bedheadAttractor","halvorsenAttractor","thomasAttractor"],ops:["smoothMorph","smoothUnion"]},svenssonAttractor:{partners:["deJongAttractor","pickoverAttractor","cliffordAttractor"],ops:["smoothMorph","smoothUnion"]}},w2=1.61803398875,Ws=137.507764;function wr(p,s,f){p=(p%360+360)%360,s=Math.max(0,Math.min(1,s)),f=Math.max(0,Math.min(1,f));const u=(1-Math.abs(2*f-1))*s,v=u*(1-Math.abs(p/60%2-1)),S=f-u/2;let x=0,j=0,A=0;return p<60?(x=u,j=v,A=0):p<120?(x=v,j=u,A=0):p<180?(x=0,j=u,A=v):p<240?(x=0,j=v,A=u):p<300?(x=v,j=0,A=u):(x=u,j=0,A=v),[x+S,j+S,A+S]}function j2(p,s){const f=p,u=(p+Ws)%360,v=(p+Ws*2)%360;return{id:`golden-gen-${Math.floor(p)}`,name:`Гармоника φ (${s})`,primary:wr(f,.85,.45),secondary:wr(u,.8,.55),accent:wr(v,.95,.65),ambient:wr(f,.6,.12)}}const cn=["phyllotaxis","mandelbulb","quaternionJulia","apollonian","spiralTunnel","mandelbox","icosahedral","menger","gyroid","primeSpiral","quasicrystal","hopfFibration","calabiYau","riemannZeta","sierpinskiOcta","cliffordKlein","poincareSphere","gaussianPrimes","neoviusMinimal","eulerTotientSpiral","cliffordTorus4D","kleinianLimit","fibonacciSnowflake","quaternionMandelbrot","hilbertCurve3D","dragonCurveIFS","pythagorasTree3D","burningShip3D","newtonBasins","jerusalemCube","lorenzAttractor","hofstadterButterfly","antoineNecklace","dlaCluster","rosslerHyperchaos","cliffordAttractor","abrikosovLattice","beltramiPseudosphere","spinFoamNetwork","ramanujanTau","belousovWaves","henonAttractor","aizawaAttractor","thomasAttractor","halvorsenAttractor","juliaSet3D","multibrot3","tetrix","gosperCurve","lSystemPlant","schwarzP","schwarzD","apollonianGasket","barnsleyFern3D","kleinQuartic","spherePacking","novaFractal","goldenKnot","sphericalHarmonics","reactionDiffusion","fractalCross","sierpinskiCarpet","tricorn","chuaCircuit","standardMap","ikedaMap","kochSnowflake3D","cantorDust","phoenixFractal","fatouSet","e8Lattice","chladniFigures","fitzHugh","rosslerAttractor","duffingAttractor","logisticBifurcation","fractalSpire","deJongAttractor","pickoverAttractor","vicsekFractal","mandelbar","weierstrass3D","popcornFunction","bedheadAttractor","fourSpotAttractor","svenssonAttractor"],hi={phyllotaxis:"Филлотаксис Фибоначчи",mandelbulb:"Золотой Мандельбульб 3D",quaternionJulia:"Кватернион 4D Жюлиа",apollonian:"Инверсии Аполлония φ",spiralTunnel:"Логарифмический Туннель",mandelbox:"Куб Мандельбокса 3D",icosahedral:"Золотой Икосаэдр IFS",menger:"Губка Менгера-Иерусалима",gyroid:"Био-Гироид Поверхность",primeSpiral:"Спираль Простых Чисел (Улам-Закс)",quasicrystal:"Квазикристалл Пенроуза-Шехтмана",hopfFibration:"Расслоение Хопфа S³→S²",calabiYau:"Многообразие Калаби-Яу 5-Fold",riemannZeta:"Квантовый Резонатор Дзета-Римана",sierpinskiOcta:"Октаэдрическая Звезда Серпинского",cliffordKlein:"Золотой 4D Узел Клиффорда-Клейна",poincareSphere:"Сфера Пуанкаре Додекаэдра (3-Manifold)",gaussianPrimes:"Решетка Простых Гаусса Z[i]",neoviusMinimal:"Поверхность Неовиуса-Шёна (TPMS)",eulerTotientSpiral:"Спираль Функция Эйлера φ(n) & π",cliffordTorus4D:"4D Тор Клиффорда в S³",kleinianLimit:"Фрактал Группы Клейна (Мёбиус)",fibonacciSnowflake:"Снежинка Фибоначчи 3D IFS",quaternionMandelbrot:"4D Мандельброт Золотых Сечений",hilbertCurve3D:"3D Пространственная Кривая Гильберта (L-System)",dragonCurveIFS:"Золотой Дракон Хартера-Хейтуэя IFS",pythagorasTree3D:"3D Дерево Пифагора с Золотым Ветвлением",burningShip3D:"3D Пылающий Корабль (Burning Ship)",newtonBasins:"3D Бассейны Корней Ньютона-Рафсона",jerusalemCube:"3D Иерусалимский Куб Золотого Сечения",lorenzAttractor:"3D Странный Аттрактор Лоренца (Хаос)",hofstadterButterfly:"3D Квантовая Бабочка Хофштадтера",antoineNecklace:"3D Ожерелье Антуана (Зацепленные Торы)",dlaCluster:"3D Дендритный DLA-Кластер (Диффузия)",rosslerHyperchaos:"4D Гиперхаотический Аттрактор Рёсслера",cliffordAttractor:"4D Аттрактор Клиффорда-Пиковера",abrikosovLattice:"Квантовая Вихревая Решетка Абрикосова",beltramiPseudosphere:"Псевдосфера Бельтрами (Лобачевский)",spinFoamNetwork:"Спиновая Пена & Сеть Пенроуза (LQG)",ramanujanTau:"Модулярный Резонатор Рамануджана Δ(τ)",belousovWaves:"Спиральные Волны Белоусова-Жаботинского",henonAttractor:"Аттрактор Энона 3D",aizawaAttractor:"Тороидальный Аттрактор Аизавы",thomasAttractor:"Циклический Аттрактор Томаса (C₃)",halvorsenAttractor:"Аттрактор Хальворсена (3-кратный)",juliaSet3D:"Множество Жюлиа 3D (c = −0.7 + 0.27i)",multibrot3:"Мультиброт z³+c (кубический)",tetrix:"Тетрикс (Тетраэдр Серпинского)",gosperCurve:"Кривая Госпера (Остров)",lSystemPlant:"L-Система: Фрактальное Растение",schwarzP:"Поверхность Шварца P (TPMS)",schwarzD:"Поверхность Шварца D (Diamond)",apollonianGasket:"Прокладка Аполлония (Упаковка)",barnsleyFern3D:"Папоротник Барнсли 3D (IFS)",kleinQuartic:"Квартика Клейна (Род 3, PSL(2,7))",spherePacking:"Фрактальная Упаковка Сфер (FCC)",novaFractal:"Нова-Фрактал (Ньютон + Мандельброт)",goldenKnot:"Золотой Узел (φ-Торический)",sphericalHarmonics:"Сферические Гармоники (Квантовые Орбитали)",reactionDiffusion:"Реакция-Диффузия (Тьюринг, Gray-Scott)",fractalCross:"Фрактальный Крест (3D IFS)",sierpinskiCarpet:"Ковёр Серпинского (dim ≈ 1.893)",tricorn:"Трикотн (сопряжённый Мандельброт)",chuaCircuit:"Схема Чуа (двойной скролл)",standardMap:"Стандартное отображение Чирикова-Тейлора",ikedaMap:"Отображение Икеды",kochSnowflake3D:"Снежинка Коха 3D",cantorDust:"Пыль Кантора 3D",phoenixFractal:"Фрактал Феникс (память z_{n-1})",fatouSet:"Множество Фату (граница бассейна z²+c)",e8Lattice:"Решётка E8 (проекция исключ. группы Ли)",chladniFigures:"Фигуры Хладни (моды колебаний)",fitzHugh:"ФицХью-Нагумо (нейродинамика)",rosslerAttractor:"Аттрактор Рёсслера",duffingAttractor:"Аттрактор Даффинга",logisticBifurcation:"Бифуркация логистического отображения (Фейгенбаум)",fractalSpire:"Фрактальный шпиль (экспоненциальная спиральная башня)",deJongAttractor:"Странный аттрактор де Йонга",pickoverAttractor:"Странный аттрактор Пиковера",vicsekFractal:"Фрактал Вицека (3D крест IFS)",mandelbar:"Мандельбар (сопряжённое множество Мандельброта)",weierstrass3D:"Функция Вейерштрасса 3D (нигде не дифференцируема)",popcornFunction:"Функция попкорна (Celldoor)",bedheadAttractor:"3D хаотический аттрактор Bedhead",fourSpotAttractor:"4-крылый хаотический аттрактор FourSpot",svenssonAttractor:"Странный аттрактор Свенссона"},A2={phyllotaxis:3.2,mandelbulb:2.8,quaternionJulia:2.6,apollonian:3.2,spiralTunnel:2.2,mandelbox:3,icosahedral:3.4,menger:2.7,gyroid:2.4,primeSpiral:3,quasicrystal:3.2,hopfFibration:2.8,calabiYau:2.6,riemannZeta:2.9,sierpinskiOcta:3.1,cliffordKlein:2.8,poincareSphere:3,gaussianPrimes:2.9,neoviusMinimal:2.5,eulerTotientSpiral:3,cliffordTorus4D:2.8,kleinianLimit:3.2,fibonacciSnowflake:3.1,quaternionMandelbrot:2.7,hilbertCurve3D:3,dragonCurveIFS:3.2,pythagorasTree3D:3.4,burningShip3D:2.8,newtonBasins:2.6,jerusalemCube:2.9,lorenzAttractor:3,hofstadterButterfly:2.8,antoineNecklace:3,dlaCluster:3,rosslerHyperchaos:2.8,cliffordAttractor:3,abrikosovLattice:3.2,beltramiPseudosphere:2.9,spinFoamNetwork:3.1,ramanujanTau:2.9,belousovWaves:3,henonAttractor:2.5,aizawaAttractor:2.8,thomasAttractor:2.2,halvorsenAttractor:2.5,juliaSet3D:2.8,multibrot3:2.5,tetrix:2,gosperCurve:2.2,lSystemPlant:2.5,schwarzP:2,schwarzD:2,apollonianGasket:2.5,barnsleyFern3D:2.8,kleinQuartic:2.5,spherePacking:2.2,novaFractal:2.5,goldenKnot:2.5,sphericalHarmonics:2.5,reactionDiffusion:2.2,fractalCross:2,sierpinskiCarpet:2,tricorn:2.3,chuaCircuit:2.5,standardMap:2.5,ikedaMap:2.3,kochSnowflake3D:2.2,cantorDust:2,phoenixFractal:2.3,fatouSet:2.5,e8Lattice:2.2,chladniFigures:1.8,fitzHugh:2.3,rosslerAttractor:2.5,duffingAttractor:2.3,logisticBifurcation:2.3,fractalSpire:1.8,deJongAttractor:2.5,pickoverAttractor:2.5,vicsekFractal:1.6,mandelbar:1.8,weierstrass3D:1.5,popcornFunction:2,bedheadAttractor:2.5,fourSpotAttractor:2.5,svenssonAttractor:2.5},Js="golden_ratio_taste_profile_v2",T2={geometry:"Топологическая Геометрия & Спирали φ",complex:"Множества Мандельброта & Жюлиа 4D",minimal:"TPMS Поверхности Нулевой Кривизны",primes:"Теория Чисел & Квантовый Хаос",attractors:"Динамические Системы & Аттракторы"};function M2(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":case"spinFoamNetwork":case"beltramiPseudosphere":case"vicsekFractal":return"geometry";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":case"fractalSpire":case"mandelbar":case"popcornFunction":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":case"abrikosovLattice":case"weierstrass3D":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":case"ramanujanTau":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":case"rosslerHyperchaos":case"cliffordAttractor":case"belousovWaves":default:return"attractors"}}class C2{constructor(){this.history=[],this.currentSpecimenIndex=0,this.currentGeneration=1,this.saveDebounceTimer=null,this.recentTypes=[],this.RECENT_WINDOW=8,this.taste=this.loadTasteProfile()}loadTasteProfile(){try{const f=localStorage.getItem(Js);if(f){const u=JSON.parse(f);return cn.forEach(v=>{u.typeAffinities&&u.typeAffinities[v]===void 0&&(u.typeAffinities[v]=1)}),u}}catch{}const s={};return cn.forEach(f=>{s[f]=1}),{typeAffinities:s,preferredHue:42,hueAffinityRange:60,preferredIterations:20,preferredMorphSpeed:.45,preferredGlow:1,totalSpecimensExplored:0,highestResonanceScore:45}}saveTasteProfile(s=!1){if(s){this.saveDebounceTimer&&(clearTimeout(this.saveDebounceTimer),this.saveDebounceTimer=null);try{localStorage.setItem(Js,JSON.stringify(this.taste))}catch{}return}this.saveDebounceTimer||(this.saveDebounceTimer=setTimeout(()=>{this.saveDebounceTimer=null;try{localStorage.setItem(Js,JSON.stringify(this.taste))}catch{}},2500))}getTasteProfile(){return{...this.taste}}breedNextSpecimen(s){var Qe;this.currentGeneration++,this.taste.totalSpecimensExplored++;let f=s;if(!f){const K=cn,N=K.map(V=>{const ae=Math.max(.2,this.taste.typeAffinities[V]||1),m=this.recentTypes.includes(V)?.05:1,M=this.currentGeneration<20?1.5:1;return ae*m*M}),E=N.reduce((V,ae)=>V+ae,0);let L=Math.random()*E;for(let V=0;V<K.length;V++){if(L<=N[V]){f=K[V];break}L-=N[V]}f||(f=K[Math.floor(Math.random()*K.length)]),this.recentTypes.push(f),this.recentTypes.length>this.RECENT_WINDOW&&this.recentTypes.shift()}const u=Math.random()<.5;let v=this.taste.preferredHue;if(u){const K=Math.random()<.5?1:2;v=(v+Ws*K+(Math.random()*30-15))%360}else v=Math.random()*360%360;let S;if(Math.random()<.65){const K=this.history.length>0?(Qe=this.history[this.history.length-1].palette)==null?void 0:Qe.id:"";let N=Ca.filter(E=>E.id!==K);N.length===0&&(N=Ca),S=N[Math.floor(Math.random()*N.length)]}else S=j2(v,`Ген #${this.currentGeneration}`);const j=(Math.random()-.5)*.08,A=parseFloat((w2+j).toFixed(5)),y=Math.round(this.taste.preferredIterations+(Math.random()*6-3)),U=Math.max(12,Math.min(32,y)),O=Math.max(.15,Math.min(1.2,this.taste.preferredMorphSpeed+(Math.random()*.2-.1))),B=parseFloat(O.toFixed(2)),q=Math.max(.4,Math.min(2.2,this.taste.preferredGlow+(Math.random()*.4-.2))),P=parseFloat(q.toFixed(2)),J=A2[f]*(.95+Math.random()*.1),W=Math.random()<.72;let F=f,re=f,z=0,H=0,ve="smoothUnion",ye=1,te=.32,we=.22,Se=`${hi[f]} • φ-${this.currentGeneration}`;if(W){const K=rf[f]||{partners:cn.filter(V=>V!==f),ops:["smoothUnion","smoothMorph","domainWarp"]};F=K.partners[Math.floor(Math.random()*K.partners.length)],ve=K.ops[Math.floor(Math.random()*K.ops.length)],z=parseFloat((.22+Math.random()*.26).toFixed(3)),te=parseFloat((.24+Math.random()*.26).toFixed(3)),we=parseFloat((.15+Math.random()*.25).toFixed(3)),ye=1;const N=Sf[ve],E=hi[f].split(" ")[0],L=hi[F].split(" ")[0];if(Se=`${E} ${N} ${L} • φ-${this.currentGeneration}`,Math.random()<.35){const ae=(rf[F]||{partners:cn.filter(m=>m!==f&&m!==F)}).partners.filter(m=>m!==f&&m!==F);if(ae.length>0){re=ae[Math.floor(Math.random()*ae.length)],H=parseFloat((.08+Math.random()*.18).toFixed(3));const m=hi[re].split(" ")[0];Se=`${E} ${N} ${L} ⊕ ${m} • φ-${this.currentGeneration}`}}}const et=parseFloat((.7+Math.random()*1.5).toFixed(3)),Be=parseFloat((.35+Math.random()*1.05).toFixed(3)),tt={id:`specimen-${Date.now()}-${Math.random().toString(36).substring(2,7)}`,seed:Math.floor(Math.random()*1e6),generation:this.currentGeneration,name:Se,type:f,hybridType:F,tertiaryType:re,compositeOp:ve,hybridBlend:z,tertiaryBlend:H,smoothK:te,warpStrength:we,octaveLayers:ye,boxFold:et,sphereFold:Be,interiorCut:0,palette:S,iterations:U,phiMultiplier:A,morphSpeed:B,glowIntensity:P,zoom:J,affinityScore:Math.round(25+Math.random()*15),dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};return this.history.push(tt),this.history.length>40&&this.history.shift(),this.currentSpecimenIndex=this.history.length-1,tt}registerEngagement(s,f,u,v){v.dwellTimeSeconds+=s,Math.abs(f)>.05&&v.zoomInteractions++,u>.05&&v.orbitInteractions++;const S=Math.min(35,v.dwellTimeSeconds/90*35),x=Math.min(18,Math.log1p(v.zoomInteractions)*3.2),j=Math.min(18,Math.log1p(v.orbitInteractions)*2.8),y=Math.round(Math.min(96,25+S+x+j));if(v.affinityScore=Math.max(v.affinityScore,y),v.dwellTimeSeconds>10&&v.affinityScore>50){const U=this.taste.typeAffinities[v.type]||1;if(this.taste.typeAffinities[v.type]=Math.min(4,U+.005),v.hybridType&&v.hybridBlend>.1){const F=this.taste.typeAffinities[v.hybridType]||1;this.taste.typeAffinities[v.hybridType]=Math.min(4,F+.003)}this.taste.preferredMorphSpeed=this.taste.preferredMorphSpeed*.99+v.morphSpeed*.01,this.taste.preferredGlow=this.taste.preferredGlow*.99+v.glowIntensity*.01,this.taste.preferredIterations=Math.round(this.taste.preferredIterations*.99+v.iterations*.01);const[O,B,q]=v.palette.primary,P=Math.max(O,B,q),J=Math.min(O,B,q),W=P-J;if(W>.05){let F=0;P===O?F=60*((B-q)/W%6):P===B?F=60*((q-O)/W+2):F=60*((O-B)/W+4),F<0&&(F+=360),this.taste.preferredHue=(this.taste.preferredHue*.97+F*.03)%360}v.affinityScore>this.taste.highestResonanceScore&&(this.taste.highestResonanceScore=v.affinityScore),this.saveTasteProfile()}return v.affinityScore}boostAffinity(s){s.affinityScore=95,this.taste.typeAffinities[s.type]=Math.min(4.5,(this.taste.typeAffinities[s.type]||1)+.35),s.hybridType&&(this.taste.typeAffinities[s.hybridType]=Math.min(4.5,(this.taste.typeAffinities[s.hybridType]||1)+.2)),this.taste.highestResonanceScore=Math.max(this.taste.highestResonanceScore,95),this.saveTasteProfile()}stepHistory(s){return s===-1?this.currentSpecimenIndex>0?(this.currentSpecimenIndex--,this.history[this.currentSpecimenIndex]):this.history[0]:this.currentSpecimenIndex<this.history.length-1?(this.currentSpecimenIndex++,this.history[this.currentSpecimenIndex]):this.breedNextSpecimen()}getHistory(){return this.history}getCurrentIndex(){return this.currentSpecimenIndex}getArchetypeBreakdown(){const s={geometry:0,complex:0,minimal:0,primes:0,attractors:0},f={geometry:0,complex:0,minimal:0,primes:0,attractors:0};cn.forEach(x=>{const j=M2(x),A=this.taste.typeAffinities[x]||1;s[j]+=A,f[j]++});const v=["geometry","complex","minimal","primes","attractors"].map(x=>({archetype:x,label:T2[x],avg:f[x]>0?s[x]/f[x]:1})),S=v.reduce((x,j)=>x+j.avg,0);return v.map(x=>({archetype:x.archetype,label:x.label,percentage:Math.round(x.avg/Math.max(1e-4,S)*100),score:Math.min(100,Math.round(x.avg*25))}))}suggestRenderStyle(){const s=["solid","xray","topo","hologram","iridescent","quantum","gemstone"],f=Math.random();if(f<.4)return"solid";const u=Math.floor((f-.4)/.6*(s.length-1));return s[Math.min(u+1,s.length-1)]}}const R2=({params:p,onParamsChange:s,onSelectFractalType:f,onCaptureScreenshot:u,onToggleFullscreen:v,onToggleInfoModal:S,onOpenAtlasModal:x,activeBackend:j,forcedBackend:A,onSelectBackend:y,onClose:U,tasteProfile:O,onSaveToFeed:B})=>{const[q,P]=k.useState("architectures"),[J,W]=k.useState("all"),F=[{id:"phyllotaxis",label:"Филлотаксис Фибоначчи 3D",desc:"Решетка подсолнуха, свернутая по золотому углу 137.508°",formula:"θ = n · 137.5°, r = c√n, z = f(φ)",group:"golden"},{id:"mandelbulb",label:"Золотой Мандельбульб 3D",desc:"Сферическая гармоника Mandelbulb со степенью n = 5 + φ",formula:"v ↦ v^(5+φ) + c",group:"golden"},{id:"icosahedral",label:"Золотой Икосаэдр IFS",desc:"Симметрия правильного икосаэдра с золотым масштабом φ",formula:"p ↦ abs(p) · φ - (φ - 1.0)",group:"golden"},{id:"fibonacciSnowflake",label:"Снежинка Фибоначчи 3D IFS",desc:"Кристаллический золотой фрактал Коха с масштабным фактором 1/φ",formula:"p ↦ fold(p) · φ - 0.55(φ - 1.0)",group:"golden"},{id:"poincareSphere",label:"Сфера Пуанкаре Додекаэдра",desc:"Гомологическая 3-сфера Пуанкаре S³/I* со 120 сферическими гранями",formula:"x ↦ γ_i(x) ∈ SO(3), face reflection",group:"golden"},{id:"primeSpiral",label:"Спираль Простых (Улам-Закс)",desc:"Логарифмическая спираль распределения простых чисел с фазой π",formula:"f(n) = 4n² + bn + c, p ∈ ℙ",group:"primes"},{id:"gaussianPrimes",label:"Решетка Простых Гаусса ℤ[i]",desc:"Квантовая решетка простых чисел p ≡ 1 (mod 4) = a² + b²",formula:"cos(πx)cos(πy) + cos(πy)cos(πz·φ) = V_p",group:"primes"},{id:"riemannZeta",label:"Резонатор Дзета-Римана",desc:"Квантовый хаос нетривиальных нулей дзета-функции Римана 1/2 + it",formula:"ζ(s) = 0 ⟹ s_n = 1/2 + i γ_n",group:"primes"},{id:"eulerTotientSpiral",label:"Спираль Эйлера φ(n) & π",desc:"Мультипликативная спираль функции Эйлера φ(n) с логарифмическим шагом",formula:"θ · (φ/π) - 2 ln(r) + 1.5 z = 0",group:"primes"},{id:"gyroid",label:"Био-Гироид Поверхность",desc:"Трипериодическая минимальная поверхность нулевой средней кривизны",formula:"sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",group:"tpms"},{id:"neoviusMinimal",label:"Поверхность Неовиуса-Шёна",desc:"TPMS минимальная поверхность нулевой кривизны H = 0",formula:"3(cos x + cos y + cos z) + 4 cos x cos y cos z = 0",group:"tpms"},{id:"spiralTunnel",label:"Логарифмический Туннель φ",desc:"Бесконечный туннель золотого сечения с глубоким зумом",formula:"r(θ) = a · φ^(2θ/π)",group:"tpms"},{id:"quaternionJulia",label:"Кватернион Юлия 4D",desc:"Гиперкомплексный 4D срез Жюлиа на орбите золотого тора",formula:"q ↦ q² + c(φ, t) ∈ ℍ",group:"manifolds"},{id:"quaternionMandelbrot",label:"4D Мандельброт Золотых Сечений",desc:"Гиперкомплексное тело Мандельброта в пространстве кватернионов ℍ",formula:"Z ↦ Z² + C, C.w = 0.25 sin(t·φ)",group:"manifolds"},{id:"hopfFibration",label:"Расслоение Хопфа S³→S²",desc:"Топологическое расслоение 3-сферы окружностями Вилларсо",formula:"S¹ ↪ S³ → S², (z₁, z₂) ↦ z₁/z₂",group:"manifolds"},{id:"calabiYau",label:"Многообразие Калаби-Яу 5-Fold",desc:"Компактное комплексное многообразие теории суперструн",formula:"z₁⁵ + z₂⁵ + z₃⁵ + z₄⁵ + z₅⁵ = 0",group:"manifolds"},{id:"cliffordTorus4D",label:"4D Тор Клиффорда в S³",desc:"Плоский тор Клиффорда в единичной 3-сфере с конформной стереографией",formula:"x² + y² = z² + w² = 1/2 in S³",group:"manifolds"},{id:"cliffordKlein",label:"Золотой Узел Клиффорда-Клейна",desc:"4D бутылка Клейна с золотым геликоидным шагом",formula:"u ↦ fig8(u, v) ⊂ ℝ⁴",group:"manifolds"},{id:"kleinianLimit",label:"Фрактал Группы Клейна (Шоттки)",desc:"Предельное множество Мёбиусовых конформных инверсий сфер",formula:"γ ∈ PSL(2, ℂ), z ↦ (az+b)/(cz+d)",group:"manifolds"},{id:"quasicrystal",label:"Квазикристалл Пенроуза-Шехтмана",desc:"Икосаэдрический квазикристалл с апериодическим золотым порядком",formula:"ρ(r) = ∑ cos(k_j · r), k_j ∈ icosahedron",group:"manifolds"},{id:"mandelbox",label:"Куб Мандельбокса 3D",desc:"Складки пространства box-fold и sphere-fold по Теттли",formula:"p ↦ s · fold(p) + c",group:"classic"},{id:"menger",label:"Губка Менгера-Иерусалима",desc:"Трехмерное ковровое сито Серпинского-Менгера",formula:"dim_H = ln(20)/ln(3) ≈ 2.7268",group:"classic"},{id:"sierpinskiOcta",label:"Октаэдрическая Звезда Серпинского",desc:"Рекурсивная звездчатая пирамида IFS",formula:"p ↦ 2p - sign(p) · (φ - 1.0)",group:"classic"},{id:"apollonian",label:"Прокладка Аполлония (Inversion)",desc:"Конформные инверсии сфер со сжатием k = 1/φ",formula:"p ↦ p/|p|² · (k·φ) - φ",group:"classic"}],re=J==="all"?F:F.filter(z=>z.group===J);return l.jsxs("div",{className:"fixed top-3 right-3 sm:top-4 sm:right-4 z-40 w-[calc(100vw-1.5rem)] sm:w-[410px] max-h-[calc(100vh-1.5rem)] overflow-y-auto rounded-2xl bg-neutral-950/94 backdrop-blur-2xl border border-neutral-800/90 shadow-2xl p-3.5 sm:p-4 text-xs select-none transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-neutral-800/80 mb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-amber-400 animate-pulse"}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-xs font-semibold tracking-wider uppercase text-neutral-100 flex items-center gap-1.5",children:[l.jsx("span",{children:"Режим Инженера"}),l.jsx("span",{className:"text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/40",children:"24 Топологии"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 font-mono",children:"WebGPU / WebGL2 · Золотое Сечение φ · 60-250 FPS"})]})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[x&&l.jsxs("button",{id:"open-atlas-modal-btn",onClick:x,className:"px-2 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 transition text-[10px] font-medium flex items-center gap-1 shadow-sm",title:"Атлас базовых фракталов (42 типа) и научная синергия",children:[l.jsx(xi,{className:"w-3.5 h-3.5"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),B&&l.jsxs("button",{id:"save-to-feed-btn",onClick:B,className:"px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 hover:bg-amber-500/25 transition text-[10px] font-medium flex items-center gap-1",title:"Сохранить текущую геометрию в ленту",children:[l.jsx(xh,{className:"w-3 h-3"}),l.jsx("span",{className:"hidden sm:inline",children:"В ленту"})]}),l.jsx("button",{id:"capture-screenshot-btn",onClick:u,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Снимок экрана в полном разрешении",children:l.jsx(zh,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"toggle-fullscreen-btn",onClick:v,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-neutral-200 transition",title:"Полноэкранный режим",children:l.jsx($h,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"show-math-info-btn",onClick:S,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-300 transition",title:"Научное обоснование & Математика",children:l.jsx(xi,{className:"w-3.5 h-3.5"})}),l.jsx("button",{id:"close-engineer-panel-btn",onClick:U,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/50 transition ml-1",title:"Закрыть режим инженера",children:l.jsx(fl,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"grid grid-cols-4 gap-1 bg-neutral-900/80 p-1 rounded-xl border border-neutral-800/80 mb-3.5 text-center",children:[l.jsx("button",{id:"tab-architectures-btn",onClick:()=>P("architectures"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="architectures"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Топологии"}),l.jsx("button",{id:"tab-composition-btn",onClick:()=>P("composition"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="composition"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Гибриды"}),l.jsx("button",{id:"tab-camera-btn",onClick:()=>P("camera"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="camera"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Камера/Внутри"}),l.jsx("button",{id:"tab-palettes-btn",onClick:()=>P("palettes"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="palettes"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Палитры"}),l.jsx("button",{id:"tab-morphology-btn",onClick:()=>P("morphology"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="morphology"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Морфология φ"}),l.jsx("button",{id:"tab-gpu-btn",onClick:()=>P("gpu"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="gpu"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"60-250 FPS"}),l.jsx("button",{id:"tab-audio-btn",onClick:()=>P("audio"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="audio"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Звук φ"}),l.jsx("button",{id:"tab-neuro-btn",onClick:()=>P("neuro"),className:`py-1.5 rounded-lg text-[10px] font-medium transition ${q==="neuro"?"bg-neutral-800 text-amber-300 shadow":"text-neutral-400 hover:text-neutral-200"}`,children:"Нейро-Вкус"})]}),q==="architectures"&&l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex flex-wrap gap-1 pb-1",children:[{id:"all",label:"Все (24)"},{id:"golden",label:"φ Золотое Сечение"},{id:"primes",label:"Простые числа"},{id:"tpms",label:"Минимальные ТПМС"},{id:"manifolds",label:"4D Топология"},{id:"classic",label:"Классические"}].map(z=>l.jsx("button",{onClick:()=>W(z.id),className:`px-2 py-1 rounded-md text-[9px] transition ${J===z.id?"bg-amber-400 text-neutral-950 font-bold":"bg-neutral-900 text-neutral-400 hover:text-neutral-200 border border-neutral-800"}`,children:z.label},z.id))}),l.jsx("div",{className:"space-y-1.5 max-h-[50vh] overflow-y-auto pr-1",children:re.map(z=>{const H=p.type===z.id;return l.jsxs("button",{id:`arch-btn-${z.id}`,onClick:()=>{f?f(z.id):s(ve=>({...ve,type:z.id}))},className:`w-full text-left p-2.5 rounded-xl border transition-all ${H?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_12px_rgba(245,158,11,0.18)]":"bg-neutral-900/60 border-neutral-800/80 hover:bg-neutral-800/70 hover:border-neutral-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-semibold ${H?"text-amber-300":"text-neutral-200"}`,children:z.label}),H&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#f59e0b]"})]}),l.jsx("p",{className:"text-[10px] text-neutral-400 mt-0.5 line-clamp-1",children:z.desc}),l.jsx("code",{className:"text-[9px] text-amber-400/90 font-mono mt-1 block",children:z.formula})]},z.id)})})]}),q==="composition"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Оператор Наложения (Algebra SDF)"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:D2.map(z=>l.jsxs("button",{onClick:()=>s(H=>({...H,compositeOp:z})),className:`p-2 rounded-lg border text-left text-[10px] transition flex items-center justify-between ${p.compositeOp===z?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"font-medium",children:N2[z]}),l.jsx("code",{className:"text-[9px] text-amber-400/80 font-mono ml-1",children:Sf[z]})]},z))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Вторичная Геометрия (Слой 2)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.hybridBlend??.35)*100),"%"]})]}),l.jsx("select",{value:p.hybridType||p.type,onChange:z=>s(H=>({...H,hybridType:z.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:cn.map(z=>l.jsx("option",{value:z,children:hi[z]},z))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.hybridBlend??.35,onChange:z=>s(H=>({...H,hybridBlend:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Третичная Геометрия (Слой 3)"}),l.jsxs("span",{className:"text-[10px] text-amber-400 font-mono",children:[Math.round((p.tertiaryBlend??.2)*100),"%"]})]}),l.jsx("select",{value:p.tertiaryType||"riemannZeta",onChange:z=>s(H=>({...H,tertiaryType:z.target.value})),className:"w-full bg-neutral-950 border border-neutral-800 rounded-lg p-2 text-xs text-neutral-200 focus:outline-none focus:border-amber-500",children:cn.map(z=>l.jsx("option",{value:z,children:hi[z]},z))}),l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:p.tertiaryBlend??.2,onChange:z=>s(H=>({...H,tertiaryBlend:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-2 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Радиус Сглаживания (k-factor)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.smoothK.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.01",max:"1.2",step:"0.01",value:p.smoothK,onChange:z=>s(H=>({...H,smoothK:parseFloat(z.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-300",children:"Искривление Пространства (Domain Warp)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.warpStrength.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.warpStrength,onChange:z=>s(H=>({...H,warpStrength:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]})]}),q==="camera"&&l.jsxs("div",{className:"space-y-3.5",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Топологический Режим Камеры"}),l.jsx("div",{className:"grid grid-cols-2 gap-1.5",children:[{id:"orbit",label:"Орбита (Снаружи)",desc:"Сферический охват"},{id:"flyThrough",label:"Полет Сквозь Залы",desc:"Внутри коридоров"},{id:"goldenSpiral",label:"Золотая Спираль φ",desc:"Погружение в ядро"},{id:"kelvinInvert",label:"Инверсия Кельвина",desc:"Выворот наружу"}].map(z=>l.jsxs("button",{onClick:()=>s(H=>({...H,cameraMode:z.id})),className:`p-2 rounded-lg border text-left transition ${p.cameraMode===z.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:z.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:z.desc})]},z.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"font-semibold text-neutral-200",children:"Механика Рендеринга"}),l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 uppercase",children:p.renderStyle||"solid"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"solid",label:"Solid PBR",desc:"PBR + Тень + AO"},{id:"xray",label:"X-Ray",desc:"Томография"},{id:"topo",label:"Топография",desc:"Кривизна"},{id:"hologram",label:"Голограмма",desc:"Проекция"},{id:"iridescent",label:"Перламутр",desc:"Интерференция"},{id:"quantum",label:"Плазма",desc:"Поле энергии"},{id:"gemstone",label:"Кристалл",desc:"Рефракция"}].map(z=>l.jsxs("button",{onClick:()=>s(H=>({...H,renderStyle:z.id})),className:`p-2 rounded-lg border text-left transition ${(p.renderStyle||"solid")===z.id?"bg-cyan-950/50 border-cyan-500/70 text-cyan-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:z.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:z.desc})]},z.id))})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2.5",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Мультиосевая Томография (Slice)"}),l.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:p.slicePlane>.01?`${(p.slicePlane*100).toFixed(0)}%`:"Выкл"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-1",children:[{id:"golden",label:"φ Золотая"},{id:"x",label:"X Сагитт."},{id:"y",label:"Y Аксиал."},{id:"z",label:"Z Фронт."}].map(z=>l.jsx("button",{onClick:()=>s(H=>({...H,sliceAxis:z.id})),className:`py-1 px-1.5 rounded text-center text-[10px] font-mono transition border ${(p.sliceAxis||"golden")===z.id?"bg-amber-500/20 border-amber-500/60 text-amber-200":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:z.label},z.id))}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.slicePlane,onChange:z=>s(H=>({...H,slicePlane:parseFloat(z.target.value)})),className:"w-full accent-amber-400"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Вскрывает внутренние камеры со светящейся каймой выбранной нормали."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Инструменты Исследователя"}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[l.jsxs("button",{onClick:()=>s(z=>({...z,probeActive:!z.probeActive})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.probeActive?"bg-emerald-950/60 border-emerald-500/70 text-emerald-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Топологический Зонд"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Прицел и телеметрия d(p)"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.probeActive?"bg-emerald-400 animate-ping":"bg-neutral-700"}`})]}),l.jsxs("button",{onClick:()=>s(z=>({...z,macroMode:!z.macroMode})),className:`p-2 rounded-lg border text-left transition flex items-center justify-between ${p.macroMode?"bg-amber-950/60 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsxs("div",{children:[l.jsx("div",{className:"font-medium text-[10px]",children:"Ультра-Макро 10⁻⁴"}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:"Микрошаг реймарша"})]}),l.jsx("div",{className:`w-2 h-2 rounded-full ${p.macroMode?"bg-amber-400":"bg-neutral-700"}`})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Фонарь Исследователя (Headlamp)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.headlampPower||1).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.headlampPower??1,onChange:z=>s(H=>({...H,headlampPower:parseFloat(z.target.value)})),className:"w-full accent-amber-400"}),l.jsxs("div",{className:"flex justify-between items-center text-[11px] pt-2",children:[l.jsx("span",{className:"text-neutral-200",children:"Эфирный Туман (Volumetric Fog)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(p.volumetricFog||.4).toFixed(1),"x"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"2.0",step:"0.1",value:p.volumetricFog??.4,onChange:z=>s(H=>({...H,volumetricFog:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center text-[11px]",children:[l.jsx("span",{className:"text-neutral-200",children:"Выдалбливание Соборов (Interior Cut)"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[Math.round((p.interiorCut??.4)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.02",value:p.interiorCut??.4,onChange:z=>s(H=>({...H,interiorCut:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]})]}),q==="palettes"&&l.jsx("div",{className:"space-y-2 max-h-[50vh] overflow-y-auto pr-1",children:Ca.map(z=>{const H=p.paletteId===z.id;return l.jsxs("button",{onClick:()=>s(ve=>({...ve,paletteId:z.id,customPalette:z})),className:`w-full p-2 rounded-xl border flex items-center justify-between transition ${H?"bg-amber-950/40 border-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.15)]":"bg-neutral-900/60 border-neutral-800 hover:bg-neutral-800/70"}`,children:[l.jsx("div",{className:"text-left",children:l.jsx("span",{className:`text-[11px] font-semibold block ${H?"text-amber-300":"text-neutral-200"}`,children:z.name})}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${z.primary.map(ve=>Math.round(ve*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${z.secondary.map(ve=>Math.round(ve*255)).join(",")})`}}),l.jsx("div",{className:"w-4 h-4 rounded-full border border-neutral-700",style:{backgroundColor:`rgb(${z.accent.map(ve=>Math.round(ve*255)).join(",")})`}})]})]},z.id)})}),q==="morphology"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Золотое Число (φ multiplier)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.phiMultiplier.toFixed(5)})]}),l.jsx("input",{type:"range",min:"1.4",max:"1.8",step:"0.001",value:p.phiMultiplier,onChange:z=>s(H=>({...H,phiMultiplier:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Итерации (Глубина фрактала)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.iterations})]}),l.jsx("input",{type:"range",min:"8",max:"36",step:"1",value:p.iterations,onChange:z=>s(H=>({...H,iterations:parseInt(z.target.value,10)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Скорость Морфинга"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[p.morphSpeed.toFixed(2),"x"]})]}),l.jsx("input",{type:"range",min:"0.05",max:"2.0",step:"0.05",value:p.morphSpeed,onChange:z=>s(H=>({...H,morphSpeed:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Кубическая Складка (Box Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.boxFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.05",value:p.boxFold,onChange:z=>s(H=>({...H,boxFold:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"space-y-1 pt-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Сферическая Складка (Sphere Fold)"}),l.jsx("span",{className:"font-mono text-amber-400",children:p.sphereFold.toFixed(2)})]}),l.jsx("input",{type:"range",min:"0.2",max:"1.5",step:"0.05",value:p.sphereFold,onChange:z=>s(H=>({...H,sphereFold:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]})]}),q==="gpu"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Целевая Частота Кадров (Target FPS)"}),l.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[250,165,144,120,60,0].map(z=>l.jsx("button",{onClick:()=>s(H=>({...H,targetFps:z})),className:`py-1.5 px-2 rounded-lg border text-center font-mono text-[10px] transition ${p.targetFps===z?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:z===0?"Uncapped":`${z} FPS`},z))}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Минимум 60 FPS, максимум 250 FPS на высокочастотных мониторах."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Dynamic Resolution Scaling (DRS)"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Автоматически балансирует масштаб рендера для стабильного фреймрейта."})]}),l.jsx("button",{onClick:()=>s(z=>({...z,drsEnabled:!z.drsEnabled})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.drsEnabled?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.drsEnabled?"АКТИВЕН":"ОТКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Вычислительный Конвейер"}),l.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:[{id:"auto",label:"Auto (Detect)"},{id:"webgpu",label:"WebGPU (WGSL)"},{id:"webgl2",label:"WebGL2 (GLSL)"}].map(z=>l.jsx("button",{onClick:()=>y(z.id),className:`py-1.5 px-2 rounded-lg border text-center text-[10px] transition ${A===z.id?"bg-amber-400 text-neutral-950 font-bold border-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"}`,children:z.label},z.id))}),l.jsxs("div",{className:"text-[9px] text-neutral-400 flex items-center justify-between pt-1 font-mono",children:[l.jsxs("span",{children:["Текущий: ",j]}),l.jsx("span",{className:"text-emerald-400",children:"Anti-Banding: Dither + Secant"})]})]})]}),q==="audio"&&l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[p.enableAudio?l.jsx(ec,{className:"w-4 h-4 text-amber-400"}):l.jsx(zf,{className:"w-4 h-4 text-neutral-500"}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Резонатор φ"}),l.jsx("p",{className:"text-[9px] text-neutral-400",children:"Теплый гармонический дрон на частоте 432 Гц"})]})]}),l.jsx("button",{onClick:()=>s(z=>({...z,enableAudio:!z.enableAudio})),className:`px-3 py-1.5 rounded-lg text-[10px] font-bold transition ${p.enableAudio?"bg-amber-400 text-neutral-950 shadow-[0_0_12px_rgba(245,158,11,0.3)]":"bg-neutral-900 text-neutral-400 border border-neutral-800"}`,children:p.enableAudio?"ВКЛЮЧЕН":"ВЫКЛЮЧЕН"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[11px]",children:[l.jsx("span",{className:"text-neutral-300",children:"Громкость Резонатора"}),l.jsxs("span",{className:"font-mono text-amber-400",children:[Math.round((p.audioVolume??.65)*100),"%"]})]}),l.jsx("input",{type:"range",min:"0.0",max:"1.0",step:"0.01",value:p.audioVolume??.65,onChange:z=>s(H=>({...H,audioVolume:parseFloat(z.target.value)})),className:"w-full accent-amber-400"})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-3 rounded-xl border border-neutral-800 space-y-2",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200 block",children:"Акустический Строй (Harmonic Mode)"}),l.jsx("div",{className:"space-y-1.5",children:[{id:"phi432",label:"432 Hz Золотое Сечение φ",desc:"Мягкий бархатный дрон, частоты f0 · φ^n"},{id:"fibonacci",label:"Пифагорейский Строй Фибоначчи",desc:"Чистая квинта 3:2 и терция 5:4"},{id:"zenChimes",label:"Резонансные Обертоны & Колокола",desc:"Микротональные колокольные гармоники"}].map(z=>l.jsxs("button",{onClick:()=>s(H=>({...H,audioTuning:z.id})),className:`w-full p-2 rounded-lg border text-left transition ${(p.audioTuning||"phi432")===z.id?"bg-amber-950/50 border-amber-500/70 text-amber-200":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("div",{className:"font-medium text-[10px]",children:z.label}),l.jsx("div",{className:"text-[8px] text-neutral-500",children:z.desc})]},z.id))})]}),l.jsxs("div",{className:"p-2.5 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[9px] text-amber-300/90 leading-relaxed",children:["✨ ",l.jsx("strong",{children:"Синхронизация с геометрией:"})," Фильтр низких частот плавно раскрывается при погружении внутрь залов; стереопанорама мягко покачивается при вращении 3D сцены; переключение фенотипов сопровождается деликатным колокольным аккордом."]})]}),q==="neuro"&&l.jsxs("div",{className:"space-y-3 bg-neutral-900/60 p-3.5 rounded-xl border border-neutral-800",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800",children:[l.jsx("span",{className:"text-[11px] font-semibold text-neutral-200",children:"Профиль Зрительной Коры"}),l.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(O==null?void 0:O.totalSpecimensExplored)||0," исследовано"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Максимальный Резонанс:"}),l.jsxs("span",{className:"font-mono text-amber-300",children:[(O==null?void 0:O.highestResonanceScore.toFixed(1))||0,"%"]})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Оптимальная глубина итераций:"}),l.jsx("span",{className:"font-mono text-neutral-200",children:Math.round((O==null?void 0:O.preferredIterations)||20)})]}),l.jsxs("div",{className:"flex justify-between text-[10px]",children:[l.jsx("span",{className:"text-neutral-400",children:"Любимая цветовая гамма:"}),l.jsxs("span",{className:"font-mono text-neutral-200",children:[Math.round(((O==null?void 0:O.preferredHue)||0)*360),"° Hue"]})]})]}),l.jsx("p",{className:"text-[9px] text-neutral-400 pt-2 border-t border-neutral-800 leading-relaxed",children:"Нейро-движок автоматически оценивает время созерцания, глубину зума и ручные корректировки, обучаясь вашим индивидуальным паттернам эстетического восприятия."})]})]})},k2={smoothMorph:"Морфинг",smoothUnion:"Слияние форм",smoothIntersection:"Пересечение",smoothCarve:"Полости",domainWarp:"Искривление",quantumResonance:"Резонанс",fractalLattice:"Решетка",goldenSpiralFold:"Золотая спираль"},O2=({specimen:p,resonanceScore:s,isInteracting:f,interactionType:u,onNext:v,onPrev:S,onFavorite:x,onOpenProfile:j,enableAudio:A,onToggleAudio:y,onOpenResearchModal:U,onOpenAtlas:O,isFeedOpen:B,onToggleFeed:q,isCurrentLiked:P=!1})=>{const[J,W]=k.useState(!1),[F,re]=k.useState(!1),[z,H]=k.useState(!1),[ve,ye]=k.useState(!1),[te,we]=k.useState(!1),Se=k.useRef(null),et=k.useRef(!1);k.useEffect(()=>{W(P)},[p==null?void 0:p.id,P]);const Be=()=>{Se.current&&clearTimeout(Se.current),Se.current=setTimeout(()=>{et.current||(re(!1),H(!1),ye(!1))},3e3)},Le=()=>{re(!0),H(!0),Be()},tt=()=>{ye(E=>!E),re(!0),Se.current&&clearTimeout(Se.current)};k.useEffect(()=>(Le(),()=>{Se.current&&clearTimeout(Se.current)}),[]),k.useEffect(()=>{const E=V=>{(V.clientY<80||V.clientY>window.innerHeight-120)&&Le()},L=V=>{const ae=V.target;ae.closest("#top-right-bar")||ae.closest("#top-right-trigger")||ae.closest("#neuro-feed-bar")||(H(!0),Be())};return window.addEventListener("mousemove",E),window.addEventListener("touchstart",L,{passive:!0}),()=>{window.removeEventListener("mousemove",E),window.removeEventListener("touchstart",L)}},[]);const Qe=()=>{W(!0),x()},K=()=>{if(!p)return;const E=new URLSearchParams({type:p.type,hybrid:p.hybridType,tertiary:p.tertiaryType,op:p.compositeOp,blend:p.hybridBlend.toFixed(3),tertiaryBlend:p.tertiaryBlend.toFixed(3),smoothK:p.smoothK.toFixed(3),warp:p.warpStrength.toFixed(3),octaves:String(p.octaveLayers),boxFold:p.boxFold.toFixed(3),sphereFold:p.sphereFold.toFixed(3),interiorCut:p.interiorCut.toFixed(3),palette:p.palette.id,iterations:String(p.iterations),phi:p.phiMultiplier.toFixed(9),morphSpeed:p.morphSpeed.toFixed(3),glow:p.glowIntensity.toFixed(3),zoom:p.zoom.toFixed(3),name:p.name}),L=`${window.location.origin}${window.location.pathname}#${E.toString()}`;navigator.share?navigator.share({title:p.name,text:`Фрактал: ${p.name}`,url:L}).catch(()=>{}):navigator.clipboard.writeText(L).then(()=>{we(!0),setTimeout(()=>we(!1),2e3)}).catch(()=>{const V=document.createElement("textarea");V.value=L,document.body.appendChild(V),V.select(),document.execCommand("copy"),document.body.removeChild(V),we(!0),setTimeout(()=>we(!1),2e3)})},N=p!=null&&p.compositeOp?k2[p.compositeOp]||p.compositeOp:"Гибрид";return l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"absolute top-3 right-3 sm:top-4 sm:right-4 z-30 pointer-events-auto",onMouseEnter:()=>{et.current=!0,re(!0),ye(!0),Se.current&&clearTimeout(Se.current)},onMouseLeave:()=>{et.current=!1,ye(!1),Be()},children:[l.jsx("button",{id:"top-right-trigger",className:`p-2 rounded-full border backdrop-blur-md transition-all duration-300 ${ve?"bg-neutral-950/80 border-amber-500/50 text-amber-300 opacity-100":"bg-neutral-950/50 border-neutral-800/50 text-neutral-500 opacity-50 hover:opacity-100 hover:text-amber-300"}`,onClick:tt,title:"Меню",children:l.jsx(Bh,{className:"w-4 h-4"})}),l.jsxs("div",{id:"top-right-bar",className:`absolute top-full right-0 pt-1 flex sm:flex-row flex-col items-start sm:items-center gap-1.5 sm:gap-2 transition-all duration-300 ${F&&ve?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-1 pointer-events-none"}`,children:[l.jsx("button",{id:"toggle-audio-btn-hud",onClick:y,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${A?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:A?"Выключить звук":"Включить гармонический звук φ (432 Гц)",children:A?l.jsx(ec,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300"}):l.jsx(zf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),O&&l.jsxs("button",{id:"open-atlas-btn-hud",onClick:O,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-neutral-950/80 border border-amber-500/40 backdrop-blur-md text-amber-300 hover:bg-amber-500/20 transition shadow-lg flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-semibold",title:"Научный Атлас канонических фракталов",children:[l.jsx(xi,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400"}),l.jsx("span",{className:"hidden sm:inline",children:"Атлас"})]}),q&&l.jsx("button",{id:"toggle-feed-panel-btn",onClick:q,className:`px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border backdrop-blur-md transition shadow-lg text-xs flex items-center gap-1.5 ${B?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-950/75 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:B?"Скрыть ленту фракталов":"Показать ленту фракталов",children:l.jsx(vi,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"open-user-profile-btn",onClick:j,className:"px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-neutral-800/90 bg-neutral-950/80 backdrop-blur-md text-neutral-200 hover:text-white hover:border-amber-500/50 transition shadow-lg flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold",title:"Настройки",children:[l.jsx(_f,{className:"w-3.5 h-3.5 text-amber-300"}),l.jsxs("span",{className:"px-1 py-0.5 sm:px-1.5 sm:py-0.2 rounded text-[9px] sm:text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30",children:[s,"%"]})]})]})]}),f&&l.jsxs("div",{id:"interaction-feedback-chip",className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3 py-1 rounded-full bg-neutral-950/80 backdrop-blur-md border border-neutral-800 text-[11px] text-neutral-300 flex items-center gap-1.5 transition-all duration-300 hidden sm:flex",children:[l.jsx(Ar,{className:"w-3 h-3 text-amber-400 animate-spin",style:{animationDuration:"4s"}}),l.jsx("span",{children:u==="zooming"?"Исследование микроструктуры":"Пространственный ракурс"})]}),l.jsx("div",{id:"neuro-feed-bar",className:`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 w-[calc(100vw-1rem)] sm:w-auto sm:max-w-[94vw] transition-all duration-500 ${z?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:l.jsxs("div",{className:"bg-neutral-950/85 backdrop-blur-md border border-neutral-800/90 rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-2xl flex items-center gap-2 sm:gap-3 text-neutral-200 w-full",children:[l.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[l.jsx("span",{className:"w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50 shrink-0"}),l.jsxs("div",{className:"flex flex-col min-w-0 flex-1",children:[l.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[l.jsx("span",{className:"text-[11px] sm:text-sm font-semibold text-white tracking-wide truncate",title:(p==null?void 0:p.name)||"Золотой Фрактал",children:(p==null?void 0:p.name)||"Золотой Фрактал"}),(p==null?void 0:p.hybridBlend)&&p.hybridBlend>.05&&l.jsx("span",{className:"px-1 py-0.5 rounded text-[8px] sm:text-[9px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0",title:p.compositeOp,children:N})]}),l.jsxs("span",{className:"text-[9px] sm:text-[10px] text-neutral-400 font-mono",children:["φ ",(p==null?void 0:p.phiMultiplier.toFixed(4))||"1.6180"]})]})]}),l.jsx("div",{className:"h-5 sm:h-6 w-px bg-neutral-800 shrink-0"}),l.jsx("button",{id:"boost-affinity-btn",onClick:Qe,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${J?"bg-rose-500/20 border-rose-500/50 text-rose-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-rose-400 hover:border-rose-500/30"}`,title:"Отметить как понравившийся",children:l.jsx(jr,{className:`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${J?"fill-rose-400 text-rose-400 scale-110":""}`})}),l.jsx("button",{id:"share-fractal-btn",onClick:K,className:`p-1.5 sm:p-2 rounded-xl border transition shrink-0 ${te?"bg-emerald-500/20 border-emerald-500/50 text-emerald-300":"bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-amber-300 hover:border-amber-500/30"}`,title:te?"Ссылка скопирована!":"Поделиться этим фракталом",children:te?l.jsx(hf,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"}):l.jsx(u2,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("div",{className:"flex items-center gap-1 sm:gap-1.5 shrink-0",children:[l.jsx("button",{id:"feed-prev-btn",onClick:S,className:"p-1.5 sm:p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 transition",title:"Предыдущий [Стрелка влево]",children:l.jsx(Th,{className:"w-3.5 h-3.5 sm:w-4 sm:h-4"})}),l.jsxs("button",{id:"feed-next-btn",onClick:v,className:"px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-semibold transition text-[11px] sm:text-xs flex items-center gap-1 shadow-md shadow-amber-500/20",title:"Следующий случайный фрактал [Пробел]",children:[l.jsx("span",{children:"Далее"}),l.jsx(xf,{className:"w-3 h-3 sm:w-3.5 sm:h-3.5"})]})]})]})})]})},E2=({isOpen:p,onClose:s})=>p?l.jsx("div",{id:"explanation-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md",onClick:s,children:l.jsxs("div",{id:"explanation-modal-content",className:"bg-neutral-950 border border-neutral-800 rounded-2xl max-w-3xl w-full p-6 text-neutral-300 shadow-2xl overflow-y-auto max-h-[88vh]",onClick:f=>f.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 mb-4 border-b border-neutral-800",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-400",children:l.jsx(xi,{className:"w-4.5 h-4.5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-white tracking-wide",children:"Золотое Сечение, Простые Числа и Квантовая Нейро-Эстетика"}),l.jsx("p",{className:"text-xs text-amber-400/90 font-mono",children:"34 Научные Архитектуры · L-Системы · Хаос Лоренца · 144 Hz WebGPU Raymarching"})]})]}),l.jsx("button",{id:"close-explanation-modal-btn",onClick:s,className:"p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition",children:l.jsx(fl,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"space-y-4 text-xs leading-relaxed text-neutral-300",children:[l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ar,{className:"w-4 h-4 text-amber-400"}),"1. Золотое Сечение φ, Числа Фибоначчи и Золотой Угол"]}),l.jsxs("p",{className:"mb-2",children:["Число ",l.jsx("strong",{className:"text-white font-mono",children:"φ = (1 + √5) / 2 ≈ 1.6180339887..."})," является наиболее иррациональным числом математики (его непрерывная дробь состоит исключительно из единиц: ",l.jsx("code",{className:"text-amber-300 font-mono",children:"[1; 1, 1, 1, ...]"}),"). Благодаря этому свойству φ обеспечивает отсутствие периодических резонансов при вращении, создавая максимально плотную и совершенную упаковку материи без взаимных перекрытий."]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5 bg-neutral-950/80 p-3 rounded-lg border border-neutral-800/80 font-mono text-[11px]",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Предел отношений Фибоначчи:"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"lim (F_n+1 / F_n) = φ"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-neutral-400 block text-[10px]",children:"Золотой угол (Golden Angle):"}),l.jsx("span",{className:"text-amber-300 font-bold",children:"θ_φ = 360° · (1 - 1/φ) ≈ 137.507764°"})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(gi,{className:"w-4 h-4 text-amber-400"}),"2. Простые Числа: Спирали Улама-Закса и Квантовый Хаос Римана"]}),l.jsx("p",{className:"mb-2",children:"Исследования распределения простых чисел выявили глубокую связь между теорией чисел и геометрией динамических систем:"}),l.jsxs("div",{className:"space-y-2 text-neutral-300",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Спираль Закса и Полином Эйлера:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Полярная параметризация ",l.jsx("code",{className:"text-white font-mono",children:"r = √n, θ = 2π√n"})," (спираль Роберта Закса) демонстрирует концентрацию простых чисел вдоль спиральных лучей, соответствующих полиномам генерации простых чисел Леонарда Эйлера ",l.jsx("code",{className:"text-amber-300 font-mono",children:"P(n) = n² - n + 41"}),". Модуляция лучей шагом золотого сечения φ раскрывает многоуровневый фрактальный узор."]})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-medium block mb-0.5",children:"Гипотеза Монтгомери-Одлыжко и Нули Дзета-Римана:"}),l.jsxs("p",{className:"text-[11px] text-neutral-400",children:["Распределение расстояний между нетривиальными нулями дзета-функции Римана ",l.jsx("code",{className:"text-white font-mono",children:"ζ(1/2 + iγ_n) = 0"})," математически идентично распределению собственных значений гауссовых унитарных ансамблей (GUE) квантового хаоса тяжелых ядер."]})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(vi,{className:"w-4 h-4 text-amber-400"}),"3. Квазикристаллы Шехтмана, Расслоение Хопфа и Калаби-Яу"]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2.5 text-[11px]",children:[l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Квазикристаллы (Нобель 2011)"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Дан Шехтман открыл 5-кратную «запрещенную» кристаллографическую симметрию. Они представляют собой трехмерные срезы 6-мерной периодической гиперкубической решетки с масштабированием φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Расслоение Хопфа S³ → S²"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Топологическое разбиение 3-сферы на систему бесконечных концентрических торов Клиффорда. Сечения образуют семейство замкнутых окружностей Вилларсо с пропорцией осей 1:φ."})]}),l.jsxs("div",{className:"p-2.5 bg-neutral-950/60 rounded-lg border border-neutral-800/60",children:[l.jsx("span",{className:"text-amber-300 font-semibold block mb-1",children:"Многообразия Калаби-Яу"}),l.jsx("p",{className:"text-neutral-400 leading-snug",children:"Комплексные 3-мерные компактификации пространственных измерений в теории суперструн. Квинтика Ферма раскрывает скрытую 6-мерную геометрию планковского масштаба."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(vi,{className:"w-4 h-4 text-amber-400"}),"4. Алгебра Наложений (SDF Algebra) и Миллионы Гибридов"]}),l.jsx("p",{className:"mb-2 text-neutral-300",children:"Каждый фрактал рассчитывается как непрерывное скалярное знакопеременное поле расстояний (Signed Distance Field). Суперпозиция десятков и сотен базовых форм реализуется через строгую алгебру:"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]",children:[l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊕_φ Гладкое объединение (smin):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"smin(d₁, d₂, k) = mix(d₂, d₁, h) - k·h·(1-h)"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Обеспечивает гладкое слияние C¹-гладкости между абсолютно разнородными топологиями."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⮁_φ Искривление пространства (Warp):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"p' = p + WarpVector(p, Type₂) · strength"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Векторное поле одного фрактала деформирует метрику пространства другого до вычисления расстояния."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"⊗_φ Волновая интерференция (Resonance):"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"d_res = d₁ + [sin(d₂ · φ³) / φ³] · blend"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Аналог стоячих квантовых волн и распределения нетривиальных нулей дзета-Римана."})]}),l.jsxs("div",{className:"p-2 bg-neutral-950/70 rounded-lg border border-neutral-800",children:[l.jsx("span",{className:"text-amber-300 font-bold block",children:"∑ Октавы Фибоначчи:"}),l.jsx("code",{className:"text-[10px] text-neutral-400 block mt-0.5",children:"H(p) = ∑_{n=1}^{N} [Harmonic(p · φⁿ) / φⁿ]"}),l.jsx("p",{className:"text-neutral-400 text-[10px] mt-1",children:"Иерархическое наложение микро-рельефа со спектральным затуханием 1/φ."})]})]})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(pl,{className:"w-4 h-4 text-amber-400"}),"5. 144 Герц (144 Hz) и WebGPU WGSL Raymarching"]}),l.jsxs("p",{className:"mb-2",children:["При частоте развертки ",l.jsx("strong",{className:"text-white font-mono",children:"144 Гц"})," время вычисления кадра ограничено квантом:"]}),l.jsx("div",{className:"bg-neutral-950/80 p-2.5 rounded-lg border border-neutral-800/80 font-mono text-[11px] text-emerald-400 text-center font-bold",children:"1000 мс / 144 кадров = 6.944 миллисекунды на кадр"}),l.jsx("p",{className:"mt-2 text-neutral-400 text-[11px]",children:"Прямой рендеринг в шейдерах WebGPU (WGSL) с адаптивным шагом луча исключает задержки CPU, а логарифмическая нелинейная интерполяция гарантирует детальный обзор как на колоссальном удалении, так и глубоко внутри полых фрактальных соборов без пересвета."})]}),l.jsxs("div",{className:"bg-neutral-900/60 p-4 rounded-xl border border-neutral-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(bh,{className:"w-4 h-4 text-amber-400"}),"6. Нейро-Эстетика: Почему мозг находит фракталы гармоничными"]}),l.jsxs("p",{className:"mb-2 text-neutral-300",children:["В исследованиях профессора Ричарда Тейлора (",l.jsx("em",{children:"«Perceptual and Physiological Responses to Fractals»"}),", University of Oregon) зафиксировано:"]}),l.jsxs("ul",{className:"list-disc pl-5 space-y-1.5 text-neutral-400 text-[11px]",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Снижение физиологического стресса до 60%:"})," Зрительная кора человека оптимизирована эволюцией под фрактальную размерность D ≈ 1.3–1.5 (контуры облаков, крон деревьев, береговых линий). Созерцание фракталов φ стимулирует когерентные альфа-волны частотой 8–12 Гц в лобных долях."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-neutral-200",children:"Обучающаяся лента предпочтений:"})," Подобно естественному процессу удержания внимания, движок ненавязчиво отслеживает время фиксации взгляда и глубину исследования ракурсов, формируя персональный вектор вкуса зрительной коры без навязчивых опросников."]})]})]})]}),l.jsx("div",{className:"mt-5 pt-3 border-t border-neutral-800/80 flex justify-end",children:l.jsx("button",{id:"modal-close-confirm-btn",onClick:s,className:"px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition shadow-lg shadow-amber-500/20",children:"Закрыть и продолжить исследование"})})]})}):null,q2=({isOpen:p,onClose:s,tasteProfile:f,archetypeBreakdown:u,currentSpecimen:v,resonanceScore:S,isEngineerMode:x,onToggleEngineerMode:j,audioTuning:A,onSelectAudioTuning:y,onResetTasteProfile:U,onOpenManifest:O,likedSpecimens:B=[],onPlayLiked:q,onRemoveLike:P,isCurrentLiked:J=!1})=>p?l.jsx("div",{id:"user-profile-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{id:"user-profile-modal-card",className:"relative w-full max-w-2xl bg-neutral-950 border border-neutral-800/90 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-5 border-b border-neutral-800/80 bg-neutral-900/40",children:[l.jsxs("div",{className:"flex items-center gap-3.5",children:[l.jsxs("div",{className:"relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-neutral-900 border border-amber-500/40 shadow-inner",children:[l.jsx(_f,{className:"w-6 h-6 text-amber-300"}),l.jsx("div",{className:"absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 border-2 border-neutral-950 flex items-center justify-center text-[9px] text-neutral-950 font-bold",children:"φ"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("h2",{className:"text-base font-semibold text-white tracking-wide",children:"Профиль Исследователя"}),l.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30",children:"Нейро-Эстетика"})]}),l.jsx("p",{className:"text-xs text-neutral-400",children:"Математический профиль вкуса & селекция фенотипов"})]})]}),l.jsx("button",{id:"close-user-profile-btn",onClick:s,className:"p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800/60 transition",children:l.jsx(fl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6 text-sm text-neutral-300 custom-scrollbar",children:[l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Текущий Резонанс"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsxs("span",{className:"text-2xl font-bold text-amber-300 font-mono",children:[S,"%"]}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"гармония"})]}),l.jsx("div",{className:"w-full h-1 bg-neutral-800 rounded-full mt-2 overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500",style:{width:`${S}%`}})})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Исследовано"}),l.jsxs("div",{className:"flex items-baseline gap-1.5 mt-1",children:[l.jsx("span",{className:"text-2xl font-bold text-white font-mono",children:(f==null?void 0:f.totalSpecimensExplored)||1}),l.jsx("span",{className:"text-[10px] text-neutral-500",children:"форм"})]}),l.jsxs("span",{className:"text-[10px] text-neutral-500 mt-2",children:["Ген #",(v==null?void 0:v.generation)||1," в фокусе"]})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col",children:[l.jsx("span",{className:"text-[11px] text-neutral-400 font-medium",children:"Пиковый Резонанс"}),l.jsx("div",{className:"flex items-baseline gap-1.5 mt-1",children:l.jsxs("span",{className:"text-2xl font-bold text-emerald-400 font-mono",children:[(f==null?void 0:f.highestResonanceScore)||95,"%"]})}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-2",children:"Авто-обучение активно"})]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(jr,{className:`w-4 h-4 ${B.length>0?"text-rose-400 fill-rose-400":"text-neutral-500"}`}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Избранные Фракталы"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/30",children:B.length})]}),J&&v&&l.jsxs("span",{className:"text-[10px] text-rose-400 flex items-center gap-1",children:[l.jsx(jr,{className:"w-3 h-3 fill-rose-400"}),"Текущий в избранном"]})]}),B.length===0?l.jsxs("div",{className:"text-xs text-neutral-500 py-3 text-center",children:["Нажмите ",l.jsx(jr,{className:"w-3 h-3 inline text-neutral-400"})," на понравившемся фрактале, чтобы добавить его в плейлист"]}):l.jsx("div",{className:"space-y-1.5 max-h-[200px] overflow-y-auto custom-scrollbar",children:B.map((W,F)=>l.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60 hover:border-amber-500/30 transition group",children:[l.jsx("span",{className:"text-[10px] text-neutral-500 font-mono w-5 text-right",children:F+1}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-[11px] text-neutral-200 font-medium truncate",children:W.name}),l.jsxs("div",{className:"text-[9px] text-neutral-500 font-mono",children:["φ ",W.phiMultiplier.toFixed(4)," • Gen #",W.generation]})]}),q&&l.jsx("button",{onClick:()=>q(W),className:"p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 transition opacity-70 group-hover:opacity-100",title:"Воспроизвести",children:l.jsx(bf,{className:"w-3 h-3"})}),P&&l.jsx("button",{onClick:()=>P(W.id),className:"p-1.5 rounded-lg text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10 transition opacity-0 group-hover:opacity-100",title:"Удалить из избранного",children:l.jsx(m2,{className:"w-3 h-3"})})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Nh,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Математический Вектор Резонанса (Архетипы)"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500 font-mono",children:"5D Пространство Вкуса"})]}),l.jsx("p",{className:"text-xs text-neutral-400 leading-relaxed",children:"Алгоритм рекомендаций анализирует время созерцания, микро-зумирование полостей и пространственные вращения, адаптируя вероятность селекции следующих гибридов:"}),l.jsx("div",{className:"space-y-2.5 pt-1",children:u.map(W=>l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs",children:[l.jsx("span",{className:"text-neutral-300 font-medium",children:W.label}),l.jsxs("span",{className:"font-mono text-neutral-400 font-semibold",children:[W.percentage,"%"]})]}),l.jsx("div",{className:"w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-500/80 to-amber-300 rounded-full transition-all duration-500",style:{width:`${W.percentage}%`}})})]},W.archetype))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ec,{className:"w-4 h-4 text-amber-400"}),l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide uppercase",children:"Акустический Гармонический Строй"})]}),l.jsx("span",{className:"text-[11px] text-neutral-500",children:"432 Гц Золотой Резонатор"})]}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"phi432",label:"Золотое Сечение φ (432 Гц)",desc:"Интервалы золотого ряда φ"},{id:"fibonacci",label:"Чистый Пифагоров Ряд",desc:"Квинты и кварты ряда Фибоначчи"},{id:"zenChimes",label:"Тибетские Чаши",desc:"Теплые колокольные гармоники"}].map(W=>l.jsxs("button",{onClick:()=>y(W.id),className:`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${A===W.id?"bg-amber-500/20 border-amber-500/60 text-white":"bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,children:[l.jsx("span",{className:"text-xs font-semibold",children:W.label}),l.jsx("span",{className:"text-[10px] text-neutral-500 mt-1",children:W.desc})]},W.id))})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-neutral-900 to-neutral-950 border border-amber-500/30 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40",children:l.jsx(gi,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide flex items-center gap-1.5",children:l.jsx("span",{children:"О проекте & Описание Архитектуры"})}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"34 топологии, фундаментальные константы φ, π, e и алгоритмы рендеринга WebGPU"})]})]}),l.jsx("button",{id:"open-manifest-from-profile-btn",onClick:()=>{O==null||O()},className:"px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-semibold transition shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center gap-1.5 shrink-0",children:l.jsx("span",{children:"Читать"})})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-gradient-to-br from-neutral-900/60 to-neutral-950 border border-neutral-800/90 space-y-3.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"p-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300",children:l.jsx(y2,{className:"w-4 h-4"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xs font-semibold text-white tracking-wide",children:"Режим Инженера (Продвинутый)"}),l.jsx("p",{className:"text-[11px] text-neutral-400",children:"Прямой доступ к 34 топологиям, шейдерам, срезам полостей и FPS"})]})]}),l.jsxs("button",{id:"toggle-engineer-mode-in-profile",onClick:j,className:`px-3.5 py-1.5 rounded-xl border text-xs font-semibold tracking-wide transition shadow-md flex items-center gap-2 ${x?"bg-amber-500/25 border-amber-500/60 text-amber-200 shadow-amber-500/20":"bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"}`,children:[l.jsx("div",{className:`w-2 h-2 rounded-full ${x?"bg-amber-400 animate-ping":"bg-neutral-500"}`}),l.jsx("span",{children:x?"Инженер Включен":"Включить Инж"})]})]}),x&&l.jsxs("div",{className:"p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 flex items-center justify-between animate-in fade-in duration-150",children:[l.jsx("span",{children:"Панель управления инженера и телеметрия FPS активированы на холсте."}),l.jsx("button",{onClick:s,className:"px-2.5 py-1 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-[11px] font-semibold transition",children:"Перейти на холст"})]})]})]}),l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-t border-neutral-800/80 bg-neutral-900/40 text-xs",children:[l.jsx("span",{className:"text-neutral-500 font-mono text-[11px]",children:"Алгоритм Резонанса: Косинусная близость 5D • Золотой угол 137.5°"}),l.jsx("button",{id:"close-profile-btn",onClick:s,className:"px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition",children:"Закрыть"})]})]})}):null,of=["Пробуждение золотой спирали φ...","Синтез гармоник и фрактальных октав...","Рождение трехмерного континуума...","Погружение в бесконечность..."],U2=({isReady:p,onFinished:s})=>{const[f,u]=k.useState(0),[v,S]=k.useState(!1),[x,j]=k.useState(!1);return k.useEffect(()=>{const A=setInterval(()=>{u(y=>y<of.length-1?y+1:y)},450);return()=>clearInterval(A)},[]),k.useEffect(()=>{const A=setTimeout(()=>{if(!p){console.warn("[CosmicLoader] Force-dismissing after 15s — engine failed to initialize"),S(!0);const y=setTimeout(()=>{j(!0),s==null||s()},700);return()=>clearTimeout(y)}},15e3);return()=>clearTimeout(A)},[p,s]),k.useEffect(()=>{if(p){const A=setTimeout(()=>{S(!0);const y=setTimeout(()=>{j(!0),s==null||s()},700);return()=>clearTimeout(y)},500);return()=>clearTimeout(A)}},[p,s]),x?null:l.jsxs("div",{id:"cosmic-loader-overlay",className:`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#06050b] text-amber-100 transition-opacity duration-700 ease-out select-none ${v?"opacity-0 pointer-events-none":"opacity-100"}`,children:[l.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-50",style:{background:"radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 12, 28, 0.8) 55%, #06050b 100%)"}}),l.jsxs("div",{className:"relative w-44 h-44 flex items-center justify-center mb-6",children:[l.jsx("div",{className:"absolute inset-0 rounded-full border border-amber-500/20 animate-ping opacity-20",style:{animationDuration:"3s"}}),l.jsx("div",{className:"absolute inset-3 rounded-full border border-amber-400/25 animate-pulse",style:{animationDuration:"2.4s"}}),l.jsx("div",{className:"absolute inset-7 rounded-full border border-dashed border-amber-500/30 animate-[spin_32s_linear_infinite]"}),l.jsxs("svg",{viewBox:"0 0 160 160",className:"w-36 h-36 text-amber-400 animate-[spin_28s_linear_infinite]",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"spiralGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#fef08a",stopOpacity:"0.95"}),l.jsx("stop",{offset:"45%",stopColor:"#f59e0b",stopOpacity:"0.8"}),l.jsx("stop",{offset:"100%",stopColor:"#b45309",stopOpacity:"0.4"})]}),l.jsxs("filter",{id:"softGlow",children:[l.jsx("feGaussianBlur",{stdDeviation:"1.5",result:"coloredBlur"}),l.jsxs("feMerge",{children:[l.jsx("feMergeNode",{in:"coloredBlur"}),l.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),[0,45,90,135,180,225,270,315].map((A,y)=>l.jsxs("g",{transform:`rotate(${A} 80 80)`,children:[l.jsx("path",{d:"M 80,80 Q 95,60 115,68 T 132,45",fill:"none",stroke:"url(#spiralGold)",strokeWidth:1.2,strokeLinecap:"round",opacity:.75,filter:"url(#softGlow)"}),l.jsx("path",{d:"M 80,80 C 88,65 106,60 118,74 C 104,82 92,86 80,80 Z",fill:"none",stroke:"#f59e0b",strokeWidth:"0.8",opacity:"0.5"}),l.jsx("circle",{cx:"118",cy:"74",r:"1.8",fill:"#fde68a",opacity:"0.8"})]},y)),l.jsx("circle",{cx:"80",cy:"80",r:"4.5",fill:"#fef3c7",filter:"url(#softGlow)"})]}),l.jsx("div",{className:"absolute w-6 h-6 rounded-full bg-amber-400/50 blur-[4px] shadow-[0_0_24px_#f59e0b] animate-pulse"})]}),l.jsxs("div",{className:"text-center px-4 space-y-1.5 mb-6",children:[l.jsx("h1",{className:"text-2xl sm:text-3xl font-light tracking-[0.28em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400",children:"ФРАКТАЛЬНЫЙ КОНТИНУУМ"}),l.jsx("p",{className:"text-[11px] uppercase tracking-[0.3em] text-amber-200/55 font-mono",children:"Живая Геометрия • 100+ Канонических Форм • φ = 1.618"})]}),l.jsxs("div",{className:"w-64 max-w-[80vw] flex flex-col items-center",children:[l.jsx("div",{className:"w-full h-1 bg-neutral-900/80 rounded-full overflow-hidden mb-2.5 border border-amber-500/20 shadow-inner",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200 transition-all duration-500 ease-out",style:{width:`${Math.min(100,(f+1)*25)}%`}})}),l.jsx("p",{className:"text-xs text-amber-300/80 font-mono tracking-wide text-center h-5 transition-all",children:of[f]})]}),l.jsx("div",{className:"absolute bottom-5 text-[10px] text-amber-500/35 font-mono tracking-widest uppercase",children:"WebGPU & WebGL2 • 60–250 FPS • Нейроэстетика"})]})},F2=({isOpen:p,onClose:s,isFirstVisit:f=!1,onOpenAtlas:u})=>{if(!p)return null;const v=()=>{try{localStorage.setItem("phi_manifest_seen","true")}catch{}s()},S=()=>{v(),u==null||u()};return l.jsx("div",{id:"project-manifest-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300",onClick:v,children:l.jsxs("div",{id:"project-manifest-modal-content",className:"relative w-full max-w-2xl my-6 bg-[#090812] border border-amber-500/30 rounded-3xl shadow-[0_0_60px_rgba(245,158,11,0.15)] text-slate-200 overflow-hidden",onClick:x=>x.stopPropagation(),children:[l.jsx("div",{className:"h-1 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-yellow-200"}),l.jsx("button",{id:"btn-close-manifest-modal",onClick:v,className:"absolute top-4 right-4 p-2 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors border border-white/5",title:"Закрыть",children:l.jsx(fl,{className:"w-5 h-5"})}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-col items-center text-center space-y-3 pt-2",children:[l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 rounded-full bg-amber-500/20 blur-md animate-pulse"}),l.jsxs("svg",{viewBox:"0 0 100 100",className:"w-14 h-14 text-amber-400 animate-[spin_40s_linear_infinite]",children:[l.jsx("polygon",{points:"50,5 95,38 78,92 22,92 5,38",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:"0.7"}),l.jsx("polygon",{points:"50,5 78,92 5,38 95,38 22,92",fill:"none",stroke:"#fbbf24",strokeWidth:"1.8",opacity:"0.9"}),l.jsx("circle",{cx:"50",cy:"50",r:"3",fill:"#fef08a"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-mono tracking-wider uppercase mb-2",children:[l.jsx(gi,{className:"w-3 h-3 text-amber-400"}),l.jsx("span",{children:"3D Резонатор • Золотое Сечение φ"})]}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-light tracking-wide text-white",children:"Живая Вселенная Фракталов"}),l.jsx("p",{className:"text-sm text-slate-300/80 max-w-lg mx-auto leading-relaxed mt-1",children:"Гармония математических констант, бесконечная глубина и аппаратный 3D-реймаршинг в реальном времени."})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-left",children:[l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-amber-400 font-medium text-xs",children:[l.jsx(Ar,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"100+ Канонических Форм"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Снежинки Коха, кривые дракона, 3D Мандельбульбы, квантовая бабочка Хофштадтера и странные аттракторы."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-medium text-xs",children:[l.jsx(vi,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"Живой Морфинг & Слияние"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Бесшовное перетекание геометрий и синтез невиданных гибридных форм по законам золотого сечения."})]}),l.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-400/30 transition-all space-y-1.5",children:[l.jsxs("div",{className:"flex items-center gap-2 text-purple-400 font-medium text-xs",children:[l.jsx(t2,{className:"w-4 h-4 text-purple-400"}),l.jsx("span",{children:"Гармоники Звука φ"})]}),l.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:"Генеративный медитативный дрон на частотах 432 Гц, модулируемый глубиной реймаршинга SDF."})]})]}),l.jsxs("div",{className:"p-3.5 rounded-2xl bg-amber-500/5 border border-amber-500/15 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs text-slate-300",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(yf,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Вращение"}),": левая кнопка мыши / свайп"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"🔍"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Масштаб"}),": колесо мыши / пинч-зум"]})]}),l.jsx("div",{className:"hidden sm:block text-amber-500/30",children:"•"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-amber-400 font-mono text-xs",children:"📖"}),l.jsxs("span",{children:[l.jsx("strong",{children:"Атлас"}),": выбор из 100+ фигур"]})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row items-center justify-end gap-3",children:[u&&l.jsxs("button",{id:"btn-welcome-open-atlas",onClick:S,className:"w-full sm:w-auto px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-amber-300 hover:text-amber-200 text-xs font-semibold border border-amber-500/30 transition-all flex items-center justify-center gap-2",children:[l.jsx(xi,{className:"w-4 h-4"}),l.jsx("span",{children:"Каталог 100+ Фракталов"})]}),l.jsxs("button",{id:"btn-manifest-start",onClick:v,className:"w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-semibold text-xs shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all flex items-center justify-center gap-1.5 group",children:[l.jsx("span",{children:"Начать погружение"}),l.jsx(xf,{className:"w-4 h-4 group-hover:translate-x-0.5 transition-transform"})]})]})]})]})})},sf=[{id:"geometric_curves",title:"1. Геометрические кривые и L-системы",subtitle:"Линейные пространственно-заполняющие и рекурсивные кривые",iconName:"Compass"},{id:"constructive",title:"2. Плоскостные и пространственные конструктивные",subtitle:"Рекурсивное разбиение симплексов, ковры, губки и упаковки",iconName:"Layers"},{id:"algebraic_complex",title:"3. Алгебраические фракталы (Комплексная динамика)",subtitle:"Отображения на комплексной плоскости ℂ, метод Ньютона и бассейны",iconName:"Infinity"},{id:"multidimensional",title:"4. Многомерные алгебраические фракталы",subtitle:"Кватернионы ℍ, 3D Мандельбульб, Мандельбокс и группы Клейна",iconName:"Box"},{id:"ifs_attractors",title:"5. Системы итерируемых функций (IFS) и аттракторы",subtitle:"Странные аттракторы динамических систем и нелинейный хаос",iconName:"Activity"},{id:"stochastic",title:"6. Стохастические (Случайные) и шумы",subtitle:"Фрактальный перлин, перколяция, DLA-кластеры и лавинный пробой",iconName:"Sparkles"},{id:"topological_physical",title:"7. Физические и топологические концепции",subtitle:"Бабочка Хофштадтера, множества Кантора и зацепления торов",iconName:"Atom"},{id:"expanded_real",title:"8. Расширенный каталог реальных фракталов",subtitle:"Странные аттракторы, комплексная динамика, TPMS, IFS и физические паттерны",iconName:"FlaskConical"}],ul=[{id:"koch-curve",name:"Кривая Коха",englishName:"Koch Curve",category:"geometric_curves",formula:"L_{n+1} = (4/3) L_n",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"F → F+F--F+F (угол 60°)",description:"Итеративное деление отрезка на 3 части и замена средней части равносторонним треугольником без основания. Непрерывна, но нигде не дифференцируема.",phiPiRelation:"Углы поворота 60° = π/3 задают гексагональную симметрию; золотая модификация использует масштаб 1/φ вместо 1/3.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"koch-snowflake",name:"Снежинка Коха",englishName:"Koch Snowflake",category:"geometric_curves",formula:"A_∞ = (8/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F+F--F+F",description:"Замкнутая кривая Коха, построенная на сторонах правильного треугольника. Ограничивает конечную площадь при бесконечном периметре.",phiPiRelation:"Отношение площадей итераций выражается через тригонометрию π/3 и масштабные степени.",enginePreset:{type:"fibonacciSnowflake",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"koch-antisnowflake",name:"Антиснежинка Коха",englishName:"Koch Anti-Snowflake",category:"geometric_curves",formula:"A_∞ = (2/5) A_0, P_∞ = ∞",dimension:"D = ln(4)/ln(3) ≈ 1.26186",generatorRule:"Аксиома: F--F--F, F → F-F++F-F",description:"Кривая Коха, в которой треугольники направлены внутрь исходного базового треугольника, создавая рекурсивные внутренние фиорды.",phiPiRelation:"Предельная площадь ровно в 4 раза меньше обычной снежинки Коха (2/5 площади треугольника).",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothCarve",zoom:2.9}},{id:"levy-c-curve",name:"Кривая Леви (C-кривая)",englishName:"Lévy C curve",category:"geometric_curves",formula:"s = 1/√2, θ = 45° = π/4",dimension:"D = 2 (по границе D ≈ 1.9340)",generatorRule:"F → +F--F+",description:"Итеративное замещение отрезка равнобедренным прямоугольным треугольником без основания. Имеет непустую внутренность.",phiPiRelation:"Вращение на π/4; масштабирование 1/√2 связано с золотым сечением через диагональ единичного квадрата.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothMorph",zoom:2.6,rotX:.3}},{id:"harter-heighway-dragon",name:"Дракон Хартера — Хейтуэя",englishName:"Harter-Heighway Dragon",category:"geometric_curves",formula:"f_1(z) = (1+i)z/2, f_2(z) = 1 - (1-i)z/2",dimension:"D = 2 (граница D ≈ 1.5236)",generatorRule:"X → X+YF+, Y → -FX-Y (угол 90° = π/2)",description:"Фрактальная кривая, получаемая многократным складыванием полоски бумаги пополам под углом 90°. Замощает плоскость без перекрытий.",phiPiRelation:"Длина контура растет как 2^(n/2); граница дракона связана с корнями уравнения x³ - x² - 2 = 0.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:2.7}},{id:"twenmey-dragon",name:"Дракон Твенми",englishName:"Twenmey Dragon",category:"geometric_curves",formula:"θ_n = (-1)^n · π/2",dimension:"D = 2.0 (граница D ≈ 1.58)",generatorRule:"Чередование знака угла поворота на каждом шаге итерации",description:"Вариация дракона Хартера-Хейтуэя с инверсией знака ориентации складок, приводящая к квазипериодическим симметриям.",phiPiRelation:"Фазовое чередование знаков аналогично филлотаксисному шагу золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.35,zoom:2.5}},{id:"golden-dragon",name:"Золотой дракон",englishName:"Golden Dragon Curve",category:"geometric_curves",formula:"r_1 = 1/φ, r_2 = 1/φ², r_1² + r_2² = 1",dimension:"D = 2.0 (самоподобие φ)",generatorRule:"Деление отрезка в отношении золотого сечения 1:φ",description:"Фрактальная ломаная, где отрезки делятся в строгих пропорциях золотого сечения φ, а углы поворота определяются золотым треугольником.",phiPiRelation:"Фундаментальная связь: масштабные множители равны 1/φ и 1/φ², угол θ = arccos(1/(2φ)).",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.6}},{id:"minkowski-curve",name:"Кривая Минковского (Сосиска Минковского)",englishName:"Minkowski Sausage",category:"geometric_curves",formula:"N = 8, S = 4",dimension:"D = ln(8)/ln(4) = 1.500",generatorRule:"F → F+F-F-FF+F+F-F (угол 90°)",description:"Замена отрезка ломаной из 8 ортогональных сегментов длиной 1/4. Обладает размерностью ровно 1.5.",phiPiRelation:"Ортогональная дискретность π/2; целое полуцелое значение размерности.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothMorph",boxFold:1.5,zoom:3.1}},{id:"peano-curve",name:"Кривая Пеано",englishName:"Peano Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]², N = 9, S = 3",dimension:"D = ln(9)/ln(3) = 2.000",generatorRule:"F → F+F-F-F-F+F+F+F-F (угол 90°)",description:"Первая непрерывная кривая, полностью заполняющая двумерный квадрат. Построена Джузеппе Пеано в 1890 году.",phiPiRelation:"Сюръективное непрерывное отображение; шаг дискретизации π/2.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:2.9}},{id:"hilbert-curve",name:"Кривая Гильберта 2D/3D",englishName:"Hilbert Space-Filling Curve",category:"geometric_curves",formula:"f: [0, 1] ↠ [0, 1]^d, N = 2^{dn}",dimension:"D = 2.0 (в 3D D = 3.0)",generatorRule:"L-система обхода ячеек 2^n x 2^n",description:"Непрерывная пространственно-заполняющая кривая, сохраняющая топологическую локальность точек. В 3D плотно заполняет куб.",phiPiRelation:"Оптимальное кодирование пространственных данных; гармонический спектр обхода связан с золотым сечением.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothUnion",zoom:3.2,rotX:.45,rotY:.35}},{id:"sierpinski-curve",name:"Кривая Серпинского",englishName:"Sierpiński Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2) = 2.0",dimension:"D = 2.000",generatorRule:"Замкнутый маршрут вокруг треугольников сетки",description:"Замкнутая пространственно-заполняющая кривая, огибающая элементы треугольной решетки с гладкими скруглениями.",phiPiRelation:"Углы поворота 45° (π/4) и 90° (π/2).",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"moore-curve",name:"Кривая Мура",englishName:"Moore Curve",category:"geometric_curves",formula:"N = 4^n, S = 2^n",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"Замкнутый вариант кривой Гильберта",description:"Замкнутая непрерывная пространственно-заполняющая кривая, начинающаяся и заканчивающаяся в смежных точках.",phiPiRelation:"Симметричный квадрантный обход, кратный π/2.",enginePreset:{type:"hilbertCurve3D",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.25,zoom:3}},{id:"gosper-curve",name:"Кривая Госпера (Flowsnake)",englishName:"Gosper Curve (Flowsnake)",category:"geometric_curves",formula:"N = 7, S = √7",dimension:"D = ln(7)/ln(√7) = 2.000",generatorRule:"L-система на гексагональной сетке (угол 60° = π/3)",description:"Пространственно-заполняющая кривая на основе гексагональной решетки. Граница фрактала имеет размерность ln(3)/ln(√7) ≈ 1.1291.",phiPiRelation:"Гексагональная симметрия 2π/6; в 3D сворачивается в икосаэдрическую квазикристаллическую упаковку.",enginePreset:{type:"quasicrystal",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"cesaro-curve",name:"Кривая Чезаро",englishName:"Cesàro Curve",category:"geometric_curves",formula:"D = ln(4)/ln(2(1 + cos α))",dimension:"D ∈ (1.0, 2.0] при α ∈ (0, π/2)",generatorRule:"Кривая Коха с переменным углом при вершине",description:"Обобщение кривой Коха с изменением угла α отсекаемого равнобедренного треугольника. При α → 90° кривая заполняет квадрат.",phiPiRelation:"При угле α = 2 arcsin(1/(2φ)) масштаб деления точно равен золотому отношению φ.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"domainWarp",warpStrength:.3,zoom:2.7}},{id:"drummond-curve",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ = π / k, k ∈ ℝ",dimension:"D ≈ 1.45 - 1.85",generatorRule:"Циклические L-системы с дробными иррациональными углами",description:"Фрактал на основе L-систем с дробными углами поворота, порождающий квазипериодические розетки.",phiPiRelation:"Когда угол равен золотому углу 2π/φ², кривая не замыкается, образуя бесконечно плотный квазикристалл.",enginePreset:{type:"phyllotaxis",compositeOp:"goldenSpiralFold",zoom:2.6}},{id:"mcwhorter-pentigree",name:"Снежинка Коха — МакВортера",englishName:"McWhorter Pentigree",category:"geometric_curves",formula:"N = 5, S = (3 - √5)/2",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.672",generatorRule:"Асимметричный пентагональный генератор",description:"Обобщение кривой Коха с заменой отрезков асимметричными генераторами с пентагональной и золотой симметрией.",phiPiRelation:"Масштаб генератора прямо выражается через степени золотого сечения φ = (1+√5)/2.",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",zoom:2.5}},{id:"rice-curve",name:"Кривая Райса",englishName:"Rice Curve",category:"geometric_curves",formula:"θ_1 = π/3, θ_2 = 2π/5",dimension:"D ≈ 1.78",generatorRule:"Неортогональные развороты в пространственно-заполняющих кривых",description:"Вариация пространственно-заполняющих кривых с разворотом на неортогональные углы и переменными длинами звеньев.",phiPiRelation:"Сочетание углов π/3 и пентагональных пропорций золотого угла.",enginePreset:{type:"dragonCurveIFS",hybridType:"quasicrystal",compositeOp:"smoothUnion",hybridBlend:.3,zoom:2.8}},{id:"polya-curve",name:"Кривая Пойи",englishName:"Pólya Sweep Curve",category:"geometric_curves",formula:"T → T_1 ∪ T_2",dimension:"D = 2.000",generatorRule:"Рекурсивный обход прямоугольного треугольника с высотой",description:"Предельный случай непрерывного блуждания кривой, заполняющей прямоугольный треугольник делением высотой на подобные части.",phiPiRelation:"Для треугольника Кеплера стороны относятся как 1 : √φ : φ, а площадь делится в золотой пропорции.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.7}},{id:"sierpinski-arrowhead",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"X → YF+XF+Y, Y → XF-YF-X (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Двухсимвольная L-система сходящаяся к треугольнику",description:"Непрерывная кривая, которая в топологическом пределе точно сходится к треугольнику Серпинского без самопересечений.",phiPiRelation:"Углы 60° = π/3; топологический предел совпадает с фракталом Хаусдорфовой размерности ln 3 / ln 2.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothUnion",zoom:2.9}},{id:"sierpinski-triangle",name:"Треугольник Серпинского",englishName:"Sierpiński Triangle",category:"constructive",formula:"N = 3, S = 2",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Удаление центрального перевернутого треугольника",description:"Классический конструктивный фрактал: из равностороннего треугольника исключается центральный перевернутый треугольник.",phiPiRelation:"Связан с треугольником Паскаля по модулю 2; предельные диагонали сходятся к числам Фибоначчи.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.8}},{id:"sierpinski-carpet",name:"Ковер Серпинского",englishName:"Sierpiński Carpet",category:"constructive",formula:"N = 8, S = 3",dimension:"D = ln(8)/ln(3) ≈ 1.89279",generatorRule:"Деление квадрата на 9 частей, удаление центрального",description:"Двумерный аналог канторова множества: квадрат делится на 9 квадратов, центральный удаляется, процесс повторяется для остальных 8.",phiPiRelation:"Универсальная плоская кривая Менгера; мера Лебега стремится к 0.",enginePreset:{type:"menger",compositeOp:"smoothMorph",boxFold:1,zoom:2.9}},{id:"menger-sponge",name:"Губка Менгера",englishName:"Menger Sponge",category:"constructive",formula:"N = 20, S = 3, V_∞ = 0, A_∞ = ∞",dimension:"D = ln(20)/ln(3) ≈ 2.72683",generatorRule:"Куб делится на 27 кубиков, удаляются 7 центральных",description:"Трехмерный аналог ковра Серпинского. Обладает нулевым 3D объемом, но бесконечной площадью внутренней поверхности полостей.",phiPiRelation:"Универсальное одномерное континуум-многообразие; золотой срез образует икосаэдрические сечения.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1.2,zoom:3.1}},{id:"pythagoras-tree-classic",name:"Дерево Пифагора классическое",englishName:"Pythagoras Tree (Symmetric)",category:"constructive",formula:"a² + b² = c², a = b = c/√2",dimension:"D = 2.0 (перекрытия в пределе)",generatorRule:"Построение квадратов на сторонах прямоугольного равнобедренного треугольника",description:"Фрактал, построенный из квадратов на катетах и гипотенузе прямоугольного треугольника с углами 45°-45°-90° (π/4).",phiPiRelation:"Теорема Пифагора и единичная окружность; при замене катетов на пропорцию 1:φ ветвление становится несамопересекающимся.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",zoom:2.6,rotX:.35}},{id:"pythagoras-tree-windblown",name:"Дерево Пифагора обдуваемое",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"α = 60° (π/3), β = 30° (π/6)",dimension:"D ≈ 1.85",generatorRule:"Разноугольное ветвление прямоугольного треугольника",description:"Вариация дерева Пифагора с неравными углами при вершине треугольника, создающая эффект органического дерева, гнущегося на ветру.",phiPiRelation:"Отношение катетов 1:√3 или 1:φ порождает спирали логарифмического закручивания.",enginePreset:{type:"pythagorasTree3D",compositeOp:"goldenSpiralFold",warpStrength:.3,zoom:2.7}},{id:"pythagoras-tree-naked",name:"Обнаженное дерево Пифагора",englishName:"Naked Pythagoras Tree",category:"constructive",formula:"Граф центров квадратов G(V, E)",dimension:"D ≈ 1.73",generatorRule:"Отрезки соединяют только центры смежных квадратов",description:"Скелетный древовидный граф, построенный только по отрезкам, соединяющим геометрические центры квадратов дерева Пифагора.",phiPiRelation:"Длины ребер образуют геометрическую прогрессию со знаменателем 1/√2 или 1/φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"domainWarp",warpStrength:.25,zoom:2.8}},{id:"apollonian-gasket",name:"Сетка Аполлония (Упаковка Аполлония)",englishName:"Apollonian Gasket / Sphere Packing",category:"constructive",formula:"(k_1+k_2+k_3+k_4)² = 2(k_1²+k_2²+k_3²+k_4²)",dimension:"D ≈ 1.30568 (в 3D D ≈ 2.4739)",generatorRule:"Теорема Содди о четырех касающихся окружностях",description:"Фрактальная упаковка касающихся окружностей или сфер, рекурсивно заполняющая все криволинейные треугольные пустоты между ними.",phiPiRelation:"Окружности связаны с комплексными дробями и числом π; золотая инверсия сфер создает бесконечные кластеры.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",sphereFold:.75,zoom:3}},{id:"vicsek-fractal",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Box / Cross)",category:"constructive",formula:"N = 5, S = 3",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Деление квадрата на 9 частей, сохранение центрального креста",description:"Деление квадрата на 9 клеток с удалением 4 угловых квадратов (сохранение греческого креста). Также существует версия с сохранением диагоналей.",phiPiRelation:"Идеальная симметрия группы D_4 (повороты на π/2).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothMorph",boxFold:1.1,zoom:2.9}},{id:"t-square-fractal",name:"Т-квадрат",englishName:"T-Square Fractal",category:"constructive",formula:"A_∞ = 2 A_0",dimension:"D = ln(4)/ln(2) = 2.000 (граница D = ln(3)/ln(2) ≈ 1.585)",generatorRule:"Итеративное наложение уменьшенных квадратов на углы",description:"Квадрат со стороной 1 делится, на каждый из 4 его углов накладывается квадрат с половинной стороной. В пределе площадь удваивается.",phiPiRelation:"Ограниченная фрактальная граница со степенью масштабирования 1/2.",enginePreset:{type:"menger",compositeOp:"domainWarp",warpStrength:.2,zoom:3}},{id:"sierpinski-cross",name:"Крест Серпинского",englishName:"Sierpiński Cross",category:"constructive",formula:"D = ln(5)/ln(3) ≈ 1.465",dimension:"D ≈ 1.465 (в 3D D ≈ 2.32)",generatorRule:"Пространственное пересечение плоскостей Серпинского",description:"Сложная пространственная 3D комбинация взаимно перпендикулярных ковров Серпинского, пересекающихся вдоль осевых сечений.",phiPiRelation:"Инвариантен относительно октаэдрических вращений SO(3).",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"sierpinski-pentagon",name:"Пятиугольник Серпинского (Пентафрактал)",englishName:"Sierpiński Pentagon (Pentaflake)",category:"constructive",formula:"N = 5, S = 1 + 2 cos(2π/5) = 1 + φ = φ²",dimension:"D = ln(5)/ln(1 + φ) = ln(5)/ln(φ²) ≈ 1.67228",generatorRule:"5 копий пятиугольника по углам, удаление центра",description:"Фрактал, образуемый пятью уменьшенными копиями правильного пятиугольника. Масштабный коэффициент в точности равен φ² = 1 + φ.",phiPiRelation:"АБСОЛЮТНАЯ СИНЕРГИЯ φ И π: угол при вершине 2π/5 = 72°, масштабирование определяется золотым сечением φ!",enginePreset:{type:"icosahedral",compositeOp:"smoothMorph",phiMultiplier:1.61803398875,zoom:2.7}},{id:"hexafractal",name:"Гексафрактал (Гексафлейк)",englishName:"Hexaflake",category:"constructive",formula:"N = 7, S = 3",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть копий шестиугольника вокруг центрального седьмого",description:"Шесть копий шестиугольника, расположенных вокруг исходного центрального. Имеет общие черты со снежинкой Коха.",phiPiRelation:"Гексагональные углы 2π/6 = 60° = π/3.",enginePreset:{type:"quasicrystal",compositeOp:"smoothUnion",zoom:2.8}},{id:"ivezic-fractal",name:"Фрактал Ивезича",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n+1)/ln(2)",dimension:"D(3) = 2.0, D(4) = ln(5)/ln(2) ≈ 2.32",generatorRule:"Рекурсивное деление n-мерного регулярного симплекса",description:"Многомерное расширение треугольника Серпинского на n-мерные симплексы с удалением центрального гипермногогранника.",phiPiRelation:"Гиперсферические объемы пропорциональны π^(n/2) / Γ(n/2 + 1).",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"levy-snowflake",name:"Снежинка Леви",englishName:"Lévy Snowflake",category:"constructive",formula:"∂(Lévy C curve ∪ rot)",dimension:"D = 2.0 (граница D ≈ 1.934)",generatorRule:"Замкнутая суперпозиция 8 C-кривых Леви",description:"Граница области, заметаемой замкнутым ансамблем кривых Леви. Имеет гладкую внутренность с фрактальной береговой линией.",phiPiRelation:"Периодичность 2π/8 = π/4.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",zoom:2.7}},{id:"sierpinski-pyramid",name:"Пирамида Серпинского (Тетраэдр Серпинского)",englishName:"Sierpiński Tetrahedron",category:"constructive",formula:"N = 4, S = 2, V_∞ = 0",dimension:"D = ln(4)/ln(2) = 2.000",generatorRule:"4 тетраэдра половинного размера в вершинах",description:"Трехмерный аналог треугольника Серпинского: в правильном тетраэдре оставляются 4 угловых тетраэдра. Нулевой объем при D = 2.0.",phiPiRelation:"Двугранный угол arccos(1/3) связан с геометрией правильного додекаэдра и золотым сечением.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:2.9,rotX:.4}},{id:"mandelbrot-classic",name:"Множество Мандельброта",englishName:"Mandelbrot Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, z_0 = 0",dimension:"D_граница = 2.000 (Теорема Сишая Шишикуры)",generatorRule:"Множество c ∈ ℂ, для которых траектория z_n ограничена",description:"Главная икона фрактальной геометрии. Кардиоида описывается формулой c(t) = (1/2)e^{it} - (1/4)e^{i2t}.",phiPiRelation:"Период лампочек следует ряду Фарея и числу π; числа Фибоначчи задают знаменатели периодов на главной кардиоиде!",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:2.8}},{id:"multibrot-set",name:"Множество Мандельброта высших степеней (Multibrot)",englishName:"Multibrot Set (z^d + c)",category:"algebraic_complex",formula:"z_{n+1} = z_n^d + c, d > 2",dimension:"D = 2.0",generatorRule:"Степень d порождает (d - 1)-лучевую поворотную симметрию",description:"Семейство алгебраических множеств на основе степени d. Центральная фигура имеет d-1 лепестков с симметрией 2π/(d-1).",phiPiRelation:"При степени d = 5 + φ симметрия согласуется с золотым сечением и квазикристаллическим порядком.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"smoothUnion",zoom:2.9}},{id:"julia-set",name:"Множество Жюлиа",englishName:"Julia Set",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c, c = const ∈ ℂ",dimension:"D ∈ (1.0, 2.0] зависит от c",generatorRule:"Множество начальных точек z_0 с ограниченной траекторией",description:"Динамическая система комплексной плоскости при фиксированном c. Связно тогда и только тогда, когда точка c принадлежит множеству Мандельброта.",phiPiRelation:"При золотом параметре c = (φ - 2) + i(φ - 1) множество Жюлиа порождает спирали логарифмического закручивания.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.7}},{id:"filled-julia-set",name:"Заполненное множество Жюлиа",englishName:"Filled Julia Set",category:"algebraic_complex",formula:"K(f) = {z ∈ ℂ: |f^n(z)| ↛ ∞}",dimension:"D_тело = 2.0",generatorRule:"Множество Жюлиа вместе с его внутренней областью притяжения",description:"Топологически замкнутое множество, границей которого является классическое фрактальное множество Жюлиа. В 3D и 4D образует монолитные тела.",phiPiRelation:"Конформный радиус области притяжения инвариантен относительно масштабирования.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothUnion",zoom:2.6}},{id:"newton-fractal",name:"Фрактал Ньютона",englishName:"Newton-Raphson Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n) для z^k - 1 = 0",dimension:"D_граница = 2.0",generatorRule:"Бассейны притяжения комплексных корней полинома",description:"Фрактальные границы между бассейнами сходимости метода Ньютона к различным корням полинома. Границы бесконечно запутаны.",phiPiRelation:"Корни полинома z^n - 1 = 0 лежат на единичной окружности с шагом 2π/n. Золотой шаг фазы порождает квазипериодические бассейны.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:2.9}},{id:"serafimsky-fractal",name:"Фрактал Серафимского",englishName:"Serafimsky Shifted Newton",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{iθ} f(z_n)/f'(z_n)",dimension:"D ≈ 2.0",generatorRule:"Метод Ньютона с комплексным вращением фазового угла θ",description:"Модификация метода Ньютона с добавлением комплексного фазового множителя e^{iθ}, закручивающего бассейны притяжения в спирали.",phiPiRelation:"Когда угол θ равен золотому углу 2π/φ, бассейны закручиваются в самоподобные рукава без пересечений.",enginePreset:{type:"newtonBasins",compositeOp:"goldenSpiralFold",warpStrength:.35,zoom:2.8}},{id:"burning-ship",name:"Фрактал «Пылающий корабль» (Burning Ship)",englishName:"Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D = 2.0",generatorRule:"Абсолютная величина от Re и Im перед возведением в квадрат",description:"Неголоморфная динамическая система. Из-за разрыва производной вдоль осей симметрии возникают характерные мачты, паруса и пламя.",phiPiRelation:"Нарушение условий Коши-Римана; проекция в 3D через гиперкомплексную алгебру дает ребристые корабельные кили.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",zoom:3.1,rotX:.4}},{id:"perpendicular-burning-ship",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| - i Im(z_n))² + c",dimension:"D = 2.0",generatorRule:"Модуль берется только от одной компоненты (вещественной)",description:"Асимметричная модификация Burning Ship, разрушающая осевую зеркальность и создающая односторонние струйные выбросы.",phiPiRelation:"Асимметрия модулирует градиент SDF; гармонические октавы стабилизируют 3D реймаршинг.",enginePreset:{type:"burningShip3D",compositeOp:"domainWarp",warpStrength:.3,zoom:3}},{id:"pickover-biomorphs",name:"Биоморфы Пиковера",englishName:"Pickover Biomorphs",category:"algebraic_complex",formula:"|Re(z_n)| < R ∨ |Im(z_n)| < R",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Условие останова итераций имитирует форму одноклеточных",description:"Множества Клиффорда Пиковера, где проверка на выход из круга заменяется проверкой на близость к осям, создавая биологические формы жгутиков.",phiPiRelation:"Формы радиолярий и спикул подчиняются золотому закону роста Д'Арси Томпсона.",enginePreset:{type:"quaternionJulia",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.7}},{id:"trigonometric-fractal",name:"Тригонометрические фракталы (Фрактал Иисуса)",englishName:"Trigonometric Fractal (sin z + c)",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c ∨ z_{n+1} = e^{z_n} + c",dimension:"D = 2.0",generatorRule:"Трансцендентные целые функции комплексного переменного",description:"Динамические системы на основе тригонометрических и показательных функций, обладающие периодическими вертикальными колоннами.",phiPiRelation:"Периодичность функций синуса равна 2π; модуляция шагом φ создает бесконечные резонансные колонны.",enginePreset:{type:"spiralTunnel",compositeOp:"quantumResonance",zoom:3.2}},{id:"lyapunov-fractal",name:"Карты Ляпунова / Фракталы Ляпунова",englishName:"Lyapunov Fractals / Zircon City",category:"algebraic_complex",formula:"λ = lim (1/N) ∑ ln |f'(x_n)| для последовательности AB",dimension:"D ≈ 2.0 (фрактальные границы стабильности)",generatorRule:"Чередование параметров r_A и r_B логистического отображения",description:"Визуализация старшего показателя Ляпунова динамической системы с чередующимся параметром роста. Желтые области отвечают хаосу, синие — порядку.",phiPiRelation:"Квазипериодическая последовательность Фибоначчи ABAAB... порождает золотой фрактал Ляпунова с максимальным спектром самоподобия.",enginePreset:{type:"primeSpiral",compositeOp:"quantumResonance",zoom:2.8}},{id:"novak-fractal",name:"Множество Новака",englishName:"Novak Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n^p + c, p ∈ ℝ \\ ℚ (например, p = φ)",dimension:"D ≈ 2.0",generatorRule:"Использование иррациональных дробных степеней комплексного числа",description:"Вариация Мандельброта с иррациональной степенью p. Разрез ветви многозначной функции ln z порождает спиральный разрыв симметрии.",phiPiRelation:"При показателе степени p = φ = 1.61803398875 разрыв ветви образует совершенную золотую логарифмическую спираль.",enginePreset:{type:"mandelbulb",phiMultiplier:1.61803398875,compositeOp:"goldenSpiralFold",zoom:2.8}},{id:"spider-fractal",name:"Фрактал «Паук»",englishName:"Spider Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n² + c_n, c_{n+1} = c_n/2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Связанная динамика точки z и параметра c на каждом шаге",description:"Динамическая система, в которой параметр c не фиксирован, а эволюционирует параллельно с переменной z, образуя длинные паутинные нити.",phiPiRelation:"Отношение затухания c_n/2 согласуется с золотой дихотомией.",enginePreset:{type:"quaternionJulia",compositeOp:"domainWarp",warpStrength:.45,zoom:2.9}},{id:"sherwood-carpet",name:"Ковер Шервуда",englishName:"Sherwood Carpet",category:"algebraic_complex",formula:"z_{n+1} = 1 / (z_n^k + c)",dimension:"D ≈ 1.85",generatorRule:"Инверсия комплексных полиномов высших порядков",description:"Алгебраический фрактал, сочетающий инверсию комплексной плоскости 1/w и полиномиальную динамику. Создает кружевные симметричные сети.",phiPiRelation:"Конформные инверсии относительно окружностей радиуса 1 и радиуса φ.",enginePreset:{type:"apollonian",hybridType:"mandelbox",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"quaternion-mandelbrot",name:"Кватернионный Мандельброт 4D",englishName:"4D Quaternion Mandelbrot",category:"multidimensional",formula:"q_{n+1} = q_n² + C, q ∈ ℍ, q_0 = 0",dimension:"D_4D = 4.0, D_3D-сечения = 2.0 - 3.0",generatorRule:"Итерации в теле алгебры кватернионов ℍ (1, i, j, k)",description:"Обобщение Мандельброта на 4D гиперкомплексные числа. Трехмерные гиперплоскостные сечения раскрывают многослойные сферические кардиоиды.",phiPiRelation:"Группа кватернионных вращений Sp(1) ≅ SU(2) ≅ S³; золотые вращения Клиффорда через углы π/φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.25}},{id:"quaternion-julia",name:"Кватернионный Жюлиа 4D",englishName:"4D Quaternion Julia",category:"multidimensional",formula:"q_{n+1} = q_n² + C, C = const ∈ ℍ",dimension:"D ≈ 2.5 - 3.2 в 3D проекции",generatorRule:"4D сечение динамической системы кватернионов при фиксированном векторе C",description:"Фантастические 3D срезы четырехмерного гиперкомплексного фрактала. Поверхность абсолютно гладкая локально, но глобально фрактальная.",phiPiRelation:"Конформность отображений в 4D; золотой вектор C = (φ-1, 1/φ, 0, φ-2).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:2.8}},{id:"mandelbulb-3d",name:"Mandelbulb 3D",englishName:"Mandelbulb 3D (White & Nylander)",category:"multidimensional",formula:"v ↦ r^n (sin(nθ)cos(nψ) i + sin(nθ)sin(nψ) j + cos(nθ) k) + c",dimension:"D ≈ 2.7 - 2.9",generatorRule:"Сферическая трехмерная триплексная арифметика со степенью n = 8 (или 5+φ)",description:"Канонический 3D аналог множества Мандельброта. Сферические координаты возводятся в степень n. Внутри скрыты бесконечные пещеры и залы.",phiPiRelation:"Углы сферических гармоник θ, ψ согласуются с числом π; степень 5+φ связывает икосаэдрическую симметрию с реймаршингом.",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",iterations:24,zoom:3.1}},{id:"mandelbox-3d",name:"Mandelbox 3D",englishName:"Mandelbox 3D (Tom Lowe)",category:"multidimensional",formula:"v ↦ s · sphereFold(boxFold(v)) + c",dimension:"D ≈ 2.3 - 2.8",generatorRule:"Циклическое складывание кубического пространства (box fold) и сферическая инверсия",description:"3D фрактал Тома Лоу. Сочетает кубические сложения пространства abs(p) и сферическую инверсию Кельвина, создавая архитектурные соборы и мосты.",phiPiRelation:"Радиусы сферического сложения r_min = 0.5, r_max = 1.0; масштаб s = -φ² создает идеальную золотую Мандельбокс.",enginePreset:{type:"mandelbox",boxFold:1.2,sphereFold:.65,compositeOp:"smoothUnion",zoom:3.2}},{id:"jerusalem-cube",name:"Иерусалимский куб",englishName:"Jerusalem Cube (Eric Baird)",category:"multidimensional",formula:"Масштаб отверстий 1/φ, D = ln(8+12/φ)/ln(2+√2)",dimension:"D ≈ 2.529",generatorRule:"Вырезание крестообразных отверстий с пропорциями золотого сечения",description:"Трехмерный аналог губки Менгера, где центральные и краевые отверстия имеют форму греческого креста с точными пропорциями золотого сечения φ.",phiPiRelation:"Каждая грань содержит самоподобные золотые кресты; масштабные отношения строго равны φ = (1+√5)/2.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothUnion",zoom:3.1}},{id:"kleinian-groups",name:"Клейниановы группы (Предельные множества)",englishName:"Kleinian Limit Sets / Schottky Groups",category:"multidimensional",formula:"γ(z) = (az+b)/(cz+d) ∈ PSL(2, ℂ)",dimension:"D ≈ 1.3 - 2.7",generatorRule:"Дискретные подгруппы изометрий 3D пространства Лобачевского ℍ³",description:"Фрактальные предельные множества на границе сферы Римана, возникающие при бесконечных итерациях дробно-линейных преобразований Мебиуса.",phiPiRelation:"Изометрии гиперболического пространства ℍ³; золотые узлы и кольца Борромео.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothMorph",zoom:2.9}},{id:"barnsley-fern",name:"Папоротник Барнсли",englishName:"Barnsley Fern IFS",category:"ifs_attractors",formula:"W_k(x) = A_k x + b_k, k ∈ {1, 2, 3, 4}",dimension:"D ≈ 1.85",generatorRule:"4 аффинных сжимающих отображения с вероятностями {0.01, 0.85, 0.07, 0.07}",description:"Знаменитый фрактал Майкла Барнсли, точно моделирующий лист папоротника Black Spleenwort с помощью теоремы о коллаже.",phiPiRelation:"Каждый листочек наклонен под углом, кратным золотому углу; чередование веточек подчиняется ряду Фибоначчи.",enginePreset:{type:"phyllotaxis",hybridType:"pythagorasTree3D",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.8}},{id:"fractal-flames",name:"Фрактальное пламя (Fractal Flames)",englishName:"Fractal Flames (Scott Draves)",category:"ifs_attractors",formula:"F(x) = ∑ w_i V_j(A_i x + b_i)",dimension:"D зависит от нелинейных вариаций",generatorRule:"Нелинейные функции (spherical, swirl, horseshoe), логарифмический рендеринг",description:"Алгоритм Скотта Дрейвса (1992). Расширяет IFS нелинейными тригонометрическими преобразованиями, сглаживанием плотности и цветовой гаммой.",phiPiRelation:"Сферические и спиральные вариации используют sin/cos и золотые фазовые сдвиги.",enginePreset:{type:"hopfFibration",hybridType:"spiralTunnel",compositeOp:"quantumResonance",hybridBlend:.45,zoom:3}},{id:"lorenz-attractor",name:"Странный аттрактор Лоренца",englishName:"Lorenz Strange Attractor",category:"ifs_attractors",formula:"dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy - βz",dimension:"D_каплана-йорке ≈ 2.06 ± 0.01",generatorRule:"Система 3 дифференциальных уравнений конвекции жидкости (σ=10, ρ=28, β=8/3)",description:"Классический «эффект бабочки» Эдварда Лоренца (1963). Фазовая траектория никогда не самопересекается, образуя два притягивающих крыла.",phiPiRelation:"Отношение собственных значений в седло-узлах согласуется с универсальными константами Фейгенбаума.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothMorph",zoom:3.2,rotX:.3,rotY:.4}},{id:"rossler-attractor",name:"Аттрактор Рёсслера",englishName:"Rössler Attractor",category:"ifs_attractors",formula:"dx/dt = -y - z, dy/dt = x + ay, dz/dt = b + z(x - c)",dimension:"D ≈ 2.01",generatorRule:"Нелинейная система с полуторакратным спиральным закручиванием и сгибом ленты",description:"Система Отто Рёсслера (1976), спроектированная как простейший генератор хаоса со складыванием фазовой плоскости аналогично ленте Мебиуса.",phiPiRelation:"Лента Мебиуса имеет поворот на π; золотое сечение регулирует переход от каскада удвоения периода к хаосу.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothUnion",zoom:2.9}},{id:"ikeda-attractor",name:"Аттрактор Икеды",englishName:"Ikeda Map Attractor",category:"ifs_attractors",formula:"z_{n+1} = A + B z_n e^{i(|z_n|² + C)}",dimension:"D ≈ 1.7",generatorRule:"Двумерное отображение света в кольцевом оптическом резонаторе",description:"Модель Кэнсукэ Икеды (1979) для лазерного импульса, циркулирующего в нелинейном диэлектрическом кольцевом интерферометре.",phiPiRelation:"Фазовый набег e^{iθ} пропорционален интенсивности; кольцевая геометрия опирается на константу 2π.",enginePreset:{type:"spiralTunnel",compositeOp:"domainWarp",warpStrength:.4,zoom:2.8}},{id:"clifford-attractor",name:"Аттрактор Клиффорда",englishName:"Clifford Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D ≈ 1.6 - 1.9",generatorRule:"Синусно-косинусное полиномиальное отображение с 4 параметрами",description:"Аттрактор Клиффорда Пиковера. Рождает гладкие переливающиеся шелковые складки и гравитационные воронки.",phiPiRelation:"Когда коэффициенты a, b, c, d кратны золотому числу φ, траектории распределяются с квазикристаллической плотностью.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:2.9}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"Peter de Jong Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) - cos(b x_n), y_{n+1} = sin(c x_n) - cos(d y_n)",dimension:"D ≈ 1.8",generatorRule:"Симметричное тригонометрическое отображение Петера де Йонга",description:"Порождает полупрозрачные дымчатые вихри и многоуровневые тороидальные драпировки.",phiPiRelation:"При аргументах (a, b) = (φ, π) система демонстрирует предельно стабильный квазипериодический хаос.",enginePreset:{type:"cliffordTorus4D",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3}},{id:"henon-attractor",name:"Аттрактор Хенона",englishName:"Hénon Attractor",category:"ifs_attractors",formula:"x_{n+1} = 1 - a x_n² + y_n, y_{n+1} = b x_n (a=1.4, b=0.3)",dimension:"D ≈ 1.261 ± 0.003",generatorRule:"Дискретная диссипативная система Мишеля Эно (1976)",description:"Двумерное квадратичное сжимающее отображение, демонстрирующее поперечную структуру Канторова множества тончайших слоев.",phiPiRelation:"Является сечением Пуанкаре для непрерывной 3D системы; масштаб сжатия b связан с сохранением площади.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:2.7}},{id:"humboldt-attractor",name:"Аттрактор Гумбольдта",englishName:"Humboldt Flow Attractor",category:"ifs_attractors",formula:"dxdt = v_oceanic(x, φ, t)",dimension:"D ≈ 2.15",generatorRule:"IFS-система, имитирующая турбулентные океанические вихри",description:"Моделирует перенос пассивной примеси в когерентных вихревых структурах океанического течения Гумбольдта.",phiPiRelation:"Логарифмические спирали вихрей имеют золотой угол раскрутки.",enginePreset:{type:"gyroid",compositeOp:"goldenSpiralFold",zoom:3.1}},{id:"perlin-noise",name:"Фрактальный шум Перлина",englishName:"Fractal Perlin Noise (fBm)",category:"stochastic",formula:"f(x) = ∑_{k=0}^m 2^{-k H} P(2^k x)",dimension:"D = 3 - H, где H — показатель Херста",generatorRule:"Градиентный шум Кена Перлина, суммируемый по октавам",description:"Основа процедурной компьютерной графики (Оскар Кену Перлину, 1997). Сумма октав псевдослучайных интерполированных градиентов.",phiPiRelation:"Использование шага октав λ = φ вместо 2.0 устраняет directional artifacts и делает шум изотропным.",enginePreset:{type:"neoviusMinimal",compositeOp:"domainWarp",warpStrength:.35,zoom:3}},{id:"simplex-noise",name:"Симплексный шум (Simplex Noise)",englishName:"Simplex Noise",category:"stochastic",formula:"Разбиение пространства на симплексы Шлефли A_n",dimension:"D = 3 - H",generatorRule:"Замена гиперкубической сетки на симплексную решетку",description:"Второе поколение шума Перлина (2001). Вычислительная сложность масштабируется как O(n²) вместо O(2^n), артефакты направленности устранены.",phiPiRelation:"Геометрия правильного 3D симплекса (тетраэдра) и икосаэдрическая плотная упаковка.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.1}},{id:"diamond-square",name:"Алгоритм Diamond-Square (Плазма)",englishName:"Diamond-Square Plasma Fractal",category:"stochastic",formula:"h_{mid} = ⟨h_{corners}⟩ + random() · 2^{-i H}",dimension:"D = 3 - H ∈ (2.0, 3.0)",generatorRule:"Рекурсивное чередование шагов ромба и квадрата по сетке",description:"Классический метод синтеза фрактального рельефа гор и облаков Миллера и Фурнье (1982) с масштабным самоподобием.",phiPiRelation:"Отношение диагоналей квадрата √2; затухание амплитуд через степени золотого сечения 1/φ^k дает природную эрозию.",enginePreset:{type:"dlaCluster",compositeOp:"smoothMorph",zoom:2.8}},{id:"fractional-brownian-motion",name:"Дробное броуновское движение (fBm)",englishName:"Fractional Brownian Motion (fBm)",category:"stochastic",formula:"E[B_H(t) B_H(s)] = (1/2)(|t|^{2H} + |s|^{2H} - |t-s|^{2H})",dimension:"D = n + 1 - H (Мандельброт и Ван Несс, 1968)",generatorRule:"Гауссовский процесс с долговременной корреляцией и параметром Херста H",description:"Обобщение броуновского движения. При H > 1/2 процесс персистентен (тренд сохраняется), при H < 1/2 — антиперсистентен.",phiPiRelation:"Золотое значение H = 1/φ ≈ 0.618 описывает турбулентность Колмогорова и биржевую волатильность.",enginePreset:{type:"dlaCluster",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:2.9}},{id:"dla-cluster",name:"Диффузионно-ограниченная агрегация (ДОА / DLA)",englishName:"Diffusion-Limited Aggregation (DLA)",category:"stochastic",formula:"N(r) ∝ r^{D_{DLA}}",dimension:"D ≈ 1.71 (2D), D ≈ 2.50 (3D) (Виттен и Сандер, 1981)",generatorRule:"Случайное блуждание броуновских частиц и их слипание с растущим кластером",description:"Физическая модель роста кристаллов, электроосаждения металлов, дендритов минералов и пробоя диэлектриков.",phiPiRelation:"Вращательное броуновское блуждание с шагом 2π; золотые ветвления предотвращают экранирование внутренних полостей.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.25}},{id:"percolation-clusters",name:"Кластеры перколяции",englishName:"Percolation Lattice Clusters",category:"stochastic",formula:"P(p) ∝ (p - p_c)^β при p → p_c",dimension:"D_{perc} = 91/48 ≈ 1.896 (2D), D ≈ 2.52 (3D)",generatorRule:"Случайное заполнение узлов решетки с критической вероятностью p_c",description:"Статистическая модель протекания жидкости через пористую среду или проводимости проводящих пленок при критическом пороге связи.",phiPiRelation:"Конформная теория поля (CFT), формула Карди и критические показатели, выражаемые через модулярные формы с числом π.",enginePreset:{type:"neoviusMinimal",compositeOp:"fractalLattice",zoom:3.1}},{id:"dielectric-breakdown",name:"Фрактал лавинного пробоя (Фигуры Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM / Lichtenberg)",category:"stochastic",formula:"∇² Φ = 0, p_{ij} ∝ |∇ Φ|^η (Нимейер, Пьетронеро, Визман)",dimension:"D ≈ 1.75 при η = 1",generatorRule:"Решение уравнения Лапласа для электростатического потенциала с ростом разряда",description:"Физическая модель молнии и высоковольтного пробоя диэлектриков. Разряд распространяется по пути максимального градиента поля.",phiPiRelation:"Электростатика потенциалов Лапласа и конформные отображения плоскости $w = f(z)$.",enginePreset:{type:"dlaCluster",compositeOp:"domainWarp",warpStrength:.4,zoom:3}},{id:"hofstadter-butterfly",name:"Бабочка Хофштадтера",englishName:"Hofstadter Butterfly",category:"topological_physical",formula:"ψ_{m+1} + ψ_{m-1} + 2 cos(2π m α - ν) ψ_m = E ψ_m (Уравнение Харпера)",dimension:"D(E) фрактальное канторово множество разрешенных энергий",generatorRule:"Спектр энергии электрона в периодической 2D решетке в магнитном поле α = Φ/Φ_0",description:"Квантовый фрактал Дугласа Хофштадтера (1976). График разрешенных энергетических зон блоховского электрона в зависимости от магнитного потока.",phiPiRelation:"АБСОЛЮТНЫЙ КВАНТОВЫЙ РЕЗОНАНС: при иррациональном потоке α = 1/φ спектр становится канторовым множеством нулевой меры Лебега!",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3}},{id:"richardson-fractal",name:"Фрактал Ричардсона (Эффект береговой линии)",englishName:"Richardson Coastline Fractal Effect",category:"topological_physical",formula:"L(ε) ∝ ε^{1 - D} (Льюис Фрай Ричардсон)",dimension:"D_Британия ≈ 1.25, D_Норвегия ≈ 1.52",generatorRule:"Зависимость длины границы от масштаба измерительного инструмента ε",description:"Открытие Ричардсона (1961), легшее в основу книги Бенуа Мандельброта: длина географической границы неограниченно растет при уменьшении шага линейки.",phiPiRelation:"Скейлинг конформной береговой линии согласуется с броуновскими петлями SLE_{6/3}.",enginePreset:{type:"fibonacciSnowflake",hybridType:"dlaCluster",compositeOp:"smoothUnion",hybridBlend:.4,zoom:2.8}},{id:"cantor-set",name:"Канторово множество (Канторова лестница)",englishName:"Cantor Ternary Set",category:"topological_physical",formula:"C = ⋂_{n=1}^∞ E_n, L_∞ = 0, |C| = 2^{ℵ_0}",dimension:"D = ln(2)/ln(3) ≈ 0.63093",generatorRule:"Исключение открытой средней трети (1/3, 2/3) из отрезка [0, 1]",description:"Фундаментальный топологический объект Георга Кантора (1883). Содержит столько же точек, сколько весь отрезок ℝ, но имеет нулевую меру Лебега.",phiPiRelation:"Золотое канторово множество вырезает средний интервал длиной 1/φ², оставляя два отрезка длиной 1/φ.",enginePreset:{type:"menger",compositeOp:"smoothCarve",boxFold:1.4,zoom:3}},{id:"cantor-dust",name:"Пыль Кантора",englishName:"Cantor Dust",category:"topological_physical",formula:"C_d = C × C × ... × C (d-кратное прямое произведение)",dimension:"D = d · ln(2)/ln(3) (для d=2 D ≈ 1.2618, d=3 D ≈ 1.8928)",generatorRule:"Многомерное декартово произведение одномерных множеств Кантора",description:"Вполне несвязное компактное пространство в ℝ² и ℝ³. В астрофизике используется для моделирования крупномасштабного распределения галактик во Вселенной.",phiPiRelation:"Описывает кластеризацию материи в космических войдах с золотым масштабным фактором.",enginePreset:{type:"apollonian",compositeOp:"smoothCarve",sphereFold:.8,zoom:2.9}},{id:"antoine-necklace",name:"Ожерелье Антуана",englishName:"Antoine's Necklace",category:"topological_physical",formula:"X = ⋂_{i=1}^∞ A_i, где A_i — цепи зацепленных торов",dimension:"D_топологическая = 0, D_Хаусдорфа > 0",generatorRule:"Тор заменяется цепью зацепленных уменьшенных торов",description:"Дикий узел и фрактал Луи Антуана (1921). Вполне несвязное компактное подмножество ℝ³, дополнение к которому не является односвязным (фундаментальная группа π₁(ℝ³ \\ X) ≠ 1).",phiPiRelation:"Каждое кольцо ориентировано по меридианам тора (углы 2π); золотая инверсия диаметров предотвращает самопересечение колец.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3.2,rotX:.35,rotY:.2}},{id:"cesaro-curve-v2",name:"Кривая Чезаро",englishName:"Cesàro Curve (Torn Square)",category:"geometric_curves",formula:"α = arctan((1-2δ)/√3), L_{n+1} = (2 + 2 cos α)^{-1} L_n",dimension:"D = ln(4) / ln(2(1 + cos α)) ≈ 1.7848",generatorRule:"Вариация кривой Коха с варьируемым углом при вершине отсекаемого треугольника α ∈ (0, π/3)",description:"Обобщение кривой Коха Эрнесто Чезаро (1906). При приближении угла к 90° кривая превращается в самокасающуюся пространственно-заполняющую структуру («разорванный квадрат»).",phiPiRelation:"При золотом угле Чезаро α = 2π(1 - 1/φ) ≈ 137.5° граница кривой образует квазипериодическую розетку.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothMorph",warpStrength:.35,zoom:3.1}},{id:"drummond-curve-v2",name:"Кривая Драммонда",englishName:"Drummond Fractal Curve",category:"geometric_curves",formula:"θ_k = 2π / (φ^k), L_{n+1} = r · L_n",dimension:"D ≈ 1.4142 (квазидробная размерность)",generatorRule:"Циклическая L-система с дробными иррациональными углами поворота и переменным масштабированием",description:"Кривая на основе L-систем с несимметричными ветвями и иррациональными фазовыми сдвигами, формирующая спиральные кристаллические кластеры.",phiPiRelation:"Каждый шаг итерации масштабируется на фактор 1/φ с поворотом на угол золотого сечения.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"koch-mcwhorter-v2",name:"Снежинка Коха — МакВортера (Pentigree)",englishName:"McWhorter's Pentigree",category:"geometric_curves",formula:"z ↦ z · e^{i θ} / r + c_k, r = √7",dimension:"D = ln(5)/ln(√7) ≈ 1.6309",generatorRule:"Асимметричная замена каждого отрезка на 5 сегментов под углом arcsin(√3/(2√7))",description:"Обобщение снежинки Коха Уильяма МакВортера (Pentigree), порождающее пятиугольные самозаполняющиеся фрактальные плитки с 5-лучевой симметрией.",phiPiRelation:"Симметрия pentigree неразрывно связана с пентаграммой и степенями золотого сечения φ.",enginePreset:{type:"fibonacciSnowflake",hybridType:"icosahedral",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3}},{id:"rice-curve-v2",name:"Кривая Райса",englishName:"Rice Space-Filling Curve",category:"geometric_curves",formula:"γ(t): [0, 1] → ℝ², L-система F → +F--F+F++F-",dimension:"D = 2.0 (пространственно-заполняющая)",generatorRule:"Пространственно-заполняющая кривая с неортогональными углами поворота 45° и 135°",description:"Непрерывная кривая, заполняющая треугольные и шестиугольные ячейки без самопересечений за счет асимметричных неортогональных разворотов.",phiPiRelation:"Углы разворота кратны π/4 и π/8; золотая модуляция длин звеньев сглаживает кривизну пути.",enginePreset:{type:"hilbertCurve3D",compositeOp:"smoothCarve",boxFold:1.1,zoom:2.8}},{id:"polya-curve-v2",name:"Кривая Пойи",englishName:"Pólya Space-Filling Curve",category:"geometric_curves",formula:"P(t) = ∑_{k=1}^∞ 2^{-k} v_{ε_k(t)}, t ∈ [0, 1]",dimension:"D = 2.0 (непрерывно заполняет треугольник)",generatorRule:"Предельный случай блуждания кривой Джорджа Пойи (1913), заполняющей равнобедренный прямоугольный треугольник",description:"Первая доказанная непрерывная кривая, заполняющая внутренность треугольника, сохраняя дифференцируемость почти всюду кроме счетного множества канторовых узлов.",phiPiRelation:"Отношение гипотенузы к катетам равно √2; золотое сечение регулирует последовательность обхода подтреугольников.",enginePreset:{type:"dragonCurveIFS",hybridType:"sierpinskiOcta",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3}},{id:"twenmey-dragon-v2",name:"Дракон Твенми",englishName:"Twenmey Dragon Curve",category:"geometric_curves",formula:"w_1(z) = z · (1 + i)/2, w_2(z) = 1 - z · (1 - i)/2",dimension:"D = 2.0, граница D_∂ ≈ 1.5236",generatorRule:"Вариация дракона Хартера-Хейтуэя со сменой знака угла поворота на каждом нечетном шаге",description:"Спиральная фрактальная кривая с вихревыми завитками, разворачивающаяся в обе полуплоскости и напоминающая крылья феникса.",phiPiRelation:"Угол поворота 90° = π/2; шаг разворота витков масштабируется по пропорции φ = 1.618.",enginePreset:{type:"dragonCurveIFS",compositeOp:"domainWarp",warpStrength:.4,zoom:3.2}},{id:"golden-dragon-v2",name:"Золотой Дракон (φ-Dragon)",englishName:"Golden Ratio Dragon Curve",category:"geometric_curves",formula:"z_{n+1} = z_n / φ · e^{i · arccos(1/(2φ))}",dimension:"D = ln(2)/ln(φ) ≈ 1.4404",generatorRule:"Замена звеньев ломаной треугольниками с золотыми пропорциями катетов 1 : 1/φ",description:"Фрактальная кривая дракона, углы и длины сегментов которой точно вычислены из корня полинома x² - x - 1 = 0. Не имеет самопересечений ни на одном масштабе.",phiPiRelation:"Фундаментальный фрактал: коэффициент подобия в точности равен 1/φ = 0.61803398875!",enginePreset:{type:"dragonCurveIFS",hybridType:"phyllotaxis",compositeOp:"smoothUnion",hybridBlend:.38,phiMultiplier:1.61803398875,zoom:3.1}},{id:"sierpinski-arrowhead-v2",name:"Стреловидная кривая Серпинского",englishName:"Sierpiński Arrowhead Curve",category:"geometric_curves",formula:"A → B-A-B, B → A+B+A (угол 60° = π/3)",dimension:"D = ln(3)/ln(2) ≈ 1.58496",generatorRule:"Симметричная L-система, в пределе сходящаяся к треугольнику Серпинского",description:"Непрерывная ломаная линия, которая при итерациях n → ∞ в точности заметает множество точек треугольника Серпинского, являясь его топологической траекторией.",phiPiRelation:"Угол 60° задает гексагональный базис; золотое разбиение сторон порождает фрактал Пенроуза.",enginePreset:{type:"sierpinskiOcta",compositeOp:"smoothMorph",zoom:3}},{id:"pythagoras-tree-wind-v2",name:"Дерево Пифагора обдуваемое (Асимметричное)",englishName:"Windblown Pythagoras Tree",category:"constructive",formula:"c² = a² + b², a = c · cos(α), b = c · sin(α), α ≠ 45°",dimension:"D ≈ 1.83 (зависит от угла наклона)",generatorRule:"Построение квадратов на прямоугольном треугольнике с неравными острыми углами α = 30°, β = 60°",description:"Вариация классического дерева Пифагора, где неравные углы ветвления создают динамический эффект кроны, изогнутой непрерывным фрактальным ветром.",phiPiRelation:"При золотом угле α = arcsin(1/√φ) дерево сворачивается в совершенную логарифмическую спираль Фибоначчи.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothUnion",rotX:.45,rotY:.2,zoom:3.2}},{id:"pythagoras-tree-naked-v2",name:"Обнаженное дерево Пифагора",englishName:"Naked Skeleton Pythagoras Tree",category:"constructive",formula:"E_n = ⋃ [c_{k, 1}, c_{k, 2}], c_k — центры квадратов",dimension:"D = ln(2)/ln(√2) = 2 (для скелетного графа)",generatorRule:"Фрактальный граф, построенный исключительно по отрезкам, соединяющим центры смежных квадратов дерева Пифагора",description:"Минималистичный линейный остов дерева Пифагора. Образует элегантную ветвящуюся коралловую структуру, лишенную сплошных площадей квадратов.",phiPiRelation:"Длины ветвей убывают в геометрической прогрессии с масштабным множителем золотого корня 1/√φ.",enginePreset:{type:"pythagorasTree3D",compositeOp:"smoothMorph",warpStrength:.2,zoom:3.4}},{id:"t-square-v2",name:"Т-квадрат (T-Square Fractal)",englishName:"T-Square Fractal",category:"constructive",formula:"A_{n+1} = A_n ∪ 4 × A_n / 2, S_∞ = 2 S_0",dimension:"D = ln(4)/ln(2) = 2.0",generatorRule:"Итерационное наложение уменьшенных вдвое квадратов на все 4 угла каждого квадрата предыдущего поколения",description:"Классический конструктивный фрактал. В пределе площадь покрываемой области в точности равна удвоенной площади начального квадрата, а периметр стремится к бесконечности.",phiPiRelation:"При золотом скейлинге (1/φ вместо 1/2) квадраты не перекрываются, образуя совершенную квазикристаллическую мозаику.",enginePreset:{type:"menger",compositeOp:"smoothUnion",boxFold:1,zoom:3}},{id:"sierpinski-cross-v2",name:"Крест Серпинского 3D",englishName:"Sierpiński Cross 3D",category:"constructive",formula:"C_{n+1} = ⋃_{i=1}^5 T_i(C_n), |det(T_i)| = 1/9",dimension:"D = ln(5)/ln(3) ≈ 1.46497",generatorRule:"Взаимно перпендикулярные плоскости ковра Серпинского, образующие объемный пространственный крест",description:"Трехмерная ортогональная комбинация пересекающихся фракталов Серпинского, обладающая октаэдрической симметрией полостей.",phiPiRelation:"Сечения креста плоскостями под золотым углом arctan(φ) образуют правильные пятиугольные отверстия.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",boxFold:1.2,zoom:3.2}},{id:"sierpinski-pentagon-v2",name:"Пятиугольник Серпинского (Пентафлейк / Pentaflake)",englishName:"Pentaflake / Sierpiński Pentagon",category:"constructive",formula:"P_{n+1} = ⋃_{i=1}^5 R_{2π i/5}(P_n / (1 + φ))",dimension:"D = ln(5)/ln(1 + φ) ≈ 1.67228",generatorRule:"Правильный пятиугольник замещается пятью меньшими пятиугольниками по углам с удалением центральной пятиконечной звезды",description:"Один из самых гармоничных планарных фракталов. Имеет врожденную 5-лучевую золотую симметрию D₅, невозможную в стандартных кристаллических решетках.",phiPiRelation:"Масштабный множитель строго равен 1/(1 + φ) = 1/φ² ≈ 0.381966! Чистейшее проявление золотого сечения.",enginePreset:{type:"icosahedral",compositeOp:"smoothUnion",phiMultiplier:1.61803398875,zoom:3}},{id:"hexaflake-v2",name:"Гексафрактал (Hexaflake / Снежинка Серпинского)",englishName:"Hexaflake",category:"constructive",formula:"H_{n+1} = ⋃_{i=1}^7 H_n / 3 (6 по периметру + 1 в центре)",dimension:"D = ln(7)/ln(3) ≈ 1.77124",generatorRule:"Шесть уменьшенных копий правильного шестиугольника по периметру плюс один в центре",description:"Шестилучевой фрактальный кристалл, моделирующий рекурсивный рост ледяных снежинок в насыщенных парах воды.",phiPiRelation:"Периметр шестиугольника задан соотношением 6r; вписанные золотые спирали описывают микроканалы кристаллизации.",enginePreset:{type:"fibonacciSnowflake",compositeOp:"smoothUnion",boxFold:1.3,zoom:2.9}},{id:"ivezic-fractal-v2",name:"Фрактал Ивезича (Многомерный симплекс Серпинского)",englishName:"Ivezić n-Simplex Fractal",category:"constructive",formula:"D(n) = ln(n + 1) / ln(2), n ≥ 1",dimension:"D = ln(n+1)/ln(2) (для n=4 D ≈ 2.3219, для n=6 D ≈ 2.807)",generatorRule:"Рекурсивное удаление инвертированных подсимплексов из правильного n-мерного симплекса",description:"Обобщение треугольника и тетраэдра Серпинского на n-мерные гиперпространства, открытое в фундаментальных трудах по фрактальной топологии.",phiPiRelation:"Сечения 5-мерного симплекса Ивезича ортогонально проецируются в золотые икосаэдры в ℝ³.",enginePreset:{type:"sierpinskiOcta",hybridType:"calabiYau",compositeOp:"smoothMorph",hybridBlend:.4,zoom:3.1}},{id:"levi-snowflake-v2",name:"Снежинка Леви",englishName:"Lévy Snowflake (C-Curve Boundary)",category:"constructive",formula:"S = ⋃_{i=1}^8 Lévy_i, Area = 2",dimension:"D_граница ≈ 1.9340, D_тело = 2.0",generatorRule:"Замкнутая область, заметаемая восемью сходящимися кривыми Леви, расположенными по периметру квадрата",description:"Удивительная фрактальная мозаика с бесконечной бахромой, способная самозамостить евклидову плоскость ℝ² без зазоров и перекрытий.",phiPiRelation:"Период разворота ветвей равен π/4; фрактальная граница имеет золотой масштаб самоподобия.",enginePreset:{type:"dragonCurveIFS",compositeOp:"smoothCarve",zoom:3.1}},{id:"burning-ship-perpendicular-v2",name:"Перпендикулярный Пылающий Корабль",englishName:"Perpendicular Burning Ship",category:"algebraic_complex",formula:"z_{n+1} = (Re(z_n) + i|Im(z_n)|)^2 + c",dimension:"D_граница = 2.0 (комплексная динамика)",generatorRule:"Модуль берется только от мнимой компоненты, сохраняя знак вещественной части",description:"Асимметричная модификация фрактала Burning Ship. Разрушает зеркальную симметрию, порождая вихревые струи и призрачные фрактальные корабли.",phiPiRelation:"Отношение периодов бифуркации мачт корабля сходится к константе Фейгенбаума δ = 4.6692 и золотому множителю φ.",enginePreset:{type:"burningShip3D",compositeOp:"smoothUnion",warpStrength:.35,zoom:3}},{id:"jesus-trigonometric-v2",name:"Фрактал Иисуса / Тригонометрический фрактал",englishName:"Jesus / Sine-Cosine Transcendental Fractal",category:"algebraic_complex",formula:"z_{n+1} = sin(z_n) + c · cos(z_n)",dimension:"D = 2.0 (трансцендентная динамика)",generatorRule:"Итерация тригонометрических комплексных функций с экспоненциальным ростом вдоль мнимой оси",description:"Трансцендентный фрактал комплексной динамики. Вдоль мнимой оси синус переходит в гиперболический sinh, создавая соборные арки и бесконечные колоннады.",phiPiRelation:"Период функции строго равен 2π; золотое сечение управляет шириной коридоров сходимости.",enginePreset:{type:"riemannZeta",hybridType:"mandelbulb",compositeOp:"smoothUnion",hybridBlend:.45,zoom:3.2}},{id:"spider-fractal-v2",name:"Фрактал «Паук» (Spider Fractal)",englishName:"Spider Dynamical System",category:"algebraic_complex",formula:"z_{n+1} = z_n^2 + c_n, c_{n+1} = c_n / 2 + z_{n+1}",dimension:"D = 2.0",generatorRule:"Динамическая система с блуждающим параметром сдвига c_n, зависящим от текущей координаты орбиты",description:"Сложный алгебраический фрактал, где параметр c не статичен, а эволюционирует синхронно с точкой z, создавая длинные радиальные нити-ножки.",phiPiRelation:"Углы расхождения паучьих нитей кратны золотому углу 137.5° = 2π(1 - 1/φ).",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",warpStrength:.3,zoom:3.1}},{id:"sherwood-carpet-v2",name:"Фрактал «Ковер Шервуда»",englishName:"Sherwood Algebraic Carpet",category:"algebraic_complex",formula:"z_{n+1} = (z_n^3 + c) / (1 + conjugate(z_n)^2)",dimension:"D ≈ 1.89",generatorRule:"Рациональное дробно-линейное отображение третьего порядка с комплексным сопряжением",description:"Алгебраический фрактал на основе рациональных отображений Римана, образующий кружевную вязь бесконечных арок и сводов.",phiPiRelation:"Комплексные полюса отображения распределены по окружности радиуса √φ.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothUnion",boxFold:1.15,zoom:2.9}},{id:"serafimski-newton-v2",name:"Фрактал Серафимского (Фазовый метод Ньютона)",englishName:"Serafimski Non-Linear Newton Fractal",category:"algebraic_complex",formula:"z_{n+1} = z_n - e^{i α} P(z_n) / P'(z_n), α = π/φ",dimension:"D = 2.0 (бассейны с общей границей Жюлиа)",generatorRule:"Модификация метода Ньютона с добавлением комплексного вращения шага на золотой фазовый угол α",description:"Введение золотой фазы заставляет прямолинейные траектории Ньютона закручиваться в вихревые спирали вокруг корней полинома, создавая фантастические завихрения.",phiPiRelation:"Фазовый угол сдвига α = π/φ ≈ 111.246° устраняет прямолинейные сингулярности и максимизирует хаос.",enginePreset:{type:"newtonBasins",compositeOp:"domainWarp",warpStrength:.45,zoom:3}},{id:"aizawa-attractor",name:"Аттрактор Айзавы",englishName:"Aizawa Attractor",category:"ifs_attractors",formula:"ẋ=(z-b)x-dy, ẏ=dx+(z-b)y, ż=c+az-z³/3-(x²+y²)(1+ez)+fzx³",dimension:"D_L ≈ 2.16 (размерность Ляпунова)",generatorRule:"Трехмерная система нелинейных дифференциальных уравнений с тороидально-сферической хаотической оболочкой",description:"Один из самых визуально совершенных аттракторов хаоса: траектории образуют сферу с центральной осью вращения и струйными выбросами на полюсах.",phiPiRelation:"Соотношение радиальной и аксиальной частот вращения сходится к золотой пропорции φ.",enginePreset:{type:"lorenzAttractor",hybridType:"hopfFibration",compositeOp:"smoothUnion",hybridBlend:.4,zoom:3.3}},{id:"thomas-attractor",name:"Аттрактор Томаса (Циклический лабиринт)",englishName:"Thomas Cyclically Symmetric Attractor",category:"ifs_attractors",formula:"ẋ = sin(y) - bx, ẏ = sin(z) - by, ż = sin(x) - bz",dimension:"D_L ≈ 2.05",generatorRule:"Циклически симметричная 3D динамическая система с тригонометрическим связыванием координат",description:"Хаотический аттрактор с полной циклической C₃-симметрией, формирующий бесконечный пространственный лабиринт из плавных трубок.",phiPiRelation:"Период тригонометрических функций 2π; критическое значение затухания b_c ≈ 0.208186 связано с золотыми степенями.",enginePreset:{type:"cliffordKlein",compositeOp:"smoothMorph",warpStrength:.25,zoom:3.1}},{id:"halvorsen-attractor",name:"Аттрактор Халворсена",englishName:"Halvorsen 3D Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = -ax - 4y - 4z - y², ẏ = -ay - 4z - 4x - z², ż = -az - 4x - 4y - x²",dimension:"D_L ≈ 2.22",generatorRule:"Квадратичная 3D система с трехлучевой циклической симметрией",description:"Трехмерный аттрактор с тремя раскрывающимися лепестками, по которым хаотически перескакивает фазовая траектория.",phiPiRelation:"Симметрия C₃ задает угол поворота 120° = 2π/3; фазовый объем сжимается со скоростью div V = -3a.",enginePreset:{type:"lorenzAttractor",compositeOp:"smoothUnion",zoom:3.2}},{id:"sprott-attractor",name:"Аттрактор Спротта",englishName:"Sprott Minimal Chaotic Attractor",category:"ifs_attractors",formula:"ẋ = y + 2xy + xz, ẏ = 1 - 2x² + yz, ż = x - x² - y²",dimension:"D_L ≈ 2.09",generatorRule:"Минимальная система Клиффорда Спротта с пятью слагаемыми и одним параметром",description:"Элегантная минималистичная хаотическая система дифференциальных уравнений, открытая в 1994 году в ходе численного поиска простейших аттракторов.",phiPiRelation:"Спектр показателей Ляпунова (+, 0, -) удовлетворяет теореме Каплана-Йорке с золотым коэффициентом сжатия.",enginePreset:{type:"lorenzAttractor",hybridType:"spiralTunnel",compositeOp:"smoothMorph",hybridBlend:.35,zoom:3}},{id:"avalanche-dbm-v2",name:"Фрактал лавинного пробоя (DBM / Молния Лихтенберга)",englishName:"Dielectric Breakdown Model (DBM)",category:"stochastic",formula:"p_i ∝ (∇Φ)^η, ∇²Φ = 0",dimension:"D ≈ 1.75 (для η = 1 D ≈ 1.71, для η = 2 D ≈ 1.45)",generatorRule:"Вероятностная модель Нимейера-Пьетронеро-Висмана (1984) для роста искровых разрядов в диэлектриках",description:"Физический стохастический фрактал, точно описывающий ветвление молний в атмосфере, фигуры Лихтенберга на плексигласе и древовидные эрозии.",phiPiRelation:"Углы бифуркации разрядных каналов имеют моду статистического распределения около золотого угла 137.5°.",enginePreset:{type:"dlaCluster",compositeOp:"smoothUnion",warpStrength:.45,zoom:3}},{id:"mandelbrot-multidrop",name:"Мультифрактальный каскад Мандельброта",englishName:"Mandelbrot Multiplicative Cascade",category:"stochastic",formula:"μ(B) = ∏_{k=1}^n W_{ε_k}, ⟨W⟩ = 1",dimension:"Спектр сингулярностей f(α) = inf_q [q α - τ(q)]",generatorRule:"Мультипликативное случайное деление энергии между дочерними ячейками турбулентности",description:"Модель Бенуа Мандельброта (1974) для описания перемежаемости развитой гидродинамической турбулентности Колмогорова.",phiPiRelation:"Максимум спектра размерностей f(α) приходится на точку золотого баланса потоков энергии.",enginePreset:{type:"quasicrystal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.35,zoom:3.1}},{id:"hopf-fibration-manifold",name:"Расслоение Хопфа S³ → S²",englishName:"Hopf Fibration Topological Bundle",category:"topological_physical",formula:"h(z_0, z_1) = (2 z_0 conjugate(z_1), |z_0|² - |z_1|²) ∈ S²",dimension:"D_топологическая = 3, расслаивается окружностями S¹",generatorRule:"Отображение 3-сферы в 4D на двумерную сферу Римана, где прообраз каждой точки есть окружность Вилларсо",description:"Великое топологическое открытие Хайнца Хопфа (1931). Пространство заполнено зацепленными торами Клиффорда, не пересекающимися между собой.",phiPiRelation:"Каждые два кольца зацеплены ровно один раз (число зацепления Хопфа = 1); золотой угол скрутки волокон предотвращает резонансные узлы.",enginePreset:{type:"hopfFibration",compositeOp:"smoothUnion",zoom:3.2,rotX:.3,rotY:.25}},{id:"calabi-yau-manifold",name:"Многообразие Калаби — Яу",englishName:"Calabi-Yau 3-Fold Compactification",category:"topological_physical",formula:"z_1^5 + z_2^5 + z_3^5 + z_4^5 + z_5^5 - 5 ψ z_1 z_2 z_3 z_4 z_5 = 0",dimension:"6 действительных измерений (3 комплексных) в CP⁴",generatorRule:"Компактное кэлерово многообразие с нулевым первым классом Черна c_1 = 0 и метрикой Риччи-плоского пространства",description:"Фундаментальная геометрия скрытых микроизмерений в теории суперструн. 2D и 3D проекции сечений многообразия образуют гармонические складки.",phiPiRelation:"Параметр комплексной деформации ψ при золотом значении φ порождает конформную зеркальную симметрию фермионных поколений.",enginePreset:{type:"calabiYau",compositeOp:"smoothMorph",zoom:3.1,rotX:.4,rotY:.3}},{id:"costa-minimal-surface",name:"Минимальная поверхность Коста",englishName:"Costa Minimal Surface",category:"topological_physical",formula:"X(z) = Re ∫ (½(1 - g²), i/2(1 + g²), g) ω, H ≡ 0",dimension:"D_топологическая = 2, род g = 1 с тремя концами",generatorRule:"Представление Вейерштрасса с эллиптическими функциями Вейерштрасса ℘(z)",description:"Сенсация геометрии: в 1982 году Селсо Коста доказал существование полной вложенной минимальной поверхности рода 1, опровергнув столетнее убеждение о единственности катеноида и геликоида.",phiPiRelation:"Эллиптические периоды тора Коста ω_1, ω_2 находятся в точном соотношении золотого сечения φ.",enginePreset:{type:"neoviusMinimal",hybridType:"gyroid",compositeOp:"smoothUnion",hybridBlend:.3,zoom:3.2}},{id:"rossler-hyperchaos",name:"4D Гиперхаотический аттрактор Рёсслера",englishName:"4D Hyperchaotic Rössler Attractor",category:"ifs_attractors",formula:"ẋ = -y - z, ẏ = x + ay + w, ż = b + xz, ẇ = -cz + dw",dimension:"D_фрактальная ≈ 3.18 (Два положительных показателя Ляпунова λ₁ > λ₂ > 0)",generatorRule:"Двойное складчатое растяжение фазового потока в четырёхмерном фазовом пространстве",description:"Открытие Отто Рёсслера (1979). В отличие от простого хаоса, гиперхаос имеет более одного направления экспоненциального разбегания фазовых траекторий, порождая многослойные вихревые мембраны.",phiPiRelation:"Спектральное расщепление бифуркаций удвоения периода подчиняется универсальной константе Фейгенбаума δ ≈ 4.669 и золотой пропорции φ.",enginePreset:{type:"rosslerHyperchaos",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35}},{id:"clifford-attractor-v2",name:"4D Аттрактор Клиффорда — Пиковера",englishName:"Clifford-Pickover 4D Dynamic Attractor",category:"ifs_attractors",formula:"x_{n+1} = sin(a y_n) + c cos(a x_n), y_{n+1} = sin(b x_n) + d cos(b y_n)",dimension:"D_хаусдорфа ≈ 2.45 в четырёхмерном пространстве параметров",generatorRule:"Нелинейное синусоидальное отображение Клиффорда с закруткой фазового угла",description:"Исследован Клиффордом Пиковером. Образует непрерывные бархатистые каустические ленты и тороидальные спирали бесконечной глубины.",phiPiRelation:"При золотых параметрах a = -1.4φ, b = 1.6/φ, c = 1.0φ система формирует квазипериодические 10-лепестковые симметрии Пенроуза.",enginePreset:{type:"cliffordAttractor",compositeOp:"smoothUnion",zoom:3,rotX:.3,rotY:.4}},{id:"abrikosov-vortex-lattice",name:"Квантовая вихревая решётка Абрикосова",englishName:"Abrikosov Superconducting Vortex Lattice",category:"topological_physical",formula:"∇ × B = j_s, ψ(r) = Δ(r) e^{iθ}, ∮ v_s · dl = 2πℏ/m",dimension:"D = 2 + 1 (Квантованное 2D треугольное поле флюксонов с продольной спиралью)",generatorRule:"Нобелевское открытие А. А. Абрикосова (1957). Вихри сверхпроводящего тока с квантом магнитного потока Φ₀ = h/2e",description:"В сверхпроводниках II рода магнитное поле проникает в виде квантованных нитей (флюксонов), образующих строгую гексагональную решетку с вихревыми сингулярностями.",phiPiRelation:"Отношение периодов решетки флюксонов к длине когерентности Гинзбурга-Ландау ξ при золотом спиральном шаге минимизирует свободную энергию Гиббса.",enginePreset:{type:"abrikosovLattice",compositeOp:"smoothUnion",zoom:3.2,rotX:.2,rotY:.15}},{id:"beltrami-pseudosphere",name:"Псевдосфера Бельтрами (Геометрия Лобачевского)",englishName:"Beltrami Pseudosphere Hyperbolic Surface",category:"topological_physical",formula:"x = sech(u) cos(v), y = sech(u) sin(v), z = u - tanh(u), K ≡ -1/R²",dimension:"D_гладкая = 2 с гиперболическим фрактальным краевым сингулярным ребром",generatorRule:"Поверхность вращения трактрисы вокруг своей асимптоты; локальная модель плоскости Лобачевского",description:"Эудженио Бельтрами (1868) впервые реализовал неевклидову геометрию Лобачевского на вещественной поверхности в ℝ³ с постоянной отрицательной гауссовой кривизной K = -1.",phiPiRelation:"Экспоненциальное сужение горловины трактрисы e^{-z} скейлится золотым показателем φ, формируя бесконечный раструб.",enginePreset:{type:"beltramiPseudosphere",compositeOp:"smoothUnion",zoom:2.9,rotX:.35,rotY:.2}},{id:"spin-foam-network",name:"Спиновая пена и сеть Пенроуза (LQG)",englishName:"Penrose Spin Network & Quantum Foam",category:"topological_physical",formula:"A(j_f, v_e) = ∏_f dim(j_f) ∏_v W_v(j_f, i_e), SU(2) Gauge Invariance",dimension:"D_планковская = 4 (Дискретная квантовая планковская геометрия пространства-времени l_P ≈ 1.6·10⁻³⁵ м)",generatorRule:"Петлевая квантовая гравитация (Ровелли, Смолин, Пенроуз): пространство состоит из квантованных ячеек объёма и площади",description:"Революционная концепция квантовой физики: на планковском масштабе непрерывное пространство исчезает, уступая место динамической сети спинов и топологической квантовой пене.",phiPiRelation:"Спектры операторов площади квантованы через постоянную Иммирци γ_BI = ln(2) / (π√3) и масштабное деление золотого узла.",enginePreset:{type:"spinFoamNetwork",compositeOp:"smoothUnion",zoom:3.1,rotX:.5,rotY:.4}},{id:"ramanujan-tau-resonator",name:"Модулярный резонатор Рамануджана Δ(τ)",englishName:"Ramanujan Modular Tau Resonator",category:"algebraic_complex",formula:"Δ(τ) = (2π)¹² q ∏_{n=1}^∞ (1 - q^n)²⁴ = ∑_{n=1}^∞ τ(n) q^n, q = e^{2π i τ}",dimension:"Вес k = 12 модулярной формы над группой SL(2, ℤ)",generatorRule:"Параболическая модулярная форма Рамануджана с 24 каспами (корнями степени 24)",description:"Жемчужина теории чисел Сринивасы Рамануджана (1916). Функция τ(n) управляет 24-мерной решёткой Лича и теорией бозонных струн в 26 измерениях.",phiPiRelation:"Непрерывная дробь Рамануджана R(q) при q = e^{-2π} вычисляется строго через золотое сечение: R(e^{-2π}) = √(φ√5) - φ.",enginePreset:{type:"ramanujanTau",compositeOp:"smoothUnion",zoom:2.9,rotX:.4,rotY:.25}},{id:"belousov-zhabotinsky-waves",name:"Спиральные волны Белоусова — Жаботинского",englishName:"Belousov-Zhabotinsky Chemical Spiral Waves",category:"topological_physical",formula:"∂u/∂t = D_u ∇²u + u(1 - u) - f v (u - q)/(u + q), ∂v/∂t = D_v ∇²v + u - v",dimension:"D = 2 + 1 (Автоволновой фазовый спиральный фронт в активной нелинейной среде)",generatorRule:"Самоорганизующаяся нелинейная реакция окисления малоновой кислоты бромноватой кислотой",description:"Триумф синергетики и физики неравновесных процессов (Б. П. Белоусов 1951, А. М. Жаботинский 1964). Автоволновые ревербераторы образуют раскручивающиеся спирали в пространстве.",phiPiRelation:"Шаг спиральных волн самоорганизуется в золотую логарифмическую спираль r(θ) = a e^{θ cot(φ)}, минимизируя диссипацию энтропии.",enginePreset:{type:"belousovWaves",compositeOp:"smoothUnion",zoom:3,rotX:.35,rotY:.3}},{id:"mandelbulb-classic",name:"Мандельбульб (классический)",englishName:"Classic Mandelbulb",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c, r = |z|, θ = atan2(√(x²+y²), z), φ = atan2(y, x)",dimension:"D ≈ 3.0 (граница) ",generatorRule:"Сферические координаты с возведением в степень 8",description:"Трёхмерный аналог множества Мандельброта, построенный путём обобщения формулы z²+c на сферические координаты со степенью 8.",phiPiRelation:"Степень 8 = 2³ связана с золотым сечением через итеративное удвоение; при замене 8 на φ·5 форма становится наиболее «золотой».",enginePreset:{type:"mandelbulb",compositeOp:"smoothMorph",zoom:3.2,rotX:.4,rotY:.3,iterations:12}},{id:"mandelbulb-hybrid",name:"Мандельбульб × Спиральный туннель",englishName:"Mandelbulb × Spiral Tunnel Hybrid",category:"multidimensional",formula:"z_{n+1} = z_n^8 + c ⊕ log-spiral fold",dimension:"D ≈ 2.8 (гибридная граница)",generatorRule:"Гладкое морфирование Мандельбульба с логарифмической спиральной складкой",description:"Гибрид классического Мандельбульба и спирального туннеля, создающий эффект закрученных коридоров внутри фрактала.",phiPiRelation:"Золотой угол скрутки 137.5° = 2π/φ² определяет шаг спирального складывания.",enginePreset:{type:"mandelbulb",hybridType:"spiralTunnel",compositeOp:"goldenSpiralFold",hybridBlend:.4,zoom:3,rotX:.35}},{id:"quaternion-julia-slice",name:"Кватернионное множество Жюлиа (срез ℍ)",englishName:"Quaternion Julia Set (ℍ Slice)",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q ∈ ℍ, c = фиксированный кватернион",dimension:"D ≈ 2.5 (граница 3D-сечения)",generatorRule:"Итерация квадрата кватерниона с добавлением константы c ∈ ℍ",description:"4D множество Жюлиа в кватернионном пространстве. 3D-сечение показывает невероятно сложные переплетающиеся поверхности.",phiPiRelation:"Кватернионные компоненты c = (1/φ, 1/φ², 0, 0) порождают наиболее симметричные золотые сечения.",enginePreset:{type:"quaternionJulia",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.5,iterations:10}},{id:"apollonian-packing",name:"Аполлониева упаковка сфер",englishName:"Apollonian Sphere Packing",category:"constructive",formula:"Кривизна k_{n+1} = k_1 + k_2 + k_3 + k_4 ± 2√(k_1 k_2 + k_2 k_3 + k_3 k_4 + k_4 k_1)",dimension:"D ≈ 2.47 (граница упаковки)",generatorRule:"Теорема Дезаржа об инверсиях: вписать максимальную сферу в зазор между 4 взаимно касающимися сферами",description:"Фрактальная упаковка сфер, где каждый зазор между 4 касающимися сферами заполняется новой максимальной сферой.",phiPiRelation:"Отношения кривизн соседних сфер в пределе сходятся к степеням золотого сечения.",enginePreset:{type:"apollonian",compositeOp:"smoothUnion",zoom:3.5,rotX:.3,rotY:.4,iterations:8}},{id:"spiral-tunnel-infinite",name:"Бесконечный логарифмический туннель φ",englishName:"Infinite Logarithmic Phi Zoom Tunnel",category:"geometric_curves",formula:"r(θ) = a · φ^(2θ/π), самоподобие при повороте на 2π/ln(φ)",dimension:"D = 1 + 2/ln(φ) ≈ 3.87",generatorRule:"Логарифмическая спираль с золотым показателем, развёрнутая в 3D-туннель",description:"Бесконечный туннель, стенки которого образованы золотой логарифмической спиралью. При зуме внутрь открывается бесконечная самоподобная структура.",phiPiRelation:"Показатель спирали = 2/ln(φ) ≈ 4.15; поворот на золотой угол 137.5° переводит туннель в себя.",enginePreset:{type:"spiralTunnel",compositeOp:"smoothMorph",zoom:2.5,rotX:0,rotY:0}},{id:"mandelbox-golden",name:"Мандельбокс золотого сложения",englishName:"Golden Mandelbox",category:"multidimensional",formula:"z_{n+1} = scale · fold(z_n) + c, fold: boxFold + sphereFold",dimension:"D ≈ 2.7 (зависит от scale)",generatorRule:"Складывание пространства: box fold (отражение) + sphere fold (инверсия сферы) + масштабирование",description:"Фрактал, полученный многократным складыванием 3D-пространства через комбинацию кубического и сферического отражений с золотым масштабом.",phiPiRelation:"При scale = φ² = 2.618... структура приобретает максимальную золотую симметрию.",enginePreset:{type:"mandelbox",compositeOp:"smoothMorph",zoom:3,boxFold:1,sphereFold:.5,iterations:12}},{id:"gyroid-tpms",name:"Золотая гироидная поверхность (TPMS)",englishName:"Golden Gyroid Minimal Surface",category:"topological_physical",formula:"G(x,y,z) = sin(x)cos(y) + sin(y)cos(z) + sin(z)cos(x) = 0",dimension:"D = 2 (нулевая средняя кривизна H ≡ 0)",generatorRule:"Трёхпериодическая минимальная поверхность Шона с золотым масштабированием",description:"Одна из трёх классических TPMS-поверхностей. Не имеет прямых линий, самопересечений; разделяет пространство на два лабиринтных канала.",phiPiRelation:"Периоды решётки масштабированы золотым сечением; каналы образуют золотые спиральные траектории.",enginePreset:{type:"gyroid",compositeOp:"smoothMorph",zoom:3.5,rotX:.5,rotY:.3}},{id:"prime-spiral-sachs",name:"Спираль простых Сакса — Улама",englishName:"Sachs-Ulam Prime Spiral",category:"algebraic_complex",formula:"p_n = n² + n + 41 (золотой многочлен Эйлера), размещение на ультра-спирали",dimension:"D ≈ 1 (асимптотическая плотность ~ 1/ln(n))",generatorRule:"Размещение простых чисел на полярной сетке r = √n, θ = 2π√n с золотым смещением",description:"Визуализация распределения простых чисел на плоскости, показывающая удивительные спиральные паттерны, связанные с золотым сечением.",phiPiRelation:"Золотой угол 2π/φ между последовательными витками минимизирует перекрытия и максимизирует видимость паттернов.",enginePreset:{type:"primeSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"poincare-homology",name:"Гомологическая сфера Пуанкаре",englishName:"Poincaré Homology Sphere",category:"topological_physical",formula:"S³/Γ, Γ = группа икосаэдра порядка 120",dimension:"D = 3 (замкнутое 3-многообразие с π₁ = Γ₁₂₀)",generatorRule:"Факторизация 3-сферы по группе икосаэдра: каждая точка идентифицируется с 119 другими",description:"Единственное известное замкнутое 3-многообразие с группами гомологий как у сферы, но нетривиальной фундаментальной группой порядка 120.",phiPiRelation:"Группа икосаэдра порядка 120 = 5! связана с φ через симметрии додекаэдра: |Γ| = 4π·60/(2π/φ).",enginePreset:{type:"poincareSphere",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:8}},{id:"gaussian-primes-lattice",name:"Решётка гауссовых простых Z[i]",englishName:"Gaussian Primes Lattice Z[i]",category:"algebraic_complex",formula:"p = a² + b² простое ⟺ p ≡ 1 (mod 4) или p = a+bi, N(p) = a²+b² простое в ℤ",dimension:"D ≈ 1.36 (асимптотическая плотность в ℂ)",generatorRule:"Размещение гауссовых простых на комплексной плоскости с золотым масштабированием",description:"Простые числа в кольце гауссовых целых Z[i]. Их распределение на комплексной плоскости образует удивительные решётчатые паттерны.",phiPiRelation:"Золотое масштабирование координат (a·φ, b·φ) выявляет скрытые спиральные симметрии в распределении.",enginePreset:{type:"gaussianPrimes",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"euler-totient-spiral",name:"Спираль функции Эйлера φ(n)",englishName:"Euler Totient φ(n) Archimedean Spiral",category:"algebraic_complex",formula:"φ(n) = n ∏_{p|n}(1 - 1/p), размещение на спирали Архимеда r = n",dimension:"D ≈ 1.5 (фрактальная размерность графика)",generatorRule:"Значение φ(n) кодирует высоту/цвет точки на архимедовой спирали",description:"Визуализация функции Эйлера на спиральной сетке, показывающая удивительные лучевые и радиальные паттерны в распределении значений.",phiPiRelation:"Среднее отношение φ(n)/n → 6/π²; золотой угол размещения φ(n) выявляет скрытые модулярные симметрии.",enginePreset:{type:"eulerTotientSpiral",compositeOp:"smoothMorph",zoom:3,rotX:0,rotY:0}},{id:"clifford-torus-4d",name:"4D Тор Клиффорда (стереографическая проекция)",englishName:"4D Clifford Torus (Stereo Projection)",category:"multidimensional",formula:"(x₁,x₂,x₃,x₄) = (cos θ, sin θ, cos φ, sin φ) ⊂ S³ ⊂ ℝ⁴",dimension:"D = 2 (плоский тор в 4D, проекция в 3D)",generatorRule:"Стереографическая проекция из S³ в ℝ³ плоского тора (cos θ, sin θ, cos φ, sin φ)",description:"Единственный плоский (нулевая гауссова кривизна) тор, вложенный в 3-сферу. При стереографической проекции образует тор Дюпена.",phiPiRelation:"Золотое соотношение радиусов R/r = φ порождает наиболее гармоничную проекцию с икосаэдрическими сечениями.",enginePreset:{type:"cliffordTorus4D",compositeOp:"smoothMorph",zoom:3,rotX:.5,rotY:.3}},{id:"quaternion-mandelbrot-v2",name:"4D Кватернионное множество Мандельброта",englishName:"4D Quaternion Mandelbrot Set",category:"multidimensional",formula:"q_{n+1} = q_n² + c, q, c ∈ ℍ",dimension:"D = 3 (граница 4D тела)",generatorRule:"Итерация квадрата кватерниона: q² = (a²-b·b̄, 2ab) для q = a + bi + cj + dk",description:"Полное 4D множество Мандельброта в кватернионном пространстве. 3D-сечения показывают бесконечное разнообразие форм.",phiPiRelation:"Кватернионные оси масштабированы золотым сечением; сечения при золотых углах обнаруживают максимальную сложность.",enginePreset:{type:"quaternionMandelbrot",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:10}},{id:"burning-ship-3d-v2",name:"3D Горящий корабль",englishName:"3D Burning Ship Fractal",category:"algebraic_complex",formula:"z_{n+1} = (|Re(z_n)| + i|Im(z_n)|)² + c",dimension:"D ≈ 2.0 (граница)",generatorRule:"Модификация Мандельброта: абсолютные значения действительной и мнимой частей перед возведением в квадрат",description:"Фрактал, открытый Майклом Мандельбротом. В отличие от обычного Мандельброта, имеет характерную форму перевёрнутого корабля в пламени.",phiPiRelation:"Золотое масштабирование итераций выявляет самоподобные «паруса» горящего корабля.",enginePreset:{type:"burningShip3D",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4,iterations:12}},{id:"newton-basins-3d-v2",name:"3D Бассейны Ньютона-Рафсона",englishName:"3D Newton-Raphson Basins of Attraction",category:"algebraic_complex",formula:"z_{n+1} = z_n - f(z_n)/f'(z_n), f(z) = z³ - 1 (корни: 1, e^{2πi/3}, e^{4πi/3})",dimension:"D = 2 (границы бассейнов — фрактальные кривые)",generatorRule:"Итерация метода Ньютона для z³-1; каждая точка окрашивается по корню, к которому сходится",description:"Визуализация фрактальных границ бассейнов притяжения метода Ньютона. Границы между бассейнами образуют бесконечно сложные фрактальные кривые.",phiPiRelation:"Углы между бассейнами 120° = 2π/3; золотое возмущение начальных условий выявляет скрытую φ-симметрию.",enginePreset:{type:"newtonBasins",compositeOp:"smoothMorph",zoom:3,rotX:.4,rotY:.3,iterations:16}},{id:"jerusalem-cube-v2",name:"Иерусалимский куб",englishName:"Jerusalem Cube",category:"constructive",formula:"Куб с крестами золотого сечения: удаление прямоугольников с отношением сторон φ",dimension:"D ≈ 2.58",generatorRule:"В каждой грани куба вырезается золотой крест, затем процесс повторяется рекурсивно",description:"Фрактал, построенный на кубе с золотыми пропорциями. В каждой грани вырезается крест, стороны которого относятся как φ:1.",phiPiRelation:"Все пропорции куба выражены через φ: рёбра креста, глубина вырезов и масштаб итераций.",enginePreset:{type:"jerusalemCube",compositeOp:"smoothCarve",zoom:3,rotX:.35,rotY:.4,iterations:5}},{id:"hofstadter-butterfly-3d-v2",name:"Квантовая бабочка Хофштадтера",englishName:"Hofstadter Butterfly Energy Spectrum",category:"topological_physical",formula:"cos(q_x) + cos(q_y) = E, q_x = 2παm/n (магнитный поток α через ячейку)",dimension:"D ≈ 1.5 (фрактальная структура энергетических зон)",generatorRule:"Модель Харпера: квантовая частица на 2D решётке в однородном магнитном поле с рациональным потоком α = p/q",description:"Фрактальный энергетический спектр электрона в двумерной решётке с магнитным полем. Каждая «бабочка» — разрешённая зона энергии.",phiPiRelation:"При α = 1/φ (золотой поток) спектр демонстрирует максимальную фрактальную сложность и самоподобие.",enginePreset:{type:"hofstadterButterfly",compositeOp:"smoothMorph",zoom:3,rotX:.3,rotY:.4}},{id:"antoine-necklace-v2",name:"Ожерелье Антуана (дикие зацепления)",englishName:"Antoine's Necklace Wild Linking",category:"topological_physical",formula:"C = ∩_n A_n, A_{n+1} ⊂ A_n, каждое звено зацеплено с соседними",dimension:"D ≈ 1.0 (канторово множество торов)",generatorRule:"Каждый тор заменяется на кольцо меньших торов, попарно зацепленных друг с другом",description:"Первый пример «дикого» вложения канторова множества в ℝ³. Топологически неэквивалентно стандартному канторову множеству.",phiPiRelation:"Количество торов на каждом уровне = 2·φ ≈ 3.236 → округление до 3 даёт наиболее плотное зацепление.",enginePreset:{type:"antoineNecklace",compositeOp:"smoothUnion",zoom:3,rotX:.4,rotY:.3,iterations:5}},{id:"henon-attractor-v2",name:"Аттрактор Энона (v2)",englishName:"Hénon Attractor (Expanded)",category:"expanded_real",formula:"xₙ₊₁ = 1 − axₙ² + yₙ, yₙ₊₁ = bxₙ (a=1.4, b=0.3)",dimension:"D ≈ 1.261 (фрактальная размерность аттрактора)",generatorRule:"Отображение Энона — дискретная динамическая система. 3D-обобщение добавляет третью координату с модуляцией.",description:"Один из первых изученных странных аттракторов. Демонстрирует хаотическое поведение в диссипативной системе. Фазовое пространство — сложенные полосы.",phiPiRelation:"Параметр a = 1.4 ≈ φ − 0.218. При a = φ аттрактор переходит в хаос через каскад удвоения периода.",enginePreset:{type:"henonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"aizawa-attractor-v2",name:"Аттрактор Аизавы (v2)",englishName:"Aizawa Attractor (Expanded)",category:"expanded_real",formula:"ẋ = (z−b)x − dy, ẏ = dx + (z−b)y, ż = c + az − z³/3 − (x²+y²)(1+ez) + fz x³",dimension:"D ≈ 2.1 (тороидальный хаос)",generatorRule:"Система ОДУ с тороидальной топологией. Параметры: a=0.95, b=0.7, c=0.6, d=3.5, e=0.25, f=0.1.",description:"Тороидальный странный аттрактор с характерной «пузырьковой» структурой. Демонстрирует переход от порядка к хаосу через квазипериодичность.",phiPiRelation:"Параметр d = 3.5 ≈ 2φ + 0.382. Тороидальная геометрия связана с золотым сечением через иррациональность числа вращения.",enginePreset:{type:"aizawaAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.6,iterations:12}},{id:"thomas-attractor-v2",name:"Аттрактор Томаса (v2)",englishName:"Thomas's Cyclically Symmetric Attractor (Expanded)",category:"expanded_real",formula:"ẋ = sin(y) − bx, ẏ = sin(z) − by, ż = sin(x) − bz",dimension:"D ≈ 2.0 (C₃-симметричный)",generatorRule:"Циклически симметричная система с 3-кратной осью. При b = 0.208186 — хаотический лабиринт.",description:"Простейший пример циклически симметричного хаоса. Траектория образует симметричный лабиринт в форме трёхмерного узла.",phiPiRelation:"Критическое значение b ≈ 0.208186 связано с золотым сечением: b ≈ 1/(2φ² + 1).",enginePreset:{type:"thomasAttractor",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.4,iterations:14}},{id:"halvorsen-attractor-v2",name:"Аттрактор Хальворсена (v2)",englishName:"Halvorsen Attractor (Expanded)",category:"expanded_real",formula:"ẋ = −ax − 4y − 4z − y², ẏ = −ay − 4z − 4x − z², ż = −az − 4x − 4y − x²",dimension:"D ≈ 2.3 (3-кратная симметрия)",generatorRule:"Циклическая система с квадратичной нелинейностью. a = 1.89 даёт наиболее выразительную структуру.",description:"Трёхсимметричный странный аттрактор с характерными «лепестками». Каждый лепесток — спиральная траектория.",phiPiRelation:"Оптимальное a = 1.89 ≈ φ + 0.272. Три лепестка = 2π/(3φ) радиан на каждый.",enginePreset:{type:"halvorsenAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.7,iterations:12}},{id:"julia-set-3d",name:"Множество Жюлиа 3D",englishName:"Julia Set (c = −0.7 + 0.27i)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ² + c, c = −0.7 + 0.27015i",dimension:"D ≈ 1.75 (граница множества Жюлиа)",generatorRule:"Классическое квадратичное отображение Жюлиа. 3D-проекция через стереографическую проекцию.",description:"Одно из самых красивых множеств Жюлиа. Связано с множеством Мандельброта: каждая точка c даёт уникальную геометрию.",phiPiRelation:"c = −0.7 + 0.27i ≈ −1/φ + i/(2φ²). Граница множества имеет золотую спиральную структуру.",enginePreset:{type:"juliaSet3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.4,iterations:18}},{id:"multibrot3",name:"Мультиброт z³+c",englishName:"Multibrot Set (z³ + c)",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ³ + c",dimension:"D = 2 (граница), внутренность — 3-кратная симметрия",generatorRule:"Обобщение Мандельброта на степень 3. Вместо 2-кратной — 3-кратная симметрия.",description:"Трёхкратное обобщение множества Мандельброта. Имеет 3-кратную вращательную симметрию вместо 2-кратной.",phiPiRelation:"Каждая степень d даёт d-кратную симметрию. При d = φ+1 ≈ 2.618 получается промежуточная структура.",enginePreset:{type:"multibrot3",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14}},{id:"tetrix",name:"Тетрикс (Тетраэдр Серпинского)",englishName:"Tetrix (Sierpinski Tetrahedron)",category:"ifs_attractors",formula:"IFS: 4 аффинных сжатия к вершинам тетраэдра с коэффициентом 1/2",dimension:"D = log(4)/log(2) = 2.0",generatorRule:"Каждый тетраэдр заменяется на 4 тетраэдра в половину размера, расположенных в вершинах исходного.",description:"3D-аналог треугольника Серпинского. Единственный IFS-фрактал, размерность которого точно равна 2.",phiPiRelation:"4 вершины тетраэдра = 3-мерный аналог золотого треугольника. Коэффициент 1/2 = 1/φ⁰.",enginePreset:{type:"tetrix",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.6,iterations:12}},{id:"gosper-curve-v2",name:"Кривая Госпера (Остров Госпера) (v2)",englishName:"Gosper Curve (Gosper Island) (Expanded)",category:"expanded_real",formula:"L-система: F → F+F−−F−F++FF+F−, угол 60°",dimension:"D = log(7)/log(3) ≈ 1.771",generatorRule:"Каждый сегмент заменяется на 7 сегментов в √7 раз меньших, с поворотом на arctan(√3/5).",description:"Единственная кривая, заполняющая плоскость, tiles которой — шестиугольники. Основа гексагонального фрактального мощения.",phiPiRelation:"7 сегментов / 3 масштаб = log(7)/log(3). Угол поворота ≈ 13.898° связан с φ через √7.",enginePreset:{type:"gosperCurve",compositeOp:"smoothUnion",zoom:2.2,rotX:.5,rotY:.3,iterations:7}},{id:"l-system-plant",name:"L-система: Фрактальное растение",englishName:"L-System Plant (Phyllotactic Branching)",category:"geometric_curves",formula:"Axiom: F, Rules: F → F[+F]F[-F][F], угол = 137.5° (золотой)",dimension:"D ≈ 1.45 (филогенетическое ветвление)",generatorRule:"Рекурсивное ветвление с золотым углом 137.5° между побегами. Каждый уровень — масштабирование на 1/φ.",description:"Математическая модель роста растения. Золотой угол обеспечивает максимальную инсоляцию каждого листа.",phiPiRelation:"Золотой угол = 2π(1 − 1/φ) ≈ 137.508°. Фибоначчиево филлотаксисное расположение листьев.",enginePreset:{type:"lSystemPlant",compositeOp:"smoothUnion",zoom:2.5,rotX:.2,rotY:.8,iterations:9}},{id:"schwarz-p",name:"Поверхность Шварца P",englishName:"Schwarz P Minimal Surface",category:"topological_physical",formula:"cos(x) + cos(y) + cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set суммы косинусов по трём осям. Периодическая структура с кубической симметрией.",description:"Одна из трёх классических трипериодических минимальных поверхностей (TPMS). Встречается в структуре мембран и кристаллах.",phiPiRelation:"Масштаб поверхности = φ. Периодичность по трём осям = 2π. Связь с кубической симметрией O_h.",enginePreset:{type:"schwarzP",compositeOp:"smoothUnion",zoom:2,rotX:.4,rotY:.5,iterations:6}},{id:"schwarz-d",name:"Поверхность Шварца D (Diamond)",englishName:"Schwarz D Minimal Surface",category:"topological_physical",formula:"sin(x)sin(y)sin(z) − cos(x)cos(y)cos(z) = 0",dimension:"D = 2 (минимальная поверхность)",generatorRule:"Нулевой уровень set разности произведений sin и cos. Алмазная топология каналов.",description:"Вторая из трёх классических TPMS. Топология каналов соответствует алмазной кристаллической решётке.",phiPiRelation:"Масштаб = φ. Встречается в структуре опалов и фотонных кристаллов с золотым сечением.",enginePreset:{type:"schwarzD",compositeOp:"smoothUnion",zoom:2,rotX:.3,rotY:.6,iterations:6}},{id:"apollonian-gasket-v2",name:"Прокладка Аполлония (v2)",englishName:"Apollonian Gasket (Expanded)",category:"expanded_real",formula:"Рекурсивное вписывание окружностей: каждая касается трёх соседних",dimension:"D ≈ 1.3057 (точно вычислена Бойдом)",generatorRule:"Начальные 3 взаимно касающиеся окружности. На каждом шаге в каждую криволинейную треугольную область вписывается новая окружность.",description:"Один из старейших известных фракталов (Аполлоний Пергский, ~200 до н.э.). Связан с теорией чисел и p-адическими формами.",phiPiRelation:"Кривизны окружностей образуют целочисленные квадруuples (a,b,c,d) с a²+b²+c²+d² = (a+b+c+d)²/2. Золотое сечение в соотношении радиусов.",enginePreset:{type:"apollonianGasket",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:10}},{id:"barnsley-fern-3d",name:"Папоротник Барнсли 3D",englishName:"Barnsley Fern 3D",category:"ifs_attractors",formula:"4 аффинных преобразования: стебель (1%), лист (85%), левый побег (7%), правый побег (7%)",dimension:"D ≈ 1.45 (IFS-аттрактор)",generatorRule:"Система итерируемых функций с 4 преобразованиями. Вероятностный выбор: p = {0.01, 0.85, 0.07, 0.07}.",description:"3D-обобщение классического папоротника Барнсли. Добавлена третья координата с уменьшением масштаба на каждом уровне.",phiPiRelation:"Коэффициенты преобразований: 0.85 ≈ 1/φ + 0.232. Золотое сечение в масштабах листьев.",enginePreset:{type:"barnsleyFern3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.2,rotY:.5,iterations:10}},{id:"klein-quartic",name:"Квартика Клейна",englishName:"Klein Quartic Surface",category:"topological_physical",formula:"x³y + y³z + z³x = 0 (в ℂP²)",dimension:"D = 2 (поверхность рода 3)",generatorRule:"Поверхность 4-го порядка в комплексной проективной плоскости. Группа симметрий PSL(2,7) порядка 168.",description:"Поверхность с максимальной возможной симметрией для рода 3 (теорема Гурвица: 84(g−1) = 168). Связана с группой Фано.",phiPiRelation:"168 = 8 × 21 = 8 × 3 × 7. Порядок группы симметрий связан с φ через число Фибоначчи F(8) = 21.",enginePreset:{type:"kleinQuartic",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:8}},{id:"sphere-packing",name:"Фрактальная упаковка сфер",englishName:"Fractal Sphere Packing (FCC)",category:"constructive",formula:"Рекурсивное размещение сфер в гранях FCC-решётки с масштабом 1/φ",dimension:"D ≈ 2.47 (упаковка)",generatorRule:"На каждом уровне: FCC-решётка сфер, каждая сфера заполняется меньшими сферами в октаэдрических и тетраэдрических пустотах.",description:"Модель плотнейшей упаковки сфер с фрактальной иерархией. Связана с упаковкой Кеплера и гипотезой Хейлса.",phiPiRelation:"Масштаб вложения = φ. FCC-упаковка = π/(3√2) ≈ 0.7405. Золотое сечение в соотношении пустот.",enginePreset:{type:"spherePacking",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:7}},{id:"nova-fractal",name:"Нова-фрактал",englishName:"Nova Fractal",category:"algebraic_complex",formula:"zₙ₊₁ = zₙ − zₙ³/(3zₙ²) + c (гибрид Ньютона и Мандельброта)",dimension:"D ≈ 2 (граница бассейнов)",generatorRule:"Итерация Ньютона для z³ = 1 с добавлением параметра c как в Мандельброте.",description:"Гибрид метода Ньютона и множества Мандельброта. Объединяет фрактальную структуру бассейнов притяжения с геометрией Мандельброта.",phiPiRelation:"3-кратная симметрия бассейнов = 2π/3. Параметр c связан с φ через положение бассейнов.",enginePreset:{type:"novaFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:14}},{id:"golden-knot",name:"Золотой узел",englishName:"Golden Knot (φ-Torus Knot)",category:"topological_physical",formula:"(R + r·cos(qθ))·(cos θ, sin θ), r·sin(qθ)), q = φ",dimension:"D = 1 (кривая), D ≈ 1.3 с трубкой",generatorRule:"Торический узел с иррациональным числом намотки q = φ. Замыкание при конечном числе оборотов.",description:"Торический узел с золотым числом намотки. Иррациональность φ делает кривую всюду плотной на торе.",phiPiRelation:"Число намотки = φ = (1+√5)/2. Золотой узел — единственная кривая с иррациональной намоткой на торе.",enginePreset:{type:"goldenKnot",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:6}},{id:"spherical-harmonics",name:"Сферические гармоники",englishName:"Spherical Harmonics (Quantum Orbitals)",category:"topological_physical",formula:"Yₗᵐ(θ,φ) — собственные функции оператора Лапласа на сфере",dimension:"D = 2 (поверхность), D ≈ 2.5 с модуляцией",generatorRule:"Суперпозиция сферических гармоник Y₃₂ и Y₄₂. Радиальная модуляция = 1 + 0.4·Y₃₂ + 0.25·Y₄₂.",description:"Квантовые орбитальные формы — собственные функции углового момента. Визуализация атомных орбиталей.",phiPiRelation:"Квантовые числа l, m связаны с золотым сечением: l = 3, m = 2 → l/m = φ − 0.118 ≈ 3/2.",enginePreset:{type:"sphericalHarmonics",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:6}},{id:"reaction-diffusion",name:"Реакция-диффузия (Тьюринг)",englishName:"Reaction-Diffusion (Gray-Scott)",category:"topological_physical",formula:"∂u/∂t = Du∇²u − uv² + F(1−u), ∂v/∂t = Dv∇²v + uv² − (F+k)v",dimension:"D ≈ 2.3 (Тьюринговые паттерны)",generatorRule:"Модель Грея-Скотта с параметрами F = 0.04 + φ·0.01, k = 0.06 + φ·0.005. Два реагента, диффузия и реакция.",description:"Математическая модель образования биологических паттернов: пятна, полоса, спирали. Объясняет окраску животных.",phiPiRelation:"Параметры F и k используют φ. Тьюринговые паттерны возникают при соотношении диффузий Du/Dv ≈ φ².",enginePreset:{type:"reactionDiffusion",compositeOp:"smoothUnion",zoom:2.2,rotX:.3,rotY:.5,iterations:8,paletteSeed:92}},{id:"kleinian-limit-set",name:"Пределное множество Клейна",englishName:"Kleinian Limit Set",category:"expanded_real",formula:"Γ = ⟨γ₁, γ₂⟩  PSL(2,ℂ), Λ(Γ) = замыкание орбиты",dimension:"D ≈ 1.2-2.0 (зависит от группы)",generatorRule:"Мёбиус-инверсии порождают фрактальное пределное множество.",description:"Фрактальная граница орбит дискретной группы Мёбиусовых преобразований. Аппроксимация круговыми упаковками.",phiPiRelation:"Соотношения сторон фундаментальной области используют φ.",enginePreset:{type:"kleinianLimit",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.3,iterations:10,paletteSeed:5}},{id:"tricorn-mandelbar",name:"ТрикORN (Мандельбар)",englishName:"Tricorn / Mandelbar",category:"expanded_real",formula:"z → z̄² + c (сопряжение вместо квадрата)",dimension:"D ≈ 2 (граница)",generatorRule:"Итерация z_{n+1} = conjugate(z_n)² + c. Антилинейное отображение.",description:'Сопряжённое множество Мандельброта с характерными "рогами" и антианалитической симметрией.',phiPiRelation:"Периоды кардиоид используют φ в параметризации.",enginePreset:{type:"tricorn",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.6,iterations:18,paletteSeed:12}},{id:"mandelbar-3d",name:"3D Мандельбар",englishName:"3D Mandelbar Fractal",category:"expanded_real",formula:"z → z̄ + c в 3D обобщении",dimension:"D ≈ 2.5-3.0",generatorRule:"3D обобщение антианалитического отображения Мандельбара.",description:"Трёхмерная версия трикорна с характерными шипами и зеркальной симметрией.",phiPiRelation:"Показатель степени n связан с φ.",enginePreset:{type:"mandelbar",compositeOp:"smoothUnion",zoom:2.8,rotX:.35,rotY:.45,iterations:14,paletteSeed:19}},{id:"phoenix-memory-fractal",name:"Фрактал Феникс (память)",englishName:"Phoenix Fractal (Memory)",category:"expanded_real",formula:"z_{n+1} = z_n² + c + p·z_{n-1}",dimension:"D ≈ 1.5-2.0",generatorRule:"Итерация с памятью: текущее значение зависит от двух предыдущих.",description:'Фрактал с "памятью" — каждое состояние зависит от двух предыдущих. Создаёт крылоподобные структуры.',phiPiRelation:"Параметр памяти p = 1/φ создаёт наиболее симметричные формы.",enginePreset:{type:"phoenixFractal",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:16,paletteSeed:27}},{id:"e8-lattice-projection",name:"Проекция решётки E8",englishName:"E8 Lattice Projection",category:"expanded_real",formula:"E8  ℝ⁸, проекция на ℝ³ через золотое сечение",dimension:"D = 8 (полная), D ≈ 3.2 (проекция)",generatorRule:"240 корней E8 проецируются на 3D через икосаэдральную симметрию.",description:"Исключительная группа Ли E8 — самая симметричная структура в математике. 240 векторов корней.",phiPiRelation:"Проекция E8 на 3D использует φ-симметрию икосаэдра.",enginePreset:{type:"e8Lattice",compositeOp:"smoothUnion",zoom:3,rotX:.6,rotY:.3,iterations:8,paletteSeed:34}},{id:"chladni-vibrational-modes",name:"Фигуры Хладни",englishName:"Chladni Vibrational Figures",category:"expanded_real",formula:"⁴u − k⁴u = 0 (уравнение изгибных колебаний пластины)",dimension:"D ≈ 2 (узловые линии)",generatorRule:"Узловые линии стоячих волн на квадратной/круглой пластине.",description:"Визуализация собственных мод колебаний. Песок собирается на узловых линиях, образуя фрактальные паттерны.",phiPiRelation:"Соотношения частот мод используют φ для негармонических пластин.",enginePreset:{type:"chladniFigures",compositeOp:"smoothUnion",zoom:2.5,rotX:0,rotY:0,iterations:10,paletteSeed:41}},{id:"koch-snowflake-3d",name:"Снежинка Коха 3D",englishName:"3D Koch Snowflake",category:"expanded_real",formula:"Рекурсивное добавление тетраэдров на каждую грань",dimension:"D = log(4)/log(3) ≈ 1.261 (кривая), D ≈ 2.3 (поверхность)",generatorRule:"Каждая грань заменяется на 4 меньших с тетраэдральным выступом.",description:"Трёхмерное обобщение снежинки Коха. Бесконечная площадь поверхности при конечном объёме.",phiPiRelation:"Масштабный коэффициент 1/3 связан с φ через золотой треугольник.",enginePreset:{type:"kochSnowflake3D",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.5,iterations:7,paletteSeed:48}},{id:"cantor-dust-3d",name:"Канторова пыль 3D",englishName:"3D Cantor Dust",category:"expanded_real",formula:"C = C × C × C, рекурсивное удаление центральных кубов",dimension:"D = 3·log(2)/log(3) ≈ 1.893",generatorRule:"Куб делится на 27 подкубов, удаляются все кроме 8 угловых.",description:"Трёхмерный аналог множества Кантора. Совершенно несвязное фрактальное множество.",phiPiRelation:"Коэффициент подобия 1/3 связан с φ через золотое сечение отрезка.",enginePreset:{type:"cantorDust",compositeOp:"smoothUnion",zoom:3,rotX:.5,rotY:.3,iterations:8,paletteSeed:55}},{id:"sierpinski-carpet-3d",name:"Ковёр Серпинского",englishName:"Sierpinski Carpet",category:"expanded_real",formula:"Квадрат делится на 9, центральный удаляется, рекурсия",dimension:"D = log(8)/log(3) ≈ 1.893",generatorRule:"3×3 сетка, удаление центрального квадрата на каждом уровне.",description:"Универсальная кривая Серпинского — содержит все одномерные кривые. Нулевая площадь.",phiPiRelation:"Масштаб 1/3 и 8 копий создают φ-пропорции в предельном множестве.",enginePreset:{type:"sierpinskiCarpet",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.4,iterations:7,paletteSeed:62}},{id:"fractal-spire-exponential",name:"Фрактальный шпиль (e^z+c)",englishName:"Fractal Spire (Exponential)",category:"expanded_real",formula:"z → e^z + c (экспоненциальное отображение)",dimension:"D ≈ 2 (граница)",generatorRule:"Итерация экспоненциальной функции. Создаёт бесконечные спиральные башни.",description:"Фрактал экспоненциального отображения. Бесконечные спиральные шпили уходят в комплексную бесконечность.",phiPiRelation:"Период 2πi и золотое сечение создают резонансные башни.",enginePreset:{type:"fractalSpire",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:14,paletteSeed:69}},{id:"vicsek-fractal-3d",name:"Фрактал Вичека",englishName:"Vicsek Fractal (Cross)",category:"expanded_real",formula:"Крестообразное рекурсивное разбиение 3×3×3",dimension:"D = log(5)/log(3) ≈ 1.465",generatorRule:"3×3×3 куб, оставляются центральный и 4 угловых подкуба.",description:"Крестообразный фрактал Вичека. Самоподобная структура с крестообразной симметрией.",phiPiRelation:"5 копий при масштабе 1/3 создают φ-пропорции.",enginePreset:{type:"vicsekFractal",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.4,iterations:8,paletteSeed:76}},{id:"fractal-cross-3d",name:"Фрактальный крест 3D",englishName:"3D Fractal Cross",category:"expanded_real",formula:"Рекурсивное крестообразное IFS с 6 направлениями",dimension:"D ≈ 2.0",generatorRule:"6 аффинных преобразований вдоль осей ±x, ±y, ±z.",description:"Трёхмерный фрактальный крест с шестью лучами. Рекурсивная структура с октаэдральной симметрией.",phiPiRelation:"6 направлений связаны с икосаэдральной φ-симметрией.",enginePreset:{type:"fractalCross",compositeOp:"smoothUnion",zoom:2.8,rotX:.45,rotY:.35,iterations:8,paletteSeed:83}},{id:"chua-circuit-double-scroll",name:"Схема Чуа (двойной скролл)",englishName:"Chua's Circuit Double Scroll",category:"expanded_real",formula:"ẋ = α(y − x − f(x)), ẏ = x − y + z, ż = −βy",dimension:"D ≈ 2.2 (странный аттрактор)",generatorRule:"Нелинейная цепь с кусочно-линейной характеристикой. α=15.6, β=28, m₀=−1.143, m₁=−0.714.",description:"Первая физически реализованная хаотическая система. Фазовый портрет — «бабочка» двойного скролла.",phiPiRelation:"Параметры α/β ≈ 0.557 ≈ 1/φ. Пороговое значение β связано с золотым сечением.",enginePreset:{type:"chuaCircuit",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.5,iterations:14,paletteSeed:8}},{id:"standard-map-chirikov",name:"Стандартное отображение Чирикова-Тейлора",englishName:"Standard Map (Chirikov-Taylor)",category:"expanded_real",formula:"pₙ₊₁ = pₙ + K sin(θₙ), θₙ₊₁ = θₙ + pₙ₊₁ (mod 2π)",dimension:"D ≈ 2.0 (стохастический слой)",generatorRule:"Гамильтоново отображение с параметром хаоса K. При K > 0.9716 — глобальный хаос.",description:"Фундаментальная модель хаотической динамики. Демонстрирует переход от порядка к хаосу через каскад островов.",phiPiRelation:"Золотое сечение определяет критические KAM-торы, устойчивые при максимальном хаосе.",enginePreset:{type:"standardMap",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:12,paletteSeed:15}},{id:"ikeda-map",name:"Отображение Икеды",englishName:"Ikeda Map",category:"expanded_real",formula:"zₙ₊₁ = 1 + u·zₙ·exp(i·tₙ), tₙ = 0.4 − 6/(1+|zₙ|²)",dimension:"D ≈ 1.7 (странный аттрактор)",generatorRule:"Комплексное отображение с u=0.9. Моделирует распространение света в нелинейной среде.",description:"Аттрактор Икеды описывает распространение лучей в нелинейной оптической среде. U-образная структура.",phiPiRelation:"Параметр u = 0.9 ≈ φ − 0.718. Фазовая модуляция использует π.",enginePreset:{type:"ikedaMap",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:14,paletteSeed:22}},{id:"fatou-set-basin",name:"Множество Фату (граница бассейна)",englishName:"Fatou Set (Basin Boundary)",category:"expanded_real",formula:"zₙ₊₁ = zₙ² + c, c = 0.7885·e^{iθ}",dimension:"D ≈ 1.0-2.0 (граница бассейна)",generatorRule:"Бассейны сходимости орбит z²+c. Граница между бассейнами — фрактальная кривая.",description:"Множество Фату — дополнение множества Жюлиа. Область, где орбиты сходятся к фиксированным точкам.",phiPiRelation:"Параметр c = 0.7885 ≈ φ/2. Вращение c по кругу раскрывает φ-структуру.",enginePreset:{type:"fatouSet",compositeOp:"smoothUnion",zoom:2.8,rotX:.4,rotY:.3,iterations:16,paletteSeed:29}},{id:"fitzhugh-nagumo-neural",name:"Модель ФитцХью-Нагумо (нейродинамика)",englishName:"FitzHugh-Nagumo Neural Dynamics",category:"expanded_real",formula:"dv/dt = v − v³/3 + w + I, dw/dt = (v − a + bw)/τ",dimension:"D ≈ 2.1 (фазовый портрет)",generatorRule:"Упрощённая модель Ходжкина-Хаксли. a=0.7, b=0.8, τ=12.5.",description:"Модель нейронного импульса. Фазовый портрет — предельный цикл с порогом возбуждения.",phiPiRelation:"Параметр τ = 12.5 ≈ 8φ. Порог возбуждения a = 0.7 ≈ 1/φ + 0.082.",enginePreset:{type:"fitzHugh",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:12,paletteSeed:36}},{id:"rossler-attractor",name:"Аттрактор Рёсснера",englishName:"Rössler Attractor",category:"expanded_real",formula:"ẋ = −y − z, ẏ = x + ay, ż = b + z(x − c)",dimension:"D ≈ 2.0 (странный аттрактор)",generatorRule:"a=0.2, b=0.2, c=5.7. Простейший аттрактор с одной полосой.",description:"Аттрактор Рёсснера — простейшая система с хаотическим поведением. Одна лента, скрученная в спираль.",phiPiRelation:"c = 5.7 ≈ 3φ + 1.082. Частота вращения связана с φ через отношение a/b.",enginePreset:{type:"rosslerAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.3,rotY:.6,iterations:14,paletteSeed:43}},{id:"duffing-attractor",name:"Аттрактор Даффинга",englishName:"Duffing Attractor",category:"expanded_real",formula:"ẍ + δẋ + αx + βx³ = γ cos(ωt)",dimension:"D ≈ 2.2 (нелинейный осциллятор)",generatorRule:"α=1, β=5, δ=0.02, γ=8. Нелинейная пружина с жёсткостью k(x) = α + βx².",description:"Нелинейный осциллятор Даффинга. Двойная потенциальная яма создаёт хаотические переключения.",phiPiRelation:"Отношение γ/β = 1.6 ≈ φ. Частота ω связана с золотым сечением.",enginePreset:{type:"duffingAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:12,paletteSeed:50}},{id:"logistic-bifurcation",name:"Бифуркация логистического отображения",englishName:"Logistic Map Bifurcation",category:"expanded_real",formula:"xₙ₊₁ = r·xₙ(1 − xₙ), δ ≈ 4.669 (константа Фейгенбаума)",dimension:"D ≈ 1.0 (бифуркационная диаграмма)",generatorRule:"Каскад удвоения периода при r ∈ [2.5, 4.0]. Универсальная константа δ.",description:"Бифуркационная диаграмма логистического отображения — универсальный путь к хаосу через удвоение периода.",phiPiRelation:"Константа Фейгенбаума δ ≈ 4.669 ≈ 3φ − 0.173. Универсальность для всех одномерных отображений.",enginePreset:{type:"logisticBifurcation",compositeOp:"smoothUnion",zoom:2.5,rotX:0,rotY:.5,iterations:10,paletteSeed:57}},{id:"dejong-attractor",name:"Аттрактор Де Йонга",englishName:"DeJong Strange Attractor",category:"expanded_real",formula:"x' = sin(ay) − cos(bx), y' = sin(cx) − cos(dy)",dimension:"D ≈ 2.0 (странный аттрактор)",generatorRule:"Тригонометрическое отображение с 4 параметрами. a=2.24, b=−0.43, c=−0.65, d=2.43.",description:"Странный аттрактор Питера Де Йонга. Элегантные спиральные структуры из простых тригонометрических функций.",phiPiRelation:"Параметры подобраны так, что a−d ≈ −0.19 ≈ 1/φ² − 0.81.",enginePreset:{type:"deJongAttractor",compositeOp:"smoothUnion",zoom:2.8,rotX:.5,rotY:.3,iterations:14,paletteSeed:64}},{id:"pickover-attractor",name:"Аттрактор Пиковера",englishName:"Pickover Strange Attractor",category:"expanded_real",formula:"x' = sin(ay) + c·cos(ax), y' = sin(bx) + d·cos(by)",dimension:"D ≈ 2.0",generatorRule:"Модификация аттрактора Де Йонга Клиффордом Пиковером. a=−1.64, b=1.9, c=−0.31, d=0.72.",description:"Вариация аттрактора Де Йонга с дополнительными косинусными членами. Создаёт более сложные спиральные узоры.",phiPiRelation:"Параметры связаны с φ через золотые пропорции тригонометрических функций.",enginePreset:{type:"pickoverAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.6,iterations:14,paletteSeed:71}},{id:"weierstrass-surface",name:"Функция Вейерштрасса (нигде не дифференцируема)",englishName:"Weierstrass Nowhere-Differentiable Surface",category:"expanded_real",formula:"W(x) = Σ aⁿ cos(bⁿ πx), ab > 1 + 3π/2",dimension:"D ≈ 2.3 (фрактальная поверхность)",generatorRule:"a=0.5, b=7. Суперпозиция косинусоид с экспоненциально растущей частотой.",description:"Классический пример непрерывной, но нигде не дифференцируемой функции. Фрактальная поверхность.",phiPiRelation:"Условие ab > 1+3π/2. При a = 1/φ поверхность сохраняет фрактальность.",enginePreset:{type:"weierstrass3D",compositeOp:"smoothUnion",zoom:2.5,rotX:.3,rotY:.5,iterations:8,paletteSeed:78}},{id:"popcorn-function",name:"Функция «Попкорн» (Celldoor)",englishName:"Popcorn Function (Celldoor)",category:"expanded_real",formula:"x' = x − c·sin(y + tan(y)), y' = y − c·sin(x + tan(x))",dimension:"D ≈ 1.5-2.0",generatorRule:"Итеративное отображение с тангенциальной модуляцией. c = 0.4 + 0.15·sin(t).",description:"Фрактальное отображение «Попкорн» от Celldoor. Тангенциальные члены создают «взрывные» паттерны.",phiPiRelation:"Параметр c модулируется с периодом, связанным с φ.",enginePreset:{type:"popcornFunction",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.4,iterations:10,paletteSeed:85}},{id:"bedhead-attractor",name:"Аттрактор Bedhead (3D хаос)",englishName:"Bedhead 3D Chaotic Attractor",category:"expanded_real",formula:"x' = sin(ay·z) − z·cos(bx·y), y' = z·sin(ax) − cos(by·z), z' = c·sin(xz)",dimension:"D ≈ 2.3",generatorRule:"Трёхмерное тригонометрическое отображение с перекрёстными членами. a=0.95, b=0.7, c=0.6.",description:"Трёхмерный хаотический аттрактор «растрёпанной головы». Нелинейные перекрёстные члены создают объёмные спирали.",phiPiRelation:"Параметры a,b,c подобраны для максимального хаоса при минимальной сложности.",enginePreset:{type:"bedheadAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.3,iterations:14,paletteSeed:90}},{id:"fourspot-attractor",name:"Аттрактор FourSpot (4-крыловой)",englishName:"FourSpot 4-Wing Chaotic Attractor",category:"expanded_real",formula:"x' = yz − ax, y' = xz − y, z' = −xy + z",dimension:"D ≈ 2.2",generatorRule:"Система ОДУ с 4 крыльями аттрактора. a = 2.0 + 0.5·sin(t).",description:"Четырёхкрылый хаотический аттрактор. Траектория переключается между 4 лопастями.",phiPiRelation:"Параметр a модулируется в диапазоне, связанном с φ.",enginePreset:{type:"fourSpotAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.4,rotY:.5,iterations:12,paletteSeed:95}},{id:"svensson-attractor",name:"Аттрактор Свенссона",englishName:"Svensson Strange Attractor",category:"expanded_real",formula:"x' = d·sin(ay) − c, y' = b·sin(cx)",dimension:"D ≈ 2.0",generatorRule:"Двумерное отображение с тригонометрической модуляцией. a=2.0, b=0.2, c=1.57, d=1.4.",description:"Странный аттрактор Свенссона. Элегантные спиральные узоры из простых тригонометрических функций.",phiPiRelation:"Параметр c = 1.57 ≈ π/2. Золотое сечение в соотношениях частот.",enginePreset:{type:"svenssonAttractor",compositeOp:"smoothUnion",zoom:2.5,rotX:.5,rotY:.4,iterations:14,paletteSeed:99}}],B2=({isOpen:p,onClose:s,onApplyPreset:f})=>{var W;const[u,v]=k.useState("catalog"),[S,x]=k.useState("all"),[j,A]=k.useState(""),[y,U]=k.useState(ul[0]),[O,B]=k.useState(null),q=k.useMemo(()=>ul.filter(F=>{const re=S==="all"||F.category===S,z=j.toLowerCase().trim();if(!z)return re;const H=F.name.toLowerCase().includes(z)||F.englishName.toLowerCase().includes(z)||F.formula.toLowerCase().includes(z)||F.dimension.toLowerCase().includes(z)||F.description.toLowerCase().includes(z);return re&&H}),[S,j]);if(!p)return null;const P=F=>{f(F.enginePreset,F.name),B(F.id),setTimeout(()=>{B(null),s()},450)},J=F=>{switch(F){case"geometric_curves":return l.jsx(Ar,{className:"w-4 h-4"});case"constructive":return l.jsx(vi,{className:"w-4 h-4"});case"algebraic_complex":return l.jsx(Zh,{className:"w-4 h-4"});case"multidimensional":return l.jsx(gh,{className:"w-4 h-4"});case"ifs_attractors":return l.jsx(pl,{className:"w-4 h-4"});case"stochastic":return l.jsx(gi,{className:"w-4 h-4"});case"topological_physical":return l.jsx(mf,{className:"w-4 h-4"})}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200",children:l.jsxs("div",{className:"relative w-full max-w-6xl h-[90vh] bg-slate-950/95 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-slate-900/50",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400",children:l.jsx(xi,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsxs("h2",{className:"text-lg font-semibold tracking-tight text-white flex items-center gap-2",children:["Атлас Канонических Фракталов и Научная Синергия",l.jsxs("span",{className:"text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono",children:["9 Семейств · ",ul.length," Канонических Фракталов"]})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Полная классификация, точные формулы, размерности Хаусдорфа и 3D-исследование"})]})]}),l.jsx("button",{id:"btn-atlas-modal-close",onClick:s,className:"p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors",title:"Закрыть",children:l.jsx(fl,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex border-b border-slate-800 bg-slate-900/30 px-6 gap-2",children:[l.jsxs("button",{id:"tab-atlas-catalog",onClick:()=>v("catalog"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="catalog"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(vi,{className:"w-4 h-4"}),"Атлас и Таксономия (",ul.length,")"]}),l.jsxs("button",{id:"tab-atlas-manifest",onClick:()=>v("manifest"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="manifest"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Ks,{className:"w-4 h-4 text-amber-400"}),"Манифест: Синергия φ и π (Без Конфликта)"]}),l.jsxs("button",{id:"tab-atlas-technologies",onClick:()=>v("technologies"),className:`py-3 px-4 text-xs font-medium border-b-2 transition-colors flex items-center gap-2 ${u==="technologies"?"border-indigo-500 text-indigo-400 bg-indigo-500/5":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[l.jsx(Qs,{className:"w-4 h-4 text-cyan-400"}),"Технологии 3D-Исследования Изнутри"]})]}),u==="catalog"&&l.jsxs("div",{className:"flex-1 flex flex-col md:flex-row overflow-hidden",children:[l.jsxs("div",{className:"w-full md:w-5/12 lg:w-4/12 border-r border-slate-800 flex flex-col bg-slate-900/20",children:[l.jsx("div",{className:"p-3 border-b border-slate-800",children:l.jsxs("div",{className:"relative",children:[l.jsx(s2,{className:"w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"}),l.jsx("input",{type:"text",placeholder:"Поиск фрактала, формулы, размерности...",value:j,onChange:F=>A(F.target.value),className:"w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/70 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),j&&l.jsx("button",{onClick:()=>A(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs",children:"✕"})]})}),l.jsxs("div",{className:"px-3 py-2 border-b border-slate-800 overflow-x-auto flex gap-1.5 scrollbar-thin",children:[l.jsxs("button",{onClick:()=>x("all"),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors ${S==="all"?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:["Все (",ul.length,")"]}),sf.map(F=>{var re;return l.jsxs("button",{onClick:()=>x(F.id),className:`px-2.5 py-1 text-[11px] rounded-md font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${S===F.id?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200"}`,children:[J(F.id),l.jsx("span",{children:((re=F.title.split(".")[1])==null?void 0:re.trim())||F.title})]},F.id)})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1 divide-y divide-slate-800/40",children:q.length===0?l.jsx("div",{className:"p-6 text-center text-xs text-slate-500",children:"По запросу ничего не найдено"}):q.map(F=>{var z;const re=(y==null?void 0:y.id)===F.id;return l.jsxs("button",{id:`btn-fractal-${F.id}`,onClick:()=>U(F),className:`w-full text-left p-2.5 rounded-lg transition-all flex flex-col gap-1 ${re?"bg-indigo-600/20 border border-indigo-500/40 text-white":"hover:bg-slate-900/60 border border-transparent text-slate-300"}`,children:[l.jsxs("div",{className:"flex items-center justify-between w-full",children:[l.jsx("span",{className:"text-xs font-semibold text-white tracking-wide",children:F.name}),l.jsx("span",{className:"text-[10px] font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800/50 px-1.5 py-0.5 rounded",children:(z=F.dimension.split("≈")[0])==null?void 0:z.replace("D = ","D=")})]}),l.jsxs("div",{className:"flex items-center justify-between text-[11px] text-slate-400",children:[l.jsx("span",{className:"truncate max-w-[200px]",children:F.englishName}),l.jsx("span",{className:"font-mono text-[10px] text-slate-500 truncate max-w-[100px]",children:F.formula})]})]},F.id)})})]}),l.jsx("div",{className:"flex-1 overflow-y-auto p-6 flex flex-col bg-slate-950",children:y?l.jsxs("div",{className:"space-y-6 max-w-3xl",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1",children:[J(y.category),l.jsx("span",{children:(W=sf.find(F=>F.id===y.category))==null?void 0:W.title})]}),l.jsx("h3",{className:"text-2xl font-bold text-white tracking-tight",children:y.name}),l.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:y.englishName})]}),l.jsx("button",{id:"btn-apply-fractal-preset",onClick:()=>P(y),className:"px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all shrink-0 active:scale-95",children:O===y.id?l.jsxs(l.Fragment,{children:[l.jsx(hf,{className:"w-4 h-4 text-emerald-300"}),l.jsx("span",{children:"Активировано в 3D!"})]}):l.jsxs(l.Fragment,{children:[l.jsx(bf,{className:"w-4 h-4 fill-white"}),l.jsx("span",{children:"Исследовать в 3D (Реймаршинг)"})]})})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Математическая Формула / Отображение"}),l.jsx("div",{className:"text-sm font-mono font-medium text-amber-300 select-all",children:y.formula})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/80 border border-slate-800",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Размерность Хаусдорфа — Безиковича"}),l.jsx("div",{className:"text-sm font-mono font-medium text-emerald-300",children:y.dimension})]})]}),y.generatorRule&&l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/50 border border-slate-800/80",children:[l.jsx("div",{className:"text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1",children:"Правило Генератора / L-Система"}),l.jsx("div",{className:"text-xs font-mono text-cyan-300",children:y.generatorRule})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2",children:"Математическое и Геометрическое Описание"}),l.jsx("p",{className:"text-sm text-slate-300 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60",children:y.description})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/20 border border-indigo-800/40",children:[l.jsxs("h4",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider flex items-center gap-2 mb-2",children:[l.jsx(Ks,{className:"w-4 h-4 text-indigo-400"}),"Связь с Золотым Сечением (φ) и Числом π"]}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:y.phiPiRelation})]}),l.jsxs("div",{className:"p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between",children:[l.jsxs("span",{className:"flex items-center gap-1.5",children:[l.jsx(Qs,{className:"w-3.5 h-3.5 text-indigo-400"}),"Конфигурация 3D SDF: ",l.jsx("strong",{className:"text-slate-200",children:y.enginePreset.type}),y.enginePreset.hybridType&&l.jsxs(l.Fragment,{children:[" + ",l.jsx("strong",{className:"text-slate-200",children:y.enginePreset.hybridType})]})]}),l.jsx("span",{className:"font-mono text-[10px] text-indigo-400 bg-indigo-950/50 px-2 py-0.5 rounded border border-indigo-800/30",children:y.enginePreset.compositeOp})]})]}):l.jsx("div",{className:"h-full flex items-center justify-center text-slate-500 text-xs",children:"Выберите фрактал из списка слева"})})]}),u==="manifest"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{className:"p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30",children:[l.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2 mb-2",children:[l.jsx(Ks,{className:"w-5 h-5 text-amber-400"}),"Научное Обоснование: Почему Золотое Сечение (φ) и Число π НЕ Конфликтуют"]}),l.jsxs("p",{className:"text-xs text-amber-200/90 leading-relaxed",children:["В строгой дифференциальной геометрии и теории динамических систем число π ≈ 3.14159 и золотое сечение φ = (1 + √5)/2 ≈ 1.61803 представляют собой",l.jsx("strong",{children:" взаимодополняющие, взаимно ортогональные координаты пространства состояний"}),". Они не только не разрушают фракталы, но являются математическим гарантом устойчивости их гибридизации."]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"1"}),"Разделение Степеней Свободы (Фаза vs Масштаб)"]}),l.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Число π фундаментально отвечает за ",l.jsx("strong",{children:"компактные фазовые симметрии"})," — тригонометрические вращения группы SO(3), сферические координаты (θ, ψ) ∈ [0, 2π) × [0, π] и периодичность решеток. Число φ управляет ",l.jsx("strong",{children:"радиальным масштабированием и шагом рекурсии"})," r_(k+1) = r_k / φ. Поскольку группа масштабирования ℝ⁺ ортогональна группе вращений SO(3), их генераторы коммутируют в алгебре Ли."]})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"2"}),"Теорема Фогеля и Золотой Угол"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Связь $\\pi$ и $\\phi$ достигает оптимума в формуле золотого угла: $\\theta_G = 2\\pi (1 - 1/\\phi) = 2\\pi / \\phi^2 \\approx 137.5077^\\circ$. Согласно теореме Фогеля (Vogel, 1979), это ЕДИНСТВЕННЫЙ угол, обеспечивающий предельно плотную упаковку без радиальных щелей и наложений. В 3D реймаршинге это гарантирует идеальную непрерывность поля расстояний."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"3"}),"КАМ-Теория и Подавление Резонансов"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"По теореме Колмогорова — Арнольда — Мозера (КАМ), при возмущении динамической системы инвариантные торы разрушаются из-за резонансов вида $n \\omega_1 + m \\omega_2 = 0$. Число $\\phi$ является «наиболее иррациональным числом» (его непрерывная дробь $[1; 1, 1, \\dots]$ медленнее всего приближается рациональными дробями по теореме Гурвица). В гибридных фракталах это предотвращает фазовые схлопывания и артефакты деления на ноль."})]}),l.jsxs("div",{className:"p-4 rounded-xl bg-slate-900 border border-slate-800",children:[l.jsxs("h4",{className:"text-sm font-semibold text-white mb-2 flex items-center gap-2",children:[l.jsx("span",{className:"w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-mono",children:"4"}),"Липшиц-Непрерывность Гибридного SDF"]}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'В нашем математическом ядре гибриды строятся через C¹-гладкие операторы smin_k(a, b) = -k · ln(exp(-a/k) + exp(-b/k)). Соблюдение условия 1-Липшицевости |∇d(p)| ≤ 1 гарантирует, что реймаршинг никогда не делает завышенных шагов и не "проскакивает" через тончайшие золотые нити.'})]})]}),l.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-2",children:[l.jsx("div",{className:"font-semibold text-indigo-300 uppercase tracking-wider",children:"Резюме для Разработки и Исследований"}),l.jsx("p",{className:"text-slate-300",children:"Использование $\\phi$ как масштабного множителя октав и $\\pi$ как базиса сферических гармоник — это математически выверенная, строго доказанная концепция нелинейной динамики, лежащая в основе квазикристаллов Дана Шехтмана (Нобелевская премия 2011 г.) и конформных теорий поля."})]})]}),u==="technologies"&&l.jsxs("div",{className:"flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 max-w-4xl mx-auto text-slate-300 leading-relaxed text-sm",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-xl font-bold text-white flex items-center gap-2 mb-1",children:[l.jsx(Qs,{className:"w-5 h-5 text-cyan-400"}),"Технологический Арсенал 3D-Исследования Фракталов"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Специализированные инструменты визуализации топологии изнутри, на микроуровне и в поперечных срезах"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 h-fit",children:l.jsx(r2,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"1. Мультиосевой Анатомический Томограф (Slice Tomography)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Позволяет послойно рассекать 3D-тело фрактала вдоль четырех фундаментальных осей:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsxs("li",{children:[l.jsx("strong",{className:"text-amber-300",children:"Золотая плоскость (Golden Plane):"})," нормаль (0, φ/√(φ+2), 1/√(φ+2)), вскрывающая икосаэдрические сечения."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-indigo-300",children:"Сагиттальный срез (X):"})," нормаль (1, 0, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-emerald-300",children:"Аксиальный срез (Y):"})," нормаль (0, 1, 0)."]}),l.jsxs("li",{children:[l.jsx("strong",{className:"text-cyan-300",children:"Фронтальный срез (Z):"})," нормаль (0, 0, 1)."]})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-2",children:"Кромка среза подсвечивается неоновым каустическим ореолом с расчетом точного градиента поля."})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(gf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"2. Рентгеновская Модальность Плотности (X-Ray Volumetric Density)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Делает внешнюю оболочку фрактала прозрачной, визуализируя распределение плотности и скрытые внутренние каналы:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Интегрирует количество шагов реймаршинга вдоль луча: $I = \\int \\rho(p(s)) ds$."}),l.jsx("li",{children:"Скрытые внутренние полости, ядра Менгера и аттракторы светятся биолюминесцентным светом."}),l.jsx("li",{children:"Идеально для изучения внутренних лабиринтов фрактала без необходимости разрезания."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-fit",children:l.jsx(pl,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"3. Топографическая Карта Кривизны (Topographic Contour)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Визуализация математической структуры через контуры рельефа:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Лапласиан кривизны выявляет хребты и впадины фрактальной поверхности."}),l.jsx("li",{children:"Нормаль-зависимое освещение создает эффект топографической карты."}),l.jsx("li",{children:"Контурные линии подчеркивают геометрическую сложность структуры."})]})]})]}),l.jsxs("div",{className:"p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row gap-4",children:[l.jsx("div",{className:"p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 h-fit",children:l.jsx(vf,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-semibold text-white",children:"4. Пространственный Зонд Локальной Размерности (HUD Probe)"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Интерактивный измерительный зонд, непрерывно анализирующий точку в фокусе видоискателя:"}),l.jsxs("ul",{className:"text-xs text-slate-300 mt-2 space-y-1 list-disc list-inside",children:[l.jsx("li",{children:"Измеряет евклидово расстояние до ближайшей границы: d(p)."}),l.jsx("li",{children:"Вычисляет нормаль n⃗ = ∇d(p) / ‖∇d(p)‖."}),l.jsx("li",{children:"Оценивает локальную размерность Минковского: D_loc ≈ ln(N(r₁)/N(r₂)) / ln(r₂/r₁)."}),l.jsx("li",{children:"Отображает пространственные координаты (X, Y, Z) и температуру поля."})]})]})]})]})]}),l.jsxs("div",{className:"px-6 py-3 border-t border-slate-800 bg-slate-900/50 flex items-center justify-between text-xs text-slate-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Kh,{className:"w-4 h-4 text-slate-400"}),l.jsx("span",{children:"Все фракталы просчитываются в реальном времени с 60 FPS на GPU (WebGPU / WebGL2)"})]}),l.jsx("button",{onClick:s,className:"px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors",children:"Закрыть Атлас"})]})]})})},L2=({params:p,onToggleProbe:s,onToggleMacro:f})=>{if(!p.probeActive)return null;const u=Math.sqrt((p.camPosX??0)**2+(p.camPosY??0)**2+(p.camPosZ??0)**2),v=Math.max(.001,u/(p.zoom||3)).toFixed(4),S=p.slicePlane?((.5-p.slicePlane)*3.5).toFixed(3):"OFF";return l.jsxs("div",{className:"pointer-events-none absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 select-none font-mono",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center",children:l.jsxs("div",{className:"relative w-16 h-16 flex items-center justify-center",children:[l.jsx("div",{className:"absolute w-full h-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"absolute h-full w-[1px] bg-emerald-400/40"}),l.jsx("div",{className:"w-5 h-5 rounded-full border border-emerald-400/60 flex items-center justify-center",children:l.jsx("div",{className:"w-1 h-1 rounded-full bg-emerald-400"})}),l.jsx("div",{className:"absolute -top-3 text-[9px] text-emerald-400/80 font-mono tracking-widest",children:"PROBE"}),l.jsx("div",{className:"absolute -bottom-3 text-[9px] text-emerald-400/80 font-mono",children:p.macroMode?"MACRO 10⁻⁴":"STANDARD"})]})}),l.jsxs("div",{className:"pointer-events-auto w-64 bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 rounded-xl p-3 shadow-xl text-[11px] text-slate-300 space-y-2",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-emerald-500/20 pb-1.5",children:[l.jsxs("span",{className:"text-emerald-400 font-semibold flex items-center gap-1.5 tracking-wider uppercase text-[10px]",children:[l.jsx(vf,{className:"w-3.5 h-3.5"}),"Топологический Зонд"]}),l.jsx("button",{onClick:s,className:"text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800/80",children:"Закрыть"})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Дистанция до SDF d(p):"}),l.jsxs("span",{className:"text-emerald-300 font-mono",children:[v," u"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Позиция Камеры:"}),l.jsxs("span",{className:"text-slate-300 font-mono text-[10px]",children:["X:",(p.camPosX??0).toFixed(2)," Y:",(p.camPosY??0).toFixed(2)," Z:",(p.camPosZ??0).toFixed(2)]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Ось Среза:"}),l.jsxs("span",{className:"text-amber-300 font-mono uppercase",children:[p.sliceAxis||"golden"," (",S,")"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Модальность:"}),l.jsx("span",{className:"text-cyan-300 font-mono uppercase",children:p.renderStyle||"solid"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-slate-500",children:"Октавы / Глубина:"}),l.jsxs("span",{className:"text-indigo-300 font-mono",children:[p.octaveLayers||2,"L · k=",p.smoothK??.35]})]})]}),l.jsx("div",{className:"pt-1 border-t border-slate-800 flex gap-1.5",children:l.jsx("button",{onClick:f,className:`flex-1 py-1 rounded text-[10px] font-medium transition-colors ${p.macroMode?"bg-amber-500/20 text-amber-300 border border-amber-500/40":"bg-slate-800/80 text-slate-300 hover:bg-slate-800"}`,children:p.macroMode?"● Ультра-Макро ВКЛ":"○ Включить Макро"})})]}),l.jsxs("div",{className:"self-center bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-full px-4 py-1 text-[10px] text-slate-400 flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1 text-emerald-400",children:[l.jsx(pl,{className:"w-3 h-3"}),"SDF 1-Lipschitz Verified"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{children:["RotX: ",p.rotX.toFixed(2)," rad"]}),l.jsxs("span",{children:["RotY: ",p.rotY.toFixed(2)," rad"]}),l.jsx("span",{className:"text-slate-600",children:"|"}),l.jsxs("span",{className:"text-amber-300",children:["φ-Scale: ",p.phiMultiplier.toFixed(5)]})]})]})},cf=[{id:"solid",label:"Физическая поверхность (PBR)",shortLabel:"Solid PBR",icon:gi,desc:"Мягкие тени, подповерхностное рассеивание (SSS), фазовый спектр φ",accent:"border-amber-500/50 text-amber-300 bg-amber-500/10"},{id:"xray",label:"X-Ray Томография плотности",shortLabel:"X-Ray",icon:gf,desc:"Градиентная томография, внутренний скелет и кривизна поверхности",accent:"border-cyan-500/50 text-cyan-300 bg-cyan-500/10"},{id:"topo",label:"Топографическая карта кривизны",shortLabel:"Топография",icon:pl,desc:"Контуры рельефа, нормаль-зависимое освещение, хребты и впадины",accent:"border-emerald-500/50 text-emerald-300 bg-emerald-500/10"},{id:"hologram",label:"Голографическая проекция",shortLabel:"Голограмма",icon:Ph,desc:"Хроматическая аберрация, скан-линии, мерцание глубины, краевой свет",accent:"border-blue-500/50 text-blue-300 bg-blue-500/10"},{id:"iridescent",label:"Радужная интерференция",shortLabel:"Перламутр",icon:Uh,desc:"Многопорядковая интерференция, спектральный спекуляр, кривизна-цвет",accent:"border-purple-500/50 text-purple-300 bg-purple-500/10"},{id:"quantum",label:"Квантовое поле энергии",shortLabel:"Плазма",icon:mf,desc:"Стоячие волны интерференции, энергетическая плотность, кривизна-ядро",accent:"border-rose-500/50 text-rose-300 bg-rose-500/10"},{id:"gemstone",label:"Кристаллическая рефракция",shortLabel:"Кристалл",icon:Hh,desc:"Закон Бугера-Ламберта, каустики, дисперсия спектра, золотой спекуляр",accent:"border-amber-400/50 text-amber-200 bg-amber-600/10"}],G2=({currentSpecimen:p,historyQueue:s,currentIndex:f,onSelectSpecimen:u,onNext:v,onPrev:S,renderStyle:x,onSelectRenderStyle:j,scrollMode:A,onToggleScrollMode:y,isOpen:U,onToggleOpen:O})=>{const B=k.useRef(null);return l.jsx(l.Fragment,{children:l.jsx("aside",{id:"fractal-scroll-feed-panel",className:`fixed top-1/2 -translate-y-1/2 left-3 z-30 transition-all duration-300 ease-out flex flex-col pointer-events-auto ${U?"translate-x-0 opacity-100":"-translate-x-[110%] opacity-0 pointer-events-none"}`,children:l.jsx("div",{className:"flex items-stretch",children:l.jsxs("div",{className:"w-72 max-h-[82vh] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/90 rounded-2xl shadow-2xl p-3 flex flex-col gap-2.5 overflow-hidden text-neutral-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-neutral-800/80",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("div",{className:"w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center",children:l.jsx(i2,{className:"w-3.5 h-3.5 text-amber-300 animate-pulse"})}),l.jsxs("div",{children:[l.jsx("h2",{className:"text-xs font-bold text-white tracking-wide",children:"3D Скролл-Лента"}),l.jsx("p",{className:"text-[10px] text-neutral-400",children:"Фракталы & Гибриды"})]})]}),l.jsx("button",{id:"toggle-scroll-feed-mode-btn",onClick:y,className:`px-2 py-1 rounded-lg border text-[10px] font-medium flex items-center gap-1 transition ${A==="feed"?"bg-amber-500/20 border-amber-500/50 text-amber-300":"bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-neutral-200"}`,title:A==="feed"?"Колесо мыши переключает ленту":"Колесо мыши зумирует камеру",children:A==="feed"?l.jsxs(l.Fragment,{children:[l.jsx(yf,{className:"w-3 h-3 text-amber-300"}),l.jsx("span",{children:"Лента"})]}):l.jsxs(l.Fragment,{children:[l.jsx(z2,{className:"w-3 h-3"}),l.jsx("span",{children:"Зум"})]})})]}),l.jsxs("div",{className:"flex flex-col gap-1",children:[l.jsx("div",{className:"flex items-center justify-between",children:l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Механика рендеринга (",cf.length,")"]})}),l.jsx("div",{className:"grid grid-cols-2 gap-1 max-h-28 overflow-y-auto pr-1",children:cf.map(q=>{const P=q.icon,J=x===q.id;return l.jsxs("button",{id:`select-render-style-${q.id}-btn`,onClick:()=>j(q.id),className:`px-2 py-1.5 rounded-lg border text-left text-[10px] transition flex items-center gap-1.5 truncate ${J?q.accent+" font-semibold":"bg-neutral-900/60 border-neutral-800/80 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"}`,title:q.desc,children:[l.jsx(P,{className:"w-3 h-3 shrink-0"}),l.jsx("span",{className:"truncate",children:q.shortLabel})]},q.id)})})]}),l.jsxs("div",{className:"flex items-center justify-between pt-1 border-t border-neutral-800/80",children:[l.jsxs("span",{className:"text-[10px] uppercase tracking-wider text-neutral-400 font-semibold",children:["Поток фенотипов (",s.length,")"]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{id:"feed-ribbon-prev-btn",onClick:S,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Предыдущий образец",children:l.jsx(Rh,{className:"w-3 h-3"})}),l.jsx("button",{id:"feed-ribbon-next-btn",onClick:v,className:"p-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white",title:"Следующий образец",children:l.jsx(jh,{className:"w-3 h-3"})})]})]}),l.jsx("div",{ref:B,className:"flex flex-col gap-1.5 overflow-y-auto max-h-56 pr-1 custom-scrollbar",children:s.map((q,P)=>{const J=q.id===(p==null?void 0:p.id)||P===f;return l.jsxs("button",{id:`feed-item-${P}-btn`,onClick:()=>u(q),className:`w-full text-left p-2 rounded-xl border transition-all flex flex-col gap-1 ${J?"bg-amber-500/15 border-amber-500/60 text-white shadow-md shadow-amber-500/10":"bg-neutral-900/40 border-neutral-800/60 text-neutral-400 hover:bg-neutral-900/80 hover:text-neutral-200"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-1.5 truncate",children:[l.jsxs("span",{className:"text-[9px] font-mono font-bold text-amber-400/90",children:["#",q.generation||P+1]}),l.jsx("span",{className:"text-xs font-semibold truncate text-neutral-200",children:q.name})]}),J&&l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping shrink-0"})]}),l.jsxs("div",{className:"flex items-center gap-1.5 text-[9px] text-neutral-400 font-mono",children:[l.jsx("span",{className:"px-1 py-0.2 rounded bg-neutral-800/80 text-amber-300 border border-neutral-700/60",children:q.compositeOp||"hybrid"}),l.jsxs("span",{className:"truncate text-neutral-400",children:[q.type," + ",q.hybridType||q.type]})]})]},q.id||P)})}),l.jsxs("div",{className:"pt-1 border-t border-neutral-800/60 flex items-center justify-between text-[10px] text-neutral-400 font-mono",children:[l.jsx("span",{children:"Скролл мыши / жест"}),l.jsx("span",{className:"text-amber-300/90 font-semibold",children:A==="feed"?"Переход по ленте":"Зум вглубь"})]})]})})})})};function uf(p){switch(p){case"phyllotaxis":case"apollonian":case"spiralTunnel":case"icosahedral":case"fibonacciSnowflake":case"poincareSphere":case"pythagorasTree3D":case"dragonCurveIFS":return"sacred";case"mandelbulb":case"quaternionJulia":case"mandelbox":case"quaternionMandelbrot":case"burningShip3D":case"newtonBasins":case"menger":case"jerusalemCube":return"complex";case"gyroid":case"neoviusMinimal":case"calabiYau":case"cliffordKlein":case"cliffordTorus4D":case"antoineNecklace":return"minimal";case"primeSpiral":case"riemannZeta":case"gaussianPrimes":case"eulerTotientSpiral":case"kleinianLimit":return"primes";case"lorenzAttractor":case"hofstadterButterfly":case"quasicrystal":case"hopfFibration":case"dlaCluster":case"sierpinskiOcta":case"hilbertCurve3D":default:return"attractors"}}class H2{constructor(){this.ctx=null,this.isRunning=!1,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null,this.voices=[],this.currentVolume=.65,this.tuningMode="phi432",this.currentFractalType="phyllotaxis",this.currentHybridType="mandelbulb",this.currentHybridBlend=.35,this.stopTimeout=null}start(s=.65,f="phi432"){if(this.isRunning){this.setVolume(s),this.setTuning(f);return}this.stopTimeout&&(clearTimeout(this.stopTimeout),this.stopTimeout=null);try{const u=window.AudioContext||window.webkitAudioContext;this.ctx=new u,this.ctx.state==="suspended"&&this.ctx.resume(),this.currentVolume=s,this.tuningMode=f,this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.setValueAtTime(-18,this.ctx.currentTime),this.compressor.knee.setValueAtTime(14,this.ctx.currentTime),this.compressor.ratio.setValueAtTime(4,this.ctx.currentTime),this.compressor.attack.setValueAtTime(.04,this.ctx.currentTime),this.compressor.release.setValueAtTime(.28,this.ctx.currentTime),this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.masterGain.gain.exponentialRampToValueAtTime(Math.max(.01,s*.16),this.ctx.currentTime+2),this.cavityResonator=this.ctx.createBiquadFilter(),this.cavityResonator.type="peaking",this.cavityResonator.frequency.setValueAtTime(108,this.ctx.currentTime),this.cavityResonator.Q.setValueAtTime(1.8,this.ctx.currentTime),this.cavityResonator.gain.setValueAtTime(2,this.ctx.currentTime),this.globalFilter=this.ctx.createBiquadFilter(),this.globalFilter.type="lowpass",this.globalFilter.frequency.setValueAtTime(750,this.ctx.currentTime),this.globalFilter.Q.setValueAtTime(.85,this.ctx.currentTime),this.globalFilter.connect(this.cavityResonator),this.cavityResonator.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(this.ctx.destination),this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType),this.isRunning=!0}catch(u){console.warn("AudioContext initialization deferred or unavailable",u)}}getChordFrequenciesForFamily(s,f){const u=1.61803398875;if(s==="sacred")return[{ratio:.5,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.32,pan:-.15,role:"root"},{ratio:u,wave:"sine",vol:.22,pan:.35,role:"golden"},{ratio:1.5,wave:"sine",vol:.18,pan:-.35,role:"fifth"},{ratio:u*u*.5,wave:"triangle",vol:.08,pan:.2,role:"shimmer"}];if(s==="complex")return[{ratio:.5,wave:"sine",vol:.42,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.34,pan:-.2,role:"root"},{ratio:1.5,wave:"sine",vol:.26,pan:.2,role:"fifth"},{ratio:2,wave:"triangle",vol:.12,pan:-.4,role:"shimmer"},{ratio:3*.5,wave:"sine",vol:.14,pan:.4,role:"golden"}];if(s==="minimal")return[{ratio:.75,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.3,pan:-.25,role:"root"},{ratio:1.25,wave:"sine",vol:.2,pan:.25,role:"fifth"},{ratio:Math.sqrt(2),wave:"sine",vol:.14,pan:-.4,role:"golden"},{ratio:u*1.2,wave:"triangle",vol:.06,pan:.35,role:"shimmer"}];if(s==="primes"){const v=1.1413470000000001,S=1+21.022/100,x=1+25.0108/100;return[{ratio:.5,wave:"sine",vol:.36,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.32,pan:-.2,role:"root"},{ratio:v,wave:"sine",vol:.18,pan:.3,role:"golden"},{ratio:S,wave:"sine",vol:.14,pan:-.3,role:"fifth"},{ratio:x,wave:"triangle",vol:.08,pan:.4,role:"shimmer"}]}return[{ratio:.5,wave:"sine",vol:.38,pan:0,role:"sub"},{ratio:1,wave:"sine",vol:.3,pan:-.3,role:"root"},{ratio:1.382,wave:"sine",vol:.2,pan:.3,role:"golden"},{ratio:1.618,wave:"sine",vol:.16,pan:-.2,role:"fifth"},{ratio:1.618*1.5*.5,wave:"triangle",vol:.07,pan:.4,role:"shimmer"}]}rebuildVoicesForGeometry(s,f){if(!this.ctx||!this.globalFilter)return;const u=uf(s),v=f?uf(f):u,S=108,x=this.ctx.currentTime,j=[...this.voices];this.voices=[],j.forEach(U=>{try{U.gain.gain.cancelScheduledValues(x),U.gain.gain.setValueAtTime(U.gain.gain.value,x),U.gain.gain.exponentialRampToValueAtTime(1e-4,x+.35),setTimeout(()=>{var O;try{U.osc.stop(),U.osc.disconnect(),U.filter.disconnect(),(O=U.panner)==null||O.disconnect(),U.gain.disconnect()}catch{}},380)}catch{}});const y=this.getChordFrequenciesForFamily(u,this.tuningMode).map((U,O)=>{const B=this.ctx.createOscillator(),q=this.ctx.createGain(),P=this.ctx.createBiquadFilter(),J=(O%2===0?.618:-.618)*.5,W=S*U.ratio+J;B.type=U.wave,B.frequency.setValueAtTime(W,x),q.gain.setValueAtTime(1e-4,x),q.gain.exponentialRampToValueAtTime(U.vol,x+1.2),P.type="lowpass",P.frequency.setValueAtTime(450+O*80,x),P.Q.setValueAtTime(1.2,x),B.connect(P);let F=P,re;return this.ctx.createStereoPanner&&(re=this.ctx.createStereoPanner(),re.pan.setValueAtTime(U.pan,x),P.connect(re),F=re),F.connect(q),q.connect(this.globalFilter),B.start(x),{osc:B,gain:q,filter:P,panner:re,baseFreqRatio:U.ratio,role:U.role}});if(f&&f!==s){const U=this.getChordFrequenciesForFamily(v,this.tuningMode),O=U[2]||U[1],B=this.ctx.createOscillator(),q=this.ctx.createGain(),P=this.ctx.createBiquadFilter();B.type="sine",B.frequency.setValueAtTime(S*O.ratio,x);const J=Math.max(1e-4,this.currentHybridBlend*.22);q.gain.setValueAtTime(1e-4,x),q.gain.exponentialRampToValueAtTime(J,x+1.5),P.type="bandpass",P.frequency.setValueAtTime(S*O.ratio*1.5,x),P.Q.setValueAtTime(2,x),B.connect(P);let W=P,F;this.ctx.createStereoPanner&&(F=this.ctx.createStereoPanner(),F.pan.setValueAtTime(.45,x),P.connect(F),W=F),W.connect(q),q.connect(this.globalFilter),B.start(x),y.push({osc:B,gain:q,filter:P,panner:F,baseFreqRatio:O.ratio,role:"hybrid"})}this.voices=y}updateParams(s){if(!this.isRunning||!this.ctx||!this.globalFilter||!this.cavityResonator)return;const f=this.ctx.currentTime,u=s.phiMultiplier||1.618034,v=Math.max(.08,Math.min(16,s.zoom||3)),S=Math.max(.1,Math.min(2,s.morphSpeed||.45)),x=Math.max(0,Math.min(1,s.hybridBlend||0));if(s.type!==this.currentFractalType||s.hybridType&&s.hybridType!==this.currentHybridType){this.currentFractalType=s.type,this.currentHybridType=s.hybridType||s.type,this.currentHybridBlend=x,this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType);return}const j=Math.max(260,Math.min(980,380+(4-Math.min(v,4))*80+S*120));this.globalFilter.frequency.setTargetAtTime(j,f,.15);const A=Math.max(54,Math.min(240,108/Math.max(.5,v*.6)));this.cavityResonator.frequency.setTargetAtTime(A,f,.2);const y=108,U=(u-1.618034)*80,O=Math.sin(s.rotX||0)*.4;this.voices.forEach((B,q)=>{const P=y*B.baseFreqRatio,J=B.role==="golden"||B.role==="shimmer"?U:U*.3;if(B.osc.frequency.setTargetAtTime(P+J,f,.15),B.panner){const W=q%2===0?.25:-.25,F=Math.max(-.85,Math.min(.85,W+O));B.panner.pan.setTargetAtTime(F,f,.12)}if(B.role==="hybrid"){const W=Math.max(1e-4,x*.2);B.gain.gain.setTargetAtTime(W,f,.1)}}),s.audioVolume!==void 0&&s.audioVolume!==this.currentVolume&&this.setVolume(s.audioVolume)}playSpecimenTransitionChord(){if(!(!this.isRunning||!this.ctx||!this.globalFilter))try{const s=this.ctx.currentTime,f=216;[f*1,f*1.25,f*1.5,f*(1.618034*1.25)].forEach((v,S)=>{if(!this.ctx)return;const x=this.ctx.createOscillator(),j=this.ctx.createGain(),A=this.ctx.createBiquadFilter();x.type="sine",x.frequency.setValueAtTime(v,s+S*.05),A.type="lowpass",A.frequency.setValueAtTime(950,s),j.gain.setValueAtTime(1e-4,s+S*.05),j.gain.exponentialRampToValueAtTime(.05/(S+1),s+S*.05+.08),j.gain.exponentialRampToValueAtTime(1e-5,s+S*.05+2.8),x.onended=()=>{try{x.disconnect(),A.disconnect(),j.disconnect()}catch{}},x.connect(A),A.connect(j),j.connect(this.globalFilter),x.start(s+S*.05),x.stop(s+S*.05+3)})}catch{}}setVolume(s){if(this.currentVolume=Math.max(0,Math.min(1,s)),!this.masterGain||!this.ctx)return;const f=Math.max(1e-4,this.currentVolume*.16);this.masterGain.gain.setTargetAtTime(f,this.ctx.currentTime,.08)}getVolume(){return this.currentVolume}setTuning(s){this.tuningMode!==s&&(this.tuningMode=s,this.isRunning&&this.rebuildVoicesForGeometry(this.currentFractalType,this.currentHybridType))}getTuning(){return this.tuningMode}stop(){if(!this.isRunning||!this.ctx||!this.masterGain){this.isRunning=!1;return}this.isRunning=!1;try{const s=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(s),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,s),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,s+.3);const f=[...this.voices];this.voices=[],this.stopTimeout=setTimeout(()=>{var u,v,S,x,j;this.stopTimeout=null,f.forEach(A=>{var y;try{A.osc.stop(),A.osc.disconnect(),A.filter.disconnect(),(y=A.panner)==null||y.disconnect(),A.gain.disconnect()}catch{}});try{(u=this.globalFilter)==null||u.disconnect(),(v=this.cavityResonator)==null||v.disconnect(),(S=this.compressor)==null||S.disconnect(),(x=this.masterGain)==null||x.disconnect(),(j=this.ctx)==null||j.close()}catch{}this.ctx=null,this.masterGain=null,this.globalFilter=null,this.cavityResonator=null,this.compressor=null},350)}catch(s){console.warn("Error stopping audio",s)}}toggle(){return this.isRunning?(this.stop(),!1):(this.start(this.currentVolume,this.tuningMode),!0)}getActive(){return this.isRunning}}const sa=new H2,Y2={type:"phyllotaxis",hybridType:"mandelbulb",tertiaryType:"riemannZeta",compositeOp:"smoothUnion",cameraMode:"orbit",camPosX:0,camPosY:0,camPosZ:-3.2,slicePlane:0,sliceAxis:"golden",renderStyle:"solid",headlampPower:0,volumetricFog:.4,macroMode:!1,probeActive:!1,hybridBlend:.35,tertiaryBlend:.2,smoothK:.35,warpStrength:.25,octaveLayers:2,boxFold:1.2,sphereFold:.65,interiorCut:0,paletteId:"lapis-lazuli",iterations:20,phiMultiplier:1.61803398875,morphSpeed:.45,glowIntensity:1.1,detailLevel:1,zoom:3.2,rotX:.4,rotY:.25,autoRotate:!0,autoRotateSpeed:.12,targetFps:60,enableAudio:!1,audioVolume:.65,audioTuning:"phi432",drsEnabled:!0,paletteRotation:!1};function P2(){const[p]=k.useState(()=>new C2),[s,f]=k.useState(Y2),[u,v]=k.useState(null),[S,x]=k.useState(65),[j,A]=k.useState(!1),[y,U]=k.useState(!1),[O,B]=k.useState("idle"),q=k.useRef(null),P=k.useRef(0),[J,W]=k.useState("auto"),[F,re]=k.useState(!1),[z,H]=k.useState(!1),[ve,ye]=k.useState(!1),[te,we]=k.useState(!1),[Se,et]=k.useState(!1),[Be,Le]=k.useState(!1),[tt,Qe]=k.useState("feed"),[K,N]=k.useState(!1),[E,L]=k.useState([]),[V,ae]=k.useState(new Set),m=k.useCallback(()=>{},[]),[M,G]=k.useState({fps:0,avgFps:0,frameTimeMs:0,onePercentLow:0,backend:"Initializing...",adapterName:"GPU Pipeline",resolution:[0,0],drsScale:1,targetFps:60,interiorDistance:0}),X=k.useCallback(Y=>{v(Y),x(Y.affinityScore);const pe=(p==null?void 0:p.suggestRenderStyle())||"solid";f(I=>({...I,type:Y.type,hybridType:Y.hybridType,tertiaryType:Y.tertiaryType,compositeOp:Y.compositeOp,hybridBlend:Y.hybridBlend,tertiaryBlend:Y.tertiaryBlend,smoothK:Y.smoothK,warpStrength:Y.warpStrength,octaveLayers:Y.octaveLayers,boxFold:Y.boxFold,sphereFold:Y.sphereFold,interiorCut:Y.interiorCut,paletteId:Y.palette.id,customPalette:Y.palette,iterations:Y.iterations,phiMultiplier:Y.phiMultiplier,morphSpeed:Y.morphSpeed,glowIntensity:Y.glowIntensity,zoom:Y.zoom,renderStyle:pe})),sa.getActive()&&sa.playSpecimenTransitionChord()},[]);k.useEffect(()=>{if(!p)return;const Y=window.location.hash.slice(1);if(Y){const I=new URLSearchParams(Y),ct=I.get("type"),lt=I.get("hybrid"),Oa=I.get("tertiary"),Ea=I.get("op");if(ct){const un=Ca.find(Ge=>Ge.id===I.get("palette"))||Ca[0],fe={id:`shared-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:1,name:I.get("name")||`Фрактал ${ct}`,type:ct,hybridType:lt||ct,tertiaryType:Oa||"riemannZeta",compositeOp:Ea||"smoothUnion",hybridBlend:parseFloat(I.get("blend")||"0.35"),tertiaryBlend:parseFloat(I.get("tertiaryBlend")||"0.2"),smoothK:parseFloat(I.get("smoothK")||"0.35"),warpStrength:parseFloat(I.get("warp")||"0.25"),octaveLayers:parseInt(I.get("octaves")||"2"),boxFold:parseFloat(I.get("boxFold")||"1.2"),sphereFold:parseFloat(I.get("sphereFold")||"0.65"),interiorCut:parseFloat(I.get("interiorCut")||"0.0"),palette:un,iterations:parseInt(I.get("iterations")||"20"),phiMultiplier:parseFloat(I.get("phi")||"1.61803398875"),morphSpeed:parseFloat(I.get("morphSpeed")||"0.45"),glowIntensity:parseFloat(I.get("glow")||"1.1"),zoom:parseFloat(I.get("zoom")||"3.2"),affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};X(fe),window.history.replaceState(null,"",window.location.pathname);return}}const pe=p.breedNextSpecimen();X(pe)},[p,X]),k.useEffect(()=>(s.enableAudio?sa.start(s.audioVolume??.65,s.audioTuning??"phi432"):sa.stop(),()=>{sa.stop()}),[s.enableAudio]),k.useEffect(()=>{s.enableAudio&&(s.audioTuning&&sa.setTuning(s.audioTuning),s.audioVolume!==void 0&&sa.setVolume(s.audioVolume),sa.updateParams(s))},[s.enableAudio,s.audioTuning,s.audioVolume]),k.useEffect(()=>{const Y=setInterval(()=>{if(p&&u){const pe=p.registerEngagement(1,0,0,u);x(I=>I===pe?I:pe)}},1200);return()=>clearInterval(Y)},[p,u]);const ne=k.useCallback((Y,pe)=>{if(!p||!u)return;const I=Y>0?"zooming":pe>0?"orbiting":"idle";B(lt=>lt!==I?I:lt),q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{B(lt=>lt!=="idle"?"idle":lt)},1200);const ct=p.registerEngagement(.1,Y,pe,u);x(lt=>lt===ct?lt:ct)},[p,u]),le=k.useCallback(()=>{if(!p)return;const Y=performance.now();if(Y-P.current<180)return;P.current=Y;const pe=p.stepHistory(1);X(pe)},[p,X]),ue=k.useCallback(()=>{if(!p)return;const Y=performance.now();if(Y-P.current<180)return;P.current=Y;const pe=p.stepHistory(-1);X(pe)},[p,X]),ke=k.useCallback(()=>{if(!p||!u)return;p.boostAffinity(u),x(100);const Y=u.id;ae(pe=>{const I=new Set(pe);return I.has(Y)?(I.delete(Y),L(ct=>ct.filter(lt=>lt.id!==Y))):(I.add(Y),L(ct=>[...ct,u])),I})},[p,u]),Ce=k.useCallback(Y=>{X(Y)},[X]),Kt=k.useCallback(Y=>{ae(pe=>{const I=new Set(pe);return I.delete(Y),I}),L(pe=>pe.filter(I=>I.id!==Y))},[]),qe=k.useCallback(Y=>{if(!p)return;const pe=p.breedNextSpecimen(Y);X(pe)},[p,X]),ca=k.useCallback(()=>{if(!p)return;const Y={id:`engineered-${Date.now().toString(36)}`,seed:Math.floor(Math.random()*1e6),generation:((u==null?void 0:u.generation)||1)+1,name:`Фенотип Инженера #${((u==null?void 0:u.generation)||1)+1}`,type:s.type,hybridType:s.hybridType||s.type,tertiaryType:s.tertiaryType||"riemannZeta",compositeOp:s.compositeOp,hybridBlend:s.hybridBlend??.35,tertiaryBlend:s.tertiaryBlend??.2,smoothK:s.smoothK,warpStrength:s.warpStrength,octaveLayers:s.octaveLayers,boxFold:s.boxFold,sphereFold:s.sphereFold,interiorCut:s.interiorCut,palette:s.customPalette||Ca.find(pe=>pe.id===s.paletteId)||Ca[0],iterations:s.iterations,phiMultiplier:s.phiMultiplier,morphSpeed:s.morphSpeed,glowIntensity:s.glowIntensity,zoom:s.zoom,affinityScore:95,dwellTimeSeconds:0,zoomInteractions:0,orbitInteractions:0};v(Y),p.boostAffinity(Y),sa.getActive()&&sa.playSpecimenTransitionChord()},[p,s,u]),Ra=k.useCallback(()=>{f(Y=>({...Y,enableAudio:!Y.enableAudio}))},[]),yt=k.useCallback(Y=>{re(!1);const pe=document.createElement("a");pe.download=`golden-ratio-fractal-${s.type}-${(u==null?void 0:u.generation)||1}.png`,pe.href=Y,pe.click()},[s.type,u==null?void 0:u.generation]),ka=k.useCallback(()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},[]);return l.jsxs("main",{className:"relative w-full h-full min-h-screen overflow-hidden bg-neutral-950 font-sans text-neutral-100 select-none",children:[l.jsx(rh,{params:s,onParamsChange:f,onTelemetryUpdate:G,screenshotRequested:F,onScreenshotCaptured:yt,forcedBackend:J,onInteraction:ne,onNextSpecimen:le,onPrevSpecimen:ue,onEngineReady:()=>we(!0),scrollMode:tt}),l.jsx(G2,{currentSpecimen:u,historyQueue:p.getHistory(),currentIndex:p.getCurrentIndex(),onSelectSpecimen:X,onNext:le,onPrev:ue,renderStyle:s.renderStyle,onSelectRenderStyle:Y=>f(pe=>({...pe,renderStyle:Y})),scrollMode:tt,onToggleScrollMode:()=>Qe(Y=>Y==="feed"?"zoom":"feed"),isOpen:K,onToggleOpen:()=>N(Y=>!Y)}),l.jsx(O2,{specimen:u,resonanceScore:S,isInteracting:O!=="idle",interactionType:O,onNext:le,onPrev:ue,onFavorite:ke,onOpenProfile:()=>U(!0),enableAudio:s.enableAudio,onToggleAudio:Ra,onOpenResearchModal:()=>H(!0),onOpenAtlas:()=>ye(!0),isFeedOpen:K,onToggleFeed:()=>N(Y=>!Y),isCurrentLiked:u?V.has(u.id):!1}),l.jsx(L2,{params:s,onToggleProbe:()=>f(Y=>({...Y,probeActive:!Y.probeActive})),onToggleMacro:()=>f(Y=>({...Y,macroMode:!Y.macroMode}))}),l.jsx(q2,{isOpen:y,onClose:()=>U(!1),tasteProfile:p.getTasteProfile(),archetypeBreakdown:p.getArchetypeBreakdown(),currentSpecimen:u,resonanceScore:S,isEngineerMode:j,onToggleEngineerMode:()=>A(Y=>!Y),audioTuning:s.audioTuning||"phi432",onSelectAudioTuning:Y=>f(pe=>({...pe,audioTuning:Y})),onOpenManifest:()=>{U(!1),et(!0)},likedSpecimens:E,onPlayLiked:Ce,onRemoveLike:Kt,isCurrentLiked:u?V.has(u.id):!1}),j&&l.jsxs(l.Fragment,{children:[l.jsx(S2,{telemetry:M,targetFps:s.targetFps,phiMultiplier:s.phiMultiplier}),l.jsx(R2,{params:s,onParamsChange:f,onSelectFractalType:qe,onCaptureScreenshot:()=>re(!0),onToggleFullscreen:ka,onToggleInfoModal:()=>H(!0),onOpenAtlasModal:()=>ye(!0),activeBackend:M.backend,forcedBackend:J,onSelectBackend:W,onClose:()=>A(!1),tasteProfile:p.getTasteProfile(),onSaveToFeed:ca})]}),l.jsx(E2,{isOpen:z,onClose:()=>H(!1)}),l.jsx(B2,{isOpen:ve,onClose:()=>ye(!1),onApplyPreset:Y=>{f(pe=>({...pe,...Y}))}}),l.jsx(F2,{isOpen:Se,onClose:()=>et(!1),isFirstVisit:Be,onOpenAtlas:()=>ye(!0)}),l.jsx(U2,{isReady:te,onFinished:m})]})}const pf=document.getElementById("root");pf&&Vm.createRoot(pf).render(l.jsx(P2,{}));
