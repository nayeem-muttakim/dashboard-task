import { FiHome } from "react-icons/fi";
import AreaCard from "./AreaChart/AreaCard";
import BarCard from "./BarCard/BarCard";
import PieCard from "./PieCard/PieCard";

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
      <AreaCard />
      <div className="flex gap-5">
        <BarCard />
        <PieCard />
      </div>
    </>
  );
};

export default Charts;
