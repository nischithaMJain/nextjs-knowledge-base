'use client'

import { usePathname } from 'next/navigation'
const NotFound = () => {
  const pathName = usePathname()
  const productId = pathName.split('/')[2]
  return (
    <div>
      <h2>Product Id {productId} not found</h2>
    </div>
  )
}

export default NotFound
