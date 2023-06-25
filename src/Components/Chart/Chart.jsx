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

const Chart = ({ allData }) => {
  const formatDate = (date) => {
    const [year, month, day] = date.split("-"); // Assuming date is in the format "YYYY-MM-DD"
    return `${year}-${parseInt(month)}-${parseInt(day)}`;
  };

  const renderCustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip bg-white p-5 rounded-s'>
          <p className='label'>{`${formatDate(label)}`}</p>
          <p className='value'>{`Actual Mobility: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='flex flex-col py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        VMT retail and recreation (Millions)
      </h1>
      <ResponsiveContainer width='100%' aspect={9.0 / 1.5}>
        <LineChart
          width={800}
          height={250}
          data={allData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={"Date"} tickFormatter={formatDate} />
          <YAxis />
          <Tooltip content={renderCustomTooltip} />
          <Legend />
          <Line type='monotone' dataKey='Forecast Mobiltity' stroke='#8884d8' />
          <Line
            type='monotone'
            name='Actual Mobility'
            dataKey='Value'
            stroke='#82ca9d'
          />
          <Brush
            dataKey='Date'
            tickFormatter={formatDate}
            height={10}
            stroke='#8884d8'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
