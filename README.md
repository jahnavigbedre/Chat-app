# 💬 Web-Based Chat Application

A **real-time** chat application built using **Python (Flask)** and **Socket.IO**.  
This lightweight project demonstrates how to use **WebSockets** for live communication between users directly in their browser.

![Chat Demo](<img width="1265" height="575" alt="image" src="https://github.com/user-attachments/assets/67de2968-02d5-47c4-a539-2d8cdaaaca02" />)

---

## 🔧 Tech Stack

- **Backend**: Python, Flask, Flask-SocketIO  
- **Frontend**: HTML, CSS, JavaScript  
- **Communication**: WebSockets via Socket.IO  
- **Hosting**: Localhost / Deployable on Render, Railway, etc.

---

## 🚀 Features

- 💬 Real-time messaging using WebSockets
- 🧑‍🤝‍🧑 Multi-user chat support
- 🔁 Instant broadcast to all connected clients
- 🎨 Simple & responsive UI
- 📜 Scrollable chat history (per session)
- 📁 Easy to deploy and extend

---

## 📁 Project Structure

```

chat-app/
├── app.py                 # Main Flask server
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html         # Frontend HTML page
├── static/
│   ├── css/
│   │   └── style.css      # Chat styling
│   └── js/
│       └── chat.js        # WebSocket logic
└── README.md              # Project documentation

````

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/jahnavigbedre/chat-app.git
cd chat-app
````

### 2️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

> Requires **Python 3.7+**

---

## 🧪 Run the App

```bash
python app.py
```

Then open your browser and visit:

```
http://localhost:5000
```

> Open in multiple tabs or devices to see **real-time updates**.

---

## 🌐 Deployment

You can deploy this app easily using:

* [Render](https://render.com/)
* [Railway](https://railway.app/)
* [PythonAnywhere](https://www.pythonanywhere.com/) *(limited WebSocket support)*

### Example: Deploy on Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com)
3. Create new **Web Service**
4. Set:

   * **Build Command**: `pip install -r requirements.txt`
   * **Start Command**: `python app.py`
5. Select Python runtime (3.11+)

---

## 📌 Future Improvements

* [ ] Add user authentication (Flask-Login + SQLite)
* [ ] Support multiple chat rooms
* [ ] Save chat history to a database
* [ ] Add emojis & file sharing
* [ ] Typing indicators

---

## 📸 Screenshots

> <img width="1265" height="575" alt="image" src="https://github.com/user-attachments/assets/0af8105e-aab3-4b7b-b5f3-fc822593bd80" />





