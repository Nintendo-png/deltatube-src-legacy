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
		function h(a) {
			throw a;
		}
		var l = void 0,
			n = !0,
			r = null,
			s = !1,
			t, u = this;

		function aa(a) {
			a = a.split(".");
			for(var b = u, c; c = a.shift();)
				if(b[c] != r) b = b[c];
				else return r;
			return b
		}

		function ba(a) {
			a.getInstance = function() {
				return a.ja ? a.ja : a.ja = new a
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

		function v(a) {
			return a !== l
		}

		function da(a) {
			return "array" == ca(a)
		}

		function ea(a) {
			var b = ca(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		}

		function w(a) {
			return "string" == typeof a
		}
		var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
			ga = 0;

		function ha(a, b, c) {
			return a.call.apply(a.bind, arguments)
		}

		function ia(a, b, c) {
			a || h(Error());
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

		function x(a, b, c) {
			x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
			return x.apply(r, arguments)
		}

		function ja(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = Array.prototype.slice.call(arguments);
				b.unshift.apply(b, c);
				return a.apply(this, b)
			}
		}
		var ka = Date.now || function() {
			return +new Date
		};

		function A(a, b) {
			var c = a.split("."),
				d = u;
			!(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
			for(var e; c.length && (e = c.shift());) !c.length && v(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
		}

		function B(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.G = b.prototype;
			a.prototype = new c
		}
		Function.prototype.bind = Function.prototype.bind || function(a, b) {
			if(1 < arguments.length) {
				var c = Array.prototype.slice.call(arguments, 1);
				c.unshift(this, a);
				return x.apply(r, c)
			}
			return x(this, a)
		};

		function ma(a, b) {
			for(var c = 1; c < arguments.length; c++) {
				var d = String(arguments[c]).replace(/\$/g, "$$$$");
				a = a.replace(/\%s/, d)
			}
			return a
		}

		function na(a) {
			if(!oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;"));
			return a
		}
		var pa = /&/g,
			qa = /</g,
			ra = />/g,
			sa = /\"/g,
			oa = /[&<>\"]/;
		var C = Array.prototype,
			ta = C.indexOf ? function(a, b, c) {
				return C.indexOf.call(a, b, c)
			} : function(a, b, c) {
				c = c == r ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
				if(w(a)) return !w(b) || 1 != b.length ? -1 : a.indexOf(b, c);
				for(; c < a.length; c++)
					if(c in a && a[c] === b) return c;
				return -1
			},
			D = C.forEach ? function(a, b, c) {
				C.forEach.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = w(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
			},
			ua = C.filter ? function(a, b, c) {
				return C.filter.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = [], f = 0, g = w(a) ? a.split("") : a, j = 0; j < d; j++)
					if(j in g) {
						var k = g[j];
						b.call(c, k, j, a) && (e[f++] = k)
					}
				return e
			},
			va = C.map ? function(a, b, c) {
				return C.map.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = Array(d), f = w(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
				return e
			};

		function wa(a, b) {
			var c;
			a: {
				c = a.length;
				for(var d = w(a) ? a.split("") : a, e = 0; e < c; e++)
					if(e in d && b.call(l, d[e], e, a)) {
						c = e;
						break a
					}
				c = -1
			}
			return 0 > c ? r : w(a) ? a.charAt(c) : a[c]
		}

		function xa(a, b) {
			for(var c = 1; c < arguments.length; c++) {
				var d = arguments[c],
					e;
				if(da(d) || (e = ea(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
				else if(e)
					for(var f = a.length, g = d.length, j = 0; j < g; j++) a[f + j] = d[j];
				else a.push(d)
			}
		}

		function ya(a, b, c, d) {
			C.splice.apply(a, za(arguments, 1))
		}

		function za(a, b, c) {
			return 2 >= arguments.length ? C.slice.call(a, b) : C.slice.call(a, b, c)
		};
		var Aa;

		function Ba(a) {
			a = a.className;
			return w(a) && a.match(/\S+/g) || []
		}

		function Ca(a, b) {
			var c = Ba(a),
				d = za(arguments, 1);
			Da(c, d);
			a.className = c.join(" ")
		}

		function Ea(a, b) {
			var c = Ba(a),
				d = za(arguments, 1),
				c = Fa(c, d);
			a.className = c.join(" ")
		}

		function Da(a, b) {
			for(var c = 0; c < b.length; c++) 0 <= ta(a, b[c]) || a.push(b[c])
		}

		function Fa(a, b) {
			return ua(a, function(a) {
				return !(0 <= ta(b, a))
			})
		}

		function Ga(a, b, c) {
			var d = Ba(a);
			if(w(b)) {
				var e = d;
				b = ta(e, b);
				0 <= b && C.splice.call(e, b, 1)
			} else da(b) && (d = Fa(d, b));
			w(c) && !(0 <= ta(d, c)) ? d.push(c) : da(c) && Da(d, c);
			a.className = d.join(" ")
		}

		function Ha(a, b) {
			var c = Ba(a);
			return 0 <= ta(c, b)
		}

		function E(a, b, c) {
			c ? Ca(a, b) : Ea(a, b)
		}

		function Ia(a) {
			var b = !Ha(a, "checked");
			E(a, "checked", b);
			return b
		};

		function G(a, b) {
			this.x = v(a) ? a : 0;
			this.y = v(b) ? b : 0
		}
		G.prototype.C = function() {
			return new G(this.x, this.y)
		};

		function Ja(a, b) {
			return new G(a.x - b.x, a.y - b.y)
		};

		function Ka(a, b) {
			this.width = a;
			this.height = b
		}
		Ka.prototype.C = function() {
			return new Ka(this.width, this.height)
		};
		Ka.prototype.floor = function() {
			this.width = Math.floor(this.width);
			this.height = Math.floor(this.height);
			return this
		};
		Ka.prototype.round = function() {
			this.width = Math.round(this.width);
			this.height = Math.round(this.height);
			return this
		};
		Ka.prototype.scale = function(a) {
			this.width *= a;
			this.height *= a;
			return this
		};

		function La(a, b) {
			for(var c in a) b.call(l, a[c], c, a)
		}
		var Ma = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

		function Na(a, b) {
			for(var c, d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for(c in d) a[c] = d[c];
				for(var f = 0; f < Ma.length; f++) c = Ma[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		};
		var Oa, Pa, Qa, Ra, Sa;

		function Ta() {
			return u.navigator ? u.navigator.userAgent : r
		}

		function Ua() {
			return u.navigator
		}
		Ra = Qa = Pa = Oa = s;
		var Va;
		if(Va = Ta()) {
			var Wa = Ua();
			Oa = 0 == Va.indexOf("Opera");
			Pa = !Oa && -1 != Va.indexOf("MSIE");
			Qa = !Oa && -1 != Va.indexOf("WebKit");
			Ra = !Oa && !Qa && "Gecko" == Wa.product
		}
		var Xa = Oa,
			H = Pa,
			Ya = Ra,
			I = Qa,
			Za = Ua();
		Sa = -1 != (Za && Za.platform || "").indexOf("Mac");
		var $a = !!Ua() && -1 != (Ua().appVersion || "").indexOf("X11");

		function ab() {
			var a = u.document;
			return a ? a.documentMode : l
		}
		var bb;
		a: {
			var cb = "",
				db;
			if(Xa && u.opera) var eb = u.opera.version,
				cb = "function" == typeof eb ? eb() : eb;
			else if(Ya ? db = /rv\:([^\);]+)(\)|;)/ : H ? db = /MSIE\s+([^\);]+)(\)|;)/ : I && (db = /WebKit\/(\S+)/), db) var fb = db.exec(Ta()),
				cb = fb ? fb[1] : "";
			if(H) {
				var gb = ab();
				if(gb > parseFloat(cb)) {
					bb = String(gb);
					break a
				}
			}
			bb = cb
		}
		var hb = bb,
			ib = {};

		function jb(a) {
			var b;
			if(!(b = ib[a])) {
				b = 0;
				for(var c = String(hb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
					var g = c[f] || "",
						j = d[f] || "",
						k = RegExp("(\\d*)(\\D*)", "g"),
						m = RegExp("(\\d*)(\\D*)", "g");
					do {
						var p = k.exec(g) || ["", "", ""],
							q = m.exec(j) || ["", "", ""];
						if(0 == p[0].length && 0 == q[0].length) break;
						b = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 == q[1].length ? 0 : parseInt(q[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == q[2].length) ? -1 : (0 == p[2].length) > (0 == q[2].length) ? 1 : 0) || (p[2] < q[2] ? -1 : p[2] > q[2] ? 1 : 0)
					} while (0 == b)
				}
				b = ib[a] = 0 <= b
			}
			return b
		}
		var kb = u.document,
			lb = !kb || !H ? l : ab() || ("CSS1Compat" == kb.compatMode ? parseInt(hb, 10) : 5);
		!Ya && !H || H && H && 9 <= lb || Ya && jb("1.9.1");
		H && jb("9");

		function mb(a) {
			return a ? new nb(ob(a)) : Aa || (Aa = new nb)
		}

		function J(a) {
			return w(a) ? document.getElementById(a) : a
		}

		function L(a, b) {
			var c = b || document;
			return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : pb("*", a, b)
		}

		function M(a, b) {
			var c = b || document,
				d = r;
			return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : L(a, b)[0]) || r
		}

		function pb(a, b, c) {
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
				for(f = e = 0; g = c[f]; f++) a = g.className, "function" == typeof a.split && 0 <= ta(a.split(/\s+/), b) && (d[e++] = g);
				d.length = e;
				return d
			}
			return c
		}

		function qb(a) {
			a && a.parentNode && a.parentNode.removeChild(a)
		}

		function ob(a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		}

		function N(a, b, c) {
			if(!b && !c) return r;
			var d = b ? b.toUpperCase() : r;
			return rb(a, function(a) {
				return(!d || a.nodeName == d) && (!c || Ha(a, c))
			})
		}

		function P(a, b) {
			return N(a, r, b)
		}

		function rb(a, b, c) {
			for(var d = c == r, e = 0; a && (d || e <= c);) {
				if(b(a)) return a;
				a = a.parentNode;
				e++
			}
			return r
		}

		function nb(a) {
			this.a = a || u.document || document
		}
		nb.prototype.createElement = function(a) {
			return this.a.createElement(a)
		};

		function sb(a) {
			return "CSS1Compat" == a.a.compatMode
		}

		function tb(a) {
			var b = a.a;
			a = !I && "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
			b = b.parentWindow || b.defaultView;
			return new G(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
		}
		nb.prototype.appendChild = function(a, b) {
			a.appendChild(b)
		};

		function ub(a) {
			this.a = a
		}
		var vb = /\s*;\s*/;

		function wb(a, b, c, d, e, f) {
			/[;=\s]/.test(b) && h(Error('Invalid cookie name "' + b + '"'));
			/[;\r\n]/.test(c) && h(Error('Invalid cookie value "' + c + '"'));
			v(d) || (d = -1);
			f = f ? ";domain=" + f : "";
			e = e ? ";path=" + e : "";
			d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ka() + 1E3 * d)).toUTCString();
			a.a.cookie = b + "=" + c + f + e + d + ""
		}
		t = ub.prototype;
		t.get = function(a, b) {
			for(var c = a + "=", d = (this.a.cookie || "").split(vb), e = 0, f; f = d[e]; e++) {
				if(0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
				if(f == a) return ""
			}
			return b
		};
		t.remove = function(a, b, c) {
			var d = v(this.get(a));
			wb(this, a, "", 0, b, c);
			return d
		};
		t.aa = function() {
			return xb(this).keys
		};
		t.ba = function() {
			return xb(this).pa
		};
		t.clear = function() {
			for(var a = xb(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
		};

		function xb(a) {
			a = (a.a.cookie || "").split(vb);
			for(var b = [], c = [], d, e, f = 0; e = a[f]; f++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
			return {
				keys: b,
				pa: c
			}
		}
		var yb = new ub(document);
		yb.b = 3950;

		function zb(a, b, c) {
			wb(yb, "" + a, b, c, "/", "youtube.com")
		}

		function Ab(a) {
			return yb.get("" + a, l)
		};

		function Bb() {
			var a = Ab("PREF");
			if(a)
				for(var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
					var c = a[b].split("="),
						d = c[0];
					(c = c[1]) && (Cb[d] = c.toString())
				}
		}
		ba(Bb);
		var Cb = aa("yt.prefs.UserPrefs.prefs_") || {};
		A("yt.prefs.UserPrefs.prefs_", Cb);

		function Db(a) {
			/^f([1-9][0-9]*)$/.test(a) && h("ExpectedRegexMatch: " + a)
		}

		function Eb(a) {
			/^\w+$/.test(a) || h("ExpectedRegexMismatch: " + a)
		}

		function Fb(a) {
			a = Cb[a] !== l ? Cb[a].toString() : r;
			return a != r && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : r
		}
		Bb.prototype.get = function(a, b) {
			Eb(a);
			Db(a);
			var c = Cb[a] !== l ? Cb[a].toString() : r;
			return c != r ? c : b ? b : ""
		};

		function Gb(a) {
			return !!((Fb("f" + (Math.floor(a / 31) + 1)) || 0) & 1 << a % 31)
		}

		function Hb(a, b) {
			var c = "f" + (Math.floor(a / 31) + 1),
				d = 1 << a % 31,
				e = Fb(c) || 0,
				e = b ? e | d : e & ~d;
			0 == e ? delete Cb[c] : (d = e.toString(16), Cb[c] = d.toString())
		}
		Bb.prototype.remove = function(a) {
			Eb(a);
			Db(a);
			delete Cb[a]
		};
		Bb.prototype.clear = function() {
			Cb = {}
		};

		function Ib() {
			var a = [],
				b;
			for(b in Cb) a.push(b + "=" + escape(Cb[b]));
			return a.join("&")
		};
		var Jb = {
			lc: 0,
			$a: 1,
			Va: 2,
			Nb: 3,
			ab: 4,
			Nc: 5,
			Pc: 6,
			Mc: 7,
			Kc: 8,
			Lc: 9,
			Oc: 10,
			Jc: 11,
			uc: 12,
			tc: 13,
			sc: 14,
			xb: 15,
			$b: 16,
			cc: 17,
			dc: 18,
			bc: 19,
			ac: 20,
			vc: 21,
			fb: 22,
			Ic: 23,
			eb: 24,
			Ka: 25,
			gb: 26,
			vb: 27,
			oc: 28,
			cb: 29,
			nc: 30,
			Cc: 31,
			Bc: 32,
			rb: 33,
			zc: 34,
			wc: 35,
			xc: 36,
			yc: 37,
			Ac: 38,
			Ob: 39,
			gc: 40,
			La: 41,
			fc: 42,
			Na: 43,
			Ua: 44,
			ib: 45,
			Xb: 46,
			Dc: 47,
			Qc: 48,
			Rc: 49,
			Tc: 50,
			qc: 51,
			Ta: 52,
			Xa: 53,
			Yb: 54,
			Jb: 55,
			hb: 56,
			mc: 57,
			jc: 58,
			ub: 59,
			Ub: 60,
			Kb: 61,
			Pb: 62,
			Ma: 63,
			Hc: 64,
			Qa: 65,
			Pa: 66,
			Qb: 67,
			Za: 68,
			kb: 69,
			Fb: 70,
			Vb: 71,
			wb: 72,
			kc: 73,
			Rb: 74,
			Ec: 75,
			Oa: 76,
			ec: 77,
			lb: 78,
			Fc: 79,
			Lb: 80,
			Wa: 81,
			Tb: 82,
			Gb: 83,
			Ib: 84,
			Hb: 85,
			V: 86,
			W: 87,
			Ra: 88,
			Ja: 89,
			Sa: 90,
			Zb: 91,
			Wb: 92,
			Ya: 93,
			Sc: 94,
			qb: 95,
			pb: 96,
			tb: 97,
			Mb: 98,
			jb: 99,
			Sb: 100,
			zb: 101,
			yb: 102,
			Bb: 103,
			Cb: 104,
			Ab: 105,
			Gc: 106,
			nb: 107,
			mb: 108,
			ic: 109,
			ob: 110,
			Db: 111,
			Eb: 112,
			hc: 113,
			bb: 114
		};

		function Q(a, b, c) {
			a.dataset ? a.dataset[Kb(b)] = c : a.setAttribute("data-" + b, c)
		}

		function R(a, b) {
			return a.dataset ? a.dataset[Kb(b)] : a.getAttribute("data-" + b)
		}

		function Lb(a, b) {
			a.dataset ? delete a.dataset[Kb(b)] : a.removeAttribute("data-" + b)
		}
		var Mb = {};

		function Kb(a) {
			return Mb[a] || (Mb[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
				return c.toUpperCase()
			}))
		};
		var Nb = aa("yt.dom.getNextId_");
		if(!Nb) {
			Nb = function() {
				return ++Ob
			};
			A("yt.dom.getNextId_", Nb);
			var Ob = 0
		}

		function Pb(a, b) {
			a = J(a);
			b = J(b);
			return !!rb(a, function(a) {
				return a === b
			}, l)
		}

		function Qb(a) {
			var b = document.createElement("div");
			b.innerHTML = a;
			if(b.firstElementChild != l) a = b.firstElementChild;
			else
				for(a = b.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
			return a
		};

		function Rb(a) {
			if(a = a || window.event) {
				for(var b in a) b in Sb || (this[b] = a[b]);
				this.scale = a.scale;
				this.rotation = a.rotation;
				this.S = a;
				if((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
				this.target = b;
				if(b = a.relatedTarget) try {
					b = b.nodeName && b
				} catch(c) {
					b = r
				} else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
				this.relatedTarget = b;
				this.clientX = a.clientX != l ? a.clientX : a.pageX;
				this.clientY = a.clientY != l ? a.clientY : a.pageY;
				if(document.body && document.documentElement) {
					b = document.body.scrollLeft + document.documentElement.scrollLeft;
					var d = document.body.scrollTop + document.documentElement.scrollTop;
					this.pageX = a.pageX != l ? a.pageX : a.clientX + b;
					this.pageY = a.pageY != l ? a.pageY : a.clientY + d
				}
				this.keyCode = a.keyCode ? a.keyCode : a.which;
				this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
				this.altKey = a.altKey;
				this.ctrlKey = a.ctrlKey;
				this.shiftKey = a.shiftKey;
				"MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.a && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
			}
		}
		t = Rb.prototype;
		t.S = r;
		t.type = "";
		t.target = r;
		t.relatedTarget = r;
		t.currentTarget = r;
		t.data = r;
		t.keyCode = 0;
		t.charCode = 0;
		t.altKey = s;
		t.ctrlKey = s;
		t.shiftKey = s;
		t.clientX = 0;
		t.clientY = 0;
		t.pageX = 0;
		t.pageY = 0;
		t.wheelDeltaX = 0;
		t.wheelDeltaY = 0;
		t.rotation = 0;
		t.scale = 1;
		t.preventDefault = function() {
			this.S.returnValue = s;
			this.S.preventDefault && this.S.preventDefault()
		};
		var Sb = {
			stopPropagation: 1,
			preventMouseEvent: 1,
			preventManipulation: 1,
			preventDefault: 1,
			layerX: 1,
			layerY: 1,
			scale: 1,
			rotation: 1
		};
		var Tb = aa("yt.events.listeners_") || {};
		A("yt.events.listeners_", Tb);
		var Ub = aa("yt.events.counter_") || {
			count: 0
		};
		A("yt.events.counter_", Ub);

		function Vb(a, b, c, d) {
			var e;
			a: {
				e = function(e) {
					return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
				};
				for(var f in Tb)
					if(e.call(l, Tb[f])) {
						e = f;
						break a
					}
				e = l
			}
			return e
		}

		function S(a, b, c, d) {
			if(!a || !a.addEventListener && !a.attachEvent) return "";
			d = !!d;
			var e = Vb(a, b, c, d);
			if(e) return e;
			var e = ++Ub.count + "",
				f = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter" in document),
				g;
			g = f ? function(d) {
				d = new Rb(d);
				if(!rb(d.relatedTarget, function(b) {
						return b == a
					})) return d.currentTarget = a, d.type = b, c.call(a, d)
			} : function(b) {
				b = new Rb(b);
				b.currentTarget = a;
				return c.call(a, b)
			};
			Tb[e] = [a, b, c, g, d];
			a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover", g, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", g, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", g, d) : a.addEventListener(b, g, d) : a.attachEvent("on" + b, g);
			return e
		}

		function Wb(a, b, c) {
			var d;
			d = S(a, b, function() {
				Xb(d);
				c.apply(a, arguments)
			}, l)
		}

		function T(a, b, c) {
			var d = a || document;
			return S(d, "click", function(a) {
				var f = rb(a.target, function(a) {
					return a === d || Ha(a, c)
				});
				f && f !== d && (a.currentTarget = f, b.call(f, a))
			})
		}

		function Xb(a) {
			"string" == typeof a && (a = [a]);
			D(a, function(a) {
				if(a in Tb) {
					var c = Tb[a],
						d = c[0],
						e = c[1],
						f = c[3],
						c = c[4];
					d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
					delete Tb[a]
				}
			})
		};
		var Yb = window.yt && window.yt.config_ || {};
		A("yt.config_", Yb);
		var Zb = window.yt && window.yt.tokens_ || {};
		A("yt.tokens_", Zb);
		A("yt.globals_", window.yt && window.yt.globals_ || {});
		A("yt.msgs_", window.yt && window.yt.msgs_ || {});
		var $b = window.yt && window.yt.timeouts_ || [];
		A("yt.timeouts_", $b);
		var ac = window.yt && window.yt.intervals_ || [];
		A("yt.intervals_", ac);

		function bc(a) {
			cc(Yb, arguments)
		}

		function dc(a, b) {
			return a in Yb ? Yb[a] : b
		}

		function ec(a) {
			cc(Zb, arguments)
		}

		function U(a) {
			return a in Zb ? Zb[a] : l
		}

		function fc(a, b) {
			var c = window.setTimeout(a, b);
			$b.push(c);
			return c
		}

		function cc(a, b) {
			if(1 < b.length) {
				var c = b[0];
				a[c] = b[1]
			} else {
				var d = b[0];
				for(c in d) a[c] = d[c]
			}
		};

		function gc(a) {
			this.d = 1E3 / a;
			this.b = r;
			this.a = []
		}
		var hc = new gc(24);
		gc.prototype.g = function() {
			for(var a = ka(), b = this.a.length - 1; 0 <= b; b--) ic(this.a[b], a) && jc(this, b)
		};
		gc.prototype.add = function(a) {
			this.a.push(a);
			this.b || (a = x(this.g, this), a = window.setInterval(a, this.d), ac.push(a), this.b = a)
		};
		gc.prototype.remove = function(a) {
			a = ta(this.a, a);
			0 <= a && jc(this, a)
		};

		function jc(a, b) {
			C.splice.call(a.a, b, 1);
			a.a.length || (window.clearInterval(a.b), delete a.b)
		};

		function kc(a, b, c, d, e, f, g, j) {
			this.a = a;
			this.j = b;
			this.b = c;
			this.p = d;
			this.d = e;
			this.u = f;
			this.g = g;
			this.w = j
		}
		kc.prototype.C = function() {
			return new kc(this.a, this.j, this.b, this.p, this.d, this.u, this.g, this.w)
		};

		function lc(a, b) {
			if(0 == b) return new G(a.a, a.j);
			if(1 == b) return new G(a.g, a.w);
			var c = a.a + b * (a.b - a.a),
				d = a.j + b * (a.p - a.j),
				e = a.b + b * (a.d - a.b),
				f = a.p + b * (a.u - a.p),
				g = a.d + b * (a.g - a.d),
				j = a.u + b * (a.w - a.u),
				c = c + b * (e - c),
				d = d + b * (f - d);
			return new G(c + b * (e + b * (g - e) - c), d + b * (f + b * (j - f) - d))
		}

		function mc(a, b) {
			var c = (b - a.a) / (a.g - a.a);
			if(0 >= c) return 0;
			if(1 <= c) return 1;
			for(var d = 0, e = 1, f = 0; 8 > f; f++) {
				var g = lc(a, c).x,
					j = (lc(a, c + 1E-6).x - g) / 1E-6;
				if(1E-6 > Math.abs(g - b)) return c;
				if(1E-6 > Math.abs(j)) break;
				else g < b ? d = c : e = c, c -= (g - b) / j
			}
			for(f = 0; 1E-6 < Math.abs(g - b) && 8 > f; f++) g < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), g = lc(a, c).x;
			return c
		};

		function nc(a, b) {
			this.a = new kc(0, 0, a.x, a.y, b.x, b.y, 1, 1)
		}

		function oc(a) {
			return a
		}
		var pc = new nc({
			x: 0.25,
			y: 0.1
		}, {
			x: 0.25,
			y: 1
		});

		function qc(a) {
			return lc(pc.a, mc(pc.a, a)).y
		}
		var rc = new nc({
			x: 0.42,
			y: 0
		}, {
			x: 1,
			y: 1
		});

		function sc(a) {
			return lc(rc.a, mc(rc.a, a)).y
		}
		var uc = new nc({
			x: 0,
			y: 0
		}, {
			x: 0.58,
			y: 1
		});

		function vc(a) {
			return lc(uc.a, mc(uc.a, a)).y
		}
		var wc = new nc({
			x: 0.42,
			y: 0
		}, {
			x: 0.58,
			y: 1
		});

		function xc(a) {
			return lc(wc.a, mc(wc.a, a)).y
		}

		function yc(a) {
			switch(a) {
				case "linear":
					return oc;
				case "ease-in":
					return sc;
				case "ease-out":
					return vc;
				case "ease-in-out":
					return xc;
				default:
					return qc
			}
		};

		function zc(a, b) {
			var c = b || {};
			this.h = a;
			this.ca = c.duration || 0.25;
			this.d = 1E3 * this.ca;
			this.N = c.z || r;
			this.Z = c.Fa || "ease";
			this.t(c);
			c.Ea || this.p()
		}
		zc.prototype.t = function() {};
		var Ac;

		function Bc() {
			if(!v(Ac)) {
				var a = document.createElement("div");
				v(a.style.MozTransition) ? Ac = "Moz" : v(a.style.WebkitTransition) ? Ac = "Webkit" : v(a.style.a) ? Ac = "O" : Ac = r
			}
			return Ac
		};

		function Cc(a, b) {
			zc.call(this, a, b)
		}
		B(Cc, zc);

		function Dc(a, b, c) {
			b = Bc() + b;
			a.h.style[b] = c
		}
		Cc.prototype.p = function() {
			this.h.style.opacity = this.b;
			fc(x(function() {
				Dc(this, "TransitionTimingFunction", this.Z);
				Dc(this, "TransitionDuration", this.ca + "s");
				Dc(this, "TransitionProperty", "opacity");
				Wb(this.h, I ? "webkitTransitionEnd" : Xa ? "oTransitionEnd" : "transitionend", x(function() {
					Dc(this, "TransitionTimingFunction", "");
					Dc(this, "TransitionDuration", "");
					Dc(this, "TransitionProperty", "");
					this.N && this.N(this)
				}, this));
				this.h.style.opacity = this.P
			}, this), 20)
		};

		function Ec(a, b) {
			zc.call(this, a, b)
		}
		B(Ec, zc);
		Ec.prototype.t = function(a) {
			this.a = 0;
			this.w = a.loop || hc;
			this.u = yc(this.Z)
		};
		Ec.prototype.p = function() {
			this.g = ka();
			ic(this, this.g);
			this.w.add(this)
		};

		function ic(a, b) {
			a.a = Math.min(a.a + (b - a.g), a.d);
			a.g = b;
			var c = a.u(a.a / a.d),
				c = a.b - (a.b - a.P) * c;
			a.j ? a.h.style.filter = "alpha(opacity=" + Math.floor(100 * c) + ")" : a.h.style.opacity = c;
			if(c = a.a >= a.d) a.M(), a.N && fc(x(a.N, u, a), 0);
			return c
		}
		Ec.prototype.M = function() {};

		function Fc(a, b) {
			zc.call(this, a, b)
		}
		B(Fc, Ec);
		Fc.prototype.t = function(a) {
			var b = parseFloat(a.start),
				c = parseFloat(a.end);
			this.b = isNaN(b) ? 1 : b;
			this.P = isNaN(c) ? 0 : c;
			this.j = !v(this.h.style.opacity);
			Fc.G.t.call(this, a)
		};
		Fc.prototype.M = function() {
			this.j && 1 == this.P && (this.h.style.filter = "")
		};

		function Gc(a, b) {
			zc.call(this, a, b)
		}
		B(Gc, Cc);
		Gc.prototype.t = function(a) {
			var b = parseFloat(a.start),
				c = parseFloat(a.end);
			this.b = isNaN(b) ? 1 : b;
			this.P = isNaN(c) ? 0 : c;
			Gc.G.t.call(this, a)
		};

		function Hc(a, b, c, d) {
			d = d || {};
			d.start = b;
			d.end = c;
			Bc() ? new Gc(a, d) : new Fc(a, d)
		};
		var Ic = "StopIteration" in u ? u.StopIteration : Error("StopIteration");

		function Jc() {}
		Jc.prototype.a = function() {
			h(Ic)
		};
		Jc.prototype.L = function() {
			return this
		};

		function Kc(a) {
			if(a instanceof Jc) return a;
			if("function" == typeof a.L) return a.L(s);
			if(ea(a)) {
				var b = 0,
					c = new Jc;
				c.a = function() {
					for(;;) {
						b >= a.length && h(Ic);
						if(b in a) return a[b++];
						b++
					}
				};
				return c
			}
			h(Error("Not implemented"))
		};

		function Lc(a, b) {
			this.b = {};
			this.a = [];
			var c = arguments.length;
			if(1 < c) {
				c % 2 && h(Error("Uneven number of arguments"));
				for(var d = 0; d < c; d += 2) Mc(this, arguments[d], arguments[d + 1])
			} else if(a) {
				var e;
				if(a instanceof Lc) e = a.aa(), d = a.ba();
				else {
					var c = [],
						f = 0;
					for(e in a) c[f++] = e;
					e = c;
					c = [];
					f = 0;
					for(d in a) c[f++] = a[d];
					d = c
				}
				for(c = 0; c < e.length; c++) Mc(this, e[c], d[c])
			}
		}
		t = Lc.prototype;
		t.H = 0;
		t.K = 0;
		t.ba = function() {
			Nc(this);
			for(var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
			return a
		};
		t.aa = function() {
			Nc(this);
			return this.a.concat()
		};
		t.clear = function() {
			this.b = {};
			this.K = this.H = this.a.length = 0
		};
		t.remove = function(a) {
			return Object.prototype.hasOwnProperty.call(this.b, a) ? (delete this.b[a], this.H--, this.K++, this.a.length > 2 * this.H && Nc(this), n) : s
		};

		function Nc(a) {
			if(a.H != a.a.length) {
				for(var b = 0, c = 0; b < a.a.length;) {
					var d = a.a[b];
					Object.prototype.hasOwnProperty.call(a.b, d) && (a.a[c++] = d);
					b++
				}
				a.a.length = c
			}
			if(a.H != a.a.length) {
				for(var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Object.prototype.hasOwnProperty.call(e, d) || (a.a[c++] = d, e[d] = 1), b++;
				a.a.length = c
			}
		}
		t.get = function(a, b) {
			return Object.prototype.hasOwnProperty.call(this.b, a) ? this.b[a] : b
		};

		function Mc(a, b, c) {
			Object.prototype.hasOwnProperty.call(a.b, b) || (a.H++, a.a.push(b), a.K++);
			a.b[b] = c
		}
		t.C = function() {
			return new Lc(this)
		};
		t.L = function(a) {
			Nc(this);
			var b = 0,
				c = this.a,
				d = this.b,
				e = this.K,
				f = this,
				g = new Jc;
			g.a = function() {
				for(;;) {
					e != f.K && h(Error("The map has changed since the iterator was created"));
					b >= c.length && h(Ic);
					var g = c[b++];
					return a ? g : d[g]
				}
			};
			return g
		};

		function Oc(a, b, c) {
			for(var d = a.elements, e, f = 0; e = d[f]; f++)
				if(!(e.form != a || e.disabled || "fieldset" == e.tagName.toLowerCase())) {
					var g = e.name;
					switch(e.type.toLowerCase()) {
						case "file":
						case "submit":
						case "reset":
						case "button":
							break;
						case "select-multiple":
							e = Pc(e);
							if(e != r)
								for(var j, k = 0; j = e[k]; k++) c(b, g, j);
							break;
						default:
							j = Pc(e), j != r && c(b, g, j)
					}
				}
			d = a.getElementsByTagName("input");
			for(f = 0; e = d[f]; f++) e.form == a && "image" == e.type.toLowerCase() && (g = e.name, c(b, g, e.value), c(b, g + ".x", "0"), c(b, g + ".y", "0"))
		}

		function Qc(a, b, c) {
			var d = a.get(b);
			d || (d = [], Mc(a, b, d));
			d.push(c)
		}

		function Rc(a, b, c) {
			a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
		}

		function Pc(a) {
			var b = a.type;
			if(!v(b)) return r;
			switch(b.toLowerCase()) {
				case "checkbox":
				case "radio":
					return a.checked ? a.value : r;
				case "select-one":
					return b = a.selectedIndex, 0 <= b ? a.options[b].value : r;
				case "select-multiple":
					for(var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
					return b.length ? b : r;
				default:
					return v(a.value) ? a.value : r
			}
		};

		function Sc(a) {
			a = String(a);
			if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
				return eval("(" + a + ")")
			} catch(b) {}
			h(Error("Invalid JSON string: " + a))
		}

		function Tc(a) {
			return eval("(" + a + ")")
		};

		function Uc() {
			this.a = ka()
		}
		new Uc;
		Uc.prototype.get = function() {
			return this.a
		};
		var Vc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

		function Wc(a) {
			if(Xc) {
				Xc = s;
				var b = u.location;
				if(b) {
					var c = b.href;
					if(c && (c = Yc(Wc(c)[3] || r)) && c != b.hostname) Xc = n, h(Error())
				}
			}
			return a.match(Vc)
		}
		var Xc = I;

		function Yc(a) {
			return a && decodeURIComponent(a)
		}

		function Zc(a) {
			if(a[1]) {
				var b = a[0],
					c = b.indexOf("#");
				0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
				c = b.indexOf("?");
				0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = l)
			}
			return a.join("")
		}

		function $c(a, b, c) {
			if(da(b))
				for(var d = 0; d < b.length; d++) $c(a, String(b[d]), c);
			else b != r && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
		}

		function ad(a, b, c) {
			Math.max(b.length - (c || 0), 0);
			for(c = c || 0; c < b.length; c += 2) $c(b[c], b[c + 1], a);
			return a
		}

		function bd(a, b) {
			for(var c in b) $c(c, b[c], a);
			return a
		}

		function cd(a, b) {
			return Zc(2 == arguments.length ? ad([a], arguments[1], 0) : ad([a], arguments, 1))
		};

		function dd(a) {
			"?" == a.charAt(0) && (a = a.substr(1));
			a = a.split("&");
			for(var b = {}, c = 0, d = a.length; c < d; c++) {
				var e = a[c].split("=");
				if(1 == e.length && e[0] || 2 == e.length) {
					var f = decodeURIComponent((e[0] || "").replace(/\+/g, " ")),
						e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
					f in b ? da(b[f]) ? xa(b[f], e) : b[f] = [b[f], e] : b[f] = e
				}
			}
			return b
		}

		function ed(a) {
			a = bd([], a);
			a[0] = "";
			return a.join("")
		}

		function fd(a, b) {
			var c = a.split("?", 2);
			a = c[0];
			var c = dd(c[1] || ""),
				d;
			for(d in b) c[d] = b[d];
			return Zc(bd([a], c))
		};
		var gd = r;
		"undefined" != typeof XMLHttpRequest ? gd = function() {
			return new XMLHttpRequest
		} : "undefined" != typeof ActiveXObject && (gd = function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		});

		function hd(a) {
			switch(a && "status" in a ? a.status : -1) {
				case 0:
				case 200:
				case 204:
				case 304:
					return n;
				default:
					return s
			}
		};

		function id(a, b, c, d, e, f) {
			var g = gd && gd();
			if("open" in g) {
				g.onreadystatechange = function() {
					4 == (g && "readyState" in g ? g.readyState : 0) && b && b(g)
				};
				c = (c || "GET").toUpperCase();
				d = d || "";
				g.open(c, a, n);
				f && (g.responseType = f);
				a = "POST" == c;
				if(e)
					for(var j in e) g.setRequestHeader(j, e[j]), "content-type" == j.toLowerCase() && (a = s);
				a && g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				g.send(d);
				return g
			}
		}

		function V(a, b) {
			var c = b.format || "JSON";
			b.Ga && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
			var d = b.i;
			d && (a = fd(a, d));
			var e = b.ka || "";
			if(d = b.o) e = dd(e), Na(e, d), e = ed(e);
			var f = s,
				g, j = id(a, function(a) {
					if(!f) {
						f = n;
						g && window.clearTimeout(g);
						var d = hd(a),
							e = r;
						if(d || 400 <= a.status && 500 > a.status) {
							var j = r;
							switch(c) {
								case "JSON":
									var e = a.responseText,
										y = a.getResponseHeader("Content-Type") || "";
									e && 0 <= y.indexOf("json") && (j = Tc(e));
									break;
								case "XML":
									if(e = (e = a.responseXML) ? jd(e) : r) j = {}, D(e.getElementsByTagName("*"), function(a) {
										j[a.tagName] = kd(a)
									})
							}
							e = j
						}
						if(d) a: {
							switch(c) {
								case "XML":
									d = 0 == parseInt(e && e.return_code, 10);
									break a;
								case "RAW":
									d = n;
									break a
							}
							d = !!e
						}
						e = e || {};
						y = b.U || u;
						d ? b.k && b.k.call(y, a, e) : b.onError && b.onError.call(y, a, e);
						b.z && b.z.call(y, a, e)
					}
				}, b.method, e, b.headers, b.responseType);
			b.ra && 0 < b.timeout && (g = fc(function() {
				f || (f = n, j.abort(), window.clearTimeout(g), b.ra.call(b.U || u, j))
			}, b.timeout))
		}

		function ld(a, b) {
			var c = b.onComplete || r,
				d = b.onException || r,
				e = b.onError || r,
				f = b.update || r,
				g = b.json || s;
			id(a, function(a) {
				if(hd(a)) {
					var b = a.responseXML,
						m = b ? jd(b) : r,
						b = !(!b || !m),
						p, q;
					if(b && (p = md(m, "return_code"), q = md(m, "html_content"), 0 == p)) {
						f && q && (J(f).innerHTML = q);
						var y = md(m, "js_content");
						if(y) {
							var O = document.createElement("script");
							O.text = y;
							document.getElementsByTagName("head")[0].appendChild(O)
						}
					}
					c && (b ? (b = md(m, "redirect_on_success"), p && b ? window.location = b : ((m = md(m, 0 == p ? "success_message" : "error_message")) && alert(m), a = g ? eval("(" + q + ")") : a, 0 == p ? c(a) : d && d(a))) : a.responseText && c(a))
				} else e && e(a)
			}, b.method || "POST", b.postBody || r, b.headers || r)
		}

		function jd(a) {
			return !a ? r : (a = ("responseXML" in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : r
		}

		function md(a, b) {
			if(!a) return r;
			var c = a.getElementsByTagName(b);
			return c && 0 < c.length ? kd(c[0]) : r
		}

		function kd(a) {
			var b = "";
			D(a.childNodes, function(a) {
				b += a.nodeValue
			});
			return b
		};

		function nd() {};

		function od() {
			this.a = [];
			this.v = {}
		}
		B(od, nd);
		t = od.prototype;
		t.ea = 1;
		t.R = 0;
		t.T = function(a, b, c) {
			var d = this.v[a];
			d || (d = this.v[a] = []);
			var e = this.ea;
			this.a[e] = a;
			this.a[e + 1] = b;
			this.a[e + 2] = c;
			this.ea = e + 3;
			d.push(e);
			return e
		};
		t.ha = function(a, b, c) {
			if(a = this.v[a]) {
				var d = this.a;
				if(a = wa(a, function(a) {
						return d[a + 1] == b && d[a + 2] == c
					})) return this.Q(a)
			}
			return s
		};
		t.Q = function(a) {
			if(0 != this.R) return this.b || (this.b = []), this.b.push(a), s;
			var b = this.a[a];
			if(b) {
				var c = this.v[b];
				if(c) {
					var d = ta(c, a);
					0 <= d && C.splice.call(c, d, 1)
				}
				delete this.a[a];
				delete this.a[a + 1];
				delete this.a[a + 2]
			}
			return !!b
		};
		t.A = function(a, b) {
			var c = this.v[a];
			if(c) {
				this.R++;
				for(var d = za(arguments, 1), e = 0, f = c.length; e < f; e++) {
					var g = c[e];
					this.a[g + 1].apply(this.a[g + 2], d)
				}
				this.R--;
				if(this.b && 0 == this.R)
					for(; c = this.b.pop();) this.Q(c);
				return 0 != e
			}
			return s
		};
		t.clear = function(a) {
			if(a) {
				var b = this.v[a];
				b && (D(b, this.Q, this), delete this.v[a])
			} else this.a.length = 0, this.v = {}
		};
		var pd = aa("yt.pubsub.instance_") || new od;
		od.prototype.subscribe = od.prototype.T;
		od.prototype.unsubscribeByKey = od.prototype.Q;
		od.prototype.publish = od.prototype.A;
		od.prototype.clear = od.prototype.clear;
		A("yt.pubsub.instance_", pd);

		function qd(a, b, c) {
			var d = aa("yt.pubsub.instance_");
			return d ? d.subscribe(a, function() {
				var a = arguments;
				fc(function() {
					b.apply(c || u, a)
				}, 0)
			}, c) : 0
		}

		function rd(a, b) {
			var c = aa("yt.pubsub.instance_");
			return c ? c.publish.apply(c, arguments) : s
		};

		function sd(a, b, c, d) {
			this.top = a;
			this.right = b;
			this.bottom = c;
			this.left = d
		}
		sd.prototype.C = function() {
			return new sd(this.top, this.right, this.bottom, this.left)
		};

		function td(a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d
		}
		td.prototype.C = function() {
			return new td(this.left, this.top, this.width, this.height)
		};

		function ud(a, b, c) {
			w(b) ? vd(a, c, b) : La(b, ja(vd, a))
		}

		function vd(a, b, c) {
			var d;
			a: if(d = String(c).replace(/\-([a-z])/g, function(a, b) {
					return b.toUpperCase()
				}), a.style[d] === l) {
				var e = I ? "Webkit" : Ya ? "Moz" : H ? "ms" : Xa ? "O" : r,
					f = w(l) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
				c = c.replace(RegExp("(^" + (f ? "|[" + f + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
					return b + c.toUpperCase()
				});
				e = e + c;
				if(a.style[e] !== l) {
					d = e;
					break a
				}
			}
			d && (a.style[d] = b)
		}

		function wd(a, b) {
			var c = ob(a);
			return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, r)) ? c[b] || c.getPropertyValue(b) || "" : ""
		}

		function xd(a, b) {
			return wd(a, b) || (a.currentStyle ? a.currentStyle[b] : r) || a.style && a.style[b]
		}

		function yd(a) {
			var b = a.getBoundingClientRect();
			H && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
			return b
		}

		function zd(a) {
			if(H && !(H && 8 <= lb)) return a.offsetParent;
			var b = ob(a),
				c = xd(a, "position"),
				d = "fixed" == c || "absolute" == c;
			for(a = a.parentNode; a && a != b; a = a.parentNode)
				if(c = xd(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
			return r
		}

		function Ad(a) {
			for(var b = new sd(0, Infinity, Infinity, 0), c = mb(a), d = c.a.body, e = c.a.documentElement, f = !I && "CSS1Compat" == c.a.compatMode ? c.a.documentElement : c.a.body; a = zd(a);)
				if((!H || 0 != a.clientWidth) && (!I || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != xd(a, "overflow")) {
					var g = Bd(a),
						j;
					j = a;
					if(Ya && !jb("1.9")) {
						var k = parseFloat(wd(j, "borderLeftWidth"));
						if(Cd(j)) var m = j.offsetWidth - j.clientWidth - k - parseFloat(wd(j, "borderRightWidth")),
							k = k + m;
						j = new G(k, parseFloat(wd(j, "borderTopWidth")))
					} else j = new G(j.clientLeft, j.clientTop);
					g.x += j.x;
					g.y += j.y;
					b.top = Math.max(b.top, g.y);
					b.right = Math.min(b.right, g.x + a.clientWidth);
					b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
					b.left = Math.max(b.left, g.x)
				}
			d = f.scrollLeft;
			f = f.scrollTop;
			b.left = Math.max(b.left, d);
			b.top = Math.max(b.top, f);
			c = (c.a.parentWindow || c.a.defaultView || window).document;
			c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
			c = new Ka(c.clientWidth, c.clientHeight);
			b.right = Math.min(b.right, d + c.width);
			b.bottom = Math.min(b.bottom, f + c.height);
			return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : r
		}

		function Bd(a) {
			var b, c = ob(a),
				d = xd(a, "position"),
				e = Ya && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
				f = new G(0, 0),
				g;
			b = c ? ob(c) : document;
			g = H && !(H && 9 <= lb) && !sb(mb(b)) ? b.body : b.documentElement;
			if(a == g) return f;
			if(a.getBoundingClientRect) b = yd(a), a = tb(mb(c)), f.x = b.left + a.x, f.y = b.top + a.y;
			else if(c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
			else {
				b = a;
				do {
					f.x += b.offsetLeft;
					f.y += b.offsetTop;
					b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
					if(I && "fixed" == xd(b, "position")) {
						f.x += c.body.scrollLeft;
						f.y += c.body.scrollTop;
						break
					}
					b = b.offsetParent
				} while (b && b != a);
				if(Xa || I && "absolute" == d) f.y -= c.body.offsetTop;
				for(b = a;
					(b = zd(b)) && b != c.body && b != g;)
					if(f.x -= b.scrollLeft, !Xa || "TR" != b.tagName) f.y -= b.scrollTop
			}
			return f
		}

		function Dd(a, b) {
			"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
			return a
		}

		function Ed(a) {
			if("none" != xd(a, "display")) return Fd(a);
			var b = a.style,
				c = b.display,
				d = b.visibility,
				e = b.position;
			b.visibility = "hidden";
			b.position = "absolute";
			b.display = "inline";
			a = Fd(a);
			b.display = c;
			b.position = e;
			b.visibility = d;
			return a
		}

		function Fd(a) {
			var b = a.offsetWidth,
				c = a.offsetHeight,
				d = I && !b && !c;
			return(!v(b) || d) && a.getBoundingClientRect ? (a = yd(a), new Ka(a.right - a.left, a.bottom - a.top)) : new Ka(b, c)
		}

		function Cd(a) {
			return "rtl" == xd(a, "direction")
		}

		function Gd(a, b) {
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

		function Hd(a, b) {
			var c = a.currentStyle ? a.currentStyle[b] : r;
			return c ? Gd(a, c) : 0
		}
		var Id = {
			thin: 2,
			medium: 4,
			thick: 6
		};

		function Jd(a, b) {
			if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : r)) return 0;
			var c = a.currentStyle ? a.currentStyle[b + "Width"] : r;
			return c in Id ? Id[c] : Gd(a, c)
		}
		var Kd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

		function Ld(a, b) {
			if((a = J(a)) && a.style) a.style.display = b ? "" : "none", E(a, "hid", !b)
		}

		function Md(a) {
			D(arguments, function(a) {
				Ld(a, n)
			})
		}

		function W(a) {
			D(arguments, function(a) {
				Ld(a, s)
			})
		};

		function X(a, b) {
			this.w = "session_token=" + a;
			if((this.a = document.location.protocol + "//" + document.location.hostname) && "/" != this.a.charAt(this.a.length - 1)) this.a += "/";
			this.F = b;
			this.b = r;
			this.p = [];
			this.g = [];
			this.u = {}
		}
		A("yt.sharing.AutoShare", X);
		X.prototype.d = function(a, b, c, d) {
			S(a, "click", x(this.ia, this));
			a.id ? (this.u[a.id] = {
				serviceName: b,
				connectOnly: c
			}, d && (this.u[a.id].connectOnlyCallback = d)) : h("Connect dialog launch buttons must have an id.")
		};
		X.prototype.registerConnectDialogLauncher = X.prototype.d;
		X.prototype.ia = function(a) {
			if(a = this.u[a.currentTarget.id]) {
				var b = a.connectOnly;
				a.connectOnlyCallback && (b = (0, a.connectOnlyCallback)());
				this.j(a.serviceName, b)
			}
		};
		X.prototype.handleConnectService = X.prototype.ia;
		X.prototype.Ca = function() {
			this.B()
		};
		X.prototype.doOnLoad = X.prototype.Ca;
		X.prototype.ga = function(a) {
			this.p.push(a)
		};
		X.prototype.addServiceChangedCallback = X.prototype.ga;
		X.prototype.za = function(a) {
			this.g.push(a)
		};
		X.prototype.addCanConnectCallback = X.prototype.za;
		X.prototype.Da = function() {
			return this.F
		};
		X.prototype.getServiceInfo = X.prototype.Da;
		X.prototype.j = function(a, b) {
			for(var c in this.g)
				if(!(0, this.g[c])(this, a, b)) return;
			ld(this.a + "autoshare?action_ajax_stats_ping=1&stat=connect_has_google&service=" + a, {
				method: "GET",
				onComplete: function() {}
			});
			c = this.a + "autoshare?action_popup_auth=1&service=" + a + "&connect_only=" + (b ? "True" : "False") + "&root_url=" + encodeURIComponent(this.a);
			if("facebook" == a) {
				var d = "read_stream,offline_access,manage_pages";
				b || (d = [d, "publish_stream"].join());
				c += "&permissions=" + encodeURIComponent(d)
			}
			this.oa(c, {
				height: 500,
				width: 860
			})
		};
		X.prototype.connectService = X.prototype.j;
		X.prototype.Aa = function(a, b) {
			var c = x(function(a) {
					this.F = a;
					this.B();
					b && b()
				}, this),
				d = x(function() {
					b && b();
					this.B()
				}, this),
				e = {
					action_ajax_connect_service: 1
				};
			e.return_url = a;
			ld(this.a + "autoshare?ajax_connect_service", {
				postBody: ed(e) + "&" + this.w,
				onComplete: c,
				onException: d,
				json: n
			})
		};
		X.prototype.connectServiceDone = X.prototype.Aa;
		X.prototype.Ba = function(a) {
			this.ya(a)
		};
		X.prototype.disconnectService = X.prototype.Ba;
		X.prototype.xa = function(a, b) {
			var c = x(function(a) {
					this.F = a;
					this.B()
				}, this),
				d = x(function() {
					this.B()
				}, this),
				e = {
					action_ajax_set_connect_only: 1
				};
			e.service = a;
			e.connect_only = b ? "True" : "False";
			ld(this.a + "autoshare?ajax_set_connect_only", {
				postBody: ed(e) + "&" + this.w,
				onComplete: c,
				onException: d,
				json: n
			})
		};
		X.prototype.setConnectOnly = X.prototype.xa;
		X.prototype.ya = function(a) {
			var b = x(function(a) {
					this.F = a;
					this.B()
				}, this),
				c = x(function() {
					this.B()
				}, this),
				d = {
					action_ajax_disconnect_service: 1
				};
			d.service = a;
			ld(this.a + "autoshare?ajax_disconnect_service", {
				postBody: ed(d) + "&" + this.w,
				onComplete: b,
				onException: c,
				json: n
			})
		};
		X.prototype.B = function() {
			for(var a in this.p)(0, this.p[a])(this)
		};
		X.prototype.oa = function(a, b) {
			if(this.b) try {
				this.b.close()
			} catch(c) {
				this.b = r
			}
			var d;
			d = b || {};
			d.target = d.target || a.target || "YouTube";
			d.width = d.width || 600;
			d.height = d.height || 600;
			var e = d;
			e || (e = {});
			var f = window;
			d = "undefined" != typeof a.href ? a.href : String(a);
			var g = e.target || a.target,
				j = [],
				k;
			for(k in e) switch(k) {
				case "width":
				case "height":
				case "top":
				case "left":
					j.push(k + "=" + e[k]);
					break;
				case "target":
				case "noreferrer":
					break;
				default:
					j.push(k + "=" + (e[k] ? 1 : 0))
			}
			k = j.join(",");
			if(e.noreferrer) {
				if(e = f.open("", g, k)) H && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), e.opener = r, I ? e.location.href = d : (d = na(d), e.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'), e.document.close())
			} else e = f.open(d, g, k);
			(d = e) ? (d.opener || (d.opener = window), d.focus()) : d = r;
			this.b = !d
		};
		X.prototype.Ha = function() {
			this.j("facebook", !this.F.facebook.is_autosharing)
		};
		var Nd = {},
			Od = "ontouchstart" in document;

		function Pd(a, b, c) {
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
			return rb(c, function(a) {
				return Ha(a, b)
			}, d)
		}

		function Y(a) {
			var b = "mouseover" == a.type && "mouseenter" in Nd || "mouseout" == a.type && "mouseleave" in Nd,
				c = a.type in Nd || b;
			if("HTML" != a.target.tagName && c) {
				if(b) {
					var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
						c = Nd[b],
						d;
					for(d in c.v) {
						var e = Pd(b, d, a.target);
						e && !rb(a.relatedTarget, function(a) {
							return a == e
						}) && c.A(d, e, b, a)
					}
				}
				if(b = Nd[a.type])
					for(d in b.v)(e = Pd(a.type, d, a.target)) && b.A(d, e, a.type, a)
			}
		}
		S(document, "blur", Y, n);
		S(document, "change", Y, n);
		S(document, "click", Y);
		S(document, "focus", Y, n);
		S(document, "mouseover", Y);
		S(document, "mouseout", Y);
		S(document, "mousedown", Y);
		S(document, "keydown", Y);
		S(document, "keyup", Y);
		S(document, "keypress", Y);
		S(document, "cut", Y);
		S(document, "paste", Y);
		Od && (S(document, "touchstart", Y), S(document, "touchend", Y), S(document, "touchcancel", Y));
		A("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

		function Qd() {}
		Qd.prototype.g = function(a, b, c) {
			var d = this.a(a, b);
			if(d && (d = aa(d))) {
				var e = za(arguments, 2);
				ya(e, 0, 0, a);
				d.apply(r, e)
			}
		};
		Qd.prototype.a = function(a, b) {
			return R(a, b)
		};
		Qd.prototype.b = function(a) {
			return P(a, Z(this))
		};

		function Z(a, b) {
			return "yt-uix" + (a.d ? "-" + a.d : "") + (b ? "-" + b : "")
		};

		function Rd() {}
		B(Rd, Qd);
		ba(Rd);
		Rd.prototype.d = "form-input";

		function Sd(a, b) {
			var c = Yc(Wc(a)[3] || r),
				d;
			if(!(d = c == Yc(Wc(window.location.href)[3] || r))) {
				if(c = !c) c = 0 == a.lastIndexOf("/", 0);
				d = c
			}
			if(d) {
				var e = Wc(a),
					c = e[5];
				d = e[6];
				var e = e[7],
					f = "";
				c && (f += c);
				d && (f += "?" + d);
				e && (f += "#" + e);
				c = f;
				d = c.indexOf("#");
				if(c = 0 > d ? c : c.substr(0, d)) {
					for(e = d = 0; e < c.length; ++e) d = 31 * d + c.charCodeAt(e), d %= 4294967296;
					c = "s_tempdata-" + d;
					d = b ? ed(b) : "";
					zb(c, d, 5)
				}
			}
		};
		var Td = {},
			Ud = 0;

		function Vd(a) {
			if(a) {
				var b = new Image,
					c = "" + Ud++;
				Td[c] = b;
				b.onload = b.onerror = function() {
					delete Td[c]
				};
				b.src = a;
				b = eval("null")
			}
		};

		function Wd(a) {
			var b = dc("CONVERSION_CONFIG_DICT");
			if(b) {
				var c = "followon_" + a;
				if(!b.baseUrl || !b.uid) a = r;
				else {
					var d = b.rmktEnabled,
						e = b.focEnabled && !b.isAd;
					if(!d && !e) a = r;
					else {
						c = {
							label: e ? c : "default"
						};
						if(d) {
							d = {
								utuid: b.uid,
								type: a
							};
							b.vid && (d.utvid = b.vid);
							b.eventLabel && (d.el = b.eventLabel);
							b.playerStyle && (d.ps = b.playerStyle);
							b.feature && (d.feature = b.feature);
							b.ppe && (d.ppe = b.ppe);
							var f = [],
								g;
							for(g in d) f.push(encodeURIComponent(g) + "=" + encodeURIComponent(d[g]));
							c.data = f.join(";")
						}
						if(e && "view" == a && b.vid && b.uid && (b.oeid || b.ieid)) b.oeid && (c.oeid = b.oeid), b.ieid && (c.ieid = b.ieid), c.evid = b.vid;
						e && (c.foc_id = b.uid);
						a = Zc(bd([b.baseUrl], c))
					}
				}
				a && Vd(a)
			}
		};

		function Xd(a) {
			for(var b = 0, c = 0, d = a.length; c < d; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
			return b
		}

		function Yd() {
			return "loaded".replace(/([A-Z])/g, "-$1").toLowerCase()
		};

		function Zd(a, b, c, d, e, f, g) {
			var j, k;
			if(j = c.offsetParent) {
				var m = "HTML" == j.tagName || "BODY" == j.tagName;
				if(!m || "static" != xd(j, "position")) k = Bd(j), m || (m = (m = Cd(j)) && Ya ? -j.scrollLeft : m && (!H || !jb("8")) ? j.scrollWidth - j.clientWidth - j.scrollLeft : j.scrollLeft, k = Ja(k, new G(m, j.scrollTop)))
			}
			j = k || new G;
			k = Bd(a);
			m = Ed(a);
			k = new td(k.x, k.y, m.width, m.height);
			if(m = Ad(a)) {
				var p = new td(m.left, m.top, m.right - m.left, m.bottom - m.top),
					m = Math.max(k.left, p.left),
					q = Math.min(k.left + k.width, p.left + p.width);
				if(m <= q) {
					var y = Math.max(k.top, p.top),
						p = Math.min(k.top + k.height, p.top + p.height);
					y <= p && (k.left = m, k.top = y, k.width = q - m, k.height = p - y)
				}
			}
			m = mb(a);
			y = mb(c);
			if(m.a != y.a) {
				var q = m.a.body,
					y = y.a.parentWindow || y.a.defaultView,
					p = new G(0, 0),
					O = ob(q) ? ob(q).parentWindow || ob(q).defaultView : window,
					tc = q;
				do {
					var F;
					if(O == y) F = Bd(tc);
					else {
						F = tc;
						var la = new G;
						if(1 == F.nodeType) {
							if(F.getBoundingClientRect) {
								var K = yd(F);
								la.x = K.left;
								la.y = K.top
							} else {
								var K = tb(mb(F)),
									$ = Bd(F);
								la.x = $.x - K.x;
								la.y = $.y - K.y
							}
							Ya && !jb(12) && (K = l, K = l, H ? K = "-ms-transform" : I ? K = "-webkit-transform" : Xa ? K = "-o-transform" : Ya && (K = "-moz-transform"), $ = l, K && ($ = xd(F, K)), $ || ($ = xd(F, "transform")), $ ? (F = $.match(Kd), K = !F ? new G(0, 0) : new G(parseFloat(F[1]), parseFloat(F[2]))) : K = new G(0, 0), la = new G(la.x + K.x, la.y + K.y))
						} else K = "function" == ca(F.fa), $ = F, F.targetTouches ? $ = F.targetTouches[0] : K && F.fa().targetTouches && ($ = F.fa().targetTouches[0]), la.x = $.clientX, la.y = $.clientY;
						F = la
					}
					p.x += F.x;
					p.y += F.y
				} while (O && O != y && (tc = O.frameElement) && (O = O.parent));
				q = Ja(p, Bd(q));
				H && !sb(m) && (q = Ja(q, tb(m)));
				k.left += q.x;
				k.top += q.y
			}
			a = (b & 4 && Cd(a) ? b ^ 2 : b) & -5;
			k = new G(a & 2 ? k.left + k.width : k.left, a & 1 ? k.top + k.height : k.top);
			k = Ja(k, j);
			e && (k.x += (a & 2 ? -1 : 1) * e.x, k.y += (a & 1 ? -1 : 1) * e.y);
			var z;
			if(g && (z = Ad(c))) z.top -= j.y, z.right -= j.x, z.bottom -= j.y, z.left -= j.x;
			a: {
				b = z;
				a = k.C();
				e = 0;
				j = (d & 4 && Cd(c) ? d ^ 2 : d) & -5;
				z = Ed(c);
				d = z.C();
				if(f || 0 != j) j & 2 ? a.x -= d.width + (f ? f.right : 0) : f && (a.x += f.left), j & 1 ? a.y -= d.height + (f ? f.bottom : 0) : f && (a.y += f.top);
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
				f = Ya && (Sa || $a) && jb("1.9");
				a instanceof G ? (g = a.x, a = a.y) : (g = a, a = l);
				c.style.left = Dd(g, f);
				c.style.top = Dd(a, f);
				if(!(z == d || (!z || !d ? 0 : z.width == d.width && z.height == d.height))) f = sb(mb(ob(c))), H && (!f || !jb("8")) ? (g = c.style, f ? (H ? (f = Hd(c, "paddingLeft"), z = Hd(c, "paddingRight"), a = Hd(c, "paddingTop"), b = Hd(c, "paddingBottom"), f = new sd(a, z, b, f)) : (f = wd(c, "paddingLeft"), z = wd(c, "paddingRight"), a = wd(c, "paddingTop"), b = wd(c, "paddingBottom"), f = new sd(parseFloat(a), parseFloat(z), parseFloat(b), parseFloat(f))), H ? (z = Jd(c, "borderLeft"), a = Jd(c, "borderRight"), b = Jd(c, "borderTop"), c = Jd(c, "borderBottom"), c = new sd(b, a, c, z)) : (z = wd(c, "borderLeftWidth"), a = wd(c, "borderRightWidth"), b = wd(c, "borderTopWidth"), c = wd(c, "borderBottomWidth"), c = new sd(parseFloat(b), parseFloat(a), parseFloat(c), parseFloat(z))), g.pixelWidth = d.width - c.left - f.left - f.right - c.right, g.pixelHeight = d.height - c.top - f.top - f.bottom - c.bottom) : (g.pixelWidth = d.width, g.pixelHeight = d.height)) : (c = c.style, Ya ? c.MozBoxSizing = "border-box" : I ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(d.width, 0) + "px", c.height = Math.max(d.height, 0) + "px");
				c = e
			}
			return c
		};

		function $d() {}
		B($d, Qd);
		ba($d);
		$d.prototype.d = "button";

		function ae(a, b) {
			this.b = a;
			this.a = new od;
			T(this.b, x(this.j, this), "yt-dialog-dismiss");
			var c = M("yt-dialog-fg-content", this.b),
				d = [];
			La(be, function(a) {
				d.push("yt-dialog-show-" + a)
			});
			Ga(c, d, "yt-dialog-show-content");
			this.d = b
		}
		var be = {
			LOADING: "loading",
			Ia: "content",
			Uc: "working"
		};
		ae.prototype.j = function(a) {
			a = a.currentTarget;
			a.disabled || (a = R(a, "action") || "", ce(this, a))
		};

		function ce(a, b) {
			a.a.A("pre-all");
			a.a.A("pre-" + b);
			W(a.b);
			W(a.p);
			var c = document.getElementsByTagName("embed"),
				d = document.getElementsByTagName("object"),
				e = x(function(a) {
					if(R(a, "dialog-hidden")) {
						Lb(a, "dialog-hidden");
						var b = R(a, "dialog-visibility-value");
						a.style.visibility = b ? b : ""
					}
				}, a);
			D(c, e);
			D(d, e);
			a.d || (c = x(a.g, a), (c = Vb(document, "keydown", c, s)) && Xb(c));
			a.a.A("post-all");
			a.a.A("post-" + b)
		}
		ae.prototype.g = function(a) {
			27 == a.keyCode && ce(this, "cancel")
		};
		A("yt.ui.Dialog", ae);

		function de() {};

		function ee() {}
		B(ee, de);
		ee.prototype.clear = function() {
			var a;
			a = this.L(n);
			if(ea(a)) {
				var b = a.length;
				if(0 < b) {
					for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
					a = c
				} else a = []
			} else {
				a = Kc(a);
				var e = [],
					b = function(a) {
						e.push(a)
					};
				if(ea(a)) try {
					D(a, b, l)
				} catch(f) {
					f !== Ic && h(f)
				} else {
					a = Kc(a);
					try {
						for(;;) b.call(l, a.a())
					} catch(g) {
						g !== Ic && h(g)
					}
				}
				a = e
			}
			var j = this;
			D(a, function(a) {
				j.remove(a)
			})
		};

		function fe(a) {
			this.a = a
		}
		B(fe, ee);

		function ge(a) {
			try {
				return !!a.a && !!a.a.getItem
			} catch(b) {}
			return s
		}
		fe.prototype.get = function(a) {
			a = this.a.getItem(a);
			!w(a) && a !== r && h("Storage mechanism: Invalid value was encountered");
			return a
		};
		fe.prototype.remove = function(a) {
			this.a.removeItem(a)
		};
		fe.prototype.L = function(a) {
			var b = 0,
				c = this.a,
				d = new Jc;
			d.a = function() {
				b >= c.length && h(Ic);
				var d;
				d = c.key(b++);
				if(a) return d;
				d = c.getItem(d);
				w(d) || h("Storage mechanism: Invalid value was encountered");
				return d
			};
			return d
		};
		fe.prototype.clear = function() {
			this.a.clear()
		};

		function he() {
			var a = r;
			try {
				a = window.localStorage || r
			} catch(b) {}
			this.a = a
		}
		B(he, fe);

		function ie() {
			var a = r;
			try {
				a = window.sessionStorage || r
			} catch(b) {}
			this.a = a
		}
		B(ie, fe);

		function je(a) {
			this.a = a
		}
		je.prototype.a = r;
		je.prototype.get = function(a) {
			a = this.a.get(a);
			if(a !== r) try {
				return Sc(a)
			} catch(b) {
				h("Storage: Invalid value was encountered")
			}
		};
		je.prototype.remove = function(a) {
			this.a.remove(a)
		};

		function ke(a) {
			this.a = a
		}
		B(ke, je);
		ke.prototype.b = function(a) {
			a = ke.G.get.call(this, a);
			if(!v(a) || a instanceof Object) return a;
			h("Storage: Invalid value was encountered")
		};
		ke.prototype.get = function(a) {
			(a = this.b(a)) ? (a = a.data, v(a) || h("Storage: Invalid value was encountered")) : a = l;
			return a
		};

		function le(a) {
			this.a = a
		}
		B(le, ke);
		le.prototype.b = function(a, b) {
			var c = le.G.b.call(this, a);
			if(c) {
				var d;
				if(d = !b) {
					d = c.creation;
					var e = c.expiration;
					d = !!e && e < ka() || !!d && d > ka()
				}
				if(d) le.prototype.remove.call(this, a);
				else return c
			}
		};

		function me(a) {
			this.a = a
		}
		B(me, le);
		var ne = new me(new he);
		ge(ne.a) || (ne = r);
		var oe = new me(new ie);
		ge(oe.a) || (oe = r);
		var pe = {};
		var qe = aa("yt.timing.data_") || {};
		A("yt.timing.data_", qe);

		function re(a) {
			function b(a, b) {
				var e = R(a, "group-key");
				if(e) {
					var f = a,
						f = J(f),
						e = e || f[fa] || (f[fa] = ++ga),
						g = pe[e];
					g && (pe[e] = ua(g, function(a) {
						return a[0] != f
					}));
					Lb(a, "group-key")
				}
				a.src = b
			}
			a = pb("img", r, a);
			D(a, function(a) {
				var d = R(a, "thumb");
				d && b.call(u, a, d)
			})
		};
		A("yt.pubsub.publish", rd);

		function se(a) {
			var b = {
				channel: "c",
				all: "a"
			};
			return b[a] || b.channel
		};

		function te() {}
		B(te, Qd);
		te.prototype.b = function(a) {
			var b = Qd.prototype.b.call(this, a);
			return !b ? a : b
		};
		te.prototype.a = function(a, b) {
			var c = te.G.a.call(this, a, "card-config");
			return c && (c = aa(c)) && c[b] ? c[b] : te.G.a.call(this, a, b)
		};

		function ue(a, b, c) {
			var d = c || b,
				e = Z(a, "card");
			c = d.__yt_uid_key;
			c || (c = Nb(), d.__yt_uid_key = c);
			var f = e + c;
			c = J(f);
			var g = ve(a, d);
			if(c) return c;
			c = document.createElement("div");
			c.id = f;
			c.className = e;
			(d = a.a(d, "card-class")) && Ca(c, d);
			d = document.createElement("div");
			d.className = Z(a, "card-border");
			b = a.a(b, "orientation") || "horizontal";
			e = document.createElement("div");
			e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
			f = document.createElement("div");
			f.className = Z(a, "card-body");
			a = document.createElement("div");
			a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
			qb(g);
			f.appendChild(g);
			d.appendChild(a);
			d.appendChild(f);
			c.appendChild(e);
			c.appendChild(d);
			document.body.appendChild(c);
			return c
		}

		function we(a, b, c) {
			var d = a.a(b, "orientation") || "horizontal",
				e = a.a(b, "position"),
				f = !!a.a(b, "force-position"),
				d = "horizontal" == d,
				g = "bottomright" == e || "bottomleft" == e,
				j = "topright" == e || "bottomright" == e,
				k, m;
			j && g ? (m = 7, k = 4) : j && !g ? (m = 6, k = 5) : !j && g ? (m = 5, k = 6) : (m = 4, k = 7);
			var p = Cd(document.body),
				e = Cd(b);
			p != e && (m ^= 2);
			var q;
			d ? (e = b.offsetHeight / 2 - 12, q = new G(-12, b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6, q = new G(b.offsetWidth + 6, -12));
			var y = Ed(c),
				e = Math.min(e, (d ? y.height : y.width) - 24 - 6);
			6 > e && (e = 6, d ? q.y += 12 - b.offsetHeight / 2 : q.x += 12 - b.offsetWidth / 2);
			var O = r;
			f || (O = 10);
			y = Z(a, "card-flip");
			a = Z(a, "card-reverse");
			E(c, y, j);
			E(c, a, g);
			O = Zd(b, m, c, k, q, r, O);
			!f && O && (O & 48 && (j = !j, m ^= 2, k ^= 2), O & 192 && (g = !g, m ^= 1, k ^= 1), E(c, y, j), E(c, a, g), Zd(b, m, c, k, q));
			b = M("yt-uix-card-body-arrow", c);
			f = M("yt-uix-card-border-arrow", c);
			d = d ? g ? "top" : "bottom" : !p && j || p && !j ? "left" : "right";
			b.setAttribute("style", "");
			f.setAttribute("style", "");
			b.style[d] = e + "px";
			f.style[d] = e + "px";
			g = M("yt-uix-card-arrow", c);
			b = M("yt-uix-card-arrow-background", c);
			g && b && (c = "right" == d ? Ed(c).width - e - 13 : e + 11, e = c / Math.sqrt(2), ud(g, "left", c + "px"), ud(g, "margin-left", "1px"), ud(b, "margin-left", -e + "px"), ud(b, "margin-top", e + "px"))
		}
		te.prototype.J = function(a) {
			var b = this.b(a);
			if(b && (a = ue(this, a, b))) Ea(b, Z(this, "active")), Ea(a, Z(this, "card-visible")), W(a), a.cardTargetNode = r, a.cardRootNode = r
		};

		function ve(a, b) {
			var c = b.cardContentNode;
			if(!c) {
				var d = Z(a, "content"),
					e = Z(a, "card-content");
				(c = M(d, b)) || (c = document.createElement("div"));
				Ga(c, d, e);
				b.cardContentNode = c
			}
			return c
		};

		function xe() {}
		B(xe, te);
		ba(xe);
		xe.prototype.d = "hovercard";

		function ye(a, b, c) {
			this.h = a;
			this.g = b;
			this.a = !!c;
			this.b = s;
			this.d = [];
			this.j = []
		}
		t = ye.prototype;
		t.init = function() {
			var a = P(this.h, "yt-subscription-button-hovercard"),
				b = x(this.ta, this),
				c = x(this.ua, this),
				b = S(a, "mouseenter", b);
			this.d.push(b);
			b = S(a, "mouseleave", c);
			this.d.push(b)
		};
		t.J = function() {
			xe.getInstance().J(this.h)
		};
		t.ta = function() {
			this.b = n;
			if(this.a) {
				var a = x(this.$, this),
					a = fc(a, 500);
				this.j.push(a)
			}
		};
		t.ua = function() {
			this.b = s
		};
		t.$ = function() {
			var a = xe.getInstance(),
				b;
			if(b = !this.da) b = a.b(this.h), b = !b ? s : Ha(b, Z(a, "active"));
			b && (this.da = n, b = {
				session_token: U("subscription_ajax")
			}, b[se()] = this.g, V("/subscription_ajax", {
				method: "POST",
				i: {
					hovercard: 1,
					action_get_subscription_form_for_channel: 1
				},
				o: b,
				U: this,
				k: function(b, d) {
					var e = this.h,
						f = d.response.html_content,
						g = a.b(e);
					if(g) {
						var j = ve(a, g);
						j && (j.innerHTML = f, Ha(g, Z(a, "active")) && (f = ue(a, e, g), we(a, e, f), Md(f)))
					}
					this.t()
				},
				onError: function() {
					this.da = s
				}
			}))
		};
		t.t = function() {
			var a = xe.getInstance(),
				b = a.b(this.h),
				c = ve(a, b);
			D(c.getElementsByTagName("input"), function(a) {
				var b = x(function() {
					var a = c.getElementsByTagName("form")[0],
						b = {};
					b.method = a.method.toUpperCase();
					if("POST" == b.method) {
						var d = [];
						Oc(a, d, Rc);
						b.ka = d.join("&")
					} else {
						var e = new Lc;
						Oc(a, e, Qc);
						Nc(e);
						for(var d = {}, m = 0; m < e.a.length; m++) {
							var p = e.a[m];
							d[p] = e.b[p]
						}
						e = b.i || {};
						Na(e, d);
						b.i = e
					}
					V(a.action, b)
				}, this);
				a = S(a, "change", b);
				this.d.push(a)
			}, this)
		};

		function ze(a) {
			this.e = a;
			this.type = R(a, "subscription-type") || "channel";
			this.D = R(a, "subscription-value") || "";
			this.q = R(a, "enable-hovercard") ? new ye(this.e, this.D) : r;
			this.I = s;
			this.b = [];
			this.a = [];
			this.O = R(this.e, "sessionlink") || "";
			this.t()
		}

		function Ae(a) {
			a = L("yt-subscription-button-js-default", a);
			D(a, function(a) {
				R(a, "subscription-initialized") || (new ze(a), Q(a, "subscription-initialized", "true"))
			})
		}
		var Be = [];

		function Ce(a) {
			return R(a.e, "subscription-id") || r
		}

		function De(a, b) {
			b ? Q(a.e, "subscription-id", b) : Lb(a.e, "subscription-id");
			Ee(a)
		}

		function Ee(a) {
			var b = a.e;
			(b.dataset ? Kb("subscription-button-type") in b.dataset : b.hasAttribute ? b.hasAttribute("data-subscription-button-type") : b.getAttribute("data-subscription-button-type")) ? (b = "-" + R(a.e, "subscription-button-type"), E(a.e, "yt-uix-button-subscribed" + b, !!Ce(a)), E(a.e, "yt-uix-button-subscribe" + b, !Ce(a))) : E(a.e, "subscribed", !!Ce(a));
			Ce(a) ? (b = P(a.e, "yt-uix-button-subscription-container"), Wb(b, "mouseleave", x(function() {
				Ca(this.e, "hover-enabled")
			}, a))) : Ea(a.e, "hover-enabled");
			if(a.q) {
				var b = a.q,
					c = !!Ce(a),
					d = Z(xe.getInstance(), "target");
				E(b.h, d, c);
				b = a.q;
				a = !!Ce(a);
				(b.a = a) || b.J()
			}
		}
		t = ze.prototype;
		t.t = function() {
			this.b.push(S(this.e, "click", x(this.la, this)));
			this.a.push(qd("SUBSCRIBE", this.ma, this));
			this.a.push(qd("UNSUBSCRIBE", this.na, this));
			this.q && this.q.init();
			Be.push(this);
			Ee(this)
		};

		function Fe(a, b, c, d) {
			c != Ce(a) && a.D == b && De(a, c);
			d == a && a.q && a.q.J()
		}
		t.la = function(a) {
			if(this.I) return s;
			a.preventDefault();
			Ce(this) ? this.ha() : this.T()
		};

		function Ge(a) {
			"BUTTON" == a.e.tagName && Ca(a.e.parentNode, "yt-subscription-button-disabled-mask-container");
			a.e.disabled = n
		}
		t.enable = function() {
			Ea(this.e.parentNode, "yt-subscription-button-disabled-mask-container");
			this.e.disabled = s
		};
		t.T = function() {
			var a = this.type,
				b = this.D,
				c = R(this.e, "subscription-feature");
			this.I = n;
			Ge(this);
			if(U("subscription_ajax")) {
				var d = a,
					e = this,
					d = d || "channel",
					a = {},
					f = {
						channel: "channel",
						all: "all"
					};
				a["action_create_subscription_to_" + (f[d] || f.channel)] = 1;
				c && (a.feature = c);
				a[se(d)] = b;
				e && e.O && (c = fd("/subscription_ajax", a), f = dd(e.O), Sd(c, f));
				c = {};
				c.session_token = U("subscription_ajax");
				(f = dc("PLAYBACK_ID")) && (c.plid = f);
				V("/subscription_ajax", {
					method: "POST",
					i: a,
					o: c,
					k: function(a, c) {
						var e = d,
							f = c || {},
							g;
						g = ua(Be, function(a) {
							return a.type == e && a.D == b
						});
						D(g, function(a) {
							rd("SUBSCRIBE", b, f, a)
						});
						f.response.show_feed_privacy_dialog && rd("SHOW-SUBSCRIBE-DIALOG", b)
					},
					z: function() {
						e && e.M()
					}
				});
				Wd("subscribe")
			} else if(!this.e.getAttribute("href")) {
				var g = x(this.qa, this),
					a = cd("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login"),
					a = cd(a, "feature", "sub_button");
				if(a = window.open(a, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", n)) c = qd("LOGGED_IN", function(a) {
					var b = dc("LOGGED_IN_PUBSUB_KEY", b),
						c = aa("yt.pubsub.instance_");
					c && ("number" == typeof b && (b = [b]), D(b, function(a) {
						c.unsubscribeByKey(a)
					}));
					g(a)
				}), bc("LOGGED_IN_PUBSUB_KEY", c), a.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
			}
		};
		t.qa = function(a) {
			ec("subscription_ajax", a.subscription_ajax);
			this.T()
		};
		t.M = function() {
			this.I = s;
			this.enable()
		};
		t.ha = function() {
			var a = {
					s: Ce(this),
					session_token: U("subscription_ajax")
				},
				b = {
					action_remove_subscriptions: 1
				},
				c = R(this.e, "subscription-feature");
			c && (b.feature = c);
			(c = dc("PLAYBACK_ID")) && (a.plid = c);
			this.I = n;
			Ge(this);
			if(this.O) {
				var c = fd("/subscription_ajax", b),
					d = dd(this.O);
				Sd(c, d)
			}
			V("/subscription_ajax", {
				method: "POST",
				U: this,
				i: b,
				o: a,
				k: function(a, b) {
					De(this, r);
					if(this.q) {
						var c = this.q;
						c.a = s;
						c.J()
					}
					rd("UNSUBSCRIBE", this.D, b, this)
				},
				z: function() {
					this.I = s;
					this.enable()
				}
			});
			Wd("unsubscribe")
		};
		t.ma = function(a, b, c) {
			b = b.response.id;
			Fe(this, a, b, c);
			if(a == this.D && (De(this, b), this.q && (a = this.q, a.b))) {
				c = xe.getInstance();
				b = a.h;
				var d = c.b(b);
				if(d) {
					Ca(d, Z(c, "active"));
					var e = ue(c, b, d);
					if(e) {
						e.cardTargetNode = b;
						e.cardRootNode = d;
						we(c, b, e);
						var f = Z(c, "card-visible"),
							g = c.a(b, "card-delegate-show") && c.a(d, "card-action");
						c.g(d, "card-action", b);
						W(e);
						fc(function() {
							g || Md(e);
							Ca(e, f)
						}, 10)
					}
				}
				a.$()
			}
		};
		t.na = function(a, b) {
			Fe(this, a, b.response.id, this)
		};
		var He = {},
			Ie, Je = 0,
			Ke = s,
			Le = [],
			Me = [];

		function Ne(a, b) {
			Ke = n;
			He.X = b;
			He.Y = a;
			Oe()
		}

		function Pe(a) {
			He.Y = a;
			Qe()
		}

		function Re(a) {
			He.X = a;
			Qe()
		}

		function Qe() {
			var a = He.X.y + He.Y.height,
				b = Je;
			if(!b || a >= b) Oe(), Je = a
		}

		function Oe() {
			if(Ke) {
				var a = He.X.y + He.Y.height,
					b = function(b, c) {
						var f;
						if(f = J(b)) {
							var g = 0,
								j = 0;
							if(f.offsetParent) {
								do g += f.offsetLeft, j += f.offsetTop; while (f = f.offsetParent)
							}
							f = new G(g, j)
						} else f = r;
						if(a >= f.y && (f = Ie[c]) && -1 == Me.indexOf(b)) f.call(u, b), Me.push(b)
					},
					c = L("scrolldetect");
				D(c, function(a) {
					var c = R(a, "scrolldetect-callback");
					c && b.call(u, a, c)
				})
			}
		};

		function Se(a) {
			return a.dataset ? a.dataset.loaded : a.getAttribute("data-" + Yd())
		};

		function Te(a, b) {
			if(a in Ue)
				for(var c = Ue[a], d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length; e < f; e++) c[e] && c[e][0].apply(c[e][1], d)
		}
		var Ue = {};

		function Ve(a, b) {
			a && b && Ea(b.target, a);
			var c = dc("EW_URL_CSS"),
				d = "css-" + Xd(c),
				e = document.getElementById(d);
			e || (e = document.createElement("link"), e.id = d, e.rel = "stylesheet", e.href = c, document.getElementsByTagName("head")[0].appendChild(e));
			var c = function() {
					aa("yt.www.onboarding.EngagementWizard.init")()
				},
				d = dc("EW_URL_JS"),
				f = "js-" + Xd(d),
				g = document.getElementById(f),
				e = g && Se(g),
				g = g && !e;
			if(e) c && c();
			else if(c && (f in Ue || (Ue[f] = []), Ue[f].push([c, l])), !g) {
				var j, k = function() {
						if(!Se(j)) {
							var a = j;
							a.dataset ? a.dataset.loaded = "true" : a.setAttribute("data-" + Yd(), "true");
							Te(f);
							f ? f in Ue && delete Ue[f] : Ue = {}
						}
					},
					m = document.createElement("script");
				m.id = f;
				m.onload = function() {
					setTimeout(k, 0)
				};
				m.onreadystatechange = function() {
					switch(m.readyState) {
						case "loaded":
						case "complete":
							m.onload()
					}
				};
				m.src = d;
				c = document.getElementsByTagName("head")[0];
				c.insertBefore(m, c.firstChild);
				j = m
			}
		};
		var We, Xe, Ye, Ze, $e, af = s,
			bf = [];

		function cf(a) {
			var b = R(a.currentTarget, "action");
			df[b](a.currentTarget)
		}
		var df = {
			hide: function(a, b) {
				var c = P(a, "feed-item-dismiss-menu");
				c || (c = P(a, "feed-item-action-menu"));
				var d = R(c, "external-id");
				b ? b(d) : V("/guide_ajax?action_dismiss_item=1", {
					method: "POST",
					o: {
						session_token: U("guide_ajax"),
						external_id: d
					}
				});
				c = P(c, "feed-item-container");
				ef(c);
				d = N(c, "li");
				d = M("feed-item-dismissal-hide", d);
				Md(d);
				ff(c)
			},
			uploads: function(a) {
				var b = R(a, "subscription-id");
				if(b) {
					var c = Ia(a);
					V("/subscription_ajax?action_update_subscription_preferences=1", {
						method: "POST",
						o: {
							modify_uploads_only: n,
							uploads_only: c,
							session_token: U("subscription_ajax"),
							subscription_id: b
						}
					});
					a = P(a, "feed-item-container");
					ef(a);
					b = N(a, "li");
					b = c ? M("feed-item-dismissal-uploads", b) : M("feed-item-dismissal-all-activity", b);
					Md(b);
					gf(a, function(a) {
						a = M("feed-item-action-menu", a);
						a = M("uploads", a);
						E(a, "checked", c)
					})
				}
			},
			subscribe: function(a) {
				var b = P(a, "feed-item-container"),
					c = R(b, "channel-key");
				V("/subscription_ajax?action_create_subscription_to_channel=1", {
					method: "POST",
					o: {
						session_token: U("subscription_ajax"),
						c: c
					},
					k: function(a, e) {
						gf(b, function(a) {
							a = M("feed-item-dismiss-menu", a);
							var b = M("unsubscribe", a);
							Q(b, "subscription-id", e.response.id);
							Ca(a, "subscribed")
						});
						rd("SUBSCRIBE", c, e, this)
					}
				})
			},
			unsubscribe: function(a) {
				var b = R(a, "subscription-id"),
					c = R(a, "channel-key");
				b && c && V("/subscription_ajax?action_remove_subscription=1", {
					method: "POST",
					o: {
						session_token: U("subscription_ajax"),
						subscription_id: b
					},
					k: function(b, e) {
						var f = P(a, "feed-item-container");
						ef(f);
						var g = N(f, "li"),
							g = M("feed-item-dismissal-unsubscribe", g);
						Md(g);
						gf(f, function(a) {
							ff(a)
						});
						rd("UNSUBSCRIBE", c, e, this)
					}
				})
			},
			"email-on-upload": function(a) {
				var b = R(a, "subscription-id");
				if(b) {
					var c = Ia(a);
					V("/subscription_ajax?action_update_subscription_preferences=1", {
						method: "POST",
						o: {
							email_on_upload: c,
							session_token: U("subscription_ajax"),
							subscription_id: b
						}
					});
					a = P(a, "feed-item-container");
					ef(a);
					b = N(a, "li");
					b = c ? M("feed-item-dismissal-email-on-upload", b) : M("feed-item-dismissal-no-email", b);
					Md(b);
					gf(a, function(a) {
						a = M("feed-item-action-menu", a);
						a = M("email-on-upload", a);
						E(a, "checked", c)
					})
				}
			}
		};

		function gf(a, b) {
			var c = R(a, "channel-key"),
				d = L("feed-item-container");
			D(d, function(a) {
				R(a, "channel-key") == c && b(a)
			})
		}

		function ef(a) {
			a = N(a, "li");
			a = L("feed-item-dismissal", a);
			W.apply(r, a)
		}

		function ff(a) {
			Hc(a, 1, 0, {
				duration: 0.3,
				z: function() {
					W(a)
				}
			})
		}

		function hf(a) {
			a = P(a.currentTarget, "feed-promo");
			a = parseInt(R(a, "cookie-id"), 10);
			Bb.getInstance();
			Hb(a, n);
			zb("PREF", Ib(), 31536E4)
		};

		function jf(a) {
			a = a.F;
			for(var b in a) {
				var c = J(b + "-connected");
				if(c) {
					var d = a[b],
						e = J(b + "-not-connected"),
						f = J(b + "-display-name"),
						g = d.is_connected;
					Ld(c, g);
					Ld(e, !g);
					c = f;
					d = d.connected_as || "";
					if("textContent" in c) c.textContent = d;
					else if(c.firstChild && 3 == c.firstChild.nodeType) {
						for(; c.lastChild != c.firstChild;) c.removeChild(c.lastChild);
						c.firstChild.data = d
					} else {
						e = c;
						for(f = l; f = e.firstChild;) e.removeChild(f);
						c.appendChild(ob(c).createTextNode(d))
					}
				}
			}
		}

		function kf(a, b) {
			if(b) {
				var c = Qb(b),
					d = a.parentNode;
				d && d.replaceChild(c, a);
				re(c);
				Ae(c);
				Hc(c, 0, 1, {
					duration: 0.3
				})
			} else lf(a)
		}

		function mf(a, b, c) {
			a = c.e;
			if(Pb(a, We)) {
				var d = N(a, "li");
				a = N(d, "ul");
				a = L("guide-recommendation-item", a);
				a = va(a, function(a) {
					return R(a, "external-id")
				});
				V("/guide_ajax?action_load_channel_rec=1", {
					method: "POST",
					i: {},
					o: {
						session_token: U("guide_ajax"),
						shown_ids: a.join()
					},
					k: function(a, b) {
						kf(d, b.new_suggested_html)
					},
					onError: function() {
						lf(d)
					}
				})
			}
		}

		function nf(a) {
			a.preventDefault();
			var b = P(a.currentTarget, "guide-recommendation-item");
			a = Ha(b, "featured");
			var c = R(b, "external-id"),
				d = N(b, "li"),
				b = N(d, "ul"),
				b = L("guide-recommendation-item", b),
				b = va(b, function(a) {
					return R(a, "external-id")
				}),
				e = {};
			a && (e.featured = 1);
			V("/guide_ajax?action_dismiss_channel=1", {
				method: "POST",
				i: e,
				o: {
					session_token: U("guide_ajax"),
					dismissed_id: c,
					shown_ids: b.join()
				},
				k: function(a, b) {
					kf(d, b.new_suggested_html)
				},
				onError: function() {
					lf(d)
				}
			})
		}

		function of(a) {
			a.preventDefault();
			var b = P(a.currentTarget, "recommended-video-item");
			a = R(b, "video-id");
			V("/guide_ajax?action_dismiss_video=1", {
				method: "POST",
				o: {
					session_token: U("guide_ajax"),
					video_id: a
				},
				k: function() {
					lf(b)
				},
				onError: function() {
					lf(b)
				}
			})
		}

		function lf(a) {
			Hc(a, 1, 0, {
				duration: 0.3,
				z: function() {
					qb(a)
				}
			})
		}

		function pf(a) {
			if(!N(a.target, r, "guide-item-action")) {
				a = a.currentTarget;
				var b = qf(a);
				rf(b.va, b.wa, a)
			}
		}

		function qf(a) {
			var b = R(a, "feed-name") || r,
				c = R(a, "feed-type") || r;
			a = L("guide-item", We);
			D(a, function(a) {
				var e = R(a, "feed-name"),
					f = R(a, "feed-type"),
					e = !!b && e == b && f == c;
				E(a, "selected", e);
				(a = P(a, "guide-item-container")) && E(a, "selected-child", e)
			});
			return {
				wa: c,
				va: b
			}
		}

		function sf(a) {
			tf(a.currentTarget)
		}

		function tf(a) {
			var b = P(a, "feed-container"),
				c = P(b, "individual-feed");
			a = R(c, "feed-name") || r;
			var c = R(c, "feed-type") || r,
				d = R(b, "filter-type") || r,
				e = R(b, "view-type") || r,
				f = R(b, "paging") || r,
				c = uf(a, c, d, e, f);
			a = c.url;
			var c = c.i,
				g = M("feed-load-more-container", b);
			Ca(g, "loading");
			V(a, {
				i: c,
				format: "JSON",
				k: function(a, c) {
					if(2 == dc("GUIDE_VERSION")) {
						var d = M("last", b);
						Ea(d, "last")
					}
					d = Qb(c.feed_html);
					g.parentNode && g.parentNode.insertBefore(d, g);
					re(d);
					Ae(d);
					Ea(g, "loading");
					c.paging ? Q(b, "paging", c.paging) : W(g);
					W($e)
				},
				onError: function() {
					Ea(g, "loading");
					Md($e)
				}
			})
		}

		function vf(a) {
			var b = P(a.currentTarget, "individual-feed"),
				c = M("feed-view-button", b),
				d = R(b, "feed-name") || r,
				e = R(b, "feed-type") || r;
			a = a.currentTarget.checked ? "u" : r;
			c = c && R(c, "view-type") || r;
			Bb.getInstance();
			"u" == a ? (Hb(Jb.V, s), Hb(Jb.W, n)) : (Hb(Jb.V, s), Hb(Jb.W, s));
			zb("PREF", Ib(), 31536E4);
			wf(b, d, e, a, c)
		}

		function xf(a) {
			var b = r,
				b = P(a.currentTarget, "individual-feed"),
				c = R(b, "feed-name") || r,
				d = R(b, "feed-type") || r,
				e = R(a.currentTarget, "filter-type") || r;
			a = L("user-feed-filter", b);
			D(a, function(a) {
				var b = R(a, "filter-type") || r;
				E(a, "selected", e == b)
			});
			wf(b, c, d, e, r)
		}

		function yf(a) {
			var b = R(a.currentTarget, "feed-name") || r,
				c = R(a.currentTarget, "feed-type") || r,
				d = J(["feed", c, b].join("-")),
				e = M("feed-view-button", d),
				f = M("feed-filter", d).checked ? "u" : r;
			a = R(a.currentTarget, "view-type") || r;
			Q(e, "view-type", a || "");
			a ? zb("feed_view", a || "") : yb.remove("feed_view", "/", "youtube.com");
			zf(a);
			wf(d, b, c, f, a)
		}

		function zf(a) {
			var b = L("feed-view-choice");
			D(b, function(b) {
				var d = R(b, "view-type") || r;
				E(b, "checked", a == d)
			})
		}

		function wf(a, b, c, d, e) {
			var f = L("feed-container", a);
			D(f, function(a) {
				W(a)
			});
			W($e);
			Q(a, "last-clicked-filter", d || "");
			Q(a, "last-clicked-view", e || "");
			if(f = wa(f, function(a) {
					var b = R(a, "filter-type") || r;
					a = R(a, "view-type") || r;
					return b == d && a == e
				})) Md(f), Af(a);
			else {
				var g = document.createElement("div");
				g.className = "feed-container";
				g.innerHTML = Ze.innerHTML;
				Q(g, "filter-type", d || "");
				a.appendChild(g);
				b = uf(b, c, d, e);
				V(b.url, {
					i: b.i,
					format: "JSON",
					k: function(b, c) {
						var f = Qb(c.feed_html),
							p = M("before-feed-content", a);
						p.parentNode && p.parentNode.insertBefore(f, p.nextSibling);
						re(f);
						qb(g);
						c.paging && Q(f, "paging", c.paging);
						var p = R(a, "last-clicked-filter") || r,
							q = R(a, "last-clicked-view") || r;
						(p != d || q != e) && W(f);
						W($e)
					},
					onError: function() {
						qb(g);
						Md($e)
					}
				})
			}
		}

		function rf(a, b, c) {
			var d = L("individual-feed", Ye);
			D(d, function(a) {
				W(a)
			});
			var e = ["feed", b, a].join("-"),
				f = J(e);
			Q(We, "last-clicked-item", e);
			f ? Af(f) : (f = document.createElement("div"), f.id = e, f.className = "individual-feed", f.innerHTML = Ze.innerHTML, Q(f, "feed-name", a || ""), Q(f, "feed-type", b || ""), Ye.appendChild(f), a = uf(a, b), V(a.url, {
				i: a.i,
				format: "JSON",
				k: function(a, b) {
					f.innerHTML = b.feed_html;
					re(f);
					Ae(f);
					R(We, "last-clicked-item") == e && Af(f);
					b.is_ypc_enabled && rd("ypc-delayedloader-load", function() {
						rd("guide-feed-loaded", f)
					});
					if(c) {
						var d = M("guide-count", c);
						d && qb(d)
					}
				},
				onError: function() {
					Md($e);
					qb(f)
				}
			}))
		}

		function Af(a) {
			Hc(a, 0, 1, {
				duration: 0.5
			});
			Md(a)
		}

		function uf(a, b, c, d, e) {
			var f = "",
				g = {};
			"chart" == b ? (f = "/guide_ajax?action_load_chart_feed=1", g = {
				chart_name: a
			}) : "personal" == b ? (f = "/guide_ajax?action_load_personal_feed=1", g = {
				feed_name: a
			}) : "show" == b ? (f = "/guide_ajax?action_load_show_feed=1", g = {
				show_id: a
			}) : "social" == b ? (f = "/guide_ajax?action_load_social_feed=1", g = {
				feed_name: a
			}) : "system" == b ? (f = "/guide_ajax?action_load_system_feed=1", g = {
				feed_name: a
			}) : "main" == b ? f = "/guide_ajax?action_load_main_feed=1" : "topic" == b ? (f = "/guide_ajax?action_load_topic_feed=1", g = {
				topic_id: a
			}) : "user" == b ? (f = "/guide_ajax?action_load_user_feed=1", g = {
				user_id: a
			}) : "browse" == b && (f = "/guide_ajax?action_load_browse_feed=1", g = {
				browse_channel_id: a
			});
			c && (g.filter_type = c);
			d && (g.view_type = d);
			e && (g.paging = e);
			dc("FEED_DEBUG") && (g.debug = 1);
			return {
				url: f,
				i: g
			}
		};

		function Bf(a) {
			this.a = a;
			a = r;
			if(!a) {
				var b = [],
					c = {};
				this.a.replace(Cf, function(a, e) {
					e in c || (c[e] = n, b.push(e))
				});
				a = b
			}
			a = ma("__%s__", "(" + a.join("|") + ")");
			this.b = RegExp(a, "g")
		}
		var Cf = /__([a-z]+(?:_[a-z]+)*)__/g;

		function Df(a) {
			a = J(a).innerHTML;
			a = a.replace(/^\s*(<\!--\s*)?/, "");
			a = a.replace(/(\s*--\>)?\s*$/, "");
			return new Bf(a)
		}

		function Ef(a, b) {
			var c = x(function(a, c) {
				return na(b[c] || "")
			}, a);
			return a.a.replace(a.b, c)
		};
		var Ff, Gf, Hf, If, Jf;

		function Kf(a) {
			a = {
				sort: R(a.target, "sort-type")
			};
			a = Zc(bd(["/subscription_manager/friends"], a));
			window.location = Zc(bd([a], {})) + ""
		}

		function Lf(a) {
			if(!N(a.target, "button") && !N(a.target, "a") && (a = R(a.currentTarget, "href"))) window.location = Zc(bd([a], {})) + ""
		}

		function Mf(a, b, c) {
			a = c.e;
			Pb(a, Ff) && (a = P(a, "subscription-item"), c = !Ce(c), E(a, "unsubscribed", c), c && Ha(a, "pinned") && (E(a, "pinned", s), Nf()))
		}

		function Of(a) {
			var b = P(a.currentTarget, "subscription-item");
			if(!R(b, "loading")) {
				Q(b, "loading", "true");
				a = R(b, "subscription-id");
				var c = !Ha(b, "pinned");
				if(!c || L("pinned", Ff).length < Jf) {
					E(b, "pinned", c);
					Nf();
					var d = {};
					c && (d.pinned = "true");
					V("/subscription_ajax?action_update_subscription_pinned=1", {
						format: "JSON",
						method: "POST",
						i: d,
						o: {
							session_token: U("subscription_ajax"),
							subscription_id: a
						},
						onError: function() {
							E(b, "pinned", !c);
							Nf()
						},
						z: function() {
							Lb(b, "loading")
						}
					})
				}
			}
		}

		function Nf() {
			var a = L("pinned", Ff),
				b = (a || L("pinned", Ff)).length < Jf;
			E(Ff, "can-pin-more", b);
			for(var b = va(a, function(a) {
					var b = R(a, "subscription-id"),
						c = R(a, "subscription-title");
					a = R(a, "profile-image-url");
					return Ef(Hf, {
						subscription_id: b,
						display_name: c,
						profile_image_url: a
					})
				}), a = Jf - a.length, c = Ef(If, {}), d = 0; d < a; d++) b.push(c);
			Gf.innerHTML = b.join("")
		};
		A("yt.www.guide.init", function() {
			We = M("guide");
			1 == dc("GUIDE_VERSION") && T(We, pf, "guide-item");
			Ae(We);
			qd("SUBSCRIBE", mf);
			T(We, nf, "guide-subscription-dismiss");
			Ye = J("feed");
			Ze = J("feed-loading-template");
			$e = J("feed-error");
			T(Ye, sf, "feed-load-more");
			var a = Ye,
				b = M("yt-uix-button-menu-short", Ye);
			T(a, vf, "feed-filter");
			T(a, xf, "user-feed-filter");
			T(b, yf, "feed-view-choice");
			Xe = J("video-sidebar");
			T(Xe, of, "recommended-video-dismiss");
			if((a = Ye) && !af) af = n, bf.push(T(a, cf, "dismiss-menu-choice")), bf.push(T(a, hf, "feed-promo-dismissal")),
				T(a || document.body, ja(Ve, "start-ew"), "start-ew");
			a = {
				"feed-load-more": tf
			};
			Le.push(qd("page-init", Ne));
			Le.push(qd("page-resize", Pe));
			Le.push(qd("page-scroll", Re));
			Ie = a;
			Bb.getInstance();
			var a = M("individual-feed", Ye),
				b = M("feed-filter", a),
				c = M("feed-view-button", a);
			if(b && c) {
				var d = R(a, "feed-name") || r,
					e = R(a, "feed-type") || r,
					f = M("feed-container", a),
					g = R(f, "filter-type") || r,
					j = R(f, "view-type") || r,
					f = Ab("feed_view") || r,
					k = Gb(Jb.V),
					k = Gb(Jb.W) && !k ? "u" : r;
				if(g != k || j != f) b.checked = "u" == k, g = Rd.getInstance(), g = P(b, Z(g, "checkbox-container")),
					b.checked && Ha(g, "partial") && (b.checked = s, b.a = s, Ea(g, "partial")), E(g, "checked", b.checked), Q(c, "view-type", f || ""), zf(f), wf(a, d, e, k, f)
			}
		});
		A("yt.www.guide.initAutoshare", function() {
			var a = new X(U("autoshare"));
			a.ga(jf);
			var b = J("facebook-connect-button");
			b && a.d(b, "facebook", n);
			(b = J("twitter-connect-button")) && a.d(b, "twitter", n);
			(b = J("orkut-connect-button")) && a.d(b, "orkut", n);
			window.autoshare = a
		});
		A("yt.www.guide.loadSocialPanel", function() {
			qf(J("social-guide-item"));
			rf("connect", "social")
		});
		A("yt.www.guide.subscriptionmanager.init", function() {
			Ff = J("subscription-manager-list");
			T(Ff, Of, "subscription-pin");
			T(Ff, Lf, "subscription-item");
			var a = J("sort-button");
			if(a) {
				var b = $d.getInstance();
				if(!a.widgetMenu) {
					var c = b.a(a, "button-menu-id"),
						c = c && J(c),
						d = Z(b, "menu");
					c ? (Ca(c, d), Ca(c, Z(b, "menu-external"))) : c = M(d, a);
					a.widgetMenu = c
				}
				T(a.widgetMenu, Kf, "friend-sort")
			}
			if(Gf = a = J("pinned-subscriptions")) a = R(a, "max-pinned"), Jf = parseInt(a, 10), a = J("pinned-channel-template"), Hf = Df(a), a = J("pinned-channel-placeholder-template"),
				If = Df(a);
			Ae(Ff);
			qd("SUBSCRIBE", Mf);
			qd("UNSUBSCRIBE", Mf)
		});
	})();
}