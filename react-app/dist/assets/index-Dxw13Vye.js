(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Ld(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wu={exports:{}},Ho={},Xu={exports:{}},St={};var pm;function u_(){if(pm)return St;pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function y(F,q,be){this.props=F,this.context=q,this.refs=C,this.updater=be||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function R(F,q,be){this.props=F,this.context=q,this.refs=C,this.updater=be||S}var P=R.prototype=new x;P.constructor=R,M(P,y.prototype),P.isPureReactComponent=!0;var b=Array.isArray,B=Object.prototype.hasOwnProperty,U={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(F,q,be){var Xe,et={},re=null,ge=null;if(q!=null)for(Xe in q.ref!==void 0&&(ge=q.ref),q.key!==void 0&&(re=""+q.key),q)B.call(q,Xe)&&!O.hasOwnProperty(Xe)&&(et[Xe]=q[Xe]);var pe=arguments.length-2;if(pe===1)et.children=be;else if(1<pe){for(var Ie=Array(pe),We=0;We<pe;We++)Ie[We]=arguments[We+2];et.children=Ie}if(F&&F.defaultProps)for(Xe in pe=F.defaultProps,pe)et[Xe]===void 0&&(et[Xe]=pe[Xe]);return{$$typeof:s,type:F,key:re,ref:ge,props:et,_owner:U.current}}function N(F,q){return{$$typeof:s,type:F.type,key:q,ref:F.ref,props:F.props,_owner:F._owner}}function ae(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function k(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(be){return q[be]})}var J=/\/+/g;function Q(F,q){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):q.toString(36)}function se(F,q,be,Xe,et){var re=typeof F;(re==="undefined"||re==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(re){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case s:case e:ge=!0}}if(ge)return ge=F,et=et(ge),F=Xe===""?"."+Q(ge,0):Xe,b(et)?(be="",F!=null&&(be=F.replace(J,"$&/")+"/"),se(et,q,be,"",function(We){return We})):et!=null&&(ae(et)&&(et=N(et,be+(!et.key||ge&&ge.key===et.key?"":(""+et.key).replace(J,"$&/")+"/")+F)),q.push(et)),1;if(ge=0,Xe=Xe===""?".":Xe+":",b(F))for(var pe=0;pe<F.length;pe++){re=F[pe];var Ie=Xe+Q(re,pe);ge+=se(re,q,be,Ie,et)}else if(Ie=v(F),typeof Ie=="function")for(F=Ie.call(F),pe=0;!(re=F.next()).done;)re=re.value,Ie=Xe+Q(re,pe++),ge+=se(re,q,be,Ie,et);else if(re==="object")throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ge}function X(F,q,be){if(F==null)return F;var Xe=[],et=0;return se(F,Xe,"","",function(re){return q.call(be,re,et++)}),Xe}function Z(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(be){(F._status===0||F._status===-1)&&(F._status=1,F._result=be)},function(be){(F._status===0||F._status===-1)&&(F._status=2,F._result=be)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var V={current:null},Y={transition:null},ie={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:Y,ReactCurrentOwner:U};function ce(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:X,forEach:function(F,q,be){X(F,function(){q.apply(this,arguments)},be)},count:function(F){var q=0;return X(F,function(){q++}),q},toArray:function(F){return X(F,function(q){return q})||[]},only:function(F){if(!ae(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=y,St.Fragment=t,St.Profiler=o,St.PureComponent=R,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,St.act=ce,St.cloneElement=function(F,q,be){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=M({},F.props),et=F.key,re=F.ref,ge=F._owner;if(q!=null){if(q.ref!==void 0&&(re=q.ref,ge=U.current),q.key!==void 0&&(et=""+q.key),F.type&&F.type.defaultProps)var pe=F.type.defaultProps;for(Ie in q)B.call(q,Ie)&&!O.hasOwnProperty(Ie)&&(Xe[Ie]=q[Ie]===void 0&&pe!==void 0?pe[Ie]:q[Ie])}var Ie=arguments.length-2;if(Ie===1)Xe.children=be;else if(1<Ie){pe=Array(Ie);for(var We=0;We<Ie;We++)pe[We]=arguments[We+2];Xe.children=pe}return{$$typeof:s,type:F.type,key:et,ref:re,props:Xe,_owner:ge}},St.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=w,St.createFactory=function(F){var q=w.bind(null,F);return q.type=F,q},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:f,render:F}},St.isValidElement=ae,St.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:Z}},St.memo=function(F,q){return{$$typeof:h,type:F,compare:q===void 0?null:q}},St.startTransition=function(F){var q=Y.transition;Y.transition={};try{F()}finally{Y.transition=q}},St.unstable_act=ce,St.useCallback=function(F,q){return V.current.useCallback(F,q)},St.useContext=function(F){return V.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return V.current.useDeferredValue(F)},St.useEffect=function(F,q){return V.current.useEffect(F,q)},St.useId=function(){return V.current.useId()},St.useImperativeHandle=function(F,q,be){return V.current.useImperativeHandle(F,q,be)},St.useInsertionEffect=function(F,q){return V.current.useInsertionEffect(F,q)},St.useLayoutEffect=function(F,q){return V.current.useLayoutEffect(F,q)},St.useMemo=function(F,q){return V.current.useMemo(F,q)},St.useReducer=function(F,q,be){return V.current.useReducer(F,q,be)},St.useRef=function(F){return V.current.useRef(F)},St.useState=function(F){return V.current.useState(F)},St.useSyncExternalStore=function(F,q,be){return V.current.useSyncExternalStore(F,q,be)},St.useTransition=function(){return V.current.useTransition()},St.version="18.3.1",St}var mm;function Nd(){return mm||(mm=1,Xu.exports=u_()),Xu.exports}var gm;function f_(){if(gm)return Ho;gm=1;var s=Nd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var g,_={},v=null,S=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(S=p.ref);for(g in p)r.call(p,g)&&!l.hasOwnProperty(g)&&(_[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)_[g]===void 0&&(_[g]=p[g]);return{$$typeof:e,type:f,key:v,ref:S,props:_,_owner:o.current}}return Ho.Fragment=t,Ho.jsx=u,Ho.jsxs=u,Ho}var vm;function d_(){return vm||(vm=1,Wu.exports=f_()),Wu.exports}var he=d_(),pi=Nd();const h_=Ld(pi);var yl={},ju={exports:{}},In={},Yu={exports:{}},qu={};var _m;function p_(){return _m||(_m=1,(function(s){function e(Y,ie){var ce=Y.length;Y.push(ie);e:for(;0<ce;){var F=ce-1>>>1,q=Y[F];if(0<o(q,ie))Y[F]=ie,Y[ce]=q,ce=F;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ie=Y[0],ce=Y.pop();if(ce!==ie){Y[0]=ce;e:for(var F=0,q=Y.length,be=q>>>1;F<be;){var Xe=2*(F+1)-1,et=Y[Xe],re=Xe+1,ge=Y[re];if(0>o(et,ce))re<q&&0>o(ge,et)?(Y[F]=ge,Y[re]=ce,F=re):(Y[F]=et,Y[Xe]=ce,F=Xe);else if(re<q&&0>o(ge,ce))Y[F]=ge,Y[re]=ce,F=re;else break e}}return ie}function o(Y,ie){var ce=Y.sortIndex-ie.sortIndex;return ce!==0?ce:Y.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,_=null,v=3,S=!1,M=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(Y){for(var ie=t(h);ie!==null;){if(ie.callback===null)r(h);else if(ie.startTime<=Y)r(h),ie.sortIndex=ie.expirationTime,e(p,ie);else break;ie=t(h)}}function b(Y){if(C=!1,P(Y),!M)if(t(p)!==null)M=!0,Z(B);else{var ie=t(h);ie!==null&&V(b,ie.startTime-Y)}}function B(Y,ie){M=!1,C&&(C=!1,x(w),w=-1),S=!0;var ce=v;try{for(P(ie),_=t(p);_!==null&&(!(_.expirationTime>ie)||Y&&!k());){var F=_.callback;if(typeof F=="function"){_.callback=null,v=_.priorityLevel;var q=F(_.expirationTime<=ie);ie=s.unstable_now(),typeof q=="function"?_.callback=q:_===t(p)&&r(p),P(ie)}else r(p);_=t(p)}if(_!==null)var be=!0;else{var Xe=t(h);Xe!==null&&V(b,Xe.startTime-ie),be=!1}return be}finally{_=null,v=ce,S=!1}}var U=!1,O=null,w=-1,N=5,ae=-1;function k(){return!(s.unstable_now()-ae<N)}function J(){if(O!==null){var Y=s.unstable_now();ae=Y;var ie=!0;try{ie=O(!0,Y)}finally{ie?Q():(U=!1,O=null)}}else U=!1}var Q;if(typeof R=="function")Q=function(){R(J)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,X=se.port2;se.port1.onmessage=J,Q=function(){X.postMessage(null)}}else Q=function(){y(J,0)};function Z(Y){O=Y,U||(U=!0,Q())}function V(Y,ie){w=y(function(){Y(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,Z(B))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var ie=3;break;default:ie=v}var ce=v;v=ie;try{return Y()}finally{v=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,ie){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ce=v;v=Y;try{return ie()}finally{v=ce}},s.unstable_scheduleCallback=function(Y,ie,ce){var F=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?F+ce:F):ce=F,Y){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ce+q,Y={id:g++,callback:ie,priorityLevel:Y,startTime:ce,expirationTime:q,sortIndex:-1},ce>F?(Y.sortIndex=ce,e(h,Y),t(p)===null&&Y===t(h)&&(C?(x(w),w=-1):C=!0,V(b,ce-F))):(Y.sortIndex=q,e(p,Y),M||S||(M=!0,Z(B))),Y},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(Y){var ie=v;return function(){var ce=v;v=ie;try{return Y.apply(this,arguments)}finally{v=ce}}}})(qu)),qu}var xm;function m_(){return xm||(xm=1,Yu.exports=p_()),Yu.exports}var ym;function g_(){if(ym)return In;ym=1;var s=Nd(),e=m_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function v(n){return p.call(_,n)?!0:p.call(g,n)?!1:h.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,R);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,R);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,F;function q(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var be=!1;function Xe(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,I=m.length-1;1<=T&&0<=I&&d[T]!==m[I];)I--;for(;1<=T&&0<=I;T--,I--)if(d[T]!==m[I]){if(T!==1||I!==1)do if(T--,I--,0>I||d[T]!==m[I]){var z=`
`+d[T].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=T&&0<=I);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function et(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case U:return"Portal";case N:return"Profiler";case w:return"StrictMode";case Q:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case ae:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case Z:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ct(n){n._valueTracker||(n._valueTracker=We(n))}function Lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ve(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Me(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _e(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ne(n,i){_e(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function D(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||dt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ue=Array.isArray;function rt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Pe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function L(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ue(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(n){lt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Je[i]=Je[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Je.hasOwnProperty(n)&&Je[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $e=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,we=null,Be=null;function Te(n){if(n=Co(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ua(i),Le(n.stateNode,n.type,i))}}function de(n){we?Be?Be.push(n):Be=[n]:we=n}function Ze(){if(we){var n=we,i=Be;if(Be=we=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function ht(n,i){return n(i)}function It(){}var wt=!1;function Xn(n,i,a){if(wt)return n(i,a);wt=!0;try{return ht(n,i,a)}finally{wt=!1,(we!==null||Be!==null)&&(It(),Ze())}}function xn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ua(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var cs=!1;if(f)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{cs=!1}function dc(n,i,a,c,d,m,T,I,z){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ye){this.onError(ye)}}var ir=!1,Dr=null,jn=!1,Ir=null,ha={onError:function(n){ir=!0,Dr=n}};function pa(n,i,a,c,d,m,T,I,z){ir=!1,Dr=null,dc.apply(ha,arguments)}function us(n,i,a,c,d,m,T,I,z){if(pa.apply(this,arguments),ir){if(ir){var oe=Dr;ir=!1,Dr=null}else throw Error(t(198));jn||(jn=!0,Ir=oe)}}function _i(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ur(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function lo(n){if(_i(n)!==n)throw Error(t(188))}function ma(n){var i=n.alternate;if(!i){if(i=_i(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return lo(d),n;if(m===c)return lo(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,I=d.child;I;){if(I===a){T=!0,a=d,c=m;break}if(I===c){T=!0,c=d,a=m;break}I=I.sibling}if(!T){for(I=m.child;I;){if(I===a){T=!0,a=m,c=d;break}if(I===c){T=!0,c=m,a=d;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ga(n){return n=ma(n),n!==null?va(n):null}function va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=va(n);if(i!==null)return i;n=n.sibling}return null}var _a=e.unstable_scheduleCallback,xa=e.unstable_cancelCallback,hc=e.unstable_shouldYield,pc=e.unstable_requestPaint,A=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,He=e.unstable_IdlePriority,De=null,ze=null;function it(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(De,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Dt,_t=Math.log,st=Math.LN2;function Dt(n){return n>>>=0,n===0?32:31-(_t(n)/st|0)|0}var Ot=64,Ft=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var I=T&~d;I!==0?c=Tt(I):(m&=T,m!==0&&(c=Tt(m)))}else T=a&~d,T!==0?c=Tt(T):m!==0&&(c=Tt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-at(i),d=1<<a,c|=n[a],i&=~d;return c}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-at(m),I=1<<T,z=d[T];z===-1?((I&a)===0||(I&c)!==0)&&(d[T]=tt(I,i)):z<=i&&(n.expiredLanes|=I),m&=~I}}function Et(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cn(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function bn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function On(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=a}function rr(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-at(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Nt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-at(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var pt=0;function ri(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yt,Yn,Fi,co,Kd,mc=!1,ya=[],sr=null,or=null,ar=null,uo=new Map,fo=new Map,lr=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(n,i){switch(n){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":uo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(i.pointerId)}}function ho(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Co(i),i!==null&&Yn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function D0(n,i,a,c,d){switch(i){case"focusin":return sr=ho(sr,n,i,a,c,d),!0;case"dragenter":return or=ho(or,n,i,a,c,d),!0;case"mouseover":return ar=ho(ar,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return uo.set(m,ho(uo.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,fo.set(m,ho(fo.get(m)||null,n,i,a,c,d)),!0}return!1}function Jd(n){var i=Fr(n.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=Ur(a),i!==null){n.blockedOn=i,Kd(n.priority,function(){Fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=vc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vt=c,a.target.dispatchEvent(c),vt=null}else return i=Co(a),i!==null&&Yn(i),n.blockedOn=a,!1;i.shift()}return!0}function Qd(n,i,a){Sa(n)&&a.delete(i)}function I0(){mc=!1,sr!==null&&Sa(sr)&&(sr=null),or!==null&&Sa(or)&&(or=null),ar!==null&&Sa(ar)&&(ar=null),uo.forEach(Qd),fo.forEach(Qd)}function po(n,i){n.blockedOn===i&&(n.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,I0)))}function mo(n){function i(d){return po(d,n)}if(0<ya.length){po(ya[0],n);for(var a=1;a<ya.length;a++){var c=ya[a];c.blockedOn===n&&(c.blockedOn=null)}}for(sr!==null&&po(sr,n),or!==null&&po(or,n),ar!==null&&po(ar,n),uo.forEach(i),fo.forEach(i),a=0;a<lr.length;a++)c=lr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<lr.length&&(a=lr[0],a.blockedOn===null);)Jd(a),a.blockedOn===null&&lr.shift()}var fs=b.ReactCurrentBatchConfig,Ma=!0;function U0(n,i,a,c){var d=pt,m=fs.transition;fs.transition=null;try{pt=1,gc(n,i,a,c)}finally{pt=d,fs.transition=m}}function F0(n,i,a,c){var d=pt,m=fs.transition;fs.transition=null;try{pt=4,gc(n,i,a,c)}finally{pt=d,fs.transition=m}}function gc(n,i,a,c){if(Ma){var d=vc(n,i,a,c);if(d===null)Ic(n,i,c,Ea,a),$d(n,c);else if(D0(d,n,i,a,c))c.stopPropagation();else if($d(n,c),i&4&&-1<N0.indexOf(n)){for(;d!==null;){var m=Co(d);if(m!==null&&Yt(m),m=vc(n,i,a,c),m===null&&Ic(n,i,c,Ea,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Ic(n,i,c,null,a)}}var Ea=null;function vc(n,i,a,c){if(Ea=null,n=H(c),n=Fr(n),n!==null)if(i=_i(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ur(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ea=n,null}function eh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case le:return 1;case ne:return 4;case ee:case Fe:return 16;case He:return 536870912;default:return 16}default:return 16}}var cr=null,_c=null,Ta=null;function th(){if(Ta)return Ta;var n,i=_c,a=i.length,c,d="value"in cr?cr.value:cr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return Ta=d.slice(n,1<c?1-c:void 0)}function wa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function nh(){return!1}function kn(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Aa:nh,this.isPropagationStopped=nh,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=kn(ds),go=ce({},ds,{view:0,detail:0}),O0=kn(go),yc,Sc,vo,Ca=ce({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==vo&&(vo&&n.type==="mousemove"?(yc=n.screenX-vo.screenX,Sc=n.screenY-vo.screenY):Sc=yc=0,vo=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),ih=kn(Ca),k0=ce({},Ca,{dataTransfer:0}),B0=kn(k0),z0=ce({},go,{relatedTarget:0}),Mc=kn(z0),V0=ce({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),H0=kn(V0),G0=ce({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),W0=kn(G0),X0=ce({},ds,{data:0}),rh=kn(X0),j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},q0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=q0[n])?!!i[n]:!1}function Ec(){return Z0}var K0=ce({},go,{key:function(n){if(n.key){var i=j0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Y0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?wa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$0=kn(K0),J0=ce({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=kn(J0),Q0=ce({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),ev=kn(Q0),tv=ce({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=kn(tv),iv=ce({},Ca,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=kn(iv),sv=[9,13,27,32],Tc=f&&"CompositionEvent"in window,_o=null;f&&"documentMode"in document&&(_o=document.documentMode);var ov=f&&"TextEvent"in window&&!_o,oh=f&&(!Tc||_o&&8<_o&&11>=_o),ah=" ",lh=!1;function ch(n,i){switch(n){case"keyup":return sv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var hs=!1;function av(n,i){switch(n){case"compositionend":return uh(i);case"keypress":return i.which!==32?null:(lh=!0,ah);case"textInput":return n=i.data,n===ah&&lh?null:n;default:return null}}function lv(n,i){if(hs)return n==="compositionend"||!Tc&&ch(n,i)?(n=th(),Ta=_c=cr=null,hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!cv[n.type]:i==="textarea"}function dh(n,i,a,c){de(c),i=Na(i,"onChange"),0<i.length&&(a=new xc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var xo=null,yo=null;function uv(n){Ph(n,0)}function ba(n){var i=_s(n);if(Lt(i))return n}function fv(n,i){if(n==="change")return i}var hh=!1;if(f){var wc;if(f){var Ac="oninput"in document;if(!Ac){var ph=document.createElement("div");ph.setAttribute("oninput","return;"),Ac=typeof ph.oninput=="function"}wc=Ac}else wc=!1;hh=wc&&(!document.documentMode||9<document.documentMode)}function mh(){xo&&(xo.detachEvent("onpropertychange",gh),yo=xo=null)}function gh(n){if(n.propertyName==="value"&&ba(yo)){var i=[];dh(i,yo,n,H(n)),Xn(uv,i)}}function dv(n,i,a){n==="focusin"?(mh(),xo=i,yo=a,xo.attachEvent("onpropertychange",gh)):n==="focusout"&&mh()}function hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ba(yo)}function pv(n,i){if(n==="click")return ba(i)}function mv(n,i){if(n==="input"||n==="change")return ba(i)}function gv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:gv;function So(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!si(n[d],i[d]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var a=vh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function xh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?xh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function yh(){for(var n=window,i=dt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=dt(n.document)}return i}function Cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function vv(n){var i=yh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&xh(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=_h(a,m);var T=_h(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _v=f&&"documentMode"in document&&11>=document.documentMode,ps=null,bc=null,Mo=null,Rc=!1;function Sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rc||ps==null||ps!==dt(c)||(c=ps,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Mo&&So(Mo,c)||(Mo=c,c=Na(bc,"onSelect"),0<c.length&&(i=new xc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ps)))}function Ra(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ms={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Pc={},Mh={};f&&(Mh=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Pa(n){if(Pc[n])return Pc[n];if(!ms[n])return n;var i=ms[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mh)return Pc[n]=i[a];return n}var Eh=Pa("animationend"),Th=Pa("animationiteration"),wh=Pa("animationstart"),Ah=Pa("transitionend"),Ch=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){Ch.set(n,i),l(i,[n])}for(var Lc=0;Lc<bh.length;Lc++){var Nc=bh[Lc],xv=Nc.toLowerCase(),yv=Nc[0].toUpperCase()+Nc.slice(1);ur(xv,"on"+yv)}ur(Eh,"onAnimationEnd"),ur(Th,"onAnimationIteration"),ur(wh,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Eo));function Rh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,us(c,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var I=c[T],z=I.instance,oe=I.currentTarget;if(I=I.listener,z!==m&&d.isPropagationStopped())break e;Rh(d,I,oe),m=z}else for(T=0;T<c.length;T++){if(I=c[T],z=I.instance,oe=I.currentTarget,I=I.listener,z!==m&&d.isPropagationStopped())break e;Rh(d,I,oe),m=z}}}if(jn)throw n=Ir,jn=!1,Ir=null,n}function Bt(n,i){var a=i[zc];a===void 0&&(a=i[zc]=new Set);var c=n+"__bubble";a.has(c)||(Lh(i,n,2,!1),a.add(c))}function Dc(n,i,a){var c=0;i&&(c|=4),Lh(a,n,c,i)}var La="_reactListening"+Math.random().toString(36).slice(2);function To(n){if(!n[La]){n[La]=!0,r.forEach(function(a){a!=="selectionchange"&&(Sv.has(a)||Dc(a,!1,n),Dc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[La]||(i[La]=!0,Dc("selectionchange",!1,i))}}function Lh(n,i,a,c){switch(eh(i)){case 1:var d=U0;break;case 4:d=F0;break;default:d=gc}a=d.bind(null,i,a,n),d=void 0,!cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ic(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;T=T.return}for(;I!==null;){if(T=Fr(I),T===null)return;if(z=T.tag,z===5||z===6){c=m=T;continue e}I=I.parentNode}}c=c.return}Xn(function(){var oe=m,ye=H(a),Ee=[];e:{var xe=Ch.get(n);if(xe!==void 0){var Ve=xc,Ke=n;switch(n){case"keypress":if(wa(a)===0)break e;case"keydown":case"keyup":Ve=$0;break;case"focusin":Ke="focus",Ve=Mc;break;case"focusout":Ke="blur",Ve=Mc;break;case"beforeblur":case"afterblur":Ve=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=ev;break;case Eh:case Th:case wh:Ve=H0;break;case Ah:Ve=nv;break;case"scroll":Ve=O0;break;case"wheel":Ve=rv;break;case"copy":case"cut":case"paste":Ve=W0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=sh}var Qe=(i&4)!==0,qt=!Qe&&n==="scroll",$=Qe?xe!==null?xe+"Capture":null:xe;Qe=[];for(var W=oe,te;W!==null;){te=W;var Ce=te.stateNode;if(te.tag===5&&Ce!==null&&(te=Ce,$!==null&&(Ce=xn(W,$),Ce!=null&&Qe.push(wo(W,Ce,te)))),qt)break;W=W.return}0<Qe.length&&(xe=new Ve(xe,Ke,null,a,ye),Ee.push({event:xe,listeners:Qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",xe&&a!==vt&&(Ke=a.relatedTarget||a.fromElement)&&(Fr(Ke)||Ke[Oi]))break e;if((Ve||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(Ke=a.relatedTarget||a.toElement,Ve=oe,Ke=Ke?Fr(Ke):null,Ke!==null&&(qt=_i(Ke),Ke!==qt||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(Ve=null,Ke=oe),Ve!==Ke)){if(Qe=ih,Ce="onMouseLeave",$="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=sh,Ce="onPointerLeave",$="onPointerEnter",W="pointer"),qt=Ve==null?xe:_s(Ve),te=Ke==null?xe:_s(Ke),xe=new Qe(Ce,W+"leave",Ve,a,ye),xe.target=qt,xe.relatedTarget=te,Ce=null,Fr(ye)===oe&&(Qe=new Qe($,W+"enter",Ke,a,ye),Qe.target=te,Qe.relatedTarget=qt,Ce=Qe),qt=Ce,Ve&&Ke)t:{for(Qe=Ve,$=Ke,W=0,te=Qe;te;te=gs(te))W++;for(te=0,Ce=$;Ce;Ce=gs(Ce))te++;for(;0<W-te;)Qe=gs(Qe),W--;for(;0<te-W;)$=gs($),te--;for(;W--;){if(Qe===$||$!==null&&Qe===$.alternate)break t;Qe=gs(Qe),$=gs($)}Qe=null}else Qe=null;Ve!==null&&Nh(Ee,xe,Ve,Qe,!1),Ke!==null&&qt!==null&&Nh(Ee,qt,Ke,Qe,!0)}}e:{if(xe=oe?_s(oe):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var nt=fv;else if(fh(xe))if(hh)nt=mv;else{nt=hv;var ut=dv}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(nt=pv);if(nt&&(nt=nt(n,oe))){dh(Ee,nt,a,ye);break e}ut&&ut(n,xe,oe),n==="focusout"&&(ut=xe._wrapperState)&&ut.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(ut=oe?_s(oe):window,n){case"focusin":(fh(ut)||ut.contentEditable==="true")&&(ps=ut,bc=oe,Mo=null);break;case"focusout":Mo=bc=ps=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Sh(Ee,a,ye);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":Sh(Ee,a,ye)}var ft;if(Tc)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else hs?ch(n,a)&&(mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(mt="onCompositionStart");mt&&(oh&&a.locale!=="ko"&&(hs||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&hs&&(ft=th()):(cr=ye,_c="value"in cr?cr.value:cr.textContent,hs=!0)),ut=Na(oe,mt),0<ut.length&&(mt=new rh(mt,n,null,a,ye),Ee.push({event:mt,listeners:ut}),ft?mt.data=ft:(ft=uh(a),ft!==null&&(mt.data=ft)))),(ft=ov?av(n,a):lv(n,a))&&(oe=Na(oe,"onBeforeInput"),0<oe.length&&(ye=new rh("onBeforeInput","beforeinput",null,a,ye),Ee.push({event:ye,listeners:oe}),ye.data=ft))}Ph(Ee,i)})}function wo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Na(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=xn(n,a),m!=null&&c.unshift(wo(n,m,d)),m=xn(n,i),m!=null&&c.push(wo(n,m,d))),n=n.return}return c}function gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Nh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var I=a,z=I.alternate,oe=I.stateNode;if(z!==null&&z===c)break;I.tag===5&&oe!==null&&(I=oe,d?(z=xn(a,m),z!=null&&T.unshift(wo(a,z,I))):d||(z=xn(a,m),z!=null&&T.push(wo(a,z,I)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Mv=/\r\n?/g,Ev=/\u0000|\uFFFD/g;function Dh(n){return(typeof n=="string"?n:""+n).replace(Mv,`
`).replace(Ev,"")}function Da(n,i,a){if(i=Dh(i),Dh(n)!==i&&a)throw Error(t(425))}function Ia(){}var Uc=null,Fc=null;function Oc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,Tv=typeof clearTimeout=="function"?clearTimeout:void 0,Ih=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ih<"u"?function(n){return Ih.resolve(null).then(n).catch(Av)}:kc;function Av(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),mo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);mo(i)}function fr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Uh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),xi="__reactFiber$"+vs,Ao="__reactProps$"+vs,Oi="__reactContainer$"+vs,zc="__reactEvents$"+vs,Cv="__reactListeners$"+vs,bv="__reactHandles$"+vs;function Fr(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Oi]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Uh(n);n!==null;){if(a=n[xi])return a;n=Uh(n)}return i}n=a,a=n.parentNode}return null}function Co(n){return n=n[xi]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function _s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ua(n){return n[Ao]||null}var Vc=[],xs=-1;function dr(n){return{current:n}}function zt(n){0>xs||(n.current=Vc[xs],Vc[xs]=null,xs--)}function kt(n,i){xs++,Vc[xs]=n.current,n.current=i}var hr={},dn=dr(hr),Rn=dr(!1),Or=hr;function ys(n,i){var a=n.type.contextTypes;if(!a)return hr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Pn(n){return n=n.childContextTypes,n!=null}function Fa(){zt(Rn),zt(dn)}function Fh(n,i,a){if(dn.current!==hr)throw Error(t(168));kt(dn,i),kt(Rn,a)}function Oh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ge(n)||"Unknown",d));return ce({},a,c)}function Oa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||hr,Or=dn.current,kt(dn,n),kt(Rn,Rn.current),!0}function kh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Oh(n,i,Or),c.__reactInternalMemoizedMergedChildContext=n,zt(Rn),zt(dn),kt(dn,n)):zt(Rn),kt(Rn,a)}var ki=null,ka=!1,Hc=!1;function Bh(n){ki===null?ki=[n]:ki.push(n)}function Rv(n){ka=!0,Bh(n)}function pr(){if(!Hc&&ki!==null){Hc=!0;var n=0,i=pt;try{var a=ki;for(pt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ki=null,ka=!1}catch(d){throw ki!==null&&(ki=ki.slice(n+1)),_a(le,pr),d}finally{pt=i,Hc=!1}}return null}var Ss=[],Ms=0,Ba=null,za=0,qn=[],Zn=0,kr=null,Bi=1,zi="";function Br(n,i){Ss[Ms++]=za,Ss[Ms++]=Ba,Ba=n,za=i}function zh(n,i,a){qn[Zn++]=Bi,qn[Zn++]=zi,qn[Zn++]=kr,kr=n;var c=Bi;n=zi;var d=32-at(c)-1;c&=~(1<<d),a+=1;var m=32-at(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,Bi=1<<32-at(i)+d|a<<d|c,zi=m+n}else Bi=1<<m|a<<d|c,zi=n}function Gc(n){n.return!==null&&(Br(n,1),zh(n,1,0))}function Wc(n){for(;n===Ba;)Ba=Ss[--Ms],Ss[Ms]=null,za=Ss[--Ms],Ss[Ms]=null;for(;n===kr;)kr=qn[--Zn],qn[Zn]=null,zi=qn[--Zn],qn[Zn]=null,Bi=qn[--Zn],qn[Zn]=null}var Bn=null,zn=null,Vt=!1,oi=null;function Vh(n,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=fr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=kr!==null?{id:Bi,overflow:zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function jc(n){if(Vt){var i=zn;if(i){var a=i;if(!Hh(n,i)){if(Xc(n))throw Error(t(418));i=fr(a.nextSibling);var c=Bn;i&&Hh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,Bn=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Bn=n}}}function Gh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Va(n){if(n!==Bn)return!1;if(!Vt)return Gh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Oc(n.type,n.memoizedProps)),i&&(i=zn)){if(Xc(n))throw Wh(),Error(t(418));for(;i;)Vh(n,i),i=fr(i.nextSibling)}if(Gh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=fr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?fr(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=zn;n;)n=fr(n.nextSibling)}function Es(){zn=Bn=null,Vt=!1}function Yc(n){oi===null?oi=[n]:oi.push(n)}var Pv=b.ReactCurrentBatchConfig;function bo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var I=d.refs;T===null?delete I[m]:I[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ha(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function jh(n){function i($,W){if(n){var te=$.deletions;te===null?($.deletions=[W],$.flags|=16):te.push(W)}}function a($,W){if(!n)return null;for(;W!==null;)i($,W),W=W.sibling;return null}function c($,W){for($=new Map;W!==null;)W.key!==null?$.set(W.key,W):$.set(W.index,W),W=W.sibling;return $}function d($,W){return $=Mr($,W),$.index=0,$.sibling=null,$}function m($,W,te){return $.index=te,n?(te=$.alternate,te!==null?(te=te.index,te<W?($.flags|=2,W):te):($.flags|=2,W)):($.flags|=1048576,W)}function T($){return n&&$.alternate===null&&($.flags|=2),$}function I($,W,te,Ce){return W===null||W.tag!==6?(W=ku(te,$.mode,Ce),W.return=$,W):(W=d(W,te),W.return=$,W)}function z($,W,te,Ce){var nt=te.type;return nt===O?ye($,W,te.props.children,Ce,te.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Z&&Xh(nt)===W.type)?(Ce=d(W,te.props),Ce.ref=bo($,W,te),Ce.return=$,Ce):(Ce=dl(te.type,te.key,te.props,null,$.mode,Ce),Ce.ref=bo($,W,te),Ce.return=$,Ce)}function oe($,W,te,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Bu(te,$.mode,Ce),W.return=$,W):(W=d(W,te.children||[]),W.return=$,W)}function ye($,W,te,Ce,nt){return W===null||W.tag!==7?(W=Yr(te,$.mode,Ce,nt),W.return=$,W):(W=d(W,te),W.return=$,W)}function Ee($,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=ku(""+W,$.mode,te),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return te=dl(W.type,W.key,W.props,null,$.mode,te),te.ref=bo($,null,W),te.return=$,te;case U:return W=Bu(W,$.mode,te),W.return=$,W;case Z:var Ce=W._init;return Ee($,Ce(W._payload),te)}if(Ue(W)||ie(W))return W=Yr(W,$.mode,te,null),W.return=$,W;Ha($,W)}return null}function xe($,W,te,Ce){var nt=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return nt!==null?null:I($,W,""+te,Ce);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case B:return te.key===nt?z($,W,te,Ce):null;case U:return te.key===nt?oe($,W,te,Ce):null;case Z:return nt=te._init,xe($,W,nt(te._payload),Ce)}if(Ue(te)||ie(te))return nt!==null?null:ye($,W,te,Ce,null);Ha($,te)}return null}function Ve($,W,te,Ce,nt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return $=$.get(te)||null,I(W,$,""+Ce,nt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return $=$.get(Ce.key===null?te:Ce.key)||null,z(W,$,Ce,nt);case U:return $=$.get(Ce.key===null?te:Ce.key)||null,oe(W,$,Ce,nt);case Z:var ut=Ce._init;return Ve($,W,te,ut(Ce._payload),nt)}if(Ue(Ce)||ie(Ce))return $=$.get(te)||null,ye(W,$,Ce,nt,null);Ha(W,Ce)}return null}function Ke($,W,te,Ce){for(var nt=null,ut=null,ft=W,mt=W=0,on=null;ft!==null&&mt<te.length;mt++){ft.index>mt?(on=ft,ft=null):on=ft.sibling;var Pt=xe($,ft,te[mt],Ce);if(Pt===null){ft===null&&(ft=on);break}n&&ft&&Pt.alternate===null&&i($,ft),W=m(Pt,W,mt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt,ft=on}if(mt===te.length)return a($,ft),Vt&&Br($,mt),nt;if(ft===null){for(;mt<te.length;mt++)ft=Ee($,te[mt],Ce),ft!==null&&(W=m(ft,W,mt),ut===null?nt=ft:ut.sibling=ft,ut=ft);return Vt&&Br($,mt),nt}for(ft=c($,ft);mt<te.length;mt++)on=Ve(ft,$,mt,te[mt],Ce),on!==null&&(n&&on.alternate!==null&&ft.delete(on.key===null?mt:on.key),W=m(on,W,mt),ut===null?nt=on:ut.sibling=on,ut=on);return n&&ft.forEach(function(Er){return i($,Er)}),Vt&&Br($,mt),nt}function Qe($,W,te,Ce){var nt=ie(te);if(typeof nt!="function")throw Error(t(150));if(te=nt.call(te),te==null)throw Error(t(151));for(var ut=nt=null,ft=W,mt=W=0,on=null,Pt=te.next();ft!==null&&!Pt.done;mt++,Pt=te.next()){ft.index>mt?(on=ft,ft=null):on=ft.sibling;var Er=xe($,ft,Pt.value,Ce);if(Er===null){ft===null&&(ft=on);break}n&&ft&&Er.alternate===null&&i($,ft),W=m(Er,W,mt),ut===null?nt=Er:ut.sibling=Er,ut=Er,ft=on}if(Pt.done)return a($,ft),Vt&&Br($,mt),nt;if(ft===null){for(;!Pt.done;mt++,Pt=te.next())Pt=Ee($,Pt.value,Ce),Pt!==null&&(W=m(Pt,W,mt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt);return Vt&&Br($,mt),nt}for(ft=c($,ft);!Pt.done;mt++,Pt=te.next())Pt=Ve(ft,$,mt,Pt.value,Ce),Pt!==null&&(n&&Pt.alternate!==null&&ft.delete(Pt.key===null?mt:Pt.key),W=m(Pt,W,mt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt);return n&&ft.forEach(function(c_){return i($,c_)}),Vt&&Br($,mt),nt}function qt($,W,te,Ce){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case B:e:{for(var nt=te.key,ut=W;ut!==null;){if(ut.key===nt){if(nt=te.type,nt===O){if(ut.tag===7){a($,ut.sibling),W=d(ut,te.props.children),W.return=$,$=W;break e}}else if(ut.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Z&&Xh(nt)===ut.type){a($,ut.sibling),W=d(ut,te.props),W.ref=bo($,ut,te),W.return=$,$=W;break e}a($,ut);break}else i($,ut);ut=ut.sibling}te.type===O?(W=Yr(te.props.children,$.mode,Ce,te.key),W.return=$,$=W):(Ce=dl(te.type,te.key,te.props,null,$.mode,Ce),Ce.ref=bo($,W,te),Ce.return=$,$=Ce)}return T($);case U:e:{for(ut=te.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a($,W.sibling),W=d(W,te.children||[]),W.return=$,$=W;break e}else{a($,W);break}else i($,W);W=W.sibling}W=Bu(te,$.mode,Ce),W.return=$,$=W}return T($);case Z:return ut=te._init,qt($,W,ut(te._payload),Ce)}if(Ue(te))return Ke($,W,te,Ce);if(ie(te))return Qe($,W,te,Ce);Ha($,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a($,W.sibling),W=d(W,te),W.return=$,$=W):(a($,W),W=ku(te,$.mode,Ce),W.return=$,$=W),T($)):a($,W)}return qt}var Ts=jh(!0),Yh=jh(!1),Ga=dr(null),Wa=null,ws=null,qc=null;function Zc(){qc=ws=Wa=null}function Kc(n){var i=Ga.current;zt(Ga),n._currentValue=i}function $c(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function As(n,i){Wa=n,qc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(Wa===null)throw Error(t(308));ws=n,Wa.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var zr=null;function Jc(n){zr===null?zr=[n]:zr.push(n)}function qh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Jc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Vi(n,c)}function Vi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var mr=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function gr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Vi(n,a)}return d=c.interleaved,d===null?(i.next=i,Jc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Vi(n,a)}function Xa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}function Kh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ja(n,i,a,c){var d=n.updateQueue;mr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,oe=z.next;z.next=null,T===null?m=oe:T.next=oe,T=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==T&&(I===null?ye.firstBaseUpdate=oe:I.next=oe,ye.lastBaseUpdate=z))}if(m!==null){var Ee=d.baseState;T=0,ye=oe=z=null,I=m;do{var xe=I.lane,Ve=I.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ke=n,Qe=I;switch(xe=i,Ve=a,Qe.tag){case 1:if(Ke=Qe.payload,typeof Ke=="function"){Ee=Ke.call(Ve,Ee,xe);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Qe.payload,xe=typeof Ke=="function"?Ke.call(Ve,Ee,xe):Ke,xe==null)break e;Ee=ce({},Ee,xe);break e;case 2:mr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[I]:xe.push(I))}else Ve={eventTime:Ve,lane:xe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(oe=ye=Ve,z=Ee):ye=ye.next=Ve,T|=xe;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;xe=I,I=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(z=Ee),d.baseState=z,d.firstBaseUpdate=oe,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Gr|=T,n.lanes=T,n.memoizedState=Ee}}function $h(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ro={},yi=dr(Ro),Po=dr(Ro),Lo=dr(Ro);function Vr(n){if(n===Ro)throw Error(t(174));return n}function eu(n,i){switch(kt(Lo,i),kt(Po,n),kt(yi,Ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}zt(yi),kt(yi,i)}function Cs(){zt(yi),zt(Po),zt(Lo)}function Jh(n){Vr(Lo.current);var i=Vr(yi.current),a=me(i,n.type);i!==a&&(kt(Po,n),kt(yi,a))}function tu(n){Po.current===n&&(zt(yi),zt(Po))}var Ht=dr(0);function Ya(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nu=[];function iu(){for(var n=0;n<nu.length;n++)nu[n]._workInProgressVersionPrimary=null;nu.length=0}var qa=b.ReactCurrentDispatcher,ru=b.ReactCurrentBatchConfig,Hr=0,Gt=null,Qt=null,rn=null,Za=!1,No=!1,Do=0,Lv=0;function hn(){throw Error(t(321))}function su(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function ou(n,i,a,c,d,m){if(Hr=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,qa.current=n===null||n.memoizedState===null?Uv:Fv,n=a(c,d),No){m=0;do{if(No=!1,Do=0,25<=m)throw Error(t(301));m+=1,rn=Qt=null,i.updateQueue=null,qa.current=Ov,n=a(c,d)}while(No)}if(qa.current=Ja,i=Qt!==null&&Qt.next!==null,Hr=0,rn=Qt=Gt=null,Za=!1,i)throw Error(t(300));return n}function au(){var n=Do!==0;return Do=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Gt.memoizedState=rn=n:rn=rn.next=n,rn}function $n(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=rn===null?Gt.memoizedState:rn.next;if(i!==null)rn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},rn===null?Gt.memoizedState=rn=n:rn=rn.next=n}return rn}function Io(n,i){return typeof i=="function"?i(n):i}function lu(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Qt,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=T=null,z=null,oe=m;do{var ye=oe.lane;if((Hr&ye)===ye)z!==null&&(z=z.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var Ee={lane:ye,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};z===null?(I=z=Ee,T=c):z=z.next=Ee,Gt.lanes|=ye,Gr|=ye}oe=oe.next}while(oe!==null&&oe!==m);z===null?T=c:z.next=I,si(c,i.memoizedState)||(Ln=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Gt.lanes|=m,Gr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function cu(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);si(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Qh(){}function ep(n,i){var a=Gt,c=$n(),d=i(),m=!si(c.memoizedState,d);if(m&&(c.memoizedState=d,Ln=!0),c=c.queue,uu(ip.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Uo(9,np.bind(null,a,c,d,i),void 0,null),sn===null)throw Error(t(349));(Hr&30)!==0||tp(a,i,d)}return d}function tp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function np(n,i,a,c){i.value=a,i.getSnapshot=c,rp(i)&&sp(n)}function ip(n,i,a){return a(function(){rp(i)&&sp(n)})}function rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function sp(n){var i=Vi(n,1);i!==null&&ui(i,n,1,-1)}function op(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:n},i.queue=n,n=n.dispatch=Iv.bind(null,Gt,n),[i.memoizedState,n]}function Uo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ap(){return $n().memoizedState}function Ka(n,i,a,c){var d=Si();Gt.flags|=n,d.memoizedState=Uo(1|i,a,void 0,c===void 0?null:c)}function $a(n,i,a,c){var d=$n();c=c===void 0?null:c;var m=void 0;if(Qt!==null){var T=Qt.memoizedState;if(m=T.destroy,c!==null&&su(c,T.deps)){d.memoizedState=Uo(i,a,m,c);return}}Gt.flags|=n,d.memoizedState=Uo(1|i,a,m,c)}function lp(n,i){return Ka(8390656,8,n,i)}function uu(n,i){return $a(2048,8,n,i)}function cp(n,i){return $a(4,2,n,i)}function up(n,i){return $a(4,4,n,i)}function fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dp(n,i,a){return a=a!=null?a.concat([n]):null,$a(4,4,fp.bind(null,i,n),a)}function fu(){}function hp(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pp(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function mp(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=a):(si(a,i)||(a=Cn(),Gt.lanes|=a,Gr|=a,n.baseState=!0),i)}function Nv(n,i){var a=pt;pt=a!==0&&4>a?a:4,n(!0);var c=ru.transition;ru.transition={};try{n(!1),i()}finally{pt=a,ru.transition=c}}function gp(){return $n().memoizedState}function Dv(n,i,a){var c=yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))_p(i,a);else if(a=qh(n,i,a,c),a!==null){var d=Mn();ui(a,n,c,d),xp(a,i,c)}}function Iv(n,i,a){var c=yr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))_p(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,I=m(T,a);if(d.hasEagerState=!0,d.eagerState=I,si(I,T)){var z=i.interleaved;z===null?(d.next=d,Jc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}a=qh(n,i,d,c),a!==null&&(d=Mn(),ui(a,n,c,d),xp(a,i,c))}}function vp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function _p(n,i){No=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function xp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}var Ja={readContext:Kn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Uv={readContext:Kn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:lp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ka(4194308,4,fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ka(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ka(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Dv.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:fu,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=Nv.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,d=Si();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Hr&30)!==0||tp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,lp(ip.bind(null,c,m,n),[n]),c.flags|=2048,Uo(9,np.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Si(),i=sn.identifierPrefix;if(Vt){var a=zi,c=Bi;a=(c&~(1<<32-at(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Do++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Lv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Fv={readContext:Kn,useCallback:hp,useContext:Kn,useEffect:uu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:lu,useRef:ap,useState:function(){return lu(Io)},useDebugValue:fu,useDeferredValue:function(n){var i=$n();return mp(i,Qt.memoizedState,n)},useTransition:function(){var n=lu(Io)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},Ov={readContext:Kn,useCallback:hp,useContext:Kn,useEffect:uu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:cu,useRef:ap,useState:function(){return cu(Io)},useDebugValue:fu,useDeferredValue:function(n){var i=$n();return Qt===null?i.memoizedState=n:mp(i,Qt.memoizedState,n)},useTransition:function(){var n=cu(Io)[0],i=$n().memoizedState;return[n,i]},useMutableSource:Qh,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function ai(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function du(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qa={isMounted:function(n){return(n=n._reactInternals)?_i(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Mn(),d=yr(n),m=Hi(c,d);m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,d),i!==null&&(ui(i,n,d,c),Xa(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Mn(),d=yr(n),m=Hi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=gr(n,m,d),i!==null&&(ui(i,n,d,c),Xa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),c=yr(n),d=Hi(a,c);d.tag=2,i!=null&&(d.callback=i),i=gr(n,d,c),i!==null&&(ui(i,n,c,a),Xa(i,n,c))}};function yp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!So(a,c)||!So(d,m):!0}function Sp(n,i,a){var c=!1,d=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(d=Pn(i)?Or:dn.current,c=i.contextTypes,m=(c=c!=null)?ys(n,d):hr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function hu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Qc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Kn(m):(m=Pn(i)?Or:dn.current,d.context=ys(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(du(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Qa.enqueueReplaceState(d,d.state,null),ja(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",c=i;do a+=et(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function pu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var kv=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,Pu=c),mu(n,i)},a}function Tp(n,i,a){a=Hi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){mu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){mu(n,i),typeof c!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function wp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new kv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Jv.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Hi(-1,1),i.tag=2,gr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Bv=b.ReactCurrentOwner,Ln=!1;function Sn(n,i,a,c){i.child=n===null?Yh(i,null,a,c):Ts(i,n.child,a,c)}function bp(n,i,a,c,d){a=a.render;var m=i.ref;return As(i,d),c=ou(n,i,a,c,m,d),a=au(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Vt&&a&&Gc(i),i.flags|=1,Sn(n,i,c,d),i.child)}function Rp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Ou(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Pp(n,i,m,c,d)):(n=dl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:So,a(T,c)&&n.ref===i.ref)return Gi(n,i,d)}return i.flags|=1,n=Mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Pp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(So(m,c)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Gi(n,i,d)}return gu(n,i,a,c,d)}function Lp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ps,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ps,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Ps,Vn),Vn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Ps,Vn),Vn|=c;return Sn(n,i,d,a),i.child}function Np(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function gu(n,i,a,c,d){var m=Pn(a)?Or:dn.current;return m=ys(i,m),As(i,d),a=ou(n,i,a,c,m,d),c=au(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(Vt&&c&&Gc(i),i.flags|=1,Sn(n,i,a,d),i.child)}function Dp(n,i,a,c,d){if(Pn(a)){var m=!0;Oa(i)}else m=!1;if(As(i,d),i.stateNode===null)tl(n,i),Sp(i,a,c),hu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,I=i.memoizedProps;T.props=I;var z=T.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=Kn(oe):(oe=Pn(a)?Or:dn.current,oe=ys(i,oe));var ye=a.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==c||z!==oe)&&Mp(i,T,c,oe),mr=!1;var xe=i.memoizedState;T.state=xe,ja(i,c,T,d),z=i.memoizedState,I!==c||xe!==z||Rn.current||mr?(typeof ye=="function"&&(du(i,a,ye,c),z=i.memoizedState),(I=mr||yp(i,a,I,c,xe,z,oe))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),T.props=c,T.state=z,T.context=oe,c=I):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Zh(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:ai(i.type,I),T.props=oe,Ee=i.pendingProps,xe=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=Kn(z):(z=Pn(a)?Or:dn.current,z=ys(i,z));var Ve=a.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==Ee||xe!==z)&&Mp(i,T,c,z),mr=!1,xe=i.memoizedState,T.state=xe,ja(i,c,T,d);var Ke=i.memoizedState;I!==Ee||xe!==Ke||Rn.current||mr?(typeof Ve=="function"&&(du(i,a,Ve,c),Ke=i.memoizedState),(oe=mr||yp(i,a,oe,c,xe,Ke,z)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ke,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ke,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ke),T.props=c,T.state=Ke,T.context=z,c=oe):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return vu(n,i,a,c,m,d)}function vu(n,i,a,c,d,m){Np(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&kh(i,a,!1),Gi(n,i,m);c=i.stateNode,Bv.current=i;var I=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ts(i,n.child,null,m),i.child=Ts(i,null,I,m)):Sn(n,i,I,m),i.memoizedState=c.state,d&&kh(i,a,!0),i.child}function Ip(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),eu(n,i.containerInfo)}function Up(n,i,a,c,d){return Es(),Yc(d),i.flags|=256,Sn(n,i,a,c),i.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function xu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,a){var c=i.pendingProps,d=Ht.current,m=!1,T=(i.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Ht,d&1),n===null)return jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=hl(T,c,0,null),n=Yr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=xu(a),i.memoizedState=_u,n):yu(i,T));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return zv(n,i,T,c,I,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,I=d.sibling;var z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Mr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Mr(I,m):(m=Yr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?xu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=_u,c}return m=n.child,n=m.sibling,c=Mr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function yu(n,i){return i=hl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function el(n,i,a,c){return c!==null&&Yc(c),Ts(i,n.child,null,a),n=yu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function zv(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=pu(Error(t(422))),el(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=hl({mode:"visible",children:c.children},d,0,null),m=Yr(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ts(i,n.child,null,T),i.child.memoizedState=xu(T),i.memoizedState=_u,m);if((i.mode&1)===0)return el(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=pu(m,c,void 0),el(n,i,T,c)}if(I=(T&n.childLanes)!==0,Ln||I){if(c=sn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Vi(n,d),ui(c,n,d,-1))}return Fu(),c=pu(Error(t(421))),el(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Qv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,zn=fr(d.nextSibling),Bn=i,Vt=!0,oi=null,n!==null&&(qn[Zn++]=Bi,qn[Zn++]=zi,qn[Zn++]=kr,Bi=n.id,zi=n.overflow,kr=i),i=yu(i,c.children),i.flags|=4096,i)}function Op(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),$c(n.return,i,a)}function Su(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function kp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Sn(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,a,i);else if(n.tag===19)Op(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Ya(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Su(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Ya(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Su(i,!0,a,null,m);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function tl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Vv(n,i,a){switch(i.tag){case 3:Ip(i),Es();break;case 5:Jh(i);break;case 1:Pn(i.type)&&Oa(i);break;case 4:eu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Ga,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fp(n,i,a):(kt(Ht,Ht.current&1),n=Gi(n,i,a),n!==null?n.sibling:null);kt(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,a)}return Gi(n,i,a)}var Bp,Mu,zp,Vp;Bp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mu=function(){},zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Vr(yi.current);var m=null;switch(a){case"input":d=ve(n,d),c=ve(n,c),m=[];break;case"select":d=ce({},d,{value:void 0}),c=ce({},c,{value:void 0}),m=[];break;case"textarea":d=Pe(n,d),c=Pe(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ia)}qe(a,c);var T;a=null;for(oe in d)if(!c.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var I=d[oe];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var z=c[oe];if(I=d?.[oe],c.hasOwnProperty(oe)&&z!==I&&(z!=null||I!=null))if(oe==="style")if(I){for(T in I)!I.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&I[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(m||(m=[]),m.push(oe,a)),a=z;else oe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(m=m||[]).push(oe,z)):oe==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(oe,""+z):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(z!=null&&oe==="onScroll"&&Bt("scroll",n),m||I===z||(m=[])):(m=m||[]).push(oe,z))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Fo(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Hv(n,i,a){var c=i.pendingProps;switch(Wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Pn(i.type)&&Fa(),pn(i),null;case 3:return c=i.stateNode,Cs(),zt(Rn),zt(dn),iu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Va(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(Du(oi),oi=null))),Mu(n,i),pn(i),null;case 5:tu(i);var d=Vr(Lo.current);if(a=i.type,n!==null&&i.stateNode!=null)zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Vr(yi.current),Va(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[xi]=i,c[Ao]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<Eo.length;d++)Bt(Eo[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Me(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":L(c,m),Bt("invalid",c)}qe(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var I=m[T];T==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Da(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Da(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":ct(c),D(c,m,!0);break;case"textarea":ct(c),G(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ia)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[xi]=i,n[Ao]=c,Bp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ke(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Eo.length;d++)Bt(Eo[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":Me(n,c),d=ve(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ce({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":L(n,c),d=Pe(n,c),Bt("invalid",n);break;default:d=c}qe(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var z=I[m];m==="style"?Re(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&je(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Bt("scroll",n):z!=null&&P(n,m,z,T))}switch(a){case"input":ct(n),D(n,c,!1);break;case"textarea":ct(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?rt(n,!!c.multiple,m,!1):c.defaultValue!=null&&rt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ia)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(Lo.current),Vr(yi.current),Va(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(m=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Da(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return pn(i),null;case 13:if(zt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),Es(),i.flags|=98560,m=!1;else if(m=Va(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else Es(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),m=!1}else oi!==null&&(Du(oi),oi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?en===0&&(en=3):Fu())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Cs(),Mu(n,i),n===null&&To(i.stateNode.containerInfo),pn(i),null;case 10:return Kc(i.type._context),pn(i),null;case 17:return Pn(i.type)&&Fa(),pn(i),null;case 19:if(zt(Ht),m=i.memoizedState,m===null)return pn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Fo(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Ya(n),T!==null){for(i.flags|=128,Fo(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>Ls&&(i.flags|=128,c=!0,Fo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ya(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Fo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return pn(i),null}else 2*A()-m.renderingStartTime>Ls&&a!==1073741824&&(i.flags|=128,c=!0,Fo(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,a=Ht.current,kt(Ht,c?a&1|2:a&1),i):(pn(i),null);case 22:case 23:return Uu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Gv(n,i){switch(Wc(i),i.tag){case 1:return Pn(i.type)&&Fa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Cs(),zt(Rn),zt(dn),iu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return tu(i),null;case 13:if(zt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Es()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return Cs(),null;case 10:return Kc(i.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var nl=!1,mn=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Rs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function Eu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var Hp=!1;function Xv(n,i){if(Uc=Ma,n=yh(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,I=-1,z=-1,oe=0,ye=0,Ee=n,xe=null;t:for(;;){for(var Ve;Ee!==a||d!==0&&Ee.nodeType!==3||(I=T+d),Ee!==m||c!==0&&Ee.nodeType!==3||(z=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)xe=Ee,Ee=Ve;for(;;){if(Ee===n)break t;if(xe===a&&++oe===d&&(I=T),xe===m&&++ye===c&&(z=T),(Ve=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Ve}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},Ma=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Qe=Ke.memoizedProps,qt=Ke.memoizedState,$=i.stateNode,W=$.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ai(i.type,Qe),qt);$.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Ke=Hp,Hp=!1,Ke}function Oo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Eu(i,a,m)}d=d.next}while(d!==c)}}function il(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Tu(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[Ao],delete i[zc],delete i[Cv],delete i[bv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ia));else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,a),n=n.sibling;n!==null;)wu(n,i,a),n=n.sibling}function Au(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,a),n=n.sibling;n!==null;)Au(n,i,a),n=n.sibling}var ln=null,li=!1;function vr(n,i,a){for(a=a.child;a!==null;)jp(n,i,a),a=a.sibling}function jp(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 5:mn||Rs(a,i);case 6:var c=ln,d=li;ln=null,vr(n,i,a),ln=c,li=d,ln!==null&&(li?(n=ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(li?(n=ln,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),mo(n)):Bc(ln,a.stateNode));break;case 4:c=ln,d=li,ln=a.stateNode.containerInfo,li=!0,vr(n,i,a),ln=c,li=d;break;case 0:case 11:case 14:case 15:if(!mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Eu(a,i,T),d=d.next}while(d!==c)}vr(n,i,a);break;case 1:if(!mn&&(Rs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Xt(a,i,I)}vr(n,i,a);break;case 21:vr(n,i,a);break;case 22:a.mode&1?(mn=(c=mn)||a.memoizedState!==null,vr(n,i,a),mn=c):vr(n,i,a);break;default:vr(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Wv),i.forEach(function(c){var d=e_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,I=T;e:for(;I!==null;){switch(I.tag){case 5:ln=I.stateNode,li=!1;break e;case 3:ln=I.stateNode.containerInfo,li=!0;break e;case 4:ln=I.stateNode.containerInfo,li=!0;break e}I=I.return}if(ln===null)throw Error(t(160));jp(m,T,d),ln=null,li=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(oe){Xt(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,n),i=i.sibling}function qp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Mi(n),c&4){try{Oo(3,n,n.return),il(3,n)}catch(Qe){Xt(n,n.return,Qe)}try{Oo(5,n,n.return)}catch(Qe){Xt(n,n.return,Qe)}}break;case 1:ci(i,n),Mi(n),c&512&&a!==null&&Rs(a,a.return);break;case 5:if(ci(i,n),Mi(n),c&512&&a!==null&&Rs(a,a.return),n.flags&32){var d=n.stateNode;try{Ae(d,"")}catch(Qe){Xt(n,n.return,Qe)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&_e(d,m),ke(I,T);var oe=ke(I,m);for(T=0;T<z.length;T+=2){var ye=z[T],Ee=z[T+1];ye==="style"?Re(d,Ee):ye==="dangerouslySetInnerHTML"?je(d,Ee):ye==="children"?Ae(d,Ee):P(d,ye,Ee,oe)}switch(I){case"input":Ne(d,m);break;case"textarea":E(d,m);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ve=m.value;Ve!=null?rt(d,!!m.multiple,Ve,!1):xe!==!!m.multiple&&(m.defaultValue!=null?rt(d,!!m.multiple,m.defaultValue,!0):rt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Ao]=m}catch(Qe){Xt(n,n.return,Qe)}}break;case 6:if(ci(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Qe){Xt(n,n.return,Qe)}}break;case 3:if(ci(i,n),Mi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{mo(i.containerInfo)}catch(Qe){Xt(n,n.return,Qe)}break;case 4:ci(i,n),Mi(n);break;case 13:ci(i,n),Mi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ru=A())),c&4&&Yp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(oe=mn)||ye,ci(i,n),mn=oe):ci(i,n),Mi(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ye&&(n.mode&1)!==0)for(Ye=n,ye=n.child;ye!==null;){for(Ee=Ye=ye;Ye!==null;){switch(xe=Ye,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:Oo(4,xe,xe.return);break;case 1:Rs(xe,xe.return);var Ke=xe.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Qe){Xt(c,a,Qe)}}break;case 5:Rs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){$p(Ee);continue}}Ve!==null?(Ve.return=xe,Ye=Ve):$p(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Ee.stateNode,z=Ee.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=Se("display",T))}catch(Qe){Xt(n,n.return,Qe)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=oe?"":Ee.memoizedProps}catch(Qe){Xt(n,n.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:ci(i,n),Mi(n),c&4&&Yp(n);break;case 21:break;default:ci(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ae(d,""),c.flags&=-33);var m=Xp(n);Au(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,I=Xp(n);wu(n,I,T);break;default:throw Error(t(161))}}catch(z){Xt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function jv(n,i,a){Ye=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var d=Ye,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||nl;if(!T){var I=d.alternate,z=I!==null&&I.memoizedState!==null||mn;I=nl;var oe=mn;if(nl=T,(mn=z)&&!oe)for(Ye=d;Ye!==null;)T=Ye,z=T.child,T.tag===22&&T.memoizedState!==null?Jp(d):z!==null?(z.return=T,Ye=z):Jp(d);for(;m!==null;)Ye=m,Zp(m),m=m.sibling;Ye=d,nl=I,mn=oe}Kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ye=m):Kp(n)}}function Kp(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||il(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!mn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&$h(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$h(i,T,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ye=oe.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&mo(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&Tu(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function $p(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Jp(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{il(4,i)}catch(z){Xt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Xt(i,d,z)}}var m=i.return;try{Tu(i)}catch(z){Xt(i,m,z)}break;case 5:var T=i.return;try{Tu(i)}catch(z){Xt(i,T,z)}}}catch(z){Xt(i,i.return,z)}if(i===n){Ye=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Ye=I;break}Ye=i.return}}var Yv=Math.ceil,rl=b.ReactCurrentDispatcher,Cu=b.ReactCurrentOwner,Jn=b.ReactCurrentBatchConfig,At=0,sn=null,$t=null,cn=0,Vn=0,Ps=dr(0),en=0,ko=null,Gr=0,sl=0,bu=0,Bo=null,Nn=null,Ru=0,Ls=1/0,Wi=null,ol=!1,Pu=null,_r=null,al=!1,xr=null,ll=0,zo=0,Lu=null,cl=-1,ul=0;function Mn(){return(At&6)!==0?A():cl!==-1?cl:cl=A()}function yr(n){return(n.mode&1)===0?1:(At&2)!==0&&cn!==0?cn&-cn:Pv.transition!==null?(ul===0&&(ul=Cn()),ul):(n=pt,n!==0||(n=window.event,n=n===void 0?16:eh(n.type)),n)}function ui(n,i,a,c){if(50<zo)throw zo=0,Lu=null,Error(t(185));On(n,a,c),((At&2)===0||n!==sn)&&(n===sn&&((At&2)===0&&(sl|=a),en===4&&Sr(n,cn)),Dn(n,c),a===1&&At===0&&(i.mode&1)===0&&(Ls=A()+500,ka&&pr()))}function Dn(n,i){var a=n.callbackNode;yn(n,i);var c=jt(n,n===sn?cn:0);if(c===0)a!==null&&xa(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&xa(a),i===1)n.tag===0?Rv(em.bind(null,n)):Bh(em.bind(null,n)),wv(function(){(At&6)===0&&pr()}),a=null;else{switch(ri(c)){case 1:a=le;break;case 4:a=ne;break;case 16:a=ee;break;case 536870912:a=He;break;default:a=ee}a=lm(a,Qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Qp(n,i){if(cl=-1,ul=0,(At&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=jt(n,n===sn?cn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var d=At;At|=2;var m=nm();(sn!==n||cn!==i)&&(Wi=null,Ls=A()+500,Xr(n,i));do try{Kv();break}catch(I){tm(n,I)}while(!0);Zc(),rl.current=m,At=d,$t!==null?i=0:(sn=null,cn=0,i=en)}if(i!==0){if(i===2&&(d=Et(n),d!==0&&(c=d,i=Nu(n,d))),i===1)throw a=ko,Xr(n,0),Sr(n,c),Dn(n,A()),a;if(i===6)Sr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!qv(d)&&(i=fl(n,c),i===2&&(m=Et(n),m!==0&&(c=m,i=Nu(n,m))),i===1))throw a=ko,Xr(n,0),Sr(n,c),Dn(n,A()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:jr(n,Nn,Wi);break;case 3:if(Sr(n,c),(c&130023424)===c&&(i=Ru+500-A(),10<i)){if(jt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=kc(jr.bind(null,n,Nn,Wi),i);break}jr(n,Nn,Wi);break;case 4:if(Sr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-at(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=A()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Yv(c/1960))-c,10<c){n.timeoutHandle=kc(jr.bind(null,n,Nn,Wi),c);break}jr(n,Nn,Wi);break;case 5:jr(n,Nn,Wi);break;default:throw Error(t(329))}}}return Dn(n,A()),n.callbackNode===a?Qp.bind(null,n):null}function Nu(n,i){var a=Bo;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=fl(n,i),n!==2&&(i=Nn,Nn=a,i!==null&&Du(i)),n}function Du(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function qv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!si(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(n,i){for(i&=~bu,i&=~sl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-at(i),c=1<<a;n[a]=-1,i&=~c}}function em(n){if((At&6)!==0)throw Error(t(327));Ns();var i=jt(n,0);if((i&1)===0)return Dn(n,A()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=Et(n);c!==0&&(i=c,a=Nu(n,c))}if(a===1)throw a=ko,Xr(n,0),Sr(n,i),Dn(n,A()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,jr(n,Nn,Wi),Dn(n,A()),null}function Iu(n,i){var a=At;At|=1;try{return n(i)}finally{At=a,At===0&&(Ls=A()+500,ka&&pr())}}function Wr(n){xr!==null&&xr.tag===0&&(At&6)===0&&Ns();var i=At;At|=1;var a=Jn.transition,c=pt;try{if(Jn.transition=null,pt=1,n)return n()}finally{pt=c,Jn.transition=a,At=i,(At&6)===0&&pr()}}function Uu(){Vn=Ps.current,zt(Ps)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Tv(a)),$t!==null)for(a=$t.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Fa();break;case 3:Cs(),zt(Rn),zt(dn),iu();break;case 5:tu(c);break;case 4:Cs();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:Kc(c.type._context);break;case 22:case 23:Uu()}a=a.return}if(sn=n,$t=n=Mr(n.current,null),cn=Vn=i,en=0,ko=null,bu=sl=Gr=0,Nn=Bo=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}zr=null}return n}function tm(n,i){do{var a=$t;try{if(Zc(),qa.current=Ja,Za){for(var c=Gt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Za=!1}if(Hr=0,rn=Qt=Gt=null,No=!1,Do=0,Cu.current=null,a===null||a.return===null){en=1,ko=i,$t=null;break}e:{var m=n,T=a.return,I=a,z=i;if(i=cn,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=z,ye=I,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Ap(T);if(Ve!==null){Ve.flags&=-257,Cp(Ve,T,I,m,i),Ve.mode&1&&wp(m,oe,i),i=Ve,z=oe;var Ke=i.updateQueue;if(Ke===null){var Qe=new Set;Qe.add(z),i.updateQueue=Qe}else Ke.add(z);break e}else{if((i&1)===0){wp(m,oe,i),Fu();break e}z=Error(t(426))}}else if(Vt&&I.mode&1){var qt=Ap(T);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),Cp(qt,T,I,m,i),Yc(bs(z,I));break e}}m=z=bs(z,I),en!==4&&(en=2),Bo===null?Bo=[m]:Bo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=Ep(m,z,i);Kh(m,$);break e;case 1:I=z;var W=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(_r===null||!_r.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ce=Tp(m,I,i);Kh(m,Ce);break e}}m=m.return}while(m!==null)}rm(a)}catch(nt){i=nt,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function nm(){var n=rl.current;return rl.current=Ja,n===null?Ja:n}function Fu(){(en===0||en===3||en===2)&&(en=4),sn===null||(Gr&268435455)===0&&(sl&268435455)===0||Sr(sn,cn)}function fl(n,i){var a=At;At|=2;var c=nm();(sn!==n||cn!==i)&&(Wi=null,Xr(n,i));do try{Zv();break}catch(d){tm(n,d)}while(!0);if(Zc(),At=a,rl.current=c,$t!==null)throw Error(t(261));return sn=null,cn=0,en}function Zv(){for(;$t!==null;)im($t)}function Kv(){for(;$t!==null&&!hc();)im($t)}function im(n){var i=am(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?rm(n):$t=i,Cu.current=null}function rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Hv(a,i,Vn),a!==null){$t=a;return}}else{if(a=Gv(a,i),a!==null){a.flags&=32767,$t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);en===0&&(en=5)}function jr(n,i,a){var c=pt,d=Jn.transition;try{Jn.transition=null,pt=1,$v(n,i,a,c)}finally{Jn.transition=d,pt=c}return null}function $v(n,i,a,c){do Ns();while(xr!==null);if((At&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(rr(n,m),n===sn&&($t=sn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,lm(ee,function(){return Ns(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Jn.transition,Jn.transition=null;var T=pt;pt=1;var I=At;At|=4,Cu.current=null,Xv(n,a),qp(a,n),vv(Fc),Ma=!!Uc,Fc=Uc=null,n.current=a,jv(a),pc(),At=I,pt=T,Jn.transition=m}else n.current=a;if(al&&(al=!1,xr=n,ll=d),m=n.pendingLanes,m===0&&(_r=null),it(a.stateNode),Dn(n,A()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=Pu,Pu=null,n;return(ll&1)!==0&&n.tag!==0&&Ns(),m=n.pendingLanes,(m&1)!==0?n===Lu?zo++:(zo=0,Lu=n):zo=0,pr(),null}function Ns(){if(xr!==null){var n=ri(ll),i=Jn.transition,a=pt;try{if(Jn.transition=null,pt=16>n?16:n,xr===null)var c=!1;else{if(n=xr,xr=null,ll=0,(At&6)!==0)throw Error(t(331));var d=At;for(At|=4,Ye=n.current;Ye!==null;){var m=Ye,T=m.child;if((Ye.flags&16)!==0){var I=m.deletions;if(I!==null){for(var z=0;z<I.length;z++){var oe=I[z];for(Ye=oe;Ye!==null;){var ye=Ye;switch(ye.tag){case 0:case 11:case 15:Oo(8,ye,m)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Ye=Ee;else for(;Ye!==null;){ye=Ye;var xe=ye.sibling,Ve=ye.return;if(Gp(ye),ye===oe){Ye=null;break}if(xe!==null){xe.return=Ve,Ye=xe;break}Ye=Ve}}}var Ke=m.alternate;if(Ke!==null){var Qe=Ke.child;if(Qe!==null){Ke.child=null;do{var qt=Qe.sibling;Qe.sibling=null,Qe=qt}while(Qe!==null)}}Ye=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Ye=T;else e:for(;Ye!==null;){if(m=Ye,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Oo(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Ye=$;break e}Ye=m.return}}var W=n.current;for(Ye=W;Ye!==null;){T=Ye;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Ye=te;else e:for(T=W;Ye!==null;){if(I=Ye,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:il(9,I)}}catch(nt){Xt(I,I.return,nt)}if(I===T){Ye=null;break e}var Ce=I.sibling;if(Ce!==null){Ce.return=I.return,Ye=Ce;break e}Ye=I.return}}if(At=d,pr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(De,n)}catch{}c=!0}return c}finally{pt=a,Jn.transition=i}}return!1}function sm(n,i,a){i=bs(a,i),i=Ep(n,i,1),n=gr(n,i,1),i=Mn(),n!==null&&(On(n,1,i),Dn(n,i))}function Xt(n,i,a){if(n.tag===3)sm(n,n,a);else for(;i!==null;){if(i.tag===3){sm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(_r===null||!_r.has(c))){n=bs(a,n),n=Tp(i,n,1),i=gr(i,n,1),n=Mn(),i!==null&&(On(i,1,n),Dn(i,n));break}}i=i.return}}function Jv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(cn&a)===a&&(en===4||en===3&&(cn&130023424)===cn&&500>A()-Ru?Xr(n,0):bu|=a),Dn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=Mn();n=Vi(n,i),n!==null&&(On(n,i,a),Dn(n,a))}function Qv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function e_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,a)}var am;am=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Ln=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,Vv(n,i,a);Ln=(n.flags&131072)!==0}else Ln=!1,Vt&&(i.flags&1048576)!==0&&zh(i,za,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;tl(n,i),n=i.pendingProps;var d=ys(i,dn.current);As(i,a),d=ou(null,i,c,n,d,a);var m=au();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(m=!0,Oa(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Qc(i),d.updater=Qa,i.stateNode=d,d._reactInternals=i,hu(i,c,n,a),i=vu(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Gc(i),Sn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(tl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=n_(c),n=ai(c,n),d){case 0:i=gu(null,i,c,n,a);break e;case 1:i=Dp(null,i,c,n,a);break e;case 11:i=bp(null,i,c,n,a);break e;case 14:i=Rp(null,i,c,ai(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),gu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),Dp(n,i,c,d,a);case 3:e:{if(Ip(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Zh(n,i),ja(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=bs(Error(t(423)),i),i=Up(n,i,c,a,d);break e}else if(c!==d){d=bs(Error(t(424)),i),i=Up(n,i,c,a,d);break e}else for(zn=fr(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,oi=null,a=Yh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Es(),c===d){i=Gi(n,i,a);break e}Sn(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&jc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Oc(c,d)?T=null:m!==null&&Oc(c,m)&&(i.flags|=32),Np(n,i),Sn(n,i,T,a),i.child;case 6:return n===null&&jc(i),null;case 13:return Fp(n,i,a);case 4:return eu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ts(i,null,c,a):Sn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),bp(n,i,c,d,a);case 7:return Sn(n,i,i.pendingProps,a),i.child;case 8:return Sn(n,i,i.pendingProps.children,a),i.child;case 12:return Sn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,kt(Ga,c._currentValue),c._currentValue=T,m!==null)if(si(m.value,T)){if(m.children===d.children&&!Rn.current){i=Gi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){T=m.child;for(var z=I.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=Hi(-1,a&-a),z.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var ye=oe.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),oe.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),$c(m.return,a,i),I.lanes|=a;break}z=z.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),$c(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Sn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,As(i,a),d=Kn(d),c=c(d),i.flags|=1,Sn(n,i,c,a),i.child;case 14:return c=i.type,d=ai(c,i.pendingProps),d=ai(c.type,d),Rp(n,i,c,d,a);case 15:return Pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ai(c,d),tl(n,i),i.tag=1,Pn(c)?(n=!0,Oa(i)):n=!1,As(i,a),Sp(i,c,d),hu(i,c,d,a),vu(null,i,c,!0,n,a);case 19:return kp(n,i,a);case 22:return Lp(n,i,a)}throw Error(t(156,i.tag))};function lm(n,i){return _a(n,i)}function t_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,a,c){return new t_(n,i,a,c)}function Ou(n){return n=n.prototype,!(!n||!n.isReactComponent)}function n_(n){if(typeof n=="function")return Ou(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===X)return 14}return 2}function Mr(n,i){var a=n.alternate;return a===null?(a=Qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Ou(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Yr(a.children,d,m,i);case w:T=8,d|=8;break;case N:return n=Qn(12,a,i,d|2),n.elementType=N,n.lanes=m,n;case Q:return n=Qn(13,a,i,d),n.elementType=Q,n.lanes=m,n;case se:return n=Qn(19,a,i,d),n.elementType=se,n.lanes=m,n;case V:return hl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ae:T=10;break e;case k:T=9;break e;case J:T=11;break e;case X:T=14;break e;case Z:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Yr(n,i,a,c){return n=Qn(7,n,c,i),n.lanes=a,n}function hl(n,i,a,c){return n=Qn(22,n,c,i),n.elementType=V,n.lanes=a,n.stateNode={isHidden:!1},n}function ku(n,i,a){return n=Qn(6,n,null,i),n.lanes=a,n}function Bu(n,i,a){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function i_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zu(n,i,a,c,d,m,T,I,z){return n=new i_(n,i,a,I,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(m),n}function r_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return hr;n=n._reactInternals;e:{if(_i(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return Oh(n,a,i)}return i}function um(n,i,a,c,d,m,T,I,z){return n=zu(a,c,!0,n,d,m,T,I,z),n.context=cm(null),a=n.current,c=Mn(),d=yr(a),m=Hi(c,d),m.callback=i??null,gr(a,m,d),n.current.lanes=d,On(n,d,c),Dn(n,c),n}function pl(n,i,a,c){var d=i.current,m=Mn(),T=yr(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=Hi(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=gr(d,i,T),n!==null&&(ui(n,d,T,m),Xa(n,d,T)),T}function ml(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Vu(n,i){fm(n,i),(n=n.alternate)&&fm(n,i)}function s_(){return null}var dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}gl.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));pl(n,i,null,null)},gl.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){pl(null,n,null,null)}),i[Oi]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=co();n={blockedOn:null,target:n,priority:i};for(var a=0;a<lr.length&&i!==0&&i<lr[a].priority;a++);lr.splice(a,0,n),a===0&&Jd(n)}};function Gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function hm(){}function o_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var oe=ml(T);m.call(oe)}}var T=um(i,c,n,0,null,!1,!1,"",hm);return n._reactRootContainer=T,n[Oi]=T.current,To(n.nodeType===8?n.parentNode:n),Wr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var oe=ml(z);I.call(oe)}}var z=zu(n,0,!1,null,null,!1,!1,"",hm);return n._reactRootContainer=z,n[Oi]=z.current,To(n.nodeType===8?n.parentNode:n),Wr(function(){pl(i,z,a,c)}),z}function _l(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var I=d;d=function(){var z=ml(T);I.call(z)}}pl(i,T,n,d)}else T=o_(a,i,n,d,c);return ml(T)}Yt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(Nt(i,a|1),Dn(i,A()),(At&6)===0&&(Ls=A()+500,pr()))}break;case 13:Wr(function(){var c=Vi(n,1);if(c!==null){var d=Mn();ui(c,n,1,d)}}),Vu(n,1)}},Yn=function(n){if(n.tag===13){var i=Vi(n,134217728);if(i!==null){var a=Mn();ui(i,n,134217728,a)}Vu(n,134217728)}},Fi=function(n){if(n.tag===13){var i=yr(n),a=Vi(n,i);if(a!==null){var c=Mn();ui(a,n,i,c)}Vu(n,i)}},co=function(){return pt},Kd=function(n,i){var a=pt;try{return pt=n,i()}finally{pt=a}},Le=function(n,i,a){switch(i){case"input":if(Ne(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ua(c);if(!d)throw Error(t(90));Lt(c),Ne(c,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&rt(n,!!a.multiple,i,!1)}},ht=Iu,It=Wr;var a_={usingClientEntryPoint:!1,Events:[Co,_s,Ua,de,Ze,Iu]},Vo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},l_={bundleType:Vo.bundleType,version:Vo.version,rendererPackageName:Vo.rendererPackageName,rendererConfig:Vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ga(n),n===null?null:n.stateNode},findFiberByHostInstance:Vo.findFiberByHostInstance||s_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{De=xl.inject(l_),ze=xl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a_,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(i))throw Error(t(200));return r_(n,i,null,a)},In.createRoot=function(n,i){if(!Gu(n))throw Error(t(299));var a=!1,c="",d=dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=zu(n,1,!1,null,null,a,!1,c,d),n[Oi]=i.current,To(n.nodeType===8?n.parentNode:n),new Hu(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ga(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Wr(n)},In.hydrate=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Gu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=um(i,null,n,1,a??null,d,!1,m,T),n[Oi]=i.current,To(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new gl(i)},In.render=function(n,i,a){if(!vl(i))throw Error(t(200));return _l(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},In.unstable_batchedUpdates=Iu,In.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!vl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var Sm;function v_(){if(Sm)return ju.exports;Sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ju.exports=g_(),ju.exports}var Mm;function __(){if(Mm)return yl;Mm=1;var s=v_();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var x_=__();const y_=Ld(x_),S_={primary:`
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
	`};function Df({as:s="button",href:e,children:t,variant:r="primary",className:o="",...l}){const u=`
	inline-flex items-center justify-center
	px-6 py-3 rounded-lg font-semibold text-lg
	cursor-pointer
	disabled:opacity-60 disabled:cursor-not-allowed
	disabled:hover:shadow-none
	disabled:hover:bg-[length:0%_100%]
	${S_[r]}
	${o}
`;return s==="a"?he.jsx("a",{href:e,className:u,...l,children:t}):he.jsx("button",{className:u,...l,children:t})}function M_(){return he.jsxs("section",{id:"home",className:"flex w-full pt-0 flex-col pb-56 bg-transparent items-center md:flex-col",children:[he.jsx("div",{className:"flex items-center min-h-[50vh] justify-center text-center md:w-full",children:he.jsxs("h1",{className:" text-6xl pb-28 font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ",children:"MTRX"})," ","Studio"]})}),he.jsxs("div",{className:"flex flex-col min-h-[50vh] items-center justify-center text-center md:w-full",children:[he.jsx("p",{className:"text-md text-center font-kode font-normal text-gray-500 lg:text-lg dark:text-gray-400",children:"We design high-converting websites for growing businesses that want more leads, trust, and sales."}),he.jsxs("div",{className:"mt-8 flex flex-col px-6 sm:flex-row justify-center gap-4 w-full sm:w-auto",children:[he.jsx(Df,{variant:"primary",as:"a",href:"#contact",children:"Book Free Discovery Call"}),he.jsx(Df,{variant:"secondary",as:"a",href:"#contact",children:"View Portfolio"})]})]})]})}function E_(){const s=[{name:"All Jay Gaco",shortName:"All Jay",role:"Front-End Development / UI",bio:"I focus on creating modern, user-friendly websites that help businesses look more credible and connect better with their audience. I’m currently studying Web Development at Fanshawe College, where I’ve gained over two years of hands-on experience building responsive, front-end applications and refining user experience. I focus on crafting interfaces that feel clean, intuitive, and professional.",traits:["Front-End Focused","Mobile-First","Clean UI"],accent:"AJ"},{name:"Filipe Madureira",shortName:"Filipe",role:"Development / Systems",bio:"I focus on the technical side of our builds, helping ensure everything runs smoothly, efficiently, and reliably. Currently completing a Computer Science degree at TMU, I bring a strong foundation in software development, problem-solving, and system design to every project. I work across the stack to make sure what we build not only looks good, but performs well and scales properly.",traits:["Full-Stack Foundation","System Thinking","Performance Focus"],accent:"FM"},{name:"Joshua Welcher",shortName:"Joshua",role:"Creative / Technical",bio:"I bridge the gap between creative direction and technical execution. With experience in Python, 3D modeling, and digital design, I help bring ideas to life in ways that feel unique and engaging. From visual concepts to technical problem-solving, I focus on making sure our projects stand out while still being practical and well-executed.",traits:["Creative Tech","3D & Design","Problem Solving"],accent:"JW"}],[e,t]=pi.useState(0),[r,o]=pi.useState({}),[l,u]=pi.useState(!0),f=pi.useRef([]),p=s[e];pi.useEffect(()=>{const g=()=>{const _=f.current[e];if(!_)return;const v=_.parentElement;o({width:`${_.offsetWidth}px`,transform:`translateX(${_.offsetLeft-v.offsetLeft}px)`})};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[e]);const h=g=>{g!==e&&(u(!1),setTimeout(()=>{t(g),u(!0)},140))};return he.jsx("section",{id:"team",className:"relative px-6 pt-0 pb-56 md:px-10 lg:px-16",children:he.jsxs("div",{className:"mx-auto max-w-6xl",children:[he.jsxs("div",{className:"mx-auto mb-10 max-w-3xl text-center",children:[he.jsxs("h1",{className:" text-6xl font-extrabold font-kode pb-20 text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ",children:"About"})," ","Us"]}),he.jsx("div",{className:" items-center pb-5 justify-center text-center md:w-full",children:he.jsxs("h2",{className:"text-xl font-semibold font-kode leading-tight text-cyber-text md:text-3xl",children:["Meet the team behind the"," ",he.jsx("span",{className:"bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow bg-clip-text text-transparent",children:"build"})]})}),he.jsx("p",{className:"text-base leading-relaxed pb-32 text-cyber-muted md:text-lg",children:"We’re a small team building modern, high-quality websites that help businesses stand out and grow. We combine clean design, strong development, and clear strategy to create sites that perform, build trust, and drive results."})]}),he.jsxs("div",{className:"rounded-3xl border  border-cyber-border bg-cyber-surface/40 p-4 backdrop-blur-xl md:p-6",children:[he.jsx("div",{className:"mx-auto mb-8 w-full max-w-3xl",children:he.jsx("div",{className:"relative mx-auto w-full max-w-3xl",children:he.jsxs("div",{role:"tablist","aria-label":"Meet the team",className:"relative grid w-full grid-cols-3 items-center rounded-full p-1",children:[he.jsx("div",{"aria-hidden":"true",className:"absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow shadow-lg shadow-cyber-glow/20 transition-all duration-300 ease-out",style:r}),s.map((g,_)=>{const v=_===e;return he.jsxs("button",{ref:S=>{f.current[_]=S},type:"button",role:"tab","aria-selected":v,"aria-controls":`team-panel-${_}`,id:`team-tab-${_}`,onClick:()=>h(_),className:`
												relative z-10 flex w-full items-center justify-center
												rounded-full px-4 sm:px-5 py-3 text-sm font-semibold
												transition-all duration-300
												${v?"text-cyber-text hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]":"text-cyber-muted hover:text-cyber-text"}
											`,children:[he.jsx("span",{className:"sm:hidden",children:g.shortName}),he.jsx("span",{className:"hidden sm:inline",children:g.name})]},g.name)})]})})}),he.jsx("div",{id:`team-panel-${e}`,role:"tabpanel","aria-labelledby":`team-tab-${e}`,className:`
							rounded-3xl border border-cyber-border bg-cyber-surface/70 p-6 md:p-8
							transition-all duration-300
							${l?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}
						`,children:he.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:items-center",children:[he.jsx("div",{className:"flex justify-center md:justify-start",children:he.jsxs("div",{className:"relative",children:[he.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-cyber-purple/25 via-cyber-accent/20 to-cyber-glow/25 blur-2xl"}),he.jsx("div",{className:"relative flex h-40 w-40 items-center justify-center rounded-3xl border border-cyber-border bg-cyber-void text-4xl font-bold text-cyber-text shadow-[0_0_25px_rgba(255,46,219,0.12)] md:h-48 md:w-48",children:p.accent})]})}),he.jsxs("div",{children:[he.jsx("p",{className:"mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyber-accent",children:p.role}),he.jsx("h3",{className:"text-3xl font-semibold text-cyber-text",children:p.name}),he.jsx("p",{className:"mt-5 max-w-2xl text-sm leading-relaxed text-cyber-muted md:text-base",children:p.bio}),he.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:p.traits.map(g=>he.jsx("span",{className:"rounded-full border border-cyber-border bg-cyber-void/80 px-3 py-1.5 text-xs font-medium tracking-wide text-cyber-text",children:g},g))}),he.jsx("div",{className:"mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyber-border to-transparent"}),he.jsx("p",{className:"mt-6 text-sm leading-relaxed text-cyber-muted",children:"We build with clarity, collaboration, and a focus on helping clients look more credible and convert more effectively online."})]})]})})]})]})})}var Zu={exports:{}},Ku,Em;function T_(){if(Em)return Ku;Em=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ku=s,Ku}var $u,Tm;function w_(){if(Tm)return $u;Tm=1;var s=T_();function e(){}function t(){}return t.resetWarningCache=e,$u=function(){function r(u,f,p,h,g,_){if(_!==s){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},$u}var wm;function A_(){return wm||(wm=1,Zu.exports=w_()()),Zu.exports}var C_=A_();const Sl=Ld(C_);function Yl({title:s,svg:e,body:t,link:r}){return he.jsx("div",{className:"p-4 w-full max-w-sm",children:he.jsxs("div",{className:"card-shell group relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1",children:[he.jsx("div",{className:"card-gradient-border absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"}),he.jsxs("article",{className:"card-inner relative z-10 flex h-full min-h-[580px] flex-col rounded-2xl border border-cyber-border bg-cyber-surface p-8 transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]",children:[he.jsxs("div",{className:"mb-6 text-center",children:[he.jsx("div",{className:"card-icon-wrap mx-auto my-6 flex h-52 w-52 items-center justify-center text-cyber-text transition-all duration-300 group-hover:text-cyber-accent",children:e}),he.jsx("h2",{className:"text-cyber-text text-lg font-medium",children:s})]}),he.jsx("p",{className:"text-cyber-muted text-base leading-relaxed text-center flex-grow",children:t})]})]})})}Yl.propTypes={title:Sl.string.isRequired,svg:Sl.node.isRequired,body:Sl.string.isRequired,link:Sl.string.isRequired};function b_(){return he.jsxs("section",{id:"services",className:" min-h-[calc(100vh-7rem)] pt-0 pb-64 text-gray-500",children:[he.jsxs("h2",{className:"pb-32 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"What"})," ","We Do"]}),he.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch",children:[he.jsx(Yl,{title:"Website Design",svg:he.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:he.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"})}),body:"We specialize in creating visually stunning, user-friendly websites that captivate your audience and drive results. Our team of expert designers will work with you to bring your vision to life and create a digital experience that sets you apart from the competition.",link:"#contact"}),he.jsx(Yl,{title:"Database Management",svg:he.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:he.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"})}),body:"We offer comprehensive database management solutions to help you organize, store, and access your data with ease. Our team will work with you to develop a custom database system that meets your unique needs and ensures your data is secure and accessible.",link:"#contact"}),he.jsx(Yl,{title:"Data Analysis",svg:he.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:he.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})}),body:"We provide expert data analysis services to help you make informed decisions and drive business growth. Our team will help you collect, analyze, and interpret your data to uncover valuable insights and opportunities for improvement.",link:"#contact"})]})]})}class ca{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const R_=()=>{if(!(typeof localStorage>"u"))return{get:s=>Promise.resolve(localStorage.getItem(s)),set:(s,e)=>Promise.resolve(localStorage.setItem(s,e)),remove:s=>Promise.resolve(localStorage.removeItem(s))}},un={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:R_()},Dd=s=>s?typeof s=="string"?{publicKey:s}:s.toString()==="[object Object]"?s:{}:{},P_=(s,e="https://api.emailjs.com")=>{if(!s)return;const t=Dd(s);un.publicKey=t.publicKey,un.blockHeadless=t.blockHeadless,un.storageProvider=t.storageProvider,un.blockList=t.blockList,un.limitRate=t.limitRate,un.origin=t.origin||e},Ug=async(s,e,t={})=>{const r=await fetch(un.origin+s,{method:"POST",headers:t,body:e}),o=await r.text(),l=new ca(r.status,o);if(r.ok)return l;throw l},Fg=(s,e,t)=>{if(!s||typeof s!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},L_=s=>{if(s&&s.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Og=s=>s.webdriver||!s.languages||s.languages.length===0,kg=()=>new ca(451,"Unavailable For Headless Browser"),N_=(s,e)=>{if(!Array.isArray(s))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},D_=s=>!s.list?.length||!s.watchVariable,I_=(s,e)=>s instanceof FormData?s.get(e):s[e],Bg=(s,e)=>{if(D_(s))return!1;N_(s.list,s.watchVariable);const t=I_(e,s.watchVariable);return typeof t!="string"?!1:s.list.includes(t)},zg=()=>new ca(403,"Forbidden"),U_=(s,e)=>{if(typeof s!="number"||s<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},F_=async(s,e,t)=>{const r=Number(await t.get(s)||0);return e-Date.now()+r},Vg=async(s,e,t)=>{if(!e.throttle||!t)return!1;U_(e.throttle,e.id);const r=e.id||s;return await F_(r,e.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},Hg=()=>new ca(429,"Too Many Requests"),O_=async(s,e,t,r)=>{const o=Dd(r),l=o.publicKey||un.publicKey,u=o.blockHeadless||un.blockHeadless,f=o.storageProvider||un.storageProvider,p={...un.blockList,...o.blockList},h={...un.limitRate,...o.limitRate};return u&&Og(navigator)?Promise.reject(kg()):(Fg(l,s,e),L_(t),t&&Bg(p,t)?Promise.reject(zg()):await Vg(location.pathname,h,f)?Promise.reject(Hg()):Ug("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:s,template_id:e,template_params:t}),{"Content-type":"application/json"}))},k_=s=>{if(!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},B_=s=>typeof s=="string"?document.querySelector(s):s,z_=async(s,e,t,r)=>{const o=Dd(r),l=o.publicKey||un.publicKey,u=o.blockHeadless||un.blockHeadless,f=un.storageProvider||o.storageProvider,p={...un.blockList,...o.blockList},h={...un.limitRate,...o.limitRate};if(u&&Og(navigator))return Promise.reject(kg());const g=B_(t);Fg(l,s,e),k_(g);const _=new FormData(g);return Bg(p,_)?Promise.reject(zg()):await Vg(location.pathname,h,f)?Promise.reject(Hg()):(_.append("lib_version","4.4.1"),_.append("service_id",s),_.append("template_id",e),_.append("user_id",l),Ug("/api/v1.0/email/send-form",_))},V_={init:P_,send:O_,sendForm:z_,EmailJSResponseStatus:ca};function H_(){const s=pi.useRef(),[e,t]=pi.useState(!1),[r,o]=pi.useState("Send message"),l=u=>{t(!0),o("Sending..."),u.preventDefault(),V_.sendForm("Mtrx_Studio","contact_us_form",s.current,{publicKey:"nsFzgifHp3J6haAMV"}).then(()=>{console.log("SUCCESS!"),t(!0),o("Sent!")},f=>{console.log("FAILED...",f.text),o("Send message"),t(!1)})};return he.jsx("section",{id:"contact",className:"pt-0 min-h-[calc(100vh-7rem)] flex items-center justify-center",children:he.jsxs("div",{className:"grid grid-cols-1 text-center items-center gap-16 p-6 mx-auto w-full max-w-2xl  min-h-[calc(100vh-7rem)] justify-center",children:[he.jsxs("div",{children:[he.jsxs("h1",{className:"mb-4 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[he.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"Let's"})," ","Talk"]}),he.jsx("p",{className:"text-[15px] text-slate-300 mt-4 leading-relaxed",children:"Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help."}),he.jsx("div",{className:"mt-8 mx-auto flex flex-col sm:flex-row justify-evenly gap-6",children:he.jsx("div",{className:"mt-5 sm:mt-12 w-full max-w-md sm:max-w-none sm:w-1/2",children:he.jsxs("div",{className:`\r
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
								`,children:"Tell us about your project"})]}),he.jsx(Df,{variant:"primary",type:"submit",id:"contact-submit",disabled:e,className:"w-full !mt-2",children:r})]})]})})}const Id="183",G_=0,Am=1,W_=2,ql=1,X_=2,Zo=3,Nr=0,Fn=1,Ai=2,Ji=0,$s=1,If=2,Cm=3,bm=4,j_=5,ts=100,Y_=101,q_=102,Z_=103,K_=104,$_=200,J_=201,Q_=202,ex=203,Uf=204,Ff=205,tx=206,nx=207,ix=208,rx=209,sx=210,ox=211,ax=212,lx=213,cx=214,Of=0,kf=1,Bf=2,Qs=3,zf=4,Vf=5,Hf=6,Gf=7,Gg=0,ux=1,fx=2,Ri=0,Wg=1,Xg=2,jg=3,Yg=4,qg=5,Zg=6,Kg=7,$g=300,os=301,eo=302,Ju=303,Qu=304,oc=306,Wf=1e3,$i=1001,Xf=1002,fn=1003,dx=1004,Ml=1005,_n=1006,ef=1007,is=1008,ii=1009,Jg=1010,Qg=1011,na=1012,Ud=1013,Ni=1014,Ci=1015,er=1016,Fd=1017,Od=1018,ia=1020,e0=35902,t0=35899,n0=1021,i0=1022,gi=1023,tr=1026,rs=1027,r0=1028,kd=1029,to=1030,Bd=1031,zd=1033,Zl=33776,Kl=33777,$l=33778,Jl=33779,jf=35840,Yf=35841,qf=35842,Zf=35843,Kf=36196,$f=37492,Jf=37496,Qf=37488,ed=37489,td=37490,nd=37491,id=37808,rd=37809,sd=37810,od=37811,ad=37812,ld=37813,cd=37814,ud=37815,fd=37816,dd=37817,hd=37818,pd=37819,md=37820,gd=37821,vd=36492,_d=36494,xd=36495,yd=36283,Sd=36284,Md=36285,Ed=36286,hx=3200,px=0,mx=1,Pr="",ti="srgb",no="srgb-linear",tc="linear",Ut="srgb",Ds=7680,Rm=519,gx=512,vx=513,_x=514,Vd=515,xx=516,yx=517,Hd=518,Sx=519,Pm=35044,Lm="300 es",bi=2e3,nc=2001;function Mx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ic(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ex(){const s=ic("canvas");return s.style.display="block",s}const Nm={};function Dm(...s){const e="THREE."+s.shift();console.log(e,...s)}function s0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function gt(...s){s=s0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=s0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function rc(...s){const e=s.join(" ");e in Nm||(Nm[e]=!0,gt(...s))}function Tx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const wx={[Of]:kf,[Bf]:Hf,[zf]:Gf,[Qs]:Vf,[kf]:Of,[Hf]:Bf,[Gf]:zf,[Vf]:Qs};class so{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Im=1234567;const Jo=Math.PI/180,ra=180/Math.PI;function ls(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function Gd(s,e){return(s%e+e)%e}function Ax(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function Cx(s,e,t){return s!==e?(t-s)/(e-s):0}function Qo(s,e,t){return(1-t)*s+t*e}function bx(s,e,t,r){return Qo(s,e,1-Math.exp(-t*r))}function Rx(s,e=1){return e-Math.abs(Gd(s,e*2)-e)}function Px(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Lx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Nx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dx(s,e){return s+Math.random()*(e-s)}function Ix(s){return s*(.5-Math.random())}function Ux(s){s!==void 0&&(Im=s);let e=Im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fx(s){return s*Jo}function Ox(s){return s*ra}function kx(s){return(s&s-1)===0&&s!==0}function Bx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Vx(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),p=u(t/2),h=l((e+r)/2),g=u((e+r)/2),_=l((e-r)/2),v=u((e-r)/2),S=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":s.set(f*g,p*_,p*v,f*h);break;case"YZY":s.set(p*v,f*g,p*_,f*h);break;case"ZXZ":s.set(p*_,p*v,f*g,f*h);break;case"XZX":s.set(f*g,p*M,p*S,f*h);break;case"YXY":s.set(p*S,f*g,p*M,f*h);break;case"ZYZ":s.set(p*M,p*S,f*g,f*h);break;default:gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ys(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const qs={DEG2RAD:Jo,RAD2DEG:ra,generateUUID:ls,clamp:Mt,euclideanModulo:Gd,mapLinear:Ax,inverseLerp:Cx,lerp:Qo,damp:bx,pingpong:Rx,smoothstep:Px,smootherstep:Lx,randInt:Nx,randFloat:Dx,randFloatSpread:Ix,seededRandom:Ux,degToRad:Fx,radToDeg:Ox,isPowerOfTwo:kx,ceilPowerOfTwo:Bx,floorPowerOfTwo:zx,setQuaternionFromProperEuler:Vx,normalize:En,denormalize:Ys};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let p=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=l[u+0],S=l[u+1],M=l[u+2],C=l[u+3];if(_!==C||p!==v||h!==S||g!==M){let y=p*v+h*S+g*M+_*C;y<0&&(v=-v,S=-S,M=-M,C=-C,y=-y);let x=1-f;if(y<.9995){const R=Math.acos(y),P=Math.sin(R);x=Math.sin(x*R)/P,f=Math.sin(f*R)/P,p=p*x+v*f,h=h*x+S*f,g=g*x+M*f,_=_*x+C*f}else{p=p*x+v*f,h=h*x+S*f,g=g*x+M*f,_=_*x+C*f;const R=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=R,h*=R,g*=R,_*=R}}e[t]=p,e[t+1]=h,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],p=r[o+1],h=r[o+2],g=r[o+3],_=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+g*_+p*S-h*v,e[t+1]=p*M+g*v+h*_-f*S,e[t+2]=h*M+g*S+f*v-p*_,e[t+3]=g*M-f*_-p*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(r/2),g=f(o/2),_=f(l/2),v=p(r/2),S=p(o/2),M=p(l/2);switch(u){case"XYZ":this._x=v*g*_+h*S*M,this._y=h*S*_-v*g*M,this._z=h*g*M+v*S*_,this._w=h*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+h*S*M,this._y=h*S*_-v*g*M,this._z=h*g*M-v*S*_,this._w=h*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-h*S*M,this._y=h*S*_+v*g*M,this._z=h*g*M+v*S*_,this._w=h*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-h*S*M,this._y=h*S*_+v*g*M,this._z=h*g*M-v*S*_,this._w=h*g*_+v*S*M;break;case"YZX":this._x=v*g*_+h*S*M,this._y=h*S*_+v*g*M,this._z=h*g*M-v*S*_,this._w=h*g*_-v*S*M;break;case"XZY":this._x=v*g*_-h*S*M,this._y=h*S*_-v*g*M,this._z=h*g*M+v*S*_,this._w=h*g*_+v*S*M;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],g=t[6],_=t[10],v=r+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,g=t._w;return this._x=r*g+u*f+o*h-l*p,this._y=o*g+u*p+l*f-r*h,this._z=l*g+u*h+r*p-o*f,this._w=u*g-r*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);p=Math.sin(p*h)/g,t=Math.sin(t*h)/g,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*r),g=2*(f*t-l*o),_=2*(l*r-u*t);return this.x=t+p*h+u*_-f*g,this.y=r+p*g+f*h-l*_,this.z=o+p*_+l*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return tf.copy(this).projectOnVector(e),this.sub(tf)}reflect(e){return this.sub(tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tf=new K,Um=new oo;class xt{constructor(e,t,r,o,l,u,f,p,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h)}set(e,t,r,o,l,u,f,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=p,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],p=r[6],h=r[1],g=r[4],_=r[7],v=r[2],S=r[5],M=r[8],C=o[0],y=o[3],x=o[6],R=o[1],P=o[4],b=o[7],B=o[2],U=o[5],O=o[8];return l[0]=u*C+f*R+p*B,l[3]=u*y+f*P+p*U,l[6]=u*x+f*b+p*O,l[1]=h*C+g*R+_*B,l[4]=h*y+g*P+_*U,l[7]=h*x+g*b+_*O,l[2]=v*C+S*R+M*B,l[5]=v*y+S*P+M*U,l[8]=v*x+S*b+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-r*l*g+r*f*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8],_=g*u-f*h,v=f*p-g*l,S=h*l-u*p,M=t*_+r*v+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(o*h-g*r)*C,e[2]=(f*r-o*u)*C,e[3]=v*C,e[4]=(g*t-o*p)*C,e[5]=(o*l-f*t)*C,e[6]=S*C,e[7]=(r*p-h*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(nf.makeScale(e,t)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new xt,Fm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hx(){const s={enabled:!0,workingColorSpace:no,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Pr?tc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[no]:{primaries:e,whitePoint:r,transfer:tc,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const bt=Hx();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Is;class Gx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Is===void 0&&(Is=ic("canvas")),Is.width=e.width,Is.height=e.height;const o=Is.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Is}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wx=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(rf(o[u].image)):l.push(rf(o[u]))}else l=rf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function rf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let Xx=0;const sf=new K;class wn extends so{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,r=$i,o=$i,l=_n,u=is,f=gi,p=ii,h=wn.DEFAULT_ANISOTROPY,g=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=ls(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sf).x}get height(){return this.source.getSize(sf).y}get depth(){return this.source.getSize(sf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=$g;wn.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,t=0,r=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],g=p[4],_=p[8],v=p[1],S=p[5],M=p[9],C=p[2],y=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-C)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+C)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,b=(S+1)/2,B=(x+1)/2,U=(g+v)/4,O=(_+C)/4,w=(M+y)/4;return P>b&&P>B?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=U/r,l=O/r):b>B?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=U/o,l=w/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=O/l,o=w/l),this.set(r,o,l,t),this}let R=Math.sqrt((y-M)*(y-M)+(_-C)*(_-C)+(v-g)*(v-g));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(_-C)/R,this.z=(v-g)/R,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jx extends so{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new wn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends jx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class o0 extends wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yx extends wn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=fn,this.minFilter=fn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kt{constructor(e,t,r,o,l,u,f,p,h,g,_,v,S,M,C,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h,g,_,v,S,M,C,y)}set(e,t,r,o,l,u,f,p,h,g,_,v,S,M,C,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=M,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Us.setFromMatrixColumn(e,0).length(),l=1/Us.setFromMatrixColumn(e,1).length(),u=1/Us.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*g,S=u*_,M=f*g,C=f*_;t[0]=p*g,t[4]=-p*_,t[8]=h,t[1]=S+M*h,t[5]=v-C*h,t[9]=-f*p,t[2]=C-v*h,t[6]=M+S*h,t[10]=u*p}else if(e.order==="YXZ"){const v=p*g,S=p*_,M=h*g,C=h*_;t[0]=v+C*f,t[4]=M*f-S,t[8]=u*h,t[1]=u*_,t[5]=u*g,t[9]=-f,t[2]=S*f-M,t[6]=C+v*f,t[10]=u*p}else if(e.order==="ZXY"){const v=p*g,S=p*_,M=h*g,C=h*_;t[0]=v-C*f,t[4]=-u*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*g,t[9]=C-v*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const v=u*g,S=u*_,M=f*g,C=f*_;t[0]=p*g,t[4]=M*h-S,t[8]=v*h+C,t[1]=p*_,t[5]=C*h+v,t[9]=S*h-M,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const v=u*p,S=u*h,M=f*p,C=f*h;t[0]=p*g,t[4]=C-v*_,t[8]=M*_+S,t[1]=_,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=S*_+M,t[10]=v-C*_}else if(e.order==="XZY"){const v=u*p,S=u*h,M=f*p,C=f*h;t[0]=p*g,t[4]=-_,t[8]=h*g,t[1]=v*_+C,t[5]=u*g,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*g,t[10]=C*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qx,e,Zx)}lookAt(e,t,r){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Tr.crossVectors(r,Hn),Tr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Tr.crossVectors(r,Hn)),Tr.normalize(),El.crossVectors(Hn,Tr),o[0]=Tr.x,o[4]=El.x,o[8]=Hn.x,o[1]=Tr.y,o[5]=El.y,o[9]=Hn.y,o[2]=Tr.z,o[6]=El.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],p=r[8],h=r[12],g=r[1],_=r[5],v=r[9],S=r[13],M=r[2],C=r[6],y=r[10],x=r[14],R=r[3],P=r[7],b=r[11],B=r[15],U=o[0],O=o[4],w=o[8],N=o[12],ae=o[1],k=o[5],J=o[9],Q=o[13],se=o[2],X=o[6],Z=o[10],V=o[14],Y=o[3],ie=o[7],ce=o[11],F=o[15];return l[0]=u*U+f*ae+p*se+h*Y,l[4]=u*O+f*k+p*X+h*ie,l[8]=u*w+f*J+p*Z+h*ce,l[12]=u*N+f*Q+p*V+h*F,l[1]=g*U+_*ae+v*se+S*Y,l[5]=g*O+_*k+v*X+S*ie,l[9]=g*w+_*J+v*Z+S*ce,l[13]=g*N+_*Q+v*V+S*F,l[2]=M*U+C*ae+y*se+x*Y,l[6]=M*O+C*k+y*X+x*ie,l[10]=M*w+C*J+y*Z+x*ce,l[14]=M*N+C*Q+y*V+x*F,l[3]=R*U+P*ae+b*se+B*Y,l[7]=R*O+P*k+b*X+B*ie,l[11]=R*w+P*J+b*Z+B*ce,l[15]=R*N+P*Q+b*V+B*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],g=e[2],_=e[6],v=e[10],S=e[14],M=e[3],C=e[7],y=e[11],x=e[15],R=p*S-h*v,P=f*S-h*_,b=f*v-p*_,B=u*S-h*g,U=u*v-p*g,O=u*_-f*g;return t*(C*R-y*P+x*b)-r*(M*R-y*B+x*U)+o*(M*P-C*B+x*O)-l*(M*b-C*U+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],g=e[8],_=e[9],v=e[10],S=e[11],M=e[12],C=e[13],y=e[14],x=e[15],R=t*f-r*u,P=t*p-o*u,b=t*h-l*u,B=r*p-o*f,U=r*h-l*f,O=o*h-l*p,w=g*C-_*M,N=g*y-v*M,ae=g*x-S*M,k=_*y-v*C,J=_*x-S*C,Q=v*x-S*y,se=R*Q-P*J+b*k+B*ae-U*N+O*w;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/se;return e[0]=(f*Q-p*J+h*k)*X,e[1]=(o*J-r*Q-l*k)*X,e[2]=(C*O-y*U+x*B)*X,e[3]=(v*U-_*O-S*B)*X,e[4]=(p*ae-u*Q-h*N)*X,e[5]=(t*Q-o*ae+l*N)*X,e[6]=(y*b-M*O-x*P)*X,e[7]=(g*O-v*b+S*P)*X,e[8]=(u*J-f*ae+h*w)*X,e[9]=(r*ae-t*J-l*w)*X,e[10]=(M*U-C*b+x*R)*X,e[11]=(_*b-g*U-S*R)*X,e[12]=(f*N-u*k-p*w)*X,e[13]=(t*k-r*N+o*w)*X,e[14]=(C*P-M*B-y*R)*X,e[15]=(g*B-_*P+v*R)*X,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,p=e.z,h=l*u,g=l*f;return this.set(h*u+r,h*f-o*p,h*p+o*f,0,h*f+o*p,g*f+r,g*p-o*u,0,h*p-o*f,g*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,g=u+u,_=f+f,v=l*h,S=l*g,M=l*_,C=u*g,y=u*_,x=f*_,R=p*h,P=p*g,b=p*_,B=r.x,U=r.y,O=r.z;return o[0]=(1-(C+x))*B,o[1]=(S+b)*B,o[2]=(M-P)*B,o[3]=0,o[4]=(S-b)*U,o[5]=(1-(v+x))*U,o[6]=(y+R)*U,o[7]=0,o[8]=(M+P)*O,o[9]=(y-R)*O,o[10]=(1-(v+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Us.set(o[0],o[1],o[2]).length();const f=Us.set(o[4],o[5],o[6]).length(),p=Us.set(o[8],o[9],o[10]).length();l<0&&(u=-u),fi.copy(this);const h=1/u,g=1/f,_=1/p;return fi.elements[0]*=h,fi.elements[1]*=h,fi.elements[2]*=h,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,t.setFromRotationMatrix(fi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,u,f=bi,p=!1){const h=this.elements,g=2*l/(t-e),_=2*l/(r-o),v=(t+e)/(t-e),S=(r+o)/(r-o);let M,C;if(p)M=l/(u-l),C=u*l/(u-l);else if(f===bi)M=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===nc)M=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=bi,p=!1){const h=this.elements,g=2/(t-e),_=2/(r-o),v=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,C;if(p)M=1/(u-l),C=u/(u-l);else if(f===bi)M=-2/(u-l),C=-(u+l)/(u-l);else if(f===nc)M=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Us=new K,fi=new Kt,qx=new K(0,0,0),Zx=new K(1,1,1),Tr=new K,El=new K,Hn=new K,km=new Kt,Bm=new oo;class nr{constructor(e=0,t=0,r=0,o=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],h=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class a0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kx=0;const zm=new K,Fs=new oo,Xi=new Kt,Tl=new K,Go=new K,$x=new K,Jx=new oo,Vm=new K(1,0,0),Hm=new K(0,1,0),Gm=new K(0,0,1),Wm={type:"added"},Qx={type:"removed"},Os={type:"childadded",child:null},of={type:"childremoved",child:null};class Wn extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new K,t=new nr,r=new oo,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new xt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new a0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Tl.copy(e):Tl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Go,Tl,this.up):Xi.lookAt(Tl,Go,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),Os.child=e,this.dispatchEvent(Os),Os.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qx),of.child=e,this.dispatchEvent(of),of.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,$x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),g=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const p=[];for(const h in f){const g=f[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new K(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zs extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ey={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),x=this._getHandJoint(h,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;h.inputState.pinching&&v>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function lf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=Gd(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=lf(u,l,e+1/3),this.g=lf(u,l,e),this.b=lf(u,l,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function r(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=l0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return bt.workingToColorSpace(vn.copy(this),e),Math.round(Mt(vn.r*255,0,255))*65536+Math.round(Mt(vn.g*255,0,255))*256+Math.round(Mt(vn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(vn.copy(this),t);const r=vn.r,o=vn.g,l=vn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,h;const g=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=g<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ti){bt.workingToColorSpace(vn.copy(this),e);const t=vn.r,r=vn.g,o=vn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(wl);const r=Qo(wr.h,wl.h,t),o=Qo(wr.s,wl.s,t),l=Qo(wr.l,wl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Rt;Rt.NAMES=l0;class ty extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const di=new K,ji=new K,cf=new K,Yi=new K,ks=new K,Bs=new K,Xm=new K,uf=new K,ff=new K,df=new K,hf=new Zt,pf=new Zt,mf=new Zt;class mi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){di.subVectors(o,t),ji.subVectors(r,t),cf.subVectors(e,t);const u=di.dot(di),f=di.dot(ji),p=di.dot(cf),h=ji.dot(ji),g=ji.dot(cf),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(h*p-f*g)*v,M=(u*g-f*p)*v;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,r,o,l,u,f,p){return this.getBarycoord(e,t,r,o,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Yi.x),p.addScaledVector(u,Yi.y),p.addScaledVector(f,Yi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return hf.setScalar(0),pf.setScalar(0),mf.setScalar(0),hf.fromBufferAttribute(e,t),pf.fromBufferAttribute(e,r),mf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(hf,l.x),u.addScaledVector(pf,l.y),u.addScaledVector(mf,l.z),u}static isFrontFacing(e,t,r,o){return di.subVectors(r,t),ji.subVectors(e,t),di.cross(ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),di.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ks.subVectors(o,r),Bs.subVectors(l,r),uf.subVectors(e,r);const p=ks.dot(uf),h=Bs.dot(uf);if(p<=0&&h<=0)return t.copy(r);ff.subVectors(e,o);const g=ks.dot(ff),_=Bs.dot(ff);if(g>=0&&_<=g)return t.copy(o);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return u=p/(p-g),t.copy(r).addScaledVector(ks,u);df.subVectors(e,l);const S=ks.dot(df),M=Bs.dot(df);if(M>=0&&S<=M)return t.copy(l);const C=S*h-p*M;if(C<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(Bs,f);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return Xm.subVectors(l,o),f=(_-g)/(_-g+(S-M)),t.copy(o).addScaledVector(Xm,f);const x=1/(y+C+v);return u=C*x,f=v*x,t.copy(r).addScaledVector(ks,u).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ua{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,hi):hi.fromBufferAttribute(l,u),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),Cl.subVectors(this.max,Wo),zs.subVectors(e.a,Wo),Vs.subVectors(e.b,Wo),Hs.subVectors(e.c,Wo),Ar.subVectors(Vs,zs),Cr.subVectors(Hs,Vs),qr.subVectors(zs,Hs);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-qr.z,qr.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,qr.z,0,-qr.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-qr.y,qr.x,0];return!gf(t,zs,Vs,Hs,Cl)||(t=[1,0,0,0,1,0,0,0,1],!gf(t,zs,Vs,Hs,Cl))?!1:(bl.crossVectors(Ar,Cr),t=[bl.x,bl.y,bl.z],gf(t,zs,Vs,Hs,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new K,new K,new K,new K,new K,new K,new K,new K],hi=new K,Al=new ua,zs=new K,Vs=new K,Hs=new K,Ar=new K,Cr=new K,qr=new K,Wo=new K,Cl=new K,bl=new K,Zr=new K;function gf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const f=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),p=e.dot(Zr),h=t.dot(Zr),g=r.dot(Zr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>f)return!1}return!0}const Jt=new K,Rl=new Ge;let ny=0;class Li{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ny++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Pm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ys(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),r=En(r,this.array),o=En(o,this.array),l=En(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pm&&(e.usage=this.usage),e}}class c0 extends Li{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class u0 extends Li{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class An extends Li{constructor(e,t,r){super(new Float32Array(e),t,r)}}const iy=new ua,Xo=new K,vf=new K;class Xd{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):iy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const t=Xo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Xo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(vf)),this.expandByPoint(Xo.copy(e.center).sub(vf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ry=0;const ei=new Kt,_f=new Wn,Gs=new K,Gn=new ua,jo=new ua,an=new K;class vi extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ry++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?u0:c0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];jo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Gn.min,jo.min),Gn.expandByPoint(an),an.addVectors(Gn.max,jo.max),Gn.expandByPoint(an)):(Gn.expandByPoint(jo.min),Gn.expandByPoint(jo.max))}Gn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)an.fromBufferAttribute(f,h),p&&(Gs.fromBufferAttribute(e,h),an.add(Gs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let w=0;w<r.count;w++)f[w]=new K,p[w]=new K;const h=new K,g=new K,_=new K,v=new Ge,S=new Ge,M=new Ge,C=new K,y=new K;function x(w,N,ae){h.fromBufferAttribute(r,w),g.fromBufferAttribute(r,N),_.fromBufferAttribute(r,ae),v.fromBufferAttribute(l,w),S.fromBufferAttribute(l,N),M.fromBufferAttribute(l,ae),g.sub(h),_.sub(h),S.sub(v),M.sub(v);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(C.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(k),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(k),f[w].add(C),f[N].add(C),f[ae].add(C),p[w].add(y),p[N].add(y),p[ae].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,N=R.length;w<N;++w){const ae=R[w],k=ae.start,J=ae.count;for(let Q=k,se=k+J;Q<se;Q+=3)x(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new K,b=new K,B=new K,U=new K;function O(w){B.fromBufferAttribute(o,w),U.copy(B);const N=f[w];P.copy(N),P.sub(B.multiplyScalar(B.dot(N))).normalize(),b.crossVectors(U,N);const k=b.dot(p[w])<0?-1:1;u.setXYZW(w,P.x,P.y,P.z,k)}for(let w=0,N=R.length;w<N;++w){const ae=R[w],k=ae.start,J=ae.count;for(let Q=k,se=k+J;Q<se;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new K,l=new K,u=new K,f=new K,p=new K,h=new K,g=new K,_=new K;if(e)for(let v=0,S=e.count;v<S;v+=3){const M=e.getX(v+0),C=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,y),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,C),h.fromBufferAttribute(r,y),f.add(g),p.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,p){const h=f.array,g=f.itemSize,_=f.normalized,v=new h.constructor(p.length*g);let S=0,M=0;for(let C=0,y=p.length;C<y;C++){f.isInterleavedBufferAttribute?S=p[C]*f.data.stride+f.offset:S=p[C]*g;for(let x=0;x<g;x++)v[M++]=h[S++]}return new Li(v,g,_)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let g=0,_=h.length;g<_;g++){const v=h[g],S=e(v,r);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const S=h[_];g.push(S.toJSON(e.data))}g.length>0&&(o[p]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const l=e.morphAttributes;for(const h in l){const g=[],_=l[h];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sy=0;class ac extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=$s,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uf,this.blendDst=Ff,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==Nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Uf&&(r.blendSrc=this.blendSrc),this.blendDst!==Ff&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new K,xf=new K,Pl=new K,br=new K,yf=new K,Ll=new K,Sf=new K;class oy{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){xf.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(xf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),f=br.dot(this.direction),p=-br.dot(Pl),h=br.lengthSq(),g=Math.abs(1-u*u);let _,v,S,M;if(g>0)if(_=u*p-f,v=u*f-p,M=l*g,_>=0)if(v>=-M)if(v<=M){const C=1/g;_*=C,v*=C,S=_*(_+u*v+2*f)+v*(u*_+v+2*p)+h}else v=l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*p)+h;else v=-l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*p)+h;else v<=-M?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+h):v<=M?(_=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+h):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+v*(v+2*p)+h);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(xf).addScaledVector(Pl,v),S}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(l=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(l=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,r,o,l){yf.subVectors(t,e),Ll.subVectors(r,e),Sf.crossVectors(yf,Ll);let u=this.direction.dot(Sf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;br.subVectors(this.origin,e);const p=f*this.direction.dot(Ll.crossVectors(br,Ll));if(p<0)return null;const h=f*this.direction.dot(yf.cross(br));if(h<0||p+h>u)return null;const g=-f*br.dot(Sf);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ks extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=Gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jm=new Kt,Kr=new oy,Nl=new Xd,Ym=new K,Dl=new K,Il=new K,Ul=new K,Mf=new K,Fl=new K,qm=new K,Ol=new K;class Un extends Wn{constructor(e=new vi,t=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const g=f[p],_=l[p];g!==0&&(Mf.fromBufferAttribute(_,e),u?Fl.addScaledVector(Mf,g):Fl.addScaledVector(Mf.sub(t),g))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),Kr.copy(e.ray).recast(e.near),!(Nl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Nl,Ym)===null||Kr.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(jm.copy(l).invert(),Kr.copy(e.ray).applyMatrix4(jm),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,C=v.length;M<C;M++){const y=v[M],x=u[y.materialIndex],R=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=R,B=P;b<B;b+=3){const U=f.getX(b),O=f.getX(b+1),w=f.getX(b+2);o=kl(this,x,e,r,h,g,_,U,O,w),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let y=M,x=C;y<x;y+=3){const R=f.getX(y),P=f.getX(y+1),b=f.getX(y+2);o=kl(this,u,e,r,h,g,_,R,P,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,C=v.length;M<C;M++){const y=v[M],x=u[y.materialIndex],R=Math.max(y.start,S.start),P=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let b=R,B=P;b<B;b+=3){const U=b,O=b+1,w=b+2;o=kl(this,x,e,r,h,g,_,U,O,w),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=M,x=C;y<x;y+=3){const R=y,P=y+1,b=y+2;o=kl(this,u,e,r,h,g,_,R,P,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ay(s,e,t,r,o,l,u,f){let p;if(e.side===Fn?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===Nr,f),p===null)return null;Ol.copy(f),Ol.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Ol);return h<t.near||h>t.far?null:{distance:h,point:Ol.clone(),object:s}}function kl(s,e,t,r,o,l,u,f,p,h){s.getVertexPosition(f,Dl),s.getVertexPosition(p,Il),s.getVertexPosition(h,Ul);const g=ay(s,e,t,r,Dl,Il,Ul,qm);if(g){const _=new K;mi.getBarycoord(qm,Dl,Il,Ul,_),o&&(g.uv=mi.getInterpolatedAttribute(o,f,p,h,_,new Ge)),l&&(g.uv1=mi.getInterpolatedAttribute(l,f,p,h,_,new Ge)),u&&(g.normal=mi.getInterpolatedAttribute(u,f,p,h,_,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:f,b:p,c:h,normal:new K,materialIndex:0};mi.getNormal(Dl,Il,Ul,v.normal),g.face=v,g.barycoord=_}return g}class ly extends wn{constructor(e=null,t=1,r=1,o,l,u,f,p,h=fn,g=fn,_,v){super(null,u,f,p,h,g,o,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ef=new K,cy=new K,uy=new xt;class es{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ef.subVectors(r,t).cross(cy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ef),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uy.getNormalMatrix(e),o=this.coplanarPoint(Ef).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new Xd,fy=new Ge(.5,.5),Bl=new K;class f0{constructor(e=new es,t=new es,r=new es,o=new es,l=new es,u=new es){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=bi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],g=l[4],_=l[5],v=l[6],S=l[7],M=l[8],C=l[9],y=l[10],x=l[11],R=l[12],P=l[13],b=l[14],B=l[15];if(o[0].setComponents(h-u,S-g,x-M,B-R).normalize(),o[1].setComponents(h+u,S+g,x+M,B+R).normalize(),o[2].setComponents(h+f,S+_,x+C,B+P).normalize(),o[3].setComponents(h-f,S-_,x-C,B-P).normalize(),r)o[4].setComponents(p,v,y,b).normalize(),o[5].setComponents(h-p,S-v,x-y,B-b).normalize();else if(o[4].setComponents(h-p,S-v,x-y,B-b).normalize(),t===bi)o[5].setComponents(h+p,S+v,x+y,B+b).normalize();else if(t===nc)o[5].setComponents(p,v,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const t=fy.distanceTo(e.center);return $r.radius=.7071067811865476+t,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d0 extends wn{constructor(e=[],t=os,r,o,l,u,f,p,h,g){super(e,t,r,o,l,u,f,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sa extends wn{constructor(e,t,r=Ni,o,l,u,f=fn,p=fn,h,g=tr,_=1){if(g!==tr&&g!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,o,l,u,f,p,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dy extends sa{constructor(e,t=Ni,r=os,o,l,u=fn,f=fn,p,h=tr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,r,o,l,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class h0 extends wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fa extends vi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new An(h,3)),this.setAttribute("normal",new An(g,3)),this.setAttribute("uv",new An(_,2));function M(C,y,x,R,P,b,B,U,O,w,N){const ae=b/O,k=B/w,J=b/2,Q=B/2,se=U/2,X=O+1,Z=w+1;let V=0,Y=0;const ie=new K;for(let ce=0;ce<Z;ce++){const F=ce*k-Q;for(let q=0;q<X;q++){const be=q*ae-J;ie[C]=be*R,ie[y]=F*P,ie[x]=se,h.push(ie.x,ie.y,ie.z),ie[C]=0,ie[y]=0,ie[x]=U>0?1:-1,g.push(ie.x,ie.y,ie.z),_.push(q/O),_.push(1-ce/w),V+=1}}for(let ce=0;ce<w;ce++)for(let F=0;F<O;F++){const q=v+F+X*ce,be=v+F+X*(ce+1),Xe=v+(F+1)+X*(ce+1),et=v+(F+1)+X*ce;p.push(q,be,et),p.push(be,Xe,et),Y+=6}f.addGroup(S,Y,N),S+=Y,v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){gt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,p=l-1,h;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),h=r[o]-u,h<0)f=o+1;else if(h>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const g=r[o],v=r[o+1]-g,S=(u-g)/v;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),p=t||(u.isVector2?new Ge:new K);return p.copy(f).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new K,o=[],l=[],u=[],f=new K,p=new Kt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new K)}l[0]=new K,u[0]=new K;let h=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=h&&(h=g,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),v<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Mt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(f,M))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Mt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(p.makeRotationAxis(o[M],S*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jd extends Ii{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(e,t=new Ge){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=p-this.aX,S=h-this.aY;p=v*g-S*_+this.aX,h=v*_+S*g+this.aY}return r.set(p,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hy extends jd{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Yd(){let s=0,e=0,t=0,r=0;function o(l,u,f,p){s=l,e=f,t=-3*l+3*u-2*f-p,r=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,h){o(u,f,h*(f-l),h*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,h,g,_){let v=(u-l)/h-(f-l)/(h+g)+(f-u)/g,S=(f-u)/g-(p-u)/(g+_)+(p-f)/_;v*=g,S*=g,o(u,f,v,S)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const zl=new K,Tf=new Yd,wf=new Yd,Af=new Yd;class py extends Ii{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new K){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,g;this.closed||f>0?h=o[(f-1)%l]:(zl.subVectors(o[0],o[1]).add(o[0]),h=zl);const _=o[f%l],v=o[(f+1)%l];if(this.closed||f+2<l?g=o[(f+2)%l]:(zl.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(_),S),C=Math.pow(_.distanceToSquared(v),S),y=Math.pow(v.distanceToSquared(g),S);C<1e-4&&(C=1),M<1e-4&&(M=C),y<1e-4&&(y=C),Tf.initNonuniformCatmullRom(h.x,_.x,v.x,g.x,M,C,y),wf.initNonuniformCatmullRom(h.y,_.y,v.y,g.y,M,C,y),Af.initNonuniformCatmullRom(h.z,_.z,v.z,g.z,M,C,y)}else this.curveType==="catmullrom"&&(Tf.initCatmullRom(h.x,_.x,v.x,g.x,this.tension),wf.initCatmullRom(h.y,_.y,v.y,g.y,this.tension),Af.initCatmullRom(h.z,_.z,v.z,g.z,this.tension));return r.set(Tf.calc(p),wf.calc(p),Af.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new K().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Zm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,p=s*f;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*f+l*s+t}function my(s,e){const t=1-s;return t*t*e}function gy(s,e){return 2*(1-s)*s*e}function vy(s,e){return s*s*e}function ea(s,e,t,r){return my(s,e)+gy(s,t)+vy(s,r)}function _y(s,e){const t=1-s;return t*t*t*e}function xy(s,e){const t=1-s;return 3*t*t*s*e}function yy(s,e){return 3*(1-s)*s*s*e}function Sy(s,e){return s*s*s*e}function ta(s,e,t,r,o){return _y(s,e)+xy(s,t)+yy(s,r)+Sy(s,o)}class p0 extends Ii{constructor(e=new Ge,t=new Ge,r=new Ge,o=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ge){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(ta(e,o.x,l.x,u.x,f.x),ta(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class My extends Ii{constructor(e=new K,t=new K,r=new K,o=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(ta(e,o.x,l.x,u.x,f.x),ta(e,o.y,l.y,u.y,f.y),ta(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class m0 extends Ii{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ey extends Ii{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g0 extends Ii{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ea(e,o.x,l.x,u.x),ea(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ty extends Ii{constructor(e=new K,t=new K,r=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new K){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ea(e,o.x,l.x,u.x),ea(e,o.y,l.y,u.y),ea(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v0 extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,p=o[u===0?u:u-1],h=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(Zm(f,p.x,h.x,g.x,_.x),Zm(f,p.y,h.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ge().fromArray(o))}return this}}var Td=Object.freeze({__proto__:null,ArcCurve:hy,CatmullRomCurve3:py,CubicBezierCurve:p0,CubicBezierCurve3:My,EllipseCurve:jd,LineCurve:m0,LineCurve3:Ey,QuadraticBezierCurve:g0,QuadraticBezierCurve3:Ty,SplineCurve:v0});class wy extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Td[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,f=this.curves[l],p=f.getLength(),h=p===0?0:1-u/p;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(f);for(let h=0;h<p.length;h++){const g=p[h];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Td[o.type]().fromJSON(o))}return this}}class wd extends wy{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new m0(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new g0(this.currentPoint.clone(),new Ge(e,t),new Ge(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const f=new p0(this.currentPoint.clone(),new Ge(e,t),new Ge(r,o),new Ge(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new v0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+f,t+p,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,f,p){const h=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+h,t+g,r,o,l,u,f,p),this}absellipse(e,t,r,o,l,u,f,p){const h=new jd(e,t,r,o,l,u,f,p);if(this.curves.length>0){const _=h.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(h);const g=h.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ql extends wd{constructor(e){super(e),this.uuid=ls(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new wd().fromJSON(o))}return this}}function Ay(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=_0(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,p,h;if(r&&(l=Ly(s,e,l,t)),s.length>80*t){f=s[0],p=s[1];let g=f,_=p;for(let v=t;v<o;v+=t){const S=s[v],M=s[v+1];S<f&&(f=S),M<p&&(p=M),S>g&&(g=S),M>_&&(_=M)}h=Math.max(g-f,_-p),h=h!==0?32767/h:0}return oa(l,u,t,f,p,h,0),u}function _0(s,e,t,r,o){let l;if(o===Hy(s,e,t,r)>0)for(let u=e;u<t;u+=r)l=Km(u/r|0,s[u],s[u+1],l);else for(let u=t-r;u>=e;u-=r)l=Km(u/r|0,s[u],s[u+1],l);return l&&io(l,l.next)&&(la(l),l=l.next),l}function as(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(io(t,t.next)||Wt(t.prev,t,t.next)===0)){if(la(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function oa(s,e,t,r,o,l,u){if(!s)return;!u&&l&&Fy(s,r,o,l);let f=s;for(;s.prev!==s.next;){const p=s.prev,h=s.next;if(l?by(s,r,o,l):Cy(s)){e.push(p.i,s.i,h.i),la(s),s=h.next,f=h.next;continue}if(s=h,s===f){u?u===1?(s=Ry(as(s),e),oa(s,e,t,r,o,l,2)):u===2&&Py(s,e,t,r,o,l):oa(as(s),e,t,r,o,l,1);break}}}function Cy(s){const e=s.prev,t=s,r=s.next;if(Wt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,f=e.y,p=t.y,h=r.y,g=Math.min(o,l,u),_=Math.min(f,p,h),v=Math.max(o,l,u),S=Math.max(f,p,h);let M=r.next;for(;M!==e;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=S&&Ko(o,f,l,p,u,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function by(s,e,t,r){const o=s.prev,l=s,u=s.next;if(Wt(o,l,u)>=0)return!1;const f=o.x,p=l.x,h=u.x,g=o.y,_=l.y,v=u.y,S=Math.min(f,p,h),M=Math.min(g,_,v),C=Math.max(f,p,h),y=Math.max(g,_,v),x=Ad(S,M,e,t,r),R=Ad(C,y,e,t,r);let P=s.prevZ,b=s.nextZ;for(;P&&P.z>=x&&b&&b.z<=R;){if(P.x>=S&&P.x<=C&&P.y>=M&&P.y<=y&&P!==o&&P!==u&&Ko(f,g,p,_,h,v,P.x,P.y)&&Wt(P.prev,P,P.next)>=0||(P=P.prevZ,b.x>=S&&b.x<=C&&b.y>=M&&b.y<=y&&b!==o&&b!==u&&Ko(f,g,p,_,h,v,b.x,b.y)&&Wt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;P&&P.z>=x;){if(P.x>=S&&P.x<=C&&P.y>=M&&P.y<=y&&P!==o&&P!==u&&Ko(f,g,p,_,h,v,P.x,P.y)&&Wt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;b&&b.z<=R;){if(b.x>=S&&b.x<=C&&b.y>=M&&b.y<=y&&b!==o&&b!==u&&Ko(f,g,p,_,h,v,b.x,b.y)&&Wt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ry(s,e){let t=s;do{const r=t.prev,o=t.next.next;!io(r,o)&&y0(r,t,t.next,o)&&aa(r,o)&&aa(o,r)&&(e.push(r.i,t.i,o.i),la(t),la(t.next),t=s=o),t=t.next}while(t!==s);return as(t)}function Py(s,e,t,r,o,l){let u=s;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&By(u,f)){let p=S0(u,f);u=as(u,u.next),p=as(p,p.next),oa(u,e,t,r,o,l,0),oa(p,e,t,r,o,l,0);return}f=f.next}u=u.next}while(u!==s)}function Ly(s,e,t,r){const o=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*r,p=l<u-1?e[l+1]*r:s.length,h=_0(s,f,p,r,!1);h===h.next&&(h.steiner=!0),o.push(ky(h))}o.sort(Ny);for(let l=0;l<o.length;l++)t=Dy(o[l],t);return t}function Ny(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function Dy(s,e){const t=Iy(s,e);if(!t)return e;const r=S0(t,s);return as(r,r.next),as(t,t.next)}function Iy(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,u;if(io(s,t))return t;do{if(io(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const _=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=r&&_>l&&(l=_,u=t.x<t.next.x?t:t.next,_===r))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,p=u.x,h=u.y;let g=1/0;t=u;do{if(r>=t.x&&t.x>=p&&r!==t.x&&x0(o<h?r:l,o,p,h,o<h?l:r,o,t.x,t.y)){const _=Math.abs(o-t.y)/(r-t.x);aa(t,s)&&(_<g||_===g&&(t.x>u.x||t.x===u.x&&Uy(u,t)))&&(u=t,g=_)}t=t.next}while(t!==f);return u}function Uy(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function Fy(s,e,t,r){let o=s;do o.z===0&&(o.z=Ad(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Oy(o)}function Oy(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let u=r,f=0;for(let h=0;h<t&&(f++,u=u.nextZ,!!u);h++);let p=t;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,f--):(o=u,u=u.nextZ,p--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=u}l.nextZ=null,t*=2}while(e>1);return s}function Ad(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ky(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function x0(s,e,t,r,o,l,u,f){return(o-u)*(e-f)>=(s-u)*(l-f)&&(s-u)*(r-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(o-u)*(r-f)}function Ko(s,e,t,r,o,l,u,f){return!(s===u&&e===f)&&x0(s,e,t,r,o,l,u,f)}function By(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!zy(s,e)&&(aa(s,e)&&aa(e,s)&&Vy(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||io(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function io(s,e){return s.x===e.x&&s.y===e.y}function y0(s,e,t,r){const o=Hl(Wt(s,e,t)),l=Hl(Wt(s,e,r)),u=Hl(Wt(t,r,s)),f=Hl(Wt(t,r,e));return!!(o!==l&&u!==f||o===0&&Vl(s,t,e)||l===0&&Vl(s,r,e)||u===0&&Vl(t,s,r)||f===0&&Vl(t,e,r))}function Vl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Hl(s){return s>0?1:s<0?-1:0}function zy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&y0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function aa(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function Vy(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function S0(s,e){const t=Cd(s.i,s.x,s.y),r=Cd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Km(s,e,t,r){const o=Cd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function la(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Cd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hy(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class Gy{static triangulate(e,t,r=2){return Ay(e,t,r)}}class ss{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return ss.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];$m(e),Jm(r,e);let u=e.length;t.forEach($m);for(let p=0;p<t.length;p++)o.push(u),u+=t[p].length,Jm(r,t[p]);const f=Gy.triangulate(r,o);for(let p=0;p<f.length;p+=3)l.push(f.slice(p,p+3));return l}}function $m(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Jm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class qd extends vi{constructor(e=new Ql([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,p=e.length;f<p;f++){const h=e[f];u(h)}this.setAttribute("position",new An(o,3)),this.setAttribute("uv",new An(l,2)),this.computeVertexNormals();function u(f){const p=[],h=t.curveSegments!==void 0?t.curveSegments:12,g=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let v=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,C=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Wy;let P,b=!1,B,U,O,w;if(x){P=x.getSpacedPoints(g),b=!0,v=!1;const ve=x.isCatmullRomCurve3?x.closed:!1;B=x.computeFrenetFrames(g,ve),U=new K,O=new K,w=new K}v||(y=0,S=0,M=0,C=0);const N=f.extractPoints(h);let ae=N.shape;const k=N.holes;if(!ss.isClockWise(ae)){ae=ae.reverse();for(let ve=0,Me=k.length;ve<Me;ve++){const _e=k[ve];ss.isClockWise(_e)&&(k[ve]=_e.reverse())}}function Q(ve){const _e=10000000000000001e-36;let Ne=ve[0];for(let D=1;D<=ve.length;D++){const ot=D%ve.length,Ue=ve[ot],rt=Ue.x-Ne.x,Pe=Ue.y-Ne.y,L=rt*rt+Pe*Pe,E=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ne.x),Math.abs(Ne.y)),G=_e*E*E;if(L<=G){ve.splice(ot,1),D--;continue}Ne=Ue}}Q(ae),k.forEach(Q);const se=k.length,X=ae;for(let ve=0;ve<se;ve++){const Me=k[ve];ae=ae.concat(Me)}function Z(ve,Me,_e){return Me||Ct("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Me,_e)}const V=ae.length;function Y(ve,Me,_e){let Ne,D,ot;const Ue=ve.x-Me.x,rt=ve.y-Me.y,Pe=_e.x-ve.x,L=_e.y-ve.y,E=Ue*Ue+rt*rt,G=Ue*L-rt*Pe;if(Math.abs(G)>Number.EPSILON){const ue=Math.sqrt(E),me=Math.sqrt(Pe*Pe+L*L),fe=Me.x-rt/ue,je=Me.y+Ue/ue,Ae=_e.x-L/me,Je=_e.y+Pe/me,lt=((Ae-fe)*L-(Je-je)*Pe)/(Ue*L-rt*Pe);Ne=fe+Ue*lt-ve.x,D=je+rt*lt-ve.y;const Se=Ne*Ne+D*D;if(Se<=2)return new Ge(Ne,D);ot=Math.sqrt(Se/2)}else{let ue=!1;Ue>Number.EPSILON?Pe>Number.EPSILON&&(ue=!0):Ue<-Number.EPSILON?Pe<-Number.EPSILON&&(ue=!0):Math.sign(rt)===Math.sign(L)&&(ue=!0),ue?(Ne=-rt,D=Ue,ot=Math.sqrt(E)):(Ne=Ue,D=rt,ot=Math.sqrt(E/2))}return new Ge(Ne/ot,D/ot)}const ie=[];for(let ve=0,Me=X.length,_e=Me-1,Ne=ve+1;ve<Me;ve++,_e++,Ne++)_e===Me&&(_e=0),Ne===Me&&(Ne=0),ie[ve]=Y(X[ve],X[_e],X[Ne]);const ce=[];let F,q=ie.concat();for(let ve=0,Me=se;ve<Me;ve++){const _e=k[ve];F=[];for(let Ne=0,D=_e.length,ot=D-1,Ue=Ne+1;Ne<D;Ne++,ot++,Ue++)ot===D&&(ot=0),Ue===D&&(Ue=0),F[Ne]=Y(_e[Ne],_e[ot],_e[Ue]);ce.push(F),q=q.concat(F)}let be;if(y===0)be=ss.triangulateShape(X,k);else{const ve=[],Me=[];for(let _e=0;_e<y;_e++){const Ne=_e/y,D=S*Math.cos(Ne*Math.PI/2),ot=M*Math.sin(Ne*Math.PI/2)+C;for(let Ue=0,rt=X.length;Ue<rt;Ue++){const Pe=Z(X[Ue],ie[Ue],ot);Ie(Pe.x,Pe.y,-D),Ne===0&&ve.push(Pe)}for(let Ue=0,rt=se;Ue<rt;Ue++){const Pe=k[Ue];F=ce[Ue];const L=[];for(let E=0,G=Pe.length;E<G;E++){const ue=Z(Pe[E],F[E],ot);Ie(ue.x,ue.y,-D),Ne===0&&L.push(ue)}Ne===0&&Me.push(L)}}be=ss.triangulateShape(ve,Me)}const Xe=be.length,et=M+C;for(let ve=0;ve<V;ve++){const Me=v?Z(ae[ve],q[ve],et):ae[ve];b?(O.copy(B.normals[0]).multiplyScalar(Me.x),U.copy(B.binormals[0]).multiplyScalar(Me.y),w.copy(P[0]).add(O).add(U),Ie(w.x,w.y,w.z)):Ie(Me.x,Me.y,0)}for(let ve=1;ve<=g;ve++)for(let Me=0;Me<V;Me++){const _e=v?Z(ae[Me],q[Me],et):ae[Me];b?(O.copy(B.normals[ve]).multiplyScalar(_e.x),U.copy(B.binormals[ve]).multiplyScalar(_e.y),w.copy(P[ve]).add(O).add(U),Ie(w.x,w.y,w.z)):Ie(_e.x,_e.y,_/g*ve)}for(let ve=y-1;ve>=0;ve--){const Me=ve/y,_e=S*Math.cos(Me*Math.PI/2),Ne=M*Math.sin(Me*Math.PI/2)+C;for(let D=0,ot=X.length;D<ot;D++){const Ue=Z(X[D],ie[D],Ne);Ie(Ue.x,Ue.y,_+_e)}for(let D=0,ot=k.length;D<ot;D++){const Ue=k[D];F=ce[D];for(let rt=0,Pe=Ue.length;rt<Pe;rt++){const L=Z(Ue[rt],F[rt],Ne);b?Ie(L.x,L.y+P[g-1].y,P[g-1].x+_e):Ie(L.x,L.y,_+_e)}}}re(),ge();function re(){const ve=o.length/3;if(v){let Me=0,_e=V*Me;for(let Ne=0;Ne<Xe;Ne++){const D=be[Ne];We(D[2]+_e,D[1]+_e,D[0]+_e)}Me=g+y*2,_e=V*Me;for(let Ne=0;Ne<Xe;Ne++){const D=be[Ne];We(D[0]+_e,D[1]+_e,D[2]+_e)}}else{for(let Me=0;Me<Xe;Me++){const _e=be[Me];We(_e[2],_e[1],_e[0])}for(let Me=0;Me<Xe;Me++){const _e=be[Me];We(_e[0]+V*g,_e[1]+V*g,_e[2]+V*g)}}r.addGroup(ve,o.length/3-ve,0)}function ge(){const ve=o.length/3;let Me=0;pe(X,Me),Me+=X.length;for(let _e=0,Ne=k.length;_e<Ne;_e++){const D=k[_e];pe(D,Me),Me+=D.length}r.addGroup(ve,o.length/3-ve,1)}function pe(ve,Me){let _e=ve.length;for(;--_e>=0;){const Ne=_e;let D=_e-1;D<0&&(D=ve.length-1);for(let ot=0,Ue=g+y*2;ot<Ue;ot++){const rt=V*ot,Pe=V*(ot+1),L=Me+Ne+rt,E=Me+D+rt,G=Me+D+Pe,ue=Me+Ne+Pe;ct(L,E,G,ue)}}}function Ie(ve,Me,_e){p.push(ve),p.push(Me),p.push(_e)}function We(ve,Me,_e){Lt(ve),Lt(Me),Lt(_e);const Ne=o.length/3,D=R.generateTopUV(r,o,Ne-3,Ne-2,Ne-1);dt(D[0]),dt(D[1]),dt(D[2])}function ct(ve,Me,_e,Ne){Lt(ve),Lt(Me),Lt(Ne),Lt(Me),Lt(_e),Lt(Ne);const D=o.length/3,ot=R.generateSideWallUV(r,o,D-6,D-3,D-2,D-1);dt(ot[0]),dt(ot[1]),dt(ot[3]),dt(ot[1]),dt(ot[2]),dt(ot[3])}function Lt(ve){o.push(p[ve*3+0]),o.push(p[ve*3+1]),o.push(p[ve*3+2])}function dt(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return Xy(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,u=e.shapes.length;l<u;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Td[o.type]().fromJSON(o)),new qd(r,e.options)}}const Wy={generateTopUV:function(s,e,t,r,o){const l=e[t*3],u=e[t*3+1],f=e[r*3],p=e[r*3+1],h=e[o*3],g=e[o*3+1];return[new Ge(l,u),new Ge(f,p),new Ge(h,g)]},generateSideWallUV:function(s,e,t,r,o,l){const u=e[t*3],f=e[t*3+1],p=e[t*3+2],h=e[r*3],g=e[r*3+1],_=e[r*3+2],v=e[o*3],S=e[o*3+1],M=e[o*3+2],C=e[l*3],y=e[l*3+1],x=e[l*3+2];return Math.abs(f-g)<Math.abs(u-h)?[new Ge(u,1-p),new Ge(h,1-_),new Ge(v,1-M),new Ge(C,1-x)]:[new Ge(f,1-p),new Ge(g,1-_),new Ge(S,1-M),new Ge(y,1-x)]}};function Xy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class da extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),p=Math.floor(o),h=f+1,g=p+1,_=e/f,v=t/p,S=[],M=[],C=[],y=[];for(let x=0;x<g;x++){const R=x*v-u;for(let P=0;P<h;P++){const b=P*_-l;M.push(b,-R,0),C.push(0,0,1),y.push(P/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let R=0;R<f;R++){const P=R+h*x,b=R+h*(x+1),B=R+1+h*(x+1),U=R+1+h*x;S.push(P,b,U),S.push(b,B,U)}this.setIndex(S),this.setAttribute("position",new An(M,3)),this.setAttribute("normal",new An(C,3)),this.setAttribute("uv",new An(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class sc extends vi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let h=0;const g=[],_=new K,v=new K,S=[],M=[],C=[],y=[];for(let x=0;x<=r;x++){const R=[],P=x/r;let b=0;x===0&&u===0?b=.5/t:x===r&&p===Math.PI&&(b=-.5/t);for(let B=0;B<=t;B++){const U=B/t;_.x=-e*Math.cos(o+U*l)*Math.sin(u+P*f),_.y=e*Math.cos(u+P*f),_.z=e*Math.sin(o+U*l)*Math.sin(u+P*f),M.push(_.x,_.y,_.z),v.copy(_).normalize(),C.push(v.x,v.y,v.z),y.push(U+b,1-P),R.push(h++)}g.push(R)}for(let x=0;x<r;x++)for(let R=0;R<t;R++){const P=g[x][R+1],b=g[x][R],B=g[x+1][R],U=g[x+1][R+1];(x!==0||u>0)&&S.push(P,b,U),(x!==r-1||p<Math.PI)&&S.push(b,B,U)}this.setIndex(S),this.setAttribute("position",new An(M,3)),this.setAttribute("normal",new An(C,3)),this.setAttribute("uv",new An(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Tn(s){const e={};for(let t=0;t<s.length;t++){const r=ro(s[t]);for(const o in r)e[o]=r[o]}return e}function jy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function M0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Yy={clone:ro,merge:Tn};var qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qy,this.fragmentShader=Zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ky extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $y extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jy extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qm={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(eg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!eg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function eg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Qy{constructor(e,t,r){const o=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return p?p(g):g},this.setURLModifier=function(g){return p=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){const _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,v=h.length;_<v;_+=2){const S=h[_],M=h[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eS=new Qy;class Zd{constructor(e){this.manager=e!==void 0?e:eS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Zd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class tS extends Error{constructor(e,t){super(e),this.response=t}}class nS extends Zd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Qm.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:r,onError:o});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:r,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=Ki[e],_=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=v?parseInt(v):0,M=S!==0;let C=0;const y=new ReadableStream({start(x){R();function R(){_.read().then(({done:P,value:b})=>{if(P)x.close();else{C+=b.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:C,total:S});for(let U=0,O=g.length;U<O;U++){const w=g[U];w.onProgress&&w.onProgress(B)}x.enqueue(b),R()}},P=>{x.error(P)})}}});return new Response(y)}else throw new tS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),v=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(v);return h.arrayBuffer().then(M=>S.decode(M))}}}).then(h=>{Qm.add(`file:${e}`,h);const g=Ki[e];delete Ki[e];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onLoad&&S.onLoad(h)}}).catch(h=>{const g=Ki[e];if(g===void 0)throw this.manager.itemError(e),h;delete Ki[e];for(let _=0,v=g.length;_<v;_++){const S=g[_];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gl=new K,Wl=new oo,Ei=new K;class E0 extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Wl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Gl,Wl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rr=new K,tg=new Ge,ng=new Ge;class ni extends E0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z),Rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Rr.x,Rr.y).multiplyScalar(-e/Rr.z)}getViewSize(e,t){return this.getViewBounds(e,tg,ng),t.subVectors(ng,tg)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class T0 extends E0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=g*this.view.offsetY,p=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=-90,Xs=1;class iS extends Wn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const l=new ni(Ws,Xs,e,t);l.layers=this.layers,this.add(l);const u=new ni(Ws,Xs,e,t);u.layers=this.layers,this.add(u);const f=new ni(Ws,Xs,e,t);f.layers=this.layers,this.add(f);const p=new ni(Ws,Xs,e,t);p.layers=this.layers,this.add(p);const h=new ni(Ws,Xs,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===bi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===nc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,v,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class rS extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sS{constructor(){this.type="ShapePath",this.color=new Rt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new wd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,l,u){return this.currentPath.bezierCurveTo(e,t,r,o,l,u),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const R=[];for(let P=0,b=x.length;P<b;P++){const B=x[P],U=new Ql;U.curves=B.curves,R.push(U)}return R}function r(x,R){const P=R.length;let b=!1;for(let B=P-1,U=0;U<P;B=U++){let O=R[B],w=R[U],N=w.x-O.x,ae=w.y-O.y;if(Math.abs(ae)>Number.EPSILON){if(ae<0&&(O=R[U],N=-N,w=R[B],ae=-ae),x.y<O.y||x.y>w.y)continue;if(x.y===O.y){if(x.x===O.x)return!0}else{const k=ae*(x.x-O.x)-N*(x.y-O.y);if(k===0)return!0;if(k<0)continue;b=!b}}else{if(x.y!==O.y)continue;if(w.x<=x.x&&x.x<=O.x||O.x<=x.x&&x.x<=w.x)return!0}}return b}const o=ss.isClockWise,l=this.subPaths;if(l.length===0)return[];let u,f,p;const h=[];if(l.length===1)return f=l[0],p=new Ql,p.curves=f.curves,h.push(p),h;let g=!o(l[0].getPoints());g=e?!g:g;const _=[],v=[];let S=[],M=0,C;v[M]=void 0,S[M]=[];for(let x=0,R=l.length;x<R;x++)f=l[x],C=f.getPoints(),u=o(C),u=e?!u:u,u?(!g&&v[M]&&M++,v[M]={s:new Ql,p:C},v[M].s.curves=f.curves,g&&M++,S[M]=[]):S[M].push({h:f,p:C[0]});if(!v[0])return t(l);if(v.length>1){let x=!1,R=0;for(let P=0,b=v.length;P<b;P++)_[P]=[];for(let P=0,b=v.length;P<b;P++){const B=S[P];for(let U=0;U<B.length;U++){const O=B[U];let w=!0;for(let N=0;N<v.length;N++)r(O.p,v[N].p)&&(P!==N&&R++,w?(w=!1,_[N].push(O)):x=!0);w&&_[P].push(O)}}R>0&&x===!1&&(S=_)}let y;for(let x=0,R=v.length;x<R;x++){p=v[x].s,h.push(p),y=S[x];for(let P=0,b=y.length;P<b;P++)p.holes.push(y[P].h)}return h}}function ig(s,e,t,r){const o=oS(r);switch(t){case n0:return s*e;case r0:return s*e/o.components*o.byteLength;case kd:return s*e/o.components*o.byteLength;case to:return s*e*2/o.components*o.byteLength;case Bd:return s*e*2/o.components*o.byteLength;case i0:return s*e*3/o.components*o.byteLength;case gi:return s*e*4/o.components*o.byteLength;case zd:return s*e*4/o.components*o.byteLength;case Zl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yf:case Zf:return Math.max(s,16)*Math.max(e,8)/4;case jf:case qf:return Math.max(s,8)*Math.max(e,8)/2;case Kf:case $f:case Qf:case ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jf:case td:case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ad:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ld:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case dd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case md:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vd:case _d:case xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case yd:case Sd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Md:case Ed:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oS(s){switch(s){case ii:case Jg:return{byteLength:1,components:1};case na:case Qg:case er:return{byteLength:2,components:1};case Fd:case Od:return{byteLength:2,components:4};case Ni:case Ud:case Ci:return{byteLength:4,components:1};case e0:case t0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function w0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function aS(s){const e=new WeakMap;function t(f,p){const h=f.array,g=f.usage,_=h.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,h,g),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,h){const g=p.array,_=p.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,g);else{_.sort((S,M)=>S.start-M.start);let v=0;for(let S=1;S<_.length;S++){const M=_[v],C=_[S];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++v,_[v]=C)}_.length=v+1;for(let S=0,M=_.length;S<M;S++){const C=_[S];s.bufferSubData(h,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:u}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
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
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pS=`#ifdef USE_AOMAP
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
#endif`,mS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gS=`#ifdef USE_BATCHING
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
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SS=`#ifdef USE_IRIDESCENCE
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
#endif`,MS=`#ifdef USE_BUMPMAP
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LS=`#define PI 3.141592653589793
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
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DS=`vec3 transformedNormal = objectNormal;
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
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZS=`#ifdef USE_GRADIENTMAP
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
}`,KS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QS=`uniform bool receiveShadow;
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
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
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
#endif`,oM=`uniform sampler2D dfgLUT;
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
}`,aM=`
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
#endif`,lM=`#if defined( RE_IndirectDiffuse )
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
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vM=`#if defined( USE_POINTS_UV )
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
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
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
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jM=`float getShadowMask() {
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
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`#include <common>
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
}`,pE=`#if DEPTH_PACKING == 3200
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
}`,mE=`#define DISTANCE
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
}`,gE=`#define DISTANCE
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
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
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
}`,yE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,ME=`uniform vec3 diffuse;
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
}`,EE=`#define LAMBERT
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
}`,TE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,AE=`#define MATCAP
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
}`,CE=`#define NORMAL
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
}`,bE=`#define NORMAL
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
}`,RE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,IE=`#define TOON
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
}`,UE=`uniform float size;
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
}`,FE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,kE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
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
}`,zE=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:lS,alphahash_pars_fragment:cS,alphamap_fragment:uS,alphamap_pars_fragment:fS,alphatest_fragment:dS,alphatest_pars_fragment:hS,aomap_fragment:pS,aomap_pars_fragment:mS,batching_pars_vertex:gS,batching_vertex:vS,begin_vertex:_S,beginnormal_vertex:xS,bsdfs:yS,iridescence_fragment:SS,bumpmap_pars_fragment:MS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:AS,color_fragment:CS,color_pars_fragment:bS,color_pars_vertex:RS,color_vertex:PS,common:LS,cube_uv_reflection_fragment:NS,defaultnormal_vertex:DS,displacementmap_pars_vertex:IS,displacementmap_vertex:US,emissivemap_fragment:FS,emissivemap_pars_fragment:OS,colorspace_fragment:kS,colorspace_pars_fragment:BS,envmap_fragment:zS,envmap_common_pars_fragment:VS,envmap_pars_fragment:HS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:eM,envmap_vertex:WS,fog_vertex:XS,fog_pars_vertex:jS,fog_fragment:YS,fog_pars_fragment:qS,gradientmap_pars_fragment:ZS,lightmap_pars_fragment:KS,lights_lambert_fragment:$S,lights_lambert_pars_fragment:JS,lights_pars_begin:QS,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:fM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:vM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:xM,morphinstance_vertex:yM,morphcolor_vertex:SM,morphnormal_vertex:MM,morphtarget_pars_vertex:EM,morphtarget_vertex:TM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:CM,normal_pars_vertex:bM,normal_vertex:RM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:DM,iridescence_pars_fragment:IM,opaque_fragment:UM,packing:FM,premultiplied_alpha_fragment:OM,project_vertex:kM,dithering_fragment:BM,dithering_pars_fragment:zM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:WM,shadowmap_vertex:XM,shadowmask_pars_fragment:jM,skinbase_vertex:YM,skinning_pars_vertex:qM,skinning_vertex:ZM,skinnormal_vertex:KM,specularmap_fragment:$M,specularmap_pars_fragment:JM,tonemapping_fragment:QM,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:aE,background_frag:lE,backgroundCube_vert:cE,backgroundCube_frag:uE,cube_vert:fE,cube_frag:dE,depth_vert:hE,depth_frag:pE,distance_vert:mE,distance_frag:gE,equirect_vert:vE,equirect_frag:_E,linedashed_vert:xE,linedashed_frag:yE,meshbasic_vert:SE,meshbasic_frag:ME,meshlambert_vert:EE,meshlambert_frag:TE,meshmatcap_vert:wE,meshmatcap_frag:AE,meshnormal_vert:CE,meshnormal_frag:bE,meshphong_vert:RE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:DE,meshtoon_frag:IE,points_vert:UE,points_frag:FE,shadow_vert:OE,shadow_frag:kE,sprite_vert:BE,sprite_frag:zE},Oe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:Tn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:Tn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:Tn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:Tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:Tn([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:Tn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:Tn([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:Tn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:Tn([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:Tn([Oe.common,Oe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:Tn([Oe.lights,Oe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Xl={r:0,b:0,g:0},Jr=new nr,VE=new Kt;function HE(s,e,t,r,o,l){const u=new Rt(0);let f=o===!0?0:1,p,h,g=null,_=0,v=null;function S(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){const b=R.backgroundBlurriness>0;P=e.get(P,b)}return P}function M(R){let P=!1;const b=S(R);b===null?y(u,f):b&&b.isColor&&(y(b,1),P=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,P){const b=S(P);b&&(b.isCubeTexture||b.mapping===oc)?(h===void 0&&(h=new Un(new fa(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:ro(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,U,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Jr.copy(P.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(Jr)),h.material.toneMapped=bt.getTransfer(b.colorSpace)!==Ut,(g!==b||_!==b.version||v!==s.toneMapping)&&(h.material.needsUpdate=!0,g=b,_=b.version,v=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Un(new da(2,2),new Di({name:"BackgroundMaterial",uniforms:ro(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=bt.getTransfer(b.colorSpace)!==Ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||_!==b.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,g=b,_=b.version,v=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function y(R,P){R.getRGB(Xl,M0(s)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,P,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,P=1){u.set(R),f=P,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(u,f)},render:M,addToRenderList:C,dispose:x}}function GE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function f(k,J,Q,se,X){let Z=!1;const V=_(k,se,Q,J);l!==V&&(l=V,h(l.object)),Z=S(k,se,Q,X),Z&&M(k,se,Q,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,b(k,J,Q,se),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function g(k){return s.deleteVertexArray(k)}function _(k,J,Q,se){const X=se.wireframe===!0;let Z=r[J.id];Z===void 0&&(Z={},r[J.id]=Z);const V=k.isInstancedMesh===!0?k.id:0;let Y=Z[V];Y===void 0&&(Y={},Z[V]=Y);let ie=Y[Q.id];ie===void 0&&(ie={},Y[Q.id]=ie);let ce=ie[X];return ce===void 0&&(ce=v(p()),ie[X]=ce),ce}function v(k){const J=[],Q=[],se=[];for(let X=0;X<t;X++)J[X]=0,Q[X]=0,se[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Q,attributeDivisors:se,object:k,attributes:{},index:null}}function S(k,J,Q,se){const X=l.attributes,Z=J.attributes;let V=0;const Y=Q.getAttributes();for(const ie in Y)if(Y[ie].location>=0){const F=X[ie];let q=Z[ie];if(q===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;V++}return l.attributesNum!==V||l.index!==se}function M(k,J,Q,se){const X={},Z=J.attributes;let V=0;const Y=Q.getAttributes();for(const ie in Y)if(Y[ie].location>=0){let F=Z[ie];F===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),X[ie]=q,V++}l.attributes=X,l.attributesNum=V,l.index=se}function C(){const k=l.newAttributes;for(let J=0,Q=k.length;J<Q;J++)k[J]=0}function y(k){x(k,0)}function x(k,J){const Q=l.newAttributes,se=l.enabledAttributes,X=l.attributeDivisors;Q[k]=1,se[k]===0&&(s.enableVertexAttribArray(k),se[k]=1),X[k]!==J&&(s.vertexAttribDivisor(k,J),X[k]=J)}function R(){const k=l.newAttributes,J=l.enabledAttributes;for(let Q=0,se=J.length;Q<se;Q++)J[Q]!==k[Q]&&(s.disableVertexAttribArray(Q),J[Q]=0)}function P(k,J,Q,se,X,Z,V){V===!0?s.vertexAttribIPointer(k,J,Q,X,Z):s.vertexAttribPointer(k,J,Q,se,X,Z)}function b(k,J,Q,se){C();const X=se.attributes,Z=Q.getAttributes(),V=J.defaultAttributeValues;for(const Y in Z){const ie=Z[Y];if(ie.location>=0){let ce=X[Y];if(ce===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(ce=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(ce=k.instanceColor)),ce!==void 0){const F=ce.normalized,q=ce.itemSize,be=e.get(ce);if(be===void 0)continue;const Xe=be.buffer,et=be.type,re=be.bytesPerElement,ge=et===s.INT||et===s.UNSIGNED_INT||ce.gpuType===Ud;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Ie=pe.stride,We=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let ct=0;ct<ie.locationSize;ct++)x(ie.location+ct,pe.meshPerAttribute);k.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ct=0;ct<ie.locationSize;ct++)y(ie.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ct=0;ct<ie.locationSize;ct++)P(ie.location+ct,q/ie.locationSize,et,F,Ie*re,(We+q/ie.locationSize*ct)*re,ge)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<ie.locationSize;pe++)x(ie.location+pe,ce.meshPerAttribute);k.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<ie.locationSize;pe++)y(ie.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let pe=0;pe<ie.locationSize;pe++)P(ie.location+pe,q/ie.locationSize,et,F,q*re,q/ie.locationSize*pe*re,ge)}}else if(V!==void 0){const F=V[Y];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ie.location,F);break;case 3:s.vertexAttrib3fv(ie.location,F);break;case 4:s.vertexAttrib4fv(ie.location,F);break;default:s.vertexAttrib1fv(ie.location,F)}}}}R()}function B(){N();for(const k in r){const J=r[k];for(const Q in J){const se=J[Q];for(const X in se){const Z=se[X];for(const V in Z)g(Z[V].object),delete Z[V];delete se[X]}}delete r[k]}}function U(k){if(r[k.id]===void 0)return;const J=r[k.id];for(const Q in J){const se=J[Q];for(const X in se){const Z=se[X];for(const V in Z)g(Z[V].object),delete Z[V];delete se[X]}}delete r[k.id]}function O(k){for(const J in r){const Q=r[J];for(const se in Q){const X=Q[se];if(X[k.id]===void 0)continue;const Z=X[k.id];for(const V in Z)g(Z[V].object),delete Z[V];delete X[k.id]}}}function w(k){for(const J in r){const Q=r[J],se=k.isInstancedMesh===!0?k.id:0,X=Q[se];if(X!==void 0){for(const Z in X){const V=X[Z];for(const Y in V)g(V[Y].object),delete V[Y];delete X[Z]}delete Q[se],Object.keys(Q).length===0&&delete r[J]}}}function N(){ae(),u=!0,l!==o&&(l=o,h(l.object))}function ae(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:N,resetDefaultState:ae,dispose:B,releaseStatesOfGeometry:U,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:R}}function WE(s,e,t){let r;function o(h){r=h}function l(h,g){s.drawArrays(r,h,g),t.update(g,r,1)}function u(h,g,_){_!==0&&(s.drawArraysInstanced(r,h,g,_),t.update(g,r,_))}function f(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];t.update(S,r,1)}function p(h,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,g,0,v,0,_);let M=0;for(let C=0;C<_;C++)M+=g[C]*v[C];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function XE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==gi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ii&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ci&&!w)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=p(h);g!==h&&(gt("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:b,maxSamples:B,samples:U}}function jE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new es,f=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||M===null||M.length===0||l&&!y)l?g(null):h();else{const R=l?0:r,P=R*4;let b=x.clippingState||null;p.value=b,b=g(M,v,P,S);for(let B=0;B!==P;++B)b[B]=t[B];x.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,M){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,M!==!0||y===null){const x=S+C*4,R=v.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,b=S;P!==C;++P,b+=4)u.copy(_[P]).applyMatrix4(R,f),u.normal.toArray(y,b),y[b+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const Lr=4,rg=[.125,.215,.35,.446,.526,.582],ns=20,YE=256,Yo=new T0,sg=new Rt;let Cf=null,bf=0,Rf=0,Pf=!1;const qE=new K;class og{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=qE}=l;Cf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,bf,Rf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),bf=this._renderer.getActiveCubeFace(),Rf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:er,format:gi,colorSpace:no,depthBuffer:!1},o=ag(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZE(l)),this._blurMaterial=$E(l,e,t),this._ggxMaterial=KE(l,e,t)}return o}_compileMaterial(e){const t=new Un(new vi,e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,r,o,l){const p=new ni(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(sg),_.toneMapping=Ri,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new fa,new Ks({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,x=!0):(y.color.copy(sg),x=!0);for(let P=0;P<6;P++){const b=P%3;b===0?(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+g[P],l.y,l.z)):b===1?(p.up.set(0,0,h[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+g[P],l.z)):(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+g[P]));const B=this._cubeSize;js(o,b*B,P>2?B:0,B,B),_.setRenderTarget(o),x&&_.render(C,p),_.render(e,p)}_.toneMapping=S,_.autoClear=v,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===os||e.mapping===eo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;js(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,Yo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,S=_*v,{_lodMax:M}=this,C=this._sizeLods[r],y=3*C*(r>M-Lr?r-M+Lr:0),x=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-t,js(l,y,x,3*C,2*C),o.setRenderTarget(l),o.render(f,Yo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-r,js(e,y,x,3*C,2*C),o.setRenderTarget(e),o.render(f,Yo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ns-1),C=l/M,y=isFinite(l)?1+Math.floor(g*C):ns;y>ns&&gt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ns}`);const x=[];let R=0;for(let O=0;O<ns;++O){const w=O/C,N=Math.exp(-w*w/2);x.push(N),O===0?R+=N:O<y&&(R+=2*N)}for(let O=0;O<x.length;O++)x[O]=x[O]/R;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:P}=this;v.dTheta.value=M,v.mipInt.value=P-r;const b=this._sizeLods[o],B=3*b*(o>P-Lr?o-P+Lr:0),U=4*(this._cubeSize-b);js(t,B,U,3*b,2*b),p.setRenderTarget(t),p.render(_,Yo)}}function ZE(s){const e=[],t=[],r=[];let o=s;const l=s-Lr+1+rg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let p=1/f;u>s-Lr?p=rg[u-s+Lr-1]:u===0&&(p=0),t.push(p);const h=1/(f-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,C=3,y=2,x=1,R=new Float32Array(C*M*S),P=new Float32Array(y*M*S),b=new Float32Array(x*M*S);for(let U=0;U<S;U++){const O=U%3*2/3-1,w=U>2?0:-1,N=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];R.set(N,C*M*U),P.set(v,y*M*U);const ae=[U,U,U,U,U,U];b.set(ae,x*M*U)}const B=new vi;B.setAttribute("position",new Li(R,C)),B.setAttribute("uv",new Li(P,y)),B.setAttribute("faceIndex",new Li(b,x)),r.push(new Un(B,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function ag(s,e,t){const r=new Pi(s,e,t);return r.texture.mapping=oc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function js(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function KE(s,e,t){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:YE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $E(s,e,t){const r=new Float32Array(ns),o=new K(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function lg(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function cg(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}class A0 extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new d0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new fa(5,5,5),l=new Di({name:"CubemapFromEquirect",uniforms:ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Ji});l.uniforms.tEquirect.value=t;const u=new Un(o,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=_n),new iS(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function JE(s){let e=new WeakMap,t=new WeakMap,r=null;function o(v,S=!1){return v==null?null:S?u(v):l(v)}function l(v){if(v&&v.isTexture){const S=v.mapping;if(S===Ju||S===Qu)if(e.has(v)){const M=e.get(v).texture;return f(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const C=new A0(M.height);return C.fromEquirectangularTexture(s,v),e.set(v,C),v.addEventListener("dispose",h),f(C.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const S=v.mapping,M=S===Ju||S===Qu,C=S===os||S===eo;if(M||C){let y=t.get(v);const x=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return r===null&&(r=new og(s)),y=M?r.fromEquirectangular(v,y):r.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const R=v.image;return M&&R&&R.height>0||C&&R&&p(R)?(r===null&&(r=new og(s)),y=M?r.fromEquirectangular(v):r.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",g),y.texture):null}}}return v}function f(v,S){return S===Ju?v.mapping=os:S===Qu&&(v.mapping=eo),v}function p(v){let S=0;const M=6;for(let C=0;C<M;C++)v[C]!==void 0&&S++;return S===M}function h(v){const S=v.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function g(v){const S=v.target;S.removeEventListener("dispose",g);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function QE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&rc("WebGLRenderer: "+r+" extension not supported."),o}}}function e1(s,e,t,r){const o={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const S=l.get(v);S&&(e.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function h(_){const v=[],S=_.index,M=_.attributes.position;let C=0;if(M===void 0)return;if(S!==null){const R=S.array;C=S.version;for(let P=0,b=R.length;P<b;P+=3){const B=R[P+0],U=R[P+1],O=R[P+2];v.push(B,U,U,O,O,B)}}else{const R=M.array;C=M.version;for(let P=0,b=R.length/3-1;P<b;P+=3){const B=P+0,U=P+1,O=P+2;v.push(B,U,U,O,O,B)}}const y=new(M.count>=65535?u0:c0)(v,1);y.version=C;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:g}}function t1(s,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function p(v,S){s.drawElements(r,S,l,v*u),t.update(S,r,1)}function h(v,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,v*u,M),t.update(S,r,M))}function g(v,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,r,1)}function _(v,S,M,C){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/u,S[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,C,0,M);let x=0;for(let R=0;R<M;R++)x+=S[R]*C[R];t.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function n1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function i1(s,e,t){const r=new WeakMap,o=new Zt;function l(u,f,p){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(f);if(v===void 0||v.count!==_){let ae=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",ae)};var S=ae;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),C===!0&&(b=2),y===!0&&(b=3);let B=f.attributes.position.count*b,U=1;B>e.maxTextureSize&&(U=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*U*4*_),w=new o0(O,B,U,_);w.type=Ci,w.needsUpdate=!0;const N=b*4;for(let k=0;k<_;k++){const J=x[k],Q=R[k],se=P[k],X=B*U*4*k;for(let Z=0;Z<J.count;Z++){const V=Z*N;M===!0&&(o.fromBufferAttribute(J,Z),O[X+V+0]=o.x,O[X+V+1]=o.y,O[X+V+2]=o.z,O[X+V+3]=0),C===!0&&(o.fromBufferAttribute(Q,Z),O[X+V+4]=o.x,O[X+V+5]=o.y,O[X+V+6]=o.z,O[X+V+7]=0),y===!0&&(o.fromBufferAttribute(se,Z),O[X+V+8]=o.x,O[X+V+9]=o.y,O[X+V+10]=o.z,O[X+V+11]=se.itemSize===4?o.w:1)}}v={count:_,texture:w,size:new Ge(B,U)},r.set(f,v),f.addEventListener("dispose",ae)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const C=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function r1(s,e,t,r,o){let l=new WeakMap;function u(h){const g=o.render.frame,_=h.geometry,v=e.get(h,_);if(l.get(v)!==g&&(e.update(v),l.set(v,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==g&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,g))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==g&&(S.update(),l.set(S,g))}return v}function f(){l=new WeakMap}function p(h){const g=h.target;g.removeEventListener("dispose",p),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const s1={[Wg]:"LINEAR_TONE_MAPPING",[Xg]:"REINHARD_TONE_MAPPING",[jg]:"CINEON_TONE_MAPPING",[Yg]:"ACES_FILMIC_TONE_MAPPING",[Zg]:"AGX_TONE_MAPPING",[Kg]:"NEUTRAL_TONE_MAPPING",[qg]:"CUSTOM_TONE_MAPPING"};function o1(s,e,t,r,o){const l=new Pi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Pi(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),f=new vi;f.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new An([0,2,0,0,2,0],2));const p=new Ky({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Un(f,p),g=new T0(-1,1,1,-1,0,1);let _=null,v=null,S=!1,M,C=null,y=[],x=!1;this.setSize=function(R,P){l.setSize(R,P),u.setSize(R,P);for(let b=0;b<y.length;b++){const B=y[b];B.setSize&&B.setSize(R,P)}},this.setEffects=function(R){y=R,x=y.length>0&&y[0].isRenderPass===!0;const P=l.width,b=l.height;for(let B=0;B<y.length;B++){const U=y[B];U.setSize&&U.setSize(P,b)}},this.begin=function(R,P){if(S||R.toneMapping===Ri&&y.length===0)return!1;if(C=P,P!==null){const b=P.width,B=P.height;(l.width!==b||l.height!==B)&&this.setSize(b,B)}return x===!1&&R.setRenderTarget(l),M=R.toneMapping,R.toneMapping=Ri,!0},this.hasRenderPass=function(){return x},this.end=function(R,P){R.toneMapping=M,S=!0;let b=l,B=u;for(let U=0;U<y.length;U++){const O=y[U];if(O.enabled!==!1&&(O.render(R,B,b,P),O.needsSwap!==!1)){const w=b;b=B,B=w}}if(_!==R.outputColorSpace||v!==R.toneMapping){_=R.outputColorSpace,v=R.toneMapping,p.defines={},bt.getTransfer(_)===Ut&&(p.defines.SRGB_TRANSFER="");const U=s1[v];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(C),R.render(h,g),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const C0=new wn,bd=new sa(1,1),b0=new o0,R0=new Yx,P0=new d0,ug=[],fg=[],dg=new Float32Array(16),hg=new Float32Array(9),pg=new Float32Array(4);function ao(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=ug[o];if(l===void 0&&(l=new Float32Array(o),ug[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cc(s,e){let t=fg[e];t===void 0&&(t=new Int32Array(e),fg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function a1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function c1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function f1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;pg.set(r),s.uniformMatrix2fv(this.addr,!1,pg),nn(t,r)}}function d1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;hg.set(r),s.uniformMatrix3fv(this.addr,!1,hg),nn(t,r)}}function h1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;dg.set(r),s.uniformMatrix4fv(this.addr,!1,dg),nn(t,r)}}function p1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function m1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function g1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function v1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function _1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function x1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function S1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function M1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(bd.compareFunction=t.isReversedDepthBuffer()?Hd:Vd,l=bd):l=C0,t.setTexture2D(e||l,o)}function E1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||R0,o)}function T1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||P0,o)}function w1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||b0,o)}function A1(s){switch(s){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return d1;case 35676:return h1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return v1;case 5125:return _1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}}function C1(s,e){s.uniform1fv(this.addr,e)}function b1(s,e){const t=ao(e,this.size,2);s.uniform2fv(this.addr,t)}function R1(s,e){const t=ao(e,this.size,3);s.uniform3fv(this.addr,t)}function P1(s,e){const t=ao(e,this.size,4);s.uniform4fv(this.addr,t)}function L1(s,e){const t=ao(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function N1(s,e){const t=ao(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function D1(s,e){const t=ao(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function I1(s,e){s.uniform1iv(this.addr,e)}function U1(s,e){s.uniform2iv(this.addr,e)}function F1(s,e){s.uniform3iv(this.addr,e)}function O1(s,e){s.uniform4iv(this.addr,e)}function k1(s,e){s.uniform1uiv(this.addr,e)}function B1(s,e){s.uniform2uiv(this.addr,e)}function z1(s,e){s.uniform3uiv(this.addr,e)}function V1(s,e){s.uniform4uiv(this.addr,e)}function H1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=bd:u=C0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function G1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||R0,l[u])}function W1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||P0,l[u])}function X1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||b0,l[u])}function j1(s){switch(s){case 5126:return C1;case 35664:return b1;case 35665:return R1;case 35666:return P1;case 35674:return L1;case 35675:return N1;case 35676:return D1;case 5124:case 35670:return I1;case 35667:case 35671:return U1;case 35668:case 35672:return F1;case 35669:case 35673:return O1;case 5125:return k1;case 36294:return B1;case 36295:return z1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}class Y1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=A1(t.type)}}class q1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j1(t.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Lf=/(\w+)(\])?(\[|\.)?/g;function mg(s,e){s.seq.push(e),s.map[e.id]=e}function K1(s,e,t){const r=s.name,o=r.length;for(Lf.lastIndex=0;;){const l=Lf.exec(r),u=Lf.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){mg(t,h===void 0?new Y1(f,s,e):new q1(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new Z1(f),mg(t,_)),t=_}}}class ec{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);K1(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function gg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const $1=37297;let J1=0;function Q1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const vg=new xt;function eT(s){bt._getMatrix(vg,bt.workingColorSpace,s);const e=`mat3( ${vg.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case tc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _g(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Q1(s.getShaderSource(e),f)}else return l}function tT(s,e){const t=eT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nT={[Wg]:"Linear",[Xg]:"Reinhard",[jg]:"Cineon",[Yg]:"ACESFilmic",[Zg]:"AgX",[Kg]:"Neutral",[qg]:"Custom"};function iT(s,e){const t=nT[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new K;function rT(){bt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function oT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function aT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function $o(s){return s!==""}function xg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(s){return s.replace(lT,uT)}const cT=new Map;function uT(s,e){let t=yt[e];if(t===void 0){const r=cT.get(e);if(r!==void 0)t=yt[r],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Rd(t)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(s){return s.replace(fT,dT)}function dT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Mg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const hT={[ql]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function pT(s){return hT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mT={[os]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE",[oc]:"ENVMAP_TYPE_CUBE_UV"};function gT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":mT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const vT={[eo]:"ENVMAP_MODE_REFRACTION"};function _T(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xT={[Gg]:"ENVMAP_BLENDING_MULTIPLY",[ux]:"ENVMAP_BLENDING_MIX",[fx]:"ENVMAP_BLENDING_ADD"};function yT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xT[s.combine]||"ENVMAP_BLENDING_NONE"}function ST(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function MT(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=pT(t),h=gT(t),g=_T(t),_=yT(t),v=ST(t),S=sT(t),M=oT(l),C=o.createProgram();let y,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($o).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter($o).join(`
`),x.length>0&&(x+=`
`)):(y=[Mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[Mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?yt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?iT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,tT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),u=Rd(u),u=xg(u,t),u=yg(u,t),f=Rd(f),f=xg(f,t),f=yg(f,t),u=Sg(u),f=Sg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=R+y+u,b=R+x+f,B=gg(o,o.VERTEX_SHADER,P),U=gg(o,o.FRAGMENT_SHADER,b);o.attachShader(C,B),o.attachShader(C,U),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(k){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(C)||"",Q=o.getShaderInfoLog(B)||"",se=o.getShaderInfoLog(U)||"",X=J.trim(),Z=Q.trim(),V=se.trim();let Y=!0,ie=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,B,U);else{const ce=_g(o,B,"vertex"),F=_g(o,U,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+ce+`
`+F)}else X!==""?gt("WebGLProgram: Program Info Log:",X):(Z===""||V==="")&&(ie=!1);ie&&(k.diagnostics={runnable:Y,programLog:X,vertexShader:{log:Z,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(B),o.deleteShader(U),w=new ec(o,C),N=aT(o,C)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=o.getProgramParameter(C,$1)),ae},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=J1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=B,this.fragmentShader=U,this}let ET=0;class TT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new wT(e),t.set(e,r)),r}}class wT{constructor(e){this.id=ET++,this.code=e,this.usedTimes=0}}function AT(s,e,t,r,o,l){const u=new a0,f=new TT,p=new Set,h=[],g=new Map,_=r.logarithmicDepthBuffer;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,N,ae,k,J){const Q=k.fog,se=J.geometry,X=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,V=e.get(w.envMap||X,Z),Y=V&&V.mapping===oc?V.image.height:null,ie=S[w.type];w.precision!==null&&(v=r.getMaxPrecision(w.precision),v!==w.precision&&gt("WebGLProgram.getParameters:",w.precision,"not supported, using",v,"instead."));const ce=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,F=ce!==void 0?ce.length:0;let q=0;se.morphAttributes.position!==void 0&&(q=1),se.morphAttributes.normal!==void 0&&(q=2),se.morphAttributes.color!==void 0&&(q=3);let be,Xe,et,re;if(ie){const wt=wi[ie];be=wt.vertexShader,Xe=wt.fragmentShader}else be=w.vertexShader,Xe=w.fragmentShader,f.update(w),et=f.getVertexShaderID(w),re=f.getFragmentShaderID(w);const ge=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Ie=J.isInstancedMesh===!0,We=J.isBatchedMesh===!0,ct=!!w.map,Lt=!!w.matcap,dt=!!V,ve=!!w.aoMap,Me=!!w.lightMap,_e=!!w.bumpMap,Ne=!!w.normalMap,D=!!w.displacementMap,ot=!!w.emissiveMap,Ue=!!w.metalnessMap,rt=!!w.roughnessMap,Pe=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,G=w.iridescence>0,ue=w.sheen>0,me=w.transmission>0,fe=Pe&&!!w.anisotropyMap,je=L&&!!w.clearcoatMap,Ae=L&&!!w.clearcoatNormalMap,Je=L&&!!w.clearcoatRoughnessMap,lt=G&&!!w.iridescenceMap,Se=G&&!!w.iridescenceThicknessMap,Re=ue&&!!w.sheenColorMap,$e=ue&&!!w.sheenRoughnessMap,qe=!!w.specularMap,ke=!!w.specularColorMap,vt=!!w.specularIntensityMap,H=me&&!!w.transmissionMap,Le=me&&!!w.thicknessMap,we=!!w.gradientMap,Be=!!w.alphaMap,Te=w.alphaTest>0,de=!!w.alphaHash,Ze=!!w.extensions;let ht=Ri;w.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ht=s.toneMapping);const It={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Xe,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:v,batching:We,batchingColor:We&&J._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&J.instanceColor!==null,instancingMorph:Ie&&J.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:no,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Lt,envMap:dt,envMapMode:dt&&V.mapping,envMapCubeUVHeight:Y,aoMap:ve,lightMap:Me,bumpMap:_e,normalMap:Ne,displacementMap:D,emissiveMap:ot,normalMapObjectSpace:Ne&&w.normalMapType===mx,normalMapTangentSpace:Ne&&w.normalMapType===px,metalnessMap:Ue,roughnessMap:rt,anisotropy:Pe,anisotropyMap:fe,clearcoat:L,clearcoatMap:je,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Je,dispersion:E,iridescence:G,iridescenceMap:lt,iridescenceThicknessMap:Se,sheen:ue,sheenColorMap:Re,sheenRoughnessMap:$e,specularMap:qe,specularColorMap:ke,specularIntensityMap:vt,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:we,opaque:w.transparent===!1&&w.blending===$s&&w.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:de,combine:w.combine,mapUv:ct&&M(w.map.channel),aoMapUv:ve&&M(w.aoMap.channel),lightMapUv:Me&&M(w.lightMap.channel),bumpMapUv:_e&&M(w.bumpMap.channel),normalMapUv:Ne&&M(w.normalMap.channel),displacementMapUv:D&&M(w.displacementMap.channel),emissiveMapUv:ot&&M(w.emissiveMap.channel),metalnessMapUv:Ue&&M(w.metalnessMap.channel),roughnessMapUv:rt&&M(w.roughnessMap.channel),anisotropyMapUv:fe&&M(w.anisotropyMap.channel),clearcoatMapUv:je&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(w.sheenRoughnessMap.channel),specularMapUv:qe&&M(w.specularMap.channel),specularColorMapUv:ke&&M(w.specularColorMap.channel),specularIntensityMapUv:vt&&M(w.specularIntensityMap.channel),transmissionMapUv:H&&M(w.transmissionMap.channel),thicknessMapUv:Le&&M(w.thicknessMap.channel),alphaMapUv:Be&&M(w.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ne||Pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!se.attributes.uv&&(ct||Be),fog:!!Q,useFog:w.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||se.attributes.normal===void 0&&Ne===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:J.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ae.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&bt.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&bt.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ai,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&w.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function y(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ae in w.defines)N.push(ae),N.push(w.defines[ae]);return w.isRawShaderMaterial===!1&&(x(N,w),R(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function x(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function R(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),w.push(u.mask)}function P(w){const N=S[w.type];let ae;if(N){const k=wi[N];ae=Yy.clone(k.uniforms)}else ae=w.uniforms;return ae}function b(w,N){let ae=g.get(N);return ae!==void 0?++ae.usedTimes:(ae=new MT(s,N,w,o),h.push(ae),g.set(N,ae)),ae}function B(w){if(--w.usedTimes===0){const N=h.indexOf(w);h[N]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function U(w){f.remove(w)}function O(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:P,acquireProgram:b,releaseProgram:B,releaseShaderCache:U,programs:h,dispose:O}}function CT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function bT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Eg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function f(v,S,M,C,y,x){let R=s[e];return R===void 0?(R={id:v.id,object:v,geometry:S,material:M,materialVariant:u(v),groupOrder:C,renderOrder:v.renderOrder,z:y,group:x},s[e]=R):(R.id=v.id,R.object=v,R.geometry=S,R.material=M,R.materialVariant=u(v),R.groupOrder=C,R.renderOrder=v.renderOrder,R.z=y,R.group=x),e++,R}function p(v,S,M,C,y,x){const R=f(v,S,M,C,y,x);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):t.push(R)}function h(v,S,M,C,y,x){const R=f(v,S,M,C,y,x);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function g(v,S){t.length>1&&t.sort(v||bT),r.length>1&&r.sort(S||Eg),o.length>1&&o.sort(S||Eg)}function _(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:h,finish:_,sort:g}}function RT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Tg,s.set(r,[u])):o>=l.length?(u=new Tg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function PT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Rt};break;case"SpotLight":t={position:new K,direction:new K,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function LT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NT=0;function DT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function IT(s){const e=new PT,t=LT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new K);const o=new K,l=new Kt,u=new Kt;function f(h){let g=0,_=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let S=0,M=0,C=0,y=0,x=0,R=0,P=0,b=0,B=0,U=0,O=0;h.sort(DT);for(let N=0,ae=h.length;N<ae;N++){const k=h[N],J=k.color,Q=k.intensity,se=k.distance;let X=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===to?X=k.shadow.map.texture:X=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=J.r*Q,_+=J.g*Q,v+=J.b*Q;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(k.sh.coefficients[Z],Q);O++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,Y=t.get(k);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=X,r.directionalShadowMatrix[S]=k.shadow.matrix,R++}r.directional[S]=Z,S++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy(J).multiplyScalar(Q),Z.distance=se,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,r.spot[C]=Z;const V=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,V.updateMatrices(k),k.castShadow&&U++),r.spotLightMatrix[C]=V.matrix,k.castShadow){const Y=t.get(k);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=X,b++}C++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy(J).multiplyScalar(Q),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=Z,y++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const V=k.shadow,Y=t.get(k);Y.shadowIntensity=V.intensity,Y.shadowBias=V.bias,Y.shadowNormalBias=V.normalBias,Y.shadowRadius=V.radius,Y.shadowMapSize=V.mapSize,Y.shadowCameraNear=V.camera.near,Y.shadowCameraFar=V.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=X,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=Z,M++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(Q),Z.groundColor.copy(k.groundColor).multiplyScalar(Q),r.hemi[x]=Z,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const w=r.hash;(w.directionalLength!==S||w.pointLength!==M||w.spotLength!==C||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==R||w.numPointShadows!==P||w.numSpotShadows!==b||w.numSpotMaps!==B||w.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=b+B-U,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,w.directionalLength=S,w.pointLength=M,w.spotLength=C,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=R,w.numPointShadows=P,w.numSpotShadows=b,w.numSpotMaps=B,w.numLightProbes=O,r.version=NT++)}function p(h,g){let _=0,v=0,S=0,M=0,C=0;const y=g.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const P=h[x];if(P.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),_++}else if(P.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const b=r.rectArea[M];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),b.halfWidth.set(P.width*.5,0,0),b.halfHeight.set(0,P.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const b=r.point[v];b.position.setFromMatrixPosition(P.matrixWorld),b.position.applyMatrix4(y),v++}else if(P.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(P.matrixWorld),b.direction.transformDirection(y),C++}}}return{setup:f,setupView:p,state:r}}function wg(s){const e=new IT(s),t=[],r=[];function o(g){h.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function f(){e.setup(t)}function p(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function UT(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new wg(s),e.set(o,[f])):l>=u.length?(f=new wg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
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
}`,kT=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],BT=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Ag=new Kt,qo=new K,Nf=new K;function zT(s,e,t){let r=new f0;const o=new Ge,l=new Ge,u=new Zt,f=new $y,p=new Jy,h={},g=t.maxTextureSize,_={[Nr]:Fn,[Fn]:Nr,[Ai]:Ai},v=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:FT,fragmentShader:OT}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new vi;M.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Un(M,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let x=this.type;this.render=function(U,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===X_&&(gt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const N=s.getRenderTarget(),ae=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ji),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=x!==this.type;Q&&O.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(X=>X.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,X=U.length;se<X;se++){const Z=U[se],V=Z.shadow;if(V===void 0){gt("WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const Y=V.getFrameExtents();o.multiply(Y),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/Y.x),o.x=l.x*Y.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/Y.y),o.y=l.y*Y.y,V.mapSize.y=l.y));const ie=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ie,V.map===null||Q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Zo){if(Z.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Pi(o.x,o.y,{format:to,type:er,minFilter:_n,magFilter:_n,generateMipmaps:!1}),V.map.texture.name=Z.name+".shadowMap",V.map.depthTexture=new sa(o.x,o.y,Ci),V.map.depthTexture.name=Z.name+".shadowMapDepth",V.map.depthTexture.format=tr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn}else Z.isPointLight?(V.map=new A0(o.x),V.map.depthTexture=new dy(o.x,Ni)):(V.map=new Pi(o.x,o.y),V.map.depthTexture=new sa(o.x,o.y,Ni)),V.map.depthTexture.name=Z.name+".shadowMap",V.map.depthTexture.format=tr,this.type===ql?(V.map.depthTexture.compareFunction=ie?Hd:Vd,V.map.depthTexture.minFilter=_n,V.map.depthTexture.magFilter=_n):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=fn,V.map.depthTexture.magFilter=fn);V.camera.updateProjectionMatrix()}const ce=V.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<ce;F++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,F),s.clear();else{F===0&&(s.setRenderTarget(V.map),s.clear());const q=V.getViewport(F);u.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),J.viewport(u)}if(Z.isPointLight){const q=V.camera,be=V.matrix,Xe=Z.distance||q.far;Xe!==q.far&&(q.far=Xe,q.updateProjectionMatrix()),qo.setFromMatrixPosition(Z.matrixWorld),q.position.copy(qo),Nf.copy(q.position),Nf.add(kT[F]),q.up.copy(BT[F]),q.lookAt(Nf),q.updateMatrixWorld(),be.makeTranslation(-qo.x,-qo.y,-qo.z),Ag.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ag,q.coordinateSystem,q.reversedDepth)}else V.updateMatrices(Z);r=V.getFrustum(),b(O,w,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Zo&&R(V,w),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(N,ae,k)};function R(U,O){const w=e.update(C);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Pi(o.x,o.y,{format:to,type:er})),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(O,null,w,v,C,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(O,null,w,S,C,null)}function P(U,O,w,N){let ae=null;const k=w.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(k!==void 0)ae=k;else if(ae=w.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=ae.uuid,Q=O.uuid;let se=h[J];se===void 0&&(se={},h[J]=se);let X=se[Q];X===void 0&&(X=ae.clone(),se[Q]=X,O.addEventListener("dispose",B)),ae=X}if(ae.visible=O.visible,ae.wireframe=O.wireframe,N===Zo?ae.side=O.shadowSide!==null?O.shadowSide:O.side:ae.side=O.shadowSide!==null?O.shadowSide:_[O.side],ae.alphaMap=O.alphaMap,ae.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ae.map=O.map,ae.clipShadows=O.clipShadows,ae.clippingPlanes=O.clippingPlanes,ae.clipIntersection=O.clipIntersection,ae.displacementMap=O.displacementMap,ae.displacementScale=O.displacementScale,ae.displacementBias=O.displacementBias,ae.wireframeLinewidth=O.wireframeLinewidth,ae.linewidth=O.linewidth,w.isPointLight===!0&&ae.isMeshDistanceMaterial===!0){const J=s.properties.get(ae);J.light=w}return ae}function b(U,O,w,N,ae){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&ae===Zo)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,U.matrixWorld);const Q=e.update(U),se=U.material;if(Array.isArray(se)){const X=Q.groups;for(let Z=0,V=X.length;Z<V;Z++){const Y=X[Z],ie=se[Y.materialIndex];if(ie&&ie.visible){const ce=P(U,ie,N,ae);U.onBeforeShadow(s,U,O,w,Q,ce,Y),s.renderBufferDirect(w,null,Q,ce,U,Y),U.onAfterShadow(s,U,O,w,Q,ce,Y)}}}else if(se.visible){const X=P(U,se,N,ae);U.onBeforeShadow(s,U,O,w,Q,X,null),s.renderBufferDirect(w,null,Q,X,U,null),U.onAfterShadow(s,U,O,w,Q,X,null)}}const J=U.children;for(let Q=0,se=J.length;Q<se;Q++)b(J[Q],O,w,N,ae)}function B(U){U.target.removeEventListener("dispose",B);for(const w in h){const N=h[w],ae=U.target.uuid;ae in N&&(N[ae].dispose(),delete N[ae])}}}function VT(s,e){function t(){let H=!1;const Le=new Zt;let we=null;const Be=new Zt(0,0,0,0);return{setMask:function(Te){we!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){H=Te},setClear:function(Te,de,Ze,ht,It){It===!0&&(Te*=ht,de*=ht,Ze*=ht),Le.set(Te,de,Ze,ht),Be.equals(Le)===!1&&(s.clearColor(Te,de,Ze,ht),Be.copy(Le))},reset:function(){H=!1,we=null,Be.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,we=null,Be=null,Te=null;return{setReversed:function(de){if(Le!==de){const Ze=e.get("EXT_clip_control");de?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=de;const ht=Te;Te=null,this.setClear(ht)}},getReversed:function(){return Le},setTest:function(de){de?ge(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(de){we!==de&&!H&&(s.depthMask(de),we=de)},setFunc:function(de){if(Le&&(de=wx[de]),Be!==de){switch(de){case Of:s.depthFunc(s.NEVER);break;case kf:s.depthFunc(s.ALWAYS);break;case Bf:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case zf:s.depthFunc(s.EQUAL);break;case Vf:s.depthFunc(s.GEQUAL);break;case Hf:s.depthFunc(s.GREATER);break;case Gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=de}},setLocked:function(de){H=de},setClear:function(de){Te!==de&&(Te=de,Le&&(de=1-de),s.clearDepth(de))},reset:function(){H=!1,we=null,Be=null,Te=null,Le=!1}}}function o(){let H=!1,Le=null,we=null,Be=null,Te=null,de=null,Ze=null,ht=null,It=null;return{setTest:function(wt){H||(wt?ge(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!H&&(s.stencilMask(wt),Le=wt)},setFunc:function(wt,Xn,xn){(we!==wt||Be!==Xn||Te!==xn)&&(s.stencilFunc(wt,Xn,xn),we=wt,Be=Xn,Te=xn)},setOp:function(wt,Xn,xn){(de!==wt||Ze!==Xn||ht!==xn)&&(s.stencilOp(wt,Xn,xn),de=wt,Ze=Xn,ht=xn)},setLocked:function(wt){H=wt},setClear:function(wt){It!==wt&&(s.clearStencil(wt),It=wt)},reset:function(){H=!1,Le=null,we=null,Be=null,Te=null,de=null,Ze=null,ht=null,It=null}}}const l=new t,u=new r,f=new o,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,S=[],M=null,C=!1,y=null,x=null,R=null,P=null,b=null,B=null,U=null,O=new Rt(0,0,0),w=0,N=!1,ae=null,k=null,J=null,Q=null,se=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,V=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=V>=1):Y.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=V>=2);let ie=null,ce={};const F=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),be=new Zt().fromArray(F),Xe=new Zt().fromArray(q);function et(H,Le,we,Be){const Te=new Uint8Array(4),de=s.createTexture();s.bindTexture(H,de),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<we;Ze++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Le+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return de}const re={};re[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(Qs),_e(!1),Ne(Am),ge(s.CULL_FACE),ve(Ji);function ge(H){g[H]!==!0&&(s.enable(H),g[H]=!0)}function pe(H){g[H]!==!1&&(s.disable(H),g[H]=!1)}function Ie(H,Le){return _[H]!==Le?(s.bindFramebuffer(H,Le),_[H]=Le,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(H,Le){let we=S,Be=!1;if(H){we=v.get(Le),we===void 0&&(we=[],v.set(Le,we));const Te=H.textures;if(we.length!==Te.length||we[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Ze=Te.length;de<Ze;de++)we[de]=s.COLOR_ATTACHMENT0+de;we.length=Te.length,Be=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Be=!0);Be&&s.drawBuffers(we)}function ct(H){return M!==H?(s.useProgram(H),M=H,!0):!1}const Lt={[ts]:s.FUNC_ADD,[Y_]:s.FUNC_SUBTRACT,[q_]:s.FUNC_REVERSE_SUBTRACT};Lt[Z_]=s.MIN,Lt[K_]=s.MAX;const dt={[$_]:s.ZERO,[J_]:s.ONE,[Q_]:s.SRC_COLOR,[Uf]:s.SRC_ALPHA,[sx]:s.SRC_ALPHA_SATURATE,[ix]:s.DST_COLOR,[tx]:s.DST_ALPHA,[ex]:s.ONE_MINUS_SRC_COLOR,[Ff]:s.ONE_MINUS_SRC_ALPHA,[rx]:s.ONE_MINUS_DST_COLOR,[nx]:s.ONE_MINUS_DST_ALPHA,[ox]:s.CONSTANT_COLOR,[ax]:s.ONE_MINUS_CONSTANT_COLOR,[lx]:s.CONSTANT_ALPHA,[cx]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(H,Le,we,Be,Te,de,Ze,ht,It,wt){if(H===Ji){C===!0&&(pe(s.BLEND),C=!1);return}if(C===!1&&(ge(s.BLEND),C=!0),H!==j_){if(H!==y||wt!==N){if((x!==ts||b!==ts)&&(s.blendEquation(s.FUNC_ADD),x=ts,b=ts),wt)switch(H){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case If:s.blendFunc(s.ONE,s.ONE);break;case Cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case If:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Cm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}R=null,P=null,B=null,U=null,O.set(0,0,0),w=0,y=H,N=wt}return}Te=Te||Le,de=de||we,Ze=Ze||Be,(Le!==x||Te!==b)&&(s.blendEquationSeparate(Lt[Le],Lt[Te]),x=Le,b=Te),(we!==R||Be!==P||de!==B||Ze!==U)&&(s.blendFuncSeparate(dt[we],dt[Be],dt[de],dt[Ze]),R=we,P=Be,B=de,U=Ze),(ht.equals(O)===!1||It!==w)&&(s.blendColor(ht.r,ht.g,ht.b,It),O.copy(ht),w=It),y=H,N=!1}function Me(H,Le){H.side===Ai?pe(s.CULL_FACE):ge(s.CULL_FACE);let we=H.side===Fn;Le&&(we=!we),_e(we),H.blending===$s&&H.transparent===!1?ve(Ji):ve(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Be=H.stencilWrite;f.setTest(Be),Be&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ot(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(H){ae!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ae=H)}function Ne(H){H!==G_?(ge(s.CULL_FACE),H!==k&&(H===Am?s.cullFace(s.BACK):H===W_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),k=H}function D(H){H!==J&&(Z&&s.lineWidth(H),J=H)}function ot(H,Le,we){H?(ge(s.POLYGON_OFFSET_FILL),(Q!==Le||se!==we)&&(Q=Le,se=we,u.getReversed()&&(Le=-Le),s.polygonOffset(Le,we))):pe(s.POLYGON_OFFSET_FILL)}function Ue(H){H?ge(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function rt(H){H===void 0&&(H=s.TEXTURE0+X-1),ie!==H&&(s.activeTexture(H),ie=H)}function Pe(H,Le,we){we===void 0&&(ie===null?we=s.TEXTURE0+X-1:we=ie);let Be=ce[we];Be===void 0&&(Be={type:void 0,texture:void 0},ce[we]=Be),(Be.type!==H||Be.texture!==Le)&&(ie!==we&&(s.activeTexture(we),ie=we),s.bindTexture(H,Le||re[H]),Be.type=H,Be.texture=Le)}function L(){const H=ce[ie];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ue(){try{s.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ae(){try{s.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Je(){try{s.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function lt(){try{s.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Se(){try{s.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Re(H){be.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),be.copy(H))}function $e(H){Xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function qe(H,Le){let we=h.get(Le);we===void 0&&(we=new WeakMap,h.set(Le,we));let Be=we.get(H);Be===void 0&&(Be=s.getUniformBlockIndex(Le,H.name),we.set(H,Be))}function ke(H,Le){const Be=h.get(Le).get(H);p.get(Le)!==Be&&(s.uniformBlockBinding(Le,Be,H.__bindingPointIndex),p.set(Le,Be))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ie=null,ce={},_={},v=new WeakMap,S=[],M=null,C=!1,y=null,x=null,R=null,P=null,b=null,B=null,U=null,O=new Rt(0,0,0),w=0,N=!1,ae=null,k=null,J=null,Q=null,se=null,be.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:pe,bindFramebuffer:Ie,drawBuffers:We,useProgram:ct,setBlending:ve,setMaterial:Me,setFlipSided:_e,setCullFace:Ne,setLineWidth:D,setPolygonOffset:ot,setScissorTest:Ue,activeTexture:rt,bindTexture:Pe,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:lt,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:Ae,texStorage3D:Je,texSubImage2D:ue,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:je,scissor:Re,viewport:$e,reset:vt}}function HT(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,E){return S?new OffscreenCanvas(L,E):ic("canvas")}function C(L,E,G){let ue=1;const me=Pe(L);if((me.width>G||me.height>G)&&(ue=G/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(ue*me.width),je=Math.floor(ue*me.height);_===void 0&&(_=M(fe,je));const Ae=E?M(fe,je):_;return Ae.width=fe,Ae.height=je,Ae.getContext("2d").drawImage(L,0,0,fe,je),gt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+je+")."),Ae}else return"data"in L&&gt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,E,G,ue,me=!1){if(L!==null){if(s[L]!==void 0)return s[L];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=E;if(E===s.RED&&(G===s.FLOAT&&(fe=s.R32F),G===s.HALF_FLOAT&&(fe=s.R16F),G===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.R8UI),G===s.UNSIGNED_SHORT&&(fe=s.R16UI),G===s.UNSIGNED_INT&&(fe=s.R32UI),G===s.BYTE&&(fe=s.R8I),G===s.SHORT&&(fe=s.R16I),G===s.INT&&(fe=s.R32I)),E===s.RG&&(G===s.FLOAT&&(fe=s.RG32F),G===s.HALF_FLOAT&&(fe=s.RG16F),G===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RG8UI),G===s.UNSIGNED_SHORT&&(fe=s.RG16UI),G===s.UNSIGNED_INT&&(fe=s.RG32UI),G===s.BYTE&&(fe=s.RG8I),G===s.SHORT&&(fe=s.RG16I),G===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),G===s.UNSIGNED_INT&&(fe=s.RGB32UI),G===s.BYTE&&(fe=s.RGB8I),G===s.SHORT&&(fe=s.RGB16I),G===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),G===s.UNSIGNED_INT&&(fe=s.RGBA32UI),G===s.BYTE&&(fe=s.RGBA8I),G===s.SHORT&&(fe=s.RGBA16I),G===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const je=me?tc:bt.getTransfer(ue);G===s.FLOAT&&(fe=s.RGBA32F),G===s.HALF_FLOAT&&(fe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(fe=je===Ut?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(L,E){let G;return L?E===null||E===Ni||E===ia?G=s.DEPTH24_STENCIL8:E===Ci?G=s.DEPTH32F_STENCIL8:E===na&&(G=s.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ni||E===ia?G=s.DEPTH_COMPONENT24:E===Ci?G=s.DEPTH_COMPONENT32F:E===na&&(G=s.DEPTH_COMPONENT16),G}function B(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==fn&&L.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function U(L){const E=L.target;E.removeEventListener("dispose",U),w(E),E.isVideoTexture&&g.delete(E)}function O(L){const E=L.target;E.removeEventListener("dispose",O),ae(E)}function w(L){const E=r.get(L);if(E.__webglInit===void 0)return;const G=L.source,ue=v.get(G);if(ue){const me=ue[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&N(L),Object.keys(ue).length===0&&v.delete(G)}r.remove(L)}function N(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const G=L.source,ue=v.get(G);delete ue[E.__cacheKey],u.memory.textures--}function ae(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let me=0;me<E.__webglFramebuffer[ue].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[ue][me]);else s.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)s.deleteFramebuffer(E.__webglFramebuffer[ue]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=L.textures;for(let ue=0,me=G.length;ue<me;ue++){const fe=r.get(G[ue]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(G[ue])}r.remove(L)}let k=0;function J(){k=0}function Q(){const L=k;return L>=o.maxTextures&&gt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function se(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function X(L,E){const G=r.get(L);if(L.isVideoTexture&&Ue(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const ue=L.image;if(ue===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(G,L,E);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function Z(L,E){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){re(G,L,E);return}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function V(L,E){const G=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){re(G,L,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function Y(L,E){const G=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&G.__version!==L.version){ge(G,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const ie={[Wf]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[Xf]:s.MIRRORED_REPEAT},ce={[fn]:s.NEAREST,[dx]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[ef]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},F={[gx]:s.NEVER,[Sx]:s.ALWAYS,[vx]:s.LESS,[Vd]:s.LEQUAL,[_x]:s.EQUAL,[Hd]:s.GEQUAL,[xx]:s.GREATER,[yx]:s.NOTEQUAL};function q(L,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===ef||E.magFilter===Ml||E.magFilter===is||E.minFilter===_n||E.minFilter===ef||E.minFilter===Ml||E.minFilter===is)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ie[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ie[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ie[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fn||E.minFilter!==Ml&&E.minFilter!==is||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function be(L,E){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",U));const ue=E.source;let me=v.get(ue);me===void 0&&(me={},v.set(ue,me));const fe=se(E);if(fe!==L.__cacheKey){me[fe]===void 0&&(me[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),me[fe].usedTimes++;const je=me[L.__cacheKey];je!==void 0&&(me[L.__cacheKey].usedTimes--,je.usedTimes===0&&N(E)),L.__cacheKey=fe,L.__webglTexture=me[fe].texture}return G}function Xe(L,E,G){return Math.floor(Math.floor(L/G)/E)}function et(L,E,G,ue){const fe=L.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,ue,E.data);else{fe.sort((Se,Re)=>Se.start-Re.start);let je=0;for(let Se=1;Se<fe.length;Se++){const Re=fe[je],$e=fe[Se],qe=Re.start+Re.count,ke=Xe($e.start,E.width,4),vt=Xe(Re.start,E.width,4);$e.start<=qe+1&&ke===vt&&Xe($e.start+$e.count-1,E.width,4)===ke?Re.count=Math.max(Re.count,$e.start+$e.count-Re.start):(++je,fe[je]=$e)}fe.length=je+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),lt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Re=fe.length;Se<Re;Se++){const $e=fe[Se],qe=Math.floor($e.start/4),ke=Math.ceil($e.count/4),vt=qe%E.width,H=Math.floor(qe/E.width),Le=ke,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,vt,H,Le,we,G,ue,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function re(L,E,G){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);const me=be(L,E),fe=E.source;t.bindTexture(ue,L.__webglTexture,s.TEXTURE0+G);const je=r.get(fe);if(fe.version!==je.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const Ae=bt.getPrimaries(bt.workingColorSpace),Je=E.colorSpace===Pr?null:bt.getPrimaries(E.colorSpace),lt=E.colorSpace===Pr||Ae===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=C(E.image,!1,o.maxTextureSize);Se=rt(E,Se);const Re=l.convert(E.format,E.colorSpace),$e=l.convert(E.type);let qe=P(E.internalFormat,Re,$e,E.colorSpace,E.isVideoTexture);q(ue,E);let ke;const vt=E.mipmaps,H=E.isVideoTexture!==!0,Le=je.__version===void 0||me===!0,we=fe.dataReady,Be=B(E,Se);if(E.isDepthTexture)qe=b(E.format===rs,E.type),Le&&(H?t.texStorage2D(s.TEXTURE_2D,1,qe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,$e,null));else if(E.isDataTexture)if(vt.length>0){H&&Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,vt[0].width,vt[0].height);for(let Te=0,de=vt.length;Te<de;Te++)ke=vt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,$e,ke.data):t.texImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,Re,$e,ke.data);E.generateMipmaps=!1}else H?(Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,Se.width,Se.height),we&&et(E,Se,Re,$e)):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,$e,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,vt[0].width,vt[0].height,Se.depth);for(let Te=0,de=vt.length;Te<de;Te++)if(ke=vt[Te],E.format!==gi)if(Re!==null)if(H){if(we)if(E.layerUpdates.size>0){const Ze=ig(ke.width,ke.height,E.format,E.type);for(const ht of E.layerUpdates){const It=ke.data.subarray(ht*Ze/ke.data.BYTES_PER_ELEMENT,(ht+1)*Ze/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,ht,ke.width,ke.height,1,Re,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ke.width,ke.height,Se.depth,Re,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,qe,ke.width,ke.height,Se.depth,0,ke.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ke.width,ke.height,Se.depth,Re,$e,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,qe,ke.width,ke.height,Se.depth,0,Re,$e,ke.data)}else{H&&Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,vt[0].width,vt[0].height);for(let Te=0,de=vt.length;Te<de;Te++)ke=vt[Te],E.format!==gi?Re!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,ke.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,$e,ke.data):t.texImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,Re,$e,ke.data)}else if(E.isDataArrayTexture)if(H){if(Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,Se.width,Se.height,Se.depth),we)if(E.layerUpdates.size>0){const Te=ig(Se.width,Se.height,E.format,E.type);for(const de of E.layerUpdates){const Ze=Se.data.subarray(de*Te/Se.data.BYTES_PER_ELEMENT,(de+1)*Te/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,Re,$e,Ze)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,$e,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,Re,$e,Se.data);else if(E.isData3DTexture)H?(Le&&t.texStorage3D(s.TEXTURE_3D,Be,qe,Se.width,Se.height,Se.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,$e,Se.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,Re,$e,Se.data);else if(E.isFramebufferTexture){if(Le)if(H)t.texStorage2D(s.TEXTURE_2D,Be,qe,Se.width,Se.height);else{let Te=Se.width,de=Se.height;for(let Ze=0;Ze<Be;Ze++)t.texImage2D(s.TEXTURE_2D,Ze,qe,Te,de,0,Re,$e,null),Te>>=1,de>>=1}}else if(vt.length>0){if(H&&Le){const Te=Pe(vt[0]);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}for(let Te=0,de=vt.length;Te<de;Te++)ke=vt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,$e,ke):t.texImage2D(s.TEXTURE_2D,Te,qe,Re,$e,ke);E.generateMipmaps=!1}else if(H){if(Le){const Te=Pe(Se);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,$e,Se)}else t.texImage2D(s.TEXTURE_2D,0,qe,Re,$e,Se);y(E)&&x(ue),je.__version=fe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ge(L,E,G){if(E.image.length!==6)return;const ue=be(L,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const fe=r.get(me);if(me.version!==fe.__version||ue===!0){t.activeTexture(s.TEXTURE0+G);const je=bt.getPrimaries(bt.workingColorSpace),Ae=E.colorSpace===Pr?null:bt.getPrimaries(E.colorSpace),Je=E.colorSpace===Pr||je===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let de=0;de<6;de++)!lt&&!Se?Re[de]=C(E.image[de],!0,o.maxCubemapSize):Re[de]=Se?E.image[de].image:E.image[de],Re[de]=rt(E,Re[de]);const $e=Re[0],qe=l.convert(E.format,E.colorSpace),ke=l.convert(E.type),vt=P(E.internalFormat,qe,ke,E.colorSpace),H=E.isVideoTexture!==!0,Le=fe.__version===void 0||ue===!0,we=me.dataReady;let Be=B(E,$e);q(s.TEXTURE_CUBE_MAP,E);let Te;if(lt){H&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,$e.width,$e.height);for(let de=0;de<6;de++){Te=Re[de].mipmaps;for(let Ze=0;Ze<Te.length;Ze++){const ht=Te[Ze];E.format!==gi?qe!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,0,0,ht.width,ht.height,qe,ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,vt,ht.width,ht.height,0,ht.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,0,0,ht.width,ht.height,qe,ke,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,vt,ht.width,ht.height,0,qe,ke,ht.data)}}}else{if(Te=E.mipmaps,H&&Le){Te.length>0&&Be++;const de=Pe(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,de.width,de.height)}for(let de=0;de<6;de++)if(Se){H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Re[de].width,Re[de].height,qe,ke,Re[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,vt,Re[de].width,Re[de].height,0,qe,ke,Re[de].data);for(let Ze=0;Ze<Te.length;Ze++){const It=Te[Ze].image[de].image;H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,0,0,It.width,It.height,qe,ke,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,vt,It.width,It.height,0,qe,ke,It.data)}}else{H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,qe,ke,Re[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,vt,qe,ke,Re[de]);for(let Ze=0;Ze<Te.length;Ze++){const ht=Te[Ze];H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,0,0,qe,ke,ht.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,vt,qe,ke,ht.image[de])}}}y(E)&&x(s.TEXTURE_CUBE_MAP),fe.__version=me.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,G,ue,me,fe){const je=l.convert(G.format,G.colorSpace),Ae=l.convert(G.type),Je=P(G.internalFormat,je,Ae,G.colorSpace),lt=r.get(E),Se=r.get(G);if(Se.__renderTarget=E,!lt.__hasExternalTextures){const Re=Math.max(1,E.width>>fe),$e=Math.max(1,E.height>>fe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,fe,Je,Re,$e,E.depth,0,je,Ae,null):t.texImage2D(me,fe,Je,Re,$e,0,je,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,me,Se.__webglTexture,0,D(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,me,Se.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(L,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const ue=E.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,fe=b(E.stencilBuffer,me),je=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(E),fe,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(E),fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,L)}else{const ue=E.textures;for(let me=0;me<ue.length;me++){const fe=ue[me],je=l.convert(fe.format,fe.colorSpace),Ae=l.convert(fe.type),Je=P(fe.internalFormat,je,Ae,fe.colorSpace);ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(E),Je,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(E),Je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(L,E,G){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),q(s.TEXTURE_CUBE_MAP,E.depthTexture);const lt=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let Re;E.depthTexture.format===tr?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===rs&&(Re=s.DEPTH24_STENCIL8);for(let $e=0;$e<6;$e++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,Re,E.width,E.height,0,lt,Se,null)}}else X(E.depthTexture,0);const fe=me.__webglTexture,je=D(E),Ae=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Je=E.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===tr)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Ae,fe,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Ae,fe,0);else if(E.depthTexture.format===rs)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,Ae,fe,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Je,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function ct(L){const E=r.get(L),G=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const ue=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ue}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let ue=0;ue<6;ue++)We(E.__webglFramebuffer[ue],L,ue);else{const ue=L.texture.mipmaps;ue&&ue.length>0?We(E.__webglFramebuffer[0],L,0):We(E.__webglFramebuffer,L,0)}else if(G){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=s.createRenderbuffer(),Ie(E.__webglDepthbuffer[ue],L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}else{const ue=L.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ie(E.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,fe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(L,E,G){const ue=r.get(L);E!==void 0&&pe(ue.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ct(L)}function dt(L){const E=L.texture,G=r.get(L),ue=r.get(E);L.addEventListener("dispose",O);const me=L.textures,fe=L.isWebGLCubeRenderTarget===!0,je=me.length>1;if(je||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,u.memory.textures++),fe){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Je=0;Je<E.mipmaps.length;Je++)G.__webglFramebuffer[Ae][Je]=s.createFramebuffer()}else G.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(je)for(let Ae=0,Je=me.length;Ae<Je;Ae++){const lt=r.get(me[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&ot(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<me.length;Ae++){const Je=me[Ae];G.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const lt=l.convert(Je.format,Je.colorSpace),Se=l.convert(Je.type),Re=P(Je.internalFormat,lt,Se,Je.colorSpace,L.isXRRenderTarget===!0),$e=D(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Re,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),q(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Ae][Je],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je);else pe(G.__webglFramebuffer[Ae],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let Ae=0,Je=me.length;Ae<Je;Ae++){const lt=me[Ae],Se=r.get(lt);let Re=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Re=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Se.__webglTexture),q(Re,lt),pe(G.__webglFramebuffer,L,lt,s.COLOR_ATTACHMENT0+Ae,Re,0),y(lt)&&x(Re)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ue.__webglTexture),q(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Je],L,E,s.COLOR_ATTACHMENT0,Ae,Je);else pe(G.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&x(Ae),t.unbindTexture()}L.depthBuffer&&ct(L)}function ve(L){const E=L.textures;for(let G=0,ue=E.length;G<ue;G++){const me=E[G];if(y(me)){const fe=R(L),je=r.get(me).__webglTexture;t.bindTexture(fe,je),x(fe),t.unbindTexture()}}}const Me=[],_e=[];function Ne(L){if(L.samples>0){if(ot(L)===!1){const E=L.textures,G=L.width,ue=L.height;let me=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(L),Ae=E.length>1;if(Ae)for(let lt=0;lt<E.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Je=L.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,G,ue,0,0,G,ue,me,s.NEAREST),p===!0&&(Me.length=0,_e.length=0,Me.push(s.COLOR_ATTACHMENT0+lt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Me.push(fe),_e.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let lt=0;lt<E.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,je.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function D(L){return Math.min(o.maxSamples,L.samples)}function ot(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(L){const E=u.render.frame;g.get(L)!==E&&(g.set(L,E),L.update())}function rt(L,E){const G=L.colorSpace,ue=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==no&&G!==Pr&&(bt.getTransfer(G)===Ut?(ue!==gi||me!==ii)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),E}function Pe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=X,this.setTexture2DArray=Z,this.setTexture3D=V,this.setTextureCube=Y,this.rebindTextures=Lt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GT(s,e){function t(r,o=Pr){let l;const u=bt.getTransfer(o);if(r===ii)return s.UNSIGNED_BYTE;if(r===Fd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Od)return s.UNSIGNED_SHORT_5_5_5_1;if(r===e0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===t0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jg)return s.BYTE;if(r===Qg)return s.SHORT;if(r===na)return s.UNSIGNED_SHORT;if(r===Ud)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===er)return s.HALF_FLOAT;if(r===n0)return s.ALPHA;if(r===i0)return s.RGB;if(r===gi)return s.RGBA;if(r===tr)return s.DEPTH_COMPONENT;if(r===rs)return s.DEPTH_STENCIL;if(r===r0)return s.RED;if(r===kd)return s.RED_INTEGER;if(r===to)return s.RG;if(r===Bd)return s.RG_INTEGER;if(r===zd)return s.RGBA_INTEGER;if(r===Zl||r===Kl||r===$l||r===Jl)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jf||r===Yf||r===qf||r===Zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===jf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kf||r===$f||r===Jf||r===Qf||r===ed||r===td||r===nd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Kf||r===$f)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Jf)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Qf)return l.COMPRESSED_R11_EAC;if(r===ed)return l.COMPRESSED_SIGNED_R11_EAC;if(r===td)return l.COMPRESSED_RG11_EAC;if(r===nd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===id||r===rd||r===sd||r===od||r===ad||r===ld||r===cd||r===ud||r===fd||r===dd||r===hd||r===pd||r===md||r===gd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===id)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===od)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ad)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ld)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ud)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===md)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vd||r===_d||r===xd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===vd)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_d)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===yd||r===Sd||r===Md||r===Ed)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===yd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Sd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Md)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ed)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ia?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
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

}`;class jT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new h0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Di({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new da(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YT extends so{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,h=null,g=null,_=null,v=null,S=null,M=null;const C=typeof XRWebGLBinding<"u",y=new jT,x={},R=t.getContextAttributes();let P=null,b=null;const B=[],U=[],O=new Ge;let w=null;const N=new ni;N.viewport=new Zt;const ae=new ni;ae.viewport=new Zt;const k=[N,ae],J=new rS;let Q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=B[re];return ge===void 0&&(ge=new af,B[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=B[re];return ge===void 0&&(ge=new af,B[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=B[re];return ge===void 0&&(ge=new af,B[re]=ge),ge.getHandSpace()};function X(re){const ge=U.indexOf(re.inputSource);if(ge===-1)return;const pe=B[ge];pe!==void 0&&(pe.update(re.inputSource,re.frame,h||u),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function Z(){o.removeEventListener("select",X),o.removeEventListener("selectstart",X),o.removeEventListener("selectend",X),o.removeEventListener("squeeze",X),o.removeEventListener("squeezestart",X),o.removeEventListener("squeezeend",X),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",V);for(let re=0;re<B.length;re++){const ge=U[re];ge!==null&&(U[re]=null,B[re].disconnect(ge))}Q=null,se=null,y.reset();for(const re in x)delete x[re];e.setRenderTarget(P),S=null,v=null,_=null,o=null,b=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",X),o.addEventListener("selectstart",X),o.addEventListener("selectend",X),o.addEventListener("squeeze",X),o.addEventListener("squeezestart",X),o.addEventListener("squeezeend",X),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",V),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,We=null;R.depth&&(We=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?rs:tr,Ie=R.stencil?ia:Ni);const ct={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(ct),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new Pi(v.textureWidth,v.textureHeight,{format:gi,type:ii,depthTexture:new sa(v.textureWidth,v.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Pi(S.framebufferWidth,S.framebufferHeight,{format:gi,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),et.setContext(o),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(re){for(let ge=0;ge<re.removed.length;ge++){const pe=re.removed[ge],Ie=U.indexOf(pe);Ie>=0&&(U[Ie]=null,B[Ie].disconnect(pe))}for(let ge=0;ge<re.added.length;ge++){const pe=re.added[ge];let Ie=U.indexOf(pe);if(Ie===-1){for(let ct=0;ct<B.length;ct++)if(ct>=U.length){U.push(pe),Ie=ct;break}else if(U[ct]===null){U[ct]=pe,Ie=ct;break}if(Ie===-1)break}const We=B[Ie];We&&We.connect(pe)}}const Y=new K,ie=new K;function ce(re,ge,pe){Y.setFromMatrixPosition(ge.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const Ie=Y.distanceTo(ie),We=ge.projectionMatrix.elements,ct=pe.projectionMatrix.elements,Lt=We[14]/(We[10]-1),dt=We[14]/(We[10]+1),ve=(We[9]+1)/We[5],Me=(We[9]-1)/We[5],_e=(We[8]-1)/We[0],Ne=(ct[8]+1)/ct[0],D=Lt*_e,ot=Lt*Ne,Ue=Ie/(-_e+Ne),rt=Ue*-_e;if(ge.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(rt),re.translateZ(Ue),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),We[10]===-1)re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Pe=Lt+Ue,L=dt+Ue,E=D-rt,G=ot+(Ie-rt),ue=ve*dt/L*Pe,me=Me*dt/L*Pe;re.projectionMatrix.makePerspective(E,G,ue,me,Pe,L),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function F(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let ge=re.near,pe=re.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),J.near=ae.near=N.near=ge,J.far=ae.far=N.far=pe,(Q!==J.near||se!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),Q=J.near,se=J.far),J.layers.mask=re.layers.mask|6,N.layers.mask=J.layers.mask&-5,ae.layers.mask=J.layers.mask&-3;const Ie=re.parent,We=J.cameras;F(J,Ie);for(let ct=0;ct<We.length;ct++)F(We[ct],Ie);We.length===2?ce(J,N,ae):J.projectionMatrix.copy(N.projectionMatrix),q(re,J,Ie)};function q(re,ge,pe){pe===null?re.matrix.copy(ge.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(ge.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ge.projectionMatrix),re.projectionMatrixInverse.copy(ge.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ra*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(re){p=re,v!==null&&(v.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(re){return x[re]};let be=null;function Xe(re,ge){if(g=ge.getViewerPose(h||u),M=ge,g!==null){const pe=g.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Ie=!1;pe.length!==J.cameras.length&&(J.cameras.length=0,Ie=!0);for(let dt=0;dt<pe.length;dt++){const ve=pe[dt];let Me=null;if(S!==null)Me=S.getViewport(ve);else{const Ne=_.getViewSubImage(v,ve);Me=Ne.viewport,dt===0&&(e.setRenderTargetTextures(b,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(b))}let _e=k[dt];_e===void 0&&(_e=new ni,_e.layers.enable(dt),_e.viewport=new Zt,k[dt]=_e),_e.matrix.fromArray(ve.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ve.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Me.x,Me.y,Me.width,Me.height),dt===0&&(J.matrix.copy(_e.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ie===!0&&J.cameras.push(_e)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const dt=_.getDepthInformation(pe[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(We&&We.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<pe.length;dt++){const ve=pe[dt].camera;if(ve){let Me=x[ve];Me||(Me=new h0,x[ve]=Me);const _e=_.getCameraImage(ve);Me.sourceTexture=_e}}}}for(let pe=0;pe<B.length;pe++){const Ie=U[pe],We=B[pe];Ie!==null&&We!==void 0&&We.update(Ie,ge,h||u)}be&&be(re,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),M=null}const et=new w0;et.setAnimationLoop(Xe),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const Qr=new nr,qT=new Kt;function ZT(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,M0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,R,P,b){x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),g(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,b)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),C(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,R,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Fn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Fn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const R=e.get(x),P=R.envMap,b=R.envMapRotation;P&&(y.envMap.value=P,Qr.copy(b),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),y.envMapRotation.value.setFromMatrix4(qT.makeRotationFromEuler(Qr)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,R,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*R,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,R){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Fn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const R=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function KT(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,P){const b=P.program;r.uniformBlockBinding(R,b)}function h(R,P){let b=o[R.id];b===void 0&&(M(R),b=g(R),o[R.id]=b,R.addEventListener("dispose",y));const B=P.program;r.updateUBOMapping(R,B);const U=e.render.frame;l[R.id]!==U&&(v(R),l[R.id]=U)}function g(R){const P=_();R.__bindingPointIndex=P;const b=s.createBuffer(),B=R.__size,U=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,B,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,b),b}function _(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const P=o[R.id],b=R.uniforms,B=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let U=0,O=b.length;U<O;U++){const w=Array.isArray(b[U])?b[U]:[b[U]];for(let N=0,ae=w.length;N<ae;N++){const k=w[N];if(S(k,U,N,B)===!0){const J=k.__offset,Q=Array.isArray(k.value)?k.value:[k.value];let se=0;for(let X=0;X<Q.length;X++){const Z=Q[X],V=C(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,J+se,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,se),se+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(R,P,b,B){const U=R.value,O=P+"_"+b;if(B[O]===void 0)return typeof U=="number"||typeof U=="boolean"?B[O]=U:B[O]=U.clone(),!0;{const w=B[O];if(typeof U=="number"||typeof U=="boolean"){if(w!==U)return B[O]=U,!0}else if(w.equals(U)===!1)return w.copy(U),!0}return!1}function M(R){const P=R.uniforms;let b=0;const B=16;for(let O=0,w=P.length;O<w;O++){const N=Array.isArray(P[O])?P[O]:[P[O]];for(let ae=0,k=N.length;ae<k;ae++){const J=N[ae],Q=Array.isArray(J.value)?J.value:[J.value];for(let se=0,X=Q.length;se<X;se++){const Z=Q[se],V=C(Z),Y=b%B,ie=Y%V.boundary,ce=Y+ie;b+=ie,ce!==0&&B-ce<V.storage&&(b+=B-ce),J.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=b,b+=V.storage}}}const U=b%B;return U>0&&(b+=B-U),R.__size=b,R.__cache={},this}function C(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):gt("WebGLRenderer: Unsupported uniform value type.",R),P}function y(R){const P=R.target;P.removeEventListener("dispose",y);const b=u.indexOf(P.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:p,update:h,dispose:x}}const $T=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function JT(){return Ti===null&&(Ti=new ly($T,16,16,to,er),Ti.name="DFG_LUT",Ti.minFilter=_n,Ti.magFilter=_n,Ti.wrapS=$i,Ti.wrapT=$i,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class QT{constructor(e={}){const{canvas:t=Ex(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=ii}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const C=S,y=new Set([zd,Bd,kd]),x=new Set([ii,Ni,na,ia,Fd,Od]),R=new Uint32Array(4),P=new Int32Array(4);let b=null,B=null;const U=[],O=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let ae=!1;this._outputColorSpace=ti;let k=0,J=0,Q=null,se=-1,X=null;const Z=new Zt,V=new Zt;let Y=null;const ie=new Rt(0);let ce=0,F=t.width,q=t.height,be=1,Xe=null,et=null;const re=new Zt(0,0,F,q),ge=new Zt(0,0,F,q);let pe=!1;const Ie=new f0;let We=!1,ct=!1;const Lt=new Kt,dt=new K,ve=new Zt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ne(){return Q===null?be:1}let D=r;function ot(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Id}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",ht,!1),t.addEventListener("webglcontextcreationerror",It,!1),D===null){const j="webgl2";if(D=ot(j,A),D===null)throw ot(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let Ue,rt,Pe,L,E,G,ue,me,fe,je,Ae,Je,lt,Se,Re,$e,qe,ke,vt,H,Le,we,Be;function Te(){Ue=new QE(D),Ue.init(),Le=new GT(D,Ue),rt=new XE(D,Ue,e,Le),Pe=new VT(D,Ue),rt.reversedDepthBuffer&&v&&Pe.buffers.depth.setReversed(!0),L=new n1(D),E=new CT,G=new HT(D,Ue,Pe,E,rt,Le,L),ue=new JE(N),me=new aS(D),we=new GE(D,me),fe=new e1(D,me,L,we),je=new r1(D,fe,me,we,L),ke=new i1(D,rt,G),Re=new jE(E),Ae=new AT(N,ue,Ue,rt,we,Re),Je=new ZT(N,E),lt=new RT,Se=new UT(Ue),qe=new HE(N,ue,Pe,je,M,p),$e=new zT(N,je,rt),Be=new KT(D,L,rt,Pe),vt=new WE(D,Ue,L),H=new t1(D,Ue,L),L.programs=Ae.programs,N.capabilities=rt,N.extensions=Ue,N.properties=E,N.renderLists=lt,N.shadowMap=$e,N.state=Pe,N.info=L}Te(),C!==ii&&(w=new o1(C,t.width,t.height,o,l));const de=new YT(N,D);this.xr=de,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Ue.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ue.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(A){A!==void 0&&(be=A,this.setSize(F,q,!1))},this.getSize=function(A){return A.set(F,q)},this.setSize=function(A,j,le=!0){if(de.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,q=j,t.width=Math.floor(A*be),t.height=Math.floor(j*be),le===!0&&(t.style.width=A+"px",t.style.height=j+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(F*be,q*be).floor()},this.setDrawingBufferSize=function(A,j,le){F=A,q=j,be=le,t.width=Math.floor(A*le),t.height=Math.floor(j*le),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(C===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,j,le,ne){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,le,ne),Pe.viewport(Z.copy(re).multiplyScalar(be).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,j,le,ne){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,j,le,ne),Pe.scissor(V.copy(ge).multiplyScalar(be).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Pe.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Xe=A},this.setTransparentSort=function(A){et=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,le=!0){let ne=0;if(A){let ee=!1;if(Q!==null){const Fe=Q.texture.format;ee=y.has(Fe)}if(ee){const Fe=Q.texture.type,He=x.has(Fe),De=qe.getClearColor(),ze=qe.getClearAlpha(),it=De.r,at=De.g,_t=De.b;He?(R[0]=it,R[1]=at,R[2]=_t,R[3]=ze,D.clearBufferuiv(D.COLOR,0,R)):(P[0]=it,P[1]=at,P[2]=_t,P[3]=ze,D.clearBufferiv(D.COLOR,0,P))}else ne|=D.COLOR_BUFFER_BIT}j&&(ne|=D.DEPTH_BUFFER_BIT),le&&(ne|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&D.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",ht,!1),t.removeEventListener("webglcontextcreationerror",It,!1),qe.dispose(),lt.dispose(),Se.dispose(),E.dispose(),ue.dispose(),je.dispose(),we.dispose(),Be.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",ir),de.removeEventListener("sessionend",Dr),jn.stop()};function Ze(A){A.preventDefault(),Dm("WebGLRenderer: Context Lost."),ae=!0}function ht(){Dm("WebGLRenderer: Context Restored."),ae=!1;const A=L.autoReset,j=$e.enabled,le=$e.autoUpdate,ne=$e.needsUpdate,ee=$e.type;Te(),L.autoReset=A,$e.enabled=j,$e.autoUpdate=le,$e.needsUpdate=ne,$e.type=ee}function It(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wt(A){const j=A.target;j.removeEventListener("dispose",wt),Xn(j)}function Xn(A){xn(A),E.remove(A)}function xn(A){const j=E.get(A).programs;j!==void 0&&(j.forEach(function(le){Ae.releaseProgram(le)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,le,ne,ee,Fe){j===null&&(j=Me);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,De=ga(A,j,le,ne,ee);Pe.setMaterial(ne,He);let ze=le.index,it=1;if(ne.wireframe===!0){if(ze=fe.getWireframeAttribute(le),ze===void 0)return;it=2}const at=le.drawRange,_t=le.attributes.position;let st=at.start*it,Dt=(at.start+at.count)*it;Fe!==null&&(st=Math.max(st,Fe.start*it),Dt=Math.min(Dt,(Fe.start+Fe.count)*it)),ze!==null?(st=Math.max(st,0),Dt=Math.min(Dt,ze.count)):_t!=null&&(st=Math.max(st,0),Dt=Math.min(Dt,_t.count));const Ot=Dt-st;if(Ot<0||Ot===1/0)return;we.setup(ee,ne,De,le,ze);let Ft,Tt=vt;if(ze!==null&&(Ft=me.get(ze),Tt=H,Tt.setIndex(Ft)),ee.isMesh)ne.wireframe===!0?(Pe.setLineWidth(ne.wireframeLinewidth*Ne()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(ee.isLine){let jt=ne.linewidth;jt===void 0&&(jt=1),Pe.setLineWidth(jt*Ne()),ee.isLineSegments?Tt.setMode(D.LINES):ee.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else ee.isPoints?Tt.setMode(D.POINTS):ee.isSprite&&Tt.setMode(D.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Tt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const jt=ee._multiDrawStarts,tt=ee._multiDrawCounts,yn=ee._multiDrawCount,Et=ze?me.get(ze).bytesPerElement:1,Cn=E.get(ne).currentProgram.getUniforms();for(let bn=0;bn<yn;bn++)Cn.setValue(D,"_gl_DrawID",bn),Tt.render(jt[bn]/Et,tt[bn])}else if(ee.isInstancedMesh)Tt.renderInstances(st,Ot,ee.count);else if(le.isInstancedBufferGeometry){const jt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,tt=Math.min(le.instanceCount,jt);Tt.renderInstances(st,Ot,tt)}else Tt.render(st,Ot)};function cs(A,j,le){A.transparent===!0&&A.side===Ai&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,Ur(A,j,le),A.side=Nr,A.needsUpdate=!0,Ur(A,j,le),A.side=Ai):Ur(A,j,le)}this.compile=function(A,j,le=null){le===null&&(le=A),B=Se.get(le),B.init(j),O.push(B),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(B.pushLight(ee),ee.castShadow&&B.pushShadow(ee))}),A!==le&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(j.layers)&&(B.pushLight(ee),ee.castShadow&&B.pushShadow(ee))}),B.setupLights();const ne=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Fe=ee.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){const De=Fe[He];cs(De,le,ee),ne.add(De)}else cs(Fe,le,ee),ne.add(Fe)}),B=O.pop(),ne},this.compileAsync=function(A,j,le=null){const ne=this.compile(A,j,le);return new Promise(ee=>{function Fe(){if(ne.forEach(function(He){E.get(He).currentProgram.isReady()&&ne.delete(He)}),ne.size===0){ee(A);return}setTimeout(Fe,10)}Ue.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Ui=null;function dc(A){Ui&&Ui(A)}function ir(){jn.stop()}function Dr(){jn.start()}const jn=new w0;jn.setAnimationLoop(dc),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(A){Ui=A,de.setAnimationLoop(A),A===null?jn.stop():jn.start()},de.addEventListener("sessionstart",ir),de.addEventListener("sessionend",Dr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ae===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,ne=w!==null&&(Q===null||le)&&w.begin(N,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(j),j=de.getCamera()),A.isScene===!0&&A.onBeforeRender(N,A,j,Q),B=Se.get(A,O.length),B.init(j),O.push(B),Lt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ie.setFromProjectionMatrix(Lt,bi,j.reversedDepth),ct=this.localClippingEnabled,We=Re.init(this.clippingPlanes,ct),b=lt.get(A,U.length),b.init(),U.push(b),de.enabled===!0&&de.isPresenting===!0){const He=N.xr.getDepthSensingMesh();He!==null&&Ir(He,j,-1/0,N.sortObjects)}Ir(A,j,0,N.sortObjects),b.finish(),N.sortObjects===!0&&b.sort(Xe,et),_e=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,_e&&qe.addToRenderList(b,A),this.info.render.frame++,We===!0&&Re.beginShadows();const ee=B.state.shadowsArray;if($e.render(ee,A,j),We===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&w.hasRenderPass())===!1){const He=b.opaque,De=b.transmissive;if(B.setupLights(),j.isArrayCamera){const ze=j.cameras;if(De.length>0)for(let it=0,at=ze.length;it<at;it++){const _t=ze[it];pa(He,De,A,_t)}_e&&qe.render(A);for(let it=0,at=ze.length;it<at;it++){const _t=ze[it];ha(b,A,_t,_t.viewport)}}else De.length>0&&pa(He,De,A,j),_e&&qe.render(A),ha(b,A,j)}Q!==null&&J===0&&(G.updateMultisampleRenderTarget(Q),G.updateRenderTargetMipmap(Q)),ne&&w.end(N),A.isScene===!0&&A.onAfterRender(N,A,j),we.resetDefaultState(),se=-1,X=null,O.pop(),O.length>0?(B=O[O.length-1],We===!0&&Re.setGlobalState(N.clippingPlanes,B.state.camera)):B=null,U.pop(),U.length>0?b=U[U.length-1]:b=null};function Ir(A,j,le,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){ne&&ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Lt);const He=je.update(A),De=A.material;De.visible&&b.push(A,He,De,le,ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const He=je.update(A),De=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ve.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ve.copy(He.boundingSphere.center)),ve.applyMatrix4(A.matrixWorld).applyMatrix4(Lt)),Array.isArray(De)){const ze=He.groups;for(let it=0,at=ze.length;it<at;it++){const _t=ze[it],st=De[_t.materialIndex];st&&st.visible&&b.push(A,He,st,le,ve.z,_t)}}else De.visible&&b.push(A,He,De,le,ve.z,null)}}const Fe=A.children;for(let He=0,De=Fe.length;He<De;He++)Ir(Fe[He],j,le,ne)}function ha(A,j,le,ne){const{opaque:ee,transmissive:Fe,transparent:He}=A;B.setupLightsView(le),We===!0&&Re.setGlobalState(N.clippingPlanes,le),ne&&Pe.viewport(Z.copy(ne)),ee.length>0&&us(ee,j,le),Fe.length>0&&us(Fe,j,le),He.length>0&&us(He,j,le),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function pa(A,j,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ne.id]===void 0){const st=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ne.id]=new Pi(1,1,{generateMipmaps:!0,type:st?er:ii,minFilter:is,samples:Math.max(4,rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Fe=B.state.transmissionRenderTarget[ne.id],He=ne.viewport||Z;Fe.setSize(He.z*N.transmissionResolutionScale,He.w*N.transmissionResolutionScale);const De=N.getRenderTarget(),ze=N.getActiveCubeFace(),it=N.getActiveMipmapLevel();N.setRenderTarget(Fe),N.getClearColor(ie),ce=N.getClearAlpha(),ce<1&&N.setClearColor(16777215,.5),N.clear(),_e&&qe.render(le);const at=N.toneMapping;N.toneMapping=Ri;const _t=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),B.setupLightsView(ne),We===!0&&Re.setGlobalState(N.clippingPlanes,ne),us(A,le,ne),G.updateMultisampleRenderTarget(Fe),G.updateRenderTargetMipmap(Fe),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Dt=0,Ot=j.length;Dt<Ot;Dt++){const Ft=j[Dt],{object:Tt,geometry:jt,material:tt,group:yn}=Ft;if(tt.side===Ai&&Tt.layers.test(ne.layers)){const Et=tt.side;tt.side=Fn,tt.needsUpdate=!0,_i(Tt,le,ne,jt,tt,yn),tt.side=Et,tt.needsUpdate=!0,st=!0}}st===!0&&(G.updateMultisampleRenderTarget(Fe),G.updateRenderTargetMipmap(Fe))}N.setRenderTarget(De,ze,it),N.setClearColor(ie,ce),_t!==void 0&&(ne.viewport=_t),N.toneMapping=at}function us(A,j,le){const ne=j.isScene===!0?j.overrideMaterial:null;for(let ee=0,Fe=A.length;ee<Fe;ee++){const He=A[ee],{object:De,geometry:ze,group:it}=He;let at=He.material;at.allowOverride===!0&&ne!==null&&(at=ne),De.layers.test(le.layers)&&_i(De,j,le,ze,at,it)}}function _i(A,j,le,ne,ee,Fe){A.onBeforeRender(N,j,le,ne,ee,Fe),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(N,j,le,ne,A,Fe),ee.transparent===!0&&ee.side===Ai&&ee.forceSinglePass===!1?(ee.side=Fn,ee.needsUpdate=!0,N.renderBufferDirect(le,j,ne,ee,A,Fe),ee.side=Nr,ee.needsUpdate=!0,N.renderBufferDirect(le,j,ne,ee,A,Fe),ee.side=Ai):N.renderBufferDirect(le,j,ne,ee,A,Fe),A.onAfterRender(N,j,le,ne,ee,Fe)}function Ur(A,j,le){j.isScene!==!0&&(j=Me);const ne=E.get(A),ee=B.state.lights,Fe=B.state.shadowsArray,He=ee.state.version,De=Ae.getParameters(A,ee.state,Fe,j,le),ze=Ae.getProgramCacheKey(De);let it=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,ne.fog=j.fog;const at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=ue.get(A.envMap||ne.environment,at),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",wt),it=new Map,ne.programs=it);let _t=it.get(ze);if(_t!==void 0){if(ne.currentProgram===_t&&ne.lightsStateVersion===He)return ma(A,De),_t}else De.uniforms=Ae.getUniforms(A),A.onBeforeCompile(De,N),_t=Ae.acquireProgram(De,ze),it.set(ze,_t),ne.uniforms=De.uniforms;const st=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Re.uniform),ma(A,De),ne.needsLights=_a(A),ne.lightsStateVersion=He,ne.needsLights&&(st.ambientLightColor.value=ee.state.ambient,st.lightProbe.value=ee.state.probe,st.directionalLights.value=ee.state.directional,st.directionalLightShadows.value=ee.state.directionalShadow,st.spotLights.value=ee.state.spot,st.spotLightShadows.value=ee.state.spotShadow,st.rectAreaLights.value=ee.state.rectArea,st.ltc_1.value=ee.state.rectAreaLTC1,st.ltc_2.value=ee.state.rectAreaLTC2,st.pointLights.value=ee.state.point,st.pointLightShadows.value=ee.state.pointShadow,st.hemisphereLights.value=ee.state.hemi,st.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,st.spotLightMatrix.value=ee.state.spotLightMatrix,st.spotLightMap.value=ee.state.spotLightMap,st.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.currentProgram=_t,ne.uniformsList=null,_t}function lo(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=ec.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ma(A,j){const le=E.get(A);le.outputColorSpace=j.outputColorSpace,le.batching=j.batching,le.batchingColor=j.batchingColor,le.instancing=j.instancing,le.instancingColor=j.instancingColor,le.instancingMorph=j.instancingMorph,le.skinning=j.skinning,le.morphTargets=j.morphTargets,le.morphNormals=j.morphNormals,le.morphColors=j.morphColors,le.morphTargetsCount=j.morphTargetsCount,le.numClippingPlanes=j.numClippingPlanes,le.numIntersection=j.numClipIntersection,le.vertexAlphas=j.vertexAlphas,le.vertexTangents=j.vertexTangents,le.toneMapping=j.toneMapping}function ga(A,j,le,ne,ee){j.isScene!==!0&&(j=Me),G.resetTextureUnits();const Fe=j.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?j.environment:null,De=Q===null?N.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:no,ze=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,it=ue.get(ne.envMap||He,ze),at=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,_t=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),st=!!le.morphAttributes.position,Dt=!!le.morphAttributes.normal,Ot=!!le.morphAttributes.color;let Ft=Ri;ne.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=N.toneMapping);const Tt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,jt=Tt!==void 0?Tt.length:0,tt=E.get(ne),yn=B.state.lights;if(We===!0&&(ct===!0||A!==X)){const Yt=A===X&&ne.id===se;Re.setState(ne,A,Yt)}let Et=!1;ne.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==yn.state.version||tt.outputColorSpace!==De||ee.isBatchedMesh&&tt.batching===!1||!ee.isBatchedMesh&&tt.batching===!0||ee.isBatchedMesh&&tt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&tt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&tt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&tt.instancingMorph===!1&&ee.morphTexture!==null||tt.envMap!==it||ne.fog===!0&&tt.fog!==Fe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Re.numPlanes||tt.numIntersection!==Re.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==_t||tt.morphTargets!==st||tt.morphNormals!==Dt||tt.morphColors!==Ot||tt.toneMapping!==Ft||tt.morphTargetsCount!==jt)&&(Et=!0):(Et=!0,tt.__version=ne.version);let Cn=tt.currentProgram;Et===!0&&(Cn=Ur(ne,j,ee));let bn=!1,On=!1,rr=!1;const Nt=Cn.getUniforms(),pt=tt.uniforms;if(Pe.useProgram(Cn.program)&&(bn=!0,On=!0,rr=!0),ne.id!==se&&(se=ne.id,On=!0),bn||X!==A){Pe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(D,"projectionMatrix",A.projectionMatrix),Nt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Yn=Nt.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,dt.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,On=!0,rr=!0)}if(tt.needsLights&&(yn.state.directionalShadowMap.length>0&&Nt.setValue(D,"directionalShadowMap",yn.state.directionalShadowMap,G),yn.state.spotShadowMap.length>0&&Nt.setValue(D,"spotShadowMap",yn.state.spotShadowMap,G),yn.state.pointShadowMap.length>0&&Nt.setValue(D,"pointShadowMap",yn.state.pointShadowMap,G)),ee.isSkinnedMesh){Nt.setOptional(D,ee,"bindMatrix"),Nt.setOptional(D,ee,"bindMatrixInverse");const Yt=ee.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Nt.setValue(D,"boneTexture",Yt.boneTexture,G))}ee.isBatchedMesh&&(Nt.setOptional(D,ee,"batchingTexture"),Nt.setValue(D,"batchingTexture",ee._matricesTexture,G),Nt.setOptional(D,ee,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",ee._indirectTexture,G),Nt.setOptional(D,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",ee._colorsTexture,G));const ri=le.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&ke.update(ee,le,Cn),(On||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,Nt.setValue(D,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&j.environment!==null&&(pt.envMapIntensity.value=j.environmentIntensity),pt.dfgLUT!==void 0&&(pt.dfgLUT.value=JT()),On&&(Nt.setValue(D,"toneMappingExposure",N.toneMappingExposure),tt.needsLights&&va(pt,rr),Fe&&ne.fog===!0&&Je.refreshFogUniforms(pt,Fe),Je.refreshMaterialUniforms(pt,ne,be,q,B.state.transmissionRenderTarget[A.id]),ec.upload(D,lo(tt),pt,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ec.upload(D,lo(tt),pt,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Nt.setValue(D,"center",ee.center),Nt.setValue(D,"modelViewMatrix",ee.modelViewMatrix),Nt.setValue(D,"normalMatrix",ee.normalMatrix),Nt.setValue(D,"modelMatrix",ee.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Yt=ne.uniformsGroups;for(let Yn=0,Fi=Yt.length;Yn<Fi;Yn++){const co=Yt[Yn];Be.update(co,Cn),Be.bind(co,Cn)}}return Cn}function va(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function _a(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,j,le){const ne=E.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=j,E.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const le=E.get(A);le.__webglFramebuffer=j,le.__useDefaultFramebuffer=j===void 0};const xa=D.createFramebuffer();this.setRenderTarget=function(A,j=0,le=0){Q=A,k=j,J=le;let ne=null,ee=!1,Fe=!1;if(A){const De=E.get(A);if(De.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(D.FRAMEBUFFER,De.__webglFramebuffer),Z.copy(A.viewport),V.copy(A.scissor),Y=A.scissorTest,Pe.viewport(Z),Pe.scissor(V),Pe.setScissorTest(Y),se=-1;return}else if(De.__webglFramebuffer===void 0)G.setupRenderTarget(A);else if(De.__hasExternalTextures)G.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&E.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Fe=!0);const it=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[j])?ne=it[j][le]:ne=it[j],ee=!0):A.samples>0&&G.useMultisampledRTT(A)===!1?ne=E.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?ne=it[le]:ne=it,Z.copy(A.viewport),V.copy(A.scissor),Y=A.scissorTest}else Z.copy(re).multiplyScalar(be).floor(),V.copy(ge).multiplyScalar(be).floor(),Y=pe;if(le!==0&&(ne=xa),Pe.bindFramebuffer(D.FRAMEBUFFER,ne)&&Pe.drawBuffers(A,ne),Pe.viewport(Z),Pe.scissor(V),Pe.setScissorTest(Y),ee){const De=E.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,le)}else if(Fe){const De=j;for(let ze=0;ze<A.textures.length;ze++){const it=E.get(A.textures[ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ze,it.__webglTexture,le,De)}}else if(A!==null&&le!==0){const De=E.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,le)}se=-1},this.readRenderTargetPixels=function(A,j,le,ne,ee,Fe,He,De=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze){Pe.bindFramebuffer(D.FRAMEBUFFER,ze);try{const it=A.textures[De],at=it.format,_t=it.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),!rt.textureFormatReadable(at)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(_t)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&le>=0&&le<=A.height-ee&&D.readPixels(j,le,ne,ee,Le.convert(at),Le.convert(_t),Fe)}finally{const it=Q!==null?E.get(Q).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(A,j,le,ne,ee,Fe,He,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze)if(j>=0&&j<=A.width-ne&&le>=0&&le<=A.height-ee){Pe.bindFramebuffer(D.FRAMEBUFFER,ze);const it=A.textures[De],at=it.format,_t=it.type;if(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),!rt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,Fe.byteLength,D.STREAM_READ),D.readPixels(j,le,ne,ee,Le.convert(at),Le.convert(_t),0);const Dt=Q!==null?E.get(Q).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Dt);const Ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Tx(D,Ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Fe),D.deleteBuffer(st),D.deleteSync(Ot),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,le=0){const ne=Math.pow(2,-le),ee=Math.floor(A.image.width*ne),Fe=Math.floor(A.image.height*ne),He=j!==null?j.x:0,De=j!==null?j.y:0;G.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,le,0,0,He,De,ee,Fe),Pe.unbindTexture()};const hc=D.createFramebuffer(),pc=D.createFramebuffer();this.copyTextureToTexture=function(A,j,le=null,ne=null,ee=0,Fe=0){let He,De,ze,it,at,_t,st,Dt,Ot;const Ft=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(le!==null)He=le.max.x-le.min.x,De=le.max.y-le.min.y,ze=le.isBox3?le.max.z-le.min.z:1,it=le.min.x,at=le.min.y,_t=le.isBox3?le.min.z:0;else{const pt=Math.pow(2,-ee);He=Math.floor(Ft.width*pt),De=Math.floor(Ft.height*pt),A.isDataArrayTexture?ze=Ft.depth:A.isData3DTexture?ze=Math.floor(Ft.depth*pt):ze=1,it=0,at=0,_t=0}ne!==null?(st=ne.x,Dt=ne.y,Ot=ne.z):(st=0,Dt=0,Ot=0);const Tt=Le.convert(j.format),jt=Le.convert(j.type);let tt;j.isData3DTexture?(G.setTexture3D(j,0),tt=D.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(G.setTexture2DArray(j,0),tt=D.TEXTURE_2D_ARRAY):(G.setTexture2D(j,0),tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment);const yn=D.getParameter(D.UNPACK_ROW_LENGTH),Et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Cn=D.getParameter(D.UNPACK_SKIP_PIXELS),bn=D.getParameter(D.UNPACK_SKIP_ROWS),On=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,it),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_t);const rr=A.isDataArrayTexture||A.isData3DTexture,Nt=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const pt=E.get(A),ri=E.get(j),Yt=E.get(pt.__renderTarget),Yn=E.get(ri.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Fi=0;Fi<ze;Fi++)rr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(A).__webglTexture,ee,_t+Fi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(j).__webglTexture,Fe,Ot+Fi)),D.blitFramebuffer(it,at,He,De,st,Dt,He,De,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||E.has(A)){const pt=E.get(A),ri=E.get(j);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,hc),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,pc);for(let Yt=0;Yt<ze;Yt++)rr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,ee,_t+Yt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,ee),Nt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ri.__webglTexture,Fe,Ot+Yt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ri.__webglTexture,Fe),ee!==0?D.blitFramebuffer(it,at,He,De,st,Dt,He,De,D.COLOR_BUFFER_BIT,D.NEAREST):Nt?D.copyTexSubImage3D(tt,Fe,st,Dt,Ot+Yt,it,at,He,De):D.copyTexSubImage2D(tt,Fe,st,Dt,it,at,He,De);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Nt?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,jt,Ft.data):j.isCompressedArrayTexture?D.compressedTexSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Ft.data):D.texSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,jt,Ft):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Fe,st,Dt,He,De,Tt,jt,Ft.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Fe,st,Dt,Ft.width,Ft.height,Tt,Ft.data):D.texSubImage2D(D.TEXTURE_2D,Fe,st,Dt,He,De,Tt,jt,Ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,yn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,bn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,On),Fe===0&&j.generateMipmaps&&D.generateMipmap(tt),Pe.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&G.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),Pe.unbindTexture()},this.resetState=function(){k=0,J=0,Q=null,Pe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}class ew extends Zd{constructor(e){super(e)}load(e,t,r,o){const l=this,u=new nS(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){const p=l.parse(JSON.parse(f));t&&t(p)},r,o)}parse(e){return new tw(e)}}class tw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,r="ltr"){const o=[],l=nw(e,t,this.data,r);for(let u=0,f=l.length;u<f;u++)o.push(...l[u].toShapes());return o}}function nw(s,e,t,r){const o=Array.from(s),l=e/t.resolution,u=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*l,f=[];let p=0,h=0;(r=="rtl"||r=="tb")&&o.reverse();for(let g=0;g<o.length;g++){const _=o[g];if(_===`
`)p=0,h-=u;else{const v=iw(_,l,p,h,t);r=="tb"?(p=0,h+=t.ascender*l):p+=v.offsetX,f.push(v.path)}}return f}function iw(s,e,t,r,o){const l=o.glyphs[s]||o.glyphs["?"];if(!l){console.error('THREE.Font: character "'+s+'" does not exists in font family '+o.familyName+".");return}const u=new sS;let f,p,h,g,_,v,S,M;if(l.o){const C=l._cachedOutline||(l._cachedOutline=l.o.split(" "));for(let y=0,x=C.length;y<x;)switch(C[y++]){case"m":f=C[y++]*e+t,p=C[y++]*e+r,u.moveTo(f,p);break;case"l":f=C[y++]*e+t,p=C[y++]*e+r,u.lineTo(f,p);break;case"q":h=C[y++]*e+t,g=C[y++]*e+r,_=C[y++]*e+t,v=C[y++]*e+r,u.quadraticCurveTo(_,v,h,g);break;case"b":h=C[y++]*e+t,g=C[y++]*e+r,_=C[y++]*e+t,v=C[y++]*e+r,S=C[y++]*e+t,M=C[y++]*e+r,u.bezierCurveTo(_,v,S,M,h,g);break}}return{offsetX:l.ha*e,path:u}}class rw extends qd{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const o=r.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}const sw=60,ow=.1,aw=1e3,lw=0,cw=-.5,uw=10,fw=0,dw=0,hw=!0,pw=2,mw=459023,gw=0,vw=0,_w=0,xw=0,yw=0,Sw=0,Cg=32,Mw=16777215,Ew=16777215,Tw=.0035,ww=-.005,Aw="MTRX",bg=4.5,Rg=12,Cw=.5,bw=.01,Rw="/fonts/Kode_Mono_Regular.json",Pw=.2,Lw=500,Nw=.1,Dw=16777215,Iw=300,Pg=8,Uw=5,Fw=-80,Ow=5,kw=3.14/2,Bw=5,zw=3.14/2,Pd=3,Vw=200,Lg=200,Hw=16777215,Gw="#FF2EDB",Ww="#07010f",Xw=2.5,jw=.008,Yw=.2,qw=1e-5,Zw=7,Kw=.015,$w=.08,Jw="background",Qw="fixed inset-0 block h-dvh w-screen pointer-events-none z-0",eA=430,tA=640,nA=1024;function uc(s){return s<=eA?{cameraFov:78,cameraY:-1,cameraZ:8,groupScale:.44,wallX:1.5,wallY:-68,pixelRatioCap:1.3,starCount:180}:s<tA?{cameraFov:74,cameraY:-.15,cameraZ:12.7,groupScale:.42,wallX:4,wallY:-72,pixelRatioCap:1.5,starCount:240}:s<nA?{cameraFov:66,cameraY:-.4,cameraZ:11.5,groupScale:.46,wallX:2.5,wallY:-76,pixelRatioCap:1.75,starCount:360}:{cameraFov:sw,cameraY:cw,cameraZ:uw,groupScale:.5,wallX:Uw,wallY:Fw,pixelRatioCap:pw,starCount:Lw}}function L0(s){return Math.min(window.devicePixelRatio,uc(s).pixelRatioCap)}function fc(){const s=window.visualViewport,e=Math.ceil(Math.max(window.innerWidth,s?.width??0,document.documentElement.clientWidth)),t=Math.ceil(Math.max(window.innerHeight,s?.height??0,document.documentElement.clientHeight));return{width:Math.max(1,e),height:Math.max(1,t)}}function iA(){const{width:s,height:e}=fc(),t=uc(s),r=new ni(t.cameraFov,s/e,ow,aw);return r.position.set(lw,t.cameraY,t.cameraZ),r.lookAt(fw,t.cameraY,dw),r}function rA(s){const{width:e,height:t}=fc(),r=new QT({canvas:s,antialias:hw});return r.setSize(e,t,!1),r.setPixelRatio(L0(e)),r}function sA(s,e){const{width:t,height:r}=fc(),o=uc(t);return s.aspect=t/r,s.fov=o.cameraFov,s.updateProjectionMatrix(),e.setSize(t,r,!1),e.setPixelRatio(L0(t)),o}function Ng(s){return s-window.scrollY*Kw}function Dg(s,e,t,r,o){e.scale.set(o.groupScale,o.groupScale,o.groupScale),t.position.set(o.wallX,o.wallY,Ow),r.position.set(-o.wallX,o.wallY,Bw),s.position.z=o.cameraZ}function Ig(s){const e=s.attributes.position,t=new Float32Array(e.count*3),r=new Rt(Gw),o=new Rt(Ww),l=new Rt;for(let u=0;u<e.count;u+=1){const f=e.getX(u),p=qs.inverseLerp(-Pd/2,Pd/2,f);l.lerpColors(r,o,p);const h=u*3;t[h]=l.r,t[h+1]=l.g,t[h+2]=l.b}s.setAttribute("color",new An(t,3))}function oA({id:s=Jw,className:e=""}){const t=pi.useRef(null);return pi.useEffect(()=>{const r=t.current;if(!r)return;const o=new ty;o.background=new Rt(mw);const l=iA(),u=rA(r),f=new Zs;o.add(f);let p=l.position.y,h=l.position.y;const g=new Un(new sc(3,Cg,Cg/2),new Ks({wireframe:!0,color:Mw}));f.add(g);const _=new Zs;_.rotation.x=Pw,f.add(_),new ew().load(Rw,J=>{const Q=new Ks({color:Ew}),se=2*Math.PI/Rg;for(let X=0;X<Rg;X+=1){const Z=X*se,V=new rw(Aw,{font:J,size:Cw,depth:bw});V.center();const Y=new Un(V,Q);Y.position.x=Math.cos(Z)*bg,Y.position.z=Math.sin(Z)*bg,Y.position.y=0,Y.lookAt(0,0,0),Y.rotation.y+=Math.PI,_.add(Y)}});const S=()=>{const J=new sc(Nw,Pg,Pg/2),Q=new Ks({color:Dw,blending:If,wireframe:!0}),se=new Un(J,Q),[X,Z,V]=Array(3).fill().map(()=>qs.randFloatSpread(Iw));se.position.set(X,Z,V),o.add(se)},M=new da(Pd,Vw,Lg/30,Lg),C=M.clone();Ig(M),Ig(C);const y=new Ks({wireframe:!0,side:Ai,color:Hw,vertexColors:!0}),x=new Un(M,y);o.add(x);const R=new Un(C,y);o.add(R);const P=[new Float32Array(x.geometry.attributes.position.count),new Float32Array(R.geometry.attributes.position.count)];let b=0,B=performance.now()*.001;const U=uc(fc().width);Dg(l,f,x,R,U),p=U.cameraY,h=p,f.position.set(gw,vw,_w),f.rotation.set(xw,yw,Sw),Array(U.starCount).fill().forEach(S),x.rotation.y=kw,R.rotation.y=zw;const O=()=>{const J=sA(l,u);Dg(l,f,x,R,J),p=J.cameraY,h=Ng(p)},w=()=>{h=Ng(p)},N=window.visualViewport;window.addEventListener("resize",O),window.addEventListener("orientationchange",O),N?.addEventListener("resize",O),N?.addEventListener("scroll",O),window.addEventListener("scroll",w,{passive:!0}),O(),w();let ae=0;const k=()=>{l.position.y=qs.lerp(l.position.y,h,$w),g&&_&&(g.rotateY(Tw),_.rotateY(ww));const J=performance.now()*.001,Q=Math.min(.05,J-B);B=J;const se=J;se-b>=qw&&(P.forEach(X=>{for(let Z=0;Z<X.length;Z+=1)if(Math.random()<jw)if(Math.random()<Yw){const Y=(Math.random()<.5?-1:1)*(.15+Math.random()*Xw);X[Z]=qs.lerp(X[Z],Y,.35)}else X[Z]=qs.lerp(X[Z],0,.6)}),b=se),[x,R].forEach((X,Z)=>{const V=X.geometry.attributes.position,Y=V.array,ie=P[Z];for(let ce=0;ce<V.count;ce+=1){const F=ce*3+2;Y[F]=qs.damp(Y[F],ie[ce],Zw,Q)}V.needsUpdate=!0}),u.render(o,l),ae=requestAnimationFrame(k)};return k(),()=>{cancelAnimationFrame(ae),window.removeEventListener("resize",O),window.removeEventListener("orientationchange",O),N?.removeEventListener("resize",O),N?.removeEventListener("scroll",O),window.removeEventListener("scroll",w),u.dispose()}},[]),he.jsx("canvas",{ref:t,id:s,className:`${Qw} ${e}`.trim()})}function aA(){return he.jsx("section",{className:"bg-transparent text-cyber-text py-8 text-center min-h-[7rem]",children:he.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," MTRX Studio. All rights reserved."]})})}function lA(){return he.jsxs("div",{className:" bg-cyber-void",children:[he.jsx(oA,{id:"backbg"}),he.jsx(M_,{}),he.jsx(b_,{}),he.jsx(E_,{}),he.jsx(H_,{}),he.jsx(aA,{})]})}y_.createRoot(document.getElementById("root")).render(he.jsx(h_.StrictMode,{children:he.jsx(lA,{})}));
