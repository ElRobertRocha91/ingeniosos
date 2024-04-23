import Link from "next/link";

export default function NotFound() {
    return (
        <section>
            <div>
                <h1>Error: 404</h1>
                <p>Pagina No encontrada</p>
                <Link href="/">Volver</Link>
            </div>
        </section>
    )
}