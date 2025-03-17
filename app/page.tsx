
import ClientComponent from './ClientComponent'; // Import the client component

// Function to fetch data from an external API
async function getData() {
  const res = await fetch('https://httpbin.org/ip'); // Fetch request to the IP endpoint of httpbin.org
  if (!res.ok) {
    throw new Error('Failed to fetch data'); // Throw an error if the response is not okay
  }
  const data: { origin: string } = await res.json(); // Parse the JSON response
  console.log(data.origin); // Log the fetched IP address
  return data.origin; // Return the fetched IP address
}

// Main component to render server-side data and client component
export default async function Home() {
  const initialData = await getData(); // Fetch data when the page is loaded

  // Server action to create something (console log for demonstration)
  async function create() {
    'use server'
    console.log("server component create!!!") // Log a message indicating server-side creation
  }

  return (
    <div>
      <h1></h1> {/* Placeholder for the title */}
      <div onClick={create}>
        Hello, this is a server-side component! Data fetched: {JSON.stringify(initialData)}
      </div> {/* Div element that triggers the create function on click */}
      <ClientComponent data={initialData} /> {/* Render the client component and pass data to it */}
    </div>
  );
}
