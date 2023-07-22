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
  // Helper function to get the week number of a date
  Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  };

  const formatDate = (date) => {
    // Convert the input date to local time zone
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

  // Combine the dates from both datasets into a unique set
  const datesSet = new Set([
    ...filteredActualData.map((entry) => entry.Date),
    ...filteredMobilityForecast.map((entry) => entry.Date),
    ...filteredVMTForecast.map((entry) => entry.Date),
  ]);

  // Create an array of unique dates and sort them in ascending order
  const uniqueDates = [...datesSet].sort((a, b) => new Date(a) - new Date(b));

  const chartData = uniqueDates.map((date) => {
    let forecastVMT = null;
    let forecastMobility = null;

    if (getDataType === "VMT") {
      if (getCategory === "Total") {
        // When VMT and Total are selected together, combine the data for Total
        const vmtForecastEntry = filteredVMTForecast.find(
          (entry) => entry.Date === date
        );
        forecastVMT = vmtForecastEntry?.SumOfValue || null;
      } else {
        // When VMT is selected without Total, show only VMT forecast
        forecastVMT = filteredVMTForecast.find(
          (entry) => entry.Date === date
        )?.SumOfValue;
      }
    } else if (getDataType === "Mobility") {
      const actualDataEntry = filteredActualData.find(
        (entry) => entry.Date === date
      );
      const mobilityForecastEntry = filteredMobilityForecast.find(
        (entry) => entry.Date === date
      );

      forecastMobility = mobilityForecastEntry?.Value || null;

      return {
        Date: date,
        ActualMobility: actualDataEntry?.Value || null,
        ForecastMobility: forecastMobility,
      };
    }

    return {
      Date: date,
      ForecastVMT: forecastVMT,
      ForecastMobility: forecastMobility,
    };
  });

  const aggregateDataByWeek = (data) => {
    const aggregatedData = data.reduce((result, entry) => {
      const date = new Date(entry.Date);
      const year = date.getFullYear();
      const week = date.getWeek();

      const key = `${year}-${week}`;
      if (!result[key]) {
        result[key] = {
          Date: date, // Store the first date of the week
          ActualMobilitySum: 0,
          ActualMobilityCount: 0,
          ForecastMobilitySum: 0,
          ForecastMobilityCount: 0,
          ActualVMTSum: 0,
          ActualVMTCount: 0,
          ForecastVMTSum: 0,
          ForecastVMTCount: 0,
        };
      }

      if (entry.ActualMobility !== null) {
        result[key].ActualMobilitySum += entry.ActualMobility;
        result[key].ActualMobilityCount += 1;
      }

      if (entry.ForecastMobility !== null) {
        result[key].ForecastMobilitySum += entry.ForecastMobility;
        result[key].ForecastMobilityCount += 1;
      }

      if (entry.ActualVMT !== null) {
        result[key].ActualVMTSum += entry.ActualVMT;
        result[key].ActualVMTCount += 1;
      }

      if (entry.ForecastVMT !== null) {
        result[key].ForecastVMTSum += entry.ForecastVMT;
        result[key].ForecastVMTCount += 1;
      }

      return result;
    }, {});

    const chartData = Object.values(aggregatedData).map((entry) => ({
      Date: entry.Date,
      ActualMobility: entry.ActualMobilityCount
        ? entry.ActualMobilitySum / entry.ActualMobilityCount
        : null,
      ForecastMobility: entry.ForecastMobilityCount
        ? entry.ForecastMobilitySum / entry.ForecastMobilityCount
        : null,
      ActualVMT: entry.ActualVMTCount
        ? entry.ActualVMTSum / entry.ActualVMTCount
        : null,
      ForecastVMT: entry.ForecastVMTCount
        ? entry.ForecastVMTSum / entry.ForecastVMTCount
        : null,
    }));

    return chartData;
  };

  // Aggregate data for weekly intervals
  const weeklyChartData = aggregateDataByWeek(chartData);

  // Calculate the interval based on the number of unique dates
  let xAxisInterval = "preserveStartEnd";
  if (uniqueDates.length <= 10) {
    xAxisInterval = "preserveStart";
  }

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

  return (
    <div className='flex flex-col py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        {getDataType === "Mobility" ? "Mobility" : "VMT"} retail and recreation
        (Millions)
      </h1>
      <ResponsiveContainer width='100%' height={470}>
        <LineChart data={weeklyChartData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='Date'
            tickFormatter={formatDate}
            interval={xAxisInterval}
            tick={{ transform: `translate(0, 6)`, fontSize: 10 }}
          />
          <YAxis />
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
