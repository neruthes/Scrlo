# Scrlo Documentation

## Introduction

This document specify how Scrlo work and how script writer should design their scripts.

## Catalog

- Design Targets
- Scrlo Configuration Specification
- Scrlo Behavior Specification
- Script Design Manual

## Design Targets

The design target of Scrlo is to allow the users to execute arbitrary predefined remote scripts in web browsers where using browser extensions is difficult or impossible but using bookmarklets is fine. Scrlo is designed to be the omnihub for user scripts which are commonly implemented as bookmarklets, where multiple scripts may be aggregated into one single bookmarklet entry, and hence the user may specify automation policies for scripts.

There are limitations which Scrlo is not expected to solve. Content Security Policy is designed to restrict site scripts instead of user scripts. However, in majority implementations of web browsers, CSP do affect the execution of user scripts including bookmarklets. Scrlo cannot mitigate CSP.

## Scrlo Configuration Specification

### Overview

Each Scrlo bookmarklet instance require un configuration file in JSON which is publicly readable over HTTPS.

The configuration file may look like this:

```json
{
    "meta": {
        "icon_url_template": "https://neruthes.xyz/jsu/scrlo-icons/{{ID}}.png"
    },
    "scripts": [
        {
            "name": "Enhance Wikipedia",
            "id": "6b747739dc4e4d5ab18bfe7906fafb45",
            "url": "https://neruthes.xyz/jsu/site-specific-css/wikipedia.js",
            "match": [
                "\\w{2}\\.wiki.+?\\.org"
            ],
            "auto": [
                "\\w{2}\\.wikipedia\\.org"
            ]
        }
    ]
}
```

### Metadata

Scrlo support 1 metadata field.

Field Name              | Description
----------------------- | -----------
`icon_url_template`     | String. Un URL template. Scrlo with replace "{{ID}}" with the `id` of the script to determine the URL of the icon for the script.

### Script Entry

There are 5 fields in un entry.

### Entry Data Fields

Field       | Mandatory     | Description
----------- | ------------- | -----------
`name`      | Yes           | String. Name.
`id`        | No            | String[UUID]. UUID, hex, lowercase, hyphenless. Unique for each script.
`url`       | Yes           | String. URL of the JavaScript file.
`match`     | No            | String[RegExp]. Show this option in the list of available scripts only when this RegExp can match the URL of the current page.
`auto`      | No            | Array[String[RegExp]]. Automatically executed this script if any of the RegExps can match the URL of the current page.

## Scrlo Behavior Specification

## Script Design Manual
