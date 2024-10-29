"use client"
import React from 'react'
import Widget1 from './ui/Widget1';
import Widget2 from './ui/Widget2';
import Widget3 from './ui/Widget3';
import Widget4 from './ui/Widget4';
import Widget5 from './ui/Widget5';
import Widget from './ui/Widget';
import Widget6 from './ui/Widget6';
import Widget7 from './ui/Widget7';
import Widget8 from './ui/Widget8';
import Widget9 from './ui/Widget9';


export default function Home() {

  const statsYear = [
    {
      date: "2024-1-17",
      total: "7589"
    },
    {
      date: "2024-2-17",
      total: "52898"
    },
    {
      date: "2024-3-17",
      total: "26898"
    },
    {
      date: "2024-4-17",
      total: "42898"
    },
    {
      date: "2024-5-17",
      total: "98981"
    },
    {
      date: "2024-6-17",
      total: "105898"
    },
    {
      date: "2024-7-17",
      total: "58928"
    },
    {
      date: "2024-8-17",
      total: "58998"
    },
    {
      date: "2024-9-17",
      total: "98981"
    },
    {
      date: "2024-10-17",
      total: "105898"
    },
    {
      date: "2024-11-17",
      total: "58928"
    },
    {
      date: "2024-12-17",
      total: "58998"
    },

  ]

  const statsweek = [
    {
      day: "1",
      total: "68728"
    },
    {
      day: "2",
      total: "28728"
    },
    {
      day: "3",
      total: "25898"
    },
    {
      day: "4",
      total: "84729"
    },
    {
      day: "5",
      total: "58998"
    },
    {
      day: "6",
      total: "64728"
    },
    {
      day: "7",
      total: "24728"
    },

  ]

  return (
    <main className="home">
      <section className='section-header'>
        <h2>Resumé général</h2>
      </section>
      <section className='first-row'>
        <Widget4 data={statsweek} />
        <section className='row'>
          <section className='column'>
            <Widget />
            <Widget1 />
            <Widget8/>
          </section>
          <section className='column'>
            <Widget2 />
            <Widget3 />
            <Widget9/>
          </section>
        </section>
      </section>
      <section className='column'>
       
       
      </section>
      <section className='three-row'>
        <section className='row'>
          <Widget6 />
          <Widget7 />
        </section>
        <Widget5 data={statsYear} />
      </section>
    </main>
  );
}
