import { FiHome } from "react-icons/fi";

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
    </div>
  );
};

export default DashEcom;
