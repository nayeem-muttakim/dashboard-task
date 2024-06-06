import { FaDollarSign } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

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
      <div className="my-8">
        {/* cards */}
        <div className="flex gap-7">
          {/* card 1 */}
          <div className="card w-96 h-52 bg-base-100 shadow ">
            <div className="card-body ">
              <p className="text-[#767CF4] font-semibold bg-[#EEEFFE] w-fit rounded px-2">
                Our Total Profit
              </p>
              <h2 className="text-3xl font-semibold py-2">$8,55,462</h2>
              <p className="flex gap-2 font-semibold items-center pt-3">
                <span className="flex items-center font-bold text-lg gap-2 text-[#5C61F2]">
                  {" "}
                  <MdArrowOutward className=" text-2xl  bg-[#EEEFFE] rounded-xl" />
                  79.21%
                </span>{" "}
                More Than last month
              </p>
              <div className="absolute bottom-4 right-6">
                <button className="btn btn-primary bg-[#5C61F2] rounded-3xl">
                  <FaDollarSign />
                </button>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="card w-96 h-52 bg-base-100 shadow ">
            <div className="card-body ">
              <p className="text-[#4EA9D5] bg-[#EDF6FB] w-fit px-2 rounded-md font-semibold">
                Our Total Visitor
              </p>
              <h2 className="text-3xl font-semibold py-2">813K</h2>
              <p className="flex gap-2 font-semibold items-center pt-3">
                <span className="flex items-center font-bold text-lg gap-2 text-[#4EA9D5]">
                  {" "}
                  <MdArrowOutward className=" text-2xl  bg-[#EEEFFE] rounded-xl" />
                  86.94%
                </span>{" "}
                More Than last month
              </p>
              <div className="absolute bottom-4 right-6">
                <button className="btn text-white bg-[#4EA9D5] rounded-3xl">
                  <IoPerson />
                </button>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="card w-96 h-52 bg-base-100 shadow ">
            <div className="card-body ">
              <p className="text-[#61AE41] bg-[#E6F1E1] w-fit rounded-lg px-2 font-semibold">
                Our Total Sold
              </p>
              <h2 className="text-3xl font-semibold py-2">2,41,658</h2>
              <p className="flex gap-2 font-semibold items-center pt-3">
                <span className="flex items-center font-bold text-lg gap-2 text-[#61AE41]">
                  {" "}
                  <MdArrowOutward className=" text-2xl  bg-[#EEEFFE] rounded-xl" />
                  79.21%
                </span>{" "}
                More Than last month
              </p>
              <div className="absolute bottom-4 right-6">
                <button className="btn text-white bg-[#61AE41] rounded-3xl">
                  <FaDollarSign />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* table */}
        <div className="overflow-x-auto mt-8 rounded-3xl shadow bg-[#FFFFFF]">
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
          <table className="table">
            {/* head */}
            <thead>
              <tr className="font-semibold text-xl text-black">
                <th className="text-3xl">Best Seller</th>
                <th>Date</th>
                <th>Product</th>
                <th>Country</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="font-semibold font-">
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">2022</div>
                    </div>
                  </div>
                </td>
                <td>16 August</td>
                <td>Clothes </td>
                <td>United Kingdom</td>
                <td>$1,58,652</td>
                <td>Success</td>
                <th>
                  <button className="btn btn-sm">Edit</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">2021</div>
                    </div>
                  </div>
                </td>
                <td>21 Sept</td>
                <td>Shoes</td>
                <td>America</td>
                <td>$95,025</td>
                <td>Success</td>
                <th>
                  <button className="btn btn-sm">Edit</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">2022</div>
                    </div>
                  </div>
                </td>
                <td>06 March</td>
                <td>Electronics</td>
                <td>South Africa</td>
                <td>$90,155</td>
                <td>Success</td>
                <th>
                  <button className="btn btn-sm">Edit</button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-12 h-12">
                        <img
                          src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">2021</div>
                    </div>
                  </div>
                </td>
                <td>12 February</td>
                <td>Watch</td>
                <td>Austria</td>
                <td>$80,658</td>
                <td>Success</td>
                <th>
                  <button className="btn btn-sm">Edit</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashEcom;
