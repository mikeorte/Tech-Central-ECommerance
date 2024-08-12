// src/app/product/[id]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";

const ProductDetail = () => {
	const { id } = useParams();

	// Simulated product data based on id
	const product = {
		name: `Product ${id}`,
		description: `Detailed information about Product ${id}.`,
		price: 99.99,
		image: `https://via.placeholder.com/300x200?text=Product+${id}`, // Placeholder image with text
	};

	return (
		<div>
			<h1>{product.name}</h1>
			<img src={product.image} alt={product.name} />
			<p>{product.description}</p>
			<p>Price: ${product.price.toFixed(2)}</p>
		</div>
	);
};

export default ProductDetail;
