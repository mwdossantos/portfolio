![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-19.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to finish this week's worth of work.

| Activities                             | Finalized |
| :------------------------------------- | :-------: |
| Setup Sanity integration with frontend |    ✅     |
| Setup Vercel                           |    ✅     |
| Custom CSS per team member             |    ✅     |

But first, let's look what the team has been up to this week.

# Teamwork

This week has been a breeze. My personal activities went very well, but more importantly Bo and Wenyi also finished their tasks, and attended all the classes. They were very active in our WhatsApp chat. This was a good sign, especially as next week will be our final week.

Other than that this week hasn't been too crazy. Let's dive deeper into the planning and activities!

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-19-trello.jpg)

## Planning

As with any project, creating and sticking to a planning is essential when you are working with a deadline. In this section I am going to reflect on the progression made by myself and the team.

For this week, it was important that I finished my activities listed further on in this week's documentation. This is because without it, the website wouldn't function correctly and wouldn't be able to fetch the data that Bo and Wenyi filled in, in the studio.

I am happy to report that everything did go well, and I managed to finish my activities. Keep reading to see how!

# My activities

Now up next are the two very important activities I did this week. One will make sure that the website is hydrated with data, while the other one means it will become ready to show to the world!

## Setup Sanity integration with frontend

As I mentioned earlier in the documentation of this project, Sanity's API can send it's data to the Next.js front end I am using, with the help of a middleman. Here's the image again that I created to visualize this proces:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/nextjs-sanity.png)

So, the first step is going to be to create a `sanity.js` file which will act as the "middleman", and it will live in between Sanity and Next.js. It will contain all the helper functions to facilitate the process. Here's the location:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/middleman-location.jpg)

Before we begin working on the middleman file, lets define everything we need to do in order to connect the Sanity data to the front end:

-   Connect to Sanity's client
-   Initialize helper functions
-   Fetch data as GROQ queries
-   Hydrate the front end

Each step is going to build up the middleman file, and eventually hydrate the front end. Let's go!

### Connect to Sanity's client

Let's begin by opening the file, `sanity.js`, and requiring the JavaScript Sanity client.

```js
// sanity.js

const sanityClient = require("@sanity/client");
```

We will now need to initialize the Sanity client:

```js
// sanity.js

const sanityClient = require("@sanity/client");

const client = sanityClient({
    projectId: "guko1cn2",
    dataset: "production",
    token: "enter your token here...", // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
});
```

Now that we have done that, we can start creating the seperate helper functions.

### Initialize helper functions

Within Sanity there are a lot of different schema types, such as arrays, block's and images. Some of them are rather simple and require no special transforming work whatsoever, such as a string. Others, such as the image and richt text types need some help. Let's help them by first importing and requiring them:

```js
// sanity.js

import imageUrlBuilder from "@sanity/image-url";
const BlockContent = require("@sanity/block-content-to-react");
```

As you can see they are both from `@sanity` themselves. Now, let's create the functions themselves:

```js
// sanity.js

import imageUrlBuilder from "@sanity/image-url";

// creating a new instance
const imageBuilder = imageUrlBuilder(client);

// creating a function to handle the transforming of an image type to a URL
export function imageUrlFor(source) {
    return imageBuilder.image(source);
}

// requiring block content
const BlockContent = require("@sanity/block-content-to-react");

// creating a function to handle the different types that may appear in a rich text, such as an image or code block.
export function renderRichText(richText) {
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            image: (props) => {
                return <img src={imageUrlFor(props.node).url()} />;
            },
        },
    };

    return <BlockContent blocks={richText} serializers={serializers} />;
}
```

Now that we are connected to Sanity's API, can work with the data we receive using the helper functions it's time to fetch the data.

### Fetch data as GROQ queries

This is going to be the cool part. Fetching data using the GROQ querying language Sanity developed. These queries are async functions. Let's take a look at one. I will add some comments so that it becomes clear what the code does.

