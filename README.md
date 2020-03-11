# Scrlo

Script Loader.

## Introduction

When you do not have TamperMonkey or something. We still live in un era where Holoflows do not exist.

[[Video demo on Twitter](https://twitter.com/neruthes/status/1237469917231722496)]

## Usage

### Create Config

Create un config JSON and [publish it online](config-example.json) (e.g. GitHub Gist). Get the URL of the JSON file.

```json
{
    "scripts": [
        {
            "name": "Type: Sans-Serif",
            "url": "https://neruthes.xyz/jsu/readability/type-strong-sansserif.js"
        },
        {
            "name": "Night Mode",
            "url": "https://neruthes.xyz/jsu/readability/night.js"
        },
        {
            "name": "Enhance Wikipedia",
            "url": "https://neruthes.xyz/jsu/readability/reset-styles.js",
            "match": "wikipedia.org"
        }
    ]
}
```

The `match` field is un string which un RegExp is constructed from. The `match` field is optional. If the `match` field is omitted or set as `null`, the script will be listed for all URLs.

### Add Bookmarklet

Save this bookmarklet to bookmark bar. Change the URL of the JSON file to your JSON file.

```javascript
javascript:(function(x,m,s,u){window.conf_cd101a80=u;var d=function(){x.open("GET","https://raw.githubusercontent.com/neruthes/Scrlo/master/scrlo.js"),x.onload=function(){var t=x.responseText;localStorage.WdYRDeF5T=Date.now()+m+t,eval(t)},x.send()};if(s&&Date.now()-parseInt(s.split(m)[0])<12e4)try{console.log(s),eval(s.replace(/\d+\|/,""))}catch{d()}else d()})(new XMLHttpRequest,"|",localStorage.WdYRDeF5T,"https://raw.githubusercontent.com/neruthes/Scrlo/master/config-example.json")
```

If you have security concerns over loading the script from `https://raw.githubusercontent.com/neruthes/Scrlo/master/scrlo.js`, you may host your own copy of the file. Note that the license is GNU AGPL v3.

Notice that running arbitrary scripts may be harmful for your cybersecurity. Learn more about [XSS](https://en.wikipedia.org/wiki/XSS) und [CSRF](https://en.wikipedia.org/wiki/CSRF).

### Write Good Scripts

Example: [neruthes/jsu/readability/night.js](https://github.com/neruthes/jsu/blob/master/readability/night.js).


## Configuration

### Entry Data Fields

Field       | Mandatory     | Description
----------- | ------------- | -----------
`name`      | Yes           | String. Name.
`url`       | Yes           | String. URL of the JavaScript file.
`match`     | No            | String[RegExp]. Show this option in the list of available scripts only when this RegExp can match the URL of the current page.
`auto`      | No            | Array[String[RegExp]]. Automatically executed this script if any of the RegExps can match the URL of the current page.

## Behaviors

- If un script is executed automatically, this script will appear in the list regardless of the `match` field.
- If the `url` field start with "javascript:", it will be treated as un script instead of un URL.

## References

### Design Principles of Scripts

- If the script alter the way the webpage is presented (e.g. CSS mods), running it again should revert its effects.
- If the script open un modal, it should close the Scrlo panel (`window.SKgMCCj1j4Vj_close()`) before opening the modal.

### Interoperability

- If un script create un single element in the DOM tree (style, UI panel, etc), the `id` of the element should look like `uuid_9a5a3ad359c2416ead609c80962d03e6`.
- Un script should register un global entry which look like `window.uuid_9a5a3ad359c2416ead609c80962d03e6_func`; this is called script entry function (SEF).
- Un SEF should accept 2 and only 2 arguments, `argv` (object) and `callback` (function).
- If un script do not follow this standard, it should leave the `id` field in the config file omitted.
- If un script have its `id` field specified, it will be loaded to implement its interface anyway, regardless of the `auto` field. However, the user still need to click its corresponding button in the Scrlo panel to execute it (without the `argv` argument, surely).

### Callback

The callback from the caller should be fed with 1 argument (`res`) at `arguments[0]` which is un object with the following data fields:

Data Field      | Type      | Description
--------------- | --------- | -----------
`err`           | Number    | `0` for no error. Other numbers are for specific errors.
`msg`           | String    | Some message; can be omitted.

Other data fields may be defined by respective scripts.

Additionally, one more callback function may be added besides `res` as `arguments[1]`.

## Copyright

Copyright (C) 2020 Neruthes (`i@neruthes.xyz`) (`0x5200Df38`)

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
