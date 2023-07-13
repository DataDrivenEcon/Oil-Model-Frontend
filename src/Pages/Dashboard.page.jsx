import React, { useEffect, useState } from "react";
import Chart from "../Components/Chart/Chart";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import FilterNab from "../Components/Dashboard/FilterNab";
import ActualTable from "../Components/Dashboard/ActualTable";
import ForecastTable from "../Components/Dashboard/ForecastTable";

const Dashboard = () => {
  const [getCategory, setGetCategory] = useState("Retail and Recreation");
  const [getDate, setGetDate] = useState("M");
  const [getActualMobility, setGetActualMobility] = useState([]);
  const [getMobilityForecast, setGetMobilityForecast] = useState([]);
  const [getVMTForecast, setGetVMTForecast] = useState([]);
  const [getRegion, setGetRegion] = useState("United States");
  const [subRegion, setSubRegion] = useState("");
  const [getDataType, setGetDataType] = useState("Mobility");
  const [tableSize, setTableSize] = useState(2);

  const fetchActualMobility = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleMobility-data?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'&LocationName='${
        subRegion === "" ? getRegion : subRegion
      }'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetActualMobility(data);
    } catch (error) {
      console.error("Error fetching actual mobility data:", error);
    }
  };

  const fetchMobilityForecast = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleMobility-forecast?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'&LocationName='${
        subRegion === "" ? getRegion : subRegion
      }'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetMobilityForecast(data);
    } catch (error) {
      console.error("Error fetching mobility forecast data:", error);
    }
  };

  const fetchVMTData = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleVmt-data?LocationName='${
        subRegion === "" ? getRegion : subRegion
      }'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetActualMobility(data);
    } catch (error) {
      console.error("Error fetching VMT data:", error);
    }
  };

  const fetchVMTForecast = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleVmt-forecast?MonthlyOrWeeklyData='${getDate}'&LocationName='${
        subRegion === "" ? getRegion : subRegion
      }'&GoogleCategory='${getCategory}'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetVMTForecast(data);
    } catch (error) {
      console.error("Error fetching VMT forecast data:", error);
    }
  };

  useEffect(() => {
    if (getDataType === "Mobility") {
      fetchActualMobility();
      fetchMobilityForecast();
      setTableSize(2);
    } else if (getDataType === "VMT") {
      fetchVMTData();
      fetchVMTForecast();
      setTableSize(1);
    }
  }, [getDate, getCategory, subRegion, getDataType]);

  return (
    <div className='w-screen bg-gradient-to-r'>
      <DashboardNav />
      <FilterNab
        setGetCategory={setGetCategory}
        setGetDate={setGetDate}
        setGetRegion={setGetRegion}
        getRegion={getRegion}
        setSubRegion={setSubRegion}
        setGetDataType={setGetDataType}
      />
      <div>
        <div className='mx-[2%]'>
          <Chart
            getActualData={getActualMobility}
            getMobilityForecast={getMobilityForecast}
            getVMTForecast={getVMTForecast}
            getDataType={getDataType}
            getCategory={getCategory}
          />
        </div>
      </div>
      <div className='flex gap-5 items-center mx-[2%]'>
        <ForecastTable
          getCategory={getCategory}
          getAllForecast={
            getDataType === "Mobility" ? getMobilityForecast : getVMTForecast
          }
          getDataType={getDataType}
          subRegion={subRegion}
        />
        {tableSize === 2 &&
          ((getDataType === "Mobility" && (
            <ActualTable
              getCategory={getCategory}
              getActualData={getActualMobility}
              getDataType={getDataType}
            />
          )) ||
            (getDataType === "VMT" && getCategory === "Total" && (
              <ActualTable
                getCategory={getCategory}
                getActualData={getActualMobility}
                getDataType={getDataType}
              />
            )))}
        {getDataType === "VMT" && getCategory === "Total" && (
          <ActualTable
            getCategory={getCategory}
            getActualData={getActualMobility}
            getDataType={getDataType}
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
