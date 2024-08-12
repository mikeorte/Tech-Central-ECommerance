// src/app/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
	const featuredProducts = [
		{
			name: "Smartphone 12X",
			description:
				"Experience the latest technology with the new Smartphone 12X.",
			price: 999.99,
			image: "https://via.placeholder.com/300x200?text=Smartphone+12X", // Placeholder image with text
		},
		{
			name: "Wireless Headphones",
			description:
				"High-fidelity sound and noise-cancellation for the modern audiophile.",
			price: 199.99,
			image: "https://via.placeholder.com/300x200?text=Wireless+Headphones", // Placeholder image with text
		},
	];

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
					{featuredProducts.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>
			</section>

			<section className="about-section">
				<h2>About Tech-Central</h2>
				<p>
					At Tech-Central, we bring you the cutting-edge technology products
					that shape the future. Whether you're looking for the latest
					smartphones, headphones, or smart home devices, we've got you covered.
				</p>
				<Link href="/about">Learn More About Us</Link>
			</section>
		</div>
	);
}
