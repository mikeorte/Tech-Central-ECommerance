"use client";
import React from "react";
import "../../styles/components.css";
import useStore from "../../store/store";

const Header = () => {
	const cartItems = useStore((state) => state.cartItems); // Access cartItems state
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/products">Products</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
			<div>Cart: {cartItems} items</div> {/* Display cart items count */}
		</header>
	);
};

export default Header;
