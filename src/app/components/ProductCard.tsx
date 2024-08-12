// src/app/components/ProductCard.tsx
"use client";

import React from "react";
import Link from "next/link";

type ProductProps = {
	id?: string;
	name: string;
	description: string;
	price: number;
	image: string;
};

const ProductCard: React.FC<ProductProps> = ({
	id,
	name,
	description,
	price,
	image,
}) => {
	return (
		<div className="product-card">
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${price.toFixed(2)}</p>
			{id && <Link href={`/product/${id}`}>View Details</Link>}
		</div>
	);
};

export default ProductCard;
