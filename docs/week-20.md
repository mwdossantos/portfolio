![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-20.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to finish this week's worth of work.

| Activities                  | Finalized |
| :-------------------------- | :-------: |
| Custom YouTube schema type  |    ✅     |
| Feedback on the website     |    ✅     |
| Custom domain linking       |    ✅     |
| Re-deploy on studio publish |    ✅     |

But first, let's look what the team has been up to this week.

# Teamwork

I am very happy where the team's at now. Especially compared to week 18. The miscommunications are no more and I am seeing that in the way we exchange feedback about the website and how I can share progress in the WhatsApp group.

This week I asked Bo and Wenyi to come up with a domain name for our website. Something that aligns with our logo as well. Say hello to [wowportfolios.nl](https://wowportfolios.nl/).

I bought the domain through Mijn Domein. I will be going through the setup of the custom domain with Vercel later on in this week's documentation.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-20-trello.jpg)

## Planning

As with any project, creating and sticking to a planning is essential when you are working with a deadline. In this section I am going to reflect on the progression made by myself and the team.

Similiar to last week, I have been progressing very well and will do the final tasks I have planned. No real hiccups occured in our planning.

# My activities

Now that the majority of the programming work has been finalized, it's time to start looking at the final, small, but very important steps I need to take. These steps will ensure a production ready website. Take a look.

## Custom YouTube schema type

When Wenyi's detail pages were coded by me, I included a rich text field. This is fine, of course, but when Wenyi added her content I saw that she was pasting YouTube links. Remember when I said the rich text field uses serializers to know which content is present? Turns out the current rich text renderer didn't have a serializer that can properly read and embed a YouTube link.

Thank the heavens, because after looking in the Sanity docs I learnt that I can create them myself. This goes in a few steps:

-   create a schema called `YouTube.js`
-   import it into `schema.js`
-   use it as a type in the rich text field
-   add the type to the serializer in the helper function

Step by step, this goes as follows:

### Create a schema called `YouTube.js`

This file is importing some helper functions to create the YouTube preview, and create the schema type `youtube` that I will import later on.

```js
// schemas/youtube.js
import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

const Preview = ({ value }) => {
    const { url } = value;
    const id = getYouTubeId(url);
    return <YouTube videoId={id} />;
};

export default {
    name: "youtube",
    type: "object",
    title: "YouTube Embed",
    fields: [
        {
            name: "url",
            type: "url",
            title: "YouTube video URL",
        },
    ],
    preview: {
        select: {
            url: "url",
        },
        component: Preview,
    },
};
```

### Then, import it into `schema.js`

This will expose it to the schemas.

```js
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

import youtube from "./youtube";

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
        youtube,
    ]),
});
```

### Use it as a type in the rich text field

By doing this it will register in the rich text field in the studio.

```js
// schemas/wenyiSprint2.js
{
    name: "content",
    title: "Content",
    type: "array",
    of: [
        { type: "block" },
        {
            type: "image",
        },
        {
            type: "youtube",
        },
    ],
},
```

### Lastly, Add the type to the serializer in the helper function

```js
// services/sanity.js

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
```

All in all, this looks fabulous:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/ytembed.jpg)

## Feedback on the website

Like I said earlier, Bo and Wenyi gave me some feedback about the website that they would like to see differently.

### Bo's feedback

```
FEEDBACK ON PERSONAL PORTFOLIO PAGE:
- roze balk moet smaller, waardoor foto kleiner wordt en tekst area ook smaller en langer
- "Bo Baekers" in zwart ipv wit en ze;fde font als de rest maar groter
- Meer ruimte tussen "Bo Baekers" en foto
- Illustraties per 2 naast elkaar ipv 3
```

These were valid points, and I agreed with them. As you can see these are all small CSS changes. Having two images in a row makes more sense, because there are a lot and gives more detail to each of them.

Bo's name was white by mistake, I set the rich text to have white `<h2>`'s on Bo's page, fixed by changing to black. Also fixed the spacing issue.

Purple sidebar is now also more responsive and stays smaller at all times. Its also as high as there is text now, instead of going all the way down to the last image.

### Wenyi's feedback

```
@Matthew can you pls put a title

[10:53, 7/5/2020] Wenyi: I think it looks cleaner
[10:54, 7/5/2020] Wenyi: that when you hover on a box you get a red background
```

I forgot to add "Wenyi's Portfolio" to the top of her homepage, fixed that.

For the second points, in essence, she changed her mind on the design of her portfolio items. She had this design:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/wenyiold.jpg)

After changing it to a white box and make it go red on hover, it looks like this:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/wenyinew.jpg)

She was certainly much happier!

## Custom domain linking

One of the last steps when creating a website is something very simple but necessary to do. However it may seem simple, it can sometimes take a long time for domain names to be linked properly. This has to do with the DNS settings that I will be changing.

To be safe, I did this all on friday of this week. First I opened up Vercel and added the domain name:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/arecord.jpg)
![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/cname.jpg)

Secondly I copied the DNS settings - `A record for the apex domain (without www)` and `CNAME record for the www. domain` to Mijn Domein, where I bought the domain name, and added them to the domain name's DNS settings:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/domain2.jpg)

I then waited patiently for the domain names to resolve, and voila! About 3 hours later, it was working perfectly fine. For consistency's sake I redirected our test domain to the custom one.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/domain3.jpg)

There it is... [WOW Portfolios](https://wowportfolios.nl/)

## Re-deploy on studio publish

Remember when I said we are using `getStaticProps()` in this project? This means all the latest data is only hydrated on the website once its built. In order to fix that, I will need to implement a deployment hook.

This means that every time somebody publishes a change in the **studio**, it will trigger a re-deployment in **Vercel**, causing the website to be re-hydrated with fresh data.

Easy enough right?

### Creating the Vercel hook

Create a new hook in Vercel and give it a recognizable name for later, then copy the URL:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/vercelhook.jpg)

### Creating the Studio hook

Create a new hook in the studio and paste the URL you got from Vercel in the last step:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/studiohook.jpg)

And that's it! When I hit "Publish" in the studio, it's deploying the freshly hydrated build!

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/building.jpg)

# The end result and a big, big Thank you

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/thankyou.png)

We've finally arrived at the end of this minor. It's been a long 20 weeks. Long and useful, where I learnt new stuff everyday and during the past 5 weeks I have managed to work with a team of people that made amazing products themselves. I am so happy with the end result. The website really manages to showcase each person's individual style and does all of us justice.

I want to thank you for taking the time to read all of my documentation. If you want to read more about my previous projects, find the documentation here:

-   [Trike Creek](https://kb-86.cmd-denhaag.nl/?p=150)
-   [Star Wars Favorites](https://github.com/mwdossantos/kb-86)
-   [AstroPlant](https://github.com/Meet-Miles/astroplant)

After this week's documentation you will find a range of screenshots from the final portfolio website, taken right before handing in the complete documentation for this project.

# Resources

| Link                                                                                                       |                            Why?                             |
| :--------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------: |
| [Sanity - Serializers](https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block) | To learn how to create my own type for the rich text field  |
| [Mijn Domein](https://www.mijndomein.nl/)                                                                  | To purchase and manage the DNS settings for the domain name |
| [Vercel](https://vercel.com/)                                                                              |                    To deploy the website                    |
