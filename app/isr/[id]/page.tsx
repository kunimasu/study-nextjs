import { Metadata } from "next"

interface Post {
  id: string
  title: string
  content: string
}
 
export const revalidate = 60;

export async function generateStaticParams() {
  console.log("/isr/[id] START generateStaticParams")
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  console.log("/isr/[id] END generateStaticParams")
  return posts.map((post) => ({
    id: String(post.id),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  return {
    title: `id: ${id}`
  };
}
 
export default async function IsrPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then(
    (res) => res.json()
  )
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
