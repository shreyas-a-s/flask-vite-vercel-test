import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/messages/hello")  // Automatically proxied to Flask API
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Flask + Vite React</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
