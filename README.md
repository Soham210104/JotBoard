# 📝 JotBoard – Clean, Fast, and Modern MERN Notes App

JotBoard is a simple yet powerful notes application built using the **MERN stack**.  
It’s fast, minimal, well-structured, and fun to use — perfect for learning, portfolio display, or extending into a full productivity tool.

### LIVE - https://jotboard-gv7j.onrender.com/

## FRONTEND 
<table align="center">
  <tr>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/ee5c692a-9c2b-4b7e-be09-1e9d887946fb"
           width="100%" alt="Home Page" />
      <br/>
      <b>HOME PAGE</b>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/29a4e830-50b0-4c6e-9635-c2c216cfa70f"
           width="100%" alt="Create Note" />
      <br/>
      <b>CREATE NOTE</b>
    </td>
  </tr>
</table>
>





---

## 🚀 What JotBoard Does

- ✏️ Create notes with a title and content  
- 📄 View all notes in a clean, responsive grid  
- 🔍 Open notes in a detailed view page  
- ✨ Update notes with instant UI feedback  
- 🗑️ Delete notes smoothly (optimistic UI)  
- 🛡️ Handles API rate-limits gracefully  
- 🎨 Beautiful UI with TailwindCSS + DaisyUI  
- ⚡ Fast frontend + reliable backend  

Everything is designed to be readable, maintainable, and developer-friendly.

---

## 🧩 Tech Stack

### 🌐 Frontend
- React (Vite)
- TailwindCSS + DaisyUI
- React Router
- Axios

### 🖥️ Backend
- Node.js + Express
- MongoDB + Mongoose
- Upstash Redis (Sliding Window Rate Limiting)
- dotenv, CORS

---

## ⭐ Features (What Makes This App Feel Good)

- Full CRUD functionality  
- Modern component-based UI  
- Clean navigation without page reloads  
- Toast messages, loaders, friendly error UI  
- Smart Axios baseURL (auto switches for dev/prod)  
- Easy to deploy backend structure  
- Fully responsive layout  
- Date formatting and tidy note cards  

---

## 📁 Project Structure

### 🔧 Backend
- `server.js` – Express setup, middleware, static frontend serving  
- `db.js` – MongoDB connection logic  
- `notesRoute.js` – All CRUD REST endpoints  
- `notesController.js` – Core create/read/update/delete logic  
- `Note.js` – Mongoose schema  
- `rateLimiter.js` + `upstash.js` – Redis-based API protection  

### 🎨 Frontend
- `src/pages` – HomePage, CreatePage, NoteDetailPage  
- `src/components` – NoteCard, Navbar, RateLimitedUI, NotesNotFound  
- `src/axios.js` – Axios instance & baseURL logic  
- `src/utils.js` – Date formatting helper  
- `tailwind.config.js` – Tailwind & DaisyUI config  

---

## 🔌 API Endpoints

| Method | Endpoint        | Description            |
|--------|------------------|------------------------|
| GET    | /api/notes       | Get all notes          |
| GET    | /api/notes/:id   | Get a single note      |
| POST   | /api/notes       | Create a new note      |
| PUT    | /api/notes/:id   | Update a note          |
| DELETE | /api/notes/:id   | Delete a note          |

---

## 🛠️ Deployment Notes

- Ensure `express.json()` runs in both dev & production  
- Set `MONGO_URI` and Redis env vars correctly  
- If frontend & backend are not on same domain, configure `VITE_API_URL`  
- Whitelist hosting IPs in MongoDB Atlas  

---

## 🔄 How It All Works

1. User interacts with the React interface  
2. Axios sends requests to Express backend  
3. Backend checks Redis rate-limit  
4. Mongoose performs database operations  
5. MongoDB stores and retrieves notes  
6. Frontend updates UI instantly  

Smooth, predictable, and easy to debug.

---

## 🎯 Future Enhancements

- Form validation using Joi/express-validator  
- Centralized error handler in backend  
- Dark/light mode toggle using DaisyUI themes  
- Integration tests for API and UI  

---
