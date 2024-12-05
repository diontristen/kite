import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const isOnAndroid = () => {
  return /Android/i.test(window.navigator.userAgent)
}



const Home = () => <h1>Home Page</h1>;

const Test = () => {
  const forwardTo = 'https://app.smallbank.site/client/5229/documents/newsletters?id=56182&name=Email%2Bnotification%2Btest&ft=pdf&redirect=true'
  // Check if the app is installed on iOS
  const [name, setName] = useState('');
  const onClick = () => {
    window.location.href = `com.performativ.${name}://?forwardTo=${forwardTo}`;
  }

  useEffect(() => {
    let tenantName = 'smallbank'
    const androidDevice = isOnAndroid()
    if (tenantName === 'smallbank' && androidDevice) {
      tenantName = tenantName + 'app'
    }

    setName(tenantName)
    // window.location.href =  "com.performativ.smallbank";
    // setTimeout(() => {
    //   // Redirect to the App Store or stay on the webpage
    //   window.location.href = '/'
    // }, 500);
  }, [])
  return (
    <div>
      <h1>Welcome to the Fallback Page</h1>
      <p>If your app is installed, it should open automatically. If not, you are seeing this fallback page.</p>
      <p>Here is your tenant name: {name}</p>
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
