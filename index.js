/*
 * Headwater.js
 * 
 * Transform a function into the source for a streaming pipeline.
 * 
 * Author: Luke Albao <https://www.github.com/lukealbao>
 * License: MIT
 */

var Readable = require('stream').Readable;
var inherits = require('util').inherits;

function HeadwaterStream (objectMode) {
    if (!(this instanceof HeadwaterStream)) {
        return new HeadwaterStream();
    }

    Readable.call(this, {objectMode: objectMode});
    this._data = null;

}

inherits(HeadwaterStream, Readable);

HeadwaterStream.prototype._read = function () {
    this.push(this._data);
    this._data = null;
};

module.exports = function headwater (func, objectMode) {
    objectMode = objectMode || false;
    return function () {
        var stream = new HeadwaterStream(objectMode);
        stream._data = func.apply(null, arguments);
        return stream;
    }
}
