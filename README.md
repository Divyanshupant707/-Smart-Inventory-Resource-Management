📚 Campus Marketplace - Smart Inventory & Resource Management
A full-stack web application built to create a marketplace for students to buy, sell, and rent books and other second-hand items within their campus. This project is engineered with a scalable backend and a responsive frontend to ensure a seamless user experience.

✨ Key Features
Item Management: Users can list new items for sale or rent, view all available items, and manage their own listings.

RESTful API: A well-structured backend API for handling all application logic, from item creation to user management.

Component-Based UI: A reactive and modern user interface built with React.

Scalable Architecture: Built with modular services in Spring Boot to ensure maintainability and scalability.

🛠️ Tech Stack
Backend
Java 17

Spring Boot 3

Spring Data JPA

H2 (In-Memory Database) / PostgreSQL

Gradle / Maven

Frontend
React

JavaScript (ES6+)

Axios

CSS3

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Make sure you have the following installed on your system:

Git

Java Development Kit (JDK) - Version 17 or higher.

Node.js and npm - Latest LTS version.

Installation & Setup
Clone the repository:

Bash

git clone https://github.com/YourUsername/Smart-Inventory-Resource-Management.git
cd Smart-Inventory-Resource-Management
Run the Backend:
Open a new terminal window and navigate to the backend directory.

Bash

# Navigate to the backend project
cd student-marketplace/backend/marketplace

# Run the application using the Gradle wrapper
./gradlew bootRun

# Or, if you used Maven:
# ./mvnw spring-boot:run
The backend server will start on http://localhost:8080.

Run the Frontend:
Open a second terminal window and navigate to the frontend directory.

Bash

# Navigate to the frontend project
cd student-marketplace/frontend/ui

# Install the necessary dependencies
npm install

# Start the React development server
npm start
The frontend application will be available at http://localhost:3000.

API Endpoints
The backend exposes the following RESTful endpoints for managing items:

HTTP Method	Endpoint	Description
GET	/api/items	Fetches all available items
POST	/api/items	Creates a new item

Export to Sheets





# -Smart-Inventory-Resource-Management
