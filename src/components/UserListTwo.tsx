

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserListTwo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-store', 
  });

  const users: User[] = await response.json();

  return (
    <div>
      <h2>User List two</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListTwo;
