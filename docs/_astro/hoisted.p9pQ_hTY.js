import{m as i}from"./marked.esm.B2p_DnqW.js";async function n(){const t=document.getElementById("wiki-container");try{const e=await fetch("/wiki/readme.md");if(!e.ok)throw new Error(`HTTP error! status: ${e.status}`);const r=await e.text(),o=i.parse(r);t&&(t.innerHTML=o)}catch(e){console.error("Failed to load wiki:",e),t&&(t.innerHTML=`
            <div class="p-4 rounded bg-red-900/50 border border-red-500 text-red-100">
              <h3 class="font-bold text-lg mb-2">Error Loading Wiki</h3>
              <p>Could not fetch the documentation content. Please check if <code>/wiki/readme.md</code> exists.</p>
              <pre class="mt-2 text-xs opacity-70">${e.message}</pre>
            </div>
          `)}}n();
