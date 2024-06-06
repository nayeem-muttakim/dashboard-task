import { BsDashLg } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiHome, FiLayout } from "react-icons/fi";
import { GoPeople } from "react-icons/go";
import { GrCube } from "react-icons/gr";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { IoChatbubbleOutline } from "react-icons/io5";
import { LuGitPullRequest } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { RiComputerLine, RiShoppingBag3Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-[#171829] h-screen w-1/6">
      {/* sidebar header */}
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
      <div className="px-10 my-8 text-white text-lg font-semibold ">
        {/* pinned */}
        <div className="border-b-2 border-[#202131] pb-5">
          <h3>PINNED</h3>
          <div id="sidebar" className="collapse collapse-arrow bg-inherit">
            <input type="radio" name="my-accordion-2" />
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
              <NavLink to="/dash-ecom">
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
        {/* widgets */}

        <div id="sidebar" className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <NavLink className="collapse-title" to="/widgets">
            <div className="flex items-center gap-5">
              <HiMiniComputerDesktop
                id="icon"
                className="w-10 h-10 p-2 rounded-md "
              />
              <span>Widgets</span>
            </div>
          </NavLink>

          <div id="sidebar2" className="collapse-content grid gap-4">
            <NavLink to="/widgets">
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
                  <span>General</span>
                </div>
              )}
            </NavLink>
            <NavLink to="/charts">
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
                  <span>Charts</span>
                </div>
              )}
            </NavLink>
          </div>
        </div>
        {/* page layout */}
        <div className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <div className="flex collapse-title items-center gap-5">
            <FiLayout className="w-10 h-10 p-2 rounded-md " />
            <span>Page Layout</span>
          </div>
          <div className="collapse-content grid gap-4"></div>
        </div>

        {/* Project */}
        <div className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <div className="flex collapse-title items-center gap-5">
            <GrCube className="w-10 h-10 p-2 rounded-md " />
            <span>Project</span>
          </div>
          <div className="collapse-content grid gap-4"></div>
        </div>

        {/* File Manager */}
        <Link>
          <div className="flex collapse-title items-center gap-5">
            <LuGitPullRequest className="w-10 h-10 p-2 rounded-md " />
            <span>File Manager</span>
          </div>
        </Link>

        {/* Kanban Board */}
        <Link>
          <div className="flex collapse-title items-center gap-5">
            <RiComputerLine className="w-10 h-10 p-2 rounded-md " />
            <span>Kanban Board</span>
          </div>
        </Link>

        {/* Ecommerce */}
        <div className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <div className="flex collapse-title items-center gap-5">
            <RiShoppingBag3Line className="w-10 h-10 p-2 rounded-md " />
            <span>Ecommerce</span>
          </div>
          <div className="collapse-content grid gap-4"></div>
        </div>

        {/* Email */}
        <div className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <div className="flex collapse-title items-center gap-5">
            <MdOutlineMail className="w-10 h-10 p-2 rounded-md " />
            <span>Email</span>
          </div>
          <div className="collapse-content grid gap-4"></div>
        </div>

        {/* Chat */}
        <div className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <div className="flex collapse-title items-center gap-5">
            <IoChatbubbleOutline className="w-10 h-10 p-2 rounded-md " />
            <span>Chat</span>
          </div>
          <div className="collapse-content grid gap-4"></div>
        </div>

        {/* Users */}
        <div className="collapse collapse-arrow bg-inherit">
          <input type="radio" name="my-accordion-2" />
          <div className="flex collapse-title items-center gap-5">
            <GoPeople className="w-10 h-10 p-2 rounded-md " />
            <span>Users</span>
          </div>
          <div className="collapse-content grid gap-4"></div>
        </div>

        {/* Bookmarks */}
        <Link>
          <div className="flex collapse-title items-center gap-5">
            <FaRegHeart className="w-10 h-10 p-2 rounded-md " />
            <span>Bookmarks</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
