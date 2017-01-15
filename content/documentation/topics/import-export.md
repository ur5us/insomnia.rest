---
title: "Import/Export"
slug: "import-export"
menu:
    docs:
        parent: "topics"
---

Insomnia supports the ability to import multiple file types. Right now, the supported formats 
are **Insomnia**, **Postman v2**, **HAR**, and **Curl**.

## Export Format Specification

The Insomnia export format is currently on version `3` and is subject to change. 

_NOTE: [github.com/getinsomnia/importers](https://github.com/getinsomnia/importers) has
support for migrating older export versions to the latest, as well as supporting external
formats like [HAR](http://www.softwareishard.com/blog/har-12-spec/), 
[Postman](https://www.getpostman.com/), and [Curl](https://curl.haxx.se/)._

### Root Export Object

```json
{
  "_type": "export",
  "__export_format": 3,
  "__export_date": "2017-01-10T23:15:55.928Z",
  "__export_source": "insomnia.desktop.app:v4.0.13",
  "resources": [{
    "_type": "request",
    "url": "https://google.com"
  }]
}
```

- `_type`: Only possible value currently is `export`
- `__export_format`: Specifies the data schema of the export
- `__export_data`: ISO timestamp of the time of export
- `resources`: All exported resources (see below for resource types)

### Common Resource Properties

```json
{
  "_type": "resource_type",
  "_id": "type_111",
  "parentId": "type_4567",
  "created": 1484090000356,
  "modified": 1484090000356,
  "...": "..."
}
```

- `_type`: See below sections for possible resource types
- `_id`: Id representing the resource
- `parentID`: Resource ID of parent object (folder or workspace)
- `created`: When the resource was created
- `modified`: When the resource was last modified

#### Special Resource IDs

`__WORKSPACE_ID__`<br>
Maps to the ID of the currently active workspace

`__BASE_ENVIRONMENT_ID__`<br>
Maps to the ID of the active workspace's base environment

`__<NAME>_<NUMBER>__`<br>
Any value matching this format will deterministically generate a new ID
at import time.

```json
[{
  "_type": "workspace",
  "_id": "__WORKSPACE_1__"
}, {
  "_type": "request",
  "_id": "__REQUEST_1__",
  "parentId": "__WORKSPACE_1__"
}]
```

## Resource Types

These are the possible resource types that can be imported/exported.

- [`workspace`](#resource-type-workspace)
- [`environment`](#resource-type-environment)
- [`request_group`](#resource-type-request_group)
- [`request`](#resource-type-request)

### Resource Type: `workspace`

```json
{
  "_type": "workspace",
  "_id": "__WORKSPACE_ID__",
  "parentId": null,
  "created": 1484090000356,
  "modified": 1484090000356,
  "name": "My API Project",
  "description": "This the API for https://api.insomnia.rest/"
}
```

- `name`: Name of workspace
- `description`: Plain text description of workspace

### Resource Type: `environment`

```json
{
  "_type": "environment",
  "_id": "__ENVIRONMENT_1__",
  "parentId": "__WORKSPACE_ID__",
  "name": "Development",
  "data": {
    "base_url": "https://insomnia.rest",
    "user_id": "user_123",
    "...": "..."
  }
}
```

- `name`: Name of environment
- `data{}`: User-defined data representing the environment

### Resource Type: `request_group`

```json
{
  "_type": "request_group",
  "_id": "__FOLDER_2__",
  "name": "New Folder",
  "parentId": "__FOLDER_1__",
  "created": 1484090000356,
  "modified": 1484090000356,
  "metaSortKey": 1,
  "environment": {
    "url": "{{ base_url }}/my/awesome/path",
    "...": "..."
  }
}
```

- `name`: Name of the folder
- `metaSortKey`: Sort priority relative to its siblings
- `environment`: User-defined environment override data

### Resource Type: `request`

```json
{
  "_type": "request",
  "_id": "__REQUEST_1__",
  "parentId": "__FOLDER_2__",
  "created": 1484090000356,
  "modified": 1484090000356,
  "name": "My Request",
  "method": "POST",
  "url": "https://insomnia.rest/foo/bar",
  "body": {
    "mimeType": "multipart/form-data",
    "text": "",
    "params": [{
      "type": "file",
      "name": "my_file",
      "fileName": "/home/amy/hello.txt",
      "disabled": false
    }, {
      "type": "text",
      "name": "foo",
      "value": "bar",
      "disabled": false
    }, {
      "type": "text",
      "name": "blah",
      "value": "bar",
      "disabled": true
    }]
  },
  "parameters": [{
    "name": "limit",
    "value": "10",
    "disabled": false
  }],
  "headers": [{
    "name": "Content-Type",
    "value": "application/json",
    "disabled": false
  }],
  "authentication": {
    "username": "User",
    "password": "Pass"
  },
  "metaSortKey": 10
}
```

- `name`: Name of the request
- `metaSortKey`: Sort priority relative to its siblings
- `method`: Request method (GET, POST, ...).
- `url`: Absolute URL of the request
- `body{}`: Body of the request
    - `mimeType`: Mime type of posted data
    - `text`: Plain text posted data
    - `fileName`: File path to binary body
    - `params[]`: List of form parameter objects
        - `name`: Name of the parameter
        - `type`: Either `text` or `file`
        - `value`: Value of the parameter
        - `fileName`: File path of param 
        - `disabled`: If `true`, the entry will be ignored
- `parameters[]`: Array of URL query parameters
    - `name`: Name of parameter
    - `value`: Value of parameter
    - `disabled`: If `true`, the entry will be ignored
- `headers[]`: Array of HTTP header objects
    - `name`: Name of parameter
    - `value`: Value of parameter
    - `disabled`: If `true`, the entry will be ignored
- `authentication{}`: HTTP authentication (currently only basic auth supported)
    - `username`: Username for HTTP Basic Auth
    - `password`: Password for HTTP Basic Auth
