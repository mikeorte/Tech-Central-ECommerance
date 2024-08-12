// src/app/products/page.tsx
"use client";

import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
	{
		id: "1",
		name: "Smartphone 12X",
		description:
			"Experience the latest technology with the new Smartphone 12X.",
		price: 999.99,
		image: "https://via.placeholder.com/300x200?text=Smartphone+12X", // Placeholder image with text
	},
	{
		id: "2",
		name: "Wireless Headphones",
		description:
			"High-fidelity sound and noise-cancellation for the modern audiophile.",
		price: 199.99,
		image: "https://via.placeholder.com/300x200?text=Wireless+Headphones", // Placeholder image with text
	},
	{
		id: "3",
		name: "Smart Home Hub",
		description:
			"Control all your smart devices with a single, intuitive interface.",
		price: 149.99,
		image: "https://via.placeholder.com/300x200?text=Smart+Home+Hub", // Placeholder image with text
	},
	// Add more products as needed
];

export default function ProductsPage() {
	return (
		<div>
			<h1>Our Tech Products</h1>
			<div className="products-list">
				{products.map((product) => (
					<ProductCard key={product.id} {...product} />
				))}
			</div>
		</div>
	);
}
