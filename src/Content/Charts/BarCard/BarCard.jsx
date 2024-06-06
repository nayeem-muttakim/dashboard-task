import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
const data = [
  {
    uv: 4000,
    pv: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
  },
  {
    uv: 2000,
    pv: 9800,
  },
  {
    uv: 2780,
    pv: 3908,
  },
  {
    uv: 1890,
    pv: 4800,
  },
  {
    uv: 2390,
    pv: 3800,
  },
  {
    uv: 3490,
    pv: 4300,
  },
];
const BarCard = () => {
  return (
    <>
      <div className="card w-2/3 bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Marketing Expenses</h2>
        </div>
        <figure className="w-full">
          <ResponsiveContainer className="w-full" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="" />
              <YAxis />
              <Bar
                dataKey="pv"
                fill="#5E63F2"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#EEB934"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </figure>
      </div>
    </>
  );
};

export default BarCard;
