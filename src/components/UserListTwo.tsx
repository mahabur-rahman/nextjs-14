import Link from "next/link";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserListTwo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  const users: User[] = await response.json();

  return (
    <div>
      <h2>User List two</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} - <br />
            <Link href={`/user-demo/${user.id}`} className="text-red-900">User {user.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListTwo;
