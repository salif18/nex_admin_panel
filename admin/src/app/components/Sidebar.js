"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import MopedRoundedIcon from '@mui/icons-material/MopedRounded';

const Sidebar = () => {
  const pathname = usePathname();

  const navlinks = [
    { name: "Home", href: "/", icon: AppsIcon },
    { name: "Entrepôt", href: "/articles", icon: AccountBalanceIcon },
    { name: "Categories", href: "/dashboard/categories", icon: CategoryIcon },
    { name: "Commandes", href: "/dashboard/commandes", icon: ShoppingBagRoundedIcon },
    { name: "Livreurs", href: "/dashboard/livreurs", icon: MopedRoundedIcon },
  ];

  return (
    <aside className='sidebar'>
      <nav className="nav-bar">
        <ul className="nav-bar-ul">
         <h1 className='entete'>Tableau de bord</h1>
          {
            navlinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <li key={link.name} className="ul-link">
                  <Link className={isActive ? "active-link" : "a"} href={link.href}>
                    <div className="link-content">
                      <link.icon className='icon' />
                      <span>{link.name}</span>
                    </div>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
