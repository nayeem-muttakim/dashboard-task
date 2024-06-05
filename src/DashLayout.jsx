import Content from "./Content/Content";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";

const DashLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <NavBar />
        <Content />
      </div>
    </div>
  );
};

export default DashLayout;
