import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState()


  useEffect(()=>{
   const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response) {
         return('Failed to fetch users');
        }
        
        const data = await response.json();
        console.log("----------", data)
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } 
    };

    fetchUsers();
  },[])

  console.log(error)

  return (
    <>
      <div style={styles.container}>
      <h2 style={styles.header}>User List</h2>
      <ul style={styles.list}>
        {users.map(user => (
          <li key={user.id} style={styles.listItem}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  header: {
    color: '#333',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  listItem: {
    padding: '10px 15px',
    margin: '5px 0',
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f0f0f0'
    }
  }
};