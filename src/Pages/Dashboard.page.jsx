import Chart from "../Components/Chart/Chart";
import DashboardNav from "../Components/Dashboard/DashboardNav";
import FilterNab from "../Components/Dashboard/FilterNab";
import Table from "../Components/Dashboard/Table";

const Dashboard = () => {
  return (
    <div className='w-screen bg-gradient-to-r '>
      <DashboardNav />
      <div className='mt-1'>
        <div className='flex gap-5 items-center mx-[2%]'>
          <Chart></Chart>
          <Table></Table>
        </div>
      </div>
      <FilterNab />
      <div className='mx-[2%]'>
        <Table></Table>
      </div>
    </div>
  );
};

export default Dashboard;
