import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ allData, getSubregion }) => {
  const initDatas = allData.map((d) => d.data);
  const data = getSubregion === "California" ? initDatas[0] : initDatas[1];

  const updatedData = data?.map((item) => {
    const randomNum = Math.random();
    const updatedPv = item.pv / randomNum;
    const updatedUv = item.uv / randomNum;
    return {
      name: item.name,
      uv: updatedUv,
      pv: updatedPv,
    };
  });
  const newData = [...initDatas];
  newData[getSubregion === "California" ? 0 : 1] = updatedData;
  console.log(newData);

  return (
    <div className='flex flex-col py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        VMT retail and recreation (Millions)
      </h1>
      <ResponsiveContainer width='100%' aspect={9.0 / 1.5}>
        <LineChart
          width={800}
          height={250}
          data={updatedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='pv' stroke='#8884d8' />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
