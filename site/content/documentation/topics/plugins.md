---
title: Plugins
subTitle: Extend Insomnia's core functionality
slug: plugins
menu:
    docs:
        parent: "topics"
---

<p class="notice warn">
The plugin API is a work in progress and will likely change in the future
</p>

For most use-cases, Insomnia's core feature set will suffice. However, for certain things
like custom authentication mechanisms or complex workflows, more advanced behavior may be
required. 

This document provides an overview of Insomnia's plugin APIs, which can be used to extend
the functionality of Insomnia. 

## Index

- [Introduction](#introduction)
- [Create a Plugin](#create-a-plugin)
- [Debugging](#debugging)
- [Template Tags](#template-tags)
- [Hooks](#hooks)
  - [Request Hooks](#request-hook-api)
  - [Response Hooks](#response-hook-api)

## Introduction

There are two general types of plugins that you can create for Insomnia. A plugin can
either add a custom _template tag_ for rendering custom
values, or defined a _hook_ which can do things like intercept requests and responses to
add custom behavior.

## Create a Plugin

A plugin is a [NodeJS Module](https://docs.npmjs.com/getting-started/creating-node-modules) that
is placed in a specific directory that Insomnia knows about. 

- **MacOS:** `~/Library/Application\ Support/Insomnia/plugins/`
- **Windows:** `%APPDATA%\Insomnia\plugins\` 
- **Linux:** `$XDG_CONFIG_HOME/Insomnia/plugins/` or `~/.config/Insomnia/plugins/`

A plugin directory requires at least two files:

```shell
base64/             
 ├── package.json   # Node module metadata
 └── *.js           # One or more JavaScript files 
```

<p class="notice info">
The <code>package.json</code> must contain an <code>insomnia</code> attribute to be
identified as a plugin.
</p>

Take a look at the following file to see what a minimal `package.json` should look like.

<details>
<summary>Example: Plugin package.json file</summary>
```js
{
  "name": "insomna-plugin-base64",  // Npm module name
  "version": "1.0.0",               // Plugin version
  "main": "plugin.js",              // Entry point
  
  /**
   * Insomnia-specific metadata. Without this, Insomnia
   * won't recognize the module as a plugin.
   */
  "insomnia": {                    
    "name": "base64",      // Internal Insomnia plugin name
    "description": "...",  // Plugin description
  },
  
  // External dependencies are also supported
  "dependencies": [],
  "devDependencies": []
}
```
</details>

## Debugging

Navigate to `View > Toggle DevTools` to open the Chrome Developer Tools. From here, you can
debug Insomnia as you would any web project in Chrome.

If you want to focus specifically on the plugin you are developing, you can find it from
the Sources tab and/or filter the Console based on the plugin's file name.

![Debug Plugins with DevTools](/images/docs/plugin-debug.png)

## Template Tags

As mentioned, a custom [Template Tag](/documentation/template-tags/) can be added, which
can then be referenced inside Insomnia's template system to render custom values. 

```js
type RenderContext = {
  // API not finalized yet
};

type TemplateTag = {
  name: string,
  displayName: string,
  description: string,
  run: (context: RenderContext, ...arg: Array<any>) => string,
  
  args: Array<{
    displayName: string,
    description?: string,
    defaultValue: string | number | boolean,
    type: 'string' | 'number' | 'enum' | 'model',
    
    // Only type === 'string'
    placeholder?: string,

    // Only type === 'model'
    modelType: string,

    // Only type === 'enum'
    options: Array<{
      displayName: string,
      value: string,
      description?: string
    }>
  }>
}
```

<details>
<summary>Example: Template tag to generate random number</summary>
```js
/**
 * Example template tag that generates a random number 
 * between a user-provided MIN and MAX
 */
module.exports.templateTags = [{
    name: 'random',
    displayName: 'Random Integer',
    description: 'Generate random things',
    args: [
        {
            displayName: 'Minimum',
            description: 'Minimum potential value',
            type: 'number',
            defaultValue: 0
        }, 
        {
            displayName: 'Maximum',
            description: 'Maximum potential value',
            type: 'number',
            defaultValue: 100
        }
    ],
    async run (context, min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
}];
```
</details>

## Hooks

Plugins can implement "hook" functions that get called when certain things happen. A plugin
can currently export two different types of hooks:'

```js
type RequestContext = {
    app: AppContext,            // Defined Below
    request: RequestContext     // Defined Below
};

type ResponseContext = {
    app: AppContext,            // Defined Below
    response: ResponseContext   // Defined below
}

// Hooks are exported as an array of "hook" functions which get 
// called with the appropriate plugin API context.
module.exports.requestHooks = Array<(context: RequestContext) => void]
module.exports.responseHooks = Array<(context: ResponseContext) => void]
```

### Request Hook API

```js
// context.request functions
type RequestContext = {
    getId (): string 
    getName (): string 
    getUrl (): string 
    getMethod (): string 
    getHeader (name: string): string | null 
    hasHeader (name: string): boolean 
    removeHeader (name: string): void 
    setHeader (name: string, value: string): void 
    addHeader (name: string, value: string): void 
    setCookie (name: string, value: string): void 
}
```

<details>
<summary>Example: Set Content-Type header on every POST request</summary>
```js
// Request hook to set header on every request
module.exports.requestHooks = [
  context => {
    if (context.request.getMethod().toUpperCase() === 'POST') {
      context.request.setHeader('Content-Type', 'application/json');
    }
  }
];
```
</details>

## Response Hook API

```js
// context.response functions
getRequestId (): string;
getStatusCode (): number
getStatusMessage (): string
getBytesRead (): number
getTime (): number
getBody (): Buffer | null
getHeader (name: string): string | Array<string> | null
hasHeader (name: string): boolean
```

<details>
<summary>Example: Save response to file</summary>
```js
// Response hook to save responses to filesystem
const fs = require('fs');
module.exports.responseHooks = [
  async context => {
    // Get response body as Buffer
    const body = context.response.getBody();

    // Build the file path
    const desktop = context.app.getPath('Desktop');
    const savePath = await context.app.showSaveDialog({
      defaultPath: path.join(desktop, 'response.txt')
    });

    // Save the file if the user selected a path
    if (savePath) {
      fs.writeFileSync(savePath, body);
    }
  }
];
```
</details>

### Hook Helpers

There are some shared API functions available to all hook types.

```js
type DialogOptions = {
  defaultPath?: string
};

async showSaveDialog (options: DialogOptions = {}): Promise<string | null> 
alert (message: string): Promise<void> 
getPath (name: string): string 
```
