import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
const DashboardNav = () => {
  const [user] = useAuthState(auth);

  return (
    <header className='bg-[#bdbcbc12]'>
      <div className='mx-[2%]'>
        <div className='navbar rounded-lg  px-2'>
          <div className='flex-1'>
            <Link to='/' className='text-xl capitalize font-semibold'>
              brand name
            </Link>
          </div>
          <div className='flex-none gap-2'>
            <div className='dropdown dropdown-end'>
              <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                <div className='w-8 rounded-full'>
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
              >
                <li onClick={() => signOut(auth)}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
