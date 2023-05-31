import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ allData, getSubregion, getDate }) => {
  const initDatas = allData.map((d) => d.data);
  const data = getSubregion === "California" ? initDatas[0] : initDatas[1];

  const updatedData = data?.map((item) => {
    const randomNum = Math.random(); // Generate a random number between 0 and 1

    // Divide pv and uv by the random number
    const updatedPv = item.pv / randomNum;
    const updatedUv = item.uv / randomNum;

    // Create a new object with updated values
    return {
      name: item.name,
      uv: updatedUv,
      pv: updatedPv,
    };
  });

  // Update the data array with the updatedData
  const newData = [...initDatas];
  newData[getSubregion === "California" ? 0 : 1] = updatedData;
  console.log(newData);

  return (
    <div className='flex flex-col shadow-lg py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        VMT retail and recreation (Millions)
      </h1>
      <LineChart
        width={850}
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
    </div>
  );
};

export default Chart;
