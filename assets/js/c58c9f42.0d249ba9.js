"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62994],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},m),{},{components:n})):r.createElement(y,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84458:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],s={title:"Creating Custom Driver"},l=void 0,c={unversionedId:"custom-driver",id:"version-4.0/custom-driver",title:"Creating Custom Driver",description:"If you want to use database that is not currently supported, you can implement your own driver.",source:"@site/versioned_docs/version-4.0/custom-driver.md",sourceDirName:".",slug:"/custom-driver",permalink:"/docs/4.0/custom-driver",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.0/custom-driver.md",tags:[],version:"4.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1640022390,formattedLastUpdatedAt:"12/20/2021",frontMatter:{title:"Creating Custom Driver"},sidebar:"version-4.0/docs",previous:{title:"Using AsyncLocalStorage",permalink:"/docs/4.0/async-local-storage"}},m=[{value:"Platform",id:"platform",children:[],level:2},{value:"SchemaHelper",id:"schemahelper",children:[],level:2},{value:"Connection",id:"connection",children:[],level:2},{value:"Driver",id:"driver",children:[],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nTo do so, you will need to design 4 classes:"),(0,a.kt)("h2",{id:"platform"},"Platform"),(0,a.kt)("p",null,"Platform is a class that provides information about available features of given driver: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Platform } from '@mikro-orm/core';\n\nexport class MyCustomPlatform extends Platform {\n  \n  protected abstract schemaHelper: MyCustomSchemaHelper;\n\n  // here you can override default settings\n  usesPivotTable(): boolean;\n  supportsTransactions(): boolean;\n  supportsSavePoints(): boolean;\n  getNamingStrategy(): { new (): NamingStrategy; };\n  getIdentifierQuoteCharacter(): string;\n  getParameterPlaceholder(index?: number): string;\n  usesReturningStatement(): boolean;\n  normalizePrimaryKey<T = number | string>(data: IPrimaryKey): T;\n  denormalizePrimaryKey(data: IPrimaryKey): IPrimaryKey;\n  getSerializedPrimaryKeyField(field: string): string;\n\n}\n")),(0,a.kt)("h2",{id:"schemahelper"},"SchemaHelper"),(0,a.kt)("p",null,"Part of platform is a ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaHelper"),", that provides information about how to build schema."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SchemaHelper } from '@mikro-orm/core';\n\nexport class MyCustomSchemaHelper extends SchemaHelper {\n  \n  // here you can override default settings\n  getIdentifierQuoteCharacter(): string;\n  getSchemaBeginning(): string;\n  getSchemaEnd(): string;\n  getSchemaTableEnd(): string;\n  getAutoIncrementStatement(meta: EntityMetadata): string;\n  getPrimaryKeySubtype(meta: EntityMetadata): string;\n  getTypeDefinition(prop: EntityProperty, types?: Record<string, string>, lengths?: Record<string, number>): string;\n  getUnsignedSuffix(prop: EntityProperty): string;\n  supportsSchemaConstraints(): boolean;\n  supportsSchemaMultiAlter(): boolean;\n  supportsSequences(): boolean;\n  quoteIdentifier(field: string): string;\n  dropTable(meta: EntityMetadata): string;\n  indexForeignKeys(): boolean;\n\n}\n")),(0,a.kt)("h2",{id:"connection"},"Connection"),(0,a.kt)("p",null,"Next part is connection wrapper, that will be responsible for querying the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Connection } from '@mikro-orm/core';\n\nexport class MyCustomConnection extends Connection {\n  \n  // implement abstract methods\n  connect(): Promise<void>;\n  isConnected(): Promise<boolean>;\n  close(force?: boolean): Promise<void>;\n  getDefaultClientUrl(): string;\n  execute(query: string, params?: any[], method?: 'all' | 'get' | 'run'): Promise<QueryResult | any | any[]>;\n\n}\n")),(0,a.kt)("h2",{id:"driver"},"Driver"),(0,a.kt)("p",null,"Last part is driver, that is responsible for using the connection to persist changes to\ndatabase. If you are building SQL driver, it might be handy to extend ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractSqlDriver"),",\nif not, extend ",(0,a.kt)("inlineCode",{parentName:"p"},"DatabaseDriver")," abstract class. "),(0,a.kt)("p",null,"If you want to have absolute control, you can implement the whole driver yourself via\n",(0,a.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver")," interface. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { DatabaseDriver } from '@mikro-orm/core';\n\nexport class MyCustomSchemaHelper extends DatabaseDriver {\n\n  // initialize connection and platform\n  protected readonly connection = new MyCustomConnection(this.config);\n  protected readonly platform = new MyCustomPlatform;\n\n  // and implement abstract methods\n  find<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, populate?: string[], orderBy?: Record<string, QueryOrder>, limit?: number, offset?: number): Promise<T[]>;\n  findOne<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | string, populate: string[]): Promise<T | null>;\n  nativeInsert<T extends AnyEntityType<T>>(entityName: string, data: EntityData<T>): Promise<QueryResult>;\n  nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | IPrimaryKey, data: EntityData<T>): Promise<QueryResult>;\n  nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | IPrimaryKey): Promise<QueryResult>;\n  count<T extends AnyEntity>(entityName: string, where: FilterQuery<T>): Promise<number>;\n\n}\n")))}p.isMDXComponent=!0}}]);