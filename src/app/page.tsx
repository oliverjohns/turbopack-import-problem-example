import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>main page</div>
      <Link href={'testpage'}>To test page</Link>
    </main>
  );
}
