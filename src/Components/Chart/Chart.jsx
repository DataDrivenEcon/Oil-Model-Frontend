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
} from "recharts";

const Chart = ({
  getActualData,
  getMobilityForecast,
  getVMTForecast,
  getDataType,
  getCategory,
}) => {
  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dates = date?.split("T")[0];
    const [year, month] = dates?.split("-");
    const shortMonth = months[parseInt(month, 10) - 1];
    return `${shortMonth}-${year.slice(-2)}`;
  };

  const filteredActualData = getActualData.filter(
    (entry) => entry.Value !== undefined
  );
  const filteredMobilityForecast = getMobilityForecast.filter(
    (entry) => entry.Value !== undefined
  );
  const filteredVMTForecast = getVMTForecast.filter(
    (entry) => entry.SumOfValue !== undefined
  );

  const showMobilityForecast = getDataType === "Mobility" && true;
  const showVMTForecast = getDataType === "VMT" && true;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip bg-white p-4'>
          <p className='label'>{formatDate(label)}</p>
          {payload.map((entry, i) => (
            <p key={entry.dataKey + i} className='value'>
              <span
                className='color'
                style={{ backgroundColor: entry.stroke }}
              ></span>
              {entry.name}:{" "}
              {getDataType === "Mobility" ? entry.payload.Value : entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className='flex flex-col py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        {getDataType === "Mobility" ? "Mobility" : "VMT"} retail and recreation
        (Millions)
      </h1>
      <ResponsiveContainer width='100%' height={470}>
        <LineChart
          data={filteredActualData}
          // margin={{ top: 10, right: 30, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='Date'
            tickFormatter={formatDate}
            interval='preserveStartEnd'
          />
          <YAxis />
          <Legend />
          {showMobilityForecast && (
            <>
              <Line
                strokeWidth={2.5}
                type='monotone'
                name='Forecast Mobility'
                dataKey='Value'
                stroke='#009688'
                data={filteredMobilityForecast}
              />
              <Line
                strokeWidth={2.5}
                type='monotone'
                name='Actual Mobility'
                dataKey='Value'
                stroke='#FF9800'
                data={filteredActualData}
              />
            </>
          )}
          {showVMTForecast && (
            <>
              <Line
                strokeWidth={2.5}
                type='monotone'
                name='Forecast VMT'
                dataKey='SumOfValue'
                stroke='#009688'
                data={filteredVMTForecast}
              />
              {getCategory === "Total" && (
                <Line
                  strokeWidth={2.5}
                  type='monotone'
                  name='Actual VMT'
                  dataKey='Value'
                  stroke='#FF9800'
                  data={filteredActualData}
                />
              )}
            </>
          )}
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
