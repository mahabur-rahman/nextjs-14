export async function GET() {
    return new Response(
      JSON.stringify({ name: "dashboard" }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
  