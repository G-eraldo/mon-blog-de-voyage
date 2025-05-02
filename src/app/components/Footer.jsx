import Link from "next/link";

export default function footer() {
  return (
    <footer className="bg-amber-50 text-center p-7 flex flex-row justify-center gap-8 text-black">
      <Link href="/mentions-legales">© Geraldo</Link>
      <p>-</p>
      <Link href="/contact">Nous contacter</Link>
    </footer>
  );
}
