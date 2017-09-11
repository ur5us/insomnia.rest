---
title: Environment Variables
subTitle: Define and reuse common values across requests
slug: environment-variables
menu:
    docs:
        parent: "topics"
        weight: -100 
---

Insomnia supports the ability to share common variables across requests and manage them
in one place. The environment is defined as JSON, and you can put whatever you want in it. 

**Sample Environment:**

```json
{
	"base_url": "https://api.myproduct.com/v1",
	"api_key": "live_0a7b973038f4f6ee5",
	"user_id": "user_0138tsrat8902n4pt",
	"name": "gregory schier",
	"locales": {
		"english": "en-US",
		"french": "fr-FR"
	}
}
```

<p class="notice warn">
Variable names <strong>must only</strong> contain letters, numbers, and underscores
</p>

You can reference the environment in any request by using the
[Nunjucks](https://mozilla.github.io/nunjucks/) template syntax.


**Sample URL:**

```twig
{{ base_url }}/users/{{ user_id }}
```


**Sample JSON Request body:**

```twig
{
  "type": "User",
  "id": "{{ user_id }}",
  "name": "{{ name | title }}",
  "locale": "{{ locales.english }}"
}
```

## Managing Environments

You can open the environment manager by clicking the environments dropdown in the top left.
From there, you can edit the global environment, or create sub-environments.

![Environment Dialog](/images/docs/environments.png)


### Base Environment

Variables in the global environment can be used in any request at any time. It is also common
to reference other environment variables from the base environment to cut down repetition. Here's
an example of building a `base_url` from `scheme` and `host` variables defined in the sub
environment.

![Base environment referencing other variables](/images/docs/base-environment.png)


### Sub Environments

Variables in sub environments can be used when the desired sub environment is active. You can 
activate a sub environment by clicking it in the environment dropdown, located near the top
of the sidebar.

<p class="notice info">
<strong>Tip!</strong> Sub environments can be created as <strong>Private</strong>, meaning it will
they will never be synced or exported.
</p>

Sub environments can also be assigned a specific color, to help identify which environment
is active at a given time.

![Insomnia Environment Dropdown](/images/docs/environment-dropdown.png)

### Environment Overrides

For more fine-grained control, you can override environment variables at the folder level. 
You can access theses overrides from the folder dropdown in the sidebar.


## Recursive Environments

Environment variables can contain other environment variables. A common use case for this
is building the base URL for a service:

```json
{
  "base_url": "https://{{ host }}/api/{{ version }}"
}
```

Then, these can be overridden in a sub environment, as needed:

```json
{
  "host": "production.api.com",
  "version": "1.3"
}
```