```js
// sanity.js

// creating an async function that I can call on the front end
export async function getMattSprint1() {
    try {
        // defining what the query consists of
        const query = `*[_type == "mattSprint1"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        // storing the result of the qurey in the variable
        let mattSprint1 = await client.fetch(query);
        // checking if the variable is not null, if so return null
        mattSprint1 = mattSprint1 ? (mattSprint1.length ? mattSprint1[0] : null) : null;

        // return the fetched data
        return mattSprint1;
    } catch (error) {
        console.log(error);
        return null;
    }
}
```

All in all, that's everything to the middleman file. Of course, each and every page that I created has it's own query, but they are very similiar to the above. If you are interested in seeing all of them, here's the full `sanity.js` file:

```js
// sanity.js

const sanityClient = require("@sanity/client");

const client = sanityClient({
    projectId: "guko1cn2",
    dataset: "production",
    token: "enter your token here...", // or leave blank to be anonymous user
    useCdn: false, // `false` if you want to ensure fresh data
});

import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(client);

export function imageUrlFor(source) {
    return imageBuilder.image(source);
}

const BlockContent = require("@sanity/block-content-to-react");

import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

export function renderRichText(richText) {
    const serializers = {
        types: {
            code: (props) => (
                <pre data-language={props.node.language}>
                    <code>{props.node.code}</code>
                </pre>
            ),
            image: (props) => {
                return <img src={imageUrlFor(props.node).url()} />;
            },
            youtube: ({ node }) => {
                const { url } = node;
                const id = getYouTubeId(url);
                return <YouTube videoId={id} />;
            },
        },
    };

    return <BlockContent blocks={richText} serializers={serializers} />;
}

// queries for content

// page queries

