"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{4384:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var n=a(7294),l=a(6010),i=a(3783),s=a(3295),r=a(2263),o=a(9960),c=a(5999),d=a(907),m=a(6681);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.default,{to:a,onClick:l},n.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){var t,a=e.className,i=e.versionMetadata,s=(0,r.default)().siteConfig.title,o=(0,d.useActivePlugin)({failfast:!0}).pluginId,c=(0,m.useDocsPreferredVersion)(o).savePreferredVersionName,u=(0,d.useDocVersionSuggestions)(o),g=u.latestDocSuggestion,f=u.latestVersionSuggestion,p=null!=g?g:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.ThemeClassNames.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:f.label,to:p.path,onClick:function(){return c(f.name)}})))}function f(e){var t=e.className,a=(0,m.useDocsVersion)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}var p=a(7597),E=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.ThemeClassNames.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var C=a(6753),_=a(62),L="lastUpdated_13-_";function T(e){return n.createElement("div",{className:(0,l.Z)(m.ThemeClassNames.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,e)))}function Z(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.ThemeClassNames.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(C.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L)},(a||i)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:i})))}function U(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,r=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||r);return c||d?n.createElement("footer",{className:(0,l.Z)(m.ThemeClassNames.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(T,{tags:o}),d&&n.createElement(Z,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:s})):null}var y=a(1575),H=a(1074),w=a(9649),A="docItemContainer_33ec",x="docItemCol_3FnS",M="tocMobile_3Hoh";function V(e){var t,a=e.content,r=a.metadata,o=a.frontMatter,c=o.image,d=o.keywords,u=o.hide_title,v=o.hide_table_of_contents,h=o.toc_min_heading_level,g=o.toc_max_heading_level,b=r.description,N=r.title,k=!u&&void 0===a.contentTitle,C=(0,i.default)(),_=!v&&a.toc&&a.toc.length>0,L=_&&("desktop"===C||"ssr"===C);return n.createElement(n.Fragment,null,n.createElement(E.default,{title:N,description:b,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[x]=!v,t))},n.createElement(f,null),n.createElement("div",{className:A},n.createElement("article",null,n.createElement(p.default,null),_&&n.createElement(H.default,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:g,className:(0,l.Z)(m.ThemeClassNames.docs.docTocMobile,M)}),n.createElement("div",{className:(0,l.Z)(m.ThemeClassNames.docs.docMarkdown,"markdown")},k&&n.createElement(w.MainHeading,null,N),n.createElement(a,null)),n.createElement(U,e)),n.createElement(s.default,{previous:r.previous,next:r.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(y.default,{toc:a.toc,minHeadingLevel:h,maxHeadingLevel:g,className:m.ThemeClassNames.docs.docTocDesktop}))))}},3295:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),l=a(5999),i=a(6010),s=a(9960);var r=function(e){var t=e.navLink,a=e.next;return n.createElement(s.default,{className:(0,i.Z)("pagination-nav__link"),to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},a?n.createElement(l.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"):n.createElement(l.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},t.title))};var o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r,{navLink:t})),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r,{navLink:a,next:!0})))}},7597:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),l=a(6681),i=a(6010);function s(e){var t=e.className,a=(0,l.useDocsVersion)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,l.ThemeClassNames.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5999),i=a(3117),s=a(102),r=a(6010),o="iconEdit_2_ui",c=["className"];var d=function(e){var t=e.className,a=(0,s.Z)(e,c);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(6681);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.ThemeClassNames.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:function(e,t,a){a.r(t),a.d(t,{MainHeading:function(){return u},default:function(){return v}});var n=a(102),l=a(3117),i=a(7294),s=a(6010),r=a(5999),o=a(6681),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),h=(0,o.useThemeConfig)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,s.Z)("anchor",(a={},a[d]=h,a[c]=!h,a)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},1575:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(3117),l=a(102),i=a(7294),s=a(6010),r=a(5002),o="tableOfContents_35-E",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,s.Z)(o,"thin-scrollbar",t)},i.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},1074:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=a(6010),i=a(5999),s=a(6681),r="tocCollapsible_1PrD",o="tocCollapsibleButton_2O1e",c="tocCollapsibleContent_2Ydz",d="tocCollapsibleExpanded_3GYr",m=a(5002);function u(e){var t,a=e.toc,u=e.className,v=e.minHeadingLevel,h=e.maxHeadingLevel,g=(0,s.useCollapsible)({initialState:!0}),f=g.collapsed,p=g.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(r,(t={},t[d]=!f,t),u)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",o),onClick:p},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(s.Collapsible,{lazy:!0,className:c,collapsed:f},n.createElement(m.Z,{toc:a,minHeadingLevel:v,maxHeadingLevel:h})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(3117),l=a(102),i=a(7294),s=a(6681),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,h=e.minHeadingLevel,g=e.maxHeadingLevel,f=(0,l.Z)(e,r),p=(0,s.useThemeConfig)(),E=null!=h?h:p.tableOfContents.minHeadingLevel,b=null!=g?g:p.tableOfContents.maxHeadingLevel,N=(0,s.useTOCFilter)({toc:t,minHeadingLevel:E,maxHeadingLevel:b}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:b}}),[m,v,E,b]);return(0,s.useTOCHighlight)(k),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},f))}},7774:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(9960),s="tag_1Okp",r="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(i.default,{href:a,className:(0,l.Z)(s,(t={},t[r]=!d,t[o]=d,t))},c,d&&n.createElement("span",null,d))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(5999),s=a(7774),r="tags_2ga9",o="tag_11ep";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(r,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);