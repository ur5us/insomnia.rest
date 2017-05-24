---
title: "Cookie Management"
slug: "cookie-management"
menu:
    docs:
        parent: "topics"
        weight: -80
---

Insomnia automatically stores cookies from every response and sends them with every request. Click
on the cookie manager at the top of the sidebar to create, edit, and delete cookies.

![Insomnia REST Client Cookies Management](/images/docs/cookies.png)

## Adjust Send/Store Behavior

Cookie behavior can be adjusted via the request settings dialog

### [Option] Send cookies automatically

Enabling this option will cause Insomnia to automatically send cookies
with the request via the `Cookie` header.

### [Option] Store cookies automatically

Enabling this option will cause Insomnia to save any cookies received via the 
`Set-Cookie` header automatically.
