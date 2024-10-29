"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import MopedRoundedIcon from '@mui/icons-material/MopedRounded';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Sidebar = () => {
  const pathname = usePathname();

  const navlinks = [
    { name: "Dashboard", href: "/", icon: AppsIcon },
    { name: "Entrepôt", href: "/articles", icon: AccountBalanceIcon },
    { name: "Categories", href: "/dashboard/categories", icon: CategoryIcon },
    { name: "Marques", href: "/dashboard/marques", icon: BookmarksIcon },
    { name: "Commandes", href: "/dashboard/commandes", icon: ShoppingBagRoundedIcon },
    { name: "Livreurs", href: "/dashboard/livreurs", icon: MopedRoundedIcon },
  ];

  const [elargirSidebar , setElargirSideBar] = useState(false);

  const handleRetired=()=>{
       setElargirSideBar(!elargirSidebar);
  }

  return (
    <aside className={`${elargirSidebar ? "reduit" : "sidebar"}`}>
      <nav className="nav-bar">
        <ul className="nav-bar-ul">
        <section className='side-header'>
          <h1 className='entete'>Pannel</h1>
          <button className='btn-toggle' onClick={handleRetired}>
           {
            elargirSidebar ?
            <ArrowForwardIosIcon className="icon" />      
            :
            <ArrowBackIosNewIcon className="icon" />
           }
           </button>
        </section> 
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
