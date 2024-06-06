import { Cell, Pie, PieChart } from "recharts";
const COLORS = ["#F4F4F4", "#2C79A1"];

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 700 },
];
const PieCard = () => {
  return (
    <>
      <div className="card flex-1 bg-base-100 shadow">
        <div className="card-body">
          <h2 className="card-title">Total Earning</h2>
        </div>
        <figure className="w-full">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx={200}
              cy={120}
              innerRadius={60}
              outerRadius={80}
              fill="#0088FE"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </figure>
      </div>
    </>
  );
};

export default PieCard;
