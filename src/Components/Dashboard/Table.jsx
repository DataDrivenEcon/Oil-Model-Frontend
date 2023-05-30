const Table = () => {
  return (
    <div className='w-full shadow-lg py-2'>
      <p className='pb-2 pl-2 font-semibold text-[#5e676293] '>
        retail and recreation % change from baseline table-VMT
      </p>
      <div className='overflow-x-auto overflow-y-auto max-h-[250px]'>
        <table className='table w-full'>
          <thead className='sticky z-30 top-0'>
            <tr>
              <th>Month</th>
              <th>2020</th>
              <th>2021</th>
              <th>2021</th>
              <th>2023</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Jan</th>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
            </tr>
            <tr>
              <th>Feb</th>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
            </tr>
            <tr>
              <th>Mar</th>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
            </tr>
            <tr>
              <th>April</th>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
            </tr>
            <tr>
              <th>May</th>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
            </tr>
            <tr>
              <th>Jun</th>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
              <td>1020123</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
