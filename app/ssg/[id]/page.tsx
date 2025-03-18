import { NextPage } from 'next'

export async function generateStaticParams() {
 // サンプルデータを返す (実際はAPIなどからデータを取得)
 const items = [
  { id: 1, title: 'First Item' },
  { id: 2, title: 'Second Item' },
  { id: 3, title: 'Third Item' }
 ]

 return items.map(item => ({
  params: {
   id: item.id.toString()
  }
 }))
}

interface PageProps {
 params: {
  id: string
  title: string
 }
}

export const dynamicParams = false;

const SSGPage: NextPage<PageProps> = ({ params }) => {
 return (
  <div>
   <h1>ID: {params.id}</h1>
  </div>
 )
}

export default SSGPage
