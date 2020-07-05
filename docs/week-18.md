![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-18.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to finish this week's worth of work.

| Activities                      | Finalized |
| :------------------------------ | :-------: |
| Individual lo-fi & hi-fi design |    ✅     |
| Frontend pages                  |    ✅     |
| Custom CSS per member           |    ✅     |

But first, let's look what the team has been up to this week.

# Teamwork

This was the first week where I noticed a decline in communication from Bo. There was no response for a couple of days, and she was not attending class. This was worrying me as she was responsible for the hi-fi design of the home page for the website, which I was going to build this week.

During one of the classes of this week I had a call with Paul, and discussed the matter with him. I was really struggling with the fact that the longer I would wait the less time I would have for programming the website, and the lower the chance would be to successfully finish this minor.

That's why Paul helped me come up with a solution. I sent the team a message that I am too happy with the fact that communication is being let down, and that we will need to have the hi-fi design finalized by the end of this week. If that wasn't the case, then I would continue without Bo and make sure we get the minor finished.

Luckily, after that message, we got a response. I won't go into personal details but this step of communication towards Bo helped her open up about what's not going well. Eventually though, she really pulled through and managed to finish the hi-fi design for the home page today (friday!).

The team was very proud. Here's the tasks we did this week:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-18-trello.jpg)

## Planning

As I explained in the previous section, there was a slight hiccup in progression earlier in the week, but Bo stepped up and finalized the hi-fi design wich puts us right back on track.

I also had a call with the team about how they experience the planning and team management. They said that the Trello helps a lot but that they also would like to have more weekly calls. Sadly, due to the busy schedules of everybody it's hard to plan calls outside of the school days themselves.

To solve this, we plan to have a call after every class and discuss the progression of that week.

# My activities

Time for my individual activities I did this week to finalize this week's work.

## Individual lo-fi & hi-fi design

Earlier in my documentation I have mentioned that we will add a personal touch to the portfolio website. The reasoning behind this goes as follows: we had three individual blocks and I want to highlight the individuality of this minor in a single website.

That's why we decided to go crazy, and create our own page designs per person. In the process, I have created a simple lo-fi and hi-fi mockup of my page design and style to illustrate my own personal style.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/matt-lofi.png)
![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/matt-hifi.png)

I went with a sleek and dark tone, with a black background. This way I was sure it was going to stand out from the rest of the portfolios and my imagery would get the best chance to shine.

For the lo-fi and hi-fi designs I suggest taking a look at our team's [Figma](https://www.figma.com/file/HIra3IzK8GgAsaU7MI9ZL7/Minor-4-Portfolio?node-id=79%3A2) file so that you can click through their pages.

## Frontend pages

As you already saw in the previous weeks aswell as the Sanity desk structure explanation, we will have the following structure for the portfolios:

-   `index.js`
    -   `/bo`
        -   `home.js`
    -   `/wenyi`
        -   `home.js`
        -   `sprint1.js`
        -   `sprint2.js`
        -   `sprint3.js`
    -   `/matthew`
        -   `home.js`
        -   `sprint1.js`
        -   `sprint2.js`
        -   `sprint3.js`

As you can see, the navigation is pretty straightforwards. From the home page (`index.js`) you can navigate to `/bo/home` or `/wenyi/home`. You may have noticed that Bo only has one sub page. That is correct, as she shows all her stuff in one gallery of pictures. Wenyi and I have decided to use the sub pages for the sprints to document the individual sprints.

Before I go on it's important to inform you about the structure of the front end. In week 16 I touched upon it and created the sub pages. Here's that structure:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/folder-structure.jpg)

For the front end, the `components` and `pages` folders are important. Here's the sub page structure for them:

-   `/components` - all the components that I will create will live here
    -   `/general` - any generic components applicable anywhere on the website
        -   `/modules` - the CSS modules folder for these components
    -   `/home` - any components that are limited to the home page
        -   `/modules` - the CSS modules folder for these components
    -   `/bo` - any components that are limited to Bo's portfolio
        -   `/modules` - the CSS modules folder for these components
    -   `/wenyi` - any components that are limited to Wenyi's portfolio
        -   `/modules` - the CSS modules folder for these components
    -   `/matthew` - any components that are limited to Matthew's portfolio
        -   `/modules` - the CSS modules folder for these components
