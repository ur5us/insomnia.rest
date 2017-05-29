---
title: Template Tags
subTitle: Useful functions 
slug: template-tags
menu:
    docs:
        parent: topics
        weight: -90
---

Template Tags are an extension of [environment variables](/documentation/environment-variables/).
While a variable is a statically defined value, tags are able to provide more advanced behaviour
such as generating UUIDs or timestamps.

Insomnia currently provides the following template tags.

- **Now** – generate timestamps in various formats
- **UUID** – generate a unique UUID
- **Base64** – encode/decode values
- **Response Value** – reference value from another responses

To insert a template tag, press `CTRL+Space` wherever 
[environment variables](/documentation/environment-variables/) can be used.
Template tags will appear below environment variables and are marked with an `ƒ`.

<img title="Autocomplete for dynamic template tags" src="/images/docs/template-tag-autocomplete.png" class="small"/>

After insertion, a tag's parameters can be customized by clicking on the tag itself. Here's
what it looks like to edit the `Now` tag.

![Autocomplete for dynamic template tags](/images/docs/now-tag-editor.png)
