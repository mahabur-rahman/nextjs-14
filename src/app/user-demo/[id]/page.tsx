// app/user-demo/[id]/page.tsx

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  }
  
  const UserDemoDetails = async ({ params }: { params: { id: string } }) => {
    // Fetch user details based on the dynamic ID from the route
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`, {
      cache: 'no-store', // Ensures fresh data for each request
    });
  
    // Handle errors in case the user is not found
    if (!response.ok) {
      return (
        <div>
          <h2>User not found</h2>
        </div>
      );
    }
  
    const user: User = await response.json();
  
    return (
      <div>
        <h2>User Demo Details (ID: {user.id})</h2>
        <h4>Fetched User Details:</h4>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
      </div>
    );
  };
  
  export default UserDemoDetails;
  