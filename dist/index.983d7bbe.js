function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var r={},o={},i=t.parcelRequire3a11;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire3a11=i),i.register("27Lyk",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.983d7bbe.js","hfd23":"icons.c14567a0.svg"}'));var a={},s=function(e){return e&&e.Math==Math&&e};a=s("object"==typeof globalThis&&globalThis)||s("object"==typeof window&&window)||s("object"==typeof self&&self)||s("object"==typeof t&&t)||function(){return this}()||Function("return this")();var c,u;c=!(u=function(e){try{return!!e()}catch(e){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var l,f,d,p={};d=!u((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}));var h=Function.prototype,g=h.call,v=d&&h.bind.bind(g,g);p=d?v:function(e){return function(){return g.apply(e,arguments)}};var m,y={},b="object"==typeof document&&document.all,_=(m={all:b,IS_HTMLDDA:void 0===b&&void 0!==b}).all;y=m.IS_HTMLDDA?function(e){return"function"==typeof e||e===_}:function(e){return"function"==typeof e};var w,k,E,S={};E=function(e){return null==e};var O=TypeError;k=function(e){if(E(e))throw O("Can't call method on "+e);return e};var L=Object;w=function(e){return L(k(e))};var j=p({}.hasOwnProperty);S=Object.hasOwn||function(e,t){return j(w(e),t)};var $,F=Function.prototype,T=c&&Object.getOwnPropertyDescriptor,x=S(F,"name"),M={EXISTS:x,PROPER:x&&"something"===function(){}.name,CONFIGURABLE:x&&(!c||c&&T(F,"name").configurable)}.CONFIGURABLE,P={},I={},H=Object.defineProperty;$=function(e,t){try{H(a,e,{value:t,configurable:!0,writable:!0})}catch(n){a[e]=t}return t};var A="__core-js_shared__",N=a[A]||$(A,{});I=N;var q=p(Function.toString);y(I.inspectSource)||(I.inspectSource=function(e){return q(e)}),P=I.inspectSource;var C,R,D=a.WeakMap;R=y(D)&&/native code/.test(String(D));var W={},z=m.all;W=m.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:y(e)||e===z}:function(e){return"object"==typeof e?null!==e:y(e)};var U,G,B,J={},Q=a.document,V=W(Q)&&W(Q.createElement);B=function(e){return V?Q.createElement(e):{}},G=!c&&!u((function(){return 7!=Object.defineProperty(B("div"),"a",{get:function(){return 7}}).a}));var Y;Y=c&&u((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var K,X=String,Z=TypeError;K=function(e){if(W(e))return e;throw Z(X(e)+" is not an object")};var ee,te,ne={},re=Function.prototype.call;ne=d?re.bind(re):function(){return re.apply(re,arguments)};var oe,ie={};oe=function(e,t){return arguments.length<2?(n=a[e],y(n)?n:void 0):a[e]&&a[e][t];var n};var ae={};ae=p({}.isPrototypeOf);var se,ce,ue,le={};le="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var fe,de,pe=a.process,he=a.Deno,ge=pe&&pe.versions||he&&he.version,ve=ge&&ge.v8;ve&&(de=(fe=ve.split("."))[0]>0&&fe[0]<4?1:+(fe[0]+fe[1])),!de&&le&&(!(fe=le.match(/Edge\/(\d+)/))||fe[1]>=74)&&(fe=le.match(/Chrome\/(\d+)/))&&(de=+fe[1]),ue=de,se=(ce=!!Object.getOwnPropertySymbols&&!u((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ue&&ue<41})))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var me=Object;ie=se?function(e){return"symbol"==typeof e}:function(e){var t=oe("Symbol");return y(t)&&ae(t.prototype,me(e))};var ye,be,_e,we=String;_e=function(e){try{return we(e)}catch(e){return"Object"}};var ke=TypeError;be=function(e){if(y(e))return e;throw ke(_e(e)+" is not a function")},ye=function(e,t){var n=e[t];return E(n)?void 0:be(n)};var Ee,Se=TypeError;Ee=function(e,t){var n,r;if("string"===t&&y(n=e.toString)&&!W(r=ne(n,e)))return r;if(y(n=e.valueOf)&&!W(r=ne(n,e)))return r;if("string"!==t&&y(n=e.toString)&&!W(r=ne(n,e)))return r;throw Se("Can't convert object to primitive value")};var Oe;(Oe=function(e,t){return I[e]||(I[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.30.1",mode:"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.30.1/LICENSE",source:"https://github.com/zloirock/core-js"});var Le,je=0,$e=Math.random(),Fe=p(1..toString);Le=function(e){return"Symbol("+(void 0===e?"":e)+")_"+Fe(++je+$e,36)};var Te=a.Symbol,xe=Oe("wks"),Me=se?Te.for||Te:Te&&Te.withoutSetter||Le,Pe=TypeError,Ie=function(e){return S(xe,e)||(xe[e]=ce&&S(Te,e)?Te[e]:Me("Symbol."+e)),xe[e]}("toPrimitive");te=function(e,t){if(!W(e)||ie(e))return e;var n,r=ye(e,Ie);if(r){if(void 0===t&&(t="default"),n=ne(r,e,t),!W(n)||ie(n))return n;throw Pe("Can't convert object to primitive value")}return void 0===t&&(t="number"),Ee(e,t)},ee=function(e){var t=te(e,"string");return ie(t)?t:t+""};var He=TypeError,Ae=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,qe="enumerable",Ce="configurable",Re="writable";U=c?Y?function(e,t,n){if(K(e),t=ee(t),K(n),"function"==typeof e&&"prototype"===t&&"value"in n&&Re in n&&!n[Re]){var r=Ne(e,t);r&&r[Re]&&(e[t]=n.value,n={configurable:Ce in n?n[Ce]:r[Ce],enumerable:qe in n?n[qe]:r[qe],writable:!1})}return Ae(e,t,n)}:Ae:function(e,t,n){if(K(e),t=ee(t),K(n),G)try{return Ae(e,t,n)}catch(e){}if("get"in n||"set"in n)throw He("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var De;De=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},J=c?function(e,t,n){return U(e,t,De(1,n))}:function(e,t,n){return e[t]=n,e};var We,ze=Oe("keys");We=function(e){return ze[e]||(ze[e]=Le(e))};var Ue={};Ue={};var Ge,Be,Je,Qe="Object already initialized",Ve=a.TypeError,Ye=a.WeakMap;if(R||I.state){var Ke=I.state||(I.state=new Ye);Ke.get=Ke.get,Ke.has=Ke.has,Ke.set=Ke.set,Ge=function(e,t){if(Ke.has(e))throw Ve(Qe);return t.facade=e,Ke.set(e,t),t},Be=function(e){return Ke.get(e)||{}},Je=function(e){return Ke.has(e)}}else{var Xe=We("state");Ue[Xe]=!0,Ge=function(e,t){if(S(e,Xe))throw Ve(Qe);return t.facade=e,J(e,Xe,t),t},Be=function(e){return S(e,Xe)?e[Xe]:{}},Je=function(e){return S(e,Xe)}}var Ze=(C={set:Ge,get:Be,has:Je,enforce:function(e){return Je(e)?Be(e):Ge(e,{})},getterFor:function(e){return function(t){var n;if(!W(t)||(n=Be(t)).type!==e)throw Ve("Incompatible receiver, "+e+" required");return n}}}).enforce,et=C.get,tt=String,nt=Object.defineProperty,rt=p("".slice),ot=p("".replace),it=p([].join),at=c&&!u((function(){return 8!==nt((function(){}),"length",{value:8}).length})),st=String(String).split("String"),ct=f=function(e,t,n){"Symbol("===rt(tt(t),0,7)&&(t="["+ot(tt(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!S(e,"name")||M&&e.name!==t)&&(c?nt(e,"name",{value:t,configurable:!0}):e.name=t),at&&n&&S(n,"arity")&&e.length!==n.arity&&nt(e,"length",{value:n.arity});try{n&&S(n,"constructor")&&n.constructor?c&&nt(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var r=Ze(e);return S(r,"source")||(r.source=it(st,"string"==typeof t?t:"")),e};Function.prototype.toString=ct((function(){return y(this)&&et(this).source||P(this)}),"toString"),l=function(e,t,n){return n.get&&f(n.get,t,{getter:!0}),n.set&&f(n.set,t,{setter:!0}),U(e,t,n)};var ut;ut=function(){var e=K(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t};var lt=a.RegExp,ft=lt.prototype;c&&u((function(){var e=!0;try{lt(".","d")}catch(t){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",o=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in e&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(ft,"flags").get.call(t)!==r||n!==r}))&&l(ft,"flags",{configurable:!0,get:ut});var dt,pt,ht,gt={}.propertyIsEnumerable,vt=Object.getOwnPropertyDescriptor,mt=vt&&!gt.call({1:2},1);ht=mt?function(e){var t=vt(this,e);return!!t&&t.enumerable}:gt;var yt,bt,_t={},wt=p({}.toString),kt=p("".slice);bt=function(e){return kt(wt(e),8,-1)};var Et=Object,St=p("".split);_t=u((function(){return!Et("z").propertyIsEnumerable(0)}))?function(e){return"String"==bt(e)?St(e,""):Et(e)}:Et,yt=function(e){return _t(k(e))};var Ot,Lt=Object.getOwnPropertyDescriptor,jt=pt=c?Lt:function(e,t){if(e=yt(e),t=ee(t),G)try{return Lt(e,t)}catch(e){}if(S(e,t))return De(!ne(ht,e,t),e[t])};Ot=function(e,t,n,r){r||(r={});var o=r.enumerable,i=void 0!==r.name?r.name:t;if(y(n)&&f(n,i,r),r.global)o?e[t]=n:$(t,n);else{try{r.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=n:U(e,t,{value:n,enumerable:!1,configurable:!r.nonConfigurable,writable:!r.nonWritable})}return e};var $t,Ft,Tt,xt,Mt,Pt={},It={},Ht=Math.ceil,At=Math.floor;It=Math.trunc||function(e){var t=+e;return(t>0?At:Ht)(t)},Mt=function(e){var t=+e;return t!=t||0===t?0:It(t)};var Nt=Math.max,qt=Math.min;xt=function(e,t){var n=Mt(e);return n<0?Nt(n+t,0):qt(n,t)};var Ct,Rt,Dt=Math.min;Rt=function(e){return e>0?Dt(Mt(e),9007199254740991):0},Ct=function(e){return Rt(e.length)};var Wt=function(e){return function(t,n,r){var o,i=yt(t),a=Ct(i),s=xt(r,a);if(e&&n!=n){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===n)return e||s||0;return!e&&-1}},zt={includes:Wt(!0),indexOf:Wt(!1)}.indexOf,Ut=p([].push);Tt=function(e,t){var n,r=yt(e),o=0,i=[];for(n in r)!S(Ue,n)&&S(r,n)&&Ut(i,n);for(;t.length>o;)S(r,n=t[o++])&&(~zt(i,n)||Ut(i,n));return i};var Gt,Bt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");Ft=Object.getOwnPropertyNames||function(e){return Tt(e,Bt)},Gt=Object.getOwnPropertySymbols;var Jt=p([].concat);Pt=oe("Reflect","ownKeys")||function(e){var t=Ft(K(e));return Gt?Jt(t,Gt(e)):t},$t=function(e,t,n){for(var r=Pt(t),o=U,i=pt,a=0;a<r.length;a++){var s=r[a];S(e,s)||n&&S(n,s)||o(e,s,i(t,s))}};var Qt={},Vt=/#|\.prototype\./,Yt=function(e,t){var n=Xt[Kt(e)];return n==en||n!=Zt&&(y(t)?u(t):!!t)},Kt=Yt.normalize=function(e){return String(e).replace(Vt,".").toLowerCase()},Xt=Yt.data={},Zt=Yt.NATIVE="N",en=Yt.POLYFILL="P";Qt=Yt,dt=function(e,t){var n,r,o,i,s,c=e.target,u=e.global,l=e.stat;if(n=u?a:l?a[c]||$(c,{}):(a[c]||{}).prototype)for(r in t){if(i=t[r],o=e.dontCallGetSet?(s=jt(n,r))&&s.value:n[r],!Qt(u?r:c+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;$t(i,o)}(e.sham||o&&o.sham)&&J(i,"sham",!0),Ot(n,r,i,e)}};var tn,nn={},rn=Function.prototype,on=rn.apply,an=rn.call;nn="object"==typeof Reflect&&Reflect.apply||(d?an.bind(on):function(){return an.apply(on,arguments)});var sn,cn,un=(cn=function(e){if("Function"===bt(e))return p(e)})(cn.bind);sn=function(e,t){return be(e),void 0===t?e:d?un(e,t):function(){return e.apply(t,arguments)}};var ln={};ln=oe("document","documentElement");var fn={};fn=p([].slice);var dn,pn=TypeError;dn=function(e,t){if(e<t)throw pn("Not enough arguments");return e};var hn;hn=/(?:ipad|iphone|ipod).*applewebkit/i.test(le);var gn,vn,mn,yn,bn=vn={};function _n(){throw new Error("setTimeout has not been defined")}function wn(){throw new Error("clearTimeout has not been defined")}function kn(e){if(mn===setTimeout)return setTimeout(e,0);if((mn===_n||!mn)&&setTimeout)return mn=setTimeout,setTimeout(e,0);try{return mn(e,0)}catch(t){try{return mn.call(null,e,0)}catch(t){return mn.call(this,e,0)}}}!function(){try{mn="function"==typeof setTimeout?setTimeout:_n}catch(e){mn=_n}try{yn="function"==typeof clearTimeout?clearTimeout:wn}catch(e){yn=wn}}();var En,Sn=[],On=!1,Ln=-1;function jn(){On&&En&&(On=!1,En.length?Sn=En.concat(Sn):Ln=-1,Sn.length&&$n())}function $n(){if(!On){var e=kn(jn);On=!0;for(var t=Sn.length;t;){for(En=Sn,Sn=[];++Ln<t;)En&&En[Ln].run();Ln=-1,t=Sn.length}En=null,On=!1,function(e){if(yn===clearTimeout)return clearTimeout(e);if((yn===wn||!yn)&&clearTimeout)return yn=clearTimeout,clearTimeout(e);try{return yn(e)}catch(t){try{return yn.call(null,e)}catch(t){return yn.call(this,e)}}}(e)}}function Fn(e,t){this.fun=e,this.array=t}function Tn(){}bn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Sn.push(new Fn(e,t)),1!==Sn.length||On||kn($n)},Fn.prototype.run=function(){this.fun.apply(null,this.array)},bn.title="browser",bn.browser=!0,bn.env={},bn.argv=[],bn.version="",bn.versions={},bn.on=Tn,bn.addListener=Tn,bn.once=Tn,bn.off=Tn,bn.removeListener=Tn,bn.removeAllListeners=Tn,bn.emit=Tn,bn.prependListener=Tn,bn.prependOnceListener=Tn,bn.listeners=function(e){return[]},bn.binding=function(e){throw new Error("process.binding is not supported")},bn.cwd=function(){return"/"},bn.chdir=function(e){throw new Error("process.chdir is not supported")},bn.umask=function(){return 0},gn=void 0!==vn&&"process"==bt(vn);var xn,Mn,Pn,In,Hn=a.setImmediate,An=a.clearImmediate,Nn=a.process,qn=a.Dispatch,Cn=a.Function,Rn=a.MessageChannel,Dn=a.String,Wn=0,zn={},Un="onreadystatechange";u((function(){xn=a.location}));var Gn=function(e){if(S(zn,e)){var t=zn[e];delete zn[e],t()}},Bn=function(e){return function(){Gn(e)}},Jn=function(e){Gn(e.data)},Qn=function(e){a.postMessage(Dn(e),xn.protocol+"//"+xn.host)};Hn&&An||(Hn=function(e){dn(arguments.length,1);var t=y(e)?e:Cn(e),n=fn(arguments,1);return zn[++Wn]=function(){nn(t,void 0,n)},Mn(Wn),Wn},An=function(e){delete zn[e]},gn?Mn=function(e){Nn.nextTick(Bn(e))}:qn&&qn.now?Mn=function(e){qn.now(Bn(e))}:Rn&&!hn?(In=(Pn=new Rn).port2,Pn.port1.onmessage=Jn,Mn=sn(In.postMessage,In)):a.addEventListener&&y(a.postMessage)&&!a.importScripts&&xn&&"file:"!==xn.protocol&&!u(Qn)?(Mn=Qn,a.addEventListener("message",Jn,!1)):Mn=Un in B("script")?function(e){ln.appendChild(B("script"))[Un]=function(){ln.removeChild(this),Gn(e)}}:function(e){setTimeout(Bn(e),0)});var Vn=(tn={set:Hn,clear:An}).clear;dt({global:!0,bind:!0,enumerable:!0,forced:a.clearImmediate!==Vn},{clearImmediate:Vn});var Yn,Kn,Xn=tn.set;Kn="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var Zn,er=a.Function,tr=/MSIE .\./.test(le)||Kn&&((Zn=a.Bun.version.split(".")).length<3||0==Zn[0]&&(Zn[1]<3||3==Zn[1]&&0==Zn[2]));Yn=function(e,t){var n=t?2:1;return tr?function(r,o){var i=dn(arguments.length,1)>n,a=y(r)?r:er(r),s=i?fn(arguments,n):[],c=i?function(){nn(a,this,s)}:a;return t?e(c,o):e(c)}:e};var nr=a.setImmediate?Yn(Xn,!1):Xn;dt({global:!0,bind:!0,enumerable:!0,forced:a.setImmediate!==nr},{setImmediate:nr});var rr=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function l(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),s=new T(r||[]);return o(a,"_invoke",{value:L(e,n,s)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d="suspendedStart",p="suspendedYield",h="executing",g="completed",v={};function m(){}function y(){}function b(){}var _={};u(_,a,(function(){return this}));var w=Object.getPrototypeOf,k=w&&w(w(x([])));k&&k!==n&&r.call(k,a)&&(_=k);var E=b.prototype=m.prototype=Object.create(_);function S(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function n(o,i,a,s){var c=f(e[o],e,i);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?t.resolve(l.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function L(e,t,n){var r=d;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===g){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=j(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=f(e,t,n);if("normal"===c.type){if(r=n.done?g:p,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=g,n.method="throw",n.arg=c.arg)}}}function j(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function $(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach($,this),this.reset(!0)}function x(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}return{next:M}}function M(){return{value:t,done:!0}}return y.prototype=b,o(E,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:y,configurable:!0}),y.displayName=u(b,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,u(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},S(O.prototype),u(O.prototype,s,(function(){return this})),e.AsyncIterator=O,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new O(l(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=x,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return s.type="throw",s.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),F(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;F(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:x(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rr}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rr:Function("r","regeneratorRuntime = r")(rr)}const or="https://forkify-api.herokuapp.com/api/v2/recipes/",ir="9a617733-1b7c-46e5-b0fa-4fa5ef7abf4a",ar=async function(e,t){try{const r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),o=await Promise.race([r,(n=10,new Promise((function(e,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${n} second`))}),1e3*n)})))]),i=await o.json();if(!o.ok)throw new Error(`${i.message} (${o.status})`);return i}catch(e){throw e}var n},sr={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10},bookmarks:[]},cr=function(e){const{recipe:t}=e.data;return sr.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}},sr.recipe},ur=function(e=sr.search.page){sr.search.page=e;const t=(e-1)*sr.search.resultsPerPage,n=e*sr.search.resultsPerPage;return sr.search.results.slice(t,n)},lr=function(){localStorage.setItem("bookmarks",JSON.stringify(sr.bookmarks))},fr=function(e){sr.bookmarks.push(e),e.id===sr.recipe.id&&(sr.recipe.bookmarked=!0),lr()};!function(){const e=localStorage.getItem("bookmarks");e&&(sr.bookmarks=JSON.parse(e))}();var dr,pr,hr,gr;dr=new URL(i("27Lyk").resolve("hfd23"),import.meta.url).toString();class vr{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;const n=this._generateMarkup();if(!t)return console.log("Render is false"),n;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",n)}update(e){this._data=e;const t=this._generateMarkup(),n=document.createRange().createContextualFragment(t),r=Array.from(n.querySelectorAll("*")),o=Array.from(this._parentElement.querySelectorAll("*"));console.log(o),console.log(r),r.forEach(((e,t)=>{const n=o[t];e.isEqualNode(n)||""===e.firstChild?.nodeValue.trim()||(n.textContent=e.textContent),e.isEqualNode(n)||Array.from(e.attributes).forEach((e=>n.setAttribute(e.name,e.value)))}))}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const e=`\n      <div class="spinner">\n              <svg>\n                <use href="${n(dr)}#icon-loader"></use>\n              </svg>\n            </div>\n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){const t=`\n      <div class="error">\n      <svg>\n        <use href="${n(dr)}#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n  </div>\n      \n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){const t=`\n      <div class="message">\n        <div>\n          <svg>\n          <use href="${n(dr)}#icon-smile"></use>\n          </svg>\n        </div>\n     \n       <p>${e}</p>\n      </div>\n      \n      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var n,r,o=num.split(" ");if(o[0]&&(n=o[0]),o[1]&&(r=o[1]),n%1==0&&r&&r.match("/"))return new Fraction(n).add(new Fraction(r));if(!n||r)return;if("string"==typeof n&&n.match("/")){var i=n.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof n&&n.match("."))return new Fraction(parseFloat(n));this.numerator=parseInt(n),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,n=this.denominator,r=[];return 0!=e&&r.push(e),0!=t&&r.push((0===e?t:Math.abs(t))+"/"+n),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize();e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(hr=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},gr=function(e,t){if(t){var n=Math.pow(10,t);return Math.round(e*n)/n}return Math.round(e)},function(){if(hr(this.denominator)){var e=gr(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}hr(this.numerator)&&(e=gr(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*t),this.denominator*=t);var n=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=n,this.denominator/=n,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var n=[],r=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return r.forEach((function(e){var t=o.indexOf(e);t>=0&&(n.push(e),o.splice(t,1))})),0===n.length?1:function(){var e,t=n[0];for(e=1;e<n.length;e++)t*=n[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),n=[],r=2;r*r<=t;)t%r==0?(n.push(r),t/=r):r++;return 1!=t&&n.push(t),n},pr=Fraction;var mr=new class extends vr{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe.Please try another one!";_message="";addHandlerRender(e){["hashchange","load"].forEach((t=>window.addEventListener(t,e)))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--update-servings");if(!n)return;console.log(n);const{updateTo:r}=n.dataset;+r>0&&e(+r)}))}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",(function(t){t.target.closest(".btn--bookmark")&&e()}))}_generateMarkup(){return`\n \n    <figure class="recipe__fig">\n    <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${this._data.title}</span>\n    </h1>\n   </figure>\n   \n   <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(dr)}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(dr)}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n      <span class="recipe__info-text">servings</span>\n   \n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">\n          <svg>\n            <use href="${n(dr)}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--update-servings"data-update-to="${this._data.servings+1}">\n          <svg>\n            <use href="${n(dr)}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n   \n    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">\n      <svg>\n        <use href="${n(dr)}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round btn--bookmark">\n      <svg class="">\n        <use href="${n(dr)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>\n      </svg>\n    </button>\n   </div>\n   \n   <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n    ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n   </div>\n   \n   <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${this._data.sourceUrl}"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="${n(dr)}#icon-arrow-right"></use>\n      </svg>\n    </a>\n   </div>\n   \n    \n    `}_generateMarkupIngredient(e){return console.log(e),`\n        <li class="recipe__ingredient">\n          <svg class="recipe__icon">\n          <use href="${n(dr)}#icon-check"></use>\n          </svg>\n         <div class="recipe__quantity">${e.quantity?new pr(e.quantity).toString():""}</div>\n         <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>${e.description}\n         </div>\n        </li>\n        `}};var yr=new class{_parentEl=document.querySelector(".search");getQuery(){const e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",(function(t){t.preventDefault(),e()}))}};var br=new class extends vr{_parentElement="";_generateMarkup(){const e=window.location.hash.slice(1);return`\n    <li class="preview">\n    <a class="preview__link ${this._data.id===e?"preview__link--active":""} " href="#${this._data.id}">\n        <figure class="preview__fig">\n           <img src="${this._data.image}" alt="${this._data.title}" />\n        </figure>\n        <div class="preview__data">\n           <h4 class="preview__title">${this._data.title}</h4>\n           <p class="preview__publisher">${this._data.publisher}</p>\n        \n        \n            <div class="preview__user-generated ${this._data.key?"":"hidden"}">\n             <svg>\n              <use href="${n(dr)}#icon-user"></use>\n             </svg>\n             </div>\n            </div>\n       </a>\n    </li>\n`}};var _r=new class extends vr{_parentElement=document.querySelector(".results");_errorMessage="No Recipe found for your Query! Please Try Again!";_message="";_generateMarkup(){return this._data.map((e=>br.render(e,!1))).join("")}};var wr=new class extends vr{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",(function(t){const n=t.target.closest(".btn--inline");if(!n)return;const r=+n.dataset.goto;e(r)}))}_generateMarkup(){const e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===e&&t>1?`\n        <button data-goto="${e+1}"class="btn--inline pagination__btn--next">\n                <span>Page${e+1}</span>\n                <svg class="search__icon">\n                <use href="${n(dr)}#icon-arrow-right"></use>\n                </svg>\n            </button>\n            `:e===t&&t>1?`\n        <button data-goto="${e-1}"class="btn--inline pagination__btn--prev">\n                <svg class="search__icon">\n                <use href="${n(dr)}#icon-arrow-left"></use>\n                </svg>\n                <span>Page${e-1}</span>\n            </button>`:e<t?`<button data-goto="${e-1}"class="btn--inline pagination__btn--prev">\n                    <svg class="search__icon">\n                    <use href="${n(dr)}#icon-arrow-left"></use>\n                    </svg>\n                    <span>Page${e-1}</span>\n                </button>\n                \n                <button data-goto="${e+1}" class="btn--inline pagination__btn--next">\n                      <span>Page ${e+1}</span>\n                        <svg class="search__icon">\n                          <use href="${n(dr)}#icon-arrow-right"></use>\n                        </svg>\n                       \n                    </button>`:""}};var kr=new class extends vr{_parentElement=document.querySelector(".bookmarks__list");_errorMessage=" No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map((e=>br.render(e,!1))).join("")}};var Er=new class extends vr{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :) ";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",(function(t){t.preventDefault();const n=[...new FormData(this)],r=Object.fromEntries(n);e(r)}))}_generateMarkup(){}};const Sr=async function(){try{const e=window.location.hash.slice(1);if(!e)return;mr.renderSpinner(),_r.update(ur()),await async function(e){try{const t=await ar(`${or}${e}?key=${ir}`);console.log(t),sr.recipe=cr(t),sr.bookmarks.some((t=>t.id===e))?sr.recipe.bookmarked=!0:sr.recipe.bookmarked=!1,console.log(sr.recipe)}catch(e){throw console.error(`${e} 💥💥💥💥`),e}}(e),mr.render(sr.recipe),kr.update(sr.bookmarks)}catch(e){mr.renderError(),console.error(e)}},Or=async function(){try{_r.renderSpinner();const e=yr.getQuery();if(!e)return;await async function(e){try{const t=await ar(`${or}?search=${e}&key=${ir}`);console.log(t),sr.search.results=t.data.recipes.map((e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}}))),sr.search.page=1}catch(e){throw console.error(`${e}💥💥💥💥`),e}}(e),_r.render(ur()),wr.render(sr.search)}catch(e){console.log(e)}},Lr=function(e){_r.render(ur(e)),wr.render(sr.search)},jr=function(e){!function(e){sr.recipe.ingredients.forEach((t=>{t.quantity=t.quantity*e/sr.recipe.servings})),sr.recipe.servings=e}(e),mr.update(sr.recipe)},$r=function(){sr.recipe.bookmarked?function(e){const t=sr.bookmarks.findIndex((t=>t.id==e));sr.bookmarks.splice(t,1),e===sr.recipe.id&&(sr.recipe.bookmarked=!1),lr()}(sr.recipe.id):fr(sr.recipe),mr.update(sr.recipe),kr.render(sr.bookmarks)},Fr=function(){kr.render(sr.bookmarks),console.log(sr.recipe),mr.update(sr.recipe)},Tr=async function(e){try{Er.renderSpinner(),await async function(e){try{const t=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&""!==e[1])).map((e=>{const t=e[1].split(",").map((e=>e.trim()));if(3!==t.length)throw new Error("Wrong ingredient format.Please use the correct format :)");const[n,r,o]=t;return{quantity:n?+n:null,unit:r,description:o}})),n={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},r=await ar(`${or}?key=${ir}`,n);sr.recipe=cr(r),fr(sr.recipe)}catch(e){throw e}}(e),console.log(sr.recipe),mr.render(sr.recipe),Er.renderMessage(),kr.render(sr.bookmarks),window.history.pushState(null,"",`#${sr.recipe.id}`),setTimeout((function(){Er.toggleWindow()}),2500)}catch(e){console.error("💥",e),Er.renderError(e.message)}};kr.addHandlerRender(Fr),mr.addHandlerRender(Sr),mr.addHandlerUpdateServings(jr),mr.addHandlerAddBookmark($r),yr.addHandlerSearch(Or),wr.addHandlerClick(Lr),Er.addHandlerUpload(Tr);
//# sourceMappingURL=index.983d7bbe.js.map