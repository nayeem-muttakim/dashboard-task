import { PureComponent } from "react";
import { FiHome } from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Charts = () => {
  return (
    <>
      {/* top */}
      <div className="flex items-center justify-between ">
        <h3 className="text-3xl font-semibold">Chart</h3>
        <div className="text-lg font-semibold breadcrumbs">
          <ul>
            <li>
              <a>
                <FiHome />
              </a>
            </li>
            <li>
              <a>Widgets</a>
            </li>
            <li>Chart</li>
          </ul>
        </div>
      </div>

      {/* cards */}
      <div className="flex justify-between gap-2 my-8">
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

export default Charts;
