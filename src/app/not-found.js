import Link from "next/link"

const notFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="text-2xl mb-6">
        <span className="text-red-500 font-bold">404 </span> | Page not found
      </div>
      <Link href={"/"}>Go back to homepage</Link>
    </div>
  )
}

export default notFound
