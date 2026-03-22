(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Hd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Qu={exports:{}},Ho={},ef={exports:{}},St={};var Tm;function N_(){if(Tm)return St;Tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(F,Y,Ce){this.props=F,this.context=Y,this.refs=A,this.updater=Ce||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,Y){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Y,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function C(F,Y,Ce){this.props=F,this.context=Y,this.refs=A,this.updater=Ce||S}var P=C.prototype=new x;P.constructor=C,M(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(F,Y,Ce){var Xe,et={},re=null,ge=null;if(Y!=null)for(Xe in Y.ref!==void 0&&(ge=Y.ref),Y.key!==void 0&&(re=""+Y.key),Y)k.call(Y,Xe)&&!O.hasOwnProperty(Xe)&&(et[Xe]=Y[Xe]);var pe=arguments.length-2;if(pe===1)et.children=Ce;else if(1<pe){for(var Ie=Array(pe),We=0;We<pe;We++)Ie[We]=arguments[We+2];et.children=Ie}if(F&&F.defaultProps)for(Xe in pe=F.defaultProps,pe)et[Xe]===void 0&&(et[Xe]=pe[Xe]);return{$$typeof:s,type:F,key:re,ref:ge,props:et,_owner:I.current}}function L(F,Y){return{$$typeof:s,type:F.type,key:Y,ref:F.ref,props:F.props,_owner:F._owner}}function se(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var Y={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ce){return Y[Ce]})}var ne=/\/+/g;function K(F,Y){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):Y.toString(36)}function ae(F,Y,Ce,Xe,et){var re=typeof F;(re==="undefined"||re==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(re){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case s:case e:ge=!0}}if(ge)return ge=F,et=et(ge),F=Xe===""?"."+K(ge,0):Xe,R(et)?(Ce="",F!=null&&(Ce=F.replace(ne,"$&/")+"/"),ae(et,Y,Ce,"",function(We){return We})):et!=null&&(se(et)&&(et=L(et,Ce+(!et.key||ge&&ge.key===et.key?"":(""+et.key).replace(ne,"$&/")+"/")+F)),Y.push(et)),1;if(ge=0,Xe=Xe===""?".":Xe+":",R(F))for(var pe=0;pe<F.length;pe++){re=F[pe];var Ie=Xe+K(re,pe);ge+=ae(re,Y,Ce,Ie,et)}else if(Ie=g(F),typeof Ie=="function")for(F=Ie.call(F),pe=0;!(re=F.next()).done;)re=re.value,Ie=Xe+K(re,pe++),ge+=ae(re,Y,Ce,Ie,et);else if(re==="object")throw Y=String(F),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return ge}function q(F,Y,Ce){if(F==null)return F;var Xe=[],et=0;return ae(F,Xe,"","",function(re){return Y.call(Ce,re,et++)}),Xe}function $(F){if(F._status===-1){var Y=F._result;Y=Y(),Y.then(function(Ce){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ce)},function(Ce){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ce)}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var V={current:null},Z={transition:null},Q={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:Z,ReactCurrentOwner:I};function ce(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:q,forEach:function(F,Y,Ce){q(F,function(){Y.apply(this,arguments)},Ce)},count:function(F){var Y=0;return q(F,function(){Y++}),Y},toArray:function(F){return q(F,function(Y){return Y})||[]},only:function(F){if(!se(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=y,St.Fragment=t,St.Profiler=o,St.PureComponent=C,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q,St.act=ce,St.cloneElement=function(F,Y,Ce){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=M({},F.props),et=F.key,re=F.ref,ge=F._owner;if(Y!=null){if(Y.ref!==void 0&&(re=Y.ref,ge=I.current),Y.key!==void 0&&(et=""+Y.key),F.type&&F.type.defaultProps)var pe=F.type.defaultProps;for(Ie in Y)k.call(Y,Ie)&&!O.hasOwnProperty(Ie)&&(Xe[Ie]=Y[Ie]===void 0&&pe!==void 0?pe[Ie]:Y[Ie])}var Ie=arguments.length-2;if(Ie===1)Xe.children=Ce;else if(1<Ie){pe=Array(Ie);for(var We=0;We<Ie;We++)pe[We]=arguments[We+2];Xe.children=pe}return{$$typeof:s,type:F.type,key:et,ref:re,props:Xe,_owner:ge}},St.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=T,St.createFactory=function(F){var Y=T.bind(null,F);return Y.type=F,Y},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:f,render:F}},St.isValidElement=se,St.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:$}},St.memo=function(F,Y){return{$$typeof:h,type:F,compare:Y===void 0?null:Y}},St.startTransition=function(F){var Y=Z.transition;Z.transition={};try{F()}finally{Z.transition=Y}},St.unstable_act=ce,St.useCallback=function(F,Y){return V.current.useCallback(F,Y)},St.useContext=function(F){return V.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return V.current.useDeferredValue(F)},St.useEffect=function(F,Y){return V.current.useEffect(F,Y)},St.useId=function(){return V.current.useId()},St.useImperativeHandle=function(F,Y,Ce){return V.current.useImperativeHandle(F,Y,Ce)},St.useInsertionEffect=function(F,Y){return V.current.useInsertionEffect(F,Y)},St.useLayoutEffect=function(F,Y){return V.current.useLayoutEffect(F,Y)},St.useMemo=function(F,Y){return V.current.useMemo(F,Y)},St.useReducer=function(F,Y,Ce){return V.current.useReducer(F,Y,Ce)},St.useRef=function(F){return V.current.useRef(F)},St.useState=function(F){return V.current.useState(F)},St.useSyncExternalStore=function(F,Y,Ce){return V.current.useSyncExternalStore(F,Y,Ce)},St.useTransition=function(){return V.current.useTransition()},St.version="18.3.1",St}var wm;function Gd(){return wm||(wm=1,ef.exports=N_()),ef.exports}var Am;function D_(){if(Am)return Ho;Am=1;var s=Gd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var v,_={},g=null,S=null;h!==void 0&&(g=""+h),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:g,ref:S,props:_,_owner:o.current}}return Ho.Fragment=t,Ho.jsx=u,Ho.jsxs=u,Ho}var bm;function I_(){return bm||(bm=1,Qu.exports=D_()),Qu.exports}var he=I_(),gi=Gd();const U_=Hd(gi);var Ml={},tf={exports:{}},In={},nf={exports:{}},rf={};var Cm;function F_(){return Cm||(Cm=1,(function(s){function e(Z,Q){var ce=Z.length;Z.push(Q);e:for(;0<ce;){var F=ce-1>>>1,Y=Z[F];if(0<o(Y,Q))Z[F]=Q,Z[ce]=Y,ce=F;else break e}}function t(Z){return Z.length===0?null:Z[0]}function r(Z){if(Z.length===0)return null;var Q=Z[0],ce=Z.pop();if(ce!==Q){Z[0]=ce;e:for(var F=0,Y=Z.length,Ce=Y>>>1;F<Ce;){var Xe=2*(F+1)-1,et=Z[Xe],re=Xe+1,ge=Z[re];if(0>o(et,ce))re<Y&&0>o(ge,et)?(Z[F]=ge,Z[re]=ce,F=re):(Z[F]=et,Z[Xe]=ce,F=Xe);else if(re<Y&&0>o(ge,ce))Z[F]=ge,Z[re]=ce,F=re;else break e}}return Q}function o(Z,Q){var ce=Z.sortIndex-Q.sortIndex;return ce!==0?ce:Z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],h=[],v=1,_=null,g=3,S=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Z){for(var Q=t(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=Z)r(h),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=t(h)}}function R(Z){if(A=!1,P(Z),!M)if(t(p)!==null)M=!0,$(k);else{var Q=t(h);Q!==null&&V(R,Q.startTime-Z)}}function k(Z,Q){M=!1,A&&(A=!1,x(T),T=-1),S=!0;var ce=g;try{for(P(Q),_=t(p);_!==null&&(!(_.expirationTime>Q)||Z&&!B());){var F=_.callback;if(typeof F=="function"){_.callback=null,g=_.priorityLevel;var Y=F(_.expirationTime<=Q);Q=s.unstable_now(),typeof Y=="function"?_.callback=Y:_===t(p)&&r(p),P(Q)}else r(p);_=t(p)}if(_!==null)var Ce=!0;else{var Xe=t(h);Xe!==null&&V(R,Xe.startTime-Q),Ce=!1}return Ce}finally{_=null,g=ce,S=!1}}var I=!1,O=null,T=-1,L=5,se=-1;function B(){return!(s.unstable_now()-se<L)}function ne(){if(O!==null){var Z=s.unstable_now();se=Z;var Q=!0;try{Q=O(!0,Z)}finally{Q?K():(I=!1,O=null)}}else I=!1}var K;if(typeof C=="function")K=function(){C(ne)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,q=ae.port2;ae.port1.onmessage=ne,K=function(){q.postMessage(null)}}else K=function(){y(ne,0)};function $(Z){O=Z,I||(I=!0,K())}function V(Z,Q){T=y(function(){Z(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Z){Z.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,$(k))},s.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Z?Math.floor(1e3/Z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Z){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var ce=g;g=Q;try{return Z()}finally{g=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Z,Q){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var ce=g;g=Z;try{return Q()}finally{g=ce}},s.unstable_scheduleCallback=function(Z,Q,ce){var F=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?F+ce:F):ce=F,Z){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ce+Y,Z={id:v++,callback:Q,priorityLevel:Z,startTime:ce,expirationTime:Y,sortIndex:-1},ce>F?(Z.sortIndex=ce,e(h,Z),t(p)===null&&Z===t(h)&&(A?(x(T),T=-1):A=!0,V(R,ce-F))):(Z.sortIndex=Y,e(p,Z),M||S||(M=!0,$(k))),Z},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(Z){var Q=g;return function(){var ce=g;g=Q;try{return Z.apply(this,arguments)}finally{g=ce}}}})(rf)),rf}var Rm;function O_(){return Rm||(Rm=1,nf.exports=F_()),nf.exports}var Pm;function k_(){if(Pm)return In;Pm=1;var s=Gd(),e=O_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:h.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),B=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),Z=Symbol.iterator;function Q(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,F;function Y(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ce=!1;function Xe(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=c.stack.split(`
`),w=d.length-1,U=m.length-1;1<=w&&0<=U&&d[w]!==m[U];)U--;for(;1<=w&&0<=U;w--,U--)if(d[w]!==m[U]){if(w!==1||U!==1)do if(w--,U--,0>U||d[w]!==m[U]){var z=`
`+d[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=U);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Y(n):""}function et(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case L:return"Profiler";case T:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case se:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ct(n){n._valueTracker||(n._valueTracker=We(n))}function Lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ve(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Me(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _e(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ne(n,i){_e(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function D(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ue=Array.isArray;function rt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Pe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ue(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(n){lt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Je[i]=Je[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Je.hasOwnProperty(n)&&Je[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ke=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,we=null,Be=null;function Te(n){if(n=bo(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oa(i),Le(n.stateNode,n.type,i))}}function de(n){we?Be?Be.push(n):Be=[n]:we=n}function $e(){if(we){var n=we,i=Be;if(Be=we=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function pt(n,i){return n(i)}function It(){}var At=!1;function jn(n,i,a){if(At)return n(i,a);At=!0;try{return pt(n,i,a)}finally{At=!1,(we!==null||Be!==null)&&(It(),$e())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var c=Oa(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var us=!1;if(f)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){us=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{us=!1}function Sc(n,i,a,c,d,m,w,U,z){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ye){this.onError(ye)}}var ir=!1,Ir=null,Yn=!1,Ur=null,ma={onError:function(n){ir=!0,Ir=n}};function ga(n,i,a,c,d,m,w,U,z){ir=!1,Ir=null,Sc.apply(ma,arguments)}function fs(n,i,a,c,d,m,w,U,z){if(ga.apply(this,arguments),ir){if(ir){var oe=Ir;ir=!1,Ir=null}else throw Error(t(198));Yn||(Yn=!0,Ur=oe)}}function _i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Fr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function lo(n){if(_i(n)!==n)throw Error(t(188))}function va(n){var i=n.alternate;if(!i){if(i=_i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return lo(d),n;if(m===c)return lo(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var w=!1,U=d.child;U;){if(U===a){w=!0,a=d,c=m;break}if(U===c){w=!0,c=d,a=m;break}U=U.sibling}if(!w){for(U=m.child;U;){if(U===a){w=!0,a=m,c=d;break}if(U===c){w=!0,c=m,a=d;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _a(n){return n=va(n),n!==null?xa(n):null}function xa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=xa(n);if(i!==null)return i;n=n.sibling}return null}var ya=e.unstable_scheduleCallback,Sa=e.unstable_cancelCallback,Mc=e.unstable_shouldYield,Ec=e.unstable_requestPaint,b=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,He=e.unstable_IdlePriority,De=null,ze=null;function it(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(De,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Dt,_t=Math.log,st=Math.LN2;function Dt(n){return n>>>=0,n===0?32:31-(_t(n)/st|0)|0}var Ot=64,Ft=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~d;U!==0?c=Tt(U):(m&=w,m!==0&&(c=Tt(m)))}else w=a&~d,w!==0?c=Tt(w):m!==0&&(c=Tt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-at(i),d=1<<a,c|=n[a],i&=~d;return c}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-at(m),U=1<<w,z=d[w];z===-1?((U&a)===0||(U&c)!==0)&&(d[w]=tt(U,i)):z<=i&&(n.expiredLanes|=U),m&=~U}}function Et(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function Cn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function On(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=a}function rr(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-at(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Nt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-at(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var mt=0;function oi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qt,qn,Fi,co,oh,Tc=!1,Ma=[],sr=null,or=null,ar=null,uo=new Map,fo=new Map,lr=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ah(n,i){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=bo(i),i!==null&&qn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function tv(n,i,a,c,d){switch(i){case"focusin":return sr=ho(sr,n,i,a,c,d),!0;case"dragenter":return or=ho(or,n,i,a,c,d),!0;case"mouseover":return ar=ho(ar,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return uo.set(m,ho(uo.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fo.set(m,ho(fo.get(m)||null,n,i,a,c,d)),!0}return!1}function lh(n){var i=Or(n.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=Fr(a),i!==null){n.blockedOn=i,oh(n.priority,function(){Fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vt=c,a.target.dispatchEvent(c),vt=null}else return i=bo(a),i!==null&&qn(i),n.blockedOn=a,!1;i.shift()}return!0}function ch(n,i,a){Ea(n)&&a.delete(i)}function nv(){Tc=!1,sr!==null&&Ea(sr)&&(sr=null),or!==null&&Ea(or)&&(or=null),ar!==null&&Ea(ar)&&(ar=null),uo.forEach(ch),fo.forEach(ch)}function po(n,i){n.blockedOn===i&&(n.blockedOn=null,Tc||(Tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nv)))}function mo(n){function i(d){return po(d,n)}if(0<Ma.length){po(Ma[0],n);for(var a=1;a<Ma.length;a++){var c=Ma[a];c.blockedOn===n&&(c.blockedOn=null)}}for(sr!==null&&po(sr,n),or!==null&&po(or,n),ar!==null&&po(ar,n),uo.forEach(i),fo.forEach(i),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)lh(a),a.blockedOn===null&&lr.shift()}var ds=R.ReactCurrentBatchConfig,Ta=!0;function iv(n,i,a,c){var d=mt,m=ds.transition;ds.transition=null;try{mt=1,wc(n,i,a,c)}finally{mt=d,ds.transition=m}}function rv(n,i,a,c){var d=mt,m=ds.transition;ds.transition=null;try{mt=4,wc(n,i,a,c)}finally{mt=d,ds.transition=m}}function wc(n,i,a,c){if(Ta){var d=Ac(n,i,a,c);if(d===null)Gc(n,i,c,wa,a),ah(n,c);else if(tv(d,n,i,a,c))c.stopPropagation();else if(ah(n,c),i&4&&-1<ev.indexOf(n)){for(;d!==null;){var m=bo(d);if(m!==null&&qt(m),m=Ac(n,i,a,c),m===null&&Gc(n,i,c,wa,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var wa=null;function Ac(n,i,a,c){if(wa=null,n=H(c),n=Or(n),n!==null)if(i=_i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Fr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wa=n,null}function uh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case le:return 1;case ie:return 4;case ee:case Fe:return 16;case He:return 536870912;default:return 16}default:return 16}}var cr=null,bc=null,Aa=null;function fh(){if(Aa)return Aa;var n,i=bc,a=i.length,c,d="value"in cr?cr.value:cr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[m-c];c++);return Aa=d.slice(n,1<c?1-c:void 0)}function ba(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ca(){return!0}function dh(){return!1}function kn(n){function i(a,c,d,m,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ca:dh,this.isPropagationStopped=dh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),i}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cc=kn(hs),go=ce({},hs,{view:0,detail:0}),sv=kn(go),Rc,Pc,vo,Ra=ce({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(Rc=n.screenX-vo.screenX,Pc=n.screenY-vo.screenY):Pc=Rc=0,vo=n),Rc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),hh=kn(Ra),ov=ce({},Ra,{dataTransfer:0}),av=kn(ov),lv=ce({},go,{relatedTarget:0}),Lc=kn(lv),cv=ce({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=kn(cv),fv=ce({},hs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=kn(fv),hv=ce({},hs,{data:0}),ph=kn(hv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=gv[n])?!!i[n]:!1}function Nc(){return vv}var _v=ce({},go,{key:function(n){if(n.key){var i=pv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(n){return n.type==="keypress"?ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xv=kn(_v),yv=ce({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=kn(yv),Sv=ce({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Mv=kn(Sv),Ev=ce({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=kn(Ev),wv=ce({},Ra,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=kn(wv),bv=[9,13,27,32],Dc=f&&"CompositionEvent"in window,_o=null;f&&"documentMode"in document&&(_o=document.documentMode);var Cv=f&&"TextEvent"in window&&!_o,gh=f&&(!Dc||_o&&8<_o&&11>=_o),vh=" ",_h=!1;function xh(n,i){switch(n){case"keyup":return bv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function Rv(n,i){switch(n){case"compositionend":return yh(i);case"keypress":return i.which!==32?null:(_h=!0,vh);case"textInput":return n=i.data,n===vh&&_h?null:n;default:return null}}function Pv(n,i){if(ps)return n==="compositionend"||!Dc&&xh(n,i)?(n=fh(),Aa=bc=cr=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return gh&&i.locale!=="ko"?null:i.data;default:return null}}var Lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Lv[n.type]:i==="textarea"}function Mh(n,i,a,c){de(c),i=Ia(i,"onChange"),0<i.length&&(a=new Cc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var xo=null,yo=null;function Nv(n){zh(n,0)}function Pa(n){var i=xs(n);if(Lt(i))return n}function Dv(n,i){if(n==="change")return i}var Eh=!1;if(f){var Ic;if(f){var Uc="oninput"in document;if(!Uc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Uc=typeof Th.oninput=="function"}Ic=Uc}else Ic=!1;Eh=Ic&&(!document.documentMode||9<document.documentMode)}function wh(){xo&&(xo.detachEvent("onpropertychange",Ah),yo=xo=null)}function Ah(n){if(n.propertyName==="value"&&Pa(yo)){var i=[];Mh(i,yo,n,H(n)),jn(Nv,i)}}function Iv(n,i,a){n==="focusin"?(wh(),xo=i,yo=a,xo.attachEvent("onpropertychange",Ah)):n==="focusout"&&wh()}function Uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(yo)}function Fv(n,i){if(n==="click")return Pa(i)}function Ov(n,i){if(n==="input"||n==="change")return Pa(i)}function kv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ai=typeof Object.is=="function"?Object.is:kv;function So(n,i){if(ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!ai(n[d],i[d]))return!1}return!0}function bh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ch(n,i){var a=bh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bh(a)}}function Rh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Rh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ph(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Fc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=Ph(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Rh(a.ownerDocument.documentElement,a)){if(c!==null&&Fc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=Ch(a,m);var w=Ch(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=f&&"documentMode"in document&&11>=document.documentMode,ms=null,Oc=null,Mo=null,kc=!1;function Lh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||ms==null||ms!==ht(c)||(c=ms,"selectionStart"in c&&Fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Mo&&So(Mo,c)||(Mo=c,c=Ia(Oc,"onSelect"),0<c.length&&(i=new Cc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function La(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var gs={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Bc={},Nh={};f&&(Nh=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Na(n){if(Bc[n])return Bc[n];if(!gs[n])return n;var i=gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Nh)return Bc[n]=i[a];return n}var Dh=Na("animationend"),Ih=Na("animationiteration"),Uh=Na("animationstart"),Fh=Na("transitionend"),Oh=new Map,kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){Oh.set(n,i),l(i,[n])}for(var zc=0;zc<kh.length;zc++){var Vc=kh[zc],Vv=Vc.toLowerCase(),Hv=Vc[0].toUpperCase()+Vc.slice(1);ur(Vv,"on"+Hv)}ur(Dh,"onAnimationEnd"),ur(Ih,"onAnimationIteration"),ur(Uh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Fh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,fs(c,i,void 0,n),n.currentTarget=null}function zh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var U=c[w],z=U.instance,oe=U.currentTarget;if(U=U.listener,z!==m&&d.isPropagationStopped())break e;Bh(d,U,oe),m=z}else for(w=0;w<c.length;w++){if(U=c[w],z=U.instance,oe=U.currentTarget,U=U.listener,z!==m&&d.isPropagationStopped())break e;Bh(d,U,oe),m=z}}}if(Yn)throw n=Ur,Yn=!1,Ur=null,n}function Bt(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(Vh(i,n,2,!1),a.add(c))}function Hc(n,i,a){var c=0;i&&(c|=4),Vh(a,n,c,i)}var Da="_reactListening"+Math.random().toString(36).slice(2);function To(n){if(!n[Da]){n[Da]=!0,r.forEach(function(a){a!=="selectionchange"&&(Gv.has(a)||Hc(a,!1,n),Hc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Da]||(i[Da]=!0,Hc("selectionchange",!1,i))}}function Vh(n,i,a,c){switch(uh(i)){case 1:var d=iv;break;case 4:d=rv;break;default:d=wc}a=d.bind(null,i,a,n),d=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;w=w.return}for(;U!==null;){if(w=Or(U),w===null)return;if(z=w.tag,z===5||z===6){c=m=w;continue e}U=U.parentNode}}c=c.return}jn(function(){var oe=m,ye=H(a),Ee=[];e:{var xe=Oh.get(n);if(xe!==void 0){var Ve=Cc,Ze=n;switch(n){case"keypress":if(ba(a)===0)break e;case"keydown":case"keyup":Ve=xv;break;case"focusin":Ze="focus",Ve=Lc;break;case"focusout":Ze="blur",Ve=Lc;break;case"beforeblur":case"afterblur":Ve=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=Mv;break;case Dh:case Ih:case Uh:Ve=uv;break;case Fh:Ve=Tv;break;case"scroll":Ve=sv;break;case"wheel":Ve=Av;break;case"copy":case"cut":case"paste":Ve=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=mh}var Qe=(i&4)!==0,$t=!Qe&&n==="scroll",J=Qe?xe!==null?xe+"Capture":null:xe;Qe=[];for(var W=oe,te;W!==null;){te=W;var be=te.stateNode;if(te.tag===5&&be!==null&&(te=be,J!==null&&(be=yn(W,J),be!=null&&Qe.push(wo(W,be,te)))),$t)break;W=W.return}0<Qe.length&&(xe=new Ve(xe,Ze,null,a,ye),Ee.push({event:xe,listeners:Qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",xe&&a!==vt&&(Ze=a.relatedTarget||a.fromElement)&&(Or(Ze)||Ze[Oi]))break e;if((Ve||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(Ze=a.relatedTarget||a.toElement,Ve=oe,Ze=Ze?Or(Ze):null,Ze!==null&&($t=_i(Ze),Ze!==$t||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ve=null,Ze=oe),Ve!==Ze)){if(Qe=hh,be="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=mh,be="onPointerLeave",J="onPointerEnter",W="pointer"),$t=Ve==null?xe:xs(Ve),te=Ze==null?xe:xs(Ze),xe=new Qe(be,W+"leave",Ve,a,ye),xe.target=$t,xe.relatedTarget=te,be=null,Or(ye)===oe&&(Qe=new Qe(J,W+"enter",Ze,a,ye),Qe.target=te,Qe.relatedTarget=$t,be=Qe),$t=be,Ve&&Ze)t:{for(Qe=Ve,J=Ze,W=0,te=Qe;te;te=vs(te))W++;for(te=0,be=J;be;be=vs(be))te++;for(;0<W-te;)Qe=vs(Qe),W--;for(;0<te-W;)J=vs(J),te--;for(;W--;){if(Qe===J||J!==null&&Qe===J.alternate)break t;Qe=vs(Qe),J=vs(J)}Qe=null}else Qe=null;Ve!==null&&Hh(Ee,xe,Ve,Qe,!1),Ze!==null&&$t!==null&&Hh(Ee,$t,Ze,Qe,!0)}}e:{if(xe=oe?xs(oe):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var nt=Dv;else if(Sh(xe))if(Eh)nt=Ov;else{nt=Uv;var ut=Iv}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(nt=Fv);if(nt&&(nt=nt(n,oe))){Mh(Ee,nt,a,ye);break e}ut&&ut(n,xe,oe),n==="focusout"&&(ut=xe._wrapperState)&&ut.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(ut=oe?xs(oe):window,n){case"focusin":(Sh(ut)||ut.contentEditable==="true")&&(ms=ut,Oc=oe,Mo=null);break;case"focusout":Mo=Oc=ms=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Lh(Ee,a,ye);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Lh(Ee,a,ye)}var ft;if(Dc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ps?xh(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(gh&&a.locale!=="ko"&&(ps||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ps&&(ft=fh()):(cr=ye,bc="value"in cr?cr.value:cr.textContent,ps=!0)),ut=Ia(oe,gt),0<ut.length&&(gt=new ph(gt,n,null,a,ye),Ee.push({event:gt,listeners:ut}),ft?gt.data=ft:(ft=yh(a),ft!==null&&(gt.data=ft)))),(ft=Cv?Rv(n,a):Pv(n,a))&&(oe=Ia(oe,"onBeforeInput"),0<oe.length&&(ye=new ph("onBeforeInput","beforeinput",null,a,ye),Ee.push({event:ye,listeners:oe}),ye.data=ft))}zh(Ee,i)})}function wo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ia(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,a),m!=null&&c.unshift(wo(n,m,d)),m=yn(n,i),m!=null&&c.push(wo(n,m,d))),n=n.return}return c}function vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Hh(n,i,a,c,d){for(var m=i._reactName,w=[];a!==null&&a!==c;){var U=a,z=U.alternate,oe=U.stateNode;if(z!==null&&z===c)break;U.tag===5&&oe!==null&&(U=oe,d?(z=yn(a,m),z!=null&&w.unshift(wo(a,z,U))):d||(z=yn(a,m),z!=null&&w.push(wo(a,z,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Wv=/\r\n?/g,Xv=/\u0000|\uFFFD/g;function Gh(n){return(typeof n=="string"?n:""+n).replace(Wv,`
`).replace(Xv,"")}function Ua(n,i,a){if(i=Gh(i),Gh(n)!==i&&a)throw Error(t(425))}function Fa(){}var Wc=null,Xc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(n){return Wh.resolve(null).then(n).catch(qv)}:Yc;function qv(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),mo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);mo(i)}function fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Xh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var _s=Math.random().toString(36).slice(2),xi="__reactFiber$"+_s,Ao="__reactProps$"+_s,Oi="__reactContainer$"+_s,$c="__reactEvents$"+_s,$v="__reactListeners$"+_s,Zv="__reactHandles$"+_s;function Or(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Oi]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Xh(n);n!==null;){if(a=n[xi])return a;n=Xh(n)}return i}n=a,a=n.parentNode}return null}function bo(n){return n=n[xi]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oa(n){return n[Ao]||null}var Zc=[],ys=-1;function dr(n){return{current:n}}function zt(n){0>ys||(n.current=Zc[ys],Zc[ys]=null,ys--)}function kt(n,i){ys++,Zc[ys]=n.current,n.current=i}var hr={},hn=dr(hr),Rn=dr(!1),kr=hr;function Ss(n,i){var a=n.type.contextTypes;if(!a)return hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function ka(){zt(Rn),zt(hn)}function jh(n,i,a){if(hn.current!==hr)throw Error(t(168));kt(hn,i),kt(Rn,a)}function Yh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ge(n)||"Unknown",d));return ce({},a,c)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,kr=hn.current,kt(hn,n),kt(Rn,Rn.current),!0}function qh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Yh(n,i,kr),c.__reactInternalMemoizedMergedChildContext=n,zt(Rn),zt(hn),kt(hn,n)):zt(Rn),kt(Rn,a)}var ki=null,za=!1,Kc=!1;function $h(n){ki===null?ki=[n]:ki.push(n)}function Kv(n){za=!0,$h(n)}function pr(){if(!Kc&&ki!==null){Kc=!0;var n=0,i=mt;try{var a=ki;for(mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ki=null,za=!1}catch(d){throw ki!==null&&(ki=ki.slice(n+1)),ya(le,pr),d}finally{mt=i,Kc=!1}}return null}var Ms=[],Es=0,Va=null,Ha=0,$n=[],Zn=0,Br=null,Bi=1,zi="";function zr(n,i){Ms[Es++]=Ha,Ms[Es++]=Va,Va=n,Ha=i}function Zh(n,i,a){$n[Zn++]=Bi,$n[Zn++]=zi,$n[Zn++]=Br,Br=n;var c=Bi;n=zi;var d=32-at(c)-1;c&=~(1<<d),a+=1;var m=32-at(i)+d;if(30<m){var w=d-d%5;m=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Bi=1<<32-at(i)+d|a<<d|c,zi=m+n}else Bi=1<<m|a<<d|c,zi=n}function Jc(n){n.return!==null&&(zr(n,1),Zh(n,1,0))}function Qc(n){for(;n===Va;)Va=Ms[--Es],Ms[Es]=null,Ha=Ms[--Es],Ms[Es]=null;for(;n===Br;)Br=$n[--Zn],$n[Zn]=null,zi=$n[--Zn],$n[Zn]=null,Bi=$n[--Zn],$n[Zn]=null}var Bn=null,zn=null,Vt=!1,li=null;function Kh(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Jh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:Bi,overflow:zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tu(n){if(Vt){var i=zn;if(i){var a=i;if(!Jh(n,i)){if(eu(n))throw Error(t(418));i=fr(a.nextSibling);var c=Bn;i&&Jh(n,i)?Kh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,Bn=n)}}else{if(eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Bn=n}}}function Qh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Ga(n){if(n!==Bn)return!1;if(!Vt)return Qh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=zn)){if(eu(n))throw ep(),Error(t(418));for(;i;)Kh(n,i),i=fr(i.nextSibling)}if(Qh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?fr(n.stateNode.nextSibling):null;return!0}function ep(){for(var n=zn;n;)n=fr(n.nextSibling)}function Ts(){zn=Bn=null,Vt=!1}function nu(n){li===null?li=[n]:li.push(n)}var Jv=R.ReactCurrentBatchConfig;function Co(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var U=d.refs;w===null?delete U[m]:U[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function tp(n){var i=n._init;return i(n._payload)}function np(n){function i(J,W){if(n){var te=J.deletions;te===null?(J.deletions=[W],J.flags|=16):te.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function d(J,W){return J=Mr(J,W),J.index=0,J.sibling=null,J}function m(J,W,te){return J.index=te,n?(te=J.alternate,te!==null?(te=te.index,te<W?(J.flags|=2,W):te):(J.flags|=2,W)):(J.flags|=1048576,W)}function w(J){return n&&J.alternate===null&&(J.flags|=2),J}function U(J,W,te,be){return W===null||W.tag!==6?(W=Yu(te,J.mode,be),W.return=J,W):(W=d(W,te),W.return=J,W)}function z(J,W,te,be){var nt=te.type;return nt===O?ye(J,W,te.props.children,be,te.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===$&&tp(nt)===W.type)?(be=d(W,te.props),be.ref=Co(J,W,te),be.return=J,be):(be=pl(te.type,te.key,te.props,null,J.mode,be),be.ref=Co(J,W,te),be.return=J,be)}function oe(J,W,te,be){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=qu(te,J.mode,be),W.return=J,W):(W=d(W,te.children||[]),W.return=J,W)}function ye(J,W,te,be,nt){return W===null||W.tag!==7?(W=qr(te,J.mode,be,nt),W.return=J,W):(W=d(W,te),W.return=J,W)}function Ee(J,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Yu(""+W,J.mode,te),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return te=pl(W.type,W.key,W.props,null,J.mode,te),te.ref=Co(J,null,W),te.return=J,te;case I:return W=qu(W,J.mode,te),W.return=J,W;case $:var be=W._init;return Ee(J,be(W._payload),te)}if(Ue(W)||Q(W))return W=qr(W,J.mode,te,null),W.return=J,W;Wa(J,W)}return null}function xe(J,W,te,be){var nt=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return nt!==null?null:U(J,W,""+te,be);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===nt?z(J,W,te,be):null;case I:return te.key===nt?oe(J,W,te,be):null;case $:return nt=te._init,xe(J,W,nt(te._payload),be)}if(Ue(te)||Q(te))return nt!==null?null:ye(J,W,te,be,null);Wa(J,te)}return null}function Ve(J,W,te,be,nt){if(typeof be=="string"&&be!==""||typeof be=="number")return J=J.get(te)||null,U(W,J,""+be,nt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case k:return J=J.get(be.key===null?te:be.key)||null,z(W,J,be,nt);case I:return J=J.get(be.key===null?te:be.key)||null,oe(W,J,be,nt);case $:var ut=be._init;return Ve(J,W,te,ut(be._payload),nt)}if(Ue(be)||Q(be))return J=J.get(te)||null,ye(W,J,be,nt,null);Wa(W,be)}return null}function Ze(J,W,te,be){for(var nt=null,ut=null,ft=W,gt=W=0,on=null;ft!==null&&gt<te.length;gt++){ft.index>gt?(on=ft,ft=null):on=ft.sibling;var Pt=xe(J,ft,te[gt],be);if(Pt===null){ft===null&&(ft=on);break}n&&ft&&Pt.alternate===null&&i(J,ft),W=m(Pt,W,gt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt,ft=on}if(gt===te.length)return a(J,ft),Vt&&zr(J,gt),nt;if(ft===null){for(;gt<te.length;gt++)ft=Ee(J,te[gt],be),ft!==null&&(W=m(ft,W,gt),ut===null?nt=ft:ut.sibling=ft,ut=ft);return Vt&&zr(J,gt),nt}for(ft=c(J,ft);gt<te.length;gt++)on=Ve(ft,J,gt,te[gt],be),on!==null&&(n&&on.alternate!==null&&ft.delete(on.key===null?gt:on.key),W=m(on,W,gt),ut===null?nt=on:ut.sibling=on,ut=on);return n&&ft.forEach(function(Er){return i(J,Er)}),Vt&&zr(J,gt),nt}function Qe(J,W,te,be){var nt=Q(te);if(typeof nt!="function")throw Error(t(150));if(te=nt.call(te),te==null)throw Error(t(151));for(var ut=nt=null,ft=W,gt=W=0,on=null,Pt=te.next();ft!==null&&!Pt.done;gt++,Pt=te.next()){ft.index>gt?(on=ft,ft=null):on=ft.sibling;var Er=xe(J,ft,Pt.value,be);if(Er===null){ft===null&&(ft=on);break}n&&ft&&Er.alternate===null&&i(J,ft),W=m(Er,W,gt),ut===null?nt=Er:ut.sibling=Er,ut=Er,ft=on}if(Pt.done)return a(J,ft),Vt&&zr(J,gt),nt;if(ft===null){for(;!Pt.done;gt++,Pt=te.next())Pt=Ee(J,Pt.value,be),Pt!==null&&(W=m(Pt,W,gt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt);return Vt&&zr(J,gt),nt}for(ft=c(J,ft);!Pt.done;gt++,Pt=te.next())Pt=Ve(ft,J,gt,Pt.value,be),Pt!==null&&(n&&Pt.alternate!==null&&ft.delete(Pt.key===null?gt:Pt.key),W=m(Pt,W,gt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt);return n&&ft.forEach(function(L_){return i(J,L_)}),Vt&&zr(J,gt),nt}function $t(J,W,te,be){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var nt=te.key,ut=W;ut!==null;){if(ut.key===nt){if(nt=te.type,nt===O){if(ut.tag===7){a(J,ut.sibling),W=d(ut,te.props.children),W.return=J,J=W;break e}}else if(ut.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===$&&tp(nt)===ut.type){a(J,ut.sibling),W=d(ut,te.props),W.ref=Co(J,ut,te),W.return=J,J=W;break e}a(J,ut);break}else i(J,ut);ut=ut.sibling}te.type===O?(W=qr(te.props.children,J.mode,be,te.key),W.return=J,J=W):(be=pl(te.type,te.key,te.props,null,J.mode,be),be.ref=Co(J,W,te),be.return=J,J=be)}return w(J);case I:e:{for(ut=te.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(J,W.sibling),W=d(W,te.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=qu(te,J.mode,be),W.return=J,J=W}return w(J);case $:return ut=te._init,$t(J,W,ut(te._payload),be)}if(Ue(te))return Ze(J,W,te,be);if(Q(te))return Qe(J,W,te,be);Wa(J,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(J,W.sibling),W=d(W,te),W.return=J,J=W):(a(J,W),W=Yu(te,J.mode,be),W.return=J,J=W),w(J)):a(J,W)}return $t}var ws=np(!0),ip=np(!1),Xa=dr(null),ja=null,As=null,iu=null;function ru(){iu=As=ja=null}function su(n){var i=Xa.current;zt(Xa),n._currentValue=i}function ou(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function bs(n,i){ja=n,iu=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(iu!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(ja===null)throw Error(t(308));As=n,ja.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Vr=null;function au(n){Vr===null?Vr=[n]:Vr.push(n)}function rp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,au(i)):(a.next=d.next,d.next=a),i.interleaved=a,Vi(n,c)}function Vi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var mr=!1;function lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Vi(n,a)}return d=c.interleaved,d===null?(i.next=i,au(c)):(i.next=d.next,d.next=i),c.interleaved=i,Vi(n,a)}function Ya(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}function op(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qa(n,i,a,c){var d=n.updateQueue;mr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var z=U,oe=z.next;z.next=null,w===null?m=oe:w.next=oe,w=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==w&&(U===null?ye.firstBaseUpdate=oe:U.next=oe,ye.lastBaseUpdate=z))}if(m!==null){var Ee=d.baseState;w=0,ye=oe=z=null,U=m;do{var xe=U.lane,Ve=U.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ze=n,Qe=U;switch(xe=i,Ve=a,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){Ee=Ze.call(Ve,Ee,xe);break e}Ee=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,xe=typeof Ze=="function"?Ze.call(Ve,Ee,xe):Ze,xe==null)break e;Ee=ce({},Ee,xe);break e;case 2:mr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[U]:xe.push(U))}else Ve={eventTime:Ve,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(oe=ye=Ve,z=Ee):ye=ye.next=Ve,w|=xe;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(z=Ee),d.baseState=z,d.firstBaseUpdate=oe,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Wr|=w,n.lanes=w,n.memoizedState=Ee}}function ap(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ro={},yi=dr(Ro),Po=dr(Ro),Lo=dr(Ro);function Hr(n){if(n===Ro)throw Error(t(174));return n}function cu(n,i){switch(kt(Lo,i),kt(Po,n),kt(yi,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}zt(yi),kt(yi,i)}function Cs(){zt(yi),zt(Po),zt(Lo)}function lp(n){Hr(Lo.current);var i=Hr(yi.current),a=me(i,n.type);i!==a&&(kt(Po,n),kt(yi,a))}function uu(n){Po.current===n&&(zt(yi),zt(Po))}var Ht=dr(0);function $a(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var fu=[];function du(){for(var n=0;n<fu.length;n++)fu[n]._workInProgressVersionPrimary=null;fu.length=0}var Za=R.ReactCurrentDispatcher,hu=R.ReactCurrentBatchConfig,Gr=0,Gt=null,Qt=null,rn=null,Ka=!1,No=!1,Do=0,Qv=0;function pn(){throw Error(t(321))}function pu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ai(n[a],i[a]))return!1;return!0}function mu(n,i,a,c,d,m){if(Gr=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Za.current=n===null||n.memoizedState===null?i_:r_,n=a(c,d),No){m=0;do{if(No=!1,Do=0,25<=m)throw Error(t(301));m+=1,rn=Qt=null,i.updateQueue=null,Za.current=s_,n=a(c,d)}while(No)}if(Za.current=el,i=Qt!==null&&Qt.next!==null,Gr=0,rn=Qt=Gt=null,Ka=!1,i)throw Error(t(300));return n}function gu(){var n=Do!==0;return Do=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Gt.memoizedState=rn=n:rn=rn.next=n,rn}function Jn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=rn===null?Gt.memoizedState:rn.next;if(i!==null)rn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},rn===null?Gt.memoizedState=rn=n:rn=rn.next=n}return rn}function Io(n,i){return typeof i=="function"?i(n):i}function vu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Qt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=w=null,z=null,oe=m;do{var ye=oe.lane;if((Gr&ye)===ye)z!==null&&(z=z.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Ee={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};z===null?(U=z=Ee,w=c):z=z.next=Ee,Gt.lanes|=ye,Wr|=ye}oe=oe.next}while(oe!==null&&oe!==m);z===null?w=c:z.next=U,ai(c,i.memoizedState)||(Ln=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,Wr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function _u(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);ai(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function cp(){}function up(n,i){var a=Gt,c=Jn(),d=i(),m=!ai(c.memoizedState,d);if(m&&(c.memoizedState=d,Ln=!0),c=c.queue,xu(hp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Uo(9,dp.bind(null,a,c,d,i),void 0,null),sn===null)throw Error(t(349));(Gr&30)!==0||fp(a,i,d)}return d}function fp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function dp(n,i,a,c){i.value=a,i.getSnapshot=c,pp(i)&&mp(n)}function hp(n,i,a){return a(function(){pp(i)&&mp(n)})}function pp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ai(n,a)}catch{return!0}}function mp(n){var i=Vi(n,1);i!==null&&di(i,n,1,-1)}function gp(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},i.queue=n,n=n.dispatch=n_.bind(null,Gt,n),[i.memoizedState,n]}function Uo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function vp(){return Jn().memoizedState}function Ja(n,i,a,c){var d=Si();Gt.flags|=n,d.memoizedState=Uo(1|i,a,void 0,c===void 0?null:c)}function Qa(n,i,a,c){var d=Jn();c=c===void 0?null:c;var m=void 0;if(Qt!==null){var w=Qt.memoizedState;if(m=w.destroy,c!==null&&pu(c,w.deps)){d.memoizedState=Uo(i,a,m,c);return}}Gt.flags|=n,d.memoizedState=Uo(1|i,a,m,c)}function _p(n,i){return Ja(8390656,8,n,i)}function xu(n,i){return Qa(2048,8,n,i)}function xp(n,i){return Qa(4,2,n,i)}function yp(n,i){return Qa(4,4,n,i)}function Sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Mp(n,i,a){return a=a!=null?a.concat([n]):null,Qa(4,4,Sp.bind(null,i,n),a)}function yu(){}function Ep(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&pu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Tp(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&pu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function wp(n,i,a){return(Gr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=a):(ai(a,i)||(a=bn(),Gt.lanes|=a,Wr|=a,n.baseState=!0),i)}function e_(n,i){var a=mt;mt=a!==0&&4>a?a:4,n(!0);var c=hu.transition;hu.transition={};try{n(!1),i()}finally{mt=a,hu.transition=c}}function Ap(){return Jn().memoizedState}function t_(n,i,a){var c=yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bp(n))Cp(i,a);else if(a=rp(n,i,a,c),a!==null){var d=En();di(a,n,c,d),Rp(a,i,c)}}function n_(n,i,a){var c=yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bp(n))Cp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,U=m(w,a);if(d.hasEagerState=!0,d.eagerState=U,ai(U,w)){var z=i.interleaved;z===null?(d.next=d,au(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}a=rp(n,i,d,c),a!==null&&(d=En(),di(a,n,c,d),Rp(a,i,c))}}function bp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Cp(n,i){No=Ka=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Rp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}var el={readContext:Kn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},i_={readContext:Kn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:_p,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4194308,4,Sp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ja(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=t_.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:gp,useDebugValue:yu,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=gp(!1),i=n[0];return n=e_.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,d=Si();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Gr&30)!==0||fp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,_p(hp.bind(null,c,m,n),[n]),c.flags|=2048,Uo(9,dp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Si(),i=sn.identifierPrefix;if(Vt){var a=zi,c=Bi;a=(c&~(1<<32-at(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Do++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Qv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},r_={readContext:Kn,useCallback:Ep,useContext:Kn,useEffect:xu,useImperativeHandle:Mp,useInsertionEffect:xp,useLayoutEffect:yp,useMemo:Tp,useReducer:vu,useRef:vp,useState:function(){return vu(Io)},useDebugValue:yu,useDeferredValue:function(n){var i=Jn();return wp(i,Qt.memoizedState,n)},useTransition:function(){var n=vu(Io)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:cp,useSyncExternalStore:up,useId:Ap,unstable_isNewReconciler:!1},s_={readContext:Kn,useCallback:Ep,useContext:Kn,useEffect:xu,useImperativeHandle:Mp,useInsertionEffect:xp,useLayoutEffect:yp,useMemo:Tp,useReducer:_u,useRef:vp,useState:function(){return _u(Io)},useDebugValue:yu,useDeferredValue:function(n){var i=Jn();return Qt===null?i.memoizedState=n:wp(i,Qt.memoizedState,n)},useTransition:function(){var n=_u(Io)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:cp,useSyncExternalStore:up,useId:Ap,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=En(),d=yr(n),m=Hi(c,d);m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,d),i!==null&&(di(i,n,d,c),Ya(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=En(),d=yr(n),m=Hi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,d),i!==null&&(di(i,n,d,c),Ya(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),c=yr(n),d=Hi(a,c);d.tag=2,i!=null&&(d.callback=i),i=gr(n,d,c),i!==null&&(di(i,n,c,a),Ya(i,n,c))}};function Pp(n,i,a,c,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!So(a,c)||!So(d,m):!0}function Lp(n,i,a){var c=!1,d=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(d=Pn(i)?kr:hn.current,c=i.contextTypes,m=(c=c!=null)?Ss(n,d):hr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Np(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function Mu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Kn(m):(m=Pn(i)?kr:hn.current,d.context=Ss(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Su(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&tl.enqueueReplaceState(d,d.state,null),qa(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Rs(n,i){try{var a="",c=i;do a+=et(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Eu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Tu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var o_=typeof WeakMap=="function"?WeakMap:Map;function Dp(n,i,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,Bu=c),Tu(n,i)},a}function Ip(n,i,a){a=Hi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Tu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Tu(n,i),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Up(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new o_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=y_.bind(null,n,i,a),i.then(n,n))}function Fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Op(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Hi(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var a_=R.ReactCurrentOwner,Ln=!1;function Mn(n,i,a,c){i.child=n===null?ip(i,null,a,c):ws(i,n.child,a,c)}function kp(n,i,a,c,d){a=a.render;var m=i.ref;return bs(i,d),c=mu(n,i,a,c,m,d),a=gu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Vt&&a&&Jc(i),i.flags|=1,Mn(n,i,c,d),i.child)}function Bp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!ju(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,zp(n,i,m,c,d)):(n=pl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:So,a(w,c)&&n.ref===i.ref)return Gi(n,i,d)}return i.flags|=1,n=Mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function zp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(So(m,c)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Gi(n,i,d)}return wu(n,i,a,c,d)}function Vp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ls,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ls,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Ls,Vn),Vn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Ls,Vn),Vn|=c;return Mn(n,i,d,a),i.child}function Hp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,c,d){var m=Pn(a)?kr:hn.current;return m=Ss(i,m),bs(i,d),a=mu(n,i,a,c,m,d),c=gu(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Vt&&c&&Jc(i),i.flags|=1,Mn(n,i,a,d),i.child)}function Gp(n,i,a,c,d){if(Pn(a)){var m=!0;Ba(i)}else m=!1;if(bs(i,d),i.stateNode===null)il(n,i),Lp(i,a,c),Mu(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var z=w.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Kn(oe):(oe=Pn(a)?kr:hn.current,oe=Ss(i,oe));var ye=a.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Ee||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||z!==oe)&&Np(i,w,c,oe),mr=!1;var xe=i.memoizedState;w.state=xe,qa(i,c,w,d),z=i.memoizedState,U!==c||xe!==z||Rn.current||mr?(typeof ye=="function"&&(Su(i,a,ye,c),z=i.memoizedState),(U=mr||Pp(i,a,U,c,xe,z,oe))?(Ee||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),w.props=c,w.state=z,w.context=oe,c=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,sp(n,i),U=i.memoizedProps,oe=i.type===i.elementType?U:ci(i.type,U),w.props=oe,Ee=i.pendingProps,xe=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=Kn(z):(z=Pn(a)?kr:hn.current,z=Ss(i,z));var Ve=a.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Ee||xe!==z)&&Np(i,w,c,z),mr=!1,xe=i.memoizedState,w.state=xe,qa(i,c,w,d);var Ze=i.memoizedState;U!==Ee||xe!==Ze||Rn.current||mr?(typeof Ve=="function"&&(Su(i,a,Ve,c),Ze=i.memoizedState),(oe=mr||Pp(i,a,oe,c,xe,Ze,z)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ze,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ze,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),w.props=c,w.state=Ze,w.context=z,c=oe):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return Au(n,i,a,c,m,d)}function Au(n,i,a,c,d,m){Hp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&qh(i,a,!1),Gi(n,i,m);c=i.stateNode,a_.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=ws(i,n.child,null,m),i.child=ws(i,null,U,m)):Mn(n,i,U,m),i.memoizedState=c.state,d&&qh(i,a,!0),i.child}function Wp(n){var i=n.stateNode;i.pendingContext?jh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&jh(n,i.context,!1),cu(n,i.containerInfo)}function Xp(n,i,a,c,d){return Ts(),nu(d),i.flags|=256,Mn(n,i,a,c),i.child}var bu={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function jp(n,i,a){var c=i.pendingProps,d=Ht.current,m=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Ht,d&1),n===null)return tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ml(w,c,0,null),n=qr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Cu(a),i.memoizedState=bu,n):Ru(i,w));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return l_(n,i,w,c,U,d,a);if(m){m=c.fallback,w=i.mode,d=n.child,U=d.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Mr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=Mr(U,m):(m=qr(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?Cu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=bu,c}return m=n.child,n=m.sibling,c=Mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Ru(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&nu(c),ws(i,n.child,null,a),n=Ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function l_(n,i,a,c,d,m,w){if(a)return i.flags&256?(i.flags&=-257,c=Eu(Error(t(422))),nl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=ml({mode:"visible",children:c.children},d,0,null),m=qr(m,d,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&ws(i,n.child,null,w),i.child.memoizedState=Cu(w),i.memoizedState=bu,m);if((i.mode&1)===0)return nl(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=Eu(m,c,void 0),nl(n,i,w,c)}if(U=(w&n.childLanes)!==0,Ln||U){if(c=sn,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Vi(n,d),di(c,n,d,-1))}return Xu(),c=Eu(Error(t(421))),nl(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=S_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,zn=fr(d.nextSibling),Bn=i,Vt=!0,li=null,n!==null&&($n[Zn++]=Bi,$n[Zn++]=zi,$n[Zn++]=Br,Bi=n.id,zi=n.overflow,Br=i),i=Ru(i,c.children),i.flags|=4096,i)}function Yp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ou(n.return,i,a)}function Pu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function qp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,a,i);else if(n.tag===19)Yp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&$a(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Pu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$a(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Pu(i,!0,a,null,m);break;case"together":Pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function c_(n,i,a){switch(i.tag){case 3:Wp(i),Ts();break;case 5:lp(i);break;case 1:Pn(i.type)&&Ba(i);break;case 4:cu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Xa,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?jp(n,i,a):(kt(Ht,Ht.current&1),n=Gi(n,i,a),n!==null?n.sibling:null);kt(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return qp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Vp(n,i,a)}return Gi(n,i,a)}var $p,Lu,Zp,Kp;$p=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},Zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Hr(yi.current);var m=null;switch(a){case"input":d=ve(n,d),c=ve(n,c),m=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),m=[];break;case"textarea":d=Pe(n,d),c=Pe(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fa)}qe(a,c);var w;a=null;for(oe in d)if(!c.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var U=d[oe];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var z=c[oe];if(U=d?.[oe],c.hasOwnProperty(oe)&&z!==U&&(z!=null||U!=null))if(oe==="style")if(U){for(w in U)!U.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&U[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(m||(m=[]),m.push(oe,a)),a=z;else oe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(m=m||[]).push(oe,z)):oe==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(oe,""+z):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(z!=null&&oe==="onScroll"&&Bt("scroll",n),m||U===z||(m=[])):(m=m||[]).push(oe,z))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Kp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Fo(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function u_(n,i,a){var c=i.pendingProps;switch(Qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Pn(i.type)&&ka(),mn(i),null;case 3:return c=i.stateNode,Cs(),zt(Rn),zt(hn),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ga(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Hu(li),li=null))),Lu(n,i),mn(i),null;case 5:uu(i);var d=Hr(Lo.current);if(a=i.type,n!==null&&i.stateNode!=null)Zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Hr(yi.current),Ga(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[xi]=i,c[Ao]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<Eo.length;d++)Bt(Eo[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Me(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":N(c,m),Bt("invalid",c)}qe(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var U=m[w];w==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Ua(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Ua(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Bt("scroll",c)}switch(a){case"input":ct(c),D(c,m,!0);break;case"textarea":ct(c),G(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Fa)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[xi]=i,n[Ao]=c,$p(n,i,!1,!1),i.stateNode=n;e:{switch(w=ke(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Eo.length;d++)Bt(Eo[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":Me(n,c),d=ve(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":N(n,c),d=Pe(n,c),Bt("invalid",n);break;default:d=c}qe(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var z=U[m];m==="style"?Re(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&je(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Bt("scroll",n):z!=null&&P(n,m,z,w))}switch(a){case"input":ct(n),D(n,c,!1);break;case"textarea":ct(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?rt(n,!!c.multiple,m,!1):c.defaultValue!=null&&rt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Kp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Hr(Lo.current),Hr(yi.current),Ga(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(m=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Ua(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ua(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return mn(i),null;case 13:if(zt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ep(),Ts(),i.flags|=98560,m=!1;else if(m=Ga(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else li!==null&&(Hu(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?en===0&&(en=3):Xu())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Cs(),Lu(n,i),n===null&&To(i.stateNode.containerInfo),mn(i),null;case 10:return su(i.type._context),mn(i),null;case 17:return Pn(i.type)&&ka(),mn(i),null;case 19:if(zt(Ht),m=i.memoizedState,m===null)return mn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Fo(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=$a(n),w!==null){for(i.flags|=128,Fo(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&b()>Ns&&(i.flags|=128,c=!0,Fo(m,!1),i.lanes=4194304)}else{if(!c)if(n=$a(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Vt)return mn(i),null}else 2*b()-m.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,c=!0,Fo(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=b(),i.sibling=null,a=Ht.current,kt(Ht,c?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return Wu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function f_(n,i){switch(Qc(i),i.tag){case 1:return Pn(i.type)&&ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),zt(Rn),zt(hn),du(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uu(i),null;case 13:if(zt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ts()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return Cs(),null;case 10:return su(i.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var rl=!1,gn=!1,d_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function Nu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var Jp=!1;function h_(n,i){if(Wc=Ta,n=Ph(),Fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,U=-1,z=-1,oe=0,ye=0,Ee=n,xe=null;t:for(;;){for(var Ve;Ee!==a||d!==0&&Ee.nodeType!==3||(U=w+d),Ee!==m||c!==0&&Ee.nodeType!==3||(z=w+c),Ee.nodeType===3&&(w+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)xe=Ee,Ee=Ve;for(;;){if(Ee===n)break t;if(xe===a&&++oe===d&&(U=w),xe===m&&++ye===c&&(z=w),(Ve=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Ve}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:n,selectionRange:a},Ta=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,$t=Ze.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ci(i.type,Qe),$t);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){Xt(i,i.return,be)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Ze=Jp,Jp=!1,Ze}function Oo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Nu(i,a,m)}d=d.next}while(d!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Du(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Qp(n){var i=n.alternate;i!==null&&(n.alternate=null,Qp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[Ao],delete i[$c],delete i[$v],delete i[Zv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function em(n){return n.tag===5||n.tag===3||n.tag===4}function tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Iu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fa));else if(c!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}function Uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}var cn=null,ui=!1;function vr(n,i,a){for(a=a.child;a!==null;)nm(n,i,a),a=a.sibling}function nm(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 5:gn||Ps(a,i);case 6:var c=cn,d=ui;cn=null,vr(n,i,a),cn=c,ui=d,cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),mo(n)):qc(cn,a.stateNode));break;case 4:c=cn,d=ui,cn=a.stateNode.containerInfo,ui=!0,vr(n,i,a),cn=c,ui=d;break;case 0:case 11:case 14:case 15:if(!gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Nu(a,i,w),d=d.next}while(d!==c)}vr(n,i,a);break;case 1:if(!gn&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Xt(a,i,U)}vr(n,i,a);break;case 21:vr(n,i,a);break;case 22:a.mode&1?(gn=(c=gn)||a.memoizedState!==null,vr(n,i,a),gn=c):vr(n,i,a);break;default:vr(n,i,a)}}function im(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new d_),i.forEach(function(c){var d=M_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:cn=U.stateNode,ui=!1;break e;case 3:cn=U.stateNode.containerInfo,ui=!0;break e;case 4:cn=U.stateNode.containerInfo,ui=!0;break e}U=U.return}if(cn===null)throw Error(t(160));nm(m,w,d),cn=null,ui=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(oe){Xt(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)rm(i,n),i=i.sibling}function rm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),Mi(n),c&4){try{Oo(3,n,n.return),sl(3,n)}catch(Qe){Xt(n,n.return,Qe)}try{Oo(5,n,n.return)}catch(Qe){Xt(n,n.return,Qe)}}break;case 1:fi(i,n),Mi(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(fi(i,n),Mi(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var d=n.stateNode;try{Ae(d,"")}catch(Qe){Xt(n,n.return,Qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&_e(d,m),ke(U,w);var oe=ke(U,m);for(w=0;w<z.length;w+=2){var ye=z[w],Ee=z[w+1];ye==="style"?Re(d,Ee):ye==="dangerouslySetInnerHTML"?je(d,Ee):ye==="children"?Ae(d,Ee):P(d,ye,Ee,oe)}switch(U){case"input":Ne(d,m);break;case"textarea":E(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ve=m.value;Ve!=null?rt(d,!!m.multiple,Ve,!1):xe!==!!m.multiple&&(m.defaultValue!=null?rt(d,!!m.multiple,m.defaultValue,!0):rt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ao]=m}catch(Qe){Xt(n,n.return,Qe)}}break;case 6:if(fi(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Qe){Xt(n,n.return,Qe)}}break;case 3:if(fi(i,n),Mi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(Qe){Xt(n,n.return,Qe)}break;case 4:fi(i,n),Mi(n);break;case 13:fi(i,n),Mi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ku=b())),c&4&&im(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(oe=gn)||ye,fi(i,n),gn=oe):fi(i,n),Mi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(Ye=n,ye=n.child;ye!==null;){for(Ee=Ye=ye;Ye!==null;){switch(xe=Ye,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:Oo(4,xe,xe.return);break;case 1:Ps(xe,xe.return);var Ze=xe.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Qe){Xt(c,a,Qe)}}break;case 5:Ps(xe,xe.return);break;case 22:if(xe.memoizedState!==null){am(Ee);continue}}Ve!==null?(Ve.return=xe,Ye=Ve):am(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=Ee.stateNode,z=Ee.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=Se("display",w))}catch(Qe){Xt(n,n.return,Qe)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=oe?"":Ee.memoizedProps}catch(Qe){Xt(n,n.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:fi(i,n),Mi(n),c&4&&im(n);break;case 21:break;default:fi(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(em(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ae(d,""),c.flags&=-33);var m=tm(n);Uu(n,m,d);break;case 3:case 4:var w=c.stateNode.containerInfo,U=tm(n);Iu(n,U,w);break;default:throw Error(t(161))}}catch(z){Xt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function p_(n,i,a){Ye=n,sm(n)}function sm(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var d=Ye,m=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||rl;if(!w){var U=d.alternate,z=U!==null&&U.memoizedState!==null||gn;U=rl;var oe=gn;if(rl=w,(gn=z)&&!oe)for(Ye=d;Ye!==null;)w=Ye,z=w.child,w.tag===22&&w.memoizedState!==null?lm(d):z!==null?(z.return=w,Ye=z):lm(d);for(;m!==null;)Ye=m,sm(m),m=m.sibling;Ye=d,rl=U,gn=oe}om(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ye=m):om(n)}}function om(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!gn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&ap(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ap(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&mo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&Du(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function am(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function lm(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(z){Xt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Xt(i,d,z)}}var m=i.return;try{Du(i)}catch(z){Xt(i,m,z)}break;case 5:var w=i.return;try{Du(i)}catch(z){Xt(i,w,z)}}}catch(z){Xt(i,i.return,z)}if(i===n){Ye=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ye=U;break}Ye=i.return}}var m_=Math.ceil,ol=R.ReactCurrentDispatcher,Fu=R.ReactCurrentOwner,Qn=R.ReactCurrentBatchConfig,bt=0,sn=null,Kt=null,un=0,Vn=0,Ls=dr(0),en=0,ko=null,Wr=0,al=0,Ou=0,Bo=null,Nn=null,ku=0,Ns=1/0,Wi=null,ll=!1,Bu=null,_r=null,cl=!1,xr=null,ul=0,zo=0,zu=null,fl=-1,dl=0;function En(){return(bt&6)!==0?b():fl!==-1?fl:fl=b()}function yr(n){return(n.mode&1)===0?1:(bt&2)!==0&&un!==0?un&-un:Jv.transition!==null?(dl===0&&(dl=bn()),dl):(n=mt,n!==0||(n=window.event,n=n===void 0?16:uh(n.type)),n)}function di(n,i,a,c){if(50<zo)throw zo=0,zu=null,Error(t(185));On(n,a,c),((bt&2)===0||n!==sn)&&(n===sn&&((bt&2)===0&&(al|=a),en===4&&Sr(n,un)),Dn(n,c),a===1&&bt===0&&(i.mode&1)===0&&(Ns=b()+500,za&&pr()))}function Dn(n,i){var a=n.callbackNode;Sn(n,i);var c=Yt(n,n===sn?un:0);if(c===0)a!==null&&Sa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Sa(a),i===1)n.tag===0?Kv(um.bind(null,n)):$h(um.bind(null,n)),Yv(function(){(bt&6)===0&&pr()}),a=null;else{switch(oi(c)){case 1:a=le;break;case 4:a=ie;break;case 16:a=ee;break;case 536870912:a=He;break;default:a=ee}a=_m(a,cm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function cm(n,i){if(fl=-1,dl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ds()&&n.callbackNode!==a)return null;var c=Yt(n,n===sn?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var d=bt;bt|=2;var m=dm();(sn!==n||un!==i)&&(Wi=null,Ns=b()+500,jr(n,i));do try{__();break}catch(U){fm(n,U)}while(!0);ru(),ol.current=m,bt=d,Kt!==null?i=0:(sn=null,un=0,i=en)}if(i!==0){if(i===2&&(d=Et(n),d!==0&&(c=d,i=Vu(n,d))),i===1)throw a=ko,jr(n,0),Sr(n,c),Dn(n,b()),a;if(i===6)Sr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!g_(d)&&(i=hl(n,c),i===2&&(m=Et(n),m!==0&&(c=m,i=Vu(n,m))),i===1))throw a=ko,jr(n,0),Sr(n,c),Dn(n,b()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,Nn,Wi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(i=ku+500-b(),10<i)){if(Yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Yc(Yr.bind(null,n,Nn,Wi),i);break}Yr(n,Nn,Wi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-at(c);m=1<<w,w=i[w],w>d&&(d=w),c&=~m}if(c=d,c=b()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*m_(c/1960))-c,10<c){n.timeoutHandle=Yc(Yr.bind(null,n,Nn,Wi),c);break}Yr(n,Nn,Wi);break;case 5:Yr(n,Nn,Wi);break;default:throw Error(t(329))}}}return Dn(n,b()),n.callbackNode===a?cm.bind(null,n):null}function Vu(n,i){var a=Bo;return n.current.memoizedState.isDehydrated&&(jr(n,i).flags|=256),n=hl(n,i),n!==2&&(i=Nn,Nn=a,i!==null&&Hu(i)),n}function Hu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function g_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!ai(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~Ou,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-at(i),c=1<<a;n[a]=-1,i&=~c}}function um(n){if((bt&6)!==0)throw Error(t(327));Ds();var i=Yt(n,0);if((i&1)===0)return Dn(n,b()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=Et(n);c!==0&&(i=c,a=Vu(n,c))}if(a===1)throw a=ko,jr(n,0),Sr(n,i),Dn(n,b()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,Nn,Wi),Dn(n,b()),null}function Gu(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Ns=b()+500,za&&pr())}}function Xr(n){xr!==null&&xr.tag===0&&(bt&6)===0&&Ds();var i=bt;bt|=1;var a=Qn.transition,c=mt;try{if(Qn.transition=null,mt=1,n)return n()}finally{mt=c,Qn.transition=a,bt=i,(bt&6)===0&&pr()}}function Wu(){Vn=Ls.current,zt(Ls)}function jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,jv(a)),Kt!==null)for(a=Kt.return;a!==null;){var c=a;switch(Qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ka();break;case 3:Cs(),zt(Rn),zt(hn),du();break;case 5:uu(c);break;case 4:Cs();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:su(c.type._context);break;case 22:case 23:Wu()}a=a.return}if(sn=n,Kt=n=Mr(n.current,null),un=Vn=i,en=0,ko=null,Ou=al=Wr=0,Nn=Bo=null,Vr!==null){for(i=0;i<Vr.length;i++)if(a=Vr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,c.next=w}a.pending=c}Vr=null}return n}function fm(n,i){do{var a=Kt;try{if(ru(),Za.current=el,Ka){for(var c=Gt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ka=!1}if(Gr=0,rn=Qt=Gt=null,No=!1,Do=0,Fu.current=null,a===null||a.return===null){en=1,ko=i,Kt=null;break}e:{var m=n,w=a.return,U=a,z=i;if(i=un,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=z,ye=U,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Fp(w);if(Ve!==null){Ve.flags&=-257,Op(Ve,w,U,m,i),Ve.mode&1&&Up(m,oe,i),i=Ve,z=oe;var Ze=i.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(z),i.updateQueue=Qe}else Ze.add(z);break e}else{if((i&1)===0){Up(m,oe,i),Xu();break e}z=Error(t(426))}}else if(Vt&&U.mode&1){var $t=Fp(w);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),Op($t,w,U,m,i),nu(Rs(z,U));break e}}m=z=Rs(z,U),en!==4&&(en=2),Bo===null?Bo=[m]:Bo.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var J=Dp(m,z,i);op(m,J);break e;case 1:U=z;var W=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(_r===null||!_r.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var be=Ip(m,U,i);op(m,be);break e}}m=m.return}while(m!==null)}pm(a)}catch(nt){i=nt,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function dm(){var n=ol.current;return ol.current=el,n===null?el:n}function Xu(){(en===0||en===3||en===2)&&(en=4),sn===null||(Wr&268435455)===0&&(al&268435455)===0||Sr(sn,un)}function hl(n,i){var a=bt;bt|=2;var c=dm();(sn!==n||un!==i)&&(Wi=null,jr(n,i));do try{v_();break}catch(d){fm(n,d)}while(!0);if(ru(),bt=a,ol.current=c,Kt!==null)throw Error(t(261));return sn=null,un=0,en}function v_(){for(;Kt!==null;)hm(Kt)}function __(){for(;Kt!==null&&!Mc();)hm(Kt)}function hm(n){var i=vm(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?pm(n):Kt=i,Fu.current=null}function pm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=u_(a,i,Vn),a!==null){Kt=a;return}}else{if(a=f_(a,i),a!==null){a.flags&=32767,Kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);en===0&&(en=5)}function Yr(n,i,a){var c=mt,d=Qn.transition;try{Qn.transition=null,mt=1,x_(n,i,a,c)}finally{Qn.transition=d,mt=c}return null}function x_(n,i,a,c){do Ds();while(xr!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(rr(n,m),n===sn&&(Kt=sn=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,_m(ee,function(){return Ds(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var w=mt;mt=1;var U=bt;bt|=4,Fu.current=null,h_(n,a),rm(a,n),Bv(Xc),Ta=!!Wc,Xc=Wc=null,n.current=a,p_(a),Ec(),bt=U,mt=w,Qn.transition=m}else n.current=a;if(cl&&(cl=!1,xr=n,ul=d),m=n.pendingLanes,m===0&&(_r=null),it(a.stateNode),Dn(n,b()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ll)throw ll=!1,n=Bu,Bu=null,n;return(ul&1)!==0&&n.tag!==0&&Ds(),m=n.pendingLanes,(m&1)!==0?n===zu?zo++:(zo=0,zu=n):zo=0,pr(),null}function Ds(){if(xr!==null){var n=oi(ul),i=Qn.transition,a=mt;try{if(Qn.transition=null,mt=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,ul=0,(bt&6)!==0)throw Error(t(331));var d=bt;for(bt|=4,Ye=n.current;Ye!==null;){var m=Ye,w=m.child;if((Ye.flags&16)!==0){var U=m.deletions;if(U!==null){for(var z=0;z<U.length;z++){var oe=U[z];for(Ye=oe;Ye!==null;){var ye=Ye;switch(ye.tag){case 0:case 11:case 15:Oo(8,ye,m)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Ye=Ee;else for(;Ye!==null;){ye=Ye;var xe=ye.sibling,Ve=ye.return;if(Qp(ye),ye===oe){Ye=null;break}if(xe!==null){xe.return=Ve,Ye=xe;break}Ye=Ve}}}var Ze=m.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var $t=Qe.sibling;Qe.sibling=null,Qe=$t}while(Qe!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ye=w;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oo(9,m,m.return)}var J=m.sibling;if(J!==null){J.return=m.return,Ye=J;break e}Ye=m.return}}var W=n.current;for(Ye=W;Ye!==null;){w=Ye;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ye=te;else e:for(w=W;Ye!==null;){if(U=Ye,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:sl(9,U)}}catch(nt){Xt(U,U.return,nt)}if(U===w){Ye=null;break e}var be=U.sibling;if(be!==null){be.return=U.return,Ye=be;break e}Ye=U.return}}if(bt=d,pr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(De,n)}catch{}c=!0}return c}finally{mt=a,Qn.transition=i}}return!1}function mm(n,i,a){i=Rs(a,i),i=Dp(n,i,1),n=gr(n,i,1),i=En(),n!==null&&(On(n,1,i),Dn(n,i))}function Xt(n,i,a){if(n.tag===3)mm(n,n,a);else for(;i!==null;){if(i.tag===3){mm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){n=Rs(a,n),n=Ip(i,n,1),i=gr(i,n,1),n=En(),i!==null&&(On(i,1,n),Dn(i,n));break}}i=i.return}}function y_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>b()-ku?jr(n,0):Ou|=a),Dn(n,i)}function gm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=En();n=Vi(n,i),n!==null&&(On(n,i,a),Dn(n,a))}function S_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),gm(n,a)}function M_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),gm(n,a)}var vm;vm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Ln=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,c_(n,i,a);Ln=(n.flags&131072)!==0}else Ln=!1,Vt&&(i.flags&1048576)!==0&&Zh(i,Ha,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var d=Ss(i,hn.current);bs(i,a),d=mu(null,i,c,n,d,a);var m=gu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(m=!0,Ba(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lu(i),d.updater=tl,i.stateNode=d,d._reactInternals=i,Mu(i,c,n,a),i=Au(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Jc(i),Mn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=T_(c),n=ci(c,n),d){case 0:i=wu(null,i,c,n,a);break e;case 1:i=Gp(null,i,c,n,a);break e;case 11:i=kp(null,i,c,n,a);break e;case 14:i=Bp(null,i,c,ci(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),wu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),Gp(n,i,c,d,a);case 3:e:{if(Wp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,sp(n,i),qa(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Rs(Error(t(423)),i),i=Xp(n,i,c,a,d);break e}else if(c!==d){d=Rs(Error(t(424)),i),i=Xp(n,i,c,a,d);break e}else for(zn=fr(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,li=null,a=ip(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),c===d){i=Gi(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return lp(i),n===null&&tu(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,jc(c,d)?w=null:m!==null&&jc(c,m)&&(i.flags|=32),Hp(n,i),Mn(n,i,w,a),i.child;case 6:return n===null&&tu(i),null;case 13:return jp(n,i,a);case 4:return cu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ws(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),kp(n,i,c,d,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,kt(Xa,c._currentValue),c._currentValue=w,m!==null)if(ai(m.value,w)){if(m.children===d.children&&!Rn.current){i=Gi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){w=m.child;for(var z=U.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=Hi(-1,a&-a),z.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),oe.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),ou(m.return,a,i),U.lanes|=a;break}z=z.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),ou(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Mn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,bs(i,a),d=Kn(d),c=c(d),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,d=ci(c,i.pendingProps),d=ci(c.type,d),Bp(n,i,c,d,a);case 15:return zp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),il(n,i),i.tag=1,Pn(c)?(n=!0,Ba(i)):n=!1,bs(i,a),Lp(i,c,d),Mu(i,c,d,a),Au(null,i,c,!0,n,a);case 19:return qp(n,i,a);case 22:return Vp(n,i,a)}throw Error(t(156,i.tag))};function _m(n,i){return ya(n,i)}function E_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,c){return new E_(n,i,a,c)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T_(n){if(typeof n=="function")return ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===q)return 14}return 2}function Mr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,d,m){var w=2;if(c=n,typeof n=="function")ju(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case O:return qr(a.children,d,m,i);case T:w=8,d|=8;break;case L:return n=ei(12,a,i,d|2),n.elementType=L,n.lanes=m,n;case K:return n=ei(13,a,i,d),n.elementType=K,n.lanes=m,n;case ae:return n=ei(19,a,i,d),n.elementType=ae,n.lanes=m,n;case V:return ml(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case se:w=10;break e;case B:w=9;break e;case ne:w=11;break e;case q:w=14;break e;case $:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(w,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function qr(n,i,a,c){return n=ei(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=ei(22,n,c,i),n.elementType=V,n.lanes=a,n.stateNode={isHidden:!1},n}function Yu(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function w_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cn(0),this.expirationTimes=Cn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $u(n,i,a,c,d,m,w,U,z){return n=new w_(n,i,a,U,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(m),n}function A_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function xm(n){if(!n)return hr;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return Yh(n,a,i)}return i}function ym(n,i,a,c,d,m,w,U,z){return n=$u(a,c,!0,n,d,m,w,U,z),n.context=xm(null),a=n.current,c=En(),d=yr(a),m=Hi(c,d),m.callback=i??null,gr(a,m,d),n.current.lanes=d,On(n,d,c),Dn(n,c),n}function gl(n,i,a,c){var d=i.current,m=En(),w=yr(d);return a=xm(a),i.context===null?i.context=a:i.pendingContext=a,i=Hi(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=gr(d,i,w),n!==null&&(di(n,d,w,m),Ya(n,d,w)),w}function vl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Zu(n,i){Sm(n,i),(n=n.alternate)&&Sm(n,i)}function b_(){return null}var Mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ku(n){this._internalRoot=n}_l.prototype.render=Ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},_l.prototype.unmount=Ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xr(function(){gl(null,n,null,null)}),i[Oi]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=co();n={blockedOn:null,target:n,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,n),a===0&&lh(n)}};function Ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Em(){}function C_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var oe=vl(w);m.call(oe)}}var w=ym(i,c,n,0,null,!1,!1,"",Em);return n._reactRootContainer=w,n[Oi]=w.current,To(n.nodeType===8?n.parentNode:n),Xr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var oe=vl(z);U.call(oe)}}var z=$u(n,0,!1,null,null,!1,!1,"",Em);return n._reactRootContainer=z,n[Oi]=z.current,To(n.nodeType===8?n.parentNode:n),Xr(function(){gl(i,z,a,c)}),z}function yl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var U=d;d=function(){var z=vl(w);U.call(z)}}gl(i,w,n,d)}else w=C_(a,i,n,d,c);return vl(w)}qt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(Nt(i,a|1),Dn(i,b()),(bt&6)===0&&(Ns=b()+500,pr()))}break;case 13:Xr(function(){var c=Vi(n,1);if(c!==null){var d=En();di(c,n,1,d)}}),Zu(n,1)}},qn=function(n){if(n.tag===13){var i=Vi(n,134217728);if(i!==null){var a=En();di(i,n,134217728,a)}Zu(n,134217728)}},Fi=function(n){if(n.tag===13){var i=yr(n),a=Vi(n,i);if(a!==null){var c=En();di(a,n,i,c)}Zu(n,i)}},co=function(){return mt},oh=function(n,i){var a=mt;try{return mt=n,i()}finally{mt=a}},Le=function(n,i,a){switch(i){case"input":if(Ne(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Oa(c);if(!d)throw Error(t(90));Lt(c),Ne(c,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&rt(n,!!a.multiple,i,!1)}},pt=Gu,It=Xr;var R_={usingClientEntryPoint:!1,Events:[bo,xs,Oa,de,$e,Gu]},Vo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P_={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_a(n),n===null?null:n.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||b_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{De=Sl.inject(P_),ze=Sl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(i))throw Error(t(200));return A_(n,i,null,a)},In.createRoot=function(n,i){if(!Ju(n))throw Error(t(299));var a=!1,c="",d=Mm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=$u(n,1,!1,null,null,a,!1,c,d),n[Oi]=i.current,To(n.nodeType===8?n.parentNode:n),new Ku(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_a(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Xr(n)},In.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Ju(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",w=Mm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=ym(i,null,n,1,a??null,d,!1,m,w),n[Oi]=i.current,To(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new _l(i)},In.render=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(Xr(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},In.unstable_batchedUpdates=Gu,In.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var Lm;function B_(){if(Lm)return tf.exports;Lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),tf.exports=k_(),tf.exports}var Nm;function z_(){if(Nm)return Ml;Nm=1;var s=B_();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var V_=z_();const H_=Hd(V_),G_={primary:`
		text-cyber-text bg-cyber-accent
		border border-cyber-border

		bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
		bg-[length:0%_100%] bg-no-repeat
		hover:bg-[length:100%_100%]

		transition-[background-size,box-shadow] duration-300
		hover:shadow-cyber-glow/50

		hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]
	`,secondary:`
		text-cyber-accent bg-cyber-void
		border border-cyber-border

		bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow
		bg-[length:0%_100%] bg-no-repeat
		hover:bg-[length:100%_100%]

		transition-[background-size,box-shadow,color] duration-300
		hover:shadow-cyber-glow/50

		hover:text-cyber-text
		hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]
	`};function Wf({as:s="button",href:e,children:t,variant:r="primary",className:o="",...l}){const u=`
	inline-flex items-center justify-center
	px-6 py-3 rounded-lg font-semibold text-lg
	cursor-pointer
	disabled:opacity-60 disabled:cursor-not-allowed
	disabled:hover:shadow-none
	disabled:hover:bg-[length:0%_100%]
	${G_[r]}
	${o}
`;return s==="a"?he.jsx("a",{href:e,className:u,...l,children:t}):he.jsx("button",{className:u,...l,children:t})}function W_(){return he.jsxs("section",{id:"home",className:"flex w-full pt-0 flex-col pb-56 bg-transparent items-center md:flex-col",children:[he.jsx("div",{className:"flex items-center min-h-[50vh] justify-center text-center md:w-full",children:he.jsxs("h1",{className:" text-6xl pb-28 font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ",children:"MTRX"})," ","Studio"]})}),he.jsxs("div",{className:"flex flex-col min-h-[50vh] items-center justify-center text-center md:w-full",children:[he.jsx("p",{className:"text-md text-center font-kode font-normal text-gray-500 lg:text-lg dark:text-gray-400",children:"We design high-converting websites for growing businesses that want more leads, trust, and sales."}),he.jsxs("div",{className:"mt-8 flex flex-col px-6 sm:flex-row justify-center gap-4 w-full sm:w-auto",children:[he.jsx(Wf,{variant:"primary",as:"a",href:"#contact",children:"Book Free Discovery Call"}),he.jsx(Wf,{variant:"secondary",as:"a",href:"#contact",children:"View Portfolio"})]})]})]})}function X_(){const s=[{name:"All Jay Gaco",shortName:"All Jay",role:"Front-End Development / UI",bio:"I focus on creating modern, user-friendly websites that help businesses look more credible and connect better with their audience. I’m currently studying Web Development at Fanshawe College, where I’ve gained over two years of hands-on experience building responsive, front-end applications and refining user experience. I focus on crafting interfaces that feel clean, intuitive, and professional.",traits:["Front-End Focused","Mobile-First","Clean UI"],accent:"AJ"},{name:"Filipe Madureira",shortName:"Filipe",role:"Development / Systems",bio:"I focus on the technical side of our builds, helping ensure everything runs smoothly, efficiently, and reliably. Currently completing a Computer Science degree at TMU, I bring a strong foundation in software development, problem-solving, and system design to every project. I work across the stack to make sure what we build not only looks good, but performs well and scales properly.",traits:["Full-Stack Foundation","System Thinking","Performance Focus"],accent:"FM"},{name:"Joshua Welcher",shortName:"Joshua",role:"Creative / Technical",bio:"I bridge the gap between creative direction and technical execution. With experience in Python, 3D modeling, and digital design, I help bring ideas to life in ways that feel unique and engaging. From visual concepts to technical problem-solving, I focus on making sure our projects stand out while still being practical and well-executed.",traits:["Creative Tech","3D & Design","Problem Solving"],accent:"JW"}],[e,t]=gi.useState(0),[r,o]=gi.useState({}),[l,u]=gi.useState(!0),f=gi.useRef([]),p=s[e];gi.useEffect(()=>{const v=()=>{const _=f.current[e];if(!_)return;const g=_.parentElement;o({width:`${_.offsetWidth}px`,transform:`translateX(${_.offsetLeft-g.offsetLeft}px)`})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e]);const h=v=>{v!==e&&(u(!1),setTimeout(()=>{t(v),u(!0)},140))};return he.jsx("section",{id:"team",className:"relative px-6 pt-0 pb-56 md:px-10 lg:px-16",children:he.jsxs("div",{className:"mx-auto max-w-6xl",children:[he.jsxs("div",{className:"mx-auto mb-10 max-w-3xl text-center",children:[he.jsxs("h1",{className:" text-6xl font-extrabold font-kode pb-20 text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ",children:"About"})," ","Us"]}),he.jsx("div",{className:" items-center pb-5 justify-center text-center md:w-full",children:he.jsxs("h2",{className:"text-xl font-semibold font-kode leading-tight text-cyber-text md:text-3xl",children:["Meet the team behind the"," ",he.jsx("span",{className:"bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow bg-clip-text text-transparent",children:"build"})]})}),he.jsx("p",{className:"text-base leading-relaxed pb-32 text-cyber-muted md:text-lg",children:"We’re a small team building modern, high-quality websites that help businesses stand out and grow. We combine clean design, strong development, and clear strategy to create sites that perform, build trust, and drive results."})]}),he.jsxs("div",{className:"rounded-3xl border  border-cyber-border bg-cyber-surface/40 p-4 backdrop-blur-xl md:p-6",children:[he.jsx("div",{className:"mx-auto mb-8 w-full max-w-3xl",children:he.jsx("div",{className:"relative mx-auto w-full max-w-3xl",children:he.jsxs("div",{role:"tablist","aria-label":"Meet the team",className:"relative grid w-full grid-cols-3 items-center rounded-full p-1",children:[he.jsx("div",{"aria-hidden":"true",className:"absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow shadow-lg shadow-cyber-glow/20 transition-all duration-300 ease-out",style:r}),s.map((v,_)=>{const g=_===e;return he.jsxs("button",{ref:S=>{f.current[_]=S},type:"button",role:"tab","aria-selected":g,"aria-controls":`team-panel-${_}`,id:`team-tab-${_}`,onClick:()=>h(_),className:`
												relative z-10 flex w-full items-center justify-center
												rounded-full px-4 sm:px-5 py-3 text-sm font-semibold
												transition-all duration-300
												${g?"text-cyber-text hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]":"text-cyber-muted hover:text-cyber-text"}
											`,children:[he.jsx("span",{className:"sm:hidden",children:v.shortName}),he.jsx("span",{className:"hidden sm:inline",children:v.name})]},v.name)})]})})}),he.jsx("div",{id:`team-panel-${e}`,role:"tabpanel","aria-labelledby":`team-tab-${e}`,className:`
							rounded-3xl border border-cyber-border bg-cyber-surface/70 p-6 md:p-8
							transition-all duration-300
							${l?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}
						`,children:he.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:items-center",children:[he.jsx("div",{className:"flex justify-center md:justify-start",children:he.jsxs("div",{className:"relative",children:[he.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-cyber-purple/25 via-cyber-accent/20 to-cyber-glow/25 blur-2xl"}),he.jsx("div",{className:"relative flex h-40 w-40 items-center justify-center rounded-3xl border border-cyber-border bg-cyber-void text-4xl font-bold text-cyber-text shadow-[0_0_25px_rgba(255,46,219,0.12)] md:h-48 md:w-48",children:p.accent})]})}),he.jsxs("div",{children:[he.jsx("p",{className:"mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyber-accent",children:p.role}),he.jsx("h3",{className:"text-3xl font-semibold text-cyber-text",children:p.name}),he.jsx("p",{className:"mt-5 max-w-2xl text-sm leading-relaxed text-cyber-muted md:text-base",children:p.bio}),he.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:p.traits.map(v=>he.jsx("span",{className:"rounded-full border border-cyber-border bg-cyber-void/80 px-3 py-1.5 text-xs font-medium tracking-wide text-cyber-text",children:v},v))}),he.jsx("div",{className:"mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyber-border to-transparent"}),he.jsx("p",{className:"mt-6 text-sm leading-relaxed text-cyber-muted",children:"We build with clarity, collaboration, and a focus on helping clients look more credible and convert more effectively online."})]})]})})]})]})})}var sf={exports:{}},of,Dm;function j_(){if(Dm)return of;Dm=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return of=s,of}var af,Im;function Y_(){if(Im)return af;Im=1;var s=j_();function e(){}function t(){}return t.resetWarningCache=e,af=function(){function r(u,f,p,h,v,_){if(_!==s){var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},af}var Um;function q_(){return Um||(Um=1,sf.exports=Y_()()),sf.exports}var $_=q_();const El=Hd($_);function ec({title:s,svg:e,body:t,link:r}){return he.jsx("div",{className:"p-4 w-full max-w-sm",children:he.jsxs("div",{className:"card-shell group relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1",children:[he.jsx("div",{className:"card-gradient-border absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"}),he.jsxs("article",{className:"card-inner relative z-10 flex h-full min-h-[580px] flex-col rounded-2xl border border-cyber-border bg-cyber-surface p-8 transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]",children:[he.jsxs("div",{className:"mb-6 text-center",children:[he.jsx("div",{className:"card-icon-wrap mx-auto my-6 flex h-52 w-52 items-center justify-center text-cyber-text transition-all duration-300 group-hover:text-cyber-accent",children:e}),he.jsx("h2",{className:"text-cyber-text text-lg font-medium",children:s})]}),he.jsx("p",{className:"text-cyber-muted text-base leading-relaxed text-center flex-grow",children:t})]})]})})}ec.propTypes={title:El.string.isRequired,svg:El.node.isRequired,body:El.string.isRequired,link:El.string.isRequired};function Z_(){return he.jsxs("section",{id:"services",className:" min-h-[calc(100vh-7rem)] pt-0 pb-64 text-gray-500",children:[he.jsxs("h2",{className:"pb-32 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"What"})," ","We Do"]}),he.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch",children:[he.jsx(ec,{title:"Website Design",svg:he.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:he.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"})}),body:"We specialize in creating visually stunning, user-friendly websites that captivate your audience and drive results. Our team of expert designers will work with you to bring your vision to life and create a digital experience that sets you apart from the competition.",link:"#contact"}),he.jsx(ec,{title:"Database Management",svg:he.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:he.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"})}),body:"We offer comprehensive database management solutions to help you organize, store, and access your data with ease. Our team will work with you to develop a custom database system that meets your unique needs and ensures your data is secure and accessible.",link:"#contact"}),he.jsx(ec,{title:"Data Analysis",svg:he.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:he.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})}),body:"We provide expert data analysis services to help you make informed decisions and drive business growth. Our team will help you collect, analyze, and interpret your data to uncover valuable insights and opportunities for improvement.",link:"#contact"})]})]})}class ua{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const K_=()=>{if(!(typeof localStorage>"u"))return{get:s=>Promise.resolve(localStorage.getItem(s)),set:(s,e)=>Promise.resolve(localStorage.setItem(s,e)),remove:s=>Promise.resolve(localStorage.removeItem(s))}},fn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:K_()},Wd=s=>s?typeof s=="string"?{publicKey:s}:s.toString()==="[object Object]"?s:{}:{},J_=(s,e="https://api.emailjs.com")=>{if(!s)return;const t=Wd(s);fn.publicKey=t.publicKey,fn.blockHeadless=t.blockHeadless,fn.storageProvider=t.storageProvider,fn.blockList=t.blockList,fn.limitRate=t.limitRate,fn.origin=t.origin||e},t0=async(s,e,t={})=>{const r=await fetch(fn.origin+s,{method:"POST",headers:t,body:e}),o=await r.text(),l=new ua(r.status,o);if(r.ok)return l;throw l},n0=(s,e,t)=>{if(!s||typeof s!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Q_=s=>{if(s&&s.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},i0=s=>s.webdriver||!s.languages||s.languages.length===0,r0=()=>new ua(451,"Unavailable For Headless Browser"),ex=(s,e)=>{if(!Array.isArray(s))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},tx=s=>!s.list?.length||!s.watchVariable,nx=(s,e)=>s instanceof FormData?s.get(e):s[e],s0=(s,e)=>{if(tx(s))return!1;ex(s.list,s.watchVariable);const t=nx(e,s.watchVariable);return typeof t!="string"?!1:s.list.includes(t)},o0=()=>new ua(403,"Forbidden"),ix=(s,e)=>{if(typeof s!="number"||s<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},rx=async(s,e,t)=>{const r=Number(await t.get(s)||0);return e-Date.now()+r},a0=async(s,e,t)=>{if(!e.throttle||!t)return!1;ix(e.throttle,e.id);const r=e.id||s;return await rx(r,e.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},l0=()=>new ua(429,"Too Many Requests"),sx=async(s,e,t,r)=>{const o=Wd(r),l=o.publicKey||fn.publicKey,u=o.blockHeadless||fn.blockHeadless,f=o.storageProvider||fn.storageProvider,p={...fn.blockList,...o.blockList},h={...fn.limitRate,...o.limitRate};return u&&i0(navigator)?Promise.reject(r0()):(n0(l,s,e),Q_(t),t&&s0(p,t)?Promise.reject(o0()):await a0(location.pathname,h,f)?Promise.reject(l0()):t0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:s,template_id:e,template_params:t}),{"Content-type":"application/json"}))},ox=s=>{if(!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},ax=s=>typeof s=="string"?document.querySelector(s):s,lx=async(s,e,t,r)=>{const o=Wd(r),l=o.publicKey||fn.publicKey,u=o.blockHeadless||fn.blockHeadless,f=fn.storageProvider||o.storageProvider,p={...fn.blockList,...o.blockList},h={...fn.limitRate,...o.limitRate};if(u&&i0(navigator))return Promise.reject(r0());const v=ax(t);n0(l,s,e),ox(v);const _=new FormData(v);return s0(p,_)?Promise.reject(o0()):await a0(location.pathname,h,f)?Promise.reject(l0()):(_.append("lib_version","4.4.1"),_.append("service_id",s),_.append("template_id",e),_.append("user_id",l),t0("/api/v1.0/email/send-form",_))},cx={init:J_,send:sx,sendForm:lx,EmailJSResponseStatus:ua};function ux(){const s=gi.useRef(),[e,t]=gi.useState(!1),[r,o]=gi.useState("Send message"),l=u=>{t(!0),o("Sending..."),u.preventDefault(),cx.sendForm("Mtrx_Studio","contact_us_form",s.current,{publicKey:"nsFzgifHp3J6haAMV"}).then(()=>{console.log("SUCCESS!"),t(!0),o("Sent!")},f=>{console.log("FAILED...",f.text),o("Send message"),t(!1)})};return he.jsx("section",{id:"contact",className:"pt-0 min-h-[calc(100vh-7rem)] flex items-center justify-center",children:he.jsxs("div",{className:"grid grid-cols-1 text-center items-center gap-16 p-6 mx-auto w-full max-w-2xl  min-h-[calc(100vh-7rem)] justify-center",children:[he.jsxs("div",{children:[he.jsxs("h1",{className:"mb-4 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"Let's"})," ","Talk"]}),he.jsx("p",{className:"text-[15px] text-slate-300 mt-4 leading-relaxed",children:"Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help."}),he.jsx("div",{className:"mt-8 mx-auto flex flex-col sm:flex-row justify-evenly gap-6",children:he.jsx("div",{className:"mt-5 sm:mt-12 w-full max-w-md sm:max-w-none sm:w-1/2",children:he.jsxs("div",{className:`\r
								group flex items-center gap-4\r
								p-4 rounded-xl\r
								border border-cyber-border\r
								bg-cyber-surface/50 backdrop-blur-xl\r
								transition-all duration-300\r
								hover:-translate-y-1\r
								hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]\r
								`,children:[he.jsx("div",{className:`\r
									flex items-center justify-center\r
									w-14 h-14 rounded-lg\r
									bg-cyber-surface border border-cyber-border\r
									transition-all duration-300\r
									group-hover:shadow-[0_0_12px_rgba(255,46,219,0.2)]\r
									`,children:he.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",className:"w-7 h-7",children:[he.jsx("defs",{children:he.jsxs("linearGradient",{id:"cyberStroke",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[he.jsx("stop",{offset:"0%",stopColor:"#A855F7"}),he.jsx("stop",{offset:"50%",stopColor:"#FF2EDB"}),he.jsx("stop",{offset:"100%",stopColor:"#FF6BFF"})]})}),he.jsxs("g",{children:[he.jsx("path",{stroke:"url(#cyberStroke)",strokeLinecap:"round",strokeLinejoin:"round",d:"m0.5 4 5.93079 4.10593c0.34245 0.23708 0.79598 0.23708 1.13842 0L13.5 4",strokeWidth:"1"}),he.jsx("path",{stroke:"url(#cyberStroke)",strokeLinecap:"round",strokeLinejoin:"round",d:"M0.5 11.5v-9c0 -0.55228 0.447715 -1 1 -1h11c0.5523 0 1 0.44771 1 1v9c0 0.5523 -0.4477 1 -1 1h-11c-0.552285 0 -1 -0.4477 -1 -1Z",strokeWidth:"1"})]})]})}),he.jsxs("div",{className:"flex flex-col",children:[he.jsx("span",{className:"text-xs text-cyber-muted tracking-wide uppercase",children:"Email"}),he.jsx("a",{href:"mailto:info@example.com",className:`\r
										font-semibold text-cyber-text text-lg\r
\r
										bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow\r
										bg-clip-text\r
										bg-[length:0%_100%] bg-no-repeat\r
										hover:bg-[length:100%_100%]\r
										hover:text-transparent\r
\r
										transition-[background-size,color] duration-300\r
										`,children:"info@mtrx-studio.com"})]})]})})})]}),he.jsxs("form",{ref:s,onSubmit:l,className:`\r
						w-full max-w-2xl mx-auto\r
						rounded-2xl border border-cyber-border\r
						bg-cyber-surface/60 backdrop-blur-xl\r
						p-6 md:p-8\r
						space-y-5\r
						shadow-[0_0_30px_rgba(0,0,0,0.25)]\r
						`,children:[he.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[he.jsxs("div",{className:"relative",children:[he.jsx("input",{type:"text",id:"first_name",name:"user_first_name",placeholder:" ",required:!0,className:`\r
									peer w-full rounded-xl\r
									border border-cyber-border\r
									bg-cyber-surface/80\r
									px-4 pt-6 pb-2\r
									text-sm text-cyber-text\r
									outline-none\r
									transition-all duration-300\r
\r
									focus:border-cyber-glow\r
									focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]\r
									`}),he.jsx("label",{htmlFor:"first_name",className:`\r
									absolute left-4 top-2\r
									text-xs text-cyber-muted\r
									transition-all duration-300\r
\r
									peer-placeholder-shown:top-4\r
									peer-placeholder-shown:text-sm\r
\r
									peer-focus:top-2\r
									peer-focus:text-xs\r
									peer-focus:text-cyber-accent\r
									`,children:"First name"})]}),he.jsxs("div",{className:"relative",children:[he.jsx("input",{type:"text",id:"last_name",name:"user_last_name",placeholder:" ",required:!0,className:`\r
									peer w-full rounded-xl\r
									border border-cyber-border\r
									bg-cyber-surface/80\r
									px-4 pt-6 pb-2\r
									text-sm text-cyber-text\r
									outline-none\r
									transition-all duration-300\r
\r
									focus:border-cyber-glow\r
									focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]\r
									`}),he.jsx("label",{htmlFor:"last_name",className:`\r
									absolute left-4 top-2\r
									text-xs text-cyber-muted\r
									transition-all duration-300\r
\r
									peer-placeholder-shown:top-4\r
									peer-placeholder-shown:text-sm\r
\r
									peer-focus:top-2\r
									peer-focus:text-xs\r
									peer-focus:text-cyber-accent\r
									`,children:"Last name"})]})]}),he.jsxs("div",{className:"relative",children:[he.jsx("input",{type:"email",id:"email",name:"user_email",placeholder:" ",required:!0,className:`\r
								peer w-full rounded-xl\r
								border border-cyber-border\r
								bg-cyber-surface/80\r
								px-4 pt-6 pb-2\r
								text-sm text-cyber-text\r
								outline-none\r
								transition-all duration-300\r
\r
								focus:border-cyber-glow\r
								focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]\r
								`}),he.jsx("label",{htmlFor:"email",className:`\r
								absolute left-4 top-2\r
								text-xs text-cyber-muted\r
								transition-all duration-300\r
\r
								peer-placeholder-shown:top-4\r
								peer-placeholder-shown:text-sm\r
\r
								peer-focus:top-2\r
								peer-focus:text-xs\r
								peer-focus:text-cyber-accent\r
								`,children:"Email address"})]}),he.jsxs("div",{className:"relative",children:[he.jsx("input",{type:"tel",id:"phone",name:"user_tel",placeholder:" ",required:!0,className:`\r
								peer w-full rounded-xl\r
								border border-cyber-border\r
								bg-cyber-surface/80\r
								px-4 pt-6 pb-2\r
								text-sm text-cyber-text\r
								outline-none\r
								transition-all duration-300\r
\r
								focus:border-cyber-glow\r
								focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]\r
								`}),he.jsx("label",{htmlFor:"phone",className:`\r
								absolute left-4 top-2\r
								text-xs text-cyber-muted\r
								transition-all duration-300\r
\r
								peer-placeholder-shown:top-4\r
								peer-placeholder-shown:text-sm\r
\r
								peer-focus:top-2\r
								peer-focus:text-xs\r
								peer-focus:text-cyber-accent\r
								`,children:"Phone number"})]}),he.jsxs("div",{className:"relative",children:[he.jsx("textarea",{id:"message",name:"message",placeholder:" ",rows:"6",required:!0,className:`\r
								peer w-full rounded-xl\r
								border border-cyber-border\r
								bg-cyber-surface/80\r
								px-4 pt-6 pb-3\r
								text-sm text-cyber-text\r
								outline-none resize-none\r
								transition-all duration-300\r
\r
								focus:border-cyber-glow\r
								focus:shadow-[0_0_0_1px_#FF2EDB,0_0_16px_rgba(255,46,219,0.15)]\r
								`}),he.jsx("label",{htmlFor:"message",className:`\r
								absolute left-4 top-2\r
								text-xs text-cyber-muted\r
								transition-all duration-300\r
\r
								peer-placeholder-shown:top-4\r
								peer-placeholder-shown:text-sm\r
\r
								peer-focus:top-2\r
								peer-focus:text-xs\r
								peer-focus:text-cyber-accent\r
								`,children:"Tell us about your project"})]}),he.jsx(Wf,{variant:"primary",type:"submit",id:"contact-submit",disabled:e,className:"w-full !mt-2",children:r})]})]})})}const Xd="183",fx=0,Fm=1,dx=2,tc=1,hx=2,Zo=3,Dr=0,Un=1,Ai=2,Ji=0,Zs=1,Xf=2,Om=3,km=4,px=5,ns=100,mx=101,gx=102,vx=103,_x=104,xx=200,yx=201,Sx=202,Mx=203,jf=204,Yf=205,Ex=206,Tx=207,wx=208,Ax=209,bx=210,Cx=211,Rx=212,Px=213,Lx=214,qf=0,$f=1,Zf=2,Qs=3,Kf=4,Jf=5,Qf=6,ed=7,c0=0,Nx=1,Dx=2,Ri=0,u0=1,f0=2,d0=3,h0=4,p0=5,m0=6,g0=7,v0=300,as=301,eo=302,lf=303,cf=304,mc=306,td=1e3,Ki=1001,nd=1002,dn=1003,Ix=1004,Tl=1005,xn=1006,uf=1007,rs=1008,ri=1009,_0=1010,x0=1011,ia=1012,jd=1013,Ni=1014,bi=1015,er=1016,Yd=1017,qd=1018,ra=1020,y0=35902,S0=35899,M0=1021,E0=1022,vi=1023,tr=1026,ss=1027,T0=1028,$d=1029,to=1030,Zd=1031,Kd=1033,nc=33776,ic=33777,rc=33778,sc=33779,id=35840,rd=35841,sd=35842,od=35843,ad=36196,ld=37492,cd=37496,ud=37488,fd=37489,dd=37490,hd=37491,pd=37808,md=37809,gd=37810,vd=37811,_d=37812,xd=37813,yd=37814,Sd=37815,Md=37816,Ed=37817,Td=37818,wd=37819,Ad=37820,bd=37821,Cd=36492,Rd=36494,Pd=36495,Ld=36283,Nd=36284,Dd=36285,Id=36286,Ux=3200,Fx=0,Ox=1,Lr="",ni="srgb",no="srgb-linear",lc="linear",Ut="srgb",Is=7680,Bm=519,kx=512,Bx=513,zx=514,Jd=515,Vx=516,Hx=517,Qd=518,Gx=519,zm=35044,Vm="300 es",Ci=2e3,cc=2001;function Wx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function uc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xx(){const s=uc("canvas");return s.style.display="block",s}const Hm={};function Gm(...s){const e="THREE."+s.shift();console.log(e,...s)}function w0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=w0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=w0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function fc(...s){const e=s.join(" ");e in Hm||(Hm[e]=!0,dt(...s))}function jx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Yx={[qf]:$f,[Zf]:Qf,[Kf]:ed,[Qs]:Jf,[$f]:qf,[Qf]:Zf,[ed]:Kf,[Jf]:Qs};class so{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wm=1234567;const Ks=Math.PI/180,sa=180/Math.PI;function cs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function eh(s,e){return(s%e+e)%e}function qx(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function $x(s,e,t){return s!==e?(t-s)/(e-s):0}function Qo(s,e,t){return(1-t)*s+t*e}function Zx(s,e,t,r){return Qo(s,e,1-Math.exp(-t*r))}function Kx(s,e=1){return e-Math.abs(eh(s,e*2)-e)}function Jx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ey(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ty(s,e){return s+Math.random()*(e-s)}function ny(s){return s*(.5-Math.random())}function iy(s){s!==void 0&&(Wm=s);let e=Wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ry(s){return s*Ks}function sy(s){return s*sa}function oy(s){return(s&s-1)===0&&s!==0}function ay(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ly(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function cy(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),p=u(t/2),h=l((e+r)/2),v=u((e+r)/2),_=l((e-r)/2),g=u((e-r)/2),S=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":s.set(f*v,p*_,p*g,f*h);break;case"YZY":s.set(p*g,f*v,p*_,f*h);break;case"ZXZ":s.set(p*_,p*g,f*v,f*h);break;case"XZX":s.set(f*v,p*M,p*S,f*h);break;case"YXY":s.set(p*S,f*v,p*M,f*h);break;case"ZYZ":s.set(p*M,p*S,f*v,f*h);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function qs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pr={DEG2RAD:Ks,RAD2DEG:sa,generateUUID:cs,clamp:Mt,euclideanModulo:eh,mapLinear:qx,inverseLerp:$x,lerp:Qo,damp:Zx,pingpong:Kx,smoothstep:Jx,smootherstep:Qx,randInt:ey,randFloat:ty,randFloatSpread:ny,seededRandom:iy,degToRad:ry,radToDeg:sy,isPowerOfTwo:oy,ceilPowerOfTwo:ay,floorPowerOfTwo:ly,setQuaternionFromProperEuler:cy,normalize:Tn,denormalize:qs};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let p=r[o+0],h=r[o+1],v=r[o+2],_=r[o+3],g=l[u+0],S=l[u+1],M=l[u+2],A=l[u+3];if(_!==A||p!==g||h!==S||v!==M){let y=p*g+h*S+v*M+_*A;y<0&&(g=-g,S=-S,M=-M,A=-A,y=-y);let x=1-f;if(y<.9995){const C=Math.acos(y),P=Math.sin(C);x=Math.sin(x*C)/P,f=Math.sin(f*C)/P,p=p*x+g*f,h=h*x+S*f,v=v*x+M*f,_=_*x+A*f}else{p=p*x+g*f,h=h*x+S*f,v=v*x+M*f,_=_*x+A*f;const C=1/Math.sqrt(p*p+h*h+v*v+_*_);p*=C,h*=C,v*=C,_*=C}}e[t]=p,e[t+1]=h,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],p=r[o+1],h=r[o+2],v=r[o+3],_=l[u],g=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+v*_+p*S-h*g,e[t+1]=p*M+v*g+h*_-f*S,e[t+2]=h*M+v*S+f*g-p*_,e[t+3]=v*M-f*_-p*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(r/2),v=f(o/2),_=f(l/2),g=p(r/2),S=p(o/2),M=p(l/2);switch(u){case"XYZ":this._x=g*v*_+h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_-g*S*M;break;case"YXZ":this._x=g*v*_+h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_+g*S*M;break;case"ZXY":this._x=g*v*_-h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_-g*S*M;break;case"ZYX":this._x=g*v*_-h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_+g*S*M;break;case"YZX":this._x=g*v*_+h*S*M,this._y=h*S*_+g*v*M,this._z=h*v*M-g*S*_,this._w=h*v*_-g*S*M;break;case"XZY":this._x=g*v*_-h*S*M,this._y=h*S*_-g*v*M,this._z=h*v*M+g*S*_,this._w=h*v*_+g*S*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],v=t[6],_=t[10],g=r+f+_;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-p)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(v-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,v=t._w;return this._x=r*v+u*f+o*h-l*p,this._y=o*v+u*p+l*f-r*h,this._z=l*v+u*h+r*p-o*f,this._w=u*v-r*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),v=Math.sin(h);p=Math.sin(p*h)/v,t=Math.sin(t*h)/v,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*r),v=2*(f*t-l*o),_=2*(l*r-u*t);return this.x=t+p*h+u*_-f*v,this.y=r+p*v+f*h-l*_,this.z=o+p*_+l*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ff.copy(this).projectOnVector(e),this.sub(ff)}reflect(e){return this.sub(ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ff=new X,Xm=new oo;class xt{constructor(e,t,r,o,l,u,f,p,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h)}set(e,t,r,o,l,u,f,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],p=r[6],h=r[1],v=r[4],_=r[7],g=r[2],S=r[5],M=r[8],A=o[0],y=o[3],x=o[6],C=o[1],P=o[4],R=o[7],k=o[2],I=o[5],O=o[8];return l[0]=u*A+f*C+p*k,l[3]=u*y+f*P+p*I,l[6]=u*x+f*R+p*O,l[1]=h*A+v*C+_*k,l[4]=h*y+v*P+_*I,l[7]=h*x+v*R+_*O,l[2]=g*A+S*C+M*k,l[5]=g*y+S*P+M*I,l[8]=g*x+S*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8];return t*u*v-t*f*h-r*l*v+r*f*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8],_=v*u-f*h,g=f*p-v*l,S=h*l-u*p,M=t*_+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(o*h-v*r)*A,e[2]=(f*r-o*u)*A,e[3]=g*A,e[4]=(v*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*p-h*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(df.makeScale(e,t)),this}rotate(e){return this.premultiply(df.makeRotation(-e)),this}translate(e,t){return this.premultiply(df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const df=new xt,jm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ym=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const s={enabled:!0,workingColorSpace:no,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Lr?lc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return fc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return fc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[no]:{primaries:e,whitePoint:r,transfer:lc,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:jm,fromXYZ:Ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const Rt=uy();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=uc("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(hf(o[u].image)):l.push(hf(o[u]))}else l=hf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function hf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let hy=0;const pf=new X;class An extends so{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=Ki,o=Ki,l=xn,u=rs,f=vi,p=ri,h=An.DEFAULT_ANISOTROPY,v=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=cs(),this.name="",this.source=new th(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pf).x}get height(){return this.source.getSize(pf).y}get depth(){return this.source.getSize(pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case td:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case td:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=v0;An.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,r=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],v=p[4],_=p[8],g=p[1],S=p[5],M=p[9],A=p[2],y=p[6],x=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(S+1)/2,k=(x+1)/2,I=(v+g)/4,O=(_+A)/4,T=(M+y)/4;return P>R&&P>k?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=I/r,l=O/r):R>k?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=I/o,l=T/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=O/l,o=T/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-M)*(y-M)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(_-A)/C,this.z=(g-v)/C,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends so{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new An(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new th(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends py{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class A0 extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e,t,r,o,l,u,f,p,h,v,_,g,S,M,A,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h,v,_,g,S,M,A,y)}set(e,t,r,o,l,u,f,p,h,v,_,g,S,M,A,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=v,x[10]=_,x[14]=g,x[3]=S,x[7]=M,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,S=u*_,M=f*v,A=f*_;t[0]=p*v,t[4]=-p*_,t[8]=h,t[1]=S+M*h,t[5]=g-A*h,t[9]=-f*p,t[2]=A-g*h,t[6]=M+S*h,t[10]=u*p}else if(e.order==="YXZ"){const g=p*v,S=p*_,M=h*v,A=h*_;t[0]=g+A*f,t[4]=M*f-S,t[8]=u*h,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=S*f-M,t[6]=A+g*f,t[10]=u*p}else if(e.order==="ZXY"){const g=p*v,S=p*_,M=h*v,A=h*_;t[0]=g-A*f,t[4]=-u*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*v,t[9]=A-g*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const g=u*v,S=u*_,M=f*v,A=f*_;t[0]=p*v,t[4]=M*h-S,t[8]=g*h+A,t[1]=p*_,t[5]=A*h+g,t[9]=S*h-M,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,S=u*h,M=f*p,A=f*h;t[0]=p*v,t[4]=A-g*_,t[8]=M*_+S,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-h*v,t[6]=S*_+M,t[10]=g-A*_}else if(e.order==="XZY"){const g=u*p,S=u*h,M=f*p,A=f*h;t[0]=p*v,t[4]=-_,t[8]=h*v,t[1]=g*_+A,t[5]=u*v,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*v,t[10]=A*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,vy)}lookAt(e,t,r){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Tr.crossVectors(r,Hn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Tr.crossVectors(r,Hn)),Tr.normalize(),wl.crossVectors(Hn,Tr),o[0]=Tr.x,o[4]=wl.x,o[8]=Hn.x,o[1]=Tr.y,o[5]=wl.y,o[9]=Hn.y,o[2]=Tr.z,o[6]=wl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],p=r[8],h=r[12],v=r[1],_=r[5],g=r[9],S=r[13],M=r[2],A=r[6],y=r[10],x=r[14],C=r[3],P=r[7],R=r[11],k=r[15],I=o[0],O=o[4],T=o[8],L=o[12],se=o[1],B=o[5],ne=o[9],K=o[13],ae=o[2],q=o[6],$=o[10],V=o[14],Z=o[3],Q=o[7],ce=o[11],F=o[15];return l[0]=u*I+f*se+p*ae+h*Z,l[4]=u*O+f*B+p*q+h*Q,l[8]=u*T+f*ne+p*$+h*ce,l[12]=u*L+f*K+p*V+h*F,l[1]=v*I+_*se+g*ae+S*Z,l[5]=v*O+_*B+g*q+S*Q,l[9]=v*T+_*ne+g*$+S*ce,l[13]=v*L+_*K+g*V+S*F,l[2]=M*I+A*se+y*ae+x*Z,l[6]=M*O+A*B+y*q+x*Q,l[10]=M*T+A*ne+y*$+x*ce,l[14]=M*L+A*K+y*V+x*F,l[3]=C*I+P*se+R*ae+k*Z,l[7]=C*O+P*B+R*q+k*Q,l[11]=C*T+P*ne+R*$+k*ce,l[15]=C*L+P*K+R*V+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],v=e[2],_=e[6],g=e[10],S=e[14],M=e[3],A=e[7],y=e[11],x=e[15],C=p*S-h*g,P=f*S-h*_,R=f*g-p*_,k=u*S-h*v,I=u*g-p*v,O=u*_-f*v;return t*(A*C-y*P+x*R)-r*(M*C-y*k+x*I)+o*(M*P-A*k+x*O)-l*(M*R-A*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8],_=e[9],g=e[10],S=e[11],M=e[12],A=e[13],y=e[14],x=e[15],C=t*f-r*u,P=t*p-o*u,R=t*h-l*u,k=r*p-o*f,I=r*h-l*f,O=o*h-l*p,T=v*A-_*M,L=v*y-g*M,se=v*x-S*M,B=_*y-g*A,ne=_*x-S*A,K=g*x-S*y,ae=C*K-P*ne+R*B+k*se-I*L+O*T;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ae;return e[0]=(f*K-p*ne+h*B)*q,e[1]=(o*ne-r*K-l*B)*q,e[2]=(A*O-y*I+x*k)*q,e[3]=(g*I-_*O-S*k)*q,e[4]=(p*se-u*K-h*L)*q,e[5]=(t*K-o*se+l*L)*q,e[6]=(y*R-M*O-x*P)*q,e[7]=(v*O-g*R+S*P)*q,e[8]=(u*ne-f*se+h*T)*q,e[9]=(r*se-t*ne-l*T)*q,e[10]=(M*I-A*R+x*C)*q,e[11]=(_*R-v*I-S*C)*q,e[12]=(f*L-u*B-p*T)*q,e[13]=(t*B-r*L+o*T)*q,e[14]=(A*P-M*k-y*C)*q,e[15]=(v*k-_*P+g*C)*q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,p=e.z,h=l*u,v=l*f;return this.set(h*u+r,h*f-o*p,h*p+o*f,0,h*f+o*p,v*f+r,v*p-o*u,0,h*p-o*f,v*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,v=u+u,_=f+f,g=l*h,S=l*v,M=l*_,A=u*v,y=u*_,x=f*_,C=p*h,P=p*v,R=p*_,k=r.x,I=r.y,O=r.z;return o[0]=(1-(A+x))*k,o[1]=(S+R)*k,o[2]=(M-P)*k,o[3]=0,o[4]=(S-R)*I,o[5]=(1-(g+x))*I,o[6]=(y+C)*I,o[7]=0,o[8]=(M+P)*O,o[9]=(y-C)*O,o[10]=(1-(g+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),p=Fs.set(o[8],o[9],o[10]).length();l<0&&(u=-u),hi.copy(this);const h=1/u,v=1/f,_=1/p;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=v,hi.elements[5]*=v,hi.elements[6]*=v,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,u,f=Ci,p=!1){const h=this.elements,v=2*l/(t-e),_=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,A;if(p)M=l/(u-l),A=u*l/(u-l);else if(f===Ci)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===cc)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Ci,p=!1){const h=this.elements,v=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,A;if(p)M=1/(u-l),A=u/(u-l);else if(f===Ci)M=-2/(u-l),A=-(u+l)/(u-l);else if(f===cc)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new X,hi=new jt,gy=new X(0,0,0),vy=new X(1,1,1),Tr=new X,wl=new X,Hn=new X,qm=new jt,$m=new oo;class nr{constructor(e=0,t=0,r=0,o=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],h=o[5],v=o[9],_=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _y=0;const Zm=new X,Os=new oo,Xi=new jt,Al=new X,Go=new X,xy=new X,yy=new oo,Km=new X(1,0,0),Jm=new X(0,1,0),Qm=new X(0,0,1),eg={type:"added"},Sy={type:"removed"},ks={type:"childadded",child:null},mf={type:"childremoved",child:null};class Fn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new X,t=new nr,r=new oo,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new xt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Km,e)}rotateY(e){return this.rotateOnAxis(Jm,e)}rotateZ(e){return this.rotateOnAxis(Qm,e)}translateOnAxis(e,t){return Zm.copy(e).applyQuaternion(this.quaternion),this.position.add(Zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Km,e)}translateY(e){return this.translateOnAxis(Jm,e)}translateZ(e){return this.translateOnAxis(Qm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Al.copy(e):Al.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Go,Al,this.up):Xi.lookAt(Al,Go,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Xi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eg),ks.child=e,this.dispatchEvent(ks),ks.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sy),mf.child=e,this.dispatchEvent(mf),mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eg),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const p=[];for(const h in f){const v=f[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new X(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $s extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class gf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),x=this._getHandJoint(h,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=v.position.distanceTo(_.position),S=.02,M=.005;h.inputState.pinching&&g>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(My)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},bl={h:0,s:0,l:0};function vf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=eh(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=vf(u,l,e+1/3),this.g=vf(u,l,e),this.b=vf(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=C0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Rt.workingToColorSpace(_n.copy(this),e),Math.round(Mt(_n.r*255,0,255))*65536+Math.round(Mt(_n.g*255,0,255))*256+Math.round(Mt(_n.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,h;const v=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=v<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ni){Rt.workingToColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(bl);const r=Qo(wr.h,bl.h,t),o=Qo(wr.s,bl.s,t),l=Qo(wr.l,bl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new wt;wt.NAMES=C0;class Ey extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new X,ji=new X,_f=new X,Yi=new X,Bs=new X,zs=new X,tg=new X,xf=new X,yf=new X,Sf=new X,Mf=new Zt,Ef=new Zt,Tf=new Zt;class si{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){pi.subVectors(o,t),ji.subVectors(r,t),_f.subVectors(e,t);const u=pi.dot(pi),f=pi.dot(ji),p=pi.dot(_f),h=ji.dot(ji),v=ji.dot(_f),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const g=1/_,S=(h*p-f*v)*g,M=(u*v-f*p)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,r,o,l,u,f,p){return this.getBarycoord(e,t,r,o,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Yi.x),p.addScaledVector(u,Yi.y),p.addScaledVector(f,Yi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Mf.setScalar(0),Ef.setScalar(0),Tf.setScalar(0),Mf.fromBufferAttribute(e,t),Ef.fromBufferAttribute(e,r),Tf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Mf,l.x),u.addScaledVector(Ef,l.y),u.addScaledVector(Tf,l.z),u}static isFrontFacing(e,t,r,o){return pi.subVectors(r,t),ji.subVectors(e,t),pi.cross(ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),pi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return si.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;Bs.subVectors(o,r),zs.subVectors(l,r),xf.subVectors(e,r);const p=Bs.dot(xf),h=zs.dot(xf);if(p<=0&&h<=0)return t.copy(r);yf.subVectors(e,o);const v=Bs.dot(yf),_=zs.dot(yf);if(v>=0&&_<=v)return t.copy(o);const g=p*_-v*h;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(r).addScaledVector(Bs,u);Sf.subVectors(e,l);const S=Bs.dot(Sf),M=zs.dot(Sf);if(M>=0&&S<=M)return t.copy(l);const A=S*h-p*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(zs,f);const y=v*M-S*_;if(y<=0&&_-v>=0&&S-M>=0)return tg.subVectors(l,o),f=(_-v)/(_-v+(S-M)),t.copy(o).addScaledVector(tg,f);const x=1/(y+A+g);return u=A*x,f=g*x,t.copy(r).addScaledVector(Bs,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fa{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Rl.subVectors(this.max,Wo),Vs.subVectors(e.a,Wo),Hs.subVectors(e.b,Wo),Gs.subVectors(e.c,Wo),Ar.subVectors(Hs,Vs),br.subVectors(Gs,Hs),$r.subVectors(Vs,Gs);let t=[0,-Ar.z,Ar.y,0,-br.z,br.y,0,-$r.z,$r.y,Ar.z,0,-Ar.x,br.z,0,-br.x,$r.z,0,-$r.x,-Ar.y,Ar.x,0,-br.y,br.x,0,-$r.y,$r.x,0];return!wf(t,Vs,Hs,Gs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!wf(t,Vs,Hs,Gs,Rl))?!1:(Pl.crossVectors(Ar,br),t=[Pl.x,Pl.y,Pl.z],wf(t,Vs,Hs,Gs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new X,new X,new X,new X,new X,new X,new X,new X],mi=new X,Cl=new fa,Vs=new X,Hs=new X,Gs=new X,Ar=new X,br=new X,$r=new X,Wo=new X,Rl=new X,Pl=new X,Zr=new X;function wf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),p=e.dot(Zr),h=t.dot(Zr),v=r.dot(Zr);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>f)return!1}return!0}const Jt=new X,Ll=new Ge;let Ty=0;class Li{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=zm,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=qs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),r=Tn(r,this.array),o=Tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),r=Tn(r,this.array),o=Tn(o,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zm&&(e.usage=this.usage),e}}class R0 extends Li{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class P0 extends Li{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ln extends Li{constructor(e,t,r){super(new Float32Array(e),t,r)}}const wy=new fa,Xo=new X,Af=new X;class gc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Xo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Af)),this.expandByPoint(Xo.copy(e.center).sub(Af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ay=0;const ti=new jt,bf=new Fn,Ws=new X,Gn=new fa,jo=new fa,an=new X;class Xn extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wx(e)?P0:R0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return bf.lookAt(e),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];jo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Gn.min,jo.min),Gn.expandByPoint(an),an.addVectors(Gn.max,jo.max),Gn.expandByPoint(an)):(Gn.expandByPoint(jo.min),Gn.expandByPoint(jo.max))}Gn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,v=f.count;h<v;h++)an.fromBufferAttribute(f,h),p&&(Ws.fromBufferAttribute(e,h),an.add(Ws)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let T=0;T<r.count;T++)f[T]=new X,p[T]=new X;const h=new X,v=new X,_=new X,g=new Ge,S=new Ge,M=new Ge,A=new X,y=new X;function x(T,L,se){h.fromBufferAttribute(r,T),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,se),g.fromBufferAttribute(l,T),S.fromBufferAttribute(l,L),M.fromBufferAttribute(l,se),v.sub(h),_.sub(h),S.sub(g),M.sub(g);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(B),f[T].add(A),f[L].add(A),f[se].add(A),p[T].add(y),p[L].add(y),p[se].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const se=C[T],B=se.start,ne=se.count;for(let K=B,ae=B+ne;K<ae;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new X,R=new X,k=new X,I=new X;function O(T){k.fromBufferAttribute(o,T),I.copy(k);const L=f[T];P.copy(L),P.sub(k.multiplyScalar(k.dot(L))).normalize(),R.crossVectors(I,L);const B=R.dot(p[T])<0?-1:1;u.setXYZW(T,P.x,P.y,P.z,B)}for(let T=0,L=C.length;T<L;++T){const se=C[T],B=se.start,ne=se.count;for(let K=B,ae=B+ne;K<ae;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new X,l=new X,u=new X,f=new X,p=new X,h=new X,v=new X,_=new X;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,y),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),f.add(v),p.add(v),h.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,p){const h=f.array,v=f.itemSize,_=f.normalized,g=new h.constructor(p.length*v);let S=0,M=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?S=p[A]*f.data.stride+f.offset:S=p[A]*v;for(let x=0;x<v;x++)g[M++]=h[S++]}return new Li(g,v,_)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let v=0,_=h.length;v<_;v++){const g=h[v],S=e(g,r);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let _=0,g=h.length;_<g;_++){const S=h[_];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],_=l[h];for(let g=0,S=_.length;g<S;g++)v.push(_[g].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let by=0;class da extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=cs(),this.name="",this.type="Material",this.blending=Zs,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=Yf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jf&&(r.blendSrc=this.blendSrc),this.blendDst!==Yf&&(r.blendDst=this.blendDst),this.blendEquation!==ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new X,Cf=new X,Nl=new X,Cr=new X,Rf=new X,Dl=new X,Pf=new X;class L0{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Cf.copy(e).add(t).multiplyScalar(.5),Nl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(Cf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Nl),f=Cr.dot(this.direction),p=-Cr.dot(Nl),h=Cr.lengthSq(),v=Math.abs(1-u*u);let _,g,S,M;if(v>0)if(_=u*p-f,g=u*f-p,M=l*v,_>=0)if(g>=-M)if(g<=M){const A=1/v;_*=A,g*=A,S=_*(_+u*g+2*f)+g*(u*_+g+2*p)+h}else g=l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*p)+h;else g=-l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*p)+h;else g<=-M?(_=Math.max(0,-(-u*l+f)),g=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+g*(g+2*p)+h):g<=M?(_=0,g=Math.min(Math.max(-l,-p),l),S=g*(g+2*p)+h):(_=Math.max(0,-(u*l+f)),g=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+g*(g+2*p)+h);else g=u>0?-l:l,_=Math.max(0,-(u*g+f)),S=-_*_+g*(g+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Cf).addScaledVector(Nl,g),S}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,p;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){Rf.subVectors(t,e),Dl.subVectors(r,e),Pf.crossVectors(Rf,Dl);let u=this.direction.dot(Pf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Cr.subVectors(this.origin,e);const p=f*this.direction.dot(Dl.crossVectors(Cr,Dl));if(p<0)return null;const h=f*this.direction.dot(Rf.cross(Cr));if(h<0||p+h>u)return null;const v=-f*Cr.dot(Pf);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ea extends da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=c0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ng=new jt,Kr=new L0,Il=new gc,ig=new X,Ul=new X,Fl=new X,Ol=new X,Lf=new X,kl=new X,rg=new X,Bl=new X;class Wn extends Fn{constructor(e=new Xn,t=new ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const v=f[p],_=l[p];v!==0&&(Lf.fromBufferAttribute(_,e),u?kl.addScaledVector(Lf,v):kl.addScaledVector(Lf.sub(t),v))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Il.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Il,ig)===null||Kr.origin.distanceToSquared(ig)>(e.far-e.near)**2))&&(ng.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(ng),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const y=g[M],x=u[y.materialIndex],C=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=C,k=P;R<k;R+=3){const I=f.getX(R),O=f.getX(R+1),T=f.getX(R+2);o=zl(this,x,e,r,h,v,_,I,O,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let y=M,x=A;y<x;y+=3){const C=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=zl(this,u,e,r,h,v,_,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,A=g.length;M<A;M++){const y=g[M],x=u[y.materialIndex],C=Math.max(y.start,S.start),P=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=C,k=P;R<k;R+=3){const I=R,O=R+1,T=R+2;o=zl(this,x,e,r,h,v,_,I,O,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=M,x=A;y<x;y+=3){const C=y,P=y+1,R=y+2;o=zl(this,u,e,r,h,v,_,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Cy(s,e,t,r,o,l,u,f){let p;if(e.side===Un?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===Dr,f),p===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Bl);return h<t.near||h>t.far?null:{distance:h,point:Bl.clone(),object:s}}function zl(s,e,t,r,o,l,u,f,p,h){s.getVertexPosition(f,Ul),s.getVertexPosition(p,Fl),s.getVertexPosition(h,Ol);const v=Cy(s,e,t,r,Ul,Fl,Ol,rg);if(v){const _=new X;si.getBarycoord(rg,Ul,Fl,Ol,_),o&&(v.uv=si.getInterpolatedAttribute(o,f,p,h,_,new Ge)),l&&(v.uv1=si.getInterpolatedAttribute(l,f,p,h,_,new Ge)),u&&(v.normal=si.getInterpolatedAttribute(u,f,p,h,_,new X),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:p,c:h,normal:new X,materialIndex:0};si.getNormal(Ul,Fl,Ol,g.normal),v.face=g,v.barycoord=_}return v}class Ry extends An{constructor(e=null,t=1,r=1,o,l,u,f,p,h=dn,v=dn,_,g){super(null,u,f,p,h,v,o,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nf=new X,Py=new X,Ly=new xt;class ts{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Nf.subVectors(r,t).cross(Py.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Nf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ly.getNormalMatrix(e),o=this.coplanarPoint(Nf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new gc,Ny=new Ge(.5,.5),Vl=new X;class N0{constructor(e=new ts,t=new ts,r=new ts,o=new ts,l=new ts,u=new ts){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],v=l[4],_=l[5],g=l[6],S=l[7],M=l[8],A=l[9],y=l[10],x=l[11],C=l[12],P=l[13],R=l[14],k=l[15];if(o[0].setComponents(h-u,S-v,x-M,k-C).normalize(),o[1].setComponents(h+u,S+v,x+M,k+C).normalize(),o[2].setComponents(h+f,S+_,x+A,k+P).normalize(),o[3].setComponents(h-f,S-_,x-A,k-P).normalize(),r)o[4].setComponents(p,g,y,R).normalize(),o[5].setComponents(h-p,S-g,x-y,k-R).normalize();else if(o[4].setComponents(h-p,S-g,x-y,k-R).normalize(),t===Ci)o[5].setComponents(h+p,S+g,x+y,k+R).normalize();else if(t===cc)o[5].setComponents(p,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=Ny.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class D0 extends da{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new X,hc=new X,sg=new jt,Yo=new L0,Hl=new gc,Df=new X,og=new X;class Dy extends Fn{constructor(e=new Xn,t=new D0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)dc.fromBufferAttribute(t,o-1),hc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=dc.distanceTo(hc);e.setAttribute("lineDistance",new ln(r,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(o),Hl.radius+=l,e.ray.intersectsSphere(Hl)===!1)return;sg.copy(o).invert(),Yo.copy(e.ray).applyMatrix4(sg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let A=S,y=M-1;A<y;A+=h){const x=v.getX(A),C=v.getX(A+1),P=Gl(this,e,Yo,p,x,C,A);P&&t.push(P)}if(this.isLineLoop){const A=v.getX(M-1),y=v.getX(S),x=Gl(this,e,Yo,p,A,y,M-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=S,y=M-1;A<y;A+=h){const x=Gl(this,e,Yo,p,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Gl(this,e,Yo,p,M-1,S,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(dc.fromBufferAttribute(f,o),hc.fromBufferAttribute(f,l),t.distanceSqToSegment(dc,hc,Df,og)>r)return;Df.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Df);if(!(h<e.near||h>e.far))return{distance:h,point:og.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const ag=new X,lg=new X;class Iy extends Dy{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)ag.fromBufferAttribute(t,o),lg.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+ag.distanceTo(lg);e.setAttribute("lineDistance",new ln(r,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class I0 extends An{constructor(e=[],t=as,r,o,l,u,f,p,h,v){super(e,t,r,o,l,u,f,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oa extends An{constructor(e,t,r=Ni,o,l,u,f=dn,p=dn,h,v=tr,_=1){if(v!==tr&&v!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,l,u,f,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Uy extends oa{constructor(e,t=Ni,r=as,o,l,u=dn,f=dn,p,h=tr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class U0 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends Xn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],v=[],_=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new ln(h,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(_,2));function M(A,y,x,C,P,R,k,I,O,T,L){const se=R/O,B=k/T,ne=R/2,K=k/2,ae=I/2,q=O+1,$=T+1;let V=0,Z=0;const Q=new X;for(let ce=0;ce<$;ce++){const F=ce*B-K;for(let Y=0;Y<q;Y++){const Ce=Y*se-ne;Q[A]=Ce*C,Q[y]=F*P,Q[x]=ae,h.push(Q.x,Q.y,Q.z),Q[A]=0,Q[y]=0,Q[x]=I>0?1:-1,v.push(Q.x,Q.y,Q.z),_.push(Y/O),_.push(1-ce/T),V+=1}}for(let ce=0;ce<T;ce++)for(let F=0;F<O;F++){const Y=g+F+q*ce,Ce=g+F+q*(ce+1),Xe=g+(F+1)+q*(ce+1),et=g+(F+1)+q*ce;p.push(Y,Ce,et),p.push(Ce,Xe,et),Z+=6}f.addGroup(S,Z,L),S+=Z,g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Wl=new X,Xl=new X,If=new X,jl=new si;class Fy extends Xn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Ks*t),u=e.getIndex(),f=e.getAttribute("position"),p=u?u.count:f.count,h=[0,0,0],v=["a","b","c"],_=new Array(3),g={},S=[];for(let M=0;M<p;M+=3){u?(h[0]=u.getX(M),h[1]=u.getX(M+1),h[2]=u.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:A,b:y,c:x}=jl;if(A.fromBufferAttribute(f,h[0]),y.fromBufferAttribute(f,h[1]),x.fromBufferAttribute(f,h[2]),jl.getNormal(If),_[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,_[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,_[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let C=0;C<3;C++){const P=(C+1)%3,R=_[C],k=_[P],I=jl[v[C]],O=jl[v[P]],T=`${R}_${k}`,L=`${k}_${R}`;L in g&&g[L]?(If.dot(g[L].normal)<=l&&(S.push(I.x,I.y,I.z),S.push(O.x,O.y,O.z)),g[L]=null):T in g||(g[T]={index0:h[C],index1:h[P],normal:If.clone()})}}for(const M in g)if(g[M]){const{index0:A,index1:y}=g[M];Wl.fromBufferAttribute(f,A),Xl.fromBufferAttribute(f,y),S.push(Wl.x,Wl.y,Wl.z),S.push(Xl.x,Xl.y,Xl.z)}this.setAttribute("position",new ln(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,p=l-1,h;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),h=r[o]-u,h<0)f=o+1;else if(h>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const v=r[o],g=r[o+1]-v,S=(u-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),p=t||(u.isVector2?new Ge:new X);return p.copy(f).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new X,o=[],l=[],u=[],f=new X,p=new jt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new X)}l[0]=new X,u[0]=new X;let h=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=h&&(h=v,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),g<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Mt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(f,M))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Mt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(p.makeRotationAxis(o[M],S*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class nh extends Ii{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(e,t=new Ge){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=p-this.aX,S=h-this.aY;p=g*v-S*_+this.aX,h=g*_+S*v+this.aY}return r.set(p,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Oy extends nh{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function ih(){let s=0,e=0,t=0,r=0;function o(l,u,f,p){s=l,e=f,t=-3*l+3*u-2*f-p,r=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,h){o(u,f,h*(f-l),h*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,h,v,_){let g=(u-l)/h-(f-l)/(h+v)+(f-u)/v,S=(f-u)/v-(p-u)/(v+_)+(p-f)/_;g*=v,S*=v,o(u,f,g,S)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const Yl=new X,Uf=new ih,Ff=new ih,Of=new ih;class ky extends Ii{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,v;this.closed||f>0?h=o[(f-1)%l]:(Yl.subVectors(o[0],o[1]).add(o[0]),h=Yl);const _=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Yl.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(_),S),A=Math.pow(_.distanceToSquared(g),S),y=Math.pow(g.distanceToSquared(v),S);A<1e-4&&(A=1),M<1e-4&&(M=A),y<1e-4&&(y=A),Uf.initNonuniformCatmullRom(h.x,_.x,g.x,v.x,M,A,y),Ff.initNonuniformCatmullRom(h.y,_.y,g.y,v.y,M,A,y),Of.initNonuniformCatmullRom(h.z,_.z,g.z,v.z,M,A,y)}else this.curveType==="catmullrom"&&(Uf.initCatmullRom(h.x,_.x,g.x,v.x,this.tension),Ff.initCatmullRom(h.y,_.y,g.y,v.y,this.tension),Of.initCatmullRom(h.z,_.z,g.z,v.z,this.tension));return r.set(Uf.calc(p),Ff.calc(p),Of.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function cg(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,p=s*f;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*f+l*s+t}function By(s,e){const t=1-s;return t*t*e}function zy(s,e){return 2*(1-s)*s*e}function Vy(s,e){return s*s*e}function ta(s,e,t,r){return By(s,e)+zy(s,t)+Vy(s,r)}function Hy(s,e){const t=1-s;return t*t*t*e}function Gy(s,e){const t=1-s;return 3*t*t*s*e}function Wy(s,e){return 3*(1-s)*s*s*e}function Xy(s,e){return s*s*s*e}function na(s,e,t,r,o){return Hy(s,e)+Gy(s,t)+Wy(s,r)+Xy(s,o)}class F0 extends Ii{constructor(e=new Ge,t=new Ge,r=new Ge,o=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ge){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(na(e,o.x,l.x,u.x,f.x),na(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jy extends Ii{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(na(e,o.x,l.x,u.x,f.x),na(e,o.y,l.y,u.y,f.y),na(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class O0 extends Ii{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yy extends Ii{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class k0 extends Ii{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ta(e,o.x,l.x,u.x),ta(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qy extends Ii{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ta(e,o.x,l.x,u.x),ta(e,o.y,l.y,u.y),ta(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class B0 extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,p=o[u===0?u:u-1],h=o[u],v=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(cg(f,p.x,h.x,v.x,_.x),cg(f,p.y,h.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ge().fromArray(o))}return this}}var Ud=Object.freeze({__proto__:null,ArcCurve:Oy,CatmullRomCurve3:ky,CubicBezierCurve:F0,CubicBezierCurve3:jy,EllipseCurve:nh,LineCurve:O0,LineCurve3:Yy,QuadraticBezierCurve:k0,QuadraticBezierCurve3:qy,SplineCurve:B0});class $y extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ud[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,f=this.curves[l],p=f.getLength(),h=p===0?0:1-u/p;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(f);for(let h=0;h<p.length;h++){const v=p[h];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Ud[o.type]().fromJSON(o))}return this}}class Fd extends $y{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new O0(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new k0(this.currentPoint.clone(),new Ge(e,t),new Ge(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const f=new F0(this.currentPoint.clone(),new Ge(e,t),new Ge(r,o),new Ge(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new B0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+f,t+p,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,f,p){const h=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+h,t+v,r,o,l,u,f,p),this}absellipse(e,t,r,o,l,u,f,p){const h=new nh(e,t,r,o,l,u,f,p);if(this.curves.length>0){const _=h.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(h);const v=h.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class oc extends Fd{constructor(e){super(e),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Fd().fromJSON(o))}return this}}function Zy(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=z0(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,p,h;if(r&&(l=tS(s,e,l,t)),s.length>80*t){f=s[0],p=s[1];let v=f,_=p;for(let g=t;g<o;g+=t){const S=s[g],M=s[g+1];S<f&&(f=S),M<p&&(p=M),S>v&&(v=S),M>_&&(_=M)}h=Math.max(v-f,_-p),h=h!==0?32767/h:0}return aa(l,u,t,f,p,h,0),u}function z0(s,e,t,r,o){let l;if(o===dS(s,e,t,r)>0)for(let u=e;u<t;u+=r)l=ug(u/r|0,s[u],s[u+1],l);else for(let u=t-r;u>=e;u-=r)l=ug(u/r|0,s[u],s[u+1],l);return l&&io(l,l.next)&&(ca(l),l=l.next),l}function ls(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(io(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ca(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function aa(s,e,t,r,o,l,u){if(!s)return;!u&&l&&oS(s,r,o,l);let f=s;for(;s.prev!==s.next;){const p=s.prev,h=s.next;if(l?Jy(s,r,o,l):Ky(s)){e.push(p.i,s.i,h.i),ca(s),s=h.next,f=h.next;continue}if(s=h,s===f){u?u===1?(s=Qy(ls(s),e),aa(s,e,t,r,o,l,2)):u===2&&eS(s,e,t,r,o,l):aa(ls(s),e,t,r,o,l,1);break}}}function Ky(s){const e=s.prev,t=s,r=s.next;if(Wt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,f=e.y,p=t.y,h=r.y,v=Math.min(o,l,u),_=Math.min(f,p,h),g=Math.max(o,l,u),S=Math.max(f,p,h);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=_&&M.y<=S&&Ko(o,f,l,p,u,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Jy(s,e,t,r){const o=s.prev,l=s,u=s.next;if(Wt(o,l,u)>=0)return!1;const f=o.x,p=l.x,h=u.x,v=o.y,_=l.y,g=u.y,S=Math.min(f,p,h),M=Math.min(v,_,g),A=Math.max(f,p,h),y=Math.max(v,_,g),x=Od(S,M,e,t,r),C=Od(A,y,e,t,r);let P=s.prevZ,R=s.nextZ;for(;P&&P.z>=x&&R&&R.z<=C;){if(P.x>=S&&P.x<=A&&P.y>=M&&P.y<=y&&P!==o&&P!==u&&Ko(f,v,p,_,h,g,P.x,P.y)&&Wt(P.prev,P,P.next)>=0||(P=P.prevZ,R.x>=S&&R.x<=A&&R.y>=M&&R.y<=y&&R!==o&&R!==u&&Ko(f,v,p,_,h,g,R.x,R.y)&&Wt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;P&&P.z>=x;){if(P.x>=S&&P.x<=A&&P.y>=M&&P.y<=y&&P!==o&&P!==u&&Ko(f,v,p,_,h,g,P.x,P.y)&&Wt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;R&&R.z<=C;){if(R.x>=S&&R.x<=A&&R.y>=M&&R.y<=y&&R!==o&&R!==u&&Ko(f,v,p,_,h,g,R.x,R.y)&&Wt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function Qy(s,e){let t=s;do{const r=t.prev,o=t.next.next;!io(r,o)&&H0(r,t,t.next,o)&&la(r,o)&&la(o,r)&&(e.push(r.i,t.i,o.i),ca(t),ca(t.next),t=s=o),t=t.next}while(t!==s);return ls(t)}function eS(s,e,t,r,o,l){let u=s;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&cS(u,f)){let p=G0(u,f);u=ls(u,u.next),p=ls(p,p.next),aa(u,e,t,r,o,l,0),aa(p,e,t,r,o,l,0);return}f=f.next}u=u.next}while(u!==s)}function tS(s,e,t,r){const o=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*r,p=l<u-1?e[l+1]*r:s.length,h=z0(s,f,p,r,!1);h===h.next&&(h.steiner=!0),o.push(lS(h))}o.sort(nS);for(let l=0;l<o.length;l++)t=iS(o[l],t);return t}function nS(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function iS(s,e){const t=rS(s,e);if(!t)return e;const r=G0(t,s);return ls(r,r.next),ls(t,t.next)}function rS(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,u;if(io(s,t))return t;do{if(io(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const _=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=r&&_>l&&(l=_,u=t.x<t.next.x?t:t.next,_===r))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,p=u.x,h=u.y;let v=1/0;t=u;do{if(r>=t.x&&t.x>=p&&r!==t.x&&V0(o<h?r:l,o,p,h,o<h?l:r,o,t.x,t.y)){const _=Math.abs(o-t.y)/(r-t.x);la(t,s)&&(_<v||_===v&&(t.x>u.x||t.x===u.x&&sS(u,t)))&&(u=t,v=_)}t=t.next}while(t!==f);return u}function sS(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function oS(s,e,t,r){let o=s;do o.z===0&&(o.z=Od(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,aS(o)}function aS(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let u=r,f=0;for(let h=0;h<t&&(f++,u=u.nextZ,!!u);h++);let p=t;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,f--):(o=u,u=u.nextZ,p--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=u}l.nextZ=null,t*=2}while(e>1);return s}function Od(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function V0(s,e,t,r,o,l,u,f){return(o-u)*(e-f)>=(s-u)*(l-f)&&(s-u)*(r-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(o-u)*(r-f)}function Ko(s,e,t,r,o,l,u,f){return!(s===u&&e===f)&&V0(s,e,t,r,o,l,u,f)}function cS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!uS(s,e)&&(la(s,e)&&la(e,s)&&fS(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||io(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function io(s,e){return s.x===e.x&&s.y===e.y}function H0(s,e,t,r){const o=$l(Wt(s,e,t)),l=$l(Wt(s,e,r)),u=$l(Wt(t,r,s)),f=$l(Wt(t,r,e));return!!(o!==l&&u!==f||o===0&&ql(s,t,e)||l===0&&ql(s,r,e)||u===0&&ql(t,s,r)||f===0&&ql(t,e,r))}function ql(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $l(s){return s>0?1:s<0?-1:0}function uS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&H0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function la(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function fS(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function G0(s,e){const t=kd(s.i,s.x,s.y),r=kd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function ug(s,e,t,r){const o=kd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ca(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function kd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dS(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class hS{static triangulate(e,t,r=2){return Zy(e,t,r)}}class os{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return os.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];fg(e),dg(r,e);let u=e.length;t.forEach(fg);for(let p=0;p<t.length;p++)o.push(u),u+=t[p].length,dg(r,t[p]);const f=hS.triangulate(r,o);for(let p=0;p<f.length;p+=3)l.push(f.slice(p,p+3));return l}}function fg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function dg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class rh extends Xn{constructor(e=new oc([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,p=e.length;f<p;f++){const h=e[f];u(h)}this.setAttribute("position",new ln(o,3)),this.setAttribute("uv",new ln(l,2)),this.computeVertexNormals();function u(f){const p=[],h=t.curveSegments!==void 0?t.curveSegments:12,v=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:pS;let P,R=!1,k,I,O,T;if(x){P=x.getSpacedPoints(v),R=!0,g=!1;const ve=x.isCatmullRomCurve3?x.closed:!1;k=x.computeFrenetFrames(v,ve),I=new X,O=new X,T=new X}g||(y=0,S=0,M=0,A=0);const L=f.extractPoints(h);let se=L.shape;const B=L.holes;if(!os.isClockWise(se)){se=se.reverse();for(let ve=0,Me=B.length;ve<Me;ve++){const _e=B[ve];os.isClockWise(_e)&&(B[ve]=_e.reverse())}}function K(ve){const _e=10000000000000001e-36;let Ne=ve[0];for(let D=1;D<=ve.length;D++){const ot=D%ve.length,Ue=ve[ot],rt=Ue.x-Ne.x,Pe=Ue.y-Ne.y,N=rt*rt+Pe*Pe,E=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ne.x),Math.abs(Ne.y)),G=_e*E*E;if(N<=G){ve.splice(ot,1),D--;continue}Ne=Ue}}K(se),B.forEach(K);const ae=B.length,q=se;for(let ve=0;ve<ae;ve++){const Me=B[ve];se=se.concat(Me)}function $(ve,Me,_e){return Me||Ct("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Me,_e)}const V=se.length;function Z(ve,Me,_e){let Ne,D,ot;const Ue=ve.x-Me.x,rt=ve.y-Me.y,Pe=_e.x-ve.x,N=_e.y-ve.y,E=Ue*Ue+rt*rt,G=Ue*N-rt*Pe;if(Math.abs(G)>Number.EPSILON){const ue=Math.sqrt(E),me=Math.sqrt(Pe*Pe+N*N),fe=Me.x-rt/ue,je=Me.y+Ue/ue,Ae=_e.x-N/me,Je=_e.y+Pe/me,lt=((Ae-fe)*N-(Je-je)*Pe)/(Ue*N-rt*Pe);Ne=fe+Ue*lt-ve.x,D=je+rt*lt-ve.y;const Se=Ne*Ne+D*D;if(Se<=2)return new Ge(Ne,D);ot=Math.sqrt(Se/2)}else{let ue=!1;Ue>Number.EPSILON?Pe>Number.EPSILON&&(ue=!0):Ue<-Number.EPSILON?Pe<-Number.EPSILON&&(ue=!0):Math.sign(rt)===Math.sign(N)&&(ue=!0),ue?(Ne=-rt,D=Ue,ot=Math.sqrt(E)):(Ne=Ue,D=rt,ot=Math.sqrt(E/2))}return new Ge(Ne/ot,D/ot)}const Q=[];for(let ve=0,Me=q.length,_e=Me-1,Ne=ve+1;ve<Me;ve++,_e++,Ne++)_e===Me&&(_e=0),Ne===Me&&(Ne=0),Q[ve]=Z(q[ve],q[_e],q[Ne]);const ce=[];let F,Y=Q.concat();for(let ve=0,Me=ae;ve<Me;ve++){const _e=B[ve];F=[];for(let Ne=0,D=_e.length,ot=D-1,Ue=Ne+1;Ne<D;Ne++,ot++,Ue++)ot===D&&(ot=0),Ue===D&&(Ue=0),F[Ne]=Z(_e[Ne],_e[ot],_e[Ue]);ce.push(F),Y=Y.concat(F)}let Ce;if(y===0)Ce=os.triangulateShape(q,B);else{const ve=[],Me=[];for(let _e=0;_e<y;_e++){const Ne=_e/y,D=S*Math.cos(Ne*Math.PI/2),ot=M*Math.sin(Ne*Math.PI/2)+A;for(let Ue=0,rt=q.length;Ue<rt;Ue++){const Pe=$(q[Ue],Q[Ue],ot);Ie(Pe.x,Pe.y,-D),Ne===0&&ve.push(Pe)}for(let Ue=0,rt=ae;Ue<rt;Ue++){const Pe=B[Ue];F=ce[Ue];const N=[];for(let E=0,G=Pe.length;E<G;E++){const ue=$(Pe[E],F[E],ot);Ie(ue.x,ue.y,-D),Ne===0&&N.push(ue)}Ne===0&&Me.push(N)}}Ce=os.triangulateShape(ve,Me)}const Xe=Ce.length,et=M+A;for(let ve=0;ve<V;ve++){const Me=g?$(se[ve],Y[ve],et):se[ve];R?(O.copy(k.normals[0]).multiplyScalar(Me.x),I.copy(k.binormals[0]).multiplyScalar(Me.y),T.copy(P[0]).add(O).add(I),Ie(T.x,T.y,T.z)):Ie(Me.x,Me.y,0)}for(let ve=1;ve<=v;ve++)for(let Me=0;Me<V;Me++){const _e=g?$(se[Me],Y[Me],et):se[Me];R?(O.copy(k.normals[ve]).multiplyScalar(_e.x),I.copy(k.binormals[ve]).multiplyScalar(_e.y),T.copy(P[ve]).add(O).add(I),Ie(T.x,T.y,T.z)):Ie(_e.x,_e.y,_/v*ve)}for(let ve=y-1;ve>=0;ve--){const Me=ve/y,_e=S*Math.cos(Me*Math.PI/2),Ne=M*Math.sin(Me*Math.PI/2)+A;for(let D=0,ot=q.length;D<ot;D++){const Ue=$(q[D],Q[D],Ne);Ie(Ue.x,Ue.y,_+_e)}for(let D=0,ot=B.length;D<ot;D++){const Ue=B[D];F=ce[D];for(let rt=0,Pe=Ue.length;rt<Pe;rt++){const N=$(Ue[rt],F[rt],Ne);R?Ie(N.x,N.y+P[v-1].y,P[v-1].x+_e):Ie(N.x,N.y,_+_e)}}}re(),ge();function re(){const ve=o.length/3;if(g){let Me=0,_e=V*Me;for(let Ne=0;Ne<Xe;Ne++){const D=Ce[Ne];We(D[2]+_e,D[1]+_e,D[0]+_e)}Me=v+y*2,_e=V*Me;for(let Ne=0;Ne<Xe;Ne++){const D=Ce[Ne];We(D[0]+_e,D[1]+_e,D[2]+_e)}}else{for(let Me=0;Me<Xe;Me++){const _e=Ce[Me];We(_e[2],_e[1],_e[0])}for(let Me=0;Me<Xe;Me++){const _e=Ce[Me];We(_e[0]+V*v,_e[1]+V*v,_e[2]+V*v)}}r.addGroup(ve,o.length/3-ve,0)}function ge(){const ve=o.length/3;let Me=0;pe(q,Me),Me+=q.length;for(let _e=0,Ne=B.length;_e<Ne;_e++){const D=B[_e];pe(D,Me),Me+=D.length}r.addGroup(ve,o.length/3-ve,1)}function pe(ve,Me){let _e=ve.length;for(;--_e>=0;){const Ne=_e;let D=_e-1;D<0&&(D=ve.length-1);for(let ot=0,Ue=v+y*2;ot<Ue;ot++){const rt=V*ot,Pe=V*(ot+1),N=Me+Ne+rt,E=Me+D+rt,G=Me+D+Pe,ue=Me+Ne+Pe;ct(N,E,G,ue)}}}function Ie(ve,Me,_e){p.push(ve),p.push(Me),p.push(_e)}function We(ve,Me,_e){Lt(ve),Lt(Me),Lt(_e);const Ne=o.length/3,D=C.generateTopUV(r,o,Ne-3,Ne-2,Ne-1);ht(D[0]),ht(D[1]),ht(D[2])}function ct(ve,Me,_e,Ne){Lt(ve),Lt(Me),Lt(Ne),Lt(Me),Lt(_e),Lt(Ne);const D=o.length/3,ot=C.generateSideWallUV(r,o,D-6,D-3,D-2,D-1);ht(ot[0]),ht(ot[1]),ht(ot[3]),ht(ot[1]),ht(ot[2]),ht(ot[3])}function Lt(ve){o.push(p[ve*3+0]),o.push(p[ve*3+1]),o.push(p[ve*3+2])}function ht(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return mS(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,u=e.shapes.length;l<u;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Ud[o.type]().fromJSON(o)),new rh(r,e.options)}}const pS={generateTopUV:function(s,e,t,r,o){const l=e[t*3],u=e[t*3+1],f=e[r*3],p=e[r*3+1],h=e[o*3],v=e[o*3+1];return[new Ge(l,u),new Ge(f,p),new Ge(h,v)]},generateSideWallUV:function(s,e,t,r,o,l){const u=e[t*3],f=e[t*3+1],p=e[t*3+2],h=e[r*3],v=e[r*3+1],_=e[r*3+2],g=e[o*3],S=e[o*3+1],M=e[o*3+2],A=e[l*3],y=e[l*3+1],x=e[l*3+2];return Math.abs(f-v)<Math.abs(u-h)?[new Ge(u,1-p),new Ge(h,1-_),new Ge(g,1-M),new Ge(A,1-x)]:[new Ge(f,1-p),new Ge(v,1-_),new Ge(S,1-M),new Ge(y,1-x)]}};function mS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pa extends Xn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),p=Math.floor(o),h=f+1,v=p+1,_=e/f,g=t/p,S=[],M=[],A=[],y=[];for(let x=0;x<v;x++){const C=x*g-u;for(let P=0;P<h;P++){const R=P*_-l;M.push(R,-C,0),A.push(0,0,1),y.push(P/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<f;C++){const P=C+h*x,R=C+h*(x+1),k=C+1+h*(x+1),I=C+1+h*x;S.push(P,R,I),S.push(R,k,I)}this.setIndex(S),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class pc extends Xn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let h=0;const v=[],_=new X,g=new X,S=[],M=[],A=[],y=[];for(let x=0;x<=r;x++){const C=[],P=x/r;let R=0;x===0&&u===0?R=.5/t:x===r&&p===Math.PI&&(R=-.5/t);for(let k=0;k<=t;k++){const I=k/t;_.x=-e*Math.cos(o+I*l)*Math.sin(u+P*f),_.y=e*Math.cos(u+P*f),_.z=e*Math.sin(o+I*l)*Math.sin(u+P*f),M.push(_.x,_.y,_.z),g.copy(_).normalize(),A.push(g.x,g.y,g.z),y.push(I+R,1-P),C.push(h++)}v.push(C)}for(let x=0;x<r;x++)for(let C=0;C<t;C++){const P=v[x][C+1],R=v[x][C],k=v[x+1][C],I=v[x+1][C+1];(x!==0||u>0)&&S.push(P,R,I),(x!==r-1||p<Math.PI)&&S.push(R,k,I)}this.setIndex(S),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(A,3)),this.setAttribute("uv",new ln(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const r=ro(s[t]);for(const o in r)e[o]=r[o]}return e}function gS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function W0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const vS={clone:ro,merge:wn};var _S=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_S,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=gS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class yS extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class SS extends da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MS extends da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hg={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(pg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!pg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function pg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ES{constructor(e,t,r){const o=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return h.push(v,_),this},this.removeHandler=function(v){const _=h.indexOf(v);return _!==-1&&h.splice(_,2),this},this.getHandler=function(v){for(let _=0,g=h.length;_<g;_+=2){const S=h[_],M=h[_+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const TS=new ES;class sh{constructor(e){this.manager=e!==void 0?e:TS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class wS extends Error{constructor(e,t){super(e),this.response=t}}class AS extends sh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=hg.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Zi[e]!==void 0){Zi[e].push({onLoad:t,onProgress:r,onError:o});return}Zi[e]=[],Zi[e].push({onLoad:t,onProgress:r,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const v=Zi[e],_=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=g?parseInt(g):0,M=S!==0;let A=0;const y=new ReadableStream({start(x){C();function C(){_.read().then(({done:P,value:R})=>{if(P)x.close();else{A+=R.byteLength;const k=new ProgressEvent("progress",{lengthComputable:M,loaded:A,total:S});for(let I=0,O=v.length;I<O;I++){const T=v[I];T.onProgress&&T.onProgress(k)}x.enqueue(R),C()}},P=>{x.error(P)})}}});return new Response(y)}else throw new wS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(v=>new DOMParser().parseFromString(v,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),g=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(g);return h.arrayBuffer().then(M=>S.decode(M))}}}).then(h=>{hg.add(`file:${e}`,h);const v=Zi[e];delete Zi[e];for(let _=0,g=v.length;_<g;_++){const S=v[_];S.onLoad&&S.onLoad(h)}}).catch(h=>{const v=Zi[e];if(v===void 0)throw this.manager.itemError(e),h;delete Zi[e];for(let _=0,g=v.length;_<g;_++){const S=v[_];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zl=new X,Kl=new oo,Ei=new X;class X0 extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zl,Kl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Kl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Zl,Kl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zl,Kl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new X,mg=new Ge,gg=new Ge;class ii extends X0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,mg,gg),t.subVectors(gg,mg)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class j0 extends X0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=-90,js=1;class bS extends Fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Xs,js,e,t);o.layers=this.layers,this.add(o);const l=new ii(Xs,js,e,t);l.layers=this.layers,this.add(l);const u=new ii(Xs,js,e,t);u.layers=this.layers,this.add(u);const f=new ii(Xs,js,e,t);f.layers=this.layers,this.add(f);const p=new ii(Xs,js,e,t);p.layers=this.layers,this.add(p);const h=new ii(Xs,js,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===cc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class CS extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class RS{constructor(){this.type="ShapePath",this.color=new wt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Fd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,l,u){return this.currentPath.bezierCurveTo(e,t,r,o,l,u),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const C=[];for(let P=0,R=x.length;P<R;P++){const k=x[P],I=new oc;I.curves=k.curves,C.push(I)}return C}function r(x,C){const P=C.length;let R=!1;for(let k=P-1,I=0;I<P;k=I++){let O=C[k],T=C[I],L=T.x-O.x,se=T.y-O.y;if(Math.abs(se)>Number.EPSILON){if(se<0&&(O=C[I],L=-L,T=C[k],se=-se),x.y<O.y||x.y>T.y)continue;if(x.y===O.y){if(x.x===O.x)return!0}else{const B=se*(x.x-O.x)-L*(x.y-O.y);if(B===0)return!0;if(B<0)continue;R=!R}}else{if(x.y!==O.y)continue;if(T.x<=x.x&&x.x<=O.x||O.x<=x.x&&x.x<=T.x)return!0}}return R}const o=os.isClockWise,l=this.subPaths;if(l.length===0)return[];let u,f,p;const h=[];if(l.length===1)return f=l[0],p=new oc,p.curves=f.curves,h.push(p),h;let v=!o(l[0].getPoints());v=e?!v:v;const _=[],g=[];let S=[],M=0,A;g[M]=void 0,S[M]=[];for(let x=0,C=l.length;x<C;x++)f=l[x],A=f.getPoints(),u=o(A),u=e?!u:u,u?(!v&&g[M]&&M++,g[M]={s:new oc,p:A},g[M].s.curves=f.curves,v&&M++,S[M]=[]):S[M].push({h:f,p:A[0]});if(!g[0])return t(l);if(g.length>1){let x=!1,C=0;for(let P=0,R=g.length;P<R;P++)_[P]=[];for(let P=0,R=g.length;P<R;P++){const k=S[P];for(let I=0;I<k.length;I++){const O=k[I];let T=!0;for(let L=0;L<g.length;L++)r(O.p,g[L].p)&&(P!==L&&C++,T?(T=!1,_[L].push(O)):x=!0);T&&_[P].push(O)}}C>0&&x===!1&&(S=_)}let y;for(let x=0,C=g.length;x<C;x++){p=g[x].s,h.push(p),y=S[x];for(let P=0,R=y.length;P<R;P++)p.holes.push(y[P].h)}return h}}function vg(s,e,t,r){const o=PS(r);switch(t){case M0:return s*e;case T0:return s*e/o.components*o.byteLength;case $d:return s*e/o.components*o.byteLength;case to:return s*e*2/o.components*o.byteLength;case Zd:return s*e*2/o.components*o.byteLength;case E0:return s*e*3/o.components*o.byteLength;case vi:return s*e*4/o.components*o.byteLength;case Kd:return s*e*4/o.components*o.byteLength;case nc:case ic:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rc:case sc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:case od:return Math.max(s,16)*Math.max(e,8)/4;case id:case sd:return Math.max(s,8)*Math.max(e,8)/2;case ad:case ld:case ud:case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cd:case dd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case _d:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cd:case Rd:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Dd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function PS(s){switch(s){case ri:case _0:return{byteLength:1,components:1};case ia:case x0:case er:return{byteLength:2,components:1};case Yd:case qd:return{byteLength:2,components:4};case Ni:case jd:case bi:return{byteLength:4,components:1};case y0:case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);function Y0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function LS(s){const e=new WeakMap;function t(f,p){const h=f.array,v=f.usage,_=h.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,h,v),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,h){const v=p.array,_=p.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,v);else{_.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<_.length;S++){const M=_[g],A=_[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,_[g]=A)}_.length=g+1;for(let S=0,M=_.length;S<M;S++){const A=_[S];s.bufferSubData(h,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:u}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,IS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,US=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,LM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ZM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,tE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,PE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,n1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,a1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:NS,alphahash_pars_fragment:DS,alphamap_fragment:IS,alphamap_pars_fragment:US,alphatest_fragment:FS,alphatest_pars_fragment:OS,aomap_fragment:kS,aomap_pars_fragment:BS,batching_pars_vertex:zS,batching_vertex:VS,begin_vertex:HS,beginnormal_vertex:GS,bsdfs:WS,iridescence_fragment:XS,bumpmap_pars_fragment:jS,clipping_planes_fragment:YS,clipping_planes_pars_fragment:qS,clipping_planes_pars_vertex:$S,clipping_planes_vertex:ZS,color_fragment:KS,color_pars_fragment:JS,color_pars_vertex:QS,color_vertex:eM,common:tM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:rM,displacementmap_vertex:sM,emissivemap_fragment:oM,emissivemap_pars_fragment:aM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:fM,envmap_pars_fragment:dM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:vM,fog_pars_fragment:_M,gradientmap_pars_fragment:xM,lightmap_pars_fragment:yM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:MM,lights_pars_begin:EM,lights_toon_fragment:wM,lights_toon_pars_fragment:AM,lights_phong_fragment:bM,lights_phong_pars_fragment:CM,lights_physical_fragment:RM,lights_physical_pars_fragment:PM,lights_fragment_begin:LM,lights_fragment_maps:NM,lights_fragment_end:DM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:FM,logdepthbuf_vertex:OM,map_fragment:kM,map_pars_fragment:BM,map_particle_fragment:zM,map_particle_pars_fragment:VM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:GM,morphinstance_vertex:WM,morphcolor_vertex:XM,morphnormal_vertex:jM,morphtarget_pars_vertex:YM,morphtarget_vertex:qM,normal_fragment_begin:$M,normal_fragment_maps:ZM,normal_pars_fragment:KM,normal_pars_vertex:JM,normal_vertex:QM,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:tE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:aE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:vE,skinning_pars_vertex:_E,skinning_vertex:xE,skinnormal_vertex:yE,specularmap_fragment:SE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:wE,transmission_pars_fragment:AE,uv_pars_fragment:bE,uv_pars_vertex:CE,uv_vertex:RE,worldpos_vertex:PE,background_vert:LE,background_frag:NE,backgroundCube_vert:DE,backgroundCube_frag:IE,cube_vert:UE,cube_frag:FE,depth_vert:OE,depth_frag:kE,distance_vert:BE,distance_frag:zE,equirect_vert:VE,equirect_frag:HE,linedashed_vert:GE,linedashed_frag:WE,meshbasic_vert:XE,meshbasic_frag:jE,meshlambert_vert:YE,meshlambert_frag:qE,meshmatcap_vert:$E,meshmatcap_frag:ZE,meshnormal_vert:KE,meshnormal_frag:JE,meshphong_vert:QE,meshphong_frag:e1,meshphysical_vert:t1,meshphysical_frag:n1,meshtoon_vert:i1,meshtoon_frag:r1,points_vert:s1,points_frag:o1,shadow_vert:a1,shadow_frag:l1,sprite_vert:c1,sprite_frag:u1},Oe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},wi={basic:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:wn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:wn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:wn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:wn([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:wn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:wn([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:wn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:wn([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:wn([Oe.common,Oe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:wn([Oe.lights,Oe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};wi.physical={uniforms:wn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Jl={r:0,b:0,g:0},Qr=new nr,f1=new jt;function d1(s,e,t,r,o,l){const u=new wt(0);let f=o===!0?0:1,p,h,v=null,_=0,g=null;function S(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const R=C.backgroundBlurriness>0;P=e.get(P,R)}return P}function M(C){let P=!1;const R=S(C);R===null?y(u,f):R&&R.isColor&&(y(R,1),P=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(C,P){const R=S(P);R&&(R.isCubeTexture||R.mapping===mc)?(h===void 0&&(h=new Wn(new ha(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ro(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qr.copy(P.backgroundRotation),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f1.makeRotationFromEuler(Qr)),h.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ut,(v!==R||_!==R.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=R,_=R.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Wn(new pa(2,2),new Di({name:"BackgroundMaterial",uniforms:ro(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||_!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,_=R.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function y(C,P){C.getRGB(Jl,W0(s)),t.buffers.color.setClear(Jl.r,Jl.g,Jl.b,P,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,P=1){u.set(C),f=P,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,y(u,f)},render:M,addToRenderList:A,dispose:x}}function h1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(B,ne,K,ae,q){let $=!1;const V=_(B,ae,K,ne);l!==V&&(l=V,h(l.object)),$=S(B,ae,K,q),$&&M(B,ae,K,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,R(B,ne,K,ae),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function p(){return s.createVertexArray()}function h(B){return s.bindVertexArray(B)}function v(B){return s.deleteVertexArray(B)}function _(B,ne,K,ae){const q=ae.wireframe===!0;let $=r[ne.id];$===void 0&&($={},r[ne.id]=$);const V=B.isInstancedMesh===!0?B.id:0;let Z=$[V];Z===void 0&&(Z={},$[V]=Z);let Q=Z[K.id];Q===void 0&&(Q={},Z[K.id]=Q);let ce=Q[q];return ce===void 0&&(ce=g(p()),Q[q]=ce),ce}function g(B){const ne=[],K=[],ae=[];for(let q=0;q<t;q++)ne[q]=0,K[q]=0,ae[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:K,attributeDivisors:ae,object:B,attributes:{},index:null}}function S(B,ne,K,ae){const q=l.attributes,$=ne.attributes;let V=0;const Z=K.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const F=q[Q];let Y=$[Q];if(Y===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(Y=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(Y=B.instanceColor)),F===void 0||F.attribute!==Y||Y&&F.data!==Y.data)return!0;V++}return l.attributesNum!==V||l.index!==ae}function M(B,ne,K,ae){const q={},$=ne.attributes;let V=0;const Z=K.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let F=$[Q];F===void 0&&(Q==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),Q==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const Y={};Y.attribute=F,F&&F.data&&(Y.data=F.data),q[Q]=Y,V++}l.attributes=q,l.attributesNum=V,l.index=ae}function A(){const B=l.newAttributes;for(let ne=0,K=B.length;ne<K;ne++)B[ne]=0}function y(B){x(B,0)}function x(B,ne){const K=l.newAttributes,ae=l.enabledAttributes,q=l.attributeDivisors;K[B]=1,ae[B]===0&&(s.enableVertexAttribArray(B),ae[B]=1),q[B]!==ne&&(s.vertexAttribDivisor(B,ne),q[B]=ne)}function C(){const B=l.newAttributes,ne=l.enabledAttributes;for(let K=0,ae=ne.length;K<ae;K++)ne[K]!==B[K]&&(s.disableVertexAttribArray(K),ne[K]=0)}function P(B,ne,K,ae,q,$,V){V===!0?s.vertexAttribIPointer(B,ne,K,q,$):s.vertexAttribPointer(B,ne,K,ae,q,$)}function R(B,ne,K,ae){A();const q=ae.attributes,$=K.getAttributes(),V=ne.defaultAttributeValues;for(const Z in $){const Q=$[Z];if(Q.location>=0){let ce=q[Z];if(ce===void 0&&(Z==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),Z==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor)),ce!==void 0){const F=ce.normalized,Y=ce.itemSize,Ce=e.get(ce);if(Ce===void 0)continue;const Xe=Ce.buffer,et=Ce.type,re=Ce.bytesPerElement,ge=et===s.INT||et===s.UNSIGNED_INT||ce.gpuType===jd;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Ie=pe.stride,We=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let ct=0;ct<Q.locationSize;ct++)x(Q.location+ct,pe.meshPerAttribute);B.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ct=0;ct<Q.locationSize;ct++)y(Q.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ct=0;ct<Q.locationSize;ct++)P(Q.location+ct,Y/Q.locationSize,et,F,Ie*re,(We+Y/Q.locationSize*ct)*re,ge)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<Q.locationSize;pe++)x(Q.location+pe,ce.meshPerAttribute);B.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<Q.locationSize;pe++)y(Q.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let pe=0;pe<Q.locationSize;pe++)P(Q.location+pe,Y/Q.locationSize,et,F,Y*re,Y/Q.locationSize*pe*re,ge)}}else if(V!==void 0){const F=V[Z];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(Q.location,F);break;case 3:s.vertexAttrib3fv(Q.location,F);break;case 4:s.vertexAttrib4fv(Q.location,F);break;default:s.vertexAttrib1fv(Q.location,F)}}}}C()}function k(){L();for(const B in r){const ne=r[B];for(const K in ne){const ae=ne[K];for(const q in ae){const $=ae[q];for(const V in $)v($[V].object),delete $[V];delete ae[q]}}delete r[B]}}function I(B){if(r[B.id]===void 0)return;const ne=r[B.id];for(const K in ne){const ae=ne[K];for(const q in ae){const $=ae[q];for(const V in $)v($[V].object),delete $[V];delete ae[q]}}delete r[B.id]}function O(B){for(const ne in r){const K=r[ne];for(const ae in K){const q=K[ae];if(q[B.id]===void 0)continue;const $=q[B.id];for(const V in $)v($[V].object),delete $[V];delete q[B.id]}}}function T(B){for(const ne in r){const K=r[ne],ae=B.isInstancedMesh===!0?B.id:0,q=K[ae];if(q!==void 0){for(const $ in q){const V=q[$];for(const Z in V)v(V[Z].object),delete V[Z];delete q[$]}delete K[ae],Object.keys(K).length===0&&delete r[ne]}}}function L(){se(),u=!0,l!==o&&(l=o,h(l.object))}function se(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:se,dispose:k,releaseStatesOfGeometry:I,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function p1(s,e,t){let r;function o(h){r=h}function l(h,v){s.drawArrays(r,h,v),t.update(v,r,1)}function u(h,v,_){_!==0&&(s.drawArraysInstanced(r,h,v,_),t.update(v,r,_))}function f(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,_);let S=0;for(let M=0;M<_;M++)S+=v[M];t.update(S,r,1)}function p(h,v,_,g){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],v[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,v,0,g,0,_);let M=0;for(let A=0;A<_;A++)M+=v[A]*g[A];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function m1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==vi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ri&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!T)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=p(h);v!==h&&(dt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:R,maxSamples:k,samples:I}}function g1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ts,f=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const S=_.length!==0||g||r!==0||o;return o=g,r=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,S){const M=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||M===null||M.length===0||l&&!y)l?v(null):h();else{const C=l?0:r,P=C*4;let R=x.clippingState||null;p.value=R,R=v(M,g,P,S);for(let k=0;k!==P;++k)R[k]=t[k];x.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,S,M){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=p.value,M!==!0||y===null){const x=S+A*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,R=S;P!==A;++P,R+=4)u.copy(_[P]).applyMatrix4(C,f),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Nr=4,_g=[.125,.215,.35,.446,.526,.582],is=20,v1=256,qo=new j0,xg=new wt;let kf=null,Bf=0,zf=0,Vf=!1;const _1=new X;class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=_1}=l;kf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kf,Bf,zf),this._renderer.xr.enabled=Vf,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kf=this._renderer.getRenderTarget(),Bf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Vf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:er,format:vi,colorSpace:no,depthBuffer:!1},o=Sg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x1(l)),this._blurMaterial=S1(l,e,t),this._ggxMaterial=y1(l,e,t)}return o}_compileMaterial(e){const t=new Wn(new Xn,e);this._renderer.compile(t,qo)}_sceneToCubeUV(e,t,r,o,l){const p=new ii(90,1,t,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,S=_.toneMapping;_.getClearColor(xg),_.toneMapping=Ri,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wn(new ha,new ea({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,x=!0):(y.color.copy(xg),x=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[P],l.y,l.z)):R===1?(p.up.set(0,0,h[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[P],l.z)):(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[P]));const k=this._cubeSize;Ys(o,R*k,P>2?k:0,k,k),_.setRenderTarget(o),x&&_.render(A,p),_.render(e,p)}_.toneMapping=S,_.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===as||e.mapping===eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Ys(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,qo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,h=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),g=0+h*1.25,S=_*g,{_lodMax:M}=this,A=this._sizeLods[r],y=3*A*(r>M-Nr?r-M+Nr:0),x=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-t,Ys(l,y,x,3*A,2*A),o.setRenderTarget(l),o.render(f,qo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-r,Ys(e,y,x,3*A,2*A),o.setRenderTarget(e),o.render(f,qo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=h;const g=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*is-1),A=l/M,y=isFinite(l)?1+Math.floor(v*A):is;y>is&&dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${is}`);const x=[];let C=0;for(let O=0;O<is;++O){const T=O/A,L=Math.exp(-T*T/2);x.push(L),O===0?C+=L:O<y&&(C+=2*L)}for(let O=0;O<x.length;O++)x[O]=x[O]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-r;const R=this._sizeLods[o],k=3*R*(o>P-Nr?o-P+Nr:0),I=4*(this._cubeSize-R);Ys(t,k,I,3*R,2*R),p.setRenderTarget(t),p.render(_,qo)}}function x1(s){const e=[],t=[],r=[];let o=s;const l=s-Nr+1+_g.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let p=1/f;u>s-Nr?p=_g[u-s+Nr-1]:u===0&&(p=0),t.push(p);const h=1/(f-2),v=-h,_=1+h,g=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,M=6,A=3,y=2,x=1,C=new Float32Array(A*M*S),P=new Float32Array(y*M*S),R=new Float32Array(x*M*S);for(let I=0;I<S;I++){const O=I%3*2/3-1,T=I>2?0:-1,L=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];C.set(L,A*M*I),P.set(g,y*M*I);const se=[I,I,I,I,I,I];R.set(se,x*M*I)}const k=new Xn;k.setAttribute("position",new Li(C,A)),k.setAttribute("uv",new Li(P,y)),k.setAttribute("faceIndex",new Li(R,x)),r.push(new Wn(k,null)),o>Nr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Sg(s,e,t){const r=new Pi(s,e,t);return r.texture.mapping=mc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ys(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function y1(s,e,t){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function S1(s,e,t){const r=new Float32Array(is),o=new X(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Mg(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Eg(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class q0 extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new I0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ha(5,5,5),l=new Di({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Ji});l.uniforms.tEquirect.value=t;const u=new Wn(o,l),f=t.minFilter;return t.minFilter===rs&&(t.minFilter=xn),new bS(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function M1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?u(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===lf||S===cf)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new q0(M.height);return A.fromEquirectangularTexture(s,g),e.set(g,A),g.addEventListener("dispose",h),f(A.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const S=g.mapping,M=S===lf||S===cf,A=S===as||S===eo;if(M||A){let y=t.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new yg(s)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return M&&C&&C.height>0||A&&C&&p(C)?(r===null&&(r=new yg(s)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function f(g,S){return S===lf?g.mapping=as:S===cf&&(g.mapping=eo),g}function p(g){let S=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&S++;return S===M}function h(g){const S=g.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function E1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&fc("WebGLRenderer: "+r+" extension not supported."),o}}}function T1(s,e,t,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function h(_){const g=[],S=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(S!==null){const C=S.array;A=S.version;for(let P=0,R=C.length;P<R;P+=3){const k=C[P+0],I=C[P+1],O=C[P+2];g.push(k,I,I,O,O,k)}}else{const C=M.array;A=M.version;for(let P=0,R=C.length/3-1;P<R;P+=3){const k=P+0,I=P+1,O=P+2;g.push(k,I,I,O,O,k)}}const y=new(M.count>=65535?P0:R0)(g,1);y.version=A;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const g=l.get(_);if(g){const S=_.index;S!==null&&g.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function w1(s,e,t){let r;function o(g){r=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function p(g,S){s.drawElements(r,S,l,g*u),t.update(S,r,1)}function h(g,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,g*u,M),t.update(S,r,M))}function v(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,r,1)}function _(g,S,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<g.length;x++)h(g[x]/u,S[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,A,0,M);let x=0;for(let C=0;C<M;C++)x+=S[C]*A[C];t.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function A1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function b1(s,e,t){const r=new WeakMap,o=new Zt;function l(u,f,p){const h=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let se=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",se)};var S=se;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let k=f.attributes.position.count*R,I=1;k>e.maxTextureSize&&(I=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const O=new Float32Array(k*I*4*_),T=new A0(O,k,I,_);T.type=bi,T.needsUpdate=!0;const L=R*4;for(let B=0;B<_;B++){const ne=x[B],K=C[B],ae=P[B],q=k*I*4*B;for(let $=0;$<ne.count;$++){const V=$*L;M===!0&&(o.fromBufferAttribute(ne,$),O[q+V+0]=o.x,O[q+V+1]=o.y,O[q+V+2]=o.z,O[q+V+3]=0),A===!0&&(o.fromBufferAttribute(K,$),O[q+V+4]=o.x,O[q+V+5]=o.y,O[q+V+6]=o.z,O[q+V+7]=0),y===!0&&(o.fromBufferAttribute(ae,$),O[q+V+8]=o.x,O[q+V+9]=o.y,O[q+V+10]=o.z,O[q+V+11]=ae.itemSize===4?o.w:1)}}g={count:_,texture:T,size:new Ge(k,I)},r.set(f,g),f.addEventListener("dispose",se)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const A=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function C1(s,e,t,r,o){let l=new WeakMap;function u(h){const v=o.render.frame,_=h.geometry,g=e.get(h,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==v&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,v))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const R1={[u0]:"LINEAR_TONE_MAPPING",[f0]:"REINHARD_TONE_MAPPING",[d0]:"CINEON_TONE_MAPPING",[h0]:"ACES_FILMIC_TONE_MAPPING",[m0]:"AGX_TONE_MAPPING",[g0]:"NEUTRAL_TONE_MAPPING",[p0]:"CUSTOM_TONE_MAPPING"};function P1(s,e,t,r,o){const l=new Pi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Pi(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),f=new Xn;f.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ln([0,2,0,0,2,0],2));const p=new yS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Wn(f,p),v=new j0(-1,1,1,-1,0,1);let _=null,g=null,S=!1,M,A=null,y=[],x=!1;this.setSize=function(C,P){l.setSize(C,P),u.setSize(C,P);for(let R=0;R<y.length;R++){const k=y[R];k.setSize&&k.setSize(C,P)}},this.setEffects=function(C){y=C,x=y.length>0&&y[0].isRenderPass===!0;const P=l.width,R=l.height;for(let k=0;k<y.length;k++){const I=y[k];I.setSize&&I.setSize(P,R)}},this.begin=function(C,P){if(S||C.toneMapping===Ri&&y.length===0)return!1;if(A=P,P!==null){const R=P.width,k=P.height;(l.width!==R||l.height!==k)&&this.setSize(R,k)}return x===!1&&C.setRenderTarget(l),M=C.toneMapping,C.toneMapping=Ri,!0},this.hasRenderPass=function(){return x},this.end=function(C,P){C.toneMapping=M,S=!0;let R=l,k=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(C,k,R,P),O.needsSwap!==!1)){const T=R;R=k,k=T}}if(_!==C.outputColorSpace||g!==C.toneMapping){_=C.outputColorSpace,g=C.toneMapping,p.defines={},Rt.getTransfer(_)===Ut&&(p.defines.SRGB_TRANSFER="");const I=R1[g];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(A),C.render(h,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const $0=new An,Bd=new oa(1,1),Z0=new A0,K0=new my,J0=new I0,Tg=[],wg=[],Ag=new Float32Array(16),bg=new Float32Array(9),Cg=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Tg[o];if(l===void 0&&(l=new Float32Array(o),Tg[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function _c(s,e){let t=wg[e];t===void 0&&(t=new Int32Array(e),wg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function L1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function N1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function D1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function I1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function U1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Cg.set(r),s.uniformMatrix2fv(this.addr,!1,Cg),nn(t,r)}}function F1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;bg.set(r),s.uniformMatrix3fv(this.addr,!1,bg),nn(t,r)}}function O1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Ag.set(r),s.uniformMatrix4fv(this.addr,!1,Ag),nn(t,r)}}function k1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function B1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function V1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function H1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function G1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function W1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function j1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Bd.compareFunction=t.isReversedDepthBuffer()?Qd:Jd,l=Bd):l=$0,t.setTexture2D(e||l,o)}function Y1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||K0,o)}function q1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||J0,o)}function $1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Z0,o)}function Z1(s){switch(s){case 5126:return L1;case 35664:return N1;case 35665:return D1;case 35666:return I1;case 35674:return U1;case 35675:return F1;case 35676:return O1;case 5124:case 35670:return k1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return V1;case 5125:return H1;case 36294:return G1;case 36295:return W1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return $1}}function K1(s,e){s.uniform1fv(this.addr,e)}function J1(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function Q1(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function eT(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function tT(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function nT(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iT(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function rT(s,e){s.uniform1iv(this.addr,e)}function sT(s,e){s.uniform2iv(this.addr,e)}function oT(s,e){s.uniform3iv(this.addr,e)}function aT(s,e){s.uniform4iv(this.addr,e)}function lT(s,e){s.uniform1uiv(this.addr,e)}function cT(s,e){s.uniform2uiv(this.addr,e)}function uT(s,e){s.uniform3uiv(this.addr,e)}function fT(s,e){s.uniform4uiv(this.addr,e)}function dT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Bd:u=$0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function hT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||K0,l[u])}function pT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||J0,l[u])}function mT(s,e,t){const r=this.cache,o=e.length,l=_c(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Z0,l[u])}function gT(s){switch(s){case 5126:return K1;case 35664:return J1;case 35665:return Q1;case 35666:return eT;case 35674:return tT;case 35675:return nT;case 35676:return iT;case 5124:case 35670:return rT;case 35667:case 35671:return sT;case 35668:case 35672:return oT;case 35669:case 35673:return aT;case 5125:return lT;case 36294:return cT;case 36295:return uT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return pT;case 36289:case 36303:case 36311:case 36292:return mT}}class vT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Z1(t.type)}}class _T{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gT(t.type)}}class xT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function Rg(s,e){s.seq.push(e),s.map[e.id]=e}function yT(s,e,t){const r=s.name,o=r.length;for(Hf.lastIndex=0;;){const l=Hf.exec(r),u=Hf.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){Rg(t,h===void 0?new vT(f,s,e):new _T(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new xT(f),Rg(t,_)),t=_}}}class ac{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);yT(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Pg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const ST=37297;let MT=0;function ET(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Lg=new xt;function TT(s){Rt._getMatrix(Lg,Rt.workingColorSpace,s);const e=`mat3( ${Lg.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case lc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ng(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+ET(s.getShaderSource(e),f)}else return l}function wT(s,e){const t=TT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const AT={[u0]:"Linear",[f0]:"Reinhard",[d0]:"Cineon",[h0]:"ACESFilmic",[m0]:"AgX",[g0]:"Neutral",[p0]:"Custom"};function bT(s,e){const t=AT[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ql=new X;function CT(){Rt.getLuminanceCoefficients(Ql);const s=Ql.x.toFixed(4),e=Ql.y.toFixed(4),t=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jo).join(`
`)}function PT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function LT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Jo(s){return s!==""}function Dg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ig(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace(NT,IT)}const DT=new Map;function IT(s,e){let t=yt[e];if(t===void 0){const r=DT.get(e);if(r!==void 0)t=yt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return zd(t)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ug(s){return s.replace(UT,FT)}function FT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Fg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const OT={[tc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function kT(s){return OT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BT={[as]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function zT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const VT={[eo]:"ENVMAP_MODE_REFRACTION"};function HT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":VT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GT={[c0]:"ENVMAP_BLENDING_MULTIPLY",[Nx]:"ENVMAP_BLENDING_MIX",[Dx]:"ENVMAP_BLENDING_ADD"};function WT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":GT[s.combine]||"ENVMAP_BLENDING_NONE"}function XT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function jT(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=kT(t),h=zT(t),v=HT(t),_=WT(t),g=XT(t),S=RT(t),M=PT(l),A=o.createProgram();let y,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Jo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Jo).join(`
`),x.length>0&&(x+=`
`)):(y=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jo).join(`
`),x=[Fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?yt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?bT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,wT("linearToOutputTexel",t.outputColorSpace),CT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Jo).join(`
`)),u=zd(u),u=Dg(u,t),u=Ig(u,t),f=zd(f),f=Dg(f,t),f=Ig(f,t),u=Ug(u),f=Ug(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=C+y+u,R=C+x+f,k=Pg(o,o.VERTEX_SHADER,P),I=Pg(o,o.FRAGMENT_SHADER,R);o.attachShader(A,k),o.attachShader(A,I),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(B){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(A)||"",K=o.getShaderInfoLog(k)||"",ae=o.getShaderInfoLog(I)||"",q=ne.trim(),$=K.trim(),V=ae.trim();let Z=!0,Q=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,k,I);else{const ce=Ng(o,k,"vertex"),F=Ng(o,I,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+q+`
`+ce+`
`+F)}else q!==""?dt("WebGLProgram: Program Info Log:",q):($===""||V==="")&&(Q=!1);Q&&(B.diagnostics={runnable:Z,programLog:q,vertexShader:{log:$,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(k),o.deleteShader(I),T=new ac(o,A),L=LT(o,A)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let se=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return se===!1&&(se=o.getProgramParameter(A,ST)),se},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=k,this.fragmentShader=I,this}let YT=0;class qT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new $T(e),t.set(e,r)),r}}class $T{constructor(e){this.id=YT++,this.code=e,this.usedTimes=0}}function ZT(s,e,t,r,o,l){const u=new b0,f=new qT,p=new Set,h=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return p.add(T),T===0?"uv":`uv${T}`}function A(T,L,se,B,ne){const K=B.fog,ae=ne.geometry,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,V=e.get(T.envMap||q,$),Z=V&&V.mapping===mc?V.image.height:null,Q=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ce=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,F=ce!==void 0?ce.length:0;let Y=0;ae.morphAttributes.position!==void 0&&(Y=1),ae.morphAttributes.normal!==void 0&&(Y=2),ae.morphAttributes.color!==void 0&&(Y=3);let Ce,Xe,et,re;if(Q){const At=wi[Q];Ce=At.vertexShader,Xe=At.fragmentShader}else Ce=T.vertexShader,Xe=T.fragmentShader,f.update(T),et=f.getVertexShaderID(T),re=f.getFragmentShaderID(T);const ge=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Ie=ne.isInstancedMesh===!0,We=ne.isBatchedMesh===!0,ct=!!T.map,Lt=!!T.matcap,ht=!!V,ve=!!T.aoMap,Me=!!T.lightMap,_e=!!T.bumpMap,Ne=!!T.normalMap,D=!!T.displacementMap,ot=!!T.emissiveMap,Ue=!!T.metalnessMap,rt=!!T.roughnessMap,Pe=T.anisotropy>0,N=T.clearcoat>0,E=T.dispersion>0,G=T.iridescence>0,ue=T.sheen>0,me=T.transmission>0,fe=Pe&&!!T.anisotropyMap,je=N&&!!T.clearcoatMap,Ae=N&&!!T.clearcoatNormalMap,Je=N&&!!T.clearcoatRoughnessMap,lt=G&&!!T.iridescenceMap,Se=G&&!!T.iridescenceThicknessMap,Re=ue&&!!T.sheenColorMap,Ke=ue&&!!T.sheenRoughnessMap,qe=!!T.specularMap,ke=!!T.specularColorMap,vt=!!T.specularIntensityMap,H=me&&!!T.transmissionMap,Le=me&&!!T.thicknessMap,we=!!T.gradientMap,Be=!!T.alphaMap,Te=T.alphaTest>0,de=!!T.alphaHash,$e=!!T.extensions;let pt=Ri;T.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(pt=s.toneMapping);const It={shaderID:Q,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Xe,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:We,batchingColor:We&&ne._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ne.instanceColor!==null,instancingMorph:Ie&&ne.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:no,alphaToCoverage:!!T.alphaToCoverage,map:ct,matcap:Lt,envMap:ht,envMapMode:ht&&V.mapping,envMapCubeUVHeight:Z,aoMap:ve,lightMap:Me,bumpMap:_e,normalMap:Ne,displacementMap:D,emissiveMap:ot,normalMapObjectSpace:Ne&&T.normalMapType===Ox,normalMapTangentSpace:Ne&&T.normalMapType===Fx,metalnessMap:Ue,roughnessMap:rt,anisotropy:Pe,anisotropyMap:fe,clearcoat:N,clearcoatMap:je,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Je,dispersion:E,iridescence:G,iridescenceMap:lt,iridescenceThicknessMap:Se,sheen:ue,sheenColorMap:Re,sheenRoughnessMap:Ke,specularMap:qe,specularColorMap:ke,specularIntensityMap:vt,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:we,opaque:T.transparent===!1&&T.blending===Zs&&T.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:de,combine:T.combine,mapUv:ct&&M(T.map.channel),aoMapUv:ve&&M(T.aoMap.channel),lightMapUv:Me&&M(T.lightMap.channel),bumpMapUv:_e&&M(T.bumpMap.channel),normalMapUv:Ne&&M(T.normalMap.channel),displacementMapUv:D&&M(T.displacementMap.channel),emissiveMapUv:ot&&M(T.emissiveMap.channel),metalnessMapUv:Ue&&M(T.metalnessMap.channel),roughnessMapUv:rt&&M(T.roughnessMap.channel),anisotropyMapUv:fe&&M(T.anisotropyMap.channel),clearcoatMapUv:je&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(T.sheenRoughnessMap.channel),specularMapUv:qe&&M(T.specularMap.channel),specularColorMapUv:ke&&M(T.specularColorMap.channel),specularIntensityMapUv:vt&&M(T.specularIntensityMap.channel),transmissionMapUv:H&&M(T.transmissionMap.channel),thicknessMapUv:Le&&M(T.thicknessMap.channel),alphaMapUv:Be&&M(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Ne||Pe),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!ae.attributes.uv&&(ct||Be),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ae.attributes.normal===void 0&&Ne===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:ne.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Y,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&se.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:ct&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Ut,decodeVideoTextureEmissive:ot&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Ut,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ai,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:$e&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&T.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const se in T.defines)L.push(se),L.push(T.defines[se]);return T.isRawShaderMaterial===!1&&(x(L,T),C(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),T.push(u.mask)}function P(T){const L=S[T.type];let se;if(L){const B=wi[L];se=vS.clone(B.uniforms)}else se=T.uniforms;return se}function R(T,L){let se=v.get(L);return se!==void 0?++se.usedTimes:(se=new jT(s,L,T,o),h.push(se),v.set(L,se)),se}function k(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function I(T){f.remove(T)}function O(){f.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:k,releaseShaderCache:I,programs:h,dispose:O}}function KT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function JT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Og(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function kg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,A,y,x){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:S,material:M,materialVariant:u(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:x},s[e]=C):(C.id=g.id,C.object=g,C.geometry=S,C.material=M,C.materialVariant=u(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=y,C.group=x),e++,C}function p(g,S,M,A,y,x){const C=f(g,S,M,A,y,x);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function h(g,S,M,A,y,x){const C=f(g,S,M,A,y,x);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function v(g,S){t.length>1&&t.sort(g||JT),r.length>1&&r.sort(S||Og),o.length>1&&o.sort(S||Og)}function _(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:h,finish:_,sort:v}}function QT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new kg,s.set(r,[u])):o>=l.length?(u=new kg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function ew(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new wt};break;case"SpotLight":t={position:new X,direction:new X,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function tw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let nw=0;function iw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rw(s){const e=new ew,t=tw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new X);const o=new X,l=new jt,u=new jt;function f(h){let v=0,_=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,M=0,A=0,y=0,x=0,C=0,P=0,R=0,k=0,I=0,O=0;h.sort(iw);for(let L=0,se=h.length;L<se;L++){const B=h[L],ne=B.color,K=B.intensity,ae=B.distance;let q=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===to?q=B.shadow.map.texture:q=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=ne.r*K,_+=ne.g*K,g+=ne.b*K;else if(B.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(B.sh.coefficients[$],K);O++}else if(B.isDirectionalLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const V=B.shadow,Z=t.get(B);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,r.directionalShadow[S]=Z,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=B.shadow.matrix,C++}r.directional[S]=$,S++}else if(B.isSpotLight){const $=e.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(ne).multiplyScalar(K),$.distance=ae,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,r.spot[A]=$;const V=B.shadow;if(B.map&&(r.spotLightMap[k]=B.map,k++,V.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[A]=V.matrix,B.castShadow){const Z=t.get(B);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,r.spotShadow[A]=Z,r.spotShadowMap[A]=q,R++}A++}else if(B.isRectAreaLight){const $=e.get(B);$.color.copy(ne).multiplyScalar(K),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=$,y++}else if(B.isPointLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),$.distance=B.distance,$.decay=B.decay,B.castShadow){const V=B.shadow,Z=t.get(B);Z.shadowIntensity=V.intensity,Z.shadowBias=V.bias,Z.shadowNormalBias=V.normalBias,Z.shadowRadius=V.radius,Z.shadowMapSize=V.mapSize,Z.shadowCameraNear=V.camera.near,Z.shadowCameraFar=V.camera.far,r.pointShadow[M]=Z,r.pointShadowMap[M]=q,r.pointShadowMatrix[M]=B.shadow.matrix,P++}r.point[M]=$,M++}else if(B.isHemisphereLight){const $=e.get(B);$.skyColor.copy(B.color).multiplyScalar(K),$.groundColor.copy(B.groundColor).multiplyScalar(K),r.hemi[x]=$,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==A||T.rectAreaLength!==y||T.hemiLength!==x||T.numDirectionalShadows!==C||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==k||T.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+k-I,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,T.directionalLength=S,T.pointLength=M,T.spotLength=A,T.rectAreaLength=y,T.hemiLength=x,T.numDirectionalShadows=C,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=k,T.numLightProbes=O,r.version=nw++)}function p(h,v){let _=0,g=0,S=0,M=0,A=0;const y=v.matrixWorldInverse;for(let x=0,C=h.length;x<C;x++){const P=h[x];if(P.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function Bg(s){const e=new rw(s),t=[],r=[];function o(v){h.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function sw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Bg(s),e.set(o,[f])):l>=u.length?(f=new Bg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lw=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],cw=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],zg=new jt,$o=new X,Gf=new X;function uw(s,e,t){let r=new N0;const o=new Ge,l=new Ge,u=new Zt,f=new SS,p=new MS,h={},v=t.maxTextureSize,_={[Dr]:Un,[Un]:Dr,[Ai]:Ai},g=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:ow,fragmentShader:aw}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new Xn;M.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Wn(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tc;let x=this.type;this.render=function(I,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===hx&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tc);const L=s.getRenderTarget(),se=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Ji),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const K=x!==this.type;K&&O.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(q=>q.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,q=I.length;ae<q;ae++){const $=I[ae],V=$.shadow;if(V===void 0){dt("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Z=V.getFrameExtents();o.multiply(Z),l.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Z.x),o.x=l.x*Z.x,V.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Z.y),o.y=l.y*Z.y,V.mapSize.y=l.y));const Q=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Q,V.map===null||K===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Zo){if($.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Pi(o.x,o.y,{format:to,type:er,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new oa(o.x,o.y,bi),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=tr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=dn,V.map.depthTexture.magFilter=dn}else $.isPointLight?(V.map=new q0(o.x),V.map.depthTexture=new Uy(o.x,Ni)):(V.map=new Pi(o.x,o.y),V.map.depthTexture=new oa(o.x,o.y,Ni)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=tr,this.type===tc?(V.map.depthTexture.compareFunction=Q?Qd:Jd,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=dn,V.map.depthTexture.magFilter=dn);V.camera.updateProjectionMatrix()}const ce=V.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ce;F++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,F),s.clear();else{F===0&&(s.setRenderTarget(V.map),s.clear());const Y=V.getViewport(F);u.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),ne.viewport(u)}if($.isPointLight){const Y=V.camera,Ce=V.matrix,Xe=$.distance||Y.far;Xe!==Y.far&&(Y.far=Xe,Y.updateProjectionMatrix()),$o.setFromMatrixPosition($.matrixWorld),Y.position.copy($o),Gf.copy(Y.position),Gf.add(lw[F]),Y.up.copy(cw[F]),Y.lookAt(Gf),Y.updateMatrixWorld(),Ce.makeTranslation(-$o.x,-$o.y,-$o.z),zg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(zg,Y.coordinateSystem,Y.reversedDepth)}else V.updateMatrices($);r=V.getFrustum(),R(O,T,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Zo&&C(V,T),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(L,se,B)};function C(I,O){const T=e.update(A);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Pi(o.x,o.y,{format:to,type:er})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,T,g,A,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,T,S,A,null)}function P(I,O,T,L){let se=null;const B=T.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)se=B;else if(se=T.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ne=se.uuid,K=O.uuid;let ae=h[ne];ae===void 0&&(ae={},h[ne]=ae);let q=ae[K];q===void 0&&(q=se.clone(),ae[K]=q,O.addEventListener("dispose",k)),se=q}if(se.visible=O.visible,se.wireframe=O.wireframe,L===Zo?se.side=O.shadowSide!==null?O.shadowSide:O.side:se.side=O.shadowSide!==null?O.shadowSide:_[O.side],se.alphaMap=O.alphaMap,se.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,se.map=O.map,se.clipShadows=O.clipShadows,se.clippingPlanes=O.clippingPlanes,se.clipIntersection=O.clipIntersection,se.displacementMap=O.displacementMap,se.displacementScale=O.displacementScale,se.displacementBias=O.displacementBias,se.wireframeLinewidth=O.wireframeLinewidth,se.linewidth=O.linewidth,T.isPointLight===!0&&se.isMeshDistanceMaterial===!0){const ne=s.properties.get(se);ne.light=T}return se}function R(I,O,T,L,se){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&se===Zo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,I.matrixWorld);const K=e.update(I),ae=I.material;if(Array.isArray(ae)){const q=K.groups;for(let $=0,V=q.length;$<V;$++){const Z=q[$],Q=ae[Z.materialIndex];if(Q&&Q.visible){const ce=P(I,Q,L,se);I.onBeforeShadow(s,I,O,T,K,ce,Z),s.renderBufferDirect(T,null,K,ce,I,Z),I.onAfterShadow(s,I,O,T,K,ce,Z)}}}else if(ae.visible){const q=P(I,ae,L,se);I.onBeforeShadow(s,I,O,T,K,q,null),s.renderBufferDirect(T,null,K,q,I,null),I.onAfterShadow(s,I,O,T,K,q,null)}}const ne=I.children;for(let K=0,ae=ne.length;K<ae;K++)R(ne[K],O,T,L,se)}function k(I){I.target.removeEventListener("dispose",k);for(const T in h){const L=h[T],se=I.target.uuid;se in L&&(L[se].dispose(),delete L[se])}}}function fw(s,e){function t(){let H=!1;const Le=new Zt;let we=null;const Be=new Zt(0,0,0,0);return{setMask:function(Te){we!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){H=Te},setClear:function(Te,de,$e,pt,It){It===!0&&(Te*=pt,de*=pt,$e*=pt),Le.set(Te,de,$e,pt),Be.equals(Le)===!1&&(s.clearColor(Te,de,$e,pt),Be.copy(Le))},reset:function(){H=!1,we=null,Be.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,we=null,Be=null,Te=null;return{setReversed:function(de){if(Le!==de){const $e=e.get("EXT_clip_control");de?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Le=de;const pt=Te;Te=null,this.setClear(pt)}},getReversed:function(){return Le},setTest:function(de){de?ge(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(de){we!==de&&!H&&(s.depthMask(de),we=de)},setFunc:function(de){if(Le&&(de=Yx[de]),Be!==de){switch(de){case qf:s.depthFunc(s.NEVER);break;case $f:s.depthFunc(s.ALWAYS);break;case Zf:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case Kf:s.depthFunc(s.EQUAL);break;case Jf:s.depthFunc(s.GEQUAL);break;case Qf:s.depthFunc(s.GREATER);break;case ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=de}},setLocked:function(de){H=de},setClear:function(de){Te!==de&&(Te=de,Le&&(de=1-de),s.clearDepth(de))},reset:function(){H=!1,we=null,Be=null,Te=null,Le=!1}}}function o(){let H=!1,Le=null,we=null,Be=null,Te=null,de=null,$e=null,pt=null,It=null;return{setTest:function(At){H||(At?ge(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(At){Le!==At&&!H&&(s.stencilMask(At),Le=At)},setFunc:function(At,jn,yn){(we!==At||Be!==jn||Te!==yn)&&(s.stencilFunc(At,jn,yn),we=At,Be=jn,Te=yn)},setOp:function(At,jn,yn){(de!==At||$e!==jn||pt!==yn)&&(s.stencilOp(At,jn,yn),de=At,$e=jn,pt=yn)},setLocked:function(At){H=At},setClear:function(At){It!==At&&(s.clearStencil(At),It=At)},reset:function(){H=!1,Le=null,we=null,Be=null,Te=null,de=null,$e=null,pt=null,It=null}}}const l=new t,u=new r,f=new o,p=new WeakMap,h=new WeakMap;let v={},_={},g=new WeakMap,S=[],M=null,A=!1,y=null,x=null,C=null,P=null,R=null,k=null,I=null,O=new wt(0,0,0),T=0,L=!1,se=null,B=null,ne=null,K=null,ae=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=V>=1):Z.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=V>=2);let Q=null,ce={};const F=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),Ce=new Zt().fromArray(F),Xe=new Zt().fromArray(Y);function et(H,Le,we,Be){const Te=new Uint8Array(4),de=s.createTexture();s.bindTexture(H,de),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<we;$e++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Le+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return de}const re={};re[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(Qs),_e(!1),Ne(Fm),ge(s.CULL_FACE),ve(Ji);function ge(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function pe(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Ie(H,Le){return _[H]!==Le?(s.bindFramebuffer(H,Le),_[H]=Le,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(H,Le){let we=S,Be=!1;if(H){we=g.get(Le),we===void 0&&(we=[],g.set(Le,we));const Te=H.textures;if(we.length!==Te.length||we[0]!==s.COLOR_ATTACHMENT0){for(let de=0,$e=Te.length;de<$e;de++)we[de]=s.COLOR_ATTACHMENT0+de;we.length=Te.length,Be=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Be=!0);Be&&s.drawBuffers(we)}function ct(H){return M!==H?(s.useProgram(H),M=H,!0):!1}const Lt={[ns]:s.FUNC_ADD,[mx]:s.FUNC_SUBTRACT,[gx]:s.FUNC_REVERSE_SUBTRACT};Lt[vx]=s.MIN,Lt[_x]=s.MAX;const ht={[xx]:s.ZERO,[yx]:s.ONE,[Sx]:s.SRC_COLOR,[jf]:s.SRC_ALPHA,[bx]:s.SRC_ALPHA_SATURATE,[wx]:s.DST_COLOR,[Ex]:s.DST_ALPHA,[Mx]:s.ONE_MINUS_SRC_COLOR,[Yf]:s.ONE_MINUS_SRC_ALPHA,[Ax]:s.ONE_MINUS_DST_COLOR,[Tx]:s.ONE_MINUS_DST_ALPHA,[Cx]:s.CONSTANT_COLOR,[Rx]:s.ONE_MINUS_CONSTANT_COLOR,[Px]:s.CONSTANT_ALPHA,[Lx]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(H,Le,we,Be,Te,de,$e,pt,It,At){if(H===Ji){A===!0&&(pe(s.BLEND),A=!1);return}if(A===!1&&(ge(s.BLEND),A=!0),H!==px){if(H!==y||At!==L){if((x!==ns||R!==ns)&&(s.blendEquation(s.FUNC_ADD),x=ns,R=ns),At)switch(H){case Zs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xf:s.blendFunc(s.ONE,s.ONE);break;case Om:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case km:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case Zs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Om:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case km:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}C=null,P=null,k=null,I=null,O.set(0,0,0),T=0,y=H,L=At}return}Te=Te||Le,de=de||we,$e=$e||Be,(Le!==x||Te!==R)&&(s.blendEquationSeparate(Lt[Le],Lt[Te]),x=Le,R=Te),(we!==C||Be!==P||de!==k||$e!==I)&&(s.blendFuncSeparate(ht[we],ht[Be],ht[de],ht[$e]),C=we,P=Be,k=de,I=$e),(pt.equals(O)===!1||It!==T)&&(s.blendColor(pt.r,pt.g,pt.b,It),O.copy(pt),T=It),y=H,L=!1}function Me(H,Le){H.side===Ai?pe(s.CULL_FACE):ge(s.CULL_FACE);let we=H.side===Un;Le&&(we=!we),_e(we),H.blending===Zs&&H.transparent===!1?ve(Ji):ve(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Be=H.stencilWrite;f.setTest(Be),Be&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ot(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(H){se!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),se=H)}function Ne(H){H!==fx?(ge(s.CULL_FACE),H!==B&&(H===Fm?s.cullFace(s.BACK):H===dx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),B=H}function D(H){H!==ne&&($&&s.lineWidth(H),ne=H)}function ot(H,Le,we){H?(ge(s.POLYGON_OFFSET_FILL),(K!==Le||ae!==we)&&(K=Le,ae=we,u.getReversed()&&(Le=-Le),s.polygonOffset(Le,we))):pe(s.POLYGON_OFFSET_FILL)}function Ue(H){H?ge(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function rt(H){H===void 0&&(H=s.TEXTURE0+q-1),Q!==H&&(s.activeTexture(H),Q=H)}function Pe(H,Le,we){we===void 0&&(Q===null?we=s.TEXTURE0+q-1:we=Q);let Be=ce[we];Be===void 0&&(Be={type:void 0,texture:void 0},ce[we]=Be),(Be.type!==H||Be.texture!==Le)&&(Q!==we&&(s.activeTexture(we),Q=we),s.bindTexture(H,Le||re[H]),Be.type=H,Be.texture=Le)}function N(){const H=ce[Q];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ue(){try{s.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ae(){try{s.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Je(){try{s.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function lt(){try{s.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Se(){try{s.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Re(H){Ce.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ce.copy(H))}function Ke(H){Xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function qe(H,Le){let we=h.get(Le);we===void 0&&(we=new WeakMap,h.set(Le,we));let Be=we.get(H);Be===void 0&&(Be=s.getUniformBlockIndex(Le,H.name),we.set(H,Be))}function ke(H,Le){const Be=h.get(Le).get(H);p.get(Le)!==Be&&(s.uniformBlockBinding(Le,Be,H.__bindingPointIndex),p.set(Le,Be))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},Q=null,ce={},_={},g=new WeakMap,S=[],M=null,A=!1,y=null,x=null,C=null,P=null,R=null,k=null,I=null,O=new wt(0,0,0),T=0,L=!1,se=null,B=null,ne=null,K=null,ae=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:pe,bindFramebuffer:Ie,drawBuffers:We,useProgram:ct,setBlending:ve,setMaterial:Me,setFlipSided:_e,setCullFace:Ne,setLineWidth:D,setPolygonOffset:ot,setScissorTest:Ue,activeTexture:rt,bindTexture:Pe,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:lt,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:Ae,texStorage3D:Je,texSubImage2D:ue,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:je,scissor:Re,viewport:Ke,reset:vt}}function dw(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,v=new WeakMap;let _;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,E){return S?new OffscreenCanvas(N,E):uc("canvas")}function A(N,E,G){let ue=1;const me=Pe(N);if((me.width>G||me.height>G)&&(ue=G/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const fe=Math.floor(ue*me.width),je=Math.floor(ue*me.height);_===void 0&&(_=M(fe,je));const Ae=E?M(fe,je):_;return Ae.width=fe,Ae.height=je,Ae.getContext("2d").drawImage(N,0,0,fe,je),dt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+je+")."),Ae}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,E,G,ue,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=E;if(E===s.RED&&(G===s.FLOAT&&(fe=s.R32F),G===s.HALF_FLOAT&&(fe=s.R16F),G===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.R8UI),G===s.UNSIGNED_SHORT&&(fe=s.R16UI),G===s.UNSIGNED_INT&&(fe=s.R32UI),G===s.BYTE&&(fe=s.R8I),G===s.SHORT&&(fe=s.R16I),G===s.INT&&(fe=s.R32I)),E===s.RG&&(G===s.FLOAT&&(fe=s.RG32F),G===s.HALF_FLOAT&&(fe=s.RG16F),G===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RG8UI),G===s.UNSIGNED_SHORT&&(fe=s.RG16UI),G===s.UNSIGNED_INT&&(fe=s.RG32UI),G===s.BYTE&&(fe=s.RG8I),G===s.SHORT&&(fe=s.RG16I),G===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),G===s.UNSIGNED_INT&&(fe=s.RGB32UI),G===s.BYTE&&(fe=s.RGB8I),G===s.SHORT&&(fe=s.RGB16I),G===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),G===s.UNSIGNED_INT&&(fe=s.RGBA32UI),G===s.BYTE&&(fe=s.RGBA8I),G===s.SHORT&&(fe=s.RGBA16I),G===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const je=me?lc:Rt.getTransfer(ue);G===s.FLOAT&&(fe=s.RGBA32F),G===s.HALF_FLOAT&&(fe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(fe=je===Ut?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(N,E){let G;return N?E===null||E===Ni||E===ra?G=s.DEPTH24_STENCIL8:E===bi?G=s.DEPTH32F_STENCIL8:E===ia&&(G=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ni||E===ra?G=s.DEPTH_COMPONENT24:E===bi?G=s.DEPTH_COMPONENT32F:E===ia&&(G=s.DEPTH_COMPONENT16),G}function k(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==dn&&N.minFilter!==xn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),T(E),E.isVideoTexture&&v.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),se(E)}function T(N){const E=r.get(N);if(E.__webglInit===void 0)return;const G=N.source,ue=g.get(G);if(ue){const me=ue[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&L(N),Object.keys(ue).length===0&&g.delete(G)}r.remove(N)}function L(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const G=N.source,ue=g.get(G);delete ue[E.__cacheKey],u.memory.textures--}function se(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let me=0;me<E.__webglFramebuffer[ue].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[ue][me]);else s.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)s.deleteFramebuffer(E.__webglFramebuffer[ue]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=N.textures;for(let ue=0,me=G.length;ue<me;ue++){const fe=r.get(G[ue]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(G[ue])}r.remove(N)}let B=0;function ne(){B=0}function K(){const N=B;return N>=o.maxTextures&&dt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),B+=1,N}function ae(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function q(N,E){const G=r.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const ue=N.image;if(ue===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,N,E);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function $(N,E){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){re(G,N,E);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function V(N,E){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){re(G,N,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function Z(N,E){const G=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){ge(G,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const Q={[td]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[nd]:s.MIRRORED_REPEAT},ce={[dn]:s.NEAREST,[Ix]:s.NEAREST_MIPMAP_NEAREST,[Tl]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[uf]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},F={[kx]:s.NEVER,[Gx]:s.ALWAYS,[Bx]:s.LESS,[Jd]:s.LEQUAL,[zx]:s.EQUAL,[Qd]:s.GEQUAL,[Vx]:s.GREATER,[Hx]:s.NOTEQUAL};function Y(N,E){if(E.type===bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===xn||E.magFilter===uf||E.magFilter===Tl||E.magFilter===rs||E.minFilter===xn||E.minFilter===uf||E.minFilter===Tl||E.minFilter===rs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,Q[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,Q[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,Q[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===dn||E.minFilter!==Tl&&E.minFilter!==rs||E.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(N,E){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const ue=E.source;let me=g.get(ue);me===void 0&&(me={},g.set(ue,me));const fe=ae(E);if(fe!==N.__cacheKey){me[fe]===void 0&&(me[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),me[fe].usedTimes++;const je=me[N.__cacheKey];je!==void 0&&(me[N.__cacheKey].usedTimes--,je.usedTimes===0&&L(E)),N.__cacheKey=fe,N.__webglTexture=me[fe].texture}return G}function Xe(N,E,G){return Math.floor(Math.floor(N/G)/E)}function et(N,E,G,ue){const fe=N.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,ue,E.data);else{fe.sort((Se,Re)=>Se.start-Re.start);let je=0;for(let Se=1;Se<fe.length;Se++){const Re=fe[je],Ke=fe[Se],qe=Re.start+Re.count,ke=Xe(Ke.start,E.width,4),vt=Xe(Re.start,E.width,4);Ke.start<=qe+1&&ke===vt&&Xe(Ke.start+Ke.count-1,E.width,4)===ke?Re.count=Math.max(Re.count,Ke.start+Ke.count-Re.start):(++je,fe[je]=Ke)}fe.length=je+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),lt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Re=fe.length;Se<Re;Se++){const Ke=fe[Se],qe=Math.floor(Ke.start/4),ke=Math.ceil(Ke.count/4),vt=qe%E.width,H=Math.floor(qe/E.width),Le=ke,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,vt,H,Le,we,G,ue,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function re(N,E,G){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);const me=Ce(N,E),fe=E.source;t.bindTexture(ue,N.__webglTexture,s.TEXTURE0+G);const je=r.get(fe);if(fe.version!==je.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const Ae=Rt.getPrimaries(Rt.workingColorSpace),Je=E.colorSpace===Lr?null:Rt.getPrimaries(E.colorSpace),lt=E.colorSpace===Lr||Ae===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=A(E.image,!1,o.maxTextureSize);Se=rt(E,Se);const Re=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let qe=P(E.internalFormat,Re,Ke,E.colorSpace,E.isVideoTexture);Y(ue,E);let ke;const vt=E.mipmaps,H=E.isVideoTexture!==!0,Le=je.__version===void 0||me===!0,we=fe.dataReady,Be=k(E,Se);if(E.isDepthTexture)qe=R(E.format===ss,E.type),Le&&(H?t.texStorage2D(s.TEXTURE_2D,1,qe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,Ke,null));else if(E.isDataTexture)if(vt.length>0){H&&Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,vt[0].width,vt[0].height);for(let Te=0,de=vt.length;Te<de;Te++)ke=vt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,Ke,ke.data):t.texImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,Re,Ke,ke.data);E.generateMipmaps=!1}else H?(Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,Se.width,Se.height),we&&et(E,Se,Re,Ke)):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,Ke,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,vt[0].width,vt[0].height,Se.depth);for(let Te=0,de=vt.length;Te<de;Te++)if(ke=vt[Te],E.format!==vi)if(Re!==null)if(H){if(we)if(E.layerUpdates.size>0){const $e=vg(ke.width,ke.height,E.format,E.type);for(const pt of E.layerUpdates){const It=ke.data.subarray(pt*$e/ke.data.BYTES_PER_ELEMENT,(pt+1)*$e/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,pt,ke.width,ke.height,1,Re,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ke.width,ke.height,Se.depth,Re,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,qe,ke.width,ke.height,Se.depth,0,ke.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ke.width,ke.height,Se.depth,Re,Ke,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,qe,ke.width,ke.height,Se.depth,0,Re,Ke,ke.data)}else{H&&Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,vt[0].width,vt[0].height);for(let Te=0,de=vt.length;Te<de;Te++)ke=vt[Te],E.format!==vi?Re!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,ke.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,Ke,ke.data):t.texImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,Re,Ke,ke.data)}else if(E.isDataArrayTexture)if(H){if(Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,Se.width,Se.height,Se.depth),we)if(E.layerUpdates.size>0){const Te=vg(Se.width,Se.height,E.format,E.type);for(const de of E.layerUpdates){const $e=Se.data.subarray(de*Te/Se.data.BYTES_PER_ELEMENT,(de+1)*Te/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Re,Ke,$e)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ke,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,Re,Ke,Se.data);else if(E.isData3DTexture)H?(Le&&t.texStorage3D(s.TEXTURE_3D,Be,qe,Se.width,Se.height,Se.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ke,Se.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,Re,Ke,Se.data);else if(E.isFramebufferTexture){if(Le)if(H)t.texStorage2D(s.TEXTURE_2D,Be,qe,Se.width,Se.height);else{let Te=Se.width,de=Se.height;for(let $e=0;$e<Be;$e++)t.texImage2D(s.TEXTURE_2D,$e,qe,Te,de,0,Re,Ke,null),Te>>=1,de>>=1}}else if(vt.length>0){if(H&&Le){const Te=Pe(vt[0]);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}for(let Te=0,de=vt.length;Te<de;Te++)ke=vt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,Ke,ke):t.texImage2D(s.TEXTURE_2D,Te,qe,Re,Ke,ke);E.generateMipmaps=!1}else if(H){if(Le){const Te=Pe(Se);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ke,Se)}else t.texImage2D(s.TEXTURE_2D,0,qe,Re,Ke,Se);y(E)&&x(ue),je.__version=fe.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ge(N,E,G){if(E.image.length!==6)return;const ue=Ce(N,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+G);const fe=r.get(me);if(me.version!==fe.__version||ue===!0){t.activeTexture(s.TEXTURE0+G);const je=Rt.getPrimaries(Rt.workingColorSpace),Ae=E.colorSpace===Lr?null:Rt.getPrimaries(E.colorSpace),Je=E.colorSpace===Lr||je===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let de=0;de<6;de++)!lt&&!Se?Re[de]=A(E.image[de],!0,o.maxCubemapSize):Re[de]=Se?E.image[de].image:E.image[de],Re[de]=rt(E,Re[de]);const Ke=Re[0],qe=l.convert(E.format,E.colorSpace),ke=l.convert(E.type),vt=P(E.internalFormat,qe,ke,E.colorSpace),H=E.isVideoTexture!==!0,Le=fe.__version===void 0||ue===!0,we=me.dataReady;let Be=k(E,Ke);Y(s.TEXTURE_CUBE_MAP,E);let Te;if(lt){H&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,Ke.width,Ke.height);for(let de=0;de<6;de++){Te=Re[de].mipmaps;for(let $e=0;$e<Te.length;$e++){const pt=Te[$e];E.format!==vi?qe!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,0,0,pt.width,pt.height,qe,pt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,vt,pt.width,pt.height,0,pt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,0,0,pt.width,pt.height,qe,ke,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e,vt,pt.width,pt.height,0,qe,ke,pt.data)}}}else{if(Te=E.mipmaps,H&&Le){Te.length>0&&Be++;const de=Pe(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,de.width,de.height)}for(let de=0;de<6;de++)if(Se){H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Re[de].width,Re[de].height,qe,ke,Re[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,vt,Re[de].width,Re[de].height,0,qe,ke,Re[de].data);for(let $e=0;$e<Te.length;$e++){const It=Te[$e].image[de].image;H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,0,0,It.width,It.height,qe,ke,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,vt,It.width,It.height,0,qe,ke,It.data)}}else{H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,qe,ke,Re[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,vt,qe,ke,Re[de]);for(let $e=0;$e<Te.length;$e++){const pt=Te[$e];H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,0,0,qe,ke,pt.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,$e+1,vt,qe,ke,pt.image[de])}}}y(E)&&x(s.TEXTURE_CUBE_MAP),fe.__version=me.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function pe(N,E,G,ue,me,fe){const je=l.convert(G.format,G.colorSpace),Ae=l.convert(G.type),Je=P(G.internalFormat,je,Ae,G.colorSpace),lt=r.get(E),Se=r.get(G);if(Se.__renderTarget=E,!lt.__hasExternalTextures){const Re=Math.max(1,E.width>>fe),Ke=Math.max(1,E.height>>fe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,Je,Re,Ke,E.depth,0,je,Ae,null):t.texImage2D(me,fe,Je,Re,Ke,0,je,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,me,Se.__webglTexture,0,D(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,me,Se.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(N,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const ue=E.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,fe=R(E.stencilBuffer,me),je=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(E),fe,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(E),fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,N)}else{const ue=E.textures;for(let me=0;me<ue.length;me++){const fe=ue[me],je=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Je=P(fe.internalFormat,je,Ae,fe.colorSpace);ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(E),Je,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(E),Je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(N,E,G){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const lt=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let Re;E.depthTexture.format===tr?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===ss&&(Re=s.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Re,E.width,E.height,0,lt,Se,null)}}else q(E.depthTexture,0);const fe=me.__webglTexture,je=D(E),Ae=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Je=E.depthTexture.format===ss?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===tr)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Ae,fe,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Ae,fe,0);else if(E.depthTexture.format===ss)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Ae,fe,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function ct(N){const E=r.get(N),G=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ue=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ue}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ue=0;ue<6;ue++)We(E.__webglFramebuffer[ue],N,ue);else{const ue=N.texture.mipmaps;ue&&ue.length>0?We(E.__webglFramebuffer[0],N,0):We(E.__webglFramebuffer,N,0)}else if(G){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=s.createRenderbuffer(),Ie(E.__webglDepthbuffer[ue],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}else{const ue=N.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ie(E.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(N,E,G){const ue=r.get(N);E!==void 0&&pe(ue.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ct(N)}function ht(N){const E=N.texture,G=r.get(N),ue=r.get(E);N.addEventListener("dispose",O);const me=N.textures,fe=N.isWebGLCubeRenderTarget===!0,je=me.length>1;if(je||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,u.memory.textures++),fe){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Je=0;Je<E.mipmaps.length;Je++)G.__webglFramebuffer[Ae][Je]=s.createFramebuffer()}else G.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ae=0,Je=me.length;Ae<Je;Ae++){const lt=r.get(me[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&ot(N)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Je=me[Ae];G.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const lt=l.convert(Je.format,Je.colorSpace),Se=l.convert(Je.type),Re=P(Je.internalFormat,lt,Se,Je.colorSpace,N.isXRRenderTarget===!0),Ke=D(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Re,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Ae][Je],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je);else pe(G.__webglFramebuffer[Ae],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ae=0,Je=me.length;Ae<Je;Ae++){const lt=me[Ae],Se=r.get(lt);let Re=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Se.__webglTexture),Y(Re,lt),pe(G.__webglFramebuffer,N,lt,s.COLOR_ATTACHMENT0+Ae,Re,0),y(lt)&&x(Re)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),Y(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Je],N,E,s.COLOR_ATTACHMENT0,Ae,Je);else pe(G.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&x(Ae),t.unbindTexture()}N.depthBuffer&&ct(N)}function ve(N){const E=N.textures;for(let G=0,ue=E.length;G<ue;G++){const me=E[G];if(y(me)){const fe=C(N),je=r.get(me).__webglTexture;t.bindTexture(fe,je),x(fe),t.unbindTexture()}}}const Me=[],_e=[];function Ne(N){if(N.samples>0){if(ot(N)===!1){const E=N.textures,G=N.width,ue=N.height;let me=s.COLOR_BUFFER_BIT;const fe=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(N),Ae=E.length>1;if(Ae)for(let lt=0;lt<E.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Je=N.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,G,ue,0,0,G,ue,me,s.NEAREST),p===!0&&(Me.length=0,_e.length=0,Me.push(s.COLOR_ATTACHMENT0+lt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Me.push(fe),_e.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let lt=0;lt<E.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,je.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function D(N){return Math.min(o.maxSamples,N.samples)}function ot(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(N){const E=u.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function rt(N,E){const G=N.colorSpace,ue=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==no&&G!==Lr&&(Rt.getTransfer(G)===Ut?(ue!==vi||me!==ri)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),E}function Pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=ne,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=Z,this.rebindTextures=Lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hw(s,e){function t(r,o=Lr){let l;const u=Rt.getTransfer(o);if(r===ri)return s.UNSIGNED_BYTE;if(r===Yd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===y0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===S0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===_0)return s.BYTE;if(r===x0)return s.SHORT;if(r===ia)return s.UNSIGNED_SHORT;if(r===jd)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===er)return s.HALF_FLOAT;if(r===M0)return s.ALPHA;if(r===E0)return s.RGB;if(r===vi)return s.RGBA;if(r===tr)return s.DEPTH_COMPONENT;if(r===ss)return s.DEPTH_STENCIL;if(r===T0)return s.RED;if(r===$d)return s.RED_INTEGER;if(r===to)return s.RG;if(r===Zd)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===nc||r===ic||r===rc||r===sc)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===nc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===nc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===id||r===rd||r===sd||r===od)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===id)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===od)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ad||r===ld||r===cd||r===ud||r===fd||r===dd||r===hd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ad||r===ld)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===cd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===ud)return l.COMPRESSED_R11_EAC;if(r===fd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===dd)return l.COMPRESSED_RG11_EAC;if(r===hd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===wd||r===Ad||r===bd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===pd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===md)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_d)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Md)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ed)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Td)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ad)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cd||r===Rd||r===Pd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Cd)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ld||r===Nd||r===Dd||r===Id)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Ld)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Nd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Id)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ra?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new U0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Di({vertexShader:pw,fragmentShader:mw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new pa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vw extends so{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,h=null,v=null,_=null,g=null,S=null,M=null;const A=typeof XRWebGLBinding<"u",y=new gw,x={},C=t.getContextAttributes();let P=null,R=null;const k=[],I=[],O=new Ge;let T=null;const L=new ii;L.viewport=new Zt;const se=new ii;se.viewport=new Zt;const B=[L,se],ne=new CS;let K=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=k[re];return ge===void 0&&(ge=new gf,k[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=k[re];return ge===void 0&&(ge=new gf,k[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=k[re];return ge===void 0&&(ge=new gf,k[re]=ge),ge.getHandSpace()};function q(re){const ge=I.indexOf(re.inputSource);if(ge===-1)return;const pe=k[ge];pe!==void 0&&(pe.update(re.inputSource,re.frame,h||u),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function $(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",V);for(let re=0;re<k.length;re++){const ge=I[re];ge!==null&&(I[re]=null,k[re].disconnect(ge))}K=null,ae=null,y.reset();for(const re in x)delete x[re];e.setRenderTarget(P),S=null,g=null,_=null,o=null,R=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",$),o.addEventListener("inputsourceschange",V),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,We=null;C.depth&&(We=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=C.stencil?ss:tr,Ie=C.stencil?ra:Ni);const ct={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(ct),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Pi(g.textureWidth,g.textureHeight,{format:vi,type:ri,depthTexture:new oa(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Pi(S.framebufferWidth,S.framebufferHeight,{format:vi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),et.setContext(o),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(re){for(let ge=0;ge<re.removed.length;ge++){const pe=re.removed[ge],Ie=I.indexOf(pe);Ie>=0&&(I[Ie]=null,k[Ie].disconnect(pe))}for(let ge=0;ge<re.added.length;ge++){const pe=re.added[ge];let Ie=I.indexOf(pe);if(Ie===-1){for(let ct=0;ct<k.length;ct++)if(ct>=I.length){I.push(pe),Ie=ct;break}else if(I[ct]===null){I[ct]=pe,Ie=ct;break}if(Ie===-1)break}const We=k[Ie];We&&We.connect(pe)}}const Z=new X,Q=new X;function ce(re,ge,pe){Z.setFromMatrixPosition(ge.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const Ie=Z.distanceTo(Q),We=ge.projectionMatrix.elements,ct=pe.projectionMatrix.elements,Lt=We[14]/(We[10]-1),ht=We[14]/(We[10]+1),ve=(We[9]+1)/We[5],Me=(We[9]-1)/We[5],_e=(We[8]-1)/We[0],Ne=(ct[8]+1)/ct[0],D=Lt*_e,ot=Lt*Ne,Ue=Ie/(-_e+Ne),rt=Ue*-_e;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(rt),re.translateZ(Ue),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),We[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Pe=Lt+Ue,N=ht+Ue,E=D-rt,G=ot+(Ie-rt),ue=ve*ht/N*Pe,me=Me*ht/N*Pe;re.projectionMatrix.makePerspective(E,G,ue,me,Pe,N),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function F(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let ge=re.near,pe=re.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),ne.near=se.near=L.near=ge,ne.far=se.far=L.far=pe,(K!==ne.near||ae!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),K=ne.near,ae=ne.far),ne.layers.mask=re.layers.mask|6,L.layers.mask=ne.layers.mask&-5,se.layers.mask=ne.layers.mask&-3;const Ie=re.parent,We=ne.cameras;F(ne,Ie);for(let ct=0;ct<We.length;ct++)F(We[ct],Ie);We.length===2?ce(ne,L,se):ne.projectionMatrix.copy(L.projectionMatrix),Y(re,ne,Ie)};function Y(re,ge,pe){pe===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=sa*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(re){p=re,g!==null&&(g.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(re){return x[re]};let Ce=null;function Xe(re,ge){if(v=ge.getViewerPose(h||u),M=ge,v!==null){const pe=v.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Ie=!1;pe.length!==ne.cameras.length&&(ne.cameras.length=0,Ie=!0);for(let ht=0;ht<pe.length;ht++){const ve=pe[ht];let Me=null;if(S!==null)Me=S.getViewport(ve);else{const Ne=_.getViewSubImage(g,ve);Me=Ne.viewport,ht===0&&(e.setRenderTargetTextures(R,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(R))}let _e=B[ht];_e===void 0&&(_e=new ii,_e.layers.enable(ht),_e.viewport=new Zt,B[ht]=_e),_e.matrix.fromArray(ve.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ve.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Me.x,Me.y,Me.width,Me.height),ht===0&&(ne.matrix.copy(_e.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ie===!0&&ne.cameras.push(_e)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const ht=_.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(We&&We.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<pe.length;ht++){const ve=pe[ht].camera;if(ve){let Me=x[ve];Me||(Me=new U0,x[ve]=Me);const _e=_.getCameraImage(ve);Me.sourceTexture=_e}}}}for(let pe=0;pe<k.length;pe++){const Ie=I[pe],We=k[pe];Ie!==null&&We!==void 0&&We.update(Ie,ge,h||u)}Ce&&Ce(re,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),M=null}const et=new Y0;et.setAnimationLoop(Xe),this.setAnimationLoop=function(re){Ce=re},this.dispose=function(){}}}const es=new nr,_w=new jt;function xw(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,W0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,C,P,R){x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),A(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,C,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Un&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Un&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=e.get(x),P=C.envMap,R=C.envMapRotation;P&&(y.envMap.value=P,es.copy(R),es.x*=-1,es.y*=-1,es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),y.envMapRotation.value.setFromMatrix4(_w.makeRotationFromEuler(es)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,C,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Un&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const C=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function yw(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,P){const R=P.program;r.uniformBlockBinding(C,R)}function h(C,P){let R=o[C.id];R===void 0&&(M(C),R=v(C),o[C.id]=R,C.addEventListener("dispose",y));const k=P.program;r.updateUBOMapping(C,k);const I=e.render.frame;l[C.id]!==I&&(g(C),l[C.id]=I)}function v(C){const P=_();C.__bindingPointIndex=P;const R=s.createBuffer(),k=C.__size,I=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,k,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function _(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],R=C.uniforms,k=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,O=R.length;I<O;I++){const T=Array.isArray(R[I])?R[I]:[R[I]];for(let L=0,se=T.length;L<se;L++){const B=T[L];if(S(B,I,L,k)===!0){const ne=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let ae=0;for(let q=0;q<K.length;q++){const $=K[q],V=A($);typeof $=="number"||typeof $=="boolean"?(B.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,ne+ae,B.__data)):$.isMatrix3?(B.__data[0]=$.elements[0],B.__data[1]=$.elements[1],B.__data[2]=$.elements[2],B.__data[3]=0,B.__data[4]=$.elements[3],B.__data[5]=$.elements[4],B.__data[6]=$.elements[5],B.__data[7]=0,B.__data[8]=$.elements[6],B.__data[9]=$.elements[7],B.__data[10]=$.elements[8],B.__data[11]=0):($.toArray(B.__data,ae),ae+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,P,R,k){const I=C.value,O=P+"_"+R;if(k[O]===void 0)return typeof I=="number"||typeof I=="boolean"?k[O]=I:k[O]=I.clone(),!0;{const T=k[O];if(typeof I=="number"||typeof I=="boolean"){if(T!==I)return k[O]=I,!0}else if(T.equals(I)===!1)return T.copy(I),!0}return!1}function M(C){const P=C.uniforms;let R=0;const k=16;for(let O=0,T=P.length;O<T;O++){const L=Array.isArray(P[O])?P[O]:[P[O]];for(let se=0,B=L.length;se<B;se++){const ne=L[se],K=Array.isArray(ne.value)?ne.value:[ne.value];for(let ae=0,q=K.length;ae<q;ae++){const $=K[ae],V=A($),Z=R%k,Q=Z%V.boundary,ce=Z+Q;R+=Q,ce!==0&&k-ce<V.storage&&(R+=k-ce),ne.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=R,R+=V.storage}}}const I=R%k;return I>0&&(R+=k-I),C.__size=R,C.__cache={},this}function A(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",C),P}function y(C){const P=C.target;P.removeEventListener("dispose",y);const R=u.indexOf(P.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:h,dispose:x}}const Sw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function Mw(){return Ti===null&&(Ti=new Ry(Sw,16,16,to,er),Ti.name="DFG_LUT",Ti.minFilter=xn,Ti.magFilter=xn,Ti.wrapS=Ki,Ti.wrapT=Ki,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class Ew{constructor(e={}){const{canvas:t=Xx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ri}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=S,y=new Set([Kd,Zd,$d]),x=new Set([ri,Ni,ia,ra,Yd,qd]),C=new Uint32Array(4),P=new Int32Array(4);let R=null,k=null;const I=[],O=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let se=!1;this._outputColorSpace=ni;let B=0,ne=0,K=null,ae=-1,q=null;const $=new Zt,V=new Zt;let Z=null;const Q=new wt(0);let ce=0,F=t.width,Y=t.height,Ce=1,Xe=null,et=null;const re=new Zt(0,0,F,Y),ge=new Zt(0,0,F,Y);let pe=!1;const Ie=new N0;let We=!1,ct=!1;const Lt=new jt,ht=new X,ve=new Zt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ne(){return K===null?Ce:1}let D=r;function ot(b,j){return t.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xd}`),t.addEventListener("webglcontextlost",$e,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",It,!1),D===null){const j="webgl2";if(D=ot(j,b),D===null)throw ot(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ct("WebGLRenderer: "+b.message),b}let Ue,rt,Pe,N,E,G,ue,me,fe,je,Ae,Je,lt,Se,Re,Ke,qe,ke,vt,H,Le,we,Be;function Te(){Ue=new E1(D),Ue.init(),Le=new hw(D,Ue),rt=new m1(D,Ue,e,Le),Pe=new fw(D,Ue),rt.reversedDepthBuffer&&g&&Pe.buffers.depth.setReversed(!0),N=new A1(D),E=new KT,G=new dw(D,Ue,Pe,E,rt,Le,N),ue=new M1(L),me=new LS(D),we=new h1(D,me),fe=new T1(D,me,N,we),je=new C1(D,fe,me,we,N),ke=new b1(D,rt,G),Re=new g1(E),Ae=new ZT(L,ue,Ue,rt,we,Re),Je=new xw(L,E),lt=new QT,Se=new sw(Ue),qe=new d1(L,ue,Pe,je,M,p),Ke=new uw(L,je,rt),Be=new yw(D,N,rt,Pe),vt=new p1(D,Ue,N),H=new w1(D,Ue,N),N.programs=Ae.programs,L.capabilities=rt,L.extensions=Ue,L.properties=E,L.renderLists=lt,L.shadowMap=Ke,L.state=Pe,L.info=N}Te(),A!==ri&&(T=new P1(A,t.width,t.height,o,l));const de=new vw(L,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(b){b!==void 0&&(Ce=b,this.setSize(F,Y,!1))},this.getSize=function(b){return b.set(F,Y)},this.setSize=function(b,j,le=!0){if(de.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,Y=j,t.width=Math.floor(b*Ce),t.height=Math.floor(j*Ce),le===!0&&(t.style.width=b+"px",t.style.height=j+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(F*Ce,Y*Ce).floor()},this.setDrawingBufferSize=function(b,j,le){F=b,Y=j,Ce=le,t.width=Math.floor(b*le),t.height=Math.floor(j*le),this.setViewport(0,0,b,j)},this.setEffects=function(b){if(A===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let j=0;j<b.length;j++)if(b[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,j,le,ie){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,j,le,ie),Pe.viewport($.copy(re).multiplyScalar(Ce).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,j,le,ie){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,j,le,ie),Pe.scissor(V.copy(ge).multiplyScalar(Ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){Pe.setScissorTest(pe=b)},this.setOpaqueSort=function(b){Xe=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(b=!0,j=!0,le=!0){let ie=0;if(b){let ee=!1;if(K!==null){const Fe=K.texture.format;ee=y.has(Fe)}if(ee){const Fe=K.texture.type,He=x.has(Fe),De=qe.getClearColor(),ze=qe.getClearAlpha(),it=De.r,at=De.g,_t=De.b;He?(C[0]=it,C[1]=at,C[2]=_t,C[3]=ze,D.clearBufferuiv(D.COLOR,0,C)):(P[0]=it,P[1]=at,P[2]=_t,P[3]=ze,D.clearBufferiv(D.COLOR,0,P))}else ie|=D.COLOR_BUFFER_BIT}j&&(ie|=D.DEPTH_BUFFER_BIT),le&&(ie|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&D.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$e,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),qe.dispose(),lt.dispose(),Se.dispose(),E.dispose(),ue.dispose(),je.dispose(),we.dispose(),Be.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",ir),de.removeEventListener("sessionend",Ir),Yn.stop()};function $e(b){b.preventDefault(),Gm("WebGLRenderer: Context Lost."),se=!0}function pt(){Gm("WebGLRenderer: Context Restored."),se=!1;const b=N.autoReset,j=Ke.enabled,le=Ke.autoUpdate,ie=Ke.needsUpdate,ee=Ke.type;Te(),N.autoReset=b,Ke.enabled=j,Ke.autoUpdate=le,Ke.needsUpdate=ie,Ke.type=ee}function It(b){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function At(b){const j=b.target;j.removeEventListener("dispose",At),jn(j)}function jn(b){yn(b),E.remove(b)}function yn(b){const j=E.get(b).programs;j!==void 0&&(j.forEach(function(le){Ae.releaseProgram(le)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,le,ie,ee,Fe){j===null&&(j=Me);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,De=_a(b,j,le,ie,ee);Pe.setMaterial(ie,He);let ze=le.index,it=1;if(ie.wireframe===!0){if(ze=fe.getWireframeAttribute(le),ze===void 0)return;it=2}const at=le.drawRange,_t=le.attributes.position;let st=at.start*it,Dt=(at.start+at.count)*it;Fe!==null&&(st=Math.max(st,Fe.start*it),Dt=Math.min(Dt,(Fe.start+Fe.count)*it)),ze!==null?(st=Math.max(st,0),Dt=Math.min(Dt,ze.count)):_t!=null&&(st=Math.max(st,0),Dt=Math.min(Dt,_t.count));const Ot=Dt-st;if(Ot<0||Ot===1/0)return;we.setup(ee,ie,De,le,ze);let Ft,Tt=vt;if(ze!==null&&(Ft=me.get(ze),Tt=H,Tt.setIndex(Ft)),ee.isMesh)ie.wireframe===!0?(Pe.setLineWidth(ie.wireframeLinewidth*Ne()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(ee.isLine){let Yt=ie.linewidth;Yt===void 0&&(Yt=1),Pe.setLineWidth(Yt*Ne()),ee.isLineSegments?Tt.setMode(D.LINES):ee.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else ee.isPoints?Tt.setMode(D.POINTS):ee.isSprite&&Tt.setMode(D.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)fc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Tt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Yt=ee._multiDrawStarts,tt=ee._multiDrawCounts,Sn=ee._multiDrawCount,Et=ze?me.get(ze).bytesPerElement:1,bn=E.get(ie).currentProgram.getUniforms();for(let Cn=0;Cn<Sn;Cn++)bn.setValue(D,"_gl_DrawID",Cn),Tt.render(Yt[Cn]/Et,tt[Cn])}else if(ee.isInstancedMesh)Tt.renderInstances(st,Ot,ee.count);else if(le.isInstancedBufferGeometry){const Yt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,tt=Math.min(le.instanceCount,Yt);Tt.renderInstances(st,Ot,tt)}else Tt.render(st,Ot)};function us(b,j,le){b.transparent===!0&&b.side===Ai&&b.forceSinglePass===!1?(b.side=Un,b.needsUpdate=!0,Fr(b,j,le),b.side=Dr,b.needsUpdate=!0,Fr(b,j,le),b.side=Ai):Fr(b,j,le)}this.compile=function(b,j,le=null){le===null&&(le=b),k=Se.get(le),k.init(j),O.push(k),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(k.pushLight(ee),ee.castShadow&&k.pushShadow(ee))}),b!==le&&b.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(k.pushLight(ee),ee.castShadow&&k.pushShadow(ee))}),k.setupLights();const ie=new Set;return b.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Fe=ee.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){const De=Fe[He];us(De,le,ee),ie.add(De)}else us(Fe,le,ee),ie.add(Fe)}),k=O.pop(),ie},this.compileAsync=function(b,j,le=null){const ie=this.compile(b,j,le);return new Promise(ee=>{function Fe(){if(ie.forEach(function(He){E.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){ee(b);return}setTimeout(Fe,10)}Ue.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ui=null;function Sc(b){Ui&&Ui(b)}function ir(){Yn.stop()}function Ir(){Yn.start()}const Yn=new Y0;Yn.setAnimationLoop(Sc),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(b){Ui=b,de.setAnimationLoop(b),b===null?Yn.stop():Yn.start()},de.addEventListener("sessionstart",ir),de.addEventListener("sessionend",Ir),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(se===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,ie=T!==null&&(K===null||le)&&T.begin(L,K);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(j),j=de.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,j,K),k=Se.get(b,O.length),k.init(j),O.push(k),Lt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ie.setFromProjectionMatrix(Lt,Ci,j.reversedDepth),ct=this.localClippingEnabled,We=Re.init(this.clippingPlanes,ct),R=lt.get(b,I.length),R.init(),I.push(R),de.enabled===!0&&de.isPresenting===!0){const He=L.xr.getDepthSensingMesh();He!==null&&Ur(He,j,-1/0,L.sortObjects)}Ur(b,j,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(Xe,et),_e=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,_e&&qe.addToRenderList(R,b),this.info.render.frame++,We===!0&&Re.beginShadows();const ee=k.state.shadowsArray;if(Ke.render(ee,b,j),We===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&T.hasRenderPass())===!1){const He=R.opaque,De=R.transmissive;if(k.setupLights(),j.isArrayCamera){const ze=j.cameras;if(De.length>0)for(let it=0,at=ze.length;it<at;it++){const _t=ze[it];ga(He,De,b,_t)}_e&&qe.render(b);for(let it=0,at=ze.length;it<at;it++){const _t=ze[it];ma(R,b,_t,_t.viewport)}}else De.length>0&&ga(He,De,b,j),_e&&qe.render(b),ma(R,b,j)}K!==null&&ne===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),ie&&T.end(L),b.isScene===!0&&b.onAfterRender(L,b,j),we.resetDefaultState(),ae=-1,q=null,O.pop(),O.length>0?(k=O[O.length-1],We===!0&&Re.setGlobalState(L.clippingPlanes,k.state.camera)):k=null,I.pop(),I.length>0?R=I[I.length-1]:R=null};function Ur(b,j,le,ie){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)le=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)k.pushLight(b),b.castShadow&&k.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){ie&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const He=je.update(b),De=b.material;De.visible&&R.push(b,He,De,le,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){const He=je.update(b),De=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ve.copy(He.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(De)){const ze=He.groups;for(let it=0,at=ze.length;it<at;it++){const _t=ze[it],st=De[_t.materialIndex];st&&st.visible&&R.push(b,He,st,le,ve.z,_t)}}else De.visible&&R.push(b,He,De,le,ve.z,null)}}const Fe=b.children;for(let He=0,De=Fe.length;He<De;He++)Ur(Fe[He],j,le,ie)}function ma(b,j,le,ie){const{opaque:ee,transmissive:Fe,transparent:He}=b;k.setupLightsView(le),We===!0&&Re.setGlobalState(L.clippingPlanes,le),ie&&Pe.viewport($.copy(ie)),ee.length>0&&fs(ee,j,le),Fe.length>0&&fs(Fe,j,le),He.length>0&&fs(He,j,le),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ga(b,j,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ie.id]===void 0){const st=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ie.id]=new Pi(1,1,{generateMipmaps:!0,type:st?er:ri,minFilter:rs,samples:Math.max(4,rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Fe=k.state.transmissionRenderTarget[ie.id],He=ie.viewport||$;Fe.setSize(He.z*L.transmissionResolutionScale,He.w*L.transmissionResolutionScale);const De=L.getRenderTarget(),ze=L.getActiveCubeFace(),it=L.getActiveMipmapLevel();L.setRenderTarget(Fe),L.getClearColor(Q),ce=L.getClearAlpha(),ce<1&&L.setClearColor(16777215,.5),L.clear(),_e&&qe.render(le);const at=L.toneMapping;L.toneMapping=Ri;const _t=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),k.setupLightsView(ie),We===!0&&Re.setGlobalState(L.clippingPlanes,ie),fs(b,le,ie),G.updateMultisampleRenderTarget(Fe),G.updateRenderTargetMipmap(Fe),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Dt=0,Ot=j.length;Dt<Ot;Dt++){const Ft=j[Dt],{object:Tt,geometry:Yt,material:tt,group:Sn}=Ft;if(tt.side===Ai&&Tt.layers.test(ie.layers)){const Et=tt.side;tt.side=Un,tt.needsUpdate=!0,_i(Tt,le,ie,Yt,tt,Sn),tt.side=Et,tt.needsUpdate=!0,st=!0}}st===!0&&(G.updateMultisampleRenderTarget(Fe),G.updateRenderTargetMipmap(Fe))}L.setRenderTarget(De,ze,it),L.setClearColor(Q,ce),_t!==void 0&&(ie.viewport=_t),L.toneMapping=at}function fs(b,j,le){const ie=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Fe=b.length;ee<Fe;ee++){const He=b[ee],{object:De,geometry:ze,group:it}=He;let at=He.material;at.allowOverride===!0&&ie!==null&&(at=ie),De.layers.test(le.layers)&&_i(De,j,le,ze,at,it)}}function _i(b,j,le,ie,ee,Fe){b.onBeforeRender(L,j,le,ie,ee,Fe),b.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ee.onBeforeRender(L,j,le,ie,b,Fe),ee.transparent===!0&&ee.side===Ai&&ee.forceSinglePass===!1?(ee.side=Un,ee.needsUpdate=!0,L.renderBufferDirect(le,j,ie,ee,b,Fe),ee.side=Dr,ee.needsUpdate=!0,L.renderBufferDirect(le,j,ie,ee,b,Fe),ee.side=Ai):L.renderBufferDirect(le,j,ie,ee,b,Fe),b.onAfterRender(L,j,le,ie,ee,Fe)}function Fr(b,j,le){j.isScene!==!0&&(j=Me);const ie=E.get(b),ee=k.state.lights,Fe=k.state.shadowsArray,He=ee.state.version,De=Ae.getParameters(b,ee.state,Fe,j,le),ze=Ae.getProgramCacheKey(De);let it=ie.programs;ie.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?j.environment:null,ie.fog=j.fog;const at=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ie.envMap=ue.get(b.envMap||ie.environment,at),ie.envMapRotation=ie.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,it===void 0&&(b.addEventListener("dispose",At),it=new Map,ie.programs=it);let _t=it.get(ze);if(_t!==void 0){if(ie.currentProgram===_t&&ie.lightsStateVersion===He)return va(b,De),_t}else De.uniforms=Ae.getUniforms(b),b.onBeforeCompile(De,L),_t=Ae.acquireProgram(De,ze),it.set(ze,_t),ie.uniforms=De.uniforms;const st=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(st.clippingPlanes=Re.uniform),va(b,De),ie.needsLights=ya(b),ie.lightsStateVersion=He,ie.needsLights&&(st.ambientLightColor.value=ee.state.ambient,st.lightProbe.value=ee.state.probe,st.directionalLights.value=ee.state.directional,st.directionalLightShadows.value=ee.state.directionalShadow,st.spotLights.value=ee.state.spot,st.spotLightShadows.value=ee.state.spotShadow,st.rectAreaLights.value=ee.state.rectArea,st.ltc_1.value=ee.state.rectAreaLTC1,st.ltc_2.value=ee.state.rectAreaLTC2,st.pointLights.value=ee.state.point,st.pointLightShadows.value=ee.state.pointShadow,st.hemisphereLights.value=ee.state.hemi,st.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,st.spotLightMatrix.value=ee.state.spotLightMatrix,st.spotLightMap.value=ee.state.spotLightMap,st.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=_t,ie.uniformsList=null,_t}function lo(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=ac.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function va(b,j){const le=E.get(b);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function _a(b,j,le,ie,ee){j.isScene!==!0&&(j=Me),G.resetTextureUnits();const Fe=j.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?j.environment:null,De=K===null?L.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:no,ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,it=ue.get(ie.envMap||He,ze),at=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,_t=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Ft=Ri;ie.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ft=L.toneMapping);const Tt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Yt=Tt!==void 0?Tt.length:0,tt=E.get(ie),Sn=k.state.lights;if(We===!0&&(ct===!0||b!==q)){const qt=b===q&&ie.id===ae;Re.setState(ie,b,qt)}let Et=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Sn.state.version||tt.outputColorSpace!==De||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==it||ie.fog===!0&&tt.fog!==Fe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Re.numPlanes||tt.numIntersection!==Re.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==_t||tt.morphTargets!==st||tt.morphNormals!==Dt||tt.morphColors!==Ot||tt.toneMapping!==Ft||tt.morphTargetsCount!==Yt)&&(Et=!0):(Et=!0,tt.__version=ie.version);let bn=tt.currentProgram;Et===!0&&(bn=Fr(ie,j,ee));let Cn=!1,On=!1,rr=!1;const Nt=bn.getUniforms(),mt=tt.uniforms;if(Pe.useProgram(bn.program)&&(Cn=!0,On=!0,rr=!0),ie.id!==ae&&(ae=ie.id,On=!0),Cn||q!==b){Pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Nt.setValue(D,"projectionMatrix",b.projectionMatrix),Nt.setValue(D,"viewMatrix",b.matrixWorldInverse);const qn=Nt.map.cameraPosition;qn!==void 0&&qn.setValue(D,ht.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,On=!0,rr=!0)}if(tt.needsLights&&(Sn.state.directionalShadowMap.length>0&&Nt.setValue(D,"directionalShadowMap",Sn.state.directionalShadowMap,G),Sn.state.spotShadowMap.length>0&&Nt.setValue(D,"spotShadowMap",Sn.state.spotShadowMap,G),Sn.state.pointShadowMap.length>0&&Nt.setValue(D,"pointShadowMap",Sn.state.pointShadowMap,G)),ee.isSkinnedMesh){Nt.setOptional(D,ee,"bindMatrix"),Nt.setOptional(D,ee,"bindMatrixInverse");const qt=ee.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(D,"boneTexture",qt.boneTexture,G))}ee.isBatchedMesh&&(Nt.setOptional(D,ee,"batchingTexture"),Nt.setValue(D,"batchingTexture",ee._matricesTexture,G),Nt.setOptional(D,ee,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",ee._indirectTexture,G),Nt.setOptional(D,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",ee._colorsTexture,G));const oi=le.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&ke.update(ee,le,bn),(On||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Nt.setValue(D,"receiveShadow",ee.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&j.environment!==null&&(mt.envMapIntensity.value=j.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=Mw()),On&&(Nt.setValue(D,"toneMappingExposure",L.toneMappingExposure),tt.needsLights&&xa(mt,rr),Fe&&ie.fog===!0&&Je.refreshFogUniforms(mt,Fe),Je.refreshMaterialUniforms(mt,ie,Ce,Y,k.state.transmissionRenderTarget[b.id]),ac.upload(D,lo(tt),mt,G)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(ac.upload(D,lo(tt),mt,G),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(D,"center",ee.center),Nt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),Nt.setValue(D,"normalMatrix",ee.normalMatrix),Nt.setValue(D,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let qn=0,Fi=qt.length;qn<Fi;qn++){const co=qt[qn];Be.update(co,bn),Be.bind(co,bn)}}return bn}function xa(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function ya(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,j,le){const ie=E.get(b);ie.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=j,E.get(b.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,j){const le=E.get(b);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const Sa=D.createFramebuffer();this.setRenderTarget=function(b,j=0,le=0){K=b,B=j,ne=le;let ie=null,ee=!1,Fe=!1;if(b){const De=E.get(b);if(De.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(D.FRAMEBUFFER,De.__webglFramebuffer),$.copy(b.viewport),V.copy(b.scissor),Z=b.scissorTest,Pe.viewport($),Pe.scissor(V),Pe.setScissorTest(Z),ae=-1;return}else if(De.__webglFramebuffer===void 0)G.setupRenderTarget(b);else if(De.__hasExternalTextures)G.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const at=b.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&E.has(at)&&(b.width!==at.image.width||b.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Fe=!0);const it=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(it[j])?ie=it[j][le]:ie=it[j],ee=!0):b.samples>0&&G.useMultisampledRTT(b)===!1?ie=E.get(b).__webglMultisampledFramebuffer:Array.isArray(it)?ie=it[le]:ie=it,$.copy(b.viewport),V.copy(b.scissor),Z=b.scissorTest}else $.copy(re).multiplyScalar(Ce).floor(),V.copy(ge).multiplyScalar(Ce).floor(),Z=pe;if(le!==0&&(ie=Sa),Pe.bindFramebuffer(D.FRAMEBUFFER,ie)&&Pe.drawBuffers(b,ie),Pe.viewport($),Pe.scissor(V),Pe.setScissorTest(Z),ee){const De=E.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,le)}else if(Fe){const De=j;for(let ze=0;ze<b.textures.length;ze++){const it=E.get(b.textures[ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ze,it.__webglTexture,le,De)}}else if(b!==null&&le!==0){const De=E.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,le)}ae=-1},this.readRenderTargetPixels=function(b,j,le,ie,ee,Fe,He,De=0){if(!(b&&b.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze){Pe.bindFramebuffer(D.FRAMEBUFFER,ze);try{const it=b.textures[De],at=it.format,_t=it.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),!rt.textureFormatReadable(at)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(_t)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-ie&&le>=0&&le<=b.height-ee&&D.readPixels(j,le,ie,ee,Le.convert(at),Le.convert(_t),Fe)}finally{const it=K!==null?E.get(K).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(b,j,le,ie,ee,Fe,He,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze)if(j>=0&&j<=b.width-ie&&le>=0&&le<=b.height-ee){Pe.bindFramebuffer(D.FRAMEBUFFER,ze);const it=b.textures[De],at=it.format,_t=it.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),!rt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,Fe.byteLength,D.STREAM_READ),D.readPixels(j,le,ie,ee,Le.convert(at),Le.convert(_t),0);const Dt=K!==null?E.get(K).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Dt);const Ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jx(D,Ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Fe),D.deleteBuffer(st),D.deleteSync(Ot),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,j=null,le=0){const ie=Math.pow(2,-le),ee=Math.floor(b.image.width*ie),Fe=Math.floor(b.image.height*ie),He=j!==null?j.x:0,De=j!==null?j.y:0;G.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,le,0,0,He,De,ee,Fe),Pe.unbindTexture()};const Mc=D.createFramebuffer(),Ec=D.createFramebuffer();this.copyTextureToTexture=function(b,j,le=null,ie=null,ee=0,Fe=0){let He,De,ze,it,at,_t,st,Dt,Ot;const Ft=b.isCompressedTexture?b.mipmaps[Fe]:b.image;if(le!==null)He=le.max.x-le.min.x,De=le.max.y-le.min.y,ze=le.isBox3?le.max.z-le.min.z:1,it=le.min.x,at=le.min.y,_t=le.isBox3?le.min.z:0;else{const mt=Math.pow(2,-ee);He=Math.floor(Ft.width*mt),De=Math.floor(Ft.height*mt),b.isDataArrayTexture?ze=Ft.depth:b.isData3DTexture?ze=Math.floor(Ft.depth*mt):ze=1,it=0,at=0,_t=0}ie!==null?(st=ie.x,Dt=ie.y,Ot=ie.z):(st=0,Dt=0,Ot=0);const Tt=Le.convert(j.format),Yt=Le.convert(j.type);let tt;j.isData3DTexture?(G.setTexture3D(j,0),tt=D.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(G.setTexture2DArray(j,0),tt=D.TEXTURE_2D_ARRAY):(G.setTexture2D(j,0),tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment);const Sn=D.getParameter(D.UNPACK_ROW_LENGTH),Et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),Cn=D.getParameter(D.UNPACK_SKIP_ROWS),On=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,it),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_t);const rr=b.isDataArrayTexture||b.isData3DTexture,Nt=j.isDataArrayTexture||j.isData3DTexture;if(b.isDepthTexture){const mt=E.get(b),oi=E.get(j),qt=E.get(mt.__renderTarget),qn=E.get(oi.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Fi=0;Fi<ze;Fi++)rr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(b).__webglTexture,ee,_t+Fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Fe,Ot+Fi)),D.blitFramebuffer(it,at,He,De,st,Dt,He,De,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ee!==0||b.isRenderTargetTexture||E.has(b)){const mt=E.get(b),oi=E.get(j);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,Mc),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ec);for(let qt=0;qt<ze;qt++)rr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,ee,_t+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,ee),Nt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oi.__webglTexture,Fe,Ot+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,oi.__webglTexture,Fe),ee!==0?D.blitFramebuffer(it,at,He,De,st,Dt,He,De,D.COLOR_BUFFER_BIT,D.NEAREST):Nt?D.copyTexSubImage3D(tt,Fe,st,Dt,Ot+qt,it,at,He,De):D.copyTexSubImage2D(tt,Fe,st,Dt,it,at,He,De);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Yt,Ft.data):j.isCompressedArrayTexture?D.compressedTexSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Ft.data):D.texSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Yt,Ft):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Fe,st,Dt,He,De,Tt,Yt,Ft.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Fe,st,Dt,Ft.width,Ft.height,Tt,Ft.data):D.texSubImage2D(D.TEXTURE_2D,Fe,st,Dt,He,De,Tt,Yt,Ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,Sn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Cn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,On),Fe===0&&j.generateMipmaps&&D.generateMipmap(tt),Pe.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&G.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?G.setTextureCube(b,0):b.isData3DTexture?G.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?G.setTexture2DArray(b,0):G.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){B=0,ne=0,K=null,Pe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}class Tw extends sh{constructor(e){super(e)}load(e,t,r,o){const l=this,u=new AS(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){const p=l.parse(JSON.parse(f));t&&t(p)},r,o)}parse(e){return new ww(e)}}class ww{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,r="ltr"){const o=[],l=Aw(e,t,this.data,r);for(let u=0,f=l.length;u<f;u++)o.push(...l[u].toShapes());return o}}function Aw(s,e,t,r){const o=Array.from(s),l=e/t.resolution,u=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*l,f=[];let p=0,h=0;(r=="rtl"||r=="tb")&&o.reverse();for(let v=0;v<o.length;v++){const _=o[v];if(_===`
`)p=0,h-=u;else{const g=bw(_,l,p,h,t);r=="tb"?(p=0,h+=t.ascender*l):p+=g.offsetX,f.push(g.path)}}return f}function bw(s,e,t,r,o){const l=o.glyphs[s]||o.glyphs["?"];if(!l){console.error('THREE.Font: character "'+s+'" does not exists in font family '+o.familyName+".");return}const u=new RS;let f,p,h,v,_,g,S,M;if(l.o){const A=l._cachedOutline||(l._cachedOutline=l.o.split(" "));for(let y=0,x=A.length;y<x;)switch(A[y++]){case"m":f=A[y++]*e+t,p=A[y++]*e+r,u.moveTo(f,p);break;case"l":f=A[y++]*e+t,p=A[y++]*e+r,u.lineTo(f,p);break;case"q":h=A[y++]*e+t,v=A[y++]*e+r,_=A[y++]*e+t,g=A[y++]*e+r,u.quadraticCurveTo(_,g,h,v);break;case"b":h=A[y++]*e+t,v=A[y++]*e+r,_=A[y++]*e+t,g=A[y++]*e+r,S=A[y++]*e+t,M=A[y++]*e+r,u.bezierCurveTo(_,g,S,M,h,v);break}}return{offsetX:l.ha*e,path:u}}class Cw extends rh{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const o=r.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}const Rw=60,Pw=.1,Lw=1e3,Nw=0,Dw=-.5,Iw=10,Uw=0,Fw=0,Ow=!0,kw=2,Bw=459023,zw=0,Vw=0,Hw=0,Gw=0,Ww=0,Xw=0,Vg=32,jw=16777215,Yw=16777215,qw=.0035,$w=-.005,Zw="MTRX",Hg=4.5,Gg=12,Kw=.5,Jw=.01,Qw="/fonts/Kode_Mono_Regular.json",eA=.2,tA=200,nA=.1,iA=16777215,Wg=8,Xg=320,jg=220,Yg=220,qg=0,$g=0,Zg=-50,rA=5,sA=-80,oA=5,aA=3.14/2,lA=5,cA=3.14/2,Vd=3,uA=200,Kg=200,fA=16777215,dA="#FF2EDB",hA="#07010f",pA=2.5,mA=.008,gA=.2,vA=1e-5,_A=7,xA=.015,yA=.08,SA="background",MA="fixed inset-0 block h-dvh w-screen pointer-events-none z-0",EA=430,TA=640,wA=1024;function xc(s){return s<=EA?{cameraFov:78,cameraY:-1,cameraZ:8,groupScale:.44,wallX:1.5,wallY:-68,pixelRatioCap:1.3,starCount:180}:s<TA?{cameraFov:74,cameraY:-.15,cameraZ:12.7,groupScale:.42,wallX:4,wallY:-72,pixelRatioCap:1.5,starCount:240}:s<wA?{cameraFov:66,cameraY:-.4,cameraZ:11.5,groupScale:.46,wallX:2.5,wallY:-76,pixelRatioCap:1.75,starCount:360}:{cameraFov:Rw,cameraY:Dw,cameraZ:Iw,groupScale:.5,wallX:rA,wallY:sA,pixelRatioCap:kw,starCount:tA}}function Q0(s){return Math.min(window.devicePixelRatio,xc(s).pixelRatioCap)}function yc(){const s=window.visualViewport,e=Math.ceil(Math.max(window.innerWidth,s?.width??0,document.documentElement.clientWidth)),t=Math.ceil(Math.max(window.innerHeight,s?.height??0,document.documentElement.clientHeight));return{width:Math.max(1,e),height:Math.max(1,t)}}function AA(){const{width:s,height:e}=yc(),t=xc(s),r=new ii(t.cameraFov,s/e,Pw,Lw);return r.position.set(Nw,t.cameraY,t.cameraZ),r.lookAt(Uw,t.cameraY,Fw),r}function bA(s){const{width:e,height:t}=yc(),r=new Ew({canvas:s,antialias:Ow});return r.setSize(e,t,!1),r.setPixelRatio(Q0(e)),r}function CA(s,e){const{width:t,height:r}=yc(),o=xc(t);return s.aspect=t/r,s.fov=o.cameraFov,s.updateProjectionMatrix(),e.setSize(t,r,!1),e.setPixelRatio(Q0(t)),o}function Jg(s){return s-window.scrollY*xA}function Qg(s,e,t,r,o){e.scale.set(o.groupScale,o.groupScale,o.groupScale),t.position.set(o.wallX,o.wallY,oA),r.position.set(-o.wallX,o.wallY,lA),s.position.z=o.cameraZ}function e0(s){const e=s.attributes.position,t=new Float32Array(e.count*3),r=new wt(dA),o=new wt(hA),l=new wt;for(let u=0;u<e.count;u+=1){const f=e.getX(u),p=Pr.inverseLerp(-Vd/2,Vd/2,f);l.lerpColors(r,o,p);const h=u*3;t[h]=l.r,t[h+1]=l.g,t[h+2]=l.b}s.setAttribute("color",new ln(t,3))}function RA({id:s=SA,className:e=""}){const t=gi.useRef(null);return gi.useEffect(()=>{const r=t.current;if(!r)return;const o=new Ey;o.background=new wt(Bw);const l=AA(),u=bA(r),f=new $s;o.add(f);let p=l.position.y,h=l.position.y;const v=new pc(3,Vg,Vg/2),_=new Iy(new Fy(v,1),new D0({color:jw}));f.add(_);const g=new $s;g.rotation.x=eA,f.add(g),new Tw().load(Qw,K=>{const ae=new ea({color:Yw}),q=2*Math.PI/Gg;for(let $=0;$<Gg;$+=1){const V=$*q,Z=new Cw(Zw,{font:K,size:Kw,depth:Jw});Z.center();const Q=new Wn(Z,ae);Q.position.x=Math.cos(V)*Hg,Q.position.z=Math.sin(V)*Hg,Q.position.y=0,Q.lookAt(0,0,0),Q.rotation.y+=Math.PI,g.add(Q)}});const M=()=>{const K=new pc(nA,Wg,Wg/2),ae=new ea({color:iA,blending:Xf,wireframe:!1}),q=new Wn(K,ae),$=Pr.randFloat(qg-Xg/2,qg+Xg/2),V=Pr.randFloat($g-jg/2,$g+jg/2),Z=Pr.randFloat(Zg-Yg/2,Zg+Yg/2);q.position.set($,V,Z),o.add(q)},A=new pa(Vd,uA,Kg/30,Kg),y=A.clone();e0(A),e0(y);const x=new ea({wireframe:!0,side:Ai,color:fA,vertexColors:!0}),C=new Wn(A,x);o.add(C);const P=new Wn(y,x);o.add(P);const R=[new Float32Array(C.geometry.attributes.position.count),new Float32Array(P.geometry.attributes.position.count)];let k=0,I=performance.now()*.001;const O=xc(yc().width);Qg(l,f,C,P,O),p=O.cameraY,h=p,f.position.set(zw,Vw,Hw),f.rotation.set(Gw,Ww,Xw),Array(O.starCount).fill().forEach(M),C.rotation.y=aA,P.rotation.y=cA;const T=()=>{const K=CA(l,u);Qg(l,f,C,P,K),p=K.cameraY,h=Jg(p)},L=()=>{h=Jg(p)},se=window.visualViewport;window.addEventListener("resize",T),window.addEventListener("orientationchange",T),se?.addEventListener("resize",T),se?.addEventListener("scroll",T),window.addEventListener("scroll",L,{passive:!0}),T(),L();let B=0;const ne=()=>{l.position.y=Pr.lerp(l.position.y,h,yA),_&&g&&(_.rotateY(qw),g.rotateY($w));const K=performance.now()*.001,ae=Math.min(.05,K-I);I=K;const q=K;q-k>=vA&&(R.forEach($=>{for(let V=0;V<$.length;V+=1)if(Math.random()<mA)if(Math.random()<gA){const Q=(Math.random()<.5?-1:1)*(.15+Math.random()*pA);$[V]=Pr.lerp($[V],Q,.35)}else $[V]=Pr.lerp($[V],0,.6)}),k=q),[C,P].forEach(($,V)=>{const Z=$.geometry.attributes.position,Q=Z.array,ce=R[V];for(let F=0;F<Z.count;F+=1){const Y=F*3+2;Q[Y]=Pr.damp(Q[Y],ce[F],_A,ae)}Z.needsUpdate=!0}),u.render(o,l),B=requestAnimationFrame(ne)};return ne(),()=>{cancelAnimationFrame(B),window.removeEventListener("resize",T),window.removeEventListener("orientationchange",T),se?.removeEventListener("resize",T),se?.removeEventListener("scroll",T),window.removeEventListener("scroll",L),u.dispose()}},[]),he.jsx("canvas",{ref:t,id:s,className:`${MA} ${e}`.trim()})}function PA(){return he.jsx("section",{className:"bg-transparent text-cyber-text py-8 text-center min-h-[7rem]",children:he.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," MTRX Studio. All rights reserved."]})})}function LA(){return he.jsxs("div",{className:" bg-cyber-void",children:[he.jsx(RA,{id:"backbg"}),he.jsx(W_,{}),he.jsx(Z_,{}),he.jsx(X_,{}),he.jsx(ux,{}),he.jsx(PA,{})]})}H_.createRoot(document.getElementById("root")).render(he.jsx(U_.StrictMode,{children:he.jsx(LA,{})}));
