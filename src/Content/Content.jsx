import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <section className="bg-slate-100 h-[87vh]">
      <Outlet />
    </section>
  );
};

export default Content;
