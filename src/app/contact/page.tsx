import React from "react";

const Contact = () => {
	return (
		<div className="contact-page">
			<h1>Contact Us</h1>
			<p>
				We value your feedback and are here to assist you with any questions or
				concerns. Our team is committed to providing you with the best possible
				support.
			</p>

			<section className="contact-info">
				<h2>Get in Touch</h2>
				<p>
					Whether you need help with a product, have a question about your
					order, or just want to share your thoughts, we're here to listen.
				</p>
				<p>
					<strong>Email:</strong>{" "}
					<a href="mailto:support@ecommerce.com">support@ecommerce.com</a>
				</p>
				<p>
					<strong>Phone:</strong> <a href="tel:+1234567890">+123-456-7890</a>
				</p>
			</section>

			<section className="contact-hours">
				<h2>Customer Support Hours</h2>
				<p>
					Our customer support team is available during the following hours:
				</p>
				<ul>
					<li>Monday to Friday: 9:00 AM - 6:00 PM</li>
					<li>Saturday: 10:00 AM - 4:00 PM</li>
					<li>Sunday: Closed</li>
				</ul>
			</section>
		</div>
	);
};

export default Contact;
