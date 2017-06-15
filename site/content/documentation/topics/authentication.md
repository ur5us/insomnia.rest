---
title: Authentication
subTitle: Basic, Digest, OAuth, and more
slug: authentication
menu:
    docs:
        parent: topics
        weight: -60
---

Insomnia can automatically generate and send `Authorization` headers for the following
authentication schemes:

- [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication)
- [HTTP Digest Authentication](https://en.wikipedia.org/wiki/Digest_access_authentication)
- [OAuth 2.0](https://tools.ietf.org/html/rfc6749)
- [Microsoft NTLM](https://msdn.microsoft.com/en-us/library/windows/desktop/aa378749(v=vs.85).aspx)

## Configuring Authentication

To configure authentication for a request, select the desired authentication type from the
_Auth_ dropdown, then fill out the required fields.

<img title="Authentication Selection Dropdown" src="/images/docs/authentication.png" class="small"/>

When sending the request, Insomnia will automatically generate and set the `Authoriziation` header
needed. For more complex auth types like OAuth, the app may also prompt the user with a login
form to obtain an OAuth token.
