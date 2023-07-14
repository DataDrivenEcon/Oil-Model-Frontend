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
  const [showActualTable, setShowActualTable] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Get the token from local storage

        if (getDataType === "Mobility") {
          const mobilityDataUrl = `https://gary-eisen-project-backend.vercel.app/googleMobility-data?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'&LocationName='${
            subRegion === "" ? getRegion : subRegion
          }'`;
          const mobilityForecastUrl = `https://gary-eisen-project-backend.vercel.app/googleMobility-forecast?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'&LocationName='${
            subRegion === "" ? getRegion : subRegion
          }'`;

          const [response1, response2] = await Promise.all([
            fetch(mobilityDataUrl, {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
            }),
            fetch(mobilityForecastUrl, {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
            }),
          ]);

          if (!response1.ok || !response2.ok) {
            throw new Error("Error fetching mobility data.");
          }

          const [data1, data2] = await Promise.all([
            response1.json(),
            response2.json(),
          ]);

          setGetActualMobility(data1);
          setGetMobilityForecast(data2);
        } else if (getDataType === "VMT") {
          const vmtDataUrl = `https://gary-eisen-project-backend.vercel.app/googleVmt-data?LocationName='${
            subRegion === "" ? getRegion : subRegion
          }'`;
          const vmtForecastUrl = `https://gary-eisen-project-backend.vercel.app/googleVmt-forecast?MonthlyOrWeeklyData='${getDate}'&LocationName='${
            subRegion === "" ? getRegion : subRegion
          }'&GoogleCategory='${getCategory}'`;

          const [response1, response2] = await Promise.all([
            fetch(vmtDataUrl, {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
            }),
            fetch(vmtForecastUrl, {
              headers: {
                Authorization: `Bearer ${token}`, // Include the token in the headers
              },
            }),
          ]);

          if (!response1.ok || !response2.ok) {
            throw new Error("Error fetching VMT data.");
          }

          const [data1, data2] = await Promise.all([
            response1.json(),
            response2.json(),
          ]);

          setGetActualMobility(data1);
          setGetVMTForecast(data2);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [getDate, getCategory, subRegion, getDataType, getRegion]);

  const handleSetDataType = (dataType) => {
    setGetDataType(dataType);
    setShowActualTable(dataType === "VMT" && getCategory === "Total");
  };

  return (
    <div className='w-screen bg-gradient-to-r'>
      <DashboardNav />
      <FilterNab
        setGetCategory={setGetCategory}
        setGetDate={setGetDate}
        setGetRegion={setGetRegion}
        getRegion={getRegion}
        setSubRegion={setSubRegion}
        setGetDataType={handleSetDataType}
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
        {showActualTable && (
          <ActualTable
            getCategory={getCategory}
            getActualData={getActualMobility}
            getDataType={getDataType}
          />
        )}
        {getDataType === "VMT" && getCategory === "Total" && (
          <ActualTable
            getCategory={getCategory}
            getActualData={getActualMobility}
            getDataType={getDataType}
          />
        )}
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
