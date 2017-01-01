---
date: 2017-01-05
title: DNS Resolution
draft: true
slug: dns-resolution
tags: []
---

**This is just a note really. Not really sure what this post
will be about**

## DNS Resolution

A while ago, this [question](http://stackoverflow.com/questions/39358426/insomnia-rest-client-error)
appeared on Stack Overflow. It was claiming that Insomnia failed to contact `localhost`, but a 
competing client (Postman) could. I also received several other complaints about similar problems
as well. Since I was unable to reproduce this bug, this ended up being a source of pain for months,
which I was finally able to resolve.

I wondered why `curl` didn't suffer from this same problem so I studied it's behaviour and 
realized that `curl` would first attempt to contact `::1` (IPv6) and on failure fallback to
`127.0.0.1` (IPv4).

My initial solution was to use Node's [`dns`](https://nodejs.org/api/dns.html) to first resolve
the IPv6 or IPv4 address manual, then substitute the IP address into the URL, set the `Host`
header, and finally call `request`. This, however, resulted in odd behaviour because the
URL that the receiving web server would see would have the IP address instead of the hostname.
I needed another solution.

Eventually, I found an undocumented way to force `request` to use IPv6 or IPv4 so I was able to
delete the hacky DNS code and delegate the work to the Node network stack. This solution has
actually been working great so far, so it's not really a knock against Node. It merely points
out one example of how being low-level can actually hurt the developer experience.
