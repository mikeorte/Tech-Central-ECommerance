import { create } from "zustand";

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
}

interface CartState {
	cartItems: number;
	products: Product[];
	setProducts: (
		newProducts: Product[] | ((products: Product[]) => Product[])
	) => void;
	fetchProductById: (id: string) => Product | undefined;
	addToCart: () => void;
	removeFromCart: () => void;
}

const useStore = create<CartState>((set, get) => ({
	cartItems: 0,
	products: [],
	setProducts: (newProducts) =>
		set((state) => ({
			products:
				typeof newProducts === "function"
					? newProducts(state.products)
					: newProducts,
		})),
	fetchProductById: (id: string) =>
		get().products.find((product) => product.id.toString() === id),
	addToCart: () => set((state) => ({ cartItems: state.cartItems + 1 })),
	removeFromCart: () => set((state) => ({ cartItems: state.cartItems - 1 })),
}));

export default useStore;
