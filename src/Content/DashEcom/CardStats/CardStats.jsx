import { FaDollarSign } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const CardStats = () => {
  return (
    <>
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
              <button className="btn text-white bg-[#5C61F2] rounded-3xl">
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
    </>
  );
};

export default CardStats;
