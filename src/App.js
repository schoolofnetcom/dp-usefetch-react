import React, { useEffect, useState } from 'react';
import useFetch from 'use-http';

const App = () => {
  const [users, setUsers] = useState([]);
  const { get, response, loading, error } = useFetch('https://jsonplaceholder.typicode.com', {}, []);

  useEffect(async () => {
    const users = await get('/users');
    if (response.ok) {
      setUsers(users);
    }
  }, []);

  return(
    <div>
      {error && 'Error happing..'}
      {loading && 'Request is loading..'}
      {users.map(el => (
        <li key={el.id}>{el.name}</li>
      ))}
    </div>
  );

  // const { loading, error, data = [] } = useFetch('https://jsonplaceholder.typicode.com/users', {}, []);
  // return(
  //   <div>
  //     {data.map(el => (
  //       <li key={el.id}>{el.name}</li>
  //     ))}
  //   </div>
  // );
};
export default App;
