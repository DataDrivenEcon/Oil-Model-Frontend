import { useEffect, useState } from "react";
import Chart from "../Components/Chart/Chart";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import FilterNab from "../Components/Dashboard/FilterNab";
import Table from "../Components/Dashboard/Table";
import VmtTable from "../Components/Dashboard/VmtTable";

const Dashboard = () => {
  const [allData, setAllData] = useState([]);
  const [getSubregion, setGetSubregion] = useState("california");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  // console.log(allData);

  return (
    <div className='w-screen bg-gradient-to-r '>
      <DashboardNav />
      <div className='mt-1'>
        <div className='flex gap-5 items-center mx-[2%]'>
          <Chart allData={allData} getSubregion={getSubregion}></Chart>
          <Table allData={allData} getSubregion={getSubregion}></Table>
        </div>
      </div>
      <FilterNab setGetSubregion={setGetSubregion} />
      <div className='mx-[2%]'>
        <VmtTable allData={allData} getSubregion={getSubregion}></VmtTable>
      </div>
    </div>
  );
};

export default Dashboard;
