/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(function(e, t) {
	'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports.ClassicEditor = t() : e.ClassicEditor = t()
})('undefined' == typeof self ? this : self, function() {
	return function(e) {
		function t(o) {
			if (n[o]) return n[o].exports;
			var i = n[o] = {
				i: o,
				l: !1,
				exports: {}
			};
			return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.d = function(e, n, o) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: o
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ? function() {
				return e['default']
			} : function() {
				return e
			};
			return t.d(n, 'a', n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = '', t(t.s = 4)
	}([function(e) {
		function t(e, t) {
			var o = e[1] || '',
				i = e[3];
			if (!i) return o;
			if (t && 'function' == typeof btoa) {
				var a = n(i),
					r = i.sources.map(function(e) {
						return '/*# sourceURL=' + i.sourceRoot + e + ' */'
					});
				return [o].concat(r).concat([a]).join('\n')
			}
			return [o].join('\n')
		}

		function n(e) {
			var t = btoa(unescape(encodeURIComponent(JSON.stringify(e))));
			return '/*# ' + ('sourceMappingURL=data:application/json;charset=utf-8;base64,' + t) + ' */'
		}
		e.exports = function(e) {
			var n = [];
			return n.toString = function() {
				return this.map(function(n) {
					var o = t(n, e);
					return n[2] ? '@media ' + n[2] + '{' + o + '}' : o
				}).join('')
			}, n.i = function(e, t) {
				'string' == typeof e && (e = [
					[null, e, '']
				]);
				for (var o = {}, a = 0, i; a < this.length; a++) i = this[a][0], 'number' == typeof i && (o[i] = !0);
				for (a = 0; a < e.length; a++) {
					var r = e[a];
					'number' == typeof r[0] && o[r[0]] || (t && !r[2] ? r[2] = t : t && (r[2] = '(' + r[2] + ') and (' + t + ')'), n.push(r))
				}
			}, n
		}
	}, function(e, t, n) {
		function o(e, t) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n],
					i = g[o.id];
				if (i) {
					i.refs++;
					for (var a = 0; a < i.parts.length; a++) i.parts[a](o.parts[a]);
					for (; a < o.parts.length; a++) i.parts.push(c(o.parts[a], t))
				} else {
					for (var r = [], a = 0; a < o.parts.length; a++) r.push(c(o.parts[a], t));
					g[o.id] = {
						id: o.id,
						refs: 1,
						parts: r
					}
				}
			}
		}

		function i(e, t) {
			for (var n = [], o = {}, a = 0; a < e.length; a++) {
				var i = e[a],
					r = t.base ? i[0] + t.base : i[0],
					s = i[1],
					l = i[2],
					d = i[3],
					c = {
						css: s,
						media: l,
						sourceMap: d
					};
				o[r] ? o[r].parts.push(c) : n.push(o[r] = {
					id: r,
					parts: [c]
				})
			}
			return n
		}

		function a(e, t) {
			var n = h(e.insertInto);
			if (!n) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
			var o = k[k.length - 1];
			if ('top' === e.insertAt) o ? o.nextSibling ? n.insertBefore(t, o.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), k.push(t);
			else if ('bottom' === e.insertAt) n.appendChild(t);
			else throw new Error('Invalid value for parameter \'insertAt\'. Must be \'top\' or \'bottom\'.')
		}

		function r(e) {
			if (null === e.parentNode) return !1;
			e.parentNode.removeChild(e);
			var t = k.indexOf(e);
			0 <= t && k.splice(t, 1)
		}

		function s(e) {
			var t = document.createElement('style');
			return e.attrs.type = 'text/css', d(t, e.attrs), a(e, t), t
		}

		function l(e) {
			var t = document.createElement('link');
			return e.attrs.type = 'text/css', e.attrs.rel = 'stylesheet', d(t, e.attrs), a(e, t), t
		}

		function d(e, t) {
			Object.keys(t).forEach(function(n) {
				e.setAttribute(n, t[n])
			})
		}

		function c(e, t) {
			var n, o, i, a;
			if (t.transform && e.css)
				if (a = t.transform(e.css), a) e.css = a;
				else return function() {};
			if (t.singleton) {
				var d = _++;
				n = b || (b = s(t)), o = m.bind(null, n, d, !1), i = m.bind(null, n, d, !0)
			} else e.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa ? (n = l(t), o = p.bind(null, n, t), i = function() {
				r(n), n.href && URL.revokeObjectURL(n.href)
			}) : (n = s(t), o = u.bind(null, n), i = function() {
				r(n)
			});
			return o(e),
				function(t) {
					if (t) {
						if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						o(e = t)
					} else i()
				}
		}

		function m(e, t, n, o) {
			var i = n ? '' : o.css;
			if (e.styleSheet) e.styleSheet.cssText = y(t, i);
			else {
				var a = document.createTextNode(i),
					r = e.childNodes;
				r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
			}
		}

		function u(e, t) {
			var n = t.css,
				o = t.media;
			if (o && e.setAttribute('media', o), e.styleSheet) e.styleSheet.cssText = n;
			else {
				for (; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(n))
			}
		}

		function p(e, t, n) {
			var o = n.css,
				i = n.sourceMap,
				a = t.convertToAbsoluteUrls === void 0 && i;
			(t.convertToAbsoluteUrls || a) && (o = w(o)), i && (o += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + ' */');
			var r = new Blob([o], {
					type: 'text/css'
				}),
				s = e.href;
			e.href = URL.createObjectURL(r), s && URL.revokeObjectURL(s)
		}
		var g = {},
			f = function(e) {
				var t;
				return function() {
					return 'undefined' == typeof t && (t = e.apply(this, arguments)), t
				}
			}(function() {
				return window && document && document.all && !window.atob
			}),
			h = function(e) {
				var t = {};
				return function(n) {
					return 'undefined' == typeof t[n] && (t[n] = e.call(this, n)), t[n]
				}
			}(function(e) {
				return document.querySelector(e)
			}),
			b = null,
			_ = 0,
			k = [],
			w = n(11);
		e.exports = function(e, t) {
			if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) throw new Error('The style-loader cannot be used in a non-browser environment');
			t = t || {}, t.attrs = 'object' == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = f()), t.insertInto || (t.insertInto = 'head'), t.insertAt || (t.insertAt = 'bottom');
			var n = i(e, t);
			return o(n, t),
				function(e) {
					for (var a = [], r = 0; r < n.length; r++) {
						var s = n[r],
							l = g[s.id];
						l.refs--, a.push(l)
					}
					if (e) {
						var d = i(e, t);
						o(d, t)
					}
					for (var r = 0, l; r < a.length; r++)
						if (l = a[r], 0 === l.refs) {
							for (var c = 0; c < l.parts.length; c++) l.parts[c]();
							delete g[l.id]
						}
				}
		};
		var y = function() {
			var e = [];
			return function(t, n) {
				return e[t] = n, e.filter(Boolean).join('\n')
			}
		}()
	}, function(e, t, n) {
		'use strict';
		(function(e, o) {
			var i = n(6),
				a = {
					function: !0,
					object: !0
				},
				r = a[typeof exports] && exports && !exports.nodeType ? exports : void 0,
				s = a[typeof e] && e && !e.nodeType ? e : void 0,
				l = Object(i.a)(r && s && 'object' == typeof o && o),
				d = Object(i.a)(a[typeof self] && self),
				c = Object(i.a)(a[typeof window] && window),
				m = Object(i.a)(a[typeof this] && this),
				u = l || c !== (m && m.window) && c || d || m || Function('return this')();
			t.a = u
		}).call(t, n(3)(e), n(5))
	}, function(e) {
		e.exports = function(e) {
			if (!e.webpackPolyfill) {
				var t = Object.create(e);
				t.children || (t.children = []), Object.defineProperty(t, 'loaded', {
					enumerable: !0,
					get: function() {
						return t.l
					}
				}), Object.defineProperty(t, 'id', {
					enumerable: !0,
					get: function() {
						return t.i
					}
				}), Object.defineProperty(t, 'exports', {
					enumerable: !0
				}), t.webpackPolyfill = 1
			}
			return t
		}
	}, function(e, t, n) {
		'use strict';

		function o(e) {
			const t = e.match(/^([^:]+):/);
			return t ? e + ` Read more: ${br}#${t[1]}\n` : e
		}

		function i(e, t) {
			return a(e, t) ? xr[e][t] : t.replace(/ \[context: [^\]]+\]$/, '')
		}

		function a(e, t) {
			return e in xr && t in xr[e]
		}

		function r(e, ...t) {
			t.forEach((t) => {
				Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach((n) => {
					if (!(n in e.prototype)) {
						const o = Object.getOwnPropertyDescriptor(t, n);
						o.enumerable = !1, Object.defineProperty(e.prototype, n, o)
					}
				})
			})
		}

		function s() {
			let e = 'e';
			for (let t = 0; 8 > t; t++) e += ar(65536 * (1 + Math.random())).toString(16).substring(1);
			return e
		}

		function l(e, t) {
			return e[Sr] && e[Sr][t] ? e[Sr][t].emitter : null
		}

		function d(e, t) {
			e[Er] || (e[Er] = t || s())
		}

		function c(e) {
			return e[Er]
		}

		function m(e) {
			return e._events || Object.defineProperty(e, '_events', {
				value: {}
			}), e._events
		}

		function u() {
			return {
				callbacks: [],
				childEvents: []
			}
		}

		function p(e, t) {
			const n = m(e);
			if (n[t]) return;
			let o = t,
				i = null;
			const a = [];
			for (;
				'' !== o && !n[o];) n[o] = u(), a.push(n[o]), i && n[o].childEvents.push(i), i = o, o = o.substr(0, o.lastIndexOf(':'));
			if ('' !== o) {
				for (const e of a) e.callbacks = n[o].callbacks.slice();
				n[o].childEvents.push(i)
			}
		}

		function g(e, t) {
			const n = m(e)[t];
			if (!n) return [];
			let o = [n.callbacks];
			for (let a = 0; a < n.childEvents.length; a++) {
				const t = g(e, n.childEvents[a]);
				o = o.concat(t)
			}
			return o
		}

		function f(e, t) {
			let n;
			return e._events && (n = e._events[t]) && n.callbacks.length ? n.callbacks : -1 < t.indexOf(':') ? f(e, t.substr(0, t.lastIndexOf(':'))) : null
		}

		function h(e, t, n) {
			for (let [o, i] of e) {
				i ? 'function' == typeof i && (i = i(t.name)) : i = t.name;
				const e = new Tr(t.source, i);
				e.path = [...t.path], o.fire(e, ...n)
			}
		}

		function b(e) {
			e = null == e ? e : Object(e);
			var t = [];
			for (var n in e) t.push(n);
			return t
		}

		function _(e) {
			js in e || (Object.defineProperty(e, js, {
				value: new Map
			}), Object.defineProperty(e, $s, {
				value: new Map
			}), Object.defineProperty(e, qs, {
				value: new Map
			}))
		}

		function k(...e) {
			const t = y(...e),
				n = Array.from(this._bindings.keys()),
				o = n.length;
			if (!t.callback && 1 < t.to.length) throw new _r('observable-bind-to-no-callback: Binding multiple observables only possible with callback.');
			if (1 < o && t.callback) throw new _r('observable-bind-to-extra-callback: Cannot bind multiple attributes and use a callback in one binding.');
			t.to.forEach((e) => {
				if (e.attrs.length && e.attrs.length !== o) throw new _r('observable-bind-to-attrs-length: The number of attributes must match.');
				e.attrs.length || (e.attrs = this._bindAttrs)
			}), this._to = t.to, t.callback && (this._bindings.get(n[0]).callback = t.callback), C(this._observable, this._to), x(this), this._bindAttrs.forEach((e) => {
				A(this._observable, e)
			})
		}

		function w(e) {
			return e.every((e) => 'string' == typeof e)
		}

		function y(...e) {
			if (!e.length) throw new _r('observable-bind-to-parse-error: Invalid argument syntax in `to()`.');
			const t = {
				to: []
			};
			let n;
			return 'function' == typeof e[e.length - 1] && (t.callback = e.pop()), e.forEach((e) => {
				if ('string' == typeof e) n.attrs.push(e);
				else if ('object' == typeof e) n = {
					observable: e,
					attrs: []
				}, t.to.push(n);
				else throw new _r('observable-bind-to-parse-error: Invalid argument syntax in `to()`.')
			}), t
		}

		function v(e, t, n, o) {
			const i = e[$s],
				a = i.get(n),
				r = a || {};
			r[o] || (r[o] = new Set), r[o].add(t), a || i.set(n, r)
		}

		function x(e) {
			let t;
			e._bindings.forEach((n, o) => {
				e._to.forEach((i) => {
					t = i.attrs[n.callback ? 0 : e._bindAttrs.indexOf(o)], n.to.push([i.observable, t]), v(e._observable, n, i.observable, t)
				})
			})
		}

		function A(e, t) {
			const n = e[qs],
				o = n.get(t);
			let i;
			o.callback ? i = o.callback.apply(e, o.to.map((e) => e[0][e[1]])) : (i = o.to[0], i = i[0][i[1]]), e.hasOwnProperty(t) ? e[t] = i : e.set(t, i)
		}

		function C(e, t) {
			t.forEach((t) => {
				const n = e[$s];
				let o;
				n.get(t.observable) || e.listenTo(t.observable, 'change', (i, a) => {
					o = n.get(t.observable)[a], o && o.forEach((t) => {
						A(e, t.attr)
					})
				})
			})
		}

		function T(e) {
			const t = new Map;
			for (const n in e) t.set(n, e[n]);
			return t
		}

		function P(e) {
			return fr(e) ? T(e) : new Map(e)
		}

		function S(e) {
			return !!(e && e[Symbol.iterator])
		}

		function E(e) {
			return 'string' == typeof e ? [new Ks(e)] : (S(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Ks(e) : e))
		}

		function V(e, t, n, o, i) {
			return {
				done: !1,
				value: {
					type: e,
					item: t,
					previousPosition: n,
					nextPosition: o,
					length: i
				}
			}
		}

		function O(e, t) {
			const n = or(e.length, t.length);
			for (let o = 0; o < n; o++)
				if (e[o] != t[o]) return o;
			return e.length == t.length ? 'same' : e.length < t.length ? 'prefix' : 'extension'
		}

		function R(e) {
			var t = -1,
				n = e ? e.length : 0;
			for (this.clear(); ++t < n;) {
				var o = e[t];
				this.set(o[0], o[1])
			}
		}

		function F(e) {
			var t = -1,
				n = e ? e.length : 0;
			for (this.clear(); ++t < n;) {
				var o = e[t];
				this.set(o[0], o[1])
			}
		}

		function I(e) {
			var t = -1,
				n = e ? e.length : 0;
			for (this.clear(); ++t < n;) {
				var o = e[t];
				this.set(o[0], o[1])
			}
		}

		function N(e) {
			this.__data__ = new il(e)
		}

		function B(e) {
			return Dl(Object(e))
		}

		function M(e) {
			return id.call(e)
		}

		function D(e, t, n, o, i, a, r) {
			var s;
			if (o && (s = a ? o(e, i, a, r) : o(e)), void 0 !== s) return s;
			if (!Lr(e)) return e;
			var l = Ss(e);
			if (!l) {
				var d = cd(e),
					c = d == Ld || d == zd;
				if (Object(Md.a)(e)) return Bl(e, t);
				if (d == jd || d == Dd || c && !a) {
					if (lr(e)) return a ? e : {};
					if (s = Bd(c ? {} : e), !t) return zl(e, Nl(s, e))
				} else {
					if (!$d[d]) return a ? e : {};
					s = Fd(e, d, D, t)
				}
			} else if (s = pd(e), !t) return Ml(e, s);
			r || (r = new Pl);
			var m = r.get(e);
			if (m) return m;
			if (r.set(e, s), !l) var u = n ? ql(e) : Il(e);
			return Sl(u || e, function(i, a) {
				u && (a = i, i = e[a]), Nr(s, a, D(i, t, n, o, a, e, r))
			}), s
		}

		function L(e, t) {
			if ('function' == typeof t) return t(e);
			const n = {};
			return t.name && (n.name = z(t.name, e.name), !n.name) ? null : t.attribute && (n.attribute = j(t.attribute, e), !n.attribute) ? null : t.class && (n.class = $(t.class, e), !n.class) ? !1 : t.style && (n.style = q(t.style, e), !n.style) ? !1 : n
		}

		function z(e, t) {
			return e instanceof RegExp ? e.test(t) : e === t
		}

		function j(e, t) {
			const n = [];
			for (const o in e) {
				const i = e[o];
				if (t.hasAttribute(o)) {
					const e = t.getAttribute(o);
					if (i instanceof RegExp) {
						if (i.test(e)) n.push(o);
						else return null;
					} else if (e === i) n.push(o);
					else return null
				} else return null
			}
			return n
		}

		function $(e, t) {
			const n = [];
			for (const o of e)
				if (o instanceof RegExp) {
					const e = t.getClassNames();
					for (const t of e) o.test(t) && n.push(t);
					if (0 === n.length) return null
				} else if (t.hasClass(o)) n.push(o);
			else return null;
			return n
		}

		function q(e, t) {
			const n = [];
			for (const o in e) {
				const i = e[o];
				if (t.hasStyle(o)) {
					const e = t.getStyle(o);
					if (i instanceof RegExp) {
						if (i.test(e)) n.push(o);
						else return null;
					} else if (e === i) n.push(o);
					else return null
				} else return null
			}
			return n
		}

		function H(e, t) {
			let n = null,
				o = 0,
				a = 0,
				r = null;
			if (e.clear(), '' !== t) {
				';' != t.charAt(t.length - 1) && (t += ';');
				for (let s = 0; s < t.length; s++) {
					const i = t.charAt(s);
					if (null == n) switch (i) {
						case ':':
							r || (r = t.substr(o, s - o), a = s + 1);
							break;
						case '"':
						case '\'':
							n = i;
							break;
						case ';':
							const l = t.substr(a, s - a);
							r && e.set(r.trim(), l.trim()), r = null, o = s + 1;
					} else i === n && (n = null)
				}
			}
		}

		function W(e, t) {
			const n = t.split(/\s+/);
			e.clear(), n.forEach((t) => e.add(t))
		}

		function U(e) {
			return 'string' == typeof e ? [new Ud(e)] : (S(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Ud(e) : e))
		}

		function K() {
			for (const e of this.getChildren())
				if (!e.is('uiElement')) return null;
			return this.childCount
		}

		function Q(e) {
			return e.item.is('attributeElement') || e.item.is('uiElement')
		}

		function J(e) {
			return 'string' == typeof e ? [new Ks(e)] : (S(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Ks(e) : e))
		}

		function G(e, t, n) {
			const o = t.getRange(),
				i = Array.from(e.getAncestors());
			i.shift(), i.reverse();
			const a = i.some((e) => {
				if (o.containsItem(e)) {
					const t = n.toViewElement(e);
					return !!t.getCustomProperty('addHighlight')
				}
			});
			return !a
		}

		function Y() {
			if (X(this)) return null;
			let e = this.parent;
			for (; e && e.is('attributeElement');) {
				if (1 < X(e)) return null;
				e = e.parent
			}
			return !e || 1 < X(e) ? null : this.childCount
		}

		function X(e) {
			return Array.from(e.getChildren()).filter((e) => !e.is('uiElement')).length
		}

		function Z() {
			return null
		}

		function ee(e) {
			let t;
			if ('string' != typeof e) t = e.keyCode + (e.altKey ? uc.alt : 0) + (e.ctrlKey ? uc.ctrl : 0) + (e.shiftKey ? uc.shift : 0);
			else if (t = uc[e.toLowerCase()], !t) throw new _r('keyboard-unknown-key: Unknown key name.', {
				key: e
			});
			return t
		}

		function te(e) {
			return 'string' == typeof e && (e = oe(e)), e.map((e) => 'string' == typeof e ? ee(e) : e).reduce((e, t) => t + e, 0)
		}

		function ne(e) {
			const t = oe(e);
			return mc.mac && 'ctrl' == t[0].toLowerCase() ? '\u2318' + (t[1] || '') : e
		}

		function oe(e) {
			return e.split(/\s*\+\s*/)
		}

		function ie(e) {
			e.on('keydown', (t, n) => re(t, n, e.domConverter))
		}

		function ae() {
			return null
		}

		function re(e, t, n) {
			if (t.keyCode == uc.arrowright) {
				const e = t.domTarget.ownerDocument.defaultView.getSelection(),
					o = 1 == e.rangeCount && e.getRangeAt(0).collapsed;
				if (o || t.shiftKey) {
					const t = e.focusNode,
						i = e.focusOffset,
						a = n.domPositionToView(t, i);
					if (null === a) return;
					let r = !1;
					const s = a.getLastMatchingPosition((e) => (e.item.is('uiElement') && (r = !0), e.item.is('uiElement') || e.item.is('attributeElement')));
					if (r) {
						const t = n.viewPositionToDom(s);
						o ? e.collapse(t.parent, t.offset) : e.extend(t.parent, t.offset)
					}
				}
			}
		}

		function se(e) {
			return 'string' == typeof e ? [new Ud(e)] : (S(e) || (e = [e]), Array.from(e).map((e) => 'string' == typeof e ? new Ud(e) : e))
		}

		function le(e) {
			const t = e.offset,
				n = e.parent;
			if (n.is('text')) return e;
			if (n.is('attributeElement') && 0 === n.childCount) {
				const e = n.parent,
					t = n.index;
				return n.remove(), le(new ec(e, t))
			}
			const o = n.getChild(t - 1),
				i = n.getChild(t);
			if (!o || !i) return e;
			if (o.is('text') && i.is('text')) return ye(o, i);
			if (o.is('attributeElement') && i.is('attributeElement') && o.isSimilar(i)) {
				const e = o.childCount;
				return o.appendChildren(i.getChildren()), i.remove(), le(new ec(o, e))
			}
			return e
		}

		function de(e, t) {
			t = S(t) ? [...t] : [t], Ce(t);
			const n = pe(e);
			if (!n) throw new _r('view-writer-invalid-position-container');
			const o = fe(e, !0),
				i = n.insertChildren(o.offset, t),
				a = o.getShiftedBy(i),
				r = le(o);
			if (0 === i) return new tc(r, r);
			else {
				r.isEqual(o) || a.offset--;
				const e = le(a);
				return new tc(r, e)
			}
		}

		function ce(e) {
			if (Pe(e), e.isCollapsed) return new gc;
			const {
				start: t,
				end: n
			} = ge(e, !0), o = t.parent, i = n.offset - t.offset, a = o.removeChildren(t.offset, i), r = le(t);
			return e.start = r, e.end = ec.createFromPosition(r), new gc(a)
		}

		function me(e, t) {
			let n;
			if (t.isAfter(e.end)) {
				t = fe(t, !0);
				const o = t.parent,
					i = o.childCount;
				e = ge(e, !0), n = ce(e), t.offset += o.childCount - i
			} else n = ce(e);
			return de(t, n)
		}

		function ue(e, t) {
			if (!(t instanceof sc)) throw new _r('view-writer-wrap-invalid-attribute');
			if (Pe(e), e.isCollapsed) return e;
			if (e.end.isEqual(e.start.getShiftedBy(1))) {
				const n = e.start.nodeAfter;
				if (n instanceof sc && ve(t, n)) return e
			}
			if (Ae(e) && ve(t, e.start.parent)) {
				const t = e.start.parent.parent,
					n = e.start.parent.index;
				return tc.createFromParentsAndOffsets(t, n, t, n + 1)
			}
			const {
				start: n,
				end: o
			} = ge(e, !0), i = n.parent, a = he(i, n.offset, o.offset, t), r = be(i, a.start.offset, a.end.offset, t), s = le(r.start);
			s.isEqual(r.start) || r.end.offset--;
			const l = le(r.end);
			return new tc(s, l)
		}

		function pe(e) {
			let t = e.parent;
			for (; !Te(t);) {
				if (!t) return;
				t = t.parent
			}
			return t
		}

		function ge(e, t = !1) {
			const n = e.start,
				o = e.end;
			if (Pe(e), e.isCollapsed) {
				const n = fe(e.start, t);
				return new tc(n, n)
			}
			const i = fe(o, t),
				a = i.parent.childCount,
				r = fe(n, t);
			return i.offset += i.parent.childCount - a, new tc(r, i)
		}

		function fe(e, t = !1) {
			const n = e.offset,
				o = e.parent;
			if (e.parent.is('emptyElement')) throw new _r('view-writer-cannot-break-empty-element');
			if (e.parent.is('uiElement')) throw new _r('view-writer-cannot-break-ui-element');
			if (!t && o.is('text') && Te(o.parent)) return ec.createFromPosition(e);
			if (Te(o)) return ec.createFromPosition(e);
			if (o.is('text')) return fe(we(e), t);
			const i = o.childCount;
			if (n == i) {
				const e = new ec(o.parent, o.index + 1);
				return fe(e, t)
			}
			if (0 === n) {
				const e = new ec(o.parent, o.index);
				return fe(e, t)
			} else {
				const e = o.index + 1,
					i = o.clone();
				o.parent.insertChildren(e, i);
				const a = o.childCount - n,
					r = o.removeChildren(n, a);
				i.appendChildren(r);
				const s = new ec(o.parent, e);
				return fe(s, t)
			}
		}

		function he(e, t, n, o) {
			let a = t;
			const i = [];
			for (; a < n;) {
				const t = e.getChild(a);
				if (t.isSimilar(o)) {
					const o = t.getChildren(),
						r = t.childCount;
					t.remove(), e.insertChildren(a, o), i.push(new ec(e, a), new ec(e, a + r)), a += r, n += r - 1
				} else t.is('attributeElement') && he(t, 0, t.childCount, o), a++
			}
			let r = 0;
			for (const a of i) {
				if (a.offset -= r, a.offset == t || a.offset == n) continue;
				const e = le(a);
				e.isEqual(a) || (r++, n--)
			}
			return tc.createFromParentsAndOffsets(e, t, e, n)
		}

		function be(e, t, n, o) {
			let a = t;
			const i = [];
			for (; a < n;) {
				const t = e.getChild(a),
					n = t.is('text'),
					r = t.is('attributeElement'),
					s = t.is('emptyElement'),
					l = t.is('uiElement');
				if (n || s || l || r && _e(o, t)) {
					const n = o.clone();
					t.remove(), n.appendChildren(t), e.insertChildren(a, n), i.push(new ec(e, a))
				} else r && be(t, 0, t.childCount, o);
				a++
			}
			let r = 0;
			for (const a of i) {
				if (a.offset -= r, a.offset == t) continue;
				const e = le(a);
				e.isEqual(a) || (r++, n--)
			}
			return tc.createFromParentsAndOffsets(e, t, e, n)
		}

		function _e(e, t) {
			if (e.priority < t.priority) return !0;
			return !(e.priority > t.priority) && e.getIdentity() < t.getIdentity()
		}

		function ke(e) {
			const t = e.nodeBefore;
			if (t && t.is('text')) return new ec(t, t.data.length);
			const n = e.nodeAfter;
			return n && n.is('text') ? new ec(n, 0) : e
		}

		function we(e) {
			if (e.offset == e.parent.data.length) return new ec(e.parent.parent, e.parent.index + 1);
			if (0 === e.offset) return new ec(e.parent.parent, e.parent.index);
			const t = e.parent.data.slice(e.offset);
			return e.parent.data = e.parent.data.slice(0, e.offset), e.parent.parent.insertChildren(e.parent.index + 1, new Ud(t)), new ec(e.parent.parent, e.parent.index + 1)
		}

		function ye(e, t) {
			const n = e.data.length;
			return e.data += t.data, t.remove(), new ec(e, n)
		}

		function ve(e, t) {
			if (e.name !== t.name || e.priority !== t.priority) return !1;
			for (const n of e.getAttributeKeys())
				if ('class' !== n && 'style' !== n && t.hasAttribute(n) && t.getAttribute(n) !== e.getAttribute(n)) return !1;
			for (const n of e.getStyleNames())
				if (t.hasStyle(n) && t.getStyle(n) !== e.getStyle(n)) return !1;
			for (const n of e.getAttributeKeys()) 'class' !== n && 'style' !== n && (t.hasAttribute(n) || t.setAttribute(n, e.getAttribute(n)));
			for (const n of e.getStyleNames()) t.hasStyle(n) || t.setStyle(n, e.getStyle(n));
			for (const n of e.getClassNames()) t.hasClass(n) || t.addClass(n);
			return !0
		}

		function xe(e, t) {
			if (e.name !== t.name || e.priority !== t.priority) return !1;
			for (const n of e.getAttributeKeys())
				if ('class' !== n && 'style' !== n && (!t.hasAttribute(n) || t.getAttribute(n) !== e.getAttribute(n))) return !1;
			if (!t.hasClass(...e.getClassNames())) return !1;
			for (const n of e.getStyleNames())
				if (!t.hasStyle(n) || t.getStyle(n) !== e.getStyle(n)) return !1;
			for (const n of e.getAttributeKeys()) 'class' !== n && 'style' !== n && t.removeAttribute(n);
			return t.removeClass(...e.getClassNames()), t.removeStyle(...e.getStyleNames()), !0
		}

		function Ae(e) {
			return e.start.parent == e.end.parent && e.start.parent.is('attributeElement') && 0 === e.start.offset && e.end.offset === e.start.parent.childCount
		}

		function Ce(e) {
			for (const t of e) {
				if (!hc.some((e) => t instanceof e)) throw new _r('view-writer-insert-invalid-node');
				t.is('text') || Ce(t.getChildren())
			}
		}

		function Te(e) {
			return e && (e.is('containerElement') || e.is('documentFragment'))
		}

		function Pe(e) {
			const t = pe(e.start),
				n = pe(e.end);
			if (!t || !n || t !== n) throw new _r('view-writer-invalid-range-container')
		}

		function Se(e) {
			return (t, n, o, i) => {
				const a = e instanceof Qd ? e.clone(!0) : e(n, o, i);
				if (a && o.consume(n.item, 'insert')) {
					const e = i.mapper.toViewPosition(n.range.start);
					i.mapper.bindElements(n.item, a), fc.insert(e, a)
				}
			}
		}

		function Ee() {
			return (e, t, n, o) => {
				if (n.consume(t.item, 'insert')) {
					const e = o.mapper.toViewPosition(t.range.start),
						n = new Ud(t.item.data);
					fc.insert(e, n)
				}
			}
		}

		function Ve(e) {
			return (t, n, o, i) => {
				let a, r;
				if (e instanceof Qd ? (a = e.clone(!0), r = e.clone(!0)) : (n.isOpening = !0, a = e(n, o, i), n.isOpening = !1, r = e(n, o, i)), a && r) {
					const e = n.markerRange,
						s = t.name;
					if (!e.isCollapsed || o.consume(e, s)) {
						for (const t of e)
							if (!o.consume(t.item, s)) return;
						const t = i.mapper;
						fc.insert(t.toViewPosition(e.start), a), e.isCollapsed || fc.insert(t.toViewPosition(e.end), r)
					}
				}
			}
		}

		function Oe(e) {
			return e = e || ((e, t) => ({
				value: e,
				key: t
			})), (t, n, o, i) => {
				if (o.consume(n.item, Le(t.name))) {
					const {
						key: t,
						value: a
					} = e(n.attributeNewValue, n.attributeKey, n, o, i);
					i.mapper.toViewElement(n.item).setAttribute(t, a)
				}
			}
		}

		function Re(e) {
			return e = e || ((e, t) => ({
				key: t
			})), (t, n, o, i) => {
				if (o.consume(n.item, Le(t.name))) {
					const {
						key: t
					} = e(n.attributeOldValue, n.attributeKey, n, o, i);
					i.mapper.toViewElement(n.item).removeAttribute(t)
				}
			}
		}

		function Fe(e) {
			return (t, n, o, i) => {
				const a = e instanceof Qd ? e.clone(!0) : e(n.attributeNewValue, n, o, i);
				if (!a) return;
				if (!o.consume(n.item, Le(t.name))) return;
				let r = i.mapper.toViewRange(n.range);
				if (null !== n.attributeOldValue && !(e instanceof Qd)) {
					const t = e(n.attributeOldValue, n, o, i);
					r = fc.unwrap(r, t)
				}
				fc.wrap(r, a)
			}
		}

		function Ie(e) {
			return (t, n, o, i) => {
				const a = e instanceof Qd ? e.clone(!0) : e(n.attributeOldValue, n, o, i);
				if (a && o.consume(n.item, Le(t.name))) {
					const e = i.mapper.toViewRange(n.range);
					fc.unwrap(e, a)
				}
			}
		}

		function Ne() {
			return (e, t, n, o) => {
				if (!n.consume(t.item, 'remove')) return;
				let i = o.mapper.toViewPosition(t.sourcePosition),
					a;
				if (t.item.is('element')) i = i.getLastMatchingPosition((e) => !e.item.is('containerElement')), i.parent.is('text') && i.isAtEnd && (i = ec.createAfter(i.parent)), a = tc.createOn(i.nodeAfter);
				else {
					const e = ze(i, t.item.offsetSize);
					a = new tc(i, e)
				}
				fc.remove(a.getTrimmed()), '$graveyard' == t.item.root.rootName && o.mapper.unbindModelElement(t.item)
			}
		}

		function Be(e) {
			return (t, n, o, i) => {
				const a = 'function' == typeof e ? e(n, o, i) : e,
					r = n.item;
				if (a && !n.markerRange.isCollapsed && r.is('textProxy') && o.consume(r, t.name)) {
					a.id || (a.id = n.markerName);
					const e = je(a),
						o = i.mapper.toViewRange(n.range);
					'addMarker' == t.name.split(':')[0] ? fc.wrap(o, e) : fc.unwrap(o, e)
				}
			}
		}

		function Me(e) {
			return (t, n, o, i) => {
				const a = 'function' == typeof e ? e(n, o, i) : e,
					r = n.item;
				if (a && !n.markerRange.isCollapsed && r.is('element') && o.test(n.item, t.name)) {
					a.priority || (a.priority = 10), a.id || (a.id = n.markerName);
					const e = i.mapper.toViewElement(r),
						s = 'addMarker' == t.name.split(':')[0],
						l = s ? 'addHighlight' : 'removeHighlight';
					if (e && e.getCustomProperty(l)) {
						o.consume(n.item, t.name);
						for (const e of el.createIn(r)) o.consume(e.item, t.name);
						e.getCustomProperty(l)(e, s ? a : a.id)
					}
				}
			}
		}

		function De(e) {
			return (t, n, o, i) => {
				let a, r;
				if (e instanceof Qd ? (a = e.clone(!0), r = e.clone(!0)) : (n.isOpening = !0, a = e(n, o, i), n.isOpening = !1, r = e(n, o, i)), a && r) {
					const e = n.markerRange,
						s = t.name;
					if (!e.isCollapsed || o.consume(e, s)) {
						for (const t of e)
							if (!o.consume(t.item, s)) return;
						const t = i.mapper.toViewRange(e);
						fc.clear(t.getEnlarged(), r), a.isSimilar(r) || fc.clear(t.getEnlarged(), a)
					}
				}
			}
		}

		function Le(e) {
			const t = e.split(':');
			return t[0] + ':' + t[1]
		}

		function ze(e, t) {
			const n = new Gd({
				startPosition: e,
				singleCharacters: !0
			});
			let o = 0;
			for (const i of n)
				if ('text' == i.type && (o++, o == t)) return n.position
		}

		function je(e) {
			const t = new bc('span', e.attributes);
			if (e.class) {
				const n = Array.isArray(e.class) ? e.class : [e.class];
				t.addClass(...n)
			}
			return e.priority && (t.priority = e.priority), t.setCustomProperty('highlightDescriptorId', e.id), t
		}

		function $e(e, t) {
			t = He(t);
			const n = t.reduce((e, t) => e + t.offsetSize, 0),
				o = e.parent;
			Ue(e);
			const i = e.index;
			return o.insertChildren(i, t), We(o, i + t.length), We(o, i), new el(e, e.getShiftedBy(n))
		}

		function qe(e) {
			if (!e.isFlat) throw new _r('model-writer-remove-range-not-flat: Trying to remove a range which starts and ends in different element.');
			const t = e.start.parent;
			Ue(e.start), Ue(e.end);
			const n = t.removeChildren(e.start.index, e.end.index - e.start.index);
			return We(t, e.start.index), n
		}

		function He(e) {
			const t = [];
			e instanceof Array || (e = [e]);
			for (let n = 0; n < e.length; n++)
				if ('string' == typeof e[n]) t.push(new Ks(e[n]));
				else if (e[n] instanceof Qs) t.push(new Ks(e[n].data, e[n].getAttributes()));
			else if (e[n] instanceof ic || e[n] instanceof Js)
				for (const o of e[n]) t.push(o);
			else e[n] instanceof Us && t.push(e[n]);
			for (let n = 1; n < t.length; n++) {
				const e = t[n],
					o = t[n - 1];
				e instanceof Ks && o instanceof Ks && Ke(e, o) && (t.splice(n - 1, 2, new Ks(o.data + e.data, o.getAttributes())), n--)
			}
			return t
		}

		function We(e, t) {
			const n = e.getChild(t - 1),
				o = e.getChild(t);
			if (n && o && n.is('text') && o.is('text') && Ke(n, o)) {
				const i = new Ks(n.data + o.data, n.getAttributes());
				e.removeChildren(t - 1, 2), e.insertChildren(t - 1, i)
			}
		}

		function Ue(e) {
			const t = e.textNode,
				n = e.parent;
			if (t) {
				const o = e.offset - t.startOffset,
					i = t.index;
				n.removeChildren(i, 1);
				const a = new Ks(t.data.substr(0, o), t.getAttributes()),
					r = new Ks(t.data.substr(o), t.getAttributes());
				n.insertChildren(i, [a, r])
			}
		}

		function Ke(e, t) {
			const n = e.getAttributes(),
				o = t.getAttributes();
			for (const i of n) {
				if (i[1] !== t.getAttribute(i[0])) return !1;
				o.next()
			}
			return o.next().done
		}

		function Qe(e) {
			const t = new Set,
				n = new Map,
				o = new Ys({
					startPosition: Zs.createAt(e, 0),
					ignoreElementEnd: !0
				});
			for (const n of o) '$marker' == n.item.name && t.add(n.item);
			for (const o of t) {
				const e = o.getAttribute('data-name'),
					t = Zs.createBefore(o);
				n.has(e) ? n.get(e).end = Zs.createFromPosition(t) : n.set(e, new el(Zs.createFromPosition(t))), qe(el.createOn(o))
			}
			return n
		}

		function Je() {
			return (e, t, n, o) => {
				if (!t.output && n.consume(t.input, {
						name: !0
					})) {
					const e = o.convertChildren(t.input, n, t);
					t.output = new ic(He(e))
				}
			}
		}

		function Ge() {
			return (e, t, n, o) => {
				const i = {
					name: '$text',
					inside: t.context
				};
				o.schema.check(i) && n.consume(t.input) && (t.output = new Ks(t.input.data))
			}
		}

		function Ye() {
			const e = new Set(['insert', 'move', 'remove', 'reinsert']);
			this.listenTo(this.root.document, 'change', (t, n, o) => {
				e.has(n) && Xe.call(this, n, o.range, o.sourcePosition)
			}, {
				priority: 'high'
			})
		}

		function Xe(e, t, n) {
			const o = t.end.offset - t.start.offset;
			let i;
			switch (e) {
				case 'insert':
					const a = 'sticksToNext' == this.stickiness;
					i = this._getTransformedByInsertion(t.start, o, a);
					break;
				case 'move':
				case 'remove':
				case 'reinsert':
					const r = el.createFromPositionAndShift(n, o),
						s = r.containsPosition(this) || r.start.isEqual(this) && 'sticksToNext' == this.stickiness || r.end.isEqual(this) && 'sticksToPrevious' == this.stickiness;
					if (s) i = this._getCombined(n, t.start);
					else {
						const e = 'sticksToNext' == this.stickiness;
						i = this._getTransformedByMove(n, t.start, o, e)
					}
			}
			if (!this.isEqual(i)) {
				const e = Zs.createFromPosition(this);
				this.path = i.path, this.root = i.root, this.fire('change', e)
			}
		}

		function Ze(e, t, n, o) {
			o || (o = e.model.batch()), n.isCollapsed || e.deleteContent(n, o);
			const i = new xc(e, o, n.anchor);
			let a;
			a = t.is('documentFragment') ? t.getChildren() : [t], i.handleNodes(a, {
				isFirst: !0,
				isLast: !0
			});
			const r = i.getSelectionRange();
			r ? n.setRanges([r]) : wr.warn('insertcontent-no-range: Cannot determine a proper selection range after insertion.')
		}

		function et(e) {
			return e.is('text') ? '$text' : e.name
		}

		function tt(e, t, n = {}) {
			if (!e.isCollapsed) {
				const o = t.document.schema;
				if (!n.doNotResetEntireContent && lt(o, e)) return void st(t, e);
				const i = e.getFirstRange(),
					a = i.start,
					r = vc.createFromPosition(i.end);
				i.start.isTouching(i.end) || t.remove(i), n.leaveUnmerged || (nt(t, a, r), o.removeDisallowedAttributes(a.parent.getChildren(), a, t)), e.setCollapsedAt(a), it(o, a) && rt(t, a, e), r.detach()
			}
		}

		function nt(e, t, n) {
			const o = t.parent,
				i = n.parent;
			if (o != i && o.parent && i.parent && at(t, n)) {
				for (t = Zs.createAfter(o), n = Zs.createBefore(i), n.isEqual(t) || e.move(i, t), e.merge(t); n.parent.isEmpty;) {
					const t = n.parent;
					n = Zs.createBefore(t), e.remove(t)
				}
				nt(e, t, n)
			}
		}

		function it(e, t) {
			const n = e.check({
					name: '$text',
					inside: t
				}),
				o = e.check({
					name: 'paragraph',
					inside: t
				});
			return !n && o
		}

		function at(e, t) {
			const n = e.root.document.schema,
				o = new el(e, t);
			for (const i of o.getWalker())
				if (n.objects.has(i.item.name) || n.limits.has(i.item.name)) return !1;
			return !0
		}

		function rt(e, t, n) {
			const o = new Gs('paragraph');
			e.insert(t, o), n.setCollapsedAt(o)
		}

		function st(e, t) {
			const n = e.document.schema.getLimitElement(t);
			e.remove(el.createIn(n)), rt(e, Zs.createAt(n), t)
		}

		function lt(e, t) {
			const n = e.getLimitElement(t);
			if (!t.containsEntireContent(n)) return !1;
			const o = t.getFirstRange();
			return o.start.parent != o.end.parent && e.check({
				name: 'paragraph',
				inside: n.name
			})
		}

		function dt(e) {
			return !!e && 1 == e.length && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e)
		}

		function ct(e) {
			return !!e && 1 == e.length && /[\ud800-\udbff]/.test(e)
		}

		function mt(e) {
			return !!e && 1 == e.length && /[\udc00-\udfff]/.test(e)
		}

		function ut(e, t) {
			return ct(e.charAt(t - 1)) && mt(e.charAt(t))
		}

		function pt(e, t) {
			return dt(e.charAt(t))
		}

		function gt(e, t, n = {}) {
			const o = e.model.schema,
				i = 'backward' != n.direction,
				a = n.unit ? n.unit : 'character',
				r = t.focus,
				s = new Ys({
					boundaries: bt(r, i),
					singleCharacters: !0,
					direction: i ? 'forward' : 'backward'
				}),
				l = {
					walker: s,
					schema: o,
					isForward: i,
					unit: a
				};
			for (let o; o = s.next();) {
				if (o.done) return;
				const e = ft(l, o.value);
				if (e) return void t.moveFocusTo(e)
			}
		}

		function ft(e, t) {
			if ('text' == t.type) return ht(e.walker, e.unit);
			if (t.type == (e.isForward ? 'elementStart' : 'elementEnd')) {
				if (e.schema.objects.has(t.item.name)) return Zs.createAt(t.item, e.isForward ? 'after' : 'before');
				if (e.schema.check({
						name: '$text',
						inside: t.nextPosition
					})) return t.nextPosition
			} else {
				if (e.schema.limits.has(t.item.name)) return void e.walker.skip(() => !0);
				if (e.schema.check({
						name: '$text',
						inside: t.nextPosition
					})) return t.nextPosition
			}
		}

		function ht(e, t) {
			const n = e.position.textNode;
			if (n) {
				const o = n.data;
				for (let i = e.position.offset - n.startOffset; ut(o, i) || 'character' == t && pt(o, i);) e.next(), i = e.position.offset - n.startOffset
			}
			return e.position
		}

		function bt(e, t) {
			const n = e.root,
				o = Zs.createAt(n, t ? 'end' : 0);
			return t ? new el(e, o) : new el(o, e)
		}

		function _t(e) {
			const t = new ic,
				n = e.getFirstRange();
			if (!n || n.isCollapsed) return t;
			const o = n.start.root,
				i = n.start.getCommonPath(n.end),
				a = o.getNodeByPath(i);
			let r = n.start.parent == n.end.parent ? n : el.createFromParentsAndOffsets(a, n.start.path[i.length], a, n.end.path[i.length] + 1);
			const s = r.end.offset - r.start.offset;
			for (const n of r.getItems({
					shallow: !0
				})) n.is('textProxy') ? t.appendChildren(new Ks(n.data, n.getAttributes())) : t.appendChildren(n.clone(!0));
			if (r != n) {
				const e = n._getTransformedByMove(r.start, Zs.createAt(t, 0), s)[0],
					o = new el(Zs.createAt(t), e.start),
					i = new el(e.end, Zs.createAt(t, 'end'));
				kt(i), kt(o)
			}
			return t
		}

		function kt(e) {
			const t = [];
			Array.from(e.getItems({
				direction: 'backward'
			})).map((e) => el.createOn(e)).filter((t) => {
				const n = (t.start.isAfter(e.start) || t.start.isEqual(e.start)) && (t.end.isBefore(e.end) || t.end.isEqual(e.end));
				return n
			}).forEach((e) => {
				t.push(e.start.parent), qe(e)
			}), t.forEach((e) => {
				for (let t = e; t.parent && t.isEmpty;) {
					const e = el.createOn(t);
					t = t.parent, qe(e)
				}
			})
		}

		function wt(e) {
			var t = -1,
				n = e ? e.length : 0;
			for (this.__data__ = new Tl; ++t < n;) this.add(e[t])
		}

		function yt(e, t, n, o, i) {
			return !(e !== t) || (null != e && null != t && (Lr(e) || dr(t)) ? $c(e, t, yt, n, o, i) : e !== e && t !== t)
		}

		function vt(e, t) {
			if (am.prototype[e]) throw new _r('model-batch-register-taken: This batch method name is already taken.', {
				name: e
			});
			am.prototype[e] = t
		}

		function xt(e, t, n, o) {
			o instanceof el ? Ct(e, e.document, t, n, o) : At(e, e.document, t, n, o)
		}

		function At(e, t, n, o, i) {
			const a = i.getAttribute(n);
			let r, s;
			const l = i.is('rootElement') ? new sm : new rm;
			a != o && (e.addDelta(l), i.is('rootElement') ? s = new Zc(i, n, a, o, t.version) : (r = i.is('element') ? new el(Zs.createBefore(i), Zs.createFromParentAndOffset(i, 0)) : new el(Zs.createBefore(i), Zs.createAfter(i)), s = new Wc(r, n, a, o, t.version)), l.addOperation(s), t.applyOperation(s))
		}

		function Ct(e, t, n, o, i) {
			function a() {
				0 === r.operations.length && e.addDelta(r);
				const i = new el(s, l),
					a = new Wc(i, n, d, o, t.version);
				r.addOperation(a), t.applyOperation(a)
			}
			const r = new rm;
			let s = i.start,
				l, d, c;
			for (const r of i) c = r.item.getAttribute(n), l && d != c && (d != o && a(), s = l), l = r.nextPosition, d = c;
			l instanceof Zs && l != s && d != o && a()
		}

		function Tt(e, t, n, o, i) {
			const a = new Uc(n, o, i, e.document.version);
			t.addOperation(a), e.document.applyOperation(a)
		}

		function Pt(e, t, n) {
			const o = new dm;
			e.addDelta(o);
			const i = e.document.graveyard,
				a = new Zs(i, [0]),
				r = new Qc(t, n, a, e.document.version);
			o.addOperation(r), e.document.applyOperation(r)
		}

		function St(e, t, n) {
			t.addOperation(n), e.document.applyOperation(n)
		}

		function Et(e) {
			return [e.clone()]
		}

		function Vt(e, t) {
			for (let n = 0; n < t.length; n++) t[n].baseVersion = e + n + 1;
			return t
		}

		function Ot(e, t) {
			return null === e.targetPosition._getTransformedByDeletion(t.sourcePosition, t.howMany)
		}

		function Rt(e) {
			return 0 === e.length ? null : 1 == e.length ? e[0] : (e[0].end = e[e.length - 1].end, e[0])
		}

		function Ft(e, t, n) {
			const o = [];
			for (let a = 0; a < e.length; a++) {
				const i = It(e[a], t, n.isSticky);
				o.push(i);
				for (let t = a + 1; t < e.length; t++) e[t] = e[t]._getTransformedByMove(i.sourcePosition, i.targetPosition, i.howMany)[0];
				t = t._getTransformedByMove(i.sourcePosition, i.targetPosition, i.howMany, !0, !1)
			}
			return o
		}

		function It(e, t, n) {
			let o = '$graveyard' == t.root.rootName ? Qc : '$graveyard' == e.start.root.rootName ? Kc : Uc;
			const i = new o(e.start, e.end.offset - e.start.offset, t, 0);
			return i.isSticky = n, i
		}

		function Nt(e, t, n, o, i) {
			var a = -1,
				r = e.length;
			for (n || (n = wm), i || (i = []); ++a < r;) {
				var s = e[a];
				0 < t && n(s) ? 1 < t ? Nt(s, t - 1, n, o, i) : jl(i, s) : !o && (i[i.length] = s)
			}
			return i
		}

		function Bt(e, t) {
			if ('function' != typeof e || t && 'function' != typeof t) throw new TypeError(Lm);
			var n = function() {
				var o = arguments,
					i = t ? t.apply(this, o) : o[0],
					a = n.cache;
				if (a.has(i)) return a.get(i);
				var r = e.apply(this, o);
				return n.cache = a.set(i, r), r
			};
			return n.cache = new(Bt.Cache || Tl), n
		}

		function Mt(e, t) {
			for (const n of t)
				for (const t of n.operations) t.baseVersion = ++e;
			return t
		}

		function Dt(e) {
			return e.reduce((e, t) => e + t.operations.length, 0)
		}

		function Lt(e, t) {
			const n = e[e.length - 1];
			let o = n.operations.length + n.baseVersion;
			const a = new im;
			for (let n = 0; n < t; n++) a.addOperation(new Yc(o++));
			e.push(a)
		}

		function zt(e, t, n) {
			Ht(e, t, n), jt(e, t, n), qt(t, n), $t(t, n)
		}

		function jt(e, t, n) {
			const o = n.originalDelta.get(t);
			if (n.document.history.isUndoingDelta(o)) {
				const t = n.document.history.getUndoneDelta(o),
					i = n.wasAffected.get(e),
					a = i.get(t);
				a !== void 0 && (n.insertBefore = a)
			}
		}

		function $t(e, t) {
			const n = t.originalDelta.get(e),
				o = t.document.history;
			t.forceNotSticky = o.isUndoneDelta(n) || o.isUndoingDelta(n)
		}

		function qt(e, t) {
			const n = t.document.history,
				o = t.originalDelta.get(e);
			t.forceWeakRemove = n.isUndoneDelta(o)
		}

		function Ht(e, t, n) {
			n.wasAffected.get(e) || n.wasAffected.set(e, new Map);
			const o = n.originalDelta.get(t);
			let i = !!n.wasAffected.get(e).get(o);
			for (const o of e.operations) {
				for (const e of t.operations)
					if (o instanceof Uc && e instanceof Uc && Wt(o, e)) {
						i = !0;
						break
					}
				if (i) break
			}
			n.wasAffected.get(e).set(o, i)
		}

		function Wt(e, t) {
			const n = e.targetPosition,
				o = t.sourcePosition,
				i = O(o.getParentPath(), n.getParentPath());
			return !(n.root != o.root) && 'same' == i && o.offset < n.offset
		}

		function Ut(e, t, n) {
			delete n.insertBefore, delete n.forceNotSticky, delete n.forceWeakRemove;
			const o = n.wasAffected.get(e);
			n.wasAffected.delete(e);
			for (const i of t) n.wasAffected.set(i, new Map(o))
		}

		function Kt(e, t) {
			let n = [],
				i = null,
				o;
			switch (e) {
				case lm:
				case dm:
					for (const e of t) i = e instanceof Yc ? new im : e instanceof Qc ? new dm : new lm, i.addOperation(e), n.push(i);
					return n;
				case mm:
				case gm:
					return i = new e, i.addOperation(t[0]), i.addOperation(t[1]), n = Kt(lm, t.slice(2)), [i].concat(n);
				case um:
				case fm:
					return n = Kt(lm, t.slice(0, -2)), i = new e, i.addOperation(t[t.length - 2]), i.addOperation(t[t.length - 1]), n.concat(i);
				case pm:
					return i = t[0] instanceof Yc ? new im : new pm, i.addOperation(t[0]), [i];
				case rm:
					for (o = 0; o < t.length && !!(t[o] instanceof Yc); o++);
					o == t.length ? i = new im : (i = new rm, 0 != o && t.unshift(t.splice(o, 1)[0]));
					for (const e of t) i.addOperation(e);
					return [i];
				default:
					i = new e;
					for (const e of t) i.addOperation(e);
					return [i];
			}
		}

		function Qt(e, t, n, o) {
			const i = e.document,
				a = new mp,
				r = new Gc(t, n, o, i.markers, i.version);
			e.addDelta(a), a.addOperation(r), i.applyOperation(r)
		}

		function Jt(e, t) {
			const n = e.clone(),
				o = n.operations[0];
			return o.oldRange && (o.oldRange = o.oldRange.getTransformedByDelta(t)[0]), o.newRange && (o.newRange = o.newRange.getTransformedByDelta(t)[0]), [n]
		}

		function Gt(e, t) {
			function n() {
				const n = new el(e.position.getShiftedBy(s), e.position.getShiftedBy(l)),
					i = new Wc(n, t.key, r, t.value, 0);
				o.addOperation(i)
			}
			const o = new rm,
				a = e.nodes;
			let r = a.getNode(0).getAttribute(t.key),
				s = 0,
				l = a.getNode(0).offsetSize;
			for (let o = 1; o < a.length; o++) {
				const e = a.getNode(o),
					i = e.getAttribute(t.key);
				i != r && (r != t.value && n(), r = i, s = l), l += e.offsetSize
			}
			return n(), o
		}

		function Yt() {
			const e = new im;
			return e.addOperation(new Yc(0)), e
		}

		function Xt() {
			const e = new Set(['insert', 'move', 'remove', 'reinsert']);
			this.listenTo(this.root.document, 'change', (t, n, o, i, a) => {
				e.has(n) && Zt.call(this, n, a, i, o.range, o.sourcePosition)
			}, {
				priority: 'high'
			})
		}

		function Zt(e, t, n, o, i) {
			const a = o.end.offset - o.start.offset;
			let r = o.start;
			('move' == e || 'remove' == e || 'reinsert' == e) && (r = r._getTransformedByInsertion(i, a));
			const s = this._getTransformedByDocumentChange(e, t, r, a, i);
			('move' == e || 'remove' == e || 'reinsert' == e) && 3 == s.length && (s[2] = o);
			const l = el.createFromRanges(s),
				d = !l.isEqual(this),
				c = this.containsPosition(r),
				m = i && (this.containsPosition(i) || this.start.isEqual(i));
			if (d) {
				const t = el.createFromRange(this);
				this.start = l.start, this.end = l.end, this.fire('change:range', t, {
					type: e,
					batch: n,
					range: o,
					sourcePosition: i
				})
			} else(c || m) && this.fire('change:content', el.createFromRange(this), {
				type: e,
				batch: n,
				range: o,
				sourcePosition: i
			})
		}

		function en(e, t) {
			if (e.size != t.size) return !1;
			for (const n of e.entries()) {
				const e = JSON.stringify(n[1]),
					o = JSON.stringify(t.get(n[0]));
				if (e !== o) return !1
			}
			return !0
		}

		function tn(e, t) {
			return !t.has(e) && (t.add(e), e.document.schema.itemExtends(e.name, '$block') && e.parent)
		}

		function nn(e, t) {
			const n = e.parent.getAncestors({
					parentFirst: !0,
					includeSelf: !0
				}),
				o = n.find((e) => tn(e, t));
			return n.forEach((e) => t.add(e)), o
		}

		function on(e) {
			return e instanceof Qs || e instanceof Ks ? e.getAttributes() : null
		}

		function an(e, t, n) {
			if (!t || 'transparent' == t.type) return;
			const o = e.range && e.range.start.parent;
			!o || o.isEmpty || n.enqueueChanges(() => {
				const e = Array.from(o.getAttributeKeys()).filter((e) => e.startsWith(_p));
				for (const n of e) t.removeAttribute(o, n)
			})
		}

		function rn(e, t, n) {
			for (let o = n.length - 1, i = t.length - 1; 0 <= o && 0 <= i;) {
				const a = t[i];
				if (!e.hasItem(a)) return !1;
				const r = e._extensionChains.get(a);
				if (r.includes(n[o])) o--, i--;
				else return !1
			}
			return !0
		}

		function sn(e) {
			const t = e.textNode;
			if (t) {
				const n = t.data,
					o = e.offset - t.startOffset;
				return !ut(n, o) && !pt(n, o)
			}
			return !0
		}

		function* ln(e, t) {
			for (let n = !1; !n;) {
				if (n = !0, e) {
					const t = e.next();
					t.done || (n = !1, yield {
						walker: e,
						value: t.value
					})
				}
				if (t) {
					const e = t.next();
					e.done || (n = !1, yield {
						walker: t,
						value: e.value
					})
				}
			}
		}

		function dn(e) {
			return !!(e && pl(e.addEventListener))
		}

		function cn(e) {
			return e['data-ck-expando'] || (e['data-ck-expando'] = s())
		}

		function mn(e) {
			let t = 0;
			for (const n of e) t++;
			return t
		}

		function un(e) {
			return e instanceof Text && e.data.substr(0, Bp) === Mp
		}

		function pn(e) {
			return e.data.length == Bp && un(e)
		}

		function gn(e) {
			return un(e) ? e.data.slice(Bp) : e.data
		}

		function fn(e, t) {
			let n = Dp.get(t);
			return n || (n = t(window.document), Dp.set(t, n)), e.isEqualNode(n)
		}

		function hn(e) {
			e.on('keydown', bn)
		}

		function bn(e, t) {
			if (t.keyCode == uc.arrowleft) {
				const e = t.domTarget.ownerDocument.defaultView.getSelection();
				if (1 == e.rangeCount && e.getRangeAt(0).collapsed) {
					const t = e.getRangeAt(0).startContainer,
						n = e.getRangeAt(0).startOffset;
					un(t) && n <= Bp && e.collapse(t, 0)
				}
			}
		}

		function _n(e, t, o) {
			function i(n) {
				const i = (c[n - 1] === void 0 ? -1 : c[n - 1]) + 1,
					m = c[n + 1] === void 0 ? -1 : c[n + 1],
					u = i > m ? -1 : 1;
				d[n + u] && (d[n] = d[n + u].slice(0)), d[n] || (d[n] = []), d[n].push(i > m ? a : r);
				let p = ir(i, m),
					g = p - n;
				for (; g < s && p < l && o(e[g], t[p]);) g++, p++, d[n].push('equal');
				return p
			}
			o = o || function(e, t) {
				return e === t
			};
			let a, r;
			if (t.length < e.length) {
				const n = e;
				e = t, t = n, a = 'delete', r = 'insert'
			} else a = 'insert', r = 'delete';
			const s = e.length,
				l = t.length,
				n = l - s,
				d = {},
				c = {};
			let m = 0,
				u;
			do {
				for (u = -m; u < n; u++) c[u] = i(u);
				for (u = n + m; u > n; u--) c[u] = i(u);
				c[n] = i(n), m++
			} while (c[n] !== l);
			return d[n].slice(1)
		}

		function kn(e, t, n) {
			e.insertBefore(n, e.childNodes[t] || null)
		}

		function wn(e) {
			const t = e.parentNode;
			t && t.removeChild(e)
		}

		function yn(e) {
			if ('false' == e.getAttribute('contenteditable')) return !1;
			const t = e.findAncestor((e) => e.hasAttribute('contenteditable'));
			return !t || 'true' == t.getAttribute('contenteditable')
		}

		function vn(e) {
			let t = 0;
			for (; e.previousSibling;) e = e.previousSibling, t++;
			return t
		}

		function xn(e) {
			const t = [];
			for (; e && e.nodeType != Node.DOCUMENT_NODE;) t.unshift(e), e = e.parentNode;
			return t
		}

		function An(e, t) {
			const n = xn(e),
				o = xn(t);
			let a = 0;
			for (; n[a] == o[a] && n[a];) a++;
			return 0 == a ? null : n[a - 1]
		}

		function Cn(e, t, n) {
			let o = xn(e);
			return n && (o = o.slice(o.indexOf(n) + 1)), o.some((e) => e.tagName && t.includes(e.tagName.toLowerCase()))
		}

		function Tn(e, t) {
			for (; e && e != zp.document;) t(e), e = e.parentNode
		}

		function Pn(e) {
			return e == uc.arrowright || e == uc.arrowleft || e == uc.arrowup || e == uc.arrowdown
		}

		function Sn(e) {
			return '[object Range]' == Object.prototype.toString.apply(e)
		}

		function En(e) {
			return '[object Window]' == Object.prototype.toString.apply(e)
		}

		function Vn(e) {
			const t = e.ownerDocument.defaultView.getComputedStyle(e);
			return {
				top: parseInt(t.borderTopWidth, 10),
				right: parseInt(t.borderRightWidth, 10),
				bottom: parseInt(t.borderBottomWidth, 10),
				left: parseInt(t.borderLeftWidth, 10)
			}
		}

		function On(e, t) {
			for (const n of ig) e[n] = t[n]
		}

		function Rn(e) {
			return !!ng(e) && e === e.ownerDocument.body
		}

		function Fn({
			target: e,
			viewportOffset: t = 0
		}) {
			const n = zn(e);
			for (let o = n, i = null; o;) {
				let a;
				a = o == n ? jn(e) : jn(i), Nn(a, () => $n(e, o));
				const r = $n(e, o);
				In(o, r, t), o.parent == o ? o = null : (i = o.frameElement, o = o.parent)
			}
		}

		function In(e, t, n) {
			const o = t.clone().moveBy(0, n),
				i = t.clone().moveBy(0, -n),
				a = new og(e).excludeScrollbarsAndBorders();
			if (![i, o].every((e) => a.contains(e))) {
				let {
					scrollX: r,
					scrollY: s
				} = e;
				Mn(i, a) ? s -= a.top - t.top + n : Bn(o, a) && (s += t.bottom - a.bottom + n), Dn(t, a) ? r -= a.left - t.left + n : Ln(t, a) && (r += t.right - a.right + n), e.scrollTo(r, s)
			}
		}

		function Nn(e, t) {
			const n = zn(e);
			for (let o, i; e != n.document.body;) i = t(), o = new og(e).excludeScrollbarsAndBorders(), o.contains(i) || (Mn(i, o) ? e.scrollTop -= o.top - i.top : Bn(i, o) && (e.scrollTop += i.bottom - o.bottom), Dn(i, o) ? e.scrollLeft -= o.left - i.left : Ln(i, o) && (e.scrollLeft += i.right - o.right)), e = e.parentNode
		}

		function Bn(e, t) {
			return e.bottom > t.bottom
		}

		function Mn(e, t) {
			return e.top < t.top
		}

		function Dn(e, t) {
			return e.left < t.left
		}

		function Ln(e, t) {
			return e.right > t.right
		}

		function zn(e) {
			return Sn(e) ? e.startContainer.ownerDocument.defaultView : e.ownerDocument.defaultView
		}

		function jn(e) {
			if (Sn(e)) {
				let t = e.commonAncestorContainer;
				return t.nodeType == Node.TEXT_NODE && (t = t.parentNode), t
			}
			return e.parentNode
		}

		function $n(e, t) {
			const n = zn(e),
				o = new og(e);
			if (n === t) return o;
			for (let i = n; i != t;) {
				const e = i.frameElement,
					t = new og(e).excludeScrollbarsAndBorders();
				o.moveBy(t.left, t.top), i = i.parent
			}
			return o
		}

		function qn(e, t) {
			return (n, o) => {
				const i = o.newSelection,
					a = new bp,
					r = [];
				for (const e of i.getRanges()) r.push(t.toModelRange(e));
				a.setRanges(r, i.isBackward), a.isEqual(e.selection) || e.enqueueChanges(() => {
					e.selection.setTo(a)
				})
			}
		}

		function Hn() {
			return (e, t, n, o) => {
				const i = t.selection;
				if (!i.isCollapsed && n.consume(i, 'selection')) {
					o.viewSelection.removeAllRanges();
					for (const e of i.getRanges()) {
						const t = o.mapper.toViewRange(e);
						o.viewSelection.addRange(t, i.isBackward)
					}
				}
			}
		}

		function Wn() {
			return (e, t, n, o) => {
				const i = t.selection;
				if (i.isCollapsed && n.consume(i, 'selection')) {
					const e = i.getFirstPosition(),
						t = o.mapper.toViewPosition(e),
						n = fc.breakAttributes(t);
					o.viewSelection.removeAllRanges(), o.viewSelection.addRange(new tc(n, n))
				}
			}
		}

		function Un(e) {
			return (t, n, o, i) => {
				const a = e instanceof Qd ? e.clone(!0) : e(n.value, n, n.selection, o, i);
				if (a) {
					const e = 'selectionAttribute:' + n.key;
					Qn(n.selection, i.viewSelection, a, o, e)
				}
			}
		}

		function Kn(e) {
			return (t, n, o, i) => {
				const a = 'function' == typeof e ? e(n, o, i) : e;
				if (a) {
					a.id || (a.id = n.markerName);
					const e = je(a),
						t = 'selectionMarker:' + n.markerName;
					Qn(n.selection, i.viewSelection, e, o, t)
				}
			}
		}

		function Qn(e, t, n, o, i) {
			if (!e.isCollapsed) return;
			if (!o.consume(e, i)) return;
			let a = t.getFirstPosition();
			Jn(a.parent) && (a = a.getLastMatchingPosition((e) => e.item.is('uiElement'))), a = fc.wrapPosition(a, n), t.removeAllRanges(), t.addRange(new tc(a, a))
		}

		function Jn(e) {
			if (!e.is('element')) return !1;
			for (const t of e.getChildren())
				if (!t.is('uiElement')) return !1;
			return !0
		}

		function Gn() {
			return (e, t, n, o) => {
				for (const i of o.viewSelection.getRanges()) i.isCollapsed && i.end.parent.document && fc.mergeAttributes(i.start);
				o.viewSelection.removeAllRanges()
			}
		}

		function Yn() {
			return (e, t, n, o) => o.viewSelection.setFake(!1)
		}

		function Xn(e) {
			return e instanceof HTMLTextAreaElement ? e.value : e.innerHTML
		}

		function Zn(e, t) {
			e instanceof HTMLTextAreaElement && (e.value = t), e.innerHTML = t
		}

		function eo(e) {
			return (e + '').toLowerCase()
		}

		function to({
			origin: e,
			originKeystrokeHandler: t,
			originFocusTracker: n,
			toolbar: o,
			beforeFocus: i,
			afterBlur: a
		}) {
			n.add(o.element), t.set('Alt+F10', (e, t) => {
				n.isFocused && !o.focusTracker.isFocused && (i && i(), o.focus(), t())
			}), o.keystrokes.set('Esc', (t, n) => {
				o.focusTracker.isFocused && (e.focus(), a && a(), n())
			})
		}

		function no(e) {
			return Array.isArray(e) ? {
				items: e
			} : e ? Object.assign({
				items: []
			}, e) : {
				items: []
			}
		}

		function oo(e) {
			return e.every((e) => 'string' == typeof e)
		}

		function io(e) {
			return !!e && ((e.value && (e = e.value), Array.isArray(e)) ? e.some(io) : !!(e instanceof bg))
		}

		function ao(e, t) {
			return e.map((e) => e instanceof bg ? e.getValue(t) : e)
		}

		function ro(e, t, {
			node: n
		}) {
			let o = ao(e, n);
			o = 1 == e.length && e[0] instanceof kg ? o[0] : o.reduce(_o, ''), yo(o) ? t.remove() : t.set(o)
		}

		function so(e) {
			return {
				set(t) {
					e.textContent = t
				},
				remove() {
					e.textContent = ''
				}
			}
		}

		function lo(e, t, n) {
			return {
				set(o) {
					e.setAttributeNS(n, t, o)
				},
				remove() {
					e.removeAttributeNS(n, t)
				}
			}
		}

		function co(e, t) {
			return {
				set(n) {
					e.style[t] = n
				},
				remove() {
					e.style[t] = null
				}
			}
		}

		function mo(e) {
			const t = fg(e, (e) => {
				if (e && (e instanceof bg || xo(e) || vo(e) || Ao(e))) return e
			});
			return t
		}

		function uo(e) {
			if ('string' == typeof e ? e = fo(e) : e.text && ho(e), e.on && (e.eventListeners = go(e.on), delete e.on), !e.text) {
				e.attributes && po(e.attributes);
				const t = [];
				if (e.children)
					if (Ao(e.children)) t.push(e.children);
					else
						for (const n of e.children) xo(n) || vo(n) || dn(n) ? t.push(n) : t.push(new hg(n));
				e.children = t
			}
			return e
		}

		function po(e) {
			for (const t in e) e[t].value && (e[t].value = [].concat(e[t].value)), bo(e, t)
		}

		function go(e) {
			for (const t in e) bo(e, t);
			return e
		}

		function fo(e) {
			return {
				text: [e]
			}
		}

		function ho(e) {
			Array.isArray(e.text) || (e.text = [e.text])
		}

		function bo(e, t) {
			Array.isArray(e[t]) || (e[t] = [e[t]])
		}

		function _o(e, t) {
			return yo(t) ? e : yo(e) ? t : `${e} ${t}`
		}

		function ko(e, t) {
			for (const n in t) e[n] ? e[n].push(...t[n]) : e[n] = t[n]
		}

		function wo(e, t) {
			if (t.attributes && (!e.attributes && (e.attributes = {}), ko(e.attributes, t.attributes)), t.eventListeners && (!e.eventListeners && (e.eventListeners = {}), ko(e.eventListeners, t.eventListeners)), t.text && e.text.push(...t.text), t.children && t.children.length) {
				if (e.children.length != t.children.length) throw new _r('ui-template-extend-children-mismatch: The number of children in extended definition does not match.');
				let n = 0;
				for (const o of t.children) wo(e.children[n++], o)
			}
		}

		function yo(e) {
			return !e && 0 !== e
		}

		function vo(e) {
			return e instanceof wg
		}

		function xo(e) {
			return e instanceof hg
		}

		function Ao(e) {
			return e instanceof gg
		}

		function Co() {
			return {
				children: [],
				bindings: [],
				attributes: {}
			}
		}

		function To(e) {
			return 'class' == e || 'style' == e
		}

		function Po(e) {
			return (t) => t + e
		}

		function So(e) {
			return !!(e.focus && 'none' != zp.window.getComputedStyle(e.element).display)
		}

		function Eo(e) {
			return e.bindTemplate.to((t) => {
				t.target === e.element && t.preventDefault()
			})
		}

		function Vo(e) {
			const t = e.files ? Array.from(e.files) : [],
				n = e.items ? Array.from(e.items) : [];
			return t.length ? t : n.filter((e) => 'file' === e.kind).map((e) => e.getAsFile())
		}

		function Oo(e, t) {
			const n = t.target.ownerDocument,
				o = t.clientX,
				i = t.clientY;
			let a;
			return n.caretRangeFromPoint && n.caretRangeFromPoint(o, i) ? a = n.caretRangeFromPoint(o, i) : t.rangeParent && (a = n.createRange(), a.setStart(t.rangeParent, t.rangeOffset), a.collapse(!0)), a ? e.domConverter.domRangeToView(a) : e.selection.getFirstRange()
		}

		function Ro(e) {
			return e = e.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n\n/g, '</p><p>').replace(/\n/g, ' ').replace(/^\s/, '&nbsp;').replace(/\s$/, '&nbsp;').replace(/\s\s/g, ' &nbsp;'), -1 < e.indexOf('</p><p>') && (e = `<p>${e}</p>`), e
		}

		function Fo(e) {
			return e.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g, (e, t) => 1 == t.length ? ' ' : t)
		}

		function Io(e) {
			let t = '';
			if (e.is('text') || e.is('textProxy')) t = e.data;
			else if (e.is('img') && e.hasAttribute('alt')) t = e.getAttribute('alt');
			else {
				let n = null;
				for (const o of e.getChildren()) {
					const e = Io(o);
					n && (n.is('containerElement') || o.is('containerElement')) && (Dg.includes(n.name) || Dg.includes(o.name) ? t += '\n' : t += '\n\n'), t += e, n = o
				}
			}
			return t
		}

		function No(e, t, n, o) {
			const i = n.isCollapsed,
				a = n.getFirstRange(),
				r = a.start.parent,
				s = a.end.parent;
			if (o.limits.has(r.name) || o.limits.has(s.name)) return void(i || r != s || e.deleteContent(n, t));
			if (i) Bo(t, n, a.start);
			else {
				const o = !(a.start.isAtStart && a.end.isAtEnd);
				e.deleteContent(n, t, {
					leaveUnmerged: o
				}), o && (r == s ? Bo(t, n, n.focus) : n.setCollapsedAt(s))
			}
		}

		function Bo(e, t, n) {
			const o = n.parent,
				i = new o.constructor(o.name, o.getAttributes());
			n.isAtEnd ? e.insert(Zs.createAfter(n.parent), i) : n.isAtStart ? e.insert(Zs.createBefore(n.parent), i) : e.split(n), t.setCollapsedAt(n.parent.nextSibling)
		}

		function Mo(e, t) {
			function n() {
				r && (i.push(r), r = null)
			}

			function o(e) {
				return r && r.type == e
			}
			const i = [];
			let a = 0,
				r;
			return e.forEach((e) => {
				'equal' == e ? (n(), a++) : 'insert' == e ? (o('insert') ? r.values.push(t[a]) : (n(), r = {
					type: 'insert',
					index: a,
					values: [t[a]]
				}), a++) : o('delete') ? r.howMany++ : (n(), r = {
					type: 'delete',
					index: a,
					howMany: 1
				})
			}), n(), i
		}

		function Do(e) {
			return !!e.ctrlKey || Qg.includes(e.keyCode)
		}

		function Lo(e, t) {
			return e instanceof Ud && t instanceof Ud ? e.data === t.data : e === t
		}

		function zo(e) {
			if (1 == e.newChildren.length - e.oldChildren.length) {
				const t = _n(e.oldChildren, e.newChildren, Lo),
					n = Mo(t, e.newChildren);
				if (!(1 < n.length)) {
					const e = n[0];
					return e.values[0] instanceof Ud ? e : void 0
				}
			}
		}

		function jo(e) {
			const t = e.map((e) => e.node).reduce((e, t) => e.getCommonAncestor(t, {
				includeSelf: !0
			}));
			return t ? t.getAncestors({
				includeSelf: !0,
				parentFirst: !0
			}).find((e) => e.is('containerElement') || e.is('rootElement')) : void 0
		}

		function $o(e) {
			if (0 == e.length) return !1;
			for (const t of e)
				if ('children' === t.type && !zo(t)) return !0;
			return !1
		}

		function qo(e) {
			return e.every((e) => e.is('text'))
		}

		function Ho(e) {
			let t = null,
				n = null;
			for (let o = 0; o < e.length; o++) {
				const i = e[o];
				'equal' != i && (t = null == t ? o : t, n = o)
			}
			let o = 0,
				a = 0;
			for (let r = t; r <= n; r++) 'insert' != e[r] && o++, 'delete' != e[r] && a++;
			return {
				insertions: a,
				deletions: o,
				firstChangeAt: t
			}
		}

		function Wo(e, t) {
			const n = Uo([e], t);
			n.sort((e, t) => e.start.isBefore(t.start) ? -1 : 1);
			for (let o = 1; o < n.length; o++) {
				const e = n[o - 1],
					t = n[o];
				e.end.isTouching(t.start) && (e.end = t.end, n.splice(o, 1), o--)
			}
			return n
		}

		function Uo(e, t) {
			for (const n of t)
				for (const t of n.operations)
					for (let n = 0; n < e.length; n++) {
						let o;
						switch (t.type) {
							case 'insert':
								o = e[n]._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0);
								break;
							case 'move':
							case 'remove':
							case 'reinsert':
								o = e[n]._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !0);
						}
						o && (e.splice(n, 1, ...o), n = n + o.length - 1)
					}
			return e
		}

		function Ko() {
			let e = Qo(hf);
			return e && e.length == bf || (e = Go(bf), Jo(hf, e)), e
		}

		function Qo(e) {
			e = e.toLowerCase();
			const t = document.cookie.split(';');
			for (const n of t) {
				const t = n.split('='),
					o = decodeURIComponent(t[0].trim().toLowerCase());
				if (o === e) return decodeURIComponent(t[1])
			}
			return null
		}

		function Jo(e, t) {
			document.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + ';path=/'
		}

		function Go(e) {
			let t = '';
			const n = new Uint8Array(e);
			window.crypto.getRandomValues(n);
			for (let o = 0; o < n.length; o++) {
				const e = _f.charAt(n[o] % _f.length);
				t += 0.5 < Math.random() ? e.toUpperCase() : e
			}
			return t
		}

		function Yo(e) {
			return Array.from(e.getChildren()).reduce((e, t) => e + t.data, '')
		}

		function Xo() {
			return new Af
		}

		function Zo(e, t, n, o) {
			if (S(e)) {
				for (const i of e) Zo(i, t, n, o);
				return
			}
			const i = Array.from(e.getAttributeKeys());
			i.push(t.key);
			const a = {
				name: e.name || '$text',
				attributes: i,
				inside: n.context
			};
			o.schema.check(a) && e.setAttribute(t.key, t.value)
		}

		function ei() {
			return new Cf
		}

		function ti(e) {
			const t = e.next();
			return t.done ? null : t.value
		}

		function ni(e) {
			return 'blockQuote' == e.parent.name ? e.parent : null
		}

		function oi(e) {
			let t = 0,
				n;
			const o = [];
			for (; t < e.length;) {
				const i = e[t],
					a = e[t + 1];
				n || (n = Zs.createBefore(i)), a && i.nextSibling == a || (o.push(new el(n, Zs.createAfter(i))), n = null), t++
			}
			return o
		}

		function ii(e, t) {
			const n = e.check({
					name: 'blockQuote',
					inside: Zs.createBefore(t)
				}),
				o = e.check({
					name: t.name,
					attributes: Array.from(t.getAttributeKeys()),
					inside: 'blockQuote'
				});
			return n && o
		}

		function ai(e, t = 512) {
			try {
				const n = e.match(nh)[1],
					o = atob(e.replace(nh, '')),
					i = [];
				for (let e = 0; e < o.length; e += t) {
					const n = o.slice(e, e + t),
						a = Array(n.length);
					for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
					i.push(new Uint8Array(a))
				}
				return new Blob(i, {
					type: n
				})
			} catch (e) {
				throw new Error('Problem with decoding Base64 image data.')
			}
		}

		function ri(e) {
			if ('string' != typeof e) return !1;
			const t = e.match(nh);
			return !!(t && t.length)
		}

		function si() {
			return (e, t, n, o) => {
				if (n.test(t.input, {
						name: !0,
						class: 'image'
					}) && o.schema.check({
						name: 'image',
						inside: t.context,
						attributes: 'src'
					})) {
					const e = Array.from(t.input.getChildren()).find((e) => e.is('img'));
					if (e && e.hasAttribute('src') && n.test(e, {
							name: !0
						})) {
						const i = o.convertItem(e, n, t);
						t.context.push(i);
						const a = o.convertChildren(t.input, n, t);
						t.context.pop(), wc.insert(Zs.createAt(i), a), t.output = i
					}
				}
			}
		}

		function li(e, t, n = ci) {
			for (const o of e) o.on(`addAttribute:${t}:image`, n()), o.on(`changeAttribute:${t}:image`, n()), o.on(`removeAttribute:${t}:image`, n())
		}

		function di() {
			return (e, t, n, o) => {
				const i = e.name.split(':'),
					a = i[0] + ':' + i[1],
					r = t.item;
				if (n.consume(r, a)) {
					const e = o.mapper.toViewElement(r),
						n = e.getChild(0),
						a = i[0];
					if ('removeAttribute' == a) {
						const e = t.attributeOldValue;
						e.data && (n.removeAttribute('srcset'), n.removeAttribute('sizes'), e.width && n.removeAttribute('width'))
					} else {
						const e = t.attributeNewValue;
						e.data && (n.setAttribute('srcset', e.data), n.setAttribute('sizes', '100vw'), e.width && n.setAttribute('width', e.width))
					}
				}
			}
		}

		function ci() {
			return (e, t, n, o) => {
				const i = e.name.split(':'),
					a = i[0] + ':' + i[1],
					r = t.item;
				if (n.consume(r, a)) {
					const e = o.mapper.toViewElement(r),
						n = e.getChild(0),
						a = i[0];
					'removeAttribute' == a ? n.removeAttribute(t.attributeKey) : n.setAttribute(t.attributeKey, t.attributeNewValue)
				}
			}
		}

		function mi(e, t, n, o) {
			const i = t.input;
			if (n.test(i, {
					name: !0,
					attribute: ['src']
				})) {
				const e = ui({
					name: 'image',
					attributes: ['src']
				}, t.context, o.schema);
				if (e) {
					const a = Object.assign({}, t);
					a.context = e, t.output = o.convertItem(i, n, a), dh.add(t.output)
				}
			}
		}

		function ui(e, t, n) {
			t = t.slice();
			for (const o = {
					name: e.name,
					attributes: e.attributes,
					inside: t
				}; t.length && !n.check(o);) {
				const e = t.pop(),
					o = 'string' == typeof e ? e : e.name;
				if (n.limits.has(o)) return null
			}
			return t.length ? t : null
		}

		function pi(e, t) {
			if (t.output && t.output.is('element')) {
				const e = [];
				for (let n = t.output.childCount - 1; 0 <= n; n--) {
					const o = t.output.getChild(n);
					if (dh.has(o)) {
						const i = t.output.childCount - n - 1;
						let a = null;
						0 < i && (a = t.output.clone(!1), a.appendChildren(t.output.removeChildren(n + 1, i))), o.remove(), e.shift(), a && e.unshift(a), e.unshift(o), 0 < t.output.childCount && e.unshift(t.output)
					}
				}
				e.length && (t.output = new ic(e))
			}
		}

		function gi(e, t) {
			return e && t && e.priority == t.priority && hi(e.class) == hi(t.class)
		}

		function fi(e, t) {
			if (e.priority > t.priority) return !0;
			return !(e.priority < t.priority) && hi(e.class) > hi(t.class)
		}

		function hi(e) {
			return Array.isArray(e) ? e.sort().join(',') : e
		}

		function bi(e) {
			return !!e.getCustomProperty(mh)
		}

		function _i(e, t = {}) {
			function n(e) {
				return Array.isArray(e) ? e : [e]
			}
			return e.setAttribute('contenteditable', 'false'), e.getFillerOffset = xi, e.addClass(ph), e.setCustomProperty(mh, !0), t.label && wi(e, t.label), ki(e, (e, t) => e.addClass(...n(t.class)), (e, t) => e.removeClass(...n(t.class))), e
		}

		function ki(e, t, n) {
			const o = new ch;
			o.on('change:top', (o, i) => {
				i.oldDescriptor && n(e, i.oldDescriptor), i.newDescriptor && t(e, i.newDescriptor)
			}), e.setCustomProperty('addHighlight', (e, t) => o.add(t)), e.setCustomProperty('removeHighlight', (e, t) => o.remove(t))
		}

		function wi(e, t) {
			e.setCustomProperty(uh, t)
		}

		function yi(e) {
			const t = e.getCustomProperty(uh);
			return t ? 'function' == typeof t ? t() : t : ''
		}

		function vi(e) {
			return e.addClass('ck-editable'), e.setAttribute('contenteditable', e.isReadOnly ? 'false' : 'true'), e.on('change:isReadOnly', (t, n, o) => {
				e.setAttribute('contenteditable', o ? 'false' : 'true')
			}), e.on('change:isFocused', (t, n, o) => {
				o ? e.addClass('ck-editable_focused') : e.removeClass('ck-editable_focused')
			}), e
		}

		function xi() {
			return null
		}

		function Ai(e, t) {
			return e.setCustomProperty(fh, !0), _i(e, {
				label: function() {
					const n = e.getChild(0),
						o = n.getAttribute('alt');
					return o ? `${o} ${t}` : t
				}
			})
		}

		function Ci(e) {
			return !!e.getCustomProperty(fh) && bi(e)
		}

		function Ti(e) {
			const t = e.getSelectedElement();
			return !!(t && Ci(t))
		}

		function Pi(e) {
			return e instanceof Gs && 'image' == e.name
		}

		function Si() {
			return new Yd('figure', {
				class: 'image'
			}, new lc('img'))
		}

		function Ei(e) {
			return e == uc.arrowright || e == uc.arrowleft || e == uc.arrowup || e == uc.arrowdown
		}

		function Vi(e) {
			return e == uc.delete || e == uc.backspace
		}

		function Oi(e) {
			return ee(e) == wh
		}

		function Ri(e) {
			for (; e;) {
				if (e instanceof Zd && !(e instanceof qp)) return !0;
				e = e.parent
			}
			return !1
		}

		function Fi({
			emitter: e,
			activator: t,
			callback: n,
			contextElements: o
		}) {
			e.listenTo(document, 'mousedown', (e, {
				target: i
			}) => {
				if (t()) {
					for (const e of o)
						if (e.contains(i)) return;
					n()
				}
			})
		}

		function Ii({
			view: e
		}) {
			e.listenTo(e.element, 'submit', (t, n) => {
				n.preventDefault(), e.fire('submit')
			}, {
				useCapture: !0
			})
		}

		function Ni(e) {
			for (; e && 'html' != e.tagName.toLowerCase();) {
				if ('static' != zp.window.getComputedStyle(e).position) return e;
				e = e.parentElement
			}
			return null
		}

		function Bi({
			element: e,
			target: t,
			positions: n,
			limiter: o,
			fitInViewport: i
		}) {
			$r(t) && (t = t()), $r(o) && (o = o());
			const a = Ni(e.parentElement),
				r = new og(e),
				s = new og(t);
			let l, d;
			if (!o && !i)[d, l] = Mi(n[0], s, r);
			else {
				const e = o && new og(o).getVisible(),
					t = i && new og(zp.window);
				[d, l] = Di(n, s, r, e, t) || Mi(n[0], s, r)
			}
			let {
				left: c,
				top: m
			} = Li(l);
			if (a) {
				const e = Li(new og(a)),
					t = Vn(a);
				c -= e.left, m -= e.top, c += a.scrollLeft, m += a.scrollTop, c -= t.left, m -= t.top
			}
			return {
				left: c,
				top: m,
				name: d
			}
		}

		function Mi(e, t, n) {
			const {
				left: o,
				top: i,
				name: a
			} = e(t, n);
			return [a, n.clone().moveTo(o, i)]
		}

		function Di(e, t, n, o, i) {
			let a = 0,
				r = 0,
				s, l;
			const d = n.getArea();
			return e.some((e) => {
				function c() {
					r = g, a = p, s = u, l = m
				}
				const [m, u] = Mi(e, t, n);
				let p, g;
				if (o)
					if (i) {
						const e = o.getIntersection(i);
						p = e ? e.getIntersectionArea(u) : 0
					} else p = o.getIntersectionArea(u);
				return i && (g = i.getIntersectionArea(u)), i && !o ? g > r && c() : !i && o ? p > a && c() : g > r && p >= a ? c() : g >= r && p > a && c(), p === d
			}), s ? [l, s] : null
		}

		function Li({
			left: e,
			top: t
		}) {
			const {
				scrollX: n,
				scrollY: o
			} = zp.window;
			return {
				left: e + n,
				top: t + o
			}
		}

		function zi(e) {
			return ng(e) ? e : Sn(e) ? e.commonAncestorContainer : 'function' == typeof e ? zi(e()) : null
		}

		function ji(e, t) {
			return e.top - t.height - Vh.arrowVerticalOffset
		}

		function $i(e) {
			return e.bottom + Vh.arrowVerticalOffset
		}

		function qi(e) {
			const t = e.plugins.get('ContextualBalloon');
			if (Ti(e.editing.view.selection)) {
				const n = Hi(e);
				t.updatePosition(n)
			}
		}

		function Hi(e) {
			const t = e.editing.view,
				n = Vh.defaultPositions;
			return {
				target: t.domConverter.viewToDom(t.selection.getSelectedElement()),
				positions: [n.northArrowSouth, n.southArrowNorth]
			}
		}

		function Wi(e) {
			const t = /^image\/(jpeg|png|gif|bmp)$/;
			return t.test(e.type)
		}

		function Ui(e) {
			const t = e.getSelectedElement();
			if (t) return Zs.createAfter(t);
			const n = e.getSelectedBlocks().next().value;
			if (n) {
				if (n.isEmpty) return Zs.createAt(n);
				const t = Zs.createAfter(n);
				return e.focus.isTouching(t) ? t : Zs.createBefore(n)
			}
			return e.focus
		}

		function Ki(e) {
			return Array.from(e.types).includes('text/html') && '' !== e.getData('text/html')
		}

		function Qi() {
			const e = new pc('div', {
				class: 'ck-progress-bar'
			});
			return e.setCustomProperty(Zh, !0), e
		}

		function Ji(e) {
			for (const t of e.getChildren())
				if (t.getCustomProperty(Zh)) return t
		}

		function Gi(e, t) {
			return t.check({
				name: 'paragraph',
				inside: Zs.createBefore(e)
			})
		}

		function Yi(e, t, n, o) {
			if (n.test(t.input, {
					name: t.input.name
				}) && Zi(t.input, t.context, o.schema, !1)) {
				t.context.push('paragraph');
				const e = o.convertItem(t.input, n, t);
				t.context.pop(), t.output = e
			}
		}

		function Xi(e, t, n, o) {
			if (!t.output) return;
			const a = ob.paragraphLikeElements.has(t.input.name) && !t.output.is('element'),
				i = t.input.is('documentFragment') || t.input.is('element') && t.output.is('element') || a;
			if (!i) return;
			const r = t.output.is('element');
			r && t.context.push(t.output);
			let s = null;
			for (let r = 0; r < t.output.childCount; r++) {
				const e = t.output.getChild(r);
				Zi(e, t.context, o.schema, a) ? (s ? r-- : (s = new Gs('paragraph'), t.output.insertChildren(e.index, s)), e.remove(), s.appendChildren(e)) : s = null
			}
			r && t.context.pop()
		}

		function Zi(e, t, n, o) {
			const i = e.name || '$text';
			return !o && n.check({
				name: i,
				inside: t
			}) ? !1 : !!n.check({
				name: 'paragraph',
				inside: t
			}) && !!n.check({
				name: i,
				inside: t.concat('paragraph')
			})
		}

		function ea(e, t) {
			for (const n of e.getRootNames()) {
				const o = e.getRoot(n);
				o.isEmpty ? !ib.has(o) && ib.set(o, t) : ib.delete(o)
			}
		}

		function ta() {
			for (const [e, t] of ib) {
				const n = t.document,
					o = n.schema;
				o.check({
					name: 'paragraph',
					inside: [e]
				}) && n.enqueueChanges(() => {
					ib.delete(e), t.insert(Zs.createAt(e), new Gs('paragraph'))
				})
			}
		}

		function na(e, t, n) {
			return n.check({
				name: t,
				inside: Zs.createBefore(e)
			})
		}

		function oa(e, t) {
			const n = new rf(t);
			n.bind('label', 'isOn', 'isEnabled', 'withText', 'keystroke', 'tooltip').to(e);
			const o = new ub(t);
			return new mb(t, n, o)
		}

		function ia(e, t) {
			const n = oa(e, t),
				o = n.listView = new db(t);
			return o.items.bindTo(e.items).using((e) => {
				const n = new cb(t);
				return n.bind(...Object.keys(e)).to(e), n
			}), o.items.delegate('execute').to(n), n.panelView.children.add(o), n.on('change:isOpen', (e, t, o) => {
				o ? aa(n) : n.stopListening(document)
			}), n.on('execute', () => {
				n.isOpen = !1
			}), n.keystrokes.set('arrowdown', (e, t) => {
				n.isOpen && (o.focus(), t())
			}), n.keystrokes.set('arrowup', (e, t) => {
				n.isOpen && (o.focusLast(), t())
			}), n
		}

		function aa(e) {
			e.listenTo(document, 'click', (t, {
				target: n
			}) => {
				e.element == n || e.element.contains(n) || (e.isOpen = !1)
			})
		}

		function ra(e, t) {
			return Array.prototype.concat(...e.map((e) => [e, t]))
		}

		function sa(e, t, n) {
			const o = e.document;
			if (!o) throw new _r('view-placeholder-element-is-detached: Provided element is not placed in document.');
			la(e), kb.has(o) || (kb.set(o, new Map), _b.listenTo(o, 'render', () => da(o), {
				priority: 'high'
			})), e.setAttribute('data-placeholder', t), kb.get(o).set(e, n), ca(e, n)
		}

		function la(e) {
			const t = e.document;
			e.removeClass('ck-placeholder'), e.removeAttribute('data-placeholder'), kb.has(t) && kb.get(t).delete(e)
		}

		function da(e) {
			const t = kb.get(e);
			for (const [n, o] of t) ca(n, o)
		}

		function ca(e, t) {
			const n = e.document;
			if (n) {
				const o = n.selection,
					i = o.anchor;
				if (t && !t()) return void e.removeClass('ck-placeholder');
				const a = !Array.from(e.getChildren()).some((e) => !e.is('uiElement'));
				return !n.isFocused && a ? void e.addClass('ck-placeholder') : void(a && i && i.parent !== e ? e.addClass('ck-placeholder') : e.removeClass('ck-placeholder'))
			}
		}

		function ma(e, t) {
			return () => {
				const n = new Zd('figcaption');
				return n.document = e, n.setCustomProperty(wb, !0), sa(n, t), vi(n)
			}
		}

		function ua(e) {
			for (const t of e.getChildren())
				if (t instanceof Gs && 'caption' == t.name) return t;
			return null
		}

		function pa(e) {
			const t = e.parent;
			return 'figcaption' == e.name && t && 'figure' == t.name && t.hasClass('image') ? {
				name: !0
			} : null
		}

		function ga(e, t, n, o) {
			if ('insert' === t) {
				const e = new Ys({
					boundaries: n.range,
					ignoreElementEnd: !0
				});
				for (const t of e) {
					const e = t.item;
					'elementStart' == t.type && Pi(e) && !ua(e) && o.document.enqueueChanges(() => {
						ua(e) || o.insert(Zs.createAt(e, 'end'), new Gs('caption'))
					})
				}
			}
		}

		function fa(e, t = !0) {
			return (n, o, i, a) => {
				const r = o.item;
				if ((r.childCount || t) && Pi(r.parent)) {
					if (!i.consume(o.item, 'insert')) return;
					const t = a.mapper.toViewElement(o.range.start.parent),
						n = e instanceof Qd ? e.clone(!0) : e();
					r.childCount || n.addClass('ck-hidden'), ha(n, o.item, t, a.mapper)
				}
			}
		}

		function ha(e, t, n, o) {
			const i = ec.createAt(n, 'end');
			fc.insert(i, e), o.bindElements(t, e)
		}

		function ba(e) {
			const t = e.getAncestors({
					includeSelf: !0
				}),
				n = t.find((e) => 'caption' == e.name);
			return n && n.parent && 'image' == n.parent.name ? n : null
		}

		function _a(e) {
			return (t, n, o, i) => {
				const a = t.name.split(':')[0],
					r = a + ':imageStyle';
				if (o.test(n.item, r)) {
					const t = ya(n.attributeNewValue, e),
						s = ya(n.attributeOldValue, e),
						l = i.mapper.toViewElement(n.item),
						d = va(a, s, l),
						c = xa(a, t, l);
					(d || c) && o.consume(n.item, r)
				}
			}
		}

		function ka(e) {
			const t = e.filter((e) => !e.isDefault);
			return (e, n, o, i) => {
				for (const a of t) wa(a, n, o, i)
			}
		}

		function wa(e, t, n, o) {
			const i = t.input,
				a = t.output;
			if (n.test(i, {
					class: e.className
				}) && Pi(a)) {
				const r = [...a.getAttributeKeys(), 'imageStyle'];
				o.schema.check({
					name: 'image',
					inside: t.context,
					attributes: r
				}) && (n.consume(i, {
					class: e.className
				}), a.setAttribute('imageStyle', e.name))
			}
		}

		function ya(e, t) {
			for (const n of t)
				if (n.name === e) return n
		}

		function va(e, t, n) {
			return t && ('changeAttribute' == e || 'removeAttribute' == e) && (n.removeClass(t.className), !0)
		}

		function xa(e, t, n) {
			return t && ('addAttribute' == e || 'changeAttribute' == e) && (n.addClass(t.className), !0)
		}

		function Aa(e) {
			const t = Ib.defaultStyles,
				n = Ib.defaultIcons;
			if ('string' == typeof e) t[e] ? e = Object.assign({}, t[e]) : (wr.warn('image-style-not-found: There is no such image style of given name.', {
				name: e
			}), e = {
				name: e
			});
			else if (t[e.name]) {
				const n = t[e.name],
					o = Object.assign({}, e);
				for (const t in n) e.hasOwnProperty(t) || (o[t] = n[t]);
				e = o
			}
			return 'string' == typeof e.icon && n[e.icon] && (e.icon = n[e.icon]), e
		}

		function Ca(e, t) {
			return new el(Ta(e, t, !0), Ta(e, t, !1))
		}

		function Ta(e, t, n) {
			let o = e.textNode || (n ? e.nodeBefore : e.nodeAfter),
				i = null;
			for (; o && o.getAttribute('linkHref') == t;) i = o, o = n ? o.previousSibling : o.nextSibling;
			return i ? Zs.createAt(i, n ? 'before' : 'after') : e
		}

		function Pa(e) {
			return e.getAncestors().find((e) => e instanceof Db)
		}

		function Sa(e, t, n) {
			const o = t ? e[0] : e[e.length - 1];
			if (o.is('listItem'))
				for (let i = o[t ? 'previousSibling' : 'nextSibling'], a = o.getAttribute('indent'); i && i.is('listItem') && i.getAttribute('indent') >= n;) a > i.getAttribute('indent') && (a = i.getAttribute('indent')), i.getAttribute('indent') == a && e[t ? 'unshift' : 'push'](i), i = i[t ? 'previousSibling' : 'nextSibling']
		}

		function Ea(e, t) {
			return t.check({
				name: 'listItem',
				attributes: ['type', 'indent'],
				inside: Zs.createBefore(e)
			})
		}

		function Va(e, t) {
			const n = Oa(e, !1);
			if (n) return void t.setAttribute(e, 'type', n.getAttribute('type'));
			const o = Oa(e, !0);
			o && t.setAttribute(e, 'type', o.getAttribute('type'))
		}

		function Oa(e, t) {
			for (let n = e[t ? 'nextSibling' : 'previousSibling']; n && n.is('listItem') && n.getAttribute('indent') >= e.getAttribute('indent');) {
				if (n.getAttribute('indent') == e.getAttribute('indent')) return n;
				n = n[t ? 'nextSibling' : 'previousSibling']
			}
			return null
		}

		function Ra() {
			const e = !this.isEmpty && ('ul' == this.getChild(0).name || 'ol' == this.getChild(0).name);
			return this.isEmpty || e ? 0 : null
		}

		function Fa(e, t, n, o) {
			if (n.test(t.item, 'insert') && n.test(t.item, 'addAttribute:type') && n.test(t.item, 'addAttribute:indent')) {
				n.consume(t.item, 'insert'), n.consume(t.item, 'addAttribute:type'), n.consume(t.item, 'addAttribute:indent');
				const e = t.item,
					i = Qa(e, o.mapper),
					a = o.mapper.toViewPosition(Zs.createBefore(e));
				Ya(e, i, o.mapper, a)
			}
		}

		function Ia(e, t, n, o) {
			if (!n.consume(t.item, 'changeAttribute:type')) return;
			const i = o.mapper.toViewElement(t.item);
			fc.breakContainer(ec.createBefore(i)), fc.breakContainer(ec.createAfter(i));
			let a = i.parent;
			const r = 'numbered' == t.attributeNewValue ? 'ol' : 'ul';
			a = fc.rename(a, r), Ga(a, a.nextSibling), Ga(a.previousSibling, a)
		}

		function Na(e, t, n, o) {
			if (!n.consume(t.item, 'remove')) return;
			let i = o.mapper.toViewPosition(t.sourcePosition);
			i = i.getLastMatchingPosition((e) => !e.item.is('li'));
			const a = i.nodeAfter;
			fc.breakContainer(ec.createBefore(a)), fc.breakContainer(ec.createAfter(a));
			const r = a.parent,
				s = r.previousSibling,
				l = tc.createOn(r);
			fc.remove(l), s && s.nextSibling && Ga(s, s.nextSibling), Xa(t.item.getAttribute('indent') + 1, t.sourcePosition, l.start, a, o.mapper), '$graveyard' == t.item.root.rootName && o.mapper.unbindModelElement(t.item)
		}

		function Ba(e, t, n, o) {
			if (!n.consume(t.item, 'changeAttribute:indent')) return;
			const i = o.mapper.toViewElement(t.item);
			fc.breakContainer(ec.createBefore(i)), fc.breakContainer(ec.createAfter(i));
			const a = i.parent,
				r = a.previousSibling,
				s = tc.createOn(a);
			fc.remove(s);
			let l;
			r && r.nextSibling && (l = Ga(r, r.nextSibling)), l || (l = s.start), Xa(t.attributeOldValue + 1, t.range.start, s.start, i, o.mapper), Ya(t.item, i, o.mapper, l)
		}

		function Ma(e, t, n, o) {
			if ('listItem' != t.item.name) {
				let e = o.mapper.toViewPosition(t.range.start);
				const n = [];
				for (;
					('ul' == e.parent.name || 'ol' == e.parent.name) && (e = fc.breakContainer(e), 'li' == e.parent.name);) {
					const t = e,
						o = ec.createAt(e.parent, 'end');
					if (!t.isEqual(o)) {
						const e = fc.remove(new tc(t, o));
						n.push(e)
					}
					e = ec.createAfter(e.parent)
				}
				if (0 < n.length) {
					for (let t = 0; t < n.length; t++) {
						const o = e.nodeBefore,
							i = fc.insert(e, n[t]);
						if (e = i.end, 0 < t) {
							const t = Ga(o, o.nextSibling);
							t && t.parent == o && e.offset--
						}
					}
					Ga(e.nodeBefore, e.nodeAfter)
				}
			}
		}

		function Da(e, t, n, o) {
			if (!t.item.is('listItem')) {
				const e = o.mapper.toViewPosition(t.sourcePosition),
					n = e.nodeBefore,
					i = e.nodeAfter;
				Ga(n, i)
			}
		}

		function La(e, t, n, o) {
			if (n.consume(t.input, {
					name: !0
				})) {
				const e = new Gs('listItem');
				t.indent = t.indent ? t.indent : 0, e.setAttribute('indent', t.indent);
				const i = t.input.parent && 'ol' == t.input.parent.name ? 'numbered' : 'bulleted';
				e.setAttribute('type', i), t.context.push(e), t.indent++;
				const a = new ic;
				a.appendChildren(e);
				for (const i of t.input.getChildren()) {
					const r = o.convertItem(i, n, t);
					'ul' == i.name || 'ol' == i.name ? a.appendChildren(Array.from(r.getChildren())) : wc.insert(Zs.createAt(e, 'end'), r)
				}
				t.indent--, t.context.pop(), t.output = a
			}
		}

		function za(e, t, n) {
			if (n.test(t.input, {
					name: !0
				})) {
				const e = Array.from(t.input.getChildren());
				for (const t of e) t.is('li') || t.remove()
			}
		}

		function ja(e, t, n) {
			if (n.test(t.input, {
					name: !0
				})) {
				if (0 === t.input.childCount) return;
				const e = [...t.input.getChildren()];
				let n = !1,
					o = !0;
				for (const t of e) !n || t.is('ul') || t.is('ol') || t.remove(), t.is('text') ? (o && (t.data = t.data.replace(/^\s+/, '')), (!t.nextSibling || t.nextSibling.is('ul') || t.nextSibling.is('ol')) && (t.data = t.data.replace(/\s+$/, ''))) : (t.is('ul') || t.is('ol')) && (n = !0), o = !1
			}
		}

		function $a(e, t) {
			const n = t.modelPosition.nodeBefore;
			if (n && n.is('listItem')) {
				const e = t.mapper.toViewElement(n),
					o = e.getAncestors().find((e) => e.is('ul') || e.is('ol')),
					i = new Gd({
						startPosition: ec.createAt(e, 0)
					});
				for (const e of i)
					if ('elementStart' == e.type && e.item.is('li')) {
						t.viewPosition = e.previousPosition;
						break
					} else if ('elementEnd' == e.type && e.item == o) {
					t.viewPosition = e.nextPosition;
					break
				}
			}
		}

		function qa(e, t) {
			const n = t.viewPosition,
				o = n.parent,
				i = t.mapper;
			if ('ul' == o.name || 'ol' == o.name) {
				if (!n.isAtEnd) {
					const e = i.toModelElement(n.nodeAfter);
					t.modelPosition = Zs.createBefore(e)
				} else {
					const e = i.toModelElement(n.nodeBefore),
						o = i.getModelLength(n.nodeBefore);
					t.modelPosition = Zs.createBefore(e).getShiftedBy(o)
				}
				e.stop()
			} else if ('li' == o.name && n.nodeBefore && ('ul' == n.nodeBefore.name || 'ol' == n.nodeBefore.name)) {
				const a = i.toModelElement(o);
				let r = 1,
					s = n.nodeBefore;
				for (; s && (s.is('ul') || s.is('ol'));) r += i.getModelLength(s), s = s.previousSibling;
				t.modelPosition = Zs.createBefore(a).getShiftedBy(r), e.stop()
			}
		}

		function Ha(e) {
			return (t, n, o, i) => {
				if ('transparent' != i.type)
					if ('remove' == n) {
						const t = o.range.end.offset - o.range.start.offset,
							n = o.sourcePosition._getTransformedByInsertion(o.range.start, t, !0);
						Wa(n, e, i), Ua(n, !1, e, i)
					} else if ('move' == n) {
					const t = o.range.end.offset - o.range.start.offset,
						n = o.sourcePosition._getTransformedByInsertion(o.range.start, t, !0);
					Wa(n, e, i), Ua(n, !1, e, i), Wa(o.range.start, e, i), Ua(o.range.start, !1, e, i), Wa(o.range.end, e, i), Ua(o.range.end, !0, e, i)
				} else if ('rename' == n && 'listItem' == o.oldName && 'listItem' != o.newName) {
					const t = o.element;
					e.enqueueChanges(() => {
						i.removeAttribute(t, 'indent').removeAttribute(t, 'type')
					});
					const n = Zs.createAfter(o.element);
					Wa(n, e, i)
				} else 'insert' == n && (Wa(o.range.start, e, i), Ua(o.range.start, !1, e, i), Wa(o.range.end, e, i), Ua(o.range.end, !0, e, i))
			}
		}

		function Wa(e, t, n) {
			let o = e.nodeAfter;
			o && 'listItem' == o.name && t.enqueueChanges(() => {
				const e = o.previousSibling,
					t = e && e.is('listItem') ? e.getAttribute('indent') + 1 : 0;
				let i = o.getAttribute('indent') - t;
				const a = [];
				for (; o && 'listItem' == o.name && o.getAttribute('indent') > t;) {
					i > o.getAttribute('indent') && (i = o.getAttribute('indent'));
					const e = o.getAttribute('indent') - i;
					a.push({
						item: o,
						indent: e
					}), o = o.nextSibling
				}
				if (0 < a.length)
					for (const e of a.reverse()) n.setAttribute(e.item, 'indent', e.indent)
			})
		}

		function Ua(e, t, n, o) {
			let i = e[t ? 'nodeBefore' : 'nodeAfter'];
			i && i.is('listItem') && 0 !== i.getAttribute('indent') && n.enqueueChanges(() => {
				const e = Za(i, !t);
				if (e && e != i)
					for (const n = e.getAttribute('indent'), a = e.getAttribute('type'); i && i.is('listItem') && i.getAttribute('indent') >= n;) i.getAttribute('type') != a && i.getAttribute('indent') == n && o.setAttribute(i, 'type', a), i = i[t ? 'previousSibling' : 'nextSibling']
			})
		}

		function Ka(e, [t, n]) {
			let o = t.is('documentFragment') ? t.getChild(0) : t;
			if (o && o.is('listItem')) {
				const e = n.getFirstPosition();
				let t = null;
				if (e.parent.is('listItem') ? t = e.parent : e.nodeBefore && e.nodeBefore.is('listItem') && (t = e.nodeBefore), t) {
					const e = t.getAttribute('indent');
					if (0 < e)
						for (; o && o.is('listItem');) o.setAttribute('indent', o.getAttribute('indent') + e), o = o.nextSibling
				}
			}
		}

		function Qa(e, t) {
			const n = 'numbered' == e.getAttribute('type') ? 'ol' : 'ul',
				o = new Yb,
				i = new Yd(n, null);
			return i.appendChildren(o), t.bindElements(e, o), o
		}

		function Ja(e, t) {
			const n = t.getNext ? 'nextSibling' : 'previousSibling',
				o = t.getNext ? 'nodeAfter' : 'nodeBefore',
				i = !!t.checkAllSiblings,
				a = !!t.sameIndent,
				r = !!t.biggerIndent,
				s = !!t.smallerIndent,
				l = !!t.isMapped,
				d = e instanceof Gs ? e.getAttribute('indent') : t.indent;
			for (let c = e instanceof Gs ? e[n] : e[o]; c && 'listItem' == c.name;) {
				const e = c.getAttribute('indent');
				if (a && d == e || r && d < e || s && d > e) {
					if (!l || t.mapper.toViewElement(c)) return c;
					c = c[n];
					continue
				}
				if (!i) return null;
				c = c[n]
			}
			return null
		}

		function Ga(e, t) {
			return e && t && ('ul' == e.name || 'ol' == e.name) && e.name == t.name ? fc.mergeContainers(ec.createAfter(e)) : null
		}

		function Ya(e, t, n, o) {
			const i = t.parent;
			let a = Ja(e, {
					sameIndent: !0,
					smallerIndent: !0,
					checkAllSiblings: !0
				}),
				r;
			if (a && a.getAttribute('indent') == e.getAttribute('indent')) {
				const e = n.toViewElement(a);
				r = fc.breakContainer(ec.createAfter(e))
			} else a = e.previousSibling, r = a && 'listItem' == a.name ? a.getAttribute('indent') < e.getAttribute('indent') ? n.toViewPosition(Zs.createAt(a, 'end')) : o.parent.is('ul') || o.parent.is('ol') ? fc.breakContainer(o) : o : n.toViewPosition(Zs.createBefore(e));
			r = er(r), fc.insert(r, i);
			const s = Ja(e, {
				biggerIndent: !0,
				getNext: !0,
				isMapped: !0,
				mapper: n
			});
			if (s) {
				const e = n.toViewElement(s);
				fc.breakContainer(ec.createBefore(e));
				const o = ec.createBefore(e.parent),
					i = Za(s, !1),
					a = n.toViewElement(i),
					r = fc.breakContainer(ec.createAfter(a)),
					l = new tc(o, r),
					d = ec.createAt(t, 'end');
				fc.move(l, d)
			}
			Ga(i, i.nextSibling), Ga(i.previousSibling, i)
		}

		function Xa(e, t, n, o, i) {
			const a = Ja(t, {
					sameIndent: !0,
					smallerIndent: !0,
					checkAllSiblings: !0,
					indent: e
				}),
				r = a ? a.getAttribute('indent') : null;
			let s;
			if (!a) s = n;
			else if (r == e) {
				const e = i.toViewElement(a).parent;
				s = ec.createAfter(e)
			} else {
				const e = Zs.createAt(a, 'end');
				s = i.toViewPosition(e)
			}
			s = er(s);
			for (const a of [...o.getChildren()])(a.is('ul') || a.is('ol')) && (s = fc.move(tc.createOn(a), s).end, Ga(a, a.nextSibling), Ga(a.previousSibling, a))
		}

		function Za(e, t) {
			const n = e.getAttribute('indent'),
				o = t ? 'previousSibling' : 'nextSibling';
			let i = e;
			for (; e[o] && e[o].is('listItem') && e[o].getAttribute('indent') >= n;) e = e[o], e.getAttribute('indent') == n && (i = e);
			return i
		}

		function er(e) {
			return e.getLastMatchingPosition((e) => e.item.is('uiElement'))
		}

		function tr(e) {
			let t = 1;
			for (const n of e.getChildren())
				if ('ul' == n.name || 'ol' == n.name)
					for (const e of n.getChildren()) t += tr(e);
			return t
		}
		var nr = Number.POSITIVE_INFINITY,
			or = Math.min,
			ir = Math.max,
			ar = Math.floor;
		Object.defineProperty(t, '__esModule', {
			value: !0
		});
		var rr = Object.getPrototypeOf,
			sr = function(e) {
				return rr(Object(e))
			},
			lr = function(e) {
				var t = !1;
				if (null != e && 'function' != typeof e.toString) try {
					t = !!(e + '')
				} catch (t) {}
				return t
			},
			dr = function(e) {
				return !!e && 'object' == typeof e
			},
			cr = Object.prototype,
			mr = Function.prototype.toString,
			ur = cr.hasOwnProperty,
			pr = mr.call(Object),
			gr = cr.toString,
			fr = function(e) {
				if (!dr(e) || gr.call(e) != '[object Object]' || lr(e)) return !1;
				var t = sr(e);
				if (null === t) return !0;
				var n = ur.call(t, 'constructor') && t.constructor;
				return 'function' == typeof n && n instanceof n && mr.call(n) == pr
			};
		class hr {
			constructor(e, t) {
				this._config = {}, t && this.define(t), e && this._setObjectToTarget(this._config, e)
			}
			set(e, t) {
				this._setToTarget(this._config, e, t)
			}
			define(e, t) {
				this._setToTarget(this._config, e, t, !0)
			}
			get(e) {
				return this._getFromSource(this._config, e)
			}
			_setToTarget(e, t, n, o = !1) {
				if (fr(t)) return void this._setObjectToTarget(e, t, o);
				const i = t.split('.');
				t = i.pop();
				for (const a of i) fr(e[a]) || (e[a] = {}), e = e[a];
				return fr(n) ? (fr(e[t]) || (e[t] = {}), e = e[t], void this._setObjectToTarget(e, n, o)) : void(o && 'undefined' != typeof e[t] || (e[t] = n))
			}
			_getFromSource(e, t) {
				const n = t.split('.');
				t = n.pop();
				for (const o of n) {
					if (!fr(e[o])) {
						e = null;
						break
					}
					e = e[o]
				}
				return e ? e[t] : void 0
			}
			_setObjectToTarget(e, t, n) {
				Object.keys(t).forEach((o) => {
					this._setToTarget(e, o, t[o], n)
				})
			}
		}
		const br = 'https://ckeditor5.github.io/docs/nightly/ckeditor5/latest/framework/guides/support/error-codes.html';
		class _r extends Error {
			constructor(e, t) {
				e = o(e), t && (e += ' ' + JSON.stringify(t)), super(e), this.name = 'CKEditorError', this.data = t
			}
			static isCKEditorError(e) {
				return e instanceof _r
			}
		}
		const kr = {
			error(e, t) {
				console.error(o(e), t)
			},
			warn(e, t) {
				console.warn(o(e), t)
			}
		};
		var wr = kr;
		class yr {
			constructor(e, t = []) {
				this._editor = e, this._availablePlugins = new Map, this._plugins = new Map;
				for (const n of t) this._availablePlugins.set(n, n), n.pluginName && this._availablePlugins.set(n.pluginName, n)
			}*[Symbol.iterator]() {
				for (const e of this._plugins) 'function' == typeof e[0] && (yield e)
			}
			get(e) {
				return this._plugins.get(e)
			}
			load(e, t = []) {
				function n(e) {
					return m.includes(e) || r.get(e) || l.has(e) ? void 0 : o(e).catch((t) => {
						throw wr.error('plugincollection-load: It was not possible to load the plugin.', {
							plugin: e
						}), t
					})
				}

				function o(e) {
					return new Promise((o) => {
						l.add(e), e.requires && e.requires.forEach((o) => {
							const a = i(o);
							if (t.includes(a)) throw new _r('plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.', {
								plugin: a,
								requiredBy: e
							});
							n(a)
						});
						const a = new e(s);
						r._add(e, a), d.push(a), o()
					})
				}

				function i(e) {
					return 'function' == typeof e ? e : r._availablePlugins.get(e)
				}

				function a(e) {
					return e.map((e) => i(e)).filter((e) => !!e)
				}
				const r = this,
					s = this._editor,
					l = new Set,
					d = [],
					c = a(e),
					m = a(t),
					u = function(e) {
						const t = [];
						for (const n of e) i(n) || t.push(n);
						return t.length ? t : null
					}(e);
				if (u) {
					const e = 'plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.';
					return wr.error(e, {
						plugins: u
					}), Promise.reject(new _r(e, {
						plugins: u
					}))
				}
				return Promise.all(c.map(n)).then(() => d)
			}
			destroy() {
				const e = Array.from(this).map(([, e]) => e).filter((e) => 'function' == typeof e.destroy).map((e) => e.destroy());
				return Promise.all(e)
			}
			_add(e, t) {
				this._plugins.set(e, t);
				const n = e.pluginName;
				n && (this._plugins.has(n) ? wr.warn('plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.', {
					pluginName: n,
					plugin1: this._plugins.get(n).constructor,
					plugin2: e
				}) : this._plugins.set(n, t))
			}
		}
		class vr {
			constructor() {
				this._commands = new Map
			}
			add(e, t) {
				this._commands.set(e, t)
			}
			get(e) {
				return this._commands.get(e)
			}
			execute(e, ...t) {
				const n = this.get(e);
				if (!n) throw new _r('commandcollection-command-not-found: Command does not exist.', {
					commandName: e
				});
				n.execute(...t)
			}* names() {
				yield* this._commands.keys()
			}* commands() {
				yield* this._commands.values()
			}[Symbol.iterator]() {
				return this._commands[Symbol.iterator]()
			}
			destroy() {
				for (const e of this.commands()) e.destroy()
			}
		}
		let xr = {};
		window.CKEDITOR_TRANSLATIONS = window.CKEDITOR_TRANSLATIONS || {}, window.CKEDITOR_TRANSLATIONS.add = function(e, t) {
			xr[e] = xr[e] || {}, Object.assign(xr[e], t)
		};
		class Ar {
			constructor(e) {
				this.lang = e || 'en', this.t = (...e) => this._t(...e)
			}
			_t(e, t) {
				let n = i(this.lang, e);
				return t && (n = n.replace(/%(\d+)/g, (e, n) => n < t.length ? t[n] : e)), n
			}
		}
		var Cr = function() {
			return function e() {
				e.called = !0
			}
		};
		class Tr {
			constructor(e, t) {
				this.source = e, this.name = t, this.path = [], this.stop = Cr(), this.off = Cr()
			}
		}
		const Pr = {
			get(e) {
				return 'number' == typeof e ? e : this[e] || this.normal
			},
			highest: 1e5,
			high: 1e3,
			normal: 0,
			low: -1e3,
			lowest: -1e5
		};
		const Sr = Symbol('listeningTo'),
			Er = Symbol('emitterId'),
			Vr = {
				on(e, t, n = {}) {
					p(this, e);
					const o = g(this, e),
						a = Pr.get(n.priority);
					t = {
						callback: t,
						priority: a
					};
					for (const r of o) {
						let e = !1;
						for (let n = 0; n < r.length; n++)
							if (r[n].priority < a) {
								r.splice(n, 0, t), e = !0;
								break
							}
						e || r.push(t)
					}
				},
				once(e, t, n) {
					this.on(e, function(e, ...n) {
						e.off(), t.call(this, e, ...n)
					}, n)
				},
				off(e, t) {
					const n = g(this, e);
					for (const o of n)
						for (let e = 0; e < o.length; e++) o[e].callback == t && (o.splice(e, 1), e--)
				},
				listenTo(e, t, n, o) {
					let i, a;
					this[Sr] || (this[Sr] = {});
					const r = this[Sr];
					c(e) || d(e);
					const s = c(e);
					(i = r[s]) || (i = r[s] = {
						emitter: e,
						callbacks: {}
					}), (a = i.callbacks[t]) || (a = i.callbacks[t] = []), a.push(n), e.on(t, n, o)
				},
				stopListening(e, t, n) {
					const o = this[Sr];
					let i = e && c(e);
					const a = o && i && o[i],
						r = a && t && a.callbacks[t];
					if (o && (!e || a) && (!t || r))
						if (n) e.off(t, n);
						else if (r) {
						for (; n = r.pop();) e.off(t, n);
						delete a.callbacks[t]
					} else if (a) {
						for (t in a.callbacks) this.stopListening(e, t);
						delete o[i]
					} else {
						for (i in o) this.stopListening(o[i].emitter);
						delete this[Sr]
					}
				},
				fire(e, ...t) {
					const n = e instanceof Tr ? e : new Tr(this, e),
						o = n.name;
					let a = f(this, o);
					if (n.path.push(this), a) {
						const e = [n, ...t];
						a = Array.from(a);
						for (let t = 0; t < a.length && (a[t].callback.apply(this, e), n.off.called && (delete n.off.called, this.off(o, a[t].callback)), !n.stop.called); t++);
					}
					if (this._delegations) {
						const e = this._delegations.get(o),
							i = this._delegations.get('*');
						e && h(e, n, t), i && h(i, n, t)
					}
					return n.return
				},
				delegate(...e) {
					return {
						to: (t, n) => {
							this._delegations || (this._delegations = new Map);
							for (const o of e) {
								const e = this._delegations.get(o);
								e ? e.set(t, n) : this._delegations.set(o, new Map([
									[t, n]
								]))
							}
						}
					}
				},
				stopDelegating(e, t) {
					if (this._delegations)
						if (!e) this._delegations.clear();
						else if (!t) this._delegations.delete(e);
					else {
						const n = this._delegations.get(e);
						n && n.delete(t)
					}
				}
			};
		var Or = Vr,
			Rr = function(e, t) {
				return e === t || e !== e && t !== t
			},
			Fr = Object.prototype,
			Ir = Fr.hasOwnProperty,
			Nr = function(e, t, n) {
				var o = e[t];
				Ir.call(e, t) && Rr(o, n) && (n !== void 0 || t in e) || (e[t] = n)
			},
			Br = function(e, t, n, o) {
				n || (n = {});
				for (var i = -1, a = t.length; ++i < a;) {
					var r = t[i],
						s = o ? o(n[r], e[r], r, n, e) : e[r];
					Nr(n, r, s)
				}
				return n
			},
			Mr = function(e) {
				return function(t) {
					return null == t ? void 0 : t[e]
				}
			},
			Dr = Mr('length'),
			Lr = function(e) {
				var t = typeof e;
				return !!e && ('object' == t || 'function' == t)
			},
			zr = Object.prototype,
			jr = zr.toString,
			$r = function(e) {
				var t = Lr(e) ? jr.call(e) : '';
				return t == '[object Function]' || t == '[object GeneratorFunction]'
			},
			qr = function(e) {
				return 'number' == typeof e && -1 < e && 0 == e % 1 && e <= 9007199254740991
			},
			Hr = function(e) {
				return null != e && qr(Dr(e)) && !$r(e)
			},
			Wr = /^(?:0|[1-9]\d*)$/,
			Ur = function(e, t) {
				return t = null == t ? 9007199254740991 : t, !!t && ('number' == typeof e || Wr.test(e)) && -1 < e && 0 == e % 1 && e < t
			},
			Kr = function(e, t, n) {
				if (!Lr(n)) return !1;
				var o = typeof t;
				return !('number' == o ? !(Hr(n) && Ur(t, n.length)) : !('string' == o && t in n)) && Rr(n[t], e)
			},
			Qr = function(e, t, n) {
				var o = n.length;
				return 0 === o ? e.call(t) : 1 === o ? e.call(t, n[0]) : 2 === o ? e.call(t, n[0], n[1]) : 3 === o ? e.call(t, n[0], n[1], n[2]) : e.apply(t, n)
			},
			Jr = Object.prototype,
			Gr = Jr.toString,
			Yr = function(e) {
				return 'symbol' == typeof e || dr(e) && Gr.call(e) == '[object Symbol]'
			},
			Xr = 0 / 0,
			Zr = /^\s+|\s+$/g,
			es = /^[-+]0x[0-9a-f]+$/i,
			ts = /^0b[01]+$/i,
			ns = /^0o[0-7]+$/i,
			os = parseInt,
			is = function(e) {
				if ('number' == typeof e) return e;
				if (Yr(e)) return Xr;
				if (Lr(e)) {
					var t = $r(e.valueOf) ? e.valueOf() : e;
					e = Lr(t) ? t + '' : t
				}
				if ('string' != typeof e) return 0 === e ? e : +e;
				e = e.replace(Zr, '');
				var n = ts.test(e);
				return n || ns.test(e) ? os(e.slice(2), n ? 2 : 8) : es.test(e) ? Xr : +e
			},
			as = 1 / 0,
			rs = function(e) {
				if (!e) return 0 === e ? e : 0;
				if (e = is(e), e === as || e === -as) {
					var t = 0 > e ? -1 : 1;
					return t * 1.7976931348623157e308
				}
				return e === e ? e : 0
			},
			ss = function(e) {
				var t = rs(e),
					n = t % 1;
				return t === t ? n ? t - n : t : 0
			},
			ls = ir,
			ds = function(e, t) {
				if ('function' != typeof e) throw new TypeError('Expected a function');
				return t = ls(void 0 === t ? e.length - 1 : ss(t), 0),
					function() {
						for (var n = arguments, o = -1, i = ls(n.length - t, 0), a = Array(i); ++o < i;) a[o] = n[t + o];
						switch (t) {
							case 0:
								return e.call(this, a);
							case 1:
								return e.call(this, n[0], a);
							case 2:
								return e.call(this, n[0], n[1], a);
						}
						var r = Array(t + 1);
						for (o = -1; ++o < t;) r[o] = n[o];
						return r[t] = a, Qr(e, this, r)
					}
			},
			cs = Object.prototype,
			ms = function(e) {
				var t = e && e.constructor,
					n = 'function' == typeof t && t.prototype || cs;
				return e === n
			},
			us = n(2),
			ps = us.a.Reflect,
			gs = ps,
			fs = function(e) {
				for (var t = [], n; !(n = e.next()).done;) t.push(n.value);
				return t
			},
			hs = Object.prototype,
			bs = gs ? gs.enumerate : void 0,
			_s = hs.propertyIsEnumerable;
		bs && !_s.call({
			valueOf: 1
		}, 'valueOf') && (b = function(e) {
			return fs(bs(e))
		});
		var ks = b,
			ws = function(e, t) {
				for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
				return o
			},
			ys = function(e) {
				return dr(e) && Hr(e)
			},
			vs = Object.prototype,
			xs = vs.hasOwnProperty,
			As = vs.toString,
			Cs = vs.propertyIsEnumerable,
			Ts = function(e) {
				return ys(e) && xs.call(e, 'callee') && (!Cs.call(e, 'callee') || As.call(e) == '[object Arguments]')
			},
			Ps = Array.isArray,
			Ss = Ps,
			Es = Object.prototype,
			Vs = Es.toString,
			Os = function(e) {
				return 'string' == typeof e || !Ss(e) && dr(e) && Vs.call(e) == '[object String]'
			},
			Rs = function(e) {
				var t = e ? e.length : void 0;
				return qr(t) && (Ss(e) || Os(e) || Ts(e)) ? ws(t, String) : null
			},
			Fs = Object.prototype,
			Is = Fs.hasOwnProperty,
			Ns = function(e) {
				for (var t = -1, n = ms(e), o = ks(e), i = o.length, a = Rs(e), r = a || [], s = r.length; ++t < i;) {
					var l = o[t];
					!!a && ('length' == l || Ur(l, s)) || 'constructor' == l && (n || !Is.call(e, l)) || r.push(l)
				}
				return r
			},
			Bs = Object.prototype,
			Ms = Bs.propertyIsEnumerable,
			Ds = !Ms.call({
				valueOf: 1
			}, 'valueOf'),
			Ls = function(e) {
				return ds(function(t, n) {
					var o = -1,
						i = n.length,
						a = 1 < i ? n[i - 1] : void 0,
						r = 2 < i ? n[2] : void 0;
					for (a = 3 < e.length && 'function' == typeof a ? (i--, a) : void 0, r && Kr(n[0], n[1], r) && (a = 3 > i ? void 0 : a, i = 1), t = Object(t); ++o < i;) {
						var s = n[o];
						s && e(t, s, o, a)
					}
					return t
				})
			}(function(e, t) {
				if (Ds || ms(t) || Hr(t)) return void Br(t, Ns(t), e);
				for (var n in t) Nr(e, n, t[n])
			}),
			zs = Ls;
		const js = Symbol('attributes'),
			$s = Symbol('boundObservables'),
			qs = Symbol('boundAttributes'),
			Hs = {
				set(e, t) {
					if (Lr(e)) return void Object.keys(e).forEach((t) => {
						this.set(t, e[t])
					}, this);
					_(this);
					const n = this[js];
					if (e in this && !n.has(e)) throw new _r('observable-set-cannot-override: Cannot override an existing property.');
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						get() {
							return n.get(e)
						},
						set(t) {
							const o = n.get(e);
							o === t && n.has(e) || (n.set(e, t), this.fire('change:' + e, e, t, o))
						}
					}), this[e] = t
				},
				bind(...e) {
					if (!e.length || !w(e)) throw new _r('observable-bind-wrong-attrs: All attributes must be strings.');
					if (new Set(e).size !== e.length) throw new _r('observable-bind-duplicate-attrs: Attributes must be unique.');
					_(this);
					const t = this[qs];
					e.forEach((e) => {
						if (t.has(e)) throw new _r('observable-bind-rebind: Cannot bind the same attribute more that once.')
					});
					const n = new Map;
					return e.forEach((e) => {
						const o = {
							attr: e,
							to: []
						};
						t.set(e, o), n.set(e, o)
					}), {
						to: k,
						_observable: this,
						_bindAttrs: e,
						_to: [],
						_bindings: n
					}
				},
				unbind(...e) {
					if (!(js in this)) return;
					const t = this[qs],
						n = this[$s];
					if (e.length) {
						if (!w(e)) throw new _r('observable-unbind-wrong-attrs: Attributes must be strings.');
						e.forEach((e) => {
							const o = t.get(e);
							let i, a, r, s;
							o.to.forEach((e) => {
								i = e[0], a = e[1], r = n.get(i), s = r[a], s.delete(o), s.size || delete r[a], Object.keys(r).length || (n.delete(i), this.stopListening(i, 'change'))
							}), t.delete(e)
						})
					} else n.forEach((e, t) => {
						this.stopListening(t, 'change')
					}), n.clear(), t.clear()
				},
				decorate(e) {
					const t = this[e];
					if (!t) throw new _r('observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.', {
						object: this,
						methodName: e
					});
					this.on(e, (e, n) => {
						e.return = t.apply(this, n)
					}), this[e] = function(...t) {
						return this.fire(e, t)
					}
				}
			};
		var Ws = Hs;
		zs(Hs, Or);
		class Us {
			constructor(e) {
				this.parent = null, this._attrs = P(e)
			}
			get index() {
				let e;
				if (!this.parent) return null;
				if (null === (e = this.parent.getChildIndex(this))) throw new _r('model-node-not-found-in-parent: The node\'s parent does not contain this node.');
				return e
			}
			get startOffset() {
				let e;
				if (!this.parent) return null;
				if (null === (e = this.parent.getChildStartOffset(this))) throw new _r('model-node-not-found-in-parent: The node\'s parent does not contain this node.');
				return e
			}
			get offsetSize() {
				return 1
			}
			get endOffset() {
				return this.parent ? this.startOffset + this.offsetSize : null
			}
			get nextSibling() {
				const e = this.index;
				return null !== e && this.parent.getChild(e + 1) || null
			}
			get previousSibling() {
				const e = this.index;
				return null !== e && this.parent.getChild(e - 1) || null
			}
			get root() {
				let e = this;
				for (; e.parent;) e = e.parent;
				return e
			}
			get document() {
				return this.root == this ? null : this.root.document || null
			}
			clone() {
				return new Us(this._attrs)
			}
			getPath() {
				const e = [];
				for (let t = this; t.parent;) e.unshift(t.startOffset), t = t.parent;
				return e
			}
			getAncestors(e = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const t = [];
				for (let n = e.includeSelf ? this : this.parent; n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
				return t
			}
			getCommonAncestor(e, t = {}) {
				const n = this.getAncestors(t),
					o = e.getAncestors(t);
				let a = 0;
				for (; n[a] == o[a] && n[a];) a++;
				return 0 == a ? null : n[a - 1]
			}
			remove() {
				this.parent.removeChildren(this.index)
			}
			hasAttribute(e) {
				return this._attrs.has(e)
			}
			getAttribute(e) {
				return this._attrs.get(e)
			}
			getAttributes() {
				return this._attrs.entries()
			}
			getAttributeKeys() {
				return this._attrs.keys()
			}
			setAttribute(e, t) {
				this._attrs.set(e, t)
			}
			setAttributesTo(e) {
				this._attrs = P(e)
			}
			removeAttribute(e) {
				return this._attrs.delete(e)
			}
			clearAttributes() {
				this._attrs.clear()
			}
			toJSON() {
				const e = {};
				return this._attrs.size && (e.attributes = [...this._attrs]), e
			}
		}
		class Ks extends Us {
			constructor(e, t) {
				super(t), this.data = e || ''
			}
			get offsetSize() {
				return this.data.length
			}
			is(e) {
				return 'text' == e
			}
			clone() {
				return new Ks(this.data, this.getAttributes())
			}
			toJSON() {
				const e = super.toJSON();
				return e.data = this.data, e
			}
			static fromJSON(e) {
				return new Ks(e.data, e.attributes)
			}
		}
		class Qs {
			constructor(e, t, n) {
				if (this.textNode = e, 0 > t || t > e.offsetSize) throw new _r('model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');
				if (0 > n || t + n > e.offsetSize) throw new _r('model-textproxy-wrong-length: Given length value is incorrect.');
				this.data = e.data.substring(t, t + n), this.offsetInText = t
			}
			get startOffset() {
				return null === this.textNode.startOffset ? null : this.textNode.startOffset + this.offsetInText
			}
			get offsetSize() {
				return this.data.length
			}
			get endOffset() {
				return null === this.startOffset ? null : this.startOffset + this.offsetSize
			}
			get isPartial() {
				return this.offsetSize !== this.textNode.offsetSize
			}
			get parent() {
				return this.textNode.parent
			}
			get root() {
				return this.textNode.root
			}
			get document() {
				return this.textNode.document
			}
			is(e) {
				return 'textProxy' == e
			}
			getPath() {
				const e = this.textNode.getPath();
				return 0 < e.length && (e[e.length - 1] += this.offsetInText), e
			}
			getAncestors(e = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const t = [];
				for (let n = e.includeSelf ? this : this.parent; n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
				return t
			}
			hasAttribute(e) {
				return this.textNode.hasAttribute(e)
			}
			getAttribute(e) {
				return this.textNode.getAttribute(e)
			}
			getAttributes() {
				return this.textNode.getAttributes()
			}
			getAttributeKeys() {
				return this.textNode.getAttributeKeys()
			}
		}
		class Js {
			constructor(e) {
				this._nodes = [], e && this.insertNodes(0, e)
			}[Symbol.iterator]() {
				return this._nodes[Symbol.iterator]()
			}
			get length() {
				return this._nodes.length
			}
			get maxOffset() {
				return this._nodes.reduce((e, t) => e + t.offsetSize, 0)
			}
			getNode(e) {
				return this._nodes[e] || null
			}
			getNodeIndex(e) {
				const t = this._nodes.indexOf(e);
				return -1 == t ? null : t
			}
			getNodeStartOffset(e) {
				const t = this.getNodeIndex(e);
				return null === t ? null : this._nodes.slice(0, t).reduce((e, t) => e + t.offsetSize, 0)
			}
			indexToOffset(e) {
				if (e == this._nodes.length) return this.maxOffset;
				const t = this._nodes[e];
				if (!t) throw new _r('model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.');
				return this.getNodeStartOffset(t)
			}
			offsetToIndex(e) {
				let t = 0;
				for (const n of this._nodes) {
					if (e >= t && e < t + n.offsetSize) return this.getNodeIndex(n);
					t += n.offsetSize
				}
				if (t != e) throw new _r('model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.');
				return this.length
			}
			insertNodes(e, t) {
				for (const n of t)
					if (!(n instanceof Us)) throw new _r('model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.');
				this._nodes.splice(e, 0, ...t)
			}
			removeNodes(e, t = 1) {
				return this._nodes.splice(e, t)
			}
			toJSON() {
				return this._nodes.map((e) => e.toJSON())
			}
		}
		class Gs extends Us {
			constructor(e, t, n) {
				super(t), this.name = e, this._children = new Js, n && this.insertChildren(0, n)
			}
			get childCount() {
				return this._children.length
			}
			get maxOffset() {
				return this._children.maxOffset
			}
			get isEmpty() {
				return 0 === this.childCount
			}
			is(e, t = null) {
				return t ? 'element' == e && t == this.name : 'element' == e || e == this.name
			}
			getChild(e) {
				return this._children.getNode(e)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}
			getChildIndex(e) {
				return this._children.getNodeIndex(e)
			}
			getChildStartOffset(e) {
				return this._children.getNodeStartOffset(e)
			}
			clone(e = !1) {
				const t = e ? Array.from(this._children).map((e) => e.clone(!0)) : null;
				return new Gs(this.name, this.getAttributes(), t)
			}
			offsetToIndex(e) {
				return this._children.offsetToIndex(e)
			}
			appendChildren(e) {
				this.insertChildren(this.childCount, e)
			}
			insertChildren(e, t) {
				t = E(t);
				for (const n of t) null !== n.parent && n.remove(), n.parent = this;
				this._children.insertNodes(e, t)
			}
			removeChildren(e, t = 1) {
				const n = this._children.removeNodes(e, t);
				for (const o of n) o.parent = null;
				return n
			}
			getNodeByPath(e) {
				let t = this;
				for (const n of e) t = t.getChild(t.offsetToIndex(n));
				return t
			}
			toJSON() {
				const e = super.toJSON();
				if (e.name = this.name, 0 < this._children.length) {
					e.children = [];
					for (const t of this._children) e.children.push(t.toJSON())
				}
				return e
			}
			static fromJSON(e) {
				let t = null;
				if (e.children) {
					t = [];
					for (const n of e.children) n.name ? t.push(Gs.fromJSON(n)) : t.push(Ks.fromJSON(n))
				}
				return new Gs(e.name, e.attributes, t)
			}
		}
		class Ys {
			constructor(e = {}) {
				if (!e.boundaries && !e.startPosition) throw new _r('model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');
				const t = e.direction || 'forward';
				if ('forward' != t && 'backward' != t) throw new _r('model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.', {
					direction: t
				});
				this.direction = t, this.boundaries = e.boundaries || null, this.position = e.startPosition ? Zs.createFromPosition(e.startPosition) : Zs.createFromPosition(this.boundaries['backward' == this.direction ? 'end' : 'start']), this.singleCharacters = !!e.singleCharacters, this.shallow = !!e.shallow, this.ignoreElementEnd = !!e.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null, this._visitedParent = this.position.parent
			}[Symbol.iterator]() {
				return this
			}
			skip(e) {
				let t, n, o, i;
				do o = this.position, i = this._visitedParent, ({
					done: t,
					value: n
				} = this.next()); while (!t && e(n));
				t || (this.position = o, this._visitedParent = i)
			}
			next() {
				return 'forward' == this.direction ? this._next() : this._previous()
			}
			_next() {
				const e = this.position,
					t = Zs.createFromPosition(this.position),
					n = this._visitedParent;
				if (null === n.parent && t.offset === n.maxOffset) return {
					done: !0
				};
				if (n === this._boundaryEndParent && t.offset == this.boundaries.end.offset) return {
					done: !0
				};
				const o = t.textNode ? t.textNode : t.nodeAfter;
				if (o instanceof Gs) return this.shallow ? t.offset++ : (t.path.push(0), this._visitedParent = o), this.position = t, V('elementStart', o, e, t, 1);
				if (o instanceof Ks) {
					let i;
					if (this.singleCharacters) i = 1;
					else {
						let e = o.endOffset;
						this._boundaryEndParent == n && this.boundaries.end.offset < e && (e = this.boundaries.end.offset), i = e - t.offset
					}
					const a = t.offset - o.startOffset,
						r = new Qs(o, a, i);
					return t.offset += i, this.position = t, V('text', r, e, t, i)
				}
				return t.path.pop(), t.offset++, this.position = t, this._visitedParent = n.parent, this.ignoreElementEnd ? this._next() : V('elementEnd', n, e, t)
			}
			_previous() {
				const e = this.position,
					t = Zs.createFromPosition(this.position),
					n = this._visitedParent;
				if (null === n.parent && 0 === t.offset) return {
					done: !0
				};
				if (n == this._boundaryStartParent && t.offset == this.boundaries.start.offset) return {
					done: !0
				};
				const o = t.textNode ? t.textNode : t.nodeBefore;
				if (o instanceof Gs) return t.offset--, this.shallow ? (this.position = t, V('elementStart', o, e, t, 1)) : (t.path.push(o.maxOffset), this.position = t, this._visitedParent = o, this.ignoreElementEnd ? this._previous() : V('elementEnd', o, e, t));
				if (o instanceof Ks) {
					let i;
					if (this.singleCharacters) i = 1;
					else {
						let e = o.startOffset;
						this._boundaryStartParent == n && this.boundaries.start.offset > e && (e = this.boundaries.start.offset), i = t.offset - e
					}
					const a = t.offset - o.startOffset,
						r = new Qs(o, a - i, i);
					return t.offset -= i, this.position = t, V('text', r, e, t, i)
				}
				return t.path.pop(), this.position = t, this._visitedParent = n.parent, V('elementStart', n, e, t, 1)
			}
		}
		var Xs = function(e) {
			var t = e ? e.length : 0;
			return t ? e[t - 1] : void 0
		};
		class Zs {
			constructor(e, t) {
				if (!e.is('element') && !e.is('documentFragment')) throw new _r('model-position-root-invalid: Position root invalid.');
				if (!(t instanceof Array) || 0 === t.length) throw new _r('model-position-path-incorrect: Position path must be an array with at least one item.', {
					path: t
				});
				t = e.getPath().concat(t), e = e.root, this.root = e, this.path = t
			}
			get offset() {
				return Xs(this.path)
			}
			set offset(e) {
				this.path[this.path.length - 1] = e
			}
			get parent() {
				let e = this.root;
				for (let t = 0; t < this.path.length - 1; t++) e = e.getChild(e.offsetToIndex(this.path[t]));
				return e
			}
			get index() {
				return this.parent.offsetToIndex(this.offset)
			}
			get textNode() {
				const e = this.parent.getChild(this.index);
				return e instanceof Ks && e.startOffset < this.offset ? e : null
			}
			get nodeAfter() {
				return null === this.textNode ? this.parent.getChild(this.index) : null
			}
			get nodeBefore() {
				return null === this.textNode ? this.parent.getChild(this.index - 1) : null
			}
			get isAtStart() {
				return 0 === this.offset
			}
			get isAtEnd() {
				return this.offset == this.parent.maxOffset
			}
			compareWith(e) {
				if (this.root != e.root) return 'different';
				const t = O(this.path, e.path);
				return 'same' === t ? 'same' : 'prefix' === t ? 'before' : 'extension' === t ? 'after' : this.path[t] < e.path[t] ? 'before' : 'after'
			}
			getLastMatchingPosition(e, t = {}) {
				t.startPosition = this;
				const n = new Ys(t);
				return n.skip(e), n.position
			}
			getParentPath() {
				return this.path.slice(0, -1)
			}
			getAncestors() {
				return this.parent.is('documentFragment') ? [this.parent] : this.parent.getAncestors({
					includeSelf: !0
				})
			}
			getCommonPath(e) {
				if (this.root != e.root) return [];
				const t = O(this.path, e.path),
					n = 'string' == typeof t ? or(this.path.length, e.path.length) : t;
				return this.path.slice(0, n)
			}
			getCommonAncestor(e) {
				const t = this.getAncestors(),
					n = e.getAncestors();
				let o = 0;
				for (; t[o] == n[o] && t[o];) o++;
				return 0 == o ? null : t[o - 1]
			}
			getShiftedBy(e) {
				const t = Zs.createFromPosition(this),
					n = t.offset + e;
				return t.offset = 0 > n ? 0 : n, t
			}
			isAfter(e) {
				return 'after' == this.compareWith(e)
			}
			isBefore(e) {
				return 'before' == this.compareWith(e)
			}
			isEqual(e) {
				return 'same' == this.compareWith(e)
			}
			isTouching(e) {
				let t = null,
					n = null;
				const o = this.compareWith(e);
				switch (o) {
					case 'same':
						return !0;
					case 'before':
						t = Zs.createFromPosition(this), n = Zs.createFromPosition(e);
						break;
					case 'after':
						t = Zs.createFromPosition(e), n = Zs.createFromPosition(this);
						break;
					default:
						return !1;
				}
				for (let o = t.parent; t.path.length + n.path.length;) {
					if (t.isEqual(n)) return !0;
					if (t.path.length > n.path.length) {
						if (t.offset !== o.maxOffset) return !1;
						t.path = t.path.slice(0, -1), o = o.parent, t.offset++
					} else {
						if (0 !== n.offset) return !1;
						n.path = n.path.slice(0, -1)
					}
				}
			}
			_getTransformedByDeletion(e, t) {
				const n = Zs.createFromPosition(this);
				if (this.root != e.root) return n;
				if ('same' == O(e.getParentPath(), this.getParentPath())) {
					if (e.offset < this.offset) {
						if (e.offset + t > this.offset) return null;
						n.offset -= t
					}
				} else if ('prefix' == O(e.getParentPath(), this.getParentPath())) {
					const o = e.path.length - 1;
					if (e.offset <= this.path[o]) {
						if (e.offset + t > this.path[o]) return null;
						n.path[o] -= t
					}
				}
				return n
			}
			_getTransformedByInsertion(e, t, n) {
				const o = Zs.createFromPosition(this);
				if (this.root != e.root) return o;
				if ('same' == O(e.getParentPath(), this.getParentPath()))(e.offset < this.offset || e.offset == this.offset && n) && (o.offset += t);
				else if ('prefix' == O(e.getParentPath(), this.getParentPath())) {
					const n = e.path.length - 1;
					e.offset <= this.path[n] && (o.path[n] += t)
				}
				return o
			}
			_getTransformedByMove(e, t, n, o, i) {
				let a = this._getTransformedByDeletion(e, n);
				return t = t._getTransformedByDeletion(e, n), a = null === a || i && a.isEqual(e) ? this._getCombined(e, t) : a._getTransformedByInsertion(t, n, o), a
			}
			_getCombined(e, t) {
				const n = e.path.length - 1,
					o = Zs.createFromPosition(t);
				return o.offset = o.offset + this.path[n] - e.offset, o.path = o.path.concat(this.path.slice(n + 1)), o
			}
			static createAt(e, t) {
				if (e instanceof Zs) return this.createFromPosition(e);
				else {
					const n = e;
					if ('end' == t) t = n.maxOffset;
					else {
						if ('before' == t) return this.createBefore(n);
						if ('after' == t) return this.createAfter(n);
						t || (t = 0)
					}
					return this.createFromParentAndOffset(n, t)
				}
			}
			static createAfter(e) {
				if (!e.parent) throw new _r('model-position-after-root: You cannot make a position after root.', {
					root: e
				});
				return this.createFromParentAndOffset(e.parent, e.endOffset)
			}
			static createBefore(e) {
				if (!e.parent) throw new _r('model-position-before-root: You cannot make a position before root.', {
					root: e
				});
				return this.createFromParentAndOffset(e.parent, e.startOffset)
			}
			static createFromParentAndOffset(e, t) {
				if (!e.is('element') && !e.is('documentFragment')) throw new _r('model-position-parent-incorrect: Position parent have to be a element or document fragment.');
				const n = e.getPath();
				return n.push(t), new this(e.root, n)
			}
			static createFromPosition(e) {
				return new this(e.root, e.path.slice())
			}
			static fromJSON(e, t) {
				if ('$graveyard' === e.root) return new Zs(t.graveyard, e.path);
				if (!t.hasRoot(e.root)) throw new _r('model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.', {
					rootName: e.root
				});
				return new Zs(t.getRoot(e.root), e.path)
			}
		}
		class el {
			constructor(e, t = null) {
				this.start = Zs.createFromPosition(e), this.end = t ? Zs.createFromPosition(t) : Zs.createFromPosition(e)
			}*[Symbol.iterator]() {
				yield* new Ys({
					boundaries: this,
					ignoreElementEnd: !0
				})
			}
			get isCollapsed() {
				return this.start.isEqual(this.end)
			}
			get isFlat() {
				return this.start.parent === this.end.parent
			}
			get root() {
				return this.start.root
			}
			containsPosition(e) {
				return e.isAfter(this.start) && e.isBefore(this.end)
			}
			containsRange(e, t = !1) {
				e.isCollapsed && (t = !1);
				const n = this.containsPosition(e.start) || t && this.start.isEqual(e.start),
					o = this.containsPosition(e.end) || t && this.end.isEqual(e.end);
				return n && o
			}
			containsItem(e) {
				const t = Zs.createBefore(e);
				return this.containsPosition(t) || this.start.isEqual(t)
			}
			isEqual(e) {
				return this.start.isEqual(e.start) && this.end.isEqual(e.end)
			}
			isIntersecting(e) {
				return this.start.isBefore(e.end) && this.end.isAfter(e.start)
			}
			getDifference(e) {
				const t = [];
				return this.isIntersecting(e) ? (this.containsPosition(e.start) && t.push(new el(this.start, e.start)), this.containsPosition(e.end) && t.push(new el(e.end, this.end))) : t.push(el.createFromRange(this)), t
			}
			getIntersection(e) {
				if (this.isIntersecting(e)) {
					let t = this.start,
						n = this.end;
					return this.containsPosition(e.start) && (t = e.start), this.containsPosition(e.end) && (n = e.end), new el(t, n)
				}
				return null
			}
			getMinimalFlatRanges() {
				const e = [],
					t = this.start.getCommonPath(this.end).length,
					n = Zs.createFromPosition(this.start);
				for (let o = n.parent; n.path.length > t + 1;) {
					const t = o.maxOffset - n.offset;
					0 != t && e.push(new el(n, n.getShiftedBy(t))), n.path = n.path.slice(0, -1), n.offset++, o = o.parent
				}
				for (; n.path.length <= this.end.path.length;) {
					const t = this.end.path[n.path.length - 1],
						o = t - n.offset;
					0 != o && e.push(new el(n, n.getShiftedBy(o))), n.offset = t, n.path.push(0)
				}
				return e
			}
			getWalker(e = {}) {
				return e.boundaries = this, new Ys(e)
			}* getItems(e = {}) {
				e.boundaries = this, e.ignoreElementEnd = !0;
				const t = new Ys(e);
				for (const n of t) yield n.item
			}* getPositions(e = {}) {
				e.boundaries = this;
				const t = new Ys(e);
				yield t.position;
				for (const n of t) yield n.nextPosition
			}
			getTransformedByDelta(e) {
				const t = [el.createFromRange(this)],
					n = new Set(['insert', 'move', 'remove', 'reinsert']);
				for (const o of e.operations)
					if (n.has(o.type))
						for (let n = 0; n < t.length; n++) {
							const i = t[n]._getTransformedByDocumentChange(o.type, e.type, o.targetPosition || o.position, o.howMany || o.nodes.maxOffset, o.sourcePosition);
							t.splice(n, 1, ...i), n += i.length - 1
						}
				return t
			}
			getTransformedByDeltas(e) {
				const t = [el.createFromRange(this)];
				for (const n of e)
					for (let e = 0; e < t.length; e++) {
						const o = t[e].getTransformedByDelta(n);
						t.splice(e, 1, ...o), e += o.length - 1
					}
				for (let n = 0; n < t.length; n++) {
					const e = t[n];
					for (let o = n + 1; o < t.length; o++) {
						const n = t[o];
						(e.containsRange(n) || n.containsRange(e) || e.isEqual(n)) && t.splice(o, 1)
					}
				}
				return t
			}
			getCommonAncestor() {
				return this.start.getCommonAncestor(this.end)
			}
			_getTransformedByDocumentChange(e, t, n, o, i) {
				if ('insert' == e) return this._getTransformedByInsertion(n, o, !1, !1);
				else {
					const e = el.createFromPositionAndShift(i, o);
					if ('merge' == t && this.isCollapsed && (this.start.isEqual(e.start) || this.start.isEqual(e.end))) {
						const t = this.start.offset - e.start.offset;
						return [new el(n.getShiftedBy(t))]
					}
					if ('split' == t && this.isCollapsed && this.end.isEqual(e.end)) return [new el(n.getShiftedBy(o))];
					if ((e.containsPosition(this.start) || e.start.isEqual(this.start)) && this.containsPosition(e.end) && this.end.isAfter(n)) {
						const e = this.start._getCombined(i, n._getTransformedByDeletion(i, o)),
							t = this.end._getTransformedByMove(i, n, o, !1, !1);
						return [new el(e, t)]
					}
					if ((e.containsPosition(this.end) || e.end.isEqual(this.end)) && this.containsPosition(e.start) && this.start.isBefore(n)) {
						const e = this.start._getTransformedByMove(i, n, o, !0, !1),
							t = this.end._getCombined(i, n._getTransformedByDeletion(i, o));
						return [new el(e, t)]
					}
					return this._getTransformedByMove(i, n, o)
				}
			}
			_getTransformedByInsertion(e, t, n = !1, o = !1) {
				if (n && this.containsPosition(e)) return [new el(this.start, e), new el(e._getTransformedByInsertion(e, t, !0), this.end._getTransformedByInsertion(e, t, this.isCollapsed))];
				else {
					const n = el.createFromRange(this),
						i = !!n.isCollapsed || o;
					return n.start = n.start._getTransformedByInsertion(e, t, !o), n.end = n.end._getTransformedByInsertion(e, t, i), [n]
				}
			}
			_getTransformedByMove(e, t, n) {
				if (this.isCollapsed) {
					const o = this.start._getTransformedByMove(e, t, n, !0, !1);
					return [new el(o)]
				}
				let o;
				const i = new el(e, e.getShiftedBy(n)),
					a = this.getDifference(i);
				let r = null;
				const s = this.getIntersection(i);
				1 == a.length ? r = new el(a[0].start._getTransformedByDeletion(e, n), a[0].end._getTransformedByDeletion(e, n)) : 2 == a.length && (r = new el(this.start, this.end._getTransformedByDeletion(e, n)));
				const l = t._getTransformedByDeletion(e, n);
				return o = r ? r._getTransformedByInsertion(l, n, null !== s) : [], s && o.push(new el(s.start._getCombined(i.start, l), s.end._getCombined(i.start, l))), o
			}
			static createFromPositionAndShift(e, t) {
				const n = e,
					o = e.getShiftedBy(t);
				return 0 < t ? new this(n, o) : new this(o, n)
			}
			static createFromParentsAndOffsets(e, t, n, o) {
				return new this(Zs.createFromParentAndOffset(e, t), Zs.createFromParentAndOffset(n, o))
			}
			static createFromRange(e) {
				return new this(e.start, e.end)
			}
			static createIn(e) {
				return this.createFromParentsAndOffsets(e, 0, e, e.maxOffset)
			}
			static createOn(e) {
				return this.createFromPositionAndShift(Zs.createBefore(e), e.offsetSize)
			}
			static createCollapsedAt(e, t) {
				const n = Zs.createAt(e, t),
					o = Zs.createFromPosition(n);
				return new el(n, o)
			}
			static createFromRanges(e) {
				if (0 === e.length) throw new _r('range-create-from-ranges-empty-array: At least one range has to be passed.');
				else if (1 == e.length) return this.createFromRange(e[0]);
				const t = e[0];
				e.sort((e, t) => e.start.isAfter(t.start) ? 1 : -1);
				const n = e.indexOf(t),
					o = new this(t.start, t.end);
				for (let t = n - 1; 0 <= t && e[t].end.isEqual(o.start); t++) o.start = Zs.createFromPosition(e[t].start);
				for (let t = n + 1; t < e.length && e[t].start.isEqual(o.end); t++) o.end = Zs.createFromPosition(e[t].end);
				return o
			}
			static fromJSON(e, t) {
				return new this(Zs.fromJSON(e.start, t), Zs.fromJSON(e.end, t))
			}
		}
		var tl = function(e, t) {
				for (var n = e.length; n--;)
					if (Rr(e[n][0], t)) return n;
				return -1
			},
			nl = Array.prototype,
			ol = nl.splice;
		R.prototype.clear = function() {
			this.__data__ = []
		}, R.prototype['delete'] = function(e) {
			var t = this.__data__,
				n = tl(t, e);
			if (0 > n) return !1;
			var o = t.length - 1;
			return n == o ? t.pop() : ol.call(t, n, 1), !0
		}, R.prototype.get = function(e) {
			var t = this.__data__,
				n = tl(t, e);
			return 0 > n ? void 0 : t[n][1]
		}, R.prototype.has = function(e) {
			return -1 < tl(this.__data__, e)
		}, R.prototype.set = function(e, t) {
			var n = this.__data__,
				o = tl(n, e);
			return 0 > o ? n.push([e, t]) : n[o][1] = t, this
		};
		var il = R,
			al = Function.prototype.toString,
			rl = function(e) {
				if (null != e) {
					try {
						return al.call(e)
					} catch (t) {}
					try {
						return e + ''
					} catch (t) {}
				}
				return ''
			},
			sl = /[\\^$.*+?()[\]{}|]/g,
			ll = /^\[object .+?Constructor\]$/,
			dl = Object.prototype,
			cl = Function.prototype.toString,
			ml = dl.hasOwnProperty,
			ul = RegExp('^' + cl.call(ml).replace(sl, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'),
			pl = function(e) {
				if (!Lr(e)) return !1;
				var t = $r(e) || lr(e) ? ul : ll;
				return t.test(rl(e))
			},
			gl = function(e, t) {
				var n = e[t];
				return pl(n) ? n : void 0
			},
			fl = gl(Object, 'create'),
			hl = fl,
			bl = Object.prototype,
			_l = bl.hasOwnProperty,
			kl = Object.prototype,
			wl = kl.hasOwnProperty;
		F.prototype.clear = function() {
			this.__data__ = hl ? hl(null) : {}
		}, F.prototype['delete'] = function(e) {
			return this.has(e) && delete this.__data__[e]
		}, F.prototype.get = function(e) {
			var t = this.__data__;
			if (hl) {
				var n = t[e];
				return n === '__lodash_hash_undefined__' ? void 0 : n
			}
			return _l.call(t, e) ? t[e] : void 0
		}, F.prototype.has = function(e) {
			var t = this.__data__;
			return hl ? t[e] !== void 0 : wl.call(t, e)
		}, F.prototype.set = function(e, t) {
			var n = this.__data__;
			return n[e] = hl && void 0 === t ? '__lodash_hash_undefined__' : t, this
		};
		var yl = F,
			vl = gl(us.a, 'Map'),
			xl = vl,
			Al = function(e) {
				var t = typeof e;
				return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e
			},
			Cl = function(e, t) {
				var n = e.__data__;
				return Al(t) ? n['string' == typeof t ? 'string' : 'hash'] : n.map
			};
		I.prototype.clear = function() {
			this.__data__ = {
				hash: new yl,
				map: new(xl || il),
				string: new yl
			}
		}, I.prototype['delete'] = function(e) {
			return Cl(this, e)['delete'](e)
		}, I.prototype.get = function(e) {
			return Cl(this, e).get(e)
		}, I.prototype.has = function(e) {
			return Cl(this, e).has(e)
		}, I.prototype.set = function(e, t) {
			return Cl(this, e).set(e, t), this
		};
		var Tl = I;
		N.prototype.clear = function() {
			this.__data__ = new il
		}, N.prototype['delete'] = function(e) {
			return this.__data__['delete'](e)
		}, N.prototype.get = function(e) {
			return this.__data__.get(e)
		}, N.prototype.has = function(e) {
			return this.__data__.has(e)
		}, N.prototype.set = function(e, t) {
			var n = this.__data__;
			return n instanceof il && n.__data__.length == 200 && (n = this.__data__ = new Tl(n.__data__)), n.set(e, t), this
		};
		var Pl = N,
			Sl = function(e, t) {
				for (var n = -1, o = e.length; ++n < o && !(!1 === t(e[n], n, e)););
				return e
			},
			El = Object.prototype,
			Vl = El.hasOwnProperty,
			Ol = function(e, t) {
				return Vl.call(e, t) || 'object' == typeof e && t in e && null === sr(e)
			},
			Rl = Object.keys,
			Fl = function(e) {
				return Rl(Object(e))
			},
			Il = function(e) {
				var t = ms(e);
				if (!(t || Hr(e))) return Fl(e);
				var n = Rs(e),
					o = n || [],
					i = o.length;
				for (var a in e) !Ol(e, a) || !!n && ('length' == a || Ur(a, i)) || t && 'constructor' == a || o.push(a);
				return o
			},
			Nl = function(e, t) {
				return e && Br(t, Il(t), e)
			},
			Bl = function(e, t) {
				if (t) return e.slice();
				var n = new e.constructor(e.length);
				return e.copy(n), n
			},
			Ml = function(e, t) {
				var n = -1,
					o = e.length;
				for (t || (t = Array(o)); ++n < o;) t[n] = e[n];
				return t
			},
			Dl = Object.getOwnPropertySymbols;
		Dl || (B = function() {
			return []
		});
		var Ll = B,
			zl = function(e, t) {
				return Br(e, Ll(e), t)
			},
			jl = function(e, t) {
				for (var n = -1, o = t.length, i = e.length; ++n < o;) e[i + n] = t[n];
				return e
			},
			$l = function(e, t, n) {
				var o = t(e);
				return Ss(e) ? o : jl(o, n(e))
			},
			ql = function(e) {
				return $l(e, Il, Ll)
			},
			Hl = gl(us.a, 'DataView'),
			Wl = Hl,
			Ul = gl(us.a, 'Promise'),
			Kl = Ul,
			Ql = gl(us.a, 'Set'),
			Jl = Ql,
			Gl = gl(us.a, 'WeakMap'),
			Yl = Gl,
			Xl = '[object Map]',
			Zl = '[object Promise]',
			ed = '[object Set]',
			td = '[object WeakMap]',
			nd = '[object DataView]',
			od = Object.prototype,
			id = od.toString,
			ad = rl(Wl),
			rd = rl(xl),
			sd = rl(Kl),
			ld = rl(Jl),
			dd = rl(Yl);
		(Wl && M(new Wl(new ArrayBuffer(1))) != nd || xl && M(new xl) != Xl || Kl && M(Kl.resolve()) != Zl || Jl && M(new Jl) != ed || Yl && M(new Yl) != td) && (M = function(e) {
			var t = id.call(e),
				n = t == '[object Object]' ? e.constructor : void 0,
				o = n ? rl(n) : void 0;
			if (o) switch (o) {
				case ad:
					return nd;
				case rd:
					return Xl;
				case sd:
					return Zl;
				case ld:
					return ed;
				case dd:
					return td;
			}
			return t
		});
		var cd = M,
			md = Object.prototype,
			ud = md.hasOwnProperty,
			pd = function(e) {
				var t = e.length,
					n = e.constructor(t);
				return t && 'string' == typeof e[0] && ud.call(e, 'index') && (n.index = e.index, n.input = e.input), n
			},
			gd = us.a.Uint8Array,
			fd = gd,
			hd = function(e) {
				var t = new e.constructor(e.byteLength);
				return new fd(t).set(new fd(e)), t
			},
			bd = function(e, t) {
				var n = t ? hd(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.byteLength)
			},
			_d = function(e, t) {
				return e.set(t[0], t[1]), e
			},
			kd = function(e, t, n, o) {
				var i = -1,
					a = e.length;
				for (o && a && (n = e[++i]); ++i < a;) n = t(n, e[i], i, e);
				return n
			},
			wd = function(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach(function(e, o) {
					n[++t] = [o, e]
				}), n
			},
			yd = function(e, t, n) {
				var o = t ? n(wd(e), !0) : wd(e);
				return kd(o, _d, new e.constructor)
			},
			vd = /\w*$/,
			xd = function(e) {
				var t = new e.constructor(e.source, vd.exec(e));
				return t.lastIndex = e.lastIndex, t
			},
			Ad = function(e, t) {
				return e.add(t), e
			},
			Cd = function(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach(function(e) {
					n[++t] = e
				}), n
			},
			Td = function(e, t, n) {
				var o = t ? n(Cd(e), !0) : Cd(e);
				return kd(o, Ad, new e.constructor)
			},
			Pd = us.a.Symbol,
			Sd = Pd,
			Ed = Sd ? Sd.prototype : void 0,
			Vd = Ed ? Ed.valueOf : void 0,
			Od = function(e) {
				return Vd ? Object(Vd.call(e)) : {}
			},
			Rd = function(e, t) {
				var n = t ? hd(e.buffer) : e.buffer;
				return new e.constructor(n, e.byteOffset, e.length)
			},
			Fd = function(e, t, n, o) {
				var i = e.constructor;
				return t === '[object ArrayBuffer]' ? hd(e) : t === '[object Boolean]' || t === '[object Date]' ? new i(+e) : t === '[object DataView]' ? bd(e, o) : t === '[object Float32Array]' || t === '[object Float64Array]' || t === '[object Int8Array]' || t === '[object Int16Array]' || t === '[object Int32Array]' || t === '[object Uint8Array]' || t === '[object Uint8ClampedArray]' || t === '[object Uint16Array]' || t === '[object Uint32Array]' ? Rd(e, o) : t === '[object Map]' ? yd(e, o, n) : t === '[object Number]' || t === '[object String]' ? new i(e) : t === '[object RegExp]' ? xd(e) : t === '[object Set]' ? Td(e, o, n) : t === '[object Symbol]' ? Od(e) : void 0
			},
			Id = Object.create,
			Nd = function(e) {
				return Lr(e) ? Id(e) : {}
			},
			Bd = function(e) {
				return 'function' != typeof e.constructor || ms(e) ? {} : Nd(sr(e))
			},
			Md = n(7),
			Dd = '[object Arguments]',
			Ld = '[object Function]',
			zd = '[object GeneratorFunction]',
			jd = '[object Object]',
			$d = {};
		$d[Dd] = $d['[object Array]'] = $d['[object ArrayBuffer]'] = $d['[object DataView]'] = $d['[object Boolean]'] = $d['[object Date]'] = $d['[object Float32Array]'] = $d['[object Float64Array]'] = $d['[object Int8Array]'] = $d['[object Int16Array]'] = $d['[object Int32Array]'] = $d['[object Map]'] = $d['[object Number]'] = $d[jd] = $d['[object RegExp]'] = $d['[object Set]'] = $d['[object String]'] = $d['[object Symbol]'] = $d['[object Uint8Array]'] = $d['[object Uint8ClampedArray]'] = $d['[object Uint16Array]'] = $d['[object Uint32Array]'] = !0, $d['[object Error]'] = $d[Ld] = $d['[object WeakMap]'] = !1;
		var qd = D,
			Hd = function(e) {
				return qd(e, !1, !0)
			};
		class Wd {
			constructor() {
				this.parent = null
			}
			get index() {
				let e;
				if (!this.parent) return null;
				if (-1 == (e = this.parent.getChildIndex(this))) throw new _r('view-node-not-found-in-parent: The node\'s parent does not contain this node.');
				return e
			}
			get nextSibling() {
				const e = this.index;
				return null !== e && this.parent.getChild(e + 1) || null
			}
			get previousSibling() {
				const e = this.index;
				return null !== e && this.parent.getChild(e - 1) || null
			}
			get root() {
				let e = this;
				for (; e.parent;) e = e.parent;
				return e
			}
			get document() {
				return this.parent instanceof Wd ? this.parent.document : null
			}
			getAncestors(e = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const t = [];
				for (let n = e.includeSelf ? this : this.parent; n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
				return t
			}
			getCommonAncestor(e, t = {}) {
				const n = this.getAncestors(t),
					o = e.getAncestors(t);
				let a = 0;
				for (; n[a] == o[a] && n[a];) a++;
				return 0 == a ? null : n[a - 1]
			}
			remove() {
				this.parent.removeChildren(this.index)
			}
			_fireChange(e, t) {
				this.fire('change:' + e, t), this.parent && this.parent._fireChange(e, t)
			}
			toJSON() {
				const e = Hd(this);
				return delete e.parent, e
			}
		}
		r(Wd, Or);
		class Ud extends Wd {
			constructor(e) {
				super(), this._data = e
			}
			clone() {
				return new Ud(this.data)
			}
			is(e) {
				return 'text' == e
			}
			get data() {
				return this._data
			}
			set data(e) {
				this._fireChange('text', this), this._data = e
			}
			isSimilar(e) {
				return !!(e instanceof Ud) && (this === e || this.data === e.data)
			}
		}
		class Kd {
			constructor(...e) {
				this._patterns = [], this.add(...e)
			}
			add(...e) {
				for (let t of e)('string' == typeof t || t instanceof RegExp) && (t = {
					name: t
				}), t.class && ('string' == typeof t.class || t.class instanceof RegExp) && (t.class = [t.class]), this._patterns.push(t)
			}
			match(...e) {
				for (const t of e)
					for (const e of this._patterns) {
						const n = L(t, e);
						if (n) return {
							element: t,
							pattern: e,
							match: n
						}
					}
				return null
			}
			matchAll(...e) {
				const t = [];
				for (const n of e)
					for (const e of this._patterns) {
						const o = L(n, e);
						o && t.push({
							element: n,
							pattern: e,
							match: o
						})
					}
				return 0 < t.length ? t : null
			}
			getElementName() {
				if (1 !== this._patterns.length) return null;
				const e = this._patterns[0],
					t = e.name;
				return 'function' != typeof e && t && !(t instanceof RegExp) ? t : null
			}
		}
		class Qd extends Wd {
			constructor(e, t, n) {
				if (super(), this.name = e, this._attrs = fr(t) ? T(t) : new Map(t), this._children = [], n && this.insertChildren(0, n), this._classes = new Set, this._attrs.has('class')) {
					const e = this._attrs.get('class');
					W(this._classes, e), this._attrs.delete('class')
				}
				this._styles = new Map, this._attrs.has('style') && (H(this._styles, this._attrs.get('style')), this._attrs.delete('style')), this._customProperties = new Map
			}
			get childCount() {
				return this._children.length
			}
			get isEmpty() {
				return 0 === this._children.length
			}
			is(e, t = null) {
				return t ? 'element' == e && t == this.name : 'element' == e || e == this.name
			}
			clone(e = !1) {
				const t = [];
				if (e)
					for (const n of this.getChildren()) t.push(n.clone(e));
				const n = new this.constructor(this.name, this._attrs, t);
				return n._classes = new Set(this._classes), n._styles = new Map(this._styles), n._customProperties = new Map(this._customProperties), n.getFillerOffset = this.getFillerOffset, n
			}
			appendChildren(e) {
				return this.insertChildren(this.childCount, e)
			}
			getChild(e) {
				return this._children[e]
			}
			getChildIndex(e) {
				return this._children.indexOf(e)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}* getAttributeKeys() {
				0 < this._classes.size && (yield 'class'), 0 < this._styles.size && (yield 'style');
				for (const e of this._attrs.keys()) yield e
			}* getAttributes() {
				yield* this._attrs.entries(), 0 < this._classes.size && (yield ['class', this.getAttribute('class')]), 0 < this._styles.size && (yield ['style', this.getAttribute('style')])
			}
			getAttribute(e) {
				if ('class' == e) return 0 < this._classes.size ? [...this._classes].join(' ') : void 0;
				if ('style' == e) {
					if (0 < this._styles.size) {
						let e = '';
						for (const [t, n] of this._styles) e += `${t}:${n};`;
						return e
					}
					return
				}
				return this._attrs.get(e)
			}
			hasAttribute(e) {
				return 'class' == e ? 0 < this._classes.size : 'style' == e ? 0 < this._styles.size : this._attrs.has(e)
			}
			setAttribute(e, t) {
				this._fireChange('attributes', this), 'class' == e ? W(this._classes, t) : 'style' == e ? H(this._styles, t) : this._attrs.set(e, t)
			}
			insertChildren(e, t) {
				this._fireChange('children', this);
				let n = 0;
				t = U(t);
				for (const o of t) null !== o.parent && o.remove(), o.parent = this, this._children.splice(e, 0, o), e++, n++;
				return n
			}
			removeAttribute(e) {
				return this._fireChange('attributes', this), 'class' == e ? !!(0 < this._classes.size) && (this._classes.clear(), !0) : 'style' == e ? !!(0 < this._styles.size) && (this._styles.clear(), !0) : this._attrs.delete(e)
			}
			removeChildren(e, t = 1) {
				this._fireChange('children', this);
				for (let n = e; n < e + t; n++) this._children[n].parent = null;
				return this._children.splice(e, t)
			}
			isSimilar(e) {
				if (!(e instanceof Qd)) return !1;
				if (this === e) return !0;
				if (this.name != e.name) return !1;
				if (this._attrs.size !== e._attrs.size || this._classes.size !== e._classes.size || this._styles.size !== e._styles.size) return !1;
				for (const [t, n] of this._attrs)
					if (!e._attrs.has(t) || e._attrs.get(t) !== n) return !1;
				for (const t of this._classes)
					if (!e._classes.has(t)) return !1;
				for (const [t, n] of this._styles)
					if (!e._styles.has(t) || e._styles.get(t) !== n) return !1;
				return !0
			}
			addClass(...e) {
				this._fireChange('attributes', this), e.forEach((e) => this._classes.add(e))
			}
			removeClass(...e) {
				this._fireChange('attributes', this), e.forEach((e) => this._classes.delete(e))
			}
			hasClass(...e) {
				for (const t of e)
					if (!this._classes.has(t)) return !1;
				return !0
			}
			getClassNames() {
				return this._classes.keys()
			}
			setStyle(e, t) {
				if (this._fireChange('attributes', this), fr(e)) {
					const t = Object.keys(e);
					for (const n of t) this._styles.set(n, e[n])
				} else this._styles.set(e, t)
			}
			getStyle(e) {
				return this._styles.get(e)
			}
			getStyleNames() {
				return this._styles.keys()
			}
			hasStyle(...e) {
				for (const t of e)
					if (!this._styles.has(t)) return !1;
				return !0
			}
			removeStyle(...e) {
				this._fireChange('attributes', this), e.forEach((e) => this._styles.delete(e))
			}
			findAncestor(...e) {
				const t = new Kd(...e);
				for (let n = this.parent; n;) {
					if (t.match(n)) return n;
					n = n.parent
				}
				return null
			}
			setCustomProperty(e, t) {
				this._customProperties.set(e, t)
			}
			getCustomProperty(e) {
				return this._customProperties.get(e)
			}
			removeCustomProperty(e) {
				return this._customProperties.delete(e)
			}* getCustomProperties() {
				yield* this._customProperties.entries()
			}
			getIdentity() {
				const e = Array.from(this._classes).sort().join(','),
					t = Array.from(this._styles).map((e) => `${e[0]}:${e[1]}`).sort().join(';'),
					n = Array.from(this._attrs).map((e) => `${e[0]}="${e[1]}"`).sort().join(' ');
				return this.name + ('' == e ? '' : ` class="${e}"`) + ('' == t ? '' : ` style="${t}"`) + ('' == n ? '' : ` ${n}`)
			}
		}
		class Jd {
			constructor(e, t, n) {
				if (this.textNode = e, 0 > t || t > e.data.length) throw new _r('view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.');
				if (0 > n || t + n > e.data.length) throw new _r('view-textproxy-wrong-length: Given length value is incorrect.');
				this.data = e.data.substring(t, t + n), this.offsetInText = t
			}
			get isPartial() {
				return this.data.length !== this.textNode.data.length
			}
			get parent() {
				return this.textNode.parent
			}
			get root() {
				return this.textNode.root
			}
			get document() {
				return this.textNode.document
			}
			is(e) {
				return 'textProxy' == e
			}
			getAncestors(e = {
				includeSelf: !1,
				parentFirst: !1
			}) {
				const t = [];
				for (let n = e.includeSelf ? this.textNode : this.parent; null !== n;) t[e.parentFirst ? 'push' : 'unshift'](n), n = n.parent;
				return t
			}
		}
		class Gd {
			constructor(e = {}) {
				if (!e.boundaries && !e.startPosition) throw new _r('view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.');
				if (e.direction && 'forward' != e.direction && 'backward' != e.direction) throw new _r('view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.', {
					direction: e.direction
				});
				this.boundaries = e.boundaries || null, this.position = e.startPosition ? ec.createFromPosition(e.startPosition) : ec.createFromPosition(e.boundaries['backward' == e.direction ? 'end' : 'start']), this.direction = e.direction || 'forward', this.singleCharacters = !!e.singleCharacters, this.shallow = !!e.shallow, this.ignoreElementEnd = !!e.ignoreElementEnd, this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null, this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null
			}[Symbol.iterator]() {
				return this
			}
			skip(e) {
				let t, n, o;
				do o = this.position, ({
					done: t,
					value: n
				} = this.next()); while (!t && e(n));
				t || (this.position = o)
			}
			next() {
				return 'forward' == this.direction ? this._next() : this._previous()
			}
			_next() {
				let e = ec.createFromPosition(this.position);
				const t = this.position,
					n = e.parent;
				if (null === n.parent && e.offset === n.childCount) return {
					done: !0
				};
				if (n === this._boundaryEndParent && e.offset == this.boundaries.end.offset) return {
					done: !0
				};
				let o;
				if (n instanceof Ud) {
					if (e.isAtEnd) return this.position = ec.createAfter(n), this._next();
					o = n.data[e.offset]
				} else o = n.getChild(e.offset);
				if (o instanceof Qd) return this.shallow ? e.offset++ : e = new ec(o, 0), this.position = e, this._formatReturnValue('elementStart', o, t, e, 1);
				if (!(o instanceof Ud)) {
					if ('string' == typeof o) {
						let o;
						if (this.singleCharacters) o = 1;
						else {
							const t = n === this._boundaryEndParent ? this.boundaries.end.offset : n.data.length;
							o = t - e.offset
						}
						const i = new Jd(n, e.offset, o);
						return e.offset += o, this.position = e, this._formatReturnValue('text', i, t, e, o)
					}
					return e = ec.createAfter(n), this.position = e, this.ignoreElementEnd ? this._next() : this._formatReturnValue('elementEnd', n, t, e)
				}
				if (this.singleCharacters) return e = new ec(o, 0), this.position = e, this._next();
				else {
					let n = o.data.length,
						i = o;
					return o == this._boundaryEndParent ? (n = this.boundaries.end.offset, i = new Jd(o, 0, n), e = ec.createAfter(i)) : e.offset++, this.position = e, this._formatReturnValue('text', i, t, e, n)
				}
			}
			_previous() {
				let e = ec.createFromPosition(this.position);
				const t = this.position,
					n = e.parent;
				if (null === n.parent && 0 === e.offset) return {
					done: !0
				};
				if (n == this._boundaryStartParent && e.offset == this.boundaries.start.offset) return {
					done: !0
				};
				let o;
				if (n instanceof Ud) {
					if (e.isAtStart) return this.position = ec.createBefore(n), this._previous();
					o = n.data[e.offset - 1]
				} else o = n.getChild(e.offset - 1);
				if (o instanceof Qd) return this.shallow ? (e.offset--, this.position = e, this._formatReturnValue('elementStart', o, t, e, 1)) : (e = new ec(o, o.childCount), this.position = e, this.ignoreElementEnd ? this._previous() : this._formatReturnValue('elementEnd', o, t, e));
				if (!(o instanceof Ud)) {
					if ('string' == typeof o) {
						let o;
						if (!this.singleCharacters) {
							const t = n === this._boundaryStartParent ? this.boundaries.start.offset : 0;
							o = e.offset - t
						} else o = 1;
						e.offset -= o;
						const i = new Jd(n, e.offset, o);
						return this.position = e, this._formatReturnValue('text', i, t, e, o)
					}
					return e = ec.createBefore(n), this.position = e, this._formatReturnValue('elementStart', n, t, e, 1)
				}
				if (this.singleCharacters) return e = new ec(o, o.data.length), this.position = e, this._previous();
				else {
					let n = o.data.length,
						i = o;
					if (o == this._boundaryStartParent) {
						const t = this.boundaries.start.offset;
						i = new Jd(o, t, o.data.length - t), n = i.data.length, e = ec.createBefore(i)
					} else e.offset--;
					return this.position = e, this._formatReturnValue('text', i, t, e, n)
				}
			}
			_formatReturnValue(e, t, n, o, i) {
				return t instanceof Jd && (t.offsetInText + t.data.length == t.textNode.data.length && ('forward' != this.direction || this.boundaries && this.boundaries.end.isEqual(this.position) ? n = ec.createAfter(t.textNode) : (o = ec.createAfter(t.textNode), this.position = o)), 0 === t.offsetInText && ('backward' != this.direction || this.boundaries && this.boundaries.start.isEqual(this.position) ? n = ec.createBefore(t.textNode) : (o = ec.createBefore(t.textNode), this.position = o))), {
					done: !1,
					value: {
						type: e,
						item: t,
						previousPosition: n,
						nextPosition: o,
						length: i
					}
				}
			}
		}
		class Yd extends Qd {
			constructor(e, t, n) {
				super(e, t, n), this.getFillerOffset = K
			}
			is(e, t = null) {
				return t ? 'containerElement' == e && t == this.name || super.is(e, t) : 'containerElement' == e || super.is(e)
			}
		}
		const Xd = Symbol('document');
		class Zd extends Yd {
			constructor(e, t, n) {
				super(e, t, n), this.set('isReadOnly', !1), this.set('isFocused', !1)
			}
			get document() {
				return this.getCustomProperty(Xd)
			}
			set document(e) {
				if (this.getCustomProperty(Xd)) throw new _r('view-editableelement-document-already-set: View document is already set.');
				this.setCustomProperty(Xd, e), this.bind('isReadOnly').to(e), this.bind('isFocused').to(e, 'isFocused', (t) => t && e.selection.editableElement == this), this.listenTo(e, 'render', () => {
					this.isFocused = e.isFocused && e.selection.editableElement == this
				}, {
					priority: 'high'
				})
			}
		}
		r(Zd, Ws);
		class ec {
			constructor(e, t) {
				this.parent = e, this.offset = t
			}
			get nodeAfter() {
				return this.parent.is('text') ? null : this.parent.getChild(this.offset) || null
			}
			get nodeBefore() {
				return this.parent.is('text') ? null : this.parent.getChild(this.offset - 1) || null
			}
			get isAtStart() {
				return 0 === this.offset
			}
			get isAtEnd() {
				const e = this.parent.is('text') ? this.parent.data.length : this.parent.childCount;
				return this.offset === e
			}
			get root() {
				return this.parent.root
			}
			get editableElement() {
				let e = this.parent;
				for (; !(e instanceof Zd);)
					if (e.parent) e = e.parent;
					else return null;
				return e
			}
			getShiftedBy(e) {
				const t = ec.createFromPosition(this),
					n = t.offset + e;
				return t.offset = 0 > n ? 0 : n, t
			}
			getLastMatchingPosition(e, t = {}) {
				t.startPosition = this;
				const n = new Gd(t);
				return n.skip(e), n.position
			}
			getAncestors() {
				return this.parent.is('documentFragment') ? [this.parent] : this.parent.getAncestors({
					includeSelf: !0
				})
			}
			getCommonAncestor(e) {
				const t = this.getAncestors(),
					n = e.getAncestors();
				let o = 0;
				for (; t[o] == n[o] && t[o];) o++;
				return 0 == o ? null : t[o - 1]
			}
			isEqual(e) {
				return this.parent == e.parent && this.offset == e.offset
			}
			isBefore(e) {
				return 'before' == this.compareWith(e)
			}
			isAfter(e) {
				return 'after' == this.compareWith(e)
			}
			compareWith(e) {
				if (this.isEqual(e)) return 'same';
				if (this.parent === e.parent) return 0 > this.offset - e.offset ? 'before' : 'after';
				const t = this.getAncestors(),
					n = e.getAncestors(),
					o = O(t, n);
				let i;
				switch (o) {
					case 0:
						return 'different';
					case 'prefix':
						i = t.length - 1;
						break;
					case 'extension':
						i = n.length - 1;
						break;
					default:
						i = o - 1;
				}
				const a = t[i],
					r = t[i + 1],
					s = n[i + 1];
				if (a === this.parent) {
					const e = this.offset - s.index;
					return 0 >= e ? 'before' : 'after'
				}
				if (a === e.parent) {
					const t = r.index - e.offset;
					return 0 > t ? 'before' : 'after'
				}
				const l = r.index - s.index;
				return 0 > l ? 'before' : 'after'
			}
			static createAt(e, t) {
				if (e instanceof ec) return this.createFromPosition(e);
				else {
					const n = e;
					if ('end' == t) t = n.is('text') ? n.data.length : n.childCount;
					else {
						if ('before' == t) return this.createBefore(n);
						if ('after' == t) return this.createAfter(n);
						t || (t = 0)
					}
					return new ec(n, t)
				}
			}
			static createAfter(e) {
				if (e.is('textProxy')) return new ec(e.textNode, e.offsetInText + e.data.length);
				if (!e.parent) throw new _r('view-position-after-root: You can not make position after root.', {
					root: e
				});
				return new ec(e.parent, e.index + 1)
			}
			static createBefore(e) {
				if (e.is('textProxy')) return new ec(e.textNode, e.offsetInText);
				if (!e.parent) throw new _r('view-position-before-root: You can not make position before root.', {
					root: e
				});
				return new ec(e.parent, e.index)
			}
			static createFromPosition(e) {
				return new this(e.parent, e.offset)
			}
		}
		class tc {
			constructor(e, t = null) {
				this.start = ec.createFromPosition(e), this.end = t ? ec.createFromPosition(t) : ec.createFromPosition(e)
			}*[Symbol.iterator]() {
				yield* new Gd({
					boundaries: this,
					ignoreElementEnd: !0
				})
			}
			get isCollapsed() {
				return this.start.isEqual(this.end)
			}
			get isFlat() {
				return this.start.parent === this.end.parent
			}
			get root() {
				return this.start.root
			}
			getEnlarged() {
				let e = this.start.getLastMatchingPosition(Q, {
						direction: 'backward'
					}),
					t = this.end.getLastMatchingPosition(Q);
				return e.parent.is('text') && e.isAtStart && (e = ec.createBefore(e.parent)), t.parent.is('text') && t.isAtEnd && (t = ec.createAfter(t.parent)), new tc(e, t)
			}
			getTrimmed() {
				let e = this.start.getLastMatchingPosition(Q);
				if (e.isAfter(this.end) || e.isEqual(this.end)) return new tc(e, e);
				let t = this.end.getLastMatchingPosition(Q, {
					direction: 'backward'
				});
				const n = e.nodeAfter,
					o = t.nodeBefore;
				return n && n.is('text') && (e = new ec(n, 0)), o && o.is('text') && (t = new ec(o, o.data.length)), new tc(e, t)
			}
			isEqual(e) {
				return this == e || this.start.isEqual(e.start) && this.end.isEqual(e.end)
			}
			containsPosition(e) {
				return e.isAfter(this.start) && e.isBefore(this.end)
			}
			containsRange(e, t = !1) {
				e.isCollapsed && (t = !1);
				const n = this.containsPosition(e.start) || t && this.start.isEqual(e.start),
					o = this.containsPosition(e.end) || t && this.end.isEqual(e.end);
				return n && o
			}
			getDifference(e) {
				const t = [];
				return this.isIntersecting(e) ? (this.containsPosition(e.start) && t.push(new tc(this.start, e.start)), this.containsPosition(e.end) && t.push(new tc(e.end, this.end))) : t.push(tc.createFromRange(this)), t
			}
			getIntersection(e) {
				if (this.isIntersecting(e)) {
					let t = this.start,
						n = this.end;
					return this.containsPosition(e.start) && (t = e.start), this.containsPosition(e.end) && (n = e.end), new tc(t, n)
				}
				return null
			}
			getWalker(e = {}) {
				return e.boundaries = this, new Gd(e)
			}
			getCommonAncestor() {
				return this.start.getCommonAncestor(this.end)
			}* getItems(e = {}) {
				e.boundaries = this, e.ignoreElementEnd = !0;
				const t = new Gd(e);
				for (const n of t) yield n.item
			}* getPositions(e = {}) {
				e.boundaries = this;
				const t = new Gd(e);
				yield t.position;
				for (const n of t) yield n.nextPosition
			}
			isIntersecting(e) {
				return this.start.isBefore(e.end) && this.end.isAfter(e.start)
			}
			static createFromParentsAndOffsets(e, t, n, o) {
				return new this(new ec(e, t), new ec(n, o))
			}
			static createFromRange(e) {
				return new this(e.start, e.end)
			}
			static createFromPositionAndShift(e, t) {
				const n = e,
					o = e.getShiftedBy(t);
				return 0 < t ? new this(n, o) : new this(o, n)
			}
			static createIn(e) {
				return this.createFromParentsAndOffsets(e, 0, e, e.childCount)
			}
			static createOn(e) {
				return this.createFromPositionAndShift(ec.createBefore(e), 1)
			}
			static createCollapsedAt(e, t) {
				const n = ec.createAt(e, t),
					o = ec.createFromPosition(n);
				return new tc(n, o)
			}
		}
		class nc {
			constructor() {
				this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap, this._viewToModelLengthCallbacks = new Map, this.on('modelToViewPosition', (e, t) => {
					if (!t.viewPosition) {
						const e = this._modelToViewMapping.get(t.modelPosition.parent);
						t.viewPosition = this._findPositionIn(e, t.modelPosition.offset)
					}
				}, {
					priority: 'low'
				}), this.on('viewToModelPosition', (e, t) => {
					if (t.modelPosition) return;
					let n = t.viewPosition.parent,
						o = this._viewToModelMapping.get(n);
					for (; !o;) n = n.parent, o = this._viewToModelMapping.get(n);
					const i = this._toModelOffset(t.viewPosition.parent, t.viewPosition.offset, n);
					t.modelPosition = Zs.createFromParentAndOffset(o, i)
				}, {
					priority: 'low'
				})
			}
			bindElements(e, t) {
				this._modelToViewMapping.set(e, t), this._viewToModelMapping.set(t, e)
			}
			unbindViewElement(e) {
				const t = this.toModelElement(e);
				this._unbindElements(t, e)
			}
			unbindModelElement(e) {
				const t = this.toViewElement(e);
				this._unbindElements(e, t)
			}
			clearBindings() {
				this._modelToViewMapping = new WeakMap, this._viewToModelMapping = new WeakMap
			}
			toModelElement(e) {
				return this._viewToModelMapping.get(e)
			}
			toViewElement(e) {
				return this._modelToViewMapping.get(e)
			}
			toModelRange(e) {
				return new el(this.toModelPosition(e.start), this.toModelPosition(e.end))
			}
			toViewRange(e) {
				return new tc(this.toViewPosition(e.start), this.toViewPosition(e.end))
			}
			toModelPosition(e) {
				const t = {
					viewPosition: e,
					mapper: this
				};
				return this.fire('viewToModelPosition', t), t.modelPosition
			}
			toViewPosition(e) {
				const t = {
					modelPosition: e,
					mapper: this
				};
				return this.fire('modelToViewPosition', t), t.viewPosition
			}
			registerViewToModelLength(e, t) {
				this._viewToModelLengthCallbacks.set(e, t)
			}
			_toModelOffset(e, t, n) {
				if (n != e) {
					const o = this._toModelOffset(e.parent, e.index, n),
						i = this._toModelOffset(e, t, e);
					return o + i
				}
				if (e.is('text')) return t;
				let o = 0;
				for (let a = 0; a < t; a++) o += this.getModelLength(e.getChild(a));
				return o
			}
			_unbindElements(e, t) {
				this._viewToModelMapping.delete(t), this._modelToViewMapping.delete(e)
			}
			getModelLength(e) {
				if (this._viewToModelLengthCallbacks.get(e.name)) {
					const t = this._viewToModelLengthCallbacks.get(e.name);
					return t(e)
				}
				if (this._viewToModelMapping.has(e)) return 1;
				if (e.is('text')) return e.data.length;
				if (e.is('uiElement')) return 0;
				else {
					let t = 0;
					for (const n of e.getChildren()) t += this.getModelLength(n);
					return t
				}
			}
			_findPositionIn(e, t) {
				let n = 0,
					o = 0,
					i = 0,
					a;
				if (e.is('text')) return new ec(e, t);
				for (; o < t;) a = e.getChild(i), n = this.getModelLength(a), o += n, i++;
				return o == t ? this._moveViewPositionToTextNode(new ec(e, i)) : this._findPositionIn(a, t - (o - n))
			}
			_moveViewPositionToTextNode(e) {
				const t = e.nodeBefore,
					n = e.nodeAfter;
				if (t instanceof Ud) return new ec(t, t.data.length);
				return n instanceof Ud ? new ec(n, 0) : e
			}
		}
		r(nc, Or);
		class oc {
			constructor() {
				this._consumable = new Map, this._textProxyRegistry = new Map
			}
			add(e, t) {
				e instanceof Qs && (e = this._getSymbolForTextProxy(e)), this._consumable.has(e) || this._consumable.set(e, new Map), this._consumable.get(e).set(t, !0)
			}
			consume(e, t) {
				return e instanceof Qs && (e = this._getSymbolForTextProxy(e)), !!this.test(e, t) && (this._consumable.get(e).set(t, !1), !0)
			}
			test(e, t) {
				e instanceof Qs && (e = this._getSymbolForTextProxy(e));
				const n = this._consumable.get(e);
				if (n === void 0) return null;
				const o = n.get(t);
				return void 0 === o ? null : o
			}
			revert(e, t) {
				e instanceof Qs && (e = this._getSymbolForTextProxy(e));
				const n = this.test(e, t);
				return !1 === n ? (this._consumable.get(e).set(t, !0), !0) : !0 !== n && null
			}
			_getSymbolForTextProxy(e) {
				let t = null;
				const n = this._textProxyRegistry.get(e.startOffset);
				if (n) {
					const o = n.get(e.endOffset);
					o && (t = o.get(e.parent))
				}
				return t || (t = this._addSymbolForTextProxy(e.startOffset, e.endOffset, e.parent)), t
			}
			_addSymbolForTextProxy(e, t, n) {
				const o = Symbol('textProxySymbol');
				let i, a;
				return i = this._textProxyRegistry.get(e), i || (i = new Map, this._textProxyRegistry.set(e, i)), a = i.get(t), a || (a = new Map, i.set(t, a)), a.set(n, o), o
			}
		}
		class ic {
			constructor(e) {
				this.markers = new Map, this._children = new Js, e && this.insertChildren(0, e)
			}[Symbol.iterator]() {
				return this.getChildren()
			}
			get childCount() {
				return this._children.length
			}
			get maxOffset() {
				return this._children.maxOffset
			}
			get isEmpty() {
				return 0 === this.childCount
			}
			get root() {
				return this
			}
			get parent() {
				return null
			}
			is(e) {
				return 'documentFragment' == e
			}
			getChild(e) {
				return this._children.getNode(e)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}
			getChildIndex(e) {
				return this._children.getNodeIndex(e)
			}
			getChildStartOffset(e) {
				return this._children.getNodeStartOffset(e)
			}
			getPath() {
				return []
			}
			getNodeByPath(e) {
				let t = this;
				for (const n of e) t = t.getChild(t.offsetToIndex(n));
				return t
			}
			offsetToIndex(e) {
				return this._children.offsetToIndex(e)
			}
			appendChildren(e) {
				this.insertChildren(this.childCount, e)
			}
			insertChildren(e, t) {
				t = J(t);
				for (const n of t) null !== n.parent && n.remove(), n.parent = this;
				this._children.insertNodes(e, t)
			}
			removeChildren(e, t = 1) {
				const n = this._children.removeNodes(e, t);
				for (const o of n) o.parent = null;
				return n
			}
			toJSON() {
				const e = [];
				for (const t of this._children) e.push(t.toJSON());
				return e
			}
			static fromJSON(e) {
				const t = [];
				for (const n of e) n.name ? t.push(Gs.fromJSON(n)) : t.push(Ks.fromJSON(n));
				return new ic(t)
			}
		}
		class ac {
			constructor(e, t = {}) {
				this._modelDocument = e, this.conversionApi = zs({
					dispatcher: this
				}, t)
			}
			convertChange(e, t) {
				'remove' !== e && t.range && '$graveyard' == t.range.root.rootName || 'remove' == e && '$graveyard' == t.sourcePosition.root.rootName || 'rename' == e && '$graveyard' == t.element.root.rootName || ('insert' == e || 'reinsert' == e ? this.convertInsertion(t.range) : 'move' == e ? this.convertMove(t.sourcePosition, t.range) : 'remove' == e ? this.convertRemove(t.sourcePosition, t.range) : 'addAttribute' == e || 'removeAttribute' == e || 'changeAttribute' == e ? this.convertAttribute(e, t.range, t.key, t.oldValue, t.newValue) : 'rename' == e && this.convertRename(t.element, t.oldName))
			}
			convertInsertion(e) {
				const t = this._createInsertConsumable(e);
				for (const n of e) {
					const e = n.item,
						o = el.createFromPositionAndShift(n.previousPosition, n.length),
						i = {
							item: e,
							range: o
						};
					this._testAndFire('insert', i, t);
					for (const n of e.getAttributeKeys()) i.attributeKey = n, i.attributeOldValue = null, i.attributeNewValue = e.getAttribute(n), this._testAndFire(`addAttribute:${n}`, i, t)
				}
				for (const t of this._modelDocument.markers) {
					const n = t.getRange(),
						o = n.getIntersection(e);
					o && G(e.start, t, this.conversionApi.mapper) && this.convertMarker('addMarker', t.name, o)
				}
			}
			convertMove(e, t) {
				if (t.start.isBefore(e)) {
					this.convertInsertion(t);
					const n = e._getTransformedByInsertion(t.start, t.end.offset - t.start.offset);
					this.convertRemove(n, t)
				} else this.convertRemove(e, t), this.convertInsertion(t)
			}
			convertRemove(e, t) {
				const n = this._createConsumableForRange(t, 'remove');
				for (const o of t.getItems({
						shallow: !0
					})) {
					this._testAndFire('remove', {
						sourcePosition: e,
						item: o
					}, n)
				}
			}
			convertAttribute(e, t, n, o, i) {
				if (o != i) {
					const a = this._createConsumableForRange(t, e + ':' + n);
					for (const r of t) {
						const t = r.item,
							s = el.createFromPositionAndShift(r.previousPosition, r.length);
						this._testAndFire(`${e}:${n}`, {
							item: t,
							range: s,
							attributeKey: n,
							attributeOldValue: o,
							attributeNewValue: i
						}, a)
					}
				}
			}
			convertRename(e, t) {
				if (e.name != t) {
					const n = e.clone(!0);
					n.name = t, this.conversionApi.mapper.bindElements(n, this.conversionApi.mapper.toViewElement(e));
					const o = new ic;
					o.appendChildren(n), this.convertRemove(Zs.createBefore(e), el.createOn(n)), this.convertInsertion(el.createOn(e))
				}
			}
			convertSelection(e) {
				const t = Array.from(this._modelDocument.markers.getMarkersAtPosition(e.getFirstPosition())),
					n = this._createSelectionConsumable(e, t);
				this.fire('selection', {
					selection: e
				}, n, this.conversionApi);
				for (const o of t) {
					const t = o.getRange();
					if (!G(e.getFirstPosition(), o, this.conversionApi.mapper)) continue;
					const i = {
						selection: e,
						markerName: o.name,
						markerRange: t
					};
					n.test(e, 'selectionMarker:' + o.name) && this.fire('selectionMarker:' + o.name, i, n, this.conversionApi)
				}
				for (const t of e.getAttributeKeys()) {
					const o = {
						selection: e,
						key: t,
						value: e.getAttribute(t)
					};
					n.test(e, 'selectionAttribute:' + o.key) && this.fire('selectionAttribute:' + o.key, o, n, this.conversionApi)
				}
			}
			convertMarker(e, t, n) {
				if (n.root.document && '$graveyard' != n.root.rootName) {
					const o = e + ':' + t;
					if (n.isCollapsed) {
						const e = new oc;
						return e.add(n, o), void this.fire(o, {
							markerName: t,
							markerRange: n
						}, e, this.conversionApi)
					}
					const i = this._createConsumableForRange(n, o);
					for (const e of n) {
						const a = e.item;
						if (!i.test(a, o)) continue;
						const r = {
							item: a,
							range: el.createFromPositionAndShift(e.previousPosition, e.length),
							markerName: t,
							markerRange: n
						};
						this.fire(o, r, i, this.conversionApi)
					}
				}
			}
			_createInsertConsumable(e) {
				const t = new oc;
				for (const n of e) {
					const e = n.item;
					t.add(e, 'insert');
					for (const n of e.getAttributeKeys()) t.add(e, 'addAttribute:' + n)
				}
				return t
			}
			_createConsumableForRange(e, t) {
				const n = new oc;
				for (const o of e.getItems()) n.add(o, t);
				return n
			}
			_createSelectionConsumable(e, t) {
				const n = new oc;
				n.add(e, 'selection');
				for (const o of t) n.add(e, 'selectionMarker:' + o.name);
				for (const o of e.getAttributeKeys()) n.add(e, 'selectionAttribute:' + o);
				return n
			}
			_testAndFire(e, t, n) {
				if (n.test(t.item, e)) {
					const o = t.item.name || '$text';
					this.fire(e + ':' + o, t, n, this.conversionApi)
				}
			}
		}
		r(ac, Or);
		const rc = 10;
		class sc extends Qd {
			constructor(e, t, n) {
				super(e, t, n), this.priority = rc, this.getFillerOffset = Y
			}
			is(e, t = null) {
				return t ? 'attributeElement' == e && t == this.name || super.is(e, t) : 'attributeElement' == e || super.is(e)
			}
			clone(e) {
				const t = super.clone(e);
				return t.priority = this.priority, t
			}
			isSimilar(e) {
				return super.isSimilar(e) && this.priority == e.priority
			}
		}
		sc.DEFAULT_PRIORITY = rc;
		class lc extends Qd {
			constructor(e, t, n) {
				super(e, t, n), this.getFillerOffset = Z
			}
			is(e, t = null) {
				return t ? 'emptyElement' == e && t == this.name || super.is(e, t) : 'emptyElement' == e || super.is(e)
			}
			insertChildren(e, t) {
				if (t && (t instanceof Wd || 0 < Array.from(t).length)) throw new _r('view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.')
			}
		}
		const dc = navigator.userAgent.toLowerCase(),
			cc = {
				mac: function(e) {
					return -1 < e.indexOf('macintosh')
				}(dc)
			};
		var mc = cc;
		const uc = function() {
			const e = {
				arrowleft: 37,
				arrowup: 38,
				arrowright: 39,
				arrowdown: 40,
				backspace: 8,
				delete: 46,
				enter: 13,
				space: 32,
				esc: 27,
				tab: 9,
				ctrl: 1114112,
				cmd: 1114112,
				shift: 2228224,
				alt: 4456448
			};
			for (let t = 65; 90 >= t; t++) {
				const n = String.fromCharCode(t);
				e[n.toLowerCase()] = t
			}
			for (let t = 48; 57 >= t; t++) e[t - 48] = t;
			for (let t = 112; 123 >= t; t++) e['f' + (t - 111)] = t;
			return e
		}();
		class pc extends Qd {
			constructor(e, t, n) {
				super(e, t, n), this.getFillerOffset = ae
			}
			is(e, t = null) {
				return t ? 'uiElement' == e && t == this.name || super.is(e, t) : 'uiElement' == e || super.is(e)
			}
			insertChildren(e, t) {
				if (t && (t instanceof Wd || 0 < Array.from(t).length)) throw new _r('view-uielement-cannot-add: Cannot add child nodes to UIElement instance.')
			}
			render(e) {
				const t = e.createElement(this.name);
				for (const n of this.getAttributeKeys()) t.setAttribute(n, this.getAttribute(n));
				return t
			}
		}
		class gc {
			constructor(e) {
				this._children = [], e && this.insertChildren(0, e)
			}[Symbol.iterator]() {
				return this._children[Symbol.iterator]()
			}
			get childCount() {
				return this._children.length
			}
			get isEmpty() {
				return 0 === this.childCount
			}
			get root() {
				return this
			}
			get parent() {
				return null
			}
			is(e) {
				return 'documentFragment' == e
			}
			appendChildren(e) {
				return this.insertChildren(this.childCount, e)
			}
			getChild(e) {
				return this._children[e]
			}
			getChildIndex(e) {
				return this._children.indexOf(e)
			}
			getChildren() {
				return this._children[Symbol.iterator]()
			}
			insertChildren(e, t) {
				this._fireChange('children', this);
				let n = 0;
				t = se(t);
				for (const o of t) null !== o.parent && o.remove(), o.parent = this, this._children.splice(e, 0, o), e++, n++;
				return n
			}
			removeChildren(e, t = 1) {
				this._fireChange('children', this);
				for (let n = e; n < e + t; n++) this._children[n].parent = null;
				return this._children.splice(e, t)
			}
			_fireChange(e, t) {
				this.fire('change:' + e, t)
			}
		}
		r(gc, Or);
		var fc = {
			breakAttributes: function(e) {
				return e instanceof ec ? fe(e) : ge(e)
			},
			breakContainer: function(e) {
				const t = e.parent;
				if (!t.is('containerElement')) throw new _r('view-writer-break-non-container-element: Trying to break an element which is not a container element.');
				if (!t.parent) throw new _r('view-writer-break-root: Trying to break root element.');
				if (e.isAtStart) return ec.createBefore(t);
				if (!e.isAtEnd) {
					const n = t.clone(!1);
					de(ec.createAfter(t), n);
					const o = new tc(e, ec.createAt(t, 'end')),
						i = new ec(n, 0);
					me(o, i)
				}
				return ec.createAfter(t)
			},
			mergeAttributes: le,
			mergeContainers: function(e) {
				const t = e.nodeBefore,
					n = e.nodeAfter;
				if (!t || !n || !t.is('containerElement') || !n.is('containerElement')) throw new _r('view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.');
				const o = t.getChild(t.childCount - 1),
					i = o instanceof Ud ? ec.createAt(o, 'end') : ec.createAt(t, 'end');
				return me(tc.createIn(n), ec.createAt(t, 'end')), ce(tc.createOn(n)), i
			},
			insert: de,
			remove: ce,
			clear: function(e, t) {
				Pe(e);
				const n = e.getWalker({
					direction: 'backward',
					ignoreElementEnd: !0
				});
				for (const o of n) {
					const n = o.item;
					let i;
					if (n.is('element') && t.isSimilar(n)) i = tc.createOn(n);
					else if (!o.nextPosition.isAfter(e.start) && (n.is('text') || n.is('textProxy'))) {
						const e = n.getAncestors().find((e) => e.is('element') && t.isSimilar(e));
						e && (i = tc.createIn(e))
					}
					i && (i.end.isAfter(e.end) && (i.end = e.end), i.start.isBefore(e.start) && (i.start = e.start), ce(i))
				}
			},
			move: me,
			wrap: ue,
			wrapPosition: function(e, t) {
				if (!(t instanceof sc)) throw new _r('view-writer-wrap-invalid-attribute');
				if (t.isSimilar(e.parent)) return ke(ec.createFromPosition(e));
				e.parent.is('text') && (e = we(e));
				const n = new sc;
				n.priority = nr, n.isSimilar = () => !1, e.parent.insertChildren(e.offset, n);
				const o = new tc(e, e.getShiftedBy(1));
				ue(o, t);
				const i = new ec(n.parent, n.index);
				n.remove();
				const a = i.nodeBefore,
					r = i.nodeAfter;
				return a instanceof Ud && r instanceof Ud ? ye(a, r) : ke(i)
			},
			unwrap: function(e, t) {
				if (!(t instanceof sc)) throw new _r('view-writer-unwrap-invalid-attribute');
				if (Pe(e), e.isCollapsed) return e;
				if (e.end.isEqual(e.start.getShiftedBy(1))) {
					const n = e.start.nodeAfter;
					if (!t.isSimilar(n) && n instanceof sc && xe(t, n)) return e
				}
				const {
					start: n,
					end: o
				} = ge(e, !0), i = n.parent, a = he(i, n.offset, o.offset, t), r = le(a.start);
				r.isEqual(a.start) || a.end.offset--;
				const s = le(a.end);
				return new tc(r, s)
			},
			rename: function(e, t) {
				const n = new Yd(t, e.getAttributes());
				return de(ec.createAfter(e), n), me(tc.createIn(e), ec.createAt(n)), ce(tc.createOn(e)), n
			}
		};
		const hc = [Ud, sc, Yd, lc, pc];
		class bc extends sc {
			isSimilar(e) {
				return !!e.is('attributeElement') && this.getCustomProperty('highlightDescriptorId') === e.getCustomProperty('highlightDescriptorId')
			}
		}
		class _c {
			constructor() {
				this._consumables = new Map
			}
			add(e, t) {
				let n;
				return e.is('text') || e.is('documentFragment') ? void this._consumables.set(e, !0) : void(this._consumables.has(e) ? n = this._consumables.get(e) : (n = new kc, this._consumables.set(e, n)), n.add(t))
			}
			test(e, t) {
				const n = this._consumables.get(e);
				return void 0 === n ? null : e.is('text') || e.is('documentFragment') ? n : n.test(t)
			}
			consume(e, t) {
				return !!this.test(e, t) && (e.is('text') || e.is('documentFragment') ? this._consumables.set(e, !1) : this._consumables.get(e).consume(t), !0)
			}
			revert(e, t) {
				const n = this._consumables.get(e);
				n !== void 0 && (e.is('text') || e.is('documentFragment') ? this._consumables.set(e, !0) : n.revert(t))
			}
			static consumablesFromElement(e) {
				const t = {
						name: !0,
						attribute: [],
						class: [],
						style: []
					},
					n = e.getAttributeKeys();
				for (const o of n) 'style' != o && 'class' != o && t.attribute.push(o);
				const o = e.getClassNames();
				for (const n of o) t.class.push(n);
				const i = e.getStyleNames();
				for (const n of i) t.style.push(n);
				return t
			}
			static createFrom(e, t) {
				if (t || (t = new _c), e.is('text')) return t.add(e), t;
				e.is('element') && t.add(e, _c.consumablesFromElement(e)), e.is('documentFragment') && t.add(e);
				for (const n of e.getChildren()) t = _c.createFrom(n, t);
				return t
			}
		}
		class kc {
			constructor() {
				this._canConsumeName = null, this._consumables = {
					attribute: new Map,
					style: new Map,
					class: new Map
				}
			}
			add(e) {
				for (const t in e.name && (this._canConsumeName = !0), this._consumables) t in e && this._add(t, e[t])
			}
			test(e) {
				if (e.name && !this._canConsumeName) return this._canConsumeName;
				for (const t in this._consumables)
					if (t in e) {
						const n = this._test(t, e[t]);
						if (!0 !== n) return n
					}
				return !0
			}
			consume(e) {
				for (const t in e.name && (this._canConsumeName = !1), this._consumables) t in e && this._consume(t, e[t])
			}
			revert(e) {
				for (const t in e.name && (this._canConsumeName = !0), this._consumables) t in e && this._revert(t, e[t])
			}
			_add(e, t) {
				const n = Ss(t) ? t : [t],
					o = this._consumables[e];
				for (const i of n) {
					if ('attribute' === e && ('class' === i || 'style' === i)) throw new _r('viewconsumable-invalid-attribute: Classes and styles should be handled separately.');
					o.set(i, !0)
				}
			}
			_test(e, t) {
				const n = Ss(t) ? t : [t],
					o = this._consumables[e];
				for (const i of n)
					if ('attribute' === e && ('class' === i || 'style' === i)) {
						const e = this._test(i, [...this._consumables[i].keys()]);
						if (!0 !== e) return e
					} else {
						const e = o.get(i);
						if (e === void 0) return null;
						if (!e) return !1
					}
				return !0
			}
			_consume(e, t) {
				const n = Ss(t) ? t : [t],
					o = this._consumables[e];
				for (const i of n) 'attribute' === e && ('class' === i || 'style' === i) ? this._consume(i, [...this._consumables[i].keys()]) : o.set(i, !1)
			}
			_revert(e, t) {
				const n = Ss(t) ? t : [t],
					o = this._consumables[e];
				for (const i of n)
					if ('attribute' === e && ('class' === i || 'style' === i)) this._revert(i, [...this._consumables[i].keys()]);
					else {
						const e = o.get(i);
						!1 === e && o.set(i, !0)
					}
			}
		}
		var wc = {
			insert: $e,
			remove: qe,
			move: function(e, t) {
				if (!e.isFlat) throw new _r('model-writer-move-range-not-flat: Trying to move a range which starts and ends in different element.');
				const n = this.remove(e);
				return t = t._getTransformedByDeletion(e.start, e.end.offset - e.start.offset), this.insert(t, n)
			},
			setAttribute: function(e, t, n) {
				Ue(e.start), Ue(e.end);
				for (const o of e.getItems()) {
					const e = o.is('textProxy') ? o.textNode : o;
					null === n ? e.removeAttribute(t) : e.setAttribute(t, n), We(e.parent, e.index)
				}
				We(e.end.parent, e.end.index)
			},
			removeAttribute: function(e, t) {
				this.setAttribute(e, t, null)
			},
			normalizeNodes: He
		};
		class yc {
			constructor(e = {}) {
				this.conversionApi = zs({}, e), this.conversionApi.convertItem = this._convertItem.bind(this), this.conversionApi.convertChildren = this._convertChildren.bind(this)
			}
			convert(e, t = {}) {
				this.fire('viewCleanup', e);
				const n = _c.createFrom(e);
				let o = this._convertItem(e, n, t);
				return o ? (o.is('documentFragment') || (o = new ic([o])), o.markers = Qe(o), o) : new ic
			}
			_convertItem(e, t, n = {}) {
				const o = zs({}, n, {
					input: e,
					output: null
				});
				return e.is('element') ? this.fire('element:' + e.name, o, t, this.conversionApi) : e.is('text') ? this.fire('text', o, t, this.conversionApi) : this.fire('documentFragment', o, t, this.conversionApi), o.output && !(o.output instanceof Us || o.output instanceof ic) ? (wr.warn('view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.', [e, o.output]), null) : o.output
			}
			_convertChildren(e, t, n = {}) {
				const o = Array.from(e.getChildren()),
					i = o.map((e) => this._convertItem(e, t, n)).filter((e) => e instanceof Us || e instanceof ic).reduce((e, t) => e.concat(t.is('documentFragment') ? Array.from(t.getChildren()) : t), []);
				return new ic(i)
			}
		}
		r(yc, Or);
		class vc extends Zs {
			constructor(e, t, n) {
				if (super(e, t), !this.root.is('rootElement')) throw new _r('model-liveposition-root-not-rootelement: LivePosition\'s root has to be an instance of RootElement.');
				this.stickiness = n || 'sticksToNext', Ye.call(this)
			}
			detach() {
				this.stopListening()
			}
		}
		r(vc, Or);
		class xc {
			constructor(e, t, n) {
				this.dataController = e, this.batch = t, this.position = n, this.canMergeWith = new Set([this.position.parent]), this.schema = e.model.schema
			}
			handleNodes(e, t) {
				e = Array.from(e);
				for (let n = 0; n < e.length; n++) {
					const o = e[n];
					this._handleNode(o, {
						isFirst: 0 === n && t.isFirst,
						isLast: n === e.length - 1 && t.isLast
					})
				}
			}
			getSelectionRange() {
				return this.nodeToSelect ? el.createOn(this.nodeToSelect) : this.dataController.model.getNearestSelectionRange(this.position)
			}
			_handleNode(e, t) {
				if (this._checkIsObject(e)) return void this._handleObject(e, t);
				const n = this._checkAndSplitToAllowedPosition(e, t);
				return n ? void(this._insert(e), this._mergeSiblingsOf(e, t)) : void this._handleDisallowedNode(e, t)
			}
			_handleObject(e, t) {
				this._checkAndSplitToAllowedPosition(e) ? this._insert(e) : this._tryAutoparagraphing(e, t)
			}
			_handleDisallowedNode(e, t) {
				e.is('element') ? this.handleNodes(e.getChildren(), t) : this.schema.check({
					name: '$text',
					inside: this.position
				}) ? (this.schema.removeDisallowedAttributes([e], this.position), this._handleNode(e, t)) : this._tryAutoparagraphing(e, t)
			}
			_insert(e) {
				if (!this._checkIsAllowed(e, this.position)) return void wr.error('insertcontent-wrong-position: The node cannot be inserted on the given position.', {
					node: e,
					position: this.position
				});
				const t = vc.createFromPosition(this.position);
				this.batch.insert(this.position, e), this.position = Zs.createFromPosition(t), t.detach(), this.nodeToSelect = this._checkIsObject(e) && !this.schema.check({
					name: '$text',
					inside: this.position
				}) ? e : null
			}
			_mergeSiblingsOf(e, t) {
				if (e instanceof Gs) {
					const n = t.isFirst && e.previousSibling instanceof Gs && this.canMergeWith.has(e.previousSibling),
						o = t.isLast && e.nextSibling instanceof Gs && this.canMergeWith.has(e.nextSibling),
						i = vc.createBefore(e),
						a = vc.createAfter(e);
					if (n) {
						const e = vc.createFromPosition(this.position);
						this.batch.merge(i);
						const t = e.nodeBefore;
						this.schema.removeDisallowedAttributes(t.getChildren(), Zs.createAt(t), this.batch), this.position = Zs.createFromPosition(e), e.detach()
					}
					if (o) {
						this.position.isEqual(a) || wr.error('insertcontent-wrong-position-on-merge: The insertion position should equal the merge position'), this.position = Zs.createAt(a.nodeBefore, 'end');
						const e = new vc(this.position.root, this.position.path, 'sticksToPrevious');
						this.batch.merge(a), this.schema.removeDisallowedAttributes(e.parent.getChildren(), e, this.batch), this.position = Zs.createFromPosition(e), e.detach()
					}
					i.detach(), a.detach(), n || o || this.schema.removeDisallowedAttributes(e.getChildren(), Zs.createAt(e), this.batch)
				}
			}
			_tryAutoparagraphing(e, t) {
				const n = new Gs('paragraph');
				this._getAllowedIn(n, this.position.parent) && (e.is('text') && !this._checkIsAllowed(e, [n]) && this.schema.removeDisallowedAttributes([e], [n]), this._checkIsAllowed(e, [n]) && (n.appendChildren(e), this._handleNode(n, t)))
			}
			_checkAndSplitToAllowedPosition(e) {
				const t = this._getAllowedIn(e, this.position.parent);
				if (!t) return !1;
				for (; t != this.position.parent;) {
					if (this.schema.limits.has(this.position.parent.name)) return !1;
					if (this.position.isAtStart) {
						const e = this.position.parent;
						this.position = Zs.createBefore(e), e.isEmpty && this.batch.remove(e)
					} else if (this.position.isAtEnd) this.position = Zs.createAfter(this.position.parent);
					else {
						const e = Zs.createAfter(this.position.parent);
						this.batch.split(this.position), this.position = e, this.canMergeWith.add(this.position.nodeAfter)
					}
				}
				return !0
			}
			_getAllowedIn(e, t) {
				return this._checkIsAllowed(e, [t]) ? t : t.parent ? this._getAllowedIn(e, t.parent) : null
			}
			_checkIsAllowed(e, t) {
				return this.schema.check({
					name: et(e),
					attributes: Array.from(e.getAttributeKeys()),
					inside: t
				})
			}
			_checkIsObject(e) {
				return this.schema.objects.has(et(e))
			}
		}
		class Ac {
			constructor(e, t) {
				this.model = e, this.processor = t, this.mapper = new nc, this.modelToView = new ac(this.model, {
					mapper: this.mapper
				}), this.modelToView.on('insert:$text', Ee(), {
					priority: 'lowest'
				}), this.viewToModel = new yc({
					schema: e.schema
				}), this.viewToModel.on('text', Ge(), {
					priority: 'lowest'
				}), this.viewToModel.on('element', Je(), {
					priority: 'lowest'
				}), this.viewToModel.on('documentFragment', Je(), {
					priority: 'lowest'
				}), ['insertContent', 'deleteContent', 'modifySelection', 'getSelectedContent'].forEach((e) => this.decorate(e))
			}
			get(e = 'main') {
				return this.stringify(this.model.getRoot(e))
			}
			stringify(e) {
				const t = this.toView(e);
				return this.processor.toData(t)
			}
			toView(e) {
				const t = el.createIn(e),
					n = new gc;
				return this.mapper.bindElements(e, n), this.modelToView.convertInsertion(t), this.mapper.clearBindings(), n
			}
			set(e, t = 'main') {
				const n = this.model.getRoot(t);
				this.model.enqueueChanges(() => {
					this.model.selection.removeAllRanges(), this.model.selection.clearAttributes(), this.model.batch('transparent').remove(el.createIn(n)).insert(Zs.createAt(n, 0), this.parse(e))
				})
			}
			parse(e, t = '$root') {
				const n = this.processor.toView(e);
				return this.toModel(n, t)
			}
			toModel(e, t = '$root') {
				return this.viewToModel.convert(e, {
					context: [t]
				})
			}
			destroy() {}
			insertContent(e, t, n) {
				Ze(this, e, t, n)
			}
			deleteContent(e, t, n) {
				tt(e, t, n)
			}
			modifySelection(e, t) {
				gt(this, e, t)
			}
			getSelectedContent(e) {
				return _t(e)
			}
			hasContent(e) {
				if (e instanceof Gs && (e = el.createIn(e)), e.isCollapsed) return !1;
				for (const t of e.getItems())
					if (t.is('textProxy') || this.model.schema.objects.has(t.name)) return !0;
				return !1
			}
		}
		r(Ac, Ws);
		class Cc {
			constructor(e) {
				this.baseVersion = e
			}
			toJSON() {
				const e = Hd(this, !0);
				return e.__className = this.constructor.className, delete e.delta, e
			}
			static get className() {
				return 'engine.model.operation.Operation'
			}
			static fromJSON(e) {
				return new this(e.baseVersion)
			}
		}
		wt.prototype.add = wt.prototype.push = function(e) {
			return this.__data__.set(e, '__lodash_hash_undefined__'), this
		}, wt.prototype.has = function(e) {
			return this.__data__.has(e)
		};
		var Tc = wt,
			Pc = function(e, t) {
				for (var n = -1, o = e.length; ++n < o;)
					if (t(e[n], n, e)) return !0;
				return !1
			},
			Sc = function(e, t, n, o, i, a) {
				var r = i & 2,
					s = e.length,
					l = t.length;
				if (s != l && !(r && l > s)) return !1;
				var d = a.get(e);
				if (d) return d == t;
				var c = -1,
					m = !0,
					u = i & 1 ? new Tc : void 0;
				for (a.set(e, t); ++c < s;) {
					var p = e[c],
						g = t[c];
					if (o) var f = r ? o(g, p, c, t, e, a) : o(p, g, c, e, t, a);
					if (void 0 !== f) {
						if (f) continue;
						m = !1;
						break
					}
					if (u) {
						if (!Pc(t, function(e, t) {
								if (!u.has(t) && (p === e || n(p, e, o, i, a))) return u.add(t)
							})) {
							m = !1;
							break
						}
					} else if (!(p === g || n(p, g, o, i, a))) {
						m = !1;
						break
					}
				}
				return a['delete'](e), m
			},
			Ec = Sd ? Sd.prototype : void 0,
			Vc = Ec ? Ec.valueOf : void 0,
			Oc = function(e, t, n, o, i, a, r) {
				switch (n) {
					case '[object DataView]':
						if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
						e = e.buffer, t = t.buffer;
					case '[object ArrayBuffer]':
						return e.byteLength == t.byteLength && o(new fd(e), new fd(t));
					case '[object Boolean]':
					case '[object Date]':
						return +e == +t;
					case '[object Error]':
						return e.name == t.name && e.message == t.message;
					case '[object Number]':
						return e == +e ? e == +t : t != +t;
					case '[object RegExp]':
					case '[object String]':
						return e == t + '';
					case '[object Map]':
						var s = wd;
					case '[object Set]':
						var l = a & 2;
						if (s || (s = Cd), e.size != t.size && !l) return !1;
						var d = r.get(e);
						return d ? d == t : (a |= 1, r.set(e, t), Sc(s(e), s(t), o, i, a, r));
					case '[object Symbol]':
						if (Vc) return Vc.call(e) == Vc.call(t);
				}
				return !1
			},
			Rc = function(e, t, n, o, i, a) {
				var r = i & 2,
					s = Il(e),
					l = s.length,
					d = Il(t),
					c = d.length;
				if (l != c && !r) return !1;
				for (var m = l, u; m--;)
					if (u = s[m], r ? !(u in t) : !Ol(t, u)) return !1;
				var p = a.get(e);
				if (p) return p == t;
				var g = !0;
				a.set(e, t);
				for (var f = r; ++m < l;) {
					u = s[m];
					var h = e[u],
						b = t[u];
					if (o) var _ = r ? o(b, h, u, t, e, a) : o(h, b, u, e, t, a);
					if (void 0 === _ ? !(h === b || n(h, b, o, i, a)) : !_) {
						g = !1;
						break
					}
					f || (f = 'constructor' == u)
				}
				if (g && !f) {
					var k = e.constructor,
						w = t.constructor;
					k != w && 'constructor' in e && 'constructor' in t && !('function' == typeof k && k instanceof k && 'function' == typeof w && w instanceof w) && (g = !1)
				}
				return a['delete'](e), g
			},
			Fc = {};
		Fc['[object Float32Array]'] = Fc['[object Float64Array]'] = Fc['[object Int8Array]'] = Fc['[object Int16Array]'] = Fc['[object Int32Array]'] = Fc['[object Uint8Array]'] = Fc['[object Uint8ClampedArray]'] = Fc['[object Uint16Array]'] = Fc['[object Uint32Array]'] = !0, Fc['[object Arguments]'] = Fc['[object Array]'] = Fc['[object ArrayBuffer]'] = Fc['[object Boolean]'] = Fc['[object DataView]'] = Fc['[object Date]'] = Fc['[object Error]'] = Fc['[object Function]'] = Fc['[object Map]'] = Fc['[object Number]'] = Fc['[object Object]'] = Fc['[object RegExp]'] = Fc['[object Set]'] = Fc['[object String]'] = Fc['[object WeakMap]'] = !1;
		var Ic = Object.prototype,
			Nc = Ic.toString,
			Bc = function(e) {
				return dr(e) && qr(e.length) && !!Fc[Nc.call(e)]
			},
			Mc = '[object Arguments]',
			Dc = '[object Array]',
			Lc = '[object Object]',
			zc = Object.prototype,
			jc = zc.hasOwnProperty,
			$c = function(e, t, n, o, i, a) {
				var r = Ss(e),
					s = Ss(t),
					l = Dc,
					d = Dc;
				r || (l = cd(e), l = l == Mc ? Lc : l), s || (d = cd(t), d = d == Mc ? Lc : d);
				var c = l == Lc && !lr(e),
					m = d == Lc && !lr(t),
					u = l == d;
				if (u && !c) return a || (a = new Pl), r || Bc(e) ? Sc(e, t, n, o, i, a) : Oc(e, t, l, n, o, i, a);
				if (!(i & 2)) {
					var p = c && jc.call(e, '__wrapped__'),
						g = m && jc.call(t, '__wrapped__');
					if (p || g) {
						var f = p ? e.value() : e,
							h = g ? t.value() : t;
						return a || (a = new Pl), n(f, h, o, i, a)
					}
				}
				return !!u && (a || (a = new Pl), Rc(e, t, n, o, i, a))
			},
			qc = yt,
			Hc = function(e, t) {
				return qc(e, t)
			};
		class Wc extends Cc {
			constructor(e, t, n, o, i) {
				super(i), this.range = el.createFromRange(e), this.key = t, this.oldValue = n === void 0 ? null : n, this.newValue = o === void 0 ? null : o
			}
			get type() {
				return null === this.oldValue ? 'addAttribute' : null === this.newValue ? 'removeAttribute' : 'changeAttribute'
			}
			clone() {
				return new Wc(this.range, this.key, this.oldValue, this.newValue, this.baseVersion)
			}
			getReversed() {
				return new Wc(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
			}
			_execute() {
				for (const e of this.range.getItems()) {
					if (null !== this.oldValue && !Hc(e.getAttribute(this.key), this.oldValue)) throw new _r('attribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.', {
						item: e,
						key: this.key,
						value: this.oldValue
					});
					if (null === this.oldValue && null !== this.newValue && e.hasAttribute(this.key)) throw new _r('attribute-operation-attribute-exists: The attribute with given key already exists.', {
						node: e,
						key: this.key
					})
				}
				return Hc(this.oldValue, this.newValue) || wc.setAttribute(this.range, this.key, this.newValue), {
					range: this.range,
					key: this.key,
					oldValue: this.oldValue,
					newValue: this.newValue
				}
			}
			static get className() {
				return 'engine.model.operation.AttributeOperation'
			}
			static fromJSON(e, t) {
				return new Wc(el.fromJSON(e.range, t), e.key, e.oldValue, e.newValue, e.baseVersion)
			}
		}
		class Uc extends Cc {
			constructor(e, t, n, o) {
				super(o), this.sourcePosition = Zs.createFromPosition(e), this.howMany = t, this.targetPosition = Zs.createFromPosition(n), this.isSticky = !1
			}
			get type() {
				return 'move'
			}
			clone() {
				const e = new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion);
				return e.isSticky = this.isSticky, e
			}
			getMovedRangeStart() {
				return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany)
			}
			getReversed() {
				const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany),
					t = new this.constructor(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1);
				return t.isSticky = this.isSticky, t
			}
			_execute() {
				const e = this.sourcePosition.parent,
					t = this.targetPosition.parent,
					n = this.sourcePosition.offset,
					o = this.targetPosition.offset;
				if (!e || !t) throw new _r('move-operation-position-invalid: Source position or target position is invalid.');
				else if (n + this.howMany > e.maxOffset) throw new _r('move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.');
				else if (e === t && n < o && o < n + this.howMany) throw new _r('move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.');
				else if (this.sourcePosition.root == this.targetPosition.root && 'prefix' == O(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath())) {
					const e = this.sourcePosition.path.length - 1;
					if (this.targetPosition.path[e] >= n && this.targetPosition.path[e] < n + this.howMany) throw new _r('move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.')
				}
				const i = wc.move(el.createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition);
				return {
					sourcePosition: this.sourcePosition,
					range: i
				}
			}
			static get className() {
				return 'engine.model.operation.MoveOperation'
			}
			static fromJSON(e, t) {
				const n = Zs.fromJSON(e.sourcePosition, t),
					o = Zs.fromJSON(e.targetPosition, t),
					i = new this(n, e.howMany, o, e.baseVersion);
				return e.isSticky && (i.isSticky = !0), i
			}
		}
		class Kc extends Uc {
			get position() {
				return this.targetPosition
			}
			set position(e) {
				this.targetPosition = e
			}
			get type() {
				return 'reinsert'
			}
			getReversed() {
				const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
				return new Qc(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1)
			}
			static get className() {
				return 'engine.model.operation.ReinsertOperation'
			}
		}
		class Qc extends Uc {
			get type() {
				return 'remove'
			}
			getReversed() {
				const e = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
				return new Kc(this.getMovedRangeStart(), this.howMany, e, this.baseVersion + 1)
			}
			static get className() {
				return 'engine.model.operation.RemoveOperation'
			}
		}
		class Jc extends Cc {
			constructor(e, t, n) {
				super(n), this.position = Zs.createFromPosition(e), this.nodes = new Js(He(t))
			}
			get type() {
				return 'insert'
			}
			clone() {
				const e = new Js([...this.nodes].map((e) => e.clone(!0)));
				return new Jc(this.position, e, this.baseVersion)
			}
			getReversed() {
				const e = this.position.root.document.graveyard,
					t = new Zs(e, [0]);
				return new Qc(this.position, this.nodes.maxOffset, t, this.baseVersion + 1)
			}
			_execute() {
				const e = this.nodes;
				this.nodes = new Js([...e].map((e) => e.clone(!0)));
				const t = $e(this.position, e);
				return {
					range: t
				}
			}
			static get className() {
				return 'engine.model.operation.InsertOperation'
			}
			static fromJSON(e, t) {
				const n = [];
				for (const o of e.nodes) o.name ? n.push(Gs.fromJSON(o)) : n.push(Ks.fromJSON(o));
				return new Jc(Zs.fromJSON(e.position, t), n, e.baseVersion)
			}
		}
		class Gc extends Cc {
			constructor(e, t, n, o, i) {
				super(i), this.name = e, this.oldRange = t ? el.createFromRange(t) : null, this.newRange = n ? el.createFromRange(n) : null, this._markers = o
			}
			get type() {
				return 'marker'
			}
			clone() {
				return new Gc(this.name, this.oldRange, this.newRange, this._markers, this.baseVersion)
			}
			getReversed() {
				return new Gc(this.name, this.newRange, this.oldRange, this._markers, this.baseVersion + 1)
			}
			_execute() {
				const e = this.newRange ? 'set' : 'remove';
				return this._markers[e](this.name, this.newRange), {
					name: this.name,
					type: e
				}
			}
			toJSON() {
				const e = super.toJSON();
				return delete e._markers, e
			}
			static get className() {
				return 'engine.model.operation.MarkerOperation'
			}
			static fromJSON(e, t) {
				return new Gc(e.name, e.oldRange ? el.fromJSON(e.oldRange, t) : null, e.newRange ? el.fromJSON(e.newRange, t) : null, t.markers, e.baseVersion)
			}
		}
		class Yc extends Cc {
			get type() {
				return 'noop'
			}
			clone() {
				return new Yc(this.baseVersion)
			}
			getReversed() {
				return new Yc(this.baseVersion + 1)
			}
			_execute() {
				return {}
			}
			static get className() {
				return 'engine.model.operation.NoOperation'
			}
		}
		class Xc extends Cc {
			constructor(e, t, n, o) {
				super(o), this.position = e, this.oldName = t, this.newName = n
			}
			get type() {
				return 'rename'
			}
			clone() {
				return new Xc(Zs.createFromPosition(this.position), this.oldName, this.newName, this.baseVersion)
			}
			getReversed() {
				return new Xc(Zs.createFromPosition(this.position), this.newName, this.oldName, this.baseVersion + 1)
			}
			_execute() {
				const e = this.position.nodeAfter;
				if (!(e instanceof Gs)) throw new _r('rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.');
				else if (e.name !== this.oldName) throw new _r('rename-operation-wrong-name: Element to change has different name than operation\'s old name.');
				return e.name != this.newName && (e.name = this.newName), {
					element: e,
					oldName: this.oldName
				}
			}
			static get className() {
				return 'engine.model.operation.RenameOperation'
			}
			static fromJSON(e, t) {
				return new Xc(Zs.fromJSON(e.position, t), e.oldName, e.newName, e.baseVersion)
			}
		}
		class Zc extends Cc {
			constructor(e, t, n, o, i) {
				super(i), this.root = e, this.key = t, this.oldValue = n, this.newValue = o
			}
			get type() {
				return null === this.oldValue ? 'addRootAttribute' : null === this.newValue ? 'removeRootAttribute' : 'changeRootAttribute'
			}
			clone() {
				return new Zc(this.root, this.key, this.oldValue, this.newValue, this.baseVersion)
			}
			getReversed() {
				return new Zc(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1)
			}
			_execute() {
				if (null !== this.oldValue && this.root.getAttribute(this.key) !== this.oldValue) throw new _r('rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation\'s old attribute value.', {
					root: this.root,
					key: this.key
				});
				if (null === this.oldValue && null !== this.newValue && this.root.hasAttribute(this.key)) throw new _r('rootattribute-operation-attribute-exists: The attribute with given key already exists.', {
					root: this.root,
					key: this.key
				});
				return null === this.newValue ? this.root.removeAttribute(this.key) : this.root.setAttribute(this.key, this.newValue), {
					root: this.root,
					key: this.key,
					oldValue: this.oldValue,
					newValue: this.newValue
				}
			}
			static get className() {
				return 'engine.model.operation.RootAttributeOperation'
			}
			static fromJSON(e, t) {
				if (!t.hasRoot(e.root)) throw new _r('rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.', {
					rootName: e
				});
				return new Zc(t.getRoot(e.root), e.key, e.oldValue, e.newValue, e.baseVersion)
			}
		}
		const em = {};
		em[Wc.className] = Wc, em[Jc.className] = Jc, em[Gc.className] = Gc, em[Uc.className] = Uc, em[Yc.className] = Yc, em[Cc.className] = Cc, em[Kc.className] = Kc, em[Qc.className] = Qc, em[Xc.className] = Xc, em[Zc.className] = Zc;
		class tm {
			static fromJSON(e, t) {
				return em[e.__className].fromJSON(e, t)
			}
		}
		const nm = new Map;
		class om {
			static fromJSON(e, t) {
				if (!nm.has(e.__className)) throw new _r('delta-fromjson-no-deserializer: This delta has no defined deserializer', {
					name: e.__className
				});
				const n = nm.get(e.__className),
					o = new n;
				for (const n of e.operations) o.addOperation(tm.fromJSON(n, t));
				for (const n in e) '__className' != n && void 0 === o[n] && (o[n] = e[n]);
				return o
			}
			static register(e) {
				nm.set(e.className, e)
			}
		}
		class im {
			constructor() {
				this.batch = null, this.operations = []
			}
			get baseVersion() {
				return 0 < this.operations.length ? this.operations[0].baseVersion : null
			}
			set baseVersion(e) {
				for (const t of this.operations) t.baseVersion = e++
			}
			get _reverseDeltaClass() {
				return im
			}
			addOperation(e) {
				return e.delta = this, this.operations.push(e), e
			}
			clone() {
				const e = new this.constructor;
				for (const t of this.operations) e.addOperation(t.clone());
				return e
			}
			getReversed() {
				const e = new this._reverseDeltaClass;
				for (const t of this.operations) e.addOperation(t.getReversed());
				e.operations.reverse();
				for (let t = 0; t < e.operations.length; t++) e.operations[t].baseVersion = this.operations[this.operations.length - 1].baseVersion + t + 1;
				return e
			}
			toJSON() {
				const e = Hd(this);
				return e.__className = this.constructor.className, delete e.batch, e
			}
			static get className() {
				return 'engine.model.delta.Delta'
			}
		}
		om.register(im);
		class am {
			constructor(e, t = 'default') {
				this.document = e, this.deltas = [], this.type = t
			}
			get baseVersion() {
				return 0 < this.deltas.length ? this.deltas[0].baseVersion : null
			}
			addDelta(e) {
				return e.batch = this, this.deltas.push(e), e
			}* getOperations() {
				for (const e of this.deltas) yield* e.operations
			}
		}
		class rm extends im {
			get type() {
				return 'attribute'
			}
			get key() {
				return this.operations[0] ? this.operations[0].key : null
			}
			get value() {
				return this.operations[0] ? this.operations[0].newValue : null
			}
			get range() {
				if (this._range) return this._range;
				let e = null,
					t = null;
				for (const n of this.operations) n instanceof Yc || ((null == e || e.isAfter(n.range.start)) && (e = n.range.start), (null == t || t.isBefore(n.range.end)) && (t = n.range.end));
				return e && t ? (this._range = new el(e, t), this._range) : null
			}
			get _reverseDeltaClass() {
				return rm
			}
			toJSON() {
				const e = super.toJSON();
				return delete e._range, e
			}
			static get className() {
				return 'engine.model.delta.AttributeDelta'
			}
		}
		class sm extends im {
			static get className() {
				return 'engine.model.delta.RootAttributeDelta'
			}
		}
		vt('setAttribute', function(e, t, n) {
			return xt(this, t, n, e), this
		}), vt('removeAttribute', function(e, t) {
			return xt(this, t, null, e), this
		}), om.register(rm), om.register(sm);
		class lm extends im {
			get type() {
				return 'move'
			}
			get howMany() {
				return this._moveOperation ? this._moveOperation.howMany : null
			}
			get sourcePosition() {
				return this._moveOperation ? this._moveOperation.sourcePosition : null
			}
			get targetPosition() {
				return this._moveOperation ? this._moveOperation.targetPosition : null
			}
			get _moveOperation() {
				return this.operations[0] || null
			}
			get _reverseDeltaClass() {
				return lm
			}
			static get className() {
				return 'engine.model.delta.MoveDelta'
			}
		}
		vt('move', function(e, t) {
			const n = new lm;
			if (this.addDelta(n), e instanceof el) {
				if (!e.isFlat) throw new _r('batch-move-range-not-flat: Range to move is not flat.');
				Tt(this, n, e.start, e.end.offset - e.start.offset, t)
			} else Tt(this, n, Zs.createBefore(e), 1, t);
			return this
		}), om.register(lm);
		class dm extends lm {
			static get className() {
				return 'engine.model.delta.RemoveDelta'
			}
		}
		vt('remove', function(e) {
			if (e instanceof el) {
				const t = e.getMinimalFlatRanges().reverse();
				for (const e of t) Pt(this, e.start, e.end.offset - e.start.offset)
			} else Pt(this, Zs.createBefore(e), 1);
			return this
		}), om.register(dm);
		class cm extends im {
			get type() {
				return 'insert'
			}
			get position() {
				return this._insertOperation ? this._insertOperation.position : null
			}
			get nodes() {
				return this._insertOperation ? this._insertOperation.nodes : null
			}
			get _insertOperation() {
				return this.operations[0] || null
			}
			get _reverseDeltaClass() {
				return dm
			}
			static get className() {
				return 'engine.model.delta.InsertDelta'
			}
		}
		vt('insert', function(e, t) {
			const n = He(t);
			if (0 === n.length) return this;
			const o = new cm,
				i = new Jc(e, n, this.document.version);
			if (this.addDelta(o), o.addOperation(i), this.document.applyOperation(i), t instanceof ic)
				for (const [n, o] of t.markers) {
					const t = Zs.createAt(o.root),
						i = new el(o.start._getCombined(t, e), o.end._getCombined(t, e));
					this.setMarker(n, i)
				}
			return this
		}), om.register(cm);
		class mm extends im {
			get type() {
				return 'split'
			}
			get position() {
				return this._moveOperation ? this._moveOperation.sourcePosition : null
			}
			get _cloneOperation() {
				return this.operations[0] || null
			}
			get _moveOperation() {
				return this.operations[1] && this.operations[1] instanceof Uc ? this.operations[1] : null
			}
			get _reverseDeltaClass() {
				return um
			}
			static get className() {
				return 'engine.model.delta.SplitDelta'
			}
		}
		vt('split', function(e) {
			const t = new mm;
			this.addDelta(t);
			const n = e.parent;
			if (!n.parent) throw new _r('batch-split-root: Root element can not be split.');
			const o = new Gs(n.name, n.getAttributes()),
				i = new Jc(Zs.createAfter(n), o, this.document.version);
			t.addOperation(i), this.document.applyOperation(i);
			const a = new Uc(e, n.maxOffset - e.offset, Zs.createFromParentAndOffset(o, 0), this.document.version);
			return a.isSticky = !0, t.addOperation(a), this.document.applyOperation(a), this
		}), om.register(mm);
		class um extends im {
			get type() {
				return 'merge'
			}
			get position() {
				return this._removeOperation ? this._removeOperation.sourcePosition : null
			}
			get _removeOperation() {
				return this.operations[1] || null
			}
			get _reverseDeltaClass() {
				return mm
			}
			static get className() {
				return 'engine.model.delta.MergeDelta'
			}
		}
		vt('merge', function(e) {
			const t = new um;
			this.addDelta(t);
			const n = e.nodeBefore,
				o = e.nodeAfter;
			if (!(n instanceof Gs)) throw new _r('batch-merge-no-element-before: Node before merge position must be an element.');
			if (!(o instanceof Gs)) throw new _r('batch-merge-no-element-after: Node after merge position must be an element.');
			const i = Zs.createFromParentAndOffset(o, 0),
				a = Zs.createFromParentAndOffset(n, n.maxOffset),
				r = new Uc(i, o.maxOffset, a, this.document.version);
			r.isSticky = !0, t.addOperation(r), this.document.applyOperation(r);
			const s = this.document.graveyard,
				l = new Zs(s, [0]),
				d = new Qc(e, 1, l, this.document.version);
			return t.addOperation(d), this.document.applyOperation(d), this
		}), om.register(um);
		class pm extends im {
			get type() {
				return 'rename'
			}
			get _reverseDeltaClass() {
				return pm
			}
			static get className() {
				return 'engine.model.delta.RenameDelta'
			}
		}
		vt('rename', function(e, t) {
			if (!(e instanceof Gs)) throw new _r('batch-rename-not-element-instance: Trying to rename an object which is not an instance of Element.');
			const n = new pm;
			this.addDelta(n);
			const o = new Xc(Zs.createBefore(e), e.name, t, this.document.version);
			return St(this, n, o), this
		}), om.register(pm);
		class gm extends im {
			get type() {
				return 'wrap'
			}
			get range() {
				const e = this._moveOperation;
				return e ? el.createFromPositionAndShift(e.sourcePosition, e.howMany) : null
			}
			get howMany() {
				const e = this.range;
				return e ? e.end.offset - e.start.offset : 0
			}
			get _insertOperation() {
				return this.operations[0] || null
			}
			get _moveOperation() {
				return this.operations[1] || null
			}
			get _reverseDeltaClass() {
				return fm
			}
			static get className() {
				return 'engine.model.delta.WrapDelta'
			}
		}
		vt('wrap', function(e, t) {
			if (!e.isFlat) throw new _r('batch-wrap-range-not-flat: Range to wrap is not flat.');
			const n = t instanceof Gs ? t : new Gs(t);
			if (0 < n.childCount) throw new _r('batch-wrap-element-not-empty: Element to wrap with is not empty.');
			if (null !== n.parent) throw new _r('batch-wrap-element-attached: Element to wrap with is already attached to tree model.');
			const o = new gm;
			this.addDelta(o);
			const i = new Jc(e.end, n, this.document.version);
			o.addOperation(i), this.document.applyOperation(i);
			const a = Zs.createFromParentAndOffset(n, 0),
				r = new Uc(e.start, e.end.offset - e.start.offset, a, this.document.version);
			return o.addOperation(r), this.document.applyOperation(r), this
		}), om.register(gm);
		class fm extends im {
			get type() {
				return 'unwrap'
			}
			get position() {
				return this._moveOperation ? this._moveOperation.targetPosition : null
			}
			get _moveOperation() {
				return this.operations[0] || null
			}
			get _reverseDeltaClass() {
				return gm
			}
			static get className() {
				return 'engine.model.delta.UnwrapDelta'
			}
		}
		vt('unwrap', function(e) {
			if (null === e.parent) throw new _r('batch-unwrap-element-no-parent: Trying to unwrap an element which has no parent.');
			const t = new fm;
			this.addDelta(t);
			const n = Zs.createFromParentAndOffset(e, 0),
				o = new Uc(n, e.maxOffset, Zs.createBefore(e), this.document.version);
			o.isSticky = !0, t.addOperation(o), this.document.applyOperation(o);
			const i = this.document.graveyard,
				a = new Zs(i, [0]),
				r = new Qc(Zs.createBefore(e), 1, a, this.document.version);
			return t.addOperation(r), this.document.applyOperation(r), this
		}), om.register(fm);
		class hm extends cm {
			static get className() {
				return 'engine.model.delta.WeakInsertDelta'
			}
		}
		vt('weakInsert', function(e, t) {
			const n = new hm;
			this.addDelta(n), t = He(t);
			for (const n of t) n.setAttributesTo(this.document.selection.getAttributes());
			const o = new Jc(e, t, this.document.version);
			return n.addOperation(o), this.document.applyOperation(o), this
		}), om.register(hm);
		var bm = function(e, t, n = {
			isStrong: !1
		}) {
			let o, i;
			e instanceof Jc ? o = _m.InsertOperation : e instanceof Wc ? o = _m.AttributeOperation : e instanceof Zc ? o = _m.RootAttributeOperation : e instanceof Xc ? o = _m.RenameOperation : e instanceof Gc ? o = _m.MarkerOperation : e instanceof Uc ? o = _m.MoveOperation : i = Et, o && (t instanceof Jc ? i = o.InsertOperation : t instanceof Wc ? i = o.AttributeOperation : t instanceof Zc ? i = o.RootAttributeOperation : t instanceof Xc ? i = o.RenameOperation : t instanceof Gc ? i = o.MarkerOperation : t instanceof Uc ? i = o.MoveOperation : i = Et);
			const a = i(e, t, n);
			return Vt(e.baseVersion, a)
		};
		const _m = {
			InsertOperation: {
				InsertOperation(e, t, n) {
					const o = e.clone(),
						i = void 0 === n.insertBefore ? !n.isStrong : n.insertBefore;
					return o.position = o.position._getTransformedByInsertion(t.position, t.nodes.maxOffset, i), [o]
				},
				AttributeOperation: Et,
				RootAttributeOperation: Et,
				RenameOperation: Et,
				MarkerOperation: Et,
				MoveOperation(e, t, n) {
					const o = e.clone(),
						i = void 0 === n.insertBefore ? !n.isStrong : n.insertBefore;
					return o.position = e.position._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, i, t.isSticky && !n.forceNotSticky), [o]
				}
			},
			AttributeOperation: {
				InsertOperation(e, t) {
					const n = e.range._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0, !1);
					return n.reverse().map((t) => new Wc(t, e.key, e.oldValue, e.newValue, e.baseVersion))
				},
				AttributeOperation(e, t, n) {
					if (e.key === t.key) {
						const o = e.range.getDifference(t.range).map((t) => new Wc(t, e.key, e.oldValue, e.newValue, e.baseVersion)),
							i = e.range.getIntersection(t.range);
						return i && (n.isStrong ? o.push(new Wc(i, t.key, t.newValue, e.newValue, e.baseVersion)) : 0 === o.length && o.push(new Yc(0))), o
					}
					return [e.clone()]
				},
				RootAttributeOperation: Et,
				RenameOperation: Et,
				MarkerOperation: Et,
				MoveOperation(e, t) {
					const n = el.createFromPositionAndShift(t.sourcePosition, t.howMany);
					let o = [];
					const i = Rt(e.range.getDifference(n)),
						a = e.range.getIntersection(n);
					return null !== i && (i.start = i.start._getTransformedByDeletion(t.sourcePosition, t.howMany), i.end = i.end._getTransformedByDeletion(t.sourcePosition, t.howMany), o = i._getTransformedByInsertion(t.getMovedRangeStart(), t.howMany, !0, !1).reverse()), null !== a && (a.start = a.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), a.end = a.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), o.push(a)), o.map((t) => new Wc(t, e.key, e.oldValue, e.newValue, e.baseVersion))
				}
			},
			RootAttributeOperation: {
				InsertOperation: Et,
				AttributeOperation: Et,
				RootAttributeOperation(e, t, n) {
					return e.root !== t.root || e.key !== t.key || (e.newValue === t.newValue || n.isStrong) && e.newValue !== t.newValue ? [e.clone()] : [new Yc(e.baseVersion)]
				},
				RenameOperation: Et,
				MarkerOperation: Et,
				MoveOperation: Et
			},
			RenameOperation: {
				InsertOperation(e, t) {
					const n = e.clone();
					return n.position = n.position._getTransformedByInsertion(t.position, t.nodes.maxOffset, !0), [n]
				},
				AttributeOperation: Et,
				RootAttributeOperation: Et,
				RenameOperation(e, t, n) {
					const o = e.clone();
					if (e.position.isEqual(t.position))
						if (n.isStrong) o.oldName = t.newName;
						else return [new Yc(e.baseVersion)];
					return [o]
				},
				MarkerOperation: Et,
				MoveOperation(e, t) {
					const n = e.clone(),
						o = n.position.isEqual(t.sourcePosition);
					return n.position = n.position._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !0, o), [n]
				}
			},
			MarkerOperation: {
				InsertOperation(e, t) {
					const n = e.clone();
					return n.oldRange && (n.oldRange = n.oldRange._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, !1)[0]), n.newRange && (n.newRange = n.newRange._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, !1)[0]), [n]
				},
				AttributeOperation: Et,
				RootAttributeOperation: Et,
				RenameOperation: Et,
				MarkerOperation(e, t, n) {
					const o = e.clone();
					if (e.name == t.name)
						if (n.isStrong) o.oldRange = t.newRange;
						else return [new Yc(e.baseVersion)];
					return [o]
				},
				MoveOperation(e, t) {
					const n = e.clone();
					if (n.oldRange) {
						const e = n.oldRange._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany);
						n.oldRange = el.createFromRanges(e)
					}
					if (n.newRange) {
						const e = n.newRange._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany);
						n.newRange = el.createFromRanges(e)
					}
					return [n]
				}
			},
			MoveOperation: {
				InsertOperation(e, t, n) {
					let o = el.createFromPositionAndShift(e.sourcePosition, e.howMany);
					const i = e.isSticky && !n.forceNotSticky;
					o = o._getTransformedByInsertion(t.position, t.nodes.maxOffset, !1, i)[0];
					const a = void 0 === n.insertBefore ? !n.isStrong : n.insertBefore,
						r = new e.constructor(o.start, o.end.offset - o.start.offset, e.targetPosition._getTransformedByInsertion(t.position, t.nodes.maxOffset, a), e.baseVersion);
					return r.isSticky = e.isSticky, [r]
				},
				AttributeOperation: Et,
				RootAttributeOperation: Et,
				RenameOperation: Et,
				MarkerOperation: Et,
				MoveOperation(e, t, n) {
					const o = el.createFromPositionAndShift(e.sourcePosition, e.howMany),
						i = el.createFromPositionAndShift(t.sourcePosition, t.howMany);
					let a = n.isStrong;
					const r = e.isSticky && !n.forceNotSticky,
						s = void 0 === n.insertBefore ? !a : n.insertBefore,
						l = e.targetPosition._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, s, t.isSticky && !n.forceNotSticky);
					if (Ot(e, t) && Ot(t, e)) return [t.getReversed()];
					const d = o.containsPosition(t.targetPosition) || o.start.isEqual(t.targetPosition) && r || o.end.isEqual(t.targetPosition) && r;
					if (d && o.containsRange(i, !0)) return o.start = o.start._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !r), o.end = o.end._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, r), Ft([o], l, e);
					const c = i.containsPosition(e.targetPosition) || i.start.isEqual(e.targetPosition) && t.isSticky && !n.forceNotSticky || i.end.isEqual(e.targetPosition) && t.isSticky && !n.forceNotSticky;
					if (c && i.containsRange(o, !0)) return o.start = o.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), o.end = o.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), Ft([o], l, e);
					const m = O(e.sourcePosition.getParentPath(), t.sourcePosition.getParentPath());
					if ('prefix' == m || 'extension' == m) return o.start = o.start._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, !r), o.end = o.end._getTransformedByMove(t.sourcePosition, t.targetPosition, t.howMany, r), Ft([o], l, e);
					n.forceWeakRemove || (e instanceof Qc && !(t instanceof Qc) ? a = !0 : !(e instanceof Qc) && t instanceof Qc && (a = !1));
					const u = [],
						p = o.getDifference(i);
					for (const o of p) {
						o.start = o.start._getTransformedByDeletion(t.sourcePosition, t.howMany), o.end = o.end._getTransformedByDeletion(t.sourcePosition, t.howMany);
						const e = 'same' == O(o.start.getParentPath(), t.getMovedRangeStart().getParentPath()),
							n = o._getTransformedByInsertion(t.getMovedRangeStart(), t.howMany, e, r);
						u.push(...n)
					}
					const g = o.getIntersection(i);
					return null !== g && a && !d && (g.start = g.start._getCombined(t.sourcePosition, t.getMovedRangeStart()), g.end = g.end._getCombined(t.sourcePosition, t.getMovedRangeStart()), 0 === u.length ? u.push(g) : 1 == u.length ? i.start.isBefore(o.start) || i.start.isEqual(o.start) ? u.unshift(g) : u.push(g) : u.splice(1, 0, g)), 0 === u.length ? [new Yc(e.baseVersion)] : Ft(u, l, e)
				}
			}
		};
		var ot = function(e, t, n) {
				var o = -1,
					i = e.length;
				0 > t && (t = -t > i ? 0 : i + t), n = n > i ? i : n, 0 > n && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
				for (var a = Array(i); ++o < i;) a[o] = e[o + t];
				return a
			},
			km = Math.ceil,
			wm = function(e) {
				return Ss(e) || Ts(e)
			},
			ym = Nt,
			vm = function(e, t, n) {
				for (var o = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < o;) {
					var a = e[i];
					if (a !== a) return i
				}
				return -1
			},
			xm = function(e, t, n) {
				if (t !== t) return vm(e, n);
				for (var o = n - 1, i = e.length; ++o < i;)
					if (e[o] === t) return o;
				return -1
			},
			Am = function(e, t) {
				return !!e.length && -1 < xm(e, t, 0)
			},
			Cm = function(e, t, n) {
				for (var o = -1, i = e.length; ++o < i;)
					if (n(t, e[o])) return !0;
				return !1
			},
			Tm = function(e, t) {
				for (var n = -1, o = e.length, i = Array(o); ++n < o;) i[n] = t(e[n], n, e);
				return i
			},
			Pm = function(e) {
				return function(t) {
					return e(t)
				}
			},
			Sm = function(e, t) {
				return e.has(t)
			},
			Em = function(e, t, n, o) {
				var i = -1,
					a = Am,
					r = !0,
					s = e.length,
					l = [],
					d = t.length;
				if (!s) return l;
				n && (t = Tm(t, Pm(n))), o ? (a = Cm, r = !1) : t.length >= 200 && (a = Sm, r = !1, t = new Tc(t));
				outer: for (; ++i < s;) {
					var c = e[i],
						m = n ? n(c) : c;
					if (c = o || 0 !== c ? c : 0, r && m === m) {
						for (var u = d; u--;)
							if (t[u] === m) continue outer;
						l.push(c)
					} else a(t, m, o) || l.push(c)
				}
				return l
			},
			Vm = ds(function(e, t) {
				return ys(e) ? Em(e, ym(t, 1, ys, !0)) : []
			}),
			Om = function(e, t, n, o) {
				var i = n.length,
					a = i,
					r = !o;
				if (null == e) return !a;
				for (e = Object(e); i--;) {
					var s = n[i];
					if (r && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
				}
				for (; ++i < a;) {
					s = n[i];
					var l = s[0],
						d = e[l],
						c = s[1];
					if (!(r && s[2])) {
						var m = new Pl;
						if (o) var u = o(d, c, l, e, t, m);
						if (void 0 === u ? !qc(c, d, o, 1 | 2, m) : !u) return !1
					} else if (void 0 === d && !(l in e)) return !1
				}
				return !0
			},
			Rm = function(e) {
				return e === e && !Lr(e)
			},
			Fm = function(e, t) {
				return Tm(t, function(t) {
					return [t, e[t]]
				})
			},
			Im = function(e) {
				var t = -1,
					n = Array(e.size);
				return e.forEach(function(e) {
					n[++t] = [e, e]
				}), n
			},
			Nm = function(e) {
				return function(t) {
					var n = cd(t);
					return n == '[object Map]' ? wd(t) : n == '[object Set]' ? Im(t) : Fm(t, e(t))
				}
			}(Il),
			Bm = function(e) {
				for (var t = Nm(e), n = t.length; n--;) t[n][2] = Rm(t[n][1]);
				return t
			},
			Mm = function(e, t) {
				return function(n) {
					return null != n && n[e] === t && (t !== void 0 || e in Object(n))
				}
			},
			Dm = function(e) {
				var t = Bm(e);
				return 1 == t.length && t[0][2] ? Mm(t[0][0], t[0][1]) : function(n) {
					return n === e || Om(n, e, t)
				}
			},
			Lm = 'Expected a function';
		Bt.Cache = Tl;
		var zm = Sd ? Sd.prototype : void 0,
			jm = zm ? zm.toString : void 0,
			$m = function(e) {
				if ('string' == typeof e) return e;
				if (Yr(e)) return jm ? jm.call(e) : '';
				var t = e + '';
				return '0' == t && 1 / e == -(1 / 0) ? '-0' : t
			},
			qm = function(e) {
				return null == e ? '' : $m(e)
			},
			Hm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
			Wm = /\\(\\)?/g,
			Um = Bt(function(e) {
				var t = [];
				return qm(e).replace(Hm, function(e, n, o, i) {
					t.push(o ? i.replace(Wm, '$1') : n || e)
				}), t
			}),
			Km = function(e) {
				return Ss(e) ? e : Um(e)
			},
			Qm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			Jm = /^\w*$/,
			Gm = function(e, t) {
				if (Ss(e)) return !1;
				var n = typeof e;
				return 'number' == n || 'symbol' == n || 'boolean' == n || null == e || Yr(e) || Jm.test(e) || !Qm.test(e) || null != t && e in Object(t)
			},
			Ym = function(e) {
				if ('string' == typeof e || Yr(e)) return e;
				var t = e + '';
				return '0' == t && 1 / e == -(1 / 0) ? '-0' : t
			},
			Xm = function(e, t) {
				t = Gm(t, e) ? [t] : Km(t);
				for (var n = 0, o = t.length; null != e && n < o;) e = e[Ym(t[n++])];
				return n && n == o ? e : void 0
			},
			Zm = function(e, t, n) {
				var o = null == e ? void 0 : Xm(e, t);
				return o === void 0 ? n : o
			},
			eu = function(e, t) {
				return t in Object(e)
			},
			tu = function(e, t, n) {
				t = Gm(t, e) ? [t] : Km(t);
				for (var o = -1, i = t.length, a; ++o < i;) {
					var r = Ym(t[o]);
					if (!(a = null != e && n(e, r))) break;
					e = e[r]
				}
				if (a) return a;
				var i = e ? e.length : 0;
				return !!i && qr(i) && Ur(r, i) && (Ss(e) || Os(e) || Ts(e))
			},
			nu = function(e, t) {
				return null != e && tu(e, t, eu)
			},
			ou = function(e, t) {
				return Gm(e) && Rm(t) ? Mm(Ym(e), t) : function(n) {
					var o = Zm(n, e);
					return o === void 0 && o === t ? nu(n, e) : qc(t, o, void 0, 1 | 2)
				}
			},
			iu = function(e) {
				return e
			},
			au = function(e) {
				return function(t) {
					return Xm(t, e)
				}
			},
			ru = function(e) {
				return Gm(e) ? Mr(Ym(e)) : au(e)
			},
			su = function(e) {
				return 'function' == typeof e ? e : null == e ? iu : 'object' == typeof e ? Ss(e) ? ou(e[0], e[1]) : Dm(e) : ru(e)
			},
			lu = ds(function(e, t) {
				var n = Xs(t);
				return ys(n) && (n = void 0), ys(e) ? Em(e, ym(t, 1, ys, !0), su(n)) : []
			}),
			du = ds(function(e, t) {
				var n = Xs(t);
				return ys(n) && (n = void 0), ys(e) ? Em(e, ym(t, 1, ys, !0), void 0, n) : []
			}),
			cu = function(e, t, n) {
				var o = e ? e.length : 0;
				return o ? (t = n || void 0 === t ? 1 : ss(t), ot(e, 0 > t ? 0 : t, o)) : []
			},
			mu = function(e, t, n) {
				var o = e ? e.length : 0;
				return o ? (t = n || void 0 === t ? 1 : ss(t), t = o - t, ot(e, 0, 0 > t ? 0 : t)) : []
			},
			uu = function(e, t, n, o) {
				for (var i = e.length, a = o ? i : -1;
					(o ? a-- : ++a < i) && t(e[a], a, e););
				return n ? ot(e, o ? 0 : a, o ? a + 1 : i) : ot(e, o ? a + 1 : 0, o ? i : a)
			},
			pu = function(e, t, n) {
				return e === e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			},
			gu = function(e) {
				return e ? pu(ss(e), 0, 4294967295) : 0
			},
			fu = function(e, t, n, o) {
				var i = e.length;
				for (n = ss(n), 0 > n && (n = -n > i ? 0 : i + n), o = void 0 === o || o > i ? i : ss(o), 0 > o && (o += i), o = n > o ? 0 : gu(o); n < o;) e[n++] = t;
				return e
			},
			hu = function(e, t, n) {
				for (var o = e.length, i = n ? o : -1; n ? i-- : ++i < o;)
					if (t(e[i], i, e)) return i;
				return -1
			},
			bu = function(e) {
				return e && e.length ? e[0] : void 0
			},
			_u = function(e, t, n) {
				for (var o = n ? Cm : Am, i = e[0].length, a = e.length, r = a, s = Array(a), l = Infinity, d = []; r--;) {
					var c = e[r];
					r && t && (c = Tm(c, Pm(t))), l = or(c.length, l), s[r] = !n && (t || 120 <= i && 120 <= c.length) ? new Tc(r && c) : void 0
				}
				c = e[0];
				var m = -1,
					u = s[0];
				outer: for (; ++m < i && d.length < l;) {
					var p = c[m],
						g = t ? t(p) : p;
					if (p = n || 0 !== p ? p : 0, u ? !Sm(u, g) : !o(d, g, n)) {
						for (r = a; --r;) {
							var f = s[r];
							if (f ? !Sm(f, g) : !o(e[r], g, n)) continue outer
						}
						u && u.push(g), d.push(p)
					}
				}
				return d
			},
			ku = function(e) {
				return ys(e) ? e : []
			},
			wu = ds(function(e) {
				var t = Tm(e, ku);
				return t.length && t[0] === e[0] ? _u(t) : []
			}),
			yu = ds(function(e) {
				var t = Xs(e),
					n = Tm(e, ku);
				return t === Xs(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? _u(n, su(t)) : []
			}),
			vu = ds(function(e) {
				var t = Xs(e),
					n = Tm(e, ku);
				return t === Xs(n) ? t = void 0 : n.pop(), n.length && n[0] === e[0] ? _u(n, void 0, t) : []
			}),
			xu = Array.prototype,
			Au = xu.join,
			Cu = function(e, t) {
				var n = e.length;
				if (n) return t += 0 > t ? n : 0, Ur(t, n) ? e[t] : void 0
			},
			Tu = function(e, t, n, o) {
				for (var i = n - 1, a = e.length; ++i < a;)
					if (o(e[i], t)) return i;
				return -1
			},
			Pu = Array.prototype,
			Su = Pu.splice,
			Eu = function(e, t, n, o) {
				var i = o ? Tu : xm,
					a = -1,
					r = t.length,
					s = e;
				for (n && (s = Tm(e, Pm(n))); ++a < r;)
					for (var l = 0, d = t[a], c = n ? n(d) : d; - 1 < (l = i(s, c, l, o));) s !== e && Su.call(s, l, 1), Su.call(e, l, 1);
				return e
			},
			Vu = function(e, t) {
				return e && e.length && t && t.length ? Eu(e, t) : e
			},
			Ou = ds(Vu),
			Ru = function(e, t) {
				for (var n = -1, o = t.length, i = Array(o); ++n < o;) i[n] = null == e ? void 0 : Zm(e, t[n]);
				return i
			},
			Fu = function(e, t) {
				return 1 == t.length ? e : Xm(e, ot(t, 0, -1))
			},
			Iu = Array.prototype,
			Nu = Iu.splice,
			Bu = function(e, t) {
				for (var n = e ? t.length : 0, o = n - 1; n--;) {
					var i = t[n];
					if (n == o || i !== a) {
						var a = i;
						if (Ur(i)) Nu.call(e, i, 1);
						else if (!Gm(i, e)) {
							var r = Km(i),
								s = Fu(e, r);
							null != s && delete s[Ym(Xs(r))]
						} else delete e[Ym(i)]
					}
				}
				return e
			},
			Mu = function(e, t) {
				if (e !== t) {
					var n = e !== void 0,
						o = null === e,
						i = e === e,
						a = Yr(e),
						r = t !== void 0,
						s = null === t,
						l = t === t,
						d = Yr(t);
					if (!s && !d && !a && e > t || a && r && l && !s && !d || o && r && l || !n && l || !i) return 1;
					if (!o && !a && !d && e < t || d && n && i && !o && !a || s && n && i || !r && i || !l) return -1
				}
				return 0
			},
			Du = ds(function(e, t) {
				t = ym(t, 1);
				var n = e ? e.length : 0,
					o = Ru(e, t);
				return Bu(e, Tm(t, function(e) {
					return Ur(e, n) ? +e : e
				}).sort(Mu)), o
			}),
			Lu = Array.prototype,
			zu = Lu.reverse,
			ju = function(e, t, n, o) {
				t = n(t);
				for (var i = 0, a = e ? e.length : 0, r = t !== t, s = null === t, l = Yr(t), d = void 0 === t; i < a;) {
					var c = ar((i + a) / 2),
						m = n(e[c]),
						u = m !== void 0,
						p = null === m,
						g = m === m,
						f = Yr(m);
					if (r) var h = o || g;
					else h = d ? g && (o || u) : s ? g && u && (o || !p) : l ? g && u && !p && (o || !f) : p || f ? !1 : o ? m <= t : m < t;
					h ? i = c + 1 : a = c
				}
				return or(a, 4294967295 - 1)
			},
			$u = function(e, t, n) {
				var o = 0,
					i = e ? e.length : o;
				if ('number' == typeof t && t === t && i <= 4294967295 >>> 1) {
					for (; o < i;) {
						var a = o + i >>> 1,
							r = e[a];
						null !== r && !Yr(r) && (n ? r <= t : r < t) ? o = a + 1 : i = a
					}
					return i
				}
				return ju(e, t, iu, n)
			},
			qu = function(e, t) {
				for (var n = -1, o = e.length, i = 0, a = []; ++n < o;) {
					var r = e[n],
						s = t ? t(r) : r;
					if (!n || !Rr(s, l)) {
						var l = s;
						a[i++] = 0 === r ? 0 : r
					}
				}
				return a
			},
			Hu = Jl && 1 / Cd(new Jl([, -0]))[1] == 1 / 0 ? function(e) {
				return new Jl(e)
			} : function() {},
			Wu = function(e, t, n) {
				var o = -1,
					i = Am,
					a = e.length,
					r = !0,
					s = [],
					l = s;
				if (n) r = !1, i = Cm;
				else if (a >= 200) {
					var d = t ? null : Hu(e);
					if (d) return Cd(d);
					r = !1, i = Sm, l = new Tc
				} else l = t ? [] : s;
				outer: for (; ++o < a;) {
					var c = e[o],
						m = t ? t(c) : c;
					if (c = n || 0 !== c ? c : 0, r && m === m) {
						for (var u = l.length; u--;)
							if (l[u] === m) continue outer;
						t && l.push(m), s.push(c)
					} else i(l, m, n) || (l !== s && l.push(m), s.push(c))
				}
				return s
			},
			Uu = ds(function(e) {
				return Wu(ym(e, 1, ys, !0))
			}),
			Ku = ds(function(e) {
				var t = Xs(e);
				return ys(t) && (t = void 0), Wu(ym(e, 1, ys, !0), su(t))
			}),
			Qu = ds(function(e) {
				var t = Xs(e);
				return ys(t) && (t = void 0), Wu(ym(e, 1, ys, !0), void 0, t)
			}),
			Ju = function(e, t) {
				for (var n = -1, o = e.length, i = 0, a = []; ++n < o;) {
					var r = e[n];
					t(r, n, e) && (a[i++] = r)
				}
				return a
			},
			Gu = function(e) {
				if (!(e && e.length)) return [];
				var t = 0;
				return e = Ju(e, function(e) {
					if (ys(e)) return t = ir(e.length, t), !0
				}), ws(t, function(t) {
					return Tm(e, Mr(t))
				})
			},
			Yu = function(e, t) {
				if (!(e && e.length)) return [];
				var n = Gu(e);
				return null == t ? n : Tm(n, function(e) {
					return Qr(t, void 0, e)
				})
			},
			Xu = ds(function(e, t) {
				return ys(e) ? Em(e, t) : []
			}),
			Zu = function(e, t, n) {
				for (var o = -1, i = e.length; ++o < i;) var a = a ? jl(Em(a, e[o], t, n), Em(e[o], a, t, n)) : e[o];
				return a && a.length ? Wu(a, t, n) : []
			},
			ep = ds(function(e) {
				return Zu(Ju(e, ys))
			}),
			tp = ds(function(e) {
				var t = Xs(e);
				return ys(t) && (t = void 0), Zu(Ju(e, ys), su(t))
			}),
			np = ds(function(e) {
				var t = Xs(e);
				return ys(t) && (t = void 0), Zu(Ju(e, ys), void 0, t)
			}),
			op = ds(Gu),
			ip = function(e, t, n) {
				for (var o = -1, i = e.length, a = t.length, r = {}; ++o < i;) {
					var s = o < a ? t[o] : void 0;
					n(r, e[o], s)
				}
				return r
			},
			ap = function(e, t, n, o) {
				t = Gm(t, e) ? [t] : Km(t);
				for (var i = -1, a = t.length, r = e; null != r && ++i < a;) {
					var s = Ym(t[i]);
					if (Lr(r)) {
						var l = n;
						if (i != a - 1) {
							var d = r[s];
							l = o ? o(d, s, r) : void 0, l === void 0 && (l = null == d ? Ur(t[i + 1]) ? [] : {} : d)
						}
						Nr(r, s, l)
					}
					r = r[s]
				}
				return e
			},
			rp = ds(function(e) {
				var t = e.length,
					n = 1 < t ? e[t - 1] : void 0;
				return n = 'function' == typeof n ? (e.pop(), n) : void 0, Yu(e, n)
			}),
			sp = {
				chunk: function(e, t, n) {
					t = (n ? Kr(e, t, n) : void 0 === t) ? 1 : ir(ss(t), 0);
					var o = e ? e.length : 0;
					if (!o || 1 > t) return [];
					for (var i = 0, a = 0, r = Array(km(o / t)); i < o;) r[a++] = ot(e, i, i += t);
					return r
				},
				compact: function(e) {
					for (var t = -1, n = e ? e.length : 0, o = 0, i = []; ++t < n;) {
						var a = e[t];
						a && (i[o++] = a)
					}
					return i
				},
				concat: function() {
					for (var e = arguments.length, t = Array(e ? e - 1 : 0), n = arguments[0], o = e; o--;) t[o - 1] = arguments[o];
					return e ? jl(Ss(n) ? Ml(n) : [n], ym(t, 1)) : []
				},
				difference: Vm,
				differenceBy: lu,
				differenceWith: du,
				drop: cu,
				dropRight: mu,
				dropRightWhile: function(e, t) {
					return e && e.length ? uu(e, su(t, 3), !0, !0) : []
				},
				dropWhile: function(e, t) {
					return e && e.length ? uu(e, su(t, 3), !0) : []
				},
				fill: function(e, t, n, o) {
					var i = e ? e.length : 0;
					return i ? (n && 'number' != typeof n && Kr(e, t, n) && (n = 0, o = i), fu(e, t, n, o)) : []
				},
				findIndex: function(e, t) {
					return e && e.length ? hu(e, su(t, 3)) : -1
				},
				findLastIndex: function(e, t) {
					return e && e.length ? hu(e, su(t, 3), !0) : -1
				},
				first: bu,
				flatten: function(e) {
					var t = e ? e.length : 0;
					return t ? ym(e, 1) : []
				},
				flattenDeep: function(e) {
					var t = e ? e.length : 0;
					return t ? ym(e, 1 / 0) : []
				},
				flattenDepth: function(e, t) {
					var n = e ? e.length : 0;
					return n ? (t = void 0 === t ? 1 : ss(t), ym(e, t)) : []
				},
				fromPairs: function(e) {
					for (var t = -1, n = e ? e.length : 0, o = {}; ++t < n;) {
						var i = e[t];
						o[i[0]] = i[1]
					}
					return o
				},
				head: bu,
				indexOf: function(e, t, n) {
					var o = e ? e.length : 0;
					return o ? (n = ss(n), 0 > n && (n = ir(o + n, 0)), xm(e, t, n)) : -1
				},
				initial: function(e) {
					return mu(e, 1)
				},
				intersection: wu,
				intersectionBy: yu,
				intersectionWith: vu,
				join: function(e, t) {
					return e ? Au.call(e, t) : ''
				},
				last: Xs,
				lastIndexOf: function(e, t, n) {
					var o = e ? e.length : 0;
					if (!o) return -1;
					var i = o;
					if (void 0 !== n && (i = ss(n), i = (0 > i ? ir(o + i, 0) : or(i, o - 1)) + 1), t !== t) return vm(e, i, !0);
					for (; i--;)
						if (e[i] === t) return i;
					return -1
				},
				nth: function(e, t) {
					return e && e.length ? Cu(e, ss(t)) : void 0
				},
				pull: Ou,
				pullAll: Vu,
				pullAllBy: function(e, t, n) {
					return e && e.length && t && t.length ? Eu(e, t, su(n)) : e
				},
				pullAllWith: function(e, t, n) {
					return e && e.length && t && t.length ? Eu(e, t, void 0, n) : e
				},
				pullAt: Du,
				remove: function(e, t) {
					var n = [];
					if (!(e && e.length)) return n;
					var o = -1,
						i = [],
						a = e.length;
					for (t = su(t, 3); ++o < a;) {
						var r = e[o];
						t(r, o, e) && (n.push(r), i.push(o))
					}
					return Bu(e, i), n
				},
				reverse: function(e) {
					return e ? zu.call(e) : e
				},
				slice: function(e, t, n) {
					var o = e ? e.length : 0;
					return o ? (n && 'number' != typeof n && Kr(e, t, n) ? (t = 0, n = o) : (t = null == t ? 0 : ss(t), n = void 0 === n ? o : ss(n)), ot(e, t, n)) : []
				},
				sortedIndex: function(e, t) {
					return $u(e, t)
				},
				sortedIndexBy: function(e, t, n) {
					return ju(e, t, su(n))
				},
				sortedIndexOf: function(e, t) {
					var n = e ? e.length : 0;
					if (n) {
						var o = $u(e, t);
						if (o < n && Rr(e[o], t)) return o
					}
					return -1
				},
				sortedLastIndex: function(e, t) {
					return $u(e, t, !0)
				},
				sortedLastIndexBy: function(e, t, n) {
					return ju(e, t, su(n), !0)
				},
				sortedLastIndexOf: function(e, t) {
					var n = e ? e.length : 0;
					if (n) {
						var o = $u(e, t, !0) - 1;
						if (Rr(e[o], t)) return o
					}
					return -1
				},
				sortedUniq: function(e) {
					return e && e.length ? qu(e) : []
				},
				sortedUniqBy: function(e, t) {
					return e && e.length ? qu(e, su(t)) : []
				},
				tail: function(e) {
					return cu(e, 1)
				},
				take: function(e, t, n) {
					return e && e.length ? (t = n || void 0 === t ? 1 : ss(t), ot(e, 0, 0 > t ? 0 : t)) : []
				},
				takeRight: function(e, t, n) {
					var o = e ? e.length : 0;
					return o ? (t = n || void 0 === t ? 1 : ss(t), t = o - t, ot(e, 0 > t ? 0 : t, o)) : []
				},
				takeRightWhile: function(e, t) {
					return e && e.length ? uu(e, su(t, 3), !1, !0) : []
				},
				takeWhile: function(e, t) {
					return e && e.length ? uu(e, su(t, 3)) : []
				},
				union: Uu,
				unionBy: Ku,
				unionWith: Qu,
				uniq: function(e) {
					return e && e.length ? Wu(e) : []
				},
				uniqBy: function(e, t) {
					return e && e.length ? Wu(e, su(t)) : []
				},
				uniqWith: function(e, t) {
					return e && e.length ? Wu(e, void 0, t) : []
				},
				unzip: Gu,
				unzipWith: Yu,
				without: Xu,
				xor: ep,
				xorBy: tp,
				xorWith: np,
				zip: op,
				zipObject: function(e, t) {
					return ip(e || [], t || [], Nr)
				},
				zipObjectDeep: function(e, t) {
					return ip(e || [], t || [], ap)
				},
				zipWith: rp
			};
		const lp = new Map,
			dp = {
				transform(e, t, n) {
					const o = dp.getTransformationCase(e, t) || dp.defaultTransform,
						i = o(e, t, Object.assign({}, n)),
						a = sp.last(t.operations).baseVersion;
					return Mt(a, i)
				},
				defaultTransform(e, t, n) {
					const o = [];
					let i = t.operations,
						a = [];
					for (const r of e.operations) {
						const e = [r];
						for (const t of i)
							for (let o = 0; o < e.length; o++) {
								const i = e[o],
									r = bm(i, t, n);
								Array.prototype.splice.apply(e, [o, 1].concat(r)), o += r.length - 1;
								const s = Object.assign({}, n);
								s.isStrong = !n.isStrong, s.insertBefore = n.insertBefore === void 0 ? void 0 : !n.insertBefore;
								const l = bm(t, i, s);
								Array.prototype.push.apply(a, l)
							}
						i = a, a = [];
						for (const t of e) o.push(t)
					}
					return Kt(e.constructor, o)
				},
				addTransformationCase(e, t, n) {
					let o = lp.get(e);
					o || (o = new Map, lp.set(e, o)), o.set(t, n)
				},
				getTransformationCase(e, t) {
					let n = lp.get(e.constructor);
					if (!n || !n.get(t.constructor)) {
						const o = lp.keys();
						for (const i of o)
							if (e instanceof i && lp.get(i).get(t.constructor)) {
								n = lp.get(i);
								break
							}
					}
					return n ? n.get(t.constructor) : void 0
				},
				transformDeltaSets(e, t, n = null) {
					const o = Array.from(e),
						i = Array.from(t),
						a = null !== n,
						r = {
							isStrong: !0
						};
					if (a) {
						r.wasAffected = new Map, r.originalDelta = new Map, r.document = n, r.undoMode = !0;
						for (const e of i) r.originalDelta.set(e, e)
					}
					for (let s = 0; s < o.length; s++) {
						const e = [o[s]];
						for (let t = 0; t < i.length; t++) {
							const n = [i[t]];
							for (let t = 0; t < e.length; t++)
								for (let o = 0; o < n.length; o++) {
									a && zt(e[t], n[o], r);
									const i = dp.transform(e[t], n[o], {
											insertBefore: r.insertBefore,
											forceNotSticky: r.forceNotSticky,
											isStrong: r.isStrong,
											forceWeakRemove: r.forceWeakRemove,
											undoMode: r.undoMode
										}),
										s = dp.transform(n[o], e[t], {
											insertBefore: !r.insertBefore,
											forceNotSticky: r.forceNotSticky,
											isStrong: !r.isStrong,
											forceWeakRemove: r.forceWeakRemove,
											undoMode: r.undoMode
										});
									if (a) {
										Ut(e[t], i, r);
										const a = r.originalDelta.get(n[o]);
										for (const e of s) r.originalDelta.set(e, a)
									}
									e.splice(t, 1, ...i), t += i.length - 1, n.splice(o, 1, ...s), o += s.length - 1
								}
							i.splice(t, 1, ...n), t += n.length - 1
						}
						o.splice(s, 1, ...e), s += e.length - 1
					}
					const s = Dt(o) - Dt(e),
						l = Dt(i) - Dt(t);
					return l < s ? Lt(i, s - l) : s < l && Lt(o, l - s), {
						deltasA: o,
						deltasB: i
					}
				}
			};
		var cp = dp;
		class mp extends im {
			get type() {
				return 'marker'
			}
			get _reverseDeltaClass() {
				return mp
			}
			static get className() {
				return 'engine.model.delta.MarkerDelta'
			}
		}
		vt('setMarker', function(e, t) {
			const n = 'string' == typeof e ? e : e.name,
				o = this.document.markers.get(n);
			if (!t && !o) throw new _r('batch-setMarker-no-range: Range parameter is required when adding a new marker.');
			const i = o ? o.getRange() : null;
			return t ? Qt(this, n, i, t) : Qt(this, n, null, i), this
		}), vt('removeMarker', function(e) {
			const t = 'string' == typeof e ? e : e.name;
			if (!this.document.markers.has(t)) throw new _r('batch-removeMarker-no-marker: Trying to remove marker which does not exist.');
			const n = this.document.markers.get(t).getRange();
			return Qt(this, t, n, null), this
		}), om.register(mp);
		const up = cp.addTransformationCase,
			pp = cp.defaultTransform;
		up(rm, hm, (e, t, n) => {
			const o = pp(e, t, n);
			return e.range.containsPosition(t.position) && o.push(Gt(t, e)), o
		}), up(rm, mm, (e, t, n) => {
			if (!t.position) return pp(e, t, n);
			const o = n.undoMode,
				i = new Zs(t.position.root, t.position.path.slice(0, -1)),
				a = pp(e, t, n);
			if (o || !(t._cloneOperation instanceof Jc)) return a;
			for (const o of e.operations)
				if (o.range.containsPosition(i) || o.range.start.isEqual(i)) {
					const e = new rm,
						n = i.getShiftedBy(1),
						r = Zs.createFromPosition(n);
					r.path.push(0);
					const s = t._cloneOperation.nodes.getNode(0).getAttribute(o.key);
					e.addOperation(new Wc(new el(n, r), o.key, s === void 0 ? null : s, o.newValue, 0)), a.push(e);
					break
				}
			return a
		}), up(cm, um, (e, t, n) => {
			if (!t.position) return pp(e, t, n);
			const o = n.undoMode;
			return !o && e.position.isEqual(t.position) ? [t.getReversed(), e.clone()] : pp(e, t, n)
		}), up(mp, mm, Jt), up(mp, um, Jt), up(mp, gm, Jt), up(mp, fm, Jt), up(mp, lm, Jt), up(mp, pm, Jt), up(lm, um, (e, t, n) => {
			const o = n.undoMode;
			if (o || !t.position) return pp(e, t, n);
			const i = e.sourcePosition.root == t.position.root && 'same' === O(e.sourcePosition.getParentPath(), t.position.getParentPath()),
				a = e.sourcePosition.offset <= t.position.offset && e.sourcePosition.offset + e.howMany > t.position.offset;
			return i && a ? [t.getReversed(), e.clone()] : pp(e, t, n)
		}), up(um, cm, (e, t, n) => {
			if (!e.position) return pp(e, t, n);
			const o = n.undoMode;
			return !o && e.position.isEqual(t.position) ? [Yt()] : pp(e, t, n)
		}), up(um, lm, (e, t, n) => {
			const o = n.undoMode;
			if (o || !e.position) return pp(e, t, n);
			const i = e.position.root == t.sourcePosition.root && 'same' === O(e.position.getParentPath(), t.sourcePosition.getParentPath()),
				a = t.sourcePosition.offset <= e.position.offset && t.sourcePosition.offset + t.howMany > e.position.offset;
			return i && a ? [Yt()] : pp(e, t, n)
		}), up(mm, mm, (e, t, n) => {
			const o = n.undoMode;
			if (o) return pp(e, t, n);
			if (!e.position || !t.position) return pp(e, t, n);
			const i = e.position.getParentPath(),
				a = t.position.getParentPath();
			if (e.position.root == t.position.root && 'same' == O(i, a))
				if (e = e.clone(), e.position.offset < t.position.offset || e.position.offset == t.position.offset && n.isStrong) {
					e._cloneOperation instanceof Kc && t._cloneOperation instanceof Kc && e._cloneOperation.sourcePosition.offset > t._cloneOperation.sourcePosition.offset && e._cloneOperation.sourcePosition.offset--;
					const n = el.createFromPositionAndShift(e.position, e._moveOperation.howMany),
						o = el.createFromPositionAndShift(t.position, t._moveOperation.howMany),
						i = n.getDifference(o);
					let a = 0;
					for (const e of i) a += e.end.offset - e.start.offset;
					return 0 == a ? (e.operations.pop(), e.addOperation(new Yc(e.operations[0].baseVersion + 1))) : e.operations[1].howMany = a, [e]
				} else {
					const o = Object.assign({}, n);
					return o.isStrong = !0, o.insertBefore = !0, pp(e, t, o)
				}
			return pp(e, t, n)
		}), up(mm, fm, (e, t, n) => e.position ? e.position.root == t.position.root && 'same' === O(t.position.path, e.position.getParentPath()) ? [Yt()] : pp(e, t, n) : pp(e, t, n)), up(mm, gm, (e, t, n) => {
			if (!e.position) return pp(e, t, n);
			const o = e.position.root == t.range.start.root,
				i = o && 'same' === O(e.position.getParentPath(), t.range.start.getParentPath()),
				a = t.range.start.offset < e.position.offset && t.range.end.offset >= e.position.offset;
			if (i && a) return [Yt()];
			if (o && 'same' === O(e.position.getParentPath(), t.range.end.getShiftedBy(-1).path)) {
				const n = e.clone(),
					o = Zs.createFromPosition(t.range.start);
				o.path.push(t.howMany - 1);
				const i = o.getShiftedBy(1);
				n._cloneOperation.position = i;
				const a = Zs.createFromPosition(o);
				a.path.push(e.position.offset), n._moveOperation.sourcePosition = a;
				const r = Zs.createFromPosition(i);
				return r.path.push(0), n._moveOperation.targetPosition = r, [n]
			}
			return pp(e, t, n)
		}), up(mm, rm, (e, t, n) => {
			if (!e.position) return pp(e, t, n);
			e = e.clone();
			const o = n.undoMode,
				i = new Zs(e.position.root, e.position.path.slice(0, -1));
			if (o || !(e._cloneOperation instanceof Jc)) return [e];
			for (const o of t.operations)
				if (o.range.containsPosition(i) || o.range.start.isEqual(i)) {
					null === o.newValue ? e._cloneOperation.nodes.getNode(0).removeAttribute(o.key) : e._cloneOperation.nodes.getNode(0).setAttribute(o.key, o.newValue);
					break
				}
			return [e]
		}), up(fm, mm, (e, t, n) => t.position ? e.position.root == t.position.root && 'same' === O(e.position.path, t.position.getParentPath()) ? [t.getReversed(), e.clone()] : pp(e, t, n) : pp(e, t, n)), up(hm, rm, (e, t) => {
			const n = [e.clone()];
			return t.range.containsPosition(e.position) && n.push(Gt(e, t)), n
		}), up(gm, mm, (e, t, n) => {
			if (!t.position) return pp(e, t, n);
			const o = e.range.start.root == t.position.root,
				i = o && 'same' === O(e.range.start.getParentPath(), t.position.getParentPath()),
				a = e.range.start.offset < t.position.offset && e.range.end.offset >= t.position.offset;
			if (i && a) return [t.getReversed(), e.clone()];
			if (o && 'same' === O(t.position.getParentPath(), e.range.end.getShiftedBy(-1).path)) {
				const t = e.clone();
				return t._insertOperation.position.offset++, t._moveOperation.howMany++, t._moveOperation.targetPosition.path[t._moveOperation.targetPosition.path.length - 2]++, [t]
			}
			return pp(e, t, n)
		}), up(pm, mm, (e, t, n) => {
			const o = n.undoMode,
				i = pp(e, t, n);
			if (o || !(t._cloneOperation instanceof Jc)) return i;
			const a = t._cloneOperation.position.getShiftedBy(-1);
			if (a && e.operations[0].position.isEqual(a)) {
				const t = e.clone();
				t.operations[0].position = a.getShiftedBy(1), i.push(t)
			}
			return i
		}), up(mm, pm, (e, t, n) => {
			e = e.clone();
			const o = n.undoMode;
			if (o || !(e._cloneOperation instanceof Jc)) return [e];
			const i = e._cloneOperation.position.getShiftedBy(-1);
			if (i && !o && t.operations[0].position.isEqual(i)) {
				const n = t.clone();
				return n.operations[0].position = i.getShiftedBy(1), n.operations[0].oldName = e._cloneOperation.nodes.getNode(0).name, [e, n]
			}
			return [e]
		}), up(dm, mm, (e, t, n) => {
			const o = pp(e, t, n),
				i = t._cloneOperation.position || t._cloneOperation.targetPosition;
			if (!i) return pp(e, t, n);
			const a = n.undoMode;
			if (a) return o;
			for (const a of o)
				if (a instanceof dm) {
					const e = a._moveOperation,
						t = e.sourcePosition.getShiftedBy(e.howMany);
					t.isEqual(i) && (e.howMany += 1)
				}
			return o
		}), up(mm, dm, (e, t, n) => {
			const o = n.undoMode;
			if (o) return pp(e, t, n);
			const i = e._cloneOperation.position || e._cloneOperation.targetPosition;
			if (!i) return pp(e, t, n);
			t = t.clone();
			const a = t._moveOperation,
				r = a.sourcePosition.getShiftedBy(a.howMany);
			return r.isEqual(i) && (a.howMany += 1), pp(e, t, n)
		});
		class gp extends Gs {
			constructor(e, t, n = 'main') {
				super(t), this._doc = e, this.rootName = n
			}
			get document() {
				return this._doc
			}
			is(e, t) {
				return t ? 'rootElement' == e && t == this.name || super.is(e, t) : 'rootElement' == e || super.is(e)
			}
			toJSON() {
				return this.rootName
			}
		}
		class fp {
			constructor() {
				this._deltas = [], this._historyPoints = new Map, this._undoPairs = new Map, this._undoneDeltas = new Set
			}
			addDelta(e) {
				if (0 < e.operations.length && !this._historyPoints.has(e.baseVersion)) {
					const t = this._deltas.length;
					this._deltas[t] = e, this._historyPoints.set(e.baseVersion, t)
				}
			}* getDeltas(e = 0, t = nr) {
				if (0 !== this._deltas.length) {
					let n = this._getIndex(e);
					if (-1 != n)
						for (; n < this._deltas.length;) {
							const e = this._deltas[n++];
							if (e.baseVersion >= t) break;
							yield e
						}
				}
			}
			getDelta(e) {
				const t = this._historyPoints.get(e);
				return t === void 0 ? null : this._deltas[t]
			}
			setDeltaAsUndone(e, t) {
				this._undoPairs.set(t, e), this._undoneDeltas.add(e)
			}
			isUndoingDelta(e) {
				return this._undoPairs.has(e)
			}
			isUndoneDelta(e) {
				return this._undoneDeltas.has(e)
			}
			getUndoneDelta(e) {
				return this._undoPairs.get(e)
			}
			_getIndex(e) {
				const t = this._historyPoints.get(e);
				if (t === void 0) {
					const t = this._deltas[this._deltas.length - 1],
						n = t.baseVersion + t.operations.length;
					if (0 > e || e >= n) return -1;
					throw new _r('model-history-wrong-version: Given base version points to the middle of a delta.')
				}
				return t
			}
		}
		class hp extends el {
			constructor(e, t) {
				super(e, t), Xt.call(this)
			}
			detach() {
				this.stopListening()
			}
		}
		r(hp, Or);
		class bp {
			constructor(e, t) {
				this._lastRangeBackward = !1, this._ranges = [], this._attrs = new Map, e && this.setRanges(e, t)
			}
			get anchor() {
				if (0 < this._ranges.length) {
					const e = this._ranges[this._ranges.length - 1];
					return this._lastRangeBackward ? e.end : e.start
				}
				return null
			}
			get focus() {
				if (0 < this._ranges.length) {
					const e = this._ranges[this._ranges.length - 1];
					return this._lastRangeBackward ? e.start : e.end
				}
				return null
			}
			get isCollapsed() {
				const e = this._ranges.length;
				return !(1 !== e) && this._ranges[0].isCollapsed
			}
			get rangeCount() {
				return this._ranges.length
			}
			get isBackward() {
				return !this.isCollapsed && this._lastRangeBackward
			}
			isEqual(e) {
				if (this.rangeCount != e.rangeCount) return !1;
				if (0 === this.rangeCount) return !0;
				if (!this.anchor.isEqual(e.anchor) || !this.focus.isEqual(e.focus)) return !1;
				for (const t of this._ranges) {
					let n = !1;
					for (const o of e._ranges)
						if (t.isEqual(o)) {
							n = !0;
							break
						}
					if (!n) return !1
				}
				return !0
			}* getRanges() {
				for (const e of this._ranges) yield el.createFromRange(e)
			}
			getFirstRange() {
				let e = null;
				for (const t of this._ranges)(!e || t.start.isBefore(e.start)) && (e = t);
				return e ? el.createFromRange(e) : null
			}
			getLastRange() {
				let e = null;
				for (const t of this._ranges)(!e || t.end.isAfter(e.end)) && (e = t);
				return e ? el.createFromRange(e) : null
			}
			getFirstPosition() {
				const e = this.getFirstRange();
				return e ? Zs.createFromPosition(e.start) : null
			}
			getLastPosition() {
				const e = this.getLastRange();
				return e ? Zs.createFromPosition(e.end) : null
			}
			addRange(e, t = !1) {
				this._pushRange(e), this._lastRangeBackward = !!t, this.fire('change:range', {
					directChange: !0
				})
			}
			removeAllRanges() {
				0 < this._ranges.length && (this._removeAllRanges(), this.fire('change:range', {
					directChange: !0
				}))
			}
			setRanges(e, t = !1) {
				e = Array.from(e);
				const n = e.some((e) => {
					if (!(e instanceof el)) throw new _r('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
					return this._ranges.every((t) => !t.isEqual(e))
				});
				if (e.length !== this._ranges.length || n) {
					this._removeAllRanges();
					for (const t of e) this._pushRange(t);
					this._lastRangeBackward = !!t, this.fire('change:range', {
						directChange: !0
					})
				}
			}
			setTo(e) {
				e instanceof bp ? this.setRanges(e.getRanges(), e.isBackward) : e instanceof el ? this.setRanges([e]) : S(e) ? this.setRanges(e) : this.setRanges([new el(e)])
			}
			setIn(e) {
				this.setRanges([el.createIn(e)])
			}
			setOn(e) {
				this.setRanges([el.createOn(e)])
			}
			setCollapsedAt(e, t) {
				const n = Zs.createAt(e, t),
					o = new el(n, n);
				this.setRanges([o])
			}
			collapseToStart() {
				const e = this.getFirstPosition();
				null !== e && this.setRanges([new el(e, e)])
			}
			collapseToEnd() {
				const e = this.getLastPosition();
				null !== e && this.setRanges([new el(e, e)])
			}
			moveFocusTo(e, t) {
				if (null === this.anchor) throw new _r('model-selection-moveFocusTo-no-ranges: Cannot set selection focus if there are no ranges in selection.');
				const n = Zs.createAt(e, t);
				if ('same' != n.compareWith(this.focus)) {
					const e = this.anchor;
					this._ranges.length && this._popRange(), 'before' == n.compareWith(e) ? this.addRange(new el(n, e), !0) : this.addRange(new el(e, n))
				}
			}
			getAttribute(e) {
				return this._attrs.get(e)
			}
			getAttributes() {
				return this._attrs.entries()
			}
			getAttributeKeys() {
				return this._attrs.keys()
			}
			hasAttribute(e) {
				return this._attrs.has(e)
			}
			clearAttributes() {
				if (0 < this._attrs.size) {
					const e = Array.from(this._attrs.keys());
					this._attrs.clear(), this.fire('change:attribute', {
						attributeKeys: e,
						directChange: !0
					})
				}
			}
			removeAttribute(e) {
				this.hasAttribute(e) && (this._attrs.delete(e), this.fire('change:attribute', {
					attributeKeys: [e],
					directChange: !0
				}))
			}
			setAttribute(e, t) {
				this.getAttribute(e) !== t && (this._attrs.set(e, t), this.fire('change:attribute', {
					attributeKeys: [e],
					directChange: !0
				}))
			}
			setAttributesTo(e) {
				if (e = P(e), !en(e, this._attrs)) {
					const t = new Set(Array.from(e.keys()).concat(Array.from(this._attrs.keys())));
					for (const [n, o] of e) this._attrs.get(n) === o && t.delete(n);
					this._attrs = e, this.fire('change:attribute', {
						attributeKeys: Array.from(t),
						directChange: !0
					})
				}
			}
			getSelectedElement() {
				if (1 !== this.rangeCount) return null;
				const e = this.getFirstRange(),
					t = e.start.nodeAfter,
					n = e.end.nodeBefore;
				return t instanceof Gs && t == n ? t : null
			}* getSelectedBlocks() {
				const e = new WeakSet;
				for (const t of this.getRanges()) {
					const n = nn(t.start, e);
					n && (yield n);
					for (const n of t.getWalker()) 'elementEnd' == n.type && tn(n.item, e) && (yield n.item);
					const o = nn(t.end, e);
					o && !t.end.isTouching(Zs.createAt(o)) && (yield o)
				}
			}
			containsEntireContent(e = this.anchor.root) {
				const t = Zs.createAt(e),
					n = Zs.createAt(e, 'end');
				return t.isTouching(this.getFirstPosition()) && n.isTouching(this.getLastPosition())
			}
			static createFromSelection(e) {
				const t = new this;
				return t.setTo(e), t
			}
			_pushRange(e) {
				if (!(e instanceof el)) throw new _r('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
				this._checkRange(e), this._ranges.push(el.createFromRange(e))
			}
			_checkRange(e) {
				for (let t = 0; t < this._ranges.length; t++)
					if (e.isIntersecting(this._ranges[t])) throw new _r('model-selection-range-intersects: Trying to add a range that intersects with another range from selection.', {
						addedRange: e,
						intersectingRange: this._ranges[t]
					})
			}
			_popRange() {
				this._ranges.pop()
			}
			_removeAllRanges() {
				for (; 0 < this._ranges.length;) this._popRange()
			}
		}
		r(bp, Or);
		const _p = 'selection:',
			kp = new Set(['addAttribute', 'removeAttribute', 'changeAttribute', 'addRootAttribute', 'removeRootAttribute', 'changeRootAttribute']);
		class wp extends bp {
			constructor(e) {
				super(), this._document = e, this._attributePriority = new Map, this.listenTo(this._document, 'change', (e, t, n, o) => {
					kp.has(t) && this._updateAttributes(!1), an(n, o, this._document)
				})
			}
			get isCollapsed() {
				const e = this._ranges.length;
				return 0 === e ? this._document._getDefaultRange().isCollapsed : super.isCollapsed
			}
			get anchor() {
				return super.anchor || this._document._getDefaultRange().start
			}
			get focus() {
				return super.focus || this._document._getDefaultRange().end
			}
			get rangeCount() {
				return this._ranges.length ? this._ranges.length : 1
			}
			get hasOwnRange() {
				return 0 < this._ranges.length
			}
			destroy() {
				for (let e = 0; e < this._ranges.length; e++) this._ranges[e].detach();
				this.stopListening()
			}* getRanges() {
				this._ranges.length ? yield* super.getRanges(): yield this._document._getDefaultRange()
			}
			getFirstRange() {
				return super.getFirstRange() || this._document._getDefaultRange()
			}
			getLastRange() {
				return super.getLastRange() || this._document._getDefaultRange()
			}
			addRange(e, t = !1) {
				super.addRange(e, t), this.refreshAttributes()
			}
			removeAllRanges() {
				super.removeAllRanges(), this.refreshAttributes()
			}
			setRanges(e, t = !1) {
				super.setRanges(e, t), this.refreshAttributes()
			}
			setAttribute(e, t) {
				if (this.isCollapsed && this.anchor.parent.isEmpty && this._storeAttribute(e, t), this._setAttribute(e, t)) {
					this.fire('change:attribute', {
						attributeKeys: [e],
						directChange: !0
					})
				}
			}
			removeAttribute(e) {
				if (this.isCollapsed && this.anchor.parent.isEmpty && this._removeStoredAttribute(e), this._removeAttribute(e)) {
					this.fire('change:attribute', {
						attributeKeys: [e],
						directChange: !0
					})
				}
			}
			setAttributesTo(e) {
				e = P(e), this.isCollapsed && this.anchor.parent.isEmpty && this._setStoredAttributesTo(e);
				const t = this._setAttributesTo(e);
				if (0 < t.size) {
					const e = Array.from(t);
					this.fire('change:attribute', {
						attributeKeys: e,
						directChange: !0
					})
				}
			}
			clearAttributes() {
				this.setAttributesTo([])
			}
			refreshAttributes() {
				this._updateAttributes(!0)
			}
			static createFromSelection() {
				throw new _r('documentselection-cannot-create: Cannot create a new DocumentSelection instance.')
			}
			_popRange() {
				this._ranges.pop().detach()
			}
			_pushRange(e) {
				const t = this._prepareRange(e);
				t && this._ranges.push(t)
			}
			_prepareRange(e) {
				if (!(e instanceof el)) throw new _r('model-selection-added-not-range: Trying to add an object that is not an instance of Range.');
				if (e.root == this._document.graveyard) return void wr.warn('model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.');
				this._checkRange(e);
				const t = hp.createFromRange(e);
				return this.listenTo(t, 'change:range', (e, n, o) => {
					t.root == this._document.graveyard && this._fixGraveyardSelection(t, o.sourcePosition), this.fire('change:range', {
						directChange: !1
					})
				}), t
			}
			_updateAttributes(e) {
				const t = P(this._getSurroundingAttributes()),
					n = P(this.getAttributes());
				if (e) this._attributePriority = new Map, this._attrs = new Map;
				else
					for (const [e, t] of this._attributePriority) 'low' == t && (this._attrs.delete(e), this._attributePriority.delete(e));
				this._setAttributesTo(t, !1);
				const o = [];
				for (const [t, i] of this.getAttributes()) n.has(t) && n.get(t) === i || o.push(t);
				for (const [t] of n) this.hasAttribute(t) || o.push(t);
				0 < o.length && this.fire('change:attribute', {
					attributeKeys: o,
					directChange: !1
				})
			}
			static _getStoreAttributeKey(e) {
				return _p + e
			}
			static _isStoreAttributeKey(e) {
				return e.startsWith(_p)
			}
			_setAttribute(e, t, n = !0) {
				const o = n ? 'normal' : 'low';
				if ('low' == o && 'normal' == this._attributePriority.get(e)) return !1;
				const i = super.getAttribute(e);
				return i !== t && (this._attrs.set(e, t), this._attributePriority.set(e, o), !0)
			}
			_removeAttribute(e, t = !0) {
				const n = t ? 'normal' : 'low';
				return 'low' == n && 'normal' == this._attributePriority.get(e) ? !1 : !!super.hasAttribute(e) && (this._attrs.delete(e), this._attributePriority.set(e, n), !0)
			}
			_setAttributesTo(e, t = !0) {
				const n = new Set;
				for (const [o, i] of this.getAttributes()) e.get(o) !== i && this._removeAttribute(o, t) && n.add(o);
				for (const [o, i] of e) {
					const e = this._setAttribute(o, i, t);
					e && n.add(o)
				}
				return n
			}* _getStoredAttributes() {
				const e = this.getFirstPosition().parent;
				if (this.isCollapsed && e.isEmpty)
					for (const t of e.getAttributeKeys())
						if (t.startsWith(_p)) {
							const n = t.substr(_p.length);
							yield [n, e.getAttribute(t)]
						}
			}
			_removeStoredAttribute(e) {
				const t = wp._getStoreAttributeKey(e);
				this._document.batch().removeAttribute(this.anchor.parent, t)
			}
			_storeAttribute(e, t) {
				const n = wp._getStoreAttributeKey(e);
				this._document.batch().setAttribute(this.anchor.parent, n, t)
			}
			_setStoredAttributesTo(e) {
				const t = this.anchor.parent,
					n = this._document.batch();
				for (const [o] of this._getStoredAttributes()) {
					const e = wp._getStoreAttributeKey(o);
					n.removeAttribute(t, e)
				}
				for (const [o, i] of e) {
					const e = wp._getStoreAttributeKey(o);
					n.setAttribute(t, e, i)
				}
			}
			_getSurroundingAttributes() {
				const e = this.getFirstPosition(),
					t = this._document.schema;
				let n = null;
				if (!this.isCollapsed) {
					const e = this.getFirstRange();
					for (const o of e) {
						if (o.item.is('element') && t.objects.has(o.item.name)) break;
						'text' == o.type && null == n && (n = o.item.getAttributes())
					}
				} else {
					const t = e.textNode ? e.textNode : e.nodeBefore,
						o = e.textNode ? e.textNode : e.nodeAfter;
					if (n = on(t), n || (n = on(o)), !n)
						for (let e = t; e && !n;) e = e.previousSibling, n = on(e);
					if (!n)
						for (let e = o; e && !n;) e = e.nextSibling, n = on(e);
					n || (n = this._getStoredAttributes())
				}
				return n
			}
			_fixGraveyardSelection(e, t) {
				const n = Zs.createFromPosition(t),
					o = this._document.getNearestSelectionRange(n),
					i = this._ranges.indexOf(e);
				if (this._ranges.splice(i, 1), e.detach(), o) {
					const e = this._prepareRange(o);
					this._ranges.splice(i, 0, e)
				}
				this.fire('change:range', {
					directChange: !1
				})
			}
		}
		class yp {
			constructor() {
				this.objects = new Set, this.limits = new Set, this._items = new Map, this._extensionChains = new Map, this.registerItem('$root'), this.registerItem('$block'), this.registerItem('$inline'), this.registerItem('$text', '$inline'), this.allow({
					name: '$block',
					inside: '$root'
				}), this.allow({
					name: '$inline',
					inside: '$block'
				}), this.limits.add('$root'), this.registerItem('$clipboardHolder', '$root'), this.allow({
					name: '$inline',
					inside: '$clipboardHolder'
				})
			}
			allow(e) {
				this._getItem(e.name).allow(yp._normalizeQueryPath(e.inside), e.attributes)
			}
			disallow(e) {
				this._getItem(e.name).disallow(yp._normalizeQueryPath(e.inside), e.attributes)
			}
			requireAttributes(e, t) {
				this._getItem(e).requireAttributes(t)
			}
			check(e) {
				if (!this.hasItem(e.name)) return !1;
				Ss(e.attributes) ? 0 === e.attributes.length && e.attributes.push(void 0) : e.attributes = [e.attributes];
				const t = yp._normalizeQueryPath(e.inside),
					n = this._extensionChains.get(e.name).map((e) => this._getItem(e));
				if (!this._getItem(e.name)._checkRequiredAttributes(e.attributes)) return !1;
				for (const o of e.attributes)
					for (const e of n)
						if (e._hasMatchingPath('disallow', t, o)) return !1;
				for (const o of e.attributes) {
					if (o && wp._isStoreAttributeKey(o)) continue;
					let e = !1;
					for (const i of n)
						if (i._hasMatchingPath('allow', t, o)) {
							e = !0;
							break
						}
					if (!e) return !1
				}
				return !0
			}
			hasItem(e) {
				return this._items.has(e)
			}
			registerItem(e, t) {
				if (this.hasItem(e)) throw new _r('model-schema-item-exists: Item with specified name already exists in schema.');
				if (!!t && !this.hasItem(t)) throw new _r('model-schema-no-item: Item with specified name does not exist in schema.');
				this._items.set(e, new vp(this));
				const n = this.hasItem(t) ? this._extensionChains.get(t).concat(e) : [e];
				this._extensionChains.set(e, n)
			}
			itemExtends(e, t) {
				if (!this.hasItem(e) || !this.hasItem(t)) throw new _r('model-schema-no-item: Item with specified name does not exist in schema.');
				const n = this._extensionChains.get(e);
				return n.some((e) => e == t)
			}
			checkAttributeInSelection(e, t) {
				if (e.isCollapsed) return this.check({
					name: '$text',
					inside: e.getFirstPosition(),
					attributes: t
				});
				else {
					const n = e.getRanges();
					for (const e of n)
						for (const n of e) {
							const e = n.item.name || '$text',
								o = Array.from(n.item.getAttributeKeys()).concat(t);
							if (this.check({
									name: e,
									inside: n.previousPosition,
									attributes: o
								})) return !0
						}
				}
				return !1
			}
			getValidRanges(e, t) {
				const n = [];
				for (const o of e) {
					let e = o.start,
						i = o.start;
					const a = o.end;
					for (const a of o.getWalker()) {
						const o = a.item.name || '$text',
							r = Zs.createBefore(a.item);
						this.check({
							name: o,
							inside: r,
							attributes: t
						}) || (!i.isEqual(e) && n.push(new el(i, e)), i = a.nextPosition), e = a.nextPosition
					}
					i && !i.isEqual(a) && n.push(new el(i, a))
				}
				return n
			}
			getLimitElement(e) {
				let t = Array.from(e.getRanges()).reduce((e, t) => e ? e.getCommonAncestor(t.getCommonAncestor()) : t.getCommonAncestor(), null);
				for (; !this.limits.has(t.name) && t.parent;) t = t.parent;
				return t
			}
			removeDisallowedAttributes(e, t, n) {
				for (const o of e) {
					const e = o.is('text') ? '$text' : o.name,
						i = Array.from(o.getAttributeKeys()),
						a = yp._normalizeQueryPath(t);
					if (!this.check({
							name: e,
							attributes: i,
							inside: a
						}))
						for (const t of o.getAttributeKeys()) this.check({
							name: e,
							attributes: t,
							inside: a
						}) || (n ? n.removeAttribute(o, t) : o.removeAttribute(t));
					o.is('element') && this.removeDisallowedAttributes(o.getChildren(), a.concat(o.name), n)
				}
			}
			_getItem(e) {
				if (!this.hasItem(e)) throw new _r('model-schema-no-item: Item with specified name does not exist in schema.');
				return this._items.get(e)
			}
			static _normalizeQueryPath(e) {
				let t = [];
				if (Ss(e))
					for (const n of e) n instanceof Gs ? t.push(n.name) : Os(n) && t.push(n);
				else if (e instanceof Zs) {
					for (let n = e.parent; null !== n;) t.push(n.name), n = n.parent;
					t.reverse()
				} else Os(e) && (t = e.split(' '));
				return t
			}
		}
		class vp {
			constructor(e) {
				this._schema = e, this._allowed = [], this._disallowed = [], this._requiredAttributes = []
			}
			allow(e, t) {
				this._addPath('_allowed', e, t)
			}
			disallow(e, t) {
				this._addPath('_disallowed', e, t)
			}
			requireAttributes(e) {
				this._requiredAttributes.push(e)
			}
			toJSON() {
				const e = Hd(this);
				return e._schema = '[model.Schema]', e
			}
			_addPath(e, t, n) {
				t = t.slice(), Ss(n) || (n = [n]);
				for (const o of n) this[e].push({
					path: t,
					attribute: o
				})
			}
			_getPaths(e, t) {
				const n = 'allow' === e ? this._allowed : this._disallowed,
					o = [];
				for (const i of n) i.attribute === t && o.push(i.path);
				return o
			}
			_checkRequiredAttributes(e) {
				let t = !0;
				for (const n of this._requiredAttributes) {
					t = !0;
					for (const o of n)
						if (-1 == e.indexOf(o)) {
							t = !1;
							break
						}
					if (t) break
				}
				return t
			}
			_hasMatchingPath(e, t, n) {
				const o = this._getPaths(e, n);
				for (const i of o)
					if (rn(this._schema, t, i)) return !0;
				return !1
			}
		}
		class xp {
			constructor() {
				this._markers = new Map
			}[Symbol.iterator]() {
				return this._markers.values()
			}
			has(e) {
				return this._markers.has(e)
			}
			get(e) {
				return this._markers.get(e) || null
			}
			set(e, t) {
				const n = e instanceof Ap ? e.name : e,
					o = this._markers.get(n);
				if (o) {
					const e = o.getRange();
					if (e.isEqual(t)) return o;
					this.remove(n)
				}
				const i = hp.createFromRange(t),
					a = new Ap(n, i);
				return this._markers.set(n, a), this.fire('add:' + n, a), a
			}
			remove(e) {
				const t = e instanceof Ap ? e.name : e,
					n = this._markers.get(t);
				return !!n && (this._markers.delete(t), this.fire('remove:' + t, n), this._destroyMarker(n), !0)
			}* getMarkersAtPosition(e) {
				for (const t of this) t.getRange().containsPosition(e) && (yield t)
			}
			destroy() {
				for (const e of this._markers.values()) this._destroyMarker(e);
				this._markers = null, this.stopListening()
			}* getMarkersGroup(e) {
				for (const t of this._markers.values()) t.name.startsWith(e + ':') && (yield t)
			}
			_destroyMarker(e) {
				e.stopListening(), e._liveRange.detach(), e._liveRange = null
			}
		}
		r(xp, Or);
		class Ap {
			constructor(e, t) {
				this.name = e, this._liveRange = t, this._liveRange.delegate('change:range').to(this), this._liveRange.delegate('change:content').to(this)
			}
			getStart() {
				if (!this._liveRange) throw new _r('marker-destroyed: Cannot use a destroyed marker instance.');
				return Zs.createFromPosition(this._liveRange.start)
			}
			getEnd() {
				if (!this._liveRange) throw new _r('marker-destroyed: Cannot use a destroyed marker instance.');
				return Zs.createFromPosition(this._liveRange.end)
			}
			getRange() {
				if (!this._liveRange) throw new _r('marker-destroyed: Cannot use a destroyed marker instance.');
				return el.createFromRange(this._liveRange)
			}
		}
		r(Ap, Or);
		const Cp = '$graveyard';
		class Tp {
			constructor() {
				this.version = 0, this.schema = new yp, this.history = new fp(this), this.markers = new xp, this.selection = new wp(this), this._pendingChanges = [], this.roots = new Map, this.selection.on('change:range', () => {
					for (const e of this.selection.getRanges())
						if (!this._validateSelectionRange(e)) throw new _r('document-selection-wrong-position: Range from document selection starts or ends at incorrect position.', {
							range: e
						})
				}), this.createRoot('$root', Cp)
			}
			get graveyard() {
				return this.getRoot(Cp)
			}
			applyOperation(e) {
				if (e.baseVersion !== this.version) throw new _r('model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.', {
					operation: e
				});
				const t = e._execute();
				this.version++, this.history.addDelta(e.delta), this.fire('change', e.type, t, e.delta.batch, e.delta.type)
			}
			batch(e) {
				return new am(this, e)
			}
			createRoot(e = '$root', t = 'main') {
				if (this.roots.has(t)) throw new _r('model-document-createRoot-name-exists: Root with specified name already exists.', {
					name: t
				});
				const n = new gp(this, e, t);
				return this.roots.set(t, n), n
			}
			destroy() {
				this.selection.destroy(), this.stopListening()
			}
			enqueueChanges(e) {
				if (this._pendingChanges.push(e), 1 == this._pendingChanges.length) {
					for (; this._pendingChanges.length;) this._pendingChanges[0](), this._pendingChanges.shift();
					this.fire('changesDone')
				}
			}
			getRoot(e = 'main') {
				if (!this.roots.has(e)) throw new _r('model-document-getRoot-root-not-exist: Root with specified name does not exist.', {
					name: e
				});
				return this.roots.get(e)
			}
			hasRoot(e) {
				return this.roots.has(e)
			}
			getRootNames() {
				return Array.from(this.roots.keys()).filter((e) => e != Cp)
			}
			getNearestSelectionRange(e, t = 'both') {
				if (this.schema.check({
						name: '$text',
						inside: e
					})) return new el(e);
				let n, o;
				('both' == t || 'backward' == t) && (n = new Ys({
					startPosition: e,
					direction: 'backward'
				})), ('both' == t || 'forward' == t) && (o = new Ys({
					startPosition: e
				}));
				for (const i of ln(n, o)) {
					const e = i.walker == n ? 'elementEnd' : 'elementStart',
						t = i.value;
					if (t.type == e && this.schema.objects.has(t.item.name)) return el.createOn(t.item);
					if (this.schema.check({
							name: '$text',
							inside: t.nextPosition
						})) return new el(t.nextPosition)
				}
				return null
			}
			transformDeltas(e, t, n = !1) {
				return cp.transformDeltaSets(e, t, n ? this : null)
			}
			toJSON() {
				const e = Hd(this);
				return e.selection = '[engine.model.DocumentSelection]', e
			}
			_getDefaultRoot() {
				for (const e of this.roots.values())
					if (e !== this.graveyard) return e;
				return this.graveyard
			}
			_getDefaultRange() {
				const e = this._getDefaultRoot(),
					t = new Zs(e, [0]),
					n = this.getNearestSelectionRange(t);
				return n || new el(t)
			}
			_validateSelectionRange(e) {
				return sn(e.start) && sn(e.end)
			}
		}
		r(Tp, Or);
		class Pp {
			constructor(e) {
				const t = this.constructor.build && this.constructor.build.plugins;
				this.config = new hr(e, this.constructor.build && this.constructor.build.config), this.config.define('plugins', t), this.plugins = new yr(this, t), this.commands = new vr, this.locale = new Ar(this.config.get('lang')), this.t = this.locale.t, this.document = new Tp, this.data = new Ac(this.document), this.set('isReadOnly', !1)
			}
			initPlugins() {
				function e(e, t) {
					return e.reduce((e, n) => n[t] ? e.then(n[t].bind(n)) : e, Promise.resolve())
				}
				const t = this,
					n = this.config;
				return function() {
					const e = n.get('plugins') || [],
						o = n.get('removePlugins') || [];
					return t.plugins.load(e, o)
				}().then((t) => e(t, 'init').then(() => e(t, 'afterInit'))).then(() => this.fire('pluginsReady'))
			}
			destroy() {
				return this.fire('destroy'), this.stopListening(), this.commands.destroy(), this.plugins.destroy().then(() => {
					this.document.destroy(), this.data.destroy()
				})
			}
			execute(...e) {
				this.commands.execute(...e)
			}
			static create(e) {
				return new Promise((t) => {
					const n = new this(e);
					t(n.initPlugins().then(() => {
						n.fire('dataReady'), n.fire('ready')
					}).then(() => n))
				})
			}
		}
		r(Pp, Ws);
		const Sp = zs({}, Or, {
			listenTo(...e) {
				const t = e[0];
				dn(t) && (e[0] = this._getProxyEmitter(t) || new Vp(t)), Or.listenTo.apply(this, e)
			},
			stopListening(...e) {
				const t = e[0];
				if (dn(t)) {
					const n = this._getProxyEmitter(t);
					if (!n) return;
					e[0] = n
				}
				Or.stopListening.apply(this, e)
			},
			_getProxyEmitter(e) {
				return l(this, cn(e))
			}
		});
		var Ep = Sp;
		class Vp {
			constructor(e) {
				d(this, cn(e)), this._domNode = e
			}
		}
		zs(Vp.prototype, Or, {
			on(e, t, n = {}) {
				if (Or.on.call(this, e, t, n), !(this._domListeners && this._domListeners[e])) {
					const t = this._createDomListener(e, !!n.useCapture);
					this._domNode.addEventListener(e, t, !!n.useCapture), this._domListeners || (this._domListeners = {}), this._domListeners[e] = t
				}
			},
			off(e, t) {
				Or.off.call(this, e, t);
				let n;
				!this._domListeners[e] || (n = this._events[e]) && n.callbacks.length || this._domListeners[e].removeListener()
			},
			_createDomListener(e, t) {
				const n = (t) => {
					this.fire(e, t)
				};
				return n.removeListener = () => {
					this._domNode.removeEventListener(e, n, t), delete this._domListeners[e]
				}, n
			}
		});
		class Op {
			constructor() {
				this._listener = Object.create(Ep)
			}
			listenTo(e) {
				this._listener.listenTo(e, 'keydown', (e, t) => {
					this._listener.fire('_keydown:' + ee(t), t)
				})
			}
			set(e, t, n = {}) {
				const o = te(e),
					i = n.priority;
				this._listener.listenTo(this._listener, '_keydown:' + o, (e, n) => {
					t(n, () => {
						n.preventDefault(), n.stopPropagation(), e.stop()
					}), e.return = !0
				}, {
					priority: i
				})
			}
			press(e) {
				return !!this._listener.fire('_keydown:' + ee(e), e)
			}
			destroy() {
				this._listener.stopListening()
			}
		}
		class Rp extends Op {
			constructor(e) {
				super(), this.editor = e
			}
			set(e, t, n = {}) {
				if ('string' == typeof t) {
					const e = t;
					t = (t, n) => {
						this.editor.execute(e), n()
					}
				}
				super.set(e, t, n)
			}
		}
		class Fp {
			constructor(e, t) {
				this._ranges = [], this._lastRangeBackward = !1, this._isFake = !1, this._fakeSelectionLabel = '', e && this.setRanges(e, t)
			}
			setFake(e = !0, t = {}) {
				this._isFake = e, this._fakeSelectionLabel = e ? t.label || '' : '', this.fire('change')
			}
			get isFake() {
				return this._isFake
			}
			get fakeSelectionLabel() {
				return this._fakeSelectionLabel
			}
			get anchor() {
				if (!this._ranges.length) return null;
				const e = this._ranges[this._ranges.length - 1],
					t = this._lastRangeBackward ? e.end : e.start;
				return ec.createFromPosition(t)
			}
			get focus() {
				if (!this._ranges.length) return null;
				const e = this._ranges[this._ranges.length - 1],
					t = this._lastRangeBackward ? e.start : e.end;
				return ec.createFromPosition(t)
			}
			get isCollapsed() {
				return 1 === this.rangeCount && this._ranges[0].isCollapsed
			}
			get rangeCount() {
				return this._ranges.length
			}
			get isBackward() {
				return !this.isCollapsed && this._lastRangeBackward
			}
			get editableElement() {
				return this.anchor ? this.anchor.editableElement : null
			}
			addRange(e, t) {
				if (!(e instanceof tc)) throw new _r('view-selection-invalid-range: Invalid Range.');
				this._pushRange(e), this._lastRangeBackward = !!t, this.fire('change')
			}* getRanges() {
				for (const e of this._ranges) yield tc.createFromRange(e)
			}
			getFirstRange() {
				let e = null;
				for (const t of this._ranges)(!e || t.start.isBefore(e.start)) && (e = t);
				return e ? tc.createFromRange(e) : null
			}
			getLastRange() {
				let e = null;
				for (const t of this._ranges)(!e || t.end.isAfter(e.end)) && (e = t);
				return e ? tc.createFromRange(e) : null
			}
			getFirstPosition() {
				const e = this.getFirstRange();
				return e ? ec.createFromPosition(e.start) : null
			}
			getLastPosition() {
				const e = this.getLastRange();
				return e ? ec.createFromPosition(e.end) : null
			}
			isEqual(e) {
				if (this.isFake != e.isFake) return !1;
				if (this.isFake && this.fakeSelectionLabel != e.fakeSelectionLabel) return !1;
				if (this.rangeCount != e.rangeCount) return !1;
				if (0 === this.rangeCount) return !0;
				if (!this.anchor.isEqual(e.anchor) || !this.focus.isEqual(e.focus)) return !1;
				for (const t of this._ranges) {
					let n = !1;
					for (const o of e._ranges)
						if (t.isEqual(o)) {
							n = !0;
							break
						}
					if (!n) return !1
				}
				return !0
			}
			isSimilar(e) {
				if (this.isBackward != e.isBackward) return !1;
				const t = mn(this.getRanges()),
					n = mn(e.getRanges());
				if (t != n) return !1;
				if (0 == t) return !0;
				for (let t of this.getRanges()) {
					t = t.getTrimmed();
					let n = !1;
					for (let o of e.getRanges())
						if (o = o.getTrimmed(), t.start.isEqual(o.start) && t.end.isEqual(o.end)) {
							n = !0;
							break
						}
					if (!n) return !1
				}
				return !0
			}
			removeAllRanges() {
				this._ranges.length && (this._ranges = [], this.fire('change'))
			}
			setRanges(e, t) {
				this._ranges = [];
				for (const n of e) {
					if (!(n instanceof tc)) throw new _r('view-selection-invalid-range: Invalid Range.');
					this._pushRange(n)
				}
				this._lastRangeBackward = !!t, this.fire('change')
			}
			setTo(e) {
				e instanceof Fp ? (this._isFake = e._isFake, this._fakeSelectionLabel = e._fakeSelectionLabel, this.setRanges(e.getRanges(), e.isBackward)) : e instanceof tc ? this.setRanges([e]) : S(e) ? this.setRanges(e) : this.setRanges([new tc(e)])
			}
			setIn(e) {
				this.setRanges([tc.createIn(e)])
			}
			setOn(e) {
				this.setRanges([tc.createOn(e)])
			}
			setCollapsedAt(e, t) {
				const n = ec.createAt(e, t),
					o = new tc(n, n);
				this.setRanges([o])
			}
			collapseToStart() {
				const e = this.getFirstPosition();
				null !== e && this.setRanges([new tc(e, e)])
			}
			collapseToEnd() {
				const e = this.getLastPosition();
				null !== e && this.setRanges([new tc(e, e)])
			}
			moveFocusTo(e, t) {
				if (null === this.anchor) throw new _r('view-selection-moveFocusTo-no-ranges: Cannot set selection focus if there are no ranges in selection.');
				const n = ec.createAt(e, t);
				if ('same' != n.compareWith(this.focus)) {
					const e = this.anchor;
					this._ranges.pop(), 'before' == n.compareWith(e) ? this.addRange(new tc(n, e), !0) : this.addRange(new tc(e, n))
				}
			}
			getSelectedElement() {
				if (1 !== this.rangeCount) return null;
				const e = this.getFirstRange(),
					t = e.start.nodeAfter,
					n = e.end.nodeBefore;
				return t instanceof Qd && t == n ? t : null
			}
			static createFromSelection(e) {
				const t = new Fp;
				return t.setTo(e), t
			}
			_pushRange(e) {
				for (const t of this._ranges)
					if (e.isIntersecting(t)) throw new _r('view-selection-range-intersects: Trying to add a range that intersects with another range from selection.', {
						addedRange: e,
						intersectingRange: t
					});
				this._ranges.push(tc.createFromRange(e))
			}
		}
		r(Fp, Or);
		const Ip = (e) => {
				const t = e.createElement('br');
				return t.dataset.ckeFiller = !0, t
			},
			Np = (e) => e.createTextNode('\xA0'),
			Bp = 7;
		let Mp = '';
		for (let o = 0; o < Bp; o++) Mp += '\u200B';
		const Dp = new WeakMap;
		class Lp {
			constructor(e, t) {
				this.domDocuments = new Set, this.domConverter = e, this.markedAttributes = new Set, this.markedChildren = new Set, this.markedTexts = new Set, this.selection = t, this._inlineFiller = null, this.isFocused = !1, this._fakeSelectionContainer = null
			}
			markToSync(e, t) {
				if ('text' === e) this.domConverter.mapViewToDom(t.parent) && this.markedTexts.add(t);
				else {
					if (!this.domConverter.mapViewToDom(t)) return;
					if ('attributes' === e) this.markedAttributes.add(t);
					else if ('children' === e) this.markedChildren.add(t);
					else throw new _r('view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.')
				}
			}
			render() {
				let e;
				this._inlineFiller && !this._isSelectionInInlineFiller() && this._removeInlineFiller(), this._inlineFiller ? e = this._getInlineFillerPosition() : this._needsInlineFillerAtSelection() && (e = this.selection.getFirstPosition(), this.markedChildren.add(e.parent));
				for (const t of this.markedTexts) !this.markedChildren.has(t.parent) && this.domConverter.mapViewToDom(t.parent) && this._updateText(t, {
					inlineFillerPosition: e
				});
				for (const e of this.markedAttributes) this._updateAttrs(e);
				for (const t of this.markedChildren) this._updateChildren(t, {
					inlineFillerPosition: e
				});
				if (e) {
					const t = this.domConverter.viewPositionToDom(e),
						n = t.parent.ownerDocument;
					this._inlineFiller = un(t.parent) ? t.parent : this._addInlineFiller(n, t.parent, t.offset)
				} else this._inlineFiller = null;
				this._updateSelection(), this._updateFocus(), this.markedTexts.clear(), this.markedAttributes.clear(), this.markedChildren.clear()
			}
			_addInlineFiller(e, t, n) {
				const o = t instanceof Array ? t : t.childNodes,
					i = o[n];
				if (this.domConverter.isText(i)) return i.data = Mp + i.data, i;
				else {
					const i = e.createTextNode(Mp);
					return Array.isArray(t) ? o.splice(n, 0, i) : kn(t, n, i), i
				}
			}
			_getInlineFillerPosition() {
				const e = this.selection.getFirstPosition();
				return e.parent.is('text') ? ec.createBefore(this.selection.getFirstPosition().parent) : e
			}
			_isSelectionInInlineFiller() {
				if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
				const e = this.selection.getFirstPosition(),
					t = this.domConverter.viewPositionToDom(e);
				return t && this.domConverter.isText(t.parent) && un(t.parent)
			}
			_removeInlineFiller() {
				const e = this._inlineFiller;
				if (!un(e)) throw new _r('view-renderer-filler-was-lost: The inline filler node was lost.');
				pn(e) ? e.parentNode.removeChild(e) : e.data = e.data.substr(Bp), this._inlineFiller = null
			}
			_needsInlineFillerAtSelection() {
				if (1 != this.selection.rangeCount || !this.selection.isCollapsed) return !1;
				const e = this.selection.getFirstPosition(),
					t = e.parent,
					n = e.offset;
				if (!this.domConverter.mapViewToDom(t.root)) return !1;
				if (!t.is('element')) return !1;
				if (!yn(t)) return !1;
				if (n === t.getFillerOffset()) return !1;
				const o = e.nodeBefore,
					i = e.nodeAfter;
				return o instanceof Ud || i instanceof Ud ? !1 : !0
			}
			_updateText(e, t) {
				const n = this.domConverter.findCorrespondingDomText(e),
					o = this.domConverter.viewToDom(e, n.ownerDocument),
					i = n.data;
				let a = o.data;
				const r = t.inlineFillerPosition;
				r && r.parent == e.parent && r.offset == e.index && (a = Mp + a), i != a && (n.data = a)
			}
			_updateAttrs(e) {
				const t = this.domConverter.mapViewToDom(e),
					n = Array.from(t.attributes).map((e) => e.name),
					o = e.getAttributeKeys();
				for (const n of o) t.setAttribute(n, e.getAttribute(n));
				for (const o of n) e.hasAttribute(o) || t.removeAttribute(o)
			}
			_updateChildren(e, t) {
				function n(e, t) {
					if (e === t) return !0;
					return o.isText(e) && o.isText(t) ? e.data === t.data : fn(e, o.blockFiller) && fn(t, o.blockFiller)
				}
				const o = this.domConverter,
					a = o.mapViewToDom(e);
				if (a) {
					const r = a.ownerDocument,
						s = t.inlineFillerPosition,
						l = a.childNodes,
						d = Array.from(o.viewChildrenToDom(e, r, {
							bind: !0
						}));
					s && s.parent == e && this._addInlineFiller(r, d, s.offset);
					const c = _n(l, d, n);
					let m = 0;
					const i = new Set;
					for (const e of c) 'insert' === e ? (kn(a, m, d[m]), m++) : 'delete' === e ? (i.add(l[m]), wn(l[m])) : m++;
					for (const e of i) e.parentNode || this.domConverter.unbindDomElement(e)
				}
			}
			_updateSelection() {
				if (0 === this.selection.rangeCount) return this._removeDomSelection(), void this._removeFakeSelection();
				const e = this.domConverter.mapViewToDom(this.selection.editableElement);
				this.isFocused && e && (this.selection.isFake ? this._updateFakeSelection(e) : (this._removeFakeSelection(), this._updateDomSelection(e)))
			}
			_updateFakeSelection(e) {
				const t = e.ownerDocument;
				this._fakeSelectionContainer || (this._fakeSelectionContainer = t.createElement('div'), this._fakeSelectionContainer.style.position = 'fixed', this._fakeSelectionContainer.style.top = 0, this._fakeSelectionContainer.style.left = '-9999px', this._fakeSelectionContainer.appendChild(t.createTextNode('\xA0'))), this._fakeSelectionContainer.parentElement || e.appendChild(this._fakeSelectionContainer);
				const n = this.selection.fakeSelectionLabel || '\xA0';
				this._fakeSelectionContainer.firstChild.data = n;
				const o = t.getSelection();
				o.removeAllRanges();
				const i = t.createRange();
				i.selectNodeContents(this._fakeSelectionContainer), o.addRange(i), this.domConverter.bindFakeSelection(this._fakeSelectionContainer, this.selection)
			}
			_updateDomSelection(e) {
				const t = e.ownerDocument.defaultView.getSelection();
				if (this._domSelectionNeedsUpdate(t)) {
					const e = this.domConverter.viewPositionToDom(this.selection.anchor),
						n = this.domConverter.viewPositionToDom(this.selection.focus);
					t.collapse(e.parent, e.offset), t.extend(n.parent, n.offset)
				}
			}
			_domSelectionNeedsUpdate(e) {
				if (!this.domConverter.isDomSelectionCorrect(e)) return !0;
				const t = e && this.domConverter.domSelectionToView(e);
				return t && this.selection.isEqual(t) ? !1 : !this.selection.isCollapsed && this.selection.isSimilar(t) ? !1 : !0
			}
			_removeDomSelection() {
				for (const e of this.domDocuments) {
					const t = e.getSelection();
					if (t.rangeCount) {
						const t = e.activeElement,
							n = this.domConverter.mapDomToView(t);
						t && n && e.getSelection().removeAllRanges()
					}
				}
			}
			_removeFakeSelection() {
				const e = this._fakeSelectionContainer;
				e && e.remove()
			}
			_updateFocus() {
				if (this.isFocused) {
					const e = this.selection.editableElement;
					e && this.domConverter.focus(e)
				}
			}
		}
		r(Lp, Ws);
		var zp = {
			window,
			document
		};
		class jp {
			constructor(e = {}) {
				this.blockFiller = e.blockFiller || Ip, this.preElements = ['pre'], this.blockElements = ['p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'], this._domToViewMapping = new WeakMap, this._viewToDomMapping = new WeakMap, this._fakeSelectionMapping = new WeakMap
			}
			bindFakeSelection(e, t) {
				this._fakeSelectionMapping.set(e, Fp.createFromSelection(t))
			}
			fakeSelectionToView(e) {
				return this._fakeSelectionMapping.get(e)
			}
			bindElements(e, t) {
				this._domToViewMapping.set(e, t), this._viewToDomMapping.set(t, e)
			}
			unbindDomElement(e) {
				const t = this._domToViewMapping.get(e);
				if (t) {
					this._domToViewMapping.delete(e), this._viewToDomMapping.delete(t);
					for (const t of Array.from(e.childNodes)) this.unbindDomElement(t)
				}
			}
			bindDocumentFragments(e, t) {
				this._domToViewMapping.set(e, t), this._viewToDomMapping.set(t, e)
			}
			viewToDom(e, t, n = {}) {
				if (e.is('text')) {
					const n = this._processDataFromViewText(e);
					return t.createTextNode(n)
				} else {
					if (this.mapViewToDom(e)) return this.mapViewToDom(e);
					let o;
					if (e.is('documentFragment')) o = t.createDocumentFragment(), n.bind && this.bindDocumentFragments(o, e);
					else {
						if (e.is('uiElement')) return o = e.render(t), n.bind && this.bindElements(o, e), o;
						o = t.createElement(e.name), n.bind && this.bindElements(o, e);
						for (const t of e.getAttributeKeys()) o.setAttribute(t, e.getAttribute(t))
					}
					if (n.withChildren || void 0 === n.withChildren)
						for (const i of this.viewChildrenToDom(e, t, n)) o.appendChild(i);
					return o
				}
			}* viewChildrenToDom(e, t, n = {}) {
				const o = e.getFillerOffset && e.getFillerOffset();
				let i = 0;
				for (const a of e.getChildren()) o === i && (yield this.blockFiller(t)), yield this.viewToDom(a, t, n), i++;
				o === i && (yield this.blockFiller(t))
			}
			viewRangeToDom(e) {
				const t = this.viewPositionToDom(e.start),
					n = this.viewPositionToDom(e.end),
					o = document.createRange();
				return o.setStart(t.parent, t.offset), o.setEnd(n.parent, n.offset), o
			}
			viewPositionToDom(e) {
				const t = e.parent;
				if (t.is('text')) {
					const n = this.findCorrespondingDomText(t);
					if (!n) return null;
					let o = e.offset;
					return un(n) && (o += Bp), {
						parent: n,
						offset: o
					}
				} else {
					let n, o, i;
					if (0 === e.offset) {
						if (n = this.mapViewToDom(t), !n) return null;
						i = n.childNodes[0]
					} else {
						const t = e.nodeBefore;
						if (o = t.is('text') ? this.findCorrespondingDomText(t) : this.mapViewToDom(e.nodeBefore), !o) return null;
						n = o.parentNode, i = o.nextSibling
					}
					if (this.isText(i) && un(i)) return {
						parent: i,
						offset: Bp
					};
					const a = o ? vn(o) + 1 : 0;
					return {
						parent: n,
						offset: a
					}
				}
			}
			domToView(e, t = {}) {
				if (fn(e, this.blockFiller)) return null;
				const n = this.getParentUIElement(e, this._domToViewMapping);
				if (n) return n;
				if (this.isText(e)) {
					if (pn(e)) return null;
					else {
						const t = this._processDataFromDomText(e);
						return '' === t ? null : new Ud(t)
					}
				} else if (this.isComment(e)) return null;
				else {
					if (this.mapDomToView(e)) return this.mapDomToView(e);
					let n;
					if (this.isDocumentFragment(e)) n = new gc, t.bind && this.bindDocumentFragments(e, n);
					else {
						const o = t.keepOriginalCase ? e.tagName : e.tagName.toLowerCase();
						n = new Qd(o), t.bind && this.bindElements(e, n);
						const a = e.attributes;
						for (let e = a.length - 1; 0 <= e; e--) n.setAttribute(a[e].name, a[e].value)
					}
					if (t.withChildren || void 0 === t.withChildren)
						for (const o of this.domChildrenToView(e, t)) n.appendChildren(o);
					return n
				}
			}* domChildrenToView(e, t = {}) {
				for (let n = 0; n < e.childNodes.length; n++) {
					const o = e.childNodes[n],
						i = this.domToView(o, t);
					null !== i && (yield i)
				}
			}
			domSelectionToView(e) {
				if (1 === e.rangeCount) {
					let t = e.getRangeAt(0).startContainer;
					this.isText(t) && (t = t.parentNode);
					const n = this.fakeSelectionToView(t);
					if (n) return n
				}
				const t = new Fp,
					n = this.isDomSelectionBackward(e);
				for (let o = 0; o < e.rangeCount; o++) {
					const i = e.getRangeAt(o),
						a = this.domRangeToView(i);
					a && t.addRange(a, n)
				}
				return t
			}
			domRangeToView(e) {
				const t = this.domPositionToView(e.startContainer, e.startOffset),
					n = this.domPositionToView(e.endContainer, e.endOffset);
				return t && n ? new tc(t, n) : null
			}
			domPositionToView(e, t) {
				if (fn(e, this.blockFiller)) return this.domPositionToView(e.parentNode, vn(e));
				const n = this.mapDomToView(e);
				if (n && n.is('uiElement')) return ec.createBefore(n);
				if (this.isText(e)) {
					if (pn(e)) return this.domPositionToView(e.parentNode, vn(e));
					const n = this.findCorrespondingViewText(e);
					let o = t;
					return n ? (un(e) && (o -= Bp, o = 0 > o ? 0 : o), new ec(n, o)) : null
				}
				if (0 === t) {
					const t = this.mapDomToView(e);
					if (t) return new ec(t, 0)
				} else {
					const n = e.childNodes[t - 1],
						o = this.isText(n) ? this.findCorrespondingViewText(n) : this.mapDomToView(n);
					if (o && o.parent) return new ec(o.parent, o.index + 1)
				}
				return null
			}
			mapDomToView(e) {
				return this.getParentUIElement(e) || this._domToViewMapping.get(e)
			}
			findCorrespondingViewText(e) {
				if (pn(e)) return null;
				const t = this.getParentUIElement(e);
				if (t) return t;
				const n = e.previousSibling;
				if (n) {
					if (!this.isElement(n)) return null;
					const e = this.mapDomToView(n);
					if (e) {
						const t = e.nextSibling;
						return t instanceof Ud ? e.nextSibling : null
					}
				} else {
					const t = this.mapDomToView(e.parentNode);
					if (t) {
						const e = t.getChild(0);
						return e instanceof Ud ? e : null
					}
				}
				return null
			}
			mapViewToDom(e) {
				return this._viewToDomMapping.get(e)
			}
			findCorrespondingDomText(e) {
				const t = e.previousSibling;
				return t && this.mapViewToDom(t) ? this.mapViewToDom(t).nextSibling : !t && e.parent && this.mapViewToDom(e.parent) ? this.mapViewToDom(e.parent).childNodes[0] : null
			}
			focus(e) {
				const t = this.mapViewToDom(e);
				if (t && t.ownerDocument.activeElement !== t) {
					const {
						scrollX: e,
						scrollY: n
					} = zp.window, o = [];
					Tn(t, (e) => {
						const {
							scrollLeft: t,
							scrollTop: n
						} = e;
						o.push([t, n])
					}), t.focus(), Tn(t, (e) => {
						const [t, n] = o.shift();
						e.scrollLeft = t, e.scrollTop = n
					}), zp.window.scrollTo(e, n)
				}
			}
			isText(e) {
				return e && e.nodeType == Node.TEXT_NODE
			}
			isElement(e) {
				return e && e.nodeType == Node.ELEMENT_NODE
			}
			isDocumentFragment(e) {
				return e && e.nodeType == Node.DOCUMENT_FRAGMENT_NODE
			}
			isComment(e) {
				return e && e.nodeType == Node.COMMENT_NODE
			}
			isDomSelectionBackward(e) {
				if (e.isCollapsed) return !1;
				const t = document.createRange();
				t.setStart(e.anchorNode, e.anchorOffset), t.setEnd(e.focusNode, e.focusOffset);
				const n = t.collapsed;
				return t.detach(), n
			}
			getParentUIElement(e) {
				const t = xn(e);
				for (t.pop(); t.length;) {
					const e = t.pop(),
						n = this._domToViewMapping.get(e);
					if (n && n.is('uiElement')) return n
				}
				return null
			}
			isDomSelectionCorrect(e) {
				return this._isDomSelectionPositionCorrect(e.anchorNode, e.anchorOffset) && this._isDomSelectionPositionCorrect(e.focusNode, e.focusOffset)
			}
			_isDomSelectionPositionCorrect(e, t) {
				if (this.isText(e) && un(e) && t < Bp) return !1;
				if (this.isElement(e) && un(e.childNodes[t])) return !1;
				const n = this.mapDomToView(e);
				return n && n.is('uiElement') ? !1 : !0
			}
			_processDataFromViewText(e) {
				let t = e.data;
				if (e.getAncestors().some((e) => this.preElements.includes(e.name))) return t;
				if (' ' == t.charAt(0)) {
					const n = this._getTouchingViewTextNode(e, !1),
						o = n && this._nodeEndsWithSpace(n);
					(o || !n) && (t = '\xA0' + t.substr(1))
				}
				if (' ' == t.charAt(t.length - 1)) {
					const n = this._getTouchingViewTextNode(e, !0);
					n || (t = t.substr(0, t.length - 1) + '\xA0')
				}
				return t.replace(/ {2}/g, ' \xA0')
			}
			_nodeEndsWithSpace(e) {
				if (e.getAncestors().some((e) => this.preElements.includes(e.name))) return !1;
				const t = this._processDataFromViewText(e);
				return ' ' == t.charAt(t.length - 1)
			}
			_processDataFromDomText(e) {
				let t = gn(e);
				if (Cn(e, this.preElements)) return t;
				t = t.replace(/[ \n\t\r]{1,}/g, ' ');
				const n = this._getTouchingDomTextNode(e, !1),
					o = this._getTouchingDomTextNode(e, !0);
				return (!n || /[^\S\u00A0]/.test(n.data.charAt(n.data.length - 1))) && (t = t.replace(/^ /, '')), o || (t = t.replace(/ $/, '')), t = t.replace(/ \u00A0/g, '  '), (!n || /[^\S\u00A0]/.test(n.data.charAt(n.data.length - 1))) && (t = t.replace(/^\u00A0/, ' ')), o && '\xA0' != o.data.charAt(0) || (t = t.replace(/\u00A0( *)$/, ' $1')), t
			}
			_getTouchingViewTextNode(e, t) {
				const n = new Gd({
					startPosition: t ? ec.createAfter(e) : ec.createBefore(e),
					direction: t ? 'forward' : 'backward'
				});
				for (const o of n) {
					if (o.item.is('containerElement')) return null;
					if (o.item.is('text')) return o.item
				}
				return null
			}
			_getTouchingDomTextNode(e, t) {
				if (!e.parentNode) return null;
				const n = t ? 'nextNode' : 'previousNode',
					o = e.ownerDocument,
					i = o.createTreeWalker(o.childNodes[0], NodeFilter.SHOW_TEXT);
				i.currentNode = e;
				const a = i[n]();
				if (null !== a) {
					const t = An(e, a);
					if (t && !Cn(e, this.blockElements, t) && !Cn(a, this.blockElements, t)) return a
				}
				return null
			}
		}
		const $p = Symbol('rootName');
		class qp extends Zd {
			constructor(e) {
				super(e), this.rootName = 'main'
			}
			is(e, t = null) {
				return t ? 'rootElement' == e && t == this.name || super.is(e, t) : 'rootElement' == e || super.is(e)
			}
			get rootName() {
				return this.getCustomProperty($p)
			}
			set rootName(e) {
				this.setCustomProperty($p, e)
			}
		}
		class Hp {
			constructor(e) {
				this.document = e, this.isEnabled = !1
			}
			enable() {
				this.isEnabled = !0
			}
			disable() {
				this.isEnabled = !1
			}
			destroy() {
				this.disable(), this.stopListening()
			}
		}
		r(Hp, Ep);
		var Wp = function(e, t, n) {
			n = 'function' == typeof n ? n : void 0;
			var o = n ? n(e, t) : void 0;
			return o === void 0 ? qc(e, t, n) : !!o
		};
		class Up extends Hp {
			constructor(e) {
				super(e), this._config = {
					childList: !0,
					characterData: !0,
					characterDataOldValue: !0,
					subtree: !0
				}, this.domConverter = e.domConverter, this.renderer = e.renderer, this._domElements = [], this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this))
			}
			flush() {
				this._onMutations(this._mutationObserver.takeRecords())
			}
			observe(e) {
				this._domElements.push(e), this.isEnabled && this._mutationObserver.observe(e, this._config)
			}
			enable() {
				super.enable();
				for (const e of this._domElements) this._mutationObserver.observe(e, this._config)
			}
			disable() {
				super.disable(), this._mutationObserver.disconnect()
			}
			destroy() {
				super.destroy(), this._mutationObserver.disconnect()
			}
			_onMutations(e) {
				function t(e, t) {
					if (!Array.isArray(e)) return e === t || e.is('text') && t.is('text') && e.data === t.data
				}
				if (0 === e.length) return;
				const n = this.domConverter,
					o = new Map,
					i = new Set;
				for (const t of e)
					if ('childList' === t.type) {
						const e = n.mapDomToView(t.target);
						if (e && e.is('uiElement')) continue;
						e && !this._isBogusBrMutation(t) && i.add(e)
					}
				for (const t of e) {
					const e = n.mapDomToView(t.target);
					if (!(e && e.is('uiElement')) && 'characterData' === t.type) {
						const e = n.findCorrespondingViewText(t.target);
						e && !i.has(e.parent) ? o.set(e, {
							type: 'text',
							oldText: e.data,
							newText: gn(t.target),
							node: e
						}) : !e && un(t.target) && i.add(n.mapDomToView(t.target.parentNode))
					}
				}
				const a = [];
				for (const t of o.values()) this.renderer.markToSync('text', t.node), a.push(t);
				for (const o of i) {
					const e = n.mapViewToDom(o),
						i = Array.from(o.getChildren()),
						r = Array.from(n.domChildrenToView(e));
					Wp(i, r, t) || (this.renderer.markToSync('children', o), a.push({
						type: 'children',
						oldChildren: i,
						newChildren: r,
						node: o
					}))
				}
				const r = e[0].target.ownerDocument.getSelection();
				let s = null;
				if (r && r.anchorNode) {
					const e = n.domPositionToView(r.anchorNode, r.anchorOffset),
						t = n.domPositionToView(r.focusNode, r.focusOffset);
					e && t && (s = new Fp, s.setCollapsedAt(e), s.moveFocusTo(t))
				}
				this.document.fire('mutations', a, s), this.document.render()
			}
			_isBogusBrMutation(e) {
				let t = null;
				return null === e.nextSibling && 0 === e.removedNodes.length && 1 == e.addedNodes.length && (t = this.domConverter.domToView(e.addedNodes[0], {
					withChildren: !1
				})), t && t.is('element', 'br')
			}
		}
		var Kp = Date.now,
			Qp = Kp,
			Jp = function(e, t, n) {
				function o(t) {
					var n = f,
						o = h;
					return f = h = void 0, m = t, _ = e.apply(o, n), _
				}

				function i(e) {
					return m = e, k = setTimeout(s, t), u ? o(e) : _
				}

				function a(e) {
					var n = e - c,
						o = e - m,
						i = t - n;
					return p ? or(i, b - o) : i
				}

				function r(e) {
					var n = e - c,
						o = e - m;
					return !c || n >= t || 0 > n || p && o >= b
				}

				function s() {
					var e = Qp();
					return r(e) ? l(e) : void(k = setTimeout(s, a(e)))
				}

				function l(e) {
					return (clearTimeout(k), k = void 0, g && f) ? o(e) : (f = h = void 0, _)
				}

				function d() {
					var e = Qp(),
						n = r(e);
					if (f = arguments, h = this, c = e, n) {
						if (void 0 === k) return i(c);
						if (p) return clearTimeout(k), k = setTimeout(s, t), o(c)
					}
					return void 0 === k && (k = setTimeout(s, t)), _
				}
				var c = 0,
					m = 0,
					u = !1,
					p = !1,
					g = !0,
					f, h, b, _, k;
				if ('function' != typeof e) throw new TypeError('Expected a function');
				return t = is(t) || 0, Lr(n) && (u = !!n.leading, p = 'maxWait' in n, b = p ? ir(is(n.maxWait) || 0, t) : b, g = 'trailing' in n ? !!n.trailing : g), d.cancel = function() {
					void 0 !== k && clearTimeout(k), c = m = 0, f = h = k = void 0
				}, d.flush = function() {
					return void 0 === k ? _ : l(Qp())
				}, d
			};
		class Gp extends Hp {
			constructor(e) {
				super(e), this.mutationObserver = e.getObserver(Up), this.document = e, this.selection = e.selection, this.domConverter = e.domConverter, this._documents = new WeakSet, this._fireSelectionChangeDoneDebounced = Jp((e) => this.document.fire('selectionChangeDone', e), 200), this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3), this._loopbackCounter = 0
			}
			observe(e) {
				const t = e.ownerDocument;
				this._documents.has(t) || (this.listenTo(t, 'selectionchange', () => {
					this._handleSelectionChange(t)
				}), this._documents.add(t))
			}
			destroy() {
				super.destroy(), clearInterval(this._clearInfiniteLoopInterval), this._fireSelectionChangeDoneDebounced.cancel()
			}
			_handleSelectionChange(e) {
				if (this.isEnabled && (this.document.isFocused || this.document.isReadOnly)) {
					this.mutationObserver.flush();
					const t = e.defaultView.getSelection(),
						n = this.domConverter.domSelectionToView(t);
					if (!(this.selection.isEqual(n) && this.domConverter.isDomSelectionCorrect(t))) {
						if (60 < ++this._loopbackCounter) return void wr.warn('selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.');
						if (this.selection.isSimilar(n)) this.document.render();
						else {
							const e = {
								oldSelection: this.selection,
								newSelection: n,
								domSelection: t
							};
							this.document.fire('selectionChange', e), this._fireSelectionChangeDoneDebounced(e)
						}
					}
				}
			}
			_clearInfiniteLoop() {
				this._loopbackCounter = 0
			}
		}
		class Yp {
			constructor(e, t, n) {
				this.document = e, this.domEvent = t, this.domTarget = t.target, zs(this, n)
			}
			get target() {
				return this.document.domConverter.mapDomToView(this.domTarget)
			}
			preventDefault() {
				this.domEvent.preventDefault()
			}
			stopPropagation() {
				this.domEvent.stopPropagation()
			}
		}
		class Xp extends Hp {
			constructor(e) {
				super(e), this.useCapture = !1
			}
			observe(e) {
				const t = 'string' == typeof this.domEventType ? [this.domEventType] : this.domEventType;
				t.forEach((t) => {
					this.listenTo(e, t, (e, t) => {
						this.isEnabled && this.onDomEvent(t)
					}, {
						useCapture: this.useCapture
					})
				})
			}
			fire(e, t, n) {
				this.isEnabled && this.document.fire(e, new Yp(this.document, t, n))
			}
		}
		class Zp extends Xp {
			constructor(e) {
				super(e), this.domEventType = ['focus', 'blur'], this.useCapture = !0, e.on('focus', () => {
					e.isFocused = !0, this._renderTimeoutId = setTimeout(() => e.render(), 0)
				}), e.on('blur', (t, n) => {
					const o = e.selection.editableElement;
					(null === o || o === n.target) && (e.isFocused = !1, e.render())
				})
			}
			onDomEvent(e) {
				this.fire(e.type, e)
			}
			destroy() {
				this._renderTimeoutId && clearTimeout(this._renderTimeoutId), super.destroy()
			}
		}
		class eg extends Xp {
			constructor(e) {
				super(e), this.domEventType = ['keydown', 'keyup']
			}
			onDomEvent(e) {
				this.fire(e.type, e, {
					keyCode: e.keyCode,
					altKey: e.altKey,
					ctrlKey: e.ctrlKey || e.metaKey,
					shiftKey: e.shiftKey,
					get keystroke() {
						return ee(this)
					}
				})
			}
		}
		class tg extends Hp {
			constructor(e) {
				super(e), this._fireSelectionChangeDoneDebounced = Jp((e) => this.document.fire('selectionChangeDone', e), 200)
			}
			observe() {
				const e = this.document;
				e.on('keydown', (t, n) => {
					const o = e.selection;
					o.isFake && Pn(n.keyCode) && this.isEnabled && (n.preventDefault(), this._handleSelectionMove(n.keyCode))
				}, {
					priority: 'lowest'
				})
			}
			destroy() {
				super.destroy(), this._fireSelectionChangeDoneDebounced.cancel()
			}
			_handleSelectionMove(e) {
				const t = this.document.selection,
					n = Fp.createFromSelection(t);
				n.setFake(!1), (e == uc.arrowleft || e == uc.arrowup) && n.collapseToStart(), (e == uc.arrowright || e == uc.arrowdown) && n.collapseToEnd();
				const o = {
					oldSelection: t,
					newSelection: n,
					domSelection: null
				};
				this.document.fire('selectionChange', o), this._fireSelectionChangeDoneDebounced(o)
			}
		}
		var ng = function(e) {
			return !!e && 1 === e.nodeType && dr(e) && !fr(e)
		};
		class og {
			constructor(e) {
				const t = Sn(e);
				if (Object.defineProperty(this, '_source', {
						value: e._source || e,
						writable: !0,
						enumerable: !1
					}), ng(e) || t) {
					const n = t ? e.startContainer : e;
					n.ownerDocument && n.ownerDocument.body.contains(n) || wr.warn('rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.', {
						source: e
					}), t ? On(this, og.getDomRangeRects(e)[0]) : On(this, e.getBoundingClientRect())
				} else if (En(e)) {
					const {
						innerWidth: t,
						innerHeight: n
					} = e;
					On(this, {
						top: 0,
						right: t,
						bottom: n,
						left: 0,
						width: t,
						height: n
					})
				} else On(this, e)
			}
			clone() {
				return new og(this)
			}
			moveTo(e, t) {
				return this.top = t, this.right = e + this.width, this.bottom = t + this.height, this.left = e, this
			}
			moveBy(e, t) {
				return this.top += t, this.right += e, this.left += e, this.bottom += t, this
			}
			getIntersection(e) {
				const t = {
					top: ir(this.top, e.top),
					right: or(this.right, e.right),
					bottom: or(this.bottom, e.bottom),
					left: ir(this.left, e.left)
				};
				return t.width = t.right - t.left, t.height = t.bottom - t.top, 0 > t.width || 0 > t.height ? null : new og(t)
			}
			getIntersectionArea(e) {
				const t = this.getIntersection(e);
				return t ? t.getArea() : 0
			}
			getArea() {
				return this.width * this.height
			}
			getVisible() {
				const e = this._source;
				let t = this.clone();
				if (!Rn(e))
					for (let n = e.parentNode || e.commonAncestorContainer; n && !Rn(n);) {
						const e = new og(n),
							o = t.getIntersection(e);
						if (o) o.getArea() < t.getArea() && (t = o);
						else return null;
						n = n.parentNode
					}
				return t
			}
			isEqual(e) {
				for (const t of ig)
					if (this[t] !== e[t]) return !1;
				return !0
			}
			contains(e) {
				const t = this.getIntersection(e);
				return !!(t && t.isEqual(e))
			}
			excludeScrollbarsAndBorders() {
				const e = this._source;
				let t, n;
				if (En(e)) t = e.innerWidth - e.document.documentElement.clientWidth, n = e.innerHeight - e.document.documentElement.clientHeight;
				else {
					const o = Vn(this._source);
					t = e.offsetWidth - e.clientWidth, n = e.offsetHeight - e.clientHeight, this.moveBy(o.left, o.top)
				}
				return this.width -= t, this.right -= t, this.height -= n, this.bottom -= n, this
			}
			static getDomRangeRects(e) {
				const t = [],
					n = Array.from(e.getClientRects());
				if (n.length)
					for (const e of n) t.push(new og(e));
				else {
					const n = new og(e.startContainer.getBoundingClientRect());
					n.right = n.left, n.width = 0, t.push(n)
				}
				return t
			}
		}
		const ig = ['top', 'right', 'bottom', 'left', 'width', 'height'];
		Object.assign({}, {
			scrollViewportToShowTarget: Fn,
			scrollAncestorsToShowTarget: function(e) {
				const t = jn(e);
				Nn(t, () => new og(e))
			}
		});
		class ag {
			constructor() {
				this.domRoots = new Map, this.selection = new Fp, this.domConverter = new jp, this.roots = new Map, this.set('isReadOnly', !1), this.set('isFocused', !1), this.renderer = new Lp(this.domConverter, this.selection), this.renderer.bind('isFocused').to(this), this._observers = new Map, this.addObserver(Up), this.addObserver(Gp), this.addObserver(Zp), this.addObserver(eg), this.addObserver(tg), hn(this), ie(this), this.decorate('render')
			}
			addObserver(e) {
				let t = this._observers.get(e);
				if (t) return t;
				t = new e(this), this._observers.set(e, t);
				for (const [n, o] of this.domRoots) t.observe(o, n);
				return t.enable(), t
			}
			getObserver(e) {
				return this._observers.get(e)
			}
			createRoot(e, t = 'main') {
				const n = 'string' == typeof e ? e : e.tagName,
					o = new qp(n.toLowerCase(), t);
				return o.document = this, this.roots.set(t, o), o.on('change:children', (e, t) => this.renderer.markToSync('children', t)), o.on('change:attributes', (e, t) => this.renderer.markToSync('attributes', t)), o.on('change:text', (e, t) => this.renderer.markToSync('text', t)), this.domConverter.isElement(e) && this.attachDomRoot(e, t), o
			}
			attachDomRoot(e, t = 'main') {
				const n = this.getRoot(t);
				this.domRoots.set(t, e), this.domConverter.bindElements(e, n), this.renderer.markToSync('children', n), this.renderer.domDocuments.add(e.ownerDocument);
				for (const n of this._observers.values()) n.observe(e, t)
			}
			getRoot(e = 'main') {
				return this.roots.get(e)
			}
			getDomRoot(e = 'main') {
				return this.domRoots.get(e)
			}
			render() {
				this.disableObservers(), this.renderer.render(), this.enableObservers()
			}
			focus() {
				if (!this.isFocused) {
					const e = this.selection.editableElement;
					e ? (this.domConverter.focus(e), this.render()) : wr.warn('view-focus-no-selection: There is no selection in any editable to focus.')
				}
			}
			scrollToTheSelection() {
				const e = this.selection.getFirstRange();
				e && Fn({
					target: this.domConverter.viewRangeToDom(e),
					viewportOffset: 20
				})
			}
			disableObservers() {
				for (const e of this._observers.values()) e.disable()
			}
			enableObservers() {
				for (const e of this._observers.values()) e.enable()
			}
			destroy() {
				for (const e of this._observers.values()) e.destroy()
			}
		}
		r(ag, Ws);
		class rg {
			constructor(e) {
				this.model = e, this.view = new ag, this.mapper = new nc, this.modelToView = new ac(this.model, {
					mapper: this.mapper,
					viewSelection: this.view.selection
				}), this.listenTo(this.model, 'change', (e, t, n) => {
					this.modelToView.convertChange(t, n)
				}, {
					priority: 'low'
				}), this.listenTo(this.model, 'changesDone', () => {
					const e = this.model.selection;
					this.modelToView.convertSelection(e), this.view.render()
				}, {
					priority: 'low'
				}), this.listenTo(this.model.markers, 'add', (e, t) => {
					this.modelToView.convertMarker('addMarker', t.name, t.getRange())
				}), this.listenTo(this.model.markers, 'remove', (e, t) => {
					this.modelToView.convertMarker('removeMarker', t.name, t.getRange())
				}), this.listenTo(this.view, 'selectionChange', qn(this.model, this.mapper)), this.modelToView.on('insert:$text', Ee(), {
					priority: 'lowest'
				}), this.modelToView.on('remove', Ne(), {
					priority: 'low'
				}), this.modelToView.on('selection', Gn(), {
					priority: 'low'
				}), this.modelToView.on('selection', Yn(), {
					priority: 'low'
				}), this.modelToView.on('selection', Hn(), {
					priority: 'low'
				}), this.modelToView.on('selection', Wn(), {
					priority: 'low'
				})
			}
			createRoot(e, t = 'main') {
				const n = this.view.createRoot(e, t),
					o = this.model.getRoot(t);
				return this.mapper.bindElements(o, n), n
			}
			destroy() {
				this.view.destroy(), this.stopListening()
			}
		}
		r(rg, Ws);
		class sg extends Pp {
			constructor(e, t) {
				super(t), this.element = e, this.editing = new rg(this.document), this.editing.view.bind('isReadOnly').to(this), this.keystrokes = new Rp(this), this.keystrokes.listenTo(this.editing.view), this._attachToForm()
			}
			destroy() {
				return Promise.resolve().then(() => this.keystrokes.destroy()).then(() => this.editing.destroy()).then(super.destroy())
			}
			setData(e) {
				this.data.set(e)
			}
			getData() {
				return this.data.get()
			}
			updateEditorElement() {
				Zn(this.element, this.getData())
			}
			loadDataFromEditorElement() {
				this.setData(Xn(this.element))
			}
			_attachToForm() {
				const e = this.element;
				if (e && 'textarea' === e.tagName.toLowerCase() && e.form) {
					let t;
					const n = e.form,
						o = () => this.updateEditorElement();
					$r(n.submit) && (t = n.submit, n.submit = () => {
						o(), t.apply(n)
					}), n.addEventListener('submit', o), this.on('destroy', () => {
						n.removeEventListener('submit', o), t && (n.submit = t)
					})
				}
			}
			static create(e, t) {
				return new Promise((n) => {
					const o = new this(e, t);
					n(o.initPlugins().then(() => {
						o.fire('dataReady'), o.fire('ready')
					}).then(() => o))
				})
			}
		}
		class lg {
			getHtml(e) {
				const t = document.implementation.createHTMLDocument(''),
					n = t.createElement('div');
				return n.appendChild(e), n.innerHTML
			}
		}
		class dg {
			constructor() {
				this._domParser = new DOMParser, this._domConverter = new jp({
					blockFiller: Np
				}), this._htmlWriter = new lg
			}
			toData(e) {
				const t = this._domConverter.viewToDom(e, document);
				return this._htmlWriter.getHtml(t)
			}
			toView(e) {
				const t = this._toDom(e);
				return this._domConverter.domToView(t)
			}
			_toDom(e) {
				const t = this._domParser.parseFromString(e, 'text/html'),
					n = t.createDocumentFragment(),
					o = t.body.childNodes;
				for (; 0 < o.length;) n.appendChild(o[0]);
				return n
			}
		}
		class cg {
			constructor(e) {
				this.editor = e, this._components = new Map
			}* names() {
				yield* this._components.keys()
			}
			add(e, t) {
				if (this.has(e)) throw new _r('componentfactory-item-exists: The item already exists in the component factory.', {
					name: e
				});
				this._components.set(eo(e), t)
			}
			create(e) {
				if (!this.has(e)) throw new _r('componentfactory-item-missing: The required component is not registered in the factory.', {
					name: e
				});
				return this._components.get(eo(e))(this.editor.locale)
			}
			has(e) {
				return this._components.has(eo(e))
			}
		}
		class mg {
			constructor() {
				this.set('isFocused', !1), this.focusedElement = null, this._elements = new Set, this._nextEventLoopTimeout = null
			}
			add(e) {
				if (this._elements.has(e)) throw new _r('focusTracker-add-element-already-exist');
				this.listenTo(e, 'focus', () => this._focus(e), {
					useCapture: !0
				}), this.listenTo(e, 'blur', () => this._blur(), {
					useCapture: !0
				}), this._elements.add(e)
			}
			remove(e) {
				e === this.focusedElement && this._blur(e), this._elements.has(e) && (this.stopListening(e), this._elements.delete(e))
			}
			_focus(e) {
				clearTimeout(this._nextEventLoopTimeout), this.focusedElement = e, this.isFocused = !0
			}
			_blur() {
				clearTimeout(this._nextEventLoopTimeout), this._nextEventLoopTimeout = setTimeout(() => {
					this.focusedElement = null, this.isFocused = !1
				}, 0)
			}
		}
		r(mg, Ep), r(mg, Ws);
		class ug {
			constructor(e, t) {
				this.editor = e, this.view = t, this.componentFactory = new cg(e), this.focusTracker = new mg, this._toolbarConfig = no(e.config.get('toolbar'))
			}
			init() {
				const e = this.editor,
					t = this.view;
				t.render(), t.stickyPanel.bind('isActive').to(this.focusTracker, 'isFocused'), t.stickyPanel.limiterElement = t.element, this._toolbarConfig.viewportTopOffset && (t.stickyPanel.viewportTopOffset = this._toolbarConfig.viewportTopOffset);
				const n = e.editing.createRoot('div');
				t.editable.bind('isReadOnly').to(n), t.editable.bind('isFocused').to(e.editing.view), t.editable.name = n.rootName, this.focusTracker.add(this.view.editableElement), this.view.toolbar.fillFromConfig(this._toolbarConfig.items, this.componentFactory), to({
					origin: e.editing.view,
					originFocusTracker: this.focusTracker,
					originKeystrokeHandler: e.keystrokes,
					toolbar: this.view.toolbar
				})
			}
			destroy() {
				this.view.destroy()
			}
		}
		class pg {
			constructor(e = {}) {
				this._items = [], this._itemMap = new Map, this._idProperty = e.idProperty || 'id', this._bindToExternalToInternalMap = new WeakMap, this._bindToInternalToExternalMap = new WeakMap
			}
			get length() {
				return this._items.length
			}
			get first() {
				return this._items[0] || null
			}
			get last() {
				return this._items[this.length - 1] || null
			}
			add(e, t) {
				let n;
				const o = this._idProperty;
				if (o in e) {
					if (n = e[o], 'string' != typeof n) throw new _r('collection-add-invalid-id');
					if (this.get(n)) throw new _r('collection-add-item-already-exists')
				} else e[o] = n = s();
				if (void 0 === t) t = this._items.length;
				else if (t > this._items.length || 0 > t) throw new _r('collection-add-item-invalid-index');
				return this._items.splice(t, 0, e), this._itemMap.set(n, e), this.fire('add', e, t), this
			}
			get(e) {
				let t;
				if ('string' == typeof e) t = this._itemMap.get(e);
				else if ('number' == typeof e) t = this._items[e];
				else throw new _r('collection-get-invalid-arg: Index or id must be given.');
				return t || null
			}
			getIndex(e) {
				let t;
				return t = 'string' == typeof e ? this._itemMap.get(e) : e, this._items.indexOf(t)
			}
			remove(e) {
				let t = !1,
					n, o, i;
				const a = this._idProperty;
				if ('string' == typeof e ? (o = e, i = this._itemMap.get(o), t = !i, i && (n = this._items.indexOf(i))) : 'number' == typeof e ? (n = e, i = this._items[n], t = !i, i && (o = i[a])) : (i = e, o = i[a], n = this._items.indexOf(i), t = -1 == n || !this._itemMap.get(o)), t) throw new _r('collection-remove-404: Item not found.');
				this._items.splice(n, 1), this._itemMap.delete(o);
				const r = this._bindToInternalToExternalMap.get(i);
				return this._bindToInternalToExternalMap.delete(i), this._bindToExternalToInternalMap.delete(r), this.fire('remove', i), i
			}
			map(e, t) {
				return this._items.map(e, t)
			}
			find(e, t) {
				return this._items.find(e, t)
			}
			filter(e, t) {
				return this._items.filter(e, t)
			}
			clear() {
				for (this._bindToCollection && (this.stopListening(this._bindToCollection), this._bindToCollection = null); this.length;) this.remove(0)
			}
			bindTo(e) {
				if (this._bindToCollection) throw new _r('collection-bind-to-rebind: The collection cannot be bound more than once.');
				return this._bindToCollection = e, {
					as: (e) => {
						this._setUpBindToBinding((t) => new e(t))
					},
					using: (e) => {
						'function' == typeof e ? this._setUpBindToBinding((t) => e(t)) : this._setUpBindToBinding((t) => t[e])
					}
				}
			}
			_setUpBindToBinding(e) {
				const t = this._bindToCollection,
					n = (n, o, i) => {
						const a = t._bindToCollection == this,
							r = t._bindToInternalToExternalMap.get(o);
						if (a && r) this._bindToExternalToInternalMap.set(o, r), this._bindToInternalToExternalMap.set(r, o);
						else {
							const t = e(o);
							this._bindToExternalToInternalMap.set(o, t), this._bindToInternalToExternalMap.set(t, o), this.add(t, i)
						}
					};
				for (const o of t) n(null, o);
				this.listenTo(t, 'add', n), this.listenTo(t, 'remove', (e, t) => {
					const n = this._bindToExternalToInternalMap.get(t);
					n && this.remove(n)
				})
			}[Symbol.iterator]() {
				return this._items[Symbol.iterator]()
			}
		}
		r(pg, Or);
		class gg extends pg {
			constructor(e) {
				super({
					idProperty: 'viewUid'
				}), this.on('add', (e, t, n) => {
					t.isRendered || t.render(), t.element && this._parentElement && this._parentElement.insertBefore(t.element, this._parentElement.children[n])
				}), this.on('remove', (e, t) => {
					t.element && this._parentElement && t.element.remove()
				}), this.locale = e, this._parentElement = null
			}
			destroy() {
				this.map((e) => e.destroy())
			}
			setParent(e) {
				this._parentElement = e
			}
			delegate(...e) {
				if (!e.length || !oo(e)) throw new _r('ui-viewcollection-delegate-wrong-events: All event names must be strings.');
				return {
					to: (t) => {
						for (const n of this)
							for (const o of e) n.delegate(o).to(t);
						this.on('add', (n, o) => {
							for (const i of e) o.delegate(i).to(t)
						}), this.on('remove', (n, o) => {
							for (const i of e) o.stopDelegating(i, t)
						})
					}
				}
			}
		}
		r(pg, Ws);
		var fg = function(e, t) {
			return qd(e, !0, !0, t)
		};
		class hg {
			constructor(e) {
				Object.assign(this, uo(mo(e))), this._isRendered = !1, this._revertData = null
			}
			render() {
				const e = this._renderNode({
					intoFragment: !0
				});
				return this._isRendered = !0, e
			}
			apply(e) {
				return this._revertData = Co(), this._renderNode({
					node: e,
					isApplying: !0,
					revertData: this._revertData
				}), e
			}
			revert(e) {
				if (!this._revertData) throw new _r('ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.');
				this._revertTemplateFromNode(e, this._revertData)
			}* getViews() {
				function* e(t) {
					if (t.children)
						for (const n of t.children) vo(n) ? yield n: xo(n) && (yield* e(n))
				}
				yield* e(this)
			}
			static bind(e, t) {
				return {
					to(n, o) {
						return new _g({
							eventNameOrFunction: n,
							attribute: n,
							observable: e,
							emitter: t,
							callback: o
						})
					},
					if (n, o, i) {
						return new kg({
							observable: e,
							emitter: t,
							attribute: n,
							valueIfTrue: o,
							callback: i
						})
					}
				}
			}
			static extend(e, t) {
				e._isRendered && wr.warn('template-extend-render: Attempting to extend a template which has already been rendered.'), wo(e, uo(mo(t)))
			}
			_renderNode(e) {
				let t;
				if (t = e.node ? this.tag && this.text : this.tag ? this.text : !this.text, t) throw new _r('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');
				return this.text ? this._renderText(e) : this._renderElement(e)
			}
			_renderElement(e) {
				let t = e.node;
				return t || (t = e.node = document.createElementNS(this.ns || 'http://www.w3.org/1999/xhtml', this.tag)), this._renderAttributes(e), this._renderElementChildren(e), this._setUpListeners(e), t
			}
			_renderText(e) {
				let t = e.node;
				return t ? e.revertData.text = t.textContent : t = e.node = document.createTextNode(''), io(this.text) ? this._bindToObservable({
					schema: this.text,
					updater: so(t),
					data: e
				}) : t.textContent = this.text.join(''), t
			}
			_renderAttributes(e) {
				let t, n, o, i;
				if (this.attributes) {
					const a = e.node,
						r = e.revertData;
					for (t in this.attributes)
						if (o = a.getAttribute(t), n = this.attributes[t], r && (r.attributes[t] = o), i = Lr(n[0]) && n[0].ns ? n[0].ns : null, io(n)) {
							const s = i ? n[0].value : n;
							r && To(t) && s.unshift(o), this._bindToObservable({
								schema: s,
								updater: lo(a, t, i),
								data: e
							})
						} else 'style' == t && 'string' != typeof n[0] ? this._renderStyleAttribute(n[0], e) : (r && o && To(t) && n.unshift(o), n = n.map((e) => e ? e.value || e : e).reduce((e, t) => e.concat(t), []).reduce(_o, ''), yo(n) || a.setAttributeNS(i, t, n))
				}
			}
			_renderStyleAttribute(e, t) {
				const n = t.node;
				for (const o in e) {
					const i = e[o];
					io(i) ? this._bindToObservable({
						schema: [i],
						updater: co(n, o),
						data: t
					}) : n.style[o] = i
				}
			}
			_renderElementChildren(e) {
				const t = e.node,
					n = e.intoFragment ? document.createDocumentFragment() : t,
					o = e.isApplying;
				let i = 0;
				for (const a of this.children)
					if (Ao(a)) {
						if (!o) {
							a.setParent(t);
							for (const e of a) n.appendChild(e.element)
						}
					} else if (vo(a)) o || (!a.isRendered && a.render(), n.appendChild(a.element));
				else if (dn(a)) n.appendChild(a);
				else if (o) {
					const t = e.revertData,
						o = Co();
					t.children.push(o), a._renderNode({
						node: n.childNodes[i++],
						isApplying: !0,
						revertData: o
					})
				} else n.appendChild(a.render());
				e.intoFragment && t.appendChild(n)
			}
			_setUpListeners(e) {
				if (this.eventListeners)
					for (const t in this.eventListeners) {
						const n = this.eventListeners[t].map((n) => {
							const [o, i] = t.split('@');
							return n.activateDomEventListener(o, i, e)
						});
						e.revertData && e.revertData.bindings.push(n)
					}
			}
			_bindToObservable({
				schema: e,
				updater: t,
				data: n
			}) {
				const o = n.revertData;
				ro(e, t, n);
				const i = e.filter((e) => !yo(e)).filter((e) => e.observable).map((o) => o.activateAttributeListener(e, t, n));
				o && o.bindings.push(i)
			}
			_revertTemplateFromNode(e, t) {
				for (const n of t.bindings)
					for (const e of n) e();
				if (t.text) return void(e.textContent = t.text);
				for (const n in t.attributes) {
					const o = t.attributes[n];
					null === o ? e.removeAttribute(n) : e.setAttribute(n, o)
				}
				for (let n = 0; n < t.children.length; ++n) this._revertTemplateFromNode(e.childNodes[n], t.children[n])
			}
		}
		r(hg, Or);
		class bg {
			constructor(e) {
				Object.assign(this, e)
			}
			getValue(e) {
				const t = this.observable[this.attribute];
				return this.callback ? this.callback(t, e) : t
			}
			activateAttributeListener(e, t, n) {
				const o = () => ro(e, t, n);
				return this.emitter.listenTo(this.observable, 'change:' + this.attribute, o), () => {
					this.emitter.stopListening(this.observable, 'change:' + this.attribute, o)
				}
			}
		}
		class _g extends bg {
			activateDomEventListener(e, t, n) {
				const o = (e, n) => {
					(!t || n.target.matches(t)) && ('function' == typeof this.eventNameOrFunction ? this.eventNameOrFunction(n) : this.observable.fire(this.eventNameOrFunction, n))
				};
				return this.emitter.listenTo(n.node, e, o), () => {
					this.emitter.stopListening(n.node, e, o)
				}
			}
		}
		class kg extends bg {
			getValue(e) {
				const t = super.getValue(e);
				return !yo(t) && (this.valueIfTrue || !0)
			}
		}
		class wg {
			constructor(e) {
				this.element = null, this.isRendered = !1, this.locale = e, this.t = e && e.t, this._viewCollections = new pg, this._unboundChildren = this.createCollection(), this._viewCollections.on('add', (t, n) => {
					n.locale = e
				})
			}
			get bindTemplate() {
				return this._bindTemplate ? this._bindTemplate : this._bindTemplate = hg.bind(this, this)
			}
			createCollection() {
				const e = new gg;
				return this._viewCollections.add(e), e
			}
			registerChildren(e) {
				S(e) || (e = [e]);
				for (const t of e) this._unboundChildren.add(t)
			}
			deregisterChildren(e) {
				S(e) || (e = [e]);
				for (const t of e) this._unboundChildren.remove(t)
			}
			setTemplate(e) {
				this.template = new hg(e)
			}
			extendTemplate(e) {
				hg.extend(this.template, e)
			}
			render() {
				if (this.isRendered) throw new _r('ui-view-render-already-rendered: This View has already been rendered.');
				this.template && (this.element = this.template.render(), this.registerChildren(this.template.getViews())), this.isRendered = !0
			}
			destroy() {
				this.stopListening(), this._viewCollections.map((e) => e.destroy())
			}
		}
		r(wg, Ep), r(wg, Ws);
		class yg extends wg {
			constructor(e) {
				super(e), this.body = this.createCollection()
			}
			render() {
				super.render(), this._renderBodyCollection()
			}
			destroy() {
				return this._bodyCollectionContainer.remove(), super.destroy()
			}
			_renderBodyCollection() {
				const e = this._bodyCollectionContainer = new hg({
					tag: 'div',
					attributes: {
						class: ['ck-body', 'ck-rounded-corners', 'ck-reset_all']
					},
					children: this.body
				}).render();
				document.body.appendChild(e)
			}
		}
		class vg extends yg {
			constructor(e) {
				super(e);
				const n = this.t,
					t = s();
				this.top = this.createCollection(), this.main = this.createCollection(), this.setTemplate({
					tag: 'div',
					attributes: {
						class: ['ck-reset', 'ck-editor', 'ck-rounded-corners'],
						role: 'application',
						dir: 'ltr',
						lang: e.lang,
						"aria-labelledby": `cke-editor__aria-label_${t}`
					},
					children: [{
						tag: 'span',
						attributes: {
							id: `cke-editor__aria-label_${t}`,
							class: 'cke-voice-label'
						},
						children: [n('af')]
					}, {
						tag: 'div',
						attributes: {
							class: 'ck-editor__top ck-reset_all',
							role: 'presentation'
						},
						children: this.top
					}, {
						tag: 'div',
						attributes: {
							class: 'ck-editor__main',
							role: 'presentation'
						},
						children: this.main
					}]
				})
			}
		}
		class xg extends wg {
			constructor(e, t) {
				super(e);
				const n = this.bindTemplate;
				t && (this.element = this.editableElement = t), this.setTemplate({
					tag: 'div',
					attributes: {
						class: [n.to('isFocused', (e) => e ? 'ck-focused' : 'ck-blurred'), 'ck-editor__editable', 'ck-rounded-corners'],
						contenteditable: n.to('isReadOnly', (e) => !e)
					}
				}), this.set('isReadOnly', !1), this.set('isFocused', !1), this.externalElement = t
			}
			render() {
				super.render(), this.externalElement ? this.template.apply(this.element = this.externalElement) : this.editableElement = this.element
			}
			destroy() {
				this.externalElement && this.template.revert(this.externalElement), super.destroy()
			}
		}
		class Ag extends xg {
			constructor(e, n) {
				super(e, n);
				const o = this.bindTemplate,
					i = this.t;
				this.set('name', null);
				this.extendTemplate({
					attributes: {
						role: 'textbox',
						"aria-label": o.to('name', (e) => i('ag', [e])),
						class: 'ck-editor__editable_inline'
					}
				})
			}
		}
		const Cg = Po('px');
		class Tg extends wg {
			constructor(e) {
				super(e);
				const t = this.bindTemplate;
				this.set('isActive', !1), this.set('isSticky', !1), this.set('limiterElement', null), this.set('limiterBottomOffset', 50), this.set('viewportTopOffset', 0), this.set('_marginLeft', null), this.set('_isStickyToTheLimiter', !1), this.set('_hasViewportTopOffset', !1), this.content = this.createCollection(), this._contentPanelPlaceholder = new hg({
					tag: 'div',
					attributes: {
						class: ['ck-sticky-panel__placeholder'],
						style: {
							display: t.to('isSticky', (e) => e ? 'block' : 'none'),
							height: t.to('isSticky', (e) => e ? Cg(this._panelRect.height) : null)
						}
					}
				}).render(), this._contentPanel = new hg({
					tag: 'div',
					attributes: {
						class: ['ck-sticky-panel__content', t.if('isSticky', 'ck-sticky-panel__content_sticky'), t.if('_isStickyToTheLimiter', 'ck-sticky-panel__content_sticky_bottom-limit')],
						style: {
							width: t.to('isSticky', (e) => e ? Cg(this._contentPanelPlaceholder.getBoundingClientRect().width) : null),
							top: t.to('_hasViewportTopOffset', (e) => e ? Cg(this.viewportTopOffset) : null),
							bottom: t.to('_isStickyToTheLimiter', (e) => e ? Cg(this.limiterBottomOffset) : null),
							marginLeft: t.to('_marginLeft')
						}
					},
					children: this.content
				}).render(), this.setTemplate({
					tag: 'div',
					attributes: {
						class: ['ck-sticky-panel']
					},
					children: [this._contentPanelPlaceholder, this._contentPanel]
				})
			}
			render() {
				super.render(), this._checkIfShouldBeSticky(), this.listenTo(zp.window, 'scroll', () => {
					this._checkIfShouldBeSticky()
				}), this.listenTo(this, 'change:isActive', () => {
					this._checkIfShouldBeSticky()
				})
			}
			_checkIfShouldBeSticky() {
				const e = this._panelRect = this._contentPanel.getBoundingClientRect();
				let t;
				this.limiterElement ? (t = this._limiterRect = this.limiterElement.getBoundingClientRect(), this.isSticky = this.isActive && t.top < this.viewportTopOffset && this._panelRect.height + this.limiterBottomOffset < t.height) : this.isSticky = !1, this.isSticky ? (this._isStickyToTheLimiter = t.bottom < e.height + this.limiterBottomOffset + this.viewportTopOffset, this._hasViewportTopOffset = !this._isStickyToTheLimiter && !!this.viewportTopOffset, this._marginLeft = this._isStickyToTheLimiter ? null : Cg(-zp.window.scrollX)) : (this._isStickyToTheLimiter = !1, this._hasViewportTopOffset = !1, this._marginLeft = null)
			}
		}
		class Pg {
			constructor(e) {
				if (Object.assign(this, e), e.actions && e.keystrokeHandler)
					for (const t in e.actions) {
						let n = e.actions[t];
						'string' == typeof n && (n = [n]);
						for (const o of n) e.keystrokeHandler.set(o, (e, n) => {
							this[t](), n()
						})
					}
			}
			get first() {
				return this.focusables.find(So) || null
			}
			get last() {
				return this.focusables.filter(So).slice(-1)[0] || null
			}
			get next() {
				return this._getFocusableItem(1)
			}
			get previous() {
				return this._getFocusableItem(-1)
			}
			get current() {
				let e = null;
				return null === this.focusTracker.focusedElement ? null : (this.focusables.find((t, n) => {
					const o = t.element === this.focusTracker.focusedElement;
					return o && (e = n), o
				}), e)
			}
			focusFirst() {
				this._focus(this.first)
			}
			focusLast() {
				this._focus(this.last)
			}
			focusNext() {
				this._focus(this.next)
			}
			focusPrevious() {
				this._focus(this.previous)
			}
			_focus(e) {
				e && e.focus()
			}
			_getFocusableItem(e) {
				const t = this.current,
					n = this.focusables.length;
				if (!n) return null;
				if (null === t) return this[1 === e ? 'first' : 'last'];
				let o = (t + n + e) % n;
				do {
					const t = this.focusables.get(o);
					if (So(t)) return t;
					o = (o + n + e) % n
				} while (o !== t);
				return null
			}
		}
		class Sg extends wg {
			constructor(e) {
				super(e), this.setTemplate({
					tag: 'span',
					attributes: {
						class: ['ck-toolbar__separator']
					}
				})
			}
		}
		class Eg extends wg {
			constructor(e) {
				super(e), this.items = this.createCollection(), this.focusTracker = new mg, this.keystrokes = new Op, this._focusCycler = new Pg({
					focusables: this.items,
					focusTracker: this.focusTracker,
					keystrokeHandler: this.keystrokes,
					actions: {
						focusPrevious: ['arrowleft', 'arrowup'],
						focusNext: ['arrowright', 'arrowdown']
					}
				}), this.setTemplate({
					tag: 'div',
					attributes: {
						class: ['ck-toolbar']
					},
					children: this.items,
					on: {
						mousedown: Eo(this)
					}
				})
			}
			render() {
				super.render();
				for (const e of this.items) this.focusTracker.add(e.element);
				this.items.on('add', (e, t) => {
					this.focusTracker.add(t.element)
				}), this.items.on('remove', (e, t) => {
					this.focusTracker.remove(t.element)
				}), this.keystrokes.listenTo(this.element)
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			fillFromConfig(e, t) {
				e.map((e) => {
					'|' == e ? this.items.add(new Sg) : t.has(e) ? this.items.add(t.create(e)) : wr.warn('toolbarview-item-unavailable: The requested toolbar item is unavailable.', {
						name: e
					})
				})
			}
		}
		class Vg extends vg {
			constructor(e) {
				super(e), this.stickyPanel = new Tg(e), this.toolbar = new Eg(e), this.toolbar.extendTemplate({
					attributes: {
						class: 'ck-editor-toolbar'
					}
				}), this.editable = new Ag(e)
			}
			render() {
				super.render(), this.stickyPanel.content.add(this.toolbar), this.top.add(this.stickyPanel), this.main.add(this.editable)
			}
			get editableElement() {
				return this.editable.element
			}
		}
		class Og {
			constructor() {
				this._replacedElements = []
			}
			replace(e, t) {
				this._replacedElements.push({
					element: e,
					newElement: t
				}), e.style.display = 'none', t && e.parentNode.insertBefore(t, e.nextSibling)
			}
			restore() {
				this._replacedElements.forEach(({
					element: e,
					newElement: t
				}) => {
					e.style.display = '', t && t.remove()
				}), this._replacedElements = []
			}
		}
		var Rg = n(9),
			Fg = n.n(Rg);
		class Ig extends sg {
			constructor(e, t) {
				super(e, t), this.document.createRoot(), this.data.processor = new dg, this.ui = new ug(this, new Vg(this.locale)), this._elementReplacer = new Og
			}
			destroy() {
				return this.updateEditorElement(), this._elementReplacer.restore(), this.ui.destroy(), super.destroy()
			}
			static create(e, t) {
				return new Promise((n) => {
					const o = new this(e, t);
					n(o.initPlugins().then(() => o.ui.init()).then(() => {
						o._elementReplacer.replace(e, o.ui.view.element), o.fire('uiReady')
					}).then(() => o.editing.view.attachDomRoot(o.ui.view.editableElement)).then(() => o.loadDataFromEditorElement()).then(() => {
						o.fire('dataReady'), o.fire('ready')
					}).then(() => o))
				})
			}
		}
		class Ng {
			constructor(e) {
				this.editor = e
			}
			destroy() {
				this.stopListening()
			}
		}
		r(Ng, Ws);
		class Bg {
			constructor(e) {
				this.files = Vo(e), this._native = e
			}
			get types() {
				return this._native.types
			}
			getData(e) {
				return this._native.getData(e)
			}
			setData(e, t) {
				this._native.setData(e, t)
			}
		}
		class Mg extends Xp {
			constructor(e) {
				function t(t, n) {
					n.preventDefault();
					const o = n.dropRange ? [n.dropRange] : Array.from(e.selection.getRanges());
					e.fire('clipboardInput', {
						dataTransfer: n.dataTransfer,
						targetRanges: o
					})
				}
				super(e), this.domEventType = ['paste', 'copy', 'cut', 'drop', 'dragover'], this.listenTo(e, 'paste', t, {
					priority: 'low'
				}), this.listenTo(e, 'drop', t, {
					priority: 'low'
				})
			}
			onDomEvent(e) {
				const t = {
					dataTransfer: new Bg(e.clipboardData ? e.clipboardData : e.dataTransfer)
				};
				'drop' == e.type && (t.dropRange = Oo(this.document, e)), this.fire(e.type, e, t)
			}
		}
		const Dg = ['figcaption', 'li'];
		class Lg extends Ng {
			static get pluginName() {
				return 'Clipboard'
			}
			init() {
				function e(e, i) {
					const a = i.dataTransfer,
						r = t.data.toView(t.data.getSelectedContent(n.selection));
					i.preventDefault(), o.fire('clipboardOutput', {
						dataTransfer: a,
						content: r,
						method: e.name
					})
				}
				const t = this.editor,
					n = t.document,
					o = t.editing.view;
				this._htmlDataProcessor = new dg, o.addObserver(Mg), this.listenTo(o, 'clipboardInput', (e, n) => {
					if (t.isReadOnly) return;
					const i = n.dataTransfer;
					let a = '';
					i.getData('text/html') ? a = Fo(i.getData('text/html')) : i.getData('text/plain') && (a = Ro(i.getData('text/plain'))), a = this._htmlDataProcessor.toView(a), this.fire('inputTransformation', {
						content: a
					}), o.scrollToTheSelection()
				}, {
					priority: 'low'
				}), this.listenTo(this, 'inputTransformation', (e, t) => {
					if (!t.content.isEmpty) {
						const e = this.editor.data,
							o = e.toModel(t.content, '$clipboardHolder');
						if (0 == o.childCount) return;
						n.enqueueChanges(() => {
							e.insertContent(o, n.selection)
						})
					}
				}, {
					priority: 'low'
				}), this.listenTo(o, 'copy', e, {
					priority: 'low'
				}), this.listenTo(o, 'cut', (n, o) => {
					t.isReadOnly ? o.preventDefault() : e(n, o)
				}, {
					priority: 'low'
				}), this.listenTo(o, 'clipboardOutput', (e, o) => {
					o.content.isEmpty || (o.dataTransfer.setData('text/html', this._htmlDataProcessor.toData(o.content)), o.dataTransfer.setData('text/plain', Io(o.content))), 'cut' == o.method && n.enqueueChanges(() => {
						t.data.deleteContent(n.selection, n.batch())
					})
				}, {
					priority: 'low'
				})
			}
		}
		class zg {
			constructor(e) {
				function t() {
					this.isEnabled = !1
				}
				this.editor = e, this.set('value', void 0), this.set('isEnabled', !1), this.decorate('execute'), this.listenTo(this.editor.document, 'changesDone', () => {
					this.refresh()
				}), this.on('execute', (e) => {
					this.isEnabled || e.stop()
				}, {
					priority: 'high'
				}), this.listenTo(e, 'change:isReadOnly', (e, n, o) => {
					o ? (this.on('change:isEnabled', t, {
						priority: 'lowest'
					}), this.isEnabled = !1) : (this.off('change:isEnabled', t), this.refresh())
				})
			}
			refresh() {
				this.isEnabled = !0
			}
			execute() {}
			destroy() {
				this.stopListening()
			}
		}
		r(zg, Ws);
		class jg extends zg {
			execute() {
				const e = this.editor.document,
					t = e.batch();
				e.enqueueChanges(() => {
					No(this.editor.data, t, e.selection, e.schema), this.fire('afterExecute', {
						batch: t
					})
				})
			}
		}
		class $g extends Hp {
			constructor(e) {
				super(e), e.on('keydown', (t, n) => {
					this.isEnabled && n.keyCode == uc.enter && e.fire('enter', new Yp(e, n.domEvent))
				})
			}
			observe() {}
		}
		class qg extends Ng {
			static get pluginName() {
				return 'Enter'
			}
			init() {
				const e = this.editor,
					t = e.editing.view;
				t.addObserver($g), e.commands.add('enter', new jg(e)), this.listenTo(t, 'enter', (n, o) => {
					e.execute('enter'), o.preventDefault(), t.scrollToTheSelection()
				}, {
					priority: 'low'
				})
			}
		}
		class Hg {
			constructor(e, t = 20) {
				this.document = e, this.size = 0, this.limit = t, this.isLocked = !1, this._changeCallback = (e, t, n, o) => {
					this._onBatch(o)
				}, this._selectionChangeCallback = () => {
					this._reset()
				}, e.on('change', this._changeCallback), e.selection.on('change:range', this._selectionChangeCallback), e.selection.on('change:attribute', this._selectionChangeCallback)
			}
			get batch() {
				return this._batch || (this._batch = this.document.batch()), this._batch
			}
			input(e) {
				this.size += e, this.size >= this.limit && this._reset(!0)
			}
			lock() {
				this.isLocked = !0
			}
			unlock() {
				this.isLocked = !1
			}
			destroy() {
				this.document.off('change', this._changeCallback), this.document.selection.off('change:range', this._selectionChangeCallback), this.document.selection.off('change:attribute', this._selectionChangeCallback)
			}
			_onBatch(e) {
				'transparent' != e.type && e !== this._batch && 1 >= mn(e.getOperations()) && this._reset(!0)
			}
			_reset(e) {
				(!this.isLocked || e) && (this._batch = null, this.size = 0)
			}
		}
		class Wg extends zg {
			constructor(e, t) {
				super(e), this._buffer = new Hg(e.document, t)
			}
			get buffer() {
				return this._buffer
			}
			destroy() {
				super.destroy(), this._buffer.destroy()
			}
			execute(e = {}) {
				const t = this.editor.document,
					n = e.text || '',
					o = n.length,
					i = e.range || t.selection.getFirstRange(),
					a = e.resultRange;
				t.enqueueChanges(() => {
					const e = i.isCollapsed;
					this._buffer.lock(), e || this._buffer.batch.remove(i), n && this._buffer.batch.weakInsert(i.start, n), a ? this.editor.data.model.selection.setRanges([a]) : e && this.editor.data.model.selection.setCollapsedAt(i.start.getShiftedBy(o)), this._buffer.unlock(), this._buffer.input(o)
				})
			}
		}
		class Ug extends Ng {
			static get pluginName() {
				return 'Input'
			}
			init() {
				const e = this.editor,
					t = e.editing.view,
					n = new Wg(e, e.config.get('typing.undoStep') || 20);
				e.commands.add('input', n), this.listenTo(t, 'keydown', (e, t) => {
					this._handleKeydown(t, n)
				}, {
					priority: 'lowest'
				}), this.listenTo(t, 'mutations', (e, t, n) => {
					this._handleMutations(t, n)
				})
			}
			_handleKeydown(e, t) {
				const n = this.editor.document,
					o = t.buffer;
				!t.isEnabled || Do(e) || n.selection.isCollapsed || (o.lock(), n.enqueueChanges(() => {
					this.editor.data.deleteContent(n.selection, o.batch)
				}), o.unlock())
			}
			_handleMutations(e, t) {
				new Kg(this.editor).handle(e, t)
			}
		}
		class Kg {
			constructor(e) {
				this.editor = e, this.editing = this.editor.editing
			}
			handle(e, t) {
				if ($o(e)) this._handleContainerChildrenMutations(e, t);
				else
					for (const n of e) this._handleTextMutation(n, t), this._handleTextNodeInsertion(n)
			}
			_handleContainerChildrenMutations(e, t) {
				const n = jo(e);
				if (!n) return;
				const o = this.editor.editing.view.domConverter,
					i = o.mapViewToDom(n);
				if (!i) return;
				const a = new jp,
					r = this.editor.data.toModel(a.domToView(i)).getChild(0),
					s = this.editor.editing.mapper.toModelElement(n),
					l = Array.from(r.getChildren()),
					d = Array.from(s.getChildren());
				if (!qo(l) || !qo(d)) return;
				const c = l.map((e) => e.data).join('').replace(/\u00A0/g, ' '),
					m = d.map((e) => e.data).join('');
				if (m === c) return;
				const u = _n(m, c),
					{
						firstChangeAt: p,
						insertions: g,
						deletions: f
					} = Ho(u);
				let h = null;
				t && (h = this.editing.mapper.toModelRange(t.getFirstRange()));
				const b = c.substr(p, g),
					_ = el.createFromParentsAndOffsets(s, p, s, p + f);
				this.editor.execute('input', {
					text: b,
					range: _,
					resultRange: h
				})
			}
			_handleTextMutation(e, t) {
				if ('text' != e.type) return;
				const n = e.newText.replace(/\u00A0/g, ' '),
					o = e.oldText.replace(/\u00A0/g, ' '),
					i = _n(o, n),
					{
						firstChangeAt: a,
						insertions: r,
						deletions: s
					} = Ho(i);
				let l = null;
				t && (l = this.editing.mapper.toModelRange(t.getFirstRange()));
				const d = new ec(e.node, a),
					c = this.editing.mapper.toModelPosition(d),
					m = el.createFromPositionAndShift(c, s),
					u = n.substr(a, r);
				this.editor.execute('input', {
					text: u,
					range: m,
					resultRange: l
				})
			}
			_handleTextNodeInsertion(e) {
				if ('children' == e.type) {
					const t = zo(e),
						n = new ec(e.node, t.index),
						o = this.editing.mapper.toModelPosition(n),
						i = t.values[0].data;
					this.editor.execute('input', {
						text: i.replace(/\u00A0/g, ' '),
						range: new el(o)
					})
				}
			}
		}
		const Qg = [ee('arrowUp'), ee('arrowRight'), ee('arrowDown'), ee('arrowLeft'), 9, 16, 17, 18, 20, 27, 33, 34, 35, 36, 229];
		for (let o = 112; 135 >= o; o++) Qg.push(o);
		class Jg extends zg {
			constructor(e, t) {
				super(e), this.direction = t, this._buffer = new Hg(e.document, e.config.get('typing.undoStep'))
			}
			execute(e = {}) {
				const t = this.editor.document,
					n = this.editor.data;
				t.enqueueChanges(() => {
					this._buffer.lock();
					const o = bp.createFromSelection(t.selection),
						i = o.isCollapsed;
					if (o.isCollapsed && n.modifySelection(o, {
							direction: this.direction,
							unit: e.unit
						}), this._shouldEntireContentBeReplacedWithParagraph(e.sequence || 1)) return void this._replaceEntireContentWithParagraph();
					if (o.isCollapsed) return;
					let a = 0;
					o.getFirstRange().getMinimalFlatRanges().forEach((e) => {
						a += mn(e.getWalker({
							singleCharacters: !0,
							ignoreElementEnd: !0,
							shallow: !0
						}))
					}), n.deleteContent(o, this._buffer.batch, {
						doNotResetEntireContent: i
					}), this._buffer.input(a), t.selection.setRanges(o.getRanges(), o.isBackward), this._buffer.unlock()
				})
			}
			_shouldEntireContentBeReplacedWithParagraph(e) {
				if (1 < e) return !1;
				const t = this.editor.document,
					n = t.selection,
					o = t.schema.getLimitElement(n),
					i = n.isCollapsed && n.containsEntireContent(o);
				if (!i) return !1;
				if (!t.schema.check({
						name: 'paragraph',
						inside: o.name
					})) return !1;
				const a = o.getChild(0);
				return a && 'paragraph' === a.name ? !1 : !0
			}
			_replaceEntireContentWithParagraph() {
				const e = this.editor.document,
					t = e.selection,
					n = e.schema.getLimitElement(t),
					o = new Gs('paragraph');
				this._buffer.batch.remove(el.createIn(n)), this._buffer.batch.insert(Zs.createAt(n), o), t.setCollapsedAt(o)
			}
		}
		class Gg extends Hp {
			constructor(e) {
				super(e);
				let t = 0;
				e.on('keyup', (e, n) => {
					(n.keyCode == uc.delete || n.keyCode == uc.backspace) && (t = 0)
				}), e.on('keydown', (n, o) => {
					const i = {};
					if (o.keyCode == uc.delete) i.direction = 'forward', i.unit = 'character';
					else if (o.keyCode == uc.backspace) i.direction = 'backward', i.unit = 'codePoint';
					else return;
					i.unit = o.altKey ? 'word' : i.unit, i.sequence = ++t, e.fire('delete', new Yp(e, o.domEvent, i))
				})
			}
			observe() {}
		}
		class Yg extends Ng {
			static get pluginName() {
				return 'Delete'
			}
			init() {
				const e = this.editor,
					t = e.editing.view;
				t.addObserver(Gg), e.commands.add('forwardDelete', new Jg(e, 'forward')), e.commands.add('delete', new Jg(e, 'backward')), this.listenTo(t, 'delete', (n, o) => {
					e.execute('forward' == o.direction ? 'forwardDelete' : 'delete', {
						unit: o.unit,
						sequence: o.sequence
					}), o.preventDefault(), t.scrollToTheSelection()
				})
			}
		}
		class Xg extends Ng {
			static get requires() {
				return [Ug, Yg]
			}
			static get pluginName() {
				return 'Typing'
			}
		}
		class Zg extends zg {
			constructor(e) {
				super(e), this._stack = [], this._createdBatches = new WeakSet, this.refresh()
			}
			refresh() {
				this.isEnabled = 0 < this._stack.length
			}
			addBatch(e) {
				const t = this.editor.document.selection,
					n = {
						ranges: t.hasOwnRange ? Array.from(t.getRanges()) : [],
						isBackward: t.isBackward
					};
				this._stack.push({
					batch: e,
					selection: n
				}), this.refresh()
			}
			clearStack() {
				this._stack = [], this.refresh()
			}
			_restoreSelection(e, t, n) {
				const o = this.editor.document,
					i = [];
				for (const a of e) {
					const e = Wo(a, n),
						t = e.find((e) => e.start.root != o.graveyard);
					t && i.push(t)
				}
				i.length && o.selection.setRanges(i, t)
			}
			_undo(e) {
				const t = this.editor.document,
					n = t.batch();
				this._createdBatches.add(n);
				const o = e.deltas.slice();
				o.reverse();
				for (const i of o) {
					const e = i.baseVersion + i.operations.length,
						o = Array.from(t.history.getDeltas(e)),
						a = t.transformDeltas([i.getReversed()], o, !0),
						r = a.deltasA;
					for (const e of r) {
						e.baseVersion = t.version, n.addDelta(e);
						for (const n of e.operations) t.applyOperation(n);
						t.history.setDeltaAsUndone(i, e)
					}
				}
				return n
			}
		}
		class ef extends Zg {
			execute(e = null) {
				const t = e ? this._stack.findIndex((t) => t.batch == e) : this._stack.length - 1,
					n = this._stack.splice(t, 1)[0];
				this.editor.document.enqueueChanges(() => {
					const e = this._undo(n.batch),
						t = this.editor.document.history.getDeltas(n.batch.baseVersion);
					this._restoreSelection(n.selection.ranges, n.selection.isBackward, t), this.fire('revert', n.batch, e)
				}), this.refresh()
			}
		}
		class tf extends Zg {
			execute() {
				const e = this._stack.pop();
				this.editor.document.enqueueChanges(() => {
					const t = e.batch.deltas[e.batch.deltas.length - 1],
						n = t.baseVersion + t.operations.length,
						o = this.editor.document.history.getDeltas(n);
					this._restoreSelection(e.selection.ranges, e.selection.isBackward, o), this._undo(e.batch)
				}), this.refresh()
			}
		}
		class nf extends Ng {
			constructor(e) {
				super(e), this._batchRegistry = new WeakSet
			}
			init() {
				this._undoCommand = new ef(this.editor), this._redoCommand = new tf(this.editor), this.editor.commands.add('undo', this._undoCommand), this.editor.commands.add('redo', this._redoCommand), this.listenTo(this.editor.document, 'change', (e, t, n, o) => {
					this._batchRegistry.has(o) || 'transparent' == o.type || (this._redoCommand._createdBatches.has(o) ? this._undoCommand.addBatch(o) : !this._undoCommand._createdBatches.has(o) && (this._undoCommand.addBatch(o), this._redoCommand.clearStack()), this._batchRegistry.add(o))
				}, {
					priority: 'highest'
				}), this.listenTo(this._undoCommand, 'revert', (e, t, n) => {
					this._redoCommand.addBatch(n)
				})
			}
		}
		class of extends wg {
			constructor() {
				super();
				const e = this.bindTemplate;
				this.set('content', ''), this.set('viewBox', '0 0 20 20'), this.setTemplate({
					tag: 'svg',
					ns: 'http://www.w3.org/2000/svg',
					attributes: {
						class: 'ck-icon',
						viewBox: e.to('viewBox')
					}
				})
			}
			render() {
				super.render(), this._updateXMLContent(), this.on('change:content', () => this._updateXMLContent())
			}
			_updateXMLContent() {
				if (this.content) {
					const e = new DOMParser().parseFromString(this.content.trim(), 'image/svg+xml').firstChild;
					for (this.element.innerHTML = ''; 0 < e.childNodes.length;) this.element.appendChild(e.childNodes[0])
				}
			}
		}
		class af extends wg {
			constructor(e) {
				super(e), this.set('text', ''), this.set('position', 's');
				const t = this.bindTemplate;
				this.setTemplate({
					tag: 'span',
					attributes: {
						class: ['ck-tooltip', t.to('position', (e) => 'ck-tooltip_' + e), t.if('text', 'ck-hidden', (e) => !e.trim())]
					},
					children: [{
						tag: 'span',
						attributes: {
							class: ['ck-tooltip__text']
						},
						children: [{
							text: t.to('text')
						}]
					}]
				})
			}
		}
		class rf extends wg {
			constructor(e) {
				super(e);
				const t = this.bindTemplate;
				this.set('label'), this.set('keystroke'), this.set('tooltip'), this.set('tooltipPosition', 's'), this.set('type', 'button'), this.set('isOn', !1), this.set('isEnabled', !0), this.set('isVisible', !0), this.set('withText', !1), this.set('icon'), this.set('tabindex', -1), this.children = this.createCollection(), this.tooltipView = this._createTooltipView(), this.labelView = this._createLabelView(), this.bind('_tooltipString').to(this, 'tooltip', this, 'label', this, 'keystroke', this._getTooltipString.bind(this)), this.setTemplate({
					tag: 'button',
					attributes: {
						class: ['ck-button', t.to('isEnabled', (e) => e ? 'ck-enabled' : 'ck-disabled'), t.if('isVisible', 'ck-hidden', (e) => !e), t.to('isOn', (e) => e ? 'ck-on' : 'ck-off'), t.if('withText', 'ck-button_with-text')],
						type: t.to('type', (e) => e ? e : 'button'),
						tabindex: t.to('tabindex')
					},
					children: this.children,
					on: {
						mousedown: t.to((e) => {
							e.preventDefault()
						}),
						click: t.to((e) => {
							this.isEnabled ? this.fire('execute') : e.preventDefault()
						})
					}
				})
			}
			render() {
				if (super.render(), this.icon) {
					const e = this.iconView = new of ;
					e.bind('content').to(this, 'icon'), this.children.add(e)
				}
				this.children.add(this.tooltipView), this.children.add(this.labelView)
			}
			focus() {
				this.element.focus()
			}
			_createTooltipView() {
				const e = new af;
				return e.bind('text').to(this, '_tooltipString'), e.bind('position').to(this, 'tooltipPosition'), e
			}
			_createLabelView() {
				const e = new wg;
				return e.setTemplate({
					tag: 'span',
					attributes: {
						class: ['ck-button__label']
					},
					children: [{
						text: this.bindTemplate.to('label')
					}]
				}), e
			}
			_getTooltipString(e, t, n) {
				return e ? 'string' == typeof e ? e : (n && (n = ne(n)), e instanceof Function ? e(t, n) : `${t}${n?` (${n})`:''}`) : ''
			}
		}
		var sf = n(12),
			lf = n.n(sf),
			df = n(13),
			cf = n.n(df);
		class mf extends Ng {
			static get requires() {
				return [nf]
			}
			static get pluginName() {
				return 'Undo'
			}
			init() {
				const e = this.editor,
					n = e.t;
				this._addButton('undo', n('ac'), 'CTRL+Z', lf.a), this._addButton('redo', n('ad'), 'CTRL+Y', cf.a), e.keystrokes.set('CTRL+Z', 'undo'), e.keystrokes.set('CTRL+Y', 'redo'), e.keystrokes.set('CTRL+SHIFT+Z', 'redo')
			}
			_addButton(e, t, n, o) {
				const i = this.editor,
					a = i.commands.get(e);
				i.ui.componentFactory.add(e, (r) => {
					const s = new rf(r);
					return s.set({
						label: t,
						icon: o,
						keystroke: n,
						tooltip: !0
					}), s.bind('isEnabled').to(a, 'isEnabled'), this.listenTo(s, 'execute', () => i.execute(e)), s
				})
			}
		}
		class uf extends Ng {
			static get requires() {
				return [Lg, qg, Xg, mf]
			}
		}
		class pf {
			constructor() {
				const e = new window.FileReader;
				this._reader = e, this.set('loaded', 0), e.onprogress = (e) => {
					this.loaded = e.loaded
				}
			}
			get error() {
				return this._reader.error
			}
			read(e) {
				const t = this._reader;
				return this.total = e.size, new Promise((n, o) => {
					t.onload = () => {
						n(t.result)
					}, t.onerror = () => {
						o('error')
					}, t.onabort = () => {
						o('aborted')
					}, this._reader.readAsDataURL(e)
				})
			}
			abort() {
				this._reader.abort()
			}
		}
		r(pf, Ws);
		class gf extends Ng {
			static get pluginName() {
				return 'FileRepository'
			}
			init() {
				this.loaders = new pg, this.set('uploaded', 0), this.set('uploadTotal', null), this.bind('uploadedPercent').to(this, 'uploaded', this, 'uploadTotal', (e, t) => t ? 100 * (e / t) : 0)
			}
			getLoader(e) {
				for (const t of this.loaders)
					if (t.file == e) return t;
				return null
			}
			createLoader(e) {
				if (!this.createAdapter) return wr.error('filerepository-no-adapter: Upload adapter is not defined.'), null;
				const t = new ff(e);
				return t._adapter = this.createAdapter(t), this.loaders.add(t), t.on('change:uploaded', () => {
					let e = 0;
					for (const t of this.loaders) e += t.uploaded;
					this.uploaded = e
				}), t.on('change:uploadTotal', () => {
					let e = 0;
					for (const t of this.loaders) t.uploadTotal && (e += t.uploadTotal);
					this.uploadTotal = e
				}), t
			}
			destroyLoader(e) {
				const t = e instanceof ff ? e : this.getLoader(e);
				t._destroy(), this.loaders.remove(t)
			}
		}
		r(gf, Ws);
		class ff {
			constructor(e, t) {
				this.id = s(), this.file = e, this._adapter = t, this._reader = new pf, this.set('status', 'idle'), this.set('uploaded', 0), this.set('uploadTotal', null), this.bind('uploadedPercent').to(this, 'uploaded', this, 'uploadTotal', (e, t) => t ? 100 * (e / t) : 0), this.set('uploadResponse', null)
			}
			read() {
				if ('idle' != this.status) throw new _r('filerepository-read-wrong-status: You cannot call read if the status is different than idle.');
				return this.status = 'reading', this._reader.read(this.file).then((e) => (this.status = 'idle', e)).catch((e) => {
					if ('aborted' === e) throw this.status = 'aborted', 'aborted';
					throw this.status = 'error', this._reader.error
				})
			}
			upload() {
				if ('idle' != this.status) throw new _r('filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.');
				return this.status = 'uploading', this._adapter.upload().then((e) => (this.uploadResponse = e, this.status = 'idle', e)).catch((e) => {
					if ('aborted' === this.status) throw 'aborted';
					throw this.status = 'error', e
				})
			}
			abort() {
				const e = this.status;
				this.status = 'aborted', 'reading' == e && this._reader.abort(), 'uploading' == e && this._adapter.abort && this._adapter.abort(), this._destroy()
			}
			_destroy() {
				this._reader = void 0, this._adapter = void 0, this.data = void 0, this.uploadResponse = void 0, this.file = void 0
			}
		}
		r(ff, Ws);
		const hf = 'ckCsrfToken',
			bf = 40,
			_f = 'abcdefghijklmnopqrstuvwxyz0123456789';
		class kf extends Ng {
			static get requires() {
				return [gf]
			}
			static get pluginName() {
				return 'CKFinderUploadAdapter'
			}
			init() {
				const e = this.editor.config.get('ckfinder.uploadUrl');
				e && (this.editor.plugins.get(gf).createAdapter = (t) => new wf(t, e, this.editor.t))
			}
		}
		class wf {
			constructor(e, n, o) {
				this.loader = e, this.url = n, this.t = o
			}
			upload() {
				return new Promise((e, t) => {
					this._initRequest(), this._initListeners(e, t), this._sendRequest()
				})
			}
			abort() {
				this.xhr && this.xhr.abort()
			}
			_initRequest() {
				const e = this.xhr = new XMLHttpRequest;
				e.open('POST', this.url, !0), e.responseType = 'json'
			}
			_initListeners(e, n) {
				const o = this.xhr,
					i = this.loader,
					a = this.t,
					t = a('a') + ` ${i.file.name}.`;
				o.addEventListener('error', () => n(t)), o.addEventListener('abort', () => n()), o.addEventListener('load', () => {
					const i = o.response;
					return i && i.uploaded ? void e({
						default: i.url
					}) : n(i && i.error && i.error.message ? i.error.message : t)
				}), o.upload && o.upload.addEventListener('progress', (e) => {
					e.lengthComputable && (i.uploadTotal = e.total, i.uploaded = e.loaded)
				})
			}
			_sendRequest() {
				const e = new FormData;
				e.append('upload', this.loader.file), e.append('ckCsrfToken', Ko()), this.xhr.send(e)
			}
		}
		class yf {
			constructor(e, t, n) {
				let o;
				if ('function' == typeof n) o = n;
				else {
					o = (t) => {
						const {
							batch: o
						} = t;
						e.execute(n, {
							batch: o
						})
					}
				}
				e.document.on('change', (n, i, a, r) => {
					if ('transparent' == r.type) return;
					if ('insert' != i) return;
					const s = a.range.getItems().next().value;
					if (!(s instanceof Qs)) return;
					const l = s.textNode,
						d = l.data;
					if ('paragraph' !== l.parent.name || !d) return;
					const c = t.exec(d);
					c && e.document.enqueueChanges(() => {
						const t = e.document.batch(),
							n = el.createFromParentsAndOffsets(l.parent, 0, l.parent, c[0].length);
						t.remove(n), o({
							fixBatch: t,
							match: c
						})
					})
				})
			}
		}
		class vf {
			constructor(e, t, n) {
				let o, i, a, r;
				t instanceof RegExp ? o = t : a = t, 'string' == typeof n ? i = n : r = n, a = a || ((e) => {
					let t;
					const n = [],
						i = [];
					for (; null !== (t = o.exec(e)) && !(t && 4 > t.length);) {
						let {
							index: e,
							1: o,
							2: a,
							3: r
						} = t;
						e += t[0].length - (o + a + r).length;
						const s = [e, e + o.length],
							l = [e + o.length + a.length, e + o.length + a.length + r.length];
						n.push(s), n.push(l), i.push([e + o.length, e + o.length + a.length])
					}
					return {
						remove: n,
						format: i
					}
				}), r = r || ((e, t) => {
					for (const n of t) e.setAttribute(n, i, !0)
				}), e.document.on('change', (t, n, o, s) => {
					if ('transparent' == s.type) return;
					if ('insert' !== n) return;
					const l = e.document.selection;
					if (!l.isCollapsed || !l.focus || !l.focus.parent) return;
					const d = l.focus.parent,
						c = Yo(d).slice(0, l.focus.offset),
						m = a(c),
						u = [];
					m.format.forEach((e) => {
						void 0 === e[0] || void 0 === e[1] || u.push(hp.createFromParentsAndOffsets(d, e[0], d, e[1]))
					});
					const p = [];
					m.remove.slice().reverse().forEach((e) => {
						void 0 === e[0] || void 0 === e[1] || p.push(hp.createFromParentsAndOffsets(d, e[0], d, e[1]))
					});
					u.length && p.length && e.document.enqueueChanges(() => {
						const t = e.document.batch(),
							n = e.document.schema.getValidRanges(u, i);
						r(t, n), u.forEach((e) => e.detach());
						for (const e of p) t.remove(e), e.detach()
					})
				})
			}
		}
		class xf extends Ng {
			static get pluginName() {
				return 'Autoformat'
			}
			afterInit() {
				this._addListAutoformats(), this._addBasicStylesAutoformats(), this._addHeadingAutoformats(), this._addBlockQuoteAutoformats()
			}
			_addListAutoformats() {
				const e = this.editor.commands;
				e.get('bulletedList') && new yf(this.editor, /^[*-]\s$/, 'bulletedList'), e.get('numberedList') && new yf(this.editor, /^\d+[.|)]?\s$/, 'numberedList')
			}
			_addBasicStylesAutoformats() {
				const e = this.editor.commands;
				e.get('bold') && (new vf(this.editor, /(\*\*)([^*]+)(\*\*)$/g, 'bold'), new vf(this.editor, /(__)([^_]+)(__)$/g, 'bold')), e.get('italic') && (new vf(this.editor, /(?:^|[^*])(\*)([^*_]+)(\*)$/g, 'italic'), new vf(this.editor, /(?:^|[^_])(_)([^_]+)(_)$/g, 'italic')), e.get('code') && new vf(this.editor, /(`)([^`]+)(`)$/g, 'code')
			}
			_addHeadingAutoformats() {
				Array.from(this.editor.commands.names()).filter((e) => e.match(/^heading[1-6]$/)).forEach((e) => {
					const t = e[7],
						n = new RegExp(`^(#{${t}})\\s$`);
					new yf(this.editor, n, (t) => {
						const {
							batch: n
						} = t;
						this.editor.execute(e, {
							batch: n
						})
					})
				})
			}
			_addBlockQuoteAutoformats() {
				this.editor.commands.get('blockQuote') && new yf(this.editor, /^>\s$/, 'blockQuote')
			}
		}
		class Af {
			constructor() {
				this._dispatchers = [], this._from = null
			}
			for (...e) {
				return this._dispatchers = e, this
			}
			fromElement(e) {
				return this._from = {
					type: 'element',
					name: e,
					priority: null
				}, this
			}
			fromAttribute(e) {
				return this._from = {
					type: 'attribute',
					key: e,
					priority: null
				}, this
			}
			fromMarker(e) {
				return this._from = {
					type: 'marker',
					name: e,
					priority: null
				}, this
			}
			withPriority(e) {
				return this._from.priority = e, this
			}
			toElement(e) {
				const t = null === this._from.priority ? 'normal' : this._from.priority;
				for (const n of this._dispatchers)
					if ('element' == this._from.type) e = 'string' == typeof e ? new Yd(e) : e, n.on('insert:' + this._from.name, Se(e), {
						priority: t
					});
					else if ('attribute' == this._from.type) e = 'string' == typeof e ? new sc(e) : e, n.on('addAttribute:' + this._from.key, Fe(e), {
					priority: t
				}), n.on('changeAttribute:' + this._from.key, Fe(e), {
					priority: t
				}), n.on('removeAttribute:' + this._from.key, Ie(e), {
					priority: t
				}), n.on('selectionAttribute:' + this._from.key, Un(e), {
					priority: t
				});
				else {
					const t = null === this._from.priority ? 'normal' : this._from.priority;
					e = 'string' == typeof e ? new pc(e) : e, n.on('addMarker:' + this._from.name, Ve(e), {
						priority: t
					}), n.on('removeMarker:' + this._from.name, De(e), {
						priority: t
					})
				}
			}
			toHighlight(e) {
				const t = null === this._from.priority ? 'normal' : this._from.priority;
				if ('marker' != this._from.type) throw new _r('build-model-converter-non-marker-to-highlight: Conversion to a highlight is supported only from model markers.');
				for (const n of this._dispatchers) n.on('addMarker:' + this._from.name, Be(e), {
					priority: t
				}), n.on('addMarker:' + this._from.name, Me(e), {
					priority: t
				}), n.on('removeMarker:' + this._from.name, Be(e), {
					priority: t
				}), n.on('removeMarker:' + this._from.name, Me(e), {
					priority: t
				}), n.on('selectionMarker:' + this._from.name, Kn(e), {
					priority: t
				})
			}
			toAttribute(e, t) {
				if ('attribute' != this._from.type) throw new _r('build-model-converter-non-attribute-to-attribute: To-attribute conversion is supported only from model attributes.');
				let n = e ? 'string' == typeof e ? t ? function() {
					return {
						key: e,
						value: t
					}
				} : function(t) {
					return {
						key: e,
						value: t
					}
				} : e : void 0;
				for (const o of this._dispatchers) {
					const e = {
						priority: this._from.priority || 'normal'
					};
					o.on('addAttribute:' + this._from.key, Oe(n), e), o.on('changeAttribute:' + this._from.key, Oe(n), e), o.on('removeAttribute:' + this._from.key, Re(n), e)
				}
			}
		}
		class Cf {
			constructor() {
				this._dispatchers = [], this._from = []
			}
			for (...e) {
				return this._dispatchers = e, this
			}
			fromElement(e) {
				return this.from({
					name: e
				})
			}
			fromAttribute(e, t = /.*/) {
				const n = {};
				'style' === e || 'class' === e ? n[e] = t : (n.attribute = {}, n.attribute[e] = t);
				const o = new Kd(n);
				return this._from.push({
					matcher: o,
					consume: !1,
					priority: null,
					attributeKey: e
				}), this
			}
			from(e) {
				return e instanceof Kd || (e = new Kd(e)), this._from.push({
					matcher: e,
					consume: !1,
					priority: null
				}), this
			}
			consuming(e) {
				const t = this._from[this._from.length - 1];
				return t.consume = e, this
			}
			withPriority(e) {
				const t = this._from[this._from.length - 1];
				return t.priority = e, this
			}
			toElement(e) {
				this._setCallback(function(t) {
					return (n, o, i, a) => {
						const r = t.matcher.matchAll(o.input);
						if (r)
							for (const n of r) {
								const r = e instanceof Function ? e(o.input) : new Gs(e);
								if (!r) continue;
								const s = Array.from(r.getAttributeKeys());
								if (!a.schema.check({
										name: r.name,
										attributes: s,
										inside: o.context
									})) continue;
								if (!i.consume(o.input, t.consume || n.match)) continue;
								o.context.push(r);
								const l = a.convertChildren(o.input, i, o),
									d = Zs.createAt(r, 'end');
								wc.insert(d, l), o.context.pop(), o.output = r;
								break
							}
					}
				}, 'normal')
			}
			toAttribute(e, t) {
				this._setCallback(function(n) {
					return (o, i, a, r) => {
						const s = n.matcher.matchAll(i.input);
						if (s)
							for (const o of s) {
								if (!a.consume(i.input, n.consume || o.match)) continue;
								i.output || (i.output = r.convertChildren(i.input, a, i));
								let s;
								if (!(e instanceof Function)) s = {
									key: e,
									value: t ? t : i.input.getAttribute(n.attributeKey)
								};
								else if (s = e(i.input), !s) return;
								Zo(i.output, s, i, r);
								break
							}
					}
				}, 'low')
			}
			toMarker(e) {
				this._setCallback(function(t) {
					return (n, o, i) => {
						const a = t.matcher.matchAll(o.input);
						if (!a) return;
						let r;
						if (r = e instanceof Function ? e(o.input) : new Gs('$marker', {
								"data-name": o.input.getAttribute('data-name')
							}), '$marker' != r.name || 'string' != typeof r.getAttribute('data-name')) throw new _r('build-view-converter-invalid-marker: Invalid model element to mark marker range.');
						for (const e of a)
							if (i.consume(o.input, t.consume || e.match)) {
								o.output = r;
								break
							}
					}
				}, 'normal')
			}
			_setCallback(e, t) {
				for (const n of this._from) {
					const o = n.matcher.getElementName(),
						i = o ? 'element:' + o : 'element',
						a = e(n),
						r = null === n.priority ? t : n.priority;
					for (const e of this._dispatchers) e.on(i, a, {
						priority: r
					})
				}
			}
		}
		class Tf extends zg {
			constructor(e, t) {
				super(e), this.attributeKey = t
			}
			refresh() {
				const e = this.editor.document;
				this.value = e.selection.hasAttribute(this.attributeKey), this.isEnabled = e.schema.checkAttributeInSelection(e.selection, this.attributeKey)
			}
			execute(e = {}) {
				const t = this.editor.document,
					n = t.selection,
					o = e.forceValue === void 0 ? !this.value : e.forceValue;
				t.enqueueChanges(() => {
					if (n.isCollapsed) o ? n.setAttribute(this.attributeKey, !0) : n.removeAttribute(this.attributeKey);
					else {
						const i = t.schema.getValidRanges(n.getRanges(), this.attributeKey),
							a = e.batch || t.batch();
						for (const e of i) o ? a.setAttribute(e, this.attributeKey, o) : a.removeAttribute(e, this.attributeKey)
					}
				})
			}
		}
		const Pf = 'bold';
		class Sf extends Ng {
			init() {
				const e = this.editor,
					t = e.data,
					n = e.editing;
				e.document.schema.allow({
					name: '$inline',
					attributes: Pf,
					inside: '$block'
				}), e.document.schema.allow({
					name: '$inline',
					attributes: Pf,
					inside: '$clipboardHolder'
				}), Xo().for(t.modelToView, n.modelToView).fromAttribute(Pf).toElement('strong'), ei().for(t.viewToModel).fromElement('strong').fromElement('b').fromAttribute('style', {
					"font-weight": 'bold'
				}).toAttribute(Pf, !0), e.commands.add(Pf, new Tf(e, Pf))
			}
		}
		var Ef = n(14),
			Vf = n.n(Ef);
		class Of extends Ng {
			static get requires() {
				return [Sf]
			}
			static get pluginName() {
				return 'Bold'
			}
			init() {
				const e = this.editor,
					n = e.t,
					t = e.commands.get('bold'),
					o = 'CTRL+B';
				e.ui.componentFactory.add('bold', (i) => {
					const a = new rf(i);
					return a.set({
						label: n('b'),
						icon: Vf.a,
						keystroke: o,
						tooltip: !0
					}), a.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(a, 'execute', () => e.execute('bold')), a
				}), e.keystrokes.set(o, 'bold')
			}
		}
		const Rf = 'underline';
		class Ff extends Ng {
			init() {
				const e = this.editor,
					t = e.data,
					n = e.editing;
				e.document.schema.allow({
					name: '$inline',
					attributes: Rf,
					inside: '$block'
				}), e.document.schema.allow({
					name: '$inline',
					attributes: Rf,
					inside: '$clipboardHolder'
				}), Xo().for(t.modelToView, n.modelToView).fromAttribute(Rf).toElement('u'), ei().for(t.viewToModel).fromElement('u').fromAttribute('style', {
					"text-decoration": 'underline'
				}).toAttribute(Rf, !0), e.commands.add(Rf, new Tf(e, Rf))
			}
		}
		var If = n(15),
			Nf = n.n(If);
		class Bf extends Ng {
			static get requires() {
				return [Ff]
			}
			static get pluginName() {
				return 'Underline'
			}
			init() {
				const e = this.editor,
					n = e.t,
					t = e.commands.get('underline'),
					o = 'CTRL+U';
				e.ui.componentFactory.add('underline', (i) => {
					const a = new rf(i);
					return a.set({
						label: n('d'),
						icon: Nf.a,
						keystroke: o,
						tooltip: !0
					}), a.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(a, 'execute', () => e.execute('underline')), a
				}), e.keystrokes.set(o, 'underline')
			}
		}
		const Mf = 'italic';
		class Df extends Ng {
			init() {
				const e = this.editor,
					t = e.data,
					n = e.editing;
				e.document.schema.allow({
					name: '$inline',
					attributes: Mf,
					inside: '$block'
				}), e.document.schema.allow({
					name: '$inline',
					attributes: Mf,
					inside: '$clipboardHolder'
				}), Xo().for(t.modelToView, n.modelToView).fromAttribute(Mf).toElement('i'), ei().for(t.viewToModel).fromElement('em').fromElement('i').fromAttribute('style', {
					"font-style": 'italic'
				}).toAttribute(Mf, !0), e.commands.add(Mf, new Tf(e, Mf))
			}
		}
		var Lf = n(16),
			zf = n.n(Lf);
		class jf extends Ng {
			static get requires() {
				return [Df]
			}
			static get pluginName() {
				return 'Italic'
			}
			init() {
				const e = this.editor,
					n = e.t,
					t = e.commands.get('italic'),
					o = 'CTRL+I';
				e.ui.componentFactory.add('italic', (i) => {
					const a = new rf(i);
					return a.set({
						label: n('e'),
						icon: zf.a,
						keystroke: o,
						tooltip: !0
					}), a.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(a, 'execute', () => e.execute('italic')), a
				}), e.keystrokes.set(o, 'italic')
			}
		}
		const $f = 'code';
		class qf extends Ng {
			init() {
				const e = this.editor,
					t = e.data,
					n = e.editing;
				e.document.schema.allow({
					name: '$inline',
					attributes: $f,
					inside: '$block'
				}), e.document.schema.allow({
					name: '$inline',
					attributes: $f,
					inside: '$clipboardHolder'
				}), Xo().for(t.modelToView, n.modelToView).fromAttribute($f).toElement('code'), ei().for(t.viewToModel).fromElement('code').fromAttribute('style', {
					"word-wrap": 'break-word'
				}).toAttribute($f, !0), e.commands.add($f, new Tf(e, $f))
			}
		}
		var Hf = n(17),
			Wf = n.n(Hf),
			Uf = n(18),
			Kf = n.n(Uf);
		class Qf extends Ng {
			static get requires() {
				return [qf]
			}
			static get pluginName() {
				return 'Code'
			}
			init() {
				const e = this.editor,
					n = e.t,
					t = e.commands.get('code');
				e.ui.componentFactory.add('code', (o) => {
					const i = new rf(o);
					return i.set({
						label: n('c'),
						icon: Wf.a,
						tooltip: !0
					}), i.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(i, 'execute', () => e.execute('code')), i
				})
			}
		}
		class Jf extends zg {
			refresh() {
				this.value = this._getValue(), this.isEnabled = this._checkEnabled()
			}
			execute(e = {}) {
				const t = this.editor.document,
					n = t.schema,
					o = e.batch || t.batch(),
					i = Array.from(t.selection.getSelectedBlocks());
				t.enqueueChanges(() => {
					if (this.value) this._removeQuote(o, i.filter(ni));
					else {
						const e = i.filter((e) => ni(e) || ii(n, e));
						this._applyQuote(o, e)
					}
				})
			}
			_getValue() {
				const e = ti(this.editor.document.selection.getSelectedBlocks());
				return !!(e && ni(e))
			}
			_checkEnabled() {
				if (this.value) return !0;
				const e = this.editor.document.selection,
					t = this.editor.document.schema,
					n = ti(e.getSelectedBlocks());
				return !!n && ii(t, n)
			}
			_removeQuote(e, t) {
				oi(t).reverse().forEach((t) => {
					if (t.start.isAtStart && t.end.isAtEnd) return void e.unwrap(t.start.parent);
					if (t.start.isAtStart) {
						const n = Zs.createBefore(t.start.parent);
						return void e.move(t, n)
					}
					t.end.isAtEnd || e.split(t.end);
					const n = Zs.createAfter(t.end.parent);
					e.move(t, n)
				})
			}
			_applyQuote(e, t) {
				const n = [];
				oi(t).reverse().forEach((t) => {
					let o = ni(t.start);
					o || (o = new Gs('blockQuote'), e.wrap(t, o)), n.push(o)
				}), n.reverse().reduce((t, n) => t.nextSibling == n ? (e.merge(Zs.createAfter(t)), t) : n)
			}
		}
		class Gf extends Ng {
			init() {
				const e = this.editor,
					t = e.document.schema;
				e.commands.add('blockQuote', new Jf(e)), t.registerItem('blockQuote'), t.allow({
					name: 'blockQuote',
					inside: '$root'
				}), t.allow({
					name: '$block',
					inside: 'blockQuote'
				}), ei().for(e.data.viewToModel).fromElement('blockquote').toElement('blockQuote'), Xo().for(e.data.modelToView, e.editing.modelToView).fromElement('blockQuote').toElement('blockquote')
			}
			afterInit() {
				const e = this.editor.document.schema;
				e.hasItem('listItem') && e.allow({
					name: 'listItem',
					inside: 'blockQuote',
					attributes: ['type', 'indent']
				})
			}
		}
		var Yf = n(20),
			Xf = n.n(Yf),
			Zf = n(21),
			eh = n.n(Zf);
		class th extends Ng {
			static get requires() {
				return [Gf]
			}
			static get pluginName() {
				return 'BlockQuote'
			}
			init() {
				const e = this.editor,
					n = e.t,
					t = e.commands.get('blockQuote');
				e.ui.componentFactory.add('blockQuote', (o) => {
					const i = new rf(o);
					return i.set({
						label: n('f'),
						icon: Xf.a,
						tooltip: !0
					}), i.bind('isOn', 'isEnabled').to(t, 'value', 'isEnabled'), this.listenTo(i, 'execute', () => e.execute('blockQuote')), i
				})
			}
			afterInit() {
				const e = this.editor,
					t = e.commands.get('blockQuote');
				this.listenTo(this.editor.editing.view, 'enter', (e, n) => {
					const o = this.editor.document,
						i = o.selection.getLastPosition().parent;
					o.selection.isCollapsed && i.isEmpty && t.value && (this.editor.execute('blockQuote'), this.editor.editing.view.scrollToTheSelection(), n.preventDefault(), e.stop())
				})
			}
		}
		const nh = /^data:(\S*?);base64,/;
		class oh {
			constructor(e, t, n) {
				if (!e) throw new Error('File must be provided');
				if (!t) throw new Error('Token must be provided');
				if (!n) throw new Error('Api address must be provided');
				this.file = ri(e) ? ai(e) : e, this._token = t, this._apiAddress = n
			}
			onProgress(e) {
				return this.on('progress', (t, n) => e(n)), this
			}
			onError(e) {
				return this.once('error', (t, n) => e(n)), this
			}
			abort() {
				this.xhr.abort()
			}
			send() {
				return this._prepareRequest(), this._attachXHRListeners(), this._sendRequest()
			}
			_prepareRequest() {
				const e = new XMLHttpRequest;
				e.open('POST', this._apiAddress), e.setRequestHeader('Authorization', this._token.value), e.responseType = 'json', this.xhr = e
			}
			_attachXHRListeners() {
				function e(e) {
					return () => t.fire('error', e)
				}
				const t = this,
					n = this.xhr;
				n.addEventListener('error', e('Network Error')), n.addEventListener('abort', e('Abort')), n.upload && n.upload.addEventListener('progress', (e) => {
					e.lengthComputable && this.fire('progress', {
						total: e.total,
						uploaded: e.loaded
					})
				}), n.addEventListener('load', () => {
					const e = n.status,
						t = n.response;
					if (200 > e || 299 < e) return this.fire('error', t.message || t.error)
				})
			}
			_sendRequest() {
				const e = new FormData,
					t = this.xhr;
				return e.append('file', this.file), new Promise((n, o) => {
					t.addEventListener('load', () => {
						const e = t.status,
							i = t.response;
						return 200 > e || 299 < e ? o(i.message || i.error) : n(i)
					}), t.addEventListener('error', () => o('Network Error')), t.addEventListener('abort', () => o('Abort')), t.send(e)
				})
			}
		}
		r(oh, Or);
		const ih = {
			refreshInterval: 3.6e6,
			autoRefresh: !0
		};
		class ah {
			constructor(e, t = ih) {
				if (!e) throw new Error('`tokenUrl` must be provided');
				this.set('value', t.initValue), this._tokenUrl = e, this._options = Object.assign({}, ih, t)
			}
			init() {
				return new Promise((e, t) => (this._options.autoRefresh && this._startRefreshing(), this.value ? void e(this) : void this._refreshToken().then(e).catch(t)))
			}
			_refreshToken() {
				return new Promise((e, t) => {
					const n = new XMLHttpRequest;
					n.open('GET', this._tokenUrl), n.addEventListener('load', () => {
						const o = n.status,
							i = n.response;
						return 200 > o || 299 < o ? t('Cannot download new token!') : (this.set('value', i), e(this))
					}), n.addEventListener('error', () => t('Network Error')), n.addEventListener('abort', () => t('Abort')), n.send()
				})
			}
			_startRefreshing() {
				this._refreshInterval = setInterval(this._refreshToken.bind(this), this._options.refreshInterval)
			}
			_stopRefreshing() {
				clearInterval(this._refreshInterval)
			}
			static create(e, t = ih) {
				const n = new ah(e, t);
				return n.init()
			}
		}
		r(ah, Ws);
		class rh extends Ng {
			init() {
				const e = this.editor,
					t = e.config,
					n = t.get('cloudServices') || {};
				for (const e in n) this[e] = n[e];
				return (this.uploadUrl || (this.uploadUrl = 'https://files.cke-cs.com/upload/'), !this.tokenUrl) ? void(this.token = null) : (this.token = new rh.Token(this.tokenUrl), this.token.init())
			}
		}
		rh.Token = ah;
		class sh extends Ng {
			static get requires() {
				return [gf, rh]
			}
			init() {
				const e = this.editor,
					t = e.plugins.get(rh),
					n = t.token,
					o = t.uploadUrl;
				n && (this._uploadGateway = new sh._UploadGateway(n, o), e.plugins.get(gf).createAdapter = (e) => new lh(this._uploadGateway, e))
			}
		}
		class lh {
			constructor(e, t) {
				this.uploadGateway = e, this.loader = t
			}
			upload() {
				return this.fileUploader = this.uploadGateway.upload(this.loader.file), this.fileUploader.on('progress', (e, t) => {
					this.loader.uploadTotal = t.total, this.loader.uploaded = t.uploaded
				}), this.fileUploader.send()
			}
			abort() {
				this.fileUploader.abort()
			}
		}
		sh._UploadGateway = class {
			constructor(e, t) {
				if (!e) throw new Error('Token must be provided');
				if (!t) throw new Error('Api address must be provided');
				this._token = e, this._apiAddress = t
			}
			upload(e) {
				return new oh(e, this._token, this._apiAddress)
			}
		};
		const dh = new WeakSet;
		class ch {
			constructor() {
				this._stack = []
			}
			add(e) {
				const t = this._stack,
					n = t[0];
				this._insertDescriptor(e);
				const o = t[0];
				n === o || gi(n, o) || this.fire('change:top', {
					oldDescriptor: n,
					newDescriptor: o
				})
			}
			remove(e) {
				const t = this._stack,
					n = t[0];
				this._removeDescriptor(e);
				const o = t[0];
				n === o || gi(n, o) || this.fire('change:top', {
					oldDescriptor: n,
					newDescriptor: o
				})
			}
			_insertDescriptor(e) {
				const t = this._stack,
					n = t.findIndex((t) => t.id === e.id);
				if (!gi(e, t[n])) {
					-1 < n && t.splice(n, 1);
					let o = 0;
					for (; t[o] && fi(t[o], e);) o++;
					t.splice(o, 0, e)
				}
			}
			_removeDescriptor(e) {
				const t = this._stack,
					n = t.findIndex((t) => t.id === e); - 1 < n && t.splice(n, 1)
			}
		}
		r(ch, Or);
		const mh = Symbol('isWidget'),
			uh = Symbol('label'),
			ph = 'ck-widget',
			gh = 'ck-widget_selected',
			fh = Symbol('isImage');
		class hh extends Ng {
			init() {
				const e = this.editor,
					n = e.document,
					o = n.schema,
					i = e.data,
					a = e.editing,
					r = e.t;
				o.registerItem('image'), o.requireAttributes('image', ['src']), o.allow({
					name: 'image',
					attributes: ['alt', 'src', 'srcset'],
					inside: '$root'
				}), o.objects.add('image'), Xo().for(i.modelToView).fromElement('image').toElement(() => Si()), Xo().for(a.modelToView).fromElement('image').toElement(() => Ai(Si(), r('p'))), li([a.modelToView, i.modelToView], 'src'), li([a.modelToView, i.modelToView], 'alt'), li([a.modelToView, i.modelToView], 'srcset', di), ei().for(i.viewToModel).from({
					name: 'img',
					attribute: {
						src: /./
					}
				}).toElement((e) => new Gs('image', {
					src: e.getAttribute('src')
				})), i.viewToModel.on('element:img', mi, {
					priority: 'low'
				}), i.viewToModel.on('element', pi, {
					priority: 'low'
				}), ei().for(i.viewToModel).from({
					name: 'img',
					attribute: {
						alt: /./
					}
				}).consuming({
					attribute: ['alt']
				}).toAttribute((e) => ({
					key: 'alt',
					value: e.getAttribute('alt')
				})), ei().for(i.viewToModel).from({
					name: 'img',
					attribute: {
						srcset: /./
					}
				}).consuming({
					attribute: ['srcset']
				}).toAttribute((e) => {
					const t = {
						data: e.getAttribute('srcset')
					};
					return e.hasAttribute('width') && (t.width = e.getAttribute('width')), {
						key: 'srcset',
						value: t
					}
				}), i.viewToModel.on('element:figure', si())
			}
		}
		class bh extends Xp {
			constructor(e) {
				super(e), this.domEventType = 'mousedown'
			}
			onDomEvent(e) {
				this.fire(e.type, e)
			}
		}
		var _h = n(23),
			kh = n.n(_h);
		const wh = te('Ctrl+A');
		class yh extends Ng {
			static get pluginName() {
				return 'Widget'
			}
			init() {
				const e = this.editor.editing.view;
				this._previouslySelected = new Set, this.editor.editing.modelToView.on('selection', (e, t, n, o) => {
					this._clearPreviouslySelectedWidgets();
					const i = o.viewSelection,
						a = i.getSelectedElement();
					for (const r of i.getRanges())
						for (const e of r) {
							const t = e.item;
							t.is('element') && bi(t) && (t.addClass(gh), this._previouslySelected.add(t), t == a && i.setFake(!0, {
								label: yi(a)
							}))
						}
				}, {
					priority: 'low'
				}), e.addObserver(bh), this.listenTo(e, 'mousedown', (...e) => this._onMousedown(...e)), this.listenTo(e, 'keydown', (...e) => this._onKeydown(...e), {
					priority: 'high'
				})
			}
			_onMousedown(e, t) {
				const n = this.editor,
					o = n.editing.view;
				let i = t.target;
				if (Ri(i)) return;
				if (!bi(i) && (i = i.findAncestor(bi), !i)) return;
				t.preventDefault(), o.isFocused || o.focus();
				const a = n.editing.mapper.toModelElement(i);
				n.document.enqueueChanges(() => {
					this._setSelectionOverElement(a)
				})
			}
			_onKeydown(e, t) {
				const n = t.keyCode,
					o = n == uc.delete || n == uc.arrowdown || n == uc.arrowright;
				let i = !1;
				Vi(n) ? i = this._handleDelete(o) : Ei(n) ? i = this._handleArrowKeys(o) : Oi(t) && (i = this._selectAllNestedEditableContent() || this._selectAllContent()), i && (t.preventDefault(), e.stop())
			}
			_handleDelete(e) {
				if (this.editor.isReadOnly) return;
				const t = this.editor.document,
					n = t.selection;
				if (!n.isCollapsed) return;
				const o = this._getObjectElementNextToSelection(e);
				if (o) return t.enqueueChanges(() => {
					const e = t.batch();
					for (let t = n.anchor.parent; t.isEmpty;) {
						const n = t;
						t = n.parent, e.remove(n)
					}
					this._setSelectionOverElement(o)
				}), !0
			}
			_handleArrowKeys(e) {
				const t = this.editor.document,
					n = t.schema,
					o = t.selection,
					i = o.getSelectedElement();
				if (i && n.objects.has(i.name)) {
					const n = e ? o.getLastPosition() : o.getFirstPosition(),
						i = t.getNearestSelectionRange(n, e ? 'forward' : 'backward');
					return i && t.enqueueChanges(() => {
						o.setRanges([i])
					}), !0
				}
				if (!o.isCollapsed) return;
				const a = this._getObjectElementNextToSelection(e);
				if (a instanceof Gs && t.schema.objects.has(a.name)) return t.enqueueChanges(() => {
					this._setSelectionOverElement(a)
				}), !0
			}
			_selectAllNestedEditableContent() {
				const e = this.editor.document,
					t = e.selection,
					n = e.schema,
					o = n.getLimitElement(t);
				return t.getFirstRange().root != o && (e.enqueueChanges(() => {
					t.setIn(o)
				}), !0)
			}
			_selectAllContent() {
				const e = this.editor.document,
					t = e.selection,
					n = this.editor.editing,
					o = n.view,
					i = o.selection,
					a = i.getSelectedElement();
				if (a && bi(a)) {
					const o = n.mapper.toModelElement(a.parent);
					return e.enqueueChanges(() => {
						t.setRanges([el.createIn(o)])
					}), !0
				}
				return !1
			}
			_setSelectionOverElement(e) {
				this.editor.document.selection.setRanges([el.createOn(e)])
			}
			_getObjectElementNextToSelection(e) {
				const t = this.editor.document,
					n = t.schema,
					o = t.selection,
					i = this.editor.data,
					a = bp.createFromSelection(o);
				i.modifySelection(a, {
					direction: e ? 'forward' : 'backward'
				});
				const r = e ? a.focus.nodeBefore : a.focus.nodeAfter;
				return r instanceof Gs && n.objects.has(r.name) ? r : null
			}
			_clearPreviouslySelectedWidgets() {
				for (const e of this._previouslySelected) e.removeClass(gh);
				this._previouslySelected.clear()
			}
		}
		class vh extends zg {
			refresh() {
				const e = this.editor.document.selection.getSelectedElement();
				this.isEnabled = Pi(e), this.value = Pi(e) && e.hasAttribute('alt') && e.getAttribute('alt')
			}
			execute(e) {
				const t = this.editor.document,
					n = t.selection.getSelectedElement();
				t.enqueueChanges(() => {
					const o = e.batch || t.batch();
					o.setAttribute(n, 'alt', e.newValue)
				})
			}
		}
		class xh extends Ng {
			init() {
				this.editor.commands.add('imageTextAlternative', new vh(this.editor))
			}
		}
		class Ah extends wg {
			constructor(e) {
				super(e), this.set('text'), this.set('for');
				const t = this.bindTemplate;
				this.setTemplate({
					tag: 'label',
					attributes: {
						class: ['ck-label'],
						for: t.to('for')
					},
					children: [{
						text: t.to('text')
					}]
				})
			}
		}
		class Ch extends wg {
			constructor(e, t) {
				super(e);
				const n = `ck-input-${s()}`;
				this.set('label'), this.set('value'), this.set('isReadOnly', !1), this.labelView = this._createLabelView(n), this.inputView = this._createInputView(t, n);
				const o = this.bindTemplate;
				this.setTemplate({
					tag: 'div',
					attributes: {
						class: [o.if('isReadOnly', 'ck-disabled')]
					},
					children: [this.labelView, this.inputView]
				})
			}
			_createLabelView(e) {
				const t = new Ah(this.locale);
				return t.for = e, t.bind('text').to(this, 'label'), t
			}
			_createInputView(e, t) {
				const n = new e(this.locale);
				return n.id = t, n.bind('value').to(this), n.bind('isReadOnly').to(this), n
			}
			select() {
				this.inputView.select()
			}
			focus() {
				this.inputView.focus()
			}
		}
		class Th extends wg {
			constructor(e) {
				super(e), this.set('value'), this.set('id'), this.set('placeholder'), this.set('isReadOnly', !1);
				const t = this.bindTemplate;
				this.setTemplate({
					tag: 'input',
					attributes: {
						type: 'text',
						class: ['ck-input', 'ck-input-text'],
						id: t.to('id'),
						placeholder: t.to('placeholder'),
						readonly: t.to('isReadOnly'),
						value: t.to('value')
					}
				})
			}
			select() {
				this.element.select()
			}
			focus() {
				this.element.focus()
			}
		}
		class Ph extends wg {
			constructor(e) {
				super(e);
				const n = this.locale.t;
				this.focusTracker = new mg, this.keystrokes = new Op, this.labeledInput = this._createLabeledInputView(), this.saveButtonView = this._createButton(n('y')), this.saveButtonView.type = 'submit', this.cancelButtonView = this._createButton(n('z'), 'cancel'), this._focusables = new gg, this._focusCycler = new Pg({
					focusables: this._focusables,
					focusTracker: this.focusTracker,
					keystrokeHandler: this.keystrokes,
					actions: {
						focusPrevious: 'shift + tab',
						focusNext: 'tab'
					}
				}), this.saveButtonView.extendTemplate({
					attributes: {
						class: ['ck-button-action']
					}
				}), this.setTemplate({
					tag: 'form',
					attributes: {
						class: ['cke-text-alternative-form'],
						tabindex: '-1'
					},
					children: [this.labeledInput, {
						tag: 'div',
						attributes: {
							class: ['cke-text-alternative-form__actions']
						},
						children: [this.saveButtonView, this.cancelButtonView]
					}]
				})
			}
			render() {
				super.render(), this.keystrokes.listenTo(this.element), Ii({
					view: this
				}), [this.labeledInput, this.saveButtonView, this.cancelButtonView].forEach((e) => {
					this._focusables.add(e), this.focusTracker.add(e.element)
				})
			}
			_createButton(e, t) {
				const n = new rf(this.locale);
				return n.label = e, n.withText = !0, t && n.delegate('execute').to(this, t), n
			}
			_createLabeledInputView() {
				const e = this.locale.t,
					t = new Ch(this.locale, Th);
				return t.label = e('ah'), t
			}
		}
		const Sh = Po('px'),
			Eh = zp.document.body;
		class Vh extends wg {
			constructor(e) {
				super(e);
				const t = this.bindTemplate;
				this.set('top', 0), this.set('left', 0), this.set('position', 'arrow_nw'), this.set('isVisible', !1), this.set('withArrow', !0), this.set('className'), this.content = this.createCollection(), this.setTemplate({
					tag: 'div',
					attributes: {
						class: ['ck-balloon-panel', t.to('position', (e) => `ck-balloon-panel_${e}`), t.if('isVisible', 'ck-balloon-panel_visible'), t.if('withArrow', 'ck-balloon-panel_with-arrow'), t.to('className')],
						style: {
							top: t.to('top', Sh),
							left: t.to('left', Sh)
						}
					},
					children: this.content
				})
			}
			show() {
				this.isVisible = !0
			}
			hide() {
				this.isVisible = !1
			}
			attachTo(e) {
				this.show();
				const t = Vh.defaultPositions,
					n = Object.assign({}, {
						element: this.element,
						positions: [t.southArrowNorthWest, t.southArrowNorthEast, t.northArrowSouthWest, t.northArrowSouthEast],
						limiter: Eh,
						fitInViewport: !0
					}, e),
					{
						top: o,
						left: i,
						name: a
					} = Bi(n);
				Object.assign(this, {
					top: o,
					left: i,
					position: a
				})
			}
			pin(e) {
				this.unpin(), this._pinWhenIsVisibleCallback = () => {
					this.isVisible ? this._startPinning(e) : this._stopPinning()
				}, this._startPinning(e), this.listenTo(this, 'change:isVisible', this._pinWhenIsVisibleCallback)
			}
			unpin() {
				this._pinWhenIsVisibleCallback && (this._stopPinning(), this.stopListening(this, 'change:isVisible', this._pinWhenIsVisibleCallback), this._pinWhenIsVisibleCallback = null, this.hide())
			}
			_startPinning(e) {
				this.attachTo(e);
				const t = zi(e.target),
					n = e.limiter ? zi(e.limiter) : Eh;
				this.listenTo(zp.document, 'scroll', (o, i) => {
					const a = i.target,
						r = t && a.contains(t),
						s = n && a.contains(n);
					(r || s || !t || !n) && this.attachTo(e)
				}, {
					useCapture: !0
				}), this.listenTo(zp.window, 'resize', () => {
					this.attachTo(e)
				})
			}
			_stopPinning() {
				this.stopListening(zp.document, 'scroll'), this.stopListening(zp.window, 'resize')
			}
		}
		Vh.arrowHorizontalOffset = 30, Vh.arrowVerticalOffset = 15, Vh.defaultPositions = {
			northArrowSouth: (e, t) => ({
				top: ji(e, t),
				left: e.left + e.width / 2 - t.width / 2,
				name: 'arrow_s'
			}),
			northArrowSouthEast: (e, t) => ({
				top: ji(e, t),
				left: e.left + e.width / 2 - t.width + Vh.arrowHorizontalOffset,
				name: 'arrow_se'
			}),
			northArrowSouthWest: (e, t) => ({
				top: ji(e, t),
				left: e.left + e.width / 2 - Vh.arrowHorizontalOffset,
				name: 'arrow_sw'
			}),
			northWestArrowSouth: (e, t) => ({
				top: ji(e, t),
				left: e.left - t.width / 2,
				name: 'arrow_s'
			}),
			northWestArrowSouthWest: (e, t) => ({
				top: ji(e, t),
				left: e.left - Vh.arrowHorizontalOffset,
				name: 'arrow_sw'
			}),
			northWestArrowSouthEast: (e, t) => ({
				top: ji(e, t),
				left: e.left - t.width + Vh.arrowHorizontalOffset,
				name: 'arrow_se'
			}),
			northEastArrowSouth: (e, t) => ({
				top: ji(e, t),
				left: e.right - t.width / 2,
				name: 'arrow_s'
			}),
			northEastArrowSouthEast: (e, t) => ({
				top: ji(e, t),
				left: e.right - t.width + Vh.arrowHorizontalOffset,
				name: 'arrow_se'
			}),
			northEastArrowSouthWest: (e, t) => ({
				top: ji(e, t),
				left: e.right - Vh.arrowHorizontalOffset,
				name: 'arrow_sw'
			}),
			southArrowNorth: (e, t) => ({
				top: $i(e, t),
				left: e.left + e.width / 2 - t.width / 2,
				name: 'arrow_n'
			}),
			southArrowNorthEast: (e, t) => ({
				top: $i(e, t),
				left: e.left + e.width / 2 - t.width + Vh.arrowHorizontalOffset,
				name: 'arrow_ne'
			}),
			southArrowNorthWest: (e, t) => ({
				top: $i(e, t),
				left: e.left + e.width / 2 - Vh.arrowHorizontalOffset,
				name: 'arrow_nw'
			}),
			southWestArrowNorth: (e, t) => ({
				top: $i(e, t),
				left: e.left - t.width / 2,
				name: 'arrow_n'
			}),
			southWestArrowNorthWest: (e, t) => ({
				top: $i(e, t),
				left: e.left - Vh.arrowHorizontalOffset,
				name: 'arrow_nw'
			}),
			southWestArrowNorthEast: (e, t) => ({
				top: $i(e, t),
				left: e.left - t.width + Vh.arrowHorizontalOffset,
				name: 'arrow_ne'
			}),
			southEastArrowNorth: (e, t) => ({
				top: $i(e, t),
				left: e.right - t.width / 2,
				name: 'arrow_n'
			}),
			southEastArrowNorthEast: (e, t) => ({
				top: $i(e, t),
				left: e.right - t.width + Vh.arrowHorizontalOffset,
				name: 'arrow_ne'
			}),
			southEastArrowNorthWest: (e, t) => ({
				top: $i(e, t),
				left: e.right - Vh.arrowHorizontalOffset,
				name: 'arrow_nw'
			})
		};
		class Oh extends Ng {
			static get pluginName() {
				return 'ContextualBalloon'
			}
			init() {
				this.view = new Vh, this.positionLimiter = () => {
					const e = this.editor.editing.view,
						t = e.selection.editableElement;
					return t ? e.domConverter.mapViewToDom(t.root) : null
				}, this._stack = new Map, this.editor.ui.view.body.add(this.view), this.editor.ui.focusTracker.add(this.view.element)
			}
			get visibleView() {
				const e = this._stack.get(this.view.content.get(0));
				return e ? e.view : null
			}
			hasView(e) {
				return this._stack.has(e)
			}
			add(e) {
				if (this.hasView(e.view)) throw new _r('contextualballoon-add-view-exist: Cannot add configuration of the same view twice.');
				this.visibleView && this.view.content.remove(this.visibleView), this._stack.set(e.view, e), this._show(e)
			}
			remove(e) {
				if (!this.hasView(e)) throw new _r('contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.');
				if (this.visibleView === e) {
					this.view.content.remove(e), this._stack.delete(e);
					const t = Array.from(this._stack.values()).pop();
					t ? this._show(t) : this.view.hide()
				} else this._stack.delete(e)
			}
			updatePosition(e) {
				e && (this._stack.get(this.visibleView).position = e), this.view.pin(this._getBalloonPosition())
			}
			_show({
				view: e,
				balloonClassName: t = ''
			}) {
				this.view.className = t, this.view.content.add(e), this.view.pin(this._getBalloonPosition())
			}
			_getBalloonPosition() {
				let e = ti(this._stack.values()).position;
				return e && !e.limiter && (e = Object.assign({}, e, {
					limiter: this.positionLimiter
				})), e
			}
		}
		var Rh = n(25),
			Fh = n.n(Rh),
			Ih = n(26),
			Nh = n.n(Ih);
		class Bh extends Ng {
			static get requires() {
				return [xh, Oh]
			}
			static get pluginName() {
				return 'ImageTextAlternative'
			}
			init() {
				this._createButton(), this._createForm()
			}
			_createButton() {
				const e = this.editor,
					n = e.commands.get('imageTextAlternative'),
					o = e.t;
				e.ui.componentFactory.add('imageTextAlternative', (e) => {
					const t = new rf(e);
					return t.set({
						label: o('q'),
						icon: Fh.a,
						tooltip: !0
					}), t.bind('isEnabled').to(n, 'isEnabled'), this.listenTo(t, 'execute', () => this._showForm()), t
				})
			}
			_createForm() {
				const e = this.editor,
					t = e.editing.view;
				this._balloon = this.editor.plugins.get('ContextualBalloon'), this._form = new Ph(e.locale), this._form.render(), this.listenTo(this._form, 'submit', () => {
					e.execute('imageTextAlternative', {
						newValue: this._form.labeledInput.inputView.element.value
					}), this._hideForm(!0)
				}), this.listenTo(this._form, 'cancel', () => {
					this._hideForm(!0)
				}), this._form.keystrokes.set('Esc', (e, t) => {
					this._hideForm(!0), t()
				}), this.listenTo(t, 'render', () => {
					Ti(t.selection) ? this._isVisible && qi(e) : this._hideForm(!0)
				}, {
					priority: 'low'
				}), Fi({
					emitter: this._form,
					activator: () => this._isVisible,
					contextElements: [this._form.element],
					callback: () => this._hideForm()
				})
			}
			_showForm() {
				if (!this._isVisible) {
					const e = this.editor,
						t = e.commands.get('imageTextAlternative'),
						n = this._form.labeledInput;
					this._balloon.hasView(this._form) || this._balloon.add({
						view: this._form,
						position: Hi(e)
					}), n.value = n.inputView.element.value = t.value || '', this._form.labeledInput.select()
				}
			}
			_hideForm(e) {
				this._isVisible && (this._balloon.remove(this._form), e && this.editor.editing.view.focus())
			}
			get _isVisible() {
				return this._balloon.visibleView == this._form
			}
		}
		var Mh = n(28),
			Dh = n.n(Mh);
		class Lh extends Ng {
			static get requires() {
				return [hh, yh, Bh]
			}
			static get pluginName() {
				return 'Image'
			}
			init() {
				const e = this.editor,
					t = e.plugins.get('ContextualToolbar');
				t && this.listenTo(t, 'show', (t) => {
					Ti(e.editing.view.selection) && t.stop()
				}, {
					priority: 'high'
				})
			}
		}
		class zh extends zg {
			execute(e) {
				const t = this.editor,
					n = t.document,
					o = e.batch || n.batch(),
					i = e.file,
					a = n.selection,
					r = t.plugins.get(gf);
				n.enqueueChanges(() => {
					const s = r.createLoader(i);
					if (!s) return;
					const l = new Gs('image', {
						uploadId: s.id
					});
					let d;
					d = e.insertAt ? new bp([new el(e.insertAt)]) : n.selection, t.data.insertContent(l, d, o), l.parent && a.setRanges([el.createOn(l)])
				})
			}
		}
		class jh extends Ng {
			static get pluginName() {
				return 'Notification'
			}
			init() {
				this.on('show:warning', (e, t) => {
					window.alert(t.message)
				}, {
					priority: 'lowest'
				})
			}
			showSuccess(e, t = {}) {
				this._showNotification({
					message: e,
					type: 'success',
					namespace: t.namespace,
					title: t.title
				})
			}
			showInfo(e, t = {}) {
				this._showNotification({
					message: e,
					type: 'info',
					namespace: t.namespace,
					title: t.title
				})
			}
			showWarning(e, t = {}) {
				this._showNotification({
					message: e,
					type: 'warning',
					namespace: t.namespace,
					title: t.title
				})
			}
			_showNotification(e) {
				const t = `show:${e.type}` + (e.namespace ? `:${e.namespace}` : '');
				this.fire(t, {
					message: e.message,
					type: e.type,
					title: e.title || ''
				})
			}
		}
		class $h extends Ng {
			static get requires() {
				return [gf, jh]
			}
			init() {
				const e = this.editor,
					t = e.document,
					n = t.schema,
					o = e.plugins.get(gf);
				n.allow({
					name: 'image',
					attributes: ['uploadId'],
					inside: '$root'
				}), n.allow({
					name: 'image',
					attributes: ['uploadStatus'],
					inside: '$root'
				}), n.requireAttributes('image', ['uploadId']), e.commands.add('imageUpload', new zh(e)), e.editing.view.on('clipboardInput', (n, o) => {
					if (Ki(o.dataTransfer)) return;
					let i = new bp(o.targetRanges.map((t) => e.editing.mapper.toModelRange(t)));
					for (const a of o.dataTransfer.files) {
						const o = Ui(i);
						Wi(a) && (e.execute('imageUpload', {
							file: a,
							insertAt: o
						}), n.stop()), i = t.selection
					}
				}), e.editing.view.on('dragover', (e, t) => {
					t.preventDefault()
				}), t.on('change', (e, t, n) => {
					if ('insert' === t || 'reinsert' === t || 'remove' === t)
						for (const e of n.range)
							if ('elementStart' === e.type && 'image' === e.item.name) {
								const n = e.item,
									i = n.getAttribute('uploadId');
								if (i) {
									const e = o.loaders.get(i);
									e && ('insert' === t && 'idle' == e.status && this.load(e, n), 'remove' === t && e.abort())
								}
							}
				})
			}
			load(e, n) {
				function o() {
					t.enqueueChanges(() => {
						t.batch('transparent').removeAttribute(n, 'uploadId'), t.batch('transparent').removeAttribute(n, 'uploadStatus')
					}), r.destroyLoader(e)
				}
				const i = this.editor,
					a = i.locale.t,
					t = i.document,
					r = i.plugins.get(gf),
					s = i.plugins.get(jh);
				t.enqueueChanges(() => {
					t.batch('transparent').setAttribute(n, 'uploadStatus', 'reading')
				}), e.read().then((o) => {
					const a = i.editing.mapper.toViewElement(n),
						r = a.getChild(0),
						s = e.upload();
					return r.setAttribute('src', o), i.editing.view.render(), t.enqueueChanges(() => {
						t.batch('transparent').setAttribute(n, 'uploadStatus', 'uploading')
					}), s
				}).then((e) => {
					t.enqueueChanges(() => {
						t.batch('transparent').setAttribute(n, 'uploadStatus', 'complete'), t.batch('transparent').setAttribute(n, 'src', e.default);
						let o = 0;
						const i = Object.keys(e).filter((e) => {
							const t = parseInt(e, 10);
							if (!isNaN(t)) return o = ir(o, t), !0
						}).map((t) => `${e[t]} ${t}w`).join(', ');
						'' != i && t.batch('transparent').setAttribute(n, 'srcset', {
							data: i,
							width: o
						})
					}), o()
				}).catch((i) => {
					'error' == e.status && s.showWarning(i, {
						title: a('ae'),
						namespace: 'upload'
					}), o(), t.enqueueChanges(() => {
						t.batch('transparent').remove(n)
					})
				})
			}
		}
		class qh extends wg {
			constructor(e) {
				super(e), this.buttonView = new rf(e), this._fileInputView = new Hh(e), this._fileInputView.bind('acceptedType').to(this), this._fileInputView.bind('allowMultipleFiles').to(this), this._fileInputView.delegate('done').to(this), this.setTemplate({
					tag: 'span',
					attributes: {
						class: 'ck-file-dialog-button'
					},
					children: [this.buttonView, this._fileInputView]
				}), this.buttonView.on('execute', () => {
					this._fileInputView.open()
				})
			}
			focus() {
				this.buttonView.focus()
			}
		}
		class Hh extends wg {
			constructor(e) {
				super(e), this.set('acceptedType'), this.set('allowMultipleFiles', !1);
				const t = this.bindTemplate;
				this.setTemplate({
					tag: 'input',
					attributes: {
						class: ['ck-hidden'],
						type: 'file',
						tabindex: '-1',
						accept: t.to('acceptedType'),
						multiple: t.to('allowMultipleFiles')
					},
					on: {
						change: t.to(() => {
							this.element && this.element.files && this.element.files.length && this.fire('done', this.element.files), this.element.value = ''
						})
					}
				})
			}
			open() {
				this.element.click()
			}
		}
		var Wh = n(30),
			Uh = n.n(Wh);
		class Kh extends Ng {
			static get requires() {
				return [$h]
			}
			init() {
				const e = this.editor,
					n = e.t;
				e.ui.componentFactory.add('insertImage', (t) => {
					const o = new qh(t),
						i = e.commands.get('imageUpload');
					return o.set({
						acceptedType: 'image/*',
						allowMultipleFiles: !0
					}), o.buttonView.set({
						label: n('x'),
						icon: Uh.a,
						tooltip: !0
					}), o.bind('isEnabled').to(i), o.on('done', (t, n) => {
						for (const o of Array.from(n)) {
							const t = Ui(e.document.selection);
							Wi(o) && e.execute('imageUpload', {
								file: o,
								insertAt: t
							})
						}
					}), o
				})
			}
		}
		var Qh = n(31),
			Jh = n.n(Qh),
			Gh = n(32),
			Yh = n.n(Gh);
		class Xh extends Ng {
			static get requires() {
				return [$h]
			}
			constructor(e) {
				super(e), this.placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(Jh.a)
			}
			init() {
				const e = this.editor;
				e.editing.modelToView.on('addAttribute:uploadStatus:image', (...e) => this.uploadStatusChange(...e)), e.editing.modelToView.on('changeAttribute:uploadStatus:image', (...e) => this.uploadStatusChange(...e))
			}
			uploadStatusChange(e, t, n) {
				const o = this.editor,
					i = t.item,
					a = i.getAttribute('uploadId');
				if (n.consume(t.item, Le(e.name)) && a) {
					const e = o.plugins.get(gf),
						n = this.placeholder,
						r = t.attributeNewValue,
						s = o.editing.mapper.toViewElement(i);
					if ('reading' == r) {
						s.addClass('ck-appear', 'ck-infinite-progress', 'ck-image-upload-placeholder');
						const e = s.getChild(0);
						return void e.setAttribute('src', n)
					}
					if ('uploading' == r) {
						const t = e.loaders.get(a);
						if (t) {
							const e = Qi();
							s.removeClass('ck-infinite-progress', 'ck-image-upload-placeholder'), s.appendChildren(e), t.on('change:uploadedPercent', (t, n, i) => {
								e.setStyle('width', i + '%'), o.editing.view.render()
							})
						}
						return
					}
					const l = Ji(s);
					l ? l.remove() : s.removeClass('ck-infinite-progress'), s.removeClass('ck-appear', 'ck-image-upload-placeholder')
				}
			}
		}
		const Zh = Symbol('progress-bar');
		class eb extends Ng {
			static get pluginName() {
				return 'ImageUpload'
			}
			static get requires() {
				return [Kh, Xh]
			}
		}
		class tb extends Ng {
			static get requires() {
				return [sh, Lh, eb]
			}
			static get pluginName() {
				return 'EasyImage'
			}
		}
		class nb extends zg {
			refresh() {
				const e = this.editor.document,
					t = ti(e.selection.getSelectedBlocks());
				this.value = !!t && t.is('paragraph'), this.isEnabled = !!t && Gi(t, e.schema)
			}
			execute(e = {}) {
				const t = this.editor.document;
				t.enqueueChanges(() => {
					const n = e.batch || t.batch(),
						o = (e.selection || t.selection).getSelectedBlocks();
					for (const e of o) !e.is('paragraph') && Gi(e, t.schema) && n.rename(e, 'paragraph')
				})
			}
		}
		class ob extends Ng {
			static get pluginName() {
				return 'Paragraph'
			}
			init() {
				const e = this.editor,
					t = e.document,
					n = e.data,
					o = e.editing;
				e.commands.add('paragraph', new nb(e)), t.schema.registerItem('paragraph', '$block'), Xo().for(n.modelToView, o.modelToView).fromElement('paragraph').toElement('p'), ei().for(n.viewToModel).fromElement('p').toElement('paragraph'), n.viewToModel.on('element', Yi, {
					priority: 'low'
				}), n.viewToModel.on('text', Yi, {
					priority: 'lowest'
				}), n.viewToModel.on('element', Xi, {
					priority: 'lowest'
				}), n.viewToModel.on('documentFragment', Xi, {
					priority: 'lowest'
				}), t.on('change', (e, n, o, i) => {
					'transparent' == i.type || ea(t, i)
				}), t.on('changesDone', ta, {
					priority: 'lowest'
				}), e.on('dataReady', () => {
					ea(t, t.batch('transparent')), ta()
				}, {
					priority: 'lowest'
				})
			}
		}
		ob.paragraphLikeElements = new Set(['blockquote', 'dd', 'div', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'p', 'td']);
		const ib = new Map;
		class ab extends zg {
			constructor(e, t) {
				super(e), this.modelElement = t
			}
			refresh() {
				const e = ti(this.editor.document.selection.getSelectedBlocks());
				this.value = !!e && e.is(this.modelElement), this.isEnabled = !!e && na(e, this.modelElement, this.editor.document.schema)
			}
			execute(e = {}) {
				const t = this.editor,
					n = t.document;
				n.enqueueChanges(() => {
					const t = e.batch || n.batch(),
						o = Array.from(n.selection.getSelectedBlocks()).filter((e) => na(e, this.modelElement, n.schema));
					for (const e of o) e.is(this.modelElement) || t.rename(e, this.modelElement)
				})
			}
		}
		const rb = 'paragraph';
		class sb extends Ng {
			constructor(e) {
				super(e), e.config.define('heading', {
					options: [{
						modelElement: 'paragraph',
						title: 'Paragraph',
						class: 'ck-heading_paragraph'
					}, {
						modelElement: 'heading1',
						viewElement: 'h2',
						title: 'Heading 1',
						class: 'ck-heading_heading1'
					}, {
						modelElement: 'heading2',
						viewElement: 'h3',
						title: 'Heading 2',
						class: 'ck-heading_heading2'
					}, {
						modelElement: 'heading3',
						viewElement: 'h4',
						title: 'Heading 3',
						class: 'ck-heading_heading3'
					}]
				})
			}
			static get requires() {
				return [ob]
			}
			init() {
				const e = this.editor,
					t = e.data,
					n = e.editing,
					o = e.config.get('heading.options');
				for (const i of o) i.modelElement !== rb && (e.document.schema.registerItem(i.modelElement, '$block'), Xo().for(t.modelToView, n.modelToView).fromElement(i.modelElement).toElement(i.viewElement), ei().for(t.viewToModel).fromElement(i.viewElement).toElement(i.modelElement), e.commands.add(i.modelElement, new ab(e, i.modelElement)))
			}
			afterInit() {
				const e = this.editor,
					t = e.commands.get('enter'),
					n = e.config.get('heading.options');
				t && this.listenTo(t, 'afterExecute', (t, o) => {
					const i = e.document.selection.getFirstPosition().parent,
						a = o.batch,
						r = n.some((e) => i.is(e.modelElement));
					r && !i.is(rb) && 0 === i.childCount && a.rename(i, rb)
				})
			}
		}
		class lb {
			constructor(e, t) {
				t && zs(this, t), e && this.set(e)
			}
		}
		r(lb, Ws);
		class db extends wg {
			constructor() {
				super(), this.items = this.createCollection(), this.focusTracker = new mg, this.keystrokes = new Op, this._focusCycler = new Pg({
					focusables: this.items,
					focusTracker: this.focusTracker,
					keystrokeHandler: this.keystrokes,
					actions: {
						focusPrevious: 'arrowup',
						focusNext: 'arrowdown'
					}
				}), this.setTemplate({
					tag: 'ul',
					attributes: {
						class: ['ck-reset', 'ck-list']
					},
					children: this.items
				})
			}
			render() {
				super.render();
				for (const e of this.items) this.focusTracker.add(e.element);
				this.items.on('add', (e, t) => {
					this.focusTracker.add(t.element)
				}), this.items.on('remove', (e, t) => {
					this.focusTracker.remove(t.element)
				}), this.keystrokes.listenTo(this.element)
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			focusLast() {
				this._focusCycler.focusLast()
			}
		}
		class cb extends wg {
			constructor() {
				super(), this.set('tabindex', -1), this.keystrokes = new Op;
				const e = this.bindTemplate;
				this.setTemplate({
					tag: 'li',
					attributes: {
						class: ['ck-list__item', e.to('class'), e.if('isActive', 'ck-list__item_active')],
						style: e.to('style'),
						tabindex: e.to('tabindex')
					},
					children: [{
						text: e.to('label')
					}],
					on: {
						click: e.to('execute')
					}
				})
			}
			render() {
				super.render();
				const e = (e, t) => {
					this.fire('execute'), t()
				};
				this.keystrokes.listenTo(this.element), this.keystrokes.set('Enter', e), this.keystrokes.set('Space', e)
			}
			focus() {
				this.element.focus()
			}
		}
		class mb extends wg {
			constructor(e, t, n) {
				super(e), t.extendTemplate({
					attributes: {
						class: ['ck-dropdown__button']
					}
				}), this.buttonView = t, this.panelView = n, this.set('isOpen', !1), this.focusTracker = new mg, this.keystrokes = new Op, this.setTemplate({
					tag: 'div',
					attributes: {
						class: ['ck-dropdown']
					},
					children: [t, n]
				})
			}
			render() {
				super.render(), this.listenTo(this.buttonView, 'execute', () => {
					this.isOpen = !this.isOpen
				}), this.panelView.bind('isVisible').to(this, 'isOpen'), this.keystrokes.listenTo(this.element), this.focusTracker.add(this.element);
				const e = (e, t) => {
					this.isOpen && (this.buttonView.focus(), this.isOpen = !1, t())
				};
				this.keystrokes.set('arrowdown', (e, t) => {
					this.buttonView.isEnabled && !this.isOpen && (this.isOpen = !0, t())
				}), this.keystrokes.set('arrowright', (e, t) => {
					this.isOpen && t()
				}), this.keystrokes.set('arrowleft', e), this.keystrokes.set('esc', e)
			}
			focus() {
				this.buttonView.focus()
			}
		}
		class ub extends wg {
			constructor(e) {
				super(e);
				const t = this.bindTemplate;
				this.set('isVisible', !1), this.children = this.createCollection(), this.setTemplate({
					tag: 'div',
					attributes: {
						class: ['ck-reset', 'ck-dropdown__panel', t.if('isVisible', 'ck-dropdown__panel-visible')]
					},
					children: this.children,
					on: {
						selectstart: t.to((e) => e.preventDefault())
					}
				})
			}
		}
		var pb = n(34),
			gb = n.n(pb);
		class fb extends Ng {
			static get requires() {
				return [ob, sb]
			}
			static get pluginName() {
				return 'Heading'
			}
			init() {
				const e = this.editor,
					n = new pg,
					o = this._getLocalizedOptions(),
					i = [],
					a = e.t,
					t = a('g'),
					r = a('h');
				for (const t of o) {
					const o = e.commands.get(t.modelElement),
						a = new lb({
							commandName: t.modelElement,
							label: t.title,
							class: t.class
						});
					a.bind('isActive').to(o, 'value'), n.add(a), i.push(o)
				}
				const s = new lb({
					withText: !0,
					items: n,
					tooltip: r
				});
				s.bind('isEnabled').to(...ra(i, 'isEnabled'), (...e) => e.some((e) => e)), s.bind('label').to(...ra(i, 'value'), (...e) => {
					const n = e.findIndex((e) => e);
					return o[n] ? o[n].title : t
				}), e.ui.componentFactory.add('headings', (t) => {
					const n = ia(s, t);
					return n.extendTemplate({
						attributes: {
							class: ['ck-heading-dropdown']
						}
					}), this.listenTo(n, 'execute', (t) => {
						e.execute(t.source.commandName), e.editing.view.focus()
					}), n
				})
			}
			_getLocalizedOptions() {
				const e = this.editor,
					n = e.t,
					t = {
						Paragraph: n('i'),
						"Heading 1": n('j'),
						"Heading 2": n('k'),
						"Heading 3": n('l')
					};
				return e.config.get('heading.options').map((e) => {
					const n = t[e.title];
					return n && n != e.title && (e = Object.assign({}, e, {
						title: n
					})), e
				})
			}
		}
		var hb = n(36),
			bb = n.n(hb);
		const _b = {};
		zs(_b, Or);
		const kb = new WeakMap,
			wb = Symbol('imageCaption');
		class yb extends Ng {
			init() {
				const e = this.editor,
					n = e.document,
					o = e.editing.view,
					i = n.schema,
					a = e.data,
					r = e.editing,
					s = e.t;
				this._createCaption = ma(o, s('r')), i.registerItem('caption', '$block'), i.allow({
					name: '$inline',
					inside: 'caption'
				}), i.allow({
					name: 'caption',
					inside: 'image'
				}), i.limits.add('caption'), n.on('change', ga), ei().for(a.viewToModel).from(pa).toElement('caption'), a.modelToView.on('insert:caption', fa(new Yd('figcaption'), !1)), r.modelToView.on('insert:caption', fa(this._createCaption)), r.modelToView.on('insert', (e, t) => this._fixCaptionVisibility(t.item), {
					priority: 'high'
				}), r.modelToView.on('remove', (e, t) => this._fixCaptionVisibility(t.sourcePosition.parent), {
					priority: 'high'
				}), this.listenTo(o, 'render', () => this._updateCaptionVisibility(), {
					priority: 'high'
				})
			}
			_updateCaptionVisibility() {
				const e = this.editor.editing.mapper;
				let t;
				this._lastSelectedCaption && !this._lastSelectedCaption.childCount && this._lastSelectedCaption.addClass('ck-hidden');
				const n = this.editor.document.selection,
					o = n.getSelectedElement();
				if (o && o.is('image')) {
					const n = ua(o);
					t = e.toViewElement(n)
				}
				const i = n.getFirstPosition(),
					a = ba(i.parent);
				a && (t = e.toViewElement(a)), t && (t.removeClass('ck-hidden'), this._lastSelectedCaption = t)
			}
			_fixCaptionVisibility(e) {
				const t = ba(e),
					n = this.editor.editing.mapper;
				if (t) {
					const e = n.toViewElement(t);
					e && (t.childCount ? e.removeClass('ck-hidden') : e.addClass('ck-hidden'))
				}
			}
		}
		var vb = n(38),
			xb = n.n(vb);
		class Ab extends Ng {
			static get requires() {
				return [yb]
			}
			static get pluginName() {
				return 'ImageCaption'
			}
		}
		class Cb extends zg {
			constructor(e, t) {
				super(e), this.style = t
			}
			refresh() {
				const e = this.editor.document.selection.getSelectedElement();
				this.isEnabled = Pi(e), this.value = !!e && (this.style.isDefault ? !e.hasAttribute('imageStyle') : e.getAttribute('imageStyle') == this.style.name)
			}
			execute(e = {}) {
				if (this.value) return;
				const t = this.editor.document,
					n = t.selection.getSelectedElement();
				t.enqueueChanges(() => {
					const o = e.batch || t.batch();
					this.style.isDefault ? o.removeAttribute(n, 'imageStyle') : o.setAttribute(n, 'imageStyle', this.style.name)
				})
			}
		}
		var Tb = n(40),
			Pb = n.n(Tb),
			Sb = n(41),
			Eb = n.n(Sb),
			Vb = n(42),
			Ob = n.n(Vb),
			Rb = n(43),
			Fb = n.n(Rb);
		class Ib extends Ng {
			static get requires() {
				return [hh]
			}
			static get pluginName() {
				return 'ImageStyleEngine'
			}
			init() {
				const e = this.editor,
					t = e.document,
					n = t.schema,
					o = e.data,
					i = e.editing;
				e.config.define('image.styles', ['imageStyleFull', 'imageStyleSide']);
				const a = this.imageStyles;
				n.allow({
					name: 'image',
					attributes: 'imageStyle',
					inside: '$root'
				});
				const r = _a(a);
				i.modelToView.on('addAttribute:imageStyle:image', r), o.modelToView.on('addAttribute:imageStyle:image', r), i.modelToView.on('changeAttribute:imageStyle:image', r), o.modelToView.on('changeAttribute:imageStyle:image', r), i.modelToView.on('removeAttribute:imageStyle:image', r), o.modelToView.on('removeAttribute:imageStyle:image', r), o.viewToModel.on('element:figure', ka(a), {
					priority: 'low'
				});
				for (const t of a) e.commands.add(t.name, new Cb(e, t))
			}
			get imageStyles() {
				if (this._cachedImageStyles) return this._cachedImageStyles;
				const e = [],
					t = this.editor,
					n = this.localizedDefaultStylesTitles,
					o = t.config.get('image.styles');
				for (let t of o) t = Aa(t), n[t.title] && (t.title = n[t.title]), e.push(t);
				return this._cachedImageStyles = e
			}
			get localizedDefaultStylesTitles() {
				const e = this.editor.t;
				return {
					"Full size image": e('s'),
					"Side image": e('t'),
					"Left aligned image": e('u'),
					"Centered image": e('v'),
					"Right aligned image": e('w')
				}
			}
		}
		Ib.defaultStyles = {
			imageStyleFull: {
				name: 'imageStyleFull',
				title: 'Full size image',
				icon: Pb.a,
				isDefault: !0
			},
			imageStyleSide: {
				name: 'imageStyleSide',
				title: 'Side image',
				icon: Fb.a,
				className: 'image-style-side'
			},
			imageStyleAlignLeft: {
				name: 'imageStyleAlignLeft',
				title: 'Left aligned image',
				icon: Eb.a,
				className: 'image-style-align-left'
			},
			imageStyleAlignCenter: {
				name: 'imageStyleAlignCenter',
				title: 'Centered image',
				icon: Ob.a,
				className: 'image-style-align-center'
			},
			imageStyleAlignRight: {
				name: 'imageStyleAlignRight',
				title: 'Right aligned image',
				icon: Fb.a,
				className: 'image-style-align-right'
			}
		}, Ib.defaultIcons = {
			full: Pb.a,
			left: Eb.a,
			right: Fb.a,
			center: Ob.a
		};
		class Nb extends Ng {
			static get requires() {
				return [Ib]
			}
			static get pluginName() {
				return 'ImageStyle'
			}
			init() {
				const e = this.editor,
					t = e.plugins.get(Ib).imageStyles;
				for (const e of t) this._createButton(e)
			}
			_createButton(e) {
				const t = this.editor,
					n = t.commands.get(e.name);
				t.ui.componentFactory.add(e.name, (o) => {
					const i = new rf(o);
					return i.set({
						label: e.title,
						icon: e.icon,
						tooltip: !0
					}), i.bind('isEnabled').to(n, 'isEnabled'), i.bind('isOn').to(n, 'value'), this.listenTo(i, 'execute', () => t.execute(e.name)), i
				})
			}
		}
		class Bb extends Ng {
			static get requires() {
				return [Oh]
			}
			static get pluginName() {
				return 'ImageToolbar'
			}
			afterInit() {
				const e = this.editor,
					t = e.config.get('image.toolbar');
				t && t.length && (this._balloon = this.editor.plugins.get('ContextualBalloon'), this._toolbar = new Eg, this._toolbar.extendTemplate({
					attributes: {
						class: 'ck-editor-toolbar'
					}
				}), this._toolbar.fillFromConfig(t, e.ui.componentFactory), this.listenTo(e.editing.view, 'render', () => {
					this._checkIsVisible()
				}, {
					priority: 'low'
				}), this.listenTo(e.ui.focusTracker, 'change:isFocused', () => {
					this._checkIsVisible()
				}, {
					priority: 'low'
				}))
			}
			_checkIsVisible() {
				const e = this.editor;
				e.ui.focusTracker.isFocused ? Ti(e.editing.view.selection) ? this._showToolbar() : this._hideToolbar() : this._hideToolbar()
			}
			_showToolbar() {
				const e = this.editor;
				this._isVisible ? qi(e) : !this._balloon.hasView(this._toolbar) && this._balloon.add({
					view: this._toolbar,
					position: Hi(e),
					balloonClassName: 'ck-toolbar-container ck-editor-toolbar-container'
				})
			}
			_hideToolbar() {
				this._isVisible && this._balloon.remove(this._toolbar)
			}
			get _isVisible() {
				return this._balloon.visibleView == this._toolbar
			}
		}
		class Mb extends Xp {
			constructor(e) {
				super(e), this.domEventType = 'click'
			}
			onDomEvent(e) {
				this.fire(e.type, e)
			}
		}
		class Db extends sc {}
		class Lb extends zg {
			refresh() {
				const e = this.editor.document;
				this.value = e.selection.getAttribute('linkHref'), this.isEnabled = e.schema.checkAttributeInSelection(e.selection, 'linkHref')
			}
			execute(e) {
				const t = this.editor.document,
					n = t.selection;
				t.enqueueChanges(() => {
					const o = t.batch();
					if (n.isCollapsed) {
						const t = n.getFirstPosition();
						if (n.hasAttribute('linkHref')) {
							const t = Ca(n.getFirstPosition(), n.getAttribute('linkHref'));
							o.setAttribute(t, 'linkHref', e), n.setRanges([t])
						} else {
							const i = new Ks(e, {
								linkHref: e
							});
							o.insert(t, i), n.setRanges([el.createOn(i)])
						}
					} else {
						const i = t.schema.getValidRanges(n.getRanges(), 'linkHref');
						for (const t of i) o.setAttribute(t, 'linkHref', e)
					}
				})
			}
		}
		class zb extends zg {
			refresh() {
				this.isEnabled = this.editor.document.selection.hasAttribute('linkHref')
			}
			execute() {
				const e = this.editor.document,
					t = e.selection;
				e.enqueueChanges(() => {
					const n = t.isCollapsed ? [Ca(t.getFirstPosition(), t.getAttribute('linkHref'))] : t.getRanges(),
						o = e.batch();
					for (const e of n) o.removeAttribute(e, 'linkHref')
				})
			}
		}
		class jb extends Ng {
			init() {
				const e = this.editor,
					t = e.data,
					n = e.editing;
				e.document.schema.allow({
					name: '$inline',
					attributes: 'linkHref',
					inside: '$block'
				}), e.document.schema.allow({
					name: '$inline',
					attributes: 'linkHref',
					inside: '$clipboardHolder'
				}), Xo().for(t.modelToView, n.modelToView).fromAttribute('linkHref').toElement((e) => {
					const t = new Db('a', {
						href: e
					});
					return t.priority = 5, t
				}), ei().for(t.viewToModel).from({
					name: 'a',
					attribute: {
						href: /.?/
					}
				}).toAttribute((e) => ({
					key: 'linkHref',
					value: e.getAttribute('href')
				})), e.commands.add('link', new Lb(e)), e.commands.add('unlink', new zb(e))
			}
		}
		class $b extends wg {
			constructor(e) {
				super(e);
				const n = e.t;
				this.focusTracker = new mg, this.keystrokes = new Op, this.urlInputView = this._createUrlInput(), this.saveButtonView = this._createButton(n('y')), this.saveButtonView.type = 'submit', this.cancelButtonView = this._createButton(n('z'), 'cancel'), this.unlinkButtonView = this._createButton(n('aa'), 'unlink'), this._focusables = new gg, this._focusCycler = new Pg({
					focusables: this._focusables,
					focusTracker: this.focusTracker,
					keystrokeHandler: this.keystrokes,
					actions: {
						focusPrevious: 'shift + tab',
						focusNext: 'tab'
					}
				}), this.saveButtonView.extendTemplate({
					attributes: {
						class: ['ck-button-action']
					}
				}), this.setTemplate({
					tag: 'form',
					attributes: {
						class: ['ck-link-form'],
						tabindex: '-1'
					},
					children: [this.urlInputView, {
						tag: 'div',
						attributes: {
							class: ['ck-link-form__actions']
						},
						children: [this.saveButtonView, this.cancelButtonView, this.unlinkButtonView]
					}]
				})
			}
			render() {
				super.render(), Ii({
					view: this
				});
				const e = [this.urlInputView, this.saveButtonView, this.cancelButtonView, this.unlinkButtonView];
				e.forEach((e) => {
					this._focusables.add(e), this.focusTracker.add(e.element)
				}), this.keystrokes.listenTo(this.element)
			}
			focus() {
				this._focusCycler.focusFirst()
			}
			_createUrlInput() {
				const e = this.locale.t,
					t = new Ch(this.locale, Th);
				return t.label = e('ab'), t.inputView.placeholder = 'https://example.com', t
			}
			_createButton(e, t) {
				const n = new rf(this.locale);
				return n.label = e, n.withText = !0, t && n.delegate('execute').to(this, t), n
			}
		}
		var qb = n(44),
			Hb = n.n(qb),
			Wb = n(45),
			Ub = n.n(Wb);
		const Kb = 'Ctrl+K';
		class Qb extends Ng {
			static get requires() {
				return [jb, Oh]
			}
			static get pluginName() {
				return 'Link'
			}
			init() {
				const e = this.editor;
				e.editing.view.addObserver(Mb), this.formView = this._createForm(), this._balloon = e.plugins.get(Oh), this._createToolbarLinkButton(), this._attachActions()
			}
			_createForm() {
				const e = this.editor,
					t = new $b(e.locale),
					n = e.commands.get('link'),
					o = e.commands.get('unlink');
				return t.urlInputView.bind('value').to(n, 'value'), t.urlInputView.bind('isReadOnly').to(n, 'isEnabled', (e) => !e), t.saveButtonView.bind('isEnabled').to(n), t.unlinkButtonView.bind('isEnabled').to(o), this.listenTo(t, 'submit', () => {
					e.execute('link', t.urlInputView.inputView.element.value), this._hidePanel(!0)
				}), this.listenTo(t, 'unlink', () => {
					e.execute('unlink'), this._hidePanel(!0)
				}), this.listenTo(t, 'cancel', () => this._hidePanel(!0)), t.keystrokes.set('Esc', (e, t) => {
					this._hidePanel(!0), t()
				}), t
			}
			_createToolbarLinkButton() {
				const e = this.editor,
					n = e.commands.get('link'),
					o = e.t;
				e.keystrokes.set(Kb, (e, t) => {
					t(), n.isEnabled && this._showPanel(!0)
				}), e.ui.componentFactory.add('link', (e) => {
					const t = new rf(e);
					return t.isEnabled = !0, t.label = o('o'), t.icon = Hb.a, t.keystroke = Kb, t.tooltip = !0, t.bind('isEnabled').to(n, 'isEnabled'), this.listenTo(t, 'execute', () => this._showPanel(!0)), t
				})
			}
			_attachActions() {
				const e = this.editor.editing.view;
				this.listenTo(e, 'click', () => {
					const e = this._getSelectedLinkElement();
					e && this._showPanel()
				}), this.editor.keystrokes.set('Tab', (e, t) => {
					this._balloon.visibleView !== this.formView || this.formView.focusTracker.isFocused || (this.formView.focus(), t())
				}, {
					priority: 'high'
				}), this.editor.keystrokes.set('Esc', (e, t) => {
					this._balloon.visibleView === this.formView && (this._hidePanel(), t())
				}), Fi({
					emitter: this.formView,
					activator: () => this._balloon.hasView(this.formView),
					contextElements: [this._balloon.view.element],
					callback: () => this._hidePanel()
				})
			}
			_showPanel(e) {
				const t = this.editor,
					n = t.commands.get('link'),
					o = t.commands.get('unlink'),
					i = t.editing,
					a = i.view,
					r = a.selection.isCollapsed,
					s = this._getSelectedLinkElement();
				this.listenTo(a, 'render', () => {
					const e = this._getSelectedLinkElement(),
						t = a.selection.isCollapsed;
					r && !t || s !== e ? this._hidePanel(!0) : this._balloon.updatePosition(this._getBalloonPositionData())
				}), this._balloon.hasView(this.formView) ? e && this._balloon.visibleView === this.formView && this.formView.urlInputView.select() : (this._balloon.add({
					view: this.formView,
					position: this._getBalloonPositionData()
				}), e && this.formView.urlInputView.select()), this.formView.unlinkButtonView.isVisible = o.isEnabled, this.formView.urlInputView.inputView.element.value = n.value || ''
			}
			_hidePanel(e) {
				this.stopListening(this.editor.editing.view, 'render');
				this._balloon.hasView(this.formView) && (e && this.editor.editing.view.focus(), this.stopListening(this.editor.editing.view, 'render'), this._balloon.remove(this.formView))
			}
			_getBalloonPositionData() {
				const e = this.editor.editing.view,
					t = this._getSelectedLinkElement(),
					n = t ? e.domConverter.mapViewToDom(t) : e.domConverter.viewRangeToDom(e.selection.getFirstRange());
				return {
					target: n
				}
			}
			_getSelectedLinkElement() {
				const e = this.editor.editing.view.selection;
				if (e.isCollapsed) return Pa(e.getFirstPosition());
				else {
					const t = e.getFirstRange().getTrimmed(),
						n = Pa(t.start),
						o = Pa(t.end);
					return n && n == o ? tc.createIn(n).getTrimmed().isEqual(t) ? n : null : null
				}
			}
		}
		class Jb extends zg {
			constructor(e, t) {
				super(e), this.type = 'bulleted' == t ? 'bulleted' : 'numbered'
			}
			refresh() {
				this.value = this._getValue(), this.isEnabled = this._checkEnabled()
			}
			execute(e = {}) {
				const t = this.editor.document,
					n = Array.from(t.selection.getSelectedBlocks()).filter((e) => Ea(e, t.schema)),
					o = !0 === this.value;
				t.enqueueChanges(() => {
					const i = e.batch || t.batch();
					if (o) {
						let e = n[n.length - 1].nextSibling,
							t = nr,
							o = [];
						for (; e && 'listItem' == e.name && 0 !== e.getAttribute('indent');) {
							const n = e.getAttribute('indent');
							n < t && (t = n);
							const i = n - t;
							o.push({
								element: e,
								indent: i
							}), e = e.nextSibling
						}
						o = o.reverse();
						for (const e of o) i.setAttribute(e.element, 'indent', e.indent)
					}
					if (!o) {
						let e = nr;
						for (const t of n) t.is('listItem') && t.getAttribute('indent') < e && (e = t.getAttribute('indent'));
						e = 0 === e ? 1 : e, Sa(n, !0, e), Sa(n, !1, e)
					}
					for (const e of n.reverse()) o && 'listItem' == e.name ? i.rename(e, 'paragraph') : o || 'listItem' == e.name ? o || 'listItem' != e.name || e.getAttribute('type') == this.type || i.setAttribute(e, 'type', this.type) : i.setAttribute(e, 'type', this.type).setAttribute(e, 'indent', 0).rename(e, 'listItem')
				})
			}
			_getValue() {
				const e = ti(this.editor.document.selection.getSelectedBlocks());
				return !!e && e.is('listItem') && e.getAttribute('type') == this.type
			}
			_checkEnabled() {
				if (this.value) return !0;
				const e = this.editor.document.selection,
					t = this.editor.document.schema,
					n = ti(e.getSelectedBlocks());
				return !!n && Ea(n, t)
			}
		}
		class Gb extends zg {
			constructor(e, t) {
				super(e), this._indentBy = 'forward' == t ? 1 : -1
			}
			refresh() {
				this.isEnabled = this._checkEnabled()
			}
			execute() {
				const e = this.editor.document,
					t = e.batch();
				let n = Array.from(e.selection.getSelectedBlocks());
				e.enqueueChanges(() => {
					const e = n[n.length - 1];
					for (let t = e.nextSibling; t && 'listItem' == t.name && t.getAttribute('indent') > e.getAttribute('indent');) n.push(t), t = t.nextSibling;
					0 > this._indentBy && (n = n.reverse());
					for (const e of n) {
						const n = e.getAttribute('indent') + this._indentBy;
						0 > n ? t.rename(e, 'paragraph') : t.setAttribute(e, 'indent', n)
					}
					0 > this._indentBy && (n = n.reverse());
					for (const e of n) Va(e, t)
				})
			}
			_checkEnabled() {
				const e = ti(this.editor.document.selection.getSelectedBlocks());
				if (!e || !e.is('listItem')) return !1;
				if (0 < this._indentBy) {
					const t = e.getAttribute('indent'),
						n = e.getAttribute('type');
					for (let o = e.previousSibling; o && o.is('listItem') && o.getAttribute('indent') >= t;) {
						if (o.getAttribute('indent') == t) return o.getAttribute('type') == n;
						o = o.previousSibling
					}
					return !1
				}
				return !0
			}
		}
		class Yb extends Yd {
			constructor(e, t) {
				super('li', e, t), this.getFillerOffset = Ra
			}
		}
		class Xb extends Ng {
			static get requires() {
				return [ob]
			}
			init() {
				const e = this.editor,
					t = e.document.schema;
				t.registerItem('listItem', '$block'), t.allow({
					name: 'listItem',
					inside: '$root',
					attributes: ['type', 'indent']
				}), t.requireAttributes('listItem', ['type', 'indent']);
				const n = e.data,
					o = e.editing;
				this.editor.document.on('change', Ha(this.editor.document), {
					priority: 'high'
				}), this.editor.document.on('change', (e, t, n) => {
					if ('move' == t)
						for (const e of n.range.getItems()) e.is('listItem') && o.mapper.unbindModelElement(e)
				}, {
					priority: 'high'
				}), o.mapper.registerViewToModelLength('li', tr), n.mapper.registerViewToModelLength('li', tr), o.mapper.on('modelToViewPosition', $a), o.mapper.on('viewToModelPosition', qa), n.mapper.on('modelToViewPosition', $a), o.modelToView.on('insert', Ma, {
					priority: 'high'
				}), o.modelToView.on('insert:listItem', Fa), n.modelToView.on('insert', Ma, {
					priority: 'high'
				}), n.modelToView.on('insert:listItem', Fa), o.modelToView.on('changeAttribute:type:listItem', Ia), n.modelToView.on('changeAttribute:type:listItem', Ia), o.modelToView.on('remove:listItem', Na), o.modelToView.on('remove', Da, {
					priority: 'low'
				}), n.modelToView.on('remove:listItem', Na), n.modelToView.on('remove', Da, {
					priority: 'low'
				}), o.modelToView.on('changeAttribute:indent:listItem', Ba), n.modelToView.on('changeAttribute:indent:listItem', Ba), n.viewToModel.on('element:ul', za, {
					priority: 'high'
				}), n.viewToModel.on('element:ol', za, {
					priority: 'high'
				}), n.viewToModel.on('element:li', ja, {
					priority: 'high'
				}), n.viewToModel.on('element:li', La), n.on('insertContent', Ka, {
					priority: 'high'
				}), e.commands.add('numberedList', new Jb(e, 'numbered')), e.commands.add('bulletedList', new Jb(e, 'bulleted')), e.commands.add('indentList', new Gb(e, 'forward')), e.commands.add('outdentList', new Gb(e, 'backward'))
			}
		}
		var Zb = n(47),
			e_ = n.n(Zb),
			t_ = n(48),
			n_ = n.n(t_);
		class o_ extends Ng {
			static get requires() {
				return [Xb]
			}
			static get pluginName() {
				return 'List'
			}
			init() {
				const e = this.editor.t;
				this._addButton('numberedList', e('m'), e_.a), this._addButton('bulletedList', e('n'), n_.a), this.listenTo(this.editor.editing.view, 'enter', (e, t) => {
					const n = this.editor.document,
						o = n.selection.getLastPosition().parent;
					n.selection.isCollapsed && 'listItem' == o.name && o.isEmpty && (this.editor.execute('outdentList'), t.preventDefault(), e.stop())
				}), this.listenTo(this.editor.editing.view, 'delete', (e, t) => {
					if ('backward' === t.direction) {
						const n = this.editor.document.selection;
						if (n.isCollapsed) {
							const o = n.getFirstPosition();
							if (o.isAtStart) {
								const n = o.parent;
								if ('listItem' === n.name) {
									const o = n.previousSibling && 'listItem' === n.previousSibling.name;
									o || (this.editor.execute('outdentList'), t.preventDefault(), e.stop())
								}
							}
						}
					}
				}, {
					priority: 'high'
				});
				const t = (e) => (t, n) => {
					const o = this.editor.commands.get(e);
					o.isEnabled && (this.editor.execute(e), n())
				};
				this.editor.keystrokes.set('Tab', t('indentList')), this.editor.keystrokes.set('Shift+Tab', t('outdentList'))
			}
			_addButton(e, t, n) {
				const o = this.editor,
					i = o.commands.get(e);
				o.ui.componentFactory.add(e, (a) => {
					const r = new rf(a);
					return r.set({
						label: t,
						icon: n,
						tooltip: !0
					}), r.bind('isOn', 'isEnabled').to(i, 'value', 'isEnabled'), this.listenTo(r, 'execute', () => o.execute(e)), r
				})
			}
		}
		class i_ extends Ig {}
		t['default'] = i_, i_.build = {
			plugins: [uf, kf, xf, Of, Bf, jf, Qf, th, tb, fb, Lh, Ab, Nb, Bb, Qb, o_, ob, eb],
			config: {
				toolbar: {
					items: ['headings', 'bold', 'italic', 'underline', 'code', 'link', 'bulletedList', 'numberedList', 'blockQuote', 'insertImage', 'undo', 'redo']
				},
				image: {
					toolbar: ['imageTextAlternative', '|', 'imageStyleAlignLeft', 'imageStyleFull', 'imageStyleAlignRight'],
					styles: ['imageStyleFull', 'imageStyleAlignLeft', 'imageStyleAlignRight']
				},
				lang: 'zh-cn',
				language: 'zh-cn'
			}
		}
	}, function(e) {
		var t = function() {
			return this
		}();
		try {
			t = t || Function('return this')() || (1, eval)('this')
		} catch (n) {
			'object' == typeof window && (t = window)
		}
		e.exports = t
	}, function(e, t) {
		'use strict';
		t.a = function(e) {
			return e && e.Object === Object ? e : null
		}
	}, function(e, t, n) {
		'use strict';
		(function(e) {
			var o = n(8),
				i = n(2),
				a = {
					function: !0,
					object: !0
				},
				r = a[typeof exports] && exports && !exports.nodeType ? exports : void 0,
				s = a[typeof e] && e && !e.nodeType ? e : void 0,
				l = s && s.exports === r ? r : void 0,
				d = l ? i.a.Buffer : void 0,
				c = d ? function(e) {
					return e instanceof d
				} : Object(o.a)(!1);
			t.a = c
		}).call(t, n(3)(e))
	}, function(e, t) {
		'use strict';
		t.a = function(e) {
			return function() {
				return e
			}
		}
	}, function(e, t, n) {
		var o = n(10);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '@charset "UTF-8";\n/**\n * Makes element unselectable.\n */\n/**\n * A class which hides an element in DOM.\n */\n.ck-hidden {\n  display: none !important; }\n\n/**\n * Wraps (S)CSS into .ck-editor namespace.\n */\n/**\n * Resets an element, ignoring its children.\n */\n.ck-reset, .ck-reset_all, .ck-reset_all *, .ck-reset_all a, .ck-reset_all textarea {\n  box-sizing: border-box;\n  width: auto;\n  height: auto;\n  position: static; }\n\n/**\n * Resets an element AND its children.\n */\n/**\n * Base font size.\n *\n * @see $ck-font-sizes\n */\n/**\n * Base line height.\n */\n/**\n * Base font face.\n *\n */\n/**\n * Base font sizes for scaling.\n *\n * @see ck-font-size\n */\n/**\n * Returns font-size in units for given level.\n *\n * @param {Number} $level [ 0 ] - Size of the font.\n * @return {String}\n * @see $ck-font-sizes\n * @see $ck-font-size-base\n */\n/**\n * Default width/height of an icon. Note that it equals the default\n * height of the line of text, so e.g. it matches the height of the\n * button\'s label.\n */\nsvg.ck-icon {\n  min-width: 20px;\n  min-height: 20px;\n  font-size: 1em;\n  vertical-align: middle;\n  color: inherit;\n  cursor: inherit; }\n  svg.ck-icon * {\n    cursor: inherit;\n    color: inherit;\n    fill: currentColor; }\n\n/**\n * Enables the tooltip, which is the tooltip is in DOM but\n * not yet displayed.\n */\n/**\n * Disables the tooltip making it disappear from DOM.\n */\n/**\n * Shows the tooltip, which is already in DOM.\n * Requires `ck-tooltip_enabled` first.\n */\n.ck-tooltip,\n.ck-tooltip__text::after {\n  position: absolute;\n  pointer-events: none;\n  -webkit-backface-visibility: hidden; }\n\n.ck-tooltip {\n  visibility: hidden;\n  opacity: 0;\n  display: none;\n  z-index: 999; }\n\n.ck-tooltip__text {\n  display: inline-block; }\n\n.ck-tooltip__text::after {\n  content: "";\n  width: 0;\n  height: 0; }\n\n.ck-button,\na.ck-button {\n  display: inline-block;\n  position: relative;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n  .ck-button .ck-tooltip,\n  a.ck-button .ck-tooltip {\n    display: block; }\n  .ck-button.ck-button_with-text .ck-button__label,\n  a.ck-button.ck-button_with-text .ck-button__label {\n    display: block; }\n  .ck-button:hover .ck-tooltip,\n  a.ck-button:hover .ck-tooltip {\n    visibility: visible;\n    opacity: 1; }\n  .ck-button:focus:not(:hover) .ck-tooltip,\n  a.ck-button:focus:not(:hover) .ck-tooltip {\n    display: none; }\n  .ck-button .ck-button__label,\n  a.ck-button .ck-button__label {\n    display: none; }\n\n.ck-toolbar {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n  .ck-toolbar__separator {\n    display: inline-block; }\n  .ck-toolbar__newline {\n    display: block;\n    clear: left; }\n\n.ck-dropdown {\n  display: inline-block;\n  position: relative; }\n  .ck-dropdown::after {\n    content: \'\';\n    width: 0;\n    height: 0;\n    pointer-events: none;\n    z-index: 1;\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%); }\n\n.ck-dropdown__panel {\n  -webkit-backface-visibility: hidden;\n  display: none;\n  z-index: 999;\n  position: absolute;\n  left: 0px;\n  transform: translateY(100%); }\n  .ck-dropdown__panel-visible {\n    display: inline-block; }\n\n.ck-list {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n  .ck-list__item {\n    display: block; }\n\n.ck-label {\n  display: block; }\n\n.cke-voice-label {\n  display: none; }\n\n.ck-balloon-panel {\n  display: none;\n  position: absolute;\n  z-index: 999; }\n  .ck-balloon-panel.ck-balloon-panel_with-arrow:before, .ck-balloon-panel.ck-balloon-panel_with-arrow:after {\n    content: "";\n    position: absolute; }\n  .ck-balloon-panel.ck-balloon-panel_with-arrow:before {\n    z-index: 1; }\n  .ck-balloon-panel.ck-balloon-panel_with-arrow:after {\n    z-index: 2; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_n:before, .ck-balloon-panel.ck-balloon-panel_arrow_ne:before, .ck-balloon-panel.ck-balloon-panel_arrow_nw:before {\n    z-index: 1; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_n:after, .ck-balloon-panel.ck-balloon-panel_arrow_ne:after, .ck-balloon-panel.ck-balloon-panel_arrow_nw:after {\n    z-index: 2; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_s:before, .ck-balloon-panel.ck-balloon-panel_arrow_se:before, .ck-balloon-panel.ck-balloon-panel_arrow_sw:before {\n    z-index: 1; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_s:after, .ck-balloon-panel.ck-balloon-panel_arrow_se:after, .ck-balloon-panel.ck-balloon-panel_arrow_sw:after {\n    z-index: 2; }\n  .ck-balloon-panel_visible {\n    display: block; }\n\n.ck-editor .ck-sticky-panel .ck-sticky-panel__content_sticky {\n  z-index: 999;\n  position: fixed;\n  top: 0; }\n  .ck-editor .ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit {\n    top: auto;\n    position: absolute; }\n\n/**\n * Colors configured by the user.\n *\n * @type Map\n * @example\n *\t\t$ck-colors: ( \'foreground\': red );\n * @see $_ck-colors\n */\n/**\n * Internal map with default colors.\n *\n * @type Map\n * @see ck-color-add\n */\n/**\n * Returns a color of given name and lightness offset.\n *\n * @param {String} $name [ \'background\' ] - Name of the color.\n * @param {Number} $offset [ 0 ] - Offset of the lightness.\n * @return {String}\n * @see $_ck-colors\n */\n/**\n * Adds a color to internal color map.\n *\n * @example\n *\t\t@include ck-color-add( ( \'special\': yellow, \'hover\': #00FF00 ) );\n * @param {Map} $map - A map with new colors.\n * @see $_ck-colors\n */\n/**\n * Base font size.\n *\n * @see $ck-font-sizes\n */\n/**\n * Base line height.\n */\n/**\n * Base font face.\n *\n */\n/**\n * Base font sizes for scaling.\n *\n * @see ck-font-size\n */\n/**\n * Returns font-size in units for given level.\n *\n * @param {Number} $level [ 0 ] - Size of the font.\n * @return {String}\n * @see $ck-font-sizes\n * @see $ck-font-size-base\n */\n/**\n * Default border-radius value.\n *\n */\n/**\n * Implements rounded corner interface for .ck-rounded-corners class.\n *\n * @see $ck-border-radius\n */\n/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n/**\n * A visual style of focused element\'s outer shadow.\n */\n/**\n * A visual style of focused element\'s border or outline.\n */\n/**\n * An opacity value of disabled UI item.\n */\n/**\n * A class which indicates that an element holding it is disabled.\n */\n/**\n * A visual style of focused element\'s border.\n */\n/**\n * Brings visual styling for :focus state.\n */\n/**\n * A visual style of element\'s inner shadow (i.e. input).\n */\n/**\n * A visual style of element\'s drop shadow (i.e. panel).\n */\n/**\n * A helper to combine multiple shadows.\n */\n/**\n * Gives an element a drop shadow so it looks like a floating panel.\n */\n/**\n * Implements a button of given background color.\n *\n * @param {String} $background - Background color of the button.\n * @param {String} $border - Border color of the button.\n */\n/**\n * A helper to define button\u2013specific icon styles.\n *\n */\n/**\n * Resets an element, ignoring its children.\n */\n.ck-reset, .ck-reset_all, .ck-reset_all *, .ck-reset_all a, .ck-reset_all textarea {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  text-decoration: none;\n  vertical-align: middle;\n  transition: none;\n  word-wrap: break-word; }\n\n/**\n * Resets an element AND its children.\n */\n.ck-reset_all, .ck-reset_all *, .ck-reset_all a, .ck-reset_all textarea {\n  border-collapse: collapse;\n  font: normal normal normal 12px/1.67 Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n  color: #333333;\n  text-align: left;\n  white-space: nowrap;\n  cursor: auto;\n  float: none; }\n\n.ck-reset_all .ck-rtl * {\n  text-align: right; }\n\n.ck-reset_all iframe {\n  vertical-align: inherit; }\n\n.ck-reset_all textarea {\n  white-space: pre-wrap; }\n\n.ck-reset_all textarea,\n.ck-reset_all input[type="text"],\n.ck-reset_all input[type="password"] {\n  cursor: text; }\n\n.ck-reset_all textarea[disabled],\n.ck-reset_all input[type="text"][disabled],\n.ck-reset_all input[type="password"][disabled] {\n  cursor: default; }\n\n.ck-reset_all fieldset {\n  padding: 10px;\n  border: 2px groove #E0DFE3; }\n\n.ck-reset_all button::-moz-focus-inner {\n  padding: 0;\n  border: 0; }\n\nsvg.ck-icon {\n  width: 1.67em;\n  height: 1.67em; }\n\n.ck-tooltip {\n  left: 50%;\n  /**\n\t * A class once applied displays the tooltip south of the element.\n\t *\n\t *       [element]\n\t *           ^\n\t *     +-----------+\n\t *     |  Tooltip  |\n\t *     +-----------+\n\t */\n  /**\n\t * A class once applied displays the tooltip north of the element.\n\t *\n\t *     +-----------+\n\t *     |  Tooltip  |\n\t *     +-----------+\n\t *           V\n\t *       [element]\n\t */ }\n  .ck-tooltip__text {\n    font-size: .9em;\n    line-height: 1.5;\n    color: white;\n    padding: 0.4em 0.64em;\n    background: #333333;\n    position: relative;\n    left: -50%; }\n    .ck-tooltip__text.ck-rounded-corners,\n    .ck-rounded-corners .ck-tooltip__text {\n      border-radius: 2px; }\n    .ck-tooltip__text::after {\n      border-style: solid;\n      left: 50%; }\n  .ck-tooltip.ck-tooltip_s {\n    bottom: -5px;\n    transform: translateY(100%); }\n    .ck-tooltip.ck-tooltip_s .ck-tooltip__text::after {\n      top: -5px;\n      transform: translateX(-50%);\n      border-color: transparent transparent #333333 transparent;\n      border-width: 0 5px 5px 5px; }\n  .ck-tooltip.ck-tooltip_n {\n    top: -5px;\n    transform: translateY(-100%); }\n    .ck-tooltip.ck-tooltip_n .ck-tooltip__text::after {\n      bottom: -5px;\n      transform: translateX(-50%);\n      border-color: #333333 transparent transparent transparent;\n      border-width: 5px 5px 0 5px; }\n\n.ck-tooltip,\n.ck-tooltip__text::after {\n  transition: opacity .2s ease-in-out .2s; }\n\n.ck-button,\na.ck-button {\n  background: white;\n  border-color: #bfbfbf;\n  border-width: 1px;\n  border-style: solid;\n  white-space: nowrap;\n  cursor: default;\n  vertical-align: middle;\n  padding: 0.4em;\n  font-size: inherit; }\n  .ck-button:not(.ck-disabled):hover, .ck-button:not(.ck-disabled):focus,\n  a.ck-button:not(.ck-disabled):hover,\n  a.ck-button:not(.ck-disabled):focus {\n    background: #e6e6e6;\n    border-color: #acacac; }\n  .ck-button:not(.ck-disabled):active,\n  a.ck-button:not(.ck-disabled):active {\n    background: #d9d9d9;\n    border-color: #a3a3a3;\n    box-shadow: inset 0 2px 2px #bfbfbf; }\n  .ck-button.ck-disabled,\n  a.ck-button.ck-disabled {\n    background: white;\n    border-color: #c6c6c6; }\n  .ck-button.ck-rounded-corners,\n  .ck-rounded-corners .ck-button,\n  a.ck-button.ck-rounded-corners,\n  .ck-rounded-corners\n  a.ck-button {\n    border-radius: 2px; }\n  .ck-button:focus,\n  a.ck-button:focus {\n    outline: none;\n    border: 1px solid #48a3f5;\n    box-shadow: 0 0 3px 2px #78bbf8; }\n  .ck-button .ck-icon,\n  a.ck-button .ck-icon {\n    float: left; }\n  .ck-button.ck-disabled .ck-icon,\n  a.ck-button.ck-disabled .ck-icon {\n    opacity: 0.5; }\n  .ck-button.ck-disabled .ck-button__label,\n  a.ck-button.ck-disabled .ck-button__label {\n    opacity: 0.5; }\n  .ck-button.ck-button_with-text,\n  a.ck-button.ck-button_with-text {\n    padding: 0.4em 0.8em; }\n    .ck-button.ck-button_with-text .ck-icon,\n    a.ck-button.ck-button_with-text .ck-icon {\n      margin-left: -0.4em;\n      margin-right: 0.4em; }\n    .ck-button.ck-button_with-text .ck-button__label,\n    a.ck-button.ck-button_with-text .ck-button__label {\n      display: block; }\n  .ck-button.ck-on,\n  a.ck-button.ck-on {\n    background: #f7f7f7;\n    border-color: #b9b9b9; }\n    .ck-button.ck-on:not(.ck-disabled):hover, .ck-button.ck-on:not(.ck-disabled):focus,\n    a.ck-button.ck-on:not(.ck-disabled):hover,\n    a.ck-button.ck-on:not(.ck-disabled):focus {\n      background: #dedede;\n      border-color: #a7a7a7; }\n    .ck-button.ck-on:not(.ck-disabled):active,\n    a.ck-button.ck-on:not(.ck-disabled):active {\n      background: #d2d2d2;\n      border-color: #9d9d9d;\n      box-shadow: inset 0 2px 2px #b9b9b9; }\n    .ck-button.ck-on.ck-disabled,\n    a.ck-button.ck-on.ck-disabled {\n      background: #f8f8f8;\n      border-color: silver; }\n  .ck-button-action,\n  a.ck-button-action {\n    background: #61b145;\n    border-color: #4e8e37;\n    text-shadow: 0 -1px #4e8e37;\n    color: white; }\n    .ck-button-action:not(.ck-disabled):hover, .ck-button-action:not(.ck-disabled):focus,\n    a.ck-button-action:not(.ck-disabled):hover,\n    a.ck-button-action:not(.ck-disabled):focus {\n      background: #579f3e;\n      border-color: #467f32; }\n    .ck-button-action:not(.ck-disabled):active,\n    a.ck-button-action:not(.ck-disabled):active {\n      background: #52963b;\n      border-color: #42782f;\n      box-shadow: inset 0 2px 2px #498534; }\n    .ck-button-action.ck-disabled,\n    a.ck-button-action.ck-disabled {\n      background: #6fbc54;\n      border-color: #5aa440; }\n    .ck-button-action:hover, .ck-button-action:focus, .ck-button-action:active,\n    a.ck-button-action:hover,\n    a.ck-button-action:focus,\n    a.ck-button-action:active {\n      text-shadow: 0 -1px #3a6a29; }\n  .ck-button-bold,\n  a.ck-button-bold {\n    font-weight: bold; }\n  .ck-button .ck-icon use,\n  .ck-button .ck-icon use *,\n  a.ck-button .ck-icon use,\n  a.ck-button .ck-icon use * {\n    color: inherit; }\n  .ck-button .ck-button__label,\n  a.ck-button .ck-button__label {\n    font-size: inherit;\n    float: left;\n    height: 1.67em;\n    line-height: inherit;\n    font-weight: inherit;\n    color: inherit;\n    cursor: inherit; }\n\n.ck-toolbar {\n  padding: 0.4em;\n  border: 1px solid #bfbfbf;\n  white-space: initial;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none; }\n  .ck-toolbar_floating {\n    white-space: nowrap; }\n  .ck-toolbar.ck-rounded-corners,\n  .ck-rounded-corners .ck-toolbar {\n    border-radius: 2px; }\n  .ck-toolbar__separator {\n    width: 1px;\n    height: calc( 1em + 2 * 0.64em);\n    vertical-align: middle;\n    background: #bfbfbf; }\n  .ck-toolbar__newline {\n    height: 0.4em; }\n  .ck-toolbar > * {\n    margin-right: 0.4em; }\n  .ck-toolbar > *:last-child {\n    margin-right: 0; }\n  .ck-toolbar-container .ck-toolbar {\n    border: 0; }\n\n.ck-dropdown {\n  font-size: inherit; }\n  .ck-dropdown::after {\n    border-style: solid;\n    border-width: .4em .4em 0 .4em;\n    border-color: #707070 transparent;\n    right: 0.8em; }\n  .ck-dropdown .ck-button.ck-dropdown__button {\n    padding-right: 1.6em; }\n    .ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label {\n      opacity: 0.5; }\n    .ck-dropdown .ck-button.ck-dropdown__button .ck-button__label {\n      width: 7em;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n\n.ck-dropdown__panel {\n  background: white;\n  border: 1px solid #bfbfbf;\n  bottom: 1px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2); }\n  .ck-dropdown__panel.ck-rounded-corners,\n  .ck-rounded-corners .ck-dropdown__panel {\n    border-radius: 2px; }\n\n.ck-list {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  overflow: hidden;\n  list-style-type: none;\n  background: white; }\n  .ck-list.ck-rounded-corners,\n  .ck-rounded-corners .ck-list {\n    border-radius: 2px; }\n  .ck-list__item {\n    padding: 0.64em;\n    cursor: default;\n    min-width: 12em; }\n    .ck-list__item:hover, .ck-list__item:focus {\n      background: #f7f7f7; }\n    .ck-list__item:focus {\n      box-shadow: 0 0 3px 2px #78bbf8;\n      position: relative;\n      z-index: 1;\n      outline: none; }\n    .ck-list__item_active {\n      background: #1a8bf1;\n      color: white; }\n      .ck-list__item_active:hover, .ck-list__item_active:focus {\n        background: #0e7ee2; }\n\n.ck-label {\n  font-weight: bold; }\n\n.ck-input-text {\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset;\n  background: white;\n  border: 1px solid #bfbfbf;\n  padding: 0.4em 0.64em;\n  min-width: 21em; }\n  .ck-input-text.ck-rounded-corners,\n  .ck-rounded-corners .ck-input-text {\n    border-radius: 2px; }\n  .ck-input-text:focus {\n    outline: none;\n    border: 1px solid #48a3f5;\n    box-shadow: 0 0 3px 2px #78bbf8, 2px 2px 3px rgba(0, 0, 0, 0.1) inset; }\n  .ck-input-text[readonly] {\n    border: 1px solid #c6c6c6;\n    background: #f2f2f2;\n    color: #5c5c5c; }\n\n/**\n * Implements a button of given background color.\n *\n * @param {String} $background - Background color of the button.\n * @param {String} $border - Border color of the button.\n */\n/**\n * A helper to define button\u2013specific icon styles.\n *\n */\n.ck-editor__editable.ck-rounded-corners,\n.ck-rounded-corners .ck-editor__editable {\n  border-radius: 2px; }\n\n.ck-editor__editable.ck-focused {\n  outline: none;\n  border: 1px solid #48a3f5;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset; }\n\n.ck-editor__editable_inline {\n  overflow: auto;\n  padding: 0 0.8em;\n  border: 1px solid transparent; }\n\n.ck-editor-toolbar .ck-button {\n  border-width: 0; }\n  .ck-editor-toolbar .ck-button:not(:hover):not(:focus):not(.ck-on), .ck-editor-toolbar .ck-button.ck-disabled {\n    background: #f7f7f7; }\n  .ck-editor-toolbar .ck-button.ck-on {\n    background: #dedede;\n    border-color: #acacac; }\n    .ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):hover, .ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):focus {\n      background: #c6c6c6;\n      border-color: #999999; }\n    .ck-editor-toolbar .ck-button.ck-on:not(.ck-disabled):active {\n      background: #b9b9b9;\n      border-color: #8f8f8f;\n      box-shadow: inset 0 2px 2px #a1a1a1; }\n    .ck-editor-toolbar .ck-button.ck-on.ck-disabled {\n      background: #f7f7f7;\n      border-color: #bfbfbf; }\n\n.ck-editor-toolbar .ck-button.ck-dropdown__button {\n  border-width: 1px; }\n  .ck-editor-toolbar .ck-button.ck-dropdown__button:not(:hover):not(:focus):not(.ck-on) {\n    background: white; }\n\n.ck-toolbar-container .ck-editor-toolbar {\n  background: #f7f7f7; }\n\n.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_n:after, .ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_ne:after, .ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_nw:after {\n  border-bottom-color: #f7f7f7; }\n\n.ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_s:after, .ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_se:after, .ck-toolbar-container.ck-editor-toolbar-container.ck-balloon-panel_arrow_sw:after {\n  border-top-color: #f7f7f7; }\n\n.ck-balloon-panel {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  min-height: 15px;\n  background: white;\n  border: 1px solid #bfbfbf; }\n  .ck-balloon-panel.ck-rounded-corners,\n  .ck-rounded-corners .ck-balloon-panel {\n    border-radius: 2px; }\n  .ck-balloon-panel.ck-balloon-panel_with-arrow:before, .ck-balloon-panel.ck-balloon-panel_with-arrow:after {\n    width: 0;\n    height: 0;\n    border-style: solid; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_n:before, .ck-balloon-panel.ck-balloon-panel_arrow_n:after, .ck-balloon-panel.ck-balloon-panel_arrow_ne:before, .ck-balloon-panel.ck-balloon-panel_arrow_ne:after, .ck-balloon-panel.ck-balloon-panel_arrow_nw:before, .ck-balloon-panel.ck-balloon-panel_arrow_nw:after {\n    border-width: 0 10px 15px 10px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_n:before, .ck-balloon-panel.ck-balloon-panel_arrow_ne:before, .ck-balloon-panel.ck-balloon-panel_arrow_nw:before {\n    border-color: transparent transparent #bfbfbf transparent; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_n:after, .ck-balloon-panel.ck-balloon-panel_arrow_ne:after, .ck-balloon-panel.ck-balloon-panel_arrow_nw:after {\n    border-color: transparent transparent white transparent;\n    margin-top: 2px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_s:before, .ck-balloon-panel.ck-balloon-panel_arrow_s:after, .ck-balloon-panel.ck-balloon-panel_arrow_se:before, .ck-balloon-panel.ck-balloon-panel_arrow_se:after, .ck-balloon-panel.ck-balloon-panel_arrow_sw:before, .ck-balloon-panel.ck-balloon-panel_arrow_sw:after {\n    border-width: 15px 10px 0 10px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_s:before, .ck-balloon-panel.ck-balloon-panel_arrow_se:before, .ck-balloon-panel.ck-balloon-panel_arrow_sw:before {\n    border-color: #bfbfbf transparent transparent; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_s:after, .ck-balloon-panel.ck-balloon-panel_arrow_se:after, .ck-balloon-panel.ck-balloon-panel_arrow_sw:after {\n    border-color: white transparent transparent transparent;\n    margin-bottom: 2px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_n:before, .ck-balloon-panel.ck-balloon-panel_arrow_n:after {\n    left: 50%;\n    margin-left: -10px;\n    top: -15px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_nw:before, .ck-balloon-panel.ck-balloon-panel_arrow_nw:after {\n    left: 20px;\n    top: -15px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_ne:before, .ck-balloon-panel.ck-balloon-panel_arrow_ne:after {\n    right: 20px;\n    top: -15px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_s:before, .ck-balloon-panel.ck-balloon-panel_arrow_s:after {\n    left: 50%;\n    margin-left: -10px;\n    bottom: -15px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_sw:before, .ck-balloon-panel.ck-balloon-panel_arrow_sw:after {\n    left: 20px;\n    bottom: -15px; }\n  .ck-balloon-panel.ck-balloon-panel_arrow_se:before, .ck-balloon-panel.ck-balloon-panel_arrow_se:after {\n    right: 20px;\n    bottom: -15px; }\n\n.ck-editor .ck-sticky-panel .ck-sticky-panel__content_sticky {\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  border-width: 0 1px 1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n\n.ck-editor {\n  position: relative; }\n\n.ck-editor__top .ck-sticky-panel .ck-toolbar {\n  z-index: 999;\n  background: #f7f7f7;\n  border-bottom-width: 0; }\n  .ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners,\n  .ck-rounded-corners .ck-editor__top .ck-sticky-panel .ck-toolbar {\n    border-radius: 2px;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n\n.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar {\n  border-bottom-width: 1px; }\n  .ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners,\n  .ck-rounded-corners .ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar {\n    border-radius: 2px;\n    border-radius: 0; }\n\n.ck-editor__editable {\n  border: 1px solid #bfbfbf; }\n  .ck-editor__editable.ck-rounded-corners,\n  .ck-rounded-corners .ck-editor__editable {\n    border-radius: 2px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n', ''])
	}, function(e) {
		e.exports = function(e) {
			var t = 'undefined' != typeof window && window.location;
			if (!t) throw new Error('fixUrls requires window.location');
			if (!e || 'string' != typeof e) return e;
			var n = t.protocol + '//' + t.host,
				o = n + t.pathname.replace(/\/[^\/]*$/, '/'),
				i = e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
					var i = t.trim().replace(/^"(.*)"$/, function(e, t) {
						return t
					}).replace(/^'(.*)'$/, function(e, t) {
						return t
					});
					if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
					var a;
					return a = 0 === i.indexOf('//') ? i : 0 === i.indexOf('/') ? n + i : o + i.replace(/^\.\//, ''), 'url(' + JSON.stringify(a) + ')'
				});
			return i
		}
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10l8 6-1-3.982c3.417 0 8.616.869 10 3.982 0-5.983-6.601-7.96-10-7.96 0-.85 1-3.32 1-4.04l-8 6z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 16l1-3.982c-3.417 0-8.616.869-10 3.982 0-5.983 6.601-7.96 10-7.96 0-.85-1-3.32-1-4.04l8 6-8 6z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.135 10.409c.361.248.654.56.88.934.225.375.338.816.338 1.324 0 .609-.128 1.123-.385 1.543-.256.42-.624.751-1.103.994a5.908 5.908 0 0 1-1.755.55c-.663.107-1.442.16-2.338.16H4.539v-.66a22.5 22.5 0 0 0 .66-.076c.265-.033.45-.073.558-.118.208-.085.35-.196.427-.334.076-.138.114-.317.114-.537V5.732c0-.203-.031-.372-.093-.507s-.211-.254-.448-.355a3.326 3.326 0 0 0-.61-.182 14.136 14.136 0 0 0-.608-.114v-.66h6.52c1.64 0 2.825.226 3.552.677.727.45 1.09 1.116 1.09 1.995 0 .406-.08.763-.244 1.07a2.388 2.388 0 0 1-.702.8 4.214 4.214 0 0 1-.99.54c-.383.153-.795.28-1.234.381v.16c.44.046.896.143 1.37.292.473.15.885.343 1.234.58zm-2.723-3.611c0-.665-.187-1.184-.562-1.556-.375-.372-.937-.558-1.687-.558-.107 0-.247.004-.419.012l-.444.021v4.449h.44c.913 0 1.587-.213 2.021-.639.434-.425.651-1.002.651-1.73zm.592 5.759c0-.835-.248-1.475-.744-1.92-.496-.445-1.21-.668-2.14-.668a22.977 22.977 0 0 0-.82.034v4.389c.05.208.209.385.474.528.265.144.586.216.964.216.67 0 1.216-.225 1.636-.676.42-.452.63-1.086.63-1.903z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M16.628 4.5c-.154.006-.38.039-.678.1a2.11 2.11 0 0 0-.726.272c-.188.127-.317.388-.388.785-.072.396-.108.88-.108 1.453v5.096c0 .65-.135 1.214-.405 1.693-.27.479-.624.873-1.065 1.18a4.49 4.49 0 0 1-1.375.641c-.482.13-.943.194-1.383.194-.705 0-1.333-.092-1.883-.277-.55-.184-1.013-.433-1.388-.747a3.143 3.143 0 0 1-.834-1.078 2.986 2.986 0 0 1-.28-1.268V5.615c0-.192-.032-.353-.096-.483-.063-.13-.191-.249-.384-.359a1.93 1.93 0 0 0-.528-.186 4.137 4.137 0 0 0-.529-.087v-.586H9.46V4.5c-.154.006-.348.03-.582.075a3.874 3.874 0 0 0-.516.124c-.188.066-.313.176-.376.33a1.313 1.313 0 0 0-.095.504v6.475c0 .313.034.642.103.987.069.344.205.664.409.962.215.303.506.55.875.743.37.193.876.29 1.52.29.606 0 1.114-.097 1.524-.29a2.54 2.54 0 0 0 .97-.76c.226-.297.386-.608.48-.933.093-.325.14-.652.14-.983V7.218c0-.612-.045-1.111-.133-1.5-.088-.388-.217-.642-.388-.763-.192-.138-.455-.245-.788-.322a5.096 5.096 0 0 0-.764-.133v-.586h4.79V4.5z" fill="#454545"/><path fill="#585858" d="M4 17h12v1H4z"/></g></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.825 3.914l-.126.558a5.701 5.701 0 0 0-.685.076c-.282.045-.49.088-.626.127-.237.073-.406.186-.508.338a1.586 1.586 0 0 0-.22.5l-2.03 8.769a1.24 1.24 0 0 0-.034.27c.001.13.03.24.086.33.056.09.157.17.304.237.085.04.27.086.558.14.288.053.502.086.643.097l-.127.558H5.656l.127-.558.677-.05c.293-.023.501-.057.625-.102a1.11 1.11 0 0 0 .5-.326c.112-.138.188-.306.228-.503l2.02-8.778a1.428 1.428 0 0 0 .035-.305.59.59 0 0 0-.072-.295c-.048-.085-.148-.161-.3-.229a3.457 3.457 0 0 0-.622-.19 5.001 5.001 0 0 0-.58-.106l.128-.558h5.403z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M11.893 5.376c.123.01.23.046.333.114l5.6 3.967.004 1.017-5.6 4.033a.633.633 0 0 1-.509.101.63.63 0 0 1-.473-.708.642.642 0 0 1 .252-.407l4.89-3.522-4.886-3.461c-.036-.027-.036-.027-.069-.057a.658.658 0 0 1-.15-.219.633.633 0 0 1 .228-.751.66.66 0 0 1 .291-.105c.044-.003.044-.003.089-.002zm-3.697.002a.66.66 0 0 1 .291.105.633.633 0 0 1 .21.791.664.664 0 0 1-.201.236L3.61 9.971l4.89 3.522c.036.027.036.027.069.057a.649.649 0 0 1 .189.394.63.63 0 0 1-.7.676.655.655 0 0 1-.288-.113l-5.6-4.033.004-1.017 5.6-3.967a.685.685 0 0 1 .333-.114c.045-.001.045-.001.089.002z" fill="#353535"/></svg>'
	}, function(e, t, n) {
		var o = n(19);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Colors configured by the user.\n *\n * @type Map\n * @example\n *\t\t$ck-colors: ( \'foreground\': red );\n * @see $_ck-colors\n */\n/**\n * Internal map with default colors.\n *\n * @type Map\n * @see ck-color-add\n */\n/**\n * Returns a color of given name and lightness offset.\n *\n * @param {String} $name [ \'background\' ] - Name of the color.\n * @param {Number} $offset [ 0 ] - Offset of the lightness.\n * @return {String}\n * @see $_ck-colors\n */\n/**\n * Adds a color to internal color map.\n *\n * @example\n *\t\t@include ck-color-add( ( \'special\': yellow, \'hover\': #00FF00 ) );\n * @param {Map} $map - A map with new colors.\n * @see $_ck-colors\n */\n/**\n * Default border-radius value.\n *\n */\n/**\n * Implements rounded corner interface for .ck-rounded-corners class.\n *\n * @see $ck-border-radius\n */\n/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\ncode {\n  background-color: rgba(200, 200, 200, 0.3);\n  padding: 0.2em;\n  border-radius: 2px; }\n', ''])
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.061 15.51v-.882c1.395-.847 2.345-1.633 2.85-2.358.37-.533.554-1.162.554-1.887 0-.437-.082-.759-.246-.964-.15-.205-.328-.307-.533-.307-.137 0-.328.048-.574.143-.37.123-.67.185-.902.185-.547 0-1.033-.205-1.456-.615-.424-.41-.636-.923-.636-1.538 0-.698.212-1.238.636-1.62a3.002 3.002 0 0 1 2.05-.78c.93 0 1.757.39 2.482 1.17.724.778 1.087 1.742 1.087 2.89 0 1.614-.602 3.084-1.805 4.41-.807.875-1.976 1.593-3.507 2.153zm-8.386 0v-.882c1.394-.847 2.345-1.633 2.85-2.358.37-.533.554-1.162.554-1.887 0-.437-.082-.759-.246-.964-.15-.205-.328-.307-.533-.307-.137 0-.328.048-.574.143-.37.123-.67.185-.903.185-.547 0-1.032-.205-1.456-.615-.424-.41-.636-.923-.636-1.538 0-.698.212-1.238.636-1.62a3.002 3.002 0 0 1 2.051-.78c.93 0 1.757.39 2.481 1.17.725.778 1.087 1.742 1.087 2.89 0 1.614-.601 3.084-1.804 4.41-.807.875-1.976 1.593-3.507 2.153z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e, t, n) {
		var o = n(22);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, 'blockquote {\n  border-left: solid 5px #CCC;\n  padding-left: 20px;\n  margin-left: 0;\n  font-style: italic;\n  overflow: hidden; }\n', ''])
	}, function(e, t, n) {
		var o = n(24);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Colors configured by the user.\n *\n * @type Map\n * @example\n *\t\t$ck-colors: ( \'foreground\': red );\n * @see $_ck-colors\n */\n/**\n * Internal map with default colors.\n *\n * @type Map\n * @see ck-color-add\n */\n/**\n * Returns a color of given name and lightness offset.\n *\n * @param {String} $name [ \'background\' ] - Name of the color.\n * @param {Number} $offset [ 0 ] - Offset of the lightness.\n * @return {String}\n * @see $_ck-colors\n */\n/**\n * Adds a color to internal color map.\n *\n * @example\n *\t\t@include ck-color-add( ( \'special\': yellow, \'hover\': #00FF00 ) );\n * @param {Map} $map - A map with new colors.\n * @see $_ck-colors\n */\n/**\n * A visual style of element\'s inner shadow (i.e. input).\n */\n/**\n * A visual style of element\'s drop shadow (i.e. panel).\n */\n/**\n * A helper to combine multiple shadows.\n */\n/**\n * Gives an element a drop shadow so it looks like a floating panel.\n */\n/**\n * A visual style of focused element\'s outer shadow.\n */\n/**\n * A visual style of focused element\'s border or outline.\n */\n/**\n * An opacity value of disabled UI item.\n */\n/**\n * A class which indicates that an element holding it is disabled.\n */\n/**\n * A visual style of focused element\'s border.\n */\n/**\n * Brings visual styling for :focus state.\n */\n/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n.ck-widget {\n  margin: 0.8em 0;\n  padding: 0; }\n  .ck-widget.ck-widget_selected, .ck-widget.ck-widget_selected:hover {\n    outline: 3px solid #48a3f5; }\n  .ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected {\n    outline: 3px solid #dddddd; }\n  .ck-widget:hover {\n    outline: 3px solid #ffd25c; }\n  .ck-widget .ck-editable {\n    border: 1px solid transparent; }\n    .ck-widget .ck-editable.ck-editable_focused, .ck-widget .ck-editable:focus {\n      outline: none;\n      border: 1px solid #48a3f5;\n      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1) inset;\n      background-color: white; }\n', ''])
	}, function(e) {
		e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M5.414 6.749L2.903 4.237a.49.49 0 1 1 .694-.694L6.394 6.34a10.662 10.662 0 0 1 2.127-.53c.366-.051.734-.081 1.103-.095a10.628 10.628 0 0 1 1.524.07c1.109.134 2.204.449 3.243.936a9.65 9.65 0 0 1 2.12 1.331c.276.231.542.484.784.766.18.211.349.439.488.692.169.307.301.664.301 1.039 0 .375-.132.732-.301 1.039a4.143 4.143 0 0 1-.488.691 6.668 6.668 0 0 1-.784.767 9.628 9.628 0 0 1-2.092 1.318l2.196 2.197a.49.49 0 1 1-.694.694l-2.485-2.484-.008.003-.931-.931.009-.003-6.215-6.215a9.887 9.887 0 0 0-.945.444l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.483 8.596a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2 1.497 1.497 0 0 0-.108.241.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226 2.613 2.613 0 0 0 .234.379l3.463 3.594a10.565 10.565 0 0 1-2.125-1 9.096 9.096 0 0 1-1.015-.721 6.672 6.672 0 0 1-.798-.764 4.325 4.325 0 0 1-.502-.69c-.184-.319-.329-.693-.329-1.089 0-.375.131-.732.301-1.039.139-.253.307-.481.488-.692.225-.263.471-.5.728-.719a9.538 9.538 0 0 1 2.096-1.341l.019-.009zm6.674.401a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112 6.86 6.86 0 0 0 .727-.613c.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286a1.966 1.966 0 0 0 .148-.292.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891 10.119 10.119 0 0 0-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.449 2.449 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>'
	}, function(e, t, n) {
		var o = n(27);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n.cke-text-alternative-form {\n  padding: 1.2em;\n  overflow: hidden; }\n  .cke-text-alternative-form:focus {\n    outline: none; }\n  .cke-text-alternative-form .ck-label {\n    margin-bottom: 0.4em; }\n  .cke-text-alternative-form__actions {\n    clear: both;\n    padding-top: 1.2em; }\n    .cke-text-alternative-form__actions .ck-button {\n      float: right; }\n      .cke-text-alternative-form__actions .ck-button + .ck-button {\n        margin-right: 0.64em; }\n        .cke-text-alternative-form__actions .ck-button + .ck-button + .ck-button {\n          float: left; }\n', ''])
	}, function(e, t, n) {
		var o = n(29);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n.ck-editor__editable .image {\n  text-align: center;\n  clear: both; }\n  .ck-editor__editable .image.image-style-side, .ck-editor__editable .image.image-style-align-left, .ck-editor__editable .image.image-style-align-center, .ck-editor__editable .image.image-style-align-right {\n    max-width: 50%; }\n  .ck-editor__editable .image.image-style-side {\n    float: right;\n    margin-left: 2em; }\n  .ck-editor__editable .image.image-style-align-left {\n    float: left;\n    margin-right: 2em; }\n  .ck-editor__editable .image.image-style-align-center {\n    margin-left: auto;\n    margin-right: auto; }\n  .ck-editor__editable .image.image-style-align-right {\n    float: right;\n    margin-left: 2em; }\n\n.ck-editor__editable .image > img {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%; }\n', ''])
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.994C2 16.102 2.895 17 3.994 17h12.012A2 2 0 0 0 18 14.994V5.006A2.001 2.001 0 0 0 16.006 3H3.994A2 2 0 0 0 2 5.006v9.988zm1-9.992C3 4.45 3.45 4 4.007 4h11.986A1.01 1.01 0 0 1 17 5.002v9.996C17 15.55 16.55 16 15.993 16H4.007A1.01 1.01 0 0 1 3 14.998V5.002zm1.024 10H16v-3.096l-2.89-4.263-3.096 5.257-3.003-2.103L4 13.96l.024 1.043zM6.406 6A1.4 1.4 0 0 0 5 7.393a1.4 1.4 0 0 0 1.406 1.393 1.4 1.4 0 0 0 1.407-1.393A1.4 1.4 0 0 0 6.406 6z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e) {
		e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="none" fill-rule="evenodd"><rect width="700" height="250" fill="#F7F7F7" rx="4"/><text fill="#5F6F77" font-family="Arial,sans-serif" font-size="24"><tspan x="247.9" y="135">Uploading image\u2026</tspan></text></g></svg>\n'
	}, function(e, t, n) {
		var o = n(33);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, 'figure.image {\n  position: relative;\n  overflow: hidden; }\n  figure.image.ck-appear {\n    animation: fadeIn 700ms; }\n  figure.image.ck-infinite-progress::before {\n    content: "";\n    width: 30px;\n    height: 2px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.1);\n    animation-name: readingProgressAnimation;\n    animation-duration: 1500ms;\n    animation-iteration-count: infinite;\n    transition-timing-function: linear; }\n  figure.image.ck-image-upload-placeholder > img {\n    width: 100%; }\n  figure.image .ck-progress-bar {\n    height: 2px;\n    width: 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: #6ab5f9;\n    transition: width 100ms; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes readingProgressAnimation {\n  0% {\n    width: 30px;\n    right: 0; }\n  50% {\n    width: 45px; }\n  100% {\n    right: 100%; } }\n', ''])
	}, function(e, t, n) {
		var o = n(35);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n/**\n * Base font size.\n *\n * @see $ck-font-sizes\n */\n/**\n * Base line height.\n */\n/**\n * Base font face.\n *\n */\n/**\n * Base font sizes for scaling.\n *\n * @see ck-font-size\n */\n/**\n * Returns font-size in units for given level.\n *\n * @param {Number} $level [ 0 ] - Size of the font.\n * @return {String}\n * @see $ck-font-sizes\n * @see $ck-font-size-base\n */\n.ck-heading_heading1 {\n  font-size: 1.5em; }\n\n.ck-heading_heading2 {\n  font-size: 1.3em; }\n\n.ck-heading_heading3 {\n  font-size: 1.1em; }\n\n[class*="ck-heading_"] {\n  line-height: 21.6px;\n  padding: 9.6px; }\n\n[class*="ck-heading_heading"] {\n  font-weight: bold; }\n\n.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label {\n  width: 8em; }\n', ''])
	}, function(e, t, n) {
		var o = n(37);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '.ck-placeholder::before {\n  content: attr(data-placeholder);\n  cursor: text;\n  color: #c2c2c2;\n  pointer-events: none; }\n', ''])
	}, function(e, t, n) {
		var o = n(39);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Colors configured by the user.\n *\n * @type Map\n * @example\n *\t\t$ck-colors: ( \'foreground\': red );\n * @see $_ck-colors\n */\n/**\n * Internal map with default colors.\n *\n * @type Map\n * @see ck-color-add\n */\n/**\n * Returns a color of given name and lightness offset.\n *\n * @param {String} $name [ \'background\' ] - Name of the color.\n * @param {Number} $offset [ 0 ] - Offset of the lightness.\n * @return {String}\n * @see $_ck-colors\n */\n/**\n * Adds a color to internal color map.\n *\n * @example\n *\t\t@include ck-color-add( ( \'special\': yellow, \'hover\': #00FF00 ) );\n * @param {Map} $map - A map with new colors.\n * @see $_ck-colors\n */\n/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n/**\n * Base font size.\n *\n * @see $ck-font-sizes\n */\n/**\n * Base line height.\n */\n/**\n * Base font face.\n *\n */\n/**\n * Base font sizes for scaling.\n *\n * @see ck-font-size\n */\n/**\n * Returns font-size in units for given level.\n *\n * @param {Number} $level [ 0 ] - Size of the font.\n * @return {String}\n * @see $ck-font-sizes\n * @see $ck-font-size-base\n */\n.ck-editor__editable .image > figcaption {\n  color: #333333;\n  background-color: #f7f7f7;\n  padding: 0.8em;\n  font-size: 0.75em;\n  outline-offset: -1px; }\n', ''])
	}, function(e) {
		e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h16v1H2v-1zm15-2H3V6h14v8zm-1-7H4v6h12V7zM2 3h16v1H2V3z"/></svg>'
	}, function(e) {
		e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 15h16v1H2v-1zm11-3h5v1h-5v-1zm-2 1H2V6h9v7zm-1-6H3v5h7V7zm3 2h5v1h-5V9zm0-3h5v1h-5V6zM2 3h16v1H2V3z"/></svg>'
	}, function(e) {
		e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M2 15h16v1H2v-1zm13-2H5V6h10v7zm-1-6H6v5h8V7zM2 3h16v1H2V3z" fill-rule="nonzero"/></svg>'
	}, function(e) {
		e.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 16H2v-1h16v1zM6.978 13H2v-1h4.978v1zM18 6v7H9V6h9zm-1 6V7h-7v5h7zM6.978 10H2V9h4.978v1zm0-3H2V6h4.978v1zM18 4H2V3h16v1z"/></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#222" fill-rule="evenodd"><path d="M14.2 10.956l1.227-1.227a3.995 3.995 0 0 0-.002-5.654 4 4 0 0 0-5.654-.002L7.698 6.145a3.995 3.995 0 0 0 .003 5.654c.39.39.84.682 1.32.878l-.305-.307.638-.638a2.99 2.99 0 0 1-.946-.64 2.995 2.995 0 0 1-.003-4.24l2.073-2.072a3 3 0 0 1 4.242 4.242l-1.226 1.227.707.707z"/><path d="M10.166 7.405c.41.192.795.457 1.133.796a3.995 3.995 0 0 1 .003 5.654l-2.073 2.072a4 4 0 0 1-5.654-.002 3.995 3.995 0 0 1-.002-5.654l1.362-1.363.707.707-1.362 1.363a3 3 0 0 0 4.243 4.243l2.072-2.073a2.995 2.995 0 0 0-.003-4.24 2.987 2.987 0 0 0-1.196-.733l.77-.77z"/></g></svg>'
	}, function(e, t, n) {
		var o = n(46);
		'string' == typeof o && (o = [
			[e.i, o, '']
		]);
		var i = {},
			a;
		i.transform = a;
		n(1)(o, i);
		o.locals && (e.exports = o.locals), !1
	}, function(e, t, n) {
		t = e.exports = n(0)(void 0), t.push([e.i, '/**\n * Default spacing value ("unit").\n *\n */\n/**\n * Internal map with default spacings.\n *\n * @type Map\n * @see ck-spacing\n */\n/**\n * Returns a spacing value with units for given name.\n *\n * @param {String} $spacing [ \'standard\' ] - Spacing level.\n * @return {String}\n * @see $ck-def-spacing\n * @see $ck-def-spacings\n */\n.ck-link-form {\n  padding: 1.2em;\n  overflow: hidden; }\n  .ck-link-form:focus {\n    outline: none; }\n  .ck-link-form .ck-input-text {\n    width: 100%; }\n  .ck-link-form .ck-label {\n    margin-bottom: 0.2em; }\n  .ck-link-form__actions {\n    clear: both;\n    padding-top: 1.2em; }\n    .ck-link-form__actions .ck-button {\n      float: right; }\n      .ck-link-form__actions .ck-button + .ck-button {\n        margin-right: 0.64em; }\n      .ck-link-form__actions .ck-button:last-child {\n        float: left;\n        margin-right: 2.56em; }\n', ''])
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 17h10v-1H7v1zM6 4v1h13V4H6zm1 6v1h11v-1H7zM2 2.5c0 .277.223.5.5.5H3v3.5a.499.499 0 1 0 1 0v-4c0-.277-.223-.5-.5-.5h-1c-.277 0-.5.223-.5.5zM2.5 8a.499.499 0 1 0 0 1H4v1H2.5c-.277 0-.5.223-.5.5v2c0 .277.223.5.5.5h2a.499.499 0 1 0 0-1H3v-1h1.5a.46.46 0 0 0 .188-.031.45.45 0 0 0 .28-.281A.461.461 0 0 0 5 10.5v-2a.46.46 0 0 0-.031-.187.45.45 0 0 0-.282-.282.463.463 0 0 0-.125-.03H2.5V8zm2.352 10.853a.493.493 0 0 0 .148-.35v-4.005A.493.493 0 0 0 4.505 14h-2.01a.494.494 0 0 0-.495.5c0 .268.222.5.495.5H4v1H2.495a.494.494 0 0 0-.495.5c0 .268.222.5.495.5H4v1H2.495a.494.494 0 0 0-.495.5c0 .268.222.5.495.5h2.01a.49.49 0 0 0 .351-.146z" fill="#454545" fill-rule="evenodd"/></svg>'
	}, function(e) {
		e.exports = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 16v1h10v-1H6zM6 4v1h12V4H6zm0 6v1h11v-1H6zM1 4.5C1 3.672 1.666 3 2.5 3 3.328 3 4 3.666 4 4.5 4 5.328 3.334 6 2.5 6 1.672 6 1 5.334 1 4.5zm0 6C1 9.672 1.666 9 2.5 9c.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5zm0 6c0-.828.666-1.5 1.5-1.5.828 0 1.5.666 1.5 1.5 0 .828-.666 1.5-1.5 1.5-.828 0-1.5-.666-1.5-1.5z" fill="#454545" fill-rule="evenodd"/></svg>'
	}])['default']
});
//# sourceMappingURL=ckeditor.js.map
;CKEDITOR_TRANSLATIONS.add('zh-cn',{a:"无法上传文件:",b:"加粗",c:"代码",d:"下划线",e:"倾斜",f:"块引用",g:"标题类型",h:"标题",i:"段落",j:"标题 1",k:"标题 2",l:"标题 3",m:"编号列表",n:"项目列表",o:"超链接",p:"图像小部件",q:"更改图片替换文本",r:"输入图片标题",s:"图片通栏显示",t:"图片侧边显示",u:"图片左侧对齐",v:"图片居中",w:"图片右侧对齐",x:"插入图像",y:"保存",z:"取消",aa:"取消超链接",ab:"超链接地址",ac:"撤销",ad:"重做",ae:"上传失败",af:"富文本编辑器",ag:"富文本编辑器， %0",ah:"替换文本"})