import React, { useState, useEffect } from "react";
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
  // Helper function to get the week number of a date
  const getWeek = function (date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };

  const formatDate = (date) => {
    // Convert the input date to the local time zone
    const localDate = new Date(date);
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
    const shortMonth = months[localDate.getMonth()];
    return `${shortMonth}-${localDate.getFullYear().toString().slice(-2)}`;
  };

  // Combine the dates from both datasets into a unique set
  const datesSet = new Set([
    ...getActualData.map((entry) => entry.Date),
    ...getMobilityForecast.map((entry) => entry.Date),
    ...getVMTForecast.map((entry) => entry.Date),
  ]);

  // Create an array of unique dates and sort them in ascending order
  const uniqueDates = [...datesSet].sort((a, b) => new Date(a) - new Date(b));

  // Define state to store filtered data based on data type and category
  const [filteredChartData, setFilteredChartData] = useState([]);
  const [yAxisDomain, setYAxisDomain] = useState([0, 100]); // Initial Y-axis domain, you can adjust it as needed

  useEffect(() => {
    // Filter and format the data based on data type and category
    const filteredData = uniqueDates.map((date) => {
      let forecastVMT = null;
      let forecastMobility = null;
      let actualVMT = null;
      let actualMobility = null;

      if (getDataType === "VMT") {
        if (getCategory === "Total") {
          // When VMT and Total are selected together, combine the data for Total
          const vmtForecastEntry = getVMTForecast.find(
            (entry) => entry.Date === date
          );
          forecastVMT = vmtForecastEntry?.SumOfValue || null;

          const actualVMTEntry = getActualData.find(
            (entry) => entry.Date === date
          );
          actualVMT = actualVMTEntry?.Value || null;
        } else {
          // When VMT is selected without Total, show only VMT forecast
          forecastVMT = getVMTForecast.find(
            (entry) => entry.Date === date
          )?.SumOfValue;

          // If forecastVMT is not available, fallback to null for consistency
          if (forecastVMT === undefined) {
            forecastVMT = null;
          }
        }
      } else if (getDataType === "Mobility") {
        const actualDataEntry = getActualData.find(
          (entry) => entry.Date === date
        );
        const mobilityForecastEntry = getMobilityForecast.find(
          (entry) => entry.Date === date
        );

        forecastMobility = mobilityForecastEntry?.Value || null;
        actualMobility = actualDataEntry?.Value || null;
      }

      return {
        Date: date,
        ForecastVMT: forecastVMT,
        ForecastMobility: forecastMobility,
        ActualVMT: actualVMT,
        ActualMobility: actualMobility,
      };
    });

    // Filter out dates that have null values for all data fields
    const filteredDataWithoutNull = filteredData.filter(
      (entry) =>
        entry.ActualVMT !== null ||
        entry.ForecastVMT !== null ||
        entry.ActualMobility !== null ||
        entry.ForecastMobility !== null
    );

    // Find the minimum and maximum values of forecasted VMT data
    let minForecastVMT = Infinity;
    let maxForecastVMT = -Infinity;
    filteredDataWithoutNull.forEach((entry) => {
      if (entry.ForecastVMT !== null) {
        minForecastVMT = Math.min(minForecastVMT, entry.ForecastVMT);
        maxForecastVMT = Math.max(maxForecastVMT, entry.ForecastVMT);
      }
    });

    // Adjust the Y-axis domain based on the forecasted data range
    // You can add some buffer to the domain to avoid data points being too close to the top/bottom edge
    const buffer = 0.1;
    const domainMin = Math.max(
      0,
      minForecastVMT - buffer * (maxForecastVMT - minForecastVMT)
    );
    const domainMax =
      maxForecastVMT + buffer * (maxForecastVMT - minForecastVMT);

    setYAxisDomain([domainMin, domainMax]);
    setFilteredChartData(filteredDataWithoutNull);
  }, [
    getActualData,
    getMobilityForecast,
    getVMTForecast,
    getDataType,
    getCategory,
  ]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip bg-white p-4'>
          <p className='label'>{formatDate(label)}</p>
          {payload.map((entry, i) => (
            <p
              key={entry.dataKey + i}
              className='value'
              style={{ color: entry.stroke }}
            >
              <span
                className='color'
                style={{ backgroundColor: entry.stroke }}
              ></span>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const formatYAxisValue = (value) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "m";
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "k";
    } else {
      return value;
    }
  };

  return (
    <div className='flex flex-col py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        {getDataType === "Mobility" ? "Mobility" : "VMT"} retail and recreation
        (Millions)
      </h1>
      <ResponsiveContainer width='100%' height={470}>
        <LineChart data={filteredChartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='Date'
            tickFormatter={formatDate}
            tick={{
              transform: `translate(0, 6)`,
              fontSize: 10,
              color: "#000",
            }}
          />
          <YAxis
            tick={{ fontSize: 14, transform: `translate(-0, 0)` }}
            // angle={getDataType === "VMT" ? -55 : 0}
            domain={yAxisDomain}
            tickFormatter={formatYAxisValue} // Use the custom formatter function
          />

          <Legend />
          {getDataType === "Mobility" && (
            <>
              <Line
                strokeWidth={2.5}
                type='monotone'
                name='Actual Mobility'
                dataKey='ActualMobility'
                stroke='#000'
              />
              <Line
                strokeWidth={2.5}
                type='monotone'
                name='Forecast Mobility'
                dataKey='ForecastMobility'
                stroke='#FF0000'
              />
            </>
          )}
          {getDataType === "VMT" && (
            <>
              {getCategory === "Total" && (
                <Line
                  strokeWidth={2.5}
                  type='monotone'
                  name='Actual VMT'
                  dataKey='ActualVMT'
                  stroke='#000'
                />
              )}
              <Line
                strokeWidth={2.5}
                type='monotone'
                name='Forecast VMT'
                dataKey='ForecastVMT'
                stroke='#FF0000'
              />
            </>
          )}
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
