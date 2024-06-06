import { BsDashLg } from "react-icons/bs";
import { FiHome } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-[#171829] h-screen w-1/6">
      <span className="text-4xl  text-white font-bold px-6 py-9 border-b-2 border-[#202131] flex justify-between items-center">
        Tivo{" "}
        <button>
          <img
            className="p-3 rounded-lg bg-[#2F303F] active:bg-black"
            src="/menu.png"
            alt="menu-icon"
          />
        </button>
      </span>
      {/* sidebar navigation */}
      <div className="px-10 my-8">
        <div className="text-white text-lg font-semibold border-b-2 border-[#202131] pb-5">
          <h3>PINNED</h3>
          <div id="sidebar" className="collapse collapse-arrow bg-inherit">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <NavLink className="collapse-title" to="/">
              <div className="flex items-center gap-5">
                <FiHome id="icon" className="w-10 h-10 p-2 rounded-md " />
                <span>Dashboards</span>
              </div>
            </NavLink>

            <div id="sidebar2" className="collapse-content grid gap-4">
              <NavLink to="/">
                {({ isActive, isPending, isTransitioning }) => (
                  <div
                    className={
                      isActive
                        ? "text-[#4447AB] pl-3 flex items-center gap-5"
                        : "pl-3 flex items-center gap-5"
                    }
                  >
                    {" "}
                    <BsDashLg />
                    <span>Default</span>
                  </div>
                )}
              </NavLink>
              <NavLink to='/dash-ecom'>
                {({ isActive, isPending, isTransitioning }) => (
                  <div
                    className={
                      isActive
                        ? "text-[#4447AB] pl-3 flex items-center gap-5"
                        : "pl-3 flex items-center gap-5"
                    }
                  >
                    {" "}
                    <BsDashLg />
                    <span>Ecommerce</span>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
