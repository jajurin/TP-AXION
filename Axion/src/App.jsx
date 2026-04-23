import { useEffect, useState } from "react"
import api from "./componentes/api"

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.get('/user')
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log("Error sos, lel no pudimos cargar usuarios", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>cartera, cof cof, cargando</p>
  }

  return (
    <div>
      <h2>Usuarios de la api</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App