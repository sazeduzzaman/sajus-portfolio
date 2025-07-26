
export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
 
  return <div className="">{slug}</div>;
  
}
