import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DataDisplay from "./components/DataDisplay";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    try {
      axios
        .post(`http://localhost:5050/protected`, {
          token: localStorage.getItem("token"),
        })
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.message);
            setIsLogged(true);
            setCurrentUser(res.data.data.email);
          } else {
            console.log("Token expired!");
          }
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const result = await axios.post(`http://localhost:5050/login`, {
        email,
        password,
      });
      setPassword("");
      if (result.data.success) {
        setCurrentUser(result.data.data.email);
        setIsLogged(true);
        localStorage.setItem("token", result.data.token);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      const result = await axios.post(`http://localhost:5050/register`, {
        email,
        password,
      });

      alert(result.data.message);
      setIsLogged(false);
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  function logout() {
    setIsLogged(false);
    localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {!isLogged && (
          <>
            <p>Login page</p>
            <form>
              <input
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleRegister}>Register</button>
            </form>
          </>
        )}

        {isLogged && (
          <>
            <div>Logged in as: {currentUser}!</div>
            <button onClick={logout}>Log out</button>
          </>
        )}
        <hr />
        <div></div>
        {isLogged && <DataDisplay />}
        {!isLogged && (
          <div>
            <h3>UnProtected data:</h3>
            <p>Public information</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
