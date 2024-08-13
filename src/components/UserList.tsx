// src/components/UserList.tsx
import React, { useEffect, useState } from 'react';
import UserItem from './UserItem'; // Certifique-se de que o caminho está correto

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Endpoint fictício para obter os dados dos usuários
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>; {/* Mensagem em português */}
  }

  if (error) {
    return <div className="error">Erro: {error}</div>; {/* Mensagem em português */}
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserItem key={user.id} name={user.name} email={user.email} />
      ))}
    </div>
  );
};

export default UserList;
