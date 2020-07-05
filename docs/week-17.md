![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-17.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Planning.

| Activities                         | Finalized |
| :--------------------------------- | :-------: |
| Defining the Sanity desk structure |    ✅     |
| Defining the Sanity schemas        |    ✅     |

But first, let's look what the team has been up to this week.

# Teamwork

Last week has been quite productive for me and the rest of the team. This week went well too, as Bo finished the logo and Wenyi started working on the lo-fi prototype for the website. I was very happy with the progression on their part as it made sure I could focus on my activities this week as well.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-17-trello.jpg)

We also had a feedback moment planned in to look at the logo designs from Bo and discuss the lo-fi prototype that Wenyi made. These feedback moments help everybody to rekindle their thoughts and work together to get the best solution.

## Planning

As with any project, creating and sticking to a planning is essential when you are working with a deadline. In this section I am going to reflect on the progression made by myself and the team.

During this week, week 17, everybody managed to keep up with the planning we made last week. Wenyi did decide to do the lo-fi prototypes this week instead of in week 18, to make sure week 18 is reserved for the hi-fi prototypes.

We're still right on schedule.

# My activities

Of course, I haven't been standing still during this week's activities. Let's take a look at everything I have done this week.

## Defining the Sanity desk structure

In week 16 I have done a lot of setting up. Setting up the repository, Next.js and Sanity. However, with all that setup I saw that a lot is still missing. This week I have worked on Sanity's configuration.

I wanted to make sure that the front end studio is ready for the team, and that they can start entering their own data, such as the blog posts. Before we dive deep into the _desk structure_ of the studio, let's take a look at it's current state:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/sanity-first-run.jpg)
_Cricket noises..._

Time to fix the vast emptiness of the studio. To do this, we will need to first understand what the desk structure really is. You can see it as a way to define the lists and list items within the studio desk. So, how does this work?

Within Sanity, you will need to declare the different _parts_ that build up the studio. One of them is `@sanity/desk-tool`. It's installed in the base project already, but for us to be able to use it, I need to tell Sanity to include it in the `sanity.json` file:

```json
// sanity.json

// other parts
{
    "name": "part:@sanity/desk-tool/structure",
    "path": "./deskStructure.js"
}
// other parts
```

You will see that it refers to `deskStructure.js`, a file I have created in the root of the Sanity folder. It contains the complete structure of the desk, with all the lists and list items. Let me elaborate on how I built that. Here's the starting version of that file:

```javascript
// deskStructure.js

import S from "@sanity/desk-tool/structure-builder";

// icons
import pagesIcon from "react-icons/lib/md/book";

export default () =>
    S.list()
        .title("Have a wonderful day!")
        .items([
            // First pane
            S.listItem()
                .title("Portfolios")
                .icon(pagesIcon)
                .child(
                    // Second pane
                    S.list()
                        .title("All portfolios")
                        .items([
                            // Bo's page
                            S.listItem()
                                .title("Bo")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([S.listItem().title("Pictures").child()])
                                ),
                            // Wenyi's page
                            S.listItem()
                                .title("Wenyi")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem().title("Sprint 1").child()
                                            S.listItem().title("Sprint 2").child()
                                            S.listItem().title("Sprint 3").child()
                                            ])
                                ),
                            // Matthew's page
                            S.listItem()
                                .title("Matthew")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem().title("Sprint 1").child()
                                            S.listItem().title("Sprint 2").child()
                                            S.listItem().title("Sprint 3").child()
                                            ])
                                ),
                        ])
                ),
        ]);
```

I understand if you are struggling to understand this, but let me elaborate. I first import `S` from the `structure-builder` so that I can access it later on in the file. I then import an icon from the React Icons library that I will use for the first pane.

Now onto the function itself. It's basically a nested list of lists and list items. Each `S.list()` can have multiple items living in an array. One of those items can be a `S.listItem()`, which in itself can have several childs.

To give a visual representation of how this looks this image of the studio desk makes sense:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/sanity-desk-tool.jpg)

That finalizes this part of the structure builder. I must say, I have been very busy learning all about this the past week, and found it to be difficult. Not because of the syntax, but because of the several levels deep you can go, and the nesting that happens can become very hard to understand. That's why I always kept a visual version of the studio open on my other monitor for reference of what I was doing.

## Defining the Sanity schemas

Now that I have finished the desk structure (kind of) it's time to take a look at schemas within Sanity. Remember the `/schemas` folder I mentioned last week? It's going to be really important now. Inside of it is the following file, called `schema.js`:

```javascript
// schema.js

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
    ]),
});
```

This file is so important as its the base of my project and defines which _custom schemas_ that I create can be accessed in the studio itself throught my custom desk structure. So firstly, let's take a look at what a _custom schema_ looks like:

