import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;

const Test = () => {
  // Check if the app is installed on iOS
  return (
    <div>
      <h1>Welcome to the Fallback Page</h1>
      <p>If your app is installed, it should open automatically. If not, you are seeing this fallback page.</p>
      <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
        Download the App
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
