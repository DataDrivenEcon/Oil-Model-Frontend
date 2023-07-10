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
  const [subRegion, setSubRegion] = useState("Alabama");
  const [getDataType, setGetDataType] = useState("Mobility");

  const fetchActualMobility = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleMobility-data?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'&LocationName='${subRegion}'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetActualMobility(data);
    } catch (error) {
      console.error("Error fetching actual mobility data:", error);
    }
  };

  const fetchMobilityForecast = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleMobility-forecast?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'&LocationName='${subRegion}'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetMobilityForecast(data);
    } catch (error) {
      console.error("Error fetching mobility forecast data:", error);
    }
  };

  const fetchVMTData = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleVmt-data?LocationName='${subRegion}'`;
      const response = await fetch(url);
      const data = await response.json();
      setGetActualMobility(data);
    } catch (error) {
      console.error("Error fetching VMT data:", error);
    }
  };

  const fetchVMTForecast = async () => {
    try {
      const url = `https://gary-eisen-project-backend.vercel.app/googleVmt-forecast?MonthlyOrWeeklyData='${getDate}'&LocationName='${subRegion}'`;
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
    } else if (getDataType === "VMT") {
      fetchVMTData();
      fetchVMTForecast();
    }
  }, [getDate, getCategory, subRegion, getDataType]);

  useEffect(() => {
    if (getDataType === "Mobility") {
      fetchActualMobility();
      fetchMobilityForecast();
    } else if (getDataType === "VMT") {
      fetchVMTData();
      fetchVMTForecast();
    }
  }, [getDate, getCategory, subRegion, getDataType, subRegion]);

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
          />
        </div>
      </div>
      <div className='flex gap-5 items-center mx-[2%]'>
        <ActualTable
          getCategory={getCategory}
          getActualData={getActualMobility}
          getDataType={getDataType}
        />
        <ForecastTable
          getCategory={getCategory}
          getAllForecast={
            getDataType === "Mobility" ? getMobilityForecast : getVMTForecast
          }
          getDataType={getDataType}
          subRegion={subRegion}
        />
      </div>
    </div>
  );
};

export default Dashboard;
