import { notFound } from 'next/navigation'

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const productId = (await params).id
  if (Number(productId) > 10) {
    notFound()
  }
  return <div>Product ID: {productId}</div>
}
