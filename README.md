# Forever E-Commerce Website

Welcome to my e-commerce website! This platform is designed to provide a seamless shopping experience, offering a wide variety of products with features such as user authentication, secure payments, product search, and an intuitive cart system.

## 🚀 Live Demo

Check out the live version of the website here:  
[Live Link](https://forever-frontend-puce-five.vercel.app)

## 📂 Project Structure

This project is built using the following technologies:

### Frontend:
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Context API (for state management)

### Backend:
- Node.js
- Express.js
- MongoDB (for data storage)
- JWT (for authentication)
- Mongoose

### Features:
- User authentication with JWT
- Product search and filtering
- Add to cart and update product quantity
- Checkout system with real-time cart updates
- Secure backend using best practices (e.g., validation, authentication)

## 💻 Installation & Setup

To run this project locally, follow these steps:

### Prerequisites:
- Node.js
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
    git clone https://github.com/hassan-nahid/e_commerce.git
    cd e_commerce
   ```
2. Install dependencies for each part:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
   cd ../admin && npm install
   ```
3. Configure environment variables (see `.env.example` in backend).
4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
5. Start the frontend and admin apps:
   ```bash
   cd ../frontend
   npm start
   cd ../admin
   npm start
   ```

## Usage

- Visit the frontend at `http://localhost:5173` for shopping.
- Visit the admin dashboard at `http://localhost:5174` for management.
- Use demo credentials for quick login (see login page).


## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Folder Structure

```
├── admin/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── index.css
│   ├── package.json
│   └── ...
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── ...
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── index.css
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

- **admin/**: Admin dashboard (React)
- **backend/**: Backend API (Express.js)
- **frontend/**: Customer-facing frontend (React)

Each folder contains its own source code, configuration, and assets for modular development.

---

Made with ❤️ by Hassan Nahid


