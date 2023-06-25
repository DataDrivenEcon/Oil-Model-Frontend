import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <header className='bg-transparent pt-5'>
      <nav className='mx-[7.5%]'>
        <div className='navbar'>
          <div className='flex-1'>
            <a className='normal-case font-semibold text-white text-xl cursor-pointer'>
              Brand Name
            </a>
          </div>
          <div className='flex-none'>
            <ul className='gap-10 items-center menu-horizontal px-1'>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#heroSection'>Home</a>
              </li>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#KeyBenefits'>Key Benefits</a>
              </li>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#about'>About</a>
              </li>

              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#contact'>Contact</a>
              </li>
              <li className='font-inter font-semibold text-white capitalize cursor-pointer'>
                <a href='#Testimonials'>Testimonials</a>
              </li>
              {user ? (
                <div className='dropdown dropdown-end'>
                  <label
                    tabIndex={0}
                    className='btn btn-ghost btn-circle avatar'
                  >
                    <div className='w-10 rounded-full'>
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <Link to={"/mobility-data"}>Mobility Data</Link>
                    </li>
                    {!user.emailVerified && (
                      <li>
                        <Link to={"/verify-email"}>Verify email</Link>
                      </li>
                    )}
                    <li onClick={() => signOut(auth)}>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              ) : (
                <li className='border-1 border-[#ffa500] font-inter font-semibold text-white capitalize cursor-pointer btn btn-outline hover:bg-[#ffa500]'>
                  <Link to='/login'>Log in</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
