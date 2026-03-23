(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Xd(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ef={exports:{}},Go={},tf={exports:{}},St={};var bm;function F_(){if(bm)return St;bm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function m(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(F,j,Ae){this.props=F,this.context=j,this.refs=A,this.updater=Ae||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,j){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,j,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function C(F,j,Ae){this.props=F,this.context=j,this.refs=A,this.updater=Ae||S}var P=C.prototype=new x;P.constructor=C,M(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function w(F,j,Ae){var Xe,et={},oe=null,ge=null;if(j!=null)for(Xe in j.ref!==void 0&&(ge=j.ref),j.key!==void 0&&(oe=""+j.key),j)B.call(j,Xe)&&!O.hasOwnProperty(Xe)&&(et[Xe]=j[Xe]);var pe=arguments.length-2;if(pe===1)et.children=Ae;else if(1<pe){for(var Ie=Array(pe),We=0;We<pe;We++)Ie[We]=arguments[We+2];et.children=Ie}if(F&&F.defaultProps)for(Xe in pe=F.defaultProps,pe)et[Xe]===void 0&&(et[Xe]=pe[Xe]);return{$$typeof:s,type:F,key:oe,ref:ge,props:et,_owner:I.current}}function L(F,j){return{$$typeof:s,type:F.type,key:j,ref:F.ref,props:F.props,_owner:F._owner}}function ae(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function k(F){var j={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ae){return j[Ae]})}var ne=/\/+/g;function J(F,j){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):j.toString(36)}function re(F,j,Ae,Xe,et){var oe=typeof F;(oe==="undefined"||oe==="boolean")&&(F=null);var ge=!1;if(F===null)ge=!0;else switch(oe){case"string":case"number":ge=!0;break;case"object":switch(F.$$typeof){case s:case e:ge=!0}}if(ge)return ge=F,et=et(ge),F=Xe===""?"."+J(ge,0):Xe,R(et)?(Ae="",F!=null&&(Ae=F.replace(ne,"$&/")+"/"),re(et,j,Ae,"",function(We){return We})):et!=null&&(ae(et)&&(et=L(et,Ae+(!et.key||ge&&ge.key===et.key?"":(""+et.key).replace(ne,"$&/")+"/")+F)),j.push(et)),1;if(ge=0,Xe=Xe===""?".":Xe+":",R(F))for(var pe=0;pe<F.length;pe++){oe=F[pe];var Ie=Xe+J(oe,pe);ge+=re(oe,j,Ae,Ie,et)}else if(Ie=m(F),typeof Ie=="function")for(F=Ie.call(F),pe=0;!(oe=F.next()).done;)oe=oe.value,Ie=Xe+J(oe,pe++),ge+=re(oe,j,Ae,Ie,et);else if(oe==="object")throw j=String(F),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return ge}function Z(F,j,Ae){if(F==null)return F;var Xe=[],et=0;return re(F,Xe,"","",function(oe){return j.call(Ae,oe,et++)}),Xe}function $(F){if(F._status===-1){var j=F._result;j=j(),j.then(function(Ae){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ae)},function(Ae){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ae)}),F._status===-1&&(F._status=0,F._result=j)}if(F._status===1)return F._result.default;throw F._result}var V={current:null},q={transition:null},ee={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:q,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:Z,forEach:function(F,j,Ae){Z(F,function(){j.apply(this,arguments)},Ae)},count:function(F){var j=0;return Z(F,function(){j++}),j},toArray:function(F){return Z(F,function(j){return j})||[]},only:function(F){if(!ae(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},St.Component=y,St.Fragment=t,St.Profiler=o,St.PureComponent=C,St.StrictMode=r,St.Suspense=p,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,St.act=se,St.cloneElement=function(F,j,Ae){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=M({},F.props),et=F.key,oe=F.ref,ge=F._owner;if(j!=null){if(j.ref!==void 0&&(oe=j.ref,ge=I.current),j.key!==void 0&&(et=""+j.key),F.type&&F.type.defaultProps)var pe=F.type.defaultProps;for(Ie in j)B.call(j,Ie)&&!O.hasOwnProperty(Ie)&&(Xe[Ie]=j[Ie]===void 0&&pe!==void 0?pe[Ie]:j[Ie])}var Ie=arguments.length-2;if(Ie===1)Xe.children=Ae;else if(1<Ie){pe=Array(Ie);for(var We=0;We<Ie;We++)pe[We]=arguments[We+2];Xe.children=pe}return{$$typeof:s,type:F.type,key:et,ref:oe,props:Xe,_owner:ge}},St.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},St.createElement=w,St.createFactory=function(F){var j=w.bind(null,F);return j.type=F,j},St.createRef=function(){return{current:null}},St.forwardRef=function(F){return{$$typeof:f,render:F}},St.isValidElement=ae,St.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:$}},St.memo=function(F,j){return{$$typeof:h,type:F,compare:j===void 0?null:j}},St.startTransition=function(F){var j=q.transition;q.transition={};try{F()}finally{q.transition=j}},St.unstable_act=se,St.useCallback=function(F,j){return V.current.useCallback(F,j)},St.useContext=function(F){return V.current.useContext(F)},St.useDebugValue=function(){},St.useDeferredValue=function(F){return V.current.useDeferredValue(F)},St.useEffect=function(F,j){return V.current.useEffect(F,j)},St.useId=function(){return V.current.useId()},St.useImperativeHandle=function(F,j,Ae){return V.current.useImperativeHandle(F,j,Ae)},St.useInsertionEffect=function(F,j){return V.current.useInsertionEffect(F,j)},St.useLayoutEffect=function(F,j){return V.current.useLayoutEffect(F,j)},St.useMemo=function(F,j){return V.current.useMemo(F,j)},St.useReducer=function(F,j,Ae){return V.current.useReducer(F,j,Ae)},St.useRef=function(F){return V.current.useRef(F)},St.useState=function(F){return V.current.useState(F)},St.useSyncExternalStore=function(F,j,Ae){return V.current.useSyncExternalStore(F,j,Ae)},St.useTransition=function(){return V.current.useTransition()},St.version="18.3.1",St}var Cm;function jd(){return Cm||(Cm=1,tf.exports=F_()),tf.exports}var Rm;function O_(){if(Rm)return Go;Rm=1;var s=jd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var v,_={},m=null,S=null;h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:m,ref:S,props:_,_owner:o.current}}return Go.Fragment=t,Go.jsx=u,Go.jsxs=u,Go}var Pm;function k_(){return Pm||(Pm=1,ef.exports=O_()),ef.exports}var ce=k_(),vi=jd();const B_=Xd(vi);var El={},nf={exports:{}},Un={},rf={exports:{}},sf={};var Lm;function z_(){return Lm||(Lm=1,(function(s){function e(q,ee){var se=q.length;q.push(ee);e:for(;0<se;){var F=se-1>>>1,j=q[F];if(0<o(j,ee))q[F]=ee,q[se]=j,se=F;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],se=q.pop();if(se!==ee){q[0]=se;e:for(var F=0,j=q.length,Ae=j>>>1;F<Ae;){var Xe=2*(F+1)-1,et=q[Xe],oe=Xe+1,ge=q[oe];if(0>o(et,se))oe<j&&0>o(ge,et)?(q[F]=ge,q[oe]=se,F=oe):(q[F]=et,q[Xe]=se,F=Xe);else if(oe<j&&0>o(ge,se))q[F]=ge,q[oe]=se,F=oe;else break e}}return ee}function o(q,ee){var se=q.sortIndex-ee.sortIndex;return se!==0?se:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var p=[],h=[],v=1,_=null,m=3,S=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(q){for(var ee=t(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=q)r(h),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=t(h)}}function R(q){if(A=!1,P(q),!M)if(t(p)!==null)M=!0,$(B);else{var ee=t(h);ee!==null&&V(R,ee.startTime-q)}}function B(q,ee){M=!1,A&&(A=!1,x(w),w=-1),S=!0;var se=m;try{for(P(ee),_=t(p);_!==null&&(!(_.expirationTime>ee)||q&&!k());){var F=_.callback;if(typeof F=="function"){_.callback=null,m=_.priorityLevel;var j=F(_.expirationTime<=ee);ee=s.unstable_now(),typeof j=="function"?_.callback=j:_===t(p)&&r(p),P(ee)}else r(p);_=t(p)}if(_!==null)var Ae=!0;else{var Xe=t(h);Xe!==null&&V(R,Xe.startTime-ee),Ae=!1}return Ae}finally{_=null,m=se,S=!1}}var I=!1,O=null,w=-1,L=5,ae=-1;function k(){return!(s.unstable_now()-ae<L)}function ne(){if(O!==null){var q=s.unstable_now();ae=q;var ee=!0;try{ee=O(!0,q)}finally{ee?J():(I=!1,O=null)}}else I=!1}var J;if(typeof C=="function")J=function(){C(ne)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,Z=re.port2;re.port1.onmessage=ne,J=function(){Z.postMessage(null)}}else J=function(){y(ne,0)};function $(q){O=q,I||(I=!0,J())}function V(q,ee){w=y(function(){q(s.unstable_now())},ee)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,$(B))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return m},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(q){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var se=m;m=ee;try{return q()}finally{m=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=m;m=q;try{return ee()}finally{m=se}},s.unstable_scheduleCallback=function(q,ee,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,q){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=se+j,q={id:v++,callback:ee,priorityLevel:q,startTime:se,expirationTime:j,sortIndex:-1},se>F?(q.sortIndex=se,e(h,q),t(p)===null&&q===t(h)&&(A?(x(w),w=-1):A=!0,V(R,se-F))):(q.sortIndex=j,e(p,q),M||S||(M=!0,$(B))),q},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(q){var ee=m;return function(){var se=m;m=ee;try{return q.apply(this,arguments)}finally{m=se}}}})(sf)),sf}var Nm;function V_(){return Nm||(Nm=1,rf.exports=z_()),rf.exports}var Dm;function H_(){if(Dm)return Un;Dm=1;var s=jd(),e=V_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function m(n){return p.call(_,n)?!0:p.call(v,n)?!1:h.test(n)?_[n]=!0:(v[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,g,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?m(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),q=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function j(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ae=!1;function Xe(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var d=le.stack.split(`
`),g=c.stack.split(`
`),T=d.length-1,U=g.length-1;1<=T&&0<=U&&d[T]!==g[U];)U--;for(;1<=T&&0<=U;T--,U--)if(d[T]!==g[U]){if(T!==1||U!==1)do if(T--,U--,0>U||d[T]!==g[U]){var z=`
`+d[T].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=T&&0<=U);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?j(n):""}function et(n){switch(n.tag){case 5:return j(n.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case L:return"Profiler";case w:return"StrictMode";case J:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case ae:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return i=n.displayName||null,i!==null?i:oe(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return oe(n(i))}catch{}}return null}function ge(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=Ie(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ct(n){n._valueTracker||(n._valueTracker=We(n))}function Lt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ie(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ve(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Me(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _e(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function Ne(n,i){_e(n,i);var a=pe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&ot(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function D(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ot(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ue=Array.isArray;function rt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Pe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ue(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),c=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var de,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(n){lt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Je[i]=Je[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Je.hasOwnProperty(n)&&Je[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,i){if(i){if(Ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Le=null,we=null,Be=null;function Te(n){if(n=Co(n)){if(typeof Le!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ka(i),Le(n.stateNode,n.type,i))}}function he(n){we?Be?Be.push(n):Be=[n]:we=n}function Ze(){if(we){var n=we,i=Be;if(Be=we=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function pt(n,i){return n(i)}function It(){}var At=!1;function Yn(n,i,a){if(At)return n(i,a);At=!0;try{return pt(n,i,a)}finally{At=!1,(we!==null||Be!==null)&&(It(),Ze())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var c=ka(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var fs=!1;if(f)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){fs=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{fs=!1}function Mc(n,i,a,c,d,g,T,U,z){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(ye){this.onError(ye)}}var rr=!1,Ur=null,qn=!1,Fr=null,ga={onError:function(n){rr=!0,Ur=n}};function va(n,i,a,c,d,g,T,U,z){rr=!1,Ur=null,Mc.apply(ga,arguments)}function ds(n,i,a,c,d,g,T,U,z){if(va.apply(this,arguments),rr){if(rr){var le=Ur;rr=!1,Ur=null}else throw Error(t(198));qn||(qn=!0,Fr=le)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Or(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function co(n){if(xi(n)!==n)throw Error(t(188))}function _a(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return co(d),n;if(g===c)return co(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var T=!1,U=d.child;U;){if(U===a){T=!0,a=d,c=g;break}if(U===c){T=!0,c=d,a=g;break}U=U.sibling}if(!T){for(U=g.child;U;){if(U===a){T=!0,a=g,c=d;break}if(U===c){T=!0,c=g,a=d;break}U=U.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function xa(n){return n=_a(n),n!==null?ya(n):null}function ya(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ya(n);if(i!==null)return i;n=n.sibling}return null}var Sa=e.unstable_scheduleCallback,Ma=e.unstable_cancelCallback,Ec=e.unstable_shouldYield,Tc=e.unstable_requestPaint,b=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,ue=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,Fe=e.unstable_LowPriority,He=e.unstable_IdlePriority,De=null,ze=null;function it(n){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(De,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:Dt,_t=Math.log,st=Math.LN2;function Dt(n){return n>>>=0,n===0?32:31-(_t(n)/st|0)|0}var Ot=64,Ft=4194304;function Tt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,T=a&268435455;if(T!==0){var U=T&~d;U!==0?c=Tt(U):(g&=T,g!==0&&(c=Tt(g)))}else T=a&~d,T!==0?c=Tt(T):g!==0&&(c=Tt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-at(i),d=1<<a,c|=n[a],i&=~d;return c}function tt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var T=31-at(g),U=1<<T,z=d[T];z===-1?((U&a)===0||(U&c)!==0)&&(d[T]=tt(U,i)):z<=i&&(n.expiredLanes|=U),g&=~U}}function Et(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cn(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function Rn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=a}function sr(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-at(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Nt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-at(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var mt=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qt,Zn,Oi,uo,ch,wc=!1,Ea=[],or=null,ar=null,lr=null,fo=new Map,ho=new Map,cr=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(n,i){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":fo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(i.pointerId)}}function po(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=Co(i),i!==null&&Zn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function sv(n,i,a,c,d){switch(i){case"focusin":return or=po(or,n,i,a,c,d),!0;case"dragenter":return ar=po(ar,n,i,a,c,d),!0;case"mouseover":return lr=po(lr,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return fo.set(g,po(fo.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,ho.set(g,po(ho.get(g)||null,n,i,a,c,d)),!0}return!1}function fh(n){var i=kr(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=Or(a),i!==null){n.blockedOn=i,ch(n.priority,function(){Oi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ta(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=bc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);vt=c,a.target.dispatchEvent(c),vt=null}else return i=Co(a),i!==null&&Zn(i),n.blockedOn=a,!1;i.shift()}return!0}function dh(n,i,a){Ta(n)&&a.delete(i)}function ov(){wc=!1,or!==null&&Ta(or)&&(or=null),ar!==null&&Ta(ar)&&(ar=null),lr!==null&&Ta(lr)&&(lr=null),fo.forEach(dh),ho.forEach(dh)}function mo(n,i){n.blockedOn===i&&(n.blockedOn=null,wc||(wc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ov)))}function go(n){function i(d){return mo(d,n)}if(0<Ea.length){mo(Ea[0],n);for(var a=1;a<Ea.length;a++){var c=Ea[a];c.blockedOn===n&&(c.blockedOn=null)}}for(or!==null&&mo(or,n),ar!==null&&mo(ar,n),lr!==null&&mo(lr,n),fo.forEach(i),ho.forEach(i),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)fh(a),a.blockedOn===null&&cr.shift()}var hs=R.ReactCurrentBatchConfig,wa=!0;function av(n,i,a,c){var d=mt,g=hs.transition;hs.transition=null;try{mt=1,Ac(n,i,a,c)}finally{mt=d,hs.transition=g}}function lv(n,i,a,c){var d=mt,g=hs.transition;hs.transition=null;try{mt=4,Ac(n,i,a,c)}finally{mt=d,hs.transition=g}}function Ac(n,i,a,c){if(wa){var d=bc(n,i,a,c);if(d===null)Wc(n,i,c,Aa,a),uh(n,c);else if(sv(d,n,i,a,c))c.stopPropagation();else if(uh(n,c),i&4&&-1<rv.indexOf(n)){for(;d!==null;){var g=Co(d);if(g!==null&&qt(g),g=bc(n,i,a,c),g===null&&Wc(n,i,c,Aa,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else Wc(n,i,c,null,a)}}var Aa=null;function bc(n,i,a,c){if(Aa=null,n=H(c),n=kr(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Or(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Aa=n,null}function hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case ue:return 1;case ie:return 4;case Q:case Fe:return 16;case He:return 536870912;default:return 16}default:return 16}}var ur=null,Cc=null,ba=null;function ph(){if(ba)return ba;var n,i=Cc,a=i.length,c,d="value"in ur?ur.value:ur.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[g-c];c++);return ba=d.slice(n,1<c?1-c:void 0)}function Ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ra(){return!0}function mh(){return!1}function Bn(n){function i(a,c,d,g,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(g):g[U]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ra:mh,this.isPropagationStopped=mh,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=Bn(ps),vo=se({},ps,{view:0,detail:0}),cv=Bn(vo),Pc,Lc,_o,Pa=se({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_o&&(_o&&n.type==="mousemove"?(Pc=n.screenX-_o.screenX,Lc=n.screenY-_o.screenY):Lc=Pc=0,_o=n),Pc)},movementY:function(n){return"movementY"in n?n.movementY:Lc}}),gh=Bn(Pa),uv=se({},Pa,{dataTransfer:0}),fv=Bn(uv),dv=se({},vo,{relatedTarget:0}),Nc=Bn(dv),hv=se({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=Bn(hv),mv=se({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),gv=Bn(mv),vv=se({},ps,{data:0}),vh=Bn(vv),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yv[n])?!!i[n]:!1}function Dc(){return Sv}var Mv=se({},vo,{key:function(n){if(n.key){var i=_v[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ev=Bn(Mv),Tv=se({},Pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_h=Bn(Tv),wv=se({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Av=Bn(wv),bv=se({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Bn(bv),Rv=se({},Pa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Bn(Rv),Lv=[9,13,27,32],Ic=f&&"CompositionEvent"in window,xo=null;f&&"documentMode"in document&&(xo=document.documentMode);var Nv=f&&"TextEvent"in window&&!xo,xh=f&&(!Ic||xo&&8<xo&&11>=xo),yh=" ",Sh=!1;function Mh(n,i){switch(n){case"keyup":return Lv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function Dv(n,i){switch(n){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(Sh=!0,yh);case"textInput":return n=i.data,n===yh&&Sh?null:n;default:return null}}function Iv(n,i){if(ms)return n==="compositionend"||!Ic&&Mh(n,i)?(n=ph(),ba=Cc=ur=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Uv[n.type]:i==="textarea"}function wh(n,i,a,c){he(c),i=Ua(i,"onChange"),0<i.length&&(a=new Rc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var yo=null,So=null;function Fv(n){Gh(n,0)}function La(n){var i=ys(n);if(Lt(i))return n}function Ov(n,i){if(n==="change")return i}var Ah=!1;if(f){var Uc;if(f){var Fc="oninput"in document;if(!Fc){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),Fc=typeof bh.oninput=="function"}Uc=Fc}else Uc=!1;Ah=Uc&&(!document.documentMode||9<document.documentMode)}function Ch(){yo&&(yo.detachEvent("onpropertychange",Rh),So=yo=null)}function Rh(n){if(n.propertyName==="value"&&La(So)){var i=[];wh(i,So,n,H(n)),Yn(Fv,i)}}function kv(n,i,a){n==="focusin"?(Ch(),yo=i,So=a,yo.attachEvent("onpropertychange",Rh)):n==="focusout"&&Ch()}function Bv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return La(So)}function zv(n,i){if(n==="click")return La(i)}function Vv(n,i){if(n==="input"||n==="change")return La(i)}function Hv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:Hv;function Mo(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!li(n[d],i[d]))return!1}return!0}function Ph(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Lh(n,i){var a=Ph(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ph(a)}}function Nh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Nh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Dh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Oc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Gv(n){var i=Dh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Nh(a.ownerDocument.documentElement,a)){if(c!==null&&Oc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=Lh(a,g);var T=Lh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Wv=f&&"documentMode"in document&&11>=document.documentMode,gs=null,kc=null,Eo=null,Bc=!1;function Ih(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||gs==null||gs!==ht(c)||(c=gs,"selectionStart"in c&&Oc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Eo&&Mo(Eo,c)||(Eo=c,c=Ua(kc,"onSelect"),0<c.length&&(i=new Rc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=gs)))}function Na(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var vs={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},zc={},Uh={};f&&(Uh=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Da(n){if(zc[n])return zc[n];if(!vs[n])return n;var i=vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Uh)return zc[n]=i[a];return n}var Fh=Da("animationend"),Oh=Da("animationiteration"),kh=Da("animationstart"),Bh=Da("transitionend"),zh=new Map,Vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){zh.set(n,i),l(i,[n])}for(var Vc=0;Vc<Vh.length;Vc++){var Hc=Vh[Vc],Xv=Hc.toLowerCase(),jv=Hc[0].toUpperCase()+Hc.slice(1);fr(Xv,"on"+jv)}fr(Fh,"onAnimationEnd"),fr(Oh,"onAnimationIteration"),fr(kh,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Bh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(To));function Hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ds(c,i,void 0,n),n.currentTarget=null}function Gh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var T=c.length-1;0<=T;T--){var U=c[T],z=U.instance,le=U.currentTarget;if(U=U.listener,z!==g&&d.isPropagationStopped())break e;Hh(d,U,le),g=z}else for(T=0;T<c.length;T++){if(U=c[T],z=U.instance,le=U.currentTarget,U=U.listener,z!==g&&d.isPropagationStopped())break e;Hh(d,U,le),g=z}}}if(qn)throw n=Fr,qn=!1,Fr=null,n}function Bt(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(Wh(i,n,2,!1),a.add(c))}function Gc(n,i,a){var c=0;i&&(c|=4),Wh(a,n,c,i)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function wo(n){if(!n[Ia]){n[Ia]=!0,r.forEach(function(a){a!=="selectionchange"&&(Yv.has(a)||Gc(a,!1,n),Gc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ia]||(i[Ia]=!0,Gc("selectionchange",!1,i))}}function Wh(n,i,a,c){switch(hh(i)){case 1:var d=av;break;case 4:d=lv;break;default:d=Ac}a=d.bind(null,i,a,n),d=void 0,!fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Wc(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;T=T.return}for(;U!==null;){if(T=kr(U),T===null)return;if(z=T.tag,z===5||z===6){c=g=T;continue e}U=U.parentNode}}c=c.return}Yn(function(){var le=g,ye=H(a),Ee=[];e:{var xe=zh.get(n);if(xe!==void 0){var Ve=Rc,$e=n;switch(n){case"keypress":if(Ca(a)===0)break e;case"keydown":case"keyup":Ve=Ev;break;case"focusin":$e="focus",Ve=Nc;break;case"focusout":$e="blur",Ve=Nc;break;case"beforeblur":case"afterblur":Ve=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=Av;break;case Fh:case Oh:case kh:Ve=pv;break;case Bh:Ve=Cv;break;case"scroll":Ve=cv;break;case"wheel":Ve=Pv;break;case"copy":case"cut":case"paste":Ve=gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=_h}var Qe=(i&4)!==0,Zt=!Qe&&n==="scroll",K=Qe?xe!==null?xe+"Capture":null:xe;Qe=[];for(var W=le,te;W!==null;){te=W;var Ce=te.stateNode;if(te.tag===5&&Ce!==null&&(te=Ce,K!==null&&(Ce=Sn(W,K),Ce!=null&&Qe.push(Ao(W,Ce,te)))),Zt)break;W=W.return}0<Qe.length&&(xe=new Ve(xe,$e,null,a,ye),Ee.push({event:xe,listeners:Qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Ve=n==="mouseout"||n==="pointerout",xe&&a!==vt&&($e=a.relatedTarget||a.fromElement)&&(kr($e)||$e[ki]))break e;if((Ve||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?($e=a.relatedTarget||a.toElement,Ve=le,$e=$e?kr($e):null,$e!==null&&(Zt=xi($e),$e!==Zt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ve=null,$e=le),Ve!==$e)){if(Qe=gh,Ce="onMouseLeave",K="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=_h,Ce="onPointerLeave",K="onPointerEnter",W="pointer"),Zt=Ve==null?xe:ys(Ve),te=$e==null?xe:ys($e),xe=new Qe(Ce,W+"leave",Ve,a,ye),xe.target=Zt,xe.relatedTarget=te,Ce=null,kr(ye)===le&&(Qe=new Qe(K,W+"enter",$e,a,ye),Qe.target=te,Qe.relatedTarget=Zt,Ce=Qe),Zt=Ce,Ve&&$e)t:{for(Qe=Ve,K=$e,W=0,te=Qe;te;te=_s(te))W++;for(te=0,Ce=K;Ce;Ce=_s(Ce))te++;for(;0<W-te;)Qe=_s(Qe),W--;for(;0<te-W;)K=_s(K),te--;for(;W--;){if(Qe===K||K!==null&&Qe===K.alternate)break t;Qe=_s(Qe),K=_s(K)}Qe=null}else Qe=null;Ve!==null&&Xh(Ee,xe,Ve,Qe,!1),$e!==null&&Zt!==null&&Xh(Ee,Zt,$e,Qe,!0)}}e:{if(xe=le?ys(le):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var nt=Ov;else if(Th(xe))if(Ah)nt=Vv;else{nt=Bv;var ut=kv}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(nt=zv);if(nt&&(nt=nt(n,le))){wh(Ee,nt,a,ye);break e}ut&&ut(n,xe,le),n==="focusout"&&(ut=xe._wrapperState)&&ut.controlled&&xe.type==="number"&&ot(xe,"number",xe.value)}switch(ut=le?ys(le):window,n){case"focusin":(Th(ut)||ut.contentEditable==="true")&&(gs=ut,kc=le,Eo=null);break;case"focusout":Eo=kc=gs=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,Ih(Ee,a,ye);break;case"selectionchange":if(Wv)break;case"keydown":case"keyup":Ih(Ee,a,ye)}var ft;if(Ic)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ms?Mh(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(xh&&a.locale!=="ko"&&(ms||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ms&&(ft=ph()):(ur=ye,Cc="value"in ur?ur.value:ur.textContent,ms=!0)),ut=Ua(le,gt),0<ut.length&&(gt=new vh(gt,n,null,a,ye),Ee.push({event:gt,listeners:ut}),ft?gt.data=ft:(ft=Eh(a),ft!==null&&(gt.data=ft)))),(ft=Nv?Dv(n,a):Iv(n,a))&&(le=Ua(le,"onBeforeInput"),0<le.length&&(ye=new vh("onBeforeInput","beforeinput",null,a,ye),Ee.push({event:ye,listeners:le}),ye.data=ft))}Gh(Ee,i)})}function Ao(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ua(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Sn(n,a),g!=null&&c.unshift(Ao(n,g,d)),g=Sn(n,i),g!=null&&c.push(Ao(n,g,d))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xh(n,i,a,c,d){for(var g=i._reactName,T=[];a!==null&&a!==c;){var U=a,z=U.alternate,le=U.stateNode;if(z!==null&&z===c)break;U.tag===5&&le!==null&&(U=le,d?(z=Sn(a,g),z!=null&&T.unshift(Ao(a,z,U))):d||(z=Sn(a,g),z!=null&&T.push(Ao(a,z,U)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var qv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function jh(n){return(typeof n=="string"?n:""+n).replace(qv,`
`).replace(Zv,"")}function Fa(n,i,a){if(i=jh(i),jh(n)!==i&&a)throw Error(t(425))}function Oa(){}var Xc=null,jc=null;function Yc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,Kv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(n){return Yh.resolve(null).then(n).catch(Jv)}:qc;function Jv(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),go(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);go(i)}function dr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function qh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),yi="__reactFiber$"+xs,bo="__reactProps$"+xs,ki="__reactContainer$"+xs,$c="__reactEvents$"+xs,Qv="__reactListeners$"+xs,e_="__reactHandles$"+xs;function kr(n){var i=n[yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ki]||a[yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=qh(n);n!==null;){if(a=n[yi])return a;n=qh(n)}return i}n=a,a=n.parentNode}return null}function Co(n){return n=n[yi]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ka(n){return n[bo]||null}var Kc=[],Ss=-1;function hr(n){return{current:n}}function zt(n){0>Ss||(n.current=Kc[Ss],Kc[Ss]=null,Ss--)}function kt(n,i){Ss++,Kc[Ss]=n.current,n.current=i}var pr={},pn=hr(pr),Pn=hr(!1),Br=pr;function Ms(n,i){var a=n.type.contextTypes;if(!a)return pr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ln(n){return n=n.childContextTypes,n!=null}function Ba(){zt(Pn),zt(pn)}function Zh(n,i,a){if(pn.current!==pr)throw Error(t(168));kt(pn,i),kt(Pn,a)}function $h(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ge(n)||"Unknown",d));return se({},a,c)}function za(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||pr,Br=pn.current,kt(pn,n),kt(Pn,Pn.current),!0}function Kh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=$h(n,i,Br),c.__reactInternalMemoizedMergedChildContext=n,zt(Pn),zt(pn),kt(pn,n)):zt(Pn),kt(Pn,a)}var Bi=null,Va=!1,Jc=!1;function Jh(n){Bi===null?Bi=[n]:Bi.push(n)}function t_(n){Va=!0,Jh(n)}function mr(){if(!Jc&&Bi!==null){Jc=!0;var n=0,i=mt;try{var a=Bi;for(mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Bi=null,Va=!1}catch(d){throw Bi!==null&&(Bi=Bi.slice(n+1)),Sa(ue,mr),d}finally{mt=i,Jc=!1}}return null}var Es=[],Ts=0,Ha=null,Ga=0,$n=[],Kn=0,zr=null,zi=1,Vi="";function Vr(n,i){Es[Ts++]=Ga,Es[Ts++]=Ha,Ha=n,Ga=i}function Qh(n,i,a){$n[Kn++]=zi,$n[Kn++]=Vi,$n[Kn++]=zr,zr=n;var c=zi;n=Vi;var d=32-at(c)-1;c&=~(1<<d),a+=1;var g=32-at(i)+d;if(30<g){var T=d-d%5;g=(c&(1<<T)-1).toString(32),c>>=T,d-=T,zi=1<<32-at(i)+d|a<<d|c,Vi=g+n}else zi=1<<g|a<<d|c,Vi=n}function Qc(n){n.return!==null&&(Vr(n,1),Qh(n,1,0))}function eu(n){for(;n===Ha;)Ha=Es[--Ts],Es[Ts]=null,Ga=Es[--Ts],Es[Ts]=null;for(;n===zr;)zr=$n[--Kn],$n[Kn]=null,Vi=$n[--Kn],$n[Kn]=null,zi=$n[--Kn],$n[Kn]=null}var zn=null,Vn=null,Vt=!1,ci=null;function ep(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=dr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:zi,overflow:Vi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Vn=null,!0):!1;default:return!1}}function tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nu(n){if(Vt){var i=Vn;if(i){var a=i;if(!tp(n,i)){if(tu(n))throw Error(t(418));i=dr(a.nextSibling);var c=zn;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Wa(n){if(n!==zn)return!1;if(!Vt)return np(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Yc(n.type,n.memoizedProps)),i&&(i=Vn)){if(tu(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=dr(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=dr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?dr(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=Vn;n;)n=dr(n.nextSibling)}function ws(){Vn=zn=null,Vt=!1}function iu(n){ci===null?ci=[n]:ci.push(n)}var n_=R.ReactCurrentBatchConfig;function Ro(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(T){var U=d.refs;T===null?delete U[g]:U[g]=T},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Xa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(K,W){if(n){var te=K.deletions;te===null?(K.deletions=[W],K.flags|=16):te.push(W)}}function a(K,W){if(!n)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function c(K,W){for(K=new Map;W!==null;)W.key!==null?K.set(W.key,W):K.set(W.index,W),W=W.sibling;return K}function d(K,W){return K=Er(K,W),K.index=0,K.sibling=null,K}function g(K,W,te){return K.index=te,n?(te=K.alternate,te!==null?(te=te.index,te<W?(K.flags|=2,W):te):(K.flags|=2,W)):(K.flags|=1048576,W)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function U(K,W,te,Ce){return W===null||W.tag!==6?(W=qu(te,K.mode,Ce),W.return=K,W):(W=d(W,te),W.return=K,W)}function z(K,W,te,Ce){var nt=te.type;return nt===O?ye(K,W,te.props.children,Ce,te.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===$&&rp(nt)===W.type)?(Ce=d(W,te.props),Ce.ref=Ro(K,W,te),Ce.return=K,Ce):(Ce=ml(te.type,te.key,te.props,null,K.mode,Ce),Ce.ref=Ro(K,W,te),Ce.return=K,Ce)}function le(K,W,te,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Zu(te,K.mode,Ce),W.return=K,W):(W=d(W,te.children||[]),W.return=K,W)}function ye(K,W,te,Ce,nt){return W===null||W.tag!==7?(W=Zr(te,K.mode,Ce,nt),W.return=K,W):(W=d(W,te),W.return=K,W)}function Ee(K,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=qu(""+W,K.mode,te),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return te=ml(W.type,W.key,W.props,null,K.mode,te),te.ref=Ro(K,null,W),te.return=K,te;case I:return W=Zu(W,K.mode,te),W.return=K,W;case $:var Ce=W._init;return Ee(K,Ce(W._payload),te)}if(Ue(W)||ee(W))return W=Zr(W,K.mode,te,null),W.return=K,W;Xa(K,W)}return null}function xe(K,W,te,Ce){var nt=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return nt!==null?null:U(K,W,""+te,Ce);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case B:return te.key===nt?z(K,W,te,Ce):null;case I:return te.key===nt?le(K,W,te,Ce):null;case $:return nt=te._init,xe(K,W,nt(te._payload),Ce)}if(Ue(te)||ee(te))return nt!==null?null:ye(K,W,te,Ce,null);Xa(K,te)}return null}function Ve(K,W,te,Ce,nt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return K=K.get(te)||null,U(W,K,""+Ce,nt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case B:return K=K.get(Ce.key===null?te:Ce.key)||null,z(W,K,Ce,nt);case I:return K=K.get(Ce.key===null?te:Ce.key)||null,le(W,K,Ce,nt);case $:var ut=Ce._init;return Ve(K,W,te,ut(Ce._payload),nt)}if(Ue(Ce)||ee(Ce))return K=K.get(te)||null,ye(W,K,Ce,nt,null);Xa(W,Ce)}return null}function $e(K,W,te,Ce){for(var nt=null,ut=null,ft=W,gt=W=0,an=null;ft!==null&&gt<te.length;gt++){ft.index>gt?(an=ft,ft=null):an=ft.sibling;var Pt=xe(K,ft,te[gt],Ce);if(Pt===null){ft===null&&(ft=an);break}n&&ft&&Pt.alternate===null&&i(K,ft),W=g(Pt,W,gt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt,ft=an}if(gt===te.length)return a(K,ft),Vt&&Vr(K,gt),nt;if(ft===null){for(;gt<te.length;gt++)ft=Ee(K,te[gt],Ce),ft!==null&&(W=g(ft,W,gt),ut===null?nt=ft:ut.sibling=ft,ut=ft);return Vt&&Vr(K,gt),nt}for(ft=c(K,ft);gt<te.length;gt++)an=Ve(ft,K,gt,te[gt],Ce),an!==null&&(n&&an.alternate!==null&&ft.delete(an.key===null?gt:an.key),W=g(an,W,gt),ut===null?nt=an:ut.sibling=an,ut=an);return n&&ft.forEach(function(Tr){return i(K,Tr)}),Vt&&Vr(K,gt),nt}function Qe(K,W,te,Ce){var nt=ee(te);if(typeof nt!="function")throw Error(t(150));if(te=nt.call(te),te==null)throw Error(t(151));for(var ut=nt=null,ft=W,gt=W=0,an=null,Pt=te.next();ft!==null&&!Pt.done;gt++,Pt=te.next()){ft.index>gt?(an=ft,ft=null):an=ft.sibling;var Tr=xe(K,ft,Pt.value,Ce);if(Tr===null){ft===null&&(ft=an);break}n&&ft&&Tr.alternate===null&&i(K,ft),W=g(Tr,W,gt),ut===null?nt=Tr:ut.sibling=Tr,ut=Tr,ft=an}if(Pt.done)return a(K,ft),Vt&&Vr(K,gt),nt;if(ft===null){for(;!Pt.done;gt++,Pt=te.next())Pt=Ee(K,Pt.value,Ce),Pt!==null&&(W=g(Pt,W,gt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt);return Vt&&Vr(K,gt),nt}for(ft=c(K,ft);!Pt.done;gt++,Pt=te.next())Pt=Ve(ft,K,gt,Pt.value,Ce),Pt!==null&&(n&&Pt.alternate!==null&&ft.delete(Pt.key===null?gt:Pt.key),W=g(Pt,W,gt),ut===null?nt=Pt:ut.sibling=Pt,ut=Pt);return n&&ft.forEach(function(U_){return i(K,U_)}),Vt&&Vr(K,gt),nt}function Zt(K,W,te,Ce){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case B:e:{for(var nt=te.key,ut=W;ut!==null;){if(ut.key===nt){if(nt=te.type,nt===O){if(ut.tag===7){a(K,ut.sibling),W=d(ut,te.props.children),W.return=K,K=W;break e}}else if(ut.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===$&&rp(nt)===ut.type){a(K,ut.sibling),W=d(ut,te.props),W.ref=Ro(K,ut,te),W.return=K,K=W;break e}a(K,ut);break}else i(K,ut);ut=ut.sibling}te.type===O?(W=Zr(te.props.children,K.mode,Ce,te.key),W.return=K,K=W):(Ce=ml(te.type,te.key,te.props,null,K.mode,Ce),Ce.ref=Ro(K,W,te),Ce.return=K,K=Ce)}return T(K);case I:e:{for(ut=te.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(K,W.sibling),W=d(W,te.children||[]),W.return=K,K=W;break e}else{a(K,W);break}else i(K,W);W=W.sibling}W=Zu(te,K.mode,Ce),W.return=K,K=W}return T(K);case $:return ut=te._init,Zt(K,W,ut(te._payload),Ce)}if(Ue(te))return $e(K,W,te,Ce);if(ee(te))return Qe(K,W,te,Ce);Xa(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(K,W.sibling),W=d(W,te),W.return=K,K=W):(a(K,W),W=qu(te,K.mode,Ce),W.return=K,K=W),T(K)):a(K,W)}return Zt}var As=sp(!0),op=sp(!1),ja=hr(null),Ya=null,bs=null,ru=null;function su(){ru=bs=Ya=null}function ou(n){var i=ja.current;zt(ja),n._currentValue=i}function au(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){Ya=n,ru=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(ru!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Ya===null)throw Error(t(308));bs=n,Ya.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var Hr=null;function lu(n){Hr===null?Hr=[n]:Hr.push(n)}function ap(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,lu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Hi(n,c)}function Hi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var gr=!1;function cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Gi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function vr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Hi(n,a)}return d=c.interleaved,d===null?(i.next=i,lu(c)):(i.next=d.next,d.next=i),c.interleaved=i,Hi(n,a)}function qa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}function cp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=T:g=g.next=T,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Za(n,i,a,c){var d=n.updateQueue;gr=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var z=U,le=z.next;z.next=null,T===null?g=le:T.next=le,T=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,U=ye.lastBaseUpdate,U!==T&&(U===null?ye.firstBaseUpdate=le:U.next=le,ye.lastBaseUpdate=z))}if(g!==null){var Ee=d.baseState;T=0,ye=le=z=null,U=g;do{var xe=U.lane,Ve=U.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:Ve,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var $e=n,Qe=U;switch(xe=i,Ve=a,Qe.tag){case 1:if($e=Qe.payload,typeof $e=="function"){Ee=$e.call(Ve,Ee,xe);break e}Ee=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Qe.payload,xe=typeof $e=="function"?$e.call(Ve,Ee,xe):$e,xe==null)break e;Ee=se({},Ee,xe);break e;case 2:gr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=d.effects,xe===null?d.effects=[U]:xe.push(U))}else Ve={eventTime:Ve,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ye===null?(le=ye=Ve,z=Ee):ye=ye.next=Ve,T|=xe;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,d.lastBaseUpdate=xe,d.shared.pending=null}}while(!0);if(ye===null&&(z=Ee),d.baseState=z,d.firstBaseUpdate=le,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Xr|=T,n.lanes=T,n.memoizedState=Ee}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Po={},Si=hr(Po),Lo=hr(Po),No=hr(Po);function Gr(n){if(n===Po)throw Error(t(174));return n}function uu(n,i){switch(kt(No,i),kt(Lo,n),kt(Si,Po),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}zt(Si),kt(Si,i)}function Rs(){zt(Si),zt(Lo),zt(No)}function fp(n){Gr(No.current);var i=Gr(Si.current),a=me(i,n.type);i!==a&&(kt(Lo,n),kt(Si,a))}function fu(n){Lo.current===n&&(zt(Si),zt(Lo))}var Ht=hr(0);function $a(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var du=[];function hu(){for(var n=0;n<du.length;n++)du[n]._workInProgressVersionPrimary=null;du.length=0}var Ka=R.ReactCurrentDispatcher,pu=R.ReactCurrentBatchConfig,Wr=0,Gt=null,en=null,sn=null,Ja=!1,Do=!1,Io=0,i_=0;function mn(){throw Error(t(321))}function mu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!li(n[a],i[a]))return!1;return!0}function gu(n,i,a,c,d,g){if(Wr=g,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ka.current=n===null||n.memoizedState===null?a_:l_,n=a(c,d),Do){g=0;do{if(Do=!1,Io=0,25<=g)throw Error(t(301));g+=1,sn=en=null,i.updateQueue=null,Ka.current=c_,n=a(c,d)}while(Do)}if(Ka.current=tl,i=en!==null&&en.next!==null,Wr=0,sn=en=Gt=null,Ja=!1,i)throw Error(t(300));return n}function vu(){var n=Io!==0;return Io=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(en===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Uo(n,i){return typeof i=="function"?i(n):i}function _u(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=en,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var U=T=null,z=null,le=g;do{var ye=le.lane;if((Wr&ye)===ye)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var Ee={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(U=z=Ee,T=c):z=z.next=Ee,Gt.lanes|=ye,Xr|=ye}le=le.next}while(le!==null&&le!==g);z===null?T=c:z.next=U,li(c,i.memoizedState)||(Nn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Gt.lanes|=g,Xr|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do g=n(g,T.action),T=T.next;while(T!==d);li(g,i.memoizedState)||(Nn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function dp(){}function hp(n,i){var a=Gt,c=Qn(),d=i(),g=!li(c.memoizedState,d);if(g&&(c.memoizedState=d,Nn=!0),c=c.queue,yu(gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Fo(9,mp.bind(null,a,c,d,i),void 0,null),on===null)throw Error(t(349));(Wr&30)!==0||pp(a,i,d)}return d}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,vp(i)&&_p(n)}function gp(n,i,a){return a(function(){vp(i)&&_p(n)})}function vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!li(n,a)}catch{return!0}}function _p(n){var i=Hi(n,1);i!==null&&hi(i,n,1,-1)}function xp(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:n},i.queue=n,n=n.dispatch=o_.bind(null,Gt,n),[i.memoizedState,n]}function Fo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function yp(){return Qn().memoizedState}function Qa(n,i,a,c){var d=Mi();Gt.flags|=n,d.memoizedState=Fo(1|i,a,void 0,c===void 0?null:c)}function el(n,i,a,c){var d=Qn();c=c===void 0?null:c;var g=void 0;if(en!==null){var T=en.memoizedState;if(g=T.destroy,c!==null&&mu(c,T.deps)){d.memoizedState=Fo(i,a,g,c);return}}Gt.flags|=n,d.memoizedState=Fo(1|i,a,g,c)}function Sp(n,i){return Qa(8390656,8,n,i)}function yu(n,i){return el(2048,8,n,i)}function Mp(n,i){return el(4,2,n,i)}function Ep(n,i){return el(4,4,n,i)}function Tp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wp(n,i,a){return a=a!=null?a.concat([n]):null,el(4,4,Tp.bind(null,i,n),a)}function Su(){}function Ap(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function bp(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&mu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Cp(n,i,a){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=a):(li(a,i)||(a=Cn(),Gt.lanes|=a,Xr|=a,n.baseState=!0),i)}function r_(n,i){var a=mt;mt=a!==0&&4>a?a:4,n(!0);var c=pu.transition;pu.transition={};try{n(!1),i()}finally{mt=a,pu.transition=c}}function Rp(){return Qn().memoizedState}function s_(n,i,a){var c=Sr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Lp(i,a);else if(a=ap(n,i,a,c),a!==null){var d=Tn();hi(a,n,c,d),Np(a,i,c)}}function o_(n,i,a){var c=Sr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Lp(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var T=i.lastRenderedState,U=g(T,a);if(d.hasEagerState=!0,d.eagerState=U,li(U,T)){var z=i.interleaved;z===null?(d.next=d,lu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}a=ap(n,i,d,c),a!==null&&(d=Tn(),hi(a,n,c,d),Np(a,i,c))}}function Pp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Lp(n,i){Do=Ja=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Np(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Nt(n,a)}}var tl={readContext:Jn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},a_={readContext:Jn,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:Sp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qa(4194308,4,Tp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qa(4,2,n,i)},useMemo:function(n,i){var a=Mi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Mi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=s_.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:xp,useDebugValue:Su,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=xp(!1),i=n[0];return n=r_.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,d=Mi();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Wr&30)!==0||pp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,Sp(gp.bind(null,c,g,n),[n]),c.flags|=2048,Fo(9,mp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Mi(),i=on.identifierPrefix;if(Vt){var a=Vi,c=zi;a=(c&~(1<<32-at(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Io++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=i_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},l_={readContext:Jn,useCallback:Ap,useContext:Jn,useEffect:yu,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:bp,useReducer:_u,useRef:yp,useState:function(){return _u(Uo)},useDebugValue:Su,useDeferredValue:function(n){var i=Qn();return Cp(i,en.memoizedState,n)},useTransition:function(){var n=_u(Uo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1},c_={readContext:Jn,useCallback:Ap,useContext:Jn,useEffect:yu,useImperativeHandle:wp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:bp,useReducer:xu,useRef:yp,useState:function(){return xu(Uo)},useDebugValue:Su,useDeferredValue:function(n){var i=Qn();return en===null?i.memoizedState=n:Cp(i,en.memoizedState,n)},useTransition:function(){var n=xu(Uo)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:hp,useId:Rp,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Mu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Tn(),d=Sr(n),g=Gi(c,d);g.payload=i,a!=null&&(g.callback=a),i=vr(n,g,d),i!==null&&(hi(i,n,d,c),qa(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Tn(),d=Sr(n),g=Gi(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=vr(n,g,d),i!==null&&(hi(i,n,d,c),qa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Tn(),c=Sr(n),d=Gi(a,c);d.tag=2,i!=null&&(d.callback=i),i=vr(n,d,c),i!==null&&(hi(i,n,c,a),qa(i,n,c))}};function Dp(n,i,a,c,d,g,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,T):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,c)||!Mo(d,g):!0}function Ip(n,i,a){var c=!1,d=pr,g=i.contextType;return typeof g=="object"&&g!==null?g=Jn(g):(d=Ln(i)?Br:pn.current,c=i.contextTypes,g=(c=c!=null)?Ms(n,d):pr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function Up(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&nl.enqueueReplaceState(i,i.state,null)}function Eu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},cu(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=Jn(g):(g=Ln(i)?Br:pn.current,d.context=Ms(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Mu(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&nl.enqueueReplaceState(d,d.state,null),Za(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",c=i;do a+=et(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Tu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function wu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var u_=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cl||(cl=!0,zu=c),wu(n,i)},a}function Op(n,i,a){a=Gi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){wu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){wu(n,i),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function kp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new u_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=T_.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,vr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var f_=R.ReactCurrentOwner,Nn=!1;function En(n,i,a,c){i.child=n===null?op(i,null,a,c):As(i,n.child,a,c)}function Vp(n,i,a,c,d){a=a.render;var g=i.ref;return Cs(i,d),c=gu(n,i,a,c,g,d),a=vu(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Wi(n,i,d)):(Vt&&a&&Qc(i),i.flags|=1,En(n,i,c,d),i.child)}function Hp(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Yu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Gp(n,i,g,c,d)):(n=ml(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var T=g.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(T,c)&&n.ref===i.ref)return Wi(n,i,d)}return i.flags|=1,n=Er(g,c),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Mo(g,c)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Wi(n,i,d)}return Au(n,i,a,c,d)}function Wp(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ns,Hn),Hn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ns,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,kt(Ns,Hn),Hn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,kt(Ns,Hn),Hn|=c;return En(n,i,d,a),i.child}function Xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Au(n,i,a,c,d){var g=Ln(a)?Br:pn.current;return g=Ms(i,g),Cs(i,d),a=gu(n,i,a,c,g,d),c=vu(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Wi(n,i,d)):(Vt&&c&&Qc(i),i.flags|=1,En(n,i,a,d),i.child)}function jp(n,i,a,c,d){if(Ln(a)){var g=!0;za(i)}else g=!1;if(Cs(i,d),i.stateNode===null)rl(n,i),Ip(i,a,c),Eu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var z=T.context,le=a.contextType;typeof le=="object"&&le!==null?le=Jn(le):(le=Ln(a)?Br:pn.current,le=Ms(i,le));var ye=a.getDerivedStateFromProps,Ee=typeof ye=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==c||z!==le)&&Up(i,T,c,le),gr=!1;var xe=i.memoizedState;T.state=xe,Za(i,c,T,d),z=i.memoizedState,U!==c||xe!==z||Pn.current||gr?(typeof ye=="function"&&(Mu(i,a,ye,c),z=i.memoizedState),(U=gr||Dp(i,a,U,c,xe,z,le))?(Ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),T.props=c,T.state=z,T.context=le,c=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,lp(n,i),U=i.memoizedProps,le=i.type===i.elementType?U:ui(i.type,U),T.props=le,Ee=i.pendingProps,xe=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=Jn(z):(z=Ln(a)?Br:pn.current,z=Ms(i,z));var Ve=a.getDerivedStateFromProps;(ye=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Ee||xe!==z)&&Up(i,T,c,z),gr=!1,xe=i.memoizedState,T.state=xe,Za(i,c,T,d);var $e=i.memoizedState;U!==Ee||xe!==$e||Pn.current||gr?(typeof Ve=="function"&&(Mu(i,a,Ve,c),$e=i.memoizedState),(le=gr||Dp(i,a,le,c,xe,$e,z)||!1)?(ye||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,$e,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,$e,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),T.props=c,T.state=$e,T.context=z,c=le):(typeof T.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,g,d)}function bu(n,i,a,c,d,g){Xp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Kh(i,a,!1),Wi(n,i,g);c=i.stateNode,f_.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=As(i,n.child,null,g),i.child=As(i,null,U,g)):En(n,i,U,g),i.memoizedState=c.state,d&&Kh(i,a,!0),i.child}function Yp(n){var i=n.stateNode;i.pendingContext?Zh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zh(n,i.context,!1),uu(n,i.containerInfo)}function qp(n,i,a,c,d){return ws(),iu(d),i.flags|=256,En(n,i,a,c),i.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Ru(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,i,a){var c=i.pendingProps,d=Ht.current,g=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Ht,d&1),n===null)return nu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,g?(c=i.mode,g=i.child,T={mode:"hidden",children:T},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=T):g=gl(T,c,0,null),n=Zr(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Ru(a),i.memoizedState=Cu,n):Pu(i,T));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return d_(n,i,T,c,U,d,a);if(g){g=c.fallback,T=i.mode,d=n.child,U=d.sibling;var z={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Er(d,z),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?g=Er(U,g):(g=Zr(g,T,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,T=n.child.memoizedState,T=T===null?Ru(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},g.memoizedState=T,g.childLanes=n.childLanes&~a,i.memoizedState=Cu,c}return g=n.child,n=g.sibling,c=Er(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Pu(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function il(n,i,a,c){return c!==null&&iu(c),As(i,n.child,null,a),n=Pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function d_(n,i,a,c,d,g,T){if(a)return i.flags&256?(i.flags&=-257,c=Tu(Error(t(422))),il(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=gl({mode:"visible",children:c.children},d,0,null),g=Zr(g,d,T,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,T),i.child.memoizedState=Ru(T),i.memoizedState=Cu,g);if((i.mode&1)===0)return il(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,g=Error(t(419)),c=Tu(g,c,void 0),il(n,i,T,c)}if(U=(T&n.childLanes)!==0,Nn||U){if(c=on,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Hi(n,d),hi(c,n,d,-1))}return ju(),c=Tu(Error(t(421))),il(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=w_.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,Vn=dr(d.nextSibling),zn=i,Vt=!0,ci=null,n!==null&&($n[Kn++]=zi,$n[Kn++]=Vi,$n[Kn++]=zr,zi=n.id,Vi=n.overflow,zr=i),i=Pu(i,c.children),i.flags|=4096,i)}function $p(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),au(n.return,i,a)}function Lu(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Kp(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(En(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&$p(n,a,i);else if(n.tag===19)$p(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&$a(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Lu(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$a(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Lu(i,!0,a,null,g);break;case"together":Lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Wi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Er(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Er(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function h_(n,i,a){switch(i.tag){case 3:Yp(i),ws();break;case 5:fp(i);break;case 1:Ln(i.type)&&za(i);break;case 4:uu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(ja,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Zp(n,i,a):(kt(Ht,Ht.current&1),n=Wi(n,i,a),n!==null?n.sibling:null);kt(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Wp(n,i,a)}return Wi(n,i,a)}var Jp,Nu,Qp,em;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nu=function(){},Qp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Gr(Si.current);var g=null;switch(a){case"input":d=ve(n,d),c=ve(n,c),g=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":d=Pe(n,d),c=Pe(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oa)}qe(a,c);var T;a=null;for(le in d)if(!c.hasOwnProperty(le)&&d.hasOwnProperty(le)&&d[le]!=null)if(le==="style"){var U=d[le];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in c){var z=c[le];if(U=d?.[le],c.hasOwnProperty(le)&&z!==U&&(z!=null||U!=null))if(le==="style")if(U){for(T in U)!U.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&U[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(g||(g=[]),g.push(le,a)),a=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(g=g||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(g=g||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&Bt("scroll",n),g||U===z||(g=[])):(g=g||[]).push(le,z))}a&&(g=g||[]).push("style",a);var le=g;(i.updateQueue=le)&&(i.flags|=4)}},em=function(n,i,a,c){a!==c&&(i.flags|=4)};function Oo(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function p_(n,i,a){var c=i.pendingProps;switch(eu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Ln(i.type)&&Ba(),gn(i),null;case 3:return c=i.stateNode,Rs(),zt(Pn),zt(pn),hu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Wa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(Gu(ci),ci=null))),Nu(n,i),gn(i),null;case 5:fu(i);var d=Gr(No.current);if(a=i.type,n!==null&&i.stateNode!=null)Qp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=Gr(Si.current),Wa(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[yi]=i,c[bo]=g,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<To.length;d++)Bt(To[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Me(c,g),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",c);break;case"textarea":N(c,g),Bt("invalid",c)}qe(a,g),d=null;for(var T in g)if(g.hasOwnProperty(T)){var U=g[T];T==="children"?typeof U=="string"?c.textContent!==U&&(g.suppressHydrationWarning!==!0&&Fa(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(g.suppressHydrationWarning!==!0&&Fa(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":ct(c),D(c,g,!0);break;case"textarea":ct(c),G(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Oa)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[yi]=i,n[bo]=c,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ke(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<To.length;d++)Bt(To[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":Me(n,c),d=ve(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":N(n,c),d=Pe(n,c),Bt("invalid",n);break;default:d=c}qe(a,d),U=d;for(g in U)if(U.hasOwnProperty(g)){var z=U[g];g==="style"?Re(n,z):g==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&je(n,z)):g==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&be(n,z):typeof z=="number"&&be(n,""+z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?z!=null&&g==="onScroll"&&Bt("scroll",n):z!=null&&P(n,g,z,T))}switch(a){case"input":ct(n),D(n,c,!1);break;case"textarea":ct(n),G(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?rt(n,!!c.multiple,g,!1):c.defaultValue!=null&&rt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Oa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gr(No.current),Gr(Si.current),Wa(i)){if(c=i.stateNode,a=i.memoizedProps,c[yi]=i,(g=c.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Fa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fa(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return gn(i),null;case 13:if(zt(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),ws(),i.flags|=98560,g=!1;else if(g=Wa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[yi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),g=!1}else ci!==null&&(Gu(ci),ci=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?tn===0&&(tn=3):ju())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Rs(),Nu(n,i),n===null&&wo(i.stateNode.containerInfo),gn(i),null;case 10:return ou(i.type._context),gn(i),null;case 17:return Ln(i.type)&&Ba(),gn(i),null;case 19:if(zt(Ht),g=i.memoizedState,g===null)return gn(i),null;if(c=(i.flags&128)!==0,T=g.rendering,T===null)if(c)Oo(g,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=$a(n),T!==null){for(i.flags|=128,Oo(g,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,T=g.alternate,T===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=T.childLanes,g.lanes=T.lanes,g.child=T.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=T.memoizedProps,g.memoizedState=T.memoizedState,g.updateQueue=T.updateQueue,g.type=T.type,n=T.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Ht,Ht.current&1|2),i.child}n=n.sibling}g.tail!==null&&b()>Ds&&(i.flags|=128,c=!0,Oo(g,!1),i.lanes=4194304)}else{if(!c)if(n=$a(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Oo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!T.alternate&&!Vt)return gn(i),null}else 2*b()-g.renderingStartTime>Ds&&a!==1073741824&&(i.flags|=128,c=!0,Oo(g,!1),i.lanes=4194304);g.isBackwards?(T.sibling=i.child,i.child=T):(a=g.last,a!==null?a.sibling=T:i.child=T,g.last=T)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=b(),i.sibling=null,a=Ht.current,kt(Ht,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Xu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function m_(n,i){switch(eu(i),i.tag){case 1:return Ln(i.type)&&Ba(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),zt(Pn),zt(pn),hu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return fu(i),null;case 13:if(zt(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ws()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Ht),null;case 4:return Rs(),null;case 10:return ou(i.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var sl=!1,vn=!1,g_=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function Du(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var tm=!1;function v_(n,i){if(Xc=wa,n=Dh(),Oc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var T=0,U=-1,z=-1,le=0,ye=0,Ee=n,xe=null;t:for(;;){for(var Ve;Ee!==a||d!==0&&Ee.nodeType!==3||(U=T+d),Ee!==g||c!==0&&Ee.nodeType!==3||(z=T+c),Ee.nodeType===3&&(T+=Ee.nodeValue.length),(Ve=Ee.firstChild)!==null;)xe=Ee,Ee=Ve;for(;;){if(Ee===n)break t;if(xe===a&&++le===d&&(U=T),xe===g&&++ye===c&&(z=T),(Ve=Ee.nextSibling)!==null)break;Ee=xe,xe=Ee.parentNode}Ee=Ve}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(jc={focusedElem:n,selectionRange:a},wa=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Qe=$e.memoizedProps,Zt=$e.memoizedState,K=i.stateNode,W=K.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:ui(i.type,Qe),Zt);K.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Xt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return $e=tm,tm=!1,$e}function ko(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Du(i,a,g)}d=d.next}while(d!==c)}}function ol(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Iu(n){var i=n.ref;if(i!==null){var a=n.stateNode;n.tag,n=a,typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[bo],delete i[$c],delete i[Qv],delete i[e_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oa));else if(c!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}function Fu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Fu(n,i,a),n=n.sibling;n!==null;)Fu(n,i,a),n=n.sibling}var un=null,fi=!1;function _r(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 5:vn||Ls(a,i);case 6:var c=un,d=fi;un=null,_r(n,i,a),un=c,fi=d,un!==null&&(fi?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(fi?(n=un,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),go(n)):Zc(un,a.stateNode));break;case 4:c=un,d=fi,un=a.stateNode.containerInfo,fi=!0,_r(n,i,a),un=c,fi=d;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,T=g.destroy;g=g.tag,T!==void 0&&((g&2)!==0||(g&4)!==0)&&Du(a,i,T),d=d.next}while(d!==c)}_r(n,i,a);break;case 1:if(!vn&&(Ls(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Xt(a,i,U)}_r(n,i,a);break;case 21:_r(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,_r(n,i,a),vn=c):_r(n,i,a);break;default:_r(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new g_),i.forEach(function(c){var d=A_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:un=U.stateNode,fi=!1;break e;case 3:un=U.stateNode.containerInfo,fi=!0;break e;case 4:un=U.stateNode.containerInfo,fi=!0;break e}U=U.return}if(un===null)throw Error(t(160));sm(g,T,d),un=null,fi=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(le){Xt(d,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)am(i,n),i=i.sibling}function am(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),Ei(n),c&4){try{ko(3,n,n.return),ol(3,n)}catch(Qe){Xt(n,n.return,Qe)}try{ko(5,n,n.return)}catch(Qe){Xt(n,n.return,Qe)}}break;case 1:di(i,n),Ei(n),c&512&&a!==null&&Ls(a,a.return);break;case 5:if(di(i,n),Ei(n),c&512&&a!==null&&Ls(a,a.return),n.flags&32){var d=n.stateNode;try{be(d,"")}catch(Qe){Xt(n,n.return,Qe)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,T=a!==null?a.memoizedProps:g,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&g.type==="radio"&&g.name!=null&&_e(d,g),ke(U,T);var le=ke(U,g);for(T=0;T<z.length;T+=2){var ye=z[T],Ee=z[T+1];ye==="style"?Re(d,Ee):ye==="dangerouslySetInnerHTML"?je(d,Ee):ye==="children"?be(d,Ee):P(d,ye,Ee,le)}switch(U){case"input":Ne(d,g);break;case"textarea":E(d,g);break;case"select":var xe=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var Ve=g.value;Ve!=null?rt(d,!!g.multiple,Ve,!1):xe!==!!g.multiple&&(g.defaultValue!=null?rt(d,!!g.multiple,g.defaultValue,!0):rt(d,!!g.multiple,g.multiple?[]:"",!1))}d[bo]=g}catch(Qe){Xt(n,n.return,Qe)}}break;case 6:if(di(i,n),Ei(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(Qe){Xt(n,n.return,Qe)}}break;case 3:if(di(i,n),Ei(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Qe){Xt(n,n.return,Qe)}break;case 4:di(i,n),Ei(n);break;case 13:di(i,n),Ei(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Bu=b())),c&4&&om(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(le=vn)||ye,di(i,n),vn=le):di(i,n),Ei(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ye&&(n.mode&1)!==0)for(Ye=n,ye=n.child;ye!==null;){for(Ee=Ye=ye;Ye!==null;){switch(xe=Ye,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:ko(4,xe,xe.return);break;case 1:Ls(xe,xe.return);var $e=xe.stateNode;if(typeof $e.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Qe){Xt(c,a,Qe)}}break;case 5:Ls(xe,xe.return);break;case 22:if(xe.memoizedState!==null){um(Ee);continue}}Ve!==null?(Ve.return=xe,Ye=Ve):um(Ee)}ye=ye.sibling}e:for(ye=null,Ee=n;;){if(Ee.tag===5){if(ye===null){ye=Ee;try{d=Ee.stateNode,le?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(U=Ee.stateNode,z=Ee.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=Se("display",T))}catch(Qe){Xt(n,n.return,Qe)}}}else if(Ee.tag===6){if(ye===null)try{Ee.stateNode.nodeValue=le?"":Ee.memoizedProps}catch(Qe){Xt(n,n.return,Qe)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;ye===Ee&&(ye=null),Ee=Ee.return}ye===Ee&&(ye=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:di(i,n),Ei(n),c&4&&om(n);break;case 21:break;default:di(i,n),Ei(n)}}function Ei(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(be(d,""),c.flags&=-33);var g=rm(n);Fu(n,g,d);break;case 3:case 4:var T=c.stateNode.containerInfo,U=rm(n);Uu(n,U,T);break;default:throw Error(t(161))}}catch(z){Xt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function __(n,i,a){Ye=n,lm(n)}function lm(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var d=Ye,g=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||sl;if(!T){var U=d.alternate,z=U!==null&&U.memoizedState!==null||vn;U=sl;var le=vn;if(sl=T,(vn=z)&&!le)for(Ye=d;Ye!==null;)T=Ye,z=T.child,T.tag===22&&T.memoizedState!==null?fm(d):z!==null?(z.return=T,Ye=z):fm(d);for(;g!==null;)Ye=g,lm(g),g=g.sibling;Ye=d,sl=U,vn=le}cm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,Ye=g):cm(n)}}function cm(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||ol(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ui(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&up(i,g,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Ee=ye.dehydrated;Ee!==null&&go(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&Iu(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function um(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function fm(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{ol(4,i)}catch(z){Xt(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Xt(i,d,z)}}var g=i.return;try{Iu(i)}catch(z){Xt(i,g,z)}break;case 5:var T=i.return;try{Iu(i)}catch(z){Xt(i,T,z)}}}catch(z){Xt(i,i.return,z)}if(i===n){Ye=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ye=U;break}Ye=i.return}}var x_=Math.ceil,al=R.ReactCurrentDispatcher,Ou=R.ReactCurrentOwner,ei=R.ReactCurrentBatchConfig,bt=0,on=null,Jt=null,fn=0,Hn=0,Ns=hr(0),tn=0,Bo=null,Xr=0,ll=0,ku=0,zo=null,Dn=null,Bu=0,Ds=1/0,Xi=null,cl=!1,zu=null,xr=null,ul=!1,yr=null,fl=0,Vo=0,Vu=null,dl=-1,hl=0;function Tn(){return(bt&6)!==0?b():dl!==-1?dl:dl=b()}function Sr(n){return(n.mode&1)===0?1:(bt&2)!==0&&fn!==0?fn&-fn:n_.transition!==null?(hl===0&&(hl=Cn()),hl):(n=mt,n!==0||(n=window.event,n=n===void 0?16:hh(n.type)),n)}function hi(n,i,a,c){if(50<Vo)throw Vo=0,Vu=null,Error(t(185));kn(n,a,c),((bt&2)===0||n!==on)&&(n===on&&((bt&2)===0&&(ll|=a),tn===4&&Mr(n,fn)),In(n,c),a===1&&bt===0&&(i.mode&1)===0&&(Ds=b()+500,Va&&mr()))}function In(n,i){var a=n.callbackNode;Mn(n,i);var c=Yt(n,n===on?fn:0);if(c===0)a!==null&&Ma(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ma(a),i===1)n.tag===0?t_(hm.bind(null,n)):Jh(hm.bind(null,n)),Kv(function(){(bt&6)===0&&mr()}),a=null;else{switch(ai(c)){case 1:a=ue;break;case 4:a=ie;break;case 16:a=Q;break;case 536870912:a=He;break;default:a=Q}a=Sm(a,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function dm(n,i){if(dl=-1,hl=0,(bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var c=Yt(n,n===on?fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=pl(n,c);else{i=c;var d=bt;bt|=2;var g=mm();(on!==n||fn!==i)&&(Xi=null,Ds=b()+500,Yr(n,i));do try{M_();break}catch(U){pm(n,U)}while(!0);su(),al.current=g,bt=d,Jt!==null?i=0:(on=null,fn=0,i=tn)}if(i!==0){if(i===2&&(d=Et(n),d!==0&&(c=d,i=Hu(n,d))),i===1)throw a=Bo,Yr(n,0),Mr(n,c),In(n,b()),a;if(i===6)Mr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!y_(d)&&(i=pl(n,c),i===2&&(g=Et(n),g!==0&&(c=g,i=Hu(n,g))),i===1))throw a=Bo,Yr(n,0),Mr(n,c),In(n,b()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:qr(n,Dn,Xi);break;case 3:if(Mr(n,c),(c&130023424)===c&&(i=Bu+500-b(),10<i)){if(Yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Tn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=qc(qr.bind(null,n,Dn,Xi),i);break}qr(n,Dn,Xi);break;case 4:if(Mr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-at(c);g=1<<T,T=i[T],T>d&&(d=T),c&=~g}if(c=d,c=b()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*x_(c/1960))-c,10<c){n.timeoutHandle=qc(qr.bind(null,n,Dn,Xi),c);break}qr(n,Dn,Xi);break;case 5:qr(n,Dn,Xi);break;default:throw Error(t(329))}}}return In(n,b()),n.callbackNode===a?dm.bind(null,n):null}function Hu(n,i){var a=zo;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=pl(n,i),n!==2&&(i=Dn,Dn=a,i!==null&&Gu(i)),n}function Gu(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function y_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!li(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Mr(n,i){for(i&=~ku,i&=~ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-at(i),c=1<<a;n[a]=-1,i&=~c}}function hm(n){if((bt&6)!==0)throw Error(t(327));Is();var i=Yt(n,0);if((i&1)===0)return In(n,b()),null;var a=pl(n,i);if(n.tag!==0&&a===2){var c=Et(n);c!==0&&(i=c,a=Hu(n,c))}if(a===1)throw a=Bo,Yr(n,0),Mr(n,i),In(n,b()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,qr(n,Dn,Xi),In(n,b()),null}function Wu(n,i){var a=bt;bt|=1;try{return n(i)}finally{bt=a,bt===0&&(Ds=b()+500,Va&&mr())}}function jr(n){yr!==null&&yr.tag===0&&(bt&6)===0&&Is();var i=bt;bt|=1;var a=ei.transition,c=mt;try{if(ei.transition=null,mt=1,n)return n()}finally{mt=c,ei.transition=a,bt=i,(bt&6)===0&&mr()}}function Xu(){Hn=Ns.current,zt(Ns)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,$v(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(eu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ba();break;case 3:Rs(),zt(Pn),zt(pn),hu();break;case 5:fu(c);break;case 4:Rs();break;case 13:zt(Ht);break;case 19:zt(Ht);break;case 10:ou(c.type._context);break;case 22:case 23:Xu()}a=a.return}if(on=n,Jt=n=Er(n.current,null),fn=Hn=i,tn=0,Bo=null,ku=ll=Xr=0,Dn=zo=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var T=g.next;g.next=d,c.next=T}a.pending=c}Hr=null}return n}function pm(n,i){do{var a=Jt;try{if(su(),Ka.current=tl,Ja){for(var c=Gt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ja=!1}if(Wr=0,sn=en=Gt=null,Do=!1,Io=0,Ou.current=null,a===null||a.return===null){tn=1,Bo=i,Jt=null;break}e:{var g=n,T=a.return,U=a,z=i;if(i=fn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,ye=U,Ee=ye.tag;if((ye.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Ve=Bp(T);if(Ve!==null){Ve.flags&=-257,zp(Ve,T,U,g,i),Ve.mode&1&&kp(g,le,i),i=Ve,z=le;var $e=i.updateQueue;if($e===null){var Qe=new Set;Qe.add(z),i.updateQueue=Qe}else $e.add(z);break e}else{if((i&1)===0){kp(g,le,i),ju();break e}z=Error(t(426))}}else if(Vt&&U.mode&1){var Zt=Bp(T);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),zp(Zt,T,U,g,i),iu(Ps(z,U));break e}}g=z=Ps(z,U),tn!==4&&(tn=2),zo===null?zo=[g]:zo.push(g),g=T;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var K=Fp(g,z,i);cp(g,K);break e;case 1:U=z;var W=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(xr===null||!xr.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=Op(g,U,i);cp(g,Ce);break e}}g=g.return}while(g!==null)}vm(a)}catch(nt){i=nt,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function mm(){var n=al.current;return al.current=tl,n===null?tl:n}function ju(){(tn===0||tn===3||tn===2)&&(tn=4),on===null||(Xr&268435455)===0&&(ll&268435455)===0||Mr(on,fn)}function pl(n,i){var a=bt;bt|=2;var c=mm();(on!==n||fn!==i)&&(Xi=null,Yr(n,i));do try{S_();break}catch(d){pm(n,d)}while(!0);if(su(),bt=a,al.current=c,Jt!==null)throw Error(t(261));return on=null,fn=0,tn}function S_(){for(;Jt!==null;)gm(Jt)}function M_(){for(;Jt!==null&&!Ec();)gm(Jt)}function gm(n){var i=ym(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?vm(n):Jt=i,Ou.current=null}function vm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=p_(a,i,Hn),a!==null){Jt=a;return}}else{if(a=m_(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);tn===0&&(tn=5)}function qr(n,i,a){var c=mt,d=ei.transition;try{ei.transition=null,mt=1,E_(n,i,a,c)}finally{ei.transition=d,mt=c}return null}function E_(n,i,a,c){do Is();while(yr!==null);if((bt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(sr(n,g),n===on&&(Jt=on=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,Sm(Q,function(){return Is(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ei.transition,ei.transition=null;var T=mt;mt=1;var U=bt;bt|=4,Ou.current=null,v_(n,a),am(a,n),Gv(jc),wa=!!Xc,jc=Xc=null,n.current=a,__(a),Tc(),bt=U,mt=T,ei.transition=g}else n.current=a;if(ul&&(ul=!1,yr=n,fl=d),g=n.pendingLanes,g===0&&(xr=null),it(a.stateNode),In(n,b()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(cl)throw cl=!1,n=zu,zu=null,n;return(fl&1)!==0&&n.tag!==0&&Is(),g=n.pendingLanes,(g&1)!==0?n===Vu?Vo++:(Vo=0,Vu=n):Vo=0,mr(),null}function Is(){if(yr!==null){var n=ai(fl),i=ei.transition,a=mt;try{if(ei.transition=null,mt=16>n?16:n,yr===null)var c=!1;else{if(n=yr,yr=null,fl=0,(bt&6)!==0)throw Error(t(331));var d=bt;for(bt|=4,Ye=n.current;Ye!==null;){var g=Ye,T=g.child;if((Ye.flags&16)!==0){var U=g.deletions;if(U!==null){for(var z=0;z<U.length;z++){var le=U[z];for(Ye=le;Ye!==null;){var ye=Ye;switch(ye.tag){case 0:case 11:case 15:ko(8,ye,g)}var Ee=ye.child;if(Ee!==null)Ee.return=ye,Ye=Ee;else for(;Ye!==null;){ye=Ye;var xe=ye.sibling,Ve=ye.return;if(nm(ye),ye===le){Ye=null;break}if(xe!==null){xe.return=Ve,Ye=xe;break}Ye=Ve}}}var $e=g.alternate;if($e!==null){var Qe=$e.child;if(Qe!==null){$e.child=null;do{var Zt=Qe.sibling;Qe.sibling=null,Qe=Zt}while(Qe!==null)}}Ye=g}}if((g.subtreeFlags&2064)!==0&&T!==null)T.return=g,Ye=T;else e:for(;Ye!==null;){if(g=Ye,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ko(9,g,g.return)}var K=g.sibling;if(K!==null){K.return=g.return,Ye=K;break e}Ye=g.return}}var W=n.current;for(Ye=W;Ye!==null;){T=Ye;var te=T.child;if((T.subtreeFlags&2064)!==0&&te!==null)te.return=T,Ye=te;else e:for(T=W;Ye!==null;){if(U=Ye,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:ol(9,U)}}catch(nt){Xt(U,U.return,nt)}if(U===T){Ye=null;break e}var Ce=U.sibling;if(Ce!==null){Ce.return=U.return,Ye=Ce;break e}Ye=U.return}}if(bt=d,mr(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(De,n)}catch{}c=!0}return c}finally{mt=a,ei.transition=i}}return!1}function _m(n,i,a){i=Ps(a,i),i=Fp(n,i,1),n=vr(n,i,1),i=Tn(),n!==null&&(kn(n,1,i),In(n,i))}function Xt(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){n=Ps(a,n),n=Op(i,n,1),i=vr(i,n,1),n=Tn(),i!==null&&(kn(i,1,n),In(i,n));break}}i=i.return}}function T_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Tn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(fn&a)===a&&(tn===4||tn===3&&(fn&130023424)===fn&&500>b()-Bu?Yr(n,0):ku|=a),In(n,i)}function xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=Tn();n=Hi(n,i),n!==null&&(kn(n,i,a),In(n,a))}function w_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),xm(n,a)}function A_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),xm(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,h_(n,i,a);Nn=(n.flags&131072)!==0}else Nn=!1,Vt&&(i.flags&1048576)!==0&&Qh(i,Ga,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;rl(n,i),n=i.pendingProps;var d=Ms(i,pn.current);Cs(i,a),d=gu(null,i,c,n,d,a);var g=vu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ln(c)?(g=!0,za(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,cu(i),d.updater=nl,i.stateNode=d,d._reactInternals=i,Eu(i,c,n,a),i=bu(null,i,c,!0,g,a)):(i.tag=0,Vt&&g&&Qc(i),En(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(rl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=C_(c),n=ui(c,n),d){case 0:i=Au(null,i,c,n,a);break e;case 1:i=jp(null,i,c,n,a);break e;case 11:i=Vp(null,i,c,n,a);break e;case 14:i=Hp(null,i,c,ui(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Au(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),jp(n,i,c,d,a);case 3:e:{if(Yp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,lp(n,i),Za(i,c,null,a);var T=i.memoizedState;if(c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=Ps(Error(t(423)),i),i=qp(n,i,c,a,d);break e}else if(c!==d){d=Ps(Error(t(424)),i),i=qp(n,i,c,a,d);break e}else for(Vn=dr(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,ci=null,a=op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===d){i=Wi(n,i,a);break e}En(n,i,c,a)}i=i.child}return i;case 5:return fp(i),n===null&&nu(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,T=d.children,Yc(c,d)?T=null:g!==null&&Yc(c,g)&&(i.flags|=32),Xp(n,i),En(n,i,T,a),i.child;case 6:return n===null&&nu(i),null;case 13:return Zp(n,i,a);case 4:return uu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):En(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Vp(n,i,c,d,a);case 7:return En(n,i,i.pendingProps,a),i.child;case 8:return En(n,i,i.pendingProps.children,a),i.child;case 12:return En(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,T=d.value,kt(ja,c._currentValue),c._currentValue=T,g!==null)if(li(g.value,T)){if(g.children===d.children&&!Pn.current){i=Wi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var U=g.dependencies;if(U!==null){T=g.child;for(var z=U.firstContext;z!==null;){if(z.context===c){if(g.tag===1){z=Gi(-1,a&-a),z.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),le.pending=z}}g.lanes|=a,z=g.alternate,z!==null&&(z.lanes|=a),au(g.return,a,i),U.lanes|=a;break}z=z.next}}else if(g.tag===10)T=g.type===i.type?null:g.child;else if(g.tag===18){if(T=g.return,T===null)throw Error(t(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),au(T,a,i),T=g.sibling}else T=g.child;if(T!==null)T.return=g;else for(T=g;T!==null;){if(T===i){T=null;break}if(g=T.sibling,g!==null){g.return=T.return,T=g;break}T=T.return}g=T}En(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Cs(i,a),d=Jn(d),c=c(d),i.flags|=1,En(n,i,c,a),i.child;case 14:return c=i.type,d=ui(c,i.pendingProps),d=ui(c.type,d),Hp(n,i,c,d,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),rl(n,i),i.tag=1,Ln(c)?(n=!0,za(i)):n=!1,Cs(i,a),Ip(i,c,d),Eu(i,c,d,a),bu(null,i,c,!0,n,a);case 19:return Kp(n,i,a);case 22:return Wp(n,i,a)}throw Error(t(156,i.tag))};function Sm(n,i){return Sa(n,i)}function b_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new b_(n,i,a,c)}function Yu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function C_(n){if(typeof n=="function")return Yu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===Z)return 14}return 2}function Er(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,i,a,c,d,g){var T=2;if(c=n,typeof n=="function")Yu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Zr(a.children,d,g,i);case w:T=8,d|=8;break;case L:return n=ti(12,a,i,d|2),n.elementType=L,n.lanes=g,n;case J:return n=ti(13,a,i,d),n.elementType=J,n.lanes=g,n;case re:return n=ti(19,a,i,d),n.elementType=re,n.lanes=g,n;case V:return gl(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ae:T=10;break e;case k:T=9;break e;case ne:T=11;break e;case Z:T=14;break e;case $:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(T,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function Zr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function gl(n,i,a,c){return n=ti(22,n,c,i),n.elementType=V,n.lanes=a,n.stateNode={isHidden:!1},n}function qu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Zu(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function R_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rn(0),this.expirationTimes=Rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $u(n,i,a,c,d,g,T,U,z){return n=new R_(n,i,a,U,z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ti(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(g),n}function P_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Mm(n){if(!n)return pr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ln(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ln(a))return $h(n,a,i)}return i}function Em(n,i,a,c,d,g,T,U,z){return n=$u(a,c,!0,n,d,g,T,U,z),n.context=Mm(null),a=n.current,c=Tn(),d=Sr(a),g=Gi(c,d),g.callback=i??null,vr(a,g,d),n.current.lanes=d,kn(n,d,c),In(n,c),n}function vl(n,i,a,c){var d=i.current,g=Tn(),T=Sr(d);return a=Mm(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(g,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=vr(d,i,T),n!==null&&(hi(n,d,T,g),qa(n,d,T)),T}function _l(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Tm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ku(n,i){Tm(n,i),(n=n.alternate)&&Tm(n,i)}function L_(){return null}var wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ju(n){this._internalRoot=n}xl.prototype.render=Ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},xl.prototype.unmount=Ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;jr(function(){vl(null,n,null,null)}),i[ki]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=uo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<cr.length&&i!==0&&i<cr[a].priority;a++);cr.splice(a,0,n),a===0&&fh(n)}};function Qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function N_(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var le=_l(T);g.call(le)}}var T=Em(i,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=T,n[ki]=T.current,wo(n.nodeType===8?n.parentNode:n),jr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var le=_l(z);U.call(le)}}var z=$u(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=z,n[ki]=z.current,wo(n.nodeType===8?n.parentNode:n),jr(function(){vl(i,z,a,c)}),z}function Sl(n,i,a,c,d){var g=a._reactRootContainer;if(g){var T=g;if(typeof d=="function"){var U=d;d=function(){var z=_l(T);U.call(z)}}vl(i,T,n,d)}else T=N_(a,i,n,d,c);return _l(T)}qt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Tt(i.pendingLanes);a!==0&&(Nt(i,a|1),In(i,b()),(bt&6)===0&&(Ds=b()+500,mr()))}break;case 13:jr(function(){var c=Hi(n,1);if(c!==null){var d=Tn();hi(c,n,1,d)}}),Ku(n,1)}},Zn=function(n){if(n.tag===13){var i=Hi(n,134217728);if(i!==null){var a=Tn();hi(i,n,134217728,a)}Ku(n,134217728)}},Oi=function(n){if(n.tag===13){var i=Sr(n),a=Hi(n,i);if(a!==null){var c=Tn();hi(a,n,i,c)}Ku(n,i)}},uo=function(){return mt},ch=function(n,i){var a=mt;try{return mt=n,i()}finally{mt=a}},Le=function(n,i,a){switch(i){case"input":if(Ne(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=ka(c);if(!d)throw Error(t(90));Lt(c),Ne(c,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&rt(n,!!a.multiple,i,!1)}},pt=Wu,It=jr;var D_={usingClientEntryPoint:!1,Events:[Co,ys,ka,he,Ze,Wu]},Ho={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I_={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||L_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{De=Ml.inject(I_),ze=Ml}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_,Un.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(i))throw Error(t(200));return P_(n,i,null,a)},Un.createRoot=function(n,i){if(!Qu(n))throw Error(t(299));var a=!1,c="",d=wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=$u(n,1,!1,null,null,a,!1,c,d),n[ki]=i.current,wo(n.nodeType===8?n.parentNode:n),new Ju(i)},Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xa(i),n=n===null?null:n.stateNode,n},Un.flushSync=function(n){return jr(n)},Un.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!0,a)},Un.hydrateRoot=function(n,i,a){if(!Qu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",T=wm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Em(i,null,n,1,a??null,d,!1,g,T),n[ki]=i.current,wo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new xl(i)},Un.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!1,a)},Un.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(jr(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1},Un.unstable_batchedUpdates=Wu,Un.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,c)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Im;function G_(){if(Im)return nf.exports;Im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),nf.exports=H_(),nf.exports}var Um;function W_(){if(Um)return El;Um=1;var s=G_();return El.createRoot=s.createRoot,El.hydrateRoot=s.hydrateRoot,El}var X_=W_();const j_=Xd(X_),Y_={primary:`
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
	`};function jf({as:s="button",href:e,children:t,variant:r="primary",className:o="",...l}){const u=`
	inline-flex items-center justify-center
	px-6 py-3 rounded-lg font-semibold text-lg
	cursor-pointer
	disabled:opacity-60 disabled:cursor-not-allowed
	disabled:hover:shadow-none
	disabled:hover:bg-[length:0%_100%]
	${Y_[r]}
	${o}
`;return s==="a"?ce.jsx("a",{href:e,className:u,...l,children:t}):ce.jsx("button",{className:u,...l,children:t})}function q_(){return ce.jsxs("section",{id:"home",className:"flex w-full pt-0 flex-col pb-56 bg-transparent items-center md:flex-col",children:[ce.jsx("div",{className:"flex items-center min-h-[50vh] justify-center text-center md:w-full",children:ce.jsxs("h1",{className:" text-6xl pb-28 font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[ce.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ",children:"MTRX"})," ","Studio"]})}),ce.jsxs("div",{className:"flex w-full max-w-3xl flex-col items-center justify-center sm:mt-80 mt-60 align-middle text-center",children:[ce.jsx("h2",{className:"text-balance font-kode text-2xl font-semibold leading-snug text-cyber-text sm:text-3xl md:text-4xl",children:"Websites built to earn trust and drive action."}),ce.jsx("p",{className:"mt-5 max-w-2xl text-sm leading-relaxed text-cyber-muted sm:text-base md:text-lg",children:"We design modern, high-converting websites for growing businesses that want to look more credible, attract better leads, and turn more visitors into customers."}),ce.jsxs("div",{className:"mt-8 flex w-full flex-col gap-4 px-2 sm:w-auto sm:flex-row sm:px-0",children:[ce.jsx(jf,{variant:"primary",as:"a",href:"#contact",children:"Book Free Discovery Call"}),ce.jsx(jf,{variant:"secondary",as:"a",href:"#portfolio",children:"View Portfolio"})]})]})]})}function Z_(){const s=[{name:"All Jay Gaco",shortName:"All Jay",role:"Front-End Development / UI",bio:"I focus on creating modern, user-friendly websites that help businesses look more credible and connect better with their audience. I’m currently studying Web Development at Fanshawe College, where I’ve gained over two years of hands-on experience building responsive, front-end applications and refining user experience. I focus on crafting interfaces that feel clean, intuitive, and professional.",traits:["Front-End Focused","Mobile-First","Clean UI"],accent:"AJ"},{name:"Filipe Madureira",shortName:"Filipe",role:"Development / Systems",bio:"I focus on the technical side of our builds, helping ensure everything runs smoothly, efficiently, and reliably. Currently completing a Computer Science degree at TMU, I bring a strong foundation in software development, problem-solving, and system design to every project. I work across the stack to make sure what we build not only looks good, but performs well and scales properly.",traits:["Full-Stack Foundation","System Thinking","Performance Focus"],accent:"FM"},{name:"Joshua Welcher",shortName:"Joshua",role:"Creative / Technical",bio:"I bridge the gap between creative direction and technical execution. With experience in Python, 3D modeling, and digital design, I help bring ideas to life in ways that feel unique and engaging. From visual concepts to technical problem-solving, I focus on making sure our projects stand out while still being practical and well-executed.",traits:["Creative Tech","3D & Design","Problem Solving"],accent:"JW"}],[e,t]=vi.useState(0),[r,o]=vi.useState({}),[l,u]=vi.useState(!0),f=vi.useRef([]),p=s[e];vi.useEffect(()=>{const v=()=>{const _=f.current[e];if(!_)return;const m=_.parentElement;o({width:`${_.offsetWidth}px`,transform:`translateX(${_.offsetLeft-m.offsetLeft}px)`})};return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[e]);const h=v=>{v!==e&&(u(!1),setTimeout(()=>{t(v),u(!0)},140))};return ce.jsx("section",{id:"team",className:"relative px-6 pt-0 pb-56 md:px-10 lg:px-16",children:ce.jsxs("div",{className:"mx-auto max-w-6xl",children:[ce.jsxs("div",{className:"mx-auto mb-10 max-w-3xl text-center",children:[ce.jsxs("h1",{className:" text-6xl font-extrabold font-kode pb-20 text-white  md:text-5xl lg:text-6xl",children:[ce.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow ",children:"About"})," ","Us"]}),ce.jsx("div",{className:" items-center pb-5 justify-center text-center md:w-full",children:ce.jsxs("h2",{className:"text-xl font-semibold font-kode leading-tight text-cyber-text md:text-3xl",children:["Meet the team behind the"," ",ce.jsx("span",{className:"bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow bg-clip-text text-transparent",children:"build"})]})}),ce.jsx("p",{className:"text-base leading-relaxed pb-32 text-cyber-muted md:text-lg",children:"We’re a small team building modern, high-quality websites that help businesses stand out and grow. We combine clean design, strong development, and clear strategy to create sites that perform, build trust, and drive results."})]}),ce.jsxs("div",{className:"rounded-3xl border  border-cyber-border bg-cyber-surface/40 p-4 backdrop-blur-xl md:p-6",children:[ce.jsx("div",{className:"mx-auto mb-8 w-full max-w-3xl",children:ce.jsx("div",{className:"relative mx-auto w-full max-w-3xl",children:ce.jsxs("div",{role:"tablist","aria-label":"Meet the team",className:"relative grid w-full grid-cols-3 items-center rounded-full p-1",children:[ce.jsx("div",{"aria-hidden":"true",className:"absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow shadow-lg shadow-cyber-glow/20 transition-all duration-300 ease-out",style:r}),s.map((v,_)=>{const m=_===e;return ce.jsxs("button",{ref:S=>{f.current[_]=S},type:"button",role:"tab","aria-selected":m,"aria-controls":`team-panel-${_}`,id:`team-tab-${_}`,onClick:()=>h(_),className:`
												relative z-10 flex w-full items-center justify-center
												rounded-full px-4 sm:px-5 py-3 text-sm font-semibold
												transition-all duration-300
												${m?"text-cyber-text hover:[text-shadow:0.5px_0_0_#000,-0.5px_0_0_#000,0_0.5px_0_#000,0_-0.5px_0_#000]":"text-cyber-muted hover:text-cyber-text"}
											`,children:[ce.jsx("span",{className:"sm:hidden",children:v.shortName}),ce.jsx("span",{className:"hidden sm:inline",children:v.name})]},v.name)})]})})}),ce.jsx("div",{id:`team-panel-${e}`,role:"tabpanel","aria-labelledby":`team-tab-${e}`,className:`
							rounded-3xl border border-cyber-border bg-cyber-surface/70 p-6 md:p-8
							transition-all duration-300
							${l?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}
						`,children:ce.jsxs("div",{className:"grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:items-center",children:[ce.jsx("div",{className:"flex justify-center md:justify-start",children:ce.jsxs("div",{className:"relative",children:[ce.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-br from-cyber-purple/25 via-cyber-accent/20 to-cyber-glow/25 blur-2xl"}),ce.jsx("div",{className:"relative flex h-40 w-40 items-center justify-center rounded-3xl border border-cyber-border bg-cyber-void text-4xl font-bold text-cyber-text shadow-[0_0_25px_rgba(255,46,219,0.12)] md:h-48 md:w-48",children:p.accent})]})}),ce.jsxs("div",{children:[ce.jsx("p",{className:"mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyber-accent",children:p.role}),ce.jsx("h3",{className:"text-3xl font-semibold text-cyber-text",children:p.name}),ce.jsx("p",{className:"mt-5 max-w-2xl text-sm leading-relaxed text-cyber-muted md:text-base",children:p.bio}),ce.jsx("div",{className:"mt-6 flex flex-wrap gap-2",children:p.traits.map(v=>ce.jsx("span",{className:"rounded-full border border-cyber-border bg-cyber-void/80 px-3 py-1.5 text-xs font-medium tracking-wide text-cyber-text",children:v},v))}),ce.jsx("div",{className:"mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyber-border to-transparent"}),ce.jsx("p",{className:"mt-6 text-sm leading-relaxed text-cyber-muted",children:"We build with clarity, collaboration, and a focus on helping clients look more credible and convert more effectively online."})]})]})})]})]})})}var of={exports:{}},af,Fm;function $_(){if(Fm)return af;Fm=1;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return af=s,af}var lf,Om;function K_(){if(Om)return lf;Om=1;var s=$_();function e(){}function t(){}return t.resetWarningCache=e,lf=function(){function r(u,f,p,h,v,_){if(_!==s){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function o(){return r}var l={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},lf}var km;function J_(){return km||(km=1,of.exports=K_()()),of.exports}var Q_=J_();const Tl=Xd(Q_);function tc({title:s,svg:e,body:t,link:r}){return ce.jsx("div",{className:"p-4 w-full max-w-sm",children:ce.jsxs("div",{className:"card-shell group relative rounded-2xl p-[1px] transition-all duration-300 hover:-translate-y-1",children:[ce.jsx("div",{className:"card-gradient-border absolute inset-0 rounded-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"}),ce.jsxs("article",{className:"card-inner relative z-10 flex h-full min-h-[580px] flex-col rounded-2xl border border-cyber-border bg-cyber-surface p-8 transition-all duration-300 group-hover:border-transparent group-hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]",children:[ce.jsxs("div",{className:"mb-6 text-center",children:[ce.jsx("div",{className:"card-icon-wrap mx-auto my-6 flex h-52 w-52 items-center justify-center text-cyber-text transition-all duration-300 group-hover:text-cyber-accent",children:e}),ce.jsx("h2",{className:"text-cyber-text text-lg font-medium",children:s})]}),ce.jsx("p",{className:"text-cyber-muted text-base leading-relaxed text-center flex-grow",children:t})]})]})})}tc.propTypes={title:Tl.string.isRequired,svg:Tl.node.isRequired,body:Tl.string.isRequired,link:Tl.string.isRequired};function ex(){return ce.jsxs("section",{id:"services",className:" min-h-[calc(100vh-7rem)] pt-0 pb-64 text-gray-500",children:[ce.jsxs("h2",{className:"pb-32 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[ce.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"What"})," ","We Do"]}),ce.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch",children:[ce.jsx(tc,{title:"Website Design",svg:ce.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"})}),body:"We specialize in creating visually stunning, user-friendly websites that captivate your audience and drive results. Our team of expert designers will work with you to bring your vision to life and create a digital experience that sets you apart from the competition.",link:"#contact"}),ce.jsx(tc,{title:"Database Management",svg:ce.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"})}),body:"We offer comprehensive database management solutions to help you organize, store, and access your data with ease. Our team will work with you to develop a custom database system that meets your unique needs and ensures your data is secure and accessible.",link:"#contact"}),ce.jsx(tc,{title:"Data Analysis",svg:ce.jsx("svg",{"data-slot":"icon",fill:"none",strokeWidth:"1.5",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:ce.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})}),body:"We provide expert data analysis services to help you make informed decisions and drive business growth. Our team will help you collect, analyze, and interpret your data to uncover valuable insights and opportunities for improvement.",link:"#contact"})]})]})}const tx="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20200%20200'%3e%3cdefs%3e%3cstyle%3e%20.cls-1%20{%20fill:%20%23fff;%20}%20.cls-2%20{%20fill:%20url(%23linear-gradient);%20}%20%3c/style%3e%3clinearGradient%20id='linear-gradient'%20x1='24.94'%20y1='102.06'%20x2='183.44'%20y2='102.06'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%2360a5fa'/%3e%3cstop%20offset='.07'%20stop-color='%23589bf6'/%3e%3cstop%20offset='.18'%20stop-color='%234582ec'/%3e%3cstop%20offset='.32'%20stop-color='%232559dc'/%3e%3cstop%20offset='.35'%20stop-color='%231d4ed8'/%3e%3cstop%20offset='.63'%20stop-color='%231e3d96'/%3e%3cstop%20offset='1'%20stop-color='%23111827'/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3crect%20class='cls-1'%20width='200'%20height='200'%20rx='27.13'%20ry='27.13'/%3e%3c/g%3e%3cg%20id='Layer_1'%20data-name='Layer%201'%3e%3cpath%20class='cls-2'%20d='M177.91,62.28c-3.67-5.7-8.65-9.92-14.93-12.68-6.27-2.77-15.44-4.16-27.5-4.16h-48.36v46.23c-.93-1.54-1.93-3.13-2.96-4.76l-26.38-41.47H24.94v113.23h28.2v-54.83c0-5.1-.92-11.29-2.74-18.59,4.04,9.17,8.06,16.97,12.04,23.39l24.68,39.81,6.33,10.22h28.93v-41.15h19.66c12.55,0,22.58-3.32,30.1-9.96,7.52-6.64,11.29-15.35,11.29-26.13,0-7.08-1.85-13.47-5.53-19.16ZM133.49,93.23h-11.61v-21.9h12.78c9.46,0,14.18,3.54,14.18,10.62,0,7.52-5.11,11.28-15.35,11.28Z'/%3e%3c/g%3e%3c/svg%3e";function cf({title:s,description:e,result:t,coverLabel:r="PROJECT PREVIEW",foregroundLabel:o="3D ASSET",link:l,foregroundImage:u}){const f=ce.jsx("article",{className:"group relative h-[420px] w-full [perspective:2500px]",children:ce.jsxs("div",{className:`\r
          relative h-full w-full overflow-visible rounded-xl\r
          flex items-end justify-center px-6 pb-6\r
        `,children:[ce.jsx("div",{className:`\r
            absolute inset-0 -z-10 rounded-xl overflow-hidden\r
            transition-all duration-500 ease-out\r
            group-hover:[transform:perspective(900px)_translateY(-5%)_rotateX(25deg)_translateZ(0)]\r
            group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)]\r
          `,children:ce.jsxs("div",{className:"relative h-full w-full bg-cyber-panel border border-cyber-border",children:[ce.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyber-surface via-cyber-panel to-cyber-void"}),ce.jsx("div",{className:"absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]"}),ce.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:ce.jsx("div",{className:"rounded-full border border-cyber-border bg-cyber-surface/70 px-4 py-2 text-xs font-semibold tracking-[0.25em] text-cyber-muted backdrop-blur-sm",children:r})}),ce.jsx("div",{className:`\r
                pointer-events-none absolute inset-x-0 top-0 h-full opacity-0\r
                transition-all duration-500\r
                bg-[linear-gradient(to_top,transparent_46%,rgba(12,13,19,0.5)_68%,rgba(12,13,19,1)_97%)]\r
                group-hover:opacity-100\r
              `}),ce.jsx("div",{className:`\r
                pointer-events-none absolute inset-x-0 bottom-0 h-[80px] opacity-100\r
                transition-all duration-500\r
                bg-[linear-gradient(to_bottom,transparent_46%,rgba(12,13,19,0.5)_68%,rgba(12,13,19,1)_97%)]\r
                group-hover:h-[120px]\r
              `})]})}),ce.jsxs("div",{className:`\r
            relative z-10 w-full rounded-xl border border-cyber-border\r
            bg-cyber-surface/80 p-6 backdrop-blur-md\r
            transition-transform duration-500 ease-out\r
            group-hover:[transform:translate3d(0,-50px,100px)]\r
          `,children:[ce.jsx("h3",{className:"mb-2 text-xl font-semibold text-cyber-text",children:s}),ce.jsx("p",{className:"mb-4 text-sm text-cyber-muted",children:e}),ce.jsx("p",{className:"text-sm font-medium text-cyber-accent",children:t}),l&&ce.jsx("span",{className:"mt-4 inline-block text-sm font-medium text-cyber-glow",children:"View Project →"})]}),ce.jsx("div",{className:`\r
            pointer-events-none absolute bottom-14 left-1/2 z-20 w-[72%]\r
            -translate-x-1/2 opacity-0\r
            transition-all duration-500 ease-out\r
            group-hover:opacity-100\r
            group-hover:[transform:translate3d(-50%,-30%,100px)]\r
          `,children:ce.jsxs("div",{className:`\r
              relative aspect-[4/5] overflow-hidden rounded-2xl border border-cyber-glow/40\r
              bg-gradient-to-b from-cyber-purple/40 via-cyber-accent/30 to-cyber-glow/20\r
              shadow-[0_0_30px_rgba(255,46,219,0.18)]\r
              backdrop-blur-sm\r
              flex items-center justify-center\r
            `,children:[u?ce.jsx("img",{src:u,alt:`${s} preview`,className:"w-48 h-48 object-cover"}):ce.jsx("span",{className:"text-xs font-semibold tracking-[0.25em] text-cyber-text/90",children:o}),ce.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-t from-cyber-void/50 via-transparent to-white/10"})]})})]})});return l?ce.jsx("a",{href:l,target:"_blank",rel:"noopener noreferrer","aria-label":`Open project: ${s}`,className:"block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cyber-void",children:f}):f}function nx(){return ce.jsx("section",{id:"portfolio",className:" min-h-[calc(100vh-7rem)] text-gray-300 px-5 py-16",children:ce.jsxs("div",{className:"max-w-screen-xl mx-auto",children:[ce.jsxs("h2",{className:"mb-4 text-center text-6xl font-extrabold font-kode text-gray-900 dark:text-white md:text-5xl lg:text-6xl",children:[ce.jsx("span",{className:"text-transparent  bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"Recent"})," ","Work"]}),ce.jsxs("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[ce.jsx(cf,{title:"Northpoint Heating & Cooling",description:"Modern HVAC business website built for lead generation with a clean, mobile-first layout and strong local service branding.",result:"Result: Live deployed production site.",coverLabel:"LIVE SITE",foregroundLabel:"NORTHPOINT",foregroundImage:tx,link:"https://alljay213.github.io/northpoint/"}),ce.jsx(cf,{title:"E-commerce Launch",description:"Built a streamlined storefront with clear product pages and checkout flow.",result:"Result: Improved conversion rate after launch.",coverLabel:"STOREFRONT",foregroundLabel:"PRODUCT CARD"}),ce.jsx(cf,{title:"Startup Landing Page",description:"Created a conversion-focused landing page with strong messaging and CTAs.",result:"Result: Higher demo booking volume from paid traffic.",coverLabel:"LANDING PAGE",foregroundLabel:"3D PANEL"})]})]})})}class fa{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const ix=()=>{if(!(typeof localStorage>"u"))return{get:s=>Promise.resolve(localStorage.getItem(s)),set:(s,e)=>Promise.resolve(localStorage.setItem(s,e)),remove:s=>Promise.resolve(localStorage.removeItem(s))}},dn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:ix()},Yd=s=>s?typeof s=="string"?{publicKey:s}:s.toString()==="[object Object]"?s:{}:{},rx=(s,e="https://api.emailjs.com")=>{if(!s)return;const t=Yd(s);dn.publicKey=t.publicKey,dn.blockHeadless=t.blockHeadless,dn.storageProvider=t.storageProvider,dn.blockList=t.blockList,dn.limitRate=t.limitRate,dn.origin=t.origin||e},r0=async(s,e,t={})=>{const r=await fetch(dn.origin+s,{method:"POST",headers:t,body:e}),o=await r.text(),l=new fa(r.status,o);if(r.ok)return l;throw l},s0=(s,e,t)=>{if(!s||typeof s!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},sx=s=>{if(s&&s.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},o0=s=>s.webdriver||!s.languages||s.languages.length===0,a0=()=>new fa(451,"Unavailable For Headless Browser"),ox=(s,e)=>{if(!Array.isArray(s))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},ax=s=>!s.list?.length||!s.watchVariable,lx=(s,e)=>s instanceof FormData?s.get(e):s[e],l0=(s,e)=>{if(ax(s))return!1;ox(s.list,s.watchVariable);const t=lx(e,s.watchVariable);return typeof t!="string"?!1:s.list.includes(t)},c0=()=>new fa(403,"Forbidden"),cx=(s,e)=>{if(typeof s!="number"||s<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},ux=async(s,e,t)=>{const r=Number(await t.get(s)||0);return e-Date.now()+r},u0=async(s,e,t)=>{if(!e.throttle||!t)return!1;cx(e.throttle,e.id);const r=e.id||s;return await ux(r,e.throttle,t)>0?!0:(await t.set(r,Date.now().toString()),!1)},f0=()=>new fa(429,"Too Many Requests"),fx=async(s,e,t,r)=>{const o=Yd(r),l=o.publicKey||dn.publicKey,u=o.blockHeadless||dn.blockHeadless,f=o.storageProvider||dn.storageProvider,p={...dn.blockList,...o.blockList},h={...dn.limitRate,...o.limitRate};return u&&o0(navigator)?Promise.reject(a0()):(s0(l,s,e),sx(t),t&&l0(p,t)?Promise.reject(c0()):await u0(location.pathname,h,f)?Promise.reject(f0()):r0("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:l,service_id:s,template_id:e,template_params:t}),{"Content-type":"application/json"}))},dx=s=>{if(!s||s.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},hx=s=>typeof s=="string"?document.querySelector(s):s,px=async(s,e,t,r)=>{const o=Yd(r),l=o.publicKey||dn.publicKey,u=o.blockHeadless||dn.blockHeadless,f=dn.storageProvider||o.storageProvider,p={...dn.blockList,...o.blockList},h={...dn.limitRate,...o.limitRate};if(u&&o0(navigator))return Promise.reject(a0());const v=hx(t);s0(l,s,e),dx(v);const _=new FormData(v);return l0(p,_)?Promise.reject(c0()):await u0(location.pathname,h,f)?Promise.reject(f0()):(_.append("lib_version","4.4.1"),_.append("service_id",s),_.append("template_id",e),_.append("user_id",l),r0("/api/v1.0/email/send-form",_))},mx={init:rx,send:fx,sendForm:px,EmailJSResponseStatus:fa};function gx(){const s=vi.useRef(),[e,t]=vi.useState(!1),[r,o]=vi.useState("Send message"),l=u=>{t(!0),o("Sending..."),u.preventDefault(),mx.sendForm("Mtrx_Studio","contact_us_form",s.current,{publicKey:"nsFzgifHp3J6haAMV"}).then(()=>{console.log("SUCCESS!"),t(!0),o("Sent!")},f=>{console.log("FAILED...",f.text),o("Send message"),t(!1)})};return ce.jsx("section",{id:"contact",className:"pt-0 min-h-[calc(100vh-7rem)] flex items-center justify-center",children:ce.jsxs("div",{className:"grid grid-cols-1 text-center items-center gap-16 p-6 mx-auto w-full max-w-2xl  min-h-[calc(100vh-7rem)] justify-center",children:[ce.jsxs("div",{children:[ce.jsxs("h1",{className:"mb-4 text-6xl font-extrabold font-kode text-white  md:text-5xl lg:text-6xl",children:[ce.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow",children:"Let's"})," ","Talk"]}),ce.jsx("p",{className:"text-[15px] text-slate-300 mt-4 leading-relaxed",children:"Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help."}),ce.jsx("div",{className:"mt-8 mx-auto flex flex-col sm:flex-row justify-evenly gap-6",children:ce.jsx("div",{className:"mt-5 sm:mt-12 w-full max-w-md sm:max-w-none sm:w-1/2",children:ce.jsxs("div",{className:`\r
								group flex items-center gap-4\r
								p-4 rounded-xl\r
								border border-cyber-border\r
								bg-cyber-surface/50 backdrop-blur-xl\r
								transition-all duration-300\r
								hover:-translate-y-1\r
								hover:shadow-[0_0_25px_rgba(255,46,219,0.12)]\r
								`,children:[ce.jsx("div",{className:`\r
									flex items-center justify-center\r
									w-14 h-14 rounded-lg\r
									bg-cyber-surface border border-cyber-border\r
									transition-all duration-300\r
									group-hover:shadow-[0_0_12px_rgba(255,46,219,0.2)]\r
									`,children:ce.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",className:"w-7 h-7",children:[ce.jsx("defs",{children:ce.jsxs("linearGradient",{id:"cyberStroke",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[ce.jsx("stop",{offset:"0%",stopColor:"#A855F7"}),ce.jsx("stop",{offset:"50%",stopColor:"#FF2EDB"}),ce.jsx("stop",{offset:"100%",stopColor:"#FF6BFF"})]})}),ce.jsxs("g",{children:[ce.jsx("path",{stroke:"url(#cyberStroke)",strokeLinecap:"round",strokeLinejoin:"round",d:"m0.5 4 5.93079 4.10593c0.34245 0.23708 0.79598 0.23708 1.13842 0L13.5 4",strokeWidth:"1"}),ce.jsx("path",{stroke:"url(#cyberStroke)",strokeLinecap:"round",strokeLinejoin:"round",d:"M0.5 11.5v-9c0 -0.55228 0.447715 -1 1 -1h11c0.5523 0 1 0.44771 1 1v9c0 0.5523 -0.4477 1 -1 1h-11c-0.552285 0 -1 -0.4477 -1 -1Z",strokeWidth:"1"})]})]})}),ce.jsxs("div",{className:"flex flex-col",children:[ce.jsx("span",{className:"text-xs text-cyber-muted tracking-wide uppercase",children:"Email"}),ce.jsx("a",{href:"mailto:info@example.com",className:`\r
										font-semibold text-cyber-text text-lg\r
\r
										bg-gradient-to-r from-cyber-purple via-cyber-accent to-cyber-glow\r
										bg-clip-text\r
										bg-[length:0%_100%] bg-no-repeat\r
										hover:bg-[length:100%_100%]\r
										hover:text-transparent\r
\r
										transition-[background-size,color] duration-300\r
										`,children:"info@mtrx-studio.com"})]})]})})})]}),ce.jsxs("form",{ref:s,onSubmit:l,className:`\r
						w-full max-w-2xl mx-auto\r
						rounded-2xl border border-cyber-border\r
						bg-cyber-surface/60 backdrop-blur-xl\r
						p-6 md:p-8\r
						space-y-5\r
						shadow-[0_0_30px_rgba(0,0,0,0.25)]\r
						`,children:[ce.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[ce.jsxs("div",{className:"relative",children:[ce.jsx("input",{type:"text",id:"first_name",name:"user_first_name",placeholder:" ",required:!0,className:`\r
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
									`}),ce.jsx("label",{htmlFor:"first_name",className:`\r
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
									`,children:"First name"})]}),ce.jsxs("div",{className:"relative",children:[ce.jsx("input",{type:"text",id:"last_name",name:"user_last_name",placeholder:" ",required:!0,className:`\r
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
									`}),ce.jsx("label",{htmlFor:"last_name",className:`\r
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
									`,children:"Last name"})]})]}),ce.jsxs("div",{className:"relative",children:[ce.jsx("input",{type:"email",id:"email",name:"user_email",placeholder:" ",required:!0,className:`\r
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
								`}),ce.jsx("label",{htmlFor:"email",className:`\r
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
								`,children:"Email address"})]}),ce.jsxs("div",{className:"relative",children:[ce.jsx("input",{type:"tel",id:"phone",name:"user_tel",placeholder:" ",required:!0,className:`\r
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
								`}),ce.jsx("label",{htmlFor:"phone",className:`\r
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
								`,children:"Phone number"})]}),ce.jsxs("div",{className:"relative",children:[ce.jsx("textarea",{id:"message",name:"message",placeholder:" ",rows:"6",required:!0,className:`\r
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
								`}),ce.jsx("label",{htmlFor:"message",className:`\r
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
								`,children:"Tell us about your project"})]}),ce.jsx(jf,{variant:"primary",type:"submit",id:"contact-submit",disabled:e,className:"w-full !mt-2",children:r})]})]})})}const qd="183",vx=0,Bm=1,_x=2,nc=1,xx=2,Ko=3,Ir=0,Fn=1,bi=2,Qi=0,Ks=1,Yf=2,zm=3,Vm=4,yx=5,is=100,Sx=101,Mx=102,Ex=103,Tx=104,wx=200,Ax=201,bx=202,Cx=203,qf=204,Zf=205,Rx=206,Px=207,Lx=208,Nx=209,Dx=210,Ix=211,Ux=212,Fx=213,Ox=214,$f=0,Kf=1,Jf=2,eo=3,Qf=4,ed=5,td=6,nd=7,d0=0,kx=1,Bx=2,Pi=0,h0=1,p0=2,m0=3,g0=4,v0=5,_0=6,x0=7,y0=300,ls=301,to=302,uf=303,ff=304,gc=306,id=1e3,Ji=1001,rd=1002,hn=1003,zx=1004,wl=1005,yn=1006,df=1007,ss=1008,si=1009,S0=1010,M0=1011,ra=1012,Zd=1013,Di=1014,Ci=1015,tr=1016,$d=1017,Kd=1018,sa=1020,E0=35902,T0=35899,w0=1021,A0=1022,_i=1023,nr=1026,os=1027,b0=1028,Jd=1029,no=1030,Qd=1031,eh=1033,ic=33776,rc=33777,sc=33778,oc=33779,sd=35840,od=35841,ad=35842,ld=35843,cd=36196,ud=37492,fd=37496,dd=37488,hd=37489,pd=37490,md=37491,gd=37808,vd=37809,_d=37810,xd=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,Td=37816,wd=37817,Ad=37818,bd=37819,Cd=37820,Rd=37821,Pd=36492,Ld=36494,Nd=36495,Dd=36283,Id=36284,Ud=36285,Fd=36286,Vx=3200,Hx=0,Gx=1,Nr="",ii="srgb",io="srgb-linear",cc="linear",Ut="srgb",Us=7680,Hm=519,Wx=512,Xx=513,jx=514,th=515,Yx=516,qx=517,nh=518,Zx=519,Gm=35044,Wm="300 es",Ri=2e3,uc=2001;function $x(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function fc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kx(){const s=fc("canvas");return s.style.display="block",s}const Xm={};function jm(...s){const e="THREE."+s.shift();console.log(e,...s)}function C0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=C0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ct(...s){s=C0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function dc(...s){const e=s.join(" ");e in Xm||(Xm[e]=!0,dt(...s))}function Jx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const Qx={[$f]:Kf,[Jf]:td,[Qf]:nd,[eo]:ed,[Kf]:$f,[td]:Jf,[nd]:Qf,[ed]:eo};class oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ym=1234567;const Js=Math.PI/180,oa=180/Math.PI;function us(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function ih(s,e){return(s%e+e)%e}function ey(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function ty(s,e,t){return s!==e?(t-s)/(e-s):0}function ea(s,e,t){return(1-t)*s+t*e}function ny(s,e,t,r){return ea(s,e,1-Math.exp(-t*r))}function iy(s,e=1){return e-Math.abs(ih(s,e*2)-e)}function ry(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function sy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function oy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ay(s,e){return s+Math.random()*(e-s)}function ly(s){return s*(.5-Math.random())}function cy(s){s!==void 0&&(Ym=s);let e=Ym+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function uy(s){return s*Js}function fy(s){return s*oa}function dy(s){return(s&s-1)===0&&s!==0}function hy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function py(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function my(s,e,t,r,o){const l=Math.cos,u=Math.sin,f=l(t/2),p=u(t/2),h=l((e+r)/2),v=u((e+r)/2),_=l((e-r)/2),m=u((e-r)/2),S=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":s.set(f*v,p*_,p*m,f*h);break;case"YZY":s.set(p*m,f*v,p*_,f*h);break;case"ZXZ":s.set(p*_,p*m,f*v,f*h);break;case"XZX":s.set(f*v,p*M,p*S,f*h);break;case"YXY":s.set(p*S,f*v,p*M,f*h);break;case"ZYZ":s.set(p*M,p*S,f*v,f*h);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Zs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $t={DEG2RAD:Js,RAD2DEG:oa,generateUUID:us,clamp:Mt,euclideanModulo:ih,mapLinear:ey,inverseLerp:ty,lerp:ea,damp:ny,pingpong:iy,smoothstep:ry,smootherstep:sy,randInt:oy,randFloat:ay,randFloatSpread:ly,seededRandom:cy,degToRad:uy,radToDeg:fy,isPowerOfTwo:dy,ceilPowerOfTwo:hy,floorPowerOfTwo:py,setQuaternionFromProperEuler:my,normalize:wn,denormalize:Zs};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ao{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let p=r[o+0],h=r[o+1],v=r[o+2],_=r[o+3],m=l[u+0],S=l[u+1],M=l[u+2],A=l[u+3];if(_!==A||p!==m||h!==S||v!==M){let y=p*m+h*S+v*M+_*A;y<0&&(m=-m,S=-S,M=-M,A=-A,y=-y);let x=1-f;if(y<.9995){const C=Math.acos(y),P=Math.sin(C);x=Math.sin(x*C)/P,f=Math.sin(f*C)/P,p=p*x+m*f,h=h*x+S*f,v=v*x+M*f,_=_*x+A*f}else{p=p*x+m*f,h=h*x+S*f,v=v*x+M*f,_=_*x+A*f;const C=1/Math.sqrt(p*p+h*h+v*v+_*_);p*=C,h*=C,v*=C,_*=C}}e[t]=p,e[t+1]=h,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],p=r[o+1],h=r[o+2],v=r[o+3],_=l[u],m=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+v*_+p*S-h*m,e[t+1]=p*M+v*m+h*_-f*S,e[t+2]=h*M+v*S+f*m-p*_,e[t+3]=v*M-f*_-p*m-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,p=Math.sin,h=f(r/2),v=f(o/2),_=f(l/2),m=p(r/2),S=p(o/2),M=p(l/2);switch(u){case"XYZ":this._x=m*v*_+h*S*M,this._y=h*S*_-m*v*M,this._z=h*v*M+m*S*_,this._w=h*v*_-m*S*M;break;case"YXZ":this._x=m*v*_+h*S*M,this._y=h*S*_-m*v*M,this._z=h*v*M-m*S*_,this._w=h*v*_+m*S*M;break;case"ZXY":this._x=m*v*_-h*S*M,this._y=h*S*_+m*v*M,this._z=h*v*M+m*S*_,this._w=h*v*_-m*S*M;break;case"ZYX":this._x=m*v*_-h*S*M,this._y=h*S*_+m*v*M,this._z=h*v*M-m*S*_,this._w=h*v*_+m*S*M;break;case"YZX":this._x=m*v*_+h*S*M,this._y=h*S*_+m*v*M,this._z=h*v*M-m*S*_,this._w=h*v*_-m*S*M;break;case"XZY":this._x=m*v*_-h*S*M,this._y=h*S*_-m*v*M,this._z=h*v*M+m*S*_,this._w=h*v*_+m*S*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],p=t[9],h=t[2],v=t[6],_=t[10],m=r+f+_;if(m>0){const S=.5/Math.sqrt(m+1);this._w=.25/S,this._x=(v-p)*S,this._y=(l-h)*S,this._z=(u-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(v-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+h)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-h)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(u-o)/S,this._x=(l+h)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,p=t._y,h=t._z,v=t._w;return this._x=r*v+u*f+o*h-l*p,this._y=o*v+u*p+l*f-r*h,this._z=l*v+u*h+r*p-o*f,this._w=u*v-r*f-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let p=1-t;if(f<.9995){const h=Math.acos(f),v=Math.sin(h);p=Math.sin(p*h)/v,t=Math.sin(t*h)/v,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,p=e.w,h=2*(u*o-f*r),v=2*(f*t-l*o),_=2*(l*r-u*t);return this.x=t+p*h+u*_-f*v,this.y=r+p*v+f*h-l*_,this.z=o+p*_+l*v-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*u-r*p,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new X,qm=new ao;class xt{constructor(e,t,r,o,l,u,f,p,h){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h)}set(e,t,r,o,l,u,f,p,h){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],p=r[6],h=r[1],v=r[4],_=r[7],m=r[2],S=r[5],M=r[8],A=o[0],y=o[3],x=o[6],C=o[1],P=o[4],R=o[7],B=o[2],I=o[5],O=o[8];return l[0]=u*A+f*C+p*B,l[3]=u*y+f*P+p*I,l[6]=u*x+f*R+p*O,l[1]=h*A+v*C+_*B,l[4]=h*y+v*P+_*I,l[7]=h*x+v*R+_*O,l[2]=m*A+S*C+M*B,l[5]=m*y+S*P+M*I,l[8]=m*x+S*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8];return t*u*v-t*f*h-r*l*v+r*f*p+o*l*h-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8],_=v*u-f*h,m=f*p-v*l,S=h*l-u*p,M=t*_+r*m+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(o*h-v*r)*A,e[2]=(f*r-o*u)*A,e[3]=m*A,e[4]=(v*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=S*A,e[7]=(r*p-h*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const p=Math.cos(l),h=Math.sin(l);return this.set(r*p,r*h,-r*(p*u+h*f)+u+e,-o*h,o*p,-o*(-h*u+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(pf.makeScale(e,t)),this}rotate(e){return this.premultiply(pf.makeRotation(-e)),this}translate(e,t){return this.premultiply(pf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pf=new xt,Zm=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$m=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gy(){const s={enabled:!0,workingColorSpace:io,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ut&&(o.r=er(o.r),o.g=er(o.g),o.b=er(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=Qs(o.r),o.g=Qs(o.g),o.b=Qs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?cc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return dc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return dc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[io]:{primaries:e,whitePoint:r,transfer:cc,toXYZ:Zm,fromXYZ:$m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Zm,fromXYZ:$m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),s}const Rt=gy();function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Fs;class vy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Fs===void 0&&(Fs=fc("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Fs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=er(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(er(t[r]/255)*255):t[r]=er(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _y=0;class rh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(mf(o[u].image)):l.push(mf(o[u]))}else l=mf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function mf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let xy=0;const gf=new X;class bn extends oo{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,r=Ji,o=Ji,l=yn,u=ss,f=_i,p=si,h=bn.DEFAULT_ANISOTROPY,v=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=us(),this.name="",this.source=new rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=y0;bn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,t=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,h=p[0],v=p[4],_=p[8],m=p[1],S=p[5],M=p[9],A=p[2],y=p[6],x=p[10];if(Math.abs(v-m)<.01&&Math.abs(_-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+m)<.1&&Math.abs(_+A)<.1&&Math.abs(M+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(S+1)/2,B=(x+1)/2,I=(v+m)/4,O=(_+A)/4,w=(M+y)/4;return P>R&&P>B?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=I/r,l=O/r):R>B?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=I/o,l=w/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=O/l,o=w/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-M)*(y-M)+(_-A)*(_-A)+(m-v)*(m-v));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(_-A)/C,this.z=(m-v)/C,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yy extends oo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new bn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new rh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends yy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class R0 extends bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sy extends bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e,t,r,o,l,u,f,p,h,v,_,m,S,M,A,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,p,h,v,_,m,S,M,A,y)}set(e,t,r,o,l,u,f,p,h,v,_,m,S,M,A,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=u,x[9]=f,x[13]=p,x[2]=h,x[6]=v,x[10]=_,x[14]=m,x[3]=S,x[7]=M,x[11]=A,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),u=1/Os.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),p=Math.cos(o),h=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const m=u*v,S=u*_,M=f*v,A=f*_;t[0]=p*v,t[4]=-p*_,t[8]=h,t[1]=S+M*h,t[5]=m-A*h,t[9]=-f*p,t[2]=A-m*h,t[6]=M+S*h,t[10]=u*p}else if(e.order==="YXZ"){const m=p*v,S=p*_,M=h*v,A=h*_;t[0]=m+A*f,t[4]=M*f-S,t[8]=u*h,t[1]=u*_,t[5]=u*v,t[9]=-f,t[2]=S*f-M,t[6]=A+m*f,t[10]=u*p}else if(e.order==="ZXY"){const m=p*v,S=p*_,M=h*v,A=h*_;t[0]=m-A*f,t[4]=-u*_,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*v,t[9]=A-m*f,t[2]=-u*h,t[6]=f,t[10]=u*p}else if(e.order==="ZYX"){const m=u*v,S=u*_,M=f*v,A=f*_;t[0]=p*v,t[4]=M*h-S,t[8]=m*h+A,t[1]=p*_,t[5]=A*h+m,t[9]=S*h-M,t[2]=-h,t[6]=f*p,t[10]=u*p}else if(e.order==="YZX"){const m=u*p,S=u*h,M=f*p,A=f*h;t[0]=p*v,t[4]=A-m*_,t[8]=M*_+S,t[1]=_,t[5]=u*v,t[9]=-f*v,t[2]=-h*v,t[6]=S*_+M,t[10]=m-A*_}else if(e.order==="XZY"){const m=u*p,S=u*h,M=f*p,A=f*h;t[0]=p*v,t[4]=-_,t[8]=h*v,t[1]=m*_+A,t[5]=u*v,t[9]=S*_-M,t[2]=M*_-S,t[6]=f*v,t[10]=A*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(My,e,Ey)}lookAt(e,t,r){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),wr.crossVectors(r,Gn),wr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),wr.crossVectors(r,Gn)),wr.normalize(),Al.crossVectors(Gn,wr),o[0]=wr.x,o[4]=Al.x,o[8]=Gn.x,o[1]=wr.y,o[5]=Al.y,o[9]=Gn.y,o[2]=wr.z,o[6]=Al.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],p=r[8],h=r[12],v=r[1],_=r[5],m=r[9],S=r[13],M=r[2],A=r[6],y=r[10],x=r[14],C=r[3],P=r[7],R=r[11],B=r[15],I=o[0],O=o[4],w=o[8],L=o[12],ae=o[1],k=o[5],ne=o[9],J=o[13],re=o[2],Z=o[6],$=o[10],V=o[14],q=o[3],ee=o[7],se=o[11],F=o[15];return l[0]=u*I+f*ae+p*re+h*q,l[4]=u*O+f*k+p*Z+h*ee,l[8]=u*w+f*ne+p*$+h*se,l[12]=u*L+f*J+p*V+h*F,l[1]=v*I+_*ae+m*re+S*q,l[5]=v*O+_*k+m*Z+S*ee,l[9]=v*w+_*ne+m*$+S*se,l[13]=v*L+_*J+m*V+S*F,l[2]=M*I+A*ae+y*re+x*q,l[6]=M*O+A*k+y*Z+x*ee,l[10]=M*w+A*ne+y*$+x*se,l[14]=M*L+A*J+y*V+x*F,l[3]=C*I+P*ae+R*re+B*q,l[7]=C*O+P*k+R*Z+B*ee,l[11]=C*w+P*ne+R*$+B*se,l[15]=C*L+P*J+R*V+B*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],p=e[9],h=e[13],v=e[2],_=e[6],m=e[10],S=e[14],M=e[3],A=e[7],y=e[11],x=e[15],C=p*S-h*m,P=f*S-h*_,R=f*m-p*_,B=u*S-h*v,I=u*m-p*v,O=u*_-f*v;return t*(A*C-y*P+x*R)-r*(M*C-y*B+x*I)+o*(M*P-A*B+x*O)-l*(M*R-A*I+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],p=e[6],h=e[7],v=e[8],_=e[9],m=e[10],S=e[11],M=e[12],A=e[13],y=e[14],x=e[15],C=t*f-r*u,P=t*p-o*u,R=t*h-l*u,B=r*p-o*f,I=r*h-l*f,O=o*h-l*p,w=v*A-_*M,L=v*y-m*M,ae=v*x-S*M,k=_*y-m*A,ne=_*x-S*A,J=m*x-S*y,re=C*J-P*ne+R*k+B*ae-I*L+O*w;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/re;return e[0]=(f*J-p*ne+h*k)*Z,e[1]=(o*ne-r*J-l*k)*Z,e[2]=(A*O-y*I+x*B)*Z,e[3]=(m*I-_*O-S*B)*Z,e[4]=(p*ae-u*J-h*L)*Z,e[5]=(t*J-o*ae+l*L)*Z,e[6]=(y*R-M*O-x*P)*Z,e[7]=(v*O-m*R+S*P)*Z,e[8]=(u*ne-f*ae+h*w)*Z,e[9]=(r*ae-t*ne-l*w)*Z,e[10]=(M*I-A*R+x*C)*Z,e[11]=(_*R-v*I-S*C)*Z,e[12]=(f*L-u*k-p*w)*Z,e[13]=(t*k-r*L+o*w)*Z,e[14]=(A*P-M*B-y*C)*Z,e[15]=(v*B-_*P+m*C)*Z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,p=e.z,h=l*u,v=l*f;return this.set(h*u+r,h*f-o*p,h*p+o*f,0,h*f+o*p,v*f+r,v*p-o*u,0,h*p-o*f,v*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,p=t._w,h=l+l,v=u+u,_=f+f,m=l*h,S=l*v,M=l*_,A=u*v,y=u*_,x=f*_,C=p*h,P=p*v,R=p*_,B=r.x,I=r.y,O=r.z;return o[0]=(1-(A+x))*B,o[1]=(S+R)*B,o[2]=(M-P)*B,o[3]=0,o[4]=(S-R)*I,o[5]=(1-(m+x))*I,o[6]=(y+C)*I,o[7]=0,o[8]=(M+P)*O,o[9]=(y-C)*O,o[10]=(1-(m+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Os.set(o[0],o[1],o[2]).length();const f=Os.set(o[4],o[5],o[6]).length(),p=Os.set(o[8],o[9],o[10]).length();l<0&&(u=-u),pi.copy(this);const h=1/u,v=1/f,_=1/p;return pi.elements[0]*=h,pi.elements[1]*=h,pi.elements[2]*=h,pi.elements[4]*=v,pi.elements[5]*=v,pi.elements[6]*=v,pi.elements[8]*=_,pi.elements[9]*=_,pi.elements[10]*=_,t.setFromRotationMatrix(pi),r.x=u,r.y=f,r.z=p,this}makePerspective(e,t,r,o,l,u,f=Ri,p=!1){const h=this.elements,v=2*l/(t-e),_=2*l/(r-o),m=(t+e)/(t-e),S=(r+o)/(r-o);let M,A;if(p)M=l/(u-l),A=u*l/(u-l);else if(f===Ri)M=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===uc)M=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Ri,p=!1){const h=this.elements,v=2/(t-e),_=2/(r-o),m=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,A;if(p)M=1/(u-l),A=u/(u-l);else if(f===Ri)M=-2/(u-l),A=-(u+l)/(u-l);else if(f===uc)M=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=v,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Os=new X,pi=new jt,My=new X(0,0,0),Ey=new X(1,1,1),wr=new X,Al=new X,Gn=new X,Km=new jt,Jm=new ao;class ir{constructor(e=0,t=0,r=0,o=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],p=o[1],h=o[5],v=o[9],_=o[2],m=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class P0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ty=0;const Qm=new X,ks=new ao,ji=new jt,bl=new X,Wo=new X,wy=new X,Ay=new ao,eg=new X(1,0,0),tg=new X(0,1,0),ng=new X(0,0,1),ig={type:"added"},by={type:"removed"},Bs={type:"childadded",child:null},vf={type:"childremoved",child:null};class On extends oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new X,t=new ir,r=new ao,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new xt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(eg,e)}rotateY(e){return this.rotateOnAxis(tg,e)}rotateZ(e){return this.rotateOnAxis(ng,e)}translateOnAxis(e,t){return Qm.copy(e).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eg,e)}translateY(e){return this.translateOnAxis(tg,e)}translateZ(e){return this.translateOnAxis(ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bl.copy(e):bl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Wo,bl,this.up):ji.lookAt(bl,Wo,this.up),this.quaternion.setFromRotationMatrix(ji),o&&(ji.extractRotation(o.matrixWorld),ks.setFromRotationMatrix(ji),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ig),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(by),vf.child=e,this.dispatchEvent(vf),vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ig),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,Ay,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let h=0,v=p.length;h<v;h++){const _=p[h];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,h=this.material.length;p<h;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=u(e.geometries),p=u(e.materials),h=u(e.textures),v=u(e.images),_=u(e.shapes),m=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),m.length>0&&(r.skeletons=m),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const p=[];for(const h in f){const v=f[h];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}On.DEFAULT_UP=new X(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $s extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cy={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),x=this._getHandJoint(h,A);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],m=v.position.distanceTo(_.position),S=.02,M=.005;h.inputState.pinching&&m>S+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=S-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Cy)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function xf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=ih(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=xf(u,l,e+1/3),this.g=xf(u,l,e),this.b=xf(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=ii){function r(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const r=L0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Rt.workingToColorSpace(xn.copy(this),e),Math.round(Mt(xn.r*255,0,255))*65536+Math.round(Mt(xn.g*255,0,255))*256+Math.round(Mt(xn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let p,h;const v=(f+u)/2;if(f===u)p=0,h=0;else{const _=u-f;switch(h=v<=.5?_/(u+f):_/(2-u-f),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ii){Rt.workingToColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(Cl);const r=ea(Ar.h,Cl.h,t),o=ea(Ar.s,Cl.s,t),l=ea(Ar.l,Cl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new wt;wt.NAMES=L0;class Ry extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const mi=new X,Yi=new X,yf=new X,qi=new X,zs=new X,Vs=new X,rg=new X,Sf=new X,Mf=new X,Ef=new X,Tf=new Kt,wf=new Kt,Af=new Kt;class oi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),mi.subVectors(e,t),o.cross(mi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){mi.subVectors(o,t),Yi.subVectors(r,t),yf.subVectors(e,t);const u=mi.dot(mi),f=mi.dot(Yi),p=mi.dot(yf),h=Yi.dot(Yi),v=Yi.dot(yf),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const m=1/_,S=(h*p-f*v)*m,M=(u*v-f*p)*m;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,r,o,l,u,f,p){return this.getBarycoord(e,t,r,o,qi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,qi.x),p.addScaledVector(u,qi.y),p.addScaledVector(f,qi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return Tf.setScalar(0),wf.setScalar(0),Af.setScalar(0),Tf.fromBufferAttribute(e,t),wf.fromBufferAttribute(e,r),Af.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Tf,l.x),u.addScaledVector(wf,l.y),u.addScaledVector(Af,l.z),u}static isFrontFacing(e,t,r,o){return mi.subVectors(r,t),Yi.subVectors(e,t),mi.cross(Yi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),mi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;zs.subVectors(o,r),Vs.subVectors(l,r),Sf.subVectors(e,r);const p=zs.dot(Sf),h=Vs.dot(Sf);if(p<=0&&h<=0)return t.copy(r);Mf.subVectors(e,o);const v=zs.dot(Mf),_=Vs.dot(Mf);if(v>=0&&_<=v)return t.copy(o);const m=p*_-v*h;if(m<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(r).addScaledVector(zs,u);Ef.subVectors(e,l);const S=zs.dot(Ef),M=Vs.dot(Ef);if(M>=0&&S<=M)return t.copy(l);const A=S*h-p*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(Vs,f);const y=v*M-S*_;if(y<=0&&_-v>=0&&S-M>=0)return rg.subVectors(l,o),f=(_-v)/(_-v+(S-M)),t.copy(o).addScaledVector(rg,f);const x=1/(y+A+m);return u=A*x,f=m*x,t.copy(r).addScaledVector(zs,u).addScaledVector(Vs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Pl.subVectors(this.max,Xo),Hs.subVectors(e.a,Xo),Gs.subVectors(e.b,Xo),Ws.subVectors(e.c,Xo),br.subVectors(Gs,Hs),Cr.subVectors(Ws,Gs),$r.subVectors(Hs,Ws);let t=[0,-br.z,br.y,0,-Cr.z,Cr.y,0,-$r.z,$r.y,br.z,0,-br.x,Cr.z,0,-Cr.x,$r.z,0,-$r.x,-br.y,br.x,0,-Cr.y,Cr.x,0,-$r.y,$r.x,0];return!bf(t,Hs,Gs,Ws,Pl)||(t=[1,0,0,0,1,0,0,0,1],!bf(t,Hs,Gs,Ws,Pl))?!1:(Ll.crossVectors(br,Cr),t=[Ll.x,Ll.y,Ll.z],bf(t,Hs,Gs,Ws,Pl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zi=[new X,new X,new X,new X,new X,new X,new X,new X],gi=new X,Rl=new da,Hs=new X,Gs=new X,Ws=new X,br=new X,Cr=new X,$r=new X,Xo=new X,Pl=new X,Ll=new X,Kr=new X;function bf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Kr.fromArray(s,l);const f=o.x*Math.abs(Kr.x)+o.y*Math.abs(Kr.y)+o.z*Math.abs(Kr.z),p=e.dot(Kr),h=t.dot(Kr),v=r.dot(Kr);if(Math.max(-Math.max(p,h,v),Math.min(p,h,v))>f)return!1}return!0}const Qt=new X,Nl=new Ge;let Py=0;class Ni{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Py++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Gm,this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Zs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),r=wn(r,this.array),o=wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),r=wn(r,this.array),o=wn(o,this.array),l=wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gm&&(e.usage=this.usage),e}}class N0 extends Ni{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class D0 extends Ni{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class cn extends Ni{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Ly=new da,jo=new X,Cf=new X;class vc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Ly.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(jo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Cf)),this.expandByPoint(jo.copy(e.center).sub(Cf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ny=0;const ni=new jt,Rf=new On,Xs=new X,Wn=new da,Yo=new da,ln=new X;class jn extends oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($x(e)?D0:N0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new cn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Yo.setFromBufferAttribute(f),this.morphTargetsRelative?(ln.addVectors(Wn.min,Yo.min),Wn.expandByPoint(ln),ln.addVectors(Wn.max,Yo.max),Wn.expandByPoint(ln)):(Wn.expandByPoint(Yo.min),Wn.expandByPoint(Yo.max))}Wn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],p=this.morphTargetsRelative;for(let h=0,v=f.count;h<v;h++)ln.fromBufferAttribute(f,h),p&&(Xs.fromBufferAttribute(e,h),ln.add(Xs)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let w=0;w<r.count;w++)f[w]=new X,p[w]=new X;const h=new X,v=new X,_=new X,m=new Ge,S=new Ge,M=new Ge,A=new X,y=new X;function x(w,L,ae){h.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,ae),m.fromBufferAttribute(l,w),S.fromBufferAttribute(l,L),M.fromBufferAttribute(l,ae),v.sub(h),_.sub(h),S.sub(m),M.sub(m);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(A.copy(v).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(k),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(k),f[w].add(A),f[L].add(A),f[ae].add(A),p[w].add(y),p[L].add(y),p[ae].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,L=C.length;w<L;++w){const ae=C[w],k=ae.start,ne=ae.count;for(let J=k,re=k+ne;J<re;J+=3)x(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new X,R=new X,B=new X,I=new X;function O(w){B.fromBufferAttribute(o,w),I.copy(B);const L=f[w];P.copy(L),P.sub(B.multiplyScalar(B.dot(L))).normalize(),R.crossVectors(I,L);const k=R.dot(p[w])<0?-1:1;u.setXYZW(w,P.x,P.y,P.z,k)}for(let w=0,L=C.length;w<L;++w){const ae=C[w],k=ae.start,ne=ae.count;for(let J=k,re=k+ne;J<re;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,S=r.count;m<S;m++)r.setXYZ(m,0,0,0);const o=new X,l=new X,u=new X,f=new X,p=new X,h=new X,v=new X,_=new X;if(e)for(let m=0,S=e.count;m<S;m+=3){const M=e.getX(m+0),A=e.getX(m+1),y=e.getX(m+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,y),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),f.add(v),p.add(v),h.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,S=t.count;m<S;m+=3)o.fromBufferAttribute(t,m+0),l.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(m+0,v.x,v.y,v.z),r.setXYZ(m+1,v.x,v.y,v.z),r.setXYZ(m+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(f,p){const h=f.array,v=f.itemSize,_=f.normalized,m=new h.constructor(p.length*v);let S=0,M=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?S=p[A]*f.data.stride+f.offset:S=p[A]*v;for(let x=0;x<v;x++)m[M++]=h[S++]}return new Ni(m,v,_)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],h=e(p,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const p=[],h=l[f];for(let v=0,_=h.length;v<_;v++){const m=h[v],S=e(m,r);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],v=[];for(let _=0,m=h.length;_<m;_++){const S=h[_];v.push(S.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const v=o[h];this.setAttribute(h,v.clone(t))}const l=e.morphAttributes;for(const h in l){const v=[],_=l[h];for(let m=0,S=_.length;m<S;m++)v.push(_[m].clone(t));this.morphAttributes[h]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,v=u.length;h<v;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Dy=0;class ha extends oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Ks,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Zf,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(r.blending=this.blending),this.side!==Ir&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qf&&(r.blendSrc=this.blendSrc),this.blendDst!==Zf&&(r.blendDst=this.blendDst),this.blendEquation!==is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new X,Pf=new X,Dl=new X,Rr=new X,Lf=new X,Il=new X,Nf=new X;class I0{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Pf.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Pf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Dl),f=Rr.dot(this.direction),p=-Rr.dot(Dl),h=Rr.lengthSq(),v=Math.abs(1-u*u);let _,m,S,M;if(v>0)if(_=u*p-f,m=u*f-p,M=l*v,_>=0)if(m>=-M)if(m<=M){const A=1/v;_*=A,m*=A,S=_*(_+u*m+2*f)+m*(u*_+m+2*p)+h}else m=l,_=Math.max(0,-(u*m+f)),S=-_*_+m*(m+2*p)+h;else m=-l,_=Math.max(0,-(u*m+f)),S=-_*_+m*(m+2*p)+h;else m<=-M?(_=Math.max(0,-(-u*l+f)),m=_>0?-l:Math.min(Math.max(-l,-p),l),S=-_*_+m*(m+2*p)+h):m<=M?(_=0,m=Math.min(Math.max(-l,-p),l),S=m*(m+2*p)+h):(_=Math.max(0,-(u*l+f)),m=_>0?l:Math.min(Math.max(-l,-p),l),S=-_*_+m*(m+2*p)+h);else m=u>0?-l:l,_=Math.max(0,-(u*m+f)),S=-_*_+m*(m+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Pf).addScaledVector(Dl,m),S}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,p=r+u;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,p;const h=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),v>=0?(l=(e.min.y-m.y)*v,u=(e.max.y-m.y)*v):(l=(e.max.y-m.y)*v,u=(e.min.y-m.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(f=(e.min.z-m.z)*_,p=(e.max.z-m.z)*_):(f=(e.max.z-m.z)*_,p=(e.min.z-m.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){Lf.subVectors(t,e),Il.subVectors(r,e),Nf.crossVectors(Lf,Il);let u=this.direction.dot(Nf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Rr.subVectors(this.origin,e);const p=f*this.direction.dot(Il.crossVectors(Rr,Il));if(p<0)return null;const h=f*this.direction.dot(Lf.cross(Rr));if(h<0||p+h>u)return null;const v=-f*Rr.dot(Nf);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ta extends ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sg=new jt,Jr=new I0,Ul=new vc,og=new X,Fl=new X,Ol=new X,kl=new X,Df=new X,Bl=new X,ag=new X,zl=new X;class Xn extends On{constructor(e=new jn,t=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Bl.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const v=f[p],_=l[p];v!==0&&(Df.fromBufferAttribute(_,e),u?Bl.addScaledVector(Df,v):Bl.addScaledVector(Df.sub(t),v))}t.add(Bl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Ul,og)===null||Jr.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(sg.copy(l).invert(),Jr.copy(e.ray).applyMatrix4(sg),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,h=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,m=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const y=m[M],x=u[y.materialIndex],C=Math.max(y.start,S.start),P=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let R=C,B=P;R<B;R+=3){const I=f.getX(R),O=f.getX(R+1),w=f.getX(R+2);o=Vl(this,x,e,r,h,v,_,I,O,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(f.count,S.start+S.count);for(let y=M,x=A;y<x;y+=3){const C=f.getX(y),P=f.getX(y+1),R=f.getX(y+2);o=Vl(this,u,e,r,h,v,_,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const y=m[M],x=u[y.materialIndex],C=Math.max(y.start,S.start),P=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let R=C,B=P;R<B;R+=3){const I=R,O=R+1,w=R+2;o=Vl(this,x,e,r,h,v,_,I,O,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=M,x=A;y<x;y+=3){const C=y,P=y+1,R=y+2;o=Vl(this,u,e,r,h,v,_,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Iy(s,e,t,r,o,l,u,f){let p;if(e.side===Fn?p=r.intersectTriangle(u,l,o,!0,f):p=r.intersectTriangle(o,l,u,e.side===Ir,f),p===null)return null;zl.copy(f),zl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(zl);return h<t.near||h>t.far?null:{distance:h,point:zl.clone(),object:s}}function Vl(s,e,t,r,o,l,u,f,p,h){s.getVertexPosition(f,Fl),s.getVertexPosition(p,Ol),s.getVertexPosition(h,kl);const v=Iy(s,e,t,r,Fl,Ol,kl,ag);if(v){const _=new X;oi.getBarycoord(ag,Fl,Ol,kl,_),o&&(v.uv=oi.getInterpolatedAttribute(o,f,p,h,_,new Ge)),l&&(v.uv1=oi.getInterpolatedAttribute(l,f,p,h,_,new Ge)),u&&(v.normal=oi.getInterpolatedAttribute(u,f,p,h,_,new X),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const m={a:f,b:p,c:h,normal:new X,materialIndex:0};oi.getNormal(Fl,Ol,kl,m.normal),v.face=m,v.barycoord=_}return v}class Uy extends bn{constructor(e=null,t=1,r=1,o,l,u,f,p,h=hn,v=hn,_,m){super(null,u,f,p,h,v,o,l,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const If=new X,Fy=new X,Oy=new xt;class ns{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=If.subVectors(r,t).cross(Fy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(If),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Oy.getNormalMatrix(e),o=this.coplanarPoint(If).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new vc,ky=new Ge(.5,.5),Hl=new X;class U0{constructor(e=new ns,t=new ns,r=new ns,o=new ns,l=new ns,u=new ns){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ri,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],p=l[2],h=l[3],v=l[4],_=l[5],m=l[6],S=l[7],M=l[8],A=l[9],y=l[10],x=l[11],C=l[12],P=l[13],R=l[14],B=l[15];if(o[0].setComponents(h-u,S-v,x-M,B-C).normalize(),o[1].setComponents(h+u,S+v,x+M,B+C).normalize(),o[2].setComponents(h+f,S+_,x+A,B+P).normalize(),o[3].setComponents(h-f,S-_,x-A,B-P).normalize(),r)o[4].setComponents(p,m,y,R).normalize(),o[5].setComponents(h-p,S-m,x-y,B-R).normalize();else if(o[4].setComponents(h-p,S-m,x-y,B-R).normalize(),t===Ri)o[5].setComponents(h+p,S+m,x+y,B+R).normalize();else if(t===uc)o[5].setComponents(p,m,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const t=ky.distanceTo(e.center);return Qr.radius=.7071067811865476+t,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Hl.x=o.normal.x>0?e.max.x:e.min.x,Hl.y=o.normal.y>0?e.max.y:e.min.y,Hl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class F0 extends ha{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hc=new X,pc=new X,lg=new jt,qo=new I0,Gl=new vc,Uf=new X,cg=new X;class By extends On{constructor(e=new jn,t=new F0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)hc.fromBufferAttribute(t,o-1),pc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=hc.distanceTo(pc);e.setAttribute("lineDistance",new cn(r,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;lg.copy(o).invert(),qo.copy(e.ray).applyMatrix4(lg);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,h=this.isLineSegments?2:1,v=r.index,m=r.attributes.position;if(v!==null){const S=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let A=S,y=M-1;A<y;A+=h){const x=v.getX(A),C=v.getX(A+1),P=Wl(this,e,qo,p,x,C,A);P&&t.push(P)}if(this.isLineLoop){const A=v.getX(M-1),y=v.getX(S),x=Wl(this,e,qo,p,A,y,M-1);x&&t.push(x)}}else{const S=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let A=S,y=M-1;A<y;A+=h){const x=Wl(this,e,qo,p,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Wl(this,e,qo,p,M-1,S,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Wl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(hc.fromBufferAttribute(f,o),pc.fromBufferAttribute(f,l),t.distanceSqToSegment(hc,pc,Uf,cg)>r)return;Uf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Uf);if(!(h<e.near||h>e.far))return{distance:h,point:cg.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const ug=new X,fg=new X;class zy extends By{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)ug.fromBufferAttribute(t,o),fg.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+ug.distanceTo(fg);e.setAttribute("lineDistance",new cn(r,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O0 extends bn{constructor(e=[],t=ls,r,o,l,u,f,p,h,v){super(e,t,r,o,l,u,f,p,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aa extends bn{constructor(e,t,r=Di,o,l,u,f=hn,p=hn,h,v=nr,_=1){if(v!==nr&&v!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,o,l,u,f,p,v,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vy extends aa{constructor(e,t=Di,r=ls,o,l,u=hn,f=hn,p,h=nr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k0 extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pa extends jn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],h=[],v=[],_=[];let m=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new cn(h,3)),this.setAttribute("normal",new cn(v,3)),this.setAttribute("uv",new cn(_,2));function M(A,y,x,C,P,R,B,I,O,w,L){const ae=R/O,k=B/w,ne=R/2,J=B/2,re=I/2,Z=O+1,$=w+1;let V=0,q=0;const ee=new X;for(let se=0;se<$;se++){const F=se*k-J;for(let j=0;j<Z;j++){const Ae=j*ae-ne;ee[A]=Ae*C,ee[y]=F*P,ee[x]=re,h.push(ee.x,ee.y,ee.z),ee[A]=0,ee[y]=0,ee[x]=I>0?1:-1,v.push(ee.x,ee.y,ee.z),_.push(j/O),_.push(1-se/w),V+=1}}for(let se=0;se<w;se++)for(let F=0;F<O;F++){const j=m+F+Z*se,Ae=m+F+Z*(se+1),Xe=m+(F+1)+Z*(se+1),et=m+(F+1)+Z*se;p.push(j,Ae,et),p.push(Ae,Xe,et),q+=6}f.addGroup(S,q,L),S+=q,m+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Xl=new X,jl=new X,Ff=new X,Yl=new oi;class Hy extends jn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Js*t),u=e.getIndex(),f=e.getAttribute("position"),p=u?u.count:f.count,h=[0,0,0],v=["a","b","c"],_=new Array(3),m={},S=[];for(let M=0;M<p;M+=3){u?(h[0]=u.getX(M),h[1]=u.getX(M+1),h[2]=u.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:A,b:y,c:x}=Yl;if(A.fromBufferAttribute(f,h[0]),y.fromBufferAttribute(f,h[1]),x.fromBufferAttribute(f,h[2]),Yl.getNormal(Ff),_[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,_[1]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,_[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let C=0;C<3;C++){const P=(C+1)%3,R=_[C],B=_[P],I=Yl[v[C]],O=Yl[v[P]],w=`${R}_${B}`,L=`${B}_${R}`;L in m&&m[L]?(Ff.dot(m[L].normal)<=l&&(S.push(I.x,I.y,I.z),S.push(O.x,O.y,O.z)),m[L]=null):w in m||(m[w]={index0:h[C],index1:h[P],normal:Ff.clone()})}}for(const M in m)if(m[M]){const{index0:A,index1:y}=m[M];Xl.fromBufferAttribute(f,A),jl.fromBufferAttribute(f,y),S.push(Xl.x,Xl.y,Xl.z),S.push(jl.x,jl.y,jl.z)}this.setAttribute("position",new cn(S,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,p=l-1,h;for(;f<=p;)if(o=Math.floor(f+(p-f)/2),h=r[o]-u,h<0)f=o+1;else if(h>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const v=r[o],m=r[o+1]-v,S=(u-v)/m;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),p=t||(u.isVector2?new Ge:new X);return p.copy(f).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new X,o=[],l=[],u=[],f=new X,p=new jt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new X)}l[0]=new X,u[0]=new X;let h=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),m=Math.abs(o[0].z);v<=h&&(h=v,r.set(1,0,0)),_<=h&&(h=_,r.set(0,1,0)),m<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Mt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(p.makeRotationAxis(f,M))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Mt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(p.makeRotationAxis(o[M],S*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class sh extends Ui{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=p}getPoint(e,t=new Ge){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(f),h=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),m=p-this.aX,S=h-this.aY;p=m*v-S*_+this.aX,h=m*_+S*v+this.aY}return r.set(p,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gy extends sh{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let s=0,e=0,t=0,r=0;function o(l,u,f,p){s=l,e=f,t=-3*l+3*u-2*f-p,r=2*l-2*u+f+p}return{initCatmullRom:function(l,u,f,p,h){o(u,f,h*(f-l),h*(p-u))},initNonuniformCatmullRom:function(l,u,f,p,h,v,_){let m=(u-l)/h-(f-l)/(h+v)+(f-u)/v,S=(f-u)/v-(p-u)/(v+_)+(p-f)/_;m*=v,S*=v,o(u,f,m,S)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const ql=new X,Of=new oh,kf=new oh,Bf=new oh;class Wy extends Ui{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),p=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:p===0&&f===l-1&&(f=l-2,p=1);let h,v;this.closed||f>0?h=o[(f-1)%l]:(ql.subVectors(o[0],o[1]).add(o[0]),h=ql);const _=o[f%l],m=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(ql.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=ql),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(_),S),A=Math.pow(_.distanceToSquared(m),S),y=Math.pow(m.distanceToSquared(v),S);A<1e-4&&(A=1),M<1e-4&&(M=A),y<1e-4&&(y=A),Of.initNonuniformCatmullRom(h.x,_.x,m.x,v.x,M,A,y),kf.initNonuniformCatmullRom(h.y,_.y,m.y,v.y,M,A,y),Bf.initNonuniformCatmullRom(h.z,_.z,m.z,v.z,M,A,y)}else this.curveType==="catmullrom"&&(Of.initCatmullRom(h.x,_.x,m.x,v.x,this.tension),kf.initCatmullRom(h.y,_.y,m.y,v.y,this.tension),Bf.initCatmullRom(h.z,_.z,m.z,v.z,this.tension));return r.set(Of.calc(p),kf.calc(p),Bf.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function dg(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,p=s*f;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*f+l*s+t}function Xy(s,e){const t=1-s;return t*t*e}function jy(s,e){return 2*(1-s)*s*e}function Yy(s,e){return s*s*e}function na(s,e,t,r){return Xy(s,e)+jy(s,t)+Yy(s,r)}function qy(s,e){const t=1-s;return t*t*t*e}function Zy(s,e){const t=1-s;return 3*t*t*s*e}function $y(s,e){return 3*(1-s)*s*s*e}function Ky(s,e){return s*s*s*e}function ia(s,e,t,r,o){return qy(s,e)+Zy(s,t)+$y(s,r)+Ky(s,o)}class B0 extends Ui{constructor(e=new Ge,t=new Ge,r=new Ge,o=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ge){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(ia(e,o.x,l.x,u.x,f.x),ia(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jy extends Ui{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(ia(e,o.x,l.x,u.x,f.x),ia(e,o.y,l.y,u.y,f.y),ia(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class z0 extends Ui{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qy extends Ui{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V0 extends Ui{constructor(e=new Ge,t=new Ge,r=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ge){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(na(e,o.x,l.x,u.x),na(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class eS extends Ui{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(na(e,o.x,l.x,u.x),na(e,o.y,l.y,u.y),na(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,p=o[u===0?u:u-1],h=o[u],v=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(dg(f,p.x,h.x,v.x,_.x),dg(f,p.y,h.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ge().fromArray(o))}return this}}var Od=Object.freeze({__proto__:null,ArcCurve:Gy,CatmullRomCurve3:Wy,CubicBezierCurve:B0,CubicBezierCurve3:Jy,EllipseCurve:sh,LineCurve:z0,LineCurve3:Qy,QuadraticBezierCurve:V0,QuadraticBezierCurve3:eS,SplineCurve:H0});class tS extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Od[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,f=this.curves[l],p=f.getLength(),h=p===0?0:1-u/p;return f.getPointAt(h,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],f=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,p=u.getPoints(f);for(let h=0;h<p.length;h++){const v=p[h];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Od[o.type]().fromJSON(o))}return this}}class kd extends tS{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new z0(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new V0(this.currentPoint.clone(),new Ge(e,t),new Ge(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const f=new B0(this.currentPoint.clone(),new Ge(e,t),new Ge(r,o),new Ge(l,u));return this.curves.push(f),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new H0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const f=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(e+f,t+p,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,f,p){const h=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+h,t+v,r,o,l,u,f,p),this}absellipse(e,t,r,o,l,u,f,p){const h=new sh(e,t,r,o,l,u,f,p);if(this.curves.length>0){const _=h.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(h);const v=h.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ac extends kd{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new kd().fromJSON(o))}return this}}function nS(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=G0(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let f,p,h;if(r&&(l=aS(s,e,l,t)),s.length>80*t){f=s[0],p=s[1];let v=f,_=p;for(let m=t;m<o;m+=t){const S=s[m],M=s[m+1];S<f&&(f=S),M<p&&(p=M),S>v&&(v=S),M>_&&(_=M)}h=Math.max(v-f,_-p),h=h!==0?32767/h:0}return la(l,u,t,f,p,h,0),u}function G0(s,e,t,r,o){let l;if(o===_S(s,e,t,r)>0)for(let u=e;u<t;u+=r)l=hg(u/r|0,s[u],s[u+1],l);else for(let u=t-r;u>=e;u-=r)l=hg(u/r|0,s[u],s[u+1],l);return l&&ro(l,l.next)&&(ua(l),l=l.next),l}function cs(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(ro(t,t.next)||Wt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function la(s,e,t,r,o,l,u){if(!s)return;!u&&l&&dS(s,r,o,l);let f=s;for(;s.prev!==s.next;){const p=s.prev,h=s.next;if(l?rS(s,r,o,l):iS(s)){e.push(p.i,s.i,h.i),ua(s),s=h.next,f=h.next;continue}if(s=h,s===f){u?u===1?(s=sS(cs(s),e),la(s,e,t,r,o,l,2)):u===2&&oS(s,e,t,r,o,l):la(cs(s),e,t,r,o,l,1);break}}}function iS(s){const e=s.prev,t=s,r=s.next;if(Wt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,f=e.y,p=t.y,h=r.y,v=Math.min(o,l,u),_=Math.min(f,p,h),m=Math.max(o,l,u),S=Math.max(f,p,h);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=m&&M.y>=_&&M.y<=S&&Jo(o,f,l,p,u,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function rS(s,e,t,r){const o=s.prev,l=s,u=s.next;if(Wt(o,l,u)>=0)return!1;const f=o.x,p=l.x,h=u.x,v=o.y,_=l.y,m=u.y,S=Math.min(f,p,h),M=Math.min(v,_,m),A=Math.max(f,p,h),y=Math.max(v,_,m),x=Bd(S,M,e,t,r),C=Bd(A,y,e,t,r);let P=s.prevZ,R=s.nextZ;for(;P&&P.z>=x&&R&&R.z<=C;){if(P.x>=S&&P.x<=A&&P.y>=M&&P.y<=y&&P!==o&&P!==u&&Jo(f,v,p,_,h,m,P.x,P.y)&&Wt(P.prev,P,P.next)>=0||(P=P.prevZ,R.x>=S&&R.x<=A&&R.y>=M&&R.y<=y&&R!==o&&R!==u&&Jo(f,v,p,_,h,m,R.x,R.y)&&Wt(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;P&&P.z>=x;){if(P.x>=S&&P.x<=A&&P.y>=M&&P.y<=y&&P!==o&&P!==u&&Jo(f,v,p,_,h,m,P.x,P.y)&&Wt(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;R&&R.z<=C;){if(R.x>=S&&R.x<=A&&R.y>=M&&R.y<=y&&R!==o&&R!==u&&Jo(f,v,p,_,h,m,R.x,R.y)&&Wt(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function sS(s,e){let t=s;do{const r=t.prev,o=t.next.next;!ro(r,o)&&X0(r,t,t.next,o)&&ca(r,o)&&ca(o,r)&&(e.push(r.i,t.i,o.i),ua(t),ua(t.next),t=s=o),t=t.next}while(t!==s);return cs(t)}function oS(s,e,t,r,o,l){let u=s;do{let f=u.next.next;for(;f!==u.prev;){if(u.i!==f.i&&mS(u,f)){let p=j0(u,f);u=cs(u,u.next),p=cs(p,p.next),la(u,e,t,r,o,l,0),la(p,e,t,r,o,l,0);return}f=f.next}u=u.next}while(u!==s)}function aS(s,e,t,r){const o=[];for(let l=0,u=e.length;l<u;l++){const f=e[l]*r,p=l<u-1?e[l+1]*r:s.length,h=G0(s,f,p,r,!1);h===h.next&&(h.steiner=!0),o.push(pS(h))}o.sort(lS);for(let l=0;l<o.length;l++)t=cS(o[l],t);return t}function lS(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function cS(s,e){const t=uS(s,e);if(!t)return e;const r=j0(t,s);return cs(r,r.next),cs(t,t.next)}function uS(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,u;if(ro(s,t))return t;do{if(ro(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const _=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(_<=r&&_>l&&(l=_,u=t.x<t.next.x?t:t.next,_===r))return u}t=t.next}while(t!==e);if(!u)return null;const f=u,p=u.x,h=u.y;let v=1/0;t=u;do{if(r>=t.x&&t.x>=p&&r!==t.x&&W0(o<h?r:l,o,p,h,o<h?l:r,o,t.x,t.y)){const _=Math.abs(o-t.y)/(r-t.x);ca(t,s)&&(_<v||_===v&&(t.x>u.x||t.x===u.x&&fS(u,t)))&&(u=t,v=_)}t=t.next}while(t!==f);return u}function fS(s,e){return Wt(s.prev,s,e.prev)<0&&Wt(e.next,s,s.next)<0}function dS(s,e,t,r){let o=s;do o.z===0&&(o.z=Bd(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,hS(o)}function hS(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let u=r,f=0;for(let h=0;h<t&&(f++,u=u.nextZ,!!u);h++);let p=t;for(;f>0||p>0&&u;)f!==0&&(p===0||!u||r.z<=u.z)?(o=r,r=r.nextZ,f--):(o=u,u=u.nextZ,p--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=u}l.nextZ=null,t*=2}while(e>1);return s}function Bd(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function pS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function W0(s,e,t,r,o,l,u,f){return(o-u)*(e-f)>=(s-u)*(l-f)&&(s-u)*(r-f)>=(t-u)*(e-f)&&(t-u)*(l-f)>=(o-u)*(r-f)}function Jo(s,e,t,r,o,l,u,f){return!(s===u&&e===f)&&W0(s,e,t,r,o,l,u,f)}function mS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!gS(s,e)&&(ca(s,e)&&ca(e,s)&&vS(s,e)&&(Wt(s.prev,s,e.prev)||Wt(s,e.prev,e))||ro(s,e)&&Wt(s.prev,s,s.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ro(s,e){return s.x===e.x&&s.y===e.y}function X0(s,e,t,r){const o=$l(Wt(s,e,t)),l=$l(Wt(s,e,r)),u=$l(Wt(t,r,s)),f=$l(Wt(t,r,e));return!!(o!==l&&u!==f||o===0&&Zl(s,t,e)||l===0&&Zl(s,r,e)||u===0&&Zl(t,s,r)||f===0&&Zl(t,e,r))}function Zl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function $l(s){return s>0?1:s<0?-1:0}function gS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&X0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ca(s,e){return Wt(s.prev,s,s.next)<0?Wt(s,e,s.next)>=0&&Wt(s,s.prev,e)>=0:Wt(s,e,s.prev)<0||Wt(s,s.next,e)<0}function vS(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function j0(s,e){const t=zd(s.i,s.x,s.y),r=zd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function hg(s,e,t,r){const o=zd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ua(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function _S(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class xS{static triangulate(e,t,r=2){return nS(e,t,r)}}class as{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return as.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];pg(e),mg(r,e);let u=e.length;t.forEach(pg);for(let p=0;p<t.length;p++)o.push(u),u+=t[p].length,mg(r,t[p]);const f=xS.triangulate(r,o);for(let p=0;p<f.length;p+=3)l.push(f.slice(p,p+3));return l}}function pg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function mg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ah extends jn{constructor(e=new ac([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let f=0,p=e.length;f<p;f++){const h=e[f];u(h)}this.setAttribute("position",new cn(o,3)),this.setAttribute("uv",new cn(l,2)),this.computeVertexNormals();function u(f){const p=[],h=t.curveSegments!==void 0?t.curveSegments:12,v=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,A=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const x=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:yS;let P,R=!1,B,I,O,w;if(x){P=x.getSpacedPoints(v),R=!0,m=!1;const ve=x.isCatmullRomCurve3?x.closed:!1;B=x.computeFrenetFrames(v,ve),I=new X,O=new X,w=new X}m||(y=0,S=0,M=0,A=0);const L=f.extractPoints(h);let ae=L.shape;const k=L.holes;if(!as.isClockWise(ae)){ae=ae.reverse();for(let ve=0,Me=k.length;ve<Me;ve++){const _e=k[ve];as.isClockWise(_e)&&(k[ve]=_e.reverse())}}function J(ve){const _e=10000000000000001e-36;let Ne=ve[0];for(let D=1;D<=ve.length;D++){const ot=D%ve.length,Ue=ve[ot],rt=Ue.x-Ne.x,Pe=Ue.y-Ne.y,N=rt*rt+Pe*Pe,E=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(Ne.x),Math.abs(Ne.y)),G=_e*E*E;if(N<=G){ve.splice(ot,1),D--;continue}Ne=Ue}}J(ae),k.forEach(J);const re=k.length,Z=ae;for(let ve=0;ve<re;ve++){const Me=k[ve];ae=ae.concat(Me)}function $(ve,Me,_e){return Me||Ct("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Me,_e)}const V=ae.length;function q(ve,Me,_e){let Ne,D,ot;const Ue=ve.x-Me.x,rt=ve.y-Me.y,Pe=_e.x-ve.x,N=_e.y-ve.y,E=Ue*Ue+rt*rt,G=Ue*N-rt*Pe;if(Math.abs(G)>Number.EPSILON){const fe=Math.sqrt(E),me=Math.sqrt(Pe*Pe+N*N),de=Me.x-rt/fe,je=Me.y+Ue/fe,be=_e.x-N/me,Je=_e.y+Pe/me,lt=((be-de)*N-(Je-je)*Pe)/(Ue*N-rt*Pe);Ne=de+Ue*lt-ve.x,D=je+rt*lt-ve.y;const Se=Ne*Ne+D*D;if(Se<=2)return new Ge(Ne,D);ot=Math.sqrt(Se/2)}else{let fe=!1;Ue>Number.EPSILON?Pe>Number.EPSILON&&(fe=!0):Ue<-Number.EPSILON?Pe<-Number.EPSILON&&(fe=!0):Math.sign(rt)===Math.sign(N)&&(fe=!0),fe?(Ne=-rt,D=Ue,ot=Math.sqrt(E)):(Ne=Ue,D=rt,ot=Math.sqrt(E/2))}return new Ge(Ne/ot,D/ot)}const ee=[];for(let ve=0,Me=Z.length,_e=Me-1,Ne=ve+1;ve<Me;ve++,_e++,Ne++)_e===Me&&(_e=0),Ne===Me&&(Ne=0),ee[ve]=q(Z[ve],Z[_e],Z[Ne]);const se=[];let F,j=ee.concat();for(let ve=0,Me=re;ve<Me;ve++){const _e=k[ve];F=[];for(let Ne=0,D=_e.length,ot=D-1,Ue=Ne+1;Ne<D;Ne++,ot++,Ue++)ot===D&&(ot=0),Ue===D&&(Ue=0),F[Ne]=q(_e[Ne],_e[ot],_e[Ue]);se.push(F),j=j.concat(F)}let Ae;if(y===0)Ae=as.triangulateShape(Z,k);else{const ve=[],Me=[];for(let _e=0;_e<y;_e++){const Ne=_e/y,D=S*Math.cos(Ne*Math.PI/2),ot=M*Math.sin(Ne*Math.PI/2)+A;for(let Ue=0,rt=Z.length;Ue<rt;Ue++){const Pe=$(Z[Ue],ee[Ue],ot);Ie(Pe.x,Pe.y,-D),Ne===0&&ve.push(Pe)}for(let Ue=0,rt=re;Ue<rt;Ue++){const Pe=k[Ue];F=se[Ue];const N=[];for(let E=0,G=Pe.length;E<G;E++){const fe=$(Pe[E],F[E],ot);Ie(fe.x,fe.y,-D),Ne===0&&N.push(fe)}Ne===0&&Me.push(N)}}Ae=as.triangulateShape(ve,Me)}const Xe=Ae.length,et=M+A;for(let ve=0;ve<V;ve++){const Me=m?$(ae[ve],j[ve],et):ae[ve];R?(O.copy(B.normals[0]).multiplyScalar(Me.x),I.copy(B.binormals[0]).multiplyScalar(Me.y),w.copy(P[0]).add(O).add(I),Ie(w.x,w.y,w.z)):Ie(Me.x,Me.y,0)}for(let ve=1;ve<=v;ve++)for(let Me=0;Me<V;Me++){const _e=m?$(ae[Me],j[Me],et):ae[Me];R?(O.copy(B.normals[ve]).multiplyScalar(_e.x),I.copy(B.binormals[ve]).multiplyScalar(_e.y),w.copy(P[ve]).add(O).add(I),Ie(w.x,w.y,w.z)):Ie(_e.x,_e.y,_/v*ve)}for(let ve=y-1;ve>=0;ve--){const Me=ve/y,_e=S*Math.cos(Me*Math.PI/2),Ne=M*Math.sin(Me*Math.PI/2)+A;for(let D=0,ot=Z.length;D<ot;D++){const Ue=$(Z[D],ee[D],Ne);Ie(Ue.x,Ue.y,_+_e)}for(let D=0,ot=k.length;D<ot;D++){const Ue=k[D];F=se[D];for(let rt=0,Pe=Ue.length;rt<Pe;rt++){const N=$(Ue[rt],F[rt],Ne);R?Ie(N.x,N.y+P[v-1].y,P[v-1].x+_e):Ie(N.x,N.y,_+_e)}}}oe(),ge();function oe(){const ve=o.length/3;if(m){let Me=0,_e=V*Me;for(let Ne=0;Ne<Xe;Ne++){const D=Ae[Ne];We(D[2]+_e,D[1]+_e,D[0]+_e)}Me=v+y*2,_e=V*Me;for(let Ne=0;Ne<Xe;Ne++){const D=Ae[Ne];We(D[0]+_e,D[1]+_e,D[2]+_e)}}else{for(let Me=0;Me<Xe;Me++){const _e=Ae[Me];We(_e[2],_e[1],_e[0])}for(let Me=0;Me<Xe;Me++){const _e=Ae[Me];We(_e[0]+V*v,_e[1]+V*v,_e[2]+V*v)}}r.addGroup(ve,o.length/3-ve,0)}function ge(){const ve=o.length/3;let Me=0;pe(Z,Me),Me+=Z.length;for(let _e=0,Ne=k.length;_e<Ne;_e++){const D=k[_e];pe(D,Me),Me+=D.length}r.addGroup(ve,o.length/3-ve,1)}function pe(ve,Me){let _e=ve.length;for(;--_e>=0;){const Ne=_e;let D=_e-1;D<0&&(D=ve.length-1);for(let ot=0,Ue=v+y*2;ot<Ue;ot++){const rt=V*ot,Pe=V*(ot+1),N=Me+Ne+rt,E=Me+D+rt,G=Me+D+Pe,fe=Me+Ne+Pe;ct(N,E,G,fe)}}}function Ie(ve,Me,_e){p.push(ve),p.push(Me),p.push(_e)}function We(ve,Me,_e){Lt(ve),Lt(Me),Lt(_e);const Ne=o.length/3,D=C.generateTopUV(r,o,Ne-3,Ne-2,Ne-1);ht(D[0]),ht(D[1]),ht(D[2])}function ct(ve,Me,_e,Ne){Lt(ve),Lt(Me),Lt(Ne),Lt(Me),Lt(_e),Lt(Ne);const D=o.length/3,ot=C.generateSideWallUV(r,o,D-6,D-3,D-2,D-1);ht(ot[0]),ht(ot[1]),ht(ot[3]),ht(ot[1]),ht(ot[2]),ht(ot[3])}function Lt(ve){o.push(p[ve*3+0]),o.push(p[ve*3+1]),o.push(p[ve*3+2])}function ht(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return SS(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,u=e.shapes.length;l<u;l++){const f=t[e.shapes[l]];r.push(f)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Od[o.type]().fromJSON(o)),new ah(r,e.options)}}const yS={generateTopUV:function(s,e,t,r,o){const l=e[t*3],u=e[t*3+1],f=e[r*3],p=e[r*3+1],h=e[o*3],v=e[o*3+1];return[new Ge(l,u),new Ge(f,p),new Ge(h,v)]},generateSideWallUV:function(s,e,t,r,o,l){const u=e[t*3],f=e[t*3+1],p=e[t*3+2],h=e[r*3],v=e[r*3+1],_=e[r*3+2],m=e[o*3],S=e[o*3+1],M=e[o*3+2],A=e[l*3],y=e[l*3+1],x=e[l*3+2];return Math.abs(f-v)<Math.abs(u-h)?[new Ge(u,1-p),new Ge(h,1-_),new Ge(m,1-M),new Ge(A,1-x)]:[new Ge(f,1-p),new Ge(v,1-_),new Ge(S,1-M),new Ge(y,1-x)]}};function SS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ma extends jn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),p=Math.floor(o),h=f+1,v=p+1,_=e/f,m=t/p,S=[],M=[],A=[],y=[];for(let x=0;x<v;x++){const C=x*m-u;for(let P=0;P<h;P++){const R=P*_-l;M.push(R,-C,0),A.push(0,0,1),y.push(P/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let C=0;C<f;C++){const P=C+h*x,R=C+h*(x+1),B=C+1+h*(x+1),I=C+1+h*x;S.push(P,R,I),S.push(R,B,I)}this.setIndex(S),this.setAttribute("position",new cn(M,3)),this.setAttribute("normal",new cn(A,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class mc extends jn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+f,Math.PI);let h=0;const v=[],_=new X,m=new X,S=[],M=[],A=[],y=[];for(let x=0;x<=r;x++){const C=[],P=x/r;let R=0;x===0&&u===0?R=.5/t:x===r&&p===Math.PI&&(R=-.5/t);for(let B=0;B<=t;B++){const I=B/t;_.x=-e*Math.cos(o+I*l)*Math.sin(u+P*f),_.y=e*Math.cos(u+P*f),_.z=e*Math.sin(o+I*l)*Math.sin(u+P*f),M.push(_.x,_.y,_.z),m.copy(_).normalize(),A.push(m.x,m.y,m.z),y.push(I+R,1-P),C.push(h++)}v.push(C)}for(let x=0;x<r;x++)for(let C=0;C<t;C++){const P=v[x][C+1],R=v[x][C],B=v[x+1][C],I=v[x+1][C+1];(x!==0||u>0)&&S.push(P,R,I),(x!==r-1||p<Math.PI)&&S.push(R,B,I)}this.setIndex(S),this.setAttribute("position",new cn(M,3)),this.setAttribute("normal",new cn(A,3)),this.setAttribute("uv",new cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function so(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const r=so(s[t]);for(const o in r)e[o]=r[o]}return e}function MS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Y0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const ES={clone:so,merge:An};var TS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ii extends ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TS,this.fragmentShader=wS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=MS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class AS extends Ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bS extends ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CS extends ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gg={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(vg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!vg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class RS{constructor(e,t,r){const o=this;let l=!1,u=0,f=0,p;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,f),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,f),u===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return h.push(v,_),this},this.removeHandler=function(v){const _=h.indexOf(v);return _!==-1&&h.splice(_,2),this},this.getHandler=function(v){for(let _=0,m=h.length;_<m;_+=2){const S=h[_],M=h[_+1];if(S.global&&(S.lastIndex=0),S.test(v))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const PS=new RS;class lh{constructor(e){this.manager=e!==void 0?e:PS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}lh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ki={};class LS extends Error{constructor(e,t){super(e),this.response=t}}class NS extends lh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=gg.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:r,onError:o});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:r,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const v=Ki[e],_=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),S=m?parseInt(m):0,M=S!==0;let A=0;const y=new ReadableStream({start(x){C();function C(){_.read().then(({done:P,value:R})=>{if(P)x.close();else{A+=R.byteLength;const B=new ProgressEvent("progress",{lengthComputable:M,loaded:A,total:S});for(let I=0,O=v.length;I<O;I++){const w=v[I];w.onProgress&&w.onProgress(B)}x.enqueue(R),C()}},P=>{x.error(P)})}}});return new Response(y)}else throw new LS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(p){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(v=>new DOMParser().parseFromString(v,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),m=_&&_[1]?_[1].toLowerCase():void 0,S=new TextDecoder(m);return h.arrayBuffer().then(M=>S.decode(M))}}}).then(h=>{gg.add(`file:${e}`,h);const v=Ki[e];delete Ki[e];for(let _=0,m=v.length;_<m;_++){const S=v[_];S.onLoad&&S.onLoad(h)}}).catch(h=>{const v=Ki[e];if(v===void 0)throw this.manager.itemError(e),h;delete Ki[e];for(let _=0,m=v.length;_<m;_++){const S=v[_];S.onError&&S.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Kl=new X,Jl=new ao,Ti=new X;class q0 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kl,Jl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,Jl,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Kl,Jl,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kl,Jl,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new X,_g=new Ge,xg=new Ge;class ri extends q0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,_g,xg),t.subVectors(xg,_g)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/h,o*=u.width/p,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Z0 extends q0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const js=-90,Ys=1;class DS extends On{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ri(js,Ys,e,t);o.layers=this.layers,this.add(o);const l=new ri(js,Ys,e,t);l.layers=this.layers,this.add(l);const u=new ri(js,Ys,e,t);u.layers=this.layers,this.add(u);const f=new ri(js,Ys,e,t);f.layers=this.layers,this.add(f);const p=new ri(js,Ys,e,t);p.layers=this.layers,this.add(p);const h=new ri(js,Ys,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,p]=t;for(const h of t)this.remove(h);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===uc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,h,v]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,m,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class IS extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class US{constructor(){this.type="ShapePath",this.color=new wt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new kd,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,r,o){return this.currentPath.quadraticCurveTo(e,t,r,o),this}bezierCurveTo(e,t,r,o,l,u){return this.currentPath.bezierCurveTo(e,t,r,o,l,u),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(x){const C=[];for(let P=0,R=x.length;P<R;P++){const B=x[P],I=new ac;I.curves=B.curves,C.push(I)}return C}function r(x,C){const P=C.length;let R=!1;for(let B=P-1,I=0;I<P;B=I++){let O=C[B],w=C[I],L=w.x-O.x,ae=w.y-O.y;if(Math.abs(ae)>Number.EPSILON){if(ae<0&&(O=C[I],L=-L,w=C[B],ae=-ae),x.y<O.y||x.y>w.y)continue;if(x.y===O.y){if(x.x===O.x)return!0}else{const k=ae*(x.x-O.x)-L*(x.y-O.y);if(k===0)return!0;if(k<0)continue;R=!R}}else{if(x.y!==O.y)continue;if(w.x<=x.x&&x.x<=O.x||O.x<=x.x&&x.x<=w.x)return!0}}return R}const o=as.isClockWise,l=this.subPaths;if(l.length===0)return[];let u,f,p;const h=[];if(l.length===1)return f=l[0],p=new ac,p.curves=f.curves,h.push(p),h;let v=!o(l[0].getPoints());v=e?!v:v;const _=[],m=[];let S=[],M=0,A;m[M]=void 0,S[M]=[];for(let x=0,C=l.length;x<C;x++)f=l[x],A=f.getPoints(),u=o(A),u=e?!u:u,u?(!v&&m[M]&&M++,m[M]={s:new ac,p:A},m[M].s.curves=f.curves,v&&M++,S[M]=[]):S[M].push({h:f,p:A[0]});if(!m[0])return t(l);if(m.length>1){let x=!1,C=0;for(let P=0,R=m.length;P<R;P++)_[P]=[];for(let P=0,R=m.length;P<R;P++){const B=S[P];for(let I=0;I<B.length;I++){const O=B[I];let w=!0;for(let L=0;L<m.length;L++)r(O.p,m[L].p)&&(P!==L&&C++,w?(w=!1,_[L].push(O)):x=!0);w&&_[P].push(O)}}C>0&&x===!1&&(S=_)}let y;for(let x=0,C=m.length;x<C;x++){p=m[x].s,h.push(p),y=S[x];for(let P=0,R=y.length;P<R;P++)p.holes.push(y[P].h)}return h}}function yg(s,e,t,r){const o=FS(r);switch(t){case w0:return s*e;case b0:return s*e/o.components*o.byteLength;case Jd:return s*e/o.components*o.byteLength;case no:return s*e*2/o.components*o.byteLength;case Qd:return s*e*2/o.components*o.byteLength;case A0:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case eh:return s*e*4/o.components*o.byteLength;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sc:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case od:case ld:return Math.max(s,16)*Math.max(e,8)/4;case sd:case ad:return Math.max(s,8)*Math.max(e,8)/2;case cd:case ud:case dd:case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fd:case pd:case md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case wd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Pd:case Ld:case Nd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Dd:case Id:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ud:case Fd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function FS(s){switch(s){case si:case S0:return{byteLength:1,components:1};case ra:case M0:case tr:return{byteLength:2,components:1};case $d:case Kd:return{byteLength:2,components:4};case Di:case Zd:case Ci:return{byteLength:4,components:1};case E0:case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qd}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qd);function $0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function OS(s){const e=new WeakMap;function t(f,p){const h=f.array,v=f.usage,_=h.byteLength,m=s.createBuffer();s.bindBuffer(p,m),s.bufferData(p,h,v),f.onUploadCallback();let S;if(h instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=s.SHORT;else if(h instanceof Uint32Array)S=s.UNSIGNED_INT;else if(h instanceof Int32Array)S=s.INT;else if(h instanceof Int8Array)S=s.BYTE;else if(h instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,h){const v=p.array,_=p.updateRanges;if(s.bindBuffer(h,f),_.length===0)s.bufferSubData(h,0,v);else{_.sort((S,M)=>S.start-M.start);let m=0;for(let S=1;S<_.length;S++){const M=_[m],A=_[S];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,_[m]=A)}_.length=m+1;for(let S=0,M=_.length;S<M;S++){const A=_[S];s.bufferSubData(h,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,p));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,p),h.version=f.version}}return{get:o,remove:l,update:u}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
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
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WS=`#ifdef USE_AOMAP
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
#endif`,XS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jS=`#ifdef USE_BATCHING
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
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KS=`#ifdef USE_IRIDESCENCE
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
#endif`,JS=`#ifdef USE_BUMPMAP
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
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,aM=`#define PI 3.141592653589793
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
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,MM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,FM=`uniform sampler2D dfgLUT;
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
}`,OM=`
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
#endif`,kM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$M=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oE=`#ifdef USE_NORMALMAP
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
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ME=`float getShadowMask() {
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
}`,EE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kE=`uniform sampler2D t2D;
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
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
}`,WE=`#if DEPTH_PACKING == 3200
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
}`,XE=`#define DISTANCE
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
}`,jE=`#define DISTANCE
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
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
}`,$E=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,JE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,e1=`#define LAMBERT
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
}`,t1=`#define MATCAP
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
}`,n1=`#define MATCAP
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
}`,i1=`#define NORMAL
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
}`,r1=`#define NORMAL
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
}`,s1=`#define PHONG
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
}`,o1=`#define PHONG
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
}`,a1=`#define STANDARD
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
}`,l1=`#define STANDARD
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
}`,c1=`#define TOON
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
}`,u1=`#define TOON
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
}`,f1=`uniform float size;
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
}`,d1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,p1=`uniform vec3 color;
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
}`,m1=`uniform float rotation;
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
}`,g1=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:kS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:VS,alphatest_fragment:HS,alphatest_pars_fragment:GS,aomap_fragment:WS,aomap_pars_fragment:XS,batching_pars_vertex:jS,batching_vertex:YS,begin_vertex:qS,beginnormal_vertex:ZS,bsdfs:$S,iridescence_fragment:KS,bumpmap_pars_fragment:JS,clipping_planes_fragment:QS,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:sM,color_vertex:oM,common:aM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:dM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:_M,envmap_pars_vertex:xM,envmap_physical_pars_fragment:PM,envmap_vertex:yM,fog_vertex:SM,fog_pars_vertex:MM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:AM,lights_lambert_fragment:bM,lights_lambert_pars_fragment:CM,lights_pars_begin:RM,lights_toon_fragment:LM,lights_toon_pars_fragment:NM,lights_phong_fragment:DM,lights_phong_pars_fragment:IM,lights_physical_fragment:UM,lights_physical_pars_fragment:FM,lights_fragment_begin:OM,lights_fragment_maps:kM,lights_fragment_end:BM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:GM,map_fragment:WM,map_pars_fragment:XM,map_particle_fragment:jM,map_particle_pars_fragment:YM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:ZM,morphinstance_vertex:$M,morphcolor_vertex:KM,morphnormal_vertex:JM,morphtarget_pars_vertex:QM,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:rE,normal_vertex:sE,normalmap_pars_fragment:oE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:vE,roughnessmap_pars_fragment:_E,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:yE,shadowmap_vertex:SE,shadowmask_pars_fragment:ME,skinbase_vertex:EE,skinning_pars_vertex:TE,skinning_vertex:wE,skinnormal_vertex:AE,specularmap_fragment:bE,specularmap_pars_fragment:CE,tonemapping_fragment:RE,tonemapping_pars_fragment:PE,transmission_fragment:LE,transmission_pars_fragment:NE,uv_pars_fragment:DE,uv_pars_vertex:IE,uv_vertex:UE,worldpos_vertex:FE,background_vert:OE,background_frag:kE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:VE,cube_frag:HE,depth_vert:GE,depth_frag:WE,distance_vert:XE,distance_frag:jE,equirect_vert:YE,equirect_frag:qE,linedashed_vert:ZE,linedashed_frag:$E,meshbasic_vert:KE,meshbasic_frag:JE,meshlambert_vert:QE,meshlambert_frag:e1,meshmatcap_vert:t1,meshmatcap_frag:n1,meshnormal_vert:i1,meshnormal_frag:r1,meshphong_vert:s1,meshphong_frag:o1,meshphysical_vert:a1,meshphysical_frag:l1,meshtoon_vert:c1,meshtoon_frag:u1,points_vert:f1,points_frag:d1,shadow_vert:h1,shadow_frag:p1,sprite_vert:m1,sprite_frag:g1},Oe={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ai={basic:{uniforms:An([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:An([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:An([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:An([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:An([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new wt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:An([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:An([Oe.points,Oe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:An([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:An([Oe.common,Oe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:An([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:An([Oe.sprite,Oe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:An([Oe.common,Oe.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:An([Oe.lights,Oe.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};Ai.physical={uniforms:An([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Ql={r:0,b:0,g:0},es=new ir,v1=new jt;function _1(s,e,t,r,o,l){const u=new wt(0);let f=o===!0?0:1,p,h,v=null,_=0,m=null;function S(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const R=C.backgroundBlurriness>0;P=e.get(P,R)}return P}function M(C){let P=!1;const R=S(C);R===null?y(u,f):R&&R.isColor&&(y(R,1),P=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function A(C,P){const R=S(P);R&&(R.isCubeTexture||R.mapping===gc)?(h===void 0&&(h=new Xn(new pa(1,1,1),new Ii({name:"BackgroundCubeMaterial",uniforms:so(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),es.copy(P.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(v1.makeRotationFromEuler(es)),h.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ut,(v!==R||_!==R.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,v=R,_=R.version,m=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Xn(new ma(2,2),new Ii({name:"BackgroundMaterial",uniforms:so(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||_!==R.version||m!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,_=R.version,m=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function y(C,P){C.getRGB(Ql,Y0(s)),t.buffers.color.setClear(Ql.r,Ql.g,Ql.b,P,l)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,P=1){u.set(C),f=P,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,y(u,f)},render:M,addToRenderList:A,dispose:x}}function x1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=m(null);let l=o,u=!1;function f(k,ne,J,re,Z){let $=!1;const V=_(k,re,J,ne);l!==V&&(l=V,h(l.object)),$=S(k,re,J,Z),$&&M(k,re,J,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,R(k,ne,J,re),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function h(k){return s.bindVertexArray(k)}function v(k){return s.deleteVertexArray(k)}function _(k,ne,J,re){const Z=re.wireframe===!0;let $=r[ne.id];$===void 0&&($={},r[ne.id]=$);const V=k.isInstancedMesh===!0?k.id:0;let q=$[V];q===void 0&&(q={},$[V]=q);let ee=q[J.id];ee===void 0&&(ee={},q[J.id]=ee);let se=ee[Z];return se===void 0&&(se=m(p()),ee[Z]=se),se}function m(k){const ne=[],J=[],re=[];for(let Z=0;Z<t;Z++)ne[Z]=0,J[Z]=0,re[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:J,attributeDivisors:re,object:k,attributes:{},index:null}}function S(k,ne,J,re){const Z=l.attributes,$=ne.attributes;let V=0;const q=J.getAttributes();for(const ee in q)if(q[ee].location>=0){const F=Z[ee];let j=$[ee];if(j===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),F===void 0||F.attribute!==j||j&&F.data!==j.data)return!0;V++}return l.attributesNum!==V||l.index!==re}function M(k,ne,J,re){const Z={},$=ne.attributes;let V=0;const q=J.getAttributes();for(const ee in q)if(q[ee].location>=0){let F=$[ee];F===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const j={};j.attribute=F,F&&F.data&&(j.data=F.data),Z[ee]=j,V++}l.attributes=Z,l.attributesNum=V,l.index=re}function A(){const k=l.newAttributes;for(let ne=0,J=k.length;ne<J;ne++)k[ne]=0}function y(k){x(k,0)}function x(k,ne){const J=l.newAttributes,re=l.enabledAttributes,Z=l.attributeDivisors;J[k]=1,re[k]===0&&(s.enableVertexAttribArray(k),re[k]=1),Z[k]!==ne&&(s.vertexAttribDivisor(k,ne),Z[k]=ne)}function C(){const k=l.newAttributes,ne=l.enabledAttributes;for(let J=0,re=ne.length;J<re;J++)ne[J]!==k[J]&&(s.disableVertexAttribArray(J),ne[J]=0)}function P(k,ne,J,re,Z,$,V){V===!0?s.vertexAttribIPointer(k,ne,J,Z,$):s.vertexAttribPointer(k,ne,J,re,Z,$)}function R(k,ne,J,re){A();const Z=re.attributes,$=J.getAttributes(),V=ne.defaultAttributeValues;for(const q in $){const ee=$[q];if(ee.location>=0){let se=Z[q];if(se===void 0&&(q==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),q==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),se!==void 0){const F=se.normalized,j=se.itemSize,Ae=e.get(se);if(Ae===void 0)continue;const Xe=Ae.buffer,et=Ae.type,oe=Ae.bytesPerElement,ge=et===s.INT||et===s.UNSIGNED_INT||se.gpuType===Zd;if(se.isInterleavedBufferAttribute){const pe=se.data,Ie=pe.stride,We=se.offset;if(pe.isInstancedInterleavedBuffer){for(let ct=0;ct<ee.locationSize;ct++)x(ee.location+ct,pe.meshPerAttribute);k.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ct=0;ct<ee.locationSize;ct++)y(ee.location+ct);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let ct=0;ct<ee.locationSize;ct++)P(ee.location+ct,j/ee.locationSize,et,F,Ie*oe,(We+j/ee.locationSize*ct)*oe,ge)}else{if(se.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)x(ee.location+pe,se.meshPerAttribute);k.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let pe=0;pe<ee.locationSize;pe++)y(ee.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let pe=0;pe<ee.locationSize;pe++)P(ee.location+pe,j/ee.locationSize,et,F,j*oe,j/ee.locationSize*pe*oe,ge)}}else if(V!==void 0){const F=V[q];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(ee.location,F);break;case 3:s.vertexAttrib3fv(ee.location,F);break;case 4:s.vertexAttrib4fv(ee.location,F);break;default:s.vertexAttrib1fv(ee.location,F)}}}}C()}function B(){L();for(const k in r){const ne=r[k];for(const J in ne){const re=ne[J];for(const Z in re){const $=re[Z];for(const V in $)v($[V].object),delete $[V];delete re[Z]}}delete r[k]}}function I(k){if(r[k.id]===void 0)return;const ne=r[k.id];for(const J in ne){const re=ne[J];for(const Z in re){const $=re[Z];for(const V in $)v($[V].object),delete $[V];delete re[Z]}}delete r[k.id]}function O(k){for(const ne in r){const J=r[ne];for(const re in J){const Z=J[re];if(Z[k.id]===void 0)continue;const $=Z[k.id];for(const V in $)v($[V].object),delete $[V];delete Z[k.id]}}}function w(k){for(const ne in r){const J=r[ne],re=k.isInstancedMesh===!0?k.id:0,Z=J[re];if(Z!==void 0){for(const $ in Z){const V=Z[$];for(const q in V)v(V[q].object),delete V[q];delete Z[$]}delete J[re],Object.keys(J).length===0&&delete r[ne]}}}function L(){ae(),u=!0,l!==o&&(l=o,h(l.object))}function ae(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:ae,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function y1(s,e,t){let r;function o(h){r=h}function l(h,v){s.drawArrays(r,h,v),t.update(v,r,1)}function u(h,v,_){_!==0&&(s.drawArraysInstanced(r,h,v,_),t.update(v,r,_))}function f(h,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,v,0,_);let S=0;for(let M=0;M<_;M++)S+=v[M];t.update(S,r,1)}function p(h,v,_,m){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<h.length;M++)u(h[M],v[M],m[M]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,v,0,m,0,_);let M=0;for(let A=0;A<_;A++)M+=v[A]*m[A];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function S1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==_i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const w=O===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ci&&!w)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const v=p(h);v!==h&&(dt("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:S,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:R,maxSamples:B,samples:I}}function M1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ns,f=new xt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const S=_.length!==0||m||r!==0||o;return o=m,r=_.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,m){t=v(_,m,0)},this.setState=function(_,m,S){const M=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||M===null||M.length===0||l&&!y)l?v(null):h();else{const C=l?0:r,P=C*4;let R=x.clippingState||null;p.value=R,R=v(M,m,P,S);for(let B=0;B!==P;++B)R[B]=t[B];x.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,m,S,M){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=p.value,M!==!0||y===null){const x=S+A*4,C=m.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let P=0,R=S;P!==A;++P,R+=4)u.copy(_[P]).applyMatrix4(C,f),u.normal.toArray(y,R),y[R+3]=u.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Dr=4,Sg=[.125,.215,.35,.446,.526,.582],rs=20,E1=256,Zo=new Z0,Mg=new wt;let zf=null,Vf=0,Hf=0,Gf=!1;const T1=new X;class Eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=T1}=l;zf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zf,Vf,Hf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zf=this._renderer.getRenderTarget(),Vf=this._renderer.getActiveCubeFace(),Hf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:tr,format:_i,colorSpace:io,depthBuffer:!1},o=Tg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w1(l)),this._blurMaterial=b1(l,e,t),this._ggxMaterial=A1(l,e,t)}return o}_compileMaterial(e){const t=new Xn(new jn,e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,r,o,l){const p=new ri(90,1,t,r),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,S=_.toneMapping;_.getClearColor(Mg),_.toneMapping=Pi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new pa,new ta({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let x=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,x=!0):(y.color.copy(Mg),x=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[P],l.y,l.z)):R===1?(p.up.set(0,0,h[P]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[P],l.z)):(p.up.set(0,h[P],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[P]));const B=this._cubeSize;qs(o,R*B,P>2?B:0,B,B),_.setRenderTarget(o),x&&_.render(A,p),_.render(e,p)}_.toneMapping=S,_.autoClear=m,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ls||e.mapping===to;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;qs(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,Zo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const p=u.uniforms,h=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-v*v),m=0+h*1.25,S=_*m,{_lodMax:M}=this,A=this._sizeLods[r],y=3*A*(r>M-Dr?r-M+Dr:0),x=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=M-t,qs(l,y,x,3*A,2*A),o.setRenderTarget(l),o.render(f,Zo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-r,qs(e,y,x,3*A,2*A),o.setRenderTarget(e),o.render(f,Zo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const p=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=h;const m=h.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*rs-1),A=l/M,y=isFinite(l)?1+Math.floor(v*A):rs;y>rs&&dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rs}`);const x=[];let C=0;for(let O=0;O<rs;++O){const w=O/A,L=Math.exp(-w*w/2);x.push(L),O===0?C+=L:O<y&&(C+=2*L)}for(let O=0;O<x.length;O++)x[O]=x[O]/C;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=x,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:P}=this;m.dTheta.value=M,m.mipInt.value=P-r;const R=this._sizeLods[o],B=3*R*(o>P-Dr?o-P+Dr:0),I=4*(this._cubeSize-R);qs(t,B,I,3*R,2*R),p.setRenderTarget(t),p.render(_,Zo)}}function w1(s){const e=[],t=[],r=[];let o=s;const l=s-Dr+1+Sg.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let p=1/f;u>s-Dr?p=Sg[u-s+Dr-1]:u===0&&(p=0),t.push(p);const h=1/(f-2),v=-h,_=1+h,m=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,M=6,A=3,y=2,x=1,C=new Float32Array(A*M*S),P=new Float32Array(y*M*S),R=new Float32Array(x*M*S);for(let I=0;I<S;I++){const O=I%3*2/3-1,w=I>2?0:-1,L=[O,w,0,O+2/3,w,0,O+2/3,w+1,0,O,w,0,O+2/3,w+1,0,O,w+1,0];C.set(L,A*M*I),P.set(m,y*M*I);const ae=[I,I,I,I,I,I];R.set(ae,x*M*I)}const B=new jn;B.setAttribute("position",new Ni(C,A)),B.setAttribute("uv",new Ni(P,y)),B.setAttribute("faceIndex",new Ni(R,x)),r.push(new Xn(B,null)),o>Dr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Tg(s,e,t){const r=new Li(s,e,t);return r.texture.mapping=gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qs(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function A1(s,e,t){return new Ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function b1(s,e,t){const r=new Float32Array(rs),o=new X(0,1,0);return new Ii({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function wg(){return new Ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ag(){return new Ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}class K0 extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new O0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new pa(5,5,5),l=new Ii({name:"CubemapFromEquirect",uniforms:so(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Qi});l.uniforms.tEquirect.value=t;const u=new Xn(o,l),f=t.minFilter;return t.minFilter===ss&&(t.minFilter=yn),new DS(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function C1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(m,S=!1){return m==null?null:S?u(m):l(m)}function l(m){if(m&&m.isTexture){const S=m.mapping;if(S===uf||S===ff)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new K0(M.height);return A.fromEquirectangularTexture(s,m),e.set(m,A),m.addEventListener("dispose",h),f(A.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const S=m.mapping,M=S===uf||S===ff,A=S===ls||S===to;if(M||A){let y=t.get(m);const x=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return r===null&&(r=new Eg(s)),y=M?r.fromEquirectangular(m,y):r.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const C=m.image;return M&&C&&C.height>0||A&&C&&p(C)?(r===null&&(r=new Eg(s)),y=M?r.fromEquirectangular(m):r.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",v),y.texture):null}}}return m}function f(m,S){return S===uf?m.mapping=ls:S===ff&&(m.mapping=to),m}function p(m){let S=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&S++;return S===M}function h(m){const S=m.target;S.removeEventListener("dispose",h);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(m){const S=m.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function R1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&dc("WebGLRenderer: "+r+" extension not supported."),o}}}function P1(s,e,t,r){const o={},l=new WeakMap;function u(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete o[m.id];const S=l.get(m);S&&(e.remove(S),l.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(_,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function p(_){const m=_.attributes;for(const S in m)e.update(m[S],s.ARRAY_BUFFER)}function h(_){const m=[],S=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(S!==null){const C=S.array;A=S.version;for(let P=0,R=C.length;P<R;P+=3){const B=C[P+0],I=C[P+1],O=C[P+2];m.push(B,I,I,O,O,B)}}else{const C=M.array;A=M.version;for(let P=0,R=C.length/3-1;P<R;P+=3){const B=P+0,I=P+1,O=P+2;m.push(B,I,I,O,O,B)}}const y=new(M.count>=65535?D0:N0)(m,1);y.version=A;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const m=l.get(_);if(m){const S=_.index;S!==null&&m.version<S.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function L1(s,e,t){let r;function o(m){r=m}let l,u;function f(m){l=m.type,u=m.bytesPerElement}function p(m,S){s.drawElements(r,S,l,m*u),t.update(S,r,1)}function h(m,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,m*u,M),t.update(S,r,M))}function v(m,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,m,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,r,1)}function _(m,S,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<m.length;x++)h(m[x]/u,S[x],A[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,m,0,A,0,M);let x=0;for(let C=0;C<M;C++)x+=S[C]*A[C];t.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function N1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function D1(s,e,t){const r=new WeakMap,o=new Kt;function l(u,f,p){const h=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let m=r.get(f);if(m===void 0||m.count!==_){let ae=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",ae)};var S=ae;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let B=f.attributes.position.count*R,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const O=new Float32Array(B*I*4*_),w=new R0(O,B,I,_);w.type=Ci,w.needsUpdate=!0;const L=R*4;for(let k=0;k<_;k++){const ne=x[k],J=C[k],re=P[k],Z=B*I*4*k;for(let $=0;$<ne.count;$++){const V=$*L;M===!0&&(o.fromBufferAttribute(ne,$),O[Z+V+0]=o.x,O[Z+V+1]=o.y,O[Z+V+2]=o.z,O[Z+V+3]=0),A===!0&&(o.fromBufferAttribute(J,$),O[Z+V+4]=o.x,O[Z+V+5]=o.y,O[Z+V+6]=o.z,O[Z+V+7]=0),y===!0&&(o.fromBufferAttribute(re,$),O[Z+V+8]=o.x,O[Z+V+9]=o.y,O[Z+V+10]=o.z,O[Z+V+11]=re.itemSize===4?o.w:1)}}m={count:_,texture:w,size:new Ge(B,I)},r.set(f,m),f.addEventListener("dispose",ae)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const A=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",h)}p.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}return{update:l}}function I1(s,e,t,r,o){let l=new WeakMap;function u(h){const v=o.render.frame,_=h.geometry,m=e.get(h,_);if(l.get(m)!==v&&(e.update(m),l.set(m,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==v&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,v))),h.isSkinnedMesh){const S=h.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return m}function f(){l=new WeakMap}function p(h){const v=h.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const U1={[h0]:"LINEAR_TONE_MAPPING",[p0]:"REINHARD_TONE_MAPPING",[m0]:"CINEON_TONE_MAPPING",[g0]:"ACES_FILMIC_TONE_MAPPING",[_0]:"AGX_TONE_MAPPING",[x0]:"NEUTRAL_TONE_MAPPING",[v0]:"CUSTOM_TONE_MAPPING"};function F1(s,e,t,r,o){const l=new Li(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Li(e,t,{type:tr,depthBuffer:!1,stencilBuffer:!1}),f=new jn;f.setAttribute("position",new cn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new cn([0,2,0,0,2,0],2));const p=new AS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Xn(f,p),v=new Z0(-1,1,1,-1,0,1);let _=null,m=null,S=!1,M,A=null,y=[],x=!1;this.setSize=function(C,P){l.setSize(C,P),u.setSize(C,P);for(let R=0;R<y.length;R++){const B=y[R];B.setSize&&B.setSize(C,P)}},this.setEffects=function(C){y=C,x=y.length>0&&y[0].isRenderPass===!0;const P=l.width,R=l.height;for(let B=0;B<y.length;B++){const I=y[B];I.setSize&&I.setSize(P,R)}},this.begin=function(C,P){if(S||C.toneMapping===Pi&&y.length===0)return!1;if(A=P,P!==null){const R=P.width,B=P.height;(l.width!==R||l.height!==B)&&this.setSize(R,B)}return x===!1&&C.setRenderTarget(l),M=C.toneMapping,C.toneMapping=Pi,!0},this.hasRenderPass=function(){return x},this.end=function(C,P){C.toneMapping=M,S=!0;let R=l,B=u;for(let I=0;I<y.length;I++){const O=y[I];if(O.enabled!==!1&&(O.render(C,B,R,P),O.needsSwap!==!1)){const w=R;R=B,B=w}}if(_!==C.outputColorSpace||m!==C.toneMapping){_=C.outputColorSpace,m=C.toneMapping,p.defines={},Rt.getTransfer(_)===Ut&&(p.defines.SRGB_TRANSFER="");const I=U1[m];I&&(p.defines[I]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(A),C.render(h,v),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const J0=new bn,Vd=new aa(1,1),Q0=new R0,ev=new Sy,tv=new O0,bg=[],Cg=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function lo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=bg[o];if(l===void 0&&(l=new Float32Array(o),bg[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function xc(s,e){let t=Cg[e];t===void 0&&(t=new Int32Array(e),Cg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function O1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function k1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function B1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function V1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Lg.set(r),s.uniformMatrix2fv(this.addr,!1,Lg),rn(t,r)}}function H1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Pg.set(r),s.uniformMatrix3fv(this.addr,!1,Pg),rn(t,r)}}function G1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Rg.set(r),s.uniformMatrix4fv(this.addr,!1,Rg),rn(t,r)}}function W1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function X1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function j1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function $1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function K1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function J1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Vd.compareFunction=t.isReversedDepthBuffer()?nh:th,l=Vd):l=J0,t.setTexture2D(e||l,o)}function Q1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||ev,o)}function eT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||tv,o)}function tT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Q0,o)}function nT(s){switch(s){case 5126:return O1;case 35664:return k1;case 35665:return B1;case 35666:return z1;case 35674:return V1;case 35675:return H1;case 35676:return G1;case 5124:case 35670:return W1;case 35667:case 35671:return X1;case 35668:case 35672:return j1;case 35669:case 35673:return Y1;case 5125:return q1;case 36294:return Z1;case 36295:return $1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return J1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}function iT(s,e){s.uniform1fv(this.addr,e)}function rT(s,e){const t=lo(e,this.size,2);s.uniform2fv(this.addr,t)}function sT(s,e){const t=lo(e,this.size,3);s.uniform3fv(this.addr,t)}function oT(s,e){const t=lo(e,this.size,4);s.uniform4fv(this.addr,t)}function aT(s,e){const t=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function lT(s,e){const t=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function cT(s,e){const t=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function uT(s,e){s.uniform1iv(this.addr,e)}function fT(s,e){s.uniform2iv(this.addr,e)}function dT(s,e){s.uniform3iv(this.addr,e)}function hT(s,e){s.uniform4iv(this.addr,e)}function pT(s,e){s.uniform1uiv(this.addr,e)}function mT(s,e){s.uniform2uiv(this.addr,e)}function gT(s,e){s.uniform3uiv(this.addr,e)}function vT(s,e){s.uniform4uiv(this.addr,e)}function _T(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Vd:u=J0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function xT(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||ev,l[u])}function yT(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||tv,l[u])}function ST(s,e,t){const r=this.cache,o=e.length,l=xc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Q0,l[u])}function MT(s){switch(s){case 5126:return iT;case 35664:return rT;case 35665:return sT;case 35666:return oT;case 35674:return aT;case 35675:return lT;case 35676:return cT;case 5124:case 35670:return uT;case 35667:case 35671:return fT;case 35668:case 35672:return dT;case 35669:case 35673:return hT;case 5125:return pT;case 36294:return mT;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return ST}}class ET{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=nT(t.type)}}class TT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MT(t.type)}}class wT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Wf=/(\w+)(\])?(\[|\.)?/g;function Ng(s,e){s.seq.push(e),s.map[e.id]=e}function AT(s,e,t){const r=s.name,o=r.length;for(Wf.lastIndex=0;;){const l=Wf.exec(r),u=Wf.lastIndex;let f=l[1];const p=l[2]==="]",h=l[3];if(p&&(f=f|0),h===void 0||h==="["&&u+2===o){Ng(t,h===void 0?new ET(f,s,e):new TT(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new wT(f),Ng(t,_)),t=_}}}class lc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),p=e.getUniformLocation(t,f.name);AT(f,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Dg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const bT=37297;let CT=0;function RT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ig=new xt;function PT(s){Rt._getMatrix(Ig,Rt.workingColorSpace,s);const e=`mat3( ${Ig.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case cc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ug(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+RT(s.getShaderSource(e),f)}else return l}function LT(s,e){const t=PT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const NT={[h0]:"Linear",[p0]:"Reinhard",[m0]:"Cineon",[g0]:"ACESFilmic",[_0]:"AgX",[x0]:"Neutral",[v0]:"Custom"};function DT(s,e){const t=NT[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ec=new X;function IT(){Rt.getLuminanceCoefficients(ec);const s=ec.x.toFixed(4),e=ec.y.toFixed(4),t=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function UT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function FT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function OT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function Qo(s){return s!==""}function Fg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hd(s){return s.replace(kT,zT)}const BT=new Map;function zT(s,e){let t=yt[e];if(t===void 0){const r=BT.get(e);if(r!==void 0)t=yt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Hd(t)}const VT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kg(s){return s.replace(VT,HT)}function HT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Bg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const GT={[nc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function WT(s){return GT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XT={[ls]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function jT(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":XT[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const YT={[to]:"ENVMAP_MODE_REFRACTION"};function qT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZT={[d0]:"ENVMAP_BLENDING_MULTIPLY",[kx]:"ENVMAP_BLENDING_MIX",[Bx]:"ENVMAP_BLENDING_ADD"};function $T(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ZT[s.combine]||"ENVMAP_BLENDING_NONE"}function KT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function JT(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const p=WT(t),h=jT(t),v=qT(t),_=$T(t),m=KT(t),S=UT(t),M=FT(l),A=o.createProgram();let y,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qo).join(`
`),x.length>0&&(x+=`
`)):(y=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),x=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?yt.tonemapping_pars_fragment:"",t.toneMapping!==Pi?DT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,LT("linearToOutputTexel",t.outputColorSpace),IT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),u=Hd(u),u=Fg(u,t),u=Og(u,t),f=Hd(f),f=Fg(f,t),f=Og(f,t),u=kg(u),f=kg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=C+y+u,R=C+x+f,B=Dg(o,o.VERTEX_SHADER,P),I=Dg(o,o.FRAGMENT_SHADER,R);o.attachShader(A,B),o.attachShader(A,I),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(k){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(A)||"",J=o.getShaderInfoLog(B)||"",re=o.getShaderInfoLog(I)||"",Z=ne.trim(),$=J.trim(),V=re.trim();let q=!0,ee=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,B,I);else{const se=Ug(o,B,"vertex"),F=Ug(o,I,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+Z+`
`+se+`
`+F)}else Z!==""?dt("WebGLProgram: Program Info Log:",Z):($===""||V==="")&&(ee=!1);ee&&(k.diagnostics={runnable:q,programLog:Z,vertexShader:{log:$,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(B),o.deleteShader(I),w=new lc(o,A),L=OT(o,A)}let w;this.getUniforms=function(){return w===void 0&&O(this),w};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=o.getProgramParameter(A,bT)),ae},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=I,this}let QT=0;class ew{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new tw(e),t.set(e,r)),r}}class tw{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}}function nw(s,e,t,r,o,l){const u=new P0,f=new ew,p=new Set,h=[],v=new Map,_=r.logarithmicDepthBuffer;let m=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return p.add(w),w===0?"uv":`uv${w}`}function A(w,L,ae,k,ne){const J=k.fog,re=ne.geometry,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?k.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,V=e.get(w.envMap||Z,$),q=V&&V.mapping===gc?V.image.height:null,ee=S[w.type];w.precision!==null&&(m=r.getMaxPrecision(w.precision),m!==w.precision&&dt("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,F=se!==void 0?se.length:0;let j=0;re.morphAttributes.position!==void 0&&(j=1),re.morphAttributes.normal!==void 0&&(j=2),re.morphAttributes.color!==void 0&&(j=3);let Ae,Xe,et,oe;if(ee){const At=Ai[ee];Ae=At.vertexShader,Xe=At.fragmentShader}else Ae=w.vertexShader,Xe=w.fragmentShader,f.update(w),et=f.getVertexShaderID(w),oe=f.getFragmentShaderID(w);const ge=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Ie=ne.isInstancedMesh===!0,We=ne.isBatchedMesh===!0,ct=!!w.map,Lt=!!w.matcap,ht=!!V,ve=!!w.aoMap,Me=!!w.lightMap,_e=!!w.bumpMap,Ne=!!w.normalMap,D=!!w.displacementMap,ot=!!w.emissiveMap,Ue=!!w.metalnessMap,rt=!!w.roughnessMap,Pe=w.anisotropy>0,N=w.clearcoat>0,E=w.dispersion>0,G=w.iridescence>0,fe=w.sheen>0,me=w.transmission>0,de=Pe&&!!w.anisotropyMap,je=N&&!!w.clearcoatMap,be=N&&!!w.clearcoatNormalMap,Je=N&&!!w.clearcoatRoughnessMap,lt=G&&!!w.iridescenceMap,Se=G&&!!w.iridescenceThicknessMap,Re=fe&&!!w.sheenColorMap,Ke=fe&&!!w.sheenRoughnessMap,qe=!!w.specularMap,ke=!!w.specularColorMap,vt=!!w.specularIntensityMap,H=me&&!!w.transmissionMap,Le=me&&!!w.thicknessMap,we=!!w.gradientMap,Be=!!w.alphaMap,Te=w.alphaTest>0,he=!!w.alphaHash,Ze=!!w.extensions;let pt=Pi;w.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(pt=s.toneMapping);const It={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:Xe,defines:w.defines,customVertexShaderID:et,customFragmentShaderID:oe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:We,batchingColor:We&&ne._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&ne.instanceColor!==null,instancingMorph:Ie&&ne.morphTexture!==null,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:io,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Lt,envMap:ht,envMapMode:ht&&V.mapping,envMapCubeUVHeight:q,aoMap:ve,lightMap:Me,bumpMap:_e,normalMap:Ne,displacementMap:D,emissiveMap:ot,normalMapObjectSpace:Ne&&w.normalMapType===Gx,normalMapTangentSpace:Ne&&w.normalMapType===Hx,metalnessMap:Ue,roughnessMap:rt,anisotropy:Pe,anisotropyMap:de,clearcoat:N,clearcoatMap:je,clearcoatNormalMap:be,clearcoatRoughnessMap:Je,dispersion:E,iridescence:G,iridescenceMap:lt,iridescenceThicknessMap:Se,sheen:fe,sheenColorMap:Re,sheenRoughnessMap:Ke,specularMap:qe,specularColorMap:ke,specularIntensityMap:vt,transmission:me,transmissionMap:H,thicknessMap:Le,gradientMap:we,opaque:w.transparent===!1&&w.blending===Ks&&w.alphaToCoverage===!1,alphaMap:Be,alphaTest:Te,alphaHash:he,combine:w.combine,mapUv:ct&&M(w.map.channel),aoMapUv:ve&&M(w.aoMap.channel),lightMapUv:Me&&M(w.lightMap.channel),bumpMapUv:_e&&M(w.bumpMap.channel),normalMapUv:Ne&&M(w.normalMap.channel),displacementMapUv:D&&M(w.displacementMap.channel),emissiveMapUv:ot&&M(w.emissiveMap.channel),metalnessMapUv:Ue&&M(w.metalnessMap.channel),roughnessMapUv:rt&&M(w.roughnessMap.channel),anisotropyMapUv:de&&M(w.anisotropyMap.channel),clearcoatMapUv:je&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(w.sheenRoughnessMap.channel),specularMapUv:qe&&M(w.specularMap.channel),specularColorMapUv:ke&&M(w.specularColorMap.channel),specularIntensityMapUv:vt&&M(w.specularIntensityMap.channel),transmissionMapUv:H&&M(w.transmissionMap.channel),thicknessMapUv:Le&&M(w.thicknessMap.channel),alphaMapUv:Be&&M(w.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ne||Pe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!re.attributes.uv&&(ct||Be),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||re.attributes.normal===void 0&&Ne===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:pe,skinning:ne.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:j,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ae.length>0,shadowMapType:s.shadowMap.type,toneMapping:pt,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:ot&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===bi,flipSided:w.side===Fn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ze&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&w.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return It.vertexUv1s=p.has(1),It.vertexUv2s=p.has(2),It.vertexUv3s=p.has(3),p.clear(),It}function y(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ae in w.defines)L.push(ae),L.push(w.defines[ae]);return w.isRawShaderMaterial===!1&&(x(L,w),C(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function x(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function C(w,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),w.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),w.push(u.mask)}function P(w){const L=S[w.type];let ae;if(L){const k=Ai[L];ae=ES.clone(k.uniforms)}else ae=w.uniforms;return ae}function R(w,L){let ae=v.get(L);return ae!==void 0?++ae.usedTimes:(ae=new JT(s,L,w,o),h.push(ae),v.set(L,ae)),ae}function B(w){if(--w.usedTimes===0){const L=h.indexOf(w);h[L]=h[h.length-1],h.pop(),v.delete(w.cacheKey),w.destroy()}}function I(w){f.remove(w)}function O(){f.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:B,releaseShaderCache:I,programs:h,dispose:O}}function iw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,p){s.get(u)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function rw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(m){let S=0;return m.isInstancedMesh&&(S+=2),m.isSkinnedMesh&&(S+=1),S}function f(m,S,M,A,y,x){let C=s[e];return C===void 0?(C={id:m.id,object:m,geometry:S,material:M,materialVariant:u(m),groupOrder:A,renderOrder:m.renderOrder,z:y,group:x},s[e]=C):(C.id=m.id,C.object=m,C.geometry=S,C.material=M,C.materialVariant=u(m),C.groupOrder=A,C.renderOrder=m.renderOrder,C.z=y,C.group=x),e++,C}function p(m,S,M,A,y,x){const C=f(m,S,M,A,y,x);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function h(m,S,M,A,y,x){const C=f(m,S,M,A,y,x);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function v(m,S){t.length>1&&t.sort(m||rw),r.length>1&&r.sort(S||zg),o.length>1&&o.sort(S||zg)}function _(){for(let m=e,S=s.length;m<S;m++){const M=s[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:p,unshift:h,finish:_,sort:v}}function sw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Vg,s.set(r,[u])):o>=l.length?(u=new Vg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new wt};break;case"SpotLight":t={position:new X,direction:new X,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function aw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lw=0;function cw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uw(s){const e=new ow,t=aw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new X);const o=new X,l=new jt,u=new jt;function f(h){let v=0,_=0,m=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,M=0,A=0,y=0,x=0,C=0,P=0,R=0,B=0,I=0,O=0;h.sort(cw);for(let L=0,ae=h.length;L<ae;L++){const k=h[L],ne=k.color,J=k.intensity,re=k.distance;let Z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===no?Z=k.shadow.map.texture:Z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=ne.r*J,_+=ne.g*J,m+=ne.b*J;else if(k.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(k.sh.coefficients[$],J);O++}else if(k.isDirectionalLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const V=k.shadow,q=t.get(k);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=Z,r.directionalShadowMatrix[S]=k.shadow.matrix,C++}r.directional[S]=$,S++}else if(k.isSpotLight){const $=e.get(k);$.position.setFromMatrixPosition(k.matrixWorld),$.color.copy(ne).multiplyScalar(J),$.distance=re,$.coneCos=Math.cos(k.angle),$.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),$.decay=k.decay,r.spot[A]=$;const V=k.shadow;if(k.map&&(r.spotLightMap[B]=k.map,B++,V.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[A]=V.matrix,k.castShadow){const q=t.get(k);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=Z,R++}A++}else if(k.isRectAreaLight){const $=e.get(k);$.color.copy(ne).multiplyScalar(J),$.halfWidth.set(k.width*.5,0,0),$.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=$,y++}else if(k.isPointLight){const $=e.get(k);if($.color.copy(k.color).multiplyScalar(k.intensity),$.distance=k.distance,$.decay=k.decay,k.castShadow){const V=k.shadow,q=t.get(k);q.shadowIntensity=V.intensity,q.shadowBias=V.bias,q.shadowNormalBias=V.normalBias,q.shadowRadius=V.radius,q.shadowMapSize=V.mapSize,q.shadowCameraNear=V.camera.near,q.shadowCameraFar=V.camera.far,r.pointShadow[M]=q,r.pointShadowMap[M]=Z,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=$,M++}else if(k.isHemisphereLight){const $=e.get(k);$.skyColor.copy(k.color).multiplyScalar(J),$.groundColor.copy(k.groundColor).multiplyScalar(J),r.hemi[x]=$,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=m;const w=r.hash;(w.directionalLength!==S||w.pointLength!==M||w.spotLength!==A||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==C||w.numPointShadows!==P||w.numSpotShadows!==R||w.numSpotMaps!==B||w.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,w.directionalLength=S,w.pointLength=M,w.spotLength=A,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=C,w.numPointShadows=P,w.numSpotShadows=R,w.numSpotMaps=B,w.numLightProbes=O,r.version=lw++)}function p(h,v){let _=0,m=0,S=0,M=0,A=0;const y=v.matrixWorldInverse;for(let x=0,C=h.length;x<C;x++){const P=h[x];if(P.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(P.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(P.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),m++}else if(P.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function Hg(s){const e=new uw(s),t=[],r=[];function o(v){h.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:u}}function fw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Hg(s),e.set(o,[f])):l>=u.length?(f=new Hg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
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
}`,pw=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],mw=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Gg=new jt,$o=new X,Xf=new X;function gw(s,e,t){let r=new U0;const o=new Ge,l=new Ge,u=new Kt,f=new bS,p=new CS,h={},v=t.maxTextureSize,_={[Ir]:Fn,[Fn]:Ir,[bi]:bi},m=new Ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:dw,fragmentShader:hw}),S=m.clone();S.defines.HORIZONTAL_PASS=1;const M=new jn;M.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Xn(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let x=this.type;this.render=function(I,O,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===xx&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const L=s.getRenderTarget(),ae=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Qi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const J=x!==this.type;J&&O.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(Z=>Z.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,Z=I.length;re<Z;re++){const $=I[re],V=$.shadow;if(V===void 0){dt("WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const q=V.getFrameExtents();o.multiply(q),l.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/q.x),o.x=l.x*q.x,V.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/q.y),o.y=l.y*q.y,V.mapSize.y=l.y));const ee=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=ee,V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ko){if($.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Li(o.x,o.y,{format:no,type:tr,minFilter:yn,magFilter:yn,generateMipmaps:!1}),V.map.texture.name=$.name+".shadowMap",V.map.depthTexture=new aa(o.x,o.y,Ci),V.map.depthTexture.name=$.name+".shadowMapDepth",V.map.depthTexture.format=nr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=hn,V.map.depthTexture.magFilter=hn}else $.isPointLight?(V.map=new K0(o.x),V.map.depthTexture=new Vy(o.x,Di)):(V.map=new Li(o.x,o.y),V.map.depthTexture=new aa(o.x,o.y,Di)),V.map.depthTexture.name=$.name+".shadowMap",V.map.depthTexture.format=nr,this.type===nc?(V.map.depthTexture.compareFunction=ee?nh:th,V.map.depthTexture.minFilter=yn,V.map.depthTexture.magFilter=yn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=hn,V.map.depthTexture.magFilter=hn);V.camera.updateProjectionMatrix()}const se=V.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<se;F++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,F),s.clear();else{F===0&&(s.setRenderTarget(V.map),s.clear());const j=V.getViewport(F);u.set(l.x*j.x,l.y*j.y,l.x*j.z,l.y*j.w),ne.viewport(u)}if($.isPointLight){const j=V.camera,Ae=V.matrix,Xe=$.distance||j.far;Xe!==j.far&&(j.far=Xe,j.updateProjectionMatrix()),$o.setFromMatrixPosition($.matrixWorld),j.position.copy($o),Xf.copy(j.position),Xf.add(pw[F]),j.up.copy(mw[F]),j.lookAt(Xf),j.updateMatrixWorld(),Ae.makeTranslation(-$o.x,-$o.y,-$o.z),Gg.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gg,j.coordinateSystem,j.reversedDepth)}else V.updateMatrices($);r=V.getFrustum(),R(O,w,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Ko&&C(V,w),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(L,ae,k)};function C(I,O){const w=e.update(A);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Li(o.x,o.y,{format:no,type:tr})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,w,m,A,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,w,S,A,null)}function P(I,O,w,L){let ae=null;const k=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)ae=k;else if(ae=w.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const ne=ae.uuid,J=O.uuid;let re=h[ne];re===void 0&&(re={},h[ne]=re);let Z=re[J];Z===void 0&&(Z=ae.clone(),re[J]=Z,O.addEventListener("dispose",B)),ae=Z}if(ae.visible=O.visible,ae.wireframe=O.wireframe,L===Ko?ae.side=O.shadowSide!==null?O.shadowSide:O.side:ae.side=O.shadowSide!==null?O.shadowSide:_[O.side],ae.alphaMap=O.alphaMap,ae.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,ae.map=O.map,ae.clipShadows=O.clipShadows,ae.clippingPlanes=O.clippingPlanes,ae.clipIntersection=O.clipIntersection,ae.displacementMap=O.displacementMap,ae.displacementScale=O.displacementScale,ae.displacementBias=O.displacementBias,ae.wireframeLinewidth=O.wireframeLinewidth,ae.linewidth=O.linewidth,w.isPointLight===!0&&ae.isMeshDistanceMaterial===!0){const ne=s.properties.get(ae);ne.light=w}return ae}function R(I,O,w,L,ae){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ae===Ko)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const J=e.update(I),re=I.material;if(Array.isArray(re)){const Z=J.groups;for(let $=0,V=Z.length;$<V;$++){const q=Z[$],ee=re[q.materialIndex];if(ee&&ee.visible){const se=P(I,ee,L,ae);I.onBeforeShadow(s,I,O,w,J,se,q),s.renderBufferDirect(w,null,J,se,I,q),I.onAfterShadow(s,I,O,w,J,se,q)}}}else if(re.visible){const Z=P(I,re,L,ae);I.onBeforeShadow(s,I,O,w,J,Z,null),s.renderBufferDirect(w,null,J,Z,I,null),I.onAfterShadow(s,I,O,w,J,Z,null)}}const ne=I.children;for(let J=0,re=ne.length;J<re;J++)R(ne[J],O,w,L,ae)}function B(I){I.target.removeEventListener("dispose",B);for(const w in h){const L=h[w],ae=I.target.uuid;ae in L&&(L[ae].dispose(),delete L[ae])}}}function vw(s,e){function t(){let H=!1;const Le=new Kt;let we=null;const Be=new Kt(0,0,0,0);return{setMask:function(Te){we!==Te&&!H&&(s.colorMask(Te,Te,Te,Te),we=Te)},setLocked:function(Te){H=Te},setClear:function(Te,he,Ze,pt,It){It===!0&&(Te*=pt,he*=pt,Ze*=pt),Le.set(Te,he,Ze,pt),Be.equals(Le)===!1&&(s.clearColor(Te,he,Ze,pt),Be.copy(Le))},reset:function(){H=!1,we=null,Be.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,we=null,Be=null,Te=null;return{setReversed:function(he){if(Le!==he){const Ze=e.get("EXT_clip_control");he?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Le=he;const pt=Te;Te=null,this.setClear(pt)}},getReversed:function(){return Le},setTest:function(he){he?ge(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(he){we!==he&&!H&&(s.depthMask(he),we=he)},setFunc:function(he){if(Le&&(he=Qx[he]),Be!==he){switch(he){case $f:s.depthFunc(s.NEVER);break;case Kf:s.depthFunc(s.ALWAYS);break;case Jf:s.depthFunc(s.LESS);break;case eo:s.depthFunc(s.LEQUAL);break;case Qf:s.depthFunc(s.EQUAL);break;case ed:s.depthFunc(s.GEQUAL);break;case td:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=he}},setLocked:function(he){H=he},setClear:function(he){Te!==he&&(Te=he,Le&&(he=1-he),s.clearDepth(he))},reset:function(){H=!1,we=null,Be=null,Te=null,Le=!1}}}function o(){let H=!1,Le=null,we=null,Be=null,Te=null,he=null,Ze=null,pt=null,It=null;return{setTest:function(At){H||(At?ge(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(At){Le!==At&&!H&&(s.stencilMask(At),Le=At)},setFunc:function(At,Yn,Sn){(we!==At||Be!==Yn||Te!==Sn)&&(s.stencilFunc(At,Yn,Sn),we=At,Be=Yn,Te=Sn)},setOp:function(At,Yn,Sn){(he!==At||Ze!==Yn||pt!==Sn)&&(s.stencilOp(At,Yn,Sn),he=At,Ze=Yn,pt=Sn)},setLocked:function(At){H=At},setClear:function(At){It!==At&&(s.clearStencil(At),It=At)},reset:function(){H=!1,Le=null,we=null,Be=null,Te=null,he=null,Ze=null,pt=null,It=null}}}const l=new t,u=new r,f=new o,p=new WeakMap,h=new WeakMap;let v={},_={},m=new WeakMap,S=[],M=null,A=!1,y=null,x=null,C=null,P=null,R=null,B=null,I=null,O=new wt(0,0,0),w=0,L=!1,ae=null,k=null,ne=null,J=null,re=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,V=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=V>=1):q.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=V>=2);let ee=null,se={};const F=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),Ae=new Kt().fromArray(F),Xe=new Kt().fromArray(j);function et(H,Le,we,Be){const Te=new Uint8Array(4),he=s.createTexture();s.bindTexture(H,he),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<we;Ze++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(Le+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return he}const oe={};oe[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ge(s.DEPTH_TEST),u.setFunc(eo),_e(!1),Ne(Bm),ge(s.CULL_FACE),ve(Qi);function ge(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function pe(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Ie(H,Le){return _[H]!==Le?(s.bindFramebuffer(H,Le),_[H]=Le,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Le),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function We(H,Le){let we=S,Be=!1;if(H){we=m.get(Le),we===void 0&&(we=[],m.set(Le,we));const Te=H.textures;if(we.length!==Te.length||we[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ze=Te.length;he<Ze;he++)we[he]=s.COLOR_ATTACHMENT0+he;we.length=Te.length,Be=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,Be=!0);Be&&s.drawBuffers(we)}function ct(H){return M!==H?(s.useProgram(H),M=H,!0):!1}const Lt={[is]:s.FUNC_ADD,[Sx]:s.FUNC_SUBTRACT,[Mx]:s.FUNC_REVERSE_SUBTRACT};Lt[Ex]=s.MIN,Lt[Tx]=s.MAX;const ht={[wx]:s.ZERO,[Ax]:s.ONE,[bx]:s.SRC_COLOR,[qf]:s.SRC_ALPHA,[Dx]:s.SRC_ALPHA_SATURATE,[Lx]:s.DST_COLOR,[Rx]:s.DST_ALPHA,[Cx]:s.ONE_MINUS_SRC_COLOR,[Zf]:s.ONE_MINUS_SRC_ALPHA,[Nx]:s.ONE_MINUS_DST_COLOR,[Px]:s.ONE_MINUS_DST_ALPHA,[Ix]:s.CONSTANT_COLOR,[Ux]:s.ONE_MINUS_CONSTANT_COLOR,[Fx]:s.CONSTANT_ALPHA,[Ox]:s.ONE_MINUS_CONSTANT_ALPHA};function ve(H,Le,we,Be,Te,he,Ze,pt,It,At){if(H===Qi){A===!0&&(pe(s.BLEND),A=!1);return}if(A===!1&&(ge(s.BLEND),A=!0),H!==yx){if(H!==y||At!==L){if((x!==is||R!==is)&&(s.blendEquation(s.FUNC_ADD),x=is,R=is),At)switch(H){case Ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yf:s.blendFunc(s.ONE,s.ONE);break;case zm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case Ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case zm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}C=null,P=null,B=null,I=null,O.set(0,0,0),w=0,y=H,L=At}return}Te=Te||Le,he=he||we,Ze=Ze||Be,(Le!==x||Te!==R)&&(s.blendEquationSeparate(Lt[Le],Lt[Te]),x=Le,R=Te),(we!==C||Be!==P||he!==B||Ze!==I)&&(s.blendFuncSeparate(ht[we],ht[Be],ht[he],ht[Ze]),C=we,P=Be,B=he,I=Ze),(pt.equals(O)===!1||It!==w)&&(s.blendColor(pt.r,pt.g,pt.b,It),O.copy(pt),w=It),y=H,L=!1}function Me(H,Le){H.side===bi?pe(s.CULL_FACE):ge(s.CULL_FACE);let we=H.side===Fn;Le&&(we=!we),_e(we),H.blending===Ks&&H.transparent===!1?ve(Qi):ve(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Be=H.stencilWrite;f.setTest(Be),Be&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ot(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(H){ae!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),ae=H)}function Ne(H){H!==vx?(ge(s.CULL_FACE),H!==k&&(H===Bm?s.cullFace(s.BACK):H===_x?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),k=H}function D(H){H!==ne&&($&&s.lineWidth(H),ne=H)}function ot(H,Le,we){H?(ge(s.POLYGON_OFFSET_FILL),(J!==Le||re!==we)&&(J=Le,re=we,u.getReversed()&&(Le=-Le),s.polygonOffset(Le,we))):pe(s.POLYGON_OFFSET_FILL)}function Ue(H){H?ge(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function rt(H){H===void 0&&(H=s.TEXTURE0+Z-1),ee!==H&&(s.activeTexture(H),ee=H)}function Pe(H,Le,we){we===void 0&&(ee===null?we=s.TEXTURE0+Z-1:we=ee);let Be=se[we];Be===void 0&&(Be={type:void 0,texture:void 0},se[we]=Be),(Be.type!==H||Be.texture!==Le)&&(ee!==we&&(s.activeTexture(we),ee=we),s.bindTexture(H,Le||oe[H]),Be.type=H,Be.texture=Le)}function N(){const H=se[ee];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function fe(){try{s.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function je(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function be(){try{s.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Je(){try{s.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function lt(){try{s.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Se(){try{s.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Re(H){Ae.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ae.copy(H))}function Ke(H){Xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function qe(H,Le){let we=h.get(Le);we===void 0&&(we=new WeakMap,h.set(Le,we));let Be=we.get(H);Be===void 0&&(Be=s.getUniformBlockIndex(Le,H.name),we.set(H,Be))}function ke(H,Le){const Be=h.get(Le).get(H);p.get(Le)!==Be&&(s.uniformBlockBinding(Le,Be,H.__bindingPointIndex),p.set(Le,Be))}function vt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ee=null,se={},_={},m=new WeakMap,S=[],M=null,A=!1,y=null,x=null,C=null,P=null,R=null,B=null,I=null,O=new wt(0,0,0),w=0,L=!1,ae=null,k=null,ne=null,J=null,re=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ge,disable:pe,bindFramebuffer:Ie,drawBuffers:We,useProgram:ct,setBlending:ve,setMaterial:Me,setFlipSided:_e,setCullFace:Ne,setLineWidth:D,setPolygonOffset:ot,setScissorTest:Ue,activeTexture:rt,bindTexture:Pe,unbindTexture:N,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:lt,texImage3D:Se,updateUBOMapping:qe,uniformBlockBinding:ke,texStorage2D:be,texStorage3D:Je,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:de,compressedTexSubImage3D:je,scissor:Re,viewport:Ke,reset:vt}}function _w(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ge,v=new WeakMap;let _;const m=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,E){return S?new OffscreenCanvas(N,E):fc("canvas")}function A(N,E,G){let fe=1;const me=Pe(N);if((me.width>G||me.height>G)&&(fe=G/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(fe*me.width),je=Math.floor(fe*me.height);_===void 0&&(_=M(de,je));const be=E?M(de,je):_;return be.width=de,be.height=je,be.getContext("2d").drawImage(N,0,0,de,je),dt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+de+"x"+je+")."),be}else return"data"in N&&dt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),N;return N}function y(N){return N.generateMipmaps}function x(N){s.generateMipmap(N)}function C(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(N,E,G,fe,me=!1){if(N!==null){if(s[N]!==void 0)return s[N];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=E;if(E===s.RED&&(G===s.FLOAT&&(de=s.R32F),G===s.HALF_FLOAT&&(de=s.R16F),G===s.UNSIGNED_BYTE&&(de=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(de=s.R8UI),G===s.UNSIGNED_SHORT&&(de=s.R16UI),G===s.UNSIGNED_INT&&(de=s.R32UI),G===s.BYTE&&(de=s.R8I),G===s.SHORT&&(de=s.R16I),G===s.INT&&(de=s.R32I)),E===s.RG&&(G===s.FLOAT&&(de=s.RG32F),G===s.HALF_FLOAT&&(de=s.RG16F),G===s.UNSIGNED_BYTE&&(de=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(de=s.RG8UI),G===s.UNSIGNED_SHORT&&(de=s.RG16UI),G===s.UNSIGNED_INT&&(de=s.RG32UI),G===s.BYTE&&(de=s.RG8I),G===s.SHORT&&(de=s.RG16I),G===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(de=s.RGB8UI),G===s.UNSIGNED_SHORT&&(de=s.RGB16UI),G===s.UNSIGNED_INT&&(de=s.RGB32UI),G===s.BYTE&&(de=s.RGB8I),G===s.SHORT&&(de=s.RGB16I),G===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),G===s.UNSIGNED_INT&&(de=s.RGBA32UI),G===s.BYTE&&(de=s.RGBA8I),G===s.SHORT&&(de=s.RGBA16I),G===s.INT&&(de=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),E===s.RGBA){const je=me?cc:Rt.getTransfer(fe);G===s.FLOAT&&(de=s.RGBA32F),G===s.HALF_FLOAT&&(de=s.RGBA16F),G===s.UNSIGNED_BYTE&&(de=je===Ut?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(N,E){let G;return N?E===null||E===Di||E===sa?G=s.DEPTH24_STENCIL8:E===Ci?G=s.DEPTH32F_STENCIL8:E===ra&&(G=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Di||E===sa?G=s.DEPTH_COMPONENT24:E===Ci?G=s.DEPTH_COMPONENT32F:E===ra&&(G=s.DEPTH_COMPONENT16),G}function B(N,E){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==hn&&N.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),w(E),E.isVideoTexture&&v.delete(E)}function O(N){const E=N.target;E.removeEventListener("dispose",O),ae(E)}function w(N){const E=r.get(N);if(E.__webglInit===void 0)return;const G=N.source,fe=m.get(G);if(fe){const me=fe[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&L(N),Object.keys(fe).length===0&&m.delete(G)}r.remove(N)}function L(N){const E=r.get(N);s.deleteTexture(E.__webglTexture);const G=N.source,fe=m.get(G);delete fe[E.__cacheKey],u.memory.textures--}function ae(N){const E=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let me=0;me<E.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=N.textures;for(let fe=0,me=G.length;fe<me;fe++){const de=r.get(G[fe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(G[fe])}r.remove(N)}let k=0;function ne(){k=0}function J(){const N=k;return N>=o.maxTextures&&dt("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),k+=1,N}function re(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function Z(N,E){const G=r.get(N);if(N.isVideoTexture&&Ue(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const fe=N.image;if(fe===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(G,N,E);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function $(N,E){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){oe(G,N,E);return}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function V(N,E){const G=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){oe(G,N,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function q(N,E){const G=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&G.__version!==N.version){ge(G,N,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const ee={[id]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[rd]:s.MIRRORED_REPEAT},se={[hn]:s.NEAREST,[zx]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[df]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},F={[Wx]:s.NEVER,[Zx]:s.ALWAYS,[Xx]:s.LESS,[th]:s.LEQUAL,[jx]:s.EQUAL,[nh]:s.GEQUAL,[Yx]:s.GREATER,[qx]:s.NOTEQUAL};function j(N,E){if(E.type===Ci&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===df||E.magFilter===wl||E.magFilter===ss||E.minFilter===yn||E.minFilter===df||E.minFilter===wl||E.minFilter===ss)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,ee[E.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,ee[E.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,ee[E.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hn||E.minFilter!==wl&&E.minFilter!==ss||E.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(N,E){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const fe=E.source;let me=m.get(fe);me===void 0&&(me={},m.set(fe,me));const de=re(E);if(de!==N.__cacheKey){me[de]===void 0&&(me[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,G=!0),me[de].usedTimes++;const je=me[N.__cacheKey];je!==void 0&&(me[N.__cacheKey].usedTimes--,je.usedTimes===0&&L(E)),N.__cacheKey=de,N.__webglTexture=me[de].texture}return G}function Xe(N,E,G){return Math.floor(Math.floor(N/G)/E)}function et(N,E,G,fe){const de=N.updateRanges;if(de.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,fe,E.data);else{de.sort((Se,Re)=>Se.start-Re.start);let je=0;for(let Se=1;Se<de.length;Se++){const Re=de[je],Ke=de[Se],qe=Re.start+Re.count,ke=Xe(Ke.start,E.width,4),vt=Xe(Re.start,E.width,4);Ke.start<=qe+1&&ke===vt&&Xe(Ke.start+Ke.count-1,E.width,4)===ke?Re.count=Math.max(Re.count,Ke.start+Ke.count-Re.start):(++je,de[je]=Ke)}de.length=je+1;const be=s.getParameter(s.UNPACK_ROW_LENGTH),Je=s.getParameter(s.UNPACK_SKIP_PIXELS),lt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Re=de.length;Se<Re;Se++){const Ke=de[Se],qe=Math.floor(Ke.start/4),ke=Math.ceil(Ke.count/4),vt=qe%E.width,H=Math.floor(qe/E.width),Le=ke,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,vt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,vt,H,Le,we,G,fe,E.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Je),s.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function oe(N,E,G){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const me=Ae(N,E),de=E.source;t.bindTexture(fe,N.__webglTexture,s.TEXTURE0+G);const je=r.get(de);if(de.version!==je.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const be=Rt.getPrimaries(Rt.workingColorSpace),Je=E.colorSpace===Nr?null:Rt.getPrimaries(E.colorSpace),lt=E.colorSpace===Nr||be===Je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=A(E.image,!1,o.maxTextureSize);Se=rt(E,Se);const Re=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let qe=P(E.internalFormat,Re,Ke,E.colorSpace,E.isVideoTexture);j(fe,E);let ke;const vt=E.mipmaps,H=E.isVideoTexture!==!0,Le=je.__version===void 0||me===!0,we=de.dataReady,Be=B(E,Se);if(E.isDepthTexture)qe=R(E.format===os,E.type),Le&&(H?t.texStorage2D(s.TEXTURE_2D,1,qe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,Ke,null));else if(E.isDataTexture)if(vt.length>0){H&&Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,vt[0].width,vt[0].height);for(let Te=0,he=vt.length;Te<he;Te++)ke=vt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,Ke,ke.data):t.texImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,Re,Ke,ke.data);E.generateMipmaps=!1}else H?(Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,Se.width,Se.height),we&&et(E,Se,Re,Ke)):t.texImage2D(s.TEXTURE_2D,0,qe,Se.width,Se.height,0,Re,Ke,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,vt[0].width,vt[0].height,Se.depth);for(let Te=0,he=vt.length;Te<he;Te++)if(ke=vt[Te],E.format!==_i)if(Re!==null)if(H){if(we)if(E.layerUpdates.size>0){const Ze=yg(ke.width,ke.height,E.format,E.type);for(const pt of E.layerUpdates){const It=ke.data.subarray(pt*Ze/ke.data.BYTES_PER_ELEMENT,(pt+1)*Ze/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,pt,ke.width,ke.height,1,Re,It)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ke.width,ke.height,Se.depth,Re,ke.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,qe,ke.width,ke.height,Se.depth,0,ke.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,ke.width,ke.height,Se.depth,Re,Ke,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,qe,ke.width,ke.height,Se.depth,0,Re,Ke,ke.data)}else{H&&Le&&t.texStorage2D(s.TEXTURE_2D,Be,qe,vt[0].width,vt[0].height);for(let Te=0,he=vt.length;Te<he;Te++)ke=vt[Te],E.format!==_i?Re!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,ke.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,ke.width,ke.height,Re,Ke,ke.data):t.texImage2D(s.TEXTURE_2D,Te,qe,ke.width,ke.height,0,Re,Ke,ke.data)}else if(E.isDataArrayTexture)if(H){if(Le&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,Se.width,Se.height,Se.depth),we)if(E.layerUpdates.size>0){const Te=yg(Se.width,Se.height,E.format,E.type);for(const he of E.layerUpdates){const Ze=Se.data.subarray(he*Te/Se.data.BYTES_PER_ELEMENT,(he+1)*Te/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Re,Ke,Ze)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ke,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Se.width,Se.height,Se.depth,0,Re,Ke,Se.data);else if(E.isData3DTexture)H?(Le&&t.texStorage3D(s.TEXTURE_3D,Be,qe,Se.width,Se.height,Se.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,Ke,Se.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Se.width,Se.height,Se.depth,0,Re,Ke,Se.data);else if(E.isFramebufferTexture){if(Le)if(H)t.texStorage2D(s.TEXTURE_2D,Be,qe,Se.width,Se.height);else{let Te=Se.width,he=Se.height;for(let Ze=0;Ze<Be;Ze++)t.texImage2D(s.TEXTURE_2D,Ze,qe,Te,he,0,Re,Ke,null),Te>>=1,he>>=1}}else if(vt.length>0){if(H&&Le){const Te=Pe(vt[0]);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}for(let Te=0,he=vt.length;Te<he;Te++)ke=vt[Te],H?we&&t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Re,Ke,ke):t.texImage2D(s.TEXTURE_2D,Te,qe,Re,Ke,ke);E.generateMipmaps=!1}else if(H){if(Le){const Te=Pe(Se);t.texStorage2D(s.TEXTURE_2D,Be,qe,Te.width,Te.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ke,Se)}else t.texImage2D(s.TEXTURE_2D,0,qe,Re,Ke,Se);y(E)&&x(fe),je.__version=de.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function ge(N,E,G){if(E.image.length!==6)return;const fe=Ae(N,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+G);const de=r.get(me);if(me.version!==de.__version||fe===!0){t.activeTexture(s.TEXTURE0+G);const je=Rt.getPrimaries(Rt.workingColorSpace),be=E.colorSpace===Nr?null:Rt.getPrimaries(E.colorSpace),Je=E.colorSpace===Nr||je===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Re=[];for(let he=0;he<6;he++)!lt&&!Se?Re[he]=A(E.image[he],!0,o.maxCubemapSize):Re[he]=Se?E.image[he].image:E.image[he],Re[he]=rt(E,Re[he]);const Ke=Re[0],qe=l.convert(E.format,E.colorSpace),ke=l.convert(E.type),vt=P(E.internalFormat,qe,ke,E.colorSpace),H=E.isVideoTexture!==!0,Le=de.__version===void 0||fe===!0,we=me.dataReady;let Be=B(E,Ke);j(s.TEXTURE_CUBE_MAP,E);let Te;if(lt){H&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,Ke.width,Ke.height);for(let he=0;he<6;he++){Te=Re[he].mipmaps;for(let Ze=0;Ze<Te.length;Ze++){const pt=Te[Ze];E.format!==_i?qe!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze,0,0,pt.width,pt.height,qe,pt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze,vt,pt.width,pt.height,0,pt.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze,0,0,pt.width,pt.height,qe,ke,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze,vt,pt.width,pt.height,0,qe,ke,pt.data)}}}else{if(Te=E.mipmaps,H&&Le){Te.length>0&&Be++;const he=Pe(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Be,vt,he.width,he.height)}for(let he=0;he<6;he++)if(Se){H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Re[he].width,Re[he].height,qe,ke,Re[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,vt,Re[he].width,Re[he].height,0,qe,ke,Re[he].data);for(let Ze=0;Ze<Te.length;Ze++){const It=Te[Ze].image[he].image;H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze+1,0,0,It.width,It.height,qe,ke,It.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze+1,vt,It.width,It.height,0,qe,ke,It.data)}}else{H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,qe,ke,Re[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,vt,qe,ke,Re[he]);for(let Ze=0;Ze<Te.length;Ze++){const pt=Te[Ze];H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze+1,0,0,qe,ke,pt.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ze+1,vt,qe,ke,pt.image[he])}}}y(E)&&x(s.TEXTURE_CUBE_MAP),de.__version=me.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function pe(N,E,G,fe,me,de){const je=l.convert(G.format,G.colorSpace),be=l.convert(G.type),Je=P(G.internalFormat,je,be,G.colorSpace),lt=r.get(E),Se=r.get(G);if(Se.__renderTarget=E,!lt.__hasExternalTextures){const Re=Math.max(1,E.width>>de),Ke=Math.max(1,E.height>>de);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,de,Je,Re,Ke,E.depth,0,je,be,null):t.texImage2D(me,de,Je,Re,Ke,0,je,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,Se.__webglTexture,0,D(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,Se.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ie(N,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,N),E.depthBuffer){const fe=E.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,de=R(E.stencilBuffer,me),je=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(E),de,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(E),de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,je,s.RENDERBUFFER,N)}else{const fe=E.textures;for(let me=0;me<fe.length;me++){const de=fe[me],je=l.convert(de.format,de.colorSpace),be=l.convert(de.type),Je=P(de.internalFormat,je,be,de.colorSpace);ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,D(E),Je,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,D(E),Je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function We(N,E,G){const fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),j(s.TEXTURE_CUBE_MAP,E.depthTexture);const lt=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let Re;E.depthTexture.format===nr?Re=s.DEPTH_COMPONENT24:E.depthTexture.format===os&&(Re=s.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Re,E.width,E.height,0,lt,Se,null)}}else Z(E.depthTexture,0);const de=me.__webglTexture,je=D(E),be=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Je=E.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===nr)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,be,de,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Je,be,de,0);else if(E.depthTexture.format===os)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Je,be,de,0,je):s.framebufferTexture2D(s.FRAMEBUFFER,Je,be,de,0);else throw new Error("Unknown depthTexture format")}function ct(N){const E=r.get(N),G=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const fe=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=fe}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let fe=0;fe<6;fe++)We(E.__webglFramebuffer[fe],N,fe);else{const fe=N.texture.mipmaps;fe&&fe.length>0?We(E.__webglFramebuffer[0],N,0):We(E.__webglFramebuffer,N,0)}else if(G){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),Ie(E.__webglDepthbuffer[fe],N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,de)}}else{const fe=N.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ie(E.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,de)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(N,E,G){const fe=r.get(N);E!==void 0&&pe(fe.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ct(N)}function ht(N){const E=N.texture,G=r.get(N),fe=r.get(E);N.addEventListener("dispose",O);const me=N.textures,de=N.isWebGLCubeRenderTarget===!0,je=me.length>1;if(je||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,u.memory.textures++),de){G.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[be]=[];for(let Je=0;Je<E.mipmaps.length;Je++)G.__webglFramebuffer[be][Je]=s.createFramebuffer()}else G.__webglFramebuffer[be]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)G.__webglFramebuffer[be]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(je)for(let be=0,Je=me.length;be<Je;be++){const lt=r.get(me[be]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),u.memory.textures++)}if(N.samples>0&&ot(N)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let be=0;be<me.length;be++){const Je=me[be];G.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[be]);const lt=l.convert(Je.format,Je.colorSpace),Se=l.convert(Je.type),Re=P(Je.internalFormat,lt,Se,Je.colorSpace,N.isXRRenderTarget===!0),Ke=D(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Re,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,G.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ie(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),j(s.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[be][Je],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Je);else pe(G.__webglFramebuffer[be],N,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(E)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(je){for(let be=0,Je=me.length;be<Je;be++){const lt=me[be],Se=r.get(lt);let Re=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Re=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,Se.__webglTexture),j(Re,lt),pe(G.__webglFramebuffer,N,lt,s.COLOR_ATTACHMENT0+be,Re,0),y(lt)&&x(Re)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(be=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),j(be,E),E.mipmaps&&E.mipmaps.length>0)for(let Je=0;Je<E.mipmaps.length;Je++)pe(G.__webglFramebuffer[Je],N,E,s.COLOR_ATTACHMENT0,be,Je);else pe(G.__webglFramebuffer,N,E,s.COLOR_ATTACHMENT0,be,0);y(E)&&x(be),t.unbindTexture()}N.depthBuffer&&ct(N)}function ve(N){const E=N.textures;for(let G=0,fe=E.length;G<fe;G++){const me=E[G];if(y(me)){const de=C(N),je=r.get(me).__webglTexture;t.bindTexture(de,je),x(de),t.unbindTexture()}}}const Me=[],_e=[];function Ne(N){if(N.samples>0){if(ot(N)===!1){const E=N.textures,G=N.width,fe=N.height;let me=s.COLOR_BUFFER_BIT;const de=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,je=r.get(N),be=E.length>1;if(be)for(let lt=0;lt<E.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Je=N.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,je.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,G,fe,0,0,G,fe,me,s.NEAREST),p===!0&&(Me.length=0,_e.length=0,Me.push(s.COLOR_ATTACHMENT0+lt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Me.push(de),_e.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,_e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let lt=0;lt<E.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,je.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const E=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function D(N){return Math.min(o.maxSamples,N.samples)}function ot(N){const E=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ue(N){const E=u.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function rt(N,E){const G=N.colorSpace,fe=N.format,me=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==io&&G!==Nr&&(Rt.getTransfer(G)===Ut?(fe!==_i||me!==si)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",G)),E}function Pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=ne,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=Lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xw(s,e){function t(r,o=Nr){let l;const u=Rt.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===$d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===E0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===T0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===S0)return s.BYTE;if(r===M0)return s.SHORT;if(r===ra)return s.UNSIGNED_SHORT;if(r===Zd)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===Ci)return s.FLOAT;if(r===tr)return s.HALF_FLOAT;if(r===w0)return s.ALPHA;if(r===A0)return s.RGB;if(r===_i)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===os)return s.DEPTH_STENCIL;if(r===b0)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===no)return s.RG;if(r===Qd)return s.RG_INTEGER;if(r===eh)return s.RGBA_INTEGER;if(r===ic||r===rc||r===sc||r===oc)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ic)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ic)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sd||r===od||r===ad||r===ld)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===sd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===od)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cd||r===ud||r===fd||r===dd||r===hd||r===pd||r===md)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===cd||r===ud)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===fd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===dd)return l.COMPRESSED_R11_EAC;if(r===hd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===pd)return l.COMPRESSED_RG11_EAC;if(r===md)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===wd||r===Ad||r===bd||r===Cd||r===Rd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===gd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_d)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Td)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pd||r===Ld||r===Nd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Pd)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dd||r===Id||r===Ud||r===Fd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Dd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Id)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ud)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===sa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sw=`
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

}`;class Mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new k0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ii({vertexShader:yw,fragmentShader:Sw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new ma(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ew extends oo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",p=1,h=null,v=null,_=null,m=null,S=null,M=null;const A=typeof XRWebGLBinding<"u",y=new Mw,x={},C=t.getContextAttributes();let P=null,R=null;const B=[],I=[],O=new Ge;let w=null;const L=new ri;L.viewport=new Kt;const ae=new ri;ae.viewport=new Kt;const k=[L,ae],ne=new IS;let J=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ge=B[oe];return ge===void 0&&(ge=new _f,B[oe]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(oe){let ge=B[oe];return ge===void 0&&(ge=new _f,B[oe]=ge),ge.getGripSpace()},this.getHand=function(oe){let ge=B[oe];return ge===void 0&&(ge=new _f,B[oe]=ge),ge.getHandSpace()};function Z(oe){const ge=I.indexOf(oe.inputSource);if(ge===-1)return;const pe=B[ge];pe!==void 0&&(pe.update(oe.inputSource,oe.frame,h||u),pe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function $(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",V);for(let oe=0;oe<B.length;oe++){const ge=I[oe];ge!==null&&(I[oe]=null,B[oe].disconnect(ge))}J=null,re=null,y.reset();for(const oe in x)delete x[oe];e.setRenderTarget(P),S=null,m=null,_=null,o=null,R=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:S},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",$),o.addEventListener("inputsourceschange",V),C.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,We=null;C.depth&&(We=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=C.stencil?os:nr,Ie=C.stencil?sa:Di);const ct={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:l};_=this.getBinding(),m=_.createProjectionLayer(ct),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),R=new Li(m.textureWidth,m.textureHeight,{format:_i,type:si,depthTexture:new aa(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Li(S.framebufferWidth,S.framebufferHeight,{format:_i,type:si,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),h=null,u=await o.requestReferenceSpace(f),et.setContext(o),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(oe){for(let ge=0;ge<oe.removed.length;ge++){const pe=oe.removed[ge],Ie=I.indexOf(pe);Ie>=0&&(I[Ie]=null,B[Ie].disconnect(pe))}for(let ge=0;ge<oe.added.length;ge++){const pe=oe.added[ge];let Ie=I.indexOf(pe);if(Ie===-1){for(let ct=0;ct<B.length;ct++)if(ct>=I.length){I.push(pe),Ie=ct;break}else if(I[ct]===null){I[ct]=pe,Ie=ct;break}if(Ie===-1)break}const We=B[Ie];We&&We.connect(pe)}}const q=new X,ee=new X;function se(oe,ge,pe){q.setFromMatrixPosition(ge.matrixWorld),ee.setFromMatrixPosition(pe.matrixWorld);const Ie=q.distanceTo(ee),We=ge.projectionMatrix.elements,ct=pe.projectionMatrix.elements,Lt=We[14]/(We[10]-1),ht=We[14]/(We[10]+1),ve=(We[9]+1)/We[5],Me=(We[9]-1)/We[5],_e=(We[8]-1)/We[0],Ne=(ct[8]+1)/ct[0],D=Lt*_e,ot=Lt*Ne,Ue=Ie/(-_e+Ne),rt=Ue*-_e;if(ge.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(rt),oe.translateZ(Ue),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),We[10]===-1)oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Pe=Lt+Ue,N=ht+Ue,E=D-rt,G=ot+(Ie-rt),fe=ve*ht/N*Pe,me=Me*ht/N*Pe;oe.projectionMatrix.makePerspective(E,G,fe,me,Pe,N),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function F(oe,ge){ge===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ge.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ge=oe.near,pe=oe.far;y.texture!==null&&(y.depthNear>0&&(ge=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),ne.near=ae.near=L.near=ge,ne.far=ae.far=L.far=pe,(J!==ne.near||re!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),J=ne.near,re=ne.far),ne.layers.mask=oe.layers.mask|6,L.layers.mask=ne.layers.mask&-5,ae.layers.mask=ne.layers.mask&-3;const Ie=oe.parent,We=ne.cameras;F(ne,Ie);for(let ct=0;ct<We.length;ct++)F(We[ct],Ie);We.length===2?se(ne,L,ae):ne.projectionMatrix.copy(L.projectionMatrix),j(oe,ne,Ie)};function j(oe,ge,pe){pe===null?oe.matrix.copy(ge.matrixWorld):(oe.matrix.copy(pe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ge.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=oa*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(m===null&&S===null))return p},this.setFoveation=function(oe){p=oe,m!==null&&(m.fixedFoveation=oe),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(oe){return x[oe]};let Ae=null;function Xe(oe,ge){if(v=ge.getViewerPose(h||u),M=ge,v!==null){const pe=v.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Ie=!1;pe.length!==ne.cameras.length&&(ne.cameras.length=0,Ie=!0);for(let ht=0;ht<pe.length;ht++){const ve=pe[ht];let Me=null;if(S!==null)Me=S.getViewport(ve);else{const Ne=_.getViewSubImage(m,ve);Me=Ne.viewport,ht===0&&(e.setRenderTargetTextures(R,Ne.colorTexture,Ne.depthStencilTexture),e.setRenderTarget(R))}let _e=k[ht];_e===void 0&&(_e=new ri,_e.layers.enable(ht),_e.viewport=new Kt,k[ht]=_e),_e.matrix.fromArray(ve.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(ve.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Me.x,Me.y,Me.width,Me.height),ht===0&&(ne.matrix.copy(_e.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ie===!0&&ne.cameras.push(_e)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const ht=_.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&y.init(ht,o.renderState)}if(We&&We.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<pe.length;ht++){const ve=pe[ht].camera;if(ve){let Me=x[ve];Me||(Me=new k0,x[ve]=Me);const _e=_.getCameraImage(ve);Me.sourceTexture=_e}}}}for(let pe=0;pe<B.length;pe++){const Ie=I[pe],We=B[pe];Ie!==null&&We!==void 0&&We.update(Ie,ge,h||u)}Ae&&Ae(oe,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),M=null}const et=new $0;et.setAnimationLoop(Xe),this.setAnimationLoop=function(oe){Ae=oe},this.dispose=function(){}}}const ts=new ir,Tw=new jt;function ww(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,Y0(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,C,P,R){x.isMeshBasicMaterial?l(y,x):x.isMeshLambertMaterial?(l(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(l(y,x),m(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),A(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,C,P):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Fn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Fn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=e.get(x),P=C.envMap,R=C.envMapRotation;P&&(y.envMap.value=P,ts.copy(R),ts.x*=-1,ts.y*=-1,ts.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),y.envMapRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(ts)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,C,P){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=P*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function m(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Fn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function A(y,x){const C=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Aw(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,P){const R=P.program;r.uniformBlockBinding(C,R)}function h(C,P){let R=o[C.id];R===void 0&&(M(C),R=v(C),o[C.id]=R,C.addEventListener("dispose",y));const B=P.program;r.updateUBOMapping(C,B);const I=e.render.frame;l[C.id]!==I&&(m(C),l[C.id]=I)}function v(C){const P=_();C.__bindingPointIndex=P;const R=s.createBuffer(),B=C.__size,I=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,B,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function _(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const P=o[C.id],R=C.uniforms,B=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let I=0,O=R.length;I<O;I++){const w=Array.isArray(R[I])?R[I]:[R[I]];for(let L=0,ae=w.length;L<ae;L++){const k=w[L];if(S(k,I,L,B)===!0){const ne=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let re=0;for(let Z=0;Z<J.length;Z++){const $=J[Z],V=A($);typeof $=="number"||typeof $=="boolean"?(k.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,ne+re,k.__data)):$.isMatrix3?(k.__data[0]=$.elements[0],k.__data[1]=$.elements[1],k.__data[2]=$.elements[2],k.__data[3]=0,k.__data[4]=$.elements[3],k.__data[5]=$.elements[4],k.__data[6]=$.elements[5],k.__data[7]=0,k.__data[8]=$.elements[6],k.__data[9]=$.elements[7],k.__data[10]=$.elements[8],k.__data[11]=0):($.toArray(k.__data,re),re+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,P,R,B){const I=C.value,O=P+"_"+R;if(B[O]===void 0)return typeof I=="number"||typeof I=="boolean"?B[O]=I:B[O]=I.clone(),!0;{const w=B[O];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return B[O]=I,!0}else if(w.equals(I)===!1)return w.copy(I),!0}return!1}function M(C){const P=C.uniforms;let R=0;const B=16;for(let O=0,w=P.length;O<w;O++){const L=Array.isArray(P[O])?P[O]:[P[O]];for(let ae=0,k=L.length;ae<k;ae++){const ne=L[ae],J=Array.isArray(ne.value)?ne.value:[ne.value];for(let re=0,Z=J.length;re<Z;re++){const $=J[re],V=A($),q=R%B,ee=q%V.boundary,se=q+ee;R+=ee,se!==0&&B-se<V.storage&&(R+=B-se),ne.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=R,R+=V.storage}}}const I=R%B;return I>0&&(R+=B-I),C.__size=R,C.__cache={},this}function A(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",C),P}function y(C){const P=C.target;P.removeEventListener("dispose",y);const R=u.indexOf(P.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function x(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:h,dispose:x}}const bw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wi=null;function Cw(){return wi===null&&(wi=new Uy(bw,16,16,no,tr),wi.name="DFG_LUT",wi.minFilter=yn,wi.magFilter=yn,wi.wrapS=Ji,wi.wrapT=Ji,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}class Rw{constructor(e={}){const{canvas:t=Kx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:S=si}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=S,y=new Set([eh,Qd,Jd]),x=new Set([si,Di,ra,sa,$d,Kd]),C=new Uint32Array(4),P=new Int32Array(4);let R=null,B=null;const I=[],O=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ae=!1;this._outputColorSpace=ii;let k=0,ne=0,J=null,re=-1,Z=null;const $=new Kt,V=new Kt;let q=null;const ee=new wt(0);let se=0,F=t.width,j=t.height,Ae=1,Xe=null,et=null;const oe=new Kt(0,0,F,j),ge=new Kt(0,0,F,j);let pe=!1;const Ie=new U0;let We=!1,ct=!1;const Lt=new jt,ht=new X,ve=new Kt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _e=!1;function Ne(){return J===null?Ae:1}let D=r;function ot(b,Y){return t.getContext(b,Y)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qd}`),t.addEventListener("webglcontextlost",Ze,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",It,!1),D===null){const Y="webgl2";if(D=ot(Y,b),D===null)throw ot(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ct("WebGLRenderer: "+b.message),b}let Ue,rt,Pe,N,E,G,fe,me,de,je,be,Je,lt,Se,Re,Ke,qe,ke,vt,H,Le,we,Be;function Te(){Ue=new R1(D),Ue.init(),Le=new xw(D,Ue),rt=new S1(D,Ue,e,Le),Pe=new vw(D,Ue),rt.reversedDepthBuffer&&m&&Pe.buffers.depth.setReversed(!0),N=new N1(D),E=new iw,G=new _w(D,Ue,Pe,E,rt,Le,N),fe=new C1(L),me=new OS(D),we=new x1(D,me),de=new P1(D,me,N,we),je=new I1(D,de,me,we,N),ke=new D1(D,rt,G),Re=new M1(E),be=new nw(L,fe,Ue,rt,we,Re),Je=new ww(L,E),lt=new sw,Se=new fw(Ue),qe=new _1(L,fe,Pe,je,M,p),Ke=new gw(L,je,rt),Be=new Aw(D,N,rt,Pe),vt=new y1(D,Ue,N),H=new L1(D,Ue,N),N.programs=be.programs,L.capabilities=rt,L.extensions=Ue,L.properties=E,L.renderLists=lt,L.shadowMap=Ke,L.state=Pe,L.info=N}Te(),A!==si&&(w=new F1(A,t.width,t.height,o,l));const he=new Ew(L,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(b){b!==void 0&&(Ae=b,this.setSize(F,j,!1))},this.getSize=function(b){return b.set(F,j)},this.setSize=function(b,Y,ue=!0){if(he.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,j=Y,t.width=Math.floor(b*Ae),t.height=Math.floor(Y*Ae),ue===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(F*Ae,j*Ae).floor()},this.setDrawingBufferSize=function(b,Y,ue){F=b,j=Y,Ae=ue,t.width=Math.floor(b*ue),t.height=Math.floor(Y*ue),this.setViewport(0,0,b,Y)},this.setEffects=function(b){if(A===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Y=0;Y<b.length;Y++)if(b[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,Y,ue,ie){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,Y,ue,ie),Pe.viewport($.copy(oe).multiplyScalar(Ae).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,Y,ue,ie){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,Y,ue,ie),Pe.scissor(V.copy(ge).multiplyScalar(Ae).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(b){Pe.setScissorTest(pe=b)},this.setOpaqueSort=function(b){Xe=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,ue=!0){let ie=0;if(b){let Q=!1;if(J!==null){const Fe=J.texture.format;Q=y.has(Fe)}if(Q){const Fe=J.texture.type,He=x.has(Fe),De=qe.getClearColor(),ze=qe.getClearAlpha(),it=De.r,at=De.g,_t=De.b;He?(C[0]=it,C[1]=at,C[2]=_t,C[3]=ze,D.clearBufferuiv(D.COLOR,0,C)):(P[0]=it,P[1]=at,P[2]=_t,P[3]=ze,D.clearBufferiv(D.COLOR,0,P))}else ie|=D.COLOR_BUFFER_BIT}Y&&(ie|=D.DEPTH_BUFFER_BIT),ue&&(ie|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&D.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ze,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",It,!1),qe.dispose(),lt.dispose(),Se.dispose(),E.dispose(),fe.dispose(),je.dispose(),we.dispose(),Be.dispose(),be.dispose(),he.dispose(),he.removeEventListener("sessionstart",rr),he.removeEventListener("sessionend",Ur),qn.stop()};function Ze(b){b.preventDefault(),jm("WebGLRenderer: Context Lost."),ae=!0}function pt(){jm("WebGLRenderer: Context Restored."),ae=!1;const b=N.autoReset,Y=Ke.enabled,ue=Ke.autoUpdate,ie=Ke.needsUpdate,Q=Ke.type;Te(),N.autoReset=b,Ke.enabled=Y,Ke.autoUpdate=ue,Ke.needsUpdate=ie,Ke.type=Q}function It(b){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function At(b){const Y=b.target;Y.removeEventListener("dispose",At),Yn(Y)}function Yn(b){Sn(b),E.remove(b)}function Sn(b){const Y=E.get(b).programs;Y!==void 0&&(Y.forEach(function(ue){be.releaseProgram(ue)}),b.isShaderMaterial&&be.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,ue,ie,Q,Fe){Y===null&&(Y=Me);const He=Q.isMesh&&Q.matrixWorld.determinant()<0,De=xa(b,Y,ue,ie,Q);Pe.setMaterial(ie,He);let ze=ue.index,it=1;if(ie.wireframe===!0){if(ze=de.getWireframeAttribute(ue),ze===void 0)return;it=2}const at=ue.drawRange,_t=ue.attributes.position;let st=at.start*it,Dt=(at.start+at.count)*it;Fe!==null&&(st=Math.max(st,Fe.start*it),Dt=Math.min(Dt,(Fe.start+Fe.count)*it)),ze!==null?(st=Math.max(st,0),Dt=Math.min(Dt,ze.count)):_t!=null&&(st=Math.max(st,0),Dt=Math.min(Dt,_t.count));const Ot=Dt-st;if(Ot<0||Ot===1/0)return;we.setup(Q,ie,De,ue,ze);let Ft,Tt=vt;if(ze!==null&&(Ft=me.get(ze),Tt=H,Tt.setIndex(Ft)),Q.isMesh)ie.wireframe===!0?(Pe.setLineWidth(ie.wireframeLinewidth*Ne()),Tt.setMode(D.LINES)):Tt.setMode(D.TRIANGLES);else if(Q.isLine){let Yt=ie.linewidth;Yt===void 0&&(Yt=1),Pe.setLineWidth(Yt*Ne()),Q.isLineSegments?Tt.setMode(D.LINES):Q.isLineLoop?Tt.setMode(D.LINE_LOOP):Tt.setMode(D.LINE_STRIP)}else Q.isPoints?Tt.setMode(D.POINTS):Q.isSprite&&Tt.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)dc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))Tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Yt=Q._multiDrawStarts,tt=Q._multiDrawCounts,Mn=Q._multiDrawCount,Et=ze?me.get(ze).bytesPerElement:1,Cn=E.get(ie).currentProgram.getUniforms();for(let Rn=0;Rn<Mn;Rn++)Cn.setValue(D,"_gl_DrawID",Rn),Tt.render(Yt[Rn]/Et,tt[Rn])}else if(Q.isInstancedMesh)Tt.renderInstances(st,Ot,Q.count);else if(ue.isInstancedBufferGeometry){const Yt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,tt=Math.min(ue.instanceCount,Yt);Tt.renderInstances(st,Ot,tt)}else Tt.render(st,Ot)};function fs(b,Y,ue){b.transparent===!0&&b.side===bi&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,Or(b,Y,ue),b.side=Ir,b.needsUpdate=!0,Or(b,Y,ue),b.side=bi):Or(b,Y,ue)}this.compile=function(b,Y,ue=null){ue===null&&(ue=b),B=Se.get(ue),B.init(Y),O.push(B),ue.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),b!==ue&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(B.pushLight(Q),Q.castShadow&&B.pushShadow(Q))}),B.setupLights();const ie=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Fe=Q.material;if(Fe)if(Array.isArray(Fe))for(let He=0;He<Fe.length;He++){const De=Fe[He];fs(De,ue,Q),ie.add(De)}else fs(Fe,ue,Q),ie.add(Fe)}),B=O.pop(),ie},this.compileAsync=function(b,Y,ue=null){const ie=this.compile(b,Y,ue);return new Promise(Q=>{function Fe(){if(ie.forEach(function(He){E.get(He).currentProgram.isReady()&&ie.delete(He)}),ie.size===0){Q(b);return}setTimeout(Fe,10)}Ue.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Fi=null;function Mc(b){Fi&&Fi(b)}function rr(){qn.stop()}function Ur(){qn.start()}const qn=new $0;qn.setAnimationLoop(Mc),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(b){Fi=b,he.setAnimationLoop(b),b===null?qn.stop():qn.start()},he.addEventListener("sessionstart",rr),he.addEventListener("sessionend",Ur),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ae===!0)return;const ue=he.enabled===!0&&he.isPresenting===!0,ie=w!==null&&(J===null||ue)&&w.begin(L,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(Y),Y=he.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,Y,J),B=Se.get(b,O.length),B.init(Y),O.push(B),Lt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ie.setFromProjectionMatrix(Lt,Ri,Y.reversedDepth),ct=this.localClippingEnabled,We=Re.init(this.clippingPlanes,ct),R=lt.get(b,I.length),R.init(),I.push(R),he.enabled===!0&&he.isPresenting===!0){const He=L.xr.getDepthSensingMesh();He!==null&&Fr(He,Y,-1/0,L.sortObjects)}Fr(b,Y,0,L.sortObjects),R.finish(),L.sortObjects===!0&&R.sort(Xe,et),_e=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,_e&&qe.addToRenderList(R,b),this.info.render.frame++,We===!0&&Re.beginShadows();const Q=B.state.shadowsArray;if(Ke.render(Q,b,Y),We===!0&&Re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&w.hasRenderPass())===!1){const He=R.opaque,De=R.transmissive;if(B.setupLights(),Y.isArrayCamera){const ze=Y.cameras;if(De.length>0)for(let it=0,at=ze.length;it<at;it++){const _t=ze[it];va(He,De,b,_t)}_e&&qe.render(b);for(let it=0,at=ze.length;it<at;it++){const _t=ze[it];ga(R,b,_t,_t.viewport)}}else De.length>0&&va(He,De,b,Y),_e&&qe.render(b),ga(R,b,Y)}J!==null&&ne===0&&(G.updateMultisampleRenderTarget(J),G.updateRenderTargetMipmap(J)),ie&&w.end(L),b.isScene===!0&&b.onAfterRender(L,b,Y),we.resetDefaultState(),re=-1,Z=null,O.pop(),O.length>0?(B=O[O.length-1],We===!0&&Re.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,I.pop(),I.length>0?R=I[I.length-1]:R=null};function Fr(b,Y,ue,ie){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)ue=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)B.pushLight(b),b.castShadow&&B.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){ie&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Lt);const He=je.update(b),De=b.material;De.visible&&R.push(b,He,De,ue,ve.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){const He=je.update(b),De=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ve.copy(He.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(Lt)),Array.isArray(De)){const ze=He.groups;for(let it=0,at=ze.length;it<at;it++){const _t=ze[it],st=De[_t.materialIndex];st&&st.visible&&R.push(b,He,st,ue,ve.z,_t)}}else De.visible&&R.push(b,He,De,ue,ve.z,null)}}const Fe=b.children;for(let He=0,De=Fe.length;He<De;He++)Fr(Fe[He],Y,ue,ie)}function ga(b,Y,ue,ie){const{opaque:Q,transmissive:Fe,transparent:He}=b;B.setupLightsView(ue),We===!0&&Re.setGlobalState(L.clippingPlanes,ue),ie&&Pe.viewport($.copy(ie)),Q.length>0&&ds(Q,Y,ue),Fe.length>0&&ds(Fe,Y,ue),He.length>0&&ds(He,Y,ue),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function va(b,Y,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ie.id]===void 0){const st=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ie.id]=new Li(1,1,{generateMipmaps:!0,type:st?tr:si,minFilter:ss,samples:Math.max(4,rt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Fe=B.state.transmissionRenderTarget[ie.id],He=ie.viewport||$;Fe.setSize(He.z*L.transmissionResolutionScale,He.w*L.transmissionResolutionScale);const De=L.getRenderTarget(),ze=L.getActiveCubeFace(),it=L.getActiveMipmapLevel();L.setRenderTarget(Fe),L.getClearColor(ee),se=L.getClearAlpha(),se<1&&L.setClearColor(16777215,.5),L.clear(),_e&&qe.render(ue);const at=L.toneMapping;L.toneMapping=Pi;const _t=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),B.setupLightsView(ie),We===!0&&Re.setGlobalState(L.clippingPlanes,ie),ds(b,ue,ie),G.updateMultisampleRenderTarget(Fe),G.updateRenderTargetMipmap(Fe),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Dt=0,Ot=Y.length;Dt<Ot;Dt++){const Ft=Y[Dt],{object:Tt,geometry:Yt,material:tt,group:Mn}=Ft;if(tt.side===bi&&Tt.layers.test(ie.layers)){const Et=tt.side;tt.side=Fn,tt.needsUpdate=!0,xi(Tt,ue,ie,Yt,tt,Mn),tt.side=Et,tt.needsUpdate=!0,st=!0}}st===!0&&(G.updateMultisampleRenderTarget(Fe),G.updateRenderTargetMipmap(Fe))}L.setRenderTarget(De,ze,it),L.setClearColor(ee,se),_t!==void 0&&(ie.viewport=_t),L.toneMapping=at}function ds(b,Y,ue){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Fe=b.length;Q<Fe;Q++){const He=b[Q],{object:De,geometry:ze,group:it}=He;let at=He.material;at.allowOverride===!0&&ie!==null&&(at=ie),De.layers.test(ue.layers)&&xi(De,Y,ue,ze,at,it)}}function xi(b,Y,ue,ie,Q,Fe){b.onBeforeRender(L,Y,ue,ie,Q,Fe),b.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(L,Y,ue,ie,b,Fe),Q.transparent===!0&&Q.side===bi&&Q.forceSinglePass===!1?(Q.side=Fn,Q.needsUpdate=!0,L.renderBufferDirect(ue,Y,ie,Q,b,Fe),Q.side=Ir,Q.needsUpdate=!0,L.renderBufferDirect(ue,Y,ie,Q,b,Fe),Q.side=bi):L.renderBufferDirect(ue,Y,ie,Q,b,Fe),b.onAfterRender(L,Y,ue,ie,Q,Fe)}function Or(b,Y,ue){Y.isScene!==!0&&(Y=Me);const ie=E.get(b),Q=B.state.lights,Fe=B.state.shadowsArray,He=Q.state.version,De=be.getParameters(b,Q.state,Fe,Y,ue),ze=be.getProgramCacheKey(De);let it=ie.programs;ie.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const at=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ie.envMap=fe.get(b.envMap||ie.environment,at),ie.envMapRotation=ie.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,it===void 0&&(b.addEventListener("dispose",At),it=new Map,ie.programs=it);let _t=it.get(ze);if(_t!==void 0){if(ie.currentProgram===_t&&ie.lightsStateVersion===He)return _a(b,De),_t}else De.uniforms=be.getUniforms(b),b.onBeforeCompile(De,L),_t=be.acquireProgram(De,ze),it.set(ze,_t),ie.uniforms=De.uniforms;const st=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(st.clippingPlanes=Re.uniform),_a(b,De),ie.needsLights=Sa(b),ie.lightsStateVersion=He,ie.needsLights&&(st.ambientLightColor.value=Q.state.ambient,st.lightProbe.value=Q.state.probe,st.directionalLights.value=Q.state.directional,st.directionalLightShadows.value=Q.state.directionalShadow,st.spotLights.value=Q.state.spot,st.spotLightShadows.value=Q.state.spotShadow,st.rectAreaLights.value=Q.state.rectArea,st.ltc_1.value=Q.state.rectAreaLTC1,st.ltc_2.value=Q.state.rectAreaLTC2,st.pointLights.value=Q.state.point,st.pointLightShadows.value=Q.state.pointShadow,st.hemisphereLights.value=Q.state.hemi,st.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,st.spotLightMatrix.value=Q.state.spotLightMatrix,st.spotLightMap.value=Q.state.spotLightMap,st.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=_t,ie.uniformsList=null,_t}function co(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=lc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function _a(b,Y){const ue=E.get(b);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function xa(b,Y,ue,ie,Q){Y.isScene!==!0&&(Y=Me),G.resetTextureUnits();const Fe=Y.fog,He=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,De=J===null?L.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:io,ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,it=fe.get(ie.envMap||He,ze),at=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,_t=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),st=!!ue.morphAttributes.position,Dt=!!ue.morphAttributes.normal,Ot=!!ue.morphAttributes.color;let Ft=Pi;ie.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ft=L.toneMapping);const Tt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Yt=Tt!==void 0?Tt.length:0,tt=E.get(ie),Mn=B.state.lights;if(We===!0&&(ct===!0||b!==Z)){const qt=b===Z&&ie.id===re;Re.setState(ie,b,qt)}let Et=!1;ie.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Mn.state.version||tt.outputColorSpace!==De||Q.isBatchedMesh&&tt.batching===!1||!Q.isBatchedMesh&&tt.batching===!0||Q.isBatchedMesh&&tt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&tt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&tt.instancing===!1||!Q.isInstancedMesh&&tt.instancing===!0||Q.isSkinnedMesh&&tt.skinning===!1||!Q.isSkinnedMesh&&tt.skinning===!0||Q.isInstancedMesh&&tt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&tt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&tt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&tt.instancingMorph===!1&&Q.morphTexture!==null||tt.envMap!==it||ie.fog===!0&&tt.fog!==Fe||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Re.numPlanes||tt.numIntersection!==Re.numIntersection)||tt.vertexAlphas!==at||tt.vertexTangents!==_t||tt.morphTargets!==st||tt.morphNormals!==Dt||tt.morphColors!==Ot||tt.toneMapping!==Ft||tt.morphTargetsCount!==Yt)&&(Et=!0):(Et=!0,tt.__version=ie.version);let Cn=tt.currentProgram;Et===!0&&(Cn=Or(ie,Y,Q));let Rn=!1,kn=!1,sr=!1;const Nt=Cn.getUniforms(),mt=tt.uniforms;if(Pe.useProgram(Cn.program)&&(Rn=!0,kn=!0,sr=!0),ie.id!==re&&(re=ie.id,kn=!0),Rn||Z!==b){Pe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Nt.setValue(D,"projectionMatrix",b.projectionMatrix),Nt.setValue(D,"viewMatrix",b.matrixWorldInverse);const Zn=Nt.map.cameraPosition;Zn!==void 0&&Zn.setValue(D,ht.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,kn=!0,sr=!0)}if(tt.needsLights&&(Mn.state.directionalShadowMap.length>0&&Nt.setValue(D,"directionalShadowMap",Mn.state.directionalShadowMap,G),Mn.state.spotShadowMap.length>0&&Nt.setValue(D,"spotShadowMap",Mn.state.spotShadowMap,G),Mn.state.pointShadowMap.length>0&&Nt.setValue(D,"pointShadowMap",Mn.state.pointShadowMap,G)),Q.isSkinnedMesh){Nt.setOptional(D,Q,"bindMatrix"),Nt.setOptional(D,Q,"bindMatrixInverse");const qt=Q.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Nt.setValue(D,"boneTexture",qt.boneTexture,G))}Q.isBatchedMesh&&(Nt.setOptional(D,Q,"batchingTexture"),Nt.setValue(D,"batchingTexture",Q._matricesTexture,G),Nt.setOptional(D,Q,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",Q._indirectTexture,G),Nt.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",Q._colorsTexture,G));const ai=ue.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&ke.update(Q,ue,Cn),(kn||tt.receiveShadow!==Q.receiveShadow)&&(tt.receiveShadow=Q.receiveShadow,Nt.setValue(D,"receiveShadow",Q.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(mt.envMapIntensity.value=Y.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=Cw()),kn&&(Nt.setValue(D,"toneMappingExposure",L.toneMappingExposure),tt.needsLights&&ya(mt,sr),Fe&&ie.fog===!0&&Je.refreshFogUniforms(mt,Fe),Je.refreshMaterialUniforms(mt,ie,Ae,j,B.state.transmissionRenderTarget[b.id]),lc.upload(D,co(tt),mt,G)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(lc.upload(D,co(tt),mt,G),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Nt.setValue(D,"center",Q.center),Nt.setValue(D,"modelViewMatrix",Q.modelViewMatrix),Nt.setValue(D,"normalMatrix",Q.normalMatrix),Nt.setValue(D,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let Zn=0,Oi=qt.length;Zn<Oi;Zn++){const uo=qt[Zn];Be.update(uo,Cn),Be.bind(uo,Cn)}}return Cn}function ya(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function Sa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,Y,ue){const ie=E.get(b);ie.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=Y,E.get(b.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const ue=E.get(b);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0};const Ma=D.createFramebuffer();this.setRenderTarget=function(b,Y=0,ue=0){J=b,k=Y,ne=ue;let ie=null,Q=!1,Fe=!1;if(b){const De=E.get(b);if(De.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(D.FRAMEBUFFER,De.__webglFramebuffer),$.copy(b.viewport),V.copy(b.scissor),q=b.scissorTest,Pe.viewport($),Pe.scissor(V),Pe.setScissorTest(q),re=-1;return}else if(De.__webglFramebuffer===void 0)G.setupRenderTarget(b);else if(De.__hasExternalTextures)G.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const at=b.depthTexture;if(De.__boundDepthTexture!==at){if(at!==null&&E.has(at)&&(b.width!==at.image.width||b.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Fe=!0);const it=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(it[Y])?ie=it[Y][ue]:ie=it[Y],Q=!0):b.samples>0&&G.useMultisampledRTT(b)===!1?ie=E.get(b).__webglMultisampledFramebuffer:Array.isArray(it)?ie=it[ue]:ie=it,$.copy(b.viewport),V.copy(b.scissor),q=b.scissorTest}else $.copy(oe).multiplyScalar(Ae).floor(),V.copy(ge).multiplyScalar(Ae).floor(),q=pe;if(ue!==0&&(ie=Ma),Pe.bindFramebuffer(D.FRAMEBUFFER,ie)&&Pe.drawBuffers(b,ie),Pe.viewport($),Pe.scissor(V),Pe.setScissorTest(q),Q){const De=E.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Y,De.__webglTexture,ue)}else if(Fe){const De=Y;for(let ze=0;ze<b.textures.length;ze++){const it=E.get(b.textures[ze]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ze,it.__webglTexture,ue,De)}}else if(b!==null&&ue!==0){const De=E.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De.__webglTexture,ue)}re=-1},this.readRenderTargetPixels=function(b,Y,ue,ie,Q,Fe,He,De=0){if(!(b&&b.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze){Pe.bindFramebuffer(D.FRAMEBUFFER,ze);try{const it=b.textures[De],at=it.format,_t=it.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),!rt.textureFormatReadable(at)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(_t)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-ie&&ue>=0&&ue<=b.height-Q&&D.readPixels(Y,ue,ie,Q,Le.convert(at),Le.convert(_t),Fe)}finally{const it=J!==null?E.get(J).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(b,Y,ue,ie,Q,Fe,He,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(ze=ze[He]),ze)if(Y>=0&&Y<=b.width-ie&&ue>=0&&ue<=b.height-Q){Pe.bindFramebuffer(D.FRAMEBUFFER,ze);const it=b.textures[De],at=it.format,_t=it.type;if(b.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+De),!rt.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.bufferData(D.PIXEL_PACK_BUFFER,Fe.byteLength,D.STREAM_READ),D.readPixels(Y,ue,ie,Q,Le.convert(at),Le.convert(_t),0);const Dt=J!==null?E.get(J).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Dt);const Ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Jx(D,Ot,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,st),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Fe),D.deleteBuffer(st),D.deleteSync(Ot),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,ue=0){const ie=Math.pow(2,-ue),Q=Math.floor(b.image.width*ie),Fe=Math.floor(b.image.height*ie),He=Y!==null?Y.x:0,De=Y!==null?Y.y:0;G.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,ue,0,0,He,De,Q,Fe),Pe.unbindTexture()};const Ec=D.createFramebuffer(),Tc=D.createFramebuffer();this.copyTextureToTexture=function(b,Y,ue=null,ie=null,Q=0,Fe=0){let He,De,ze,it,at,_t,st,Dt,Ot;const Ft=b.isCompressedTexture?b.mipmaps[Fe]:b.image;if(ue!==null)He=ue.max.x-ue.min.x,De=ue.max.y-ue.min.y,ze=ue.isBox3?ue.max.z-ue.min.z:1,it=ue.min.x,at=ue.min.y,_t=ue.isBox3?ue.min.z:0;else{const mt=Math.pow(2,-Q);He=Math.floor(Ft.width*mt),De=Math.floor(Ft.height*mt),b.isDataArrayTexture?ze=Ft.depth:b.isData3DTexture?ze=Math.floor(Ft.depth*mt):ze=1,it=0,at=0,_t=0}ie!==null?(st=ie.x,Dt=ie.y,Ot=ie.z):(st=0,Dt=0,Ot=0);const Tt=Le.convert(Y.format),Yt=Le.convert(Y.type);let tt;Y.isData3DTexture?(G.setTexture3D(Y,0),tt=D.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(G.setTexture2DArray(Y,0),tt=D.TEXTURE_2D_ARRAY):(G.setTexture2D(Y,0),tt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment);const Mn=D.getParameter(D.UNPACK_ROW_LENGTH),Et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Cn=D.getParameter(D.UNPACK_SKIP_PIXELS),Rn=D.getParameter(D.UNPACK_SKIP_ROWS),kn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,it),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,_t);const sr=b.isDataArrayTexture||b.isData3DTexture,Nt=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const mt=E.get(b),ai=E.get(Y),qt=E.get(mt.__renderTarget),Zn=E.get(ai.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,qt.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Oi=0;Oi<ze;Oi++)sr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(b).__webglTexture,Q,_t+Oi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Fe,Ot+Oi)),D.blitFramebuffer(it,at,He,De,st,Dt,He,De,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||E.has(b)){const mt=E.get(b),ai=E.get(Y);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,Ec),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tc);for(let qt=0;qt<ze;qt++)sr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,mt.__webglTexture,Q,_t+qt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,mt.__webglTexture,Q),Nt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ai.__webglTexture,Fe,Ot+qt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ai.__webglTexture,Fe),Q!==0?D.blitFramebuffer(it,at,He,De,st,Dt,He,De,D.COLOR_BUFFER_BIT,D.NEAREST):Nt?D.copyTexSubImage3D(tt,Fe,st,Dt,Ot+qt,it,at,He,De):D.copyTexSubImage2D(tt,Fe,st,Dt,it,at,He,De);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Nt?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Yt,Ft.data):Y.isCompressedArrayTexture?D.compressedTexSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Ft.data):D.texSubImage3D(tt,Fe,st,Dt,Ot,He,De,ze,Tt,Yt,Ft):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Fe,st,Dt,He,De,Tt,Yt,Ft.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Fe,st,Dt,Ft.width,Ft.height,Tt,Ft.data):D.texSubImage2D(D.TEXTURE_2D,Fe,st,Dt,He,De,Tt,Yt,Ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kn),Fe===0&&Y.generateMipmaps&&D.generateMipmap(tt),Pe.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&G.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?G.setTextureCube(b,0):b.isData3DTexture?G.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?G.setTexture2DArray(b,0):G.setTexture2D(b,0),Pe.unbindTexture()},this.resetState=function(){k=0,ne=0,J=null,Pe.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}class Pw extends lh{constructor(e){super(e)}load(e,t,r,o){const l=this,u=new NS(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(f){const p=l.parse(JSON.parse(f));t&&t(p)},r,o)}parse(e){return new Lw(e)}}class Lw{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,r="ltr"){const o=[],l=Nw(e,t,this.data,r);for(let u=0,f=l.length;u<f;u++)o.push(...l[u].toShapes());return o}}function Nw(s,e,t,r){const o=Array.from(s),l=e/t.resolution,u=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*l,f=[];let p=0,h=0;(r=="rtl"||r=="tb")&&o.reverse();for(let v=0;v<o.length;v++){const _=o[v];if(_===`
`)p=0,h-=u;else{const m=Dw(_,l,p,h,t);r=="tb"?(p=0,h+=t.ascender*l):p+=m.offsetX,f.push(m.path)}}return f}function Dw(s,e,t,r,o){const l=o.glyphs[s]||o.glyphs["?"];if(!l){console.error('THREE.Font: character "'+s+'" does not exists in font family '+o.familyName+".");return}const u=new US;let f,p,h,v,_,m,S,M;if(l.o){const A=l._cachedOutline||(l._cachedOutline=l.o.split(" "));for(let y=0,x=A.length;y<x;)switch(A[y++]){case"m":f=A[y++]*e+t,p=A[y++]*e+r,u.moveTo(f,p);break;case"l":f=A[y++]*e+t,p=A[y++]*e+r,u.lineTo(f,p);break;case"q":h=A[y++]*e+t,v=A[y++]*e+r,_=A[y++]*e+t,m=A[y++]*e+r,u.quadraticCurveTo(_,m,h,v);break;case"b":h=A[y++]*e+t,v=A[y++]*e+r,_=A[y++]*e+t,m=A[y++]*e+r,S=A[y++]*e+t,M=A[y++]*e+r,u.bezierCurveTo(_,m,S,M,h,v);break}}return{offsetX:l.ha*e,path:u}}class Iw extends ah{constructor(e,t={}){const r=t.font;if(r===void 0)super();else{const o=r.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(o,t)}this.type="TextGeometry"}}const Uw=60,Fw=.1,Ow=1e3,kw=0,Bw=-.5,zw=10,Vw=0,Hw=0,Gw=!0,Ww=2,Xw=459023,jw=0,Yw=0,nv=0,qw=0,Zw=0,$w=0,Wg=32,Kw=16777215,Jw=16777215,Qw=.0035,eA=-.005,tA="MTRX",Gd=4.5,Xg=12,nA=.5,iA=.01,rA="/fonts/Kode_Mono_Regular.json",sA=.2,oA=Gd*2,aA=.4,lA=.7,cA=200,uA=.1,fA=16777215,jg=8,Yg=400,qg=320,Zg=220,$g=0,Kg=0,Jg=-150,dA=-80,Qg=5,hA=3.14/2,pA=5,mA=3.14/2,Wd=3,gA=200,e0=200,vA=16777215,_A="#FF2EDB",xA="#07010f",yA=1e-4,SA=.5,MA=2.5,EA=.008,TA=.2,wA=1e-5,AA=7,bA=.015,CA=.08,RA="background",PA="fixed inset-0 block h-dvh w-screen pointer-events-none z-0",Lr=[{width:320,cameraFov:60,cameraY:-1,cameraZ:8,groupScale:.44,wallSpacingBoost:1,wallY:-68,spikeMaxOffset:1.2,pixelRatioCap:1.3,starCount:180},{width:412,cameraFov:78,cameraY:-1,cameraZ:8,groupScale:.44,wallSpacingBoost:.4,wallY:-68,spikeMaxOffset:1,pixelRatioCap:1.3,starCount:180},{width:640,cameraFov:74,cameraY:-.15,cameraZ:12.7,groupScale:.42,wallSpacingBoost:.2,wallY:-72,spikeMaxOffset:2.1,pixelRatioCap:1.5,starCount:240},{width:1024,cameraFov:66,cameraY:-.4,cameraZ:11.5,groupScale:.46,wallSpacingBoost:.1,wallY:-76,spikeMaxOffset:2.35,pixelRatioCap:1.75,starCount:360},{width:1440,cameraFov:Uw,cameraY:Bw,cameraZ:zw,groupScale:.5,wallSpacingBoost:0,wallY:dA,spikeMaxOffset:MA,pixelRatioCap:Ww,starCount:cA}];function LA(s,e,t){return{cameraFov:$t.lerp(s.cameraFov,e.cameraFov,t),cameraY:$t.lerp(s.cameraY,e.cameraY,t),cameraZ:$t.lerp(s.cameraZ,e.cameraZ,t),groupScale:$t.lerp(s.groupScale,e.groupScale,t),wallSpacingBoost:$t.lerp(s.wallSpacingBoost,e.wallSpacingBoost,t),wallY:$t.lerp(s.wallY,e.wallY,t),spikeMaxOffset:$t.lerp(s.spikeMaxOffset,e.spikeMaxOffset,t),pixelRatioCap:$t.lerp(s.pixelRatioCap,e.pixelRatioCap,t),starCount:Math.round($t.lerp(s.starCount,e.starCount,t))}}function yc(s){const e=Math.max(Lr[0].width,Math.min(s,Lr[Lr.length-1].width));for(let t=0;t<Lr.length-1;t+=1){const r=Lr[t],o=Lr[t+1];if(e>=r.width&&e<=o.width){const l=$t.inverseLerp(r.width,o.width,e);return LA(r,o,l)}}return Lr[Lr.length-1]}function iv(s){return Math.min(window.devicePixelRatio,yc(s).pixelRatioCap)}function Sc(){const s=window.visualViewport,e=Math.ceil(document.documentElement.clientWidth||window.innerWidth||s?.width||1),t=Math.ceil(s?.height||window.innerHeight||document.documentElement.clientHeight||1);return{width:Math.max(1,e),height:Math.max(1,t)}}function NA(){const{width:s,height:e}=Sc(),t=yc(s),r=new ri(t.cameraFov,s/e,Fw,Ow);return r.position.set(kw,t.cameraY,t.cameraZ),r.lookAt(Vw,t.cameraY,Hw),r}function DA(s){const{width:e,height:t}=Sc(),r=new Rw({canvas:s,antialias:Gw});return r.setSize(e,t,!1),r.setPixelRatio(iv(e)),r}function IA(s,e){const{width:t,height:r}=Sc(),o=yc(t);return s.aspect=t/r,s.fov=o.cameraFov,s.updateProjectionMatrix(),e.setSize(t,r,!1),e.setPixelRatio(iv(t)),o}function t0(s){return s-window.scrollY*bA}function n0(s,e,t,r,o){s.position.z=o.cameraZ;const l=Math.max(.1,Math.abs(s.position.z-nv)),f=Math.tan($t.degToRad(s.fov*.5))*l*2*s.aspect,p=$t.clamp(f*o.groupScale/oA,aA,lA);e.scale.set(p,p,p);const h=Math.max(.1,Math.abs(s.position.z-Qg)),_=Math.tan($t.degToRad(s.fov*.5))*h*s.aspect,m=Math.max(SA,_*yA),S=Math.max(0,_-m+o.wallSpacingBoost);t.position.set(S,o.wallY,Qg),r.position.set(-S,o.wallY,pA)}function i0(s){const e=s.attributes.position,t=new Float32Array(e.count*3),r=new wt(_A),o=new wt(xA),l=new wt;for(let u=0;u<e.count;u+=1){const f=e.getX(u),p=$t.inverseLerp(-Wd/2,Wd/2,f);l.lerpColors(r,o,p);const h=u*3;t[h]=l.r,t[h+1]=l.g,t[h+2]=l.b}s.setAttribute("color",new cn(t,3))}function UA({id:s=RA,className:e=""}){const t=vi.useRef(null);return vi.useEffect(()=>{const r=t.current;if(!r)return;const o=new Ry;o.background=new wt(Xw);const l=NA(),u=DA(r),f=new $s;o.add(f);let p=l.position.y,h=l.position.y;const v=new mc(3,Wg,Wg/2),_=new zy(new Hy(v,1),new F0({color:Kw}));f.add(_);const m=new $s;m.rotation.x=sA,f.add(m),new Pw().load(rA,re=>{const Z=new ta({color:Jw}),$=2*Math.PI/Xg;for(let V=0;V<Xg;V+=1){const q=V*$,ee=new Iw(tA,{font:re,size:nA,depth:iA});ee.center();const se=new Xn(ee,Z);se.position.x=Math.cos(q)*Gd,se.position.z=Math.sin(q)*Gd,se.position.y=0,se.lookAt(0,0,0),se.rotation.y+=Math.PI,m.add(se)}});const M=()=>{const re=new mc(uA,jg,jg/2),Z=new ta({color:fA,blending:Yf,wireframe:!1}),$=new Xn(re,Z),V=$t.randFloat($g-Yg/2,$g+Yg/2),q=$t.randFloat(Kg-qg/2,Kg+qg/2),ee=$t.randFloat(Jg-Zg/2,Jg+Zg/2);$.position.set(V,q,ee),o.add($)},A=new ma(Wd,gA,e0/30,e0),y=A.clone();i0(A),i0(y);const x=new ta({wireframe:!0,side:bi,color:vA,vertexColors:!0}),C=new Xn(A,x);o.add(C);const P=new Xn(y,x);o.add(P);const R=[new Float32Array(C.geometry.attributes.position.count),new Float32Array(P.geometry.attributes.position.count)];let B=0,I=performance.now()*.001;const O=yc(Sc().width);n0(l,f,C,P,O),p=O.cameraY,h=p;let w=O.spikeMaxOffset;f.position.set(jw,Yw,nv),f.rotation.set(qw,Zw,$w),Array(O.starCount).fill().forEach(M),C.rotation.y=hA,P.rotation.y=mA;const L=()=>{const re=IA(l,u);n0(l,f,C,P,re),p=re.cameraY,h=t0(p),w=re.spikeMaxOffset},ae=()=>{h=t0(p)},k=window.visualViewport;window.addEventListener("resize",L),window.addEventListener("orientationchange",L),k?.addEventListener("resize",L),k?.addEventListener("scroll",L),window.addEventListener("scroll",ae,{passive:!0}),L(),ae();let ne=0;const J=()=>{l.position.y=$t.lerp(l.position.y,h,CA),_&&m&&(_.rotateY(Qw),m.rotateY(eA));const re=performance.now()*.001,Z=Math.min(.05,re-I);I=re;const $=re;$-B>=wA&&(R.forEach(V=>{for(let q=0;q<V.length;q+=1)if(Math.random()<EA)if(Math.random()<TA){const se=(Math.random()<.5?-1:1)*(.15+Math.random()*w);V[q]=$t.lerp(V[q],se,.35)}else V[q]=$t.lerp(V[q],0,.6)}),B=$),[C,P].forEach((V,q)=>{const ee=V.geometry.attributes.position,se=ee.array,F=R[q];for(let j=0;j<ee.count;j+=1){const Ae=j*3+2;se[Ae]=$t.damp(se[Ae],F[j],AA,Z)}ee.needsUpdate=!0}),u.render(o,l),ne=requestAnimationFrame(J)};return J(),()=>{cancelAnimationFrame(ne),window.removeEventListener("resize",L),window.removeEventListener("orientationchange",L),k?.removeEventListener("resize",L),k?.removeEventListener("scroll",L),window.removeEventListener("scroll",ae),u.dispose()}},[]),ce.jsx("canvas",{ref:t,id:s,className:`${PA} ${e}`.trim()})}function FA(){return ce.jsx("section",{className:"bg-transparent text-cyber-text py-8 text-center min-h-[7rem]",children:ce.jsxs("p",{className:"text-sm",children:["© ",new Date().getFullYear()," MTRX Studio. All rights reserved."]})})}function OA(){return ce.jsxs("div",{className:" bg-cyber-void",children:[ce.jsx(UA,{id:"backbg"}),ce.jsx(q_,{}),ce.jsx(ex,{}),ce.jsx(Z_,{}),ce.jsx(nx,{}),ce.jsx(gx,{}),ce.jsx(FA,{})]})}j_.createRoot(document.getElementById("root")).render(ce.jsx(B_.StrictMode,{children:ce.jsx(OA,{})}));
