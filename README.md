# 📚 BookVault# BookVault Application - MVC Architecture



A full-stack e-commerce bookstore application built with Node.js, Express, MongoDB, and EJS. Features secure payment processing, admin panel, and modern responsive design.A full-stack bookvault management system built with Node.js, Express, MongoDB, and EJS templating. Features user authentication, admin panel, book management, and a responsive user interface.



## ✨ Features## 🚀 Features



- **User Authentication** - Secure registration/login with bcrypt & JWT- **User Authentication**: Registration, login, and session management

- **Book Management** - Browse, search, and filter books by category- **Admin Panel**: Secret URL access for administrative operations

- **Payment Gateway** - Razorpay integration for secure transactions- **Book Management**: Full CRUD operations for books

- **Admin Dashboard** - Manage books, users, and view payment analytics- **Category System**: Organize books by categories

- **Image Upload** - Book cover images with Multer- **User Management**: Admin can view and manage registered users

- **Responsive UI** - Mobile-first design with Tailwind CSS- **Responsive Design**: Mobile-friendly UI with Tailwind CSS

- **Purchase History** - Track user orders and transactions- **Search & Filter**: Real-time book search and category filtering

- **RESTful API**: AJAX endpoints for dynamic content loading

## 🚀 Quick Start

## 📁 Project Structure

### Prerequisites

- Node.js (v14+)```

- MongoDB (v4+)book-store/

- npm├── config/

│   └── db.js                 # MongoDB connection configuration

### Installation├── controllers/

│   ├── adminController.js    # Admin dashboard and management logic

```bash│   ├── authController.js     # Authentication logic

# Clone the repository│   ├── bookController.js     # Book API endpoints

git clone https://github.com/Kishor-04/Book-Store-App.git│   └── publicController.js   # Public pages logic

cd book-store├── middleware/

│   ├── adminMiddleware.js    # Admin authorization

# Install dependencies│   ├── authMiddleware.js     # User authentication

npm install│   └── validate.js           # Input validation

├── models/

# Configure environment│   ├── Book.js               # Book schema

cp .env.example .env│   ├── Category.js           # Category schema

# Edit .env with your MongoDB URI and Razorpay credentials│   └── User.js               # User schema

├── routes/

# Seed categories (optional)│   ├── admin.js              # Admin routes

npm run seed│   ├── api.js                # API routes

│   ├── auth.js               # Authentication routes

# Start the server│   ├── index.js              # Public routes

npm start│   └── user.js               # User dashboard routes

```├── views/

│   ├── partials/             # Reusable EJS components

Visit `http://localhost:5000`│   ├── admin/                # Admin panel views

│   ├── user/                 # User dashboard views

## 🔧 Environment Variables│   └── *.ejs                 # Public page templates

├── public/

```env│   ├── css/style.css         # Custom styles

PORT=5000│   └── js/                   # Client-side JavaScript

NODE_ENV=development├── utils/

MONGODB_URI=mongodb://localhost:27017/bookvault│   └── helpers.js            # Utility functions

SESSION_SECRET=your_session_secret├── .env.example              # Environment variables template

JWT_SECRET=your_jwt_secret├── package.json              # Project dependencies

ADMIN_URL_PATH=/admin-secret-dashboard└── server.js                 # Application entry point

RAZORPAY_KEY_ID=your_razorpay_key_id```

RAZORPAY_KEY_SECRET=your_razorpay_key_secret

```## 🛠️ Installation



## 📁 Project Structure### Prerequisites

- Node.js (v14 or higher)

```- MongoDB (v4 or higher)

book-store/- npm or yarn

├── config/          # Database & file upload configuration

├── controllers/     # Business logic (admin, auth, payment)### Step 1: Navigate to Project Directory

├── middleware/      # Authentication & authorization```bash

├── models/          # MongoDB schemas (Book, User, Category, Payment)cd "d:/College Projects/Book Store App/book-store"

├── routes/          # API endpoints```

├── views/           # EJS templates

├── public/          # Static assets (CSS, JS, images)### Step 2: Install Dependencies

└── server.js        # Application entry point```bash

```npm install

```

## 🔐 Admin Access

### Step 3: Environment Configuration

1. Create admin user in MongoDB:Create a `.env` file in the root directory:

```javascript```bash

db.users.insertOne({cp .env.example .env

  name: "Admin",```

  email: "admin@bookvault.com",

  password: "$2a$10$...", // bcrypt hashEdit `.env` with your configuration:

  role: "admin",```env

  isActive: true# Server Configuration

})PORT=5000

```NODE_ENV=development



2. Login and access: `http://localhost:5000/admin-secret-dashboard`# MongoDB Connection

MONGODB_URI=mongodb://localhost:27017/bookvault

## 📦 Tech Stack

# Session Secret (change to a random string)

- **Backend**: Node.js, Express.jsSESSION_SECRET=your_session_secret_here_change_this

- **Database**: MongoDB with Mongoose ODM

- **Template Engine**: EJS# JWT Secret (change to a random string)

- **Authentication**: bcrypt, JWT, express-sessionJWT_SECRET=your_jwt_secret_here_change_this

