import React from "react";
import "../../styles/components.css";

const Footer: React.FC = () => {
	return (
		<footer>
			<p>© 2024 Your Company Name. All rights reserved.</p>
			<nav>
				<ul>
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
