# Scrlo

Script Loader.

## Introduction

When you do not have TamperMonkey or something. We still live in an era where Holoflows does not exist.

## Usage

### Create Config

Create a config JSON and publish it online (e.g. GitHub Gist). Get the URL of the JSON file.

```json
{
  "scripts": [
    {
      "name": "Type: Sans-Serif",
      "url": "https://neruthes.xyz/jsu/readability/type-strong-sansserif.js",
      "match": "^http"
    },
    {
      "name": "Night Mode",
      "url": "https://neruthes.xyz/jsu/readability/night.js",
      "match": null
    }
  ]
}
```

The `match` field may be omitted.

### Add Bookmarklet

Save this bookmarklet to bookmark bar. Change the URL of the JSON file to your JSON file.

```javascript
javascript:(function(u){window.conf_cd101a80=u;var xhr=new XMLHttpRequest();xhr.open('GET','//raw.githubusercontent.com/neruthes/Scrlo/master/scrlo.js');xhr.onload=function(){eval(xhr.responseText)};xhr.send()})('//example.com/my-config.json')
```

If you have security concerns over loading the script from `https://neruthes.xyz/Scrlo/scrlo.js`, you may host your own copy of the file. Note that the license is GNU AGPL v3.

## Configuration

// TODO

## Copyright

Copyright (C) 2020 Neruthes (neruthes.xyz)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see \<https://www.gnu.org/licenses/>.
