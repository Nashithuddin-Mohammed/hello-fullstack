# Hello Full Stack 👋

A beginner full stack web application demonstrating a live connection between a React frontend and a Flask backend via a REST API.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js |
| Backend | Python + Flask |
| API | REST (JSON) |
| Cross-Origin | Flask-CORS |

---

## ✨ Features

- React frontend fetches data from a Flask REST API
- Loading and error states handled gracefully
- CORS configured for local development
- Clean, minimal UI with dynamic response display

---

## 📁 Project Structure
hello-fullstack/

├── backend/

│   └── app.py          # Flask REST API

├── frontend/

│   └── src/

│       └── App.js      # React frontend

└── README.md

---

## ⚙️ Setup & Installation

### Prerequisites
- Python 3.12+
- Node.js v20+
- npm 10+

### Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install flask flask-cors
python app.py
```

Backend runs at: `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs at: `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/hello` | Returns a welcome message from Flask |

---

## 📸 Screenshot

> Click the button to call the Flask API and receive a live response from the backend.

---

## 🧠 Concepts Learned

- Connecting React frontend to a Flask backend
- Making async API calls using `fetch`
- Handling CORS in Flask with `flask-cors`
- Managing loading and error states with `useState`
- REST API design basics

---

## 👨‍💻 Author

**Nashithuddin Mohammed**  
MS Computer Science — Chicago State University (4.0 GPA)  
[GitHub](https://github.com/Nashithuddin-Mohammed) | [LinkedIn](www.linkedin.com/in/nashithuddin-mohammed-1685b4216)