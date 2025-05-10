'use client';

import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag, User2, X } from "lucide-react";
import { BrandIcon } from '../Icons/KarmaIcons';

export default function HeaderContens() {
	const pathname = usePathname();
    const cicing = pathname === "/product-collections/all";
	const awas = pathname.startsWith("/nisaetus-brainrot/");
	const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 50 && !isScrolled) {
				setIsScrolled(true);
			} else if (scrollY <= 50 && isScrolled) {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolled]);

  return (
    <header className={`top-0 z-[5] bg-white dark:bg-stone-950 ${cicing ? 'relative' : 'sticky'} ${awas ? 'hidden' : 'block'}`}>
        <div className="flex items-center justify-between px-5 sm:px-20 py-3 border-b border-black/20">
            {/* KONTEN HEADER */}

            {/* KIRI */}
            <div className="flex items-center gap-5">
                <div className="text-sm gap-4">
                    <Menu className="icon w-6 h-6" 
                    />
                </div>
            </div>

            {/* TENGAH */}
            <div className="absolute left-28 sm:left-1/2 transform -translate-x-1/2">
                <Link
                    href={'/'}
                    aria-label="Home"
                >
                    <BrandIcon isScrolled={isScrolled} />
                </Link>
            </div>

            {/* KANAN */}
            <div className="flex items-center gap-4">
                <Search className={'icon'}  />
                <div className={'relative'}>
                    <ShoppingBag className={'icon'} 
                    />
                </div>
                <User2 className={'icon'}  
                />
            </div>
        </div>
    </header>
  );
}