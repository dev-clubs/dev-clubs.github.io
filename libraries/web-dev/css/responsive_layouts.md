# Micro layouts

When we think of layouts, we often think of page-level designs.
But smaller components within the page can have their own self-contained layouts.

Ideally, these component-level layouts will adjust themselves automatically,
regardless of their position on the page.
There may be situations where you don't know if a component will be placed into the main content column or the sidebar or both.
Without knowing for sure where a component will end up,
you need to make sure that the component can adjust itself to its container.

![A two column layout, one wide and one narrow. The media objects are laid out differently depending on whether they're in the wide or narrow column.](https://web.dev/static/learn/design/micro-layouts/image/a-column-layout-wide-a73d0e5e2462.png)
| **Note:** Creating components that can adapt to their container can be easier with [container queries](https://developer.mozilla.org/docs/Web/CSS/CSS_Container_Queries).

## Grid

[CSS grid](https://web.dev/learn/css/grid) isn't just for page-level layouts.
It also works well for the components that live within them.

In this example, the `::before` and `::after`
[pseudo-elements](https://web.dev/learn/css/pseudo-elements) create decorative lines on either
side of a heading. The heading itself is a grid container. The individual
elements are laid out so that the lines always fill the available space.  

    h1 {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 1em;
    }
    h1::before,
    h1::after {
      content: "";
      border-top: 0.1em double black;
      align-self: center;
    }

![Developer tools in Firefox showing a grid overlay.](https://web.dev/static/learn/design/micro-layouts/image/developer-tools-firefox-41cc2b52eb644.png) ![Developer tools in Chrome showing a grid overlay.](https://web.dev/static/learn/design/micro-layouts/image/developer-tools-chrome-s-295e54e7843c5.png) Desktop browsers like Firefox and Chrome have developer tools that can show you grid lines and areas overlaid on your design.

Learn how to [inspect grid layouts](https://developer.chrome.com/docs/devtools/css/grid) in Chrome DevTools.

## Flexbox

As the name suggests, you can use [flexbox](https://web.dev/learn/css/flexbox) to make your
components flexible. You can declare which elements in your component should
have a minimum or maximum size and let the other elements flex to fit
accordingly.

In this example, the image takes up one quarter of the available space and the
text takes up the other three quarters.
But the image never gets larger than 200 pixels.  

    .media {
      display: flex;
      align-items: center;
      gap: 1em;
    }
    .media-illustration {
      flex: 1;
      max-inline-size: 200px;
    }
    .media-content {
      flex: 3;
    }

![Developer tools in Firefox showing a flexbox overlay.](https://web.dev/static/learn/design/micro-layouts/image/developer-tools-firefox-4f0d749fd4328.png) ![Developer tools in Chrome showing a flexbox overlay.](https://web.dev/static/learn/design/micro-layouts/image/developer-tools-chrome-s-49b481f837205.png) The developer tools in Firefox and Chrome can help you visualize the shape of your flexbox components.

Learn how to [inspect flexbox layouts](https://developer.chrome.com/docs/devtools/css/flexbox)
in Chrome DevTools.

## Container queries

Flexbox lets you design from the content out. You can specify the parameters of
your elements (how narrow they should get, how wide they should get) and let the
browser figure out the final implementation.

But the component itself has no awareness of its context.
It doesn't know if it's being used in the main content or in a sidebar.
This can make component layouts trickier than page layouts.
To be able to apply contextually relevant styles, your components need to know more than the size of the viewport they are inside.

With page layouts, you *do* know the width of the container because the
container is the browser viewport; media queries report the dimensions of the
page-level container.

To report the dimensions of any container, use
[container queries](https://developer.mozilla.org/docs/Web/CSS/CSS_Container_Queries).

To start, define which elements act as containers.  

    main,
    aside {
      container-type: inline-size;
    }

This means that you want to query the inline dimension. For English-language
documents, that's the horizontal axis. You're going to change styles based on
the width of the container.

If a component is inside one of those containers, you can apply styles similarly
to how you apply media queries.  

    .media-illustration {
      max-width: 200px;
      margin: auto;
    }

    @container (min-width: 25em) {
      .media {
        display: flex;
        align-items: center;
        gap: 1em;
      }

      .media-illustration {
        flex: 1;
      }

      .media-content {
        flex: 3;
      }
    }

If a media object is inside a container that's narrower than `25em`, the flexbox
styles aren't applied. The image and text appear are ordered vertically.

But, if the containing element is wider than `25em`, the image and text appear
side-by-side.

With container queries, you can style components independently. You can write
rules based on the width of the containing element; the width of the
viewport no longer matters.

![Two containers of different sizes.](https://web.dev/static/learn/design/micro-layouts/image/two-containers-different-5a460bfff7342.png)

## Combine queries

You can use media queries for the page layout and container queries for the
components within the page.

Here the overall structure of the page has a `main` element and an `aside` element.
There are media objects within both elements.  

    <body>
      <main>
         <div class="media">...</div>
         <div class="media">...</div>
      </main>
      <aside>
         <div class="media">...</div>
      </aside>
    </body>

A media query applies a grid layout to the `main` and `aside` elements when the
viewport is wider than `45em`.  

    @media (min-width: 45em) {
      body {
        display: grid;
        grid-template-columns: 3fr 1fr;
      }
    }

The container query rule for the media objects remains the same:
only apply a horizontal flexbox layout if the containing element is wider than `25em`.

![A two column layout, one wide and one narrow.
The media objects are laid out differently depending on whether they're in the wide or narrow column.](https://web.dev/static/learn/design/micro-layouts/image/a-column-layout-wide-d26ea1e0030e.png)  

Container queries are a game-changer for micro layouts.
Your components can be self-contained, independent of the browser viewport.

### Check your understanding

Test your knowledge of micro layouts.  
Grid and flexbox are both useful for micro layouts?  
True  
🎉 Correct!  
False  
Incorrect. Grid and flexbox are both very useful, even for the 'tiniest' of layouts.

Previously, you learned about page-level macro layouts. Now you know about
component-level micro layouts.

Next, you'll go deeper into the very building blocks of your content and learn
how to make your images responsive. First, you'll learn about
[responsive typography](https://web.dev/learn/design/typography).

# Macro layouts describe the larger, page-wide organization of your interface.

![A wireframe of a two column layout, next to the same layout as one column for a narrow view.](https://web.dev/static/learn/design/macro-layouts/image/a-wireframe-a-column-la-a517dae97f715.jpeg)

Before applying any layout,
you should make sure that the flow of your content makes sense.
This single column default ordering is what smaller screens will get.  

    <body>
      <header>...</header>
      <main>
        <article>...</article>
        <aside>...</aside>
      </main>
      <footer>...</footer>
    </body>

When you arrange these individual page-level components,
you're designing a macro layout: a high-level view of your page.
Using media queries, you can supply rules in CSS describing how this view should adjust to different screen sizes.

## Grid

[CSS grid](https://web.dev/learn/css/grid) is an excellent tool for applying a layout to your page.
In the example above, say you want a two-column layout once there's enough screen width available.
To apply this two-column layout once the browser is wide enough,
use a media query to define the grid styles above a specified breakpoint.  

    @media (min-width: 45em) {
      main {
        display: grid;
        grid-template-columns: 2fr 1fr;
      }
    }

**Note:** While it would make more sense to specify `min-inline-size` instead of `min-width`, logical properties don't work in media queries yet.  

## Flexbox

For this specific layout, you could also use [flexbox](https://web.dev/learn/css/flexbox).
The styles would look like this:  

    @media (min-width: 45em) {
      main {
        display: flex;
        flex-direction: row;
      }

      main article {
        flex: 2;
      }

      main aside {
        flex: 1;
      }
    }

However, the flexbox version requires more CSS.
Each column has a separate rule to describe how much space it should take up.
In the grid example, that same information is encapsulated in one rule for the containing element.

## Do you need a media query?

You might not always need to use a media query.
Media queries work fine when you're applying changes to a few elements,
but if the layout needs to be updated a lot, your media queries could get out of hand with lots of breakpoints.

Say you've got a page full of card components.
The cards are never wider than `15em`, and you want to put as many cards on one line as will fit.
You could write media queries with breakpoints of `30em`, `45em`, `60em`,
and so on, but that's quite tedious and difficult to maintain.

Instead, you can apply rules so that the cards themselves automatically take up the right amount of space.  

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
      grid-gap: 1em;
    }

You can achieve a similar layout with flexbox.
In this case, if there are not enough cards to fill the final row,
the remaining cards will stretch to fill the available space rather than lining up in columns.
If you want to line up rows and columns, then use grid.  

    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1em;
    }
    .cards .card {
      flex-basis: 15em;
      flex-grow: 1;
    }

By applying some smart rules in flexbox or grid,
it's possible to design dynamic macro layouts with minimal CSS and without any media queries.
That's less work for you---you're making the browser do the calculations instead.
To see some examples of modern CSS layouts that are fluid without requiring media queries, see
[1linelayouts.com](https://1linelayouts.glitch.me/).

### Check your understanding

Test your knowledge of macro layouts.  
Which sentence best describes macro layouts?  
Layouts that contain other layouts.  
Try again! Most layouts contain other layouts.  
When a design uses flexbox or grid.  
Try again! Neither flexbox or grid have anything specific to macro layouts.  
Low level layouts which cover small amounts of the screen.  
Try again!  
High level layouts which cover large amounts of the screen.  
🎉 Macro layouts are foundational layouts for a page, spanning large amounts of visual area, and often are adjusted with page size media queries. Macro layouts always use media queries to adapt to different screen sizes?  
True  
Try again! A macro layout is not defined by its usage of media queries.  
False  
🎉 Macro layouts may adapt to fit content, fill available space, and more, without a media query.

Now that you've got some ideas for page-level macro layouts,
turn your attention to the components within the page. This is the realm of
[micro layouts](https://web.dev/learn/design/micro-layouts).
