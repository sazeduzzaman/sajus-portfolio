export default function Page({ params }: { params: { slug: string } }) {
  return <h1 className="text-2xl font-bold">{params.slug}</h1>;
}
