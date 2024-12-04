import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <h1>Home Page</h1>;

const Test = () => {
  // Check if the app is installed on iOS
  const onClick = () => {
    window.location.href = "com.performativ.smallbank://test";
  }

  useEffect(() => {
    window.location.href =  "com.performativ.smallbank://test";
    setTimeout(() => {
      // Redirect to the App Store or stay on the webpage
      window.location.href = '/';
    }, 2000);
  }, [])
  return (
    <div>
      <h1>Welcome to the Fallback Page</h1>
      <p>If your app is installed, it should open automatically. If not, you are seeing this fallback page.</p>
      <a onClick={onClick}  target="_blank" rel="noopener noreferrer">
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
