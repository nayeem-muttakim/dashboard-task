import { Area, AreaChart, ResponsiveContainer } from "recharts";
const data = [
  {
    uv: 2000,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 2500,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 350,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },

];
const AreaCard = () => {
  return (
    <>
      <div className="flex justify-between gap-5 my-8">
        {/* card 1 */}
        <div className="card w-1/3 bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">SALE</h2>
            <p>90% </p>
          </div>
          <figure className="w-full">
            <ResponsiveContainer className="w-full" height={200}>
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#5C61F2"
                  fill="#D1D2FB"
                />
              </AreaChart>
            </ResponsiveContainer>
          </figure>
        </div>
        {/* card 2 */}
        <div className="card w-1/3 bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">PROJECTS</h2>
            <p>30%</p>
          </div>
          <figure className="w-full">
            <ResponsiveContainer className="w-full" height={200}>
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#EFBB38"
                  fill="#F8E4AE"
                />
              </AreaChart>
            </ResponsiveContainer>
          </figure>
        </div>
        {/* card 3 */}
        <div className="card w-1/3 bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">PRODUCTS</h2>
            <p>68%</p>
          </div>
          <figure className="w-full">
            <ResponsiveContainer className="w-full" height={200}>
              <AreaChart data={data}>
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#61AE41"
                  fill="#D7EACF"
                />
              </AreaChart>
            </ResponsiveContainer>
          </figure>
        </div>
      </div>
    </>
  );
};

export default AreaCard;
