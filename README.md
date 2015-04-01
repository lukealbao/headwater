# Headwater the Stream

You have a streaming pipeline, but you want to feed a plain old function into it. No problem. Just wrap any function in this headwater package and when you call it, it will return a readable stream that you can pipe into your pipeline.

## Install

```
npm install headwater
```

Or add it to your `package.json.`

## Usage

```javascript
var headwater = require('headwater');

// Second parameter is a Boolean: stream in objectMode?
var streamingVersion = headwater(someFunction, true);

streamingVersion(someData).pipe(someWritableStream)
```

That's all we got!
