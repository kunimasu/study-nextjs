import { Metadata } from "next"

interface Post {
  id: string
  title: string
  content: string
}

// Revalidate static pages every 60 seconds to ensure fresh data.
export const revalidate = 60;

export const dynamicParams = true;

// Generate the list of static paths based on the blog posts fetched from the API.
export async function generateStaticParams() {
  console.log("/isr/[id] START generateStaticParams");

  // Fetch the list of blog posts from the API.
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) => res.json());
  console.log("/isr/[id] END generateStaticParams");

  // Map each post to its corresponding id for generating static paths.
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

// Generate metadata for the ISR page based on the provided parameters.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `id: ${id}`, // Set the page title based on the post ID.
  };
}

// Define the ISR (Incremental Static Regeneration) page component.
export default async function IsrPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Fetch the specific blog post data based on the provided ID.
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then((res) => res.json());
  return (
    <main>
      <h1>{post.title}</h1> {/* Display the title of the blog post. */}
      <p>{post.content}</p> {/* Display the content of the blog post. */}
      <strong>{Math.random()}</strong>
    </main>
  );
}
