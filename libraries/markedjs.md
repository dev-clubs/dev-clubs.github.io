Marked is

1. built for speed.<sup>*</sup>
2. a low-level markdown compiler for parsing markdown without caching or blocking for long periods of time.<sup>**</sup>
3. light-weight while implementing all markdown features from the supported flavors & specifications.<sup>***</sup>
4. available as a command line interface (CLI) and running in client- or server-side JavaScript projects.

<p><small><sup>*</sup> Still working on metrics for comparative analysis and definition.</small><br>
<small><sup>**</sup> As few dependencies as possible.</small><br>
<small><sup>***</sup> Strict compliance could result in slower processing when running comparative benchmarking.</small></p>


<h2 id="demo">Demo</h2>

Checkout the [demo page](./demo/) to see marked in action ⛹️

These documentation pages are also rendered using marked 💯


<h2 id="installation">Installation</h2>

**CLI:** `npm install -g marked`

**In-browser:**
```
npm install marked
```
<h2 id="usage">Usage</h2>

### Warning: 🚨 Marked does not [sanitize](/using_advanced#options) the output HTML. If you are processing potentially unsafe strings, it's important to filter for possible XSS attacks. Some filtering options include [DOMPurify](https://github.com/cure53/DOMPurify) (recommended), [js-xss](https://github.com/leizongmin/js-xss), [sanitize-html](https://github.com/apostrophecms/sanitize-html) and [insane](https://github.com/bevacqua/insane) on the *output* HTML! 🚨

```
DOMPurify.sanitize(marked.parse(`<img src="x" onerror="alert('not happening')">`));
```

