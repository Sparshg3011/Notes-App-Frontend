# Notes-App-Frontend
Here's a basic README template for a MERN stack project with front-end and back-end folders named `notes-backend` and `notes-frontend`, respectively:

---
# Home Page
<img width="1433" alt="Screenshot 2024-04-04 at 2 11 02 AM" src="https://github.com/Sparshg3011/Notes-App-Frontend/assets/90498262/497d5852-7b18-4ad0-9fad-1a946b36caa3">

# Login Page
<img width="1435" alt="Screenshot 2024-04-04 at 2 11 17 AM" src="https://github.com/Sparshg3011/Notes-App-Frontend/assets/90498262/aa9e7997-11db-4faf-b2fe-e6fef2d66b72">

# Signup Page
<img width="1440" alt="Screenshot 2024-04-04 at 2 11 28 AM" src="https://github.com/Sparshg3011/Notes-App-Frontend/assets/90498262/362ba25d-af4b-4aa7-be78-b37a470450bd">

# All Notes Page
<img width="1432" alt="Screenshot 2024-04-04 at 2 12 07 AM" src="https://github.com/Sparshg3011/Notes-App-Frontend/assets/90498262/d4143f82-5d69-4c1f-b98c-b06ed5a1a3c2">

<img width="1435" alt="Screenshot 2024-04-04 at 2 12 45 AM" src="https://github.com/Sparshg3011/Notes-App-Frontend/assets/90498262/79bcae2c-793d-484f-847b-1bfbb8448272">

# MERN Stack Project

This is a full-stack MERN (MongoDB, Express.js, React, Node.js) project.

## Project Structure

- `notes-backend/`: Contains the Node.js backend code.
- `notes-frontend/`: Contains the React frontend code.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account for cloud database.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/mern-stack-project.git
   ```

2. Install dependencies for both the backend and frontend:

   ```bash
   cd mern-stack-project/notes-backend
   npm install

   cd ../notes-frontend
   npm install
   ```

### Configuration

1. **Backend**:
   - Create a `.env` file in the `notes-backend/` directory.
   - Add the following configurations to the `.env` file:

     ```
     PORT=5000
     MONGODB_URI=your-mongodb-uri
     ```

2. **Frontend**:
   - In the `notes-frontend/src/api/index.js` file, update the `BASE_URL` variable to point to your backend server URL if it's different from `http://localhost:5000`.

### Running the Application

1. Start the backend server:

   ```bash
   cd mern-stack-project/notes-backend
   npm run server
   ```

2. Start the frontend development server:

   ```bash
   cd mern-stack-project/notes-frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## Additional Information

- Feel free to explore and modify the code to suit your needs.
- For production deployment, make sure to set up proper environment variables and configure your hosting provider accordingly.

---

Feel free to customize this README template further based on your project's specific requirements and features.
