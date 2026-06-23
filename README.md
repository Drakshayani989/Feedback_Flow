# FeedbackFlow - Course Review Hub

## Overview

FeedbackFlow is a simple full-stack web application that allows students to submit course reviews and view reviews submitted by others. The application demonstrates frontend-backend communication using HTML, CSS, JavaScript, Node.js, and Express.js.

The project provides REST API endpoints to add and retrieve feedback data and includes input validation and dynamic rendering of reviews.

---

## Features

* Submit course reviews
* View recent reviews
* Average rating calculation
* Total reviews counter
* Responsive glassmorphism UI
* Input validation
* GET and POST REST APIs
* Dynamic review cards
* Frontend and backend integration using Fetch API

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

---

## Project Structure

```text
FeedbackFlow/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Architecture

```text
                 Browser
                     |
         -----------------------
         HTML + CSS + JavaScript
         -----------------------
                     |
                 Fetch API
                     |
             http://localhost:5000
                     |
            -------------------
               Express Server
            -------------------
             GET /feedbacks
             POST /feedbacks
                     |
                feedbacks[]
               (In-memory data)
```

---

## API Endpoints

### GET /feedbacks

Returns all feedback records.

#### Example Response

```json
[
  {
    "id":1,
    "name":"Rahul",
    "course":"Python",
    "rating":5,
    "feedback":"Excellent course"
  }
]
```

---

### POST /feedbacks

Adds a new review.

#### Request Body

```json
{
  "name":"Rahul",
  "course":"Python",
  "rating":5,
  "feedback":"Excellent course"
}
```

#### Response

```json
{
  "id":171912345,
  "name":"Rahul",
  "course":"Python",
  "rating":5,
  "feedback":"Excellent course"
}
```

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

---

### Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start server:

```bash
node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

### Frontend Setup

Open the frontend folder and run:

```text
index.html
```

or use VS Code Live Server.

Frontend URL:

```text
http://127.0.0.1:5500
```

---

## Input Validation

The backend validates:

* Student Name
* Course Name
* Rating
* Feedback Message

If any field is empty, the server returns:

```json
{
  "message":"All fields are required"
}
```

---

## Working Flow

1. User enters review details.
2. Frontend sends POST request using Fetch API.
3. Express server validates input.
4. Review is stored in memory.
5. Server returns JSON response.
6. Frontend fetches updated reviews.
7. Reviews are displayed dynamically as cards.

---

## Future Enhancements

* MongoDB database integration
* Delete review functionality
* Edit review functionality
* Search and filter reviews
* User authentication
* Dark mode
* Star rating component
* Toast notifications

---

## Conclusion

FeedbackFlow is a simple full-stack web application that demonstrates REST API development, frontend-backend communication, input validation, and dynamic rendering of data. The project provides practical experience with Node.js, Express.js, JavaScript, HTML, and CSS while implementing GET and POST API endpoints.
