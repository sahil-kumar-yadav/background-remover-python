
# 🪄 Background Remover App

Remove image backgrounds instantly with a lightweight **FastAPI + rembg** backend and a minimal **HTML/CSS/JS** frontend.
Perfect for demos, integrations, or learning how to build a simple full-stack app.

---

## 🚀 Features

* **Lightweight:** Single FastAPI app — see [`backend/main.py`](backend/main.py)
* **Simple frontend:** Instant preview + download — see [`frontend/index.html`](frontend/index.html) and [`frontend/script.js`](frontend/script.js)
* **Deploy anywhere:** Works on Render, Heroku, Cloud Run, or locally

---

## 🧠 Tech Stack

* **Backend:** FastAPI, [rembg](https://github.com/danielgatis/rembg)
* **Frontend:** HTML, CSS, JavaScript
* **Deployment:** [Render.com](https://render.com) (example)

---

## 💡 How to Use

1. Open the app in your browser.
2. Upload an image.
3. Click **Upload** to remove the background.
4. View or download your new transparent image.

---

## ⚙️ Quickstart (Local / Dev Container)

1. **Install backend dependencies:**

   ```bash
   pip install -r backend/requirements.txt
   ```

2. **Run the API:**

   ```bash
   uvicorn backend.main:app --reload
   ```

3. **Serve the frontend** (from the repo root):
   Open `frontend/index.html` directly in your browser or serve it via a simple static server.

---

## 🔌 API Reference

**Endpoint:**

```
POST /background-remover-python/
```

**Handled by:**
`remove_background` in `backend/main.py`

**Frontend entry:**
`removeBackground()` in [`frontend/script.js`](frontend/script.js) — update the `backendURL` variable to point to your deployed backend.

> **Note:** CORS is open for testing. Restrict allowed origins before production.

---

## ☁️ Deployment

* Deploy the backend to **Render**, **Heroku**, or **Google Cloud Run**.
* Update `backendURL` in `frontend/script.js` to your deployed API URL.
* Ensure **rembg model artifacts** are available in your environment (see `backend/requirements.txt`).

---

## 🧩 Contributing

Contributions welcome!

* Open issues or PRs
* Add small improvements like CLI support, drag-and-drop uploads, or progressive compression
* Add tests or examples to help others learn

---

## 🔮 Next Steps / Ideas

* ✨ Add drag-and-drop uploads & client-side preview
* 🔐 Add authentication & rate limiting for public use
* 🧪 Add unit tests and CI/CD for the backend

---

## 📄 License

**MIT** — free to use, modify, and share.

---
