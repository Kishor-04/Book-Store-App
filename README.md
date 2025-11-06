
# 📚 BookVault# 📚 BookVault



### Modern Full-Stack Bookstore with Payment Integration### Your Trusted Digital Library & Bookstore Platform



[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)

[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)[![Express](https://img.shields.io/badge/Express-4.18.2-blue.svg)](https://expressjs.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)[![MongoDB](https://img.shields.io/badge/MongoDB-8.1.3-green.svg)](https://www.mongodb.com/)

[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)



*A complete e-commerce bookstore with secure payment gateway, admin dashboard, and user management**A modern, full-stack e-commerce bookstore with secure payment integration, real-time inventory management, and an intuitive admin dashboard.*



</div>[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Documentation](#-documentation) • [Contributing](#-contributing)



---</div>



## ✨ Key Features---



- 🔐 **Authentication** - Secure login/register with bcrypt & JWT---

- 💳 **Payment Gateway** - Razorpay integration for secure transactions

- 🛡️ **Admin Panel** - Complete dashboard for books, users & payments management## ✨ Features

- 📚 **Book Management** - CRUD operations with image upload

- 👥 **User Management** - Profile, purchase history, and account control<table>

- 🔍 **Search & Filter** - Advanced book search by title, author, category<tr>

- 📱 **Responsive Design** - Mobile-first UI with Tailwind CSS<td width="50%">

- 🏗️ **MVC Architecture** - Clean, maintainable code structure

### 🔐 **Authentication & Security**

---- Secure user registration and login

- Password encryption with bcrypt

## 🛠️ Tech Stack- JWT-based authentication

- Session management

**Backend:** Node.js, Express.js, MongoDB, Mongoose  - Role-based access control (User/Admin)

**Frontend:** EJS Templates, Tailwind CSS, JavaScript  - Protected routes & middleware

**Authentication:** JWT, bcrypt, express-session  

**Payment:** Razorpay Gateway  </td>

**File Upload:** Multer  <td width="50%">



---### 👤 **User Features**

- Personalized user dashboard

## 🚀 Quick Start- Browse extensive book catalog

- Advanced search & filter by category

### Prerequisites- Real-time book availability

- Node.js (v14+)- Secure payment integration (Razorpay)

- MongoDB (v4+)- Purchase history tracking

- npm or yarn- Profile management



### Installation</td>

</tr>

1. **Clone the repository**<tr>

```bash<td width="50%">

git clone https://github.com/Kishor-04/Book-Store-App.git

cd Book-Store-App/book-store### 🛡️ **Admin Panel**

```- Secret URL access for admins

- Comprehensive dashboard with statistics

2. **Install dependencies**- Full CRUD operations for books

```bash- User management (create, edit, delete)

npm install- Category management

```- Payment transaction monitoring

- Book image upload functionality

3. **Setup environment variables**- Real-time inventory tracking

```bash

cp .env.example .env</td>

```<td width="50%">



Edit `.env` file:### 💳 **Payment Integration**

```env- Razorpay payment gateway

PORT=5000- Secure transaction processing

MONGODB_URI=mongodb://localhost:27017/bookvault- Payment verification & validation

SESSION_SECRET=your_session_secret- Transaction history

JWT_SECRET=your_jwt_secret- Order management

ADMIN_URL_PATH=/admin-secret-dashboard- Receipt generation

RAZORPAY_KEY_ID=your_razorpay_key- Payment status tracking (pending/completed/failed)

RAZORPAY_KEY_SECRET=your_razorpay_secret

```</td>

</tr>

4. **Start MongoDB**<tr>

```bash<td width="50%">

# Windows

net start MongoDB### 🎨 **UI/UX**

- Responsive design (Mobile, Tablet, Desktop)

# Linux/Mac- Modern Tailwind CSS framework

sudo systemctl start mongod- Font Awesome icons

```- Smooth animations & transitions

- Toast notifications

5. **Seed database (optional)**- Loading states & error handling

```bash- Intuitive navigation

npm run seed

```</td>

<td width="50%">

6. **Run the application**

```bash### 🚀 **Technical Features**

npm run dev    # Development mode- MVC architecture pattern

npm start      # Production mode- RESTful API design

```- AJAX-powered dynamic content

- File upload with Multer

Visit: **http://localhost:5000**- Image storage & management

- Database seeding scripts

---- Environment-based configuration

- ES6+ modern JavaScript

## 📁 Project Structure

</td>

```</tr>

bookvault/</table>

├── config/              # Database & multer config

├── controllers/         # Business logic---

├── middleware/          # Auth & validation

├── models/             # MongoDB schemas---

├── routes/             # API routes

├── views/              # EJS templates## 🎬 Demo

│   ├── admin/          # Admin panel views

│   ├── user/           # User dashboard views### Screenshots

│   └── partials/       # Reusable components

├── public/             # Static files & uploads<div align="center">

└── server.js           # App entry point

```#### 🏠 Home Page

<img src="https://via.placeholder.com/800x400/2563eb/ffffff?text=BookVault+Home+Page" alt="Home Page" width="80%">

---

#### � Book Catalog with Search & Filter

## 🔑 Access Points<img src="https://via.placeholder.com/800x400/4f46e5/ffffff?text=Book+Catalog" alt="Book Catalog" width="80%">



### Public Routes#### 🛡️ Admin Dashboard

- Home: `http://localhost:5000/`<img src="https://via.placeholder.com/800x400/10b981/ffffff?text=Admin+Dashboard" alt="Admin Dashboard" width="80%">

- Login: `http://localhost:5000/auth/login`

- Register: `http://localhost:5000/auth/register`#### 💳 Payment Integration

<img src="https://via.placeholder.com/800x400/f59e0b/ffffff?text=Payment+Gateway" alt="Payment Gateway" width="80%">

### User Dashboard (Login Required)

- Dashboard: `http://localhost:5000/user/dashboard`</div>

- Purchase History: `http://localhost:5000/user/payments`

---

### Admin Panel (Admin Role Required)

- Admin Dashboard: `http://localhost:5000/admin-secret-dashboard`## 🛠️ Tech Stack

- Manage Books: `http://localhost:5000/admin-secret-dashboard/books`

- Manage Users: `http://localhost:5000/admin-secret-dashboard/users`<div align="center">

- View Payments: `http://localhost:5000/admin-secret-dashboard/payments`

### Backend

---![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

## 👤 Create Admin User![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

### Method 1: MongoDB Shell

```javascript### Frontend

use bookvault![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

db.users.insertOne({![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

  name: "Admin",![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

  email: "admin@bookvault.com",

  password: "$2a$10$hashed_password_here",  // Use bcrypt### Payment & Storage

  role: "admin",![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

  isActive: true,![Multer](https://img.shields.io/badge/Multer-FF6C37?style=for-the-badge&logo=files&logoColor=white)

  createdAt: new Date()

})### Authentication & Security

```![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

![bcrypt](https://img.shields.io/badge/bcrypt-338033?style=for-the-badge&logo=letsencrypt&logoColor=white)

### Method 2: Update Existing User

```javascript</div>

db.users.updateOne(

  { email: "user@example.com" },---

  { $set: { role: "admin" } }

)---

```

## 📁 Project Structure

---

```

## 📋 API Endpointsbookvault/

│

| Method | Endpoint | Description |├── 📂 config/                    # Configuration files

|--------|----------|-------------|│   ├── db.js                     # MongoDB connection

| GET | `/api/books` | Get all books (with filters) |│   └── multer.js                 # File upload configuration

| GET | `/api/books/:id` | Get single book |│

| GET | `/api/categories` | Get all categories |├── 📂 controllers/               # Business logic controllers

| POST | `/payment/create-order` | Create payment order |│   ├── adminController.js        # Admin operations

| POST | `/payment/verify` | Verify payment |│   ├── authController.js         # Authentication logic

│   ├── bookController.js         # Book CRUD operations

---│   ├── publicController.js       # Public pages

│   └── paymentController.js      # Payment processing

## 🐛 Troubleshooting│

├── 📂 middleware/                # Express middleware

**MongoDB connection error?**  │   ├── authMiddleware.js         # User authentication

→ Ensure MongoDB is running: `net start MongoDB`│   ├── adminMiddleware.js        # Admin authorization

│   └── validate.js               # Input validation

**Module not found?**  │

→ Run: `npm install`├── 📂 models/                    # Mongoose schemas

│   ├── Book.js                   # Book model

**Admin panel 404?**  │   ├── User.js                   # User model

→ Check `ADMIN_URL_PATH` in `.env` file│   ├── Category.js               # Category model

│   └── Payment.js                # Payment transaction model

**Session issues?**  │

→ Verify `SESSION_SECRET` is set in `.env`├── 📂 routes/                    # Route definitions

│   ├── index.js                  # Public routes

---│   ├── auth.js                   # Auth routes

│   ├── admin.js                  # Admin routes

## 📦 Key Dependencies│   ├── user.js                   # User dashboard routes

│   ├── api.js                    # API endpoints

- **express** ^4.18.2 - Web framework│   └── payment.js                # Payment routes

- **mongoose** ^8.1.3 - MongoDB ODM│

- **ejs** ^3.1.9 - Templating├── 📂 views/                     # EJS templates

- **bcryptjs** ^2.4.3 - Password hashing│   ├── 📂 partials/              # Reusable components

- **razorpay** ^2.9.2 - Payment gateway│   │   ├── head.ejs              # HTML head

- **multer** ^1.4.5 - File upload│   │   ├── navbar.ejs            # Navigation bar

- **jsonwebtoken** ^9.0.2 - JWT auth│   │   ├── footer.ejs            # Footer

│   │   ├── admin-navbar.ejs      # Admin navigation

---│   │   └── messages.ejs          # Flash messages

│   ├── 📂 admin/                 # Admin panel views

## 👨‍💻 Author│   │   ├── dashboard.ejs         # Admin dashboard

│   │   ├── books.ejs             # Book management

**Kishor Khardekar**  │   │   ├── book-edit.ejs         # Edit book form

GitHub: [@Kishor-04](https://github.com/Kishor-04)│   │   ├── users.ejs             # User management

│   │   ├── user-edit.ejs         # Edit user form

---│   │   └── payments.ejs          # Payment management

│   ├── 📂 user/                  # User dashboard views

## 📄 License│   │   ├── dashboard.ejs         # User dashboard

│   │   ├── profile.ejs           # User profile

ISC License - See [LICENSE](LICENSE) file│   │   └── payments.ejs          # Purchase history

│   └── *.ejs                     # Public pages

---│

├── 📂 public/                    # Static assets

<div align="center">│   ├── 📂 css/

│   │   └── style.css             # Custom styles

**Built with ❤️ using Node.js, Express, MongoDB & Razorpay**│   ├── 📂 js/

│   │   ├── main.js               # Global JS

⭐ Star this repo if you find it helpful!│   │   ├── home.js               # Home page JS

│   │   └── payment.js            # Payment integration

</div>│   └── 📂 uploads/               # User uploads

│       └── 📂 books/             # Book cover images
│
├── 📄 server.js                  # Application entry point
├── 📄 seedCategories.js          # Database seeding script
├── 📄 package.json               # Dependencies
├── 📄 .env.example               # Environment template
└── 📄 README.md                  # Documentation
```

---

---

## � Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.0.0 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager
- **Git** - [Download](https://git-scm.com/)

### Quick Start

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Kishor-04/Book-Store-App.git
cd Book-Store-App/book-store
```

#### 2️⃣ Install Dependencies

```bash
npm install
```

#### 3️⃣ Environment Setup

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure your `.env` file with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/bookvault

# Security Keys (Generate strong random strings)
SESSION_SECRET=your_super_secret_session_key_here
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Panel (Customize this secret URL)
ADMIN_URL_PATH=/admin-secret-dashboard

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

> **⚠️ Security Note:** Never commit your `.env` file to version control. Always use strong, unique values for secrets in production.

#### 4️⃣ Start MongoDB

**Windows:**
```powershell
net start MongoDB
# Or run manually:
mongod
```

**macOS/Linux:**
```bash
sudo systemctl start mongod
# Or:
brew services start mongodb-community
```

#### 5️⃣ Seed Database (Optional)

Populate the database with sample categories:

```bash
npm run seed
```

#### 6️⃣ Run the Application

**Development Mode** (with auto-reload):
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The application will be available at: **http://localhost:5000**

---

---

## �️ Application Routes

### 🌐 Public Routes

| Route | Description |
|-------|-------------|
| `GET /` | Home page with book catalog |
| `GET /about` | About us page |
| `GET /contact` | Contact information |
| `GET /categories` | Browse by categories |
| `GET /auth/login` | User login page |
| `GET /auth/register` | User registration page |

### 👤 User Routes (Authentication Required)

| Route | Description |
|-------|-------------|
| `GET /user/dashboard` | User dashboard with stats |
| `GET /user/profile` | User profile management |
| `GET /user/payments` | Purchase history |
| `POST /payment/create-order` | Initiate payment |
| `POST /payment/verify` | Verify payment signature |

### 🛡️ Admin Routes (Admin Authentication Required)

| Route | Description |
|-------|-------------|
| `GET /admin-secret-dashboard` | Admin dashboard |
| `GET /admin-secret-dashboard/books` | Manage books |
| `POST /admin-secret-dashboard/books/create` | Create new book |
| `GET /admin-secret-dashboard/books/:id/edit` | Edit book form |
| `PUT /admin-secret-dashboard/books/:id` | Update book |
| `DELETE /admin-secret-dashboard/books/:id` | Delete book |
| `GET /admin-secret-dashboard/users` | Manage users |
| `POST /admin-secret-dashboard/users/create` | Create new user |
| `GET /admin-secret-dashboard/users/:id/edit` | Edit user form |
| `PUT /admin-secret-dashboard/users/:id` | Update user |
| `DELETE /admin-secret-dashboard/users/:id` | Delete user |
| `POST /admin-secret-dashboard/users/:id/toggle` | Activate/Deactivate user |
| `GET /admin-secret-dashboard/payments` | View all transactions |

### 🔌 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/books` | GET | Fetch books (with filters) |
| `/api/books/:id` | GET | Get single book details |
| `/api/categories` | GET | Get all categories |

---
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