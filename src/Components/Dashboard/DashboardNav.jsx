import { Link } from "react-router-dom";
import UserProfile from "../UserProfile";
const DashboardNav = () => {
  return (
    <header className='bg-[#bdbcbc12]'>
      <div className='mx-[2%]'>
        <div className='navbar rounded-lg  px-2'>
          <div className='flex-1'>
            <Link to='/' className='text-xl capitalize font-semibold'>
              ROAD MOBILITY
            </Link>
          </div>
          <div className='flex-none gap-2'>
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
