(() => {
  "use strict";
  var n = {
      122: (n, r, e) => {
        e.d(r, { Z: () => c });
        var o = e(537),
          t = e.n(o),
          a = e(645),
          i = e.n(a)()(t());
        i.push([
          n.id,
          "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);",
        ]),
          i.push([
            n.id,
            ":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  margin-bottom: 40px;\n  font-weight: bold;\n  letter-spacing: 3px;\n}",
            "",
            {
              version: 3,
              sources: ["webpack://./src/assets/css/style.css"],
              names: [],
              mappings:
                "AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,gCAAgC;EAChC,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB",
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n:root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nform button {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--primary-color);\n  text-align: center;\n  margin-bottom: 40px;\n  font-weight: bold;\n  letter-spacing: 3px;\n}",
              ],
              sourceRoot: "",
            },
          ]);
        const c = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  o = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  o &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {"
                    )),
                  (e += n(r)),
                  o && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, o, t, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var p = 0; p < n.length; p++) {
                var u = [].concat(n[p]);
                (o && i[u[0]]) ||
                  (void 0 !== a &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = a)),
                  e &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = e))
                      : (u[2] = e)),
                  t &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = t))
                      : (u[4] = "".concat(t))),
                  r.push(u));
              }
            }),
            r
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var r = n[1],
            e = n[3];
          if (!e) return r;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              t =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o
                ),
              a = "/*# ".concat(t, " */"),
              i = e.sources.map(function (n) {
                return "/*# sourceURL="
                  .concat(e.sourceRoot || "")
                  .concat(n, " */");
              });
            return [r].concat(i).concat([a]).join("\n");
          }
          return [r].join("\n");
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, o = 0; o < r.length; o++)
            if (r[o].identifier === n) {
              e = o;
              break;
            }
          return e;
        }
        function o(n, o) {
          for (var a = {}, i = [], c = 0; c < n.length; c++) {
            var s = n[c],
              p = o.base ? s[0] + o.base : s[0],
              u = a[p] || 0,
              A = "".concat(p, " ").concat(u);
            a[p] = u + 1;
            var f = e(A),
              l = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== f) r[f].references++, r[f].updater(l);
            else {
              var d = t(l, o);
              (o.byIndex = c),
                r.splice(c, 0, { identifier: A, updater: d, references: 1 });
            }
            i.push(A);
          }
          return i;
        }
        function t(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, t) {
          var a = o((n = n || []), (t = t || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var c = e(a[i]);
              r[c].references--;
            }
            for (var s = o(n, t), p = 0; p < a.length; p++) {
              var u = e(a[p]);
              0 === r[u].references && (r[u].updater(), r.splice(u, 1));
            }
            a = s;
          };
        };
      },
      569: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var o = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var o = "";
                e.supports && (o += "@supports (".concat(e.supports, ") {")),
                  e.media && (o += "@media ".concat(e.media, " {"));
                var t = void 0 !== e.layer;
                t &&
                  (o += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {"
                  )),
                  (o += e.css),
                  t && (o += "}"),
                  e.media && (o += "}"),
                  e.supports && (o += "}");
                var a = e.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  r.styleTagTransform(o, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    r = {};
  function e(o) {
    var t = r[o];
    if (void 0 !== t) return t.exports;
    var a = (r[o] = { id: o, exports: {} });
    return n[o](a, a.exports, e), a.exports;
  }
  (e.n = (n) => {
    var r = n && n.__esModule ? () => n.default : () => n;
    return e.d(r, { a: r }), r;
  }),
    (e.d = (n, r) => {
      for (var o in r)
        e.o(r, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: r[o] });
    }),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      function n(n, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
        }
      }
      var r = (function () {
        function r(n) {
          !(function (n, r) {
            if (!(n instanceof r))
              throw new TypeError("Cannot call a class as a function");
          })(this, r),
            Object.defineProperty(this, "cpfLimpo", {
              writable: !1,
              enumerable: !0,
              configurable: !1,
              value: n.replace(/\D+/g, ""),
            });
        }
        var e, o, t;
        return (
          (e = r),
          (t = [
            {
              key: "criaDigito",
              value: function (n) {
                var r = Array.from(n),
                  e = r.length + 1,
                  o =
                    11 -
                    (r.reduce(function (n, r) {
                      return (n += e * Number(r)), e--, n;
                    }, 0) %
                      11);
                return o > 9 ? "0" : String(o);
              },
            },
          ]),
          (o = [
            {
              key: "geraNovoCpf",
              value: function () {
                var n = this.cpfLimpo.slice(0, -2),
                  e = r.criaDigito(n);
                return n + e + r.criaDigito(n + e) === this.cpfLimpo;
              },
            },
            {
              key: "sequencia",
              value: function () {
                return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
              },
            },
            {
              key: "valida",
              value: function () {
                return (
                  !!this.cpfLimpo &&
                  "string" == typeof this.cpfLimpo &&
                  11 === this.cpfLimpo.length &&
                  !this.sequencia() &&
                  this.geraNovoCpf()
                );
              },
            },
          ]) && n(e.prototype, o),
          t && n(e, t),
          r
        );
      })();
      function o(n, r) {
        for (var e = 0; e < r.length; e++) {
          var o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, o.key, o);
        }
      }
      console.log("Cheguei aqui");
      var t,
        a = (function () {
          function n() {
            !(function (n, r) {
              if (!(n instanceof r))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
          }
          var e, t;
          return (
            (e = n),
            (t = [
              {
                key: "rand",
                value: function () {
                  var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1e8,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 999999999;
                  return String(Math.floor(Math.random() * (r - n) + n));
                },
              },
              {
                key: "formatado",
                value: function (n) {
                  return (
                    n.slice(0, 3) +
                    "." +
                    n.slice(3, 6) +
                    "." +
                    n.slice(6, 9) +
                    "-" +
                    n.slice(9, 11)
                  );
                },
              },
              {
                key: "geraNovoCpf",
                value: function () {
                  var n = this.rand();
                  console.log(n);
                  var e = r.criaDigito(n),
                    o = n + e + r.criaDigito(n + e);
                  return this.formatado(o);
                },
              },
            ]),
            t && o(e.prototype, t),
            n
          );
        })(),
        i = e(379),
        c = e.n(i),
        s = e(795),
        p = e.n(s),
        u = e(569),
        A = e.n(u),
        f = e(565),
        l = e.n(f),
        d = e(216),
        m = e.n(d),
        g = e(589),
        v = e.n(g),
        h = e(122),
        C = {};
      (C.styleTagTransform = v()),
        (C.setAttributes = l()),
        (C.insert = A().bind(null, "head")),
        (C.domAPI = p()),
        (C.insertStyleElement = m()),
        c()(h.Z, C),
        h.Z && h.Z.locals && h.Z.locals,
        (t = new a()),
        (document.querySelector(".cpf-gerado").innerHTML = t.geraNovoCpf());
    })();
})();
//# sourceMappingURL=bundle.js.map
