"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2414],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,b=u["".concat(d,".").concat(c)]||u[c]||p[c]||s;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3117),r=n(7294),s=n(2389),l=n(9443);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=n(6681),o=n(6010),m="tabItem_1uMI";function p(e){var t,n,s,l=e.lazy,p=e.block,u=e.defaultValue,c=e.values,b=e.groupId,y=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,d.duplicates)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===u?u:null!=(t=null!=u?u:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=f[0])?void 0:s.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),E=v.tabGroupChoices,x=v.setTabGroupChoices,T=(0,r.useState)(k),N=T[0],A=T[1],w=[],P=(0,d.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=b){var C=E[b];null!=C&&C!==N&&h.some((function(e){return e.value===C}))&&A(C)}var I=function(e){var t=e.currentTarget,n=w.indexOf(t),a=h[n].value;a!==N&&(P(t),A(a),null!=b&&x(b,a))},O=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=w.indexOf(e.currentTarget)+1;n=w[a]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},y)},h.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return w.push(e)},onKeyDown:O,onFocus:I,onClick:I},s,{className:(0,o.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function u(e){var t=(0,s.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},3357:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return u},default:function(){return b}});var a=n(3117),r=n(102),s=(n(7294),n(3905)),l=n(6396),i=n(8215),d=["components"],o={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},m=void 0,p={unversionedId:"embeddables",id:"embeddables",title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/docs/embeddables.md",sourceDirName:".",slug:"/embeddables",permalink:"/docs/next/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/embeddables.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1644096774,formattedLastUpdatedAt:"2/5/2022",frontMatter:{title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},sidebar:"docs",previous:{title:"Custom Types",permalink:"/docs/next/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/next/entity-schema"}},u=[{value:"Initializing embeddables",id:"initializing-embeddables",children:[],level:2},{value:"Column Prefixing",id:"column-prefixing",children:[],level:2},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",children:[],level:2},{value:"Array of embeddables",id:"array-of-embeddables",children:[],level:2},{value:"Nested embeddables",id:"nested-embeddables",children:[],level:2},{value:"Polymorphic embeddables",id:"polymorphic-embeddables",children:[],level:2}],c={toc:u};function b(e){var t=e.components,n=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),(0,s.kt)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),(0,s.kt)("p",null,"Embeddables can contain properties with basic ",(0,s.kt)("inlineCode",{parentName:"p"},"@Property()")," mapping, nested\n",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," properties or arrays of ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," properties. From version\n5.0 we can also use ",(0,s.kt)("inlineCode",{parentName:"p"},"@ManyToOne()")," properties."),(0,s.kt)("p",null,"For the purposes of this tutorial, we will assume that you have a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Embeddable()\nexport class Address {\n\n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Embedded(() => Address)\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Embeddable()\nexport class Address {\n\n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Embedded()\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntitySchema } from '@mikro-orm/core';\n\nexport class Address {\n  street!: string;\n  postalCode!: string;\n  city!: string;\n  country!: string;\n}\n\nexport class User {\n  id!: number;\n  address!: Address;\n}\n\nexport const UserSchema = new EntitySchema({\n  class: User,\n  properties: {\n    id: { primary: true, type: 'number' },\n    address: { reference: 'embedded', entity: 'Address' },\n  },\n});\n\nexport const AddressSchema = new EntitySchema({\n  class: Address,\n  embeddable: true,\n  properties: {\n    street: { type: 'string' },\n    postalCode: { type: 'string' },\n    city: { type: 'string' },\n    country: { type: 'string' },\n  },\n});\n")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),(0,s.kt)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),(0,s.kt)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),(0,s.kt)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded(() => Address)\naddress = new Address();\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded()\naddress = new Address();\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', onCreate: () => new Address() },\n")))),(0,s.kt)("h2",{id:"column-prefixing"},"Column Prefixing"),(0,s.kt)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),(0,s.kt)("p",null,"Following the example above, your columns would be named as ",(0,s.kt)("inlineCode",{parentName:"p"},"address_street"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),(0,s.kt)("p",null,"You can change this behaviour to meet your needs by changing the ",(0,s.kt)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),(0,s.kt)("p",null,"The following example shows you how to set your prefix to ",(0,s.kt)("inlineCode",{parentName:"p"},"myPrefix_"),":"),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Entity()\nexport class User {\n\n  @Embedded(() => Address, { prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', prefix: 'myPrefix_' },\n")))),(0,s.kt)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",(0,s.kt)("inlineCode",{parentName:"p"},"prefix: false"),":"),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ entity: () => Address, prefix: false })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ prefix: false })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"@Entity()',title:'"./entities/User.ts"@Entity()'},"address: { reference: 'embedded', entity: 'Address', prefix: false },\n")))),(0,s.kt)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),(0,s.kt)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ entity: () => Address, object: true })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ object: true })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', object: true },\n")))),(0,s.kt)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,s.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")),(0,s.kt)("h2",{id:"array-of-embeddables"},"Array of embeddables"),(0,s.kt)("p",null,"Embedded arrays are always stored as JSON. It is possible to use them inside\nnested embeddables. "),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded(() => Address, { array: true })\naddresses: Address[] = [];\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded()\naddresses: Address[] = [];\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', onCreate: () => [], array: true },\n")))),(0,s.kt)("h2",{id:"nested-embeddables"},"Nested embeddables"),(0,s.kt)("p",null,"Starting with v4.4, we can also nest embeddables, both in inline mode and object mode:"),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => Profile, { object: true, nullable: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nexport class Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded(() => Identity)\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nexport class Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded({ object: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nexport class Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded()\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nexport class Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntitySchema } from '@mikro-orm/core';\n\nexport class User {\n  id!: number;\n  name!: string;\n  profile?: Profile;\n}\n\nexport class Profile {\n  constructor(\n    public username: string,\n    public identity: Identity,\n  ) {}\n}\n\nexport class Identity {\n  constructor(public email: string) {}\n}\n\nexport const UserSchema = new EntitySchema({\n  class: User,\n  properties: {\n    id: { primary: true, type: 'number' },\n    name: { type: 'string' },\n    address: { reference: 'embedded', entity: 'Address' },\n  },\n});\n\nexport const ProfileSchema = new EntitySchema({\n  class: Profile,\n  embeddable: true,\n  properties: {\n    username: { type: 'string' },\n    identity: { reference: 'embedded', entity: 'Identity' },\n  },\n});\n\nexport const IdentitySchema = new EntitySchema({\n  class: Identity,\n  embeddable: true,\n  properties: {\n    email: { type: 'string' },\n  },\n});\n")))),(0,s.kt)("h2",{id:"polymorphic-embeddables"},"Polymorphic embeddables"),(0,s.kt)("p",null,"Since v5, it is also possible to use polymorphic embeddables. This means we\ncan define multiple classes for a single embedded property and the right one\nwill be used based on the discriminator column, similar to how single table\ninheritance work."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';\n\nexport enum AnimalType {\n  CAT,\n  DOG,\n}\n\n@Embeddable({ abstract: true, discriminatorColumn: 'type' })\nexport abstract class Animal {\n\n  @Enum(() => AnimalType)\n  type!: AnimalType;\n\n  @Property()\n  name!: string;\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.CAT })\nexport class Cat extends Animal {\n\n  @Property({ nullable: true })\n  canMeow?: boolean = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.DOG })\nexport class Dog extends Animal {\n\n  @Property({ nullable: true })\n  canBark?: boolean = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n\n}\n\n@Entity()\nexport class Owner {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => [Cat, Dog])\n  pet!: Cat | Dog;\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';\n\nexport enum AnimalType {\n  CAT,\n  DOG,\n}\n\n@Embeddable({ abstract: true, discriminatorColumn: 'type' })\nexport abstract class Animal {\n\n  @Enum()\n  type!: AnimalType;\n\n  @Property()\n  name!: string;\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.CAT })\nexport class Cat extends Animal {\n\n  @Property()\n  canMeow? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.DOG })\nexport class Dog extends Animal {\n\n  @Property()\n  canBark? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n\n}\n\n@Entity()\nexport class Owner {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded()\n  pet!: Cat | Dog;\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntitySchema } from '@mikro-orm/core';\n\nexport enum AnimalType {\n  CAT,\n  DOG,\n}\n\nexport abstract class Animal {\n  type!: AnimalType;\n  name!: string;\n}\n\nexport class Cat extends Animal {\n  canMeow? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n}\n\nexport class Dog extends Animal {\n  canBark? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n}\n\n@Entity()\nexport class Owner {\n  id!: number;\n  name!: string;\n  pet!: Cat | Dog;\n}\n\nexport const AnimalSchema = new EntitySchema({\n  class: Animal,\n  embeddable: true,\n  abstract: true,\n  discriminatorColumn: 'type',\n  properties: {\n    username: { type: 'string' },\n    identity: { reference: 'embedded', entity: 'Identity' },\n  },\n});\n\nexport const CatSchema = new EntitySchema({\n  class: Cat,\n  embeddable: true,\n  extends: 'Animal',\n  discriminatorValue: AnimalType.CAT,\n  properties: {\n    canMeow: { type: 'boolean', nullable: true },\n  },\n});\n\nexport const DogSchema = new EntitySchema({\n  class: Dog,\n  embeddable: true,\n  extends: 'Animal',\n  discriminatorValue: AnimalType.DOG,\n  properties: {\n    canBark: { type: 'boolean', nullable: true },\n  },\n});\n\nexport const OwnerSchema = new EntitySchema({\n  class: Owner,\n  properties: {\n    id: { primary: true, type: 'number' },\n    name: { type: 'string' },\n    address: { reference: 'embedded', entity: 'Cat | Dog' },\n  },\n});\n")))))}b.isMDXComponent=!0}}]);