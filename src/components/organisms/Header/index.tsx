'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/layout/Container';

// Simplified nav links for the template
const navLinks = [
  { href: '/', label: 'Accueil', exact: true },
  // Add more generic links later if needed (e.g., /about, /contact)
];

export const Header = () => {
  const pathname = usePathname();

  const isActive = (link: typeof navLinks[0]): boolean => {
    if (link.exact) return pathname === link.href;
    return false; // Only exact match for now
  };

  const renderNavItems = (isMobile: boolean) => {
    return navLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className={isActive(link) ? 'active' : ''}>
            {link.label}
          </Link>
        </li>
      ));
  };

  return (
    <header className="bg-base-100 border-b border-base-300">
      <Container>
        <nav className="navbar">
          <div className="navbar-start">
            <Link href="/" className="btn btn-ghost normal-case text-xl font-bold text-primary">
              Avel Heol
            </Link>
          </div>
          
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/kits" className="text-base-content">Nos Kits</Link></li>
              <li><Link href="/a-propos" className="text-base-content">À propos</Link></li>
            </ul>
          </div>
          
          <div className="navbar-end">
            <Link href="/contact" className="btn btn-primary">
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile menu */}
          <div className="navbar-end lg:hidden">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/kits">Nos Kits</Link></li>
                <li><Link href="/a-propos">À propos</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
