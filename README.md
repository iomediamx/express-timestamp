#express-timestamp
Add timestamp to Express request

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install
```sh
$ npm install express-timestamp
```

## Usage
```javascript
var time = require('express-timestamp')

app.use(time.init)
```

## moment

express-timestamp creates a new moment when a new request is recived using [moment-timezone](http://momentjs.com/timezone/) so you can use any of the formating, manipuation and other functions in [moment](http://momentjs.com/docs/).

## Examples

```javascript
var time = require('express-timestamp')

var express = require('express')
var app = express()

app.use(time.init)
app.get('/', function (request, response) {
  console.log(request.timestamp)
  // logs moment
})
```

```javascript
var time = require('express-timestamp')

var express = require('express')
var app = express()

app.use(time.init)
app.get('/', function (request, response) {
  var moment = request.timestamp
  console.log(moment.tz("America/Mexico_City").format();)
  // logs moment in YYYY-MM-DDThh:mm:ss-05:00 format
})
```

## License
Copyright (c) 2016 io media, S.A. de C.V.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
