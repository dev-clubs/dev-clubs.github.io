var Yt=Object.defineProperty;var en=(t,e,n)=>e in t?Yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var x=(t,e,n)=>(en(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis,Fe=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),Ze=new WeakMap;let At=class{constructor(e,n,s){if(this._$cssResult$=!0,s!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Fe&&e===void 0){const s=n!==void 0&&n.length===1;s&&(e=Ze.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ze.set(n,e))}return e}toString(){return this.cssText}};const tn=t=>new At(typeof t=="string"?t:t+"",void 0,He),k=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((s,i,o)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]);return new At(n,t,He)},nn=(t,e)=>{if(Fe)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const s=document.createElement("style"),i=ie.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,t.appendChild(s)}},Je=Fe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const s of e.cssRules)n+=s.cssText;return tn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:sn,defineProperty:on,getOwnPropertyDescriptor:rn,getOwnPropertyNames:an,getOwnPropertySymbols:cn,getPrototypeOf:ln}=Object,C=globalThis,Ke=C.trustedTypes,dn=Ke?Ke.emptyScript:"",ge=C.reactiveElementPolyfillSupport,H=(t,e)=>t,xe={toAttribute(t,e){switch(e){case Boolean:t=t?dn:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ct=(t,e)=>!sn(t,e),Xe={attribute:!0,type:String,converter:xe,reflect:!1,hasChanged:Ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);class R extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Xe){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,n);i!==void 0&&on(this.prototype,e,i)}}static getPropertyDescriptor(e,n,s){const{get:i,set:o}=rn(this.prototype,e)??{get(){return this[n]},set(r){this[n]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const c=i==null?void 0:i.call(this);o.call(this,r),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Xe}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const e=ln(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const n=this.properties,s=[...an(n),...cn(n)];for(const i of s)this.createProperty(i,n[i])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[n,s]of this.elementProperties){const i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)n.unshift(Je(i))}else e!==void 0&&n.push(Je(e));return n}static _$Eu(e,n){const s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const s of n.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nn(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(e,n,s){this._$AK(e,s)}_$EC(e,n){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const r=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:xe).toAttribute(n,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,n){var o;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:xe;this._$Em=i,this[i]=c.fromAttribute(n,r.type),this._$Em=null}}requestUpdate(e,n,s){if(e!==void 0){if(s??(s=this.constructor.getPropertyOptions(e)),!(s.hasChanged??Ct)(this[e],n))return;this.P(e,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,s){this._$AL.has(e)||this._$AL.set(e,n),s.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,r]of i)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[H("elementProperties")]=new Map,R[H("finalized")]=new Map,ge==null||ge({ReactiveElement:R}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=globalThis,re=B.trustedTypes,Ye=re?re.createPolicy("lit-html",{createHTML:t=>t}):void 0,St="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,kt="?"+A,hn=`<${kt}>`,L=document,Q=()=>L.createComment(""),V=t=>t===null||typeof t!="object"&&typeof t!="function",Et=Array.isArray,un=t=>Et(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",me=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,tt=/>/g,j=RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,it=/"/g,Pt=/^(?:script|style|textarea|title)$/i,pn=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$=pn(1),D=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),st=new WeakMap,M=L.createTreeWalker(L,129);function Ot(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ye!==void 0?Ye.createHTML(e):e}const fn=(t,e)=>{const n=t.length-1,s=[];let i,o=e===2?"<svg>":"",r=U;for(let c=0;c<n;c++){const a=t[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===U?d[1]==="!--"?r=et:d[1]!==void 0?r=tt:d[2]!==void 0?(Pt.test(d[2])&&(i=RegExp("</"+d[2],"g")),r=j):d[3]!==void 0&&(r=j):r===j?d[0]===">"?(r=i??U,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?j:d[3]==='"'?it:nt):r===it||r===nt?r=j:r===et||r===tt?r=U:(r=j,i=void 0);const f=r===j&&t[c+1].startsWith("/>")?" ":"";o+=r===U?a+hn:h>=0?(s.push(l),a.slice(0,h)+St+a.slice(h)+A+f):a+A+(h===-2?c:f)}return[Ot(t,o+(t[n]||"<?>")+(e===2?"</svg>":"")),s]};class W{constructor({strings:e,_$litType$:n},s){let i;this.parts=[];let o=0,r=0;const c=e.length-1,a=this.parts,[l,d]=fn(e,n);if(this.el=W.createElement(l,s),M.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=M.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(St)){const u=d[r++],f=i.getAttribute(h).split(A),m=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:m[2],strings:f,ctor:m[1]==="."?mn:m[1]==="?"?_n:m[1]==="@"?yn:de}),i.removeAttribute(h)}else h.startsWith(A)&&(a.push({type:6,index:o}),i.removeAttribute(h));if(Pt.test(i.tagName)){const h=i.textContent.split(A),u=h.length-1;if(u>0){i.textContent=re?re.emptyScript:"";for(let f=0;f<u;f++)i.append(h[f],Q()),M.nextNode(),a.push({type:2,index:++o});i.append(h[u],Q())}}}else if(i.nodeType===8)if(i.data===kt)a.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:o}),h+=A.length-1}o++}}static createElement(e,n){const s=L.createElement("template");return s.innerHTML=e,s}}function z(t,e,n=t,s){var r,c;if(e===D)return e;let i=s!==void 0?(r=n._$Co)==null?void 0:r[s]:n._$Cl;const o=V(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(t),i._$AT(t,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=i:n._$Cl=i),i!==void 0&&(e=z(t,i._$AS(t,e.values),i,s)),e}class gn{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??L).importNode(n,!0);M.currentNode=i;let o=M.nextNode(),r=0,c=0,a=s[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new X(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new bn(o,this,e)),this._$AV.push(l),a=s[++c]}r!==(a==null?void 0:a.index)&&(o=M.nextNode(),r++)}return M.currentNode=L,i}p(e){let n=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,n),n+=s.strings.length-2):s._$AI(e[n])),n++}}class X{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=z(this,e,n),V(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):un(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(L.createTextNode(e)),this._$AH=e}$(e){var o;const{values:n,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=W.createElement(Ot(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const r=new gn(i,this),c=r.u(this.options);r.p(n),this.T(c),this._$AH=r}}_$AC(e){let n=st.get(e.strings);return n===void 0&&st.set(e.strings,n=new W(e)),n}k(e){Et(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const o of e)i===n.length?n.push(s=new X(this.S(Q()),this.S(Q()),this,this.options)):s=n[i],s._$AI(o),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class de{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,s,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=n,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,n=this,s,i){const o=this.strings;let r=!1;if(o===void 0)e=z(this,e,n,0),r=!V(e)||e!==this._$AH&&e!==D,r&&(this._$AH=e);else{const c=e;let a,l;for(e=o[0],a=0;a<o.length-1;a++)l=z(this,c[s+a],n,a),l===D&&(l=this._$AH[a]),r||(r=!V(l)||l!==this._$AH[a]),l===g?e=g:e!==g&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class mn extends de{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class _n extends de{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class yn extends de{constructor(e,n,s,i,o){super(e,n,s,i,o),this.type=5}_$AI(e,n=this){if((e=z(this,e,n,0)??g)===D)return;const s=this._$AH,i=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class bn{constructor(e,n,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){z(this,e)}}const _e=B.litHtmlPolyfillSupport;_e==null||_e(W,X),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.1.2");const vn=(t,e,n)=>{const s=(n==null?void 0:n.renderBefore)??e;let i=s._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;s._$litPart$=i=new X(e.insertBefore(Q(),o),o,void 0,n??{})}return i._$AI(t),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class v extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vn(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}}var xt;v._$litElement$=!0,v.finalized=!0,(xt=globalThis.litElementHydrateSupport)==null||xt.call(globalThis,{LitElement:v});const ye=globalThis.litElementPolyfillSupport;ye==null||ye({LitElement:v});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=t=>(e,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};var wn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,xn=(t,e,n,s)=>{for(var i=s>1?void 0:s?$n(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&wn(e,n,i),i};let Ae=class extends v{render(){return $`
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
    `}};Ae.styles=k`
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
  `;Ae=xn([E("devfest-navbar")],Ae);const An="data:image/svg+xml,%3csvg%20width='63'%20height='37'%20viewBox='0%200%2063%2037'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.9372%203.76231L5.88069%2013.1443C3.13946%2015.1141%202.51406%2018.9331%204.48384%2021.6744C6.45361%2024.4156%2010.2727%2025.041%2013.0139%2023.0712L26.0703%2013.6892C28.8116%2011.7194%2029.437%207.90039%2027.4672%205.15916C25.4974%202.41792%2021.6784%201.79254%2018.9372%203.76231Z'%20fill='%23EA4335'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M12.9897%2013.1192C10.2485%2011.1494%206.42945%2011.7748%204.45967%2014.516C2.48989%2017.2573%203.11528%2021.0763%205.85651%2023.0461L18.913%2032.4281C21.6542%2034.3979%2025.4733%2033.7725%2027.443%2031.0313C29.4128%2028.29%2028.7874%2024.471%2026.0462%2022.5012L12.9897%2013.1192Z'%20fill='%234285F4'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M50.4865%2013.1481L37.43%2022.5301C34.6888%2024.4999%2034.0634%2028.3189%2036.0332%2031.0601C38.0029%2033.8014%2041.822%2034.4267%2044.5632%2032.457L57.6197%2023.075C60.3609%2021.1052%2060.9863%2017.2861%2059.0165%2014.5449C57.0467%2011.8037%2053.2277%2011.1783%2050.4865%2013.1481Z'%20fill='%23F9AB00'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3cpath%20d='M44.5354%203.73443C41.7941%201.76466%2037.9751%202.39003%2036.0053%205.13127C34.0355%207.87251%2034.6609%2011.6915%2037.4022%2013.6613L50.4586%2023.0433C53.1999%2025.0131%2057.0189%2024.3877%2058.9887%2021.6465C60.9585%2018.9053%2060.3331%2015.0862%2057.5918%2013.1165L44.5354%203.73443Z'%20fill='%2334A853'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e",Cn="data:image/svg+xml,%3csvg%20width='30'%20height='29'%20viewBox='0%200%2030%2029'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.8216%2013.6765L16.778%201.64016C16.5885%201.45067%2016.2787%201.45067%2016.0892%201.64016L11.259%206.47036C11.0695%206.65985%2011.0695%206.96959%2011.259%207.15908L14.7355%2010.6355H1.50391V18.4411H14.7373L11.1953%2021.9831C11.0058%2022.1726%2011.0058%2022.4823%2011.1953%2022.6718L16.0255%2027.502C16.215%2027.6915%2016.5247%2027.6915%2016.7142%2027.502L28.8179%2015.4001C28.878%2015.34%2028.9309%2015.2744%2028.9764%2015.2052C29.2898%2014.7314%2029.2388%2014.0883%2028.8216%2013.6728V13.6765Z'%20fill='%23CCF6C5'%20stroke='%231E1E1E'%20stroke-width='1.5'%20stroke-miterlimit='10'/%3e%3c/svg%3e";var Sn=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,En=(t,e,n,s)=>{for(var i=s>1?void 0:s?kn(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&Sn(e,n,i),i};let Ce=class extends v{render(){return $`
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
            <img src=${Cn} />
            <slot name="location"></slot>
          </span>

          <slot name="call-to-action"></slot>
        </main>

        <span class="hero__separator">10101010101010101010</span>
      </div>

      <!-- <span class="hero__ascii-separator">1010101010101010101010</span> -->
    `}};Ce.styles=k`
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
  `;Ce=En([E("devfest-hero")],Ce);const Pn=[{name:"Juan Guillermo Gómez",organization:"Google Dev. Expert",role:"Cloud Architect",pictureURL:"https://edteam-media.s3.amazonaws.com/users/avatar/c5b7bdb1-9513-4436-97ac-c15fc9568f98.jpg",socials:[["linkedin","https://www.linkedin.com/in/jggomezt/"]]},{name:"Javier Ruiz",organization:"Google Cloud",role:"Project Manager",pictureURL:"https://media.licdn.com/dms/image/v2/D4E03AQHPGFUI65Bo5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706023604729?e=1735776000&v=beta&t=TqMhph8N9qTuhnX4xd5vM4iX-vFJxvnbz7I-_ASAXN4",socials:[["linkedin","https://www.linkedin.com/in/javaruiz/"]]},{name:"Aarón Guerrero",organization:"Google Dev. Expert",role:"Cloud Architect",pictureURL:"https://pbs.twimg.com/profile_images/1684806244819697665/fsN0OTkj_400x400.jpg",socials:[["linkedin","https://www.linkedin.com/in/aaronthewarrior/"]]},{name:"Rene Figueroa",organization:"Wizeline",role:"Technology Director",pictureURL:"https://media.licdn.com/dms/image/v2/C4E03AQHjamjc_JeRXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1533476669328?e=1735776000&v=beta&t=fJuBzqmch0DirHHmx9oTGWX-Azm6QZGipgtViKXg0BQ",socials:[["linkedin","https://www.linkedin.com/in/renecloud/"]]},{name:"Esteban Quintana",organization:"Pinterest",role:"Software Engineer",pictureURL:"https://media.licdn.com/dms/image/v2/C4E03AQEZ7FbSnZwHBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1630722250582?e=1736380800&v=beta&t=KaHmutJRuLpVVM59FjK519uz-ZZqd6_Ef0blgwYIL2Y",socials:[["linkedin","https://www.linkedin.com/in/esteban-quintana-cueto/"]]},{name:"Roberto Cruz Lozano",organization:"IBM",role:"Python Developer",pictureURL:"https://media.licdn.com/dms/image/v2/C4D03AQGZH6PWgq4mxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1597188537225?e=2147483647&v=beta&t=_VpLFPksIdPDjNIoIxkxDNpw7ycz9eS56O8McloNgks",socials:[["github","https://github.com/Tank3-TK3"]]}];/**
* (c) Iconify
*
* For the full copyright and license information, please view the license.txt
* files at https://github.com/iconify/iconify
*
* Licensed under MIT.
*
* @license MIT
* @version 2.0.0
*/const It=Object.freeze({left:0,top:0,width:16,height:16}),ae=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Y=Object.freeze({...It,...ae}),Se=Object.freeze({...Y,body:"",hidden:!1}),On=Object.freeze({width:null,height:null}),jt=Object.freeze({...On,...ae});function In(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(i){for(;i<0;)i+=4;return i%4}if(n===""){const i=parseInt(t);return isNaN(i)?0:s(i)}else if(n!==t){let i=0;switch(n){case"%":i=25;break;case"deg":i=90}if(i){let o=parseFloat(t.slice(0,t.length-n.length));return isNaN(o)?0:(o=o/i,o%1===0?s(o):0)}}return e}const jn=/[\s,]+/;function Mn(t,e){e.split(jn).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}const Mt={...jt,preserveAspectRatio:""};function ot(t){const e={...Mt},n=(s,i)=>t.getAttribute(s)||i;return e.width=n("width",null),e.height=n("height",null),e.rotate=In(n("rotate","")),Mn(e,n("flip","")),e.preserveAspectRatio=n("preserveAspectRatio",n("preserveaspectratio","")),e}function Tn(t,e){for(const n in Mt)if(t[n]!==e[n])return!0;return!1}const G=/^[a-z0-9]+(-[a-z0-9]+)*$/,ee=(t,e,n,s="")=>{const i=t.split(":");if(t.slice(0,1)==="@"){if(i.length<2||i.length>3)return null;s=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const c=i.pop(),a=i.pop(),l={provider:i.length>0?i[0]:s,prefix:a,name:c};return e&&!se(l)?null:l}const o=i[0],r=o.split("-");if(r.length>1){const c={provider:s,prefix:r.shift(),name:r.join("-")};return e&&!se(c)?null:c}if(n&&s===""){const c={provider:s,prefix:"",name:o};return e&&!se(c,n)?null:c}return null},se=(t,e)=>t?!!((t.provider===""||t.provider.match(G))&&(e&&t.prefix===""||t.prefix.match(G))&&t.name.match(G)):!1;function Ln(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function rt(t,e){const n=Ln(t,e);for(const s in Se)s in ae?s in t&&!(s in n)&&(n[s]=ae[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function Rn(t,e){const n=t.icons,s=t.aliases||Object.create(null),i=Object.create(null);function o(r){if(n[r])return i[r]=[];if(!(r in i)){i[r]=null;const c=s[r]&&s[r].parent,a=c&&o(c);a&&(i[r]=[c].concat(a))}return i[r]}return(e||Object.keys(n).concat(Object.keys(s))).forEach(o),i}function Dn(t,e,n){const s=t.icons,i=t.aliases||Object.create(null);let o={};function r(c){o=rt(s[c]||i[c],o)}return r(e),n.forEach(r),rt(t,o)}function Tt(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(i=>{e(i,null),n.push(i)});const s=Rn(t);for(const i in s){const o=s[i];o&&(e(i,Dn(t,i,o)),n.push(i))}return n}const zn={provider:"",aliases:{},not_found:{},...It};function be(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function Lt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!be(t,zn))return null;const n=e.icons;for(const i in n){const o=n[i];if(!i.match(G)||typeof o.body!="string"||!be(o,Se))return null}const s=e.aliases||Object.create(null);for(const i in s){const o=s[i],r=o.parent;if(!i.match(G)||typeof r!="string"||!n[r]&&!s[r]||!be(o,Se))return null}return e}const ce=Object.create(null);function Nn(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function S(t,e){const n=ce[t]||(ce[t]=Object.create(null));return n[e]||(n[e]=Nn(t,e))}function Be(t,e){return Lt(e)?Tt(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function Un(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}function Fn(t,e){let n=[];return(typeof t=="string"?[t]:Object.keys(ce)).forEach(i=>{(typeof i=="string"&&typeof e=="string"?[e]:Object.keys(ce[i]||{})).forEach(r=>{const c=S(i,r);n=n.concat(Object.keys(c.icons).map(a=>(i!==""?"@"+i+":":"")+r+":"+a))})}),n}let Z=!1;function Rt(t){return typeof t=="boolean"&&(Z=t),Z}function J(t){const e=typeof t=="string"?ee(t,!0,Z):t;if(e){const n=S(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function Dt(t,e){const n=ee(t,!0,Z);if(!n)return!1;const s=S(n.provider,n.prefix);return Un(s,n.name,e)}function at(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Z&&!e&&!t.prefix){let i=!1;return Lt(t)&&(t.prefix="",Tt(t,(o,r)=>{r&&Dt(o,r)&&(i=!0)})),i}const n=t.prefix;if(!se({provider:e,prefix:n,name:"a"}))return!1;const s=S(e,n);return!!Be(s,t)}function ct(t){return!!J(t)}function Hn(t){const e=J(t);return e?{...Y,...e}:null}function Bn(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((i,o)=>i.provider!==o.provider?i.provider.localeCompare(o.provider):i.prefix!==o.prefix?i.prefix.localeCompare(o.prefix):i.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return t.forEach(i=>{if(s.name===i.name&&s.prefix===i.prefix&&s.provider===i.provider)return;s=i;const o=i.provider,r=i.prefix,c=i.name,a=n[o]||(n[o]=Object.create(null)),l=a[r]||(a[r]=S(o,r));let d;c in l.icons?d=e.loaded:r===""||l.missing.has(c)?d=e.missing:d=e.pending;const h={provider:o,prefix:r,name:c};d.push(h)}),e}function zt(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(i=>i.id!==e))})}function Gn(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,i=t.prefix;e.forEach(o=>{const r=o.icons,c=r.pending.length;r.pending=r.pending.filter(a=>{if(a.prefix!==i)return!0;const l=a.name;if(t.icons[l])r.loaded.push({provider:s,prefix:i,name:l});else if(t.missing.has(l))r.missing.push({provider:s,prefix:i,name:l});else return n=!0,!0;return!1}),r.pending.length!==c&&(n||zt([t],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let qn=0;function Qn(t,e,n){const s=qn++,i=zt.bind(null,n,s);if(!e.pending.length)return i;const o={id:s,icons:e,callback:t,abort:i};return n.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),i}const ke=Object.create(null);function lt(t,e){ke[t]=e}function Ee(t){return ke[t]||ke[""]}function Vn(t,e=!0,n=!1){const s=[];return t.forEach(i=>{const o=typeof i=="string"?ee(i,e,n):i;o&&s.push(o)}),s}var Wn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Zn(t,e,n,s){const i=t.resources.length,o=t.random?Math.floor(Math.random()*i):t.index;let r;if(t.random){let p=t.resources.slice(0);for(r=[];p.length>1;){const b=Math.floor(Math.random()*p.length);r.push(p[b]),p=p.slice(0,b).concat(p.slice(b+1))}r=r.concat(p)}else r=t.resources.slice(o).concat(t.resources.slice(0,o));const c=Date.now();let a="pending",l=0,d,h=null,u=[],f=[];typeof s=="function"&&f.push(s);function m(){h&&(clearTimeout(h),h=null)}function P(){a==="pending"&&(a="aborted"),m(),u.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),u=[]}function _(p,b){b&&(f=[]),typeof p=="function"&&f.push(p)}function pe(){return{startTime:c,payload:e,status:a,queriesSent:l,queriesPending:u.length,subscribe:_,abort:P}}function O(){a="failed",f.forEach(p=>{p(void 0,d)})}function w(){u.forEach(p=>{p.status==="pending"&&(p.status="aborted")}),u=[]}function y(p,b,N){const te=b!=="success";switch(u=u.filter(I=>I!==p),a){case"pending":break;case"failed":if(te||!t.dataAfterTimeout)return;break;default:return}if(b==="abort"){d=N,O();return}if(te){d=N,u.length||(r.length?fe():O());return}if(m(),w(),!t.random){const I=t.resources.indexOf(p.resource);I!==-1&&I!==t.index&&(t.index=I)}a="completed",f.forEach(I=>{I(N)})}function fe(){if(a!=="pending")return;m();const p=r.shift();if(p===void 0){if(u.length){h=setTimeout(()=>{m(),a==="pending"&&(w(),O())},t.timeout);return}O();return}const b={status:"pending",resource:p,callback:(N,te)=>{y(b,N,te)}};u.push(b),l++,h=setTimeout(fe,t.rotate),n(p,e,b.callback)}return setTimeout(fe),pe}function Nt(t){const e={...Wn,...t};let n=[];function s(){n=n.filter(c=>c().status==="pending")}function i(c,a,l){const d=Zn(e,c,a,(h,u)=>{s(),l&&l(h,u)});return n.push(d),d}function o(c){return n.find(a=>c(a))||null}return{query:i,find:o,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:s}}function Ge(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const he=Object.create(null),F=["https://api.simplesvg.com","https://api.unisvg.com"],oe=[];for(;F.length>0;)F.length===1||Math.random()>.5?oe.push(F.shift()):oe.push(F.pop());he[""]=Ge({resources:["https://api.iconify.design"].concat(oe)});function dt(t,e){const n=Ge(e);return n===null?!1:(he[t]=n,!0)}function ue(t){return he[t]}function Jn(){return Object.keys(he)}function ht(){}const ve=Object.create(null);function Kn(t){if(!ve[t]){const e=ue(t);if(!e)return;const n=Nt(e),s={config:e,redundancy:n};ve[t]=s}return ve[t]}function Ut(t,e,n){let s,i;if(typeof t=="string"){const o=Ee(t);if(!o)return n(void 0,424),ht;i=o.send;const r=Kn(t);r&&(s=r.redundancy)}else{const o=Ge(t);if(o){s=Nt(o);const r=t.resources?t.resources[0]:"",c=Ee(r);c&&(i=c.send)}}return!s||!i?(n(void 0,424),ht):s.query(e,i,n)().abort}const ut="iconify2",K="iconify",Ft=K+"-count",pt=K+"-version",Ht=36e5,Xn=168,Yn=50;function Pe(t,e){try{return t.getItem(e)}catch{}}function qe(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ft(t,e){try{t.removeItem(e)}catch{}}function Oe(t,e){return qe(t,Ft,e.toString())}function Ie(t){return parseInt(Pe(t,Ft))||0}const T={local:!0,session:!0},Bt={local:new Set,session:new Set};let Qe=!1;function ei(t){Qe=t}let ne=typeof window>"u"?{}:window;function Gt(t){const e=t+"Storage";try{if(ne&&ne[e]&&typeof ne[e].length=="number")return ne[e]}catch{}T[t]=!1}function qt(t,e){const n=Gt(t);if(!n)return;const s=Pe(n,pt);if(s!==ut){if(s){const c=Ie(n);for(let a=0;a<c;a++)ft(n,K+a.toString())}qe(n,pt,ut),Oe(n,0);return}const i=Math.floor(Date.now()/Ht)-Xn,o=c=>{const a=K+c.toString(),l=Pe(n,a);if(typeof l=="string"){try{const d=JSON.parse(l);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>i&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,c))return!0}catch{}ft(n,a)}};let r=Ie(n);for(let c=r-1;c>=0;c--)o(c)||(c===r-1?(r--,Oe(n,r)):Bt[t].add(c))}function Qt(){if(!Qe){ei(!0);for(const t in T)qt(t,e=>{const n=e.data,s=e.provider,i=n.prefix,o=S(s,i);if(!Be(o,n).length)return!1;const r=n.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function ti(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const s in T)qt(s,i=>{const o=i.data;return i.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e});return!0}function ni(t,e){Qe||Qt();function n(s){let i;if(!T[s]||!(i=Gt(s)))return;const o=Bt[s];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=Ie(i),r>=Yn||!Oe(i,r+1))return;const c={cached:Math.floor(Date.now()/Ht),provider:t.provider,data:e};return qe(i,K+r.toString(),JSON.stringify(c))}e.lastModified&&!ti(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function gt(){}function ii(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Gn(t)}))}function si(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,i=t.iconsToLoad;delete t.iconsToLoad;let o;if(!i||!(o=Ee(n)))return;o.prepare(n,s,i).forEach(c=>{Ut(n,c,a=>{if(typeof a!="object")c.icons.forEach(l=>{t.missing.add(l)});else try{const l=Be(t,a);if(!l.length)return;const d=t.pendingIcons;d&&l.forEach(h=>{d.delete(h)}),ni(t,a)}catch(l){console.error(l)}ii(t)})})}))}const Ve=(t,e)=>{const n=Vn(t,!0,Rt()),s=Bn(n);if(!s.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(s.loaded,s.missing,s.pending,gt)}),()=>{a=!1}}const i=Object.create(null),o=[];let r,c;return s.pending.forEach(a=>{const{provider:l,prefix:d}=a;if(d===c&&l===r)return;r=l,c=d,o.push(S(l,d));const h=i[l]||(i[l]=Object.create(null));h[d]||(h[d]=[])}),s.pending.forEach(a=>{const{provider:l,prefix:d,name:h}=a,u=S(l,d),f=u.pendingIcons||(u.pendingIcons=new Set);f.has(h)||(f.add(h),i[l][d].push(h))}),o.forEach(a=>{const{provider:l,prefix:d}=a;i[l][d].length&&si(a,i[l][d])}),e?Qn(e,s,o):gt},oi=t=>new Promise((e,n)=>{const s=typeof t=="string"?ee(t,!0):t;if(!s){n(t);return}Ve([s||t],i=>{if(i.length&&s){const o=J(s);if(o){e({...Y,...o});return}}n(t)})});function ri(t){try{const e=typeof t=="string"?JSON.parse(t):t;if(typeof e.body=="string")return{...e}}catch{}}function ai(t,e){const n=typeof t=="string"?ee(t,!0,!0):null;if(!n){const o=ri(t);return{value:t,data:o}}const s=J(n);if(s!==void 0||!n.prefix)return{value:t,name:n,data:s};const i=Ve([n],()=>e(t,n,J(n)));return{value:t,name:n,loading:i}}function we(t){return t.hasAttribute("inline")}let Vt=!1;try{Vt=navigator.vendor.indexOf("Apple")===0}catch{}function ci(t,e){switch(e){case"svg":case"bg":case"mask":return e}return e!=="style"&&(Vt||t.indexOf("<a")===-1)?"svg":t.indexOf("currentColor")===-1?"bg":"mask"}const li=/(-?[0-9.]*[0-9]+[0-9.]*)/g,di=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function je(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(li);if(s===null||!s.length)return t;const i=[];let o=s.shift(),r=di.test(o);for(;;){if(r){const c=parseFloat(o);isNaN(c)?i.push(o):i.push(Math.ceil(c*e*n)/n)}else i.push(o);if(o=s.shift(),o===void 0)return i.join("");r=!r}}function hi(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const i=t.indexOf(">",s),o=t.indexOf("</"+e);if(i===-1||o===-1)break;const r=t.indexOf(">",o);if(r===-1)break;n+=t.slice(i+1,o).trim(),t=t.slice(0,s).trim()+t.slice(r+1)}return{defs:n,content:t}}function ui(t,e){return t?"<defs>"+t+"</defs>"+e:e}function pi(t,e,n){const s=hi(t);return ui(s.defs,e+s.content+n)}const fi=t=>t==="unset"||t==="undefined"||t==="none";function Wt(t,e){const n={...Y,...t},s={...jt,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,s].forEach(P=>{const _=[],pe=P.hFlip,O=P.vFlip;let w=P.rotate;pe?O?w+=2:(_.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),_.push("scale(-1 1)"),i.top=i.left=0):O&&(_.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),_.push("scale(1 -1)"),i.top=i.left=0);let y;switch(w<0&&(w-=Math.floor(w/4)*4),w=w%4,w){case 1:y=i.height/2+i.top,_.unshift("rotate(90 "+y.toString()+" "+y.toString()+")");break;case 2:_.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:y=i.width/2+i.left,_.unshift("rotate(-90 "+y.toString()+" "+y.toString()+")");break}w%2===1&&(i.left!==i.top&&(y=i.left,i.left=i.top,i.top=y),i.width!==i.height&&(y=i.width,i.width=i.height,i.height=y)),_.length&&(o=pi(o,'<g transform="'+_.join(" ")+'">',"</g>"))});const r=s.width,c=s.height,a=i.width,l=i.height;let d,h;r===null?(h=c===null?"1em":c==="auto"?l:c,d=je(h,a/l)):(d=r==="auto"?a:r,h=c===null?je(d,l/a):c==="auto"?l:c);const u={},f=(P,_)=>{fi(_)||(u[P]=_.toString())};f("width",d),f("height",h);const m=[i.left,i.top,a,l];return u.viewBox=m.join(" "),{attributes:u,viewBox:m,body:o}}function We(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function gi(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function mi(t){return"data:image/svg+xml,"+gi(t)}function Zt(t){return'url("'+mi(t)+'")'}const _i=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let le=_i();function yi(t){le=t}function bi(){return le}function vi(t,e){const n=ue(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let i=0;n.resources.forEach(r=>{i=Math.max(i,r.length)});const o=e+".json?icons=";s=n.maxURL-i-n.path.length-o.length}return s}function wi(t){return t===404}const $i=(t,e,n)=>{const s=[],i=vi(t,e),o="icons";let r={type:o,provider:t,prefix:e,icons:[]},c=0;return n.forEach((a,l)=>{c+=a.length+1,c>=i&&l>0&&(s.push(r),r={type:o,provider:t,prefix:e,icons:[]},c=a.length),r.icons.push(a)}),s.push(r),s};function xi(t){if(typeof t=="string"){const e=ue(t);if(e)return e.path}return"/"}const Ai=(t,e,n)=>{if(!le){n("abort",424);return}let s=xi(e.provider);switch(e.type){case"icons":{const o=e.prefix,c=e.icons.join(","),a=new URLSearchParams({icons:c});s+=o+".json?"+a.toString();break}case"custom":{const o=e.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:n("abort",400);return}let i=503;le(t+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{n(wi(r)?"abort":"next",r)});return}return i=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?n("abort",o):n("next",i)});return}setTimeout(()=>{n("success",o)})}).catch(()=>{n("next",i)})},Ci={prepare:$i,send:Ai};function mt(t,e){switch(t){case"local":case"session":T[t]=e;break;case"all":for(const n in T)T[n]=e;break}}const $e="data-style";let Jt="";function Si(t){Jt=t}function _t(t,e){let n=Array.from(t.childNodes).find(s=>s.hasAttribute&&s.hasAttribute($e));n||(n=document.createElement("style"),n.setAttribute($e,$e),t.appendChild(n)),n.textContent=":host{display:inline-block;vertical-align:"+(e?"-0.125em":"0")+"}span,svg{display:block}"+Jt}function Kt(){lt("",Ci),Rt(!0);let t;try{t=window}catch{}if(t){if(Qt(),t.IconifyPreload!==void 0){const n=t.IconifyPreload,s="Invalid IconifyPreload syntax.";typeof n=="object"&&n!==null&&(n instanceof Array?n:[n]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!at(i))&&console.error(s)}catch{console.error(s)}})}if(t.IconifyProviders!==void 0){const n=t.IconifyProviders;if(typeof n=="object"&&n!==null)for(const s in n){const i="IconifyProviders["+s+"] is invalid.";try{const o=n[s];if(typeof o!="object"||!o||o.resources===void 0)continue;dt(s,o)||console.error(i)}catch{console.error(i)}}}}return{enableCache:n=>mt(n,!0),disableCache:n=>mt(n,!1),iconLoaded:ct,iconExists:ct,getIcon:Hn,listIcons:Fn,addIcon:Dt,addCollection:at,calculateSize:je,buildIcon:Wt,iconToHTML:We,svgToURL:Zt,loadIcons:Ve,loadIcon:oi,addAPIProvider:dt,appendCustomStyle:Si,_api:{getAPIConfig:ue,setAPIModule:lt,sendAPIQuery:Ut,setFetch:yi,getFetch:bi,listAPIProviders:Jn}}}const Me={"background-color":"currentColor"},Xt={"background-color":"transparent"},yt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},bt={"-webkit-mask":Me,mask:Me,background:Xt};for(const t in bt){const e=bt[t];for(const n in yt)e[t+"-"+n]=yt[n]}function vt(t){return t?t+(t.match(/^[-0-9.]+$/)?"px":""):"inherit"}function ki(t,e,n){const s=document.createElement("span");let i=t.body;i.indexOf("<a")!==-1&&(i+="<!-- "+Date.now()+" -->");const o=t.attributes,r=We(i,{...o,width:e.width+"",height:e.height+""}),c=Zt(r),a=s.style,l={"--svg":c,width:vt(o.width),height:vt(o.height),...n?Me:Xt};for(const d in l)a.setProperty(d,l[d]);return s}let q;function Ei(){try{q=window.trustedTypes.createPolicy("iconify",{createHTML:t=>t})}catch{q=null}}function Pi(t){return q===void 0&&Ei(),q?q.createHTML(t):t}function Oi(t){const e=document.createElement("span"),n=t.attributes;let s="";n.width||(s="width: inherit;"),n.height||(s+="height: inherit;"),s&&(n.style=s);const i=We(t.body,n);return e.innerHTML=Pi(i),e.firstChild}function Te(t){return Array.from(t.childNodes).find(e=>{const n=e.tagName&&e.tagName.toUpperCase();return n==="SPAN"||n==="SVG"})}function wt(t,e){const n=e.icon.data,s=e.customisations,i=Wt(n,s);s.preserveAspectRatio&&(i.attributes.preserveAspectRatio=s.preserveAspectRatio);const o=e.renderedMode;let r;switch(o){case"svg":r=Oi(i);break;default:r=ki(i,{...Y,...n},o==="mask")}const c=Te(t);c?r.tagName==="SPAN"&&c.tagName===r.tagName?c.setAttribute("style",r.getAttribute("style")):t.replaceChild(r,c):t.appendChild(r)}function $t(t,e,n){const s=n&&(n.rendered?n:n.lastRender);return{rendered:!1,inline:e,icon:t,lastRender:s}}function Ii(t="iconify-icon"){let e,n;try{e=window.customElements,n=window.HTMLElement}catch{return}if(!e||!n)return;const s=e.get(t);if(s)return s;const i=["icon","mode","inline","observe","width","height","rotate","flip"],o=class extends n{constructor(){super();x(this,"_shadowRoot");x(this,"_initialised",!1);x(this,"_state");x(this,"_checkQueued",!1);x(this,"_connected",!1);x(this,"_observer",null);x(this,"_visible",!0);const a=this._shadowRoot=this.attachShadow({mode:"open"}),l=we(this);_t(a,l),this._state=$t({value:""},l),this._queueCheck()}connectedCallback(){this._connected=!0,this.startObserver()}disconnectedCallback(){this._connected=!1,this.stopObserver()}static get observedAttributes(){return i.slice(0)}attributeChangedCallback(a){switch(a){case"inline":{const l=we(this),d=this._state;l!==d.inline&&(d.inline=l,_t(this._shadowRoot,l));break}case"observer":{this.observer?this.startObserver():this.stopObserver();break}default:this._queueCheck()}}get icon(){const a=this.getAttribute("icon");if(a&&a.slice(0,1)==="{")try{return JSON.parse(a)}catch{}return a}set icon(a){typeof a=="object"&&(a=JSON.stringify(a)),this.setAttribute("icon",a)}get inline(){return we(this)}set inline(a){a?this.setAttribute("inline","true"):this.removeAttribute("inline")}get observer(){return this.hasAttribute("observer")}set observer(a){a?this.setAttribute("observer","true"):this.removeAttribute("observer")}restartAnimation(){const a=this._state;if(a.rendered){const l=this._shadowRoot;if(a.renderedMode==="svg")try{l.lastChild.setCurrentTime(0);return}catch{}wt(l,a)}}get status(){const a=this._state;return a.rendered?"rendered":a.icon.data===null?"failed":"loading"}_queueCheck(){this._checkQueued||(this._checkQueued=!0,setTimeout(()=>{this._check()}))}_check(){if(!this._checkQueued)return;this._checkQueued=!1;const a=this._state,l=this.getAttribute("icon");if(l!==a.icon.value){this._iconChanged(l);return}if(!a.rendered||!this._visible)return;const d=this.getAttribute("mode"),h=ot(this);(a.attrMode!==d||Tn(a.customisations,h)||!Te(this._shadowRoot))&&this._renderIcon(a.icon,h,d)}_iconChanged(a){const l=ai(a,(d,h,u)=>{const f=this._state;if(f.rendered||this.getAttribute("icon")!==d)return;const m={value:d,name:h,data:u};m.data?this._gotIconData(m):f.icon=m});l.data?this._gotIconData(l):this._state=$t(l,this._state.inline,this._state)}_forceRender(){if(!this._visible){const a=Te(this._shadowRoot);a&&this._shadowRoot.removeChild(a);return}this._queueCheck()}_gotIconData(a){this._checkQueued=!1,this._renderIcon(a,ot(this),this.getAttribute("mode"))}_renderIcon(a,l,d){const h=ci(a.data.body,d),u=this._state.inline;wt(this._shadowRoot,this._state={rendered:!0,icon:a,inline:u,customisations:l,attrMode:d,renderedMode:h})}startObserver(){if(!this._observer)try{this._observer=new IntersectionObserver(a=>{const l=a.some(d=>d.isIntersecting);l!==this._visible&&(this._visible=l,this._forceRender())}),this._observer.observe(this)}catch{if(this._observer){try{this._observer.disconnect()}catch{}this._observer=null}}}stopObserver(){this._observer&&(this._observer.disconnect(),this._observer=null,this._visible=!0,this._connected&&this._forceRender())}};i.forEach(c=>{c in o.prototype||Object.defineProperty(o.prototype,c,{get:function(){return this.getAttribute(c)},set:function(a){a!==null?this.setAttribute(c,a):this.removeAttribute(c)}})});const r=Kt();for(const c in r)o[c]=o.prototype[c]=r[c];return e.define(t,o),o}Ii()||Kt();var ji=Object.defineProperty,Mi=Object.getOwnPropertyDescriptor,Ti=(t,e,n,s)=>{for(var i=s>1?void 0:s?Mi(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&ji(e,n,i),i};let Le=class extends v{render(){return $`
      <slot name="header"></slot>

      <section class="lineup__listed">
        ${Pn.map(t=>{var e;return $`
          <article class="lineup__listed-speaker">
            <img .src=${t==null?void 0:t.pictureURL}
              class="lineup__listed-speaker_picture"
              crossorigin="anonymous"
            />

            <ul class="lineup__listed-speaker_socials">
              ${(e=t==null?void 0:t.socials)==null?void 0:e.map(([n,s])=>$`
                <li>
                  <a .href=${s||"#"}
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
    `}};Le.styles=k`
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
  `;Le=Ti([E("devfest-lineup")],Le);var Li=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,Di=(t,e,n,s)=>{for(var i=s>1?void 0:s?Ri(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&Li(e,n,i),i};let Re=class extends v{render(){return $`
      <slot name="header"></slot>
    `}};Re.styles=k`
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
  `;Re=Di([E("devfest-sponsors")],Re);var zi=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Ui=(t,e,n,s)=>{for(var i=s>1?void 0:s?Ni(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&zi(e,n,i),i};let De=class extends v{render(){return $`
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
          <span class="lineup-header">Workshops</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Gemini Workshop</span>
          <span></span>
          <span></span>
          <span></span>
          <span>Training de entrevistas</span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="lineup-talks">
          <span class="lineup-header">Conferencias</span>
          <span></span>
          <span></span>
          <span>Taller de Liderazgo x Google</span>
          <span>Sesión sobre reclutamiento</span>
          <span>Kotlin Multi Platform</span>
          <span>Gemma</span>
          <span></span>
          <span>Diseño Web</span>
          <span>RAG en BigQuery</span>
          <span>Automatización en Python</span>
          <span>Google Cloud</span>
          <span></span>
        </div>
        <div class="lineup-startups">
          <span class="lineup-header">Networking</span>
          <span>Acceso (10:00 AM)</span>
          <span>Inauguración</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Networking / Break</span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>Networking</span>
        </div>
      </div>
    `}};De.styles=k`
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
  `;De=Ui([E("devfest-day-i")],De);var Fi=Object.defineProperty,Hi=Object.getOwnPropertyDescriptor,Bi=(t,e,n,s)=>{for(var i=s>1?void 0:s?Hi(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&Fi(e,n,i),i};let ze=class extends v{render(){return $`
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
    `}};ze.styles=k`
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

  `;ze=Bi([E("devfest-day-ii")],ze);const Gi=[{name:"Ramsés Magaña",title:"GDG Co-organizer",organization:"Google Dev. Groups",main_contact:"https://www.linkedin.com/in/ramses-mr/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/ramses_maga%C3%B1a.jpeg"},{name:"Karina Maldonado",title:"Presidenta de Vortex Robotics",organization:"Sociedad de Alumnos TEC",main_contact:"https://www.instagram.com/vortex.itsmq/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-goog/events/Kari_1IdI9ZT.jpg"},{name:"Yoshihiro Ortiz",title:"GDG Chapter Lead",organization:"Google Dev. Groups",main_contact:"https://www.linkedin.com/in/yoshihiro-o/",photoURL:"https://media.licdn.com/dms/image/v2/D5603AQEde8FMpk4NvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1687964573348?e=1736380800&v=beta&t=zCGDr0ZAbWze8D5DhUOpih5MHOn3QkafgIvFs59GCDM"},{name:"Brisa Reyes",title:"Sociedad de Alumnos",organization:"Tec. de Monterrey",main_contact:"https://www.instagram.com/vortex.itsmq/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/Screenshot%25202024-10-19%2520at%25207.28.53%25E2%2580%25AFPM_Zf5HAbp.png"},{name:"Berenice Rivera",title:"GDG Volunteer",organization:"Google Dev. Groups",main_contact:"https://www.linkedin.com/in/ux-berenice-rivera/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_250,h_250,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/berenice_rivera.jpg"},{name:"Diego Quezada",title:"Sociedad de Alumnos",organization:"Tec. de Monterrey",main_contact:"https://www.instagram.com/vortex.itsmq/",photoURL:"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_200,q_auto:good,w_200/v1/gcs/platform-data-goog/events/Foto%2520Diego%2520Quezada_wnXNuUi.jpg"}];var qi=Object.defineProperty,Qi=Object.getOwnPropertyDescriptor,Vi=(t,e,n,s)=>{for(var i=s>1?void 0:s?Qi(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&qi(e,n,i),i};let Ne=class extends v{render(){return $`
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
          ${Gi.map(t=>$`
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
    `}};Ne.styles=k`
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
  `;Ne=Vi([E("devfest-hosts")],Ne);const Wi="data:image/svg+xml,%3csvg%20width='70'%20height='34'%20viewBox='0%200%2070%2034'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M49.7854%2018.8598L60.8435%2025.2474L47.4473%2032.9817C44.8021%2034.5089%2041.4198%2033.6026%2039.8926%2030.9575C38.3654%2028.3123%2039.2717%2024.9299%2041.9169%2023.4028L49.7854%2018.8598ZM47.4473%200.847328L66.9809%2012.125C69.626%2013.6522%2070.5323%2017.0346%2069.0051%2019.6797C67.4779%2022.3249%2064.0956%2023.2312%2061.4504%2021.704L41.9169%2010.4263C39.2717%208.89911%2038.3654%205.51676%2039.8926%202.8716C41.4198%200.226443%2044.8021%20-0.679855%2047.4473%200.847328ZM9.27653%2012.125L28.8101%2023.4028C31.4553%2024.9299%2032.3616%2028.3123%2030.8344%2030.9575C29.3072%2033.6026%2025.9249%2034.5089%2023.2797%2032.9817L3.74611%2021.704C1.10095%2020.1768%200.194656%2016.7945%201.72184%2014.1493C3.24902%2011.5042%206.63137%2010.5979%209.27653%2012.125ZM30.8344%202.8716C32.3616%205.51676%2031.4553%208.89911%2028.8101%2010.4263L20.664%2015.1294L9.63757%208.72361L23.2797%200.847328C25.9249%20-0.679855%2029.3072%200.226443%2030.8344%202.8716Z'%20fill='black'/%3e%3c/svg%3e";var Zi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,Ki=(t,e,n,s)=>{for(var i=s>1?void 0:s?Ji(e,n):e,o=t.length-1,r;o>=0;o--)(r=t[o])&&(i=(s?r(e,n,i):r(i))||i);return s&&i&&Zi(e,n,i),i};let Ue=class extends v{render(){return $`
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
        <img src=${Wi} />
      </footer>
    `}};Ue.styles=k`
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
  `;Ue=Ki([E("devfest-footer")],Ue);
