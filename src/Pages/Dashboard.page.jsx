import { useEffect, useState } from "react";
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
  useEffect(() => {
    fetch(
      `http://localhost:3000/googleMobility-data?MonthlyOrWeeklyData='${getDate}'&GoogleCategory='${getCategory}'`
    )
      .then((res) => res.json())
      .then((data) => setGetActualMobility(data));
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
          <Chart allData={getActualMobility}></Chart>
        </div>
      </div>
      <div className='flex gap-5 items-center mx-[2%]'>
        <Table
          allData={allData}
          getSubregion={getSubregion}
          getDate={getDate}
        ></Table>
        <VmtTable
          getDate={getDate}
          allData={allData}
          getSubregion={getSubregion}
        ></VmtTable>
      </div>
    </div>
  );
};

export default Dashboard;
