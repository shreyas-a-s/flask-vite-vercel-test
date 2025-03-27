import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function MessageFetcher() {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(location.pathname)  // Automatically matches the API route
      .then(response => response.json())
      .then(data => setMessage(data.message || data)) // Handle both JSON and plain text
      .catch(error => setMessage("Error fetching data"));
  }, [location.pathname]);  // Re-fetch data when the route changes

  return (
    <div>
      <h1>Flask + Vite React</h1>
      <p>{message}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/api/hello" element={<MessageFetcher />} />
        <Route path="/api/about" element={<MessageFetcher />} />
      </Routes>
    </Router>
  );
}

export default App;
