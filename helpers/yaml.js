// https://esm.sh/node/buffer.mjs
function ut(t4) {
  return new Error(`[unenv] ${t4} is not implemented yet!`);
}
function v(t4) {
  return Object.assign(() => {
    throw ut(t4);
  }, { __unenv__: true });
}
var d = [];
var y = [];
var st = typeof Uint8Array > "u" ? Array : Uint8Array;
var N = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let t4 = 0, e2 = N.length; t4 < e2; ++t4) d[t4] = N[t4], y[N.charCodeAt(t4)] = t4;
y[45] = 62;
y[95] = 63;
function ht(t4) {
  let e2 = t4.length;
  if (e2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
  let n2 = t4.indexOf("=");
  n2 === -1 && (n2 = e2);
  let r4 = n2 === e2 ? 0 : 4 - n2 % 4;
  return [n2, r4];
}
function lt(t4, e2, n2) {
  return (e2 + n2) * 3 / 4 - n2;
}
function at(t4) {
  let e2, n2 = ht(t4), r4 = n2[0], o2 = n2[1], i6 = new st(lt(t4, r4, o2)), u5 = 0, s14 = o2 > 0 ? r4 - 4 : r4, l8;
  for (l8 = 0; l8 < s14; l8 += 4) e2 = y[t4.charCodeAt(l8)] << 18 | y[t4.charCodeAt(l8 + 1)] << 12 | y[t4.charCodeAt(l8 + 2)] << 6 | y[t4.charCodeAt(l8 + 3)], i6[u5++] = e2 >> 16 & 255, i6[u5++] = e2 >> 8 & 255, i6[u5++] = e2 & 255;
  return o2 === 2 && (e2 = y[t4.charCodeAt(l8)] << 2 | y[t4.charCodeAt(l8 + 1)] >> 4, i6[u5++] = e2 & 255), o2 === 1 && (e2 = y[t4.charCodeAt(l8)] << 10 | y[t4.charCodeAt(l8 + 1)] << 4 | y[t4.charCodeAt(l8 + 2)] >> 2, i6[u5++] = e2 >> 8 & 255, i6[u5++] = e2 & 255), i6;
}
function pt(t4) {
  return d[t4 >> 18 & 63] + d[t4 >> 12 & 63] + d[t4 >> 6 & 63] + d[t4 & 63];
}
function ct(t4, e2, n2) {
  let r4, o2 = [];
  for (let i6 = e2; i6 < n2; i6 += 3) r4 = (t4[i6] << 16 & 16711680) + (t4[i6 + 1] << 8 & 65280) + (t4[i6 + 2] & 255), o2.push(pt(r4));
  return o2.join("");
}
function k(t4) {
  let e2, n2 = t4.length, r4 = n2 % 3, o2 = [], i6 = 16383;
  for (let u5 = 0, s14 = n2 - r4; u5 < s14; u5 += i6) o2.push(ct(t4, u5, u5 + i6 > s14 ? s14 : u5 + i6));
  return r4 === 1 ? (e2 = t4[n2 - 1], o2.push(d[e2 >> 2] + d[e2 << 4 & 63] + "==")) : r4 === 2 && (e2 = (t4[n2 - 2] << 8) + t4[n2 - 1], o2.push(d[e2 >> 10] + d[e2 >> 4 & 63] + d[e2 << 2 & 63] + "=")), o2.join("");
}
function _(t4, e2, n2, r4, o2) {
  let i6, u5, s14 = o2 * 8 - r4 - 1, l8 = (1 << s14) - 1, p5 = l8 >> 1, h4 = -7, a4 = n2 ? o2 - 1 : 0, I4 = n2 ? -1 : 1, w7 = t4[e2 + a4];
  for (a4 += I4, i6 = w7 & (1 << -h4) - 1, w7 >>= -h4, h4 += s14; h4 > 0; ) i6 = i6 * 256 + t4[e2 + a4], a4 += I4, h4 -= 8;
  for (u5 = i6 & (1 << -h4) - 1, i6 >>= -h4, h4 += r4; h4 > 0; ) u5 = u5 * 256 + t4[e2 + a4], a4 += I4, h4 -= 8;
  if (i6 === 0) i6 = 1 - p5;
  else {
    if (i6 === l8) return u5 ? Number.NaN : (w7 ? -1 : 1) * Number.POSITIVE_INFINITY;
    u5 = u5 + Math.pow(2, r4), i6 = i6 - p5;
  }
  return (w7 ? -1 : 1) * u5 * Math.pow(2, i6 - r4);
}
function z(t4, e2, n2, r4, o2, i6) {
  let u5, s14, l8, p5 = i6 * 8 - o2 - 1, h4 = (1 << p5) - 1, a4 = h4 >> 1, I4 = o2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, w7 = r4 ? 0 : i6 - 1, L2 = r4 ? 1 : -1, ft = e2 < 0 || e2 === 0 && 1 / e2 < 0 ? 1 : 0;
  for (e2 = Math.abs(e2), Number.isNaN(e2) || e2 === Number.POSITIVE_INFINITY ? (s14 = Number.isNaN(e2) ? 1 : 0, u5 = h4) : (u5 = Math.floor(Math.log2(e2)), e2 * (l8 = Math.pow(2, -u5)) < 1 && (u5--, l8 *= 2), e2 += u5 + a4 >= 1 ? I4 / l8 : I4 * Math.pow(2, 1 - a4), e2 * l8 >= 2 && (u5++, l8 /= 2), u5 + a4 >= h4 ? (s14 = 0, u5 = h4) : u5 + a4 >= 1 ? (s14 = (e2 * l8 - 1) * Math.pow(2, o2), u5 = u5 + a4) : (s14 = e2 * Math.pow(2, a4 - 1) * Math.pow(2, o2), u5 = 0)); o2 >= 8; ) t4[n2 + w7] = s14 & 255, w7 += L2, s14 /= 256, o2 -= 8;
  for (u5 = u5 << o2 | s14, p5 += o2; p5 > 0; ) t4[n2 + w7] = u5 & 255, w7 += L2, u5 /= 256, p5 -= 8;
  t4[n2 + w7 - L2] |= ft * 128;
}
var F = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
var G = 50;
var R = 2147483647;
f.TYPED_ARRAY_SUPPORT = gt();
!f.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This environment lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function gt() {
  try {
    let t4 = new Uint8Array(1), e2 = { foo: function() {
      return 42;
    } };
    return Object.setPrototypeOf(e2, Uint8Array.prototype), Object.setPrototypeOf(t4, e2), t4.foo() === 42;
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
function m(t4) {
  if (t4 > R) throw new RangeError('The value "' + t4 + '" is invalid for option "size"');
  let e2 = new Uint8Array(t4);
  return Object.setPrototypeOf(e2, f.prototype), e2;
}
function f(t4, e2, n2) {
  if (typeof t4 == "number") {
    if (typeof e2 == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
    return M(t4);
  }
  return X(t4, e2, n2);
}
f.poolSize = 8192;
function X(t4, e2, n2) {
  if (typeof t4 == "string") return wt(t4, e2);
  if (ArrayBuffer.isView(t4)) return dt(t4);
  if (t4 == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t4);
  if (b(t4, ArrayBuffer) || t4 && b(t4.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (b(t4, SharedArrayBuffer) || t4 && b(t4.buffer, SharedArrayBuffer))) return H(t4, e2, n2);
  if (typeof t4 == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
  let r4 = t4.valueOf && t4.valueOf();
  if (r4 != null && r4 !== t4) return f.from(r4, e2, n2);
  let o2 = bt(t4);
  if (o2) return o2;
  if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t4[Symbol.toPrimitive] == "function") return f.from(t4[Symbol.toPrimitive]("string"), e2, n2);
  throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t4);
}
f.from = function(t4, e2, n2) {
  return X(t4, e2, n2);
};
Object.setPrototypeOf(f.prototype, Uint8Array.prototype);
Object.setPrototypeOf(f, Uint8Array);
function q(t4) {
  if (typeof t4 != "number") throw new TypeError('"size" argument must be of type number');
  if (t4 < 0) throw new RangeError('The value "' + t4 + '" is invalid for option "size"');
}
function yt(t4, e2, n2) {
  return q(t4), t4 <= 0 ? m(t4) : e2 !== void 0 ? typeof n2 == "string" ? m(t4).fill(e2, n2) : m(t4).fill(e2) : m(t4);
}
f.alloc = function(t4, e2, n2) {
  return yt(t4, e2, n2);
};
function M(t4) {
  return q(t4), m(t4 < 0 ? 0 : $(t4) | 0);
}
f.allocUnsafe = function(t4) {
  return M(t4);
};
f.allocUnsafeSlow = function(t4) {
  return M(t4);
};
function wt(t4, e2) {
  if ((typeof e2 != "string" || e2 === "") && (e2 = "utf8"), !f.isEncoding(e2)) throw new TypeError("Unknown encoding: " + e2);
  let n2 = W(t4, e2) | 0, r4 = m(n2), o2 = r4.write(t4, e2);
  return o2 !== n2 && (r4 = r4.slice(0, o2)), r4;
}
function S(t4) {
  let e2 = t4.length < 0 ? 0 : $(t4.length) | 0, n2 = m(e2);
  for (let r4 = 0; r4 < e2; r4 += 1) n2[r4] = t4[r4] & 255;
  return n2;
}
function dt(t4) {
  if (b(t4, Uint8Array)) {
    let e2 = new Uint8Array(t4);
    return H(e2.buffer, e2.byteOffset, e2.byteLength);
  }
  return S(t4);
}
function H(t4, e2, n2) {
  if (e2 < 0 || t4.byteLength < e2) throw new RangeError('"offset" is outside of buffer bounds');
  if (t4.byteLength < e2 + (n2 || 0)) throw new RangeError('"length" is outside of buffer bounds');
  let r4;
  return e2 === void 0 && n2 === void 0 ? r4 = new Uint8Array(t4) : n2 === void 0 ? r4 = new Uint8Array(t4, e2) : r4 = new Uint8Array(t4, e2, n2), Object.setPrototypeOf(r4, f.prototype), r4;
}
function bt(t4) {
  if (f.isBuffer(t4)) {
    let e2 = $(t4.length) | 0, n2 = m(e2);
    return n2.length === 0 || t4.copy(n2, 0, 0, e2), n2;
  }
  if (t4.length !== void 0) return typeof t4.length != "number" || P(t4.length) ? m(0) : S(t4);
  if (t4.type === "Buffer" && Array.isArray(t4.data)) return S(t4.data);
}
function $(t4) {
  if (t4 >= R) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + R.toString(16) + " bytes");
  return t4 | 0;
}
f.isBuffer = function(t4) {
  return t4 != null && t4._isBuffer === true && t4 !== f.prototype;
};
f.compare = function(t4, e2) {
  if (b(t4, Uint8Array) && (t4 = f.from(t4, t4.offset, t4.byteLength)), b(e2, Uint8Array) && (e2 = f.from(e2, e2.offset, e2.byteLength)), !f.isBuffer(t4) || !f.isBuffer(e2)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
  if (t4 === e2) return 0;
  let n2 = t4.length, r4 = e2.length;
  for (let o2 = 0, i6 = Math.min(n2, r4); o2 < i6; ++o2) if (t4[o2] !== e2[o2]) {
    n2 = t4[o2], r4 = e2[o2];
    break;
  }
  return n2 < r4 ? -1 : r4 < n2 ? 1 : 0;
};
f.isEncoding = function(t4) {
  switch (String(t4).toLowerCase()) {
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
f.concat = function(t4, e2) {
  if (!Array.isArray(t4)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (t4.length === 0) return f.alloc(0);
  let n2;
  if (e2 === void 0) for (e2 = 0, n2 = 0; n2 < t4.length; ++n2) e2 += t4[n2].length;
  let r4 = f.allocUnsafe(e2), o2 = 0;
  for (n2 = 0; n2 < t4.length; ++n2) {
    let i6 = t4[n2];
    if (b(i6, Uint8Array)) o2 + i6.length > r4.length ? (f.isBuffer(i6) || (i6 = f.from(i6.buffer, i6.byteOffset, i6.byteLength)), i6.copy(r4, o2)) : Uint8Array.prototype.set.call(r4, i6, o2);
    else if (f.isBuffer(i6)) i6.copy(r4, o2);
    else throw new TypeError('"list" argument must be an Array of Buffers');
    o2 += i6.length;
  }
  return r4;
};
function W(t4, e2) {
  if (f.isBuffer(t4)) return t4.length;
  if (ArrayBuffer.isView(t4) || b(t4, ArrayBuffer)) return t4.byteLength;
  if (typeof t4 != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t4);
  let n2 = t4.length, r4 = arguments.length > 2 && arguments[2] === true;
  if (!r4 && n2 === 0) return 0;
  let o2 = false;
  for (; ; ) switch (e2) {
    case "ascii":
    case "latin1":
    case "binary":
      return n2;
    case "utf8":
    case "utf-8":
      return x(t4).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return n2 * 2;
    case "hex":
      return n2 >>> 1;
    case "base64":
      return ot(t4).length;
    default:
      if (o2) return r4 ? -1 : x(t4).length;
      e2 = ("" + e2).toLowerCase(), o2 = true;
  }
}
f.byteLength = W;
function Et(t4, e2, n2) {
  let r4 = false;
  if ((e2 === void 0 || e2 < 0) && (e2 = 0), e2 > this.length || ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0) || (n2 >>>= 0, e2 >>>= 0, n2 <= e2)) return "";
  for (t4 || (t4 = "utf8"); ; ) switch (t4) {
    case "hex":
      return Lt(this, e2, n2);
    case "utf8":
    case "utf-8":
      return K(this, e2, n2);
    case "ascii":
      return _t(this, e2, n2);
    case "latin1":
    case "binary":
      return Ot(this, e2, n2);
    case "base64":
      return Tt(this, e2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return Nt(this, e2, n2);
    default:
      if (r4) throw new TypeError("Unknown encoding: " + t4);
      t4 = (t4 + "").toLowerCase(), r4 = true;
  }
}
f.prototype._isBuffer = true;
function B(t4, e2, n2) {
  let r4 = t4[e2];
  t4[e2] = t4[n2], t4[n2] = r4;
}
f.prototype.swap16 = function() {
  let t4 = this.length;
  if (t4 % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (let e2 = 0; e2 < t4; e2 += 2) B(this, e2, e2 + 1);
  return this;
};
f.prototype.swap32 = function() {
  let t4 = this.length;
  if (t4 % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (let e2 = 0; e2 < t4; e2 += 4) B(this, e2, e2 + 3), B(this, e2 + 1, e2 + 2);
  return this;
};
f.prototype.swap64 = function() {
  let t4 = this.length;
  if (t4 % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (let e2 = 0; e2 < t4; e2 += 8) B(this, e2, e2 + 7), B(this, e2 + 1, e2 + 6), B(this, e2 + 2, e2 + 5), B(this, e2 + 3, e2 + 4);
  return this;
};
f.prototype.toString = function() {
  let t4 = this.length;
  return t4 === 0 ? "" : arguments.length === 0 ? K(this, 0, t4) : Reflect.apply(Et, this, arguments);
};
f.prototype.toLocaleString = f.prototype.toString;
f.prototype.equals = function(t4) {
  if (!f.isBuffer(t4)) throw new TypeError("Argument must be a Buffer");
  return this === t4 ? true : f.compare(this, t4) === 0;
};
f.prototype.inspect = function() {
  let t4 = "", e2 = G;
  return t4 = this.toString("hex", 0, e2).replace(/(.{2})/g, "$1 ").trim(), this.length > e2 && (t4 += " ... "), "<Buffer " + t4 + ">";
};
F && (f.prototype[F] = f.prototype.inspect);
f.prototype.compare = function(t4, e2, n2, r4, o2) {
  if (b(t4, Uint8Array) && (t4 = f.from(t4, t4.offset, t4.byteLength)), !f.isBuffer(t4)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t4);
  if (e2 === void 0 && (e2 = 0), n2 === void 0 && (n2 = t4 ? t4.length : 0), r4 === void 0 && (r4 = 0), o2 === void 0 && (o2 = this.length), e2 < 0 || n2 > t4.length || r4 < 0 || o2 > this.length) throw new RangeError("out of range index");
  if (r4 >= o2 && e2 >= n2) return 0;
  if (r4 >= o2) return -1;
  if (e2 >= n2) return 1;
  if (e2 >>>= 0, n2 >>>= 0, r4 >>>= 0, o2 >>>= 0, this === t4) return 0;
  let i6 = o2 - r4, u5 = n2 - e2, s14 = Math.min(i6, u5), l8 = this.slice(r4, o2), p5 = t4.slice(e2, n2);
  for (let h4 = 0; h4 < s14; ++h4) if (l8[h4] !== p5[h4]) {
    i6 = l8[h4], u5 = p5[h4];
    break;
  }
  return i6 < u5 ? -1 : u5 < i6 ? 1 : 0;
};
function J(t4, e2, n2, r4, o2) {
  if (t4.length === 0) return -1;
  if (typeof n2 == "string" ? (r4 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, P(n2) && (n2 = o2 ? 0 : t4.length - 1), n2 < 0 && (n2 = t4.length + n2), n2 >= t4.length) {
    if (o2) return -1;
    n2 = t4.length - 1;
  } else if (n2 < 0) if (o2) n2 = 0;
  else return -1;
  if (typeof e2 == "string" && (e2 = f.from(e2, r4)), f.isBuffer(e2)) return e2.length === 0 ? -1 : j(t4, e2, n2, r4, o2);
  if (typeof e2 == "number") return e2 = e2 & 255, typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(t4, e2, n2) : Uint8Array.prototype.lastIndexOf.call(t4, e2, n2) : j(t4, [e2], n2, r4, o2);
  throw new TypeError("val must be string, number or Buffer");
}
function j(t4, e2, n2, r4, o2) {
  let i6 = 1, u5 = t4.length, s14 = e2.length;
  if (r4 !== void 0 && (r4 = String(r4).toLowerCase(), r4 === "ucs2" || r4 === "ucs-2" || r4 === "utf16le" || r4 === "utf-16le")) {
    if (t4.length < 2 || e2.length < 2) return -1;
    i6 = 2, u5 /= 2, s14 /= 2, n2 /= 2;
  }
  function l8(h4, a4) {
    return i6 === 1 ? h4[a4] : h4.readUInt16BE(a4 * i6);
  }
  let p5;
  if (o2) {
    let h4 = -1;
    for (p5 = n2; p5 < u5; p5++) if (l8(t4, p5) === l8(e2, h4 === -1 ? 0 : p5 - h4)) {
      if (h4 === -1 && (h4 = p5), p5 - h4 + 1 === s14) return h4 * i6;
    } else h4 !== -1 && (p5 -= p5 - h4), h4 = -1;
  } else for (n2 + s14 > u5 && (n2 = u5 - s14), p5 = n2; p5 >= 0; p5--) {
    let h4 = true;
    for (let a4 = 0; a4 < s14; a4++) if (l8(t4, p5 + a4) !== l8(e2, a4)) {
      h4 = false;
      break;
    }
    if (h4) return p5;
  }
  return -1;
}
f.prototype.includes = function(t4, e2, n2) {
  return this.indexOf(t4, e2, n2) !== -1;
};
f.prototype.indexOf = function(t4, e2, n2) {
  return J(this, t4, e2, n2, true);
};
f.prototype.lastIndexOf = function(t4, e2, n2) {
  return J(this, t4, e2, n2, false);
};
function Bt(t4, e2, n2, r4) {
  n2 = Number(n2) || 0;
  let o2 = t4.length - n2;
  r4 ? (r4 = Number(r4), r4 > o2 && (r4 = o2)) : r4 = o2;
  let i6 = e2.length;
  r4 > i6 / 2 && (r4 = i6 / 2);
  let u5;
  for (u5 = 0; u5 < r4; ++u5) {
    let s14 = Number.parseInt(e2.slice(u5 * 2, u5 * 2 + 2), 16);
    if (P(s14)) return u5;
    t4[n2 + u5] = s14;
  }
  return u5;
}
function It(t4, e2, n2, r4) {
  return O(x(e2, t4.length - n2), t4, n2, r4);
}
function At(t4, e2, n2, r4) {
  return O($t(e2), t4, n2, r4);
}
function Ut(t4, e2, n2, r4) {
  return O(ot(e2), t4, n2, r4);
}
function vt(t4, e2, n2, r4) {
  return O(Ct(e2, t4.length - n2), t4, n2, r4);
}
f.prototype.write = function(t4, e2, n2, r4) {
  if (e2 === void 0) r4 = "utf8", n2 = this.length, e2 = 0;
  else if (n2 === void 0 && typeof e2 == "string") r4 = e2, n2 = this.length, e2 = 0;
  else if (Number.isFinite(e2)) e2 = e2 >>> 0, Number.isFinite(n2) ? (n2 = n2 >>> 0, r4 === void 0 && (r4 = "utf8")) : (r4 = n2, n2 = void 0);
  else throw new TypeError("Buffer.write(string, encoding, offset[, length]) is no longer supported");
  let o2 = this.length - e2;
  if ((n2 === void 0 || n2 > o2) && (n2 = o2), t4.length > 0 && (n2 < 0 || e2 < 0) || e2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  r4 || (r4 = "utf8");
  let i6 = false;
  for (; ; ) switch (r4) {
    case "hex":
      return Bt(this, t4, e2, n2);
    case "utf8":
    case "utf-8":
      return It(this, t4, e2, n2);
    case "ascii":
    case "latin1":
    case "binary":
      return At(this, t4, e2, n2);
    case "base64":
      return Ut(this, t4, e2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return vt(this, t4, e2, n2);
    default:
      if (i6) throw new TypeError("Unknown encoding: " + r4);
      r4 = ("" + r4).toLowerCase(), i6 = true;
  }
};
f.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
function Tt(t4, e2, n2) {
  return e2 === 0 && n2 === t4.length ? k(t4) : k(t4.slice(e2, n2));
}
function K(t4, e2, n2) {
  n2 = Math.min(t4.length, n2);
  let r4 = [], o2 = e2;
  for (; o2 < n2; ) {
    let i6 = t4[o2], u5 = null, s14 = i6 > 239 ? 4 : i6 > 223 ? 3 : i6 > 191 ? 2 : 1;
    if (o2 + s14 <= n2) {
      let l8, p5, h4, a4;
      switch (s14) {
        case 1:
          i6 < 128 && (u5 = i6);
          break;
        case 2:
          l8 = t4[o2 + 1], (l8 & 192) === 128 && (a4 = (i6 & 31) << 6 | l8 & 63, a4 > 127 && (u5 = a4));
          break;
        case 3:
          l8 = t4[o2 + 1], p5 = t4[o2 + 2], (l8 & 192) === 128 && (p5 & 192) === 128 && (a4 = (i6 & 15) << 12 | (l8 & 63) << 6 | p5 & 63, a4 > 2047 && (a4 < 55296 || a4 > 57343) && (u5 = a4));
          break;
        case 4:
          l8 = t4[o2 + 1], p5 = t4[o2 + 2], h4 = t4[o2 + 3], (l8 & 192) === 128 && (p5 & 192) === 128 && (h4 & 192) === 128 && (a4 = (i6 & 15) << 18 | (l8 & 63) << 12 | (p5 & 63) << 6 | h4 & 63, a4 > 65535 && a4 < 1114112 && (u5 = a4));
      }
    }
    u5 === null ? (u5 = 65533, s14 = 1) : u5 > 65535 && (u5 -= 65536, r4.push(u5 >>> 10 & 1023 | 55296), u5 = 56320 | u5 & 1023), r4.push(u5), o2 += s14;
  }
  return Rt(r4);
}
var Y = 4096;
function Rt(t4) {
  let e2 = t4.length;
  if (e2 <= Y) return String.fromCharCode.apply(String, t4);
  let n2 = "", r4 = 0;
  for (; r4 < e2; ) n2 += String.fromCharCode.apply(String, t4.slice(r4, r4 += Y));
  return n2;
}
function _t(t4, e2, n2) {
  let r4 = "";
  n2 = Math.min(t4.length, n2);
  for (let o2 = e2; o2 < n2; ++o2) r4 += String.fromCharCode(t4[o2] & 127);
  return r4;
}
function Ot(t4, e2, n2) {
  let r4 = "";
  n2 = Math.min(t4.length, n2);
  for (let o2 = e2; o2 < n2; ++o2) r4 += String.fromCharCode(t4[o2]);
  return r4;
}
function Lt(t4, e2, n2) {
  let r4 = t4.length;
  (!e2 || e2 < 0) && (e2 = 0), (!n2 || n2 < 0 || n2 > r4) && (n2 = r4);
  let o2 = "";
  for (let i6 = e2; i6 < n2; ++i6) o2 += Pt[t4[i6]];
  return o2;
}
function Nt(t4, e2, n2) {
  let r4 = t4.slice(e2, n2), o2 = "";
  for (let i6 = 0; i6 < r4.length - 1; i6 += 2) o2 += String.fromCharCode(r4[i6] + r4[i6 + 1] * 256);
  return o2;
}
f.prototype.slice = function(t4, e2) {
  let n2 = this.length;
  t4 = Math.trunc(t4), e2 = e2 === void 0 ? n2 : Math.trunc(e2), t4 < 0 ? (t4 += n2, t4 < 0 && (t4 = 0)) : t4 > n2 && (t4 = n2), e2 < 0 ? (e2 += n2, e2 < 0 && (e2 = 0)) : e2 > n2 && (e2 = n2), e2 < t4 && (e2 = t4);
  let r4 = this.subarray(t4, e2);
  return Object.setPrototypeOf(r4, f.prototype), r4;
};
function c(t4, e2, n2) {
  if (t4 % 1 !== 0 || t4 < 0) throw new RangeError("offset is not uint");
  if (t4 + e2 > n2) throw new RangeError("Trying to access beyond buffer length");
}
f.prototype.readUintLE = f.prototype.readUIntLE = function(t4, e2, n2) {
  t4 = t4 >>> 0, e2 = e2 >>> 0, n2 || c(t4, e2, this.length);
  let r4 = this[t4], o2 = 1, i6 = 0;
  for (; ++i6 < e2 && (o2 *= 256); ) r4 += this[t4 + i6] * o2;
  return r4;
};
f.prototype.readUintBE = f.prototype.readUIntBE = function(t4, e2, n2) {
  t4 = t4 >>> 0, e2 = e2 >>> 0, n2 || c(t4, e2, this.length);
  let r4 = this[t4 + --e2], o2 = 1;
  for (; e2 > 0 && (o2 *= 256); ) r4 += this[t4 + --e2] * o2;
  return r4;
};
f.prototype.readUint8 = f.prototype.readUInt8 = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 1, this.length), this[t4];
};
f.prototype.readUint16LE = f.prototype.readUInt16LE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 2, this.length), this[t4] | this[t4 + 1] << 8;
};
f.prototype.readUint16BE = f.prototype.readUInt16BE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 2, this.length), this[t4] << 8 | this[t4 + 1];
};
f.prototype.readUint32LE = f.prototype.readUInt32LE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 4, this.length), (this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16) + this[t4 + 3] * 16777216;
};
f.prototype.readUint32BE = f.prototype.readUInt32BE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 4, this.length), this[t4] * 16777216 + (this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3]);
};
f.prototype.readBigUInt64LE = E(function(t4) {
  t4 = t4 >>> 0, U(t4, "offset");
  let e2 = this[t4], n2 = this[t4 + 7];
  (e2 === void 0 || n2 === void 0) && T(t4, this.length - 8);
  let r4 = e2 + this[++t4] * 2 ** 8 + this[++t4] * 2 ** 16 + this[++t4] * 2 ** 24, o2 = this[++t4] + this[++t4] * 2 ** 8 + this[++t4] * 2 ** 16 + n2 * 2 ** 24;
  return BigInt(r4) + (BigInt(o2) << BigInt(32));
});
f.prototype.readBigUInt64BE = E(function(t4) {
  t4 = t4 >>> 0, U(t4, "offset");
  let e2 = this[t4], n2 = this[t4 + 7];
  (e2 === void 0 || n2 === void 0) && T(t4, this.length - 8);
  let r4 = e2 * 2 ** 24 + this[++t4] * 2 ** 16 + this[++t4] * 2 ** 8 + this[++t4], o2 = this[++t4] * 2 ** 24 + this[++t4] * 2 ** 16 + this[++t4] * 2 ** 8 + n2;
  return (BigInt(r4) << BigInt(32)) + BigInt(o2);
});
f.prototype.readIntLE = function(t4, e2, n2) {
  t4 = t4 >>> 0, e2 = e2 >>> 0, n2 || c(t4, e2, this.length);
  let r4 = this[t4], o2 = 1, i6 = 0;
  for (; ++i6 < e2 && (o2 *= 256); ) r4 += this[t4 + i6] * o2;
  return o2 *= 128, r4 >= o2 && (r4 -= Math.pow(2, 8 * e2)), r4;
};
f.prototype.readIntBE = function(t4, e2, n2) {
  t4 = t4 >>> 0, e2 = e2 >>> 0, n2 || c(t4, e2, this.length);
  let r4 = e2, o2 = 1, i6 = this[t4 + --r4];
  for (; r4 > 0 && (o2 *= 256); ) i6 += this[t4 + --r4] * o2;
  return o2 *= 128, i6 >= o2 && (i6 -= Math.pow(2, 8 * e2)), i6;
};
f.prototype.readInt8 = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 1, this.length), this[t4] & 128 ? (255 - this[t4] + 1) * -1 : this[t4];
};
f.prototype.readInt16LE = function(t4, e2) {
  t4 = t4 >>> 0, e2 || c(t4, 2, this.length);
  let n2 = this[t4] | this[t4 + 1] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
};
f.prototype.readInt16BE = function(t4, e2) {
  t4 = t4 >>> 0, e2 || c(t4, 2, this.length);
  let n2 = this[t4 + 1] | this[t4] << 8;
  return n2 & 32768 ? n2 | 4294901760 : n2;
};
f.prototype.readInt32LE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 4, this.length), this[t4] | this[t4 + 1] << 8 | this[t4 + 2] << 16 | this[t4 + 3] << 24;
};
f.prototype.readInt32BE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 4, this.length), this[t4] << 24 | this[t4 + 1] << 16 | this[t4 + 2] << 8 | this[t4 + 3];
};
f.prototype.readBigInt64LE = E(function(t4) {
  t4 = t4 >>> 0, U(t4, "offset");
  let e2 = this[t4], n2 = this[t4 + 7];
  (e2 === void 0 || n2 === void 0) && T(t4, this.length - 8);
  let r4 = this[t4 + 4] + this[t4 + 5] * 2 ** 8 + this[t4 + 6] * 2 ** 16 + (n2 << 24);
  return (BigInt(r4) << BigInt(32)) + BigInt(e2 + this[++t4] * 2 ** 8 + this[++t4] * 2 ** 16 + this[++t4] * 2 ** 24);
});
f.prototype.readBigInt64BE = E(function(t4) {
  t4 = t4 >>> 0, U(t4, "offset");
  let e2 = this[t4], n2 = this[t4 + 7];
  (e2 === void 0 || n2 === void 0) && T(t4, this.length - 8);
  let r4 = (e2 << 24) + this[++t4] * 2 ** 16 + this[++t4] * 2 ** 8 + this[++t4];
  return (BigInt(r4) << BigInt(32)) + BigInt(this[++t4] * 2 ** 24 + this[++t4] * 2 ** 16 + this[++t4] * 2 ** 8 + n2);
});
f.prototype.readFloatLE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 4, this.length), _(this, t4, true, 23, 4);
};
f.prototype.readFloatBE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 4, this.length), _(this, t4, false, 23, 4);
};
f.prototype.readDoubleLE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 8, this.length), _(this, t4, true, 52, 8);
};
f.prototype.readDoubleBE = function(t4, e2) {
  return t4 = t4 >>> 0, e2 || c(t4, 8, this.length), _(this, t4, false, 52, 8);
};
function g(t4, e2, n2, r4, o2, i6) {
  if (!f.isBuffer(t4)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e2 > o2 || e2 < i6) throw new RangeError('"value" argument is out of bounds');
  if (n2 + r4 > t4.length) throw new RangeError("Index out of range");
}
f.prototype.writeUintLE = f.prototype.writeUIntLE = function(t4, e2, n2, r4) {
  if (t4 = +t4, e2 = e2 >>> 0, n2 = n2 >>> 0, !r4) {
    let u5 = Math.pow(2, 8 * n2) - 1;
    g(this, t4, e2, n2, u5, 0);
  }
  let o2 = 1, i6 = 0;
  for (this[e2] = t4 & 255; ++i6 < n2 && (o2 *= 256); ) this[e2 + i6] = t4 / o2 & 255;
  return e2 + n2;
};
f.prototype.writeUintBE = f.prototype.writeUIntBE = function(t4, e2, n2, r4) {
  if (t4 = +t4, e2 = e2 >>> 0, n2 = n2 >>> 0, !r4) {
    let u5 = Math.pow(2, 8 * n2) - 1;
    g(this, t4, e2, n2, u5, 0);
  }
  let o2 = n2 - 1, i6 = 1;
  for (this[e2 + o2] = t4 & 255; --o2 >= 0 && (i6 *= 256); ) this[e2 + o2] = t4 / i6 & 255;
  return e2 + n2;
};
f.prototype.writeUint8 = f.prototype.writeUInt8 = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 1, 255, 0), this[e2] = t4 & 255, e2 + 1;
};
f.prototype.writeUint16LE = f.prototype.writeUInt16LE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 2, 65535, 0), this[e2] = t4 & 255, this[e2 + 1] = t4 >>> 8, e2 + 2;
};
f.prototype.writeUint16BE = f.prototype.writeUInt16BE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 2, 65535, 0), this[e2] = t4 >>> 8, this[e2 + 1] = t4 & 255, e2 + 2;
};
f.prototype.writeUint32LE = f.prototype.writeUInt32LE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 4, 4294967295, 0), this[e2 + 3] = t4 >>> 24, this[e2 + 2] = t4 >>> 16, this[e2 + 1] = t4 >>> 8, this[e2] = t4 & 255, e2 + 4;
};
f.prototype.writeUint32BE = f.prototype.writeUInt32BE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 4, 4294967295, 0), this[e2] = t4 >>> 24, this[e2 + 1] = t4 >>> 16, this[e2 + 2] = t4 >>> 8, this[e2 + 3] = t4 & 255, e2 + 4;
};
function Q(t4, e2, n2, r4, o2) {
  rt(e2, r4, o2, t4, n2, 7);
  let i6 = Number(e2 & BigInt(4294967295));
  t4[n2++] = i6, i6 = i6 >> 8, t4[n2++] = i6, i6 = i6 >> 8, t4[n2++] = i6, i6 = i6 >> 8, t4[n2++] = i6;
  let u5 = Number(e2 >> BigInt(32) & BigInt(4294967295));
  return t4[n2++] = u5, u5 = u5 >> 8, t4[n2++] = u5, u5 = u5 >> 8, t4[n2++] = u5, u5 = u5 >> 8, t4[n2++] = u5, n2;
}
function Z(t4, e2, n2, r4, o2) {
  rt(e2, r4, o2, t4, n2, 7);
  let i6 = Number(e2 & BigInt(4294967295));
  t4[n2 + 7] = i6, i6 = i6 >> 8, t4[n2 + 6] = i6, i6 = i6 >> 8, t4[n2 + 5] = i6, i6 = i6 >> 8, t4[n2 + 4] = i6;
  let u5 = Number(e2 >> BigInt(32) & BigInt(4294967295));
  return t4[n2 + 3] = u5, u5 = u5 >> 8, t4[n2 + 2] = u5, u5 = u5 >> 8, t4[n2 + 1] = u5, u5 = u5 >> 8, t4[n2] = u5, n2 + 8;
}
f.prototype.writeBigUInt64LE = E(function(t4, e2 = 0) {
  return Q(this, t4, e2, BigInt(0), BigInt("0xffffffffffffffff"));
});
f.prototype.writeBigUInt64BE = E(function(t4, e2 = 0) {
  return Z(this, t4, e2, BigInt(0), BigInt("0xffffffffffffffff"));
});
f.prototype.writeIntLE = function(t4, e2, n2, r4) {
  if (t4 = +t4, e2 = e2 >>> 0, !r4) {
    let s14 = Math.pow(2, 8 * n2 - 1);
    g(this, t4, e2, n2, s14 - 1, -s14);
  }
  let o2 = 0, i6 = 1, u5 = 0;
  for (this[e2] = t4 & 255; ++o2 < n2 && (i6 *= 256); ) t4 < 0 && u5 === 0 && this[e2 + o2 - 1] !== 0 && (u5 = 1), this[e2 + o2] = Math.trunc(t4 / i6) - u5 & 255;
  return e2 + n2;
};
f.prototype.writeIntBE = function(t4, e2, n2, r4) {
  if (t4 = +t4, e2 = e2 >>> 0, !r4) {
    let s14 = Math.pow(2, 8 * n2 - 1);
    g(this, t4, e2, n2, s14 - 1, -s14);
  }
  let o2 = n2 - 1, i6 = 1, u5 = 0;
  for (this[e2 + o2] = t4 & 255; --o2 >= 0 && (i6 *= 256); ) t4 < 0 && u5 === 0 && this[e2 + o2 + 1] !== 0 && (u5 = 1), this[e2 + o2] = Math.trunc(t4 / i6) - u5 & 255;
  return e2 + n2;
};
f.prototype.writeInt8 = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 1, 127, -128), t4 < 0 && (t4 = 255 + t4 + 1), this[e2] = t4 & 255, e2 + 1;
};
f.prototype.writeInt16LE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 2, 32767, -32768), this[e2] = t4 & 255, this[e2 + 1] = t4 >>> 8, e2 + 2;
};
f.prototype.writeInt16BE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 2, 32767, -32768), this[e2] = t4 >>> 8, this[e2 + 1] = t4 & 255, e2 + 2;
};
f.prototype.writeInt32LE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 4, 2147483647, -2147483648), this[e2] = t4 & 255, this[e2 + 1] = t4 >>> 8, this[e2 + 2] = t4 >>> 16, this[e2 + 3] = t4 >>> 24, e2 + 4;
};
f.prototype.writeInt32BE = function(t4, e2, n2) {
  return t4 = +t4, e2 = e2 >>> 0, n2 || g(this, t4, e2, 4, 2147483647, -2147483648), t4 < 0 && (t4 = 4294967295 + t4 + 1), this[e2] = t4 >>> 24, this[e2 + 1] = t4 >>> 16, this[e2 + 2] = t4 >>> 8, this[e2 + 3] = t4 & 255, e2 + 4;
};
f.prototype.writeBigInt64LE = E(function(t4, e2 = 0) {
  return Q(this, t4, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
f.prototype.writeBigInt64BE = E(function(t4, e2 = 0) {
  return Z(this, t4, e2, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
});
function tt(t4, e2, n2, r4, o2, i6) {
  if (n2 + r4 > t4.length) throw new RangeError("Index out of range");
  if (n2 < 0) throw new RangeError("Index out of range");
}
function et(t4, e2, n2, r4, o2) {
  return e2 = +e2, n2 = n2 >>> 0, o2 || tt(t4, e2, n2, 4, 34028234663852886e22, -34028234663852886e22), z(t4, e2, n2, r4, 23, 4), n2 + 4;
}
f.prototype.writeFloatLE = function(t4, e2, n2) {
  return et(this, t4, e2, true, n2);
};
f.prototype.writeFloatBE = function(t4, e2, n2) {
  return et(this, t4, e2, false, n2);
};
function nt(t4, e2, n2, r4, o2) {
  return e2 = +e2, n2 = n2 >>> 0, o2 || tt(t4, e2, n2, 8, 17976931348623157e292, -17976931348623157e292), z(t4, e2, n2, r4, 52, 8), n2 + 8;
}
f.prototype.writeDoubleLE = function(t4, e2, n2) {
  return nt(this, t4, e2, true, n2);
};
f.prototype.writeDoubleBE = function(t4, e2, n2) {
  return nt(this, t4, e2, false, n2);
};
f.prototype.copy = function(t4, e2, n2, r4) {
  if (!f.isBuffer(t4)) throw new TypeError("argument should be a Buffer");
  if (n2 || (n2 = 0), !r4 && r4 !== 0 && (r4 = this.length), e2 >= t4.length && (e2 = t4.length), e2 || (e2 = 0), r4 > 0 && r4 < n2 && (r4 = n2), r4 === n2 || t4.length === 0 || this.length === 0) return 0;
  if (e2 < 0) throw new RangeError("targetStart out of bounds");
  if (n2 < 0 || n2 >= this.length) throw new RangeError("Index out of range");
  if (r4 < 0) throw new RangeError("sourceEnd out of bounds");
  r4 > this.length && (r4 = this.length), t4.length - e2 < r4 - n2 && (r4 = t4.length - e2 + n2);
  let o2 = r4 - n2;
  return this === t4 && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(e2, n2, r4) : Uint8Array.prototype.set.call(t4, this.subarray(n2, r4), e2), o2;
};
f.prototype.fill = function(t4, e2, n2, r4) {
  if (typeof t4 == "string") {
    if (typeof e2 == "string" ? (r4 = e2, e2 = 0, n2 = this.length) : typeof n2 == "string" && (r4 = n2, n2 = this.length), r4 !== void 0 && typeof r4 != "string") throw new TypeError("encoding must be a string");
    if (typeof r4 == "string" && !f.isEncoding(r4)) throw new TypeError("Unknown encoding: " + r4);
    if (t4.length === 1) {
      let i6 = t4.charCodeAt(0);
      (r4 === "utf8" && i6 < 128 || r4 === "latin1") && (t4 = i6);
    }
  } else typeof t4 == "number" ? t4 = t4 & 255 : typeof t4 == "boolean" && (t4 = Number(t4));
  if (e2 < 0 || this.length < e2 || this.length < n2) throw new RangeError("Out of range index");
  if (n2 <= e2) return this;
  e2 = e2 >>> 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, t4 || (t4 = 0);
  let o2;
  if (typeof t4 == "number") for (o2 = e2; o2 < n2; ++o2) this[o2] = t4;
  else {
    let i6 = f.isBuffer(t4) ? t4 : f.from(t4, r4), u5 = i6.length;
    if (u5 === 0) throw new TypeError('The value "' + t4 + '" is invalid for argument "value"');
    for (o2 = 0; o2 < n2 - e2; ++o2) this[o2 + e2] = i6[o2 % u5];
  }
  return this;
};
var A = {};
function C(t4, e2, n2) {
  A[t4] = class extends n2 {
    constructor() {
      super(), Object.defineProperty(this, "message", { value: Reflect.apply(e2, this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${t4}]`, this.stack, delete this.name;
    }
    get code() {
      return t4;
    }
    set code(r4) {
      Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: r4, writable: true });
    }
    toString() {
      return `${this.name} [${t4}]: ${this.message}`;
    }
  };
}
C("ERR_BUFFER_OUT_OF_BOUNDS", function(t4) {
  return t4 ? `${t4} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
}, RangeError);
C("ERR_INVALID_ARG_TYPE", function(t4, e2) {
  return `The "${t4}" argument must be of type number. Received type ${typeof e2}`;
}, TypeError);
C("ERR_OUT_OF_RANGE", function(t4, e2, n2) {
  let r4 = `The value of "${t4}" is out of range.`, o2 = n2;
  return Number.isInteger(n2) && Math.abs(n2) > 2 ** 32 ? o2 = D(String(n2)) : typeof n2 == "bigint" && (o2 = String(n2), (n2 > BigInt(2) ** BigInt(32) || n2 < -(BigInt(2) ** BigInt(32))) && (o2 = D(o2)), o2 += "n"), r4 += ` It must be ${e2}. Received ${o2}`, r4;
}, RangeError);
function D(t4) {
  let e2 = "", n2 = t4.length, r4 = t4[0] === "-" ? 1 : 0;
  for (; n2 >= r4 + 4; n2 -= 3) e2 = `_${t4.slice(n2 - 3, n2)}${e2}`;
  return `${t4.slice(0, n2)}${e2}`;
}
function St(t4, e2, n2) {
  U(e2, "offset"), (t4[e2] === void 0 || t4[e2 + n2] === void 0) && T(e2, t4.length - (n2 + 1));
}
function rt(t4, e2, n2, r4, o2, i6) {
  if (t4 > n2 || t4 < e2) {
    let u5 = typeof e2 == "bigint" ? "n" : "", s14;
    throw i6 > 3 ? s14 = e2 === 0 || e2 === BigInt(0) ? `>= 0${u5} and < 2${u5} ** ${(i6 + 1) * 8}${u5}` : `>= -(2${u5} ** ${(i6 + 1) * 8 - 1}${u5}) and < 2 ** ${(i6 + 1) * 8 - 1}${u5}` : s14 = `>= ${e2}${u5} and <= ${n2}${u5}`, new A.ERR_OUT_OF_RANGE("value", s14, t4);
  }
  St(r4, o2, i6);
}
function U(t4, e2) {
  if (typeof t4 != "number") throw new A.ERR_INVALID_ARG_TYPE(e2, "number", t4);
}
function T(t4, e2, n2) {
  throw Math.floor(t4) !== t4 ? (U(t4, n2), new A.ERR_OUT_OF_RANGE(n2 || "offset", "an integer", t4)) : e2 < 0 ? new A.ERR_BUFFER_OUT_OF_BOUNDS() : new A.ERR_OUT_OF_RANGE(n2 || "offset", `>= ${n2 ? 1 : 0} and <= ${e2}`, t4);
}
var xt = /[^\w+/-]/g;
function Mt(t4) {
  if (t4 = t4.split("=")[0], t4 = t4.trim().replace(xt, ""), t4.length < 2) return "";
  for (; t4.length % 4 !== 0; ) t4 = t4 + "=";
  return t4;
}
function x(t4, e2) {
  e2 = e2 || Number.POSITIVE_INFINITY;
  let n2, r4 = t4.length, o2 = null, i6 = [];
  for (let u5 = 0; u5 < r4; ++u5) {
    if (n2 = t4.charCodeAt(u5), n2 > 55295 && n2 < 57344) {
      if (!o2) {
        if (n2 > 56319) {
          (e2 -= 3) > -1 && i6.push(239, 191, 189);
          continue;
        } else if (u5 + 1 === r4) {
          (e2 -= 3) > -1 && i6.push(239, 191, 189);
          continue;
        }
        o2 = n2;
        continue;
      }
      if (n2 < 56320) {
        (e2 -= 3) > -1 && i6.push(239, 191, 189), o2 = n2;
        continue;
      }
      n2 = (o2 - 55296 << 10 | n2 - 56320) + 65536;
    } else o2 && (e2 -= 3) > -1 && i6.push(239, 191, 189);
    if (o2 = null, n2 < 128) {
      if ((e2 -= 1) < 0) break;
      i6.push(n2);
    } else if (n2 < 2048) {
      if ((e2 -= 2) < 0) break;
      i6.push(n2 >> 6 | 192, n2 & 63 | 128);
    } else if (n2 < 65536) {
      if ((e2 -= 3) < 0) break;
      i6.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else if (n2 < 1114112) {
      if ((e2 -= 4) < 0) break;
      i6.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, n2 & 63 | 128);
    } else throw new Error("Invalid code point");
  }
  return i6;
}
function $t(t4) {
  let e2 = [];
  for (let n2 = 0; n2 < t4.length; ++n2) e2.push(t4.charCodeAt(n2) & 255);
  return e2;
}
function Ct(t4, e2) {
  let n2, r4, o2, i6 = [];
  for (let u5 = 0; u5 < t4.length && !((e2 -= 2) < 0); ++u5) n2 = t4.charCodeAt(u5), r4 = n2 >> 8, o2 = n2 % 256, i6.push(o2, r4);
  return i6;
}
function ot(t4) {
  return at(Mt(t4));
}
function O(t4, e2, n2, r4) {
  let o2;
  for (o2 = 0; o2 < r4 && !(o2 + n2 >= e2.length || o2 >= t4.length); ++o2) e2[o2 + n2] = t4[o2];
  return o2;
}
function b(t4, e2) {
  return t4 instanceof e2 || t4 != null && t4.constructor != null && t4.constructor.name != null && t4.constructor.name === e2.name;
}
function P(t4) {
  return t4 !== t4;
}
var Pt = function() {
  let t4 = "0123456789abcdef", e2 = Array.from({ length: 256 });
  for (let n2 = 0; n2 < 16; ++n2) {
    let r4 = n2 * 16;
    for (let o2 = 0; o2 < 16; ++o2) e2[r4 + o2] = t4[n2] + t4[o2];
  }
  return e2;
}();
function E(t4) {
  return typeof BigInt > "u" ? kt : t4;
}
function kt() {
  throw new Error("BigInt not supported");
}
var jt = globalThis.Buffer || f;
var Yt = globalThis.Blob;
var Dt = v("buffer.resolveObjectURL");
var zt = v("buffer.transcode");
var Gt = v("buffer.isUtf8");
var Vt = v("buffer.isAscii");
var Xt = globalThis.btoa.bind(globalThis);
var qt = globalThis.atob.bind(globalThis);

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/identity.mjs
var a = Symbol.for("yaml.alias");
var y2 = Symbol.for("yaml.document");
var o = Symbol.for("yaml.map");
var l = Symbol.for("yaml.pair");
var r = Symbol.for("yaml.scalar");
var s = Symbol.for("yaml.seq");
var c2 = Symbol.for("yaml.node.type");
var i = (t4) => !!t4 && typeof t4 == "object" && t4[c2] === a;
var m2 = (t4) => !!t4 && typeof t4 == "object" && t4[c2] === y2;
var b2 = (t4) => !!t4 && typeof t4 == "object" && t4[c2] === o;
var p = (t4) => !!t4 && typeof t4 == "object" && t4[c2] === l;
var e = (t4) => !!t4 && typeof t4 == "object" && t4[c2] === r;
var S2 = (t4) => !!t4 && typeof t4 == "object" && t4[c2] === s;
function f2(t4) {
  if (t4 && typeof t4 == "object") switch (t4[c2]) {
    case o:
    case s:
      return true;
  }
  return false;
}
function n(t4) {
  if (t4 && typeof t4 == "object") switch (t4[c2]) {
    case a:
    case o:
    case r:
    case s:
      return true;
  }
  return false;
}
var u = (t4) => (e(t4) || f2(t4)) && !!t4.anchor;

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/visit.mjs
var i2 = Symbol("break visit");
var V = Symbol("skip children");
var s2 = Symbol("remove node");
function y3(e2, l8) {
  let t4 = w(l8);
  m2(e2) ? r2(null, e2.contents, t4, Object.freeze([e2])) === s2 && (e2.contents = null) : r2(null, e2, t4, Object.freeze([]));
}
y3.BREAK = i2;
y3.SKIP = V;
y3.REMOVE = s2;
function r2(e2, l8, t4, c5) {
  let n2 = z2(e2, l8, t4, c5);
  if (n(n2) || p(n2)) return A2(e2, c5, n2), r2(e2, n2, t4, c5);
  if (typeof n2 != "symbol") {
    if (f2(l8)) {
      c5 = Object.freeze(c5.concat(l8));
      for (let f7 = 0; f7 < l8.items.length; ++f7) {
        let u5 = r2(f7, l8.items[f7], t4, c5);
        if (typeof u5 == "number") f7 = u5 - 1;
        else {
          if (u5 === i2) return i2;
          u5 === s2 && (l8.items.splice(f7, 1), f7 -= 1);
        }
      }
    } else if (p(l8)) {
      c5 = Object.freeze(c5.concat(l8));
      let f7 = r2("key", l8.key, t4, c5);
      if (f7 === i2) return i2;
      f7 === s2 && (l8.key = null);
      let u5 = r2("value", l8.value, t4, c5);
      if (u5 === i2) return i2;
      u5 === s2 && (l8.value = null);
    }
  }
  return n2;
}
async function O2(e2, l8) {
  let t4 = w(l8);
  m2(e2) ? await a2(null, e2.contents, t4, Object.freeze([e2])) === s2 && (e2.contents = null) : await a2(null, e2, t4, Object.freeze([]));
}
O2.BREAK = i2;
O2.SKIP = V;
O2.REMOVE = s2;
async function a2(e2, l8, t4, c5) {
  let n2 = await z2(e2, l8, t4, c5);
  if (n(n2) || p(n2)) return A2(e2, c5, n2), a2(e2, n2, t4, c5);
  if (typeof n2 != "symbol") {
    if (f2(l8)) {
      c5 = Object.freeze(c5.concat(l8));
      for (let f7 = 0; f7 < l8.items.length; ++f7) {
        let u5 = await a2(f7, l8.items[f7], t4, c5);
        if (typeof u5 == "number") f7 = u5 - 1;
        else {
          if (u5 === i2) return i2;
          u5 === s2 && (l8.items.splice(f7, 1), f7 -= 1);
        }
      }
    } else if (p(l8)) {
      c5 = Object.freeze(c5.concat(l8));
      let f7 = await a2("key", l8.key, t4, c5);
      if (f7 === i2) return i2;
      f7 === s2 && (l8.key = null);
      let u5 = await a2("value", l8.value, t4, c5);
      if (u5 === i2) return i2;
      u5 === s2 && (l8.value = null);
    }
  }
  return n2;
}
function w(e2) {
  return typeof e2 == "object" && (e2.Collection || e2.Node || e2.Value) ? Object.assign({ Alias: e2.Node, Map: e2.Node, Scalar: e2.Node, Seq: e2.Node }, e2.Value && { Map: e2.Value, Scalar: e2.Value, Seq: e2.Value }, e2.Collection && { Map: e2.Collection, Seq: e2.Collection }, e2) : e2;
}
function z2(e2, l8, t4, c5) {
  if (typeof t4 == "function") return t4(e2, l8, c5);
  if (b2(l8)) return t4.Map?.(e2, l8, c5);
  if (S2(l8)) return t4.Seq?.(e2, l8, c5);
  if (p(l8)) return t4.Pair?.(e2, l8, c5);
  if (e(l8)) return t4.Scalar?.(e2, l8, c5);
  if (i(l8)) return t4.Alias?.(e2, l8, c5);
}
function A2(e2, l8, t4) {
  let c5 = l8[l8.length - 1];
  if (f2(c5)) c5.items[e2] = t4;
  else if (p(c5)) e2 === "key" ? c5.key = t4 : c5.value = t4;
  else if (m2(c5)) c5.contents = t4;
  else {
    let n2 = i(c5) ? "alias" : "scalar";
    throw new Error(`Cannot replace node with ${n2} parent`);
  }
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/doc/anchors.mjs
function m3(r4) {
  if (/[\x00-\x19\s,[\]{}]/.test(r4)) {
    let n2 = `Anchor must not contain whitespace or control characters: ${JSON.stringify(r4)}`;
    throw new Error(n2);
  }
  return true;
}
function f3(r4) {
  let t4 = /* @__PURE__ */ new Set();
  return y3(r4, { Value(n2, e2) {
    e2.anchor && t4.add(e2.anchor);
  } }), t4;
}
function l2(r4, t4) {
  for (let n2 = 1; ; ++n2) {
    let e2 = `${r4}${n2}`;
    if (!t4.has(e2)) return e2;
  }
}
function w2(r4, t4) {
  let n2 = [], e2 = /* @__PURE__ */ new Map(), c5 = null;
  return { onAnchor: (s14) => {
    n2.push(s14), c5 || (c5 = f3(r4));
    let o2 = l2(t4, c5);
    return c5.add(o2), o2;
  }, setAnchors: () => {
    for (let s14 of n2) {
      let o2 = e2.get(s14);
      if (typeof o2 == "object" && o2.anchor && (e(o2.node) || f2(o2.node))) o2.node.anchor = o2.anchor;
      else {
        let a4 = new Error("Failed to resolve repeated object (this should not happen)");
        throw a4.source = s14, a4;
      }
    }
  }, sourceObjects: e2 };
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/doc/applyReviver.mjs
function s3(o2, c5, d3, e2) {
  if (e2 && typeof e2 == "object") if (Array.isArray(e2)) for (let f7 = 0, t4 = e2.length; f7 < t4; ++f7) {
    let n2 = e2[f7], i6 = s3(o2, e2, String(f7), n2);
    i6 === void 0 ? delete e2[f7] : i6 !== n2 && (e2[f7] = i6);
  }
  else if (e2 instanceof Map) for (let f7 of Array.from(e2.keys())) {
    let t4 = e2.get(f7), n2 = s3(o2, e2, f7, t4);
    n2 === void 0 ? e2.delete(f7) : n2 !== t4 && e2.set(f7, n2);
  }
  else if (e2 instanceof Set) for (let f7 of Array.from(e2)) {
    let t4 = s3(o2, e2, f7, f7);
    t4 === void 0 ? e2.delete(f7) : t4 !== f7 && (e2.delete(f7), e2.add(t4));
  }
  else for (let [f7, t4] of Object.entries(e2)) {
    let n2 = s3(o2, e2, f7, t4);
    n2 === void 0 ? delete e2[f7] : n2 !== t4 && (e2[f7] = n2);
  }
  return o2.call(c5, d3, e2);
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/toJS.mjs
function s4(r4, e2, n2) {
  if (Array.isArray(r4)) return r4.map((o2, t4) => s4(o2, String(t4), n2));
  if (r4 && typeof r4.toJSON == "function") {
    if (!n2 || !u(r4)) return r4.toJSON(e2, n2);
    let o2 = { aliasCount: 0, count: 1, res: void 0 };
    n2.anchors.set(r4, o2), n2.onCreate = (i6) => {
      o2.res = i6, delete n2.onCreate;
    };
    let t4 = r4.toJSON(e2, n2);
    return n2.onCreate && n2.onCreate(t4), t4;
  }
  return typeof r4 == "bigint" && !n2?.keep ? Number(r4) : r4;
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/Node.mjs
var c3 = class {
  constructor(t4) {
    Object.defineProperty(this, c2, { value: t4 });
  }
  clone() {
    let t4 = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return this.range && (t4.range = this.range.slice()), t4;
  }
  toJS(t4, { mapAsMap: i6, maxAliasCount: r4, onAnchor: o2, reviver: n2 } = {}) {
    if (!m2(t4)) throw new TypeError("A document argument is required");
    let s14 = { anchors: /* @__PURE__ */ new Map(), doc: t4, keep: true, mapAsMap: i6 === true, mapKeyWarned: false, maxAliasCount: typeof r4 == "number" ? r4 : 100 }, e2 = s4(this, "", s14);
    if (typeof o2 == "function") for (let { count: p5, res: a4 } of s14.anchors.values()) o2(a4, p5);
    return typeof n2 == "function" ? s3(n2, { "": e2 }, "", e2) : e2;
  }
};

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/Alias.mjs
var l3 = class extends c3 {
  constructor(e2) {
    super(a), this.source = e2, Object.defineProperty(this, "tag", { set() {
      throw new Error("Alias nodes cannot have tags");
    } });
  }
  resolve(e2) {
    let s14;
    return y3(e2, { Node: (r4, t4) => {
      if (t4 === this) return y3.BREAK;
      t4.anchor === this.source && (s14 = t4);
    } }), s14;
  }
  toJSON(e2, s14) {
    if (!s14) return { source: this.source };
    let { anchors: r4, doc: t4, maxAliasCount: i6 } = s14, a4 = this.resolve(t4);
    if (!a4) {
      let c5 = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(c5);
    }
    let o2 = r4.get(a4);
    if (o2 || (s4(a4, null, s14), o2 = r4.get(a4)), !o2 || o2.res === void 0) {
      let c5 = "This should not happen: Alias anchor was not resolved?";
      throw new ReferenceError(c5);
    }
    if (i6 >= 0 && (o2.count += 1, o2.aliasCount === 0 && (o2.aliasCount = u2(t4, a4, r4)), o2.count * o2.aliasCount > i6)) {
      let c5 = "Excessive alias count indicates a resource exhaustion attack";
      throw new ReferenceError(c5);
    }
    return o2.res;
  }
  toString(e2, s14, r4) {
    let t4 = `*${this.source}`;
    if (e2) {
      if (m3(this.source), e2.options.verifyAliasOrder && !e2.anchors.has(this.source)) {
        let i6 = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(i6);
      }
      if (e2.implicitKey) return `${t4} `;
    }
    return t4;
  }
};
function u2(n2, e2, s14) {
  if (i(e2)) {
    let r4 = e2.resolve(n2), t4 = s14 && r4 && s14.get(r4);
    return t4 ? t4.count * t4.aliasCount : 0;
  } else if (f2(e2)) {
    let r4 = 0;
    for (let t4 of e2.items) {
      let i6 = u2(n2, t4, s14);
      i6 > r4 && (r4 = i6);
    }
    return r4;
  } else if (p(e2)) {
    let r4 = u2(n2, e2.key, s14), t4 = u2(n2, e2.value, s14);
    return Math.max(r4, t4);
  }
  return 1;
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/Scalar.mjs
var p2 = (o2) => !o2 || typeof o2 != "function" && typeof o2 != "object";
var t = class extends c3 {
  constructor(L2) {
    super(r), this.value = L2;
  }
  toJSON(L2, e2) {
    return e2?.keep ? this.value : s4(this.value, L2, e2);
  }
  toString() {
    return String(this.value);
  }
};
t.BLOCK_FOLDED = "BLOCK_FOLDED";
t.BLOCK_LITERAL = "BLOCK_LITERAL";
t.PLAIN = "PLAIN";
t.QUOTE_DOUBLE = "QUOTE_DOUBLE";
t.QUOTE_SINGLE = "QUOTE_SINGLE";

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/doc/createNode.mjs
var S3 = "tag:yaml.org,2002:";
function w3(n2, i6, o2) {
  if (i6) {
    let r4 = o2.filter((e2) => e2.tag === i6), c5 = r4.find((e2) => !e2.format) ?? r4[0];
    if (!c5) throw new Error(`Tag ${i6} not found`);
    return c5;
  }
  return o2.find((r4) => r4.identify?.(n2) && !r4.format);
}
function P2(n2, i6, o2) {
  if (m2(n2) && (n2 = n2.contents), n(n2)) return n2;
  if (p(n2)) {
    let s14 = o2.schema[o].createNode?.(o2.schema, null, o2);
    return s14.items.push(n2), s14;
  }
  (n2 instanceof String || n2 instanceof Number || n2 instanceof Boolean || typeof BigInt < "u" && n2 instanceof BigInt) && (n2 = n2.valueOf());
  let { aliasDuplicateObjects: r4, onAnchor: c5, onTagObj: e2, schema: d3, sourceObjects: p5 } = o2, t4;
  if (r4 && n2 && typeof n2 == "object") {
    if (t4 = p5.get(n2), t4) return t4.anchor || (t4.anchor = c5(n2)), new l3(t4.anchor);
    t4 = { anchor: null, node: null }, p5.set(n2, t4);
  }
  i6?.startsWith("!!") && (i6 = S3 + i6.slice(2));
  let f7 = w3(n2, i6, d3.tags);
  if (!f7) {
    if (n2 && typeof n2.toJSON == "function" && (n2 = n2.toJSON()), !n2 || typeof n2 != "object") {
      let s14 = new t(n2);
      return t4 && (t4.node = s14), s14;
    }
    f7 = n2 instanceof Map ? d3[o] : Symbol.iterator in Object(n2) ? d3[s] : d3[o];
  }
  e2 && (e2(f7), delete o2.onTagObj);
  let m7 = f7?.createNode ? f7.createNode(o2.schema, n2, o2) : typeof f7?.nodeClass?.from == "function" ? f7.nodeClass.from(o2.schema, n2, o2) : new t(n2);
  return i6 ? m7.tag = i6 : f7.default || (m7.tag = f7.tag), t4 && (t4.node = m7), m7;
}

// https://esm.sh/node/process.mjs
var v2 = function() {
};
function u3(e2, t4 = {}) {
  v2.prototype.name = e2;
  let r4 = {};
  return new Proxy(v2, { get(n2, a4) {
    return a4 === "caller" ? null : a4 === "__createMock__" ? u3 : a4 === "__unenv__" ? true : a4 in t4 ? t4[a4] : r4[a4] = r4[a4] || u3(`${e2}.${a4.toString()}`);
  }, apply(n2, a4, o2) {
    return u3(`${e2}()`);
  }, construct(n2, a4, o2) {
    return u3(`[${e2}]`);
  }, enumerate() {
    return [];
  } });
}
var d2 = u3("mock");
function m4(e2) {
  return new Error(`[unenv] ${e2} is not implemented yet!`);
}
function s5(e2) {
  return Object.assign(() => {
    throw m4(e2);
  }, { __unenv__: true });
}
var b3 = Object.freeze(Object.create(null, { __unenv__: { get: () => true } }));
var p3 = /* @__PURE__ */ Object.create(null);
var h = globalThis.process?.env;
var l4 = (e2) => h || globalThis.__env__ || (e2 ? p3 : globalThis);
var x2 = new Proxy(p3, { get(e2, t4) {
  return l4()[t4] ?? p3[t4];
}, has(e2, t4) {
  let r4 = l4();
  return t4 in r4 || t4 in p3;
}, set(e2, t4, r4) {
  let n2 = l4(true);
  return n2[t4] = r4, true;
}, deleteProperty(e2, t4) {
  let r4 = l4(true);
  return delete r4[t4], true;
}, ownKeys() {
  let e2 = l4();
  return Object.keys(e2);
} });
var k2 = Object.assign(function(e2) {
  let t4 = Date.now(), r4 = Math.trunc(t4 / 1e3), n2 = t4 % 1e3 * 1e6;
  if (e2) {
    let a4 = r4 - e2[0], o2 = n2 - e2[0];
    return o2 < 0 && (a4 = a4 - 1, o2 = 1e9 + o2), [a4, o2];
  }
  return [r4, n2];
}, { bigint: function() {
  return BigInt(Date.now() * 1e6);
} });
var E2 = globalThis.queueMicrotask ? (e2, ...t4) => {
  globalThis.queueMicrotask(e2.bind(void 0, ...t4));
} : M2();
function M2() {
  let e2 = [], t4 = false, r4, n2 = -1;
  function a4() {
    !t4 || !r4 || (t4 = false, r4.length > 0 ? e2 = [...r4, ...e2] : n2 = -1, e2.length > 0 && o2());
  }
  function o2() {
    if (t4) return;
    let g3 = setTimeout(a4);
    t4 = true;
    let c5 = e2.length;
    for (; c5; ) {
      for (r4 = e2, e2 = []; ++n2 < c5; ) r4 && r4[n2]();
      n2 = -1, c5 = e2.length;
    }
    r4 = void 0, t4 = false, clearTimeout(g3);
  }
  return (g3, ...c5) => {
    e2.push(g3.bind(void 0, ...c5)), e2.length === 1 && !t4 && setTimeout(o2);
  };
}
var w4 = "unenv";
var L = [];
var y4 = "";
var C2 = { ares: "", http_parser: "", icu: "", modules: "", node: "", openssl: "", uv: "", v8: "", zlib: "" };
function i3() {
  return _2;
}
var P3 = i3;
var U2 = i3;
var O3 = i3;
var A3 = i3;
var j2 = i3;
var N2 = i3;
var T2 = function(e2) {
  return e2 === "message" || e2 === "multipleResolves" ? _2 : false;
};
var R2 = i3;
var I = i3;
var S4 = function(e2) {
  return [];
};
var B2 = () => 0;
var D2 = function(e2) {
  throw new Error("[unenv] process.binding is not supported");
};
var f4 = "/";
var F2 = function() {
  return f4;
};
var $2 = function(e2) {
  f4 = e2;
};
var q2 = function() {
  return 0;
};
var z3 = function() {
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
var Q2 = s5("process.abort");
var V2 = /* @__PURE__ */ new Set();
var X2 = "";
var Y2 = "";
var Z2 = b3;
var ee = false;
var se = () => 0;
var te = () => 0;
var re = s5("process.cpuUsage");
var ae = 0;
var ne = s5("process.dlopen");
var ie = i3;
var oe = i3;
var ce = s5("process.eventNames");
var ue = [];
var le = "";
var de = s5("process.exit");
var pe = /* @__PURE__ */ Object.create({ inspector: void 0, debug: void 0, uv: void 0, ipv6: void 0, tls_alpn: void 0, tls_sni: void 0, tls_ocsp: void 0, tls: void 0, cached_builtins: void 0 });
var ge = () => [];
var _e = s5("process.getMaxListeners");
var ve = s5("process.kill");
var fe = Object.assign(() => ({ arrayBuffers: 0, rss: 0, external: 0, heapTotal: 0, heapUsed: 0 }), { rss: () => 0 });
var me = 1e3;
var be = "";
var he = 1e3;
var xe = s5("process.rawListeners");
var ke = /* @__PURE__ */ Object.create({ name: "", lts: "", sourceUrl: void 0, headersUrl: void 0 });
var Ee = /* @__PURE__ */ Object.create({ compact: void 0, directory: void 0, filename: void 0, getReport: s5("process.report.getReport"), reportOnFatalError: void 0, reportOnSignal: void 0, reportOnUncaughtException: void 0, signal: void 0, writeReport: s5("process.report.writeReport") });
var Me = s5("process.resourceUsage");
var we = s5("process.setegid");
var Le = s5("process.seteuid");
var ye = s5("process.setgid");
var Ce = s5("process.setgroups");
var Pe = s5("process.setuid");
var Ue = s5("process.setMaxListeners");
var Oe = s5("process.setSourceMapsEnabled");
var Ae = d2.__createMock__("process.stdout");
var je = d2.__createMock__("process.stderr");
var Ne = d2.__createMock__("process.stdin");
var Te = false;
var Re = () => 0;
var Ie = 0;
var Se = s5("process.setUncaughtExceptionCaptureCallback");
var Be = () => false;
var De = false;
var Fe = s5("process.loadEnvFile");
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
var Ke = s5("process.assert");
var Ge = s5("process.openStdin");
var Je = s5("process._debugEnd");
var Qe = s5("process._debugProcess");
var Ve = s5("process._fatalException");
var Xe = s5("process._getActiveHandles");
var Ye = s5("process._getActiveRequests");
var Ze = s5("process._kill");
var es = [];
var ss = s5("process._rawDebug");
var ts = s5("process._startProfilerIdleNotifier");
var rs = s5("process.__stopProfilerIdleNotifier");
var as = s5("process._tickCallback");
var hs = s5("process._linkedBinding");
var ns = void 0;
var is = s5("process.initgroups");
var os = [];
var cs = i3;
var us = false;
var ls = [];
var ds = 0;
var ps = 0;
var _2 = { _events: ls, _eventsCount: ds, _exiting: us, _maxListeners: ps, _debugEnd: Je, _debugProcess: Qe, _fatalException: Ve, _getActiveHandles: Xe, _getActiveRequests: Ye, _kill: Ze, _preload_modules: es, _rawDebug: ss, _startProfilerIdleNotifier: ts, _stopProfilerIdleNotifier: rs, _tickCallback: as, domain: ns, initgroups: is, moduleLoadList: os, reallyExit: cs, exitCode: Ie, abort: Q2, addListener: U2, allowedNodeEnvironmentFlags: V2, hasUncaughtExceptionCaptureCallback: Be, setUncaughtExceptionCaptureCallback: Se, loadEnvFile: Fe, sourceMapsEnabled: De, throwDeprecation: He, mainModule: $e, permission: qe, channel: ze, arch: X2, argv: L, argv0: Y2, assert: Ke, binding: D2, chdir: $2, config: Z2, connected: ee, constrainedMemory: se, availableMemory: te, cpuUsage: re, cwd: F2, debugPort: ae, dlopen: ne, disconnect: ie, emit: T2, emitWarning: oe, env: x2, eventNames: ce, execArgv: ue, execPath: le, exit: de, finalization: We, features: pe, getBuiltinModule: J2, getegid: z3, geteuid: H2, getgid: W2, getgroups: G2, getuid: K2, getActiveResourcesInfo: ge, getMaxListeners: _e, hrtime: k2, kill: ve, listeners: S4, listenerCount: B2, memoryUsage: fe, nextTick: E2, on: P3, off: A3, once: O3, openStdin: Ge, pid: me, platform: be, ppid: he, prependListener: R2, prependOnceListener: I, rawListeners: xe, release: ke, removeAllListeners: N2, removeListener: j2, report: Ee, resourceUsage: Me, setegid: we, seteuid: Le, setgid: ye, setgroups: Ce, setuid: Pe, setMaxListeners: Ue, setSourceMapsEnabled: Oe, stderr: je, stdin: Ne, stdout: Ae, title: w4, traceDeprecation: Te, umask: q2, uptime: Re, version: y4, versions: C2 };
var xs = _2;

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/log.mjs
function i4(e2, n2) {
  (e2 === "debug" || e2 === "warn") && (typeof xs < "u" && xs.emitWarning ? xs.emitWarning(n2) : console.warn(n2));
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/Collection.mjs
function u4(o2, n2, t4) {
  let e2 = t4;
  for (let s14 = n2.length - 1; s14 >= 0; --s14) {
    let r4 = n2[s14];
    if (typeof r4 == "number" && Number.isInteger(r4) && r4 >= 0) {
      let c5 = [];
      c5[r4] = e2, e2 = c5;
    } else e2 = /* @__PURE__ */ new Map([[r4, e2]]);
  }
  return P2(e2, void 0, { aliasDuplicateObjects: false, keepUndefined: false, onAnchor: () => {
    throw new Error("This should not happen, please report a bug.");
  }, schema: o2, sourceObjects: /* @__PURE__ */ new Map() });
}
var g2 = (o2) => o2 == null || typeof o2 == "object" && !!o2[Symbol.iterator]().next().done;
var l5 = class extends c3 {
  constructor(n2, t4) {
    super(n2), Object.defineProperty(this, "schema", { value: t4, configurable: true, enumerable: false, writable: true });
  }
  clone(n2) {
    let t4 = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
    return n2 && (t4.schema = n2), t4.items = t4.items.map((e2) => n(e2) || p(e2) ? e2.clone(n2) : e2), this.range && (t4.range = this.range.slice()), t4;
  }
  addIn(n2, t4) {
    if (g2(n2)) this.add(t4);
    else {
      let [e2, ...s14] = n2, r4 = this.get(e2, true);
      if (f2(r4)) r4.addIn(s14, t4);
      else if (r4 === void 0 && this.schema) this.set(e2, u4(this.schema, s14, t4));
      else throw new Error(`Expected YAML collection at ${e2}. Remaining path: ${s14}`);
    }
  }
  deleteIn(n2) {
    let [t4, ...e2] = n2;
    if (e2.length === 0) return this.delete(t4);
    let s14 = this.get(t4, true);
    if (f2(s14)) return s14.deleteIn(e2);
    throw new Error(`Expected YAML collection at ${t4}. Remaining path: ${e2}`);
  }
  getIn(n2, t4) {
    let [e2, ...s14] = n2, r4 = this.get(e2, true);
    return s14.length === 0 ? !t4 && e(r4) ? r4.value : r4 : f2(r4) ? r4.getIn(s14, t4) : void 0;
  }
  hasAllNullValues(n2) {
    return this.items.every((t4) => {
      if (!p(t4)) return false;
      let e2 = t4.value;
      return e2 == null || n2 && e(e2) && e2.value == null && !e2.commentBefore && !e2.comment && !e2.tag;
    });
  }
  hasIn(n2) {
    let [t4, ...e2] = n2;
    if (e2.length === 0) return this.has(t4);
    let s14 = this.get(t4, true);
    return f2(s14) ? s14.hasIn(e2) : false;
  }
  setIn(n2, t4) {
    let [e2, ...s14] = n2;
    if (s14.length === 0) this.set(e2, t4);
    else {
      let r4 = this.get(e2, true);
      if (f2(r4)) r4.setIn(s14, t4);
      else if (r4 === void 0 && this.schema) this.set(e2, u4(this.schema, s14, t4));
      else throw new Error(`Expected YAML collection at ${e2}. Remaining path: ${s14}`);
    }
  }
};
l5.maxFlowStringSingleLineLength = 60;

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/stringify/stringifyComment.mjs
var s6 = (n2) => n2.replace(/^(?!$)(?: $)?/gm, "#");
function r3(n2, e2) {
  return /^\n+$/.test(n2) ? n2.substring(1) : e2 ? n2.replace(/^(?! *$)/gm, e2) : n2;
}
var t2 = (n2, e2, i6) => n2.endsWith(`
`) ? r3(i6, e2) : i6.includes(`
`) ? `
` + r3(i6, e2) : (n2.endsWith(" ") ? "" : " ") + i6;

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/stringify/foldFlowLines.mjs
var _3 = "flow";
var D3 = "block";
var b4 = "quoted";
function E3(e2, f7, h4 = "flow", { indentAtStart: a4, lineWidth: c5 = 80, minContentWidth: r4 = 20, onFold: F6, onOverflow: O6 } = {}) {
  if (!c5 || c5 < 0) return e2;
  let p5 = Math.max(1 + r4, 1 + c5 - f7.length);
  if (e2.length <= p5) return e2;
  let u5 = [], L2 = {}, g3 = c5 - f7.length;
  typeof a4 == "number" && (a4 > c5 - Math.max(2, r4) ? u5.push(0) : g3 = c5 - a4);
  let i6, o2, d3 = false, l8 = -1, $5 = -1, k3 = -1;
  h4 === D3 && (l8 = M3(e2, l8, f7.length), l8 !== -1 && (g3 = l8 + p5));
  for (let n2; n2 = e2[l8 += 1]; ) {
    if (h4 === b4 && n2 === "\\") {
      switch ($5 = l8, e2[l8 + 1]) {
        case "x":
          l8 += 3;
          break;
        case "u":
          l8 += 5;
          break;
        case "U":
          l8 += 9;
          break;
        default:
          l8 += 1;
      }
      k3 = l8;
    }
    if (n2 === `
`) h4 === D3 && (l8 = M3(e2, l8, f7.length)), g3 = l8 + f7.length + p5, i6 = void 0;
    else {
      if (n2 === " " && o2 && o2 !== " " && o2 !== `
` && o2 !== "	") {
        let s14 = e2[l8 + 1];
        s14 && s14 !== " " && s14 !== `
` && s14 !== "	" && (i6 = l8);
      }
      if (l8 >= g3) if (i6) u5.push(i6), g3 = i6 + p5, i6 = void 0;
      else if (h4 === b4) {
        for (; o2 === " " || o2 === "	"; ) o2 = n2, n2 = e2[l8 += 1], d3 = true;
        let s14 = l8 > k3 + 1 ? l8 - 2 : $5 - 1;
        if (L2[s14]) return e2;
        u5.push(s14), L2[s14] = true, g3 = s14 + p5, i6 = void 0;
      } else d3 = true;
    }
    o2 = n2;
  }
  if (d3 && O6 && O6(), u5.length === 0) return e2;
  F6 && F6();
  let w7 = e2.slice(0, u5[0]);
  for (let n2 = 0; n2 < u5.length; ++n2) {
    let s14 = u5[n2], t4 = u5[n2 + 1] || e2.length;
    s14 === 0 ? w7 = `
${f7}${e2.slice(0, t4)}` : (h4 === b4 && L2[s14] && (w7 += `${e2[s14]}\\`), w7 += `
${f7}${e2.slice(s14 + 1, t4)}`);
  }
  return w7;
}
function M3(e2, f7, h4) {
  let a4 = f7, c5 = f7 + 1, r4 = e2[c5];
  for (; r4 === " " || r4 === "	"; ) if (f7 < c5 + h4) r4 = e2[++f7];
  else {
    do
      r4 = e2[++f7];
    while (r4 && r4 !== `
`);
    a4 = f7, c5 = f7 + 1, r4 = e2[c5];
  }
  return a4;
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/stringify/stringifyString.mjs
var D4 = (s14, t4) => ({ indentAtStart: t4 ? s14.indent.length : s14.indentAtStart, lineWidth: s14.options.lineWidth, minContentWidth: s14.options.minContentWidth });
var F3 = (s14) => /^(%|---|\.\.\.)/m.test(s14);
function I2(s14, t4, n2) {
  if (!t4 || t4 < 0) return false;
  let l8 = t4 - n2, c5 = s14.length;
  if (c5 <= l8) return false;
  for (let r4 = 0, e2 = 0; r4 < c5; ++r4) if (s14[r4] === `
`) {
    if (r4 - e2 > l8) return true;
    if (e2 = r4 + 1, c5 - e2 <= l8) return false;
  }
  return true;
}
function S5(s14, t4) {
  let n2 = JSON.stringify(s14);
  if (t4.options.doubleQuotedAsJSON) return n2;
  let { implicitKey: l8 } = t4, c5 = t4.options.doubleQuotedMinMultiLineLength, r4 = t4.indent || (F3(s14) ? "  " : ""), e2 = "", f7 = 0;
  for (let i6 = 0, o2 = n2[i6]; o2; o2 = n2[++i6]) if (o2 === " " && n2[i6 + 1] === "\\" && n2[i6 + 2] === "n" && (e2 += n2.slice(f7, i6) + "\\ ", i6 += 1, f7 = i6, o2 = "\\"), o2 === "\\") switch (n2[i6 + 1]) {
    case "u":
      {
        e2 += n2.slice(f7, i6);
        let u5 = n2.substr(i6 + 2, 4);
        switch (u5) {
          case "0000":
            e2 += "\\0";
            break;
          case "0007":
            e2 += "\\a";
            break;
          case "000b":
            e2 += "\\v";
            break;
          case "001b":
            e2 += "\\e";
            break;
          case "0085":
            e2 += "\\N";
            break;
          case "00a0":
            e2 += "\\_";
            break;
          case "2028":
            e2 += "\\L";
            break;
          case "2029":
            e2 += "\\P";
            break;
          default:
            u5.substr(0, 2) === "00" ? e2 += "\\x" + u5.substr(2) : e2 += n2.substr(i6, 6);
        }
        i6 += 5, f7 = i6 + 1;
      }
      break;
    case "n":
      if (l8 || n2[i6 + 2] === '"' || n2.length < c5) i6 += 1;
      else {
        for (e2 += n2.slice(f7, i6) + `

`; n2[i6 + 2] === "\\" && n2[i6 + 3] === "n" && n2[i6 + 4] !== '"'; ) e2 += `
`, i6 += 2;
        e2 += r4, n2[i6 + 2] === " " && (e2 += "\\"), i6 += 1, f7 = i6 + 1;
      }
      break;
    default:
      i6 += 1;
  }
  return e2 = f7 ? e2 + n2.slice(f7) : n2, l8 ? e2 : E3(e2, r4, b4, D4(t4, false));
}
function w5(s14, t4) {
  if (t4.options.singleQuote === false || t4.implicitKey && s14.includes(`
`) || /[ \t]\n|\n[ \t]/.test(s14)) return S5(s14, t4);
  let n2 = t4.indent || (F3(s14) ? "  " : ""), l8 = "'" + s14.replace(/'/g, "''").replace(/\n+/g, `$&
${n2}`) + "'";
  return t4.implicitKey ? l8 : E3(l8, n2, _3, D4(t4, false));
}
function O4(s14, t4) {
  let { singleQuote: n2 } = t4.options, l8;
  if (n2 === false) l8 = S5;
  else {
    let c5 = s14.includes('"'), r4 = s14.includes("'");
    c5 && !r4 ? l8 = w5 : r4 && !c5 ? l8 = S5 : l8 = n2 ? w5 : S5;
  }
  return l8(s14, t4);
}
var B3;
try {
  B3 = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
} catch {
  B3 = /\n+(?!\n|$)/g;
}
function y5({ comment: s14, type: t4, value: n2 }, l8, c5, r4) {
  let { blockQuote: e2, commentString: f7, lineWidth: i6 } = l8.options;
  if (!e2 || /\n[\t ]+$/.test(n2) || /^\s*$/.test(n2)) return O4(n2, l8);
  let o2 = l8.indent || (l8.forceBlockIndent || F3(n2) ? "  " : ""), u5 = e2 === "literal" ? true : e2 === "folded" || t4 === t.BLOCK_FOLDED ? false : t4 === t.BLOCK_LITERAL ? true : !I2(n2, i6, o2.length);
  if (!n2) return u5 ? `|
` : `>
`;
  let g3, d3;
  for (d3 = n2.length; d3 > 0; --d3) {
    let h4 = n2[d3 - 1];
    if (h4 !== `
` && h4 !== "	" && h4 !== " ") break;
  }
  let a4 = n2.substring(d3), k3 = a4.indexOf(`
`);
  k3 === -1 ? g3 = "-" : n2 === a4 || k3 !== a4.length - 1 ? (g3 = "+", r4 && r4()) : g3 = "", a4 && (n2 = n2.slice(0, -a4.length), a4[a4.length - 1] === `
` && (a4 = a4.slice(0, -1)), a4 = a4.replace(B3, `$&${o2}`));
  let b5 = false, p5, _5 = -1;
  for (p5 = 0; p5 < n2.length; ++p5) {
    let h4 = n2[p5];
    if (h4 === " ") b5 = true;
    else if (h4 === `
`) _5 = p5;
    else break;
  }
  let L2 = n2.substring(0, _5 < p5 ? _5 + 1 : p5);
  L2 && (n2 = n2.substring(L2.length), L2 = L2.replace(/\n+/g, `$&${o2}`));
  let Q3 = (u5 ? "|" : ">") + (b5 ? o2 ? "2" : "1" : "") + g3;
  if (s14 && (Q3 += " " + f7(s14.replace(/ ?[\r\n]+/g, " ")), c5 && c5()), u5) return n2 = n2.replace(/\n+/g, `$&${o2}`), `${Q3}
${o2}${L2}${n2}${a4}`;
  n2 = n2.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${o2}`);
  let T3 = E3(`${L2}${n2}${a4}`, o2, D3, D4(l8, true));
  return `${Q3}
${o2}${T3}`;
}
function K3(s14, t4, n2, l8) {
  let { type: c5, value: r4 } = s14, { actualString: e2, implicitKey: f7, indent: i6, indentStep: o2, inFlow: u5 } = t4;
  if (f7 && r4.includes(`
`) || u5 && /[[\]{},]/.test(r4)) return O4(r4, t4);
  if (!r4 || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r4)) return f7 || u5 || !r4.includes(`
`) ? O4(r4, t4) : y5(s14, t4, n2, l8);
  if (!f7 && !u5 && c5 !== t.PLAIN && r4.includes(`
`)) return y5(s14, t4, n2, l8);
  if (F3(r4)) {
    if (i6 === "") return t4.forceBlockIndent = true, y5(s14, t4, n2, l8);
    if (f7 && i6 === o2) return O4(r4, t4);
  }
  let g3 = r4.replace(/\n+/g, `$&
${i6}`);
  if (e2) {
    let d3 = (b5) => b5.default && b5.tag !== "tag:yaml.org,2002:str" && b5.test?.test(g3), { compat: a4, tags: k3 } = t4.doc.schema;
    if (k3.some(d3) || a4?.some(d3)) return O4(r4, t4);
  }
  return f7 ? g3 : E3(g3, i6, _3, D4(t4, false));
}
function m5(s14, t4, n2, l8) {
  let { implicitKey: c5, inFlow: r4 } = t4, e2 = typeof s14.value == "string" ? s14 : Object.assign({}, s14, { value: String(s14.value) }), { type: f7 } = s14;
  f7 !== t.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(e2.value) && (f7 = t.QUOTE_DOUBLE);
  let i6 = (u5) => {
    switch (u5) {
      case t.BLOCK_FOLDED:
      case t.BLOCK_LITERAL:
        return c5 || r4 ? O4(e2.value, t4) : y5(e2, t4, n2, l8);
      case t.QUOTE_DOUBLE:
        return S5(e2.value, t4);
      case t.QUOTE_SINGLE:
        return w5(e2.value, t4);
      case t.PLAIN:
        return K3(e2, t4, n2, l8);
      default:
        return null;
    }
  }, o2 = i6(f7);
  if (o2 === null) {
    let { defaultKeyType: u5, defaultStringType: g3 } = t4.options, d3 = c5 && u5 || g3;
    if (o2 = i6(d3), o2 === null) throw new Error(`Unsupported default string type ${d3}`);
  }
  return o2;
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/stringify/stringify.mjs
function $3(e2, t4) {
  let o2 = Object.assign({ blockQuote: true, commentString: s6, defaultKeyType: null, defaultStringType: "PLAIN", directives: null, doubleQuotedAsJSON: false, doubleQuotedMinMultiLineLength: 40, falseStr: "false", flowCollectionPadding: true, indentSeq: true, lineWidth: 80, minContentWidth: 20, nullStr: "null", simpleKeys: false, singleQuote: null, trueStr: "true", verifyAliasOrder: true }, e2.schema.toStringOptions, t4), i6;
  switch (o2.collectionStyle) {
    case "block":
      i6 = false;
      break;
    case "flow":
      i6 = true;
      break;
    default:
      i6 = null;
  }
  return { anchors: /* @__PURE__ */ new Set(), doc: e2, flowCollectionPadding: o2.flowCollectionPadding ? " " : "", indent: "", indentStep: typeof o2.indent == "number" ? " ".repeat(o2.indent) : "  ", inFlow: i6, options: o2 };
}
function p4(e2, t4) {
  if (t4.tag) {
    let n2 = e2.filter((r4) => r4.tag === t4.tag);
    if (n2.length > 0) return n2.find((r4) => r4.format === t4.format) ?? n2[0];
  }
  let o2, i6;
  if (e(t4)) {
    i6 = t4.value;
    let n2 = e2.filter((r4) => r4.identify?.(i6));
    o2 = n2.find((r4) => r4.format === t4.format) ?? n2.find((r4) => !r4.format);
  } else i6 = t4, o2 = e2.find((n2) => n2.nodeClass && i6 instanceof n2.nodeClass);
  if (!o2) {
    let n2 = i6?.constructor?.name ?? typeof i6;
    throw new Error(`Tag not resolved for ${n2} value`);
  }
  return o2;
}
function v3(e2, t4, { anchors: o2, doc: i6 }) {
  if (!i6.directives) return "";
  let n2 = [], r4 = (e(e2) || f2(e2)) && e2.anchor;
  r4 && m3(r4) && (o2.add(r4), n2.push(`&${r4}`));
  let s14 = e2.tag ? e2.tag : t4.default ? null : t4.tag;
  return s14 && n2.push(i6.directives.tagString(s14)), n2.join(" ");
}
function j3(e2, t4, o2, i6) {
  if (p(e2)) return e2.toString(t4, o2, i6);
  if (i(e2)) {
    if (t4.doc.directives) return e2.toString(t4);
    if (t4.resolvedAliases?.has(e2)) throw new TypeError("Cannot stringify circular structure without alias nodes");
    t4.resolvedAliases ? t4.resolvedAliases.add(e2) : t4.resolvedAliases = /* @__PURE__ */ new Set([e2]), e2 = e2.resolve(t4.doc);
  }
  let n2, r4 = n(e2) ? e2 : t4.doc.createNode(e2, { onTagObj: (f7) => n2 = f7 });
  n2 || (n2 = p4(t4.doc.schema.tags, r4));
  let s14 = v3(r4, n2, t4);
  s14.length > 0 && (t4.indentAtStart = (t4.indentAtStart ?? 0) + s14.length + 1);
  let l8 = typeof n2.stringify == "function" ? n2.stringify(r4, t4, o2, i6) : e(r4) ? m5(r4, t4, o2, i6) : r4.toString(t4, o2, i6);
  return s14 ? e(r4) || l8[0] === "{" || l8[0] === "[" ? `${s14} ${l8}` : `${s14}
${t4.indent}${l8}` : l8;
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/addPairToJSMap.mjs
var l6 = "<<";
function m6(r4, e2, { key: i6, value: o2 }) {
  if (r4?.doc.schema.merge && M4(i6)) if (o2 = i(o2) ? o2.resolve(r4.doc) : o2, S2(o2)) for (let n2 of o2.items) c4(r4, e2, n2);
  else if (Array.isArray(o2)) for (let n2 of o2) c4(r4, e2, n2);
  else c4(r4, e2, o2);
  else {
    let n2 = s4(i6, "", r4);
    if (e2 instanceof Map) e2.set(n2, s4(o2, n2, r4));
    else if (e2 instanceof Set) e2.add(n2);
    else {
      let t4 = h2(i6, n2, r4), s14 = s4(o2, t4, r4);
      t4 in e2 ? Object.defineProperty(e2, t4, { value: s14, writable: true, enumerable: true, configurable: true }) : e2[t4] = s14;
    }
  }
  return e2;
}
var M4 = (r4) => r4 === l6 || e(r4) && r4.value === l6 && (!r4.type || r4.type === t.PLAIN);
function c4(r4, e2, i6) {
  let o2 = r4 && i(i6) ? i6.resolve(r4.doc) : i6;
  if (!b2(o2)) throw new Error("Merge sources must be maps or map aliases");
  let n2 = o2.toJSON(null, r4, Map);
  for (let [t4, s14] of n2) e2 instanceof Map ? e2.has(t4) || e2.set(t4, s14) : e2 instanceof Set ? e2.add(t4) : Object.prototype.hasOwnProperty.call(e2, t4) || Object.defineProperty(e2, t4, { value: s14, writable: true, enumerable: true, configurable: true });
  return e2;
}
function h2(r4, e2, i6) {
  if (e2 === null) return "";
  if (typeof e2 != "object") return String(e2);
  if (n(r4) && i6?.doc) {
    let o2 = $3(i6.doc, {});
    o2.anchors = /* @__PURE__ */ new Set();
    for (let t4 of i6.anchors.keys()) o2.anchors.add(t4.anchor);
    o2.inFlow = true, o2.inStringifyKey = true;
    let n2 = r4.toString(o2);
    if (!i6.mapKeyWarned) {
      let t4 = JSON.stringify(n2);
      t4.length > 40 && (t4 = t4.substring(0, 36) + '..."'), i4(i6.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${t4}. Set mapAsMap: true to use object keys.`), i6.mapKeyWarned = true;
    }
    return n2;
  }
  return JSON.stringify(e2);
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/Pair.mjs
function C3({ key: t4, value: n2 }, e2, o2, d3) {
  let { allNullValues: O6, doc: T3, indent: P6, indentStep: L2, options: { commentString: p5, indentSeq: W5, simpleKeys: c5 } } = e2, s14 = n(t4) && t4.comment || null;
  if (c5) {
    if (s14) throw new Error("With simple keys, key nodes cannot have comments");
    if (f2(t4) || !n(t4) && typeof t4 == "object") {
      let m7 = "With simple keys, collection cannot be used as a key value";
      throw new Error(m7);
    }
  }
  let r4 = !c5 && (!t4 || s14 && n2 == null && !e2.inFlow || f2(t4) || (e(t4) ? t4.type === t.BLOCK_FOLDED || t4.type === t.BLOCK_LITERAL : typeof t4 == "object"));
  e2 = Object.assign({}, e2, { allNullValues: false, implicitKey: !r4 && (c5 || !O6), indent: P6 + L2 });
  let h4 = false, u5 = false, i6 = j3(t4, e2, () => h4 = true, () => u5 = true);
  if (!r4 && !e2.inFlow && i6.length > 1024) {
    if (c5) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
    r4 = true;
  }
  if (e2.inFlow) {
    if (O6 || n2 == null) return h4 && o2 && o2(), i6 === "" ? "?" : r4 ? `? ${i6}` : i6;
  } else if (O6 && !c5 || n2 == null && r4) return i6 = `? ${i6}`, s14 && !h4 ? i6 += t2(i6, e2.indent, p5(s14)) : u5 && d3 && d3(), i6;
  h4 && (s14 = null), r4 ? (s14 && (i6 += t2(i6, e2.indent, p5(s14))), i6 = `? ${i6}
${P6}:`) : (i6 = `${i6}:`, s14 && (i6 += t2(i6, e2.indent, p5(s14))));
  let g3, w7, y6;
  n(n2) ? (g3 = !!n2.spaceBefore, w7 = n2.commentBefore, y6 = n2.comment) : (g3 = false, w7 = null, y6 = null, n2 && typeof n2 == "object" && (n2 = T3.createNode(n2))), e2.implicitKey = false, !r4 && !s14 && e(n2) && (e2.indentAtStart = i6.length + 1), u5 = false, !W5 && L2.length >= 2 && !e2.inFlow && !r4 && S2(n2) && !n2.flow && !n2.tag && !n2.anchor && (e2.indent = e2.indent.substring(2));
  let N3 = false, l8 = j3(n2, e2, () => N3 = true, () => u5 = true), f7 = " ";
  if (s14 || g3 || w7) {
    if (f7 = g3 ? `
` : "", w7) {
      let m7 = p5(w7);
      f7 += `
${r3(m7, e2.indent)}`;
    }
    l8 === "" && !e2.inFlow ? f7 === `
` && (f7 = `

`) : f7 += `
${e2.indent}`;
  } else if (!r4 && f2(n2)) {
    let m7 = l8[0], b5 = l8.indexOf(`
`), j5 = b5 !== -1, _5 = e2.inFlow ?? n2.flow ?? n2.items.length === 0;
    if (j5 || !_5) {
      let D6 = false;
      if (j5 && (m7 === "&" || m7 === "!")) {
        let a4 = l8.indexOf(" ");
        m7 === "&" && a4 !== -1 && a4 < b5 && l8[a4 + 1] === "!" && (a4 = l8.indexOf(" ", a4 + 1)), (a4 === -1 || b5 < a4) && (D6 = true);
      }
      D6 || (f7 = `
${e2.indent}`);
    }
  } else (l8 === "" || l8[0] === `
`) && (f7 = "");
  return i6 += f7 + l8, e2.inFlow ? N3 && o2 && o2() : y6 && !N3 ? i6 += t2(i6, e2.indent, p5(y6)) : u5 && d3 && d3(), i6;
}
function x3(t4, n2, e2) {
  let o2 = P2(t4, void 0, e2), d3 = P2(n2, void 0, e2);
  return new E4(o2, d3);
}
var E4 = class t3 {
  constructor(n2, e2 = null) {
    Object.defineProperty(this, c2, { value: l }), this.key = n2, this.value = e2;
  }
  clone(n2) {
    let { key: e2, value: o2 } = this;
    return n(e2) && (e2 = e2.clone(n2)), n(o2) && (o2 = o2.clone(n2)), new t3(e2, o2);
  }
  toJSON(n2, e2) {
    let o2 = e2?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    return m6(e2, o2, this);
  }
  toString(n2, e2, o2) {
    return n2?.doc ? C3(this, n2, e2, o2) : JSON.stringify(this);
  }
};

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/stringify/stringifyCollection.mjs
function W3(s14, l8, c5) {
  return (l8.inFlow ?? s14.flow ? P4 : F4)(s14, l8, c5);
}
function F4({ comment: s14, items: l8 }, c5, { blockItemPrefix: f7, flowChars: a4, itemIndent: g3, onChompKeep: h4, onComment: $5 }) {
  let { indent: y6, options: { commentString: r4 } } = c5, B5 = Object.assign({}, c5, { indent: g3, type: null }), n2 = false, o2 = [];
  for (let t4 = 0; t4 < l8.length; ++t4) {
    let e2 = l8[t4], i6 = null;
    if (n(e2)) !n2 && e2.spaceBefore && o2.push(""), w6(c5, o2, e2.commentBefore, n2), e2.comment && (i6 = e2.comment);
    else if (p(e2)) {
      let u5 = n(e2.key) ? e2.key : null;
      u5 && (!n2 && u5.spaceBefore && o2.push(""), w6(c5, o2, u5.commentBefore, n2));
    }
    n2 = false;
    let p5 = j3(e2, B5, () => i6 = null, () => n2 = true);
    i6 && (p5 += t2(p5, g3, r4(i6))), n2 && i6 && (n2 = false), o2.push(f7 + p5);
  }
  let m7;
  if (o2.length === 0) m7 = a4.start + a4.end;
  else {
    m7 = o2[0];
    for (let t4 = 1; t4 < o2.length; ++t4) {
      let e2 = o2[t4];
      m7 += e2 ? `
${y6}${e2}` : `
`;
    }
  }
  return s14 ? (m7 += `
` + r3(r4(s14), y6), $5 && $5()) : n2 && h4 && h4(), m7;
}
function P4({ items: s14 }, l8, { flowChars: c5, itemIndent: f7 }) {
  let { indent: a4, indentStep: g3, flowCollectionPadding: h4, options: { commentString: $5 } } = l8;
  f7 += g3;
  let y6 = Object.assign({}, l8, { indent: f7, inFlow: true, type: null }), r4 = false, B5 = 0, n2 = [];
  for (let t4 = 0; t4 < s14.length; ++t4) {
    let e2 = s14[t4], i6 = null;
    if (n(e2)) e2.spaceBefore && n2.push(""), w6(l8, n2, e2.commentBefore, false), e2.comment && (i6 = e2.comment);
    else if (p(e2)) {
      let u5 = n(e2.key) ? e2.key : null;
      u5 && (u5.spaceBefore && n2.push(""), w6(l8, n2, u5.commentBefore, false), u5.comment && (r4 = true));
      let k3 = n(e2.value) ? e2.value : null;
      k3 ? (k3.comment && (i6 = k3.comment), k3.commentBefore && (r4 = true)) : e2.value == null && u5?.comment && (i6 = u5.comment);
    }
    i6 && (r4 = true);
    let p5 = j3(e2, y6, () => i6 = null);
    t4 < s14.length - 1 && (p5 += ","), i6 && (p5 += t2(p5, f7, $5(i6))), !r4 && (n2.length > B5 || p5.includes(`
`)) && (r4 = true), n2.push(p5), B5 = n2.length;
  }
  let { start: o2, end: m7 } = c5;
  if (n2.length === 0) return o2 + m7;
  if (!r4) {
    let t4 = n2.reduce((e2, i6) => e2 + i6.length + 2, 2);
    r4 = l8.options.lineWidth > 0 && t4 > l8.options.lineWidth;
  }
  if (r4) {
    let t4 = o2;
    for (let e2 of n2) t4 += e2 ? `
${g3}${a4}${e2}` : `
`;
    return `${t4}
${a4}${m7}`;
  } else return `${o2}${h4}${n2.join(" ")}${h4}${m7}`;
}
function w6({ indent: s14, options: { commentString: l8 } }, c5, f7, a4) {
  if (f7 && a4 && (f7 = f7.replace(/^\n+/, "")), f7) {
    let g3 = r3(l8(f7), s14);
    c5.push(g3.trimStart());
  }
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/YAMLMap.mjs
function a3(c5, e2) {
  let i6 = e(e2) ? e2.value : e2;
  for (let t4 of c5) if (p(t4) && (t4.key === e2 || t4.key === i6 || e(t4.key) && t4.key.value === i6)) return t4;
}
var h3 = class extends l5 {
  static get tagName() {
    return "tag:yaml.org,2002:map";
  }
  constructor(e2) {
    super(o, e2), this.items = [];
  }
  static from(e2, i6, t4) {
    let { keepUndefined: s14, replacer: r4 } = t4, o2 = new this(e2), l8 = (n2, f7) => {
      if (typeof r4 == "function") f7 = r4.call(i6, n2, f7);
      else if (Array.isArray(r4) && !r4.includes(n2)) return;
      (f7 !== void 0 || s14) && o2.items.push(x3(n2, f7, t4));
    };
    if (i6 instanceof Map) for (let [n2, f7] of i6) l8(n2, f7);
    else if (i6 && typeof i6 == "object") for (let n2 of Object.keys(i6)) l8(n2, i6[n2]);
    return typeof e2.sortMapEntries == "function" && o2.items.sort(e2.sortMapEntries), o2;
  }
  add(e2, i6) {
    let t4;
    p(e2) ? t4 = e2 : !e2 || typeof e2 != "object" || !("key" in e2) ? t4 = new E4(e2, e2?.value) : t4 = new E4(e2.key, e2.value);
    let s14 = a3(this.items, t4.key), r4 = this.schema?.sortMapEntries;
    if (s14) {
      if (!i6) throw new Error(`Key ${t4.key} already set`);
      e(s14.value) && p2(t4.value) ? s14.value.value = t4.value : s14.value = t4.value;
    } else if (r4) {
      let o2 = this.items.findIndex((l8) => r4(t4, l8) < 0);
      o2 === -1 ? this.items.push(t4) : this.items.splice(o2, 0, t4);
    } else this.items.push(t4);
  }
  delete(e2) {
    let i6 = a3(this.items, e2);
    return i6 ? this.items.splice(this.items.indexOf(i6), 1).length > 0 : false;
  }
  get(e2, i6) {
    let s14 = a3(this.items, e2)?.value;
    return (!i6 && e(s14) ? s14.value : s14) ?? void 0;
  }
  has(e2) {
    return !!a3(this.items, e2);
  }
  set(e2, i6) {
    this.add(new E4(e2, i6), true);
  }
  toJSON(e2, i6, t4) {
    let s14 = t4 ? new t4() : i6?.mapAsMap ? /* @__PURE__ */ new Map() : {};
    i6?.onCreate && i6.onCreate(s14);
    for (let r4 of this.items) m6(i6, s14, r4);
    return s14;
  }
  toString(e2, i6, t4) {
    if (!e2) return JSON.stringify(this);
    for (let s14 of this.items) if (!p(s14)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(s14)} instead`);
    return !e2.allNullValues && this.hasAllNullValues(false) && (e2 = Object.assign({}, e2, { allNullValues: true })), W3(this, e2, { blockItemPrefix: "", flowChars: { start: "{", end: "}" }, itemIndent: e2.indent || "", onChompKeep: t4, onComment: i6 });
  }
};

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/nodes/YAMLSeq.mjs
var l7 = class extends l5 {
  static get tagName() {
    return "tag:yaml.org,2002:seq";
  }
  constructor(t4) {
    super(s, t4), this.items = [];
  }
  add(t4) {
    this.items.push(t4);
  }
  delete(t4) {
    let e2 = f5(t4);
    return typeof e2 != "number" ? false : this.items.splice(e2, 1).length > 0;
  }
  get(t4, e2) {
    let i6 = f5(t4);
    if (typeof i6 != "number") return;
    let r4 = this.items[i6];
    return !e2 && e(r4) ? r4.value : r4;
  }
  has(t4) {
    let e2 = f5(t4);
    return typeof e2 == "number" && e2 < this.items.length;
  }
  set(t4, e2) {
    let i6 = f5(t4);
    if (typeof i6 != "number") throw new Error(`Expected a valid index, not ${t4}.`);
    let r4 = this.items[i6];
    e(r4) && p2(e2) ? r4.value = e2 : this.items[i6] = e2;
  }
  toJSON(t4, e2) {
    let i6 = [];
    e2?.onCreate && e2.onCreate(i6);
    let r4 = 0;
    for (let s14 of this.items) i6.push(s4(s14, String(r4++), e2));
    return i6;
  }
  toString(t4, e2, i6) {
    return t4 ? W3(this, t4, { blockItemPrefix: "- ", flowChars: { start: "[", end: "]" }, itemIndent: (t4.indent || "") + "  ", onChompKeep: i6, onComment: e2 }) : JSON.stringify(this);
  }
  static from(t4, e2, i6) {
    let { replacer: r4 } = i6, s14 = new this(t4);
    if (e2 && Symbol.iterator in Object(e2)) {
      let u5 = 0;
      for (let o2 of e2) {
        if (typeof r4 == "function") {
          let a4 = e2 instanceof Set ? o2 : String(u5++);
          o2 = r4.call(e2, a4, o2);
        }
        s14.items.push(P2(o2, void 0, i6));
      }
    }
    return s14;
  }
};
function f5(n2) {
  let t4 = e(n2) ? n2.value : n2;
  return t4 && typeof t4 == "string" && (t4 = Number(t4)), typeof t4 == "number" && Number.isInteger(t4) && t4 >= 0 ? t4 : null;
}

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/schema/common/map.mjs
var i5 = { collection: "map", default: true, nodeClass: h3, tag: "tag:yaml.org,2002:map", resolve(o2, t4) {
  return b2(o2) || t4("Expected a mapping for this tag"), o2;
}, createNode: (o2, t4, e2) => h3.from(o2, t4, e2) };

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/schema/common/seq.mjs
var f6 = { collection: "seq", default: true, nodeClass: l7, tag: "tag:yaml.org,2002:seq", resolve(e2, o2) {
  return S2(e2) || o2("Expected a sequence for this tag"), e2;
}, createNode: (e2, o2, r4) => l7.from(e2, o2, r4) };

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/schema/common/string.mjs
var s7 = { identify: (t4) => typeof t4 == "string", default: true, tag: "tag:yaml.org,2002:str", resolve: (t4) => t4, stringify(t4, r4, i6, e2) {
  return r4 = Object.assign({ actualString: true }, r4), m5(t4, r4, i6, e2);
} };

// https://esm.sh/yaml@2.4.3/es2022/browser/dist/stringify/stringifyNumber.mjs
function s8({ format: g3, minFractionDigits: f7, tag: r4, value: t4 }) {
  if (typeof t4 == "bigint") return String(t4);
  let i6 = typeof t4 == "number" ? t4 : Number(t4);
  if (!isFinite(i6)) return isNaN(i6) ? ".nan" : i6 < 0 ? "-.inf" : ".inf";
  let n2 = JSON.stringify(t4);
  if (!g3 && f7 && (!r4 || r4 === "tag:yaml.org,2002:float") && /^\d/.test(n2)) {
    let e2 = n2.indexOf(".");
    e2 < 0 && (e2 = n2.length, n2 += ".");
    let o2 = f7 - (n2.length - e2 - 1);
    for (; o2-- > 0; ) n2 += "0";
  }
  return n2;
}

// https://esm.sh/yaml@2.4.3/es2022/yaml.mjs
var ys = Object.defineProperty;
var ct2 = (s14, e2) => {
  for (var t4 in e2) ys(s14, t4, { get: e2[t4], enumerable: true });
};
var lt2 = {};
ct2(lt2, { Alias: () => l3, CST: () => nt2, Composer: () => D5, Document: () => C4, Lexer: () => W4, LineCounter: () => J3, Pair: () => E4, Parser: () => q3, Scalar: () => t, Schema: () => j4, YAMLError: () => V3, YAMLMap: () => h3, YAMLParseError: () => I3, YAMLSeq: () => l7, YAMLWarning: () => G3, isAlias: () => i, isCollection: () => f2, isDocument: () => m2, isMap: () => b2, isNode: () => n, isPair: () => p, isScalar: () => e, isSeq: () => S2, parse: () => ms, parseAllDocuments: () => ps2, parseDocument: () => at2, stringify: () => ds2, visit: () => y3, visitAsync: () => O2 });
var bs = { "!": "%21", ",": "%2C", "[": "%5B", "]": "%5D", "{": "%7B", "}": "%7D" };
var ws = (s14) => s14.replace(/[!,[\]{}]/g, (e2) => bs[e2]);
var O5 = class s9 {
  constructor(e2, t4) {
    this.docStart = null, this.docEnd = false, this.yaml = Object.assign({}, s9.defaultYaml, e2), this.tags = Object.assign({}, s9.defaultTags, t4);
  }
  clone() {
    let e2 = new s9(this.yaml, this.tags);
    return e2.docStart = this.docStart, e2;
  }
  atDocument() {
    let e2 = new s9(this.yaml, this.tags);
    switch (this.yaml.version) {
      case "1.1":
        this.atNextDocument = true;
        break;
      case "1.2":
        this.atNextDocument = false, this.yaml = { explicit: s9.defaultYaml.explicit, version: "1.2" }, this.tags = Object.assign({}, s9.defaultTags);
        break;
    }
    return e2;
  }
  add(e2, t4) {
    this.atNextDocument && (this.yaml = { explicit: s9.defaultYaml.explicit, version: "1.1" }, this.tags = Object.assign({}, s9.defaultTags), this.atNextDocument = false);
    let i6 = e2.trim().split(/[ \t]+/), n2 = i6.shift();
    switch (n2) {
      case "%TAG": {
        if (i6.length !== 2 && (t4(0, "%TAG directive should contain exactly two parts"), i6.length < 2)) return false;
        let [r4, o2] = i6;
        return this.tags[r4] = o2, true;
      }
      case "%YAML": {
        if (this.yaml.explicit = true, i6.length !== 1) return t4(0, "%YAML directive should contain exactly one part"), false;
        let [r4] = i6;
        if (r4 === "1.1" || r4 === "1.2") return this.yaml.version = r4, true;
        {
          let o2 = /^\d+\.\d+$/.test(r4);
          return t4(6, `Unsupported YAML version ${r4}`, o2), false;
        }
      }
      default:
        return t4(0, `Unknown directive ${n2}`, true), false;
    }
  }
  tagName(e2, t4) {
    if (e2 === "!") return "!";
    if (e2[0] !== "!") return t4(`Not a valid tag: ${e2}`), null;
    if (e2[1] === "<") {
      let o2 = e2.slice(2, -1);
      return o2 === "!" || o2 === "!!" ? (t4(`Verbatim tags aren't resolved, so ${e2} is invalid.`), null) : (e2[e2.length - 1] !== ">" && t4("Verbatim tags must end with a >"), o2);
    }
    let [, i6, n2] = e2.match(/^(.*!)([^!]*)$/s);
    n2 || t4(`The ${e2} tag has no suffix`);
    let r4 = this.tags[i6];
    if (r4) try {
      return r4 + decodeURIComponent(n2);
    } catch (o2) {
      return t4(String(o2)), null;
    }
    return i6 === "!" ? e2 : (t4(`Could not resolve tag: ${e2}`), null);
  }
  tagString(e2) {
    for (let [t4, i6] of Object.entries(this.tags)) if (e2.startsWith(i6)) return t4 + ws(e2.substring(i6.length));
    return e2[0] === "!" ? e2 : `!<${e2}>`;
  }
  toString(e2) {
    let t4 = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [], i6 = Object.entries(this.tags), n2;
    if (e2 && i6.length > 0 && n(e2.contents)) {
      let r4 = {};
      y3(e2.contents, (o2, a4) => {
        n(a4) && a4.tag && (r4[a4.tag] = true);
      }), n2 = Object.keys(r4);
    } else n2 = [];
    for (let [r4, o2] of i6) r4 === "!!" && o2 === "tag:yaml.org,2002:" || (!e2 || n2.some((a4) => a4.startsWith(o2))) && t4.push(`%TAG ${r4} ${o2}`);
    return t4.join(`
`);
  }
};
O5.defaultYaml = { explicit: false, version: "1.2" };
O5.defaultTags = { "!!": "tag:yaml.org,2002:" };
var M5 = { identify: (s14) => s14 == null, createNode: () => new t(null), default: true, tag: "tag:yaml.org,2002:null", test: /^(?:~|[Nn]ull|NULL)?$/, resolve: () => new t(null), stringify: ({ source: s14 }, e2) => typeof s14 == "string" && M5.test.test(s14) ? s14 : e2.options.nullStr };
var z4 = { identify: (s14) => typeof s14 == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/, resolve: (s14) => new t(s14[0] === "t" || s14[0] === "T"), stringify({ source: s14, value: e2 }, t4) {
  if (s14 && z4.test.test(s14)) {
    let i6 = s14[0] === "t" || s14[0] === "T";
    if (e2 === i6) return s14;
  }
  return e2 ? t4.options.trueStr : t4.options.falseStr;
} };
var he2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/, resolve: (s14) => s14.slice(-3).toLowerCase() === "nan" ? NaN : s14[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, stringify: s8 };
var pe2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", format: "EXP", test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/, resolve: (s14) => parseFloat(s14), stringify(s14) {
  let e2 = Number(s14.value);
  return isFinite(e2) ? e2.toExponential() : s8(s14);
} };
var me2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/, resolve(s14) {
  let e2 = new t(parseFloat(s14)), t4 = s14.indexOf(".");
  return t4 !== -1 && s14[s14.length - 1] === "0" && (e2.minFractionDigits = s14.length - t4 - 1), e2;
}, stringify: s8 };
var de2 = (s14) => typeof s14 == "bigint" || Number.isInteger(s14);
var $e2 = (s14, e2, t4, { intAsBigInt: i6 }) => i6 ? BigInt(s14) : parseInt(s14.substring(e2), t4);
function pt2(s14, e2, t4) {
  let { value: i6 } = s14;
  return de2(i6) && i6 >= 0 ? t4 + i6.toString(e2) : s8(s14);
}
var ye2 = { identify: (s14) => de2(s14) && s14 >= 0, default: true, tag: "tag:yaml.org,2002:int", format: "OCT", test: /^0o[0-7]+$/, resolve: (s14, e2, t4) => $e2(s14, 2, 8, t4), stringify: (s14) => pt2(s14, 8, "0o") };
var ge2 = { identify: de2, default: true, tag: "tag:yaml.org,2002:int", test: /^[-+]?[0-9]+$/, resolve: (s14, e2, t4) => $e2(s14, 0, 10, t4), stringify: s8 };
var be2 = { identify: (s14) => de2(s14) && s14 >= 0, default: true, tag: "tag:yaml.org,2002:int", format: "HEX", test: /^0x[0-9a-fA-F]+$/, resolve: (s14, e2, t4) => $e2(s14, 2, 16, t4), stringify: (s14) => pt2(s14, 16, "0x") };
var mt = [i5, f6, s7, M5, z4, ye2, ge2, be2, he2, pe2, me2];
function dt2(s14) {
  return typeof s14 == "bigint" || Number.isInteger(s14);
}
var we2 = ({ value: s14 }) => JSON.stringify(s14);
var xs2 = [{ identify: (s14) => typeof s14 == "string", default: true, tag: "tag:yaml.org,2002:str", resolve: (s14) => s14, stringify: we2 }, { identify: (s14) => s14 == null, createNode: () => new t(null), default: true, tag: "tag:yaml.org,2002:null", test: /^null$/, resolve: () => null, stringify: we2 }, { identify: (s14) => typeof s14 == "boolean", default: true, tag: "tag:yaml.org,2002:bool", test: /^true|false$/, resolve: (s14) => s14 === "true", stringify: we2 }, { identify: dt2, default: true, tag: "tag:yaml.org,2002:int", test: /^-?(?:0|[1-9][0-9]*)$/, resolve: (s14, e2, { intAsBigInt: t4 }) => t4 ? BigInt(s14) : parseInt(s14, 10), stringify: ({ value: s14 }) => dt2(s14) ? s14.toString() : JSON.stringify(s14) }, { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/, resolve: (s14) => parseFloat(s14), stringify: we2 }];
var Ls = { default: true, tag: "", test: /^/, resolve(s14, e2) {
  return e2(`Unresolved plain scalar ${JSON.stringify(s14)}`), s14;
} };
var yt2 = [i5, f6].concat(xs2, Ls);
var Z3 = { identify: (s14) => s14 instanceof Uint8Array, default: false, tag: "tag:yaml.org,2002:binary", resolve(s14, e2) {
  if (typeof jt == "function") return jt.from(s14, "base64");
  if (typeof atob == "function") {
    let t4 = atob(s14.replace(/[\n\r]/g, "")), i6 = new Uint8Array(t4.length);
    for (let n2 = 0; n2 < t4.length; ++n2) i6[n2] = t4.charCodeAt(n2);
    return i6;
  } else return e2("This environment does not support reading binary tags; either Buffer or atob is required"), s14;
}, stringify({ comment: s14, type: e2, value: t4 }, i6, n2, r4) {
  let o2 = t4, a4;
  if (typeof jt == "function") a4 = o2 instanceof jt ? o2.toString("base64") : jt.from(o2.buffer).toString("base64");
  else if (typeof btoa == "function") {
    let l8 = "";
    for (let c5 = 0; c5 < o2.length; ++c5) l8 += String.fromCharCode(o2[c5]);
    a4 = btoa(l8);
  } else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
  if (e2 || (e2 = t.BLOCK_LITERAL), e2 !== t.QUOTE_DOUBLE) {
    let l8 = Math.max(i6.options.lineWidth - i6.indent.length, i6.options.minContentWidth), c5 = Math.ceil(a4.length / l8), u5 = new Array(c5);
    for (let f7 = 0, h4 = 0; f7 < c5; ++f7, h4 += l8) u5[f7] = a4.substr(h4, l8);
    a4 = u5.join(e2 === t.BLOCK_LITERAL ? `
` : " ");
  }
  return m5({ comment: s14, type: e2, value: a4 }, i6, n2, r4);
} };
function De2(s14, e2) {
  if (S2(s14)) for (let t4 = 0; t4 < s14.items.length; ++t4) {
    let i6 = s14.items[t4];
    if (!p(i6)) {
      if (b2(i6)) {
        i6.items.length > 1 && e2("Each pair must have its own sequence indicator");
        let n2 = i6.items[0] || new E4(new t(null));
        if (i6.commentBefore && (n2.key.commentBefore = n2.key.commentBefore ? `${i6.commentBefore}
${n2.key.commentBefore}` : i6.commentBefore), i6.comment) {
          let r4 = n2.value ?? n2.key;
          r4.comment = r4.comment ? `${i6.comment}
${r4.comment}` : i6.comment;
        }
        i6 = n2;
      }
      s14.items[t4] = p(i6) ? i6 : new E4(i6);
    }
  }
  else e2("Expected a sequence for this tag");
  return s14;
}
function qe2(s14, e2, t4) {
  let { replacer: i6 } = t4, n2 = new l7(s14);
  n2.tag = "tag:yaml.org,2002:pairs";
  let r4 = 0;
  if (e2 && Symbol.iterator in Object(e2)) for (let o2 of e2) {
    typeof i6 == "function" && (o2 = i6.call(e2, String(r4++), o2));
    let a4, l8;
    if (Array.isArray(o2)) if (o2.length === 2) a4 = o2[0], l8 = o2[1];
    else throw new TypeError(`Expected [key, value] tuple: ${o2}`);
    else if (o2 && o2 instanceof Object) {
      let c5 = Object.keys(o2);
      if (c5.length === 1) a4 = c5[0], l8 = o2[a4];
      else throw new TypeError(`Expected tuple with one key, not ${c5.length} keys`);
    } else a4 = o2;
    n2.items.push(x3(a4, l8, t4));
  }
  return n2;
}
var ee2 = { collection: "seq", default: false, tag: "tag:yaml.org,2002:pairs", resolve: De2, createNode: qe2 };
var K4 = class s10 extends l7 {
  constructor() {
    super(), this.add = h3.prototype.add.bind(this), this.delete = h3.prototype.delete.bind(this), this.get = h3.prototype.get.bind(this), this.has = h3.prototype.has.bind(this), this.set = h3.prototype.set.bind(this), this.tag = s10.tag;
  }
  toJSON(e2, t4) {
    if (!t4) return super.toJSON(e2);
    let i6 = /* @__PURE__ */ new Map();
    t4?.onCreate && t4.onCreate(i6);
    for (let n2 of this.items) {
      let r4, o2;
      if (p(n2) ? (r4 = s4(n2.key, "", t4), o2 = s4(n2.value, r4, t4)) : r4 = s4(n2, "", t4), i6.has(r4)) throw new Error("Ordered maps must not include duplicate keys");
      i6.set(r4, o2);
    }
    return i6;
  }
  static from(e2, t4, i6) {
    let n2 = qe2(e2, t4, i6), r4 = new this();
    return r4.items = n2.items, r4;
  }
};
K4.tag = "tag:yaml.org,2002:omap";
var se2 = { collection: "seq", identify: (s14) => s14 instanceof Map, nodeClass: K4, default: false, tag: "tag:yaml.org,2002:omap", resolve(s14, e2) {
  let t4 = De2(s14, e2), i6 = [];
  for (let { key: n2 } of t4.items) e(n2) && (i6.includes(n2.value) ? e2(`Ordered maps must not include duplicate keys: ${n2.value}`) : i6.push(n2.value));
  return Object.assign(new K4(), t4);
}, createNode: (s14, e2, t4) => K4.from(s14, e2, t4) };
function kt2({ value: s14, source: e2 }, t4) {
  return e2 && (s14 ? Ue2 : Re2).test.test(e2) ? e2 : s14 ? t4.options.trueStr : t4.options.falseStr;
}
var Ue2 = { identify: (s14) => s14 === true, default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/, resolve: () => new t(true), stringify: kt2 };
var Re2 = { identify: (s14) => s14 === false, default: true, tag: "tag:yaml.org,2002:bool", test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/, resolve: () => new t(false), stringify: kt2 };
var St2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/, resolve: (s14) => s14.slice(-3).toLowerCase() === "nan" ? NaN : s14[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY, stringify: s8 };
var Nt2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", format: "EXP", test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/, resolve: (s14) => parseFloat(s14.replace(/_/g, "")), stringify(s14) {
  let e2 = Number(s14.value);
  return isFinite(e2) ? e2.toExponential() : s8(s14);
} };
var vt2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/, resolve(s14) {
  let e2 = new t(parseFloat(s14.replace(/_/g, ""))), t4 = s14.indexOf(".");
  if (t4 !== -1) {
    let i6 = s14.substring(t4 + 1).replace(/_/g, "");
    i6[i6.length - 1] === "0" && (e2.minFractionDigits = i6.length);
  }
  return e2;
}, stringify: s8 };
var ie2 = (s14) => typeof s14 == "bigint" || Number.isInteger(s14);
function ke2(s14, e2, t4, { intAsBigInt: i6 }) {
  let n2 = s14[0];
  if ((n2 === "-" || n2 === "+") && (e2 += 1), s14 = s14.substring(e2).replace(/_/g, ""), i6) {
    switch (t4) {
      case 2:
        s14 = `0b${s14}`;
        break;
      case 8:
        s14 = `0o${s14}`;
        break;
      case 16:
        s14 = `0x${s14}`;
        break;
    }
    let o2 = BigInt(s14);
    return n2 === "-" ? BigInt(-1) * o2 : o2;
  }
  let r4 = parseInt(s14, t4);
  return n2 === "-" ? -1 * r4 : r4;
}
function Fe2(s14, e2, t4) {
  let { value: i6 } = s14;
  if (ie2(i6)) {
    let n2 = i6.toString(e2);
    return i6 < 0 ? "-" + t4 + n2.substr(1) : t4 + n2;
  }
  return s8(s14);
}
var Tt2 = { identify: ie2, default: true, tag: "tag:yaml.org,2002:int", format: "BIN", test: /^[-+]?0b[0-1_]+$/, resolve: (s14, e2, t4) => ke2(s14, 2, 2, t4), stringify: (s14) => Fe2(s14, 2, "0b") };
var It2 = { identify: ie2, default: true, tag: "tag:yaml.org,2002:int", format: "OCT", test: /^[-+]?0[0-7_]+$/, resolve: (s14, e2, t4) => ke2(s14, 1, 8, t4), stringify: (s14) => Fe2(s14, 8, "0") };
var Et2 = { identify: ie2, default: true, tag: "tag:yaml.org,2002:int", test: /^[-+]?[0-9][0-9_]*$/, resolve: (s14, e2, t4) => ke2(s14, 0, 10, t4), stringify: s8 };
var xt2 = { identify: ie2, default: true, tag: "tag:yaml.org,2002:int", format: "HEX", test: /^[-+]?0x[0-9a-fA-F_]+$/, resolve: (s14, e2, t4) => ke2(s14, 2, 16, t4), stringify: (s14) => Fe2(s14, 16, "0x") };
var U3 = class s11 extends h3 {
  constructor(e2) {
    super(e2), this.tag = s11.tag;
  }
  add(e2) {
    let t4;
    p(e2) ? t4 = e2 : e2 && typeof e2 == "object" && "key" in e2 && "value" in e2 && e2.value === null ? t4 = new E4(e2.key, null) : t4 = new E4(e2, null), a3(this.items, t4.key) || this.items.push(t4);
  }
  get(e2, t4) {
    let i6 = a3(this.items, e2);
    return !t4 && p(i6) ? e(i6.key) ? i6.key.value : i6.key : i6;
  }
  set(e2, t4) {
    if (typeof t4 != "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t4}`);
    let i6 = a3(this.items, e2);
    i6 && !t4 ? this.items.splice(this.items.indexOf(i6), 1) : !i6 && t4 && this.items.push(new E4(e2));
  }
  toJSON(e2, t4) {
    return super.toJSON(e2, t4, Set);
  }
  toString(e2, t4, i6) {
    if (!e2) return JSON.stringify(this);
    if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, e2, { allNullValues: true }), t4, i6);
    throw new Error("Set items must all have null values");
  }
  static from(e2, t4, i6) {
    let { replacer: n2 } = i6, r4 = new this(e2);
    if (t4 && Symbol.iterator in Object(t4)) for (let o2 of t4) typeof n2 == "function" && (o2 = n2.call(t4, o2, o2)), r4.items.push(x3(o2, null, i6));
    return r4;
  }
};
U3.tag = "tag:yaml.org,2002:set";
var ne2 = { collection: "map", identify: (s14) => s14 instanceof Set, nodeClass: U3, default: false, tag: "tag:yaml.org,2002:set", createNode: (s14, e2, t4) => U3.from(s14, e2, t4), resolve(s14, e2) {
  if (b2(s14)) {
    if (s14.hasAllNullValues(true)) return Object.assign(new U3(), s14);
    e2("Set items must all have null values");
  } else e2("Expected a mapping for this tag");
  return s14;
} };
function Ge2(s14, e2) {
  let t4 = s14[0], i6 = t4 === "-" || t4 === "+" ? s14.substring(1) : s14, n2 = (o2) => e2 ? BigInt(o2) : Number(o2), r4 = i6.replace(/_/g, "").split(":").reduce((o2, a4) => o2 * n2(60) + n2(a4), n2(0));
  return t4 === "-" ? n2(-1) * r4 : r4;
}
function Ot2(s14) {
  let { value: e2 } = s14, t4 = (o2) => o2;
  if (typeof e2 == "bigint") t4 = (o2) => BigInt(o2);
  else if (isNaN(e2) || !isFinite(e2)) return s8(s14);
  let i6 = "";
  e2 < 0 && (i6 = "-", e2 *= t4(-1));
  let n2 = t4(60), r4 = [e2 % n2];
  return e2 < 60 ? r4.unshift(0) : (e2 = (e2 - r4[0]) / n2, r4.unshift(e2 % n2), e2 >= 60 && (e2 = (e2 - r4[0]) / n2, r4.unshift(e2))), i6 + r4.map((o2) => String(o2).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
}
var Se2 = { identify: (s14) => typeof s14 == "bigint" || Number.isInteger(s14), default: true, tag: "tag:yaml.org,2002:int", format: "TIME", test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/, resolve: (s14, e2, { intAsBigInt: t4 }) => Ge2(s14, t4), stringify: Ot2 };
var Ne2 = { identify: (s14) => typeof s14 == "number", default: true, tag: "tag:yaml.org,2002:float", format: "TIME", test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/, resolve: (s14) => Ge2(s14, false), stringify: Ot2 };
var R3 = { identify: (s14) => s14 instanceof Date, default: true, tag: "tag:yaml.org,2002:timestamp", test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"), resolve(s14) {
  let e2 = s14.match(R3.test);
  if (!e2) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
  let [, t4, i6, n2, r4, o2, a4] = e2.map(Number), l8 = e2[7] ? Number((e2[7] + "00").substr(1, 3)) : 0, c5 = Date.UTC(t4, i6 - 1, n2, r4 || 0, o2 || 0, a4 || 0, l8), u5 = e2[8];
  if (u5 && u5 !== "Z") {
    let f7 = Ge2(u5, false);
    Math.abs(f7) < 30 && (f7 *= 60), c5 -= 6e4 * f7;
  }
  return new Date(c5);
}, stringify: ({ value: s14 }) => s14.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "") };
var He2 = [i5, f6, s7, M5, Ue2, Re2, Tt2, It2, Et2, xt2, St2, Nt2, vt2, Z3, se2, ee2, ne2, Se2, Ne2, R3];
var Ct2 = /* @__PURE__ */ new Map([["core", mt], ["failsafe", [i5, f6, s7]], ["json", yt2], ["yaml11", He2], ["yaml-1.1", He2]]);
var _t2 = { binary: Z3, bool: z4, float: me2, floatExp: pe2, floatNaN: he2, floatTime: Ne2, int: ge2, intHex: be2, intOct: ye2, intTime: Se2, map: i5, null: M5, omap: se2, pairs: ee2, seq: f6, set: ne2, timestamp: R3 };
var $t2 = { "tag:yaml.org,2002:binary": Z3, "tag:yaml.org,2002:omap": se2, "tag:yaml.org,2002:pairs": ee2, "tag:yaml.org,2002:set": ne2, "tag:yaml.org,2002:timestamp": R3 };
function ve2(s14, e2) {
  let t4 = Ct2.get(e2);
  if (!t4) if (Array.isArray(s14)) t4 = [];
  else {
    let i6 = Array.from(Ct2.keys()).filter((n2) => n2 !== "yaml11").map((n2) => JSON.stringify(n2)).join(", ");
    throw new Error(`Unknown schema "${e2}"; use one of ${i6} or define customTags array`);
  }
  if (Array.isArray(s14)) for (let i6 of s14) t4 = t4.concat(i6);
  else typeof s14 == "function" && (t4 = s14(t4.slice()));
  return t4.map((i6) => {
    if (typeof i6 != "string") return i6;
    let n2 = _t2[i6];
    if (n2) return n2;
    let r4 = Object.keys(_t2).map((o2) => JSON.stringify(o2)).join(", ");
    throw new Error(`Unknown custom tag "${i6}"; use one of ${r4}`);
  });
}
var ti = (s14, e2) => s14.key < e2.key ? -1 : s14.key > e2.key ? 1 : 0;
var j4 = class s12 {
  constructor({ compat: e2, customTags: t4, merge: i6, resolveKnownTags: n2, schema: r4, sortMapEntries: o2, toStringDefaults: a4 }) {
    this.compat = Array.isArray(e2) ? ve2(e2, "compat") : e2 ? ve2(null, e2) : null, this.merge = !!i6, this.name = typeof r4 == "string" && r4 || "core", this.knownTags = n2 ? $t2 : {}, this.tags = ve2(t4, this.name), this.toStringOptions = a4 ?? null, Object.defineProperty(this, o, { value: i5 }), Object.defineProperty(this, r, { value: s7 }), Object.defineProperty(this, s, { value: f6 }), this.sortMapEntries = typeof o2 == "function" ? o2 : o2 === true ? ti : null;
  }
  clone() {
    let e2 = Object.create(s12.prototype, Object.getOwnPropertyDescriptors(this));
    return e2.tags = this.tags.slice(), e2;
  }
};
function Dt2(s14, e2) {
  let t4 = [], i6 = e2.directives === true;
  if (e2.directives !== false && s14.directives) {
    let l8 = s14.directives.toString(s14);
    l8 ? (t4.push(l8), i6 = true) : s14.directives.docStart && (i6 = true);
  }
  i6 && t4.push("---");
  let n2 = $3(s14, e2), { commentString: r4 } = n2.options;
  if (s14.commentBefore) {
    t4.length !== 1 && t4.unshift("");
    let l8 = r4(s14.commentBefore);
    t4.unshift(r3(l8, ""));
  }
  let o2 = false, a4 = null;
  if (s14.contents) {
    if (n(s14.contents)) {
      if (s14.contents.spaceBefore && i6 && t4.push(""), s14.contents.commentBefore) {
        let u5 = r4(s14.contents.commentBefore);
        t4.push(r3(u5, ""));
      }
      n2.forceBlockIndent = !!s14.comment, a4 = s14.contents.comment;
    }
    let l8 = a4 ? void 0 : () => o2 = true, c5 = j3(s14.contents, n2, () => a4 = null, l8);
    a4 && (c5 += t2(c5, "", r4(a4))), (c5[0] === "|" || c5[0] === ">") && t4[t4.length - 1] === "---" ? t4[t4.length - 1] = `--- ${c5}` : t4.push(c5);
  } else t4.push(j3(s14.contents, n2));
  if (s14.directives?.docEnd) if (s14.comment) {
    let l8 = r4(s14.comment);
    l8.includes(`
`) ? (t4.push("..."), t4.push(r3(l8, ""))) : t4.push(`... ${l8}`);
  } else t4.push("...");
  else {
    let l8 = s14.comment;
    l8 && o2 && (l8 = l8.replace(/^\n+/, "")), l8 && ((!o2 || a4) && t4[t4.length - 1] !== "" && t4.push(""), t4.push(r3(r4(l8), "")));
  }
  return t4.join(`
`) + `
`;
}
var C4 = class s13 {
  constructor(e2, t4, i6) {
    this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, c2, { value: y2 });
    let n2 = null;
    typeof t4 == "function" || Array.isArray(t4) ? n2 = t4 : i6 === void 0 && t4 && (i6 = t4, t4 = void 0);
    let r4 = Object.assign({ intAsBigInt: false, keepSourceTokens: false, logLevel: "warn", prettyErrors: true, strict: true, uniqueKeys: true, version: "1.2" }, i6);
    this.options = r4;
    let { version: o2 } = r4;
    i6?._directives ? (this.directives = i6._directives.atDocument(), this.directives.yaml.explicit && (o2 = this.directives.yaml.version)) : this.directives = new O5({ version: o2 }), this.setSchema(o2, i6), this.contents = e2 === void 0 ? null : this.createNode(e2, n2, i6);
  }
  clone() {
    let e2 = Object.create(s13.prototype, { [c2]: { value: y2 } });
    return e2.commentBefore = this.commentBefore, e2.comment = this.comment, e2.errors = this.errors.slice(), e2.warnings = this.warnings.slice(), e2.options = Object.assign({}, this.options), this.directives && (e2.directives = this.directives.clone()), e2.schema = this.schema.clone(), e2.contents = n(this.contents) ? this.contents.clone(e2.schema) : this.contents, this.range && (e2.range = this.range.slice()), e2;
  }
  add(e2) {
    F5(this.contents) && this.contents.add(e2);
  }
  addIn(e2, t4) {
    F5(this.contents) && this.contents.addIn(e2, t4);
  }
  createAlias(e2, t4) {
    if (!e2.anchor) {
      let i6 = f3(this);
      e2.anchor = !t4 || i6.has(t4) ? l2(t4 || "a", i6) : t4;
    }
    return new l3(e2.anchor);
  }
  createNode(e2, t4, i6) {
    let n2;
    if (typeof t4 == "function") e2 = t4.call({ "": e2 }, "", e2), n2 = t4;
    else if (Array.isArray(t4)) {
      let d3 = (w7) => typeof w7 == "number" || w7 instanceof String || w7 instanceof Number, g3 = t4.filter(d3).map(String);
      g3.length > 0 && (t4 = t4.concat(g3)), n2 = t4;
    } else i6 === void 0 && t4 && (i6 = t4, t4 = void 0);
    let { aliasDuplicateObjects: r4, anchorPrefix: o2, flow: a4, keepUndefined: l8, onTagObj: c5, tag: u5 } = i6 ?? {}, { onAnchor: f7, setAnchors: h4, sourceObjects: y6 } = w2(this, o2 || "a"), b5 = { aliasDuplicateObjects: r4 ?? true, keepUndefined: l8 ?? false, onAnchor: f7, onTagObj: c5, replacer: n2, schema: this.schema, sourceObjects: y6 }, p5 = P2(e2, u5, b5);
    return a4 && f2(p5) && (p5.flow = true), h4(), p5;
  }
  createPair(e2, t4, i6 = {}) {
    let n2 = this.createNode(e2, null, i6), r4 = this.createNode(t4, null, i6);
    return new E4(n2, r4);
  }
  delete(e2) {
    return F5(this.contents) ? this.contents.delete(e2) : false;
  }
  deleteIn(e2) {
    return g2(e2) ? this.contents == null ? false : (this.contents = null, true) : F5(this.contents) ? this.contents.deleteIn(e2) : false;
  }
  get(e2, t4) {
    return f2(this.contents) ? this.contents.get(e2, t4) : void 0;
  }
  getIn(e2, t4) {
    return g2(e2) ? !t4 && e(this.contents) ? this.contents.value : this.contents : f2(this.contents) ? this.contents.getIn(e2, t4) : void 0;
  }
  has(e2) {
    return f2(this.contents) ? this.contents.has(e2) : false;
  }
  hasIn(e2) {
    return g2(e2) ? this.contents !== void 0 : f2(this.contents) ? this.contents.hasIn(e2) : false;
  }
  set(e2, t4) {
    this.contents == null ? this.contents = u4(this.schema, [e2], t4) : F5(this.contents) && this.contents.set(e2, t4);
  }
  setIn(e2, t4) {
    g2(e2) ? this.contents = t4 : this.contents == null ? this.contents = u4(this.schema, Array.from(e2), t4) : F5(this.contents) && this.contents.setIn(e2, t4);
  }
  setSchema(e2, t4 = {}) {
    typeof e2 == "number" && (e2 = String(e2));
    let i6;
    switch (e2) {
      case "1.1":
        this.directives ? this.directives.yaml.version = "1.1" : this.directives = new O5({ version: "1.1" }), i6 = { merge: true, resolveKnownTags: false, schema: "yaml-1.1" };
        break;
      case "1.2":
      case "next":
        this.directives ? this.directives.yaml.version = e2 : this.directives = new O5({ version: e2 }), i6 = { merge: false, resolveKnownTags: true, schema: "core" };
        break;
      case null:
        this.directives && delete this.directives, i6 = null;
        break;
      default: {
        let n2 = JSON.stringify(e2);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${n2}`);
      }
    }
    if (t4.schema instanceof Object) this.schema = t4.schema;
    else if (i6) this.schema = new j4(Object.assign(i6, t4));
    else throw new Error("With a null YAML version, the { schema: Schema } option is required");
  }
  toJS({ json: e2, jsonArg: t4, mapAsMap: i6, maxAliasCount: n2, onAnchor: r4, reviver: o2 } = {}) {
    let a4 = { anchors: /* @__PURE__ */ new Map(), doc: this, keep: !e2, mapAsMap: i6 === true, mapKeyWarned: false, maxAliasCount: typeof n2 == "number" ? n2 : 100 }, l8 = s4(this.contents, t4 ?? "", a4);
    if (typeof r4 == "function") for (let { count: c5, res: u5 } of a4.anchors.values()) r4(u5, c5);
    return typeof o2 == "function" ? s3(o2, { "": l8 }, "", l8) : l8;
  }
  toJSON(e2, t4) {
    return this.toJS({ json: true, jsonArg: e2, mapAsMap: false, onAnchor: t4 });
  }
  toString(e2 = {}) {
    if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
    if ("indent" in e2 && (!Number.isInteger(e2.indent) || Number(e2.indent) <= 0)) {
      let t4 = JSON.stringify(e2.indent);
      throw new Error(`"indent" option must be a positive integer, not ${t4}`);
    }
    return Dt2(this, e2);
  }
};
function F5(s14) {
  if (f2(s14)) return true;
  throw new Error("Expected a YAML collection as document contents");
}
var V3 = class extends Error {
  constructor(e2, t4, i6, n2) {
    super(), this.name = e2, this.code = i6, this.message = n2, this.pos = t4;
  }
};
var I3 = class extends V3 {
  constructor(e2, t4, i6) {
    super("YAMLParseError", e2, t4, i6);
  }
};
var G3 = class extends V3 {
  constructor(e2, t4, i6) {
    super("YAMLWarning", e2, t4, i6);
  }
};
var re2 = (s14, e2) => (t4) => {
  if (t4.pos[0] === -1) return;
  t4.linePos = t4.pos.map((a4) => e2.linePos(a4));
  let { line: i6, col: n2 } = t4.linePos[0];
  t4.message += ` at line ${i6}, column ${n2}`;
  let r4 = n2 - 1, o2 = s14.substring(e2.lineStarts[i6 - 1], e2.lineStarts[i6]).replace(/[\n\r]+$/, "");
  if (r4 >= 60 && o2.length > 80) {
    let a4 = Math.min(r4 - 39, o2.length - 79);
    o2 = "…" + o2.substring(a4), r4 -= a4 - 1;
  }
  if (o2.length > 80 && (o2 = o2.substring(0, 79) + "…"), i6 > 1 && /^ *$/.test(o2.substring(0, r4))) {
    let a4 = s14.substring(e2.lineStarts[i6 - 2], e2.lineStarts[i6 - 1]);
    a4.length > 80 && (a4 = a4.substring(0, 79) + `…
`), o2 = a4 + o2;
  }
  if (/[^ ]/.test(o2)) {
    let a4 = 1, l8 = t4.linePos[1];
    l8 && l8.line === i6 && l8.col > n2 && (a4 = Math.max(1, Math.min(l8.col - n2, 80 - r4)));
    let c5 = " ".repeat(r4) + "^".repeat(a4);
    t4.message += `:

${o2}
${c5}
`;
  }
};
function _4(s14, { flow: e2, indicator: t4, next: i6, offset: n2, onError: r4, startOnNewline: o2 }) {
  let a4 = false, l8 = o2, c5 = o2, u5 = "", f7 = "", h4 = false, y6 = false, b5 = false, p5 = null, d3 = null, g3 = null, w7 = null, k3 = null;
  for (let m7 of s14) switch (b5 && (m7.type !== "space" && m7.type !== "newline" && m7.type !== "comma" && r4(m7.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), b5 = false), m7.type) {
    case "space":
      !e2 && l8 && t4 !== "doc-start" && m7.source[0] === "	" && r4(m7, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), c5 = true;
      break;
    case "comment": {
      c5 || r4(m7, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
      let A4 = m7.source.substring(1) || " ";
      u5 ? u5 += f7 + A4 : u5 = A4, f7 = "", l8 = false;
      break;
    }
    case "newline":
      l8 ? u5 ? u5 += m7.source : a4 = true : f7 += m7.source, l8 = true, h4 = true, (p5 || d3) && (y6 = true), c5 = true;
      break;
    case "anchor":
      p5 && r4(m7, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), m7.source.endsWith(":") && r4(m7.offset + m7.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true), p5 = m7, k3 === null && (k3 = m7.offset), l8 = false, c5 = false, b5 = true;
      break;
    case "tag": {
      d3 && r4(m7, "MULTIPLE_TAGS", "A node can have at most one tag"), d3 = m7, k3 === null && (k3 = m7.offset), l8 = false, c5 = false, b5 = true;
      break;
    }
    case t4:
      (p5 || d3) && r4(m7, "BAD_PROP_ORDER", `Anchors and tags must be after the ${m7.source} indicator`), w7 && r4(m7, "UNEXPECTED_TOKEN", `Unexpected ${m7.source} in ${e2 ?? "collection"}`), w7 = m7, l8 = false, c5 = false;
      break;
    case "comma":
      if (e2) {
        g3 && r4(m7, "UNEXPECTED_TOKEN", `Unexpected , in ${e2}`), g3 = m7, l8 = false, c5 = false;
        break;
      }
    default:
      r4(m7, "UNEXPECTED_TOKEN", `Unexpected ${m7.type} token`), l8 = false, c5 = false;
  }
  let S6 = s14[s14.length - 1], N3 = S6 ? S6.offset + S6.source.length : n2;
  return b5 && i6 && i6.type !== "space" && i6.type !== "newline" && i6.type !== "comma" && (i6.type !== "scalar" || i6.source !== "") && r4(i6.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), { comma: g3, found: w7, spaceBefore: a4, comment: u5, hasNewline: h4, hasNewlineAfterProp: y6, anchor: p5, tag: d3, end: N3, start: k3 ?? N3 };
}
function P5(s14) {
  if (!s14) return null;
  switch (s14.type) {
    case "alias":
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      if (s14.source.includes(`
`)) return true;
      if (s14.end) {
        for (let e2 of s14.end) if (e2.type === "newline") return true;
      }
      return false;
    case "flow-collection":
      for (let e2 of s14.items) {
        for (let t4 of e2.start) if (t4.type === "newline") return true;
        if (e2.sep) {
          for (let t4 of e2.sep) if (t4.type === "newline") return true;
        }
        if (P5(e2.key) || P5(e2.value)) return true;
      }
      return false;
    default:
      return true;
  }
}
function oe2(s14, e2, t4) {
  if (e2?.type === "flow-collection") {
    let i6 = e2.end[0];
    i6.indent === s14 && (i6.source === "]" || i6.source === "}") && P5(e2) && t4(i6, "BAD_INDENT", "Flow end indicator should be more indented than parent", true);
  }
}
function Ie2(s14, e2, t4) {
  let { uniqueKeys: i6 } = s14.options;
  if (i6 === false) return false;
  let n2 = typeof i6 == "function" ? i6 : (r4, o2) => r4 === o2 || e(r4) && e(o2) && r4.value === o2.value && !(r4.value === "<<" && s14.schema.merge);
  return e2.some((r4) => n2(r4.key, t4));
}
var Ft = "All mapping items must start at the same column";
function Yt2({ composeNode: s14, composeEmptyNode: e2 }, t4, i6, n2, r4) {
  let o2 = r4?.nodeClass ?? h3, a4 = new o2(t4.schema);
  t4.atRoot && (t4.atRoot = false);
  let l8 = i6.offset, c5 = null;
  for (let u5 of i6.items) {
    let { start: f7, key: h4, sep: y6, value: b5 } = u5, p5 = _4(f7, { indicator: "explicit-key-ind", next: h4 ?? y6?.[0], offset: l8, onError: n2, startOnNewline: true }), d3 = !p5.found;
    if (d3) {
      if (h4 && (h4.type === "block-seq" ? n2(l8, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in h4 && h4.indent !== i6.indent && n2(l8, "BAD_INDENT", Ft)), !p5.anchor && !p5.tag && !y6) {
        c5 = p5.end, p5.comment && (a4.comment ? a4.comment += `
` + p5.comment : a4.comment = p5.comment);
        continue;
      }
      (p5.hasNewlineAfterProp || P5(h4)) && n2(h4 ?? f7[f7.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
    } else p5.found?.indent !== i6.indent && n2(l8, "BAD_INDENT", Ft);
    let g3 = p5.end, w7 = h4 ? s14(t4, h4, p5, n2) : e2(t4, g3, f7, null, p5, n2);
    t4.schema.compat && oe2(i6.indent, h4, n2), Ie2(t4, a4.items, w7) && n2(g3, "DUPLICATE_KEY", "Map keys must be unique");
    let k3 = _4(y6 ?? [], { indicator: "map-value-ind", next: b5, offset: w7.range[2], onError: n2, startOnNewline: !h4 || h4.type === "block-scalar" });
    if (l8 = k3.end, k3.found) {
      d3 && (b5?.type === "block-map" && !k3.hasNewline && n2(l8, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), t4.options.strict && p5.start < k3.found.offset - 1024 && n2(w7.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
      let S6 = b5 ? s14(t4, b5, k3, n2) : e2(t4, l8, y6, null, k3, n2);
      t4.schema.compat && oe2(i6.indent, b5, n2), l8 = S6.range[2];
      let N3 = new E4(w7, S6);
      t4.options.keepSourceTokens && (N3.srcToken = u5), a4.items.push(N3);
    } else {
      d3 && n2(w7.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), k3.comment && (w7.comment ? w7.comment += `
` + k3.comment : w7.comment = k3.comment);
      let S6 = new E4(w7);
      t4.options.keepSourceTokens && (S6.srcToken = u5), a4.items.push(S6);
    }
  }
  return c5 && c5 < l8 && n2(c5, "IMPOSSIBLE", "Map comment with trailing content"), a4.range = [i6.offset, l8, c5 ?? l8], a4;
}
function Vt2({ composeNode: s14, composeEmptyNode: e2 }, t4, i6, n2, r4) {
  let o2 = r4?.nodeClass ?? l7, a4 = new o2(t4.schema);
  t4.atRoot && (t4.atRoot = false);
  let l8 = i6.offset, c5 = null;
  for (let { start: u5, value: f7 } of i6.items) {
    let h4 = _4(u5, { indicator: "seq-item-ind", next: f7, offset: l8, onError: n2, startOnNewline: true });
    if (!h4.found) if (h4.anchor || h4.tag || f7) f7 && f7.type === "block-seq" ? n2(h4.end, "BAD_INDENT", "All sequence items must start at the same column") : n2(l8, "MISSING_CHAR", "Sequence item without - indicator");
    else {
      c5 = h4.end, h4.comment && (a4.comment = h4.comment);
      continue;
    }
    let y6 = f7 ? s14(t4, f7, h4, n2) : e2(t4, h4.end, u5, null, h4, n2);
    t4.schema.compat && oe2(i6.indent, f7, n2), l8 = y6.range[2], a4.items.push(y6);
  }
  return a4.range = [i6.offset, l8, c5 ?? l8], a4;
}
function B4(s14, e2, t4, i6) {
  let n2 = "";
  if (s14) {
    let r4 = false, o2 = "";
    for (let a4 of s14) {
      let { source: l8, type: c5 } = a4;
      switch (c5) {
        case "space":
          r4 = true;
          break;
        case "comment": {
          t4 && !r4 && i6(a4, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
          let u5 = l8.substring(1) || " ";
          n2 ? n2 += o2 + u5 : n2 = u5, o2 = "";
          break;
        }
        case "newline":
          n2 && (o2 += l8), r4 = true;
          break;
        default:
          i6(a4, "UNEXPECTED_TOKEN", `Unexpected ${c5} at node end`);
      }
      e2 += l8.length;
    }
  }
  return { comment: n2, offset: e2 };
}
var We2 = "Block collections are not allowed within flow collections";
var Je2 = (s14) => s14 && (s14.type === "block-map" || s14.type === "block-seq");
function Ht({ composeNode: s14, composeEmptyNode: e2 }, t4, i6, n2, r4) {
  let o2 = i6.start.source === "{", a4 = o2 ? "flow map" : "flow sequence", l8 = r4?.nodeClass ?? (o2 ? h3 : l7), c5 = new l8(t4.schema);
  c5.flow = true;
  let u5 = t4.atRoot;
  u5 && (t4.atRoot = false);
  let f7 = i6.offset + i6.start.source.length;
  for (let d3 = 0; d3 < i6.items.length; ++d3) {
    let g3 = i6.items[d3], { start: w7, key: k3, sep: S6, value: N3 } = g3, m7 = _4(w7, { flow: a4, indicator: "explicit-key-ind", next: k3 ?? S6?.[0], offset: f7, onError: n2, startOnNewline: false });
    if (!m7.found) {
      if (!m7.anchor && !m7.tag && !S6 && !N3) {
        d3 === 0 && m7.comma ? n2(m7.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${a4}`) : d3 < i6.items.length - 1 && n2(m7.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${a4}`), m7.comment && (c5.comment ? c5.comment += `
` + m7.comment : c5.comment = m7.comment), f7 = m7.end;
        continue;
      }
      !o2 && t4.options.strict && P5(k3) && n2(k3, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
    }
    if (d3 === 0) m7.comma && n2(m7.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${a4}`);
    else if (m7.comma || n2(m7.start, "MISSING_CHAR", `Missing , between ${a4} items`), m7.comment) {
      let A4 = "";
      e: for (let v4 of w7) switch (v4.type) {
        case "comma":
        case "space":
          break;
        case "comment":
          A4 = v4.source.substring(1);
          break e;
        default:
          break e;
      }
      if (A4) {
        let v4 = c5.items[c5.items.length - 1];
        p(v4) && (v4 = v4.value ?? v4.key), v4.comment ? v4.comment += `
` + A4 : v4.comment = A4, m7.comment = m7.comment.substring(A4.length + 1);
      }
    }
    if (!o2 && !S6 && !m7.found) {
      let A4 = N3 ? s14(t4, N3, m7, n2) : e2(t4, m7.end, S6, null, m7, n2);
      c5.items.push(A4), f7 = A4.range[2], Je2(N3) && n2(A4.range, "BLOCK_IN_FLOW", We2);
    } else {
      let A4 = m7.end, v4 = k3 ? s14(t4, k3, m7, n2) : e2(t4, A4, w7, null, m7, n2);
      Je2(k3) && n2(v4.range, "BLOCK_IN_FLOW", We2);
      let T3 = _4(S6 ?? [], { flow: a4, indicator: "map-value-ind", next: N3, offset: v4.range[2], onError: n2, startOnNewline: false });
      if (T3.found) {
        if (!o2 && !m7.found && t4.options.strict) {
          if (S6) for (let L2 of S6) {
            if (L2 === T3.found) break;
            if (L2.type === "newline") {
              n2(L2, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
              break;
            }
          }
          m7.start < T3.found.offset - 1024 && n2(T3.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
        }
      } else N3 && ("source" in N3 && N3.source && N3.source[0] === ":" ? n2(N3, "MISSING_CHAR", `Missing space after : in ${a4}`) : n2(T3.start, "MISSING_CHAR", `Missing , or : between ${a4} items`));
      let Q3 = N3 ? s14(t4, N3, T3, n2) : T3.found ? e2(t4, T3.end, S6, null, T3, n2) : null;
      Q3 ? Je2(N3) && n2(Q3.range, "BLOCK_IN_FLOW", We2) : T3.comment && (v4.comment ? v4.comment += `
` + T3.comment : v4.comment = T3.comment);
      let Be2 = new E4(v4, Q3);
      if (t4.options.keepSourceTokens && (Be2.srcToken = g3), o2) {
        let L2 = c5;
        Ie2(t4, L2.items, v4) && n2(A4, "DUPLICATE_KEY", "Map keys must be unique"), L2.items.push(Be2);
      } else {
        let L2 = new h3(t4.schema);
        L2.flow = true, L2.items.push(Be2), c5.items.push(L2);
      }
      f7 = Q3 ? Q3.range[2] : T3.end;
    }
  }
  let h4 = o2 ? "}" : "]", [y6, ...b5] = i6.end, p5 = f7;
  if (y6 && y6.source === h4) p5 = y6.offset + y6.source.length;
  else {
    let d3 = a4[0].toUpperCase() + a4.substring(1), g3 = u5 ? `${d3} must end with a ${h4}` : `${d3} in block collection must be sufficiently indented and end with a ${h4}`;
    n2(f7, u5 ? "MISSING_CHAR" : "BAD_INDENT", g3), y6 && y6.source.length !== 1 && b5.unshift(y6);
  }
  if (b5.length > 0) {
    let d3 = B4(b5, p5, t4.options.strict, n2);
    d3.comment && (c5.comment ? c5.comment += `
` + d3.comment : c5.comment = d3.comment), c5.range = [i6.offset, p5, d3.offset];
  } else c5.range = [i6.offset, p5, p5];
  return c5;
}
function Xe2(s14, e2, t4, i6, n2, r4) {
  let o2 = t4.type === "block-map" ? Yt2(s14, e2, t4, i6, r4) : t4.type === "block-seq" ? Vt2(s14, e2, t4, i6, r4) : Ht(s14, e2, t4, i6, r4), a4 = o2.constructor;
  return n2 === "!" || n2 === a4.tagName ? (o2.tag = a4.tagName, o2) : (n2 && (o2.tag = n2), o2);
}
function Wt(s14, e2, t4, i6, n2) {
  let r4 = i6 ? e2.directives.tagName(i6.source, (f7) => n2(i6, "TAG_RESOLVE_FAILED", f7)) : null, o2 = t4.type === "block-map" ? "map" : t4.type === "block-seq" ? "seq" : t4.start.source === "{" ? "map" : "seq";
  if (!i6 || !r4 || r4 === "!" || r4 === h3.tagName && o2 === "map" || r4 === l7.tagName && o2 === "seq" || !o2) return Xe2(s14, e2, t4, n2, r4);
  let a4 = e2.schema.tags.find((f7) => f7.tag === r4 && f7.collection === o2);
  if (!a4) {
    let f7 = e2.schema.knownTags[r4];
    if (f7 && f7.collection === o2) e2.schema.tags.push(Object.assign({}, f7, { default: false })), a4 = f7;
    else return f7?.collection ? n2(i6, "BAD_COLLECTION_TYPE", `${f7.tag} used for ${o2} collection, but expects ${f7.collection}`, true) : n2(i6, "TAG_RESOLVE_FAILED", `Unresolved tag: ${r4}`, true), Xe2(s14, e2, t4, n2, r4);
  }
  let l8 = Xe2(s14, e2, t4, n2, r4, a4), c5 = a4.resolve?.(l8, (f7) => n2(i6, "TAG_RESOLVE_FAILED", f7), e2.options) ?? l8, u5 = n(c5) ? c5 : new t(c5);
  return u5.range = l8.range, u5.tag = r4, a4?.format && (u5.format = a4.format), u5;
}
function Ee2(s14, e2, t4) {
  let i6 = s14.offset, n2 = Ai(s14, e2, t4);
  if (!n2) return { value: "", type: null, comment: "", range: [i6, i6, i6] };
  let r4 = n2.mode === ">" ? t.BLOCK_FOLDED : t.BLOCK_LITERAL, o2 = s14.source ? Ti(s14.source) : [], a4 = o2.length;
  for (let p5 = o2.length - 1; p5 >= 0; --p5) {
    let d3 = o2[p5][1];
    if (d3 === "" || d3 === "\r") a4 = p5;
    else break;
  }
  if (a4 === 0) {
    let p5 = n2.chomp === "+" && o2.length > 0 ? `
`.repeat(Math.max(1, o2.length - 1)) : "", d3 = i6 + n2.length;
    return s14.source && (d3 += s14.source.length), { value: p5, type: r4, comment: n2.comment, range: [i6, d3, d3] };
  }
  let l8 = s14.indent + n2.indent, c5 = s14.offset + n2.length, u5 = 0;
  for (let p5 = 0; p5 < a4; ++p5) {
    let [d3, g3] = o2[p5];
    if (g3 === "" || g3 === "\r") n2.indent === 0 && d3.length > l8 && (l8 = d3.length);
    else {
      d3.length < l8 && t4(c5 + d3.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), n2.indent === 0 && (l8 = d3.length), u5 = p5;
      break;
    }
    c5 += d3.length + g3.length + 1;
  }
  for (let p5 = o2.length - 1; p5 >= a4; --p5) o2[p5][0].length > l8 && (a4 = p5 + 1);
  let f7 = "", h4 = "", y6 = false;
  for (let p5 = 0; p5 < u5; ++p5) f7 += o2[p5][0].slice(l8) + `
`;
  for (let p5 = u5; p5 < a4; ++p5) {
    let [d3, g3] = o2[p5];
    c5 += d3.length + g3.length + 1;
    let w7 = g3[g3.length - 1] === "\r";
    if (w7 && (g3 = g3.slice(0, -1)), g3 && d3.length < l8) {
      let S6 = `Block scalar lines must not be less indented than their ${n2.indent ? "explicit indentation indicator" : "first line"}`;
      t4(c5 - g3.length - (w7 ? 2 : 1), "BAD_INDENT", S6), d3 = "";
    }
    r4 === t.BLOCK_LITERAL ? (f7 += h4 + d3.slice(l8) + g3, h4 = `
`) : d3.length > l8 || g3[0] === "	" ? (h4 === " " ? h4 = `
` : !y6 && h4 === `
` && (h4 = `

`), f7 += h4 + d3.slice(l8) + g3, h4 = `
`, y6 = true) : g3 === "" ? h4 === `
` ? f7 += `
` : h4 = `
` : (f7 += h4 + g3, h4 = " ", y6 = false);
  }
  switch (n2.chomp) {
    case "-":
      break;
    case "+":
      for (let p5 = a4; p5 < o2.length; ++p5) f7 += `
` + o2[p5][0].slice(l8);
      f7[f7.length - 1] !== `
` && (f7 += `
`);
      break;
    default:
      f7 += `
`;
  }
  let b5 = i6 + n2.length + s14.source.length;
  return { value: f7, type: r4, comment: n2.comment, range: [i6, b5, b5] };
}
function Ai({ offset: s14, props: e2 }, t4, i6) {
  if (e2[0].type !== "block-scalar-header") return i6(e2[0], "IMPOSSIBLE", "Block scalar header not found"), null;
  let { source: n2 } = e2[0], r4 = n2[0], o2 = 0, a4 = "", l8 = -1;
  for (let h4 = 1; h4 < n2.length; ++h4) {
    let y6 = n2[h4];
    if (!a4 && (y6 === "-" || y6 === "+")) a4 = y6;
    else {
      let b5 = Number(y6);
      !o2 && b5 ? o2 = b5 : l8 === -1 && (l8 = s14 + h4);
    }
  }
  l8 !== -1 && i6(l8, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${n2}`);
  let c5 = false, u5 = "", f7 = n2.length;
  for (let h4 = 1; h4 < e2.length; ++h4) {
    let y6 = e2[h4];
    switch (y6.type) {
      case "space":
        c5 = true;
      case "newline":
        f7 += y6.source.length;
        break;
      case "comment":
        t4 && !c5 && i6(y6, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), f7 += y6.source.length, u5 = y6.source.substring(1);
        break;
      case "error":
        i6(y6, "UNEXPECTED_TOKEN", y6.message), f7 += y6.source.length;
        break;
      default: {
        let b5 = `Unexpected token in block scalar header: ${y6.type}`;
        i6(y6, "UNEXPECTED_TOKEN", b5);
        let p5 = y6.source;
        p5 && typeof p5 == "string" && (f7 += p5.length);
      }
    }
  }
  return { mode: r4, indent: o2, chomp: a4, comment: u5, length: f7 };
}
function Ti(s14) {
  let e2 = s14.split(/\n( *)/), t4 = e2[0], i6 = t4.match(/^( *)/), r4 = [i6?.[1] ? [i6[1], t4.slice(i6[1].length)] : ["", t4]];
  for (let o2 = 1; o2 < e2.length; o2 += 2) r4.push([e2[o2], e2[o2 + 1]]);
  return r4;
}
function xe2(s14, e2, t4) {
  let { offset: i6, type: n2, source: r4, end: o2 } = s14, a4, l8, c5 = (h4, y6, b5) => t4(i6 + h4, y6, b5);
  switch (n2) {
    case "scalar":
      a4 = t.PLAIN, l8 = Ii(r4, c5);
      break;
    case "single-quoted-scalar":
      a4 = t.QUOTE_SINGLE, l8 = Ei(r4, c5);
      break;
    case "double-quoted-scalar":
      a4 = t.QUOTE_DOUBLE, l8 = xi(r4, c5);
      break;
    default:
      return t4(s14, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${n2}`), { value: "", type: null, comment: "", range: [i6, i6 + r4.length, i6 + r4.length] };
  }
  let u5 = i6 + r4.length, f7 = B4(o2, u5, e2, t4);
  return { value: l8, type: a4, comment: f7.comment, range: [i6, u5, f7.offset] };
}
function Ii(s14, e2) {
  let t4 = "";
  switch (s14[0]) {
    case "	":
      t4 = "a tab character";
      break;
    case ",":
      t4 = "flow indicator character ,";
      break;
    case "%":
      t4 = "directive indicator character %";
      break;
    case "|":
    case ">": {
      t4 = `block scalar indicator ${s14[0]}`;
      break;
    }
    case "@":
    case "`": {
      t4 = `reserved character ${s14[0]}`;
      break;
    }
  }
  return t4 && e2(0, "BAD_SCALAR_START", `Plain value cannot start with ${t4}`), Jt(s14);
}
function Ei(s14, e2) {
  return (s14[s14.length - 1] !== "'" || s14.length === 1) && e2(s14.length, "MISSING_CHAR", "Missing closing 'quote"), Jt(s14.slice(1, -1)).replace(/''/g, "'");
}
function Jt(s14) {
  let e2, t4;
  try {
    e2 = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), t4 = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
  } catch {
    e2 = /(.*?)[ \t]*\r?\n/sy, t4 = /[ \t]*(.*?)[ \t]*\r?\n/sy;
  }
  let i6 = e2.exec(s14);
  if (!i6) return s14;
  let n2 = i6[1], r4 = " ", o2 = e2.lastIndex;
  for (t4.lastIndex = o2; i6 = t4.exec(s14); ) i6[1] === "" ? r4 === `
` ? n2 += r4 : r4 = `
` : (n2 += r4 + i6[1], r4 = " "), o2 = t4.lastIndex;
  let a4 = /[ \t]*(.*)/sy;
  return a4.lastIndex = o2, i6 = a4.exec(s14), n2 + r4 + (i6?.[1] ?? "");
}
function xi(s14, e2) {
  let t4 = "";
  for (let i6 = 1; i6 < s14.length - 1; ++i6) {
    let n2 = s14[i6];
    if (!(n2 === "\r" && s14[i6 + 1] === `
`)) if (n2 === `
`) {
      let { fold: r4, offset: o2 } = Li(s14, i6);
      t4 += r4, i6 = o2;
    } else if (n2 === "\\") {
      let r4 = s14[++i6], o2 = Oi[r4];
      if (o2) t4 += o2;
      else if (r4 === `
`) for (r4 = s14[i6 + 1]; r4 === " " || r4 === "	"; ) r4 = s14[++i6 + 1];
      else if (r4 === "\r" && s14[i6 + 1] === `
`) for (r4 = s14[++i6 + 1]; r4 === " " || r4 === "	"; ) r4 = s14[++i6 + 1];
      else if (r4 === "x" || r4 === "u" || r4 === "U") {
        let a4 = { x: 2, u: 4, U: 8 }[r4];
        t4 += Ci(s14, i6 + 1, a4, e2), i6 += a4;
      } else {
        let a4 = s14.substr(i6 - 1, 2);
        e2(i6 - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${a4}`), t4 += a4;
      }
    } else if (n2 === " " || n2 === "	") {
      let r4 = i6, o2 = s14[i6 + 1];
      for (; o2 === " " || o2 === "	"; ) o2 = s14[++i6 + 1];
      o2 !== `
` && !(o2 === "\r" && s14[i6 + 2] === `
`) && (t4 += i6 > r4 ? s14.slice(r4, i6 + 1) : n2);
    } else t4 += n2;
  }
  return (s14[s14.length - 1] !== '"' || s14.length === 1) && e2(s14.length, "MISSING_CHAR", 'Missing closing "quote'), t4;
}
function Li(s14, e2) {
  let t4 = "", i6 = s14[e2 + 1];
  for (; (i6 === " " || i6 === "	" || i6 === `
` || i6 === "\r") && !(i6 === "\r" && s14[e2 + 2] !== `
`); ) i6 === `
` && (t4 += `
`), e2 += 1, i6 = s14[e2 + 1];
  return t4 || (t4 = " "), { fold: t4, offset: e2 };
}
var Oi = { 0: "\0", a: "\x07", b: "\b", e: "\x1B", f: "\f", n: `
`, r: "\r", t: "	", v: "\v", N: "", _: " ", L: "\u2028", P: "\u2029", " ": " ", '"': '"', "/": "/", "\\": "\\", "	": "	" };
function Ci(s14, e2, t4, i6) {
  let n2 = s14.substr(e2, t4), o2 = n2.length === t4 && /^[0-9a-fA-F]+$/.test(n2) ? parseInt(n2, 16) : NaN;
  if (isNaN(o2)) {
    let a4 = s14.substr(e2 - 2, t4 + 2);
    return i6(e2 - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${a4}`), a4;
  }
  return String.fromCodePoint(o2);
}
function Ze2(s14, e2, t4, i6) {
  let { value: n2, type: r4, comment: o2, range: a4 } = e2.type === "block-scalar" ? Ee2(e2, s14.options.strict, i6) : xe2(e2, s14.options.strict, i6), l8 = t4 ? s14.directives.tagName(t4.source, (f7) => i6(t4, "TAG_RESOLVE_FAILED", f7)) : null, c5 = t4 && l8 ? Bi(s14.schema, n2, l8, t4, i6) : e2.type === "scalar" ? Pi(s14, n2, e2, i6) : s14.schema[r], u5;
  try {
    let f7 = c5.resolve(n2, (h4) => i6(t4 ?? e2, "TAG_RESOLVE_FAILED", h4), s14.options);
    u5 = e(f7) ? f7 : new t(f7);
  } catch (f7) {
    let h4 = f7 instanceof Error ? f7.message : String(f7);
    i6(t4 ?? e2, "TAG_RESOLVE_FAILED", h4), u5 = new t(n2);
  }
  return u5.range = a4, u5.source = n2, r4 && (u5.type = r4), l8 && (u5.tag = l8), c5.format && (u5.format = c5.format), o2 && (u5.comment = o2), u5;
}
function Bi(s14, e2, t4, i6, n2) {
  if (t4 === "!") return s14[r];
  let r4 = [];
  for (let a4 of s14.tags) if (!a4.collection && a4.tag === t4) if (a4.default && a4.test) r4.push(a4);
  else return a4;
  for (let a4 of r4) if (a4.test?.test(e2)) return a4;
  let o2 = s14.knownTags[t4];
  return o2 && !o2.collection ? (s14.tags.push(Object.assign({}, o2, { default: false, test: void 0 })), o2) : (n2(i6, "TAG_RESOLVE_FAILED", `Unresolved tag: ${t4}`, t4 !== "tag:yaml.org,2002:str"), s14[r]);
}
function Pi({ directives: s14, schema: e2 }, t4, i6, n2) {
  let r4 = e2.tags.find((o2) => o2.default && o2.test?.test(t4)) || e2[r];
  if (e2.compat) {
    let o2 = e2.compat.find((a4) => a4.default && a4.test?.test(t4)) ?? e2[r];
    if (r4.tag !== o2.tag) {
      let a4 = s14.tagString(r4.tag), l8 = s14.tagString(o2.tag), c5 = `Value may be parsed as either ${a4} or ${l8}`;
      n2(i6, "TAG_RESOLVE_FAILED", c5, true);
    }
  }
  return r4;
}
function Qt(s14, e2, t4) {
  if (e2) {
    t4 === null && (t4 = e2.length);
    for (let i6 = t4 - 1; i6 >= 0; --i6) {
      let n2 = e2[i6];
      switch (n2.type) {
        case "space":
        case "comment":
        case "newline":
          s14 -= n2.source.length;
          continue;
      }
      for (n2 = e2[++i6]; n2?.type === "space"; ) s14 += n2.source.length, n2 = e2[++i6];
      break;
    }
  }
  return s14;
}
var Mi = { composeNode: et2, composeEmptyNode: Le2 };
function et2(s14, e2, t4, i6) {
  let { spaceBefore: n2, comment: r4, anchor: o2, tag: a4 } = t4, l8, c5 = true;
  switch (e2.type) {
    case "alias":
      l8 = Di(s14, e2, i6), (o2 || a4) && i6(e2, "ALIAS_PROPS", "An alias node must not specify any properties");
      break;
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "block-scalar":
      l8 = Ze2(s14, e2, a4, i6), o2 && (l8.anchor = o2.source.substring(1));
      break;
    case "block-map":
    case "block-seq":
    case "flow-collection":
      l8 = Wt(Mi, s14, e2, a4, i6), o2 && (l8.anchor = o2.source.substring(1));
      break;
    default: {
      let u5 = e2.type === "error" ? e2.message : `Unsupported token (type: ${e2.type})`;
      i6(e2, "UNEXPECTED_TOKEN", u5), l8 = Le2(s14, e2.offset, void 0, null, t4, i6), c5 = false;
    }
  }
  return o2 && l8.anchor === "" && i6(o2, "BAD_ALIAS", "Anchor cannot be an empty string"), n2 && (l8.spaceBefore = true), r4 && (e2.type === "scalar" && e2.source === "" ? l8.comment = r4 : l8.commentBefore = r4), s14.options.keepSourceTokens && c5 && (l8.srcToken = e2), l8;
}
function Le2(s14, e2, t4, i6, { spaceBefore: n2, comment: r4, anchor: o2, tag: a4, end: l8 }, c5) {
  let u5 = { type: "scalar", offset: Qt(e2, t4, i6), indent: -1, source: "" }, f7 = Ze2(s14, u5, a4, c5);
  return o2 && (f7.anchor = o2.source.substring(1), f7.anchor === "" && c5(o2, "BAD_ALIAS", "Anchor cannot be an empty string")), n2 && (f7.spaceBefore = true), r4 && (f7.comment = r4, f7.range[2] = l8), f7;
}
function Di({ options: s14 }, { offset: e2, source: t4, end: i6 }, n2) {
  let r4 = new l3(t4.substring(1));
  r4.source === "" && n2(e2, "BAD_ALIAS", "Alias cannot be an empty string"), r4.source.endsWith(":") && n2(e2 + t4.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
  let o2 = e2 + t4.length, a4 = B4(i6, o2, s14.strict, n2);
  return r4.range = [e2, o2, a4.offset], a4.comment && (r4.comment = a4.comment), r4;
}
function zt2(s14, e2, { offset: t4, start: i6, value: n2, end: r4 }, o2) {
  let a4 = Object.assign({ _directives: e2 }, s14), l8 = new C4(void 0, a4), c5 = { atRoot: true, directives: l8.directives, options: l8.options, schema: l8.schema }, u5 = _4(i6, { indicator: "doc-start", next: n2 ?? r4?.[0], offset: t4, onError: o2, startOnNewline: true });
  u5.found && (l8.directives.docStart = true, n2 && (n2.type === "block-map" || n2.type === "block-seq") && !u5.hasNewline && o2(u5.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), l8.contents = n2 ? et2(c5, n2, u5, o2) : Le2(c5, u5.end, i6, null, u5, o2);
  let f7 = l8.contents.range[2], h4 = B4(r4, f7, false, o2);
  return h4.comment && (l8.comment = h4.comment), l8.range = [t4, f7, h4.offset], l8;
}
function le2(s14) {
  if (typeof s14 == "number") return [s14, s14 + 1];
  if (Array.isArray(s14)) return s14.length === 2 ? s14 : [s14[0], s14[1]];
  let { offset: e2, source: t4 } = s14;
  return [e2, e2 + (typeof t4 == "string" ? t4.length : 1)];
}
function Zt(s14) {
  let e2 = "", t4 = false, i6 = false;
  for (let n2 = 0; n2 < s14.length; ++n2) {
    let r4 = s14[n2];
    switch (r4[0]) {
      case "#":
        e2 += (e2 === "" ? "" : i6 ? `

` : `
`) + (r4.substring(1) || " "), t4 = true, i6 = false;
        break;
      case "%":
        s14[n2 + 1]?.[0] !== "#" && (n2 += 1), t4 = false;
        break;
      default:
        t4 || (i6 = true), t4 = false;
    }
  }
  return { comment: e2, afterEmptyLine: i6 };
}
var D5 = class {
  constructor(e2 = {}) {
    this.doc = null, this.atDirectives = false, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (t4, i6, n2, r4) => {
      let o2 = le2(t4);
      r4 ? this.warnings.push(new G3(o2, i6, n2)) : this.errors.push(new I3(o2, i6, n2));
    }, this.directives = new O5({ version: e2.version || "1.2" }), this.options = e2;
  }
  decorate(e2, t4) {
    let { comment: i6, afterEmptyLine: n2 } = Zt(this.prelude);
    if (i6) {
      let r4 = e2.contents;
      if (t4) e2.comment = e2.comment ? `${e2.comment}
${i6}` : i6;
      else if (n2 || e2.directives.docStart || !r4) e2.commentBefore = i6;
      else if (f2(r4) && !r4.flow && r4.items.length > 0) {
        let o2 = r4.items[0];
        p(o2) && (o2 = o2.key);
        let a4 = o2.commentBefore;
        o2.commentBefore = a4 ? `${i6}
${a4}` : i6;
      } else {
        let o2 = r4.commentBefore;
        r4.commentBefore = o2 ? `${i6}
${o2}` : i6;
      }
    }
    t4 ? (Array.prototype.push.apply(e2.errors, this.errors), Array.prototype.push.apply(e2.warnings, this.warnings)) : (e2.errors = this.errors, e2.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = [];
  }
  streamInfo() {
    return { comment: Zt(this.prelude).comment, directives: this.directives, errors: this.errors, warnings: this.warnings };
  }
  *compose(e2, t4 = false, i6 = -1) {
    for (let n2 of e2) yield* this.next(n2);
    yield* this.end(t4, i6);
  }
  *next(e2) {
    switch (e2.type) {
      case "directive":
        this.directives.add(e2.source, (t4, i6, n2) => {
          let r4 = le2(e2);
          r4[0] += t4, this.onError(r4, "BAD_DIRECTIVE", i6, n2);
        }), this.prelude.push(e2.source), this.atDirectives = true;
        break;
      case "document": {
        let t4 = zt2(this.options, this.directives, e2, this.onError);
        this.atDirectives && !t4.directives.docStart && this.onError(e2, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(t4, false), this.doc && (yield this.doc), this.doc = t4, this.atDirectives = false;
        break;
      }
      case "byte-order-mark":
      case "space":
        break;
      case "comment":
      case "newline":
        this.prelude.push(e2.source);
        break;
      case "error": {
        let t4 = e2.source ? `${e2.message}: ${JSON.stringify(e2.source)}` : e2.message, i6 = new I3(le2(e2), "UNEXPECTED_TOKEN", t4);
        this.atDirectives || !this.doc ? this.errors.push(i6) : this.doc.errors.push(i6);
        break;
      }
      case "doc-end": {
        if (!this.doc) {
          let i6 = "Unexpected doc-end without preceding document";
          this.errors.push(new I3(le2(e2), "UNEXPECTED_TOKEN", i6));
          break;
        }
        this.doc.directives.docEnd = true;
        let t4 = B4(e2.end, e2.offset + e2.source.length, this.doc.options.strict, this.onError);
        if (this.decorate(this.doc, true), t4.comment) {
          let i6 = this.doc.comment;
          this.doc.comment = i6 ? `${i6}
${t4.comment}` : t4.comment;
        }
        this.doc.range[2] = t4.offset;
        break;
      }
      default:
        this.errors.push(new I3(le2(e2), "UNEXPECTED_TOKEN", `Unsupported token ${e2.type}`));
    }
  }
  *end(e2 = false, t4 = -1) {
    if (this.doc) this.decorate(this.doc, true), yield this.doc, this.doc = null;
    else if (e2) {
      let i6 = Object.assign({ _directives: this.directives }, this.options), n2 = new C4(void 0, i6);
      this.atDirectives && this.onError(t4, "MISSING_CHAR", "Missing directives-end indicator line"), n2.range = [0, t4, t4], this.decorate(n2, false), yield n2;
    }
  }
};
var nt2 = {};
ct2(nt2, { BOM: () => ce2, DOCUMENT: () => fe2, FLOW_END: () => ue2, SCALAR: () => H3, createScalarToken: () => ss2, isCollection: () => ji, isScalar: () => Fi, prettyToken: () => Yi, resolveAsScalar: () => ts2, setScalarValue: () => is2, stringify: () => rs2, tokenType: () => it, visit: () => $4 });
function ts2(s14, e2 = true, t4) {
  if (s14) {
    let i6 = (n2, r4, o2) => {
      let a4 = typeof n2 == "number" ? n2 : Array.isArray(n2) ? n2[0] : n2.offset;
      if (t4) t4(a4, r4, o2);
      else throw new I3([a4, a4 + 1], r4, o2);
    };
    switch (s14.type) {
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return xe2(s14, e2, i6);
      case "block-scalar":
        return Ee2(s14, e2, i6);
    }
  }
  return null;
}
function ss2(s14, e2) {
  let { implicitKey: t4 = false, indent: i6, inFlow: n2 = false, offset: r4 = -1, type: o2 = "PLAIN" } = e2, a4 = m5({ type: o2, value: s14 }, { implicitKey: t4, indent: i6 > 0 ? " ".repeat(i6) : "", inFlow: n2, options: { blockQuote: true, lineWidth: -1 } }), l8 = e2.end ?? [{ type: "newline", offset: -1, indent: i6, source: `
` }];
  switch (a4[0]) {
    case "|":
    case ">": {
      let c5 = a4.indexOf(`
`), u5 = a4.substring(0, c5), f7 = a4.substring(c5 + 1) + `
`, h4 = [{ type: "block-scalar-header", offset: r4, indent: i6, source: u5 }];
      return ns2(h4, l8) || h4.push({ type: "newline", offset: -1, indent: i6, source: `
` }), { type: "block-scalar", offset: r4, indent: i6, props: h4, source: f7 };
    }
    case '"':
      return { type: "double-quoted-scalar", offset: r4, indent: i6, source: a4, end: l8 };
    case "'":
      return { type: "single-quoted-scalar", offset: r4, indent: i6, source: a4, end: l8 };
    default:
      return { type: "scalar", offset: r4, indent: i6, source: a4, end: l8 };
  }
}
function is2(s14, e2, t4 = {}) {
  let { afterKey: i6 = false, implicitKey: n2 = false, inFlow: r4 = false, type: o2 } = t4, a4 = "indent" in s14 ? s14.indent : null;
  if (i6 && typeof a4 == "number" && (a4 += 2), !o2) switch (s14.type) {
    case "single-quoted-scalar":
      o2 = "QUOTE_SINGLE";
      break;
    case "double-quoted-scalar":
      o2 = "QUOTE_DOUBLE";
      break;
    case "block-scalar": {
      let c5 = s14.props[0];
      if (c5.type !== "block-scalar-header") throw new Error("Invalid block scalar header");
      o2 = c5.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
      break;
    }
    default:
      o2 = "PLAIN";
  }
  let l8 = m5({ type: o2, value: e2 }, { implicitKey: n2 || a4 === null, indent: a4 !== null && a4 > 0 ? " ".repeat(a4) : "", inFlow: r4, options: { blockQuote: true, lineWidth: -1 } });
  switch (l8[0]) {
    case "|":
    case ">":
      Ui(s14, l8);
      break;
    case '"':
      tt2(s14, l8, "double-quoted-scalar");
      break;
    case "'":
      tt2(s14, l8, "single-quoted-scalar");
      break;
    default:
      tt2(s14, l8, "scalar");
  }
}
function Ui(s14, e2) {
  let t4 = e2.indexOf(`
`), i6 = e2.substring(0, t4), n2 = e2.substring(t4 + 1) + `
`;
  if (s14.type === "block-scalar") {
    let r4 = s14.props[0];
    if (r4.type !== "block-scalar-header") throw new Error("Invalid block scalar header");
    r4.source = i6, s14.source = n2;
  } else {
    let { offset: r4 } = s14, o2 = "indent" in s14 ? s14.indent : -1, a4 = [{ type: "block-scalar-header", offset: r4, indent: o2, source: i6 }];
    ns2(a4, "end" in s14 ? s14.end : void 0) || a4.push({ type: "newline", offset: -1, indent: o2, source: `
` });
    for (let l8 of Object.keys(s14)) l8 !== "type" && l8 !== "offset" && delete s14[l8];
    Object.assign(s14, { type: "block-scalar", indent: o2, props: a4, source: n2 });
  }
}
function ns2(s14, e2) {
  if (e2) for (let t4 of e2) switch (t4.type) {
    case "space":
    case "comment":
      s14.push(t4);
      break;
    case "newline":
      return s14.push(t4), true;
  }
  return false;
}
function tt2(s14, e2, t4) {
  switch (s14.type) {
    case "scalar":
    case "double-quoted-scalar":
    case "single-quoted-scalar":
      s14.type = t4, s14.source = e2;
      break;
    case "block-scalar": {
      let i6 = s14.props.slice(1), n2 = e2.length;
      s14.props[0].type === "block-scalar-header" && (n2 -= s14.props[0].source.length);
      for (let r4 of i6) r4.offset += n2;
      delete s14.props, Object.assign(s14, { type: t4, source: e2, end: i6 });
      break;
    }
    case "block-map":
    case "block-seq": {
      let n2 = { type: "newline", offset: s14.offset + e2.length, indent: s14.indent, source: `
` };
      delete s14.items, Object.assign(s14, { type: t4, source: e2, end: [n2] });
      break;
    }
    default: {
      let i6 = "indent" in s14 ? s14.indent : -1, n2 = "end" in s14 && Array.isArray(s14.end) ? s14.end.filter((r4) => r4.type === "space" || r4.type === "comment" || r4.type === "newline") : [];
      for (let r4 of Object.keys(s14)) r4 !== "type" && r4 !== "offset" && delete s14[r4];
      Object.assign(s14, { type: t4, indent: i6, source: e2, end: n2 });
    }
  }
}
var rs2 = (s14) => "type" in s14 ? Ce2(s14) : Oe2(s14);
function Ce2(s14) {
  switch (s14.type) {
    case "block-scalar": {
      let e2 = "";
      for (let t4 of s14.props) e2 += Ce2(t4);
      return e2 + s14.source;
    }
    case "block-map":
    case "block-seq": {
      let e2 = "";
      for (let t4 of s14.items) e2 += Oe2(t4);
      return e2;
    }
    case "flow-collection": {
      let e2 = s14.start.source;
      for (let t4 of s14.items) e2 += Oe2(t4);
      for (let t4 of s14.end) e2 += t4.source;
      return e2;
    }
    case "document": {
      let e2 = Oe2(s14);
      if (s14.end) for (let t4 of s14.end) e2 += t4.source;
      return e2;
    }
    default: {
      let e2 = s14.source;
      if ("end" in s14 && s14.end) for (let t4 of s14.end) e2 += t4.source;
      return e2;
    }
  }
}
function Oe2({ start: s14, key: e2, sep: t4, value: i6 }) {
  let n2 = "";
  for (let r4 of s14) n2 += r4.source;
  if (e2 && (n2 += Ce2(e2)), t4) for (let r4 of t4) n2 += r4.source;
  return i6 && (n2 += Ce2(i6)), n2;
}
var st2 = Symbol("break visit");
var Ri = Symbol("skip children");
var os2 = Symbol("remove item");
function $4(s14, e2) {
  "type" in s14 && s14.type === "document" && (s14 = { start: s14.start, value: s14.value }), as2(Object.freeze([]), s14, e2);
}
$4.BREAK = st2;
$4.SKIP = Ri;
$4.REMOVE = os2;
$4.itemAtPath = (s14, e2) => {
  let t4 = s14;
  for (let [i6, n2] of e2) {
    let r4 = t4?.[i6];
    if (r4 && "items" in r4) t4 = r4.items[n2];
    else return;
  }
  return t4;
};
$4.parentCollection = (s14, e2) => {
  let t4 = $4.itemAtPath(s14, e2.slice(0, -1)), i6 = e2[e2.length - 1][0], n2 = t4?.[i6];
  if (n2 && "items" in n2) return n2;
  throw new Error("Parent collection not found");
};
function as2(s14, e2, t4) {
  let i6 = t4(e2, s14);
  if (typeof i6 == "symbol") return i6;
  for (let n2 of ["key", "value"]) {
    let r4 = e2[n2];
    if (r4 && "items" in r4) {
      for (let o2 = 0; o2 < r4.items.length; ++o2) {
        let a4 = as2(Object.freeze(s14.concat([[n2, o2]])), r4.items[o2], t4);
        if (typeof a4 == "number") o2 = a4 - 1;
        else {
          if (a4 === st2) return st2;
          a4 === os2 && (r4.items.splice(o2, 1), o2 -= 1);
        }
      }
      typeof i6 == "function" && n2 === "key" && (i6 = i6(e2, s14));
    }
  }
  return typeof i6 == "function" ? i6(e2, s14) : i6;
}
var ce2 = "\uFEFF";
var fe2 = "";
var ue2 = "";
var H3 = "";
var ji = (s14) => !!s14 && "items" in s14;
var Fi = (s14) => !!s14 && (s14.type === "scalar" || s14.type === "single-quoted-scalar" || s14.type === "double-quoted-scalar" || s14.type === "block-scalar");
function Yi(s14) {
  switch (s14) {
    case ce2:
      return "<BOM>";
    case fe2:
      return "<DOC>";
    case ue2:
      return "<FLOW_END>";
    case H3:
      return "<SCALAR>";
    default:
      return JSON.stringify(s14);
  }
}
function it(s14) {
  switch (s14) {
    case ce2:
      return "byte-order-mark";
    case fe2:
      return "doc-mode";
    case ue2:
      return "flow-error-end";
    case H3:
      return "scalar";
    case "---":
      return "doc-start";
    case "...":
      return "doc-end";
    case "":
    case `
`:
    case `\r
`:
      return "newline";
    case "-":
      return "seq-item-ind";
    case "?":
      return "explicit-key-ind";
    case ":":
      return "map-value-ind";
    case "{":
      return "flow-map-start";
    case "}":
      return "flow-map-end";
    case "[":
      return "flow-seq-start";
    case "]":
      return "flow-seq-end";
    case ",":
      return "comma";
  }
  switch (s14[0]) {
    case " ":
    case "	":
      return "space";
    case "#":
      return "comment";
    case "%":
      return "directive-line";
    case "*":
      return "alias";
    case "&":
      return "anchor";
    case "!":
      return "tag";
    case "'":
      return "single-quoted-scalar";
    case '"':
      return "double-quoted-scalar";
    case "|":
    case ">":
      return "block-scalar-header";
  }
  return null;
}
function E5(s14) {
  switch (s14) {
    case void 0:
    case " ":
    case `
`:
    case "\r":
    case "	":
      return true;
    default:
      return false;
  }
}
var ls2 = "0123456789ABCDEFabcdef".split("");
var Vi = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split("");
var rt2 = ",[]{}".split("");
var Gi = ` ,[]{}
\r	`.split("");
var ot2 = (s14) => !s14 || Gi.includes(s14);
var W4 = class {
  constructor() {
    this.atEnd = false, this.blockScalarIndent = -1, this.blockScalarKeep = false, this.buffer = "", this.flowKey = false, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
  }
  *lex(e2, t4 = false) {
    if (e2) {
      if (typeof e2 != "string") throw TypeError("source is not a string");
      this.buffer = this.buffer ? this.buffer + e2 : e2, this.lineEndPos = null;
    }
    this.atEnd = !t4;
    let i6 = this.next ?? "stream";
    for (; i6 && (t4 || this.hasChars(1)); ) i6 = yield* this.parseNext(i6);
  }
  atLineEnd() {
    let e2 = this.pos, t4 = this.buffer[e2];
    for (; t4 === " " || t4 === "	"; ) t4 = this.buffer[++e2];
    return !t4 || t4 === "#" || t4 === `
` ? true : t4 === "\r" ? this.buffer[e2 + 1] === `
` : false;
  }
  charAt(e2) {
    return this.buffer[this.pos + e2];
  }
  continueScalar(e2) {
    let t4 = this.buffer[e2];
    if (this.indentNext > 0) {
      let i6 = 0;
      for (; t4 === " "; ) t4 = this.buffer[++i6 + e2];
      if (t4 === "\r") {
        let n2 = this.buffer[i6 + e2 + 1];
        if (n2 === `
` || !n2 && !this.atEnd) return e2 + i6 + 1;
      }
      return t4 === `
` || i6 >= this.indentNext || !t4 && !this.atEnd ? e2 + i6 : -1;
    }
    if (t4 === "-" || t4 === ".") {
      let i6 = this.buffer.substr(e2, 3);
      if ((i6 === "---" || i6 === "...") && E5(this.buffer[e2 + 3])) return -1;
    }
    return e2;
  }
  getLine() {
    let e2 = this.lineEndPos;
    return (typeof e2 != "number" || e2 !== -1 && e2 < this.pos) && (e2 = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = e2), e2 === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[e2 - 1] === "\r" && (e2 -= 1), this.buffer.substring(this.pos, e2));
  }
  hasChars(e2) {
    return this.pos + e2 <= this.buffer.length;
  }
  setNext(e2) {
    return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = e2, null;
  }
  peek(e2) {
    return this.buffer.substr(this.pos, e2);
  }
  *parseNext(e2) {
    switch (e2) {
      case "stream":
        return yield* this.parseStream();
      case "line-start":
        return yield* this.parseLineStart();
      case "block-start":
        return yield* this.parseBlockStart();
      case "doc":
        return yield* this.parseDocument();
      case "flow":
        return yield* this.parseFlowCollection();
      case "quoted-scalar":
        return yield* this.parseQuotedScalar();
      case "block-scalar":
        return yield* this.parseBlockScalar();
      case "plain-scalar":
        return yield* this.parsePlainScalar();
    }
  }
  *parseStream() {
    let e2 = this.getLine();
    if (e2 === null) return this.setNext("stream");
    if (e2[0] === ce2 && (yield* this.pushCount(1), e2 = e2.substring(1)), e2[0] === "%") {
      let t4 = e2.length, i6 = e2.indexOf("#");
      for (; i6 !== -1; ) {
        let r4 = e2[i6 - 1];
        if (r4 === " " || r4 === "	") {
          t4 = i6 - 1;
          break;
        } else i6 = e2.indexOf("#", i6 + 1);
      }
      for (; ; ) {
        let r4 = e2[t4 - 1];
        if (r4 === " " || r4 === "	") t4 -= 1;
        else break;
      }
      let n2 = (yield* this.pushCount(t4)) + (yield* this.pushSpaces(true));
      return yield* this.pushCount(e2.length - n2), this.pushNewline(), "stream";
    }
    if (this.atLineEnd()) {
      let t4 = yield* this.pushSpaces(true);
      return yield* this.pushCount(e2.length - t4), yield* this.pushNewline(), "stream";
    }
    return yield fe2, yield* this.parseLineStart();
  }
  *parseLineStart() {
    let e2 = this.charAt(0);
    if (!e2 && !this.atEnd) return this.setNext("line-start");
    if (e2 === "-" || e2 === ".") {
      if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
      let t4 = this.peek(3);
      if (t4 === "---" && E5(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, "doc";
      if (t4 === "..." && E5(this.charAt(3))) return yield* this.pushCount(3), "stream";
    }
    return this.indentValue = yield* this.pushSpaces(false), this.indentNext > this.indentValue && !E5(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
  }
  *parseBlockStart() {
    let [e2, t4] = this.peek(2);
    if (!t4 && !this.atEnd) return this.setNext("block-start");
    if ((e2 === "-" || e2 === "?" || e2 === ":") && E5(t4)) {
      let i6 = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
      return this.indentNext = this.indentValue + 1, this.indentValue += i6, yield* this.parseBlockStart();
    }
    return "doc";
  }
  *parseDocument() {
    yield* this.pushSpaces(true);
    let e2 = this.getLine();
    if (e2 === null) return this.setNext("doc");
    let t4 = yield* this.pushIndicators();
    switch (e2[t4]) {
      case "#":
        yield* this.pushCount(e2.length - t4);
      case void 0:
        return yield* this.pushNewline(), yield* this.parseLineStart();
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = false, this.flowLevel = 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), "doc";
      case "*":
        return yield* this.pushUntil(ot2), "doc";
      case '"':
      case "'":
        return yield* this.parseQuotedScalar();
      case "|":
      case ">":
        return t4 += yield* this.parseBlockScalarHeader(), t4 += yield* this.pushSpaces(true), yield* this.pushCount(e2.length - t4), yield* this.pushNewline(), yield* this.parseBlockScalar();
      default:
        return yield* this.parsePlainScalar();
    }
  }
  *parseFlowCollection() {
    let e2, t4, i6 = -1;
    do
      e2 = yield* this.pushNewline(), e2 > 0 ? (t4 = yield* this.pushSpaces(false), this.indentValue = i6 = t4) : t4 = 0, t4 += yield* this.pushSpaces(true);
    while (e2 + t4 > 0);
    let n2 = this.getLine();
    if (n2 === null) return this.setNext("flow");
    if ((i6 !== -1 && i6 < this.indentNext && n2[0] !== "#" || i6 === 0 && (n2.startsWith("---") || n2.startsWith("...")) && E5(n2[3])) && !(i6 === this.indentNext - 1 && this.flowLevel === 1 && (n2[0] === "]" || n2[0] === "}"))) return this.flowLevel = 0, yield ue2, yield* this.parseLineStart();
    let r4 = 0;
    for (; n2[r4] === ","; ) r4 += yield* this.pushCount(1), r4 += yield* this.pushSpaces(true), this.flowKey = false;
    switch (r4 += yield* this.pushIndicators(), n2[r4]) {
      case void 0:
        return "flow";
      case "#":
        return yield* this.pushCount(n2.length - r4), "flow";
      case "{":
      case "[":
        return yield* this.pushCount(1), this.flowKey = false, this.flowLevel += 1, "flow";
      case "}":
      case "]":
        return yield* this.pushCount(1), this.flowKey = true, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
      case "*":
        return yield* this.pushUntil(ot2), "flow";
      case '"':
      case "'":
        return this.flowKey = true, yield* this.parseQuotedScalar();
      case ":": {
        let o2 = this.charAt(1);
        if (this.flowKey || E5(o2) || o2 === ",") return this.flowKey = false, yield* this.pushCount(1), yield* this.pushSpaces(true), "flow";
      }
      default:
        return this.flowKey = false, yield* this.parsePlainScalar();
    }
  }
  *parseQuotedScalar() {
    let e2 = this.charAt(0), t4 = this.buffer.indexOf(e2, this.pos + 1);
    if (e2 === "'") for (; t4 !== -1 && this.buffer[t4 + 1] === "'"; ) t4 = this.buffer.indexOf("'", t4 + 2);
    else for (; t4 !== -1; ) {
      let r4 = 0;
      for (; this.buffer[t4 - 1 - r4] === "\\"; ) r4 += 1;
      if (r4 % 2 === 0) break;
      t4 = this.buffer.indexOf('"', t4 + 1);
    }
    let i6 = this.buffer.substring(0, t4), n2 = i6.indexOf(`
`, this.pos);
    if (n2 !== -1) {
      for (; n2 !== -1; ) {
        let r4 = this.continueScalar(n2 + 1);
        if (r4 === -1) break;
        n2 = i6.indexOf(`
`, r4);
      }
      n2 !== -1 && (t4 = n2 - (i6[n2 - 1] === "\r" ? 2 : 1));
    }
    if (t4 === -1) {
      if (!this.atEnd) return this.setNext("quoted-scalar");
      t4 = this.buffer.length;
    }
    return yield* this.pushToIndex(t4 + 1, false), this.flowLevel ? "flow" : "doc";
  }
  *parseBlockScalarHeader() {
    this.blockScalarIndent = -1, this.blockScalarKeep = false;
    let e2 = this.pos;
    for (; ; ) {
      let t4 = this.buffer[++e2];
      if (t4 === "+") this.blockScalarKeep = true;
      else if (t4 > "0" && t4 <= "9") this.blockScalarIndent = Number(t4) - 1;
      else if (t4 !== "-") break;
    }
    return yield* this.pushUntil((t4) => E5(t4) || t4 === "#");
  }
  *parseBlockScalar() {
    let e2 = this.pos - 1, t4 = 0, i6;
    e: for (let n2 = this.pos; i6 = this.buffer[n2]; ++n2) switch (i6) {
      case " ":
        t4 += 1;
        break;
      case `
`:
        e2 = n2, t4 = 0;
        break;
      case "\r": {
        let r4 = this.buffer[n2 + 1];
        if (!r4 && !this.atEnd) return this.setNext("block-scalar");
        if (r4 === `
`) break;
      }
      default:
        break e;
    }
    if (!i6 && !this.atEnd) return this.setNext("block-scalar");
    if (t4 >= this.indentNext) {
      this.blockScalarIndent === -1 ? this.indentNext = t4 : this.indentNext += this.blockScalarIndent;
      do {
        let n2 = this.continueScalar(e2 + 1);
        if (n2 === -1) break;
        e2 = this.buffer.indexOf(`
`, n2);
      } while (e2 !== -1);
      if (e2 === -1) {
        if (!this.atEnd) return this.setNext("block-scalar");
        e2 = this.buffer.length;
      }
    }
    if (!this.blockScalarKeep) do {
      let n2 = e2 - 1, r4 = this.buffer[n2];
      r4 === "\r" && (r4 = this.buffer[--n2]);
      let o2 = n2;
      for (; r4 === " " || r4 === "	"; ) r4 = this.buffer[--n2];
      if (r4 === `
` && n2 >= this.pos && n2 + 1 + t4 > o2) e2 = n2;
      else break;
    } while (true);
    return yield H3, yield* this.pushToIndex(e2 + 1, true), yield* this.parseLineStart();
  }
  *parsePlainScalar() {
    let e2 = this.flowLevel > 0, t4 = this.pos - 1, i6 = this.pos - 1, n2;
    for (; n2 = this.buffer[++i6]; ) if (n2 === ":") {
      let r4 = this.buffer[i6 + 1];
      if (E5(r4) || e2 && r4 === ",") break;
      t4 = i6;
    } else if (E5(n2)) {
      let r4 = this.buffer[i6 + 1];
      if (n2 === "\r" && (r4 === `
` ? (i6 += 1, n2 = `
`, r4 = this.buffer[i6 + 1]) : t4 = i6), r4 === "#" || e2 && rt2.includes(r4)) break;
      if (n2 === `
`) {
        let o2 = this.continueScalar(i6 + 1);
        if (o2 === -1) break;
        i6 = Math.max(i6, o2 - 2);
      }
    } else {
      if (e2 && rt2.includes(n2)) break;
      t4 = i6;
    }
    return !n2 && !this.atEnd ? this.setNext("plain-scalar") : (yield H3, yield* this.pushToIndex(t4 + 1, true), e2 ? "flow" : "doc");
  }
  *pushCount(e2) {
    return e2 > 0 ? (yield this.buffer.substr(this.pos, e2), this.pos += e2, e2) : 0;
  }
  *pushToIndex(e2, t4) {
    let i6 = this.buffer.slice(this.pos, e2);
    return i6 ? (yield i6, this.pos += i6.length, i6.length) : (t4 && (yield ""), 0);
  }
  *pushIndicators() {
    switch (this.charAt(0)) {
      case "!":
        return (yield* this.pushTag()) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      case "&":
        return (yield* this.pushUntil(ot2)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      case "-":
      case "?":
      case ":": {
        let e2 = this.flowLevel > 0, t4 = this.charAt(1);
        if (E5(t4) || e2 && rt2.includes(t4)) return e2 ? this.flowKey && (this.flowKey = false) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
      }
    }
    return 0;
  }
  *pushTag() {
    if (this.charAt(1) === "<") {
      let e2 = this.pos + 2, t4 = this.buffer[e2];
      for (; !E5(t4) && t4 !== ">"; ) t4 = this.buffer[++e2];
      return yield* this.pushToIndex(t4 === ">" ? e2 + 1 : e2, false);
    } else {
      let e2 = this.pos + 1, t4 = this.buffer[e2];
      for (; t4; ) if (Vi.includes(t4)) t4 = this.buffer[++e2];
      else if (t4 === "%" && ls2.includes(this.buffer[e2 + 1]) && ls2.includes(this.buffer[e2 + 2])) t4 = this.buffer[e2 += 3];
      else break;
      return yield* this.pushToIndex(e2, false);
    }
  }
  *pushNewline() {
    let e2 = this.buffer[this.pos];
    return e2 === `
` ? yield* this.pushCount(1) : e2 === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
  }
  *pushSpaces(e2) {
    let t4 = this.pos - 1, i6;
    do
      i6 = this.buffer[++t4];
    while (i6 === " " || e2 && i6 === "	");
    let n2 = t4 - this.pos;
    return n2 > 0 && (yield this.buffer.substr(this.pos, n2), this.pos = t4), n2;
  }
  *pushUntil(e2) {
    let t4 = this.pos, i6 = this.buffer[t4];
    for (; !e2(i6); ) i6 = this.buffer[++t4];
    return yield* this.pushToIndex(t4, false);
  }
};
var J3 = class {
  constructor() {
    this.lineStarts = [], this.addNewLine = (e2) => this.lineStarts.push(e2), this.linePos = (e2) => {
      let t4 = 0, i6 = this.lineStarts.length;
      for (; t4 < i6; ) {
        let r4 = t4 + i6 >> 1;
        this.lineStarts[r4] < e2 ? t4 = r4 + 1 : i6 = r4;
      }
      if (this.lineStarts[t4] === e2) return { line: t4 + 1, col: 1 };
      if (t4 === 0) return { line: 0, col: e2 };
      let n2 = this.lineStarts[t4 - 1];
      return { line: t4, col: e2 - n2 + 1 };
    };
  }
};
function x4(s14, e2) {
  for (let t4 = 0; t4 < s14.length; ++t4) if (s14[t4].type === e2) return true;
  return false;
}
function cs2(s14) {
  for (let e2 = 0; e2 < s14.length; ++e2) switch (s14[e2].type) {
    case "space":
    case "comment":
    case "newline":
      break;
    default:
      return e2;
  }
  return -1;
}
function us2(s14) {
  switch (s14?.type) {
    case "alias":
    case "scalar":
    case "single-quoted-scalar":
    case "double-quoted-scalar":
    case "flow-collection":
      return true;
    default:
      return false;
  }
}
function _e2(s14) {
  switch (s14.type) {
    case "document":
      return s14.start;
    case "block-map": {
      let e2 = s14.items[s14.items.length - 1];
      return e2.sep ?? e2.start;
    }
    case "block-seq":
      return s14.items[s14.items.length - 1].start;
    default:
      return [];
  }
}
function X3(s14) {
  if (s14.length === 0) return [];
  let e2 = s14.length;
  e: for (; --e2 >= 0; ) switch (s14[e2].type) {
    case "doc-start":
    case "explicit-key-ind":
    case "map-value-ind":
    case "seq-item-ind":
    case "newline":
      break e;
  }
  for (; s14[++e2]?.type === "space"; ) ;
  return s14.splice(e2, s14.length);
}
function fs(s14) {
  if (s14.start.type === "flow-seq-start") for (let e2 of s14.items) e2.sep && !e2.value && !x4(e2.start, "explicit-key-ind") && !x4(e2.sep, "map-value-ind") && (e2.key && (e2.value = e2.key), delete e2.key, us2(e2.value) ? e2.value.end ? Array.prototype.push.apply(e2.value.end, e2.sep) : e2.value.end = e2.sep : Array.prototype.push.apply(e2.start, e2.sep), delete e2.sep);
}
var q3 = class {
  constructor(e2) {
    this.atNewLine = true, this.atScalar = false, this.indent = 0, this.offset = 0, this.onKeyLine = false, this.stack = [], this.source = "", this.type = "", this.lexer = new W4(), this.onNewLine = e2;
  }
  *parse(e2, t4 = false) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (let i6 of this.lexer.lex(e2, t4)) yield* this.next(i6);
    t4 || (yield* this.end());
  }
  *next(e2) {
    if (this.source = e2, this.atScalar) {
      this.atScalar = false, yield* this.step(), this.offset += e2.length;
      return;
    }
    let t4 = it(e2);
    if (t4) if (t4 === "scalar") this.atNewLine = false, this.atScalar = true, this.type = "scalar";
    else {
      switch (this.type = t4, yield* this.step(), t4) {
        case "newline":
          this.atNewLine = true, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e2.length);
          break;
        case "space":
          this.atNewLine && e2[0] === " " && (this.indent += e2.length);
          break;
        case "explicit-key-ind":
        case "map-value-ind":
        case "seq-item-ind":
          this.atNewLine && (this.indent += e2.length);
          break;
        case "doc-mode":
        case "flow-error-end":
          return;
        default:
          this.atNewLine = false;
      }
      this.offset += e2.length;
    }
    else {
      let i6 = `Not a YAML token: ${e2}`;
      yield* this.pop({ type: "error", offset: this.offset, message: i6, source: e2 }), this.offset += e2.length;
    }
  }
  *end() {
    for (; this.stack.length > 0; ) yield* this.pop();
  }
  get sourceToken() {
    return { type: this.type, offset: this.offset, indent: this.indent, source: this.source };
  }
  *step() {
    let e2 = this.peek(1);
    if (this.type === "doc-end" && (!e2 || e2.type !== "doc-end")) {
      for (; this.stack.length > 0; ) yield* this.pop();
      this.stack.push({ type: "doc-end", offset: this.offset, source: this.source });
      return;
    }
    if (!e2) return yield* this.stream();
    switch (e2.type) {
      case "document":
        return yield* this.document(e2);
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return yield* this.scalar(e2);
      case "block-scalar":
        return yield* this.blockScalar(e2);
      case "block-map":
        return yield* this.blockMap(e2);
      case "block-seq":
        return yield* this.blockSequence(e2);
      case "flow-collection":
        return yield* this.flowCollection(e2);
      case "doc-end":
        return yield* this.documentEnd(e2);
    }
    yield* this.pop();
  }
  peek(e2) {
    return this.stack[this.stack.length - e2];
  }
  *pop(e2) {
    let t4 = e2 ?? this.stack.pop();
    if (!t4) yield { type: "error", offset: this.offset, source: "", message: "Tried to pop an empty stack" };
    else if (this.stack.length === 0) yield t4;
    else {
      let i6 = this.peek(1);
      switch (t4.type === "block-scalar" ? t4.indent = "indent" in i6 ? i6.indent : 0 : t4.type === "flow-collection" && i6.type === "document" && (t4.indent = 0), t4.type === "flow-collection" && fs(t4), i6.type) {
        case "document":
          i6.value = t4;
          break;
        case "block-scalar":
          i6.props.push(t4);
          break;
        case "block-map": {
          let n2 = i6.items[i6.items.length - 1];
          if (n2.value) {
            i6.items.push({ start: [], key: t4, sep: [] }), this.onKeyLine = true;
            return;
          } else if (n2.sep) n2.value = t4;
          else {
            Object.assign(n2, { key: t4, sep: [] }), this.onKeyLine = !x4(n2.start, "explicit-key-ind");
            return;
          }
          break;
        }
        case "block-seq": {
          let n2 = i6.items[i6.items.length - 1];
          n2.value ? i6.items.push({ start: [], value: t4 }) : n2.value = t4;
          break;
        }
        case "flow-collection": {
          let n2 = i6.items[i6.items.length - 1];
          !n2 || n2.value ? i6.items.push({ start: [], key: t4, sep: [] }) : n2.sep ? n2.value = t4 : Object.assign(n2, { key: t4, sep: [] });
          return;
        }
        default:
          yield* this.pop(), yield* this.pop(t4);
      }
      if ((i6.type === "document" || i6.type === "block-map" || i6.type === "block-seq") && (t4.type === "block-map" || t4.type === "block-seq")) {
        let n2 = t4.items[t4.items.length - 1];
        n2 && !n2.sep && !n2.value && n2.start.length > 0 && cs2(n2.start) === -1 && (t4.indent === 0 || n2.start.every((r4) => r4.type !== "comment" || r4.indent < t4.indent)) && (i6.type === "document" ? i6.end = n2.start : i6.items.push({ start: n2.start }), t4.items.splice(-1, 1));
      }
    }
  }
  *stream() {
    switch (this.type) {
      case "directive-line":
        yield { type: "directive", offset: this.offset, source: this.source };
        return;
      case "byte-order-mark":
      case "space":
      case "comment":
      case "newline":
        yield this.sourceToken;
        return;
      case "doc-mode":
      case "doc-start": {
        let e2 = { type: "document", offset: this.offset, start: [] };
        this.type === "doc-start" && e2.start.push(this.sourceToken), this.stack.push(e2);
        return;
      }
    }
    yield { type: "error", offset: this.offset, message: `Unexpected ${this.type} token in YAML stream`, source: this.source };
  }
  *document(e2) {
    if (e2.value) return yield* this.lineEnd(e2);
    switch (this.type) {
      case "doc-start": {
        cs2(e2.start) !== -1 ? (yield* this.pop(), yield* this.step()) : e2.start.push(this.sourceToken);
        return;
      }
      case "anchor":
      case "tag":
      case "space":
      case "comment":
      case "newline":
        e2.start.push(this.sourceToken);
        return;
    }
    let t4 = this.startBlockValue(e2);
    t4 ? this.stack.push(t4) : yield { type: "error", offset: this.offset, message: `Unexpected ${this.type} token in YAML document`, source: this.source };
  }
  *scalar(e2) {
    if (this.type === "map-value-ind") {
      let t4 = _e2(this.peek(2)), i6 = X3(t4), n2;
      e2.end ? (n2 = e2.end, n2.push(this.sourceToken), delete e2.end) : n2 = [this.sourceToken];
      let r4 = { type: "block-map", offset: e2.offset, indent: e2.indent, items: [{ start: i6, key: e2, sep: n2 }] };
      this.onKeyLine = true, this.stack[this.stack.length - 1] = r4;
    } else yield* this.lineEnd(e2);
  }
  *blockScalar(e2) {
    switch (this.type) {
      case "space":
      case "comment":
      case "newline":
        e2.props.push(this.sourceToken);
        return;
      case "scalar":
        if (e2.source = this.source, this.atNewLine = true, this.indent = 0, this.onNewLine) {
          let t4 = this.source.indexOf(`
`) + 1;
          for (; t4 !== 0; ) this.onNewLine(this.offset + t4), t4 = this.source.indexOf(`
`, t4) + 1;
        }
        yield* this.pop();
        break;
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(e2) {
    let t4 = e2.items[e2.items.length - 1];
    switch (this.type) {
      case "newline":
        if (this.onKeyLine = false, t4.value) {
          let i6 = "end" in t4.value ? t4.value.end : void 0;
          (Array.isArray(i6) ? i6[i6.length - 1] : void 0)?.type === "comment" ? i6?.push(this.sourceToken) : e2.items.push({ start: [this.sourceToken] });
        } else t4.sep ? t4.sep.push(this.sourceToken) : t4.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (t4.value) e2.items.push({ start: [this.sourceToken] });
        else if (t4.sep) t4.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(t4.start, e2.indent)) {
            let n2 = e2.items[e2.items.length - 2]?.value?.end;
            if (Array.isArray(n2)) {
              Array.prototype.push.apply(n2, t4.start), n2.push(this.sourceToken), e2.items.pop();
              return;
            }
          }
          t4.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= e2.indent) {
      let i6 = !this.onKeyLine && this.indent === e2.indent && t4.sep && this.type !== "seq-item-ind", n2 = [];
      if (i6 && t4.sep && !t4.value) {
        let r4 = [];
        for (let o2 = 0; o2 < t4.sep.length; ++o2) {
          let a4 = t4.sep[o2];
          switch (a4.type) {
            case "newline":
              r4.push(o2);
              break;
            case "space":
              break;
            case "comment":
              a4.indent > e2.indent && (r4.length = 0);
              break;
            default:
              r4.length = 0;
          }
        }
        r4.length >= 2 && (n2 = t4.sep.splice(r4[1]));
      }
      switch (this.type) {
        case "anchor":
        case "tag":
          i6 || t4.value ? (n2.push(this.sourceToken), e2.items.push({ start: n2 }), this.onKeyLine = true) : t4.sep ? t4.sep.push(this.sourceToken) : t4.start.push(this.sourceToken);
          return;
        case "explicit-key-ind":
          !t4.sep && !x4(t4.start, "explicit-key-ind") ? t4.start.push(this.sourceToken) : i6 || t4.value ? (n2.push(this.sourceToken), e2.items.push({ start: n2 })) : this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: [this.sourceToken] }] }), this.onKeyLine = true;
          return;
        case "map-value-ind":
          if (x4(t4.start, "explicit-key-ind")) if (t4.sep) if (t4.value) e2.items.push({ start: [], key: null, sep: [this.sourceToken] });
          else if (x4(t4.sep, "map-value-ind")) this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: n2, key: null, sep: [this.sourceToken] }] });
          else if (us2(t4.key) && !x4(t4.sep, "newline")) {
            let r4 = X3(t4.start), o2 = t4.key, a4 = t4.sep;
            a4.push(this.sourceToken), delete t4.key, delete t4.sep, this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: r4, key: o2, sep: a4 }] });
          } else n2.length > 0 ? t4.sep = t4.sep.concat(n2, this.sourceToken) : t4.sep.push(this.sourceToken);
          else if (x4(t4.start, "newline")) Object.assign(t4, { key: null, sep: [this.sourceToken] });
          else {
            let r4 = X3(t4.start);
            this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: r4, key: null, sep: [this.sourceToken] }] });
          }
          else t4.sep ? t4.value || i6 ? e2.items.push({ start: n2, key: null, sep: [this.sourceToken] }) : x4(t4.sep, "map-value-ind") ? this.stack.push({ type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: [], key: null, sep: [this.sourceToken] }] }) : t4.sep.push(this.sourceToken) : Object.assign(t4, { key: null, sep: [this.sourceToken] });
          this.onKeyLine = true;
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          let r4 = this.flowScalar(this.type);
          i6 || t4.value ? (e2.items.push({ start: n2, key: r4, sep: [] }), this.onKeyLine = true) : t4.sep ? this.stack.push(r4) : (Object.assign(t4, { key: r4, sep: [] }), this.onKeyLine = true);
          return;
        }
        default: {
          let r4 = this.startBlockValue(e2);
          if (r4) {
            i6 && r4.type !== "block-seq" && x4(t4.start, "explicit-key-ind") && e2.items.push({ start: n2 }), this.stack.push(r4);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(e2) {
    let t4 = e2.items[e2.items.length - 1];
    switch (this.type) {
      case "newline":
        if (t4.value) {
          let i6 = "end" in t4.value ? t4.value.end : void 0;
          (Array.isArray(i6) ? i6[i6.length - 1] : void 0)?.type === "comment" ? i6?.push(this.sourceToken) : e2.items.push({ start: [this.sourceToken] });
        } else t4.start.push(this.sourceToken);
        return;
      case "space":
      case "comment":
        if (t4.value) e2.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(t4.start, e2.indent)) {
            let n2 = e2.items[e2.items.length - 2]?.value?.end;
            if (Array.isArray(n2)) {
              Array.prototype.push.apply(n2, t4.start), n2.push(this.sourceToken), e2.items.pop();
              return;
            }
          }
          t4.start.push(this.sourceToken);
        }
        return;
      case "anchor":
      case "tag":
        if (t4.value || this.indent <= e2.indent) break;
        t4.start.push(this.sourceToken);
        return;
      case "seq-item-ind":
        if (this.indent !== e2.indent) break;
        t4.value || x4(t4.start, "seq-item-ind") ? e2.items.push({ start: [this.sourceToken] }) : t4.start.push(this.sourceToken);
        return;
    }
    if (this.indent > e2.indent) {
      let i6 = this.startBlockValue(e2);
      if (i6) {
        this.stack.push(i6);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(e2) {
    let t4 = e2.items[e2.items.length - 1];
    if (this.type === "flow-error-end") {
      let i6;
      do
        yield* this.pop(), i6 = this.peek(1);
      while (i6 && i6.type === "flow-collection");
    } else if (e2.end.length === 0) {
      switch (this.type) {
        case "comma":
        case "explicit-key-ind":
          !t4 || t4.sep ? e2.items.push({ start: [this.sourceToken] }) : t4.start.push(this.sourceToken);
          return;
        case "map-value-ind":
          !t4 || t4.value ? e2.items.push({ start: [], key: null, sep: [this.sourceToken] }) : t4.sep ? t4.sep.push(this.sourceToken) : Object.assign(t4, { key: null, sep: [this.sourceToken] });
          return;
        case "space":
        case "comment":
        case "newline":
        case "anchor":
        case "tag":
          !t4 || t4.value ? e2.items.push({ start: [this.sourceToken] }) : t4.sep ? t4.sep.push(this.sourceToken) : t4.start.push(this.sourceToken);
          return;
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar": {
          let n2 = this.flowScalar(this.type);
          !t4 || t4.value ? e2.items.push({ start: [], key: n2, sep: [] }) : t4.sep ? this.stack.push(n2) : Object.assign(t4, { key: n2, sep: [] });
          return;
        }
        case "flow-map-end":
        case "flow-seq-end":
          e2.end.push(this.sourceToken);
          return;
      }
      let i6 = this.startBlockValue(e2);
      i6 ? this.stack.push(i6) : (yield* this.pop(), yield* this.step());
    } else {
      let i6 = this.peek(2);
      if (i6.type === "block-map" && (this.type === "map-value-ind" && i6.indent === e2.indent || this.type === "newline" && !i6.items[i6.items.length - 1].sep)) yield* this.pop(), yield* this.step();
      else if (this.type === "map-value-ind" && i6.type !== "flow-collection") {
        let n2 = _e2(i6), r4 = X3(n2);
        fs(e2);
        let o2 = e2.end.splice(1, e2.end.length);
        o2.push(this.sourceToken);
        let a4 = { type: "block-map", offset: e2.offset, indent: e2.indent, items: [{ start: r4, key: e2, sep: o2 }] };
        this.onKeyLine = true, this.stack[this.stack.length - 1] = a4;
      } else yield* this.lineEnd(e2);
    }
  }
  flowScalar(e2) {
    if (this.onNewLine) {
      let t4 = this.source.indexOf(`
`) + 1;
      for (; t4 !== 0; ) this.onNewLine(this.offset + t4), t4 = this.source.indexOf(`
`, t4) + 1;
    }
    return { type: e2, offset: this.offset, indent: this.indent, source: this.source };
  }
  startBlockValue(e2) {
    switch (this.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
        return this.flowScalar(this.type);
      case "block-scalar-header":
        return { type: "block-scalar", offset: this.offset, indent: this.indent, props: [this.sourceToken], source: "" };
      case "flow-map-start":
      case "flow-seq-start":
        return { type: "flow-collection", offset: this.offset, indent: this.indent, start: this.sourceToken, items: [], end: [] };
      case "seq-item-ind":
        return { type: "block-seq", offset: this.offset, indent: this.indent, items: [{ start: [this.sourceToken] }] };
      case "explicit-key-ind": {
        this.onKeyLine = true;
        let t4 = _e2(e2), i6 = X3(t4);
        return i6.push(this.sourceToken), { type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: i6 }] };
      }
      case "map-value-ind": {
        this.onKeyLine = true;
        let t4 = _e2(e2), i6 = X3(t4);
        return { type: "block-map", offset: this.offset, indent: this.indent, items: [{ start: i6, key: null, sep: [this.sourceToken] }] };
      }
    }
    return null;
  }
  atIndentedComment(e2, t4) {
    return this.type !== "comment" || this.indent <= t4 ? false : e2.every((i6) => i6.type === "newline" || i6.type === "space");
  }
  *documentEnd(e2) {
    this.type !== "doc-mode" && (e2.end ? e2.end.push(this.sourceToken) : e2.end = [this.sourceToken], this.type === "newline" && (yield* this.pop()));
  }
  *lineEnd(e2) {
    switch (this.type) {
      case "comma":
      case "doc-start":
      case "doc-end":
      case "flow-seq-end":
      case "flow-map-end":
      case "map-value-ind":
        yield* this.pop(), yield* this.step();
        break;
      case "newline":
        this.onKeyLine = false;
      case "space":
      case "comment":
      default:
        e2.end ? e2.end.push(this.sourceToken) : e2.end = [this.sourceToken], this.type === "newline" && (yield* this.pop());
    }
  }
};
function hs2(s14) {
  let e2 = s14.prettyErrors !== false;
  return { lineCounter: s14.lineCounter || e2 && new J3() || null, prettyErrors: e2 };
}
function ps2(s14, e2 = {}) {
  let { lineCounter: t4, prettyErrors: i6 } = hs2(e2), n2 = new q3(t4?.addNewLine), r4 = new D5(e2), o2 = Array.from(r4.compose(n2.parse(s14)));
  if (i6 && t4) for (let a4 of o2) a4.errors.forEach(re2(s14, t4)), a4.warnings.forEach(re2(s14, t4));
  return o2.length > 0 ? o2 : Object.assign([], { empty: true }, r4.streamInfo());
}
function at2(s14, e2 = {}) {
  let { lineCounter: t4, prettyErrors: i6 } = hs2(e2), n2 = new q3(t4?.addNewLine), r4 = new D5(e2), o2 = null;
  for (let a4 of r4.compose(n2.parse(s14), true, s14.length)) if (!o2) o2 = a4;
  else if (o2.options.logLevel !== "silent") {
    o2.errors.push(new I3(a4.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
    break;
  }
  return i6 && t4 && (o2.errors.forEach(re2(s14, t4)), o2.warnings.forEach(re2(s14, t4))), o2;
}
function ms(s14, e2, t4) {
  let i6;
  typeof e2 == "function" ? i6 = e2 : t4 === void 0 && e2 && typeof e2 == "object" && (t4 = e2);
  let n2 = at2(s14, t4);
  if (!n2) return null;
  if (n2.warnings.forEach((r4) => i4(n2.options.logLevel, r4)), n2.errors.length > 0) {
    if (n2.options.logLevel !== "silent") throw n2.errors[0];
    n2.errors = [];
  }
  return n2.toJS(Object.assign({ reviver: i6 }, t4));
}
function ds2(s14, e2, t4) {
  let i6 = null;
  if (typeof e2 == "function" || Array.isArray(e2) ? i6 = e2 : t4 === void 0 && e2 && (t4 = e2), typeof t4 == "string" && (t4 = t4.length), typeof t4 == "number") {
    let n2 = Math.round(t4);
    t4 = n2 < 1 ? void 0 : n2 > 8 ? { indent: 8 } : { indent: n2 };
  }
  if (s14 === void 0) {
    let { keepUndefined: n2 } = t4 ?? e2 ?? {};
    if (!n2) return;
  }
  return new C4(s14, i6, t4).toString(t4);
}
var tl = lt2;
export {
  l3 as Alias,
  nt2 as CST,
  D5 as Composer,
  C4 as Document,
  W4 as Lexer,
  J3 as LineCounter,
  E4 as Pair,
  q3 as Parser,
  t as Scalar,
  j4 as Schema,
  V3 as YAMLError,
  h3 as YAMLMap,
  I3 as YAMLParseError,
  l7 as YAMLSeq,
  G3 as YAMLWarning,
  tl as default,
  i as isAlias,
  f2 as isCollection,
  m2 as isDocument,
  b2 as isMap,
  n as isNode,
  p as isPair,
  e as isScalar,
  S2 as isSeq,
  ms as parse,
  ps2 as parseAllDocuments,
  at2 as parseDocument,
  ds2 as stringify,
  y3 as visit,
  O2 as visitAsync
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
