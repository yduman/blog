(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return h});n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(146),c=n(164),u=n.n(c),s=n(158),d=n(160),m=n(161),p=n(163),f=n(147),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.markdownRemark,e=u()(this.props,"data.site.siteMetadata.title"),n=this.props.pageContext,a=n.previous,r=n.next;return o.a.createElement(d.a,{location:this.props.location,title:e},o.a.createElement(m.a,{title:t.frontmatter.title,description:t.frontmatter.spoiler,slug:t.fields.slug}),o.a.createElement("h1",null,t.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},t.frontmatter.date," • "+Object(p.a)(t.timeToRead)),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement(s.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,a&&o.a.createElement(l.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(l.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))},e}(o.a.Component);e.default=g;var h="827703167"},146:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(145),c=n.n(l);n.d(e,"Link",function(){return c.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var u=n(29);n.d(e,"waitForRouteChange",function(){return u.c});var s=n(148),d=n.n(s);n.d(e,"PageRenderer",function(){return d.a});var m=n(39);n.d(e,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return u});var a=n(170),r=n.n(a),i=n(171),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var l=new r.a(o.a);var c=l.rhythm,u=l.scale},148:function(t,e,n){var a;t.exports=(a=n(152))&&a.default||a},152:function(t,e,n){"use strict";n.r(e);n(38);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(57),c=n(1),u=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},158:function(t,e,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=(n(168),n(169),n(159)),c=n.n(l),u=n(147),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},o.a.createElement("img",{src:c.a,alt:"Yadullah Duman",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),o.a.createElement("p",{style:{maxWidth:310}},"Written by"," ",o.a.createElement("a",{href:"https://mobile.twitter.com/proxyduman"},"Yadullah Duman"),"."," ","  JavaScript and Clean Code enthusiast."))},e}(o.a.Component);e.a=s},159:function(t,e,n){t.exports=n.p+"static/profile-pic-8735b88d5ede7bf8adfbe2d347d5ba82.png"},160:function(t,e,n){"use strict";n(38);var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(146),c=n(147),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children;return t="/blog/"===n.pathname?o.a.createElement("h1",{style:Object.assign({},Object(c.b)(1),{marginBottom:Object(c.a)(1.5),marginTop:0})},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},o.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},t,r)},e}(o.a.Component);e.a=u},161:function(t,e,n){"use strict";n(38);var a=n(162),r=n(0),i=n.n(r),o=n(172),l=n.n(o),c=n(4),u=n.n(c),s=n(146),d="3236765318";function m(t){var e=t.meta,n=t.image,r=t.title,o=t.description,c=t.slug;return i.a.createElement(s.StaticQuery,{query:d,render:function(t){var a=t.site.siteMetadata,u=o||a.description,s=n?a.siteUrl+"/"+n:null,d=""+a.siteUrl+c;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:"en"}},r?{titleTemplate:"%s - "+a.title,title:r}:{title:a.title},{meta:[{name:"description",content:u},{property:"og:url",content:d},{property:"og:title",content:r||a.title},{name:"og:description",content:u},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:u}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(e)}))},data:a})}m.defaultProps={meta:[],title:"",slug:""},m.propTypes={description:u.a.string,image:u.a.string,meta:u.a.array,slug:u.a.string,title:u.a.string.isRequired},e.a=m},162:function(t){t.exports={data:{site:{siteMetadata:{title:"Blog of Yadullah Duman",author:"Yadullah Duman",description:"Personal Blog of Yadullah Duman, a JavaScript and Clean Code enthusiast.",siteUrl:"https://yduman.github.io",social:{twitter:"@proxyduman"}}}}}},163:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(174);function a(t){var e=Math.round(t/5);return new Array(e||1).fill("☕️").join("")+" "+t+" min read"}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-65bec1a1d6a5be0be3e2.js.map