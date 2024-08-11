import ProductCard from "./components/ProductCard";

export default function Home() {
	const products = [
		{
			name: "Product 1",
			description: "This is a great product",
			price: 29.99,
			image: "/images/product1.jpg",
		},
		{
			name: "Product 2",
			description: "Another amazing product",
			price: 49.99,
			image: "/images/product2.jpg",
		},
		// Add more products as needed
	];

	return (
		<div>
			{products.map((product, index) => (
				<ProductCard key={index} {...product} />
			))}
		</div>
	);
}
