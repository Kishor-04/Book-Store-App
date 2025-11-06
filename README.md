# 📚 BookVault – Full-Stack E-Commerce Bookstore

# 📚 BookVault# 📚 BookVault

<div align="center">



**Modern, secure, and scalable online bookstore platform with integrated payment gateway, admin dashboard, and real-time inventory management.**

### Modern Full-Stack Bookstore with Payment Integration### Your Trusted Digital Library & Bookstore Platform

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)[![Express](https://img.shields.io/badge/Express-4.18.2-blue.svg)](https://expressjs.com/)

[Quick Start](#-quick-start) • [Features](#-features) • [Architecture](#-architecture) • [API](#-api) • [Deployment](#-deployment)

[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)[![MongoDB](https://img.shields.io/badge/MongoDB-8.1.3-green.svg)](https://www.mongodb.com/)

</div>

[![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=flat-square&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)[![License](https://img.shields.io/badge/license-ISC-blue.svg)](LICENSE)

---



## 🎯 Features

*A complete e-commerce bookstore with secure payment gateway, admin dashboard, and user management**A modern, full-stack e-commerce bookstore with secure payment integration, real-time inventory management, and an intuitive admin dashboard.*

| Feature | Details |

|---------|---------|

| 🔐 **Authentication** | JWT-based auth, bcrypt password hashing, role-based access control |

| 💳 **Payment Integration** | Razorpay gateway with secure order creation & verification |</div>[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Documentation](#-documentation) • [Contributing](#-contributing)

| 🛡️ **Admin Dashboard** | Secret URL access, complete book/user/payment management |

| 📚 **Book Management** | Full CRUD with image upload (multer), category organization |

| 👥 **User System** | Registration, login, profile management, purchase history |

| 🔍 **Advanced Search** | Filter by title, author, category; sort by relevance |---</div>

| 📱 **Responsive UI** | Mobile-first design with Tailwind CSS & Font Awesome |

| 🏗️ **Clean Architecture** | MVC pattern, RESTful APIs, middleware-based validation |



---## ✨ Key Features---



## 🛠️ Tech Stack



**Backend:** Node.js, Express.js (4.18.2)  - 🔐 **Authentication** - Secure login/register with bcrypt & JWT---

**Database:** MongoDB with Mongoose ODM  

**Frontend:** EJS templates, Tailwind CSS, Vanilla JavaScript  - 💳 **Payment Gateway** - Razorpay integration for secure transactions

**Authentication:** JWT, bcrypt, express-session  

**Payments:** Razorpay API  - 🛡️ **Admin Panel** - Complete dashboard for books, users & payments management## ✨ Features

**File Handling:** Multer (image uploads)  

**Security:** Environment variables, session management, input validation  - 📚 **Book Management** - CRUD operations with image upload



---- 👥 **User Management** - Profile, purchase history, and account control<table>



## 📁 Project Structure- 🔍 **Search & Filter** - Advanced book search by title, author, category<tr>



```- 📱 **Responsive Design** - Mobile-first UI with Tailwind CSS<td width="50%">

bookvault/

├── config/                 # Configuration files- 🏗️ **MVC Architecture** - Clean, maintainable code structure

│   ├── db.js              # MongoDB connection

│   └── multer.js          # File upload settings### 🔐 **Authentication & Security**

├── controllers/           # Business logic

│   ├── authController.js---- Secure user registration and login

│   ├── adminController.js

│   ├── bookController.js- Password encryption with bcrypt

│   └── paymentController.js

├── middleware/            # Express middleware## 🛠️ Tech Stack- JWT-based authentication

│   ├── authMiddleware.js  # Authentication check

│   └── adminMiddleware.js # Admin authorization- Session management

├── models/               # Database schemas

│   ├── Book.js**Backend:** Node.js, Express.js, MongoDB, Mongoose  - Role-based access control (User/Admin)

│   ├── User.js

│   ├── Category.js**Frontend:** EJS Templates, Tailwind CSS, JavaScript  - Protected routes & middleware

│   └── Payment.js

├── routes/               # API routes**Authentication:** JWT, bcrypt, express-session  

│   ├── index.js          # Public routes

│   ├── auth.js**Payment:** Razorpay Gateway  </td>

│   ├── admin.js

│   ├── user.js**File Upload:** Multer  <td width="50%">

│   ├── api.js

│   └── payment.js

├── views/                # EJS templates

│   ├── admin/           # Admin panel views---### 👤 **User Features**

│   ├── user/            # User dashboard views

│   ├── partials/        # Reusable components- Personalized user dashboard

│   └── index.ejs        # Home page

├── public/              # Static assets## 🚀 Quick Start- Browse extensive book catalog

│   ├── css/style.css

│   ├── js/              # Client-side scripts- Advanced search & filter by category

│   └── uploads/books/   # Book cover images

├── server.js            # Application entry point### Prerequisites- Real-time book availability

├── seedCategories.js    # Database seeding

└── package.json- Node.js (v14+)- Secure payment integration (Razorpay)

```

- MongoDB (v4+)- Purchase history tracking

---

- npm or yarn- Profile management

## 🚀 Quick Start



### Prerequisites

- **Node.js** v14+ | **MongoDB** v4+ | **npm/yarn**### Installation</td>



### Installation (5 steps)</tr>



```bash1. **Clone the repository**<tr>

# 1. Clone repository

git clone https://github.com/Kishor-04/Book-Store-App.git```bash<td width="50%">

cd Book-Store-App/book-store

git clone https://github.com/Kishor-04/Book-Store-App.git

# 2. Install dependencies

npm installcd Book-Store-App/book-store### 🛡️ **Admin Panel**



# 3. Configure environment```- Secret URL access for admins

cp .env.example .env

# Edit .env with your values:- Comprehensive dashboard with statistics

# - MONGODB_URI=mongodb://localhost:27017/bookvault

# - RAZORPAY_KEY_ID=your_key2. **Install dependencies**- Full CRUD operations for books

# - RAZORPAY_KEY_SECRET=your_secret

# - ADMIN_URL_PATH=/admin-secret-dashboard (customize this!)```bash- User management (create, edit, delete)



# 4. Start MongoDBnpm install- Category management

mongod  # or: net start MongoDB (Windows)

```- Payment transaction monitoring

# 5. Run application

npm run dev     # Development mode with auto-reload- Book image upload functionality

npm start       # Production mode

```3. **Setup environment variables**- Real-time inventory tracking



**Application runs at:** `http://localhost:5000````bash



---cp .env.example .env</td>



## 📍 Access Routes```<td width="50%">



### 🌐 Public Routes

| Route | Purpose |

|-------|---------|Edit `.env` file:### 💳 **Payment Integration**

| `/` | Home page with book catalog |

| `/auth/login` | User login |```env- Razorpay payment gateway

| `/auth/register` | Create new account |

| `/categories` | Browse by category |PORT=5000- Secure transaction processing

| `/about` | About us |

| `/contact` | Contact information |MONGODB_URI=mongodb://localhost:27017/bookvault- Payment verification & validation



### 👤 User Routes (Login Required)SESSION_SECRET=your_session_secret- Transaction history

| Route | Purpose |

|-------|---------|JWT_SECRET=your_jwt_secret- Order management

| `/user/dashboard` | User dashboard & stats |

| `/user/profile` | Manage profile |ADMIN_URL_PATH=/admin-secret-dashboard- Receipt generation

| `/user/payments` | Purchase history |

RAZORPAY_KEY_ID=your_razorpay_key- Payment status tracking (pending/completed/failed)

### 🛡️ Admin Routes (Admin Only)

| Route | Purpose |RAZORPAY_KEY_SECRET=your_razorpay_secret

|-------|---------|

| `/admin-secret-dashboard` | Admin dashboard |```</td>

| `/admin-secret-dashboard/books` | Manage books (CRUD) |

| `/admin-secret-dashboard/users` | Manage users |</tr>

| `/admin-secret-dashboard/payments` | View transactions |

4. **Start MongoDB**<tr>

---

```bash<td width="50%">

## 🔌 API Endpoints

# Windows

| Method | Endpoint | Description | Auth |

|--------|----------|-------------|------|net start MongoDB### 🎨 **UI/UX**

| GET | `/api/books` | Get books (with filters) | No |

| GET | `/api/books/:id` | Get book details | No |- Responsive design (Mobile, Tablet, Desktop)

| GET | `/api/categories` | Get all categories | No |

| POST | `/payment/create-order` | Create payment order | Yes |# Linux/Mac- Modern Tailwind CSS framework

| POST | `/payment/verify` | Verify payment signature | Yes |

sudo systemctl start mongod- Font Awesome icons

---

```- Smooth animations & transitions

## 👤 Admin Setup

- Toast notifications

### Create First Admin User

5. **Seed database (optional)**- Loading states & error handling

**Option 1: MongoDB Shell**

```javascript```bash- Intuitive navigation

use bookvault

db.users.insertOne({npm run seed

  name: "Admin",

  email: "admin@bookvault.com",```</td>

  password: "$2a$10$...", // Use bcrypt to hash your password

  role: "admin",<td width="50%">

  isActive: true

})6. **Run the application**

```

```bash### 🚀 **Technical Features**

**Option 2: Update Existing User**

```javascriptnpm run dev    # Development mode- MVC architecture pattern

db.users.updateOne(

  { email: "user@example.com" },npm start      # Production mode- RESTful API design

  { $set: { role: "admin" } }

)```- AJAX-powered dynamic content

```

- File upload with Multer

---

Visit: **http://localhost:5000**- Image storage & management

## 🔐 Environment Variables

- Database seeding scripts

Create `.env` file with these required variables:

---- Environment-based configuration

```env

# Server- ES6+ modern JavaScript

PORT=5000

NODE_ENV=development## 📁 Project Structure



# Database</td>

MONGODB_URI=mongodb://localhost:27017/bookvault

```</tr>

# Security (Use strong, random values!)

SESSION_SECRET=your_super_secret_session_keybookvault/</table>

JWT_SECRET=your_super_secret_jwt_key

├── config/              # Database & multer config

# Admin Panel (Change this to something obscure)

ADMIN_URL_PATH=/admin-secret-dashboard├── controllers/         # Business logic---



# Razorpay (Get from razorpay.com)├── middleware/          # Auth & validation

RAZORPAY_KEY_ID=rzp_test_xxxxx

RAZORPAY_KEY_SECRET=xxxxx├── models/             # MongoDB schemas---

```

├── routes/             # API routes

> ⚠️ **Never commit `.env` to version control!**

├── views/              # EJS templates## 🎬 Demo

---

│   ├── admin/          # Admin panel views

## 🧰 Common Commands

│   ├── user/           # User dashboard views### Screenshots

```bash

npm run dev          # Start with auto-reload (nodemon)│   └── partials/       # Reusable components

npm start            # Production mode

npm run seed         # Seed categories to database├── public/             # Static files & uploads<div align="center">

npm install          # Install dependencies

```└── server.js           # App entry point



---```#### 🏠 Home Page



## 🐛 Troubleshooting<img src="https://via.placeholder.com/800x400/2563eb/ffffff?text=BookVault+Home+Page" alt="Home Page" width="80%">



| Problem | Solution |---

|---------|----------|

| **MongoDB connection refused** | Ensure MongoDB is running: `mongod` or `net start MongoDB` |#### � Book Catalog with Search & Filter

| **Module not found error** | Run `npm install` to install all dependencies |

| **Admin panel returns 404** | Verify `ADMIN_URL_PATH` in `.env` matches your URL |## 🔑 Access Points<img src="https://via.placeholder.com/800x400/4f46e5/ffffff?text=Book+Catalog" alt="Book Catalog" width="80%">

| **Payment gateway error** | Check Razorpay keys in `.env` are correct |

| **Session issues** | Ensure `SESSION_SECRET` is set in `.env` |

| **File upload fails** | Check `/public/uploads/books/` exists and has write permissions |

### Public Routes#### 🛡️ Admin Dashboard

---

- Home: `http://localhost:5000/`<img src="https://via.placeholder.com/800x400/10b981/ffffff?text=Admin+Dashboard" alt="Admin Dashboard" width="80%">

## 📦 Dependencies

- Login: `http://localhost:5000/auth/login`

```json

{- Register: `http://localhost:5000/auth/register`#### 💳 Payment Integration

  "express": "^4.18.2",

  "mongoose": "^8.1.3",<img src="https://via.placeholder.com/800x400/f59e0b/ffffff?text=Payment+Gateway" alt="Payment Gateway" width="80%">

  "ejs": "^3.1.9",

  "bcryptjs": "^2.4.3",### User Dashboard (Login Required)

  "jsonwebtoken": "^9.0.2",

  "razorpay": "^2.9.2",- Dashboard: `http://localhost:5000/user/dashboard`</div>

  "multer": "^1.4.5-lts.1",

  "express-session": "^1.18.0",- Purchase History: `http://localhost:5000/user/payments`

  "connect-flash": "^0.1.1",

  "dotenv": "^16.4.5"---

}

```### Admin Panel (Admin Role Required)



---- Admin Dashboard: `http://localhost:5000/admin-secret-dashboard`## 🛠️ Tech Stack



## 🔄 Database Schema- Manage Books: `http://localhost:5000/admin-secret-dashboard/books`



### User Model- Manage Users: `http://localhost:5000/admin-secret-dashboard/users`<div align="center">

```javascript

{- View Payments: `http://localhost:5000/admin-secret-dashboard/payments`

  name: String,

  email: String (unique),### Backend

  password: String (hashed),

  role: "user" | "admin",---![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

  isActive: Boolean,

  createdAt: Date![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

}

```## 👤 Create Admin User![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)



### Book Model![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

```javascript

{### Method 1: MongoDB Shell

  title: String,

  author: String,```javascript### Frontend

  description: String,

  price: Number,use bookvault![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

  category: ObjectId (ref: Category),

  coverImage: String,![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

  isbn: String,

  publishYear: Number,db.users.insertOne({![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

  stock: Number,

  createdAt: Date  name: "Admin",![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

}

```  email: "admin@bookvault.com",



### Payment Model  password: "$2a$10$hashed_password_here",  // Use bcrypt### Payment & Storage

```javascript

{  role: "admin",![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)

  user: ObjectId (ref: User),

  book: ObjectId (ref: Book),  isActive: true,![Multer](https://img.shields.io/badge/Multer-FF6C37?style=for-the-badge&logo=files&logoColor=white)

  razorpayOrderId: String,

  razorpayPaymentId: String,  createdAt: new Date()

  razorpaySignature: String,

  amount: Number,})### Authentication & Security

  status: "pending" | "completed" | "failed",

  createdAt: Date```![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

}

```![bcrypt](https://img.shields.io/badge/bcrypt-338033?style=for-the-badge&logo=letsencrypt&logoColor=white)



---### Method 2: Update Existing User



## 🚢 Deployment```javascript</div>



### Using Herokudb.users.updateOne(

```bash

heroku create your-app-name  { email: "user@example.com" },---

git push heroku main

heroku config:set MONGODB_URI=your_mongodb_url  { $set: { role: "admin" } }

heroku config:set RAZORPAY_KEY_ID=your_key

heroku config:set RAZORPAY_KEY_SECRET=your_secret)---

heroku open

``````



### Using Docker## 📁 Project Structure

```dockerfile

FROM node:18-alpine---

WORKDIR /app

COPY package*.json ./```

RUN npm install --production

COPY . .## 📋 API Endpointsbookvault/

EXPOSE 5000

CMD ["npm", "start"]│

```

| Method | Endpoint | Description |├── 📂 config/                    # Configuration files

---

|--------|----------|-------------|│   ├── db.js                     # MongoDB connection

## 📊 Performance Tips

| GET | `/api/books` | Get all books (with filters) |│   └── multer.js                 # File upload configuration

- ✅ Use MongoDB indexes on frequently queried fields (email, category)

- ✅ Implement pagination for book listings| GET | `/api/books/:id` | Get single book |│

- ✅ Cache category data on client-side

- ✅ Optimize images before upload (max 5MB)| GET | `/api/categories` | Get all categories |├── 📂 controllers/               # Business logic controllers

- ✅ Use Redis for session storage in production

| POST | `/payment/create-order` | Create payment order |│   ├── adminController.js        # Admin operations

---

| POST | `/payment/verify` | Verify payment |│   ├── authController.js         # Authentication logic

## 🔐 Security Best Practices

│   ├── bookController.js         # Book CRUD operations

- ✅ All passwords hashed with bcrypt (10 salt rounds)

- ✅ JWT tokens with expiration---│   ├── publicController.js       # Public pages

- ✅ CSRF protection via session

- ✅ Input validation on all forms│   └── paymentController.js      # Payment processing

- ✅ Admin routes protected by middleware

- ✅ Environment variables for sensitive data## 🐛 Troubleshooting│

- ✅ Payment verification via signature validation

├── 📂 middleware/                # Express middleware

---

**MongoDB connection error?**  │   ├── authMiddleware.js         # User authentication

## 📄 License

→ Ensure MongoDB is running: `net start MongoDB`│   ├── adminMiddleware.js        # Admin authorization

**ISC License** – See [LICENSE](LICENSE) file for details

│   └── validate.js               # Input validation

---

**Module not found?**  │

## 👨‍💻 Author

→ Run: `npm install`├── 📂 models/                    # Mongoose schemas

**Kishor Khardekar**  

GitHub: [@Kishor-04](https://github.com/Kishor-04)  │   ├── Book.js                   # Book model

Email: kishor.khardekar@example.com

**Admin panel 404?**  │   ├── User.js                   # User model

---

→ Check `ADMIN_URL_PATH` in `.env` file│   ├── Category.js               # Category model

<div align="center">

│   └── Payment.js                # Payment transaction model

### ⭐ If this project helps you, please give it a star!

**Session issues?**  │

**Built with ❤️ using Node.js, Express, MongoDB & Razorpay**

→ Verify `SESSION_SECRET` is set in `.env`├── 📂 routes/                    # Route definitions

[Report Bug](https://github.com/Kishor-04/Book-Store-App/issues) • [Request Feature](https://github.com/Kishor-04/Book-Store-App/issues)

│   ├── index.js                  # Public routes

</div>

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