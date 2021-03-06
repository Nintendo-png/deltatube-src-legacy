(function() {
	function e(a) {
		throw a;
	}
	var h = void 0,
		l = !0,
		m = null,
		n = !1,
		q, s = this;

	function t(a, b) {
		for(var c = a.split("."), d = b || s, f; f = c.shift();)
			if(d[f] != m) d = d[f];
			else return m;
		return d
	}

	function aa() {}

	function ba(a) {
		a.getInstance = function() {
			return a.Cp ? a.Cp : a.Cp = new a
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
		return a !== h
	}

	function ea(a) {
		return a != m
	}

	function fa(a) {
		return "array" == ca(a)
	}

	function ga(a) {
		var b = ca(a);
		return "array" == b || "object" == b && "number" == typeof a.length
	}

	function v(a) {
		return "string" == typeof a
	}

	function ha(a) {
		return "function" == ca(a)
	}

	function ia(a) {
		var b = typeof a;
		return "object" == b && a != m || "function" == b
	}

	function ja(a) {
		return a[ka] || (a[ka] = ++la)
	}
	var ka = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
		la = 0;

	function ma(a, b, c) {
		return a.call.apply(a.bind, arguments)
	}

	function na(a, b, c) {
		a || e(Error());
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
		x = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
		return x.apply(m, arguments)
	}

	function oa(a, b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return function() {
			var b = Array.prototype.slice.call(arguments);
			b.unshift.apply(b, c);
			return a.apply(this, b)
		}
	}

	function pa(a, b) {
		for(var c in b) a[c] = b[c]
	}
	var y = Date.now || function() {
		return +new Date
	};

	function qa(a, b) {
		var c = a.split("."),
			d = s;
		!(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
		for(var f; c.length && (f = c.shift());) !c.length && da(b) ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
	}

	function z(a, b) {
		function c() {}
		c.prototype = b.prototype;
		a.C = b.prototype;
		a.prototype = new c;
		a.prototype.constructor = a
	}
	Function.prototype.bind = Function.prototype.bind || function(a, b) {
		if(1 < arguments.length) {
			var c = Array.prototype.slice.call(arguments, 1);
			c.unshift(this, a);
			return x.apply(m, c)
		}
		return x(this, a)
	};

	function ra(a) {
		Error.captureStackTrace ? Error.captureStackTrace(this, ra) : this.stack = Error().stack || "";
		a && (this.message = String(a))
	}
	z(ra, Error);
	ra.prototype.name = "CustomError";

	function sa(a, b) {
		for(var c = 1; c < arguments.length; c++) {
			var d = String(arguments[c]).replace(/\$/g, "$$$$");
			a = a.replace(/\%s/, d)
		}
		return a
	}

	function ta(a) {
		return decodeURIComponent(a.replace(/\+/g, " "))
	}

	function ua(a) {
		if(!va.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(wa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(xa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ya, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(za, "&quot;"));
		return a
	}
	var wa = /&/g,
		xa = /</g,
		ya = />/g,
		za = /\"/g,
		va = /[&<>\"]/;

	function Ba(a) {
		var b = Number(a);
		return 0 == b && /^[\s\xa0]*$/.test(a) ? NaN : b
	};
	var Ca = Array.prototype,
		Da = Ca.indexOf ? function(a, b, c) {
			return Ca.indexOf.call(a, b, c)
		} : function(a, b, c) {
			c = c == m ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
			if(v(a)) return !v(b) || 1 != b.length ? -1 : a.indexOf(b, c);
			for(; c < a.length; c++)
				if(c in a && a[c] === b) return c;
			return -1
		},
		B = Ca.forEach ? function(a, b, c) {
			Ca.forEach.call(a, b, c)
		} : function(a, b, c) {
			for(var d = a.length, f = v(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
		},
		Ea = Ca.filter ? function(a, b, c) {
			return Ca.filter.call(a, b, c)
		} : function(a, b, c) {
			for(var d = a.length, f = [], g = 0, j = v(a) ? a.split("") : a, k = 0; k < d; k++)
				if(k in j) {
					var p = j[k];
					b.call(c, p, k, a) && (f[g++] = p)
				}
			return f
		},
		Fa = Ca.map ? function(a, b, c) {
			return Ca.map.call(a, b, c)
		} : function(a, b, c) {
			for(var d = a.length, f = Array(d), g = v(a) ? a.split("") : a, j = 0; j < d; j++) j in g && (f[j] = b.call(c, g[j], j, a));
			return f
		},
		Ga = Ca.some ? function(a, b, c) {
			return Ca.some.call(a, b, c)
		} : function(a, b, c) {
			for(var d = a.length, f = v(a) ? a.split("") : a, g = 0; g < d; g++)
				if(g in f && b.call(c, f[g], g, a)) return l;
			return n
		};

	function Ha(a, b) {
		var c;
		a: {
			c = a.length;
			for(var d = v(a) ? a.split("") : a, f = 0; f < c; f++)
				if(f in d && b.call(h, d[f], f, a)) {
					c = f;
					break a
				}
			c = -1
		}
		return 0 > c ? m : v(a) ? a.charAt(c) : a[c]
	}

	function Ia(a, b) {
		return 0 <= Da(a, b)
	}

	function Ja(a) {
		if(!fa(a))
			for(var b = a.length - 1; 0 <= b; b--) delete a[b];
		a.length = 0
	}

	function Ka(a, b) {
		var c = Da(a, b);
		0 <= c && Ca.splice.call(a, c, 1)
	}

	function La(a) {
		return Ca.concat.apply(Ca, arguments)
	}

	function Ma(a) {
		var b = a.length;
		if(0 < b) {
			for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
			return c
		}
		return []
	}

	function Na(a, b) {
		for(var c = 1; c < arguments.length; c++) {
			var d = arguments[c],
				f;
			if(fa(d) || (f = ga(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
			else if(f)
				for(var g = a.length, j = d.length, k = 0; k < j; k++) a[g + k] = d[k];
			else a.push(d)
		}
	}

	function Oa(a, b, c, d) {
		Ca.splice.apply(a, Pa(arguments, 1))
	}

	function Pa(a, b, c) {
		return 2 >= arguments.length ? Ca.slice.call(a, b) : Ca.slice.call(a, b, c)
	}

	function Qa(a, b) {
		Ca.sort.call(a, b || Ra)
	}

	function Ra(a, b) {
		return a > b ? 1 : a < b ? -1 : 0
	};

	function Sa() {}
	Sa.prototype.j = n;
	Sa.prototype.ub = function() {
		this.j || (this.j = l, this.G())
	};

	function Ta(a, b) {
		a.cc || (a.cc = []);
		a.cc.push(b)
	}
	Sa.prototype.G = function() {
		this.cc && Ua.apply(m, this.cc);
		if(this.Ee)
			for(; this.Ee.length;) this.Ee.shift()()
	};

	function Va(a) {
		a && "function" == typeof a.ub && a.ub()
	}

	function Ua(a) {
		for(var b = 0, c = arguments.length; b < c; ++b) {
			var d = arguments[b];
			ga(d) ? Ua.apply(m, d) : Va(d)
		}
	};

	function Wa(a, b) {
		for(var c in a) b.call(h, a[c], c, a)
	}

	function Xa(a) {
		for(var b in a) return a[b]
	}

	function Ya(a) {
		var b = [],
			c = 0,
			d;
		for(d in a) b[c++] = a[d];
		return b
	}

	function Za(a) {
		var b = [],
			c = 0,
			d;
		for(d in a) b[c++] = d;
		return b
	}

	function $a(a, b, c) {
		for(var d in a)
			if(b.call(c, a[d], d, a)) return d
	}

	function ab(a) {
		var b = {},
			c;
		for(c in a) b[c] = a[c];
		return b
	}

	function bb(a) {
		var b = ca(a);
		if("object" == b || "array" == b) {
			if(a.aa) return a.aa();
			var b = "array" == b ? [] : {},
				c;
			for(c in a) b[c] = bb(a[c]);
			return b
		}
		return a
	}
	var cb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

	function db(a, b) {
		for(var c, d, f = 1; f < arguments.length; f++) {
			d = arguments[f];
			for(c in d) a[c] = d[c];
			for(var g = 0; g < cb.length; g++) c = cb[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
		}
	};
	var eb, fb, hb, ib, jb, kb, lb;

	function mb() {
		return s.navigator ? s.navigator.userAgent : m
	}

	function nb() {
		return s.navigator
	}
	jb = ib = hb = fb = eb = n;
	var ob;
	if(ob = mb()) {
		var pb = nb();
		eb = 0 == ob.indexOf("Opera");
		fb = !eb && -1 != ob.indexOf("MSIE");
		ib = (hb = !eb && -1 != ob.indexOf("WebKit")) && -1 != ob.indexOf("Mobile");
		jb = !eb && !hb && "Gecko" == pb.product
	}
	var qb = eb,
		C = fb,
		rb = jb,
		sb = hb,
		tb = ib,
		ub = nb(),
		vb = ub && ub.platform || "";
	kb = -1 != vb.indexOf("Mac");
	lb = -1 != vb.indexOf("Win");
	var wb = !!nb() && -1 != (nb().appVersion || "").indexOf("X11");

	function xb() {
		var a = s.document;
		return a ? a.documentMode : h
	}
	var yb;
	a: {
		var zb = "",
			Ab;
		if(qb && s.opera) var Bb = s.opera.version,
			zb = "function" == typeof Bb ? Bb() : Bb;
		else if(rb ? Ab = /rv\:([^\);]+)(\)|;)/ : C ? Ab = /MSIE\s+([^\);]+)(\)|;)/ : sb && (Ab = /WebKit\/(\S+)/), Ab) var Cb = Ab.exec(mb()),
			zb = Cb ? Cb[1] : "";
		if(C) {
			var Db = xb();
			if(Db > parseFloat(zb)) {
				yb = String(Db);
				break a
			}
		}
		yb = zb
	}
	var Eb = yb,
		Fb = {};

	function Gb(a) {
		var b;
		if(!(b = Fb[a])) {
			b = 0;
			for(var c = String(Eb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++) {
				var j = c[g] || "",
					k = d[g] || "",
					p = RegExp("(\\d*)(\\D*)", "g"),
					r = RegExp("(\\d*)(\\D*)", "g");
				do {
					var u = p.exec(j) || ["", "", ""],
						w = r.exec(k) || ["", "", ""];
					if(0 == u[0].length && 0 == w[0].length) break;
					b = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == w[1].length ? 0 : parseInt(w[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == w[2].length) ? -1 : (0 == u[2].length) > (0 == w[2].length) ? 1 : 0) || (u[2] < w[2] ? -1 : u[2] > w[2] ? 1 : 0)
				} while (0 == b)
			}
			b = Fb[a] = 0 <= b
		}
		return b
	}
	var Hb = s.document,
		Ib = !Hb || !C ? h : xb() || ("CSS1Compat" == Hb.compatMode ? parseInt(Eb, 10) : 5);

	function Jb(a) {
		Jb[" "](a);
		return a
	}
	Jb[" "] = aa;
	var Kb = !C || C && 9 <= Ib,
		Lb = C && !Gb("9");
	!sb || Gb("528");
	rb && Gb("1.9b") || C && Gb("8") || qb && Gb("9.5") || sb && Gb("528");
	rb && !Gb("8") || C && Gb("9");

	function Mb(a, b) {
		this.type = a;
		this.currentTarget = this.target = b
	}
	q = Mb.prototype;
	q.ub = function() {};
	q.ye = n;
	q.Gi = l;
	q.stopPropagation = function() {
		this.ye = l
	};
	q.preventDefault = function() {
		this.Gi = n
	};

	function Nb(a, b) {
		a && this.init(a, b)
	}
	z(Nb, Mb);
	q = Nb.prototype;
	q.target = m;
	q.relatedTarget = m;
	q.clientX = 0;
	q.clientY = 0;
	q.keyCode = 0;
	q.charCode = 0;
	q.ctrlKey = n;
	q.altKey = n;
	q.shiftKey = n;
	q.Kd = m;
	q.init = function(a, b) {
		var c = this.type = a.type;
		Mb.call(this, c);
		this.target = a.target || a.srcElement;
		this.currentTarget = b;
		var d = a.relatedTarget;
		if(d) {
			if(rb) {
				var f;
				a: {
					try {
						Jb(d.nodeName);
						f = l;
						break a
					} catch(g) {}
					f = n
				}
				f || (d = m)
			}
		} else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
		this.relatedTarget = d;
		this.clientX = a.clientX !== h ? a.clientX : a.pageX;
		this.clientY = a.clientY !== h ? a.clientY : a.pageY;
		this.keyCode = a.keyCode || 0;
		this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
		this.ctrlKey = a.ctrlKey;
		this.altKey = a.altKey;
		this.shiftKey = a.shiftKey;
		this.Kd = a;
		a.defaultPrevented && this.preventDefault();
		delete this.ye
	};
	q.stopPropagation = function() {
		Nb.C.stopPropagation.call(this);
		this.Kd.stopPropagation ? this.Kd.stopPropagation() : this.Kd.cancelBubble = l
	};
	q.preventDefault = function() {
		Nb.C.preventDefault.call(this);
		var a = this.Kd;
		if(a.preventDefault) a.preventDefault();
		else if(a.returnValue = n, Lb) try {
			if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
		} catch(b) {}
	};
	q.zw = function() {
		return this.Kd
	};

	function Ob() {}
	var Pb = 0;
	q = Ob.prototype;
	q.key = 0;
	q.qe = n;
	q.Xh = n;
	q.init = function(a, b, c, d, f, g) {
		ha(a) ? this.a = l : a && a.handleEvent && ha(a.handleEvent) ? this.a = n : e(Error("Invalid listener argument"));
		this.Ye = a;
		this.b = b;
		this.src = c;
		this.type = d;
		this.capture = !!f;
		this.Ph = g;
		this.Xh = n;
		this.key = ++Pb;
		this.qe = n
	};
	q.handleEvent = function(a) {
		return this.a ? this.Ye.call(this.Ph || this.src, a) : this.Ye.handleEvent.call(this.Ye, a)
	};
	var Qb = {},
		Rb = {},
		Sb = {},
		Tb = {};

	function Ub(a, b, c, d, f) {
		if(fa(b)) {
			for(var g = 0; g < b.length; g++) Ub(a, b[g], c, d, f);
			return m
		}
		a: {
			b || e(Error("Invalid event type"));
			d = !!d;
			var j = Rb;
			b in j || (j[b] = {
				N: 0,
				Eb: 0
			});
			j = j[b];
			d in j || (j[d] = {
				N: 0,
				Eb: 0
			}, j.N++);
			var j = j[d],
				g = ja(a),
				k;
			j.Eb++;
			if(j[g]) {
				k = j[g];
				for(var p = 0; p < k.length; p++)
					if(j = k[p], j.Ye == c && j.Ph == f) {
						if(j.qe) break;
						k[p].Xh = n;
						a = k[p].key;
						break a
					}
			} else k = j[g] = [], j.N++;
			var r = Vb,
				u = Kb ? function(a) {
					return r.call(u.src, u.key, a)
				} : function(a) {
					a = r.call(u.src, u.key, a);
					if(!a) return a
				},
				p = u;
			p.src = a;
			j = new Ob;
			j.init(c, p, a, b, d, f);
			j.Xh = n;
			c = j.key;
			p.key = c;
			k.push(j);
			Qb[c] = j;
			Sb[g] || (Sb[g] = []);
			Sb[g].push(j);
			a.addEventListener ? (a == s || !a.nl) && a.addEventListener(b, p, d) : a.attachEvent(b in Tb ? Tb[b] : Tb[b] = "on" + b, p);
			a = c
		}
		return a
	}

	function Wb(a, b, c, d, f) {
		if(fa(b))
			for(var g = 0; g < b.length; g++) Wb(a, b[g], c, d, f);
		else if(d = !!d, a = Xb(a, b, d))
			for(g = 0; g < a.length; g++)
				if(a[g].Ye == c && a[g].capture == d && a[g].Ph == f) {
					Yb(a[g].key);
					break
				}
	}

	function Yb(a) {
		if(!Qb[a]) return n;
		var b = Qb[a];
		if(b.qe) return n;
		var c = b.src,
			d = b.type,
			f = b.b,
			g = b.capture;
		c.removeEventListener ? (c == s || !c.nl) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in Tb ? Tb[d] : Tb[d] = "on" + d, f);
		c = ja(c);
		Sb[c] && (f = Sb[c], Ka(f, b), 0 == f.length && delete Sb[c]);
		b.qe = l;
		if(b = Rb[d][g][c]) b.Bo = l, Zb(d, g, c, b);
		delete Qb[a];
		return l
	}

	function Zb(a, b, c, d) {
		if(!d.Gc && d.Bo) {
			for(var f = 0, g = 0; f < d.length; f++) d[f].qe ? d[f].b.src = m : (f != g && (d[g] = d[f]), g++);
			d.length = g;
			d.Bo = n;
			0 == g && (delete Rb[a][b][c], Rb[a][b].N--, 0 == Rb[a][b].N && (delete Rb[a][b], Rb[a].N--), 0 == Rb[a].N && delete Rb[a])
		}
	}

	function $b(a) {
		var b, c = 0,
			d = b == m;
		b = !!b;
		if(a == m) Wa(Sb, function(a) {
			for(var f = a.length - 1; 0 <= f; f--) {
				var g = a[f];
				if(d || b == g.capture) Yb(g.key), c++
			}
		});
		else if(a = ja(a), Sb[a]) {
			a = Sb[a];
			for(var f = a.length - 1; 0 <= f; f--) {
				var g = a[f];
				if(d || b == g.capture) Yb(g.key), c++
			}
		}
	}

	function Xb(a, b, c) {
		var d = Rb;
		return b in d && (d = d[b], c in d && (d = d[c], a = ja(a), d[a])) ? d[a] : m
	}

	function ac(a, b, c, d, f) {
		var g = 1;
		b = ja(b);
		if(a[b]) {
			a.Eb--;
			a = a[b];
			a.Gc ? a.Gc++ : a.Gc = 1;
			try {
				for(var j = a.length, k = 0; k < j; k++) {
					var p = a[k];
					p && !p.qe && (g &= bc(p, f) !== n)
				}
			} finally {
				a.Gc--, Zb(c, d, b, a)
			}
		}
		return Boolean(g)
	}

	function bc(a, b) {
		a.Xh && Yb(a.key);
		return a.handleEvent(b)
	}

	function Vb(a, b) {
		if(!Qb[a]) return l;
		var c = Qb[a],
			d = c.type,
			f = Rb;
		if(!(d in f)) return l;
		var f = f[d],
			g, j;
		if(!Kb) {
			g = b || t("window.event");
			var k = l in f,
				p = n in f;
			if(k) {
				if(0 > g.keyCode || g.returnValue != h) return l;
				a: {
					var r = n;
					if(0 == g.keyCode) try {
						g.keyCode = -1;
						break a
					} catch(u) {
						r = l
					}
					if(r || g.returnValue == h) g.returnValue = l
				}
			}
			r = new Nb;
			r.init(g, this);
			g = l;
			try {
				if(k) {
					for(var w = [], A = r.currentTarget; A; A = A.parentNode) w.push(A);
					j = f[l];
					j.Eb = j.N;
					for(var E = w.length - 1; !r.ye && 0 <= E && j.Eb; E--) r.currentTarget = w[E], g &= ac(j, w[E], d, l, r);
					if(p) {
						j = f[n];
						j.Eb = j.N;
						for(E = 0; !r.ye && E < w.length && j.Eb; E++) r.currentTarget = w[E], g &= ac(j, w[E], d, n, r)
					}
				} else g = bc(c, r)
			} finally {
				w && (w.length = 0)
			}
			return g
		}
		d = new Nb(b, this);
		return g = bc(c, d)
	};

	function cc() {}
	z(cc, Sa);
	q = cc.prototype;
	q.nl = l;
	q.Bi = m;
	q.wl = function(a) {
		this.Bi = a
	};
	q.addEventListener = function(a, b, c, d) {
		Ub(this, a, b, c, d)
	};
	q.removeEventListener = function(a, b, c, d) {
		Wb(this, a, b, c, d)
	};
	q.dispatchEvent = function(a) {
		var b = a.type || a,
			c = Rb;
		if(b in c) {
			if(v(a)) a = new Mb(a, this);
			else if(a instanceof Mb) a.target = a.target || this;
			else {
				var d = a;
				a = new Mb(b, this);
				db(a, d)
			}
			var d = 1,
				f, c = c[b],
				b = l in c,
				g;
			if(b) {
				f = [];
				for(g = this; g; g = g.Bi) f.push(g);
				g = c[l];
				g.Eb = g.N;
				for(var j = f.length - 1; !a.ye && 0 <= j && g.Eb; j--) a.currentTarget = f[j], d &= ac(g, f[j], a.type, l, a) && a.Gi != n
			}
			if(n in c)
				if(g = c[n], g.Eb = g.N, b)
					for(j = 0; !a.ye && j < f.length && g.Eb; j++) a.currentTarget = f[j], d &= ac(g, f[j], a.type, n, a) && a.Gi != n;
				else
					for(f = this; !a.ye && f && g.Eb; f = f.Bi) a.currentTarget = f, d &= ac(g, f, a.type, n, a) && a.Gi != n;
			a = Boolean(d)
		} else a = l;
		return a
	};
	q.G = function() {
		cc.C.G.call(this);
		$b(this);
		this.Bi = m
	};

	function dc(a, b) {
		this.b = a || 1;
		this.e = b || ec;
		this.k = x(this.D, this);
		this.A = y()
	}
	z(dc, cc);
	dc.prototype.i = n;
	var ec = s.window;
	dc.prototype.a = m;

	function fc(a, b) {
		a.b = b;
		a.a && a.i ? (gc(a), a.start()) : a.a && gc(a)
	}
	dc.prototype.D = function() {
		if(this.i) {
			var a = y() - this.A;
			0 < a && a < 0.8 * this.b ? this.a = this.e.setTimeout(this.k, this.b - a) : (this.dispatchEvent("tick"), this.i && (this.a = this.e.setTimeout(this.k, this.b), this.A = y()))
		}
	};
	dc.prototype.start = function() {
		this.i = l;
		this.a || (this.a = this.e.setTimeout(this.k, this.b), this.A = y())
	};

	function gc(a) {
		a.i = n;
		a.a && (a.e.clearTimeout(a.a), a.a = m)
	}
	dc.prototype.G = function() {
		dc.C.G.call(this);
		gc(this);
		delete this.e
	};

	function hc(a, b) {
		ha(a) || (a && "function" == typeof a.handleEvent ? a = x(a.handleEvent, a) : e(Error("Invalid listener argument")));
		return 2147483647 < b ? -1 : ec.setTimeout(a, b || 0)
	};

	function ic(a, b, c) {
		this.a = a;
		this.e = b || 0;
		this.b = c;
		this.i = x(this.k, this)
	}
	z(ic, Sa);
	ic.prototype.fa = 0;
	ic.prototype.G = function() {
		ic.C.G.call(this);
		0 != this.fa && ec.clearTimeout(this.fa);
		this.fa = 0;
		delete this.a;
		delete this.b
	};
	ic.prototype.start = function(a) {
		0 != this.fa && ec.clearTimeout(this.fa);
		this.fa = 0;
		this.fa = hc(this.i, da(a) ? a : this.e)
	};
	ic.prototype.k = function() {
		this.fa = 0;
		this.a && this.a.call(this.b)
	};
	var jc = "StopIteration" in s ? s.StopIteration : Error("StopIteration");

	function kc() {}
	kc.prototype.a = function() {
		e(jc)
	};
	kc.prototype.Gd = function() {
		return this
	};

	function lc(a) {
		if(a instanceof kc) return a;
		if("function" == typeof a.Gd) return a.Gd(n);
		if(ga(a)) {
			var b = 0,
				c = new kc;
			c.a = function() {
				for(;;) {
					b >= a.length && e(jc);
					if(b in a) return a[b++];
					b++
				}
			};
			return c
		}
		e(Error("Not implemented"))
	}

	function mc(a, b) {
		if(ga(a)) try {
			B(a, b, h)
		} catch(c) {
			c !== jc && e(c)
		} else {
			a = lc(a);
			try {
				for(;;) b.call(h, a.a(), h, a)
			} catch(d) {
				d !== jc && e(d)
			}
		}
	};

	function nc(a) {
		if("function" == typeof a.Cb) return a.Cb();
		if(v(a)) return a.split("");
		if(ga(a)) {
			for(var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
			return b
		}
		return Ya(a)
	};

	function oc(a, b) {
		this.b = {};
		this.a = [];
		var c = arguments.length;
		if(1 < c) {
			c % 2 && e(Error("Uneven number of arguments"));
			for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
		} else if(a) {
			a instanceof oc ? (c = a.Lc(), d = a.Cb()) : (c = Za(a), d = Ya(a));
			for(var f = 0; f < c.length; f++) this.set(c[f], d[f])
		}
	}
	q = oc.prototype;
	q.N = 0;
	q.rg = 0;
	q.Mc = function() {
		return this.N
	};
	q.Cb = function() {
		pc(this);
		for(var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
		return a
	};
	q.Lc = function() {
		pc(this);
		return this.a.concat()
	};
	q.equals = function(a, b) {
		if(this === a) return l;
		if(this.N != a.Mc()) return n;
		var c = b || qc;
		pc(this);
		for(var d, f = 0; d = this.a[f]; f++)
			if(!c(this.get(d), a.get(d))) return n;
		return l
	};

	function qc(a, b) {
		return a === b
	}
	q.isEmpty = function() {
		return 0 == this.N
	};
	q.clear = function() {
		this.b = {};
		this.rg = this.N = this.a.length = 0
	};

	function pc(a) {
		if(a.N != a.a.length) {
			for(var b = 0, c = 0; b < a.a.length;) {
				var d = a.a[b];
				rc(a.b, d) && (a.a[c++] = d);
				b++
			}
			a.a.length = c
		}
		if(a.N != a.a.length) {
			for(var f = {}, c = b = 0; b < a.a.length;) d = a.a[b], rc(f, d) || (a.a[c++] = d, f[d] = 1), b++;
			a.a.length = c
		}
	}
	q.get = function(a, b) {
		return rc(this.b, a) ? this.b[a] : b
	};
	q.set = function(a, b) {
		rc(this.b, a) || (this.N++, this.a.push(a), this.rg++);
		this.b[a] = b
	};
	q.aa = function() {
		return new oc(this)
	};
	q.Gd = function(a) {
		pc(this);
		var b = 0,
			c = this.a,
			d = this.b,
			f = this.rg,
			g = this,
			j = new kc;
		j.a = function() {
			for(;;) {
				f != g.rg && e(Error("The map has changed since the iterator was created"));
				b >= c.length && e(jc);
				var j = c[b++];
				return a ? j : d[j]
			}
		};
		return j
	};

	function rc(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	};

	function sc(a, b, c) {
		return Math.min(Math.max(a, b), c)
	};

	function D(a, b) {
		this.x = da(a) ? a : 0;
		this.y = da(b) ? b : 0
	}
	D.prototype.aa = function() {
		return new D(this.x, this.y)
	};

	function tc(a, b) {
		var c = a.x - b.x,
			d = a.y - b.y;
		return Math.sqrt(c * c + d * d)
	}

	function uc(a, b) {
		return new D(a.x - b.x, a.y - b.y)
	};

	function vc(a, b, c, d) {
		this.top = a;
		this.right = b;
		this.bottom = c;
		this.left = d
	}
	vc.prototype.aa = function() {
		return new vc(this.top, this.right, this.bottom, this.left)
	};
	vc.prototype.contains = function(a) {
		return !this || !a ? n : a instanceof vc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
	};

	function F(a, b) {
		this.width = a;
		this.height = b
	}

	function wc(a, b) {
		return a == b ? l : !a || !b ? n : a.width == b.width && a.height == b.height
	}
	q = F.prototype;
	q.aa = function() {
		return new F(this.width, this.height)
	};

	function xc(a) {
		return a.width / a.height
	}
	q.isEmpty = function() {
		return !(this.width * this.height)
	};
	q.ceil = function() {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	q.floor = function() {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	q.round = function() {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	q.scale = function(a) {
		this.width *= a;
		this.height *= a;
		return this
	};

	function yc(a, b, c, d) {
		this.left = a;
		this.top = b;
		this.width = c;
		this.height = d
	}
	yc.prototype.aa = function() {
		return new yc(this.left, this.top, this.width, this.height)
	};

	function zc(a) {
		return new yc(a.left, a.top, a.right - a.left, a.bottom - a.top)
	}
	yc.prototype.contains = function(a) {
		return a instanceof yc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
	};

	function Ac(a, b, c, d, f, g, j) {
		var k = "";
		a && (k += a + ":");
		c && (k += "//", b && (k += b + "@"), k += c, d && (k += ":" + d));
		f && (k += f);
		g && (k += "?" + g);
		j && (k += "#" + j);
		return k
	}
	var Bc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

	function Cc(a) {
		if(Dc) {
			Dc = n;
			var b = s.location;
			if(b) {
				var c = b.href;
				if(c && (c = Ec(c)) && c != b.hostname) Dc = l, e(Error())
			}
		}
		return a.match(Bc)
	}
	var Dc = sb;

	function Ec(a) {
		return(a = Cc(a)[3] || m) && decodeURIComponent(a)
	}

	function Fc() {
		var a = Cc(document.location.href);
		return Ac(a[1], a[2], a[3], a[4])
	}

	function Gc(a) {
		a = Cc(a);
		return Ac(m, m, m, m, a[5], a[6], a[7])
	}

	function Hc(a) {
		if(a[1]) {
			var b = a[0],
				c = b.indexOf("#");
			0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
			c = b.indexOf("?");
			0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = h)
		}
		return a.join("")
	}

	function Ic(a, b, c) {
		if(fa(b))
			for(var d = 0; d < b.length; d++) Ic(a, String(b[d]), c);
		else b != m && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
	}

	function Jc(a, b, c) {
		Math.max(b.length - (c || 0), 0);
		for(c = c || 0; c < b.length; c += 2) Ic(b[c], b[c + 1], a);
		return a
	}

	function Kc(a, b) {
		for(var c in b) Ic(c, b[c], a);
		return a
	}

	function Lc(a, b) {
		return Hc(2 == arguments.length ? Jc([a], arguments[1], 0) : Jc([a], arguments, 1))
	};

	function Mc(a, b) {
		var c;
		if(a instanceof Mc) this.se = da(b) ? b : a.se, Nc(this, a.jf), this.qi = a.qi, this.hf = a.hf, Oc(this, a.pi), this.oi = a.oi, Pc(this, a.a.aa()), Qc(this, a.Wk);
		else if(a && (c = Cc(String(a)))) {
			this.se = !!b;
			Nc(this, c[1] || "", l);
			this.qi = c[2] ? decodeURIComponent(c[2] || "") : "";
			var d = c[3] || "";
			this.hf = d ? decodeURIComponent(d) : "";
			Oc(this, c[4]);
			this.oi = c[5] ? decodeURIComponent(c[5] || "") : "";
			Pc(this, c[6] || "", l);
			Qc(this, c[7] || "", l)
		} else this.se = !!b, this.a = new Rc(m, 0, this.se)
	}
	q = Mc.prototype;
	q.jf = "";
	q.qi = "";
	q.hf = "";
	q.pi = m;
	q.oi = "";
	q.Wk = "";
	q.se = n;
	q.toString = function() {
		var a = [],
			b = this.jf;
		b && a.push(Sc(b, Tc), ":");
		if(b = this.hf) {
			a.push("//");
			var c = this.qi;
			c && a.push(Sc(c, Tc), "@");
			a.push(encodeURIComponent(String(b)));
			b = this.pi;
			b != m && a.push(":", String(b))
		}
		if(b = this.oi) this.hf && "/" != b.charAt(0) && a.push("/"), a.push(Sc(b, "/" == b.charAt(0) ? Uc : Vc));
		(b = this.a.toString()) && a.push("?", b);
		(b = this.Wk) && a.push("#", Sc(b, Wc));
		return a.join("")
	};
	q.aa = function() {
		return new Mc(this)
	};

	function Nc(a, b, c) {
		a.jf = c ? b ? decodeURIComponent(b) : "" : b;
		a.jf && (a.jf = a.jf.replace(/:$/, ""))
	}

	function Oc(a, b) {
		b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.pi = b) : a.pi = m
	}

	function Pc(a, b, c) {
		if(b instanceof Rc) {
			a.a = b;
			b = a.a;
			if((a = a.se) && !b.b) {
				Xc(b);
				b.a = m;
				var d = b.ra;
				c = function(a, b) {
					var c = b.toLowerCase();
					b != c && (Yc(this, b), Zc(this, c, a))
				};
				if("function" == typeof d.forEach) d.forEach(c, b);
				else if(ga(d) || v(d)) B(d, c, b);
				else {
					var f;
					if("function" == typeof d.Lc) f = d.Lc();
					else if("function" != typeof d.Cb)
						if(ga(d) || v(d)) {
							f = [];
							for(var g = d.length, j = 0; j < g; j++) f.push(j)
						} else f = Za(d);
					else f = h;
					d = nc(d);
					g = d.length;
					for(j = 0; j < g; j++) c.call(b, d[j], f && f[j])
				}
			}
			b.b = a
		} else c || (b = Sc(b, $c)), a.a = new Rc(b, 0, a.se)
	}

	function Qc(a, b, c) {
		a.Wk = c ? b ? decodeURIComponent(b) : "" : b;
		return a
	}

	function Sc(a, b) {
		return v(a) ? encodeURI(a).replace(b, ad) : m
	}

	function ad(a) {
		a = a.charCodeAt(0);
		return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
	}
	var Tc = /[#\/\?@]/g,
		Vc = /[\#\?:]/g,
		Uc = /[\#\?]/g,
		$c = /[\#\?@]/g,
		Wc = /#/g;

	function Rc(a, b, c) {
		this.a = a || m;
		this.b = !!c
	}

	function Xc(a) {
		if(!a.ra && (a.ra = new oc, a.N = 0, a.a))
			for(var b = a.a.split("&"), c = 0; c < b.length; c++) {
				var d = b[c].indexOf("="),
					f = m,
					g = m;
				0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
				f = ta(f);
				f = bd(a, f);
				d = a;
				g = g ? ta(g) : "";
				Xc(d);
				d.a = m;
				var f = bd(d, f),
					j = d.ra.get(f);
				j || d.ra.set(f, j = []);
				j.push(g);
				d.N++
			}
	}
	q = Rc.prototype;
	q.ra = m;
	q.N = m;
	q.Mc = function() {
		Xc(this);
		return this.N
	};

	function Yc(a, b) {
		Xc(a);
		b = bd(a, b);
		if(rc(a.ra.b, b)) {
			a.a = m;
			a.N -= a.ra.get(b).length;
			var c = a.ra;
			rc(c.b, b) && (delete c.b[b], c.N--, c.rg++, c.a.length > 2 * c.N && pc(c))
		}
	}
	q.clear = function() {
		this.ra = this.a = m;
		this.N = 0
	};
	q.isEmpty = function() {
		Xc(this);
		return 0 == this.N
	};

	function cd(a, b) {
		Xc(a);
		b = bd(a, b);
		return rc(a.ra.b, b)
	}
	q.Lc = function() {
		Xc(this);
		for(var a = this.ra.Cb(), b = this.ra.Lc(), c = [], d = 0; d < b.length; d++)
			for(var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
		return c
	};
	q.Cb = function(a) {
		Xc(this);
		var b = [];
		if(a) cd(this, a) && (b = La(b, this.ra.get(bd(this, a))));
		else {
			a = this.ra.Cb();
			for(var c = 0; c < a.length; c++) b = La(b, a[c])
		}
		return b
	};
	q.set = function(a, b) {
		Xc(this);
		this.a = m;
		a = bd(this, a);
		cd(this, a) && (this.N -= this.ra.get(a).length);
		this.ra.set(a, [b]);
		this.N++;
		return this
	};
	q.get = function(a, b) {
		var c = a ? this.Cb(a) : [];
		return 0 < c.length ? String(c[0]) : b
	};

	function Zc(a, b, c) {
		Yc(a, b);
		0 < c.length && (a.a = m, a.ra.set(bd(a, b), Ma(c)), a.N += c.length)
	}
	q.toString = function() {
		if(this.a) return this.a;
		if(!this.ra) return "";
		for(var a = [], b = this.ra.Lc(), c = 0; c < b.length; c++)
			for(var d = b[c], f = encodeURIComponent(String(d)), d = this.Cb(d), g = 0; g < d.length; g++) {
				var j = f;
				"" !== d[g] && (j += "=" + encodeURIComponent(String(d[g])));
				a.push(j)
			}
		return this.a = a.join("&")
	};
	q.aa = function() {
		var a = new Rc;
		a.a = this.a;
		this.ra && (a.ra = this.ra.aa(), a.N = this.N);
		return a
	};

	function bd(a, b) {
		var c = String(b);
		a.b && (c = c.toLowerCase());
		return c
	};

	function dd() {
		this.a = y()
	}
	new dd;
	dd.prototype.set = function(a) {
		this.a = a
	};
	dd.prototype.reset = function() {
		this.set(y())
	};
	dd.prototype.get = function() {
		return this.a
	};
	var ed;

	function fd(a) {
		a = a.className;
		return v(a) && a.match(/\S+/g) || []
	}

	function G(a, b) {
		var c = fd(a),
			d = Pa(arguments, 1),
			f = c.length + d.length;
		gd(c, d);
		a.className = c.join(" ");
		return c.length == f
	}

	function H(a, b) {
		var c = fd(a),
			d = Pa(arguments, 1),
			c = hd(c, d);
		a.className = c.join(" ")
	}

	function gd(a, b) {
		for(var c = 0; c < b.length; c++) Ia(a, b[c]) || a.push(b[c])
	}

	function hd(a, b) {
		return Ea(a, function(a) {
			return !Ia(b, a)
		})
	}

	function id(a, b, c) {
		var d = fd(a);
		v(b) ? Ka(d, b) : fa(b) && (d = hd(d, b));
		v(c) && !Ia(d, c) ? d.push(c) : fa(c) && gd(d, c);
		a.className = d.join(" ")
	}

	function I(a, b) {
		return Ia(fd(a), b)
	}

	function J(a, b, c) {
		c ? G(a, b) : H(a, b)
	}

	function jd(a, b) {
		var c = !I(a, b);
		J(a, b, c);
		return c
	};
	var kd = !C || C && 9 <= Ib;
	!rb && !C || C && C && 9 <= Ib || rb && Gb("1.9.1");
	var ld = C && !Gb("9"),
		md = C || qb || sb;

	function nd(a) {
		return a ? new od(pd(a)) : ed || (ed = new od)
	}

	function K(a) {
		return v(a) ? document.getElementById(a) : a
	}

	function qd(a, b) {
		var c = b || document;
		return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : rd("*", a, b)
	}

	function L(a, b) {
		var c = b || document,
			d = m;
		return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : qd(a, b)[0]) || m
	}

	function rd(a, b, c) {
		var d = document;
		c = c || d;
		a = a && "*" != a ? a.toUpperCase() : "";
		if(c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
		if(b && c.getElementsByClassName) {
			c = c.getElementsByClassName(b);
			if(a) {
				for(var d = {}, f = 0, g = 0, j; j = c[g]; g++) a == j.nodeName && (d[f++] = j);
				d.length = f;
				return d
			}
			return c
		}
		c = c.getElementsByTagName(a || "*");
		if(b) {
			d = {};
			for(g = f = 0; j = c[g]; g++) a = j.className, "function" == typeof a.split && Ia(a.split(/\s+/), b) && (d[f++] = j);
			d.length = f;
			return d
		}
		return c
	}

	function sd(a, b) {
		Wa(b, function(b, d) {
			"style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in td ? a.setAttribute(td[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
		})
	}
	var td = {
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

	function ud(a) {
		a = a.document;
		a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
		return new F(a.clientWidth, a.clientHeight)
	}

	function vd(a, b, c) {
		var d = arguments,
			f = document,
			g = d[0],
			j = d[1];
		if(!kd && j && (j.name || j.type)) {
			g = ["<", g];
			j.name && g.push(' name="', ua(j.name), '"');
			if(j.type) {
				g.push(' type="', ua(j.type), '"');
				var k = {};
				db(k, j);
				delete k.type;
				j = k
			}
			g.push(">");
			g = g.join("")
		}
		g = f.createElement(g);
		j && (v(j) ? g.className = j : fa(j) ? G.apply(m, [g].concat(j)) : sd(g, j));
		2 < d.length && wd(f, g, d, 2);
		return g
	}

	function wd(a, b, c, d) {
		function f(c) {
			c && b.appendChild(v(c) ? a.createTextNode(c) : c)
		}
		for(; d < c.length; d++) {
			var g = c[d];
			if(ga(g) && !(ia(g) && 0 < g.nodeType)) {
				var j = B,
					k;
				a: {
					if((k = g) && "number" == typeof k.length) {
						if(ia(k)) {
							k = "function" == typeof k.item || "string" == typeof k.item;
							break a
						}
						if(ha(k)) {
							k = "function" == typeof k.item;
							break a
						}
					}
					k = n
				}
				j(k ? Ma(g) : g, f)
			} else f(g)
		}
	}

	function xd(a, b) {
		wd(pd(a), a, arguments, 1)
	}

	function yd(a) {
		for(var b; b = a.firstChild;) a.removeChild(b)
	}

	function zd(a) {
		return a && a.parentNode ? a.parentNode.removeChild(a) : m
	}

	function Ad(a, b) {
		var c = b.parentNode;
		c && c.replaceChild(a, b)
	}

	function Bd(a) {
		if(a.firstElementChild != h) a = a.firstElementChild;
		else
			for(a = a.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
		return a
	}

	function Cd(a) {
		if(!a) return m;
		if(a.firstChild) return a.firstChild;
		for(; a && !a.nextSibling;) a = a.parentNode;
		return a ? a.nextSibling : m
	}

	function Dd(a) {
		if(!a) return m;
		if(!a.previousSibling) return a.parentNode;
		for(a = a.previousSibling; a && a.lastChild;) a = a.lastChild;
		return a
	}

	function pd(a) {
		return 9 == a.nodeType ? a : a.ownerDocument || a.document
	}

	function Ed(a, b) {
		if("textContent" in a) a.textContent = b;
		else if(a.firstChild && 3 == a.firstChild.nodeType) {
			for(; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
			a.firstChild.data = b
		} else yd(a), a.appendChild(pd(a).createTextNode(b))
	}

	function Fd(a, b, c, d) {
		if(a != m)
			for(a = a.firstChild; a;) {
				if(b(a) && (c.push(a), d) || Fd(a, b, c, d)) return l;
				a = a.nextSibling
			}
		return n
	}
	var Gd = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		},
		Hd = {
			IMG: " ",
			BR: "\n"
		};

	function Id(a, b, c) {
		if(!(a.nodeName in Gd))
			if(3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
			else if(a.nodeName in Hd) b.push(Hd[a.nodeName]);
		else
			for(a = a.firstChild; a;) Id(a, b, c), a = a.nextSibling
	}

	function Jd(a, b, c) {
		if(!b && !c) return m;
		var d = b ? b.toUpperCase() : m;
		return Kd(a, function(a) {
			return(!d || a.nodeName == d) && (!c || I(a, c))
		}, l)
	}

	function Ld(a, b) {
		return Jd(a, m, b)
	}

	function Kd(a, b, c, d) {
		c || (a = a.parentNode);
		c = d == m;
		for(var f = 0; a && (c || f <= d);) {
			if(b(a)) return a;
			a = a.parentNode;
			f++
		}
		return m
	}

	function od(a) {
		this.a = a || s.document || document
	}
	q = od.prototype;
	q.W = function(a) {
		return v(a) ? this.a.getElementById(a) : a
	};
	q.createElement = function(a) {
		return this.a.createElement(a)
	};

	function Md(a) {
		return "CSS1Compat" == a.a.compatMode
	}

	function Nd(a) {
		var b = a.a;
		a = !sb && "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
		b = b.parentWindow || b.defaultView;
		return new D(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
	}
	q.appendChild = function(a, b) {
		a.appendChild(b)
	};
	q.append = xd;
	q.wu = yd;
	q.Km = zd;
	q.contains = function(a, b) {
		if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
		if("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
		for(; b && a != b;) b = b.parentNode;
		return b == a
	};

	function Od(a, b, c) {
		a.dataset ? a.dataset[Pd(b)] = c : a.setAttribute("data-" + b, c)
	}

	function M(a, b) {
		return a.dataset ? a.dataset[Pd(b)] : a.getAttribute("data-" + b)
	}

	function Qd(a, b) {
		a.dataset ? delete a.dataset[Pd(b)] : a.removeAttribute("data-" + b)
	}
	var Rd = {};

	function Pd(a) {
		return Rd[a] || (Rd[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
			return c.toUpperCase()
		}))
	};

	function Sd(a) {
		var b = a.__yt_uid_key;
		b || (b = Td(), a.__yt_uid_key = b);
		return b
	}
	var Td = t("yt.dom.getNextId_");
	if(!Td) {
		Td = function() {
			return ++Ud
		};
		qa("yt.dom.getNextId_", Td);
		var Ud = 0
	}

	function Vd(a) {
		var b = a.cloneNode(n);
		"TR" == b.tagName || "SELECT" == b.tagName ? B(a.childNodes, function(a) {
			b.appendChild(Vd(a))
		}) : b.innerHTML = a.innerHTML;
		return b
	}

	function Wd(a, b) {
		var c = rd(a, m, b);
		return c.length ? c[0] : m
	}

	function Xd(a, b) {
		return L(a, b)
	}

	function Yd(a, b) {
		if(a in b) return b[a];
		var c = a.charAt(0).toUpperCase() + a.substr(1);
		if("moz" + c in b) return b["moz" + c];
		if("ms" + c in b) return b["ms" + c];
		if("o" + c in b) return b["o" + c];
		if("webkit" + c in b) return b["webkit" + c]
	}

	function Zd(a, b) {
		var c;
		Ga(a, function(a) {
			c = Yd(a, b);
			return !!c
		});
		return c
	};

	function $d(a) {
		if(a = a || window.event) {
			for(var b in a) b in ae || (this[b] = a[b]);
			this.scale = a.scale;
			this.rotation = a.rotation;
			this.ve = a;
			if((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
			this.target = b;
			if(b = a.relatedTarget) try {
				b = b.nodeName && b
			} catch(c) {
				b = m
			} else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
			this.relatedTarget = b;
			this.clientX = a.clientX != h ? a.clientX : a.pageX;
			this.clientY = a.clientY != h ? a.clientY : a.pageY;
			if(document.body && document.documentElement) {
				b = document.body.scrollLeft + document.documentElement.scrollLeft;
				var d = document.body.scrollTop + document.documentElement.scrollTop;
				this.pageX = a.pageX != h ? a.pageX : a.clientX + b;
				this.pageY = a.pageY != h ? a.pageY : a.clientY + d
			}
			this.keyCode = a.keyCode ? a.keyCode : a.which;
			this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
			this.altKey = a.altKey;
			this.ctrlKey = a.ctrlKey;
			this.shiftKey = a.shiftKey;
			"MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.a && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
		}
	}
	q = $d.prototype;
	q.ve = m;
	q.type = "";
	q.target = m;
	q.relatedTarget = m;
	q.currentTarget = m;
	q.data = m;
	q.keyCode = 0;
	q.charCode = 0;
	q.altKey = n;
	q.ctrlKey = n;
	q.shiftKey = n;
	q.clientX = 0;
	q.clientY = 0;
	q.pageX = 0;
	q.pageY = 0;
	q.wheelDeltaX = 0;
	q.wheelDeltaY = 0;
	q.rotation = 0;
	q.scale = 1;
	q.changedTouches = m;
	q.preventDefault = function() {
		this.ve.returnValue = n;
		this.ve.preventDefault && this.ve.preventDefault()
	};
	q.stopPropagation = function() {
		this.ve.cancelBubble = l;
		this.ve.stopPropagation && this.ve.stopPropagation()
	};
	var ae = {
		stopPropagation: 1,
		preventMouseEvent: 1,
		preventManipulation: 1,
		preventDefault: 1,
		layerX: 1,
		layerY: 1,
		scale: 1,
		rotation: 1
	};
	var be = t("yt.events.listeners_") || {};
	qa("yt.events.listeners_", be);
	var ce = t("yt.events.counter_") || {
		count: 0
	};
	qa("yt.events.counter_", ce);

	function de(a, b, c, d) {
		return $a(be, function(f) {
			return f[0] == a && f[1] == b && f[2] == c && f[4] == !!d
		})
	}

	function N(a, b, c, d) {
		if(!a || !a.addEventListener && !a.attachEvent) return "";
		d = !!d;
		var f = de(a, b, c, d);
		if(f) return f;
		var f = ++ce.count + "",
			g = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter" in document),
			j;
		j = g ? function(d) {
			d = new $d(d);
			if(!Kd(d.relatedTarget, function(b) {
					return b == a
				}, l)) return d.currentTarget = a, d.type = b, c.call(a, d)
		} : function(b) {
			b = new $d(b);
			b.currentTarget = a;
			return c.call(a, b)
		};
		be[f] = [a, b, c, j, d];
		a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover", j, d) : "mouseleave" == b && g ? a.addEventListener("mouseout", j, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", j, d) : a.addEventListener(b, j, d) : a.attachEvent("on" + b, j);
		return f
	}

	function ee(a, b, c) {
		if(Yd("pointerEnabled", window.navigator)) return b = b.charAt(0).toUpperCase() + b.substr(1).toLowerCase(), N(a, "MSPointer" + b, c);
		var d = b = b.toLowerCase();
		switch(b) {
			case "down":
				d = "start";
				break;
			case "up":
				d = "end";
				break;
			case "over":
				d = "enter";
				break;
			case "out":
				d = "leave"
		}
		var f = n,
			g = 0;
		return [N(a, "touch" + d, function(a) {
			window.clearTimeout(g);
			f = l;
			B(a.changedTouches, function(b) {
				var d = new $d(a);
				pa(d, b);
				c(d)
			});
			g = window.setTimeout(function() {
				f = n
			}, 400)
		}), N(a, "mouse" + b, function(a) {
			f || c(a)
		})]
	}

	function fe(a, b, c) {
		ge(a, "change", b, function(a) {
			return a.nodeName.toLowerCase() === c.toLowerCase() && l
		})
	}

	function he(a, b, c) {
		return ge(a, "click", b, function(a) {
			return I(a, c)
		})
	}

	function ge(a, b, c, d) {
		var f = a || document;
		return N(f, b, function(a) {
			var b = Kd(a.target, function(a) {
				return a === f || d(a)
			}, l);
			b && b !== f && (a.currentTarget = b, c.call(b, a))
		})
	}

	function ie(a, b, c, d) {
		(a = de(a, b, c, !!d)) && je(a)
	}

	function je(a) {
		"string" == typeof a && (a = [a]);
		B(a, function(a) {
			if(a in be) {
				var c = be[a],
					d = c[0],
					f = c[1],
					g = c[3],
					c = c[4];
				d.removeEventListener ? d.removeEventListener(f, g, c) : d.detachEvent("on" + f, g);
				delete be[a]
			}
		})
	}

	function ke(a) {
		for(var b in be) be[b][0] == a && je(b)
	}

	function le(a, b) {
		if(document.createEvent) {
			var c = document.createEvent("HTMLEvents");
			c.initEvent(b, l, l);
			a.dispatchEvent(c)
		} else c = document.createEventObject(), a.fireEvent("on" + b, c)
	};

	function me() {
		return !!Zd(["fullscreenEnabled", "fullScreenEnabled"], document)
	}

	function ne() {
		return Zd(["fullscreenElement", "fullScreenElement"], document)
	};

	function oe(a) {
		a = a || {};
		this.url = a.url || "";
		this.urlV8 = a.url_v8 || "";
		this.urlV9As2 = a.url_v9as2 || "";
		this.args = a.args || ab(pe);
		this.assets = a.assets || {};
		this.attrs = a.attrs || ab(qe);
		this.params = a.params || ab(re);
		this.minVersion = a.min_version || "8.0.0";
		this.fallback = a.fallback || m;
		this.fallbackMessage = a.fallbackMessage || m;
		this.html5 = !!a.html5;
		this.disable = a.disable || {}
	}
	var pe = {
			enablejsapi: 1
		},
		qe = {},
		re = {
			allowscriptaccess: "always",
			allowfullscreen: "true",
			bgcolor: "#000000"
		};

	function se(a) {
		a instanceof oe || (a = new oe(a));
		return a
	}
	oe.prototype.aa = function() {
		var a = new oe,
			b;
		for(b in this) {
			var c = this[b];
			a[b] = "object" == ca(c) ? ab(c) : c
		}
		return a
	};
	var te = {},
		ue = 0;

	function ve(a) {
		if(a) {
			var b = new Image,
				c = "" + ue++;
			te[c] = b;
			b.onload = b.onerror = function() {
				delete te[c]
			};
			b.src = a;
			b = eval("null")
		}
	};

	function we() {
		this.a = [];
		this.ib = {}
	}
	z(we, Sa);
	q = we.prototype;
	q.qo = 1;
	q.fi = 0;
	q.z = function(a, b, c) {
		var d = this.ib[a];
		d || (d = this.ib[a] = []);
		var f = this.qo;
		this.a[f] = a;
		this.a[f + 1] = b;
		this.a[f + 2] = c;
		this.qo = f + 3;
		d.push(f);
		return f
	};
	q.ia = function(a, b, c) {
		if(a = this.ib[a]) {
			var d = this.a;
			if(a = Ha(a, function(a) {
					return d[a + 1] == b && d[a + 2] == c
				})) return this.ci(a)
		}
		return n
	};
	q.ci = function(a) {
		if(0 != this.fi) return this.b || (this.b = []), this.b.push(a), n;
		var b = this.a[a];
		if(b) {
			var c = this.ib[b];
			c && Ka(c, a);
			delete this.a[a];
			delete this.a[a + 1];
			delete this.a[a + 2]
		}
		return !!b
	};
	q.g = function(a, b) {
		var c = this.ib[a];
		if(c) {
			this.fi++;
			for(var d = Pa(arguments, 1), f = 0, g = c.length; f < g; f++) {
				var j = c[f];
				this.a[j + 1].apply(this.a[j + 2], d)
			}
			this.fi--;
			if(this.b && 0 == this.fi)
				for(; c = this.b.pop();) this.ci(c);
			return 0 != f
		}
		return n
	};
	q.clear = function(a) {
		if(a) {
			var b = this.ib[a];
			b && (B(b, this.ci, this), delete this.ib[a])
		} else this.a.length = 0, this.ib = {}
	};
	q.Mc = function(a) {
		if(a) {
			var b = this.ib[a];
			return b ? b.length : 0
		}
		a = 0;
		for(b in this.ib) a += this.Mc(b);
		return a
	};
	q.G = function() {
		we.C.G.call(this);
		delete this.a;
		delete this.ib;
		delete this.b
	};

	function xe(a) {
		this.k = a;
		this.a = 0;
		this.b = this.i(m)
	}

	function ye(a, b, c) {
		var d = a.b;
		for(a = a.a; 0 <= a; a--) {
			for(; d.links[a] && d.links[a].value < b;) d = d.links[a];
			c && (c[a] = d)
		}
		return(d = d.re()) && d.value == b ? d : m
	}

	function ze(a, b) {
		var c = [],
			d = ye(a, b, c);
		return d ? d.re() : c[0].re()
	}

	function Ae(a, b) {
		var c = [],
			d = ye(a, b, c);
		return d ? d : a.e(b, c)
	}
	xe.prototype.e = function(a, b) {
		var c;
		for(c = 0; 0.25 > this.k() && c <= this.a && 15 > c;) c++;
		for(; this.a < c;) b[++this.a] = this.b;
		for(var d = this.i(a), f = 0; f <= c; f++) d.links[f] = b[f].links[f], b[f].links[f] = d;
		return d
	};
	xe.prototype.j = function(a, b) {
		for(var c = 0; c <= a.getLevel(); c++) b[c].links[c] = a.links[c];
		for(; !this.b.links[this.a] && 0 < this.a;) this.a--;
		return a
	};
	xe.prototype.i = function(a) {
		return new Be(a)
	};
	xe.prototype.toString = function(a) {
		a = a || 0;
		for(var b = "", c = this.b; c.links[a];) c = c.links[a], b = b.concat(b.length ? "," : "", c.toString());
		return "[" + b + "]"
	};

	function Be(a) {
		this.value = a;
		this.links = []
	}
	Be.prototype.getLevel = function() {
		return this.links.length - 1
	};
	Be.prototype.re = function() {
		return this.links[0] || m
	};
	Be.prototype.toString = function() {
		return String(this.value)
	};

	function Ce(a, b) {
		this.start = a;
		this.end = b;
		this.df = De++
	}
	var De = 0;
	Ce.prototype.contains = function(a, b) {
		return a >= this.start && (a < this.end || a == this.end && this.start == this.end) && (b == m || a < b && b <= this.end)
	};

	function Ee(a) {
		xe.call(this, a)
	}
	Ee.prototype = new xe(Math.random);
	Ee.prototype.constructor = Ee;

	function Fe(a, b) {
		for(var c = [], d = a.b, f = a.a; 0 <= f; f--) {
			for(; d.links[f] && d.links[f].value <= b;) d = d.links[f];
			var g = c,
				j = d.Aa[f],
				k = h;
			for(k in j) g.push(j[1 * k])
		}
		if(d.value == b)
			for(var p in d.kg) f = d.kg[p], f.start == f.end && c.push(f);
		return c
	}

	function Ge(a, b, c) {
		var d = [];
		b = ze(a, b);
		for(a = c == m ? m : ze(a, c); b && b != a;) {
			c = d;
			var f = b.kg,
				g = h;
			for(g in f) c.push(f[1 * g]);
			b = b.re()
		}
		return d
	}
	Ee.prototype.e = function(a, b) {
		var c = xe.prototype.e.call(this, a, b),
			d, f, g, j = {};
		for(d = 0; d < c.getLevel() && c.links[d + 1]; d++) {
			for(f in j) g = j[f], g.contains(c.value, c.links[d + 1].value) ? He(g, c.links[d], c.links[d + 1], d) : (c.Ab(d, g), delete j[f]);
			for(f in b[d].Aa[d]) g = b[d].Aa[d][1 * f], g.contains(c.value, c.links[d + 1].value) ? (He(g, c.links[d], c.links[d + 1], d), j[f] = g) : c.Ab(d, g)
		}
		for(f in j) c.Ab(d, j[f]);
		for(f in b[d].Aa[d]) c.Ab(d, b[d].Aa[d][1 * f]);
		j = {};
		for(d = 0; d < c.getLevel() && b[d + 1] != this.b; d++) {
			for(f in j) g = j[f], g.contains(b[d].value, c.value) && !g.contains(b[d + 1].value, c.value) ? (b[d].Ab(d, g), delete j[f]) : He(g, b[d + 1], c, d);
			for(f in b[d].Aa[d]) g = b[d].Aa[d][1 * f], g.contains(b[d + 1].value, c.value) && (He(g, b[d + 1], c, d), j[f] = g)
		}
		for(f in j) b[d].Ab(d, j[f]);
		return c
	};
	Ee.prototype.j = function(a, b) {
		var c, d, f, g = {};
		for(c = a.getLevel(); 0 <= c; c--) {
			for(d in g) {
				for(var j = f = g[d], k = b[c + 1], p = b[c], r = c; k && k != p;) k.Ab(r, j), k = k.links[r];
				a.links[c] && f.contains(b[c].value, a.links[c].value) && (b[c].Ab(c, f), delete g[d])
			}
			for(d in b[c].Aa[c])
				if(f = b[c].Aa[c][1 * d], !a.links[c] || !f.contains(b[c].value, a.links[c].value)) b[c].lg(c, f), g[d] = f
		}
		g = {};
		for(c = a.getLevel(); 0 <= c; c--) {
			for(d in g) {
				j = f = g[d];
				k = a.links[c];
				p = a.links[c + 1];
				for(r = c; k && k != p;) k.Ab(r, j), k = k.links[r];
				a.links[c] && f.contains(b[c].value, a.links[c].value) && delete g[d]
			}
			for(d in a.Aa[c])
				if(f = a.Aa[c][1 * d], a.links[c] && (b[c] == this.b || !f.contains(b[c].value, a.links[c].value))) g[d] = f
		}
		return xe.prototype.j.call(this, a, b)
	};
	Ee.prototype.i = function(a) {
		return new Ie(a)
	};

	function Je(a, b, c, d) {
		for(var f = 0; b.links[f] && a.contains(b.value, b.links[f].value);) {
			for(; f < b.getLevel() && b.links[f + 1] && a.contains(b.value, b.links[f + 1].value);) f++;
			b.links[f] && (d(b, f), b = b.links[f])
		}
		for(; b != c;) {
			for(; 0 < f && (!b.links[f] || !a.contains(b.value, b.links[f].value));) f--;
			d(b, f);
			b = b.links[f]
		}
	}

	function He(a, b, c, d) {
		for(; b && b != c;) b.lg(d, a), b = b.links[d]
	}

	function Ie(a) {
		Be.call(this, a);
		this.kg = {};
		this.Aa = [];
		this.a = 0
	}
	Ie.prototype = new Be(Math.random);
	Ie.prototype.constructor = Ie;
	Ie.prototype.Ab = function(a, b) {
		this.Aa[a] || (this.Aa[a] = {});
		this.Aa[a][b.df] = b
	};
	Ie.prototype.lg = function(a, b) {
		this.Aa[a] && delete this.Aa[a][b.df]
	};
	var Ke = {
		bE: 0,
		oy: 1,
		my: 2,
		ny: 3,
		dE: 4,
		sD: 5,
		uz: 6,
		DEFAULT: 7
	};

	function Le(a, b, c) {
		Ce.call(this, a, b);
		a = c || {};
		this.fa = a.id;
		this.uid = ja(this);
		a.priority != h && (this.ip = a.priority);
		this.xi = a.namespace || "";
		this.visible = a.visible || n;
		this.pubsub = new we
	}
	Le.prototype = new Ce(0, 0);
	q = Le.prototype;
	q.constructor = Le;
	q.fa = "";
	q.ip = 7;
	q.Gm = l;
	q.visible = n;
	q.pubsub = m;
	q.xi = "";
	q.getId = function() {
		return this.fa
	};
	q.Ub = function() {
		return this.ip
	};

	function Me(a, b) {
		return a.start == b.start ? a.Ub() == b.Ub() ? 0 : a.Ub() < b.Ub() ? -1 : 1 : a.start < b.start ? -1 : 1
	};

	function Ne() {
		this.timeStamp = this.a = NaN
	};
	var Oe = {
			FD: "html5-stop-propagation",
			Fy: "html5-before-playback",
			Py: "html5-chromeless",
			ZB: "html5-live-dvr-disabled",
			$B: "html5-live-dvr-engaged",
			aC: "html5-live-playback",
			aD: "html5-mobile",
			cD: "modest-branding",
			eD: "html5-native-controls",
			HD: "html5-tablet",
			GD: "html5-tablet-body",
			YC: "html5-main-video",
			OD: "html5-video-container",
			PD: "html5-video-content",
			QD: "html5-video-controls",
			RD: "html5-video-fallback",
			SD: "html5-video-fallback-content",
			TD: "html5-storyboard",
			UD: "html5-video-loader",
			YD: "html5-watermark",
			Iy: "html5-branded-watermark",
			XD: "html5-viewport-sheet",
			Wy: "html5-context-menu",
			jq: "html5-context-menu-copy-video-url",
			lq: "html5-context-menu-pop-out",
			kq: "html5-context-menu-copy-video-url-at-current-time",
			iq: "html5-context-menu-copy-embed-html",
			oq: "html5-context-menu-stop-download",
			mq: "html5-context-menu-report-playback-issue",
			hq: "html5-context-menu-copy-debug-info",
			nq: "html5-context-menu-show-video-info",
			Xy: "html5-show-video-info-template",
			bD: "html5-modal-panel",
			SB: "html5-info-bar",
			zy: "autohide-off",
			Ay: "autohide-on",
			yy: "autohide-fade",
			wy: "autohide-auto",
			xy: "autohide-embeds",
			By: "autohide-seekbar",
			vy: "autohide-aspect",
			IB: "hide-controls",
			JB: "hide-info-bar",
			KB: "html5-hide-share",
			LB: "html5-hide-volume",
			WD: "video-thumbnail",
			Gy: "html5-bezel",
			Hy: "html5-bezel-fade",
			oD: "html5-popup-dialog",
			sy: "html5-async-progress",
			ty: "html5-async-success",
			ry: "html5-async-error",
			xD: "html5-scalable-icon",
			mD: "player-root",
			kD: "player-container",
			gx: "player-actions-container",
			cx: "player-actions-close",
			fx: "player-actions-close-button",
			hx: "player-actions-share",
			ix: "small-view",
			bC: "html5-loading-icon",
			PB: "house-brand",
			AD: "sentiment-like",
			zD: "sentiment-dislike"
		},
		Pe = [0.25, 0.5, 1, 1.5, 2],
		Qe = [2, 5, 100, 101, 150],
		Re = [202, 203];

	function Se(a, b) {
		a = a || 64;
		a & 128 && !b || a & 2 && a & 16 || (this.a = a, this.b = b)
	}
	Se.prototype.a = 64;

	function Te(a, b, c) {
		return b == a.a && c == a.b || b & 128 && !c || b & 2 && b & 16 ? a : new Se(b, c)
	}

	function O(a, b) {
		return !!(a.a & b)
	}

	function Ue(a) {
		if(O(a, 2)) return "ended-mode";
		var b = [];
		O(a, 8) ? b.push("playing-mode") : O(a, 4) && b.push("paused-mode");
		O(a, 1) && !O(a, 32) && b.push("buffering-mode");
		O(a, 32) && b.push("seeking-mode");
		return b
	}

	function Ve() {
		var a;
		return a = 14
	};

	function P() {
		this.i = new we;
		Ta(this, this.i)
	}
	z(P, Sa);
	P.prototype.z = function(a, b, c) {
		this.j || this.i.z(a, b, c)
	};
	P.prototype.ia = function(a, b, c) {
		this.j || this.i.ia(a, b, c)
	};
	P.prototype.g = function(a, b) {
		this.j || this.i.g.apply(this.i, arguments)
	};

	function We(a, b, c) {
		P.call(this);
		this.F = a;
		this.A = b;
		this.D = c;
		this.e = new dc(250);
		this.e.addEventListener("tick", this.yb, n, this);
		Ta(this, this.e);
		this.ua = [];
		this.a = [];
		this.Ec = new Ee(Math.random)
	}
	z(We, P);
	q = We.prototype;
	q.Gc = n;
	q.nh = n;
	q.ak = n;
	q.$j = n;
	q.Wf = m;
	q.addCueRange = function(a) {
		var b = Ma(arguments);
		this.yb();
		b.forEach(function(a) {
			this.ua.push(a);
			var b = this.Ec,
				f = Ae(b, a.start),
				b = Ae(b, a.end);
			f.kg[a.df] = a;
			f.a++;
			b.a++;
			Je(a, f, b, function(b, d) {
				b.Aa[d] && b.Aa[d][a.df] == a && e(Error("Interval already exists: " + a));
				b.Ab(d, a)
			});
			this.g("onAdd", a)
		}, this);
		this.yb()
	};
	q.We = function(a) {
		Ma(arguments).forEach(function(a) {
			a = this.ua.indexOf(a);
			0 <= a && Xe(this, a)
		}, this);
		this.yb()
	};

	function Xe(a, b) {
		var c = a.ua.splice(b, 1)[0],
			d = a.Ec,
			f = [],
			g = ye(d, c.start, f),
			j = ye(d, c.end);
		(!g || !j) && e(Error("Interval not found: " + c));
		Je(c, g, j, function(a, b) {
			a.Aa[b] && a.Aa[b][c.df] == c || e(Error("Interval not found: " + c));
			a.lg(b, c)
		});
		delete g.kg[c.df];
		0 == --g.a && d.j(g, f);
		j = ye(d, c.end, f);
		0 == --j.a && d.j(j, f);
		b = a.a.indexOf(c);
		0 <= b && a.a.splice(b, 1);
		a.g("onRemove", c)
	}
	q.So = function() {
		return 0 < Fe(this.Ec, -2147483648).length
	};
	q.To = function() {
		this.b = Ye(this);
		this.nh = l;
		this.yb()
	};
	q.reset = function() {
		this.nh = this.Gc = n;
		Ze(this);
		for(var a = this.ua.length - 1; 0 <= a; a--) Xe(this, a);
		this.yb();
		this.k = m
	};
	q.tp = function(a) {
		for(var b = this.ua.length - 1; 0 <= b; b--) this.ua[b].xi == a && Xe(this, b);
		this.yb()
	};
	q.Am = function(a) {
		if(this.nh && !this.Gc)
			if(Ze(this), O(a.a, 2)) {
				this.k = m;
				a = [];
				for(var b = 0; b < this.a.length; b++) {
					var c = this.a[b];
					c.Gm && 2147483647 > c.end && (a.push(c), this.a.splice(b--, 1))
				}
				b = [];
				if(a.length)
					for(c = 0; c < a.length; c++) b.push(["onExit", a[c]]);
				a = b.concat($e(this, Ge(this.Ec, this.b)));
				for(b = 0; b < a.length; b++) {
					var d = a[b],
						c = d[1];
					c.pubsub.g.apply(c.pubsub, d)
				}
			} else O(a.a, 16) ? (this.b = Ye(this), gc(this.e), this.e.start(), this.yb()) : (gc(this.e), O(a.b, 16) ? O(a.a, 8) && !this.D() && ze(this.Ec, Math.max(this.b - 2E3, 0)) && (this.Wf = hc(x(this.yb, this))) : this.yb())
	};

	function $e(a, b) {
		var c = [];
		if(!b.length) return c;
		b.sort(Me);
		for(var d = 0; d < b.length; d++) {
			var f = b[d]; - 1 == a.a.indexOf(f) && (a.a.push(f), c.push(["onEnter", f]))
		}
		return c
	}
	q.yb = function() {
		this.$j = l;
		if(!this.ak)
			for(var a = 3; this.$j && a;) {
				this.$j = n;
				this.ak = l;
				if(this.nh && !this.Gc) {
					Ze(this);
					for(var b = Ye(this), c = [], d = 0; d < this.a.length; d++) {
						var f = this.a[d];
						f.Gm && !f.contains(b) && (c.push(["onExit", f]), this.a.splice(d--, 1))
					}
					d = Fe(this.Ec, b);
					f = this.A();
					!O(f, 32) && b > this.b && (d = d.concat(Ge(this.Ec, this.b, b)));
					c = c.concat($e(this, d));
					this.b = b;
					!this.Gc && this.k && (c.unshift(["onLockBlockExit", this.k]), this.k = m, O(f, 2) && (this.b = 2147483647));
					if(O(f, 8) && !this.D() && (b = ze(this.Ec, this.b))) this.Wf = hc(x(this.yb, this), b.value - this.b);
					for(d = 0; d < c.length; d++) b = c[d], f = b[1], "onLockBlockExit" == b[0] || "onLockBlockEnter" == b[0] ? this.g.apply(this, b) : f.pubsub.g.apply(f.pubsub, b)
				}
				this.ak = n;
				a--
			}
	};

	function Ze(a) {
		a.Wf != m && (ec.clearTimeout(a.Wf), a.Wf = m)
	}

	function Ye(a) {
		return O(a.A(), 2) ? 2147483647 : 1E3 * a.F()
	}
	q.G = function() {
		this.e.removeEventListener("tick", this.yb, n, this);
		Ze(this);
		this.k = this.Ec = this.a = this.ua = m;
		We.C.G.call(this)
	};

	function af(a) {
		var b = [];
		bf(a, b, cf);
		return b.join("&")
	}

	function bf(a, b, c) {
		for(var d = a.elements, f, g = 0; f = d[g]; g++)
			if(!(f.form != a || f.disabled || "fieldset" == f.tagName.toLowerCase())) {
				var j = f.name;
				switch(f.type.toLowerCase()) {
					case "file":
					case "submit":
					case "reset":
					case "button":
						break;
					case "select-multiple":
						f = df(f);
						if(f != m)
							for(var k, p = 0; k = f[p]; p++) c(b, j, k);
						break;
					default:
						k = df(f), k != m && c(b, j, k)
				}
			}
		d = a.getElementsByTagName("input");
		for(g = 0; f = d[g]; g++) f.form == a && "image" == f.type.toLowerCase() && (j = f.name, c(b, j, f.value), c(b, j + ".x", "0"), c(b, j + ".y", "0"))
	}

	function ef(a, b, c) {
		var d = a.get(b);
		d || (d = [], a.set(b, d));
		d.push(c)
	}

	function cf(a, b, c) {
		a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
	}

	function df(a) {
		var b = a.type;
		if(!da(b)) return m;
		switch(b.toLowerCase()) {
			case "checkbox":
			case "radio":
				return a.checked ? a.value : m;
			case "select-one":
				return b = a.selectedIndex, 0 <= b ? a.options[b].value : m;
			case "select-multiple":
				for(var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
				return b.length ? b : m;
			default:
				return da(a.value) ? a.value : m
		}
	};

	function ff(a) {
		a = String(a);
		if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
			return eval("(" + a + ")")
		} catch(b) {}
		e(Error("Invalid JSON string: " + a))
	}

	function gf(a) {
		return eval("(" + a + ")")
	}

	function hf() {}

	function jf(a, b) {
		var c = [];
		kf(a, b, c);
		return c.join("")
	}

	function kf(a, b, c) {
		switch(typeof b) {
			case "string":
				lf(b, c);
				break;
			case "number":
				c.push(isFinite(b) && !isNaN(b) ? b : "null");
				break;
			case "boolean":
				c.push(b);
				break;
			case "undefined":
				c.push("null");
				break;
			case "object":
				if(b == m) {
					c.push("null");
					break
				}
				if(fa(b)) {
					var d = b.length;
					c.push("[");
					for(var f = "", g = 0; g < d; g++) c.push(f), kf(a, b[g], c), f = ",";
					c.push("]");
					break
				}
				c.push("{");
				d = "";
				for(f in b) Object.prototype.hasOwnProperty.call(b, f) && (g = b[f], "function" != typeof g && (c.push(d), lf(f, c), c.push(":"), kf(a, g, c), d = ","));
				c.push("}");
				break;
			case "function":
				break;
			default:
				e(Error("Unknown type: " + typeof b))
		}
	}
	var mf = {
			'"': '\\"',
			"\\": "\\\\",
			"/": "\\/",
			"\b": "\\b",
			"\f": "\\f",
			"\n": "\\n",
			"\r": "\\r",
			"\t": "\\t",
			"\x0B": "\\u000b"
		},
		nf = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

	function lf(a, b) {
		b.push('"', a.replace(nf, function(a) {
			if(a in mf) return mf[a];
			var b = a.charCodeAt(0),
				f = "\\u";
			16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
			return mf[a] = f + b.toString(16)
		}), '"')
	};

	function of(a, b) {
		for(var c = a.split(b), d = {}, f = 0, g = c.length; f < g; f++) {
			var j = c[f].split("=");
			if(1 == j.length && j[0] || 2 == j.length) {
				var k = ta(j[0] || ""),
					j = ta(j[1] || "");
				k in d ? fa(d[k]) ? Na(d[k], j) : d[k] = [d[k], j] : d[k] = j
			}
		}
		return d
	}

	function pf(a, b) {
		var c = [];
		Wa(a, function(a, b) {
			var g = encodeURIComponent(String(b)),
				j;
			j = fa(a) ? a : [a];
			B(j, function(a) {
				"" == a ? c.push(g) : c.push(g + "=" + encodeURIComponent(String(a)))
			})
		});
		return c.join(b)
	}

	function qf(a) {
		"?" == a.charAt(0) && (a = a.substr(1));
		return of(a, "&")
	}

	function rf(a) {
		return -1 != a.indexOf("?") ? (a = (a || "").split("#")[0], a = a.split("?", 2), qf(1 < a.length ? a[1] : a[0])) : {}
	}

	function sf(a) {
		a = Kc([], a);
		a[0] = "";
		return a.join("")
	}

	function Q(a, b) {
		return Hc(Kc([a], b))
	}
	var tf = Ec;

	function uf(a, b) {
		var c = a.split("?", 2);
		a = c[0];
		var c = qf(c[1] || ""),
			d;
		for(d in b) c[d] = b[d];
		return Q(a, c)
	}

	function vf(a) {
		return a === m ? n : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? l : n
	}

	function wf(a) {
		a = tf(a);
		return a === m ? m : a.split(".").reverse()
	};
	var xf = window.yt && window.yt.config_ || {};
	qa("yt.config_", xf);
	var yf = window.yt && window.yt.tokens_ || {};
	qa("yt.tokens_", yf);
	qa("yt.globals_", window.yt && window.yt.globals_ || {});
	var zf = window.yt && window.yt.msgs_ || {};
	qa("yt.msgs_", zf);
	var Af = window.yt && window.yt.timeouts_ || [];
	qa("yt.timeouts_", Af);
	var Bf = window.yt && window.yt.intervals_ || [];
	qa("yt.intervals_", Bf);

	function Cf(a) {
		Df(xf, arguments)
	}

	function Ef(a, b) {
		return a in xf ? xf[a] : b
	}

	function Ff(a) {
		Df(yf, arguments)
	}

	function Gf(a) {
		return a in yf ? yf[a] : h
	}

	function R(a, b) {
		var c = window.setTimeout(a, b);
		Af.push(c);
		return c
	}

	function Hf(a, b) {
		var c = window.setInterval(a, b);
		Bf.push(c);
		return c
	}

	function If(a) {
		window.clearTimeout(a)
	}

	function Jf(a) {
		window.clearInterval(a)
	}

	function Kf(a) {
		Df(zf, arguments)
	}

	function S(a, b, c) {
		var d = b || {};
		if(a = a in zf ? zf[a] : c)
			for(var f in d) a = a.replace(RegExp("\\$" + f, "gi"), function() {
				return d[f]
			});
		return a
	}

	function Df(a, b) {
		if(1 < b.length) {
			var c = b[0];
			a[c] = b[1]
		} else {
			var d = b[0];
			for(c in d) a[c] = d[c]
		}
	}
	var Lf = "Microsoft Internet Explorer" == navigator.appName;
	var Mf = m;
	"undefined" != typeof XMLHttpRequest ? Mf = function() {
		return new XMLHttpRequest
	} : "undefined" != typeof ActiveXObject && (Mf = function() {
		return new ActiveXObject("Microsoft.XMLHTTP")
	});

	function Nf(a) {
		switch(a && "status" in a ? a.status : -1) {
			case 0:
			case 200:
			case 204:
			case 304:
				return l;
			default:
				return n
		}
	};

	function Of(a, b, c, d, f, g) {
		var j = Mf && Mf();
		if("open" in j) {
			j.onreadystatechange = function() {
				4 == (j && "readyState" in j ? j.readyState : 0) && b && b(j)
			};
			c = (c || "GET").toUpperCase();
			d = d || "";
			j.open(c, a, l);
			g && (j.responseType = g);
			a = "POST" == c;
			if(f)
				for(var k in f) j.setRequestHeader(k, f[k]), "content-type" == k.toLowerCase() && (a = n);
			a && j.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			j.send(d);
			return j
		}
	}

	function Pf(a, b) {
		var c = b.format || "JSON";
		b.co && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
		var d = b.eb;
		d && (a = uf(a, d));
		var f = b.Pj || "";
		if(d = b.ne) f = qf(f), db(f, d), f = sf(f);
		var g = n,
			j, k = Of(a, function(a) {
				if(!g) {
					g = l;
					j && If(j);
					var d = Nf(a),
						f = m;
					if(d || 400 <= a.status && 500 > a.status) {
						var k = m;
						switch(c) {
							case "JSON":
								var f = a.responseText,
									A = a.getResponseHeader("Content-Type") || "";
								f && 0 <= A.indexOf("json") && (k = gf(f));
								break;
							case "XML":
								f = (f = a.responseXML) ? f ? (f = ("responseXML" in f ? f.responseXML : f).getElementsByTagName("root")) && 0 < f.length ? f[0] : m : m : m, f && (k = {}, B(f.getElementsByTagName("*"), function(a) {
									var b = k,
										c = a.tagName,
										d = "";
									B(a.childNodes, function(a) {
										d += a.nodeValue
									});
									b[c] = d
								}))
						}
						f = k
					}
					if(d) a: {
						switch(c) {
							case "XML":
								d = 0 == parseInt(f && f.return_code, 10);
								break a;
							case "RAW":
								d = l;
								break a
						}
						d = !!f
					}
					f = f || {};
					A = b.Ra || s;
					d ? b.na && b.na.call(A, a, f) : b.onError && b.onError.call(A, a, f);
					b.Oc && b.Oc.call(A, a, f)
				}
			}, b.method, f, b.headers, b.responseType);
		b.zo && 0 < b.timeout && (j = R(function() {
			g || (g = l, k.abort(), If(j), b.zo.call(b.Ra || s, k))
		}, b.timeout));
		return k
	}
	var Qf = {
			html5_ajax: "action_get_html5_token",
			watch_actions_ajax: "action_get_watch_actions_token",
			addto_ajax: "action_get_wl_token"
		},
		Rf = {
			html5_ajax: "html5_ajax_token",
			watch_actions_ajax: "watch_actions_ajax_token",
			addto_ajax: "addto_ajax_token"
		};

	function Sf(a, b, c) {
		if(Gf(a)) b && window.setTimeout(b, 0);
		else {
			var d = Fc() + "/token_ajax",
				f = {};
			f[Qf[a]] = 1;
			Pf(d, {
				format: "RAW",
				method: "GET",
				eb: f,
				Oc: function(d) {
					var f = qf(d.responseText),
						k = f[Rf[a]];
					k ? (Ff(a, k), b && b()) : c && c(d, f)
				}
			})
		}
	};
	var Tf, Uf, Vf, Wf, Xf;
	Xf = Wf = Vf = Uf = Tf = n;
	var Yf = mb();
	Yf && (-1 != Yf.indexOf("Firefox") || -1 != Yf.indexOf("Camino") || (-1 != Yf.indexOf("iPhone") || -1 != Yf.indexOf("iPod") ? Tf = l : -1 != Yf.indexOf("iPad") ? Uf = l : -1 != Yf.indexOf("Android") ? Vf = l : -1 != Yf.indexOf("Chrome") ? Wf = l : -1 != Yf.indexOf("Safari") && (Xf = l)));
	var Zf = Tf,
		$f = Uf,
		ag = Vf,
		bg = Wf,
		cg = Xf;

	function dg(a, b, c, d, f, g, j, k, p) {
		this.Nb = {};
		this.k = a;
		this.A = b;
		this.b = c;
		this.a = d;
		this.j = f;
		this.D = g;
		this.i = j;
		this.e = k;
		this.F = p
	}

	function eg(a, b) {
		var c = a.D,
			c = c.replace("$N", a.i),
			c = c.replace("$L", a.F.toString()),
			c = c.replace("$M", b.toString());
		a.e && (c = Q(c, {
			sigh: a.e
		}));
		return c
	}

	function fg(a, b) {
		var c = Math.floor(b / (a.a * a.j)),
			d = a.a * a.j,
			f = b % d,
			g = f % a.a,
			f = Math.floor(f / a.a),
			j = a.j,
			k = a.b - d * c;
		k < d && (j = Math.ceil(k / a.a));
		return {
			url: eg(a, c),
			Vr: g,
			Ih: a.a,
			row: f,
			rows: j,
			sn: a.k * a.a,
			rn: a.A * j
		}
	};

	function gg(a) {
		var b = [];
		a = a.split("|");
		for(var c = a[0], d, f, g, j, k, p, r, u, w = 1; w < a.length; w++) d = a[w].split("#"), f = w - 1, g = parseInt(d[0], 10), j = parseInt(d[1], 10), k = parseInt(d[2], 10), p = parseInt(d[3], 10), r = parseInt(d[4], 10), u = d[6], d = d[7], b.push(new dg(g, j, k, p, r, c, u, d, f));
		this.a = b;
		this.b = {};
		if(b = 1 < this.a.length) b = -1 != this.getLevel(0).i.indexOf("default");
		b && this.a.splice(0, 1)
	}

	function hg(a, b) {
		var c = a.getLevel(0).b - 1;
		return sc(Math.round(c * b), 0, c)
	}
	gg.prototype.getLevel = function(a) {
		return this.a[a]
	};

	function ig(a, b) {
		var c = a.b[b];
		if(c) return c;
		for(var c = a.a.length, d = 0; d < c; d++)
			if(a.getLevel(d).k >= b) return a.b[b] = d;
		a.b[b] = c - 1;
		return c - 1
	};
	var jg = {
		"0": "MONO",
		1: "LEFT_RIGHT",
		2: "RIGHT_LEFT",
		3: "TOP_BOTTOM",
		4: "BOTTOM_TOP"
	};

	function kg(a, b, c) {
		v(b) ? lg(a, c, b) : Wa(b, oa(lg, a))
	}

	function lg(a, b, c) {
		var d;
		a: if(d = String(c).replace(/\-([a-z])/g, function(a, b) {
				return b.toUpperCase()
			}), a.style[d] === h) {
			var f = sb ? "Webkit" : rb ? "Moz" : C ? "ms" : qb ? "O" : m,
				g = v(h) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
			c = c.replace(RegExp("(^" + (g ? "|[" + g + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
				return b + c.toUpperCase()
			});
			f = f + c;
			if(a.style[f] !== h) {
				d = f;
				break a
			}
		}
		d && (a.style[d] = b)
	}

	function mg(a, b) {
		var c = pd(a);
		return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, m)) ? c[b] || c.getPropertyValue(b) || "" : ""
	}

	function ng(a, b) {
		return mg(a, b) || (a.currentStyle ? a.currentStyle[b] : m) || a.style && a.style[b]
	}

	function og(a, b, c) {
		var d, f = rb && (kb || wb) && Gb("1.9");
		b instanceof D ? (d = b.x, b = b.y) : (d = b, b = c);
		a.style.left = pg(d, f);
		a.style.top = pg(b, f)
	}

	function qg(a) {
		return new D(a.offsetLeft, a.offsetTop)
	}

	function rg(a) {
		var b = a.getBoundingClientRect();
		C && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
		return b
	}

	function sg(a) {
		if(C && !(C && 8 <= Ib)) return a.offsetParent;
		var b = pd(a),
			c = ng(a, "position"),
			d = "fixed" == c || "absolute" == c;
		for(a = a.parentNode; a && a != b; a = a.parentNode)
			if(c = ng(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
		return m
	}

	function tg(a) {
		for(var b = new vc(0, Infinity, Infinity, 0), c = nd(a), d = c.a.body, f = c.a.documentElement, g = !sb && "CSS1Compat" == c.a.compatMode ? c.a.documentElement : c.a.body; a = sg(a);)
			if((!C || 0 != a.clientWidth) && (!sb || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != ng(a, "overflow")) {
				var j = ug(a),
					k;
				k = a;
				if(rb && !Gb("1.9")) {
					var p = parseFloat(mg(k, "borderLeftWidth"));
					if(vg(k)) var r = k.offsetWidth - k.clientWidth - p - parseFloat(mg(k, "borderRightWidth")),
						p = p + r;
					k = new D(p, parseFloat(mg(k, "borderTopWidth")))
				} else k = new D(k.clientLeft, k.clientTop);
				j.x += k.x;
				j.y += k.y;
				b.top = Math.max(b.top, j.y);
				b.right = Math.min(b.right, j.x + a.clientWidth);
				b.bottom = Math.min(b.bottom, j.y + a.clientHeight);
				b.left = Math.max(b.left, j.x)
			}
		d = g.scrollLeft;
		g = g.scrollTop;
		b.left = Math.max(b.left, d);
		b.top = Math.max(b.top, g);
		c = ud(c.a.parentWindow || c.a.defaultView || window);
		b.right = Math.min(b.right, d + c.width);
		b.bottom = Math.min(b.bottom, g + c.height);
		return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : m
	}

	function ug(a) {
		var b, c = pd(a),
			d = ng(a, "position"),
			f = rb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
			g = new D(0, 0),
			j;
		b = c ? pd(c) : document;
		j = C && !(C && 9 <= Ib) && !Md(nd(b)) ? b.body : b.documentElement;
		if(a == j) return g;
		if(a.getBoundingClientRect) b = rg(a), a = Nd(nd(c)), g.x = b.left + a.x, g.y = b.top + a.y;
		else if(c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(j), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
		else {
			b = a;
			do {
				g.x += b.offsetLeft;
				g.y += b.offsetTop;
				b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
				if(sb && "fixed" == ng(b, "position")) {
					g.x += c.body.scrollLeft;
					g.y += c.body.scrollTop;
					break
				}
				b = b.offsetParent
			} while (b && b != a);
			if(qb || sb && "absolute" == d) g.y -= c.body.offsetTop;
			for(b = a;
				(b = sg(b)) && b != c.body && b != j;)
				if(g.x -= b.scrollLeft, !qb || "TR" != b.tagName) g.y -= b.scrollTop
		}
		return g
	}

	function wg(a, b) {
		var c = xg(a),
			d = xg(b);
		return new D(c.x - d.x, c.y - d.y)
	}

	function xg(a) {
		var b = new D;
		if(1 == a.nodeType) {
			if(a.getBoundingClientRect) {
				var c = rg(a);
				b.x = c.left;
				b.y = c.top
			} else {
				var c = Nd(nd(a)),
					d = ug(a);
				b.x = d.x - c.x;
				b.y = d.y - c.y
			}
			if(rb && !Gb(12)) {
				var f;
				C ? f = "-ms-transform" : sb ? f = "-webkit-transform" : qb ? f = "-o-transform" : rb && (f = "-moz-transform");
				var g;
				f && (g = ng(a, f));
				g || (g = ng(a, "transform"));
				g ? (a = g.match(yg), a = !a ? new D(0, 0) : new D(parseFloat(a[1]), parseFloat(a[2]))) : a = new D(0, 0);
				b = new D(b.x + a.x, b.y + a.y)
			}
		} else f = ha(a.zw), g = a, a.targetTouches ? g = a.targetTouches[0] : f && a.Kd.targetTouches && (g = a.Kd.targetTouches[0]), b.x = g.clientX, b.y = g.clientY;
		return b
	}

	function zg(a, b, c) {
		b instanceof F ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
		Ag(a, b);
		a.style.height = pg(c, l)
	}

	function pg(a, b) {
		"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
		return a
	}

	function Ag(a, b) {
		a.style.width = pg(b, l)
	}

	function Bg(a) {
		if("none" != ng(a, "display")) return Cg(a);
		var b = a.style,
			c = b.display,
			d = b.visibility,
			f = b.position;
		b.visibility = "hidden";
		b.position = "absolute";
		b.display = "inline";
		a = Cg(a);
		b.display = c;
		b.position = f;
		b.visibility = d;
		return a
	}

	function Cg(a) {
		var b = a.offsetWidth,
			c = a.offsetHeight,
			d = sb && !b && !c;
		return(!da(b) || d) && a.getBoundingClientRect ? (a = rg(a), new F(a.right - a.left, a.bottom - a.top)) : new F(b, c)
	}

	function Dg(a) {
		var b = ug(a);
		a = Bg(a);
		return new yc(b.x, b.y, a.width, a.height)
	}

	function Eg(a, b) {
		var c = a.style;
		"opacity" in c ? c.opacity = b : "MozOpacity" in c ? c.MozOpacity = b : "filter" in c && (c.filter = "" === b ? "" : "alpha(opacity=" + 100 * b + ")")
	}

	function Fg(a, b) {
		a.style.display = b ? "" : "none"
	}

	function vg(a) {
		return "rtl" == ng(a, "direction")
	}

	function Gg(a) {
		var b = pd(a),
			c = C && a.currentStyle;
		if(c && Md(nd(b)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) return b = Hg(a, c.width, "width", "pixelWidth"), a = Hg(a, c.height, "height", "pixelHeight"), new F(b, a);
		c = new F(a.offsetWidth, a.offsetHeight);
		b = Ig(a);
		a = Jg(a);
		return new F(c.width - a.left - b.left - b.right - a.right, c.height - a.top - b.top - b.bottom - a.bottom)
	}

	function Hg(a, b, c, d) {
		if(/^\d+px?$/.test(b)) return parseInt(b, 10);
		var f = a.style[c],
			g = a.runtimeStyle[c];
		a.runtimeStyle[c] = a.currentStyle[c];
		a.style[c] = b;
		b = a.style[d];
		a.style[c] = f;
		a.runtimeStyle[c] = g;
		return b
	}

	function Kg(a, b) {
		var c = a.currentStyle ? a.currentStyle[b] : m;
		return c ? Hg(a, c, "left", "pixelLeft") : 0
	}

	function Ig(a) {
		if(C) {
			var b = Kg(a, "paddingLeft"),
				c = Kg(a, "paddingRight"),
				d = Kg(a, "paddingTop");
			a = Kg(a, "paddingBottom");
			return new vc(d, c, a, b)
		}
		b = mg(a, "paddingLeft");
		c = mg(a, "paddingRight");
		d = mg(a, "paddingTop");
		a = mg(a, "paddingBottom");
		return new vc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
	}
	var Lg = {
		thin: 2,
		medium: 4,
		thick: 6
	};

	function Mg(a, b) {
		if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : m)) return 0;
		var c = a.currentStyle ? a.currentStyle[b + "Width"] : m;
		return c in Lg ? Lg[c] : Hg(a, c, "left", "pixelLeft")
	}

	function Jg(a) {
		if(C) {
			var b = Mg(a, "borderLeft"),
				c = Mg(a, "borderRight"),
				d = Mg(a, "borderTop");
			a = Mg(a, "borderBottom");
			return new vc(d, c, a, b)
		}
		b = mg(a, "borderLeftWidth");
		c = mg(a, "borderRightWidth");
		d = mg(a, "borderTopWidth");
		a = mg(a, "borderBottomWidth");
		return new vc(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
	}
	var Ng = /[^\d]+$/,
		Og = {
			cm: 1,
			"in": 1,
			mm: 1,
			pc: 1,
			pt: 1
		},
		Pg = {
			em: 1,
			ex: 1
		};

	function Qg(a) {
		var b = ng(a, "fontSize"),
			c;
		c = (c = b.match(Ng)) && c[0] || m;
		if(b && "px" == c) return parseInt(b, 10);
		if(C) {
			if(c in Og) return Hg(a, b, "left", "pixelLeft");
			if(a.parentNode && 1 == a.parentNode.nodeType && c in Pg) return a = a.parentNode, c = ng(a, "fontSize"), Hg(a, b == c ? "1em" : b, "left", "pixelLeft")
		}
		c = vd("span", {
			style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
		});
		a.appendChild(c);
		b = c.offsetHeight;
		zd(c);
		return b
	}
	var yg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

	function Rg() {
		return document.createElement("video")
	}

	function Sg(a) {
		a = vd("div", {
			"class": a
		});
		document.body.appendChild(a);
		var b = "none" == mg(a, "display");
		zd(a);
		return b
	};

	function Tg(a, b) {
		this.start = a;
		this.end = b == m ? m : b;
		this.length = b == m ? m : b - a + 1
	}

	function Ug(a) {
		a = a.split("-");
		return 2 == a.length && (a = new Tg(parseInt(a[0], 10), parseInt(a[1], 10)), !isNaN(a.start) && !isNaN(a.end) && !isNaN(a.length) && 0 < a.length) ? a : m
	}
	Tg.prototype.toString = function() {
		return this.start + "-" + (this.end == m ? "" : this.end)
	};

	function Vg(a, b, c, d) {
		this.Tf = new Tg(b, a ? b + a - 1 : h);
		this.start = c;
		this.duration = d ? d : m
	}

	function Wg() {}
	Wg.prototype.a = m;

	function Xg(a, b) {
		var c = new Wg;
		c.a = [];
		var d = new Yg(new DataView(a));
		if(440786851 != Zg(d)) return m;
		$g(d);
		if(408125543 != Zg(d)) return m;
		var d = ah(d),
			f = d.j + d.a,
			g = Zg(d);
		290298740 == g && ($g(d), g = Zg(d));
		if(357149030 != g) return m;
		for(var d = ah(d), j = 1E6, k = 1E9, p = m; !(d.a >= d.b.byteLength);)
			if(g = Zg(d), 2807729 == g) j = bh(d);
			else if(2807730 == g) k = bh(d);
		else if(17545 == g) {
			var p = d,
				g = ch(p, l),
				r = 0;
			4 == g ? r = p.b.getFloat32(p.a) : 8 == g && (r = p.b.getFloat64(p.a));
			p.a += g;
			p = r
		} else $g(d);
		j /= k;
		p != m && (p *= j);
		d = new Yg(new DataView(b));
		if(475249515 != Zg(d)) return m;
		for(d = ah(d); !(d.a >= d.b.byteLength);)
			if(g = Zg(d), 187 == g) {
				k = ah(d);
				g = j;
				r = f;
				if(179 != Zg(k)) k = m;
				else {
					var u = bh(k) * g;
					if(183 != Zg(k)) k = m;
					else {
						for(var k = ah(k), w = 0, A = r; !(k.a >= k.b.byteLength);) {
							var E = Zg(k);
							241 == E ? A = bh(k) + r : 178 == E ? w = bh(k) * g : $g(k)
						}
						k = new Vg(m, A, u, w)
					}
				}
				c.a.push(k);
				1 < c.a.length && (k = c.a[c.a.length - 2], g = c.a[c.a.length - 1], k.Tf.ax || (k.Tf = new Tg(k.Tf.start, g.Tf.start - 1)), k.duration || (k.duration = g.start - k.start))
			} else $g(d);
		c.a.length && (d = c.a[c.a.length - 1], d.duration || (d.duration = p != m ? p - d.start : 5));
		return c
	}

	function Yg(a, b) {
		this.b = a;
		this.a = 0;
		this.j = b || 0
	}

	function Zg(a) {
		for(var b = ch(a, n); 236 == b;) $g(a), b = ch(a, n);
		return b
	}

	function ah(a) {
		var b = ch(a, l),
			c = new DataView(a.b.buffer.slice(a.b.byteOffset + a.a, a.b.byteOffset + a.a + b)),
			c = new Yg(c, a.j + a.a);
		a.a += b;
		return c
	}

	function bh(a) {
		for(var b = ch(a, l), c = dh(a), d = 1; d < b; d++) c = (c << 8) + dh(a);
		return c
	}

	function $g(a) {
		var b = ch(a, l);
		a.a += b
	}

	function ch(a, b) {
		var c = dh(a),
			d = c,
			f = 128,
			g;
		for(g = 0; 7 > g && !(f & c); g++) d = (d << 8) + dh(a), f >>= 1;
		return b ? d & (f << 8 * g) - 1 : d
	}

	function dh(a) {
		return a.b.getUint8(a.a++)
	};
	var eh = ["corp.google.com", "youtube.com", "youtube-nocookie.com"],
		fh = "www.google.com/aclk www.google.com/pagead/conversion googleadservices.com/aclk googleadservices.com/pagead/conversion googleads.g.doubleclick.net/aclk googleads.g.doubleclick.net/pagead/conversion".split(" ");

	function gh(a, b) {
		return RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" + b.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a)
	}

	function jh(a) {
		a = new Mc(a);
		a.hf = document.location.hostname;
		document.location.port && Oc(a, document.location.port);
		return a.toString()
	}

	function kh(a) {
		a = new Mc(a);
		Nc(a, document.location.protocol);
		return a.toString()
	};

	function lh(a) {
		this.a = [];
		this.b = [];
		a = (new DOMParser).parseFromString(a, "text/xml").firstChild;
		var b;
		b = mh(a, "mediaPresentationDuration");
		if("" == b) b = 0;
		else {
			var c = /PT(([0-9]*)H)?(([0-9]*)M)?(([0-9.]*)S)?/.exec(b);
			b = !c ? parseFloat(b) : 3600 * parseFloat(c[2] || 0) + 60 * parseFloat(c[4] || 0) + parseFloat(c[6] || 0)
		}
		this.duration = b;
		a = nh("Period", x(this.i, this), a)[0];
		for(b = 0; b < a.length; b++) c = a[b], 0 == c.b.indexOf("audio") ? this.a = this.a.concat(c.a) : this.b = this.b.concat(c.a)
	}

	function oh(a) {
		return a.textContent
	}

	function mh(a, b) {
		for(var c = a; c; c = c.parentNode)
			if(c.attributes) {
				var d = c.attributes[b];
				if(d) return d.value
			}
		return ""
	}

	function nh(a, b, c) {
		var d = [];
		if(c == m) return d;
		c = c.childNodes;
		for(var f = 0; f < c.length; f++) {
			var g = c[f];
			g.nodeName == a && d.push(b(g))
		}
		return d
	}
	lh.prototype.i = function(a) {
		return nh("AdaptationSet", x(this.j, this), a)
	};
	lh.prototype.j = function(a) {
		return new ph(a)
	};

	function ph(a) {
		this.b = mh(a, "mimeType");
		this.a = nh("Representation", qh, a)
	}

	function qh(a) {
		return new rh(a)
	}

	function rh(a) {
		this.id = mh(a, "id");
		this.a = mh(a, "mimeType");
		this.j = mh(a, "codecs");
		this.width = parseInt(mh(a, "width"), 10) || 0;
		this.height = parseInt(mh(a, "height"), 10) || 0;
		this.e = parseInt(mh(a, "bandwidth"), 10) || 0;
		this.url = nh("BaseURL", oh, a)[0];
		this.url = kh(this.url);
		this.url = Q(this.url, {
			alr: "yes"
		});
		var b = nh("SegmentBase", x(this.jr, this), a);
		b[0] && (b[0][0] && b[0][1]) && (this.b = b[0][0], this.i = b[0][1]);
		this.cg = (a = nh("ContentProtection", x(this.ir, this), a.parentNode)) ? a[0] : m
	}
	q = rh.prototype;
	q.index = m;
	q.fe = m;

	function sh(a) {
		return a.a + '; codecs="' + a.j + '"'
	}
	q.jr = function(a) {
		var b = [];
		b.push(Ug(mh(a, "indexRange")));
		return b = b.concat(nh("Initialization", x(this.Uw, this), a))
	};
	q.Uw = function(a) {
		return Ug(mh(a, "range"))
	};
	q.ir = function(a) {
		var b = a.attributes.schemeIdUri;
		if(!b || "http://youtube.com/drm/2012/10/10" != b.textContent) return m;
		b = {};
		for(a = a.firstChild; a != m; a = a.nextSibling)
			if("yt:SystemURL" == a.nodeName) {
				var c = a.attributes.type.textContent,
					d = a.textContent,
					d = kh(d);
				b[c] = d
			}
		return b
	};

	function th(a, b, c) {
		c = {
			format: "RAW",
			method: "GET",
			responseType: "arraybuffer",
			Oc: x(a.yp, a, c)
		};
		return Pf(Q(a.url, {
			range: b.toString()
		}), c)
	}
	q.yp = function(a, b) {
		if(b.response) {
			var c = new Uint8Array(b.response),
				d = String.fromCharCode.apply(String, c.subarray(0, 8));
			if(0 == d.indexOf("http://") || 0 == d.indexOf("https://")) {
				c = String.fromCharCode.apply(String, c);
				c = c.replace("\n", "");
				b.open("GET", c);
				b.addEventListener("load", x(this.yp, this, a, b), n);
				b.send();
				this.url = c.replace(/[&?]range=[0-9-]*/, "");
				return
			}
		}
		a(b)
	};
	q.Jv = function(a, b) {
		b.response && (this.fe = new Uint8Array(b.response), a())
	};
	q.Pn = function(a, b) {
		if(b.response) {
			var c = b.response;
			if(0 <= this.a.indexOf("webm"))
				if(this.fe) this.index = Xg(this.fe.buffer, c);
				else {
					uh(this, x(this.Pn, this, a, b));
					return
				} else {
				var d;
				a: {
					var f = this.b.start;
					d = new DataView(c);
					var g = 0,
						j = d.getUint32(g, n) + g;
					if(j > c.byteLength) d = m;
					else {
						var k = d.getUint8(g + 8),
							g = g + 12,
							c = d.getUint32(g + 4, n),
							g = g + 8,
							p;
						0 == k ? (k = d.getUint32(g, n), p = d.getUint32(g + 4, n), g += 8) : (k = (d.getUint32(g, n) << 32) + d.getUint32(g + 4, n), p = (d.getUint32(g + 8, n) << 32) + d.getUint32(g + 12, n), g += 16);
						p += j + f;
						f = d.getUint16(g + 2, n);
						g += 4;
						j = p;
						p = new Wg;
						p.a = [];
						for(var r = 0; r < f; r++) {
							var u = d.getUint32(g, n);
							if(u & 2147483648) {
								d = m;
								break a
							}
							var u = u & 2147483647,
								w = d.getUint32(g + 4, n),
								g = g + 12;
							p.a.push(new Vg(u, j, k / c, w / c));
							j += u;
							k += w
						}
						d = p
					}
				}
				this.index = d
			}
			a()
		}
	};

	function uh(a, b) {
		a.fe ? R(b, 0) : th(a, a.i, x(a.Jv, a, b))
	}
	q.Um = function(a) {
		this.index ? R(a, 0) : this.fe ? th(this, this.b, x(this.Pn, this, a)) : uh(this, x(this.Um, this, a))
	};

	function vh(a, b, c) {
		this.a = a;
		this.b = b;
		this.j = c
	}

	function wh() {
		this.a = m;
		this.e = [];
		this.i = {}
	}
	var xh = {
			clearkey: ["org.w3.clearkey", "webkit-org.w3.clearkey"],
			playready: ["com.youtube.playready", "com.microsoft.playready"],
			widevine: ["com.widevine.alpha"]
		},
		yh = ["widevine", "playready", "clearkey"];

	function zh(a, b, c) {
		if(!(a.addKey != m || a.webkitAddKey != m)) return m;
		for(var d = 0; d < yh.length; d++) {
			var f = yh[d];
			if(c[f])
				for(var g = xh[f], j = 0; j < g.length; j++) {
					var k = g[j];
					if(a.canPlayType(b, k)) return new vh(k, f, c[f])
				}
		}
		return m
	}
	wh.prototype.j = function(a) {
		var b = a.initData,
			c = 112 == b[4] && 115 == b[5] && 115 == b[6] && 104 == b[7];
		if("clearkey" == this.a.b && c) {
			a: {
				for(var d = new DataView(b.buffer), c = 0; c < d.byteLength;) {
					var f = d.getUint32(c, n),
						g = d.getUint32(c + 4, n);
					if(1886614376 != g) {
						g.toString(16);
						break
					}
					if(1477738184 == d.getUint32(c + 12, n) && 69420633 == d.getUint32(c + 16, n) && 2464609580 == d.getUint32(c + 20, n) && 1558758348 == d.getUint32(c + 24, n)) {
						d = d.getUint32(c + 28, n);
						if(16 != d) break;
						b = b.subarray(c + 32, c + 32 + d);
						break a
					}
					c += f
				}
				b = m
			}
			if(!b) return
		}
		if(a.target.webkitGenerateKeyRequest) a.target.webkitGenerateKeyRequest(this.a.a, b);
		else if(a.target.generateKeyRequest) a.target.generateKeyRequest(this.a.a, b);
		else return;
		this.e.push(b)
	};
	wh.prototype.b = function(a) {
		var b;
		this.i[a.sessionId] ? b = this.i[a.sessionId] : (b = this.e.shift(), this.i[a.sessionId] = b);
		a = {
			format: "RAW",
			method: "POST",
			Pj: a.message,
			responseType: "arraybuffer",
			withCredentials: l,
			na: x(this.k, this, a.target, b, a.sessionId)
		};
		Pf(this.a.j, a)
	};
	wh.prototype.k = function(a, b, c, d) {
		d = new Uint8Array(d.response);
		a.webkitAddKey ? a.webkitAddKey(this.a.a, d, b, c) : a.addKey && a.addKey(this.a.a, d, b, c)
	};

	function Ah(a, b) {
		this.a = a;
		this.b = b;
		this.j = 0;
		Object.defineProperty(this, "timestampOffset", {
			get: this.Js,
			set: this.Ms
		});
		Object.defineProperty(this, "buffered", {
			get: this.Hs
		})
	}
	q = Ah.prototype;
	q.append = function(a) {
		this.a.webkitSourceAppend(this.b, a)
	};
	q.abort = function() {
		this.a.webkitSourceAbort(this.b)
	};
	q.Hs = function() {
		return this.a.webkitSourceState == this.a.SOURCE_CLOSED ? new Bh : this.a.webkitSourceBuffered(this.b)
	};
	q.Js = function() {
		return this.j
	};
	q.Ms = function(a) {
		this.j = a;
		this.a.webkitSourceTimestampOffset(this.b, a)
	};

	function Bh() {
		this.length = 0
	};

	function Ch(a) {
		this.activeSourceBuffers = this.sourceBuffers = [];
		this.a = a;
		this.b = NaN;
		this.j = 0;
		Object.defineProperty(this, "duration", {
			get: this.Is,
			set: this.Ls
		});
		Object.defineProperty(this, "readyState", {
			get: this.Ks
		});
		pa(this, Dh);
		this.a.addEventListener("webkitsourceopen", x(this.dispatchEvent, this, "webkitsourceopen"), l);
		this.a.addEventListener("webkitsourceclosed", x(this.dispatchEvent, this, "webkitsourceclosed"), l);
		this.a.addEventListener("webkitsourceended", x(this.dispatchEvent, this, "webkitsourceended"), l)
	}
	var Dh = new cc;

	function Eh(a) {
		return a.zu ? a.a.webkitMediaSourceURL : window.URL.createObjectURL(a)
	}

	function Fh(a) {
		return window.MediaSource ? new window.MediaSource : window.WebKitMediaSource ? new window.WebKitMediaSource : HTMLMediaElement.prototype.webkitSourceAddId ? new Ch(a) : m
	}
	q = Ch.prototype;
	q.zu = function() {
		return this.a.webkitMediaSourceURL
	};
	q.addSourceBuffer = function(a) {
		var b = (this.j++).toString();
		this.a.webkitSourceAddId(b, a);
		a = new Ah(this.a, b);
		this.sourceBuffers.push(a);
		return a
	};
	q.removeSourceBuffer = function(a) {
		for(var b in this.sourceBuffers)
			if(a === this.sourceBuffers[b]) {
				this.a.webkitSourceRemoveId(a.b);
				for(a = b + 1; a < this.sourceBuffers.length; a++) this.sourceBuffers[a - 1] = this.sourceBuffers[a];
				this.sourceBuffers.pop();
				break
			}
	};
	q.Ks = function() {
		switch(this.a.webkitSourceState) {
			case this.a.SOURCE_CLOSED:
				return "closed";
			case this.a.SOURCE_OPEN:
				return "open";
			case this.a.SOURCE_ENDED:
				return "ended"
		}
		return ""
	};
	q.endOfStream = function(a) {
		var b = this.a.EOS_NO_ERROR;
		"network" == a ? b = this.a.EOS_NETWORK_ERR : "decode" == a && (b = this.a.EOS_DECODE_ERR);
		this.a.webkitSourceEndOfStream(b)
	};
	q.Is = function() {
		return this.b
	};
	q.Ls = function(a) {
		this.b = a;
		this.a.webkitSourceSetDuration && this.a.webkitSourceSetDuration(a)
	};

	function Gh(a, b) {
		this.F = a;
		this.k = n;
		this.j = m;
		this.b = -1;
		this.i = 0;
		this.D = 0 <= b.j.a.indexOf("audio") ? 9E5 : 1E7;
		Hh(this, b)
	}

	function Hh(a, b) {
		a.a = b.j;
		a.a.Um(x(a.e, a));
		a.A = n;
		a.i = a.i;
		a.b = -1;
		Ih(a);
		a.e()
	}
	Gh.prototype.e = function() {
		if(!this.k && !Jh(this)) {
			if(0 > this.b) {
				if(!this.a.index) return;
				for(var a = this.a.index.a, b = 0; b < a.length; b++)
					if(a[b].start > this.i) {
						b--;
						break
					}
				this.b = b
			}
			if(!this.A) {
				if(!this.a.fe) return;
				Kh(this, this.a.fe);
				this.A = l
			}
			if(this.j) {
				if(this.j.readyState != XMLHttpRequest.DONE) return;
				a = this.j;
				this.j = m;
				200 <= a.status && 299 > a.status && a.response ? (a = new Uint8Array(a.response), Kh(this, new Uint8Array(a)), this.b++) : this.k = l
			}
			if(a = !Jh(this)) !this.a.index || 0 > this.b || this.b >= this.a.index.a.length ? a = n : (a = this.a.index.a[this.b], a = a.start + a.duration - this.i < 8 * this.D / this.a.e);
			a && (a = this.a, b = x(this.e, this), this.j = th(a, a.index.a[this.b].Tf, b))
		}
	};

	function Jh(a) {
		return !a.j && a.a.index != m && a.b >= a.a.index.a.length
	}

	function Ih(a) {
		if(a.j) {
			var b = a.j;
			a.j = m;
			b.abort()
		}
	}

	function Kh(a, b) {
		try {
			a.F.append(b)
		} catch(c) {
			a.k = l, e(c)
		}
	};

	function Lh(a) {
		this.j = m;
		this.b = {};
		this.a = Fh(a);
		this.i = [];
		this.a.addEventListener("sourceopen", x(this.An, this), n);
		this.a.addEventListener("webkitsourceopen", x(this.An, this), n);
		this.a.addEventListener("sourceclose", x(this.zn, this), n);
		this.a.addEventListener("webkitsourceclose", x(this.zn, this), n);
		this.a.addEventListener("sourceended", x(this.Bn, this), n);
		this.a.addEventListener("webkitsourceended", x(this.Bn, this), n)
	}

	function Mh(a) {
		a.j != m && (Jf(a.j), a.j = m)
	}
	q = Lh.prototype;
	q.An = function() {
		for(var a = 0; a < this.i.length; a++) this.i[a](this);
		this.j == m && (this.j = Hf(x(this.Bv, this), 500))
	};
	q.Bn = function() {
		Mh(this)
	};
	q.zn = function() {
		Mh(this);
		for(var a in this.b) Ih(this.b[a]);
		this.b = {}
	};
	q.Bv = function() {
		if("open" == this.a.readyState) {
			var a = n,
				b = n,
				c;
			for(c in this.b) {
				var d = this.b[c];
				d.e();
				b = b || d.k;
				a = a || !Jh(d)
			}
			b ? this.a.endOfStream("network") : a || this.a.endOfStream()
		}
	};
	q.Hn = function(a) {
		var b = a.e,
			c = b.split(";")[0],
			d = this.b[c];
		d ? Hh(d, a) : (d = new Gh(this.a.addSourceBuffer(b), a), this.b[c] = d);
		return d
	};

	function Nh(a, b) {
		"closed" != a.a.readyState ? setTimeout(oa(b, a), 0) : a.i.push(b)
	};

	function Oh() {
		return Ph("(ps3; leanback shell)")
	}

	function Qh(a) {
		var b = mb().match(/CPU OS (\d+)_/);
		return !b || 2 > b.length ? n : a <= b[1]
	}

	function Ph(a) {
		var b = mb();
		return !b ? n : 0 <= b.toLowerCase().indexOf(a)
	};

	function Rh(a, b, c, d, f) {
		this.j = (this.b = d) ? a : m;
		this.e = f ? f : m;
		this.A = this.b ? this.j.url : a;
		this.a = this.b ? this.j.id : b;
		this.i = c;
		this.k = {}
	}

	function Sh(a) {
		return Q(a.b ? a.j.url : a.A, a.k)
	}

	function Th(a) {
		var b;
		b = (new Mc(a.A)).a.get("id");
		b = "http://www.youtube.com/api/manifest/t2b/source/youtube/id/" + encodeURIComponent(b);
		b += "/itag/" + a.a;
		b += "/mfmt/amf";
		return Qc(new Mc(Sh(a)), b).toString()
	};

	function Uh(a, b, c, d, f, g, j) {
		var k = d in Vh && Oh();
		this.Ua = (this.a = !!(a instanceof Array)) ? new Rh(a[1], d, k, this.a, b) : new Rh(a, d, k, this.a);
		this.j = this.a ? new Rh(a[0], d, k, this.a, g) : m;
		this.qh = unescape(b.replace(/&quot;/g, '"'));
		this.Wd = c;
		this.e = !!f;
		a = Wh[c];
		this.b = new F(a[0], a[1]);
		this.i = j || m
	}

	function Xh(a) {
		return 0 == a.qh.indexOf("video/webm") || 0 == a.qh.indexOf("audio/webm")
	}
	var Yh = {
			'video/mp4; codecs="avc1.42001E, mp4a.40.2"': "maybe"
		},
		Zh = {
			"application/x-mpegURL": "maybe"
		},
		$h = {
			"application/x-mpegURL": "maybe"
		};

	function ai() {
		if(Ph("android 2.2")) return l;
		var a = Rg();
		return !(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
	}
	var bi = {
			Nw: "auto",
			ID: "tiny",
			YB: "light",
			SMALL: "small",
			$C: "medium",
			LARGE: "large",
			HB: "hd720",
			GB: "hd1080",
			OB: "highres"
		},
		ci = "auto hd1080 hd720 large medium small tiny".split(" "),
		Wh = {
			auto: [0, 0],
			tiny: [256, 144],
			light: [320, 240],
			small: [320, 240],
			medium: [640, 360],
			large: [854, 480],
			hd720: [1280, 720],
			hd1080: [1920, 1080],
			highres: [2048, 1536]
		},
		Vh = {
			5: l,
			34: l,
			35: l
		},
		di = {
			52: l,
			53: l,
			54: l,
			55: l,
			60: l,
			79: l,
			87: l
		};

	function ei(a) {
		return 0 < a.a.indexOf("/webm") ? a.cg ? 3 : 1 : 0 < a.a.indexOf("/mp4") ? a.cg ? 4 : 2 : m
	}

	function fi(a, b) {
		for(var c = [], d = 0; d < a.length; d++) {
			var f = a[d];
			f.e == b && c.push(f)
		}
		return c
	}

	function gi(a, b, c, d, f) {
		for(var g = {}, j = 0; j < a.a.length; j++) {
			var k = a.a[j];
			if(hi(k, d, f) && !(140 != k.id && 149 != k.id && 171 != k.id && 198 != k.id)) {
				var p = ei(k);
				p && (g[p] = g[p] || [], g[p].push(k))
			}
		}
		k = {};
		for(j = 0; j < a.b.length; j++) {
			var r = a.b[j];
			if(hi(r, d, f) && (p = ei(r))) k[p] = k[p] || [], k[p].push(r)
		}
		a = [3, 4, 1, 2];
		c && (a = [4, 3, 2, 1]);
		c = m;
		for(j = 0; j < a.length; j++)
			if(g[a[j]] && k[a[j]]) {
				c = a[j];
				break
			}
		a = [];
		if(c != m)
			for(j = 0; j < k[c].length; j++) {
				a: {
					d = k[c][j];
					for(f = 1; f < ci.length; f++)
						if(p = ci[f], r = Wh[p], d.height && d.height >= r[1]) {
							d = p;
							break a
						}
					d = "tiny"
				}
				a.push(new Uh([g[c][0],
					k[c][j]
				], sh(k[c][j]), d, k[c][j].id, n, sh(g[c][0]), k[c][j].cg))
			}
		Qa(a, function(a, b) {
			return b.b.height - a.b.height
		});
		b(a)
	}

	function hi(a, b, c) {
		a: {
			try {
				var d = c.addSourceBuffer(sh(a));
				c.removeSourceBuffer(d)
			} catch(f) {
				if(f instanceof DOMException && f.code == DOMException.NOT_SUPPORTED_ERR) {
					c = n;
					break a
				}
			}
			c = l
		}
		a = !a.cg || !!zh(b, sh(a), a.cg);
		return c && a
	};

	function T(a, b) {
		return b == h ? a : "1" == b ? l : n
	}

	function ii(a, b, c) {
		for(var d in c)
			if(c[d] == b) return c[d];
		return a
	}

	function U(a, b) {
		return b == h ? a : b
	}

	function ji(a, b) {
		if(!b) return a;
		var c = b.split("x");
		if(2 != c.length) return a;
		var d = parseInt(c[0], 10),
			c = parseInt(c[1], 10);
		return isNaN(d) || isNaN(c) || 0 >= d * c ? a : new F(d, c)
	}

	function ki(a) {
		if(!a) return 0;
		a = a.split(":");
		var b = parseFloat(a[0]),
			c = 1;
		2 == a.length && (c = parseFloat(a[1]));
		return isNaN(b) || isNaN(c) || 0 == c ? 0 : b / c
	};

	function li(a, b) {
		this.a = a;
		this.b = b
	}
	li.prototype.aa = function() {
		return new li(this.a, this.b)
	};

	function mi(a) {
		this.a = [];
		if(a) a: {
			var b, c;
			if(a instanceof mi) {
				if(b = a.Lc(), c = a.Cb(), 0 >= a.Mc()) {
					a = this.a;
					for(var d = 0; d < b.length; d++) a.push(new li(b[d], c[d]));
					break a
				}
			} else b = Za(a), c = Ya(a);
			for(d = 0; d < b.length; d++) ni(this, b[d], c[d])
		}
	}

	function ni(a, b, c) {
		var d = a.a;
		d.push(new li(b, c));
		b = d.length - 1;
		a = a.a;
		for(c = a[b]; 0 < b;)
			if(d = b - 1 >> 1, a[d].a > c.a) a[b] = a[d], b = d;
			else break;
		a[b] = c
	}
	q = mi.prototype;
	q.Cb = function() {
		for(var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].b);
		return b
	};
	q.Lc = function() {
		for(var a = this.a, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].a);
		return b
	};
	q.aa = function() {
		return new mi(this)
	};
	q.Mc = function() {
		return this.a.length
	};
	q.isEmpty = function() {
		return 0 == this.a.length
	};
	q.clear = function() {
		Ja(this.a)
	};

	function oi() {
		mi.call(this)
	}
	z(oi, mi);

	function pi(a) {
		P.call(this);
		this.a = a;
		this.e = new oi;
		this.k = {}
	}
	z(pi, P);
	pi.prototype.b = n;

	function qi(a, b, c) {
		var d;
		for(c = ig(a.a, c); 0 <= c;) {
			d = b;
			var f = a.a.getLevel(c);
			if(d = f.Nb[Math.floor(d / (f.a * f.j))] ? fg(f, d) : m) return d;
			c--
		}
		return fg(a.a.getLevel(0), b)
	}

	function ri(a) {
		if(!a.b)
			if(a.e.isEmpty()) a.b = n;
			else {
				a.b = l;
				var b;
				var c = a.e,
					d = c.a,
					f = d.length;
				b = d[0];
				if(0 >= f) b = h;
				else {
					if(1 == f) Ja(d);
					else {
						d[0] = d.pop();
						for(var d = 0, c = c.a, f = c.length, g = c[d]; d < f >> 1;) {
							var j = 2 * d + 1,
								k = 2 * d + 2,
								j = k < f && c[k].a < c[j].a ? k : j;
							if(c[j].a > g.a) break;
							c[d] = c[j];
							d = j
						}
						c[d] = g
					}
					b = b.b
				}
				d = new Image;
				d.src = eg(a.a.getLevel(b.Rm), b.Sm);
				d.onload = x(a.A, a, b.Rm, b.Sm)
			}
	}
	pi.prototype.A = function(a, b) {
		this.b = n;
		var c = this.a.getLevel(a);
		c.Nb[b] = l;
		ri(this);
		var d, f = c.a * c.j;
		d = b * f;
		c = Math.min(d + f - 1, c.b - 1);
		d = [d, c];
		this.g("l", d[0], d[1])
	};

	function si(a) {
		P.call(this);
		this.md = [];
		this.Ga = new F(0, 0);
		this.Bf = [];
		this.k = [];
		this.uc = {};
		this.ha = {};
		this.rb = {};
		ti(this, a)
	}
	z(si, P);
	var ui = {
			cC: 1,
			dC: 2,
			eC: 3
		},
		vi = /\/img\/watermark\/youtube_(hd_)?watermark(-vfl\S{6})?.png$/,
		wi = "author cc_asr cc_load_policy iv_allow_external_links iv_disallow_trusted_links iv_new_window iv_load_policy keywords subscribed rvs title ttsurl ypc_buy_url ypc_offer_id ypc_price_string ypc_preview ypc_video_rental_bar_text".split(" ");
	q = si.prototype;
	q.Gn = n;
	q.Dn = l;
	q.Ta = n;
	q.Rk = "";
	q.Fk = n;
	q.Gk = n;
	q.Hk = l;
	q.Pi = n;
	q.Ri = 1;
	q.vm = n;
	q.Il = 0;
	q.ld = 0;
	q.Go = n;
	q.lk = n;
	q.dm = 3;
	q.Kh = "";
	q.rf = n;
	q.Ll = n;
	q.tf = 0;
	q.Td = n;
	q.dj = n;
	q.Gg = 0;
	q.Hg = n;
	q.Sn = n;
	q.Ml = l;
	q.Vi = n;
	q.ac = n;
	q.$b = n;
	q.Nf = 0;
	q.ya = 0;
	q.Qi = 0;
	q.Ol = n;
	q.Jl = n;
	q.Yi = n;
	q.Zl = 0;
	q.Ui = n;
	q.bm = n;
	q.xa = 0;
	q.Oi = m;
	q.yj = n;
	q.ef = n;
	q.Fj = 1;
	q.ae = 0;
	q.Fl = m;
	q.Nl = n;
	q.Xg = NaN;
	q.sj = NaN;

	function xi(a, b) {
		var c = b || {};
		a.Rk = jh(c.iv_read_url);
		a.Fk = T(a.Fk, c.iv_allow_external_links);
		a.Gk = T(a.Gk, c.iv_disallow_external_links);
		a.Hk = T(a.Hk, c.iv_new_window);
		a.author = U(a.author, c.author);
		a.lk = T(a.lk, c.cc_asr);
		var d = U(a.Kh, c.ttsurl);
		d && (d = jh(d));
		a.Kh = d;
		a.a = U(a.a, c.subscribed);
		a.title = U(a.title, c.title);
		a.li = U(a.li, c.ypc_buy_url);
		a.Tk = U(a.Tk, c.ypc_offer_id);
		a.yc = U(a.yc, c.ypc_video_rental_bar_text);
		a.Ca = U(a.Ca, c.ypc_preview);
		a.Ac = U(a.Ac, c.ypc_price_string);
		if(c.keywords) {
			var f = {};
			B(c.keywords.split(","), function(a) {
				var b = a.split("=");
				2 == b.length ? f[b[0]] = b[1] : f[a] = l
			});
			a.ha = f
		}
		c.rvs && (a.$n = yi(c.rvs));
		wi.forEach(function(a) {
			a in c && (this.uc[a] = c[a])
		}, a)
	}

	function ti(a, b) {
		var c = b || {};
		a.Ta = "1" != c.hlsdvr || cg || $f && !Qh(5) ? n : l;
		a.Pi = "1" == c.infringe || "1" == c.muted;
		a.gm = c.authkey;
		a.hm = c.authuser;
		a.vc = c.csi_page_type;
		a.Tc = c.sw;
		a.Ma = c.t;
		a.rf = "1" == c.enable_cardio;
		a.Ll = "1" == c.enable_cardio_before_playback;
		a.tf = (c.end || c.endSeconds) == h ? a.tf : Number(c.end || c.endSeconds);
		a.Ml = "1" != c.no_get_video_log;
		a.Vi = "1" == c.tmi;
		a.ac = "1" == c.live_playback;
		a.En = c.iurlmaxres;
		a.wa = c.oauth_token;
		a.Qd = c.osig;
		a.F = c.ptchn;
		a.Qa = c.oid;
		a.b = c.ptk;
		a.Ya = c.pltype;
		a.Na = c.plid;
		a.e = c.hbid;
		a.nb = U(a.nb, c.list);
		a.Yb = c.pyv_beacon_url;
		a.Md = c.purchase_id;
		a.R = c.sdetail;
		a.Od = c.sourceid;
		a.zc = U(a.zc, c.feature);
		a.Vc = U(a.Vc, c.ytr);
		a.Fn = c.iurlsd;
		a.Nl = "1" == c.skip_kansas_logging;
		a.I = a.I || c.vq;
		a.sf = c.approx_threed_layout || 0;
		a.yj = "1" == c.threed_converted;
		a.Rh = c.iurl;
		a.Yi = "1" == c.sendtmp;
		a.Ui = !!a.Tc || a.Yi;
		a.xa = (c.start || c.startSeconds) == h ? a.xa : Number(c.start || c.startSeconds);
		a.J = c.docid || c.video_id;
		var d = c.watermark;
		d && (d = d.split(","), 2 <= d.length && (a.Da = d[1], a.tc = d[0]));
		if(c.ad3_module || c.ad_module) "1" == c.allow_html5_ads ? (a.Gn = l, "1" == c.ad_preroll && a.k.push("ad"), c.cev && (a.Ol = l)) : "1" != c.supported_without_ads && (a.dj = l);
		c.allow_embed && (a.Dn = "1" == c.allow_embed);
		c.autoplay && (a.Hg = "1" == c.autoplay);
		c.iv_load_policy && (a.wc = zi(c.iv_load_policy, a.wc));
		c.cc_load_policy && (a.dm = zi(c.cc_load_policy, 2));
		c.delay && (a.D = Ba(c.delay));
		c.idpj && (a.Gg = Ba(c.idpj));
		c.url_encoded_fmt_stream_map && (a.Bf = yi(c.url_encoded_fmt_stream_map));
		c.hlsvp && a.Bf.push({
			url: c.hlsvp,
			type: "application/x-mpegURL",
			quality: "auto",
			itag: "93"
		});
		c.dashmpd && (a.da = c.dashmpd);
		c.length_seconds && (a.ya = Ba(c.length_seconds));
		c.ldpj && (a.Qi = Ba(c.ldpj));
		c.loudness && (a.Ba = c.loudness, a.Ri = -15 < a.Ba && 0 > a.Ba ? Math.pow(10, (-18 - a.Ba) / 20) : 1);
		c.partnerid && (a.Pd = Ba(c.partnerid));
		c.pyv_billable_url && gh(c.pyv_billable_url, fh) && (a.A = c.pyv_billable_url);
		c.pyv_conv_url && gh(c.pyv_conv_url, fh) && (a.xc = c.pyv_conv_url);
		c.threed_module && !c.threed_converted && (a.uf = c.threed_module, a.Sc = 6);
		if("1" == c.track_embed || c.tk) a.Jl = l;
		c.watch_ajax_token && Ff("watch_actions_ajax", c.watch_ajax_token);
		c.fresca_preroll && a.k.push("fresca");
		c.start != h && (a.Xg = c.start);
		c.end != h && (a.sj = c.end);
		["baseUrl", "uid", "oeid", "ieid", "ppe"].forEach(function(a) {
			this.rb[a] = c[a]
		}, a);
		a.rb.focEnabled = "1" == c.focEnabled;
		a.rb.rmktEnabled = "1" == c.rmktEnabled;
		var d = Ba(c.length_seconds),
			f = Ba(c.rmktPingThreshold),
			d = isNaN(f) || isNaN(d) ? 0 : Math.min(f, d);
		a.Il = d;
		a.uc = c;
		xi(a, c);
		if(a.da && (window.MediaSource || window.WebKitMediaSource || HTMLMediaElement.prototype.webkitSourceAddId)) d = {
			format: "RAW",
			method: "GET",
			Ra: a,
			na: a.Es,
			onError: a.Zj
		}, a.Td = l, Pf(0 == window.location.protocol.indexOf("https") ? "https" + a.da.substr(4) : a.da, d)
	}
	q.Es = function(a) {
		this.j || (this.Z = new lh(a.responseText), this.ya = this.Z.duration || this.ya, this.Zj())
	};
	q.Zj = function() {
		this.j || (this.Td = n, this.g("videoinfo", this.uc))
	};

	function Ai(a, b, c) {
		if(a.Z) {
			c = !!c;
			var d = a.Z;
			a = x(function(a) {
				this.md = a;
				b()
			}, a);
			if(d) {
				var f = x(gi, m, d, a, !!c),
					g = document.createElement("video"),
					j = Fh(g);
				a = function() {
					f(g, j)
				};
				j.addEventListener("sourceopen", a, n);
				j.addEventListener("webkitsourceopen", a, n);
				g.src = Eh(j)
			} else a([])
		} else {
			var d = !!c,
				k = !!a.uf || a.ef;
			c = a.Bf;
			for(var p = [], r = 0; r < c.length; r++) {
				var u = c[r];
				u.sig && (u.url = uf(u.url, {
					signature: u.sig
				}));
				u.url && p.push(new Uh(u.url, u.type, u.quality, u.itag, u.stereo3d))
			}
			c = p;
			k = !!k;
			d = !!d;
			if(ai()) {
				p = fi(c, k);
				c = !p.length && k ? fi(c, n) : p;
				for(var w = {}, k = Rg(), d = d || (ag || bg && Ph("eureka") ? l : n), p = 0; p < c.length; p++) {
					var A = c[p];
					if(!(r = k.canPlayType(A.qh))) r = h, u = A.qh, $f ? r = $h[u] : Ph("android 2.2") ? r = Yh[u] : ag && Ph("chrome") && (r = Zh[u]), r = r || "";
					if(r && !(A.Ua.a in di || Oh() && "5" == A.Ua.a))
						if(r = A.Wd, !w[r] || Xh(A) && !d || !Xh(A) && d) w[r] = A
				}
				var E = [];
				ci.forEach(function(a) {
					(A = w[a]) && E.push(A)
				});
				c = E
			} else c = [];
			a.md = c;
			R(b, 0)
		}
	}

	function Bi(a, b) {
		var c = m;
		a.md.some(function(a) {
			if(a.Wd == b) return c = a, l
		});
		return c
	}

	function Ci(a) {
		if(!a.format) return m;
		var b = a.format.Ua;
		Di(a, b);
		return b
	}

	function Di(a, b) {
		var c = {};
		a.b && a.F && (c.ptk = a.b, c.oid = a.Qa, c.ptchn = a.F, c.pltype = a.Ya, pa(b.k, c))
	}

	function Ei(a, b) {
		return !v(a.ha[b]) ? m : a.ha[b]
	}

	function Fi(a) {
		!a.Fl && a.uc.storyboard_spec && (a.Fl = new gg(a.uc.storyboard_spec));
		return a.Fl
	}

	function Gi(a) {
		var b = Fi(a);
		!a.Oi && b && (a.Oi = new pi(b), Ta(a, a.Oi));
		return a.Oi
	}

	function Hi(a, b) {
		var c = {
			format: "RAW",
			method: "GET",
			Ra: a,
			na: a.fw
		};
		a.Td = l;
		Pf(b, c)
	}
	q.fw = function(a) {
		this.j || (this.Td = n, a = qf(a.responseText), "fail" == a.status ? this.g("onStatusFail", a) : (ti(this, a), this.Td || this.Zj()))
	};

	function zi(a, b) {
		var c = parseInt(a, 10),
			d;
		a: {
			for(d in ui)
				if(ui[d] == c) {
					d = l;
					break a
				}
			d = n
		}
		return d ? c : b
	}

	function yi(a) {
		a = a.split(",");
		return a = a.map(function(a) {
			return qf(a)
		})
	}

	function Ii(a, b) {
		return !!a.uc[b]
	}
	q.toggleThreeD = function() {
		this.ef = !this.ef;
		this.md = []
	};

	function Ji(a, b) {
		this.type = a || "";
		this.id = b || ""
	}
	Ji.prototype.toString = function() {
		return this.type + this.id
	};

	function Ki(a) {
		P.call(this);
		this.Fa = [];
		this.a = [];
		this.ka = Math.max(0, a.index || 0);
		this.loop = !!a.loop;
		this.xa = a.startSeconds || 0;
		this.Kn = "1" == a.mob;
		this.title = a.playlistTitle || "";
		a.video_id && (this.Fa[this.ka] = new si(a));
		a.api && ("string" == typeof a.api && 16 == a.api.length ? a.list = "PL" + a.api : a.playlist = a.api);
		if(a.list) switch(a.listType) {
			case "user_uploads":
				var b = a.list;
				this.Ob || (this.b = new Ji("UU", "PLAYER_" + b), Li(this, "/list_ajax?style=json&action_get_user_uploads_by_user=1", {
					username: b
				}));
				break;
			case "user_favorites":
				b = a.list;
				this.Ob || (this.b = new Ji("FL", "PLAYER_" + b), Li(this, "/list_ajax?style=json&action_get_favorited_by_user=1", {
					username: b
				}));
				break;
			case "search":
				b = a.list;
				this.Ob || (this.b = new Ji("SR", b), b = {
					search_query: b
				}, this.Kn && (b.mob = "1"), Li(this, "/search_ajax?style=json&embeddable=1", b));
				break;
			default:
				this.b = new Ji(a.list.substr(0, 2), a.list.substr(2)), this.Ob || Li(this, "/list_ajax?style=json&action_get_list=1", {
					list: this.b
				})
		} else a.playlist ? (b = a.playlist.toString().split(","), 0 < this.ka && (this.Fa = []), B(b, function(a) {
			a && this.Fa.push(new si({
				video_id: a
			}))
		}, this), this.Rb = this.Fa.length, this.Nb = l) : a.videoList && (0 < this.ka && (this.Fa = []), B(a.videoList, function(a) {
			this.Fa.push(new si(a))
		}, this), this.Rb = this.Fa.length, this.Nb = l);
		this.setShuffle(!!a.shuffle)
	}
	z(Ki, P);
	q = Ki.prototype;
	q.loop = n;
	q.xa = 0;
	q.bo = n;
	q.ka = 0;
	q.title = "";
	q.Rb = 0;
	q.Kn = n;
	q.Nb = n;
	q.Ob = n;
	q.zg = m;
	q.re = function() {
		if(++this.ka >= this.Fa.length)
			if(this.loop) this.ka = 0;
			else return m;
		Mi(this, this.ka);
		return Ni(this, this.ka)
	};

	function Oi(a) {
		if(0 > --a.ka)
			if(a.loop) a.ka = a.Fa.length - 1;
			else return m;
		Mi(a, a.ka);
		return Ni(a, a.ka)
	}

	function Ni(a, b) {
		var c = b != h ? b : a.ka;
		if(c = c in a.Fa ? a.Fa[a.a[c]] : m) c.xa = a.xa || c.Xg;
		return c
	}
	q.setShuffle = function(a) {
		this.bo = a;
		a = this.a.length ? this.a[this.ka] : this.ka;
		this.a = [];
		for(var b = 0; b < this.Fa.length; b++) this.a.push(b);
		this.ka = a;
		if(this.bo) {
			a = this.a[this.ka];
			for(b = 1; b < this.a.length; b++) {
				var c = Math.floor(Math.random() * (b + 1)),
					d = this.a[b];
				this.a[b] = this.a[c];
				this.a[c] = d
			}
			for(b = 0; b < this.a.length; b++) this.a[b] == a && (this.ka = b)
		}
		this.g("shuffle")
	};

	function Mi(a, b) {
		a.ka = sc(b, 0, a.Fa.length - 1);
		a.xa = 0
	}

	function Li(a, b, c) {
		Pf(Q(b, c), {
			format: "JSON",
			na: function(a, b) {
				b.video && b.video.length && (this.title = b.title, this.Fa = [], B(b.video, function(a) {
					a && (a.video_id = a.encrypted_id, this.Fa.push(new si(a)))
				}, this), this.Rb = this.Fa.length, this.setShuffle(n), this.Ob = n, this.Nb = l, this.zg && this.zg())
			},
			Ra: a
		})
	}
	q.G = function() {
		this.zg = m;
		Ua(this.Fa);
		Ki.C.G.call(this)
	};

	function Pi() {
		P.call(this)
	}
	z(Pi, P);
	q = Pi.prototype;
	q.Bl = n;
	q.addCueRange = function(a) {
		Ma(arguments).forEach(function(a) {
			this.ua[a.uid] = a;
			if(2147483646 == a.start || 2147483647 == a.start) {
				var c = this.Hj,
					d;
				d = function(a, b) {
					return a.start == b.start ? b.Ub() - a.Ub() : b.start - a.start
				} || Ra;
				for(var f = 0, g = c.length, j; f < g;) {
					var k = f + g >> 1,
						p;
					p = d(a, c[k]);
					0 < p ? f = k + 1 : (g = k, j = !p)
				}
				d = j ? f : ~f;
				0 > d && Oa(c, -(d + 1), 0, a)
			} else c = new TextTrackCue(a.start / 1E3, a.end / 1E3, ""), c.id = a.uid, N(c, "enter", x(function() {
				Qi(this, a.uid)
			}, this)), N(c, "exit", x(function() {
				Ri(this, a.uid)
			}, this)), this.eh[a.Ub()].addCue(c);
			this.g("onAdd", a)
		}, this)
	};
	q.We = function(a) {
		Ma(arguments).forEach(function(a) {
			var c = this.eh[a.Ub()],
				d = c.cues.getCueById(a.uid);
			c.removeCue(d);
			this.ua[a.uid] = m;
			Ka(this.Hj, a)
		}, this)
	};
	q.So = function() {
		return n
	};
	q.To = function() {
		this.Bl = l
	};
	q.reset = function() {
		this.Bl = n;
		this.We.apply(this, this.ua)
	};
	q.tp = function(a) {
		for(var b in this.ua) this.ua[b].xi == a && this.We(this.ua[b])
	};
	q.Am = function(a) {
		this.Bl && 0 < Si(a, 2) && (this.eh.forEach(function(a) {
			a.activeCues && B(a.activeCues, function(a) {
				Ri(this, a.id)
			}, this)
		}, this), this.Hj.forEach(function(a) {
			Qi(this, a.uid)
		}, this))
	};

	function Qi(a, b) {
		var c = a.ua[b];
		c.pubsub.g.call(c.pubsub, "onEnter", c)
	}

	function Ri(a, b) {
		var c = a.ua[b];
		c.pubsub.g.call(c.pubsub, "onExit", c)
	};
	/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	function Ti(a, b) {
		this.j = [];
		this.e = a;
		this.k = b || m
	}
	q = Ti.prototype;
	q.ke = n;
	q.eg = n;
	q.fg = 0;
	q.mk = n;
	q.Ur = n;
	q.Vj = 0;
	q.cancel = function(a) {
		if(this.ke) this.b instanceof Ti && this.b.cancel();
		else {
			if(this.a) {
				var b = this.a;
				delete this.a;
				a ? b.cancel(a) : (b.Vj--, 0 >= b.Vj && b.cancel())
			}
			this.e ? this.e.call(this.k, this) : this.mk = l;
			this.ke || this.Xe(new Ui)
		}
	};
	q.jn = function(a, b) {
		Vi(this, a, b);
		this.fg--;
		0 == this.fg && this.ke && Wi(this)
	};

	function Vi(a, b, c) {
		a.ke = l;
		a.b = c;
		a.eg = !b;
		Wi(a)
	}

	function Xi(a) {
		a.ke && (a.mk || e(new Yi), a.mk = n)
	}
	q.bh = function(a) {
		Xi(this);
		Vi(this, l, a)
	};
	q.Xe = function(a) {
		Xi(this);
		Vi(this, n, a)
	};

	function Zi(a, b, c, d) {
		a.j.push([b, c, d]);
		a.ke && Wi(a);
		return a
	}

	function $i(a) {
		var b = new Ti;
		Zi(a, b.bh, b.Xe, b);
		return b
	}

	function aj(a) {
		return Ga(a.j, function(a) {
			return ha(a[1])
		})
	}

	function Wi(a) {
		a.i && (a.ke && aj(a)) && (s.clearTimeout(a.i), delete a.i);
		a.a && (a.a.Vj--, delete a.a);
		for(var b = a.b, c = n, d = n; a.j.length && 0 == a.fg;) {
			var f = a.j.shift(),
				g = f[0],
				j = f[1],
				f = f[2];
			if(g = a.eg ? j : g) try {
				var k = g.call(f || a.k, b);
				da(k) && (a.eg = a.eg && (k == b || k instanceof Error), a.b = b = k);
				b instanceof Ti && (d = l, a.fg++)
			} catch(p) {
				b = p, a.eg = l, aj(a) || (c = l)
			}
		}
		a.b = b;
		d && a.fg && (Zi(b, x(a.jn, a, l), x(a.jn, a, n)), b.Ur = l);
		c && (a.i = s.setTimeout(function() {
			e(b)
		}, 0))
	}

	function Yi() {
		ra.call(this)
	}
	z(Yi, ra);
	Yi.prototype.message = "Deferred has already fired";
	Yi.prototype.name = "AlreadyCalledError";

	function Ui() {
		ra.call(this)
	}
	z(Ui, ra);
	Ui.prototype.message = "Deferred was cancelled";
	Ui.prototype.name = "CancelledError";

	function bj(a) {
		this.a = {};
		for(var b = 0; b < a.length; b++) {
			var c = a[b];
			this.a[c.a] = c
		}
	}

	function cj(a) {
		a = Ya(a.a);
		Qa(a, function(a, c) {
			return a.a - c.a
		});
		return a
	};

	function dj(a, b, c) {
		this.b = a;
		this.a = b;
		this.i = !!c.Cd;
		this.j = c.Q
	};

	function ej() {
		this.Wb = {};
		this.a = this.La().a;
		this.nc = m
	}
	q = ej.prototype;
	q.La = function() {
		var a = this.constructor,
			b;
		if(!(b = a.rp)) {
			var c;
			b = a.mw;
			var d = [];
			for(c in b) b.hasOwnProperty(c) && (0 == c || d.push(new dj(a, c, b[c])));
			c = new bj(d);
			b = a.rp = c
		}
		return b
	};
	q.has = function(a) {
		a.b.La();
		this.La();
		a = a.a;
		return a in this.Wb && da(this.Wb[a]) && this.Wb[a] !== m
	};
	q.get = function(a, b) {
		a.b.La();
		this.La();
		var c;
		c = this.a[a.a];
		var d = fj(this, c);
		c.i ? (fa(d), c = d[b || 0]) : (fa(d), c = d);
		return c
	};
	q.set = function(a, b) {
		a.b.La();
		this.La();
		var c = a.a;
		this.Wb[c] = b;
		this.nc && (this.nc[c] = b)
	};
	q.clear = function(a) {
		a.b.La();
		this.La();
		a = a.a;
		delete this.Wb[a];
		this.nc && delete this.nc[a]
	};
	q.equals = function(a) {
		if(!a || this.constructor != a.constructor) return n;
		for(var b = cj(this.La()), c = 0; c < b.length; c++) {
			var d = b[c];
			if(this.has(d) != a.has(d)) return n;
			if(this.has(d)) {
				var f = 11 == d.j || 10 == d.j,
					g = fj(this, d),
					j = fj(a, d);
				if(d.i) {
					if(g.length != j.length) return n;
					for(d = 0; d < g.length; d++)
						if(!(f ? g[d].equals(j[d]) : g[d] == j[d])) return n
				} else if(!(f ? g.equals(j) : g == j)) return n
			}
		}
		return l
	};

	function gj(a, b) {
		for(var c = cj(a.La()), d = 0; d < c.length; d++) {
			var f = c[d];
			if(b.has(f)) {
				a.nc && delete a.nc[f.a];
				var g = 11 == f.j || 10 == f.j;
				if(f.i) {
					var j, k = b;
					j = f;
					j.b.La();
					k.La();
					j = fj(k, k.a[j.a]);
					j == m || fa(j);
					j = j || [];
					for(k = 0; k < j.length; k++) {
						var p = a,
							r = f,
							u = g ? j[k].aa() : j[k];
						r.b.La();
						p.La();
						r = r.a;
						p.Wb[r] || (p.Wb[r] = []);
						p.Wb[r].push(u);
						p.nc && delete p.nc[r]
					}
				} else j = fj(b, f), g ? (g = fj(a, f)) ? gj(g, j) : a.set(f, j.aa()) : a.set(f, j)
			}
		}
	}
	q.aa = function() {
		var a = new this.constructor;
		a != this && (a.Wb = {}, a.nc && (a.nc = {}), gj(a, this));
		return a
	};

	function fj(a, b) {
		var c = b.a;
		if(!c in a.Wb) return m;
		c = a.Wb[c];
		return c == m ? m : c
	}

	function hj(a, b) {
		a.mw = b;
		a.La = function() {
			return a.rp || (new a).La()
		}
	};

	function ij() {
		ej.apply(this)
	}
	z(ij, ej);

	function jj() {
		ej.apply(this)
	}
	z(jj, ej);

	function kj() {
		ej.apply(this)
	}
	z(kj, ej);
	hj(ij, {
		"0": {
			name: "FieldDetails",
			Ld: "logs_proto.FieldDetails"
		},
		1: {
			name: "id_type",
			Cd: l,
			Q: 14,
			defaultValue: 0,
			type: {
				AC: 0,
				xC: 1,
				yC: 2,
				VC: 3,
				QC: 4,
				PC: 5,
				gC: 15,
				jC: 6,
				DC: 9,
				IC: 7,
				NC: 8,
				RC: 16,
				GC: 10,
				LC: 11,
				XC: 12,
				hC: 13,
				lC: 14,
				FC: 20,
				qC: 21,
				oC: 22,
				UC: 23,
				KC: 24,
				rC: 207,
				BC: 30,
				HC: 31,
				JC: 32,
				MC: 35,
				mC: 33,
				pC: 34,
				EC: 50,
				uC: 51,
				vC: 52,
				zC: 53,
				iC: 54,
				SC: 55,
				fC: 56,
				OC: 57,
				CC: 100,
				WC: 200,
				nC: 201,
				sC: 202,
				tC: 203,
				kC: 204,
				TC: 205,
				wC: 206
			}
		}
	});
	hj(jj, {
		"0": {
			name: "MessageDetails",
			Ld: "logs_proto.MessageDetails"
		},
		1: {
			name: "may_appear_in",
			Cd: l,
			Q: 11,
			type: kj
		}
	});
	hj(kj, {
		"0": {
			name: "Type",
			eE: jj,
			Ld: "logs_proto.MessageDetails.Type"
		},
		1: {
			name: "source_type",
			required: l,
			Q: 9,
			type: String
		},
		2: {
			name: "log_type",
			required: l,
			Q: 9,
			type: String
		}
	});
	var lj = {
		xx: 0,
		bz: 1,
		mz: 2,
		wx: 3,
		Hx: 4,
		$y: 5,
		kz: 6,
		hz: 7,
		iz: 8,
		jz: 9,
		fz: 10,
		gz: 11,
		Jx: 12,
		Ix: 13,
		vx: 14,
		px: 15,
		az: 20,
		oz: 21,
		ox: 22,
		cz: 23,
		nz: 24,
		lz: 25,
		Cx: 30,
		Ex: 31,
		Bx: 32,
		Fx: 33,
		ez: 40,
		dz: 41,
		Kx: 42,
		Lx: 43,
		qx: 50,
		tx: 51,
		yx: 52,
		zx: 53,
		Ax: 54,
		lx: 55,
		mx: 56,
		Gx: 57,
		ux: 58,
		sx: 60,
		rx: 61,
		nx: 70,
		kx: 80,
		Mx: 90
	};

	function mj() {
		ej.apply(this)
	}
	z(mj, ej);

	function nj() {
		ej.apply(this)
	}
	z(nj, ej);

	function oj() {
		ej.apply(this)
	}
	z(oj, ej);

	function pj() {
		ej.apply(this)
	}
	z(pj, ej);

	function qj() {
		ej.apply(this)
	}
	z(qj, ej);

	function rj() {
		ej.apply(this)
	}
	z(rj, ej);
	hj(mj, {
		"0": {
			name: "YtAdType",
			Ld: "video.YtAdType"
		},
		1: {
			name: "ad_namespace",
			required: l,
			Q: 14,
			defaultValue: 0,
			type: {
				py: 0,
				tz: 1,
				qy: 2,
				Ny: 3,
				FB: 4,
				CD: 5,
				rD: 6,
				Jy: 7,
				vz: 8,
				Ky: 9,
				Ly: 10,
				qD: 11,
				uy: 12,
				aE: 13
			}
		},
		2: {
			name: "ad_format",
			required: l,
			Q: 14,
			defaultValue: 0,
			type: {
				jy: 0,
				VB: 1,
				UB: 2,
				dD: 3,
				MD: 4,
				WB: 5,
				RB: 6,
				TB: 7,
				cE: 8
			}
		},
		3: {
			name: "ad_invideo",
			Q: 14,
			defaultValue: 0,
			type: {
				ly: 0,
				Ry: 1,
				Sy: 2,
				Ty: 3,
				Vy: 4,
				Qy: 5,
				My: 6
			}
		},
		4: {
			name: "invideo_autoplay",
			Q: 14,
			defaultValue: 0,
			type: {
				Cy: 0,
				pD: 1
			}
		},
		5: {
			name: "ad_instream",
			Q: 14,
			defaultValue: 0,
			type: {
				ky: 0,
				KD: 1
			}
		},
		6: {
			name: "ad_instream_long",
			Q: 8,
			type: Boolean
		}
	});
	hj(nj, {
		"0": {
			name: "AdId",
			Ld: "video.AdId"
		},
		1: {
			name: "ad_network",
			Q: 14,
			defaultValue: 1,
			type: {
				jD: 1,
				jx: 2
			}
		},
		2: {
			name: "ad_network_name",
			Q: 9,
			type: String
		},
		3: {
			name: "ad_id",
			required: l,
			Q: 9,
			type: String
		}
	});
	hj(oj, {
		"0": {
			name: "YtAdEvent",
			Ld: "video.YtAdEvent"
		},
		1: {
			name: "ad_event_type",
			required: l,
			Q: 14,
			defaultValue: 0,
			type: {
				Vx: 0,
				by: 1,
				Wx: 2,
				fy: 3,
				Xx: 4,
				Yx: 5,
				Sx: 6,
				Qx: 7,
				pz: 8,
				Nx: 9,
				cy: 10,
				ey: 11,
				Ox: 12,
				qz: 13,
				gy: 14,
				Tx: 15,
				Px: 16,
				Ux: 17,
				Rx: 18,
				hy: 100,
				iy: 101,
				$x: 130,
				Zx: 131,
				ay: 132
			}
		},
		2: {
			name: "wall_time",
			required: l,
			Q: 2,
			type: Number
		},
		3: {
			name: "media_time",
			required: l,
			Q: 2,
			type: Number
		},
		4: {
			name: "logentry_time_usec",
			required: l,
			Q: 3,
			type: String
		},
		5: {
			name: "ad_error_type",
			Q: 14,
			defaultValue: 0,
			type: lj
		}
	});
	hj(pj, {
		"0": {
			name: "YtAdSlot",
			Ld: "video.YtAdSlot"
		},
		1: {
			name: "slot_time",
			required: l,
			Q: 2,
			type: Number
		},
		2: {
			name: "ad_type",
			required: l,
			Q: 11,
			type: mj
		},
		3: {
			name: "ad_events",
			Cd: l,
			Q: 11,
			type: oj
		},
		4: {
			name: "ad_video_duration",
			Q: 2,
			type: Number
		},
		5: {
			name: "ad_id",
			Q: 9,
			type: String
		},
		6: {
			name: "slot_index",
			Q: 5,
			type: Number
		}
	});
	hj(qj, {
		"0": {
			name: "YtVideoMetadata",
			Ld: "video.YtVideoMetadata"
		},
		1: {
			name: "content_owner_ids",
			Cd: l,
			Q: 9,
			type: String
		},
		2: {
			name: "video_duration_seconds",
			Q: 2,
			type: Number
		},
		3: {
			name: "all_content_owner_ids",
			Q: 9,
			type: String
		}
	});
	hj(rj, {
		"0": {
			name: "YtWatchAdInfo",
			Ld: "video.YtWatchAdInfo"
		},
		1: {
			name: "video_id",
			required: l,
			Q: 9,
			type: String
		},
		2: {
			name: "allowed_ads",
			Cd: l,
			Q: 11,
			type: mj
		},
		3: {
			name: "ad_slots",
			Cd: l,
			Q: 11,
			type: pj
		},
		4: {
			name: "ps",
			Q: 9,
			type: String
		},
		5: {
			name: "el",
			Q: 9,
			type: String
		},
		6: {
			name: "country",
			Q: 9,
			type: String
		},
		7: {
			name: "feature",
			Q: 9,
			type: String
		},
		8: {
			name: "blocked",
			Q: 8,
			type: Boolean
		},
		9: {
			name: "plid",
			Q: 9,
			type: String
		},
		10: {
			name: "video_metadata",
			Q: 11,
			type: qj
		},
		11: {
			name: "experiment_id",
			Cd: l,
			Q: 3,
			type: String
		},
		12: {
			name: "ad_flags",
			Q: 4,
			type: String
		},
		13: {
			name: "all_experiment_ids",
			Q: 9,
			type: String
		},
		14: {
			name: "no_ads_returned",
			Q: 8,
			type: Boolean
		},
		15: {
			name: "ad_errors",
			Cd: l,
			Q: 14,
			defaultValue: 0,
			type: lj
		},
		16: {
			name: "ad_slot_with_event",
			Q: 11,
			type: pj
		}
	});

	function sj() {};

	function tj() {}
	z(tj, sj);
	tj.prototype.Mc = function() {
		var a = 0;
		mc(this.Gd(l), function() {
			a++
		});
		return a
	};
	tj.prototype.clear = function() {
		var a;
		a = this.Gd(l);
		if(ga(a)) a = Ma(a);
		else {
			a = lc(a);
			var b = [];
			mc(a, function(a) {
				b.push(a)
			});
			a = b
		}
		var c = this;
		B(a, function(a) {
			c.Fg(a)
		})
	};

	function uj(a) {
		this.a = a
	}
	z(uj, tj);

	function vj(a) {
		if(!a.a) return n;
		try {
			return a.a.setItem("__sak", "1"), a.a.removeItem("__sak"), l
		} catch(b) {
			return n
		}
	}
	q = uj.prototype;
	q.set = function(a, b) {
		try {
			this.a.setItem(a, b)
		} catch(c) {
			0 == this.a.length && e("Storage mechanism: Storage disabled"), e("Storage mechanism: Quota exceeded")
		}
	};
	q.get = function(a) {
		a = this.a.getItem(a);
		!v(a) && a !== m && e("Storage mechanism: Invalid value was encountered");
		return a
	};
	q.Fg = function(a) {
		this.a.removeItem(a)
	};
	q.Mc = function() {
		return this.a.length
	};
	q.Gd = function(a) {
		var b = 0,
			c = this.a,
			d = new kc;
		d.a = function() {
			b >= c.length && e(jc);
			var d;
			d = c.key(b++);
			if(a) return d;
			d = c.getItem(d);
			v(d) || e("Storage mechanism: Invalid value was encountered");
			return d
		};
		return d
	};
	q.clear = function() {
		this.a.clear()
	};

	function wj() {
		var a = m;
		try {
			a = window.localStorage || m
		} catch(b) {}
		this.a = a
	}
	z(wj, uj);

	function xj() {
		var a = m;
		try {
			a = window.sessionStorage || m
		} catch(b) {}
		this.a = a
	}
	z(xj, uj);

	function yj(a, b) {
		this.lf = a;
		this.te = b + "::"
	}
	z(yj, tj);
	q = yj.prototype;
	q.lf = m;
	q.te = "";
	q.set = function(a, b) {
		this.lf.set(this.te + a, b)
	};
	q.get = function(a) {
		return this.lf.get(this.te + a)
	};
	q.Fg = function(a) {
		this.lf.Fg(this.te + a)
	};
	q.Gd = function(a) {
		var b = this.lf.Gd(l),
			c = this,
			d = new kc;
		d.a = function() {
			for(var d = b.a(); d.substr(0, c.te.length) != c.te;) d = b.a();
			return a ? d.substr(c.te.length) : c.lf.get(d)
		};
		return d
	};

	function zj(a) {
		this.Ae = a;
		this.vp = new hf
	}
	q = zj.prototype;
	q.Ae = m;
	q.vp = m;
	q.set = function(a, b) {
		da(b) ? this.Ae.set(a, jf(this.vp, b)) : this.Ae.Fg(a)
	};
	q.get = function(a) {
		a = this.Ae.get(a);
		if(a !== m) try {
			return ff(a)
		} catch(b) {
			e("Storage: Invalid value was encountered")
		}
	};
	q.Ff = function(a) {
		this.Ae.Fg(a)
	};

	function Aj(a) {
		P.call(this);
		this.a = a;
		if(this.Uk) {
			a = "yt-html5-player-modules::" + this.Uk;
			var b = new wj;
			if(a = vj(b) ? a ? new yj(b, a) : b : m) this.k = new zj(a)
		}
	}
	z(Aj, P);
	q = Aj.prototype;
	q.ja = "";
	q.Ed = "";
	q.pa = n;
	q.addCueRange = function(a) {
		var b = Ma(arguments),
			c = x(this.Sb, this),
			d = x(this.oc, this);
		b.forEach(function(a) {
			a.xi = this.ja;
			a.pubsub.z("onEnter", c);
			a.pubsub.z("onExit", d)
		}, this);
		this.g("command_add_cuerange", b)
	};
	q.qu = function(a) {
		var b = Ma(arguments);
		this.g("command_remove_cuerange", b)
	};

	function Bj(a) {
		a.g("command_remove_cuerange_all", a.ja)
	}

	function Cj(a) {
		a.g("command_preroll_ready", a.ja)
	}
	q.appendToVideoContent = function(a) {
		G(a, this.ja);
		this.a.appendToVideoContent(a)
	};
	q.appendAboveVideoControls = function(a) {
		G(a, this.ja);
		this.a.appendAboveVideoControls(a)
	};

	function Dj(a) {
		a.g("command_show_dialog_area")
	}

	function Ej(a) {
		a.g("command_hide_all_dialogs")
	}
	q.create = function() {
		G(this.a.getRootNode(), this.ja + "-created")
	};
	q.destroy = function() {
		this.la();
		H(this.a.getRootNode(), this.ja + "-created")
	};
	q.load = function() {
		G(this.a.getRootNode(), this.ja + "-loaded");
		this.g("loaded")
	};
	q.la = function() {
		H(this.a.getRootNode(), this.ja + "-loaded")
	};
	q.Sb = function() {};
	q.oc = function() {};
	q.wi = function() {};
	q.log = function(a) {
		this.g("command_log", this.Ed, a)
	};

	function Fj(a, b, c) {
		var d = {},
			f;
		for(f in b) d[a.ja + "_" + f] = b[f];
		b = {};
		for(var g in c) b[a.ja + "_" + g] = c[g];
		a.g("command_log_timing", d, b)
	}
	q.zp = function() {
		return m
	};

	function Gj(a, b) {
		if(!a.k) return m;
		var c;
		try {
			c = a.k.get(b)
		} catch(d) {
			a.k && a.k.Ff(b)
		}
		return c
	}

	function Hj(a, b, c) {
		if(a.k) try {
			a.k.set(b, c)
		} catch(d) {}
	}

	function Ij(a, b) {
		a.g("command_enable_controls", b, a.ja)
	}
	q.playVideo = function() {
		this.g("command_play")
	};
	q.pauseVideo = function() {
		this.g("command_pause")
	};

	function Jj(a, b) {
		a.g("command_redirected_show_is_playing", b)
	}
	q.Ep = function() {};
	q.getOptions = function() {
		return []
	};
	q.lb = function() {
		return n
	};

	function Kj() {}
	var Lj = Qh(4) ? 0 : 0.1,
		Mj = new Kj;
	q = Kj.prototype;
	q.Ia = m;
	q.Je = m;
	q.Zk = 0;
	q.Th = 0;

	function Nj(a) {
		return "" == a.currentSrc && a.networkState > a.NETWORK_EMPTY && a.Ia ? "x-opera-media-source://" : a.currentSrc
	}

	function Oj(a, b, c) {
		var d = "";
		b && (a.Je = b, d = b.i ? Th(b) : Sh(b));
		b && c && b.b && c.b ? (a.Ia || (a.Ia = new Lh(a), a.src = Eh(a.Ia.a)), d = a.Ia, Nh(d, x(d.Hn, d, c)), a = a.Ia, Nh(a, x(a.Hn, a, b))) : a.src && "" == d || (a.Ia = m, d && (a.src = d), a.load())
	}
	q.seekTo = function(a) {
		if(0 < this.readyState && (this.currentTime = Math.max(Lj, a), this.Ia)) {
			var b = this.Ia,
				c;
			for(c in b.b) {
				var d = b.b[c];
				d.i = a;
				d.b = -1;
				Ih(d);
				d.e()
			}
		}
	};
	q.getType = function() {
		return this.type
	};
	q.getDuration = function(a) {
		a && Pj(this, this.duration || 0);
		return this.Zk
	};

	function Pj(a, b) {
		a.Zk = b;
		a.Ia && 0 != b && 1 < Math.abs(a.Ia.duration - b) && Nh(a.Ia, x(function() {
			this.duration = b
		}, a.Ia))
	}
	q.getCurrentTime = function() {
		return this.Th || this.currentTime
	};
	q.av = function() {
		this.Th = this.currentTime;
		if(this.Ia) {
			var a = this.Ia,
				b = this.Th,
				c;
			for(c in a.b) {
				var d = a.b[c];
				0 > d.b || (d.i = b)
			}
		}
	};
	q.getLoadProgressFraction = function() {
		var a = this.getDuration();
		if(Infinity == a) return 1;
		if(a && this.buffered && 0 < this.buffered.length) {
			var b = this.getBufferedTimeRangeIndex();
			return this.buffered.end(b) / a
		}
		return 0
	};
	q.playVideo = function() {
		this.ended && this.seekTo(0);
		this.hasAttribute("src") || (this.Ia ? this.src = Eh(this.Ia.a) : this.a && (this.setAttribute("src", this.a), this.a = m, this.load()));
		this.play()
	};
	q.pauseVideo = function() {
		this.pause()
	};
	q.stopVideo = function() {
		this.currentSrc && (this.Ia || (this.a = this.currentSrc), yd(this), this.removeAttribute("src"), this.load())
	};

	function Qj(a) {
		a.stopVideo();
		a.Zk = 0;
		a.Th = 0;
		a.Je = m;
		a.a = m
	}
	q.setVolume = function(a, b) {
		this.volume = a / 100;
		this.muted = b
	};
	q.getVolume = function() {
		return 100 * this.volume
	};
	q.isMuted = function() {
		return this.muted
	};
	q.mute = function() {
		this.muted = l
	};
	q.unMute = function() {
		this.muted = n
	};
	q.setPlaybackRate = function(a) {
		this.playbackRate = this.defaultPlaybackRate = a
	};
	q.getBufferedTimeRangeIndex = function() {
		for(var a = this.buffered, b = this.getCurrentTime(), c = 0; c < a.length && !(a.start(c) > b); c++)
			if(b <= a.end(c)) return c;
		return 0
	};
	q.inUnbufferedArea = function() {
		var a = this.buffered;
		if(!a || !a.length) return l;
		var b = this.getBufferedTimeRangeIndex();
		if(0 < b) return n;
		var c = this.getCurrentTime();
		return a.start(b) > c || a.end(b) < c
	};
	q.Zu = function() {
		this.hasAttribute("controls") && this.setAttribute("controls", "true")
	};
	var Rj = {
			gD: "0",
			hD: "1",
			wz: "2",
			Nw: "3",
			Ey: "4",
			yD: "5"
		},
		Sj = {
			uD: "red",
			ZD: "white"
		},
		Tj = {
			Pw: "0",
			ED: "1",
			Yy: "2"
		},
		Uj = {
			detailpage: {
				Fb: l
			}
		};
	Uj.embedded = {
		Ig: me(),
		Jg: "4",
		ic: l
	};
	var Vj = "ad blogger books docs google-live picasaweb".split(" "),
		Wj = {
			ad: {
				Wc: n,
				ee: n,
				Gb: n,
				qb: n,
				Fb: n,
				ic: n,
				Yc: "adt"
			},
			blazer: {
				cj: "youtube_mobile",
				Zb: n,
				Do: n,
				If: n,
				Jf: n,
				pb: l,
				Za: n,
				Hb: n,
				Va: l
			},
			blogger: {
				Wc: n,
				ee: n,
				Gb: n,
				qb: n,
				Fb: n,
				ic: n,
				Yc: "bl"
			},
			books: {
				Wc: n,
				ee: n,
				Gb: n,
				qb: n,
				Fb: l,
				ic: n,
				Yc: "gb"
			},
			docs: {
				Wc: n,
				ee: n,
				Gb: n,
				qb: n,
				Fb: n,
				ic: n,
				Yc: "gd"
			},
			"google-live": {
				Wc: n,
				ee: n,
				Gb: n,
				qb: n,
				Fb: n,
				ic: n,
				Yc: "gl"
			},
			"native": {
				If: n,
				Jf: n,
				Za: l
			},
			olympics: {
				If: n,
				Jf: n,
				Pf: l,
				Va: l
			},
			picasaweb: {
				Wc: n,
				ee: n,
				Gb: n,
				qb: n,
				Fb: n,
				ic: n,
				Yc: "pw"
			},
			touch: {
				If: n,
				Jf: n,
				Va: l
			}
		};

	function Xj(a) {
		this.b = [];
		this.F = [];
		var b = a.fexp;
		if(b) {
			this.b = b.split(",");
			var c = {};
			this.b.forEach(function(a) {
				c[a] = l
			});
			this.Vc = !!c["918108"];
			this.Sc = !!c["918113"] || !!c["918114"];
			this.Qd = !!c["918112"];
			this.Md = !!c["908527"];
			this.Od = !!c["925900"];
			this.sf = !!c["913559"]
		}
		this.S = a.el || this.S;
		(b = Uj[this.S]) && pa(this, b);
		b = a.ps || this.Ja;
		if(this.Qd && $f || 0 < navigator.msMaxTouchPoints) b = "touch";
		this.Ja = b;
		(b = Wj[this.Ja]) && pa(this, b);
		this.$g = Ia(Vj, this.Ja);
		this.tj = !(!Rg().defaultPlaybackRate || qb || $f || Zf || ag);
		var b = Rg(),
			d = b.muted;
		b.muted = !d;
		this.jm = b.muted != d;
		this.Bm = ag;
		if($f || Zf) this.wm = this.Vc || "blazer" != this.Ja;
		Yj(this, a)
	}
	z(Xj, Sa);
	q = Xj.prototype;
	q.Rl = l;
	q.Ig = l;
	q.Jg = "2";
	q.Zb = n;
	q.Kj = n;
	q.Xa = "/";
	q.Do = l;
	q.color = "red";
	q.Lj = "1";
	q.If = l;
	q.Jf = l;
	q.tj = n;
	q.jm = n;
	q.S = "detailpage";
	q.$g = n;
	q.pb = n;
	q.fc = n;
	q.De = n;
	q.Wc = l;
	q.aj = n;
	q.ee = l;
	q.loop = n;
	q.Ce = n;
	q.Gj = n;
	q.$i = "";
	q.vf = n;
	q.Ja = m;
	q.Lg = n;
	q.Ef = n;
	q.Bm = n;
	q.Ql = n;
	q.Gb = n;
	q.Nd = l;
	q.qb = l;
	q.Sg = l;
	q.Fb = n;
	q.ic = n;
	q.Si = n;
	q.Pf = n;
	q.wm = n;
	q.Za = n;
	q.Hb = n;
	q.Mj = n;
	q.Va = n;
	q.Xc = m;
	q.Ug = m;
	q.Zg = m;
	q.o = m;
	q.Wj = m;
	q.Yc = "yt";

	function Yj(a, b) {
		a.Rl = "0" != b.add_player_event_listeners;
		a.Tc = b.agcid;
		var c;
		c = T(a.Ig, b.fs);
		c = "detailpage" == a.S || "olympics" == a.Ja ? c : c && me();
		a.Ig = c;
		a.Jg = ii(a.Jg, b.autohide, Rj);
		a.Zb = T(a.Zb, b.autoplay);
		a.Kj = T(a.Kj, b.autoplayoverride);
		a.color = ii(a.color, b.color, Sj);
		a.Ya = U(a.Ya, b.content_v);
		a.Lj = ii(a.Lj, b.controls, Tj);
		a.R = U(a.R, b.cbrand);
		a.Z = U(a.Z, b.cbr);
		a.da = U(a.da, b.cbrver);
		a.Yb = U(a.Yb, b.c);
		a.ea = U(a.ea, b.cver);
		a.ha = U(a.ha, b.cmodel);
		a.wa = U(a.wa, b.cnetwork);
		a.Ba = U(a.Ba, b.cos);
		a.Da = U(a.Da, b.cosver);
		a.Ca = U(a.Ca, b.cplatform);
		a.a = U(a.a, b.eurl);
		a.D = U(a.D, b.framer);
		a.Qa = ii(a.Qa, b.iv_load_policy, ui);
		a.i = U(a.i, b.hl);
		a.pb = T(a.pb, b.is_html5_mobile_device);
		a.De = T(a.De, b.player_wide);
		a.aj = T(a.aj, b.is_playground);
		a.loop = T(a.loop, b.loop);
		a.Ce = T(a.Ce, b.modestbranding);
		"red" != a.color && (a.Ce = n);
		a.Kg = b.nbcolympicsadkeyvalues;
		if(c = b.nbcolympicscompanionsizes) {
			c = c.split(",");
			for(var d = [], f = 0; f < c.length; f++) {
				var g = ji(m, c[f]);
				g && d.push(g)
			}
			c = d
		} else c = a.F;
		a.F = c;
		a.Wi = b.nbcolympicssitesection;
		a.vf = T(a.vf, b.on3g);
		a.A = ii(a.A, b.vq, bi);
		a.$i = U(a.$i, b.playerapiid);
		a.Lg = T(a.Lg, b.playsinline);
		a.Ef = T(a.Ef, b.altf) && Zj();
		a.referrer = U(a.referrer, b.referrer);
		a.k = U(a.k, b.feature);
		a.region = U(a.region, b.cr);
		a.yc = U(a.yc, b.q);
		a.Gb = T(a.Gb, b.logwatch);
		a.qb = T(a.qb, b.showinfo);
		a.Sg = T(a.Sg, b.rel);
		a.Fb = T(a.Fb, b.enablesizebutton);
		a.Si = T(a.Si, b.ss);
		a.I = U(a.I, b.theme);
		a.Pf = T(a.Pf, b.nologo) && Zj();
		a.Za = T(a.Za, b.use_native_controls);
		a.Hb = T(a.Hb, b.svt);
		a.Za && (a.Ce = l, a.Qa = 3);
		a.Mj = T(a.Mj, b.ssl);
		a.Va = T(a.Va, b.use_tablet_controls);
		a.Va && (a.I = "dark");
		a.Ug = ji(a.Ug, b.video_container_override);
		a.vc = U(a.vc, b.attrib);
		a.Ga = U(a.Ga, b.sk);
		a.tc = a.Mj ? "https" : "http";
		a.Nd = "0" != a.Lj;
		if(c = b.BASE_YT_URL) gh(c, eh) && (a.Xa = c);
		$j(a, b);
		if("detailpage" != a.S && (b.playlist || b.list || b.api)) a.Gj = l;
		a.Sc && (a.Hb = l);
		"detailpage" == a.S && delete a.a;
		a.Xi = a.ee ? "//s.youtube.com/s" : "//video.google.com/s";
		a.ic = a.Pf ? n : a.Ce && !a.Za ? !a.qb : !a.qb && !a.Nd ? a.ic : n;
		c = a.Zb || "detailpage" == a.S;
		d = l;
		a.pb && (d = n);
		Ph("nintendo wiiu") && (d = n);
		a.Kj && (d = l);
		a.Ql = c && d;
		a.e = b
	}

	function ak(a, b) {
		a.xc = b.get("d", a.xc);
		a.Ma = b.get("f", a.Ma)
	}

	function $j(a, b) {
		a.Gb = T(a.Gb, b.logwatch);
		a.Ac = b.user_age == h ? a.Ac : Number(b.user_age);
		a.wc = U(a.wc, b.user_gender)
	}

	function bk(a, b) {
		switch(b.Pd) {
			case 38:
				var c = b.J.indexOf(":"),
					d = b.J.slice(0, c),
					c = b.J.slice(c + 1);
				return Q("//play.google.com/books/volumes/" + d + "/content/media", {
					aid: c,
					sig: b.Qd
				});
			case 30:
				return Q("//docs.google.com/get_video_info", {
					docid: b.J,
					authuser: b.hm,
					authkey: b.gm,
					eurl: a.a
				});
			case 33:
				return Q("//google-liveplayer.appspot.com/get_video_info", {
					key: b.J
				});
			default:
				return d = {
					html5: "1",
					video_id: b.J,
					eurl: a.a,
					ps: a.Ja,
					el: a.S,
					hl: a.i,
					list: b.nb,
					access_token: b.wa,
					agcid: a.Tc
				}, b.Ca && (d.ypc_preview = "1"), b.$b && (d.splay = "1"), Q(a.Xa + "get_video_info", d)
		}
	}
	q.getVideoUrl = function(a, b) {
		var c = {
			v: a.J,
			list: a.nb
		};
		this.S && (c.feature = "player_" + this.S);
		b && pa(c, b);
		return Q(this.tc + "://" + ("www.youtube-nocookie.com" == window.location.host ? "www.youtube.com" : window.location.host) + "/watch", c)
	};

	function ck(a) {
		var b = {
			contact_type: "playbackissue",
			html5: 1,
			plid: a.Na,
			v: a.J
		};
		a.format && (b.fmt = a.format.Ua.a);
		return Q("//www.google.com/support/youtube/bin/request.py", b)
	}

	function dk(a) {
		a = a.Wj;
		return !a ? new F(Number.NaN, Number.NaN) : new F(a.clientWidth, a.clientHeight)
	}

	function ek(a) {
		return !a.o ? new F(Number.NaN, Number.NaN) : new F(a.o.clientWidth, a.o.clientHeight)
	}

	function Zj() {
		return gh(document.location.toString(), eh) && -1 == document.location.toString().indexOf("/embed/")
	}
	q.G = function() {
		this.Wj = this.o = m;
		Xj.C.G.call(this)
	};

	function fk(a, b) {
		this.a = a;
		this.u = b
	};

	function gk(a) {
		this.b = a || window;
		this.a = []
	}
	gk.prototype.b = m;
	gk.prototype.a = m;
	gk.prototype.K = function(a, b, c, d) {
		c = x(c, d || this.b);
		a = N(a, b, c);
		this.a.push(a);
		return a
	};

	function hk(a, b, c, d) {
		d = x(d, a.b);
		b = ee(b, c, d);
		a.a.push(b)
	}

	function ik(a, b, c) {
		c = x(c, a.b);
		b = he(b, c, "yt-uix-button-menu-item");
		a.a.push(b)
	}
	gk.prototype.i = function(a) {
		je(a);
		Ka(this.a, a)
	};

	function jk(a) {
		for(var b = 0; b < a.a.length; b++) je(a.a[b]);
		a.a = []
	};

	function kk(a) {
		this.u = a
	}

	function lk(a, b) {
		var c = m;
		b.I && (c = Bi(b, b.I));
		if(!c && a.u.A && "auto" != a.u.A) {
			var c = m,
				d = ci.indexOf(a.u.A);
			if(0 <= d)
				for(; d < ci.length && !(c = Bi(b, ci[d])); d++);
		}
		if(!c) {
			var c = b.md,
				f;
			a.u.Xc ? (d = a.u.Xc.aa(), Zf && !a.u.Lg && (d = (!window.screen || !window.screen.width ? m : new F(window.screen.width, window.screen.height)) || d), d.scale(Zf || kb ? window.devicePixelRatio || 1 : 1), f = a.u.Ug || d) : f = a.u.Ug;
			a: {
				var g = d = 0;
				f !== m && (d = f.width, g = f.height);
				f = 16 / 9;
				d > Math.round(f * g) && (d = Math.round(f * g));
				d *= g;
				f = m;
				for(g = 0; g < c.length; g++)
					if(f = c[g], f.b.width * f.b.height * ("medium" == f.Wd ? 0.26 : 0.85) < d) {
						c = f;
						break a
					}
				c = f
			}
			c || (c = b.md[0])
		}
		return c
	};

	function mk(a, b, c, d, f, g, j) {
		var k, p;
		if(k = c.offsetParent) {
			var r = "HTML" == k.tagName || "BODY" == k.tagName;
			if(!r || "static" != ng(k, "position")) p = ug(k), r || (r = (r = vg(k)) && rb ? -k.scrollLeft : r && (!C || !Gb("8")) ? k.scrollWidth - k.clientWidth - k.scrollLeft : k.scrollLeft, p = uc(p, new D(r, k.scrollTop)))
		}
		k = p || new D;
		p = Dg(a);
		if(r = tg(a)) {
			var u = zc(r),
				r = Math.max(p.left, u.left),
				w = Math.min(p.left + p.width, u.left + u.width);
			if(r <= w) {
				var A = Math.max(p.top, u.top),
					u = Math.min(p.top + p.height, u.top + u.height);
				A <= u && (p.left = r, p.top = A, p.width = w - r, p.height = u - A)
			}
		}
		r = nd(a);
		A = nd(c);
		if(r.a != A.a) {
			var w = r.a.body,
				A = A.a.parentWindow || A.a.defaultView,
				u = new D(0, 0),
				E = pd(w) ? pd(w).parentWindow || pd(w).defaultView : window,
				Aa = w;
			do {
				var gb = E == A ? ug(Aa) : xg(Aa);
				u.x += gb.x;
				u.y += gb.y
			} while (E && E != A && (Aa = E.frameElement) && (E = E.parent));
			w = uc(u, ug(w));
			C && !Md(r) && (w = uc(w, Nd(r)));
			p.left += w.x;
			p.top += w.y
		}
		a = (b & 4 && vg(a) ? b ^ 2 : b) & -5;
		b = new D(a & 2 ? p.left + p.width : p.left, a & 1 ? p.top + p.height : p.top);
		b = uc(b, k);
		f && (b.x += (a & 2 ? -1 : 1) * f.x, b.y += (a & 1 ? -1 : 1) * f.y);
		var Y;
		if(j && (Y = tg(c))) Y.top -= k.y,
			Y.right -= k.x, Y.bottom -= k.y, Y.left -= k.x;
		return nk(b, c, d, g, Y, j, h)
	}

	function nk(a, b, c, d, f, g, j) {
		a = a.aa();
		var k = 0,
			p = (c & 4 && vg(b) ? c ^ 2 : c) & -5;
		c = Bg(b);
		j = j ? j.aa() : c.aa();
		if(d || 0 != p) p & 2 ? a.x -= j.width + (d ? d.right : 0) : d && (a.x += d.left), p & 1 ? a.y -= j.height + (d ? d.bottom : 0) : d && (a.y += d.top);
		if(g) {
			if(f) {
				k = a;
				d = 0;
				if(65 == (g & 65) && (k.x < f.left || k.x >= f.right)) g &= -2;
				if(132 == (g & 132) && (k.y < f.top || k.y >= f.bottom)) g &= -5;
				k.x < f.left && g & 1 && (k.x = f.left, d |= 1);
				k.x < f.left && (k.x + j.width > f.right && g & 16) && (j.width = Math.max(j.width - (k.x + j.width - f.right), 0), d |= 4);
				k.x + j.width > f.right && g & 1 && (k.x = Math.max(f.right - j.width, f.left), d |= 1);
				g & 2 && (d |= (k.x < f.left ? 16 : 0) | (k.x + j.width > f.right ? 32 : 0));
				k.y < f.top && g & 4 && (k.y = f.top, d |= 2);
				k.y >= f.top && (k.y + j.height > f.bottom && g & 32) && (j.height = Math.max(j.height - (k.y + j.height - f.bottom), 0), d |= 8);
				k.y + j.height > f.bottom && g & 4 && (k.y = Math.max(f.bottom - j.height, f.top), d |= 2);
				g & 8 && (d |= (k.y < f.top ? 64 : 0) | (k.y + j.height > f.bottom ? 128 : 0));
				k = d
			} else k = 256;
			if(k & 496) return k
		}
		og(b, a);
		wc(c, j) || (f = Md(nd(pd(b))), C && (!f || !Gb("8")) ? (a = b.style, f ? (f = Ig(b), b = Jg(b), a.pixelWidth = j.width - b.left - f.left - f.right - b.right, a.pixelHeight = j.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = j.width, a.pixelHeight = j.height)) : (b = b.style, rb ? b.MozBoxSizing = "border-box" : sb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(j.width, 0) + "px", b.height = Math.max(j.height, 0) + "px"));
		return k
	};

	function ok(a, b) {
		if((a = K(a)) && a.style) Fg(a, b), J(a, "hid", !b)
	}

	function pk(a) {
		a = K(a);
		return !a ? n : !("none" == a.style.display || I(a, "hid"))
	}

	function qk(a) {
		if(a = K(a)) pk(a) ? (Fg(a, n), G(a, "hid")) : (Fg(a, l), H(a, "hid"))
	}

	function W(a) {
		B(arguments, function(a) {
			ok(a, l)
		})
	}

	function X(a) {
		B(arguments, function(a) {
			ok(a, n)
		})
	}

	function rk(a) {
		var b = document.body;
		if(b.style[a] != h) return a;
		a = a.charAt(0).toUpperCase() + a.substr(1);
		for(var c = ["Moz", "Webkit", "ms", "O"], d = 0; d < c.length; d++)
			if(b.style[c[d] + a] != h) return c[d] + a
	}

	function sk(a, b) {
		var c;
		if((a = K(a)) && a.style)(c = rk("transform")) && (a.style[c] = b)
	};
	var tk = {},
		uk = "ontouchstart" in document;

	function vk(a, b, c) {
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
		return Kd(c, function(a) {
			return I(a, b)
		}, l, d)
	}

	function wk(a) {
		var b = "mouseover" == a.type && "mouseenter" in tk || "mouseout" == a.type && "mouseleave" in tk,
			c = a.type in tk || b;
		if("HTML" != a.target.tagName && c) {
			if(b) {
				var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
					c = tk[b],
					d;
				for(d in c.ib) {
					var f = vk(b, d, a.target);
					f && !Kd(a.relatedTarget, function(a) {
						return a == f
					}, l) && c.g(d, f, b, a)
				}
			}
			if(b = tk[a.type])
				for(d in b.ib)(f = vk(a.type, d, a.target)) && b.g(d, f, a.type, a)
		}
	}
	N(document, "blur", wk, l);
	N(document, "change", wk, l);
	N(document, "click", wk);
	N(document, "focus", wk, l);
	N(document, "mouseover", wk);
	N(document, "mouseout", wk);
	N(document, "mousedown", wk);
	N(document, "keydown", wk);
	N(document, "keyup", wk);
	N(document, "keypress", wk);
	N(document, "cut", wk);
	N(document, "paste", wk);
	uk && (N(document, "touchstart", wk), N(document, "touchend", wk), N(document, "touchcancel", wk));
	var xk = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
	qa("yt.uix.widgets_", xk);

	function yk(a) {
		a = a.getInstance();
		var b = Z(a);
		!(b in xk) && a.Gl() && (a.register(), xk[b] = a)
	};

	function zk() {
		this.a = {}
	}
	q = zk.prototype;
	q.Dp = !!eval("/*@cc_on!@*/false");
	q.Gl = function() {
		return l
	};

	function $(a, b, c, d) {
		d = Z(a, d);
		var f = x(c, a);
		b in tk || (tk[b] = new we);
		tk[b].z(d, f);
		a.a[c] = f
	}
	q.we = function(a, b, c) {
		var d = this.V(a, b);
		if(d && (d = t(d))) {
			var f = Pa(arguments, 2);
			Oa(f, 0, 0, a);
			d.apply(m, f)
		}
	};
	q.V = function(a, b) {
		return M(a, b)
	};
	q.hb = function(a) {
		return Ld(a, Z(this))
	};

	function Z(a, b) {
		return "yt-uix" + (a.Rc ? "-" + a.Rc : "") + (b ? "-" + b : "")
	};

	function Ak() {
		this.a = {}
	}
	z(Ak, zk);
	ba(Ak);
	q = Ak.prototype;
	q.Rc = "tooltip";
	q.Ii = 0;
	q.register = function() {
		$(this, "mouseover", this.up);
		$(this, "mouseout", this.El);
		$(this, "click", this.El);
		$(this, "touchstart", this.yw);
		$(this, "touchend", this.xp);
		$(this, "touchcancel", this.xp)
	};
	q.Gl = function() {
		return !(this.Dp && 0 == Eb.indexOf("6"))
	};
	q.up = function(a) {
		if(!(this.Ii && 1E3 > y() - this.Ii)) {
			var b = parseInt(this.V(a, "tooltip-hide-timer"), 10);
			b && (Qd(a, "tooltip-hide-timer"), If(b));
			var b = x(function() {
					Bk(this, a);
					Qd(a, "tooltip-show-timer")
				}, this),
				c = parseInt(this.V(a, "tooltip-show-delay"), 10) || 0,
				b = R(b, c);
			Od(a, "tooltip-show-timer", b.toString());
			a.title && (Od(a, "tooltip-text", a.title), a.title = "")
		}
	};
	q.El = function(a) {
		var b = parseInt(this.V(a, "tooltip-show-timer"), 10);
		b && (If(b), Qd(a, "tooltip-show-timer"));
		b = x(function() {
			Ck(this, a);
			Qd(a, "tooltip-hide-timer")
		}, this);
		b = R(b, 50);
		Od(a, "tooltip-hide-timer", b.toString());
		if(b = this.V(a, "tooltip-text")) a.title = b
	};
	q.yw = function(a, b, c) {
		this.Ii = 0;
		a = vk(b, Z(this), c.changedTouches[0].target);
		this.up(a)
	};
	q.xp = function(a, b, c) {
		this.Ii = y();
		a = vk(b, Z(this), c.changedTouches[0].target);
		this.El(a)
	};

	function Dk(a, b, c) {
		Od(b, "tooltip-text", c);
		a = a.V(b, "content-id");
		if(a = K(a)) a.innerHTML = c
	}
	q.zd = function(a) {
		return this.V(a, "tooltip-text") || a.title
	};

	function Bk(a, b) {
		if(b) {
			var c = a.zd(b);
			if(c) {
				var d = K(Ek(a, b));
				if(!d) {
					d = document.createElement("div");
					d.id = Ek(a, b);
					d.className = Z(a, "tip");
					var f = document.createElement("div");
					f.className = Z(a, "tip-body");
					var g = document.createElement("div");
					g.className = Z(a, "tip-arrow");
					var j = document.createElement("div");
					j.className = Z(a, "tip-content");
					var k;
					k = m;
					lb && I(b, Z(a, "masked")) && ((k = K("yt-uix-tooltip-shared-mask")) ? (k.parentNode.removeChild(k), W(k)) : (k = document.createElement("iframe"), k.src = 'javascript:""', k.id = "yt-uix-tooltip-shared-mask", k.className = Z(a, "tip-mask")));
					var p = Ek(a, b, "content");
					j.id = p;
					Od(b, "content-id", p);
					f.appendChild(j);
					k && d.appendChild(k);
					d.appendChild(f);
					d.appendChild(g);
					(ne() || document.body).appendChild(d);
					Dk(a, b, c);
					if((c = parseInt(a.V(b, "tooltip-max-width"), 10)) && f.offsetWidth > c) f.style.width = c + "px", G(j, Z(a, "normal-wrap"));
					j = I(b, Z(a, "reverse"));
					Fk(a, b, d, f, k, j) || Fk(a, b, d, f, k, !j);
					var r = Z(a, "tip-visible");
					R(function() {
						G(d, r)
					}, 0)
				}
			}
		}
	}

	function Fk(a, b, c, d, f, g) {
		J(c, Z(a, "tip-reverse"), g);
		var j = 0;
		g && (j = 1);
		var k = Bg(b);
		g = new D((k.width - 10) / 2, g ? k.height : 0);
		var p = ug(b);
		nk(new D(p.x + g.x, p.y + g.y), c, j);
		j = ud(window);
		p = xg(c);
		c = Bg(d);
		var r = c.width / 2;
		f && (f.style.left = "3px", f.style.height = c.height + "px", f.style.width = c.width + "px");
		f = !!(j.height < p.y + k.height);
		k = !!(p.y < k.height);
		g = !!(p.x < r);
		j = !!(j.width < p.x + r);
		p = (c.width + 3) / -2 - -5;
		a = a.V(b, "force-tooltip-direction");
		if("left" == a || g) p = -5;
		else if("right" == a || j) p = 20 - c.width - 3;
		d.style.left = p + "px";
		return !(f || k)
	}

	function Ck(a, b) {
		if(b) {
			var c = K(Ek(a, b));
			if(c) {
				var d = K("yt-uix-tooltip-shared-mask"),
					f = d && Kd(d, function(a) {
						return a == c
					}, n, 2);
				d && f && (d.parentNode.removeChild(d), X(d), document.body.appendChild(d));
				zd(c);
				Qd(b, "content-id")
			}
		}
	}

	function Ek(a, b, c) {
		a = Z(a) + Sd(b);
		c && (a += "-" + c);
		return a
	};

	function Gk(a, b) {
		H(a, "html5-async-progress", "html5-async-success", "html5-async-error");
		b && G(a, b);
		Ck(Ak.getInstance(), a)
	};

	function Hk(a) {
		var b = Math.floor(a / 86400),
			c = Math.floor(a % 86400 / 3600),
			d = Math.floor(a % 3600 / 60);
		a = Math.floor(a % 60);
		var f = "";
		0 < b && (f += b + ":", 10 > c && (f += "0"));
		0 < c && (f += c + ":", 10 > d && (f += "0"));
		f += d + ":";
		10 > a && (f += "0");
		return f + a
	};

	function Ik(a, b, c, d) {
		if(this.b = !!c) this.al = Math.max(800, this.al);
		this.A = a;
		this.I = b;
		this.e = d;
		Jk ? a.ontouchstart = x(this.Bu, this) : a.onmousedown = x(this.Au, this);
		a.onclick = x(this.bn, this)
	}
	var Jk = "ontouchstart" in document,
		Kk = [],
		Lk = n;
	q = Ik.prototype;
	q.al = 500;
	q.Bu = function(a) {
		if(!(1 < a.touches.length) && !a._stop) {
			this.nd = a._stop = l;
			this.b || (this.A.ontouchend = x(this.bn, this), document.body.addEventListener("touchend", Mk(this), n));
			document.body.addEventListener("touchmove", Nk(this), n);
			document.body.addEventListener("touchcancel", Mk(this), n);
			Ok(this);
			this.D = window.setTimeout(x(this.rh, this, l), 100);
			var b = a.touches[0];
			this.a = new D(b.clientX, b.clientY);
			if(!this.b && (!this.e || this.e(a))) {
				var c = this.a;
				Kk.push(c);
				window.setTimeout(function() {
					var a = Kk.indexOf(c); - 1 != a && Kk.splice(a, 1)
				}, 2500)
			}
		}
	};
	q.Au = function(a) {
		a.stopPropagation();
		this.nd = l;
		Ok(this);
		this.rh(l)
	};
	q.bn = function(a) {
		if(("touchend" != a.type || this.nd) && !a._stop) a._stop = l, this.rh(l), window.setTimeout(x(function() {
			this.mi();
			this.I(a)
		}, this), 0)
	};
	q.Pv = function(a) {
		1 < a.touches.length ? this.mi() : (a = a.touches[0], a = new D(a.clientX, a.clientY), this.a && 12 < tc(this.a, a) && this.mi())
	};

	function Nk(a) {
		a.j || (a.j = x(a.Pv, a));
		return a.j
	}
	q.mi = function() {
		window.clearTimeout(this.D);
		window.clearTimeout(this.F);
		this.rh(n);
		this.nd = n;
		document.body.removeEventListener("touchmove", Nk(this), n);
		document.body.removeEventListener("touchend", Mk(this), n);
		document.body.removeEventListener("touchcancel", Mk(this), n)
	};

	function Mk(a) {
		a.i || (a.i = x(a.mi, a));
		return a.i
	}
	q.rh = function(a) {
		this.k && J(this.A, this.k, a)
	};

	function Ok(a) {
		a.Vv && (a.F = window.setTimeout(x(function() {
			this.nd = n;
			this.Vv()
		}, a), a.al))
	};

	function Pk() {
		this.a = {}
	}
	z(Pk, zk);
	ba(Pk);
	q = Pk.prototype;
	q.Rc = "button";
	q.Ne = m;
	q.register = function() {
		$(this, "click", this.Fw);
		$(this, "keydown", this.Ew);
		$(this, "keypress", this.Gw)
	};
	q.Fw = function(a) {
		if(a && !a.disabled) {
			if(this.V(a, "button-toggle")) {
				var b = Ld(a, Z(this, "group"));
				if(b && this.V(b, "button-toggle-group")) {
					var c = this.V(b, "button-toggle-group"),
						b = qd(Z(this), b),
						d = Z(this, "toggled"),
						f = I(a, d);
					B(b, function(b) {
						b != a || "optional" == c && f ? H(b, d) : G(a, d)
					})
				} else jd(a, Z(this, "toggled"))
			}
			this.click(a)
		}
	};
	q.Ew = function(a, b, c) {
		if(!c.altKey && (!c.ctrlKey && !c.shiftKey) && (b = Qk(this, a))) {
			var d = function(a) {
				var b = "";
				a.tagName && (b = a.tagName.toLowerCase());
				return "ul" == b || "table" == b
			};
			if(d(b)) d = b;
			else var f = [],
				d = Fd(b, d, f, l) ? f[0] : h;
			if(d) {
				var d = d.tagName.toLowerCase(),
					g;
				"ul" == d ? g = this.Lw : "table" == d && (g = this.Kw);
				g && (d = x(g, this), f = pk(b), (g = 9 == c.keyCode) || 32 == c.keyCode || 13 == c.keyCode ? (c = Rk(this, b)) ? (a = Bd(c), "a" == a.tagName.toLowerCase() ? window.location = a.href : le(a, "click")) : g && Sk(this, a) : f ? 27 == c.keyCode ? (Rk(this, b), Sk(this, a)) : d(a, b, c) : (b = I(a, Z(this, "reverse")) ? 38 : 40, c.keyCode == b && (le(a, "click"), c.preventDefault())))
			}
		}
	};
	q.Gw = function(a, b, c) {
		!c.altKey && (!c.ctrlKey && !c.shiftKey) && (a = Qk(this, a), pk(a) && c.preventDefault())
	};

	function Rk(a, b) {
		var c = Z(a, "menu-item-highlight"),
			d = L(c, b);
		d && H(d, c);
		return d
	}

	function Tk(a, b, c) {
		G(c, Z(a, "menu-item-highlight"));
		b.setAttribute("aria-activedescendant", c.getAttribute("id"))
	}
	q.Kw = function(a, b, c) {
		var d = Rk(this, b);
		b = Wd("table", b);
		var f = Wd("tr", b),
			f = rd("td", m, f).length;
		b = rd("td", m, b);
		d = Uk(d, b, f, c); - 1 != d && (Tk(this, a, b[d]), c.preventDefault())
	};
	q.Lw = function(a, b, c) {
		if(40 == c.keyCode || 38 == c.keyCode) {
			var d = Rk(this, b);
			b = rd("li", m, b);
			d = Uk(d, b, 1, c);
			Tk(this, a, b[d]);
			c.preventDefault()
		}
	};

	function Uk(a, b, c, d) {
		var f = b.length;
		a = Da(b, a);
		if(-1 == a)
			if(38 == d.keyCode) a = f - c;
			else {
				if(37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode) a = 0
			} else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), a -= 1) : 38 == d.keyCode ? (a < c && (a += f), a -= c) : 40 == d.keyCode && (a >= f - c && (a -= f), a += c);
		return a
	}

	function Vk(a, b) {
		var c = b.iframeMask;
		c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = Z(a, "menu-mask"), b.iframeMask = c);
		return c
	}

	function Wk(a, b) {
		if(a.V(b, "button-menu-root-container")) {
			var c = a.V(b, "button-menu-root-container");
			return Ld(b, c)
		}
		return document.body
	}
	q.Ap = function(a) {
		if(a) {
			var b = Qk(this, a);
			if(b) {
				a.setAttribute("aria-pressed", "true");
				a.setAttribute("aria-expanded", "true");
				b.originalParentNode = b.parentNode;
				b.activeButtonNode = a;
				b.parentNode.removeChild(b);
				this.V(a, "button-has-sibling-menu") ? a.parentNode.appendChild(b) : Wk(this, a).appendChild(b);
				b.style.minWidth = a.offsetWidth - 2 + "px";
				var c = Vk(this, a);
				c && document.body.appendChild(c);
				var c = Ld(a, Z(this, "group")),
					d = !!this.V(a, "button-menu-ignore-group"),
					c = c && !d ? c : a,
					d = 5,
					f = 4,
					g = Dg(a);
				if(I(a, Z(this, "reverse"))) {
					d = 4;
					f = 5;
					g = g.top + "px";
					try {
						b.style.maxHeight = g
					} catch(j) {}
				}
				I(a, "flip") && (I(a, Z(this, "reverse")) ? (d = 6, f = 7) : (d = 7, f = 6));
				var k;
				this.V(a, "button-has-sibling-menu") ? k = sg(c) : this.V(a, "button-menu-root-container") && (k = Wk(this, a));
				C && !Gb("8") && (k = m);
				var p;
				k && (p = Dg(k), p = new vc(-p.top, p.left, p.top, -p.left));
				k = new D(0, 1);
				I(a, Z(this, "center-menu")) && (k.x -= Math.round((Bg(b).width - Bg(a).width) / 2));
				if(g = Vk(this, a)) {
					var r = Bg(b);
					g.style.width = r.width + "px";
					g.style.height = r.height + "px";
					mk(c, d, g, f, k, p)
				}
				mk(c, d, b, f, k, p);
				W(b);
				this.we(a, "button-menu-action", l);
				G(a, Z(this, "active"));
				p = x(this.ew, this, a);
				b = N(document, "click", p);
				p = N(document, "contextmenu", p);
				Od(a, "button-listener", b);
				Od(a, "button-context-menu-listener", p);
				this.Ne = a
			}
		}
	};

	function Sk(a, b) {
		if(b) {
			var c = Qk(a, b);
			if(c) {
				a.Ne = m;
				b.setAttribute("aria-pressed", "false");
				b.setAttribute("aria-expanded", "false");
				X(c);
				a.we(b, "button-menu-action", n);
				var d = Vk(a, b);
				R(function() {
					d && d.parentNode && d.parentNode.removeChild(d);
					c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = m, c.activeButtonNode = m)
				}, 1)
			}
			var f = Ld(b, Z(a, "group"));
			H(b, Z(a, "active"));
			f && H(f, Z(a, "group-active"));
			if(f = a.V(b, "button-listener")) je(f), Qd(b, "button-listener");
			if(f = a.V(b, "button-context-menu-listener")) je(f), Qd(b, "button-context-menu-listener")
		}
	}
	q.getContent = function(a) {
		return L(Z(this, "content"), a)
	};
	q.ew = function(a, b) {
		var c;
		c = b || window.event;
		c = c.target || c.srcElement;
		3 == c.nodeType && (c = c.parentNode);
		var d = Ld(c, Z(this));
		if(d) {
			var d = Qk(this, d),
				f = Qk(this, a);
			if(d == f) return
		}
		if(!Ld(c, Z(this, "menu")) || I(c, Z(this, "menu-item")) || I(c, Z(this, "menu-close")))
			if(Sk(this, a), (d = Ld(c, Z(this, "menu"))) && this.V(a, "button-menu-indicate-selected")) {
				if(f = L(Z(this, "content"), a)) {
					var g;
					ld && "innerText" in c ? g = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (g = [], Id(c, g, l), g = g.join(""));
					g = g.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
					g = g.replace(/\u200B/g, "");
					ld || (g = g.replace(/ +/g, " "));
					" " != g && (g = g.replace(/^\s*/, ""));
					Ed(f, g)
				}
				f = Z(this, "menu-item-selected");
				(d = L(f, d)) && H(d, f);
				G(c.parentNode, f)
			}
	};

	function Qk(a, b) {
		if(!b.widgetMenu) {
			var c = a.V(b, "button-menu-id"),
				c = c && K(c),
				d = Z(a, "menu");
			c ? (G(c, d), G(c, Z(a, "menu-external"))) : c = L(d, b);
			b.widgetMenu = c
		}
		return b.widgetMenu
	}
	q.click = function(a) {
		if(Qk(this, a)) {
			var b = Qk(this, a),
				c = Ld(b.activeButtonNode || b.parentNode, Z(this));
			c && c != a ? (Sk(this, c), R(x(this.Ap, this, a), 1)) : pk(b) ? Sk(this, a) : this.Ap(a);
			a.focus()
		}
		this.we(a, "button-action")
	};

	function Xk(a, b, c) {
		this.A = a;
		this.k = b;
		this.e = c;
		this.i = x(this.D, this)
	}
	z(Xk, Sa);
	Xk.prototype.b = n;
	Xk.prototype.a = m;
	Xk.prototype.G = function() {
		Xk.C.G.call(this);
		this.a && (ec.clearTimeout(this.a), this.a = m, this.b = n)
	};
	Xk.prototype.D = function() {
		this.a = m;
		this.b && (this.b = n, Yk(this))
	};

	function Yk(a) {
		a.a = hc(a.i, a.k);
		a.A.call(a.e)
	};

	function Zk(a, b, c, d) {
		var f = Math.min(c / (b.sn / b.Ih), d / (b.rn / b.rows)),
			g = b.sn * f,
			f = b.rn * f,
			g = Math.floor(g / b.Ih) * b.Ih,
			f = Math.floor(f / b.rows) * b.rows,
			j = g / b.Ih,
			k = f / b.rows,
			p = Math.floor((c - j) / 2);
		c = Math.ceil((c - j) / 2);
		d = Math.floor((d - k) / 2);
		kg(a, {
			width: j + "px",
			height: k + "px",
			"margin-top": d + "px",
			"margin-bottom": d + "px",
			"margin-left": p + "px",
			"margin-right": c + "px",
			"background-image": "url(" + b.url + ")",
			"background-position": -1 * b.Vr * j + "px " + -1 * b.row * k + "px",
			"background-size": g + "px " + f + "px"
		})
	};

	function $k() {
		this.a = new Xk(this.xu, 250, this);
		Ta(this, this.a)
	}
	z($k, Sa);
	q = $k.prototype;
	q.lm = n;
	q.Dc = m;
	q.wb = m;
	q.Yg = m;
	q.rj = m;
	q.qj = m;
	q.Df = m;
	q.Xd = 0;
	q.Xj = 0;
	q.Dk = 0;
	q.Ao = 10;
	q.fb = 0;
	q.vi = 0;
	q.pl = 0;
	q.jc = m;
	q.de = m;
	q.qn = 0;
	q.vo = function(a, b) {
		Fg(this.wb, n);
		for(var c, d, f = a; f <= b; f++)
			if(d = this.wb.children[f]) c = qi(this.de, f, this.fb), Zk(d, c, this.fb, this.vi);
		Fg(this.wb, l)
	};

	function al(a, b) {
		if(b != a.pl) {
			var c = qi(a.de, b, 2 * a.fb),
				d = Math.round(2 * a.fb),
				f = Math.round(2 * a.vi);
			Zk(a.rj, c, d, f);
			a.pl = b
		}
	}
	q.xu = function() {
		for(var a = this.Xj, b = Math.max(Math.floor(a / this.fb), 0), a = Math.min(Math.ceil((a + this.Xd) / this.fb), this.jc.getLevel(0).b - 1); b <= a; b++) {
			for(var c = this.de, d = b, f = ig(c.a, 2 * this.fb), g = h, j = h; 0 <= f; f--)
				if(g = c.a.getLevel(f), j = Math.floor(d / (g.a * g.j)), !g.Nb[j]) {
					var g = c,
						k = f,
						p = k + "-" + j;
					g.k[p] || (g.k[p] = l, ni(g.e, k, {
						Rm: k,
						Sm: j
					}))
				}
			ri(c)
		}
	};

	function bl(a, b) {
		a.Ao = Math.min(10, Math.ceil(a.Xd / 72));
		a.fb = Math.floor(a.Xd / a.Ao);
		a.vi = 0.555 * a.fb;
		var c = a.jc.getLevel(0).b;
		a.Dk = a.fb * c;
		Ag(a.wb, a.Dk);
		var c = Math.round(2 * a.fb),
			d = 0.555 * c + 12;
		zg(a.Yg, c, d);
		og(a.Yg, (a.Xd - c) / 2);
		a.Dc.style.height = pg(d + 20, l);
		b && (c = a.jc.getLevel(0).b, a.vo(0, c - 1), al(a, a.pl))
	}
	q.G = function() {
		this.Df = this.qj = this.rj = this.Yg = this.wb = this.Dc = this.de = this.jc = m;
		$k.C.G.call(this)
	};

	function cl(a, b, c, d) {
		this.k = a;
		this.width = b;
		this.j = c;
		this.e = d;
		this.b = b - c - d;
		this.i = Math.min(a - c, this.b);
		this.a = sc(this.i / this.b, 0, 1)
	};

	function dl() {}
	z(dl, Sa);
	q = dl.prototype;
	q.Vg = n;
	q.In = 0;
	q.Ib = m;
	q.Wg = m;
	q.vj = m;
	q.oj = m;
	q.Rf = m;
	q.jg = m;
	q.$ = function() {
		X(this.Ib)
	};
	q.reset = function() {
		H(this.Ib, "with-thumbnail");
		this.jg = this.Rf = m
	};
	q.Eu = function(a, b) {
		(a <= this.a || this.a <= b) && el(this)
	};

	function el(a) {
		var b = qi(a.jg, a.a, 108);
		Zk(a.vj, b, 108, 60)
	}
	q.G = function() {
		this.oj = this.vj = this.Wg = this.Ib = this.jg = this.Rf = m;
		dl.C.G.call(this)
	};

	function fl() {
		P.call(this)
	}
	z(fl, P);
	fl.prototype.a = m;
	fl.prototype.e = m;
	fl.prototype.b = m;
	fl.prototype.G = function() {
		this.e = this.a = m;
		ke(this.b);
		this.b = m;
		fl.C.G.call(this)
	};

	function gl(a) {
		P.call(this);
		this.u = a;
		this.b = new gk(this);
		this.k = {};
		this.A = new gk(this);
		this.D = new gk(this);
		this.F = new gk(this);
		this.e = 0;
		this.I = n
	}
	z(gl, P);
	var hl = ["html5-play-button", "html5-pause-button", "html5-replay-button", "html5-stop-button"];
	q = gl.prototype;
	q.oa = m;
	q.Lb = m;
	q.Kb = m;
	q.Ie = m;
	q.ah = m;
	q.ij = m;
	q.gj = m;
	q.hj = m;
	q.ji = 0;
	q.fj = m;
	q.gc = m;
	q.fd = m;
	q.ed = m;
	q.He = m;
	q.af = NaN;
	q.Zd = m;
	q.$e = NaN;
	q.Me = m;
	q.Gf = m;
	q.Hf = m;
	q.Ud = m;
	q.Bc = m;
	q.Pg = m;
	q.Mb = m;
	q.Qg = m;
	q.Af = m;
	q.yf = m;
	q.Rg = m;
	q.Og = m;
	q.xf = m;
	q.Fe = m;
	q.Ge = m;
	q.Pk = n;
	q.Yn = n;
	q.jj = m;
	q.Zc = m;
	q.Re = n;
	q.Dj = function(a) {
		this.oa = a;
		this.Lb = L("html5-play-button", a);
		(new Ik(this.Lb, x(this.eq, this))).k = "html5-active";
		this.Kb = L("html5-progress-bar", a);
		this.Ie = L("html5-progress-list", this.Kb);
		this.b.K(this.Kb, "click", this.km);
		hk(this.b, this.Kb, "over", this.Xp);
		this.gj = L("html5-play-progress", this.Ie);
		this.u.color && G(this.Kb, this.u.color);
		this.hj = L("html5-load-progress", this.Ie);
		this.ij = L("html5-ad-progress-list", this.Kb);
		this.He = L("html5-scrubber-button", a);
		hk(this.b, this.He, "down", this.Zp);
		this.Gf = L("html5-clip-exclusion", a);
		this.Hf = this.Gf.cloneNode(n);
		this.Gf.parentNode.appendChild(this.Hf);
		this.Zd = L("html5-clip-start", a);
		hk(this.b, this.Zd, "over", this.om);
		hk(this.b, this.Zd, "out", this.nm);
		this.b.K(this.Zd, "click", this.zj);
		this.Me = L("html5-clip-end", a);
		hk(this.b, this.Me, "over", this.om);
		hk(this.b, this.Me, "out", this.nm);
		this.b.K(this.Me, "click", this.zj);
		this.fj = L("html5-progress-screenreader", a);
		this.ah = L("html5-progress-tooltip", a);
		var b = this.gc = new dl;
		b.Ib = this.ah;
		b.Wg = L("html5-progress-tooltip-arrow", b.Ib);
		b.vj = L("html5-progress-tooltip-thumbnail", b.Ib);
		b.oj = L("html5-progress-tooltip-timestamp", b.Ib);
		this.u.If || (this.gc.Vg = l);
		Ta(this, this.gc);
		var b = L("html5-storyboard", a),
			c = this.ed = new $k,
			d = dk(this.u);
		c.Dc = b;
		c.Xd = d.width;
		c.wb = L("html5-storyboard-filmstrip", c.Dc);
		c.Yg = L("html5-storyboard-lens", c.Dc);
		c.rj = L("html5-storyboard-lens-thumbnail", c.Dc);
		c.qj = L("html5-storyboard-lens-timestamp", c.Dc);
		c.Df = L("html5-storyboard-thumbnail", c.wb);
		zd(c.Df);
		this.u.Jf || (this.ed.lm = l);
		Ta(this, this.ed);
		b = L("progress-text", a);
		c = this.fd = new fl;
		c.a = L("current-time", b);
		c.e = L("duration-time", b);
		c.b = L("html5-live-indicator", b);
		N(c.b, "click", x(c.g, c, "seek_to_head"));
		this.fd.z("seek_to_head", x(this.fq, this));
		Ta(this, this.fd);
		this.Ud = L("html5-volume-control", a);
		this.b.K(this.Ud, "keydown", this.gq);
		this.Bc = L("html5-volume-button", this.Ud);
		this.b.K(this.Bc, "click", this.qm);
		this.Pg = L("html5-volume-panel", this.Ud);
		this.Mb = L("html5-volume-slider", this.Ud);
		hk(this.b, this.Mb, "down", this.bq);
		this.Qg = L("html5-volume-slider-foreground", this.Ud);
		this.Og = L("html5-threed-popup-menu", a);
		this.u.Fb && (this.Rg = L("html5-small-player-button", a), this.b.K(this.Rg, "click", this.pm), W(this.Rg), this.yf = L("html5-large-player-button", a), this.b.K(this.yf, "click", this.pm), W(this.yf));
		this.Af = L("html5-fullscreen-button", a);
		this.u.Ig ? this.b.K(this.Af, "click", this.aq) : X(this.Af);
		this.xf = L("html5-quality-button", a);
		this.Ge = L("html5-quality-popup-menu", this.xf);
		ik(this.b, this.Ge, this.Yp);
		this.u.tj && (this.Fe = L("html5-speed-popup-menu", this.xf), ik(this.b, this.Fe, this.$p), W(this.Fe));
		this.Zc = L("html5-watch-later-button", a);
		this.b.K(this.Zc, "click", this.cq);
		this.jj = L("html5-watch-on-youtube-button", a);
		this.b.K(this.jj, "click", this.dq)
	};
	q.enable = function(a) {
		il(this, a, n); - 1 < a.indexOf("seek") && (this.I = n)
	};

	function il(a, b, c) {
		b.forEach(function(a) {
			J(this.oa, "disabled-control-" + a, c)
		}, a)
	}
	q.gq = function(a) {
		var b = a.keyCode;
		if(32 == b || 13 == b) this.qm(), a.preventDefault()
	};
	q.setVolume = function(a, b) {
		Od(this.Bc, "value", b || 0 == a ? "off" : 20 > a ? "min" : 40 > a ? "quiet" : 60 > a ? "normal" : 80 > a ? "loud" : "max");
		Od(this.Bc, "volume", a);
		var c = this.Mb.clientWidth - 6,
			d = this.Mb.style.backgroundPosition.split(" "),
			d = 1 < d.length ? d[1] : "0px";
		if(b) this.Mb.style.backgroundPosition = "-" + c + "px " + d, this.Qg.style.left = "0px";
		else {
			var f;
			0 >= a ? f = 0 : 100 <= a ? f = c : (f = (c - 0) * a / 100, f = 0 >= f ? 0 : f >= c ? c : 0 + Math.round(f));
			this.Qg.style.left = f + "px";
			this.Mb.style.backgroundPosition = "-" + (c - f) + "px " + d
		}
		c = Math.round(a);
		d = c + "% " + S("HTML5_VOLUME_SETTING") + (b ? " " + S("HTML5_VOLUME_MUTED") : "");
		this.Pg.setAttribute("aria-valuenow", c);
		this.Pg.setAttribute("aria-valuetext", d);
		jl(this.Bc, b ? "title-alt" : "title-default");
		this.Bc.setAttribute("aria-label", (b ? S("HTML5_VOLUME_UNMUTE") : S("HTML5_VOLUME_MUTE")) + " " + S("HTML5_CONTROL_TOGGLE"))
	};

	function kl(a) {
		var b = Boolean(a.e && !isNaN(a.af)),
			c = Boolean(a.e && !isNaN(a.$e));
		J(a.Zd, "html5-clip-enabled", b);
		J(a.Gf, "html5-clip-enabled", b);
		J(a.Me, "html5-clip-enabled", c);
		J(a.Hf, "html5-clip-enabled", c);
		b && (a.Zd.style.left = 100 * a.af / a.e + "%", a.Gf.style.width = a.Zd.style.left);
		c && (b = Math.min(100, 100 * a.$e / a.e), a.Me.style.left = b + "%", a.Hf.style.left = b + "%", a.Hf.style.width = 100 - b + "%")
	}
	q.om = function() {
		G(this.Kb, "html5-clip-marker-hover");
		G(this.ah, "html5-clip-marker-hover")
	};
	q.nm = function() {
		H(this.Kb, "html5-clip-marker-hover");
		H(this.ah, "html5-clip-marker-hover")
	};
	q.zj = function(a) {
		a && a.stopPropagation();
		this.af = NaN;
		kl(this);
		this.$e = NaN;
		kl(this)
	};

	function ll(a, b) {
		if(a) {
			var c = L("yt-uix-button-menu-item.active", a);
			c && H(c, "active");
			c = a.querySelector(".yt-uix-button-menu-item" + ('[data-value="' + b + '"]'));
			G(c, "active")
		}
	}
	q.qm = function() {
		this.g("mutetoggled")
	};

	function ml(a, b) {
		a.ji = b;
		var c = Math.round(1E3 * b) / 10;
		a.gj.style.width = c + "%";
		a.He.style.left = c + "%"
	}

	function nl(a, b) {
		b = Math.max(a.ji, b);
		var c = Math.round(1E3 * b) / 10;
		a.hj.style.width = c + "%"
	}

	function ol(a, b) {
		b ? a.Yn ? (id(a.Lb, hl, "html5-stop-button"), jl(a.Lb, "title-stop")) : (id(a.Lb, hl, "html5-pause-button"), jl(a.Lb, "title-pause")) : (id(a.Lb, hl, "html5-play-button"), jl(a.Lb, "title-default"))
	}
	q.eq = function() {
		this.g("playpausetoggled")
	};
	q.Zp = function(a) {
		a.stopPropagation();
		this.Re = l;
		this.g("beginseeking");
		hk(this.D, document, "move", this.km);
		hk(this.D, document, "up", this.Dv)
	};
	q.Dv = function(a) {
		a.stopPropagation();
		this.Re = n;
		jk(this.D);
		this.g("endseeking")
	};
	q.km = function(a) {
		a.stopPropagation();
		a = pl(this, a.pageX).a;
		a != this.ji && (ml(this, a), a *= this.e, (a < this.af || a > this.$e) && this.zj(), this.g("seekto", a, !this.Re))
	};

	function pl(a, b) {
		var c = a.Ie.clientWidth,
			d = ug(a.Ie),
			f = a.He.clientWidth / 2;
		return new cl(b - d.x, c, f, f)
	}
	q.Xp = function() {
		if(!this.Re && !this.I) {
			var a = this.gc;
			a.Vg || W(a.Ib);
			hk(this.A, this.Kb, "move", x(this.Gv, this));
			hk(this.A, this.Kb, "out", x(this.Jo, this));
			hk(this.A, this.He, "down", x(this.Jo, this))
		}
	};
	q.Gv = function(a) {
		var b = pl(this, a.pageX);
		a = this.gc;
		if(!a.Vg) {
			var c = b.width,
				d = b.k,
				f = a.Ib.offsetWidth,
				g = f / 2,
				j = sc(d - g, 2, c - f - 2);
			og(a.Ib, j);
			var k = a.Wg.offsetWidth / 2,
				p = g - k;
			d > c - g ? p = Math.min(d - j - k, f - b.e - 2 - k) : d < g && (p = Math.max(d - k, b.j - 2 - k));
			og(a.Wg, p);
			Ed(a.oj, Hk(a.In * b.a));
			a.Rf && (b = hg(a.Rf, b.a), b != a.a && (a.a = b, el(a)))
		}
	};
	q.Jo = function() {
		jk(this.A);
		this.gc.$()
	};
	q.bq = function(a) {
		this.g("beginvolume");
		G(this.Bc, "changing");
		var b = this.Mb.clientWidth;
		a = 100 * (wg(a, this.Mb).x / b);
		ql(this, a);
		hk(this.F, document, "move", this.Ev);
		hk(this.F, document, "up", this.Fv)
	};
	q.Ev = function(a) {
		var b = this.Mb.clientWidth,
			b = 100 * (wg(a, this.Mb).x / b);
		ql(this, b);
		a.preventDefault()
	};

	function ql(a, b) {
		var c = {
			volume: sc(b, 0, 100),
			muted: n
		};
		a.g("volumechanged", c)
	}
	q.Fv = function() {
		H(this.Bc, "changing");
		jk(this.F);
		this.g("endvolume")
	};
	q.pm = function(a) {
		this.g("sizechangerequested", a.currentTarget == this.yf)
	};
	q.Yp = function(a) {
		a = M(a.currentTarget, "value");
		this.g("qualitychanged", a)
	};
	q.aq = function() {
		this.g("fullscreentoggled")
	};
	q.$p = function(a) {
		a = M(a.currentTarget, "value");
		this.g("speedchanged", parseFloat(a));
		ll(this.Fe, a)
	};
	q.cq = function() {
		I(this.Zc, "html5-async-progress") || (Gk(this.Zc, "html5-async-progress"), this.g("watchlater"))
	};
	q.dq = function() {
		this.g("watchonyoutube")
	};

	function jl(a, b) {
		var c = M(a, b);
		c || (c = M(a, "tooltip-title"), Od(a, "title-default", c));
		a.setAttribute("title", c);
		a.setAttribute("aria-label", c);
		Od(a, "tooltip-title", c);
		Od(a, "tooltip-text", c)
	}
	q.Ab = function(a) {
		a = sc(Math.round(100 * a), 0, 100);
		if(!this.k[a]) {
			var b = document.createElement("div");
			b.style.left = a + "%";
			G(b, "html5-ad-progress", "html5-progress-section");
			this.ij.appendChild(b);
			this.k[a] = b
		}
	};
	q.lg = function(a) {
		a = sc(Math.round(100 * a), 0, 100);
		this.k[a] && (zd(this.k[a]), delete this.k[a])
	};
	q.fq = function() {
		this.g("seekto", Infinity)
	};
	q.G = function() {
		this.u = m;
		jk(this.b);
		jk(this.A);
		jk(this.D);
		jk(this.F);
		this.Zc = this.jj = this.Ge = this.Fe = this.xf = this.Og = this.Rg = this.yf = this.Af = this.Qg = this.Mb = this.Pg = this.Bc = this.Ud = this.He = this.fj = this.hj = this.gj = this.ij = this.Ie = this.Kb = this.Lb = this.oa = m;
		gl.C.G.call(this)
	};

	function rl(a) {
		return a ? -1 != a.toString().search(/(?:true|1)/i) : n
	}

	function sl(a, b) {
		if(a) {
			var c = "getErrorCode" in a ? a.getErrorCode() : m;
			c !== m ? b.error_code = c : (c = a.message, 50 < c.length && (c = c.substring(0, 47) + "..."), b.error_message = c)
		}
	}

	function tl(a, b) {
		if(a[b]) return rl(a[b]);
		var c = b.toLowerCase(),
			d;
		for(d in a)
			if(d && d.toLowerCase() == c) return rl(a[d]);
		return n
	};
	var ul = [4, 2];

	function vl(a) {
		var b = t("yt.www.watch.ads.handleMoveGutCompanion");
		b && b(1 == a ? l : n)
	}

	function wl(a) {
		var b = t("showAfvCompanionAdDiv");
		b && b(1 == a)
	};

	function xl(a) {
		return Ia(a.b, "908301")
	};

	function yl(a, b) {
		this.a = a;
		this.b = b
	}
	yl.prototype.e = m;
	yl.prototype.j = NaN;

	function zl(a, b, c) {
		a.a.g("AD_LOGGING_EVENT", b, c)
	}

	function Al(a) {
		var b = {},
			c = a.a.Sa,
			d = Bl(a.a),
			f = a.a.o && Nj(a.a.o) ? Nj(a.a.o) : m;
		d && 0 < d && (b.ad_len = d);
		if(c && c.J) b.ad_v = c.J;
		else if(f) {
			c = tf(f);
			b.ad_dom = c;
			if(!(c = Cl(a.b)))
				if(c = a.b.getEnvironmentData(), !(c = Ia(c.b, "921806"))) c = a.b.getEnvironmentData(), c = Ia(c.b, "921805");
			c && (b.ad_v_url = f)
		}
		b.at = a.a.getType();
		return b
	}

	function Dl(a) {
		a.e || (a.e = "InstreamAdDisplay (" + a.a.getType() + ")")
	};

	function El(a, b) {
		P.call(this);
		this.a = a;
		this.a.z("control_toggle_play_pause", this.Cm, this);
		this.a.z("control_play", this.Kf, this);
		this.a.z("control_pause", this.Oj, this);
		this.b = b;
		this.k = new yl(this, this.a);
		this.e = new gk(this)
	}
	z(El, P);
	q = El.prototype;
	q.o = m;
	q.Sa = m;
	q.Nk = n;
	q.Xf = m;
	q.Yf = m;
	q.Zf = m;
	q.vl = function() {
		this.k.j = y();
		var a = m,
			b = "";
		try {
			a = this.b.getSelectedCreative(), b = a.getMediaUrl("video/x-flv") || a.getMediaUrl("video/mp4")
		} catch(c) {
			Fl(this, c);
			return
		}
		a = b;
		if(!(b = a === m)) b = wf(a), b = !vf(b);
		b ? a = m : (a = rf(a), a = a.v || a.video_id, a = a === m ? m : new si({
			video_id: a
		}));
		(this.Sa = a) ? (a = this.a.getEnvironmentData(), a.aj && (this.Sa = new si({
			video_id: "szCiX51Kq8s"
		})), this.Sa.$b = l, Gl(this.a, -1, {
			video_id: this.Sa.J
		}), this.Sa.z("onStatusFail", this.Em, this), this.Sa.z("videoinfo", this.Fm, this), a = new Xj(a.e), a.S = "adunit", a.Zb = l, a = bk(a, this.Sa), Hi(this.Sa, a)) : (Gl(this.a, -1), Hl(this))
	};

	function Il(a) {
		a.Sa && (a.Sa.ia("onStatusFail", a.Em, a), a.Sa.ia("videoinfo", a.Fm, a))
	}
	q.Fm = function() {
		Il(this);
		var a = this.a.getEnvironmentData();
		Ai(this.Sa, x(this.pu, this), a.Ef)
	};
	q.pu = function() {
		var a = lk(new kk(this.a.getEnvironmentData()), this.Sa),
			b = this.b.getSelectedCreative(),
			a = new Mc(a.Ua.i ? Th(a.Ua) : Sh(a.Ua));
		a.a.set("autoplay", "1");
		b.setMediaUrl(a.toString());
		Hl(this)
	};

	function Hl(a) {
		vl(1);
		wl(1);
		var b = a.a.e,
			c = a.a.getRootNode();
		a.a.getEnvironmentData();
		a.Zf = c;
		a.o = Jl(a.a, l);
		a.Xf = L("video-ad-time-left", c || b.a);
		var c = L("html5-ad-progress-list", c || b.a),
			d = b.createElement("div");
		G(d, "html5-ad-progress", "html5-progress-section");
		b.appendChild(c, d);
		a.Yf = d;
		G(a.Zf, "ad-showing", "ad-interrupting");
		a.e.K(Kl(a.a.b), "mouseup", a.hr);
		a.e.K(a.o, "timeupdate", a.er);
		a.a.z("onResize", a.Sj, a);
		try {
			a.e.K(a.b, google.ima.AdErrorEvent.Type.AD_ERROR, a.gr), a.e.K(a.b, google.ima.AdEvent.Type.CLICK, a.fr), a.e.K(a.b, google.ima.AdEvent.Type.COMPLETE, a.dr), a.e.K(a.b, google.ima.AdEvent.Type.PAUSED, a.Wm), a.e.K(a.b, google.ima.AdEvent.Type.STARTED, a.Xm), a.Sj(), a.b.start()
		} catch(f) {
			Fl(a, f)
		}
	}
	q.Xm = function() {
		this.Nk = l;
		if(!this.D) {
			this.D = l;
			var a = this.k;
			Dl(a);
			var b = Al(a);
			if(isNaN(a.j)) Dl(a);
			else {
				var c = y() - a.j;
				b.ad_stl = c
			}
			zl(a, 4, b);
			Ll(this.a, 1, this.Tn())
		}
		Jj(this.a, l);
		Gl(this.a, 1);
		this.g("adPlay", this)
	};
	q.Wm = function() {
		Ml(this.a) ? this.Kf() : (this.Nk = n, Jj(this.a, n), Gl(this.a, 2))
	};
	q.dr = function() {
		var a = this.k;
		Dl(a);
		var b = Al(a),
			c = a.a.o ? a.a.o.getType() : m;
		c ? b.ad_fmt = c : Dl(a);
		zl(a, 5, b);
		Gl(this.a, 0);
		Ll(this.a, 2, this.Vn());
		this.g("adEnd", this)
	};
	q.gr = function(a) {
		Fl(this, a.getError())
	};

	function Fl(a, b) {
		Gl(a.a, 0);
		a.g("adError", b)
	}
	q.Em = function() {
		Il(this);
		Fl(this, Error("Request to get video data failed."))
	};
	q.fr = function() {
		var a = this.k;
		Dl(a);
		var b = Al(a);
		if(a.i) {
			var c = Nl(a.b),
				d = a.i.y - c.top,
				d = Math.round(a.i.x - c.left) + "x" + Math.round(d);
			b.ck_xy = d;
			b.ck_wh = c.width + "x" + c.height
		}
		zl(a, 15, b);
		this.a.getEnvironmentData().pb || R(x(this.Kf, this), 0);
		this.g("select")
	};
	q.hr = function(a) {
		this.k.i = new D(a.pageX, a.pageY)
	};
	q.er = function() {
		var a = Hk(this.b.getRemainingTime());
		this.Xf.innerHTML = a;
		0 == Bl(this) && (a = this.o, Pj(a, a.duration || 0));
		a = Bl(this) ? this.o.getCurrentTime() / Bl(this) : 0;
		a = Math.round(1E3 * a) / 10;
		this.Yf.style.width = a + "%"
	};
	q.G = function() {
		this.a.ia("control_toggle_play_pause", this.Cm, this);
		this.a.ia("control_play", this.Kf, this);
		this.a.ia("control_pause", this.Oj, this);
		this.a.ia("onResize", this.Sj, this);
		jk(this.e);
		Il(this);
		this.b.destroy();
		var a = this.a.e;
		this.o && (this.a.releaseVideoElement(), this.o = m);
		this.Xf && (this.Xf.innerHTML = "", this.Xf = m);
		this.Yf && (a.Km(this.Yf), this.Yf = m);
		this.Zf && (H(this.Zf, "ad-showing", "ad-interrupting"), this.Zf = m);
		El.C.G.call(this)
	};
	q.getType = function() {
		return "1_2"
	};

	function Bl(a) {
		return a.o ? a.o.getDuration() : m
	}
	q.Tn = function() {
		return {}
	};
	q.Vn = function() {
		return {}
	};
	q.Cm = function() {
		this.Nk ? this.Oj() : this.Kf()
	};
	q.Kf = function() {
		this.o && (this.b.resume(), this.Xm())
	};
	q.Oj = function() {
		this.o && (this.b.pause(), this.Wm())
	};
	q.Sj = function() {
		var a = Ol(this.a, l);
		this.b.resize(a.width, a.height, google.ima.ViewMode.NORMAL)
	};

	function Pl(a, b) {
		El.call(this, a, b)
	}
	z(Pl, El);
	Pl.prototype.getType = function() {
		return "2_2"
	};

	function Ql(a, b) {
		this.j = a;
		this.b = b;
		this.j.getType()
	}

	function Rl(a, b, c) {
		a.j.g("AD_LOGGING_EVENT", b, c)
	}

	function Sl(a) {
		var b = {};
		a.e && a.a && (b.ot = a.a - a.e);
		var c;
		c = a.b.isFullscreen() ? 2 : a.b.getEnvironmentData().De ? 1 : 0;
		b.ad_ps = c;
		b.at = a.j.getType();
		return b
	};

	function Tl(a, b) {
		P.call(this);
		this.a = a;
		this.b = b;
		this.k = new Ql(this, a);
		this.e = new gk(this)
	}
	z(Tl, P);
	q = Tl.prototype;
	q.od = m;
	q.Dm = n;
	q.vl = function() {
		var a = this.a.getRootNode();
		G(a, "ad-showing");
		this.od = Ul(this.a.b);
		G(this.od, "ad-overlay");
		this.e.K(this.od, "mouseup", this.ar);
		try {
			Gg(this.od);
			this.e.K(this.b, google.ima.AdEvent.Type.USER_CLOSE, this.Yq);
			this.e.K(this.b, google.ima.AdEvent.Type.CLICK, this.$q);
			this.e.K(this.b, google.ima.AdErrorEvent.Type.AD_ERROR, this.Zq);
			Vl(this, google.ima.ViewMode.NORMAL);
			this.Qf();
			this.b.start();
			var b = this.k;
			b.e = y();
			var c = Sl(b);
			Rl(b, 3, c);
			this.Dm = l;
			this.a.z("onResize", this.Qf, this);
			this.a.z("onStateChange", this.zm, this);
			this.g("adEnd", this)
		} catch(d) {
			this.g("adError", d)
		}
	};
	q.G = function() {
		jk(this.e);
		this.a.ia("onResize", this.Qf, this);
		this.a.ia("onStateChange", this.zm, this);
		var a = this.a.getRootNode();
		H(a, "ad-showing");
		this.b && (this.b.destroy(), this.b = m);
		this.od && H(this.od, "ad-overlay");
		this.od = m;
		Tl.C.G.call(this)
	};
	q.Yq = function() {
		var a = this.k;
		a.a = y();
		var b = Sl(a);
		Rl(a, 6, b)
	};
	q.$q = function() {
		this.a.pauseVideo();
		var a = this.k;
		a.a = y();
		var b = Sl(a);
		if(a.i) {
			var c = Nl(a.b),
				d = a.i.y - c.top,
				d = Math.round(a.i.x - c.left) + "x" + Math.round(d);
			b.ck_xy = d;
			b.ck_wh = c.width + "x" + c.height
		}
		Rl(a, 100, b)
	};
	q.ar = function(a) {
		this.k.i = a.target == a.currentTarget ? m : new D(a.pageX, a.pageY)
	};
	q.Zq = function(a) {
		a = a.getError();
		this.g("adError", a)
	};
	q.zm = function(a) {
		O(a.a, 16) && Vl(this, google.ima.ViewMode.NORMAL)
	};

	function Vl(a, b) {
		a.A != b && (a.A = b, a.Dm && a.Qf())
	}
	q.Qf = function() {
		var a = Gg(this.od);
		this.b.resize(a.width, a.height, this.A)
	};

	function Wl(a, b) {
		Tl.call(this, a, b)
	}
	z(Wl, Tl);
	Wl.prototype.getType = function() {
		return "2_1"
	};

	function Xl(a, b) {
		P.call(this);
		this.a = b
	}
	z(Xl, P);
	Xl.prototype.vl = function() {
		var a = t("afcAdCall");
		a && a();
		a = {};
		a.ad_id = this.a;
		a.at = this.getType();
		this.g("AD_LOGGING_EVENT", 3, a);
		this.g("adEnd", this)
	};

	function Yl() {
		Xl.call(this, 0, "")
	}
	z(Yl, Xl);
	Yl.prototype.getType = function() {
		return "2_3"
	};

	function Zl(a, b) {
		this.a = a;
		this.b = b
	}

	function $l(a, b) {
		var c = am(a);
		c.ad_man = b;
		bm(a.b.Fc, 12, c)
	}

	function am(a) {
		var b = {};
		b.l_ns = a.a.rk();
		b.l_state = a.a.e;
		b.sst = a.a.b;
		b.sidx = a.a.F;
		var c = a.a.mc;
		c && (b.at = c.getType());
		(a = a.a.ng) && (b.ad_id = a);
		return b
	};

	function cm(a, b, c, d, f) {
		P.call(this);
		this.b = a;
		this.F = c;
		this.a = d;
		this.e = f;
		this.A = new Zl(this, d);
		this.D = new gk(this);
		this.k = new gk(this)
	}
	z(cm, P);
	q = cm.prototype;
	q.mc = m;
	q.ng = "";
	q.load = function() {
		if(!Ml(this.a)) {
			var a = Ol(this.a),
				b = 1 == this.e ? 190 : 200;
			if(200 > a.width || a.height < b) {
				var b = this.A,
					c = am(b);
				c.ck_wh = a.width + "x" + a.height;
				dm(b.b, 14, c);
				this.rd();
				return
			}
		}
		Zi(this.a.Lf, this.Wr, this.Se, this)
	};
	q.Wr = function(a) {
		var b = this.A,
			c = am(b);
		bm(b.b.Fc, 9, c);
		b = new google.ima.AdsRequest;
		b.adTagUrl = this.bk();
		c = this.a.getEnvironmentData().Xc || em;
		b.nonLinearAdSlotHeight = c.height;
		b.linearAdSlotHeight = c.height;
		b.nonLinearAdSlotWidth = c.width;
		b.linearAdSlotWidth = c.width;
		var d = this.e;
		if(c = t("yt.www.watch.ads.setGutSlotSizes")) {
			var f = 1 == d,
				d = Ia(ul, d);
			c(f, d)
		}
		this.D.K(a, google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.pr);
		this.D.K(a, google.ima.CustomContentLoadedEvent.Type.CUSTOM_CONTENT_LOADED, this.qr);
		this.D.K(a, google.ima.AdErrorEvent.Type.AD_ERROR, this.or);
		try {
			a.requestAds(b, this)
		} catch(g) {
			this.Se(g)
		}
	};
	q.pr = function(a) {
		if(a.getUserRequestContext() === this) {
			var b = {},
				c = new google.ima.AdsRenderingSettings;
			c.baseYouTubeUrl = this.a.getEnvironmentData().Xa;
			c.contentId = this.a.getVideoData().J;
			try {
				var d = a.getAdsManager(b)
			} catch(f) {
				this.Se(f);
				return
			}
			this.k.K(d, google.ima.AdEvent.Type.LOADED, x(this.Xt, this, d));
			this.k.K(d, google.ima.AdErrorEvent.Type.AD_ERROR, x(this.Wt, this, d));
			B([google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED], function(a) {
				this.k.K(d, a, aa)
			}, this);
			a = Ol(this.a, l);
			try {
				d.init(a.width, a.height, google.ima.ViewMode.NORMAL)
			} catch(g) {
				d.destroy(), this.Se(g)
			}
		}
	};
	q.Xt = function(a, b) {
		jk(this.k);
		var c = b.getAd(),
			d = c.isLinear();
		$l(this.A, d ? "instream" : "overlay");
		switch(d ? this.bl(a, c) : this.dl(a, c)) {
			case 0:
				this.g("adLoaded", this);
				break;
			case 1:
				a.destroy();
				this.rd();
				break;
			case 2:
				c = this.A;
				dm(c.b, 21, am(c));
				a.destroy();
				this.rd();
				break;
			default:
				a.destroy()
		}
	};
	q.Wt = function(a, b) {
		jk(this.k);
		a.destroy();
		this.Se(b.getError())
	};
	q.qr = function(a) {
		a.getUserRequestContext() === this && ($l(this.A, "customContent"), this.rd())
	};
	q.or = function(a) {
		var b = a.getError();
		b.getType() == google.ima.AdError.Type.AD_LOAD && a.getUserRequestContext() === this && this.Se(b)
	};
	q.Se = function(a) {
		if(!(a instanceof Ui)) {
			var b = this.A,
				c = am(b);
			a && sl(a, c);
			dm(b.b, 32, c);
			this.rd()
		}
	};
	q.rd = function() {
		this.g("adError", this)
	};
	q.G = function() {
		jk(this.D);
		jk(this.k);
		cm.C.G.call(this)
	};

	function fm(a, b, c, d, f) {
		cm.call(this, a, 0, c, d, f);
		this.I = new fk(this.a.vb, this.a.getEnvironmentData());
		(a = t("setAfvCompanionVars")) && a(1 == f)
	}
	z(fm, cm);
	q = fm.prototype;
	q.rk = function() {
		return 2
	};
	q.bk = function() {
		var a = this.I,
			b = this.e,
			c = 0 == this.b || -1 == this.b ? this.b : 1E3 * this.b,
			d = {};
		d.eid = a.a.Ya;
		d.videoad_start_delay = c;
		d.scs = a.a.Vc;
		d.client = a.a.Od;
		d.description_url = a.a.Ee;
		d.loeid = a.u.b ? a.u.b.join(",") : "";
		d.cust_gender = a.a.Yb;
		d.host = a.a.Md;
		d.hl = a.u.i;
		d.max_ad_duration = a.a.Sc;
		a.a.xc && (d.adtest = "on");
		isNaN(a.a.I) || (d.cust_age = a.a.I);
		isNaN(a.a.ha) || (d.hostTierId = a.a.ha);
		a.a.Ga && (d.yt_pt = a.a.Ga);
		d.ytdevice = a.a.Qd;
		switch(b) {
			case 1:
				d.ad_type = "video";
				a.a.wa && (d.channel = a.a.wa.join("+"));
				break;
			case 2:
				d.ad_type = "text_image_flash", a.a.Ca && (d.channel = a.a.Ca.join("+"))
		}
		a.a.vc && (d.lsv = 1);
		var a = d,
			b = {},
			f;
		for(f in a) ea.call(h, a[f]) && (b[f] = a[f]);
		return "//googleads.g.doubleclick.net/pagead/ads?" + pf(b, "&")
	};
	q.bl = function(a, b) {
		this.ng = b.getAdId();
		this.mc = new Pl(this.a, a);
		return 0
	};
	q.dl = function(a, b) {
		if(gm(this.a)) return 1;
		0 == this.b && (this.b = 10, bm(this.a.Fc, 1, h));
		wl(this.e);
		this.ng = b.getAdId();
		this.mc = new Wl(this.a, a);
		return 0
	};
	q.rd = function() {
		gm(this.a) ? fm.C.rd.call(this) : this.a.vb.cc || 2 == this.e ? (this.mc = new Yl, this.g("adLoaded", this)) : fm.C.rd.call(this)
	};

	function hm(a) {
		if(a.R) {
			this.bp = a.R;
			this.Yo = a.tc;
			var b = this.bp,
				c = b.indexOf(";sz=");
			a = of(b.substring(c), ";");
			b = b.substring(0, c).split("pfadx");
			if(a = 2 != b.length ? m : {
					Xv: b[0],
					Yv: b[1],
					Zv: a
				}) this.Xo = a.Xv, this.Zo = a.Yv, this.$o = a.Zv
		}
	}
	q = hm.prototype;
	q.bp = "";
	q.Xo = "";
	q.Yo = n;
	q.zl = "";
	q.Zo = "";
	q.$o = m;

	function im(a, b) {
		var c = bb(a.$o);
		b.ui && b.ui.length && (c.sz = b.ui.join(","));
		b.ro && (c.pos = b.ro);
		b.dw && (c.dc_seed = b.dw);
		b.il && (c.tile = b.il.toString());
		b.gl && (c.kmyd = b.gl);
		b.to && (fa(c["!c"]) ? c["!c"].push("html5") : c["!c"] = c["!c"] ? [c["!c"], "html5"] : "html5", c.html5 = "1");
		b.ti && (0 < b.ti.length && a.Yo) && (c.ciu_szs = b.ti.join(","));
		"pfadx" == b.fl ? (c.dcmt = "text/xml", Oh() && (c.kmob = "ps3")) : "dcmt" in c && delete c.dcmt;
		var d;
		if(!(d = b.bx)) a.zl || (a.zl = Math.floor(999999999 * Math.random()).toString()), d = a.zl;
		c.ord = d;
		c = pf(c, ";");
		return [a.Xo, b.fl, a.Zo, ";", c, "?"].join("")
	};

	function jm(a, b) {
		Tl.call(this, a, b)
	}
	z(jm, Tl);
	jm.prototype.Qf = function() {};
	jm.prototype.getType = function() {
		return "1_3"
	};

	function km(a, b, c, d, f) {
		cm.call(this, a, 0, c, d, f);
		this.I = new hm(this.a.vb)
	}
	z(km, cm);
	km.prototype.rk = function() {
		return 1
	};
	km.prototype.bk = function() {
		var a;
		a: switch(a = this.I, this.e) {
			case 1:
				a = im(a, {
					fl: "pfadx",
					ui: ["480x360"],
					ro: 0 == this.b ? "pre" : -1 == this.b ? "post" : "mid;pos=" + this.F,
					il: this.F + 1,
					gl: "watch-longform-ad",
					to: l,
					ti: ["300x60"]
				});
				break a;
			case 4:
				a = im(a, {
					fl: "pfadx",
					gl: "watch-longform-ad",
					ui: ["480x70"],
					il: 1,
					to: l,
					ti: ["300x250"]
				});
				break a;
			default:
				a = ""
		}
		return a
	};
	km.prototype.bl = function(a, b) {
		this.ng = b.getAdId();
		this.mc = new El(this.a, a);
		return 0
	};
	km.prototype.dl = function(a, b) {
		this.ng = b.getAdId();
		var c = b.getTraffickingParameters();
		return tl(c, "rm") ? (1 != this.e && (c = t("closeInPageAdIFrame")) && c(), lm(a), 2) : tl(c, "blockAllAds") ? (lm(a), this.mc = new jm(this.a, a), 0) : tl(c, "hideMaster") ? (this.mc = new jm(this.a, a), 0) : 1
	};

	function lm(a) {
		a.sendImpressionUrls && a.sendImpressionUrls()
	};

	function mm(a, b, c, d) {
		this.a = a;
		this.j = b;
		this.u = d;
		this.b = Zf || $f ? "html5_ios" : ag ? "html5_android" : Oh() ? "html5_ps3" : "leanback" == c ? "html5_tv_leanback" : "html5"
	}

	function nm(a, b) {
		if(!a.a.A || !a.a.Ma) return "";
		var c = b ? "169843:nbcu_olympics_html5_live" : "10613:10613_youtube_" + a.b,
			d = b ? a.u.Wi : "youtube_watch_" + a.b,
			f = b ? "169843:nbcu_olympics_html5_live" : "10613:10613_youtube_" + a.b.split("_")[0],
			g = {};
		g.nw = b ? "169843" : "10613";
		g.asnw = a.a.A;
		g.ssnw = a.a.A;
		g.caid = a.a.Ma;
		g.prof = c;
		g.vdur = a.j;
		g.csid = d;
		g.resp = "vast2";
		g.crtp = "vast2s";
		g.flag = "+emcr";
		b && (g.afid = "38128742", g.sfid = "205016");
		c = {};
		isNaN(a.a.Z) || (c._fw_d_001 = a.a.Z);
		a.a.ea && (c._fw_d_002 = a.a.ea);
		a.a.Da && (c["_fwu:10613:lang"] = a.a.Da);
		c._fw_yt_type = a.a.k ? "short" : "long";
		d = a.u.Kg;
		if(b && d)
			for(var d = d.split(","), j = 0; j < d.length; j++) {
				var k = d[j].split(":");
				2 == k.length && (c[k[0]] = k[1])
			}
		d = {
			ptgt: "a",
			slid: "preroll",
			slau: "preroll",
			w: "480",
			h: "360",
			tpos: "0",
			tpcl: "preroll"
		};
		d.envp = f;
		d.cd = "1440,900";
		f = (b ? "//29773c.v.fwmrm.net/ad/g/1?" : "//2975c.v.fwmrm.net/ad/g/1?") + pf(g, "&") + ";" + pf(c, "&") + ";" + pf(d, "&");
		if(b) {
			g = "";
			c = a.u.F;
			for(d = 0; d < c.length; d++) j = {
				ptgt: "p"
			}, j.slid = c[d].width + "_" + c[d].height, j.slau = "FW Video-" + c[d].width + "x" + c[d].height + "-Image", j.w = c[d].width, j.h = c[d].height, j.flag = "+cmpn", g = g + ";" + pf(j, "&");
			f = f + g
		}
		return f
	};

	function om(a, b, c) {
		El.call(this, a, b);
		this.A = c
	}
	z(om, El);
	om.prototype.Tn = function() {
		for(var a = {}, b = [], c = this.a.getEnvironmentData().F, d = 0; d < c.length; d++) {
			var f = c[d].width,
				g = c[d].height,
				j = this.A.getCompanionAds(f, g, {}),
				k = {};
			0 < j.length && j[0].getContent() && (k.html_resource = j[0].getContent(), a["companion_" + f + "x" + g] = k, b.push(f + "x" + g))
		}
		a.instream_type = "preroll";
		a.companion_sizes = b.join(",");
		return a
	};
	om.prototype.Vn = function() {
		return {
			instream_type: "preroll"
		}
	};
	om.prototype.getType = function() {
		return "4_2"
	};

	function pm(a, b, c, d, f) {
		cm.call(this, a, 0, c, d, f);
		this.I = new mm(this.a.vb, this.a.getVideoData().ya, this.a.getEnvironmentData().S, this.a.getEnvironmentData())
	}
	z(pm, cm);
	pm.prototype.rk = function() {
		return 4
	};
	pm.prototype.bk = function() {
		return Ml(this.a) ? nm(this.I, l) : nm(this.I, n)
	};
	pm.prototype.bl = function(a, b) {
		if(0 != this.b) return 1;
		this.mc = new om(this.a, a, b);
		return 0
	};
	pm.prototype.dl = function() {
		return 1
	};

	function qm(a, b, c, d) {
		switch(c) {
			case 1:
				return new fm(a, 0, b, d, 1);
			case 2:
				return new fm(a, 0, b, d, 2);
			case 3:
				return new km(a, 0, b, d, 1);
			case 4:
				return new km(a, 0, b, d, 4);
			case 5:
				return new pm(a, 0, b, d, 1);
			default:
				return m
		}
	};

	function rm(a, b, c) {
		P.call(this);
		this.id = a;
		this.index = b || 0;
		this.Tj = !!c
	}
	z(rm, P);
	q = rm.prototype;
	q.Tj = n;
	q.Mn = n;
	q.Pb = m;
	q.Oa = m;
	q.Ok = n;
	q.load = function() {
		this.Pb && (this.Pb.z("adLoaded", this.Ro, this), this.Pb.z("adError", this.jl, this), this.Pb.load())
	};
	q.Ro = function() {
		sm(this);
		this.Pb.mc ? (this.Oa = this.Pb.mc, this.g("adLoaded", this, this.Pb.b)) : this.jl()
	};
	q.jl = function() {
		sm(this);
		this.g("adError", this)
	};

	function sm(a) {
		a.Pb.ia("adLoaded", a.Ro, a);
		a.Pb.ia("adError", a.jl, a)
	}

	function tm(a) {
		a.Ok ? a.Oa instanceof Tl && Vl(a.Oa, google.ima.ViewMode.NORMAL) : (a.Ok = l, a.Oa.z("adPlay", a.Lv, a), a.Oa.z("adEnd", a.Kv, a), a.Oa.z("adError", a.Ov, a), a.Oa.z("AD_LOGGING_EVENT", a.Mv, a), a.Oa.z("select", a.Nv, a), a.Oa.vl())
	}
	q.Lv = function() {
		this.g("adPlay", this)
	};
	q.Kv = function() {
		this.g("adEnd", this)
	};
	q.Nv = function() {
		this.Mn = l
	};
	q.Mv = function(a, b) {
		this.g("AD_LOGGING_EVENT", a, b)
	};
	q.Ov = function(a) {
		this.g("adError", this, a)
	};
	q.G = function() {
		rm.C.G.call(this);
		Va(this.Pb);
		Va(this.Oa)
	};

	function um(a, b) {
		P.call(this);
		this.fa = b;
		this.b = a;
		this.e = "unloaded";
		this.a = [];
		this.k = [];
		this.A = [];
		this.D = {}
	}
	z(um, P);
	q = um.prototype;
	q.start = NaN;
	q.Ik = l;
	q.ce = n;
	q.isVisible = l;
	q.Ic = NaN;
	q.Mm = n;
	q.Yh = NaN;
	q.Qb = function() {
		return isNaN(this.start) ? m : 0 == this.start ? vm(this) && wm(this) ? -2147483648 : 0 : -1 == this.start || -2 == this.start ? 2147483647 : 1E3 * this.start
	};

	function vm(a) {
		return "loaded" == a.e || "error" == a.e
	}

	function wm(a) {
		vm(a) || e(Error("Preroll status is undefined before ad load."));
		return 0 == a.start && a.ce
	}
	q.Qh = function() {
		this.e = "loading";
		var a = this.a.length,
			b = this.A.shift();
		!b || 0 == a ? (this.e = "error", B(this.a, Va), this.a = [], xm(this)) : (this.k = [], B(this.a, function(a) {
			if(!this.D[a.id]) {
				a.Tj || (this.Mm = l);
				var d = qm(this.start, a.index, b, this.b);
				a.Pb = d;
				this.k.push(a)
			}
		}, this), 0 == this.start && ym(this.b, "nl"), zm(this))
	};
	q.getId = function() {
		return this.fa
	};

	function zm(a) {
		if(a.k.length) {
			var b = a.k.shift();
			b.z("adLoaded", a.Hm, a);
			b.z("adError", a.Im, a);
			b.load()
		} else a.Mm && !Ga(a.a, function(a) {
			return !!a.Oa && !a.Tj
		}) && a.A.length ? (b = new rm(a.Yh), a.a.push(b), a.Qh()) : (a.e = "loaded", xm(a))
	}

	function Am(a, b) {
		b.ia("adEnd", a.Om, a);
		b.ia("adError", a.Pm, a);
		b.ia("AD_LOGGING_EVENT", a.Nm, a)
	}
	q.Im = function(a) {
		this.Yh = !this.Yh ? a.id : Math.min(this.Yh, a.id);
		Ka(this.a, a);
		Va(a);
		zm(this)
	};
	q.Hm = function(a, b) {
		this.start = b;
		a.ia("adLoaded", this.Hm, this);
		a.ia("adError", this.Im, this);
		this.D[a.id] = l;
		if(0 == this.fa) {
			var c = a.Oa.getType();
			this.b.A.at = c
		}
		c = a.Oa;
		c instanceof El ? this.ce = l : c instanceof Xl ? this.isVisible = n : c instanceof jm && (this.isVisible = n);
		zm(this)
	};

	function xm(a) {
		a.g("adBreakComplete", a)
	}
	q.G = function() {
		um.C.G.call(this);
		B(this.a, Va);
		this.a = [];
		this.A = m
	};
	q.Om = function(a) {
		this.ce && (Am(this, a), a = this.b, a.vb.Tc && !a.Ej && (ve(a.getEnvironmentData().Xa + "mac_204?action_fcts=1"), a.Ej = l), this.a[this.Ic].Mn && (this.Ik = n));
		xm(this)
	};
	q.Pm = function(a, b) {
		if(b) {
			var c = {};
			sl(b, c);
			c.sst = this.start;
			c.sidx = this.Ic;
			dm(this.b, 32, c)
		}
		Am(this, a);
		xm(this)
	};
	q.Nm = function(a, b) {
		b.sst = this.start;
		b.sidx = this.Ic;
		bm(this.b.Fc, a, b)
	};

	function Bm(a) {
		if("undefined" != typeof DOMParser) return(new DOMParser).parseFromString(a, "application/xml");
		if("undefined" != typeof ActiveXObject) {
			var b = new ActiveXObject("MSXML2.DOMDocument");
			if(b) {
				b.resolveExternals = n;
				b.validateOnParse = n;
				try {
					b.setProperty("ProhibitDTD", l), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256)
				} catch(c) {}
			}
			b.loadXML(a);
			return b
		}
		e(Error("Your browser does not support loading xml documents"))
	};

	function Cm(a) {
		this.Gq = a
	};

	function Dm(a) {
		this.a = a
	}
	Dm.prototype.b = 0;
	Dm.prototype.j = 0;

	function Em(a) {
		this.apply(a)
	}
	var Fm = {
		ZC: "m",
		xz: "f"
	};
	Em.prototype.apply = function(a) {
		this.D = a.ad_slots;
		this.F = a.ad_breaks;
		this.Qa = a.ad_flags || 0;
		this.I = parseInt(a.cust_age, 10);
		this.Ya = a.cafe_experiment_id;
		var b = parseInt(a.cust_gender, 10);
		isNaN(b) || (this.Yb = b);
		this.R = a.ad_tag;
		this.xc = !!a.adtest;
		this.Z = parseInt(a.ad_age, 10);
		this.zc = a.cid;
		this.Ee = a.ad_eurl;
		this.da = a.excluded_ads;
		this.ea = $a(Fm, function(b) {
			return b == a.ad_gender
		});
		this.tc = !!a.mpu;
		this.Md = a.ad_host;
		this.ha = parseInt(a.ad_host_tier, 10);
		this.yc = 1 == a.ad_logging_flag;
		this.j = rl(a.aftv);
		this.i = rl(a.afv);
		this.e = rl(a.dclk);
		this.vc = 1 == a.livestream;
		this.b = 1 == parseInt(a.tpas_ad_type_id, 10);
		this.wc = !!a.fqsf;
		this.a = rl(a.instream);
		this.Ba = rl(a.mpu);
		this.Tc = rl(a.shortform);
		this.k = rl(a.sffb);
		this.Vc = "1" == a.as_launched_in_country;
		b = a.ad_channel_code_instream;
		this.wa = v(b) ? b.split(",") : [];
		this.Da = a.ad_language_iso639_2;
		b = parseInt(a.afv_instream_max, 10);
		isNaN(b) && (b = 15E3);
		this.Sc = b;
		b = a.ad_channel_code_overlay;
		this.Ca = v(b) ? b.split(",") : [];
		this.Ga = a.yt_pt;
		this.Od = a.ad_video_pub_id;
		this.cc = this.j && this.k && !this.i;
		this.Ac = this.i || this.cc;
		this.Qd = parseInt(a.ad_device, 10);
		this.Ma = a.tpas_video_id;
		this.A = a.tpas_partner_id
	};

	function Gm(a, b) {
		this.j = a;
		b && (this.b = b)
	};

	function Hm(a, b) {
		var c = b || {},
			d = c.document || document,
			f = document.createElement("SCRIPT"),
			g = {
				qp: f,
				sh: h
			},
			j = new Ti(Im, g),
			k = m,
			p = c.timeout != m ? c.timeout : 5E3;
		0 < p && (k = window.setTimeout(function() {
			Jm(f, l);
			j.Xe(new Km(1, "Timeout reached for loading script " + a))
		}, p), g.sh = k);
		f.onload = f.onreadystatechange = function() {
			if(!f.readyState || "loaded" == f.readyState || "complete" == f.readyState) Jm(f, c.nr || n, k), j.bh(m)
		};
		f.onerror = function() {
			Jm(f, l, k);
			j.Xe(new Km(0, "Error while loading script " + a))
		};
		sd(f, {
			type: "text/javascript",
			charset: "UTF-8",
			src: a
		});
		g = d.getElementsByTagName("HEAD");
		(!g || 0 == g.length ? d.documentElement : g[0]).appendChild(f);
		return j
	}

	function Im() {
		if(this && this.qp) {
			var a = this.qp;
			a && "SCRIPT" == a.tagName && Jm(a, l, this.sh)
		}
	}

	function Jm(a, b, c) {
		c != m && s.clearTimeout(c);
		a.onload = aa;
		a.onerror = aa;
		a.onreadystatechange = aa;
		b && window.setTimeout(function() {
			zd(a)
		}, 0)
	}

	function Km(a, b) {
		var c = "Jsloader error (code #" + a + ")";
		b && (c += ": " + b);
		ra.call(this, c);
		this.code = a
	}
	z(Km, ra);

	function Lm() {}
	ba(Lm);
	q = Lm.prototype;
	q.Qc = m;
	q.version = m;
	q.load = function(a) {
		if(this.Qc) return $i(this.Qc);
		this.Qc = new Ti;
		this.version = a ? a : "3";
		Zi(Hm("3.1" == this.version ? "//s0.2mdn.net/instream/html5/ima3_loader.js" : "//s0.2mdn.net/instream/html5/ima.js"), this.xw, this.wp, this);
		return this.Qc
	};
	q.xw = function() {
		google.ima.SdkLoader.setCallbacks(x(this.Qc.bh, this.Qc), x(this.qw, this));
		google.ima.SdkLoader.load("3", h)
	};
	q.qw = function(a) {
		this.wp(Error("Google Ads SDK Failed to load: " + a))
	};
	q.wp = function(a) {
		this.Qc.Xe(a)
	};

	function Mm(a, b) {
		this.i = a;
		this.O = b;
		this.A = y();
		this.a = a.vb;
		this.b = {};
		var c = [];
		this.a.b && this.a.a && c.push("4_2");
		this.a.e && (this.a.a && c.push("1_2"), this.a.Ba && c.push("1_3"));
		this.a.i && c.push("2_1");
		this.a.j && this.a.a && c.push("2_2");
		this.a.Ac && c.push("2_3");
		this.j = c.join(",");
		this.k = new Gm(this.j, this.a.da);
		this.b.allowed = this.j;
		(c = this.a.da) && (this.b.ex_ads = c)
	}
	Mm.prototype.e = 0;

	function bm(a, b, c) {
		c = c || {};
		var d = (y() - a.A) / 1E3;
		c.art = d;
		d = a.i.getEnvironmentData();
		d.k && (c.feature = d.Ma);
		c.ad_flags = a.a.Qa;
		(d = a.a.zc) && (c.cid = d);
		c.mt = a.O.getCurrentTime();
		(d = a.O.getDuration()) && (c.len = d);
		a.a.wc && (c.fqsf = 1);
		(d = Lm.getInstance().version) && (c.sdkv = d);
		c.ad_event = b;
		if(3 == b || 4 == b) a.k.a = c.at;
		b = c;
		if(a.a.yc) {
			var f;
			a: {
				c = a.b;
				d = ab(b);
				for(f in c) {
					if(f in d) {
						f = m;
						break a
					}
					d[f] = c[f]
				}
				f = d
			}
			f === m ? a.i.log(a.b) : b = f;
			a.i.log(b);
			a.b = {}
		}
	};

	function Nm(a, b) {
		this.b = b;
		this.i = [];
		this.e = {};
		this.ua = {};
		this.a = a
	}
	z(Nm, Sa);
	q = Nm.prototype;
	q.vd = m;
	q.Qh = function() {
		this.i.length || (Qa(this.b, function(a, b) {
			return a.getId() - b.getId()
		}), this.i = Ea(this.b, function(a) {
			return "unloaded" == a.e
		}), 0 == this.i.length ? Cj(this.a) : (Ha(this.i, function(a) {
			return 0 == a.start
		}) === m && Cj(this.a), Om(this)))
	};

	function Om(a) {
		if(a.i.length) {
			var b = a.i.shift();
			b.z("adBreakComplete", a.$k, a);
			b.Qh()
		}
	}
	q.$k = function(a) {
		a.ia("adBreakComplete", this.$k, this);
		R(x(this.hw, this, a), 0)
	};
	q.hw = function(a) {
		var b = Da(this.b, a),
			c = this.b[b + 1],
			b = this.b[b - 1],
			d = 2147483646; - 2 == a.start || -1 == a.start ? d = 2147483647 : c && 2147483647 != c.start && (d = c.Qb() - 1);
		0 == a.fa && (ym(this.a, "bl"), wm(a) || ym(this.a, "fb"));
		if(c = !(vm(a) && 0 < a.a.length)) {
			if(b && vm(b)) {
				var f = b.Qb();
				f > d && (d = f);
				Pm(this, b);
				Qm(this, b, d)
			}
		} else this.e[a.getId()] = a, Qm(this, a, d);
		Cj(this.a);
		c && this.Vf(a);
		Om(this)
	};

	function Qm(a, b, c) {
		var d = b.Qb();
		if(d !== m) {
			var f = {};
			f.priority = -2 != b.start ? 2 : 3;
			f.id = b.getId();
			f.visible = b.isVisible;
			c = new Le(d, c, f);
			a.ua[b.getId()] = c;
			a.a.addCueRange(c)
		}
	}

	function Pm(a, b) {
		a.ua[b.getId()] && (a.a.qu(a.ua[b.getId()]), delete a.ua[b.getId()])
	}
	q.Vf = function(a) {
		a.ia("adBreakComplete", this.$k, this);
		this.vd && a == this.vd && (this.vd = m);
		Pm(this, a);
		Ka(this.b, a);
		delete this.e[a.getId()];
		Va(a)
	};
	q.br = function(a) {
		if(a.ce) {
			if(-1 != a.start && a.Ik) {
				var b = this.a;
				Rm(b);
				b.playVideo()
			} else wm(a) && !a.Ik ? (b = this.a, Rm(b), b.playVideo()) : (Rm(this.a), Jj(this.a, n));
			this.Vf(a)
		} else a.isVisible || this.Vf(a)
	};
	q.G = function() {
		B(this.b, this.Vf, this);
		Nm.C.G.call(this)
	};

	function Sm() {
		this.a = [];
		this.b = []
	}
	ba(Sm);
	var Tm = t("yt.player.utils.VideoTagPool.instance_") || Sm.getInstance();
	qa("yt.player.utils.VideoTagPool.instance_", Tm);
	q = Sm.prototype;
	q.Sw = function(a) {
		if(!(this.a.length >= a)) {
			a -= this.a.length;
			for(var b = 0; b < a; b++) {
				var c = Um(this);
				this.a.push(c)
			}
		}
	};

	function Um(a) {
		var b = document.createElement("video");
		pa(b, Mj);
		N(b, "loadeddata", x(b.Zu, b));
		N(b, "timeupdate", x(b.av, b));
		Oj(b);
		if(a.b.length) {
			var c = a.b[0];
			b.setVolume(c.getVolume(), c.isMuted())
		}
		a.b.push(b);
		N(b, "volumechange", x(a.$u, a));
		return b
	}
	q.$u = function(a) {
		a = a.target;
		var b = a.volume,
			c = a.muted;
		this.a.forEach(function(a) {
			a.volume = b;
			a.muted = c
		}, this)
	};
	q.Yw = function() {
		return this.a.length ? this.a.pop() : Um(this)
	};
	q.Ww = function(a) {
		a && Ia(this.b, a) && (Qj(a), ke(a), Ka(this.b, a))
	};
	q.Tw = function(a) {
		return this.a.length >= (a || 1)
	};
	Sm.prototype.fillPool = Sm.prototype.Sw;
	Sm.prototype.getTag = Sm.prototype.Yw;
	Sm.prototype.releaseTag = Sm.prototype.Ww;
	Sm.prototype.hasTags = Sm.prototype.Tw;

	function Vm(a, b, c) {
		this.b = a;
		this.a = b;
		this.O = c;
		this.u = c.getEnvironmentData()
	}
	z(Vm, Sa);
	q = Vm.prototype;
	q.Sh = m;
	q.ni = m;
	q.o = m;

	function Ul(a) {
		a.Sh || (a.Sh = L("ad-container", a.b || a.a.a));
		return a.Sh
	}
	q.releaseVideoElement = function() {
		this.o && (H(this.o, "ad-video"), this.O.releaseVideoElement(this.o), this.u.Hb || this.a.Km(this.o), this.o = m)
	};

	function Kl(a) {
		if(!a.ni) {
			var b;
			if(a.u.Va) {
				b = a.a.createElement("button");
				G(b, "video-click-tracking");
				a.a.append(b, S("VISIT_ADVERTISERS_SITE"));
				var c = a.a.createElement("div");
				G(c, "video-click-tracking-container");
				a.a.appendChild(c, b);
				a.a.appendChild(Ul(a), c)
			} else b = a.a.createElement("div"), G(b, "video-click-tracking", "ad-video"), a.a.appendChild(Ul(a), b);
			a.ni = b
		}
		return a.ni
	}

	function Wm(a) {
		a.releaseVideoElement();
		a.a.wu(Ul(a));
		a.ni = m
	}
	q.G = function() {
		Vm.C.G.call(this);
		Wm(this);
		this.a = this.Sh = m;
		delete this.O
	};

	function Xm(a) {
		a.o || (a.o = a.O.requestVideoElement(), G(a.o, "video-stream", "ad-video"));
		return a.o
	};

	function Ym(a) {
		Aj.call(this, a);
		this.D = {};
		this.A = {
			at: "0"
		};
		this.e = new od;
		this.b = new Vm(this.getRootNode(), this.e, this.a);
		a = this.getEnvironmentData().e.html5_sdk_version;
		this.F = Lm.getInstance().load(a)
	}
	z(Ym, Aj);
	var em = new F(0, 0);
	q = Ym.prototype;
	q.ja = "ad";
	q.Ed = "ad";
	q.Mf = m;
	q.Fc = m;
	q.ud = m;
	q.vb = m;
	q.Ej = n;
	q.Uj = n;
	q.Lf = m;
	q.Co = m;
	q.lb = function(a) {
		return a.getVideoData().Gn
	};
	q.create = function() {
		Ym.C.create.call(this);
		this.pa = l;
		ym(this, "i");
		this.vb = new Em(this.a.getVideoData().uc || {});
		this.Fc = new Mm(this, this.a);
		vl();
		this.Ej = n;
		var a = $i(this.F);
		this.Lf = Zi(a, this.Iq, m, this);
		var b = new Dm(this),
			a = [];
		try {
			var c = b.a.vb,
				d;
			if(gm(b.a)) d = new Cm([0]);
			else {
				var f;
				if(c.b) f = new Cm([0]);
				else {
					var g;
					if(c.F) try {
						var j = Bm(c.F).getElementsByTagName("AdBreak"),
							k = Fa(j, function(a) {
								a = a.getAttribute("time");
								return Ba(a)
							});
						g = new Cm(k)
					} catch(p) {
						g = new Cm([0])
					} else {
						var r;
						if(c.D) {
							var u = Fa(c.D.split(","), Ba);
							r = new Cm(u)
						} else r = new Cm([0]);
						g = r
					}
					f = g
				}
				d = f
			}
			for(var w = d.Gq, c = 0; c < w.length; c++) {
				d = b;
				var A = w[c],
					E;
				if(Ml(b.a)) {
					f = [];
					var Aa = b.a.vb;
					Aa.b && Aa.a && f.push(5);
					E = f
				} else {
					var gb;
					if(b.a.vb.k) {
						var Y = b.a;
						f = [];
						var V = Y.vb;
						V.b && V.a && f.push(5);
						V.e && (V.a ? f.push(3) : gm(Y) || V.Ba && f.push(4));
						V.j && xl(Y.getEnvironmentData()) && f.push(1);
						!gm(Y) && V.i && f.push(2)
					} else {
						var ep = b.a;
						f = [];
						var hh = ep.vb,
							fp = hh.a;
						hh.b && fp && f.push(5);
						hh.e && fp && f.push(3);
						hh.j && xl(ep.getEnvironmentData()) && f.push(1)
					}
					E = gb = f
				}
				f = E;
				var ih = new um(d.a, d.b++);
				ih.start = A;
				for(g = 0; 1 > g; g++) {
					var j = ih,
						It = new rm(d.j++, 0, n);
					j.a.push(It)
				}
				ih.A = f;
				a.push(ih)
			}
		} catch(Pu) {} finally {
			w = new Ti, w.bh(a)
		}
		this.Mf = Zi(w, this.Hq, m, this);
		a = {};
		a.allowed = this.Fc.j;
		Fj(this, {}, a)
	};
	q.destroy = function() {
		this.Uj && Rm(this);
		this.pa = n;
		this.Mf && (this.Mf.cancel(), this.Mf = m);
		Va(this.ud);
		this.ud = m;
		this.Lf && (this.Lf.cancel(), this.Lf = m);
		Wm(this.b);
		Ym.C.destroy.call(this)
	};
	q.getVideoData = function() {
		return this.a.getVideoData()
	};
	q.getEnvironmentData = function() {
		return this.a.getEnvironmentData()
	};
	q.isFullscreen = function() {
		return this.a.isFullscreen() || Cl(this)
	};

	function Ml(a) {
		return "olympics" == a.getEnvironmentData().Ja
	}

	function gm(a) {
		return a.getEnvironmentData().pb || Cl(a) || n
	}

	function Cl(a) {
		return "leanback" == a.getEnvironmentData().S
	}

	function dm(a, b, c) {
		c = c || {};
		c.ad_error = b;
		bm(a.Fc, 7, c)
	}
	q.zp = function() {
		return this.Fc.k
	};
	q.getRootNode = function() {
		return this.a.getRootNode()
	};

	function Jl(a, b) {
		var c;
		if(b) {
			c = a.b;
			var d = Xm(c),
				f;
			if(f = !c.u.Hb) md ? f = d.parentElement : (f = d.parentNode, f = ia(f) && 1 == f.nodeType ? f : m), f = !f;
			f && c.a.appendChild(Ul(c), d);
			c = d
		} else c = a.b.u.Hb ? a.b.u.o : Xm(a.b);
		return c
	}
	q.releaseVideoElement = function() {
		this.b.releaseVideoElement()
	};

	function Ol(a, b) {
		return Cl(a) ? a.getEnvironmentData().Xc || em : b ? Gg(a.getRootNode()) : Bg(a.getRootNode())
	}

	function Nl(a) {
		return Cl(a) ? (a = a.getEnvironmentData().Xc || em, new yc(0, 0, a.width, a.height)) : Dg(a.getRootNode())
	}
	q.Hq = function(a) {
		this.Mf = m;
		ym(this, "bd");
		this.ud = new Nm(this, a);
		this.ud.Qh()
	};

	function Rm(a) {
		a.releaseVideoElement();
		a.Uj = n;
		a.g("command_stop_redirect_controls");
		Ij(a, ["seek"])
	}

	function Ll(a, b, c) {
		switch(b) {
			case 1:
				a.g("publish_external_event", "onAdStart", c);
				break;
			case 2:
				a.g("publish_external_event", "onAdEnd", c)
		}
	}

	function Gl(a, b, c) {
		a.g("publish_external_event", "onAdStateChange", b, Jl(a, n), c)
	}
	q.Sb = function(a) {
		Ym.C.Sb.call(this, a);
		a = a.getId();
		if(this.ud && !isNaN(a)) {
			var b = this.ud;
			if(da(a) && (a = b.e[a])) b.vd == a && !a.ce && a.isVisible || (b.vd && b.Vf(b.vd), b.vd = a, a.z("adBreakComplete", b.br, b), a.ce && (b = b.a, b.Uj = l, b.g("command_redirect_controls", b, ["play_pause"]), b.g("command_disable_controls", ["seek"], b.ja), b.pauseVideo())), 0 != a.a.length && (isNaN(a.Ic) ? (a.Ic = 0, b = a.a[a.Ic], b.Oa instanceof El && ym(a.b, "bs"), b.z("adEnd", a.Om, a), b.z("adError", a.Pm, a), b.z("AD_LOGGING_EVENT", a.Nm, a), tm(b)) : tm(a.a[a.Ic]))
		}
	};
	q.oc = function(a) {
		Ym.C.oc.call(this, a);
		var b = a.getId(),
			c = 1E3 * this.a.getCurrentTime();
		if(this.ud && !isNaN(b) && c > a.start && (2147483647 == a.end || 2147483646 == a.end))
			if(a = this.ud, (b = a.e[b]) && a.vd == b && (!b.ce && b.isVisible) && !isNaN(b.Ic)) b = b.a[b.Ic], b.Ok && b.Oa instanceof Tl && Vl(b.Oa, google.ima.ViewMode.FULLSCREEN)
	};
	q.Iq = function() {
		ym(this, "sdk");
		var a = Jl(this, n);
		if(!a) return a = new Ti, a.Xe(Error("AdModule.getVideoElement returned an invalid element.")), a;
		a = new google.ima.AdDisplayContainer(Ul(this.b), a, Kl(this.b));
		return this.Co = new google.ima.AdsLoader(a)
	};

	function ym(a, b) {
		var c = b;
		"nl" == b && (c = a.Fc, c.e++, c = c.e.toString());
		a.D[c] = y();
		("bs" == c || "fb" == c) && Fj(a, a.D, a.A)
	}
	q.wi = function(a) {
		this.g(a)
	};

	function Zm(a) {
		return !Ym.prototype.lb(a) ? m : new Ym(a)
	};

	function $m(a, b) {
		this.nf = a;
		this.pubsub = b;
		this.Di = Xd("html5-endscreen", this.nf.getRootNode());
		G(this.Di, this.pp);
		this.Hd = Xd("html5-endscreen-content", this.nf.getRootNode())
	}
	q = $m.prototype;
	q.pp = "base-endscreen";
	q.Di = m;
	q.Hd = m;
	q.pubsub = m;
	q.nf = m;
	q.create = function() {};
	q.destroy = function() {};
	q.load = function() {};

	function an(a, b, c) {
		c = c || {};
		var d = c.Db;
		d || (d = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(d), d = d.sheet || d.styleSheet);
		c.reset && bn(d);
		b = b instanceof Array ? b.join(";") : b;
		d.insertRule ? d.insertRule(a + "{" + b + "}", d.cssRules.length) : d.addRule(a, b, -1);
		return d
	}

	function bn(a) {
		for(var b = (a.cssRules || a.rules).length; 0 < b; b--) {
			var c = a;
			c.deleteRule ? c.deleteRule(0) : c.removeRule(0)
		}
	};
	var cn = window.location.protocol + "//jark.succulent64.ml/ytd/thumb/",
		dn = 4 / 3;

	function en(a, b, c) {
		var d;
		switch(b.Pd) {
			case 30:
				d = fn;
				break;
			default:
				d = gn
		}
		return d(a, b, c)
	}

	function gn(a, b, c) {
		if(!c) {
			c = a.clientHeight;
			a = a.clientWidth;
			if((900 < a || 600 < c) && b.En) return b.En;
			if((430 < a || 320 < c) && b.Fn) return b.Fn
		}
		return b.Rh ? b.Rh : b.J ? hn(b.J) : ""
	}

	function fn(a, b) {
		return b.Rh ? b.Rh : b.J ? Q("//docs.google.com/vt", {
			id: b.J,
			authuser: b.hm,
			authkey: b.gm
		}) : "//docs.google.com/images/doclist/cleardot.gif"
	}

	function hn(a, b) {
		return(cn + escape(a) + ".png")
	};

	function jn(a, b) {
		this.a = a;
		var c = b || m;
		if(!c) {
			var d = [],
				f = {};
			this.a.replace(kn, function(a, b) {
				b in f || (f[b] = l, d.push(b))
			});
			c = d
		}
		c = sa("__%s__", "(" + c.join("|") + ")");
		this.b = RegExp(c, "g")
	}
	var kn = /__([a-z]+(?:_[a-z]+)*)__/g;

	function ln(a, b) {
		var c = K(a).innerHTML,
			c = c.replace(/^\s*(\x3c!--\s*)?/, ""),
			c = c.replace(/(\s*--\x3e)?\s*$/, "");
		return new jn(c, b)
	}
	jn.prototype.Cc = function(a, b, c) {
		var d = x(function(d, g) {
			b && (g = b(g));
			return c ? a[g] || "" : ua(a[g] || "")
		}, this);
		return this.a.replace(this.b, d)
	};

	function mn() {
		var a = L("videowall-info-template");
		this.a = ln(a, ["title", "author", "duration", "view_count"])
	}
	mn.prototype.Cc = function(a) {
		var b = ab(a);
		b.duration = Hk(a.length_seconds);
		return this.a.Cc(b)
	};

	function nn(a) {
		this.O = a;
		this.j = new mn;
		a = L("videowall-still-content-template");
		this.i = ln(a, ["info"]);
		a = document.createElement("a");
		a.tabIndex = 0;
		G(a, "videowall-still");
		N(a, "click", x(this.nt, this));
		N(a, "keypress", x(this.qt, this));
		this.a = a
	}
	q = nn.prototype;
	q.update = function(a, b) {
		if(this.fa != a.id) {
			this.b = a;
			this.fa = a.id;
			var c;
			c = b ? "hqdefault.jpg" : "mqdefault.jpg";
			var d = {
				info: this.j.Cc(a)
			};
			c = hn(this.fa, c);
			this.a.style.backgroundImage = "url(" + c + ")";
			this.a.innerHTML = this.i.Cc(d, h, l);
			J(this.a, "videowall-still-featured", a.featured)
		}
	};
	q.W = function() {
		return this.a
	};
	q.select = function() {
		var a = "endscreen";
		this.b.featured && this.b.feature_type ? a = this.b.feature_type : this.b.pinned && (a = "pinned");
		this.O.watchVideoById(this.fa, a)
	};
	q.nt = function() {
		this.select()
	};
	q.qt = function(a) {
		switch(a.keyCode) {
			case 13:
			case 32:
				this.select(), a.preventDefault()
		}
	};

	function on(a, b) {
		$m.call(this, a, b);
		this.ul = [];
		this.pubsub.z("onResize", this.Qv, this);
		this.pubsub.z("onVideoDataChange", this.Rv, this)
	}
	z(on, $m);
	q = on.prototype;
	q.pp = "videowall-endscreen";
	q.Bg = m;
	q.qc = m;
	q.ul = m;
	q.Vo = n;
	q.Cg = 0;
	q.create = function() {
		on.C.create.call(this);
		this.qc = this.nf.getVideoData().$n;
		pn(this)
	};
	q.destroy = function() {
		this.Hd.innerHTML = "";
		delete this.qc;
		on.C.destroy.call(this)
	};

	function pn(a) {
		if(a.qc && a.qc.length) {
			J(a.Di, "endscreen-enable-layout", l);
			a.Hd.innerHTML = "";
			zg(a.Hd, "", "");
			var b = Bg(a.Hd);
			b.height -= 30;
			var c = Math.floor(b.width / 158),
				d = Math.floor(b.height / (158 / 1.45));
			if(1 > d || 1 > c) a.Cg = 0;
			else {
				var f = a.qc.length,
					g = n;
				a.qc[0].featured && (2 < d && 2 < c) && (g = l, f += 3);
				J(a.Hd, "feature-video", g);
				for(var j = 0, k = 0, p = xc(b), r = l; 0 <= f && (j < c || k < d);) {
					var u = f >= k,
						w = f >= j;
					if(r && w || !u && w) f -= j, k++;
					else if(u) f -= k, j++;
					else break;
					r = 1.45 * (j / k) > p
				}
				a.Vo = r;
				c = new F(j, k);
				a.Vo ? (d = 1 / c.width, b = b.width * d, d = b / 1.45) : (d = 1 / c.height, d *= b.height, b = 1.45 * d);
				b = new F(Math.floor(b), Math.floor(d));
				a.Cg = c.width * c.height;
				g && (a.Cg -= 3);
				a.Bg && bn(a.Bg);
				g = qn(b);
				d = {
					Db: a.Bg
				};
				a.Bg = an(".videowall-still", g, d);
				g = qn(b.aa().scale(2));
				d.Db = a.Bg;
				an(".feature-video .videowall-still:first-child", g, d);
				zg(a.Hd, b.width * c.width, b.height * c.height)
			}
			g = 0;
			for(b = a.Cg; g < b; g++) c = a, d = g, f = c.ul[d], f || (f = new nn(c.nf), c.ul[d] = f), f.update(c.qc[d], 0 == d && c.qc[0].featured), a.Hd.appendChild(f.W());
			J(a.Di, "endscreen-enable-layout", n)
		}
	}

	function qn(a) {
		return ["width:" + a.width + "px", "height:" + a.height + "px"]
	}
	q.Qv = function() {
		pn(this)
	};
	q.Rv = function() {
		var a = this.nf.getVideoData().$n;
		this.qc != a && (this.qc = a, pn(this))
	};

	function rn(a) {
		Aj.call(this, a);
		a.getEnvironmentData().Sg ? this.tg = new on(this.a, this.i) : this.tg = new $m(this.a, this.i)
	}
	z(rn, Aj);
	q = rn.prototype;
	q.ja = "endscreen";
	q.Ed = "end";
	q.tg = m;
	q.create = function() {
		rn.C.create.call(this);
		var a = Math.max(1E3 * (this.a.getVideoData().ya - 10), 0),
			a = new Le(a, 2147483646, {
				id: "preload"
			}),
			b = new Le(2147483647, 2147483647, {
				id: "load",
				gf: 6
			});
		this.addCueRange(a, b)
	};
	q.destroy = function() {
		Bj(this);
		rn.C.destroy.call(this)
	};
	q.load = function() {
		rn.C.load.call(this);
		this.tg.load();
		this.pa = l
	};
	q.la = function() {
		this.tg.destroy();
		rn.C.la.call(this);
		this.pa = n
	};
	q.Sb = function(a) {
		rn.C.Sb.call(this, a);
		"preload" == a.getId() ? this.tg.create() : this.a.getAutoplay() || this.load()
	};
	q.oc = function(a) {
		"load" == a.getId() && this.la();
		rn.C.oc.call(this, a)
	};
	q.lb = function() {
		return l
	};

	function sn(a) {
		var b = a.getEnvironmentData();
		return !("leanback" == b.S || b.$g) ? new rn(a) : m
	};
	var tn = {
		created: 1,
		ready: 2,
		testing: 4,
		"testing-starting": 3,
		live: 6,
		"live-starting": 5,
		complete: 8,
		"complete-starting": 7
	};

	function un(a, b) {
		this.b = new Mc(a);
		this.a = b ? b : "callback";
		this.sh = 5E3
	}
	var vn = 0;
	un.prototype.cancel = function(a) {
		a && (a.Qc && a.Qc.cancel(), a.fa && wn(a.fa, n))
	};

	function wn(a, b) {
		s._callbacks_[a] && (b ? delete s._callbacks_[a] : s._callbacks_[a] = aa)
	};

	function xn(a) {
		P.call(this);
		this.e = (new jn("http://gdata.youtube.com/feeds/api/users/live/broadcasts/__video_id__/states?v=2&alt=json-in-script")).Cc({
			video_id: a
		});
		this.a = new dc(15E3 + Math.floor(3E4 * Math.random()));
		this.a.addEventListener("tick", x(this.b, this));
		this.b();
		this.a.start()
	}
	z(xn, P);
	xn.prototype.G = function() {
		this.a.ub();
		xn.C.G.call(this)
	};
	xn.prototype.b = function() {
		var a = new un(this.e),
			b = x(this.A, this),
			c = x(this.k, this),
			d = "_" + (vn++).toString(36) + y().toString(36);
		s._callbacks_ || (s._callbacks_ = {});
		var f = a.b.aa();
		if(b) {
			s._callbacks_[d] = function(a) {
				wn(d, l);
				b.apply(h, arguments)
			};
			var g = a.a,
				j = "_callbacks_." + d;
			fa(j) || (j = [String(j)]);
			Zc(f.a, g, j)
		}
		a = Hm(f.toString(), {
			timeout: a.sh,
			nr: l
		});
		Zi(a, m, function() {
			wn(d, n);
			c && c(m)
		}, h)
	};
	xn.prototype.A = function(a) {
		this.g("payload", a);
		fc(this.a, 15E3 + Math.floor(3E4 * Math.random()))
	};
	xn.prototype.k = function() {
		this.g("error");
		var a = this.a.b;
		192E4 > a && fc(this.a, 2 * a)
	};

	function yn(a) {
		this.b = [];
		if(a && (a = a.feed)) {
			var b = a.yt$lifeCycleState;
			b && (this.a = tn[b.$t] || -1);
			if((b = a.yt$when) && b.start) b = new Date(b.start), this.i = Math.floor(b.valueOf() / 1E3);
			if(a = a.yt$slate)
				if(a.imgUrl && (this.j = "url(" + a.imgUrl + ")"), (a = a.content) && a.length) a = a.splice(0, 3), this.b = Fa(a, function(a) {
					return a.$t
				})
		}
	}
	yn.prototype.a = -1;

	function zn(a) {
		this.i = L("html5-fresca-module", a);
		this.e = L("html5-fresca-countdown", a);
		this.A = L("html5-fresca-message", a);
		a = L("html5-fresca-template", a);
		this.k = ln(a, ["heading", "subheading", "long_text"])
	}
	zn.prototype.update = function(a) {
		if(!this.D || this.a.a != a.a || this.a.i != a.i || this.a.j != a.j || this.a.b.join() != a.b.join()) {
			this.a = a;
			this.i.style.backgroundImage = this.a.j || "none";
			a = this.a.b;
			if(!a.length) {
				a: switch(this.a.a) {
					case 6:
						a = "";
						break a;
					case 8:
					case 7:
						a = S("FRESCA_COMPLETE_MESSAGE");
						break a;
					default:
						a = S("FRESCA_STAND_BY_MESSAGE")
				}
				a = [a]
			}
			this.A.innerHTML = this.k.Cc({
				heading: a[0] || "",
				subheading: a[1] || "",
				long_text: a[2] || ""
			});
			this.j()
		}
	};
	zn.prototype.ub = function() {
		If(this.b)
	};
	zn.prototype.j = function() {
		var a;
		a = this.a;
		a.i ? (a = a.a, a = 6 == a || 8 == a || 7 == a ? n : l) : a = n;
		J(this.i, "html5-fresca-show-countdown", a);
		if(a) {
			a = this.e;
			var b;
			b = this.a.i;
			var c = Math.floor((new Date).valueOf() / 1E3);
			b = c > b ? S("FRESCA_STARTING_SOON_MESSAGE") : Hk(b - c);
			a.innerHTML = b;
			If(this.b);
			this.b = R(x(this.j, this), 1E3)
		}
	};

	function An(a) {
		Aj.call(this, a)
	}
	z(An, Aj);
	q = An.prototype;
	q.ja = "fresca";
	q.Ed = "fresca";
	q.lh = n;
	q.Uf = n;
	q.lb = function() {
		return Ii(this.a.getVideoData(), "fresca_module")
	};
	q.create = function() {
		An.C.create.call(this);
		this.lh = this.Uf = n;
		Ij(this, ["play_pause", "seek"]);
		this.A = new zn(this.a.getRootNode());
		this.e = new xn(this.a.getVideoData().J);
		this.e.z("payload", this.Ps, this);
		this.e.z("error", this.Os, this);
		this.z("onStateChange", this.Qm, this)
	};
	q.destroy = function() {
		this.pa && this.la();
		this.ia("onStateChange", this.Qm, this);
		this.e.ub();
		this.A.ub();
		delete this.e;
		delete this.A;
		delete this.b;
		An.C.destroy.call(this)
	};
	q.load = function() {
		An.C.load.call(this);
		this.pa = l
	};
	q.la = function() {
		this.pa = n;
		An.C.la.call(this)
	};
	q.Qm = function(a) {
		this.b && (this.lh = O(a.a, 2), (Si(a, 16) || this.lh) && Bn(this, this.b))
	};
	q.Os = function() {
		this.Uf || (this.b = new yn, Bn(this, this.b))
	};
	q.Ps = function(a) {
		this.b = new yn(a);
		6 == this.b.a && !this.a.getVideoData().Bf.length ? this.a.loadVideoById(this.a.getVideoData().J) : Bn(this, this.b)
	};

	function Bn(a, b) {
		var c = 6 > b.a;
		if(!c && a.a.isPeggedToLive() && (b.j || b.b.length)) c = l;
		a.lh && !a.a.getEnvironmentData().Sg && (c = l);
		if(!a.Uf) switch(b.a) {
			case 6:
				a.Uf = l;
				Ij(a, ["play_pause", "seek"]);
				Cj(a);
				break;
			case 8:
			case 7:
				c = a.Uf = l
		}
		c && a.A.update(b);
		c && !a.pa ? a.load() : !c && a.pa && a.la()
	}

	function Cn(a) {
		return !Ii(a.getVideoData(), "fresca_module") ? m : new An(a)
	};

	function Dn(a, b) {
		return b != m && !!b.match(a)
	}

	function En(a, b) {
		for(var c in a)
			if(a[c] == b) return l;
		return n
	}

	function Fn(a, b, c) {
		var d = new Gn;
		d.type = c;
		d.defaultValue = h;
		d.b = oa(Dn, /.+/);
		return Hn(a[b], d)
	}

	function In(a, b, c) {
		var d = new Gn;
		d.type = "OPTIONAL";
		d.a = function(a) {
			if(isNaN(parseInt(a, 0))) return m;
			a = parseInt(a, 0).toString(16);
			return "#" + "000000".substring(0, 6 - a.length) + a
		};
		d.b = function(a) {
			return !!a
		};
		d.defaultValue = c;
		return Hn(a[b], d)
	}

	function Jn(a, b, c, d) {
		var f = new Gn;
		f.type = c;
		f.defaultValue = d;
		return Hn(a[b], f)
	}

	function Kn(a, b, c, d, f) {
		var g = new Gn;
		g.type = d;
		g.defaultValue = f;
		g.b = oa(En, c);
		return Hn(a[b], g)
	}

	function Ln(a, b) {
		var c = new Gn;
		c.type = "OPTIONAL";
		c.defaultValue = 0;
		c.a = function(a) {
			return parseFloat(a)
		};
		return Hn(a[b], c)
	}

	function Mn(a) {
		var b = new Gn;
		b.type = "OPTIONAL";
		b.defaultValue = 0;
		b.a = function(a) {
			return parseInt(a, 10)
		};
		Hn(a.d, b)
	}

	function Nn(a, b, c, d, f, g, j) {
		var k = new Gn;
		k.type = "OPTIONAL";
		k.a = function(a) {
			a = 10 == c ? parseFloat(a) : parseInt(a, c);
			return g && a != m && !isNaN(a) ? sc(a, d, f) : a
		};
		k.defaultValue = j;
		k.b = function(a) {
			return a != m && !isNaN(a) && a >= d && a <= f
		};
		return Hn(a[b], k)
	}

	function On(a, b) {
		var c = new Gn;
		c.type = "OPTIONAL";
		c.defaultValue = 0;
		c.a = function(a) {
			a = a.match(/([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(\.[0-9])/);
			return !a ? -1 : 3600 * parseFloat(a[1]) + 60 * parseFloat(a[2]) + parseFloat(a[3]) + parseFloat(a[4])
		};
		return Hn(a[b], c)
	}

	function Pn(a, b) {
		if(b == m) return m;
		var c = new a;
		c.gb(b);
		return c
	}

	function Qn(a, b, c, d) {
		if(a == m || a[b] == m) return m;
		var f = new Gn;
		f.type = d;
		f.defaultValue = h;
		f.b = function(a) {
			return !!a
		};
		f.a = oa(Pn, c);
		return Hn(a[b], f)
	}

	function Hn(a, b) {
		var c;
		"OPTIONAL" == b.type || "REQUIRED" == b.type ? (c = a == m ? m : b.a(fa(a) && a.length ? a[0] : a), b.b(c) || ("REQUIRED" == b.type && e("Required field missing."), c = b.defaultValue == m ? m : b.defaultValue)) : c = "REPEATED" == b.type ? a != m ? Rn(fa(a) ? a : [a], b) : b.defaultValue != m ? fa(b.defaultValue) ? b.defaultValue : [b.defaultValue] : [] : "IDLIST" == b.type ? a != m ? Rn(Ea(a.split(/ +/), function(a) {
			return "" != a
		}), b) : b.defaultValue != m ? fa(b.defaultValue) ? b.defaultValue : [b.defaultValue] : [] : m;
		return c
	}

	function Rn(a, b) {
		for(var c = [], d = 0; d < a.length; ++d) {
			var f = b.a(a[d]);
			b.b(f) && c.push(f)
		}
		return c.length ? c : b.defaultValue != m ? fa(b.defaultValue) ? b.defaultValue : [b.defaultValue] : []
	}

	function Gn() {}
	Gn.prototype.type = "OPTIONAL";
	Gn.prototype.a = function(a) {
		return a == m ? m : a.toString()
	};
	Gn.prototype.b = function(a) {
		return a != m
	};
	Gn.prototype.defaultValue = m;

	function Sn() {}
	var Tn = {
		CLICK: "click",
		Pw: "hidden",
		vD: "rollOut",
		wD: "rollOver",
		BD: "shown"
	};
	Sn.prototype.gb = function(a) {
		Fn(a, "ref", "OPTIONAL");
		Kn(a, "state", Tn, "OPTIONAL")
	};

	function Un() {}
	Un.prototype.gb = function(a) {
		Qn(a, "condition", Sn, "REPEATED")
	};

	function Vn() {}
	var Wn = {
		Zy: "current",
		fD: "new"
	};
	q = Vn.prototype;
	q.type = m;
	q.value = m;
	q.gi = m;
	q.target = m;
	q.$m = n;
	q.gb = function(a) {
		(this.value = Jn(a, "value", "OPTIONAL")) ? this.gi = rf(this.value): this.gi = {};
		this.target = Kn(a, "target", Wn, "OPTIONAL", "current");
		var b = new Gn;
		b.type = "OPTIONAL";
		b.defaultValue = n;
		b.b = function(a) {
			return a == l || a == n
		};
		b.a = function(a) {
			return "true" == a || "false" == a ? "true" == a : a
		};
		this.$m = Hn(a.trusted, b)
	};

	function Xn() {}
	Xn.prototype.value = 0;
	Xn.prototype.gb = function(a) {
		this.value = On(a, "value")
	};

	function Yn() {}
	var Zn = {
		iD: "openUrl",
		Qw: "pause"
	};
	q = Yn.prototype;
	q.type = m;
	q.trigger = m;
	q.url = m;
	q.duration = m;
	q.gb = function(a) {
		this.type = Kn(a, "type", Zn, "OPTIONAL");
		this.trigger = Kn(a, "trigger", Tn, "OPTIONAL");
		this.url = Qn(a, "url", Vn, "OPTIONAL");
		this.duration = Qn(a, "duration", Xn, "OPTIONAL")
	};

	function $n() {
		this.a = []
	}
	q = $n.prototype;
	q.$f = "#1A1A1A";
	q.be = "#FFF";
	q.wh = "#000";
	q.xh = 0;
	q.Pe = 0.8;
	q.lo = 0.2;
	q.mo = 0;
	q.pk = "#F2F2F2";
	q.Wh = 3;
	q.qk = 3.6107;
	q.Nh = "";
	q.padding = m;
	q.gb = function(a) {
		this.$f = In(a, "fgColor", this.$f);
		this.be = In(a, "bgColor", this.be);
		this.wh = In(a, "borderColor", this.wh);
		this.xh = Nn(a, "borderWidth", 16, 1, 5, n, this.xh);
		this.Pe = Nn(a, "bgAlpha", 10, 0, 1, n, this.Pe);
		this.lo = Nn(a, "borderAlpha", 10, 0, 1, n, this.lo);
		this.mo = Nn(a, "gloss", 16, 0, 255, n, this.mo);
		this.pk = In(a, "highlightFontColor", this.pk);
		this.Wh = Nn(a, "highlightWidth", 16, 1, 5, n, this.Wh);
		this.qk = Nn(a, "textSize", 10, 3.3, 30.1, l, this.qk);
		this.Nh = Jn(a, "fontWeight", "OPTIONAL", this.Nh);
		var b = a ? !a.padding || !a.padding.length ? a.padding : a.padding[0] : m;
		this.padding = (b = b ? new vc(parseFloat(b.top), parseFloat(b.right), parseFloat(b.bottom), parseFloat(b.left)) : m) && b.top != m && !isNaN(b.top) && b.right != m && !isNaN(b.right) && b.bottom != m && !isNaN(b.bottom) && b.left != m && !isNaN(b.left) ? b : m;
		this.a = Jn(a, "effects", "IDLIST")
	};

	function ao() {}
	ao.prototype.gb = function(a) {
		this.a = Jn(a, "standard_url", "OPTIONAL", "");
		this.b = Jn(a, "rollover_url", "OPTIONAL", this.a);
		Jn(a, "click_url", "OPTIONAL", this.a)
	};

	function bo() {}
	q = bo.prototype;
	q.x = 0;
	q.y = 0;
	q.di = 0;
	q.bi = 0;
	q.bf = 0;
	q.gb = function(a) {
		this.x = Ln(a, "x");
		this.y = Ln(a, "y");
		this.di = Ln(a, "w");
		this.bi = Ln(a, "h");
		this.bf = On(a, "t");
		Mn(a)
	};

	function co() {}
	q = co.prototype;
	q.x = 0;
	q.y = 0;
	q.di = 0;
	q.bi = 0;
	q.bf = 0;
	q.nn = 0;
	q.on = 0;
	q.gb = function(a) {
		this.x = Ln(a, "x");
		this.y = Ln(a, "y");
		this.nn = Ln(a, "sx");
		this.on = Ln(a, "sy");
		this.di = Ln(a, "w");
		this.bi = Ln(a, "h");
		this.bf = On(a, "t");
		Mn(a)
	};

	function eo() {}
	var fo = {
		Mw: "anchored",
		tD: "rect"
	};
	eo.prototype.type = "rect";
	eo.prototype.b = m;
	eo.prototype.a = m;
	eo.prototype.gb = function(a) {
		this.type = Kn(a, "type", fo, "OPTIONAL", "rect");
		this.b = Qn(a, "rectRegion", bo, "REPEATED");
		this.a = Qn(a, "anchoredRegion", co, "REPEATED")
	};

	function go() {}
	go.prototype.b = m;
	go.prototype.a = m;
	go.prototype.gb = function(a) {
		Fn(a, "timeRelative", "OPTIONAL");
		this.b = Fn(a, "spaceRelative", "OPTIONAL");
		this.a = Qn(a, "movingRegion", eo, "REPEATED")
	};

	function ho(a) {
		if(!a.a) return m;
		a = a.a[0].b || a.a[0].a;
		if(!a || 2 > a.length) return m;
		var b = a.length - 1;
		return 0 == a[0].bf && 0 == a[b] ? m : {
			start: a[0].bf,
			end: a[b].bf
		}
	};

	function io() {}
	var jo = {
			Mw: "anchored",
			Oy: "channel",
			rz: "donation",
			NB: "highlightText",
			XB: "label",
			nD: "popup",
			DD: "speech",
			JD: "title",
			ND: "video"
		},
		ko = {
			MB: "highlight",
			QB: "image",
			Qw: "pause",
			TEXT: "text"
		},
		lo = {
			VD: "video_relative",
			lD: "player_relative"
		};
	io.prototype.gb = function(a) {
		this.id = Fn(a, "id", "REQUIRED");
		this.author = Fn(a, "author", "OPTIONAL");
		this.type = Kn(a, "type", ko, "REQUIRED");
		this.style = Kn(a, "style", jo, "OPTIONAL", "");
		this.i = Jn(a, "TEXT", "OPTIONAL");
		this.a = Qn(a, "segment", go, "REQUIRED");
		this.action = Qn(a, "action", Yn, "REPEATED");
		this.trigger = Qn(a, "trigger", Un, "REPEATED");
		this.b = Qn(a, "appearance", $n, "OPTIONAL");
		this.b || (this.b = new $n);
		this.e = Kn(a, "coordinate_system", lo, "OPTIONAL");
		this.j = Qn(a, "image_source", ao, "OPTIONAL")
	};

	function mo(a) {
		if(!a.action) return m;
		for(var b in a.action)
			if(a.action[b].url) return a.action[b].url;
		return m
	}

	function no(a) {
		return !a.action ? n : a.action.some(function(a) {
			return a.trigger && "click" == a.trigger
		})
	}

	function oo(a) {
		return(a = (a = a.a && a.a.a ? a.a.a[0] : m) ? a.b || a.a : m) ? new yc(a[0].x, a[0].y, a[0].di, a[0].bi) : new yc(0, 0, 0, 0)
	}

	function po(a, b) {
		if(!a.action) return m;
		var c = a.action.filter(function(a) {
			return a.type == b
		});
		return c ? c[0] : m
	};

	function qo() {
		this.Pa = [];
		this.N = [];
		this.Pc = []
	}
	qo.prototype.pf = m;
	qo.prototype.sc = m;
	qo.prototype.Ei = l;
	var ro = [2, 2, 6, 6, 0];
	qo.prototype.clear = function() {
		this.Pa.length = 0;
		this.N.length = 0;
		this.Pc.length = 0;
		delete this.pf;
		delete this.sc;
		delete this.Ei;
		return this
	};

	function so(a, b, c) {
		0 == a.Pa[a.Pa.length - 1] ? a.Pc.length -= 2 : (a.Pa.push(0), a.N.push(1));
		a.Pc.push(b, c);
		a.sc = a.pf = [b, c]
	}
	qo.prototype.a = function(a) {
		var b = this.Pa[this.Pa.length - 1];
		b == m && e(Error("Path cannot start with lineTo"));
		1 != b && (this.Pa.push(1), this.N.push(0));
		for(b = 0; b < arguments.length; b += 2) {
			var c = arguments[b],
				d = arguments[b + 1];
			this.Pc.push(c, d)
		}
		this.N[this.N.length - 1] += b / 2;
		this.sc = [c, d]
	};

	function to(a) {
		var b = a.Pa[a.Pa.length - 1];
		b == m && e(Error("Path cannot start with close"));
		4 != b && (a.Pa.push(4), a.N.push(1), a.sc = a.pf)
	}

	function uo(a, b, c, d, f) {
		var g = a.sc[0] - b * Math.cos(d * Math.PI / 180),
			j = a.sc[1] - c * Math.sin(d * Math.PI / 180),
			g = g + b * Math.cos((d + f) * Math.PI / 180),
			j = j + c * Math.sin((d + f) * Math.PI / 180);
		a.Pa.push(3);
		a.N.push(1);
		a.Pc.push(b, c, d, f, g, j);
		a.Ei = n;
		a.sc = [g, j]
	}
	qo.prototype.aa = function() {
		var a = new this.constructor;
		a.Pa = this.Pa.concat();
		a.N = this.N.concat();
		a.Pc = this.Pc.concat();
		a.pf = this.pf && this.pf.concat();
		a.sc = this.sc && this.sc.concat();
		a.Ei = this.Ei;
		return a
	};
	qo.prototype.isEmpty = function() {
		return 0 == this.Pa.length
	};

	function vo(a) {
		this.b = a;
		this.a = []
	}
	z(vo, Sa);
	var wo = [];
	vo.prototype.K = function(a, b, c, d, f) {
		fa(b) || (wo[0] = b, b = wo);
		for(var g = 0; g < b.length; g++) {
			var j = Ub(a, b[g], c || this, d || n, f || this.b || this);
			this.a.push(j)
		}
		return this
	};
	vo.prototype.i = function(a, b, c, d, f) {
		if(fa(b))
			for(var g = 0; g < b.length; g++) this.i(a, b[g], c, d, f);
		else {
			a: {
				c = c || this;
				f = f || this.b || this;
				d = !!d;
				if(a = Xb(a, b, d))
					for(b = 0; b < a.length; b++)
						if(!a[b].qe && a[b].Ye == c && a[b].capture == d && a[b].Ph == f) {
							a = a[b];
							break a
						}
				a = m
			}
			a && (a = a.key, Yb(a), Ka(this.a, a))
		}
		return this
	};
	vo.prototype.G = function() {
		vo.C.G.call(this);
		B(this.a, Yb);
		this.a.length = 0
	};
	vo.prototype.handleEvent = function() {
		e(Error("EventHandler.handleEvent not implemented"))
	};

	function xo() {}
	ba(xo);
	xo.prototype.a = 0;
	xo.getInstance();

	function yo(a) {
		this.k = a || nd()
	}
	z(yo, cc);
	q = yo.prototype;
	q.ou = xo.getInstance();
	q.fa = m;
	q.Tb = n;
	q.oa = m;
	q.cf = m;
	q.zi = m;
	q.yi = m;
	q.getId = function() {
		return this.fa || (this.fa = ":" + (this.ou.a++).toString(36))
	};
	q.W = function() {
		return this.oa
	};
	q.wl = function(a) {
		this.cf && this.cf != a && e(Error("Method not supported"));
		yo.C.wl.call(this, a)
	};
	q.zk = function() {
		this.oa = this.k.createElement("div")
	};
	q.Cc = function(a) {
		this.Tb && e(Error("Component already rendered"));
		this.oa || this.zk();
		a ? a.insertBefore(this.oa, m) : this.k.a.body.appendChild(this.oa);
		(!this.cf || this.cf.Tb) && this.ii()
	};
	q.ii = function() {
		this.Tb = l;
		zo(this, function(a) {
			!a.Tb && a.W() && a.ii()
		})
	};
	q.qg = function() {
		zo(this, function(a) {
			a.Tb && a.qg()
		});
		if(this.A) {
			var a = this.A;
			B(a.a, Yb);
			a.a.length = 0
		}
		this.Tb = n
	};
	q.G = function() {
		yo.C.G.call(this);
		this.Tb && this.qg();
		this.A && (this.A.ub(), delete this.A);
		zo(this, function(a) {
			a.ub()
		});
		this.oa && zd(this.oa);
		this.cf = this.oa = this.yi = this.zi = m
	};

	function zo(a, b) {
		a.zi && B(a.zi, b, h)
	}
	q.removeChild = function(a, b) {
		if(a) {
			var c = v(a) ? a : a.getId(),
				d;
			this.yi && c ? (d = this.yi, d = (c in d ? d[c] : h) || m) : d = m;
			a = d;
			c && a && (d = this.yi, c in d && delete d[c], Ka(this.zi, a), b && (a.qg(), a.oa && zd(a.oa)), c = a, c == m && e(Error("Unable to set parent component")), c.cf = m, yo.C.wl.call(c, m))
		}
		a || e(Error("Child is not in parent component"));
		return a
	};

	function Ao(a, b, c, d, f) {
		this.k = f || nd();
		this.width = a;
		this.height = b;
		this.i = c || m;
		this.D = d || m
	}
	z(Ao, yo);
	Ao.prototype.b = m;
	Ao.prototype.kf = function() {
		return this.Tb ? Bg(this.W()) : "number" == typeof this.width && "number" == typeof this.height ? new F(this.width, this.height) : m
	};

	function Bo(a) {
		var b = a.kf();
		return b ? b.width / (a.i ? new F(a.i, a.D) : a.kf()).width : 0
	};

	function Co() {};

	function Do(a, b) {
		this.a = a;
		this.b = b == m ? 1 : b
	}
	z(Do, Co);

	function Eo(a, b) {
		this.a = a;
		this.b = b
	};

	function Fo(a, b) {
		this.oa = a;
		this.Nn = b;
		this.nl = n
	}
	z(Fo, cc);
	q = Fo.prototype;
	q.Nn = m;
	q.oa = m;
	q.W = function() {
		return this.oa
	};
	q.addEventListener = function(a, b, c, d) {
		Ub(this.oa, a, b, c, d)
	};
	q.removeEventListener = function(a, b, c, d) {
		Wb(this.oa, a, b, c, d)
	};
	q.G = function() {
		Fo.C.G.call(this);
		$b(this.oa)
	};

	function Go(a, b, c, d) {
		Fo.call(this, a, b);
		a = this.Nn;
		b = this.W();
		c ? (b.setAttribute("stroke", c.b), c = c.a, v(c) && -1 != c.indexOf("px") ? b.setAttribute("stroke-width", parseFloat(c) / Bo(a)) : b.setAttribute("stroke-width", c)) : b.setAttribute("stroke", "none");
		c = this.W();
		d instanceof Do ? (c.setAttribute("fill", d.a), c.setAttribute("fill-opacity", d.b)) : c.setAttribute("fill", "none")
	}
	z(Go, Fo);

	function Ho(a, b) {
		Fo.call(this, a, b)
	}
	z(Ho, Fo);

	function Io(a, b) {
		Fo.call(this, a, b)
	}
	z(Io, Fo);

	function Jo(a, b, c, d) {
		Go.call(this, a, b, c, d)
	}
	z(Jo, Go);

	function Ko(a, b) {
		Fo.call(this, a, b)
	}
	z(Ko, Ho);
	Ko.prototype.clear = function() {
		yd(this.W())
	};
	Ko.prototype.setSize = function(a, b) {
		Lo(this.W(), {
			width: a,
			height: b
		})
	};

	function Mo(a, b, c, d) {
		Go.call(this, a, b, c, d)
	}
	z(Mo, Jo);

	function No(a, b) {
		Fo.call(this, a, b)
	}
	z(No, Io);
	No.prototype.setSize = function(a, b) {
		Lo(this.W(), {
			width: a,
			height: b
		})
	};

	function Oo(a, b, c, d, f) {
		Ao.call(this, a, b, c, d, f);
		this.a = {};
		this.F = sb && !Gb(526);
		this.I = new vo(this)
	}
	var Po;
	z(Oo, Ao);
	var Qo = 0;

	function Ro(a, b, c) {
		a = a.k.a.createElementNS("http://www.w3.org/2000/svg", b);
		c && Lo(a, c);
		return a
	}

	function Lo(a, b) {
		for(var c in b) a.setAttribute(c, b[c])
	}
	q = Oo.prototype;
	q.zk = function() {
		var a = Ro(this, "svg", {
				width: this.width,
				height: this.height,
				overflow: "hidden"
			}),
			b = Ro(this, "g");
		this.e = Ro(this, "defs");
		this.b = new Ko(b, this);
		a.appendChild(this.e);
		a.appendChild(b);
		this.oa = a;
		this.i && (this.W().setAttribute("preserveAspectRatio", "none"), this.F ? this.ki() : this.W().setAttribute("viewBox", "0 0 " + (this.i ? this.i + " " + this.D : "")))
	};
	q.ki = function() {
		if(this.Tb) {
			var a = this.kf();
			0 == a.width ? this.W().style.visibility = "hidden" : (this.W().style.visibility = "", this.b.W().setAttribute("transform", "scale(" + a.width / this.i + " " + a.height / this.D + ") translate(0 0)"))
		}
	};
	q.setSize = function(a, b) {
		zg(this.W(), a, b)
	};
	q.kf = function() {
		if(!rb) return this.Tb ? Bg(this.W()) : Oo.C.kf.call(this);
		var a = this.width,
			b = this.height,
			c = v(a) && -1 != a.indexOf("%"),
			d = v(b) && -1 != b.indexOf("%");
		if(!this.Tb && (c || d)) return m;
		var f, g;
		c && (f = this.W().parentNode, g = Bg(f), a = parseFloat(a) * g.width / 100);
		d && (f = f || this.W().parentNode, g = g || Bg(f), b = parseFloat(b) * g.height / 100);
		return new F(a, b)
	};
	q.clear = function() {
		this.b.clear();
		yd(this.e);
		this.a = {}
	};

	function So(a, b, c, d) {
		b = Ro(a, "path", {
			d: To(b)
		});
		c = new Mo(b, a, c, d);
		a.b.W().appendChild(c.W())
	}

	function To(a) {
		for(var b = [], c = a.Pc, d = 0, f = 0, g = a.Pa.length; f < g; f++) {
			var j = a.Pa[f],
				k = ro[j] * a.N[f],
				p = c.slice(d, d + k);
			switch(j) {
				case 0:
					b.push("M");
					Array.prototype.push.apply(b, p);
					break;
				case 1:
					b.push("L");
					Array.prototype.push.apply(b, p);
					break;
				case 2:
					b.push("C");
					Array.prototype.push.apply(b, p);
					break;
				case 3:
					j = p[3];
					b.push("A", p[0], p[1], 0, 180 < Math.abs(j) ? 1 : 0, 0 < j ? 1 : 0, p[4], p[5]);
					break;
				case 4:
					b.push("Z")
			}
			d += k
		}
		return b.join(" ")
	}

	function Uo(a, b, c) {
		if(b in a.a) return a.a[b];
		var d = "_svgdef_" + Qo++;
		c.setAttribute("id", d);
		a.a[b] = d;
		a.e.appendChild(c);
		return d
	}
	q.ii = function() {
		var a = this.kf();
		Oo.C.ii.call(this);
		a || this.dispatchEvent("resize");
		if(this.F) {
			var a = this.width,
				b = this.height;
			"string" == typeof a && (-1 != a.indexOf("%") && "string" == typeof b && -1 != b.indexOf("%")) && this.I.K(Vo(), "tick", this.ki);
			this.ki()
		}
	};
	q.qg = function() {
		Oo.C.qg.call(this);
		this.F && this.I.i(Vo(), "tick", this.ki)
	};
	q.G = function() {
		delete this.a;
		delete this.e;
		delete this.b;
		Oo.C.G.call(this)
	};

	function Vo() {
		Po || (Po = new dc(400), Po.start());
		return Po
	};

	function Wo(a, b) {
		this.start = a < b ? a : b;
		this.end = a < b ? b : a
	}
	Wo.prototype.aa = function() {
		return new Wo(this.start, this.end)
	};

	function Xo(a, b, c) {
		var d = document.createElementNS("http://www.w3.org/2000/svg", a);
		b && Wa(b, function(a, b) {
			d.setAttribute(b, a)
		});
		for(var f = 2; f < arguments.length; f++) d.appendChild(arguments[f]);
		return d
	}

	function Yo(a, b) {
		var c;
		c = ":" + (xo.getInstance().a++).toString(36);
		b.setAttribute("result", c);
		a.appendChild(b);
		return c
	};

	function Zo(a, b) {
		var c = Yo(a, Xo("feGaussianBlur", {
				"in": b,
				stdDeviation: "1.8"
			})),
			c = Yo(a, Xo("feDiffuseLighting", {
				"in": c,
				surfaceScale: "4",
				diffuseConstant: "1"
			}, Xo("feDistantLight", {
				azimuth: "270",
				elevation: "15",
				"lighting-color": "white"
			}))),
			c = Yo(a, Xo("feComposite", {
				"in": c,
				in2: b,
				operator: "in"
			}));
		return Yo(a, Xo("feComposite", {
			in2: c,
			"in": b,
			operator: "arithmetic",
			k2: 1,
			k3: 0.5,
			k4: 0
		}))
	}

	function $o(a, b) {
		var c = Yo(a, Xo("feOffset", {
				"in": b,
				dx: "-7",
				dy: "-7"
			})),
			c = Yo(a, Xo("feGaussianBlur", {
				"in": c,
				stdDeviation: "3"
			})),
			c = Yo(a, Xo("feColorMatrix", {
				"in": c,
				type: "matrix",
				values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
			})),
			d = Yo(a, Xo("feColorMatrix", {
				"in": b,
				type: "matrix",
				values: "0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 100 0"
			})),
			d = Yo(a, Xo("feGaussianBlur", {
				"in": d,
				stdDeviation: "1"
			})),
			c = Yo(a, Xo("feComposite", {
				operator: "out",
				"in": c,
				in2: d
			}));
		return Yo(a, Xo("feComposite", {
			operator: "over",
			"in": b,
			in2: c
		}))
	}

	function ap(a, b) {
		return b
	}

	function bp(a) {
		a = Ea(a, function(a) {
			return a in cp
		});
		Qa(a, function(a, c) {
			return cp[a] - cp[c]
		});
		return a
	}

	function dp(a, b) {
		if(!b) return m;
		var c = "effects:" + (b ? b.join("|") : ""),
			d = c in a.a ? a.a[c] : m;
		if(d) return d;
		var f = Xo("filter", {
				filterUnits: "userSpaceOnUse"
			}),
			g = "SourceGraphic";
		B(b, function(a) {
			a: {
				switch(a) {
					case "bevel":
						a = Zo;
						break a;
					case "dropshadow":
						a = $o;
						break a
				}
				a = ap
			}
			g = a(f, g)
		});
		return 0 < f.childNodes.length ? Uo(a, c, f) : m
	}
	var cp = {
		bevel: 1,
		dropshadow: 2
	};

	function gp(a, b) {
		var c = new yc(a.width * b.left / 100 + a.left, a.height * b.top / 100 + a.top, a.width * b.width / 100, a.height * b.height / 100),
			d = c.aa();
		a.contains(c) || (c.width < a.width ? d.left = sc(c.left, a.left, a.left + a.width - c.width) : (d.left = a.left, d.width = a.width), c.height < a.height ? d.top = sc(c.top, a.top, a.top + a.height - c.height) : (d.top = a.top, d.height = a.height));
		return d
	};

	function hp() {}
	hp.prototype.a = n;
	hp.prototype.b = m;

	function ip(a, b, c) {
		a.b ? (a.b.setSize(b, c), a.b.clear()) : (a.b = new Oo(b, c), a.b.zk());
		return a.b
	}
	hp.prototype.W = function() {
		return this.b ? this.b.W() : m
	};
	hp.prototype.kd = function() {};

	function jp() {}
	z(jp, hp);
	jp.prototype.kd = function(a, b) {
		var c = kp,
			d = oo(a);
		if(!(0 >= d.width || 0 >= d.height)) {
			var f = a.b || new $n,
				g = gp(b, d),
				j = lp(g, f.a),
				d = ip(this, j.width, j.height),
				k = f.xh,
				p = this.a && no(a),
				k = (k += p ? 1 : 0) ? new Eo(k, p ? f.$f : f.wh) : m,
				c = new Do(f.be, c(this.a, f.Pe));
			mp(d, new yc(0, 0, g.width, g.height), 8 * b.height / 720, k, c);
			c = d.W();
			np(c, "annotation-shape");
			np(c, "annotation-popup-shape");
			og(c, j.left, j.top);
			zg(c, j.width, j.height);
			f.a && (j = Ha(c.childNodes, function(a) {
				return "g" == a.tagName
			})) && op(j, "filter", dp(d, bp(f.a)))
		}
	};

	function pp() {}
	z(pp, hp);
	pp.prototype.kd = function(a, b) {
		var c = kp,
			d = oo(a);
		if(!(0 >= d.width || 0 >= d.height)) {
			var f = a.b || new $n,
				g = gp(b, d),
				d = lp(g, f.a),
				j = ip(this, d.width, d.height);
			mp(j, new yc(0, 0, g.width, g.height), 8 * b.height / 720, new Eo(f.Wh, f.be), new Do("#000", 0));
			g = j.W();
			np(g, "annotation-shape");
			g.style.opacity = c(this.a, f.Pe);
			og(g, d.left, d.top);
			zg(g, d.width, d.height)
		}
	};

	function qp() {}
	z(qp, hp);
	var rp = {
		Eh: "t",
		Ch: "l",
		Bh: "b",
		Dh: "r",
		op: "i",
		LD: ""
	};
	qp.prototype.kd = function(a, b) {
		var c = kp,
			d = a.b || new $n,
			f = d.xh,
			g = this.a && no(a),
			f = (f += g ? 1 : 0) ? new Eo(f, g ? d.$f : d.wh) : m,
			c = new Do(d.be, c(this.a, d.Pe)),
			g = oo(a);
		if(!(0 >= g.width || 0 >= g.height)) {
			var j = gp(b, g);
			g = !a.a || !a.a.a ? m : (g = a.a.a[0].a) ? new D(g[0].nn, g[0].on) : m;
			if(g) {
				var k = new D(b.width * g.x / 100 + b.left, b.height * g.y / 100 + b.top),
					g = j.aa(),
					p = new yc(k.x, k.y, 1, 1),
					r = Math.max(g.left + g.width, p.left + p.width),
					u = Math.max(g.top + g.height, p.top + p.height);
				g.left = Math.min(g.left, p.left);
				g.top = Math.min(g.top, p.top);
				g.width = r - g.left;
				g.height = u - g.top;
				var p = lp(g, d.a),
					g = ip(this, p.width, p.height),
					w = new yc(j.left - p.left, j.top - p.top, j.width, j.height),
					A = new D(k.x - p.left, k.y - p.top);
				this.j = 4.5 * b.height / 100;
				var j = 8 * b.height / 720,
					k = f ? f.a / 2 : 0,
					r = sp(w, A),
					u = this.i(w, j, A, r),
					E = A.x,
					A = A.y,
					Aa = w.width,
					gb = w.height,
					Y = w.left,
					w = w.top,
					V = new qo;
				so(V, Y + j + k, w + k);
				r == rp.Eh && (V.a(u.start, w + k), V.a(E, A), V.a(u.end, w + k));
				V.a(Y + Aa - j - k, w + k);
				uo(V, j, j, -90, 90);
				r == rp.Dh && (V.a(Y + Aa - k, u.start), V.a(E, A), V.a(Y + Aa - k, u.end));
				V.a(Y + Aa - k, w + gb - j - k);
				uo(V, j, j, 0, 90);
				r == rp.Bh && (V.a(u.end, w + gb - k), V.a(E, A), V.a(u.start, w + gb - k));
				V.a(Y + j + k, w + gb - k);
				uo(V, j, j, 90, 90);
				r == rp.Ch && (V.a(Y + k, u.end), V.a(E, A), V.a(Y + k, u.start));
				V.a(Y + k, w + j + k);
				uo(V, j, j, 180, 90);
				to(V);
				So(g, V, f, c);
				f = g.W();
				np(f, "annotation-shape");
				np(f, "annotation-speech-shape");
				og(f, p.left, p.top);
				zg(f, p.width, p.height);
				d.a && (f = Ha(f.childNodes, function(a) {
					return "g" == a.tagName
				})) && op(f, "filter", dp(g, bp(d.a)))
			}
		}
	};

	function sp(a, b) {
		var c = a.top - b.y,
			d = b.x - a.left - a.width,
			f = b.y - a.top - a.height,
			g = a.left - b.x,
			j = Math.max(c, d, f, g);
		if(0 > j) return rp.op;
		switch(j) {
			case c:
				return rp.Eh;
			case d:
				return rp.Dh;
			case f:
				return rp.Bh;
			case g:
				return rp.Ch
		}
		return rp.op
	}
	qp.prototype.i = function(a, b, c, d) {
		function f(a, c, d) {
			j = Math.min(Math.max(d - 2 * b, 0), g);
			k = sc(a - j / 2, c + b, c + d - j - b)
		}
		var g = this.j,
			j = 0,
			k = 0;
		d == rp.Eh || d == rp.Bh ? f(c.x, a.left, a.width) : (d == rp.Ch || d == rp.Dh) && f(c.y, a.top, a.height);
		return new Wo(k, k + j)
	};

	function tp() {}
	z(tp, qp);
	tp.prototype.i = function(a, b, c, d) {
		function f(a, c, d) {
			j = Math.min(Math.max(d - 2 * b, 0), g);
			k = a <= c + d / 2 ? Math.max(c + d / 4 - j / 2, c + b) : Math.min(c + 3 * d / 4 - j / 2, c + d - j - b)
		}
		var g = this.j,
			j = 0,
			k = 0;
		d == rp.Eh || d == rp.Bh ? f(c.x, a.left, a.width) : (d == rp.Ch || d == rp.Dh) && f(c.y, a.top, a.height);
		return new Wo(k, k + j)
	};

	function up() {}
	z(up, hp);
	q = up.prototype;
	q.kd = function(a, b) {
		var c = oo(a);
		if(!(0 >= c.width || 0 >= c.height)) {
			var d = a.b || new $n,
				f = gp(b, c),
				g = 0 < this.ai() ? vp(f, this.ai()) : f;
			g.left += f.left;
			g.top += f.top;
			var j = lp(g, d.a),
				c = ip(this, j.width, j.height),
				k = new Do("#000", 0),
				p = 0 < this.$h() ? vp(g, this.$h()) : g,
				g = this.Jk(a, b),
				p = Ro(c, "image", {
					x: p.left,
					y: p.top,
					width: p.width,
					height: p.height,
					"image-rendering": "optimizeQuality",
					preserveAspectRatio: "none"
				});
			p.setAttributeNS("http://www.w3.org/1999/xlink", "href", g);
			g = new No(p, c);
			c.b.W().appendChild(g.W());
			g = g.W();
			if(0 < this.Zh(a)) {
				var p = new Eo(this.Zh(a), d.be),
					f = new yc(0, 0, f.width, f.height),
					r = 8 * b.height / 720,
					u;
				u = wp(f, r, p.a / 2 + 1);
				var w = "mask" in c.a ? c.a.mask : m;
				if(w) u = w;
				else {
					var w = document.createElementNS("http://www.w3.org/2000/svg", "mask"),
						A = document.createElementNS("http://www.w3.org/2000/svg", "path");
					A.setAttribute("d", To(u));
					A.setAttribute("fill", "#FFF");
					w.appendChild(A);
					u = Uo(c, "mask", w)
				}
				op(g, "mask", u);
				mp(c, f, r, p, k)
			}
			k = c.W();
			np(k, "annotation-shape");
			np(k, "annotation-image-shape");
			og(k, j.left, j.top);
			zg(k, j.width, j.height);
			d.a && (j = Ha(k.childNodes, function(a) {
				return "g" == a.tagName
			})) && op(j, "filter", dp(c, bp(d.a)))
		}
	};
	q.Jk = function() {
		return ""
	};
	q.$h = function() {
		return 0
	};
	q.ai = function() {
		return 0
	};
	q.Zh = function() {
		return 0
	};

	function xp() {}
	z(xp, up);
	var yp = {
		ww: 120,
		uw: 67.5,
		tw: "default.jpg",
		rw: "hqdefault.jpg"
	};
	xp.prototype.Jk = function(a, b) {
		var c = b.width > yp.ww || b.height > yp.uw ? yp.rw : yp.tw,
			d = po(a, "openUrl");
		return hn(d && d.url && d.url.gi.v ? d.url.gi.v : "", c)
	};
	xp.prototype.$h = function() {
		return 4 / 3
	};
	xp.prototype.ai = function() {
		return 16 / 9
	};
	xp.prototype.Zh = function(a) {
		return(a.b || new $n).Wh
	};

	function zp() {}
	z(zp, up);
	zp.prototype.Jk = function(a) {
		return !a.j ? "" : this.a ? a.j.a : a.j.b
	};
	zp.prototype.$h = function() {
		return 1
	};
	zp.prototype.ai = function() {
		return 1
	};
	zp.prototype.Zh = function() {
		return 0
	};

	function vp(a, b) {
		var c = a.width,
			d = a.height,
			f = 0,
			g = 0;
		a.width / a.height > b ? (d = a.width / b, g = (a.height - d) / 2) : (c = a.height * b, f = (a.width - c) / 2);
		return new yc(f, g, c, d)
	}

	function mp(a, b, c, d, f) {
		(b = wp(b, c, d ? d.a / 2 + 1 : 0)) && So(a, b, d, f)
	}

	function wp(a, b, c) {
		var d = new qo;
		so(d, a.left + b + c, a.top + c);
		d.a(a.left + a.width - b - c, a.top + c);
		uo(d, b, b, -90, 90);
		d.a(a.left + a.width - c, a.top + a.height - b - c);
		uo(d, b, b, 0, 90);
		d.a(a.left + b + c, a.top + a.height - c);
		uo(d, b, b, 90, 90);
		d.a(a.left + c, a.top + b + c);
		uo(d, b, b, 180, 90);
		to(d);
		return d
	}

	function np(a, b) {
		var c = a.getAttribute("class"),
			c = c ? c.split(/\s+/) : []; - 1 == c.indexOf(b) && (c.push(b), a.setAttribute("class", c.join(" ")))
	}

	function op(a, b, c) {
		b && c && a.setAttribute(b, "url(#" + c + ")")
	}

	function kp(a, b) {
		return a ? Math.max(b, 0.9) : b
	}

	function lp(a, b) {
		var c = new vc(a.top, a.left + a.width, a.top + a.height, a.left),
			d = Ha(b, function(a) {
				return "dropshadow" == a
			}) ? new vc(0, 7, 7, 0) : new vc(0, 0, 0, 0);
		ia(d) ? (c.top -= d.top, c.right += d.right, c.bottom += d.bottom, c.left -= d.left) : (c.top -= d, c.right += h, c.bottom += h, c.left -= NaN);
		return zc(c)
	};

	function Ap(a, b, c) {
		this.a = a;
		this.j = 0;
		this.e = b;
		c && (this.D = c)
	}
	Ap.prototype.D = 70;
	Ap.prototype.b = n;
	Ap.prototype.start = function(a) {
		this.A = y();
		this.j = a;
		this.k = this.A + this.j;
		this.b = l;
		a = this.a;
		var b = a.getAttribute("class"),
			b = b ? b.split(/\s+/) : [],
			c = b.indexOf("hid"); - 1 != c && (b.splice(c, 1), a.setAttribute("class", b.join(" ")));
		Jf(this.i);
		this.i = Hf(x(this.F, this), this.D)
	};

	function Bp(a) {
		a.b = n;
		np(a.a, "hid");
		a.i && Jf(a.i)
	}
	Ap.prototype.F = function() {
		if(this.b) {
			var a = y(),
				b;
			b = a >= this.k ? 0 : 1 - (a - this.A) / this.j;
			var c = L("countdowntimer-diminishing-pieslice", this.a),
				d = parseInt(this.a.getAttribute("width"), 10),
				f = new qo,
				g = d / 2 - 5;
			so(f, d / 2, d / 2);
			f.a(d / 2, 5);
			uo(f, g, g, -90, 360 * -b);
			f.a(d / 2, d / 2);
			to(f);
			c.setAttribute("d", To(f));
			a >= this.k && (Bp(this), this.e && this.e())
		}
	};
	var Cp = {
		"plus.google.com": m,
		"oz-dev.plus.corp.google.com": m
	};

	function Dp(a) {
		if(!a) return n;
		a = a.replace(/https?:\/\//g, "");
		var b = a.split("/", 1);
		if(!b || 1 > b.length || !b[0]) return n;
		b = b[0].toLowerCase().split(".").reverse();
		return 2 > b.length ? n : ("com" == b[0] && "youtube" == b[1] || "be" == b[0] && "youtu" == b[1]) && -1 == a.indexOf("/redirect?")
	}

	function Ep(a) {
		if(!a) return n;
		var b = Cc(a);
		a = b[3];
		b = b[5];
		if(!a || !b) return n;
		a = a.toLowerCase();
		return a in Cp ? (a = Cp[a]) ? 0 == b.indexOf(a) : l : n
	}

	function Fp(a, b) {
		if("new" == a.target) return -1;
		var c = a.value ? a.value : m;
		if(!c) return -1;
		var c = c.replace(/https?:\/\//g, ""),
			d;
		if(!(d = !Dp(c))) d = (d = Cc(c)[5] || m) && decodeURIComponent(d) || "", d = d.split("/"), d = "/" + (1 < d.length ? d[1] : ""), d = "/watch" != d;
		if(d) return -1;
		d = rf(c);
		if(!d || d.v != b.J || d.list || d.p) return -1;
		c = c.split("#", 2);
		if(!c || 2 > c.length) return -1;
		(c = qf(c[1])) && c.t ? (d = c.t, c = 0, -1 != d.indexOf("h") && (d = d.split("h"), c = 3600 * d[0], d = d[1]), -1 != d.indexOf("m") && (d = d.split("m"), c = 60 * d[0] + c, d = d[1]), -1 != d.indexOf("s") ? (d = d.split("s"), c = 1 * d[0] + c) : c = 1 * d + c) : c = -1;
		return c
	};

	function Gp(a) {
		this.Ea = a;
		this.a = {}
	}

	function Hp(a, b) {
		var c = {};
		c["iv-event"] = b;
		c["a-id"] = a.id;
		c["a-type"] = Ip(a);
		var d = mo(a);
		d && (c["l-type"] = d.type, c.link = escape(d.value ? d.value : m));
		return c
	}

	function Ip(a) {
		switch(a.type) {
			case "text":
				switch(a.style) {
					case "popup":
					case "donation":
						return 1;
					case "speech":
						return 2;
					case "title":
						return 4;
					default:
						return 0
				}
			case "highlight":
				return 3;
			case "image":
				switch(a.style) {
					case "video":
						return 11;
					default:
						return 0
				}
			default:
				return 0
		}
	}

	function Jp(a, b) {
		a.Ea.g("command_log", "iv", b)
	};

	function Kp(a, b, c, d) {
		this.M = a;
		this.j = b;
		this.u = c;
		this.Ea = d;
		this.a = new gk;
		this.fh = this.va = this.X = m
	}
	q = Kp.prototype;
	q.M = m;
	q.X = m;
	q.hc = m;
	q.xb = m;
	q.u = m;
	q.Ea = m;
	q.va = m;
	q.fh = m;

	function Lp(a) {
		return "highlightText" != a.M.style
	}
	q.Jq = function(a) {
		this.Ea.g("closed", this.M);
		a.stopPropagation()
	};
	q.ym = function(a) {
		this.Ea.g("click", this.M);
		a.stopPropagation()
	};
	q.Lq = function() {
		this.xb && W(this.xb);
		this.hc && Eg(this.hc, 1);
		var a = Mp(this);
		this.va && (this.va.a = l, Eg(this.X, Np(this) ? 1 : 0), a && this.va.kd(this.M, a));
		this.Ea.g("mouseover", this.M)
	};
	q.Kq = function() {
		this.xb && X(this.xb);
		this.hc && (this.hc.style.opacity = 0.6);
		var a = Mp(this);
		this.va && (this.va.a = n, Eg(this.X, Np(this) ? 1 : 0), a && this.va.kd(this.M, a));
		this.Ea.g("mouseout", this.M)
	};

	function Op(a) {
		if(a.X || a.va) {
			var b;
			if(a.fh) {
				b = oo(a.fh);
				var c = oo(a.M);
				!b || !c ? b = m : (c.top += b.top, c.left += b.left, b = c)
			} else b = oo(a.M);
			if(c = b) {
				b = Mp(a);
				if(a.X && b) {
					c = gp(b, c);
					zg(a.X, c.width, c.height);
					og(a.X, c.left, c.top);
					var d = ek(a.u);
					if(d) {
						var f;
						f = a.M.b;
						f = f.padding ? f.padding : new vc("speech" == a.M.style ? 1.6 : 0.8, "speech" == a.M.style ? 1.6 : 0.8, "speech" == a.M.style ? 1.6 : 0.8, "speech" == a.M.style ? 1.6 : 0.8);
						d = new vc(f.top * d.height / 100, f.right * d.width / 100, f.bottom * d.height / 100, f.left * d.width / 100);
						a.hc && (d.right += 1.5 * b.height / 100);
						a.X.style.padding = d.top + "px " + d.right + "px " + d.bottom + "px " + d.left + "px"
					}
					"label" == a.M.style && a.b && (a.b.style.padding = a.X.style.padding);
					a.hc && (d = 4.2 * b.height / 100, d = new F(d, d), zg(a.hc, d), "highlight" == a.M.type || "label" == a.M.style ? (f = 1.5 * b.height / 100, d = new D(c.width - d.width - f, c.height - d.height - f)) : d = new D(c.width - d.width - 3 * b.height / 100, (c.height - d.height) / 2), og(a.hc, d));
					if(a.xb) {
						var g = 6 * b.height / 100;
						zg(a.xb, new F(g, g));
						d = a.xb;
						f = Bg(a.xb);
						var g = g / 2,
							j = b.left + b.width - (c.left + c.width) >= g,
							k = c.top - b.top >= g;
						og(d, j && k ? new D(c.width - g, -g) : j ? new D(c.width - g, c.height > 3 * g + f.height ? g : c.height - g) : k ? new D(c.width > 3 * g + f.width ? c.width - g - f.width : -g, -g) : c.width / b.width > c.height / b.height ? new D(c.width > 3 * g + f.width ? c.width - g - f.width : -g, c.height - g) : new D(-g, c.height > 3 * g + f.height ? g : c.height - g))
					}
				}
				a.va && b && a.va.kd(a.M, b);
				b = a.X;
				c = a.M.b || new $n;
				d = a.u.Zg;
				b.style.color = "highlightText" == a.M.style ? c.pk : c.$f;
				b.style.fontSize = d.height * c.qk / 100 + "px";
				if("title" == a.M.style || "highlightText" == a.M.style) b.style.textAlign = "center";
				c.Nh && (b.style.fontWeight = c.Nh);
				if(a.X)
					for(b = 10; a.X.scrollHeight > a.X.offsetHeight && b;) {
						c = Qg(a.X);
						if(5 > c) break;
						c--;
						a.X.style.fontSize = c + "px";
						b--
					}
			}
		}
	}
	q.$ = function() {
		X(this.X);
		this.va && X(this.va.W())
	};

	function Np(a) {
		return "label" != a.M.style || a.va.a
	}

	function Mp(a) {
		var b;
		b = a.u.Zg;
		"player_relative" == a.M.e && (a = a.u.Xc, b = new yc((b.width - a.width) / 2, (b.height - a.height) / 2, a.width, a.height));
		return b
	};

	function Pp(a) {
		Aj.call(this, a);
		this.u = a.getEnvironmentData();
		this.b = {};
		this.e = {};
		this.F = {};
		this.I = {};
		this.A = {};
		this.D = new Gp(this.i);
		var b = a.getRootNode();
		a = Qp;
		this.Z = L(a.Us, b);
		N(this.Z, "click", x(this.Zs, this));
		this.z("onResize", x(this.$s, this));
		this.z("onStateChange", x(this.ft, this));
		this.z("mouseover", x(this.dt, this));
		this.z("mouseout", x(this.ct, this));
		this.z("click", x(this.Xs, this));
		this.z("closed", x(this.Ys, this));
		b = L(a.Vs, b);
		a = L(a.Ws, b);
		this.appendToVideoContent(a);
		this.R = new Ap(a, x(this.nj, this))
	}
	z(Pp, Aj);
	var Qp = {
		Us: "html5-annotations-button",
		Vs: "video-annotations",
		Ws: "countdowntimer"
	};
	q = Pp.prototype;
	q.ja = "iv";
	q.dk = n;
	q.ln = l;
	q.pa = n;
	q.Ob = n;

	function Rp(a) {
		return !Xd("video-annotations", a.getRootNode()) || !Sp(a) ? m : new Pp(a)
	}

	function Sp(a) {
		return "leanback" == a.getEnvironmentData().S ? n : Ii(a.getVideoData(), "iv3_module")
	}
	q.lb = function() {
		return Sp(this.a)
	};
	q.create = function() {
		Pp.C.create.call(this);
		this.B = this.a.getVideoData();
		1 == (this.u.Qa || this.B.wc) && this.load()
	};
	q.destroy = function() {
		this.la();
		Pp.C.destroy.call(this)
	};
	q.Zs = function() {
		this.pa || this.Ob ? this.la() : this.load()
	};
	q.$s = function() {
		for(var a in this.F) Op(this.F[a])
	};
	q.ft = function(a) {
		this.ln = O(a.a, 8);
		0 > Si(a, 4) && Bp(this.R)
	};
	q.load = function() {
		Pp.C.load.call(this);
		var a = {
			format: "XML",
			method: "GET",
			Oc: x(this.Iv, this)
		};
		this.Ob = l;
		this.B.Rk && Pf(this.B.Rk, a)
	};
	q.la = function() {
		Jp(this.D, {
			"iv-event": 1
		});
		this.nj();
		Bj(this);
		for(var a in this.b) delete this.b[a];
		for(a in this.e) {
			var b = this.e[a];
			jk(b.a);
			b.X && zd(b.X);
			b.va && b.va.W() && zd(b.va.W());
			delete this.e[a]
		}
		this.pa = this.Ob = n;
		this.I = {};
		this.A = {};
		this.e = {};
		this.b = {};
		Pp.C.la.call(this)
	};

	function Tp(a, b) {
		for(var c = {}, d = 0; d < b.attributes.length; d++) {
			var f = b.attributes[d];
			c[f.name] = f.nodeValue
		}
		for(d = 0; d < b.childNodes.length; d++)
			if(f = b.childNodes[d], f.tagName) {
				var g;
				c[f.tagName] ? g = c[f.tagName] : (g = [], c[f.tagName] = g);
				f && "TEXT" == f.tagName ? 1 == f.childNodes.length && 3 == f.childNodes[0].nodeType ? g.push(f.childNodes[0].nodeValue) : g.push("") : f && g.push(Tp(a, f))
			}
		return c
	}
	q.Iv = function(a) {
		if(this.Ob && !this.pa) {
			this.Ob = n;
			var b = a.responseXML ? a.responseXML.getElementsByTagName("annotations") : m;
			if(Nf(a) && b) {
				a = b[0].getElementsByTagName("annotation");
				for(b = 0; b < a.length; b++) {
					var c = Tp(this, a[b]);
					if(!c.dynamic_display_spec) {
						var d = new io;
						try {
							d.gb(c)
						} catch(f) {
							continue
						}
						this.b[d.id] = d
					}
				}
				for(var g in this.b) {
					a = this.b[g];
					b = a;
					c = h;
					b: if("highlight" == b.type || "image" == b.type) c = l;
						else {
							if("text" == b.type)
								for(c in c = h, jo)
									if(b.style == jo[c]) {
										c = l;
										break b
									}
							c = n
						}
					c ? (c = new Kp(b, x(this.appendToVideoContent, this), this.u, this.i), b = this.e[b.id] = c) : b = m;
					if(b && a.a && a.a.b) {
						c = a.a.b;
						if(d = this.b[c]) b.fh = d;
						this.A[c] = a.id
					}
				}
				G(this.a.getRootNode(), this.ja + "-loaded");
				this.pa = l;
				g = [];
				for(var j in this.b) a = this.b[j], a.a && (a.a && ho(a.a)) && (b = ho(a.a), a = 1E3 * b.start, b = 1E3 * b.end, 0 == a && (a++, b++), a == b && b++, a = new Le(a, b, {
					id: j
				}), g.push(a));
				this.addCueRange.apply(this, g)
			}
		}
	};
	q.Sb = function(a) {
		Pp.C.Sb.call(this, a);
		a = a.getId();
		if(!this.I[a]) {
			var b = this.b[a];
			if("pause" == b.type) {
				if(this.ln && (a = po(b, "pause")) && a.duration && a.duration.value) this.dk = l, this.g("command_pause"), this.R.start(1E3 * a.duration.value)
			} else Up(this, a), b = this.D, a = this.b[a], b.a[a.id] || (b.a[a.id] = l, Jp(b, Hp(a, 2)))
		}
	};
	q.oc = function(a) {
		Pp.C.oc.call(this, a);
		Vp(this, a.getId())
	};

	function Vp(a, b) {
		var c = a.e[b];
		if(c) {
			var d = a.A[b];
			d && Vp(a, d);
			c.$();
			delete a.F[b]
		}
	}

	function Up(a, b) {
		var c = a.e[b];
		if(c) {
			if(c.u.Zg) {
				var d = c.M.b;
				if(!(d && 0 == d.Pe || "title" == c.M.style || "highlightText" == c.M.style || "pause" == c.M.type) && !c.va)
					if(d = Mp(c)) {
						var f = m;
						"highlight" == c.M.type || "label" == c.M.style ? f = new pp : "popup" == c.M.style ? f = new jp : "anchored" == c.M.style ? f = new qp : "speech" == c.M.style ? f = new tp : "image" == c.M.type && ("video" == c.M.style ? f = new xp : "channel" == c.M.style && (f = new zp));
						f && (f.kd(c.M, d), c.va = f, d = f.W(), X(d), Lp(c) && c.a.K(c.va.W(), "click", x(c.ym, c)), c.j(d))
					}
				if(!c.X) {
					d = ["annotation", "hid"];
					Lp(c) || d.push("annotation-no-mouse");
					c.X = vd("div", d);
					c.M.i && ("label" == c.M.style ? (d = c.M.b || new $n, c.b = vd("div", ["label-text"]), c.b.style.backgroundColor = d.be, Ed(c.b, c.M.i), c.X.appendChild(c.b)) : Ed(c.X, c.M.i));
					Od(c.X, "annotation_id", c.M.id);
					c.j(c.X);
					if(Lp(c) && (c.a.K(c.X, "mouseover", x(c.Lq, c)), c.a.K(c.X, "mouseout", x(c.Kq, c)), c.a.K(c.X, "click", x(c.ym, c)), no(c.M) && "image" != c.M.type)) {
						if(d = mo(c.M)) c.X.title = d.value ? d.value : m;
						c.hc = vd("span", "annotation-link-icon");
						c.X.appendChild(c.hc)
					}
					"image" == c.M.type && "video" != c.M.style || (d = L("annotation-close-button-container", h), d = Vd(K(d)), d.removeAttribute("id"), c.xb = d, Od(c.xb, "annotation_id", c.M.id), c.a.K(c.xb, "click", x(c.Jq, c)), c.X.appendChild(c.xb));
					no(c.M) || (c.X.style.cursor = "default")
				}
				W(c.X);
				Eg(c.X, Np(c) ? 1 : 0);
				Op(c);
				c.va && W(c.va.W())
			}
			a.F[b] = c
		}
	}
	q.Xs = function(a) {
		if(a && a.id) {
			var b = this.D;
			mo(a) && Jp(b, Hp(a, 3));
			if(b = mo(a)) {
				var c = Fp(b, this.B);
				if(-1 != c) this.g("command_seek", c), this.nj();
				else {
					var c = this.B,
						d = b.value ? b.value : m;
					d ? Dp(d) ? (c = d.split("#", 2), a = uf(c[0], {
						feature: "iv",
						annotation_id: a.id
					}) + (c[1] ? "#" + c[1] : "")) : a = b.$m && !c.Gk || c.Fk || Ep(d) ? d : m : a = m;
					a && (this.pauseVideo(), window.open(a, !this.B.Hk ? "_top" : "embedded" == this.u.S ? "_blank" : b.target ? "new" == b.target ? "_blank" : "_top" : Dp(b.value ? b.value : m) ? "_top" : "_blank"))
				}
			}
		}
	};
	q.dt = function(a) {
		(a = this.A[a.id]) && Up(this, a)
	};
	q.ct = function(a) {
		(a = this.A[a.id]) && Vp(this, a)
	};
	q.Ys = function(a) {
		if(a || a.id) this.I[a.id] = l, Vp(this, a.id), a && Jp(this.D, Hp(a, 4))
	};
	q.nj = function() {
		Bp(this.R);
		this.dk && (this.dk = n, this.g("command_play"))
	};

	function Wp(a) {
		P.call(this);
		this.b = new gk;
		this.I = L("html5-playlist", a);
		L("html5-playlist-info", a);
		this.e = L("html5-playlist-message", a);
		this.k = L("html5-playlist-title", a);
		this.A = L("html5-playlist-pager", a);
		this.D = L("html5-playlist-pager-button-left", this.A);
		this.F = L("html5-playlist-pager-button-right", this.A);
		N(this.D, "click", x(this.Wq, this));
		N(this.F, "click", x(this.Xq, this));
		this.a = L("html5-playlist-strip", a);
		this.Qe = Bg(this.I).width;
		this.R = L("html5-playlist-thumbnail", this.a);
		zd(this.R)
	}
	z(Wp, P);
	q = Wp.prototype;
	q.Qe = 0;
	q.H = m;

	function Xp(a, b) {
		b != a.H && (a.H && a.H.ia("shuffle", a.sg, a), a.H = b, a.H.z("shuffle", a.sg, a), Ed(a.e, "Playlist"), "" == a.H.title ? Ed(a.k, "unknown") : Ed(a.k, a.H.title + " (" + a.H.Rb + (1 == a.H.Rb ? " video)" : " videos)")), a.sg())
	}
	q.Xr = function(a) {
		this.g("playvideoat", a.currentTarget["playlist-index"])
	};
	q.Yr = function(a) {
		a = a.currentTarget["playlist-index"];
		var b = Ni(this.H, a);
		a == this.H.ka ? Ed(this.e, "Currently playing") : Ed(this.e, "Switch to");
		Ed(this.k, b.title)
	};
	q.Zr = function() {
		Ed(this.e, "Playlist");
		Ed(this.k, this.H.title + " (" + this.H.Rb + (1 == this.H.Rb ? " video)" : " videos)"))
	};

	function Yp(a) {
		var b = qd("html5-playlist-thumbnail"),
			c = a.H.ka;
		B(b, function(a) {
			J(a, "html5-playlist-thumbnail-current", a["playlist-index"] == c)
		})
	}
	q.Wq = function() {
		this.a.style.left = Math.min(qg(this.a).x + this.Qe, 0) + "px";
		this.sg()
	};
	q.Xq = function() {
		this.a.style.left = Math.max(qg(this.a).x - this.Qe, this.Qe - (92 * this.H.Rb + 2)) + "px";
		this.sg()
	};
	q.sg = function() {
		jk(this.b);
		for(var a = this.a.cloneNode(n), b = Math.max(0, Math.floor((-1 * qg(this.a).x - 2) / 92)), c = Math.min(this.H.Rb - 1, Math.ceil(b + this.Qe / 92)); b <= c; b++) {
			var d = this.R.cloneNode(n),
				f = Ni(this.H, b);
			d.src = hn(f.J);
			d["playlist-index"] = b;
			d.style.left = 92 * b + 2 + "px";
			this.b.K(d, "click", x(this.Xr, this));
			this.b.K(d, "mouseenter", x(this.Yr, this));
			this.b.K(d, "mouseleave", x(this.Zr, this));
			a.appendChild(d)
		}
		Yp(this);
		this.A.style.display = 92 * this.H.Rb + 2 > this.Qe ? "block" : "none";
		Ad(a, this.a);
		this.a = a;
		Yp(this)
	};
	q.G = function() {
		ke(this.D);
		ke(this.F);
		jk(this.b);
		this.F = this.D = this.A = this.k = this.e = this.I = m;
		Wp.C.G.call(this)
	};

	function Zp(a) {
		Aj.call(this, a);
		var b = a.getRootNode();
		this.b = new Wp(b);
		this.b.z("playvideoat", a.playVideoAt, a);
		Ta(this, this.b);
		this.e = L("html5-playlist-button", b);
		N(this.e, "click", x(this.Du, this));
		this.z("fullscreentoggled", this.Cu, this)
	}
	z(Zp, Aj);
	q = Zp.prototype;
	q.ja = "playlist";
	q.create = function() {
		var a = this.a.getFullPlaylist();
		Xp(this.b, a);
		Yp(this.b);
		Zp.C.create.call(this)
	};
	q.destroy = function() {
		this.a.getFullPlaylist() || (Xp(this.b, m), Zp.C.destroy.call(this))
	};
	q.load = function() {
		this.pa = l;
		Zp.C.load.call(this)
	};
	q.la = function() {
		this.pa = n;
		Zp.C.la.call(this)
	};
	q.Du = function() {
		this.pa ? this.la() : this.load()
	};
	q.Cu = function(a) {
		var b = this.a.getEnvironmentData().S;
		this.pa && (!a && "detailpage" == b) && this.la()
	};
	q.lb = function() {
		return !!this.a.getFullPlaylist()
	};
	q.G = function() {
		ke(this.e);
		this.e = m;
		Zp.C.G.call(this)
	};

	function $p(a) {
		return new Zp(a)
	};
	var aq = /#(.)(.)(.)/;

	function bq(a) {
		cq.test(a) || e(Error("'" + a + "' is not a valid hex color"));
		4 == a.length && (a = a.replace(aq, "#$1$1$2$2$3$3"));
		a = a.toLowerCase();
		return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
	}
	var cq = /^#(?:[0-9a-f]{3}){1,2}$/i;
	var dq = RegExp("^[^\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
		eq = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]"),
		fq = RegExp("^(ar|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Arab|Hebr|Thaa|Nkoo|Tfng))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
	var gq = ["left", "right", "center"],
		hq = {
			id: 0,
			gf: 0,
			yh: 7,
			zh: 50,
			Xw: 80,
			td: 95,
			Hc: 15,
			jk: 100,
			isVisible: l,
			textAlign: gq[2],
			je: 0,
			backgroundColor: "#080808",
			uh: "#fff",
			Rw: 1,
			xl: 1
		},
		iq = {
			id: 99,
			gf: 1,
			yh: 0,
			zh: 5,
			td: 7,
			Hc: 2,
			jk: 32,
			textAlign: gq[0]
		},
		jq = ["CA", "MX", "US"];

	function kq(a) {
		a = a || hq;
		pa(this, a)
	}
	q = kq.prototype;
	q.yh = 7;
	q.zh = 50;
	q.td = 95;
	q.Xw = 80;
	q.je = 0;
	q.textAlign = "center";
	q.backgroundColor = "#080808";
	q.uh = "#fff";
	q.Rw = 1;
	q.xl = 1;
	q.Hc = 15;
	q.jk = 32;
	q.isVisible = l;
	q.fontFamily = '"Arial Unicode Ms", Arial';
	q.Tv = "100%";

	function lq(a, b) {
		this.id = a;
		this.ba = new kq(b);
		var c = "caption-window";
		0 == this.id && (c = "standard-caption-window");
		this.ca = vd("div", {
			id: "caption-window-" + this.id,
			"class": c
		});
		this.qf = vd("span", {
			"class": "captions-text",
			style: "visibility: hidden"
		});
		this.qf.innerHTML = "C";
		this.ga = vd("span", {
			"class": "captions-text",
			tabindex: "4",
			"aria-live": "assertive"
		});
		c = vd("div", {
			"class": "caption-window-transform"
		});
		c.appendChild(this.ga);
		this.ca.appendChild(c)
	}
	q = lq.prototype;
	q.id = 0;
	q.ba = m;
	q.hg = "";
	q.Xb = m;
	q.ca = m;
	q.ga = m;
	q.qf = m;
	q.type = 1;
	q.getType = function() {
		return this.type
	};
	q.th = function() {
		var a;
		this.qf.style.fontFamily = this.ga.style.fontFamily;
		this.ca.appendChild(this.qf);
		a = this.qf.offsetHeight;
		this.ca.removeChild(this.qf);
		return a
	};
	q.gg = function() {
		this.ga && (0 != this.id && (Ag(this.ca, "100%"), Ag(this.ca, this.ga.offsetWidth)), mq(this), ok(this.ca, this.ba.isVisible))
	};

	function mq(a) {
		og(a.ca, a.ba.zh + "%", a.ba.td + "%");
		for(var b = 0; 8 >= b; b++) H(a.ca, "anchor-point-" + b);
		G(a.ca, "anchor-point-" + a.ba.yh)
	}
	q.tn = function(a) {
		var b = [];
		a.forEach(function(a) {
			a.Ci ? b[b.length - 1] += a.zd() : b.push(a.zd())
		}, this);
		this.le(b.join("\n"));
		this.Xb = a
	};
	q.le = function(a) {
		this.hg = a = nq(a);
		this.ga.innerHTML = this.hg;
		this.yl();
		this.gg()
	};
	q.yl = function() {
		this.ca.style.textAlign = this.ba.textAlign;
		this.ga.style.backgroundColor = this.ba.backgroundColor;
		this.ga.style.color = this.ba.uh;
		this.ga.style.opacity = this.ba.xl;
		this.ga.style.fontFamily = this.ba.fontFamily;
		this.ga.style.fontSize = this.ba.Tv;
		1 == this.ba.je ? this.ga.setAttribute("dir", "rtl") : this.ga.removeAttribute("dir")
	};
	q.toString = function() {
		var a = "Caption window (" + this.id + "): " + this.hg,
			b;
		for(b in this.ba) a += b + " " + this.ba[b] + " | ";
		return a
	};

	function nq(a) {
		a = a.split("\n");
		for(var b = 0, c = a.length; b < c; b++) a[b] = a[b] ? "&nbsp;" + a[b] + "&nbsp;" : "";
		return a.join("<br>")
	}
	q.Fi = function() {
		this.Xb = [];
		this.le("")
	};

	function oq(a, b) {
		lq.call(this, a, b);
		this.ga.style.display = "block";
		this.ga.style.padding = "0";
		this.Bb = []
	}
	z(oq, lq);
	q = oq.prototype;
	q.type = 0;
	q.un = "";
	q.pe = n;
	q.Bd = m;
	q.Bb = m;
	q.th = function() {
		return this.Bb[0] ? this.Bb[0].offsetHeight : 0
	};
	q.gg = function() {
		0 != this.id && (this.pe = l, Ag(this.ca, "100%"), Ag(this.ca, this.pe ? this.Bb.reduce(function(a, c) {
			return Math.max(a, c.offsetWidth)
		}, 0) : this.Bd.width), this.pe = n);
		var a = Math.round(this.ba.Hc * this.th());
		kg(this.ca, "max-height", a + "px");
		mq(this);
		ok(this.ca, this.ba.isVisible)
	};
	q.le = function(a) {
		this.Fi();
		a = nq(a);
		this.pe || (this.hg = a);
		a = a.split("<br>");
		for(var b = 0, c = a.length; b < c; b++)
			if(a[b]) {
				var d = vd("div", {
						"class": "caption-row-holder"
					}),
					f = vd("span", {
						"class": "caption-row captions-text"
					});
				d.appendChild(f);
				f.innerHTML = a[b];
				this.pe || (f.style.left = this.Bd.mn[b]);
				this.ga.appendChild(d);
				this.Bb.push(f)
			}
		this.yl();
		this.gg()
	};
	q.Fi = function() {
		for(var a = 0, b = this.Bb.length; a < b; a++) {
			var c = Ld(this.Bb[a], "caption-row-holder");
			zd(c)
		}
		this.Bb = []
	};
	q.yl = function() {
		this.ca.style.textAlign = this.ba.textAlign;
		for(var a = 0, b = this.Bb.length; a < b; a++) this.Bb[a].style.backgroundColor = this.ba.backgroundColor;
		this.ga.style.color = this.ba.uh;
		this.ga.style.opacity = this.ba.xl;
		this.ga.style.fontFamily = this.ba.fontFamily;
		1 == this.ba.je ? this.ga.setAttribute("dir", "rtl") : this.ga.removeAttribute("dir")
	};

	function pq(a, b) {
		lq.call(this, a, b);
		this.Xb = [];
		this.Id = [];
		this.Wa = [];
		this.mf = new dc(433);
		gc(this.mf);
		N(this.mf, "tick", x(this.gw, this))
	}
	z(pq, lq);
	q = pq.prototype;
	q.type = 2;
	q.Wa = m;
	q.Jd = 0;
	q.Id = m;
	q.mf = m;
	q.tn = function(a) {
		var b = a.length;
		if(0 >= b) this.Fi();
		else {
			for(var c = 0; c < b && 0 <= this.Xb.indexOf(a[c]);) c++;
			this.Xb = this.Xb.concat(a.slice(c));
			qq(this)
		}
	};
	q.Fi = function() {
		this.Xb = [];
		this.Wa = [];
		this.Jd = 0;
		this.Wa = [];
		this.Id = [];
		rq(this)
	};

	function qq(a) {
		if(!sq(a))
			if(a.Jd >= a.Xb.length) rq(a);
			else {
				var b = a.Wa.length - 1;
				0 > b && (a.Id.push(0), a.Jd = 0, a.Wa.push(""), b = 0);
				for(var c = a.Xb.length, d = a.Jd; d < c; d++) {
					var f = a.Xb[d];
					if("\n" == f.zd()) {
						a.Jd++;
						a.Id[b]++;
						break
					}
					if(f.Ci || 0 == a.Wa[b].length) a.Wa[b] += f.zd(), a.Jd++, a.Id[b]++;
					else break
				}
				rq(a);
				d < c && !sq(a) && (b = a.th(), G(a.ga, "caption-rollup"), a.ca.style.overflow = "hidden", a.ga.style.top = -b + "px", a.mf.start())
			}
	}

	function sq(a) {
		return a.mf.i || I(a.ga, "caption-rollup")
	}
	q.gw = function() {
		this.ca.style.overflow = "visible";
		this.ga.style.top = 0;
		gc(this.mf);
		H(this.ga, "caption-rollup");
		this.Wa.push("");
		this.Id.push(0);
		qq(this)
	};

	function rq(a) {
		if(!sq(a)) {
			for(; a.Wa.length < a.ba.Hc;) a.Wa.unshift(""), a.Id.unshift(0);
			for(; a.Wa.length > a.ba.Hc;) {
				a.Wa.shift();
				var b = a.Id.shift();
				0 < b && (a.Jd -= b, a.Xb.splice(0, b))
			}
			a.le(a.Wa.join("\n"))
		}
	};

	function tq(a) {
		this.Li = a.ik;
		this.jp = a.gf;
		this.Vb = a.Vb || this.Vb
	}
	q = tq.prototype;
	q.Li = 0;
	q.jp = 0;
	q.Vb = 0;
	q.Qb = function() {
		return this.Li
	};
	q.Ub = function() {
		return this.jp
	};
	q.toString = function() {
		return this.Li + ", " + this.Vb
	};

	function uq(a) {
		tq.call(this, a);
		this.Ji = a.text || this.Ji;
		this.mh = a.hk || this.mh;
		this.Ci = a.params.append || this.Ci;
		this.lp = a.params.row || this.lp;
		this.kp = a.params.cw || this.kp
	}
	z(uq, tq);
	q = uq.prototype;
	q.Ji = "";
	q.Ci = n;
	q.lp = 0;
	q.kp = 0;
	q.mh = 0;
	q.zd = function() {
		return this.Ji
	};
	q.toString = function() {
		return this.Li + ", " + this.Vb + ": " + this.Ji
	};

	function vq(a) {
		var b = a.firstChild && a.firstChild.nodeValue || "",
			c = 1E3 * parseFloat(a.getAttribute("start") || 0);
		a.getAttribute("t") && (c = parseInt(a.getAttribute("t"), 10));
		var d = 1E3 * parseFloat(a.getAttribute("dur") || 0);
		a.getAttribute("d") && (d = parseFloat(a.getAttribute("d")));
		var f = parseInt(a.getAttribute("w"), 10) || 0,
			b = {
				ik: c,
				Vb: d,
				text: b,
				hk: f,
				gf: 5,
				params: {}
			};
		a.getAttribute("r") && (b.params.row = parseInt(a.getAttribute("r"), 10));
		a.getAttribute("c") && (b.params.cw = parseInt(a.getAttribute("c"), 10));
		a.getAttribute("append") && (b.gf = 6, b.params.append = l);
		return new uq(b)
	}

	function wq(a) {
		tq.call(this, a);
		this.id = a.hk || this.id;
		this.params = a.params
	}
	z(wq, tq);
	wq.prototype.id = 0;
	wq.prototype.params = m;
	wq.prototype.b = "";
	wq.prototype.a = n;

	function xq() {
		return new wq({
			ik: -2147483648,
			Vb: 4294967295,
			params: hq
		})
	};

	function yq(a) {
		this.b = [];
		this.j = [];
		this.a = {};
		if(a && (a = Bm(a)) && a.firstChild) switch(this.i = a, this.i.firstChild.tagName) {
			case "timedtext":
				a = this.i.firstChild.childNodes;
				for(var b = 0, c = a.length; b < c; b++) switch(a[b].tagName) {
					case "window":
						var d = a[b],
							f = parseInt(d.getAttribute("id"), 10),
							g = h;
						a: {
							var j = this.a[f];
							if(!d.getAttribute("t") && !d.getAttribute("start")) g = m;
							else {
								g = parseInt(d.getAttribute("t"), 10);
								d.getAttribute("start") && (g = 1E3 * parseFloat(d.getAttribute("start")));
								j && (j.Qb() + j.Vb >= g ? j.Vb = g : j = m);
								switch(d.getAttribute("op")) {
									case "kill":
										g = m;
										break a;
									case "define":
										j = m
								}
								j ? j.j = l : j = xq();
								var k = {};
								pa(k, j ? j.params : hq);
								d.getAttribute("id") && (k.id = d.getAttribute("id"));
								d.getAttribute("op") && (k.$w = d.getAttribute("op"));
								d.getAttribute("rc") && (k.Hc = parseInt(d.getAttribute("rc"), 10));
								d.getAttribute("cc") && (k.jk = parseInt(d.getAttribute("cc"), 10));
								d.getAttribute("ap") && (j = parseInt(d.getAttribute("ap"), 10), k.yh = 0 > j || 8 < j ? 7 : j);
								d.getAttribute("ah") && (k.zh = parseInt(d.getAttribute("ah"), 10));
								d.getAttribute("av") && (k.td = parseInt(d.getAttribute("av"), 10));
								d.getAttribute("id") && (k.id = parseInt(d.getAttribute("id"), 10) || 0);
								d.getAttribute("vs") && (k.isVisible = Boolean(d.getAttribute("vs")));
								d.getAttribute("ju") && (k.textAlign = gq[parseInt(d.getAttribute("ju"), 10)]);
								d.getAttribute("pd") && (k.je = 1, 0 == parseInt(d.getAttribute("pd"), 10) && (k.je = 0));
								d.getAttribute("bc") && (k.backgroundColor = parseInt(d.getAttribute("bc"), 16));
								d.getAttribute("bo") && (k.opacity = parseInt(d.getAttribute("bo"), 10) / 100);
								d.getAttribute("fc") && (k.uh = parseInt(d.getAttribute("fc"), 16));
								d.getAttribute("sd") && (k.Qj = parseInt(d.getAttribute("sd"), 10));
								j = parseInt(d.getAttribute("d"), 10) || 1E3 * parseFloat(d.getAttribute("dur")) || 2147483647;
								d = {
									ik: g,
									Vb: j,
									params: k,
									hk: parseInt(d.getAttribute("id"), 10)
								};
								g = new wq(d)
							}
						}
						this.a[f] = g;
						this.j.push(g);
						break;
					case "text":
						f = vq(a[b]), this.b.push(f), d = f.mh, this.a[d] && (d = this.a[d], f = f.zd(), "" != d.b && (d.a = l), d.b += f)
				}
				break;
			default:
				this.j.push(xq());
				a = this.i.firstChild.childNodes;
				b = 0;
				for(c = a.length; b < c; b++) f = vq(a[b]), this.b.push(f)
		}
	}
	yq.prototype.b = m;
	yq.prototype.j = m;
	yq.prototype.a = m;

	function zq(a) {
		a = a || {};
		this.Ck = a.format;
		this.b = a.languageCode || "";
		this.pg = a.languageName;
		this.cb = a.kind || "";
		this.zb = a.name;
		this.fa = a.id;
		this.nk = a.is_servable;
		this.Oh = a.is_default;
		this.Vh = a.is_translateable;
		a.translationLanguage && (this.a = new Aq(a.translationLanguage))
	}

	function Bq(a) {
		var b = {
			format: a.Ck,
			languageCode: a.b,
			languageName: a.pg,
			kind: a.cb,
			name: a.zb,
			id: a.fa,
			is_servable: a.nk,
			is_default: a.Oh,
			is_translateable: a.Vh
		};
		a.a && (b.translationLanguage = {
			languageCode: a.a.lc,
			languageName: a.a.Mh,
			languageOriginal: a.a.ok,
			id: a.a.id,
			is_default: a.a.Jn
		});
		return b
	}
	q = zq.prototype;
	q.pg = m;
	q.cb = m;
	q.zb = m;
	q.fa = m;
	q.nk = n;
	q.Oh = n;
	q.Vh = n;
	q.Ck = 1;

	function Cq(a) {
		var b = [a.pg];
		if("asr" == a.cb) {
			var c = S("HTML5_SUBS_ASR");
			b.push(" (", c, ")")
		}
		a.zb && b.push(" - ", a.zb);
		a.a && b.push(" >> ", a.a.Mh);
		return b.join("")
	}
	q.toString = function() {
		var a = [this.b, ": ", this.zb, " (", this.cb, ")"];
		this.a && a.push(" >> ", this.a.lc);
		return a.join("")
	};
	q.equals = function(a) {
		if(!a) return n;
		var b = this.a,
			c = a.a;
		if(b && c) {
			if(b.lc != c.lc) return n
		} else if(b || c) return n;
		return this.b == a.b && this.zb == a.zb && this.cb == a.cb
	};

	function Dq() {
		this.j = [];
		this.a = []
	}
	Dq.prototype.j = m;
	Dq.prototype.a = m;
	Dq.prototype.b = -1;

	function Eq(a, b) {
		return b ? a.a.concat(a.j) : a.a
	}

	function Fq(a, b) {
		switch(b.cb) {
			case "asr":
				return Gq(b, a.j);
			default:
				if(b.Oh || 0 > a.b) a.b = a.a.length;
				return Gq(b, a.a)
		}
	}

	function Gq(a, b) {
		return !Ha(b, x(a.equals, a)) ? (b.push(a), l) : n
	};

	function Aq(a) {
		this.lc = a.languageCode;
		this.Mh = a.languageName;
		this.ok = a.languageOriginal;
		this.id = a.id;
		this.Jn = a.is_default
	}
	q = Aq.prototype;
	q.lc = m;
	q.Mh = m;
	q.ok = m;
	q.id = m;
	q.Jn = n;

	function Hq(a, b, c, d) {
		this.Kc = a;
		c ? this.Kc = uf(this.Kc, {
			hl: c
		}) : (a = rf(this.Kc).hl || "", a = a.split("_").join("-"), this.Kc = uf(this.Kc, {
			hl: a
		}));
		this.Jh = b;
		this.gp = !!d;
		this.Jc = new Dq;
		this.Lh = [];
		this.hp = {}
	}
	q = Hq.prototype;
	q.Kc = "";
	q.Jh = m;
	q.gp = n;
	q.Jc = m;
	q.Lh = m;
	q.hp = m;

	function Iq(a, b, c) {
		var d = a.Kc,
			f = {
				v: a.Jh,
				type: "track",
				lang: b.b,
				name: b.zb,
				kind: b.cb,
				fmt: b.Ck
			};
		b.a && (f.tlang = b.a.lc);
		d = uf(d, f);
		a = x(function(a) {
			a = new yq(a.responseText);
			c(a, b)
		}, a);
		Of(d, a)
	}

	function Jq(a, b) {
		var c = a.Kc,
			d = {
				type: "list",
				tlangs: 1,
				v: a.Jh,
				fmts: Number(l)
			};
		a.gp && (d.asrs = 1);
		c = uf(c, d);
		d = x(function(a) {
			if((a = a.responseXML) && a.firstChild) {
				for(var c = this.Jc, d = a.getElementsByTagName("track"), k = d.length, p = 0; p < k; p++) {
					var r = parseInt(d[p].getAttribute("formats"), 10) || 1,
						u = d[p].getAttribute("lang_code"),
						w = d[p].getAttribute("lang_translated"),
						A = d[p].getAttribute("name"),
						E = d[p].getAttribute("kind") || "",
						Aa = d[p].getAttribute("id"),
						gb = "true" == d[p].getAttribute("lang_default"),
						Y = "true" == d[p].getAttribute("cantran");
					Fq(c, new zq({
						format: r,
						languageCode: u,
						languageName: w,
						name: A,
						kind: E,
						id: Aa,
						is_servable: l,
						is_default: gb,
						is_translateable: Y
					}))
				}
				a = a.getElementsByTagName("target");
				c = a.length;
				for(d = 0; d < c; d++) k = a[d].getAttribute("lang_code"), p = a[d].getAttribute("lang_translated"), r = a[d].getAttribute("lang_original"), u = a[d].getAttribute("id"), w = "true" == a[d].getAttribute("lang_default"), k = {
					languageCode: k,
					languageName: p,
					languageOriginal: r,
					id: u,
					is_default: w
				}, this.hp[k.languageCode] = k.languageName, this.Lh.push(new Aq(k))
			}
			b()
		}, a);
		Of(c, d)
	};

	function Kq(a) {
		Aj.call(this, a);
		var b = a.getRootNode();
		this.u = a.getEnvironmentData();
		this.xd = [];
		this.qa = {};
		this.yd = {};
		this.wg = [];
		this.oh = L("captions-translation-select", b);
		this.rl = L("captions-translation-dialog", b);
		this.ql = L("captions-settings-dialog", b);
		this.ug = L("html5-captions-button", b);
		N(this.ug, "click", x(this.hv, this));
		N(L("captions-translation-confirm", b), "click", x(this.pv, this));
		N(L("captions-translation-cancel", b), "click", x(this.Ym, this));
		fe(L("captions-settings-background-opacity", b), x(this.ev, this), "INPUT");
		fe(L("captions-settings-text-opacity", b), x(this.ov, this), "INPUT");
		fe(L("captions-settings-window-opacity", b), x(this.qv, this), "INPUT");
		fe(L("captions-settings-char-edge-style", b), x(this.iv, this), "SELECT");
		N(L("captions-settings-font-family", b), "change", x(this.mv, this));
		N(L("captions-settings-font-inc", b), "click", x(this.Fo, this));
		N(L("captions-settings-font-dec", b), "click", x(this.Eo, this));
		N(L("captions-settings-confirm", b), "click", x(this.dv, this));
		N(L("captions-settings-cancel", b), "click", x(this.nv, this));
		a = L("captions-settings-dialog", b);
		he(a, x(this.jv, this), "html5-color-picker-button");
		this.vg = L("html5-captions-tracks", this.ug);
		a = Pk.getInstance();
		this.og = Qk(a, this.ug);
		he(this.og, x(this.fv, this), "yt-uix-button-menu-item");
		this.Ue = new dc;
		gc(this.Ue);
		N(this.Ue, "tick", x(this.Kk, this));
		this.z("onResize", x(this.wv, this));
		this.z("onBackgroundChange", x(this.sv, this));
		this.z("onTextOpacityChange", x(this.uv, this));
		this.z("onWindowOpacityChange", x(this.vv, this));
		this.z("onFontSizeIncrease", x(this.Fo, this));
		this.z("onFontSizeDecrease", x(this.Eo, this));
		this.z("onShowControls", x(this.lv, this));
		this.z("onHideControls", x(this.kv, this));
		"detailpage" == this.u.S && (b = L("captions-account-settings-link", b)) && W(b);
		this.ph = new lq(99, iq);
		this.ag = new dc(2E3);
		gc(this.ag);
		N(this.ag, "tick", x(this.rv, this))
	}
	z(Kq, Aj);
	q = Kq.prototype;
	q.ja = "cc";
	q.Ed = "cc";
	q.Uk = "subtitlesModuleData";
	q.B = m;
	q.u = m;
	q.ug = m;
	q.og = m;
	q.rl = m;
	q.ql = m;
	q.vg = m;
	q.wg = m;
	q.xd = m;
	q.qa = m;
	q.yd = m;
	q.Ue = m;
	q.ph = m;
	q.ag = m;
	q.bb = m;
	q.hh = n;
	q.Zn = 1;
	q.T = {
		background: "#080808",
		backgroundOpacity: 1,
		charEdgeStyle: "uniform",
		color: "#fff",
		fontFamily: '"Arial Unicode Ms", Arial',
		fontFamilyOption: "propSans",
		fontSizeIncrement: 0,
		textOpacity: 1,
		windowColor: "#080808",
		windowOpacity: 0
	};
	q.Te = m;
	q.Vm = n;
	q.create = function() {
		Kq.C.create.call(this);
		this.B = this.a.getVideoData();
		var a = this.a.getEnvironmentData().region; - 1 == jq.indexOf(a) && G(this.a.getRootNode(), "cc-international");
		1 == this.u.e.cc_load_policy || 1 == this.B.dm || "alwayson" == Ei(this.B, "yt:cc") ? a = l : (a = Gj(this, "module-enabled"), a = a != m ? !!a : "on" == Ei(this.B, "yt:cc") || this.u.e.cc_prefer_on);
		a && this.load()
	};
	q.destroy = function() {
		this.la();
		Kq.C.destroy.call(this)
	};
	q.load = function() {
		Kq.C.load.call(this);
		this.hh = "alwayson" == Ei(this.B, "yt:cc");
		this.og && J(this.og, "captions-always-on", this.hh);
		var a = this.B.uc.cc_lang_pref || this.u.e.cc_lang_pref || Ei(this.B, "yt:cc_default_lang") || this.u.i,
			a = a && a.split("_").join("-");
		this.bb = new Hq(this.B.Kh, this.B.J, a, this.B.lk);
		Jq(this.bb, x(this.uo, this));
		Hj(this, "module-enabled", l);
		this.T = ab(this.T);
		pa(this.T, Gj(this, "display-settings"));
		Lq(this);
		this.pa = l
	};
	q.la = function() {
		Mq(this);
		Ej(this);
		Hj(this, "module-enabled", n);
		this.pa = n;
		Kq.C.la.call(this)
	};
	q.uo = function() {
		var a, b = this.bb;
		a = b.Jc.b;
		b = Eq(b.Jc, l);
		(a = 0 > a ? m : b[a]) && Nq(this, a);
		this.vg && yd(Bd(this.vg));
		a = this.bb.Lh;
		this.oh && (yd(this.oh), a.forEach(function(a) {
			var b = document.createElement("option");
			b.setAttribute("value", a.lc);
			b.appendChild(document.createTextNode(a.Mh + " -- " + a.ok));
			this.oh.appendChild(b)
		}, this));
		a = Eq(this.bb.Jc, l);
		if(0 < a.length) {
			var c = this.bb.Jc.b;
			a.forEach(function(a, b) {
				if(a.nk) {
					var g = a.toString(),
						j = Cq(a),
						k = n;
					b == c && (k = l);
					Oq(this, g, j, k)
				}
			}, this)
		} else this.la(), X(this.og), X(this.ug);
		this.g("publish_external_event", "onCaptionsTrackListChanged")
	};
	q.vn = function(a, b) {
		var c = a.j.concat(a.b);
		Mq(this);
		this.wg = Ma(c);
		this.Te = b;
		this.Vm = fq.test(b.b);
		var d = [];
		c.forEach(function(a, b) {
			var c = new Le(a.Qb(), a.Qb() + a.Vb, {
				id: b
			});
			d.push(c)
		}, this);
		this.addCueRange.apply(this, d);
		this.Zm(b)
	};
	q.Zm = function(a) {
		var b = {
			trackName: a.zb,
			trackKind: a.cb
		};
		a.a ? (b.trackLangCode = a.a.lc, b.fromLangCode = a.b) : b.trackLangCode = a.b;
		this.log(b);
		var b = this.ph,
			c = Cq(a);
		c && (c = c.replace(/<[^>]*>?/g, ""), b.le(c));
		this.appendToVideoContent(this.ph.ca);
		this.ag.start();
		this.g("publish_external_event", "captionschanged", Bq(a))
	};
	q.Sb = function(a) {
		a = this.wg[a.getId()];
		this.xd.push(a);
		this.Ue.start()
	};
	q.oc = function(a) {
		a = this.wg[a.getId()];
		a = this.xd.indexOf(a);
		0 <= a && this.xd.splice(a, 1);
		this.Ue.start()
	};
	q.wv = function() {
		this.Zn = ek(this.u).height / 360;
		Lq(this);
		for(var a in this.qa) this.qa[a].gg()
	};
	q.rv = function() {
		gc(this.ag);
		zd(this.ph.ca)
	};
	q.Kk = function() {
		gc(this.Ue);
		var a = this.xd.length,
			b;
		for(b in this.yd) delete this.yd[b];
		this.xd.sort(function(a, b) {
			return a.Qb() == b.Qb() ? a.Ub() - b.Ub() : a.Qb() - b.Qb()
		});
		for(var c = 0; c < a; c++) {
			var d = this.xd[c];
			if(d instanceof wq) {
				var f = this.qa[d.id];
				pa(d.params, this.T);
				if(f && f.getType() != (d.params.Qj ? 2 : d.a ? 0 : 1)) zd(f.ca), delete this.qa[d.id];
				if(!this.qa[d.id]) {
					var f = this.qa,
						g = d.id,
						j = h;
					a: {
						var j = d.id,
							k = d.params;
						switch(d.params.Qj ? 2 : d.a ? 0 : 1) {
							case 0:
								j = new oq(j, k);
								break a;
							case 2:
								j = new pq(j, k);
								break a;
							default:
								j = new lq(j, k)
						}
					}
					f[g] = j;
					f = this.qa[d.id].ca;
					J(f, "captions-asr", "asr" == this.Te.cb);
					d.params.je != m && (d.params.je = this.Vm ? 1 : 0);
					0 == this.qa[d.id].id ? this.appendAboveVideoControls(f) : this.appendToVideoContent(f)
				}
				pa(this.qa[d.id].ba, d.params);
				if(0 == (d.params.Qj ? 2 : d.a ? 0 : 1)) {
					f = this.qa[d.id];
					f.un = d.b;
					f.Bd = {};
					f.pe = l;
					f.le(f.un);
					f.Bd.Hc = f.Bb.length;
					f.Bd.width = f.ca.offsetWidth;
					f.Bd.mn = [];
					for(d = 0; d < f.Bd.Hc; d++) f.Bd.mn.push(f.Bb[d].offsetLeft);
					f.pe = n;
					f.le(f.hg)
				}
			} else f = d.mh, this.yd[f] || (this.yd[f] = []), this.yd[f].push(d)
		}
		for(b in this.qa) this.yd[b] ? this.qa[b].tn(this.yd[b]) : (zd(this.qa[b].ca), delete this.qa[b]);
		var a = [],
			p;
		for(p in this.qa) b = this.qa[p], b instanceof oq && a.push(this.qa[p]);
		if(0 != a.length) {
			a.sort(function(a, b) {
				return b.ba.td - a.ba.td
			});
			p = ek(this.u).height;
			var c = this.qa[a[0].id].ba.td,
				r;
			for(r in a) b = this.qa[a[r].id], b.ba.td = c, d = Math.round(b.ba.Hc * b.th()), c -= Math.round(100 * (d / p)), b.gg()
		}
	};

	function Pq(a, b) {
		var c = L(a).querySelectorAll("." + b + " input[type=radio]"),
			d = 0;
		B(c, function(a, b) {
			a.checked && (d = b)
		});
		d += 1;
		d = d % c.length;
		c[d].click()
	}
	q.sv = function() {
		Pq("captions-settings-background-opacity", "captions-settings-background-opacity-radio")
	};
	q.uv = function() {
		Pq("captions-settings-text-opacity", "captions-settings-text-opacity-radio")
	};
	q.vv = function() {
		Pq("captions-settings-window-opacity", "captions-settings-window-opacity-radio")
	};
	q.ev = function(a) {
		a = parseFloat(a.target.getAttribute("value"));
		isNaN(a) || (this.T.backgroundOpacity = a, Lq(this))
	};
	q.ov = function(a) {
		a = parseFloat(a.target.getAttribute("value"));
		isNaN(a) || (this.T.textOpacity = a, Lq(this))
	};
	q.qv = function(a) {
		a = parseFloat(a.target.getAttribute("value"));
		isNaN(a) || (this.T.windowOpacity = a, Lq(this))
	};
	q.iv = function(a) {
		a.target && (this.T.charEdgeStyle = a.target.value, Lq(this))
	};
	q.mv = function(a) {
		a.target && (this.T.fontFamilyOption = a.target.value, Lq(this))
	};
	q.lv = function() {
		var a = this.qa[0];
		a && a.ca && id(a.ca, "controls-hidden", "controls-visible")
	};
	q.kv = function() {
		var a = this.qa[0];
		if(a && a.ca) {
			for(var a = a.ca, b = fd(a), c = n, d = 0; d < b.length; d++) "controls-visible" == b[d] && (Oa(b, d--, 1), c = l);
			c && (b.push("controls-hidden"), a.className = b.join(" "))
		}
	};
	q.Eo = function() {
		Qq(this, -1)
	};
	q.Fo = function() {
		Qq(this, 1)
	};

	function Qq(a, b) {
		a.T.fontSizeIncrement += b;
		Lq(a)
	}

	function Rq(a, b) {
		var c = L(b);
		c && (c.querySelector('input[value="' + a.toFixed(1) + '"]').checked = l)
	}

	function Sq(a, b, c) {
		var d = L(b);
		d && (b = d.querySelector("span.yt-uix-form-input-select-value"), d = d.querySelector("select"), d.value = a.T[c], Ed(b, d.options[d.selectedIndex].text))
	}

	function Mq(a) {
		Bj(a);
		a.xd = [];
		a.wg = [];
		a.Te = m;
		a.Kk()
	}

	function Nq(a, b) {
		if(a.u.Od) {
			var c = a.bb,
				d = a.u.o,
				f = x(a.Zm, a),
				g = c.Kc,
				c = {
					v: c.Jh,
					type: "track",
					lang: b.b,
					name: b.zb,
					kind: b.cb,
					fmt: "vtt"
				};
			b.a && (c.tlang = b.a.lc);
			var j = document.createElement("track");
			j.src = uf(g, c);
			j.mode = "showing";
			j.setAttribute("kind", "captions");
			j.setAttribute("default", "");
			d.appendChild(j);
			f(b)
		} else Iq(a.bb, b, x(a.vn, a))
	}
	q.hv = function() {
		this.pa || this.load()
	};
	q.fv = function(a) {
		a = Ld(a.target, "yt-uix-button-menu-item");
		var b = M(a, "action");
		if(b) switch(b) {
			case "translate":
				this.hh || (Ej(this), Dj(this), W(this.rl));
				break;
			case "settings":
				Ej(this);
				Dj(this);
				Tq(this);
				W(this.ql);
				break;
			case "captions-off":
				this.la()
		} else {
			var c = M(a, "trackid");
			if(c) {
				a = this.bb;
				var b = x(this.vn, this),
					d;
				(d = Ha(Eq(a.Jc, l), function(a) {
					return a.toString() == c
				})) && Iq(a, d, b)
			}
		}
	};
	q.Ym = function() {
		X(this.rl)
	};
	q.pv = function() {
		if(!this.hh) {
			this.Ym();
			var a;
			a: {
				a = this.bb.Lh;
				for(var b = 0; b < a.length; b++) {
					var c = a[b];
					if(c.lc == this.oh.value) {
						a = c;
						break a
					}
				}
				a = m
			}
			a && (b = this.Te, c = new zq, c.b = b.b, c.pg = b.pg, c.zb = b.zb, c.cb = b.cb, c.Oh = n, c.Vh = b.Vh, c.a = a, Fq(this.bb.Jc, c) && Oq(this, c.toString(), Cq(c), l), Nq(this, c))
		}
	};
	q.dv = function() {
		X(this.ql)
	};
	q.nv = function() {
		delete this.T;
		this.T = ab(this.T);
		Hj(this, "display-settings", this.T);
		Lq(this)
	};

	function Lq(a) {
		var b = [],
			c = x(function(a) {
				var c = this.T[a];
				c && b.push(a + ": " + c + " !important")
			}, a);
		c("color");
		c("background");
		c = {
			Db: a.b,
			reset: l
		};
		a.b = an(".captions-text", b, c);
		var d = bq(a.T.windowColor),
			c = {
				Db: a.R,
				reset: l
			};
		a.R = an(".caption-window-transform", "background-color: rgba(" + d[0] + "," + d[1] + "," + d[2] + ", 1)", c);
		Tq(a);
		c = bq(a.T.background);
		d = a.T.backgroundOpacity;
		Hj(a, "display-settings", a.T);
		a.A = an(".captions-text, .caption-row", "background-color: rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ") !important;", {
			Db: a.A,
			reset: l
		});
		Rq(d, "captions-settings-background-opacity");
		c = bq(a.T.color);
		d = a.T.textOpacity;
		Hj(a, "display-settings", a.T);
		a.I = an(".captions-text", "color: rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ") !important;", {
			Db: a.I,
			reset: l
		});
		Rq(d, "captions-settings-text-opacity");
		c = bq(a.T.windowColor);
		d = a.T.windowOpacity;
		Hj(a, "display-settings", a.T);
		a.Z = an(".caption-window-transform", "background-color: rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + d + ") !important;", {
			Db: a.Z,
			reset: l
		});
		Rq(d, "captions-settings-window-opacity");
		Hj(a, "display-settings", a.T);
		var c = a.T.charEdgeStyle,
			f = a.T.textOpacity;
		if("none" == c) bn(a.e);
		else {
			var d = "",
				g = "rgba(34, 34, 34, " + f + ")",
				f = "rgba(204, 204, 204, " + f + ")";
			switch(c) {
				case "dropShadow":
					d = "text-shadow: 2px 2px 3px " + g + ", 2px 2px 4px " + g + ", 2px 2px 5px " + g + ";";
					break;
				case "raised":
					d = "text-shadow: 1px 1px " + g + ", 2px 2px " + g + ", 3px 3px " + g + ";";
					break;
				case "depressed":
					d = "text-shadow: 1px 1px " + f + ", 0 1px " + f + ", -1px -1px " + g + ", 0 -1px " + g + ";";
					break;
				case "uniform":
					d = "text-shadow: 0 0 4px " + g + ", 0 0 4px " + g + ", 0 0 4px " + g + ", 0 0 4px " + g + ";"
			}
			a.e = an(".captions-text", d, {
				Db: a.e,
				reset: l
			})
		}
		Sq(a, "captions-settings-char-edge-style", "charEdgeStyle");
		d = c = "";
		switch(a.T.fontFamilyOption) {
			case "monoSerif":
				c = '"Courier New", Courier, "Nimbus Mono L", monospace';
				break;
			case "propSerif":
				c = '"Times New Roman", Times, Georgia, Cambria, serif';
				break;
			case "monoSans":
				c = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, monospace';
				break;
			case "propSans":
				c = '"Arial Unicode Ms", Arial, Helvetica, Verdana, sans-serif';
				break;
			case "casual":
				c = '"Comic Sans MS", Impact, fantasy';
				break;
			case "cursive":
				c = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", cursive';
				break;
			case "smallCaps":
				c = '"Arial Unicode Ms", Arial, Helvetica, Verdana, sans-serif', d = "font-variant: small-caps;"
		}
		a.D = an(".captions-text", d + "font-family: " + c + " !important;", {
			Db: a.D,
			reset: l
		});
		a.T.fontFamily = c;
		Hj(a, "display-settings", a.T);
		Sq(a, "captions-settings-font-family", "fontFamilyOption");
		Hj(a, "display-settings", a.T);
		c = "font-size: " + Math.round(((a.T.fontSizeIncrement || 0) + 16) * a.Zn) + "px;";
		a.F = an(".caption-window-transform", c, {
			Db: a.F,
			reset: l
		});
		a.Kk()
	}
	q.jv = function(a) {
		var b = x(function(b) {
			var d = M(a.currentTarget, b.toLowerCase());
			d && (this.T[b] = d)
		}, this);
		b("color");
		b("background");
		b("windowColor");
		Lq(this);
		Hj(this, "display-settings", this.T)
	};

	function Tq(a) {
		var b = {
				Db: a.b
			},
			c = a.T.color,
			d = a.T.background,
			f = a.T.windowColor;
		c && (a.b = an('.html5-popup-dialog button[data-color="' + c + '"]', "border: 3px solid #992121;", b));
		d && (a.b = an('.html5-popup-dialog button[data-background="' + d + '"]', "border: 3px solid #992121;", b));
		f && (a.b = an('.html5-popup-dialog button[data-windowcolor="' + f + '"]', "border: 3px solid #992121;", b))
	}

	function Oq(a, b, c, d) {
		if(a.vg) {
			a = Bd(a.vg);
			var f = document.createElement("li");
			f.setAttribute("class", "yt-uix-button-menu-item");
			f.setAttribute("data-trackid", b);
			b = "caption-track-" + b;
			var g = document.createElement("input");
			g.setAttribute("type", "radio");
			g.setAttribute("name", "language");
			g.setAttribute("value", c);
			g.id = b;
			g.checked = d;
			G(g, "yt-uix-button-menu-close");
			c = document.createTextNode(c);
			d = document.createElement("label");
			d.setAttribute("for", b);
			f.appendChild(g);
			d.appendChild(c);
			f.appendChild(d);
			a.appendChild(f)
		}
	}

	function Uq(a) {
		return !Kq.prototype.lb(a) ? m : new Kq(a)
	}
	q.Ep = function(a, b) {
		switch(a) {
			case "fontSize":
				isNaN(b) || (this.T.fontSizeIncrement = b, Lq(this));
				break;
			case "reload":
				b && Jq(this.bb, x(this.uo, this));
				break;
			case "track":
				if(b) {
					if(!ia(b)) break;
					Nq(this, new zq(b))
				} else return this.Te ? Bq(this.Te) : {};
				return "";
			case "tracklist":
				return !this.pa ? [] : Fa(Eq(this.bb.Jc, h), function(a) {
					return Bq(a)
				})
		}
	};
	q.getOptions = function() {
		return ["reload", "fontSize", "track", "tracklist"]
	};
	q.lb = function(a) {
		return !!a.getVideoData().Kh
	};

	function Vq() {
		var a = mb(),
			b;
		if(b = ai()) {
			a: {
				if(navigator.plugins && 0 < navigator.plugins.length)
					for(b = 0; b < navigator.plugins.length; b++)
						if(0 <= navigator.plugins[b].name.indexOf("NVIDIA 3D Vision")) {
							b = l;
							break a
						}
				b = n
			}
			if(b) a: {
				var c = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
				if(c && 1 < c.length && 4 <= c[1]) {
					c = document.createElement("embed");
					c.setAttribute("id", "NvImageDetectionFFID");
					c.setAttribute("style", "visibility: hidden");
					c.setAttribute("width", 25);
					c.setAttribute("height", 25);
					c.setAttribute("type", "image/jps");
					xd(document.documentElement, c);
					c = K("NvImageDetectionFFID");
					try {
						if(c != m) {
							b = 27527 <= c.NvGetDriverVersion();
							break a
						}
					} catch(d) {}
				}
				b = n
			}
		}
		return b || a && -1 != a.indexOf("Sony")
	};

	function Wq(a) {
		Aj.call(this, a);
		var b = a.getVideoData();
		b.uf && Xq(this);
		Yq(this, "html5-threed-conversion-on", x(this.lu, this));
		Yq(this, "html5-threed-conversion-off", x(this.ku, this));
		var c = this.a.getRootNode();
		a = L("html5-threed-popup-menu-change-mode-link", c);
		c = L("html5-threed-dialog-change-mode-button", c);
		b = "/select_3d_mode?video_id=" + b.J;
		a.setAttribute("href", b);
		c.setAttribute("href", b)
	}
	z(Wq, Aj);
	q = Wq.prototype;
	q.Uk = "threeDModuleData";
	q.ue = m;

	function Yq(a, b, c) {
		a = a.a.getRootNode();
		b = L(b, a);
		N(b, "click", c)
	}
	q.ja = "threed";
	q.Ed = "threed";
	q.create = function() {
		this.a.preparePlayerThreeD();
		Wq.C.create.call(this)
	};
	q.destroy = function() {
		this.a.preparePlayerThreeD(l);
		this.la();
		Wq.C.destroy.call(this)
	};

	function Zq(a) {
		return Wq.prototype.lb(a) ? new Wq(a) : m
	}
	q.lb = function(a) {
		a = a.getVideoData();
		return !!a.uf || !!a.yj
	};
	q.lu = function() {
		$q(this, l)
	};
	q.ku = function() {
		$q(this, n)
	};

	function $q(a, b) {
		var c = a.a.getVideoData();
		c.yj && c.ef != b && (a.a.toggleThreeD(), b ? Xq(a) : Ej(a))
	}

	function Xq(a) {
		if(!Gj(a, "warning-shown") && !Vq()) {
			var b = a.a.getRootNode();
			a.ue = L("threed-html5-warning-dialog", b);
			W(a.ue);
			R(x(function() {
				ar(this)
			}, a), 0);
			N(a.ue, "mouseover", x(function() {
				H(this.ue, "hide-dialog")
			}, a));
			N(a.ue, "mouseout", x(function() {
				ar(this)
			}, a));
			Yq(a, "threed-html5-warning-close", x(a.tu, a))
		}
	}

	function ar(a) {
		G(a.ue, "hide-dialog");
		R(x(function() {
			I(this.ue, "hide-dialog") && Ej(this)
		}, a), 9E3)
	}
	q.tu = function() {
		Hj(this, "warning-shown", l);
		Ej(this)
	};

	function br(a, b) {
		b || (b = {});
		var c = window,
			d = "undefined" != typeof a.href ? a.href : String(a),
			f = b.target || a.target,
			g = [],
			j;
		for(j in b) switch(j) {
			case "width":
			case "height":
			case "top":
			case "left":
				g.push(j + "=" + b[j]);
				break;
			case "target":
			case "noreferrer":
				break;
			default:
				g.push(j + "=" + (b[j] ? 1 : 0))
		}
		g = g.join(",");
		if(b.noreferrer) {
			if(c = c.open("", f, g)) C && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = m, sb ? c.location.href = d : (d = ua(d), c.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + d + '">'), c.document.close())
		} else c = c.open(d, f, g);
		return c
	}

	function cr(a, b) {
		var c = b || {};
		c.target = c.target || a.target || "YouTube";
		c.width = c.width || 600;
		c.height = c.height || 600;
		c = br(a, c);
		if(!c) return m;
		c.opener || (c.opener = window);
		c.focus();
		return c
	}

	function dr(a, b) {
		return !cr(a, b)
	};

	function er(a, b) {
		var c = L("html5-ypc-module", a.getRootNode());
		this.Yk = L("html5-ypc-overlay", c);
		this.a = L("html5-ypc-message", c);
		this.Xk = L("html5-ypc-purchase", c);
		this.oo = L("html5-module-close", c);
		this.ri = L("html5-module-recall", c);
		a.appendAboveVideoControls(c);
		this.Ea = b;
		N(this.Xk, "click", x(this.nu, this));
		N(this.oo, "click", x(this.mu, this));
		N(this.ri, "click", x(this.no, this))
	}
	q = er.prototype;
	q.Yk = m;
	q.Xk = m;
	q.oo = m;
	q.ri = m;
	q.Ea = m;
	q.update = function(a, b) {
		Ed(this.a, a);
		Ed(this.Xk, b);
		this.no()
	};
	q.nu = function() {
		this.Ea.g("ypcContentRequest")
	};
	q.no = function() {
		Ad(this.Yk, this.ri)
	};
	q.mu = function() {
		Ad(this.ri, this.Yk)
	};

	function fr(a) {
		Aj.call(this, a);
		this.z("ypcContentRequest", this.Cv, this);
		this.Rn = new er(a, this.i);
		this.Qn = new Le(0, 2147483646, {
			priority: 2
		})
	}
	z(fr, Aj);
	q = fr.prototype;
	q.ja = "ypc";
	q.Ed = "ypc";
	q.Rn = m;
	q.Qn = m;
	q.lb = function() {
		return Ii(this.a.getVideoData(), "ypc_module")
	};

	function gr(a) {
		return !Ii(a.getVideoData(), "ypc_module") ? m : new fr(a)
	}
	q.create = function() {
		fr.C.create.call(this);
		this.B = this.a.getVideoData();
		this.B.Ca ? (this.Rn.update(this.B.yc, this.B.Ac), this.addCueRange(this.Qn)) : this.a.loadVideoByPlayerVars({
			video_id: this.B.J,
			ypc_preview: 1
		})
	};
	q.destroy = function() {
		Bj(this)
	};
	q.Sb = function(a) {
		fr.C.Sb.call(this, a);
		this.load()
	};
	q.oc = function(a) {
		this.la();
		fr.C.oc.call(this, a)
	};
	q.Cv = function() {
		if(this.B.li) "embedded" == this.a.getEnvironmentData().S ? br(this.B.li) : window.location = Q(this.B.li, {}) + "";
		else if(this.B.Tk) {
			var a = t("yt.www.watch.player.handleEndPreview");
			a && a(this.B.Tk)
		}
	};

	function hr(a) {
		Aj.call(this, a);
		this.ja = "ypc_license_checker";
		this.Ed = "ypc_license";
		this.D = n;
		this.A = 0;
		this.e = n;
		this.b = m;
		this.F = a.getEnvironmentData().Xa + "api/drm/player_heartbeat"
	}
	z(hr, Aj);
	var ir = {
		LICENSE_DENIED_CANNOT_ACTIVATE_RENTAL: "ERROR_CANNOT_ACTIVATE_RENTAL",
		LICENSE_DENIED_NOT_SIGNED_IN: "ERROR_NOT_SIGNED_IN",
		LICENSE_DENIED_NO_ACTIVE_PURCHASE_AGREEMENT: "ERROR_RENTAL_EXPIRED",
		LICENSE_DENIED_CONCURRENT_PLAYBACK: "ERROR_STOPPED_BY_ANOTHER_PLAYBACK",
		LICENSE_DENIED_UNUSUAL_ACTIVITY: "ERROR_UNUSUAL_ACTIVITY",
		LICENSE_DENIED_STREAMING_UNAVAILABLE: "ERROR_STREAMING_UNAVAILABLE",
		LICENSE_DENIED_PLAYBACK_CAP: "ERROR_LICENSE"
	};

	function jr(a) {
		return Ii(a.getVideoData(), "ypc_license_checker_module")
	}
	q = hr.prototype;
	q.lb = function() {
		return jr(this.a)
	};
	q.create = function() {
		hr.C.create.call(this);
		var a = new Le(1E3, 2147483646, {
			gf: 0
		});
		this.addCueRange(a);
		this.z("onStateChange", this.Hv, this)
	};

	function kr(a) {
		return !jr(a) ? m : new hr(a)
	}
	q.Sb = function() {
		this.D = l;
		lr(this, 6E4)
	};
	q.Hv = function(a) {
		O(a.a, 2) ? (this.A = 0, this.b = m, this.e = n) : (O(a.a, 1) || O(a.a, 8)) && lr(this, 6E4)
	};

	function lr(a, b) {
		if(!a.b && a.D) {
			var c = b;
			c == h && (c = a.e ? 6E4 : 1E3);
			var d = a.a.getVideoData(),
				f = Ci(d);
			if(!f || !f.b) a.b = {
				video_id: d.J,
				player_id: d.Na,
				request_id: y().toString(36) + Math.floor(1E13 * Math.random()).toString(36),
				purchase_id: d.Md
			}, 0 == c ? a.xn() : R(x(a.xn, a), c)
		}
	}
	q.xn = function() {
		this.b && Pf(this.F, {
			format: "RAW",
			method: "POST",
			ne: this.b,
			timeout: 3E4,
			na: x(this.Wu, this),
			onError: x(this.Vu, this),
			zo: x(this.Xu, this)
		})
	};
	q.Wu = function(a) {
		if(this.b) {
			a = a.responseText;
			var b = a in ir ? 1 : 64 <= a.length && a.match(/[0-9a-fA-f]+/) ? 0 : -1; - 1 == b ? mr(this, "decode") : (this.A = 0, this.b = m, 1 == b ? (this.e = n, a = a in ir ? S(ir[a]) : S("ERROR_LICENSE"), this.a.setPlayerError(150, a)) : (this.e = l, lr(this)))
		}
	};
	q.Vu = function(a) {
		mr(this, "net-" + a.status)
	};
	q.Xu = function() {
		mr(this, "timeout")
	};

	function mr(a, b) {
		if(a.b)
			if(a.log({
					errorType: b
				}), a.b = m, 5 < ++a.A) {
				var c = S("ERROR_LICENSE");
				a.a.setPlayerError(150, c)
			} else lr(a)
	};

	function nr() {
		this.pd = [];
		this.kl = {};
		this.Lk = {};
		this.Mk = {}
	}
	z(nr, Sa);
	q = nr.prototype;
	q.pd = m;
	q.kl = m;
	q.Ij = m;
	q.Lk = m;
	q.Mk = m;
	q.O = m;
	q.yr = function(a) {
		(a = or(this, a)) && a.load()
	};
	q.Sr = function(a) {
		(a = or(this, a)) && a.la()
	};
	q.gn = function(a, b, c) {
		return !a || !b ? m : (a = or(this, a)) ? a.Ep(b, c) : m
	};
	q.getOptions = function(a) {
		if(!a) {
			var b = [];
			this.pd.forEach(function(a) {
				b.push(a.ja)
			});
			return b
		}
		return(a = or(this, a)) ? a.getOptions() : []
	};
	q.ow = function(a, b) {
		B(this.pd, function(c) {
			c.g(a, b)
		})
	};
	q.Vq = function() {
		var a = [];
		B(this.pd, function(b) {
			(b = b.zp()) && a.push(b)
		});
		return a
	};
	q.Uu = function(a, b) {
		pa(this.Mk, a || m);
		pa(this.Lk, b || m)
	};

	function or(a, b) {
		var c;
		a.pd.some(function(a) {
			return a.ja == b ? (c = a, l) : n
		});
		return c
	};

	function pr(a) {
		P.call(this);
		this.a = a;
		this.wa = this.D = this.o = this.Ga = this.e = this.U = this.ha = m;
		this.k = this.I = 0;
		this.ea = m;
		a = a.getEnvironmentData();
		this.Ya = -1 != document.location.toString().indexOf("/embed/") || "blazer" == a.Ja;
		this.fk()
	}
	z(pr, P);
	var qr = m;
	q = pr.prototype;
	q.fk = function() {
		this.a.z("videodatachange", this.Qk, this);
		this.a.z("onShowControls", this.jo, this);
		this.a.z("onHideControls", this.ho, this)
	};
	q.pj = function(a) {
		this.ha = a;
		K(this.ha) || "complete" == document.readyState ? this.np() : N(document, "DOMContentLoaded", x(this.np, this))
	};
	q.np = function() {
		this.g("documentready");
		this.Sk() || this.g("templateerror")
	};
	q.Sk = function() {
		var a = K(this.ha);
		(a = I(a, "html5-video-player") ? a : L("html5-video-player", a)) || (a = document.querySelector("#video-player.html5-video-player") || qr);
		if(!a) return n;
		rr(this, a);
		this.ff();
		return l
	};
	q.ff = function() {
		this.g("templateready")
	};

	function rr(a, b) {
		qr = b.cloneNode(l);
		b && (a.U = b);
		a.U.setAttribute("id", a.a.ob.attrs.id || "video-player");
		var c = K(a.ha);
		c != a.U && c.appendChild(a.U);
		(c = K("html5-player-messages")) && B(c.children, function(a) {
			Kf(a.id, a.innerHTML)
		})
	}
	q.sr = function() {
		return this.U
	};
	q.Ka = function(a) {
		id(this.U, m, [].slice.apply(arguments))
	};
	q.Ek = function(a) {
		id(this.U, [].slice.apply(arguments), m)
	};
	q.Zi = function() {
		var a = this.a.getEnvironmentData(),
			b = this.U;
		this.Ka("el-" + a.S);
		this.Ka("ps-" + a.Ja);
		J(b, "html5-native-controls", a.Za);
		J(b, "html5-mobile", a.pb);
		a.Nd || this.Ka("html5-chromeless");
		a.Hb || this.Ka("tag-pool-enabled");
		b.style.display = "";
		this.e = L("html5-video-container", b);
		this.D = L("html5-video-content", b);
		this.wa = L("html5-video-controls", b);
		this.Ya ? this.ea = N(window, "resize", x(this.hi, this)) : this.ea = Hf(x(this.hi, this), 250)
	};
	q.hi = function() {
		var a = sr(this);
		if(!a.isEmpty() && (!this.Ga || !wc(a, this.Ga))) this.Ga = a, this.Ai(a), this.g("resize")
	};
	q.Ai = function(a) {
		var b = tr(this, a);
		this.D && this.o && (zg(this.D, b.width, b.height), zg(this.o, b.width, b.height));
		if(this.D && this.o) {
			var c = Math.floor((a.width - b.width) / 2);
			a = Math.floor((a.height - b.height) / 2);
			og(this.D, c, a);
			og(this.o, c, a)
		}
		c = ur(this);
		!this.I && !this.k || (this.a.getEnvironmentData().Za || c.isEmpty()) || (a = xc(c), this.I && sk(this.o, "scaleX(" + this.I / a + ")"), this.k && (c = b.aa(), this.k > a ? c.scale(this.k / a) : c.scale(a / this.k), a = qg(this.o), a.x += (b.width - c.width) / 2, a.y += (b.height - c.height) / 2, zg(this.o, c), og(this.o, a)))
	};
	q.Yj = function() {};
	q.Qk = function(a, b) {
		this.o.setAttribute("data-youtube-id", b.J);
		var c = Ei(b, "yt:bgcolor");
		this.e.style.backgroundColor = c ? c : "";
		this.I = ki(Ei(b, "yt:stretch"));
		this.k = ki(Ei(b, "yt:crop"));
		J(this.U, "html5-live-playback", b.ac);
		J(this.U, "html5-live-dvr-disabled", b.ac && !b.Ta)
	};
	q.jo = function() {};
	q.ho = function() {};
	q.No = function() {};
	q.Mo = function() {};
	q.Lo = function() {};
	q.On = function() {};
	q.kk = function() {};
	q.dn = function() {};
	q.Wo = function() {};
	q.Un = function() {};
	q.Cf = function() {
		this.hi()
	};

	function sr(a) {
		return !a.e ? new F(0, 0) : new F(a.e.clientWidth, a.e.clientHeight)
	}

	function ur(a) {
		return !a.o ? new F(0, 0) : new F(a.o.videoWidth, a.o.videoHeight)
	}

	function tr(a, b) {
		var c = ur(a);
		if(a.a.getEnvironmentData().Za || c.isEmpty()) return b;
		a.k ? c.width = a.k * c.height : a.I && (c.width = a.I * c.height);
		return c.scale(xc(c) > xc(b) ? b.width / c.width : b.height / c.height)
	}
	q.appendToVideoContent = function(a) {
		this.D.appendChild(a)
	};
	q.appendAboveVideoControls = function(a) {
		var b = this.wa;
		b.insertBefore(a, b.childNodes[0] || m)
	};
	q.dp = function() {
		return l
	};
	q.hn = function() {};
	q.G = function() {
		this.ea && (this.Ya ? je(this.ea) : Jf(this.ea));
		zd(this.U);
		this.wa = this.D = this.o = this.e = this.U = this.ha = m;
		pr.C.G.call(this)
	};
	var vr = t("yt.pubsub.instance_") || new we;
	we.prototype.subscribe = we.prototype.z;
	we.prototype.unsubscribeByKey = we.prototype.ci;
	we.prototype.publish = we.prototype.g;
	we.prototype.clear = we.prototype.clear;
	qa("yt.pubsub.instance_", vr);

	function wr(a, b, c) {
		var d = t("yt.pubsub.instance_");
		return d ? d.subscribe(a, function() {
			var a = arguments;
			R(function() {
				b.apply(c || s, a)
			}, 0)
		}, c) : 0
	}

	function xr(a) {
		var b = t("yt.pubsub.instance_");
		b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]), B(a, function(a) {
			b.unsubscribeByKey(a)
		}))
	}

	function yr(a, b) {
		var c = t("yt.pubsub.instance_");
		return c ? c.publish.apply(c, arguments) : n
	};

	function zr() {
		this.$a = new gk
	}
	z(zr, Sa);
	q = zr.prototype;
	q.Aj = m;
	q.Le = m;
	q.Bj = m;
	q.Ki = m;
	q.wj = m;
	q.Yd = m;
	q.pq = function() {
		this.$()
	};
	q.qq = function(a) {
		a.stopPropagation()
	};
	q.$ = function() {
		X(this.Yd);
		yr("panelhidden")
	};
	q.rq = function(a) {
		27 == a.keyCode && this.$()
	};
	q.rm = function() {
		this.Le.select()
	};

	function Ar(a, b) {
		pk(a.Yd) && a.$();
		a.Ki && H(a.Yd, a.Ki);
		a.Ki = b;
		G(a.Yd, a.Ki);
		W(a.Yd)
	}
	q.G = function() {
		jk(this.$a);
		this.wj = this.Le = this.Aj = this.Bj = this.Yd = m;
		zr.C.G.call(this)
	};

	function Br(a) {
		this.O = a;
		this.O.z("internalvideodatachange", this.wn, this);
		this.b = new gk;
		this.$a = new gk;
		this.a = new zr;
		Ta(this, this.a)
	}
	z(Br, Sa);
	q = Br.prototype;
	q.ab = m;
	q.Ni = 0;

	function Cr(a, b, c) {
		b = L(Oe[b], a.ab);
		a.b.K(b, "click", x(function(a, b) {
			this.$();
			a.call(this, b);
			b.stopPropagation()
		}, a, c))
	}
	q.wn = function(a, b) {
		var c = L("html5-context-menu-copy-embed-html", this.ab);
		ok(c, b.Dn)
	};
	q.sm = function(a) {
		var b = this.O.ck();
		a && (b += "#t=" + Math.floor(this.O.getCurrentTime()) + "s");
		Dr(this, b, "URL")
	};
	q.uq = function() {
		var a = Ef("EMBED_HTML_TEMPLATE"),
			b = Ef("EMBED_HTML_URL"),
			c = dk(this.O.getEnvironmentData()),
			d = this.O.getVideoData().J,
			b = b.replace(/__videoid__/g, d),
			a = a.replace(/__url__/g, ua(b)),
			a = a.replace(/__width__/g, c.width),
			a = a.replace(/__height__/g, c.height);
		Dr(this, a, "Text")
	};

	function Dr(a, b, c) {
		if(!window.clipboardData || !window.clipboardData.setData(c, b)) a = a.a, Ar(a, "html5-modal-panel-clipboard-substitute"), a.Le.value = b, a.Le.focus(), R(x(a.rm, a), 100)
	}
	q.xq = function() {
		var a = this.O.getVideoData(),
			b = this.O.getEnvironmentData(),
			c = {
				eurl: b.a,
				html5: 1
			};
		5 != this.O.k && (c.autoplay = 1, c.vq = a.format.Wd);
		var d = Math.round(this.O.getCurrentTime());
		10 < d && (c.start = d);
		a = "/embed/" + a.J;
		a = Q(a, c);
		c = dk(b);
		b = this.O;
		c = {
			top: 0,
			left: 0,
			width: c.width,
			height: c.height,
			resizable: l
		};
		Er(b, n);
		b.g("openingpage");
		cr(a, c)
	};
	q.Aq = function() {
		this.O.stopVideo()
	};
	q.yq = function() {
		var a = this.O.getVideoData(),
			b = this.O.getEnvironmentData(),
			c = dk(b),
			d = ek(b),
			f = Ci(a),
			f = f ? f.i ? Th(f) : Sh(f) : "",
			c = {
				cr: b.region,
				csipt: a.vc,
				ec: 108,
				feature: b.k,
				h: d.height,
				hl: b.i,
				playerh: c.height,
				playerw: c.width,
				ptk: a.b,
				referrer: b.referrer,
				screenh: window.screen.height,
				screenw: window.screen.width,
				sdetail: a.R,
				shost: tf(f),
				sourceid: a.Od,
				vid: b.Ga,
				vq: b.A,
				w: d.width
			};
		pa(c, this.O.bj());
		c.videoId && (c.v = c.videoId, delete c.videoId);
		b.pb && (c.mobile = "1");
		this.O.im("streamingerror", c);
		window.open(ck(a))
	};
	q.tq = function() {
		Dr(this, this.O.getDebugText(l), "Text")
	};
	q.zq = function() {
		this.Ni || (this.Ni = Hf(x(this.Bp, this), 500));
		this.Bp();
		wr("panelhidden", x(function() {
			Jf(this.Ni);
			this.Ni = m
		}, this))
	};
	q.Bp = function() {
		var a = this.O.bj(),
			b = this.O.getEnvironmentData(),
			c = ek(b),
			b = {
				videoId: this.O.getVideoData().J,
				videoWidth: c.width,
				videoHeight: c.height,
				volume: Math.round(this.O.getVolume()),
				streamType: b.tc,
				decodedFrames: a.hmewdfc || a.hmemdf || "-",
				droppedFrames: a.hmewdrop || "-",
				parsedFrames: a.hmempf || "-",
				presentedFrames: a.hmempresented || "-",
				videoBytesDecoded: a.hmewvdbc || "-",
				audioBytesDecoded: a.hmewadbc || "-",
				paintedFrames: a.hmempainted || "-",
				paintDelay: a.hmempaintdelay || "-"
			},
			a = this.a,
			b = a.a.Cc(b);
		Ar(a, "html5-modal-panel-infobox");
		a.wj.innerHTML = b
	};
	q.sq = function(a) {
		a.preventDefault();
		pk(this.ab) && a.stopPropagation();
		var b = this.ab,
			c, d;
		d || (d = 0);
		c || (c = tg(document.body));
		nk(new D(a.pageX, a.pageY), b, d, m, c, 5);
		W(this.ab);
		this.$a.K(this.ab, "contextmenu", function(a) {
			a.preventDefault()
		});
		a = x(function() {
			this.$a.K(document, "click", x(this.$, this));
			this.$a.K(document, "contextmenu", x(this.$, this));
			this.$a.K(window, "blur", x(this.$, this))
		}, this);
		R(a, 0);
		this.$a.K(document, "keydown", x(this.Sv, this))
	};
	q.Sv = function(a) {
		27 == a.keyCode && this.$(a)
	};
	q.$ = function() {
		X(this.ab);
		jk(this.$a)
	};
	q.G = function() {
		jk(this.b);
		jk(this.$a);
		this.O.ia("internalvideodatachange", this.wn, this);
		this.O = m;
		zd(this.ab);
		this.ab = m;
		Br.C.G.call(this)
	};

	function Fr(a) {
		this.F = a;
		G(this.F, "html5-loading-icon");
		this.i = x(this.b, this)
	}
	z(Fr, Sa);
	Fr.prototype.a = 0;

	function Gr(a) {
		window.clearTimeout(a.a);
		W(a.F);
		a.b()
	}
	Fr.prototype.b = function() {
		var a = "rotate(" + 45 * Math.floor(y() / 125) + "deg)";
		sk(this.F, a);
		this.a = window.setTimeout(this.i, 125)
	};

	function Hr(a) {
		window.clearTimeout(a.a);
		X(a.F)
	}
	Fr.prototype.G = function() {
		Hr(this);
		this.F = m;
		Fr.C.G.call(this)
	};

	function Ir(a, b) {
		this.a = a;
		this.b = b
	}

	function Si(a, b) {
		return O(a.a, b) && !O(a.b, b) ? 1 : !O(a.a, b) && O(a.b, b) ? -1 : 0
	};

	function Jr(a, b) {
		var c;
		var d = "followon_" + a;
		if(!b.baseUrl || !b.uid) c = m;
		else {
			var f = b.rmktEnabled;
			c = b.focEnabled && !b.isAd;
			if(!f && !c) c = m;
			else {
				d = {
					label: c ? d : "default"
				};
				if(f) {
					f = {
						utuid: b.uid,
						type: a
					};
					b.vid && (f.utvid = b.vid);
					b.eventLabel && (f.el = b.eventLabel);
					b.playerStyle && (f.ps = b.playerStyle);
					b.feature && (f.feature = b.feature);
					b.ppe && (f.ppe = b.ppe);
					var g = [],
						j;
					for(j in f) g.push(encodeURIComponent(j) + "=" + encodeURIComponent(f[j]));
					d.data = g.join(";")
				}
				if(c && "view" == a && b.vid && b.uid && (b.oeid || b.ieid)) b.oeid && (d.oeid = b.oeid), b.ieid && (d.ieid = b.ieid), d.evid = b.vid;
				c && (d.foc_id = b.uid);
				c = Q(b.baseUrl, d)
			}
		}
		c && ve(c)
	}

	function Kr(a) {
		var b = Ef("CONVERSION_CONFIG_DICT");
		b && Jr(a, b)
	};

	function Lr(a, b, c) {
		var d = {};
		0 === b ? d.action_like_video = 1 : 1 === b ? d.action_dislike_video = 1 : d.action_indifferent_video = 1;
		d.video_id = a;
		d.plid = c.Na;
		a = {
			screen: sf({
				h: screen.height,
				w: screen.width,
				d: screen.colorDepth
			}),
			session_token: Gf("watch_actions_ajax")
		};
		c.$v && (a.station_id = c.$v);
		Pf("/watch_actions_ajax", {
			format: "XML",
			method: "POST",
			eb: d,
			ne: a,
			na: c.na,
			onError: c.onError,
			Oc: c.Oc
		});
		0 === b ? Kr("like") : 1 === b && Kr("dislike")
	};

	function Mr(a) {
		this.a = a
	}
	var Nr = /\s*;\s*/;
	q = Mr.prototype;
	q.set = function(a, b, c, d, f, g) {
		/[;=\s]/.test(a) && e(Error('Invalid cookie name "' + a + '"'));
		/[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
		da(c) || (c = -1);
		f = f ? ";domain=" + f : "";
		d = d ? ";path=" + d : "";
		g = g ? ";secure" : "";
		c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(y() + 1E3 * c)).toUTCString();
		this.a.cookie = a + "=" + b + f + d + c + g
	};
	q.get = function(a, b) {
		for(var c = a + "=", d = (this.a.cookie || "").split(Nr), f = 0, g; g = d[f]; f++) {
			if(0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
			if(g == a) return ""
		}
		return b
	};
	q.Lc = function() {
		return Or(this).keys
	};
	q.Cb = function() {
		return Or(this).yu
	};
	q.isEmpty = function() {
		return !this.a.cookie
	};
	q.Mc = function() {
		return !this.a.cookie ? 0 : (this.a.cookie || "").split(Nr).length
	};
	q.clear = function() {
		for(var a = Or(this).keys, b = a.length - 1; 0 <= b; b--) {
			var c = a[b];
			this.get(c);
			this.set(c, "", 0, h, h)
		}
	};

	function Or(a) {
		a = (a.a.cookie || "").split(Nr);
		for(var b = [], c = [], d, f, g = 0; f = a[g]; g++) d = f.indexOf("="), -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)));
		return {
			keys: b,
			yu: c
		}
	}
	var Pr = new Mr(document);
	Pr.b = 3950;

	function Qr(a, b, c) {
		Pr.set("" + a, b, c, "/", "youtube.com")
	};

	function Rr(a, b) {
		var c = Ec(a);
		if(c == Ec(window.location.href) || !c && 0 == a.lastIndexOf("/", 0)) {
			var c = Gc(a),
				d = c.indexOf("#");
			if(c = 0 > d ? c : c.substr(0, d)) {
				for(var f = d = 0; f < c.length; ++f) d = 31 * d + c.charCodeAt(f), d %= 4294967296;
				c = "s_tempdata-" + d;
				d = b ? sf(b) : "";
				Qr(c, d, 5)
			}
		}
	};

	function Sr(a) {
		for(var b = 0, c = 0, d = a.length; c < d; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
		return b
	}

	function Tr() {
		return "loaded".replace(/([A-Z])/g, "-$1").toLowerCase()
	};

	function Ur() {
		var a;
		if(a = Pr.get("PREF", h)) {
			a = unescape(a).split("&");
			for(var b = 0; b < a.length; b++) {
				var c = a[b].split("="),
					d = c[0];
				(c = c[1]) && (Vr[d] = c.toString())
			}
		}
	}
	ba(Ur);
	var Vr = t("yt.prefs.UserPrefs.prefs_") || {};
	qa("yt.prefs.UserPrefs.prefs_", Vr);

	function Wr(a) {
		/^f([1-9][0-9]*)$/.test(a) && e("ExpectedRegexMatch: " + a)
	}

	function Xr(a) {
		/^\w+$/.test(a) || e("ExpectedRegexMismatch: " + a)
	}

	function Yr(a) {
		a = Vr[a] !== h ? Vr[a].toString() : m;
		return a != m && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : m
	}
	Ur.prototype.get = function(a, b) {
		Xr(a);
		Wr(a);
		var c = Vr[a] !== h ? Vr[a].toString() : m;
		return c != m ? c : b ? b : ""
	};
	Ur.prototype.set = function(a, b) {
		Xr(a);
		Wr(a);
		b == m && e("ExpectedNotNull");
		Vr[a] = b.toString()
	};

	function Zr(a, b) {
		return !!((Yr("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
	}

	function $r(a, b) {
		var c = "f" + (Math.floor(a / 31) + 1),
			d = 1 << a % 31,
			f = Yr(c) || 0,
			f = b ? f | d : f & ~d;
		0 == f ? delete Vr[c] : (d = f.toString(16), Vr[c] = d.toString())
	}

	function as() {
		var a = [],
			b;
		for(b in Vr) a.push(b + "=" + escape(Vr[b]));
		Qr("PREF", a.join("&"), 31536E4)
	}
	Ur.prototype.clear = function() {
		Vr = {}
	};
	var bs = {
		YA: 0,
		Nz: 1,
		Po: 2,
		zA: 3,
		Oz: 4,
		yB: 5,
		AB: 6,
		xB: 7,
		vB: 8,
		wB: 9,
		zB: 10,
		uB: 11,
		eB: 12,
		dB: 13,
		cB: 14,
		hA: 15,
		MA: 16,
		PA: 17,
		QA: 18,
		OA: 19,
		NA: 20,
		fB: 21,
		Sz: 22,
		tB: 23,
		Rz: 24,
		zz: 25,
		Tz: 26,
		fA: 27,
		aB: 28,
		Qz: 29,
		$A: 30,
		mB: 31,
		lB: 32,
		cA: 33,
		jB: 34,
		gB: 35,
		hB: 36,
		iB: 37,
		kB: 38,
		AA: 39,
		TA: 40,
		Az: 41,
		SA: 42,
		Cz: 43,
		Oo: 44,
		Vz: 45,
		JA: 46,
		nB: 47,
		BB: 48,
		CB: 49,
		EB: 50,
		bB: 51,
		Iz: 52,
		Kz: 53,
		KA: 54,
		vA: 55,
		Uz: 56,
		ZA: 57,
		WA: 58,
		eA: 59,
		GA: 60,
		wA: 61,
		BA: 62,
		Bz: 63,
		qB: 64,
		Fz: 65,
		Ez: 66,
		CA: 67,
		Mz: 68,
		Xz: 69,
		pA: 70,
		HA: 71,
		gA: 72,
		XA: 73,
		DA: 74,
		Qo: 75,
		Dz: 76,
		RA: 77,
		Yz: 78,
		oB: 79,
		xA: 80,
		Jz: 81,
		FA: 82,
		qA: 83,
		sA: 84,
		rA: 85,
		tA: 86,
		uA: 87,
		Gz: 88,
		yz: 89,
		Hz: 90,
		LA: 91,
		IA: 92,
		Lz: 93,
		DB: 94,
		bA: 95,
		aA: 96,
		dA: 97,
		yA: 98,
		Wz: 99,
		EA: 100,
		jA: 101,
		iA: 102,
		lA: 103,
		mA: 104,
		kA: 105,
		pB: 106,
		Ow: 107,
		Zz: 108,
		VA: 109,
		$z: 110,
		nA: 111,
		oA: 112,
		UA: 113,
		Pz: 114,
		sB: 115,
		rB: 116
	};

	function cs() {
		this.a = [];
		ds(this)
	}
	ba(cs);
	q = cs.prototype;
	q.mb = 0;
	q.ze = 0;
	q.Eg = 0;
	q.Al = "";
	q.Fd = 0;
	q.load = function(a) {
		3 <= this.Fd ? a(this) : this.a.push(a)
	};
	q.getVersion = function() {
		return [this.mb, this.ze, this.Eg]
	};

	function es(a, b, c, d) {
		b = "string" == typeof b ? b.split(".") : [b, c, d];
		b[0] = parseInt(b[0], 10) || 0;
		b[1] = parseInt(b[1], 10) || 0;
		b[2] = parseInt(b[2], 10) || 0;
		return a.mb > b[0] || a.mb == b[0] && a.ze > b[1] || a.mb == b[0] && a.ze == b[1] && a.Eg >= b[2]
	}

	function fs(a) {
		return -1 < a.Al.indexOf("Gnash") && -1 == a.Al.indexOf("AVM2") || 9 == a.mb && 1 == a.ze || 9 == a.mb && 0 == a.ze && 1 == a.Eg ? n : 9 <= a.mb
	}

	function ds(a) {
		if(3 > a.Fd)
			if(1 > a.Fd) {
				var b = t("window.navigator.plugins"),
					c = t("window.navigator.mimeTypes"),
					b = b && b["Shockwave Flash"],
					c = c && c["application/x-shockwave-flash"],
					c = b && c && c.enabledPlugin && b.description || "";
				if(b = c) {
					var d = b.indexOf("Shockwave Flash");
					0 <= d && (b = b.substr(d + 15));
					for(var d = b.split(" "), f = "", b = "", g = 0, j = d.length; g < j; g++)
						if(f)
							if(b) break;
							else b = d[g];
					else f = d[g];
					f = f.split(".");
					d = parseInt(f[0], 10) || 0;
					f = parseInt(f[1], 10) || 0;
					g = 0;
					if("r" == b.charAt(0) || "d" == b.charAt(0)) g = parseInt(b.substr(1), 10) || 0;
					b = [d, f, g]
				} else b = [0, 0, 0];
				a.Al = c;
				c = b;
				a.mb = c[0];
				a.ze = c[1];
				a.Eg = c[2];
				a.Fd = 1;
				0 < a.mb ? gs(a) : ds(a)
			} else if(2 > a.Fd) {
			var k, p, r, u;
			if(Lf) {
				try {
					k = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
				} catch(w) {
					k = m
				}
				k || a.ep("")
			} else r = document.getElementsByTagName("body")[0], u = document.createElement("object"), u.setAttribute("type", "application/x-shockwave-flash"), k = r.appendChild(u);
			var A = x(a.ep, a),
				E = 0,
				Aa = function() {
					if(k && "GetVariable" in k) try {
						p = k.GetVariable("$version")
					} catch(a) {
						p = ""
					}
					p || 10 <= E ? (r && u && r.removeChild(u), A(p || "")) : (E++, R(Aa, 10))
				};
			R(Aa, 0)
		} else gs(a)
	}
	q.ep = function(a) {
		a ? (a = a.split(" ")[1].split(","), a = [parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0, parseInt(a[2], 10) || 0]) : a = [0, 0, 0];
		this.mb = a[0];
		this.ze = a[1];
		this.Eg = a[2];
		this.Fd = 2;
		0 < this.mb ? gs(this) : ds(this)
	};

	function gs(a) {
		if(3 > a.Fd) {
			a.Fd = 3;
			for(var b = 0, c = a.a.length; b < c; b++) a.a[b](a);
			a.a = []
		}
	};

	function hs(a, b, c) {
		if((a = K(a)) && b && c) {
			c = se(c);
			var d = ab(c.attrs);
			d.tabindex = 0;
			var f = ab(c.params);
			f.flashvars = sf(c.args);
			if(Lf) {
				d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
				f.movie = b;
				b = document.createElement("object");
				for(var g in d) b.setAttribute(g, d[g]);
				for(g in f) d = document.createElement("param"), d.setAttribute("name", g), d.setAttribute("value", f[g]), b.appendChild(d)
			} else {
				d.type = "application/x-shockwave-flash";
				d.src = b;
				b = document.createElement("embed");
				for(g in d) b.setAttribute(g, d[g]);
				for(g in f) b.setAttribute(g, f[g])
			}
			f = document.createElement("div");
			f.appendChild(b);
			a.innerHTML = f.innerHTML
		}
	}

	function is(a, b, c) {
		if(a) {
			a = se(a);
			var d = !!b,
				f = K(a.attrs.id),
				g = f ? f.parentNode : m;
			if(!f || !g) R(function() {
				is(a, b, c)
			}, 50);
			else {
				if(window != window.top) {
					var j = m;
					if(document.referrer) {
						var k = document.referrer.substring(0, 128),
							p = wf(k);
						vf(p) || (p === m ? 0 : "google" == p[1] || "google" == p[2] && ("au" == p[0] && "com" == p[1] || "uk" == p[0] && "co" == p[1])) || (j = k)
					} else j = "unknown";
					j && (d = l, a.args.framer = j)
				}
				js(function(b) {
					if(es(b, a.minVersion) || Ef("IS_OPERA_MINI")) {
						var j = ks(a, b),
							k = ""; - 1 < navigator.userAgent.indexOf("Sony/COM2") || (k = f.getAttribute("src") || f.movie);
						(k != j || d) && hs(g, j, a);
						if(lb ? !es(b, 11, 2) : kb ? !es(b, 11, 3) : !fs(b)) b = K("flash10-promo-div"), j = Zr(Ur.getInstance(), bs.Ow), b && !j && W(b)
					} else ls(g, a, b);
					c && c()
				})
			}
		}
	}

	function ls(a, b, c) {
		0 == c.mb && b.fallback ? b.fallback() : 0 == c.mb && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + S("FLASH_UPGRADE", h, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
	}

	function ks(a, b) {
		return fs(b) && a.url || (-1 < navigator.userAgent.indexOf("Sony/COM2") && !es(b, 9, 1, 58) ? n : l) && a.urlV9As2 || a.urlV8 || a.url
	}

	function js(a) {
		cs.getInstance().load(function(b) {
			Ur.getInstance().set("fv", b.getVersion().join("."));
			as();
			a(b)
		})
	};

	function ms(a) {
		return a.dataset ? a.dataset.loaded : a.getAttribute("data-" + Tr())
	};

	function ns(a, b) {
		if(a in os)
			for(var c = os[a], d = Array.prototype.slice.call(arguments, 1), f = 0, g = c.length; f < g; f++) c[f] && c[f][0].apply(c[f][1], d)
	}
	var os = {};

	function ps(a, b) {
		var c = "js-" + Sr(a),
			d = document.getElementById(c),
			f = d && ms(d),
			d = d && !f;
		if(f) b && b();
		else if(b && (c in os || (os[c] = []), os[c].push([b, h])), !d) {
			var g, j = function() {
					if(!ms(g)) {
						var a = g;
						a.dataset ? a.dataset.loaded = "true" : a.setAttribute("data-" + Tr(), "true");
						ns(c);
						c ? c in os && delete os[c] : os = {}
					}
				},
				k = document.createElement("script");
			k.id = c;
			k.onload = function() {
				setTimeout(j, 0)
			};
			k.onreadystatechange = function() {
				switch(k.readyState) {
					case "loaded":
					case "complete":
						k.onload()
				}
			};
			k.src = a;
			f = document.getElementsByTagName("head")[0];
			f.insertBefore(k, f.firstChild);
			g = k
		}
	};

	function qs(a, b, c, d) {
		a = {
			name: a,
			locale: c,
			feature: d
		};
		for(var f in b) a[f] = b[f];
		b = Q("/sharing_services", a);
		ve(b)
	}

	function rs(a, b, c, d) {
		qs(a, {
			v: b
		}, c, d)
	}

	function ss(a, b, c, d, f) {
		qs(a, {
			list: b,
			v: c
		}, d, f)
	};

	function ts() {
		this.a = {}
	}
	z(ts, zk);
	ba(ts);
	ts.prototype.Rc = "expander";
	ts.prototype.register = function() {
		$(this, "click", this.b, "head");
		$(this, "keypress", this.j, "head")
	};
	ts.prototype.b = function(a) {
		us(this, a)
	};
	ts.prototype.j = function(a, b, c) {
		c && 13 == c.keyCode && us(this, a)
	};

	function us(a, b) {
		var c = a.hb(b);
		c && (jd(c, Z(a, "collapsed")), a.we(c, "expander-action"))
	}

	function vs(a, b) {
		var c = a.hb(b);
		c && (G(c, Z(a, "collapsed")), a.we(c, "expander-action"))
	};

	function ws(a, b, c, d, f) {
		this.Y = a;
		this.Bk = n;
		a = Fc() + "/share_ajax";
		c = {
			action_get_email: 1,
			video_id: c,
			list: d
		};
		f && (c.new_share = 1);
		Pf(a, {
			format: "JSON",
			eb: c,
			na: function(a, c) {
				this.Y.innerHTML = c.email_html;
				this.Ag();
				this.focus();
				var d = c.sharing_binary_url;
				if(d) {
					var f = c.contacts,
						r = x(function() {
							var a = t("yt.sharing.ContactTools");
							a && a.createContactTools(this.vk, m, f, b)
						}, this);
					ps(d, r)
				}
			},
			Ra: this
		})
	}
	q = ws.prototype;
	q.Ag = function() {
		this.Dd = this.Y.getElementsByTagName("form")[0];
		N(this.Dd, "submit", x(this.Gs, this));
		L("share-email-send", this.Dd);
		this.wk = L("share-email-success", this.Y);
		this.j = L("share-email-remail", this.wk);
		N(this.j, "click", x(function() {
			xs(this);
			this.focus()
		}, this));
		this.vk = L("share-email-recipients", this.Y);
		this.a = L("share-email-note", this.Y);
		this.b = L("share-email-preview-note", this.Y);
		N(this.a, "keyup", x(this.Fs, this))
	};
	q.$d = function() {
		this.Dd && (this.Bk && xs(this), this.focus())
	};
	q.focus = function() {
		this.vk.focus()
	};

	function xs(a) {
		a.Bk = n;
		a.vk.value = "";
		a.a.value = "";
		a.b.innerHTML = "";
		X(a.wk);
		W(a.Dd)
	}
	q.Fs = function() {
		var a = this.a.value,
			a = a.substring(0, 300),
			a = ua(a),
			a = a.replace(/\n/g, "<br>");
		this.b.innerHTML = a
	};
	q.Gs = function(a) {
		a.preventDefault();
		var b = rd("button", m, this.Dd)[0];
		b.disabled = l;
		var c = L("share-email-captcha", this.Y),
			d = L("share-email-error", this.Y),
			f = L("yt-alert-content", d);
		a = Fc() + Gc(this.Dd.action);
		Pf(a, {
			format: "JSON",
			method: "POST",
			Pj: af(this.Dd),
			na: function() {
				this.Bk = l;
				W(this.wk);
				X(this.Dd);
				X(d);
				X(c)
			},
			onError: function(a, b) {
				b.captcha_html && (c.innerHTML = b.captcha_html, W(c));
				b.errors && (f.innerHTML = b.errors.join("<br>"), W(d))
			},
			Oc: function() {
				b.disabled = n
			},
			Ra: this
		})
	};

	function ys() {
		this.a = {}
	}
	z(ys, zk);
	ba(ys);
	q = ys.prototype;
	q.Rc = "form-input";
	q.register = function() {
		C && !Gb(9) && ($(this, "click", this.Mi, "checkbox"), $(this, "keypressed", this.Mi, "checkbox"), $(this, "click", this.mp, "radio"), $(this, "keypressed", this.mp, "radio"));
		$(this, "change", this.Mi, "checkbox");
		$(this, "blur", this.iw, "select-element");
		$(this, "change", this.xe, "select-element");
		$(this, "keyup", this.xe, "select-element");
		$(this, "focus", this.jw, "select-element");
		$(this, "keyup", this.Cl, "text");
		$(this, "keyup", this.Cl, "textarea");
		$(this, "keyup", this.Cl, "bidi");
		$(this, "click", this.kw, "reset")
	};
	q.Mi = function(a) {
		var b = Ld(a, Z(this, "checkbox-container"));
		a.checked && I(b, "partial") && (a.checked = n, a.b = n, H(b, "partial"));
		J(b, "checked", a.checked)
	};
	q.Vw = function(a) {
		var b = Ld(a, Z(this, "radio-container"));
		b && J(b, "checked", a.checked)
	};
	q.mp = function() {
		zs()
	};
	q.Cl = function(a) {
		var b = a.value,
			c = "";
		eq.test(b) ? c = "rtl" : dq.test(b) && (c = "ltr");
		a.dir = c
	};
	q.jw = function(a) {
		var b = Ld(a, Z(this, "select"));
		G(b, "focused");
		this.xe(a)
	};
	q.iw = function(a) {
		var b = Ld(a, Z(this, "select"));
		H(b, "focused");
		this.xe(a)
	};
	q.xe = function(a) {
		var b = Ld(a, Z(this, "select")),
			b = L(Z(this, "select-value"), b),
			c = a.options[Math.max(a.selectedIndex, 0)];
		c && ("" != b.innerHTML && c.innerHTML != b.innerHTML && this.we(a, "onchange-callback"), b.innerHTML = c.innerHTML)
	};
	q.kw = function() {
		var a = ys.getInstance(),
			b = qd(Z(a, "checkbox"));
		B(b, a.Mi, a);
		zs();
		a = ys.getInstance();
		b = qd(Z(a, "select-element"));
		B(b, a.xe, a)
	};

	function zs() {
		var a = ys.getInstance(),
			b = qd(Z(a, "radio"));
		B(b, a.Vw, a)
	};

	function As(a, b, c, d) {
		this.Y = a;
		this.Sf = d || n;
		a = Fc() + "/share_ajax";
		b = {
			action_get_embed: 1,
			video_id: b,
			list: c
		};
		this.Sf && (b.new_share = 1);
		Pf(a, {
			format: "JSON",
			eb: b,
			na: function(a, b) {
				this.Y.innerHTML = b.embed_html;
				this.jt = b.legacy_url;
				this.it = b.legacy_code;
				this.ht = b.iframe_url;
				this.gt = b.iframe_code;
				this.Ag();
				var c = Ur.getInstance();
				this.he && (this.he.checked = !Zr(0, bs.Po));
				this.kh.checked = Zr(0, bs.Oo);
				this.ge && (this.ge.checked = Zr(0, bs.Qo));
				a: if(c = c.get("ems"), this.Sf) {
					"custom" == c && W(K("share-embed-customize"));
					for(var d = 0; d < this.ie.length; d++) {
						var p = this.ie[d];
						if(p.value == c) {
							p.selected = l;
							ys.getInstance().xe(this.qd);
							break a
						}
					}
					this.ie[0].selected = l;
					ys.getInstance().xe(this.qd)
				} else(c in this.kc ? this.kc[c] : Xa(this.kc)).select();
				Bs(this);
				this.$d()
			},
			Ra: this
		})
	}
	q = As.prototype;
	q.Ve = 0;
	q.bg = 0;
	q.Ag = function() {
		this.a = L("share-embed-code", this.Y);
		N(this.a, "click", x(this.Nq, this));
		if(this.Sf) {
			this.qd = K("embed-layout-options");
			this.ie = rd("option", m, this.qd);
			var a = parseInt(M(this.ie[0], "width"), 10),
				b = parseInt(M(this.ie[0], "height"), 10);
			this.j = a / b;
			N(this.qd, "change", x(function() {
				var a = this.qd.options[Math.max(this.qd.selectedIndex, 0)],
					a = !a ? m : a.value || a.text;
				Ur.getInstance().set("ems", a);
				as();
				Bs(this);
				var b = K("share-embed-customize");
				"custom" == a ? W(b) : (X(b), this.focus())
			}, this));
			a = K("share-embed-customize");
			this.i = L("share-embed-size-custom-width", a);
			this.b = L("share-embed-size-custom-height", a);
			N(this.i, "keyup", x(this.Tq, this));
			N(this.b, "keyup", x(this.Sq, this))
		} else {
			a = L("share-embed-size-list", this.Y);
			b = qd("share-embed-size-radio", a);
			this.kc = {};
			B(b, function(a) {
				I(a, "share-embed-size-radio-custom") || (a = new Cs(a), this.kc[a.name] = a)
			}, this);
			var b = Xa(this.kc).width / Xa(this.kc).height,
				c = L("share-embed-size-radio-custom", a),
				b = new Ds(c, b);
			this.k = this.kc[b.name] = b;
			he(a, x(this.Pq, this), "share-embed-size");
			a = L("share-embed-customize", a);
			N(a, "keyup", x(this.Uq, this))
		}
		var d = {},
			a = qd("share-embed-option", this.Y);
		B(a, function(a) {
			d[a.name] = a
		});
		(this.he = d["show-related"]) && N(this.he, "click", x(this.Oq, this));
		this.kh = d["delayed-cookies"];
		N(this.kh, "click", x(this.Mq, this));
		this.e = d["use-https"];
		N(this.e, "click", x(this.Rq, this));
		(this.ge = d["use-flash-code"] || m) && N(this.ge, "click", x(this.Qq, this))
	};
	q.Tq = function() {
		this.Ve = parseInt(this.i.value, 10);
		this.bg = Math.round(this.Ve / this.j) || 0;
		this.b.value = this.bg + "";
		Bs(this)
	};
	q.Sq = function() {
		this.bg = parseInt(this.b.value, 10);
		this.Ve = Math.round(this.bg * this.j) || 0;
		this.Ve.value = this.Ve + "";
		Bs(this)
	};
	q.$d = function() {
		this.focus()
	};
	q.focus = function() {
		this.a && (this.a.focus(), this.a.select())
	};

	function Bs(a) {
		var b = a.gt,
			c = a.ht;
		a.ge && a.ge.checked && (b = a.it, c = a.jt);
		a.kh.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
		a.e.checked && (c = c.split("//"), c[0] = "https:", c = c.join("//"));
		var d = {};
		a.he && !a.he.checked && (d.rel = 0);
		c = uf(c, d);
		if(a.Sf) {
			var f = a.qd.options[Math.max(a.qd.selectedIndex, 0)];
			f ? "custom" == f.value ? d = {
				width: a.Ve,
				height: a.bg
			} : (d = parseInt(M(f, "width"), 10), f = parseInt(M(f, "height"), 10), d = {
				width: d,
				height: f
			}) : d = {
				width: 0,
				height: 0
			}
		} else d = a.kc, d = (f = $a(d, function(a) {
			return a.a.checked
		}, h)) && d[f], d = !d ? {
			width: 0,
			height: 0
		} : {
			width: d.width,
			height: d.height
		};
		if(!d.width || 200 > d.width) a.Sf ? (d = parseInt(M(a.ie[0], "width"), 10), f = parseInt(M(a.ie[0], "height"), 10), d = {
			width: d,
			height: f
		}) : d = Xa(a.kc);
		b = b.replace(/__url__/g, ua(c));
		b = b.replace(/__width__/g, d.width + "");
		b = b.replace(/__height__/g, d.height + "");
		b = ua(b);
		b != a.a.innerHTML && (a.a.innerHTML = b)
	}
	q.Oq = function() {
		var a = this.he.checked;
		Ur.getInstance();
		$r(bs.Po, !a);
		as();
		Bs(this)
	};
	q.Mq = function() {
		var a = this.kh.checked;
		Ur.getInstance();
		$r(bs.Oo, a);
		as();
		Bs(this)
	};
	q.Rq = function() {
		Bs(this)
	};
	q.Qq = function() {
		var a = this.ge.checked;
		Ur.getInstance();
		$r(bs.Qo, a);
		as();
		Bs(this)
	};
	q.Nq = function() {
		this.focus()
	};
	q.Pq = function(a) {
		a = L("share-embed-size-radio", a.currentTarget);
		a = this.kc[a.value];
		a.select();
		Ur.getInstance().set("ems", a.name);
		as();
		Bs(this);
		a != this.k && this.focus()
	};
	q.Uq = function() {
		Bs(this)
	};

	function Cs(a) {
		this.name = a.value;
		this.a = a;
		this.width = parseInt(M(this.a, "width"), 10);
		this.height = parseInt(M(this.a, "height"), 10)
	}
	Cs.prototype.select = function() {
		this.a.checked = l;
		var a = Jd(this.a, "li"),
			b = Jd(a, "ul"),
			b = rd("li", "selected", b);
		B(b, function(a) {
			H(a, "selected")
		});
		G(a, "selected")
	};

	function Ds(a, b) {
		Cs.call(this, a);
		this.i = b;
		var c = Jd(a, "li");
		this.j = L("share-embed-size-custom-width", c);
		this.b = L("share-embed-size-custom-height", c);
		N(this.j, "keyup", x(this.k, this));
		N(this.b, "keyup", x(this.e, this))
	}
	z(Ds, Cs);
	Ds.prototype.k = function() {
		this.width = parseInt(this.j.value, 10);
		this.height = Math.round(this.width / this.i) || 0;
		this.b.value = this.height + ""
	};
	Ds.prototype.e = function() {
		this.height = parseInt(this.b.value, 10);
		this.width = Math.round(this.height * this.i) || 0;
		this.j.value = this.width + ""
	};

	function Es(a, b, c, d, f, g, j, k) {
		this.Y = a;
		this.i = b || m;
		this.e = c || m;
		this.D = j || n;
		this.ha = k || m;
		a = Fc() + "/share_ajax";
		b = {
			action_get_share_box: 1,
			video_id: this.i,
			list: this.e,
			feature: this.ha
		};
		this.D && (b.new_share = 1, this.e && (b.render_playlist_options = 1));
		Pf(a, {
			format: "JSON",
			eb: b,
			na: function(a, b) {
				this.Y.innerHTML = b.share_html;
				this.xo = b.url_short;
				this.wo = b.url_long;
				this.Yu = b.lang;
				this.Jj = m;
				"session_index" in b && (this.Jj = b.session_index);
				this.Ag();
				d && d();
				this.$d()
			},
			Ra: this
		})
	}
	var Fs = {
		FACEBOOK: "share_facebook",
		BLOGGER: "share_blogger",
		TWITTER: "share_twitter",
		GOOGLEPLUS: "share_gplus"
	};
	q = Es.prototype;
	q.Ag = function() {
		var a = L("share-panel-show-url-options");
		N(a, "click", x(this.Ou, this));
		a = L("share-panel-show-more");
		N(a, "click", x(this.Ju, this));
		a = L("share-panel-services", this.Y);
		N(a, "click", x(this.Ku, this));
		a = L("share-panel-embed", this.Y);
		N(a, "click", x(this.Hu, this));
		a = L("share-panel-email", this.Y);
		N(a, "click", x(this.Gu, this));
		(a = L("share-panel-hangout", this.Y)) && N(a, "click", x(this.Iu, this));
		this.kb = L("share-panel-url", this.Y);
		N(this.kb, "click", x(this.Pu, this));
		N(this.kb, "focus", x(function() {
			G(this.kb, "focused")
		}, this));
		N(this.kb, "blur", x(function() {
			H(this.kb, "focused")
		}, this));
		this.ea = L("share-panel-long-url", this.Y);
		this.k = L("share-panel-start-at", this.Y);
		this.Nc = L("share-panel-start-at-time", this.Y);
		N(this.Nc, "change", x(this.Fu, this));
		N(this.Nc, "click", x(this.Nu, this));
		N(this.Nc, "focus", x(function() {
			G(this.Nc, "focused")
		}, this));
		N(this.Nc, "blur", x(function() {
			H(this.Nc, "focused")
		}, this));
		this.da = L("share-panel-hd", this.Y);
		this.A = L("share-panel-url-options", this.Y);
		N(this.A, "click", x(this.Vk, this));
		this.F = L("share-panel-services", this.Y);
		this.I = L("share-panel-buttons", this.Y);
		a = L("share-panel-show-more", this.Y);
		N(a, "click", x(this.Mu, this));
		he(this.Y, x(this.Lu, this), "share-service-button");
		this.D && (he(this.Y, x(this.Qu, this), "share-service-expand-arrow"), this.j = L("share-panel-services-container", this.Y), N(K("share-with-playlist"), "click", x(this.Tu, this)), N(K("share-with-playlist-current"), "click", x(this.Ru, this)), N(K("share-with-playlist-first"), "click", x(this.Su, this)))
	};
	q.Qu = function(a) {
		var b = Ld(a.target, "secondary");
		a = L("overlay", b);
		var c = I(b, "expanded"),
			d;
		d = m;
		"transition" in a.style ? d = "transition-duration" : "webkitTransition" in a.style ? d = "-webkit-transition-duration" : "MozTransition" in a.style ? d = "-moz-transition-duration" : "OTransition" in a.style ? d = "-o-transition-duration" : "msTransition" in a.style && (d = "-ms-transition-duration");
		d = d ? (document.defaultView ? document.defaultView.getComputedStyle(a, m) : document.parentWindow.getComputedStyle(a, m)).getPropertyValue(d) : "0";
		d = 1E3 * parseFloat(d);
		var f = "rtl" == document.body.getAttribute("dir") ? "right" : "left",
			c = c ? "0px" : Bg(b).width + "px";
		a.style[f] = c;
		R(function() {
			jd(b, "expanded")
		}, d)
	};
	q.$d = function() {
		this.kb && !I(this.kb, "focused") && (this.kb.focus(), this.kb.select())
	};
	q.Vk = function() {
		if(!I(this.kb, "focused")) {
			var a = this.xo;
			this.ea && this.ea.checked && (a = this.wo);
			var b = {};
			this.da && this.da.checked && (b.hd = 1);
			var c;
			if(c = !this.k.disabled)
				if(c = this.k.checked) {
					var d = this.Nc.value;
					c = ["h", "m", "s"];
					var f = Ma(c);
					f.reverse();
					var g = {},
						d = d.toLowerCase().match(/\d+\s*[hms]?/g) || [],
						d = Ea(d, function(a) {
							var b = (a.match(/[hms]/) || [""])[0];
							return b ? (g[b] = parseInt(a.match(/\d+/)[0], 10), n) : l
						});
					for(d.reverse(); d.length && f.length;) {
						var j = f.shift();
						j in g || (g[j] = parseInt(d.shift(), 10))
					}
					if(d.length || 59 < g.s || 59 < g.m || 9 < g.h) c = m;
					else {
						var k = "";
						B(c, function(a) {
							g[a] && (k += g[a] + a)
						});
						c = k || m
					}
				}
			c && (b.t = c);
			a = Q(a, b);
			this.kb.value != a && (this.kb.value = a)
		}
	};
	q.Fu = function() {
		this.k.checked = l;
		this.Vk()
	};
	q.Nu = function() {
		this.k.checked = l;
		this.Nc.value.match(/[1-9]/) || (this.Nc.value = "")
	};
	q.Pu = function() {
		this.kb.select()
	};
	q.Gu = function() {
		var a = ts.getInstance();
		vs(a, this.I);
		vs(a, this.A);
		vs(a, this.F);
		this.b && X(this.b);
		this.j && X(this.j);
		this.a || (this.a = L("share-panel-email-container", this.Y));
		qk(this.a);
		!M(this.a, "disabled") && pk(this.a) && (this.R ? this.R.$d() : this.R = new ws(this.a, this.Jj, this.i, this.e, this.D));
		Kr("share_mail")
	};
	q.Iu = function() {
		var a = Ef("PLAYER_REFERENCE");
		a && a.pauseVideo && a.pauseVideo();
		var a = Q("https://talkgadget.google.com/hangouts", {
				hl: this.Yu,
				authuser: this.Jj,
				gid: "youtube",
				gd: this.i,
				hs: 5
			}),
			b = window.screen.height,
			c = Math.min(0.9 * window.screen.width, 1E3),
			b = Math.min(0.9 * b, 800);
		rs("HANGOUT", this.i + "");
		cr(a, {
			width: c,
			height: b
		})
	};
	q.Hu = function() {
		var a = ts.getInstance();
		vs(a, this.I);
		vs(a, this.A);
		vs(a, this.F);
		this.a && X(this.a);
		this.j && X(this.j);
		this.b || (this.b = L("share-panel-embed-container", this.Y));
		qk(this.b);
		!M(this.b, "disabled") && pk(this.b) && (this.Z ? this.Z.$d() : this.Z = new As(this.b, this.i, this.e, this.D));
		Kr("share_embed")
	};
	q.Lu = function(a) {
		a = M(a.currentTarget, "service-name") || "";
		(a = Fs[a]) && Kr(a)
	};
	q.Ou = function() {
		vs(ts.getInstance(), this.F);
		this.a && X(this.a);
		this.b && X(this.b)
	};
	q.Ju = function() {
		vs(ts.getInstance(), this.A);
		this.a && X(this.a);
		this.b && X(this.b)
	};
	q.Mu = function() {
		Gs(this)
	};
	q.Ku = function() {
		Gs(this);
		this.j && W(this.j)
	};

	function Gs(a) {
		a.a && X(a.a);
		a.b && X(a.b)
	}
	q.Tu = function(a) {
		Hs(this);
		var b = n;
		a.target.checked && (b = Jd(K("share-with-playlist-first"), "li"), b = I(b, "yt-uix-button-menu-item-selected"));
		Is(this, a.target.checked, b)
	};

	function Js(a) {
		K("share-with-playlist").checked = l;
		Hs(a)
	}

	function Hs(a) {
		var b = K("share-with-playlist").checked;
		L("share-panel-start-at", a.j).disabled = b;
		L("share-panel-start-at-time", a.j).disabled = b
	}
	q.Ru = function() {
		Js(this);
		Is(this, l)
	};
	q.Su = function() {
		Js(this);
		Is(this, l, l)
	};

	function Is(a, b, c) {
		var d = {
			action_get_share_urls: 1,
			video_id: a.i
		};
		b && (d.list = a.e);
		c && (d.use_first_video = l);
		Pf("share_ajax", {
			format: "JSON",
			eb: d,
			na: function(a, b) {
				this.xo = b.url_short;
				this.wo = b.url_long;
				this.Vk();
				K("share-services-container").innerHTML = b.share_services_html
			},
			Ra: a
		})
	};

	function Ks() {}
	q = Ks.prototype;
	q.fp = n;
	q.Dg = m;
	q.Hi = m;
	q.init = function() {
		if(!this.fp) {
			this.fp = l;
			this.Dg = L("player-root", h);
			this.Hi = L("player-actions-container", this.Dg);
			var a = L("player-actions-close", this.Hi);
			N(a, "click", x(this.$, this))
		}
	};
	q.$ = function() {
		J(this.Dg, "actions-mode", n)
	};
	q.lw = function() {
		600 > this.Dg.clientWidth && G(this.Hi, "small-view")
	};
	q.Dl = m;
	q.mr = function(a) {
		a = a || {};
		this.init();
		J(this.Dg, "actions-mode", l);
		if(this.Dl) this.Dl.$d();
		else {
			var b = L("player-actions-share", this.Hi);
			this.Dl = new Es(b, a.videoId, a.listId, x(this.lw, this), 0, 0, n, a.feature)
		}
	};
	var Ls = {};

	function Ms(a, b, c) {
		if(a = K(a)) {
			b = se(b);
			var d = !b.args.jsapicallback,
				f = "player" + ja(a),
				g = Ls[f];
			g && g.destroy();
			g = new Ns(a, f, b, c);
			Ls[f] = g;
			R(function() {
				d && (s.onYouTubePlayerReady = function() {
					Os(f)
				});
				g.j || Ps(g).call(g);
				yr("player-added", f)
			}, 0);
			return g.b
		}
	}

	function Qs(a, b, c) {
		return Ms(a, b, {
			force: c
		})
	}

	function Rs(a) {
		if(a = K(a)) {
			a = "player" + ja(a);
			var b = Ls[a];
			b && b.ub();
			Ls[a] = m
		}
	}

	function Os(a) {
		a = Ls[a];
		if(!a.ea) {
			a.ea = l;
			var b = Bd(a.A),
				c = b.getApiInterface();
			B(c, function(a) {
				"addEventListener" == a ? this.b.nativeAddEventListener = x(b[a], b) : "destroy" == a ? this.b.a = x(b[a], b) : this.b[a] = x(b[a], b)
			}, a);
			for(var d in a.e) a.b.nativeAddEventListener(d, a.e[d]);
			a.D && a.gh("SHARE_CLICKED", x(a.D.mr, a.D));
			a.gh("onTabOrderChange", x(a.kr, a));
			a.gh("onNavigate", x(a.lr, a));
			a.R && a.R(a.Z)
		}
	}

	function Ns(a, b, c, d) {
		this.A = this.i = a;
		this.Z = b;
		this.b = {
			addEventListener: x(this.gh, this),
			destroy: x(this.destroy, this)
		};
		this.Ea = new we;
		Ta(this, this.Ea);
		this.e = {};
		this.D = m;
		this.ea = this.ha = n;
		this.R = this.I = this.da = this.k = this.a = m;
		this.F = "flash";
		Ss(this, c, d);
		G(this.i, "player-root");
		(a = this.a.attrs.width) && Ag(this.i, Number(a) || a);
		if(a = this.a.attrs.height) this.i.style.height = pg(Number(a) || a, l);
		kg(this.i, "overflow", "hidden");
		"embedded" != this.I && "profilepage" != this.I || (this.D = new Ks, this.a.assets.css_actions && !Sg("player-actions-loaded") && (a = this.a.assets.css_actions, b = "css-" + Sr(a), c = document.getElementById(b), c || (c = document.createElement("link"), c.id = b, c.rel = "stylesheet", c.href = a, document.getElementsByTagName("head")[0].appendChild(c))), a = vd("div", "player-container"), this.a.params.bgcolor && kg(a, "background-color", this.a.params.bgcolor), b = vd("div", "player-actions-container", vd("div", "player-actions-share"), vd("div", "player-actions-close", vd("div", "player-actions-close-button"))), xd(this.i, a, b), this.A = a, t("yt.tracking.shareVideo") || (qa("yt.tracking.shareVideo", rs), qa("yt.tracking.shareList", ss)), t("yt.window.popup") || qa("yt.window.popup", dr))
	}
	z(Ns, Sa);

	function Ss(a, b, c) {
		a.a = b.aa();
		a.da = a.a.attrs.id;
		a.I = a.a.args.el;
		a.k = c || m;
		if(!(b = a.a.args.eurl)) b = document.location.toString(), b = -1 != b.indexOf("/embed/") ? document.referrer && document.referrer.substring(0, 128) || "unknown" : b;
		a.a.args.eurl = b;
		a.a.args.enablejsapi = "1";
		a.a.args.playerapiid = a.Z;
		if(!ai() || !t("yt.player.Application") && !a.a.assets.js) a.a.args.html5_unavailable = "1", a.a.disable.html5 = l;
		a.a.fallback = x(a.tt, a);
		a.R || (a.R = a.a.args.jsapicallback ? Ts(a.a.args.jsapicallback) : t("onYouTubePlayerReady"));
		a.a.args.jsapicallback = "ytPlayerOnYouTubePlayerReady"
	}

	function Ps(a) {
		var b = !!a.a.disable.html5,
			c = !!a.a.disable.flash;
		return(a.a.html5 || c) && !b ? a.Xn : c ? a.uu : a.vu
	}
	q = Ns.prototype;
	q.tt = function(a) {
		a = se(a || this.a);
		var b = l;
		"flash" == this.F ? (Sf("html5_ajax", this.Vt), a.disable.flash = l, this.ha && (b = n)) : "html5" == this.F && (a.disable.flash ? b = n : (a.args.autoplay = 1, a.args.html5_unavailable = "1", a.disable.html5 = l));
		b && (this.ea = n, Ss(this, a), this.j || Ps(this).call(this))
	};
	q.Xn = function() {
		this.F = "html5";
		this.ha = l;
		var a = t("yt.player.Application");
		if(a) {
			this.k || yd(this.A);
			this.k = m;
			var b = this.a.aa();
			b.attrs.id = this.da + "-html5";
			new a(this.A, b)
		} else a = x(this.Xn, this), ps(this.a.assets.js, a)
	};
	q.vu = function() {
		this.F = "flash";
		var a = this.a.aa();
		a.attrs.width = a.attrs.width || "100%";
		a.attrs.height = a.attrs.height || "100%";
		if(this.k) is(a, !!this.k.force, x(this.Wn, this)), this.k = m;
		else {
			a.attrs.id = this.da + "-flash";
			var b = this.A,
				c = a,
				b = K(b),
				c = se(c);
			window != window.top && (a = m, document.referrer && (a = document.referrer.substring(0, 128)), c.args.framer = a);
			js(function(a) {
				es(a, c.minVersion) || Ef("IS_OPERA_MINI") ? (a = ks(c, a), hs(b, a, c)) : ls(b, c, a)
			})
		}
	};
	q.Wn = function() {
		if(!this.wa) {
			var a = K(this.a.attrs.id);
			try {
				a.getApiInterface();
				Os(this.Z);
				return
			} catch(b) {}
			R(x(this.Wn, this), 50)
		}
	};
	q.gh = function(a, b) {
		var c = Ts(b);
		if(c) {
			if(!this.e[a]) {
				var d = "ytPlayer" + a + this.Z,
					f = x(function(b) {
						this.Ea.g(a, b)
					}, this);
				this.e[a] = d;
				s[d] = f;
				this.b.nativeAddEventListener && this.b.nativeAddEventListener(a, d)
			}
			this.Ea.z(a, c)
		}
	};

	function Ts(a) {
		var b = a;
		"string" == typeof a && (b = function() {
			t(a).apply(s, arguments)
		});
		return !b ? m : b
	}
	q.kr = function(a) {
		a = a ? Dd : Cd;
		for(var b = a(document.activeElement); b && !(1 == b.nodeType && (b.focus(), b == document.activeElement));) b = a(b)
	};
	q.lr = function(a) {
		var b = Ef("EVENT_ID");
		b && Rr(a.url, {
			ei: b,
			feature: a.feature
		})
	};
	q.Vt = function() {
		Pf("/html5", {
			co: l,
			method: "POST",
			ne: {
				prefer_html5: l,
				session_token: Gf("html5_ajax")
			}
		})
	};
	q.uu = function() {
		var a = S("PLAYER_FALLBACK_OVERRIDE");
		if(!a) {
			var a = S("PLAYER_FALLBACK", h, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'),
				b = navigator.userAgent.match(/Version\/(\d).*Safari/);
			b && 5 <= parseInt(b[1], 10) && (a = S("QUICKTIME_FALLBACK", h, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'))
		}
		this.i.innerHTML = '<div class="fallback-message">' + a + "</div>";
		"embedded" == this.I && B(this.i.getElementsByTagName("a"), function(a) {
			a.setAttribute("target", "_blank")
		})
	};
	q.destroy = function() {
		Us(this.i)
	};
	q.G = function() {
		this.b.a && this.b.a();
		this.b = m;
		this.a = this.a.fallback = m;
		for(var a in this.e) delete s[this.e[a]];
		yd(this.A);
		Ns.C.G.call(this)
	};
	var Vs = t("yt.player.embed") || Ms;
	qa("yt.player.embed", Vs);
	var Ws = t("yt.player.update") || Qs;
	qa("yt.player.update", Ws);
	var Us = t("yt.player.destroy") || Rs;
	qa("yt.player.destroy", Us);
	t("ytPlayerOnYouTubePlayerReady") || qa("ytPlayerOnYouTubePlayerReady", Os);
	yk(Pk);
	yk(ts);
	yk(Ak);

	function Xs() {
		this.a = {}
	}
	z(Xs, zk);
	q = Xs.prototype;
	q.Gl = function() {
		return this.Dp && 0 == Eb.indexOf("6") ? n : l
	};
	q.hb = function(a) {
		var b = zk.prototype.hb.call(this, a);
		return !b ? a : b
	};
	q.V = function(a, b) {
		var c = Xs.C.V.call(this, a, "card-config");
		return c && (c = t(c)) && c[b] ? c[b] : Xs.C.V.call(this, a, b)
	};
	q.yg = function(a) {
		var b = this.hb(a);
		if(b) {
			G(b, Z(this, "active"));
			var c = Ys(this, a, b);
			if(c) {
				c.cardTargetNode = a;
				c.cardRootNode = b;
				Zs(this, a, c);
				var d = Z(this, "card-visible"),
					f = this.V(a, "card-delegate-show") && this.V(b, "card-action");
				this.we(b, "card-action", a);
				this.b = a;
				X(c);
				R(function() {
					f || W(c);
					G(c, d)
				}, 10)
			}
		}
	};

	function Ys(a, b, c) {
		var d = c || b,
			f = Z(a, "card"),
			g = f + Sd(d);
		c = K(g);
		var j = $s(a, d);
		if(c) return c;
		c = document.createElement("div");
		c.id = g;
		c.className = f;
		(d = a.V(d, "card-class")) && G(c, d);
		d = document.createElement("div");
		d.className = Z(a, "card-border");
		b = a.V(b, "orientation") || "horizontal";
		f = document.createElement("div");
		f.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
		g = document.createElement("div");
		g.className = Z(a, "card-body");
		a = document.createElement("div");
		a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
		zd(j);
		g.appendChild(j);
		d.appendChild(a);
		d.appendChild(g);
		c.appendChild(f);
		c.appendChild(d);
		document.body.appendChild(c);
		return c
	}

	function Zs(a, b, c) {
		var d = a.V(b, "orientation") || "horizontal",
			f = a.V(b, "position"),
			g = !!a.V(b, "force-position"),
			d = "horizontal" == d,
			j = "bottomright" == f || "bottomleft" == f,
			k = "topright" == f || "bottomright" == f,
			p, r;
		k && j ? (r = 7, p = 4) : k && !j ? (r = 6, p = 5) : !k && j ? (r = 5, p = 6) : (r = 4, p = 7);
		var u = vg(document.body),
			f = vg(b);
		u != f && (r ^= 2);
		var w;
		d ? (f = b.offsetHeight / 2 - 12, w = new D(-12, b.offsetHeight + 6)) : (f = b.offsetWidth / 2 - 6, w = new D(b.offsetWidth + 6, -12));
		var A = Bg(c),
			f = Math.min(f, (d ? A.height : A.width) - 24 - 6);
		6 > f && (f = 6, d ? w.y += 12 - b.offsetHeight / 2 : w.x += 12 - b.offsetWidth / 2);
		var E = m;
		g || (E = 10);
		A = Z(a, "card-flip");
		a = Z(a, "card-reverse");
		J(c, A, k);
		J(c, a, j);
		E = mk(b, r, c, p, w, m, E);
		!g && E && (E & 48 && (k = !k, r ^= 2, p ^= 2), E & 192 && (j = !j, r ^= 1, p ^= 1), J(c, A, k), J(c, a, j), mk(b, r, c, p, w));
		b = L("yt-uix-card-body-arrow", c);
		g = L("yt-uix-card-border-arrow", c);
		d = d ? j ? "top" : "bottom" : !u && k || u && !k ? "left" : "right";
		b.setAttribute("style", "");
		g.setAttribute("style", "");
		b.style[d] = f + "px";
		g.style[d] = f + "px";
		j = L("yt-uix-card-arrow", c);
		b = L("yt-uix-card-arrow-background", c);
		j && b && (c = "right" == d ? Bg(c).width - f - 13 : f + 11, f = c / Math.sqrt(2), kg(j, "left", c + "px"), kg(j, "margin-left", "1px"), kg(b, "margin-left", -f + "px"), kg(b, "margin-top", f + "px"))
	}
	q.$ = function(a) {
		var b = this.hb(a);
		if(b && (a = Ys(this, a, b))) H(b, Z(this, "active")), H(a, Z(this, "card-visible")), X(a), this.b = m, a.cardTargetNode = m, a.cardRootNode = m
	};

	function $s(a, b) {
		var c = b.cardContentNode;
		if(!c) {
			var d = Z(a, "content"),
				f = Z(a, "card-content");
			(c = L(d, b)) || (c = document.createElement("div"));
			id(c, d, f);
			b.cardContentNode = c
		}
		return c
	}
	q.ap = {
		Wv: 200,
		aw: 200
	};

	function at() {
		this.a = {}
	}
	z(at, Xs);
	ba(at);
	q = at.prototype;
	q.Rc = "clickcard";
	q.register = function() {
		$(this, "click", this.Jw, "target");
		$(this, "click", this.Iw, "close")
	};
	q.Jw = function(a) {
		var b = this.V(a, "card-target");
		a = b ? K(b) : a;
		b = this.hb(a);
		I(b, Z(this, "active")) ? (this.$(a), H(b, Z(this, "active"))) : (this.yg(a), G(b, Z(this, "active")))
	};
	q.yg = function(a) {
		bt(this);
		at.C.yg.call(this, a);
		var b = this.hb(a);
		M(b, "click-outside-persists") || (this.j = a, this.i = N(document, "click", x(this.zv, this)))
	};
	q.$ = function(a) {
		at.C.$.call(this, a);
		this.i && je(this.i)
	};
	q.zv = function(a) {
		Ld(a.target, "yt-uix" + (this.Rc ? "-" + this.Rc : "") + "-card") || bt(this)
	};

	function bt(a) {
		a.j && (a.$(a.j), a.j = m)
	}
	q.Iw = function(a) {
		(a = Ld(a, Z(this, "card"))) && this.$(a.cardTargetNode)
	};

	function ct() {
		this.a = {}
	}
	z(ct, Xs);
	ba(ct);
	q = ct.prototype;
	q.Rc = "hovercard";
	q.register = function() {
		$(this, "mouseenter", this.Aw, "target");
		$(this, "mouseleave", this.Cw, "target");
		$(this, "mouseenter", this.Bw, "card");
		$(this, "mouseleave", this.Dw, "card")
	};
	q.Aw = function(a) {
		if(dt != a) {
			dt && (this.$(dt), dt = m);
			var b = x(this.yg, this, a),
				c = parseInt(this.V(a, "delay-show"), 10),
				b = R(b, -1 < c ? c : this.ap.Wv);
			Od(a, "card-timer", b.toString());
			dt = a;
			a.alt && (Od(a, "card-alt", a.alt), a.alt = "");
			a.title && (Od(a, "card-title", a.title), a.title = "")
		}
	};
	q.Cw = function(a) {
		var b = parseInt(this.V(a, "card-timer"), 10);
		If(b);
		this.hb(a).isCardHidable = l;
		b = parseInt(this.V(a, "delay-hide"), 10);
		b = -1 < b ? b : this.ap.aw;
		R(x(this.bw, this, a), b);
		if(b = this.V(a, "card-alt")) a.alt = b;
		if(b = this.V(a, "card-title")) a.title = b
	};
	q.bw = function(a) {
		this.hb(a).isCardHidable && (this.$(a), dt = m)
	};
	q.Bw = function(a) {
		a && (a.cardRootNode.isCardHidable = n)
	};
	q.Dw = function(a) {
		a && this.$(a.cardTargetNode)
	};
	var dt = m;

	function et(a, b) {
		this.a = a;
		this.Ea = new we;
		he(this.a, x(this.i, this), "yt-dialog-dismiss");
		var c = L("yt-dialog-fg-content", this.a),
			d = [];
		Wa(ft, function(a) {
			d.push("yt-dialog-show-" + a)
		});
		id(c, d, "yt-dialog-show-content");
		this.b = b
	}
	var ft = {
		LOADING: "loading",
		Uy: "content",
		$D: "working"
	};
	et.prototype.i = function(a) {
		a = a.currentTarget;
		a.disabled || (a = M(a, "action") || "", gt(this, a))
	};

	function gt(a, b) {
		function c(a) {
			H(a, "off-screen")
		}
		a.Ea.g("pre-all");
		a.Ea.g("pre-" + b);
		X(a.a);
		var d = at.getInstance();
		d.b && d.$(d.b);
		d = ct.getInstance();
		d.b && d.$(d.b);
		X(a.e);
		d = document.getElementsByTagName("object");
		B(document.getElementsByTagName("embed"), c);
		B(d, c);
		a.b || ie(document, "keydown", x(a.j, a));
		var d = a.a,
			f = M(d, "player-ready-pubsub-key");
		f && (xr(f), Qd(d, "player-ready-pubsub-key"));
		a.Ea.g("post-all");
		a.Ea.g("post-" + b)
	}
	et.prototype.j = function(a) {
		27 == a.keyCode && gt(this, "cancel")
	};
	qa("yt.ui.Dialog", et);

	function ht(a) {
		zj.call(this, a)
	}
	z(ht, zj);

	function it(a) {
		this.data = a
	}

	function jt(a) {
		return !da(a) || a instanceof it ? a : new it(a)
	}
	ht.prototype.set = function(a, b) {
		ht.C.set.call(this, a, jt(b))
	};
	ht.prototype.a = function(a) {
		a = ht.C.get.call(this, a);
		if(!da(a) || a instanceof Object) return a;
		e("Storage: Invalid value was encountered")
	};
	ht.prototype.get = function(a) {
		(a = this.a(a)) ? (a = a.data, da(a) || e("Storage: Invalid value was encountered")) : a = h;
		return a
	};

	function kt(a) {
		zj.call(this, a)
	}
	z(kt, ht);
	kt.prototype.set = function(a, b, c) {
		if(b = jt(b)) {
			if(c) {
				if(c < y()) {
					kt.prototype.Ff.call(this, a);
					return
				}
				b.expiration = c
			}
			b.creation = y()
		}
		kt.C.set.call(this, a, b)
	};
	kt.prototype.a = function(a, b) {
		var c = kt.C.a.call(this, a);
		if(c) {
			var d;
			if(d = !b) {
				d = c.creation;
				var f = c.expiration;
				d = !!f && f < y() || !!d && d > y()
			}
			if(d) kt.prototype.Ff.call(this, a);
			else return c
		}
	};

	function lt(a) {
		zj.call(this, a)
	}
	z(lt, kt);
	var mt = new lt(new wj);
	vj(mt.Ae) || (mt = m);
	var nt = new lt(new xj);
	vj(nt.Ae) || (nt = m);
	var ot = t("yt.timing.data_") || {};
	qa("yt.timing.data_", ot);

	function pt(a, b) {
		var c = ot.timer || {};
		c[a] = b ? b : y();
		ot.timer = c
	}

	function qt(a, b) {
		var c = ot.info_args || {};
		c[a] = b;
		ot.info_args = c
	};
	qa("yt.pubsub.publish", yr);

	function rt(a) {
		var b = {
			channel: "c",
			all: "a"
		};
		return b[a] || b.channel
	};

	function st(a, b, c) {
		this.oe = a;
		this.i = b;
		this.nd = !!c;
		this.b = n;
		this.a = [];
		this.j = []
	}
	q = st.prototype;
	q.init = function() {
		var a = Ld(this.oe, "yt-subscription-button-hovercard"),
			b = x(this.ru, this),
			c = x(this.su, this),
			b = N(a, "mouseenter", b);
		this.a.push(b);
		b = N(a, "mouseleave", c);
		this.a.push(b)
	};
	q.destroy = function() {
		je(this.a);
		this.a = [];
		B(this.j, function(a) {
			If(a)
		})
	};
	q.$ = function() {
		ct.getInstance().$(this.oe)
	};
	q.ru = function() {
		this.b = l;
		if(this.nd) {
			var a = x(this.yo, this),
				a = R(a, 500);
			this.j.push(a)
		}
	};
	q.su = function() {
		this.b = n
	};
	q.yo = function() {
		var a = ct.getInstance(),
			b;
		if(b = !this.Io) b = a.hb(this.oe), b = !b ? n : I(b, Z(a, "active"));
		b && (this.Io = l, b = {
			session_token: Gf("subscription_ajax")
		}, b[rt()] = this.i, Pf("/subscription_ajax", {
			method: "POST",
			eb: {
				hovercard: 1,
				action_get_subscription_form_for_channel: 1
			},
			ne: b,
			Ra: this,
			na: function(b, d) {
				var f = this.oe,
					g = d.response.html_content,
					j = a.hb(f);
				if(j) {
					var k = $s(a, j);
					k && (k.innerHTML = g, I(j, Z(a, "active")) && (g = Ys(a, f, j), Zs(a, f, g), W(g)))
				}
				this.uk()
			},
			onError: function() {
				this.Io = n
			}
		}))
	};
	q.uk = function() {
		var a = ct.getInstance(),
			b = a.hb(this.oe),
			c = $s(a, b);
		B(c.getElementsByTagName("input"), function(a) {
			var b = x(function() {
				var a = c.getElementsByTagName("form")[0],
					b = {};
				b.method = a.method.toUpperCase();
				if("POST" == b.method) b.Pj = af(a);
				else {
					var d = new oc;
					bf(a, d, ef);
					pc(d);
					for(var f = {}, r = 0; r < d.a.length; r++) {
						var u = d.a[r];
						f[u] = d.b[u]
					}
					d = b.eb || {};
					db(d, f);
					b.eb = d
				}
				Pf(a.action, b)
			}, this);
			a = N(a, "change", b);
			this.a.push(a)
		}, this)
	};

	function tt(a) {
		this.ma = a;
		this.type = M(a, "subscription-type") || "channel";
		this.Ze = M(a, "subscription-value") || "";
		this.jb = M(a, "enable-hovercard") ? new st(this.ma, this.Ze) : m;
		this.mg = n;
		this.b = [];
		this.a = [];
		this.Uh = M(this.ma, "sessionlink") || "";
		this.uk()
	}
	var ut = [];
	q = tt.prototype;
	q.getId = function() {
		return M(this.ma, "subscription-id") || m
	};

	function vt(a, b) {
		b ? Od(a.ma, "subscription-id", b) : Qd(a.ma, "subscription-id");
		wt(a)
	}
	q.getType = function() {
		return this.type
	};

	function wt(a) {
		var b = a.ma;
		(b.dataset ? Pd("subscription-button-type") in b.dataset : b.hasAttribute ? b.hasAttribute("data-subscription-button-type") : b.getAttribute("data-subscription-button-type")) ? (b = "-" + M(a.ma, "subscription-button-type"), J(a.ma, "yt-uix-button-subscribed" + b, !!a.getId()), J(a.ma, "yt-uix-button-subscribe" + b, !a.getId())) : J(a.ma, "subscribed", !!a.getId());
		if(a.getId()) {
			var c = Ld(a.ma, "yt-uix-button-subscription-container"),
				d = x(function() {
					G(this.ma, "hover-enabled")
				}, a),
				f;
			f = N(c, "mouseleave", function() {
				je(f);
				d.apply(c, arguments)
			}, h)
		} else H(a.ma, "hover-enabled");
		if(a.jb) {
			var b = a.jb,
				g = !!a.getId(),
				j = Z(ct.getInstance(), "target");
			J(b.oe, j, g);
			b = a.jb;
			a = !!a.getId();
			(b.nd = a) || b.$()
		}
	}
	q.uk = function() {
		this.b.push(N(this.ma, "click", x(this.Ss, this)));
		this.a.push(wr("SUBSCRIBE", this.Qs, this));
		this.a.push(wr("UNSUBSCRIBE", this.Rs, this));
		this.jb && this.jb.init();
		ut.push(this);
		wt(this)
	};
	q.destroy = function() {
		je(this.b);
		this.b = [];
		xr(this.a);
		this.a = [];
		this.jb && this.jb.destroy();
		Qd(this.ma, "subscription-initialized")
	};

	function xt(a, b, c, d) {
		c != a.getId() && a.Ze == b && vt(a, c);
		d == a && a.jb && a.jb.$()
	}
	q.Ss = function(a) {
		if(this.mg) return n;
		a.preventDefault();
		this.getId() ? this.ia() : this.z()
	};

	function zt(a) {
		"BUTTON" == a.ma.tagName && G(a.ma.parentNode, "yt-subscription-button-disabled-mask-container");
		a.ma.disabled = l
	}
	q.enable = function() {
		H(this.ma.parentNode, "yt-subscription-button-disabled-mask-container");
		this.ma.disabled = n
	};
	q.z = function() {
		var a = this.getType(),
			b = this.Ze,
			c = M(this.ma, "subscription-feature");
		this.mg = l;
		zt(this);
		if(Gf("subscription_ajax")) {
			var d = a,
				f = this,
				d = d || "channel",
				a = {},
				g = {
					channel: "channel",
					all: "all"
				};
			a["action_create_subscription_to_" + (g[d] || g.channel)] = 1;
			c && (a.feature = c);
			a[rt(d)] = b;
			f && f.Uh && (c = uf("/subscription_ajax", a), g = qf(f.Uh), Rr(c, g));
			c = {};
			c.session_token = Gf("subscription_ajax");
			(g = Ef("PLAYBACK_ID")) && (c.plid = g);
			Pf("/subscription_ajax", {
				method: "POST",
				eb: a,
				ne: c,
				na: function(a, c) {
					var f = d,
						g = c || {},
						j;
					j = Ea(ut, function(a) {
						return a.type == f && a.Ze == b
					});
					B(j, function(a) {
						yr("SUBSCRIBE", b, g, a)
					});
					g.response.show_feed_privacy_dialog && yr("SHOW-SUBSCRIBE-DIALOG", b)
				},
				Oc: function() {
					f && (f.mg = n, f.enable())
				}
			});
			Kr("subscribe")
		} else if(!this.ma.getAttribute("href")) {
			var j = x(this.Uv, this),
				a = Lc("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login"),
				a = Lc(a, "feature", "sub_button");
			if(a = window.open(a, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", l)) c = wr("LOGGED_IN", function(a) {
				var b = Ef("LOGGED_IN_PUBSUB_KEY", b);
				xr(b);
				j(a)
			}), Cf("LOGGED_IN_PUBSUB_KEY", c), a.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
		}
	};
	q.Uv = function(a) {
		Ff("subscription_ajax", a.subscription_ajax);
		this.z()
	};
	q.ia = function() {
		var a = {
				s: this.getId(),
				session_token: Gf("subscription_ajax")
			},
			b = {
				action_remove_subscriptions: 1
			},
			c = M(this.ma, "subscription-feature");
		c && (b.feature = c);
		(c = Ef("PLAYBACK_ID")) && (a.plid = c);
		this.mg = l;
		zt(this);
		if(this.Uh) {
			var c = uf("/subscription_ajax", b),
				d = qf(this.Uh);
			Rr(c, d)
		}
		Pf("/subscription_ajax", {
			method: "POST",
			Ra: this,
			eb: b,
			ne: a,
			na: function(a, b) {
				vt(this, m);
				if(this.jb) {
					var c = this.jb;
					c.nd = n;
					c.$()
				}
				yr("UNSUBSCRIBE", this.Ze, b, this)
			},
			Oc: function() {
				this.mg = n;
				this.enable()
			}
		});
		Kr("unsubscribe")
	};
	q.Qs = function(a, b, c) {
		b = b.response.id;
		xt(this, a, b, c);
		a == this.Ze && (vt(this, b), this.jb && (a = this.jb, a.b && (ct.getInstance().yg(a.oe), a.yo())))
	};
	q.Rs = function(a, b) {
		xt(this, a, b.response.id, this)
	};

	function At(a, b) {
		P.call(this);
		this.a = a;
		this.u = b;
		this.b = new gk(this)
	}
	z(At, P);
	q = At.prototype;
	q.B = m;
	q.Ah = m;
	q.ek = m;
	q.ig = m;
	q.ao = n;
	q.Uo = n;
	q.Cj = function() {
		this.Ah = L("html5-title", this.a);
		this.b.K(this.Ah, "click", x(this.Ln, this));
		this.ek = L("html5-more-info-button", this.a);
		this.b.K(this.ek, "click", x(this.yk, this))
	};
	q.reset = function() {};
	q.update = function(a) {
		this.B = a;
		this.reset();
		Ed(this.Ah, a.title || "");
		W(this.a)
	};
	q.Ln = function() {
		this.tl(this.B.tc || this.u.getVideoUrl(this.B))
	};
	q.yk = function() {
		if(!this.ao) {
			this.ao = l;
			Pf("/get_video_metadata", {
				method: "GET",
				onError: this.cu,
				na: this.du,
				eb: {
					video_id: this.B ? this.B.J : h,
					html5: 1
				},
				Ra: this
			});
			if(!this.ig) {
				var a = L("html5-info-panel-loader", this.a);
				this.ig = new Fr(a);
				Ta(this, this.ig)
			}
			Gr(this.ig)
		}
		return jd(this.a, "show-more-info")
	};
	q.du = function(a, b) {
		if(!this.j) {
			var c = L("html5-info-panel", this.a),
				d = b.user_info;
			this.B && (this.B.ea = d.external_id);
			var f = L("html5-author-img", c).getElementsByTagName("img")[0];
			f.src = d.image_url;
			this.b.K(f, "click", x(this.yn, this));
			f = L("html5-author-name", c);
			Ed(f, d.username);
			this.b.K(f, "click", x(this.yn, this));
			L("html5-subscriber-count", c).innerHTML = d.subscriber_count_string;
			d = b.video_info;
			f = L("html5-subscribe-button", c);
			d.subscription_ajax_token && (Od(f, "subscription-value", this.B.ea), Ff("subscription_ajax", d.subscription_ajax_token));
			f = qd("yt-subscription-button-js-default", c);
			B(f, function(a) {
				M(a, "subscription-initialized") || (new tt(a), Od(a, "subscription-initialized", "true"))
			});
			L("html5-view-count", c).innerHTML = d.view_count_string;
			var f = parseInt(d.likes_count_unformatted, 10),
				g = parseInt(d.dislikes_count_unformatted, 10),
				j = 0,
				k = 0;
			0 < f + g && (j = 100 * (f / (f + g)), k = 100 * (g / (f + g)));
			L("video-extras-sparkbar-likes", c).style.width = j + "%";
			L("video-extras-sparkbar-dislikes", c).style.width = k + "%";
			f = L("video-extras-likes-dislikes", c);
			Ed(f, d.likes_dislikes_string);
			f = L("html5-description-text", c);
			Ed(f, d.description);
			Hr(this.ig);
			c = L("html5-info-panel-content", c);
			W(c)
		}
	};
	q.cu = function() {};
	q.yn = function() {
		var a = this.u,
			b = this.B,
			c = "",
			c = b.ea ? a.Xa + "channel/UC" + b.ea : a.Xa + "user/" + b.author;
		this.tl(c)
	};
	q.tl = function(a) {
		br(a)
	};
	q.G = function() {
		jk(this.b);
		this.B = this.ek = this.Ah = this.u = this.a = m;
		At.C.G.call(this)
	};

	function Bt(a, b) {
		At.call(this, a, b.getEnvironmentData());
		this.O = b
	}
	z(Bt, At);
	q = Bt.prototype;
	q.Gh = m;
	q.Fh = m;
	q.Hh = m;
	q.Cj = function() {
		Bt.C.Cj.call(this);
		this.Gh = L("html5-like-button", this.a);
		this.b.K(this.Gh, "click", x(this.as, this));
		this.Fh = L("html5-dislike-button", this.a);
		this.b.K(this.Fh, "click", x(this.$r, this));
		this.Hh = L("html5-share-button", this.a);
		this.b.K(this.Hh, "click", x(this.bs, this));
		W(this.Hh);
		this.O.z("statechange", this.pn, this)
	};
	q.reset = function() {
		Bt.C.reset.call(this);
		Gk(this.Fh);
		Gk(this.Gh)
	};
	q.update = function(a) {
		Bt.C.update.call(this, a);
		"watch_actions_ajax" in yf && (a = L("html5-like-dislike-buttons", this.a), W(a))
	};
	q.bs = function() {
		this.O.pauseVideo();
		this.g("share-click")
	};
	q.as = function() {
		Ct(this, l)
	};
	q.$r = function() {
		Ct(this, n)
	};
	q.Ln = function(a) {
		this.g("title-click", a)
	};
	q.yk = function(a) {
		if(a = Bt.C.yk.call(this, a)) {
			var b = this.O.getPlayerState();
			this.Uo = O(b, 8) && !O(b, 2);
			this.O.pauseVideo()
		} else this.Uo && this.O.playVideo();
		return a
	};
	q.pn = function(a) {
		O(a.a, 8) && H(this.a, "show-more-info")
	};

	function Ct(a, b) {
		if(!I(a.a, "html5-async-progress")) {
			J(a.a, "sentiment-like", b);
			J(a.a, "sentiment-dislike", !b);
			var c = a.B ? a.B.J : h;
			if(c) {
				var d = a.B;
				Gk(a.a, "html5-async-progress");
				var f = {
						Na: d.Na,
						na: x(a.lt, a),
						onError: x(a.kt, a)
					},
					f = f || {};
				Sf("watch_actions_ajax", x(Lr, s, c, b ? 0 : 1, f), f.onError);
				Ef("CONVERSION_CONFIG_DICT") || Jr(b ? "like" : "dislike", d.rb);
				a.O.g("RATE_SENTIMENT", b ? 0 : 1)
			}
		}
	}
	q.lt = function() {
		Gk(this.a, "html5-async-success")
	};
	q.kt = function() {
		Gk(this.a)
	};
	q.tl = function(a) {
		Dt(this.O, a)
	};
	q.G = function() {
		this.O.ia("statechange", this.pn, this);
		this.Hh = this.Fh = this.Gh = this.O = m;
		Bt.C.G.call(this)
	};
	C || rb && Gb("1.9.3");
	new we;

	function Et(a) {
		var b = a.getEnvironmentData();
		gl.call(this, b);
		this.a = a
	}
	z(Et, gl);
	q = Et.prototype;
	q.Dj = function(a) {
		Et.C.Dj.call(this, a);
		this.a.z("controlsdisabled", this.ut, this);
		this.a.z("controlsenabled", this.vt, this);
		this.a.z("cuerangesadded", this.wt, this);
		this.a.z("cuerangesremoved", this.xt, this);
		this.a.z("fullscreentoggled", this.zt, this);
		this.a.z("resize", this.Bt, this);
		this.a.z("seekto", this.Ct, this);
		this.a.z("statechange", this.Tt, this);
		this.a.z("threedenabled", this.Dt, this);
		this.a.z("videodatachange", this.Ut, this);
		this.a.z("videoready", this.Et, this);
		this.a.z("onPlaybackQualityChange", this.At, this);
		this.a.z("onVolumeChange", this.Gt, this);
		this.a.z("progresssync", this.Ft, this);
		this.z("beginseeking", this.Ht, this);
		this.z("endseeking", this.It, this);
		this.z("fullscreentoggled", this.Jt, this);
		this.z("mutetoggled", this.Kt, this);
		this.z("playpausetoggled", this.Lt, this);
		this.z("qualitychanged", this.Mt, this);
		this.z("seekto", this.Nt, this);
		this.z("sizechangerequested", this.Ot, this);
		this.z("speedchanged", this.Pt, this);
		this.z("volumechanged", this.Qt, this);
		this.z("watchlater", this.St, this);
		this.z("watchonyoutube", this.Rt, this)
	};
	q.ut = function(a) {
		il(this, a, l); - 1 < a.indexOf("seek") && (this.I = l)
	};
	q.vt = function(a) {
		this.enable(a)
	};
	q.wt = function(a) {
		var b = this.a.getVideoData().ya;
		0 < b && a.forEach(function(a) {
			a.visible && this.Ab(a.start / (1E3 * b))
		}, this)
	};
	q.xt = function(a) {
		var b = this.a.getVideoData().ya;
		0 < b && a.forEach(function(a) {
			a.visible && this.lg(a.start / (1E3 * b))
		}, this)
	};
	q.zt = function(a) {
		jl(this.Af, a ? "title-alt" : "title-default")
	};
	q.Bt = function(a) {
		var b = this.ed;
		b.jc && (b.Xd = a.width, bl(b, l))
	};
	q.Ct = function(a) {
		this.Re || ml(this, a);
		var b = this.ed;
		if(b.jc) {
			b.Xj = b.Dk * a - b.Xd / 2;
			og(b.wb, -1 * b.Xj);
			var c = hg(b.jc, a);
			al(b, c);
			Ed(b.qj, Hk(b.qn * a));
			a = b.a;
			!a.a ? Yk(a) : a.b = l
		}
	};
	q.Tt = function(a) {
		0 < Si(a, 8) ? ol(this, l) : 0 > Si(a, 8) ? ol(this, n) : 0 > Si(a, 2) && ol(this, O(a.a, 8));
		if(0 > Si(a, 16)) {
			var b = this.a.getCurrentTime();
			this.fd.a.innerHTML = Hk(b);
			this.fj.innerHTML = parseInt(100 * this.ji, 10) + "% at " + parseInt(b, 10) + " of " + parseInt(this.e, 10) + " seconds"
		}
		O(a.a, 2) && (id(this.Lb, hl, "html5-replay-button"), jl(this.Lb, "title-replay"))
	};
	q.Dt = function() {
		var a = this.a.getVideoData().ef,
			b = L("html5-threed-conversion-on", this.Og),
			c = L("html5-threed-conversion-off", this.Og);
		ok(b, !a);
		ok(c, a)
	};
	q.Ut = function(a, b) {
		if("newdata" == a) {
			var c = b.xa || 0;
			this.fd.a.innerHTML = Hk(c);
			ml(this, c / b.ya);
			nl(this, 0);
			this.gc.reset();
			Gk(this.Zc);
			ll(this.Fe, "1.0");
			this.af = b.Xg;
			kl(this);
			this.$e = b.sj;
			kl(this)
		}
		this.e = c = b.ya;
		kl(this);
		this.fd.e.innerHTML = Hk(c);
		this.gc.In = c;
		this.ed.qn = c;
		this.af = b.Xg;
		kl(this);
		this.$e = b.sj;
		kl(this);
		var d = b.md,
			c = qd("yt-uix-button-menu-item", this.Ge);
		B(c, function(a) {
			a.style.display = "none";
			for(var b = 0, c = d.length; b < c; b++) M(a, "value") == d[b].Wd && (a.style.display = "list-item")
		}, this);
		this.Pk = !!d.length;
		ok(this.Ge, this.Pk);
		ok(this.xf, this.Pk);
		this.Yn = b.ac && !b.Ta
	};
	q.Et = function(a) {
		var b = this.gc;
		if(!b.Vg)
			if(Fi(a)) {
				G(b.Ib, "with-thumbnail");
				b.Rf = Fi(a);
				b.jg = Gi(a);
				var c = x(b.Eu, b);
				b.jg.z("l", c)
			} else b.reset();
		b = this.ed;
		b.Df && yd(b.wb);
		H(b.Dc, "enabled");
		b.jc = Fi(a);
		b.de = Gi(a);
		if(b.jc && !b.lm) {
			G(b.Dc, "enabled");
			a = x(b.vo, b);
			b.de.z("l", a);
			bl(b);
			a = b.wb.cloneNode(l);
			for(var c = b.jc.getLevel(0).b, d, f, g = 0; g < c; g++) f = b.Df.cloneNode(n), d = qi(b.de, g, b.fb), Zk(f, d, b.fb, b.vi), a.appendChild(f);
			Ad(a, b.wb);
			b.wb = a
		}
	};
	q.At = function(a) {
		ll(this.Ge, a)
	};
	q.Gt = function(a) {
		this.setVolume(a.volume, a.muted)
	};
	q.Ft = function(a, b, c) {
		this.fd.a.innerHTML = Hk(a);
		this.Re || ml(this, b);
		nl(this, c)
	};
	q.Ht = function() {
		Ft(this.a.L)
	};
	q.It = function() {
		this.a.L.ih()
	};
	q.Jt = function() {
		Er(this.a, !this.a.getEnvironmentData().fc)
	};
	q.Kt = function() {
		this.a.isMuted() ? this.a.unMute() : this.a.mute()
	};
	q.Lt = function() {
		Gt(this.a)
	};
	q.Mt = function(a) {
		this.a.setPlaybackQuality(a)
	};
	q.Nt = function(a, b) {
		this.a.dg(a, b)
	};
	q.Ot = function(a) {
		var b = this.a;
		Er(b, n);
		a != b.u.De && (b.u.De = a, b.g("SIZE_CLICKED", a), b.P.Cf())
	};
	q.Pt = function(a) {
		this.a.setPlaybackRate(a)
	};
	q.Qt = function(a) {
		Ht(this.a, a)
	};
	q.Rt = function() {
		Dt(this.a, this.a.ck())
	};
	q.St = function() {
		Sf("addto_ajax", x(this.Hw, this), x(this.eo, this))
	};
	q.Hw = function() {
		var a = {
				ju: this.a.getVideoData().J,
				gu: "WL",
				fo: m,
				na: this.hu,
				onError: this.eo,
				Ra: this
			},
			b = {
				video_ids: a.ju,
				playlist_id: a.nb || "",
				new_playlist_name: a.iu || "",
				session_token: Gf("addto_ajax")
			},
			c = Ef("PLAYBACK_ID");
		c && (b.plid = c);
		c = {};
		a.fu && (c["private"] = a.fu);
		a.fo && (c.feature = a.fo);
		var d = "";
		switch(a.gu) {
			case "PL":
				d = a.iu ? "action_add_to_new_playlist" : "action_add_to_playlist";
				break;
			case "FL":
				d = "action_add_to_favorites";
				break;
			case "WL":
				d = "action_add_to_watch_later_list"
		}
		c[d] = 1;
		Pf("/addto_ajax", {
			co: l,
			format: "XML",
			method: "POST",
			eb: c,
			ne: b,
			Ra: a.Ra,
			onError: a.onError,
			na: a.na
		})
	};
	q.hu = function() {
		Gk(this.Zc, "html5-async-success");
		yr("player-watchlater")
	};
	q.eo = function(a, b) {
		var c = this.Zc,
			d = b && b.error_message;
		Gk(c, "html5-async-error");
		if(d) {
			var f = Ak.getInstance(),
				g = f.zd(c);
			Dk(f, c, d);
			Bk(f, c);
			Od(c, "tooltip-text", g)
		}
	};
	var Jt = {
		"0": "autohide-off",
		1: "autohide-on",
		2: "autohide-fade",
		3: "autohide-auto",
		4: "autohide-embeds",
		5: "autohide-seekbar"
	};

	function Kt(a) {
		pr.call(this, a);
		this.A = this.Z = this.jd = this.Da = this.R = this.b = this.Ca = this.Ba = this.da = m;
		this.Qa = this.Ma = n
	}
	z(Kt, pr);
	q = Kt.prototype;
	q.fk = function() {
		Kt.C.fk.call(this);
		this.a.z("appstatechange", this.Yt, this);
		this.a.z("initializingmode", this.Zt, this);
		this.a.z("statechange", this.bu, this);
		this.a.z("onDetailedError", this.au, this)
	};
	q.pj = function(a) {
		Kt.C.pj.call(this, a);
		if((a = this.a.ob.assets.css) && !Sg("html5-player-css-loaded")) {
			a = {
				rel: "stylesheet",
				type: "text/css",
				href: a
			};
			var b = document.getElementById("www-player-css");
			a.id = "www-player-css";
			var c = b || document.createElement("link");
			sd(c, a);
			b || document.getElementsByTagName("head")[0].appendChild(c);
			Lt(this, 50)
		} else this.Ma = l, this.ff()
	};
	q.Sk = function() {
		!Kt.C.Sk.call(this) ? Pf(this.a.ob.assets.html, {
			format: "RAW",
			method: "GET",
			na: x(this.eu, this)
		}) : this.Qa = l;
		return l
	};
	q.ff = function() {
		this.Qa && this.Ma && Kt.C.ff.call(this)
	};
	q.eu = function(a) {
		if(a.responseText) {
			var b = document.createElement("div");
			b.innerHTML = a.responseText;
			rr(this, L("html5-video-player", b));
			this.Qa = l;
			this.ff()
		} else this.g("templateerror")
	};

	function Lt(a, b) {
		0 >= b || Sg("html5-player-css-loaded") ? (a.Ma = l, a.ff()) : R(x(function() {
			Lt(this, b - 1)
		}, a), 200)
	}
	q.Zi = function() {
		Kt.C.Zi.call(this);
		var a = this.a.getEnvironmentData(),
			b = this.U;
		a.Va || this.Ka("hh-player");
		a.I && this.Ka(a.I + "-theme");
		a.$g && this.Ka("house-brand");
		(a.Ce || !a.Nd) && this.Ka("modest-branding");
		a.Si && this.Ka("html5-hide-share");
		a.jm || this.Ka("html5-hide-volume");
		a.Va && (this.Ka("html5-tablet"), G(document.body, "html5-tablet-body"));
		a.qb || this.Ka("hide-info-bar");
		!a.Va && !a.Za && this.Ka(Jt[a.Jg]);
		var c = xc(new F(this.U.clientWidth, this.U.clientHeight)).toFixed(1);
		("1.3" == c || "1.8" == c) && this.Ka("autohide-aspect");
		a.Fb && this.Cf();
		this.da = L("html5-video-fallback", b);
		this.Ba = L("html5-video-fallback-content", this.da);
		this.b = L("html5-watermark", b);
		!a.Za && a.Nd && (this.jd = new Et(this.a), this.jd.Dj(this.wa), Ta(this, this.jd));
		var c = L("html5-context-menu", b),
			d = L("html5-modal-panel", b),
			f = this.Z = new Br(this.a);
		f.ab = c;
		zd(f.ab);
		document.body.appendChild(f.ab);
		var g = f.a;
		g.Yd = d;
		g.Bj = L("html5-modal-panel-close-button", d);
		g.Aj = L("html5-modal-panel-clipboard-substitute-content", d);
		g.Le = Wd("input", g.Aj);
		g.wj = L("html5-modal-panel-infobox-content", d);
		var j = L("html5-show-video-info-template", d);
		g.a = ln(j, "videoId videoWidth videoHeight volume streamType decodedFrames droppedFrames parsedFrames presentedFrames videoBytesDecoded audioBytesDecoded paintedFrames paintDelay".split(" "));
		g.$a.K(document, "keydown", x(g.rq, g));
		g.$a.K(g.Bj, "click", x(g.pq, g));
		g.$a.K(d, "contextmenu", x(g.qq, g));
		g.$a.K(g.Le, "click", x(g.rm, g));
		var d = {
				hq: f.tq,
				iq: f.uq,
				jq: x(f.sm, f, n),
				kq: x(f.sm, f, l),
				lq: f.xq,
				mq: f.yq,
				nq: f.zq,
				oq: f.Aq
			},
			k;
		for(k in d) Cr(f, k, d[k]);
		k = L("html5-context-menu-pop-out", f.ab);
		ok(k, window.opener == m);
		Ta(this, this.Z);
		a.$g && G(c, "house-brand");
		a = L("html5-video-loader", b);
		this.Ca = new Fr(a);
		Ta(this, this.Ca);
		b = L("html5-info-bar", b);
		this.A = new Bt(b, this.a);
		this.A.Cj();
		Ta(this, this.A);
		var p = this.a.getEnvironmentData();
		p.Va ? (b = x(function(a) {
			return Mt(a) || I(a.target, "html5-draggable")
		}, this), new Ik(this.U, x(function(a) {
			I(this.U, "cued-mode") ? Tm.hasTags(h) && this.tm(a) : Mt(a) && (I(this.U, "hide-controls") ? this.g("useractive") : this.g("useridle"), this.jd && (a = Pk.getInstance(), a.Ne && Sk(a, a.Ne)))
		}, this), n, b), N(this.U, "gesturechange", x(this.Cq, this)), N(this.U, "gestureend", x(this.Dq, this))) : (N(this.U, "click", x(this.tm, this)), N(this.U, "dblclick", x(this.Bq, this)), N(this.U, "click", x(this.g, this, "useractive")), ee(this.U, "move", x(this.g, this, "useractive")), ee(this.U, "out", x(this.g, this, "useridle")));
		var r = x(function() {
			var a = p.o;
			a && (Oj(a), Tm.fillPool(4), p.Va && (Jk && !Lk) && (Lk = l, document.addEventListener("click", function(a) {
				for(var b = new D(a.clientX, a.clientY), c = 0, d; d = Kk[c]; c++)
					if(25 > tc(d, b)) {
						a.stopPropagation();
						a.preventDefault();
						Kk.splice(c, 1);
						break
					}
			}, l)), ie(this.U, "click", r, l))
		}, this);
		N(this.U, "click", r, l);
		N(this.U, "keypress", x(this.Eq, this));
		N(this.U, "keydown", x(this.wq, this));
		N(this.U, "contextmenu", x(this.Z.sq, this.Z));
		N(this.b, "click", x(this.um, this));
		this.A.z("title-click", x(this.um, this));
		this.A.z("share-click", x(this.Fq, this))
	};
	q.Ai = function(a) {
		Kt.C.Ai.call(this, a);
		Nt(this, a)
	};
	q.Yj = function() {
		Kt.C.Yj.call(this);
		Nt(this, sr(this))
	};
	q.Qk = function(a, b) {
		Kt.C.Qk.call(this, a, b);
		"newdata" == a && (this.Ka("html5-before-playback"), this.A.reset());
		this.a.getEnvironmentData().qb && this.A.update(b)
	};
	q.Yt = function(a) {
		2 == a ? Ot(this) : Pt(this)
	};
	q.bu = function(a) {
		id(this.U, Ue(a.b), Ue(a.a));
		O(a.a, 1) ? this.On() : this.kk();
		O(a.a, 2) ? Ot(this) : Pt(this);
		0 < Si(a, 8) && I(this.U, "html5-before-playback") && (this.Ek("html5-before-playback"), Qt(this.a))
	};
	q.tm = function(a) {
		var b = this.a.getEnvironmentData();
		Mt(a) && (this.U.focus(), (I(this.U, "cued-mode") || !b.Za) && this.g("playpausetoggled", l))
	};
	q.Bq = function(a) {
		Mt(a) && this.g("fullscreentoggled")
	};

	function Rt(a, b, c, d) {
		var f = a.a.getEnvironmentData().fc;
		d * (f ? -1 : 1) > (f ? -c : b) && a.g("fullscreentoggled")
	}
	q.Cq = function(a) {
		Rt(this, 1.3, 0.7, a.scale);
		a.preventDefault()
	};
	q.Dq = function(a) {
		Rt(this, 1.1, 0.9, a.scale)
	};

	function Mt(a) {
		return !Ld(a.target, "html5-stop-propagation")
	}
	q.Eq = function(a) {
		var b = a.keyCode;
		if(179 == b || 178 == b) 179 == b && (this.g("playpausetoggled", l), a.preventDefault()), 178 == b && (this.g("stop"), a.preventDefault());
		98 == b && this.g("publishtomodules", "onBackgroundChange");
		111 == b && this.g("publishtomodules", "onTextOpacityChange");
		119 == b && this.g("publishtomodules", "onWindowOpacityChange");
		(61 == b || 43 == b) && this.g("publishtomodules", "onFontSizeIncrease");
		(45 == b || 95 == b) && this.g("publishtomodules", "onFontSizeDecrease");
		32 == b && Mt(a) && (this.g("playpausetoggled", l), a.preventDefault());
		48 <= b && 57 >= b && (this.g("seekto", (b - 48) / 10 * this.a.getDuration()), a.preventDefault())
	};
	q.wq = function(a) {
		var b = a.keyCode;
		if(38 == b || 40 == b || 37 == b || 39 == b) {
			var c = 5;
			a.ctrlKey && (c *= 2);
			38 == b ? this.g("increasevolume") : 40 == b ? this.g("decreasevolume") : 37 == b ? this.g("seekby", -1 * c, n, 250) : 39 == b && this.g("seekby", c, n, 250);
			a.preventDefault()
		}
		36 == b && (this.g("seekto", 0), a.preventDefault());
		35 == b && (this.g("seekto", Infinity), a.preventDefault());
		27 == b && (this.g("exitfullscreen"), a.preventDefault())
	};
	q.um = function(a) {
		a.preventDefault();
		this.g("visitparentsite")
	};
	q.Fq = function() {
		this.g("command_share");
		this.g("exitfullscreen")
	};
	q.jo = function() {
		this.Ek("hide-controls")
	};
	q.ho = function() {
		this.Ka("hide-controls")
	};
	q.No = function() {
		H(this.b, "html5-branded-watermark");
		W(this.b)
	};
	q.Mo = function(a) {
		this.b.src = a;
		G(this.b, "html5-branded-watermark");
		W(this.b)
	};
	q.Lo = function() {
		X(this.b)
	};

	function Ot(a) {
		Pt(a);
		var b = a.a.getEnvironmentData(),
			c = a.a.getVideoData(),
			d = a.e,
			f = b.pb;
		rk("backgroundSize") != h ? (b = document.createElement("div"), b.style.backgroundImage = "url(" + en(d, c, f) + ")") : (b = document.createElement("img"), b.src = en(d, c, f), c = b, d.clientWidth / d.clientHeight < dn ? (c.style.height = "100%", c.style.width = "auto") : (c.style.height = "auto", c.style.width = "100%"));
		G(b, "video-thumbnail");
		a.R = b;
		a.e.appendChild(a.R);
		a.Ka("cued-mode")
	}

	function Pt(a) {
		a.R && (a.Ek("cued-mode"), zd(a.R), a.R = m)
	}
	q.On = function() {
		Gr(this.Ca)
	};
	q.kk = function() {
		Hr(this.Ca)
	};
	q.dn = function() {
		var a = qd("html5-popup-dialog", this.U);
		B(a, function(a) {
			X(a)
		}, this)
	};
	q.au = function(a) {
		this.Ba && (this.Ba.innerHTML = a.message || S("HTML5_DEFAULT_FALLBACK"), W(this.da))
	};
	q.Zt = function() {
		X(this.da)
	};
	q.Wo = function(a) {
		var b = document.createElement("div");
		G(b, "html5-bezel", "html5-center-overlay");
		var c = document.createElement("div");
		G(c, a);
		b.appendChild(c);
		this.e.appendChild(b);
		R(function() {
			G(b, "html5-bezel-fade")
		}, 0);
		R(function() {
			zd(b)
		}, 300)
	};
	q.Un = function(a) {
		L("html5-viewport-sheet").disabled = !a
	};
	q.Cf = function() {
		var a = this.a.getEnvironmentData();
		Od(document.body, "player-size", a.fc ? "fullscreen" : a.De ? "large" : "small");
		Kt.C.Cf.call(this)
	};

	function Nt(a, b) {
		var c = b.width,
			d = b.height,
			f = 0,
			g = 0,
			f = 1;
		0 < c && 0 < d && (c / d > 480 / 360 ? (f = d, g = 360) : (f = c, g = 480), f = sc(f / g, 0.53, 1));
		a.Da = an(".html5-scalable-icon", ["transform: scale(" + f + ") !important", "-webkit-transform: scale(" + f + ") !important", "-moz-transform: scale(" + f + ") !important", "-o-transform: scale(" + f + ") !important", "-ms-transform: scale(" + f + ") !important"], {
			Db: a.Da,
			reset: l
		})
	}
	q.dp = function() {
		var a;
		if(a = this.jd) {
			a = this.jd;
			var b = Pk.getInstance(),
				c;
			if(c = !!b.Ne) {
				var b = b.Ne,
					d = a.oa,
					b = K(b),
					d = K(d);
				c = !!Kd(b, function(a) {
					return a === d
				}, l, h)
			}
			a = c
		}
		return !a
	};
	q.hn = function(a) {
		this.jd && ol(this.jd, a)
	};
	q.G = function() {
		this.kk();
		bn(this.Da);
		ke(this.U);
		ke(this.b);
		this.R = this.b = this.F = this.Ba = this.da = this.Da = m;
		Kt.C.G.call(this)
	};

	function St(a, b, c, d) {
		"string" == typeof a && (a = {
			mediaContentUrl: a
		});
		var f = a,
			g = /\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);
		f.video_id = g && g[2] ? g[2] : m;
		return Tt(a, b, c, d)
	}

	function Tt(a, b, c, d) {
		b = {
			endSeconds: h,
			list: b,
			mediaContentUrl: h,
			startSeconds: c,
			video_id: a,
			vq: d
		};
		if("object" == typeof a && a != m) {
			b.video_id = m;
			for(var f in b) f in a && (b[f] = a[f])
		}
		return b
	};
	var Ut = [102, 107, 108];

	function Vt(a, b, c, d) {
		this.b = [];
		this.j = [];
		this.i = [];
		this.Rp = b.Xi;
		c && (this.k = c.nbe, this.A = c.bc, this.D = c.bd, this.Ya = c.bt, this.Tl = c.fs, this.Ul = c.mos, this.Vl = c.ssrt, this.Pp = c.sourceid, this.zc = c.sd, this.Tp = c.hmewadbc, this.Qa = c.hmewdfc, this.Up = c.hmewdrop, this.Vp = c.hmewvdbc, this.Gp = c.hmemdf, this.Hp = c.hmempaintdelay, this.Ip = c.hmempainted, this.Ba = c.hmempf, this.Jp = c.hmempresented, this.xc = c.volume);
		this.cj = b.cj;
		this.Ng = b.Zb;
		this.yc = b.Sl;
		this.ea = b.Ya;
		this.vc = b.R;
		this.Tc = b.Z;
		this.Vc = b.da;
		this.Sc = b.Yb;
		this.Qd = b.ea;
		this.Md = b.ha;
		this.Od = b.wa;
		this.sf = b.Ba;
		this.Kg = b.Da;
		this.Wi = b.Ca;
		this.Xi = b.a;
		this.S = b.S;
		this.i = b.b;
		this.Sl = b.D;
		this.Fp = b.i;
		this.Wl = b.Yc;
		this.vf = b.vf ? "1" : h;
		this.R = dk(b);
		this.Lp = b.Ja;
		this.referrer = b.referrer;
		this.region = b.region;
		this.e = b.k;
		this.Z = new F(window.screen.width, window.screen.height);
		this.Op = b.yc;
		this.Da = b.Ac;
		this.Ca = b.wc;
		var f;
		c = t("yt.www.watch.activity.getTimeSinceActive", window);
		"detailpage" == b.S && c ? f = c() : b.zc && (f = y() - b.zc);
		this.tc = f;
		this.da = ek(b);
		this.Ma = b.vc;
		this.Sp = b.Ga;
		!a.format || a.Ga.isEmpty();
		this.Ng = a.Hg || this.Ng;
		this.Ac = a.vc;
		this.ha = a.D;
		this.wc = a.Tc;
		this.format = a.format;
		this.Xl = a.$b;
		this.wa = a.Gg;
		this.Yb = a.Kg;
		this.cc = a.Qi;
		this.Pd = a.Pd;
		this.Na = a.Na;
		this.Kp = a.e;
		this.nb = a.nb;
		this.Mp = a.R;
		this.e = a.zc || this.e;
		this.Np = a.Vc;
		this.Yl = a.Yi;
		this.a = a.a;
		this.Qp = a.Sc;
		this.J = a.J;
		this.Ga = a.Ga;
		this.I = d || []
	}
	q = Vt.prototype;
	q.Ng = n;
	q.Hl = n;
	q.Tl = n;
	q.Ti = n;
	q.Ul = n;
	q.Xl = n;
	q.Vl = n;
	q.Wl = "yt";
	q.Yl = n;
	q.$l = n;

	function Wt(a) {
		if(!a.$l) {
			var b = {
				html5: "1",
				ns: a.Wl,
				ps: a.Lp,
				el: a.S,
				hl: a.Fp,
				cr: a.region,
				c: a.Sc,
				docid: a.J,
				sd: a.zc,
				sourceid: a.Pp,
				referrer: a.referrer,
				q: a.Op,
				plid: a.Na,
				fmt: a.format ? a.format.Ua.a : 0,
				fs: a.Tl ? "1" : "0",
				screenw: a.Z.width,
				screenh: a.Z.height,
				w: a.da.width,
				h: a.da.height,
				vw: a.Ga.width,
				vh: a.Ga.height,
				playerw: a.R.width,
				playerh: a.R.height,
				vid: a.Sp,
				hbid: a.Kp,
				rt: a.Tg(a.Ee),
				mos: a.Ul,
				volume: a.xc,
				app: a.cj,
				csipt: a.Ac,
				on3g: a.vf,
				partnerid: a.Pd,
				sdetail: a.Mp,
				subscribed: a.a,
				sw: a.wc,
				list: a.nb,
				eurl: a.Xi,
				framer: a.Sl,
				feature: a.e,
				ytr: a.Np,
				threed: a.Qp,
				lact: a.tc,
				cver: a.Qd,
				cplatform: a.Wi,
				cbrand: a.vc,
				cmodel: a.Md,
				cnetwork: a.Od,
				cbr: a.Tc,
				cbrver: a.Vc,
				cos: a.sf,
				cosver: a.Kg,
				live: a.Yb,
				bwc: a.yc
			};
			a.Ti && (b.playback = "1");
			a.Ng && (b.autoplay = "1");
			a.Xl && (b.splay = "1");
			a.Vl && (b.ssrt = "1");
			a.ha && (b.delay = a.ha);
			a.Yl && !a.Ti && (b.vtmp = "1");
			a.Hl && (b.tv = "1");
			a.ea && (b.content_v = a.ea);
			a.Da != h && a.Ca && (b.uga = a.Ca + a.Da);
			a.F != h && (b.len = a.Tg(a.F));
			0 < a.i.length && (b.fexp = a.i.toString());
			0 < a.wa && (b.idpj = a.wa);
			0 < a.cc && (b.ldpj = a.cc);
			a.Ma != h && (b.attrib = a.Ma);
			a.A && (b.bc = a.A);
			a.D && (b.bd = a.D, b.bt = a.Ya);
			0 < a.k && (b.nbe = a.k);
			a.Qa != h && (b.hmewdfc = a.Qa, b.hmewdrop = a.Up, b.hmewvdbc = a.Vp, b.hmewadbc = a.Tp);
			a.Ba != h && (b.hmempf = a.Ba, b.hmemdf = a.Gp, b.hmempresented = a.Jp, b.hmempainted = a.Ip, b.hmempaintdelay = a.Hp);
			0 < a.b.length && (b.st = a.b.map(a.Tg).join(","), b.et = a.j.map(a.Tg).join(","));
			for(var c = 0; c < a.I.length; c++) {
				var d = a.I[c],
					f = {};
				f.allowed = d.j;
				d.b && (f.ex_ads = d.b);
				d.a && (f.at = d.a);
				Wa(f, function(a, c) {
					c in b || (b[c] = a)
				})
			}
			c = Q(a.Rp, b);
			ve(c);
			a.$l = l
		}
	}
	q.Tg = function(a) {
		return(1 * a.toFixed(3)).toString()
	};

	function Xt() {
		this.k = [];
		this.e = [];
		this.A = [10, 10, 10, 40]
	}
	z(Xt, Sa);
	q = Xt.prototype;
	q.ll = 0;
	q.ko = 0;
	q.Rj = m;
	q.Jm = function() {
		return []
	};
	q.Be = m;
	q.Kl = "";
	q.$c = 0;
	q.po = 0;
	q.kj = 0;
	q.wf = 0;
	q.xg = 0;
	q.zf = 0;
	q.am = function() {
		Yt(this);
		this.ll = Math.min(this.ll + 1, this.A.length - 1);
		var a = this.A[this.ll];
		Zt(this);
		this.b = Hf(x(this.am, this), 1E3 * a)
	};

	function Zt(a) {
		a.b != h && Jf(a.b)
	}
	q.Wp = function() {
		var a = this.Be(),
			b = (y() - this.wf) / 1E3,
			c = a - this.$c;
		if(0 != c) {
			var d = b - this.kj;
			if(0 > c || c > d + 0.2) $t(this), this.zf = a;
			this.kj = b
		}
		this.$c = a
	};

	function $t(a) {
		400 < a.ko ? Zt(a) : 3 < a.$c - a.zf && (a.k[a.xg] = a.zf, a.e[a.xg] = a.$c, a.xg++, a.zf = a.$c)
	}

	function au(a) {
		var b = {},
			c = a.Rj();
		pa(b, c);
		c = a.Jm();
		b = new Vt(a.B, a.u, b, c);
		b.Ee = (y() - a.wf) / 1E3;
		b.F = a.F();
		return b
	}

	function bu(a) {
		var b = a.u;
		a = a.B;
		var c = {
			ns: b.Yc,
			html5: "1",
			el: b.S,
			ps: b.Ja,
			fexp: b.b.join(",") || h,
			list: a.nb,
			d: b.xc,
			f: b.Ma
		};
		b.Zb && (c.autoplay = "1");
		a.a && (c.subscribed = a.a);
		return c
	}

	function Yt(a) {
		$t(a);
		cu(a, h)
	}

	function cu(a, b) {
		if(b || 0 < a.xg && a.B.Ui) {
			var c = b || au(a);
			a.k.length && a.e.length && (c.b = a.k, c.j = a.e);
			Wt(c);
			a.k = [];
			a.e = [];
			a.ko++
		}
		a.xg = 0
	}

	function du(a, b) {
		b.rt = (y() - a.wf) / 1E3;
		var c = a.Rj();
		pa(b, c);
		"streamingerror" == b.event ? (c = "//s.youtube.com/stream_204", b.v && delete b.v) : c = a.u.Xa + "player_204";
		c = Q(c, bu(a));
		c = Q(c, b);
		ve(c)
	}

	function eu(a, b) {
		var c = a.u,
			d = a.B,
			f = {
				el: c.S,
				eurl: c.a,
				fmt: d.format ? d.format.Ua.a : 0,
				html5: 1,
				list: d.nb,
				plid: d.Na,
				ps: c.Ja,
				noflv: 1,
				st: a.Be(),
				video_id: d.J
			};
		c.Zb && (b.autoplay = "1");
		d.Vi && (b.tmi = "1");
		pa(f, b);
		ve(Q(c.Xa + "live_204", f))
	}
	q.G = function() {
		Xt.C.G.call(this);
		Zt(this);
		this.i != h && Jf(this.i)
	};

	function fu() {
		var a = new wj;
		a && vj(a) && (this.a = new zj(a), this.b = new zj(a))
	}
	z(fu, Sa);
	fu.prototype.b = m;
	fu.prototype.a = m;
	fu.prototype.getVolume = function() {
		var a = {
			volume: 100,
			muted: n,
			nonNormalized: 100
		};
		if(this.b) {
			var b = {};
			try {
				b = this.b.get("yt-player-volume") || {}
			} catch(c) {
				this.b.Ff("yt-player-volume")
			}
			a.volume = isNaN(b.volume) ? 100 : sc(b.volume, 0, 100);
			a.nonNormalized = isNaN(b.nonNormalized) ? a.volume : b.nonNormalized;
			a.muted = b.muted == h ? n : b.muted
		}
		return a
	};
	fu.prototype.G = function() {
		this.b = this.a = m;
		fu.C.G.call(this)
	};

	function gu(a) {
		P.call(this);
		this.u = a;
		this.a = new kk(this.u)
	}
	z(gu, P);

	function hu(a, b, c) {
		var d = lk(a.a, b);
		d != b.format && (b.format = d, a.g("internalvideoformatchange", b, d, c))
	}
	gu.prototype.getPlaybackQuality = function(a) {
		var b;
		(a = lk(this.a, a)) && (b = a.Wd);
		return b
	};
	gu.prototype.getAvailableQualityLevels = function(a) {
		for(var b = [], c = 0; c < ci.length; c++) Bi(a, ci[c]) && b.push(ci[c]);
		return b
	};

	function iu(a) {
		P.call(this);
		this.I = new Ne;
		this.k = NaN;
		this.u = a;
		this.F = this.D = n;
		this.a = new Se;
		this.e = m;
		this.b = NaN;
		this.dh = new gk(this);
		this.o = this.B = m;
		this.A = NaN
	}
	z(iu, P);
	q = iu.prototype;
	q.G = function() {
		If(this.A);
		ju(this);
		Ua(this.e, this.dh, this.B);
		this.B = this.dh = this.a = this.u = this.I = m
	};

	function ku(a, b) {
		a.F = n;
		a.o && Qj(a.o);
		Va(a.B);
		a.B = b;
		a.B.z("videoinfo", a.xv, a);
		a.B.z("onStatusFail", a.yv, a);
		lu(a, "newdata")
	}
	q.updateVideoData = function(a) {
		xi(this.B, a);
		lu(this)
	};
	q.getVideoData = function() {
		return this.B
	};

	function mu(a) {
		return !(!a.B || !a.B.md.length)
	}

	function nu(a) {
		return !a.B.J ? (a.setPlayerError(2), n) : l
	}
	q.setPlayerError = function(a, b, c) {
		ou(this, Te(this.a, 128, {
			errorCode: a,
			errorDetail: c,
			message: b
		}))
	};
	q.isPeggedToLive = function() {
		return this.D
	};
	q.ej = function() {
		return O(this.a, 8) && !O(this.a, 64) && !O(this.a, 2)
	};
	q.getPlayerState = function() {
		return this.a
	};

	function ju(a) {
		a.o && (jk(a.dh), a.o = m)
	}
	q.playVideo = function() {
		if(this.o) {
			var a = Ci(this.B);
			if(this.o.Je != a) {
				var b;
				if(this.B.format && this.B.format.a)
					if(b = this.B, b.format) {
						var c = b.format.j;
						Di(b, c);
						b = c
					} else b = m;
				Oj(this.o, a, b);
				If(this.A);
				this.A = R(x(this.Ns, this), 15E3);
				this.u.Bm ? R(x(function() {
					this.o.playVideo()
				}, this), 0) : this.o.playVideo()
			} else O(this.a, 64) && ou(this, Te(this.a, this.a.a | 8)), this.o.playVideo(), this.B.ac && !this.B.Ta && this.seekTo(Infinity)
		}
	};
	q.pauseVideo = function() {
		O(this.a, 64) && ou(this, Te(this.a, this.a.a & -9));
		this.o && this.o.pauseVideo()
	};
	q.stopVideo = function() {
		this.pauseVideo();
		this.o && (this.B.xa = this.getCurrentTime(), this.b = NaN, this.o.stopVideo(), O(this.a, 128) || ou(this, Te(this.a)))
	};
	q.seekTo = function(a, b, c) {
		if(this.o) {
			a = a || 0;
			var d = 1 > this.o.seekable.length ? NaN : this.o.seekable.end(this.o.seekable.length - 1);
			a > d && (a = d, pu(this, l));
			0 > a && (a = 0)
		} else a = 0;
		this.b = a;
		b ? this.ih() : (Ft(this), c && (this.e || (this.e = new ic(this.ih, c, this)), this.e.start()), this.Oe(l));
		this.g("seekto", a)
	};

	function Ft(a) {
		O(a.a, 32) || (ou(a, Te(a.a, a.a.a | 32)), O(a.a, 8) && a.pauseVideo(), a.g("beginseeking"))
	}
	q.ih = function() {
		!isNaN(this.b) && this.o && this.o.seekTo(this.b);
		this.e && (this.e.ub(), this.e = m);
		O(this.a, 32) && (ou(this, Te(this.a, this.a.a & -33)), this.g("endseeking"))
	};
	q.getCurrentTime = function() {
		return !isNaN(this.b) ? this.b : this.o ? this.o.getCurrentTime() : 0
	};
	q.getDuration = function() {
		return this.o ? this.o.getDuration() : 0
	};

	function qu(a, b) {
		var c = isNaN(b) ? a.getCurrentTime() : b,
			d = a.getDuration();
		return Infinity == d ? 1 : d ? c / d : 0
	}
	q.getLoadProgressFraction = function() {
		return this.o ? this.o.getLoadProgressFraction() : 0
	};
	q.xv = function(a) {
		this.g("commoninfoloaded", a);
		lu(this);
		this.g("videoinfoloaded", a)
	};
	q.yv = function(a) {
		this.setPlayerError(parseInt(a.errorcode, 10), unescape(a.reason), a.errordetail)
	};

	function lu(a, b) {
		a.g("internalvideodatachange", b || "videoinfo", a.B)
	}

	function ru(a) {
		"loadstart loadeddata loadedmetadata play playing pause ended suspend progress seeking seeked timeupdate durationchange error waiting abort emptied".split(" ").forEach(function(a) {
			this.dh.K(this.o, a, this.gk)
		}, a)
	}
	q.gk = function(a) {
		var b = a.target;
		if(Nj(b)) {
			switch(a.type) {
				case "durationchange":
					if(!this.B.Ta) {
						var c = this.B.ya;
						b.Je && !b.Je.b && (c = b.getDuration(l));
						su(this, c)
					}
					break;
				case "ended":
					ou(this, Te(this.a, 4));
					break;
				case "loadedmetadata":
					this.B.xa && (this.o.currentTime = this.B.xa), this.u.wm && (this.k = this.B.xa || NaN);
				case "loadeddata":
					this.A && If(this.A);
					break;
				case "progress":
				case "suspend":
					this.Oe();
					this.g("onLoadProgress", this.getLoadProgressFraction());
					break;
				case "seeking":
					O(this.a, 32) || (this.b = NaN);
					break;
				case "timeupdate":
					O(this.a, 32) || (this.b = NaN), this.k && (this.k <= this.getCurrentTime() ? this.k = NaN : this.o.currentTime = this.k), this.Oe(), this.g("onVideoProgress", b.getCurrentTime())
			}
			this.g("videoelementevent", a);
			a: {
				var b = this.a,
					d = this.I;
				if(!O(b, 128)) {
					var c = b.a,
						f, g = a.target;
					switch(a.type) {
						case "ended":
							if(0 >= g.networkState) break;
							c = Ve();
							break;
						case "pause":
							!O(b, 32) && !O(b, 2) && (c = 4);
							break;
						case "playing":
							c = 8;
							break;
						case "abort":
						case "error":
							c |= 256;
							f = g.error;
							a = 107;
							if(f && f.code) switch(f.code) {
								case f.MEDIA_ERR_ABORTED:
									a = 200;
									break;
								case f.MEDIA_ERR_NETWORK:
									a = 201;
									break;
								case f.MEDIA_ERR_DECODE:
									a = 202;
									break;
								case f.MEDIA_ERR_SRC_NOT_SUPPORTED:
									a = 203
							}
							f = {
								errorCode: a
							};
							Ia(Re, f.errorCode) && (c |= 128);
							break;
						case "canplay":
							c &= -2;
							break;
						case "progress":
							if(O(b, 8)) {
								var g = a.target.getCurrentTime(),
									j;
								if(j = d) a = a.timeStamp, d.a == g ? j = 500 < a - d.timeStamp : (d.a = g, d.timeStamp = a, j = n);
								j && (c |= 1)
							}
							break;
						case "seeked":
							c &= -18;
							break;
						case "seeking":
							c |= 16;
							g.inUnbufferedArea() && (c |= 1);
							c &= -3;
							break;
						case "waiting":
							O(b, 2) || (c |= 1);
							break;
						case "timeupdate":
							O(b, 16) || (c &= -2);
							break;
						default:
							break a
					}
					b = Te(b, c, f)
				}
			}
			ou(this, b)
		}
	};
	q.Oe = function(a) {
		if(this.o) {
			var b = this.getCurrentTime();
			if(this.B.Ta && b > this.getDuration()) {
				var c = this.getDuration();
				0 == c && (c = b);
				su(this, 1.2 * c)
			}
			var c = qu(this),
				d = 0;
			this.o.buffered && 0 < this.o.buffered.length && (this.B.Ta ? this.isPeggedToLive() || (d = (1 > this.o.seekable.length ? NaN : this.o.seekable.end(this.o.seekable.length - 1)) / this.getDuration()) : d = this.getLoadProgressFraction());
			0 < b && (this.B.xa = b);
			this.sl && window.clearTimeout(this.sl);
			!this.o.paused && !this.o.ended && (this.sl = this.o.played && 0 == this.o.played.length ? window.setTimeout(x(this.Oe, this), 100) : window.setTimeout(x(this.Oe, this), 500));
			this.g("progresssync", b, c, d, a)
		}
	};

	function ou(a, b) {
		if(!(b.a == a.a.a && b.b == a.a.b)) {
			var c = new Ir(b, a.a);
			a.a = b;
			0 > Si(c, 8) && pu(a, n);
			0 < Si(c, 32) && pu(a, n);
			a.B.ac && (a.B.Ta && O(c.a, 2)) && (su(a, a.getCurrentTime()), a.Oe(l));
			a.g("statechange", c)
		}
	}

	function pu(a, b) {
		a.B.Ta && a.D != b && (a.D = b, a.g("liveviewshift", b))
	}
	q.Ns = function() {
		this.g("loadsofttimeout")
	};

	function su(a, b) {
		a.o && Pj(a.o, b);
		a.B.ya != b && (a.B.ya = b, lu(a))
	};

	function tu(a, b, c) {
		P.call(this);
		this.b = 1;
		this.Rd = {};
		this.A = {};
		this.Sd = new fu;
		Ta(this, this.Sd);
		this.z("openingpage", x(this.ms, this));
		this.z("initializingmode", x(this.is, this));
		this.z("internalenvironmentdatachange", x(this.gs, this));
		this.z("internalvolumechange", x(this.Cn, this));
		b instanceof oe || (b = new oe(b));
		this.ob = b;
		b = this.ob.args;
		Va(this.u);
		this.u = new Xj(b || {});
		this.g("internalenvironmentdatachange", "newdata");
		b = this.L = new iu(this.u);
		b.z("internalvideodatachange", this.Ds, this);
		b.z("liveviewshift", this.ks, this);
		b.z("progresssync", this.os, this);
		b.z("statechange", this.Bs, this);
		b.z("commoninfoloaded", this.es, this);
		b.z("loadsofttimeout", this.As, this);
		b.z("videoelementevent", this.gk, this);
		b.z("videoinfoloaded", this.ws, this);
		b.z("beginseeking", this.ds, this);
		b.z("endseeking", this.zs, this);
		b.z("onLoadProgress", this.ls, this);
		b.z("seekto", this.rs, this);
		b.z("onVideoProgress", this.xs, this);
		this.k = -1;
		this.wd = new gu(this.u);
		this.wd.z("internalvideoformatchange", x(this.vs, this));
		b = Rg();
		this.Ha = this.u.Md && b.addTextTrack ? new Pi(x(this.getPlayerState, this)) : new We(x(this.getCurrentTime, this), x(this.getPlayerState, this), x(this.cs, this));
		Ta(this, this.Ha);
		this.ta = new nr;
		Ta(this, this.ta);
		this.e = new dc(3E4);
		this.e.addEventListener("tick", this.fm, n, this);
		Ta(this, this.e);
		this.R = new ic(this.Pl, this.u.Va ? 4E3 : 3E3, this);
		Ta(this, this.R);
		this.Jb = {};
		this.xk = {};
		this.I = m;
		this.D = new wh;
		c ? this.P = c(this) : this.P = new Kt(this);
		this.P.z("documentready", this.ys, this);
		this.P.z("templateerror", this.ts, this);
		this.P.z("templateready", this.us, this);
		this.P.z("resize", this.Cs, this);
		this.P.pj(a);
		Ta(this, this.P)
	}
	z(tu, P);
	q = tu.prototype;
	q.tb = m;
	q.jh = m;
	q.Rd = m;
	q.list = m;
	q.sl = 0;
	q.ta = m;
	q.of = l;
	q.Uc = 0;
	q.Ha = m;
	q.Vd = m;
	q.ob = m;
	q.Sd = m;
	q.za = m;
	q.Lm = m;
	q.Of = 1;
	q.Ak = m;
	q.wd = m;
	q.P = m;
	q.Nj = m;

	function uu(a) {
		var b = Tm.getTag();
		a.o = b;
		a.tb = a.o;
		var c = a.L;
		c.o && ju(c);
		c.o = b;
		ru(c);
		c = a.D;
		if(b.addKey != m || b.webkitAddKey != m) N(b, "needkey", x(c.j, c)), N(b, "keymessage", x(c.b, c)), N(b, "webkitneedkey", x(c.j, c)), N(b, "webkitkeymessage", x(c.b, c));
		a.o.setPlaybackRate(a.Of);
		a.o.setVolume(a.za.volume, a.za.muted);
		b = a.P;
		b.o = a.o;
		b.o.parentNode || b.e.appendChild(b.o);
		G(b.o, "video-stream");
		G(b.o, "html5-main-video");
		c = b.a.getEnvironmentData();
		c.Za && c.Nd && b.o.setAttribute("controls", l);
		c.loop && b.o.setAttribute("loop", l);
		c.Lg && b.o.setAttribute("webkit-playsinline", l);
		b.o.setAttribute("x-webkit-airplay", "allow");
		a.u.o = a.o;
		if(a.Ha instanceof Pi) {
			b = a.Ha;
			a = a.o;
			b.eh = [];
			for(var d in Ke) c = a.addTextTrack("metadata"), c.mode = 1, b.eh.push(c);
			b.ua = {};
			b.Hj = []
		}
	}

	function vu(a) {
		if(a.o) {
			ju(a.L);
			var b = a.P;
			b.o && (zd(b.o), b.o = m);
			a.u.o = m;
			var b = a.D,
				c = a.o;
			if(c.addKey != m || c.webkitAddKey != m) ie(c, "needkey", x(b.j, b)), ie(c, "keymessage", x(b.b, b)), ie(c, "webkitneedkey", x(b.j, b)), ie(c, "webkitkeymessage", x(b.b, b));
			Tm.releaseTag(a.o);
			a.o = m
		}
	}
	q.requestVideoElement = function() {
		if(!this.u.Hb) return Tm.getTag();
		ju(this.L);
		this.o.setPlaybackRate(1);
		Qj(this.o);
		return this.o
	};
	q.releaseVideoElement = function(a) {
		if(this.u.Hb) {
			Qj(this.o);
			ju(this.L);
			a = this.L;
			var b = this.o;
			a.o && ju(a);
			a.o = b;
			ru(a);
			this.o.setPlaybackRate(this.Of)
		} else Tm.releaseTag(a)
	};

	function wu(a) {
		var b = a.getVideoData();
		hu(a.wd, b, n);
		a.F = Ma(b.k);
		xu(a);
		yu(a);
		a.g("videoready", b);
		var b = a.ta,
			c = [Zm, Cn, Uq];
		Na(c, sn, kr);
		Na(c, $p, Zq, gr);
		Na(c, Rp);
		c.forEach(function(a) {
			var b;
			var c = ja(a);
			b = this.kl[c];
			if(!b && (b = a(this.O))) {
				a = this.kl[c] = b;
				for(var j in this.Ij) a.z(j, this.Ij[j]);
				a.z("command_log_timing", this.Uu, this);
				Ta(this, b)
			}
			b && b.lb(this.O) && (b.create(), this.pd.push(b))
		}, b);
		a = a.L;
		a.B.Ta && (su(a, a.B.ya), pu(a, l))
	}

	function yu(a) {
		var b = a.getVideoData();
		b && b.Da && !vi.test(b.Da) && !a.u.Pf ? a.P.Mo(b.Da) : a.u.ic ? a.P.No() : a.P.Lo()
	}
	q.dd = function(a, b) {
		this.g.apply(this, arguments);
		this.mj.apply(this, arguments)
	};
	q.getEnvironmentData = function() {
		return this.u
	};
	q.getVideoData = function() {
		return this.L.getVideoData()
	};
	q.is = function() {
		Jf(this.Uc);
		this.Cn(this.za)
	};
	q.bj = function() {
		var a = this.getVideoData(),
			b = {};
		a.format && (b.fmt = a.format.Ua.a, a.format.j && (b.afmt = a.format.j.a));
		a.uf && (b.threed = a.Sc);
		b.plid = a.Na;
		b.list = a.nb;
		a.J && (b.v = a.J);
		a.Pi && (b.infringe = 1);
		a.$b && (b.splay = 1);
		a.e && (b.hbid = a.e);
		a.ac && (b.live = a.Ta ? "dvr" : "live");
		a.Hg && (b.autoplay = 1);
		a.R && (b.sdetail = a.R);
		a.Pd && (b.partnerid = a.Pd);
		this.o.webkitDecodedFrameCount && (b.hmewdfc = this.o.webkitDecodedFrameCount, b.hmewdrop = this.o.webkitDroppedFrameCount, b.hmewvdbc = this.o.webkitVideoDecodedByteCount, b.hmewadbc = this.o.webkitAudioDecodedByteCount);
		this.o.mozParsedFrames && (b.hmempf = this.o.mozParsedFrames, b.hmemdf = this.o.mozDecodedFrames, b.hmempresented = this.o.mozPresentedFrames, b.hmempainted = this.o.mozPaintedFrames, b.hmempaintdelay = this.o.mozPaintDelay);
		b.fs = this.u.fc;
		b.volume = this.getVolume();
		b.mos = this.isMuted() ? 1 : 0;
		this.u.sf && (this.H && this.H.b && "WL" == this.H.b.type) && (b.ssrt = 1);
		return b
	};
	q.ys = function() {
		pt("fs")
	};
	q.ts = function() {
		this.Ke(5)
	};
	q.us = function() {
		this.u.Wj = this.P.U;
		this.P.Zi();
		if(this.u.Rl) {
			var a = this.P;
			a.z("useractive", this.lj, this);
			a.z("useridle", this.Pl, this);
			a.z("increasevolume", this.Gr, this);
			a.z("decreasevolume", this.Dr, this);
			a.z("playpausetoggled", this.Hr, this);
			a.z("exitfullscreen", this.Er, this);
			a.z("fullscreentoggled", this.Fr, this);
			a.z("seekby", this.fn, this);
			a.z("seekto", this.dg, this);
			a.z("stop", this.Ir, this);
			a.z("publishtomodules", this.mj, this);
			a.z("visitparentsite", this.Jr, this);
			a.z("command_share", this.Mr, this);
			yu(this);
			var a = x(this.Br, this),
				b = document,
				c = "onfullscreenchange" in b ? "fullscreenchange" : "onmozfullscreenchange" in b ? "mozfullscreenchange" : "onmsfullscreenchange" in b ? "msfullscreenchange" : "onofullscreenchange" in b ? "ofullscreenchange" : "onwebkitfullscreenchange" in b ? "webkitfullscreenchange" : m;
			this.Nj = c ? N(b, c, a) : m
		}
		this.za = this.Sd.getVolume();
		uu(this);
		ku(this.L, new si(this.ob.args));
		a = this.getVideoData();
		if("detailpage" == this.u.S) {
			a: {
				c = this.Sd;
				b = a.J;
				if(c.a && (c = c.a.get("yt-player-restore-playhead"))) {
					b = c[b];
					break a
				}
				b = h
			}
			b && (a.xa = b)
		}
		a = this.Sd;
		a.a && a.a.Ff("yt-player-restore-playhead");
		this.u.Xc = sr(this.P);
		a = this.P.U;
		pa(this.Rd, {
			addEventListener: x(this.addEventListener, this),
			getCurrentTime: x(function() {
				return !this.tb || this.o === this.tb ? this.getCurrentTime() : this.tb.getCurrentTime()
			}, this),
			getPlayerState: x(this.ur, this),
			seekTo: x(this.Qr, this),
			getDuration: x(function() {
				return this.tb ? this.tb.getDuration() : 0
			}, this),
			getVolume: x(this.getVolume, this),
			setVolume: x(this.setVolume, this),
			isMuted: x(this.isMuted, this),
			mute: x(this.mute, this),
			unMute: x(this.unMute, this),
			playVideo: x(this.Pr, this),
			pauseVideo: x(this.en, this),
			stopVideo: x(this.Nr, this),
			getPlaybackRate: x(this.wr, this),
			setPlaybackRate: x(this.setPlaybackRate, this),
			getAvailablePlaybackRates: x(this.Tm, this),
			getPlaybackQuality: x(this.xm, this),
			setPlaybackQuality: x(this.Rr, this),
			getAvailableQualityLevels: x(this.tr, this),
			getVideoBytesLoaded: x(function() {
				var a = this.tb.getLoadProgressFraction();
				return Math.floor(1E3 * a)
			}, this),
			getVideoBytesTotal: x(function() {
				return 1E3
			}, this),
			getVideoLoadedFraction: x(function() {
				return this.tb.getLoadProgressFraction()
			}, this),
			getVideoStartBytes: x(function() {
				var a = this.tb,
					b = 0;
				a.getDuration() && (b = a.startTime / a.getDuration());
				return Math.floor(1E3 * b)
			}, this),
			setSize: x(this.setSize, this),
			loadModule: x(this.ta.yr, this.ta),
			unloadModule: x(this.ta.Sr, this.ta),
			loadVideoById: x(this.cn, this),
			cueVideoById: x(this.cueVideoById, this),
			loadVideoByUrl: x(this.Or, this),
			cueVideoByUrl: x(this.cueVideoByUrl, this),
			getVideoUrl: x(this.ck, this),
			getDebugText: x(this.xr, this),
			addCueRange: x(this.addCueRange, this),
			loadPlaylist: x(this.loadPlaylist, this),
			cuePlaylist: x(this.cuePlaylist, this),
			nextVideo: x(this.nextVideo, this),
			previousVideo: x(this.previousVideo, this),
			playVideoAt: x(this.playVideoAt, this),
			setLoop: x(this.setLoop, this),
			setShuffle: x(this.setShuffle, this),
			getPlaylist: x(this.getPlaylist, this),
			getPlaylistId: x(this.getPlaylistId, this),
			getPlaylistIndex: x(this.getPlaylistIndex, this),
			setOption: x(this.ta.gn, this.ta),
			getOption: x(this.ta.gn, this.ta),
			getOptions: x(this.ta.getOptions, this.ta),
			getApiInterface: x(function() {
				var a = [],
					b;
				for(b in this.Rd) a.push(b);
				return a
			}, this),
			getVideoData: x(function() {
				var a = this.getVideoData();
				return {
					video_id: a.J,
					author: a.author,
					title: a.title
				}
			}, this),
			destroy: x(this.ub, this)
		});
		Zj() && pa(this.Rd, {
			cueVideoByPlayerVars: x(this.cueVideoByPlayerVars, this),
			loadVideoByPlayerVars: x(this.loadVideoByPlayerVars, this),
			seekBy: x(this.fn, this),
			updateLastActiveTime: x(this.updateLastActiveTime, this),
			updateVideoData: x(function(a) {
				this.L.updateVideoData(a)
			}, this)
		});
		this.jh = ab(this.Rd);
		b = {
			loadVideoById: x(this.loadVideoById, this),
			loadVideoByPlayerVars: x(this.loadVideoByPlayerVars, this),
			cueVideoByPlayerVars: x(this.cueVideoByPlayerVars, this),
			watchVideoById: x(this.watchVideoById, this),
			playVideo: x(this.an, this),
			seekTo: x(this.dg, this),
			appendToVideoContent: x(this.P.appendToVideoContent, this.P),
			appendAboveVideoControls: x(this.P.appendAboveVideoControls, this.P),
			preparePlayerThreeD: x(this.preparePlayerThreeD, this),
			toggleThreeD: x(this.toggleThreeD, this),
			requestVideoElement: x(this.requestVideoElement, this),
			releaseVideoElement: x(this.releaseVideoElement, this),
			getAutoplay: x(this.getAutoplay, this),
			getRootNode: x(this.P.sr, this.P),
			getEnvironmentData: x(this.getEnvironmentData, this),
			getPlayerStateObject: x(this.getPlayerState, this),
			getPlayerTemplate: x(function() {
				return this.P
			}, this),
			getFullPlaylist: x(function() {
				return this.H
			}, this),
			getVideoData: x(this.getVideoData, this),
			isFullscreen: x(function() {
				return this.u.fc
			}, this),
			Zw: x(this.dc, this),
			isPeggedToLive: x(this.isPeggedToLive, this),
			setPlayerError: x(this.Ke, this)
		};
		pa(this.jh, b);
		pa(a, this.Rd);
		a = this.ob.args.jsapicallback || "onYouTubePlayerReady";
		ha(a) || (a = t(a));
		a && R(x(a, s, this.u.$i), 0);
		a = this.ta;
		b = {};
		b.loaded = x(this.Ar, this);
		b.command_pause = zu(this.pauseVideo, this);
		b.command_play = zu(this.playVideo, this);
		b.command_seek = zu(this.seekTo, this);
		b.command_disable_controls = x(this.Mg, this);
		b.command_enable_controls = x(this.xj, this);
		b.command_redirect_controls = x(this.Tr, this);
		b.command_stop_redirect_controls = x(this.uj, this);
		b.command_redirected_show_is_playing = x(this.P.hn, this.P);
		b.command_add_cuerange = x(this.rr, this);
		b.command_remove_cuerange = x(this.Kr, this);
		b.command_remove_cuerange_all = x(this.Lr, this);
		b.command_preroll_ready = x(this.zr, this);
		b.command_hide_all_dialogs = x(this.P.dn, this.P);
		b.command_log = x(this.im, this);
		b.publish_external_event = x(this.Cr, this);
		a.Ij = b;
		a.O = this.jh;
		ai() ? this.u.Ql ? Au(this) : "leanback" != this.u.S && Bu(this) : this.Ke(5, S("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"));
		this.P.Yj()
	};

	function Bu(a) {
		a.g("initializingmode");
		Cu(a, 2)
	}

	function Au(a) {
		if(a.getVideoData().dj && !a.u.pb) Du(a);
		else {
			a.g("initializingmode");
			a.u.Hb || (vu(a), uu(a));
			a.a.wf = y();
			var b = a.L,
				c = new Se;
			ou(b, Te(c, c.a | 8));
			b.F = l;
			Eu(a, 3);
			if(nu(a.L) && (!a.L.B || !a.L.B.Td)) b = a.L, a = x(a.Ts, a), mu(b) ? R(a, 0) : Ai(b.B, a, b.u.Ef)
		}
	}
	q.Ts = function() {
		if(mu(this.L)) wu(this);
		else {
			var a = this.L;
			if(!a.B.Td) {
				var b = bk(a.u, a.B);
				Hi(a.B, b)
			}
		}
	};

	function Du(a) {
		var b = S("DEVICE_FALLBACK");
		!tb && (!Ph("iemobile") && (!Ph("xbox") || !Ph("trident")) && !Ph("nintendo wiiu")) && (b = S("FLASH_FALLBACK"));
		a.Ke(5, b)
	}

	function zu(a, b) {
		return function() {
			var c = Array.prototype.slice.call(arguments);
			hc(function() {
				a.apply(b || this, c)
			})
		}
	}
	q.im = function(a, b) {
		b.event = a;
		du(this.a, b)
	};
	q.Mr = function() {
		var a = this.getVideoData();
		this.g("SHARE_CLICKED", {
			videoId: a.J,
			listId: a.nb,
			feature: "player_" + this.u.S
		})
	};
	q.toggleThreeD = function() {
		var a = this.wd,
			b = this.getVideoData();
		b.toggleThreeD();
		hu(a, b, l);
		this.preparePlayerThreeD();
		lu(this.L)
	};
	q.wr = function() {
		return this.Of
	};
	q.setPlaybackRate = function(a) {
		if(!isNaN(a) && this.o) {
			var b = 1,
				b = this.Tm();
			if(1 > a) b = Ha(b, function(b) {
				return b >= a
			});
			else {
				var c;
				a: {
					c = function(b) {
						return b <= a
					};
					for(var d = v(b) ? b.split("") : b, f = b.length - 1; 0 <= f; f--)
						if(f in d && c.call(h, d[f])) {
							c = f;
							break a
						}
					c = -1
				}
				b = 0 > c ? m : v(b) ? b.charAt(c) : b[c]
			}
			this.Of != b && (this.Of = b, this.o.setPlaybackRate(b), this.g("onPlaybackRateChange", b))
		}
	};
	q.Tm = function() {
		return this.u.tj ? Pe : [1]
	};
	q.xm = function() {
		return this.wd.getPlaybackQuality(this.getVideoData())
	};
	q.setPlaybackQuality = function(a) {
		var b = this.wd,
			c = this.getVideoData();
		c.I = a;
		hu(b, c, l)
	};
	q.getCurrentTime = function() {
		return this.L.getCurrentTime()
	};
	q.getDuration = function() {
		return this.L.getDuration()
	};
	q.Rr = function(a) {
		this.setPlaybackQuality(a)
	};
	q.tr = function() {
		return this.wd.getAvailableQualityLevels(this.getVideoData())
	};
	q.getDebugText = function(a) {
		var b = {};
		a && (b = au(this.a));
		var c = this.L.getPlayerState();
		a && O(c, 384) && (b.debug_error = c.b);
		b.debug_videoId = this.getVideoData().J;
		b.debug_playbackQuality = this.xm();
		b.debug_date = (new Date).toString();
		return JSON.stringify(b)
	};
	q.xr = function() {
		return this.getDebugText()
	};
	q.preparePlayerThreeD = function(a) {
		var b = this.getVideoData();
		a = !!b.uf || !!b.ef || !a;
		this.g("threedenabled", a);
		a && this.o.setAttribute("mozStereoMode", "1");
		Vq() && (this.o.setAttribute("mozStereoMode", a ? "1" : "0"), b = jg[a ? b.sf : 0], a = document.createElement("NvStereoExtDataElement"), a.setAttribute("stereoMode", b), xd(document.documentElement, a), le(a, "3DModeEvent"))
	};
	q.ur = function() {
		return this.k
	};
	q.getPlayerState = function() {
		return this.L.getPlayerState()
	};
	q.gk = function(a) {
		var b = a.target;
		this.getVideoData();
		switch(a.type) {
			case "loadedmetadata":
				pt("fvb");
				b = this.P;
				ur(b).isEmpty() || (b.Ai(sr(b)), b.g("resize"));
				break;
			case "loadstart":
				pt("gv");
				this.Uc && Jf(this.Uc);
				this.Uc = Hf(x(this.Ko, this), 100);
				break;
			case "playing":
				this.Uc && (pt("plev"), this.Ko());
				break;
			case "progress":
			case "timeupdate":
				a = b.getBufferedTimeRangeIndex(), !(ot.timer || {}).l2s && (a < b.buffered.length && 2 < b.buffered.end(a)) && pt("l2s")
		}
	};
	q.ls = function(a) {
		this.g("onLoadProgress", a)
	};
	q.xs = function(a) {
		this.g("onVideoProgress", a)
	};
	q.os = function(a, b, c, d) {
		var f = !d;
		d = this.getVideoData();
		d.ld = this.o.getCurrentTime();
		if(this.L.ej() && f) {
			0 < d.Nf && d.ld > d.Nf && (d.ae += d.ld - d.Nf);
			if(d.ya && !d.vm && d.ae >= d.Zl && this.u.Wc) {
				var f = this.u,
					g = sc(d.ld / d.ya, 0, 1),
					g = {
						html5: "1",
						video_id: d.J,
						eurl: f.a,
						framer: f.D,
						referrer: f.referrer,
						feature: f.k,
						ps: f.Ja,
						el: f.S,
						hl: f.i,
						c: f.Yb,
						list: d.nb,
						w: g,
						l: d.ya,
						plid: d.Na,
						t: d.Ma,
						access_token: d.wa,
						tpmt: d.ae
					};
				f.Zb && (g.autoplay = "1");
				f.ea && (g.cver = f.ea);
				f.Ca && (g.cplatform = f.Ca);
				f.R && (g.cbrand = f.R);
				f.ha && (g.cmodel = f.ha);
				f.wa && (g.cnetwork = f.wa);
				f.Z && (g.cbr = f.Z);
				f.da && (g.cbrver = f.da);
				f.Ba && (g.cos = f.Ba);
				f.Da && (g.cosver = f.Da);
				d.$b && (g.splay = "1");
				d.a && (g.subscribed = d.a);
				d.e && (g.hbid = d.e);
				f = Q(f.Xa + "set_awesome", g);
				ve(f);
				d.vm = l
			}
			d.ya && (d.D && d.ae >= d.D) && (f = this.a, f.a && f.B.D && (g = au(f), g.Hl = l, cu(f, g)), d.D = NaN);
			d.ya && d.ae >= d.Il && Fu(this)
		}
		if(d.Jl && (f = d.Fj, 1 == f && 0 < d.ld || 2 == f && 20 <= d.ld || 3 == f && 30 <= d.ld)) {
			f = this.a;
			if(f.a) {
				var g = f.u,
					j = f.B,
					f = {
						ns: "yt",
						html5: "1",
						docid: j.J,
						plid: j.Na,
						fmt: j.format ? j.format.Ua.a : 0,
						el: g.S,
						ps: g.Ja,
						subscribed: j.a,
						yttk: "1",
						st: f.Be(),
						et: f.Be(),
						ctp: j.Fj,
						vid: g.Ga
					},
					f = Q("//s2.youtube.com/s", f);
				ve(f)
			}
			d.Fj++
		}
		d.Nf = d.ld;
		this.g("progresssync", a, b, c)
	};
	q.Bs = function(a) {
		if(!O(a.a, 2) || !Gu(this)) {
			!O(a.a, 32) && 0 > Si(a, 16) && O(a.a, 8) && (!this.o.ended || O(a.a, 2)) && this.playVideo();
			O(a.a, 2) && (this.pauseVideo(), O(a.b, 32) && this.L.ih(), this.u.pb && Er(this, n));
			if(0 < Si(a, 256)) {
				var b = a.a.b;
				du(this.a, {
					event: "streamingerror",
					ec: b.errorCode
				});
				gc(this.e);
				if(this.getVideoData().rf && Ia(Ut, b.errorCode)) {
					var c = this.a,
						b = b.errorCode;
					c.D || (c.D = new jn("error-__ec__"));
					b = {
						metric: c.D.Cc({
							ec: b
						})
					};
					eu(c, b)
				}
			}
			if(O(a.a, 128) && (c = a.a, Jf(this.Uc), this.stopVideo(), !Gu(this))) {
				c = c.b;
				if(5 == c.errorCode && (b = c.message, this.ob.fallback)) {
					du(this.a, {
						event: "streamingerror",
						ec: 204
					});
					var d = this.getVideoData();
					d && pa(this.ob.args, d.uc);
					this.ob.fallback(this.ob, b || S("HTML5_DEFAULT_FALLBACK"))
				}
				Ia(Qe, c.errorCode) && this.g("onError", c.errorCode);
				this.g("onDetailedError", c)
			}
			O(a.a, 8) && !Si(a, 1) && this.lj();
			this.g("statechange", a);
			this.Ha.Am(a);
			this.mj("onStateChange", a);
			Eu(this, O(a.a, 128) || O(a.a, 64) ? -1 : O(a.a, 2) ? 0 : O(a.a, 1) && !O(a.a, 32) ? 3 : O(a.a, 8) ? 1 : O(a.a, 4) ? 2 : -1);
			O(a.a, 2) && (a = this.getVideoData(), a.ac && !a.Ta && this.Mg(["play_pause"]))
		}
	};
	q.Ds = function(a, b) {
		if("newdata" == a) {
			gc(this.e);
			Va(this.a);
			var c = this.getVideoData();
			if(c) {
				var d = this.a = new Xt,
					f = this.u,
					g = x(this.bj, this),
					j = x(this.ta.Vq, this.ta),
					k = x(this.getDuration, this),
					p = x(this.getCurrentTime, this);
				d.B = c;
				d.u = f;
				d.Kl = d.u.Xa + "get_video";
				d.Rj = g;
				d.Jm = j;
				d.F = k;
				d.Be = p;
				d.a = n
			}
			c = this.ta;
			c.pd.forEach(function(a) {
				a.destroy()
			});
			c.pd = [];
			this.Ha && this.Ha.reset();
			b.rf && eu(this.a, {
				metric: "connected"
			});
			var c = [],
				r;
			for(r in this.Jb) this.dc(r) && c.push(r);
			this.Jb = {};
			0 < c.length && this.g("controlsenabled", c);
			this.uj();
			this.A = {};
			this.setPlaybackRate(1);
			b.tf > b.xa && (this.Vd = new Le(1E3 * b.tf, 2147483646), this.Vd.pubsub.z("onEnter", function() {
				var a = this.L;
				a.pauseVideo();
				ou(a, new Se(Ve()))
			}, this), this.Ha.addCueRange(this.Vd))
		}
		this.g("videodatachange", a, b);
		b.Zl = Math.min(0.8 * b.ya, 180);
		this.za.volume = (this.za.nonNormalized || this.za.volume) * this.getVideoData().Ri;
		this.getVideoData().Pi ? (this.Lm = ab(this.za), this.mute(), this.Mg(["audio"])) : this.dc("audio") && (this.xj(["audio"]), Ht(this, this.Lm));
		r = this.getVideoData();
		r.ac && !r.Ta ? this.Mg(["seek"]) : this.xj(["seek"]);
		"embedded" == this.u.S && this.getVideoData().Ol && !(200 <= Math.min(sr(this.P).width, sr(this.P).height)) && this.Ke(150, S("HTML5_EMBED_MIN_SIZE_MESSAGE"));
		if(b.A || b.rb.focEnabled || b.rb.rmktEnabled) r = 1E3 * this.getVideoData().ya, Hu(this, "part2viewed", 0, r), Hu(this, "videoplaytime25", 0.25 * r, r), Hu(this, "videoplaytime50", 0.5 * r, r), Hu(this, "videoplaytime75", 0.75 * r, r), Hu(this, "videoplaytime100", r, 2147483647), Hu(this, "conversionview", r, 2147483647);
		this.dd("onVideoDataChange", a, b)
	};
	q.vs = function(a, b, c) {
		a == this.getVideoData() && (this.L.ej() && this.playVideo(), this.g("onPlaybackQualityChange", b.Wd, c))
	};
	q.gs = function() {
		Ua(this.H, this.Ak);
		this.Ak = this.H = m;
		if(this.u.Gj) {
			var a = this.u.e;
			Va(this.H);
			var a = this.H = new Ki(a),
				b = x(this.cv, this);
			a.zg = b;
			a.Nb && R(a.zg, 0)
		} else if("detailpage" == this.u.S) {
			var c = (a = t("yt.www.lists.getState")) ? a() : h;
			if(c && 0 <= c.index) {
				var d = [];
				c.videoIds.forEach(function(a) {
					if(a = c.videoData ? c.videoData[a] : h) a.video_id = a.id, d.push(a)
				});
				a = {
					videoList: d,
					loop: c.autoPlay,
					index: c.index
				};
				Va(this.H);
				this.H = new Ki(a);
				this.u.Gj = l
			}
		}
	};

	function Hu(a, b, c, d) {
		b in a.A || (c = new Le(c, d, {
			id: b,
			priority: 1
		}), c.pubsub.z("onEnter", a.Ho, a), c.pubsub.z("onExit", a.Ho, a), a.Ha.addCueRange(c), a.A[b] = c)
	}
	q.Ho = function(a) {
		var b = a.getId(),
			c = this.getVideoData();
		"part2viewed" == b ? (c.A && ve(c.A), c.Yb && ve(c.Yb)) : "videoplaytime25" == b || "videoplaytime50" == b || "videoplaytime75" == b ? Yt(this.a) : "conversionview" == b && Fu(this);
		c.xc && (b = a.getId(), c = uf(c.xc, {
			label: b
		}), ve(c));
		this.Ha.We(a)
	};

	function Fu(a) {
		var b = a.getVideoData();
		b.Go || (b.rb.eventLabel = a.u.S, b.rb.playerStyle = a.u.Ja, b.A && (b.rb.feature = "pyv"), b.rb.vid = b.J, b.rb.isAd = !!("adunit" == a.u.S || b.A), Jr("view", b.rb), b.Go = l)
	}

	function Cu(a, b) {
		b != a.b && (2 == b && Eu(a, 5), a.b = b, a.g("appstatechange", b))
	}

	function Eu(a, b) {
		a.k != b && (a.k = b, a.g("onStateChange", b))
	}
	q.Ke = function(a, b, c) {
		this.L.setPlayerError(a, b, c)
	};
	q.cs = function() {
		return this.o.paused || this.o.ended
	};
	q.isPeggedToLive = function() {
		return this.L.isPeggedToLive()
	};
	q.seekTo = function(a, b, c) {
		this.L.seekTo(a, b != n, c)
	};
	q.rs = function(a) {
		var b = this.getVideoData();
		if(1 == this.b || 2 == this.b) b.xa = a;
		2 == this.b ? Au(this) : (this.Vd && a > b.tf && (this.Ha.We(this.Vd), this.Vd = m), a = qu(this.L, a), this.dd("seekto", a))
	};
	q.ds = function() {
		this.dd("beginseeking")
	};
	q.zs = function() {
		this.dd("endseeking")
	};
	q.ks = function(a) {
		J(this.P.U, "html5-live-dvr-engaged", !a)
	};
	q.getVolume = function() {
		return this.za.volume
	};
	q.setVolume = function(a) {
		this.za.volume = a;
		this.g("internalvolumechange", this.za)
	};

	function Ht(a, b) {
		a.za = b;
		a.g("internalvolumechange", a.za)
	}
	q.isMuted = function() {
		return this.za.muted
	};
	q.mute = function() {
		this.za.muted = l;
		this.g("internalvolumechange", this.za)
	};
	q.unMute = function() {
		this.za.muted = n;
		this.g("internalvolumechange", this.za)
	};
	q.loadVideoById = function(a, b, c) {
		return this.loadVideoByPlayerVars(Tt(a, this.list, b, c))
	};
	q.loadVideoByPlayerVars = function(a) {
		a = new si(a);
		Iu(this, a)
	};

	function Iu(a, b) {
		a.stopVideo();
		ku(a.L, b);
		if(!nu(a.L)) return n;
		Au(a);
		return l
	}
	q.cn = function(a, b, c) {
		this.loadVideoById(a, b, c) && (this.getVideoData().$b = l)
	};
	q.Or = function(a, b, c) {
		a = St(a, this.list, b, c);
		this.cn(a);
		(a = (new Mc(a.mediaContentUrl)).a) && ak(this.u, a)
	};

	function Ju(a, b) {
		Iu(a, b) && (a.getVideoData().$b = l)
	}
	q.cueVideoById = function(a, b, c) {
		return this.cueVideoByPlayerVars(Tt(a, this.list, b, c))
	};
	q.cueVideoByPlayerVars = function(a) {
		a = new si(a);
		this.stopVideo();
		ku(this.L, a);
		nu(this.L) && Bu(this)
	};
	q.cueVideoByUrl = function(a, b, c) {
		a = St(a, this.list, b, c);
		this.cueVideoById(a);
		(a = (new Mc(a.mediaContentUrl)).a) && ak(this.u, a)
	};
	q.watchVideoById = function(a, b) {
		if(this.getVideoData().J == a) this.seekTo(0, l);
		else {
			var c = Tt(a, this.list);
			if(!this.u.fc && "detailpage" == this.u.S) {
				var d = {};
				b && (d.feature = b);
				c = new si(c);
				d = this.u.getVideoUrl(c, d);
				b && this.g("onNavigate", {
					url: d,
					feature: b
				});
				window.location.href = d
			} else this.loadVideoByPlayerVars(c)
		}
	};
	q.cuePlaylist = function(a, b, c, d) {
		this.of = l;
		Ku(this, a, b, c, d)
	};
	q.loadPlaylist = function(a, b, c, d) {
		this.of = n;
		Ku(this, a, b, c, d)
	};

	function Ku(a, b, c, d, f) {
		var g = b;
		if("string" == typeof b || b instanceof Array) g = {
			api: b,
			index: c,
			startSeconds: d,
			suggestedQuality: f
		};
		Yj(a.u, g);
		a.g("internalenvironmentdatachange")
	}
	q.cv = function() {
		var a = Ni(this.H);
		this.getVideoData().Hg || !this.of ? Ju(this, a) : (this.stopVideo(), ku(this.L, a), nu(this.L) && Bu(this))
	};
	q.getAutoplay = function() {
		return !(!this.H || !(this.H.loop || this.H.ka + 1 < this.H.Fa.length))
	};

	function Gu(a) {
		return a.H && ("embedded" == a.u.S || a.u.fc) && a.getAutoplay() ? (a.nextVideo(), l) : n
	}
	q.nextVideo = function() {
		this.H && (this.H.Nb ? (this.H.loop || this.H.ka + 1 < this.H.Fa.length) && Ju(this, this.H.re()) : (this.H.re(), this.of = n))
	};
	q.previousVideo = function() {
		this.H && (this.H.Nb ? (this.H.loop || 0 <= this.H.ka - 1) && Ju(this, Oi(this.H)) : (Oi(this.H), this.of = n))
	};
	q.playVideoAt = function(a) {
		this.H && (this.H.Nb ? Ju(this, Ni(this.H, a)) : this.of = n, Mi(this.H, a))
	};
	q.getPlaylist = function() {
		if(!this.H) return m;
		for(var a = [], b = 0; b < this.H.Rb; b++) a[b] = Ni(this.H, b).J;
		return a
	};
	q.getPlaylistId = function() {
		return !this.H || !this.H.b ? m : this.H.b.toString()
	};
	q.getPlaylistIndex = function() {
		return this.H ? this.H.ka : m
	};
	q.setShuffle = function(a) {
		this.H && this.H.setShuffle(a)
	};
	q.setLoop = function(a) {
		this.H && (this.H.loop = a)
	};
	q.ck = function() {
		return this.u.getVideoUrl(this.getVideoData())
	};
	q.addCueRange = function() {};
	q.rr = function(a) {
		this.g("cuerangesadded", a);
		this.Ha.addCueRange.apply(this.Ha, a)
	};
	q.Kr = function(a) {
		this.g("cuerangesremoved", a);
		this.Ha.We.apply(this.Ha, a)
	};
	q.Lr = function(a) {
		this.Ha.tp(a)
	};
	q.zr = function(a) {
		this.F = this.F.filter(function(b) {
			return b != a
		});
		xu(this)
	};

	function xu(a) {
		0 < a.F.length ? Cu(a, 3) : (a.Ha.To(), a.Ha.So() ? Cu(a, 3) : (Cu(a, 4), O(a.L.getPlayerState(), 8) && a.playVideo()))
	}
	q.addEventListener = function(a, b) {
		var c = b;
		"string" == typeof b && (c = function() {
			t(b).apply(window, arguments)
		});
		this.z(a, c)
	};
	q.As = function() {
		du(this.a, {
			event: "streamingerror",
			ec: 102
		})
	};
	q.Hr = function(a) {
		Gt(this, a)
	};
	q.Ir = function() {
		this.en()
	};
	q.Ko = function() {
		var a = this.getVideoData();
		if(0 < this.o.getCurrentTime() && 0 < this.o.getDuration() && !a.bm) {
			Jf(this.Uc);
			a.bm = l;
			Lu(this);
			a = this.a;
			if(!a.a) {
				var b = au(a);
				b.Ti = l;
				a.$c = a.Be();
				a.zf = a.$c;
				b.b = [a.$c];
				b.j = b.b;
				a.kj = (y() - a.wf) / 1E3;
				Wt(b);
				a.B.Ui && (Xt.prototype.A = [10 + a.B.Gg, 10, 10, 40 + a.B.Qi - a.B.Gg, 40], a.i != h && Jf(a.i), a.i = Hf(x(a.Wp, a), 100), a.b || (Zt(a), a.b = Hf(x(a.am, a), 1E4)));
				if(a.u.Gb && !a.a) {
					var b = a.u,
						c = a.B,
						b = {
							noflv: "1",
							html5: "1",
							video_id: c.J,
							plid: c.Na,
							referrer: b.referrer,
							eurl: b.a,
							framer: b.D,
							feature: b.k,
							fmt: c.format ? c.format.Ua.a : 0,
							ptk: c.b,
							skl: c.Nl,
							access_token: c.wa
						};
					pa(b, bu(a));
					b = Q(a.u.Xa + "user_watch", b);
					ve(b)
				}
				a.B.b && a.B.F && ve(Q(a.u.Xa + "ptracking", {
					html5: "1",
					video_id: a.B.J,
					plid: a.B.Na,
					ptk: a.B.b,
					oid: a.B.Qa,
					ptchn: a.B.F,
					pltype: a.B.Ya,
					content_v: a.u.Ya
				}));
				if(a.B.Ml && a.u.Wc && !a.a) {
					var b = a.u,
						c = a.B,
						d = {
							noflv: 1,
							video_id: c.J,
							el: b.S,
							ps: b.Ja,
							referrer: b.referrer,
							eurl: b.a,
							framer: b.D,
							fmt: c.format ? c.format.Ua.a : 0,
							ptk: c.b,
							subscribed: c.a,
							t: c.Ma
						};
					b.Zb && (d.autoplay = "1");
					c.$b && (d.splay = "1");
					0 < c.xa && (d.start = 1E3 * c.xa);
					c.Vi && (d.tmi = "1");
					b = Q(a.Kl, d);
					ve(b)
				}
				a.B.rf && eu(a, {
					metric: "playback"
				});
				a.a = l
			}
			a = this.getVideoData();
			a.rf && (this.a.a || a.Ll) && this.e.start()
		}
	};

	function Lu(a) {
		var b = a.getVideoData();
		if(!b.Sn) {
			b.J && qt("docid", b.J);
			b.Na && qt("plid", b.Na);
			b.e && qt("hbid", b.e);
			0 < b.xa && qt("start", b.xa.toString());
			qt("fmt", b.format.Ua.a.toString());
			qt("tds", Math.round(a.L.getLoadProgressFraction() * a.getDuration()).toString());
			pt("aft");
			if("detailpage" == a.u.S) {
				var c = a.ta.Mk,
					d;
				for(d in c) pt(d, c[d]);
				a = a.ta.Lk;
				for(var f in a) qt(f, a[f]);
				f = Ef("TIMING_ACTION");
				a = ot.timer || {};
				c = ot.info_args || {};
				d = a.start;
				var g = "",
					j = [],
					k = [];
				delete a.start;
				ot.srt && (g = "&srt=" + ot.srt);
				a.aft && a.plev && (a.aft = Math.min(a.aft, a.plev));
				for(var p in a) {
					var r = Math.max(Math.round(a[p] - d), 0);
					j.push(p + "." + r)
				}
				for(p in c) k.push(p + "=" + c[p]);
				a.vr && a.gv && j.push("vl." + Math.round(a.vr - a.gv));
				var u;
				!a.aft && a.vr && a.cl ? u = a.cl > a.vr ? a.cl - d : a.vr - d : !a.aft && a.vr ? u = a.vr - d : a.aft || (u = a.ol - d);
				j.push("aft." + Math.max(Math.round(u), 0));
				ve(["https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", "?v=2&s=youtube&action=", f, g, "&", k.join("&"), "&rt=", j.join(",")].join(""))
			}
			b.Sn = l
		}
	}
	q.fm = function() {
		var a = this.getVideoData(),
			b = this.a,
			c = a.Nf;
		b.po != c && (eu(b, {
			metric: "heartbeat",
			tpmt: a.ae
		}), b.po = c)
	};
	q.Ar = function() {
		this.g("onApiChange")
	};
	q.Cn = function(a) {
		a.volume = sc(a.volume, 0, 100);
		a.nonNormalized = a.volume / this.getVideoData().Ri;
		if(this.u.Nd) {
			var b = this.Sd;
			if(b.b) {
				var c = {};
				c.volume = isNaN(a.volume) ? b.getVolume().volume : sc(a.volume, 0, 100);
				c.nonNormalized = a.nonNormalized;
				c.muted = a.muted == h ? b.getVolume().muted : a.muted;
				try {
					b.b.set("yt-player-volume", c)
				} catch(d) {}
			}
		}
		this.dc("audio") || (this.o.setVolume(a.volume, a.muted), this.g("onVolumeChange", a))
	};
	q.Er = function() {
		Er(this, n)
	};
	q.Fr = function() {
		Er(this, !this.u.fc)
	};
	q.Jr = function() {
		var a;
		a = this.getVideoData();
		a = a.tc || this.u.getVideoUrl(a);
		Dt(this, a)
	};
	q.Gr = function() {
		Ht(this, {
			volume: this.za.volume + 5,
			muted: n
		})
	};
	q.Dr = function() {
		Ht(this, {
			volume: this.za.volume - 5,
			muted: n
		})
	};
	q.Br = function() {
		Mu(this, !!ne())
	};

	function Mu(a, b) {
		a.P.Un(b);
		if("detailpage" == a.u.S && !b) {
			var c = a.getVideoData(),
				d = t("checkCurrentVideo");
			if(d && Ef("VIDEO_ID") != c.J) {
				var f = a.Sd,
					g = a.getCurrentTime();
				try {
					var j = {};
					j[c.J] = g;
					f.a.set("yt-player-restore-playhead", j)
				} catch(k) {}
				d(c.J);
				a.g("openingpage")
			}
		}
		a.u.fc = b;
		a.P.Cf();
		a.dd("fullscreentoggled", b)
	}
	q.Cs = function() {
		Qt(this)
	};
	q.Cr = function(a, b) {
		if("onAdStateChange" == a) {
			var c = arguments[1],
				d = arguments[2],
				f = arguments[3] || {};
			1 == c && Lu(this);
			"leanback" == this.u.S && Zj() && (0 == c ? this.tb = this.o : this.tb = d, this.g("onAdStateChange", c, f.video_id))
		} else this.g.apply(this, arguments)
	};
	q.mj = function(a, b) {
		this.ta.ow.apply(this.ta, arguments)
	};
	q.playVideo = function(a) {
		if(2 == this.b) Au(this);
		else {
			a && Nu(this);
			a = Ci(this.L.getVideoData());
			if(a = this.o.Je != a) a: {
				a = this.L;
				var b = a.getVideoData(),
					c = b.format && b.format.i || m;
				if(c) {
					var d = a.o,
						b = Ci(b).e;
					if(c = zh(d, b, c)) this.D.a = c;
					else {
						a.setPlayerError(203, S("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"));
						a = l;
						break a
					}
				}
				a = n
			}
			a || this.L.playVideo()
		}
	};
	q.pauseVideo = function(a) {
		a && Nu(this);
		this.L.pauseVideo()
	};
	q.stopVideo = function() {
		if(!(1 == this.b || 2 == this.b)) {
			var a = this.a;
			Yt(a);
			a.G();
			this.L.stopVideo()
		}
	};
	q.updateVideoData = function(a) {
		this.L.updateVideoData(a)
	};
	q.updateLastActiveTime = function() {
		this.u.zc = y()
	};
	q.Pr = function() {
		this.getVideoData().$b = l;
		this.an()
	};
	q.an = function() {
		if(!this.dc("play_pause")) {
			var a = Ou(this);
			a ? a.wi("control_play") : this.playVideo()
		}
	};
	q.en = function() {
		if(!this.dc("play_pause")) {
			var a = Ou(this);
			a ? a.wi("control_pause") : this.pauseVideo()
		}
	};

	function Gt(a, b) {
		if(!a.dc("play_pause") && (!a.u.Va || 2 != a.b || Tm.hasTags(h))) {
			var c = Ou(a);
			c ? c.wi("control_toggle_play_pause") : a.L.ej() ? a.pauseVideo(b) : a.playVideo(b)
		}
	}
	q.Nr = function() {
		this.dc("play_pause") || this.stopVideo()
	};
	q.Qr = function(a, b, c) {
		this.getVideoData().$b = l;
		this.dg(a, b, c)
	};
	q.dg = function(a, b, c) {
		this.dc("seek") || this.seekTo(a, b, c)
	};
	q.fn = function(a, b, c) {
		this.dg(this.getCurrentTime() + a, b, c)
	};

	function Er(a, b) {
		if(a.u.fc != b)
			if(me())
				if(b) {
					var c = a.P.U,
						d = Zd(["requestFullscreen", "requestFullScreen"], c);
					d && d.apply(c)
				} else(c = Zd(["cancelFullscreen", "cancelFullScreen"], document)) && c.call(document);
		else a.g("onFullScreenToggleRequest"), Mu(a, b)
	}

	function Dt(a, b) {
		Er(a, n);
		a.g("openingpage");
		br(b)
	}
	q.es = function(a) {
		$j(this.u, a)
	};
	q.ws = function() {
		if(this.L.F)
			if(this.getVideoData().dj && !this.u.pb) Du(this);
			else {
				var a = this.L,
					b = x(this.Av, this);
				mu(a) ? R(b, 0) : Ai(a.B, b, a.u.Ef)
			}
	};
	q.Av = function() {
		var a;
		if(!(a = mu(this.L))) a = this.getVideoData(), a = !a || !a.k.length || a.Bf.length ? n : 0 <= Da(a.k, "fresca");
		a ? wu(this) : this.Ke(5, S("HTML5_NO_AVAILABLE_FORMATS_FALLBACK"))
	};
	q.ms = function() {
		this.pauseVideo()
	};
	q.lj = function() {
		this.R.start();
		this.dd("onShowControls")
	};
	q.Pl = function() {
		this.P.dp() ? this.dd("onHideControls") : this.lj()
	};
	q.setSize = function() {
		this.P.hi()
	};

	function Nu(a) {
		var b = a.getVideoData(),
			b = O(a.L.getPlayerState(), 8) ? b.ac && !b.Ta ? "html5-bezel-stop" : "html5-bezel-pause" : "html5-bezel-play";
		a.P.Wo(b)
	}

	function Qt(a) {
		a.u.Xc = sr(a.P);
		if(a.o) {
			var b = a.getVideoData();
			0 != a.o.readyState && (b.Ga = new F(a.o.videoWidth, a.o.videoHeight));
			var c = tr(a.P, sr(a.P));
			a.u.Zg = new yc(0, 0, c.width, c.height);
			c = a.wd;
			c.u.Do && hu(c, b, n);
			a.g("resize", dk(a.u));
			a.dd("onResize")
		}
	}
	q.dc = function(a) {
		return !(!this.Jb[a] || !this.Jb[a].length)
	};
	q.Mg = function(a, b) {
		b = b || "defaultcontext";
		var c = [];
		a.forEach(function(a) {
			this.Jb[a] ? 0 > this.Jb[a].indexOf(b) && this.Jb[a].push(b) : (this.Jb[a] = [b], c.push(a))
		}, this);
		0 < c.length && this.g("controlsdisabled", c)
	};
	q.xj = function(a, b) {
		b = b || "defaultcontext";
		var c = [];
		a.forEach(function(a) {
			if(this.dc(a)) {
				var f = this.Jb[a].indexOf(b);
				0 <= f && this.Jb[a].splice(f, 1);
				0 == this.Jb[a].length && c.push(a)
			}
		}, this);
		0 < c.length && this.g("controlsenabled", c)
	};
	q.Tr = function(a, b) {
		this.uj();
		this.I = a;
		b.forEach(function(a) {
			this.xk[a] = l
		}, this)
	};
	q.uj = function() {
		this.I = m;
		this.xk = {}
	};

	function Ou(a) {
		return !a.xk.play_pause ? m : a.I
	}
	q.G = function() {
		vu(this);
		this.Nj && je(this.Nj);
		this.e.removeEventListener("tick", this.fm, n, this);
		Jf(this.Uc);
		Ua(this.Ak, this.u, this.H, this.L, this.a);
		this.ob = this.Vd = this.Rd = this.jh = this.L = this.tb = m;
		tu.C.G.call(this)
	};
	qa("yt.player.Application", tu);
})();