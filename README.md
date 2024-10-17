# Tamagotchi-Crud

React version of the tamagotchi simulator cli app

## Installation

This app uses node v22.9.0 and pnpm 9.1.2.

## TODO's / Plans

Strategy pattern - for handling the logic around tamagotchi interactions

Mobile-first ui - using Tailwind and Daisy UI. Make the ui exciting and fun!!  Investigate CSS animations.

Auth - Use Clerk to set up auth so user logs in and sees their own tamagotchi. Have an admin role, who can see all of the tamagotchis in play.

Interactions and in-game enhancements:

- Delay: Calculate the time since last interaction and display an according sprite / image / message when the user returns to their pet ie are they sad, hungry, even dead?!?!?
- Charting: Show pictographic representations of what's been happening since the tamagotchi was born

Trello board for planning all of the upcoming epics and stories.

Tests 

Routing

Error Handling 

Validation


## Work done so far

- Using the Coding With Callie book crud app as a bit of a guideline, I set up the backend for my app. It uses NestJS (framework for building node server-side applications) and connects to a Postgres database.  I'm using DBeaver to set up and look at the db but alternatives like PGAdmin are available.

- Next I set up the frontend using Vite.  I created a list to display all the tamagotchis in the db, a button to delete a tamagotchi and a form to create new tamagotchis.   I also created a tamagotchi service to handle the api calls to the backend.  Now I knew the basic CRUD app was connected and functional, I could park it and think about what I really want from this app and plan how to do that.

- Styling was needed next, so I installed Tailwind and Daisy UI, then set about designing a bright landing page with basic header / main / footer sections.  

## What have I learned?

There's more to creating an app than I realised when I first had the idea of top trumps football collector card style game.  Previously I was just approaching it from a front-end viewpoint.

I've got a much better understanding of all the workings of the frontend and backend, and how they interact with each other.

I've tried a few different tools so I can see the benefits of one over another, or where you might need to use both.

Learning about design patterns and how they can be used to solve different problems.

The importance of breaking down tasks into smaller and smaller pieces.