**⚠️ Input: special ZERO WIDTH unicode characters (for example `\uFEFF`) might interfere with parsing. Some text editors add them at the start of the file (see: [#2139](https://github.com/markedjs/marked/issues/2139)).**

```js
// remove the most common zerowidth characters from the start of the file
marked.parse(
  contents.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/,"")
)
```

**CLI**

``` bash
# Example with stdin input
$ marked -o hello.html
hello world
^D
$ cat hello.html
<p>hello world</p>
```

``` bash
# Example with string input
$ marked -s "*hello world*"
<p><em>hello world</em></p>
```

```bash
# Example with file input

echo "**bold text example**" > readme.md

$ marked -i readme.md -o readme.html
$ cat readme.html
<p><strong>bold text example</strong></p>
```

```bash
# Print all options
$ marked --help
```

*CLI Config*

A config file can be used to configure the marked cli.

If it is a `.json` file it should be a JSON object that will be passed to marked as options.

If `.js` is used it should have a default export of a marked options object or a function that takes `marked` as a parameter.
It can use the `marked` parameter to install extensions using `marked.use`.

By default the marked cli will look for a config file in your home directory in the following order.

- `~/.marked.json`
- `~/.marked.js`
- `~/.marked/index.js`

```bash
# Example with custom config

echo '{ "breaks": true }' > config.json

$ marked -s 'line1\nline2' -c config.json
<p>line1<br>line2</p>
```

**Browser**

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked in the browser</title>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
  <script>
    document.getElementById('content').innerHTML =
      marked.parse('# Marked in browser\n\nRendered by **marked**.');
  </script>
</body>
</html>
```
or import esm module

```html
<script type="module">
  import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
  document.getElementById('content').innerHTML =
    marked.parse('# Marked in the browser\n\nRendered by **marked**.');
</script>
```

**Node.js**

```js
import { marked } from 'marked';
// or const { marked } = require('marked');

const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
```


Marked offers [advanced configurations](/using_advanced) and [extensibility](/using_pro) as well.

<h2 id="specifications">Supported Markdown specifications</h2>

We actively support the features of the following [Markdown flavors](https://github.com/commonmark/CommonMark/wiki/Markdown-Flavors).

<!--{{test-results-table}}-->

By supporting the above Markdown flavors, it's possible that Marked can help you use other flavors as well; however, these are not actively supported by the community.

<h2 id="tools">List of Tools Using Marked</h2>

We actively support the usability of Marked in super-fast markdown transformation, some of Tools using `Marked` for single-page creations are

| Tools                                                               |                  Description                                               |
| :-----------------------------------------------------------------  | :------------------------------------------------------------------------  |
| [zero-md](https://zerodevx.github.io/zero-md/)                      | A native markdown-to-html web component to load and display an external MD file.It uses Marked for super-fast markdown transformation. |
| [texme](https://github.com/susam/texme)                             | TeXMe is a lightweight JavaScript utility to create self-rendering Markdown + LaTeX documents.             |
| [StrapDown.js](https://naereen.github.io/StrapDown.js/)             | StrapDown.js is an awesome on-the-fly Markdown to HTML text processor.                |
| [raito](https://raito.arnaud.at/)             | Mini Markdown Wiki/CMS in 8kb of JavaScript.                |
| [Homebrewery](https://homebrewery.naturalcrit.com/)             | The Homebrewery is a tool for making authentic looking D&D content using Markdown. It is distributed under the terms of the MIT.             |
| [marked_reader](https://github.com/CNOCTAVE/marked_reader)          | marked_reader is an open source Markdown reader packed by Electron. |

<h2 id="security">Security</h2>

The only completely secure system is the one that doesn't exist in the first place. Having said that, we take the security of Marked very seriously.

Therefore, please disclose potential security issues by email to the project [committers](/authors) as well as the [listed owners within NPM](https://docs.npmjs.com/cli/owner). We will provide an initial assessment of security reports within 48 hours and should apply patches within 2 weeks (also, feel free to contribute a fix for the issue).

<h2 id="instance">Marked instance</h2>

By default, Marked stores options and extensions in the global scope. That means changing the options in one script will also change the options in another script since they share the same instance.

If you don't want to mutate global scope, you can create a new instance of Marked to ensure options and extensions are locally scoped.

```js
import { Marked } from 'marked';
const marked = new Marked([options, extension, ...]);
```

|Argument |Type    |Notes                                                                  |
|:--------|:-------|:----------------------------------------------------------------------|
| options |`object`|The same arguments that can be passed to [`marked.use`](/using_pro#use)|

Be careful: marked.use(...) should not be used in a loop or function. It should only be used directly after new Marked is created or marked is imported.

## The `parse` function

```js
import { marked } from 'marked';
marked.parse(markdownString [,options])
```

|Argument                      |Type    |Notes                                                           |
|:-----------------------------|:-------|:---------------------------------------------------------------|
|markdownString                |`string`|String of markdown source to be compiled.                       |
|<a href="#options">options</a>|`object`|Hash of options. Can also use `marked.use` to set global options|

### Alternative using reference

```js
// Create reference instance
import { marked } from 'marked';

// Set options
marked.use({
  async: true,
  pedantic: false,
  gfm: true,
});

// Compile
console.log(marked.parse(markdownString));
```

<h2 id="options">Options</h2>

|Member      |Type      |Default  |Since    |Notes         |
|:-----------|:---------|:--------|:--------|:-------------|
|async       |`boolean` |`false`  |4.1.0    |If true, `walkTokens` functions can be async and `marked.parse` will return a promise that resolves when all walk tokens functions resolve.|
|breaks      |`boolean` |`false`  |v0.2.7   |If true, add `<br>` on a single line break (copies GitHub behavior on comments, but not on rendered markdown files). Requires `gfm` be `true`.|
|gfm         |`boolean` |`true`   |v0.2.1   |If true, use approved [GitHub Flavored Markdown (GFM) specification](https://github.github.com/gfm/).|
|pedantic    |`boolean` |`false`  |v0.2.1   |If true, conform to the original `markdown.pl` as much as possible. Don't fix original markdown bugs or behavior. Turns off and overrides `gfm`.|
|renderer    |`object`  |`new Renderer()`|v0.3.0|An object containing functions to render tokens to HTML. See [extensibility](/using_pro) for more details.|
|silent      |`boolean` |`false`  |v0.2.7   |If true, the parser does not throw any exception or log any warning. Any error will be returned as a string.|
|tokenizer    |`object`  |`new Tokenizer()`|v1.0.0|An object containing functions to create tokens from markdown. See [extensibility](/using_pro) for more details.|
|walkTokens   |`function`  |`null`|v1.1.0|A function which is called for every token. See [extensibility](/using_pro) for more details.|

## Old Options

|Member      |Type      |Default  |Since    |Notes         |
|:-----------|:---------|:--------|:--------|:-------------|
|smartLists (**removed**)| `boolean` | `false` |v0.2.8 | Removed in v3.0.0. |
|baseUrl (**removed**)|`string`  |`null`   |v0.3.9    |Removed in v8.0.0 use [`marked-base-url`](https://www.npmjs.com/package/marked-base-url) to prefix url for any relative link. |
|headerIds (**removed**)|`boolean` |`true`   |v0.4.0   |Removed in v8.0.0 use [`marked-gfm-heading-id`](https://www.npmjs.com/package/marked-gfm-heading-id) to include an `id` attribute when emitting headings (h1, h2, h3, etc).|
|headerPrefix (**removed**)|`string`  |`''`     |v0.3.0   |Removed in v8.0.0 use [`marked-gfm-heading-id`](https://www.npmjs.com/package/marked-gfm-heading-id) to add a string to prefix the `id` attribute when emitting headings (h1, h2, h3, etc).|
|highlight (**removed**)|`function`|`null`   |v0.3.0   |Removed in v8.0.0 use [`marked-highlight`](https://www.npmjs.com/package/marked-highlight) to add highlighting to code blocks. |
|langPrefix  (**removed**)|`string`  |`'language-'`|v0.3.0|Removed in v8.0.0 use [`marked-highlight`](https://www.npmjs.com/package/marked-highlight) to prefix the className in a `<code>` block. Useful for syntax highlighting.|
|mangle (**removed**)|`boolean` |`true`   |v0.3.4   |Removed in v8.0.0 use [`marked-mangle`](https://www.npmjs.com/package/marked-mangle) to mangle email addresses.|
|sanitize (**removed**)|`boolean` |`false`  |v0.2.1   |Removed in v8.0.0 use a sanitize library, like [DOMPurify](https://github.com/cure53/DOMPurify) (recommended), [sanitize-html](https://github.com/apostrophecms/sanitize-html) or [insane](https://github.com/bevacqua/insane) on the output HTML! |
|sanitizer  (**removed**)|`function`|`null`   |v0.3.4   |Removed in v8.0.0 use a sanitize library, like [DOMPurify](https://github.com/cure53/DOMPurify) (recommended), [sanitize-html](https://github.com/apostrophecms/sanitize-html) or [insane](https://github.com/bevacqua/insane) on the output HTML!|
|smartypants (**removed**)|`boolean` |`false`  |v0.2.9   |Removed in v8.0.0 use [`marked-smartypants`](https://www.npmjs.com/package/marked-smartypants) to use "smart" typographic punctuation for things like quotes and dashes.|
|xhtml (**removed**)|`boolean` |`false`  |v0.3.2   |Removed in v8.0.0 use [`marked-xhtml`](https://www.npmjs.com/package/marked-xhtml) to emit self-closing HTML tags for void elements (&lt;br/&gt;, &lt;img/&gt;, etc.) with a "/" as required by XHTML.|

<h2 id="extensions">Known Extensions</h2>

Marked can be extended using [custom extensions](/using_pro#extensions). This is a list of extensions that can be used with `marked.use(extension)`.

<!-- Keep this list ordered alphabetically by name -->

|Name|Package Name|Description|
|:---|:-----------|:----------|
|[ABCjs](https://www.npmjs.com/package/marked-abc)|[`abcjs`](https://www.npmjs.com/package/marked-abc)|[ABCjs](https://www.abcjs.net/) sheet music rendering|
|[Admonition](https://www.npmjs.com/package/marked-admonition-extension)|[`marked-admonition-extension`](https://www.npmjs.com/package/marked-admonition-extension)| Admonition extension |
|[Alert](https://github.com/bent10/marked-extensions/tree/main/packages/alert)|[`marked-alert`](https://www.npmjs.com/package/marked-alert)|Enables [GFM alerts](https://github.com/orgs/community/discussions/16925)|
|[Base URL](https://github.com/markedjs/marked-base-url)|[`marked-base-url`](https://www.npmjs.com/package/marked-base-url)|Prefix relative urls with a base URL|
|[Bidi](https://github.com/markedjs/marked-bidi)|[`marked-bidi`](https://www.npmjs.com/package/marked-bidi)|Add Bidirectional text support to the HTML|
|[CJK Breaks](https://github.com/chirsz-ever/marked-cjk-breaks)|[`marked-cjk-breaks`](https://www.npmjs.com/package/marked-cjk-breaks)|Suppress soft linebreaks between east asian characters|
|[Code Format](https://github.com/bent10/marked-extensions/tree/main/packages/code-format)|[`marked-code-format`](https://www.npmjs.com/package/marked-code-format)|Formatting code blocks using Prettier|
|[Code JSX Renderer](https://github.com/bent10/marked-extensions/tree/main/packages/code-jsx-renderer)|[`marked-code-jsx-renderer`](https://www.npmjs.com/package/marked-code-jsx-renderer)|Render JSX code blocks using a custom renderer and components|
|[Code Preview](https://github.com/bent10/marked-extensions/tree/main/packages/code-preview)|[`marked-code-preview`](https://www.npmjs.com/package/marked-code-preview)|Transform code blocks into code previews|
|[Custom Heading ID](https://github.com/markedjs/marked-custom-heading-id)|[`marked-custom-heading-id`](https://www.npmjs.com/package/marked-custom-heading-id)|Specify a custom heading id in headings with the [Markdown Extended Syntax](https://www.markdownguide.org/extended-syntax/#heading-ids) `# heading {#custom-id}`|
|[Directive](https://github.com/bent10/marked-extensions/tree/main/packages/directive)|[`marked-directive`](https://www.npmjs.com/package/marked-directive)|Supports [directives syntax](https://talk.commonmark.org/t/generic-directives-plugins-syntax/444)|
|[Emoji](https://github.com/UziTech/marked-emoji)|[`marked-emoji`](https://www.npmjs.com/package/marked-emoji)|Add emoji support like on GitHub|
|[Extended Tables](https://github.com/calculuschild/marked-extended-tables)|[`marked-extended-tables`](https://www.npmjs.com/package/marked-extended-tables)|Extends the standard Github-Flavored tables to support advanced features: Column Spanning, Row Spanning, Multi-row headers|
|[Footnote](https://github.com/bent10/marked-extensions/tree/main/packages/footnote)|[`marked-footnote`](https://www.npmjs.com/package/marked-footnote)|Enables [GFM footnotes](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes)|
|[GFM Heading ID](https://github.com/markedjs/marked-gfm-heading-id)|[`marked-gfm-heading-id`](https://www.npmjs.com/package/marked-gfm-heading-id)|Use [`github-slugger`](https://github.com/Flet/github-slugger) to create the heading IDs and allow a custom prefix|
|[Highlight](https://github.com/markedjs/marked-highlight)|[`marked-highlight`](https://www.npmjs.com/package/marked-highlight)|Highlight code blocks|
|[HTML Renderer](https://github.com/UziTech/marked-html-renderer)|[`marked-html-renderer`](https://www.npmjs.com/package/marked-html-renderer)|Output HTML Elements instead of a string|
|[Jira Renderer](https://github.com/mrmarble/marked-jira)|[`marked-jira`](https://www.npmjs.com/package/marked-jira)|Output Jira compatible format|
|[Katex Code](https://github.com/UziTech/marked-katex-extension)|[`marked-katex-extension`](https://www.npmjs.com/package/marked-katex-extension)|Render [katex](https://katex.org/) code|
|[LinkifyIt](https://github.com/UziTech/marked-linkify-it)|[`marked-linkify-it`](https://www.npmjs.com/package/marked-linkify-it)|Use [linkify-it](https://github.com/markdown-it/linkify-it) for urls|
|[Mangle](https://github.com/markedjs/marked-mangle)|[`marked-mangle`](https://www.npmjs.com/package/marked-mangle)|Mangle mailto links with HTML character references|
|[Marked Responsive Images](https://github.com/ELowry/MarkedResponsiveImages)|[`marked-responsive-images`](https://www.npmjs.com/package/marked-responsive-images)|Generate responsive (`srcset`) images based on structured filenames|
|[Misskey-flavored Markdown](https://akkoma.dev/sfr/marked-mfm)|[`marked-mfm`](https://www.npmjs.com/package/marked-mfm)|Custom extension for [Misskey-flavored Markdown](https://github.com/misskey-dev/mfm.js/blob/develop/docs/syntax.md)|
|[More Lists](https://github.com/jasny/marked-more-lists)|[`marked-more-lists`](https://www.npmjs.com/package/marked-more-lists)|Support for alphabetical and roman numeral ordered lists|
|[Plaintify](https://github.com/bent10/marked-extensions/tree/main/packages/plaintify)|[`marked-plaintify`](https://www.npmjs.com/package/marked-plaintify)|Converts Markdown to Plaintext|
|[Shiki](https://github.com/bent10/marked-extensions/tree/main/packages/shiki)|[`marked-shiki`](https://www.npmjs.com/package/marked-shiki)|Integrating [Shiki](https://shiki.style/) syntax highlighting|
|[Sequential Hooks](https://github.com/bent10/marked-extensions/tree/main/packages/sequential-hooks)|[`marked-sequential-hooks`](https://www.npmjs.com/package/marked-sequential-hooks)|Enables the sequential preprocessing and post-processing within [sequential hooks](https://github.com/bent10/marked-extensions#sequential-hooks)|
|[Smartypants](https://github.com/markedjs/marked-smartypants)|[`marked-smartypants`](https://www.npmjs.com/package/marked-smartypants)|Use [smartypants](https://www.npmjs.com/package/smartypants) to use "smart" typographic punctuation for things like quotes and dashes|
|[Smartypants lite](https://github.com/calculuschild/marked-smartypants-lite)|[`marked-smartypants-lite`](https://www.npmjs.com/package/marked-smartypants-lite)|A faster lighter version of marked-smartypants that doesn't use any external dependencies to create "smart" typographic punctuation for things like quotes and dashes|
|[Token Position](https://github.com/UziTech/marked-token-position)|[`marked-token-position`](https://www.npmjs.com/package/marked-token-position)|Adds a `position` field to each token with `start` and `end` properties containing `line`, `column`, and `offset`|
|[Typograf](https://github.com/laidrivm/marked-typograf)|[`marked-typograf`](https://www.npmjs.com/package/marked-typograf)|Use [typograf](https://www.npmjs.com/package/typograf) as a more powerful and extendable alternative to Smartypants for creating “smart” typographic punctuation, such as quotes and dashes|
|[XHTML](https://github.com/markedjs/marked-xhtml)|[`marked-xhtml`](https://www.npmjs.com/package/marked-xhtml)|Emit self-closing HTML tags for void elements (&lt;br/&gt;, &lt;img/&gt;, etc.) with a "/" as required by XHTML|

<h2 id="user-examples">User Examples</h2>

<details>

<summary>Marked can render on-page content as markdown in the browser.</summary>

```html
<!DOCTYPE html>
<html>
 <head>
   <!-- Suggested stylesheet -->
   <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown.min.css"
    crossorigin="anonymous" referrerpolicy="no-referrer" />

   <title>Marked for the full page</title>
 </head>

 <body> 
  <textarea id="markdown-source" style="display: none;">
# Title

Lots of text using **markdown syntax.**
  </textarea>
  <div id="content" class="markdown-body"></div>
  
  <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
  <script>
    const source = document.getElementById('markdown-source').value;
    
    // Parse the markdown and render it into the content div.
    document.getElementById('content').innerHTML = marked.parse(source);
  </script>
 </body>
</html>
```
</details>

<h2 id="inline">Inline Markdown</h2>

You can parse inline markdown by running markdown through `marked.parseInline`.

```js
const blockHtml = marked.parse('**strong** _em_');
console.log(blockHtml); // '<p><strong>strong</strong> <em>em</em></p>'

const inlineHtml = marked.parseInline('**strong** _em_');
console.log(inlineHtml); // '<strong>strong</strong> <em>em</em>'
```

<h2 id="highlight">Highlighting</h2>

Use [`marked-highlight`](https://www.npmjs.com/package/marked-highlight) to highlight code blocks.

<h2 id="workers">Workers</h2>

To prevent ReDoS attacks you can run marked on a worker and terminate it when parsing takes longer than usual.

Marked can be run in a [worker thread](https://nodejs.org/api/worker_threads.html) on a node server, or a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) in a browser.

### Node Worker Thread

```js
// markedWorker.js

import { marked } from 'marked';
import { parentPort } from 'worker_threads';

parentPort.on('message', (markdownString) => {
  parentPort.postMessage(marked.parse(markdownString));
});
```

```js
// index.js

import { Worker } from 'worker_threads';
const markedWorker = new Worker('./markedWorker.js');

const markedTimeout = setTimeout(() => {
  markedWorker.terminate();
  throw new Error('Marked took too long!');
}, timeoutLimit);

markedWorker.on('message', (html) => {
  clearTimeout(markedTimeout);
  console.log(html);
  markedWorker.terminate();
});

markedWorker.postMessage(markdownString);
```

### Web Worker

> **NOTE**: Web Workers send the payload from `postMessage` in an object with the payload in a `.data` property

```js
// markedWorker.js

importScripts('path/to/marked.umd.js');

onmessage = (e) => {
  const markdownString = e.data
  postMessage(marked.parse(markdownString));
};
```

```js
// script.js

const markedWorker = new Worker('./markedWorker.js');

const markedTimeout = setTimeout(() => {
  markedWorker.terminate();
  throw new Error('Marked took too long!');
}, timeoutLimit);

markedWorker.onmessage = (e) => {
  clearTimeout(markedTimeout);
  const html = e.data;
  console.log(html);
  markedWorker.terminate();
};

markedWorker.postMessage(markdownString);
```

<h2 id="cli-extensions">CLI Extensions</h2>

You can use extensions in the CLI by creating a new CLI that imports marked and the marked binary.

```js
// file: myMarked
#!/usr/bin/node

import { marked } from 'marked';
import customHeadingId from 'marked-custom-heading-id';

marked.use(customHeadingId());

import 'marked/bin/marked';
```

```sh
$ ./myMarked -s "# heading {#custom-id}"
<h1 id="custom-id">heading</h1>
```