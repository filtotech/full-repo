"use client";

import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { Menu, X, ChevronDown, Beaker, ShieldCheck, Stethoscope } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [open, setOpen] = useState(false);

    // Categories for your dropdown
    const productCategories = [
        { name: "Baby-LM", href: "/products/Baby-LM", icon: Beaker, desc: "Advanced medicinal formulations." },
        { name: "BCPlex-L", href: "/products/BCPlex-L", icon: ShieldCheck, desc: "Daily wellness and hygiene." },
        { name: "Miazen-F2", href: "/products/Miazen-F2", icon: Stethoscope, desc: "Precision testing equipment." },
    ];

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        // "Products" is handled separately below
        { name: "Research & Quality", href: "/research" },
		{name : 'Contact US', href: '/contact-us'},
        { name: "Careers", href: "/careers" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-slate-200 bg-white/80">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image src={'/bidhanlogo.png'} width={80} height={80} alt="Bidhan Pharmaceuticals Logo" className="transition-transform group-hover:scale-105 rounded-2xl" />
                        <div className="leading-tight">
                            <p className="text-lg font-bold text-slate-900">Bidhan Pharmaceuticals</p>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold">Science • Care • Trust</p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors rounded-full hover:bg-slate-50"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* --- PRODUCTS DROPDOWN --- */}
                        <div className="relative group px-4 py-2">
                            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                                Products
                                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                                <div className="w-80 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl ring-1 ring-black/5">
                                    <div className="grid gap-2">
                                        {productCategories.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="group/item flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-blue-50"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                                    <item.icon size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-4 border-t border-slate-100 pt-4">
                                        <Link href="/products" className="block text-center text-xs font-bold text-blue-600 hover:underline">
                                            View All Products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* --- END PRODUCTS DROPDOWN --- */}

                        <Link
                            href="/contact-us"
                            className="ml-6 inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all active:scale-95"
                        >
                            Get in Touch
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden p-2 text-slate-700"
                    >
                        {open ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu (simplified for brevity) */}
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-slate-200 bg-white overflow-hidden"
                    >
                        <div className="px-6 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} onClick={() => setOpen(false)} className="block text-lg font-medium text-slate-700">
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Our Products</p>
                                {productCategories.map((item) => (
                                    <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-600">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
