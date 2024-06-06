import { FiHome } from "react-icons/fi";
import CardStats from "./CardStats/CardStats";
import Table from "./Table/Table";
import SideTable from "./SideTable/SideTable";

const DashEcom = () => {
  return (
    <div className="">
      {/* top */}
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold">Ecommerce</h3>
        <div className="text-lg font-semibold breadcrumbs">
          <ul>
            <li>
              <a>
                <FiHome />
              </a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>Ecommerce</li>
          </ul>
        </div>
      </div>
      {/* stats */}
      <div className="flex items-center gap-8">
        {/* left stats */}
        <div className="my-8 ">
          {/* cards */}
          <CardStats />
          {/* table */}
          <div className="overflow-x-auto mt-8 rounded-3xl shadow bg-[#FFFFFF]">
            {/* table header */}
            <div className="px-5 pt-6 flex justify-between">
              <p className="text-[#767CF4] font-semibold bg-[#EEEFFE] w-fit rounded px-4 py-2">
                Our Total Sold
              </p>
              <button className="btn btn-sm bg-black">
                <img
                  className="py-2 rounded-l "
                  src="/menu.png"
                  alt="menu-icon"
                  width={15}
                />
              </button>
            </div>

            {/* table stats */}
            <Table />
          </div>
        </div>
        {/* right stats */}
        <div className="bg-[#FFFFFF] rounded-2xl shadow flex-1">
          {/* side table header */}
          <div className="px-5 pt-6 flex justify-between">
            <p className="text-[#767CF4] font-semibold bg-[#EEEFFE] w-fit rounded px-4 py-2">
              Selling Product
            </p>
            <button className="btn btn-sm bg-black">
              <img
                className="py-2 rounded-l "
                src="/menu.png"
                alt="menu-icon"
                width={15}
              />
            </button>
          </div>
          {/* side table */}
          <SideTable />
        </div>
      </div>
    </div>
  );
};

export default DashEcom;
