"use client";
import React, { useEffect } from "react";
import useStore from "../../store/store"; // Import the Zustand store
import ProductCard from "../components/ProductCard";
import axios from "axios";

export default function ProductsPage() {
	const { products, setProducts } = useStore((state) => ({
		products: state.products,
		setProducts: state.setProducts,
	}));

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(
					"https://fakestoreapi.com/products/category/electronics"
				);
				setProducts(response.data.slice(0, 9)); // Fetch and display 9 products
			} catch (error) {
				console.error("Error fetching electronics products:", error);
			}
		};

		fetchProducts();
	}, [setProducts]);

	return (
		<div>
			<h1>Our Tech Products</h1>
			<div className="products-list">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						id={product.id.toString()}
						name={product.title}
						description={product.description}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
		</div>
	);
}
