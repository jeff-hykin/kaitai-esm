// This is a generated file! Please edit source .ksy file and use kaitai-struct-compiler to rebuild

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'kaitai-struct/KaitaiStream'], factory);
    } else if (typeof exports === 'object' && exports !== null && typeof exports.nodeType !== 'number') {
        factory(exports, require('kaitai-struct/KaitaiStream'));
    } else {
        factory(root.Gif || (root.Gif = {}), root.KaitaiStream);
    }
})(typeof self !== 'undefined' ? self : this, function (Gif_, KaitaiStream) {
    var Gif = (function () {
        function Gif(_io, _parent, _root) {
            this._io = _io;
            this._parent = _parent;
            this._root = _root || this;

            this._read();
        }
        Gif.prototype._read = function () {
            this.header = new Header(this._io, this, this._root);
            this.logicalScreen = new LogicalScreen(this._io, this, this._root);
        }

        var Header = Gif.Header = (function () {
            function Header(_io, _parent, _root) {
                this._io = _io;
                this._parent = _parent;
                this._root = _root;

                this._read();
            }
            Header.prototype._read = function () {
                this.magic = this._io.readBytes(3);
                if (!((KaitaiStream.byteArrayCompare(this.magic, new Uint8Array([71, 73, 70])) == 0))) {
                    throw new KaitaiStream.ValidationNotEqualError(new Uint8Array([71, 73, 70]), this.magic, this._io, "/types/header/seq/0");
                }
                this.version = this._io.readBytes(3);
            }

            return Header;
        })();

        var LogicalScreen = Gif.LogicalScreen = (function () {
            function LogicalScreen(_io, _parent, _root) {
                this._io = _io;
                this._parent = _parent;
                this._root = _root;

                this._read();
            }
            LogicalScreen.prototype._read = function () {
                this.imageWidth = this._io.readU2le();
                this.imageHeight = this._io.readU2le();
                this.flags = this._io.readU1();
                this.bgColorIndex = this._io.readU1();
                this.pixelAspectRatio = this._io.readU1();
            }

            return LogicalScreen;
        })();

        return Gif;
    })();
    Gif_.Gif = Gif;
});