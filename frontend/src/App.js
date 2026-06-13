import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMessage = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError("Could not connect to the backend. Is Flask running?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello Full Stack 👋</h1>
      <p style={styles.subtitle}>Click the button to call the Flask backend</p>

      <button style={styles.button} onClick={fetchMessage}>
        {loading ? "Loading..." : "Call Flask API"}
      </button>

      {message && (
        <div style={styles.successBox}>
          <p style={styles.messageText}>{message}</p>
        </div>
      )}

      {error && (
        <div style={styles.errorBox}>
          <p style={styles.errorText}>{error}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f4f8",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    color: "#1a1a2e",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "2rem",
  },
  button: {
    padding: "12px 28px",
    fontSize: "1rem",
    backgroundColor: "#1B4F8A",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginBottom: "2rem",
  },
  successBox: {
    backgroundColor: "#e1f5ee",
    border: "1px solid #1D9E75",
    borderRadius: "8px",
    padding: "16px 24px",
    maxWidth: "400px",
    textAlign: "center",
  },
  messageText: {
    color: "#0F6E56",
    fontSize: "1.1rem",
    margin: 0,
  },
  errorBox: {
    backgroundColor: "#faece7",
    border: "1px solid #D85A30",
    borderRadius: "8px",
    padding: "16px 24px",
    maxWidth: "400px",
    textAlign: "center",
  },
  errorText: {
    color: "#993C1D",
    fontSize: "1rem",
    margin: 0,
  },
};

export default App;