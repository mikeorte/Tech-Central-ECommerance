import React from "react";
import "../../styles/components.css";

const Header: React.FC = () => {
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
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
