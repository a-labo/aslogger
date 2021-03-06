aslogger
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/a-labo/aslogger
[bd_travis_url]: http://travis-ci.org/a-labo/aslogger
[bd_travis_shield_url]: http://img.shields.io/travis/a-labo/aslogger.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/a-labo/aslogger
[bd_travis_com_shield_url]: https://api.travis-ci.com/a-labo/aslogger.svg?token=
[bd_license_url]: https://github.com/a-labo/aslogger/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/a-labo/aslogger
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/a-labo/aslogger.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/a-labo/aslogger.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/a-labo/aslogger
[bd_gemnasium_shield_url]: https://gemnasium.com/a-labo/aslogger.svg
[bd_npm_url]: http://www.npmjs.org/package/aslogger
[bd_npm_shield_url]: http://img.shields.io/npm/v/aslogger.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

A logger

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install aslogger --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const aslogger = require('aslogger')

// Create a logger instance
let logger = aslogger({
  PREFIX: '[my-package] ',
  disabled: process.env.NODE_ENV === 'production'
})

// Print logs with ansi colors
logger.notice('This is notice message')
logger.info('This is info message')
logger.debug('This is debug message')
logger.trace('This is trace message')

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/a-labo/aslogger/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [a-labo][a_labo_url]
+ [colorprint][colorprint_url]

[a_labo_url]: https://github.com/a-labo
[colorprint_url]: https://github.com/okunishinishi/node-colorprint#readme

<!-- Links End -->
