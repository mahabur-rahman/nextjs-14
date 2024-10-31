import { User } from "@/interface/interface";
import Link from "next/link";

export default async function UserList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const users: User[] = await res.json();

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-8">User List</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email} -{" "}
            <Link
              href={`/user-list/${user.id}`}
              className="font-bold"
            >
              User - {user.id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
