export const cartState = $state({
	items: [] as any[],
	isOpen: false,
	get total() {
        return this.items.reduce((acc: number, item: any) => acc + item.price, 0);
    },
    get count() {
        return this.items.length;
    },
	addItem(item: any) {
		this.items.push(item);
		this.isOpen = true; // Automatically open cart when item is added
	},
	removeItem(index: number) {
		this.items.splice(index, 1);
	},
	toggle() {
		this.isOpen = !this.isOpen;
	}
});
