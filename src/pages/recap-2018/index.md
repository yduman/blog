---
title: My Recap of 2018
date: '2018-12-23'
spoiler: I am sharing some of my moments of 2018
---

This is the first time where I actually recap my year and write about it. So let's see what 2018 was like for me...

## React, React & React

2018 was basically the year where I just fell in love with React. I tried to learn as many things I could and tried to encourage my colleagues at work to use it.
It is just incredible how easy you can bootstrap a project and incrementally add new stuff on top of it. The API is straight forward and more advanced features are easily learned. And I think it is what the core team also cares about. Simplicity and comprehensibility. I remember [Brian Holt](https://twitter.com/holtbt?lang=de) telling on [Frontend Masters](https://frontendmasters.com/courses/complete-react-v4/course-introduction/) that when he made a rewrite of a part at Reddit in React, he went to vacation after the rewrite. In vacation, he was unreachable and the software broke, but one of the backend developers was able to understand the code by reading it and fix the software without really knowing React or JavaScript. That was the moment where he really saw the value of React and I totally agree with him. I had quiet the same experience when I wanted to learn React. Coming from the Java world, it was very easy to comprehend code snippets and writing your own logic was not hard at all. In the learning process I started to learn more and more JavaScript too. To be honest, I never had more fun while coding.

At work, I had several projects where I was able to use React. One of my biggest will be released soon. It's [Retro](https://github.com/yduman/retro). In our retrospectives we were relying on external tools and actually it would be better if we would've had some internal tool, because of privacy and other reasons. I thought it would be a great opportunity to work on a "bigger" project instead of always doing some small side projects. So I said that I'll make it happen and now we are close to an MVP release.

Another big project was for one of our customers. They wanted a smartphone app to query and display some data. I proposed them to make a [Progressive Web App](https://developers.google.com/web/progressive-web-apps/), since Create React App offered this feature already. By the way, you should know that the customer was relying heavily on oldschool tooling, so React was like a really fancy thing for them. I worked on that project alone and I could provide them a working prototype after a week. They couldn't believe the development speed and consequently they held a meeting to overthink their blueprint strategies. So all in all React was a proving technology for me and I believe it still will be in 2019.

## Diving deeper into JavaScript

After getting my hands dirty with React, I wanted to learn more about JavaScript. I made a subscription on Frontend Masters and took some courses. Why Frontend Masters you ask? Because of the teachers. They are, in my opinion, well known and key figures in the world of frontend development. To dive deep into JavaScript, I would totally recommend the courses of [Will Sentance](https://frontendmasters.com/teachers/will-sentance/) and [Kyle Simpson](https://frontendmasters.com/teachers/kyle-simpson/). They explain concepts like Scoping, Hoisting, Execution Context, Functional Programming, Closures, Asynchronous JavaScript, Object-Oriented JavaScript, etc. very very good and their style of teaching is remarkable. This gave me the foundation to think more about the internals of JavaScript and to think more about complex stuff than usual.

## Scala and Static Code Analysis

Ultimately, I found a suiting Bachelor thesis for me. The first one I found and worked a bit on was not so good. Lots of C++ and ugly code, yuck. The second one, that I'm now working on, is really challenging but fun at the same time. It's about generic bug detection using static code analysis. Like SpotBugs (formerly FindBugs), but more generic. The analyses are written in Scala and Scala itself is such an elegant language. I thought I'd have problems learning Scala, since I know it is maybe one of the hardest languages to learn, but I had good fundamentals by knowing Java, JavaScript and the concepts of functional programming already. Furthermore, the framework I am using ([OPAL](http://www.opal-project.de/)) provides a really great API to quickly implement analyses.

So in the process, I had to search for bugs first. Bugs that were checked in, even after going through the CI pipeline. After hours of searching in GitHub Issues, I found quite a bit of interesting bugs. The next step was to think about how these bugs occured in a generic way, something like abstract interpretation. Finally, I discussed the bugs with my professor. I loved the discussions, because they were always somehow philosophical. When I had all information that I needed, I started to implement the analysis and tested it against the JDK and sometimes you found really interesting edge cases to think about!

Now one analysis is already finished and next year I should start to write some pages for my thesis. I think I've chosen a great topic.

## Socials

I am grateful to have the opportunity to work with great colleagues at MaibornWolff! Everyone cares about good and clean code. Discussions and solving problems are always interesting and you can party hard with them! I hope to spend more years together with them.

Besides work, I tried to focus my social media, especially Twitter, to more topics like frontend development and open source development. To sum it up, best decision ever! I find daily interesting stuff to read and learn about! You get to know more people and their contribution to the community. Really worth it!

## Thinking about the Future

I believe most of us are thinking about their future more at the end of a year. We are making New Year's resolutions that we just never do or we do the same stuff everyday. Since I am close to graduating I am thinking more about my future. Being a software engineer, who loves to code, who loves problem solving, who wants to be an expert in his field, but who will never love math. I want to meet interesting and friendly people, gain more knowledge about interesting topics, try to teach people coding and try to make the world a better place. Sometimes I have problems and I doubt my future. Sometimes I think about it too much. In the end, however, I always come back to this speech by Steve Jobs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/UF8uR6Z6KLc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you didn't found it yet, find your passion, find something you love to do and stick with it! I already found it.

With this in mind, I wish you a happy new year!
