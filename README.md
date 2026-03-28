# 🚀 AI Interview Agent

An AI-powered interview platform that simulates real interview experiences, evaluates responses, and helps users improve their skills.

## 📌 Features
### 🤖 AI-based mock interviews
### 🎤 Voice/Text-based interaction
### 📊 Performance analysis & feedback
### 🔐 User authentication (Firebase/Auth)
### 💳 Payment integration (Razorpay)
### ☁️ Database storage (MongoDB)
### 🏗️ Tech Stack

Frontend

React (Vite)
Tailwind CSS

Backend

Node.js
Express.js

Database

MongoDB (Atlas)

Other Tools

Firebase (Auth)
Razorpay (Payments)
## 📂 Project Structure
AI-Interview-Agent/
│
├── client/          # Frontend (React)
├── server/          # Backend (Node.js + Express)
│
├── models/          # Database schemas
├── routes/          # API routes
├── controllers/     # Logic handling
├── services/        # External services (Razorpay etc.)
│
└── README.md
## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
git clone https://github.com/your-username/ai-interview-agent.git
cd ai-interview-agent
### 2️⃣ Setup Backend
cd server
npm install

Create .env file:

PORT=8000
MONGODB_URL=your_mongodb_url
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

Run backend:

npm run dev
## 3️⃣ Setup Frontend
cd client
npm install
npm run dev
🔌 Environment Variables
Variable	Description
MONGODB_URL	MongoDB connection string
PORT	Server port
RAZORPAY_KEY_ID	Razorpay public key
RAZORPAY_SECRET	Razorpay secret
## 🚀 How It Works
User signs up / logs in
Selects interview type
AI asks questions
User responds
System analyzes answers
Feedback & score generated
### 🛠️ Future Improvements
### 🎯 More AI models integration
### 📹 Video interview support
### 🧠 Advanced analytics
### 🌍 Multi-language support
### 🤝 Contributing

Pull requests are welcome!
For major changes, open an issue first.

