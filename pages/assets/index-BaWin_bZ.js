var Yt=Object.defineProperty;var en=(t,e,n)=>e in t?Yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var A=(t,e,n)=>(en(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,Fe=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),Ke=new WeakMap;let xt=class{constructor(e,n,o){if(this._$cssResult$=!0,o!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Fe&&e===void 0){const o=n!==void 0&&n.length===1;o&&(e=Ke.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ke.set(n,e))}return e}toString(){return this.cssText}};const tn=t=>new xt(typeof t=="string"?t:t+"",void 0,He),S=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((o,i,s)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new xt(n,t,He)},nn=(t,e)=>{if(Fe)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const o=document.createElement("style"),i=ie.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=n.cssText,t.appendChild(o)}},We=Fe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const o of e.cssRules)n+=o.cssText;return tn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:on,defineProperty:sn,getOwnPropertyDescriptor:rn,getOwnPropertyNames:an,getOwnPropertySymbols:cn,getPrototypeOf:ln}=Object,C=globalThis,Je=C.trustedTypes,dn=Je?Je.emptyScript:"",me=C.reactiveElementPolyfillSupport,H=(t,e)=>t,Ae={toAttribute(t,e){switch(e){case Boolean:t=t?dn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ct=(t,e)=>!on(t,e),Xe={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:Ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class M extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Xe){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(e,o,n);i!==void 0&&sn(this.prototype,e,i)}}static getPropertyDescriptor(e,n,o){const{get:i,set:s}=rn(this.prototype,e)??{get(){return this[n]},set(r){this[n]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const c=i==null?void 0:i.call(this);s.call(this,r),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xe}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const e=ln(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const n=this.properties,o=[...an(n),...cn(n)];for(const i of o)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[o,i]of n)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[n,o]of this.elementProperties){const i=this._$Eu(n,o);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)n.unshift(We(i))}else e!==void 0&&n.push(We(e));return n}static _$Eu(e,n){const o=n.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const o of n.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostConnected)==null?void 0:o.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostDisconnected)==null?void 0:o.call(n)})}attributeChangedCallback(e,n,o){this._$AK(e,o)}_$EC(e,n){var s;const o=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,o);if(i!==void 0&&o.reflect===!0){const r=(((s=o.converter)==null?void 0:s.toAttribute)!==void 0?o.converter:Ae).toAttribute(n,o.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,n){var s;const o=this.constructor,i=o._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=o.getPropertyOptions(i),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((s=r.converter)==null?void 0:s.fromAttribute)!==void 0?r.converter:Ae;this._$Em=i,this[i]=c.fromAttribute(n,r.type),this._$Em=null}}requestUpdate(e,n,o){if(e!==void 0){if(o??(o=this.constructor.getPropertyOptions(e)),!(o.hasChanged??Ct)(this[e],n))return;this.P(e,n,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,o){this._$AL.has(e)||this._$AL.set(e,n),o.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,r]of this._$Ep)this[s]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,r]of i)r.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],r)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[H("elementProperties")]=new Map,M[H("finalized")]=new Map,me==null||me({ReactiveElement:M}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,re=G.trustedTypes,Ye=re?re.createPolicy("lit-html",{createHTML:t=>t}):void 0,kt="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,St="?"+x,hn=`<${St}>`,T=document,q=()=>T.createComment(""),V=t=>t===null||typeof t!="object"&&typeof t!="function",Et=Array.isArray,un=t=>Et(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ge=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,L=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,it=/"/g,Pt=/^(?:script|style|textarea|title)$/i,pn=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=pn(1),D=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),ot=new WeakMap,j=T.createTreeWalker(T,129);function Ot(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ye!==void 0?Ye.createHTML(e):e}const fn=(t,e)=>{const n=t.length-1,o=[];let i,s=e===2?"<svg>":"",r=N;for(let c=0;c<n;c++){const a=t[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===N?d[1]==="!--"?r=et:d[1]!==void 0?r=tt:d[2]!==void 0?(Pt.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=L):d[3]!==void 0&&(r=L):r===L?d[0]===">"?(r=i??N,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?L:d[3]==='"'?it:nt):r===it||r===nt?r=L:r===et||r===tt?r=N:(r=L,i=void 0);const f=r===L&&t[c+1].startsWith("/>")?" ":"";s+=r===N?a+hn:h>=0?(o.push(l),a.slice(0,h)+kt+a.slice(h)+x+f):a+x+(h===-2?c:f)}return[Ot(t,s+(t[n]||"<?>")+(e===2?"</svg>":"")),o]};class Z{constructor({strings:e,_$litType$:n},o){let i;this.parts=[];let s=0,r=0;const c=e.length-1,a=this.parts,[l,d]=fn(e,n);if(this.el=Z.createElement(l,o),j.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=j.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(kt)){const u=d[r++],f=i.getAttribute(h).split(x),g=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:g[2],strings:f,ctor:g[1]==="."?gn:g[1]==="?"?_n:g[1]==="@"?yn:de}),i.removeAttribute(h)}else h.startsWith(x)&&(a.push({type:6,index:s}),i.removeAttribute(h));if(Pt.test(i.tagName)){const h=i.textContent.split(x),u=h.length-1;if(u>0){i.textContent=re?re.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],q()),j.nextNode(),a.push({type:2,index:++s});i.append(h[u],q())}}}else if(i.nodeType===8)if(i.data===St)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(x,h+1))!==-1;)a.push({type:7,index:s}),h+=x.length-1}s++}}static createElement(e,n){const o=T.createElement("template");return o.innerHTML=e,o}}function z(t,e,n=t,o){var r,c;if(e===D)return e;let i=o!==void 0?(r=n._$Co)==null?void 0:r[o]:n._$Cl;const s=V(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),s===void 0?i=void 0:(i=new s(t),i._$AT(t,n,o)),o!==void 0?(n._$Co??(n._$Co=[]))[o]=i:n._$Cl=i),i!==void 0&&(e=z(t,i._$AS(t,e.values),i,o)),e}class mn{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:o}=this._$AD,i=((e==null?void 0:e.creationScope)??T).importNode(n,!0);j.currentNode=i;let s=j.nextNode(),r=0,c=0,a=o[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new X(s,s.nextSibling,this,e):a.type===1?l=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(l=new bn(s,this,e)),this._$AV.push(l),a=o[++c]}r!==(a==null?void 0:a.index)&&(s=j.nextNode(),r++)}return j.currentNode=T,i}p(e){let n=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,n),n+=o.strings.length-2):o._$AI(e[n])),n++}}class X{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,o,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=z(this,e,n),V(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):un(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==m&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){var s;const{values:n,_$litType$:o}=e,i=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Z.createElement(Ot(o.h,o.h[0]),this.options)),o);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const r=new mn(i,this),c=r.u(this.options);r.p(n),this.T(c),this._$AH=r}}_$AC(e){let n=ot.get(e.strings);return n===void 0&&ot.set(e.strings,n=new Z(e)),n}k(e){Et(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let o,i=0;for(const s of e)i===n.length?n.push(o=new X(this.S(q()),this.S(q()),this,this.options)):o=n[i],o._$AI(s),i++;i<n.length&&(this._$AR(o&&o._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,o,i,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}_$AI(e,n=this,o,i){const s=this.strings;let r=!1;if(s===void 0)e=z(this,e,n,0),r=!V(e)||e!==this._$AH&&e!==D,r&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=z(this,c[o+a],n,a),l===D&&(l=this._$AH[a]),r||(r=!V(l)||l!==this._$AH[a]),l===m?e=m:e!==m&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gn extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class _n extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class yn extends de{constructor(e,n,o,i,s){super(e,n,o,i,s),this.type=5}_$AI(e,n=this){if((e=z(this,e,n,0)??m)===D)return;const o=this._$AH,i=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,s=e!==m&&(o===m||i);i&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class bn{constructor(e,n,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const _e=G.litHtmlPolyfillSupport;_e==null||_e(Z,X),(G.litHtmlVersions??(G.litHtmlVersions=[])).push("3.1.2");const vn=(t,e,n)=>{const o=(n==null?void 0:n.renderBefore)??e;let i=o._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;o._$litPart$=i=new X(e.insertBefore(q(),s),s,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vn(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}}var At;v._$litElement$=!0,v.finalized=!0,(At=globalThis.litElementHydrateSupport)==null||At.call(globalThis,{LitElement:v});const ye=globalThis.litElementPolyfillSupport;ye==null||ye({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var wn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,An=(t,e,n,o)=>{for(var i=o>1?void 0:o?$n(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&wn(e,n,i),i};let xe=class extends v{render(){return $`
      <nav>
        <h1>
          <a class="navbar__brand"
            href="/"
            >GDG Querétaro
          </a>
        </h1>
        <a class="navbar__item_main"
          href="https://linkedin.com/company/dev-queretaro"
          target="_blank"
        >
          + Síguenos
        </a>
      </nav>
    `}};xe.styles=S`
    nav {
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid black;
      background-color: black;
      color: white;
      /* font-family: 'Roboto Mono'; */
    }

    .navbar__brand, &:visited {
      font-size: 16pt;
      text-decoration: none;
      color: unset
    }

    .navbar__item_main, &:visited {
      font-family: 'Roboto Mono';
      font-weight: 700;
      /* opacity: 40%; */
      color: #F9AB00;
      text-decoration: none;
    }
  `;xe=An([E("devfest-navbar")],xe);const xn="data:image/svg+xml,%3csvg%20width='63'%20height='37'%20viewBox='0%200%2063%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.9372%203.76231L5.88069%2013.1443C3.13946%2015.1141%202.51406%2018.9331%204.48384%2021.6744C6.45361%2024.4156%2010.2727%2025.041%2013.0139%2023.0712L26.0703%2013.6892C28.8116%2011.7194%2029.437%207.90039%2027.4672%205.15916C25.4974%202.41792%2021.6784%201.79254%2018.9372%203.76231Z'%20fill='%23EA4335'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.9897%2013.1192C10.2485%2011.1494%206.42945%2011.7748%204.45967%2014.516C2.48989%2017.2573%203.11528%2021.0763%205.85651%2023.0461L18.913%2032.4281C21.6542%2034.3979%2025.4733%2033.7725%2027.443%2031.0313C29.4128%2028.29%2028.7874%2024.471%2026.0462%2022.5012L12.9897%2013.1192Z'%20fill='%234285F4'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M50.4865%2013.1481L37.43%2022.5301C34.6888%2024.4999%2034.0634%2028.3189%2036.0332%2031.0601C38.0029%2033.8014%2041.822%2034.4267%2044.5632%2032.457L57.6197%2023.075C60.3609%2021.1052%2060.9863%2017.2861%2059.0165%2014.5449C57.0467%2011.8037%2053.2277%2011.1783%2050.4865%2013.1481Z'%20fill='%23F9AB00'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M44.5354%203.73443C41.7941%201.76466%2037.9751%202.39003%2036.0053%205.13127C34.0355%207.87251%2034.6609%2011.6915%2037.4022%2013.6613L50.4586%2023.0433C53.1999%2025.0131%2057.0189%2024.3877%2058.9887%2021.6465C60.9585%2018.9053%2060.3331%2015.0862%2057.5918%2013.1165L44.5354%203.73443Z'%20fill='%2334A853'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e",Cn="data:image/svg+xml,%3csvg%20width='30'%20height='29'%20viewBox='0%200%2030%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.8216%2013.6765L16.778%201.64016C16.5885%201.45067%2016.2787%201.45067%2016.0892%201.64016L11.259%206.47036C11.0695%206.65985%2011.0695%206.96959%2011.259%207.15908L14.7355%2010.6355H1.50391V18.4411H14.7373L11.1953%2021.9831C11.0058%2022.1726%2011.0058%2022.4823%2011.1953%2022.6718L16.0255%2027.502C16.215%2027.6915%2016.5247%2027.6915%2016.7142%2027.502L28.8179%2015.4001C28.878%2015.34%2028.9309%2015.2744%2028.9764%2015.2052C29.2898%2014.7314%2029.2388%2014.0883%2028.8216%2013.6728V13.6765Z'%20fill='%23CCF6C5'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";var kn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,En=(t,e,n,o)=>{for(var i=o>1?void 0:o?Sn(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&kn(e,n,i),i};let Ce=class extends v{render(){return $`
      <!-- <span class="hero__ascii-separator_top">1010101010101010101010</span> -->

      <div class="hero__cover">
        <span class="hero__separator">10101010101010101010</span>

        <main class="hero__lookup">
          <span class="hero__line-a">
            <slot name="event"></slot>
            <img src=${xn} />
          </span>

          <span class="hero__line-b">
            <slot name="date"></slot>
            <img src=${Cn} />
            <slot name="location"></slot>
          </span>

          <slot name="call-to-action"></slot>
        </main>

        <span class="hero__separator">10101010101010101010</span>
      </div>

      <!-- <span class="hero__ascii-separator">1010101010101010101010</span> -->
    `}};Ce.styles=S`
    :host {
      display: grid;
      height: 70vh;
      min-height: 25rem;
      justify-content: center;
      grid-template-columns: 1fr minmax(80vw, 30rem) 1fr;
      grid-template-rows: 1fr
                          auto
                          1fr;

      grid-template-areas:   "... ... ..."
                            "... cover ..."
                             "... ... ...";
    }

    .hero__cover {
      grid-area: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .hero__separator {
      display: none;
      font-family: 'Roboto Mono';
      font-size: 20pt;
      opacity: 13%;
      overflow: clip;
    }

    .hero__lookup {
      margin: 5vh 0;

      > .hero__line-a {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
  
        > ::slotted(.hero__event) {
          /* font-size: 42pt; */
          font-size: clamp(1rem, calc(40.0pt + 2.5vw), 60pt);
        }

        > img {
          flex-grow: 1;
          /* max-width: 6rem; */
          object-fit: fill;
          /* max-width: clamp(2rem, 9rem, 8rem); */
          max-width: 25%;
          min-width: 20%;
          /* transform: scale(1.2); */
        }
      }
  
      > .hero__line-b {
        /* margin-top: -1rem; */
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1ch;
  
        > ::slotted(.hero__date), ::slotted(.hero__location) {
          /* font-size: 12pt; */
          font-size: clamp(1rem, calc(0.50rem + 2.0vw), 1.5rem);
        }
      }
    }


    ::slotted(.hero__call-to-action) {
      margin-top: 2rem !important;
      padding: 1rem;
      /* height: 3rem; */
      width: 100%;
      display: block;
      font-size: 22pt;
      font-weight: bold;
      text-align: center;
      color: black;
      background-color: #F9AB00;
      border-radius: 5rem;
      border: solid black 3px;
    }
  `;Ce=En([E("devfest-hero")],Ce);const Pn=[{name:"Cecilia Vazquez",organization:"Google MX",role:"People Consultant",pictureURL:"https://media.licdn.com/dms/image/v2/D5603AQHOl8m8slpe5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724269132808?e=1736380800&v=beta&t=8NEJCM_FMVcOfzj25-dhoKCcTuyUiuC5hwW90MEnghE",socials:[["",""]]},{name:"Alan Lee",organization:"Google MX",role:"Technical Recruiter",pictureURL:"https://media.licdn.com/dms/image/v2/D5603AQEX2N6UdHpdug/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665503422833?e=1736380800&v=beta&t=5iGAD2gQtw7ZxEatgzh6KZ8Y9jgo0A0q-0BkANhg36E",socials:[["",""]]},{name:"Dinorah Tovar",organization:"Google Dev. Expert",role:"Android Engineer",pictureURL:"https://pbs.twimg.com/media/FJLjiQZVQAEL-Uv?format=jpg&name=4096x4096",socials:[["linkedin","https://www.linkedin.com/in/dinorah-tovar/"],["rss","https://www.linkedin.com/in/jggomezt/"]]},{name:"Juan Guillermo Gómez",organization:"Google Dev. Expert",role:"Cloud Architect",pictureURL:"https://edteam-media.s3.amazonaws.com/users/avatar/c5b7bdb1-9513-4436-97ac-c15fc9568f98.jpg",socials:[["linkedin","https://www.linkedin.com/in/jggomezt/"]]},{name:"Javier Ruiz",organization:"Google Cloud",role:"Project Manager",pictureURL:"https://media.licdn.com/dms/image/v2/D4E03AQHPGFUI65Bo5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706023604729?e=1735776000&v=beta&t=TqMhph8N9qTuhnX4xd5vM4iX-vFJxvnbz7I-_ASAXN4",socials:[["linkedin","https://www.linkedin.com/in/javaruiz/"]]},{name:"Aarón Guerrero",organization:"Google Dev. Expert",role:"Cloud Architect",pictureURL:"https://pbs.twimg.com/profile_images/1684806244819697665/fsN0OTkj_400x400.jpg",socials:[["linkedin","https://www.linkedin.com/in/aaronthewarrior/"]]},{name:"Rene Figueroa",organization:"Wizeline",role:"Technology Director",pictureURL:"https://media.licdn.com/dms/image/v2/C4E03AQHjamjc_JeRXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1533476669328?e=1735776000&v=beta&t=fJuBzqmch0DirHHmx9oTGWX-Azm6QZGipgtViKXg0BQ",socials:[["linkedin","https://www.linkedin.com/in/renecloud/"]]},{name:"Esteban Quintana",organization:"Pinterest",role:"Software Engineer",pictureURL:"https://media.licdn.com/dms/image/v2/C4E03AQEZ7FbSnZwHBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1630722250582?e=1736380800&v=beta&t=KaHmutJRuLpVVM59FjK519uz-ZZqd6_Ef0blgwYIL2Y",socials:[["linkedin","https://www.linkedin.com/in/esteban-quintana-cueto/"]]},{name:"Roberto Cruz Lozano",organization:"IBM",role:"Python Developer",pictureURL:"https://media.licdn.com/dms/image/v2/D4E03AQGMZ4adCtn-Rw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696015456702?e=1736985600&v=beta&t=zJeqsDFRaHBhfSurH0ne9Tz9odccnKnmks0lntym75k",socials:[["github","https://github.com/Tank3-TK3"]]},{name:"Ricardo García",organization:"Tipos Libres",role:"Desarrollador Web",pictureURL:"https://media.licdn.com/dms/image/v2/D4D03AQFbk0dtkD6exw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677723457881?e=1736985600&v=beta&t=TofKs085KDaTKisaQ_ZdzPoXPIKvL78cRvqypqBZAs0",socials:[["linkedin","https://www.linkedin.com/in/richard-garcia-flores/"]]},{name:"Alan Navarrete",organization:"Tipos Libres",role:"Diseñador multimedia",pictureURL:"https://media.licdn.com/dms/image/v2/C5603AQEbVy4eCOCNIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656698189337?e=1736985600&v=beta&t=UjszDaAyJFxeEzLrN3AXJhhA64wAeVWntPvSqRkqmOE",socials:[["linkedin","https://www.linkedin.com/in/alan-navarrete-a1876688"]]}];/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const It=Object.freeze({left:0,top:0,width:16,height:16}),ae=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...It,...ae}),ke=Object.freeze({...Y,body:"",hidden:!1}),On=Object.freeze({width:null,height:null}),Lt=Object.freeze({...On,...ae});function In(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function o(i){for(;i<0;)i+=4;return i%4}if(n===""){const i=parseInt(t);return isNaN(i)?0:o(i)}else if(n!==t){let i=0;switch(n){case"%":i=25;break;case"deg":i=90}if(i){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/i,s%1===0?o(s):0)}}return e}const Ln=/[\s,]+/;function jn(t,e){e.split(Ln).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const jt={...Lt,preserveAspectRatio:""};function st(t){const e={...jt},n=(o,i)=>t.getAttribute(o)||i;return e.width=n("width",null),e.height=n("height",null),e.rotate=In(n("rotate","")),jn(e,n("flip","")),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}function Rn(t,e){for(const n in jt)if(t[n]!==e[n])return!0;return!1}const B=/^[a-z0-9]+(-[a-z0-9]+)*$/,ee=(t,e,n,o="")=>{const i=t.split(":");if(t.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;o=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const c=i.pop(),a=i.pop(),l={provider:i.length>0?i[0]:o,prefix:a,name:c};return e&&!oe(l)?null:l}const s=i[0],r=s.split("-");if(r.length>1){const c={provider:o,prefix:r.shift(),name:r.join("-")};return e&&!oe(c)?null:c}if(n&&o===""){const c={provider:o,prefix:"",name:s};return e&&!oe(c,n)?null:c}return null},oe=(t,e)=>t?!!((t.provider===""||t.provider.match(B))&&(e&&t.prefix===""||t.prefix.match(B))&&t.name.match(B)):!1;function Tn(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const o=((t.rotate||0)+(e.rotate||0))%4;return o&&(n.rotate=o),n}function rt(t,e){const n=Tn(t,e);for(const o in ke)o in ae?o in t&&!(o in n)&&(n[o]=ae[o]):o in e?n[o]=e[o]:o in t&&(n[o]=t[o]);return n}function Mn(t,e){const n=t.icons,o=t.aliases||Object.create(null),i=Object.create(null);function s(r){if(n[r])return i[r]=[];if(!(r in i)){i[r]=null;const c=o[r]&&o[r].parent,a=c&&s(c);a&&(i[r]=[c].concat(a))}return i[r]}return(e||Object.keys(n).concat(Object.keys(o))).forEach(s),i}function Dn(t,e,n){const o=t.icons,i=t.aliases||Object.create(null);let s={};function r(c){s=rt(o[c]||i[c],s)}return r(e),n.forEach(r),rt(t,s)}function Rt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(i=>{e(i,null),n.push(i)});const o=Mn(t);for(const i in o){const s=o[i];s&&(e(i,Dn(t,i,s)),n.push(i))}return n}const zn={provider:"",aliases:{},not_found:{},...It};function be(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Tt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!be(t,zn))return null;const n=e.icons;for(const i in n){const s=n[i];if(!i.match(B)||typeof s.body!="string"||!be(s,ke))return null}const o=e.aliases||Object.create(null);for(const i in o){const s=o[i],r=s.parent;if(!i.match(B)||typeof r!="string"||!n[r]&&!o[r]||!be(s,ke))return null}return e}const ce=Object.create(null);function Un(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function k(t,e){const n=ce[t]||(ce[t]=Object.create(null));return n[e]||(n[e]=Un(t,e))}function Ge(t,e){return Tt(e)?Rt(e,(n,o)=>{o?t.icons[n]=o:t.missing.add(n)}):[]}function Nn(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function Fn(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(ce)).forEach(i=>{(typeof i=="string"&&typeof e=="string"?[e]:Object.keys(ce[i]||{})).forEach(r=>{const c=k(i,r);n=n.concat(Object.keys(c.icons).map(a=>(i!==""?"@"+i+":":"")+r+":"+a))})}),n}let K=!1;function Mt(t){return typeof t=="boolean"&&(K=t),K}function W(t){const e=typeof t=="string"?ee(t,!0,K):t;if(e){const n=k(e.provider,e.prefix),o=e.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function Dt(t,e){const n=ee(t,!0,K);if(!n)return!1;const o=k(n.provider,n.prefix);return Nn(o,n.name,e)}function at(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),K&&!e&&!t.prefix){let i=!1;return Tt(t)&&(t.prefix="",Rt(t,(s,r)=>{r&&Dt(s,r)&&(i=!0)})),i}const n=t.prefix;if(!oe({provider:e,prefix:n,name:"a"}))return!1;const o=k(e,n);return!!Ge(o,t)}function ct(t){return!!W(t)}function Hn(t){const e=W(t);return e?{...Y,...e}:null}function Gn(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((i,s)=>i.provider!==s.provider?i.provider.localeCompare(s.provider):i.prefix!==s.prefix?i.prefix.localeCompare(s.prefix):i.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return t.forEach(i=>{if(o.name===i.name&&o.prefix===i.prefix&&o.provider===i.provider)return;o=i;const s=i.provider,r=i.prefix,c=i.name,a=n[s]||(n[s]=Object.create(null)),l=a[r]||(a[r]=k(s,r));let d;c in l.icons?d=e.loaded:r===""||l.missing.has(c)?d=e.missing:d=e.pending;const h={provider:s,prefix:r,name:c};d.push(h)}),e}function zt(t,e){t.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(i=>i.id!==e))})}function Bn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const o=t.provider,i=t.prefix;e.forEach(s=>{const r=s.icons,c=r.pending.length;r.pending=r.pending.filter(a=>{if(a.prefix!==i)return!0;const l=a.name;if(t.icons[l])r.loaded.push({provider:o,prefix:i,name:l});else if(t.missing.has(l))r.missing.push({provider:o,prefix:i,name:l});else return n=!0,!0;return!1}),r.pending.length!==c&&(n||zt([t],s.id),s.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),s.abort))})}))}let Qn=0;function qn(t,e,n){const o=Qn++,i=zt.bind(null,n,o);if(!e.pending.length)return i;const s={id:o,icons:e,callback:t,abort:i};return n.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(s)}),i}const Se=Object.create(null);function lt(t,e){Se[t]=e}function Ee(t){return Se[t]||Se[""]}function Vn(t,e=!0,n=!1){const o=[];return t.forEach(i=>{const s=typeof i=="string"?ee(i,e,n):i;s&&o.push(s)}),o}var Zn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Kn(t,e,n,o){const i=t.resources.length,s=t.random?Math.floor(Math.random()*i):t.index;let r;if(t.random){let p=t.resources.slice(0);for(r=[];p.length>1;){const b=Math.floor(Math.random()*p.length);r.push(p[b]),p=p.slice(0,b).concat(p.slice(b+1))}r=r.concat(p)}else r=t.resources.slice(s).concat(t.resources.slice(0,s));const c=Date.now();let a="pending",l=0,d,h=null,u=[],f=[];typeof o=="function"&&f.push(o);function g(){h&&(clearTimeout(h),h=null)}function P(){a==="pending"&&(a="aborted"),g(),u.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),u=[]}function _(p,b){b&&(f=[]),typeof p=="function"&&f.push(p)}function pe(){return{startTime:c,payload:e,status:a,queriesSent:l,queriesPending:u.length,subscribe:_,abort:P}}function O(){a="failed",f.forEach(p=>{p(void 0,d)})}function w(){u.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),u=[]}function y(p,b,U){const te=b!=="success";switch(u=u.filter(I=>I!==p),a){case"pending":break;case"failed":if(te||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){d=U,O();return}if(te){d=U,u.length||(r.length?fe():O());return}if(g(),w(),!t.random){const I=t.resources.indexOf(p.resource);I!==-1&&I!==t.index&&(t.index=I)}a="completed",f.forEach(I=>{I(U)})}function fe(){if(a!=="pending")return;g();const p=r.shift();if(p===void 0){if(u.length){h=setTimeout(()=>{g(),a==="pending"&&(w(),O())},t.timeout);return}O();return}const b={status:"pending",resource:p,callback:(U,te)=>{y(b,U,te)}};u.push(b),l++,h=setTimeout(fe,t.rotate),n(p,e,b.callback)}return setTimeout(fe),pe}function Ut(t){const e={...Zn,...t};let n=[];function o(){n=n.filter(c=>c().status==="pending")}function i(c,a,l){const d=Kn(e,c,a,(h,u)=>{o(),l&&l(h,u)});return n.push(d),d}function s(c){return n.find(a=>c(a))||null}return{query:i,find:s,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:o}}function Be(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const he=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],se=[];for(;F.length>0;)F.length===1||Math.random()>.5?se.push(F.shift()):se.push(F.pop());he[""]=Be({resources:["https://api.iconify.design"].concat(se)});function dt(t,e){const n=Be(e);return n===null?!1:(he[t]=n,!0)}function ue(t){return he[t]}function Wn(){return Object.keys(he)}function ht(){}const ve=Object.create(null);function Jn(t){if(!ve[t]){const e=ue(t);if(!e)return;const n=Ut(e),o={config:e,redundancy:n};ve[t]=o}return ve[t]}function Nt(t,e,n){let o,i;if(typeof t=="string"){const s=Ee(t);if(!s)return n(void 0,424),ht;i=s.send;const r=Jn(t);r&&(o=r.redundancy)}else{const s=Be(t);if(s){o=Ut(s);const r=t.resources?t.resources[0]:"",c=Ee(r);c&&(i=c.send)}}return!o||!i?(n(void 0,424),ht):o.query(e,i,n)().abort}const ut="iconify2",J="iconify",Ft=J+"-count",pt=J+"-version",Ht=36e5,Xn=168,Yn=50;function Pe(t,e){try{return t.getItem(e)}catch{}}function Qe(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ft(t,e){try{t.removeItem(e)}catch{}}function Oe(t,e){return Qe(t,Ft,e.toString())}function Ie(t){return parseInt(Pe(t,Ft))||0}const R={local:!0,session:!0},Gt={local:new Set,session:new Set};let qe=!1;function ei(t){qe=t}let ne=typeof window>"u"?{}:window;function Bt(t){const e=t+"Storage";try{if(ne&&ne[e]&&typeof ne[e].length=="number")return ne[e]}catch{}R[t]=!1}function Qt(t,e){const n=Bt(t);if(!n)return;const o=Pe(n,pt);if(o!==ut){if(o){const c=Ie(n);for(let a=0;a<c;a++)ft(n,J+a.toString())}Qe(n,pt,ut),Oe(n,0);return}const i=Math.floor(Date.now()/Ht)-Xn,s=c=>{const a=J+c.toString(),l=Pe(n,a);if(typeof l=="string"){try{const d=JSON.parse(l);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>i&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,c))return!0}catch{}ft(n,a)}};let r=Ie(n);for(let c=r-1;c>=0;c--)s(c)||(c===r-1?(r--,Oe(n,r)):Gt[t].add(c))}function qt(){if(!qe){ei(!0);for(const t in R)Qt(t,e=>{const n=e.data,o=e.provider,i=n.prefix,s=k(o,i);if(!Ge(s,n).length)return!1;const r=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,r):r,!0})}}function ti(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const o in R)Qt(o,i=>{const s=i.data;return i.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function ni(t,e){qe||qt();function n(o){let i;if(!R[o]||!(i=Bt(o)))return;const s=Gt[o];let r;if(s.size)s.delete(r=Array.from(s).shift());else if(r=Ie(i),r>=Yn||!Oe(i,r+1))return;const c={cached:Math.floor(Date.now()/Ht),provider:t.provider,data:e};return Qe(i,J+r.toString(),JSON.stringify(c))}e.lastModified&&!ti(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function mt(){}function ii(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Bn(t)}))}function oi(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:o}=t,i=t.iconsToLoad;delete t.iconsToLoad;let s;if(!i||!(s=Ee(n)))return;s.prepare(n,o,i).forEach(c=>{Nt(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{t.missing.add(l)});else try{const l=Ge(t,a);if(!l.length)return;const d=t.pendingIcons;d&&l.forEach(h=>{d.delete(h)}),ni(t,a)}catch(l){console.error(l)}ii(t)})})}))}const Ve=(t,e)=>{const n=Vn(t,!0,Mt()),o=Gn(n);if(!o.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(o.loaded,o.missing,o.pending,mt)}),()=>{a=!1}}const i=Object.create(null),s=[];let r,c;return o.pending.forEach(a=>{const{provider:l,prefix:d}=a;if(d===c&&l===r)return;r=l,c=d,s.push(k(l,d));const h=i[l]||(i[l]=Object.create(null));h[d]||(h[d]=[])}),o.pending.forEach(a=>{const{provider:l,prefix:d,name:h}=a,u=k(l,d),f=u.pendingIcons||(u.pendingIcons=new Set);f.has(h)||(f.add(h),i[l][d].push(h))}),s.forEach(a=>{const{provider:l,prefix:d}=a;i[l][d].length&&oi(a,i[l][d])}),e?qn(e,o,s):mt},si=t=>new Promise((e,n)=>{const o=typeof t=="string"?ee(t,!0):t;if(!o){n(t);return}Ve([o||t],i=>{if(i.length&&o){const s=W(o);if(s){e({...Y,...s});return}}n(t)})});function ri(t){try{const e=typeof t=="string"?JSON.parse(t):t;if(typeof e.body=="string")return{...e}}catch{}}function ai(t,e){const n=typeof t=="string"?ee(t,!0,!0):null;if(!n){const s=ri(t);return{value:t,data:s}}const o=W(n);if(o!==void 0||!n.prefix)return{value:t,name:n,data:o};const i=Ve([n],()=>e(t,n,W(n)));return{value:t,name:n,loading:i}}function we(t){return t.hasAttribute("inline")}let Vt=!1;try{Vt=navigator.vendor.indexOf("Apple")===0}catch{}function ci(t,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(Vt||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const li=/(-?[0-9.]*[0-9]+[0-9.]*)/g,di=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Le(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const o=t.split(li);if(o===null||!o.length)return t;const i=[];let s=o.shift(),r=di.test(s);for(;;){if(r){const c=parseFloat(s);isNaN(c)?i.push(s):i.push(Math.ceil(c*e*n)/n)}else i.push(s);if(s=o.shift(),s===void 0)return i.join("");r=!r}}function hi(t,e="defs"){let n="";const o=t.indexOf("<"+e);for(;o>=0;){const i=t.indexOf(">",o),s=t.indexOf("</"+e);if(i===-1||s===-1)break;const r=t.indexOf(">",s);if(r===-1)break;n+=t.slice(i+1,s).trim(),t=t.slice(0,o).trim()+t.slice(r+1)}return{defs:n,content:t}}function ui(t,e){return t?"<defs>"+t+"</defs>"+e:e}function pi(t,e,n){const o=hi(t);return ui(o.defs,e+o.content+n)}const fi=t=>t==="unset"||t==="undefined"||t==="none";function Zt(t,e){const n={...Y,...t},o={...Lt,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach(P=>{const _=[],pe=P.hFlip,O=P.vFlip;let w=P.rotate;pe?O?w+=2:(_.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),_.push("scale(-1 1)"),i.top=i.left=0):O&&(_.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),_.push("scale(1 -1)"),i.top=i.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=i.height/2+i.top,_.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:_.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:y=i.width/2+i.left,_.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(i.left!==i.top&&(y=i.left,i.left=i.top,i.top=y),i.width!==i.height&&(y=i.width,i.width=i.height,i.height=y)),_.length&&(s=pi(s,'<g transform="'+_.join(" ")+'">',"</g>"))});const r=o.width,c=o.height,a=i.width,l=i.height;let d,h;r===null?(h=c===null?"1em":c==="auto"?l:c,d=Le(h,a/l)):(d=r==="auto"?a:r,h=c===null?Le(d,l/a):c==="auto"?l:c);const u={},f=(P,_)=>{fi(_)||(u[P]=_.toString())};f("width",d),f("height",h);const g=[i.left,i.top,a,l];return u.viewBox=g.join(" "),{attributes:u,viewBox:g,body:s}}function Ze(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in e)n+=" "+o+'="'+e[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function mi(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function gi(t){return"data:image/svg+xml,"+mi(t)}function Kt(t){return'url("'+gi(t)+'")'}const _i=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let le=_i();function yi(t){le=t}function bi(){return le}function vi(t,e){const n=ue(t);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let i=0;n.resources.forEach(r=>{i=Math.max(i,r.length)});const s=e+".json?icons=";o=n.maxURL-i-n.path.length-s.length}return o}function wi(t){return t===404}const $i=(t,e,n)=>{const o=[],i=vi(t,e),s="icons";let r={type:s,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=i&&l>0&&(o.push(r),r={type:s,provider:t,prefix:e,icons:[]},c=a.length),r.icons.push(a)}),o.push(r),o};function Ai(t){if(typeof t=="string"){const e=ue(t);if(e)return e.path}return"/"}const xi=(t,e,n)=>{if(!le){n("abort",424);return}let o=Ai(e.provider);switch(e.type){case"icons":{const s=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});o+=s+".json?"+a.toString();break}case"custom":{const s=e.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let i=503;le(t+o).then(s=>{const r=s.status;if(r!==200){setTimeout(()=>{n(wi(r)?"abort":"next",r)});return}return i=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",i)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",i)})},Ci={prepare:$i,send:xi};function gt(t,e){switch(t){case"local":case"session":R[t]=e;break;case"all":for(const n in R)R[n]=e;break}}const $e="data-style";let Wt="";function ki(t){Wt=t}function _t(t,e){let n=Array.from(t.childNodes).find(o=>o.hasAttribute&&o.hasAttribute($e));n||(n=document.createElement("style"),n.setAttribute($e,$e),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+Wt}function Jt(){lt("",Ci),Mt(!0);let t;try{t=window}catch{}if(t){if(qt(),t.IconifyPreload!==void 0){const n=t.IconifyPreload,o="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!at(i))&&console.error(o)}catch{console.error(o)}})}if(t.IconifyProviders!==void 0){const n=t.IconifyProviders;if(typeof n=="object"&&n!==null)for(const o in n){const i="IconifyProviders["+o+"] is invalid.";try{const s=n[o];if(typeof s!="object"||!s||s.resources===void 0)continue;dt(o,s)||console.error(i)}catch{console.error(i)}}}}return{enableCache:n=>gt(n,!0),disableCache:n=>gt(n,!1),iconLoaded:ct,iconExists:ct,getIcon:Hn,listIcons:Fn,addIcon:Dt,addCollection:at,calculateSize:Le,buildIcon:Zt,iconToHTML:Ze,svgToURL:Kt,loadIcons:Ve,loadIcon:si,addAPIProvider:dt,appendCustomStyle:ki,_api:{getAPIConfig:ue,setAPIModule:lt,sendAPIQuery:Nt,setFetch:yi,getFetch:bi,listAPIProviders:Wn}}}const je={"background-color":"currentColor"},Xt={"background-color":"transparent"},yt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},bt={"-webkit-mask":je,mask:je,background:Xt};for(const t in bt){const e=bt[t];for(const n in yt)e[t+"-"+n]=yt[n]}function vt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Si(t,e,n){const o=document.createElement("span");let i=t.body;i.indexOf("<a")!==-1&&(i+="<!-- "+Date.now()+" -->");const s=t.attributes,r=Ze(i,{...s,width:e.width+"",height:e.height+""}),c=Kt(r),a=o.style,l={"--svg":c,width:vt(s.width),height:vt(s.height),...n?je:Xt};for(const d in l)a.setProperty(d,l[d]);return o}let Q;function Ei(){try{Q=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{Q=null}}function Pi(t){return Q===void 0&&Ei(),Q?Q.createHTML(t):t}function Oi(t){const e=document.createElement("span"),n=t.attributes;let o="";n.width||(o="width: inherit;"),n.height||(o+="height: inherit;"),o&&(n.style=o);const i=Ze(t.body,n);return e.innerHTML=Pi(i),e.firstChild}function Re(t){return Array.from(t.childNodes).find(e=>{const n=e.tagName&&e.tagName.toUpperCase();return n==="SPAN"||n==="SVG"})}function wt(t,e){const n=e.icon.data,o=e.customisations,i=Zt(n,o);o.preserveAspectRatio&&(i.attributes.preserveAspectRatio=o.preserveAspectRatio);const s=e.renderedMode;let r;switch(s){case"svg":r=Oi(i);break;default:r=Si(i,{...Y,...n},s==="mask")}const c=Re(t);c?r.tagName==="SPAN"&&c.tagName===r.tagName?c.setAttribute("style",r.getAttribute("style")):t.replaceChild(r,c):t.appendChild(r)}function $t(t,e,n){const o=n&&(n.rendered?n:n.lastRender);return{rendered:!1,inline:e,icon:t,lastRender:o}}function Ii(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch{return}if(!e||!n)return;const o=e.get(t);if(o)return o;const i=["icon","mode","inline","observe","width","height","rotate","flip"],s=class extends n{constructor(){super();A(this,"_shadowRoot");A(this,"_initialised",!1);A(this,"_state");A(this,"_checkQueued",!1);A(this,"_connected",!1);A(this,"_observer",null);A(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=we(this);_t(a,l),this._state=$t({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=we(this),d=this._state;l!==d.inline&&(d.inline=l,_t(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return we(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}wt(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const d=this.getAttribute("mode"),h=st(this);(a.attrMode!==d||Rn(a.customisations,h)||!Re(this._shadowRoot))&&this._renderIcon(a.icon,h,d)}_iconChanged(a){const l=ai(a,(d,h,u)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==d)return;const g={value:d,name:h,data:u};g.data?this._gotIconData(g):f.icon=g});l.data?this._gotIconData(l):this._state=$t(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=Re(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,st(this),this.getAttribute("mode"))}_renderIcon(a,l,d){const h=ci(a.data.body,d),u=this._state.inline;wt(this._shadowRoot,this._state={rendered:!0,icon:a,inline:u,customisations:l,attrMode:d,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(d=>d.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};i.forEach(c=>{c in s.prototype||Object.defineProperty(s.prototype,c,{get:function(){return this.getAttribute(c)},set:function(a){a!==null?this.setAttribute(c,a):this.removeAttribute(c)}})});const r=Jt();for(const c in r)s[c]=s.prototype[c]=r[c];return e.define(t,s),s}Ii()||Jt();var Li=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Ri=(t,e,n,o)=>{for(var i=o>1?void 0:o?ji(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&Li(e,n,i),i};let Te=class extends v{render(){return $`
      <slot name="header"></slot>

      <section class="lineup__listed">
        ${Pn.map(t=>{var e;return $`
          <article class="lineup__listed-speaker">
            <img .src=${t==null?void 0:t.pictureURL}
              class="lineup__listed-speaker_picture"
              crossorigin="anonymous"
            />

            <ul class="lineup__listed-speaker_socials">
              ${(e=t==null?void 0:t.socials)==null?void 0:e.map(([n,o])=>$`
                <li>
                  <a .href=${o||"#"}
                    target="_blank"
                  >
                    <iconify-icon icon="simple-icons:${n}"></iconify-icon>
                  </a>
                </li>
              `)}
            </ul>

            <h1>${t.name}</h1>
            <p>${t==null?void 0:t.organization}</p>
            <p>${t==null?void 0:t.role}</p>
          </article>
        `})}
      </section>
    `}};Te.styles=S`
    ::slotted(.lineup__header) {
      font-family: 'Roboto Mono';
      font-size: 44pt;
      font-weight: lighter;
      text-align: center;
    }

    .lineup__listed {
      display: flex;

      flex-wrap: wrap;
      padding-bottom: 2rem;
      justify-content: center;
      margin-top: 2rem;
      /* margin-top: -1.5rem; */
    }

    .lineup__listed-speaker {
      margin-bottom: 1.5rem;
      display: flex;
      flex: 1;
      min-width: 10rem;
      flex-basis: 20%;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      text-align: center;

      > * {
        margin: .5rem;
      }
    }

    .lineup__listed-speaker_picture {
      border-radius: 10rem;
      background-color: lightgray;
      object-fit: cover;
      width: 5rem;
      height: 5rem;
    }

    .lineup__listed-speaker_socials {
      display: flex;
      justify-content: center;
      gap: .5ch;
      padding: 0;

      font-size: 16pt;
      list-style-type: none;

      > li a {
        color: unset;
      }
    }
  `;Te=Ri([E("devfest-lineup")],Te);var Ti=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Di=(t,e,n,o)=>{for(var i=o>1?void 0:o?Mi(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&Ti(e,n,i),i};let Me=class extends v{render(){return $`
      <slot name="header"></slot>
    `}};Me.styles=S`
    :host {
      /* display: block; */
      display: none;
      background-color: #F6F6F6;
      /* padding: 10rem 0; */
    }

    ::slotted(.sponsors__header) {
      padding: 8rem 0;
      font-family: "Roboto Mono";
      font-size: 20pt;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
    }
  `;Me=Di([E("devfest-sponsors")],Me);var zi=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,Ni=(t,e,n,o)=>{for(var i=o>1?void 0:o?Ui(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&zi(e,n,i),i};let De=class extends v{render(){return $`
      <slot name="header"></slot>

      <article class="day-i__ticket">
        <div class="day-i__ticket-container">
          <div class="day-i__ticket-container_info">
            <h2>Tec. de Monterrey</h2>
            <p>Campus Querétaro</p>
            <a href="https://maps.app.goo.gl/NDAECWUNNPL76zW47"
              target="_blank"
            >Ubicación
            </a>
          </div>

          <a class="day-i__ticket-button"
            href="https://eventos.tec.mx/s/lt-event?language=es_MX&id=a5uUG0000007FwnYAE#/Comprar-boleto"
            target="_blank"
          >
            <iconify-icon icon="mdi:ticket"></iconify-icon>
            Regístrate
          </a>
        </div>
      </article>

      <div class="lineup">
        <div class="lineup-startups">
          <span class="lineup-header">Edificio 6</span>
          <span>Acceso (10:00 AM)</span>
          <span class="yellow">Taller de Liderazgo x Google</span>
          <span class="yellow">Sesión sobre reclutamiento</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="lineup-talks">
          <span class="lineup-header">Auditorio</span>
          <span></span>
          <span></span>
          <span></span>
          <span>Kotlin Multi Platform</span>
          <span>Gemma</span>
          <span>Gemini Workshop</span>
          <span class="pink">Pizza break</span>
          <span>Training de entrevistas</span>
          <span>Diseño Web</span>
          <span>RAG en BigQuery</span>
          <span>Automatización en Python</span>
          <span>Google Cloud</span>
        </div>
      </div>
    `}};De.styles=S`
    :host {
      background-color: #D6FAFF;
      display: block;
      padding: 5rem 0;
    }

    ::slotted(.saturday__header) {
      text-align: center;
      font-size: 52pt;
      /* font-weight: 700; */
      font-weight: 800;
      color: #57CAFF;
      paint-order: stroke fill;
      -webkit-text-stroke: 4px black;
    }

    .day-i__ticket {
      margin-top: 3rem;
      background-color: #57CAFF;
    }

    .day-i__ticket-container {
      margin: auto;
      max-width: 40rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 1rem;

      & * {
        margin: 0;
      }
    }

    .day-i__ticket-container_info {
      display: flex;
      flex-direction: column;
      gap: 1ch;

      > a {
        color: unset;
      }
    }

    .day-i__ticket-button {
      padding: 1rem 1.5rem;
      display: flex;
      gap: .5ch;

      text-decoration: none;
      font-size: 18pt;
      color: unset;

      background-color: white;
      border: 2px solid black;
      border-radius: 10rem;
    }

    
    .lineup {
 
      margin: auto;
      padding: 4rem .5ch 1rem;
      max-width: 40rem;
      display: flex;
      align-self: center;
      gap: .5ch;
      overflow: scroll;

      > div {
        padding: .5ch;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-basis: 0;
        gap: .5ch;
        background-color: white;
        border: solid black 2px;
        border-radius: 1rem;
      }

      > div span.lineup-header {
        background-color: black !important;
        color: white;
        justify-content: center;
        height: 1rem;
      }

      > div span.yellow {
        background-color: #FFD427 !important;
      }

      > div span.pink {
        background-color: #FF7DAF !important;
      }

      > div span {
        padding: 1ch;
        height: 4ch;
        display: flex;
        align-items: center;
        font-family: "Roboto Mono";
        font-weight: bold;
        background-color: white;
        border-radius: 1ch;
      }
    }

    .lineup-workshops :not(span:empty) {
      background-color: #FFD427 !important;
    }

    .lineup-talks :not(span:empty) {
      background-color: #57CAFF !important;
    }

    .lineup-startups :not(span:empty) {
      background-color: #FF7DAF !important;
    }
  `;De=Ni([E("devfest-day-i")],De);var Fi=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Gi=(t,e,n,o)=>{for(var i=o>1?void 0:o?Hi(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&Fi(e,n,i),i};let ze=class extends v{render(){return $`
      <slot name="header"></slot>

      <article class="day-i__ticket">
        <div class="day-i__ticket-container">
          <div class="day-i__ticket-container_info">
            <h2>CQI Centro Histórico</h2>
            <p>Centro Queretano de la Imagen</p>
            <a href="https://maps.app.goo.gl/JPnohqkdWS8Yu9vTA"
              target="_blank"
            >Ubicación
            </a>
          </div>

          <a class="day-i__ticket-button"
            href="https://gdg.community.dev/events/details/google-gdg-queretaro-presents-devfest-2024-qro-mexico/"
            target="_blank"
          >
            <iconify-icon icon="mdi:ticket"></iconify-icon>
            Regístrate
          </a>
        </div>
      </article>

      <table>
        <caption class="day-i__schedule-header"
          >PROGRAMA
        </caption>

        <tbody class="day-i__schedule-activities">
          <tr>
            <th>4:30 pm</th>
            <th>Acceso</th>
          </tr>
          <tr>
            <th>5:00 pm</th>
            <th>Open-mic</th>
          </tr>
          <tr>
            <th>6:00 pm</th>
            <th>Networking</th>
          </tr>
        </tbody>
      </table>
    `}};ze.styles=S`
    :host {
      background-color: #C2FFB8;
      display: block;
      padding: 5rem 0;
      /* border-radius: 2rem 2rem 0 0; */
      /* margin-top: -1rem; */
    }

    ::slotted(.sunday__header) {
      text-align: center;
      font-size: 50pt;
      color: #34A853;
      paint-order: stroke fill;
      -webkit-text-stroke: 4px black;
    }

    .day-i__ticket {
      margin-top: 3rem;
      background-color: #5CDB6D;
    }

    .day-i__ticket-container {
      margin: auto;
      max-width: 40rem;
      display: flex;
      align-items: center;
      gap: 1ch;
      justify-content: space-between;
      padding: 2rem 1rem;

      & * {
        margin: 0;
      }
    }

    .day-i__ticket-container_info {
      display: flex;
      flex-direction: column;
      gap: 1ch;

      > a {
        color: unset;
      }
    }

    .day-i__ticket-button {
      padding: 1rem 1.5rem;
      display: flex;
      gap: .5ch;

      text-decoration: none;
      font-size: 18pt;
      color: unset;

      background-color: white;
      border: 2px solid black;
      border-radius: 10rem;
    }

    table {
      margin: auto;
      margin-top: 5rem;
      padding-top: .6rem;
      width: 90%;
      max-width: 35rem;
      background-color: white;
      border: solid black 2px;
      border-radius: 1rem;
      font-size: 16pt;

      .day-i__schedule-header {
        margin-bottom: -1rem;
        padding: 1ch 0;
        border-radius: 1rem 1rem 0 0;
        background-color: black;
        color: white;
        font-family: "Roboto Mono";
        font-weight: bold;
        font-size: 16pt;
      }
  
      .day-i__schedule-activities {
        > tr th {
          border-top: solid black 2px;
          padding: 2rem 1rem;
        }

        > tr :nth-child(2) {
          font-family: "Roboto Mono";
          text-align: left;
          font-weight: 300;
        }
      }
    }

  `;ze=Gi([E("devfest-day-ii")],ze);const Bi=[{name:"Ramsés Magaña",title:"GDG Co-organizer",organization:"Google Dev. Groups",main_contact:"https://www.linkedin.com/in/ramses-mr/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ramses_maga%C3%B1a.jpeg"},{name:"Karina Maldonado",title:"Presidenta de Vortex Robotics",organization:"Sociedad de Alumnos TEC",main_contact:"https://www.instagram.com/vortex.itsmq/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Kari_1IdI9ZT.jpg"},{name:"Yoshihiro Ortiz",title:"GDG Chapter Lead",organization:"Google Dev. Groups",main_contact:"https://www.linkedin.com/in/yoshihiro-o/",photoURL:"https://media.licdn.com/dms/image/v2/D5603AQEde8FMpk4NvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687964573348?e=1736380800&v=beta&t=zCGDr0ZAbWze8D5DhUOpih5MHOn3QkafgIvFs59GCDM"},{name:"Brisa Reyes",title:"Sociedad de Alumnos",organization:"Tec. de Monterrey",main_contact:"https://www.instagram.com/vortex.itsmq/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/Screenshot%25202024-10-19%2520at%25207.28.53%25E2%2580%25AFPM_Zf5HAbp.png"},{name:"Berenice Rivera",title:"GDG Volunteer",organization:"Google Dev. Groups",main_contact:"https://www.linkedin.com/in/ux-berenice-rivera/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/berenice_rivera.jpg"},{name:"Diego Quezada",title:"Sociedad de Alumnos",organization:"Tec. de Monterrey",main_contact:"https://www.instagram.com/vortex.itsmq/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/Foto%2520Diego%2520Quezada_wnXNuUi.jpg"}];var Qi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,Vi=(t,e,n,o)=>{for(var i=o>1?void 0:o?qi(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&Qi(e,n,i),i};let Ue=class extends v{render(){return $`
      <h1 class="hosts__header"
        >Organizadores
      </h1>

      <div class="hosts__layout">
        <div class="hosts__year">
          <span>2</span>
          <span>0</span>
          <span>2</span>
          <span>4</span>
        </div>

        <section class="hosts__profiles">
          ${Bi.map(t=>$`
            <a class="hosts__profiles_host"
              href=${t.main_contact}
              target="_blank"
            >
                <img src=${t.photoURL} loading="lazy" object-fit="cover"/>
                <h1>${t.name}</h1>
                <p>${t.organization}</p>
                <p>${t.title}</p>
            </a>
          `)}
        </section>
      </div>
    `}};Ue.styles=S`
    :host {
      max-width: 40rem;
      display: block;
      margin: auto !important;
      padding: 0 1ch 4rem;
    }

    .hosts__header {
      display: block;
      margin: 7rem 0 4rem;
      text-align: center;
      font-size: 32pt;
    }

    .hosts__layout {
      display: flex;
      justify-content: space-evenly;
    }
    
    .hosts__year {
      display: flex;
      position: sticky;
      top: 10px;
      flex-direction: column;
      width: 20%;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 10%; */
        aspect-ratio: 1/1;
        border-radius: 100%;
        border: solid black 4px;
        margin-bottom: -4px;
        font-size: clamp(36pt, calc(2rem + 5.0vw), 60pt);
        font-weight: bold;

        &:nth-child(odd) {
          background-color: #4285F4;
        }
      }
    }

    .hosts__profiles {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 1ch;
      font-size: 10pt;
      width: 50%;
      min-width: 14rem;
    }

    a, a:visited {
      text-decoration: none;
      color: unset;
    }

    .hosts__profiles_host {
      display: flex;
      flex-direction: column;
      width: 47%;
      margin:0; 
      margin-bottom: 3ch;
      padding:0;

      img {
        border-radius: 1.5rem;
      }

      h1 { 
        margin: 1ch 0 0 0;
        font-size: 14pt;
        min-height: 2.0ch;
      }

      p {
        font-size: 10pt;
        margin: 1.0ch 0 0 0;
        min-height: 2ch;
        opacity: 60%;
      }
    }
  `;Ue=Vi([E("devfest-hosts")],Ue);const Zi="data:image/svg+xml,%3csvg%20width='70'%20height='34'%20viewBox='0%200%2070%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M49.7854%2018.8598L60.8435%2025.2474L47.4473%2032.9817C44.8021%2034.5089%2041.4198%2033.6026%2039.8926%2030.9575C38.3654%2028.3123%2039.2717%2024.9299%2041.9169%2023.4028L49.7854%2018.8598ZM47.4473%200.847328L66.9809%2012.125C69.626%2013.6522%2070.5323%2017.0346%2069.0051%2019.6797C67.4779%2022.3249%2064.0956%2023.2312%2061.4504%2021.704L41.9169%2010.4263C39.2717%208.89911%2038.3654%205.51676%2039.8926%202.8716C41.4198%200.226443%2044.8021%20-0.679855%2047.4473%200.847328ZM9.27653%2012.125L28.8101%2023.4028C31.4553%2024.9299%2032.3616%2028.3123%2030.8344%2030.9575C29.3072%2033.6026%2025.9249%2034.5089%2023.2797%2032.9817L3.74611%2021.704C1.10095%2020.1768%200.194656%2016.7945%201.72184%2014.1493C3.24902%2011.5042%206.63137%2010.5979%209.27653%2012.125ZM30.8344%202.8716C32.3616%205.51676%2031.4553%208.89911%2028.8101%2010.4263L20.664%2015.1294L9.63757%208.72361L23.2797%200.847328C25.9249%20-0.679855%2029.3072%200.226443%2030.8344%202.8716Z'%20fill='black'/%3e%3c/svg%3e";var Ki=Object.defineProperty,Wi=Object.getOwnPropertyDescriptor,Ji=(t,e,n,o)=>{for(var i=o>1?void 0:o?Wi(e,n):e,s=t.length-1,r;s>=0;s--)(r=t[s])&&(i=(o?r(e,n,i):r(i))||i);return o&&i&&Ki(e,n,i),i};let Ne=class extends v{render(){return $`
      <footer>
        <div>
          <h1>Google Developer Groups</h1>
          <p>
            <a href="https://linkedin.com/company/dev-queretaro"
              target="_blank"
              >#DevQuerėtaro
            </a>
          </p>
        </div>
        <img src=${Zi} />
      </footer>
    `}};Ne.styles=S`
    :host {
      display: block;
      background-color: ghostwhite;
    }
    
    footer {
      margin: auto;
      max-width: 40rem;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
      padding: 3rem 1rem;
      color: black;
      opacity: 20%;
      
    }

    * { margin: 0; padding: 0;}

    h1 {
      font-size: 13pt;
      /* opacity: 50%; */
    }

    p a {
      display: block;
      margin-top: .5ch;
      color: inherit;
      /* opacity: 60%; */
      font-size: 18pt;
      font-weight: 100;
      text-decoration: none;
    }

    img {
      opacity: 80%;
      margin-bottom: .2rem;
    }
  `;Ne=Ji([E("devfest-footer")],Ne);
