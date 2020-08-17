---
title: 'rmby - A Node.js library for removing files asynchronously with a fluent interface'
date: '2020-08-17'
spoiler: File removal was never easier before!
---

Recently, I released version 1.0 of my first Node.js library called [rmby](https://www.npmjs.com/package/rmby). In this post, I want to explain what it is, what it does and how you can use it. On the bottom of this post you will find the respective links. Enjoy ❤️

## What is rmby?

rmby ("remove by") is a zero-dependency Node.js library for removing files asynchronously on a given directory by certain filter criteria's. It provides a [fluent interface](https://martinfowler.com/bliki/FluentInterface.html) that guides the user when creating the remove query.

## Why rmby?

In one of my side projects I had the use case where I needed to remove files on a directory that were older than X hours with a cronjob. Of course the first thing you do is look for libraries. I found one, but it only supported synchronous removal and I had to provide the time in minutes instead of hours.

I mean it did the job, but somehow I felt like I could easily develop this natively by myself and it would also run asynchronously. So, I implemented a version that did the job asynchronously and I could also provide the amount of hours. Neat!

Then, I had the idea that you could easily extend this behavior by more filter criteria's. Why not remove it by minutes, or by seconds, or by names? Since I was always curious about library development in Node.js, I thought why not give it a shot and provide this functionality for everyone else?

So I began coding...

## Usage

In order to use rmby, install it with NPM or Yarn.

```bash
$ npm i --save rmby
$ yarn add rmby
```

And then import it in your Node.js project.

```js
// JS
const { RemoveFiles } = require('rmby')

// TS
import { RemoveFiles } from 'rmby'
```

In the section below you can see on how to form your remove queries.

## The API

rmby follows the pattern of a fluent interface. With this technique you kind of define a grammar for your API. Every chain in the method has a rule on what to call next. This prevents incorrect usage of the API and guides the user through the method chain with code-completion tools like IntelliSense. In order to execute the removal, you need to call the `run(): Promise<string[]>` method on the end of your chain, which will return the file paths that were removed upon termination.

### Remove By Time

Files can be removed by a time difference in milliseconds, seconds, minutes or hours. The time difference is always checked against the current time.

```js
new RemoveFiles().from('/some/dir').byTime().inMilliseconds().olderThan(1200).run()
new RemoveFiles().from('/some/dir').byTime().inSeconds().olderThan(90).run()
new RemoveFiles().from('/some/dir').byTime().inMinutes().olderThan(150).run()
new RemoveFiles().from('/some/dir').byTime().inHours().olderThan(18).run()
```

### Remove By Name

Files can be removed regarding its name without considering the file extension. You can remove files that match exactly, start with, end with, or include the name that you provide.

```js
new RemoveFiles().from('/some/dir').byName().thatEqualsTo('index').run()
new RemoveFiles().from('/some/dir').byName().thatStartsWith('ind').run()
new RemoveFiles().from('/some/dir').byName().thatEndsWith('dex').run()
new RemoveFiles().from('/some/dir').byName().thatIncludes('nde').run()
```

### Remove By Extension

Files can be removed regarding their file extension. You can remove files that match exactly with the extension you provide.

```js
new RemoveFiles().from('/some/dir').byExtension('.log').run()
```

### Remove By Combination

Files can be removed by combining the available filters. Therefore you can create more specific filters for your use case.

```js
new RemoveFiles()
  .from('/some/dir')
  .byName()
  .thatStartsWith('app')
  .and()
  .byExtension('.log')
  .and()
  .byTime()
  .inHours()
  .olderThan(24)
  .run()
```

## The Future

I already plan to support more filters and also another class that removes recursively in deep nested directories, since the library currently only focuses on the context of the given directory.

### Links

GitHub: https://github.com/yduman/rmby <br>
NPM: https://www.npmjs.com/package/rmby
