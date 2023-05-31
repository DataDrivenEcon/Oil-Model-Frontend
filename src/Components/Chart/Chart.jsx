import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ allData, getSubregion }) => {
  const initDatas = allData.map((d) => d.data);
  const data = getSubregion === "California" ? initDatas[0] : initDatas[1];

  //   {
  //     region: "us",
  //     subRegion: "california",
  //     data: [
  //       {
  //         name: "Jan",
  //         uv: 4000,
  //         pv: 2400,
  //         amt: 2400,
  //       },
  //       {
  //         name: "Feb",
  //         uv: 3000,
  //         pv: 1398,
  //         amt: 2210,
  //       },
  //       {
  //         name: "Mar",
  //         uv: 2000,
  //         pv: 9800,
  //         amt: 2290,
  //       },
  //       {
  //         name: "Apr",
  //         uv: 2780,
  //         pv: 3908,
  //         amt: 2000,
  //       },
  //       {
  //         name: "May",
  //         uv: 1890,
  //         pv: 4800,
  //         amt: 2181,
  //       },
  //       {
  //         name: "Jun",
  //         uv: 2390,
  //         pv: 3800,
  //         amt: 2500,
  //       },
  //       {
  //         name: "Jul",
  //         uv: 3490,
  //         pv: 4300,
  //         amt: 2100,
  //       },
  //     ],
  //   },
  //   {
  //     region: "us",
  //     subRegion: "texas",
  //     data: [
  //       {
  //         name: "Jan",
  //         uv: 8000,
  //         pv: 1200,
  //         amt: 1200,
  //       },
  //       {
  //         name: "Feb",
  //         uv: 6000,
  //         pv: 2398,
  //         amt: 3010,
  //       },
  //       {
  //         name: "Mar",
  //         uv: 1000,
  //         pv: 3000,
  //         amt: 9200,
  //       },
  //       {
  //         name: "Apr",
  //         uv: 7080,
  //         pv: 9308,
  //         amt: 6000,
  //       },
  //       {
  //         name: "May",
  //         uv: 1890,
  //         pv: 8000,
  //         amt: 3181,
  //       },
  //       {
  //         name: "Jun",
  //         uv: 4390,
  //         pv: 8300,
  //         amt: 5200,
  //       },
  //       {
  //         name: "Jul",
  //         uv: 9340,
  //         pv: 3400,
  //         amt: 1200,
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className='flex flex-col shadow-lg py-[0.4rem]'>
      <h1 className='ml-[4.8rem] pb-2 font-semibold text-[#5e676293] text-lg'>
        VMT retail and recreation (Millions)
      </h1>
      <LineChart
        width={850}
        height={250}
        data={data}
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
