"use client"
import React from "react";

const Header = () => {

  return (
    <header className="header">
      {/* SECTION TITRE DE LA PAGE */}
      <section className="section-title">
      <h2 className="title">Admin</h2>
        {/* <h1>La hadja</h1> */}
      </section>
      {/* SECTION NAVBAR LES LIENS DU SITES */}
      
        <figure className="figure-img">
          <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMyCxTguRJ7QS0QEil0PsUOHpsafBQh7jyZQ&s" alt=""  />
        </figure>
      
    </header>
  )
}
export default Header