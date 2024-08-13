// src/components/UserItem.tsx
import React from 'react';

interface UserItemProps {
  name: string;
  email: string;
}

const UserItem: React.FC<UserItemProps> = ({ name, email }) => {
  return (
    <div className="user-item">
      <h3>{name}</h3>
      <p>Email: {email}</p> {/* Prefixo em português */}
    </div>
  );
};

export default UserItem;