```javascript
// boPortfolio.js

export default {
    name: "boPortfolio",
    title: "Portfolio item",
    type: "document",
    fields: [
        {
            name: "sidebar",
            title: "Sidebar text",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "content",
            title: "Pictures",
            type: "array",
            of: [
                {
                    type: "image",
                },
            ],
        },
    ],
};
```

As an example, here you can see the schema I made for Bo's portfolio page. It contains a couple of fields that I can customize and add upon. Now, this schema itself doesn't do that much on its own. That's why I need to import it in the global `schema.js` file and then expose it to the custom `deskStructure.js` file. I am also importing the schema's for Wenyi and myself. Let's go:

```javascript
// schema.js

// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import boPortfolio from "./boPortfolio";
import wenyiSprint1 from "./wenyiSprint1";
import wenyiSprint2 from "./wenyiSprint2";
import wenyiSprint3 from "./wenyiSprint3";
import mattSprint1 from "./mattSprint1";
import mattSprint2 from "./mattSprint2";
import mattSprint3 from "./mattSprint3";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */

        boPortfolio,
        wenyiSprint1,
        wenyiSprint2,
        wenyiSprint3,
        mattSprint1,
        mattSprint2,
        mattSprint3,
    ]),
});
```

Now that they are imported and exposed to the `deskStructure.js` file I can include them there:

```javascript
import S from "@sanity/desk-tool/structure-builder";

// icons
import pagesIcon from "react-icons/lib/md/book";

export default () =>
    S.list()
        .title("Have a wonderful day!")
        .items([
            // First pane
            S.listItem()
                .title("Portfolios")
                .icon(pagesIcon)
                .child(
                    // Second pane
                    S.list()
                        .title("All portfolios")
                        .items([
                            // Bo's page
                            S.listItem()
                                .title("Bo")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem()
                                                .title("Pictures")
                                                .child(
                                                    S.editor()
                                                        .schemaType("boPortfolio")
                                                        .documentId("boPortfolio")
                                                        .title("Edit pictures")
                                                ),
                                        ])
                                ),

                            // Wenyi's page
                            S.listItem()
                                .title("Wenyi")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem()
                                                .title("Sprint 1")
                                                .child(
                                                    S.editor()
                                                        .schemaType("wenyiSprint1")
                                                        .documentId("wenyiSprint1")
                                                        .title("Edit Sprint 1")
                                                ),
                                            S.listItem()
                                                .title("Sprint 2")
                                                .child(
                                                    S.editor()
                                                        .schemaType("wenyiSprint2")
                                                        .documentId("wenyiSprint2")
                                                        .title("Edit Sprint 2")
                                                ),
                                            S.listItem()
                                                .title("Sprint 3")
                                                .child(
                                                    S.editor()
                                                        .schemaType("wenyiSprint3")
                                                        .documentId("wenyiSprint3")
                                                        .title("Edit Sprint 3")
                                                ),
                                        ])
                                ),

                            // Matthew's page
                            S.listItem()
                                .title("Matthew")
                                .child(
                                    S.list()
                                        .title("All portfolios")
                                        .items([
                                            S.listItem()
                                                .title("Sprint 1")
                                                .child(
                                                    S.editor()
                                                        .schemaType("mattSprint1")
                                                        .documentId("mattSprint1")
                                                        .title("Edit Sprint 1")
                                                ),
                                            S.listItem()
                                                .title("Sprint 2")
                                                .child(
                                                    S.editor()
                                                        .schemaType("mattSprint2")
                                                        .documentId("mattSprint2")
                                                        .title("Edit Sprint 2")
                                                ),
                                            S.listItem()
                                                .title("Sprint 3")
                                                .child(
                                                    S.editor()
                                                        .schemaType("mattSprint3")
                                                        .documentId("mattSprint3")
                                                        .title("Edit Sprint 3")
                                                ),
                                        ])
                                ),
                        ])
                ),
        ]);
```

With all of this code it's hard to visualize the result of this activity. To sum up visually what I did check out the results below.

### The results

Here are the results of the individual schema's in the Sanity studio, filled in with content by the team itself:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/bo-result.jpg)
![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/wenyi-result.jpg)
![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/matt-result.jpg)

As you can see here it's very easy to add detailed information and everybody was happy as the schemas were adjusted to each person's needs.

# Next week

This week has been very heavy, time wise. It took me much longer than expected to work with the structure builder for the Sanity studio, as I found it very confusing at times. The schema's went a lot better though, as those are more straightforward and less nested.

Eventually I made it work and I am happy with the end result. I was also pleased to see that Bo and Wenyi enjoyed entering their information into the studio. No hiccups at all.

I am also happy to see that the team is still communicating and progressing as planned. We haven't walked into any big issues and the team's spirit is still high. [Next week](https://github.com/mwdossantos/portfolio/blob/master/docs/week-18.md) I am going to work on the front end pages of the website, and make it personal. I can't wait!

# Resources

https://trello.com/
https://www.sanity.io/docs/overview-structure-builder
https://www.sanity.io/docs/content-modelling
