import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar-start bg-base-100 shadow-sm mb-10 font-playfair">
      <Link href="/" className="btn btn-ghost text-xl">
        Nos carnets de voyage ✈️
      </Link>
    </div>
  );
}
