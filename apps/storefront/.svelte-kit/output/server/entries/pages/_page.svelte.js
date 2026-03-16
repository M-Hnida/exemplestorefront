import { s as ssr_context, b as spread_props, c as setContext, g as getContext, r as run, n as noop, d as derived, f as attributes, i as exclude_from_object, t as to_array, p as props_id, a as attr, e as escape_html, j as ensure_array_like, k as attr_class, l as bind_props, m as stringify, h as head } from "../../chunks/index.js";
import { g as goto } from "../../chunks/client.js";
import { I as Icon, M as Mail } from "../../chunks/mail.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function Arrow_right($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      ["path", { "d": "M5 12h14" }],
      ["path", { "d": "m12 5 7 7-7 7" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "arrow-right" },
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Chevron_down($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-down" },
      /**
       * @component @name ChevronDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtNiA5IDYgNiA2LTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chevron-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Chevron_right($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-right" },
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Eye($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
        }
      ],
      ["circle", { "cx": "12", "cy": "12", "r": "3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "eye" },
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Flame($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "flame" },
      /**
       * @component @name Flame
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3ExIDQgNCA2LjV0MyA1LjVhMSAxIDAgMCAxLTE0IDAgNSA1IDAgMCAxIDEtMyAxIDEgMCAwIDAgNSAwYzAtMi0xLjUtMy0xLjUtNXEwLTIgMi41LTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/flame
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Heart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "heart" },
      /**
       * @component @name Heart
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Menu($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      ["path", { "d": "M4 5h16" }],
      ["path", { "d": "M4 12h16" }],
      ["path", { "d": "M4 19h16" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "menu" },
      /**
       * @component @name Menu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCA1aDE2IiAvPgogIDxwYXRoIGQ9Ik00IDEyaDE2IiAvPgogIDxwYXRoIGQ9Ik00IDE5aDE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/menu
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Package($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
        }
      ],
      ["path", { "d": "M12 22V12" }],
      ["polyline", { "points": "3.29 7 12 12 20.71 7" }],
      ["path", { "d": "m7.5 4.27 9 5.15" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "package" },
      /**
       * @component @name Package
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMjEuNzNhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M3oiIC8+CiAgPHBhdGggZD0iTTEyIDIyVjEyIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjMuMjkgNyAxMiAxMiAyMC43MSA3IiAvPgogIDxwYXRoIGQ9Im03LjUgNC4yNyA5IDUuMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/package
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Quote($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        }
      ],
      [
        "path",
        {
          "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "quote" },
      /**
       * @component @name Quote
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgM2EyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMiAxIDEgMCAwIDEgMSAxdjFhMiAyIDAgMCAxLTIgMiAxIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMSA2IDYgMCAwIDAgNi02VjVhMiAyIDAgMCAwLTItMnoiIC8+CiAgPHBhdGggZD0iTTUgM2EyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMiAxIDEgMCAwIDEgMSAxdjFhMiAyIDAgMCAxLTIgMiAxIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMSA2IDYgMCAwIDAgNi02VjVhMiAyIDAgMCAwLTItMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/quote
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Rotate_ccw($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
      ],
      ["path", { "d": "M3 3v5h5" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "rotate-ccw" },
      /**
       * @component @name RotateCcw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAxIDAgOS05IDkuNzUgOS43NSAwIDAgMC02Ljc0IDIuNzRMMyA4IiAvPgogIDxwYXRoIGQ9Ik0zIDN2NWg1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/rotate-ccw
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      ["path", { "d": "m21 21-4.34-4.34" }],
      ["circle", { "cx": "11", "cy": "11", "r": "8" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "search" },
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Shield($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "shield" },
      /**
       * @component @name Shield
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shield
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Shopping_cart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      ["circle", { "cx": "8", "cy": "21", "r": "1" }],
      ["circle", { "cx": "19", "cy": "21", "r": "1" }],
      [
        "path",
        {
          "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "shopping-cart" },
      /**
       * @component @name ShoppingCart
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI4IiBjeT0iMjEiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iMTkiIGN5PSIyMSIgcj0iMSIgLz4KICA8cGF0aCBkPSJNMi4wNSAyLjA1aDJsMi42NiAxMi40MmEyIDIgMCAwIDAgMiAxLjU4aDkuNzhhMiAyIDAgMCAwIDEuOTUtMS41N2wxLjY1LTcuNDNINS4xMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shopping-cart
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Sparkles($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
        }
      ],
      ["path", { "d": "M20 2v4" }],
      ["path", { "d": "M22 4h-4" }],
      ["circle", { "cx": "4", "cy": "20", "r": "2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "sparkles" },
      /**
       * @component @name Sparkles
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuMDE3IDIuODE0YTEgMSAwIDAgMSAxLjk2NiAwbDEuMDUxIDUuNTU4YTIgMiAwIDAgMCAxLjU5NCAxLjU5NGw1LjU1OCAxLjA1MWExIDEgMCAwIDEgMCAxLjk2NmwtNS41NTggMS4wNTFhMiAyIDAgMCAwLTEuNTk0IDEuNTk0bC0xLjA1MSA1LjU1OGExIDEgMCAwIDEtMS45NjYgMGwtMS4wNTEtNS41NThhMiAyIDAgMCAwLTEuNTk0LTEuNTk0bC01LjU1OC0xLjA1MWExIDEgMCAwIDEgMC0xLjk2Nmw1LjU1OC0xLjA1MWEyIDIgMCAwIDAgMS41OTQtMS41OTR6IiAvPgogIDxwYXRoIGQ9Ik0yMCAydjQiIC8+CiAgPHBhdGggZD0iTTIyIDRoLTQiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjIwIiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sparkles
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Star($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "star" },
      /**
       * @component @name Star
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTI1IDIuMjk1YS41My41MyAwIDAgMSAuOTUgMGwyLjMxIDQuNjc5YTIuMTIzIDIuMTIzIDAgMCAwIDEuNTk1IDEuMTZsNS4xNjYuNzU2YS41My41MyAwIDAgMSAuMjk0LjkwNGwtMy43MzYgMy42MzhhMi4xMjMgMi4xMjMgMCAwIDAtLjYxMSAxLjg3OGwuODgyIDUuMTRhLjUzLjUzIDAgMCAxLS43NzEuNTZsLTQuNjE4LTIuNDI4YTIuMTIyIDIuMTIyIDAgMCAwLTEuOTczIDBMNi4zOTYgMjEuMDFhLjUzLjUzIDAgMCAxLS43Ny0uNTZsLjg4MS01LjEzOWEyLjEyMiAyLjEyMiAwIDAgMC0uNjExLTEuODc5TDIuMTYgOS43OTVhLjUzLjUzIDAgMCAxIC4yOTQtLjkwNmw1LjE2NS0uNzU1YTIuMTIyIDIuMTIyIDAgMCAwIDEuNTk3LTEuMTZ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/star
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Tag($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
        }
      ],
      [
        "circle",
        { "cx": "7.5", "cy": "7.5", "r": ".5", "fill": "currentColor" }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "tag" },
      /**
       * @component @name Tag
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuNTg2IDIuNTg2QTIgMiAwIDAgMCAxMS4xNzIgMkg0YTIgMiAwIDAgMC0yIDJ2Ny4xNzJhMiAyIDAgMCAwIC41ODYgMS40MTRsOC43MDQgOC43MDRhMi40MjYgMi40MjYgMCAwIDAgMy40MiAwbDYuNTgtNi41OGEyLjQyNiAyLjQyNiAwIDAgMCAwLTMuNDJ6IiAvPgogIDxjaXJjbGUgY3g9IjcuNSIgY3k9IjcuNSIgcj0iLjUiIGZpbGw9ImN1cnJlbnRDb2xvciIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/tag
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Truck($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
        }
      ],
      ["path", { "d": "M15 18H9" }],
      [
        "path",
        {
          "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
        }
      ],
      ["circle", { "cx": "17", "cy": "18", "r": "2" }],
      ["circle", { "cx": "7", "cy": "18", "r": "2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "truck" },
      /**
       * @component @name Truck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTQgMThWNmEyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMnYxMWExIDEgMCAwIDAgMSAxaDIiIC8+CiAgPHBhdGggZD0iTTE1IDE4SDkiIC8+CiAgPHBhdGggZD0iTTE5IDE4aDJhMSAxIDAgMCAwIDEtMXYtMy42NWExIDEgMCAwIDAtLjIyLS42MjRsLTMuNDgtNC4zNUExIDEgMCAwIDAgMTcuNTIgOEgxNCIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE4IiByPSIyIiAvPgogIDxjaXJjbGUgY3g9IjciIGN5PSIxOCIgcj0iMiIgLz4KPC9zdmc+) - https://lucide.dev/icons/truck
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function X($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      ["path", { "d": "M18 6 6 18" }],
      ["path", { "d": "m6 6 12 12" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "x" },
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Zap($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props2 } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
        }
      ]
    ];
    Icon($$renderer2, spread_props([
      { name: "zap" },
      /**
       * @component @name Zap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNGExIDEgMCAwIDEtLjc4LTEuNjNsOS45LTEwLjJhLjUuNSAwIDAgMSAuODYuNDZsLTEuOTIgNi4wMkExIDEgMCAwIDAgMTMgMTBoN2ExIDEgMCAwIDEgLjc4IDEuNjNsLTkuOSAxMC4yYS41LjUgMCAwIDEtLjg2LS40NmwxLjkyLTYuMDJBMSAxIDAgMCAwIDExIDE0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zap
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props2,
      {
        iconNode,
        children: ($$renderer3) => {
          props2.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function createContext(defaultValue) {
  const key = /* @__PURE__ */ Symbol();
  return {
    key,
    consume() {
      return getContext(key) || defaultValue;
    },
    provide(value) {
      return setContext(key, value);
    }
  };
}
const ItemContext = createContext();
const RootContext$2 = createContext();
function toArray(v) {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}
var first = (v) => v[0];
var last = (v) => v[v.length - 1];
var add = (v, ...items) => v.concat(items);
var remove = (v, ...items) => v.filter((t) => !items.includes(t));
var isArrayLike = (value) => value?.constructor.name === "Array";
var isArrayEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (!isEqual(a[i], b[i])) return false;
  }
  return true;
};
var isEqual = (a, b) => {
  if (Object.is(a, b)) return true;
  if (a == null && b != null || a != null && b == null) return false;
  if (typeof a?.isEqual === "function" && typeof b?.isEqual === "function") {
    return a.isEqual(b);
  }
  if (typeof a === "function" && typeof b === "function") {
    return a.toString() === b.toString();
  }
  if (isArrayLike(a) && isArrayLike(b)) {
    return isArrayEqual(Array.from(a), Array.from(b));
  }
  if (!(typeof a === "object") || !(typeof b === "object")) return false;
  const keys = Object.keys(b ?? /* @__PURE__ */ Object.create(null));
  const length = keys.length;
  for (let i = 0; i < length; i++) {
    const hasKey = Reflect.has(a, keys[i]);
    if (!hasKey) return false;
  }
  for (let i = 0; i < length; i++) {
    const key = keys[i];
    if (!isEqual(a[key], b[key])) return false;
  }
  return true;
};
var isObjectLike = (v) => v != null && typeof v === "object";
var isString = (v) => typeof v === "string";
var isFunction = (v) => typeof v === "function";
var hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
var baseGetTag = (v) => Object.prototype.toString.call(v);
var fnToString = Function.prototype.toString;
var objectCtorString = fnToString.call(Object);
var isPlainObject = (v) => {
  if (!isObjectLike(v) || baseGetTag(v) != "[object Object]" || isFrameworkElement(v)) return false;
  const proto = Object.getPrototypeOf(v);
  if (proto === null) return true;
  const Ctor = hasProp(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && fnToString.call(Ctor) == objectCtorString;
};
var isReactElement = (x) => typeof x === "object" && x !== null && "$$typeof" in x && "props" in x;
var isVueElement = (x) => typeof x === "object" && x !== null && "__v_isVNode" in x;
var isFrameworkElement = (x) => isReactElement(x) || isVueElement(x);
var identity = (v) => v();
var callAll = (...fns) => (...a) => {
  fns.forEach(function(fn) {
    fn?.(...a);
  });
};
var toPx = (v) => typeof v === "number" ? `${v}px` : v;
function compact(obj) {
  if (!isPlainObject(obj) || obj === void 0) return obj;
  const keys = Reflect.ownKeys(obj).filter((key) => typeof key === "string");
  const filtered = {};
  for (const key of keys) {
    const value = obj[key];
    if (value !== void 0) {
      filtered[key] = compact(value);
    }
  }
  return filtered;
}
function splitProps$3(props2, keys) {
  const rest = {};
  const result = {};
  const keySet = new Set(keys);
  const ownKeys = Reflect.ownKeys(props2);
  for (const key of ownKeys) {
    if (keySet.has(key)) {
      result[key] = props2[key];
    } else {
      rest[key] = props2[key];
    }
  }
  return [result, rest];
}
var createSplitProps = (keys) => {
  return function split(props2) {
    return splitProps$3(props2, keys);
  };
};
function warn(...a) {
  const m = a.length === 1 ? a[0] : a[1];
  const c = a.length === 2 ? a[0] : true;
  if (c && process.env.NODE_ENV !== "production") {
    console.warn(m);
  }
}
function ensure(c, m) {
  if (c == null) throw new Error(m());
}
var clsx = (...args) => args.map((str) => str?.trim?.()).filter(Boolean).join(" ");
var CSS_REGEX$1 = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
var serialize$1 = (style) => {
  const res = {};
  let match;
  while (match = CSS_REGEX$1.exec(style)) {
    res[match[1]] = match[2];
  }
  return res;
};
var css = (a, b) => {
  if (isString(a)) {
    if (isString(b)) return `${a};${b}`;
    a = serialize$1(a);
  } else if (isString(b)) {
    b = serialize$1(b);
  }
  return Object.assign({}, a ?? {}, b ?? {});
};
function mergeProps$1(...args) {
  let result = {};
  for (let props2 of args) {
    if (!props2) continue;
    for (let key in result) {
      if (key.startsWith("on") && typeof result[key] === "function" && typeof props2[key] === "function") {
        result[key] = callAll(props2[key], result[key]);
        continue;
      }
      if (key === "className" || key === "class") {
        result[key] = clsx(result[key], props2[key]);
        continue;
      }
      if (key === "style") {
        result[key] = css(result[key], props2[key]);
        continue;
      }
      result[key] = props2[key] !== void 0 ? props2[key] : result[key];
    }
    for (let key in props2) {
      if (result[key] === void 0) {
        result[key] = props2[key];
      }
    }
    const symbols = Object.getOwnPropertySymbols(props2);
    for (let symbol of symbols) {
      result[symbol] = props2[symbol];
    }
  }
  return result;
}
var STATE_DELIMITER = ".";
var ABSOLUTE_PREFIX = "#";
var stateIndexCache = /* @__PURE__ */ new WeakMap();
var stateIdIndexCache = /* @__PURE__ */ new WeakMap();
function joinStatePath(parts2) {
  return parts2.join(STATE_DELIMITER);
}
function isAbsoluteStatePath(value) {
  return value.includes(STATE_DELIMITER);
}
function isExplicitAbsoluteStatePath(value) {
  return value.startsWith(ABSOLUTE_PREFIX);
}
function stripAbsolutePrefix(value) {
  return isExplicitAbsoluteStatePath(value) ? value.slice(ABSOLUTE_PREFIX.length) : value;
}
function appendStatePath(base, segment) {
  return base ? `${base}${STATE_DELIMITER}${segment}` : segment;
}
function buildStateIndex(machine2) {
  const index = /* @__PURE__ */ new Map();
  const idIndex = /* @__PURE__ */ new Map();
  const visit = (basePath, state) => {
    index.set(basePath, state);
    const stateId = state.id;
    if (stateId) {
      if (idIndex.has(stateId)) {
        throw new Error(`Duplicate state id: ${stateId}`);
      }
      idIndex.set(stateId, basePath);
    }
    const childStates = state.states;
    if (!childStates) return;
    for (const [childKey, childState] of Object.entries(childStates)) {
      if (!childState) continue;
      const childPath = appendStatePath(basePath, childKey);
      visit(childPath, childState);
    }
  };
  for (const [topKey, topState] of Object.entries(machine2.states)) {
    if (!topState) continue;
    visit(topKey, topState);
  }
  return { index, idIndex };
}
function ensureStateIndex(machine2) {
  const cached = stateIndexCache.get(machine2);
  if (cached) return cached;
  const { index, idIndex } = buildStateIndex(machine2);
  stateIndexCache.set(machine2, index);
  stateIdIndexCache.set(machine2, idIndex);
  return index;
}
function getStatePathById(machine2, stateId) {
  ensureStateIndex(machine2);
  return stateIdIndexCache.get(machine2)?.get(stateId);
}
function toSegments(value) {
  if (!value) return [];
  return String(value).split(STATE_DELIMITER).filter(Boolean);
}
function getStateChain(machine2, state) {
  if (!state) return [];
  const stateIndex = ensureStateIndex(machine2);
  const segments = toSegments(state);
  const chain = [];
  const statePath = [];
  for (const segment of segments) {
    statePath.push(segment);
    const path = joinStatePath(statePath);
    const current = stateIndex.get(path);
    if (!current) break;
    chain.push({ path, state: current });
  }
  return chain;
}
function resolveAbsoluteStateValue(machine2, value) {
  const stateIndex = ensureStateIndex(machine2);
  const segments = toSegments(value);
  if (!segments.length) return value;
  const resolved = [];
  for (const segment of segments) {
    resolved.push(segment);
    const path = joinStatePath(resolved);
    if (!stateIndex.has(path)) return value;
  }
  let resolvedPath = joinStatePath(resolved);
  let current = stateIndex.get(resolvedPath);
  while (current?.initial) {
    const nextPath = `${resolvedPath}${STATE_DELIMITER}${current.initial}`;
    const nextState = stateIndex.get(nextPath);
    if (!nextState) break;
    resolvedPath = nextPath;
    current = nextState;
  }
  return resolvedPath;
}
function hasStatePath(machine2, value) {
  const stateIndex = ensureStateIndex(machine2);
  return stateIndex.has(value);
}
function resolveStateValue(machine2, value, source) {
  const stateValue = String(value);
  if (isExplicitAbsoluteStatePath(stateValue)) {
    const stateId = stripAbsolutePrefix(stateValue);
    const statePath = getStatePathById(machine2, stateId);
    if (!statePath) {
      throw new Error(`Unknown state id: ${stateId}`);
    }
    return resolveAbsoluteStateValue(machine2, statePath);
  }
  if (!isAbsoluteStatePath(stateValue) && source) {
    const sourceSegments = toSegments(source);
    for (let index = sourceSegments.length; index >= 1; index--) {
      const base = sourceSegments.slice(0, index).join(STATE_DELIMITER);
      const candidate = appendStatePath(base, stateValue);
      if (hasStatePath(machine2, candidate)) return resolveAbsoluteStateValue(machine2, candidate);
    }
  }
  return resolveAbsoluteStateValue(machine2, stateValue);
}
function findTransition(machine2, state, eventType) {
  const chain = getStateChain(machine2, state);
  for (let index = chain.length - 1; index >= 0; index--) {
    const transitionMap = chain[index]?.state.on;
    const transition = transitionMap?.[eventType];
    if (transition) return { transitions: transition, source: chain[index]?.path };
  }
  const rootTransitionMap = machine2.on;
  return { transitions: rootTransitionMap?.[eventType], source: void 0 };
}
function getExitEnterStates(machine2, prevState, nextState, reenter) {
  const prevChain = prevState ? getStateChain(machine2, prevState) : [];
  const nextChain = getStateChain(machine2, nextState);
  let commonIndex = 0;
  while (commonIndex < prevChain.length && commonIndex < nextChain.length && prevChain[commonIndex]?.path === nextChain[commonIndex]?.path) {
    commonIndex += 1;
  }
  let exiting = prevChain.slice(commonIndex).reverse();
  let entering = nextChain.slice(commonIndex);
  const sameLeaf = prevChain.at(-1)?.path === nextChain.at(-1)?.path;
  if (reenter && sameLeaf) {
    exiting = prevChain.slice().reverse();
    entering = nextChain;
  }
  return { exiting, entering };
}
function matchesState(current, value) {
  if (!current) return false;
  return current === value || current.startsWith(`${value}${STATE_DELIMITER}`);
}
function hasTag(machine2, state, tag) {
  return getStateChain(machine2, state).some((item) => item.state.tags?.includes(tag));
}
function createGuards() {
  return {
    and: (...guards) => {
      return function andGuard(params) {
        return guards.every((str) => params.guard(str));
      };
    },
    or: (...guards) => {
      return function orGuard(params) {
        return guards.some((str) => params.guard(str));
      };
    },
    not: (guard) => {
      return function notGuard(params) {
        return !params.guard(guard);
      };
    }
  };
}
function createMachine$1(config) {
  ensureStateIndex(config);
  return config;
}
function setup() {
  return {
    guards: createGuards(),
    createMachine: (config) => {
      return createMachine$1(config);
    },
    choose: (transitions) => {
      return function chooseFn({ choose }) {
        return choose(transitions)?.actions;
      };
    }
  };
}
var MachineStatus = /* @__PURE__ */ ((MachineStatus2) => {
  MachineStatus2["NotStarted"] = "Not Started";
  MachineStatus2["Started"] = "Started";
  MachineStatus2["Stopped"] = "Stopped";
  return MachineStatus2;
})(MachineStatus || {});
var INIT_STATE = "__init__";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var isObject = (v) => typeof v === "object" && v !== null;
var dataAttr = (guard) => guard ? "" : void 0;
var ELEMENT_NODE = 1;
var DOCUMENT_NODE = 9;
var DOCUMENT_FRAGMENT_NODE = 11;
var isHTMLElement = (el) => isObject(el) && el.nodeType === ELEMENT_NODE && typeof el.nodeName === "string";
var isDocument = (el) => isObject(el) && el.nodeType === DOCUMENT_NODE;
var isWindow = (el) => isObject(el) && el === el.window;
var isNode = (el) => isObject(el) && el.nodeType !== void 0;
var isShadowRoot = (el) => isNode(el) && el.nodeType === DOCUMENT_FRAGMENT_NODE && "host" in el;
var isAnchorElement = (el) => !!el?.matches("a[href]");
var isElementVisible = (el) => {
  if (!isHTMLElement(el)) return false;
  return el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0;
};
function isActiveElement(element) {
  if (!element) return false;
  const rootNode = element.getRootNode();
  return getActiveElement(rootNode) === element;
}
function contains(parent, child) {
  if (!parent || !child) return false;
  if (!isHTMLElement(parent) || !isHTMLElement(child)) return false;
  const rootNode = child.getRootNode?.();
  if (parent === child) return true;
  if (parent.contains(child)) return true;
  if (rootNode && isShadowRoot(rootNode)) {
    let next = child;
    while (next) {
      if (parent === next) return true;
      next = next.parentNode || next.host;
    }
  }
  return false;
}
function getDocument(el) {
  if (isDocument(el)) return el;
  if (isWindow(el)) return el.document;
  return el?.ownerDocument ?? document;
}
function getWindow(el) {
  if (isShadowRoot(el)) return getWindow(el.host);
  if (isDocument(el)) return el.defaultView ?? window;
  if (isHTMLElement(el)) return el.ownerDocument?.defaultView ?? window;
  return window;
}
function getActiveElement(rootNode) {
  let activeElement = rootNode.activeElement;
  while (activeElement?.shadowRoot) {
    const el = activeElement.shadowRoot.activeElement;
    if (!el || el === activeElement) break;
    else activeElement = el;
  }
  return activeElement;
}
var isDom = () => typeof document !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
function getUserAgent() {
  const ua2 = navigator.userAgentData;
  if (ua2 && Array.isArray(ua2.brands)) {
    return ua2.brands.map(({ brand, version }) => `${brand}/${version}`).join(" ");
  }
  return navigator.userAgent;
}
var pt = (v) => isDom() && v.test(getPlatform());
var ua = (v) => isDom() && v.test(getUserAgent());
var vn = (v) => isDom() && v.test(navigator.vendor);
var isIPhone = () => pt(/^iPhone/i);
var isIPad = () => pt(/^iPad/i) || isMac() && navigator.maxTouchPoints > 1;
var isIos = () => isIPhone() || isIPad();
var isApple = () => isMac() || isIos();
var isMac = () => pt(/^Mac/i);
var isSafari = () => isApple() && vn(/apple/i);
var isFirefox = () => ua(/Firefox/i);
function getComposedPath(event) {
  return event.composedPath?.() ?? event.nativeEvent?.composedPath?.();
}
function getEventTarget(event) {
  const composedPath = getComposedPath(event);
  return composedPath?.[0] ?? event.target;
}
function isOpeningInNewTab(event) {
  const element = event.currentTarget;
  if (!element) return false;
  const validElement = element.matches("a[href], button[type='submit'], input[type='submit']");
  if (!validElement) return false;
  const isMiddleClick = event.button === 1;
  const isModKeyClick = isCtrlOrMetaKey(event);
  return isMiddleClick || isModKeyClick;
}
function isComposingEvent(event) {
  return getNativeEvent(event).isComposing || event.keyCode === 229;
}
function isCtrlOrMetaKey(e) {
  if (isMac()) return e.metaKey;
  return e.ctrlKey;
}
var keyMap = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  Esc: "Escape",
  " ": "Space",
  ",": "Comma",
  Left: "ArrowLeft",
  Right: "ArrowRight"
};
var rtlKeyMap = {
  ArrowLeft: "ArrowRight",
  ArrowRight: "ArrowLeft"
};
function getEventKey(event, options = {}) {
  const { dir = "ltr", orientation = "horizontal" } = options;
  let key = event.key;
  key = keyMap[key] ?? key;
  const isRtl = dir === "rtl" && orientation === "horizontal";
  if (isRtl && key in rtlKeyMap) key = rtlKeyMap[key];
  return key;
}
function getNativeEvent(event) {
  return event.nativeEvent ?? event;
}
var isFrame = (el) => isHTMLElement(el) && el.tagName === "IFRAME";
function getShadowRootForNode(element, getShadowRoot) {
  if (!getShadowRoot) return null;
  if (getShadowRoot === true) {
    return element.shadowRoot || null;
  }
  const result = getShadowRoot(element);
  return (result === true ? element.shadowRoot : result) || null;
}
function collectElementsWithShadowDOM(elements, getShadowRoot, filterFn) {
  const allElements = [...elements];
  const toProcess = [...elements];
  const processed = /* @__PURE__ */ new Set();
  const positionMap = /* @__PURE__ */ new Map();
  elements.forEach((el, i) => positionMap.set(el, i));
  let processIndex = 0;
  while (processIndex < toProcess.length) {
    const element = toProcess[processIndex++];
    if (!element || processed.has(element)) continue;
    processed.add(element);
    const shadowRoot = getShadowRootForNode(element, getShadowRoot);
    if (shadowRoot) {
      const shadowElements = Array.from(shadowRoot.querySelectorAll(focusableSelector)).filter(filterFn);
      const hostIndex = positionMap.get(element);
      if (hostIndex !== void 0) {
        const insertPosition = hostIndex + 1;
        allElements.splice(insertPosition, 0, ...shadowElements);
        shadowElements.forEach((el, i) => {
          positionMap.set(el, insertPosition + i);
        });
        for (let i = insertPosition + shadowElements.length; i < allElements.length; i++) {
          positionMap.set(allElements[i], i);
        }
      } else {
        const insertPosition = allElements.length;
        allElements.push(...shadowElements);
        shadowElements.forEach((el, i) => {
          positionMap.set(el, insertPosition + i);
        });
      }
      toProcess.push(...shadowElements);
    }
  }
  return allElements;
}
var focusableSelector = "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type";
var getFocusables = (container, options = {}) => {
  if (!container) return [];
  const { includeContainer = false, getShadowRoot } = options;
  const elements = Array.from(container.querySelectorAll(focusableSelector));
  const include = includeContainer == true || includeContainer == "if-empty" && elements.length === 0;
  if (include && isHTMLElement(container) && isFocusable(container)) {
    elements.unshift(container);
  }
  const focusableElements = [];
  for (const element of elements) {
    if (!isFocusable(element)) continue;
    if (isFrame(element) && element.contentDocument) {
      const frameBody = element.contentDocument.body;
      focusableElements.push(...getFocusables(frameBody, { getShadowRoot }));
      continue;
    }
    focusableElements.push(element);
  }
  if (getShadowRoot) {
    return collectElementsWithShadowDOM(focusableElements, getShadowRoot, isFocusable);
  }
  return focusableElements;
};
function isFocusable(element) {
  if (!isHTMLElement(element) || element.closest("[inert]")) return false;
  return element.matches(focusableSelector) && isElementVisible(element);
}
var AnimationFrame = class _AnimationFrame {
  constructor() {
    __publicField(this, "id", null);
    __publicField(this, "fn_cleanup");
    __publicField(this, "cleanup", () => {
      this.cancel();
    });
  }
  static create() {
    return new _AnimationFrame();
  }
  request(fn) {
    this.cancel();
    this.id = globalThis.requestAnimationFrame(() => {
      this.id = null;
      this.fn_cleanup = fn?.();
    });
  }
  cancel() {
    if (this.id !== null) {
      globalThis.cancelAnimationFrame(this.id);
      this.id = null;
    }
    this.fn_cleanup?.();
    this.fn_cleanup = void 0;
  }
  isActive() {
    return this.id !== null;
  }
};
function raf(fn) {
  const frame = AnimationFrame.create();
  frame.request(fn);
  return frame.cleanup;
}
function queueBeforeEvent(el, type, cb) {
  const cancelTimer = raf(() => {
    el.removeEventListener(type, exec, true);
    cb();
  });
  const exec = () => {
    cancelTimer();
    cb();
  };
  el.addEventListener(type, exec, { once: true, capture: true });
  return cancelTimer;
}
function observeAttributesImpl(node, options) {
  if (!node) return;
  const { attributes: attributes2, callback: fn } = options;
  const win = node.ownerDocument.defaultView || window;
  const obs = new win.MutationObserver((changes) => {
    for (const change of changes) {
      if (change.type === "attributes" && change.attributeName && attributes2.includes(change.attributeName)) {
        fn(change);
      }
    }
  });
  obs.observe(node, { attributes: true, attributeFilter: attributes2 });
  return () => obs.disconnect();
}
function observeAttributes(nodeOrFn, options) {
  const { defer } = options;
  const func = defer ? raf : (v) => v();
  const cleanups = [];
  cleanups.push(
    func(() => {
      const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
      cleanups.push(observeAttributesImpl(node, options));
    })
  );
  return () => {
    cleanups.forEach((fn) => fn?.());
  };
}
function observeChildrenImpl(node, options) {
  const { callback: fn } = options;
  if (!node) return;
  const win = node.ownerDocument.defaultView || window;
  const obs = new win.MutationObserver(fn);
  obs.observe(node, { childList: true, subtree: true });
  return () => obs.disconnect();
}
function observeChildren(nodeOrFn, options) {
  const { defer } = options;
  const func = defer ? raf : (v) => v();
  const cleanups = [];
  cleanups.push(
    func(() => {
      const node = typeof nodeOrFn === "function" ? nodeOrFn() : nodeOrFn;
      cleanups.push(observeChildrenImpl(node, options));
    })
  );
  return () => {
    cleanups.forEach((fn) => fn?.());
  };
}
function clickIfLink(el) {
  const click = () => {
    const win = getWindow(el);
    el.dispatchEvent(new win.MouseEvent("click"));
  };
  if (isFirefox()) {
    queueBeforeEvent(el, "keyup", click);
  } else {
    queueMicrotask(click);
  }
}
function queryAll(root, selector) {
  return Array.from(root?.querySelectorAll(selector) ?? []);
}
var defaultItemToId = (v) => v.id;
function itemById(v, id, itemToId = defaultItemToId) {
  return v.find((item) => itemToId(item) === id);
}
function indexOfId(v, id, itemToId = defaultItemToId) {
  const item = itemById(v, id, itemToId);
  return item ? v.indexOf(item) : -1;
}
function nextById(v, id, loop = true) {
  let idx = indexOfId(v, id);
  idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);
  return v[idx];
}
function prevById(v, id, loop = true) {
  let idx = indexOfId(v, id);
  if (idx === -1) return loop ? v[v.length - 1] : null;
  idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);
  return v[idx];
}
function createSharedResizeObserver(options) {
  const listeners = /* @__PURE__ */ new WeakMap();
  let observer;
  const entries = /* @__PURE__ */ new WeakMap();
  const getObserver = (win) => {
    if (observer) return observer;
    observer = new win.ResizeObserver((observedEntries) => {
      for (const entry of observedEntries) {
        entries.set(entry.target, entry);
        const elementListeners = listeners.get(entry.target);
        if (elementListeners) {
          for (const listener of elementListeners) {
            listener(entry);
          }
        }
      }
    });
    return observer;
  };
  const observe = (element, listener) => {
    let elementListeners = listeners.get(element) || /* @__PURE__ */ new Set();
    elementListeners.add(listener);
    listeners.set(element, elementListeners);
    const win = getWindow(element);
    getObserver(win).observe(element, options);
    return () => {
      const elementListeners2 = listeners.get(element);
      if (!elementListeners2) return;
      elementListeners2.delete(listener);
      if (elementListeners2.size === 0) {
        listeners.delete(element);
        getObserver(win).unobserve(element);
      }
    };
  };
  const unobserve = (element) => {
    listeners.delete(element);
    observer?.unobserve(element);
  };
  return {
    observe,
    unobserve
  };
}
var resizeObserverBorderBox = /* @__PURE__ */ createSharedResizeObserver({
  box: "border-box"
});
function createScope(props2) {
  const getRootNode = () => props2.getRootNode?.() ?? document;
  const getDoc = () => getDocument(getRootNode());
  const getWin = () => getDoc().defaultView ?? window;
  const getActiveElementFn = () => getActiveElement(getRootNode());
  const getById = (id) => getRootNode().getElementById(id);
  return {
    ...props2,
    getRootNode,
    getDoc,
    getWin,
    getActiveElement: getActiveElementFn,
    isActiveElement,
    getById
  };
}
function createNormalizer(fn) {
  return new Proxy({}, {
    get(_target, key) {
      if (key === "style")
        return (props2) => {
          return fn({ style: props2 }).style;
        };
      return fn;
    }
  });
}
var createProps = () => (props2) => Array.from(new Set(props2));
const propMap = {
  className: "class",
  defaultChecked: "checked",
  defaultValue: "value",
  htmlFor: "for",
  onBlur: "onfocusout",
  onChange: "oninput",
  onFocus: "onfocusin",
  onDoubleClick: "ondblclick"
};
function toStyleString(style) {
  let string = "";
  for (let key in style) {
    const value = style[key];
    if (value === null || value === void 0)
      continue;
    if (!key.startsWith("--"))
      key = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
    string += `${key}:${value};`;
  }
  return string;
}
const preserveKeys = new Set("viewBox,className,preserveAspectRatio,fillRule,clipPath,clipRule,strokeWidth,strokeLinecap,strokeLinejoin,strokeDasharray,strokeDashoffset,strokeMiterlimit".split(","));
function toSvelteProp(key) {
  if (key in propMap)
    return propMap[key];
  if (preserveKeys.has(key))
    return key;
  return key.toLowerCase();
}
function toSveltePropValue(key, value) {
  if (key === "style" && typeof value === "object")
    return toStyleString(value);
  return value;
}
const normalizeProps = createNormalizer((props2) => {
  const normalized = {};
  for (const key in props2) {
    normalized[toSvelteProp(key)] = toSveltePropValue(key, props2[key]);
  }
  return normalized;
});
const CSS_REGEX = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
const serialize = (style) => {
  const res = {};
  let match;
  while (match = CSS_REGEX.exec(style)) {
    res[match[1]] = match[2];
  }
  return res;
};
function mergeProps(...args) {
  const classNames = [];
  for (const props2 of args) {
    if (!props2)
      continue;
    if ("class" in props2 && props2.class != null) {
      classNames.push(props2.class);
    }
  }
  const merged = mergeProps$1(...args);
  if (classNames.length > 0) {
    merged.class = classNames.length === 1 ? classNames[0] : classNames;
  }
  if ("style" in merged) {
    if (typeof merged.style === "string") {
      merged.style = serialize(merged.style);
    }
    merged.style = toStyleString(merged.style);
  }
  return merged;
}
function bindable(props2) {
  const initial = props2().defaultValue ?? props2().value;
  const eq = props2().isEqual ?? Object.is;
  let value = initial;
  const controlled = derived(() => props2().value !== void 0);
  let valueRef = { current: run(() => value) };
  let prevValue = { current: void 0 };
  const setValueFn = (v) => {
    const next = isFunction(v) ? v(valueRef.current) : v;
    const prev = prevValue.current;
    if (props2().debug) {
      console.log(`[bindable > ${props2().debug}] setValue`, { next, prev });
    }
    if (!controlled()) value = next;
    if (!eq(next, prev)) {
      props2().onChange?.(next, prev);
    }
  };
  function get() {
    return controlled() ? props2().value : value;
  }
  return {
    initial,
    ref: valueRef,
    get,
    set(val) {
      const exec = props2().sync ? noop : identity;
      run(() => exec(() => setValueFn(val)));
    },
    invoke(nextValue, prevValue2) {
      props2().onChange?.(nextValue, prevValue2);
    },
    hash(value2) {
      return props2().hash?.(value2) ?? String(value2);
    }
  };
}
bindable.cleanup = (fn) => {
  onDestroy(() => fn());
};
bindable.ref = (defaultValue) => {
  let value = defaultValue;
  return {
    get: () => value,
    set: (next) => {
      value = next;
    }
  };
};
function useRefs(refs) {
  const ref = { current: refs };
  return {
    get(key) {
      return ref.current[key];
    },
    set(key, value) {
      ref.current[key] = value;
    }
  };
}
const track = (deps, effect) => {
};
function access(userProps) {
  if (isFunction(userProps)) return userProps();
  return userProps;
}
function useMachine(machine2, userProps) {
  const scope = derived(() => {
    const { id, ids, getRootNode } = access(userProps);
    return createScope({ id, ids, getRootNode });
  });
  const debug = (...args) => {
    if (machine2.debug) console.log(...args);
  };
  const props2 = derived(() => machine2.props?.({ props: compact(access(userProps)), scope: scope() }) ?? access(userProps));
  const prop = useProp(() => props2());
  const context = machine2.context?.({
    prop,
    bindable,
    get scope() {
      return scope();
    },
    flush,
    getContext() {
      return ctx;
    },
    getComputed() {
      return computed;
    },
    getRefs() {
      return refs;
    },
    getEvent() {
      return getEvent();
    }
  });
  const ctx = {
    get(key) {
      return context?.[key].get();
    },
    set(key, value) {
      context?.[key].set(value);
    },
    initial(key) {
      return context?.[key].initial;
    },
    hash(key) {
      const current = context?.[key].get();
      return context?.[key].hash(current);
    }
  };
  let effects = /* @__PURE__ */ new Map();
  let transitionRef = { current: null };
  let previousEventRef = { current: null };
  let eventRef = { current: { type: "" } };
  const getEvent = () => ({
    ...eventRef.current,
    current() {
      return eventRef.current;
    },
    previous() {
      return previousEventRef.current;
    }
  });
  const getState = () => ({
    ...state,
    hasTag(tag) {
      const currentState = state.get();
      return hasTag(machine2, currentState, tag);
    },
    matches(...values) {
      const currentState = state.get();
      return values.some((value) => matchesState(currentState, value));
    }
  });
  const refs = useRefs(machine2.refs?.({ prop, context: ctx }) ?? {});
  const getParams = () => ({
    state: getState(),
    context: ctx,
    event: getEvent(),
    prop,
    send,
    action,
    guard,
    track,
    refs,
    computed,
    flush,
    scope: scope(),
    choose
  });
  const action = (keys) => {
    const strs = isFunction(keys) ? keys(getParams()) : keys;
    if (!strs) return;
    const fns = strs.map((s) => {
      const fn = machine2.implementations?.actions?.[s];
      if (!fn) warn(`[zag-js] No implementation found for action "${JSON.stringify(s)}"`);
      return fn;
    });
    for (const fn of fns) {
      fn?.(getParams());
    }
  };
  const guard = (str) => {
    if (isFunction(str)) return str(getParams());
    return machine2.implementations?.guards?.[str](getParams());
  };
  const effect = (keys) => {
    const strs = isFunction(keys) ? keys(getParams()) : keys;
    if (!strs) return;
    const fns = strs.map((s) => {
      const fn = machine2.implementations?.effects?.[s];
      if (!fn) warn(`[zag-js] No implementation found for effect "${JSON.stringify(s)}"`);
      return fn;
    });
    const cleanups = [];
    for (const fn of fns) {
      const cleanup = fn?.(getParams());
      if (cleanup) cleanups.push(cleanup);
    }
    return () => cleanups.forEach((fn) => fn?.());
  };
  const choose = (transitions) => {
    return toArray(transitions).find((t) => {
      let result = !t.guard;
      if (isString(t.guard)) result = !!guard(t.guard);
      else if (isFunction(t.guard)) result = t.guard(getParams());
      return result;
    });
  };
  const computed = (key) => {
    ensure(machine2.computed, () => `[zag-js] No computed object found on machine`);
    const fn = machine2.computed[key];
    return fn({
      context: ctx,
      event: getEvent(),
      prop,
      refs,
      scope: scope(),
      computed
    });
  };
  const state = bindable(() => ({
    defaultValue: resolveStateValue(machine2, machine2.initialState({ prop })),
    onChange(nextState, prevState) {
      const { exiting, entering } = getExitEnterStates(machine2, prevState, nextState, transitionRef.current?.reenter);
      exiting.forEach((item) => {
        const exitEffects = effects.get(item.path);
        exitEffects?.();
        effects.delete(item.path);
      });
      exiting.forEach((item) => {
        action(item.state?.exit);
      });
      action(transitionRef.current?.actions);
      entering.forEach((item) => {
        const cleanup = effect(item.state?.effects);
        if (cleanup) effects.set(item.path, cleanup);
      });
      if (prevState === INIT_STATE) {
        action(machine2.entry);
        const cleanup = effect(machine2.effects);
        if (cleanup) effects.set(INIT_STATE, cleanup);
      }
      entering.forEach((item) => {
        action(item.state?.entry);
      });
    }
  }));
  let status = MachineStatus.NotStarted;
  onDestroy(() => {
    debug("unmounting...");
    status = MachineStatus.Stopped;
    effects.forEach((fn) => fn?.());
    effects = /* @__PURE__ */ new Map();
    transitionRef.current = null;
    action(machine2.exit);
  });
  const send = (event) => {
    if (status !== MachineStatus.Started) return;
    previousEventRef.current = eventRef.current;
    eventRef.current = event;
    let currentState = state.get();
    const { transitions, source } = findTransition(machine2, currentState, event.type);
    const transition = choose(transitions);
    if (!transition) return;
    transitionRef.current = transition;
    const target = resolveStateValue(machine2, transition.target ?? currentState, source);
    debug("transition", event.type, transition.target || currentState, `(${transition.actions})`);
    const changed = target !== currentState;
    if (changed) {
      state.set(target);
    } else if (transition.reenter) {
      state.invoke(currentState, currentState);
    } else {
      action(transition.actions);
    }
  };
  machine2.watch?.(getParams());
  return {
    get state() {
      return getState();
    },
    send,
    context: ctx,
    prop,
    get scope() {
      return scope();
    },
    refs,
    computed,
    get event() {
      return getEvent();
    },
    getStatus: () => status
  };
}
function useProp(value) {
  return function get(key) {
    return value()[key];
  };
}
function flush(fn) {
}
function Item_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const accordion = RootContext$2.consume();
    const itemProps2 = ItemContext.consume();
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(accordion().getItemContentProps(itemProps2()), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Item_indicator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const accordion = RootContext$2.consume();
    const itemProps2 = ItemContext.consume();
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(accordion().getItemIndicatorProps(itemProps2()), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Item_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const accordion = RootContext$2.consume();
    const itemProps2 = ItemContext.consume();
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(accordion().getItemTriggerProps(itemProps2()), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
var createAnatomy = (name, parts2 = []) => ({
  parts: (...values) => {
    if (isEmpty(parts2)) {
      return createAnatomy(name, values);
    }
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...values) => createAnatomy(name, [...parts2, ...values]),
  omit: (...values) => createAnatomy(name, parts2.filter((part) => !values.includes(part))),
  rename: (newName) => createAnatomy(newName, parts2),
  keys: () => parts2,
  build: () => [...new Set(parts2)].reduce(
    (prev, part) => Object.assign(prev, {
      [part]: {
        selector: [
          `&[data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`,
          `& [data-scope="${toKebabCase(name)}"][data-part="${toKebabCase(part)}"]`
        ].join(", "),
        attrs: { "data-scope": toKebabCase(name), "data-part": toKebabCase(part) }
      }
    }),
    {}
  )
});
var toKebabCase = (value) => value.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase();
var isEmpty = (v) => v.length === 0;
var anatomy$2 = createAnatomy("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator");
var parts$2 = anatomy$2.build();
var getRootId$2 = (ctx) => ctx.ids?.root ?? `accordion:${ctx.id}`;
var getItemId = (ctx, value) => ctx.ids?.item?.(value) ?? `accordion:${ctx.id}:item:${value}`;
var getItemContentId = (ctx, value) => ctx.ids?.itemContent?.(value) ?? `accordion:${ctx.id}:content:${value}`;
var getItemTriggerId = (ctx, value) => ctx.ids?.itemTrigger?.(value) ?? `accordion:${ctx.id}:trigger:${value}`;
var getRootEl$1 = (ctx) => ctx.getById(getRootId$2(ctx));
var getTriggerEls = (ctx) => {
  const ownerId = CSS.escape(getRootId$2(ctx));
  const selector = `[data-controls][data-ownedby='${ownerId}']:not([disabled])`;
  return queryAll(getRootEl$1(ctx), selector);
};
var getFirstTriggerEl$1 = (ctx) => first(getTriggerEls(ctx));
var getLastTriggerEl$1 = (ctx) => last(getTriggerEls(ctx));
var getNextTriggerEl$1 = (ctx, id) => nextById(getTriggerEls(ctx), getItemTriggerId(ctx, id));
var getPrevTriggerEl$1 = (ctx, id) => prevById(getTriggerEls(ctx), getItemTriggerId(ctx, id));
function connect$2(service, normalize) {
  const { send, context, prop, scope, computed } = service;
  const focusedValue = context.get("focusedValue");
  const value = context.get("value");
  const multiple = prop("multiple");
  function setValue(value2) {
    let nextValue = value2;
    if (!multiple && nextValue.length > 1) {
      nextValue = [nextValue[0]];
    }
    send({ type: "VALUE.SET", value: nextValue });
  }
  function getItemState(props2) {
    return {
      expanded: value.includes(props2.value),
      focused: focusedValue === props2.value,
      disabled: Boolean(props2.disabled ?? prop("disabled"))
    };
  }
  return {
    focusedValue,
    value,
    setValue,
    getItemState,
    getRootProps() {
      return normalize.element({
        ...parts$2.root.attrs,
        dir: prop("dir"),
        id: getRootId$2(scope),
        "data-orientation": prop("orientation")
      });
    },
    getItemProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts$2.item.attrs,
        dir: prop("dir"),
        id: getItemId(scope, props2.value),
        "data-state": itemState.expanded ? "open" : "closed",
        "data-focus": dataAttr(itemState.focused),
        "data-disabled": dataAttr(itemState.disabled),
        "data-orientation": prop("orientation")
      });
    },
    getItemContentProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts$2.itemContent.attrs,
        dir: prop("dir"),
        role: "region",
        id: getItemContentId(scope, props2.value),
        "aria-labelledby": getItemTriggerId(scope, props2.value),
        hidden: !itemState.expanded,
        "data-state": itemState.expanded ? "open" : "closed",
        "data-disabled": dataAttr(itemState.disabled),
        "data-focus": dataAttr(itemState.focused),
        "data-orientation": prop("orientation")
      });
    },
    getItemIndicatorProps(props2) {
      const itemState = getItemState(props2);
      return normalize.element({
        ...parts$2.itemIndicator.attrs,
        dir: prop("dir"),
        "aria-hidden": true,
        "data-state": itemState.expanded ? "open" : "closed",
        "data-disabled": dataAttr(itemState.disabled),
        "data-focus": dataAttr(itemState.focused),
        "data-orientation": prop("orientation")
      });
    },
    getItemTriggerProps(props2) {
      const { value: value2 } = props2;
      const itemState = getItemState(props2);
      return normalize.button({
        ...parts$2.itemTrigger.attrs,
        type: "button",
        dir: prop("dir"),
        id: getItemTriggerId(scope, value2),
        "aria-controls": getItemContentId(scope, value2),
        "data-controls": getItemContentId(scope, value2),
        "aria-expanded": itemState.expanded,
        disabled: itemState.disabled,
        "data-orientation": prop("orientation"),
        "aria-disabled": itemState.disabled,
        "data-state": itemState.expanded ? "open" : "closed",
        "data-ownedby": getRootId$2(scope),
        onFocus() {
          if (itemState.disabled) return;
          send({ type: "TRIGGER.FOCUS", value: value2 });
        },
        onBlur() {
          if (itemState.disabled) return;
          send({ type: "TRIGGER.BLUR" });
        },
        onClick(event) {
          if (itemState.disabled) return;
          if (isSafari()) {
            event.currentTarget.focus();
          }
          send({ type: "TRIGGER.CLICK", value: value2 });
        },
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (itemState.disabled) return;
          const keyMap2 = {
            ArrowDown() {
              if (computed("isHorizontal")) return;
              send({ type: "GOTO.NEXT", value: value2 });
            },
            ArrowUp() {
              if (computed("isHorizontal")) return;
              send({ type: "GOTO.PREV", value: value2 });
            },
            ArrowRight() {
              if (!computed("isHorizontal")) return;
              send({ type: "GOTO.NEXT", value: value2 });
            },
            ArrowLeft() {
              if (!computed("isHorizontal")) return;
              send({ type: "GOTO.PREV", value: value2 });
            },
            Home() {
              send({ type: "GOTO.FIRST", value: value2 });
            },
            End() {
              send({ type: "GOTO.LAST", value: value2 });
            }
          };
          const key = getEventKey(event, {
            dir: prop("dir"),
            orientation: prop("orientation")
          });
          const exec = keyMap2[key];
          if (exec) {
            exec(event);
            event.preventDefault();
          }
        }
      });
    }
  };
}
var { and, not } = createGuards();
var machine$2 = createMachine$1({
  props({ props: props2 }) {
    return {
      collapsible: false,
      multiple: false,
      orientation: "vertical",
      defaultValue: [],
      ...props2
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable: bindable2 }) {
    return {
      focusedValue: bindable2(() => ({
        defaultValue: null,
        sync: true,
        onChange(value) {
          prop("onFocusChange")?.({ value });
        }
      })),
      value: bindable2(() => ({
        defaultValue: prop("defaultValue"),
        value: prop("value"),
        onChange(value) {
          prop("onValueChange")?.({ value });
        }
      }))
    };
  },
  computed: {
    isHorizontal: ({ prop }) => prop("orientation") === "horizontal"
  },
  on: {
    "VALUE.SET": {
      actions: ["setValue"]
    }
  },
  states: {
    idle: {
      on: {
        "TRIGGER.FOCUS": {
          target: "focused",
          actions: ["setFocusedValue"]
        }
      }
    },
    focused: {
      on: {
        "GOTO.NEXT": {
          actions: ["focusNextTrigger"]
        },
        "GOTO.PREV": {
          actions: ["focusPrevTrigger"]
        },
        "TRIGGER.CLICK": [
          {
            guard: and("isExpanded", "canToggle"),
            actions: ["collapse"]
          },
          {
            guard: not("isExpanded"),
            actions: ["expand"]
          }
        ],
        "GOTO.FIRST": {
          actions: ["focusFirstTrigger"]
        },
        "GOTO.LAST": {
          actions: ["focusLastTrigger"]
        },
        "TRIGGER.BLUR": {
          target: "idle",
          actions: ["clearFocusedValue"]
        }
      }
    }
  },
  implementations: {
    guards: {
      canToggle: ({ prop }) => !!prop("collapsible") || !!prop("multiple"),
      isExpanded: ({ context, event }) => context.get("value").includes(event.value)
    },
    actions: {
      collapse({ context, prop, event }) {
        const next = prop("multiple") ? remove(context.get("value"), event.value) : [];
        context.set("value", next);
      },
      expand({ context, prop, event }) {
        const next = prop("multiple") ? add(context.get("value"), event.value) : [event.value];
        context.set("value", next);
      },
      focusFirstTrigger({ scope }) {
        getFirstTriggerEl$1(scope)?.focus();
      },
      focusLastTrigger({ scope }) {
        getLastTriggerEl$1(scope)?.focus();
      },
      focusNextTrigger({ context, scope }) {
        const focusedValue = context.get("focusedValue");
        if (!focusedValue) return;
        const triggerEl = getNextTriggerEl$1(scope, focusedValue);
        triggerEl?.focus();
      },
      focusPrevTrigger({ context, scope }) {
        const focusedValue = context.get("focusedValue");
        if (!focusedValue) return;
        const triggerEl = getPrevTriggerEl$1(scope, focusedValue);
        triggerEl?.focus();
      },
      setFocusedValue({ context, event }) {
        context.set("focusedValue", event.value);
      },
      clearFocusedValue({ context }) {
        context.set("focusedValue", null);
      },
      setValue({ context, event }) {
        context.set("value", event.value);
      },
      coarseValue({ context, prop }) {
        if (!prop("multiple") && context.get("value").length > 1) {
          warn(`The value of accordion should be a single value when multiple is false.`);
          context.set("value", [context.get("value")[0]]);
        }
      }
    }
  }
});
var props$2 = createProps()([
  "collapsible",
  "dir",
  "disabled",
  "getRootNode",
  "id",
  "ids",
  "multiple",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "value",
  "defaultValue"
]);
var splitProps$2 = createSplitProps(props$2);
var itemProps = createProps()(["value", "disabled"]);
var splitItemProps = createSplitProps(itemProps);
function Item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const accordion = RootContext$2.consume();
    const $$d = derived(() => splitItemProps(props2)), $$derived_array = derived(() => to_array($$d(), 2)), itemProps2 = derived(() => $$derived_array()[0]), componentProps = derived(() => $$derived_array()[1]);
    const element = derived(() => componentProps().element), children = derived(() => componentProps().children), rest = derived(() => exclude_from_object(componentProps(), ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(accordion().getItemProps(itemProps2()), rest()));
    ItemContext.provide(() => itemProps2());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Root_context$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const accordion = RootContext$2.consume();
    const children = derived(() => props2.children);
    children()($$renderer2, accordion);
    $$renderer2.push(`<!---->`);
  });
}
function Root_provider$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), accordion = derived(() => props2.value), rest = derived(() => exclude_from_object(props2, ["element", "children", "value"]));
    const attributes$1 = derived(() => mergeProps(accordion()().getRootProps(), rest()));
    RootContext$2.provide(() => accordion()());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function useAccordion(props2) {
  const service = useMachine(machine$2, props2);
  const accordion = derived(() => connect$2(service, normalizeProps));
  return () => accordion();
}
function Root$3($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const id = props_id($$renderer2);
    const { $$slots, $$events, ...props2 } = $$props;
    const $$d = derived(() => splitProps$2(props2)), $$derived_array = derived(() => to_array($$d(), 2)), accordionProps = derived(() => $$derived_array()[0]), componentProps = derived(() => $$derived_array()[1]);
    const element = derived(() => componentProps().element), children = derived(() => componentProps().children), rest = derived(() => exclude_from_object(componentProps(), ["element", "children"]));
    const accordion = useAccordion(() => ({ ...accordionProps(), id }));
    const attributes$1 = derived(() => mergeProps(accordion().getRootProps(), rest()));
    RootContext$2.provide(() => accordion());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const Accordion = Object.assign(Root$3, {
  Provider: Root_provider$2,
  Context: Root_context$2,
  Item,
  ItemTrigger: Item_trigger,
  ItemIndicator: Item_indicator,
  ItemContent: Item_content
});
function Headline($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps({ "data-scope": "app-bar", "data-part": "headline" }, rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Lead($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps({ "data-scope": "app-bar", "data-part": "lead" }, rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<nav${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></nav>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Root$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps({ "data-scope": "app-bar", "data-part": "root" }, rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<header${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></header>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Toolbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps({ "data-scope": "app-bar", "data-part": "toolbar" }, rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Trail($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps({ "data-scope": "app-bar", "data-part": "trail" }, rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<nav${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></nav>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const AppBar = Object.assign(Root$2, {
  Toolbar,
  Lead,
  Headline,
  Trail
});
const RootContext$1 = createContext();
function Fallback($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const avatar = RootContext$1.consume();
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(avatar().getFallbackProps(), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<span${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></span>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Image($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const avatar = RootContext$1.consume();
    const element = derived(() => props2.element), rest = derived(() => exclude_from_object(props2, ["element"]));
    const attributes$1 = derived(() => mergeProps(avatar().getImageProps(), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<img${attributes({ ...attributes$1() })} onload="this.__e=event" onerror="this.__e=event"/>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Root_context$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const avatar = RootContext$1.consume();
    const children = derived(() => props2.children);
    children()($$renderer2, avatar);
    $$renderer2.push(`<!---->`);
  });
}
function Root_provider$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), avatar = derived(() => props2.value), rest = derived(() => exclude_from_object(props2, ["element", "children", "value"]));
    const attributes$1 = derived(() => mergeProps(avatar()().getRootProps(), rest()));
    RootContext$1.provide(() => avatar()());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
var anatomy$1 = createAnatomy("avatar").parts("root", "image", "fallback");
var parts$1 = anatomy$1.build();
var getRootId$1 = (ctx) => ctx.ids?.root ?? `avatar:${ctx.id}`;
var getImageId = (ctx) => ctx.ids?.image ?? `avatar:${ctx.id}:image`;
var getFallbackId = (ctx) => ctx.ids?.fallback ?? `avatar:${ctx.id}:fallback`;
var getRootEl = (ctx) => ctx.getById(getRootId$1(ctx));
var getImageEl = (ctx) => ctx.getById(getImageId(ctx));
function connect$1(service, normalize) {
  const { state, send, prop, scope } = service;
  const loaded = state.matches("loaded");
  return {
    loaded,
    setSrc(src) {
      const img = getImageEl(scope);
      img?.setAttribute("src", src);
    },
    setLoaded() {
      send({ type: "img.loaded", src: "api" });
    },
    setError() {
      send({ type: "img.error", src: "api" });
    },
    getRootProps() {
      return normalize.element({
        ...parts$1.root.attrs,
        dir: prop("dir"),
        id: getRootId$1(scope)
      });
    },
    getImageProps() {
      return normalize.img({
        ...parts$1.image.attrs,
        hidden: !loaded,
        dir: prop("dir"),
        id: getImageId(scope),
        "data-state": loaded ? "visible" : "hidden",
        onLoad() {
          send({ type: "img.loaded", src: "element" });
        },
        onError() {
          send({ type: "img.error", src: "element" });
        }
      });
    },
    getFallbackProps() {
      return normalize.element({
        ...parts$1.fallback.attrs,
        dir: prop("dir"),
        id: getFallbackId(scope),
        hidden: loaded,
        "data-state": loaded ? "hidden" : "visible"
      });
    }
  };
}
var machine$1 = createMachine$1({
  initialState() {
    return "loading";
  },
  effects: ["trackImageRemoval", "trackSrcChange"],
  on: {
    "src.change": {
      target: "loading"
    },
    "img.unmount": {
      target: "error"
    }
  },
  states: {
    loading: {
      entry: ["checkImageStatus"],
      on: {
        "img.loaded": {
          target: "loaded",
          actions: ["invokeOnLoad"]
        },
        "img.error": {
          target: "error",
          actions: ["invokeOnError"]
        }
      }
    },
    error: {
      on: {
        "img.loaded": {
          target: "loaded",
          actions: ["invokeOnLoad"]
        }
      }
    },
    loaded: {
      on: {
        "img.error": {
          target: "error",
          actions: ["invokeOnError"]
        }
      }
    }
  },
  implementations: {
    actions: {
      invokeOnLoad({ prop }) {
        prop("onStatusChange")?.({ status: "loaded" });
      },
      invokeOnError({ prop }) {
        prop("onStatusChange")?.({ status: "error" });
      },
      checkImageStatus({ send, scope }) {
        const imageEl = getImageEl(scope);
        if (!imageEl?.complete) return;
        const type = hasLoaded(imageEl) ? "img.loaded" : "img.error";
        send({ type, src: "ssr" });
      }
    },
    effects: {
      trackImageRemoval({ send, scope }) {
        const rootEl = getRootEl(scope);
        return observeChildren(rootEl, {
          callback(records) {
            const removedNodes = Array.from(records[0].removedNodes);
            const removed = removedNodes.find(
              (node) => node.nodeType === Node.ELEMENT_NODE && node.matches("[data-scope=avatar][data-part=image]")
            );
            if (removed) {
              send({ type: "img.unmount" });
            }
          }
        });
      },
      trackSrcChange({ send, scope }) {
        const imageEl = getImageEl(scope);
        return observeAttributes(imageEl, {
          attributes: ["src", "srcset"],
          callback() {
            send({ type: "src.change" });
          }
        });
      }
    }
  }
});
function hasLoaded(image) {
  return image.complete && image.naturalWidth !== 0 && image.naturalHeight !== 0;
}
var props$1 = createProps()(["dir", "id", "ids", "onStatusChange", "getRootNode"]);
var splitProps$1 = createSplitProps(props$1);
function useAvatar(props2) {
  const service = useMachine(machine$1, props2);
  const avatar = derived(() => connect$1(service, normalizeProps));
  return () => avatar();
}
function Root$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const id = props_id($$renderer2);
    const { $$slots, $$events, ...props2 } = $$props;
    const $$d = derived(() => splitProps$1(props2)), $$derived_array = derived(() => to_array($$d(), 2)), avatarProps = derived(() => $$derived_array()[0]), componentProps = derived(() => $$derived_array()[1]);
    const element = derived(() => componentProps().element), children = derived(() => componentProps().children), rest = derived(() => exclude_from_object(componentProps(), ["element", "children"]));
    const avatar = useAvatar(() => ({ ...avatarProps(), id }));
    const attributes$1 = derived(() => mergeProps(avatar().getRootProps(), rest()));
    RootContext$1.provide(() => avatar());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const Avatar = Object.assign(Root$1, {
  Provider: Root_provider$1,
  Context: Root_context$1,
  Image,
  Fallback
});
const RootContext = createContext();
var anatomy = createAnatomy("tabs").parts("root", "list", "trigger", "content", "indicator");
var parts = anatomy.build();
var getRootId = (ctx) => ctx.ids?.root ?? `tabs:${ctx.id}`;
var getListId = (ctx) => ctx.ids?.list ?? `tabs:${ctx.id}:list`;
var getContentId = (ctx, value) => ctx.ids?.content?.(value) ?? `tabs:${ctx.id}:content-${value}`;
var getTriggerId = (ctx, value) => ctx.ids?.trigger?.(value) ?? `tabs:${ctx.id}:trigger-${value}`;
var getIndicatorId = (ctx) => ctx.ids?.indicator ?? `tabs:${ctx.id}:indicator`;
var getListEl = (ctx) => ctx.getById(getListId(ctx));
var getContentEl = (ctx, value) => ctx.getById(getContentId(ctx, value));
var getTriggerEl = (ctx, value) => value != null ? ctx.getById(getTriggerId(ctx, value)) : null;
var getIndicatorEl = (ctx) => ctx.getById(getIndicatorId(ctx));
var getElements = (ctx) => {
  const ownerId = CSS.escape(getListId(ctx));
  const selector = `[role=tab][data-ownedby='${ownerId}']:not([disabled])`;
  return queryAll(getListEl(ctx), selector);
};
var getFirstTriggerEl = (ctx) => first(getElements(ctx));
var getLastTriggerEl = (ctx) => last(getElements(ctx));
var getNextTriggerEl = (ctx, opts) => nextById(getElements(ctx), getTriggerId(ctx, opts.value), opts.loopFocus);
var getPrevTriggerEl = (ctx, opts) => prevById(getElements(ctx), getTriggerId(ctx, opts.value), opts.loopFocus);
var getOffsetRect = (el) => ({
  x: el?.offsetLeft ?? 0,
  y: el?.offsetTop ?? 0,
  width: el?.offsetWidth ?? 0,
  height: el?.offsetHeight ?? 0
});
var getRectByValue = (ctx, value) => {
  const tab = itemById(getElements(ctx), getTriggerId(ctx, value));
  return getOffsetRect(tab);
};
function connect(service, normalize) {
  const { state, send, context, prop, scope } = service;
  const translations = prop("translations");
  const focused = state.matches("focused");
  const isVertical = prop("orientation") === "vertical";
  const isHorizontal = prop("orientation") === "horizontal";
  const composite = prop("composite");
  function getTriggerState(props2) {
    return {
      selected: context.get("value") === props2.value,
      focused: context.get("focusedValue") === props2.value,
      disabled: !!props2.disabled
    };
  }
  return {
    value: context.get("value"),
    focusedValue: context.get("focusedValue"),
    setValue(value) {
      send({ type: "SET_VALUE", value });
    },
    clearValue() {
      send({ type: "CLEAR_VALUE" });
    },
    setIndicatorRect(value) {
      const id = getTriggerId(scope, value);
      send({ type: "SET_INDICATOR_RECT", id });
    },
    syncTabIndex() {
      send({ type: "SYNC_TAB_INDEX" });
    },
    selectNext(fromValue) {
      send({ type: "TAB_FOCUS", value: fromValue, src: "selectNext" });
      send({ type: "ARROW_NEXT", src: "selectNext" });
    },
    selectPrev(fromValue) {
      send({ type: "TAB_FOCUS", value: fromValue, src: "selectPrev" });
      send({ type: "ARROW_PREV", src: "selectPrev" });
    },
    focus() {
      const value = context.get("value");
      if (!value) return;
      getTriggerEl(scope, value)?.focus();
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        id: getRootId(scope),
        "data-orientation": prop("orientation"),
        "data-focus": dataAttr(focused),
        dir: prop("dir")
      });
    },
    getListProps() {
      return normalize.element({
        ...parts.list.attrs,
        id: getListId(scope),
        role: "tablist",
        dir: prop("dir"),
        "data-focus": dataAttr(focused),
        "aria-orientation": prop("orientation"),
        "data-orientation": prop("orientation"),
        "aria-label": translations?.listLabel,
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (isComposingEvent(event)) return;
          if (!contains(event.currentTarget, getEventTarget(event))) return;
          const keyMap2 = {
            ArrowDown() {
              if (isHorizontal) return;
              send({ type: "ARROW_NEXT", key: "ArrowDown" });
            },
            ArrowUp() {
              if (isHorizontal) return;
              send({ type: "ARROW_PREV", key: "ArrowUp" });
            },
            ArrowLeft() {
              if (isVertical) return;
              send({ type: "ARROW_PREV", key: "ArrowLeft" });
            },
            ArrowRight() {
              if (isVertical) return;
              send({ type: "ARROW_NEXT", key: "ArrowRight" });
            },
            Home() {
              send({ type: "HOME" });
            },
            End() {
              send({ type: "END" });
            }
          };
          let key = getEventKey(event, {
            dir: prop("dir"),
            orientation: prop("orientation")
          });
          const exec = keyMap2[key];
          if (exec) {
            event.preventDefault();
            exec(event);
            return;
          }
        }
      });
    },
    getTriggerState,
    getTriggerProps(props2) {
      const { value, disabled } = props2;
      const triggerState = getTriggerState(props2);
      return normalize.button({
        ...parts.trigger.attrs,
        role: "tab",
        type: "button",
        disabled,
        dir: prop("dir"),
        "data-orientation": prop("orientation"),
        "data-disabled": dataAttr(disabled),
        "aria-disabled": disabled,
        "data-value": value,
        "aria-selected": triggerState.selected,
        "data-selected": dataAttr(triggerState.selected),
        "data-focus": dataAttr(triggerState.focused),
        "aria-controls": triggerState.selected ? getContentId(scope, value) : void 0,
        "data-ownedby": getListId(scope),
        "data-ssr": dataAttr(context.get("ssr")),
        id: getTriggerId(scope, value),
        tabIndex: triggerState.selected && composite ? 0 : -1,
        onFocus() {
          send({ type: "TAB_FOCUS", value });
        },
        onBlur(event) {
          const target = event.relatedTarget;
          if (target?.getAttribute("role") !== "tab") {
            send({ type: "TAB_BLUR" });
          }
        },
        onClick(event) {
          if (event.defaultPrevented) return;
          if (isOpeningInNewTab(event)) return;
          if (disabled) return;
          if (isSafari()) {
            event.currentTarget.focus();
          }
          send({ type: "TAB_CLICK", value });
        }
      });
    },
    getContentProps(props2) {
      const { value } = props2;
      const selected = context.get("value") === value;
      return normalize.element({
        ...parts.content.attrs,
        dir: prop("dir"),
        id: getContentId(scope, value),
        tabIndex: composite ? 0 : -1,
        "aria-labelledby": getTriggerId(scope, value),
        role: "tabpanel",
        "data-ownedby": getListId(scope),
        "data-selected": dataAttr(selected),
        "data-orientation": prop("orientation"),
        hidden: !selected
      });
    },
    getIndicatorProps() {
      const rect = context.get("indicatorRect");
      const rectIsEmpty = rect == null || rect.width === 0 && rect.height === 0 && rect.x === 0 && rect.y === 0;
      return normalize.element({
        id: getIndicatorId(scope),
        ...parts.indicator.attrs,
        dir: prop("dir"),
        "data-orientation": prop("orientation"),
        hidden: rectIsEmpty,
        style: {
          "--transition-property": "left, right, top, bottom, width, height",
          "--left": toPx(rect?.x),
          "--top": toPx(rect?.y),
          "--width": toPx(rect?.width),
          "--height": toPx(rect?.height),
          position: "absolute",
          willChange: "var(--transition-property)",
          transitionProperty: "var(--transition-property)",
          transitionDuration: "var(--transition-duration, 150ms)",
          transitionTimingFunction: "var(--transition-timing-function)",
          [isHorizontal ? "left" : "top"]: isHorizontal ? "var(--left)" : "var(--top)"
        }
      });
    }
  };
}
var { createMachine } = setup();
var machine = createMachine({
  props({ props: props2 }) {
    return {
      dir: "ltr",
      orientation: "horizontal",
      activationMode: "automatic",
      loopFocus: true,
      composite: true,
      navigate(details) {
        clickIfLink(details.node);
      },
      defaultValue: null,
      ...props2
    };
  },
  initialState() {
    return "idle";
  },
  context({ prop, bindable: bindable2 }) {
    return {
      value: bindable2(() => ({
        defaultValue: prop("defaultValue"),
        value: prop("value"),
        onChange(value) {
          prop("onValueChange")?.({ value });
        }
      })),
      focusedValue: bindable2(() => ({
        defaultValue: prop("value") || prop("defaultValue"),
        sync: true,
        onChange(value) {
          prop("onFocusChange")?.({ focusedValue: value });
        }
      })),
      ssr: bindable2(() => ({ defaultValue: true })),
      indicatorRect: bindable2(() => ({
        defaultValue: null
      }))
    };
  },
  watch({ context, prop, track: track2, action }) {
    track2([() => context.get("value")], () => {
      action(["syncIndicatorRect", "syncTabIndex", "navigateIfNeeded"]);
    });
    track2([() => prop("dir"), () => prop("orientation")], () => {
      action(["syncIndicatorRect"]);
    });
  },
  on: {
    SET_VALUE: {
      actions: ["setValue"]
    },
    CLEAR_VALUE: {
      actions: ["clearValue"]
    },
    SET_INDICATOR_RECT: {
      actions: ["setIndicatorRect"]
    },
    SYNC_TAB_INDEX: {
      actions: ["syncTabIndex"]
    }
  },
  entry: ["syncIndicatorRect", "syncTabIndex", "syncSsr"],
  exit: ["cleanupObserver"],
  states: {
    idle: {
      on: {
        TAB_FOCUS: {
          target: "focused",
          actions: ["setFocusedValue"]
        },
        TAB_CLICK: {
          target: "focused",
          actions: ["setFocusedValue", "setValue"]
        }
      }
    },
    focused: {
      on: {
        TAB_CLICK: {
          actions: ["setFocusedValue", "setValue"]
        },
        ARROW_PREV: [
          {
            guard: "selectOnFocus",
            actions: ["focusPrevTab", "selectFocusedTab"]
          },
          {
            actions: ["focusPrevTab"]
          }
        ],
        ARROW_NEXT: [
          {
            guard: "selectOnFocus",
            actions: ["focusNextTab", "selectFocusedTab"]
          },
          {
            actions: ["focusNextTab"]
          }
        ],
        HOME: [
          {
            guard: "selectOnFocus",
            actions: ["focusFirstTab", "selectFocusedTab"]
          },
          {
            actions: ["focusFirstTab"]
          }
        ],
        END: [
          {
            guard: "selectOnFocus",
            actions: ["focusLastTab", "selectFocusedTab"]
          },
          {
            actions: ["focusLastTab"]
          }
        ],
        TAB_FOCUS: {
          actions: ["setFocusedValue"]
        },
        TAB_BLUR: {
          target: "idle",
          actions: ["clearFocusedValue"]
        }
      }
    }
  },
  implementations: {
    guards: {
      selectOnFocus: ({ prop }) => prop("activationMode") === "automatic"
    },
    actions: {
      selectFocusedTab({ context, prop }) {
        raf(() => {
          const focusedValue = context.get("focusedValue");
          if (!focusedValue) return;
          const nullable = prop("deselectable") && context.get("value") === focusedValue;
          const value = nullable ? null : focusedValue;
          context.set("value", value);
        });
      },
      setFocusedValue({ context, event, flush: flush2 }) {
        if (event.value == null) return;
        flush2(() => {
          context.set("focusedValue", event.value);
        });
      },
      clearFocusedValue({ context }) {
        context.set("focusedValue", null);
      },
      setValue({ context, event, prop }) {
        const nullable = prop("deselectable") && context.get("value") === context.get("focusedValue");
        context.set("value", nullable ? null : event.value);
      },
      clearValue({ context }) {
        context.set("value", null);
      },
      focusFirstTab({ scope }) {
        raf(() => {
          getFirstTriggerEl(scope)?.focus();
        });
      },
      focusLastTab({ scope }) {
        raf(() => {
          getLastTriggerEl(scope)?.focus();
        });
      },
      focusNextTab({ context, prop, scope, event }) {
        const focusedValue = event.value ?? context.get("focusedValue");
        if (!focusedValue) return;
        const triggerEl = getNextTriggerEl(scope, {
          value: focusedValue,
          loopFocus: prop("loopFocus")
        });
        raf(() => {
          if (prop("composite")) {
            triggerEl?.focus();
          } else if (triggerEl?.dataset.value != null) {
            context.set("focusedValue", triggerEl.dataset.value);
          }
        });
      },
      focusPrevTab({ context, prop, scope, event }) {
        const focusedValue = event.value ?? context.get("focusedValue");
        if (!focusedValue) return;
        const triggerEl = getPrevTriggerEl(scope, {
          value: focusedValue,
          loopFocus: prop("loopFocus")
        });
        raf(() => {
          if (prop("composite")) {
            triggerEl?.focus();
          } else if (triggerEl?.dataset.value != null) {
            context.set("focusedValue", triggerEl.dataset.value);
          }
        });
      },
      syncTabIndex({ context, scope }) {
        raf(() => {
          const value = context.get("value");
          if (!value) return;
          const contentEl = getContentEl(scope, value);
          if (!contentEl) return;
          const focusables = getFocusables(contentEl);
          if (focusables.length > 0) {
            contentEl.removeAttribute("tabindex");
          } else {
            contentEl.setAttribute("tabindex", "0");
          }
        });
      },
      cleanupObserver({ refs }) {
        const cleanup = refs.get("indicatorCleanup");
        if (cleanup) cleanup();
      },
      setIndicatorRect({ context, event, scope }) {
        const value = event.id ?? context.get("value");
        const indicatorEl = getIndicatorEl(scope);
        if (!indicatorEl) return;
        if (!value) return;
        const triggerEl = getTriggerEl(scope, value);
        if (!triggerEl) return;
        context.set("indicatorRect", getRectByValue(scope, value));
      },
      syncSsr({ context }) {
        context.set("ssr", false);
      },
      syncIndicatorRect({ context, refs, scope }) {
        const cleanup = refs.get("indicatorCleanup");
        if (cleanup) cleanup();
        const indicatorEl = getIndicatorEl(scope);
        if (!indicatorEl) return;
        const exec = () => {
          const triggerEl = getTriggerEl(scope, context.get("value"));
          if (!triggerEl) return;
          const rect = getOffsetRect(triggerEl);
          context.set("indicatorRect", (prev) => isEqual(prev, rect) ? prev : rect);
        };
        exec();
        const triggerEls = getElements(scope);
        const indicatorCleanup = callAll(...triggerEls.map((el) => resizeObserverBorderBox.observe(el, exec)));
        refs.set("indicatorCleanup", indicatorCleanup);
      },
      navigateIfNeeded({ context, prop, scope }) {
        const value = context.get("value");
        if (!value) return;
        const triggerEl = getTriggerEl(scope, value);
        if (isAnchorElement(triggerEl)) {
          prop("navigate")?.({ value, node: triggerEl, href: triggerEl.href });
        }
      }
    }
  }
});
var props = createProps()([
  "activationMode",
  "composite",
  "deselectable",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "loopFocus",
  "navigate",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "translations",
  "value",
  "defaultValue"
]);
var splitProps = createSplitProps(props);
var triggerProps = createProps()(["disabled", "value"]);
var splitTriggerProps = createSplitProps(triggerProps);
var contentProps = createProps()(["value"]);
var splitContentProps = createSplitProps(contentProps);
function Content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const tabs = RootContext.consume();
    const $$d = derived(() => splitContentProps(props2)), $$derived_array = derived(() => to_array($$d(), 2)), contentProps2 = derived(() => $$derived_array()[0]), componentProps = derived(() => $$derived_array()[1]);
    const element = derived(() => componentProps().element), children = derived(() => componentProps().children), rest = derived(() => exclude_from_object(componentProps(), ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(tabs().getContentProps(contentProps2()), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Indicator($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const tabs = RootContext.consume();
    const element = derived(() => props2.element), rest = derived(() => exclude_from_object(props2, ["element"]));
    const attributes$1 = derived(() => mergeProps(tabs().getIndicatorProps(), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function List($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const tabs = RootContext.consume();
    const element = derived(() => props2.element), children = derived(() => props2.children), rest = derived(() => exclude_from_object(props2, ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(tabs().getListProps(), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Root_context($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const tabs = RootContext.consume();
    const children = derived(() => props2.children);
    children()($$renderer2, tabs);
    $$renderer2.push(`<!---->`);
  });
}
function Root_provider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const element = derived(() => props2.element), children = derived(() => props2.children), tabs = derived(() => props2.value), rest = derived(() => exclude_from_object(props2, ["element", "children", "value"]));
    const attributes$1 = derived(() => mergeProps(tabs()().getRootProps(), rest()));
    RootContext.provide(() => tabs()());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function useTabs(props2) {
  const service = useMachine(machine, props2);
  const tabs = derived(() => connect(service, normalizeProps));
  return () => tabs();
}
function Root($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const id = props_id($$renderer2);
    const { $$slots, $$events, ...props2 } = $$props;
    const $$d = derived(() => splitProps(props2)), $$derived_array = derived(() => to_array($$d(), 2)), tabsProps = derived(() => $$derived_array()[0]), componentProps = derived(() => $$derived_array()[1]);
    const element = derived(() => componentProps().element), children = derived(() => componentProps().children), rest = derived(() => exclude_from_object(componentProps(), ["element", "children"]));
    const tabs = useTabs(() => ({ ...tabsProps(), id }));
    const attributes$1 = derived(() => mergeProps(tabs().getRootProps(), rest()));
    RootContext.provide(() => tabs());
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props2 } = $$props;
    const tabs = RootContext.consume();
    const $$d = derived(() => splitTriggerProps(props2)), $$derived_array = derived(() => to_array($$d(), 2)), triggerProps2 = derived(() => $$derived_array()[0]), componentProps = derived(() => $$derived_array()[1]);
    const element = derived(() => componentProps().element), children = derived(() => componentProps().children), rest = derived(() => exclude_from_object(componentProps(), ["element", "children"]));
    const attributes$1 = derived(() => mergeProps(tabs().getTriggerProps(triggerProps2()), rest()));
    if (element()) {
      $$renderer2.push("<!--[0-->");
      element()($$renderer2, attributes$1());
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<button${attributes({ ...attributes$1() })}>`);
      children()?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
const Tabs = Object.assign(Root, {
  Provider: Root_provider,
  Context: Root_context,
  List,
  Trigger,
  Indicator,
  Content
});
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      cartCount = 0,
      searchQuery = "",
      showMobileMenu = false,
      activeCategory = "all",
      categories = []
    } = $$props;
    $$renderer2.push(`<div class="gradient-border sticky top-0 z-50 bg-surface-950/80 backdrop-blur-xl">`);
    AppBar($$renderer2, {
      children: ($$renderer3) => {
        if (AppBar.Toolbar) {
          $$renderer3.push("<!--[-->");
          AppBar.Toolbar($$renderer3, {
            class: "flex w-full items-center justify-between px-4 py-3 mx-auto max-w-7xl",
            children: ($$renderer4) => {
              if (AppBar.Lead) {
                $$renderer4.push("<!--[-->");
                AppBar.Lead($$renderer4, {
                  class: "flex items-center gap-4",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<button type="button" class="btn-icon hover:preset-tonal md:hidden" aria-label="Toggle menu">`);
                    if (showMobileMenu) {
                      $$renderer5.push("<!--[0-->");
                      X($$renderer5, { size: 20 });
                    } else {
                      $$renderer5.push("<!--[-1-->");
                      Menu($$renderer5, { size: 20 });
                    }
                    $$renderer5.push(`<!--]--></button> <a href="/" class="flex items-center gap-3"><div class="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500">`);
                    Flame($$renderer5, { size: 20, class: "text-white" });
                    $$renderer5.push(`<!----></div> <div class="flex flex-col leading-none"><strong class="text-lg font-black uppercase tracking-[0.15em]" style="font-family: 'Space Grotesk', sans-serif;">Riff Riot</strong> <span class="text-[0.55rem] font-medium uppercase tracking-[0.3em] text-primary-400">Streetwear</span></div></a>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
              $$renderer4.push(` `);
              if (AppBar.Trail) {
                $$renderer4.push("<!--[-->");
                AppBar.Trail($$renderer4, {
                  class: "flex items-center gap-3",
                  children: ($$renderer5) => {
                    $$renderer5.push(`<div class="hidden items-center md:flex"><input class="input w-56 bg-surface-800/50" type="search" placeholder="Search drops..."${attr("value", searchQuery)}/></div> <button type="button" class="btn-icon hover:preset-tonal md:hidden" aria-label="Search">`);
                    Search($$renderer5, { size: 18 });
                    $$renderer5.push(`<!----></button> <button type="button" class="btn-icon hover:preset-tonal" aria-label="Wishlist">`);
                    Heart($$renderer5, { size: 18 });
                    $$renderer5.push(`<!----></button> <div class="relative inline-block">`);
                    if (cartCount > 0) {
                      $$renderer5.push("<!--[0-->");
                      $$renderer5.push(`<span class="badge-icon preset-filled-error-500 absolute -right-1 -top-1 z-10 text-[0.6rem] font-bold badge-pulse">${escape_html(cartCount)}</span>`);
                    } else {
                      $$renderer5.push("<!--[-1-->");
                    }
                    $$renderer5.push(`<!--]--> <button type="button" class="btn-icon preset-filled-primary-500" title="Cart" aria-label="Cart">`);
                    Shopping_cart($$renderer5, { size: 18 });
                    $$renderer5.push(`<!----></button></div>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            },
            $$slots: { default: true }
          });
          $$renderer3.push("<!--]-->");
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push("<!--]-->");
        }
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div> `);
    if (showMobileMenu) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="border-b border-surface-800 bg-surface-900 p-4 md:hidden relative z-40"><input class="input mb-4 bg-surface-800/50" type="search" placeholder="Search products..."${attr("value", searchQuery)}/> <nav class="flex flex-col gap-1 text-xs uppercase font-bold tracking-widest"><!--[-->`);
      const each_array = ensure_array_like(categories);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let cat = each_array[$$index];
        $$renderer2.push(`<button type="button"${attr_class(`p-3 text-left w-full hover:preset-tonal ${activeCategory === cat.id ? "preset-filled-primary-500" : ""}`)}>${escape_html(cat.label)}</button>`);
      }
      $$renderer2.push(`<!--]--></nav></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { searchQuery, showMobileMenu, activeCategory });
  });
}
function Section($$renderer, $$props) {
  let { children, class: className = "", id = "", fullWidth = false } = $$props;
  $$renderer.push(`<section${attr("id", id)}${attr_class(`mt-10 md:mt-16 ${stringify(className)}`)}>`);
  if (fullWidth) {
    $$renderer.push("<!--[0-->");
    children($$renderer);
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<div class="mx-auto max-w-7xl px-4 md:px-8">`);
    children($$renderer);
    $$renderer.push(`<!----></div>`);
  }
  $$renderer.push(`<!--]--></section>`);
}
function Hero($$renderer, $$props) {
  let {
    image = "images/heromodel.png",
    title = "riot.",
    subtitle = "Wear the statement. Built for the streets. Designed for the stage.",
    description = "Handcrafted underground drops. Spring/summer collection. Protection keep authentic.",
    season = "S26",
    brandLabel = "Riff / Riot",
    yearText = "Materials of\\nCreation 2026"
  } = $$props;
  Section($$renderer, {
    fullWidth: true,
    class: "bg-surface-900 text-surface-50 w-full overflow-hidden flex flex-col min-h-[90vh] !mt-0",
    id: "hero",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="mx-auto max-w-7xl w-full flex flex-col flex-1"><div class="flex w-full items-center justify-between px-4 md:px-8 py-6 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-surface-400 border-b border-surface-800 relative z-20"><div class="flex items-center gap-6 md:gap-16"><span class="text-primary-400">+1</span> <span>Collection</span></div> <div class="hidden md:flex items-center gap-12"><a href="#shop" class="hover:text-surface-50 transition-colors">Shop</a> <span class="flex items-center gap-1 hover:text-surface-50 transition-colors cursor-pointer">New Arrivals `);
      Chevron_down($$renderer2, { size: 10 });
      $$renderer2.push(`<!----></span> <span class="text-base -mt-1">···</span></div></div> <div class="relative flex-1 w-full flex flex-col md:flex-row"><div class="w-full md:w-1/2 relative px-4 md:px-8 pt-8 md:pt-12 pb-16 flex flex-col justify-between z-10"><div class="hidden lg:flex flex-row gap-10 max-w-md mb-8"><div class="flex-1 border-t border-surface-600 pt-2"><p class="text-[0.6rem] font-bold uppercase tracking-widest mb-1 text-primary-400">${escape_html(brandLabel)}</p> <p class="text-[0.45rem] leading-[1.8] uppercase text-surface-500 font-semibold max-w-[160px]">${escape_html(description)}</p></div> <div class="flex-1 border-t border-surface-600 pt-2 mt-5"><p class="text-[0.45rem] leading-[1.8] uppercase text-surface-500 font-semibold max-w-[160px]">${escape_html(subtitle)}</p></div></div> <h1 class="text-[7rem] sm:text-[9rem] md:text-[10rem] lg:text-[13rem] font-bold tracking-[-0.05em] leading-[0.82] text-surface-50 lowercase break-all break-words" style="font-family: 'Space Grotesk', sans-serif;">${escape_html(title)}</h1> <div class="mt-8 flex items-center gap-4 relative z-20"><a href="#shop" class="btn preset-filled-primary-500 btn-shine gap-2"><span>Shop Now</span>`);
      Arrow_right($$renderer2, { size: 16 });
      $$renderer2.push(`<!----></a> <a href="#reviews" class="btn preset-outlined gap-2">See Reviews</a></div> <div class="absolute bottom-6 left-6 md:left-10 hidden md:block select-none pointer-events-none"><span class="block -rotate-90 origin-bottom-left text-[5rem] lg:text-[6rem] font-black tracking-tighter text-surface-700 leading-none">001</span></div></div> <div class="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full flex items-end justify-center md:justify-end overflow-hidden group"><div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-900 to-transparent z-10 hidden md:block pointer-events-none"></div> <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-surface-900 to-transparent z-10 pointer-events-none"></div> <img${attr("src", image)}${attr("alt", title)} class="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125 mix-blend-luminosity opacity-90 transition-transform duration-[2s] group-hover:scale-105"/> <a href="#shop" class="absolute bottom-0 md:bottom-0 left-0 md:-left-12 h-14 w-14 bg-primary-500 hover:bg-primary-400 transition-colors flex items-center justify-center text-white z-20">`);
      Arrow_right($$renderer2, { size: 22 });
      $$renderer2.push(`<!----></a> <div class="absolute right-4 md:right-10 top-4 md:top-8 hidden lg:flex flex-col gap-1 text-right z-20 pointer-events-none"><span class="text-[0.65rem] font-black uppercase tracking-widest text-primary-400">${escape_html(brandLabel)}</span> <span class="text-[0.5rem] uppercase tracking-[0.15em] text-surface-400 leading-relaxed whitespace-pre-line text-right">${escape_html(yearText)}</span> <div class="ml-auto mt-2 h-16 w-px bg-surface-600"></div></div> <div class="absolute bottom-32 right-[-1rem] text-[8rem] font-black tracking-tight rotate-90 origin-right text-transparent select-none hidden md:block pointer-events-none z-10" style="-webkit-text-stroke: 1px rgba(var(--color-surface-500), 0.5);">${escape_html(season)}</div></div></div></div>`);
    }
  });
}
function Features($$renderer, $$props) {
  let { features = [] } = $$props;
  Section($$renderer, {
    class: "border-y border-surface-800 bg-surface-950 !mt-0",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid grid-cols-2 md:grid-cols-4 divide-x divide-surface-800"><!--[-->`);
      const each_array = ensure_array_like(features);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let feature = each_array[$$index];
        const Icon2 = feature.icon;
        $$renderer2.push(`<div class="flex flex-col gap-3 p-4 md:p-6 hover:bg-surface-900 transition-colors">`);
        if (Icon2) {
          $$renderer2.push("<!--[-->");
          Icon2($$renderer2, { size: 20, class: feature.color });
          $$renderer2.push("<!--]-->");
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push("<!--]-->");
        }
        $$renderer2.push(` <p class="text-sm font-bold uppercase tracking-widest">${escape_html(feature.title)}</p> <p class="text-xs text-surface-500 leading-relaxed">${escape_html(feature.description)}</p></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
  });
}
function ProductCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    function discount(original, current) {
      return Math.round((original - current) / original * 100);
    }
    $$renderer2.push(`<div class="product-card group bg-surface-950 border border-surface-800 rounded-sm overflow-hidden flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:border-surface-600"><div class="relative overflow-hidden aspect-[3/4] bg-surface-900 border-b border-surface-800"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/> <div class="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> `);
    if (product.badge) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span${attr_class(`badge ${product.badgePreset} absolute left-0 top-3 text-[0.6rem] font-black uppercase tracking-widest px-3 py-1 shadow-md`)}>${escape_html(product.badge)}</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <button type="button" class="btn-icon btn-icon-sm bg-surface-900/80 hover:bg-primary-500 hover:text-white backdrop-blur-md absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0" aria-label="Add to wishlist">`);
    Heart($$renderer2, { size: 16 });
    $$renderer2.push(`<!----></button> <div class="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 flex gap-2"><button type="button" class="btn preset-filled-primary-500 flex-1 btn-sm btn-shine shadow-lg">`);
    Shopping_cart($$renderer2, { size: 14 });
    $$renderer2.push(`<!----><span>Add to Cart</span></button> <button type="button" class="btn btn-icon preset-tonal btn-sm shadow-lg border border-surface-700 hover:border-surface-500" aria-label="Quick view">`);
    Eye($$renderer2, { size: 14 });
    $$renderer2.push(`<!----></button></div></div> <div class="p-4 flex flex-col flex-1 bg-surface-950"><div class="flex justify-between items-start mb-2"><p class="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-surface-400 group-hover:text-primary-400 transition-colors">${escape_html(product.category)}</p> <div class="flex items-center gap-1 text-[0.6rem] text-surface-400">`);
    Star($$renderer2, { size: 10, class: "fill-warning-400 text-warning-400" });
    $$renderer2.push(`<!----> <span class="font-bold">${escape_html(product.rating)}</span> <span>(${escape_html(product.reviews || 0)})</span></div></div> <h3 class="text-base font-bold leading-tight mb-3 flex-1">${escape_html(product.name)}</h3> <div class="flex items-center gap-2 mt-auto"><span class="text-lg font-black">$${escape_html(product.price)}</span> `);
    if (product.originalPrice) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span class="text-xs text-surface-500 line-through">$${escape_html(product.originalPrice)}</span> <span class="text-[0.6rem] font-black text-error-400">-${escape_html(discount(product.originalPrice, product.price))}%</span>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}
function ProductGrid($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      categories = [],
      activeCategory = "all",
      activeSize = "M",
      sizes = [],
      filteredProducts = [],
      onAddToCart = () => {
      }
    } = $$props;
    Section($$renderer2, {
      class: "pb-12",
      id: "shop",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-end justify-between border-b border-surface-700 py-6 mb-6"><div><p class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary-400 mb-1">Collection</p> <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none" style="font-family: 'Space Grotesk', sans-serif;">Shop the Drop</h2></div> <p class="text-sm text-surface-500 hidden md:block">${escape_html(filteredProducts.length)} products</p></div> `);
        Tabs($$renderer3, {
          value: activeCategory,
          onValueChange: (e) => activeCategory = e.value,
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex flex-col md:flex-row md:items-center gap-6 mb-6">`);
            if (Tabs.List) {
              $$renderer4.push("<!--[-->");
              Tabs.List($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!--[-->`);
                  const each_array = ensure_array_like(categories);
                  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                    let cat = each_array[$$index];
                    if (Tabs.Trigger) {
                      $$renderer5.push("<!--[-->");
                      Tabs.Trigger($$renderer5, {
                        value: cat.id,
                        children: ($$renderer6) => {
                          $$renderer6.push(`<!---->${escape_html(cat.label)}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer5.push("<!--]-->");
                    } else {
                      $$renderer5.push("<!--[!-->");
                      $$renderer5.push("<!--]-->");
                    }
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (Tabs.Indicator) {
                    $$renderer5.push("<!--[-->");
                    Tabs.Indicator($$renderer5, {});
                    $$renderer5.push("<!--]-->");
                  } else {
                    $$renderer5.push("<!--[!-->");
                    $$renderer5.push("<!--]-->");
                  }
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
            $$renderer4.push(` <div class="flex flex-wrap items-center gap-2 md:ml-auto"><span class="text-[0.6rem] font-bold uppercase tracking-widest text-surface-500">Size:</span> <!--[-->`);
            const each_array_1 = ensure_array_like(sizes);
            for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
              let size = each_array_1[$$index_1];
              $$renderer4.push(`<button type="button"${attr_class(`chip ${activeSize === size ? "preset-filled-primary-500" : "preset-outlined"}`)}>${escape_html(size)}</button>`);
            }
            $$renderer4.push(`<!--]--></div></div> `);
            if (Tabs.Content) {
              $$renderer4.push("<!--[-->");
              Tabs.Content($$renderer4, {
                value: activeCategory,
                children: ($$renderer5) => {
                  $$renderer5.push(`<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"><!--[-->`);
                  const each_array_2 = ensure_array_like(filteredProducts);
                  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
                    let product = each_array_2[$$index_2];
                    ProductCard($$renderer5, { product });
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (filteredProducts.length === 0) {
                    $$renderer5.push("<!--[0-->");
                    $$renderer5.push(`<div class="col-span-full border border-surface-800 p-10 text-center bg-surface-950">`);
                    Search($$renderer5, { size: 40, class: "mx-auto text-surface-700 mb-4" });
                    $$renderer5.push(`<!----> <p class="text-lg font-bold uppercase tracking-widest mb-1">No products found</p> <p class="text-sm text-surface-500 mb-4">Try a different search or category.</p> <button type="button" class="btn preset-filled-primary-500">Clear Filters</button></div>`);
                  } else {
                    $$renderer5.push("<!--[-1-->");
                  }
                  $$renderer5.push(`<!--]--></div>`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push("<!--]-->");
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push("<!--]-->");
            }
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        if (filteredProducts.length > 0) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="pt-8 text-center border-t border-surface-800 mt-2"><button type="button" class="btn preset-outlined-primary-500 gap-2 uppercase tracking-widest text-xs font-black"><span>Load More</span>`);
          Chevron_right($$renderer3, { size: 16 });
          $$renderer3.push(`<!----></button></div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    bind_props($$props, { activeCategory, activeSize });
  });
}
function Reviews($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { reviews = [] } = $$props;
    function renderStars(rating) {
      const full = Math.round(rating);
      return "★".repeat(full) + "☆".repeat(5 - full);
    }
    Section($$renderer2, {
      id: "reviews",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="flex items-end border-b border-surface-700 pb-4 mb-8"><div><p class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary-400 mb-1">Testimonials</p> <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none" style="font-family: 'Space Grotesk', sans-serif;">What People Say</h2></div></div> <div class="grid gap-px md:grid-cols-3 bg-surface-800 border border-surface-800"><!--[-->`);
        const each_array = ensure_array_like(reviews);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let review = each_array[$$index];
          $$renderer3.push(`<div class="bg-surface-950 p-6 space-y-6">`);
          Quote($$renderer3, { size: 20, class: "text-primary-500/40" });
          $$renderer3.push(`<!----> <p class="text-sm leading-relaxed text-surface-300">${escape_html(review.text)}</p> <div class="flex items-center gap-3 pt-2 border-t border-surface-800">`);
          Avatar($$renderer3, {
            class: "size-9",
            children: ($$renderer4) => {
              if (Avatar.Image) {
                $$renderer4.push("<!--[-->");
                Avatar.Image($$renderer4, { src: review.avatar, alt: review.name });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
              $$renderer4.push(` `);
              if (Avatar.Fallback) {
                $$renderer4.push("<!--[-->");
                Avatar.Fallback($$renderer4, {
                  children: ($$renderer5) => {
                    $$renderer5.push(`<!---->${escape_html(review.name.charAt(0))}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> <div class="flex-1"><p class="text-xs font-black uppercase tracking-widest">${escape_html(review.name)}</p> <p class="text-[0.6rem] text-surface-500 uppercase tracking-widest">${escape_html(review.product)}</p></div> <span class="text-xs text-warning-400">${escape_html(renderStars(review.rating))}</span></div></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
    });
  });
}
function PromoBanner($$renderer) {
  Section($$renderer, {
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="mt-10 border border-primary-500/30 bg-surface-900 p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:justify-between"><div class="space-y-3"><p class="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary-400">⚡ Limited Drop</p> <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none" style="font-family: 'Space Grotesk', sans-serif;">Get 20% Off Your<br/>First Order</h2> <p class="text-surface-400">Use code <strong class="text-surface-50 bg-surface-800 px-2 py-0.5 font-black">RIFF20</strong> at checkout.</p></div> <button type="button" class="btn btn-lg preset-filled-primary-500 btn-shine shrink-0 gap-2 uppercase tracking-widest text-sm font-black"><span>Claim Offer</span>`);
      Arrow_right($$renderer2, { size: 18 });
      $$renderer2.push(`<!----></button></div>`);
    }
  });
}
function FAQ($$renderer, $$props) {
  let { faqItems = [] } = $$props;
  Section($$renderer, {
    id: "faq",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex items-end border-b border-surface-700 pb-4 mb-8"><div><p class="text-[0.6rem] font-bold uppercase tracking-[0.3em] text-primary-400 mb-1">Support</p> <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none" style="font-family: 'Space Grotesk', sans-serif;">Frequently Asked</h2></div></div> `);
      Accordion($$renderer2, {
        children: ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(faqItems);
          for (let i = 0, $$length = each_array.length; i < $$length; i++) {
            let item = each_array[i];
            if (i !== 0) {
              $$renderer3.push("<!--[0-->");
              $$renderer3.push(`<hr class="border-surface-800"/>`);
            } else {
              $$renderer3.push("<!--[-1-->");
            }
            $$renderer3.push(`<!--]--> `);
            if (Accordion.Item) {
              $$renderer3.push("<!--[-->");
              Accordion.Item($$renderer3, {
                value: item.id,
                children: ($$renderer4) => {
                  $$renderer4.push(`<h3>`);
                  if (Accordion.ItemTrigger) {
                    $$renderer4.push("<!--[-->");
                    Accordion.ItemTrigger($$renderer4, {
                      class: "font-bold flex items-center justify-between gap-2 py-4 w-full text-left text-sm uppercase tracking-widest hover:text-primary-400 transition-colors",
                      children: ($$renderer5) => {
                        $$renderer5.push(`<!---->${escape_html(item.title)} `);
                        if (Accordion.ItemIndicator) {
                          $$renderer5.push("<!--[-->");
                          Accordion.ItemIndicator($$renderer5, {
                            class: "group",
                            children: ($$renderer6) => {
                              Chevron_down($$renderer6, {
                                class: "h-5 w-5 shrink-0 transition-transform group-data-[state=open]:rotate-180 text-primary-400"
                              });
                            },
                            $$slots: { default: true }
                          });
                          $$renderer5.push("<!--]-->");
                        } else {
                          $$renderer5.push("<!--[!-->");
                          $$renderer5.push("<!--]-->");
                        }
                      },
                      $$slots: { default: true }
                    });
                    $$renderer4.push("<!--]-->");
                  } else {
                    $$renderer4.push("<!--[!-->");
                    $$renderer4.push("<!--]-->");
                  }
                  $$renderer4.push(`</h3> `);
                  {
                    let element = function($$renderer5, attributes$1) {
                      if (!attributes$1.hidden) {
                        $$renderer5.push("<!--[0-->");
                        $$renderer5.push(`<div${attributes({ ...attributes$1 })}><p class="pb-4 text-sm leading-relaxed text-surface-400">${escape_html(item.description)}</p></div>`);
                      } else {
                        $$renderer5.push("<!--[-1-->");
                      }
                      $$renderer5.push(`<!--]-->`);
                    };
                    if (Accordion.ItemContent) {
                      $$renderer4.push("<!--[-->");
                      Accordion.ItemContent($$renderer4, { element, $$slots: { element: true } });
                      $$renderer4.push("<!--]-->");
                    } else {
                      $$renderer4.push("<!--[!-->");
                      $$renderer4.push("<!--]-->");
                    }
                  }
                },
                $$slots: { default: true }
              });
              $$renderer3.push("<!--]-->");
            } else {
              $$renderer3.push("<!--[!-->");
              $$renderer3.push("<!--]-->");
            }
          }
          $$renderer3.push(`<!--]-->`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!---->`);
    }
  });
}
function Newsletter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { newsletterEmail = "" } = $$props;
    Section($$renderer2, {
      class: "border-t border-surface-800 pt-10 pb-4 text-center",
      id: "newsletter",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="mx-auto max-w-lg space-y-5"><p class="text-[0.6rem] font-black uppercase tracking-[0.3em] text-primary-400">Newsletter</p> <h2 class="text-4xl font-black uppercase tracking-tighter" style="font-family: 'Space Grotesk', sans-serif;">Join the Riot</h2> <p class="text-surface-400 text-sm">Subscribe for exclusive drops, early access, and 10% off your first
			order.</p> <form class="flex flex-col gap-3 sm:flex-row"><input class="input flex-1 bg-surface-800/50" type="email" placeholder="your@email.com"${attr("value", newsletterEmail)}/> <button type="submit" class="btn preset-filled-primary-500 btn-shine gap-2 uppercase tracking-widest text-xs font-black">`);
        Mail($$renderer3, { size: 16 });
        $$renderer3.push(`<!----><span>Subscribe</span></button></form></div>`);
      }
    });
    bind_props($$props, { newsletterEmail });
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let activeCategory = "all";
    let activeSize = "M";
    let cartCount = 0;
    let searchQuery = "";
    let showMobileMenu = false;
    let newsletterEmail = "";
    const CATEGORIES = [
      { id: "all", label: "All Items", icon: Sparkles },
      { id: "tees", label: "Tees", icon: Flame },
      { id: "hoodies", label: "Hoodies", icon: Zap },
      { id: "jackets", label: "Jackets", icon: Shield },
      { id: "bottoms", label: "Bottoms", icon: Tag },
      { id: "footwear", label: "Footwear", icon: Star }
    ];
    const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];
    const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&h=750&fit=crop";
    const PRODUCTS = [
      {
        id: 1,
        name: "Skull Voltage Tee",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop",
        category: "tees",
        badge: "Sale",
        badgePreset: "preset-filled-error-500",
        rating: 4.8,
        reviews: 124
      },
      {
        id: 2,
        name: "Grunge Riot Hoodie",
        price: 89.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=750&fit=crop",
        category: "hoodies",
        badge: "Best Seller",
        badgePreset: "preset-filled-primary-500",
        rating: 4.9,
        reviews: 231
      },
      {
        id: 3,
        name: "Rebel Bomber Jacket",
        price: 149.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=750&fit=crop",
        category: "jackets",
        badge: "New",
        badgePreset: "preset-filled-tertiary-500",
        rating: 4.7,
        reviews: 56
      },
      {
        id: 4,
        name: "Shredded Chain Jeans",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop",
        category: "bottoms",
        badge: "Sale",
        badgePreset: "preset-filled-error-500",
        rating: 4.5,
        reviews: 89
      },
      {
        id: 5,
        name: "Havoc Combat Boots",
        price: 129.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=750&fit=crop",
        category: "footwear",
        badge: "New",
        badgePreset: "preset-filled-tertiary-500",
        rating: 4.6,
        reviews: 42
      },
      {
        id: 6,
        name: "Anarchy Oversized Tee",
        price: 44.99,
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=600&h=750&fit=crop",
        category: "tees",
        badge: null,
        badgePreset: "",
        rating: 4.4,
        reviews: 78
      }
    ];
    const FEATURES = [
      {
        icon: Truck,
        title: "Free Shipping",
        description: "On orders over $75",
        color: "text-primary-400"
      },
      {
        icon: Shield,
        title: "Secure Payment",
        description: "256-bit SSL encrypted",
        color: "text-tertiary-400"
      },
      {
        icon: Rotate_ccw,
        title: "Easy Returns",
        description: "30-day return policy",
        color: "text-success-400"
      },
      {
        icon: Package,
        title: "Premium Quality",
        description: "Handpicked materials",
        color: "text-warning-400"
      }
    ];
    const REVIEWS = [
      {
        name: "Alex M.",
        avatar: "https://i.pravatar.cc/80?img=12",
        rating: 5,
        text: "Insane quality. The hoodie feels premium and the fit is perfect. Already ordered two more.",
        product: "Grunge Riot Hoodie"
      },
      {
        name: "Jordan K.",
        avatar: "https://i.pravatar.cc/80?img=33",
        rating: 5,
        text: "Best streetwear I've found online. Fast shipping and the jacket is 🔥",
        product: "Rebel Bomber Jacket"
      },
      {
        name: "Sam R.",
        avatar: "https://i.pravatar.cc/80?img=47",
        rating: 4,
        text: "Love the aesthetic. Unique pieces you won't find anywhere else. The tee runs slightly large.",
        product: "Skull Voltage Tee"
      }
    ];
    const FAQ_ITEMS = [
      {
        id: "faq-1",
        title: "What is your return policy?",
        description: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original packaging with tags attached. Contact returns@riffriotwear.com to start your return."
      },
      {
        id: "faq-2",
        title: "How long does shipping take?",
        description: "Standard shipping takes 5-7 business days. Express shipping is 2-3 business days. Free standard shipping on orders over $75. International shipping is available to most countries."
      },
      {
        id: "faq-3",
        title: "Do you ship internationally?",
        description: "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by destination. Customs duties and taxes are the responsibility of the recipient."
      },
      {
        id: "faq-4",
        title: "How do I track my order?",
        description: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this to track your package on the carrier's website."
      }
    ];
    let hasMedusaData = derived(() => data.products.length > 0);
    let displayProducts = derived(() => hasMedusaData() ? data.products.map((p) => ({
      id: p.id,
      name: p.title ?? "Untitled",
      price: p.variants?.[0]?.calculated_price?.calculated_amount ?? 0,
      originalPrice: p.variants?.[0]?.calculated_price?.original_amount ?? null,
      image: p.thumbnail ?? p.images?.[0]?.url ?? PLACEHOLDER_IMAGE,
      category: p.collection?.title?.toLowerCase() ?? p.type?.value?.toLowerCase() ?? "all",
      badge: p.metadata?.badge ?? null,
      badgePreset: p.metadata?.badge_preset ?? "",
      rating: 4.5,
      reviews: 0
    })) : PRODUCTS);
    let filteredProducts = derived(() => displayProducts().filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesSearch = searchQuery === "" || p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }));
    function handleAddToCart() {
      goto();
      cartCount++;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      head("1uha8ag", $$renderer3, ($$renderer4) => {
        $$renderer4.title(($$renderer5) => {
          $$renderer5.push(`<title>Riff Riot Wear — Streetwear That Screams</title>`);
        });
        $$renderer4.push(`<meta name="description" content="Premium punk, grunge, and metal-inspired streetwear. Tees, hoodies, jackets, and more."/>`);
      });
      Navbar($$renderer3, {
        cartCount,
        categories: CATEGORIES,
        get searchQuery() {
          return searchQuery;
        },
        set searchQuery($$value) {
          searchQuery = $$value;
          $$settled = false;
        },
        get showMobileMenu() {
          return showMobileMenu;
        },
        set showMobileMenu($$value) {
          showMobileMenu = $$value;
          $$settled = false;
        },
        get activeCategory() {
          return activeCategory;
        },
        set activeCategory($$value) {
          activeCategory = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Hero($$renderer3, {});
      $$renderer3.push(`<!----> `);
      Features($$renderer3, { features: FEATURES });
      $$renderer3.push(`<!----> `);
      ProductGrid($$renderer3, {
        categories: CATEGORIES,
        sizes: SIZES,
        filteredProducts: filteredProducts(),
        onAddToCart: handleAddToCart,
        get activeCategory() {
          return activeCategory;
        },
        set activeCategory($$value) {
          activeCategory = $$value;
          $$settled = false;
        },
        get activeSize() {
          return activeSize;
        },
        set activeSize($$value) {
          activeSize = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Reviews($$renderer3, { reviews: REVIEWS });
      $$renderer3.push(`<!----> `);
      PromoBanner($$renderer3);
      $$renderer3.push(`<!----> `);
      FAQ($$renderer3, { faqItems: FAQ_ITEMS });
      $$renderer3.push(`<!----> `);
      Newsletter($$renderer3, {
        get newsletterEmail() {
          return newsletterEmail;
        },
        set newsletterEmail($$value) {
          newsletterEmail = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
