
import { User } from "@/interface/interface";

interface UserDetailsProps {
  params: {
    id: string;
  };
}

export default async function UserDetails({ params }: UserDetailsProps) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user: User = await res.json();

  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
    </div>
  );
}
