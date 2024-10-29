import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Widget5 = ({ data }) => {
  // TABLEAU DES MOIS DE L'ANNÉE
  const month = ["jan", "fév", "mar", "avr", "mai", "jui", "juil", "aout", "sep", "oct", "nov", "déc"];

  // CONVERTIR LES DONNÉES EN FORMAT COMPATIBLE CHART
  const chartData = data && data.length > 0 && data.map((row) => ({
    label: `${month[row.date.split("-")[1] - 1]}`,
    total: row.total,
  }));

  return (
    <article className='widget5'>
      <h1>Statistiques Annuelles</h1>
      <section className='chart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="label" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </article>
  );
};

export default Widget5;
