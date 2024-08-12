# Tech-Central E-Commerce Site

Welcome to the Tech-Central E-Commerce Site! This project is a modern, responsive e-commerce platform built using Next.js, React, Zustand for state management, and styled with custom CSS. The site features product listings, detailed product pages, and static pages such as About Us and Contact Us.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Features

- **Product Listing**: Browse a selection of tech products with detailed information.
- **Product Details**: View detailed information about each product, including an image, description, and price.
- **State Management**: State is managed globally using Zustand for seamless product management.
- **Responsive Design**: The site is fully responsive, ensuring a great user experience on both desktop and mobile devices.
- **Static Pages**: Includes informative pages like About Us and Contact Us.

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/tech-central-ecommerce.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd tech-central-ecommerce
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and navigate to `http://localhost:3000` to view the site.

## Usage

- **Browse Products**: Navigate to the Products page to see a list of available tech products.
- **View Product Details**: Click on a product to view detailed information and add it to your cart.
- **Learn About Us**: Visit the About Us page to learn more about the company's mission and team.
- **Contact Us**: Use the information on the Contact Us page to reach out with any questions or feedback.

## Project Structure

```bash
tech-central-ecommerce/
│
├── public/                # Static assets
├── src/
│   ├── app/               # Main application folder
│   │   ├── components/    # Reusable components
│   │   ├── product/       # Product detail page
│   │   ├── styles/        # Global styles
│   │   ├── about.tsx      # About Us page
│   │   ├── contact.tsx    # Contact Us page
│   │   ├── home.tsx       # Home page
│   ├── store/             # Zustand store for state management
├── .gitignore             # Git ignore file
├── README.md              # Project README file
├── package.json           # NPM package configuration
└── next.config.js         # Next.js configuration
```

## Technologies Used

- **[Next.js](https://nextjs.org/)**: React framework for server-side rendering and static site generation.
- **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
- **[Zustand](https://zustand-demo.pmnd.rs/)**: A small, fast, and scalable state management solution.
- **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: Custom CSS for styling the application.
- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for the browser and Node.js.
- **[TypeScript](https://www.typescriptlang.org/)**: Typed superset of JavaScript that compiles to plain JavaScript.
