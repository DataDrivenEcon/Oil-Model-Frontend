import React, { useEffect, useState } from "react";
import Chart from "../Components/Chart/Chart";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import FilterNab from "../Components/Dashboard/FilterNab";
import Table from "../Components/Dashboard/Table";
import VmtTable from "../Components/Dashboard/VmtTable";

const Dashboard = () => {
  const [allData, setAllData] = useState([]);
  const [getSubregion, setGetSubregion] = useState("california");
  const [getCategory, setGetCategory] = useState("Retail and Recreation");
  const [getDate, setGetDate] = useState("M");
  const [getActualMobility, setGetActualMobility] = useState([]);
  const [getMobilityForecast, setGetMobilityForecast] = useState([]);

  useEffect(() => {
    const fetchActualMobility = async () => {
      try {
        const response = await fetch(
          `https://gary-eisen-project-backend.vercel.app/googleMobility-data?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'`
        );
        const data = await response.json();
        setGetActualMobility(data);
      } catch (error) {
        console.error("Error fetching actual mobility data:", error);
      }
    };

    const fetchMobilityForecast = async () => {
      try {
        const response = await fetch(
          `https://gary-eisen-project-backend.vercel.app/googleMobility-forecast?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'`
        );
        const data = await response.json();
        setGetMobilityForecast(data);
      } catch (error) {
        console.error("Error fetching mobility forecast data:", error);
      }
    };

    fetchActualMobility();
    fetchMobilityForecast();
  }, [getDate, getCategory]);

  return (
    <div className='w-screen bg-gradient-to-r '>
      <DashboardNav />
      <FilterNab
        setGetCategory={setGetCategory}
        setGetDate={setGetDate}
        setGetSubregion={setGetSubregion}
      />
      <div>
        <div className='mx-[2%]'>
          <Chart
            getActualMobility={getActualMobility}
            getMobilityForecast={getMobilityForecast}
          />
        </div>
      </div>
      <div className='flex gap-5 items-center mx-[2%]'>
        <Table
          allData={allData}
          getSubregion={getSubregion}
          getDate={getDate}
        />
        <VmtTable
          getDate={getDate}
          allData={allData}
          getSubregion={getSubregion}
        />
      </div>
    </div>
  );
};

export default Dashboard;
