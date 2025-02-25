import { useState } from "react";

const SignUpForm = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
  const handleSubmit = async(event) => {
    event.preventDeafault();
    console.log("Hola");
    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
      const json = await response.json()
      console.log(json);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
  <>
  <h2>Sign Up!</h2>

  {error && <p>{error}</p>}
  <form onSubmit={handleSubmit}>
    <label>
      Username: <input value={username} onChange={(event) => setUsername(event.target.value)}/>
    </label>
    <label>
      Password: <input value={password} onChange={(event) => setPassword(event.target.value)}/>
    </label>
    <button>Submit</button>
  </form>
  </>
  )
}

export default SignUpForm;