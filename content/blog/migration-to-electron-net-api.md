---
date: 2017-01-05
title: Migrating from Node to Electron's Network Stack
slug: migrating-from-node-to-electron-network-stack
draft: true
tags: ["engineering", "refactor"]
---

While doing the original architecture planning for a new version of Insomnia based on
[Electron](http://electron.atom.io/) (it was previously a Chrome app), there was one decision 
that mattered more than all the others. This 
decision was whether to use Electron's browser-side network stack via 
[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) 
or Node's network stack (since Electron provides both browser and Node environments).

<!--more-->

After some tinkering, I chose Node's network stack because of it's more flexible and
lower-level API. I thought, "If it can't be achieved in Node, there is no way I'll be able to
do it otherwise". This decision, however, has ended up haunting me ever since.

## Node's Network Stack is Bad for Desktop Apps

Node is designed to run in highly controlled server environments, making it a poor 
fit for the wild west of desktop computers. To help demonstrate this point, imaging the 
scenario where a user has a system-wide proxy configured.

If you're using a desktop app like Chrome, it will automatically check for proxy settings and
use them. This prevents the user (who may not be tech-savvy) from having to configure it manually. 
However, since Node is designed to run on servers, it is okay for it to assume that any 
required proxy settings will be supplied to it explicitly by the developer.

This creates a problem for Insomnia because, ideally, it acts in the same way as Chrome. However
writing automatic proxy detection for Windows, Mac, and Linux is just too much work for a single
developer like me.

## Introducing Electron's `net` API

About a month ago, Electron introduced a new
[`net`](http://electron.atom.io/docs/api/net/) API. This API exposes Chromium's native 
networking library (used by Chrome) as a clean an simple interface. This makes many
of the user-experience-improving features of Chrome (such as proxy detection) trivial. 
Yay!

Unlike Node, Chrome _is_ a desktop app. The ability to operate in varying desktop 
environments is crucial to its success. This means it must know how to detect system 
proxies, work behind firewalls, and play nice with corporate networks. If you think 
about it, **Insomnia is just like a web browser**. Like Chrome, it must adapt to every
environment. Or die. Why woudn't I use it?

As soon as I made this realization, I started digging into Electron's docs to see if the
`net` API could support all of Insomnia's existing features. After some quick research, I 
was able to verify that it _should_ work, so I opened up my editor to start confirming my
hypothesis. 

It took less than a day of hacking to adapt the existing networking code to use the `net` 
module. It went even better than expected.

## Implementing the `net` Module

Implementation of the `net` module was fairly trivial. 

**Managing cookies:**
Sending cookies using the `net` API is basically the same as with `request`, but instead of
interacting with a `Jar` object, you interact with a 
[`session`](http://electron.atom.io/docs/api/session/#sessetcertificateverifyprocproc), which
does a lot more than manage cookies. The `session` object will also be used to do most other 
things required for this migration.

**Manual proxy settings:**
The `request` library has proxy support built in. The proxy URL is simply set as an option
at request time, and the library takes care of the rest. Doing this with the `net` API can 
be done with the 
[`session.setProxy()`](http://electron.atom.io/docs/api/session/#sessetproxyconfig-callback)
method.

**Disabling SSL validation:**
Similar to the proxy configuration. Disabling SSL validation can be done by passing a custom
validation function to 
[`ses.setCertificateVerifyProc`](http://electron.atom.io/docs/api/session/#sessetcertificateverifyprocproc)
that always returns `true`.

**Sending multipart data:**
The `request` library was previously being used to handle multipart form requests. Luckily,
this is a fairly easy problem to solve, and there is a handy 
[`form-data`](https://github.com/form-data/form-data) module for generating bodies for multipart
requests.

**Client certificates:**
The `request` library provided an easy way to set custom certificates. With the `net` API,
the app will automatically prompt the user to select a certificate if one is needed.

## Roadblocks from Abandoning Node's Networking

I was kind of surprised that I didn't find many hurdles during the migration, but there were
a few minor ones that I hopped over.

**Tests now need an Electron environment:**
Before this migration, all of Insomnia's tests ran in a vanilla Node environment. However, now
that the networking has Electron a dependency, the testing environment needed to be changed.
Luckily, Electron provides an awesome set of testing tools, which made this transition trivial.
Also, this change came with the added benefit of using the exact same environment for testing
that the app runs in.

**Saying goodbye to the CLI possibility:**
Another downside to having Electron as a dependency for networking is that it requires Electron
(duh!). This means that providing future functionality to make a command line version of the app
is no longer possible (unless Electron comes bundled). This isn't really something that I 

**Vendor lock-in:**
If you think about it, Insomnia is already locked-in to Electron. Currently, the options for
an independent developer to build a cross-platform desktop app are slim. If Electron goes away,
Insomnia is probably dead anyway. This change simply makes that fate more certain.

**Loss of low-level control:**
Node.js is extremely flexible. It allows the developer to go low-level when needed, which is
useful for an app like Insomnia. While the current `net` API covers all features that Insomnia
supports at this time, there may be features that come up in the future that won't be possible.
For example, the `net` API does not allow low-level control over things like TLS, which may end
up being a valuable feature in the future.

## Final Thoughts


