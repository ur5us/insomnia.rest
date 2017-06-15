---
title: Chaining Requests
subTitle: Reference response values from other requests
slug: request-chaining
menu:
    docs:
        parent: topics
        weight: -50
---

<p class="notice warn">
This is currently an experimental feature
</p>

Insomnia provides the ability to reference response values of other requests. Select
**Response Value** from the auto-completed tags.

<img title="Response tag hint" src="/images/docs/response-tag-hint.png" class="small" />

Then, click the tag to select the request and specify the desired response attribute.

<p class="notice info">
<strong>Tip!</strong> Use this inside an environment to prevent duplicated effort
</p>

![Request chaining dialog](/images/docs/response-tag.png)

## Common Uses

To help explain request chaining, here are some common use-cases:

- use `token` from login response as an `Authorization` header
- use `id` from `POST /item` in `PUT /items/<id>`
