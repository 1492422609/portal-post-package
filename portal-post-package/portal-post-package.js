import { defineAsyncComponent as i } from "vue";
const p = /* @__PURE__ */ Object.assign({ "./zd-vin/p-Button.vue": () => import("./p-Button-Dm2pHCfa.js"), "./zd-vin/p-dialog.vue": () => import("./p-dialog-CRYnovas.js"), "./zd-vin/p-span.vue": () => import("./p-span-DEtnfI84.js"), "./zd-vin/p-toast.vue": () => import("./p-toast-BXTZRqjJ.js"), "./zd-vin/test2-dialog.vue": () => import("./test2-dialog-SSEoG9mY.js"), "./zd-vin/zd-Button.vue": () => import("./zd-Button-BZBtUWOh.js"), "./zd-vin/zd-Button2.vue": () => import("./zd-Button2-D7EIf6sZ.js") }), d = (o) => {
  for (const [t, n] of Object.entries(p)) {
    const e = t.slice(t.lastIndexOf("/") + 1, t.lastIndexOf("."));
    o.component(e, i(n));
  }
};
export {
  d as default
};
