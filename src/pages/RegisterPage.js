import { useState } from "react"

export default function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function register(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:3005/register', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'}
    });
    if(response.status === 200) {
      alert('registration successful')
    } else {
      alert('registration failed')
    }
  }

  // a

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input type="text"
          placeholder="username"
          value={username}
          onChange={event => setUsername(event.target.value)}/>
      <input type="password"
          placeholder="password"
          value={password}
          onChange={event => setPassword(event.target.value)}/>
      <button>Register</button>
    </form>
  )
}