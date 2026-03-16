
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/contact" | "/privacy" | "/product" | "/product/[id]" | "/returns" | "/shipping" | "/terms" | "/testing";
		RouteParams(): {
			"/product/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/contact": Record<string, never>;
			"/privacy": Record<string, never>;
			"/product": { id?: string };
			"/product/[id]": { id: string };
			"/returns": Record<string, never>;
			"/shipping": Record<string, never>;
			"/terms": Record<string, never>;
			"/testing": Record<string, never>
		};
		Pathname(): "/" | "/contact" | "/privacy" | `/product/${string}` & {} | "/returns" | "/shipping" | "/terms" | "/testing";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/heromodel.png" | "/images/pants.png" | "/images/shoes.png" | "/images/shoes2.png" | "/images/vest.png" | "/images/vest2.png" | "/robots.txt" | string & {};
	}
}