import { b as spread_props, h as head, a as attr, e as escape_html } from "../../../chunks/index.js";
import { I as Icon, M as Mail } from "../../../chunks/mail.js";
function Clock($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "10" }],
      ["path", { "d": "M12 6v6l4 2" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "clock" },
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Map_pin($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      [
        "path",
        {
          "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
        }
      ],
      ["circle", { "cx": "12", "cy": "10", "r": "3" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "map-pin" },
      /**
       * @component @name MapPin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function _page($$renderer) {
  let name = "";
  let email = "";
  let subject = "general";
  let message = "";
  head("1bv7ezn", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Contact Us — Riff Riot Wear</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Contact Riff Riot Wear — get in touch with our support team for questions about orders, products, or partnerships."/>`);
  });
  $$renderer.push(`<main class="mx-auto max-w-3xl space-y-10 px-4 py-16"><h1 class="h1 text-4xl font-black uppercase tracking-wider" style="font-family: 'Space Grotesk', sans-serif;">Contact Us</h1> <p class="text-lg opacity-70">Got a question? We'd love to hear from you. Fill out the form below or reach us directly.</p> <div class="grid gap-8 md:grid-cols-3"><div class="card preset-tonal-surface flex items-start gap-3 p-5">`);
  Mail($$renderer, { size: 20, class: "mt-0.5 shrink-0 text-primary-500" });
  $$renderer.push(`<!----> <div><p class="font-bold">Email</p> <a href="mailto:hello@riffriotwear.com" class="text-sm text-primary-500 underline">hello@riffriotwear.com</a></div></div> <div class="card preset-tonal-surface flex items-start gap-3 p-5">`);
  Map_pin($$renderer, { size: 20, class: "mt-0.5 shrink-0 text-primary-500" });
  $$renderer.push(`<!----> <div><p class="font-bold">Location</p> <p class="text-sm opacity-60">Online only — worldwide shipping</p></div></div> <div class="card preset-tonal-surface flex items-start gap-3 p-5">`);
  Clock($$renderer, { size: 20, class: "mt-0.5 shrink-0 text-primary-500" });
  $$renderer.push(`<!----> <div><p class="font-bold">Response Time</p> <p class="text-sm opacity-60">Within 24 hours</p></div></div></div> `);
  {
    $$renderer.push("<!--[-1-->");
    $$renderer.push(`<form class="space-y-6"><div class="grid gap-4 sm:grid-cols-2"><label class="label"><span class="label-text">Name</span> <input class="input" type="text" placeholder="Your name"${attr("value", name)} required=""/></label> <label class="label"><span class="label-text">Email</span> <input class="input" type="email" placeholder="your@email.com"${attr("value", email)} required=""/></label></div> <label class="label"><span class="label-text">Subject</span> `);
    $$renderer.select({ class: "select", value: subject }, ($$renderer2) => {
      $$renderer2.option({ value: "general" }, ($$renderer3) => {
        $$renderer3.push(`General Inquiry`);
      });
      $$renderer2.option({ value: "order" }, ($$renderer3) => {
        $$renderer3.push(`Order Issue`);
      });
      $$renderer2.option({ value: "return" }, ($$renderer3) => {
        $$renderer3.push(`Return / Exchange`);
      });
      $$renderer2.option({ value: "partnership" }, ($$renderer3) => {
        $$renderer3.push(`Partnership`);
      });
      $$renderer2.option({ value: "press" }, ($$renderer3) => {
        $$renderer3.push(`Press / Media`);
      });
    });
    $$renderer.push(`</label> <label class="label"><span class="label-text">Message</span> <textarea class="input min-h-[150px]" placeholder="Tell us what's up..." required="">`);
    const $$body = escape_html(message);
    if ($$body) {
      $$renderer.push(`${$$body}`);
    }
    $$renderer.push(`</textarea></label> <button type="submit" class="btn preset-filled-primary-500 btn-shine">`);
    Mail($$renderer, { size: 16 });
    $$renderer.push(`<!----> <span>Send Message</span></button></form>`);
  }
  $$renderer.push(`<!--]--></main>`);
}
export {
  _page as default
};
