import { IoSettingsOutline } from "react-icons/io5";
import { TfiShoppingCart } from "react-icons/tfi";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <section className="bg-[#F6F8FC] h-[87vh] px-9 py-10">
      {/* floating bar */}
      <div className="join join-vertical w-16 fixed right-0 top-1/3 z-10">
        <button className="btn join-item text-2xl text-[#9886F4]">
          <img src="/cup.png" alt="" />
        </button>
        <button className="btn join-item text-2xl text-[#9886F4]">
          <IoSettingsOutline />
        </button>
        <button className="btn join-item  text-white text-2xl bg-[#5C61F2]">
          <TfiShoppingCart />
        </button>
      </div>
      {/* contents */}
      <Outlet />
    </section>
  );
};

export default Content;
