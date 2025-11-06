# BookStore Application - MVC Architecture

A full-stack bookstore management system built with Node.js, Express, MongoDB, and EJS templating. Features user authentication, admin panel, book management, and a responsive user interface.

## 🚀 Features

- **User Authentication**: Registration, login, and session management
- **Admin Panel**: Secret URL access for administrative operations
- **Book Management**: Full CRUD operations for books
- **Category System**: Organize books by categories
- **User Management**: Admin can view and manage registered users
- **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- **Search & Filter**: Real-time book search and category filtering
- **RESTful API**: AJAX endpoints for dynamic content loading

## 📁 Project Structure

```
book-store/
├── config/
│   └── db.js                 # MongoDB connection configuration
├── controllers/
│   ├── adminController.js    # Admin dashboard and management logic
│   ├── authController.js     # Authentication logic
│   ├── bookController.js     # Book API endpoints
│   └── publicController.js   # Public pages logic
├── middleware/
│   ├── adminMiddleware.js    # Admin authorization
│   ├── authMiddleware.js     # User authentication
│   └── validate.js           # Input validation
├── models/
│   ├── Book.js               # Book schema
│   ├── Category.js           # Category schema
│   └── User.js               # User schema
├── routes/
│   ├── admin.js              # Admin routes
│   ├── api.js                # API routes
│   ├── auth.js               # Authentication routes
│   ├── index.js              # Public routes
│   └── user.js               # User dashboard routes
├── views/
│   ├── partials/             # Reusable EJS components
│   ├── admin/                # Admin panel views
│   ├── user/                 # User dashboard views
│   └── *.ejs                 # Public page templates
├── public/
│   ├── css/style.css         # Custom styles
│   └── js/                   # Client-side JavaScript
├── utils/
│   └── helpers.js            # Utility functions
├── .env.example              # Environment variables template
├── package.json              # Project dependencies
└── server.js                 # Application entry point
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4 or higher)
- npm or yarn

### Step 1: Navigate to Project Directory
```bash
cd "d:/College Projects/Book Store App/book-store"
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Environment Configuration
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/bookstore

# Session Secret (change to a random string)
SESSION_SECRET=your_session_secret_here_change_this

# JWT Secret (change to a random string)
JWT_SECRET=your_jwt_secret_here_change_this

# Admin Panel Configuration
ADMIN_URL_PATH=secret-admin-panel
```

### Step 4: Start MongoDB
Make sure MongoDB is running on your system:
```powershell
# Windows (if MongoDB is installed as a service)
net start MongoDB

# Or start manually
mongod
```

### Step 5: Run the Application
```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The application will be available at: `http://localhost:5000`

## 🔑 Access Points

### Public Routes
- **Home**: `http://localhost:5000/`
- **Login**: `http://localhost:5000/auth/login`
- **Register**: `http://localhost:5000/auth/register`
- **About**: `http://localhost:5000/about`
- **Contact**: `http://localhost:5000/contact`
- **Help**: `http://localhost:5000/help`
- **Categories**: `http://localhost:5000/categories`

### User Routes (Requires Authentication)
- **User Dashboard**: `http://localhost:5000/user/dashboard`
- **User Profile**: `http://localhost:5000/user/profile`

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
use bookstore

db.users.insertOne({
  name: "Admin User",
  email: "admin@bookstore.com",
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