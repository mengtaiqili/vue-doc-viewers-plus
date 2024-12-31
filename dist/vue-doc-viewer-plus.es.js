import { defineComponent as I, ref as _, watch as g, computed as n, openBlock as l, createElementBlock as a, withDirectives as N, createBlock as x, unref as y, vShow as P, createCommentVNode as w, withCtx as k, createElementVNode as h } from "vue";
import { Modal as B, Image as S } from "ant-design-vue";
const $ = { class: "vue-doc-viewer" }, j = { class: "modal-header" }, q = { class: "doc-viewer-container" }, A = ["src"], M = ["src"], O = {
  key: 2,
  class: "unsupported-format"
}, L = /* @__PURE__ */ I({
  __name: "DocViewerPlus",
  props: {
    fileUrl: {
      type: String,
      required: !0
    },
    fileName: {
      type: String,
      required: !1
    },
    visible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:visible"],
  setup(s, { emit: u }) {
    const r = B, p = S, t = s, v = u, i = _(t.visible), o = _(!1);
    g(() => t.visible, (e) => {
      f.value ? o.value = e : i.value = e;
    }), g(() => i.value, (e) => {
      v("update:visible", e);
    });
    const C = () => {
      i.value = !1, o.value = !1, v("update:visible", !1);
    }, U = (e) => {
      o.value = e, v("update:visible", e);
    }, E = () => {
      if (t.fileUrl) {
        const e = document.createElement("a");
        e.href = t.fileUrl, e.download = t.fileName || `${Date.now()}.${c.value}`, document.body.appendChild(e), e.click(), document.body.removeChild(e);
      }
    }, c = n(() => {
      var e;
      return ((e = t.fileUrl.split(".").pop()) == null ? void 0 : e.toLowerCase()) || "";
    }), f = n(() => ["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(c.value)), V = n(() => c.value === "pdf"), b = n(() => ["doc", "docx", "xls", "xlsx", "ppt", "pptx"].includes(c.value)), D = n(() => `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(t.fileUrl)}`);
    return (e, d) => (l(), a("div", $, [
      f.value && o.value ? N((l(), x(y(p), {
        key: 0,
        style: { display: "none" },
        width: 200,
        src: t.fileUrl,
        preview: {
          visible: o.value,
          onVisibleChange: (m) => {
            U(m);
          }
        },
        class: "preview-image"
      }, null, 8, ["src", "preview"])), [
        [P, !1]
      ]) : w("", !0),
      f.value ? w("", !0) : (l(), x(y(r), {
        key: 1,
        visible: i.value,
        "onUpdate:visible": d[0] || (d[0] = (m) => i.value = m),
        footer: null,
        onCancel: C,
        width: "80%",
        wrapClassName: "doc-viewer-modal",
        centered: !0
      }, {
        title: k(() => [
          h("div", j, [
            d[1] || (d[1] = h("span", { class: "modal-title" }, "预览", -1)),
            b.value ? (l(), a("span", {
              key: 0,
              class: "download-btn",
              onClick: E,
              style: { position: "absolute", right: "80px" }
            }, " 下载 ")) : w("", !0)
          ])
        ]),
        default: k(() => [
          h("div", q, [
            b.value ? (l(), a("iframe", {
              key: 0,
              src: D.value,
              width: "100%",
              height: "100%",
              frameborder: "0"
            }, null, 8, A)) : V.value ? (l(), a("embed", {
              key: 1,
              src: t.fileUrl,
              type: "application/pdf",
              width: "100%",
              height: "100%"
            }, null, 8, M)) : (l(), a("div", O, " 不支持的文件格式 "))
          ])
        ]),
        _: 1
      }, 8, ["visible"]))
    ]));
  }
}), R = (s, u) => {
  const r = s.__vccOpts || s;
  for (const [p, t] of u)
    r[p] = t;
  return r;
}, z = /* @__PURE__ */ R(L, [["__scopeId", "data-v-869f4c23"]]), H = {
  install: (s) => {
    s.component("DocViewerPlus", z);
  }
};
export {
  z as DocViewerPlus,
  H as default
};
