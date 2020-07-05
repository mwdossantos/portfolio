![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/week-16.png)

Thank you for taking the time to read this week's update. As you can see in the following table, I have a couple of activities planned that I will do in order to get my desired result: Planning.

| Activities                    | Finalized |
| :---------------------------- | :-------: |
| Creating the repository       |    ✅     |
| Defining the folder structure |    ✅     |
| Setting up Next.js            |    ✅     |
| Setting up Sanity             |    ✅     |

But first, let's look what the team has been up to this week.

# Teamwork

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/wow-logo.svg)

To start off, say hello to the WOW team:

-   Bo Baekers
-   Wenyi Wever
-   Matthew Wilson

Together we have decided to create an awesome team portfolio website, with a personal touch. During this first week we have been busy working on a few things. In this section I will dive deeper into each of those.

## Getting to know eachother

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/team-pic.png)

After the kick off of this block, Bo, Wenyi and I were put together in a group. I already knew Bo from an earlier project, namely HCI. We had experience working together. Wenyi and I met eachother for the first time during this project. My first impression was that everybody was eager to work on this project, and I felt motivation flowing throughout the team.

## The next few weeks

One of the important parts of the first week was to setup a Trello board for the team. I set up the board to be easily accessible for people that normally never work with Trello. Everybody creates their tasks and puts them in the "backlog". Then, when the week arrives, we work on those tasks and drag them to the corresponding week once they are finished and iterated on with the team.

Here's a screenshot of the board during the first week.

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/trello-board.JPG)

I must say, this has helped us a lot to keep tracking the progression of the team and stay accountable.

## Planning

As with any project, creating and sticking to a planning is essential when you are working with a deadline. In this section I am going to reflect on the progression made by myself and the team, based on our planning that we have created in this first week.

As you saw in the Trello board in the last section, everybody had some tasks planned already, and during the first week it was all still a bit new. During the weekend of the first week a lot more tasks were added, which are not on the screenshot. All in all, everybody managed to finish their tasks. My tasks for this week will be described in greater detail later on in this week's documentation.

Of course, just like in the past few weeks, there are personal goals to achieve as well. To help understand those goals I have split them up in two parts: the personal learning goal and the personal deliverable.

### Personal learning goal

In the past few blocks I have worked on a lot of different visual and front end development projects. That's why it didn't make sense to have a similiar learning goal for this project.

After discussing the matter with Paul, we quickly came to the conclusion that it would be beneficial to both the team aswell as myself to define a learning goal based on teamwork:

> I am going to learn how to manage and motivate my team

Based on this learning goal it's important to note that next to my deliverable I will define in the next section, I am also going to reflect on the teamwork aspect every week.

### Personal deliverable

Normally, the deliverable is a direct result of the learning goal. This time though, that's going to be different. Let's take a look at the greater goal of the project:

> Create a functional portfolio website

To achieve this, programming needs to be done. Within my team, it became clear that neither Bo or Wenyi have passion for programming and that their learning goals were completely different. That's why after a meeting with Paul I decided to define my own deliverable, so that we will be able to achieve that greater _team_ goal:

> A fully functioning portfolio website with the ability to manage it from a CMS

In my documentation for this and the upcoming week's I will dive deep into my personal activities related to this deliverable. For the other team deliverables such as the logo, lo-fi prototype and other tasks I suggest taking a look at Bo and Wenyi's documentation.

# My activities

Now that I have reflected on the team's work and progression of this week it's time to take a look at my personal activities I have done during this week.

## Creating the repository

One of the very first steps I always take when creating a new website is to create a GitHub [repository](https://github.com/mwdossantos/portfolio). The repository will hold all of the code neccesary to run the website and the documentation you are reading right now. This makes it very easy to work with as I don't have to switch tools and can easily elaborate on any code I have written, right here in the `.md` files.

Here's a look of the structure of the repository and the technology stack I will be using to create the website:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/github-repo.png)

## Defining the folder structure

Now that the repository is up and running, I can start opening it in Visual Studio Code. In order to get a good boilerplate (starting point for a project) up and running I will need to define a clear folder structure:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/folder-structure.jpg)

You will see a couple of interesting folders here:

-   `/components`
    -   This folder holds all of the components that I will be creating once Next.js is set up.
-   `/docs`
    -   All of the `.md` files (including the one you are reading right now) will be living here. Any images that go along with the documentation also live here.
-   `/pages`
    -   Normally, this folder is created by Next.js, but I created it already to give an impression of the full project folder structure. It holds all the pages, and each page acts as a "route" in the address bar of your browser.
-   `/public`
    -   Any static images and files that the website will need to access live here.
-   `/sanity`
    -   This folder will hold the Sanity front end studio (CMS). More on that later.
