import Link from "next/link";

export default function Item() {
    return (
        <ul>
            <h1 className="mb-1 font-semibold">
                Title of Navbar
            </h1>
            <ul>
                <li>
                    <Link href="/">items</Link>
                </li>
                <li>
                    <Link href="/">items</Link>
                </li>
                <li>
                    <Link href="/">items</Link>
                </li>
                <li>
                    <Link href="/">items</Link>
                </li>
            </ul>
        </ul>
    )
}