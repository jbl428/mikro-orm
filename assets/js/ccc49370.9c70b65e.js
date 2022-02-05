"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6103],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(a),p=r,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return a?n.createElement(g,i(i({ref:t},m),{},{components:a})):n.createElement(g,i({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8665:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(102),r=a(7294),l=a(6010),i=a(4446),o=a(9960),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",g=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.default,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var f=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,f),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&r.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(7294),r=a(6010),l=a(3905),i=a(5999),o=a(9960),s=a(4996),c=a(6681),m=a(7707),u=a(6753),d="blogPostTitle_GeHD",p="blogPostData_291c",g="blogPostDetailsFull_3kfx",v=a(62),f="image_1yU8";var b=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.default,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:f,src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.default,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},h="authorCol_1R69";function E(e){var t=e.authors,a=e.assets;return 0===t.length?null:n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,r.Z)("col col--6",h),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var N=function(e){var t,a,f,b,h=(f=(0,c.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),N=(0,s.C)().withBaseUrl,_=e.children,y=e.frontMatter,k=e.assets,P=e.metadata,Z=e.truncated,O=e.isBlogPostPage,T=void 0!==O&&O,C=P.date,w=P.formattedDate,x=P.permalink,L=P.tags,j=P.readingTime,I=P.title,H=P.editUrl,A=P.authors,M=null!=(t=k.image)?t:y.image,U=!T&&Z,R=L.length>0;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(b=T?"h1":"h2",n.createElement("header",null,n.createElement(b,{className:d,itemProp:"headline"},T?I:n.createElement(o.default,{itemProp:"url",to:x},I)),n.createElement("div",{className:(0,r.Z)(p,"margin-vert--md")},n.createElement("time",{dateTime:C,itemProp:"datePublished"},w),void 0!==j&&n.createElement(n.Fragment,null," \xb7 ",h(j))),n.createElement(E,{authors:A,assets:k}))),M&&n.createElement("meta",{itemProp:"image",content:N(M,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:m.default},_)),(R||Z)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[g]=T,a))},R&&n.createElement("div",{className:(0,r.Z)("col",{"col--9":U})},n.createElement(v.Z,{tags:L})),T&&H&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:H})),U&&n.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":R})},n.createElement(o.default,{to:P.permalink,"aria-label":"Read more about "+I},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(1217),l=a(8665),i=a(8561),o=a(5999),s=a(9960);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(s.default,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(s.default,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(6681),u=a(1575);var d=function(e){var t,a=e.content,o=e.sidebar,s=a.frontMatter,d=a.assets,p=a.metadata,g=p.title,v=p.description,f=p.nextItem,b=p.prevItem,h=p.date,E=p.tags,N=p.authors,_=s.hide_table_of_contents,y=s.keywords,k=s.toc_min_heading_level,P=s.toc_max_heading_level,Z=null!=(t=d.image)?t:s.image;return n.createElement(l.Z,{wrapperClassName:m.ThemeClassNames.wrapper.blogPages,pageClassName:m.ThemeClassNames.page.blogPostPage,sidebar:o,toc:!_&&a.toc&&a.toc.length>0?n.createElement(u.default,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:P}):void 0},n.createElement(r.default,{title:g,description:v,keywords:y,image:Z},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:h}),N.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:N.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.createElement(i.Z,{frontMatter:s,assets:d,metadata:p,isBlogPostPage:!0},n.createElement(a,null)),(f||b)&&n.createElement(c,{nextItem:f,prevItem:b}))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(5999),l=a(3117),i=a(102),o=a(6010),s="iconEdit_2_ui",c=["className"];var m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(6681);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.ThemeClassNames.common.editThisPage},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1575:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(3117),r=a(102),l=a(7294),i=a(6010),o=a(5002),s="tableOfContents_35-E",c=["className"];var m=function(e){var t=e.className,a=(0,r.Z)(e,c);return l.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},l.createElement(o.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),r=a(102),l=a(7294),i=a(6681),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,n=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,p=void 0===d?void 0:d,g=e.minHeadingLevel,v=e.maxHeadingLevel,f=(0,r.Z)(e,o),b=(0,i.useThemeConfig)(),h=null!=g?g:b.tableOfContents.minHeadingLevel,E=null!=v?v:b.tableOfContents.maxHeadingLevel,N=(0,i.useTOCFilter)({toc:t,minHeadingLevel:h,maxHeadingLevel:E}),_=(0,l.useMemo)((function(){if(u&&p)return{linkClassName:u,linkActiveClassName:p,minHeadingLevel:h,maxHeadingLevel:E}}),[u,p,h,E]);return(0,i.useTOCHighlight)(_),l.createElement(s,(0,n.Z)({toc:N,className:c,linkClassName:u},f))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(9960),i="tag_1Okp",o="tagRegular_3MiF",s="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,m=e.count;return n.createElement(l.default,{href:a,className:(0,r.Z)(i,(t={},t[o]=!m,t[s]=m,t))},c,m&&n.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(5999),i=a(7774),o="tags_2ga9",s="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:s},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);