import Link from "next/link";

export default function NavBar() {
    return (
        <div className="navbar bg-neutral text-neutral-content rounded-lg sticky top-0">
            <Link href='/'>
                <button className="btn btn-ghost">Home</button>
            </Link>
            <Link href='/Portofolio'>
                <button className="btn btn-ghost">Portofolio</button>
            </Link>
        </div>
    )
}