-   `/pages` - _already exsists, just for reference_
    -   `/portfolios` - sub-path for portfolios
        -   `/bo` - path for any pages that are for Bo's portfolio
        -   `/wenyi` - path for any pages that are for Wenyi's portfolio
        -   `/matthew` - path for any pages that are for Matthew's portfolio

This is an extremely beneficial setup. Reason being is that for the homepage (`index.js`) I can use components from the `home` folder. For a sub page of for example myself I can use components from the `components/matthew` folder. Everything is scoped to correctly meaning there won't be any conflicts.

### [Homepage](https://wowportfolios.nl/)

So let's start off with the first page, the homepage:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/homepage.png)

```js
import Head from "next/head";
import Link from "next/link";
import { Header } from "../components/home/Header";
import { Footer } from "../components/home/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>WOW - Portfolio</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='container'>
                <Header />
                // rest of the code
                <Footer />
            </div>
        </>
    );
}
```

As you can see the homepage uses the `<Header/>` and `<Footer/>` components from the `home` folder. They are not used anywhere else in the website. I am not going to dive deeper in the rest of the code here, as it's very repetitive and is just basic HTML & CSS.

### [Bo's page](https://wowportfolios.nl/portfolios/bo/home)

Now onto the first page with completely unique styling from the rest, scoped within its components.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/bo-page.jpg)

Bo's page has a "unique" style to say the least and well, it mainly consists of two components. The `<SideBar/>` and `<ImageGrid/>`. These two live on the page itself in the `<Main/>` component:

```js
// components/bo/Main.js

export function Main() {
    return (
        <div className={s.holder}>
            <Sidebar />
            <ImageGrid />
        </div>
    );
}

// components/bo/Sidebar.js

export function Sidebar() {
    return (
        <div className={s.holder}>
            <img src='https://s3-alpha-sig.figma.com/img/6461/e048/f825aa251c12db6849a300d94183656e?Expires=1594598400&Signature=hVNK4tJw3Qe9Pj11s6jQGTiufXSJNZ-mfUZige1DM8-LgBJBdaG759Du00yxEeB0g6-njbGpjdKRKFajfWEvfNd3DOWAO9WbXIfci6dYVrpjIvmIViE7BZMPWwZtscJFTXRpDHhbKL1ohO4xYKgZrlFJxQ2vAPWI7PKvh~JtGlZAQELlSKtqdRUbcaFtyh7i3JTc62vg2DZydG0Dh~rKdeS4rEcbYzF7pd8591pJ4kUfTp6bTr~hQr~E~2OTVXE81vBQCglz4Fs5mQasc74pLnQk9OjMS2p4Bx1mi17oY8qltcS5eCxuX8uNEtLJeJlM09BQsFSjA5svuMqU-5A3pQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />

            <h2>Bo Baekers</h2>
            <p>The past 20 weeks have really been a creative journey to me.</p>
        </div>
    );
}

// components/bo/ImageGrid.js
export function ImageGrid() {
    return (
        <div className={s.holder}>
            <div className={s.grid}>
                <img src='https://cdn.sanity.io/images/guko1cn2/production/ddf72fe1cd9bdd3b51f8905959bac7914c316864-3024x4032.jpg' />
            </div>
        </div>
    );
}
```

As you can see, it gives me a lot of control over the components for each team member, and the styling within each of the components. More about the styling aspect in the next section.

### [Wenyi's page](https://wowportfolios.nl/portfolios/wenyi/home)

Next up is Wenyi's page. It's a bit more complicated as it has three different sprint that it links to. But here, the same principle is still active. Scoped components!

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/wenyi-page.png)

The [subpage](https://wowportfolios.nl/portfolios/wenyi/sprint3) for wenyi looks like this, it's content is going to be pulled from Sanity next week.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/wenyi-subpage.png)

### [Matthew's page](https://wowportfolios.nl/portfolios/matthew/home)

Finally, here's my page.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/matthew-page.png)

The subpage uses almost the same layout idea of Wenyi, with a rich text field in the middle that will pull all the data from Sanity, also next week.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/matthew-subpage.png)

---

Instead of dissecting the code for all the components here, I suggest going to the repository itself and taking a look at how they are linked together using GitHub's new hovering tool.

The components are not my learning goal as I can make them already and it doesn't make sense to spend too much time and resources on documenting them here.

## Custom CSS per member

That's because I am using **CSS Modules** which scope the CSS to the component it's being used in, and it can't overlap into other files.

# Next week

Reflection on this week’s activities

# Resources

https://www.figma.com/