-   `/services`
    -   I always create this folder, as it will hold any of the "helper" functions that _help_ me communicate with Sanity (back end) from within Next.js (front end).

Now, let's start bootstrapping (no, [Bootstrap](https://getbootstrap.com/) isn't involved, haha) this project!

## Setting up Next.js

As with any cool website project, I will start off initializing a Next.js starter project. This is very easy and straightforward to do:

I will open up the terminal in VS Code and run:

```
npx create-next-app
```

This will start creating the Next.js project. During this process you get to choose a few things:

-   The name of the project
-   Whether you want to use a starter template

For the name, I went with `portfolio`, just to keep it simple. Secondly, I don't need a starter template. They can come in handy but I find it easier to start fresh with no "bloatware".

Once the questionairre is fulfilled, it will create the following files and folders:

-   `package-lock.json` - because I am using Node.js, this holds all the dependecies
-   `package.json` - this holds all the project settings for Node.js
-   `/pages` - a folder where pages will live, each one being a route
    -   `/api` - generated, but not used
        -   `hello.js` - generated, but not used
    -   `index.js` - the home page
-   `/public` - folder for all the static files that are accesible by using `/`

This is still pretty barebones, so I added the following folders to this list to complete the front end folder structure:

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
-   `/services` - folder that will hold any helper functions

As you can see I kept in mind the fact that the website is going to have a personal touch. Every member can have their "stand alone" portfolio page within the website. Complete with unique components and styling. We decided to do this because it will portray each's style and skill level properly.

This sums the Next.js bootstrapping part and will allow me to start working on the front end in [week 18](https://github.com/mwdossantos/portfolio/blob/master/docs/week-18.md).

## Setting up Sanity

Sanity's a whole other cookie. Actually, no. It's still easy but just a different concept as a whole. See, in large projects, with multiple programmers involved it is beneficial to everybody to keep the back end seperated from the front end. However, with this smaller project and team, it will suffice to keep Sanity in the same repository for quick and easy access.

### So, what is Sanity?

In essence, it's a headless CMS. What's a headless CMS you might ask? It is an API that holds all the data you can fill in and it lets you access it from any front end using a _middleman_. This middleman contains the code that allows you to connect to the CMS, and in this case Sanity. Here's a graphic I made, explaining the concept:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/nextjs-sanity.png)

As specified earlier in this week, Sanity comes with a front end studio. It will have a structure of custom _schemas_ that you can create yourself. These schemas make up the fieldsets for any content you desire to have in the website. Within the studio you can edit these schemas and publish those changes to the Sanity API.

To get started, I ran the following command in the terminal:

```
sanity init
```

I was then greeted with the following:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/sanity-setup.jpg)

Pretty sweet right? It gives me a complete overview of what I did, and because it takes place in the terminal I can easily and quickly get back to work.

As you can see, the most important part is the `sanity start` command. It will run the studio in the browser as localhost, and give you the starting point for the CMS. When I run it, it looks like this:

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/sanity-first-run.jpg)

So, what does the "Sanity" folder look like?

![image](https://raw.githubusercontent.com/mwdossantos/portfolio/master/docs/images/sanity-folder.jpg)

You'll see it contains a lot of _setup_ files and folders that are neccesary but not important to touch upon for the sake of this project. The important ones are:

-   `/plugins`
    -   If I ever need to create a custom plugin for the Sanity studio, I can do that here. Probably not neccesary for this project though.
-   `/schemas`
    -   This folder will contain any and all _custom_ schemas that I create for the studio. Think of schemas as a set of custom fields, that you can create, order and edit in the studio

It's really barebones at the moment, and I can't do much with it yet. [Next week](https://github.com/mwdossantos/portfolio/blob/master/docs/week-17.md) I will dive deeper into the configuration of Sanity and the studio so that we can start working with some data.

# Next week

Looking back at this week, I am happy to say that I see great potential in the teamwork aspect of this project. I am interested in seeing how that progresses the next few weeks as both Bo and Wenyi need to work on resits next to this project.

Speaking about my activities of this week, I am very happy to see that I am taking everything I learned from AstroPlant and am getting even better at creating such a complex project. I do see that it's really going to be just me for the programming aspect, but I am sure I can handle it.

[Next week](https://github.com/mwdossantos/portfolio/blob/master/docs/week-17.md) is going to be interesting, as I said earlier, I will focus on defining the data model for the studio. This way I can build the front end around the data instead of the other way around.

# Resources

https://trello.com/mwdossantos/boards
https://github.com/
https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax
https://code.visualstudio.com/
https://nextjs.org/
https://www.sanity.io/
https://getbootstrap.com/
