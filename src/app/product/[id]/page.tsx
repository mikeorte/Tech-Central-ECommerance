"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useStore from "../../../store/store";
import axios from "axios";

interface Product {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
}

const ProductDetail: React.FC = () => {
	const { id } = useParams();
	const productId = Array.isArray(id) ? id[0] : id;
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchProductById = useStore((state) => state.fetchProductById);
	const setProducts = useStore((state) => state.setProducts);

	useEffect(() => {
		const productFromStore = fetchProductById(productId);
		if (productFromStore) {
			setProduct(productFromStore);
			setLoading(false);
		} else {
			const fetchProduct = async () => {
				try {
					const response = await axios.get<Product>(
						`https://fakestoreapi.com/products/${productId}`
					);
					setProduct(response.data);
					setProducts((prevProducts) => [...prevProducts, response.data]);
				} catch (error) {
					setError("Error fetching product details.");
				} finally {
					setLoading(false);
				}
			};

			fetchProduct();
		}
	}, [productId, fetchProductById, setProducts]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	if (!product) return <p>Product not found</p>;

	return (
		<div className="product-detail">
			<h1>{product.title}</h1>
			<img src={product.image} alt={product.title} />
			<p>{product.description}</p>
			<p>Price: ${product.price.toFixed(2)}</p>
			<button onClick={() => useStore.getState().addToCart()}>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductDetail;
