# PocketPal

![online](public/0.png)

A fully responsive and customizable real-time chat application to have your Pals right in your pocket.

## Features

- Tech stack: MERN + Socket.io + TailwindCSS 4 + Daisy UI 5 beta.
- Authentication && Authorization with JWT.
- Real-time messaging with Socket.io.
- Online user status.
- Global state management with Zustand.
- Error handling both on the server and on the client.

## Technologies Used

### Backend

- **bcryptjs:** A JavaScript library for hashing passwords securely using the bcrypt algorithm.
- **cloudinary:** A cloud-based image and video management service for uploading, storing, and transforming media.
- **cookie-parser:** Middleware for parsing cookies in Express applications.
- **cors:** Middleware to enable Cross-Origin Resource Sharing (CORS) in Express applications.
- **dotenv:** A module that loads environment variables from a `.env` file into `process.env`.
- **express:** A fast and minimalist web framework for Node.js.
- **jsonwebtoken:** A library for generating and verifying JSON Web Tokens (JWT) for authentication.
- **mongoose:** An ODM (Object-Document Mapper) for MongoDB, providing schema-based modeling.
- **socket.io:** A real-time bidirectional communication library for web applications.

### Frontend

- **axios:** A promise-based HTTP client for making API requests in JavaScript.
- **lucide-react:** A set of beautifully crafted, open-source React icons.
- **react:** A JavaScript library for building interactive user interfaces.
- **react-dom:** Provides DOM-specific methods for rendering React components.
- **react-hot-toast:** A lightweight notification library for React.
- **react-router-dom:** A library for handling client-side routing in React applications.
- **socket.io-client:** The client-side library for real-time communication with a Socket.io server.
- **tailwindcss:** A utility-first CSS framework for creating responsive and modern designs.
- **zustand:** A lightweight state management library for React.

## Installation

To install and run this project on your local machine, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repository
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a .env file in the root directory and add your YouTube API key:**

