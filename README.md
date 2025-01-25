# 🏥 Front Desk System for Clinic Management

## Overview

The **Front Desk System** is a comprehensive web-based application designed to streamline patient queue management and doctor appointments in a clinical setting. Built with modern web technologies, this system empowers front desk staff to efficiently handle patient flows, track appointments, and manage clinic operations.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or later)
- npm/yarn
- MySQL Database

### Frontend Setup (Next.js)

1. Clone the repository
```bash
git clone https://github.com/your-username/front-desk-system.git
cd front-desk-system
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Backend Setup (NestJS)

1. Navigate to backend directory
```bash
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file with the following:
```bash
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=clinic_db
JWT_SECRET=your-secret-key
```

4. Start the backend server
```bash
npm run start
```

## ✨ Features

### 🔐 Authentication
- Secure login for front desk staff
- JWT-based authentication and authorization

### 📋 Queue Management
- Add walk-in patients to queue
- Assign and track queue numbers
- Update patient statuses (Waiting, With Doctor, Completed)

### 📅 Appointment Management
- Book, reschedule, and cancel appointments
- View doctor availability
- Track appointment statuses

### 👩‍⚕️ Doctor Management
- Manage doctor profiles
- Search doctors by specialization
- Track doctor availability

## 🛠 Technology Stack

### Backend
- NestJS
- TypeORM
- MySQL
- JWT Authentication
- Axios

### Frontend
- Next.js
- React
- Tailwind CSS
- Axios

## 🌐 Deployment

### Backend
Recommended platforms:
- Heroku
- DigitalOcean
- AWS Elastic Beanstalk

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com/)

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Issues

Please report bugs or feature requests using GitHub Issues.