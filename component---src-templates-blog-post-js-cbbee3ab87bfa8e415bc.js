(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});n(38);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(159),c=n.n(l),u=n(145),s=n(161),d=n.n(s),m=n(156),p=n(158),f=n(144),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=d()(this.props,"data.site.siteMetadata.title"),n=e.excerpt,a=this.props.pageContext,r=a.previous,o=a.next;return i.a.createElement(p.a,{location:this.props.location},i.a.createElement(c.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:e.frontmatter.title+" | "+t}),i.a.createElement("h1",null,e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),i.a.createElement(m.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(u.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,o&&i.a.createElement(u.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →"))))},t}(i.a.Component);t.default=h;var g="3804820323"},144:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return u});var a=n(167),r=n.n(a),o=n(168),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,u=l.scale},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=n(143),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var u=n(27);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(146),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(40);n.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){var a;e.exports=(a=n(151))&&a.default||a},151:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),l=n(56),c=n(1),u=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},156:function(e,t,n){"use strict";var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=(n(165),n(166),n(157)),c=n.n(l),u=n(144),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},i.a.createElement("img",{src:c.a,alt:"Kyle Mathews",style:{marginRight:Object(u.a)(.5),marginBottom:0,width:Object(u.a)(2),height:Object(u.a)(2)}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Yadullah Duman"),". I love coffee, code and games. Currently a computer science student at TU Darmstadt and modernizing legacy software at MaibornWolff."," ",i.a.createElement("a",{href:"https://twitter.com/proxyduman"},"Follow me on Twitter")))},t}(i.a.Component);t.a=s},157:function(e,t,n){e.exports=n.p+"static/profile-pic-8735b88d5ede7bf8adfbe2d347d5ba82.png"},158:function(e,t,n){"use strict";n(38);var a=n(8),r=n.n(a),o=n(0),i=n.n(o),l=n(145),c=n(144),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Yadullah Duman Blog")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},i.a.createElement(l.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"Yadullah Duman Blog")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,a)},t}(i.a.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-cbbee3ab87bfa8e415bc.js.map