- **Payment**: Razorpay

- **File Upload**: Multer# Admin Panel Configuration

- **Styling**: Tailwind CSSADMIN_URL_PATH=secret-admin-panel

```

## 🛠️ Available Scripts

### Step 4: Start MongoDB

```bashMake sure MongoDB is running on your system:

npm start       # Start production server```powershell

npm run dev     # Start development server (nodemon)# Windows (if MongoDB is installed as a service)

npm run seed    # Seed categories to databasenet start MongoDB

```

# Or start manually

## 📸 Features Overviewmongod

```

- **Public Pages**: Home, Browse, Categories, About, Contact

- **User Dashboard**: Profile, Purchase History, Order Tracking### Step 5: Run the Application

- **Admin Panel**: Book CRUD, User Management, Payment Analytics```bash

- **Payment Flow**: Cart → Razorpay Checkout → Order Verification# Development mode (with nodemon)

npm run dev

## 🔒 Security Features

# Production mode

- Password hashing with bcryptnpm start

- JWT-based authentication```

- Session management

- Input validation & sanitizationThe application will be available at: `http://localhost:5000`

- Protected admin routes

- Secure payment verification## 🔑 Access Points



## 📄 License### Public Routes

- **Home**: `http://localhost:5000/`

ISC- **Login**: `http://localhost:5000/auth/login`

- **Register**: `http://localhost:5000/auth/register`

## 👤 Author- **About**: `http://localhost:5000/about`

- **Contact**: `http://localhost:5000/contact`

**Kishor-04**- **Help**: `http://localhost:5000/help`

- GitHub: [@Kishor-04](https://github.com/Kishor-04)- **Categories**: `http://localhost:5000/categories`

- Repository: [Book-Store-App](https://github.com/Kishor-04/Book-Store-App)

### User Routes (Requires Authentication)

---- **User Dashboard**: `http://localhost:5000/user/dashboard`

- **User Profile**: `http://localhost:5000/user/profile`

⭐ Star this repository if you find it helpful!

### Admin Routes (Requires Admin Role)
Replace `secret-admin-panel` with your `ADMIN_URL_PATH` from `.env`:
- **Admin Dashboard**: `http://localhost:5000/secret-admin-panel/dashboard`
- **Manage Books**: `http://localhost:5000/secret-admin-panel/books`
- **Manage Users**: `http://localhost:5000/secret-admin-panel/users`

### API Endpoints
- **GET** `/api/books` - Get all books (with search/filter/sort)
- **GET** `/api/books/:id` - Get single book
- **GET** `/api/categories` - Get all categories

## 👤 Creating the First Admin User

There are two ways to create an admin user:

### Method 1: Direct Database Entry (MongoDB Compass or Shell)
```javascript
use bookvault

db.users.insertOne({
  name: "Admin User",
  email: "admin@bookvault.com",
  password: "$2a$10$YourHashedPasswordHere", // Use bcrypt to hash
  role: "admin",
  isActive: true,
  createdAt: new Date(),
  updatedAt: new Date()
})
```

### Method 2: Register and Manually Update
1. Register a normal user through `/auth/register`
2. Update the user's role in MongoDB:
```javascript
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

## 📚 Usage Guide

### For Users
1. Register an account at `/auth/register`
2. Login at `/auth/login`
3. Browse and search books on the home page
4. Filter by categories
5. Access your dashboard at `/user/dashboard`

### For Admins
1. Login with admin credentials at `/auth/login`
2. Access admin panel at `/your-secret-url/dashboard`
3. **Manage Books**: Add, edit, delete books
4. **Manage Users**: View users, activate/deactivate accounts
5. View statistics on the dashboard

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Make sure MongoDB is running. Start it with `net start MongoDB` or `mongod`.

### Module Not Found Error
```
Error: Cannot find module 'express'
```
**Solution**: Run `npm install` to install all dependencies.

### Admin Panel 404 Error
**Solution**: Make sure you're using the correct `ADMIN_URL_PATH` from your `.env` file.

### Session Not Persisting
**Solution**: Check that `SESSION_SECRET` is set in `.env` and cookies are enabled in your browser.

## 📦 Dependencies

### Main Dependencies
- **express**: ^4.18.2 - Web framework
- **mongoose**: ^8.1.3 - MongoDB ODM
- **ejs**: ^3.1.9 - Templating engine
- **bcryptjs**: ^2.4.3 - Password hashing
- **jsonwebtoken**: ^9.0.2 - JWT generation
- **express-session**: ^1.17.3 - Session management
- **connect-flash**: ^0.1.1 - Flash messages
- **method-override**: ^3.0.0 - HTTP method override
- **dotenv**: ^16.0.3 - Environment variables
- **cors**: ^2.8.5 - CORS middleware

### Dev Dependencies
- **nodemon**: ^3.0.1 - Auto-restart server on changes

## Technologies Used
- Node.js & Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript Templates)
- Tailwind CSS
- Session-based Authentication

## Contributors
- [atharvkhardekar](https://github.com/atharvkhardekar)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Node.js, Express, MongoDB, and EJS**