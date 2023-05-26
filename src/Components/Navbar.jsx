const Navbar = () => {
  return (
    <header className='bg-neutral sticky top-0 z-50'>
      <nav className='mx-[7.5%]'>
        <div className='navbar'>
          <div className='flex-1'>
            <a className='normal-case text-[#ffa500] text-xl'>Brand Name</a>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal gap-1 px-1'>
              <li className='font-inter text-[#ffa500] capitalize'>
                <a>Log in</a>
              </li>
              <li className='font-inter text-[#ffa500] capitalize'>
                <a>Sing Up</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
