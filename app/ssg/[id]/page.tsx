export async function generateStaticParams() {
  // Sample data to return (in practice, this would be fetched from an API)
 const items = [
  { id: "1" },
  { id: "2" },
  { id: "3" }
  ];
 return items.map(item => ({
    id: item.id
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>
}

export const dynamicParams = false;

const SSGPage = async ({ params }: PageProps) => {
  const { id } = await params;
  return (<h1>ID: {id}</h1>);
};
export default SSGPage;
