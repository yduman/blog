---
title: Entering the World of MDX-Deck
date: '2018-09-21'
spoiler: An introduction to MDX-Deck
---

Let me kidnap you to the world of [MDX-Deck](https://github.com/jxnblk/mdx-deck). This project was on my radar for a while and I had the opportunity to test it for a presentation I had to make. I was really suprised how fast and easy you can generate good looking slides and how easy it is to integrate interactive elements into your presentation.

## The World of MDX

MDX is a combination of Markdown and JSX.

Anyone who got their hands dirty with Markdown should actually know that it is super-easy to generate and export documents. I'm writing myself almost everything I can with Markdown (e.g. documentation of projects, notes, summaries for college stuff, etc.).

And now we add JSX into that Markdown world, but why? The idea was to use the advantages of React components in Markdown. But since you were losing the simplicity of Markdown trying to achieve this goal, [Guillermo Rauch](https://twitter.com/rauchg) created a [proposal](https://spectrum.chat/thread/1021be59-2738-4511-aceb-c66921050b9a) and `.mdx` is born.

You can read more about MDX [here](https://mdxjs.com/).

## MDX-Deck

So now [Brent Jackson](https://twitter.com/jxnblk) created this awesome tool called MDX-Deck, in order to create presentations using MDX. Just to quote some features:

> - Write presentations in markdown
> - Import and use React components
> - Customizable themes and components
> - Zero-config CLI
> - Presenter mode
> - Speaker notes
> - Production Export
> - PDF Export

## How to use it?

Let's create a folder `Slides` where our presentation will live in and add `mdx-deck` as a dev-dependency.

```
$ mkdir Slides && cd Slides
$ yarn init
$ yarn add mdx-deck --dev
$ touch deck.mdx
```

Create a `start` script inside of `package.json` to run a local server on `localhost:8080` in watch-mode.

```json
{
  "scripts": {
    "start": "mdx-deck deck.mdx"
  }
}
```

The previous created `deck.mdx` is the file where we write our presentation. Each slide is divided by three dashes.

```javascript
# First slide

---

# Second slide

### Yadullah Duman

This is too easy!

---

import Demo from "./components/Demo"

<Demo />

---

# The End
```

And yes, we can use all features of React and Markdown. How cool is that?

## Some Features

In the repository, you can find quite a bit under [docs](https://github.com/jxnblk/mdx-deck/tree/master/docs). In the following, I just want to show some features I played with.

### Themes

MDX-Deck has some built-in [themes](https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md). Now let's ensure some syntax highlighting for our code snippets. To do that, we create a custom theme. I will create a file called `theme.js` to define my own theme.

```javascript
import { swiss } from 'mdx-deck/themes'
import style from 'react-syntax-highlighter/styles/prism/ghcolors'
import java from 'react-syntax-highlighter/languages/prism/java'
import scala from 'react-syntax-highlighter/languages/prism/scala'

export default {
  // extend a default theme
  ...swiss,
  // custom font
  font: 'Roboto, sans-serif',
  // custom colors
  colors: {
    text: 'black',
    background: 'white',
    link: 'blue',
  },
  // syntax highlighting
  prism: {
    style,
    languages: {
      java,
      scala,
    },
  },
}
```

To use your custom theme, add the following line to the top of `deck.mdx`.

```javascript
export { default as theme } from './theme'
```

### Layouts

Besides some built-in layouts like `Invert`, `Split`, `SplitRight` and `FullScreenCode`, you can write your own custom layout components which you can use in your desired slides.

```javascript
import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '100vw',
      height: '100vw',
      backgroundColor: 'darkcyan',
    }}
  >
    {children}
  </div>
)
```

In `deck.mdx`

```javascript
import MyCustomLayout from "./MyCustomLayout"

# No Custom Layout here

---

export default MyCustomLayout

# MyCustomLayout here
```

### Export

There are several ways to export your presentation. Choose your desired method and an additional script in `package.json`.

```json
{
  "scripts": {
    "start": "mdx-deck deck.mdx",
    "export-static-bundle": "mdx-deck build deck.mdx",
    "export-pdf": "mdx-deck pdf deck.mdx",
    "export-screenshot": "mdx-deck screenshot deck.mdx"
  }
}
```

### Tip

To ensure more interactivity with your code snippets, take a look at [Code Surfer](https://github.com/pomber/code-surfer). You can scroll, zoom and highlight relevant parts in your code!

## Conclusion

The proof of the pudding is in the eating. I could talk and talk more about this great tool, but in the end you have to try it yourself and see if it fits your needs.

Some reactions from Twitter:

- [Guillermo Rauch](https://twitter.com/rauchg) (ZEIT)
  - _"mdx-deck puts your deck online, exports to PDF, is version controlled and easy to write and extend. Not many usecases left for Keynote"_
- [Kent C. Dodds](https://twitter.com/kentcdodds) (PayPal)
  - _"Just used mdx-deck by @jxnblk and it's an absolute delight. I'm planning on using this for everything from now on!"_
- [Chris Sevilleja](https://twitter.com/chrisoncode) (Flutter)
  - _"Gonna make my next presenation with mdx-deck. Love the amount of control you can get for superpowered transitions/designs"_
- [Harry Wolff](https://twitter.com/hswolff) (MongoDB)
  - _"It's an incredible way to make beautiful presentations with the power of Markdown and JSX."_