```js
MONGODB_URI=...
PORT=5001
JWT_SECRET=...

CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

5. **Start the application in development mode:**

   ```bash
   npm start
   This will open the application in your browser at http://localhost:5173.
   ```

## Project Structure

- **`backend/`**: Main folder for the server-side code.

  - **`src/`**: Contains the source code for the backend.
    - **`controllers/`**: Handles the logic for incoming requests and responses.
      - **`auth.controller.js`**: Manages authentication-related requests (login, registration, etc.).
      - **`message.controller.js`**: Handles message-related logic (sending, receiving, etc.).
    - **`lib/`**: Contains utility functions and third-party integrations.
      - **`cloudinary.js`**: Manages integration with Cloudinary for media storage.
      - **`db.js`**: Database connection setup and utility functions.
      - **`socket.js`**: Configures and manages WebSocket connections for real-time communication.
      - **`utils.js`**: Contains general utility functions used across the app.
    - **`middleware/`**: Houses middleware functions for handling requests.
      - **`auth.middleware.js`**: Middleware that ensures requests are authenticated.
    - **`models/`**: Defines the data models for MongoDB.
      - **`message.model.js`**: Schema for the Message model in the database.
      - **`user.model.js`**: Schema for the User model in the database.
    - **`routes/`**: Defines the application routes.
      - **`auth.route.js`**: Handles routing for authentication-related endpoints.
      - **`message.route.js`**: Handles routing for message-related endpoints.
    - **`seeds/`**: Database seed files for populating initial data.
      - **`user.seed.js`**: Seeds the database with initial user data.
    - **`index.js`**: Entry point for the server, where the app is initialized and the server is started.

- **`frontend/`**: Main folder for the client-side code.
  - **`public/`**: Contains static files that are publicly accessible.
  - **`src/`**: Contains the source code for the frontend.
    - **`assets/`**: Static assets (images, icons, etc.).
    - **`components/`**: Reusable UI components.
      - **`skeletons/`**: Placeholder components for loading states.
        - **`MessageSkeleton.jsx`**: Skeleton loader for the message component.
        - **`SidebarSkeleton.jsx`**: Skeleton loader for the sidebar component.
      - **`AuthImagePattern.jsx`**: Component for rendering authentication-related image patterns.
      - **`ChatContainer.jsx`**: Main container component for the chat application.
      - **`ChatHeader.jsx`**: Component for the chat header, including title and controls.
      - **`MessagesInput.jsx`**: Component for the input field to send messages.
      - **`Navbar.jsx`**: Component for the navigation bar.
      - **`NoChatSelected.jsx`**: Placeholder component when no chat is selected.
      - **`Sidebar.jsx`**: Component for the sidebar with contacts and other options.
    - **`constants/`**: Contains constant values and configurations.
      - **`index.js`**: List of themes for daisyui.
    - **`lib/`**: Utility functions and libraries.
      - **`axios.js`**: Custom Axios instance for API requests.
      - **`utils.js`**: Contains utility functions like `formatMessageTime`.
    - **`pages/`**: React pages corresponding to different routes.
      - **`HomePage.jsx`**: Main page for the application, showing the chat interface.
      - **`LoginPage.jsx`**: Page for user login.
      - **`ProfilePage.jsx`**: Page for displaying and editing user profile.
      - **`SettingsPage.jsx`**: Page for changing app settings.
      - **`SignupPage.jsx`**: Page for user signup.
    - **`store/`**: State management with custom hooks.
      - **`useAuthStore.js`**: Custom hook for managing authentication state.
      - **`useChatStore.js`**: Custom hook for managing chat state.
      - **`useThemeStore.js`**: Custom hook for managing theme state.
    - **`App.jsx`**: The main app component that renders the entire application.
    - **`main.jsx`**: The entry point for the React application, where the app is rendered to the DOM.
  - **`index.html/`**: The main HTML file that includes all static assets and the React app.
  - **`vite.config.js/`**: Vite configuration file, where Tailwind CSS and other build settings are defined.

## Usage

Welcome to the real-time chat application! This app allows you to stay connected with your pals, send messages, and customize the look and feel of your interface. Follow these steps to get started:

### 1. Authentication

To start using the app, you need to either **log in** or **sign up**. Authentication is handled through **JWT** (JSON Web Token), ensuring your sessions are secure.

#### Register

- Go to the **Signup Page**.
- Provide your credentials (username, email, and password).
- Once registered, you'll automatically be logged in.
  ![Signup](public/2.png)

#### Login

- Go to the **Login Page**.
- Enter your username and password to access your account.
  ![Login](public/1.png)

### 2. Sending Messages

Once logged in, you can start chatting with your pals:

- Select a contact or group from the **Sidebar**.
- Use the **Messages Input** area to type and send messages.
  ![online](public/8.png)
  ![online](public/10.png)

### 3. Profile Settings

You can update your profile as follows:

- Go to the **Profile Page** to change your **profile picture**.
- Select a new photo from your device to upload.
  ![online](public/6.png)

### 4. Customize the Aesthetic

The app allows you to choose from **32 different themes** for a personalized experience:

- Go to the **Settings Page**.
- Pick your preferred theme from the 32 available options.
- Check how your chat will look with the preview.

![32](public/3.png)
![preview](public/4.png)

### 5. Filtering Users

Want to see who's online?

- Enable the **online user filter** in the **Settings Page** to only display contacts that are currently online.

![online](public/9.png)

### 6. Navigation

- Use the **Navbar** to navigate between pages like **Home**, **Profile**, and **Settings**.
- If you don’t have any chats selected, the **NoChatSelected** component will be shown as a placeholder.
  ![online](public/8.png)

### 7. Real-Time Chat

- All messages are sent and received in real-time using **Socket.IO**.
- When a new message is sent, you'll see it instantly in the chat container.

![online](public/10.png)

Enjoy chatting with your pals and exploring the app's customization options!

## ToDo

- [x] Add readme.
- [x] Add all themes.
- [ ] Add Search bar.
- [ ] Add group chats.
- [ ] Add user aggregation.
- [ ] Add audio messages.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your changes:**

   ```bash
   git checkout -b your-branch-name
   ```

3. **Make your changes and commit:**

   ```bash
   git commit -am 'Add some feature'
   ```

4. **Push your changes to the remote repository:**

   ```bash
   git push origin your-branch-name
   ```

5. **Create a pull request on GitHub.**

<!-- ## License
This project is licensed under the MIT License. See the LICENSE file for details. -->

## Links

- [GitHub Repository](https://github.com/AlvaroSapata/PocketPal)
- [Live Application](https://pocketpal-tu9l.onrender.com)

## Contact

For any inquiries, please contact [alvaromfdv@gmail.com](mailto:alvaromfdv@gmail.com).

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [react-router-dom](https://reactrouter.com/home)
- [react-hot-toast](https://react-hot-toast.com/)
- [lucide-react](https://lucide.dev/guide/packages/lucide-react)
- [zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)
- [tailwindcss](https://tailwindcss.com/docs/installation/using-vite)
- [daisyui](https://v5.daisyui.com/docs/v5-beta/)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)
- [cloudinary](https://cloudinary.com/documentation)
- [cookie-parser](https://github.com/expressjs/cookie-parser#readme)
- [express](https://expressjs.com/es/)
- [mongoose](https://mongoosejs.com/docs/guide.html)
- [socket.io](https://socket.io/docs/v4/tutorial/introduction)
- [axios](https://axios-http.com/docs/intro)
- [cors](https://expressjs.com/en/resources/middleware/cors.html#installation)
