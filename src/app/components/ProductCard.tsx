import React from "react";
import "../../styles/components.css";

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
	return (
		<div className="product-card">
			<img src={image} alt={name} />
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${price.toFixed(2)}</p>
		</div>
	);
};

export default ProductCard;
