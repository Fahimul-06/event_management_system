# Event Management System

A backend Database Management system for managing events, user registration, ticket purchasing, and RSVP functionality. This setup uses **Express**, **MongoDB (Mongoose)**, and is designed for testing via **Postman** without the use of environment variables.

## Features

- User Registration and Login: Allows users to create accounts and log in.
- Event Creation and Management: Admins or authorized users can create and manage events.
- Ticket Purchasing: Users can purchase tickets for events.
- RSVP Functionality: RSVP and other event-related interactions can be extended here.
- **API Testing with Postman**

## Technologies Used

- Express - For creating the server and handling routing.
- MongoDB (Mongoose) - For managing and storing data.
- Stripe API - (To be added later for payment processing)

---

## Project Structure

event-management-system/ 
├── models/
│   │
│   ├── User.js
│   │
│   ├── Event.js
│   │
│   └── Ticket.js
├── routes/ 
│   │
│   ├── users.js
│   │
│   ├── events.js
│   │
│   └── tickets.js 
├── server.js 
└── package.json

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/Fahimul-06/event-management-system.git
cd event-management-system


2. Install Dependencies
npm install

3. Configure MongoDB Connection
In server.js, update the MongoDB URI in the mongoose.connect method with your MongoDB URI. Example:
javascript
mongoose.connect('mongodb://localhost:27017/event_management', { useNewUrlParser: true, useUnifiedTopology: true })

4. Start the Server
node server.js
The server will run at http://localhost:3001.

API Endpoints
1. User Registration
Endpoint: POST /api/users/register
Body Parameters:
json
{
  "username": "testuser",
  "password": "testpass"
}

Response:
json
{
  "message": "User registered successfully"
}

2. User Login
Endpoint: POST /api/users/login
Body Parameters:
json
{
  "username": "testuser",
  "password": "testpass"
}

Response:
json
{
  "message": "Login successful",
  "user": {
    "_id": "USER_ID",
    "username": "testuser"
  }
}

3. Create an Event
Endpoint: POST /api/events
Body Parameters:
json
{
  "name": "Concert",
  "date": "2024-12-01T19:00:00Z",
  "location": "Stadium",
  "description": "A great concert"
}

Response:
json
{
  "_id": "EVENT_ID",
  "name": "Concert",
  "date": "2024-12-01T19:00:00Z",
  "location": "Stadium",
  "description": "A great concert"
}

4. Get All Events
Endpoint: GET /api/events
Response: Returns a list of all events.
5. Purchase a Ticket
Endpoint: POST /api/tickets
Body Parameters:
json
{
  "eventId": "EVENT_ID",
  "userId": "USER_ID",
  "quantity": 2
}

Response:
json
{
  "_id": "TICKET_ID",
  "eventId": "EVENT_ID",
  "userId": "USER_ID",
  "quantity": 2,
  "purchaseDate": "2024-10-25T13:23:12.135Z"
}

6. Get Tickets for a User
Endpoint: GET /api/tickets/:userId
Response: Returns a list of all tickets purchased by the specified user.
Testing with Postman
Start the server by running node server.js.
Use Postman to make requests to the various API endpoints to test user registration, login, event creation, and ticket purchasing.

##Future Enhancements
1.Email Notifications for event updates.
Install a Mailing Library: Use a library like nodemailer to send emails.
npm install nodemailer
Update Event Route: Modify the /api/events route in routes/events.js to send emails when an event is created, updated, or deleted.

Create an Email Service:
In a new file (e.g., services/emailService.js), set up a function that takes email recipients and message content as parameters.
In this service, use nodemailer to send email updates.

2.Payment Integration with Stripe API.
To add payment processing with Stripe:
Install Stripe SDK:
npm install stripe
Set Up a Route for Payment Processing:
Add a new route in routes/payments.js (or in routes/tickets.js if you prefer).
This route should handle payment requests, interacting with Stripe’s API to charge users for tickets.

Create a Stripe Service:
In a new file (e.g., services/paymentService.js), set up Stripe payment functions, handling payment intent creation.

3.Enhanced Security for handling user authentication.
For improved security, add features like password hashing, token-based authentication, and role-based access control.
Hash Passwords:
Install bcrypt to securely hash passwords.
npm install bcrypt
Update the user registration endpoint in routes/users.js to hash passwords before storing them.

License
This project is licensed under the MIT License. See the LICENSE file for details.


This `README.md` covers the setup, features, and API usage for the Event Management System, helping new users understand the purpose and functionality of the backend.
