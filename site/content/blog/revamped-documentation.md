---
date: 2017-11-13
title: New Documentation Website
slug: new-documentation-website
tags: ["announcement"]
---

I'm happy to announce the new and improved 
[Documentation Website](https://support.insomnia.rest) for Insomnia!
The new site is built using HelpScout [Knowledge Base](http://helpscout.com/), which was
chosen for two reasons. (1) Insomnia was already using HelpScout to manage support email, 
and (2) it solved all the major shortcomings of the old documentation site with no extra 
development effort.

<!--more-->

The old documentation site had many problems but there were three main ones that drove the
decision to try something completely new.

## Lower Maintenance Friction 📝

Creating and updating help docs on the old system was not easy. It required opening a text editor,
creating or editing markdown files, syncing changes with Git, and deploying 
a new release. This meant that simple things like fixing a typo would take a minimum of a few
minutes. And don't even get me started on how hard it was to add screenshot images.

With the new system, all editing is done online. This make creating, organizing, and managing 
help articles a breeze which should dramatically increase the quality of documentation in the 
future. And, uploading screenshots is as easy as taking a screenshot and pasting it into the
editor.
  
## Better Discoverability 🔍

HelpScout's Knowledge Base tool is specifically designed for hosting documentation, so it 
comes bundled with many features that help improve discoverability. The main one being search.

![Documentation Search](/images/blog/docs-search.png)

If you visit the main [insomnia.rest](https://insomnia.rest/) website, you will also notice a
help _beacon_ at the bottom-right of every page. This beacon gives the ability to quickly search 
and view help articles and also provides the option to send an email 
if more assistance is required, all without leaving the page!

## Search Analytics 📊

With the old documentation site it was possible to tell what the most popular _existing_ help 
articles were, but it was impossible to tell which help articles should be created. 
This is where search comes in. Search terms that yield no results effectively act as a to-do
list for which articles need to be created.

In fact, less than a day after launching the new documentation site, there were
many failed searches for _graphql_. So, I put together an article on
[Using GraphQL](support.insomnia.rest/article/61-graphql) in less than an hour and published it
that same day!

![Search Analytics](/images/blog/docs-analytics.png)

## Wrap-Up

It's been less than a week since the new documentation website was released but it's already
having a positive effect. The reduced editing friction has already improved the quality of 
articles and I already have a growing list of new articles that need creating. 

I hope you all enjoy the new and improved documentation site and please feel free to reach out
with any feedback or questions you may have!
