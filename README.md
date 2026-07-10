# 🌾 BARN

### Benefactor for Agriculture Resources and Need

<p align="center">

![React](https://img.shields.io/badge/React.js-Frontend-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-REST_API-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-UI-06B6D4?style=for-the-badge&logo=tailwindcss)
![Razorpay](https://img.shields.io/badge/Razorpay-Payments-0C2451?style=for-the-badge)
![Google OAuth](https://img.shields.io/badge/Google-OAuth-4285F4?style=for-the-badge&logo=google)

</p>

---

# 📌 Overview

**BARN (Benefactor for Agriculture Resources and Need)** is a full-stack AgriTech platform developed during **JPMorgan Chase Code for Good 2025** to digitally transform the operations of the **Centre for Microfinance and Livelihoods (CML)**, an NGO supporting small and marginal farmers across Assam.

The platform replaces paper-based workflows with an integrated digital ecosystem that enables farmer management, crop tracking, marketplace operations, weather intelligence, donations, analytics, and role-based administration—all within a single scalable platform.

Designed with a modern full-stack architecture, BARN empowers NGOs to operate more efficiently while helping farmers gain better access to markets, information, and support services.

> 🏆 Developed during **JPMorgan Chase Code for Good 2025** in collaboration with **Centre for Microfinance and Livelihoods (CML)** to solve real-world agricultural and rural NGO management challenges.

---

# 🎬 Project Videos

This repository includes two complementary walkthroughs designed for different audiences.

## 🌐 Public Project Showcase

The public showcase provides a high-level overview of the complete project, covering:

- Problem Statement
- Solution Overview
- System Architecture
- Technology Stack
- Core Platform Features
- Authentication & Security
- Marketplace & Donations
- Team Contributions
- Real-World Impact

### ▶ Watch the Project Showcase

**YouTube:**

https://youtu.be/JxhQsuAu_w8?si=RQH2HPiS-NMJUtQK

---

## 🔒 Complete Project Demonstration

A comprehensive implementation walkthrough is also available for professional evaluation purposes.

The demonstration includes:

- Complete Working Prototype
- Source Code Walkthrough
- Backend Architecture
- Frontend Architecture
- Authentication Flow
- Marketplace Module
- Donation Module
- Weather Integration
- Chat System
- Database Design
- API Implementation
- Deployment Workflow
- End-to-End Feature Demonstration

To protect the project's implementation while supporting genuine technical evaluations, this demonstration is kept **unlisted**.

It can be shared upon request for:

- Recruiters
- Hiring Managers
- Technical Interviewers
- Internship & Placement Evaluations
- Academic Reviews
- Research Discussions
- Project Collaborations
- Professional Technical Assessments

---

# 📂 Project Resources

| Resource | Description |
|----------|-------------|
| 🎥 Public Project Showcase | Presentation-based walkthrough of the complete project |
| 📄 Project Presentation | Complete project presentation available inside the `docs` directory |
| 🏗️ Architecture Documentation | Detailed system architecture and workflow |
| 📚 Technical Documentation | Additional implementation documentation |

---

# 🎯 Project Objectives

The primary objectives of BARN are to:

- Digitize farmer and agricultural data management
- Replace paper-based NGO workflows with digital operations
- Enable role-based administration across different stakeholders
- Improve communication between NGOs and farmers
- Provide real-time weather intelligence
- Create a digital marketplace for agricultural products
- Enable secure online donations
- Improve operational efficiency through analytics and automation

---

# 🤝 Team Project

This project was developed collaboratively during **JPMorgan Chase Code for Good 2025**.

While BARN represents the collective effort of the entire development team, the **My Contributions** section later in this document highlights my individual engineering responsibilities and technical contributions.

---

# 🚀 Core Features

## 👨‍🌾 Farmer Management

- Digital farmer registration
- Crop & livestock management
- Production tracking
- Bulk Excel import/export
- Real-time data synchronization

---

## 🌱 Crop Management

- Crop lifecycle tracking
- Production monitoring
- Seasonal management
- Agricultural analytics

---

## 🛒 Digital Marketplace

- Farmers can list agricultural products
- Product catalog management
- Buyer purchase workflow
- Inventory management
- Revenue tracking

---

## 💰 Donation Portal

- Secure NGO donations
- Razorpay payment gateway integration
- Transaction confirmation
- Donation history

---

## 🌦️ Weather Intelligence

- Real-time weather forecasts
- Interactive MapTiler integration
- Climate monitoring
- Farmer weather alerts

---

## 💬 Real-Time Communication

- Manager ↔ Farmer chat
- Instant messaging
- Shared conversation history
- Role-based communication

---

## 📊 Analytics Dashboard

- Crop distribution analytics
- Production trends
- Operational insights
- Interactive charts and visualizations

---

## 🔐 Authentication & Security

- Email & Password Authentication
- Google OAuth
- SMS OTP Login
- Password Recovery
- Role-Based Authorization
- Admin Approval Workflow

---

# 🏗️ System Architecture

BARN follows a modular, scalable, and enterprise-oriented full-stack architecture designed to support multiple user roles, cloud integrations, and future platform expansion.

The platform is organized into independent layers, allowing each component to evolve without impacting the rest of the system.

| Layer | Description |
|--------|-------------|
| 🎨 Frontend | React.js application providing dashboards, marketplace, farmer management, analytics, and administration panels. |
| ⚙️ Backend | Express.js REST APIs handling authentication, business logic, payments, messaging, and integrations. |
| 🗄️ Database | MongoDB with Mongoose for scalable storage of users, crops, products, donations, and transactions. |
| ☁️ Cloud Services | Cloudinary, Razorpay, MapTiler, Email Services, SMS Gateway, Google OAuth and third-party APIs. |

For detailed architecture diagrams and implementation details, refer to:

📄 **`docs/Architecture.md`**

---

# 👥 User Roles

BARN is designed around a secure **Role-Based Access Control (RBAC)** system.

## 👑 Admin

Responsible for platform administration and overall operational control.

Capabilities include:

- Approve Manager registrations
- Manage platform users
- View analytics
- Control permissions
- Monitor marketplace activities

---

## 👨‍💼 Manager

Acts as the bridge between the NGO and farmers.

Capabilities include:

- Manage farmers
- Monitor crop production
- Send SMS alerts
- View analytics dashboards
- Manage marketplace activities
- Communicate with farmers
- Track donations and reports

---

## 👨‍🌾 Farmer

Designed for ease of use even in rural environments.

Capabilities include:

- Register on the platform
- Manage crop information
- Upload products
- Sell agricultural produce
- Receive weather updates
- Chat with managers
- View marketplace activities

---

# 🔐 Authentication & Security

Security is implemented using multiple authentication mechanisms to provide both accessibility and secure access.

Supported authentication methods include:

- Email & Password Authentication
- Google OAuth Sign-In
- SMS OTP Verification
- Password Recovery via Email
- Session-based Authentication
- Role-Based Authorization
- Admin Approval Workflow

The platform ensures that each user can only access the resources and features permitted for their assigned role.

---

# ☁️ Third-Party Integrations

BARN integrates multiple external services to provide a complete digital ecosystem.

| Service | Purpose |
|----------|---------|
| Google OAuth | Secure social authentication |
| Razorpay | NGO donation processing |
| Cloudinary | Image storage & optimization |
| MapTiler | Interactive maps & weather visualization |
| SMS Gateway | OTP authentication & farmer alerts |
| Email Services | Notifications & password recovery |

These integrations help transform traditional NGO operations into a modern, cloud-enabled platform.

---

# 💻 Technology Stack

## 🎨 Frontend

- React.js
- Tailwind CSS
- React Router
- Axios

---

## ⚙️ Backend

- Node.js
- Express.js
- REST APIs
- JWT & Session Management

---

## 🗄️ Database

- MongoDB
- Mongoose ODM

---

## 🔐 Authentication

- Email Authentication
- Google OAuth
- SMS OTP Verification
- Password Recovery

---

## ☁️ Cloud & External Services

- Cloudinary
- Razorpay
- MapTiler API
- SMS Gateway
- Email Services

---

## 📊 Visualization

- Chart.js
- Recharts

---

# 📂 Project Structure

```text
CFG-HYD-2025-JPMC/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   └── utils/
│   │
│   └── package.json
│
├── docs/
│   ├── BARN-Presentation.pdf
│   ├── Architecture.md
│   └── Images/
│
├── README.md
└── package.json
```

---

# 👨‍💻 My Contributions

As a **Full Stack Developer**, I contributed across both backend and frontend development, taking ownership of several core platform modules.

My major contributions include:

- Designed and developed backend APIs using Express.js.
- Implemented role-based authentication and authorization.
- Integrated Google OAuth authentication.
- Developed SMS OTP authentication for farmers.
- Built password recovery and email verification workflows.
- Integrated Cloudinary for image upload and storage.
- Implemented Razorpay payment gateway for NGO donations.
- Developed the agricultural marketplace backend.
- Built farmer–manager real-time chat functionality.
- Integrated MapTiler for weather visualization.
- Connected backend APIs with frontend modules.
- Developed controllers, middleware, routes, and database schemas.
- Implemented Excel import/export functionality.
- Built SMS notification workflows.
- Enhanced multiple React frontend components.
- Assisted in end-to-end integration and debugging across the platform.

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/SubhankarA8415/CFG-HYD-2025-JPMC.git
cd CFG-HYD-2025-JPMC
```

---

## 2️⃣ Install Dependencies

Install dependencies for both the backend and frontend.

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory and configure the required environment variables.

Typical configuration includes:

```env
PORT=
MONGODB_URI=

JWT_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

EMAIL_USER=
EMAIL_PASS=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

MAPTILER_API_KEY=

SMS_API_KEY=
```

> **Note:** The exact environment variables may vary depending on your deployment configuration and third-party service credentials.

---

# ▶️ Running the Project

## Start the Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

## Start the Frontend

Open another terminal.

```bash
cd frontend
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🌍 Real-World Impact

BARN demonstrates how modern software engineering can create measurable impact for rural communities by digitizing NGO operations and empowering farmers through technology.

The platform enables:

- 🌾 Digital transformation of rural NGO operations
- 👨‍🌾 Better support for small and marginal farmers
- 📈 Data-driven agricultural decision making
- 🛒 Direct farmer-to-buyer marketplace
- 💰 Transparent online donations
- 🌦️ Real-time weather intelligence
- 📊 Operational analytics for NGOs
- 🤝 Improved communication between NGOs and farmers

By replacing fragmented paper-based workflows with an integrated digital platform, BARN helps NGOs scale their operations while improving accessibility and transparency for all stakeholders.

---

# 📚 Documentation

Additional project documentation is available inside the `docs/` directory.

- 📄 Project Presentation
- 🏗️ System Architecture
- 📚 Technical Documentation
- 🚀 Deployment Guide *(Planned)*

---

# 🚀 Future Scope

Future enhancements planned for the platform include:

- AI-powered Crop Disease Detection
- Mobile Application for Farmers
- Voice-based Farmer Assistance
- Regional Language Expansion
- Advanced Marketplace Analytics
- IoT Sensor Integration
- Satellite & GIS Monitoring
- AI-based Crop Recommendation System
- Government Scheme Integration
- Production-grade Cloud Deployment

---

# 🙏 Acknowledgements

This project was developed during **JPMorgan Chase Code for Good 2025** for the **Centre for Microfinance and Livelihoods (CML)**.

Special thanks to:

- **JPMorgan Chase & Co.**
- **Centre for Microfinance and Livelihoods (CML)**
- Our mentors for their continuous guidance and support throughout the hackathon.

---

# 👥 Development Team

Developed collaboratively by **Team 27** during **JPMorgan Chase Code for Good 2025**.

| Team Member | Primary Contribution |
|-------------|----------------------|
| **Subhankar Pandit** | Backend Development, System Integration & Frontend Enhancements |
| Tirupate Aniketh | Frontend Development, APIs & GitHub |
| Muvva Adityavardhan | Chatbot & ML Integration |
| Yakkala Meenakshi | Frontend Development & APIs |
| Harsha Vardhan | Backend Development & GitHub |
| Anamika Rana | Frontend UI & Presentation |
| Sivam Mohapatra | Mobile Application & API Integration |

---

# 👨‍🏫 Mentors

We sincerely thank our mentors from **JPMorgan Chase & Co.** for their invaluable guidance throughout the hackathon.

- **Mamatha A** — Vice President, Product & Agile
- **Srinivas Kota** — Vice President
- **Lavanya Palaparthi** — Software Engineer III

---

# ⚠️ Disclaimer

This project was developed as part of **JPMorgan Chase Code for Good 2025** for educational, demonstration, and social impact purposes.

While designed around a real-world NGO use case, certain integrations (such as payment gateways, SMS services, and cloud resources) may use development or test environments and are intended for demonstration purposes.

---

# 👨‍💻 Developer

## **Subhankar Pandit**

**Computer Science Engineer | Full Stack Developer | AI & Machine Learning Enthusiast**

Passionate about building scalable software systems, AI-powered applications, and technology solutions that create meaningful real-world impact.

---

# 📬 Connect With Me

If you'd like to discuss this project, collaborate on innovative ideas, explore professional opportunities, or connect for technical discussions, feel free to reach out.

- 🌐 **Portfolio:** https://portfolio-subhankar-pandits-projects.vercel.app/
- 💼 **LinkedIn:** https://linkedin.com/in/subhankar-pandit-080449255
- 💻 **GitHub:** https://github.com/SubhankarA8415
- 🎥 **YouTube:** https://youtube.com/@subhankardevlab
- 📧 **Email:** subhankar.pandit2002@gmail.com

---

# 🤝 Contributing

Contributions, suggestions, feature requests, and feedback are always welcome.

If you'd like to improve this project, feel free to fork the repository, open an issue, or submit a pull request.

---

# ⭐ Support

If you found this project interesting or useful, consider giving the repository a **⭐ Star** on GitHub.

Your support helps increase the visibility of the project and motivates the development of future open-source software and AI-powered applications.

---

<p align="center">

### 🚀 Building Intelligent Software for Real-World Impact

**Designed & Developed by Subhankar Pandit**

</p>
