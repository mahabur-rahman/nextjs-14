import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>hello world..</h2>
      <Link href="/about" className="px-1 bg-slate-400">
        About page
      </Link>
      <Link href="/products" className="px-1 bg-orange-400">
        Products page
      </Link>
    </>
  );
}
