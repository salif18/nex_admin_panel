import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Widget4 = ({ data }) => {
  // TABLEAU DES JOURS DE LA SEMAINE
  const weekday = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

  // CONVERTIR LES DONNÉES EN FORMAT COMPATIBLE CHART
  const chartData = data && data.length > 0 && data.map((row) => ({
    label: `${weekday[row.day - 1]}`,
    total: row.total,
  }));

  return (
    <article className='widget4'>
      <h1>Statistiques Hebdomadaires</h1>
      <section className='chart-container'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={25} margin={{ top: 20, right: 10, left: 2, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" name="Total" fill="#b3108add" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </article>
  );
}

export default Widget4;
