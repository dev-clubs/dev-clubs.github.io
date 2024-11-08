var Xt=Object.defineProperty;var Yt=(t,e,n)=>e in t?Xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var A=(t,e,n)=>(Yt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=globalThis,Fe=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),We=new WeakMap;let At=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Fe&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=We.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&We.set(n,e))}return e}toString(){return this.cssText}};const en=t=>new At(typeof t=="string"?t:t+"",void 0,He),M=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new At(n,t,He)},tn=(t,e)=>{if(Fe)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),s=se.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,t.appendChild(i)}},Je=Fe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return en(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:nn,defineProperty:sn,getOwnPropertyDescriptor:rn,getOwnPropertyNames:on,getOwnPropertySymbols:cn,getPrototypeOf:an}=Object,C=globalThis,Ze=C.trustedTypes,ln=Ze?Ze.emptyScript:"",ge=C.reactiveElementPolyfillSupport,z=(t,e)=>t,Ae={toAttribute(t,e){switch(e){case Boolean:t=t?ln:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},xt=(t,e)=>!nn(t,e),Ke={attribute:!0,type:String,converter:Ae,reflect:!1,hasChanged:xt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class L extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Ke){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,n);s!==void 0&&sn(this.prototype,e,s)}}static getPropertyDescriptor(e,n,i){const{get:s,set:r}=rn(this.prototype,e)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ke}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=an(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const n=this.properties,i=[...on(n),...cn(n)];for(const s of i)this.createProperty(s,n[s])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,s]of n)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const s=this._$Eu(n,i);s!==void 0&&this._$Eh.set(s,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)n.unshift(Je(s))}else e!==void 0&&n.push(Je(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return tn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EC(e,n){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ae).toAttribute(n,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,n){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Ae;this._$Em=s,this[s]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??xt)(this[e],n))return;this.P(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,i){this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(n)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[z("elementProperties")]=new Map,L[z("finalized")]=new Map,ge==null||ge({ReactiveElement:L}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,oe=B.trustedTypes,Xe=oe?oe.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ct="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,St="?"+x,dn=`<${St}>`,j=document,V=()=>j.createComment(""),q=t=>t===null||typeof t!="object"&&typeof t!="function",Et=Array.isArray,un=t=>Et(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",me=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ye=/-->/g,et=/>/g,I=RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,nt=/"/g,kt=/^(?:script|style|textarea|title)$/i,hn=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=hn(1),N=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),st=new WeakMap,O=j.createTreeWalker(j,129);function Pt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}const fn=(t,e)=>{const n=t.length-1,i=[];let s,r=e===2?"<svg>":"",o=F;for(let a=0;a<n;a++){const c=t[a];let l,d,u=-1,h=0;for(;h<c.length&&(o.lastIndex=h,d=o.exec(c),d!==null);)h=o.lastIndex,o===F?d[1]==="!--"?o=Ye:d[1]!==void 0?o=et:d[2]!==void 0?(kt.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=I):d[3]!==void 0&&(o=I):o===I?d[0]===">"?(o=s??F,u=-1):d[1]===void 0?u=-2:(u=o.lastIndex-d[2].length,l=d[1],o=d[3]===void 0?I:d[3]==='"'?nt:tt):o===nt||o===tt?o=I:o===Ye||o===et?o=F:(o=I,s=void 0);const p=o===I&&t[a+1].startsWith("/>")?" ":"";r+=o===F?c+dn:u>=0?(i.push(l),c.slice(0,u)+Ct+c.slice(u)+x+p):c+x+(u===-2?a:p)}return[Pt(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class W{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,c=this.parts,[l,d]=fn(e,n);if(this.el=W.createElement(l,i),O.currentNode=this.el.content,n===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=O.nextNode())!==null&&c.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Ct)){const h=d[o++],p=s.getAttribute(u).split(x),m=/([.?@])?(.*)/.exec(h);c.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?gn:m[1]==="?"?mn:m[1]==="@"?_n:de}),s.removeAttribute(u)}else u.startsWith(x)&&(c.push({type:6,index:r}),s.removeAttribute(u));if(kt.test(s.tagName)){const u=s.textContent.split(x),h=u.length-1;if(h>0){s.textContent=oe?oe.emptyScript:"";for(let p=0;p<h;p++)s.append(u[p],V()),O.nextNode(),c.push({type:2,index:++r});s.append(u[h],V())}}}else if(s.nodeType===8)if(s.data===St)c.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(x,u+1))!==-1;)c.push({type:7,index:r}),u+=x.length-1}r++}}static createElement(e,n){const i=j.createElement("template");return i.innerHTML=e,i}}function D(t,e,n=t,i){var o,a;if(e===N)return e;let s=i!==void 0?(o=n._$Co)==null?void 0:o[i]:n._$Cl;const r=q(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=s:n._$Cl=s),s!==void 0&&(e=D(t,s._$AS(t,e.values),s,i)),e}class pn{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??j).importNode(n,!0);O.currentNode=s;let r=O.nextNode(),o=0,a=0,c=i[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new X(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new yn(r,this,e)),this._$AV.push(l),c=i[++a]}o!==(c==null?void 0:c.index)&&(r=O.nextNode(),o++)}return O.currentNode=j,s}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class X{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,s){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=D(this,e,n),q(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==N&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):un(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==g&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(j.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=W.createElement(Pt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(n);else{const o=new pn(s,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(e){let n=st.get(e.strings);return n===void 0&&st.set(e.strings,n=new W(e)),n}k(e){Et(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const r of e)s===n.length?n.push(i=new X(this.S(V()),this.S(V()),this,this.options)):i=n[s],i._$AI(r),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,s,r){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(e,n=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=D(this,e,n,0),o=!q(e)||e!==this._$AH&&e!==N,o&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=D(this,a[i+c],n,c),l===N&&(l=this._$AH[c]),o||(o=!q(l)||l!==this._$AH[c]),l===g?e=g:e!==g&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}o&&!s&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gn extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class mn extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class _n extends de{constructor(e,n,i,s,r){super(e,n,i,s,r),this.type=5}_$AI(e,n=this){if((e=D(this,e,n,0)??g)===N)return;const i=this._$AH,s=e===g&&i!==g||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==g&&(i===g||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class yn{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const _e=B.litHtmlPolyfillSupport;_e==null||_e(W,X),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.1.2");const bn=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=s=new X(e.insertBefore(V(),r),r,void 0,n??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bn(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return N}}var $t;w._$litElement$=!0,w.finalized=!0,($t=globalThis.litElementHydrateSupport)==null||$t.call(globalThis,{LitElement:w});const ye=globalThis.litElementPolyfillSupport;ye==null||ye({LitElement:w});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var vn=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,$n=(t,e,n,i)=>{for(var s=i>1?void 0:i?wn(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&vn(e,n,s),s};let xe=class extends w{render(){return $`
      <nav>
        <h1>
          <a class="navbar__brand"
            href="/"
            >GDG Querétaro
          </a>
        </h1>
      </nav>
    `}};xe.styles=M`
    nav {
      padding: 0 1rem;
      border-bottom: 2px solid black;
    }

    .navbar__brand, &:visited {
      font-size: 16pt;
      text-decoration: none;
      color: black;
    }
  `;xe=$n([R("devfest-navbar")],xe);const An="data:image/svg+xml,%3csvg%20width='63'%20height='37'%20viewBox='0%200%2063%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.9372%203.76231L5.88069%2013.1443C3.13946%2015.1141%202.51406%2018.9331%204.48384%2021.6744C6.45361%2024.4156%2010.2727%2025.041%2013.0139%2023.0712L26.0703%2013.6892C28.8116%2011.7194%2029.437%207.90039%2027.4672%205.15916C25.4974%202.41792%2021.6784%201.79254%2018.9372%203.76231Z'%20fill='%23EA4335'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.9897%2013.1192C10.2485%2011.1494%206.42945%2011.7748%204.45967%2014.516C2.48989%2017.2573%203.11528%2021.0763%205.85651%2023.0461L18.913%2032.4281C21.6542%2034.3979%2025.4733%2033.7725%2027.443%2031.0313C29.4128%2028.29%2028.7874%2024.471%2026.0462%2022.5012L12.9897%2013.1192Z'%20fill='%234285F4'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M50.4865%2013.1481L37.43%2022.5301C34.6888%2024.4999%2034.0634%2028.3189%2036.0332%2031.0601C38.0029%2033.8014%2041.822%2034.4267%2044.5632%2032.457L57.6197%2023.075C60.3609%2021.1052%2060.9863%2017.2861%2059.0165%2014.5449C57.0467%2011.8037%2053.2277%2011.1783%2050.4865%2013.1481Z'%20fill='%23F9AB00'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M44.5354%203.73443C41.7941%201.76466%2037.9751%202.39003%2036.0053%205.13127C34.0355%207.87251%2034.6609%2011.6915%2037.4022%2013.6613L50.4586%2023.0433C53.1999%2025.0131%2057.0189%2024.3877%2058.9887%2021.6465C60.9585%2018.9053%2060.3331%2015.0862%2057.5918%2013.1165L44.5354%203.73443Z'%20fill='%2334A853'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e",xn="data:image/svg+xml,%3csvg%20width='30'%20height='29'%20viewBox='0%200%2030%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.8216%2013.6765L16.778%201.64016C16.5885%201.45067%2016.2787%201.45067%2016.0892%201.64016L11.259%206.47036C11.0695%206.65985%2011.0695%206.96959%2011.259%207.15908L14.7355%2010.6355H1.50391V18.4411H14.7373L11.1953%2021.9831C11.0058%2022.1726%2011.0058%2022.4823%2011.1953%2022.6718L16.0255%2027.502C16.215%2027.6915%2016.5247%2027.6915%2016.7142%2027.502L28.8179%2015.4001C28.878%2015.34%2028.9309%2015.2744%2028.9764%2015.2052C29.2898%2014.7314%2029.2388%2014.0883%2028.8216%2013.6728V13.6765Z'%20fill='%23CCF6C5'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";var Cn=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,En=(t,e,n,i)=>{for(var s=i>1?void 0:i?Sn(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Cn(e,n,s),s};let Ce=class extends w{render(){return $`
      <!-- <span class="hero__ascii-separator_top">1010101010101010101010</span> -->

      <div class="hero__cover">
        <span class="hero__separator">10101010101010101010</span>

        <main class="hero__lookup">
          <span class="hero__line-a">
            <slot name="event"></slot>
            <img src=${An} />
          </span>

          <span class="hero__line-b">
            <slot name="date"></slot>
            <img src=${xn} />
            <slot name="location"></slot>
          </span>

          <slot name="call-to-action"></slot>
        </main>

        <span class="hero__separator">10101010101010101010</span>
      </div>

      <!-- <span class="hero__ascii-separator">1010101010101010101010</span> -->
    `}};Ce.styles=M`
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
        /* justify-content: space-between; */
        gap: 1rem;
  
        > ::slotted(.hero__event) {
          font-size: 42pt;
        }

        > img {
          transform: scale(1.2);
        }
      }
  
      > .hero__line-b {
        /* margin-top: -1rem; */
        display: flex;
        align-items: center;
        justify-content: space-between;
  
        > ::slotted(.hero__date), ::slotted(.hero__location) {
          font-size: 12pt;
        }
      }
    }


    ::slotted(.hero__call-to-action) {
      margin-top: 1rem !important;
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
      border: black solid 2px;
    }
  `;Ce=En([R("devfest-hero")],Ce);const kn=[{name:"Dinorah Tovar",organization:"Google Dev. Expert",role:"Android Engineer",pictureURL:"https://pbs.twimg.com/media/FJLjiQZVQAEL-Uv?format=jpg&name=4096x4096",socials:[["linkedin","https://www.linkedin.com/in/dinorah-tovar/"],["web","https://www.linkedin.com/in/dinorah-tovar/"]]},{name:"Javier Ruiz",organization:"Google Cloud",role:"Project Manager",pictureURL:"https://media.licdn.com/dms/image/v2/D4E03AQHPGFUI65Bo5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706023604729?e=1735776000&v=beta&t=TqMhph8N9qTuhnX4xd5vM4iX-vFJxvnbz7I-_ASAXN4",socials:[["linkedin","https://www.linkedin.com/in/javaruiz/"]]},{name:"Aarón Guerrero",organization:"Google Dev. Expert",role:"Cloud Architect",pictureURL:"https://pbs.twimg.com/profile_images/1684806244819697665/fsN0OTkj_400x400.jpg",socials:[["linkedin","https://www.linkedin.com/in/aaronthewarrior/"]]},{name:"Rene Figueroa",organization:"Wizeline",role:"Technology Director",pictureURL:"https://media.licdn.com/dms/image/v2/C4E03AQHjamjc_JeRXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1533476669328?e=1735776000&v=beta&t=fJuBzqmch0DirHHmx9oTGWX-Azm6QZGipgtViKXg0BQ",socials:[["linkedin","https://www.linkedin.com/in/renecloud/"]]},{name:"Esteban Quintana",organization:"Pinterest",role:"Software Engineer",pictureURL:"https://media.licdn.com/dms/image/v2/C4E03AQEZ7FbSnZwHBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1630722250582?e=1736380800&v=beta&t=KaHmutJRuLpVVM59FjK519uz-ZZqd6_Ef0blgwYIL2Y",socials:[["linkedin","https://www.linkedin.com/in/esteban-quintana-cueto/"]]}];/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const It=Object.freeze({left:0,top:0,width:16,height:16}),ce=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...It,...ce}),Se=Object.freeze({...Y,body:"",hidden:!1}),Pn=Object.freeze({width:null,height:null}),Ot=Object.freeze({...Pn,...ce});function In(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(t);return isNaN(s)?0:i(s)}else if(n!==t){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(t.slice(0,t.length-n.length));return isNaN(r)?0:(r=r/s,r%1===0?i(r):0)}}return e}const On=/[\s,]+/;function Tn(t,e){e.split(On).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const Tt={...Ot,preserveAspectRatio:""};function it(t){const e={...Tt},n=(i,s)=>t.getAttribute(i)||s;return e.width=n("width",null),e.height=n("height",null),e.rotate=In(n("rotate","")),Tn(e,n("flip","")),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}function jn(t,e){for(const n in Tt)if(t[n]!==e[n])return!0;return!1}const Q=/^[a-z0-9]+(-[a-z0-9]+)*$/,ee=(t,e,n,i="")=>{const s=t.split(":");if(t.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;i=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const a=s.pop(),c=s.pop(),l={provider:s.length>0?s[0]:i,prefix:c,name:a};return e&&!ie(l)?null:l}const r=s[0],o=r.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!ie(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:r};return e&&!ie(a,n)?null:a}return null},ie=(t,e)=>t?!!((t.provider===""||t.provider.match(Q))&&(e&&t.prefix===""||t.prefix.match(Q))&&t.name.match(Q)):!1;function Mn(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function rt(t,e){const n=Mn(t,e);for(const i in Se)i in ce?i in t&&!(i in n)&&(n[i]=ce[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function Rn(t,e){const n=t.icons,i=t.aliases||Object.create(null),s=Object.create(null);function r(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const a=i[o]&&i[o].parent,c=a&&r(a);c&&(s[o]=[a].concat(c))}return s[o]}return(e||Object.keys(n).concat(Object.keys(i))).forEach(r),s}function Ln(t,e,n){const i=t.icons,s=t.aliases||Object.create(null);let r={};function o(a){r=rt(i[a]||s[a],r)}return o(e),n.forEach(o),rt(t,r)}function jt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(s=>{e(s,null),n.push(s)});const i=Rn(t);for(const s in i){const r=i[s];r&&(e(s,Ln(t,s,r)),n.push(s))}return n}const Nn={provider:"",aliases:{},not_found:{},...It};function be(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Mt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!be(t,Nn))return null;const n=e.icons;for(const s in n){const r=n[s];if(!s.match(Q)||typeof r.body!="string"||!be(r,Se))return null}const i=e.aliases||Object.create(null);for(const s in i){const r=i[s],o=r.parent;if(!s.match(Q)||typeof o!="string"||!n[o]&&!i[o]||!be(r,Se))return null}return e}const ae=Object.create(null);function Dn(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function S(t,e){const n=ae[t]||(ae[t]=Object.create(null));return n[e]||(n[e]=Dn(t,e))}function ze(t,e){return Mt(e)?jt(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function Un(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function Fn(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(ae)).forEach(s=>{(typeof s=="string"&&typeof e=="string"?[e]:Object.keys(ae[s]||{})).forEach(o=>{const a=S(s,o);n=n.concat(Object.keys(a.icons).map(c=>(s!==""?"@"+s+":":"")+o+":"+c))})}),n}let J=!1;function Rt(t){return typeof t=="boolean"&&(J=t),J}function Z(t){const e=typeof t=="string"?ee(t,!0,J):t;if(e){const n=S(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Lt(t,e){const n=ee(t,!0,J);if(!n)return!1;const i=S(n.provider,n.prefix);return Un(i,n.name,e)}function ot(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),J&&!e&&!t.prefix){let s=!1;return Mt(t)&&(t.prefix="",jt(t,(r,o)=>{o&&Lt(r,o)&&(s=!0)})),s}const n=t.prefix;if(!ie({provider:e,prefix:n,name:"a"}))return!1;const i=S(e,n);return!!ze(i,t)}function ct(t){return!!Z(t)}function Hn(t){const e=Z(t);return e?{...Y,...e}:null}function zn(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return t.forEach(s=>{if(i.name===s.name&&i.prefix===s.prefix&&i.provider===s.provider)return;i=s;const r=s.provider,o=s.prefix,a=s.name,c=n[r]||(n[r]=Object.create(null)),l=c[o]||(c[o]=S(r,o));let d;a in l.icons?d=e.loaded:o===""||l.missing.has(a)?d=e.missing:d=e.pending;const u={provider:r,prefix:o,name:a};d.push(u)}),e}function Nt(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(s=>s.id!==e))})}function Bn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,s=t.prefix;e.forEach(r=>{const o=r.icons,a=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const l=c.name;if(t.icons[l])o.loaded.push({provider:i,prefix:s,name:l});else if(t.missing.has(l))o.missing.push({provider:i,prefix:s,name:l});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Nt([t],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let Qn=0;function Gn(t,e,n){const i=Qn++,s=Nt.bind(null,n,i);if(!e.pending.length)return s;const r={id:i,icons:e,callback:t,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),s}const Ee=Object.create(null);function at(t,e){Ee[t]=e}function ke(t){return Ee[t]||Ee[""]}function Vn(t,e=!0,n=!1){const i=[];return t.forEach(s=>{const r=typeof s=="string"?ee(s,e,n):s;r&&i.push(r)}),i}var qn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Wn(t,e,n,i){const s=t.resources.length,r=t.random?Math.floor(Math.random()*s):t.index;let o;if(t.random){let f=t.resources.slice(0);for(o=[];f.length>1;){const b=Math.floor(Math.random()*f.length);o.push(f[b]),f=f.slice(0,b).concat(f.slice(b+1))}o=o.concat(f)}else o=t.resources.slice(r).concat(t.resources.slice(0,r));const a=Date.now();let c="pending",l=0,d,u=null,h=[],p=[];typeof i=="function"&&p.push(i);function m(){u&&(clearTimeout(u),u=null)}function E(){c==="pending"&&(c="aborted"),m(),h.forEach(f=>{f.status==="pending"&&(f.status="aborted")}),h=[]}function _(f,b){b&&(p=[]),typeof f=="function"&&p.push(f)}function fe(){return{startTime:a,payload:e,status:c,queriesSent:l,queriesPending:h.length,subscribe:_,abort:E}}function k(){c="failed",p.forEach(f=>{f(void 0,d)})}function v(){h.forEach(f=>{f.status==="pending"&&(f.status="aborted")}),h=[]}function y(f,b,U){const te=b!=="success";switch(h=h.filter(P=>P!==f),c){case"pending":break;case"failed":if(te||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){d=U,k();return}if(te){d=U,h.length||(o.length?pe():k());return}if(m(),v(),!t.random){const P=t.resources.indexOf(f.resource);P!==-1&&P!==t.index&&(t.index=P)}c="completed",p.forEach(P=>{P(U)})}function pe(){if(c!=="pending")return;m();const f=o.shift();if(f===void 0){if(h.length){u=setTimeout(()=>{m(),c==="pending"&&(v(),k())},t.timeout);return}k();return}const b={status:"pending",resource:f,callback:(U,te)=>{y(b,U,te)}};h.push(b),l++,u=setTimeout(pe,t.rotate),n(f,e,b.callback)}return setTimeout(pe),fe}function Dt(t){const e={...qn,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function s(a,c,l){const d=Wn(e,a,c,(u,h)=>{i(),l&&l(u,h)});return n.push(d),d}function r(a){return n.find(c=>a(c))||null}return{query:s,find:r,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function Be(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ue=Object.create(null),H=["https://api.simplesvg.com","https://api.unisvg.com"],re=[];for(;H.length>0;)H.length===1||Math.random()>.5?re.push(H.shift()):re.push(H.pop());ue[""]=Be({resources:["https://api.iconify.design"].concat(re)});function lt(t,e){const n=Be(e);return n===null?!1:(ue[t]=n,!0)}function he(t){return ue[t]}function Jn(){return Object.keys(ue)}function dt(){}const ve=Object.create(null);function Zn(t){if(!ve[t]){const e=he(t);if(!e)return;const n=Dt(e),i={config:e,redundancy:n};ve[t]=i}return ve[t]}function Ut(t,e,n){let i,s;if(typeof t=="string"){const r=ke(t);if(!r)return n(void 0,424),dt;s=r.send;const o=Zn(t);o&&(i=o.redundancy)}else{const r=Be(t);if(r){i=Dt(r);const o=t.resources?t.resources[0]:"",a=ke(o);a&&(s=a.send)}}return!i||!s?(n(void 0,424),dt):i.query(e,s,n)().abort}const ut="iconify2",K="iconify",Ft=K+"-count",ht=K+"-version",Ht=36e5,Kn=168,Xn=50;function Pe(t,e){try{return t.getItem(e)}catch{}}function Qe(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ft(t,e){try{t.removeItem(e)}catch{}}function Ie(t,e){return Qe(t,Ft,e.toString())}function Oe(t){return parseInt(Pe(t,Ft))||0}const T={local:!0,session:!0},zt={local:new Set,session:new Set};let Ge=!1;function Yn(t){Ge=t}let ne=typeof window>"u"?{}:window;function Bt(t){const e=t+"Storage";try{if(ne&&ne[e]&&typeof ne[e].length=="number")return ne[e]}catch{}T[t]=!1}function Qt(t,e){const n=Bt(t);if(!n)return;const i=Pe(n,ht);if(i!==ut){if(i){const a=Oe(n);for(let c=0;c<a;c++)ft(n,K+c.toString())}Qe(n,ht,ut),Ie(n,0);return}const s=Math.floor(Date.now()/Ht)-Kn,r=a=>{const c=K+a.toString(),l=Pe(n,c);if(typeof l=="string"){try{const d=JSON.parse(l);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>s&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,a))return!0}catch{}ft(n,c)}};let o=Oe(n);for(let a=o-1;a>=0;a--)r(a)||(a===o-1?(o--,Ie(n,o)):zt[t].add(a))}function Gt(){if(!Ge){Yn(!0);for(const t in T)Qt(t,e=>{const n=e.data,i=e.provider,s=n.prefix,r=S(i,s);if(!ze(r,n).length)return!1;const o=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function es(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const i in T)Qt(i,s=>{const r=s.data;return s.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e});return!0}function ts(t,e){Ge||Gt();function n(i){let s;if(!T[i]||!(s=Bt(i)))return;const r=zt[i];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=Oe(s),o>=Xn||!Ie(s,o+1))return;const a={cached:Math.floor(Date.now()/Ht),provider:t.provider,data:e};return Qe(s,K+o.toString(),JSON.stringify(a))}e.lastModified&&!es(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function pt(){}function ns(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Bn(t)}))}function ss(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,s=t.iconsToLoad;delete t.iconsToLoad;let r;if(!s||!(r=ke(n)))return;r.prepare(n,i,s).forEach(a=>{Ut(n,a,c=>{if(typeof c!="object")a.icons.forEach(l=>{t.missing.add(l)});else try{const l=ze(t,c);if(!l.length)return;const d=t.pendingIcons;d&&l.forEach(u=>{d.delete(u)}),ts(t,c)}catch(l){console.error(l)}ns(t)})})}))}const Ve=(t,e)=>{const n=Vn(t,!0,Rt()),i=zn(n);if(!i.pending.length){let c=!0;return e&&setTimeout(()=>{c&&e(i.loaded,i.missing,i.pending,pt)}),()=>{c=!1}}const s=Object.create(null),r=[];let o,a;return i.pending.forEach(c=>{const{provider:l,prefix:d}=c;if(d===a&&l===o)return;o=l,a=d,r.push(S(l,d));const u=s[l]||(s[l]=Object.create(null));u[d]||(u[d]=[])}),i.pending.forEach(c=>{const{provider:l,prefix:d,name:u}=c,h=S(l,d),p=h.pendingIcons||(h.pendingIcons=new Set);p.has(u)||(p.add(u),s[l][d].push(u))}),r.forEach(c=>{const{provider:l,prefix:d}=c;s[l][d].length&&ss(c,s[l][d])}),e?Gn(e,i,r):pt},is=t=>new Promise((e,n)=>{const i=typeof t=="string"?ee(t,!0):t;if(!i){n(t);return}Ve([i||t],s=>{if(s.length&&i){const r=Z(i);if(r){e({...Y,...r});return}}n(t)})});function rs(t){try{const e=typeof t=="string"?JSON.parse(t):t;if(typeof e.body=="string")return{...e}}catch{}}function os(t,e){const n=typeof t=="string"?ee(t,!0,!0):null;if(!n){const r=rs(t);return{value:t,data:r}}const i=Z(n);if(i!==void 0||!n.prefix)return{value:t,name:n,data:i};const s=Ve([n],()=>e(t,n,Z(n)));return{value:t,name:n,loading:s}}function we(t){return t.hasAttribute("inline")}let Vt=!1;try{Vt=navigator.vendor.indexOf("Apple")===0}catch{}function cs(t,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(Vt||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const as=/(-?[0-9.]*[0-9]+[0-9.]*)/g,ls=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Te(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(as);if(i===null||!i.length)return t;const s=[];let r=i.shift(),o=ls.test(r);for(;;){if(o){const a=parseFloat(r);isNaN(a)?s.push(r):s.push(Math.ceil(a*e*n)/n)}else s.push(r);if(r=i.shift(),r===void 0)return s.join("");o=!o}}function ds(t,e="defs"){let n="";const i=t.indexOf("<"+e);for(;i>=0;){const s=t.indexOf(">",i),r=t.indexOf("</"+e);if(s===-1||r===-1)break;const o=t.indexOf(">",r);if(o===-1)break;n+=t.slice(s+1,r).trim(),t=t.slice(0,i).trim()+t.slice(o+1)}return{defs:n,content:t}}function us(t,e){return t?"<defs>"+t+"</defs>"+e:e}function hs(t,e,n){const i=ds(t);return us(i.defs,e+i.content+n)}const fs=t=>t==="unset"||t==="undefined"||t==="none";function qt(t,e){const n={...Y,...t},i={...Ot,...e},s={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(E=>{const _=[],fe=E.hFlip,k=E.vFlip;let v=E.rotate;fe?k?v+=2:(_.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),_.push("scale(-1 1)"),s.top=s.left=0):k&&(_.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),_.push("scale(1 -1)"),s.top=s.left=0);let y;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:y=s.height/2+s.top,_.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:_.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:y=s.width/2+s.left,_.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}v%2===1&&(s.left!==s.top&&(y=s.left,s.left=s.top,s.top=y),s.width!==s.height&&(y=s.width,s.width=s.height,s.height=y)),_.length&&(r=hs(r,'<g transform="'+_.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,c=s.width,l=s.height;let d,u;o===null?(u=a===null?"1em":a==="auto"?l:a,d=Te(u,c/l)):(d=o==="auto"?c:o,u=a===null?Te(d,l/c):a==="auto"?l:a);const h={},p=(E,_)=>{fs(_)||(h[E]=_.toString())};p("width",d),p("height",u);const m=[s.left,s.top,c,l];return h.viewBox=m.join(" "),{attributes:h,viewBox:m,body:r}}function qe(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ps(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function gs(t){return"data:image/svg+xml,"+ps(t)}function Wt(t){return'url("'+gs(t)+'")'}const ms=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let le=ms();function _s(t){le=t}function ys(){return le}function bs(t,e){const n=he(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const r=e+".json?icons=";i=n.maxURL-s-n.path.length-r.length}return i}function vs(t){return t===404}const ws=(t,e,n)=>{const i=[],s=bs(t,e),r="icons";let o={type:r,provider:t,prefix:e,icons:[]},a=0;return n.forEach((c,l)=>{a+=c.length+1,a>=s&&l>0&&(i.push(o),o={type:r,provider:t,prefix:e,icons:[]},a=c.length),o.icons.push(c)}),i.push(o),i};function $s(t){if(typeof t=="string"){const e=he(t);if(e)return e.path}return"/"}const As=(t,e,n)=>{if(!le){n("abort",424);return}let i=$s(e.provider);switch(e.type){case"icons":{const r=e.prefix,a=e.icons.join(","),c=new URLSearchParams({icons:a});i+=r+".json?"+c.toString();break}case"custom":{const r=e.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let s=503;le(t+i).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{n(vs(o)?"abort":"next",o)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",s)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",s)})},xs={prepare:ws,send:As};function gt(t,e){switch(t){case"local":case"session":T[t]=e;break;case"all":for(const n in T)T[n]=e;break}}const $e="data-style";let Jt="";function Cs(t){Jt=t}function mt(t,e){let n=Array.from(t.childNodes).find(i=>i.hasAttribute&&i.hasAttribute($e));n||(n=document.createElement("style"),n.setAttribute($e,$e),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+Jt}function Zt(){at("",xs),Rt(!0);let t;try{t=window}catch{}if(t){if(Gt(),t.IconifyPreload!==void 0){const n=t.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!ot(s))&&console.error(i)}catch{console.error(i)}})}if(t.IconifyProviders!==void 0){const n=t.IconifyProviders;if(typeof n=="object"&&n!==null)for(const i in n){const s="IconifyProviders["+i+"] is invalid.";try{const r=n[i];if(typeof r!="object"||!r||r.resources===void 0)continue;lt(i,r)||console.error(s)}catch{console.error(s)}}}}return{enableCache:n=>gt(n,!0),disableCache:n=>gt(n,!1),iconLoaded:ct,iconExists:ct,getIcon:Hn,listIcons:Fn,addIcon:Lt,addCollection:ot,calculateSize:Te,buildIcon:qt,iconToHTML:qe,svgToURL:Wt,loadIcons:Ve,loadIcon:is,addAPIProvider:lt,appendCustomStyle:Cs,_api:{getAPIConfig:he,setAPIModule:at,sendAPIQuery:Ut,setFetch:_s,getFetch:ys,listAPIProviders:Jn}}}const je={"background-color":"currentColor"},Kt={"background-color":"transparent"},_t={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},yt={"-webkit-mask":je,mask:je,background:Kt};for(const t in yt){const e=yt[t];for(const n in _t)e[t+"-"+n]=_t[n]}function bt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function Ss(t,e,n){const i=document.createElement("span");let s=t.body;s.indexOf("<a")!==-1&&(s+="<!-- "+Date.now()+" -->");const r=t.attributes,o=qe(s,{...r,width:e.width+"",height:e.height+""}),a=Wt(o),c=i.style,l={"--svg":a,width:bt(r.width),height:bt(r.height),...n?je:Kt};for(const d in l)c.setProperty(d,l[d]);return i}let G;function Es(){try{G=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{G=null}}function ks(t){return G===void 0&&Es(),G?G.createHTML(t):t}function Ps(t){const e=document.createElement("span"),n=t.attributes;let i="";n.width||(i="width: inherit;"),n.height||(i+="height: inherit;"),i&&(n.style=i);const s=qe(t.body,n);return e.innerHTML=ks(s),e.firstChild}function Me(t){return Array.from(t.childNodes).find(e=>{const n=e.tagName&&e.tagName.toUpperCase();return n==="SPAN"||n==="SVG"})}function vt(t,e){const n=e.icon.data,i=e.customisations,s=qt(n,i);i.preserveAspectRatio&&(s.attributes.preserveAspectRatio=i.preserveAspectRatio);const r=e.renderedMode;let o;switch(r){case"svg":o=Ps(s);break;default:o=Ss(s,{...Y,...n},r==="mask")}const a=Me(t);a?o.tagName==="SPAN"&&a.tagName===o.tagName?a.setAttribute("style",o.getAttribute("style")):t.replaceChild(o,a):t.appendChild(o)}function wt(t,e,n){const i=n&&(n.rendered?n:n.lastRender);return{rendered:!1,inline:e,icon:t,lastRender:i}}function Is(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch{return}if(!e||!n)return;const i=e.get(t);if(i)return i;const s=["icon","mode","inline","observe","width","height","rotate","flip"],r=class extends n{constructor(){super();A(this,"_shadowRoot");A(this,"_initialised",!1);A(this,"_state");A(this,"_checkQueued",!1);A(this,"_connected",!1);A(this,"_observer",null);A(this,"_visible",!0);const c=this._shadowRoot=this.attachShadow({mode:"open"}),l=we(this);mt(c,l),this._state=wt({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return s.slice(0)}attributeChangedCallback(c){switch(c){case"inline":{const l=we(this),d=this._state;l!==d.inline&&(d.inline=l,mt(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const c=this.getAttribute("icon");if(c&&c.slice(0,1)==="{")try{return JSON.parse(c)}catch{}return c}set icon(c){typeof c=="object"&&(c=JSON.stringify(c)),this.setAttribute("icon",c)}get inline(){return we(this)}set inline(c){c?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(c){c?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const c=this._state;if(c.rendered){const l=this._shadowRoot;if(c.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}vt(l,c)}}get status(){const c=this._state;return c.rendered?"rendered":c.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const c=this._state,l=this.getAttribute("icon");if(l!==c.icon.value){this._iconChanged(l);return}if(!c.rendered||!this._visible)return;const d=this.getAttribute("mode"),u=it(this);(c.attrMode!==d||jn(c.customisations,u)||!Me(this._shadowRoot))&&this._renderIcon(c.icon,u,d)}_iconChanged(c){const l=os(c,(d,u,h)=>{const p=this._state;if(p.rendered||this.getAttribute("icon")!==d)return;const m={value:d,name:u,data:h};m.data?this._gotIconData(m):p.icon=m});l.data?this._gotIconData(l):this._state=wt(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const c=Me(this._shadowRoot);c&&this._shadowRoot.removeChild(c);return}this._queueCheck()}_gotIconData(c){this._checkQueued=!1,this._renderIcon(c,it(this),this.getAttribute("mode"))}_renderIcon(c,l,d){const u=cs(c.data.body,d),h=this._state.inline;vt(this._shadowRoot,this._state={rendered:!0,icon:c,inline:h,customisations:l,attrMode:d,renderedMode:u})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(c=>{const l=c.some(d=>d.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};s.forEach(a=>{a in r.prototype||Object.defineProperty(r.prototype,a,{get:function(){return this.getAttribute(a)},set:function(c){c!==null?this.setAttribute(a,c):this.removeAttribute(a)}})});const o=Zt();for(const a in o)r[a]=r.prototype[a]=o[a];return e.define(t,r),r}Is()||Zt();var Os=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,js=(t,e,n,i)=>{for(var s=i>1?void 0:i?Ts(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Os(e,n,s),s};let Re=class extends w{render(){return $`
      <slot name="header"></slot>

      <section class="lineup__listed">
        ${kn.map(t=>{var e;return $`
          <article class="lineup__listed-speaker">
            <img .src=${t==null?void 0:t.pictureURL}
              class="lineup__listed-speaker_picture"
              crossorigin="anonymous"
            />

            <ul class="lineup__listed-speaker_socials">
              ${(e=t==null?void 0:t.socials)==null?void 0:e.map(([n,i])=>$`
                <li>
                  <a .href=${i||"#"}
                    target="_blank"
                  >
                    <iconify-icon icon="fa6-brands:${n}"></iconify-icon>
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
    `}};Re.styles=M`
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
      justify-content: space-evenly;
      margin-top: 2rem;
      /* margin-top: -1.5rem; */
    }

    .lineup__listed-speaker {
      margin-bottom: 1.5rem;
      display: flex;
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
  `;Re=js([R("devfest-lineup")],Re);var Ms=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,Ls=(t,e,n,i)=>{for(var s=i>1?void 0:i?Rs(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Ms(e,n,s),s};let Le=class extends w{render(){return $`
      <slot name="header"></slot>
    `}};Le.styles=M`
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
  `;Le=Ls([R("devfest-sponsors")],Le);var Ns=Object.defineProperty,Ds=Object.getOwnPropertyDescriptor,Us=(t,e,n,i)=>{for(var s=i>1?void 0:i?Ds(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Ns(e,n,s),s};let Ne=class extends w{render(){return $`
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
        <div class="lineup-workshops">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Training Entrevistas</span>
          <span>Gemini Workshop</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="lineup-talks">
          <span></span>
          <span></span>
          <span>Taller de Liderazgo</span>
          <span>Procesos de reclutamiento</span>
          <span>Gemma</span>
          <span>RAG en BigQuery</span>
          <span></span>
          <span>Diseño Web</span>
          <span>Kotlin Multi Platform</span>
          <span>Automatización en Python</span>
          <span>Google Cloud</span>
          <span></span>
        </div>
        <div class="lineup-startups">
          <span>Acceso</span>
          <span>Inauguración</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Startup show</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Networking</span>
        </div>
      </div>
    `}};Ne.styles=M`
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
      margin-top: 1rem;
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
      padding: 2rem .5ch;
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
  `;Ne=Us([R("devfest-day-i")],Ne);var Fs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,zs=(t,e,n,i)=>{for(var s=i>1?void 0:i?Hs(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Fs(e,n,s),s};let De=class extends w{render(){return $`
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
    `}};De.styles=M`
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
      margin-top: 1rem;
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

  `;De=zs([R("devfest-day-ii")],De);var Bs=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,Gs=(t,e,n,i)=>{for(var s=i>1?void 0:i?Qs(e,n):e,r=t.length-1,o;r>=0;r--)(o=t[r])&&(s=(i?o(e,n,s):o(s))||s);return i&&s&&Bs(e,n,s),s};let Ue=class extends w{render(){return $`
      <section>
        <div>
          <h1>Google Developer Groups</h1>
          <p>#DevQueretaro</p>
        </div>
      </section>
    `}};Ue.styles=M`
    :host {
      display: block;
      padding: 1rem;
    }
  `;Ue=Gs([R("devfest-footer")],Ue);
