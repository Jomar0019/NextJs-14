"use client"

import { usePathname, useSearchParams } from "next/navigation"

const cart = () => {

    const path = usePathname();
    const searchParams = useSearchParams();

    console.log(path)
    console.log(searchParams.get('search'), searchParams.get('random'))

  return (
    <div>
      <h1>This is Cart Component</h1>
    </div>
  )
}

export default cart
