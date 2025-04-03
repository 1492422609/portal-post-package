import { defineAsyncComponent as s } from "vue";
const i = /* @__PURE__ */ Object.assign({ "./zd-vin/p-Button.vue": () => import("./p-Button-RfDcShNt.js"), "./zd-vin/zd-Button.vue": () => import("./zd-Button-BZBtUWOh.js"), "./zd-vin/zd-Button2.vue": () => import("./zd-Button2-D7EIf6sZ.js") }), m = (n) => {
  for (const [t, o] of Object.entries(i)) {
    const e = t.slice(t.lastIndexOf("/") + 1, t.lastIndexOf("."));
    n.component(e, s(o));
  }
};
export {
  m as default
};
