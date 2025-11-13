# JotBoard – MERN Notes Application

JotBoard is a simple and efficient notes application built using the MERN stack.  
It provides full CRUD operations with a clean UI, fast backend, and secure rate-limited API.

---

## Overview

This project is a complete notes management system with:
- A React (Vite) frontend styled using TailwindCSS and DaisyUI.
- A Node.js + Express backend connected to MongoDB via Mongoose.
- Upstash Redis-based rate limiting for improved security.
- A fully working Create/Read/Update/Delete workflow.

---

## Tech Stack

### Frontend
- React (Vite)
- TailwindCSS + DaisyUI
- React Router
- Axios

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Upstash Redis (Sliding Window Rate Limiting)
- dotenv, CORS

---

## Features

### Core Features
- Create notes with title and content.
- View all notes in a clean grid layout.
- Open individual note pages with detailed view.
- Update existing notes.
- Delete notes instantly.
- Friendly error handling and loading states.
- Rate limit feedback UI when API limit is reached.

### Additional Functional Features
- Axios instance with environment-based baseURL switching.
- DaisyUI theme support.
- Clean client-side routing without page reloads.
- Notes displayed with formatted creation date.

---

## Project Structure

### Backend
- `server.js` – App setup, middleware, static file serving, route mounting.
- `db.js` – MongoDB connection logic.
- `notesRoute.js` – All CRUD API endpoints.
- `notesController.js` – Core logic for create, read, update, delete.
- `Note.js` – Mongoose schema.
- `rateLimiter.js` / `upstash.js` – Redis rate limiting configuration.

### Frontend
- `src/pages` – Home, Create, Note Detail pages.
- `src/components` – NoteCard, Navbar, RateLimitedUI, NotesNotFound.
- `src/axios.js` – Axios instance with correct baseURL logic.
- `src/utils.js` – Date formatting helper.
- `tailwind.config.js` – Tailwind + DaisyUI config.

---

## API Endpoints

| Method | Endpoint        | Description            |
|--------|------------------|------------------------|
| GET    | /api/notes       | Get all notes          |
| GET    | /api/notes/:id   | Get a single note      |
| POST   | /api/notes       | Create a new note      |
| PUT    | /api/notes/:id   | Update existing note   |
| DELETE | /api/notes/:id   | Delete a note          |

---

## Deployment Notes

- Ensure `express.json()` runs in both development and production.
- Set all environment variables correctly on hosting platform (Render, etc.).
- If frontend and backend are hosted separately, configure `VITE_API_URL`.
- MongoDB Atlas must whitelist server/hosting IPs.

---

## How It Works

1. User interacts with the React UI.
2. Axios sends API requests to the Express backend.
3. Backend validates rate limit using Upstash Redis.
4. Backend performs CRUD operations via Mongoose.
5. MongoDB stores and retrieves note data.
6. React frontend updates UI instantly based on API responses.

---

## Future Improvements

- Input validation using Joi or express-validator.
- Centralized error handling middleware.
- Dark/light mode toggle via DaisyUI.
- Add tests for controllers and routes.

---