export async function getBo() {
    try {
        const query = `*[_type == "boPortfolio"] {
            sidebar,
            content
        }
          `;

        let boPortfolio = await client.fetch(query);
        boPortfolio = boPortfolio ? (boPortfolio.length ? boPortfolio[0] : null) : null;

        return boPortfolio;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getWenyiSprint1() {
    try {
        const query = `*[_type == "wenyiSprint1"] {
            name,
            image,
            content
        }
          `;

        let wenyiSprint1 = await client.fetch(query);
        wenyiSprint1 = wenyiSprint1 ? (wenyiSprint1.length ? wenyiSprint1[0] : null) : null;

        return wenyiSprint1;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getWenyiSprint2() {
    try {
        const query = `*[_type == "wenyiSprint2"] {
            name,
            image,
            content
        }
          `;

        let wenyiSprint2 = await client.fetch(query);
        wenyiSprint2 = wenyiSprint2 ? (wenyiSprint2.length ? wenyiSprint2[0] : null) : null;

        return wenyiSprint2;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getWenyiSprint3() {
    try {
        const query = `*[_type == "wenyiSprint3"] {
            name,
            image,
            content
        }
          `;

        let wenyiSprint3 = await client.fetch(query);
        wenyiSprint3 = wenyiSprint3 ? (wenyiSprint3.length ? wenyiSprint3[0] : null) : null;

        return wenyiSprint3;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMattSprint1() {
    try {
        const query = `*[_type == "mattSprint1"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        let mattSprint1 = await client.fetch(query);
        mattSprint1 = mattSprint1 ? (mattSprint1.length ? mattSprint1[0] : null) : null;

        return mattSprint1;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMattSprint2() {
    try {
        const query = `*[_type == "mattSprint2"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        let mattSprint2 = await client.fetch(query);
        mattSprint2 = mattSprint2 ? (mattSprint2.length ? mattSprint2[0] : null) : null;

        return mattSprint2;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getMattSprint3() {
    try {
        const query = `*[_type == "mattSprint3"] {
            image,
            name,
            summary,
            sprint,
            duration,
            deliverable,
            grade,
            content
        }
          `;

        let mattSprint3 = await client.fetch(query);
        mattSprint3 = mattSprint3 ? (mattSprint3.length ? mattSprint3[0] : null) : null;

        return mattSprint3;
    } catch (error) {
        console.log(error);
        return null;
    }
}
```

### Hydrate the front end

Now using that middleman file, that contains all of my queries and helper functions, I can start loading in the data into the Next.js front end. Luckily Next.js has data fetching functions ready to be used for this exact use case. Called `getStaticProps()`, it allows me to fetch data at build time using the feting functions from the middleman file.

Let's take a look at the file `mattSprint1.js`, and see what this looks like:

```js
// mattSprint1.js

// rest of the file

export async function getStaticProps() {
    return {
        props: {
            mattSprint1: await getMattSprint1(),
            mattSprint2: await getMattSprint2(),
        },
    };
}
```

Living at the end of the file, it gives me the chance to run functions, get their returned data and store that data in the props `mattSprint1` and `mattSprint2`. Those props are then passed to the page function itself:

```js
// mattSprint1.js

export default function Sprint1({ mattSprint1, mattSprint2 }) {
    return (
        // rest of the file
```

Using this knowledge, it becomes easy to load this data into the components that live on this page. Here's the full file with helpful comments:

```js
import Head from "next/head";
import { Header } from "../../../components/matthew/Header";
import { HomeNav } from "../../../components/general/HomeNav";
import { Toolbar } from "../../../components/matthew/Toolbar";
import { NextSprint } from "../../../components/matthew/NextSprint";

// importing the fetching functions from the middleman file
import { getMattSprint1, getMattSprint2 } from "../../../services/sanity";

// importing the helper function
import { renderRichText } from "../../../services/sanity";

// passing the data as two props to the page, and thus exposing to the components
export default function Sprint1({ mattSprint1, mattSprint2 }) {
    return (
        <>
            <Head>
                <title>WOW - Matthew - Sprint 1</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container' style={{ paddingTop: "3rem" }}>
                <HomeNav link='/' label='< Go home' />
                <Header />
                <HomeNav link='/portfolios/matthew/home' label='< Go back' />
                {/* populating the Toolbar component with the data */}
                <Toolbar data={mattSprint1} />
                {/* rendering a rich text with content from the data */}
                <div className='richTextHolderLight'>{renderRichText(mattSprint1.content)}</div>

                {/* populating the NextSprint component with data about sprint 2 */}
                <NextSprint data={mattSprint2} link='/portfolios/matthew/sprint2' />
            </div>
            <style global jsx>{`
                body {
                    background: black;
                }
            `}</style>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            mattSprint1: await getMattSprint1(),
            mattSprint2: await getMattSprint2(),
        },
    };
}
```

As you can imagine, this is done exactly the same for the rest of the pages. It's important to note that `getStaticProps()` only works on _page_ files and not on _component_ level files. So if a component needs data, you will need to pass that data down as props, as done with the `<Toolbar />` component in the above example.

## Setup Vercel

Vercel's a dream. It makes deploying website's super easy and fast. That's why I chose to use it here.

I logged in, created the project and linked the repository. I was then greeted with this screen:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/vercel1.jpg)

It couldn't be easier. Currently it's deployed on https://portfolio-steel-five.vercel.app/. This is fine for now, but next week I will be linking a _custom_ domain name.

# Next week

Like I said in the beginning of this week's documentation the rest of the team couldn't do that much work because I had to do a lot of programming again. This is partly because they have different goals and deliverables and makes it hard to find other tasks. I did ask the team to collect feedback that we can work on next week.

Next to the feedback, the [upcoming week](https://github.com/mwdossantos/portfolio/blob/master/docs/week-20.md) is going to be focused on adding a custom YouTube schema type to the rich text field, linking the custom domain and more. See you there!

# Resources

https://nextjs.org/docs/basic-features/data-fetching
https://www.sanity.io/docs/js-client
https://www.sanity.io/docs/schema-types
https://vercel.com/
