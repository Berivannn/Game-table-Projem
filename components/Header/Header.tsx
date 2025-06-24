"use client";

import { JSX, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, X } from "lucide-react";


export default function Header(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-20 py-4 z-50 bg-transparent">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src="/logo.png" alt="GameTable Logo" width={120} height={40} className="cursor-pointer" />
        </Link>
  <div className="flex items-center space-x-2">
  <button className="bg-pink-100 text-black font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-pink-200">
    BAYİ OL
  </button>
  <button className="bg-pink-100 text-black font-semibold text-xs sm:text-sm md:text-base px-2 py-1 sm:px-3 sm:py-2 rounded-full hover:bg-pink-200">
    CREATOR OL
  </button>
</div>
      </div>

      <ul className="hidden md:flex ml-[30%] space-x-6 text-black text-sm font-bold">
        {pathname !== "/About" && <li><Link href="/About">HAKKIMIZDA</Link></li>}
        <li><Link href="/Game">OYUNLAR</Link></li>
        <li><Link href="/bayi">SIRALAMA</Link></li>
        <li><Link href="/locations">NERDE VAR?</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
      </ul>

      <div className="flex items-center">
        <a href="https://www.instagram.com/yaskagroup/" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-black hover:text-gray-600 mr-4" />
        </a>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center text-white text-lg z-50">
          <button className="absolute top-5 right-5" onClick={() => setMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          {pathname !== "/About" && (
            <Link href="/About" onClick={() => setMenuOpen(false)}>HAKKIMIZDA</Link>
          )}
          <Link href="/Game" onClick={() => setMenuOpen(false)}>OYUNLAR</Link>
          <Link href="/bayi" onClick={() => setMenuOpen(false)}>SIRALAMA</Link>
          <Link href="/locations" onClick={() => setMenuOpen(false)}>NERDE VAR?</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        </div>
      )}
    </nav>
  );
}
