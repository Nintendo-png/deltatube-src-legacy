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
		function f(a) {
			throw a;
		}
		var k = void 0,
			m = !0,
			p = null,
			s = !1,
			u, w = this;

		function y(a) {
			a = a.split(".");
			for(var b = w, c; c = a.shift();)
				if(b[c] != p) b = b[c];
				else return p;
			return b
		}

		function aa(a) {
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

		function z(a) {
			return a !== k
		}

		function ba(a) {
			return "array" == aa(a)
		}

		function ca(a) {
			var b = aa(a);
			return "array" == b || "object" == b && "number" == typeof a.length
		}

		function A(a) {
			return "string" == typeof a
		}
		var da = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
			ea = 0;

		function fa(a, b, c) {
			return a.call.apply(a.bind, arguments)
		}

		function ga(a, b, c) {
			a || f(Error());
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

		function C(a, b, c) {
			C = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
			return C.apply(p, arguments)
		}

		function ha(a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function() {
				var b = Array.prototype.slice.call(arguments);
				b.unshift.apply(b, c);
				return a.apply(this, b)
			}
		}
		var ia = Date.now || function() {
			return +new Date
		};

		function D(a, b) {
			var c = a.split("."),
				d = w;
			!(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
			for(var e; c.length && (e = c.shift());) !c.length && z(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
		}

		function E(a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.F = b.prototype;
			a.prototype = new c
		}
		Function.prototype.bind = Function.prototype.bind || function(a, b) {
			if(1 < arguments.length) {
				var c = Array.prototype.slice.call(arguments, 1);
				c.unshift(this, a);
				return C.apply(p, c)
			}
			return C(this, a)
		};
		var F = {
			Pa: s,
			Ka: {
				"url-identifier": "?spf=1",
				"link-class": "spf-link",
				"nolink-class": p,
				"request-timeout": 4E3,
				"cache-lifetime": 6E4,
				"navigate-started-callback": p,
				"navigate-history-callback": p,
				"navigate-received-callback": p,
				"navigate-processed-callback": p,
				"load-received-callback": p,
				"load-processed-callback": p,
				"transition-class": "spf-transition",
				"transition-duration": 425,
				"transition-forward-parent-class": "spf-transition-forward",
				"transition-reverse-parent-class": "spf-transition-reverse",
				"transition-current-child-class": "spf-current",
				"transition-forward-child-class": "spf-forward",
				"transition-reverse-child-class": "spf-reverse"
			},
			config: {}
		};
		F.now = Date.now || function() {
			return +new Date
		};
		F.getKey = function(a) {
			return a["spf-key"] || (a["spf-key"] = F.now() + "-" + ++F.nb)
		};
		F.nb = 0;
		F.debug = {};
		F.debug.debug = function(a) {
			F.debug.log("debug", arguments)
		};
		F.debug.info = function(a) {
			F.debug.log("info", arguments)
		};
		F.debug.warn = function(a) {
			F.debug.log("warn", arguments)
		};
		F.debug.error = function(a) {
			F.debug.log("error", arguments)
		};
		F.debug.log = function(a, b) {
			if(F.Pa && window.console) {
				b = Array.prototype.slice.call(b, 0);
				var c = F.now(),
					d = c - F.debug.P;
				"debug" == a && b.unshift("  >  " + d + "ms: ");
				if(F.debug.mb) {
					c = "spf_debug_" + c;
					window[c] = b;
					for(var d = "window.console." + a + "(", e = 0, g = b.length; e < g; e++) d += 0 < e ? "," : "", d += c + "[" + e + "]";
					eval("(" + (d + ")") + ")")
				} else window.console.log(a + ": " + b.join(" "))
			}
		};
		F.debug.P = F.now();
		F.debug.mb = !(!window.console || eval("/*@cc_on!@*/false"));
		F.history = {};

		function ja(a) {
			this.h = a;
			this.a = 0;
			this.b = window.location.href;
			var b = this;
			this.k = function() {
				b.w.apply(b, arguments)
			}
		}
		ja.prototype.enable = function(a) {
			this.b = window.location.href;
			this.replace(this.b, p, a);
			window.addEventListener("popstate", this.k, s)
		};
		ja.prototype.w = function(a) {
			var b = window.location.href;
			F.debug.info("spf.history.handlePop: ", "url=", b, "evt=", a);
			F.debug.debug("new url: ", b != this.b);
			F.debug.debug("current timestamp: ", this.a);
			if(a.state)
				if(a = a.state, b == this.b) this.a = a["spf-timestamp"], F.debug.debug("replace: ", "url=", b, "state=", a), window.history.replaceState(a, "", b);
				else {
					var c = a["spf-timestamp"];
					a["spf-back"] = !!(c < this.a);
					this.a = c;
					F.debug.debug("callback: ", "url=", b, "state=", a);
					this.b = b;
					this.h(b, a)
				}
		};
		ja.prototype.add = function(a, b, c) {
			F.debug.info("spf.history.add: ", "url=", a, "state=", b);
			ka(this, s, a, b, c)
		};
		ja.prototype.replace = function(a, b, c) {
			F.debug.info("spf.history.replace: ", "url=", a, "state=", b);
			ka(this, m, a, b, c)
		};

		function ka(a, b, c, d, e) {
			if(c || d) c = c || window.location.href, d = d || {}, a.a = F.now(), d["spf-timestamp"] = a.a, b ? window.history.replaceState(d, "", c) : window.history.pushState(d, "", c), F.debug.debug("entry:  ", "url=", c, "state=", d), a.b = c, e || a.h(c, d)
		};
		F.history.init = function(a) {
			F.history.C || (F.history.L || (F.history.L = new ja(a)), F.history.L.enable(m), F.history.C = m)
		};
		F.history.D = function() {
			F.history.C && (window.removeEventListener("popstate", F.history.L.k, s), F.history.C = s)
		};
		F.history.add = function(a, b, c) {
			F.history.L.add(a, b, c)
		};
		F.history.C = s;
		F.u = {};
		F.u.get = function(a) {
			if(F.u.o && a in F.u.o) {
				var b = F.u.o[a],
					c = F.now() - b.b;
				if(isNaN(b.a) || c < b.a) return b.data;
				F.u.remove(a)
			}
		};
		F.u.set = function(a, b, c) {
			F.u.o || (F.u.o = {});
			c = parseInt(c, 10);
			0 >= c || (F.u.o[a] = new la(b, c))
		};
		F.u.remove = function(a) {
			F.u.o && a in F.u.o && delete F.u.o[a]
		};

		function la(a, b) {
			this.data = a;
			this.a = b;
			this.b = F.now()
		};
		F.g = {};
		F.g.v = {};
		F.g.v.get = function(a) {
			return a.className && a.className.match(/\S+/g) || []
		};
		F.g.v.has = Array.prototype.indexOf ? function(a, b) {
			var c = F.g.v.get(a);
			return -1 != Array.prototype.indexOf.call(c, b)
		} : function(a, b) {
			for(var c = F.g.v.get(a), d = 0, e = c.length; d < e; d++)
				if(c[d] == b) return m;
			return s
		};
		F.g.v.add = function(a, b) {
			F.g.v.has(a, b) || (a.className += " " + b)
		};
		F.g.v.remove = Array.prototype.filter ? function(a, b) {
			var c = F.g.v.get(a),
				c = Array.prototype.filter.call(c, function(a) {
					return a != b
				});
			a.className = c.join(" ")
		} : function(a, b) {
			for(var c = F.g.v.get(a), d = [], e = 0, g = c.length; e < g; e++) c[e] != b && d.push(c[e]);
			a.className = d.join(" ")
		};
		F.g.Ca = function(a, b) {
			b.parentNode.insertBefore(a, b)
		};
		F.g.Ba = function(a, b) {
			b.parentNode.insertBefore(a, b.nextSibling)
		};
		F.g.Aa = function(a) {
			var b, c = a.parentNode;
			if(c && 11 != c.nodeType) {
				if(a.removeNode) return a.removeNode(s);
				for(; b = a.firstChild;) c.insertBefore(b, a);
				return c.removeChild(a)
			}
		};
		F.g.Ua = function(a, b) {
			if(b) {
				for(var c; c = a.firstChild;) b.appendChild(c);
				a.appendChild(b)
			}
		};
		F.g.ua = function(a, b) {
			for(; a;) {
				if(b(a)) return a;
				a = a.parentNode
			}
			return p
		};
		F.g.dataset = {};
		F.g.dataset.get = function(a, b) {
			return a.dataset ? a.dataset[b] : a.getAttribute("data-" + F.q.Oa(b))
		};
		F.g.dataset.set = function(a, b, c) {
			a.dataset ? a.dataset[b] = c : a.setAttribute("data-" + F.q.Oa(b), c)
		};
		F.pubsub = {};
		F.pubsub.J = function(a, b, c) {
			a in F.pubsub.i || (F.pubsub.i[a] = []);
			F.pubsub.i[a].push([b, c])
		};
		F.pubsub.va = function(a, b, c) {
			if(a in F.pubsub.i) {
				a = F.pubsub.i[a];
				for(var d = 0, e = a.length; d < e; d++)
					if(a[d] && a[d][0] == b && a[d][1] == c) {
						a[d] = p;
						break
					}
			}
		};
		F.pubsub.t = function(a, b) {
			if(a in F.pubsub.i)
				for(var c = F.pubsub.i[a], d = Array.prototype.slice.call(arguments, 1), e = 0, g = c.length; e < g; e++) c[e] && c[e][0].apply(c[e][1], d)
		};
		F.pubsub.clear = function(a) {
			a ? a in F.pubsub.i && delete F.pubsub.i[a] : F.pubsub.i = {}
		};
		F.pubsub.i = {};
		F.q = {};
		F.q.contains = function(a, b) {
			return -1 != a.indexOf(b)
		};
		F.q.Za = function(a) {
			return 0 == a.lastIndexOf("?", 0)
		};
		F.q.ab = function(a) {
			var b = a.length - 9;
			return 0 <= b && a.indexOf("-callback", b) == b
		};
		F.q.la = function(a) {
			for(var b = 0, c = 0, d = a.length; c < d; ++c) b = 31 * b + a.charCodeAt(c), b %= 4294967296;
			return b
		};
		F.q.Oa = function(a) {
			return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
		};
		F.d = {};
		F.d.scripts = {};
		F.d.scripts.eval = function(a, b) {
			if(window.execScript) window.execScript(a, "JavaScript");
			else {
				var c = document.createElement("script");
				c.appendChild(document.createTextNode(a));
				var d = document.getElementsByTagName("head")[0];
				d.insertBefore(c, d.firstChild)
			}
			b && b()
		};
		F.d.scripts.load = function(a, b) {
			var c = F.d.scripts.$ + F.q.la(a),
				d = document.getElementById(c),
				e = d && F.g.dataset.get(d, "loaded"),
				g = d && !e;
			if(e) return b && b(), d;
			b && F.pubsub.J(c, b);
			if(g) return d;
			var h = F.d.scripts.ca(a, c, function() {
				F.g.dataset.get(h, "loaded") || (F.g.dataset.set(h, "loaded", "true"), F.pubsub.t(c), F.pubsub.clear(c))
			});
			return h
		};
		F.d.scripts.ca = function(a, b, c) {
			var d = document.createElement("script");
			d.id = b;
			d.onload = function() {
				setTimeout(c, 0)
			};
			d.onreadystatechange = function() {
				switch(d.readyState) {
					case "loaded":
					case "complete":
						d.onload()
				}
			};
			d.src = a;
			a = document.getElementsByTagName("head")[0];
			a.insertBefore(d, a.firstChild);
			return d
		};
		F.d.scripts.ob = function(a) {
			a = F.d.scripts.$ + F.q.la(a);
			var b = document.getElementById(a);
			b && (F.pubsub.clear(a), b.parentNode.removeChild(b))
		};
		F.d.scripts.execute = function(a, b) {
			if(a) {
				var c = [];
				a = a.replace(F.d.scripts.ib, function(a, b, d) {
					(a = b.match(F.d.scripts.jb)) ? c.push([a[1], m]): c.push([d, s]);
					return ""
				});
				var d = function() {
					if(0 < c.length) {
						var a = c.shift(),
							g = a[0];
						a[1] ? F.d.scripts.load(g, d) : F.d.scripts.eval(g, d)
					} else b && b()
				};
				d()
			} else b && b()
		};
		F.d.scripts.$ = "js-";
		F.d.scripts.ib = /\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig;
		F.d.scripts.jb = /src="([\S]+)"/;
		F.d.styles = {};
		F.d.styles.eval = function(a) {
			var b = document.createElement("style");
			document.getElementsByTagName("head")[0].appendChild(b);
			"styleSheet" in b ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a))
		};
		F.d.styles.load = function(a) {
			var b = F.d.styles.$ + F.q.la(a),
				c = document.getElementById(b);
			if(c) return c;
			c = document.createElement("link");
			c.id = b;
			c.rel = "stylesheet";
			c.href = a;
			document.getElementsByTagName("head")[0].appendChild(c);
			return c
		};
		F.d.styles.ob = function(a) {
			(a = document.getElementById(F.d.styles.$ + F.q.la(a))) && a.parentNode.removeChild(a)
		};
		F.d.styles.Va = function(a) {
			a && (a.replace(F.d.styles.fb, function(a, c) {
				if(F.q.contains(c, 'rel="stylesheet"')) {
					var d = c.match(F.d.styles.eb);
					d && F.d.styles.load(d[1])
				}
			}), a.replace(F.d.styles.gb, function(a, c, d) {
				d && F.d.styles.eval(d)
			}))
		};
		F.d.styles.$ = "css-";
		F.d.styles.fb = /\x3clink([\s\S]*?)\x3e/ig;
		F.d.styles.gb = /\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style/ig;
		F.d.styles.eb = /href="([\S]+)"/;
		F.d.G = {};
		F.d.G.get = function(a, b) {
			return F.d.G.send("GET", a, p, b)
		};
		F.d.G.vb = function(a, b, c) {
			return F.d.G.send("POST", a, b, c)
		};
		F.d.G.send = function(a, b, c, d) {
			c = d || {};
			var e = c.H || function() {},
				g = c.onError || function() {},
				h = c.ta || function() {},
				j, l = F.d.G.create();
			l.open(a, b, m);
			var n = l.abort;
			l.abort = function() {
				clearTimeout(j);
				l.onreadystatechange = p;
				n.call(l)
			};
			l.onreadystatechange = function() {
				if(4 == l.readyState) switch(clearTimeout(j), l.status) {
					case 200:
					case 204:
					case 304:
						e(l);
						break;
					default:
						g(l)
				}
			};
			0 < c.Ja && (j = setTimeout(function() {
				l.abort();
				h(l)
			}, c.Ja));
			l.send(p);
			return l
		};
		var ma;
		ma = "XMLHttpRequest" in window ? function() {
			return new XMLHttpRequest
		} : "ActiveXObject" in window ? function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		} : k;
		F.d.G.create = ma;
		F.e = {};
		F.e.init = function() {
			F.e.C || (document.addEventListener("click", F.e.Ma, s), F.e.C = m)
		};
		F.e.D = function() {
			F.e.C && (document.removeEventListener("click", F.e.Ma, s), F.e.C = s)
		};
		F.e.Ma = function(a) {
			F.debug.info("nav.handleClick", a);
			if(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) F.debug.warn("ignoring click with modifier key");
			else {
				var b = F.g.ua(a.target, function(a) {
					return F.g.v.has(a, F.config["link-class"])
				});
				if(b && (!F.config["nolink-class"] || !F.g.ua(a.target, function(a) {
						return F.g.v.has(a, F.config["nolink-class"])
					})))
					if(b = b.href, !b || b == window.location.href) a.preventDefault();
					else {
						F.pubsub.t("navigate-started-callback", b);
						try {
							F.history.add(b), a.preventDefault()
						} catch(c) {
							F.debug.error(">> error caught, ignoring click", c)
						}
					}
			}
		};
		F.e.bb = function(a, b) {
			var c = !(!b || !b["spf-back"]);
			F.debug.info("nav.handleHistory: ", "url=", a, "state=", b);
			F.pubsub.t("navigate-history-callback", a);
			F.e.hb(a, c)
		};
		F.e.navigate = function(a) {
			if(a && a != window.location.href) {
				F.pubsub.t("navigate-started-callback", a);
				try {
					F.history.add(a)
				} catch(b) {
					F.debug.error(">> error caught, redirecting", b), window.location.href = a
				}
			}
		};
		F.e.hb = function(a, b) {
			F.debug.info("nav.navigate", a, b);
			if(F.e.C) {
				F.e.T && (F.debug.warn("    >> aborting previous navigate", F.e.T), F.e.T.abort(), F.e.T = p);
				var c = F.e.La(a, function(a, c) {
					F.e.T = p;
					F.e.ba(c, b, "navigate-processed-callback")
				}, function(a) {
					F.e.T = p;
					window.location.href = a
				}, "navigate-received-callback");
				F.e.T = c
			} else F.debug.error(">> nav not initialized")
		};
		F.e.load = function(a, b, c) {
			F.debug.info("nav.load", a);
			return F.e.La(a, function(a, c) {
				F.e.ba(c, s, "load-processed-callback");
				b && b(a, c)
			}, function(a) {
				c && c(a)
			}, "load-received-callback")
		};
		F.e.La = function(a, b, c, d) {
			function e(c) {
				try {
					var e = "JSON" in window ? JSON.parse(c.responseText) : eval("(" + c.responseText + ")")
				} catch(h) {
					g();
					return
				}
				F.u.set(a, e, F.config["cache-lifetime"]);
				d && F.pubsub.t(d, a, e);
				b && b(a, e)
			}

			function g() {
				c && c(a)
			}
			F.debug.info("nav.request", a);
			var h = a,
				j = F.config["url-identifier"] || "";
			j && !F.q.contains(h, j) && F.q.Za(j) && (h = F.q.contains(h, "?") ? h + j.replace("?", "&") : h + j);
			if(j = F.u.get(a)) F.debug.info("    >> cached response found", j), d && F.pubsub.t(d, a, j), b && b(a, j);
			else return F.debug.info("    >> fetching XHR"),
				F.d.G.get(h, {
					Ja: F.config["request-timeout"],
					H: e,
					onError: g,
					ta: g
				})
		};
		F.e.ba = function(a, b, c) {
			function d() {
				0 == e && (F.d.scripts.execute(a.js, function() {
					c && F.pubsub.t(c, a)
				}), e--)
			}
			F.debug.info("nav.process", a, b);
			F.d.styles.Va(a.css);
			a.title && (document.title = a.title);
			var e = 0,
				g = a.html || {};
			if(Object.keys) e = Object.keys(g).length;
			else
				for(var h in g) e++;
			for(h in g)
				if(g = document.getElementById(h)) {
					var j = F.getKey(g);
					if(!F.e.Sa || !F.g.v.has(g, F.config["transition-class"])) g.innerHTML = a.html[h], F.d.scripts.execute(a.html[h], function() {
						e--;
						d()
					});
					else {
						F.e.ia(j, m);
						var l = [],
							n = {};
						n.reverse = !!b;
						n.R = g;
						n.Ta = F.config["transition-current-child-class"];
						n.reverse ? (n.Da = F.config["transition-reverse-child-class"], n.ra = F.config["transition-reverse-parent-class"]) : (n.Da = F.config["transition-forward-child-class"], n.ra = F.config["transition-forward-parent-class"]);
						l.push([function(b, c) {
							b.X = document.createElement("div");
							b.X.className = b.Ta;
							F.g.Ua(b.R, b.X);
							b.Y = document.createElement("div");
							b.Y.className = b.Da;
							b.Y.innerHTML = a.html[b.R.id];
							b.reverse ? F.g.Ca(b.Y, b.X) : F.g.Ba(b.Y, b.X);
							c()
						}, 0]);
						l.push([function(a, b) {
							F.g.v.add(a.R, a.ra);
							b()
						}, 0]);
						l.push([function(a, b) {
							a.R.removeChild(a.X);
							F.g.v.remove(a.R, a.ra);
							F.g.Aa(a.Y);
							b()
						}, F.config["transition-duration"]]);
						l.push([function(b, c) {
							F.d.scripts.execute(a.html[b.R.id], function() {
								e--;
								d();
								c()
							})
						}, 0]);
						F.e.za[j] = {
							ya: 0,
							xa: l,
							data: n
						};
						F.e.ia(j)
					}
				}
			d()
		};
		F.e.ia = function(a, b) {
			var c = F.e.za;
			if(a in c)
				if(0 < c[a].xa.length) {
					var d = c[a].xa.shift();
					if(b) d[0](c[a].data, function() {
						F.e.ia(a, b)
					});
					else c[a].ya = setTimeout(function() {
						d[0](c[a].data, function() {
							F.e.ia(a, b)
						})
					}, d[1])
				} else clearTimeout(c[a].ya), delete c[a]
		};
		F.e.C = s;
		F.e.za = {};
		var na = F.e,
			oa;
		a: {
			for(var pa = document.createElement("div"), qa = ["Webkit", "Moz", "Ms", "O", "Khtml"], ra = 0, sa = qa.length; ra < sa; ra++)
				if(qa[ra] + "Transition" in pa.style) {
					oa = m;
					break a
				}
			oa = s
		}
		na.Sa = oa;
		F.na = {};
		F.na.init = function(a) {
			var b = !!window.history.pushState;
			F.debug.info("main.init", b, a);
			a = a || {};
			for(var c in F.Ka) {
				var d = c in a ? a[c] : F.Ka[c];
				F.config[c] = d;
				b && (d && F.q.ab(c)) && F.pubsub.J(c, d)
			}
			b && (F.history.init(F.e.bb), F.e.init());
			return b
		};
		F.na.D = function() {
			F.e.D();
			F.history.D();
			F.pubsub.clear();
			F.config = {}
		};
		F.init = F.na.init;
		F.D = F.na.D;
		F.navigate = F.e.navigate;
		F.load = F.e.load;
		F.ba = F.e.ba;
		window.spf = F.Pa ? F : {
			init: F.init,
			dispose: F.D,
			navigate: F.navigate,
			load: F.load,
			process: F.ba
		};
		var G = Array.prototype,
			ta = G.indexOf ? function(a, b, c) {
				return G.indexOf.call(a, b, c)
			} : function(a, b, c) {
				c = c == p ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
				if(A(a)) return !A(b) || 1 != b.length ? -1 : a.indexOf(b, c);
				for(; c < a.length; c++)
					if(c in a && a[c] === b) return c;
				return -1
			},
			I = G.forEach ? function(a, b, c) {
				G.forEach.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = A(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
			},
			ua = G.filter ? function(a, b, c) {
				return G.filter.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = [], g = 0, h = A(a) ? a.split("") : a, j = 0; j < d; j++)
					if(j in h) {
						var l = h[j];
						b.call(c, l, j, a) && (e[g++] = l)
					}
				return e
			},
			va = G.map ? function(a, b, c) {
				return G.map.call(a, b, c)
			} : function(a, b, c) {
				for(var d = a.length, e = Array(d), g = A(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
				return e
			};

		function wa(a, b) {
			for(var c = 1; c < arguments.length; c++) {
				var d = arguments[c],
					e;
				if(ba(d) || (e = ca(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
				else if(e)
					for(var g = a.length, h = d.length, j = 0; j < h; j++) a[g + j] = d[j];
				else a.push(d)
			}
		}

		function xa(a, b, c, d) {
			G.splice.apply(a, ya(arguments, 1))
		}

		function ya(a, b, c) {
			return 2 >= arguments.length ? G.slice.call(a, b) : G.slice.call(a, b, c)
		};

		function za() {}
		za.prototype.b = s;
		za.prototype.D = function() {
			this.b || (this.b = m, this.qa())
		};
		za.prototype.qa = function() {
			this.k && Aa.apply(p, this.k);
			if(this.h)
				for(; this.h.length;) this.h.shift()()
		};

		function Aa(a) {
			for(var b = 0, c = arguments.length; b < c; ++b) {
				var d = arguments[b];
				ca(d) ? Aa.apply(p, d) : d && "function" == typeof d.D && d.D()
			}
		};

		function J() {
			this.i = [];
			this.A = {}
		}
		E(J, za);
		u = J.prototype;
		u.Na = 1;
		u.ka = 0;
		u.J = function(a, b, c) {
			var d = this.A[a];
			d || (d = this.A[a] = []);
			var e = this.Na;
			this.i[e] = a;
			this.i[e + 1] = b;
			this.i[e + 2] = c;
			this.Na = e + 3;
			d.push(e);
			return e
		};
		u.va = function(a, b, c) {
			if(a = this.A[a]) {
				var d = this.i,
					e;
				a: {
					e = function(a) {
						return d[a + 1] == b && d[a + 2] == c
					};
					for(var g = a.length, h = A(a) ? a.split("") : a, j = 0; j < g; j++)
						if(j in h && e.call(k, h[j])) {
							e = j;
							break a
						}
					e = -1
				}
				if(a = 0 > e ? p : A(a) ? a.charAt(e) : a[e]) return this.ja(a)
			}
			return s
		};
		u.ja = function(a) {
			if(0 != this.ka) return this.a || (this.a = []), this.a.push(a), s;
			var b = this.i[a];
			if(b) {
				var c = this.A[b];
				if(c) {
					var d = ta(c, a);
					0 <= d && G.splice.call(c, d, 1)
				}
				delete this.i[a];
				delete this.i[a + 1];
				delete this.i[a + 2]
			}
			return !!b
		};
		u.t = function(a, b) {
			var c = this.A[a];
			if(c) {
				this.ka++;
				for(var d = ya(arguments, 1), e = 0, g = c.length; e < g; e++) {
					var h = c[e];
					this.i[h + 1].apply(this.i[h + 2], d)
				}
				this.ka--;
				if(this.a && 0 == this.ka)
					for(; c = this.a.pop();) this.ja(c);
				return 0 != e
			}
			return s
		};
		u.clear = function(a) {
			if(a) {
				var b = this.A[a];
				b && (I(b, this.ja, this), delete this.A[a])
			} else this.i.length = 0, this.A = {}
		};
		u.qa = function() {
			J.F.qa.call(this);
			delete this.i;
			delete this.A;
			delete this.a
		};
		var Ba = window.yt && window.yt.config_ || {};
		D("yt.config_", Ba);
		var Ca = window.yt && window.yt.tokens_ || {};
		D("yt.tokens_", Ca);
		D("yt.globals_", window.yt && window.yt.globals_ || {});
		D("yt.msgs_", window.yt && window.yt.msgs_ || {});
		var Da = window.yt && window.yt.timeouts_ || [];
		D("yt.timeouts_", Da);
		var Ea = window.yt && window.yt.intervals_ || [];
		D("yt.intervals_", Ea);

		function Fa(a) {
			Ga(Ba, arguments)
		}

		function Ha(a, b) {
			return a in Ba ? Ba[a] : b
		}

		function Ia(a) {
			Ga(Ca, arguments)
		}

		function Ja(a) {
			return a in Ca ? Ca[a] : k
		}

		function K(a, b) {
			var c = window.setTimeout(a, b);
			Da.push(c);
			return c
		}

		function Ga(a, b) {
			if(1 < b.length) {
				var c = b[0];
				a[c] = b[1]
			} else {
				var d = b[0];
				for(c in d) a[c] = d[c]
			}
		};
		var Ka = y("yt.pubsub.instance_") || new J;
		J.prototype.subscribe = J.prototype.J;
		J.prototype.unsubscribeByKey = J.prototype.ja;
		J.prototype.publish = J.prototype.t;
		J.prototype.clear = J.prototype.clear;
		D("yt.pubsub.instance_", Ka);

		function La(a, b, c) {
			var d = y("yt.pubsub.instance_");
			return d ? d.subscribe(a, function() {
				var a = arguments;
				K(function() {
					b.apply(c || w, a)
				}, 0)
			}, c) : 0
		}

		function Ma(a, b) {
			var c = y("yt.pubsub.instance_");
			return c ? c.publish.apply(c, arguments) : s
		};

		function L(a, b) {
			this.x = z(a) ? a : 0;
			this.y = z(b) ? b : 0
		}
		L.prototype.K = function() {
			return new L(this.x, this.y)
		};

		function Na(a, b) {
			return new L(a.x - b.x, a.y - b.y)
		};

		function Oa(a, b) {
			this.width = a;
			this.height = b
		}
		Oa.prototype.K = function() {
			return new Oa(this.width, this.height)
		};
		Oa.prototype.floor = function() {
			this.width = Math.floor(this.width);
			this.height = Math.floor(this.height);
			return this
		};
		Oa.prototype.round = function() {
			this.width = Math.round(this.width);
			this.height = Math.round(this.height);
			return this
		};
		Oa.prototype.scale = function(a) {
			this.width *= a;
			this.height *= a;
			return this
		};

		function Pa(a, b) {
			for(var c in a) b.call(k, a[c], c, a)
		}
		var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

		function Ra(a, b) {
			for(var c, d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for(c in d) a[c] = d[c];
				for(var g = 0; g < Qa.length; g++) c = Qa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		};
		var Sa, Ta, Ua, Va, Wa;

		function Xa() {
			return w.navigator ? w.navigator.userAgent : p
		}

		function Ya() {
			return w.navigator
		}
		Va = Ua = Ta = Sa = s;
		var Za;
		if(Za = Xa()) {
			var $a = Ya();
			Sa = 0 == Za.indexOf("Opera");
			Ta = !Sa && -1 != Za.indexOf("MSIE");
			Ua = !Sa && -1 != Za.indexOf("WebKit");
			Va = !Sa && !Ua && "Gecko" == $a.product
		}
		var ab = Sa,
			M = Ta,
			N = Va,
			O = Ua,
			bb = Ya();
		Wa = -1 != (bb && bb.platform || "").indexOf("Mac");
		var cb = !!Ya() && -1 != (Ya().appVersion || "").indexOf("X11");

		function db() {
			var a = w.document;
			return a ? a.documentMode : k
		}
		var eb;
		a: {
			var fb = "",
				gb;
			if(ab && w.opera) var hb = w.opera.version,
				fb = "function" == typeof hb ? hb() : hb;
			else if(N ? gb = /rv\:([^\);]+)(\)|;)/ : M ? gb = /MSIE\s+([^\);]+)(\)|;)/ : O && (gb = /WebKit\/(\S+)/), gb) var ib = gb.exec(Xa()),
				fb = ib ? ib[1] : "";
			if(M) {
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

		function mb(a) {
			var b;
			if(!(b = lb[a])) {
				b = 0;
				for(var c = String(kb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), g = 0; 0 == b && g < e; g++) {
					var h = c[g] || "",
						j = d[g] || "",
						l = RegExp("(\\d*)(\\D*)", "g"),
						n = RegExp("(\\d*)(\\D*)", "g");
					do {
						var q = l.exec(h) || ["", "", ""],
							r = n.exec(j) || ["", "", ""];
						if(0 == q[0].length && 0 == r[0].length) break;
						b = ((0 == q[1].length ? 0 : parseInt(q[1], 10)) < (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? -1 : (0 == q[1].length ? 0 : parseInt(q[1], 10)) > (0 == r[1].length ? 0 : parseInt(r[1], 10)) ? 1 : 0) || ((0 == q[2].length) < (0 == r[2].length) ? -1 : (0 == q[2].length) > (0 == r[2].length) ? 1 : 0) || (q[2] < r[2] ? -1 : q[2] > r[2] ? 1 : 0)
					} while (0 == b)
				}
				b = lb[a] = 0 <= b
			}
			return b
		}
		var nb = w.document,
			ob = !nb || !M ? k : db() || ("CSS1Compat" == nb.compatMode ? parseInt(kb, 10) : 5);
		var pb;
		!N && !M || M && M && 9 <= ob || N && mb("1.9.1");
		M && mb("9");

		function qb(a) {
			a = a.className;
			return A(a) && a.match(/\S+/g) || []
		}

		function rb(a, b) {
			var c = qb(a),
				d = ya(arguments, 1);
			sb(c, d);
			a.className = c.join(" ")
		}

		function tb(a, b) {
			var c = qb(a),
				d = ya(arguments, 1),
				c = ub(c, d);
			a.className = c.join(" ")
		}

		function sb(a, b) {
			for(var c = 0; c < b.length; c++) 0 <= ta(a, b[c]) || a.push(b[c])
		}

		function ub(a, b) {
			return ua(a, function(a) {
				return !(0 <= ta(b, a))
			})
		}

		function vb(a, b, c) {
			var d = qb(a);
			if(A(b)) {
				var e = d;
				b = ta(e, b);
				0 <= b && G.splice.call(e, b, 1)
			} else ba(b) && (d = ub(d, b));
			A(c) && !(0 <= ta(d, c)) ? d.push(c) : ba(c) && sb(d, c);
			a.className = d.join(" ")
		}

		function wb(a, b) {
			var c = qb(a);
			return 0 <= ta(c, b)
		}

		function P(a, b, c) {
			c ? rb(a, b) : tb(a, b)
		};

		function xb(a) {
			return a ? new yb(R(a)) : pb || (pb = new yb)
		}

		function zb(a, b) {
			var c = b || document;
			return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Ab("*", a, b)
		}

		function Bb(a, b) {
			var c = b || document,
				d = p;
			return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : zb(a, b)[0]) || p
		}

		function Ab(a, b, c) {
			var d = document;
			c = c || d;
			a = a && "*" != a ? a.toUpperCase() : "";
			if(c.querySelectorAll && c.querySelector && (a || b)) return c.querySelectorAll(a + (b ? "." + b : ""));
			if(b && c.getElementsByClassName) {
				c = c.getElementsByClassName(b);
				if(a) {
					for(var d = {}, e = 0, g = 0, h; h = c[g]; g++) a == h.nodeName && (d[e++] = h);
					d.length = e;
					return d
				}
				return c
			}
			c = c.getElementsByTagName(a || "*");
			if(b) {
				d = {};
				for(g = e = 0; h = c[g]; g++) a = h.className, "function" == typeof a.split && 0 <= ta(a.split(/\s+/), b) && (d[e++] = h);
				d.length = e;
				return d
			}
			return c
		}

		function Cb(a) {
			return a && a.parentNode ? a.parentNode.removeChild(a) : p
		}

		function R(a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		}

		function Db(a, b, c) {
			if(!b && !c) return p;
			var d = b ? b.toUpperCase() : p;
			return Eb(a, function(a) {
				return(!d || a.nodeName == d) && (!c || wb(a, c))
			}, m)
		}

		function Eb(a, b, c, d) {
			c || (a = a.parentNode);
			c = d == p;
			for(var e = 0; a && (c || e <= d);) {
				if(b(a)) return a;
				a = a.parentNode;
				e++
			}
			return p
		}

		function yb(a) {
			this.a = a || w.document || document
		}
		u = yb.prototype;
		u.createElement = function(a) {
			return this.a.createElement(a)
		};

		function Fb(a) {
			return "CSS1Compat" == a.a.compatMode
		}

		function Gb(a) {
			var b = a.a;
			a = !O && "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
			b = b.parentWindow || b.defaultView;
			return new L(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
		}
		u.appendChild = function(a, b) {
			a.appendChild(b)
		};
		u.Ca = function(a, b) {
			b.parentNode && b.parentNode.insertBefore(a, b)
		};
		u.Ba = function(a, b) {
			b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
		};
		u.Aa = function(a) {
			var b, c = a.parentNode;
			if(c && 11 != c.nodeType) {
				if(a.removeNode) return a.removeNode(s);
				for(; b = a.firstChild;) c.insertBefore(b, a);
				return Cb(a)
			}
		};
		u.contains = function(a, b) {
			if(a.contains && 1 == b.nodeType) return a == b || a.contains(b);
			if("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
			for(; b && a != b;) b = b.parentNode;
			return b == a
		};
		u.ua = Eb;

		function Hb(a) {
			this.a = a
		}
		var Ib = /\s*;\s*/;
		u = Hb.prototype;
		u.set = function(a, b, c, d, e, g) {
			/[;=\s]/.test(a) && f(Error('Invalid cookie name "' + a + '"'));
			/[;\r\n]/.test(b) && f(Error('Invalid cookie value "' + b + '"'));
			z(c) || (c = -1);
			e = e ? ";domain=" + e : "";
			d = d ? ";path=" + d : "";
			g = g ? ";secure" : "";
			c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(ia() + 1E3 * c)).toUTCString();
			this.a.cookie = a + "=" + b + e + d + c + g
		};
		u.get = function(a, b) {
			for(var c = a + "=", d = (this.a.cookie || "").split(Ib), e = 0, g; g = d[e]; e++) {
				if(0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
				if(g == a) return ""
			}
			return b
		};
		u.remove = function(a, b, c) {
			var d = z(this.get(a));
			this.set(a, "", 0, b, c);
			return d
		};
		u.Ea = function() {
			return Jb(this).keys
		};
		u.Fa = function() {
			return Jb(this).$a
		};
		u.clear = function() {
			for(var a = Jb(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
		};

		function Jb(a) {
			a = (a.a.cookie || "").split(Ib);
			for(var b = [], c = [], d, e, g = 0; e = a[g]; g++) d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
			return {
				keys: b,
				$a: c
			}
		}
		var Kb = new Hb(document);
		Kb.b = 3950;
		var Lb = y("yt.prefs.UserPrefs.prefs_") || {};
		D("yt.prefs.UserPrefs.prefs_", Lb);

		function S(a, b) {
			return a.dataset ? a.dataset[Mb(b)] : a.getAttribute("data-" + b)
		}

		function Nb(a, b) {
			a.dataset ? delete a.dataset[Mb(b)] : a.removeAttribute("data-" + b)
		}
		var Ob = {};

		function Mb(a) {
			return Ob[a] || (Ob[a] = String(a).replace(/\-([a-z])/g, function(a, c) {
				return c.toUpperCase()
			}))
		};
		var Pb = y("yt.dom.getNextId_");
		if(!Pb) {
			Pb = function() {
				return ++Qb
			};
			D("yt.dom.getNextId_", Pb);
			var Qb = 0
		};

		function Sb(a) {
			if(a = a || window.event) {
				for(var b in a) b in Tb || (this[b] = a[b]);
				this.scale = a.scale;
				this.rotation = a.rotation;
				this.ma = a;
				if((b = a.target || a.srcElement) && 3 == b.nodeType) b = b.parentNode;
				this.target = b;
				if(b = a.relatedTarget) try {
					b = b.nodeName && b
				} catch(c) {
					b = p
				} else "mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
				this.relatedTarget = b;
				this.clientX = a.clientX != k ? a.clientX : a.pageX;
				this.clientY = a.clientY != k ? a.clientY : a.pageY;
				if(document.body && document.documentElement) {
					b = document.body.scrollLeft + document.documentElement.scrollLeft;
					var d = document.body.scrollTop + document.documentElement.scrollTop;
					this.pageX = a.pageX != k ? a.pageX : a.clientX + b;
					this.pageY = a.pageY != k ? a.pageY : a.clientY + d
				}
				this.keyCode = a.keyCode ? a.keyCode : a.which;
				this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
				this.altKey = a.altKey;
				this.ctrlKey = a.ctrlKey;
				this.shiftKey = a.shiftKey;
				"MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis == a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform" in document.documentElement.style ? window.a && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
			}
		}
		u = Sb.prototype;
		u.ma = p;
		u.type = "";
		u.target = p;
		u.relatedTarget = p;
		u.currentTarget = p;
		u.data = p;
		u.state = p;
		u.keyCode = 0;
		u.charCode = 0;
		u.altKey = s;
		u.ctrlKey = s;
		u.shiftKey = s;
		u.clientX = 0;
		u.clientY = 0;
		u.pageX = 0;
		u.pageY = 0;
		u.wheelDeltaX = 0;
		u.wheelDeltaY = 0;
		u.rotation = 0;
		u.scale = 1;
		u.preventDefault = function() {
			this.ma.returnValue = s;
			this.ma.preventDefault && this.ma.preventDefault()
		};
		var Tb = {
			stopPropagation: 1,
			preventMouseEvent: 1,
			preventManipulation: 1,
			preventDefault: 1,
			layerX: 1,
			layerY: 1,
			scale: 1,
			rotation: 1
		};
		var Ub = y("yt.events.listeners_") || {};
		D("yt.events.listeners_", Ub);
		var Vb = y("yt.events.counter_") || {
			count: 0
		};
		D("yt.events.counter_", Vb);

		function Wb(a, b, c, d) {
			var e;
			a: {
				e = function(e) {
					return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
				};
				for(var g in Ub)
					if(e.call(k, Ub[g])) {
						e = g;
						break a
					}
				e = k
			}
			return e
		}

		function T(a, b, c, d) {
			if(!a || !a.addEventListener && !a.attachEvent) return "";
			d = !!d;
			var e = Wb(a, b, c, d);
			if(e) return e;
			var e = ++Vb.count + "",
				g = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter" in document),
				h;
			h = g ? function(d) {
				d = new Sb(d);
				if(!Eb(d.relatedTarget, function(b) {
						return b == a
					}, m)) return d.currentTarget = a, d.type = b, c.call(a, d)
			} : function(b) {
				b = new Sb(b);
				b.currentTarget = a;
				return c.call(a, b)
			};
			Ub[e] = [a, b, c, h, d];
			a.addEventListener ? "mouseenter" == b && g ? a.addEventListener("mouseover", h, d) : "mouseleave" == b && g ? a.addEventListener("mouseout", h, d) : "mousewheel" == b && "MozBoxSizing" in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", h, d) : a.addEventListener(b, h, d) : a.attachEvent("on" + b, h);
			return e
		}

		function Xb(a, b, c) {
			var d;
			d = T(a, b, function() {
				Yb(d);
				c.apply(a, arguments)
			}, k)
		}

		function Zb(a, b, c) {
			var d = a || document;
			T(d, "click", function(a) {
				var g = Eb(a.target, function(a) {
					return a === d || wb(a, c)
				}, m);
				g && g !== d && (a.currentTarget = g, b.call(g, a))
			})
		}

		function Yb(a) {
			"string" == typeof a && (a = [a]);
			I(a, function(a) {
				if(a in Ub) {
					var c = Ub[a],
						d = c[0],
						e = c[1],
						g = c[3],
						c = c[4];
					d.removeEventListener ? d.removeEventListener(e, g, c) : d.detachEvent("on" + e, g);
					delete Ub[a]
				}
			})
		};

		function $b(a) {
			this.h = 1E3 / a;
			this.b = p;
			this.a = []
		}
		var ac = new $b(24);
		$b.prototype.k = function() {
			for(var a = ia(), b = this.a.length - 1; 0 <= b; b--) bc(this.a[b], a) && cc(this, b)
		};
		$b.prototype.add = function(a) {
			this.a.push(a);
			this.b || (a = C(this.k, this), a = window.setInterval(a, this.h), Ea.push(a), this.b = a)
		};
		$b.prototype.remove = function(a) {
			a = ta(this.a, a);
			0 <= a && cc(this, a)
		};

		function cc(a, b) {
			G.splice.call(a.a, b, 1);
			a.a.length || (window.clearInterval(a.b), delete a.b)
		};

		function dc(a, b, c, d, e, g, h, j) {
			this.a = a;
			this.w = b;
			this.b = c;
			this.I = d;
			this.h = e;
			this.Q = g;
			this.k = h;
			this.pa = j
		}
		dc.prototype.K = function() {
			return new dc(this.a, this.w, this.b, this.I, this.h, this.Q, this.k, this.pa)
		};

		function ec(a, b) {
			if(0 == b) return new L(a.a, a.w);
			if(1 == b) return new L(a.k, a.pa);
			var c = a.a + b * (a.b - a.a),
				d = a.w + b * (a.I - a.w),
				e = a.b + b * (a.h - a.b),
				g = a.I + b * (a.Q - a.I),
				h = a.h + b * (a.k - a.h),
				j = a.Q + b * (a.pa - a.Q),
				c = c + b * (e - c),
				d = d + b * (g - d);
			return new L(c + b * (e + b * (h - e) - c), d + b * (g + b * (j - g) - d))
		}

		function fc(a, b) {
			var c = (b - a.a) / (a.k - a.a);
			if(0 >= c) return 0;
			if(1 <= c) return 1;
			for(var d = 0, e = 1, g = 0; 8 > g; g++) {
				var h = ec(a, c).x,
					j = (ec(a, c + 1E-6).x - h) / 1E-6;
				if(1E-6 > Math.abs(h - b)) return c;
				if(1E-6 > Math.abs(j)) break;
				else h < b ? d = c : e = c, c -= (h - b) / j
			}
			for(g = 0; 1E-6 < Math.abs(h - b) && 8 > g; g++) h < b ? (d = c, c = (c + e) / 2) : (e = c, c = (c + d) / 2), h = ec(a, c).x;
			return c
		};

		function gc(a, b) {
			this.a = new dc(0, 0, a.x, a.y, b.x, b.y, 1, 1)
		}

		function hc(a) {
			return a
		}
		var ic = new gc({
			x: 0.25,
			y: 0.1
		}, {
			x: 0.25,
			y: 1
		});

		function jc(a) {
			return ec(ic.a, fc(ic.a, a)).y
		}
		var kc = new gc({
			x: 0.42,
			y: 0
		}, {
			x: 1,
			y: 1
		});

		function lc(a) {
			return ec(kc.a, fc(kc.a, a)).y
		}
		var mc = new gc({
			x: 0,
			y: 0
		}, {
			x: 0.58,
			y: 1
		});

		function nc(a) {
			return ec(mc.a, fc(mc.a, a)).y
		}
		var oc = new gc({
			x: 0.42,
			y: 0
		}, {
			x: 0.58,
			y: 1
		});

		function pc(a) {
			return ec(oc.a, fc(oc.a, a)).y
		}

		function qc(a) {
			switch(a) {
				case "linear":
					return hc;
				case "ease-in":
					return lc;
				case "ease-out":
					return nc;
				case "ease-in-out":
					return pc;
				default:
					return jc
			}
		};

		function rc(a, b) {
			var c = b || {};
			this.p = a;
			this.Ga = c.duration || 0.25;
			this.b = 1E3 * this.Ga;
			this.fa = c.U || p;
			this.wa = c.qb || "ease";
			this.B(c);
			c.pb || this.w()
		}
		rc.prototype.B = function() {};
		var sc;

		function tc() {
			if(!z(sc)) {
				var a = document.createElement("div");
				z(a.style.MozTransition) ? sc = "Moz" : z(a.style.WebkitTransition) ? sc = "Webkit" : z(a.style.b) ? sc = "O" : sc = p
			}
			return sc
		};

		function uc(a, b) {
			rc.call(this, a, b)
		}
		E(uc, rc);

		function vc(a, b, c) {
			b = tc() + b;
			a.p.style[b] = c
		}
		uc.prototype.w = function() {
			this.p.style.opacity = this.P;
			K(C(function() {
				vc(this, "TransitionTimingFunction", this.wa);
				vc(this, "TransitionDuration", this.Ga + "s");
				vc(this, "TransitionProperty", "opacity");
				Xb(this.p, O ? "webkitTransitionEnd" : ab ? "oTransitionEnd" : "transitionend", C(function() {
					vc(this, "TransitionTimingFunction", "");
					vc(this, "TransitionDuration", "");
					vc(this, "TransitionProperty", "");
					this.fa && this.fa(this)
				}, this));
				this.p.style.opacity = this.ga
			}, this), 20)
		};

		function wc(a, b) {
			rc.call(this, a, b)
		}
		E(wc, rc);
		wc.prototype.B = function(a) {
			this.a = 0;
			this.Q = a.loop || ac;
			this.I = qc(this.wa)
		};
		wc.prototype.w = function() {
			this.h = ia();
			bc(this, this.h);
			this.Q.add(this)
		};

		function bc(a, b) {
			a.a = Math.min(a.a + (b - a.h), a.b);
			a.h = b;
			var c = a.I(a.a / a.b),
				c = a.P - (a.P - a.ga) * c;
			a.k ? a.p.style.filter = "alpha(opacity=" + Math.floor(100 * c) + ")" : a.p.style.opacity = c;
			if(c = a.a >= a.b) a.ea(), a.fa && K(C(a.fa, w, a), 0);
			return c
		}
		wc.prototype.ea = function() {};

		function xc(a, b) {
			rc.call(this, a, b)
		}
		E(xc, wc);
		xc.prototype.B = function(a) {
			var b = parseFloat(a.start),
				c = parseFloat(a.end);
			this.P = isNaN(b) ? 1 : b;
			this.ga = isNaN(c) ? 0 : c;
			this.k = !z(this.p.style.opacity);
			xc.F.B.call(this, a)
		};
		xc.prototype.ea = function() {
			this.k && 1 == this.ga && (this.p.style.filter = "")
		};

		function yc(a, b) {
			rc.call(this, a, b)
		}
		E(yc, uc);
		yc.prototype.B = function(a) {
			var b = parseFloat(a.start),
				c = parseFloat(a.end);
			this.P = isNaN(b) ? 1 : b;
			this.ga = isNaN(c) ? 0 : c;
			yc.F.B.call(this, a)
		};

		function zc(a, b, c, d) {
			d = d || {};
			d.start = b;
			d.end = c;
			tc() ? new yc(a, d) : new xc(a, d)
		};
		var Ac = "StopIteration" in w ? w.StopIteration : Error("StopIteration");

		function Bc() {}
		Bc.prototype.a = function() {
			f(Ac)
		};
		Bc.prototype.aa = function() {
			return this
		};

		function Cc(a) {
			if(a instanceof Bc) return a;
			if("function" == typeof a.aa) return a.aa(s);
			if(ca(a)) {
				var b = 0,
					c = new Bc;
				c.a = function() {
					for(;;) {
						b >= a.length && f(Ac);
						if(b in a) return a[b++];
						b++
					}
				};
				return c
			}
			f(Error("Not implemented"))
		};

		function Dc(a, b) {
			this.b = {};
			this.a = [];
			var c = arguments.length;
			if(1 < c) {
				c % 2 && f(Error("Uneven number of arguments"));
				for(var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
			} else if(a) {
				var e;
				if(a instanceof Dc) e = a.Ea(), d = a.Fa();
				else {
					var c = [],
						g = 0;
					for(e in a) c[g++] = e;
					e = c;
					c = [];
					g = 0;
					for(d in a) c[g++] = a[d];
					d = c
				}
				for(c = 0; c < e.length; c++) this.set(e[c], d[c])
			}
		}
		u = Dc.prototype;
		u.S = 0;
		u.Z = 0;
		u.Fa = function() {
			Ec(this);
			for(var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
			return a
		};
		u.Ea = function() {
			Ec(this);
			return this.a.concat()
		};
		u.clear = function() {
			this.b = {};
			this.Z = this.S = this.a.length = 0
		};
		u.remove = function(a) {
			return Object.prototype.hasOwnProperty.call(this.b, a) ? (delete this.b[a], this.S--, this.Z++, this.a.length > 2 * this.S && Ec(this), m) : s
		};

		function Ec(a) {
			if(a.S != a.a.length) {
				for(var b = 0, c = 0; b < a.a.length;) {
					var d = a.a[b];
					Object.prototype.hasOwnProperty.call(a.b, d) && (a.a[c++] = d);
					b++
				}
				a.a.length = c
			}
			if(a.S != a.a.length) {
				for(var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], Object.prototype.hasOwnProperty.call(e, d) || (a.a[c++] = d, e[d] = 1), b++;
				a.a.length = c
			}
		}
		u.get = function(a, b) {
			return Object.prototype.hasOwnProperty.call(this.b, a) ? this.b[a] : b
		};
		u.set = function(a, b) {
			Object.prototype.hasOwnProperty.call(this.b, a) || (this.S++, this.a.push(a), this.Z++);
			this.b[a] = b
		};
		u.K = function() {
			return new Dc(this)
		};
		u.aa = function(a) {
			Ec(this);
			var b = 0,
				c = this.a,
				d = this.b,
				e = this.Z,
				g = this,
				h = new Bc;
			h.a = function() {
				for(;;) {
					e != g.Z && f(Error("The map has changed since the iterator was created"));
					b >= c.length && f(Ac);
					var h = c[b++];
					return a ? h : d[h]
				}
			};
			return h
		};

		function Fc(a, b, c) {
			for(var d = a.elements, e, g = 0; e = d[g]; g++)
				if(!(e.form != a || e.disabled || "fieldset" == e.tagName.toLowerCase())) {
					var h = e.name;
					switch(e.type.toLowerCase()) {
						case "file":
						case "submit":
						case "reset":
						case "button":
							break;
						case "select-multiple":
							e = Gc(e);
							if(e != p)
								for(var j, l = 0; j = e[l]; l++) c(b, h, j);
							break;
						default:
							j = Gc(e), j != p && c(b, h, j)
					}
				}
			d = a.getElementsByTagName("input");
			for(g = 0; e = d[g]; g++) e.form == a && "image" == e.type.toLowerCase() && (h = e.name, c(b, h, e.value), c(b, h + ".x", "0"), c(b, h + ".y", "0"))
		}

		function Hc(a, b, c) {
			var d = a.get(b);
			d || (d = [], a.set(b, d));
			d.push(c)
		}

		function Ic(a, b, c) {
			a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
		}

		function Gc(a) {
			var b = a.type;
			if(!z(b)) return p;
			switch(b.toLowerCase()) {
				case "checkbox":
				case "radio":
					return a.checked ? a.value : p;
				case "select-one":
					return b = a.selectedIndex, 0 <= b ? a.options[b].value : p;
				case "select-multiple":
					for(var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
					return b.length ? b : p;
				default:
					return z(a.value) ? a.value : p
			}
		};

		function Jc(a) {
			a = String(a);
			if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
				return eval("(" + a + ")")
			} catch(b) {}
			f(Error("Invalid JSON string: " + a))
		}

		function Kc(a) {
			return eval("(" + a + ")")
		}

		function Lc() {}

		function Mc(a, b) {
			var c = [];
			Nc(a, b, c);
			return c.join("")
		}

		function Nc(a, b, c) {
			switch(typeof b) {
				case "string":
					Oc(b, c);
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
					if(b == p) {
						c.push("null");
						break
					}
					if(ba(b)) {
						var d = b.length;
						c.push("[");
						for(var e = "", g = 0; g < d; g++) c.push(e), Nc(a, b[g], c), e = ",";
						c.push("]");
						break
					}
					c.push("{");
					d = "";
					for(e in b) Object.prototype.hasOwnProperty.call(b, e) && (g = b[e], "function" != typeof g && (c.push(d), Oc(e, c), c.push(":"), Nc(a, g, c), d = ","));
					c.push("}");
					break;
				case "function":
					break;
				default:
					f(Error("Unknown type: " + typeof b))
			}
		}
		var Pc = {
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
			Qc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

		function Oc(a, b) {
			b.push('"', a.replace(Qc, function(a) {
				if(a in Pc) return Pc[a];
				var b = a.charCodeAt(0),
					e = "\\u";
				16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
				return Pc[a] = e + b.toString(16)
			}), '"')
		};

		function Rc() {
			this.a = ia()
		}
		new Rc;
		Rc.prototype.set = function(a) {
			this.a = a
		};
		Rc.prototype.get = function() {
			return this.a
		};
		var Sc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");

		function Tc(a) {
			if(Uc) {
				Uc = s;
				var b = w.location;
				if(b) {
					var c = b.href;
					if(c && (c = Vc(Tc(c)[3] || p)) && c != b.hostname) Uc = m, f(Error())
				}
			}
			return a.match(Sc)
		}
		var Uc = O;

		function Vc(a) {
			return a && decodeURIComponent(a)
		}

		function Wc(a) {
			if(a[1]) {
				var b = a[0],
					c = b.indexOf("#");
				0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
				c = b.indexOf("?");
				0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = k)
			}
			return a.join("")
		}

		function Xc(a, b, c) {
			if(ba(b))
				for(var d = 0; d < b.length; d++) Xc(a, String(b[d]), c);
			else b != p && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
		}

		function Yc(a, b, c) {
			Math.max(b.length - (c || 0), 0);
			for(c = c || 0; c < b.length; c += 2) Xc(b[c], b[c + 1], a);
			return a
		}

		function Zc(a, b) {
			for(var c in b) Xc(c, b[c], a);
			return a
		}

		function $c(a, b) {
			return Wc(2 == arguments.length ? Yc([a], arguments[1], 0) : Yc([a], arguments, 1))
		};

		function ad(a) {
			"?" == a.charAt(0) && (a = a.substr(1));
			a = a.split("&");
			for(var b = {}, c = 0, d = a.length; c < d; c++) {
				var e = a[c].split("=");
				if(1 == e.length && e[0] || 2 == e.length) {
					var g = decodeURIComponent((e[0] || "").replace(/\+/g, " ")),
						e = decodeURIComponent((e[1] || "").replace(/\+/g, " "));
					g in b ? ba(b[g]) ? wa(b[g], e) : b[g] = [b[g], e] : b[g] = e
				}
			}
			return b
		}

		function bd(a) {
			a = Zc([], a);
			a[0] = "";
			return a.join("")
		}

		function cd(a, b) {
			var c = a.split("?", 2);
			a = c[0];
			var c = ad(c[1] || ""),
				d;
			for(d in b) c[d] = b[d];
			return Wc(Zc([a], c))
		};
		var dd = p;
		"undefined" != typeof XMLHttpRequest ? dd = function() {
			return new XMLHttpRequest
		} : "undefined" != typeof ActiveXObject && (dd = function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		});

		function ed(a, b) {
			var c = b.format || "JSON";
			b.rb && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
			var d = b.N;
			d && (a = cd(a, d));
			var e = b.Ra || "";
			if(d = b.da) e = ad(e), Ra(e, d), e = bd(e);
			var g = s,
				h, j;
			var d = a,
				l = function(a) {
					if(!g) {
						g = m;
						h && window.clearTimeout(h);
						var d;
						a: switch(a && "status" in a ? a.status : -1) {
							case 0:
							case 200:
							case 204:
							case 304:
								d = m;
								break a;
							default:
								d = s
						}
						var e = p;
						if(d || 400 <= a.status && 500 > a.status) {
							var j = p;
							switch(c) {
								case "JSON":
									var e = a.responseText,
										l = a.getResponseHeader("Content-Type") || "";
									e && 0 <= l.indexOf("json") && (j = Kc(e));
									break;
								case "XML":
									e = (e = a.responseXML) ? e ? (e = ("responseXML" in e ? e.responseXML : e).getElementsByTagName("root")) && 0 < e.length ? e[0] : p : p : p, e && (j = {}, I(e.getElementsByTagName("*"), function(a) {
										var b = j,
											c = a.tagName,
											d = "";
										I(a.childNodes, function(a) {
											d += a.nodeValue
										});
										b[c] = d
									}))
							}
							e = j
						}
						if(d) a: {
							switch(c) {
								case "XML":
									d = 0 == parseInt(e && e.return_code, 10);
									break a;
								case "RAW":
									d = m;
									break a
							}
							d = !!e
						}
						e = e || {};
						l = b.oa || w;
						d ? b.H && b.H.call(l, a, e) : b.onError && b.onError.call(l, a, e);
						b.U && b.U.call(l, a, e)
					}
				},
				n = b.method,
				q = e,
				e = b.headers,
				r = b.responseType,
				t = dd && dd();
			if("open" in t) {
				t.onreadystatechange = function() {
					4 == (t && "readyState" in t ? t.readyState : 0) && l && l(t)
				};
				n = (n || "GET").toUpperCase();
				q = q || "";
				t.open(n, d, m);
				r && (t.responseType = r);
				d = "POST" == n;
				if(e)
					for(var H in e) t.setRequestHeader(H, e[H]), "content-type" == H.toLowerCase() && (d = s);
				d && t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				t.send(q);
				j = t
			} else j = k;
			b.ta && 0 < b.timeout && (h = K(function() {
				g || (g = m, j.abort(), window.clearTimeout(h), b.ta.call(b.oa || w, j))
			}, b.timeout))
		};

		function U(a, b, c, d) {
			this.top = a;
			this.right = b;
			this.bottom = c;
			this.left = d
		}
		U.prototype.K = function() {
			return new U(this.top, this.right, this.bottom, this.left)
		};
		U.prototype.contains = function(a) {
			return !this || !a ? s : a instanceof U ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
		};

		function fd(a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d
		}
		fd.prototype.K = function() {
			return new fd(this.left, this.top, this.width, this.height)
		};
		fd.prototype.contains = function(a) {
			return a instanceof fd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
		};

		function gd(a, b, c) {
			A(b) ? hd(a, c, b) : Pa(b, ha(hd, a))
		}

		function hd(a, b, c) {
			var d;
			a: if(d = String(c).replace(/\-([a-z])/g, function(a, b) {
					return b.toUpperCase()
				}), a.style[d] === k) {
				var e = O ? "Webkit" : N ? "Moz" : M ? "ms" : ab ? "O" : p,
					g = A(k) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
				c = c.replace(RegExp("(^" + (g ? "|[" + g + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
					return b + c.toUpperCase()
				});
				e = e + c;
				if(a.style[e] !== k) {
					d = e;
					break a
				}
			}
			d && (a.style[d] = b)
		}

		function V(a, b) {
			var c = R(a);
			return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, p)) ? c[b] || c.getPropertyValue(b) || "" : ""
		}

		function X(a, b) {
			return V(a, b) || (a.currentStyle ? a.currentStyle[b] : p) || a.style && a.style[b]
		}

		function id(a) {
			var b = a.getBoundingClientRect();
			M && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
			return b
		}

		function jd(a) {
			if(M && !(M && 8 <= ob)) return a.offsetParent;
			var b = R(a),
				c = X(a, "position"),
				d = "fixed" == c || "absolute" == c;
			for(a = a.parentNode; a && a != b; a = a.parentNode)
				if(c = X(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
			return p
		}

		function kd(a) {
			for(var b = new U(0, Infinity, Infinity, 0), c = xb(a), d = c.a.body, e = c.a.documentElement, g = !O && "CSS1Compat" == c.a.compatMode ? c.a.documentElement : c.a.body; a = jd(a);)
				if((!M || 0 != a.clientWidth) && (!O || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != X(a, "overflow")) {
					var h = ld(a),
						j;
					j = a;
					if(N && !mb("1.9")) {
						var l = parseFloat(V(j, "borderLeftWidth"));
						if(md(j)) var n = j.offsetWidth - j.clientWidth - l - parseFloat(V(j, "borderRightWidth")),
							l = l + n;
						j = new L(l, parseFloat(V(j, "borderTopWidth")))
					} else j = new L(j.clientLeft, j.clientTop);
					h.x += j.x;
					h.y += j.y;
					b.top = Math.max(b.top, h.y);
					b.right = Math.min(b.right, h.x + a.clientWidth);
					b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
					b.left = Math.max(b.left, h.x)
				}
			d = g.scrollLeft;
			g = g.scrollTop;
			b.left = Math.max(b.left, d);
			b.top = Math.max(b.top, g);
			c = (c.a.parentWindow || c.a.defaultView || window).document;
			c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
			c = new Oa(c.clientWidth, c.clientHeight);
			b.right = Math.min(b.right, d + c.width);
			b.bottom = Math.min(b.bottom, g + c.height);
			return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : p
		}

		function ld(a) {
			var b, c = R(a),
				d = X(a, "position"),
				e = N && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
				g = new L(0, 0),
				h;
			b = c ? R(c) : document;
			h = M && !(M && 9 <= ob) && !Fb(xb(b)) ? b.body : b.documentElement;
			if(a == h) return g;
			if(a.getBoundingClientRect) b = id(a), a = Gb(xb(c)), g.x = b.left + a.x, g.y = b.top + a.y;
			else if(c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), g.x = b.screenX - a.screenX, g.y = b.screenY - a.screenY;
			else {
				b = a;
				do {
					g.x += b.offsetLeft;
					g.y += b.offsetTop;
					b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
					if(O && "fixed" == X(b, "position")) {
						g.x += c.body.scrollLeft;
						g.y += c.body.scrollTop;
						break
					}
					b = b.offsetParent
				} while (b && b != a);
				if(ab || O && "absolute" == d) g.y -= c.body.offsetTop;
				for(b = a;
					(b = jd(b)) && b != c.body && b != h;)
					if(g.x -= b.scrollLeft, !ab || "TR" != b.tagName) g.y -= b.scrollTop
			}
			return g
		}

		function nd(a, b) {
			"number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
			return a
		}

		function od(a) {
			if("none" != X(a, "display")) return pd(a);
			var b = a.style,
				c = b.display,
				d = b.visibility,
				e = b.position;
			b.visibility = "hidden";
			b.position = "absolute";
			b.display = "inline";
			a = pd(a);
			b.display = c;
			b.position = e;
			b.visibility = d;
			return a
		}

		function pd(a) {
			var b = a.offsetWidth,
				c = a.offsetHeight,
				d = O && !b && !c;
			return(!z(b) || d) && a.getBoundingClientRect ? (a = id(a), new Oa(a.right - a.left, a.bottom - a.top)) : new Oa(b, c)
		}

		function md(a) {
			return "rtl" == X(a, "direction")
		}

		function qd(a, b) {
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

		function rd(a, b) {
			var c = a.currentStyle ? a.currentStyle[b] : p;
			return c ? qd(a, c) : 0
		}
		var sd = {
			thin: 2,
			medium: 4,
			thick: 6
		};

		function td(a, b) {
			if("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : p)) return 0;
			var c = a.currentStyle ? a.currentStyle[b + "Width"] : p;
			return c in sd ? sd[c] : qd(a, c)
		}
		var ud = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

		function vd(a, b) {
			if((a = A(a) ? document.getElementById(a) : a) && a.style) a.style.display = b ? "" : "none", P(a, "hid", !b)
		}

		function wd(a) {
			I(arguments, function(a) {
				vd(a, m)
			})
		}

		function xd(a) {
			I(arguments, function(a) {
				vd(a, s)
			})
		};

		function yd(a, b) {
			var c = Vc(Tc(a)[3] || p),
				d;
			if(!(d = c == Vc(Tc(window.location.href)[3] || p))) {
				if(c = !c) c = 0 == a.lastIndexOf("/", 0);
				d = c
			}
			if(d) {
				var e = Tc(a),
					c = e[5];
				d = e[6];
				var e = e[7],
					g = "";
				c && (g += c);
				d && (g += "?" + d);
				e && (g += "#" + e);
				c = g;
				d = c.indexOf("#");
				if(c = 0 > d ? c : c.substr(0, d)) {
					for(e = d = 0; e < c.length; ++e) d = 31 * d + c.charCodeAt(e), d %= 4294967296;
					d = "s_tempdata-" + d;
					c = b ? bd(b) : "";
					d = "" + d;
					Kb.set(d, c, 5, "/", "youtube.com")
				}
			}
		};
		var zd = {},
			Ad = 0;

		function Bd(a) {
			if(a) {
				var b = new Image,
					c = "" + Ad++;
				zd[c] = b;
				b.onload = b.onerror = function() {
					delete zd[c]
				};
				b.src = a;
				b = eval("null")
			}
		};

		function Cd(a) {
			var b = Ha("CONVERSION_CONFIG_DICT");
			if(b) {
				var c = "followon_" + a;
				if(!b.baseUrl || !b.uid) a = p;
				else {
					var d = b.rmktEnabled,
						e = b.focEnabled && !b.isAd;
					if(!d && !e) a = p;
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
							var g = [],
								h;
							for(h in d) g.push(encodeURIComponent(h) + "=" + encodeURIComponent(d[h]));
							c.data = g.join(";")
						}
						if(e && "view" == a && b.vid && b.uid && (b.oeid || b.ieid)) b.oeid && (c.oeid = b.oeid), b.ieid && (c.ieid = b.ieid), c.evid = b.vid;
						e && (c.foc_id = b.uid);
						a = Wc(Zc([b.baseUrl], c))
					}
				}
				a && Bd(a)
			}
		};

		function Dd(a, b, c, d, e, g, h) {
			var j, l;
			if(j = c.offsetParent) {
				var n = "HTML" == j.tagName || "BODY" == j.tagName;
				if(!n || "static" != X(j, "position")) l = ld(j), n || (n = (n = md(j)) && N ? -j.scrollLeft : n && (!M || !mb("8")) ? j.scrollWidth - j.clientWidth - j.scrollLeft : j.scrollLeft, l = Na(l, new L(n, j.scrollTop)))
			}
			j = l || new L;
			l = ld(a);
			n = od(a);
			l = new fd(l.x, l.y, n.width, n.height);
			if(n = kd(a)) {
				var q = new fd(n.left, n.top, n.right - n.left, n.bottom - n.top),
					n = Math.max(l.left, q.left),
					r = Math.min(l.left + l.width, q.left + q.width);
				if(n <= r) {
					var t = Math.max(l.top, q.top),
						q = Math.min(l.top + l.height, q.top + q.height);
					t <= q && (l.left = n, l.top = t, l.width = r - n, l.height = q - t)
				}
			}
			n = xb(a);
			t = xb(c);
			if(n.a != t.a) {
				var r = n.a.body,
					t = t.a.parentWindow || t.a.defaultView,
					q = new L(0, 0),
					H = R(r) ? R(r).parentWindow || R(r).defaultView : window,
					Rb = r;
				do {
					var x;
					if(H == t) x = ld(Rb);
					else {
						x = Rb;
						var W = new L;
						if(1 == x.nodeType) {
							if(x.getBoundingClientRect) {
								var B = id(x);
								W.x = B.left;
								W.y = B.top
							} else {
								var B = Gb(xb(x)),
									Q = ld(x);
								W.x = Q.x - B.x;
								W.y = Q.y - B.y
							}
							N && !mb(12) && (B = k, B = k, M ? B = "-ms-transform" : O ? B = "-webkit-transform" : ab ? B = "-o-transform" : N && (B = "-moz-transform"), Q = k, B && (Q = X(x, B)), Q || (Q = X(x, "transform")), Q ? (x = Q.match(ud), B = !x ? new L(0, 0) : new L(parseFloat(x[1]), parseFloat(x[2]))) : B = new L(0, 0), W = new L(W.x + B.x, W.y + B.y))
						} else B = "function" == aa(x.Ia), Q = x, x.targetTouches ? Q = x.targetTouches[0] : B && x.Ia().targetTouches && (Q = x.Ia().targetTouches[0]), W.x = Q.clientX, W.y = Q.clientY;
						x = W
					}
					q.x += x.x;
					q.y += x.y
				} while (H && H != t && (Rb = H.frameElement) && (H = H.parent));
				r = Na(q, ld(r));
				M && !Fb(n) && (r = Na(r, Gb(n)));
				l.left += r.x;
				l.top += r.y
			}
			a = (b & 4 && md(a) ? b ^ 2 : b) & -5;
			l = new L(a & 2 ? l.left + l.width : l.left, a & 1 ? l.top + l.height : l.top);
			l = Na(l, j);
			e && (l.x += (a & 2 ? -1 : 1) * e.x, l.y += (a & 1 ? -1 : 1) * e.y);
			var v;
			if(h && (v = kd(c))) v.top -= j.y, v.right -= j.x, v.bottom -= j.y, v.left -= j.x;
			a: {
				b = v;
				a = l.K();
				e = 0;
				j = (d & 4 && md(c) ? d ^ 2 : d) & -5;
				v = od(c);
				d = v.K();
				if(g || 0 != j) j & 2 ? a.x -= d.width + (g ? g.right : 0) : g && (a.x += g.left), j & 1 ? a.y -= d.height + (g ? g.bottom : 0) : g && (a.y += g.top);
				if(h) {
					if(b) {
						g = a;
						e = 0;
						if(65 == (h & 65) && (g.x < b.left || g.x >= b.right)) h &= -2;
						if(132 == (h & 132) && (g.y < b.top || g.y >= b.bottom)) h &= -5;
						g.x < b.left && h & 1 && (g.x = b.left, e |= 1);
						g.x < b.left && (g.x + d.width > b.right && h & 16) && (d.width = Math.max(d.width - (g.x + d.width - b.right), 0), e |= 4);
						g.x + d.width > b.right && h & 1 && (g.x = Math.max(b.right - d.width, b.left), e |= 1);
						h & 2 && (e |= (g.x < b.left ? 16 : 0) | (g.x + d.width > b.right ? 32 : 0));
						g.y < b.top && h & 4 && (g.y = b.top, e |= 2);
						g.y >= b.top && (g.y + d.height > b.bottom && h & 32) && (d.height = Math.max(d.height - (g.y + d.height - b.bottom), 0), e |= 8);
						g.y + d.height > b.bottom && h & 4 && (g.y = Math.max(b.bottom - d.height, b.top), e |= 2);
						h & 8 && (e |= (g.y < b.top ? 64 : 0) | (g.y + d.height > b.bottom ? 128 : 0));
						h = e
					} else h = 256;
					e = h;
					if(e & 496) {
						c = e;
						break a
					}
				}
				g = N && (Wa || cb) && mb("1.9");
				a instanceof L ? (h = a.x, a = a.y) : (h = a, a = k);
				c.style.left = nd(h, g);
				c.style.top = nd(a, g);
				if(!(v == d || (!v || !d ? 0 : v.width == d.width && v.height == d.height))) g = Fb(xb(R(c))), M && (!g || !mb("8")) ? (h = c.style, g ? (M ? (g = rd(c, "paddingLeft"), v = rd(c, "paddingRight"), a = rd(c, "paddingTop"), b = rd(c, "paddingBottom"), g = new U(a, v, b, g)) : (g = V(c, "paddingLeft"), v = V(c, "paddingRight"), a = V(c, "paddingTop"), b = V(c, "paddingBottom"), g = new U(parseFloat(a), parseFloat(v), parseFloat(b), parseFloat(g))), M ? (v = td(c, "borderLeft"), a = td(c, "borderRight"), b = td(c, "borderTop"), c = td(c, "borderBottom"), c = new U(b, a, c, v)) : (v = V(c, "borderLeftWidth"), a = V(c, "borderRightWidth"), b = V(c, "borderTopWidth"), c = V(c, "borderBottomWidth"), c = new U(parseFloat(b), parseFloat(a), parseFloat(c), parseFloat(v))), h.pixelWidth = d.width - c.left - g.left - g.right - c.right, h.pixelHeight = d.height - c.top - g.top - g.bottom - c.bottom) : (h.pixelWidth = d.width, h.pixelHeight = d.height)) : (c = c.style, N ? c.MozBoxSizing = "border-box" : O ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(d.width, 0) + "px", c.height = Math.max(d.height, 0) + "px");
				c = e
			}
			return c
		};
		var Ed = {},
			Fd = "ontouchstart" in document;

		function Gd(a, b, c) {
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
			return Eb(c, function(a) {
				return wb(a, b)
			}, m, d)
		}

		function Y(a) {
			var b = "mouseover" == a.type && "mouseenter" in Ed || "mouseout" == a.type && "mouseleave" in Ed,
				c = a.type in Ed || b;
			if("HTML" != a.target.tagName && c) {
				if(b) {
					var b = "mouseover" == a.type ? "mouseenter" : "mouseleave",
						c = Ed[b],
						d;
					for(d in c.A) {
						var e = Gd(b, d, a.target);
						e && !Eb(a.relatedTarget, function(a) {
							return a == e
						}, m) && c.t(d, e, b, a)
					}
				}
				if(b = Ed[a.type])
					for(d in b.A)(e = Gd(a.type, d, a.target)) && b.t(d, e, a.type, a)
			}
		}
		T(document, "blur", Y, m);
		T(document, "change", Y, m);
		T(document, "click", Y);
		T(document, "focus", Y, m);
		T(document, "mouseover", Y);
		T(document, "mouseout", Y);
		T(document, "mousedown", Y);
		T(document, "keydown", Y);
		T(document, "keyup", Y);
		T(document, "keypress", Y);
		T(document, "cut", Y);
		T(document, "paste", Y);
		Fd && (T(document, "touchstart", Y), T(document, "touchend", Y), T(document, "touchcancel", Y));
		D("yt.uix.widgets_", window.yt && window.yt.uix && window.yt.uix.widgets_ || {});

		function Hd() {}
		Hd.prototype.k = function(a, b, c) {
			var d = this.a(a, b);
			if(d && (d = y(d))) {
				var e = ya(arguments, 2);
				xa(e, 0, 0, a);
				d.apply(p, e)
			}
		};
		Hd.prototype.a = function(a, b) {
			return S(a, b)
		};
		Hd.prototype.b = function(a) {
			return Db(a, p, Z(this))
		};

		function Z(a, b) {
			return "yt-uix" + (a.h ? "-" + a.h : "") + (b ? "-" + b : "")
		};

		function Id(a, b) {
			this.b = a;
			this.a = new J;
			Zb(this.b, C(this.w, this), "yt-dialog-dismiss");
			var c = Bb("yt-dialog-fg-content", this.b),
				d = [];
			Pa(Jd, function(a) {
				d.push("yt-dialog-show-" + a)
			});
			vb(c, d, "yt-dialog-show-content");
			this.h = b
		}
		var Jd = {
			LOADING: "loading",
			tb: "content",
			ub: "working"
		};
		Id.prototype.w = function(a) {
			a = a.currentTarget;
			a.disabled || (a = S(a, "action") || "", Kd(this, a))
		};

		function Kd(a, b) {
			a.a.t("pre-all");
			a.a.t("pre-" + b);
			xd(a.b);
			xd(a.I);
			var c = document.getElementsByTagName("embed"),
				d = document.getElementsByTagName("object"),
				e = C(function(a) {
					if(S(a, "dialog-hidden")) {
						Nb(a, "dialog-hidden");
						var b = S(a, "dialog-visibility-value");
						a.style.visibility = b ? b : ""
					}
				}, a);
			I(c, e);
			I(d, e);
			a.h || (c = C(a.k, a), (c = Wb(document, "keydown", c, s)) && Yb(c));
			a.a.t("post-all");
			a.a.t("post-" + b)
		}
		Id.prototype.k = function(a) {
			27 == a.keyCode && Kd(this, "cancel")
		};
		D("yt.ui.Dialog", Id);

		function Ld() {};

		function Md() {}
		E(Md, Ld);
		Md.prototype.clear = function() {
			var a;
			a = this.aa(m);
			if(ca(a)) {
				var b = a.length;
				if(0 < b) {
					for(var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
					a = c
				} else a = []
			} else {
				a = Cc(a);
				var e = [],
					b = function(a) {
						e.push(a)
					};
				if(ca(a)) try {
					I(a, b, k)
				} catch(g) {
					g !== Ac && f(g)
				} else {
					a = Cc(a);
					try {
						for(;;) b.call(k, a.a())
					} catch(h) {
						h !== Ac && f(h)
					}
				}
				a = e
			}
			var j = this;
			I(a, function(a) {
				j.remove(a)
			})
		};

		function Nd(a) {
			this.o = a
		}
		E(Nd, Md);

		function Od(a) {
			try {
				return !!a.o && !!a.o.getItem
			} catch(b) {}
			return s
		}
		u = Nd.prototype;
		u.set = function(a, b) {
			try {
				this.o.setItem(a, b)
			} catch(c) {
				f("Storage mechanism: Quota exceeded")
			}
		};
		u.get = function(a) {
			a = this.o.getItem(a);
			!A(a) && a !== p && f("Storage mechanism: Invalid value was encountered");
			return a
		};
		u.remove = function(a) {
			this.o.removeItem(a)
		};
		u.aa = function(a) {
			var b = 0,
				c = this.o,
				d = new Bc;
			d.a = function() {
				b >= c.length && f(Ac);
				var d;
				d = c.key(b++);
				if(a) return d;
				d = c.getItem(d);
				A(d) || f("Storage mechanism: Invalid value was encountered");
				return d
			};
			return d
		};
		u.clear = function() {
			this.o.clear()
		};

		function Pd() {
			var a = p;
			try {
				a = window.localStorage || p
			} catch(b) {}
			this.o = a
		}
		E(Pd, Nd);

		function Qd() {
			var a = p;
			try {
				a = window.sessionStorage || p
			} catch(b) {}
			this.o = a
		}
		E(Qd, Nd);

		function Rd(a) {
			this.M = a;
			this.Qa = new Lc
		}
		u = Rd.prototype;
		u.M = p;
		u.Qa = p;
		u.set = function(a, b) {
			z(b) ? this.M.set(a, Mc(this.Qa, b)) : this.M.remove(a)
		};
		u.get = function(a) {
			a = this.M.get(a);
			if(a !== p) try {
				return Jc(a)
			} catch(b) {
				f("Storage: Invalid value was encountered")
			}
		};
		u.remove = function(a) {
			this.M.remove(a)
		};

		function Sd(a) {
			Rd.call(this, a)
		}
		E(Sd, Rd);

		function Td(a) {
			this.data = a
		}

		function Ud(a) {
			return !z(a) || a instanceof Td ? a : new Td(a)
		}
		Sd.prototype.set = function(a, b) {
			Sd.F.set.call(this, a, Ud(b))
		};
		Sd.prototype.a = function(a) {
			a = Sd.F.get.call(this, a);
			if(!z(a) || a instanceof Object) return a;
			f("Storage: Invalid value was encountered")
		};
		Sd.prototype.get = function(a) {
			(a = this.a(a)) ? (a = a.data, z(a) || f("Storage: Invalid value was encountered")) : a = k;
			return a
		};

		function Vd(a) {
			Rd.call(this, a)
		}
		E(Vd, Sd);
		Vd.prototype.set = function(a, b, c) {
			if(b = Ud(b)) {
				if(c) {
					if(c < ia()) {
						Vd.prototype.remove.call(this, a);
						return
					}
					b.expiration = c
				}
				b.creation = ia()
			}
			Vd.F.set.call(this, a, b)
		};
		Vd.prototype.a = function(a, b) {
			var c = Vd.F.a.call(this, a);
			if(c) {
				var d;
				if(d = !b) {
					d = c.creation;
					var e = c.expiration;
					d = !!e && e < ia() || !!d && d > ia()
				}
				if(d) Vd.prototype.remove.call(this, a);
				else return c
			}
		};

		function Wd(a) {
			Rd.call(this, a)
		}
		E(Wd, Vd);
		var Xd = new Wd(new Pd);
		Od(Xd.M) || (Xd = p);
		var Yd = new Wd(new Qd);
		Od(Yd.M) || (Yd = p);
		var Zd = {};
		var $d = y("yt.timing.data_") || {};
		D("yt.timing.data_", $d);
		D("yt.pubsub.publish", Ma);

		function ae(a) {
			var b = {
				channel: "c",
				all: "a"
			};
			return b[a] || b.channel
		};

		function be() {}
		E(be, Hd);
		be.prototype.b = function(a) {
			var b = Hd.prototype.b.call(this, a);
			return !b ? a : b
		};
		be.prototype.a = function(a, b) {
			var c = be.F.a.call(this, a, "card-config");
			return c && (c = y(c)) && c[b] ? c[b] : be.F.a.call(this, a, b)
		};

		function ce(a, b, c) {
			var d = c || b,
				e = Z(a, "card");
			c = d.__yt_uid_key;
			c || (c = Pb(), d.__yt_uid_key = c);
			var g = e + c;
			c = A(g) ? document.getElementById(g) : g;
			var h = de(a, d);
			if(c) return c;
			c = document.createElement("div");
			c.id = g;
			c.className = e;
			(d = a.a(d, "card-class")) && rb(c, d);
			d = document.createElement("div");
			d.className = Z(a, "card-border");
			b = a.a(b, "orientation") || "horizontal";
			e = document.createElement("div");
			e.className = "yt-uix-card-border-arrow yt-uix-card-border-arrow-" + b;
			g = document.createElement("div");
			g.className = Z(a, "card-body");
			a = document.createElement("div");
			a.className = "yt-uix-card-body-arrow yt-uix-card-body-arrow-" + b;
			Cb(h);
			g.appendChild(h);
			d.appendChild(a);
			d.appendChild(g);
			c.appendChild(e);
			c.appendChild(d);
			document.body.appendChild(c);
			return c
		}

		function ee(a, b, c) {
			var d = a.a(b, "orientation") || "horizontal",
				e = a.a(b, "position"),
				g = !!a.a(b, "force-position"),
				d = "horizontal" == d,
				h = "bottomright" == e || "bottomleft" == e,
				j = "topright" == e || "bottomright" == e,
				l, n;
			j && h ? (n = 7, l = 4) : j && !h ? (n = 6, l = 5) : !j && h ? (n = 5, l = 6) : (n = 4, l = 7);
			var q = md(document.body),
				e = md(b);
			q != e && (n ^= 2);
			var r;
			d ? (e = b.offsetHeight / 2 - 12, r = new L(-12, b.offsetHeight + 6)) : (e = b.offsetWidth / 2 - 6, r = new L(b.offsetWidth + 6, -12));
			var t = od(c),
				e = Math.min(e, (d ? t.height : t.width) - 24 - 6);
			6 > e && (e = 6, d ? r.y += 12 - b.offsetHeight / 2 : r.x += 12 - b.offsetWidth / 2);
			var H = p;
			g || (H = 10);
			t = Z(a, "card-flip");
			a = Z(a, "card-reverse");
			P(c, t, j);
			P(c, a, h);
			H = Dd(b, n, c, l, r, p, H);
			!g && H && (H & 48 && (j = !j, n ^= 2, l ^= 2), H & 192 && (h = !h, n ^= 1, l ^= 1), P(c, t, j), P(c, a, h), Dd(b, n, c, l, r));
			b = Bb("yt-uix-card-body-arrow", c);
			g = Bb("yt-uix-card-border-arrow", c);
			d = d ? h ? "top" : "bottom" : !q && j || q && !j ? "left" : "right";
			b.setAttribute("style", "");
			g.setAttribute("style", "");
			b.style[d] = e + "px";
			g.style[d] = e + "px";
			h = Bb("yt-uix-card-arrow", c);
			b = Bb("yt-uix-card-arrow-background", c);
			h && b && (c = "right" == d ? od(c).width - e - 13 : e + 11, e = c / Math.sqrt(2), gd(h, "left", c + "px"), gd(h, "margin-left", "1px"), gd(b, "margin-left", -e + "px"), gd(b, "margin-top", e + "px"))
		}
		be.prototype.W = function(a) {
			var b = this.b(a);
			if(b && (a = ce(this, a, b))) tb(b, Z(this, "active")), tb(a, Z(this, "card-visible")), xd(a), a.cardTargetNode = p, a.cardRootNode = p
		};

		function de(a, b) {
			var c = b.cardContentNode;
			if(!c) {
				var d = Z(a, "content"),
					e = Z(a, "card-content");
				(c = Bb(d, b)) || (c = document.createElement("div"));
				vb(c, d, e);
				b.cardContentNode = c
			}
			return c
		};

		function $() {}
		E($, be);
		$.getInstance = function() {
			return $.L ? $.L : $.L = new $
		};
		$.prototype.h = "hovercard";

		function fe(a, b, c) {
			this.p = a;
			this.k = b;
			this.a = !!c;
			this.b = s;
			this.h = [];
			this.w = []
		}
		u = fe.prototype;
		u.init = function() {
			var a = Db(this.p, p, "yt-subscription-button-hovercard"),
				b = C(this.kb, this),
				c = C(this.lb, this),
				b = T(a, "mouseenter", b);
			this.h.push(b);
			b = T(a, "mouseleave", c);
			this.h.push(b)
		};
		u.W = function() {
			$.getInstance().W(this.p)
		};
		u.kb = function() {
			this.b = m;
			if(this.a) {
				var a = C(this.ca, this),
					a = K(a, 500);
				this.w.push(a)
			}
		};
		u.lb = function() {
			this.b = s
		};
		u.ca = function() {
			var a = $.getInstance(),
				b;
			if(b = !this.Ha) b = a.b(this.p), b = !b ? s : wb(b, Z(a, "active"));
			b && (this.Ha = m, b = {
				session_token: Ja("subscription_ajax")
			}, b[ae()] = this.k, ed("/subscription_ajax", {
				method: "POST",
				N: {
					hovercard: 1,
					action_get_subscription_form_for_channel: 1
				},
				da: b,
				oa: this,
				H: function(b, d) {
					var e = this.p,
						g = d.response.html_content,
						h = a.b(e);
					if(h) {
						var j = de(a, h);
						j && (j.innerHTML = g, wb(h, Z(a, "active")) && (g = ce(a, e, h), ee(a, e, g), wd(g)))
					}
					this.B()
				},
				onError: function() {
					this.Ha = s
				}
			}))
		};
		u.B = function() {
			var a = $.getInstance(),
				b = a.b(this.p),
				c = de(a, b);
			I(c.getElementsByTagName("input"), function(a) {
				var b = C(function() {
					var a = c.getElementsByTagName("form")[0],
						b = {};
					b.method = a.method.toUpperCase();
					if("POST" == b.method) {
						var d = [];
						Fc(a, d, Ic);
						b.Ra = d.join("&")
					} else {
						var e = new Dc;
						Fc(a, e, Hc);
						Ec(e);
						for(var d = {}, n = 0; n < e.a.length; n++) {
							var q = e.a[n];
							d[q] = e.b[q]
						}
						e = b.N || {};
						Ra(e, d);
						b.N = e
					}
					ed(a.action, b)
				}, this);
				a = T(a, "change", b);
				this.h.push(a)
			}, this)
		};

		function ge(a) {
			this.j = a;
			this.type = S(a, "subscription-type") || "channel";
			this.O = S(a, "subscription-value") || "";
			this.z = S(a, "enable-hovercard") ? new fe(this.j, this.O) : p;
			this.V = s;
			this.b = [];
			this.a = [];
			this.ha = S(this.j, "sessionlink") || "";
			this.B()
		}
		var he = [];

		function ie(a) {
			return S(a.j, "subscription-id") || p
		}

		function je(a, b) {
			if(b) {
				var c = a.j;
				c.dataset ? c.dataset[Mb("subscription-id")] = b : c.setAttribute("data-subscription-id", b)
			} else Nb(a.j, "subscription-id");
			ke(a)
		}

		function ke(a) {
			var b = a.j;
			(b.dataset ? Mb("subscription-button-type") in b.dataset : b.hasAttribute ? b.hasAttribute("data-subscription-button-type") : b.getAttribute("data-subscription-button-type")) ? (b = "-" + S(a.j, "subscription-button-type"), P(a.j, "yt-uix-button-subscribed" + b, !!ie(a)), P(a.j, "yt-uix-button-subscribe" + b, !ie(a))) : P(a.j, "subscribed", !!ie(a));
			ie(a) ? (b = Db(a.j, p, "yt-uix-button-subscription-container"), Xb(b, "mouseleave", C(function() {
				rb(this.j, "hover-enabled")
			}, a))) : tb(a.j, "hover-enabled");
			if(a.z) {
				var b = a.z,
					c = !!ie(a),
					d = Z($.getInstance(), "target");
				P(b.p, d, c);
				b = a.z;
				a = !!ie(a);
				(b.a = a) || b.W()
			}
		}
		u = ge.prototype;
		u.B = function() {
			this.b.push(T(this.j, "click", C(this.Wa, this)));
			this.a.push(La("SUBSCRIBE", this.Xa, this));
			this.a.push(La("UNSUBSCRIBE", this.Ya, this));
			this.z && this.z.init();
			he.push(this);
			ke(this)
		};

		function le(a, b, c, d) {
			c != ie(a) && a.O == b && je(a, c);
			d == a && a.z && a.z.W()
		}
		u.Wa = function(a) {
			if(this.V) return s;
			a.preventDefault();
			ie(this) ? this.va() : this.J()
		};

		function me(a) {
			"BUTTON" == a.j.tagName && rb(a.j.parentNode, "yt-subscription-button-disabled-mask-container");
			a.j.disabled = m
		}
		u.enable = function() {
			tb(this.j.parentNode, "yt-subscription-button-disabled-mask-container");
			this.j.disabled = s
		};
		u.J = function() {
			var a = this.type,
				b = this.O,
				c = S(this.j, "subscription-feature");
			this.V = m;
			me(this);
			if(Ja("subscription_ajax")) {
				var d = a,
					e = this,
					d = d || "channel",
					a = {},
					g = {
						channel: "channel",
						all: "all"
					};
				a["action_create_subscription_to_" + (g[d] || g.channel)] = 1;
				c && (a.feature = c);
				a[ae(d)] = b;
				e && e.ha && (c = cd("/subscription_ajax", a), g = ad(e.ha), yd(c, g));
				c = {};
				c.session_token = Ja("subscription_ajax");
				(g = Ha("PLAYBACK_ID")) && (c.plid = g);
				ed("/subscription_ajax", {
					method: "POST",
					N: a,
					da: c,
					H: function(a, c) {
						var e = d,
							g = c || {},
							h;
						h = ua(he, function(a) {
							return a.type == e && a.O == b
						});
						I(h, function(a) {
							Ma("SUBSCRIBE", b, g, a)
						});
						g.response.show_feed_privacy_dialog && Ma("SHOW-SUBSCRIBE-DIALOG", b)
					},
					U: function() {
						e && e.ea()
					}
				});
				Cd("subscribe")
			} else if(!this.j.getAttribute("href")) {
				var h = C(this.cb, this),
					a = $c("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login"),
					a = $c(a, "feature", "sub_button");
				if(a = window.open(a, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", m)) c = La("LOGGED_IN", function(a) {
					var b = Ha("LOGGED_IN_PUBSUB_KEY", b),
						c = y("yt.pubsub.instance_");
					c && ("number" == typeof b && (b = [b]), I(b, function(a) {
						c.unsubscribeByKey(a)
					}));
					h(a)
				}), Fa("LOGGED_IN_PUBSUB_KEY", c), a.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
			}
		};
		u.cb = function(a) {
			Ia("subscription_ajax", a.subscription_ajax);
			this.J()
		};
		u.ea = function() {
			this.V = s;
			this.enable()
		};
		u.va = function() {
			var a = {
					s: ie(this),
					session_token: Ja("subscription_ajax")
				},
				b = {
					action_remove_subscriptions: 1
				},
				c = S(this.j, "subscription-feature");
			c && (b.feature = c);
			(c = Ha("PLAYBACK_ID")) && (a.plid = c);
			this.V = m;
			me(this);
			if(this.ha) {
				var c = cd("/subscription_ajax", b),
					d = ad(this.ha);
				yd(c, d)
			}
			ed("/subscription_ajax", {
				method: "POST",
				oa: this,
				N: b,
				da: a,
				H: function(a, b) {
					je(this, p);
					if(this.z) {
						var c = this.z;
						c.a = s;
						c.W()
					}
					Ma("UNSUBSCRIBE", this.O, b, this)
				},
				U: function() {
					this.V = s;
					this.enable()
				}
			});
			Cd("unsubscribe")
		};
		u.Xa = function(a, b, c) {
			b = b.response.id;
			le(this, a, b, c);
			if(a == this.O && (je(this, b), this.z && (a = this.z, a.b))) {
				c = $.getInstance();
				b = a.p;
				var d = c.b(b);
				if(d) {
					rb(d, Z(c, "active"));
					var e = ce(c, b, d);
					if(e) {
						e.cardTargetNode = b;
						e.cardRootNode = d;
						ee(c, b, e);
						var g = Z(c, "card-visible"),
							h = c.a(b, "card-delegate-show") && c.a(d, "card-action");
						c.k(d, "card-action", b);
						xd(e);
						K(function() {
							h || wd(e);
							rb(e, g)
						}, 10)
					}
				}
				a.ca()
			}
		};
		u.Ya = function(a, b) {
			le(this, a, b.response.id, this)
		};

		function ne(a) {
			a.preventDefault();
			var b = Db(a.currentTarget, p, "branded-page-related-channels-item");
			a = !!Bb("featured-label-hh", b);
			var c = S(b, "external-id"),
				d = Db(b, "ul"),
				d = zb("branded-page-related-channels-item", d),
				d = va(d, function(a) {
					return S(a, "external-id")
				}),
				e = {};
			a && (e.featured = 1);
			ed("/guide_ajax?action_dismiss_channel_v2=1", {
				method: "POST",
				N: e,
				da: {
					session_token: Ja("guide_ajax"),
					dismissed_id: c,
					shown_ids: d.join()
				},
				H: function(a, c) {
					var d = c.new_suggested_html;
					if(d) {
						var e = document.createElement("div");
						e.innerHTML = d;
						if(e.firstElementChild != k) d = e.firstElementChild;
						else
							for(d = e.firstChild; d && 1 != d.nodeType;) d = d.nextSibling;
						(e = b.parentNode) && e.replaceChild(d, b);
						var n = function(a, b) {
								var c = S(a, "group-key");
								if(c) {
									var d = a,
										d = A(d) ? document.getElementById(d) : d,
										c = c || d[da] || (d[da] = ++ea),
										e = Zd[c];
									e && (Zd[c] = ua(e, function(a) {
										return a[0] != d
									}));
									Nb(a, "group-key")
								}
								a.src = b
							},
							e = Ab("img", p, d);
						I(e, function(a) {
							var b = S(a, "thumb");
							b && n.call(w, a, b)
						});
						e = zb("yt-subscription-button-js-default", d);
						I(e, function(a) {
							S(a, "subscription-initialized") || (new ge(a), a.dataset ? a.dataset[Mb("subscription-initialized")] = "true" : a.setAttribute("data-subscription-initialized", "true"))
						});
						zc(d, 0, 1, {
							duration: 0.3
						})
					} else oe(b)
				},
				onError: function() {
					oe(b)
				}
			})
		}

		function oe(a) {
			zc(a, 1, 0, {
				duration: 0.3,
				U: function() {
					Cb(a)
				}
			})
		};

		function pe() {}

		function qe() {
			document.getElementById("content").className += " loading ";
			var a = document.getElementById("progress");
			a || (a = document.createElement("div"), a.id = "progress", a.innerHTML = "<dt><dd>", document.body.appendChild(a));
			re(60, 900)
		}

		function se() {
			re(90, 500);
			window.scroll(0, 0);
			Ma("dispose");
			var a = document.getElementById("content");
			a.style.height = a.clientHeight + "px";
			te()
		}

		function ue() {
			re(101, 25);
			document.getElementById("content").style.height = "";
			y("yt.timing.tick")("ol");
			Ma("init")
		}

		function ve() {
			te(m);
			var a = document.getElementById("progress");
			a && K(function() {
				a.parentNode.removeChild(a)
			}, 500)
		}

		function re(a, b) {
			var c = b || 500,
				d = document.getElementById("progress");
			if(d) {
				d.className = "";
				var e = d.style;
				e.k = e.MozTransitionDuration = e.a = e.h = e.webkitTransitionDuration = c + "ms";
				K(function() {
					e.width = a + "%";
					K(function() {
						d.className = "waiting"
					}, c)
				}, 0)
			}
		}

		function te(a) {
			function b() {
				c.className = c.className.replace(" loading ", "")
			}
			var c = document.getElementById("content");
			a ? b() : K(b, 50)
		};
		La("init", function() {
			Zb(document.body, ne, "branded-page-related-channels-item-close");
			Ha("EW_ON_CLICK") || (F.d.styles.load(Ha("EW_URL_CSS")), F.d.scripts.load(Ha("EW_URL_JS"), function() {
				y("yt.www.onboarding.EngagementWizard.init")()
			}))
		});
		window.yt.spf && (F.init({
			"nolink-class": "spf-nolink",
			"navigate-started-callback": pe,
			"navigate-history-callback": qe,
			"navigate-received-callback": se,
			"navigate-processed-callback": ue
		}), La("init", ve));
	})();
}