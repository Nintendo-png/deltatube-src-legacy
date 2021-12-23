var _____WB$wombat$assign$function_____ = function(name) {
	return(self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if(!self.__WB_pmw) {
	self.__WB_pmw = function(obj) {
		this.__WB_source = obj;
		return this;
	}
} {
	let window = _____WB$wombat$assign$function_____("window");
	let self = _____WB$wombat$assign$function_____("self");
	let document = _____WB$wombat$assign$function_____("document");
	let location = _____WB$wombat$assign$function_____("location");
	let top = _____WB$wombat$assign$function_____("top");
	let parent = _____WB$wombat$assign$function_____("parent");
	let frames = _____WB$wombat$assign$function_____("frames");
	let opener = _____WB$wombat$assign$function_____("opener");
	(function() {
		function j(a) {
			throw a;
		}
		var q = void 0,
			r = !0,
			s = null,
			t = !1,
			u, v = this;

		function y(a) {
			a = a.split(".");
			for(var b = v, c; c = a.shift();)
				if(b[c] != s) b = b[c];
				else return s;
			return b
		}

		function ba(a) {
			a.getInstance = function() {
				return a.B ? a.B : a.B = new a
			}
		}

		function ca(a) {
			var b = typeof a;
			if("object" == b)
				if(a) {
					if(a instanceof Array) return "array";
					if(a instanceof Object) return b;
					var c = Object.prototype.toString.call(a);
					if("[object Window]" == c) return "object";
					if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
					if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
				} else return "null";
			else if("function" == b && "undefined" == typeof a.call) return "object";
			return b
		}

		function da(a) {
			return a !== q
		}

		function ea(a) {
			return "array" == ca(a)
		}

		function fa(a) {
			var b = ca(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		}

		function z(a) {
			return "string" == typeof a
		}

		function ga(a) {
			var b = typeof a;
			return "object" == b && a != s || "function" == b
		}
		var ha = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
			ia = 0;

		function ja(a, b, c) {
			return a.call.apply(a.bind, arguments)
		}

		function ka(a, b, c) {
			a || j(Error());
			if(2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function() {
					var c = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(c, d);
					return a.apply(b, c)
				}
			}
			return function() {
				return a.apply(b, arguments)
			}
		}

		function la(a, b, c) {
			la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
			return la.apply(s, arguments)
		}

		function ma(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = Array.prototype.slice.call(arguments);
				b.unshift.apply(b, c);
				return a.apply(this, b)
			}
		}
		var na = Date.now || function() {
			return +new Date
		};

		function A(a, b) {
			var c = a.split("."),
				d = v;
			!(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
			for(var e; c.length && (e = c.shift());) !c.length && da(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
		}

		function B(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.i = b.prototype;
			a.prototype = new c
		}
		Function.prototype.bind = Function.prototype.bind || function(a, b) {
			if(1 < arguments.length) {
				var c = Array.prototype.slice.call(arguments, 1);
				c.unshift(this, a);
				return la.apply(s, c)
			}
			return la(this, a)
		};

		function oa(a) {
			if(!pa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(qa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(ra, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(sa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ta, "&quot;"));
			return a
		}
		var qa = /&/g,
			ra = /</g,
			sa = />/g,
			ta = /\"/g,
			pa = /[&<>\"]/;
		var C = Array.prototype,
			ua = C.indexOf ? function(a, b, c) {
				return C.indexOf.call(a, b, c)
			} : function(a, b, c) {
				c = c == s ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
				if(z(a)) return !z(b) || 1 != b.length ? -1 : a.indexOf(b, c);
				for(; c < a.length; c++)
					if(c in a && a[c] === b) return c;
				return -1
			},
			E = C.forEach ? function(a, b, c) {
				C.forEach.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = z(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
			},
			va = C.filter ? function(a, b, c) {
				return C.filter.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = [], f = 0, g = z(a) ? a.split("") : a, h = 0; h < d; h++)
					if(h in g) {
						var k = g[h];
						b.call(c, k, h, a) && (e[f++] = k)
					}
				return e
			},
			wa = C.every ? function(a, b, c) {
				return C.every.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = z(a) ? a.split("") : a, f = 0; f < d; f++)
					if(f in e && !b.call(c, e[f], f, a)) return t;
				return r
			};

		function xa(a, b) {
			var c = ua(a, b);
			0 <= c && C.splice.call(a, c, 1)
		}

		function ya(a) {
			var b = a.length;
			if(0 < b) {
				for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		}

		function za(a, b) {
			for(var c = 1; c < arguments.length; c++) {
				var d = arguments[c],
					e;
				if(ea(d) || (e = fa(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
				else if(e)
					for(var f = a.length, g = d.length, h = 0; h < g; h++) a[f + h] = d[h];
				else a.push(d)
			}
		}

		function Ba(a, b, c, d) {
			C.splice.apply(a, Ca(arguments, 1))
		}

		function Ca(a, b, c) {
			return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
		};

		function Da() {};

		function F() {
			this.a = [];
			this.e = {}
		}
		B(F, Da);
		u = F.prototype;
		u.v = 1;
		u.o = 0;
		u.K = function(a, b, c) {
			var d = this.e[a];
			d || (d = this.e[a] = []);
			var e = this.v;
			this.a[e] = a;
			this.a[e + 1] = b;
			this.a[e + 2] = c;
			this.v = e + 3;
			d.push(e);
			return e
		};
		u.t = function(a) {
			if(0 != this.o) return this.b || (this.b = []), this.b.push(a), t;
			var b = this.a[a];
			if(b) {
				var c = this.e[b];
				c && xa(c, a);
				delete this.a[a];
				delete this.a[a + 1];
				delete this.a[a + 2]
			}
			return !!b
		};
		u.h = function(a, b) {
			var c = this.e[a];
			if(c) {
				this.o++;
				for(var d = Ca(arguments, 1), e = 0, f = c.length; e < f; e++) {
					var g = c[e];
					this.a[g + 1].apply(this.a[g + 2], d)
				}
				this.o--;
				if(this.b && 0 == this.o)
					for(; c = this.b.pop();) this.t(c);
				return 0 != e
			}
			return t
		};
		u.clear = function(a) {
			if(a) {
				var b = this.e[a];
				b && (E(b, this.t, this), delete this.e[a])
			} else this.a.length = 0, this.e = {}
		};
		var Ea = window.yt && window.yt.config_ || {};
		A("yt.config_", Ea);
		var Fa = window.yt && window.yt.tokens_ || {};
		A("yt.tokens_", Fa);
		A("yt.globals_", window.yt && window.yt.globals_ || {});
		A("yt.msgs_", window.yt && window.yt.msgs_ || {});
		var Ga = window.yt && window.yt.timeouts_ || [];
		A("yt.timeouts_", Ga);
		A("yt.intervals_", window.yt && window.yt.intervals_ || []);

		function Ha(a) {
			var b = arguments;
			if(1 < b.length) {
				var c = b[0];
				Ea[c] = b[1]
			} else
				for(c in b = b[0], b) Ea[c] = b[c]
		}

		function G(a) {
			return a in Ea ? Ea[a] : q
		}

		function Ia(a) {
			return a in Fa ? Fa[a] : q
		}

		function I(a, b) {
			var c = window.setTimeout(a, b);
			Ga.push(c);
			return c
		};
		var Ja = y("yt.pubsub.instance_") || new F;
		F.prototype.subscribe = F.prototype.K;
		F.prototype.unsubscribeByKey = F.prototype.t;
		F.prototype.publish = F.prototype.h;
		F.prototype.clear = F.prototype.clear;
		A("yt.pubsub.instance_", Ja);

		function Ka(a, b) {
			var c = y("yt.pubsub.instance_");
			return c ? c.subscribe(a, function() {
				var a = arguments;
				I(function() {
					b.apply(v, a)
				}, 0)
			}, q) : 0
		}

		function La(a, b) {
			var c = y("yt.pubsub.instance_");
			return c ? c.publish.apply(c, arguments) : t
		};

		function J(a, b) {
			this.x = da(a) ? a : 0;
			this.y = da(b) ? b : 0
		}
		J.prototype.a = function() {
			return new J(this.x, this.y)
		};

		function Ma(a, b) {
			return new J(a.x - b.x, a.y - b.y)
		};

		function Na(a, b) {
			this.width = a;
			this.height = b
		}
		Na.prototype.a = function() {
			return new Na(this.width, this.height)
		};
		Na.prototype.floor = function() {
			this.width = Math.floor(this.width);
			this.height = Math.floor(this.height);
			return this
		};
		Na.prototype.round = function() {
			this.width = Math.round(this.width);
			this.height = Math.round(this.height);
			return this
		};
		Na.prototype.scale = function(a) {
			this.width *= a;
			this.height *= a;
			return this
		};

		function Oa(a, b) {
			for(var c in a) b.call(q, a[c], c, a)
		}

		function Pa() {
			var a = G("GUIDED_HELP_FLOWS"),
				b;
			for(b in a) return b
		}
		var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

		function Ra(a, b) {
			for(var c, d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for(c in d) a[c] = d[c];
				for(var f = 0; f < Qa.length; f++) c = Qa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		};
		var Sa, Ta, Ua, Va, Wa;

		function Xa() {
			return v.navigator ? v.navigator.userAgent : s
		}

		function Ya() {
			return v.navigator
		}
		Va = Ua = Ta = Sa = t;
		var Za;
		if(Za = Xa()) {
			var $a = Ya();
			Sa = 0 == Za.indexOf("Opera");
			Ta = !Sa && -1 != Za.indexOf("MSIE");
			Ua = !Sa && -1 != Za.indexOf("WebKit");
			Va = !Sa && !Ua && "Gecko" == $a.product
		}
		var ab = Sa,
			K = Ta,
			L = Va,
			M = Ua,
			bb = Ya();
		Wa = -1 != (bb && bb.platform || "").indexOf("Mac");
		var cb = !!Ya() && -1 != (Ya().appVersion || "").indexOf("X11");

		function db() {
			var a = v.document;
			return a ? a.documentMode : q
		}
		var eb;
		a: {
			var fb = "",
				gb;
			if(ab && v.opera) var hb = v.opera.version,
				fb = "function" == typeof hb ? hb() : hb;
			else if(L ? gb = /rv\:([^\);]+)(\)|;)/ : K ? gb = /MSIE\s+([^\);]+)(\)|;)/ : M && (gb = /WebKit\/(\S+)/), gb) var ib = gb.exec(Xa()),
				fb = ib ? ib[1] : "";
			if(K) {
				var jb = db();
				if(jb > parseFloat(fb)) {
					eb = String(jb);
					break a
				}
			}
			eb = fb
		}
		var kb = eb,
			lb = {};

		function N(a) {
			var b;
			if(!(b = lb[a])) {
				b = 0;
				for(var c = String(kb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
					var g = c[f] || "",
						h = d[f] || "",
						k = RegExp("(\\d*)(\\D*)", "g"),
						l = RegExp("(\\d*)(\\D*)", "g");
					do {
						var p = k.exec(g) || ["", "", ""],
							n = l.exec(h) || ["", "", ""];
						if(0 == p[0].length && 0 == n[0].length) break;
						b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == n[2].length) ? -1 : (0 == p[2].length) > (0 == n[2].length) ? 1 : 0) || (p[2] < n[2] ? -1 : p[2] > n[2] ? 1 : 0)
					} while (0 == b)
				}
				b = lb[a] = 0 <= b
			}
			return b
		}
		var mb = v.document,
			nb = !mb || !K ? q : db() || ("CSS1Compat" == mb.compatMode ? parseInt(kb, 10) : 5);
		var ob, pb = !K || K && 9 <= nb,
			qb = !L && !K || K && K && 9 <= nb || L && N("1.9.1"),
			rb = K && !N("9"),
			sb = K || ab || M;

		function tb(a) {
			a = a.className;
			return z(a) && a.match(/\S+/g) || []
		}

		function O(a, b) {
			var c = tb(a),
				d = Ca(arguments, 1),
				e = c.length + d.length;
			ub(c, d);
			a.className = c.join(" ");
			return c.length == e
		}

		function P(a, b) {
			var c = tb(a),
				d = Ca(arguments, 1),
				c = vb(c, d);
			a.className = c.join(" ")
		}

		function ub(a, b) {
			for(var c = 0; c < b.length; c++) 0 <= ua(a, b[c]) || a.push(b[c])
		}

		function vb(a, b) {
			return va(a, function(a) {
				return !(0 <= ua(b, a))
			})
		}

		function wb(a, b, c) {
			var d = tb(a);
			z(b) ? xa(d, b) : ea(b) && (d = vb(d, b));
			z(c) && !(0 <= ua(d, c)) ? d.push(c) : ea(c) && ub(d, c);
			a.className = d.join(" ")
		}

		function Q(a, b) {
			var c = tb(a);
			return 0 <= ua(c, b)
		}

		function xb(a, b, c) {
			c ? O(a, b) : P(a, b)
		};

		function yb(a) {
			return a ? new zb(Ab(a)) : ob || (ob = new zb)
		}

		function R(a) {
			return z(a) ? document.getElementById(a) : a
		}

		function Bb(a, b) {
			var c = b || document;
			return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Cb("*", a, b)
		}

		function S(a, b) {
			var c = b || document,
				d = s;
			return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Bb(a, b)[0]) || s
		}

		function Cb(a, b, c) {
			var d = document;
			c = c || d;
			a = a && "*" != a ? a.toUpperCase() : "";
			if(c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
			if(b && c.getElementsByClassName) {
				c = c.getElementsByClassName(b);
				if(a) {
					for(var d = {}, e = 0, f = 0, g; g = c[f]; f++) a == g.nodeName && (d[e++] = g);
					d.length = e;
					return d
				}
				return c
			}
			c = c.getElementsByTagName(a || "*");
			if(b) {
				d = {};
				for(f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && 0 <= ua(a.split(/\s+/), b) && (d[e++] = g);
				d.length = e;
				return d
			}
			return c
		}
		var Db = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			frameborder: "frameBorder",
			height: "height",
			maxlength: "maxLength",
			role: "role",
			rowspan: "rowSpan",
			type: "type",
			usemap: "useMap",
			valign: "vAlign",
			width: "width"
		};

		function Eb(a) {
			a = a.document;
			a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
			return new Na(a.clientWidth, a.clientHeight)
		}

		function Fb(a, b, c) {
			var d = arguments,
				e = document,
				f = d[0],
				g = d[1];
			if(!pb && g && (g.name || g.type)) {
				f = ["<", f];
				g.name && f.push(' name="', oa(g.name), '"');
				if(g.type) {
					f.push(' type="', oa(g.type), '"');
					var h = {};
					Ra(h, g);
					delete h.type;
					g = h
				}
				f.push(">");
				f = f.join("")
			}
			f = e.createElement(f);
			if(g)
				if(z(g)) f.className = g;
				else if(ea(g)) O.apply(s, [f].concat(g));
			else {
				var k = f;
				Oa(g, function(a, b) {
					"style" == b ? k.style.cssText = a : "class" == b ? k.className = a : "for" == b ? k.htmlFor = a : b in Db ? k.setAttribute(Db[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? k.setAttribute(b, a) : k[b] = a
				})
			}
			if(2 < d.length)
				for(var l = e, p = f, e = function(a) {
						a && p.appendChild(z(a) ? l.createTextNode(a) : a)
					}, g = 2; g < d.length; g++)
					if(h = d[g], fa(h) && !(ga(h) && 0 < h.nodeType)) {
						var n = E,
							m;
						a: {
							if((m = h) && "number" == typeof m.length) {
								if(ga(m)) {
									m = "function" == typeof m.item || "string" == typeof m.item;
									break a
								}
								if("function" == ca(m)) {
									m = "function" == typeof m.item;
									break a
								}
							}
							m = t
						}
						n(m ? ya(h) : h, e)
					} else e(h);
			return f
		}

		function Gb(a) {
			for(var b; b = a.firstChild;) a.removeChild(b)
		}

		function Hb(a) {
			return a && a.parentNode ? a.parentNode.removeChild(a) : s
		}

		function Ab(a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		}
		var Ib = {
				SCRIPT: 1,
				STYLE: 1,
				HEAD: 1,
				IFRAME: 1,
				OBJECT: 1
			},
			Jb = {
				IMG: " ",
				BR: "\n"
			};

		function Kb(a, b, c) {
			if(!(a.nodeName in Ib))
				if(3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
				else if(a.nodeName in Jb) b.push(Jb[a.nodeName]);
			else
				for(a = a.firstChild; a;) Kb(a, b, c), a = a.nextSibling
		}

		function Lb(a, b, c) {
			if(!b && !c) return s;
			var d = b ? b.toUpperCase() : s;
			return Mb(a, function(a) {
				return(!d || a.nodeName == d) && (!c || Q(a, c))
			})
		}

		function Mb(a, b, c) {
			for(var d = c == s, e = 0; a && (d || e <= c);) {
				if(b(a)) return a;
				a = a.parentNode;
				e++
			}
			return s
		}

		function zb(a) {
			this.a = a || v.document || document
		}
		zb.prototype.createElement = function(a) {
			return this.a.createElement(a)
		};

		function Nb(a) {
			return "CSS1Compat" == a.a.compatMode
		}

		function Ob(a) {
			var b = a.a;
			a = !M && "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
			b = b.parentWindow || b.defaultView;
			return new J(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
		}
		zb.prototype.appendChild = function(a, b) {
			a.appendChild(b)
		};

		function Pb(a, b, c, d) {
			this.top = a;
			this.right = b;
			this.bottom = c;
			this.left = d
		}
		Pb.prototype.a = function() {
			return new Pb(this.top, this.right, this.bottom, this.left)
		};

		function Qb(a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d
		}
		Qb.prototype.a = function() {
			return new Qb(this.left, this.top, this.width, this.height)
		};

		function Rb(a, b, c) {
			z(b) ? Sb(a, c, b) : Oa(b, ma(Sb, a))
		}

		function Sb(a, b, c) {
			var d;
			a: if(d = String(c).replace(/\-([a-z])/g, function(a, b) {
					return b.toUpperCase()
				}), a.style[d] === q) {
				var e = M ? "Webkit" : L ? "Moz" : K ? "ms" : ab ? "O" : s,
					f = z(q) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
				c = c.replace(RegExp("(^" + (f ? "|[" + f + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
					return b + c.toUpperCase()
				});
				e = e + c;
				if(a.style[e] !== q) {
					d = e;
					break a
				}
			}
			d && (a.style[d] = b)
		}

		function T(a, b) {
			var c = Ab(a);
			return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, s)) ? c[b] || c.getPropertyValue(b) || "" : ""
		}

		function Tb(a, b) {
			return T(a, b) || (a.currentStyle ? a.currentStyle[b] : s) || a.style && a.style[b]
		}

		function Ub(a) {
			var b = a.getBoundingClientRect();
			K && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
			return b
		}

		function Vb(a) {
			if(K && !(K && 8 <= nb)) return a.offsetParent;
			var b = Ab(a),
				c = Tb(a, "position"),
				d = "fixed" == c || "absolute" == c;
			for(a = a.parentNode; a && a != b; a = a.parentNode)
				if(c = Tb(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
			return s
		}

		function Wb(a) {
			for(var b = new Pb(0, Infinity, Infinity, 0), c = yb(a), d = c.a.body, e = c.a.documentElement, f = !M && "CSS1Compat" == c.a.compatMode ? c.a.documentElement : c.a.body; a = Vb(a);)
				if((!K || 0 != a.clientWidth) && (!M || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != Tb(a, "overflow")) {
					var g = Xb(a),
						h;
					h = a;
					if(L && !N("1.9")) {
						var k = parseFloat(T(h, "borderLeftWidth"));
						if(Yb(h)) var l = h.offsetWidth - h.clientWidth - k - parseFloat(T(h, "borderRightWidth")),
							k = k + l;
						h = new J(k, parseFloat(T(h, "borderTopWidth")))
					} else h = new J(h.clientLeft, h.clientTop);
					g.x += h.x;
					g.y += h.y;
					b.top = Math.max(b.top, g.y);
					b.right = Math.min(b.right, g.x + a.clientWidth);
					b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
					b.left = Math.max(b.left, g.x)
				}
			d = f.scrollLeft;
			f = f.scrollTop;
			b.left = Math.max(b.left, d);
			b.top = Math.max(b.top, f);
			c = Eb(c.a.parentWindow || c.a.defaultView || window);
			b.right = Math.min(b.right, d + c.width);
			b.bottom = Math.min(b.bottom, f + c.height);
			return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : s
		}

		function Xb(a) {
			var b, c = Ab(a),
				d = Tb(a, "position"),
				e = L && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
				f = new J(0, 0),
				g;
			b = c ? Ab(c) : document;
			g = K && !(K && 9 <= nb) && !Nb(yb(b)) ? b.body : b.documentElement;
			if(a == g) return f;
			if(a.getBoundingClientRect) b = Ub(a), a = Ob(yb(c)), f.x = b.left + a.x, f.y = b.top + a.y;
			else if(c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
			else {
				b = a;
				do {
					f.x += b.offsetLeft;
					f.y += b.offsetTop;
					b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
					if(M && "fixed" == Tb(b, "position")) {
						f.x += c.body.scrollLeft;
						f.y += c.body.scrollTop;
						break
					}
					b = b.offsetParent
				} while (b && b != a);
				if(ab || M && "absolute" == d) f.y -= c.body.offsetTop;
				for(b = a;
					(b = Vb(b)) && b != c.body && b != g;)
					if(f.x -= b.scrollLeft, !ab || "TR" != b.tagName) f.y -= b.scrollTop
			}
			return f
		}

		function Zb(a, b) {
			"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
			return a
		}

		function $b(a) {
			if("none" != Tb(a, "display")) return ac(a);
			var b = a.style,
				c = b.display,
				d = b.visibility,
				e = b.position;
			b.visibility = "hidden";
			b.position = "absolute";
			b.display = "inline";
			a = ac(a);
			b.display = c;
			b.position = e;
			b.visibility = d;
			return a
		}

		function ac(a) {
			var b = a.offsetWidth,
				c = a.offsetHeight,
				d = M && !b && !c;
			return(!da(b) || d) && a.getBoundingClientRect ? (a = Ub(a), new Na(a.right - a.left, a.bottom - a.top)) : new Na(b, c)
		}

		function Yb(a) {
			return "rtl" == Tb(a, "direction")
		}

		function bc(a, b) {
			if(/^\d+px?$/.test(b)) return parseInt(b, 10);
			var c = a.style.left,
				d = a.runtimeStyle.left;
			a.runtimeStyle.left = a.currentStyle.left;
			a.style.left = b;
			var e = a.style.pixelLeft;
			a.style.left = c;
			a.runtimeStyle.left = d;
			return e
		}

		function cc(a, b) {
			var c = a.currentStyle ? a.currentStyle[b] : s;
			return c ? bc(a, c) : 0
		}
		var dc = {
			thin: 2,
			medium: 4,
			thick: 6
		};

		function ec(a, b) {
			if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : s)) return 0;
			var c = a.currentStyle ? a.currentStyle[b + "Width"] : s;
			return c in dc ? dc[c] : bc(a, c)
		}
		var fc = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

		function gc(a) {
			this.a = a
		}
		var hc = /\s*;\s*/;

		function ic(a, b, c, d, e, f) {
			/[;=\s]/.test(b) && j(Error('Invalid cookie name "' + b + '"'));
			/[;\r\n]/.test(c) && j(Error('Invalid cookie value "' + c + '"'));
			da(d) || (d = -1);
			f = f ? ";domain=" + f : "";
			e = e ? ";path=" + e : "";
			d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(na() + 1E3 * d)).toUTCString();
			a.a.cookie = b + "=" + c + f + e + d + ""
		}
		gc.prototype.get = function(a, b) {
			for(var c = a + "=", d = (this.a.cookie || "").split(hc), e = 0, f; f = d[e]; e++) {
				if(0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
				if(f == a) return ""
			}
			return b
		};
		gc.prototype.remove = function(a, b, c) {
			var d = da(this.get(a));
			ic(this, a, "", 0, b, c);
			return d
		};
		gc.prototype.clear = function() {
			for(var a = (this.a.cookie || "").split(hc), b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
			for(a = b.length - 1; 0 <= a; a--) this.remove(b[a])
		};
		var jc = new gc(document);
		jc.b = 3950;

		function kc(a, b, c) {
			ic(jc, "" + a, b, c, "/", "youtube.com")
		}

		function lc(a) {
			return jc.get("" + a, q)
		};

		function mc() {
			var a = lc("PREF");
			if(a)
				for(var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
					var c = a[b].split("="),
						d = c[0];
					(c = c[1]) && (V[d] = c.toString())
				}
		}
		ba(mc);
		var V = y("yt.prefs.UserPrefs.prefs_") || {};
		A("yt.prefs.UserPrefs.prefs_", V);

		function nc(a) {
			/^f([1-9][0-9]*)$/.test(a) && j("ExpectedRegexMatch: " + a)
		}

		function oc(a) {
			/^\w+$/.test(a) || j("ExpectedRegexMismatch: " + a)
		}

		function pc(a) {
			a = V[a] !== q ? V[a].toString() : s;
			return a != s && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : s
		}
		mc.prototype.get = function(a, b) {
			oc(a);
			nc(a);
			var c = V[a] !== q ? V[a].toString() : s;
			return c != s ? c : b ? b : ""
		};

		function qc(a, b) {
			var c = "f" + (Math.floor(a / 31) + 1),
				d = 1 << a % 31,
				e = pc(c) || 0,
				e = b ? e | d : e & ~d;
			0 == e ? delete V[c] : (d = e.toString(16), V[c] = d.toString())
		}
		mc.prototype.remove = function(a) {
			oc(a);
			nc(a);
			delete V[a]
		};
		mc.prototype.clear = function() {
			V = {}
		};

		function rc() {
			var a = [],
				b;
			for(b in V) a.push(b + "=" + escape(V[b]));
			return a.join("&")
		};
		var sc = {
			pb: 0,
			ea: 1,
			$: 2,
			Sa: 3,
			fa: 4,
			Qb: 5,
			Sb: 6,
			Pb: 7,
			Nb: 8,
			Ob: 9,
			Rb: 10,
			Mb: 11,
			xb: 12,
			wb: 13,
			vb: 14,
			Aa: 15,
			fb: 16,
			ib: 17,
			jb: 18,
			hb: 19,
			gb: 20,
			yb: 21,
			ia: 22,
			Lb: 23,
			ha: 24,
			P: 25,
			ja: 26,
			ya: 27,
			tb: 28,
			ga: 29,
			rb: 30,
			Fb: 31,
			Eb: 32,
			va: 33,
			Cb: 34,
			zb: 35,
			Ab: 36,
			Bb: 37,
			Db: 38,
			Ta: 39,
			mb: 40,
			Q: 41,
			lb: 42,
			S: 43,
			Z: 44,
			la: 45,
			bb: 46,
			Gb: 47,
			Tb: 48,
			Ub: 49,
			Wb: 50,
			ub: 51,
			Y: 52,
			ba: 53,
			cb: 54,
			Oa: 55,
			ka: 56,
			qb: 57,
			nb: 58,
			xa: 59,
			Za: 60,
			Pa: 61,
			Ua: 62,
			R: 63,
			Kb: 64,
			V: 65,
			U: 66,
			Va: 67,
			da: 68,
			na: 69,
			Ia: 70,
			$a: 71,
			za: 72,
			ob: 73,
			Wa: 74,
			Hb: 75,
			T: 76,
			kb: 77,
			oa: 78,
			Ib: 79,
			Qa: 80,
			aa: 81,
			Ya: 82,
			Ja: 83,
			La: 84,
			Ka: 85,
			Ma: 86,
			Na: 87,
			W: 88,
			O: 89,
			X: 90,
			eb: 91,
			ab: 92,
			ca: 93,
			Vb: 94,
			ua: 95,
			ta: 96,
			wa: 97,
			Ra: 98,
			ma: 99,
			Xa: 100,
			Ca: 101,
			Ba: 102,
			Ea: 103,
			Fa: 104,
			Da: 105,
			Jb: 106,
			qa: 107,
			pa: 108,
			I: 109,
			ra: 110,
			Ga: 111,
			Ha: 112,
			A: 113,
			J: 114
		};

		function tc(a, b, c) {
			a.dataset ? a.dataset[uc(b)] = c : a.setAttribute("data-" + b, c)
		}

		function W(a, b) {
			return a.dataset ? a.dataset[uc(b)] : a.getAttribute("data-" + b)
		}

		function vc(a, b) {
			a.dataset ? delete a.dataset[uc(b)] : a.removeAttribute("data-" + b)
		}
		var wc = {};

		function uc(a) {
			return wc[a] || (wc[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
				return c.toUpperCase()
			}))
		};
		var xc = y("yt.dom.getNextId_");
		if(!xc) {
			xc = function() {
				return ++yc
			};
			A("yt.dom.getNextId_", xc);
			var yc = 0
		};

		function zc(a) {
			if(a = a || window.event) {
				for(var b in a) b in Ac || (this[b] = a[b]);
				this.scale = a.scale;
				this.rotation = a.rotation;
				this.q = a;
				if((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
				this.target = b;
				if(b = a.relatedTarget) try {
					b = b.nodeName && b
				} catch(c) {
					b = s
				} else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
				this.relatedTarget = b;
				this.clientX = a.clientX != q ? a.clientX : a.pageX;
				this.clientY = a.clientY != q ? a.clientY : a.pageY;
				if(document.body && document.documentElement) {
					b = document.body.scrollLeft + document.documentElement.scrollLeft;
					var d = document.body.scrollTop + document.documentElement.scrollTop;
					this.pageX = a.pageX != q ? a.pageX : a.clientX + b;
					this.pageY = a.pageY != q ? a.pageY : a.clientY + d
				}
				this.keyCode = a.keyCode ? a.keyCode : a.which;
				this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
				this.altKey = a.altKey;
				this.ctrlKey = a.ctrlKey;
				this.shiftKey = a.shiftKey;
				"MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.a && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
			}
		}
		u = zc.prototype;
		u.q = s;
		u.type = "";
		u.target = s;
		u.relatedTarget = s;
		u.currentTarget = s;
		u.data = s;
		u.keyCode = 0;
		u.charCode = 0;
		u.altKey = t;
		u.ctrlKey = t;
		u.shiftKey = t;
		u.clientX = 0;
		u.clientY = 0;
		u.pageX = 0;
		u.pageY = 0;
		u.wheelDeltaX = 0;
		u.wheelDeltaY = 0;
		u.rotation = 0;
		u.scale = 1;
		u.preventDefault = function() {
			this.q.returnValue = t;
			this.q.preventDefault && this.q.preventDefault()
		};
		var Ac = {
			stopPropagation: 1,
			preventMouseEvent: 1,
			preventManipulation: 1,
			preventDefault: 1,
			layerX: 1,
			layerY: 1,
			scale: 1,
			rotation: 1
		};
		var Bc = y("yt.events.listeners_") || {};
		A("yt.events.listeners_", Bc);
		var Cc = y("yt.events.counter_") || {
			count: 0
		};
		A("yt.events.counter_", Cc);

		function Dc(a, b, c, d) {
			var e;
			a: {
				e = function(e) {
					return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
				};
				for(var f in Bc)
					if(e.call(q, Bc[f])) {
						e = f;
						break a
					}
				e = q
			}
			return e
		}

		function X(a, b, c, d) {
			if(!a || !a.addEventListener && !a.attachEvent) return "";
			d = !!d;
			var e = Dc(a, b, c, d);
			if(e) return e;
			var e = ++Cc.count + "",
				f = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter" in document),
				g;
			g = f ? function(d) {
				d = new zc(d);
				if(!Mb(d.relatedTarget, function(b) {
						return b == a
					})) return d.currentTarget = a, d.type = b, c.call(a, d)
			} : function(b) {
				b = new zc(b);
				b.currentTarget = a;
				return c.call(a, b)
			};
			Bc[e] = [a, b, c, g, d];
			a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", g, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", g, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", g, d) : a.addEventListener(b, g, d) : a.attachEvent("on" + b, g);
			return e
		}

		function Ec(a, b, c, d) {
			var e = a || document;
			return X(e, b, function(a) {
				var b = Mb(a.target, function(a) {
					return a === e || Q(a, d)
				});
				b && b !== e && (a.currentTarget = b, c.call(b, a))
			})
		}

		function Fc(a) {
			"string" == typeof a && (a = [a]);
			E(a, function(a) {
				if(a in Bc) {
					var c = Bc[a],
						d = c[0],
						e = c[1],
						f = c[3],
						c = c[4];
					d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
					delete Bc[a]
				}
			})
		};

		function Gc(a, b) {
			if((a = R(a)) && a.style) a.style.display = b ? "" : "none", xb(a, "hid", !b)
		}

		function Hc(a) {
			E(arguments, function(a) {
				Gc(a, r)
			})
		}

		function Ic(a) {
			E(arguments, function(a) {
				Gc(a, t)
			})
		};
		var Jc = "v2",
			Kc = 0;

		function Lc(a, b) {
			if(window.guidedhelp && window.guidedhelp.loaded) Mc(a, b);
			else {
				window.guidedhelp = window.guidedhelp || {};
				window.guidedhelp.onLoad = function() {
					var c = y("help.guide.init");
					c && (c("http://www.google.com/support/youtube", G("GUIDED_HELP_LOCALE") || "en_US", Jc), Mc(a, b))
				};
				var c = document.createElement("script");
				c.type = "text/javascript";
				c.src = "//ssl.gstatic.com/inproduct_help/guide/guide_inproduct.js";
				document.body.appendChild(c)
			}
		}

		function Mc(a, b) {
			Kc = a;
			y("guidedhelp").onFlowDismiss = function() {
				var b = Nc(a);
				Oc();
				(b = b.dismiss_callback) && b(a)
			};
			b ? y("help.guide.optionallyResume")(a) : y("help.guide.loadFlow")(a)
		}

		function Oc(a) {
			a = a || Kc || parseInt(Pa(), 10);
			Ic(Nc(a).alert_id);
			(a = Nc(a).cookie_name) && kc(a, "true", 7776E3)
		}

		function Pc(a) {
			a = a || parseInt(Pa(), 10);
			Ic(Nc(a).alert_id);
			Lc(a)
		}

		function Nc(a) {
			var b = G("GUIDED_HELP_FLOWS");
			return b && b[a]
		}
		A("yt.help.guide.dismissGuidedHelp", Oc);
		A("yt.help.guide.startGuidedHelp", Pc);
		A("yt.help.guide.resumeGuidedHelp", function() {
			var a = parseInt(Pa(), 10);
			jc.get("GuidedHelpResume") && Lc(a, r)
		});
		A("yt.help.guide.init", function(a) {
			a && (Jc = a);
			Oa(G("GUIDED_HELP_FLOWS"), function(a, c) {
				switch(a.status) {
					case "prompt":
						Hc(Nc(c).alert_id);
						break;
					case "start":
						Pc(c);
						break;
					case "hide":
						Oc(c);
						break;
					default:
						var d;
						d = (d = Nc(c).cookie_name) ? !!lc(d) : q;
						d || (R(Nc(c).alert_id) ? Hc(Nc(c).alert_id) : Pc(c))
				}
			})
		});
		A("yt.help.guide.addSettings", function(a, b) {
			var c = G("GUIDED_HELP_FLOWS");
			c || (c = {});
			c[a] = b;
			Ha("GUIDED_HELP_FLOWS", c)
		});
		var Qc = "StopIteration" in v ? v.StopIteration : Error("StopIteration");

		function Rc() {}
		Rc.prototype.a = function() {
			j(Qc)
		};
		Rc.prototype.p = function() {
			return this
		};

		function Sc(a) {
			if(a instanceof Rc) return a;
			if("function" == typeof a.p) return a.p(t);
			if(fa(a)) {
				var b = 0,
					c = new Rc;
				c.a = function() {
					for(;;) {
						b >= a.length && j(Qc);
						if(b in a) return a[b++];
						b++
					}
				};
				return c
			}
			j(Error("Not implemented"))
		};

		function Tc(a) {
			a = String(a);
			if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
				return eval("(" + a + ")")
			} catch(b) {}
			j(Error("Invalid JSON string: " + a))
		}

		function Uc(a) {
			return eval("(" + a + ")")
		};

		function Vc() {
			this.a = na()
		}
		new Vc;
		Vc.prototype.get = function() {
			return this.a
		};

		function Wc(a, b, c) {
			if(ea(b))
				for(var d = 0; d < b.length; d++) Wc(a, String(b[d]), c);
			else b != s && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
		}

		function Xc(a, b) {
			for(var c in b) Wc(c, b[c], a);
			return a
		};

		function Yc(a) {
			"?" == a.charAt(0) && (a = a.substr(1));
			a = a.split("&");
			for(var b = {}, c = 0, d = a.length; c < d; c++) {
				var e = a[c].split("=");
				if(1 == e.length && e[0] || 2 == e.length) {
					var f = decodeURIComponent((e[0] || "").replace(/\+/g, " ")),
						e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
					f in b ? ea(b[f]) ? za(b[f], e) : b[f] = [b[f], e] : b[f] = e
				}
			}
			return b
		}

		function Zc(a) {
			a = Xc([], a);
			a[0] = "";
			return a.join("")
		};
		var $c = s;
		"undefined" != typeof XMLHttpRequest ? $c = function() {
			return new XMLHttpRequest
		} : "undefined" != typeof ActiveXObject && ($c = function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		});

		function ad(a, b) {
			var c = b.format || "JSON";
			b.L && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
			var d = b.w;
			if(d) {
				var e, f = a.split("?", 2);
				e = f[0];
				var f = Yc(f[1] || ""),
					g;
				for(g in d) f[g] = d[g];
				d = Xc([e], f);
				d[1] && (e = d[0], g = e.indexOf("#"), 0 <= g && (d.push(e.substr(g)), d[0] = e = e.substr(0, g)), g = e.indexOf("?"), 0 > g ? d[1] = "?" : g == e.length - 1 && (d[1] = q));
				a = d.join("")
			}
			e = b.M || "";
			if(d = b.u) e = Yc(e), Ra(e, d), e = Zc(e);
			var h = t,
				k, l;
			var d = a,
				p = function(a) {
					if(!h) {
						h = r;
						k && window.clearTimeout(k);
						var d;
						a: switch(a && "status" in a ? a.status : -1) {
							case 0:
							case 200:
							case 204:
							case 304:
								d = r;
								break a;
							default:
								d = t
						}
						var e = s;
						if(d || 400 <= a.status && 500 > a.status) {
							var f = s;
							switch(c) {
								case "JSON":
									var e = a.responseText,
										g = a.getResponseHeader("Content-Type") || "";
									e && 0 <= g.indexOf("json") && (f = Uc(e));
									break;
								case "XML":
									e = (e = a.responseXML) ? e ? (e = ("responseXML" in e ? e.responseXML : e).getElementsByTagName("root")) && 0 < e.length ? e[0] : s : s : s, e && (f = {}, E(e.getElementsByTagName("*"), function(a) {
										var b = f,
											c = a.tagName,
											d = "";
										E(a.childNodes, function(a) {
											d += a.nodeValue
										});
										b[c] = d
									}))
							}
							e = f
						}
						if(d) a: {
							switch(c) {
								case "XML":
									d = 0 == parseInt(e && e.return_code, 10);
									break a;
								case "RAW":
									d = r;
									break a
							}
							d = !!e
						}
						e = e || {};
						g = b.F || v;
						d ? b.s && b.s.call(g, a, e) : b.onError && b.onError.call(g, a, e);
						b.G && b.G.call(g, a, e)
					}
				},
				f = b.method,
				n = e;
			e = b.headers;
			g = b.responseType;
			var m = $c && $c();
			if("open" in m) {
				m.onreadystatechange = function() {
					4 == (m && "readyState" in m ? m.readyState : 0) && p && p(m)
				};
				f = (f || "GET").toUpperCase();
				n = n || "";
				m.open(f, d, r);
				g && (m.responseType = g);
				d = "POST" == f;
				if(e)
					for(var H in e) m.setRequestHeader(H, e[H]), "content-type" == H.toLowerCase() && (d = t);
				d && m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				m.send(n);
				l = m
			} else l = q;
			b.H && 0 < b.timeout && (k = I(function() {
				h || (h = r, l.abort(), window.clearTimeout(k), b.H.call(b.F || v, l))
			}, b.timeout))
		};
		var bd = {};
		var cd = {},
			dd = 0;

		function ed(a) {
			if(a) {
				var b = new Image,
					c = "" + dd++;
				cd[c] = b;
				b.onload = b.onerror = function() {
					delete cd[c]
				};
				b.src = a;
				b = eval("null")
			}
		};

		function fd(a, b) {
			a: {
				var c = b || "null";
				if(G("EVENTS_TRACKER_INSTALLED")) {
					var d = bd[a];
					if(!d) {
						var e = window._gaq._getAsyncTracker("eventsPageTracker");
						if(!e) break a;
						window._gaq.push(function() {
							d = e._createEventTracker(a);
							bd[a] = d
						})
					}
					window._gaq.push(function() {
						d._trackEvent(c, q, q)
					})
				}
			}
			var f = "a=" + a + (b ? "&" + b : "").replace(/\//g, "&");ed("/gen_204?" + f)
		};
		var gd = {};
		var hd = y("yt.timing.data_") || {};
		A("yt.timing.data_", hd);

		function id(a) {
			function b(a, b) {
				var e = W(a, "group-key");
				if(e) {
					var f = a,
						f = R(f),
						e = e || f[ha] || (f[ha] = ++ia),
						g = gd[e];
					g && (gd[e] = va(g, function(a) {
						return a[0] != f
					}));
					vc(a, "group-key")
				}
				a.src = b
			}
			a = Cb("img", s, a);
			E(a, function(a) {
				var d = W(a, "thumb");
				d && b.call(v, a, d)
			})
		};

		function jd(a) {
			var b = s;
			"transition" in a.style ? b = "transition-duration" : "webkitTransition" in a.style ? b = "-webkit-transition-duration" : "MozTransition" in a.style ? b = "-moz-transition-duration" : "OTransition" in a.style ? b = "-o-transition-duration" : "msTransition" in a.style && (b = "-ms-transition-duration");
			a = b ? (document.defaultView ? document.defaultView.getComputedStyle(a, s) : document.parentWindow.getComputedStyle(a, s)).getPropertyValue(b) : "0";
			return 1E3 * parseFloat(a)
		};
		var kd = {},
			ld = "ontouchstart" in document;

		function md(a, b, c) {
			var d;
			switch(a) {
				case "mouseover":
				case "mouseout":
					d = 3;
					break;
				case "mouseenter":
				case "mouseleave":
					d = 9
			}
			return Mb(c, function(a) {
				return Q(a, b)
			}, d)
		}

		function Y(a) {
			var b = "mouseover" == a.type && "mouseenter" in kd || "mouseout" == a.type && "mouseleave" in kd,
				c = a.type in kd || b;
			if("HTML" != a.target.tagName && c) {
				if(b) {
					var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
						c = kd[b],
						d;
					for(d in c.e) {
						var e = md(b, d, a.target);
						e && !Mb(a.relatedTarget, function(a) {
							return a == e
						}) && c.h(d, e, b, a)
					}
				}
				if(b = kd[a.type])
					for(d in b.e)(e = md(a.type, d, a.target)) && b.h(d, e, a.type, a)
			}
		}
		X(document, "blur", Y, r);
		X(document, "change", Y, r);
		X(document, "click", Y);
		X(document, "focus", Y, r);
		X(document, "mouseover", Y);
		X(document, "mouseout", Y);
		X(document, "mousedown", Y);
		X(document, "keydown", Y);
		X(document, "keyup", Y);
		X(document, "keypress", Y);
		X(document, "cut", Y);
		X(document, "paste", Y);
		ld && (X(document, "touchstart", Y), X(document, "touchend", Y), X(document, "touchcancel", Y));

		function nd(a, b, c, d, e, f, g) {
			var h, k;
			if(h = c.offsetParent) {
				var l = "HTML" == h.tagName || "BODY" == h.tagName;
				if(!l || "static" != Tb(h, "position")) k = Xb(h), l || (l = (l = Yb(h)) && L ? -h.scrollLeft : l && (!K || !N("8")) ? h.scrollWidth - h.clientWidth - h.scrollLeft : h.scrollLeft, k = Ma(k, new J(l, h.scrollTop)))
			}
			h = k || new J;
			k = Xb(a);
			l = $b(a);
			k = new Qb(k.x, k.y, l.width, l.height);
			if(l = Wb(a)) {
				var p = new Qb(l.left, l.top, l.right - l.left, l.bottom - l.top),
					l = Math.max(k.left, p.left),
					n = Math.min(k.left + k.width, p.left + p.width);
				if(l <= n) {
					var m = Math.max(k.top, p.top),
						p = Math.min(k.top + k.height, p.top + p.height);
					m <= p && (k.left = l, k.top = m, k.width = n - l, k.height = p - m)
				}
			}
			l = yb(a);
			m = yb(c);
			if(l.a != m.a) {
				var n = l.a.body,
					m = m.a.parentWindow || m.a.defaultView,
					p = new J(0, 0),
					H = Ab(n) ? Ab(n).parentWindow || Ab(n).defaultView : window,
					Aa = n;
				do {
					var w;
					if(H == m) w = Xb(Aa);
					else {
						w = Aa;
						var aa = new J;
						if(1 == w.nodeType) {
							if(w.getBoundingClientRect) {
								var D = Ub(w);
								aa.x = D.left;
								aa.y = D.top
							} else {
								var D = Ob(yb(w)),
									U = Xb(w);
								aa.x = U.x - D.x;
								aa.y = U.y - D.y
							}
							L && !N(12) && (D = q, D = q, K ? D = "-ms-transform" : M ? D = "-webkit-transform" : ab ? D = "-o-transform" : L && (D = "-moz-transform"), U = q, D && (U = Tb(w, D)), U || (U = Tb(w, "transform")), U ? (w = U.match(fc), D = !w ? new J(0, 0) : new J(parseFloat(w[1]), parseFloat(w[2]))) : D = new J(0, 0), aa = new J(aa.x + D.x, aa.y + D.y))
						} else D = "function" == ca(w.b), U = w, w.targetTouches ? U = w.targetTouches[0] : D && w.a.targetTouches && (U = w.a.targetTouches[0]), aa.x = U.clientX, aa.y = U.clientY;
						w = aa
					}
					p.x += w.x;
					p.y += w.y
				} while (H && H != m && (Aa = H.frameElement) && (H = H.parent));
				n = Ma(p, Xb(n));
				K && !Nb(l) && (n = Ma(n, Ob(l)));
				k.left += n.x;
				k.top += n.y
			}
			a = (b & 4 && Yb(a) ? b ^ 2 : b) & -5;
			k = new J(a & 2 ? k.left + k.width : k.left, a & 1 ? k.top + k.height : k.top);
			k = Ma(k, h);
			e && (k.x += (a & 2 ? -1 : 1) * e.x, k.y += (a & 1 ? -1 : 1) * e.y);
			var x;
			if(g && (x = Wb(c))) x.top -= h.y, x.right -= h.x, x.bottom -= h.y, x.left -= h.x;
			a: {
				b = x;
				a = k.a();
				e = 0;
				h = (d & 4 && Yb(c) ? d ^ 2 : d) & -5;
				x = $b(c);
				d = x.a();
				if(f || 0 != h) h & 2 ? a.x -= d.width + (f ? f.right : 0) : f && (a.x += f.left), h & 1 ? a.y -= d.height + (f ? f.bottom : 0) : f && (a.y += f.top);
				if(g) {
					if(b) {
						f = a;
						e = 0;
						if(65 == (g & 65) && (f.x < b.left || f.x >= b.right)) g &= -2;
						if(132 == (g & 132) && (f.y < b.top || f.y >= b.bottom)) g &= -5;
						f.x < b.left && g & 1 && (f.x = b.left, e |= 1);
						f.x < b.left && (f.x + d.width > b.right && g & 16) && (d.width = Math.max(d.width - (f.x + d.width - b.right), 0), e |= 4);
						f.x + d.width > b.right && g & 1 && (f.x = Math.max(b.right - d.width, b.left), e |= 1);
						g & 2 && (e |= (f.x < b.left ? 16 : 0) | (f.x + d.width > b.right ? 32 : 0));
						f.y < b.top && g & 4 && (f.y = b.top, e |= 2);
						f.y >= b.top && (f.y + d.height > b.bottom && g & 32) && (d.height = Math.max(d.height - (f.y + d.height - b.bottom), 0), e |= 8);
						f.y + d.height > b.bottom && g & 4 && (f.y = Math.max(b.bottom - d.height, b.top), e |= 2);
						g & 8 && (e |= (f.y < b.top ? 64 : 0) | (f.y + d.height > b.bottom ? 128 : 0));
						g = e
					} else g = 256;
					e = g;
					if(e & 496) {
						c = e;
						break a
					}
				}
				f = L && (Wa || cb) && N("1.9");
				a instanceof J ? (g = a.x, a = a.y) : (g = a, a = q);
				c.style.left = Zb(g, f);
				c.style.top = Zb(a, f);
				if(!(x == d || (!x || !d ? 0 : x.width == d.width && x.height == d.height))) f = Nb(yb(Ab(c))), K && (!f || !N("8")) ? (g = c.style, f ? (K ? (f = cc(c, "paddingLeft"), x = cc(c, "paddingRight"), a = cc(c, "paddingTop"), b = cc(c, "paddingBottom"), f = new Pb(a, x, b, f)) : (f = T(c, "paddingLeft"), x = T(c, "paddingRight"), a = T(c, "paddingTop"), b = T(c, "paddingBottom"), f = new Pb(parseFloat(a), parseFloat(x), parseFloat(b), parseFloat(f))), K ? (x = ec(c, "borderLeft"), a = ec(c, "borderRight"), b = ec(c, "borderTop"), c = ec(c, "borderBottom"), c = new Pb(b, a, c, x)) : (x = T(c, "borderLeftWidth"), a = T(c, "borderRightWidth"), b = T(c, "borderTopWidth"), c = T(c, "borderBottomWidth"), c = new Pb(parseFloat(b), parseFloat(a), parseFloat(c), parseFloat(x))), g.pixelWidth = d.width - c.left - f.left - f.right - c.right, g.pixelHeight = d.height - c.top - f.top - f.bottom - c.bottom) : (g.pixelWidth = d.width, g.pixelHeight = d.height)) : (c = c.style, L ? c.MozBoxSizing = "border-box" : M ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(d.width, 0) + "px", c.height = Math.max(d.height, 0) + "px");
				c = e
			}
			return c
		};
		A("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

		function od() {}
		od.prototype.C = function(a, b, c) {
			var d = this.a(a, b);
			if(d && (d = y(d))) {
				var e = Ca(arguments, 2);
				Ba(e, 0, 0, a);
				d.apply(s, e)
			}
		};
		od.prototype.a = function(a, b) {
			return W(a, b)
		};
		od.prototype.d = function(a) {
			return Lb(a, s, Z(this))
		};

		function Z(a, b) {
			return "yt-uix" + (a.b ? "-" + a.b : "") + (b ? "-" + b : "")
		};
		K && N("9");
		!M || N("528");
		L && N("1.9b") || K && N("8") || ab && N("9.5") || M && N("528");
		L && !N("8") || K && N("9");

		function pd() {}
		ba(pd);
		pd.getInstance();
		document.createElement("input");

		function qd(a, b) {
			this.b = a;
			this.a = new F;
			Ec(this.b, "click", la(this.j, this), "yt-dialog-dismiss");
			var c = S("yt-dialog-fg-content", this.b),
				d = [];
			Oa(rd, function(a) {
				d.push("yt-dialog-show-" + a)
			});
			wb(c, d, "yt-dialog-show-content");
			this.d = b
		}
		var rd = {
			LOADING: "loading",
			N: "content",
			Xb: "working"
		};
		qd.prototype.j = function(a) {
			a = a.currentTarget;
			a.disabled || (a = W(a, "action") || "", sd(this, a))
		};

		function sd(a, b) {
			a.a.h("pre-all");
			a.a.h("pre-" + b);
			Ic(a.b);
			Ic(a.k);
			var c = document.getElementsByTagName("embed"),
				d = document.getElementsByTagName("object"),
				e = la(function(a) {
					if(W(a, "dialog-hidden")) {
						vc(a, "dialog-hidden");
						var b = W(a, "dialog-visibility-value");
						a.style.visibility = b ? b : ""
					}
				}, a);
			E(c, e);
			E(d, e);
			a.d || (c = la(a.g, a), (c = Dc(document, "keydown", c, t)) && Fc(c));
			a.a.h("post-all");
			a.a.h("post-" + b)
		}
		qd.prototype.g = function(a) {
			27 == a.keyCode && sd(this, "cancel")
		};
		A("yt.ui.Dialog", qd);

		function td() {}
		B(td, od);
		ba(td);
		td.prototype.b = "scroller";

		function ud() {};

		function vd() {}
		B(vd, ud);
		vd.prototype.clear = function() {
			var a;
			a = this.p(r);
			if(fa(a)) a = ya(a);
			else {
				a = Sc(a);
				var b = [],
					c = function(a) {
						b.push(a)
					};
				if(fa(a)) try {
					E(a, c, q)
				} catch(d) {
					d !== Qc && j(d)
				} else {
					a = Sc(a);
					try {
						for(;;) c.call(q, a.a())
					} catch(e) {
						e !== Qc && j(e)
					}
				}
				a = b
			}
			var f = this;
			E(a, function(a) {
				f.remove(a)
			})
		};

		function wd(a) {
			this.a = a
		}
		B(wd, vd);

		function xd(a) {
			try {
				return !!a.a && !!a.a.getItem
			} catch(b) {}
			return t
		}
		wd.prototype.get = function(a) {
			a = this.a.getItem(a);
			!z(a) && a !== s && j("Storage mechanism: Invalid value was encountered");
			return a
		};
		wd.prototype.remove = function(a) {
			this.a.removeItem(a)
		};
		wd.prototype.p = function(a) {
			var b = 0,
				c = this.a,
				d = new Rc;
			d.a = function() {
				b >= c.length && j(Qc);
				var d;
				d = c.key(b++);
				if(a) return d;
				d = c.getItem(d);
				z(d) || j("Storage mechanism: Invalid value was encountered");
				return d
			};
			return d
		};
		wd.prototype.clear = function() {
			this.a.clear()
		};

		function yd() {
			var a = s;
			try {
				a = window.localStorage || s
			} catch(b) {}
			this.a = a
		}
		B(yd, wd);

		function zd() {
			var a = s;
			try {
				a = window.sessionStorage || s
			} catch(b) {}
			this.a = a
		}
		B(zd, wd);

		function Ad(a) {
			this.a = a
		}
		Ad.prototype.a = s;
		Ad.prototype.get = function(a) {
			a = this.a.get(a);
			if(a !== s) try {
				return Tc(a)
			} catch(b) {
				j("Storage: Invalid value was encountered")
			}
		};
		Ad.prototype.remove = function(a) {
			this.a.remove(a)
		};

		function Bd(a) {
			this.a = a
		}
		B(Bd, Ad);
		Bd.prototype.b = function(a) {
			a = Bd.i.get.call(this, a);
			if(!da(a) || a instanceof Object) return a;
			j("Storage: Invalid value was encountered")
		};
		Bd.prototype.get = function(a) {
			(a = this.b(a)) ? (a = a.data, da(a) || j("Storage: Invalid value was encountered")) : a = q;
			return a
		};

		function Cd(a) {
			this.a = a
		}
		B(Cd, Bd);
		Cd.prototype.b = function(a, b) {
			var c = Cd.i.b.call(this, a);
			if(c) {
				var d;
				if(d = !b) {
					d = c.creation;
					var e = c.expiration;
					d = !!e && e < na() || !!d && d > na()
				}
				if(d) Cd.prototype.remove.call(this, a);
				else return c
			}
		};

		function Dd(a) {
			this.a = a
		}
		B(Dd, Cd);
		var Ed = new Dd(new yd);
		xd(Ed.a) || (Ed = s);
		var Fd = new Dd(new zd);
		xd(Fd.a) || (Fd = s);
		A("yt.pubsub.publish", La);

		function Gd() {}
		B(Gd, od);
		Gd.prototype.d = function(a) {
			var b = od.prototype.d.call(this, a);
			return !b ? a : b
		};
		Gd.prototype.a = function(a, b) {
			var c = Gd.i.a.call(this, a, "card-config");
			return c && (c = y(c)) && c[b] ? c[b] : Gd.i.a.call(this, a, b)
		};
		Gd.prototype.k = function(a) {
			var b = this.d(a);
			if(b) {
				O(b, Z(this, "active"));
				var c = Hd(this, a, b);
				if(c) {
					c.cardTargetNode = a;
					c.cardRootNode = b;
					var d = this.a(a, "orientation") || "horizontal",
						e = this.a(a, "position"),
						f = !!this.a(a, "force-position"),
						d = "horizontal" == d,
						g = "bottomright" == e || "bottomleft" == e,
						h = "topright" == e || "bottomright" == e,
						k, l;
					h && g ? (l = 7, k = 4) : h && !g ? (l = 6, k = 5) : !h && g ? (l = 5, k = 6) : (l = 4, k = 7);
					var p = Yb(document.body),
						e = Yb(a);
					p != e && (l ^= 2);
					var n;
					d ? (e = a.offsetHeight / 2 - 12, n = new J(-12, a.offsetHeight + 6)) : (e = a.offsetWidth / 2 - 6, n = new J(a.offsetWidth + 6, -12));
					var m = $b(c),
						e = Math.min(e, (d ? m.height : m.width) - 24 - 6);
					6 > e && (e = 6, d ? n.y += 12 - a.offsetHeight / 2 : n.x += 12 - a.offsetWidth / 2);
					var H = s;
					f || (H = 10);
					var m = Z(this, "card-flip"),
						Aa = Z(this, "card-reverse");
					xb(c, m, h);
					xb(c, Aa, g);
					H = nd(a, l, c, k, n, s, H);
					!f && H && (H & 48 && (h = !h, l ^= 2, k ^= 2), H & 192 && (g = !g, l ^= 1, k ^= 1), xb(c, m, h), xb(c, Aa, g), nd(a, l, c, k, n));
					f = S("yt-uix-card-body-arrow", c);
					k = S("yt-uix-card-border-arrow", c);
					d = d ? g ? "top" : "bottom" : !p && h || p && !h ? "left" : "right";
					f.setAttribute("style", "");
					k.setAttribute("style", "");
					f.style[d] = e + "px";
					k.style[d] = e + "px";
					g = S("yt-uix-card-arrow", c);
					f = S("yt-uix-card-arrow-background", c);
					g && f && (e = "right" == d ? $b(c).width - e - 13 : e + 11, d = e / Math.sqrt(2), Rb(g, "left", e + "px"), Rb(g, "margin-left", "1px"), Rb(f, "margin-left", -d + "px"), Rb(f, "margin-top", d + "px"));
					var w = Z(this, "card-visible"),
						aa = this.a(a, "card-delegate-show") && this.a(b, "card-action");
					this.C(b, "card-action", a);
					Ic(c);
					I(function() {
						aa || Hc(c);
						O(c, w)
					}, 10)
				}
			}
		};

		function Hd(a, b, c) {
			var d = c || b,
				e = Z(a, "card");
			c = d.__yt_uid_key;
			c || (c = xc(), d.__yt_uid_key = c);
			var f = e + c;
			c = R(f);
			var g;
			g = d.cardContentNode;
			if(!g) {
				var h = Z(a, "content"),
					k = Z(a, "card-content");
				(g = S(h, d)) || (g = document.createElement("div"));
				wb(g, h, k);
				d.cardContentNode = g
			}
			if(c) return c;
			c = document.createElement("div");
			c.id = f;
			c.className = e;
			(d = a.a(d, "card-class")) && O(c, d);
			d = document.createElement("div");
			d.className = Z(a, "card-border");
			b = a.a(b, "orientation") || "horizontal";
			e = document.createElement("div");
			e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
			f = document.createElement("div");
			f.className = Z(a, "card-body");
			a = document.createElement("div");
			a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
			Hb(g);
			f.appendChild(g);
			d.appendChild(a);
			d.appendChild(f);
			c.appendChild(e);
			c.appendChild(d);
			document.body.appendChild(c);
			return c
		}
		Gd.prototype.g = function(a) {
			var b = this.d(a);
			if(b && (a = Hd(this, a, b))) P(b, Z(this, "active")), P(a, Z(this, "card-visible")), Ic(a), a.cardTargetNode = s, a.cardRootNode = s
		};
		var Id, Jd, Kd, Ld, Md, Nd, Od, Pd, Qd = [];

		function Rd(a, b) {
			var c = b.response;
			if(c.guide_notification_html_content) {
				if(R("guide-subscriptions-promo")) La("replace-no-subs-promo");
				else {
					var d = R("collapsed-guide-sub-notification"),
						e = document.createElement("ul");
					e.innerHTML = c.guide_notification_html_content;
					c = qb && e.children != q ? e.children : va(e.childNodes, function(a) {
						return 1 == a.nodeType
					});
					E(c, function(a) {
						O(a, "guide-notification-new");
						var b = S("guide-item", a),
							c = W(b, "channel-id");
						c && Sd(c) == s && (Ld.insertBefore(a, Ld.childNodes[0] || s), Td(), I(function() {
							P(a, "guide-notification-new")
						}, jd(a)), b = S("thumb", b), Cb("img", s, b), Ud(a), Vd(d))
					})
				}
				c = e = s
			}
		}

		function Wd(a) {
			if(a = Sd(a)) sb ? a = a.parentElement : (a = a.parentNode, a = ga(a) && 1 == a.nodeType ? a : s), Hb(a);
			Td();
			(a = R("collapsed-guide-sub-notification")) && P(a, "guide-notification")
		}

		function Xd() {
			Ud(R("watch-later-guide-item"), r);
			Vd(R("collapsed-guide-watch-later-notification"))
		}

		function Yd() {
			Ud(R("playlists-guide-item"), r);
			Vd(R("collapsed-guide-playlist-notification"))
		}

		function Ud(a, b) {
			La("guide-show-notification");
			O(a, "guide-notification");
			var c = S("guide-item", a);
			if(b) {
				var d;
				if(!(d = W(a, "notification-text"))) rb && "innerText" in c ? d = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (d = [], Kb(c, d, r), d = d.join("")), d = d.replace(/ \xAD /g, " ").replace(/\xAD/g, ""), d = d.replace(/\u200B/g, ""), rb || (d = d.replace(/ +/g, " ")), " " != d && (d = d.replace(/^\s*/, ""));
				var e = c.innerHTML;
				Gb(c);
				if("textContent" in c) c.textContent = d;
				else if(c.firstChild && 3 == c.firstChild.nodeType) {
					for(; c.lastChild != c.firstChild;) c.removeChild(c.lastChild);
					c.firstChild.data = d
				} else Gb(c), c.appendChild(Ab(c).createTextNode(d))
			}
			var f = Fb("span", {
				className: "guide-notification-icon"
			});
			c.appendChild(f);
			I(function() {
				O(a, "guide-notification-enabled")
			}, 0);
			I(function() {
				P(a, "guide-notification-enabled");
				b ? c.innerHTML = e : Hb(f);
				I(function() {
					P(a, "guide-notification")
				}, jd(c))
			}, 3E3)
		}

		function Vd(a) {
			var b = R("guide-main"),
				c = Q(b, "collapsed");
			Pd || (Pd = S("guide-notifications-collapsed", b));
			if(c && Pd) {
				O(Pd, "guide-notification");
				Q(a, "guide-notification") || (c = Hb(a), Pd.insertBefore(c, Pd.childNodes[0] || s), O(a, "guide-notification-new"));
				var d = S("guide-module-toggle-icon", b);
				O(a, "guide-notification");
				O(d, "guide-notification");
				I(function() {
					O(a, "guide-notification-enabled");
					O(d, "guide-notification-enabled");
					I(function() {
						P(a, "guide-notification-new")
					}, jd(a))
				}, 0);
				I(function() {
					P(a, "guide-notification-enabled");
					P(d, "guide-notification");
					P(d, "guide-notification-enabled")
				}, 3E3)
			}
		};

		function Zd() {}
		B(Zd, Gd);
		ba(Zd);
		Zd.prototype.b = "clickcard";
		Zd.prototype.k = function(a) {
			$d(this);
			Zd.i.k.call(this, a);
			var b = this.d(a);
			W(b, "click-outside-persists") || (this.j = a, this.z = X(document, "click", la(this.D, this)))
		};
		Zd.prototype.g = function(a) {
			Zd.i.g.call(this, a);
			this.z && Fc(this.z)
		};
		Zd.prototype.D = function(a) {
			Lb(a.target, s, "yt-uix" + (this.b ? "-" + this.b : "") + "-card") || $d(this)
		};

		function $d(a) {
			a.j && (a.g(a.j), a.j = s)
		};

		function ae(a, b, c) {
			this.g = a;
			this.version = b;
			this.b = c
		}

		function be(a) {
			var b = $,
				c = Ia("promo_ajax_token");
			a = {
				action_write_promo: 1,
				method: a,
				subtype: b.g,
				version: b.version
			};
			b.b && (a.encrypted_video_id = b.b);
			ad("/watch_promo_ajax", {
				method: "POST",
				w: a,
				u: {
					session_token: c
				},
				s: function() {},
				onError: function() {}
			})
		};

		function ce(a, b) {
			var c = 1166 > a.width,
				d = !Kd;
			d && Q(document.body, "site-left-aligned") && (d = c);
			if(d && Q(document.body, "sidebar-expanded") || !d && Q(document.body, "sidebar-collapsed")) d ? wb(document.body, "sidebar-expanded", "sidebar-collapsed") : wb(document.body, "sidebar-collapsed", "sidebar-expanded"), fd("sidebar-toggled", Zc({
				expanded: !d,
				"page-class": Id.className
			}));
			b || de(a)
		}

		function de(a) {
			$ && (a = 1166 > a.width, Kd && a ? ee() : $ && (Zd.getInstance().k($.a), $.d && ($.d = t, be("write_impression")), O($.a, "guide-promo-visible")))
		}

		function ee() {
			$ && Zd.getInstance().g($.a)
		}
		var $ = s;

		function fe(a, b) {
			ae.call(this, b, 0, G("VIDEO_ID"));
			this.a = a;
			this.d = r
		}
		B(fe, ae);
		var ge = [],
			he = [],
			ie = t;

		function je() {
			Id = R("page");
			Jd = R("guide");
			Ld = R("guide-channels");
			Od = R("guide-container");
			"placeholder" in document.createElement("input") || (Nd = R("guide-quick-filter-label"));
			Kd = Q(document.body, "guide-collapsed");
			Ld = R("guide-channels");
			Qd.push(Ka("SUBSCRIBE", Rd));
			Qd.push(Ka("UNSUBSCRIBE", Wd));
			Qd.push(Ka("WATCH_LATER_UPDATED", Xd));
			Qd.push(Ka("player-watchlater", Xd));
			Qd.push(Ka("PLAYLIST_UPDATED", Yd));
			ge.push(Ec(Jd, "keyup", ke, "guide-quick-filter"));
			ge.push(Ec(Jd, "click", le, "guide-quick-filter-clear"));
			ge.push(Ec(Jd, "click", me, "guide-sort-choice"));
			ge.push(Ec(Od, "click", ne, "guide-module-toggle"));
			var a = Bb("guide-channels-list");
			Kd || E(a, function(a) {
				id(a)
			});
			var a = Eb(window),
				b = R("watch-context-container"),
				b = b && 0 < b.children.length;
			if(G("GUIDE_EXPANDS_IF_ROOM") || G("GUIDE_MODULE_STATE_STICKY") || G("GUIDE_OR_CONTEXT_EXPAND_IF_ROOM") && !b) {
				var b = R("guide-main"),
					c = Q(b, "collapsed"),
					d = oe(a),
					e = t;
				if(e = G("GUIDE_MODULE_STATE_STICKY") ? !c && !d : c && d || !c && !d) c = pe(b), qe(b.id, !c, r)
			}
			oe(a);
			he.push(Ka("page-resize", oe));
			he.push(Ka("replace-no-subs-promo", re));
			if(Q(Id, "watch")) {
				if(b = R("watch-context-container")) {
					c = Q(b, "collapsed");
					d = oe(a);
					mc.getInstance();
					if(!(d = d && ("true" == W(b, "start-open") || G("CONTEXT_EXPANDS_IF_ROOM") || G("GUIDE_OR_CONTEXT_EXPAND_IF_ROOM"))))
						if(d = G("GUIDE_MODULE_STATE_STICKY")) d = sc.A, d = !!((pc("f" + (Math.floor(d / 31) + 1)) || 0) & 1 << d % 31);
					if(c && d || !c && !d) c = pe(b), qe(b.id, !c, r)
				}
				ce(a);
				he.push(Ka("page-resize", ce));
				b = R("guide-main");
				(c = R("watch-context-container")) && Q(c, "context-visible") ? G("CONTEXT_PROMO_ENABLED") && ($ = new fe(c, "watch_context")) : b && G("GUIDE_PROMO_ENABLED") && ($ = new fe(b, "watch_guide"));
				de(a);
				he.push(Ka("guide-show-notification", se))
			}
		}

		function te() {
			Fc(ge);
			ge = [];
			var a = Qd,
				b = y("yt.pubsub.instance_");
			b && ("number" == typeof a && (a = [a]), E(a, function(a) {
				b.unsubscribeByKey(a)
			}));
			$ && ee();
			$ = s
		}

		function ke() {
			var a = S("guide-quick-filter", Jd),
				b = S("guide-quick-filter-clear", Jd),
				c = 0 < a.value.length;
			Gc(b, c);
			Nd && c && Ic(Nd);
			ue(a)
		}

		function le() {
			var a = S("guide-quick-filter", Jd),
				b = S("guide-quick-filter-clear", Jd);
			a.value = "";
			Ic(b);
			Nd && Hc(Nd);
			ue(a)
		}

		function ue(a) {
			var b = a.value,
				c = RegExp(b, "i");
			a = R("guide-channels");
			var d = Bb("display-name", a),
				e = t;
			if(b) {
				var f = $b(Ld).height;
				Ld.style.height = f + "px"
			} else Ld.style.height = "auto";
			E(d, function(a) {
				var d = Lb(a, s, "guide-item").getAttribute("title"),
					f = c.test(d);
				Gc(Lb(a, "li", "guide-channel"), f);
				f && (e = r);
				a.innerHTML = f && !/^[\s\xa0]*$/.test(b) ? d.replace(c, '<span class="filter-match">' + b + "</span>") : d
			});
			xb(a, "filter-has-matches", e);
			b && !Md && (fd("guidev2-filter"), Md = r)
		}

		function me(a) {
			var b = S("guide-sort-button"),
				c = W(b, "guide-sort") || "",
				d = W(a.currentTarget, "guide-sort") || "";
			c != d && (tc(b, "guide-sort", d), ad("/guide_channels_ajax?action_set_guide_sort=1", {
				method: "POST",
				w: {
					sort: d
				},
				u: {
					session_token: Ia("guide_channels_ajax")
				},
				format: "JSON",
				s: function(a, b) {
					R("guide-subscriptions-container").innerHTML = b.channels;
					Td();
					var c = Bb("guide-sort-choice");
					E(c, function(a) {
						var b = W(a, "guide-sort");
						xb(a, "checked", d == b)
					})
				}
			}))
		}

		function Td() {
			"placeholder" in document.createElement("input") || (Nd = R("guide-quick-filter-label"));
			Ld = R("guide-channels");
			Bb("guide-section", Od);
			Kd || id(Ld)
		}

		function Sd(a) {
			function b(b) {
				return W(b, "channel-id") == a
			}
			var c = Bb("guide-item", Jd),
				d;
			a: {
				d = c.length;
				for(var e = z(c) ? c.split("") : c, f = 0; f < d; f++)
					if(f in e && b.call(q, e[f])) {
						d = f;
						break a
					}
				d = -1
			}
			return 0 > d ? s : z(c) ? c.charAt(d) : c[d]
		}

		function ne(a) {
			var b = Lb(a.currentTarget, s, "guide-module");
			"true" == W(b, "pending-click") ? a.preventDefault() : (tc(b, "pending-click", "true"), I(function() {
				vc(b, "pending-click")
			}, 500), Q(b, "collapsed") ? (a.preventDefault(), a = pe(b), qe(b.id, !a, t), id(b)) : Lb(a.target, s, "guide-module-toggle-icon") && (a = pe(b), qe(b.id, !a, t)))
		}

		function qe(a, b, c, d) {
			fd("guide-toggled", Zc({
				"module-id": a,
				expanded: b,
				auto: c,
				"page-class": Id.className,
				notification: d || t
			}))
		}

		function pe(a) {
			var b = S("guide-module-content", a),
				c = !Q(a, "collapsed");
			xb(a, "collapsed", c);
			ee();
			a == R("guide-main") && (S("guide-module-toggle-label", a), Pd && (P(Pd, "guide-notification"), a = Bb("collapsed-guide-notification", Pd), E(a, function(a) {
				P(a.parentNode, "guide-notification")
			})));
			c ? (b.style.height = Zb(0, r), I(function() {
				Ic(b);
				b.style.height = Zb("auto", r)
			}, 300)) : (a = $b(b).height, b.style.height = Zb(0, r), Hc(b), b.style.height = Zb(a, r));
			a = Bb("guide-module", Od);
			(Kd = a = wa(a, function(a) {
				return Q(a, "collapsed")
			})) ? wb(document.body, "guide-expanded", "guide-collapsed"): wb(document.body, "guide-collapsed", "guide-expanded");
			if(Q(Id, "watch") && (ce(Eb(window), r), !a && (a = R("watch-context-item-list")))) {
				var d = W(a, "context-playing");
				if(d = parseInt(d, 10)) {
					var e = td.getInstance();
					if(a && !(isNaN(d) || 0 > d))
						if(e = Bb(Z(e, "scroll-unit"), a), !(0 >= e.length)) {
							d >= e.length && (d = e.length - 1);
							var f;
							if(e.length) {
								f = e[0];
								var g = f.offsetHeight;
								1 < e.length && (g = e[1].offsetTop - f.offsetTop);
								f = g
							} else f = 0;
							var g = a.offsetHeight,
								h = Math.max(Math.floor(a.scrollTop / f), 0);
							d > h - 1 && (f = Math.floor(g / f), g = e.length, d + f > g && (d = g - f + 1));
							0 > d && (d = 0);
							d = e[d].offsetTop;
							a && !isNaN(d) && (0 > d && (d = 0), a.scrollTop = d, tc(a, "scroller-offset", d + ""))
						}
				}
			}
			I(function() {
				de(Eb(window))
			}, 300);
			G("GUIDE_MODULE_STATE_STICKY") && (d = R("watch-context-container"), a = !Q(R("guide-main"), "collapsed"), d = !Q(d, "collapsed"), mc.getInstance(), e = sc.A, qc(sc.I, a), qc(e, d), kc("PREF", rc(), 31536E4));
			return c
		}

		function oe(a) {
			a = 1166 <= a.width;
			a != ie && (mc.getInstance(), qc(sc.J, a), kc("PREF", rc(), 31536E4));
			return ie = a
		}

		function re() {
			Hb(R("guide-subscriptions-promo"));
			ad("/guide_channels_ajax?action_load_subs_and_footer=1", {
				method: "POST",
				u: {
					session_token: Ia("guide_channels_ajax")
				},
				format: "JSON",
				s: function(a, b) {
					R("guide-subs-footer-container").innerHTML = b.channels;
					Td()
				}
			})
		}

		function se() {
			if(G("GUIDE_EXPANDS_ON_NOTIFICATION")) {
				var a = R("guide-main");
				if(Q(a, "collapsed") && ie) {
					var b = pe(a);
					qe(a.id, !b, r, r)
				}
			}
		};
		A("yt.www.guidev2.watch.acceptPromo", function() {
			$ && (be("write_accept"), $ && ee(), $ = s)
		});
		Ka("init", function() {
			je();
			var a = G("GUIDE_SELECTED_FEED"),
				b = s,
				c = S("guide-item-selected", Jd);
			c && (b = W(c, "channel-id") || "");
			b != a && (b && P(c, "guide-item-selected"), a && (a = Sd(a)) && O(a, "guide-item-selected"))
		});
		Ka("dispose", te);
		A("yt.www.guidev2.init", je);
		A("yt.www.guidev2.dispose", te);
	})();
}