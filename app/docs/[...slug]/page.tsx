import React from 'react'

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params
  if (slug.length > 1) {
    return <div>Docs slug: {slug[slug.length - 1]}</div>
  } else {
    return <div>Docs slug</div>
  }
}

export default Docs
