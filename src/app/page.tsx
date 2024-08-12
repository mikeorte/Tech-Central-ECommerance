"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import useStore from "../store/store"; // Import the Zustand store
import axios from "axios";

export default function Home() {
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
				setProducts(response.data);
			} catch (error) {
				console.error("Error fetching electronics products:", error);
			}
		};

		fetchProducts();
	}, [setProducts]);

	return (
		<div>
			<section className="welcome-section">
				<h1>Welcome to Tech-Central!</h1>
				<p>Your one-stop shop for the latest tech gadgets and accessories.</p>
				<div>
					<Link href="/products">
						<button>Shop Now</button>
					</Link>
				</div>
			</section>

			<section className="featured-products-section">
				<h2>Featured Products</h2>
				<div className="products-list">
					{products.slice(0, 4).map((product, index) => (
						<ProductCard
							key={index}
							id={product.id.toString()}
							name={product.title} // Transforming title to name
							description={product.description}
							price={product.price}
							image={product.image}
						/>
					))}
				</div>
			</section>

			<section className="about-section">
				<h2>About Tech-Central</h2>
				<p>
					At Tech-Central, we bring you the cutting-edge technology products
					that shape the future. Whether you are looking for the latest
					smartphones, headphones, or smart home devices, we have got you covered.
				</p>
				<Link href="/about">Learn More About Us</Link>
			</section>
		</div>
	);
}
