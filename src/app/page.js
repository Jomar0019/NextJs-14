"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  
  const prodNavigate = () => {
    router.push('products')
  }

  const accNavigate = () => {
    router.push('account')
  }

  return (
    <div className="flex items-center justify-center flex-col w-full h-screen">
      <h1 className="text-2xl mb-3">NextJs 14hours lesson</h1>
      <Link href={"products"} className="border border-black bg-black text-white px-4 py-2 rounded mb-2">Product Page</Link>
      <Link href={"account"} className="border border-black px-4 py-2 rounded mb-2">Account Page</Link>

      <h2 className="text-xl my-3">Alternative way of navigating using <span className="font-bold">useRouter</span></h2>
      <button onClick={prodNavigate} className="border border-black bg-black text-white px-4 py-2 rounded mb-2">Product Page</button>
      <button onClick={accNavigate} className="border border-black px-4 py-2 rounded">Account Page</button>
    </div>
  );
}
