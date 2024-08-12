"use client";
import React from "react";
import "../../styles/components.css";
import useStore from "../../store/store";

type ProductProps = {
	name: string;
	description: string;
	price: number;
	image: string;
};

const ProductCard: React.FC<ProductProps> = ({
	name,
	description,
	price,
	image,
}) => {
	const addToCart = useStore((state) => state.addToCart); // Access addToCart action

	return (
		<div className="product-card">
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${price.toFixed(2)}</p>
			<button onClick={addToCart}>Add to Cart</button>{" "}
			{/* Add to cart on click */}
		</div>
	);
};

export default ProductCard;
