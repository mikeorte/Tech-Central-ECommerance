import { create } from "zustand";

// Define the interface for your state
interface CartState {
	cartItems: number;
	addToCart: () => void;
	removeFromCart: () => void;
}

// Create the Zustand store with the CartState type
const useStore = create<CartState>((set) => ({
	cartItems: 0, // Initial state
	addToCart: () => set((state) => ({ cartItems: state.cartItems + 1 })), // Action to add to cart
	removeFromCart: () => set((state) => ({ cartItems: state.cartItems - 1 })), // Action to remove from cart
}));

export default useStore;
