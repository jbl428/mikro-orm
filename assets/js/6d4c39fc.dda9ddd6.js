"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[336],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=r,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1167:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"Seeding"},l=void 0,d={unversionedId:"seeding",id:"seeding",title:"Seeding",description:"When initializing your application or testing it can be exhausting to create sample data for your database. The solution is to use seeding. Create factories for your entities and use them in the seed",source:"@site/docs/seeding.md",sourceDirName:".",slug:"/seeding",permalink:"/docs/next/seeding",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/seeding.md",tags:[],version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1644096774,formattedLastUpdatedAt:"2/5/2022",frontMatter:{title:"Seeding"},sidebar:"docs",previous:{title:"Migrations",permalink:"/docs/next/migrations"},next:{title:"Read Replica Connections",permalink:"/docs/next/read-connections"}},c=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Seeders",id:"seeders",children:[{value:"Using entity factories",id:"using-entity-factories",children:[],level:3},{value:"Calling additional seeders",id:"calling-additional-seeders",children:[],level:3}],level:2},{value:"Entity factories",id:"entity-factories",children:[{value:"Creating entities using factories",id:"creating-entities-using-factories",children:[{value:"Generate multiple entities",id:"generate-multiple-entities",children:[],level:4},{value:"Overriding attributes",id:"overriding-attributes",children:[],level:4}],level:3},{value:"Persisting entities",id:"persisting-entities",children:[],level:3},{value:"Factory relationships",id:"factory-relationships",children:[{value:"ManyToOne and OneToOne relations",id:"manytoone-and-onetoone-relations",children:[],level:4},{value:"OneToMany and ManyToMany",id:"onetomany-and-manytomany",children:[],level:4}],level:3}],level:2},{value:"Use with CLI",id:"use-with-cli",children:[],level:2},{value:"Use in tests",id:"use-in-tests",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When initializing your application or testing it can be exhausting to create sample data for your database. The solution is to use seeding. Create factories for your entities and use them in the seed\nscript or combine multiple seed scripts."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The seeder has a few default settings that can be changed easily through the MikroORM config. Underneath you find the configuration options with their defaults."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"MikroORM.init({\n  seeder: {\n    path: './seeders', // path to the folder with seeders\n    defaultSeeder: 'DatabaseSeeder' // default seeder class name\n  }\n});\n")),(0,o.kt)("p",null,"You can also override these default using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/configuration#using-environment-variables"},"environment variables")," ",(0,o.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_SEEDER_PATH")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_SEEDER_DEFAULT_SEEDER"),"."),(0,o.kt)("h2",{id:"seeders"},"Seeders"),(0,o.kt)("p",null,"A seeder class contains one method ",(0,o.kt)("inlineCode",{parentName:"p"},"run"),". This method is called when you use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"npx mikro-orm seeder:run"),". In the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method you define how and what data you want to insert into the\ndatabase. You can create entities using the ",(0,o.kt)("a",{parentName:"p",href:"http://mikro-orm.io/docs/entity-manager"},"EntityManager")," or you can use ",(0,o.kt)("a",{parentName:"p",href:"#using-entity-factories"},"Factories"),"."),(0,o.kt)("p",null,"You can create your own seeder classes using the following CLI command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx mikro-orm seeder:create DatabaseSeeder  # generates the class DatabaseSeeder\nnpx mikro-orm seeder:create test            # generates the class TestSeeder\nnpx mikro-orm seeder:create project-names   # generates the class ProjectNamesSeeder\n")),(0,o.kt)("p",null,"This creates a new seeder class. By default, it will be generated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"./seeders/")," directory. You can configure the directory in the config with the key ",(0,o.kt)("inlineCode",{parentName:"p"},"seeder.path")," or using\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/configuration#using-environment-variables"},"environment variable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_SEEDER_PATH"),". You are allowed to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"seeder:create")," command with a name, class name or hyphenated name."),(0,o.kt)("p",null,"As an example we will look at a very basic seeder."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," availabe in seeders will have ",(0,o.kt)("inlineCode",{parentName:"p"},"persistOnCreate"),"\nenabled, hence calling ",(0,o.kt)("inlineCode",{parentName:"p"},"em.create()")," will automatically call ",(0,o.kt)("inlineCode",{parentName:"p"},"em.persist()"),"\non the created entity. If we use entity constructor instead, we need to call\n",(0,o.kt)("inlineCode",{parentName:"p"},"em.persist()")," explicitly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./database/seeder/database.seeder.ts"',title:'"./database/seeder/database.seeder.ts"'},"import { EntityManager } from '@mikro-orm/core';\nimport { Seeder } from '@mikro-orm/seeder';\nimport { Author } from './author'\n\nexport class DatabaseSeeder extends Seeder {\n\n  async run(em: EntityManager): Promise<void> {\n    // will get persisted automatically\n    const author = em.create(Author, {\n      name: 'John Snow',\n      email: 'snow@wall.st'\n    });\n\n    // but if we would do `const author = new Author()` instead,\n    // we would need to call `em.persist(author)` explicitly.\n  }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Running a seeder from the command line or programmatically will automatically call ",(0,o.kt)("inlineCode",{parentName:"p"},"flush")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"clear")," after the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method has completed.")),(0,o.kt)("h3",{id:"using-entity-factories"},"Using entity factories"),(0,o.kt)("p",null,"Instead of specifying all the attributes for every entity, you can also use ",(0,o.kt)("a",{parentName:"p",href:"#entity-factories"},"entity factories"),". These can be used to generate large amounts of database records. Please read\nthe ",(0,o.kt)("a",{parentName:"p",href:"#entity-factories"},"documentation on how to define factories")," to learn how to define your factories."),(0,o.kt)("p",null,"As an example we will generate 10 authors."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager } from '@mikro-orm/core';\nimport { Seeder } from '@mikro-orm/seeder';\nimport { AuthorFactory } from '../factories/author.factory'\n\nexport class DatabaseSeeder extends Seeder {\n\n  async run(em: EntityManager): Promise<void> {\n    new AuthorFactory(em).make(10);\n  }\n}\n")),(0,o.kt)("h3",{id:"calling-additional-seeders"},"Calling additional seeders"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," method you can specify other seeder classes. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," method to break up the database seeder into multiple files to prevent a seeder file from becoming too large.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"call")," method requires an ",(0,o.kt)("inlineCode",{parentName:"p"},"em")," and an array of seeder classes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager } from '@mikro-orm/core';\nimport { Seeder } from '@mikro-orm/seeder';\nimport { AuthorSeeder, BookSeeder } from '../seeders'\n\nexport class DatabaseSeeder extends Seeder {\n\n  run(em: EntityManager): Promise<void> {\n    return this.call(em, [\n      AuthorSeeder,\n      BookSeeder,\n    ]);\n  }\n}\n")),(0,o.kt)("h2",{id:"entity-factories"},"Entity factories"),(0,o.kt)("p",null,"When testing you may insert entities in the database before starting a test. Instead of specifying every attribute of every entity by hand, you could also use a ",(0,o.kt)("inlineCode",{parentName:"p"},"Factory")," to define a set of default\nattributes for an entity using entity factories."),(0,o.kt)("p",null,"Lets have a look at an example factory for an ",(0,o.kt)("a",{parentName:"p",href:"http://mikro-orm.io/docs/defining-entities"},"Author entity"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Factory, Faker } from '@mikro-orm/seeder';\nimport { Author } from './entities/author.entity';\n\nexport class AuthorFactory extends Factory<Author> {\n  model = Author;\n\n  definition(faker: Faker): Partial<Author> {\n    return {\n      name: faker.person.findName(),\n      email: faker.internet.email(),\n      age: faker.random.number(18, 99),\n    };\n  }\n}\n")),(0,o.kt)("p",null,"Basically you extend the base ",(0,o.kt)("inlineCode",{parentName:"p"},"Factory")," class, define a ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," property and a ",(0,o.kt)("inlineCode",{parentName:"p"},"definition")," method. The ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," defines for which entity the factory generates entity instances. The ",(0,o.kt)("inlineCode",{parentName:"p"},"definition")," method\nreturns the default set of attribute values that should be applied when creating an entity using the factory."),(0,o.kt)("p",null,"Via the faker property, factories have access to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/faker-js/faker"},"Faker library"),", which allows you to conveniently generate various kinds of random data for testing."),(0,o.kt)("h3",{id:"creating-entities-using-factories"},"Creating entities using factories"),(0,o.kt)("p",null,"Once you defined your factories you can use them to generate entities. Simply import the factory, instantiate it and call the ",(0,o.kt)("inlineCode",{parentName:"p"},"makeOne")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = new AuthorFactory(orm.em).makeOne();\n")),(0,o.kt)("h4",{id:"generate-multiple-entities"},"Generate multiple entities"),(0,o.kt)("p",null,"Generate multiple entities by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," method. The parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," method is the number of entities you generate."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Generate 5 authors\nconst authors = new AuthorFactory(orm.em).make(5);\n")),(0,o.kt)("h4",{id:"overriding-attributes"},"Overriding attributes"),(0,o.kt)("p",null,"If you would like to override some of the default values of your factories, you may pass an object to the make method. Only the specified attributes will be replaced while the rest of the attributes\nremain set to their default values as specified by the factory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = new AuthorFactory(orm.em).make({\n  name: 'John Snow',\n});\n")),(0,o.kt)("h3",{id:"persisting-entities"},"Persisting entities"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method instantiates entities and persists them to the database using the ",(0,o.kt)("inlineCode",{parentName:"p"},"persistAndFlush")," method of the EntityManager."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Make and persist a single author\nconst author = await new AuthorFactory(orm.em).createOne();\n\n// Make and persist 5 authors\nconst authors = await new AuthorFactory(orm.em).create(5);\n")),(0,o.kt)("p",null,"You can override the default values of your factories by passing an object to the ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Make and persist a single author\nconst author = await new AuthorFactory(orm.em).createOne({\n  name: 'John Snow',\n});\n\n// Make and persist a 5 authors\nconst authors = await new AuthorFactory(orm.em).create(5, {\n  name: 'John Snow',\n});\n")),(0,o.kt)("h3",{id:"factory-relationships"},"Factory relationships"),(0,o.kt)("p",null,"It is nice to create large quantities of data for one entity, but most of the time we want to create data for multiple entities and also have relations between these. For this we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"each"),"\nmethod which can be chained on a factory. The ",(0,o.kt)("inlineCode",{parentName:"p"},"each")," method can be called with a function that transforms output entity from the factory before returning it. Lets look at some examples for the\ndifferent relations."),(0,o.kt)("h4",{id:"manytoone-and-onetoone-relations"},"ManyToOne and OneToOne relations"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const books: Book[] = new BookFactory(orm.em).each(book => {\n  book.author = new AuthorFactory(orm.em).makeOne();\n}).make(5);\n")),(0,o.kt)("h4",{id:"onetomany-and-manytomany"},"OneToMany and ManyToMany"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const books: Book[] = new BookFactory(orm.em).each(book => {\n  book.owners.set(new OwnerFactory(orm.em).make(5));\n}).make(5);\n")),(0,o.kt)("h2",{id:"use-with-cli"},"Use with CLI"),(0,o.kt)("p",null,"You may execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"seeder:run")," MikroORM CLI command to seed your database. By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"seeder:run")," command runs the ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseSeeder")," class, which may in turn invoke other seed classes. You can\nconfigure the default seeder using the key ",(0,o.kt)("inlineCode",{parentName:"p"},"seeder.defaultSeeder")," or using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/configuration#using-environment-variables"},"environment variable")," ",(0,o.kt)("inlineCode",{parentName:"p"},"MIKRO_ORM_SEEDER_DEFAULT_SEEDER"),". You can also use\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"--class")," option to specify a seeder class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npx mikro-orm seeder:run\n\nnpx mikro-orm seeder:run --class=BookSeeder\n")),(0,o.kt)("p",null,"You may also seed your database using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/migrations#using-via-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"migrate:fresh"))," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/schema-generator"},(0,o.kt)("inlineCode",{parentName:"a"},"schema:fresh"))," command in combination with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--seed")," option, which will drop all\ntables and re-run all of your migrations or generate the database based on the current entities. This command is useful for completely re-building your database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npx mikro-orm migration:fresh --seed    # will drop the database, run all migrations and the DatabaseSeeder class\n\nnpx mikro-orm schema:fresh --seed       # will recreate the database and run the DatabaseSeeder class\n")),(0,o.kt)("p",null,"If you do not want to run the ",(0,o.kt)("inlineCode",{parentName:"p"},"DatabaseSeeder")," class you can either specify what the default seeder class should be. This can be done by changing the ",(0,o.kt)("a",{parentName:"p",href:"#default-settings"},"default settings"),". Another\noption is to explicitly define the seeder class you want to run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npx mikro-orm migration:fresh --seed TestSeeder       # will drop the database, run all migrations and the TestSeeder class\n\nnpx mikro-orm schema:fresh --seed ProjectsSeeder      # will recreate the database and run the ProjectsSeeder class\n")),(0,o.kt)("h2",{id:"use-in-tests"},"Use in tests"),(0,o.kt)("p",null,"Now we know how to create seeders and factories, but how can we effectively use them in tests. We will show an example how it can be used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"beforeAll(async () => {\n  // Get seeder from MikroORM\n  const seeder = orm.getSeeder();\n\n  // Refresh the database to start clean (work in mongo too since v5)\n  await orm.getSchemaGenerator().refreshDatabase();\n\n  // Seed using a seeder defined by you\n  await seeder.seed(DatabaseSeeder);\n});\n\ntest(() => {\n  // Do tests\n});\n\nafterAll(async () => {\n  // Close connection\n  await orm.close();\n});\n")))}m.isMDXComponent=!0}}]);