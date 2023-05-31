const VmtTable = ({ allData, getSubregion }) => {
  const initDatas = allData.map((d) => d.data);
  const datas = getSubregion === "California" ? initDatas[0] : initDatas[1];

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
            {datas?.map((data, i) => (
              <tr key={i}>
                <th>{data.name}</th>
                <td>{data.pv * 9}</td>
                <td>{data.pv * 6}</td>
                <td>{data.pv * 4}</td>
                <td>{data.pv * 8}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VmtTable;
