<h1 align="center">BookVault</h1>
<p align="center">A clean, full‑stack bookstore built with Node.js, Express, MongoDB, and EJS. Secure auth, admin panel, image uploads, and Razorpay payments — all in an elegant MVC setup.</p>

## Features
- User auth (register, login, session)
- Admin panel (secret URL) with books, users, and payments management
- Books CRUD with categories, search/sort, and image uploads (Multer)
- Razorpay checkout with server‑side verification and purchase history
- Responsive UI with Tailwind CSS and reusable EJS partials

## Tech Stack
- Backend: Node.js, Express, Mongoose (MongoDB)
- Frontend: EJS, Tailwind CSS, Vanilla JS
- Auth & sessions: bcryptjs, express-session, connect-flash
- File upload: Multer (stores to public/uploads/books)
- Payments: Razorpay (orders, verify, track)

## Quick Start
1) Install dependencies
```bash
npm install
```
2) Configure environment (copy then edit values)
```bash
copy .env.example .env
```
3) Start the app
```bash
# dev
npm run dev
# prod
npm start
```
App runs at http://localhost:5000

## Environment Variables (.env)
- PORT=5000
- MONGODB_URI=mongodb://localhost:27017/bookvault
- SESSION_SECRET=your_secret
- ADMIN_URL_PATH=/admin-secret-dashboard
- RAZORPAY_KEY_ID=your_key
- RAZORPAY_KEY_SECRET=your_secret

## NPM Scripts
- npm start — run server
- npm run dev — run with nodemon

## Project Structure (short)
```
book-store/
├─ controllers/    # route handlers (admin, auth, books, payment)
├─ models/         # Mongoose schemas (Book, User, Category, Payment)
├─ routes/         # Express routes (public, auth, admin, api, payment)
├─ views/          # EJS pages + partials
├─ public/         # css, js, uploads
├─ config/         # db, multer config
└─ server.js       # app entry
```

## Notes
- Admin URL is configurable via ADMIN_URL_PATH.
- To seed categories quickly, use the provided seeding script if available.
- Receipt IDs for Razorpay are constrained to ≤ 40 chars (handled in code).

---
Made with ❤️ for readers — BookVault
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

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Node.js, Express, MongoDB, and EJS**