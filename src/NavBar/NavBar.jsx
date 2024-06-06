const NavBar = () => {
  return (
    <nav className="navbar bg-base-100 px-8  py-7 drop-shadow-lg">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
        <div className="flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-lg font-semibold bg-inherit">
            <li>
              <details>
                <summary className="hover:bg-inherit ">
                  <span className="bg-[hsl(238,83%,93%)] py-1 px-2 rounded-md text-[#676BF3] ">
                    {" "}
                    Dashboard
                  </span>
                </summary>
                {/* submenus list
                 */}
              </details>
            </li>
            <div className="grid items-center pl-5">
              <div className="bg-black w-[1px] h-4"></div>
            </div>
            <li>
              <details>
                <summary className="hover:bg-inherit">
                  <span className="bg-[#DEDFFC] py-1 px-2 rounded-md text-[#676BF3] ">
                    {" "}
                    Application
                  </span>
                </summary>
                {/* submenus list
                 <ul className="p-2">
                  <li>
                    <a>Submenus</a>
                  </li>
                
                </ul> */}
              </details>
            </li>
            <div className="grid items-center pl-5">
              <div className="bg-black w-[1px] h-4"></div>
            </div>

            <li>
              <details>
                <summary className="hover:bg-inherit ">
                  <span className="bg-[#DEDFFC] py-1 px-2 rounded-md text-[#676BF3] ">
                    {" "}
                    More Pages
                  </span>
                </summary>
                {/* submenus list
                 <ul className="p-2">
                  <li>
                    <a>Submenus</a>
                  </li>
                
                </ul> */}
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 flex gap-10">
        <div className="form-control relative">
          <img
            width={15}
            className="absolute top-5 left-4"
            src="/search.png"
            alt=""
          />
          <input
            type="text"
            placeholder="|  Search Here......"
            className="input bg-[#F6F8FC] w-20  text-lg py-7 px-10 font-medium md:w-auto"
          />
        </div>

        <div className=" flex-1 flex items-center justify-around px-6">
          <button>
            <img width={18} src="/moon.png" />
          </button>
          <button>
            <img width={21} src="/bell.png" />
          </button>
          <button>
            <img width={21} src="/chat.png" />
          </button>
          <button>
            {" "}
            <img width={21} src="/arrow.png" />
          </button>
          <button>
            <img width={21} src="/internet.png" />
          </button>
          <button>
            <img width={30} src="/person.png" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
