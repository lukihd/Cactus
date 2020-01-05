# Cactus Calendar

## Introduction

**Cactus** is a group of prejects created by Lukihd. They're all made for assisting people in everyday's tasks simply with a **Raspberry Pi**.

This one is a calendar and task registry, made with Node JS, MongoDB and Redis. All that is possible thanks to **docker-compose**

## What you need to know about

### Requirement

- Raspberry pi 3B or better
- Docker
- docker-compose

### Technologies used

The app is develloped in **NodeJS 13.5** currently and using multiple modules like `mongoose`, `express`, `passport` and many other that you can look in the `package.json` file.

We choose to use MongoDB fot the database due to it's flexibility. In fact it allow us to easily add new tasks and supporting a large amount of data. **We know that your not organize** so we took one step ahead.

## Functionnalities

### Authentication

So first of all, you'll can create an account ! That's awesome nobody's never thinking about that before. But we haven't stop there. We also made fully login page !

And that's all for authentification, I know you're impressed.

### Tasks

So now, we get in the heart of the matter. **Tasks**. So what can we exactly can do with this app ? Well, I'll answer to you.

EVERY task you wanted to create can be in it. Currently we have five task waiting for implementation. And we need your help ti add any task you wanted us to create.

Here the exaustive list of all the task planned or implemented :

- [Rendez-vous](#rendez-vous)
- [Event](#event)
- [Delivery](#delivery)
- [Routine](#routine)
- [Shopping list](#shopping-list)

Each task has :
- a title
- a description
- an author
- an importance
- a status
- a type (wich you can found above).

#### Rendez-vous

So in this task you'll be able to set a `rendez-vous` at a precise date, time. You can set a place where you rendez-vous is and with who.

Here's non exhaustive list of possibilities :
```
Only set a day
  The 19/02/2020

Date hours and minutes
  The 01/06/2021 at 12am 39m

Date and hour to data and hour
  from 15/01/2020 at 6am to 15/01/2020 at 9am

Date to date
  from 26/02/2020 to 06/03/2020
```

You can find [here](/resources/mongo-model.md) to know how the mongodb schema is made.

#### Event

In the `event` task, you'll be able to make the same things as above in the [rendez-vous](#rendez-vous) section. The difference is that you can't set with who you're doing it.

You coul'd say this task is useless but not becaus you can specify what you need to take.

(This event is subject at changement and could be fusion with the [rendez-vous](#rendez-vous) task)

#### Delivery

We all have this day where you order a new useless object because "you need it". But realy not, and you refresh the delivery page to know when it will be delivered. 

If not no problem. You're a good person.

And whatever you order this task will help you. You can set :
- delivery date
- who's delivering
- link to the delivery page
- where it will be delivered
- parcel number

So now from a single web page you will see all your delivery informations. You did'nt have to enter your parcel code on each delivery website, jsut click on the link.

Simple and Usefull task unlike some "usefull" order. 

#### Routine

This will help many people I hope. In the `routine` task you'll be able to say each saturday you make a big cleaning of shower for example.

You can set things like :
```
  Hey I want to eat fish each friday at 7pm
```
Or
```
  So each month I'll take 30 minutes to call my mom (call your mom, REALY, she will be happy)  
```
Or something like
```
  Each 5 of month I need to pay my rent
```

#### Shopping list

Same as the name. You'll be able to add some stuff to your shopping list, and access to them on your phone when you're at the supermarket. 
But it also be usefull when you would by something later but it's not so important now. So you could set a lower importance.

