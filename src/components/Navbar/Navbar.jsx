'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="bg-rose-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-white text-4xl font-mono">
                                Ingeniosos
                            </h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center space-x-4">
                            <Link href="/" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Inicio
                            </Link>
                            <Link href="/nosotros" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Sobre Nosotros
                            </Link>
                            <Link href="/cursos" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Cursos
                            </Link>
                            <Link href="/consultorios" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Consultorios
                            </Link>
                            <Link href="/contacto" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                                Contactanos
                            </Link>
                        </div>
                    </div>
                    {/* MENU BUTTON RESPONSIVE HAMBURGER */}
                    <div className="md:hidden flex items-center">
                        <button className="inline-flex items-center justify-center rounded-md p-2 text-white md:text-white 
                        focus:online-nome focus:ring-2 focus:ring-insert focus:right-withe"
                            onClick={() => setNavbar(!navbar)}>
                            {navbar ? (
                                <svg className="h-6 w-6"
                                    xmls="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor" >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6"
                                    xmls="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor" >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST MENU HAMBURGER RESPONSIVE */}
            {navbar && (
                <div className="md:hidden">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <li className="text-slate-300 block text-center no-underline hover: text-slate-200">
                            <Link href="/" onClick={() => setNavbar(!navbar)}>
                                Inicio
                            </Link>
                        </li>
                        <li className="text-slate-300 block text-center no-underline hover: text-slate-200">
                            <Link href="/nosotros" onClick={() => setNavbar(!navbar)}>
                                Sobre Nosotros
                            </Link>
                        </li>
                        <li className="text-slate-300 block text-center no-underline hover: text-slate-200">
                            <Link href="/cursos" onClick={() => setNavbar(!navbar)}>
                                Cursos
                            </Link>
                        </li>
                        <li className="text-slate-300 block text-center no-underline hover: text-slate-200">
                            <Link href="/consultorios" onClick={() => setNavbar(!navbar)}>
                                Consultorios
                            </Link>
                        </li>
                        <li className="text-slate-300 block text-center no-underline hover: text-slate-200">
                            <Link href="/contacto" onClick={() => setNavbar(!navbar)}>
                                Contactanos
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}