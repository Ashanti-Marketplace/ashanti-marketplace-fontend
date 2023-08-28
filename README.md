# ashanti-marketplace-fontend

Ashanti Marketplace - Next.js Frontend(Next.js 13)

Ashanti Marketplace is a web application built with Next.js that allows users to buy and sell art. This frontend component interacts with the Laravel-based backend to provide a seamless user experience.

**Dependencies**

To run the Next.js frontend component, make sure you have the following dependencies installed on your system:

Node.js >= 14.0.0
npm >= 6.0.0


**Setup**


Follow these steps to set up and run the Next.js frontend component:

1. Clone the repository from GitHub:

```bash
git clone https://github.com/your-username/ashanti-marketplace-frontend.git
```

2. Navigate to the project directory:

```bash
cd ashanti-marketplace-frontend
```

3. Install the dependencies:

```bash
npm install
```

4. Configure the API endpoint:
   Open the `config.js` file in the `utils` directory and set the `API_URL` to the URL of your Laravel backend API.

```javascript
// utils/config.js
const API_URL = "http://localhost:8000/api"; // Replace with your API URL
```

5. Run the development server:

```bash
npm run dev
```

6. Open the application in your web browser at http://localhost:3000.

**Usage**

The Ashanti Marketplace frontend provides a user-friendly interface for buying and selling art. Users can browse art listings, view details, add items to their cart, and proceed to checkout.

**Search Functionality**

The application includes a real-time search functionality that filters products based on the entered search term. As you type, the displayed products will dynamically update to match the search.

**Pagination**

The app also features pagination for the product listings, allowing users to navigate through multiple pages of products. The "Previous" and "Next" buttons facilitate easy navigation.
**
License**
This project is licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).
