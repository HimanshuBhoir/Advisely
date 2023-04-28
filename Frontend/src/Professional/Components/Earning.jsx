import React from 'react'
import { PieChart, Pie,BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

function Earning() {
  const data01 = [
    { name: 'Maximizing Your Legal Strategy: Insights and Advice from Sankalp', value: 2 },
    { name: 'Achieve Your Fitness Goals with Expert Guidance from Sankalp Patil', value: 1 },
  ];
  const data02 = [
    { name: 'Maximizing Your Legal Strategy: Insights and Advice from Sankalp', value: 400 },
    { name: 'Achieve Your Fitness Goals with Expert Guidance from Sankalp Patil', value: 200 },
    { name: 'Achieve Your Fitness Goals with Expert Guidance from Sankalp Patil', value: 0 },
  ];

  return (
    <div style={{display:'flex'}}>
      <div>
        <h2>Booking-Payment Stats</h2>
        <PieChart width={300} height={300}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label/>
           <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </div>
      {/* <div>
        <br />
        <h2>Previous Earnings: {1*200}</h2>
        <br />
        <h2>Estimated Earnings: {2*200}</h2>
        <br />
        <h2>Pure Earnings: {3*200}</h2>
      </div> */}
    </div>
  )
}

export default Earning
