import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Brush,
} from "recharts";

const Chart = ({ getActualMobility, getMobilityForecast }) => {
  const formatDate = (date) => {
    const dates = date?.split("T")[0];
    const [year, month, day] = dates?.split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='flex flex-col py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        VMT retail and recreation (Millions)
      </h1>
      <ResponsiveContainer width='100%' height={250}>
        <LineChart
          data={getActualMobility}
          margin={{ top: 10, right: 30, left: -30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='Date'
            tickFormatter={formatDate}
            interval='preserveStartEnd'
          />
          <YAxis />
          <Legend />
          <Line
            margin={{ bottom: 2500 }}
            type='monotone'
            name='Forecast Mobility'
            dataKey='Value'
            stroke='#8884d8'
            data={getMobilityForecast}
          />

          <Line
            type='monotone'
            name='Actual Mobility'
            dataKey='Value'
            stroke='#82ca9d'
          />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
