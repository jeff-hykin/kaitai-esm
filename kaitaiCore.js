var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://esm.sh/iconv-lite?target=es2022&dev
var iconv_lite_target_es2022_dev_exports = {};
__export(iconv_lite_target_es2022_dev_exports, {
  _canonicalizeEncoding: () => _canonicalizeEncoding,
  _codecDataCache: () => _codecDataCache,
  decode: () => decode,
  default: () => endpoint_default,
  defaultCharSingleByte: () => defaultCharSingleByte,
  defaultCharUnicode: () => defaultCharUnicode,
  enableStreamingAPI: () => enableStreamingAPI,
  encode: () => encode,
  encodingExists: () => encodingExists,
  encodings: () => encodings,
  fromEncoding: () => fromEncoding,
  getCodec: () => getCodec,
  getDecoder: () => getDecoder,
  getEncoder: () => getEncoder,
  toEncoding: () => toEncoding
});

// https://esm.sh/node/string_decoder.mjs
var string_decoder_exports = {};
__export(string_decoder_exports, {
  StringDecoder: () => t,
  default: () => a
});
function r(e2) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${e2} is not implemented yet!`);
    }
  };
}
var t = globalThis.StringDecoder || r("string_decoder.StringDecoder");
var a = { StringDecoder: t };

// https://esm.sh/safer-buffer@^2.1.2?target=es2022&dev
var safer_buffer_2_1_exports = {};
__export(safer_buffer_2_1_exports, {
  constants: () => L2,
  default: () => M3
});

// https://esm.sh/node/buffer.mjs
var buffer_exports = {};
__export(buffer_exports, {
  Blob: () => Yt,
  Buffer: () => jt,
  File: () => Ft,
  INSPECT_MAX_BYTES: () => G,
  SlowBuffer: () => mt,
  atob: () => qt,
  btoa: () => Xt,
  constants: () => Ht,
  default: () => Zt,
  isAscii: () => Vt,
  isUtf8: () => Gt,
  kMaxLength: () => V,
  kStringMaxLength: () => it,
  resolveObjectURL: () => Dt,
  transcode: () => zt
});
function ut(t3) {
  return new Error(`[unenv] ${t3} is not implemented yet!`);
}
function v(t3) {
  return Object.assign(() => {
    throw ut(t3);
  }, { __unenv__: true });
}
var d = [];
var y = [];
var st = typeof Uint8Array > "u" ? Array : Uint8Array;
var N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let t3 = 0, e2 = N.length; t3 < e2; ++t3) d[t3] = N[t3], y[N.charCodeAt(t3)] = t3;
y[45] = 62;
y[95] = 63;
function ht(t3) {
  let e2 = t3.length;
  if (e2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  let n3 = t3.indexOf("=");
  n3 === -1 && (n3 = e2);
  let r3 = n3 === e2 ? 0 : 4 - n3 % 4;
  return [n3, r3];
}
function lt(t3, e2, n3) {
  return (e2 + n3) * 3 / 4 - n3;
}
function at(t3) {
  let e2, n3 = ht(t3), r3 = n3[0], o4 = n3[1], i4 = new st(lt(t3, r3, o4)), u5 = 0, s5 = o4 > 0 ? r3 - 4 : r3, l7;
  for (l7 = 0; l7 < s5; l7 += 4) e2 = y[t3.charCodeAt(l7)] << 18 | y[t3.charCodeAt(l7 + 1)] << 12 | y[t3.charCodeAt(l7 + 2)] << 6 | y[t3.charCodeAt(l7 + 3)], i4[u5++] = e2 >> 16 & 255, i4[u5++] = e2 >> 8 & 255, i4[u5++] = e2 & 255;
  return o4 === 2 && (e2 = y[t3.charCodeAt(l7)] << 2 | y[t3.charCodeAt(l7 + 1)] >> 4, i4[u5++] = e2 & 255), o4 === 1 && (e2 = y[t3.charCodeAt(l7)] << 10 | y[t3.charCodeAt(l7 + 1)] << 4 | y[t3.charCodeAt(l7 + 2)] >> 2, i4[u5++] = e2 >> 8 & 255, i4[u5++] = e2 & 255), i4;
}
function pt(t3) {
  return d[t3 >> 18 & 63] + d[t3 >> 12 & 63] + d[t3 >> 6 & 63] + d[t3 & 63];
}
function ct(t3, e2, n3) {
  let r3, o4 = [];
  for (let i4 = e2; i4 < n3; i4 += 3) r3 = (t3[i4] << 16 & 16711680) + (t3[i4 + 1] << 8 & 65280) + (t3[i4 + 2] & 255), o4.push(pt(r3));
  return o4.join("");
}
function k(t3) {
  let e2, n3 = t3.length, r3 = n3 % 3, o4 = [], i4 = 16383;
  for (let u5 = 0, s5 = n3 - r3; u5 < s5; u5 += i4) o4.push(ct(t3, u5, u5 + i4 > s5 ? s5 : u5 + i4));
  return r3 === 1 ? (e2 = t3[n3 - 1], o4.push(d[e2 >> 2] + d[e2 << 4 & 63] + "==")) : r3 === 2 && (e2 = (t3[n3 - 2] << 8) + t3[n3 - 1], o4.push(d[e2 >> 10] + d[e2 >> 4 & 63] + d[e2 << 2 & 63] + "=")), o4.join("");
}
function _(t3, e2, n3, r3, o4) {
  let i4, u5, s5 = o4 * 8 - r3 - 1, l7 = (1 << s5) - 1, p5 = l7 >> 1, h7 = -7, a4 = n3 ? o4 - 1 : 0, I5 = n3 ? -1 : 1, w6 = t3[e2 + a4];
  for (a4 += I5, i4 = w6 & (1 << -h7) - 1, w6 >>= -h7, h7 += s5; h7 > 0; ) i4 = i4 * 256 + t3[e2 + a4], a4 += I5, h7 -= 8;
  for (u5 = i4 & (1 << -h7) - 1, i4 >>= -h7, h7 += r3; h7 > 0; ) u5 = u5 * 256 + t3[e2 + a4], a4 += I5, h7 -= 8;
  if (i4 === 0) i4 = 1 - p5;
  else {
    if (i4 === l7) return u5 ? Number.NaN : (w6 ? -1 : 1) * Number.POSITIVE_INFINITY;
    u5 = u5 + Math.pow(2, r3), i4 = i4 - p5;
  }
  return (w6 ? -1 : 1) * u5 * Math.pow(2, i4 - r3);
}
function z(t3, e2, n3, r3, o4, i4) {
  let u5, s5, l7, p5 = i4 * 8 - o4 - 1, h7 = (1 << p5) - 1, a4 = h7 >> 1, I5 = o4 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w6 = r3 ? 0 : i4 - 1, L5 = r3 ? 1 : -1, ft = e2 < 0 || e2 === 0 && 1 / e2 < 0 ? 1 : 0;
  for (e2 = Math.abs(e2), Number.isNaN(e2) || e2 === Number.POSITIVE_INFINITY ? (s5 = Number.isNaN(e2) ? 1 : 0, u5 = h7) : (u5 = Math.floor(Math.log2(e2)), e2 * (l7 = Math.pow(2, -u5)) < 1 && (u5--, l7 *= 2), e2 += u5 + a4 >= 1 ? I5 / l7 : I5 * Math.pow(2, 1 - a4), e2 * l7 >= 2 && (u5++, l7 /= 2), u5 + a4 >= h7 ? (s5 = 0, u5 = h7) : u5 + a4 >= 1 ? (s5 = (e2 * l7 - 1) * Math.pow(2, o4), u5 = u5 + a4) : (s5 = e2 * Math.pow(2, a4 - 1) * Math.pow(2, o4), u5 = 0)); o4 >= 8; ) t3[n3 + w6] = s5 & 255, w6 += L5, s5 /= 256, o4 -= 8;
  for (u5 = u5 << o4 | s5, p5 += o4; p5 > 0; ) t3[n3 + w6] = u5 & 255, w6 += L5, u5 /= 256, p5 -= 8;
  t3[n3 + w6 - L5] |= ft * 128;
}
var F = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
var G = 50;
var R = 2147483647;
var V = R;
f.TYPED_ARRAY_SUPPORT = gt();
!f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function gt() {
  try {
    let t3 = new Uint8Array(1), e2 = { foo: function() {
      return 42;
    } };
    return Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(t3, e2), t3.foo() === 42;
  } catch {
    return false;
  }
}
Object.defineProperty(f.prototype, "parent", { enumerable: true, get: function() {
  if (f.isBuffer(this)) return this.buffer;
} });
Object.defineProperty(f.prototype, "offset", { enumerable: true, get: function() {
  if (f.isBuffer(this)) return this.byteOffset;
} });
function m(t3) {
  if (t3 > R) throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
  let e2 = new Uint8Array(t3);
  return Object.setPrototypeOf(e2, f.prototype), e2;
}
function f(t3, e2, n3) {
  if (typeof t3 == "number") {
    if (typeof e2 == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
    return M(t3);
  }
  return X(t3, e2, n3);
}
f.poolSize = 8192;
function X(t3, e2, n3) {
  if (typeof t3 == "string") return wt(t3, e2);
  if (ArrayBuffer.isView(t3)) return dt(t3);
  if (t3 == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t3);
  if (b(t3, ArrayBuffer) || t3 && b(t3.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (b(t3, SharedArrayBuffer) || t3 && b(t3.buffer, SharedArrayBuffer))) return H(t3, e2, n3);
  if (typeof t3 == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
  let r3 = t3.valueOf && t3.valueOf();
  if (r3 != null && r3 !== t3) return f.from(r3, e2, n3);
  let o4 = bt(t3);
  if (o4) return o4;
  if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t3[Symbol.toPrimitive] == "function") return f.from(t3[Symbol.toPrimitive]("string"), e2, n3);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t3);
}
f.from = function(t3, e2, n3) {
  return X(t3, e2, n3);
};
Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
Object.setPrototypeOf(f, Uint8Array);
function q(t3) {
  if (typeof t3 != "number") throw new TypeError('"size" argument must be of type number');
  if (t3 < 0) throw new RangeError('The value "' + t3 + '" is invalid for option "size"');
}
function yt(t3, e2, n3) {
  return q(t3), t3 <= 0 ? m(t3) : e2 !== void 0 ? typeof n3 == "string" ? m(t3).fill(e2, n3) : m(t3).fill(e2) : m(t3);
}
f.alloc = function(t3, e2, n3) {
  return yt(t3, e2, n3);
};
function M(t3) {
  return q(t3), m(t3 < 0 ? 0 : $(t3) | 0);
}
f.allocUnsafe = function(t3) {
  return M(t3);
};
f.allocUnsafeSlow = function(t3) {
  return M(t3);
};
function wt(t3, e2) {
  if ((typeof e2 != "string" || e2 === "") && (e2 = "utf8"), !f.isEncoding(e2)) throw new TypeError("Unknown encoding: " + e2);
  let n3 = W(t3, e2) | 0, r3 = m(n3), o4 = r3.write(t3, e2);
  return o4 !== n3 && (r3 = r3.slice(0, o4)), r3;
}
function S(t3) {
  let e2 = t3.length < 0 ? 0 : $(t3.length) | 0, n3 = m(e2);
  for (let r3 = 0; r3 < e2; r3 += 1) n3[r3] = t3[r3] & 255;
  return n3;
}
function dt(t3) {
  if (b(t3, Uint8Array)) {
    let e2 = new Uint8Array(t3);
    return H(e2.buffer, e2.byteOffset, e2.byteLength);
  }
  return S(t3);
}
function H(t3, e2, n3) {
  if (e2 < 0 || t3.byteLength < e2) throw new RangeError('"offset" is outside of buffer bounds');
  if (t3.byteLength < e2 + (n3 || 0)) throw new RangeError('"length" is outside of buffer bounds');
  let r3;
  return e2 === void 0 && n3 === void 0 ? r3 = new Uint8Array(t3) : n3 === void 0 ? r3 = new Uint8Array(t3, e2) : r3 = new Uint8Array(t3, e2, n3), Object.setPrototypeOf(r3, f.prototype), r3;
}
function bt(t3) {
  if (f.isBuffer(t3)) {
    let e2 = $(t3.length) | 0, n3 = m(e2);
    return n3.length === 0 || t3.copy(n3, 0, 0, e2), n3;
  }
  if (t3.length !== void 0) return typeof t3.length != "number" || P(t3.length) ? m(0) : S(t3);
  if (t3.type === "Buffer" && Array.isArray(t3.data)) return S(t3.data);
}
function $(t3) {
  if (t3 >= R) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + R.toString(16) + " bytes");
  return t3 | 0;
}
function mt(t3) {
  return +t3 != t3 && (t3 = 0), f.alloc(+t3);
}
f.isBuffer = function(t3) {
  return t3 != null && t3._isBuffer === true && t3 !== f.prototype;
};
f.compare = function(t3, e2) {
  if (b(t3, Uint8Array) && (t3 = f.from(t3, t3.offset, t3.byteLength)), b(e2, Uint8Array) && (e2 = f.from(e2, e2.offset, e2.byteLength)), !f.isBuffer(t3) || !f.isBuffer(e2)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t3 === e2) return 0;
  let n3 = t3.length, r3 = e2.length;
  for (let o4 = 0, i4 = Math.min(n3, r3); o4 < i4; ++o4) if (t3[o4] !== e2[o4]) {
    n3 = t3[o4], r3 = e2[o4];
    break;
  }
  return n3 < r3 ? -1 : r3 < n3 ? 1 : 0;
};
f.isEncoding = function(t3) {
  switch (String(t3).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
f.concat = function(t3, e2) {
  if (!Array.isArray(t3)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (t3.length === 0) return f.alloc(0);
  let n3;
  if (e2 === void 0) for (e2 = 0, n3 = 0; n3 < t3.length; ++n3) e2 += t3[n3].length;
  let r3 = f.allocUnsafe(e2), o4 = 0;
  for (n3 = 0; n3 < t3.length; ++n3) {
    let i4 = t3[n3];
    if (b(i4, Uint8Array)) o4 + i4.length > r3.length ? (f.isBuffer(i4) || (i4 = f.from(i4.buffer, i4.byteOffset, i4.byteLength)), i4.copy(r3, o4)) : Uint8Array.prototype.set.call(r3, i4, o4);
    else if (f.isBuffer(i4)) i4.copy(r3, o4);
    else throw new TypeError('"list" argument must be an Array of Buffers');
    o4 += i4.length;
  }
  return r3;
};
function W(t3, e2) {
  if (f.isBuffer(t3)) return t3.length;
  if (ArrayBuffer.isView(t3) || b(t3, ArrayBuffer)) return t3.byteLength;
  if (typeof t3 != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t3);
  let n3 = t3.length, r3 = arguments.length > 2 && arguments[2] === true;
  if (!r3 && n3 === 0) return 0;
  let o4 = false;
  for (; ; ) switch (e2) {
    case "ascii":
    case "latin1":
    case "binary":
      return n3;
    case "utf8":
    case "utf-8":
      return x(t3).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return n3 * 2;
    case "hex":
      return n3 >>> 1;
    case "base64":
      return ot(t3).length;
    default:
      if (o4) return r3 ? -1 : x(t3).length;
      e2 = ("" + e2).toLowerCase(), o4 = true;
  }
}
f.byteLength = W;
function Et(t3, e2, n3) {
  let r3 = false;
  if ((e2 === void 0 || e2 < 0) && (e2 = 0), e2 > this.length || ((n3 === void 0 || n3 > this.length) && (n3 = this.length), n3 <= 0) || (n3 >>>= 0, e2 >>>= 0, n3 <= e2)) return "";
  for (t3 || (t3 = "utf8"); ; ) switch (t3) {
    case "hex":
      return Lt(this, e2, n3);
    case "utf8":
    case "utf-8":
      return K(this, e2, n3);
    case "ascii":
      return _t(this, e2, n3);
    case "latin1":
    case "binary":
      return Ot(this, e2, n3);
    case "base64":
      return Tt(this, e2, n3);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return Nt(this, e2, n3);
    default:
      if (r3) throw new TypeError("Unknown encoding: " + t3);
      t3 = (t3 + "").toLowerCase(), r3 = true;
  }
}
f.prototype._isBuffer = true;
function B(t3, e2, n3) {
  let r3 = t3[e2];
  t3[e2] = t3[n3], t3[n3] = r3;
}
f.prototype.swap16 = function() {
  let t3 = this.length;
  if (t3 % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (let e2 = 0; e2 < t3; e2 += 2) B(this, e2, e2 + 1);
  return this;
};
f.prototype.swap32 = function() {
  let t3 = this.length;
  if (t3 % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (let e2 = 0; e2 < t3; e2 += 4) B(this, e2, e2 + 3), B(this, e2 + 1, e2 + 2);
  return this;
};
f.prototype.swap64 = function() {
  let t3 = this.length;
  if (t3 % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (let e2 = 0; e2 < t3; e2 += 8) B(this, e2, e2 + 7), B(this, e2 + 1, e2 + 6), B(this, e2 + 2, e2 + 5), B(this, e2 + 3, e2 + 4);
  return this;
};
f.prototype.toString = function() {
  let t3 = this.length;
  return t3 === 0 ? "" : arguments.length === 0 ? K(this, 0, t3) : Reflect.apply(Et, this, arguments);
};
f.prototype.toLocaleString = f.prototype.toString;
f.prototype.equals = function(t3) {
  if (!f.isBuffer(t3)) throw new TypeError("Argument must be a Buffer");
  return this === t3 ? true : f.compare(this, t3) === 0;
};
f.prototype.inspect = function() {
  let t3 = "", e2 = G;
  return t3 = this.toString("hex", 0, e2).replace(/(.{2})/g, "$1 ").trim(), this.length > e2 && (t3 += " ... "), "<Buffer " + t3 + ">";
};
F && (f.prototype[F] = f.prototype.inspect);
f.prototype.compare = function(t3, e2, n3, r3, o4) {
  if (b(t3, Uint8Array) && (t3 = f.from(t3, t3.offset, t3.byteLength)), !f.isBuffer(t3)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t3);
  if (e2 === void 0 && (e2 = 0), n3 === void 0 && (n3 = t3 ? t3.length : 0), r3 === void 0 && (r3 = 0), o4 === void 0 && (o4 = this.length), e2 < 0 || n3 > t3.length || r3 < 0 || o4 > this.length) throw new RangeError("out of range index");
  if (r3 >= o4 && e2 >= n3) return 0;
  if (r3 >= o4) return -1;
  if (e2 >= n3) return 1;
  if (e2 >>>= 0, n3 >>>= 0, r3 >>>= 0, o4 >>>= 0, this === t3) return 0;
  let i4 = o4 - r3, u5 = n3 - e2, s5 = Math.min(i4, u5), l7 = this.slice(r3, o4), p5 = t3.slice(e2, n3);
  for (let h7 = 0; h7 < s5; ++h7) if (l7[h7] !== p5[h7]) {
    i4 = l7[h7], u5 = p5[h7];
    break;
  }
  return i4 < u5 ? -1 : u5 < i4 ? 1 : 0;
};
function J(t3, e2, n3, r3, o4) {
  if (t3.length === 0) return -1;
  if (typeof n3 == "string" ? (r3 = n3, n3 = 0) : n3 > 2147483647 ? n3 = 2147483647 : n3 < -2147483648 && (n3 = -2147483648), n3 = +n3, P(n3) && (n3 = o4 ? 0 : t3.length - 1), n3 < 0 && (n3 = t3.length + n3), n3 >= t3.length) {
    if (o4) return -1;
    n3 = t3.length - 1;
  } else if (n3 < 0) if (o4) n3 = 0;
  else return -1;
  if (typeof e2 == "string" && (e2 = f.from(e2, r3)), f.isBuffer(e2)) return e2.length === 0 ? -1 : j(t3, e2, n3, r3, o4);
  if (typeof e2 == "number") return e2 = e2 & 255, typeof Uint8Array.prototype.indexOf == "function" ? o4 ? Uint8Array.prototype.indexOf.call(t3, e2, n3) : Uint8Array.prototype.lastIndexOf.call(t3, e2, n3) : j(t3, [e2], n3, r3, o4);
  throw new TypeError("val must be string, number or Buffer");
}
function j(t3, e2, n3, r3, o4) {
  let i4 = 1, u5 = t3.length, s5 = e2.length;
  if (r3 !== void 0 && (r3 = String(r3).toLowerCase(), r3 === "ucs2" || r3 === "ucs-2" || r3 === "utf16le" || r3 === "utf-16le")) {
    if (t3.length < 2 || e2.length < 2) return -1;
    i4 = 2, u5 /= 2, s5 /= 2, n3 /= 2;
  }
  function l7(h7, a4) {
    return i4 === 1 ? h7[a4] : h7.readUInt16BE(a4 * i4);
  }
  let p5;
  if (o4) {
    let h7 = -1;
    for (p5 = n3; p5 < u5; p5++) if (l7(t3, p5) === l7(e2, h7 === -1 ? 0 : p5 - h7)) {
      if (h7 === -1 && (h7 = p5), p5 - h7 + 1 === s5) return h7 * i4;
    } else h7 !== -1 && (p5 -= p5 - h7), h7 = -1;
  } else for (n3 + s5 > u5 && (n3 = u5 - s5), p5 = n3; p5 >= 0; p5--) {
    let h7 = true;
    for (let a4 = 0; a4 < s5; a4++) if (l7(t3, p5 + a4) !== l7(e2, a4)) {
      h7 = false;
      break;
    }
    if (h7) return p5;
  }
  return -1;
}
f.prototype.includes = function(t3, e2, n3) {
  return this.indexOf(t3, e2, n3) !== -1;
};
f.prototype.indexOf = function(t3, e2, n3) {
  return J(this, t3, e2, n3, true);
};
f.prototype.lastIndexOf = function(t3, e2, n3) {
  return J(this, t3, e2, n3, false);
};
function Bt(t3, e2, n3, r3) {
  n3 = Number(n3) || 0;
  let o4 = t3.length - n3;
  r3 ? (r3 = Number(r3), r3 > o4 && (r3 = o4)) : r3 = o4;
  let i4 = e2.length;
  r3 > i4 / 2 && (r3 = i4 / 2);
  let u5;
  for (u5 = 0; u5 < r3; ++u5) {
    let s5 = Number.parseInt(e2.slice(u5 * 2, u5 * 2 + 2), 16);
    if (P(s5)) return u5;
    t3[n3 + u5] = s5;
  }
  return u5;
}
function It(t3, e2, n3, r3) {
  return O(x(e2, t3.length - n3), t3, n3, r3);
}
function At(t3, e2, n3, r3) {
  return O($t(e2), t3, n3, r3);
}
function Ut(t3, e2, n3, r3) {
  return O(ot(e2), t3, n3, r3);
}
function vt(t3, e2, n3, r3) {
  return O(Ct(e2, t3.length - n3), t3, n3, r3);
}
f.prototype.write = function(t3, e2, n3, r3) {
  if (e2 === void 0) r3 = "utf8", n3 = this.length, e2 = 0;
  else if (n3 === void 0 && typeof e2 == "string") r3 = e2, n3 = this.length, e2 = 0;
  else if (Number.isFinite(e2)) e2 = e2 >>> 0, Number.isFinite(n3) ? (n3 = n3 >>> 0, r3 === void 0 && (r3 = "utf8")) : (r3 = n3, n3 = void 0);
  else throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  let o4 = this.length - e2;
  if ((n3 === void 0 || n3 > o4) && (n3 = o4), t3.length > 0 && (n3 < 0 || e2 < 0) || e2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  r3 || (r3 = "utf8");
  let i4 = false;
  for (; ; ) switch (r3) {
    case "hex":
      return Bt(this, t3, e2, n3);
    case "utf8":
    case "utf-8":
      return It(this, t3, e2, n3);
    case "ascii":
    case "latin1":
    case "binary":
      return At(this, t3, e2, n3);
    case "base64":
      return Ut(this, t3, e2, n3);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return vt(this, t3, e2, n3);
    default:
      if (i4) throw new TypeError("Unknown encoding: " + r3);
      r3 = ("" + r3).toLowerCase(), i4 = true;
  }
};
f.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Tt(t3, e2, n3) {
  return e2 === 0 && n3 === t3.length ? k(t3) : k(t3.slice(e2, n3));
}
function K(t3, e2, n3) {
  n3 = Math.min(t3.length, n3);
  let r3 = [], o4 = e2;
  for (; o4 < n3; ) {
    let i4 = t3[o4], u5 = null, s5 = i4 > 239 ? 4 : i4 > 223 ? 3 : i4 > 191 ? 2 : 1;
    if (o4 + s5 <= n3) {
      let l7, p5, h7, a4;
      switch (s5) {
        case 1:
          i4 < 128 && (u5 = i4);
          break;
        case 2:
          l7 = t3[o4 + 1], (l7 & 192) === 128 && (a4 = (i4 & 31) << 6 | l7 & 63, a4 > 127 && (u5 = a4));
          break;
        case 3:
          l7 = t3[o4 + 1], p5 = t3[o4 + 2], (l7 & 192) === 128 && (p5 & 192) === 128 && (a4 = (i4 & 15) << 12 | (l7 & 63) << 6 | p5 & 63, a4 > 2047 && (a4 < 55296 || a4 > 57343) && (u5 = a4));
          break;
        case 4:
          l7 = t3[o4 + 1], p5 = t3[o4 + 2], h7 = t3[o4 + 3], (l7 & 192) === 128 && (p5 & 192) === 128 && (h7 & 192) === 128 && (a4 = (i4 & 15) << 18 | (l7 & 63) << 12 | (p5 & 63) << 6 | h7 & 63, a4 > 65535 && a4 < 1114112 && (u5 = a4));
      }
    }
    u5 === null ? (u5 = 65533, s5 = 1) : u5 > 65535 && (u5 -= 65536, r3.push(u5 >>> 10 & 1023 | 55296), u5 = 56320 | u5 & 1023), r3.push(u5), o4 += s5;
  }
  return Rt(r3);
}
var Y = 4096;
function Rt(t3) {
  let e2 = t3.length;
  if (e2 <= Y) return String.fromCharCode.apply(String, t3);
  let n3 = "", r3 = 0;
  for (; r3 < e2; ) n3 += String.fromCharCode.apply(String, t3.slice(r3, r3 += Y));
  return n3;
}
function _t(t3, e2, n3) {
  let r3 = "";
  n3 = Math.min(t3.length, n3);
  for (let o4 = e2; o4 < n3; ++o4) r3 += String.fromCharCode(t3[o4] & 127);
  return r3;
}
function Ot(t3, e2, n3) {
  let r3 = "";
  n3 = Math.min(t3.length, n3);
  for (let o4 = e2; o4 < n3; ++o4) r3 += String.fromCharCode(t3[o4]);
  return r3;
}
function Lt(t3, e2, n3) {
  let r3 = t3.length;
  (!e2 || e2 < 0) && (e2 = 0), (!n3 || n3 < 0 || n3 > r3) && (n3 = r3);
  let o4 = "";
  for (let i4 = e2; i4 < n3; ++i4) o4 += Pt[t3[i4]];
  return o4;
}
function Nt(t3, e2, n3) {
  let r3 = t3.slice(e2, n3), o4 = "";
  for (let i4 = 0; i4 < r3.length - 1; i4 += 2) o4 += String.fromCharCode(r3[i4] + r3[i4 + 1] * 256);
  return o4;
}
f.prototype.slice = function(t3, e2) {
  let n3 = this.length;
  t3 = Math.trunc(t3), e2 = e2 === void 0 ? n3 : Math.trunc(e2), t3 < 0 ? (t3 += n3, t3 < 0 && (t3 = 0)) : t3 > n3 && (t3 = n3), e2 < 0 ? (e2 += n3, e2 < 0 && (e2 = 0)) : e2 > n3 && (e2 = n3), e2 < t3 && (e2 = t3);
  let r3 = this.subarray(t3, e2);
  return Object.setPrototypeOf(r3, f.prototype), r3;
};
function c(t3, e2, n3) {
  if (t3 % 1 !== 0 || t3 < 0) throw new RangeError("offset is not uint");
  if (t3 + e2 > n3) throw new RangeError("Trying to access beyond buffer length");
}
f.prototype.readUintLE = f.prototype.readUIntLE = function(t3, e2, n3) {
  t3 = t3 >>> 0, e2 = e2 >>> 0, n3 || c(t3, e2, this.length);
  let r3 = this[t3], o4 = 1, i4 = 0;
  for (; ++i4 < e2 && (o4 *= 256); ) r3 += this[t3 + i4] * o4;
  return r3;
};
f.prototype.readUintBE = f.prototype.readUIntBE = function(t3, e2, n3) {
  t3 = t3 >>> 0, e2 = e2 >>> 0, n3 || c(t3, e2, this.length);
  let r3 = this[t3 + --e2], o4 = 1;
  for (; e2 > 0 && (o4 *= 256); ) r3 += this[t3 + --e2] * o4;
  return r3;
};
f.prototype.readUint8 = f.prototype.readUInt8 = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 1, this.length), this[t3];
};
f.prototype.readUint16LE = f.prototype.readUInt16LE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 2, this.length), this[t3] | this[t3 + 1] << 8;
};
f.prototype.readUint16BE = f.prototype.readUInt16BE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 2, this.length), this[t3] << 8 | this[t3 + 1];
};
f.prototype.readUint32LE = f.prototype.readUInt32LE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 4, this.length), (this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16) + this[t3 + 3] * 16777216;
};
f.prototype.readUint32BE = f.prototype.readUInt32BE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 4, this.length), this[t3] * 16777216 + (this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3]);
};
f.prototype.readBigUInt64LE = E(function(t3) {
  t3 = t3 >>> 0, U(t3, "offset");
  let e2 = this[t3], n3 = this[t3 + 7];
  (e2 === void 0 || n3 === void 0) && T(t3, this.length - 8);
  let r3 = e2 + this[++t3] * 2 ** 8 + this[++t3] * 2 ** 16 + this[++t3] * 2 ** 24, o4 = this[++t3] + this[++t3] * 2 ** 8 + this[++t3] * 2 ** 16 + n3 * 2 ** 24;
  return BigInt(r3) + (BigInt(o4) << BigInt(32));
});
f.prototype.readBigUInt64BE = E(function(t3) {
  t3 = t3 >>> 0, U(t3, "offset");
  let e2 = this[t3], n3 = this[t3 + 7];
  (e2 === void 0 || n3 === void 0) && T(t3, this.length - 8);
  let r3 = e2 * 2 ** 24 + this[++t3] * 2 ** 16 + this[++t3] * 2 ** 8 + this[++t3], o4 = this[++t3] * 2 ** 24 + this[++t3] * 2 ** 16 + this[++t3] * 2 ** 8 + n3;
  return (BigInt(r3) << BigInt(32)) + BigInt(o4);
});
f.prototype.readIntLE = function(t3, e2, n3) {
  t3 = t3 >>> 0, e2 = e2 >>> 0, n3 || c(t3, e2, this.length);
  let r3 = this[t3], o4 = 1, i4 = 0;
  for (; ++i4 < e2 && (o4 *= 256); ) r3 += this[t3 + i4] * o4;
  return o4 *= 128, r3 >= o4 && (r3 -= Math.pow(2, 8 * e2)), r3;
};
f.prototype.readIntBE = function(t3, e2, n3) {
  t3 = t3 >>> 0, e2 = e2 >>> 0, n3 || c(t3, e2, this.length);
  let r3 = e2, o4 = 1, i4 = this[t3 + --r3];
  for (; r3 > 0 && (o4 *= 256); ) i4 += this[t3 + --r3] * o4;
  return o4 *= 128, i4 >= o4 && (i4 -= Math.pow(2, 8 * e2)), i4;
};
f.prototype.readInt8 = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 1, this.length), this[t3] & 128 ? (255 - this[t3] + 1) * -1 : this[t3];
};
f.prototype.readInt16LE = function(t3, e2) {
  t3 = t3 >>> 0, e2 || c(t3, 2, this.length);
  let n3 = this[t3] | this[t3 + 1] << 8;
  return n3 & 32768 ? n3 | 4294901760 : n3;
};
f.prototype.readInt16BE = function(t3, e2) {
  t3 = t3 >>> 0, e2 || c(t3, 2, this.length);
  let n3 = this[t3 + 1] | this[t3] << 8;
  return n3 & 32768 ? n3 | 4294901760 : n3;
};
f.prototype.readInt32LE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 4, this.length), this[t3] | this[t3 + 1] << 8 | this[t3 + 2] << 16 | this[t3 + 3] << 24;
};
f.prototype.readInt32BE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 4, this.length), this[t3] << 24 | this[t3 + 1] << 16 | this[t3 + 2] << 8 | this[t3 + 3];
};
f.prototype.readBigInt64LE = E(function(t3) {
  t3 = t3 >>> 0, U(t3, "offset");
  let e2 = this[t3], n3 = this[t3 + 7];
  (e2 === void 0 || n3 === void 0) && T(t3, this.length - 8);
  let r3 = this[t3 + 4] + this[t3 + 5] * 2 ** 8 + this[t3 + 6] * 2 ** 16 + (n3 << 24);
  return (BigInt(r3) << BigInt(32)) + BigInt(e2 + this[++t3] * 2 ** 8 + this[++t3] * 2 ** 16 + this[++t3] * 2 ** 24);
});
f.prototype.readBigInt64BE = E(function(t3) {
  t3 = t3 >>> 0, U(t3, "offset");
  let e2 = this[t3], n3 = this[t3 + 7];
  (e2 === void 0 || n3 === void 0) && T(t3, this.length - 8);
  let r3 = (e2 << 24) + this[++t3] * 2 ** 16 + this[++t3] * 2 ** 8 + this[++t3];
  return (BigInt(r3) << BigInt(32)) + BigInt(this[++t3] * 2 ** 24 + this[++t3] * 2 ** 16 + this[++t3] * 2 ** 8 + n3);
});
f.prototype.readFloatLE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 4, this.length), _(this, t3, true, 23, 4);
};
f.prototype.readFloatBE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 4, this.length), _(this, t3, false, 23, 4);
};
f.prototype.readDoubleLE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 8, this.length), _(this, t3, true, 52, 8);
};
f.prototype.readDoubleBE = function(t3, e2) {
  return t3 = t3 >>> 0, e2 || c(t3, 8, this.length), _(this, t3, false, 52, 8);
};
function g(t3, e2, n3, r3, o4, i4) {
  if (!f.isBuffer(t3)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e2 > o4 || e2 < i4) throw new RangeError('"value" argument is out of bounds');
  if (n3 + r3 > t3.length) throw new RangeError("Index out of range");
}
f.prototype.writeUintLE = f.prototype.writeUIntLE = function(t3, e2, n3, r3) {
  if (t3 = +t3, e2 = e2 >>> 0, n3 = n3 >>> 0, !r3) {
    let u5 = Math.pow(2, 8 * n3) - 1;
    g(this, t3, e2, n3, u5, 0);
  }
  let o4 = 1, i4 = 0;
  for (this[e2] = t3 & 255; ++i4 < n3 && (o4 *= 256); ) this[e2 + i4] = t3 / o4 & 255;
  return e2 + n3;
};
f.prototype.writeUintBE = f.prototype.writeUIntBE = function(t3, e2, n3, r3) {
  if (t3 = +t3, e2 = e2 >>> 0, n3 = n3 >>> 0, !r3) {
    let u5 = Math.pow(2, 8 * n3) - 1;
    g(this, t3, e2, n3, u5, 0);
  }
  let o4 = n3 - 1, i4 = 1;
  for (this[e2 + o4] = t3 & 255; --o4 >= 0 && (i4 *= 256); ) this[e2 + o4] = t3 / i4 & 255;
  return e2 + n3;
};
f.prototype.writeUint8 = f.prototype.writeUInt8 = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 1, 255, 0), this[e2] = t3 & 255, e2 + 1;
};
f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 2, 65535, 0), this[e2] = t3 & 255, this[e2 + 1] = t3 >>> 8, e2 + 2;
};
f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 2, 65535, 0), this[e2] = t3 >>> 8, this[e2 + 1] = t3 & 255, e2 + 2;
};
f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 4, 4294967295, 0), this[e2 + 3] = t3 >>> 24, this[e2 + 2] = t3 >>> 16, this[e2 + 1] = t3 >>> 8, this[e2] = t3 & 255, e2 + 4;
};
f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 4, 4294967295, 0), this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = t3 & 255, e2 + 4;
};
function Q(t3, e2, n3, r3, o4) {
  rt(e2, r3, o4, t3, n3, 7);
  let i4 = Number(e2 & BigInt(4294967295));
  t3[n3++] = i4, i4 = i4 >> 8, t3[n3++] = i4, i4 = i4 >> 8, t3[n3++] = i4, i4 = i4 >> 8, t3[n3++] = i4;
  let u5 = Number(e2 >> BigInt(32) & BigInt(4294967295));
  return t3[n3++] = u5, u5 = u5 >> 8, t3[n3++] = u5, u5 = u5 >> 8, t3[n3++] = u5, u5 = u5 >> 8, t3[n3++] = u5, n3;
}
function Z(t3, e2, n3, r3, o4) {
  rt(e2, r3, o4, t3, n3, 7);
  let i4 = Number(e2 & BigInt(4294967295));
  t3[n3 + 7] = i4, i4 = i4 >> 8, t3[n3 + 6] = i4, i4 = i4 >> 8, t3[n3 + 5] = i4, i4 = i4 >> 8, t3[n3 + 4] = i4;
  let u5 = Number(e2 >> BigInt(32) & BigInt(4294967295));
  return t3[n3 + 3] = u5, u5 = u5 >> 8, t3[n3 + 2] = u5, u5 = u5 >> 8, t3[n3 + 1] = u5, u5 = u5 >> 8, t3[n3] = u5, n3 + 8;
}
f.prototype.writeBigUInt64LE = E(function(t3, e2 = 0) {
  return Q(this, t3, e2, BigInt(0), BigInt("0xffffffffffffffff"));
});
f.prototype.writeBigUInt64BE = E(function(t3, e2 = 0) {
  return Z(this, t3, e2, BigInt(0), BigInt("0xffffffffffffffff"));
});
f.prototype.writeIntLE = function(t3, e2, n3, r3) {
  if (t3 = +t3, e2 = e2 >>> 0, !r3) {
    let s5 = Math.pow(2, 8 * n3 - 1);
    g(this, t3, e2, n3, s5 - 1, -s5);
  }
  let o4 = 0, i4 = 1, u5 = 0;
  for (this[e2] = t3 & 255; ++o4 < n3 && (i4 *= 256); ) t3 < 0 && u5 === 0 && this[e2 + o4 - 1] !== 0 && (u5 = 1), this[e2 + o4] = Math.trunc(t3 / i4) - u5 & 255;
  return e2 + n3;
};
f.prototype.writeIntBE = function(t3, e2, n3, r3) {
  if (t3 = +t3, e2 = e2 >>> 0, !r3) {
    let s5 = Math.pow(2, 8 * n3 - 1);
    g(this, t3, e2, n3, s5 - 1, -s5);
  }
  let o4 = n3 - 1, i4 = 1, u5 = 0;
  for (this[e2 + o4] = t3 & 255; --o4 >= 0 && (i4 *= 256); ) t3 < 0 && u5 === 0 && this[e2 + o4 + 1] !== 0 && (u5 = 1), this[e2 + o4] = Math.trunc(t3 / i4) - u5 & 255;
  return e2 + n3;
};
f.prototype.writeInt8 = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 1, 127, -128), t3 < 0 && (t3 = 255 + t3 + 1), this[e2] = t3 & 255, e2 + 1;
};
f.prototype.writeInt16LE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 2, 32767, -32768), this[e2] = t3 & 255, this[e2 + 1] = t3 >>> 8, e2 + 2;
};
f.prototype.writeInt16BE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 2, 32767, -32768), this[e2] = t3 >>> 8, this[e2 + 1] = t3 & 255, e2 + 2;
};
f.prototype.writeInt32LE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 4, 2147483647, -2147483648), this[e2] = t3 & 255, this[e2 + 1] = t3 >>> 8, this[e2 + 2] = t3 >>> 16, this[e2 + 3] = t3 >>> 24, e2 + 4;
};
f.prototype.writeInt32BE = function(t3, e2, n3) {
  return t3 = +t3, e2 = e2 >>> 0, n3 || g(this, t3, e2, 4, 2147483647, -2147483648), t3 < 0 && (t3 = 4294967295 + t3 + 1), this[e2] = t3 >>> 24, this[e2 + 1] = t3 >>> 16, this[e2 + 2] = t3 >>> 8, this[e2 + 3] = t3 & 255, e2 + 4;
};
f.prototype.writeBigInt64LE = E(function(t3, e2 = 0) {
  return Q(this, t3, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
f.prototype.writeBigInt64BE = E(function(t3, e2 = 0) {
  return Z(this, t3, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function tt(t3, e2, n3, r3, o4, i4) {
  if (n3 + r3 > t3.length) throw new RangeError("Index out of range");
  if (n3 < 0) throw new RangeError("Index out of range");
}
function et(t3, e2, n3, r3, o4) {
  return e2 = +e2, n3 = n3 >>> 0, o4 || tt(t3, e2, n3, 4, 34028234663852886e22, -34028234663852886e22), z(t3, e2, n3, r3, 23, 4), n3 + 4;
}
f.prototype.writeFloatLE = function(t3, e2, n3) {
  return et(this, t3, e2, true, n3);
};
f.prototype.writeFloatBE = function(t3, e2, n3) {
  return et(this, t3, e2, false, n3);
};
function nt(t3, e2, n3, r3, o4) {
  return e2 = +e2, n3 = n3 >>> 0, o4 || tt(t3, e2, n3, 8, 17976931348623157e292, -17976931348623157e292), z(t3, e2, n3, r3, 52, 8), n3 + 8;
}
f.prototype.writeDoubleLE = function(t3, e2, n3) {
  return nt(this, t3, e2, true, n3);
};
f.prototype.writeDoubleBE = function(t3, e2, n3) {
  return nt(this, t3, e2, false, n3);
};
f.prototype.copy = function(t3, e2, n3, r3) {
  if (!f.isBuffer(t3)) throw new TypeError("argument should be a Buffer");
  if (n3 || (n3 = 0), !r3 && r3 !== 0 && (r3 = this.length), e2 >= t3.length && (e2 = t3.length), e2 || (e2 = 0), r3 > 0 && r3 < n3 && (r3 = n3), r3 === n3 || t3.length === 0 || this.length === 0) return 0;
  if (e2 < 0) throw new RangeError("targetStart out of bounds");
  if (n3 < 0 || n3 >= this.length) throw new RangeError("Index out of range");
  if (r3 < 0) throw new RangeError("sourceEnd out of bounds");
  r3 > this.length && (r3 = this.length), t3.length - e2 < r3 - n3 && (r3 = t3.length - e2 + n3);
  let o4 = r3 - n3;
  return this === t3 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e2, n3, r3) : Uint8Array.prototype.set.call(t3, this.subarray(n3, r3), e2), o4;
};
f.prototype.fill = function(t3, e2, n3, r3) {
  if (typeof t3 == "string") {
    if (typeof e2 == "string" ? (r3 = e2, e2 = 0, n3 = this.length) : typeof n3 == "string" && (r3 = n3, n3 = this.length), r3 !== void 0 && typeof r3 != "string") throw new TypeError("encoding must be a string");
    if (typeof r3 == "string" && !f.isEncoding(r3)) throw new TypeError("Unknown encoding: " + r3);
    if (t3.length === 1) {
      let i4 = t3.charCodeAt(0);
      (r3 === "utf8" && i4 < 128 || r3 === "latin1") && (t3 = i4);
    }
  } else typeof t3 == "number" ? t3 = t3 & 255 : typeof t3 == "boolean" && (t3 = Number(t3));
  if (e2 < 0 || this.length < e2 || this.length < n3) throw new RangeError("Out of range index");
  if (n3 <= e2) return this;
  e2 = e2 >>> 0, n3 = n3 === void 0 ? this.length : n3 >>> 0, t3 || (t3 = 0);
  let o4;
  if (typeof t3 == "number") for (o4 = e2; o4 < n3; ++o4) this[o4] = t3;
  else {
    let i4 = f.isBuffer(t3) ? t3 : f.from(t3, r3), u5 = i4.length;
    if (u5 === 0) throw new TypeError('The value "' + t3 + '" is invalid for argument "value"');
    for (o4 = 0; o4 < n3 - e2; ++o4) this[o4 + e2] = i4[o4 % u5];
  }
  return this;
};
var A = {};
function C(t3, e2, n3) {
  A[t3] = class extends n3 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(e2, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t3}]`, this.stack, delete this.name;
    }
    get code() {
      return t3;
    }
    set code(r3) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: r3, writable: true });
    }
    toString() {
      return `${this.name} [${t3}]: ${this.message}`;
    }
  };
}
C("ERR_BUFFER_OUT_OF_BOUNDS", function(t3) {
  return t3 ? `${t3} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
}, RangeError);
C("ERR_INVALID_ARG_TYPE", function(t3, e2) {
  return `The "${t3}" argument must be of type number. Received type ${typeof e2}`;
}, TypeError);
C("ERR_OUT_OF_RANGE", function(t3, e2, n3) {
  let r3 = `The value of "${t3}" is out of range.`, o4 = n3;
  return Number.isInteger(n3) && Math.abs(n3) > 2 ** 32 ? o4 = D(String(n3)) : typeof n3 == "bigint" && (o4 = String(n3), (n3 > BigInt(2) ** BigInt(32) || n3 < -(BigInt(2) ** BigInt(32))) && (o4 = D(o4)), o4 += "n"), r3 += ` It must be ${e2}. Received ${o4}`, r3;
}, RangeError);
function D(t3) {
  let e2 = "", n3 = t3.length, r3 = t3[0] === "-" ? 1 : 0;
  for (; n3 >= r3 + 4; n3 -= 3) e2 = `_${t3.slice(n3 - 3, n3)}${e2}`;
  return `${t3.slice(0, n3)}${e2}`;
}
function St(t3, e2, n3) {
  U(e2, "offset"), (t3[e2] === void 0 || t3[e2 + n3] === void 0) && T(e2, t3.length - (n3 + 1));
}
function rt(t3, e2, n3, r3, o4, i4) {
  if (t3 > n3 || t3 < e2) {
    let u5 = typeof e2 == "bigint" ? "n" : "", s5;
    throw i4 > 3 ? s5 = e2 === 0 || e2 === BigInt(0) ? `>= 0${u5} and < 2${u5} ** ${(i4 + 1) * 8}${u5}` : `>= -(2${u5} ** ${(i4 + 1) * 8 - 1}${u5}) and < 2 ** ${(i4 + 1) * 8 - 1}${u5}` : s5 = `>= ${e2}${u5} and <= ${n3}${u5}`, new A.ERR_OUT_OF_RANGE("value", s5, t3);
  }
  St(r3, o4, i4);
}
function U(t3, e2) {
  if (typeof t3 != "number") throw new A.ERR_INVALID_ARG_TYPE(e2, "number", t3);
}
function T(t3, e2, n3) {
  throw Math.floor(t3) !== t3 ? (U(t3, n3), new A.ERR_OUT_OF_RANGE(n3 || "offset", "an integer", t3)) : e2 < 0 ? new A.ERR_BUFFER_OUT_OF_BOUNDS() : new A.ERR_OUT_OF_RANGE(n3 || "offset", `>= ${n3 ? 1 : 0} and <= ${e2}`, t3);
}
var xt = /[^\w+/-]/g;
function Mt(t3) {
  if (t3 = t3.split("=")[0], t3 = t3.trim().replace(xt, ""), t3.length < 2) return "";
  for (; t3.length % 4 !== 0; ) t3 = t3 + "=";
  return t3;
}
function x(t3, e2) {
  e2 = e2 || Number.POSITIVE_INFINITY;
  let n3, r3 = t3.length, o4 = null, i4 = [];
  for (let u5 = 0; u5 < r3; ++u5) {
    if (n3 = t3.charCodeAt(u5), n3 > 55295 && n3 < 57344) {
      if (!o4) {
        if (n3 > 56319) {
          (e2 -= 3) > -1 && i4.push(239, 191, 189);
          continue;
        } else if (u5 + 1 === r3) {
          (e2 -= 3) > -1 && i4.push(239, 191, 189);
          continue;
        }
        o4 = n3;
        continue;
      }
      if (n3 < 56320) {
        (e2 -= 3) > -1 && i4.push(239, 191, 189), o4 = n3;
        continue;
      }
      n3 = (o4 - 55296 << 10 | n3 - 56320) + 65536;
    } else o4 && (e2 -= 3) > -1 && i4.push(239, 191, 189);
    if (o4 = null, n3 < 128) {
      if ((e2 -= 1) < 0) break;
      i4.push(n3);
    } else if (n3 < 2048) {
      if ((e2 -= 2) < 0) break;
      i4.push(n3 >> 6 | 192, n3 & 63 | 128);
    } else if (n3 < 65536) {
      if ((e2 -= 3) < 0) break;
      i4.push(n3 >> 12 | 224, n3 >> 6 & 63 | 128, n3 & 63 | 128);
    } else if (n3 < 1114112) {
      if ((e2 -= 4) < 0) break;
      i4.push(n3 >> 18 | 240, n3 >> 12 & 63 | 128, n3 >> 6 & 63 | 128, n3 & 63 | 128);
    } else throw new Error("Invalid code point");
  }
  return i4;
}
function $t(t3) {
  let e2 = [];
  for (let n3 = 0; n3 < t3.length; ++n3) e2.push(t3.charCodeAt(n3) & 255);
  return e2;
}
function Ct(t3, e2) {
  let n3, r3, o4, i4 = [];
  for (let u5 = 0; u5 < t3.length && !((e2 -= 2) < 0); ++u5) n3 = t3.charCodeAt(u5), r3 = n3 >> 8, o4 = n3 % 256, i4.push(o4, r3);
  return i4;
}
function ot(t3) {
  return at(Mt(t3));
}
function O(t3, e2, n3, r3) {
  let o4;
  for (o4 = 0; o4 < r3 && !(o4 + n3 >= e2.length || o4 >= t3.length); ++o4) e2[o4 + n3] = t3[o4];
  return o4;
}
function b(t3, e2) {
  return t3 instanceof e2 || t3 != null && t3.constructor != null && t3.constructor.name != null && t3.constructor.name === e2.name;
}
function P(t3) {
  return t3 !== t3;
}
var Pt = function() {
  let t3 = "0123456789abcdef", e2 = Array.from({ length: 256 });
  for (let n3 = 0; n3 < 16; ++n3) {
    let r3 = n3 * 16;
    for (let o4 = 0; o4 < 16; ++o4) e2[r3 + o4] = t3[n3] + t3[o4];
  }
  return e2;
}();
function E(t3) {
  return typeof BigInt > "u" ? kt : t3;
}
function kt() {
  throw new Error("BigInt not supported");
}
var Ft = class extends Blob {
  __unenv__ = true;
  size = 0;
  type = "";
  name = "";
  lastModified = 0;
  constructor(...t3) {
    throw super(...t3), new Error("[unenv] buffer.File is not implemented");
  }
  arrayBuffer() {
    throw new Error("Not implemented");
  }
  slice() {
    throw new Error("Not implemented");
  }
  text() {
    throw new Error("Not implemented");
  }
  stream() {
    throw new Error("Not implemented");
  }
  bytes() {
    throw new Error("Not implemented");
  }
};
var jt = globalThis.Buffer || f;
var Yt = globalThis.Blob;
var Dt = v("buffer.resolveObjectURL");
var zt = v("buffer.transcode");
var Gt = v("buffer.isUtf8");
var Vt = v("buffer.isAscii");
var Xt = globalThis.btoa.bind(globalThis);
var qt = globalThis.atob.bind(globalThis);
var it = 0;
var Ht = { MAX_LENGTH: V, MAX_STRING_LENGTH: it };
var Zt = { Buffer: jt, SlowBuffer: mt, kMaxLength: V, INSPECT_MAX_BYTES: G, Blob: Yt, resolveObjectURL: Dt, transcode: zt, btoa: Xt, atob: qt, kStringMaxLength: it, constants: Ht, isUtf8: Gt, isAscii: Vt, File: Ft };

// https://esm.sh/node/process.mjs
var v2 = function() {
};
function u(e2, t3 = {}) {
  v2.prototype.name = e2;
  let r3 = {};
  return new Proxy(v2, { get(n3, a4) {
    return a4 === "caller" ? null : a4 === "__createMock__" ? u : a4 === "__unenv__" ? true : a4 in t3 ? t3[a4] : r3[a4] = r3[a4] || u(`${e2}.${a4.toString()}`);
  }, apply(n3, a4, o4) {
    return u(`${e2}()`);
  }, construct(n3, a4, o4) {
    return u(`[${e2}]`);
  }, enumerate() {
    return [];
  } });
}
var d2 = u("mock");
function m2(e2) {
  return new Error(`[unenv] ${e2} is not implemented yet!`);
}
function s(e2) {
  return Object.assign(() => {
    throw m2(e2);
  }, { __unenv__: true });
}
var b2 = Object.freeze(Object.create(null, { __unenv__: { get: () => true } }));
var p = /* @__PURE__ */ Object.create(null);
var h = globalThis.process?.env;
var l = (e2) => h || globalThis.__env__ || (e2 ? p : globalThis);
var x2 = new Proxy(p, { get(e2, t3) {
  return l()[t3] ?? p[t3];
}, has(e2, t3) {
  let r3 = l();
  return t3 in r3 || t3 in p;
}, set(e2, t3, r3) {
  let n3 = l(true);
  return n3[t3] = r3, true;
}, deleteProperty(e2, t3) {
  let r3 = l(true);
  return delete r3[t3], true;
}, ownKeys() {
  let e2 = l();
  return Object.keys(e2);
} });
var k2 = Object.assign(function(e2) {
  let t3 = Date.now(), r3 = Math.trunc(t3 / 1e3), n3 = t3 % 1e3 * 1e6;
  if (e2) {
    let a4 = r3 - e2[0], o4 = n3 - e2[0];
    return o4 < 0 && (a4 = a4 - 1, o4 = 1e9 + o4), [a4, o4];
  }
  return [r3, n3];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} });
var E2 = globalThis.queueMicrotask ? (e2, ...t3) => {
  globalThis.queueMicrotask(e2.bind(void 0, ...t3));
} : M2();
function M2() {
  let e2 = [], t3 = false, r3, n3 = -1;
  function a4() {
    !t3 || !r3 || (t3 = false, r3.length > 0 ? e2 = [...r3, ...e2] : n3 = -1, e2.length > 0 && o4());
  }
  function o4() {
    if (t3) return;
    let g6 = setTimeout(a4);
    t3 = true;
    let c6 = e2.length;
    for (; c6; ) {
      for (r3 = e2, e2 = []; ++n3 < c6; ) r3 && r3[n3]();
      n3 = -1, c6 = e2.length;
    }
    r3 = void 0, t3 = false, clearTimeout(g6);
  }
  return (g6, ...c6) => {
    e2.push(g6.bind(void 0, ...c6)), e2.length === 1 && !t3 && setTimeout(o4);
  };
}
var w = "unenv";
var L = [];
var y2 = "";
var C2 = { ares: "", http_parser: "", icu: "", modules: "", node: "", openssl: "", uv: "", v8: "", zlib: "" };
function i() {
  return _2;
}
var P2 = i;
var U2 = i;
var O2 = i;
var A2 = i;
var j2 = i;
var N2 = i;
var T2 = function(e2) {
  return e2 === "message" || e2 === "multipleResolves" ? _2 : false;
};
var R2 = i;
var I = i;
var S2 = function(e2) {
  return [];
};
var B2 = () => 0;
var D2 = function(e2) {
  throw new Error("[unenv] process.binding is not supported");
};
var f2 = "/";
var F2 = function() {
  return f2;
};
var $2 = function(e2) {
  f2 = e2;
};
var q2 = function() {
  return 0;
};
var z2 = function() {
  return 1e3;
};
var H2 = function() {
  return 1e3;
};
var W2 = function() {
  return 1e3;
};
var K2 = function() {
  return 1e3;
};
var G2 = function() {
  return [];
};
var J2 = (e2) => {
};
var Q2 = s("process.abort");
var V2 = /* @__PURE__ */ new Set();
var X2 = "";
var Y2 = "";
var Z2 = b2;
var ee = false;
var se = () => 0;
var te = () => 0;
var re = s("process.cpuUsage");
var ae = 0;
var ne = s("process.dlopen");
var ie = i;
var oe = i;
var ce = s("process.eventNames");
var ue = [];
var le = "";
var de = s("process.exit");
var pe = /* @__PURE__ */ Object.create({ inspector: void 0, debug: void 0, uv: void 0, ipv6: void 0, tls_alpn: void 0, tls_sni: void 0, tls_ocsp: void 0, tls: void 0, cached_builtins: void 0 });
var ge = () => [];
var _e = s("process.getMaxListeners");
var ve = s("process.kill");
var fe = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 });
var me = 1e3;
var be = "";
var he = 1e3;
var xe = s("process.rawListeners");
var ke = /* @__PURE__ */ Object.create({ name: "", lts: "", sourceUrl: void 0, headersUrl: void 0 });
var Ee = /* @__PURE__ */ Object.create({ compact: void 0, directory: void 0, filename: void 0, getReport: s("process.report.getReport"), reportOnFatalError: void 0, reportOnSignal: void 0, reportOnUncaughtException: void 0, signal: void 0, writeReport: s("process.report.writeReport") });
var Me = s("process.resourceUsage");
var we = s("process.setegid");
var Le = s("process.seteuid");
var ye = s("process.setgid");
var Ce = s("process.setgroups");
var Pe = s("process.setuid");
var Ue = s("process.setMaxListeners");
var Oe = s("process.setSourceMapsEnabled");
var Ae = d2.__createMock__("process.stdout");
var je = d2.__createMock__("process.stderr");
var Ne = d2.__createMock__("process.stdin");
var Te = false;
var Re = () => 0;
var Ie = 0;
var Se = s("process.setUncaughtExceptionCaptureCallback");
var Be = () => false;
var De = false;
var Fe = s("process.loadEnvFile");
var $e = void 0;
var qe = { has: () => false };
var ze = { ref() {
}, unref() {
} };
var He = false;
var We = { register() {
}, unregister() {
}, registerBeforeExit() {
} };
var Ke = s("process.assert");
var Ge = s("process.openStdin");
var Je = s("process._debugEnd");
var Qe = s("process._debugProcess");
var Ve = s("process._fatalException");
var Xe = s("process._getActiveHandles");
var Ye = s("process._getActiveRequests");
var Ze = s("process._kill");
var es = [];
var ss = s("process._rawDebug");
var ts = s("process._startProfilerIdleNotifier");
var rs = s("process.__stopProfilerIdleNotifier");
var as = s("process._tickCallback");
var hs = s("process._linkedBinding");
var ns = void 0;
var is = s("process.initgroups");
var os = [];
var cs = i;
var us = false;
var ls = [];
var ds = 0;
var ps = 0;
var _2 = { _events: ls, _eventsCount: ds, _exiting: us, _maxListeners: ps, _debugEnd: Je, _debugProcess: Qe, _fatalException: Ve, _getActiveHandles: Xe, _getActiveRequests: Ye, _kill: Ze, _preload_modules: es, _rawDebug: ss, _startProfilerIdleNotifier: ts, _stopProfilerIdleNotifier: rs, _tickCallback: as, domain: ns, initgroups: is, moduleLoadList: os, reallyExit: cs, exitCode: Ie, abort: Q2, addListener: U2, allowedNodeEnvironmentFlags: V2, hasUncaughtExceptionCaptureCallback: Be, setUncaughtExceptionCaptureCallback: Se, loadEnvFile: Fe, sourceMapsEnabled: De, throwDeprecation: He, mainModule: $e, permission: qe, channel: ze, arch: X2, argv: L, argv0: Y2, assert: Ke, binding: D2, chdir: $2, config: Z2, connected: ee, constrainedMemory: se, availableMemory: te, cpuUsage: re, cwd: F2, debugPort: ae, dlopen: ne, disconnect: ie, emit: T2, emitWarning: oe, env: x2, eventNames: ce, execArgv: ue, execPath: le, exit: de, finalization: We, features: pe, getBuiltinModule: J2, getegid: z2, geteuid: H2, getgid: W2, getgroups: G2, getuid: K2, getActiveResourcesInfo: ge, getMaxListeners: _e, hrtime: k2, kill: ve, listeners: S2, listenerCount: B2, memoryUsage: fe, nextTick: E2, on: P2, off: A2, once: O2, openStdin: Ge, pid: me, platform: be, ppid: he, prependListener: R2, prependOnceListener: I, rawListeners: xe, release: ke, removeAllListeners: N2, removeListener: j2, report: Ee, resourceUsage: Me, setegid: we, seteuid: Le, setgid: ye, setgroups: Ce, setuid: Pe, setMaxListeners: Ue, setSourceMapsEnabled: Oe, stderr: je, stdin: Ne, stdout: Ae, title: w, traceDeprecation: Te, umask: q2, uptime: Re, version: y2, versions: C2 };
var xs = _2;

// https://esm.sh/safer-buffer@2.1.2/es2022/safer-buffer.development.mjs
var require2 = (n3) => {
  const e2 = (m5) => typeof m5.default < "u" ? m5.default : m5, c6 = (m5) => Object.assign({ __esModule: true }, m5);
  switch (n3) {
    case "node:buffer":
      return e2(buffer_exports);
    default:
      console.error('module "' + n3 + '" not found');
      return null;
  }
};
var h2 = Object.create;
var y3 = Object.defineProperty;
var m3 = Object.getOwnPropertyDescriptor;
var l2 = Object.getOwnPropertyNames;
var b3 = Object.getPrototypeOf;
var w2 = Object.prototype.hasOwnProperty;
var T3 = ((e2) => typeof require2 < "u" ? require2 : typeof Proxy < "u" ? new Proxy(e2, { get: (r3, t3) => (typeof require2 < "u" ? require2 : r3)[t3] }) : e2)(function(e2) {
  if (typeof require2 < "u") return require2.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var x3 = (e2, r3) => () => (r3 || e2((r3 = { exports: {} }).exports, r3), r3.exports);
var S3 = (e2, r3, t3, o4) => {
  if (r3 && typeof r3 == "object" || typeof r3 == "function") for (let u5 of l2(r3)) !w2.call(e2, u5) && u5 !== t3 && y3(e2, u5, { get: () => r3[u5], enumerable: !(o4 = m3(r3, u5)) || o4.enumerable });
  return e2;
};
var d3 = (e2, r3, t3) => (t3 = e2 != null ? h2(b3(e2)) : {}, S3(r3 || !e2 || !e2.__esModule ? y3(t3, "default", { value: e2, enumerable: true }) : t3, e2));
var g2 = x3((B5, c6) => {
  "use strict";
  var p5 = T3("node:buffer"), i4 = p5.Buffer, f5 = {}, n3;
  for (n3 in p5) p5.hasOwnProperty(n3) && (n3 === "SlowBuffer" || n3 === "Buffer" || (f5[n3] = p5[n3]));
  var a4 = f5.Buffer = {};
  for (n3 in i4) i4.hasOwnProperty(n3) && (n3 === "allocUnsafe" || n3 === "allocUnsafeSlow" || (a4[n3] = i4[n3]));
  f5.Buffer.prototype = i4.prototype;
  (!a4.from || a4.from === Uint8Array.from) && (a4.from = function(e2, r3, t3) {
    if (typeof e2 == "number") throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e2);
    if (e2 && typeof e2.length > "u") throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
    return i4(e2, r3, t3);
  });
  a4.alloc || (a4.alloc = function(e2, r3, t3) {
    if (typeof e2 != "number") throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e2);
    if (e2 < 0 || e2 >= 2 * (1 << 30)) throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
    var o4 = i4(e2);
    return !r3 || r3.length === 0 ? o4.fill(0) : typeof t3 == "string" ? o4.fill(r3, t3) : o4.fill(r3), o4;
  });
  if (!f5.kStringMaxLength) try {
    f5.kStringMaxLength = xs.binding("buffer").kStringMaxLength;
  } catch {
  }
  f5.constants || (f5.constants = { MAX_LENGTH: f5.kMaxLength }, f5.kStringMaxLength && (f5.constants.MAX_STRING_LENGTH = f5.kStringMaxLength));
  c6.exports = f5;
});
var s2 = d3(g2());
var { constants: L2 } = s2;
var M3 = s2.default ?? s2;

// https://esm.sh/iconv-lite@0.7.0/es2022/iconv-lite.development.mjs
var require3 = (n3) => {
  const e2 = (m5) => typeof m5.default < "u" ? m5.default : m5, c6 = (m5) => Object.assign({ __esModule: true }, m5);
  switch (n3) {
    case "safer-buffer":
      return e2(safer_buffer_2_1_exports);
    case "node:string_decoder":
      return e2(string_decoder_exports);
    default:
      console.error('module "' + n3 + '" not found');
      return null;
  }
};
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x7) => typeof require3 !== "undefined" ? require3 : typeof Proxy !== "undefined" ? new Proxy(x7, {
  get: (a4, b6) => (typeof require3 !== "undefined" ? require3 : a4)[b6]
}) : x7)(function(x7) {
  if (typeof require3 !== "undefined") return require3.apply(this, arguments);
  throw Error('Dynamic require of "' + x7 + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp2({}, "__esModule", { value: true }), mod);
var require_bom_handling = __commonJS({
  "node_modules/iconv-lite/lib/bom-handling.js"(exports) {
    "use strict";
    var BOMChar = "\uFEFF";
    exports.PrependBOM = PrependBOMWrapper;
    function PrependBOMWrapper(encoder, options) {
      this.encoder = encoder;
      this.addBOM = true;
    }
    PrependBOMWrapper.prototype.write = function(str) {
      if (this.addBOM) {
        str = BOMChar + str;
        this.addBOM = false;
      }
      return this.encoder.write(str);
    };
    PrependBOMWrapper.prototype.end = function() {
      return this.encoder.end();
    };
    exports.StripBOM = StripBOMWrapper;
    function StripBOMWrapper(decoder, options) {
      this.decoder = decoder;
      this.pass = false;
      this.options = options || {};
    }
    StripBOMWrapper.prototype.write = function(buf) {
      var res = this.decoder.write(buf);
      if (this.pass || !res) {
        return res;
      }
      if (res[0] === BOMChar) {
        res = res.slice(1);
        if (typeof this.options.stripBOM === "function") {
          this.options.stripBOM();
        }
      }
      this.pass = true;
      return res;
    };
    StripBOMWrapper.prototype.end = function() {
      return this.decoder.end();
    };
  }
});
var require_merge_exports = __commonJS({
  "node_modules/iconv-lite/lib/helpers/merge-exports.js"(exports, module) {
    "use strict";
    var hasOwn = typeof Object.hasOwn === "undefined" ? Function.call.bind(Object.prototype.hasOwnProperty) : Object.hasOwn;
    function mergeModules(target, module2) {
      for (var key in module2) {
        if (hasOwn(module2, key)) {
          target[key] = module2[key];
        }
      }
    }
    module.exports = mergeModules;
  }
});
var require_internal = __commonJS({
  "node_modules/iconv-lite/encodings/internal.js"(exports, module) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    module.exports = {
      // Encodings
      utf8: { type: "_internal", bomAware: true },
      cesu8: { type: "_internal", bomAware: true },
      unicode11utf8: "utf8",
      ucs2: { type: "_internal", bomAware: true },
      utf16le: "ucs2",
      binary: { type: "_internal" },
      base64: { type: "_internal" },
      hex: { type: "_internal" },
      // Codec.
      _internal: InternalCodec
    };
    function InternalCodec(codecOptions, iconv) {
      this.enc = codecOptions.encodingName;
      this.bomAware = codecOptions.bomAware;
      if (this.enc === "base64") {
        this.encoder = InternalEncoderBase64;
      } else if (this.enc === "utf8") {
        this.encoder = InternalEncoderUtf8;
      } else if (this.enc === "cesu8") {
        this.enc = "utf8";
        this.encoder = InternalEncoderCesu8;
        if (Buffer2.from("eda0bdedb2a9", "hex").toString() !== "💩") {
          this.decoder = InternalDecoderCesu8;
          this.defaultCharUnicode = iconv.defaultCharUnicode;
        }
      }
    }
    InternalCodec.prototype.encoder = InternalEncoder;
    InternalCodec.prototype.decoder = InternalDecoder;
    var StringDecoder = __require("node:string_decoder").StringDecoder;
    function InternalDecoder(options, codec) {
      this.decoder = new StringDecoder(codec.enc);
    }
    InternalDecoder.prototype.write = function(buf) {
      if (!Buffer2.isBuffer(buf)) {
        buf = Buffer2.from(buf);
      }
      return this.decoder.write(buf);
    };
    InternalDecoder.prototype.end = function() {
      return this.decoder.end();
    };
    function InternalEncoder(options, codec) {
      this.enc = codec.enc;
    }
    InternalEncoder.prototype.write = function(str) {
      return Buffer2.from(str, this.enc);
    };
    InternalEncoder.prototype.end = function() {
    };
    function InternalEncoderBase64(options, codec) {
      this.prevStr = "";
    }
    InternalEncoderBase64.prototype.write = function(str) {
      str = this.prevStr + str;
      var completeQuads = str.length - str.length % 4;
      this.prevStr = str.slice(completeQuads);
      str = str.slice(0, completeQuads);
      return Buffer2.from(str, "base64");
    };
    InternalEncoderBase64.prototype.end = function() {
      return Buffer2.from(this.prevStr, "base64");
    };
    function InternalEncoderCesu8(options, codec) {
    }
    InternalEncoderCesu8.prototype.write = function(str) {
      var buf = Buffer2.alloc(str.length * 3);
      var bufIdx = 0;
      for (var i4 = 0; i4 < str.length; i4++) {
        var charCode = str.charCodeAt(i4);
        if (charCode < 128) {
          buf[bufIdx++] = charCode;
        } else if (charCode < 2048) {
          buf[bufIdx++] = 192 + (charCode >>> 6);
          buf[bufIdx++] = 128 + (charCode & 63);
        } else {
          buf[bufIdx++] = 224 + (charCode >>> 12);
          buf[bufIdx++] = 128 + (charCode >>> 6 & 63);
          buf[bufIdx++] = 128 + (charCode & 63);
        }
      }
      return buf.slice(0, bufIdx);
    };
    InternalEncoderCesu8.prototype.end = function() {
    };
    function InternalDecoderCesu8(options, codec) {
      this.acc = 0;
      this.contBytes = 0;
      this.accBytes = 0;
      this.defaultCharUnicode = codec.defaultCharUnicode;
    }
    InternalDecoderCesu8.prototype.write = function(buf) {
      var acc = this.acc;
      var contBytes = this.contBytes;
      var accBytes = this.accBytes;
      var res = "";
      for (var i4 = 0; i4 < buf.length; i4++) {
        var curByte = buf[i4];
        if ((curByte & 192) !== 128) {
          if (contBytes > 0) {
            res += this.defaultCharUnicode;
            contBytes = 0;
          }
          if (curByte < 128) {
            res += String.fromCharCode(curByte);
          } else if (curByte < 224) {
            acc = curByte & 31;
            contBytes = 1;
            accBytes = 1;
          } else if (curByte < 240) {
            acc = curByte & 15;
            contBytes = 2;
            accBytes = 1;
          } else {
            res += this.defaultCharUnicode;
          }
        } else {
          if (contBytes > 0) {
            acc = acc << 6 | curByte & 63;
            contBytes--;
            accBytes++;
            if (contBytes === 0) {
              if (accBytes === 2 && acc < 128 && acc > 0) {
                res += this.defaultCharUnicode;
              } else if (accBytes === 3 && acc < 2048) {
                res += this.defaultCharUnicode;
              } else {
                res += String.fromCharCode(acc);
              }
            }
          } else {
            res += this.defaultCharUnicode;
          }
        }
      }
      this.acc = acc;
      this.contBytes = contBytes;
      this.accBytes = accBytes;
      return res;
    };
    InternalDecoderCesu8.prototype.end = function() {
      var res = 0;
      if (this.contBytes > 0) {
        res += this.defaultCharUnicode;
      }
      return res;
    };
    function InternalEncoderUtf8(options, codec) {
      this.highSurrogate = "";
    }
    InternalEncoderUtf8.prototype.write = function(str) {
      if (this.highSurrogate) {
        str = this.highSurrogate + str;
        this.highSurrogate = "";
      }
      if (str.length > 0) {
        var charCode = str.charCodeAt(str.length - 1);
        if (charCode >= 55296 && charCode < 56320) {
          this.highSurrogate = str[str.length - 1];
          str = str.slice(0, str.length - 1);
        }
      }
      return Buffer2.from(str, this.enc);
    };
    InternalEncoderUtf8.prototype.end = function() {
      if (this.highSurrogate) {
        var str = this.highSurrogate;
        this.highSurrogate = "";
        return Buffer2.from(str, this.enc);
      }
    };
  }
});
var require_utf32 = __commonJS({
  "node_modules/iconv-lite/encodings/utf32.js"(exports) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    exports._utf32 = Utf32Codec;
    function Utf32Codec(codecOptions, iconv) {
      this.iconv = iconv;
      this.bomAware = true;
      this.isLE = codecOptions.isLE;
    }
    exports.utf32le = { type: "_utf32", isLE: true };
    exports.utf32be = { type: "_utf32", isLE: false };
    exports.ucs4le = "utf32le";
    exports.ucs4be = "utf32be";
    Utf32Codec.prototype.encoder = Utf32Encoder;
    Utf32Codec.prototype.decoder = Utf32Decoder;
    function Utf32Encoder(options, codec) {
      this.isLE = codec.isLE;
      this.highSurrogate = 0;
    }
    Utf32Encoder.prototype.write = function(str) {
      var src = Buffer2.from(str, "ucs2");
      var dst = Buffer2.alloc(src.length * 2);
      var write32 = this.isLE ? dst.writeUInt32LE : dst.writeUInt32BE;
      var offset = 0;
      for (var i4 = 0; i4 < src.length; i4 += 2) {
        var code = src.readUInt16LE(i4);
        var isHighSurrogate = code >= 55296 && code < 56320;
        var isLowSurrogate = code >= 56320 && code < 57344;
        if (this.highSurrogate) {
          if (isHighSurrogate || !isLowSurrogate) {
            write32.call(dst, this.highSurrogate, offset);
            offset += 4;
          } else {
            var codepoint = (this.highSurrogate - 55296 << 10 | code - 56320) + 65536;
            write32.call(dst, codepoint, offset);
            offset += 4;
            this.highSurrogate = 0;
            continue;
          }
        }
        if (isHighSurrogate) {
          this.highSurrogate = code;
        } else {
          write32.call(dst, code, offset);
          offset += 4;
          this.highSurrogate = 0;
        }
      }
      if (offset < dst.length) {
        dst = dst.slice(0, offset);
      }
      return dst;
    };
    Utf32Encoder.prototype.end = function() {
      if (!this.highSurrogate) {
        return;
      }
      var buf = Buffer2.alloc(4);
      if (this.isLE) {
        buf.writeUInt32LE(this.highSurrogate, 0);
      } else {
        buf.writeUInt32BE(this.highSurrogate, 0);
      }
      this.highSurrogate = 0;
      return buf;
    };
    function Utf32Decoder(options, codec) {
      this.isLE = codec.isLE;
      this.badChar = codec.iconv.defaultCharUnicode.charCodeAt(0);
      this.overflow = [];
    }
    Utf32Decoder.prototype.write = function(src) {
      if (src.length === 0) {
        return "";
      }
      var i4 = 0;
      var codepoint = 0;
      var dst = Buffer2.alloc(src.length + 4);
      var offset = 0;
      var isLE = this.isLE;
      var overflow = this.overflow;
      var badChar = this.badChar;
      if (overflow.length > 0) {
        for (; i4 < src.length && overflow.length < 4; i4++) {
          overflow.push(src[i4]);
        }
        if (overflow.length === 4) {
          if (isLE) {
            codepoint = overflow[i4] | overflow[i4 + 1] << 8 | overflow[i4 + 2] << 16 | overflow[i4 + 3] << 24;
          } else {
            codepoint = overflow[i4 + 3] | overflow[i4 + 2] << 8 | overflow[i4 + 1] << 16 | overflow[i4] << 24;
          }
          overflow.length = 0;
          offset = _writeCodepoint(dst, offset, codepoint, badChar);
        }
      }
      for (; i4 < src.length - 3; i4 += 4) {
        if (isLE) {
          codepoint = src[i4] | src[i4 + 1] << 8 | src[i4 + 2] << 16 | src[i4 + 3] << 24;
        } else {
          codepoint = src[i4 + 3] | src[i4 + 2] << 8 | src[i4 + 1] << 16 | src[i4] << 24;
        }
        offset = _writeCodepoint(dst, offset, codepoint, badChar);
      }
      for (; i4 < src.length; i4++) {
        overflow.push(src[i4]);
      }
      return dst.slice(0, offset).toString("ucs2");
    };
    function _writeCodepoint(dst, offset, codepoint, badChar) {
      if (codepoint < 0 || codepoint > 1114111) {
        codepoint = badChar;
      }
      if (codepoint >= 65536) {
        codepoint -= 65536;
        var high = 55296 | codepoint >> 10;
        dst[offset++] = high & 255;
        dst[offset++] = high >> 8;
        var codepoint = 56320 | codepoint & 1023;
      }
      dst[offset++] = codepoint & 255;
      dst[offset++] = codepoint >> 8;
      return offset;
    }
    Utf32Decoder.prototype.end = function() {
      this.overflow.length = 0;
    };
    exports.utf32 = Utf32AutoCodec;
    exports.ucs4 = "utf32";
    function Utf32AutoCodec(options, iconv) {
      this.iconv = iconv;
    }
    Utf32AutoCodec.prototype.encoder = Utf32AutoEncoder;
    Utf32AutoCodec.prototype.decoder = Utf32AutoDecoder;
    function Utf32AutoEncoder(options, codec) {
      options = options || {};
      if (options.addBOM === void 0) {
        options.addBOM = true;
      }
      this.encoder = codec.iconv.getEncoder(options.defaultEncoding || "utf-32le", options);
    }
    Utf32AutoEncoder.prototype.write = function(str) {
      return this.encoder.write(str);
    };
    Utf32AutoEncoder.prototype.end = function() {
      return this.encoder.end();
    };
    function Utf32AutoDecoder(options, codec) {
      this.decoder = null;
      this.initialBufs = [];
      this.initialBufsLen = 0;
      this.options = options || {};
      this.iconv = codec.iconv;
    }
    Utf32AutoDecoder.prototype.write = function(buf) {
      if (!this.decoder) {
        this.initialBufs.push(buf);
        this.initialBufsLen += buf.length;
        if (this.initialBufsLen < 32) {
          return "";
        }
        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var resStr = "";
        for (var i4 = 0; i4 < this.initialBufs.length; i4++) {
          resStr += this.decoder.write(this.initialBufs[i4]);
        }
        this.initialBufs.length = this.initialBufsLen = 0;
        return resStr;
      }
      return this.decoder.write(buf);
    };
    Utf32AutoDecoder.prototype.end = function() {
      if (!this.decoder) {
        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var resStr = "";
        for (var i4 = 0; i4 < this.initialBufs.length; i4++) {
          resStr += this.decoder.write(this.initialBufs[i4]);
        }
        var trail = this.decoder.end();
        if (trail) {
          resStr += trail;
        }
        this.initialBufs.length = this.initialBufsLen = 0;
        return resStr;
      }
      return this.decoder.end();
    };
    function detectEncoding(bufs, defaultEncoding) {
      var b6 = [];
      var charsProcessed = 0;
      var invalidLE = 0;
      var invalidBE = 0;
      var bmpCharsLE = 0;
      var bmpCharsBE = 0;
      outerLoop:
        for (var i4 = 0; i4 < bufs.length; i4++) {
          var buf = bufs[i4];
          for (var j5 = 0; j5 < buf.length; j5++) {
            b6.push(buf[j5]);
            if (b6.length === 4) {
              if (charsProcessed === 0) {
                if (b6[0] === 255 && b6[1] === 254 && b6[2] === 0 && b6[3] === 0) {
                  return "utf-32le";
                }
                if (b6[0] === 0 && b6[1] === 0 && b6[2] === 254 && b6[3] === 255) {
                  return "utf-32be";
                }
              }
              if (b6[0] !== 0 || b6[1] > 16) invalidBE++;
              if (b6[3] !== 0 || b6[2] > 16) invalidLE++;
              if (b6[0] === 0 && b6[1] === 0 && (b6[2] !== 0 || b6[3] !== 0)) bmpCharsBE++;
              if ((b6[0] !== 0 || b6[1] !== 0) && b6[2] === 0 && b6[3] === 0) bmpCharsLE++;
              b6.length = 0;
              charsProcessed++;
              if (charsProcessed >= 100) {
                break outerLoop;
              }
            }
          }
        }
      if (bmpCharsBE - invalidBE > bmpCharsLE - invalidLE) return "utf-32be";
      if (bmpCharsBE - invalidBE < bmpCharsLE - invalidLE) return "utf-32le";
      return defaultEncoding || "utf-32le";
    }
  }
});
var require_utf16 = __commonJS({
  "node_modules/iconv-lite/encodings/utf16.js"(exports) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    exports.utf16be = Utf16BECodec;
    function Utf16BECodec() {
    }
    Utf16BECodec.prototype.encoder = Utf16BEEncoder;
    Utf16BECodec.prototype.decoder = Utf16BEDecoder;
    Utf16BECodec.prototype.bomAware = true;
    function Utf16BEEncoder() {
    }
    Utf16BEEncoder.prototype.write = function(str) {
      var buf = Buffer2.from(str, "ucs2");
      for (var i4 = 0; i4 < buf.length; i4 += 2) {
        var tmp = buf[i4];
        buf[i4] = buf[i4 + 1];
        buf[i4 + 1] = tmp;
      }
      return buf;
    };
    Utf16BEEncoder.prototype.end = function() {
    };
    function Utf16BEDecoder() {
      this.overflowByte = -1;
    }
    Utf16BEDecoder.prototype.write = function(buf) {
      if (buf.length == 0) {
        return "";
      }
      var buf2 = Buffer2.alloc(buf.length + 1);
      var i4 = 0;
      var j5 = 0;
      if (this.overflowByte !== -1) {
        buf2[0] = buf[0];
        buf2[1] = this.overflowByte;
        i4 = 1;
        j5 = 2;
      }
      for (; i4 < buf.length - 1; i4 += 2, j5 += 2) {
        buf2[j5] = buf[i4 + 1];
        buf2[j5 + 1] = buf[i4];
      }
      this.overflowByte = i4 == buf.length - 1 ? buf[buf.length - 1] : -1;
      return buf2.slice(0, j5).toString("ucs2");
    };
    Utf16BEDecoder.prototype.end = function() {
      this.overflowByte = -1;
    };
    exports.utf16 = Utf16Codec;
    function Utf16Codec(codecOptions, iconv) {
      this.iconv = iconv;
    }
    Utf16Codec.prototype.encoder = Utf16Encoder;
    Utf16Codec.prototype.decoder = Utf16Decoder;
    function Utf16Encoder(options, codec) {
      options = options || {};
      if (options.addBOM === void 0) {
        options.addBOM = true;
      }
      this.encoder = codec.iconv.getEncoder("utf-16le", options);
    }
    Utf16Encoder.prototype.write = function(str) {
      return this.encoder.write(str);
    };
    Utf16Encoder.prototype.end = function() {
      return this.encoder.end();
    };
    function Utf16Decoder(options, codec) {
      this.decoder = null;
      this.initialBufs = [];
      this.initialBufsLen = 0;
      this.options = options || {};
      this.iconv = codec.iconv;
    }
    Utf16Decoder.prototype.write = function(buf) {
      if (!this.decoder) {
        this.initialBufs.push(buf);
        this.initialBufsLen += buf.length;
        if (this.initialBufsLen < 16) {
          return "";
        }
        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var resStr = "";
        for (var i4 = 0; i4 < this.initialBufs.length; i4++) {
          resStr += this.decoder.write(this.initialBufs[i4]);
        }
        this.initialBufs.length = this.initialBufsLen = 0;
        return resStr;
      }
      return this.decoder.write(buf);
    };
    Utf16Decoder.prototype.end = function() {
      if (!this.decoder) {
        var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(encoding, this.options);
        var resStr = "";
        for (var i4 = 0; i4 < this.initialBufs.length; i4++) {
          resStr += this.decoder.write(this.initialBufs[i4]);
        }
        var trail = this.decoder.end();
        if (trail) {
          resStr += trail;
        }
        this.initialBufs.length = this.initialBufsLen = 0;
        return resStr;
      }
      return this.decoder.end();
    };
    function detectEncoding(bufs, defaultEncoding) {
      var b6 = [];
      var charsProcessed = 0;
      var asciiCharsLE = 0;
      var asciiCharsBE = 0;
      outerLoop:
        for (var i4 = 0; i4 < bufs.length; i4++) {
          var buf = bufs[i4];
          for (var j5 = 0; j5 < buf.length; j5++) {
            b6.push(buf[j5]);
            if (b6.length === 2) {
              if (charsProcessed === 0) {
                if (b6[0] === 255 && b6[1] === 254) return "utf-16le";
                if (b6[0] === 254 && b6[1] === 255) return "utf-16be";
              }
              if (b6[0] === 0 && b6[1] !== 0) asciiCharsBE++;
              if (b6[0] !== 0 && b6[1] === 0) asciiCharsLE++;
              b6.length = 0;
              charsProcessed++;
              if (charsProcessed >= 100) {
                break outerLoop;
              }
            }
          }
        }
      if (asciiCharsBE > asciiCharsLE) return "utf-16be";
      if (asciiCharsBE < asciiCharsLE) return "utf-16le";
      return defaultEncoding || "utf-16le";
    }
  }
});
var require_utf7 = __commonJS({
  "node_modules/iconv-lite/encodings/utf7.js"(exports) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    exports.utf7 = Utf7Codec;
    exports.unicode11utf7 = "utf7";
    function Utf7Codec(codecOptions, iconv) {
      this.iconv = iconv;
    }
    Utf7Codec.prototype.encoder = Utf7Encoder;
    Utf7Codec.prototype.decoder = Utf7Decoder;
    Utf7Codec.prototype.bomAware = true;
    var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
    function Utf7Encoder(options, codec) {
      this.iconv = codec.iconv;
    }
    Utf7Encoder.prototype.write = function(str) {
      return Buffer2.from(str.replace(nonDirectChars, function(chunk) {
        return "+" + (chunk === "+" ? "" : this.iconv.encode(chunk, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
      }.bind(this)));
    };
    Utf7Encoder.prototype.end = function() {
    };
    function Utf7Decoder(options, codec) {
      this.iconv = codec.iconv;
      this.inBase64 = false;
      this.base64Accum = "";
    }
    var base64Regex = /[A-Za-z0-9\/+]/;
    var base64Chars = [];
    for (i4 = 0; i4 < 256; i4++) {
      base64Chars[i4] = base64Regex.test(String.fromCharCode(i4));
    }
    var i4;
    var plusChar = "+".charCodeAt(0);
    var minusChar = "-".charCodeAt(0);
    var andChar = "&".charCodeAt(0);
    Utf7Decoder.prototype.write = function(buf) {
      var res = "";
      var lastI = 0;
      var inBase64 = this.inBase64;
      var base64Accum = this.base64Accum;
      for (var i22 = 0; i22 < buf.length; i22++) {
        if (!inBase64) {
          if (buf[i22] == plusChar) {
            res += this.iconv.decode(buf.slice(lastI, i22), "ascii");
            lastI = i22 + 1;
            inBase64 = true;
          }
        } else {
          if (!base64Chars[buf[i22]]) {
            if (i22 == lastI && buf[i22] == minusChar) {
              res += "+";
            } else {
              var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i22), "ascii");
              res += this.iconv.decode(Buffer2.from(b64str, "base64"), "utf16-be");
            }
            if (buf[i22] != minusChar) {
              i22--;
            }
            lastI = i22 + 1;
            inBase64 = false;
            base64Accum = "";
          }
        }
      }
      if (!inBase64) {
        res += this.iconv.decode(buf.slice(lastI), "ascii");
      } else {
        var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii");
        var canBeDecoded = b64str.length - b64str.length % 8;
        base64Accum = b64str.slice(canBeDecoded);
        b64str = b64str.slice(0, canBeDecoded);
        res += this.iconv.decode(Buffer2.from(b64str, "base64"), "utf16-be");
      }
      this.inBase64 = inBase64;
      this.base64Accum = base64Accum;
      return res;
    };
    Utf7Decoder.prototype.end = function() {
      var res = "";
      if (this.inBase64 && this.base64Accum.length > 0) {
        res = this.iconv.decode(Buffer2.from(this.base64Accum, "base64"), "utf16-be");
      }
      this.inBase64 = false;
      this.base64Accum = "";
      return res;
    };
    exports.utf7imap = Utf7IMAPCodec;
    function Utf7IMAPCodec(codecOptions, iconv) {
      this.iconv = iconv;
    }
    Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
    Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
    Utf7IMAPCodec.prototype.bomAware = true;
    function Utf7IMAPEncoder(options, codec) {
      this.iconv = codec.iconv;
      this.inBase64 = false;
      this.base64Accum = Buffer2.alloc(6);
      this.base64AccumIdx = 0;
    }
    Utf7IMAPEncoder.prototype.write = function(str) {
      var inBase64 = this.inBase64;
      var base64Accum = this.base64Accum;
      var base64AccumIdx = this.base64AccumIdx;
      var buf = Buffer2.alloc(str.length * 5 + 10);
      var bufIdx = 0;
      for (var i22 = 0; i22 < str.length; i22++) {
        var uChar = str.charCodeAt(i22);
        if (uChar >= 32 && uChar <= 126) {
          if (inBase64) {
            if (base64AccumIdx > 0) {
              bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), bufIdx);
              base64AccumIdx = 0;
            }
            buf[bufIdx++] = minusChar;
            inBase64 = false;
          }
          if (!inBase64) {
            buf[bufIdx++] = uChar;
            if (uChar === andChar) {
              buf[bufIdx++] = minusChar;
            }
          }
        } else {
          if (!inBase64) {
            buf[bufIdx++] = andChar;
            inBase64 = true;
          }
          if (inBase64) {
            base64Accum[base64AccumIdx++] = uChar >> 8;
            base64Accum[base64AccumIdx++] = uChar & 255;
            if (base64AccumIdx == base64Accum.length) {
              bufIdx += buf.write(base64Accum.toString("base64").replace(/\//g, ","), bufIdx);
              base64AccumIdx = 0;
            }
          }
        }
      }
      this.inBase64 = inBase64;
      this.base64AccumIdx = base64AccumIdx;
      return buf.slice(0, bufIdx);
    };
    Utf7IMAPEncoder.prototype.end = function() {
      var buf = Buffer2.alloc(10);
      var bufIdx = 0;
      if (this.inBase64) {
        if (this.base64AccumIdx > 0) {
          bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), bufIdx);
          this.base64AccumIdx = 0;
        }
        buf[bufIdx++] = minusChar;
        this.inBase64 = false;
      }
      return buf.slice(0, bufIdx);
    };
    function Utf7IMAPDecoder(options, codec) {
      this.iconv = codec.iconv;
      this.inBase64 = false;
      this.base64Accum = "";
    }
    var base64IMAPChars = base64Chars.slice();
    base64IMAPChars[",".charCodeAt(0)] = true;
    Utf7IMAPDecoder.prototype.write = function(buf) {
      var res = "";
      var lastI = 0;
      var inBase64 = this.inBase64;
      var base64Accum = this.base64Accum;
      for (var i22 = 0; i22 < buf.length; i22++) {
        if (!inBase64) {
          if (buf[i22] == andChar) {
            res += this.iconv.decode(buf.slice(lastI, i22), "ascii");
            lastI = i22 + 1;
            inBase64 = true;
          }
        } else {
          if (!base64IMAPChars[buf[i22]]) {
            if (i22 == lastI && buf[i22] == minusChar) {
              res += "&";
            } else {
              var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i22), "ascii").replace(/,/g, "/");
              res += this.iconv.decode(Buffer2.from(b64str, "base64"), "utf16-be");
            }
            if (buf[i22] != minusChar) {
              i22--;
            }
            lastI = i22 + 1;
            inBase64 = false;
            base64Accum = "";
          }
        }
      }
      if (!inBase64) {
        res += this.iconv.decode(buf.slice(lastI), "ascii");
      } else {
        var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii").replace(/,/g, "/");
        var canBeDecoded = b64str.length - b64str.length % 8;
        base64Accum = b64str.slice(canBeDecoded);
        b64str = b64str.slice(0, canBeDecoded);
        res += this.iconv.decode(Buffer2.from(b64str, "base64"), "utf16-be");
      }
      this.inBase64 = inBase64;
      this.base64Accum = base64Accum;
      return res;
    };
    Utf7IMAPDecoder.prototype.end = function() {
      var res = "";
      if (this.inBase64 && this.base64Accum.length > 0) {
        res = this.iconv.decode(Buffer2.from(this.base64Accum, "base64"), "utf16-be");
      }
      this.inBase64 = false;
      this.base64Accum = "";
      return res;
    };
  }
});
var require_sbcs_codec = __commonJS({
  "node_modules/iconv-lite/encodings/sbcs-codec.js"(exports) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    exports._sbcs = SBCSCodec;
    function SBCSCodec(codecOptions, iconv) {
      if (!codecOptions) {
        throw new Error("SBCS codec is called without the data.");
      }
      if (!codecOptions.chars || codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256) {
        throw new Error("Encoding '" + codecOptions.type + "' has incorrect 'chars' (must be of len 128 or 256)");
      }
      if (codecOptions.chars.length === 128) {
        var asciiString = "";
        for (var i4 = 0; i4 < 128; i4++) {
          asciiString += String.fromCharCode(i4);
        }
        codecOptions.chars = asciiString + codecOptions.chars;
      }
      this.decodeBuf = Buffer2.from(codecOptions.chars, "ucs2");
      var encodeBuf = Buffer2.alloc(65536, iconv.defaultCharSingleByte.charCodeAt(0));
      for (var i4 = 0; i4 < codecOptions.chars.length; i4++) {
        encodeBuf[codecOptions.chars.charCodeAt(i4)] = i4;
      }
      this.encodeBuf = encodeBuf;
    }
    SBCSCodec.prototype.encoder = SBCSEncoder;
    SBCSCodec.prototype.decoder = SBCSDecoder;
    function SBCSEncoder(options, codec) {
      this.encodeBuf = codec.encodeBuf;
    }
    SBCSEncoder.prototype.write = function(str) {
      var buf = Buffer2.alloc(str.length);
      for (var i4 = 0; i4 < str.length; i4++) {
        buf[i4] = this.encodeBuf[str.charCodeAt(i4)];
      }
      return buf;
    };
    SBCSEncoder.prototype.end = function() {
    };
    function SBCSDecoder(options, codec) {
      this.decodeBuf = codec.decodeBuf;
    }
    SBCSDecoder.prototype.write = function(buf) {
      var decodeBuf = this.decodeBuf;
      var newBuf = Buffer2.alloc(buf.length * 2);
      var idx1 = 0;
      var idx2 = 0;
      for (var i4 = 0; i4 < buf.length; i4++) {
        idx1 = buf[i4] * 2;
        idx2 = i4 * 2;
        newBuf[idx2] = decodeBuf[idx1];
        newBuf[idx2 + 1] = decodeBuf[idx1 + 1];
      }
      return newBuf.toString("ucs2");
    };
    SBCSDecoder.prototype.end = function() {
    };
  }
});
var require_sbcs_data = __commonJS({
  "node_modules/iconv-lite/encodings/sbcs-data.js"(exports, module) {
    "use strict";
    module.exports = {
      // Not supported by iconv, not sure why.
      10029: "maccenteuro",
      maccenteuro: {
        type: "_sbcs",
        chars: "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
      },
      808: "cp808",
      ibm808: "cp808",
      cp808: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
      },
      mik: {
        type: "_sbcs",
        chars: "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      cp720: {
        type: "_sbcs",
        chars: "éâàçêëèïîّْô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡ًٌٍَُِ≈°∙·√ⁿ²■ "
      },
      // Aliases of generated encodings.
      ascii8bit: "ascii",
      usascii: "ascii",
      ansix34: "ascii",
      ansix341968: "ascii",
      ansix341986: "ascii",
      csascii: "ascii",
      cp367: "ascii",
      ibm367: "ascii",
      isoir6: "ascii",
      iso646us: "ascii",
      iso646irv: "ascii",
      us: "ascii",
      latin1: "iso88591",
      latin2: "iso88592",
      latin3: "iso88593",
      latin4: "iso88594",
      latin5: "iso88599",
      latin6: "iso885910",
      latin7: "iso885913",
      latin8: "iso885914",
      latin9: "iso885915",
      latin10: "iso885916",
      csisolatin1: "iso88591",
      csisolatin2: "iso88592",
      csisolatin3: "iso88593",
      csisolatin4: "iso88594",
      csisolatincyrillic: "iso88595",
      csisolatinarabic: "iso88596",
      csisolatingreek: "iso88597",
      csisolatinhebrew: "iso88598",
      csisolatin5: "iso88599",
      csisolatin6: "iso885910",
      l1: "iso88591",
      l2: "iso88592",
      l3: "iso88593",
      l4: "iso88594",
      l5: "iso88599",
      l6: "iso885910",
      l7: "iso885913",
      l8: "iso885914",
      l9: "iso885915",
      l10: "iso885916",
      isoir14: "iso646jp",
      isoir57: "iso646cn",
      isoir100: "iso88591",
      isoir101: "iso88592",
      isoir109: "iso88593",
      isoir110: "iso88594",
      isoir144: "iso88595",
      isoir127: "iso88596",
      isoir126: "iso88597",
      isoir138: "iso88598",
      isoir148: "iso88599",
      isoir157: "iso885910",
      isoir166: "tis620",
      isoir179: "iso885913",
      isoir199: "iso885914",
      isoir203: "iso885915",
      isoir226: "iso885916",
      cp819: "iso88591",
      ibm819: "iso88591",
      cyrillic: "iso88595",
      arabic: "iso88596",
      arabic8: "iso88596",
      ecma114: "iso88596",
      asmo708: "iso88596",
      greek: "iso88597",
      greek8: "iso88597",
      ecma118: "iso88597",
      elot928: "iso88597",
      hebrew: "iso88598",
      hebrew8: "iso88598",
      turkish: "iso88599",
      turkish8: "iso88599",
      thai: "iso885911",
      thai8: "iso885911",
      celtic: "iso885914",
      celtic8: "iso885914",
      isoceltic: "iso885914",
      tis6200: "tis620",
      tis62025291: "tis620",
      tis62025330: "tis620",
      1e4: "macroman",
      10006: "macgreek",
      10007: "maccyrillic",
      10079: "maciceland",
      10081: "macturkish",
      cspc8codepage437: "cp437",
      cspc775baltic: "cp775",
      cspc850multilingual: "cp850",
      cspcp852: "cp852",
      cspc862latinhebrew: "cp862",
      cpgr: "cp869",
      msee: "cp1250",
      mscyrl: "cp1251",
      msansi: "cp1252",
      msgreek: "cp1253",
      msturk: "cp1254",
      mshebr: "cp1255",
      msarab: "cp1256",
      winbaltrim: "cp1257",
      cp20866: "koi8r",
      20866: "koi8r",
      ibm878: "koi8r",
      cskoi8r: "koi8r",
      cp21866: "koi8u",
      21866: "koi8u",
      ibm1168: "koi8u",
      strk10482002: "rk1048",
      tcvn5712: "tcvn",
      tcvn57121: "tcvn",
      gb198880: "iso646cn",
      cn: "iso646cn",
      csiso14jisc6220ro: "iso646jp",
      jisc62201969ro: "iso646jp",
      jp: "iso646jp",
      cshproman8: "hproman8",
      r8: "hproman8",
      roman8: "hproman8",
      xroman8: "hproman8",
      ibm1051: "hproman8",
      mac: "macintosh",
      csmacintosh: "macintosh"
    };
  }
});
var require_sbcs_data_generated = __commonJS({
  "node_modules/iconv-lite/encodings/sbcs-data-generated.js"(exports, module) {
    "use strict";
    module.exports = {
      "437": "cp437",
      "737": "cp737",
      "775": "cp775",
      "850": "cp850",
      "852": "cp852",
      "855": "cp855",
      "856": "cp856",
      "857": "cp857",
      "858": "cp858",
      "860": "cp860",
      "861": "cp861",
      "862": "cp862",
      "863": "cp863",
      "864": "cp864",
      "865": "cp865",
      "866": "cp866",
      "869": "cp869",
      "874": "windows874",
      "922": "cp922",
      "1046": "cp1046",
      "1124": "cp1124",
      "1125": "cp1125",
      "1129": "cp1129",
      "1133": "cp1133",
      "1161": "cp1161",
      "1162": "cp1162",
      "1163": "cp1163",
      "1250": "windows1250",
      "1251": "windows1251",
      "1252": "windows1252",
      "1253": "windows1253",
      "1254": "windows1254",
      "1255": "windows1255",
      "1256": "windows1256",
      "1257": "windows1257",
      "1258": "windows1258",
      "28591": "iso88591",
      "28592": "iso88592",
      "28593": "iso88593",
      "28594": "iso88594",
      "28595": "iso88595",
      "28596": "iso88596",
      "28597": "iso88597",
      "28598": "iso88598",
      "28599": "iso88599",
      "28600": "iso885910",
      "28601": "iso885911",
      "28603": "iso885913",
      "28604": "iso885914",
      "28605": "iso885915",
      "28606": "iso885916",
      "windows874": {
        "type": "_sbcs",
        "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      },
      "win874": "windows874",
      "cp874": "windows874",
      "windows1250": {
        "type": "_sbcs",
        "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
      },
      "win1250": "windows1250",
      "cp1250": "windows1250",
      "windows1251": {
        "type": "_sbcs",
        "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
      },
      "win1251": "windows1251",
      "cp1251": "windows1251",
      "windows1252": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      "win1252": "windows1252",
      "cp1252": "windows1252",
      "windows1253": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
      },
      "win1253": "windows1253",
      "cp1253": "windows1253",
      "windows1254": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
      },
      "win1254": "windows1254",
      "cp1254": "windows1254",
      "windows1255": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
      },
      "win1255": "windows1255",
      "cp1255": "windows1255",
      "windows1256": {
        "type": "_sbcs",
        "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
      },
      "win1256": "windows1256",
      "cp1256": "windows1256",
      "windows1257": {
        "type": "_sbcs",
        "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
      },
      "win1257": "windows1257",
      "cp1257": "windows1257",
      "windows1258": {
        "type": "_sbcs",
        "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
      },
      "win1258": "windows1258",
      "cp1258": "windows1258",
      "iso88591": {
        "type": "_sbcs",
        "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      "cp28591": "iso88591",
      "iso88592": {
        "type": "_sbcs",
        "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
      },
      "cp28592": "iso88592",
      "iso88593": {
        "type": "_sbcs",
        "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
      },
      "cp28593": "iso88593",
      "iso88594": {
        "type": "_sbcs",
        "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
      },
      "cp28594": "iso88594",
      "iso88595": {
        "type": "_sbcs",
        "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
      },
      "cp28595": "iso88595",
      "iso88596": {
        "type": "_sbcs",
        "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
      },
      "cp28596": "iso88596",
      "iso88597": {
        "type": "_sbcs",
        "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
      },
      "cp28597": "iso88597",
      "iso88598": {
        "type": "_sbcs",
        "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
      },
      "cp28598": "iso88598",
      "iso88599": {
        "type": "_sbcs",
        "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
      },
      "cp28599": "iso88599",
      "iso885910": {
        "type": "_sbcs",
        "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
      },
      "cp28600": "iso885910",
      "iso885911": {
        "type": "_sbcs",
        "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      },
      "cp28601": "iso885911",
      "iso885913": {
        "type": "_sbcs",
        "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
      },
      "cp28603": "iso885913",
      "iso885914": {
        "type": "_sbcs",
        "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
      },
      "cp28604": "iso885914",
      "iso885915": {
        "type": "_sbcs",
        "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      "cp28605": "iso885915",
      "iso885916": {
        "type": "_sbcs",
        "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
      },
      "cp28606": "iso885916",
      "cp437": {
        "type": "_sbcs",
        "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      "ibm437": "cp437",
      "csibm437": "cp437",
      "cp737": {
        "type": "_sbcs",
        "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
      },
      "ibm737": "cp737",
      "csibm737": "cp737",
      "cp775": {
        "type": "_sbcs",
        "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
      },
      "ibm775": "cp775",
      "csibm775": "cp775",
      "cp850": {
        "type": "_sbcs",
        "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
      },
      "ibm850": "cp850",
      "csibm850": "cp850",
      "cp852": {
        "type": "_sbcs",
        "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
      },
      "ibm852": "cp852",
      "csibm852": "cp852",
      "cp855": {
        "type": "_sbcs",
        "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
      },
      "ibm855": "cp855",
      "csibm855": "cp855",
      "cp856": {
        "type": "_sbcs",
        "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
      },
      "ibm856": "cp856",
      "csibm856": "cp856",
      "cp857": {
        "type": "_sbcs",
        "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
      },
      "ibm857": "cp857",
      "csibm857": "cp857",
      "cp858": {
        "type": "_sbcs",
        "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
      },
      "ibm858": "cp858",
      "csibm858": "cp858",
      "cp860": {
        "type": "_sbcs",
        "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      "ibm860": "cp860",
      "csibm860": "cp860",
      "cp861": {
        "type": "_sbcs",
        "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      "ibm861": "cp861",
      "csibm861": "cp861",
      "cp862": {
        "type": "_sbcs",
        "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      "ibm862": "cp862",
      "csibm862": "cp862",
      "cp863": {
        "type": "_sbcs",
        "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      "ibm863": "cp863",
      "csibm863": "cp863",
      "cp864": {
        "type": "_sbcs",
        "chars": "\0\x07\b	\n\v\f\r\x1B !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
      },
      "ibm864": "cp864",
      "csibm864": "cp864",
      "cp865": {
        "type": "_sbcs",
        "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },
      "ibm865": "cp865",
      "csibm865": "cp865",
      "cp866": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
      },
      "ibm866": "cp866",
      "csibm866": "cp866",
      "cp869": {
        "type": "_sbcs",
        "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
      },
      "ibm869": "cp869",
      "csibm869": "cp869",
      "cp922": {
        "type": "_sbcs",
        "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
      },
      "ibm922": "cp922",
      "csibm922": "cp922",
      "cp1046": {
        "type": "_sbcs",
        "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
      },
      "ibm1046": "cp1046",
      "csibm1046": "cp1046",
      "cp1124": {
        "type": "_sbcs",
        "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
      },
      "ibm1124": "cp1124",
      "csibm1124": "cp1124",
      "cp1125": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
      },
      "ibm1125": "cp1125",
      "csibm1125": "cp1125",
      "cp1129": {
        "type": "_sbcs",
        "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
      },
      "ibm1129": "cp1129",
      "csibm1129": "cp1129",
      "cp1133": {
        "type": "_sbcs",
        "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
      },
      "ibm1133": "cp1133",
      "csibm1133": "cp1133",
      "cp1161": {
        "type": "_sbcs",
        "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
      },
      "ibm1161": "cp1161",
      "csibm1161": "cp1161",
      "cp1162": {
        "type": "_sbcs",
        "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      },
      "ibm1162": "cp1162",
      "csibm1162": "cp1162",
      "cp1163": {
        "type": "_sbcs",
        "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
      },
      "ibm1163": "cp1163",
      "csibm1163": "cp1163",
      "maccroatian": {
        "type": "_sbcs",
        "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
      },
      "maccyrillic": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
      },
      "macgreek": {
        "type": "_sbcs",
        "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
      },
      "maciceland": {
        "type": "_sbcs",
        "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      "macroman": {
        "type": "_sbcs",
        "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      "macromania": {
        "type": "_sbcs",
        "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      "macthai": {
        "type": "_sbcs",
        "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู\uFEFF​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
      },
      "macturkish": {
        "type": "_sbcs",
        "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
      },
      "macukraine": {
        "type": "_sbcs",
        "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
      },
      "koi8r": {
        "type": "_sbcs",
        "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      "koi8u": {
        "type": "_sbcs",
        "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      "koi8ru": {
        "type": "_sbcs",
        "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      "koi8t": {
        "type": "_sbcs",
        "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
      },
      "armscii8": {
        "type": "_sbcs",
        "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
      },
      "rk1048": {
        "type": "_sbcs",
        "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
      },
      "tcvn": {
        "type": "_sbcs",
        "chars": "\0ÚỤỪỬỮ\x07\b	\n\v\f\rỨỰỲỶỸÝỴ\x1B !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
      },
      "georgianacademy": {
        "type": "_sbcs",
        "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      "georgianps": {
        "type": "_sbcs",
        "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
      },
      "pt154": {
        "type": "_sbcs",
        "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
      },
      "viscii": {
        "type": "_sbcs",
        "chars": "\0ẲẴẪ\x07\b	\n\v\f\rỶỸ\x1BỴ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
      },
      "iso646cn": {
        "type": "_sbcs",
        "chars": "\0\x07\b	\n\v\f\r\x1B !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
      },
      "iso646jp": {
        "type": "_sbcs",
        "chars": "\0\x07\b	\n\v\f\r\x1B !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
      },
      "hproman8": {
        "type": "_sbcs",
        "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
      },
      "macintosh": {
        "type": "_sbcs",
        "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
      },
      "ascii": {
        "type": "_sbcs",
        "chars": "��������������������������������������������������������������������������������������������������������������������������������"
      },
      "tis620": {
        "type": "_sbcs",
        "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
      }
    };
  }
});
var require_dbcs_codec = __commonJS({
  "node_modules/iconv-lite/encodings/dbcs-codec.js"(exports) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    exports._dbcs = DBCSCodec;
    var UNASSIGNED = -1;
    var GB18030_CODE = -2;
    var SEQ_START = -10;
    var NODE_START = -1e3;
    var UNASSIGNED_NODE = new Array(256);
    var DEF_CHAR = -1;
    for (i4 = 0; i4 < 256; i4++) {
      UNASSIGNED_NODE[i4] = UNASSIGNED;
    }
    var i4;
    function DBCSCodec(codecOptions, iconv) {
      this.encodingName = codecOptions.encodingName;
      if (!codecOptions) {
        throw new Error("DBCS codec is called without the data.");
      }
      if (!codecOptions.table) {
        throw new Error("Encoding '" + this.encodingName + "' has no data.");
      }
      var mappingTable = codecOptions.table();
      this.decodeTables = [];
      this.decodeTables[0] = UNASSIGNED_NODE.slice(0);
      this.decodeTableSeq = [];
      for (var i22 = 0; i22 < mappingTable.length; i22++) {
        this._addDecodeChunk(mappingTable[i22]);
      }
      if (typeof codecOptions.gb18030 === "function") {
        this.gb18030 = codecOptions.gb18030();
        var commonThirdByteNodeIdx = this.decodeTables.length;
        this.decodeTables.push(UNASSIGNED_NODE.slice(0));
        var commonFourthByteNodeIdx = this.decodeTables.length;
        this.decodeTables.push(UNASSIGNED_NODE.slice(0));
        var firstByteNode = this.decodeTables[0];
        for (var i22 = 129; i22 <= 254; i22++) {
          var secondByteNode = this.decodeTables[NODE_START - firstByteNode[i22]];
          for (var j5 = 48; j5 <= 57; j5++) {
            if (secondByteNode[j5] === UNASSIGNED) {
              secondByteNode[j5] = NODE_START - commonThirdByteNodeIdx;
            } else if (secondByteNode[j5] > NODE_START) {
              throw new Error("gb18030 decode tables conflict at byte 2");
            }
            var thirdByteNode = this.decodeTables[NODE_START - secondByteNode[j5]];
            for (var k5 = 129; k5 <= 254; k5++) {
              if (thirdByteNode[k5] === UNASSIGNED) {
                thirdByteNode[k5] = NODE_START - commonFourthByteNodeIdx;
              } else if (thirdByteNode[k5] === NODE_START - commonFourthByteNodeIdx) {
                continue;
              } else if (thirdByteNode[k5] > NODE_START) {
                throw new Error("gb18030 decode tables conflict at byte 3");
              }
              var fourthByteNode = this.decodeTables[NODE_START - thirdByteNode[k5]];
              for (var l7 = 48; l7 <= 57; l7++) {
                if (fourthByteNode[l7] === UNASSIGNED) {
                  fourthByteNode[l7] = GB18030_CODE;
                }
              }
            }
          }
        }
      }
      this.defaultCharUnicode = iconv.defaultCharUnicode;
      this.encodeTable = [];
      this.encodeTableSeq = [];
      var skipEncodeChars = {};
      if (codecOptions.encodeSkipVals) {
        for (var i22 = 0; i22 < codecOptions.encodeSkipVals.length; i22++) {
          var val = codecOptions.encodeSkipVals[i22];
          if (typeof val === "number") {
            skipEncodeChars[val] = true;
          } else {
            for (var j5 = val.from; j5 <= val.to; j5++) {
              skipEncodeChars[j5] = true;
            }
          }
        }
      }
      this._fillEncodeTable(0, 0, skipEncodeChars);
      if (codecOptions.encodeAdd) {
        for (var uChar in codecOptions.encodeAdd) {
          if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar)) {
            this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
          }
        }
      }
      this.defCharSB = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
      if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]["?"];
      if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
    }
    DBCSCodec.prototype.encoder = DBCSEncoder;
    DBCSCodec.prototype.decoder = DBCSDecoder;
    DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
      var bytes = [];
      for (; addr > 0; addr >>>= 8) {
        bytes.push(addr & 255);
      }
      if (bytes.length == 0) {
        bytes.push(0);
      }
      var node = this.decodeTables[0];
      for (var i22 = bytes.length - 1; i22 > 0; i22--) {
        var val = node[bytes[i22]];
        if (val == UNASSIGNED) {
          node[bytes[i22]] = NODE_START - this.decodeTables.length;
          this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
        } else if (val <= NODE_START) {
          node = this.decodeTables[NODE_START - val];
        } else {
          throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
        }
      }
      return node;
    };
    DBCSCodec.prototype._addDecodeChunk = function(chunk) {
      var curAddr = parseInt(chunk[0], 16);
      var writeTable = this._getDecodeTrieNode(curAddr);
      curAddr = curAddr & 255;
      for (var k5 = 1; k5 < chunk.length; k5++) {
        var part = chunk[k5];
        if (typeof part === "string") {
          for (var l7 = 0; l7 < part.length; ) {
            var code = part.charCodeAt(l7++);
            if (code >= 55296 && code < 56320) {
              var codeTrail = part.charCodeAt(l7++);
              if (codeTrail >= 56320 && codeTrail < 57344) {
                writeTable[curAddr++] = 65536 + (code - 55296) * 1024 + (codeTrail - 56320);
              } else {
                throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + chunk[0]);
              }
            } else if (code > 4080 && code <= 4095) {
              var len = 4095 - code + 2;
              var seq = [];
              for (var m5 = 0; m5 < len; m5++) {
                seq.push(part.charCodeAt(l7++));
              }
              writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
              this.decodeTableSeq.push(seq);
            } else {
              writeTable[curAddr++] = code;
            }
          }
        } else if (typeof part === "number") {
          var charCode = writeTable[curAddr - 1] + 1;
          for (var l7 = 0; l7 < part; l7++) {
            writeTable[curAddr++] = charCode++;
          }
        } else {
          throw new Error("Incorrect type '" + typeof part + "' given in " + this.encodingName + " at chunk " + chunk[0]);
        }
      }
      if (curAddr > 255) {
        throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
      }
    };
    DBCSCodec.prototype._getEncodeBucket = function(uCode) {
      var high = uCode >> 8;
      if (this.encodeTable[high] === void 0) {
        this.encodeTable[high] = UNASSIGNED_NODE.slice(0);
      }
      return this.encodeTable[high];
    };
    DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
      var bucket = this._getEncodeBucket(uCode);
      var low = uCode & 255;
      if (bucket[low] <= SEQ_START) {
        this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode;
      } else if (bucket[low] == UNASSIGNED) {
        bucket[low] = dbcsCode;
      }
    };
    DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
      var uCode = seq[0];
      var bucket = this._getEncodeBucket(uCode);
      var low = uCode & 255;
      var node;
      if (bucket[low] <= SEQ_START) {
        node = this.encodeTableSeq[SEQ_START - bucket[low]];
      } else {
        node = {};
        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low];
        bucket[low] = SEQ_START - this.encodeTableSeq.length;
        this.encodeTableSeq.push(node);
      }
      for (var j5 = 1; j5 < seq.length - 1; j5++) {
        var oldVal = node[uCode];
        if (typeof oldVal === "object") {
          node = oldVal;
        } else {
          node = node[uCode] = {};
          if (oldVal !== void 0) {
            node[DEF_CHAR] = oldVal;
          }
        }
      }
      uCode = seq[seq.length - 1];
      node[uCode] = dbcsCode;
    };
    DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
      var node = this.decodeTables[nodeIdx];
      var hasValues = false;
      var subNodeEmpty = {};
      for (var i22 = 0; i22 < 256; i22++) {
        var uCode = node[i22];
        var mbCode = prefix + i22;
        if (skipEncodeChars[mbCode]) {
          continue;
        }
        if (uCode >= 0) {
          this._setEncodeChar(uCode, mbCode);
          hasValues = true;
        } else if (uCode <= NODE_START) {
          var subNodeIdx = NODE_START - uCode;
          if (!subNodeEmpty[subNodeIdx]) {
            var newPrefix = mbCode << 8 >>> 0;
            if (this._fillEncodeTable(subNodeIdx, newPrefix, skipEncodeChars)) {
              hasValues = true;
            } else {
              subNodeEmpty[subNodeIdx] = true;
            }
          }
        } else if (uCode <= SEQ_START) {
          this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
          hasValues = true;
        }
      }
      return hasValues;
    };
    function DBCSEncoder(options, codec) {
      this.leadSurrogate = -1;
      this.seqObj = void 0;
      this.encodeTable = codec.encodeTable;
      this.encodeTableSeq = codec.encodeTableSeq;
      this.defaultCharSingleByte = codec.defCharSB;
      this.gb18030 = codec.gb18030;
    }
    DBCSEncoder.prototype.write = function(str) {
      var newBuf = Buffer2.alloc(str.length * (this.gb18030 ? 4 : 3));
      var leadSurrogate = this.leadSurrogate;
      var seqObj = this.seqObj;
      var nextChar = -1;
      var i22 = 0;
      var j5 = 0;
      while (true) {
        if (nextChar === -1) {
          if (i22 == str.length) break;
          var uCode = str.charCodeAt(i22++);
        } else {
          var uCode = nextChar;
          nextChar = -1;
        }
        if (uCode >= 55296 && uCode < 57344) {
          if (uCode < 56320) {
            if (leadSurrogate === -1) {
              leadSurrogate = uCode;
              continue;
            } else {
              leadSurrogate = uCode;
              uCode = UNASSIGNED;
            }
          } else {
            if (leadSurrogate !== -1) {
              uCode = 65536 + (leadSurrogate - 55296) * 1024 + (uCode - 56320);
              leadSurrogate = -1;
            } else {
              uCode = UNASSIGNED;
            }
          }
        } else if (leadSurrogate !== -1) {
          nextChar = uCode;
          uCode = UNASSIGNED;
          leadSurrogate = -1;
        }
        var dbcsCode = UNASSIGNED;
        if (seqObj !== void 0 && uCode != UNASSIGNED) {
          var resCode = seqObj[uCode];
          if (typeof resCode === "object") {
            seqObj = resCode;
            continue;
          } else if (typeof resCode === "number") {
            dbcsCode = resCode;
          } else if (resCode == void 0) {
            resCode = seqObj[DEF_CHAR];
            if (resCode !== void 0) {
              dbcsCode = resCode;
              nextChar = uCode;
            } else {
            }
          }
          seqObj = void 0;
        } else if (uCode >= 0) {
          var subtable = this.encodeTable[uCode >> 8];
          if (subtable !== void 0) {
            dbcsCode = subtable[uCode & 255];
          }
          if (dbcsCode <= SEQ_START) {
            seqObj = this.encodeTableSeq[SEQ_START - dbcsCode];
            continue;
          }
          if (dbcsCode == UNASSIGNED && this.gb18030) {
            var idx = findIdx(this.gb18030.uChars, uCode);
            if (idx != -1) {
              var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
              newBuf[j5++] = 129 + Math.floor(dbcsCode / 12600);
              dbcsCode = dbcsCode % 12600;
              newBuf[j5++] = 48 + Math.floor(dbcsCode / 1260);
              dbcsCode = dbcsCode % 1260;
              newBuf[j5++] = 129 + Math.floor(dbcsCode / 10);
              dbcsCode = dbcsCode % 10;
              newBuf[j5++] = 48 + dbcsCode;
              continue;
            }
          }
        }
        if (dbcsCode === UNASSIGNED) {
          dbcsCode = this.defaultCharSingleByte;
        }
        if (dbcsCode < 256) {
          newBuf[j5++] = dbcsCode;
        } else if (dbcsCode < 65536) {
          newBuf[j5++] = dbcsCode >> 8;
          newBuf[j5++] = dbcsCode & 255;
        } else if (dbcsCode < 16777216) {
          newBuf[j5++] = dbcsCode >> 16;
          newBuf[j5++] = dbcsCode >> 8 & 255;
          newBuf[j5++] = dbcsCode & 255;
        } else {
          newBuf[j5++] = dbcsCode >>> 24;
          newBuf[j5++] = dbcsCode >>> 16 & 255;
          newBuf[j5++] = dbcsCode >>> 8 & 255;
          newBuf[j5++] = dbcsCode & 255;
        }
      }
      this.seqObj = seqObj;
      this.leadSurrogate = leadSurrogate;
      return newBuf.slice(0, j5);
    };
    DBCSEncoder.prototype.end = function() {
      if (this.leadSurrogate === -1 && this.seqObj === void 0) {
        return;
      }
      var newBuf = Buffer2.alloc(10);
      var j5 = 0;
      if (this.seqObj) {
        var dbcsCode = this.seqObj[DEF_CHAR];
        if (dbcsCode !== void 0) {
          if (dbcsCode < 256) {
            newBuf[j5++] = dbcsCode;
          } else {
            newBuf[j5++] = dbcsCode >> 8;
            newBuf[j5++] = dbcsCode & 255;
          }
        } else {
        }
        this.seqObj = void 0;
      }
      if (this.leadSurrogate !== -1) {
        newBuf[j5++] = this.defaultCharSingleByte;
        this.leadSurrogate = -1;
      }
      return newBuf.slice(0, j5);
    };
    DBCSEncoder.prototype.findIdx = findIdx;
    function DBCSDecoder(options, codec) {
      this.nodeIdx = 0;
      this.prevBytes = [];
      this.decodeTables = codec.decodeTables;
      this.decodeTableSeq = codec.decodeTableSeq;
      this.defaultCharUnicode = codec.defaultCharUnicode;
      this.gb18030 = codec.gb18030;
    }
    DBCSDecoder.prototype.write = function(buf) {
      var newBuf = Buffer2.alloc(buf.length * 2);
      var nodeIdx = this.nodeIdx;
      var prevBytes = this.prevBytes;
      var prevOffset = this.prevBytes.length;
      var seqStart = -this.prevBytes.length;
      var uCode;
      for (var i22 = 0, j5 = 0; i22 < buf.length; i22++) {
        var curByte = i22 >= 0 ? buf[i22] : prevBytes[i22 + prevOffset];
        var uCode = this.decodeTables[nodeIdx][curByte];
        if (uCode >= 0) {
        } else if (uCode === UNASSIGNED) {
          uCode = this.defaultCharUnicode.charCodeAt(0);
          i22 = seqStart;
        } else if (uCode === GB18030_CODE) {
          if (i22 >= 3) {
            var ptr = (buf[i22 - 3] - 129) * 12600 + (buf[i22 - 2] - 48) * 1260 + (buf[i22 - 1] - 129) * 10 + (curByte - 48);
          } else {
            var ptr = (prevBytes[i22 - 3 + prevOffset] - 129) * 12600 + ((i22 - 2 >= 0 ? buf[i22 - 2] : prevBytes[i22 - 2 + prevOffset]) - 48) * 1260 + ((i22 - 1 >= 0 ? buf[i22 - 1] : prevBytes[i22 - 1 + prevOffset]) - 129) * 10 + (curByte - 48);
          }
          var idx = findIdx(this.gb18030.gbChars, ptr);
          uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
        } else if (uCode <= NODE_START) {
          nodeIdx = NODE_START - uCode;
          continue;
        } else if (uCode <= SEQ_START) {
          var seq = this.decodeTableSeq[SEQ_START - uCode];
          for (var k5 = 0; k5 < seq.length - 1; k5++) {
            uCode = seq[k5];
            newBuf[j5++] = uCode & 255;
            newBuf[j5++] = uCode >> 8;
          }
          uCode = seq[seq.length - 1];
        } else {
          throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);
        }
        if (uCode >= 65536) {
          uCode -= 65536;
          var uCodeLead = 55296 | uCode >> 10;
          newBuf[j5++] = uCodeLead & 255;
          newBuf[j5++] = uCodeLead >> 8;
          uCode = 56320 | uCode & 1023;
        }
        newBuf[j5++] = uCode & 255;
        newBuf[j5++] = uCode >> 8;
        nodeIdx = 0;
        seqStart = i22 + 1;
      }
      this.nodeIdx = nodeIdx;
      this.prevBytes = seqStart >= 0 ? Array.prototype.slice.call(buf, seqStart) : prevBytes.slice(seqStart + prevOffset).concat(Array.prototype.slice.call(buf));
      return newBuf.slice(0, j5).toString("ucs2");
    };
    DBCSDecoder.prototype.end = function() {
      var ret = "";
      while (this.prevBytes.length > 0) {
        ret += this.defaultCharUnicode;
        var bytesArr = this.prevBytes.slice(1);
        this.prevBytes = [];
        this.nodeIdx = 0;
        if (bytesArr.length > 0) {
          ret += this.write(bytesArr);
        }
      }
      this.prevBytes = [];
      this.nodeIdx = 0;
      return ret;
    };
    function findIdx(table, val) {
      if (table[0] > val) {
        return -1;
      }
      var l7 = 0;
      var r3 = table.length;
      while (l7 < r3 - 1) {
        var mid = l7 + (r3 - l7 + 1 >> 1);
        if (table[mid] <= val) {
          l7 = mid;
        } else {
          r3 = mid;
        }
      }
      return l7;
    }
  }
});
var require_shiftjis = __commonJS({
  "node_modules/iconv-lite/encodings/tables/shiftjis.json"(exports, module) {
    module.exports = [
      ["0", "\0", 128],
      ["a1", "｡", 62],
      ["8140", "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈", 9, "＋－±×"],
      ["8180", "÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"],
      ["81b8", "∈∋⊆⊇⊂⊃∪∩"],
      ["81c8", "∧∨￢⇒⇔∀∃"],
      ["81da", "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],
      ["81f0", "Å‰♯♭♪†‡¶"],
      ["81fc", "◯"],
      ["824f", "０", 9],
      ["8260", "Ａ", 25],
      ["8281", "ａ", 25],
      ["829f", "ぁ", 82],
      ["8340", "ァ", 62],
      ["8380", "ム", 22],
      ["839f", "Α", 16, "Σ", 6],
      ["83bf", "α", 16, "σ", 6],
      ["8440", "А", 5, "ЁЖ", 25],
      ["8470", "а", 5, "ёж", 7],
      ["8480", "о", 17],
      ["849f", "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],
      ["8740", "①", 19, "Ⅰ", 9],
      ["875f", "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],
      ["877e", "㍻"],
      ["8780", "〝〟№㏍℡㊤", 4, "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],
      ["889f", "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],
      ["8940", "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"],
      ["8980", "園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],
      ["8a40", "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"],
      ["8a80", "橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],
      ["8b40", "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"],
      ["8b80", "朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],
      ["8c40", "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"],
      ["8c80", "劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],
      ["8d40", "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"],
      ["8d80", "項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],
      ["8e40", "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"],
      ["8e80", "死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],
      ["8f40", "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"],
      ["8f80", "準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],
      ["9040", "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"],
      ["9080", "逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],
      ["9140", "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"],
      ["9180", "操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],
      ["9240", "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"],
      ["9280", "逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],
      ["9340", "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"],
      ["9380", "凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],
      ["9440", "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"],
      ["9480", "楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],
      ["9540", "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"],
      ["9580", "斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],
      ["9640", "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"],
      ["9680", "摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],
      ["9740", "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"],
      ["9780", "沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],
      ["9840", "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],
      ["989f", "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],
      ["9940", "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"],
      ["9980", "凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],
      ["9a40", "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"],
      ["9a80", "噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],
      ["9b40", "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"],
      ["9b80", "它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],
      ["9c40", "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"],
      ["9c80", "怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],
      ["9d40", "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"],
      ["9d80", "捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],
      ["9e40", "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"],
      ["9e80", "梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],
      ["9f40", "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"],
      ["9f80", "麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],
      ["e040", "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"],
      ["e080", "烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],
      ["e140", "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"],
      ["e180", "痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],
      ["e240", "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"],
      ["e280", "窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],
      ["e340", "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"],
      ["e380", "縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],
      ["e440", "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"],
      ["e480", "艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],
      ["e540", "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"],
      ["e580", "蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],
      ["e640", "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"],
      ["e680", "諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],
      ["e740", "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"],
      ["e780", "轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],
      ["e840", "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"],
      ["e880", "閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],
      ["e940", "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"],
      ["e980", "騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],
      ["ea40", "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"],
      ["ea80", "黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"],
      ["ed40", "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"],
      ["ed80", "塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],
      ["ee40", "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"],
      ["ee80", "蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],
      ["eeef", "ⅰ", 9, "￢￤＇＂"],
      ["f040", "", 62],
      ["f080", "", 124],
      ["f140", "", 62],
      ["f180", "", 124],
      ["f240", "", 62],
      ["f280", "", 124],
      ["f340", "", 62],
      ["f380", "", 124],
      ["f440", "", 62],
      ["f480", "", 124],
      ["f540", "", 62],
      ["f580", "", 124],
      ["f640", "", 62],
      ["f680", "", 124],
      ["f740", "", 62],
      ["f780", "", 124],
      ["f840", "", 62],
      ["f880", "", 124],
      ["f940", ""],
      ["fa40", "ⅰ", 9, "Ⅰ", 9, "￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"],
      ["fa80", "兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"],
      ["fb40", "涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"],
      ["fb80", "祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"],
      ["fc40", "髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"]
    ];
  }
});
var require_eucjp = __commonJS({
  "node_modules/iconv-lite/encodings/tables/eucjp.json"(exports, module) {
    module.exports = [
      ["0", "\0", 127],
      ["8ea1", "｡", 62],
      ["a1a1", "　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈", 9, "＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"],
      ["a2a1", "◆□■△▲▽▼※〒→←↑↓〓"],
      ["a2ba", "∈∋⊆⊇⊂⊃∪∩"],
      ["a2ca", "∧∨￢⇒⇔∀∃"],
      ["a2dc", "∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"],
      ["a2f2", "Å‰♯♭♪†‡¶"],
      ["a2fe", "◯"],
      ["a3b0", "０", 9],
      ["a3c1", "Ａ", 25],
      ["a3e1", "ａ", 25],
      ["a4a1", "ぁ", 82],
      ["a5a1", "ァ", 85],
      ["a6a1", "Α", 16, "Σ", 6],
      ["a6c1", "α", 16, "σ", 6],
      ["a7a1", "А", 5, "ЁЖ", 25],
      ["a7d1", "а", 5, "ёж", 25],
      ["a8a1", "─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"],
      ["ada1", "①", 19, "Ⅰ", 9],
      ["adc0", "㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"],
      ["addf", "㍻〝〟№㏍℡㊤", 4, "㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"],
      ["b0a1", "亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"],
      ["b1a1", "院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"],
      ["b2a1", "押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"],
      ["b3a1", "魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"],
      ["b4a1", "粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"],
      ["b5a1", "機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"],
      ["b6a1", "供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"],
      ["b7a1", "掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"],
      ["b8a1", "検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"],
      ["b9a1", "后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"],
      ["baa1", "此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"],
      ["bba1", "察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"],
      ["bca1", "次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"],
      ["bda1", "宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"],
      ["bea1", "勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"],
      ["bfa1", "拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"],
      ["c0a1", "澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"],
      ["c1a1", "繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"],
      ["c2a1", "臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"],
      ["c3a1", "叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"],
      ["c4a1", "帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"],
      ["c5a1", "邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"],
      ["c6a1", "董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"],
      ["c7a1", "如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"],
      ["c8a1", "函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"],
      ["c9a1", "鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"],
      ["caa1", "福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"],
      ["cba1", "法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"],
      ["cca1", "漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"],
      ["cda1", "諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"],
      ["cea1", "痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"],
      ["cfa1", "蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"],
      ["d0a1", "弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"],
      ["d1a1", "僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"],
      ["d2a1", "辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"],
      ["d3a1", "咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"],
      ["d4a1", "圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"],
      ["d5a1", "奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"],
      ["d6a1", "屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"],
      ["d7a1", "廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"],
      ["d8a1", "悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"],
      ["d9a1", "戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"],
      ["daa1", "據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"],
      ["dba1", "曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"],
      ["dca1", "棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"],
      ["dda1", "檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"],
      ["dea1", "沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"],
      ["dfa1", "漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"],
      ["e0a1", "燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"],
      ["e1a1", "瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"],
      ["e2a1", "癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"],
      ["e3a1", "磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"],
      ["e4a1", "筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"],
      ["e5a1", "紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"],
      ["e6a1", "罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"],
      ["e7a1", "隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"],
      ["e8a1", "茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"],
      ["e9a1", "蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"],
      ["eaa1", "蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"],
      ["eba1", "襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"],
      ["eca1", "譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"],
      ["eda1", "蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"],
      ["eea1", "遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"],
      ["efa1", "錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"],
      ["f0a1", "陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"],
      ["f1a1", "顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"],
      ["f2a1", "髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"],
      ["f3a1", "鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"],
      ["f4a1", "堯槇遙瑤凜熙"],
      ["f9a1", "纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"],
      ["faa1", "忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"],
      ["fba1", "犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"],
      ["fca1", "釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"],
      ["fcf1", "ⅰ", 9, "￢￤＇＂"],
      ["8fa2af", "˘ˇ¸˙˝¯˛˚～΄΅"],
      ["8fa2c2", "¡¦¿"],
      ["8fa2eb", "ºª©®™¤№"],
      ["8fa6e1", "ΆΈΉΊΪ"],
      ["8fa6e7", "Ό"],
      ["8fa6e9", "ΎΫ"],
      ["8fa6ec", "Ώ"],
      ["8fa6f1", "άέήίϊΐόςύϋΰώ"],
      ["8fa7c2", "Ђ", 10, "ЎЏ"],
      ["8fa7f2", "ђ", 10, "ўџ"],
      ["8fa9a1", "ÆĐ"],
      ["8fa9a4", "Ħ"],
      ["8fa9a6", "Ĳ"],
      ["8fa9a8", "ŁĿ"],
      ["8fa9ab", "ŊØŒ"],
      ["8fa9af", "ŦÞ"],
      ["8fa9c1", "æđðħıĳĸłŀŉŋøœßŧþ"],
      ["8faaa1", "ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"],
      ["8faaba", "ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"],
      ["8faba1", "áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"],
      ["8fabbd", "ġĥíìïîǐ"],
      ["8fabc5", "īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"],
      ["8fb0a1", "丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"],
      ["8fb1a1", "侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"],
      ["8fb2a1", "傒傓傔傖傛傜傞", 4, "傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"],
      ["8fb3a1", "凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"],
      ["8fb4a1", "匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"],
      ["8fb5a1", "咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"],
      ["8fb6a1", "嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍", 5, "嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤", 4, "囱囫园"],
      ["8fb7a1", "囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭", 4, "坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"],
      ["8fb8a1", "堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"],
      ["8fb9a1", "奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"],
      ["8fbaa1", "嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖", 4, "寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"],
      ["8fbba1", "屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"],
      ["8fbca1", "巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪", 4, "幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"],
      ["8fbda1", "彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐", 4, "忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"],
      ["8fbea1", "悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐", 4, "愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"],
      ["8fbfa1", "懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"],
      ["8fc0a1", "捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"],
      ["8fc1a1", "擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"],
      ["8fc2a1", "昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"],
      ["8fc3a1", "杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮", 4, "桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"],
      ["8fc4a1", "棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"],
      ["8fc5a1", "樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"],
      ["8fc6a1", "歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"],
      ["8fc7a1", "泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"],
      ["8fc8a1", "湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"],
      ["8fc9a1", "濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔", 4, "炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃", 4, "焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"],
      ["8fcaa1", "煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"],
      ["8fcba1", "狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"],
      ["8fcca1", "珿琀琁琄琇琊琑琚琛琤琦琨", 9, "琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"],
      ["8fcda1", "甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹", 5, "疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"],
      ["8fcea1", "瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢", 6, "皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"],
      ["8fcfa1", "睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"],
      ["8fd0a1", "碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"],
      ["8fd1a1", "秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"],
      ["8fd2a1", "笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙", 5],
      ["8fd3a1", "籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"],
      ["8fd4a1", "綞綦綧綪綳綶綷綹緂", 4, "緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"],
      ["8fd5a1", "罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"],
      ["8fd6a1", "胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"],
      ["8fd7a1", "艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"],
      ["8fd8a1", "荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"],
      ["8fd9a1", "蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏", 4, "蕖蕙蕜", 6, "蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"],
      ["8fdaa1", "藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠", 4, "虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"],
      ["8fdba1", "蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃", 6, "螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"],
      ["8fdca1", "蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊", 4, "裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"],
      ["8fdda1", "襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔", 4, "觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"],
      ["8fdea1", "誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂", 4, "譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"],
      ["8fdfa1", "貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"],
      ["8fe0a1", "踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"],
      ["8fe1a1", "轃轇轏轑", 4, "轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"],
      ["8fe2a1", "郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"],
      ["8fe3a1", "釂釃釅釓釔釗釙釚釞釤釥釩釪釬", 5, "釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵", 4, "鉻鉼鉽鉿銈銉銊銍銎銒銗"],
      ["8fe4a1", "銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿", 4, "鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"],
      ["8fe5a1", "鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉", 4, "鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"],
      ["8fe6a1", "镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"],
      ["8fe7a1", "霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"],
      ["8fe8a1", "頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱", 4, "餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"],
      ["8fe9a1", "馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿", 4],
      ["8feaa1", "鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪", 4, "魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"],
      ["8feba1", "鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦", 4, "鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"],
      ["8feca1", "鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"],
      ["8feda1", "黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃", 4, "齓齕齖齗齘齚齝齞齨齩齭", 4, "齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"]
    ];
  }
});
var require_cp936 = __commonJS({
  "node_modules/iconv-lite/encodings/tables/cp936.json"(exports, module) {
    module.exports = [
      ["0", "\0", 127, "€"],
      ["8140", "丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪", 5, "乲乴", 9, "乿", 6, "亇亊"],
      ["8180", "亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂", 6, "伋伌伒", 4, "伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾", 4, "佄佅佇", 5, "佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"],
      ["8240", "侤侫侭侰", 4, "侶", 8, "俀俁係俆俇俈俉俋俌俍俒", 4, "俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿", 11],
      ["8280", "個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯", 10, "倻倽倿偀偁偂偄偅偆偉偊偋偍偐", 4, "偖偗偘偙偛偝", 7, "偦", 5, "偭", 8, "偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎", 20, "傤傦傪傫傭", 4, "傳", 6, "傼"],
      ["8340", "傽", 17, "僐", 5, "僗僘僙僛", 10, "僨僩僪僫僯僰僱僲僴僶", 4, "僼", 9, "儈"],
      ["8380", "儉儊儌", 5, "儓", 13, "儢", 28, "兂兇兊兌兎兏児兒兓兗兘兙兛兝", 4, "兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦", 4, "冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒", 5],
      ["8440", "凘凙凚凜凞凟凢凣凥", 5, "凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄", 5, "剋剎剏剒剓剕剗剘"],
      ["8480", "剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳", 9, "剾劀劃", 4, "劉", 6, "劑劒劔", 6, "劜劤劥劦劧劮劯劰労", 9, "勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務", 5, "勠勡勢勣勥", 10, "勱", 7, "勻勼勽匁匂匃匄匇匉匊匋匌匎"],
      ["8540", "匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯", 9, "匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"],
      ["8580", "厐", 4, "厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯", 6, "厷厸厹厺厼厽厾叀參", 4, "収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝", 4, "呣呥呧呩", 7, "呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"],
      ["8640", "咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠", 4, "哫哬哯哰哱哴", 5, "哻哾唀唂唃唄唅唈唊", 4, "唒唓唕", 5, "唜唝唞唟唡唥唦"],
      ["8680", "唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋", 4, "啑啒啓啔啗", 4, "啝啞啟啠啢啣啨啩啫啯", 5, "啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠", 6, "喨", 8, "喲喴営喸喺喼喿", 4, "嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗", 4, "嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸", 4, "嗿嘂嘃嘄嘅"],
      ["8740", "嘆嘇嘊嘋嘍嘐", 7, "嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀", 11, "噏", 4, "噕噖噚噛噝", 4],
      ["8780", "噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽", 7, "嚇", 6, "嚐嚑嚒嚔", 14, "嚤", 10, "嚰", 6, "嚸嚹嚺嚻嚽", 12, "囋", 8, "囕囖囘囙囜団囥", 5, "囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國", 6],
      ["8840", "園", 9, "圝圞圠圡圢圤圥圦圧圫圱圲圴", 4, "圼圽圿坁坃坄坅坆坈坉坋坒", 4, "坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"],
      ["8880", "垁垇垈垉垊垍", 4, "垔", 6, "垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹", 8, "埄", 6, "埌埍埐埑埓埖埗埛埜埞埡埢埣埥", 7, "埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥", 4, "堫", 4, "報堲堳場堶", 7],
      ["8940", "堾", 5, "塅", 6, "塎塏塐塒塓塕塖塗塙", 4, "塟", 5, "塦", 4, "塭", 16, "塿墂墄墆墇墈墊墋墌"],
      ["8980", "墍", 4, "墔", 4, "墛墜墝墠", 7, "墪", 17, "墽墾墿壀壂壃壄壆", 10, "壒壓壔壖", 13, "壥", 5, "壭壯壱売壴壵壷壸壺", 7, "夃夅夆夈", 4, "夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"],
      ["8a40", "夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛", 4, "奡奣奤奦", 12, "奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"],
      ["8a80", "妧妬妭妰妱妳", 5, "妺妼妽妿", 6, "姇姈姉姌姍姎姏姕姖姙姛姞", 4, "姤姦姧姩姪姫姭", 11, "姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪", 6, "娳娵娷", 4, "娽娾娿婁", 4, "婇婈婋", 9, "婖婗婘婙婛", 5],
      ["8b40", "婡婣婤婥婦婨婩婫", 8, "婸婹婻婼婽婾媀", 17, "媓", 6, "媜", 13, "媫媬"],
      ["8b80", "媭", 4, "媴媶媷媹", 4, "媿嫀嫃", 5, "嫊嫋嫍", 4, "嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬", 4, "嫲", 22, "嬊", 11, "嬘", 25, "嬳嬵嬶嬸", 7, "孁", 6],
      ["8c40", "孈", 7, "孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"],
      ["8c80", "寑寔", 8, "寠寢寣實寧審", 4, "寯寱", 6, "寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧", 6, "屰屲", 6, "屻屼屽屾岀岃", 4, "岉岊岋岎岏岒岓岕岝", 4, "岤", 4],
      ["8d40", "岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅", 5, "峌", 5, "峓", 5, "峚", 6, "峢峣峧峩峫峬峮峯峱", 9, "峼", 4],
      ["8d80", "崁崄崅崈", 5, "崏", 4, "崕崗崘崙崚崜崝崟", 4, "崥崨崪崫崬崯", 4, "崵", 7, "崿", 7, "嵈嵉嵍", 10, "嵙嵚嵜嵞", 10, "嵪嵭嵮嵰嵱嵲嵳嵵", 12, "嶃", 21, "嶚嶛嶜嶞嶟嶠"],
      ["8e40", "嶡", 21, "嶸", 12, "巆", 6, "巎", 12, "巜巟巠巣巤巪巬巭"],
      ["8e80", "巰巵巶巸", 4, "巿帀帄帇帉帊帋帍帎帒帓帗帞", 7, "帨", 4, "帯帰帲", 4, "帹帺帾帿幀幁幃幆", 5, "幍", 6, "幖", 4, "幜幝幟幠幣", 14, "幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨", 4, "庮", 4, "庴庺庻庼庽庿", 6],
      ["8f40", "廆廇廈廋", 5, "廔廕廗廘廙廚廜", 11, "廩廫", 8, "廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"],
      ["8f80", "弨弫弬弮弰弲", 6, "弻弽弾弿彁", 14, "彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢", 5, "復徫徬徯", 5, "徶徸徹徺徻徾", 4, "忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"],
      ["9040", "怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰", 4, "怶", 4, "怽怾恀恄", 6, "恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"],
      ["9080", "悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽", 7, "惇惈惉惌", 4, "惒惓惔惖惗惙惛惞惡", 4, "惪惱惲惵惷惸惻", 4, "愂愃愄愅愇愊愋愌愐", 4, "愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬", 18, "慀", 6],
      ["9140", "慇慉態慍慏慐慒慓慔慖", 6, "慞慟慠慡慣慤慥慦慩", 6, "慱慲慳慴慶慸", 18, "憌憍憏", 4, "憕"],
      ["9180", "憖", 6, "憞", 8, "憪憫憭", 9, "憸", 5, "憿懀懁懃", 4, "應懌", 4, "懓懕", 16, "懧", 13, "懶", 8, "戀", 5, "戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸", 4, "扂扄扅扆扊"],
      ["9240", "扏扐払扖扗扙扚扜", 6, "扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋", 5, "抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"],
      ["9280", "拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳", 5, "挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖", 7, "捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙", 6, "採掤掦掫掯掱掲掵掶掹掻掽掿揀"],
      ["9340", "揁揂揃揅揇揈揊揋揌揑揓揔揕揗", 6, "揟揢揤", 4, "揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆", 4, "損搎搑搒搕", 5, "搝搟搢搣搤"],
      ["9380", "搥搧搨搩搫搮", 5, "搵", 4, "搻搼搾摀摂摃摉摋", 6, "摓摕摖摗摙", 4, "摟", 7, "摨摪摫摬摮", 9, "摻", 6, "撃撆撈", 8, "撓撔撗撘撚撛撜撝撟", 4, "撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆", 6, "擏擑擓擔擕擖擙據"],
      ["9440", "擛擜擝擟擠擡擣擥擧", 24, "攁", 7, "攊", 7, "攓", 4, "攙", 8],
      ["9480", "攢攣攤攦", 4, "攬攭攰攱攲攳攷攺攼攽敀", 4, "敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數", 14, "斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱", 7, "斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘", 7, "旡旣旤旪旫"],
      ["9540", "旲旳旴旵旸旹旻", 4, "昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷", 4, "昽昿晀時晄", 6, "晍晎晐晑晘"],
      ["9580", "晙晛晜晝晞晠晢晣晥晧晩", 4, "晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘", 4, "暞", 8, "暩", 4, "暯", 4, "暵暶暷暸暺暻暼暽暿", 25, "曚曞", 7, "曧曨曪", 5, "曱曵曶書曺曻曽朁朂會"],
      ["9640", "朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠", 5, "朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗", 4, "杝杢杣杤杦杧杫杬杮東杴杶"],
      ["9680", "杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹", 7, "柂柅", 9, "柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵", 7, "柾栁栂栃栄栆栍栐栒栔栕栘", 4, "栞栟栠栢", 6, "栫", 6, "栴栵栶栺栻栿桇桋桍桏桒桖", 5],
      ["9740", "桜桝桞桟桪桬", 7, "桵桸", 8, "梂梄梇", 7, "梐梑梒梔梕梖梘", 9, "梣梤梥梩梪梫梬梮梱梲梴梶梷梸"],
      ["9780", "梹", 6, "棁棃", 5, "棊棌棎棏棐棑棓棔棖棗棙棛", 4, "棡棢棤", 9, "棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆", 4, "椌椏椑椓", 11, "椡椢椣椥", 7, "椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃", 16, "楕楖楘楙楛楜楟"],
      ["9840", "楡楢楤楥楧楨楩楪楬業楯楰楲", 4, "楺楻楽楾楿榁榃榅榊榋榌榎", 5, "榖榗榙榚榝", 9, "榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"],
      ["9880", "榾榿槀槂", 7, "構槍槏槑槒槓槕", 5, "槜槝槞槡", 11, "槮槯槰槱槳", 9, "槾樀", 9, "樋", 11, "標", 5, "樠樢", 5, "権樫樬樭樮樰樲樳樴樶", 6, "樿", 4, "橅橆橈", 7, "橑", 6, "橚"],
      ["9940", "橜", 4, "橢橣橤橦", 10, "橲", 6, "橺橻橽橾橿檁檂檃檅", 8, "檏檒", 4, "檘", 7, "檡", 5],
      ["9980", "檧檨檪檭", 114, "欥欦欨", 6],
      ["9a40", "欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍", 11, "歚", 7, "歨歩歫", 13, "歺歽歾歿殀殅殈"],
      ["9a80", "殌殎殏殐殑殔殕殗殘殙殜", 4, "殢", 7, "殫", 7, "殶殸", 6, "毀毃毄毆", 4, "毌毎毐毑毘毚毜", 4, "毢", 7, "毬毭毮毰毱毲毴毶毷毸毺毻毼毾", 6, "氈", 4, "氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋", 4, "汑汒汓汖汘"],
      ["9b40", "汙汚汢汣汥汦汧汫", 4, "汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"],
      ["9b80", "泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟", 5, "洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽", 4, "涃涄涆涇涊涋涍涏涐涒涖", 4, "涜涢涥涬涭涰涱涳涴涶涷涹", 5, "淁淂淃淈淉淊"],
      ["9c40", "淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽", 7, "渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"],
      ["9c80", "渶渷渹渻", 7, "湅", 7, "湏湐湑湒湕湗湙湚湜湝湞湠", 10, "湬湭湯", 14, "満溁溂溄溇溈溊", 4, "溑", 6, "溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪", 5],
      ["9d40", "滰滱滲滳滵滶滷滸滺", 7, "漃漄漅漇漈漊", 4, "漐漑漒漖", 9, "漡漢漣漥漦漧漨漬漮漰漲漴漵漷", 6, "漿潀潁潂"],
      ["9d80", "潃潄潅潈潉潊潌潎", 9, "潙潚潛潝潟潠潡潣潤潥潧", 5, "潯潰潱潳潵潶潷潹潻潽", 6, "澅澆澇澊澋澏", 12, "澝澞澟澠澢", 4, "澨", 10, "澴澵澷澸澺", 5, "濁濃", 5, "濊", 6, "濓", 10, "濟濢濣濤濥"],
      ["9e40", "濦", 7, "濰", 32, "瀒", 7, "瀜", 6, "瀤", 6],
      ["9e80", "瀫", 9, "瀶瀷瀸瀺", 17, "灍灎灐", 13, "灟", 11, "灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞", 12, "炰炲炴炵炶為炾炿烄烅烆烇烉烋", 12, "烚"],
      ["9f40", "烜烝烞烠烡烢烣烥烪烮烰", 6, "烸烺烻烼烾", 10, "焋", 4, "焑焒焔焗焛", 10, "焧", 7, "焲焳焴"],
      ["9f80", "焵焷", 13, "煆煇煈煉煋煍煏", 12, "煝煟", 4, "煥煩", 4, "煯煰煱煴煵煶煷煹煻煼煾", 5, "熅", 4, "熋熌熍熎熐熑熒熓熕熖熗熚", 4, "熡", 6, "熩熪熫熭", 5, "熴熶熷熸熺", 8, "燄", 9, "燏", 4],
      ["a040", "燖", 9, "燡燢燣燤燦燨", 5, "燯", 9, "燺", 11, "爇", 19],
      ["a080", "爛爜爞", 9, "爩爫爭爮爯爲爳爴爺爼爾牀", 6, "牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅", 4, "犌犎犐犑犓", 11, "犠", 11, "犮犱犲犳犵犺", 6, "狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"],
      ["a1a1", "　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈", 7, "〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"],
      ["a2a1", "ⅰ", 9],
      ["a2b1", "⒈", 19, "⑴", 19, "①", 9],
      ["a2e5", "㈠", 9],
      ["a2f1", "Ⅰ", 11],
      ["a3a1", "！＂＃￥％", 88, "￣"],
      ["a4a1", "ぁ", 82],
      ["a5a1", "ァ", 85],
      ["a6a1", "Α", 16, "Σ", 6],
      ["a6c1", "α", 16, "σ", 6],
      ["a6e0", "︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"],
      ["a6ee", "︻︼︷︸︱"],
      ["a6f4", "︳︴"],
      ["a7a1", "А", 5, "ЁЖ", 25],
      ["a7d1", "а", 5, "ёж", 25],
      ["a840", "ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═", 35, "▁", 6],
      ["a880", "█", 7, "▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"],
      ["a8a1", "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"],
      ["a8bd", "ńň"],
      ["a8c0", "ɡ"],
      ["a8c5", "ㄅ", 36],
      ["a940", "〡", 8, "㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"],
      ["a959", "℡㈱"],
      ["a95c", "‐"],
      ["a960", "ー゛゜ヽヾ〆ゝゞ﹉", 9, "﹔﹕﹖﹗﹙", 8],
      ["a980", "﹢", 4, "﹨﹩﹪﹫"],
      ["a996", "〇"],
      ["a9a4", "─", 75],
      ["aa40", "狜狝狟狢", 5, "狪狫狵狶狹狽狾狿猀猂猄", 5, "猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀", 8],
      ["aa80", "獉獊獋獌獎獏獑獓獔獕獖獘", 7, "獡", 10, "獮獰獱"],
      ["ab40", "獲", 11, "獿", 4, "玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣", 5, "玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃", 4],
      ["ab80", "珋珌珎珒", 6, "珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳", 4],
      ["ac40", "珸", 10, "琄琇琈琋琌琍琎琑", 8, "琜", 5, "琣琤琧琩琫琭琯琱琲琷", 4, "琽琾琿瑀瑂", 11],
      ["ac80", "瑎", 6, "瑖瑘瑝瑠", 12, "瑮瑯瑱", 4, "瑸瑹瑺"],
      ["ad40", "瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑", 10, "璝璟", 7, "璪", 15, "璻", 12],
      ["ad80", "瓈", 9, "瓓", 8, "瓝瓟瓡瓥瓧", 6, "瓰瓱瓲"],
      ["ae40", "瓳瓵瓸", 6, "甀甁甂甃甅", 7, "甎甐甒甔甕甖甗甛甝甞甠", 4, "甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"],
      ["ae80", "畝", 7, "畧畨畩畫", 6, "畳畵當畷畺", 4, "疀疁疂疄疅疇"],
      ["af40", "疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦", 4, "疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"],
      ["af80", "瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"],
      ["b040", "癅", 6, "癎", 5, "癕癗", 4, "癝癟癠癡癢癤", 6, "癬癭癮癰", 7, "癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"],
      ["b080", "皜", 7, "皥", 8, "皯皰皳皵", 9, "盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"],
      ["b140", "盄盇盉盋盌盓盕盙盚盜盝盞盠", 4, "盦", 7, "盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎", 10, "眛眜眝眞眡眣眤眥眧眪眫"],
      ["b180", "眬眮眰", 4, "眹眻眽眾眿睂睄睅睆睈", 7, "睒", 7, "睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"],
      ["b240", "睝睞睟睠睤睧睩睪睭", 11, "睺睻睼瞁瞂瞃瞆", 5, "瞏瞐瞓", 11, "瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶", 4],
      ["b280", "瞼瞾矀", 12, "矎", 8, "矘矙矚矝", 4, "矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"],
      ["b340", "矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃", 5, "砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"],
      ["b380", "硛硜硞", 11, "硯", 7, "硸硹硺硻硽", 6, "场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"],
      ["b440", "碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨", 7, "碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚", 9],
      ["b480", "磤磥磦磧磩磪磫磭", 4, "磳磵磶磸磹磻", 5, "礂礃礄礆", 6, "础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"],
      ["b540", "礍", 5, "礔", 9, "礟", 4, "礥", 14, "礵", 4, "礽礿祂祃祄祅祇祊", 8, "祔祕祘祙祡祣"],
      ["b580", "祤祦祩祪祫祬祮祰", 6, "祹祻", 4, "禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"],
      ["b640", "禓", 6, "禛", 11, "禨", 10, "禴", 4, "禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙", 5, "秠秡秢秥秨秪"],
      ["b680", "秬秮秱", 6, "秹秺秼秾秿稁稄稅稇稈稉稊稌稏", 4, "稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"],
      ["b740", "稝稟稡稢稤", 14, "稴稵稶稸稺稾穀", 5, "穇", 9, "穒", 4, "穘", 16],
      ["b780", "穩", 6, "穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"],
      ["b840", "窣窤窧窩窪窫窮", 4, "窴", 10, "竀", 10, "竌", 9, "竗竘竚竛竜竝竡竢竤竧", 5, "竮竰竱竲竳"],
      ["b880", "竴", 4, "竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"],
      ["b940", "笯笰笲笴笵笶笷笹笻笽笿", 5, "筆筈筊筍筎筓筕筗筙筜筞筟筡筣", 10, "筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆", 6, "箎箏"],
      ["b980", "箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹", 7, "篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"],
      ["ba40", "篅篈築篊篋篍篎篏篐篒篔", 4, "篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲", 4, "篸篹篺篻篽篿", 7, "簈簉簊簍簎簐", 5, "簗簘簙"],
      ["ba80", "簚", 4, "簠", 5, "簨簩簫", 12, "簹", 5, "籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"],
      ["bb40", "籃", 9, "籎", 36, "籵", 5, "籾", 9],
      ["bb80", "粈粊", 6, "粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴", 4, "粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"],
      ["bc40", "粿糀糂糃糄糆糉糋糎", 6, "糘糚糛糝糞糡", 6, "糩", 5, "糰", 7, "糹糺糼", 13, "紋", 5],
      ["bc80", "紑", 14, "紡紣紤紥紦紨紩紪紬紭紮細", 6, "肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"],
      ["bd40", "紷", 54, "絯", 7],
      ["bd80", "絸", 32, "健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"],
      ["be40", "継", 12, "綧", 6, "綯", 42],
      ["be80", "線", 32, "尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"],
      ["bf40", "緻", 62],
      ["bf80", "縺縼", 4, "繂", 4, "繈", 21, "俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"],
      ["c040", "繞", 35, "纃", 23, "纜纝纞"],
      ["c080", "纮纴纻纼绖绤绬绹缊缐缞缷缹缻", 6, "罃罆", 9, "罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"],
      ["c140", "罖罙罛罜罝罞罠罣", 4, "罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂", 7, "羋羍羏", 4, "羕", 4, "羛羜羠羢羣羥羦羨", 6, "羱"],
      ["c180", "羳", 4, "羺羻羾翀翂翃翄翆翇翈翉翋翍翏", 4, "翖翗翙", 5, "翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"],
      ["c240", "翤翧翨翪翫翬翭翯翲翴", 6, "翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫", 5, "耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"],
      ["c280", "聙聛", 13, "聫", 5, "聲", 11, "隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"],
      ["c340", "聾肁肂肅肈肊肍", 5, "肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇", 4, "胏", 6, "胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"],
      ["c380", "脌脕脗脙脛脜脝脟", 12, "脭脮脰脳脴脵脷脹", 4, "脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"],
      ["c440", "腀", 5, "腇腉腍腎腏腒腖腗腘腛", 4, "腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃", 4, "膉膋膌膍膎膐膒", 5, "膙膚膞", 4, "膤膥"],
      ["c480", "膧膩膫", 7, "膴", 5, "膼膽膾膿臄臅臇臈臉臋臍", 6, "摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"],
      ["c540", "臔", 14, "臤臥臦臨臩臫臮", 4, "臵", 5, "臽臿舃與", 4, "舎舏舑舓舕", 5, "舝舠舤舥舦舧舩舮舲舺舼舽舿"],
      ["c580", "艀艁艂艃艅艆艈艊艌艍艎艐", 7, "艙艛艜艝艞艠", 7, "艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"],
      ["c640", "艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"],
      ["c680", "苺苼", 4, "茊茋茍茐茒茓茖茘茙茝", 9, "茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"],
      ["c740", "茾茿荁荂荄荅荈荊", 4, "荓荕", 4, "荝荢荰", 6, "荹荺荾", 6, "莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡", 6, "莬莭莮"],
      ["c780", "莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"],
      ["c840", "菮華菳", 4, "菺菻菼菾菿萀萂萅萇萈萉萊萐萒", 5, "萙萚萛萞", 5, "萩", 7, "萲", 5, "萹萺萻萾", 7, "葇葈葉"],
      ["c880", "葊", 6, "葒", 4, "葘葝葞葟葠葢葤", 4, "葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"],
      ["c940", "葽", 4, "蒃蒄蒅蒆蒊蒍蒏", 7, "蒘蒚蒛蒝蒞蒟蒠蒢", 12, "蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"],
      ["c980", "蓘", 4, "蓞蓡蓢蓤蓧", 4, "蓭蓮蓯蓱", 10, "蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"],
      ["ca40", "蔃", 8, "蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢", 8, "蔭", 9, "蔾", 4, "蕄蕅蕆蕇蕋", 10],
      ["ca80", "蕗蕘蕚蕛蕜蕝蕟", 4, "蕥蕦蕧蕩", 8, "蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"],
      ["cb40", "薂薃薆薈", 6, "薐", 10, "薝", 6, "薥薦薧薩薫薬薭薱", 5, "薸薺", 6, "藂", 6, "藊", 4, "藑藒"],
      ["cb80", "藔藖", 5, "藝", 6, "藥藦藧藨藪", 14, "恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"],
      ["cc40", "藹藺藼藽藾蘀", 4, "蘆", 10, "蘒蘓蘔蘕蘗", 15, "蘨蘪", 13, "蘹蘺蘻蘽蘾蘿虀"],
      ["cc80", "虁", 11, "虒虓處", 4, "虛虜虝號虠虡虣", 7, "獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"],
      ["cd40", "虭虯虰虲", 6, "蚃", 6, "蚎", 4, "蚔蚖", 5, "蚞", 4, "蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻", 4, "蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"],
      ["cd80", "蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"],
      ["ce40", "蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀", 6, "蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚", 5, "蝡蝢蝦", 7, "蝯蝱蝲蝳蝵"],
      ["ce80", "蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎", 4, "螔螕螖螘", 6, "螠", 4, "巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"],
      ["cf40", "螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁", 4, "蟇蟈蟉蟌", 4, "蟔", 6, "蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯", 9],
      ["cf80", "蟺蟻蟼蟽蟿蠀蠁蠂蠄", 5, "蠋", 7, "蠔蠗蠘蠙蠚蠜", 4, "蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"],
      ["d040", "蠤", 13, "蠳", 5, "蠺蠻蠽蠾蠿衁衂衃衆", 5, "衎", 5, "衕衖衘衚", 6, "衦衧衪衭衯衱衳衴衵衶衸衹衺"],
      ["d080", "衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗", 4, "袝", 4, "袣袥", 5, "小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"],
      ["d140", "袬袮袯袰袲", 4, "袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚", 4, "裠裡裦裧裩", 6, "裲裵裶裷裺裻製裿褀褁褃", 5],
      ["d180", "褉褋", 4, "褑褔", 4, "褜", 4, "褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"],
      ["d240", "褸", 8, "襂襃襅", 24, "襠", 5, "襧", 19, "襼"],
      ["d280", "襽襾覀覂覄覅覇", 26, "摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"],
      ["d340", "覢", 30, "觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴", 6],
      ["d380", "觻", 4, "訁", 5, "計", 21, "印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"],
      ["d440", "訞", 31, "訿", 8, "詉", 21],
      ["d480", "詟", 25, "詺", 6, "浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"],
      ["d540", "誁", 7, "誋", 7, "誔", 46],
      ["d580", "諃", 32, "铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"],
      ["d640", "諤", 34, "謈", 27],
      ["d680", "謤謥謧", 30, "帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"],
      ["d740", "譆", 31, "譧", 4, "譭", 25],
      ["d780", "讇", 24, "讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"],
      ["d840", "谸", 8, "豂豃豄豅豈豊豋豍", 7, "豖豗豘豙豛", 5, "豣", 6, "豬", 6, "豴豵豶豷豻", 6, "貃貄貆貇"],
      ["d880", "貈貋貍", 6, "貕貖貗貙", 20, "亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"],
      ["d940", "貮", 62],
      ["d980", "賭", 32, "佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"],
      ["da40", "贎", 14, "贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸", 8, "趂趃趆趇趈趉趌", 4, "趒趓趕", 9, "趠趡"],
      ["da80", "趢趤", 12, "趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"],
      ["db40", "跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾", 6, "踆踇踈踋踍踎踐踑踒踓踕", 7, "踠踡踤", 4, "踫踭踰踲踳踴踶踷踸踻踼踾"],
      ["db80", "踿蹃蹅蹆蹌", 4, "蹓", 5, "蹚", 11, "蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"],
      ["dc40", "蹳蹵蹷", 4, "蹽蹾躀躂躃躄躆躈", 6, "躑躒躓躕", 6, "躝躟", 11, "躭躮躰躱躳", 6, "躻", 7],
      ["dc80", "軃", 10, "軏", 21, "堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"],
      ["dd40", "軥", 62],
      ["dd80", "輤", 32, "荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"],
      ["de40", "轅", 32, "轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"],
      ["de80", "迉", 4, "迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"],
      ["df40", "這逜連逤逥逧", 5, "逰", 4, "逷逹逺逽逿遀遃遅遆遈", 4, "過達違遖遙遚遜", 5, "遤遦遧適遪遫遬遯", 4, "遶", 6, "遾邁"],
      ["df80", "還邅邆邇邉邊邌", 4, "邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"],
      ["e040", "郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅", 19, "鄚鄛鄜"],
      ["e080", "鄝鄟鄠鄡鄤", 10, "鄰鄲", 6, "鄺", 8, "酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"],
      ["e140", "酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀", 4, "醆醈醊醎醏醓", 6, "醜", 5, "醤", 5, "醫醬醰醱醲醳醶醷醸醹醻"],
      ["e180", "醼", 10, "釈釋釐釒", 9, "針", 8, "帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"],
      ["e240", "釦", 62],
      ["e280", "鈥", 32, "狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧", 5, "饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"],
      ["e340", "鉆", 45, "鉵", 16],
      ["e380", "銆", 7, "銏", 24, "恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"],
      ["e440", "銨", 5, "銯", 24, "鋉", 31],
      ["e480", "鋩", 32, "洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"],
      ["e540", "錊", 51, "錿", 10],
      ["e580", "鍊", 31, "鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"],
      ["e640", "鍬", 34, "鎐", 27],
      ["e680", "鎬", 29, "鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"],
      ["e740", "鏎", 7, "鏗", 54],
      ["e780", "鐎", 32, "纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡", 6, "缪缫缬缭缯", 4, "缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"],
      ["e840", "鐯", 14, "鐿", 43, "鑬鑭鑮鑯"],
      ["e880", "鑰", 20, "钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"],
      ["e940", "锧锳锽镃镈镋镕镚镠镮镴镵長", 7, "門", 42],
      ["e980", "閫", 32, "椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"],
      ["ea40", "闌", 27, "闬闿阇阓阘阛阞阠阣", 6, "阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"],
      ["ea80", "陘陙陚陜陝陞陠陣陥陦陫陭", 4, "陳陸", 12, "隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"],
      ["eb40", "隌階隑隒隓隕隖隚際隝", 9, "隨", 7, "隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖", 9, "雡", 6, "雫"],
      ["eb80", "雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗", 4, "霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"],
      ["ec40", "霡", 8, "霫霬霮霯霱霳", 4, "霺霻霼霽霿", 18, "靔靕靗靘靚靜靝靟靣靤靦靧靨靪", 7],
      ["ec80", "靲靵靷", 4, "靽", 7, "鞆", 4, "鞌鞎鞏鞐鞓鞕鞖鞗鞙", 4, "臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"],
      ["ed40", "鞞鞟鞡鞢鞤", 6, "鞬鞮鞰鞱鞳鞵", 46],
      ["ed80", "韤韥韨韮", 4, "韴韷", 23, "怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"],
      ["ee40", "頏", 62],
      ["ee80", "顎", 32, "睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶", 4, "钼钽钿铄铈", 6, "铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"],
      ["ef40", "顯", 5, "颋颎颒颕颙颣風", 37, "飏飐飔飖飗飛飜飝飠", 4],
      ["ef80", "飥飦飩", 30, "铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒", 4, "锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤", 8, "镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"],
      ["f040", "餈", 4, "餎餏餑", 28, "餯", 26],
      ["f080", "饊", 9, "饖", 12, "饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨", 4, "鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦", 6, "鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"],
      ["f140", "馌馎馚", 10, "馦馧馩", 47],
      ["f180", "駙", 32, "瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"],
      ["f240", "駺", 62],
      ["f280", "騹", 32, "颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"],
      ["f340", "驚", 17, "驲骃骉骍骎骔骕骙骦骩", 6, "骲骳骴骵骹骻骽骾骿髃髄髆", 4, "髍髎髏髐髒體髕髖髗髙髚髛髜"],
      ["f380", "髝髞髠髢髣髤髥髧髨髩髪髬髮髰", 8, "髺髼", 6, "鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"],
      ["f440", "鬇鬉", 5, "鬐鬑鬒鬔", 10, "鬠鬡鬢鬤", 10, "鬰鬱鬳", 7, "鬽鬾鬿魀魆魊魋魌魎魐魒魓魕", 5],
      ["f480", "魛", 32, "簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"],
      ["f540", "魼", 62],
      ["f580", "鮻", 32, "酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"],
      ["f640", "鯜", 62],
      ["f680", "鰛", 32, "觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅", 5, "龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞", 5, "鲥", 4, "鲫鲭鲮鲰", 7, "鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"],
      ["f740", "鰼", 62],
      ["f780", "鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾", 4, "鳈鳉鳑鳒鳚鳛鳠鳡鳌", 4, "鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"],
      ["f840", "鳣", 62],
      ["f880", "鴢", 32],
      ["f940", "鵃", 62],
      ["f980", "鶂", 32],
      ["fa40", "鶣", 62],
      ["fa80", "鷢", 32],
      ["fb40", "鸃", 27, "鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴", 9, "麀"],
      ["fb80", "麁麃麄麅麆麉麊麌", 5, "麔", 8, "麞麠", 5, "麧麨麩麪"],
      ["fc40", "麫", 8, "麵麶麷麹麺麼麿", 4, "黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰", 8, "黺黽黿", 6],
      ["fc80", "鼆", 4, "鼌鼏鼑鼒鼔鼕鼖鼘鼚", 5, "鼡鼣", 8, "鼭鼮鼰鼱"],
      ["fd40", "鼲", 4, "鼸鼺鼼鼿", 4, "齅", 10, "齒", 38],
      ["fd80", "齹", 5, "龁龂龍", 11, "龜龝龞龡", 4, "郎凉秊裏隣"],
      ["fe40", "兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"]
    ];
  }
});
var require_gbk_added = __commonJS({
  "node_modules/iconv-lite/encodings/tables/gbk-added.json"(exports, module) {
    module.exports = [
      ["a140", "", 62],
      ["a180", "", 32],
      ["a240", "", 62],
      ["a280", "", 32],
      ["a2ab", "", 5],
      ["a2e3", "€"],
      ["a2ef", ""],
      ["a2fd", ""],
      ["a340", "", 62],
      ["a380", "", 31, "　"],
      ["a440", "", 62],
      ["a480", "", 32],
      ["a4f4", "", 10],
      ["a540", "", 62],
      ["a580", "", 32],
      ["a5f7", "", 7],
      ["a640", "", 62],
      ["a680", "", 32],
      ["a6b9", "", 7],
      ["a6d9", "", 6],
      ["a6ec", ""],
      ["a6f3", ""],
      ["a6f6", "", 8],
      ["a740", "", 62],
      ["a780", "", 32],
      ["a7c2", "", 14],
      ["a7f2", "", 12],
      ["a896", "", 10],
      ["a8bc", "ḿ"],
      ["a8bf", "ǹ"],
      ["a8c1", ""],
      ["a8ea", "", 20],
      ["a958", ""],
      ["a95b", ""],
      ["a95d", ""],
      ["a989", "〾⿰", 11],
      ["a997", "", 12],
      ["a9f0", "", 14],
      ["aaa1", "", 93],
      ["aba1", "", 93],
      ["aca1", "", 93],
      ["ada1", "", 93],
      ["aea1", "", 93],
      ["afa1", "", 93],
      ["d7fa", "", 4],
      ["f8a1", "", 93],
      ["f9a1", "", 93],
      ["faa1", "", 93],
      ["fba1", "", 93],
      ["fca1", "", 93],
      ["fda1", "", 93],
      ["fe50", "⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"],
      ["fe80", "䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓", 6, "䶮", 93],
      ["8135f437", ""]
    ];
  }
});
var require_gb18030_ranges = __commonJS({
  "node_modules/iconv-lite/encodings/tables/gb18030-ranges.json"(exports, module) {
    module.exports = { uChars: [128, 165, 169, 178, 184, 216, 226, 235, 238, 244, 248, 251, 253, 258, 276, 284, 300, 325, 329, 334, 364, 463, 465, 467, 469, 471, 473, 475, 477, 506, 594, 610, 712, 716, 730, 930, 938, 962, 970, 1026, 1104, 1106, 8209, 8215, 8218, 8222, 8231, 8241, 8244, 8246, 8252, 8365, 8452, 8454, 8458, 8471, 8482, 8556, 8570, 8596, 8602, 8713, 8720, 8722, 8726, 8731, 8737, 8740, 8742, 8748, 8751, 8760, 8766, 8777, 8781, 8787, 8802, 8808, 8816, 8854, 8858, 8870, 8896, 8979, 9322, 9372, 9548, 9588, 9616, 9622, 9634, 9652, 9662, 9672, 9676, 9680, 9702, 9735, 9738, 9793, 9795, 11906, 11909, 11913, 11917, 11928, 11944, 11947, 11951, 11956, 11960, 11964, 11979, 12284, 12292, 12312, 12319, 12330, 12351, 12436, 12447, 12535, 12543, 12586, 12842, 12850, 12964, 13200, 13215, 13218, 13253, 13263, 13267, 13270, 13384, 13428, 13727, 13839, 13851, 14617, 14703, 14801, 14816, 14964, 15183, 15471, 15585, 16471, 16736, 17208, 17325, 17330, 17374, 17623, 17997, 18018, 18212, 18218, 18301, 18318, 18760, 18811, 18814, 18820, 18823, 18844, 18848, 18872, 19576, 19620, 19738, 19887, 40870, 59244, 59336, 59367, 59413, 59417, 59423, 59431, 59437, 59443, 59452, 59460, 59478, 59493, 63789, 63866, 63894, 63976, 63986, 64016, 64018, 64021, 64025, 64034, 64037, 64042, 65074, 65093, 65107, 65112, 65127, 65132, 65375, 65510, 65536], gbChars: [0, 36, 38, 45, 50, 81, 89, 95, 96, 100, 103, 104, 105, 109, 126, 133, 148, 172, 175, 179, 208, 306, 307, 308, 309, 310, 311, 312, 313, 341, 428, 443, 544, 545, 558, 741, 742, 749, 750, 805, 819, 820, 7922, 7924, 7925, 7927, 7934, 7943, 7944, 7945, 7950, 8062, 8148, 8149, 8152, 8164, 8174, 8236, 8240, 8262, 8264, 8374, 8380, 8381, 8384, 8388, 8390, 8392, 8393, 8394, 8396, 8401, 8406, 8416, 8419, 8424, 8437, 8439, 8445, 8482, 8485, 8496, 8521, 8603, 8936, 8946, 9046, 9050, 9063, 9066, 9076, 9092, 9100, 9108, 9111, 9113, 9131, 9162, 9164, 9218, 9219, 11329, 11331, 11334, 11336, 11346, 11361, 11363, 11366, 11370, 11372, 11375, 11389, 11682, 11686, 11687, 11692, 11694, 11714, 11716, 11723, 11725, 11730, 11736, 11982, 11989, 12102, 12336, 12348, 12350, 12384, 12393, 12395, 12397, 12510, 12553, 12851, 12962, 12973, 13738, 13823, 13919, 13933, 14080, 14298, 14585, 14698, 15583, 15847, 16318, 16434, 16438, 16481, 16729, 17102, 17122, 17315, 17320, 17402, 17418, 17859, 17909, 17911, 17915, 17916, 17936, 17939, 17961, 18664, 18703, 18814, 18962, 19043, 33469, 33470, 33471, 33484, 33485, 33490, 33497, 33501, 33505, 33513, 33520, 33536, 33550, 37845, 37921, 37948, 38029, 38038, 38064, 38065, 38066, 38069, 38075, 38076, 38078, 39108, 39109, 39113, 39114, 39115, 39116, 39265, 39394, 189e3] };
  }
});
var require_cp949 = __commonJS({
  "node_modules/iconv-lite/encodings/tables/cp949.json"(exports, module) {
    module.exports = [
      ["0", "\0", 127],
      ["8141", "갂갃갅갆갋", 4, "갘갞갟갡갢갣갥", 6, "갮갲갳갴"],
      ["8161", "갵갶갷갺갻갽갾갿걁", 9, "걌걎", 5, "걕"],
      ["8181", "걖걗걙걚걛걝", 18, "걲걳걵걶걹걻", 4, "겂겇겈겍겎겏겑겒겓겕", 6, "겞겢", 5, "겫겭겮겱", 6, "겺겾겿곀곂곃곅곆곇곉곊곋곍", 7, "곖곘", 7, "곢곣곥곦곩곫곭곮곲곴곷", 4, "곾곿괁괂괃괅괇", 4, "괎괐괒괓"],
      ["8241", "괔괕괖괗괙괚괛괝괞괟괡", 7, "괪괫괮", 5],
      ["8261", "괶괷괹괺괻괽", 6, "굆굈굊", 5, "굑굒굓굕굖굗"],
      ["8281", "굙", 7, "굢굤", 7, "굮굯굱굲굷굸굹굺굾궀궃", 4, "궊궋궍궎궏궑", 10, "궞", 5, "궥", 17, "궸", 7, "귂귃귅귆귇귉", 6, "귒귔", 7, "귝귞귟귡귢귣귥", 18],
      ["8341", "귺귻귽귾긂", 5, "긊긌긎", 5, "긕", 7],
      ["8361", "긝", 18, "긲긳긵긶긹긻긼"],
      ["8381", "긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗", 4, "깞깢깣깤깦깧깪깫깭깮깯깱", 6, "깺깾", 5, "꺆", 5, "꺍", 46, "꺿껁껂껃껅", 6, "껎껒", 5, "껚껛껝", 8],
      ["8441", "껦껧껩껪껬껮", 5, "껵껶껷껹껺껻껽", 8],
      ["8461", "꼆꼉꼊꼋꼌꼎꼏꼑", 18],
      ["8481", "꼤", 7, "꼮꼯꼱꼳꼵", 6, "꼾꽀꽄꽅꽆꽇꽊", 5, "꽑", 10, "꽞", 5, "꽦", 18, "꽺", 5, "꾁꾂꾃꾅꾆꾇꾉", 6, "꾒꾓꾔꾖", 5, "꾝", 26, "꾺꾻꾽꾾"],
      ["8541", "꾿꿁", 5, "꿊꿌꿏", 4, "꿕", 6, "꿝", 4],
      ["8561", "꿢", 5, "꿪", 5, "꿲꿳꿵꿶꿷꿹", 6, "뀂뀃"],
      ["8581", "뀅", 6, "뀍뀎뀏뀑뀒뀓뀕", 6, "뀞", 9, "뀩", 26, "끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞", 29, "끾끿낁낂낃낅", 6, "낎낐낒", 5, "낛낝낞낣낤"],
      ["8641", "낥낦낧낪낰낲낶낷낹낺낻낽", 6, "냆냊", 5, "냒"],
      ["8661", "냓냕냖냗냙", 6, "냡냢냣냤냦", 10],
      ["8681", "냱", 22, "넊넍넎넏넑넔넕넖넗넚넞", 4, "넦넧넩넪넫넭", 6, "넶넺", 5, "녂녃녅녆녇녉", 6, "녒녓녖녗녙녚녛녝녞녟녡", 22, "녺녻녽녾녿놁놃", 4, "놊놌놎놏놐놑놕놖놗놙놚놛놝"],
      ["8741", "놞", 9, "놩", 15],
      ["8761", "놹", 18, "뇍뇎뇏뇑뇒뇓뇕"],
      ["8781", "뇖", 5, "뇞뇠", 7, "뇪뇫뇭뇮뇯뇱", 7, "뇺뇼뇾", 5, "눆눇눉눊눍", 6, "눖눘눚", 5, "눡", 18, "눵", 6, "눽", 26, "뉙뉚뉛뉝뉞뉟뉡", 6, "뉪", 4],
      ["8841", "뉯", 4, "뉶", 5, "뉽", 6, "늆늇늈늊", 4],
      ["8861", "늏늒늓늕늖늗늛", 4, "늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"],
      ["8881", "늸", 15, "닊닋닍닎닏닑닓", 4, "닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉", 6, "댒댖", 5, "댝", 54, "덗덙덚덝덠덡덢덣"],
      ["8941", "덦덨덪덬덭덯덲덳덵덶덷덹", 6, "뎂뎆", 5, "뎍"],
      ["8961", "뎎뎏뎑뎒뎓뎕", 10, "뎢", 5, "뎩뎪뎫뎭"],
      ["8981", "뎮", 21, "돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩", 18, "돽", 18, "됑", 6, "됙됚됛됝됞됟됡", 6, "됪됬", 7, "됵", 15],
      ["8a41", "둅", 10, "둒둓둕둖둗둙", 6, "둢둤둦"],
      ["8a61", "둧", 4, "둭", 18, "뒁뒂"],
      ["8a81", "뒃", 4, "뒉", 19, "뒞", 5, "뒥뒦뒧뒩뒪뒫뒭", 7, "뒶뒸뒺", 5, "듁듂듃듅듆듇듉", 6, "듑듒듓듔듖", 5, "듞듟듡듢듥듧", 4, "듮듰듲", 5, "듹", 26, "딖딗딙딚딝"],
      ["8b41", "딞", 5, "딦딫", 4, "딲딳딵딶딷딹", 6, "땂땆"],
      ["8b61", "땇땈땉땊땎땏땑땒땓땕", 6, "땞땢", 8],
      ["8b81", "땫", 52, "떢떣떥떦떧떩떬떭떮떯떲떶", 4, "떾떿뗁뗂뗃뗅", 6, "뗎뗒", 5, "뗙", 18, "뗭", 18],
      ["8c41", "똀", 15, "똒똓똕똖똗똙", 4],
      ["8c61", "똞", 6, "똦", 5, "똭", 6, "똵", 5],
      ["8c81", "똻", 12, "뙉", 26, "뙥뙦뙧뙩", 50, "뚞뚟뚡뚢뚣뚥", 5, "뚭뚮뚯뚰뚲", 16],
      ["8d41", "뛃", 16, "뛕", 8],
      ["8d61", "뛞", 17, "뛱뛲뛳뛵뛶뛷뛹뛺"],
      ["8d81", "뛻", 4, "뜂뜃뜄뜆", 33, "뜪뜫뜭뜮뜱", 6, "뜺뜼", 7, "띅띆띇띉띊띋띍", 6, "띖", 9, "띡띢띣띥띦띧띩", 6, "띲띴띶", 5, "띾띿랁랂랃랅", 6, "랎랓랔랕랚랛랝랞"],
      ["8e41", "랟랡", 6, "랪랮", 5, "랶랷랹", 8],
      ["8e61", "럂", 4, "럈럊", 19],
      ["8e81", "럞", 13, "럮럯럱럲럳럵", 6, "럾렂", 4, "렊렋렍렎렏렑", 6, "렚렜렞", 5, "렦렧렩렪렫렭", 6, "렶렺", 5, "롁롂롃롅", 11, "롒롔", 7, "롞롟롡롢롣롥", 6, "롮롰롲", 5, "롹롺롻롽", 7],
      ["8f41", "뢅", 7, "뢎", 17],
      ["8f61", "뢠", 7, "뢩", 6, "뢱뢲뢳뢵뢶뢷뢹", 4],
      ["8f81", "뢾뢿룂룄룆", 5, "룍룎룏룑룒룓룕", 7, "룞룠룢", 5, "룪룫룭룮룯룱", 6, "룺룼룾", 5, "뤅", 18, "뤙", 6, "뤡", 26, "뤾뤿륁륂륃륅", 6, "륍륎륐륒", 5],
      ["9041", "륚륛륝륞륟륡", 6, "륪륬륮", 5, "륶륷륹륺륻륽"],
      ["9061", "륾", 5, "릆릈릋릌릏", 15],
      ["9081", "릟", 12, "릮릯릱릲릳릵", 6, "릾맀맂", 5, "맊맋맍맓", 4, "맚맜맟맠맢맦맧맩맪맫맭", 6, "맶맻", 4, "먂", 5, "먉", 11, "먖", 33, "먺먻먽먾먿멁멃멄멅멆"],
      ["9141", "멇멊멌멏멐멑멒멖멗멙멚멛멝", 6, "멦멪", 5],
      ["9161", "멲멳멵멶멷멹", 9, "몆몈몉몊몋몍", 5],
      ["9181", "몓", 20, "몪몭몮몯몱몳", 4, "몺몼몾", 5, "뫅뫆뫇뫉", 14, "뫚", 33, "뫽뫾뫿묁묂묃묅", 7, "묎묐묒", 5, "묙묚묛묝묞묟묡", 6],
      ["9241", "묨묪묬", 7, "묷묹묺묿", 4, "뭆뭈뭊뭋뭌뭎뭑뭒"],
      ["9261", "뭓뭕뭖뭗뭙", 7, "뭢뭤", 7, "뭭", 4],
      ["9281", "뭲", 21, "뮉뮊뮋뮍뮎뮏뮑", 18, "뮥뮦뮧뮩뮪뮫뮭", 6, "뮵뮶뮸", 7, "믁믂믃믅믆믇믉", 6, "믑믒믔", 35, "믺믻믽믾밁"],
      ["9341", "밃", 4, "밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"],
      ["9361", "밶밷밹", 6, "뱂뱆뱇뱈뱊뱋뱎뱏뱑", 8],
      ["9381", "뱚뱛뱜뱞", 37, "벆벇벉벊벍벏", 4, "벖벘벛", 4, "벢벣벥벦벩", 6, "벲벶", 5, "벾벿볁볂볃볅", 7, "볎볒볓볔볖볗볙볚볛볝", 22, "볷볹볺볻볽"],
      ["9441", "볾", 5, "봆봈봊", 5, "봑봒봓봕", 8],
      ["9461", "봞", 5, "봥", 6, "봭", 12],
      ["9481", "봺", 5, "뵁", 6, "뵊뵋뵍뵎뵏뵑", 6, "뵚", 9, "뵥뵦뵧뵩", 22, "붂붃붅붆붋", 4, "붒붔붖붗붘붛붝", 6, "붥", 10, "붱", 6, "붹", 24],
      ["9541", "뷒뷓뷖뷗뷙뷚뷛뷝", 11, "뷪", 5, "뷱"],
      ["9561", "뷲뷳뷵뷶뷷뷹", 6, "븁븂븄븆", 5, "븎븏븑븒븓"],
      ["9581", "븕", 6, "븞븠", 35, "빆빇빉빊빋빍빏", 4, "빖빘빜빝빞빟빢빣빥빦빧빩빫", 4, "빲빶", 4, "빾빿뺁뺂뺃뺅", 6, "뺎뺒", 5, "뺚", 13, "뺩", 14],
      ["9641", "뺸", 23, "뻒뻓"],
      ["9661", "뻕뻖뻙", 6, "뻡뻢뻦", 5, "뻭", 8],
      ["9681", "뻶", 10, "뼂", 5, "뼊", 13, "뼚뼞", 33, "뽂뽃뽅뽆뽇뽉", 6, "뽒뽓뽔뽖", 44],
      ["9741", "뾃", 16, "뾕", 8],
      ["9761", "뾞", 17, "뾱", 7],
      ["9781", "뾹", 11, "뿆", 5, "뿎뿏뿑뿒뿓뿕", 6, "뿝뿞뿠뿢", 89, "쀽쀾쀿"],
      ["9841", "쁀", 16, "쁒", 5, "쁙쁚쁛"],
      ["9861", "쁝쁞쁟쁡", 6, "쁪", 15],
      ["9881", "쁺", 21, "삒삓삕삖삗삙", 6, "삢삤삦", 5, "삮삱삲삷", 4, "삾샂샃샄샆샇샊샋샍샎샏샑", 6, "샚샞", 5, "샦샧샩샪샫샭", 6, "샶샸샺", 5, "섁섂섃섅섆섇섉", 6, "섑섒섓섔섖", 5, "섡섢섥섨섩섪섫섮"],
      ["9941", "섲섳섴섵섷섺섻섽섾섿셁", 6, "셊셎", 5, "셖셗"],
      ["9961", "셙셚셛셝", 6, "셦셪", 5, "셱셲셳셵셶셷셹셺셻"],
      ["9981", "셼", 8, "솆", 5, "솏솑솒솓솕솗", 4, "솞솠솢솣솤솦솧솪솫솭솮솯솱", 11, "솾", 5, "쇅쇆쇇쇉쇊쇋쇍", 6, "쇕쇖쇙", 6, "쇡쇢쇣쇥쇦쇧쇩", 6, "쇲쇴", 7, "쇾쇿숁숂숃숅", 6, "숎숐숒", 5, "숚숛숝숞숡숢숣"],
      ["9a41", "숤숥숦숧숪숬숮숰숳숵", 16],
      ["9a61", "쉆쉇쉉", 6, "쉒쉓쉕쉖쉗쉙", 6, "쉡쉢쉣쉤쉦"],
      ["9a81", "쉧", 4, "쉮쉯쉱쉲쉳쉵", 6, "쉾슀슂", 5, "슊", 5, "슑", 6, "슙슚슜슞", 5, "슦슧슩슪슫슮", 5, "슶슸슺", 33, "싞싟싡싢싥", 5, "싮싰싲싳싴싵싷싺싽싾싿쌁", 6, "쌊쌋쌎쌏"],
      ["9b41", "쌐쌑쌒쌖쌗쌙쌚쌛쌝", 6, "쌦쌧쌪", 8],
      ["9b61", "쌳", 17, "썆", 7],
      ["9b81", "썎", 25, "썪썫썭썮썯썱썳", 4, "썺썻썾", 5, "쎅쎆쎇쎉쎊쎋쎍", 50, "쏁", 22, "쏚"],
      ["9c41", "쏛쏝쏞쏡쏣", 4, "쏪쏫쏬쏮", 5, "쏶쏷쏹", 5],
      ["9c61", "쏿", 8, "쐉", 6, "쐑", 9],
      ["9c81", "쐛", 8, "쐥", 6, "쐭쐮쐯쐱쐲쐳쐵", 6, "쐾", 9, "쑉", 26, "쑦쑧쑩쑪쑫쑭", 6, "쑶쑷쑸쑺", 5, "쒁", 18, "쒕", 6, "쒝", 12],
      ["9d41", "쒪", 13, "쒹쒺쒻쒽", 8],
      ["9d61", "쓆", 25],
      ["9d81", "쓠", 8, "쓪", 5, "쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂", 9, "씍씎씏씑씒씓씕", 6, "씝", 10, "씪씫씭씮씯씱", 6, "씺씼씾", 5, "앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩", 6, "앲앶", 5, "앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"],
      ["9e41", "얖얙얚얛얝얞얟얡", 7, "얪", 9, "얶"],
      ["9e61", "얷얺얿", 4, "엋엍엏엒엓엕엖엗엙", 6, "엢엤엦엧"],
      ["9e81", "엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑", 6, "옚옝", 6, "옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉", 6, "왒왖", 5, "왞왟왡", 10, "왭왮왰왲", 5, "왺왻왽왾왿욁", 6, "욊욌욎", 5, "욖욗욙욚욛욝", 6, "욦"],
      ["9f41", "욨욪", 5, "욲욳욵욶욷욻", 4, "웂웄웆", 5, "웎"],
      ["9f61", "웏웑웒웓웕", 6, "웞웟웢", 5, "웪웫웭웮웯웱웲"],
      ["9f81", "웳", 4, "웺웻웼웾", 5, "윆윇윉윊윋윍", 6, "윖윘윚", 5, "윢윣윥윦윧윩", 6, "윲윴윶윸윹윺윻윾윿읁읂읃읅", 4, "읋읎읐읙읚읛읝읞읟읡", 6, "읩읪읬", 7, "읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛", 4, "잢잧", 4, "잮잯잱잲잳잵잶잷"],
      ["a041", "잸잹잺잻잾쟂", 5, "쟊쟋쟍쟏쟑", 6, "쟙쟚쟛쟜"],
      ["a061", "쟞", 5, "쟥쟦쟧쟩쟪쟫쟭", 13],
      ["a081", "쟻", 4, "젂젃젅젆젇젉젋", 4, "젒젔젗", 4, "젞젟젡젢젣젥", 6, "젮젰젲", 5, "젹젺젻젽젾젿졁", 6, "졊졋졎", 5, "졕", 26, "졲졳졵졶졷졹졻", 4, "좂좄좈좉좊좎", 5, "좕", 7, "좞좠좢좣좤"],
      ["a141", "좥좦좧좩", 18, "좾좿죀죁"],
      ["a161", "죂죃죅죆죇죉죊죋죍", 6, "죖죘죚", 5, "죢죣죥"],
      ["a181", "죦", 14, "죶", 5, "죾죿줁줂줃줇", 4, "줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈", 9, "±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"],
      ["a241", "줐줒", 5, "줙", 18],
      ["a261", "줭", 6, "줵", 18],
      ["a281", "쥈", 7, "쥒쥓쥕쥖쥗쥙", 6, "쥢쥤", 7, "쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"],
      ["a341", "쥱쥲쥳쥵", 6, "쥽", 10, "즊즋즍즎즏"],
      ["a361", "즑", 6, "즚즜즞", 16],
      ["a381", "즯", 16, "짂짃짅짆짉짋", 4, "짒짔짗짘짛！", 58, "￦］", 32, "￣"],
      ["a441", "짞짟짡짣짥짦짨짩짪짫짮짲", 5, "짺짻짽짾짿쨁쨂쨃쨄"],
      ["a461", "쨅쨆쨇쨊쨎", 5, "쨕쨖쨗쨙", 12],
      ["a481", "쨦쨧쨨쨪", 28, "ㄱ", 93],
      ["a541", "쩇", 4, "쩎쩏쩑쩒쩓쩕", 6, "쩞쩢", 5, "쩩쩪"],
      ["a561", "쩫", 17, "쩾", 5, "쪅쪆"],
      ["a581", "쪇", 16, "쪙", 14, "ⅰ", 9],
      ["a5b0", "Ⅰ", 9],
      ["a5c1", "Α", 16, "Σ", 6],
      ["a5e1", "α", 16, "σ", 6],
      ["a641", "쪨", 19, "쪾쪿쫁쫂쫃쫅"],
      ["a661", "쫆", 5, "쫎쫐쫒쫔쫕쫖쫗쫚", 5, "쫡", 6],
      ["a681", "쫨쫩쫪쫫쫭", 6, "쫵", 18, "쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃", 7],
      ["a741", "쬋", 4, "쬑쬒쬓쬕쬖쬗쬙", 6, "쬢", 7],
      ["a761", "쬪", 22, "쭂쭃쭄"],
      ["a781", "쭅쭆쭇쭊쭋쭍쭎쭏쭑", 6, "쭚쭛쭜쭞", 5, "쭥", 7, "㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙", 9, "㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰", 9, "㎀", 4, "㎺", 5, "㎐", 4, "Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"],
      ["a841", "쭭", 10, "쭺", 14],
      ["a861", "쮉", 18, "쮝", 6],
      ["a881", "쮤", 19, "쮹", 11, "ÆÐªĦ"],
      ["a8a6", "Ĳ"],
      ["a8a8", "ĿŁØŒºÞŦŊ"],
      ["a8b1", "㉠", 27, "ⓐ", 25, "①", 14, "½⅓⅔¼¾⅛⅜⅝⅞"],
      ["a941", "쯅", 14, "쯕", 10],
      ["a961", "쯠쯡쯢쯣쯥쯦쯨쯪", 18],
      ["a981", "쯽", 14, "찎찏찑찒찓찕", 6, "찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀", 27, "⒜", 25, "⑴", 14, "¹²³⁴ⁿ₁₂₃₄"],
      ["aa41", "찥찦찪찫찭찯찱", 6, "찺찿", 4, "챆챇챉챊챋챍챎"],
      ["aa61", "챏", 4, "챖챚", 5, "챡챢챣챥챧챩", 6, "챱챲"],
      ["aa81", "챳챴챶", 29, "ぁ", 82],
      ["ab41", "첔첕첖첗첚첛첝첞첟첡", 6, "첪첮", 5, "첶첷첹"],
      ["ab61", "첺첻첽", 6, "쳆쳈쳊", 5, "쳑쳒쳓쳕", 5],
      ["ab81", "쳛", 8, "쳥", 6, "쳭쳮쳯쳱", 12, "ァ", 85],
      ["ac41", "쳾쳿촀촂", 5, "촊촋촍촎촏촑", 6, "촚촜촞촟촠"],
      ["ac61", "촡촢촣촥촦촧촩촪촫촭", 11, "촺", 4],
      ["ac81", "촿", 28, "쵝쵞쵟А", 5, "ЁЖ", 25],
      ["acd1", "а", 5, "ёж", 25],
      ["ad41", "쵡쵢쵣쵥", 6, "쵮쵰쵲", 5, "쵹", 7],
      ["ad61", "춁", 6, "춉", 10, "춖춗춙춚춛춝춞춟"],
      ["ad81", "춠춡춢춣춦춨춪", 5, "춱", 18, "췅"],
      ["ae41", "췆", 5, "췍췎췏췑", 16],
      ["ae61", "췢", 5, "췩췪췫췭췮췯췱", 6, "췺췼췾", 4],
      ["ae81", "츃츅츆츇츉츊츋츍", 6, "츕츖츗츘츚", 5, "츢츣츥츦츧츩츪츫"],
      ["af41", "츬츭츮츯츲츴츶", 19],
      ["af61", "칊", 13, "칚칛칝칞칢", 5, "칪칬"],
      ["af81", "칮", 5, "칶칷칹칺칻칽", 6, "캆캈캊", 5, "캒캓캕캖캗캙"],
      ["b041", "캚", 5, "캢캦", 5, "캮", 12],
      ["b061", "캻", 5, "컂", 19],
      ["b081", "컖", 13, "컦컧컩컪컭", 6, "컶컺", 5, "가각간갇갈갉갊감", 7, "같", 4, "갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"],
      ["b141", "켂켃켅켆켇켉", 6, "켒켔켖", 5, "켝켞켟켡켢켣"],
      ["b161", "켥", 6, "켮켲", 5, "켹", 11],
      ["b181", "콅", 14, "콖콗콙콚콛콝", 6, "콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"],
      ["b241", "콭콮콯콲콳콵콶콷콹", 6, "쾁쾂쾃쾄쾆", 5, "쾍"],
      ["b261", "쾎", 18, "쾢", 5, "쾩"],
      ["b281", "쾪", 5, "쾱", 18, "쿅", 6, "깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"],
      ["b341", "쿌", 19, "쿢쿣쿥쿦쿧쿩"],
      ["b361", "쿪", 5, "쿲쿴쿶", 5, "쿽쿾쿿퀁퀂퀃퀅", 5],
      ["b381", "퀋", 5, "퀒", 5, "퀙", 19, "끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫", 4, "낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"],
      ["b441", "퀮", 5, "퀶퀷퀹퀺퀻퀽", 6, "큆큈큊", 5],
      ["b461", "큑큒큓큕큖큗큙", 6, "큡", 10, "큮큯"],
      ["b481", "큱큲큳큵", 6, "큾큿킀킂", 18, "뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫", 4, "닳담답닷", 4, "닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"],
      ["b541", "킕", 14, "킦킧킩킪킫킭", 5],
      ["b561", "킳킶킸킺", 5, "탂탃탅탆탇탊", 5, "탒탖", 4],
      ["b581", "탛탞탟탡탢탣탥", 6, "탮탲", 5, "탹", 11, "덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"],
      ["b641", "턅", 7, "턎", 17],
      ["b661", "턠", 15, "턲턳턵턶턷턹턻턼턽턾"],
      ["b681", "턿텂텆", 5, "텎텏텑텒텓텕", 6, "텞텠텢", 5, "텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"],
      ["b741", "텮", 13, "텽", 6, "톅톆톇톉톊"],
      ["b761", "톋", 20, "톢톣톥톦톧"],
      ["b781", "톩", 6, "톲톴톶톷톸톹톻톽톾톿퇁", 14, "래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"],
      ["b841", "퇐", 7, "퇙", 17],
      ["b861", "퇫", 8, "퇵퇶퇷퇹", 13],
      ["b881", "툈툊", 5, "툑", 24, "륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많", 4, "맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"],
      ["b941", "툪툫툮툯툱툲툳툵", 6, "툾퉀퉂", 5, "퉉퉊퉋퉌"],
      ["b961", "퉍", 14, "퉝", 6, "퉥퉦퉧퉨"],
      ["b981", "퉩", 22, "튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바", 4, "받", 4, "밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"],
      ["ba41", "튍튎튏튒튓튔튖", 5, "튝튞튟튡튢튣튥", 6, "튭"],
      ["ba61", "튮튯튰튲", 5, "튺튻튽튾틁틃", 4, "틊틌", 5],
      ["ba81", "틒틓틕틖틗틙틚틛틝", 6, "틦", 9, "틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"],
      ["bb41", "틻", 4, "팂팄팆", 5, "팏팑팒팓팕팗", 4, "팞팢팣"],
      ["bb61", "팤팦팧팪팫팭팮팯팱", 6, "팺팾", 5, "퍆퍇퍈퍉"],
      ["bb81", "퍊", 31, "빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"],
      ["bc41", "퍪", 17, "퍾퍿펁펂펃펅펆펇"],
      ["bc61", "펈펉펊펋펎펒", 5, "펚펛펝펞펟펡", 6, "펪펬펮"],
      ["bc81", "펯", 4, "펵펶펷펹펺펻펽", 6, "폆폇폊", 5, "폑", 5, "샥샨샬샴샵샷샹섀섄섈섐섕서", 4, "섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"],
      ["bd41", "폗폙", 7, "폢폤", 7, "폮폯폱폲폳폵폶폷"],
      ["bd61", "폸폹폺폻폾퐀퐂", 5, "퐉", 13],
      ["bd81", "퐗", 5, "퐞", 25, "숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"],
      ["be41", "퐸", 7, "푁푂푃푅", 14],
      ["be61", "푔", 7, "푝푞푟푡푢푣푥", 7, "푮푰푱푲"],
      ["be81", "푳", 4, "푺푻푽푾풁풃", 4, "풊풌풎", 5, "풕", 8, "쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄", 6, "엌엎"],
      ["bf41", "풞", 10, "풪", 14],
      ["bf61", "풹", 18, "퓍퓎퓏퓑퓒퓓퓕"],
      ["bf81", "퓖", 5, "퓝퓞퓠", 7, "퓩퓪퓫퓭퓮퓯퓱", 6, "퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염", 5, "옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"],
      ["c041", "퓾", 5, "픅픆픇픉픊픋픍", 6, "픖픘", 5],
      ["c061", "픞", 25],
      ["c081", "픸픹픺픻픾픿핁핂핃핅", 6, "핎핐핒", 5, "핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응", 7, "읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"],
      ["c141", "핤핦핧핪핬핮", 5, "핶핷핹핺핻핽", 6, "햆햊햋"],
      ["c161", "햌햍햎햏햑", 19, "햦햧"],
      ["c181", "햨", 31, "점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"],
      ["c241", "헊헋헍헎헏헑헓", 4, "헚헜헞", 5, "헦헧헩헪헫헭헮"],
      ["c261", "헯", 4, "헶헸헺", 5, "혂혃혅혆혇혉", 6, "혒"],
      ["c281", "혖", 5, "혝혞혟혡혢혣혥", 7, "혮", 9, "혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"],
      ["c341", "혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝", 4],
      ["c361", "홢", 4, "홨홪", 5, "홲홳홵", 11],
      ["c381", "횁횂횄횆", 5, "횎횏횑횒횓횕", 7, "횞횠횢", 5, "횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"],
      ["c441", "횫횭횮횯횱", 7, "횺횼", 7, "훆훇훉훊훋"],
      ["c461", "훍훎훏훐훒훓훕훖훘훚", 5, "훡훢훣훥훦훧훩", 4],
      ["c481", "훮훯훱훲훳훴훶", 5, "훾훿휁휂휃휅", 11, "휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"],
      ["c541", "휕휖휗휚휛휝휞휟휡", 6, "휪휬휮", 5, "휶휷휹"],
      ["c561", "휺휻휽", 6, "흅흆흈흊", 5, "흒흓흕흚", 4],
      ["c581", "흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵", 6, "흾흿힀힂", 5, "힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"],
      ["c641", "힍힎힏힑", 6, "힚힜힞", 5],
      ["c6a1", "퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"],
      ["c7a1", "퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"],
      ["c8a1", "혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"],
      ["caa1", "伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"],
      ["cba1", "匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"],
      ["cca1", "瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"],
      ["cda1", "棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"],
      ["cea1", "科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"],
      ["cfa1", "區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"],
      ["d0a1", "鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"],
      ["d1a1", "朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩", 5, "那樂", 4, "諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"],
      ["d2a1", "納臘蠟衲囊娘廊", 4, "乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧", 5, "駑魯", 10, "濃籠聾膿農惱牢磊腦賂雷尿壘", 7, "嫩訥杻紐勒", 5, "能菱陵尼泥匿溺多茶"],
      ["d3a1", "丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"],
      ["d4a1", "棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"],
      ["d5a1", "蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"],
      ["d6a1", "煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"],
      ["d7a1", "遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"],
      ["d8a1", "立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"],
      ["d9a1", "蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"],
      ["daa1", "汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"],
      ["dba1", "發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"],
      ["dca1", "碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"],
      ["dda1", "孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"],
      ["dea1", "脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"],
      ["dfa1", "傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"],
      ["e0a1", "胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"],
      ["e1a1", "聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"],
      ["e2a1", "戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"],
      ["e3a1", "嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"],
      ["e4a1", "沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"],
      ["e5a1", "櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"],
      ["e6a1", "旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"],
      ["e7a1", "簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"],
      ["e8a1", "烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"],
      ["e9a1", "窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"],
      ["eaa1", "運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"],
      ["eba1", "濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"],
      ["eca1", "議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"],
      ["eda1", "立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"],
      ["eea1", "障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"],
      ["efa1", "煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"],
      ["f0a1", "靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"],
      ["f1a1", "踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"],
      ["f2a1", "咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"],
      ["f3a1", "鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"],
      ["f4a1", "責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"],
      ["f5a1", "椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"],
      ["f6a1", "贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"],
      ["f7a1", "鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"],
      ["f8a1", "阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"],
      ["f9a1", "品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"],
      ["faa1", "行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"],
      ["fba1", "形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"],
      ["fca1", "禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"],
      ["fda1", "爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"]
    ];
  }
});
var require_cp950 = __commonJS({
  "node_modules/iconv-lite/encodings/tables/cp950.json"(exports, module) {
    module.exports = [
      ["0", "\0", 127],
      ["a140", "　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"],
      ["a1a1", "﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢", 4, "～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"],
      ["a240", "＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁", 7, "▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"],
      ["a2a1", "╮╰╯═╞╪╡◢◣◥◤╱╲╳０", 9, "Ⅰ", 9, "〡", 8, "十卄卅Ａ", 25, "ａ", 21],
      ["a340", "ｗｘｙｚΑ", 16, "Σ", 6, "α", 16, "σ", 6, "ㄅ", 10],
      ["a3a1", "ㄐ", 25, "˙ˉˊˇˋ"],
      ["a3e1", "€"],
      ["a440", "一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"],
      ["a4a1", "丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"],
      ["a540", "世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"],
      ["a5a1", "央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"],
      ["a640", "共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"],
      ["a6a1", "式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"],
      ["a740", "作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"],
      ["a7a1", "均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"],
      ["a840", "杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"],
      ["a8a1", "芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"],
      ["a940", "咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"],
      ["a9a1", "屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"],
      ["aa40", "昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"],
      ["aaa1", "炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"],
      ["ab40", "陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"],
      ["aba1", "哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"],
      ["ac40", "拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"],
      ["aca1", "活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"],
      ["ad40", "耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"],
      ["ada1", "迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"],
      ["ae40", "哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"],
      ["aea1", "恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"],
      ["af40", "浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"],
      ["afa1", "砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"],
      ["b040", "虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"],
      ["b0a1", "陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"],
      ["b140", "娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"],
      ["b1a1", "情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"],
      ["b240", "毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"],
      ["b2a1", "瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"],
      ["b340", "莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"],
      ["b3a1", "部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"],
      ["b440", "婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"],
      ["b4a1", "插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"],
      ["b540", "溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"],
      ["b5a1", "窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"],
      ["b640", "詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"],
      ["b6a1", "間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"],
      ["b740", "媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"],
      ["b7a1", "楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"],
      ["b840", "睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"],
      ["b8a1", "腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"],
      ["b940", "辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"],
      ["b9a1", "飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"],
      ["ba40", "愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"],
      ["baa1", "滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"],
      ["bb40", "罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"],
      ["bba1", "說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"],
      ["bc40", "劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"],
      ["bca1", "慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"],
      ["bd40", "瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"],
      ["bda1", "翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"],
      ["be40", "輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"],
      ["bea1", "鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"],
      ["bf40", "濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"],
      ["bfa1", "縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"],
      ["c040", "錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"],
      ["c0a1", "嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"],
      ["c140", "瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"],
      ["c1a1", "薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"],
      ["c240", "駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"],
      ["c2a1", "癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"],
      ["c340", "鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"],
      ["c3a1", "獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"],
      ["c440", "願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"],
      ["c4a1", "纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"],
      ["c540", "護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"],
      ["c5a1", "禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"],
      ["c640", "讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"],
      ["c940", "乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"],
      ["c9a1", "氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"],
      ["ca40", "汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"],
      ["caa1", "吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"],
      ["cb40", "杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"],
      ["cba1", "芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"],
      ["cc40", "坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"],
      ["cca1", "怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"],
      ["cd40", "泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"],
      ["cda1", "矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"],
      ["ce40", "哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"],
      ["cea1", "峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"],
      ["cf40", "柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"],
      ["cfa1", "洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"],
      ["d040", "穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"],
      ["d0a1", "苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"],
      ["d140", "唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"],
      ["d1a1", "恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"],
      ["d240", "毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"],
      ["d2a1", "牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"],
      ["d340", "笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"],
      ["d3a1", "荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"],
      ["d440", "酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"],
      ["d4a1", "唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"],
      ["d540", "崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"],
      ["d5a1", "捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"],
      ["d640", "淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"],
      ["d6a1", "痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"],
      ["d740", "耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"],
      ["d7a1", "蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"],
      ["d840", "釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"],
      ["d8a1", "堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"],
      ["d940", "惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"],
      ["d9a1", "晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"],
      ["da40", "湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"],
      ["daa1", "琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"],
      ["db40", "罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"],
      ["dba1", "菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"],
      ["dc40", "軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"],
      ["dca1", "隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"],
      ["dd40", "媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"],
      ["dda1", "搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"],
      ["de40", "毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"],
      ["dea1", "煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"],
      ["df40", "稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"],
      ["dfa1", "腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"],
      ["e040", "觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"],
      ["e0a1", "遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"],
      ["e140", "凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"],
      ["e1a1", "寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"],
      ["e240", "榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"],
      ["e2a1", "漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"],
      ["e340", "禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"],
      ["e3a1", "耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"],
      ["e440", "裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"],
      ["e4a1", "銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"],
      ["e540", "噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"],
      ["e5a1", "憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"],
      ["e640", "澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"],
      ["e6a1", "獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"],
      ["e740", "膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"],
      ["e7a1", "蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"],
      ["e840", "踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"],
      ["e8a1", "銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"],
      ["e940", "噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"],
      ["e9a1", "憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"],
      ["ea40", "澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"],
      ["eaa1", "瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"],
      ["eb40", "蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"],
      ["eba1", "諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"],
      ["ec40", "錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"],
      ["eca1", "魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"],
      ["ed40", "檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"],
      ["eda1", "瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"],
      ["ee40", "蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"],
      ["eea1", "謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"],
      ["ef40", "鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"],
      ["efa1", "鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"],
      ["f040", "璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"],
      ["f0a1", "臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"],
      ["f140", "蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"],
      ["f1a1", "鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"],
      ["f240", "徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"],
      ["f2a1", "礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"],
      ["f340", "譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"],
      ["f3a1", "鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"],
      ["f440", "嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"],
      ["f4a1", "禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"],
      ["f540", "鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"],
      ["f5a1", "鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"],
      ["f640", "蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"],
      ["f6a1", "騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"],
      ["f740", "糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"],
      ["f7a1", "驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"],
      ["f840", "讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"],
      ["f8a1", "齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"],
      ["f940", "纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"],
      ["f9a1", "龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"]
    ];
  }
});
var require_big5_added = __commonJS({
  "node_modules/iconv-lite/encodings/tables/big5-added.json"(exports, module) {
    module.exports = [
      ["8740", "䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"],
      ["8767", "綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"],
      ["87a1", "𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"],
      ["8840", "㇀", 4, "𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"],
      ["88a1", "ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"],
      ["8940", "𪎩𡅅"],
      ["8943", "攊"],
      ["8946", "丽滝鵎釟"],
      ["894c", "𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"],
      ["89a1", "琑糼緍楆竉刧"],
      ["89ab", "醌碸酞肼"],
      ["89b0", "贋胶𠧧"],
      ["89b5", "肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"],
      ["89c1", "溚舾甙"],
      ["89c5", "䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"],
      ["8a40", "𧶄唥"],
      ["8a43", "𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"],
      ["8a64", "𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"],
      ["8a76", "䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"],
      ["8aa1", "𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"],
      ["8aac", "䠋𠆩㿺塳𢶍"],
      ["8ab2", "𤗈𠓼𦂗𠽌𠶖啹䂻䎺"],
      ["8abb", "䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"],
      ["8ac9", "𪘁𠸉𢫏𢳉"],
      ["8ace", "𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"],
      ["8adf", "𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"],
      ["8af6", "𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"],
      ["8b40", "𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"],
      ["8b55", "𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"],
      ["8ba1", "𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"],
      ["8bde", "𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"],
      ["8c40", "倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"],
      ["8ca1", "𣏹椙橃𣱣泿"],
      ["8ca7", "爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"],
      ["8cc9", "顨杫䉶圽"],
      ["8cce", "藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"],
      ["8ce6", "峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"],
      ["8d40", "𠮟"],
      ["8d42", "𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"],
      ["8da1", "㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"],
      ["8e40", "𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"],
      ["8ea1", "繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"],
      ["8f40", "蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"],
      ["8fa1", "𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"],
      ["9040", "趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"],
      ["90a1", "𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"],
      ["9140", "𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"],
      ["91a1", "鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"],
      ["9240", "𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"],
      ["92a1", "働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"],
      ["9340", "媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"],
      ["93a1", "摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"],
      ["9440", "銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"],
      ["94a1", "㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"],
      ["9540", "𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"],
      ["95a1", "衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"],
      ["9640", "桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"],
      ["96a1", "𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"],
      ["9740", "愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"],
      ["97a1", "𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"],
      ["9840", "𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"],
      ["98a1", "咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"],
      ["9940", "䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"],
      ["99a1", "䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"],
      ["9a40", "鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"],
      ["9aa1", "黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"],
      ["9b40", "𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"],
      ["9b62", "𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"],
      ["9ba1", "椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"],
      ["9c40", "嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"],
      ["9ca1", "㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"],
      ["9d40", "𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"],
      ["9da1", "辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"],
      ["9e40", "𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"],
      ["9ea1", "鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"],
      ["9ead", "𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"],
      ["9ec5", "㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"],
      ["9ef5", "噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"],
      ["9f40", "籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"],
      ["9f4f", "凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"],
      ["9fa1", "椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"],
      ["9fae", "酙隁酜"],
      ["9fb2", "酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"],
      ["9fc1", "𤤙盖鮝个𠳔莾衂"],
      ["9fc9", "届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"],
      ["9fdb", "歒酼龥鮗頮颴骺麨麄煺笔"],
      ["9fe7", "毺蠘罸"],
      ["9feb", "嘠𪙊蹷齓"],
      ["9ff0", "跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"],
      ["a040", "𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"],
      ["a055", "𡠻𦸅"],
      ["a058", "詾𢔛"],
      ["a05b", "惽癧髗鵄鍮鮏蟵"],
      ["a063", "蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"],
      ["a073", "坟慯抦戹拎㩜懢厪𣏵捤栂㗒"],
      ["a0a1", "嵗𨯂迚𨸹"],
      ["a0a6", "僙𡵆礆匲阸𠼻䁥"],
      ["a0ae", "矾"],
      ["a0b0", "糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"],
      ["a0d4", "覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"],
      ["a0e2", "罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"],
      ["a3c0", "␀", 31, "␡"],
      ["c6a1", "①", 9, "⑴", 9, "ⅰ", 9, "丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ", 23],
      ["c740", "す", 58, "ァアィイ"],
      ["c7a1", "ゥ", 81, "А", 5, "ЁЖ", 4],
      ["c840", "Л", 26, "ёж", 25, "⇧↸↹㇏𠃌乚𠂊刂䒑"],
      ["c8a1", "龰冈龱𧘇"],
      ["c8cd", "￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"],
      ["c8f5", "ʃɐɛɔɵœøŋʊɪ"],
      ["f9fe", "￭"],
      ["fa40", "𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"],
      ["faa1", "鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"],
      ["fb40", "𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"],
      ["fba1", "𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"],
      ["fc40", "廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"],
      ["fca1", "𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"],
      ["fd40", "𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"],
      ["fda1", "𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"],
      ["fe40", "鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"],
      ["fea1", "𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"]
    ];
  }
});
var require_dbcs_data = __commonJS({
  "node_modules/iconv-lite/encodings/dbcs-data.js"(exports, module) {
    "use strict";
    module.exports = {
      // == Japanese/ShiftJIS ====================================================
      // All japanese encodings are based on JIS X set of standards:
      // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
      // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes.
      //              Has several variations in 1978, 1983, 1990 and 1997.
      // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
      // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
      //              2 planes, first is superset of 0208, second - revised 0212.
      //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)
      // Byte encodings are:
      //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
      //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
      //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
      //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
      //               0x00-0x7F       - lower part of 0201
      //               0x8E, 0xA1-0xDF - upper part of 0201
      //               (0xA1-0xFE)x2   - 0208 plane (94x94).
      //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
      //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
      //               Used as-is in ISO2022 family.
      //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII,
      //                0201-1976 Roman, 0208-1978, 0208-1983.
      //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
      //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
      //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
      //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
      //
      // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
      //
      // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html
      shiftjis: {
        type: "_dbcs",
        table: function() {
          return require_shiftjis();
        },
        encodeAdd: { "¥": 92, "‾": 126 },
        encodeSkipVals: [{ from: 60736, to: 63808 }]
      },
      csshiftjis: "shiftjis",
      mskanji: "shiftjis",
      sjis: "shiftjis",
      windows31j: "shiftjis",
      ms31j: "shiftjis",
      xsjis: "shiftjis",
      windows932: "shiftjis",
      ms932: "shiftjis",
      932: "shiftjis",
      cp932: "shiftjis",
      eucjp: {
        type: "_dbcs",
        table: function() {
          return require_eucjp();
        },
        encodeAdd: { "¥": 92, "‾": 126 }
      },
      // TODO: KDDI extension to Shift_JIS
      // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
      // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.
      // == Chinese/GBK ==========================================================
      // http://en.wikipedia.org/wiki/GBK
      // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder
      // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
      gb2312: "cp936",
      gb231280: "cp936",
      gb23121980: "cp936",
      csgb2312: "cp936",
      csiso58gb231280: "cp936",
      euccn: "cp936",
      // Microsoft's CP936 is a subset and approximation of GBK.
      windows936: "cp936",
      ms936: "cp936",
      936: "cp936",
      cp936: {
        type: "_dbcs",
        table: function() {
          return require_cp936();
        }
      },
      // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
      gbk: {
        type: "_dbcs",
        table: function() {
          return require_cp936().concat(require_gbk_added());
        }
      },
      xgbk: "gbk",
      isoir58: "gbk",
      // GB18030 is an algorithmic extension of GBK.
      // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
      // http://icu-project.org/docs/papers/gb18030.html
      // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
      // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
      gb18030: {
        type: "_dbcs",
        table: function() {
          return require_cp936().concat(require_gbk_added());
        },
        gb18030: function() {
          return require_gb18030_ranges();
        },
        encodeSkipVals: [128],
        encodeAdd: { "€": 41699 }
      },
      chinese: "gb18030",
      // == Korean ===============================================================
      // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
      windows949: "cp949",
      ms949: "cp949",
      949: "cp949",
      cp949: {
        type: "_dbcs",
        table: function() {
          return require_cp949();
        }
      },
      cseuckr: "cp949",
      csksc56011987: "cp949",
      euckr: "cp949",
      isoir149: "cp949",
      korean: "cp949",
      ksc56011987: "cp949",
      ksc56011989: "cp949",
      ksc5601: "cp949",
      // == Big5/Taiwan/Hong Kong ================================================
      // There are lots of tables for Big5 and cp950. Please see the following links for history:
      // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
      // Variations, in roughly number of defined chars:
      //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
      //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
      //  * Big5-2003 (Taiwan standard) almost superset of cp950.
      //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
      //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard.
      //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
      //    Plus, it has 4 combining sequences.
      //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
      //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
      //    Implementations are not consistent within browsers; sometimes labeled as just big5.
      //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
      //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
      //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
      //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
      //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
      //
      // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
      // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.
      windows950: "cp950",
      ms950: "cp950",
      950: "cp950",
      cp950: {
        type: "_dbcs",
        table: function() {
          return require_cp950();
        }
      },
      // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
      big5: "big5hkscs",
      big5hkscs: {
        type: "_dbcs",
        table: function() {
          return require_cp950().concat(require_big5_added());
        },
        encodeSkipVals: [
          // Although Encoding Standard says we should avoid encoding to HKSCS area (See Step 1 of
          // https://encoding.spec.whatwg.org/#index-big5-pointer), we still do it to increase compatibility with ICU.
          // But if a single unicode point can be encoded both as HKSCS and regular Big5, we prefer the latter.
          36457,
          36463,
          36478,
          36523,
          36532,
          36557,
          36560,
          36695,
          36713,
          36718,
          36811,
          36862,
          36973,
          36986,
          37060,
          37084,
          37105,
          37311,
          37551,
          37552,
          37553,
          37554,
          37585,
          37959,
          38090,
          38361,
          38652,
          39285,
          39798,
          39800,
          39803,
          39878,
          39902,
          39916,
          39926,
          40002,
          40019,
          40034,
          40040,
          40043,
          40055,
          40124,
          40125,
          40144,
          40279,
          40282,
          40388,
          40431,
          40443,
          40617,
          40687,
          40701,
          40800,
          40907,
          41079,
          41180,
          41183,
          36812,
          37576,
          38468,
          38637,
          // Step 2 of https://encoding.spec.whatwg.org/#index-big5-pointer: Use last pointer for U+2550, U+255E, U+2561, U+256A, U+5341, or U+5345
          41636,
          41637,
          41639,
          41638,
          41676,
          41678
        ]
      },
      cnbig5: "big5hkscs",
      csbig5: "big5hkscs",
      xxbig5: "big5hkscs"
    };
  }
});
var require_encodings = __commonJS({
  "node_modules/iconv-lite/encodings/index.js"(exports, module) {
    "use strict";
    var mergeModules = require_merge_exports();
    var modules = [
      require_internal(),
      require_utf32(),
      require_utf16(),
      require_utf7(),
      require_sbcs_codec(),
      require_sbcs_data(),
      require_sbcs_data_generated(),
      require_dbcs_codec(),
      require_dbcs_data()
    ];
    for (i4 = 0; i4 < modules.length; i4++) {
      module = modules[i4];
      mergeModules(exports, module);
    }
    var module;
    var i4;
  }
});
var require_streams = __commonJS({
  "node_modules/iconv-lite/lib/streams.js"(exports, module) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    module.exports = function(streamModule) {
      var Transform = streamModule.Transform;
      function IconvLiteEncoderStream(conv, options) {
        this.conv = conv;
        options = options || {};
        options.decodeStrings = false;
        Transform.call(this, options);
      }
      IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
        constructor: { value: IconvLiteEncoderStream }
      });
      IconvLiteEncoderStream.prototype._transform = function(chunk, encoding, done) {
        if (typeof chunk !== "string") {
          return done(new Error("Iconv encoding stream needs strings as its input."));
        }
        try {
          var res = this.conv.write(chunk);
          if (res && res.length) this.push(res);
          done();
        } catch (e2) {
          done(e2);
        }
      };
      IconvLiteEncoderStream.prototype._flush = function(done) {
        try {
          var res = this.conv.end();
          if (res && res.length) this.push(res);
          done();
        } catch (e2) {
          done(e2);
        }
      };
      IconvLiteEncoderStream.prototype.collect = function(cb) {
        var chunks = [];
        this.on("error", cb);
        this.on("data", function(chunk) {
          chunks.push(chunk);
        });
        this.on("end", function() {
          cb(null, Buffer2.concat(chunks));
        });
        return this;
      };
      function IconvLiteDecoderStream(conv, options) {
        this.conv = conv;
        options = options || {};
        options.encoding = this.encoding = "utf8";
        Transform.call(this, options);
      }
      IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
        constructor: { value: IconvLiteDecoderStream }
      });
      IconvLiteDecoderStream.prototype._transform = function(chunk, encoding, done) {
        if (!Buffer2.isBuffer(chunk) && !(chunk instanceof Uint8Array)) {
          return done(new Error("Iconv decoding stream needs buffers as its input."));
        }
        try {
          var res = this.conv.write(chunk);
          if (res && res.length) this.push(res, this.encoding);
          done();
        } catch (e2) {
          done(e2);
        }
      };
      IconvLiteDecoderStream.prototype._flush = function(done) {
        try {
          var res = this.conv.end();
          if (res && res.length) this.push(res, this.encoding);
          done();
        } catch (e2) {
          done(e2);
        }
      };
      IconvLiteDecoderStream.prototype.collect = function(cb) {
        var res = "";
        this.on("error", cb);
        this.on("data", function(chunk) {
          res += chunk;
        });
        this.on("end", function() {
          cb(null, res);
        });
        return this;
      };
      return {
        IconvLiteEncoderStream,
        IconvLiteDecoderStream
      };
    };
  }
});
var stream_exports = {};
__export2(stream_exports, {
  default: () => stream_default
});
var stream_default;
var init_stream = __esm({
  "browser-exclude:stream"() {
    stream_default = {};
  }
});
var require_lib = __commonJS({
  "node_modules/iconv-lite/lib/index.js"(exports, module) {
    "use strict";
    var Buffer2 = __require("safer-buffer").Buffer;
    var bomHandling = require_bom_handling();
    var mergeModules = require_merge_exports();
    var iconv = module.exports;
    iconv.encodings = null;
    iconv.defaultCharUnicode = "�";
    iconv.defaultCharSingleByte = "?";
    iconv.encode = function encode2(str, encoding, options) {
      str = "" + (str || "");
      var encoder = iconv.getEncoder(encoding, options);
      var res = encoder.write(str);
      var trail = encoder.end();
      return trail && trail.length > 0 ? Buffer2.concat([res, trail]) : res;
    };
    iconv.decode = function decode2(buf, encoding, options) {
      if (typeof buf === "string") {
        if (!iconv.skipDecodeWarning) {
          console.error("Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding");
          iconv.skipDecodeWarning = true;
        }
        buf = Buffer2.from("" + (buf || ""), "binary");
      }
      var decoder = iconv.getDecoder(encoding, options);
      var res = decoder.write(buf);
      var trail = decoder.end();
      return trail ? res + trail : res;
    };
    iconv.encodingExists = function encodingExists2(enc) {
      try {
        iconv.getCodec(enc);
        return true;
      } catch (e2) {
        return false;
      }
    };
    iconv.toEncoding = iconv.encode;
    iconv.fromEncoding = iconv.decode;
    iconv._codecDataCache = { __proto__: null };
    iconv.getCodec = function getCodec2(encoding) {
      if (!iconv.encodings) {
        var raw = require_encodings();
        iconv.encodings = { __proto__: null };
        mergeModules(iconv.encodings, raw);
      }
      var enc = iconv._canonicalizeEncoding(encoding);
      var codecOptions = {};
      while (true) {
        var codec = iconv._codecDataCache[enc];
        if (codec) {
          return codec;
        }
        var codecDef = iconv.encodings[enc];
        switch (typeof codecDef) {
          case "string":
            enc = codecDef;
            break;
          case "object":
            for (var key in codecDef) {
              codecOptions[key] = codecDef[key];
            }
            if (!codecOptions.encodingName) {
              codecOptions.encodingName = enc;
            }
            enc = codecDef.type;
            break;
          case "function":
            if (!codecOptions.encodingName) {
              codecOptions.encodingName = enc;
            }
            codec = new codecDef(codecOptions, iconv);
            iconv._codecDataCache[codecOptions.encodingName] = codec;
            return codec;
          default:
            throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '" + enc + "')");
        }
      }
    };
    iconv._canonicalizeEncoding = function(encoding) {
      return ("" + encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
    };
    iconv.getEncoder = function getEncoder2(encoding, options) {
      var codec = iconv.getCodec(encoding);
      var encoder = new codec.encoder(options, codec);
      if (codec.bomAware && options && options.addBOM) {
        encoder = new bomHandling.PrependBOM(encoder, options);
      }
      return encoder;
    };
    iconv.getDecoder = function getDecoder2(encoding, options) {
      var codec = iconv.getCodec(encoding);
      var decoder = new codec.decoder(options, codec);
      if (codec.bomAware && !(options && options.stripBOM === false)) {
        decoder = new bomHandling.StripBOM(decoder, options);
      }
      return decoder;
    };
    iconv.enableStreamingAPI = function enableStreamingAPI2(streamModule2) {
      if (iconv.supportsStreams) {
        return;
      }
      var streams = require_streams()(streamModule2);
      iconv.IconvLiteEncoderStream = streams.IconvLiteEncoderStream;
      iconv.IconvLiteDecoderStream = streams.IconvLiteDecoderStream;
      iconv.encodeStream = function encodeStream(encoding, options) {
        return new iconv.IconvLiteEncoderStream(iconv.getEncoder(encoding, options), options);
      };
      iconv.decodeStream = function decodeStream(encoding, options) {
        return new iconv.IconvLiteDecoderStream(iconv.getDecoder(encoding, options), options);
      };
      iconv.supportsStreams = true;
    };
    var streamModule;
    try {
      streamModule = (init_stream(), __toCommonJS(stream_exports));
    } catch (e2) {
    }
    if (streamModule && streamModule.Transform) {
      iconv.enableStreamingAPI(streamModule);
    } else {
      iconv.encodeStream = iconv.decodeStream = function() {
        throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
      };
    }
    if (false) {
      console.error("iconv-lite warning: js files use non-utf8 encoding. See https://github.com/ashtuchkin/iconv-lite/wiki/Javascript-source-file-encodings for more info.");
    }
  }
});
var cjsm = __toESM(require_lib());
var { encodings, defaultCharUnicode, defaultCharSingleByte, encode, decode, encodingExists, toEncoding, fromEncoding, _codecDataCache, getCodec, _canonicalizeEncoding, getEncoder, getDecoder, enableStreamingAPI } = cjsm;
var endpoint_default = cjsm.default ?? cjsm;

// https://esm.sh/node/zlib.mjs
var zlib_exports = {};
__export(zlib_exports, {
  BrotliCompress: () => B4,
  BrotliDecompress: () => l6,
  Deflate: () => L4,
  DeflateRaw: () => S7,
  Gunzip: () => M5,
  Gzip: () => C4,
  Inflate: () => A5,
  InflateRaw: () => c5,
  Unzip: () => Z3,
  brotliCompress: () => P6,
  brotliCompressSync: () => y6,
  brotliDecompress: () => w5,
  brotliDecompressSync: () => b5,
  codes: () => u4,
  constants: () => i3,
  createBrotliCompress: () => z4,
  createBrotliDecompress: () => d6,
  createDeflate: () => W3,
  createDeflateRaw: () => K4,
  createGunzip: () => J3,
  createGzip: () => $5,
  createInflate: () => X4,
  createInflateRaw: () => h6,
  createUnzip: () => R_,
  default: () => A_,
  deflate: () => G4,
  deflateRaw: () => x6,
  deflateRawSync: () => V3,
  deflateSync: () => v5,
  gunzip: () => q4,
  gunzipSync: () => __,
  gzip: () => j4,
  gzipSync: () => k4,
  inflate: () => H4,
  inflateRaw: () => Y3,
  inflateRawSync: () => Q3,
  inflateSync: () => g5,
  unzip: () => E_,
  unzipSync: () => e_
});

// https://esm.sh/node/async_hooks.mjs
var o = Object.defineProperty;
var n = (e2, t3) => {
  for (var r3 in t3) o(e2, r3, { get: t3[r3], enumerable: true });
};
var R3 = class {
  __unenv__ = true;
  _currentStore;
  _enterStore;
  _enabled = true;
  getStore() {
    return this._currentStore ?? this._enterStore;
  }
  disable() {
    this._enabled = false;
  }
  enable() {
    this._enabled = true;
  }
  enterWith(e2) {
    this._enterStore = e2;
  }
  run(e2, t3, ...r3) {
    this._currentStore = e2;
    let s5 = t3(...r3);
    return this._currentStore = void 0, s5;
  }
  exit(e2, ...t3) {
    let r3 = this._currentStore;
    this._currentStore = void 0;
    let s5 = e2(...t3);
    return this._currentStore = r3, s5;
  }
  static snapshot() {
    throw new Error("[unenv] `AsyncLocalStorage.snapshot` is not implemented!");
  }
};
var S4 = globalThis.AsyncLocalStorage || R3;
var E3 = {};
n(E3, { AsyncHook: () => A3, asyncWrapProviders: () => _3, createHook: () => l3, executionAsyncId: () => c2, executionAsyncResource: () => T4, triggerAsyncId: () => P3 });
var a2 = class {
  __unenv__ = true;
  _enabled = false;
  _callbacks = {};
  constructor(e2 = {}) {
    this._callbacks = e2;
  }
  enable() {
    return this._enabled = true, this;
  }
  disable() {
    return this._enabled = false, this;
  }
  init(e2, t3, r3, s5) {
    this._enabled && this._callbacks.init && this._callbacks.init(e2, t3, r3, s5);
  }
  before(e2) {
    this._enabled && this._callbacks.before && this._callbacks.before(e2);
  }
  after(e2) {
    this._enabled && this._callbacks.after && this._callbacks.after(e2);
  }
  destroy(e2) {
    this._enabled && this._callbacks.destroy && this._callbacks.destroy(e2);
  }
  promiseResolve(e2) {
    this._enabled && this._callbacks.promiseResolve && this._callbacks.promiseResolve(e2);
  }
};
var A3 = globalThis.AsyncHook || a2;
var l3 = function(e2) {
  return new a2(e2);
};
var c2 = function() {
  return 0;
};
var T4 = function() {
  return /* @__PURE__ */ Object.create(null);
};
var P3 = function() {
  return 0;
};
var _3 = Object.assign(/* @__PURE__ */ Object.create(null), { NONE: 0, DIRHANDLE: 1, DNSCHANNEL: 2, ELDHISTOGRAM: 3, FILEHANDLE: 4, FILEHANDLECLOSEREQ: 5, BLOBREADER: 6, FSEVENTWRAP: 7, FSREQCALLBACK: 8, FSREQPROMISE: 9, GETADDRINFOREQWRAP: 10, GETNAMEINFOREQWRAP: 11, HEAPSNAPSHOT: 12, HTTP2SESSION: 13, HTTP2STREAM: 14, HTTP2PING: 15, HTTP2SETTINGS: 16, HTTPINCOMINGMESSAGE: 17, HTTPCLIENTREQUEST: 18, JSSTREAM: 19, JSUDPWRAP: 20, MESSAGEPORT: 21, PIPECONNECTWRAP: 22, PIPESERVERWRAP: 23, PIPEWRAP: 24, PROCESSWRAP: 25, PROMISE: 26, QUERYWRAP: 27, QUIC_ENDPOINT: 28, QUIC_LOGSTREAM: 29, QUIC_PACKET: 30, QUIC_SESSION: 31, QUIC_STREAM: 32, QUIC_UDP: 33, SHUTDOWNWRAP: 34, SIGNALWRAP: 35, STATWATCHER: 36, STREAMPIPE: 37, TCPCONNECTWRAP: 38, TCPSERVERWRAP: 39, TCPWRAP: 40, TTYWRAP: 41, UDPSENDWRAP: 42, UDPWRAP: 43, SIGINTWATCHDOG: 44, WORKER: 45, WORKERHEAPSNAPSHOT: 46, WRITEWRAP: 47, ZLIB: 48, CHECKPRIMEREQUEST: 49, PBKDF2REQUEST: 50, KEYPAIRGENREQUEST: 51, KEYGENREQUEST: 52, KEYEXPORTREQUEST: 53, CIPHERREQUEST: 54, DERIVEBITSREQUEST: 55, HASHREQUEST: 56, RANDOMBYTESREQUEST: 57, RANDOMPRIMEREQUEST: 58, SCRYPTREQUEST: 59, SIGNREQUEST: 60, TLSWRAP: 61, VERIFYREQUEST: 62 });
var I2 = 100;
var u2 = class {
  __unenv__ = true;
  type;
  _asyncId;
  _triggerAsyncId;
  constructor(e2, t3 = c2()) {
    this.type = e2, this._asyncId = -1 * I2++, this._triggerAsyncId = typeof t3 == "number" ? t3 : t3?.triggerAsyncId;
  }
  static bind(e2, t3, r3) {
    return new i2(t3 ?? "anonymous").bind(e2);
  }
  bind(e2, t3) {
    let r3 = (...s5) => this.runInAsyncScope(e2, t3, ...s5);
    return r3.asyncResource = this, r3;
  }
  runInAsyncScope(e2, t3, ...r3) {
    return e2.apply(t3, r3);
  }
  emitDestroy() {
    return this;
  }
  asyncId() {
    return this._asyncId;
  }
  triggerAsyncId() {
    return this._triggerAsyncId;
  }
};
var i2 = globalThis.AsyncResource || u2;
var d4 = { AsyncLocalStorage: S4, AsyncResource: i2, ...E3 };

// https://esm.sh/node/events.mjs
var g3 = 10;
var te2 = Object.getPrototypeOf(Object.getPrototypeOf(async function* () {
}).prototype);
var G3 = (e2, t3) => e2;
var E4 = Error;
var re2 = Error;
var m4 = Error;
var b4 = Error;
var ne2 = Error;
var C3 = Symbol.for("nodejs.rejection");
var h3 = Symbol.for("kCapture");
var M4 = Symbol.for("events.errorMonitor");
var y4 = Symbol.for("shapeMode");
var x4 = Symbol.for("events.maxEventTargetListeners");
var ie2 = Symbol.for("kEnhanceStackBeforeInspector");
var se2 = Symbol.for("nodejs.watermarkData");
var S5 = Symbol.for("kEventEmitter");
var v3 = Symbol.for("kAsyncResource");
var oe2 = Symbol.for("kFirstEventParam");
var P4 = Symbol.for("kResistStopPropagation");
var D3 = Symbol.for("events.maxEventTargetListenersWarned");
var f3 = class _4 {
  _events = void 0;
  _eventsCount = 0;
  _maxListeners = g3;
  [h3] = false;
  [y4] = false;
  static captureRejectionSymbol = C3;
  static errorMonitor = M4;
  static kMaxEventTargetListeners = x4;
  static kMaxEventTargetListenersWarned = D3;
  static usingDomains = false;
  static get on() {
    return ae2;
  }
  static get once() {
    return ce2;
  }
  static get getEventListeners() {
    return he2;
  }
  static get getMaxListeners() {
    return fe2;
  }
  static get addAbortListener() {
    return U3;
  }
  static get EventEmitterAsyncResource() {
    return le2;
  }
  static get EventEmitter() {
    return _4;
  }
  static setMaxListeners(t3 = g3, ...r3) {
    if (r3.length === 0) g3 = t3;
    else for (let n3 of r3) if (H3(n3)) n3[x4] = t3, n3[D3] = false;
    else if (typeof n3.setMaxListeners == "function") n3.setMaxListeners(t3);
    else throw new m4("eventTargets", ["EventEmitter", "EventTarget"], n3);
  }
  static listenerCount(t3, r3) {
    if (typeof t3.listenerCount == "function") return t3.listenerCount(r3);
    _4.prototype.listenerCount.call(t3, r3);
  }
  static init() {
    throw new Error("EventEmitter.init() is not implemented.");
  }
  static get captureRejections() {
    return this[h3];
  }
  static set captureRejections(t3) {
    this[h3] = t3;
  }
  static get defaultMaxListeners() {
    return g3;
  }
  static set defaultMaxListeners(t3) {
    g3 = t3;
  }
  constructor(t3) {
    this._events === void 0 || this._events === Object.getPrototypeOf(this)._events ? (this._events = { __proto__: null }, this._eventsCount = 0, this[y4] = false) : this[y4] = true, this._maxListeners = this._maxListeners || void 0, t3?.captureRejections ? this[h3] = !!t3.captureRejections : this[h3] = _4.prototype[h3];
  }
  setMaxListeners(t3) {
    return this._maxListeners = t3, this;
  }
  getMaxListeners() {
    return T5(this);
  }
  emit(t3, ...r3) {
    let n3 = t3 === "error", i4 = this._events;
    if (i4 !== void 0) n3 && i4[M4] !== void 0 && this.emit(M4, ...r3), n3 = n3 && i4.error === void 0;
    else if (!n3) return false;
    if (n3) {
      let s5;
      if (r3.length > 0 && (s5 = r3[0]), s5 instanceof Error) {
        try {
          let c6 = {};
          Error.captureStackTrace?.(c6, _4.prototype.emit), Object.defineProperty(s5, ie2, { __proto__: null, value: Function.prototype.bind(me2, this, s5, c6), configurable: true });
        } catch {
        }
        throw s5;
      }
      let u5;
      try {
        u5 = G3(s5);
      } catch {
        u5 = s5;
      }
      let a4 = new re2(u5);
      throw a4.context = s5, a4;
    }
    let o4 = i4[t3];
    if (o4 === void 0) return false;
    if (typeof o4 == "function") {
      let s5 = o4.apply(this, r3);
      s5 != null && K3(this, s5, t3, r3);
    } else {
      let s5 = o4.length, u5 = I3(o4);
      for (let a4 = 0; a4 < s5; ++a4) {
        let c6 = u5[a4].apply(this, r3);
        c6 != null && K3(this, c6, t3, r3);
      }
    }
    return true;
  }
  addListener(t3, r3) {
    return q3(this, t3, r3, false), this;
  }
  on(t3, r3) {
    return this.addListener(t3, r3);
  }
  prependListener(t3, r3) {
    return q3(this, t3, r3, true), this;
  }
  once(t3, r3) {
    return this.on(t3, z3(this, t3, r3)), this;
  }
  prependOnceListener(t3, r3) {
    return this.prependListener(t3, z3(this, t3, r3)), this;
  }
  removeListener(t3, r3) {
    let n3 = this._events;
    if (n3 === void 0) return this;
    let i4 = n3[t3];
    if (i4 === void 0) return this;
    if (i4 === r3 || i4.listener === r3) this._eventsCount -= 1, this[y4] ? n3[t3] = void 0 : this._eventsCount === 0 ? this._events = { __proto__: null } : (delete n3[t3], n3.removeListener && this.emit("removeListener", t3, i4.listener || r3));
    else if (typeof i4 != "function") {
      let o4 = -1;
      for (let s5 = i4.length - 1; s5 >= 0; s5--) if (i4[s5] === r3 || i4[s5].listener === r3) {
        o4 = s5;
        break;
      }
      if (o4 < 0) return this;
      o4 === 0 ? i4.shift() : ge2(i4, o4), i4.length === 1 && (n3[t3] = i4[0]), n3.removeListener !== void 0 && this.emit("removeListener", t3, r3);
    }
    return this;
  }
  off(t3, r3) {
    return this.removeListener(t3, r3);
  }
  removeAllListeners(t3) {
    let r3 = this._events;
    if (r3 === void 0) return this;
    if (r3.removeListener === void 0) return arguments.length === 0 ? (this._events = { __proto__: null }, this._eventsCount = 0) : r3[t3] !== void 0 && (--this._eventsCount === 0 ? this._events = { __proto__: null } : delete r3[t3]), this[y4] = false, this;
    if (arguments.length === 0) {
      for (let i4 of Reflect.ownKeys(r3)) i4 !== "removeListener" && this.removeAllListeners(i4);
      return this.removeAllListeners("removeListener"), this._events = { __proto__: null }, this._eventsCount = 0, this[y4] = false, this;
    }
    let n3 = r3[t3];
    if (typeof n3 == "function") this.removeListener(t3, n3);
    else if (n3 !== void 0) for (let i4 = n3.length - 1; i4 >= 0; i4--) this.removeListener(t3, n3[i4]);
    return this;
  }
  listeners(t3) {
    return B3(this, t3, true);
  }
  rawListeners(t3) {
    return B3(this, t3, false);
  }
  eventNames() {
    return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
  }
  listenerCount(t3, r3) {
    let n3 = this._events;
    if (n3 !== void 0) {
      let i4 = n3[t3];
      if (typeof i4 == "function") return r3 != null ? r3 === i4 || r3 === i4.listener ? 1 : 0 : 1;
      if (i4 !== void 0) {
        if (r3 != null) {
          let o4 = 0;
          for (let s5 = 0, u5 = i4.length; s5 < u5; s5++) (i4[s5] === r3 || i4[s5].listener === r3) && o4++;
          return o4;
        }
        return i4.length;
      }
    }
    return 0;
  }
};
var le2 = class extends f3 {
  constructor(e2) {
    let t3;
    typeof e2 == "string" ? (t3 = e2, e2 = void 0) : t3 = e2?.name || new.target.name, super(e2), this[v3] = new ue2(this, t3, e2);
  }
  emit(e2, ...t3) {
    if (this[v3] === void 0) throw new E4("EventEmitterAsyncResource");
    let { asyncResource: r3 } = this;
    return Array.prototype.unshift(t3, super.emit, this, e2), Reflect.apply(r3.runInAsyncScope, r3, t3);
  }
  emitDestroy() {
    if (this[v3] === void 0) throw new E4("EventEmitterAsyncResource");
    this.asyncResource.emitDestroy();
  }
  get asyncId() {
    if (this[v3] === void 0) throw new E4("EventEmitterAsyncResource");
    return this.asyncResource.asyncId();
  }
  get triggerAsyncId() {
    if (this[v3] === void 0) throw new E4("EventEmitterAsyncResource");
    return this.asyncResource.triggerAsyncId();
  }
  get asyncResource() {
    if (this[v3] === void 0) throw new E4("EventEmitterAsyncResource");
    return this[v3];
  }
};
var ue2 = class extends i2 {
  constructor(e2, t3, r3) {
    super(t3, r3), this[S5] = e2;
  }
  get eventEmitter() {
    if (this[S5] === void 0) throw new E4("EventEmitterReferencingAsyncResource");
    return this[S5];
  }
};
var ae2 = function(e2, t3, r3 = {}) {
  let n3 = r3.signal;
  if (n3?.aborted) throw new b4(void 0, { cause: n3?.reason });
  let i4 = r3.highWaterMark ?? r3.highWatermark ?? Number.MAX_SAFE_INTEGER, o4 = r3.lowWaterMark ?? r3.lowWatermark ?? 1, s5 = new N3(), u5 = new N3(), a4 = false, c6 = null, p5 = false, d7 = 0, J4 = Object.setPrototypeOf({ next() {
    if (d7) {
      let l7 = s5.shift();
      return d7--, a4 && d7 < o4 && (e2.resume?.(), a4 = false), Promise.resolve(j3(l7, false));
    }
    if (c6) {
      let l7 = Promise.reject(c6);
      return c6 = null, l7;
    }
    return p5 ? w6() : new Promise(function(l7, Z4) {
      u5.push({ resolve: l7, reject: Z4 });
    });
  }, return() {
    return w6();
  }, throw(l7) {
    if (!l7 || !(l7 instanceof Error)) throw new m4("EventEmitter.AsyncIterator", "Error", l7);
    A6(l7);
  }, [Symbol.asyncIterator]() {
    return this;
  }, [se2]: { get size() {
    return d7;
  }, get low() {
    return o4;
  }, get high() {
    return i4;
  }, get isPaused() {
    return a4;
  } } }, te2), { addEventListener: R6, removeAll: Q4 } = ye2();
  R6(e2, t3, r3[oe2] ? W4 : function(...l7) {
    return W4(l7);
  }), t3 !== "error" && typeof e2.on == "function" && R6(e2, "error", A6);
  let F3 = r3?.close;
  if (F3?.length) for (let l7 of F3) R6(e2, l7, w6);
  let V4 = n3 ? U3(n3, Y4) : null;
  return J4;
  function Y4() {
    A6(new b4(void 0, { cause: n3?.reason }));
  }
  function W4(l7) {
    u5.isEmpty() ? (d7++, !a4 && d7 > i4 && (a4 = true, e2.pause?.()), s5.push(l7)) : u5.shift().resolve(j3(l7, false));
  }
  function A6(l7) {
    u5.isEmpty() ? c6 = l7 : u5.shift().reject(l7), w6();
  }
  function w6() {
    V4?.[Symbol.dispose](), Q4(), p5 = true;
    let l7 = j3(void 0, true);
    for (; !u5.isEmpty(); ) u5.shift().resolve(l7);
    return Promise.resolve(l7);
  }
};
var ce2 = async function(e2, t3, r3 = {}) {
  let n3 = r3?.signal;
  if (n3?.aborted) throw new b4(void 0, { cause: n3?.reason });
  return new Promise((i4, o4) => {
    let s5 = (p5) => {
      typeof e2.removeListener == "function" && e2.removeListener(t3, u5), n3 != null && L3(n3, "abort", c6), o4(p5);
    }, u5 = (...p5) => {
      typeof e2.removeListener == "function" && e2.removeListener("error", s5), n3 != null && L3(n3, "abort", c6), i4(p5);
    }, a4 = { __proto__: null, once: true, [P4]: true };
    O3(e2, t3, u5, a4), t3 !== "error" && typeof e2.once == "function" && e2.once("error", s5);
    function c6() {
      L3(e2, t3, u5), L3(e2, "error", s5), o4(new b4(void 0, { cause: n3?.reason }));
    }
    n3 != null && O3(n3, "abort", c6, { __proto__: null, once: true, [P4]: true });
  });
};
var U3 = function(e2, t3) {
  if (e2 === void 0) throw new m4("signal", "AbortSignal", e2);
  let r3;
  return e2.aborted ? queueMicrotask(() => t3()) : (e2.addEventListener("abort", t3, { __proto__: null, once: true, [P4]: true }), r3 = () => {
    e2.removeEventListener("abort", t3);
  }), { __proto__: null, [Symbol.dispose]() {
    r3?.();
  } };
};
var he2 = function(e2, t3) {
  if (typeof e2.listeners == "function") return e2.listeners(t3);
  if (H3(e2)) {
    let r3 = e2[kEvents].get(t3), n3 = [], i4 = r3?.next;
    for (; i4?.listener !== void 0; ) {
      let o4 = i4.listener?.deref ? i4.listener.deref() : i4.listener;
      n3.push(o4), i4 = i4.next;
    }
    return n3;
  }
  throw new m4("emitter", ["EventEmitter", "EventTarget"], e2);
};
var fe2 = function(e2) {
  if (typeof e2?.getMaxListeners == "function") return T5(e2);
  if (e2?.[x4]) return e2[x4];
  throw new m4("emitter", ["EventEmitter", "EventTarget"], e2);
};
var X3 = 2048;
var k3 = X3 - 1;
var $3 = class {
  bottom;
  top;
  list;
  next;
  constructor() {
    this.bottom = 0, this.top = 0, this.list = new Array(X3), this.next = null;
  }
  isEmpty() {
    return this.top === this.bottom;
  }
  isFull() {
    return (this.top + 1 & k3) === this.bottom;
  }
  push(e2) {
    this.list[this.top] = e2, this.top = this.top + 1 & k3;
  }
  shift() {
    let e2 = this.list[this.bottom];
    return e2 === void 0 ? null : (this.list[this.bottom] = void 0, this.bottom = this.bottom + 1 & k3, e2);
  }
};
var N3 = class {
  head;
  tail;
  constructor() {
    this.head = this.tail = new $3();
  }
  isEmpty() {
    return this.head.isEmpty();
  }
  push(e2) {
    this.head.isFull() && (this.head = this.head.next = new $3()), this.head.push(e2);
  }
  shift() {
    let e2 = this.tail, t3 = e2.shift();
    return e2.isEmpty() && e2.next !== null && (this.tail = e2.next, e2.next = null), t3;
  }
};
function H3(e2) {
  return typeof e2?.addEventListener == "function";
}
function K3(e2, t3, r3, n3) {
  if (e2[h3]) try {
    let i4 = t3.then;
    typeof i4 == "function" && i4.call(t3, void 0, function(o4) {
      process.nextTick(ve2, e2, o4, r3, n3);
    });
  } catch (i4) {
    e2.emit("error", i4);
  }
}
function ve2(e2, t3, r3, n3) {
  if (typeof e2[C3] == "function") e2[C3](t3, r3, ...n3);
  else {
    let i4 = e2[h3];
    try {
      e2[h3] = false, e2.emit("error", t3);
    } finally {
      e2[h3] = i4;
    }
  }
}
function T5(e2) {
  return e2._maxListeners === void 0 ? g3 : e2._maxListeners;
}
function me2(e2, t3) {
  let r3 = "";
  try {
    let { name: o4 } = this.constructor;
    o4 !== "EventEmitter" && (r3 = ` on ${o4} instance`);
  } catch {
  }
  let n3 = `
Emitted 'error' event${r3} at:
`, i4 = (t3.stack || "").split(`
`).slice(1);
  return e2.stack + n3 + i4.join(`
`);
}
function q3(e2, t3, r3, n3) {
  let i4, o4, s5;
  if (o4 = e2._events, o4 === void 0 ? (o4 = e2._events = { __proto__: null }, e2._eventsCount = 0) : (o4.newListener !== void 0 && (e2.emit("newListener", t3, r3.listener ?? r3), o4 = e2._events), s5 = o4[t3]), s5 === void 0) o4[t3] = r3, ++e2._eventsCount;
  else if (typeof s5 == "function" ? s5 = o4[t3] = n3 ? [r3, s5] : [s5, r3] : n3 ? s5.unshift(r3) : s5.push(r3), i4 = T5(e2), i4 > 0 && s5.length > i4 && !s5.warned) {
    s5.warned = true;
    let u5 = new ne2(`Possible EventEmitter memory leak detected. ${s5.length} ${String(t3)} listeners added to ${G3(e2, { depth: -1 })}. MaxListeners is ${i4}. Use emitter.setMaxListeners() to increase limit`, { name: "MaxListenersExceededWarning", emitter: e2, type: t3, count: s5.length });
    process.emitWarning(u5);
  }
  return e2;
}
function pe2() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function z3(e2, t3, r3) {
  let n3 = { fired: false, wrapFn: void 0, target: e2, type: t3, listener: r3 }, i4 = pe2.bind(n3);
  return i4.listener = r3, n3.wrapFn = i4, i4;
}
function B3(e2, t3, r3) {
  let n3 = e2._events;
  if (n3 === void 0) return [];
  let i4 = n3[t3];
  return i4 === void 0 ? [] : typeof i4 == "function" ? r3 ? [i4.listener || i4] : [i4] : r3 ? de2(i4) : I3(i4);
}
function I3(e2) {
  switch (e2.length) {
    case 2:
      return [e2[0], e2[1]];
    case 3:
      return [e2[0], e2[1], e2[2]];
    case 4:
      return [e2[0], e2[1], e2[2], e2[3]];
    case 5:
      return [e2[0], e2[1], e2[2], e2[3], e2[4]];
    case 6:
      return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5]];
  }
  return Array.prototype.slice(e2);
}
function de2(e2) {
  let t3 = I3(e2);
  for (let r3 = 0; r3 < t3.length; ++r3) {
    let n3 = t3[r3].listener;
    typeof n3 == "function" && (t3[r3] = n3);
  }
  return t3;
}
function j3(e2, t3) {
  return { value: e2, done: t3 };
}
function L3(e2, t3, r3, n3) {
  if (typeof e2.removeListener == "function") e2.removeListener(t3, r3);
  else if (typeof e2.removeEventListener == "function") e2.removeEventListener(t3, r3, n3);
  else throw new m4("emitter", "EventEmitter", e2);
}
function O3(e2, t3, r3, n3) {
  if (typeof e2.on == "function") n3?.once ? e2.once(t3, r3) : e2.on(t3, r3);
  else if (typeof e2.addEventListener == "function") e2.addEventListener(t3, r3, n3);
  else throw new m4("emitter", "EventEmitter", e2);
}
function ye2() {
  let e2 = [];
  return { addEventListener(t3, r3, n3, i4) {
    O3(t3, r3, n3, i4), Array.prototype.push(e2, [t3, r3, n3, i4]);
  }, removeAll() {
    for (; e2.length > 0; ) Reflect.apply(L3, void 0, e2.pop());
  } };
}
function ge2(e2, t3) {
  for (; t3 + 1 < e2.length; t3++) e2[t3] = e2[t3 + 1];
  e2.pop();
}
var we2 = f3.usingDomains;
var be2 = f3.captureRejectionSymbol;
var Re2 = f3.errorMonitor;
var Ae2 = f3.defaultMaxListeners;
var Me2 = f3.setMaxListeners;
var Se2 = f3.listenerCount;
var ke2 = f3.init;

// https://esm.sh/node/chunk-AAUDITJX.mjs
function s3(...r3) {
  return function(...e2) {
    for (let t3 of r3) t3(...e2);
  };
}
function a3(r3) {
  return new Error(`[unenv] ${r3} is not implemented yet!`);
}
var c3 = class d5 extends f3 {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(e2, t3) {
    return new d5(t3);
  }
  constructor(e2) {
    super();
  }
  _read(e2) {
  }
  read(e2) {
  }
  setEncoding(e2) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(e2) {
    return this;
  }
  unshift(e2, t3) {
  }
  wrap(e2) {
    return this;
  }
  push(e2, t3) {
    return false;
  }
  _destroy(e2, t3) {
    this.removeAllListeners();
  }
  destroy(e2) {
    return this.destroyed = true, this._destroy(e2), this;
  }
  pipe(e2, t3) {
    return {};
  }
  compose(e2, t3) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    return this.destroy(), Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw a3("Readable.asyncIterator");
  }
  iterator(e2) {
    throw a3("Readable.iterator");
  }
  map(e2, t3) {
    throw a3("Readable.map");
  }
  filter(e2, t3) {
    throw a3("Readable.filter");
  }
  forEach(e2, t3) {
    throw a3("Readable.forEach");
  }
  reduce(e2, t3, i4) {
    throw a3("Readable.reduce");
  }
  find(e2, t3) {
    throw a3("Readable.find");
  }
  findIndex(e2, t3) {
    throw a3("Readable.findIndex");
  }
  some(e2, t3) {
    throw a3("Readable.some");
  }
  toArray(e2) {
    throw a3("Readable.toArray");
  }
  every(e2, t3) {
    throw a3("Readable.every");
  }
  flatMap(e2, t3) {
    throw a3("Readable.flatMap");
  }
  drop(e2, t3) {
    throw a3("Readable.drop");
  }
  take(e2, t3) {
    throw a3("Readable.take");
  }
  asIndexedPairs(e2) {
    throw a3("Readable.asIndexedPairs");
  }
};
var l4 = globalThis.Readable || c3;
var p2 = class extends f3 {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(r3) {
    super();
  }
  pipe(r3, e2) {
    return {};
  }
  _write(r3, e2, t3) {
    if (this.writableEnded) {
      t3 && t3();
      return;
    }
    if (this._data === void 0) this._data = r3;
    else {
      let i4 = typeof this._data == "string" ? Buffer.from(this._data, this._encoding || e2 || "utf8") : this._data, o4 = typeof r3 == "string" ? Buffer.from(r3, e2 || this._encoding || "utf8") : r3;
      this._data = Buffer.concat([i4, o4]);
    }
    this._encoding = e2, t3 && t3();
  }
  _writev(r3, e2) {
  }
  _destroy(r3, e2) {
  }
  _final(r3) {
  }
  write(r3, e2, t3) {
    let i4 = typeof e2 == "string" ? this._encoding : "utf-8", o4 = typeof e2 == "function" ? e2 : typeof t3 == "function" ? t3 : void 0;
    return this._write(r3, i4, o4), true;
  }
  setDefaultEncoding(r3) {
    return this;
  }
  end(r3, e2, t3) {
    let i4 = typeof r3 == "function" ? r3 : typeof e2 == "function" ? e2 : typeof t3 == "function" ? t3 : void 0;
    if (this.writableEnded) return i4 && i4(), this;
    let o4 = r3 === i4 ? void 0 : r3;
    if (o4) {
      let u5 = e2 === i4 ? void 0 : e2;
      this.write(o4, u5, i4);
    }
    return this.writableEnded = true, this.writableFinished = true, this.emit("close"), this.emit("finish"), this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(r3) {
    return this.destroyed = true, delete this._data, this.removeAllListeners(), this;
  }
  compose(r3, e2) {
    throw new Error("[h3] Method not implemented.");
  }
};
var h4 = globalThis.Writable || p2;
var n2 = class {
  allowHalfOpen = true;
  _destroy;
  constructor(r3 = new l4(), e2 = new h4()) {
    Object.assign(this, r3), Object.assign(this, e2), this._destroy = s3(r3._destroy, e2._destroy);
  }
};
function _5() {
  return Object.assign(n2.prototype, l4.prototype), Object.assign(n2.prototype, h4.prototype), n2;
}
var w3 = _5();
var E5 = globalThis.Duplex || w3;

// https://esm.sh/node/stream.mjs
var u3 = function() {
};
function s4(e2, t3 = {}) {
  u3.prototype.name = e2;
  let i4 = {};
  return new Proxy(u3, { get(n3, a4) {
    return a4 === "caller" ? null : a4 === "__createMock__" ? s4 : a4 === "__unenv__" ? true : a4 in t3 ? t3[a4] : i4[a4] = i4[a4] || s4(`${e2}.${a4.toString()}`);
  }, apply(n3, a4, f5) {
    return s4(`${e2}()`);
  }, construct(n3, a4, f5) {
    return s4(`[${e2}]`);
  }, enumerate() {
    return [];
  } });
}
var o2 = s4("mock");
function p3(e2) {
  return new Error(`[unenv] ${e2} is not implemented yet!`);
}
function r2(e2) {
  return Object.assign(() => {
    throw p3(e2);
  }, { __unenv__: true });
}
var l5 = r2("stream.promises.finished");
var c4 = r2("stream.promises.pipeline");
var y5 = class extends E5 {
  __unenv__ = true;
  _transform(e2, t3, i4) {
  }
  _flush(e2) {
  }
};
var h5 = globalThis.Transform || y5;
var v4 = o2.__createMock__("Stream");
var g4 = o2.__createMock__("PassThrough");
var A4 = r2("stream.pipeline");
var T6 = r2("stream.finished");
var x5 = r2("stream.addAbortSignal");
var S6 = r2("stream.isDisturbed");
var $4 = r2("stream.isReadable");
var w4 = r2("stream.compose");
var D4 = r2("stream.isErrored");
var E6 = r2("stream.destroy");
var P5 = r2("stream._isUint8Array");
var R4 = r2("stream._uint8ArrayToBuffer");

// https://esm.sh/node/zlib.mjs
function t2(_6) {
  return new Error(`[unenv] ${_6} is not implemented yet!`);
}
function R5(_6) {
  return Object.assign(() => {
    throw t2(_6);
  }, { __unenv__: true });
}
var U4 = Object.defineProperty;
var T7 = (_6, E7) => {
  for (var O4 in E7) U4(_6, O4, { get: E7[O4], enumerable: true });
};
var i3 = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_VERSION_ERROR: -6, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, ZLIB_VERNUM: 4817, DEFLATE: 1, INFLATE: 2, GZIP: 3, GUNZIP: 4, DEFLATERAW: 5, INFLATERAW: 6, UNZIP: 7, BROTLI_DECODE: 8, BROTLI_ENCODE: 9, Z_MIN_WINDOWBITS: 8, Z_MAX_WINDOWBITS: 15, Z_DEFAULT_WINDOWBITS: 15, Z_MIN_CHUNK: 64, Z_MAX_CHUNK: Number.POSITIVE_INFINITY, Z_DEFAULT_CHUNK: 16384, Z_MIN_MEMLEVEL: 1, Z_MAX_MEMLEVEL: 9, Z_DEFAULT_MEMLEVEL: 8, Z_MIN_LEVEL: -1, Z_MAX_LEVEL: 9, Z_DEFAULT_LEVEL: -1, BROTLI_OPERATION_PROCESS: 0, BROTLI_OPERATION_FLUSH: 1, BROTLI_OPERATION_FINISH: 2, BROTLI_OPERATION_EMIT_METADATA: 3, BROTLI_PARAM_MODE: 0, BROTLI_MODE_GENERIC: 0, BROTLI_MODE_TEXT: 1, BROTLI_MODE_FONT: 2, BROTLI_DEFAULT_MODE: 0, BROTLI_PARAM_QUALITY: 1, BROTLI_MIN_QUALITY: 0, BROTLI_MAX_QUALITY: 11, BROTLI_DEFAULT_QUALITY: 11, BROTLI_PARAM_LGWIN: 2, BROTLI_MIN_WINDOW_BITS: 10, BROTLI_MAX_WINDOW_BITS: 24, BROTLI_LARGE_MAX_WINDOW_BITS: 30, BROTLI_DEFAULT_WINDOW: 22, BROTLI_PARAM_LGBLOCK: 3, BROTLI_MIN_INPUT_BLOCK_BITS: 16, BROTLI_MAX_INPUT_BLOCK_BITS: 24, BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING: 4, BROTLI_PARAM_SIZE_HINT: 5, BROTLI_PARAM_LARGE_WINDOW: 6, BROTLI_PARAM_NPOSTFIX: 7, BROTLI_PARAM_NDIRECT: 8, BROTLI_DECODER_RESULT_ERROR: 0, BROTLI_DECODER_RESULT_SUCCESS: 1, BROTLI_DECODER_RESULT_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_RESULT_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION: 0, BROTLI_DECODER_PARAM_LARGE_WINDOW: 1, BROTLI_DECODER_NO_ERROR: 0, BROTLI_DECODER_SUCCESS: 1, BROTLI_DECODER_NEEDS_MORE_INPUT: 2, BROTLI_DECODER_NEEDS_MORE_OUTPUT: 3, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_NIBBLE: -1, BROTLI_DECODER_ERROR_FORMAT_RESERVED: -2, BROTLI_DECODER_ERROR_FORMAT_EXUBERANT_META_NIBBLE: -3, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_ALPHABET: -4, BROTLI_DECODER_ERROR_FORMAT_SIMPLE_HUFFMAN_SAME: -5, BROTLI_DECODER_ERROR_FORMAT_CL_SPACE: -6, BROTLI_DECODER_ERROR_FORMAT_HUFFMAN_SPACE: -7, BROTLI_DECODER_ERROR_FORMAT_CONTEXT_MAP_REPEAT: -8, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_1: -9, BROTLI_DECODER_ERROR_FORMAT_BLOCK_LENGTH_2: -10, BROTLI_DECODER_ERROR_FORMAT_TRANSFORM: -11, BROTLI_DECODER_ERROR_FORMAT_DICTIONARY: -12, BROTLI_DECODER_ERROR_FORMAT_WINDOW_BITS: -13, BROTLI_DECODER_ERROR_FORMAT_PADDING_1: -14, BROTLI_DECODER_ERROR_FORMAT_PADDING_2: -15, BROTLI_DECODER_ERROR_FORMAT_DISTANCE: -16, BROTLI_DECODER_ERROR_DICTIONARY_NOT_SET: -19, BROTLI_DECODER_ERROR_INVALID_ARGUMENTS: -20, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MODES: -21, BROTLI_DECODER_ERROR_ALLOC_TREE_GROUPS: -22, BROTLI_DECODER_ERROR_ALLOC_CONTEXT_MAP: -25, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_1: -26, BROTLI_DECODER_ERROR_ALLOC_RING_BUFFER_2: -27, BROTLI_DECODER_ERROR_ALLOC_BLOCK_TYPE_TREES: -30, BROTLI_DECODER_ERROR_UNREACHABLE: -31 };
var u4 = { 0: "Z_OK", 1: "Z_STREAM_END", 2: "Z_NEED_DICT", Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_MEM_ERROR: -4, Z_BUF_ERROR: -5, Z_VERSION_ERROR: -6, "-1": "Z_ERRNO", "-2": "Z_STREAM_ERROR", "-3": "Z_DATA_ERROR", "-4": "Z_MEM_ERROR", "-5": "Z_BUF_ERROR", "-6": "Z_VERSION_ERROR" };
var o3 = {};
T7(o3, { BrotliCompress: () => B4, BrotliDecompress: () => l6, brotliCompress: () => P6, brotliCompressSync: () => y6, brotliDecompress: () => w5, brotliDecompressSync: () => b5, createBrotliCompress: () => z4, createBrotliDecompress: () => d6 });
var I4 = class extends h5 {
  __unenv__ = true;
  bytesRead = 0;
  bytesWritten = 0;
  constructor(_6) {
    throw super(_6), t2("zlib is not implemented yet!");
  }
  close(_6) {
    typeof _6 == "function" && _6();
  }
  flush(_6, E7) {
    typeof E7 == "function" && E7();
  }
};
var D5 = class extends I4 {
};
function e(_6) {
  let E7 = function(O4, s5, r3) {
    let n3 = typeof s5 == "function" ? s5 : r3, a4 = new Error(`[unenv] zlib ${_6} compression not supported.`);
    if (typeof n3 == "function") n3(a4, Buffer.from(""));
    else throw a4;
  };
  return Object.assign(E7, { __promisify__: (O4, s5) => new Promise((r3, n3) => {
    E7(O4, s5, (a4, F3) => a4 ? n3(a4) : r3(F3));
  }) });
}
var B4 = class extends I4 {
  _format = "brotli";
};
var P6 = e("brotliCompress");
var z4 = () => new B4();
var y6 = R5("zlib.brotliCompressSync");
var l6 = class extends D5 {
  _format = "brotli";
};
var w5 = e("brotliDecompress");
var d6 = () => new l6();
var b5 = R5("zlib.brotliDecompressSync");
var N4 = {};
T7(N4, { Deflate: () => L4, DeflateRaw: () => S7, Inflate: () => A5, InflateRaw: () => c5, createDeflate: () => W3, createDeflateRaw: () => K4, createInflate: () => X4, createInflateRaw: () => h6, deflate: () => G4, deflateRaw: () => x6, deflateRawSync: () => V3, deflateSync: () => v5, inflate: () => H4, inflateRaw: () => Y3, inflateRawSync: () => Q3, inflateSync: () => g5 });
var L4 = class extends I4 {
  _format = "deflate";
  params(_6, E7, O4) {
    throw t2("Deflate.params");
  }
  reset() {
    throw t2("Deflate.reset");
  }
};
var G4 = e("deflate");
var W3 = () => new L4();
var v5 = R5("zlib.deflateSync");
var A5 = class extends D5 {
  _format = "deflate";
  reset() {
    throw t2("Inflate.reset");
  }
};
var H4 = e("inflate");
var X4 = () => new A5();
var g5 = R5("zlib.inflateSync");
var S7 = class extends L4 {
};
var x6 = e("deflateRaw");
var K4 = () => new S7();
var V3 = R5("zlib.deflateRawSync");
var c5 = class extends A5 {
};
var Y3 = e("inflateRaw");
var h6 = () => new c5();
var Q3 = R5("zlib.inflateRawSync");
var f4 = {};
T7(f4, { Gunzip: () => M5, Gzip: () => C4, createGunzip: () => J3, createGzip: () => $5, gunzip: () => q4, gunzipSync: () => __, gzip: () => j4, gzipSync: () => k4 });
var C4 = class extends I4 {
  _format = "gzip";
};
var j4 = e("gzip");
var $5 = () => new C4();
var k4 = R5("zlib.gzipSync");
var M5 = class extends D5 {
  _format = "gzip";
};
var q4 = e("gunzip");
var J3 = () => new M5();
var __ = R5("zlib.gunzipSync");
var p4 = {};
T7(p4, { Unzip: () => Z3, createUnzip: () => R_, unzip: () => E_, unzipSync: () => e_ });
var Z3 = class extends I4 {
  _format = "zip";
};
var R_ = () => new Z3();
var E_ = R5("zlib.unzip");
var e_ = R5("zlib.unzipSync");
var O_ = 0;
var t_ = 1;
var a_ = 1;
var T_ = 2;
var I_ = 8;
var A_ = { ...i3, ...o3, ...N4, ...f4, ...p4, codes: u4, constants: i3, Z_BINARY: O_, Z_TEXT: t_, Z_ASCII: a_, Z_UNKNOWN: T_, Z_DEFLATED: I_ };

// https://esm.sh/kaitai-struct@0.11.0/es2022/kaitai-struct.development.mjs
var require4 = (n3) => {
  const e2 = (m5) => typeof m5.default < "u" ? m5.default : m5, c6 = (m5) => Object.assign({ __esModule: true }, m5);
  switch (n3) {
    case "iconv-lite":
      return e2(iconv_lite_target_es2022_dev_exports);
    case "node:zlib":
      return e2(zlib_exports);
    default:
      console.error('module "' + n3 + '" not found');
      return null;
  }
};
var __create2 = Object.create;
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __require2 = /* @__PURE__ */ ((x7) => typeof require4 !== "undefined" ? require4 : typeof Proxy !== "undefined" ? new Proxy(x7, {
  get: (a4, b6) => (typeof require4 !== "undefined" ? require4 : a4)[b6]
}) : x7)(function(x7) {
  if (typeof require4 !== "undefined") return require4.apply(this, arguments);
  throw Error('Dynamic require of "' + x7 + '" is not supported');
});
var __commonJS2 = (cb, mod) => function __require22() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps2 = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames2(from))
      if (!__hasOwnProp2.call(to, key) && key !== except)
        __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp3(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_KaitaiStream = __commonJS2({
  "node_modules/kaitai-struct/KaitaiStream.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.KaitaiStream = factory());
    })(exports, function() {
      "use strict";
      var extendStatics = function(d7, b6) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d22, b22) {
          d22.__proto__ = b22;
        } || function(d22, b22) {
          for (var p5 in b22) if (Object.prototype.hasOwnProperty.call(b22, p5)) d22[p5] = b22[p5];
        };
        return extendStatics(d7, b6);
      };
      function __extends(d7, b6) {
        if (typeof b6 !== "function" && b6 !== null)
          throw new TypeError("Class extends value " + String(b6) + " is not a constructor or null");
        extendStatics(d7, b6);
        function __2() {
          this.constructor = d7;
        }
        d7.prototype = b6 === null ? Object.create(b6) : (__2.prototype = b6.prototype, new __2());
      }
      typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e2 = new Error(message);
        return e2.name = "SuppressedError", e2.error = error, e2.suppressed = suppressed, e2;
      };
      var KaitaiStream2 = (
        /** @class */
        function() {
          function KaitaiStream3(arrayBuffer, byteOffset) {
            this._byteLength = 0;
            this._byteOffset = 0;
            this.bits = 0;
            this.bitsLeft = 0;
            this._byteOffset = byteOffset || 0;
            if (arrayBuffer instanceof ArrayBuffer) {
              this.buffer = arrayBuffer;
            } else if (typeof arrayBuffer == "object") {
              this.dataView = arrayBuffer;
              if (byteOffset) {
                this._byteOffset += byteOffset;
              }
            } else {
              this.buffer = new ArrayBuffer(arrayBuffer || 1);
            }
            this.pos = 0;
            this.alignToByte();
          }
          Object.defineProperty(KaitaiStream3.prototype, "buffer", {
            /**
             * Gets the backing ArrayBuffer of the KaitaiStream object.
             *
             * @returns The backing ArrayBuffer.
             */
            get: function() {
              this._trimAlloc();
              return this._buffer;
            },
            /**
             * Sets the backing ArrayBuffer of the KaitaiStream object and updates the
             * DataView to point to the new buffer.
             */
            set: function(v6) {
              this._buffer = v6;
              this._dataView = new DataView(this._buffer, this._byteOffset);
              this._byteLength = this._buffer.byteLength;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(KaitaiStream3.prototype, "byteOffset", {
            /**
             * Gets the byteOffset of the KaitaiStream object.
             *
             * @returns The byteOffset.
             */
            get: function() {
              return this._byteOffset;
            },
            /**
             * Sets the byteOffset of the KaitaiStream object and updates the DataView to
             * point to the new byteOffset.
             */
            set: function(v6) {
              this._byteOffset = v6;
              this._dataView = new DataView(this._buffer, this._byteOffset);
              this._byteLength = this._buffer.byteLength;
            },
            enumerable: false,
            configurable: true
          });
          Object.defineProperty(KaitaiStream3.prototype, "dataView", {
            /**
             * Gets the backing DataView of the KaitaiStream object.
             *
             * @returns The backing DataView.
             */
            get: function() {
              return this._dataView;
            },
            /**
             * Sets the backing DataView of the KaitaiStream object and updates the buffer
             * and byteOffset to point to the DataView values.
             */
            set: function(v6) {
              this._byteOffset = v6.byteOffset;
              this._buffer = v6.buffer;
              this._dataView = new DataView(this._buffer, this._byteOffset);
              this._byteLength = this._byteOffset + v6.byteLength;
            },
            enumerable: false,
            configurable: true
          });
          KaitaiStream3.prototype._trimAlloc = function() {
            if (this._byteLength === this._buffer.byteLength) {
              return;
            }
            var buf = new ArrayBuffer(this._byteLength);
            var dst = new Uint8Array(buf);
            var src = new Uint8Array(this._buffer, 0, dst.length);
            dst.set(src);
            this.buffer = buf;
          };
          KaitaiStream3.prototype.isEof = function() {
            return this.pos >= this.size && this.bitsLeft === 0;
          };
          KaitaiStream3.prototype.seek = function(pos) {
            var npos = Math.max(0, Math.min(this.size, pos));
            this.pos = isNaN(npos) || !isFinite(npos) ? 0 : npos;
          };
          Object.defineProperty(KaitaiStream3.prototype, "size", {
            /**
             * Returns the byte length of the KaitaiStream object.
             *
             * @returns The byte length.
             */
            get: function() {
              return this._byteLength - this._byteOffset;
            },
            enumerable: false,
            configurable: true
          });
          KaitaiStream3.prototype.readS1 = function() {
            this.ensureBytesLeft(1);
            var v6 = this._dataView.getInt8(this.pos);
            this.pos += 1;
            return v6;
          };
          KaitaiStream3.prototype.readS2be = function() {
            this.ensureBytesLeft(2);
            var v6 = this._dataView.getInt16(this.pos);
            this.pos += 2;
            return v6;
          };
          KaitaiStream3.prototype.readS4be = function() {
            this.ensureBytesLeft(4);
            var v6 = this._dataView.getInt32(this.pos);
            this.pos += 4;
            return v6;
          };
          KaitaiStream3.prototype.readS8be = function() {
            this.ensureBytesLeft(8);
            var v1 = this.readU4be();
            var v22 = this.readU4be();
            if ((v1 & 2147483648) !== 0) {
              return -(4294967296 * (v1 ^ 4294967295) + (v22 ^ 4294967295)) - 1;
            } else {
              return 4294967296 * v1 + v22;
            }
          };
          KaitaiStream3.prototype.readS2le = function() {
            this.ensureBytesLeft(2);
            var v6 = this._dataView.getInt16(this.pos, true);
            this.pos += 2;
            return v6;
          };
          KaitaiStream3.prototype.readS4le = function() {
            this.ensureBytesLeft(4);
            var v6 = this._dataView.getInt32(this.pos, true);
            this.pos += 4;
            return v6;
          };
          KaitaiStream3.prototype.readS8le = function() {
            this.ensureBytesLeft(8);
            var v1 = this.readU4le();
            var v22 = this.readU4le();
            if ((v22 & 2147483648) !== 0) {
              return -(4294967296 * (v22 ^ 4294967295) + (v1 ^ 4294967295)) - 1;
            } else {
              return 4294967296 * v22 + v1;
            }
          };
          KaitaiStream3.prototype.readU1 = function() {
            this.ensureBytesLeft(1);
            var v6 = this._dataView.getUint8(this.pos);
            this.pos += 1;
            return v6;
          };
          KaitaiStream3.prototype.readU2be = function() {
            this.ensureBytesLeft(2);
            var v6 = this._dataView.getUint16(this.pos);
            this.pos += 2;
            return v6;
          };
          KaitaiStream3.prototype.readU4be = function() {
            this.ensureBytesLeft(4);
            var v6 = this._dataView.getUint32(this.pos);
            this.pos += 4;
            return v6;
          };
          KaitaiStream3.prototype.readU8be = function() {
            this.ensureBytesLeft(8);
            var v1 = this.readU4be();
            var v22 = this.readU4be();
            return 4294967296 * v1 + v22;
          };
          KaitaiStream3.prototype.readU2le = function() {
            this.ensureBytesLeft(2);
            var v6 = this._dataView.getUint16(this.pos, true);
            this.pos += 2;
            return v6;
          };
          KaitaiStream3.prototype.readU4le = function() {
            this.ensureBytesLeft(4);
            var v6 = this._dataView.getUint32(this.pos, true);
            this.pos += 4;
            return v6;
          };
          KaitaiStream3.prototype.readU8le = function() {
            this.ensureBytesLeft(8);
            var v1 = this.readU4le();
            var v22 = this.readU4le();
            return 4294967296 * v22 + v1;
          };
          KaitaiStream3.prototype.readF4be = function() {
            this.ensureBytesLeft(4);
            var v6 = this._dataView.getFloat32(this.pos);
            this.pos += 4;
            return v6;
          };
          KaitaiStream3.prototype.readF8be = function() {
            this.ensureBytesLeft(8);
            var v6 = this._dataView.getFloat64(this.pos);
            this.pos += 8;
            return v6;
          };
          KaitaiStream3.prototype.readF4le = function() {
            this.ensureBytesLeft(4);
            var v6 = this._dataView.getFloat32(this.pos, true);
            this.pos += 4;
            return v6;
          };
          KaitaiStream3.prototype.readF8le = function() {
            this.ensureBytesLeft(8);
            var v6 = this._dataView.getFloat64(this.pos, true);
            this.pos += 8;
            return v6;
          };
          KaitaiStream3.prototype.alignToByte = function() {
            this.bitsLeft = 0;
            this.bits = 0;
          };
          KaitaiStream3.prototype.readBitsIntBe = function(n3) {
            if (n3 > 32) {
              throw new RangeError("readBitsIntBe: the maximum supported bit length is 32 (tried to read " + n3 + " bits)");
            }
            var res = 0;
            var bitsNeeded = n3 - this.bitsLeft;
            this.bitsLeft = -bitsNeeded & 7;
            if (bitsNeeded > 0) {
              var bytesNeeded = (bitsNeeded - 1 >> 3) + 1;
              var buf = this.readBytes(bytesNeeded);
              for (var i4 = 0; i4 < bytesNeeded; i4++) {
                res = res << 8 | buf[i4];
              }
              var newBits = res;
              res = res >>> this.bitsLeft | this.bits << bitsNeeded;
              this.bits = newBits;
            } else {
              res = this.bits >>> -bitsNeeded;
            }
            var mask = (1 << this.bitsLeft) - 1;
            this.bits &= mask;
            return res >>> 0;
          };
          KaitaiStream3.prototype.readBitsInt = function(n3) {
            return this.readBitsIntBe(n3);
          };
          KaitaiStream3.prototype.readBitsIntLe = function(n3) {
            if (n3 > 32) {
              throw new RangeError("readBitsIntLe: the maximum supported bit length is 32 (tried to read " + n3 + " bits)");
            }
            var res = 0;
            var bitsNeeded = n3 - this.bitsLeft;
            if (bitsNeeded > 0) {
              var bytesNeeded = (bitsNeeded - 1 >> 3) + 1;
              var buf = this.readBytes(bytesNeeded);
              for (var i4 = 0; i4 < bytesNeeded; i4++) {
                res |= buf[i4] << i4 * 8;
              }
              var newBits = bitsNeeded < 32 ? res >>> bitsNeeded : 0;
              res = res << this.bitsLeft | this.bits;
              this.bits = newBits;
            } else {
              res = this.bits;
              this.bits >>>= n3;
            }
            this.bitsLeft = -bitsNeeded & 7;
            if (n3 < 32) {
              var mask = (1 << n3) - 1;
              res &= mask;
            } else {
              res >>>= 0;
            }
            return res;
          };
          KaitaiStream3.prototype.readBytes = function(len) {
            return this.mapUint8Array(len);
          };
          KaitaiStream3.prototype.readBytesFull = function() {
            return this.mapUint8Array(this.size - this.pos);
          };
          KaitaiStream3.prototype.readBytesTerm = function(terminator, include, consume, eosError) {
            var blen = this.size - this.pos;
            var u8 = new Uint8Array(this._buffer, this._byteOffset + this.pos);
            var i4;
            for (i4 = 0; i4 < blen && u8[i4] !== terminator; i4++)
              ;
            if (i4 === blen) {
              if (eosError) {
                throw new Error("End of stream reached, but no terminator " + terminator + " found");
              } else {
                return this.mapUint8Array(i4);
              }
            } else {
              var arr = void 0;
              if (include) {
                arr = this.mapUint8Array(i4 + 1);
              } else {
                arr = this.mapUint8Array(i4);
              }
              if (consume) {
                this.pos += 1;
              }
              return arr;
            }
          };
          KaitaiStream3.prototype.readBytesTermMulti = function(terminator, include, consume, eosError) {
            var unitSize = terminator.length;
            var data = new Uint8Array(this._buffer, this._byteOffset + this.pos, this.size - this.pos);
            var res = KaitaiStream3.bytesTerminateMulti(data, terminator, true);
            this.pos += res.length;
            var termFound = res.length !== 0 && res.length % unitSize === 0 && KaitaiStream3.byteArrayCompare(new Uint8Array(res.buffer, res.length - unitSize), terminator) === 0;
            if (termFound) {
              if (!include) {
                res = new Uint8Array(res.buffer, res.byteOffset, res.length - unitSize);
              }
              if (!consume) {
                this.pos -= unitSize;
              }
            } else if (eosError) {
              throw new Error("End of stream reached, but no terminator " + terminator + " found");
            }
            return res;
          };
          KaitaiStream3.prototype.ensureFixedContents = function(expected) {
            var actual = this.readBytes(expected.length);
            if (actual.length !== expected.length) {
              throw new KaitaiStream3.UnexpectedDataError(expected, actual);
            }
            var actLen = actual.length;
            for (var i4 = 0; i4 < actLen; i4++) {
              if (actual[i4] !== expected[i4]) {
                throw new KaitaiStream3.UnexpectedDataError(expected, actual);
              }
            }
            return actual;
          };
          KaitaiStream3.bytesStripRight = function(data, padByte) {
            var newLen = data.length;
            while (data[newLen - 1] === padByte) {
              newLen--;
            }
            return data.slice(0, newLen);
          };
          KaitaiStream3.bytesTerminate = function(data, term, include) {
            var newLen = 0;
            var maxLen = data.length;
            while (newLen < maxLen && data[newLen] !== term) {
              newLen++;
            }
            if (include && newLen < maxLen)
              newLen++;
            return data.slice(0, newLen);
          };
          KaitaiStream3.bytesTerminateMulti = function(data, term, include) {
            var unitSize = term.length;
            if (unitSize === 0) {
              return new Uint8Array();
            }
            var len = data.length;
            var iTerm = 0;
            for (var iData = 0; iData < len; ) {
              if (data[iData] !== term[iTerm]) {
                iData += unitSize - iTerm;
                iTerm = 0;
                continue;
              }
              iData++;
              iTerm++;
              if (iTerm === unitSize) {
                return data.slice(0, iData - (include ? 0 : unitSize));
              }
            }
            return data.slice();
          };
          KaitaiStream3.bytesToStr = function(arr, encoding) {
            if (encoding == null || encoding.toLowerCase() === "ascii") {
              return KaitaiStream3.createStringFromArray(arr);
            } else {
              if (typeof TextDecoder === "function") {
                return new TextDecoder(encoding).decode(arr);
              } else {
                switch (encoding.toLowerCase()) {
                  case "utf8":
                  case "utf-8":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return jt.from(arr).toString(encoding);
                  default:
                    if (typeof KaitaiStream3.iconvlite === "undefined")
                      KaitaiStream3.iconvlite = __require2("iconv-lite");
                    return KaitaiStream3.iconvlite.decode(arr, encoding);
                }
              }
            }
          };
          KaitaiStream3.processXorOne = function(data, key) {
            var r3 = new Uint8Array(data.length);
            var dl = data.length;
            for (var i4 = 0; i4 < dl; i4++)
              r3[i4] = data[i4] ^ key;
            return r3;
          };
          KaitaiStream3.processXorMany = function(data, key) {
            var dl = data.length;
            var r3 = new Uint8Array(dl);
            var kl = key.length;
            var ki = 0;
            for (var i4 = 0; i4 < dl; i4++) {
              r3[i4] = data[i4] ^ key[ki];
              ki++;
              if (ki >= kl)
                ki = 0;
            }
            return r3;
          };
          KaitaiStream3.processRotateLeft = function(data, amount, groupSize) {
            if (groupSize !== 1)
              throw new RangeError("unable to rotate group of " + groupSize + " bytes yet");
            var mask = groupSize * 8 - 1;
            var antiAmount = -amount & mask;
            var r3 = new Uint8Array(data.length);
            for (var i4 = 0; i4 < data.length; i4++)
              r3[i4] = data[i4] << amount & 255 | data[i4] >> antiAmount;
            return r3;
          };
          KaitaiStream3.processZlib = function(buf) {
            if (typeof __require2 !== "undefined") {
              if (typeof KaitaiStream3.zlib === "undefined")
                KaitaiStream3.zlib = __require2("node:zlib");
              var r3 = KaitaiStream3.zlib.inflateSync(jt.from(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)));
              return new Uint8Array(r3.buffer, r3.byteOffset, r3.length);
            } else {
              if (typeof KaitaiStream3.zlib === "undefined" && typeof KaitaiStream3.depUrls.zlib !== "undefined") {
                importScripts(KaitaiStream3.depUrls.zlib);
                KaitaiStream3.zlib = pako;
              }
              return KaitaiStream3.zlib.inflate(buf);
            }
          };
          KaitaiStream3.mod = function(a4, b6) {
            if (b6 <= 0)
              throw new RangeError("mod divisor <= 0");
            var r3 = a4 % b6;
            if (r3 < 0)
              r3 += b6;
            return r3;
          };
          KaitaiStream3.arrayMin = function(arr) {
            var min = arr[0];
            var x7;
            for (var i4 = 1, n3 = arr.length; i4 < n3; ++i4) {
              x7 = arr[i4];
              if (x7 < min)
                min = x7;
            }
            return min;
          };
          KaitaiStream3.arrayMax = function(arr) {
            var max = arr[0];
            var x7;
            for (var i4 = 1, n3 = arr.length; i4 < n3; ++i4) {
              x7 = arr[i4];
              if (x7 > max)
                max = x7;
            }
            return max;
          };
          KaitaiStream3.byteArrayCompare = function(a4, b6) {
            if (a4 === b6)
              return 0;
            var al = a4.length;
            var bl = b6.length;
            var minLen = al < bl ? al : bl;
            for (var i4 = 0; i4 < minLen; i4++) {
              var cmp = a4[i4] - b6[i4];
              if (cmp !== 0)
                return cmp;
            }
            if (al === bl) {
              return 0;
            } else {
              return al - bl;
            }
          };
          KaitaiStream3.prototype.ensureBytesLeft = function(length) {
            if (this.pos + length > this.size) {
              throw new KaitaiStream3.EOFError(length, this.size - this.pos);
            }
          };
          KaitaiStream3.prototype.mapUint8Array = function(length) {
            length |= 0;
            this.ensureBytesLeft(length);
            var arr = new Uint8Array(this._buffer, this.byteOffset + this.pos, length);
            this.pos += length;
            return arr;
          };
          KaitaiStream3.createStringFromArray = function(array) {
            var chunk_size = 32768;
            var chunks = [];
            for (var i4 = 0; i4 < array.length; i4 += chunk_size) {
              var chunk = array.subarray(i4, i4 + chunk_size);
              chunks.push(String.fromCharCode.apply(null, chunk));
            }
            return chunks.join("");
          };
          KaitaiStream3.depUrls = {
            // processZlib uses this and expected a link to a copy of pako.
            // specifically the pako_inflate.min.js script at:
            // https://raw.githubusercontent.com/nodeca/pako/master/dist/pako_inflate.min.js
            zlib: void 0
          };
          KaitaiStream3.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0;
          KaitaiStream3.EOFError = /** @class */
          function(_super) {
            __extends(EOFError, _super);
            function EOFError(bytesReq, bytesAvail) {
              var _this = _super.call(this, "requested " + bytesReq + " bytes, but only " + bytesAvail + " bytes available") || this;
              _this.name = "EOFError";
              Object.setPrototypeOf(_this, KaitaiStream3.EOFError.prototype);
              _this.bytesReq = bytesReq;
              _this.bytesAvail = bytesAvail;
              return _this;
            }
            return EOFError;
          }(Error);
          KaitaiStream3.UnexpectedDataError = /** @class */
          function(_super) {
            __extends(UnexpectedDataError, _super);
            function UnexpectedDataError(expected, actual) {
              var _this = _super.call(this, "expected [" + expected + "], but got [" + actual + "]") || this;
              _this.name = "UnexpectedDataError";
              Object.setPrototypeOf(_this, KaitaiStream3.UnexpectedDataError.prototype);
              _this.expected = expected;
              _this.actual = actual;
              return _this;
            }
            return UnexpectedDataError;
          }(Error);
          KaitaiStream3.UndecidedEndiannessError = /** @class */
          function(_super) {
            __extends(UndecidedEndiannessError, _super);
            function UndecidedEndiannessError() {
              var _this = _super.call(this) || this;
              _this.name = "UndecidedEndiannessError";
              Object.setPrototypeOf(_this, KaitaiStream3.UndecidedEndiannessError.prototype);
              return _this;
            }
            return UndecidedEndiannessError;
          }(Error);
          KaitaiStream3.ValidationNotEqualError = /** @class */
          function(_super) {
            __extends(ValidationNotEqualError, _super);
            function ValidationNotEqualError(expected, actual) {
              var _this = _super.call(this, "not equal, expected [" + expected + "], but got [" + actual + "]") || this;
              _this.name = "ValidationNotEqualError";
              Object.setPrototypeOf(_this, KaitaiStream3.ValidationNotEqualError.prototype);
              _this.expected = expected;
              _this.actual = actual;
              return _this;
            }
            return ValidationNotEqualError;
          }(Error);
          KaitaiStream3.ValidationLessThanError = /** @class */
          function(_super) {
            __extends(ValidationLessThanError, _super);
            function ValidationLessThanError(min, actual) {
              var _this = _super.call(this, "not in range, min [" + min + "], but got [" + actual + "]") || this;
              _this.name = "ValidationLessThanError";
              Object.setPrototypeOf(_this, KaitaiStream3.ValidationLessThanError.prototype);
              _this.min = min;
              _this.actual = actual;
              return _this;
            }
            return ValidationLessThanError;
          }(Error);
          KaitaiStream3.ValidationGreaterThanError = /** @class */
          function(_super) {
            __extends(ValidationGreaterThanError, _super);
            function ValidationGreaterThanError(max, actual) {
              var _this = _super.call(this, "not in range, max [" + max + "], but got [" + actual + "]") || this;
              _this.name = "ValidationGreaterThanError";
              Object.setPrototypeOf(_this, KaitaiStream3.ValidationGreaterThanError.prototype);
              _this.max = max;
              _this.actual = actual;
              return _this;
            }
            return ValidationGreaterThanError;
          }(Error);
          KaitaiStream3.ValidationNotAnyOfError = /** @class */
          function(_super) {
            __extends(ValidationNotAnyOfError, _super);
            function ValidationNotAnyOfError(actual) {
              var _this = _super.call(this, "not any of the list, got [" + actual + "]") || this;
              _this.name = "ValidationNotAnyOfError";
              Object.setPrototypeOf(_this, KaitaiStream3.ValidationNotAnyOfError.prototype);
              _this.actual = actual;
              return _this;
            }
            return ValidationNotAnyOfError;
          }(Error);
          KaitaiStream3.ValidationNotInEnumError = /** @class */
          function(_super) {
            __extends(ValidationNotInEnumError, _super);
            function ValidationNotInEnumError(actual) {
              var _this = _super.call(this, "not in the enum, got [" + actual + "]") || this;
              _this.name = "ValidationNotInEnumError";
              Object.setPrototypeOf(_this, KaitaiStream3.ValidationNotInEnumError.prototype);
              _this.actual = actual;
              return _this;
            }
            return ValidationNotInEnumError;
          }(Error);
          KaitaiStream3.ValidationExprError = /** @class */
          function(_super) {
            __extends(ValidationExprError, _super);
            function ValidationExprError(actual) {
              var _this = _super.call(this, "not matching the expression, got [" + actual + "]") || this;
              _this.name = "ValidationExprError";
              Object.setPrototypeOf(_this, KaitaiStream3.ValidationExprError.prototype);
              _this.actual = actual;
              return _this;
            }
            return ValidationExprError;
          }(Error);
          return KaitaiStream3;
        }()
      );
      return KaitaiStream2;
    });
  }
});
var require_kaitai_struct = __commonJS2({
  "node_modules/kaitai-struct/index.js"(exports, module) {
    var KaitaiStream2 = require_KaitaiStream();
    module.exports = {
      KaitaiStream: KaitaiStream2
    };
  }
});
var cjsm2 = __toESM2(require_kaitai_struct());
var { KaitaiStream } = cjsm2;
var endpoint_default2 = cjsm2.default ?? cjsm2;
export {
  KaitaiStream,
  endpoint_default2 as default
};
/*! Bundled license information:

unenv-nightly/runtime/node/buffer/internal/ieee754.mjs:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

unenv-nightly/runtime/node/buffer/internal/buffer.mjs:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
